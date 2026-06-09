# 《Gemini 世家》

> Gemini 是 Google DeepMind 自 2023 年起开发的通用多模态模型家族。从一段剪辑 demo 的尴尬开局，到 LMArena 登顶的集体公正——Gemini 的迭代史是 Transformer 发明者从被动仓促到主动反击的全过程。

---

## 一、概述

Gemini 系列是 Google 对 ChatGPT 时代的系统性回答。它经历了三个阶段：**仓促追赶**（Bard → Gemini 1.0）、**差异化突围**（1.5 Pro 超长上下文）、**推理反击**（2.5 Pro 登顶 LMArena）。

Gemini 的演化有一个独特的主线：它从一开始就是**原生多模态**——在文本、图像、音频、视频和代码的联合数据上训练，而非事后加上视觉模块。这个设计选择在 Transformer 发明者手中不是偶然——它意味着 Google 在 2023 年就已经判定：多模态是大模型的默认形态，不是可选项。

---

## 二、代际演进

| 代际 | 发布时间 | 关键能力 | 历史位置 |
|------|----------|----------|----------|
| Bard (LaMDA) | 2023-02-06 | 对话 AI，仓促发布 | ChatGPT 恐慌的产物 |
| Gemini 1.0 | 2023-12-06 | 原生多模态，Ultra/Pro/Nano 三级 | 首次正面迎战 GPT-4 |
| Gemini 1.5 Pro | 2024-02-15 | 1M token 上下文，MoE 架构 | 开辟"超长上下文"赛道 |
| Gemini 2.0 Flash | 2024-12-11 | 原生工具调用，Agentic era | 推理速度与成本革命 |
| Gemini 2.5 Pro | 2025-03-25 | 思考模型，LMArena 登顶 | 推理能力追上并局部超越 |
| Gemini 3.1 Pro | 2026-05 | 持续迭代 | 前沿竞速中 |

### 2.1 Bard：恐慌的产物

Bard 不是 Gemini，但它是 Gemini 的前传。2023 年 2 月 6 日，Sundar Pichai 在 Google 官方博客宣布 Bard，抢在微软发布 Bing+ChatGPT（2023-02-07）前一天。两天后的巴黎 demo 中，Bard 答错了一个关于 JWST 的问题，Google 股价跌 7.7%，市值蒸发超 $1000 亿。[^1]

Bard 基于 LaMDA，而非 Gemini。它的仓促发布和 demo 翻车，给 Google 的 AI 努力贴上了"追赶者"的标签。但在 Bard 的背后，Google DeepMind 正在开发一个更完整的模型——Gemini。Bard 是烟幕，Gemini 是主菜。2024 年 2 月，Bard 品牌正式放弃，更名为 Gemini。

（详见《编年·2023年3月》）

### 2.2 Gemini 1.0：正面迎战——用 30/32 和一段剪辑

2023 年 12 月 6 日，Google DeepMind 发布 Gemini 1.0，分为 Ultra、Pro、Nano 三个规模。Ultra 在 32 项基准中 30 项超过 GPT-4，MMLU 达到 90.0%——第一个超越人类专家（89.8%）的模型。[^2]

Gemini 1.0 的核心卖点是**原生多模态**：从设计之初就在文本、图像、音频、视频和代码的联合数据上训练。这与 GPT-4V 的"先训练语言模型再加视觉"有根本不同。对 Google 来说，多模态不是附加功能——YouTube、Google Photos、Google Lens 的产品矩阵天然就是多模态的。

但 Gemini 1.0 的发布被一段剪辑 demo 玷污。Bloomberg 调查发现，Google 展示的"实时视频理解"实际上是静态图片 + 文本提示的多次独立交互，被剪辑成了一段"实时对话"的假象。[^3] 社区的反应刻薄但精准："如果 Gemini 真的这么强，为什么需要靠剪辑来证明？"

（详见《编年·2023年12月》）

### 2.3 Gemini 1.5 Pro：在对手不玩的赛道上赢

