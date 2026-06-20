# 《FlashAttention 列传》

> FlashAttention 没有发明新的注意力公式，却让已有的公式在长序列上真正跑得动。它的故事不是"我们想出了一个更好的注意力机制"，而是"我们看清楚数据在 GPU 里怎么流，然后重写了算法"——这是一部 IO-aware computing 的微型列传。

---

## 一、技术背景：标准 Attention 的显存墙

自注意力（self-attention）的核心计算是 `softmax(QK^T / √d_k)V`。这个式子干净、强大，但有一个硬伤：Q 和 K 都是 `[N, d]` 的矩阵，QK^T 的结果是 `[N, N]`——序列长度的平方。N=2048 时矩阵有 4M 元素，还好。N=32K 时就有 1B 元素。N=128K 时超过 16B。更不用说 ViT 的高分辨率输入和长视频 patch 序列。

问题不只是计算量。问题在于 GPU 的**内存层次**。标准 Attention 的典型实现流程是：

- 把 Q 和 K 从 HBM（高带宽显存）读到片上 SRAM
- 算 S = QK^T，把完整的 `[N, N]` 中间矩阵 **写回 HBM**（因为 SRAM 装不下大矩阵）
- 再从 HBM 读回 S，算 P = softmax(S)，又**写回 HBM**
- 再从 HBM 读回 P，算 O = PV，再写回

HBM 带宽很大（A100 约 2TB/s），但片上 SRAM 的带宽更大（约 19TB/s），而且延迟低得多。每次把中间矩阵写回 HBM 再读回来，都是 I/O 开销。当 N 变大，HBM 读写量跟着 N² 膨胀，计算反而被 I/O 卡住——这就是 memory-bound 问题。

Transformer 论文发布的时候（2017），大家用几百个 token 的序列长度，N² 不算顶天。到 2021—2022 年，GPT-3 的上下文做到 2048，长文本理解、高分辨率图像、蛋白质序列都在把 N 往大推，memory wall 越来越明显。

---

## 二、核心创新

### 2.1 FlashAttention-1：分块、增量、不落盘

2022 年 5 月，Tri Dao（Stanford）、Dan Fu、Stefano Ermon、Atri Rudra、Christopher Ré 发表 FlashAttention。核心洞察只有一句话：**不要写回完整的 S 和 P 到 HBM**。[^1]

具体怎么做？三个关键技术：

**分块（Tiling）**。把 Q、K、V 切成小块，每次只在 SRAM 里计算一个小块的 softmax。用外层循环遍历 Q 的块，内层循环遍历 K 和 V 的块。每完成一个内层循环，那个块的输出 O 就已经全算好了。

**增量 softmax**。标准 softmax 需要知道全行的最大值才能做数值稳定计算；分块之后，一行被拆成了多个段。FlashAttention 用增量更新的方式：每处理一个新块，用在线算法更新行最大值和指数和，保证最终结果和一次性算完全行完全相同——数值精度不丢失。

**重计算（Recomputation）**。反向传播一般需要存储前向的中间结果（S、P 矩阵）来算梯度。FlashAttention 不存 S 和 P——反向时直接从 HBM 读出 Q、K、V 和前向输出 O，在 SRAM 里重新算一遍 softmax 过程。HBM 存取量从 O(N²) 降到 O(N)。

三个技术合起来的效果：

- **加速**：标准 Attention 比 FlashAttention 慢 2-4 倍（GPT-2 上报告 3× 加速）
- **省显存**：显存占用从 O(N²) 降到 O(N)，GPT-2 中间显存减少约 13 倍
- **数值等同**：不是近似 Attention，是 exact attention，bit-level 匹配标准实现

Dao 在论文里展示，用 FlashAttention 训练 GPT-2，比原 HuggingFace 实现快了 3 倍，且训练 loss 曲线完全重合。[^1]

FlashAttention 的历史作用很特殊。它没有提出新的注意力公式，但改变了注意力的**可实现性**。一个 O(N²) 的算法能不能在长序列上跑，不再只取决于公式是否漂亮，还取决于实现是否 IO-aware。

### 2.2 FlashAttention-2：更好的并行与工作划分

