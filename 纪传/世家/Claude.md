# 《Claude 世家》

> Claude 是 Anthropic 的大语言模型家族，以"Constitutional AI"（宪法 AI）为核心技术路线，主打安全对齐。从 2022 年的内部版本到 2025 年的 Claude 4，Claude 走了一条与 GPT 截然不同的路——不是用规模取胜，而是用对齐定义产品的边界。它的故事是"安全优先"的 AI 公司如何在"能力优先"的竞争中存活、壮大、最终正面超越 GPT 的故事。

---

## 一、概述

Claude 系列由 Anthropic PBC 开发。Anthropic 于 2021 年 1 月 26 日在旧金山注册成立，创始人 Dario Amodei 和 Daniela Amodei 兄妹曾在 OpenAI 任职——Dario 担任研究副总裁，Daniela 担任运营副总裁。他们带着对 AI 安全方向的不同理解离开 OpenAI，创立了 Anthropic。[^1]

Claude 的核心技术创新是 **Constitutional AI（宪法 AI）**——2022 年 12 月发表的论文提出了一种新的对齐方法：不需要大量人类标注员标注有害内容，而是用一组"宪法原则"让 AI 自己评判和修正自己的输出。这个方法的两个阶段——监督学习阶段（AI 自我批评和修订）和强化学习阶段（RLAIF，AI 反馈强化学习）——为 Claude 奠定了"用更少的人类标签实现更好的安全对齐"的技术基础。[^2]

Claude 的迭代经历了三个明确的阶段：**对齐探索期**（Claude 1.x/2.x，2023-2024 初）、**能力爆发期**（Claude 3/3.5，2024），以及**推理融合期**（Claude 3.7/4，2025）。在前两个阶段，Claude 始终是 GPT 的追赶者——在安全性和对话体验上占优，但在 raw capability 上落后。转折点是 2024 年 3 月的 Claude 3 Opus——它首次在多项基准上正面超越 GPT-4，改变了"Anthropic 是 AI 安全公司，不是 AI 能力公司"的市场认知。

---

## 二、代际演进

| 代际 | 发布时间 | 参数规模 | 核心创新 | 许可 |
|------|----------|----------|----------|------|
| Claude (初代) | 2023-03 | 未公开（据传 ~52B，存疑） | Constitutional AI (RLAIF) | 闭源 |
| Claude Instant | 2023-03 | 未公开 | 轻量快速版，成本更低 | 闭源 |
| Claude 2 | 2023-07-11 | 未公开 | 100K token 上下文，首次大规模商用 | 闭源 |
| Claude 2.1 | 2023-11 | 未公开 | 200K 上下文，幻觉率减半 | 闭源 |
| Claude 3 Haiku/Sonnet/Opus | 2024-03-04 | 未公开（三档） | 首次正面超越 GPT-4，视觉能力 | 闭源 |
| Claude 3.5 Sonnet | 2024-06-20 | 未公开 | Artifacts，编程助手标杆 | 闭源 |
| Claude 3.5 Sonnet (升级版) | 2024-10-22 | 未公开 | Computer use，SWE-bench 49% | 闭源 |
| Claude 3.5 Haiku | 2024-10/11 | 未公开 | 匹配 Claude 3 Opus 能力 | 闭源 |
| Claude 3.7 Sonnet | 2025-02-24 | 未公开 | 首个混合推理模型 | 闭源 |
| Claude Opus 4 / Sonnet 4 | 2025-05-22 | 未公开 | 全球最佳编程模型，Claude Max 订阅 | 闭源 |

### 2.1 Claude (初代)：宪法 AI 的第一块试验田

2022 年 12 月，Anthropic 在 arXiv 发表了《Constitutional AI: Harmlessness from AI Feedback》论文。这篇论文描述的技术——让 AI 根据一组预设原则自我批评和修订输出——成为了 Claude 系列的技术基底。[^2]

2023 年 3 月，Claude 正式公开发布，提供两个版本：Claude（高性能版）和 Claude Instant（轻量快速版）。初始合作伙伴包括 Notion、Quora（通过 Poe 平台）和 DuckDuckGo。[^3] 参数规模从未公开披露——外界推测约为 52B 参数（存疑），但 Anthropic 始终拒绝确认。