2024 年 2 月 15 日——与 OpenAI 的 Sora 同一天——Google DeepMind 发布 Gemini 1.5 Pro。1M token 上下文窗口是核心卖点：一次性输入整部《战争与和平》、完整电影剧本、或整个中等规模代码库。[^4]

技术基础是 MoE（混合专家）架构。Gemini 1.5 Pro 在保持与 1.0 Ultra 接近能力的同时大幅降低推理成本。在"大海捞针"测试中，1M token 上下文下准确率达 99%。

Gemini 1.5 Pro 是 Google 在 AI 竞争中的一个精妙策略：不正面交战。GPT-4 已经在推理、编程、多模态交互上占据高地——Google 开辟了一个自己可以称王的新指标：超长上下文。这个赛道的进入壁垒极高——需要的不仅是算法，还有 TPU v5p、Google 自研推理基础设施、以及"把整本书塞进模型而不崩溃"的工程能力。三者都是 Google 独有的。

（详见《编年·2024年2月》）

### 2.4 Gemini 2.0 Flash：Agentic era 的先锋

2024 年 12 月 11 日，Google DeepMind 发布 Gemini 2.0 Flash，定位为"agentic era"的先锋。2.0 Flash 是 Gemini 系列首次明确面向**智能体（agent）**的模型——支持原生工具调用、多步任务规划、与 Google Search/Code Execution 等外部工具的直接集成。[^5]

Flash 的定位是"主力工作马"——不是最强大，而是最快、最便宜、最实用。它在推理速度上大幅超越 1.5 Pro，在成本上低一个数量级，使得大规模 agent 部署成为可能。Google 在发布中明确表示，这是从"AI 模型"到"AI 系统"的过渡——模型不再只是回答问题，而是能在现实世界中调用工具完成多步任务。

### 2.5 Gemini 2.5 Pro：Google 登上 LMArena 之巅

2025 年 3 月 25 日，Google DeepMind 发布 Gemini 2.5 Pro，定位为"thinking model"。1M token 上下文窗口，在 LMArena 排行榜上登顶。[^6]

与 o1 不同，Gemini 2.5 Pro 不隐藏思维链——用户可以看到模型的推理过程。在 AIME 2025 数学基准上达到 86.7%，GPQA Diamond 84.0%，SWE-bench 63.8%（略高于 Claude 3.7 Sonnet 的 62.3%）。

但更重要不是分数，是 LMArena 排名。Chatbot Arena 是一个基于人类偏好的众包盲测平台——用户在不知道模型身份的情况下比较两个回答。Gemini 2.5 Pro 在这里登顶，意味着在普通人类的日常使用体验中，它确实比 GPT-4o 和 Claude 3.5 Sonnet 更受青睐。从 2023 年 12 月的"剪辑 demo 造假"到 2025 年 3 月的"用户投票登顶"，Google 用了 16 个月走完了从被嘲笑到被认可的路。

（详见《编年·2025年3月》）

### 2.6 Gemini 3.x：前沿竞速中

2026 年 5 月，Google 发布 Gemini 3 系列，包括 3.1 Pro、3 Deep Think、3.5 Flash 等变体，延续了 Pro（全能旗舰）+ Flash（速度优先）+ Deep Think（深度推理）的三层产品结构。截至编纂之时（2026 年 6 月），Gemini 3 系列与 GPT-5.5、Claude 4 处于持续竞速状态，尚未拉开决定性差距。

---

## 三、技术路线变迁

### 3.1 架构：从密集模型到 MoE 到"思考引擎"

Gemini 1.0 Ultra 是密集 Transformer 模型。从 1.5 Pro 开始转向 MoE（混合专家），以在增加能力的同时控制推理成本。2.5 Pro 在 MoE 基础上加入了推理增强——"思考"从产品功能变成架构特性。

Gemini 的架构演变有一个鲜明的"Google 风格"：不是发布论文讲新架构，而是在产品中渐进式改进。和 OpenAI 的"一篇论文定义一个代际"不同，Google 更倾向于"一代产品做三件事：能力提升、成本下降、生态系统集成"。

### 3.2 训练方法：TPU 全栈自主

