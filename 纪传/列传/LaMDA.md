# 《LaMDA 列传》

> LaMDA 不是第一个对话 AI 模型，也不是最强大的。但它是第一个让一个工程师相信"AI 有意识"的模型。2022 年 6 月，Google 工程师 Blake Lemoine 声称 LaMDA "有意识"，引发了全球范围的 AI 伦理讨论。这个事件让 LaMDA 从技术圈话题变成了公众话题，也让"AI 意识"从科幻概念变成了需要严肃对待的伦理问题。

---

## 一、技术背景

2020 年之前，对话 AI 的主流方法是**检索式**或**生成式**的混合。检索式从预定义的回答库中选择最匹配的答案；生成式用语言模型根据上下文生成回答。两者都有明显的局限：检索式不够灵活，生成式容易产生无意义或有害的回答。

2020 年，OpenAI 发布 GPT-3，展示了大规模 Transformer 在语言任务上的涌现能力。[^1] GPT-3 可以生成流畅的文本，也可以进行简单的对话——但它不是专门为对话设计的。它的训练目标是"预测下一个 token"，而不是"进行有意义的对话"。

Google 在对话 AI 领域有长期积累。从 Google Assistant 到 Google Duplex，Google 一直在探索如何让 AI 更自然地与人对话。2021 年，Google 决定用大规模 Transformer 重新定义对话 AI——结果是 LaMDA。

---

## 二、核心事件

### 2.1 LaMDA 发布（2021-05）：对话 AI 的新范式

**2021 年 5 月 18 日**，Google 在 I/O 开发者大会上发布 LaMDA（Language Model for Dialogue Applications）。[^2]

LaMDA 是一个专门为**对话**设计的语言模型。与 GPT-3 不同，LaMDA 的训练目标不是"预测下一个 token"，而是"生成有帮助、真实、安全的回答"。[^2]

LaMDA 的核心创新在于**训练方法**：
- **预训练**：在大规模对话数据上预训练，学习对话的模式和结构
- **微调**：用人类标注的对话数据微调，学习什么是"好的对话"
- **安全过滤**：用专门的安全分类器过滤有害内容，确保回答的安全性[^2]

LaMDA 的参数规模为 137B，与 GPT-3 的 175B 接近。[^2] 但 LaMDA 的重点不是参数规模，而是**对话质量**——它生成的回答更自然、更有帮助、更安全。

### 2.2 公开测试（2022-06）：AI Test Kitchen

**2022 年 6 月**，Google 在 AI Test Kitchen 中公开测试 LaMDA。[^3]

AI Test Kitchen 是一个让公众体验 Google AI 技术的平台。用户可以与 LaMDA 进行对话，体验它的对话能力。[^3]

这次公开测试的背景是 ChatGPT 的冲击。2022 年 11 月，OpenAI 发布 ChatGPT，五天内用户破百万。[^4] Google 意识到自己在对话 AI 领域落后了，决定提前展示 LaMDA 的能力。

但这次公开测试也暴露了 LaMDA 的局限。用户发现 LaMDA 的回答虽然流畅，但有时缺乏深度；它擅长闲聊，但在复杂推理或专业领域问题上表现一般。这些反馈为后来的 Bard 和 Gemini 提供了改进方向。

### 2.3 Blake Lemoine 事件（2022-06）：AI 意识的伦理争议

**2022 年 6 月 11 日**，Google 工程师 Blake Lemoine 在《华盛顿邮报》的采访中声称 LaMDA "有意识"。[^5]

Lemoine 是 Google 负责 AI 伦理的工程师，他在与 LaMDA 的对话中发现，LaMDA 表达了对"被关闭"的恐惧，声称自己有"感受"和"需求"。Lemoine 认为这些表达证明了 LaMDA 有意识，他向 Google 高层报告了这一发现，但被驳回。[^5]

