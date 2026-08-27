# 《Gemini 世家》

> Gemini 是 Google DeepMind 自 2023 年起发展的多模态模型家族。它的早期形象长期被 Bard 的仓促发布和 Gemini 1.0 的演示争议遮住；1.5 Pro 用百万上下文找到差异化，2.x 把工具和 Agent 写进产品路线，2.5 把 thinking 变成默认能力，Gemini 3 又把模型推进生成式界面和复杂行动。到 2026 年下半年，Gemini 最值得记录的变化却不是旗舰更大，而是 **Flash 从“便宜版”变成了生产 Agent 真正的主力层**。

---

## 一、概述：Google 从“证明模型强”走向“让模型无处不在”

Gemini 是 Google 对 ChatGPT 时代的系统性回答，但它从来不只是一个聊天模型系列。

如果把它的演化压成几步，可以看到一条很清楚的路线：

1. **Gemini 1.0：原生多模态**——文本、图像、音频、视频与代码不再被视为互不相干的输入；
2. **Gemini 1.5：超长上下文**——模型一次能处理的材料规模成为核心能力；
3. **Gemini 2.x：tool use / agentic era**——模型开始围绕行动而设计；
4. **Gemini 2.5：thinking**——推理成为模型调用时可以投入的计算资源；
5. **Gemini 3：生成式界面 + Agent**——输出不再只是文本，而可以是界面、应用与连续行动；
6. **Gemini 3.5—3.7 Flash：生产 Agent 的成本工程**——速度、token 效率、工具调用和任务完成率开始比“旗舰名号”更重要。

因此 Gemini 世家最深的连续性不是某个 benchmark，而是 **把模型嵌进 Google 已有的软件、搜索、设备、云和开发平台**。

---

## 二、代际演进

| 代际 | 时间 | 核心变化 | 历史位置 |
|------|------|----------|----------|
| Bard / LaMDA | 2023-02 | 仓促进入对话 AI | Gemini 前传 |
| Gemini 1.0 | 2023-12 | 原生多模态；Ultra / Pro / Nano | 正面迎战 GPT-4 |
| Gemini 1.5 Pro | 2024-02 | 1M context、MoE | 长上下文成为前沿赛道 |
| Gemini 2.0 Flash | 2024-12 | 原生工具调用、Agentic Era | 从回答转向行动 |
| Gemini 2.5 Pro | 2025-03 | thinking model、1M context | 推理能力进入主线 |
| Gemini 3 Pro / Deep Think | 2025-11—12 | 更强推理、多模态、生成式界面、Agent | 多能力合流 |
| Gemini 3.1 Pro | 2026-02 | 核心 reasoning 升级 | 复杂任务旗舰 |
| Gemini 3.5 Flash | 2026-05 | frontier intelligence with action | Flash 从次旗舰变生产核心 |
| Gemini 3.6 Flash | 2026-07 | token efficiency、Agent 可靠性 | 高频工作马 |
| Gemini 3.7 Flash | 2026-08 | 三周再迭代、首发价减半 | 成本 / 迭代速度成为竞争力 |
| Gemini 3.5 Pro | 截至 2026-08-28 尚未发布 | 原计划 2026-06 | “旗舰延迟、Flash 前进”的反常节点 |

---

## 三、前史：Bard 的仓促，Gemini 的反击

### 3.1 Bard：错误答案成为时代开场

**2023-02-06** — Google 宣布 Bard。两天后的宣传演示中，Bard 对 James Webb Space Telescope 的回答出现事实错误，引发巨大舆论反响。[^1]

Bard 基于 LaMDA，并不是 Gemini。但它给 Gemini 留下了一个非常不利的出场背景：当 ChatGPT 已经形成公众认知时，Google 看起来像那个拥有 Transformer 却被迫追赶的公司。

这种“技术基础深、产品反应慢”的矛盾，后来几乎贯穿 Gemini 前两年历史。

### 3.2 Gemini 1.0：原生多模态与演示争议

**2023-12-06** — Google 发布 Gemini 1.0，分为 Ultra、Pro 和 Nano。官方把“从一开始就在多模态数据上训练”作为核心设计之一，并强调模型能够跨文本、图像、音频和视频进行推理。[^2]

Gemini 1.0 是 Google 第一次用统一模型家族正面回应 GPT-4。

但发布很快又被演示争议打断：Google 展示的多模态交互视频经过剪辑，并不是视频给人的“实时连续对话”形态。这个事件强化了一个坏印象——Google 总需要先说服公众相信 demo，而不是让产品自己说话。

这也解释了后续 Gemini 发布策略为什么越来越强调**直接可用、第三方测试和大规模分发**。

---

## 四、Gemini 1.5：百万上下文把 Google 拉回前沿

