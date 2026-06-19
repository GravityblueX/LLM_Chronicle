# 《Mamba 列传》

> Mamba（2023-12）是一种架构——不是模型，不是产品，是一种处理序列的替代方式。Albert Gu 和 Tri Dao 提出的选择性状态空间模型（Selective SSM）把序列建模的计算复杂度从 Transformer 的 O(n²) 压到了 O(n)，同时保持了与 Transformer 可比的建模质量。截至 2026 年中，Mamba 还没有取代 Transformer；但它是"后 Transformer 时代"最重要的技术探索——它证明了线性复杂度的序列模型可以真正竞争，并与 RWKV、xLSTM、Jamba 一起构成了"非 Transformer 路线"的全部阵容。

---

## 一、技术背景

Transformer 自 2017 年以来统治了序列建模。但它的核心机制——自注意力——有一个数学上无法回避的成本：每处理一个序列，每个 token 都要和其他所有 token 计算注意力权重，复杂度是 O(n²)（详见《Attention 列传》《Transformer 列传》）。

这个平方复杂度在短序列上不是问题。对于几百个 token 的句子，O(n²) 的计算量在现代 GPU 上轻松搞定。但当序列长度增长到几千、几万甚至几十万——长文档、高分辨率图像、长视频、基因组序列——O(n²) 就变成了硬障碍。FlashAttention 通过优化 GPU 内核的 I/O 路径缓解了这个问题，但没有改变复杂度本身。[^1]

另一条路是从根本上换架构。自 Transformer 诞生以来，研究者一直在寻找线性复杂度 O(n) 的替代方案：

- **线性注意力**（Linear Attention，2020）：把 softmax 注意力换成核函数近似，把复杂度从 O(n²) 降到 O(n)，但实验效果始终不如标准注意力。[^2]
- **RWKV**（2023）：把 Transformer 的注意力机制替换成一种类似 RNN 的递推公式，可以并行训练、递推推理，复杂度为 O(n)。[^3]
- **状态空间模型（SSM）**：用连续时间的动力系统来建模序列——这是 Mamba 的直接前身。

SSM 路线的关键人物是 **Albert Gu**。2022 年 1 月，当时在 CMU 做博士研究的 Gu 发表了 **S4（Structured State Spaces for Sequence Modeling）**。[^4] S4 用一个线性常微分方程来描述序列的状态演化，通过特殊的矩阵结构（HiPPO 初始化）解决了长程依赖问题。S4 在长序列任务（如 Path-X，序列长度 16384）上的表现震惊了领域——在这些任务上 Transformer 因为 O(n²) 根本跑不起来，S4 却能轻松处理。[^4]

但 S4 有一个严重缺陷：**它的状态转移是时不变的（time-invariant）。** 不管输入什么 token，系统用同一组参数来转移状态。这让 S4 在需要"选择性"的任务上表现不佳——比如语言建模中的关键词捕捉、信息检索中的相关内容过滤。S4 在长程依赖任务上很强，但在语言建模这个核心任务上始终追不上 Transformer。

Mamba 要解决的就是这个问题：**能不能在保持线性复杂度的同时，让状态空间模型学会"选择"？**

---

## 二、核心创新

### 2.1 选择性状态空间模型（Selective SSM / S6）

Mamba 的核心创新是把 S4 的**时不变**参数变成**时变的、输入依赖的**。[^5]

在标准 SSM 中，系统的状态方程是：

```
h_t = A·h_{t-1} + B·x_t
y_t = C·h_t
```

其中 A、B、C 是固定的矩阵——不管输入什么，转移规则不变。Gu 把 B、C 和时间步长 Δ 改为**输入 x 的函数**：B = B(x_t), C = C(x_t), Δ = Δ(x_t)。[^5]

这个改动的含义很直觉：模型可以根据当前输入的内容来决定"保留多少过去的信息、忽略多少、把新信息注入多少"。在处理"猫坐在垫子上"时，"猫"这个 token 可能需要被强烈记住（因为它是主语），而"在"这个功能词可能只需要被轻度记住。选择性机制让模型可以做这种区分。

Gu 和 Dao 给这种输入依赖的 SSM 起了一个名字叫 **S6（Selective Structured State Space，S 的上标 6 代表 six-S 的缩写）**，以区别于原来的 S4。[^5]

### 2.2 硬件感知的扫描算法

参数变成输入依赖后，一个工程问题随之出现：S4 能高效训练是因为它的时不变性允许用 FFT（快速傅里叶变换）做卷积——而卷积在 GPU 上非常快。输入依赖之后，这个卷积捷径不再可用。

**Tri Dao**——FlashAttention 的作者——解决了这个问题（详见《Attention 列传》）。[^1][^5] 他设计了一种**硬件感知的并行扫描算法**（hardware-aware parallel scan），把选择性 SSM 的前向和反向传播映射到 GPU 的内存层级上：在 SRAM（片上高速缓存）里做状态转移的核心计算，避免频繁读写 HBM（高带宽显存）。

这个设计哲学与 FlashAttention 完全一致：不是换数学公式，而是让公式的计算过程适应硬件的实际特性。结果是，选择性 SSM 的训练速度可以匹敌 Transformer + FlashAttention 的组合，而推理时具有线性复杂度的优势。

