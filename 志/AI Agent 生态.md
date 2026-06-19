# 《AI Agent 生态》

> 从 ChatGPT 的一问一答，到 Agent 的自主规划、调用工具、操作屏幕——大模型的用途在两年内经历了一次范式翻转。这里记录的是这个转变的事实脉络：哪些事件催化了 Agent 化，哪些协议试图让 Agent 互操作，而"让 AI 替你做事"这件事，走到哪一步了。

---

## 一、概述

ChatGPT 发布后，大模型的核心交互范式是**对话**：用户输入一段文字，模型返回一段文字。即使上下文窗口拉长到 128K 甚至更远，本质仍是"你说一句，它回一句"。

但早在 2023 年初，一部分开发者已经在追问另一个问题：**如果模型能自己决定下一步做什么，而不只是回答问题，会怎样？** 这个追问催生了 AI Agent——一个让模型拥有记忆、工具、目标、反思能力的系统形态。

从 2023 年 3 月 AutoGPT 爆红到 2025 年 MCP 与 A2A 协议竞争，Agent 生态经历了三个阶段的演化：概念验证期（2023 上半年的狂热与幻灭）、基础设施成形期（2023 下半年到 2024 年的 API 与协议）、产品化与互操作期（2025 年至今）。每一阶段的核心问题都不同，但贯穿始终的矛盾只有一个：**自主性越大，可靠性越难保证**。

---

## 二、概念验证：AutoGPT 与 Agent 狂热（2023 年 Q1-Q2）

**2023-03-23**，OpenAI 发布 ChatGPT Plugins，允许 ChatGPT 调用第三方 API——这是大模型第一次被赋予"向外行动"的能力。Plugins 基于 OpenAPI 规范声明可用工具，ChatGPT 由模型自主决定何时、如何调用。[^1]

Plugins 发布一周后的 **2023-03-30**，开发者 Toran Bruce Richards 在 GitHub 上发布了 **AutoGPT**。它的设计极其朴素：给 GPT-4 一个目标，让它自己生成子任务、执行动作、观察结果、再规划下一步——一个"Plan → Act → Observe → Reflect"的无限循环。AutoGPT 可以访问网页、读写文件、执行代码，理论上能完成从市场调研到代码开发的端到端任务。[^2]

AutoGPT 在 GitHub 上创下增长纪录：一周内突破 10 万星标，成为当时增长最快的开源项目之一。[^3] 紧接着，**2023-04-03**，VC 与 AI 研究者 Yohei Nakajima 发布了 **BabyAGI**——一个更轻量的任务驱动 Agent，用 OpenAI 生成任务列表，用 Pinecone 存储记忆，用 LangChain 串联执行。[^4]

但狂热很快遭遇现实。AutoGPT 和 BabyAGI 在实际使用中暴露了几个致命问题：

- **循环陷阱**：模型在 Plan → Act 循环中反复执行无效动作，无法收敛到目标；
- **成本失控**：每一步循环都消耗 GPT-4 token，复杂任务动辄耗费数十美元；
- **可靠性不足**：模型在自主决策时频繁做出错误判断，缺乏人类监督的中间环节；
- **工具脆弱**：外部 API 的调用链一旦中断，整个循环就会卡死或产生幻觉。

**2023 年中**，AutoGPT 的 GitHub 活跃度显著下降，Stars 增长仍在但实际使用率不复早期。[^5] 行业逐渐形成一个共识：**完全自主的 Agent 在 2023 年还做不到，但 Agent 的理念——让模型不只是回答问题而是执行任务——不会消失。** 问题不是"要不要做 Agent"，而是"怎样把 Agent 做得可靠"。

---

## 三、基础设施成形：从 Function Calling 到 Assistants API（2023 年 Q2-Q4）

Agent 概念验证的失败，让行业转向基础设施建设。

