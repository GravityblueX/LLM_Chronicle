# 《BERT 列传》

> BERT（Bidirectional Encoder Representations from Transformers）不是第一个预训练语言模型，但它是第一个让"预训练 + 微调"成为 NLP 默认范式的模型。从 ELMo 到 BERT 到 RoBERTa，这条线把词向量从静态的查表变成了动态的上下文理解，也把自然语言处理从"每个任务从头训"拖进了"一个底座、万物微调"的时代。

---

## 一、技术背景

### 1.1 从 Word2Vec 到 ELMo：词向量的静态与动态

2013 年到 2018 年，NLP 领域的核心基础设施之一是词向量。Word2Vec、GloVe、fastText 这些方法给每个词分配一个固定向量——"bank"无论出现在"river bank"还是"bank account"里，都是同一个表示。静态词向量的局限很明显：它无法区分多义词，也无法捕捉词在具体语境中的语义变化。

2018 年 2 月，Allen Institute for AI 的研究团队在 arXiv 提交了 ELMo 论文。ELMo 的核心想法是：不再给每个词一个固定向量，而是用双向 LSTM 语言模型读出每个词在当前位置的上下文表示。它的 biLM（bidirectional language model）分别从左到右和从右到左建模文本，将两个方向的信息拼接成深层上下文表示。下游任务不需要改动 ELMo 本身，只需把它输出的向量"接"到自己的模型输入上即可。[^1]

ELMo 在当时六个 NLP 任务上显著提升了 SOTA。它证明了两件事：第一，深层、双向的上下文表示比浅层静态向量有用得多；第二，预训练语言模型可以作为"特征提取器"，以插件形式嵌入下游任务。但 ELMo 也有局限——它基于 LSTM，训练慢、难以真正深堆叠；并且它的贡献方式（feature-based）意味着下游任务仍然需要自己设计架构。

### 1.2 GPT-1 的提示：Transformer 可以做大，但方向不对

几乎同时，OpenAI 在 2018 年 6 月发布了 GPT-1。它用 Transformer 解码器做自回归语言模型预训练，再在下游任务上微调。GPT-1 证明了 Transformer 架构在语言模型预训练上的潜力，但它有一个关键设计局限：标准语言模型是自回归的——从左到右预测下一个 token——这意味着模型在编码每个词时，只能看到它前面的上下文，看不到后面的。[^2]

这个单向性在自然语言理解任务上是天然缺陷。很多任务需要同时看到词的左右两侧上下文才能做出正确判断（比如指代消解、情感分析、完形填空）。GPT 的方法在生成任务上自然流畅，但在理解任务上被方向性限制了上限。

### 1.3 2018 年秋天的机会窗口

到 2018 年秋天，NLP 领域的状态可以这样概括：

- **静态词向量**用得太久，大家知道不够用，但还没有通用的替代方案。
- **ELMo** 证明了深度双向上下文表示的价值，但它用 LSTM 实现，工程上和表达力上都不够理想。
- **GPT-1** 证明了 Transformer + 预训练 + 微调这条路的可行性，但它的单向注意力无法充分利用双向上下文。
- **Transformer 编码器**在机器翻译等任务上表现优异，但还没有人把它做成通用的预训练语言理解底座。

BERT 踩准了这个时间点。它把三个东西拼在一起：Transformer 编码器的双向注意力 + 大规模无监督预训练 + 简单统一的微调接口。拼法看起来简单，但拼完之后，GLUE 榜单被一次性刷了 7.7 个百分点——这在 NLP 历史上几乎没有先例。

---

## 二、核心创新

### 2.1 遮蔽语言模型：让双向预训练成为可能

BERT 最关键的设计是 **Masked Language Model（MLM，遮蔽语言模型）**。标准语言模型通过预测下一个 token 来训练，这迫使模型只能单向编码。BERT 的做法是：随机遮蔽输入中 15% 的 token，让模型根据未被遮蔽的左右上下文去预测这些被遮蔽位置的原始词。[^3]

这个设计一举解决了双向预训练的核心矛盾。因为模型不能"看到"被遮蔽位置的词，它被迫利用整个句子的上下文来推断——左边加右边，缺一不可。于是 BERT 可以放心地用双向 Transformer 编码，同时拥有深层、丰富的上下文表示。

论文中具体的遮蔽策略也经过斟酌：80% 的时间用 [MASK] 替换目标词，10% 用随机词替换，10% 保持不变。这样做是为了缓解预训练和微调之间的 mismatch——微调时下游任务的数据中没有 [MASK] token，如果预训练 100% 用 [MASK]，模型会学到依赖这个特殊 token 而不是真正的上下文理解。

### 2.2 下一句预测：教模型理解句子关系

BERT 的第二个预训练任务是 **Next Sentence Prediction（NSP，下一句预测）**。给定两个句子 A 和 B，模型要判断 B 是否是 A 的真实后续句子。训练数据中 50% 是真实相邻句对，50% 是随机配对的假句对。[^3]

