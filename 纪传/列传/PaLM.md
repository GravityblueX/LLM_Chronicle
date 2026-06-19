# 《PaLM 列传》

> PaLM 不是 Google 第一个大语言模型，但它是 Google 第一次把"大"做到极致的模型。540B 参数、6144 块 TPU v4、780B token——这些数字本身不重要，重要的是它用这些算力证明了两件事：模型够大，few-shot 就能逼近人类；思维链（Chain-of-Thought）能解锁推理能力。PaLM 之后，Google 的大模型路线彻底转向了 Pathways。

---

## 一、技术背景

2020 年 GPT-3 发布后，Google 面临一个尴尬的局面：Transformer 是 Google Brain 发明的，但 few-shot 学习的风头被 OpenAI 抢了。GPT-3 用 175B 参数展示了"大模型 + 大数据 = 通用能力"的范式，而 Google 当时最大的语言模型是 T5-11B——只有 110 亿参数，不到 GPT-3 的十分之一。[^1]

Google 不是没有算力，而是没有把算力集中到一个模型上的架构。2020 年之前的主流做法是"数据并行"——把同一批数据分给多块 GPU，每块 GPU 持有完整的模型副本。这种方式在模型超过几十B参数时效率急剧下降，因为模型本身塞不进单卡显存，需要引入复杂的模型并行策略。

2021 年，Google 提出了 **Pathways** 架构——一种新的分布式训练系统，目标是"让数千块加速器像一块一样工作"。[^2] Pathways 的核心创新是**模型并行 + 流水线并行 + 数据并行的混合调度**，让不同计算节点处理模型的不同部分，同时处理不同的数据。这个架构解决了"怎么在几千块 TPU 上训练一个 500B+ 参数模型"的工程问题。

PaLM 就是 Pathways 的第一个"毕业设计"。

---

## 二、核心事件

### 2.1 PaLM 540B（2022-04）：Google 的参数巅峰

2022 年 4 月 4 日，Google Research 发布论文《PaLM: Scaling Language Modeling with Pathways》，公布了 PaLM 系列模型。[^3]

PaLM 有三个版本：8B、62B、540B。最大的 540B 版本拥有 **5400 亿参数**，训练数据是 **780B token**（来自英文网页、书籍、Wikipedia、GitHub 代码、对话数据等），使用了 **6144 块 TPU v4** 芯片进行训练。[^3]

这是当时公开的、密集型（Dense）语言模型中参数量最大的。同期最大的竞品是 NVIDIA 和 Microsoft 联合训练的 Megatron-Turing NLG（530B），参数量略少于 PaLM。[^4]

PaLM 540B 在 29 个评测基准中的 28 个上刷新了 SOTA，包括问答、常识推理、阅读理解、翻译、代码生成等多个任务。更关键的是，它展示了惊人的 **few-shot 学习能力**：在很多任务上，给 PaLM 几个示例，它就能达到甚至超过经过微调的专用模型。[^3]

### 2.2 Chain-of-Thought：思维链推理的突破

2022 年 1 月，Google 的 Jason Wei 等人发表论文《Chain-of-Thought Prompting Elicits Reasoning in Large Language Models》，提出了一种新的提示方法：在 few-shot 示例中，不仅给出最终答案，还给出推理过程的中间步骤。[^5]

这个方法在 PaLM 540B 上效果惊人：在 GSM8K（小学数学题）上，标准 few-shot 提示的准确率约 18%，加入思维链后准确率飙升到 **57%**。[^5] 在某些任务上，思维链提示甚至让 PaLM 540B 超过了经过大量标注数据微调的模型。

更令人意外的是，思维链能力似乎是大模型独有的"涌现能力"——在小模型（如 GPT-3 175B 的 few-shot 约 15%）上几乎无效，只有当模型参数量超过一定阈值（约 100B）时才会突然出现。[^5] 这个发现直接引发了后来关于"涌现能力"的大量研究，也证明了"规模"本身能带来质的变化。

### 2.3 PaLM 2（2023-05）：更高效的下一代

2023 年 5 月 10 日，Google 在 Google I/O 大会上发布 PaLM 2。[^6] 与 PaLM 1 的"暴力堆参数"不同，PaLM 2 的重点是**效率**——更好的数据、更好的训练方法，用更少的参数达到更好的效果。

