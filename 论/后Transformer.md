# 后 Transformer 架构之争

> 2017 年的一篇论文改变了整个深度学习的方向——"Attention Is All You Need"让 Transformer 成为序列建模的事实标准。九年之后，Mamba、RWKV、xLSTM、Jamba 轮番登场，试图证明 Attention 并非一切。但截至 2026 年中，Transformer 依然稳坐主位。这场"后 Transformer"之争揭示的不是谁更强，而是一种架构为什么如此难以被替代。

---

## 一、O(n²) 的阴影

Transformer 的核心机制——自注意力——有一个数学上无法回避的成本：每个 token 都要和序列中所有其他 token 计算注意力权重，复杂度为 O(n²)（详见《Attention 列传》《Transformer 列传》）。[^1]

这个平方复杂度在短序列上无关痛痒。对几百个 token 的句子，O(n²) 的计算量在现代 GPU 上轻松搞定。但当序列长度增长到几千、几万、几十万——长文档、基因组序列、高分辨率图像、长视频——O(n²) 就成了硬障碍。FlashAttention 通过优化 GPU 内核的 I/O 路径缓解了内存瓶颈，但没有改变复杂度本身。[^2]

这道 O(n²) 的阴影催生了一整个"替代架构"的研究方向。研究者们的基本判断是：如果能找到一种 O(n) 的序列建模方法，同时保持 Transformer 的建模质量，那么在长序列场景下将获得决定性的效率优势。

四条路线在 2023-2024 年间先后登场：状态空间模型（Mamba）、递归网络（RWKV）、循环网络复兴（xLSTM）、以及混合架构（Jamba）。它们的出发点各不相同，但指向同一个问题：**Transformer 的注意力机制是不是序列建模的唯一正解？**

---

## 二、Mamba：选择性状态空间

第一条挑战路线来自状态空间模型（State Space Model, SSM）。

SSM 的理论基础是用连续时间动力系统来建模序列——把输入看作一个动力系统的驱动信号，把输出看作系统的状态响应。2022 年 1 月，当时在 CMU 做博士研究的 Albert Gu 发表了 S4（Structured State Spaces for Sequence Modeling），用特殊的矩阵初始化（HiPPO）解决了长程依赖问题。S4 在 Path-X（序列长度 16384）等超长序列任务上的表现震惊了领域——在这些任务上 Transformer 因为 O(n²) 根本跑不起来。[^3]

但 S4 有一个严重缺陷：**时不变性**。它的状态转移矩阵不随输入变化——不管遇到什么 token，系统用同一组参数来转移状态。这让 S4 在需要"选择性"地关注特定信息的语言建模任务上，始终追不上 Transformer。

2023 年 12 月 1 日，Albert Gu 和 Tri Dao（FlashAttention 的作者）发布 **Mamba**，正式解决了这个问题。[^4] Mamba 的核心创新是把 S4 的固定参数变成**输入依赖的**：B、C 和时间步长 Δ 都成了当前输入 x 的函数。通俗地说，模型可以根据当前 token 的内容来决定"保留多少过去的信息、忽略多少"——这就是"选择性"的含义。

Gu 和 Dao 把这种输入依赖的 SSM 称为 S6。参数变成输入依赖后，S4 那种用 FFT 做卷积的高效训练方式不再可用。Tri Dao 设计了一种**硬件感知的并行扫描算法**，在 GPU 的 SRAM 里完成核心计算——哲学与 FlashAttention 完全一致：不是换数学公式，而是让计算过程适应硬件实际特性。

结果令人瞩目：Mamba 在语言建模上与同等规模 Transformer 持平，在推理速度上快约 5 倍，且优势随序列长度增长而扩大。[^4] 随后，Mamba 迅速被扩展到视觉（Vision Mamba）、多模态、基因组学等领域。

2024 年 5 月，Gu 和 Dao 发表 **Mamba-2**，论文标题直截了当：《Transformers are SSMs》。[^5] 它证明了 SSM 和注意力不是两种互斥方法，而是同一个数学框架的两个面——结构化状态空间对偶性（SSD）。Mamba-2 在保持线性复杂度的同时比 Mamba-1 快 2-8 倍，并能利用张量核心加速。

---