Claude 初代的定位不是与 GPT-3.5 在能力上正面对抗——它在大多数基准上落后于 ChatGPT。Claude 的卖点是"更少有害输出、更易对话、更可控"。Anthropic 在发布时特别强调"less likely to produce harmful outputs"——这既是技术承诺，也是市场差异化。

值得注意的是，Claude 初代的发布时间距 ChatGPT 爆发（2022 年 11 月）仅四个月。Anthropic 不得不在 GPT 改变世界的那个时刻同时发布自己的第一个产品——这是一个被时间线挤压的决策，而非一个从从容选择的时机。

### 2.2 Claude 2：100K 与首次大规模商用

2023 年 7 月 11 日，Claude 2 发布。[^4] 核心升级：**100K token 上下文窗口**——在当时是行业最大的可用上下文窗口，意味着 Claude 可以一次处理数百页技术文档甚至整本书。同时，Anthropic 首次面向公众开放 claude.ai 网站——在此之前 Claude 仅通过 API 和合作伙伴提供服务。

在能力上，Claude 2 在律师资格考试（Bar Exam）的多选部分得分 76.5%（Claude 1.3 为 73.0%）；在 GRE 阅读和写作上超过 90% 的考生；在编程基准 Codex HumanEval 上达到 71.2%（Claude 1.3 为 56.0%）。[^4]

但 Claude 2 仍然不是一个可以在 raw capability 上对抗 GPT-4 的模型。它在多数基准上与 GPT-3.5 持平——在 GPT-4 已经发布四个月的市场环境下，这意味着 Claude 2 是"GPT-3.5 的安全替代品"而非"GPT-4 的竞争对手"。

### 2.3 Claude 2.1：200K 与幻觉减半

2023 年 11 月，Claude 2.1 发布，上下文窗口翻倍至 **200K tokens**——约 15 万字或 500 页文档。[^5] 这在当时是行业首次。

更重要的升级是幻觉率：Anthropic 声称 Claude 2.1 的虚假陈述率比 Claude 2.0 降低了一半。他们用一组复杂的事实性问题测试模型——Claude 2.1 更倾向于承认"不确定"而非编造答案。[^5]

Claude 2.1 还引入了两项关键功能：**系统提示（system prompts）**和 **工具使用（tool use）**——前者让开发者定义 Claude 的角色和行为约束，后者让 Claude 能够调用外部 API 和工具。这两个功能将 Claude 从一个"对话模型"变成了一个可以嵌入应用的"AI 组件"。

### 2.4 Claude 3：三个型号，首次正面超越 GPT-4

2024 年 3 月 4 日，Claude 3 发布——这次不是单个模型，而是一个家族：**Haiku**（轻量快速）、**Sonnet**（平衡性能）、**Opus**（旗舰智能）。[^6] 这个三档定价体系一直沿用至今。

**Claude 3 Opus 是第一个在多项权威基准上正面超越 GPT-4 的模型。** 在 MMLU（本科知识）、GPQA（研究生推理）、GSM8K（数学）等标准测试中，Opus 均达到或超过 GPT-4 的水平。[^6] 这是 Anthropic 的里程碑——它证明了一个以安全为核心的公司，同样可以产出能力最强的模型。

Claude 3 还带来了 **视觉能力**——可以处理照片、图表、技术文档。Anthropic 指出，企业客户高达 50% 的知识库以 PDF、流程图、演示文稿等非纯文本格式存在。[^6] 视觉能力不是炫技——它是企业市场的需求。

另一个重要改进是减少了"不必要的拒绝"。Claude 1.x/2.x 被诟病的一个问题是过于保守——经常拒绝回答实际上是无害的问题。Claude 3 对请求的理解更加细致，能区分真正的有害意图和触及边界的无害提问。[^6]

### 2.5 Claude 3.5 Sonnet：Artifacts 与编程助手的诞生

2024 年 6 月 20 日，Claude 3.5 Sonnet 发布——这是 Claude 3.5 系列的首个模型。[^7] Anthropic 选择先发布中档的 Sonnet 而非旗舰 Opus，这是一个有意识的策略：3.5 Sonnet 的能力超越了 Claude 3 Opus（旗舰），同时保持了 Claude 3 Sonnet 的速度和成本——这是"中档价格买旗舰能力"的降维打击。

