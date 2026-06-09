# 《Transformer 列传》

> Transformer 不是一个产品，也不是某家公司的一次发布。它是一种处理序列的架构：让每个 token 直接看见其他 token，再用规模把这种能力一路放大。2017 年它为机器翻译而生，几年后成了语言模型、图像生成、多模态系统共同使用的底座。

---

## 一、技术背景

Transformer 出现之前，序列建模主要靠 RNN、LSTM 和 GRU。它们按顺序读入文本：先读第一个词，再读第二个词，后面的状态依赖前面的状态。这种办法符合人读句子的直觉，但对机器训练不友好。长句越长，信息越容易在传递中衰减；训练时也很难并行，因为第 100 个词的计算要等前 99 个词处理完。

注意力机制在 Transformer 之前已经存在。2014 年，Bahdanau 等人在神经机器翻译里引入 attention，让解码器在生成每个词时可以回看输入句子的不同部分；2015 年，Luong 等人继续改进了这种做法。那时的注意力更像 RNN 外面加的一层辅助工具，不是主干。[^1][^2]

2017 年 6 月，Google Brain 与 Google Research 的八位作者发布《Attention Is All You Need》。论文提出：不要循环，不要卷积，只用注意力来建模序列。这个判断看起来像一句狠话，实际是一道减法题。Transformer 把当时最拖慢训练、最难扩展的循环结构拿掉，留下可以并行、可以堆深、可以放大的自注意力。[^3]

---

## 二、核心创新

### 2.1 自注意力：让所有 token 直接相互照面

Transformer 的核心是 self-attention。输入序列里的每个 token 会被投影成 Query、Key、Value 三组向量。模型用 Query 和 Key 计算相关性，再用这个权重去汇总 Value。通俗说，就是每个 token 都在问：这句话里哪些位置和我有关？

这个设计解决了 RNN 的两处裂隙。第一，距离不再是硬障碍。句首和句尾可以在一层注意力里直接建立关系，不必经过很多步状态传递。第二，训练可以并行。所有位置之间的关系可以一次算出来，不需要按时间步一个个等。

论文使用的是 scaled dot-product attention，核心公式是 `softmax(QK^T / √d_k)V`。除以 `√d_k` 是为了避免点积过大，使 softmax 进入梯度很小的区域。这个细节不显眼，但对稳定训练很要紧。[^3]

### 2.2 多头注意力：不是只看一种关系

单个注意力头只能从一个表示子空间里看关系。Transformer 把注意力拆成多个头并行计算，再把结果拼接起来。这样，模型可以同时学习不同类型的联系：有的头看语法，有的头看指代，有的头看局部搭配，有的头看长距离依赖。

多头注意力的价值不在于玄妙，而在于分工。一个大问题被拆成多个小视角，最后再合并。后来的语言模型、视觉 Transformer、多模态模型，大多继承了这一点。

### 2.3 位置编码：给无序的注意力补上顺序

自注意力天然不懂顺序。如果只看注意力矩阵，“我打你”和“你打我”会很难区分。Transformer 因此加入位置编码，把 token 在序列里的位置注入模型。

原论文使用正弦/余弦位置编码。后来的模型改出很多变体：可学习位置嵌入、相对位置编码、RoPE 等。做法不断变，但问题没有变：注意力负责关系，位置编码负责顺序。少了顺序，语言和图像都会失去骨架。

### 2.4 关键数据

| 指标 | 数值 | 说明 |
|------|------|------|
| 论文发布日期 | 2017-06-12 | arXiv:1706.03762[^3] |
| 原论文模型结构 | Encoder-Decoder | 面向机器翻译任务 |
| Transformer base | 约 65M 参数 | 原论文报告，用于 WMT 2014 英德翻译[^3] |
| Transformer big | 约 213M 参数 | 原论文报告，用于 WMT 2014 英德/英法翻译[^3] |
| 核心复杂度特点 | self-attention 每层路径长度为 O(1) | 相比循环结构更利于长距离依赖与并行训练[^3] |

这里不把后来的闭源模型参数强行写进表里。GPT-4、Gemini 等前沿模型没有公开可靠参数，传闻可以作为行业讨论线索，不能当成史实。

---

## 三、影响与后继

### 3.1 2018：BERT 与 GPT 的分化

Transformer 很快分出两条主路。

一条是 GPT 路线。2018 年 6 月，OpenAI 发布 GPT-1，用 Transformer 解码器做生成式预训练，再在下游任务上微调。它的参数规模是 117M，训练数据包括 BooksCorpus。GPT-1 当年不算最耀眼，但它留下了后来最关键的方向：用 decoder-only Transformer 预测下一个 token。[^4]