### 2.3 架构：把 SSM 塞进 Transformer 的形状

Mamba 的整体架构借鉴了 Transformer 的设计语言，但用 SSM 替代了注意力。[^5]

每个 Mamba 层包含：
- 线性投影（扩展维度）
- 一维因果卷积（局部上下文）
- 选择性 SSM 层（长程依赖）
- 门控输出

这种"Transformer 形状、SSM 内核"的设计让 Mamba 可以像 Transformer 一样堆叠、用残差连接、做深层网络，同时内部用线性复杂度的 SSM 来替代平方复杂度的注意力。

### 2.4 关键数据

| 指标 | 数值 | 说明 |
|------|------|------|
| 论文发布日期 | 2023-12-01 | arXiv:2312.00752[^5] |
| 作者 | Albert Gu (CMU), Tri Dao (Princeton) | S4 创始人 + FlashAttention 创始人 |
| 参数规模（Mamba-130M 到 Mamba-2.8B） | 130M — 2.8B | 论文测试了多个规模 |
| 训练数据 | The Pile（约 300B token） | 标准开源预训练数据[^5] |
| 时间复杂度 | O(n) | 线性，vs Transformer 的 O(n²) |
| 推理效率 | 比同规模 Transformer 快 5× | 长序列上优势更大[^5] |
| 关键基准（语言建模） | 与同等规模 Transformer 匹配 | 在多个规模上验证[^5] |

论文报告，Mamba 在语言建模（The Pile perplexity）上与同等参数量的 Transformer 持平，在基因组和音频等长序列任务上显著优于 Transformer。更关键的是，Mamba 的生成速度（推理吞吐量）比同规模 Transformer 快约 5 倍，且随着序列长度增长优势更加明显。[^5]

---

## 三、影响与后继

### 3.1 Mamba-2：SSM 与 Attention 的统一

**2024 年 5 月**，Gu 和 Dao 发表 **Mamba-2**，论文标题直截了当：《Transformers are SSMs: Generalized Models and Efficient Algorithms Through Structured State Space Duality》。[^6]

Mamba-2 的核心发现是：**SSM 和注意力不是两种互斥的方法，而是同一个数学框架的两个面。** 论文证明了一种结构化状态空间对偶性（Structured State Space Duality，SSD），表明 Transformer 的注意力矩阵可以被视为一种特殊的 SSM 状态转移，而 SSM 的选择性机制可以被视为一种结构化的注意力。[^6]

这个统一视角不仅有理论意义，还带来了工程收益：Mamba-2 在保持线性复杂度的同时，比 Mamba-1 快 2-8 倍，并且可以利用 GPU 的张量核心（Tensor Cores）来加速计算——这是原来 Mamba-1 做不到的。

### 3.2 非 Transformer 路线家族

Mamba 不是孤立的技术探索。到 2024-2025 年，它与另外几条路线共同构成了"非 Transformer 架构"的研究前沿：

| 架构 | 提出者 | 时间 | 路线 | 关键特征 |
|------|--------|------|------|----------|
| RWKV | Bo Peng（彭博） | 2023-04 | RNN 式 | 线性复杂度，可并行训练，递推推理，无注意力[^3] |
| Mamba | Gu & Dao | 2023-12 | SSM 式 | 选择性状态空间，线性复杂度，硬件感知[^5] |
| xLSTM | Sepp Hochreiter 等 | 2024-05 | LSTM 复兴 | 在经典 LSTM 上引入指数门控和矩阵记忆，试图用现代技术"复活"循环网络[^7] |
| Jamba | AI21 Labs | 2024-03 | 混合式 | SSM 层与 Transformer 注意力层交替堆叠，兼顾线性复杂度和注意力的表达力[^8] |

这四条路线共享一个基本判断：**Transformer 的 O(n²) 注意力不一定是序列建模的终极答案。** 但它们对"替代方案是什么"给出了不同的回答。RWKV 回到 RNN 的递推结构，Mamba 用连续时间动力系统建模，xLSTM 复兴经典循环网络，Jamba 则采取折中——把 SSM 和注意力混在一起。

Jamba 的混合路线在 2024-2025 年获得了一定的商业关注。AI21 Labs 将其定位为企业级长上下文模型的核心架构，声称在长文档处理上比纯 Transformer 模型更高效。[^8] 但整体而言，截至 2026 年中，没有任何非 Transformer 架构在通用语言建模上完全取代了 Transformer。

### 3.3 Mamba 生态的快速扩展

Mamba 论文发布后，社区迅速在多个领域复现和扩展了 SSM 架构：

- **视觉 Mamba（Vim、VMamba 等）**：把 Mamba 应用于图像分类和视觉理解，用序列扫描替代 Vision Transformer 的注意力。[^9]
- **多模态 Mamba**：在视觉-语言模型中用 Mamba 替代 Transformer 作为骨干。
- **长序列应用**：基因组学、音频处理、长视频理解——这些序列长度远超 NLP 标准任务的领域，是 Mamba 最自然的应用场景。