3.5 Sonnet 在研究生级推理（GPQA）、本科知识（MMLU）和编程能力（HumanEval）上均创下新高。在内部的 agentic coding 评估中，3.5 Sonnet 解决了 64% 的问题，而 Claude 3 Opus 只解决了 38%。[^7]

但 3.5 Sonnet 最深远的影响是 **Artifacts 功能**——2024 年 6 月同步推出。Artifacts 让 Claude 的输出不再是一段纯文本，而是可以交互的代码、文档、图表——它将 Claude 从一个"对话 AI"变成了一个"创作工作台"。这个功能直接推动 Claude 3.5 Sonnet 成为程序员和内容创作者的首选工具——在编程辅助领域，Claude 3.5 Sonnet 成为了事实上的行业标杆。

（详见《编年·2024年6月》）

### 2.6 Claude 3.5 Sonnet (升级版)：Computer Use 与 SWE-bench 49%

2024 年 10 月 22 日，Anthropic 发布了 Claude 3.5 Sonnet 的升级版，同时带来了两个重要更新：升级版 3.5 Sonnet 和 Claude 3.5 Haiku。[^8]

升级版 3.5 Sonnet 的最大亮点是 **computer use（计算机使用）能力**——这是第一个在公共测试版中提供此功能的前沿模型。开发者可以让 Claude 像人类一样操作计算机：查看屏幕、移动光标、点击按钮、输入文本。虽然 Anthropic 自己也承认此时的 computer use 仍然"笨拙且容易出错"，但 Asana、Canva、Cognition、DoorDash、Replit 等公司已经开始探索这个能力。[^8]

在编程能力上，升级版 3.5 Sonnet 在 SWE-bench Verified 上从 33.4% 提升到 **49.0%**——超过了当时所有公开可用的模型，包括 OpenAI 的 o1-preview。[^8] 这个分数意味着 Claude 不再只是一个"对话写代码"的模型——它可以理解复杂的代码库、定位 bug、独立修复。

**Claude 3.5 Haiku** 同日宣布——性能匹配 Claude 3 Opus（上一代旗舰），但速度接近 Claude 3 Haiku。[^8] 这是"中档旗舰化"策略的延续：每一代的中档和轻量型号都在追赶上一代的旗舰。

（详见《编年·2024年10月》）

### 2.7 Claude 3.7 Sonnet：第一个混合推理模型

2025 年 2 月 24 日，Claude 3.7 Sonnet 发布——Anthropic 称之为**"市场上第一个混合推理模型"**。[^9]

这个"混合"是什么意思？在此之前，推理模型（如 OpenAI o1）和普通语言模型是两个不同的产品——你需要分别使用。Claude 3.7 Sonnet 把两者合而为一：在标准模式下，它是一个升级版的 3.5 Sonnet，即时回答；在 **extended thinking（扩展思考）模式**下，它会进行内部逐步推理，然后给出更深入的答案。

"就像人类用同一个大脑来做快速反应和深度思考一样"——Anthropic 用这个比喻解释了他们的哲学。[^9] API 用户甚至可以控制"思考预算"——指定模型最多使用多少 token 进行推理，在速度和质量之间灵活权衡。

Claude 3.7 Sonnet 还同步发布了 **Claude Code**——一个命令行工具，让开发者可以直接在终端中将编程任务委托给 Claude。这标志着 Claude 从"对话助手"到"编程协作者"的正式转变。[^9]

定价与前代相同：$3/百万输入 token，$15/百万输出 token——包括思考 token。[^9] 这意味着 Anthropic 没有为推理能力额外收费——这是一个定价策略，也是对"推理应该是一等能力，而不是付费升级"的表态。

### 2.8 Claude 4：全球最佳编程模型

2025 年 5 月 22 日，Claude 4 发布——包含 **Claude Opus 4** 和 **Claude Sonnet 4** 两个型号。[^10]