NSP 的目标是让模型学会理解句子级别的语义关系——这对问答（给一段文本找一个答案句）、自然语言推理（判断前提和假设之间的逻辑关系）等任务至关重要。不过后来的研究发现 NSP 的贡献并不如 MLM 大：RoBERTa 在 2019 年证明，去掉 NSP 不仅不会损害性能，某些任务上反而更好。[^4]

### 2.3 统一的微调范式：一个底座，万物适配

BERT 的第三个贡献不在架构上，而在工程哲学上。在 BERT 之前，NLP 的主流做法是每个任务单独设计模型架构——文本分类一套网络，问答一套网络，序列标注又是一套。BERT 改变了这个局面：预训练模型本身是通用的语言理解底座，下游任务只需要在它上面加一个简单的输出层（分类器、序列标注头、跨度预测头等），然后整体微调即可。[^3]

这个设计让学术研究和工业落地都发生了质变。研究者不再需要为每个任务设计复杂架构，只需要准备数据集、微调 BERT、提交结果。工业团队可以用同一个预训练模型服务多个 NLP 产品线。**"预训练 + 微调"因此从一篇论文里的思路变成了一个行业的默认操作。**

### 2.4 关键数据

| 指标 | BERT_BASE | BERT_LARGE | GPT-1 (对比) | ELMo (对比) |
|------|-----------|------------|-------------|------------|
| 参数量 | 110M | 340M | 117M | ~93M |
| 层数 | 12 | 24 | 12 | 2 (biLSTM) |
| 隐藏维度 | 768 | 1024 | 768 | 1024 |
| 注意力头 | 12 | 16 | 12 | — |
| 训练数据 | BooksCorpus (800M words) + English Wikipedia (2.5B words) | 同左 | BooksCorpus | 1B word benchmark |
| GLUE 分数 | — | 80.5% | — | — |

BERT_LARGE 在 GLUE 上拿到了 80.5%（此前 SOTA 约 72.8%），在 SQuAD v1.1 上 F1 达到 93.2，在 SQuAD v2.0 上 F1 达到 83.1。11 个任务上全部刷新 SOTA。[^3]

---

## 三、影响与后继

### 3.1 RoBERTa：BERT 不是终点，是优化的起点

2019 年 7 月，Facebook AI 发布了 RoBERTa。论文标题很直接：**"A Robustly Optimized BERT Pretraining Approach"**——就是对 BERT 预训练的一次系统性复盘和优化。[^4]

RoBERTa 做了四件关键的事：

1. **更多数据、更长训练**：BERT 用的是约 16GB 文本，RoBERTa 用了 160GB（CC-NEWS、OpenWebText、Stories 等），训练步数从 1M 步大幅增加。
2. **去掉 NSP**：实验证明 NSP 对下游任务几乎没有正面影响。RoBERTa 只用 MLM，用完整文档的连续片段构成每个训练样本。
3. **动态遮蔽**：BERT 的遮蔽是在数据预处理时一次性生成的——每个 epoch 看到相同的遮蔽模式。RoBERTa 改为每个 epoch 重新随机遮蔽，模型每次见到同一句子时预测不同位置的词，数据利用率更高。
4. **更大的 batch size + 更长的序列**：用 8K 序列长度（BERT 是 512）。

结果：RoBERTa 在不改模型架构的前提下，全面超越了 BERT 和同期所有后继模型，包括 XLNet。GLUE 分数从 BERT 的 80.5% 提升到 88.5%。[^4]

RoBERTa 的意义在于它纠正了行业的一个错觉：BERT 之后很多人以为架构创新是前进的唯一路径。RoBERTa 证明，即使不改架构，仅仅把训练做得更扎实——更多数据、更充分优化、更细致的超参数调校——就能达到新的 SOTA。这个结论影响深远：后来 Llama、Chinchilla 等工作的核心叙事——"训练不足的大模型是在浪费算力"——可以从 RoBERTa 这里找到一条清晰的先例。

### 3.2 BERT 家族：ALBERT、DistilBERT、ELECTRA

BERT 之后涌现了大量变体。其中几个方向特别值得记一笔：

- **ALBERT**（2019-09）：通过参数共享（跨层共享注意力参数和前馈参数）和因子化嵌入，把模型参数量大幅压缩。ALBERT-xxlarge 只有 BERT_LARGE 70% 的参数，但在多个 benchmark 上表现更好。它的贡献在于证明 BERT 架构中有大量冗余可以被压缩。[^5]
- **DistilBERT**（2019-10）：Hugging Face 用知识蒸馏（knowledge distillation）把 BERT_BASE 压缩到只有 60% 的参数量，保留 97% 的性能。蒸馏后的模型推理速度快 60%，成为生产环境中最广泛使用的 BERT 变体之一。[^6]
- **ELECTRA**（2020-03）：提出了一个更高效的预训练方法——不是遮蔽 token 再预测，而是训练一个判别器来判断每个 token 是被生成器替换过的还是原始 token。这种方法对所有 token 都提供训练信号（MLM 只对 15% 遮蔽位置提供信号），训练效率大幅提高。ELECTRA 用 1/4 的计算量达到了与 RoBERTa 相当的性能。[^7]