**2023-06-13**，OpenAI 发布 **Function Calling** 功能，支持 gpt-3.5-turbo-0613 和 gpt-4-0613。[^6] 这是 Agent 生态中一个被低估的转折点。在此之前，LangChain 等框架用 prompt engineering 模拟工具调用——让模型输出一段特定格式的文本，再由程序解析；格式一旦出错，整个链条断裂。Function Calling 把工具调用变成了一等公民：模型以结构化 JSON 格式输出函数名和参数，由 OpenAI API 层面保证格式正确性。

这意味着 Agent 的"手臂"（工具调用）第一次有了可靠的工程基础。

**2023-11-06**，OpenAI 在 DevDay 上发布 **Assistants API** 与 **GPTs**。[^7] Assistants API 提供了三类内置能力：

1. **Code Interpreter**：模型可以在沙箱中执行 Python 代码、处理文件；
2. **Retrieval**：内置向量检索，支持上传文档供模型查询；
3. **Function Calling**：继承自 6 月的基础工具调用能力。

GPTs 则是面向非技术用户的 Agent 产品：用户通过对话方式配置一个自定义 ChatGPT，设定系统指令、知识库和可用工具，无需写代码。[^7]

GPTs 发布后引发了一波"AI App Store"的讨论——如果 Agent 可以被像 App 一样发布和分发，它会不会成为下一个平台？但这个愿景没有兑现：GPTs 生态缺乏有效的分发和变现机制，开发者发现做出一个好用的 GPT 并不容易，用户也很难找到适合自己的 GPT。Agent 的产品化需要更多工程。

---

## 四、多模态 Agent 与"具身"前沿（2024 年）

2024 年是 Agent 能力从"纯文本"走向"多模态"的关键年份。

**2024-03**，Anthropic 在 Claude 3 系列中正式引入 **tool use**（函数调用），与 OpenAI 的 Function Calling 形成竞争格局。Claude 的工具调用设计同样以 JSON 格式结构化输出函数名和参数，但在 system prompt 的灵活性上做了差异化。[^8]

**2024-03-12**，Cognition Labs 发布 **Devin**，宣称是"第一个 AI 软件工程师"。[^9] Devin 能在一个完整的开发环境中工作：终端、编辑器、浏览器。它不只是补全代码，而是理解需求、规划实现路径、编写代码、运行测试、调试错误。这标志着 Agent 从"调用 API"走向"操作整个计算环境"。

**2024-10-22**，Anthropic 发布 **Claude Computer Use**，基于 claude-3.5-sonnet-20241022。[^10] 这是大模型第一次获得"看屏幕、移鼠标、敲键盘"的能力——模型接收屏幕截图作为视觉输入，输出鼠标坐标和键盘操作。Computer Use 让 Agent 不再受限于 API 调用，理论上可以操作任何有图形界面的软件。

但 Computer Use 同时暴露了新问题：

- **速度**：每一步操作都需要截图→分析→输出坐标→执行，延迟以秒计；
- **精度**：模型对屏幕元素的识别并不完美，微小的 UI 差异可能导致错误操作；
- **安全**：一个可以操作桌面的 Agent 拥有极大的权力边界，需要严密的权限控制。

Computer Use 在 2024 年底仍然更接近"技术预览"而非"生产就绪"——但它打开了一扇门：Agent 的"身体"可以是整个计算机。

---

## 五、协议之争：MCP、A2A 与互操作性（2025 年）

当越来越多的 Agent 框架和产品出现，一个新的问题浮出水面：**Agent 之间、Agent 与工具之间，如何互操作？**

**2024-11-25**，Anthropic 开源 **Model Context Protocol（MCP）**。[^11] MCP 定义了一套标准化的协议，让 AI 模型以统一方式连接外部数据源和工具。它不只是又一个函数调用规范——MCP 的设计重点在于：

- **服务器-客户端架构**：工具提供方实现 MCP Server，AI 应用实现 MCP Client，双方通过标准协议通信；
- **资源发现**：Client 可以动态发现 Server 提供的工具、资源和 prompt 模板；
- **有状态会话**：支持跨多轮交互的上下文维护。