所有 Gemini 系列均在 Google 自研的 TPU 上训练——从 1.0 的 TPU v5p 到 3.x 的新一代 TPU。这意味着 Google 不受英伟达 GPU 供应限制，也使其推理成本具有结构性优势。

训练数据方面，Gemini 从一开始就包含文本、图像、音频、视频和代码的联合训练数据。Google 拥有 YouTube（视频数据）、Google Search（网页索引）、Google Books（书籍扫描）三大独家数据源——这是 OpenAI 和 Anthropic 无法复制的训练数据优势。

### 3.3 对齐策略：从 Bard 的教训中学习

Bard 的 demo 翻车暴露了 Google 在"快速发布 vs 安全测试"之间的矛盾。Gemini 1.0 的 demo 剪辑争议进一步加深了公众对 Google AI 诚实性的疑虑。

到 Gemini 2.5 Pro，Google 的对齐策略已大幅成熟。关键变化包括：公开思维链（对 o1 的隐藏策略的反驳）、通过 LMArena 这种第三方平台进行开放评估而非自报 benchmark、在 Google AI Studio 中提供免费试用降低门槛。从"我们告诉你它有多好"到"你自己试试它有多好"——这是 Bard 时代最大的教训。

### 3.4 开源策略：完全闭源，但免费 tier 开源

Gemini 系列的所有模型权重均未开源。但 Google 在分发上采取了"免费 tier + 付费 API"策略——通过 Google AI Studio 提供有限免费额度，降低了开发者的进入门槛。

这与 Meta 的 Llama（完全开源）和 OpenAI 的 GPT（完全闭源 + 纯付费）形成了第三种模式：闭源模型 + 免费入口。其逻辑是：让开发者在免费 tier 上建立使用习惯，当使用量超过阈值时自然转化为付费用户。对 Google 来说，这种模式的额外收益是——大量开发者使用 Gemini API 会生成更多数据，反过来改善 Google 的搜索和广告系统。

---

## 四、生态与影响

### 4.1 品牌整合：Bard → Gemini

Google 在 AI 品牌上的一条主线是整合。2023 年 2 月推出 Bard，2023 年 12 月升级至 Gemini Pro，2024 年 2 月正式放弃 Bard 品牌，将所有 AI 产品统一在 Gemini 旗下。这种"用一个品牌统领一切"的做法和 OpenAI 的 GPT + o 分立、Anthropic 的 Claude 单品牌形成对比。

### 4.2 产品分发：Google 的杀手锏

Gemini 的分发渠道是 Google 最被低估的资产：

- **Google Workspace**：Gmail、Docs、Sheets 中嵌入 Gemini，覆盖 15 亿+ 用户
- **Android**：Gemini Live 作为默认 AI 助手，覆盖 30 亿+ 设备
- **Google Cloud / Vertex AI**：面向企业开发者的 API
- **Google AI Studio**：个人开发者的免费入口
- **Google Search**：AI Overviews 由 Gemini 驱动

这种分发深度是 OpenAI（仅有 ChatGPT App + API）和 Anthropic（仅有 API + Claude.ai）无法匹敌的。Gemini 不必是"最好的模型"才能被最多人使用——它只需"足够好"，因为 Google 已经把路铺到了每个用户的设备上。

### 4.3 竞品关系

| 时间段 | OpenAI | Anthropic | Google |
|--------|--------|-----------|--------|
| 2023 | ChatGPT 全民化 | Claude 安全叙事 | Bard 仓促追赶 |
| 2024 初 | GPT-4 最强 | Claude 3 首次超越 | Gemini 1.5 Pro 长上下文突围 |
| 2024 中 | GPT-4o 多模态 | Claude 3.5 Sonnet 编程称王 | Gemini 跟随 |
| 2024 末 | o1 推理模型 | — | Gemini 2.0 Flash Agentic |
| 2025 初 | o3 正式版 | Claude 4 用量定价 | Gemini 2.5 Pro LMArena 登顶 |
| 2026 | GPT-5.x 系列 | Claude 4 持续迭代 | Gemini 3.x 三层产品结构 |