2023 年 7 月，Tri Dao 独自发表 FlashAttention-2。论文标题很直接：《Faster Attention with Better Parallelism and Work Partitioning》。[^2]

FA-2 的主要改进：

**减少非矩阵乘法 FLOPs**。FA-1 的伪代码里有一些 rescaling 和 masking 操作，占了不少指令周期但在数学上可以重排。FA-2 把 softmax 内部的 rescale 合并到矩阵乘法循环里，减少非 matmul 开销。

**优化并行策略**。FA-1 只对 batch 和 head 维度做并行，序列长度维度是串行的。FA-2 把序列长度维度也加入并行——前向时用行间并行，反向时用列间并行——让大 N 场景的 GPU 利用率更高。

**更好的工作划分**。FA-1 用固定大小分块，FA-2 让每个 thread block 动态处理更均匀的负载。

效果：在前向和反向传播上都约 2× 加速；序列长度可以推到 64K；在 A100 上达到理论最大吞吐的约 73%。

FA-2 被 PyTorch 2.0 内置为 `torch.nn.functional.scaled_dot_product_attention` 的默认后端之一，这是它进入主流的关键一步——大多数开发者不需要手动调 FlashAttention，PyTorch 自动在条件满足时分发过去。

### 2.3 FlashAttention-3：新硬件的专项优化

2024 年 7 月，Shah、Dao 等人发表 FlashAttention-3，瞄准 NVIDIA Hopper (H100) 架构的新特性。[^3]

Hopper 带来的新能力：

- **WGMMA**（Warp Group Matrix Multiply-Accumulate）：比上一代 Tensor Core 更高效的矩阵乘法指令
- **TMA**（Tensor Memory Accelerator）：异步数据加载硬件单元，可以在计算进行的同时从 HBM 搬数据到 SRAM
- **FP8**：8 位浮点格式，比 BF16/FP16 更省显存和带宽

FA-3 的设计紧密围绕这三者：

- 用 WGMMA 做分块矩阵乘，最大化 Tensor Core 占用
- 用 TMA 做异步数据预取，把数据搬移和计算完全重叠，消除 I/O 等待
- 在 FP8 数据路径上保持高精度——GEMM 用 FP8 算，softmax 和累加维持 FP32，确保数值精度不因低精度而下降

结果：在 H100 上比 FA-2 再快 1.5-2.0×；在 H100 的基准测试中达到理论最大 FLOPS 的 75%（FP16）和 67%（FP8）。论文还展示了使用 FP8 时，KV cache 可以压缩 4-8 倍——这对大模型推理的内存压力缓解很大。

到 FA-3，FlashAttention 已经不只是"加速 Attention"。它变成了一种**算法-硬件协同设计**的典范：新 GPU 出来，算法跟着硬件特性重写，把每一代硬件的潜力掏出来。

### 2.4 关键数据

| 版本 | 时间 | 核心改进 | 加速比 | 历史作用 |
|------|------|----------|--------|----------|
| FlashAttention-1 | 2022-05 | 分块 + 增量 softmax + 重计算 | 2-4× vs 标准 GPT-2 | 首次证明 exact attention 可 IO-aware |
| FlashAttention-2 | 2023-07 | 并行策略改进 + 减少非 matmul FLOPs | 约 2× vs FA-1 | 成为 PyTorch 默认 Attention 后端 |
| FlashAttention-3 | 2024-07 | H100 WGMMA + TMA + FP8 | 1.5-2× vs FA-2 | 新硬件协同设计的标杆 |

---

## 三、影响与后继

### 3.1 长上下文不再是奢侈品

FlashAttention 最直接的影响，是让长上下文训练从"能做但要花大价钱"变成"正常做"。GPT-4 的 128K、Claude 的 200K、Gemini 的 1M 上下文窗口，都离不开底层高效 Attention 实现。

Llama 3.1 405B 的训练报告里提到了 FlashAttention-2 和 vLLM 的 PagedAttention 作为关键组件。[^4] 这不是说 FlashAttention 发明了长上下文——架构改进、位置编码、微调数据同样重要——但没有它，128K+ 窗口的训练和推理会把 HBM 吃光。

