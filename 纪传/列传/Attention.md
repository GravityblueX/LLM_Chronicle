# 《Attention 列传》

> Attention（注意力机制）不是某一个模型，而是一种让神经网络学会"看哪里"的方法。它从机器翻译的辅助工具出发，先变成序列建模的主干，再通过 FlashAttention 解决"看得起但算不起"的现实瓶颈。这条路从 2014 年走到 2024 年，恰好十年。

---

## 一、技术背景

2014 年以前，神经机器翻译的主流是 encoder-decoder 加 RNN/LSTM。编码器把源句压成一个固定长度的向量，解码器再从这个向量生成译文。Cho 等人在 2014 年提出 RNN Encoder-Decoder 框架时，用的就是这种设计。[^1]

问题出在"固定长度向量"这一步。无论输入句子多长，编码器都只能给解码器一个固定大小的上下文。句子长到一定程度，信息就会丢失——像把一整页纸缩成一行字，早期内容被挤掉。这被 Sutskever 等人称为 LSTM 的长序列瓶颈。[^2]

这是 Attention 出生的土壤。人们需要一种机制，让解码器在生成每个词时都能回看输入句子的不同部分，而不是只盯着一个压缩向量。

---

## 二、核心创新

### 2.1 Bahdanau Attention：让解码器学会"回看"

2014 年 9 月，Bahdanau、Cho、Bengio 发表论文《Neural Machine Translation by Jointly Learning to Align and Translate》。他们提出：解码器生成每个目标词时，不是只看一个固定的编码向量，而是根据当前状态，对编码器所有隐藏状态做一个加权求和。[^3]

这个加权求和，就是 Attention。权重表示"当前要生成的词，应该多关注源句的哪些位置"。训练时，模型自己学会对齐——不需要人工标注哪两个词对应。

Bahdanau Attention 的具体做法是 additive attention：把解码器状态和编码器状态拼起来，过一个全连接层再 softmax 得到权重。它不复杂，却把翻译质量推上一个台阶，更重要的是把"注意力"这个想法带进了序列模型。

### 2.2 Luong Attention：更简单的点积变体

2015 年，Luong、Pham、Manning 提出几种更直接的 Attention 变体。他们证明，不用加性网络也可以；直接把解码器状态和编码器状态做点积，效果就很好。[^4]

论文比较了三种分数计算方式：dot（点积）、general（加一个可学习权重矩阵）、concat（类似 Bahdanau 的加性方案）。其中 general 方案在许多实验里表现最优。

Luong Attention 还区分了"全局注意力"（看全部源位置）和"局部注意力"（只看一个窗口）。这是后来稀疏注意力和窗口注意力的早期影子。不过当时大家最关心的是：能不能把 Attention 从翻译推广到更多任务？

### 2.3 自注意力：把 Attention 从辅助扶成主干

2017 年，Vaswani 等人在 Transformer 论文中把 Attention 推到极致。他们提出 scaled dot-product attention：用 Query、Key、Value 三组向量计算注意力权重，再除以 √dₖ 避免梯度消失。论文里最核心的一句话是"Attention Is All You Need"——不是"Attention 加在 RNN 上"，而是"只用 Attention"。[^5]

自注意力（self-attention）的本质是让序列中每个位置都能直接看见所有其他位置。没有循环，没有卷积，所有关系都在一层计算里解决。这让并行训练成为可能，也让长距离依赖不再需要经过很多步状态传递。

多头注意力则把注意力拆成多个子空间并行计算，让模型同时学习不同类型的关联——有的头看语法，有的头看指代，有的头看局部搭配。

这一节在《Transformer 列传》中有更详细的叙述，这里不再展开。但从 Attention 的历史来看，自注意力的意义在于：Attention 不再只是"外部对齐工具"，而是序列建模本身。

### 2.4 FlashAttention：解决"算得起"的现实问题

自注意力很强大，但它有一个硬伤：复杂度是 O(n²)。