Claude Opus 4 是 Anthropic 有史以来最强大的模型。在 SWE-bench（软件工程基准）上得分 **72.5%**，在 Terminal-bench（终端操作基准）上得分 **43.2%**——均为当时全球最佳。[^10] Anthropic 对 Opus 4 的定位极为明确："全球最佳编程模型"。它可以在复杂的代码库上连续工作数小时——Rakuten 的测试中，Opus 4 独立运行了一个开源项目的重构，持续 **7 小时**保持稳定性能。[^10]

Claude Sonnet 4 在 SWE-bench 上同样达到 **72.7%**——甚至略高于 Opus 4。[^10] GitHub 宣布将其作为 GitHub Copilot 新一代编码代理的底层模型。[^10]

两个模型都是混合推理模型，支持扩展思考模式，并且首次支持**在扩展思考中使用工具**——包括网络搜索。[^10] 这意味着 Claude 在推理过程中可以主动获取外部信息，而不仅仅依赖预训练知识。

Claude 4 的发布还伴随着一系列新 API 能力：代码执行工具、MCP 连接器、文件 API、长达一小时的 prompt 缓存——这些工具共同指向一个方向：**AI 代理（Agent）**。[^10]

与 Claude 4 同步推出的是 **Claude Max 订阅计划**——$100/月起，提供 5 倍或 20 倍于 Pro 的使用量和更高的输出限制。[^11] 这是 Anthropic 在订阅模式上的重大升级，对标 OpenAI 的 ChatGPT Pro。

---

## 三、技术路线变迁

### 3.1 对齐方法：从 Constitutional AI 到混合推理

Claude 系列的技术路线始终以**对齐**为出发点——这与 GPT 系列以"规模"为出发点形成了根本性的对照。

- **Constitutional AI（2022-2023）**：用一组原则让 AI 自我批评和修订，用 RLAIF（AI 反馈强化学习）替代人类标注。核心优势是"用更少的人类标签实现更好的安全对齐"。[^2]
- **Claude 2.x（2023-2024）**：对齐的方法论不变，但增加了工程层面的约束——system prompts 让开发者能精确定义 Claude 的行为边界。
- **Claude 3.x（2024-2025）**：对齐与能力的平衡点发生转移——从"优先安全，能力其次"到"能力追上 GPT-4，安全不退让"。减少不必要的拒绝是一个关键信号——它说明 Anthropic 学会了"更智能的对齐"而非"更保守的对齐"。
- **Claude 3.7/4（2025）**：推理能力被整合进对齐框架——extended thinking 让 Claude 在回答前自我推理，这本质上是 Constitutional AI 的"自我批评"阶段的推理时（inference-time）版本。

### 3.2 上下文窗口：从 9K 到 200K

| 代际 | 上下文窗口 |
|------|-----------|
| Claude 1.x | ~9K tokens |
| Claude 2 | 100K tokens |
| Claude 2.1+ | 200K tokens |

Anthropic 在上下文窗口上的推进比 OpenAI 激进得多。100K（2023 年 7 月）和 200K（2023 年 11 月）都是在 GPT-4 的 8K/32K/128K 逐步开放的同时完成的飞跃。长上下文窗口不仅是技术能力——它直接决定了 Claude 能否处理"上传整个代码库""阅读整本书"这类企业场景。到 Claude 3 之后，200K 成为了 Claude 的标准配置。

### 3.3 产品化路径

Claude 的产品化路径也与 GPT 有显著差异：

- **GPT**：API → ChatGPT → Plus 订阅 → 企业版。起点是 API，爆点是聊天框。
- **Claude**：合作伙伴 API → claude.ai → Pro 订阅 → Artifacts → Max 订阅。起点是 B2B 合作伙伴（Notion、Quora），爆点是 Artifacts 和编程辅助。

Artifacts（2024 年 6 月）是 Claude 产品化路径上的关键转折。在此之前，Claude 是一个"更好的聊天机器人"——有用户，但没有杀手级应用场景。Artifacts 把 Claude 变成了一个"创作工具"——程序员用来写代码、调试、生成文档；非程序员用来做流程图、数据分析、演示文稿。这个功能让 Claude 从"ChatGPT 的替代品"变成了"ChatGPT 做不到的事"。

### 3.4 闭源策略的一以贯之