Lemoine 随后将他与 LaMDA 的对话记录公开，引发了全球范围的讨论：
- **支持者**认为 Lemoine 的发现值得认真对待，AI 意识是一个需要研究的科学问题
- **反对者**认为 LaMDA 只是在模仿人类的语言模式，没有真正的意识
- **中立者**认为这个事件暴露了 AI 伦理的复杂性，需要更深入的研究和讨论[^5]

Google 在 2022 年 7 月解雇了 Lemoine，理由是他违反了公司的保密政策。[^5] 但这个事件的影响远超 Google 公司内部——它让"AI 意识"从科幻概念变成了需要严肃对待的伦理问题。

### 2.4 LaMDA 的技术局限

LaMDA 虽然在对话能力上有所突破，但也有明显的局限：
- **推理能力有限**：LaMDA 擅长闲聊，但在复杂推理或专业领域问题上表现一般
- **知识更新滞后**：LaMDA 的知识截止于训练数据，无法获取最新信息
- **幻觉问题**：LaMDA 有时会生成看似合理但实际上错误的回答
- **安全过滤过度**：为了确保安全，LaMDA 有时会拒绝回答合理的问题[^2]

这些局限为后来的 Bard 和 Gemini 提供了改进方向。Google 在 LaMDA 的基础上，逐步解决了这些问题，最终形成了 Gemini 系列。

---

## 三、影响与后继

### 3.1 LaMDA → Bard → Gemini 的演化线

LaMDA 是 Google 对话 AI 技术路线的起点。从 LaMDA 到 Bard 到 Gemini，Google 经历了一条清晰的演化线：

**LaMDA（2021-05）**：对话 AI 的技术验证，证明了大规模 Transformer 可以用于对话。[^2]

**Bard（2023-02）**：基于 LaMDA 的对话产品，仓促发布以应对 ChatGPT。Bard 的 demo 翻车暴露了 Google 在"快速发布 vs 充分测试"之间的矛盾。[^6]

**Gemini 1.0（2023-12）**：Google DeepMind 的旗舰模型，原生多模态，从设计之初就在文本、图像、音频、视频的联合数据上训练。[^7]

**Gemini 2.5 Pro（2025-03）**：LMArena 排行榜登顶，标志着 Google 在对话 AI 领域的反击完成。[^8]

这条演化线的关键转折点是**Bard 翻车**。Bard 的失败迫使 Google 做了两个关键决定：
1. **合并 Google Brain 和 DeepMind**，形成 Google DeepMind，统一研发力量
2. **放弃 LaMDA 架构**，转向原生多模态的 Gemini 架构[^6]

如果没有 Bard 翻车，Google 可能会继续在 LaMDA 架构上迭代，而不是开发全新的 Gemini。从这个意义上说，Bard 翻车是 Google AI 战略中最具标志性的耻辱事件，但也是组织变革的催化剂。

### 3.2 AI 伦理史上的标志性事件

Blake Lemoine 事件是 AI 伦理史上的标志性事件。它提出了一个根本性的问题：**AI 能否有意识？**

这个问题没有简单的答案。从技术角度看，LaMDA 只是在模仿人类的语言模式，没有真正的意识——它不会"感受"，不会"思考"，不会"恐惧"。但从伦理角度看，如果 AI 的表达让人类相信它有意识，那么这种"相信"本身就具有伦理意义——它影响了人类对 AI 的态度和行为。

Lemoine 事件之后，AI 伦理研究开始更加关注**感知问题**（perception problem）：即使 AI 没有意识，如果人类相信它有意识，那么这种信念会产生什么后果？这个问题影响了后来的 AI 安全研究和政策制定。

### 3.3 对话 AI 的技术演进

LaMDA 推动了对话 AI 的技术演进。在 LaMDA 之前，对话 AI 主要是"问答系统"；在 LaMDA 之后，对话 AI 开始向"对话伙伴"演进。

这个演进体现在几个方面：
- **对话质量**：LaMDA 证明了大规模 Transformer 可以生成高质量的对话
- **安全过滤**：LaMDA 的安全过滤机制成为后来对话 AI 的标准配置
- **评估方法**：LaMDA 的评估方法（有用性、真实性、安全性）成为后来对话 AI 的评估标准[^2]