MCP 发布后在开发者社区迅速获得采纳。到 2025 年上半年，Cursor、Claude Desktop、Windsurf、Zed 等主流 AI 工具均已支持 MCP。Anthropic 把 MCP 定位为"AI 的 USB-C"——一个通用接口标准。[^11]

**2025-01-23**，OpenAI 发布 **Operator**，一个能操作浏览器完成实际任务（订餐、购物、填表）的 Agent。[^12] Operator 基于 Computer-Using Agent（CUA）模型，通过 Chrome 浏览器界面与用户交互。

**2025-03-11**，OpenAI 开源 **Agents SDK**，提供了一套构建 Agent 应用的 Python 框架，内置 handoff（多 Agent 协作）、guardrail（安全护栏）和 tracing（可观测性）等生产级功能。[^13]

**2025-04-09**，Google DeepMind 发布 **Agent2Agent（A2A）协议**。[^14] A2A 与 MCP 互补但侧重不同：MCP 解决 Agent 如何调用工具，A2A 解决 Agent 如何发现和协作其他 Agent。A2A 基于 HTTP 和 JSON-RPC，定义了 Agent Card（能力声明）、Task（任务委派）和 Artifact（产出物）等核心概念，目标是让不同厂商、不同框架构建的 Agent 可以互操作。

MCP 与 A2A 的竞争格局到 2025 年中逐渐清晰：**MCP 成了事实标准**（因为 Anthropic 先发、社区先采纳），A2A 则定位于更高层的 Agent 间协作协议。两者并非零和关系——一个 MCP Server 本身可以是一个 A2A Agent，反之亦然——但协议之争反映了更深的结构性问题：**Agent 生态的主导权在谁手里？**

---

## 六、事实脉络表

| 时间 | 参与者 | 事件 | 阶段意义 |
|------|--------|------|----------|
| 2023-03-23 | OpenAI | ChatGPT Plugins 发布 | 大模型首次获得调用外部 API 的结构化能力 |
| 2023-03-30 | Significant Gravitas | AutoGPT 发布，GitHub 一周破 10 万星标 | Agent 概念引爆，但暴露可靠性问题 |
| 2023-04-03 | Yohei Nakajima | BabyAGI 发布 | 更轻量的任务驱动 Agent 范式 |
| 2023-06-13 | OpenAI | Function Calling 发布 | 工具调用从 prompt hack 变成一等公民 |
| 2023-11-06 | OpenAI | DevDay：Assistants API + GPTs 发布 | Agent 产品化起步，GPTs 尝试"Agent App Store" |
| 2024-03 | Anthropic | Claude 3 引入 tool use | 工具调用进入双寡头竞争 |
| 2024-03-12 | Cognition Labs | Devin 发布 | Agent 从"调用 API"走向"操作开发环境" |
| 2024-10-22 | Anthropic | Claude Computer Use 发布 | Agent 获得"看屏幕、操作鼠标键盘"能力 |
| 2024-11-25 | Anthropic | MCP（Model Context Protocol）开源 | Agent 工具连接的标准化开端 |
| 2025-01-23 | OpenAI | Operator 发布 | 浏览器操作型 Agent 产品化 |
| 2025-03-11 | OpenAI | Agents SDK 开源 | 生产级 Agent 框架（handoff / guardrail / tracing） |
| 2025-04-09 | Google DeepMind | Agent2Agent（A2A）协议发布 | Agent 间互操作的标准化尝试 |

---

## 七、趋势分析