另一条是 BERT 路线。2018 年 10 月，Google 发布 BERT，用 Transformer 编码器做双向语言理解。BERT-base 为 110M 参数，BERT-large 为 340M 参数。它通过 masked language modeling 和 next sentence prediction 预训练，在多项 NLP 理解任务上刷新结果。[^5]

这次分化很重要。BERT 更会“读”，适合理解、分类、检索、抽取；GPT 更会“写”，适合生成、对话、代码、工具调用。2018 年看，BERT 的 benchmark 更亮；2022 年以后看，GPT 路线成了大众接触 AI 的主入口。两条路没有谁彻底消失，只是承担了不同位置：BERT 式编码器沉入搜索和检索系统，GPT 式解码器站到生成式 AI 的台前。

### 3.2 2019—2020：规模成为主线

2019 年，GPT-2 把 GPT-1 放大到 1.5B 参数。它的技术报告题为《Language Models are Unsupervised Multitask Learners》，重点不是某个新模块，而是展示更大的语言模型可以在 zero-shot 条件下做翻译、摘要、问答等任务。OpenAI 当时采用分阶段发布策略，只先放出小模型，理由是担心滥用。[^6]

同一年，NVIDIA 的 Megatron-LM 展示了用模型并行训练更大 Transformer 语言模型的方法；Google 的 T5 则把许多 NLP 任务统一成 text-to-text 格式，并训练到 11B 参数规模。这些工作共同说明一件事：Transformer 不只是一个架构，还是一套能吃下更多算力和数据的工程框架。[^7][^8]

2020 年，Kaplan 等人发布神经语言模型 scaling laws，系统研究模型规模、数据量、计算量与 loss 的幂律关系。它给当时的行业提供了一个朴素但有力的信念：只要数据、参数和计算继续增加，性能还会按可预测趋势改善。[^9]

同年，OpenAI 发布 GPT-3。175B 参数，decoder-only Transformer，论文展示了 few-shot、one-shot、zero-shot 设定下的大量任务表现。GPT-3 没有靠新架构取胜，而是把 Transformer 的规模推到当时极少团队能触及的位置。它让“继续 scale”从研究假设变成产业路线。[^10]

这段历史有一条裂隙：规模不是免费的。参数越大，训练成本、数据治理、推理延迟、部署门槛都会上升。2022 年 DeepMind 的 Chinchilla 论文又补上一句：在固定计算预算下，模型参数和训练 token 要配平；只堆参数而数据不足，是浪费算力。[^11]

### 3.3 2022 以后：从语言走向图像与多模态

Transformer 最早为机器翻译而生，但它真正的生命力在于“token 化”。只要能把对象切成序列，文本可以是 token，代码可以是 token，图像块可以是 token，音频帧也可以是 token。

视觉领域的转折点是 Vision Transformer。2020 年，Dosovitskiy 等人提出把图像切成固定大小的 patch，再像处理词一样送入 Transformer。ViT 说明卷积不是视觉模型唯一的主干，大规模数据上的 Transformer 同样可以处理图像。[^12]

2021 年，OpenAI 发布 CLIP，用自然语言监督把图像和文本对齐到同一个表示空间。CLIP 本身不是聊天模型，但它让“用文字控制视觉模型”变得可行。后来的文生图系统、图文检索、多模态理解，都大量受益于这种图文对齐思路。[^13]

2022 年以后，扩散模型把图像生成推到公众面前。Stable Diffusion 采用 latent diffusion 路线，文本条件通常依赖 CLIP 文本编码器；它不是纯 Transformer 系统，却显示了一个更大的格局：Transformer 已经从单独模型变成多模态流水线里的关键部件。[^14]

2023 年，GPT-4 发布，支持图像输入与文本输出。OpenAI 没有公开模型参数和训练细节，但“语言模型能看图”这件事本身改变了前沿模型的默认定义：只会文字已经不够，模型要能处理图像、图表、截图、手写内容。[^15]

2023 年底，Google 发布 Gemini 1.0，称其从设计上就是多模态模型，可处理文本、图像、音频、视频和代码。2024 年，OpenAI 发布 GPT-4o，强调文本、音频、图像的端到端实时交互；同年 Sora 又把 Transformer 思路推进到视频生成叙事里。[^16][^17][^18]

这些后继不都等于“原始 Transformer 的简单堆叠”。扩散、MoE、检索增强、强化学习、视觉编码器、音频编码器都在加入。但底层思想仍然清楚：把世界拆成可计算的表示，让模型在大量上下文里学习关系。Transformer 从 NLP 架构变成通用建模语言，靠的就是这点。