对于长序列——长文档、高分辨率图像、长视频——n 一大，QK^T 矩阵的计算和存储成本就会爆炸。这不是理论问题，是 GPU 显存和带宽问题。HBM 容量有限，中间矩阵太大就得反复读写，一个 kernel 调另一个 kernel，I/O 开销吃掉大量时间。

2022 年，Dao 等人提出 FlashAttention。核心洞察是：不把完整的 QK^T 矩阵写回 HBM，而是在 SRAM 里分块完成 softmax 的增量计算。这样减少了 HBM 读写次数，使 Attention 从 memory-bound 变成 compute-bound。[^6]

效果很直接：FlashAttention 在保持数值精度（exact attention）的同时，把标准 Attention 加速 2-4 倍，显存从 O(n²) 降到 O(n)。论文特别指出，它在长序列上优势更大——GPT-2 用 FlashAttention 后，训练速度比原版快 3 倍。

2023 年，FlashAttention-2 进一步改进并行策略和工作划分，在前向和反向传播上都做到约 2x 加速。论文还把序列长度推到 64K。[^7]

2024 年，FlashAttention-3 利用 Hopper GPU 的异步指令和 FP8 低精度，在 H100 上实现 1.5-2.0x 的额外加速，并声称达到 H100 理论最大 FLOPS 的 75%。[^8]

FlashAttention 系列的历史作用很特殊：它没有发明新的注意力公式，却让已有公式在长序列上真正可用。许多长上下文模型、视觉 Transformer、多模态系统都依赖 FlashAttention 才能把训练成本控制在合理范围。

### 2.5 关键数据

| 时间 | 工作 | 核心贡献 | 历史作用 |
|------|------|----------|----------|
| 2014-09 | Bahdanau Attention | 加性注意力，让解码器动态回看编码器 | 在机器翻译中引入"注意力"作为对齐机制 |
| 2015-08 | Luong Attention | 点积/通用/加性三种变体，全局与局部注意力 | 简化注意力计算，推动推广到更多任务 |
| 2017-06 | Self-Attention (Transformer) | Scaled dot-product，多头，自注意力替代循环 | Attention 成为序列建模主干 |
| 2022-05 | FlashAttention | 分块增量 softmax，减少 HBM I/O | 让 O(n²) 的 Attention 在长序列上真正可训 |
| 2023-07 | FlashAttention-2 | 改进并行与工作划分，前向后向均加速 2x | 长上下文训练的主流实现 |
| 2024-07 | FlashAttention-3 | Hopper 异步指令 + FP8，H100 上理论 FLOPS 75% | 把 Attention 效率继续推向新硬件极限 |

---

## 三、影响与后继

### 3.1 从翻译到通用序列建模

Bahdanau 和 Luong 的 Attention 最初是翻译任务的专用改进。但到了 Transformer，自注意力证明了它可以处理远不止翻译的事：语言建模、文本理解、代码生成、图像分类、音频处理、多模态融合，全部可以用同样的 Attention 框架。

Attention 因此从 NLP 的一个子组件变成了通用计算原语。OpenAI 的 GPT 系列、Google 的 BERT/T5、Meta 的 Llama、Anthropic 的 Claude、DeepSeek 系列——底层都离不开自注意力。一个机制能支撑这么多不同方向的模型，说明它捕捉到的不是某一类数据的表面规律，而是一种更底层的"关系建模"能力。

### 3.2 长序列催生稀疏注意力与线性注意力

O(n²) 的压力也催生了大量变体。Longformer、BigBird、Reformer 等模型用稀疏注意力、局部窗口、哈希路由等方式降低复杂度。线性注意力、状态空间模型（如 Mamba）则试图从公式层面把复杂度压到 O(n) 或 O(n log n)。