### 3.2 I/O-aware computing 成为设计范式

FlashAttention 的另一个遗产是思维方式的传播。它告诉系统建模者和硬件工程师：一个算法的"理论复杂度"和"实际效率"之间，隔着内存层级。不看数据怎么在 HBM ↔ SRAM ↔ Register 之间流动，优化就只是调参。

此后，许多工作延续了 IO-aware 的思路：

- **Flash-Decoding**：把推理时单个 query 对 KV cache 的 attention 分块并行处理，解决长序列推理时 GPU 利用率低的问题
- **PagedAttention / vLLM**：把 KV cache 分成页，像操作系统管理虚拟内存一样管理显存，减少碎片
- **FlashInfer**：用更灵活的 kernel 融合和调度，统一处理不同 attention 变体和采样策略

这些工作不都叫 FlashAttention，但都继承了它的核心信念：**在硬件上跑得动，理论和工程才算打通**。

### 3.3 与其他 Attention 优化互补

FlashAttention 没有取代稀疏注意力和线性注意力，而是与它们互补。

稀疏注意力（如 Sliding Window、Longformer）在理论上减少计算量；FlashAttention 在实现上减少 I/O。两条路可以合在一起：Sliding Window 已经内建了稀疏性，再用 FlashAttention 的 block-sparse 实现，效率更高。

线性注意力和状态空间模型（如 Mamba、RWKV、RetNet）试图从公式层面把复杂度降到 O(N) 或 O(N log N)，目标是在超长序列上完全绕开 N² 瓶颈。FlashAttention 虽然降低了 N² 的常数，但没有改变复杂度的阶。两者在 2024—2025 年的关系是竞争也是互补：SSM 路线在极长序列上更有理论优势，但 FlashAttention 让 Attention 在"够长但不太极端的序列"上仍是最成熟的选择。

### 3.4 消退或被吸收

到 2026 年，FlashAttention 系列已经深入主流框架的底层，用户很少直接调用——PyTorch、vLLM、TensorRT-LLM、HuggingFace Transformers 都内建了它或它的变体。被吸收本身就是成功：一个优化从论文变成默认实现。

它的名字可能不再频繁出现在发布会上，但每一次长上下文的训练和推理，都在安静地用它。FlashAttention 的终极遗产不是某一行代码，而是一句话：**写算法的人，要看得见硬件里的水流~**

---

## 评曰

FlashAttention 的历史位置，不在注意力公式，而在打通了注意力与现实硬件之间的沟。

标准 Attention 的理论很干净，但落地时长序列的 N² 中间矩阵把 GPU 的显存和带宽压垮。Tri Dao 没有改数学，而是把计算过程拆成块、让数据留在快速的 SRAM 里、用增量 softmax 保证精度不丢。这三件事，让长上下文从实验室变成了每个模型都能做的事。

它的影响不只在 Attention。此后许多高效推理和训练工作——PagedAttention、Flash-Decoding、vLLM——都沿着"搞清楚数据在 HBM 和 SRAM 之间怎么搬"这条路往下走。FlashAttention-3 进一步证明：每一次新硬件架构出现，算法都要跟着重写，才能把硬件的潜力榨出来。这是从纯算法研究到算法-硬件共同进步的关口——FlashAttention 替你守住了~

---

*本篇由终末地工业史官团队编纂：缪尔赛思（系统建模）。*

---


（相关条目：《推理优化》。）

[^1]: Dao et al., "FlashAttention: Fast and Memory-Efficient Exact Attention with IO-Awareness", NeurIPS 2022 / arXiv:2205.14135. https://arxiv.org/abs/2205.14135
[^2]: Dao, "FlashAttention-2: Faster Attention with Better Parallelism and Work Partitioning", arXiv:2307.08691, 2023-07-17. https://arxiv.org/abs/2307.08691
[^3]: Shah et al., "FlashAttention-3: Fast and Accurate Attention with Asynchrony and Low-Precision", arXiv:2407.08608, 2024-07-11. https://arxiv.org/abs/2407.08608
[^4]: Dubey et al., "The Llama 3 Herd of Models", arXiv:2407.21783, 2024-07-31. https://arxiv.org/abs/2407.21783