### 3.4 衰落或被吸收

到 2026 年，Transformer 还没有真正衰落。它被替换过许多局部部件，也遭遇过状态空间模型、线性注意力、混合架构的挑战，但前沿大模型的主干仍大多围绕 Transformer 或其变体展开。

它被吸收得最彻底的地方，是人们已经不再总把它当作“创新点”来讲。新模型发布时，除非架构明显不同，否则默认就是某种 Transformer。一个技术从论文标题变成默认背景，这不是失势，而是成了地基。

---

## 评曰

Transformer 的历史地位，不在于它第一次提出了注意力，而在于它敢把注意力扶成主干，把循环结构撤下去。

这是一种很少见的工程直觉：少一点结构，反而给规模留下更多空间。RNN 像一条窄路，能走，但车队排不开；Transformer 像把路面拓宽，让数据、算力和参数可以一起涌进来。2018 年 BERT 和 GPT 的分化，证明它能同时支撑理解和生成；2019—2020 年的 scaling，证明它能随规模增长持续变强；2022 年后的图像和多模态扩展，证明它不只属于语言。

它也留下了裂隙。注意力的计算成本、长上下文的代价、数据偏见、闭源模型的不透明，都不是小问题。但十年建城的人知道，地基不是没有裂缝才叫地基，而是裂缝出现时还能继续承重。Transformer 正是这样的地基：不完美，却承住了大模型时代最重的一段历史。

---

*本篇由终末地工业史官团队编纂：庄方宜（主笔）。*

---

[^1]: Bahdanau, Cho, Bengio, "Neural Machine Translation by Jointly Learning to Align and Translate", arXiv:1409.0473, 2014. https://arxiv.org/abs/1409.0473
[^2]: Luong, Pham, Manning, "Effective Approaches to Attention-based Neural Machine Translation", arXiv:1508.04025, 2015. https://arxiv.org/abs/1508.04025
[^3]: Vaswani et al., "Attention Is All You Need", arXiv:1706.03762, 2017-06-12. https://arxiv.org/abs/1706.03762
[^4]: Radford et al., "Improving Language Understanding by Generative Pre-Training", OpenAI, 2018-06-11. https://openai.com/research/language-unsupervised
[^5]: Devlin et al., "BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding", arXiv:1810.04805, 2018-10-11. https://arxiv.org/abs/1810.04805
[^6]: Radford et al., "Language Models are Unsupervised Multitask Learners", OpenAI, 2019-02-14. https://openai.com/research/better-language-models
[^7]: Shoeybi et al., "Megatron-LM: Training Multi-Billion Parameter Language Models Using Model Parallelism", arXiv:1909.08053, 2019. https://arxiv.org/abs/1909.08053
[^8]: Raffel et al., "Exploring the Limits of Transfer Learning with a Unified Text-to-Text Transformer", arXiv:1910.10683, 2019. https://arxiv.org/abs/1910.10683
[^9]: Kaplan et al., "Scaling Laws for Neural Language Models", arXiv:2001.08361, 2020. https://arxiv.org/abs/2001.08361
[^10]: Brown et al., "Language Models are Few-Shot Learners", arXiv:2005.14165, 2020-05-28. https://arxiv.org/abs/2005.14165
[^11]: Hoffmann et al., "Training Compute-Optimal Large Language Models", arXiv:2203.15556, 2022-03-29. https://arxiv.org/abs/2203.15556
[^12]: Dosovitskiy et al., "An Image is Worth 16x16 Words: Transformers for Image Recognition at Scale", arXiv:2010.11929, 2020. https://arxiv.org/abs/2010.11929
[^13]: Radford et al., "Learning Transferable Visual Models From Natural Language Supervision", arXiv:2103.00020, 2021. https://arxiv.org/abs/2103.00020
[^14]: Rombach et al., "High-Resolution Image Synthesis with Latent Diffusion Models", arXiv:2112.10752, 2021. https://arxiv.org/abs/2112.10752
[^15]: OpenAI, "GPT-4", 2023-03-14. https://openai.com/research/gpt-4
[^16]: Google, "Introducing Gemini: our largest and most capable AI model", 2023-12-06. https://blog.google/technology/ai/google-gemini-ai/
[^17]: OpenAI, "Hello GPT-4o", 2024-05-13. https://openai.com/research/hello-gpt-4o
[^18]: OpenAI, "Video generation models as world simulators", 2024-02-15. https://openai.com/research/sora
