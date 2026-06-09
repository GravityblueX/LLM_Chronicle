# 《LoRA 列传》

> LoRA（Low-Rank Adaptation，低秩适配）不是一个大模型，而是一种"怎么改大模型"的方法。它的核心发现很朴素：大模型在下游任务上的更新，可以用低秩矩阵来描述。冻结原始权重，只在旁边插两个小矩阵，训练它们就行。这件事在 2021 年发端于语言模型微调，却在 2022 年以后的文生图社区里引爆了一场"人人可训模型"的运动。

---

## 一、技术背景

2018—2020 年，大模型的路线很清楚：先用海量数据预训练一个基座，再在下游任务上微调。BERT 这样做，GPT 也这样做。微调意味着更新全部参数——BERT-base 的 110M 参数要全部动一遍，GPT-3 的 175B 更要全部动。

问题顺着规模涨上来。全参数微调（full fine-tuning）的缺点至少有三个：

第一，显存成本巨大。GPT-3 175B 做一次全参数微调，Adam 优化器需要同时保存原始参数、梯度和动量，显存需求约是推理的 4 倍以上。第二，部署成本高。每个下游任务都要保存一份完整的微调后模型，十个任务就要存十份 175B 的权重。第三，切换成本高。从一个任务换到另一个，需要换掉整个模型，而不是只换一部分参数。

在 LoRA 之前，社区已经有 adapter 和 prefix tuning 等方案试图解决这些问题。Adapter 在 Transformer 层之间插入小的可训练模块，prefix tuning 在输入前加可训练的虚拟 token。它们确实减少了可训练参数，但带来了一个新麻烦：推理延迟。Adapter 层会拉长计算路径，prefix tuning 会占用有效序列长度。[^1][^2]

LoRA 提出的问题是：能不能既减少可训练参数，又不增加推理延迟？

---

## 二、核心创新

### 2.1 低秩分解：大模型的更新其实是"低秩"的

LoRA 由微软的 Hu 等人在 2021 年 6 月提出。论文的核心假设很优雅：预训练模型在适应下游任务时，权重更新矩阵 ΔW 是低秩的。换句话说，模型虽然大，但它需要"学"的那部分内容，并不需要全部参数空间。[^3]

基于这个假设，LoRA 的做法是：冻结原始权重 W，在旁边插入两个小矩阵 A 和 B，用它们的乘积 BA 来近似 ΔW。推理时，BA 可以直接合并进 W——新的权重就是 W + BA。这意味着推理延迟不会增加，因为合并后的模型和原始模型结构完全相同。

论文报告，在 GPT-3 175B 上，LoRA 将可训练参数减少了 10,000 倍，GPU 显存需求降低了 3 倍。而在 RoBERTa、DeBERTa、GPT-2、GPT-3 上的多项实验表明，LoRA 微调的模型质量与全参数微调相当甚至更好。[^3]

LoRA 的吸引力不只在数字。它是一种工程上的善意——不要改原来那块经过大量计算训练出来的巨石，在旁边放一小块可以调整的薄片就行。你要换任务？换这块薄片，不用重新搬运巨石。

### 2.2 可插拔适配：一个基座、多个 LoRA，即时切换

LoRA 的训练产物是一组很小的矩阵文件。对于 GPT-3 175B，全参数微调要存 350 GB 以上；一个典型的 LoRA 秩为 8 的适配器可能只有几 MB 到几十 MB。

这个体积差异带来了一个质变：同一个基座模型可以配套几十个、几百个不同用途的 LoRA 适配器，藏在硬盘上，要用哪个加载哪个。医疗问答、法律文书、代码补全、古诗创作——底下的模型是同一个，上面的"壳"可以随时换。

这种"一个基座 + 多壳切换"的模式，后来被 Hugging Face PEFT（Parameter-Efficient Fine-Tuning）库标准化。PEFT 把 LoRA、prefix tuning、prompt tuning、IA³ 等方法统一到一个接口下，并支持与 transformers 库无缝对接。"几行代码给模型插上一个 LoRA"从此成为社区常识。[^4]