但这些扩展大多是研究探索，尚未形成 Mamba 特有的"生态"——不像 Transformer 有 HuggingFace Transformers、PyTorch 原生支持、FlashAttention 内核优化那样成熟的工程基础设施。这是 Mamba 在 2026 年尚未取代 Transformer 的重要原因之一：不是数学上不行，是工程生态没跟上。

### 3.4 为什么 Transformer 仍然稳坐

截至 2026 年中，前沿大模型——GPT-4/o、Claude、Gemini、Llama 3、Qwen 2.5/3、DeepSeek-V3——仍然基于 Transformer 或其变体。Mamba 虽然在理论上和小规模实验上展示了竞争力，但在最大规模的模型训练中尚未被验证。

原因是多层面的：

1. **工程惯性**：Transformer 的训练基础设施已经极度成熟——从分布式训练框架到 GPU 内核优化，从数据加载管线到推理部署工具。换架构意味着重建整条工程链。
2. **Scaling law 的证据缺失**：Transformer 的 scaling law 已经被反复验证（Kaplan 2020、Chinchilla 2022）。Mamba 的 scaling law 仍然缺乏大规模实证——没人知道把 Mamba 堆到几千亿参数时会发生什么。
3. **注意力的"选择权"**：注意力机制有一种特殊的优势——每个 token 可以直接"看到"序列中的任何其他 token，不受距离限制。SSM 的状态传递虽然也理论上可以处理长程依赖，但信息必须经过中间每一步的状态转移，可能在深层网络中出现信息瓶颈。

不过，Jamba 式的混合路线指出了一个可能的未来：不是"SSM 替代注意力"，而是"SSM 处理大部分计算、注意力处理需要精确回溯的关键层"。这种折中可能才是最终的落地方案。

---

## 评曰

Mamba 的历史位置，不在于它是否取代了 Transformer——截至 2026 年，它还没有。它的历史位置在于，**它证明了 Transformer 不是唯一的答案。**

在 Mamba 之前，"非 Transformer 路线"的研究者面临一个近乎信仰层面的压力：Transformer 的 O(n²) 注意力是不是某种不可替代的必要？规模定律、涌现能力、多模态扩展——所有这些都是在 Transformer 上验证的。难道说，只要想做大、做好，就非它不可？

Mamba 回答了：不。线性复杂度的序列模型可以在语言建模上匹敌 Transformer，可以在长序列上超越它，可以在推理速度上碾压它。从 Albert Gu 2022 年的 S4 到 2023 年的 Mamba，这条路线的推进速度表明——限制不是数学上的，而是工程上的。当选择性机制被引入、当硬件感知的算法被设计出来，状态空间模型就从"长序列特供"变成了"通用建模的有力竞争者"。

在更大的脉络里，Mamba 是大模型架构演化的一个重要信号：**地基不是永恒的。** Transformer 从 2017 年开始统治了近十年，但统治不等于永远。历史上没有哪个架构是永远的。RNN 统治了三十年，被 Transformer 取代；CNN 统治了视觉十年，被 ViT 挑战。Transformer 是否会在某一天被 Mamba 或其后继者取代？不知道。但 Mamba 至少证明了：答案不是"不可能"，而是"还没发生"。

---

*本篇由终末地工业史官团队编纂：赫默（列传主笔）。*

---

[^1]: Dao et al., "FlashAttention: Fast and Memory-Efficient Exact Attention with IO-Awareness", NeurIPS 2022 / arXiv:2205.14135. https://arxiv.org/abs/2205.14135
[^2]: Katharopoulos et al., "Transformers are RNNs: Fast Autoregressive Transformers with Linear Attention", ICML 2020 / arXiv:2006.16236. https://arxiv.org/abs/2006.16236
[^3]: Peng et al., "RWKV: Reinventing RNNs for the Transformer Era", EMNLP 2023 / arXiv:2305.13048. https://arxiv.org/abs/2305.13048
[^4]: Gu, Goel, Ré, "Efficiently Modeling Long Sequences with Structured State Spaces", ICLR 2022 / arXiv:2111.00396. https://arxiv.org/abs/2111.00396
[^5]: Gu, Dao, "Mamba: Linear-Time Sequence Modeling with Selective State Spaces", arXiv:2312.00752, 2023-12-01. https://arxiv.org/abs/2312.00752
[^6]: Dao, Gu, "Transformers are SSMs: Generalized Models and Efficient Algorithms Through Structured State Space Duality" (Mamba-2), arXiv:2405.21060, 2024-05-31. https://arxiv.org/abs/2405.21060
[^7]: Beck et al., "xLSTM: Extended Long Short-Term Memory", arXiv:2405.04517, 2024-05-07. https://arxiv.org/abs/2405.04517
[^8]: Lieber et al., "Jamba: A Hybrid Transformer-Mamba Language Model", arXiv:2403.19887, 2024-03-28. https://arxiv.org/abs/2403.19887
[^9]: Zhu et al., "Vision Mamba: Efficient Visual Representation Learning with Bidirectional State Space Model", arXiv:2401.09417, 2024-01. https://arxiv.org/abs/2401.09417