- **从"全自主"到"有监督的自主"**：AutoGPT 证明了纯自主 Agent 在 2023 年不可行，此后行业转向 human-in-the-loop 设计——Operator 需要用户确认支付，Claude Code 需要用户批准文件修改。完全自主的 Agent 仍然是目标，但当前的工程共识是"把人类放在关键节点上"。
- **工具调用是基础设施，不是功能**：Function Calling 的意义不在于"让模型能调 API"，而在于让工具调用变成了可靠、可组合、可审计的基础设施。MCP 则把这层基础设施从"一家公司控制"推向"开放协议"。
- **协议层决定生态格局**：MCP vs A2A 的竞争，本质上是 Anthropic 和 Google 争夺 Agent 互操作标准的定义权。历史上，开放协议的先发优势往往比技术优越性更能决定胜负（参见 HTTP vs Gopher）。MCP 的社区采纳率在 2025 年上半年显著领先。
- **Agent 的"身体"在扩张**：从纯文本对话（2023），到代码执行（Assistants API），到浏览器操作（Operator），到桌面操作（Computer Use），Agent 的行动空间不断扩大。每一次扩张都带来新的能力和新的安全问题。
- **可靠性仍是瓶颈**：Agent 在演示中表现惊艳，但在生产环境中，每一步工具调用的错误率经过链式乘法后会迅速放大。一个 95% 可靠的五步 Agent，端到端成功率只有 77%。这个问题到 2025 年中仍没有根本解决。

---

## 评曰

AI Agent 的故事，本质上是一场自主性与可靠性的拔河。AutoGPT 的狂热证明了人们对"AI 替我做事"这件事的渴望有多么强烈；它随后的冷却则证明了，让语言模型自主规划和行动，工程难度远超想象。2023 到 2025 年的演进路径——从概念验证到基础设施到协议标准化——走的是经典的工程路径：先证明概念可行，再把关键环节变得可靠，最后通过标准协议把生态连接起来。MCP 的胜出不是因为它技术上最好，而是因为它在正确的时间给了开发者一个稳定的锚点。Agent 生态真正的考验不在 2025 年的协议之争，而在下一步：当 Agent 的行动空间从屏幕扩展到物理世界，可靠性要求从"大部分时候对"变成"关键时候不能错"——那时候，Agent 的故事才真正开始。

---

*终末地工业史官团队编纂：伊冯（架构审计）*

---

[^1]: OpenAI, "ChatGPT plugins", 2023-03-23. https://openai.com/index/chatgpt-plugins/
[^2]: Significant Gravitas, "Auto-GPT", GitHub repository, 2023-03-30. https://github.com/Significant-Gravitas/AutoGPT
[^3]: The Verge, "AutoGPT is the future of AI assistants — if it can stop making mistakes", 2023-04-19. https://www.theverge.com/2024/4/19/24134730/autogpt-ai-agent-open-source
[^4]: Yohei Nakajima, "BabyAGI", GitHub repository, 2023-04-03. https://github.com/yoheinakajima/babyagi
[^5]: The Verge, "AutoGPT and the rise of AI agents", 2024. https://www.theverge.com/2024/4/19/24134730/autogpt-ai-agent-open-source
[^6]: OpenAI, "Function calling and other API updates", 2023-06-13. https://openai.com/index/function-calling-and-other-api-updates/
[^7]: OpenAI, "New models and developer products announced at DevDay", 2023-11-06. https://openai.com/index/new-models-and-developer-products-announced-at-devday/
[^8]: Anthropic, "Introducing the next generation of Claude", 2024-03-04. https://www.anthropic.com/news/claude-3-family
[^9]: Cognition Labs, "Introducing Devin", 2024-03-12. https://www.cognition.ai/blog/introducing-devin
[^10]: Anthropic, "Introducing computer use, a new Claude 3.5 Sonnet, and Claude 3.5 Haiku", 2024-10-22. https://www.anthropic.com/news/3-5-models-and-computer-use
[^11]: Anthropic, "Model Context Protocol", 2024-11-25. https://www.anthropic.com/news/model-context-protocol
[^12]: OpenAI, "Introducing Operator", 2025-01-23. https://openai.com/index/introducing-operator/
[^13]: OpenAI, "New tools for building agents", 2025-03-11. https://openai.com/index/new-tools-for-building-agents/
[^14]: Google DeepMind, "Announcing the Agent2Agent protocol", 2025-04-09. https://developers.googleblog.com/en/a2a-a-new-era-of-agent-interoperability/