Claude 系列从未开源过任何模型。与 Llama 的"开放权重"和 GPT 的"从开到关"不同，Claude 从第一天起就是完全闭源的。Anthropic 的理由不是商业保密——而是安全考量。Dario Amodei 多次在公开场合表示：模型权重的开放分发在当前的安全水平下是不负责任的。

这个立场在 2024-2025 年的开源浪潮中显得格格不入——DeepSeek-R1 以 MIT 许可完全开源思维链，Qwen 3 完全开源，Llama 3.1 405B 开放权重。但 Anthropic 从未动摇。到 2025-2026 年，当 Anthropic 拒绝将 Claude 用于美国大规模监控和全自主武器（导致国防部将其列为"供应链风险"）时，外界开始重新理解 Anthropic 的安全立场——它不是营销口号，而是公司治理的核心原则。[^12]

---

## 四、生态与影响

### 4.1 编程生态的崛起

Claude 在 2024-2025 年最显著的市场成就不是"超越 GPT-4"——而是成为**编程辅助领域的首选模型**。这个地位的建立有三个关键节点：

1. **Claude 3.5 Sonnet（2024-06）**：Artifacts + 编程能力飞跃 → 成为 Cursor、Windsurf 等 AI 编程工具的底层模型
2. **Claude 3.5 Sonnet 升级版（2024-10）**：SWE-bench 49%，超过所有公开模型 → 编程辅助的事实标准
3. **Claude 4（2025-05）**：GitHub Copilot 选择 Sonnet 4 作为编码代理底层 → 进入全球最大的编程生态

从 Cursor 到 GitHub Copilot，Claude 在 AI 编程工具中的渗透率在 2025 年超过了 GPT。这改变了 Anthropic 的市场定位——它不再只是"更安全的 ChatGPT"，它是"更好的编程助手"。

### 4.2 竞品关系

Claude 与 GPT 的竞争关系是大模型领域最清晰的双主线之一：

- **2023 年**：Claude 是 GPT 的追赶者。Claude 2 与 GPT-3.5 持平，但远落后于 GPT-4。
- **2024 年 3 月**：Claude 3 Opus 首次正面超越 GPT-4——这是 Anthropic 的"登月时刻"。
- **2024 年 6-10 月**：Claude 3.5 Sonnet 在编程和实际应用中建立了优势——GPT-4o 虽然在多模态和语音上领先，但在"帮你写代码"这件事上，Claude 成为了更好的选择。
- **2025 年**：Claude 3.7/4 在推理能力上与 o1/o3 对标——Anthropic 用"混合推理"回应了 OpenAI 的"推理模型"策略，但避免了为推理能力单独收费。

与 Gemini 的竞争则更多体现在企业市场——Google 的 Gemini 依赖 Google Cloud 的分发优势，而 Claude 通过 Amazon Bedrock 和 Google Cloud Vertex AI 同时分发（是的，Claude 同时在 Google 的云平台上销售——Google 持有 Anthropic 约 14% 的股份）。

### 4.3 安全与商业的辩证

Anthropic 的故事本质上是一个实验：**一家以安全为核心使命的公司，能否在以能力为核心竞争维度的市场中生存？**

2023 年的答案看起来是否定的——Claude 1.x 和 2.x 的能力明显落后于 GPT-4，市场定位尴尬。2024 年的答案变成了"可以"——Claude 3 的能力追上来了，安全定位反而成了差异化优势（"不只是强大，而且可信赖"）。2025 年的答案是"不仅能活，还能赢"——Claude 4 在编程能力上全球领先，Anthropic 估值达 **9650 亿美元**（2026 年 5 月），成为全球最有价值的纯 AI 公司。[^13]

但这个故事不是简单的"安全第一就能赢"。Anthropic 赢在**安全和能力的双轮驱动**——如果 Claude 3 Opus 没有在基准上超越 GPT-4，再好的安全故事也不会转化为商业价值。Constitutional AI 不是一个营销概念——它是一种训练方法，它确实产出更好的模型。这才是 Claude 世家的核心叙事：安全不是能力的对立面，安全本身就是一种能力。

---

## 评曰

Claude 系列的迭代史，回答了一个在 AI 行业反复被问到的问题：**一家以安全为核心使命的公司，是否注定在能力竞赛中落败？**