PaLM 2 的技术细节公开得很少（Google 没有发布完整的技术论文），但从公开信息可以拼出几个关键变化：

- **更多、更好的训练数据**：PaLM 2 的训练数据比 PaLM 1 多得多，且包含更多非英文数据（支持 100+ 种语言）和数学/科学数据。[^6]
- **更高效的架构**：没有公布具体参数量，但多个来源推测 PaLM 2 最大版本在 340B-540B 之间，训练效率远高于 PaLM 1。[^7]
- **推理能力提升**：在数学推理（MATH）、代码生成（HumanEval）、科学推理等任务上大幅超越 PaLM 1。[^6]

PaLM 2 是 **Bard**（Google 的对话 AI 产品，后改名 Gemini）的技术底座。当用户在 2023 年使用 Bard 时，背后跑的就是 PaLM 2。[^6]

### 2.4 从 PaLM 到 Gemini：技术路线的演进

2023 年 12 月 6 日，Google 发布 Gemini 1.0，标志着 PaLM 时代正式落幕。[^8] Gemini 不再是纯语言模型——它是一个**原生多模态模型**，从训练阶段就同时处理文本、图像、音频、视频和代码。

Gemini 1.0 有三个版本：Ultra、Pro、Nano。其中 Gemini Ultra 在 MMLU 上首次超过人类专家（90.0% vs 人类 89.8%），在 32 个评测基准中的 30 个上超越 GPT-4。[^8]

从 PaLM 到 Gemini 的演进路线：

| 版本 | 时间 | 关键变化 |
|------|------|----------|
| PaLM 540B | 2022-04 | Pathways 架构、540B 参数、few-shot SOTA |
| PaLM 2 | 2023-05 | 效率优化、多语言、推理能力、Bard 底座 |
| Gemini 1.0 | 2023-12 | 原生多模态、超越 GPT-4 |
| Gemini 1.5 | 2024-02 | 百万 token 上下文、MoE 架构 |
| Gemini 2.0 | 2024-12 | 原生工具使用、Agent 能力 |

PaLM 的技术遗产——Pathways 分布式训练、思维链推理、规模带来的涌现能力——都被 Gemini 继承并进一步发展。

---

## 三、影响与后继

### 3.1 思维链引发的推理革命

Chain-of-Thought 的影响远超 PaLM 本身。2022 年之后，"推理"成为大模型研究的核心主题之一：

- **Zero-shot CoT**（2022-05）：Kojima 等人发现只需在 prompt 中加一句"Let's think step by step"就能激活思维链推理，无需 few-shot 示例。[^9]
- **Self-Consistency**（2023-03）：Wang 等人提出对多个思维链采样然后投票，进一步提升推理准确率。[^10]
- **Tree-of-Thought / Graph-of-Thought**：更复杂的推理框架，在思维链的基础上引入搜索和回溯。
- **OpenAI o1**（2024-09）：把思维链从"提示技巧"变成了"模型内在能力"，通过强化学习让模型学会更长、更深入的推理链。[^11]

可以说，没有 PaLM 上思维链的惊艳表现，就不会有后来整个"推理增强"方向的发展。

### 3.2 Pathways：分布式训练的范式转移

PaLM 的另一个重要遗产是 **Pathways 系统本身**。在 PaLM 之前，大模型训练主要依赖 Megatron-LM（NVIDIA）的模型并行方案；在 PaLM 之后，Google 的 Pathways 证明了"混合并行"是训练超大规模模型的正确路径。[^2]

Pathways 的设计理念——让不同计算节点处理模型的不同部分，同时处理不同的数据——后来被多个系统借鉴。Google 自己的后续模型（Gemini 全系列）都在 Pathways 上训练；其他公司的分布式训练框架（如 DeepSpeed、FSDP）也逐渐引入了类似的混合并行策略。

### 3.3 Bard/Gemini 产品线的技术基石

PaLM 最直接的后继者是 **Bard**（2023-03 发布，后改名 Gemini）。[^12] 在 ChatGPT 带来的压力下，Google 被迫将未完全准备好的 PaLM 2 推向公众，Bard 的初期表现不佳一度成为笑柄。但 Google 很快用 Gemini 替换了 Bard 的底层模型，最终在 2024 年 2 月将 Bard 正式改名 Gemini。[^13]

