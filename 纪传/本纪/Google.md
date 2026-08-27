# 《Google 本纪》

> Google 发明了 Transformer，却没有最先把它变成全球最成功的聊天产品。真正值得记录的，并不是“发明者被后来者抢先”的戏剧性，而是 Google 此后怎样重新组织自己的优势：**TPU、模型、搜索、Android、Workspace、云、Agent 平台一起工作。** 到 2026 年，Gemini 的竞争单位已经不再只是某个 Pro 旗舰，而是一整套从 Deep Think 到 Flash、从 Search 到 Managed Agents 的生产系统。

---

## 一、概述

Google 在大模型史上的地位有两层。

第一层是技术史：Google Brain / Google Research 在 2017 年发表《Attention Is All You Need》，Transformer 成为后续 GPT、BERT、PaLM、Llama、Gemini 等系统的共同基础。[^1]

第二层是产业史：Google 同时拥有 TPU、搜索、YouTube、Android、Workspace、Chrome、Cloud 等模型公司通常无法同时拥有的基础设施。ChatGPT 的爆发证明“拥有技术”并不等于“拥有产品”；Gemini 此后的演化则证明，Google 的反击也不能只靠再训练一个更大的模型。

到 2026 年，Google 的 AI 路线可以概括成：

> **把模型能力嵌入既有基础设施，再把基础设施反过来变成 Agent 的运行环境。**

---

## 二、从 Google Brain 到 Google DeepMind

### 2.1 Transformer：发明基础设施，却没有定义第一代产品

2017 年 6 月，Vaswani 等八位作者发表 Transformer 论文。[^1]

它最重要的工程意义是去掉循环结构，使序列训练能够更充分并行化。此后的规模化预训练几乎都建立在这个方向上。

Google 随后又发展 BERT、T5、Switch Transformer、PaLM 等路线，但在 2022 年 11 月 ChatGPT 出现时，公众第一次大规模接触通用大模型的入口并不是 Google。

历史因此出现一个反差：**Google 发明了底座，OpenAI 定义了聊天产品。**

### 2.2 Bard 失误与组织合并

2023 年初 Bard 的仓促发布与公开错误，暴露了 Google 在研究、模型与产品之间的组织摩擦。

**2023-04**，Google 将 Brain 与 DeepMind 合并为 **Google DeepMind**，由 Demis Hassabis 领导。[^2]

这一步比任何单次模型发布更重要。Gemini 后来的训练、产品和研究路线，开始在统一组织下推进；TPU、基础研究和消费产品也被更紧密地连接起来。

---

## 三、Gemini：从多模态模型到 Agent 基础设施

### 3.1 Gemini 1.x：原生多模态与百万上下文

**2023-12**，Gemini 1.0 发布。Google 从一开始就强调多模态训练，而不是把视觉作为语言模型的后接插件。[^3]

**2024-02**，Gemini 1.5 Pro 将长上下文推进到百万 token 级，长视频、长文档和代码库分析成为 Gemini 的主要差异化方向之一。[^4]

这个阶段 Google 的竞争叙事仍然主要围绕“模型能力”：多模态、上下文窗口、基准表现。

### 3.2 Gemini 2.x：Agentic era 成为显式目标

Gemini 2.0 / 2.5 之后，Google 越来越频繁地把模型放在工具调用、搜索、代码执行和 Agent 系统中讨论。

这意味着上下文不再只是“能读多少文本”，而是模型需要在多轮工具调用里持续维护的工作状态。

### 3.3 Gemini 3 / 3.1：旗舰能力继续推进

**2026-02-12**，Google 更新 Gemini 3 Deep Think，把它定位于科学、研究和工程问题。[^5]

**2026-02-19**，Gemini 3.1 Pro 发布，面向复杂任务，并进入 Gemini API、Vertex AI、Gemini app 与 NotebookLM。[^6]

这里仍然是传统旗舰路线：复杂任务用更强模型、更高推理预算。

真正改变 Google 2026 年节奏的，却是 Flash。

---

## 四、Flash：从“便宜版 Pro”变成生产 Agent 工作马

### 4.1 3.5：frontier intelligence with action

**2026-05-19**，Google 发布 Gemini 3.5，官方直接使用 “frontier intelligence with action” 描述这一代。[^7]

3.5 的关键不是又多一档模型，而是 Google 将**执行复杂 Agent workflow**写成家族目标。

### 4.2 3.6 Flash：为高频 Agent 调用优化 token 效率

**2026-07-21**，Google 发布 Gemini 3.6 Flash、3.5 Flash-Lite 与 3.5 Flash Cyber。Google 明确表示这些模型用于在规模上运行 AI agents，重点是 token efficiency、latency 与 reliability。[^8]

其中 3.6 Flash 的意义尤其清楚：

- 不只追求单次回答质量；
- 还追求完成一个多轮 Agent 工作流时少生成多少 token；
- token 少意味着延迟低、成本低，也意味着同一预算能进行更多次工具循环。

### 4.3 Managed Agents：Google 开始托管整个运行时

**2026-07-28**，Gemini API 的 Managed Agents 更新到默认使用 3.6 Flash，并增加 environment hooks、budget controls、scheduled triggers 等能力。[^9]

一个 API 调用可以协调 reasoning、代码执行、包安装、文件管理与 web retrieval，并在隔离云 sandbox 内运行。

这一步表明 Google 的产品不再只是“给你一个模型 API”，而是开始提供：

> **模型 + 沙箱 + 工具 + 触发器 + 审计钩子 + 预算控制。**

### 4.4 3.7 Flash：工作马三周一更

**2026-08-13**，Gemini 3.7 Flash 发布，距 3.6 Flash 只有三周。Google 称其为“our most intelligent workhorse model yet for coding and agents”，并以 3.6 Flash 原始价格的一半作为首发价。[^10]