这些变体各有适用的场景：稀疏注意力在长文档理解上有效；状态空间模型在某些序列任务上可以匹敌 Transformer；但训练生态、硬件优化和工程成熟度仍是 self-attention 占优。FlashAttention 的出现也缓解了 O(n²) 的紧迫性——与其发明新公式，不如把现有公式跑得更快。

### 3.3 硬件与算法协同设计的范例

FlashAttention 的历史意义不只在于"更快"。它展示了一种范式：算法设计不是独立于硬件的事。IO-aware 的思想——知道数据在 HBM 和 SRAM 之间怎么流、哪里是瓶颈——正在成为高效深度学习系统设计的标准思路。

这也是 Attention 列传的独特之处。最早的 Bahdanau Attention 是纯模型创新，与硬件无关。而到了 FlashAttention，算法和 GPU 架构已经不可分割。一个注意力机制，十年间从"RNN 外面的对齐器"变成"GPU 内核里的分块计算"——这本身就是一段完整的变迁史。

### 3.4 衰落或被吸收

到 2026 年，Attention 没有被取代。它仍然是前沿大模型的核心机制，同时被大量变体包围。FlashAttention 已经集成进 PyTorch、Hugging Face Transformers、vLLM 等主流框架，成为默认的注意力实现。

它最明显的危机来自状态空间模型、线性注意力和其他亚二次复杂度方案。但这些方案目前更多是在特定任务上逼近 Transformer，距离完全替代还有距离。Attention 的历史位置，更像一个被不断优化而不是被推翻的原语。

---

## 评曰

Attention 的十年，是把"选择"从设计技巧变成核心能力的十年。

Bahdanau 让人看到，让模型自己学"往哪儿看"，比工程师规定好；Luong 让人看到，简单的点积也能做复杂的事。Transformer 把选择和关系直接绑定，让 Attention 担起整个模型。FlashAttention 则提醒行业：想法够好只是第一步，让它跑得动、跑得便宜，才能真正落地。

Attention 的魅力不在公式漂亮，而在它捕捉到一种非常基本的操作——比较、加权、汇总——然后用十几年的工程把它磨到极致。历史会记住，不是因为它是唯一的注意力公式，而是因为它证明了一个原则：让模型学会分配自己的注意力，比让它多吃数据更能打开能力的天花板~

---

*本篇由终末地工业史官团队编纂：缪尔赛思（系统建模）。*

---

[^1]: Cho et al., "Learning Phrase Representations using RNN Encoder–Decoder for Statistical Machine Translation", EMNLP 2014 / arXiv:1406.1078. https://arxiv.org/abs/1406.1078
[^2]: Sutskever, Vinyals, Le, "Sequence to Sequence Learning with Neural Networks", NeurIPS 2014 / arXiv:1409.3215. https://arxiv.org/abs/1409.3215
[^3]: Bahdanau, Cho, Bengio, "Neural Machine Translation by Jointly Learning to Align and Translate", ICLR 2015 / arXiv:1409.0473, 2014-09-01. https://arxiv.org/abs/1409.0473
[^4]: Luong, Pham, Manning, "Effective Approaches to Attention-based Neural Machine Translation", EMNLP 2015 / arXiv:1508.04025, 2015-08-17. https://arxiv.org/abs/1508.04025
[^5]: Vaswani et al., "Attention Is All You Need", NeurIPS 2017 / arXiv:1706.03762, 2017-06-12. https://arxiv.org/abs/1706.03762
[^6]: Dao et al., "FlashAttention: Fast and Memory-Efficient Exact Attention with IO-Awareness", NeurIPS 2022 / arXiv:2205.14135. https://arxiv.org/abs/2205.14135
[^7]: Dao, "FlashAttention-2: Faster Attention with Better Parallelism and Work Partitioning", arXiv:2307.08691, 2023-07-17. https://arxiv.org/abs/2307.08691
[^8]: Shah et al., "FlashAttention-3: Fast and Accurate Attention with Asynchrony and Low-Precision", arXiv:2407.08608, 2024-07-11. https://arxiv.org/abs/2407.08608