从产品角度看，PaLM 的价值在于：它证明了 Google 有能力训练世界级的大语言模型，只是在"从模型到产品"的转化上慢了 OpenAI 半拍。这个教训深刻影响了 Google 后续的 AI 产品策略——Gemini 系列从一开始就同时面向研究和产品。

---

## 评曰

PaLM 的核心贡献是用工程实力证明了"规模"的价值：540B 参数在 29 个基准上刷新 SOTA，而 Chain-of-Thought 提示在 PaLM 上的惊艳表现开辟了整个推理增强方向。

PaLM 之所以重要，不仅因为它是一个好模型，更因为它承载了 Google 的架构创新——Pathways。在 OpenAI 用微软 Azure 的 GPU 集群训练 GPT 系列时，Google 选择了自研 TPU + 自研分布式系统 + 自研模型的全栈路线。这条路线的代价是灵活性不如 GPU 生态，但优势是能训练其他公司无法训练的超大规模模型。PaLM → Gemini 的演进证明了这条路线的可行性。

PaLM 的历史地位需要放在一个更大的背景下理解：它是 Google 从"Transformer 发明者"到"大模型竞争者"的关键转折点。在 PaLM 之前，Google 的大模型战略摇摆不定；在 PaLM 之后，Google 确立了"Pathways + TPU + 多模态"的技术路线，一路走到了 Gemini。没有 PaLM 的成功，就没有 Google 在大模型时代的竞争力。PaLM 是 Google AI 的"中途岛战役"——不是最终胜利，但证明了自己有打这场仗的能力。

---

*赫默（编年主笔）*

---

[^1]: Raffel et al., "Exploring the Limits of Transfer Learning with a Unified Text-to-Text Transformer", arXiv:1910.10683, 2019-10-23. https://arxiv.org/abs/1910.10683
[^2]: Dean et al., "Pathways: Autoregressive Text Generation with Large Language Models", Google AI Blog, 2022-03-29. https://blog.google/technology/ai/introducing-pathways-next-generation-ai-architecture/
[^3]: Chowdhery et al., "PaLM: Scaling Language Modeling with Pathways", arXiv:2204.02311, 2022-04-04. https://arxiv.org/abs/2204.02311
[^4]: Smith et al., "Using DeepSpeed and Megatron to Train Megatron-Turing NLG 530B, A Large-Scale Generative Language Model", arXiv:2201.11990, 2022-01-24. https://arxiv.org/abs/2201.11990
[^5]: Wei et al., "Chain-of-Thought Prompting Elicits Reasoning in Large Language Models", arXiv:2201.11903, 2022-01-10. https://arxiv.org/abs/2201.11903
[^6]: Google, "PaLM 2 Technical Report", arXiv:2305.10403, 2023-05-10. https://arxiv.org/abs/2305.10403
[^7]: Wiggers, K., "Google's PaLM 2 language model reportedly trained on almost five times more data than its predecessor", TechCrunch, 2023-05-17. https://techcrunch.com/2023/05/17/googles-palm-2-language-model-reportedly-trained-on-almost-five-times-more-data-than-its-predecessor/
[^8]: Gemini Team, "Gemini: A Family of Highly Capable Multimodal Models", arXiv:2312.11805, 2023-12-06. https://arxiv.org/abs/2312.11805
[^9]: Kojima et al., "Large Language Models are Zero-Shot Reasoners", arXiv:2205.11916, 2022-05-24. https://arxiv.org/abs/2205.11916
[^10]: Wang et al., "Self-Consistency Improves Chain of Thought Reasoning in Language Models", arXiv:2203.11171, 2023-03-07. https://arxiv.org/abs/2203.11171
[^11]: OpenAI, "Learning to Reason with LLMs", OpenAI Blog, 2024-09-12. https://openai.com/index/learning-to-reason-with-llms/
[^12]: Google, "An important next step on our AI journey", The Keyword, 2023-03-21. https://blog.google/technology/ai/bard-google-ai-search-updates/
[^13]: Google, "Bard is now Gemini", The Keyword, 2024-02-08. https://blog.google/technology/ai/google-gemini-ai-update-february-2024/