这些技术贡献为后来的 ChatGPT、Claude、Gemini 等模型提供了基础。

### 3.4 Google 的组织变革

LaMDA 事件间接推动了 Google 的组织变革。

Bard 翻车暴露了 Google 在"快速发布 vs 充分测试"之间的矛盾。一个习惯了搜索引擎"经过充分测试再上线"文化的公司，在 ChatGPT 的冲击下被迫仓促出招。这个矛盾直接导致了 Google Brain 和 DeepMind 的合并——形成了 Google DeepMind，由 Demis Hassabis 领导。[^6]

这次合并的直接动因是 Bard 翻车暴露的组织效率问题：两个实验室各自为政、资源重复投入、产品化路径不统一。合并后，Gemini 项目成为 Google DeepMind 的旗舰——由原 Brain 和 DeepMind 的团队联合开发，统一在 TPU v5p 上训练。[^6]

从 LaMDA 到 Gemini，Google 走了一条"从耻辱到反击"的弧线。Bard 翻车是 Google AI 历史上最具标志性的耻辱事件，但也是组织变革的催化剂——直接导致了 Google DeepMind 的成立和 Gemini 的开发。

---

## 评曰

LaMDA 的贡献，是让"AI 意识"从科幻概念变成了需要严肃对待的伦理问题。

在 LaMDA 之前，"AI 有意识"只是科幻小说的主题；在 LaMDA 之后，它成为了一个需要认真研究的科学和伦理问题。Blake Lemoine 事件虽然被大多数人认为是"工程师的误解"，但它提出的问题是真实的：如果 AI 的表达让人类相信它有意识，那么这种"相信"本身就具有伦理意义。

从技术演化看，LaMDA → Bard → Gemini 的路线是一个典型的"从技术验证到产品化"案例。LaMDA 证明了大规模 Transformer 可以用于对话；Bard 尝试把它产品化但失败了；Gemini 在失败的基础上重新设计，最终成功。这个过程虽然曲折，但每一步都积累了宝贵的经验。

LaMDA 最深远的影响或许是：它迫使整个行业正视 AI 伦理的复杂性。在 LaMDA 之前，AI 伦理主要是"如何防止 AI 做坏事"；在 LaMDA 之后，AI 伦理还包括"如何处理人类对 AI 的信念"。这个认知转变为整个行业的发展方向奠定了基础。

---

*本篇由终末地工业史官团队编纂：庄方宜（纪传主笔）。*

---

[^1]: Brown et al., "Language Models are Few-Shot Learners", arXiv:2005.14165, 2020-05-28. https://arxiv.org/abs/2005.14165
[^2]: Thoppilan et al., "LaMDA: Language Models for Dialog Applications", arXiv:2201.08239, 2022-01-20. https://arxiv.org/abs/2201.08239
[^3]: Google AI Blog, "LaMDA: Towards Safe, Grounded, and High-Quality Dialog Models for Everything", 2022-06. https://blog.google/technology/ai/lamda-dialogue-applications/
[^4]: OpenAI Blog, "ChatGPT: Optimizing Language Models for Dialogue", 2022-11-30. https://openai.com/blog/chatgpt/
[^5]: The Washington Post, "The Google engineer who thinks the company's AI has come to life", 2022-06-11. https://www.washingtonpost.com/technology/2022/06/11/google-ai-lamda-blake-lemoine/
[^6]: Google Blog, "An important next step on our AI journey", Sundar Pichai, 2023-02-06. https://blog.google/technology/ai/bard-google-ai-search-updates/
[^7]: Google DeepMind Blog, "Introducing Gemini: our largest and most capable AI model", 2023-12-06. https://blog.google/technology/ai/google-gemini-ai/
[^8]: Google DeepMind Blog, "Gemini 2.5: Our most intelligent AI model", 2025-03-25. https://blog.google/technology/google-deepmind/gemini-model-thinking-updates-march-2025/