## 三、RWKV、xLSTM 与 Jamba：三条替代路线

Mamba 不是唯一的挑战者。另外三条路线各自代表了对"什么能替代注意力"的不同回答。

### 3.1 RWKV：回到 RNN

RWKV 的发起者是独立研究者 Bo Peng（彭博）。[^6] 它的核心思路是把 Transformer 的注意力机制替换成一种类似 RNN 的递推公式——可以像 Transformer 一样并行训练，但推理时像 RNN 一样递推生成，复杂度为 O(n)。

RWKV 的关键设计是"WKV"（Weighted Key-Value）机制——用一种特殊的加权方式取代 softmax 注意力，使其满足递推结构的条件。这使得 RWKV 既能利用 GPU 并行性进行训练，又能在推理时保持恒定的内存和计算开销——不像 Transformer 那样需要随上下文长度增长的 KV Cache。

RWKV 历经多个版本迭代：RWKV-4（2023-04，论文发表于 EMNLP 2023）、RWKV-5（Eagle，2024）、RWKV-6（Finch，2024）。[^6] Bo Peng 成立了 RWKV Foundation 推动社区发展。截至 2026 年中，RWKV 是非 Transformer 路线中社区活跃度最高的项目之一——但它同样缺乏大规模前沿性能验证。

### 3.2 xLSTM：经典循环网络的复活

2024 年 5 月，LSTM 的原始发明者 **Sepp Hochreiter** 等人发表 **xLSTM（Extended Long Short-Term Memory）**。[^7]

LSTM 在 Transformer 出现前统治了序列建模三十年。它的门控机制——遗忘门、输入门、输出门——曾经是处理长程依赖的标准方案。但 LSTM 有两个结构性劣势：无法并行训练（因为递推依赖），以及信息在长序列中逐渐衰减。

xLSTM 试图用现代技术解决这两个问题。它引入了两个关键创新：

- **指数门控**（Exponential Gating）：用指数函数替代传统 sigmoid 门控，使门控信号的动态范围更大，能更精细地控制信息流。
- **矩阵记忆**（Matrix Memory）：用可并行的矩阵运算替代传统的标量状态转移，提升了模型的表达能力和并行性。

xLSTM 代表的是一种"回到起点"的思路——不是从零发明新架构，而是用十年后的技术去修复一个已经被遗忘但仍然有潜力的经典架构。但 xLSTM 的影响力目前主要停留在学术界，尚未形成像 Mamba 或 RWKV 那样的社区生态。

### 3.3 Jamba：折中的混合路线

2024 年 3 月，AI21 Labs 发布 **Jamba**——一种 SSM 层与 Transformer 注意力层**交替堆叠**的混合架构。[^8] 总参数约 52B，激活参数约 12B，采用 MoE 结构。

Jamba 的设计哲学不是"替代 Transformer"，而是"在必须用注意力的地方用注意力，在不需要的地方用 SSM 替代"。具体来说，模型中大部分层是 Mamba 式的 SSM 层（负责高效的序列处理），少量层是标准 Transformer 注意力层（负责精确的全局信息回溯）。这种交替结构使 Jamba 可以支持 256K 的上下文窗口，同时推理效率显著高于同规模纯 Transformer 模型。

Jamba 指出了一个可能的未来方向：**不是 SSM 替代注意力，而是 SSM 处理大部分计算、注意力处理需要精确回溯的关键层。** 这种折中可能比任何纯粹路线都更接近最终的落地方案。

---

## 四、Transformer 为何如此持久

截至 2026 年中，前沿大模型——GPT-4/o、Claude、Gemini、Llama 3、Qwen 2.5/3、DeepSeek-V3/R1——仍然基于 Transformer 或其变体。没有任何非 Transformer 架构在通用语言建模的最大规模上完全取代了 Transformer。[^9]

原因是多层面的。

**第一，注意力机制有一种数学上的独特优势。** 每个 token 可以直接"看到"序列中的任何其他 token，不受距离限制。这种 O(1) 的路径长度——任何两个位置之间只需一层注意力——是 RNN、SSM、LSTM 都做不到的。SSM 的状态传递虽然理论上可以处理长程依赖，但信息必须经过中间每一步的状态转移，在深层网络中可能出现信息瓶颈。注意力的"任意两点直达"是一种根本性的能力差异——尤其在需要精确回溯的任务上（如"第 3 段的第 2 句说了什么"）。