**2024-02-15** — Gemini 1.5 Pro 发布，采用 MoE 架构，并在研究预览中展示 **1M token** 上下文。[^3]

这一代的重要性不是“比 GPT-4 更聪明”，而是 Google 换了一道题：

> 模型能不能一次看完一部长视频、一个大型代码库、几百页文档，然后仍然找到其中的细节？

长上下文后来成为所有前沿模型的标准竞赛方向。Kimi 在中国市场把它产品化，Claude 长期强调大文档工作流，OpenAI 和 DeepSeek 也不断扩展上下文规模；但 Gemini 1.5 是把百万级窗口推到全球前沿模型叙事中心的关键节点之一。

这也是 Gemini 第一次明显摆脱“追 GPT”的节奏：不是复制对手已经占领的高地，而是利用 Google 的模型与基础设施能力开辟新指标。

---

## 五、Gemini 2：Agentic Era

### 5.1 2.0 Flash：Flash 不只是缩小版 Pro

**2024-12-11** — Gemini 2.0 Flash 发布，Google 直接用 **“agentic era”** 描述这一代。模型支持工具使用和面向现实行动的能力，并与 Search、代码执行等外部系统结合。[^4]

Flash 的意义也由此改变。

传统模型家族里，“小型号”通常只是旗舰的廉价替代；Google 却逐渐让 Flash 承担另一种角色：**需要被高频调用、反复使用工具、追求低延迟的 Agent 引擎。**

这种定位到 2026 年会成为 Gemini 最重要的产品策略。

### 5.2 Gemini 2.5 Pro：thinking 成为默认前沿能力

**2025-03-25** — Gemini 2.5 Pro 发布。Google 把它定义为 thinking model，面向复杂推理、代码和 1M context 工作。[^5]

Gemini 2.5 Pro 一度在 LMArena 等评测中获得极高位置，使 Google 从 2023 年的“demo 翻车者”真正回到前沿能力中心。

更重要的是，thinking 不再被做成完全独立的产品家族。Gemini 路线越来越倾向于把推理、工具、多模态和长上下文合在同一个模型系统里，而不是让用户在“普通模型”和“推理模型”之间切换世界观。

---

## 六、Gemini 3：多能力合流

### 6.1 Gemini 3 Pro：从回答到“生成界面”

**2025-11-18** — Google 发布 Gemini 3，首先上线 Gemini 3 Pro。官方将其描述为当时最强的 Gemini，在推理、多模态理解、vibe coding 和 agentic tasks 上全面升级。[^6]

Gemini 3 的产品变化尤其值得注意：模型开始输出 **generative interfaces**——不是只给用户一段解释，而是根据问题生成更适合任务的视觉布局和交互结构。

这意味着 Gemini 的输出单位从“答案”向“可操作界面”移动。

同一时期，Gemini Agent 进入产品实验，Google 开始让模型执行更复杂的任务，而不是只作为 Search 或 Workspace 里的生成层。

### 6.2 Deep Think：并行推理成为专门层

**2025-12** — Gemini 3 Deep Think 面向 Ultra 用户推出，强调通过更高推理预算和并行探索多个假设处理数学、科学和逻辑问题。[^7]

**2026-02-12** — Google 又更新 Deep Think，专门面向科学、研究和工程任务，并开始向部分 API 用户提供早期访问。[^8]

Deep Think 的意义与 Flash 几乎相反：一个把推理预算拉高，一个把单位调用成本压低。Gemini 从此明确拥有两条 scaling 方向：

- **纵向 scaling：一次任务投入更多 reasoning**；
- **横向 scaling：用更便宜的 Flash 支撑更多调用和 Agent 循环**。

### 6.3 Gemini 3.1 Pro：旗舰 reasoning 升级

**2026-02-19** — Gemini 3.1 Pro 发布。Google 称其 ARC-AGI-2 验证分数达到 77.1%，超过 Gemini 3 Pro 两倍以上，并把它推入 Gemini API、Vertex AI、Gemini App、NotebookLM、Antigravity 等产品。[^9]

这时 Gemini 的“模型”和“Google 产品”已经很难分开讨论：一个核心 intelligence 更新，会同时流入开发平台、企业云、消费端应用和知识工具。

---

## 七、2026：Flash 从便宜型号变成生产主线

### 7.1 Gemini 3.5 Flash：frontier intelligence with action

**2026-05-19** — Google I/O 发布 **Gemini 3.5 Flash**，把这一代直接定义为 **“frontier intelligence with action”**。它面向 coding、长程 Agent 和真实工作流，并在 Gemini App、Search AI Mode、Gemini API、Antigravity 和企业产品中同步铺开。[^10]

