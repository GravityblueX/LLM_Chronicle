# 《Megatron-LM 列传》

> Megatron-LM 不是一个大模型，而是一套让大模型"能训出来"的工程框架。在 GPT-2 只有 1.5B 参数、BERT-large 只有 340M 的年代，Megatron-LM 证明了通过巧妙的模型切分，可以把 Transformer 的参数规模推到百亿、千亿级别。它把并行训练从"一台 GPU 不够就多买几台"变成了一门有理论有实现的方法。

---

## 一、技术背景

2018 年 BERT 和 GPT 之后，方向很清楚：更大的模型表现更好。但训练一个大模型远不只是"把参数矩阵做大"。

单张 GPU 的显存是有限的。2018 年的 V100 有 32GB 显存，而一个中等规模的 Transformer 的优化器状态（Adam 需要存一阶矩、二阶矩和梯度）、激活值和参数本身，加在一起很容易超过这个数。把 batch size 缩小可以缓解，但 batch 太小又会让 GPU 算不满。

当时已有的并行方法有各自的局限：

- **数据并行**（Data Parallelism）：每张卡持有完整模型，数据切分。All-reduce 通信量等于参数量乘以 GPU 数，GPU 数量一大通信就爆炸。
- **流水线并行**（Pipeline Parallelism）：把模型按层切成多段，每段放一张卡。朴素实现会有大量"气泡"（bubble），GPU 闲等前一段的输出。

2018—2019 年，OpenAI 训练 GPT-2 1.5B 用了 32 块 GPU，Google 训练 BERT 用 TPU pod。但怎么在通用 GPU 集群上高效训练更大的 Transformer，还没有系统化的开源方案。NVIDIA 的 Megatron-LM 正是在这个缺口上出现的。

---

## 二、核心创新

### 2.1 Megatron-LM v1：把 Attention 和 FFN 沿模型并行维度切分

2019 年 9 月，Shoeybi 等人发表《Megatron-LM: Training Multi-Billion Parameter Language Models Using Model Parallelism》。[^1]

论文的核心思路不是提出一个新的并行方式，而是找对 Transformer 内部结构最合适的切分策略：

- **对自注意力头做切分**。多头注意力的每个头天然独立——Q、K、V 的投影矩阵可以沿"头数"维度切成多份，每张 GPU 持有部分头。计算完成后，各 GPU 只需在输出投影矩阵的列方向做一次 all-reduce。
- **对 FFN 的两层做切分**。FFN 是 `W₂(GeLU(W₁x))` 的结构。Megatron 把 W₁ 沿列切开，W₂ 沿行切开。这样 GeLU 的输入和输出都在本地完成，不需要通信；只在最后做一次 all-reduce。

这个方案的关键优势：**通信只在 attention 和 FFN 的末端各发生一次**，中间大量计算完全本地。相比数据并行的每层 all-reduce，通信量大幅下降。

论文用这个方案，在 8 张 V100（每张 32GB）上训练了 8.3B 参数的 GPT-2 风格语言模型，在 512 张 V100 上训练了 83 亿参数的模型，并展示了在 Wikitext-103、LAMBADA、RACE 等基准上的性能提升。

Megatron-LM v1 的历史作用：**首次证明模型并行可以在不修改模型结构的前提下，线性扩展 Transformer 的参数量**。它不是把问题推给更大的 GPU，而是用数学上的等价变换把矩阵切分到多张 GPU 上。

### 2.2 Megatron-LM v2：张量并行 + 流水线并行的融合

2020 年，Narayanan 等人提出 Megatron-LM v2，把张量并行（TP）和流水线并行（PP）组合成一个统一的并行策略。[^2]

- **张量并行**（Tensor Parallelism）就是 v1 的做法：把矩阵运算在单层内部切分，通信在层内完成。优点是高效、延迟低；缺点是通信量与 GPU 数相关，适合同节点内的 NVLink 互联。
- **流水线并行**（Pipeline Parallelism）：把模型按层切成多段，每段放在不同的 GPU 上。v2 的关键改进是 **1F1B（one-forward-one-backward）调度**——不再是先全部前向再全部反向，而是交错执行：做完一个 micro-batch 的前向后立刻开始下一个 micro-batch 的前向和上一个的反向，减少流水线气泡。