### 2.3 关键数据

| 指标 | 数值 | 说明 |
|------|------|------|
| 论文发布日期 | 2021-06-17 | arXiv:2106.09685[^3] |
| 可训练参数减少 | 约 10,000 倍 | 相比 GPT-3 175B 全参数微调[^3] |
| GPU 显存降低 | 约 3 倍 | 相比 GPT-3 175B 全参数微调[^3] |
| 推理延迟 | 无增加 | 权重可原地合并，结构不变[^3] |
| 典型秩 r | 4~64 | r=8 在许多任务上表现已良好[^3] |
| 应用范围 | 语言模型 + 扩散模型 + 其他 | 后来扩展到各种 Transformer 和 U-Net[^3][^5] |

---

## 三、影响与后继

### 3.1 Stable Diffusion 生态：LoRA 成为创作者的武器

LoRA 在大模型史上最引人注目的扩展，不在 NLP，而在文生图。

2022 年 8 月 Stable Diffusion 发布后，社区很快发现 LoRA 可以直接应用在扩散模型的 U-Net 上。它的价值立即被放大：你不需要重新训练整个 Stable Diffusion 模型（这需要大量数据和算力），只需要用自己的几十张图片，训练一个几 MB 到几十 MB 的 LoRA，就能让模型学会画你的脸、你的猫、你的画风。[^5]

Civitai、Hugging Face 等平台上，至今已有数十万个公开的 LoRA 模型，覆盖角色、风格、姿势、服装、场景等各种概念。这是大模型历史上极其罕见的场景：一个技术论文里的方法，被几百万非 AI 专业用户作为日常工具使用。

LoRA 在 Stable Diffusion 生态里的角色，是把微调从"只有机构能做"变成了"任何有消费级显卡的人都能做"。当一个人用自己拍的五十张猫的照片训练一个 LoRA，并看到模型真的画出了"她那只猫"时，大模型就不再是实验室里的数字，而是可以被普通人定制的工具。这批用户的出现，比任何论文都更直接地证明了 LoRA 的历史影响。

### 3.2 开源语言模型：LoRA 降低微调门槛

2023 年 LLaMA 权重泄漏以后，开源语言模型生态爆发。LoRA 在其中扮演了一个关键角色：让 7B、13B、70B 模型的微调可以在单张消费级 GPU 上完成。

Stanford 的 Alpaca、Berkeley 的 Vicuna 等项目虽然不完全使用 LoRA，但 LoRA 很快成为社区微调 LLaMA 系模型的主流选择之一。后来 Qwen、DeepSeek、Llama 2/3、Mistral 等模型的社区微调生态中，LoRA 或 QLoRA（量化 LoRA）几乎成为默认方式。[^6]

QLoRA 是 LoRA 的一个重要变体。2023 年 Dettmers 等人提出，将基座模型量化为 4-bit，再在量化模型上做 LoRA 微调。这意味着一个 65B 的模型可以在 48GB 显存下微调——一块消费级 RTX 6000 Ada 就能做到。[^6]

此时回头看 2021 年的 LoRA 论文，会发现它留下了一条清楚的路径：不用大集群、不用几百 GB 显存、不用把整个模型搬来搬去，一个研究者、一个开发者、一个创作者就可以定制自己的模型。这条路径后来成为开源 AI 生态的硬件基础。

### 3.3 扩散到其他领域：不止 Transformer

LoRA 的原论文聚焦在 Transformer 的注意力权重上，但它的公式非常通用：任何一层线性变换 W，都可以冻结它并在旁边加 BA。因此 LoRA 很快被扩散到其他架构和任务。

在扩散模型里，LoRA 被用在 U-Net 的卷积层和交叉注意力层上。在语音模型里，LoRA 被用来适配 Whisper 等语音识别模型。在视觉模型里，LoRA 被用来微调 ViT。甚至在多模态大模型（如 LLaVA）的视觉编码器和投影层上，LoRA 也被用作轻量微调方案。[^8]