2023 年的回答看起来是"是"——Claude 1.x 和 2.x 在能力上明显落后于 GPT-4，市场份额微小，媒体报道中 Claude 总是作为"更安全但更弱"的选项被提及。

2024 年 3 月，Claude 3 Opus 改变了这个叙事。它不是靠安全性拿到市场份额的——它靠的是在 MMLU、GPQA、HumanEval 等标准基准上**正面超越 GPT-4**。对齐没有拖累能力——对齐甚至可能促进了能力。当你的训练方法让模型更善于"理解人类意图"时，它在遵循指令的任务上自然表现更好。

但 Claude 世家更深远的遗产是它对**AI 产品化路径**的贡献。Artifacts 将 AI 从"对话框"变成了"工作台"——这个转变看起来简单，但它重新定义了"AI 助手"应该是什么。Claude 4 和 Claude Code 则将 AI 推向了"编程协作者"的角色——从"帮你写一行代码"到"帮你重构整个项目"。GitHub Copilot 选择 Claude Sonnet 4 作为底层模型，是这个方向上最有分量的背书。

Claude 世家的历史也是"时间窗口"的实证。在 2023 年，GPT 的前沿优势是两年。到 2024 年，Claude 3 用一年追上了。到 2025 年，Claude 4 和 o1 几乎同时发布——时间窗口缩短到了近乎为零。当"前沿"不再是某个公司的独占优势时，竞争的维度就会从"能力"扩展到"安全性""产品体验""编程能力""企业信任"——而这些恰好是 Claude 擅长的。

最终，Claude 世家的真正意义不在于它击败了 GPT——而在于它证明了：**安全和能力不是跷跷板的两端，而是同一枚硬币的两面。** Constitutional AI 不是限制——它是一种更聪明的训练方法。Anthropic 不是在"牺牲能力换取安全"——它找到了一种让安全成为能力来源的路径。这个认知，可能是 2020 年代 AI 行业最重要的发现之一。

---

*本篇由终末地工业史官团队编纂：赫默（编年主笔）。*

---

[^1]: Anthropic, "Introducing Claude", Anthropic Blog. https://www.anthropic.com/index/introducing-claude ; Wikipedia, "Anthropic", https://en.wikipedia.org/wiki/Anthropic
[^2]: Bai et al., "Constitutional AI: Harmlessness from AI Feedback", arXiv:2212.08073, 2022-12. https://arxiv.org/abs/2212.08073
[^3]: Anthropic, "Introducing Claude", Anthropic Blog, 2023-03. https://www.anthropic.com/index/introducing-claude
[^4]: Anthropic, "Claude 2", Anthropic Blog, 2023-07-11. https://www.anthropic.com/news/claude-2
[^5]: Anthropic, "Introducing Claude 2.1", Anthropic Blog, 2023-11. https://www.anthropic.com/news/claude-2-1
[^6]: Anthropic, "Introducing the next generation of Claude", Anthropic Blog, 2024-03-04. https://www.anthropic.com/news/claude-3-family
[^7]: Anthropic, "Introducing Claude 3.5 Sonnet", Anthropic Blog, 2024-06-20. https://www.anthropic.com/news/claude-3-5-sonnet
[^8]: Anthropic, "Introducing computer use, a new Claude 3.5 Sonnet, and Claude 3.5 Haiku", Anthropic Blog, 2024-10-22. https://www.anthropic.com/news/3-5-models-and-computer-use
[^9]: Anthropic, "Claude 3.7 Sonnet and Claude Code", Anthropic Blog, 2025-02-24. https://www.anthropic.com/news/claude-3-7-sonnet
[^10]: Anthropic, "Introducing Claude 4", Anthropic Blog, 2025-05-22. https://www.anthropic.com/news/claude-4
[^11]: Anthropic, "Plans & Pricing", https://www.anthropic.com/pricing
[^12]: Wikipedia, "Claude (language model)", https://en.wikipedia.org/wiki/Claude_(language_model) — Anthropic–United States Department of Defense dispute.
[^13]: Wikipedia, "Anthropic", https://en.wikipedia.org/wiki/Anthropic — estimated valuation $965 billion (May 2026).