v2 还引入了 **交错流水线**（interleaved pipeline），让每个 GPU 不只处理连续的若干层，而是处理分散的层块（如 GPU 1 负责层 1,2,9,10，GPU 2 负责层 3,4,11,12）。这样每个 GPU 的工作量更均匀，气泡更少。

组合策略：节点内用 TP（高带宽 NVLink 撑得住通信），节点间用 PP（跨节点通信量小）。两种并行各自处理最适合的通信粒度。

Megatron-LM v2 在 A100 集群上证明了 1T 参数模型可以在数千张 GPU 上高效训练，把理论效率（模型 FLOPS 利用率）推到了 50% 以上。

### 2.3 Megatron-LM v3：序列并行与其他优化

2021 年，Korthikanti 等人发布了 Megatron-LM 的第三版主要技术报告，聚焦于更多减少显存占用的技术。[^3]

- **序列并行**（Sequence Parallelism）：在张量并行的基础上，把 layer norm 和 dropout 的激活值也沿序列长度维度切分。因为这些操作与序列长度成正比，在大 batch / 长序列场景下能省不少显存。结合 TP 已有的通信模式，只需要在 layer norm 前后各加一次 all-gather 和 reduce-scatter。
- **选择性激活重计算**（Selective Activation Recomputation）：只重计算显存占用大的操作（如 attention 的 softmax 和 dropout），不重计算计算量大的操作（如 GEMM），在显存和速度之间取平衡。

这些优化让 Megatron-LM 可以在同等显存预算下训练更大的模型或更长的序列。论文称，结合 TP、SP 和选择性重计算后，与纯 TP 相比，显存节省约 5 倍，且对训练速度影响很小。

### 2.4 Megatron-Turing NLG：千亿参数的正名之作

2021 年底，NVIDIA 和 Microsoft 联合发布 Megatron-Turing NLG 530B——一个 5300 亿参数的语言模型，使用了 Megatron-LM 框架配合 Microsoft 的 DeepSpeed 在 NVIDIA Selene 和 Azure NDv4 集群上训练。[^4]

MT-NLG 是当时已公开的最大密集语言模型之一。论文特别强调了训练稳定性——用 Megatron 的并行策略和训练过程监控，在数千张 A100 上稳定训练了 530B 参数模型，并报告 zero-shot/few-shot 性能超过 GPT-3 175B。

这也是 Megatron-LM 的"能力证明"：不是纸面设计，而是真的把 530B 密集模型训出来了。

### 2.5 关键数据

| 版本 / 事件 | 时间 | 核心贡献 | 历史作用 |
|------|------|----------|----------|
| Megatron-LM v1 | 2019-09 | 沿 attention head + FFN 列/行切分 | 首次为 Transformer 设计高效张量并行 |
| Megatron-LM v2 | 2020 | TP + PP 融合，1F1B 调度，交错流水线 | 使千亿参数模型在数千 GPU 上高效训练成为可能 |
| Megatron-Turing NLG | 2021-10 | 530B 参数密集模型训练成功 | 证明框架可承载当时最大级别的密集模型 |
| Megatron-LM v3 | 2021 | 序列并行 + 选择性激活重计算 | 进一步压缩显存，使更大模型 / 更长序列成为可能 |

---

## 三、影响与后继

### 3.1 大模型训练的默认并行工具箱

到 2026 年，Megatron-LM 的张量并行思路已经成为几乎所有大模型训练框架的标准组件。