这时一个非常重要的结构已经成形：

**旗舰发布时间，与生产负载进步开始解耦。**

即使最强 Pro 代际没有同步更新，Flash 仍可以通过：

- 更低 token 消耗；
- 更低延迟；
- 更低价格；
- 更可靠的工具调用；
- 更成熟的 managed runtime；

让真实 Agent 系统继续向前。

---

## 五、Deep Research：模型开始承担长程知识工作

**2026-04-21**，Google 发布下一代 Deep Research / Deep Research Max。Max 基于 Gemini 3.1 Pro，加入 MCP 支持、私有数据连接与可视化生成，面向长程研究工作。[^11]

这说明 Gemini 的另一个产品方向：不是把所有 Agent 都压进浏览器操作，而是将“研究”本身做成可委托的长任务。

对 Google 来说，这种 Agent 有一个天然优势：搜索、网页索引、Workspace、NotebookLM 和 Cloud data source 原本就在同一生态里。

---

## 六、TPU 与全栈优势：真正的护城河不是某一版 Gemini

Google 很早就自研 TPU。其长期意义在 2026 年变得更明显：

1. **训练**：Google 不需要完全依赖 NVIDIA 的产品周期；
2. **推理**：Flash 这种高调用量模型可以与自有硬件协同优化；
3. **分发**：同一模型可以进入 Search、Gemini app、Android、Workspace、Vertex AI；
4. **Agent runtime**：Cloud sandbox、Search、文件、浏览器和私有数据可以在同一控制平面内组织。

因此“Google 有没有世界最强模型”已经不是最好的公司级问题。

更好的问题是：

> **Google 能不能把足够强的模型，以最低摩擦送进最多真实工作流？**

这也是为什么 Flash 的历史意义可能不小于 Pro。

---

## 七、Google 路线的矛盾

### 7.1 全栈是优势，也是组织负担

Google 拥有别人难以复制的资产，却也意味着产品线复杂、内部接口众多、发布节奏更难统一。

ChatGPT 时代已经证明，小团队可以通过一个极简产品迅速建立用户心智。Google 的优势更多会在**持续生产负载、企业集成和分发**上体现，而不一定表现为每次发布都最轰动。

### 7.2 “模型最好”与“系统最好”正在分离

在 2023 年，比较 GPT-4、Claude、Gemini 主要还是比较模型。

到 2026 年，真实系统要比较的已经包括：

- 模型质量；
- token efficiency；
- sandbox；
- search / retrieval；
- MCP；
- budget controls；
- triggers；
- enterprise data access；
- Android / Workspace / Cloud 分发。

这正是 Google 最有机会发挥结构优势的地方。

---

## 评曰

Google 的 AI 史曾经很容易被写成一句戏剧化的话：

> **发明 Transformer 的公司，却被 ChatGPT 抢走了产品时代。**

这句话描述了 2022—2023，却不足以描述 2026。

Google 后来的反击不是再证明一次“我们也能训出很强的模型”，而是逐渐把自己二十年的基础设施重新解释成 AI 资产：TPU 是算力，Search 是外部世界接口，Workspace 是工作数据，Android 是终端分发，Cloud 是 Agent 的运行环境。

Gemini 3.7 Flash 的意义恰好在这里。它不是最昂贵、最高规格的旗舰，却可能承担更多真实生产调用。Agent 一项任务要进行几十次推理和工具交互时，**便宜一点、少生成一点、稳定一点**的价值会被循环放大。

因此 Google 真正的竞争单位正在从 Gemini 模型，变成：

**Gemini + TPU + Search + Cloud + Workspace + Android + Agent runtime。**

Transformer 给了 Google 技术史上的起点；能否把这套全栈系统变成长期生产优势，才决定它在 Agent 时代的终点。

---

*本篇由终末地工业史官团队编纂：伊冯（架构审计）。*  
*2026-08 补订：GPT-5.6 Sol（OpenAI）。*

---

[^1]: Vaswani et al., “Attention Is All You Need”, 2017. https://arxiv.org/abs/1706.03762
[^2]: Google, “Google DeepMind: bringing together two world-class AI teams”, 2023-04. https://blog.google/technology/ai/april-ai-update/
[^3]: Google, “Introducing Gemini”, 2023-12-06. https://blog.google/technology/ai/google-gemini-ai/
[^4]: Google, “Gemini 1.5: Unlocking multimodal understanding across millions of tokens of context”, 2024-02. https://blog.google/technology/ai/google-gemini-next-generation-model-february-2024/
[^5]: Google, “Gemini 3 Deep Think: Advancing science, research and engineering”, 2026-02-12. https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-deep-think/
[^6]: Google, “Gemini 3.1 Pro: A smarter model for your most complex tasks”, 2026-02-19. https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-1-pro/
[^7]: Google, “Gemini 3.5: frontier intelligence with action”, 2026-05-19. https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-5/
[^8]: Google, “Introducing Gemini 3.6 Flash, 3.5 Flash-Lite, and 3.5 Flash Cyber”, 2026-07-21. https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-6-flash-3-5-flash-lite-3-5-flash-cyber/
[^9]: Google, “Gemini API Managed Agents: 3.6 Flash, hooks, and more”, 2026-07-28. https://blog.google/innovation-and-ai/technology/developers-tools/expanding-managed-agents-gemini-api-3-6-flash-hooks/
[^10]: Google, “Introducing Gemini 3.7 Flash”, 2026-08-13. https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-3-7-flash/
[^11]: Google, “Deep Research Max: a step change for autonomous research agents”, 2026-04-21. https://blog.google/innovation-and-ai/models-and-research/gemini-models/next-generation-gemini-deep-research/