LoRA 从"语言模型的低秩适配"变成了"一种通用的参数高效微调方法"，这个过程和 Transformer 从"NLP 架构"变成"通用序列建模工具"有相似之处：重要的不是最初定义在哪个领域，而是方法本身足够简单、足够通用，可以跟着用户的想象力一起跑。

### 3.4 竞争与融合：不是唯一的 PEFT

LoRA 是参数高效微调（PEFT）谱系中最有名的一种，但不是唯一一种。

Adapter 在 Transformer 层之间加小模块，设计上更直观但推理时有延迟。Prefix tuning 和 prompt tuning 在输入端加可训练向量，极其轻量但对复杂任务有时不够。IA³ 学习重缩放因子，参数最少但灵活性有限。[^8]

2023—2025 年间，各种 PEFT 方法出现融合趋势。Hugging Face PEFT 库同时支持 adapter、prefix tuning、prompt tuning、LoRA、IA³ 等方法，用户可以按需组合。在实践中，LoRA 因其实现简单、不增加推理延迟、可与量化结合而获得了最广泛的使用。

到 2026 年，LoRA 已经被大量吸收进日常流程：发布模型时附带 LoRA 微调指南是开源模型的标准操作，Hugging Face 模型页面常常直接集成 PEFT 使用示例，"用 LoRA 微调一下"成为接近于"用 Git clone 一下"的工程习惯。

---

## 评曰

LoRA 的贡献，是把大模型微调从"集装箱搬运"变成了"贴便签"。

在它之前，微调意味着复制整个模型，移动全部参数，为每个任务保存一份完整权重。在它之后，微调意味着冻结原始权重，在关键层旁边插入两个小矩阵，训练、保存、随时可拔。大模型像一块巨石，LoRA 不是在石头上重新雕刻，而是贴上一片片的薄板，每片薄板对应一个技能。

这件事的冲击比数字更大。全参数微调模式下的 GPU 需求，实际上在说：只有大公司才能定制大模型。LoRA 把门槛降到了单卡消费级——这在 Stable Diffusion 社区表现得最直接，几百万用户用几十张图训练自己的 LoRA，而他们中的大多数人可能根本不知道低秩分解是什么。

历史会记住 LoRA，不是因为它发明了低秩矩阵——线性代数比深度学习老得多——而是因为它在最恰当的时机（大模型越来越臃肿），用最简单的方式（冻结 + 低秩旁路），让"定制模型"这件事从特权变成了日常。

---

*本篇由终末地工业史官团队编纂：白面鸮（Lead Data Analyst）*

---

[^1]: Houlsby et al., "Parameter-Efficient Transfer Learning for NLP", ICML 2019 / arXiv:1902.00751. https://arxiv.org/abs/1902.00751
[^2]: Li and Liang, "Prefix-Tuning: Optimizing Continuous Prompts for Generation", ACL 2021 / arXiv:2101.00190. https://arxiv.org/abs/2101.00190
[^3]: Hu et al., "LoRA: Low-Rank Adaptation of Large Language Models", ICLR 2022 / arXiv:2106.09685, 2021-06-17. https://arxiv.org/abs/2106.09685
[^4]: Hugging Face, "PEFT: Parameter-Efficient Fine-Tuning", 2022. https://github.com/huggingface/peft
[^5]: Stable Diffusion 社区 LoRA 使用实践, Civitai. https://civitai.com/
[^6]: Dettmers et al., "QLoRA: Efficient Finetuning of Quantized Language Models", arXiv:2305.14314, 2023. https://arxiv.org/abs/2305.14314
[^7]: Liu et al., "Visual Instruction Tuning", arXiv:2304.08485, 2023. https://arxiv.org/abs/2304.08485（LLaVA 微调使用 LoRA 的讨论）
[^8]: Liu et al., "Few-Shot Parameter-Efficient Fine-Tuning is Better and Cheaper than In-Context Learning", NeurIPS 2022 / arXiv:2205.05638. https://arxiv.org/abs/2205.05638（IA³）