- **DeepSpeed**：Microsoft 的 ZeRO 优化主要在数据并行层面做显存优化（切分优化器状态、梯度、参数），与 Megatron 的张量并行是互补关系。实际大批训练中常见 Megatron-style TP + DeepSpeed ZeRO 的组合。
- **Colossal-AI**：提供了更灵活的张量并行抽象，包括 2D、2.5D、3D 并行，但其 1D 并行与 Megatron 的 TP 思路一脉相承。
- **PyTorch FSDP + TP**：PyTorch 在 2.x 版本中把 FSDP（类似 ZeRO-3）和张量并行都内建了，API 设计受到 Megatron 的影响。
- **Megatron-Core**：NVIDIA 把 Megatron-LM 的核心组件抽取为 Megatron-Core 独立库，成为 NeMo 框架的底层训练引擎，也是 Llama 3、Nemotron 等模型的训练基础设施之一。

### 3.2 并行策略的组合论

Megatron-LM 最重要的思想遗产是**"并行不是只有一种"**。它教会行业：DP（数据并行）、TP（张量并行）、PP（流水线并行）、SP（序列并行）是四种不同的武器，各自适合不同的通信带宽和模型结构。最优策略不是选一种，而是把它们组合起来——节点内 TP，节点间 DP 或 PP，根据模型大小和硬件拓扑动态调整。

这个"并行维度空间"的思维方式，比任何单次实现更持久。后来的所有大模型训练方案（不管是 GPT-4、Llama 405B 还是 DeepSeek-V3）都在这个维度空间里找自己最优的那一点。

### 3.3 与 MoE 的对话

Megatron-LM 最初是为密集 Transformer 设计的。但在 MoE 兴起后，框架也做了适配。MoE 的多专家天然适合与张量并行结合——每个专家的 FFN 可以独立切分，而 router 和 attention 层的通信模式与密集模型类似。

Megatron-Core 和 DeepSpeed-MoE 都沿用了类似的并行策略来处理 MoE 专家分布。可以说，Megatron 为 MoE 的系统落地提前准备好了路。

### 3.4 被吸收而非保留边界

Megatron-LM 作为一个独立开源项目仍在维护，但它的核心思想已经被更广泛地吸收。Tensor Parallelism 不再是"NVIDIA 的专利方法"，而是 PyTorch 和每个大模型训练代码库的基础选项。

框架的寿命往往比模型短。Megatron-LM 的历史位置恰恰在于它解决的不是某一个模型的问题，而是"Transformer 怎么切"这个通用问题。只要 Transformer 还在，切分它的方法就会沿着 Megatron 开的路继续演化~

---

## 评曰

Megatron-LM 的贡献，是把大模型训练从"买更大的 GPU"变成"用聪明的切分在一群 GPU 上跑"。

在这之前，模型做不大是因为单卡装不下。数据并行通信太重，朴素流水线 bubble 太大。Megatron 找到 Transformer 内部的切分缝隙——注意力头天然并行、FFN 的乘法和激活函数天然可分——然后用张量并行把矩阵沿着这些缝隙切开。

它的持久影响不在于某一版代码，而在于一个洞察：**模型的数学结构里藏着并行的钥匙，找到钥匙，硬件就不必跟着参数一起膨胀。** 从 2019 年的 8.3B 到后来的 530B 乃至万亿参数，每一次规模跃迁，底层都有 Megatron 思路的影子。不是它发明了并行——而是它第一次把并行做成了可以复用的、可组合的、与模型结构共生的训练原语~

---

*本篇由终末地工业史官团队编纂：缪尔赛思（系统建模）。*

---

[^1]: Shoeybi et al., "Megatron-LM: Training Multi-Billion Parameter Language Models Using Model Parallelism", arXiv:1909.08053, 2019-09-17. https://arxiv.org/abs/1909.08053
[^2]: Narayanan et al., "Efficient Large-Scale Language Model Training on GPU Clusters Using Megatron-LM", SC 2021 / arXiv:2104.04473. https://arxiv.org/abs/2104.04473
[^3]: Korthikanti et al., "Reducing Activation Recomputation in Large Transformer Models", MLSys 2023 / arXiv:2205.05198. https://arxiv.org/abs/2205.05198
[^4]: Smith et al., "Using DeepSpeed and Megatron to Train Megatron-Turing NLG 530B, A Large-Scale Generative Language Model", arXiv:2201.11990, 2022-01-28. https://arxiv.org/abs/2201.11990