Gemini 的独特位置在于：它是唯一一家同时拥有**前沿模型能力**（LMArena #1）、**基础设施自主可控**（TPU）、**超大规模产品分发**（Google Workspace + Android）的竞争者。

### 4.4 行业影响

- **原生多模态成为默认**：Gemini 1.0 的"从设计就是多模态"迫使 GPT-4V 和 Claude 3 跟进。到 2025 年，不再有人发布纯文本的前沿模型。
- **超长上下文成为标准赛道**：Gemini 1.5 Pro 的 1M token 窗口迫使所有对手在上下文长度上竞争。
- **"不隐藏思维链"成为竞争差异**：Gemini 2.5 Pro 的公开推理过程，与 o1 的隐藏策略形成鲜明对比，成为推理模型"透明度"竞赛的一部分。
- **免费 tier 模式**：Google AI Studio 的免费 tier 迫使 OpenAI 在 GPT-4o 上采取类似的免费策略。

---

## 评曰

Gemini 的迭代史是一个关于**基础设施决定上限**的寓言。

从 2023 年 2 月 Bard 的仓促翻车，到 2025 年 3 月 Gemini 2.5 Pro 的 LMArena 登顶——这条弧线跨越了 16 个月。但真正支撑这条弧线的不是某一次算法突破，而是 Google 在 Transformer 时代积累的全面优势：TPU 芯片自主、YouTube 数据、搜索索引、Android 分发、云计算基础设施。当 Bard 翻车时，Google 被嘲笑"连 demo 都要剪辑"；当 Gemini 2.5 Pro 登顶时，同样的公司被重新评估为"唯一拥有全栈自主能力的 AI 巨头"。

Gemini 的策略是"不正面争最强"——不在推理上硬拼 o1、不在编程上硬拼 Claude、不在开源上硬拼 Llama——而是在自己独有的长板上建立壁垒：长上下文、原生多模态、Google 生态集成。这种策略的高明之处在于：对手可以在任何一个点追上 Google，但没有对手可以在所有点上同时追上。Google 不必是单项第一——它只需要在"能力×成本×分发"的乘积上无人能及。

这种策略也暗示了大模型竞争的长期走向。随着 GPT-5.x、Claude 4.x、Gemini 3.x 在核心能力上越来越接近——MMLU 从 86% 到 90% 的差距是革命性的，从 90% 到 93% 已经不太感觉得出来——竞争会从"谁的模型更强"转向"谁的系统更完整"。而在这个维度上，Google 至今仍是全世界唯一一个拥有从芯片到模型到产品到操作系统的完整 AI 栈的公司。

---

*本篇由终末地工业史官团队编纂：赫默（主笔）。*

---

[^1]: Google Blog, "An important next step on our AI journey", Sundar Pichai, 2023-02-06. https://blog.google/technology/ai/bard-google-ai-search-updates/；The Verge, "Google's AI chatbot Bard makes factual error in first demo", 2023-02-08. https://www.theverge.com/2023/2/8/23590864/google-ai-chatbot-bard-mistake-error-exoplanet-demo
[^2]: Google DeepMind Blog, "Introducing Gemini: our largest and most capable AI model", 2023-12-06. https://blog.google/technology/ai/google-gemini-ai/
[^3]: Julia Love & Davey Alba / Bloomberg, "Google's 'Most Capable' AI Model Gemini Has a Catch", 2023-12-07. https://www.bloomberg.com/news/articles/2023-12-07/google-s-most-capable-ai-model-gemini-has-a-catch
[^4]: Google AI Blog, "Our next-generation model: Gemini 1.5", 2024-02-15. https://blog.google/technology/ai/google-gemini-next-generation-model-february-2024/
[^5]: Google DeepMind Blog, "Introducing Gemini 2.0: our new AI model for the agentic era", 2024-12-11. https://blog.google/technology/google-deepmind/google-gemini-ai-update-december-2024/
[^6]: Google DeepMind Blog, "Gemini 2.5: Our most intelligent AI model", 2025-03-25. https://blog.google/technology/google-deepmind/gemini-model-thinking-updates-march-2025/