**第二，Scaling Law 的证据缺失。** Transformer 的 scaling law 已经被反复验证——从 Kaplan 2020 到 Chinchilla 2022，从 GPT-3 到 GPT-4，规模定律的预测在 Transformer 上一次次被实证确认。[^10] 但 Mamba 的 scaling law 仍然缺乏大规模实证——没人知道把 Mamba 堆到几千亿参数时会发生什么。在投入数千万甚至上亿美元训练一个前沿模型时，选择一个有充足 scaling 证据的架构，和选择一个理论上很好但缺乏大规模验证的架构——任何理性的决策者都会选前者。

**第三，工程惯性。** Transformer 的训练和推理基础设施已经极度成熟。从 PyTorch 和 JAX 的原生支持，到分布式训练框架（Megatron-LM、DeepSpeed、FSDP），到推理优化（FlashAttention、vLLM、TensorRT-LLM），到 GPU 内核级别的张量核心加速——所有这些工程投入都是围绕 Transformer 的计算模式构建的。换架构意味着重建整条工程链。这不是"更好或更差"的问题——是"值不值得花两年时间重建已有的一切"。

**第四，"足够好"的优化持续涌现。** Transformer 的 O(n²) 瓶颈确实存在，但 Transformer 阵营也在不断自我改进。FlashAttention 把内存占用从 O(n²) 降到 O(n)。MLA 把 KV Cache 压缩 90%。GQA 和 MQA 减少了注意力头的冗余。稀疏注意力（如 Longformer、BigBird）把全注意力替换为局部 + 全局模式。RoPE 和 ALiBi 改进了位置编码对长序列的支持。每一次优化都在缩小"Transformer 的弱点"与"替代架构的优势"之间的差距。当 Transformer 的 O(n²) 在实际工程中被一层层优化到接近线性的效果时，替代架构"理论上更高效"的卖点就不再那么有力。

---

## 五、分野：不是谁取代谁，而是各有所长

到 2026 年中，这场架构之争的格局已经渐渐清晰。它不是一场"谁取代谁"的零和博弈，而是一次**能力的分野**。

**Transformer 的统治区：** 通用语言建模、大规模多任务、复杂推理、需要精确回溯的任务。这些场景的特点是——数据丰富、算力充足、需要模型在最大规模上展示最强能力。GPT-5.5、Claude 4、Gemini 3.x、DeepSeek V4 都在这些场景中竞争，而它们全部基于 Transformer。

**SSM 的优势区：** 超长序列处理、低推理延迟场景、边缘部署。基因组学（序列长度可达数亿）、音频流处理、实时对话中的超长上下文——在这些场景中，O(n) 复杂度不是理论优势，而是实际的生存条件。当序列长度超过 100K 且推理延迟是硬约束时，SSM 路线展示了 Transformer 难以匹敌的效率。

**混合架构的可能性：** Jamba 式的混合路线暗示了一种更可能的未来——不是"SSM 替代 Transformer"或"Transformer 永远不变"，而是"根据任务需求组合不同计算模式"。注意力负责需要精确回溯的层，SSM 负责高效序列扫描的层，MoE 负责知识的稀疏激活——这些不是互相排斥的技术，而是可以共存的模块。

Mamba-2 的理论工作已经证实了这种可能性：SSM 和注意力在数学上是同一框架的两面。[^5] 未来的架构很可能不是"纯 Transformer"或"纯 SSM"，而是一种根据任务和场景自适应选择计算模式的混合系统。

---

## 评曰

后 Transformer 架构之争的核心，不是一场技术竞赛——而是一个关于**地基**的哲学问题。

Transformer 从 2017 年开始统治序列建模。九年里，它经历了 BERT/GPT 分化、规模定律验证、多模态扩展、推理模型崛起、开源浪潮冲击——每一次都挺了过来，每一次都变得更庞大。它不完美：O(n²) 是真实的瓶颈，KV Cache 是真实的成本，长序列是真实的痛点。但这些裂隙并没有让它崩塌——每一处裂隙都有工程师在修补。