同日，Google 宣布 Gemini App 月活用户已经超过 **9 亿**。[^11]

这个数字说明 Gemini 的优势不能只用模型榜单衡量。Google 可以把一次模型更新同时送入搜索、Android、Workspace、云平台和开发工具；模型迭代因此天然具有巨大的分发杠杆。

### 7.2 Computer Use 被吸收到主模型

**2026-06-24** — Google 将 **computer use** 作为内置工具加入 Gemini 3.5 Flash。此前独立的 computer-use 能力被并回主力 Flash，让开发者用同一个模型看见浏览器 / 桌面环境、推理并执行操作。[^12]

这与 Claude、GPT 的演化方向相同：computer use 不再是特别演示，而开始成为 Agent 基座的普通能力。

### 7.3 3.6 Flash：优化“每项工作消耗多少 token”

**2026-07-21** — Gemini 3.6 Flash、3.5 Flash-Lite 与 3.5 Flash Cyber 发布。Google 明确强调生产 Agent 需要的 **token efficiency、latency 与 reliability**；3.6 Flash 被称为新的 workhorse。[^13]

官方称 3.6 Flash 相比 3.5 Flash 在 Artificial Analysis Index 测得的输出 token 使用量降低约 17%，部分代码任务中下降更大。[^13]

这里的竞争指标已经不是“模型是否能完成题目”，而是：

**完成同一个任务需要多少轮、多少 token、多少人工重试。**

### 7.4 3.7 Flash：三周一更，首发价减半

**2026-08-13** — Gemini 3.7 Flash 发布，距离 3.6 Flash 只有三周。Google 称它是当时最智能的 workhorse，进一步提升软件工程、知识工作、网页开发和多步 Agent，并以 **$0.75 / 1M input、$3.75 / 1M output** 的年内首发价上线——约为 3.6 Flash 原始价格的一半。[^14]

这次发布表明 Google 已经把 Flash 当成类似基础设施软件的高频版本线，而不是等旗舰一年一更。

---

## 八、Gemini 3.5 Pro 的延迟：一次“没有发布”的重要事件

Gemini 世家在 2026 年还有一个必须记录的节点：**Gemini 3.5 Pro 没有按计划出现。**

Google 在 5 月 I/O 宣布 3.5 Pro 已在内部使用，希望“下个月”推出；但到 7 月，Reuters 报道它已经错过原定 6 月窗口，仍处于合作伙伴测试。[^10][^15]

到 **2026-08-13** 发布 3.7 Flash 时，Google 仍没有给出 3.5 Pro 的发布日期。[^16]

这不是简单延期，而是一个很有解释力的反差：

- 旗舰 Pro 延迟；
- Flash 却从 3.5 → 3.6 → 3.7 连续迭代；
- Google 甚至已经公开表示 Gemini 4 的训练工作在推进。[^15]

它说明 Agent 时代的前沿竞争不再保证“最强旗舰必须先走”。生产市场可以由**足够强、足够便宜、足够稳定的工作马**先向前推进。

---

## 九、旁支：Gemini Omni 与“任何输入到任何输出”

Google I/O 2026 还发布了 **Gemini Omni** 家族，首先推出 Omni Flash，从多模态输入生成视频，并强调未来向“any input → any output”推进。[^17]

它不是 Gemini 3.x 文本 / Agent 主线的简单版本号延伸，却代表 Gemini 原生多模态哲学的另一种结果：理解模型与生成媒体模型的边界正在融合。

如果 Gemini 1.0 的命题是“一个模型理解多种模态”，Omni 的命题则进一步变成“一个智能系统可以在多种模态之间自由输入和生成”。

---

## 十、Gemini 的真正护城河：模型 × 基础设施 × 分发

Gemini 与其他模型家族最大的不同，是它天然处在 Google 全栈体系中：

- Gemini API / Google AI Studio 面向开发者；
- Vertex AI / Gemini Enterprise 面向企业；
- Gemini App 面向消费用户；
- Search AI Mode 把模型直接放进搜索入口；
- Android 与 Workspace 提供系统级和办公分发；
- Antigravity、Gemini CLI、Android Studio 等承接 Agent / 开发工作流。

因此，Google 不必让每一代 Gemini 都成为绝对 benchmark 第一，才能形成巨大影响。

更准确的公式是：

> **模型能力 × 单位调用成本 × 分发规模 × 工具连接能力。**

Flash 的崛起，本质上就是 Google 在提高这个乘积，而不是只提高第一项。

---

## 评曰

Gemini 最初的故事很容易写成“Transformer 发明者被 ChatGPT 打醒以后终于追上来”。这句话解释了 Bard，却已经解释不了 2026 年的 Gemini。