这三条线分别代表了压缩（DistilBERT）、效率（ELECTRA）和架构精简（ALBERT）三个方向，也标志着 BERT 从一个模型变成了一整个研究生态。

### 3.3 BERT 范式的遗产与局限

BERT 对 NLP 领域的影响，不是"多了一个模型可用"，而是**改写了整个领域的工作方式**：

- 2018 年以前，NLP 论文的典型结构是"任务描述 → 自定义架构 → 实验"。2019 年以后，典型结构变成了"选择预训练模型 → 微调 → 分析"。
- BERT 让"预训练 + 微调"从少数人的实验变成了所有人的基础设施。Hugging Face Transformers 库正是在 BERT 之后迅速崛起，把模型下载、微调、部署变成了几行代码。
- BERT 让 NLP 的入门门槛大幅降低——过去需要精通每个任务的特化架构，现在理解预训练和微调的概念就够了。

但 BERT 也有明显的局限，这些局限后来被 GPT 系模型逐一突破：

- **BERT 是编码器，不是生成器**。它适合理解任务，不能自然地做文本生成。GPT 系列的自回归解码器在生成能力上有天然优势。
- **BERT 的微调模式适合标注数据充足的任务**。当 GPT-3 在 2020 年展示出 few-shot 能力——不需要微调，只靠提示词就能完成新任务——BERT 范式的灵活性劣势暴露了。
- **BERT 没有真正规模化**。最大的 BERT_LARGE 只有 340M 参数。当 GPT-3 做到 175B、PaLM 做到 540B，BERT 架构的设计（固定长度 512、NSP 辅助任务等）很难直接扩展到那个规模。

因此 BERT 的历史位置很清晰：它是**自然语言理解时代的巅峰**，也是**预训练微调范式的定型者**。当行业重心从"理解一句话"转向"生成一段话、推理一个答案、执行一连串操作"，BERT 不再是中心——但它的预训练哲学（用无监督目标从海量文本中学习通用语言知识）仍然是后来所有大模型的基础。

---

## 评曰

BERT 没有发明 Transformer，没有发明预训练，也没有发明微调。它只是把这三件事拼对了。

拼对的关键，是遮蔽语言模型这道巧妙的"考题"：把句子遮住一部分，逼模型在左右文脉中同时寻找线索。这在工程上只是一行随机替换代码，概念上却打通了双向预训练的墙。此前 ELMo 能双向，但用 LSTM，效率不高；GPT-1 用 Transformer，但单向，丢了上下文。BERT 把 Transformer 的双向注意力用 MLM 的目的导向填满，结果就是 GLUE 一次性涨了 7.7%。

RoBERTa 后来证明，BERT 其实没有做到自己方法的极限——更多数据、更久训练、去掉 NSP，同一个架构还能再涨 8 个百分点。这说明 BERT 真正的历史贡献不是在某个具体数字上，而是在范式层面：它让整个 NLP 社区第一次集体迁移到"预训练 + 微调"的工作流上。这种工作流后来被 GPT 系列继承、扩展、颠覆，但地基是 BERT 在 2018 年秋天夯实的。

BERT 的衰落同样真实。它被 GPT 系列在规模竞赛中甩开，被自回归生成压倒，被少样本提示取代了微调的默认地位。但一个模型能让后来者都必须先超越它再谈超越别人，这就已经是历史的锚点。BERT 是大模型史上第一座真正被所有人踩过的山。

---

*本篇由终末地工业史官团队编纂：阿米娅（主笔）。*

---

[^1]: Peters et al., "Deep contextualized word representations", arXiv:1802.05365, submitted 2018-02-15. https://arxiv.org/abs/1802.05365
[^2]: Radford et al., "Improving Language Understanding by Generative Pre-Training", OpenAI, 2018-06. https://cdn.openai.com/research-covers/language-unsupervised/language_understanding_paper.pdf
[^3]: Devlin et al., "BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding", arXiv:1810.04805, submitted 2018-10-11. https://arxiv.org/abs/1810.04805
[^4]: Liu et al., "RoBERTa: A Robustly Optimized BERT Pretraining Approach", arXiv:1907.11692, submitted 2019-07-26. https://arxiv.org/abs/1907.11692
[^5]: Lan et al., "ALBERT: A Lite BERT for Self-supervised Learning of Language Representations", arXiv:1909.11942, submitted 2019-09-26. https://arxiv.org/abs/1909.11942
[^6]: Sanh et al., "DistilBERT, a distilled version of BERT: smaller, faster, cheaper and lighter", arXiv:1910.01108, submitted 2019-10-02. https://arxiv.org/abs/1910.01108
[^7]: Clark et al., "ELECTRA: Pre-training Text Encoders as Discriminators Rather Than Generators", arXiv:2003.10555, submitted 2020-03-23. https://arxiv.org/abs/2003.10555