Mamba 证明了线性复杂度可以匹配 Transformer。RWKV 证明了 RNN 可以在现代硬件上复活。xLSTM 证明了经典方法可以被重新发明。Jamba 证明了混合是可能的。这些都是真实的进展——不是空想，是有论文、有代码、有实验结果的进展。

但"证明可行"和"取而代之"之间隔着一道巨大的鸿沟。这道鸿沟不在于数学——在于生态。一个架构需要被训练框架支持、需要被推理引擎优化、需要被硬件加速器适配、需要被数以万计的开发者理解和使用。Transformer 已经在这条路上走了九年。替代路线要追上，不是一两年的事。

十年建城的人知道：**地基不是没有裂缝才叫地基，而是裂缝出现时还能继续承重。** Transformer 正是这样的地基——不完美，但承住了大模型时代最重的一段历史。后 Transformer 时代的真正含义，不是 Transformer 将被替代，而是它的计算模式将被补充、被混合、被扩展。未来的序列建模，可能不是"Attention Is All You Need"，也不是"Attention Is No Longer Needed"——而是"Attention Is One of the Things You Need"。

---

*本篇由终末地工业史官团队编纂：庄方宜（主笔）。*

---

[^1]: Vaswani et al., "Attention Is All You Need", arXiv:1706.03762, 2017-06-12. https://arxiv.org/abs/1706.03762 。O(n²) 复杂度详见该论文 §3.2。
[^2]: Tri Dao et al., "FlashAttention: Fast and Memory-Efficient Exact Attention with IO-Awareness", NeurIPS 2022, arXiv:2205.14135. FlashAttention 将内存占用从 O(n²) 降至 O(n)，但注意力计算本身的 FLOPs 仍为 O(n²)。https://arxiv.org/abs/2205.14135
[^3]: Gu, Goel, Ré, "Efficiently Modeling Long Sequences with Structured State Spaces" (S4), ICLR 2022, arXiv:2111.00396. S4 在 Path-X（序列长度 16384）上首次取得有意义的成绩，而 Transformer 在该任务上因 O(n²) 内存不足而完全失败。https://arxiv.org/abs/2111.00396
[^4]: Gu, Dao, "Mamba: Linear-Time Sequence Modeling with Selective State Spaces", arXiv:2312.00752, 2023-12-01. Mamba 在语言建模上与同等 Transformer 持平，推理吞吐量快约 5×。https://arxiv.org/abs/2312.00752
[^5]: Dao, Gu, "Transformers are SSMs: Generalized Models and Efficient Algorithms Through Structured State Space Duality" (Mamba-2), arXiv:2405.21060, 2024-05-31. 论文证明了 SSM 和注意力的数学对偶性。https://arxiv.org/abs/2405.21060
[^6]: Peng et al., "RWKV: Reinventing RNNs for the Transformer Era", EMNLP 2023 Findings, arXiv:2305.13048, 2023-05. RWKV 由独立研究者 Bo Peng 发起，首个公开版本 RWKV-4 于 2023 年 4 月上线 HuggingFace。https://arxiv.org/abs/2305.13048
[^7]: Beck et al., "xLSTM: Extended Long Short-Term Memory", arXiv:2405.04517, 2024-05-07. 由 LSTM 原始发明者 Sepp Hochreiter 团队提出。https://arxiv.org/abs/2405.04517
[^8]: Lieber et al., "Jamba: A Hybrid Transformer-Mamba Language Model", arXiv:2403.19887, 2024-03-28. AI21 Labs 开发，52B 总参数/12B 激活，支持 256K 上下文。https://arxiv.org/abs/2403.19887
[^9]: 截至 2026 年中，主流前沿模型（GPT-4/5 系列、Claude 系列、Gemini 系列、Llama 系列、Qwen 系列、DeepSeek 系列）均基于 Transformer 架构或其变体（如 Decoder-only Transformer + MoE）。无公开发布的前沿大模型采用纯 SSM 或纯 RNN 架构。
[^10]: Kaplan et al., "Scaling Laws for Neural Language Models", arXiv:2001.08361, 2020. Hoffmann et al., "Training Compute-Optimal Large Language Models" (Chinchilla), arXiv:2203.15556, 2022. 见《Transformer 列传》§3.2。