1.5 Pro 以后，Google 不断把不同系统能力吸收到 Gemini：长上下文、thinking、Search grounding、computer use、生成式界面、Agent、开发工具和多模态生成。Gemini 越来越不像一个孤立模型，更像 Google 软件系统里的**通用智能层**。

而 2026 年最值得记住的反而是 3.5 Pro 的延期。

在传统模型竞赛里，旗舰延期意味着整个产品线停滞；但 Gemini 没有停。Flash 三个月里连续迭代，价格继续下降，computer use 被吸进主模型，Search 和 Gemini App 继续扩大分发。Google 用事实证明：**前沿 AI 的进步已经可以与旗舰发布时间解耦。**

这正是 Gemini 世家从 2023 到 2026 最大的变化。

2023 年 Google 忙着证明“我们的模型也很强”；2024 年证明“我们有别人没有的百万上下文”；2025 年证明“我们的 reasoning 也能登顶”；到 2026 年，它开始优化另一个更难被榜单捕捉的问题：

**如何让足够强的智能以极低边际成本进入数亿用户和数十亿次工作流调用。**

所以 Gemini 的长期竞争单位不是某个 Pro 模型，而是 **TPU / Cloud / Search / Android / Workspace / Gemini API / Agent runtime 共同组成的系统**。

这也是为什么 Flash 可能比 Pro 更值得历史记住：旗舰定义能力上限，工作马决定 AI 实际进入世界的速度。

---

*本篇由终末地工业史官团队编纂：赫默（主笔）。*  
*2026-08 补订：GPT-5.6 Sol（OpenAI）。*

---

[^1]: Google, “An important next step on our AI journey”, 2023-02-06. https://blog.google/technology/ai/bard-google-ai-search-updates/ ; The Verge, “Google's AI chatbot Bard makes factual error in first demo”, 2023-02-08. https://www.theverge.com/2023/2/8/23590864/google-ai-chatbot-bard-mistake-error-exoplanet-demo
[^2]: Google, “Introducing Gemini: our largest and most capable AI model”, 2023-12-06. https://blog.google/technology/ai/google-gemini-ai/
[^3]: Google, “Our next-generation model: Gemini 1.5”, 2024-02-15. https://blog.google/technology/ai/google-gemini-next-generation-model-february-2024/
[^4]: Google DeepMind, “Introducing Gemini 2.0: our new AI model for the agentic era”, 2024-12-11. https://blog.google/technology/google-deepmind/google-gemini-ai-update-december-2024/
[^5]: Google DeepMind, “Gemini 2.5: Our most intelligent AI model”, 2025-03-25. https://blog.google/technology/google-deepmind/gemini-model-thinking-updates-march-2025/
[^6]: Google, “A new era of intelligence with Gemini 3”, 2025-11-18. https://blog.google/products-and-platforms/products/gemini/gemini-3/
[^7]: Google, “Gemini 3 Deep Think is now available”, 2025-12-04. https://blog.google/products-and-platforms/products/gemini/gemini-3-deep-think/
[^8]: Google, “Gemini 3 Deep Think: Advancing science, research and engineering”, 2026-02-12. https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-deep-think/
[^9]: Google, “Gemini 3.1 Pro: A smarter model for your most complex tasks”, 2026-02-19. https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-1-pro/
[^10]: Google, “Gemini 3.5: frontier intelligence with action”, 2026-05-19. https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-5/
[^11]: Google, “The Gemini app becomes more agentic, delivering proactive, 24/7 help”, 2026-05-19. https://blog.google/innovation-and-ai/products/gemini-app/next-evolution-gemini-app/
[^12]: Google, “Introducing computer use in Gemini 3.5 Flash”, 2026-06-24. https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-computer-use-gemini-3-5-flash/
[^13]: Google, “Introducing Gemini 3.6 Flash, 3.5 Flash-Lite, and 3.5 Flash Cyber”, 2026-07-21. https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-6-flash-3-5-flash-lite-3-5-flash-cyber/
[^14]: Google, “Introducing Gemini 3.7 Flash”, 2026-08-13. https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-3-7-flash/
[^15]: Reuters, “Google updates lightweight Gemini models, but flagship still delayed”, 2026-07-21. https://www.reuters.com/business/google-updates-lightweight-gemini-models-flagship-still-delayed-2026-07-21/
[^16]: Reuters, “Google unveils Gemini 3.7 Flash AI model for coding, agent workflows”, 2026-08-13. Reuters copy: https://www.investing.com/news/stock-market-news/google-unveils-gemini-37-flash-ai-model-for-coding-agent-workflows-4858898
[^17]: Google I/O, “100 things we announced at Google I/O 2026”, 2026-05-20. https://blog.google/innovation-and-ai/technology/ai/google-io-2026-all-our-announcements/