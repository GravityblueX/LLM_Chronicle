# Agent 发展大事表

> 本表记录 **LLM Agent** 从理论前史到 2026 年物理设备接口的关键节点。传统 AI 中的 agent 概念远早于大语言模型；本表聚焦 2022 年以后“语言模型获得观察—行动闭环”这一条历史线。
>
> 本表不以“谁最强”排名，也不把每一个 Agent 产品都收进来。收录标准是：**是否改变了 Agent 的控制循环、行动接口、工作环境、状态机制、互操作协议、评测方式、安全边界或组织形态。**

---

## 一、时间线

| 时间 | 层级 | 事件 | 历史意义 | 出处 |
|---|---|---|---|---|
| 2022-04 | 物理 Agent / grounding | **SayCan** | 把 LLM 高层计划与机器人技能可行性结合；“想做”必须经过“能做”约束 | [^1] |
| 2022-05-01 | 模块化系统 | **MRKL Systems** | 把计算器、搜索、数据库等外部模块纳入语言模型调度；模型开始成为能力控制面 | [^2] |
| 2022-10-06 | 控制循环 | **ReAct** | 明确 `Reason → Act → Observe` 交替闭环，成为大量 LLM Agent 的直接思想祖先 | [^3] |
| 2023-02-09 | 工具学习 | **Toolformer** | 研究模型如何自主学习何时调用工具、调用什么工具 | [^4] |
| 2023-03-20 | 记忆 / 反思 | **Reflexion** | 不更新权重，而用自然语言反思与 episodic memory 改善后续尝试 | [^5] |
| 2023-03-23 | 消费产品 / 工具 | **ChatGPT Plugins** | 普通用户第一次大规模看到聊天模型调用搜索、订餐等外部服务；prompt injection 风险同步暴露 | [^6] |
| 2023-03—04 | 自主循环 | **AutoGPT / BabyAGI** | 把“给目标、自动分解、持续执行”推入大众视野，也暴露无限循环、漂移、成本失控等问题 | [^7] |
| 2023-03-31 | Multi-Agent | **CAMEL** | 用角色扮演研究大规模语言模型社会与多 Agent 协作 | [^8] |
| 2023-04-07 | Memory / Social Agent | **Generative Agents** | 将 memory、reflection、planning 组合成长期行为架构，并在 25 个 Agent 小镇中演示 | [^9] |
| 2023-05-25 | Embodied / Skill Memory | **Voyager** | 在 Minecraft 中用自动课程、可增长技能库与环境反馈形成持续学习式 Agent | [^10] |
| 2023-06-13 | Tool API | **OpenAI Function Calling** | 工具调用从自然语言 prompt hack 变成结构化 JSON / schema API 原语 | [^11] |
| 2023-07-25 | Agent Benchmark | **WebArena** | 构建可复现真实网站环境，评测长程网页任务而非静态答案 | [^12] |
| 2023-08-01 | Multi-Agent / SOP | **MetaGPT** | 用角色与标准作业流程组织软件开发 Agent，强调协作流程而非自由聊天 | [^13] |
| 2023-08-07 | Agent Benchmark | **AgentBench** | 将“LLM 作为 Agent”放进多种交互环境统一评测 | [^14] |
| 2023-09-25 | Multi-Agent Framework | **AutoGen** | Microsoft 提供可组合 conversable agents 框架，多 Agent 编排进入通用开发框架阶段 | [^15] |
| 2023-11-06 | Hosted Runtime | **Assistants API** | 文件、Code Interpreter、Retrieval、Function Calling 与持久 thread 进入托管运行环境 | [^16] |
| 2023-11-21 | General Assistant Benchmark | **GAIA** | 用浏览、工具、多模态和推理组合的现实任务衡量通用助手 | [^17] |
| 2024-03-12 | Coding Agent | **Devin** | “给 Agent 一台独立电脑”成为大众产品形态：shell、browser、editor、workspace | [^18] |
| 2024-04-11 | Desktop Benchmark | **OSWorld** | 在 Ubuntu / Windows / macOS 真实应用中评测 GUI / OS Agent | [^19] |
| 2024-05 | Agent Interface | **SWE-agent / ACI** | 提出 Agent–Computer Interface：环境接口设计本身会显著决定 Agent 性能 | [^20] |
| 2024-07 | Open Coding Runtime | **OpenHands** | 开源 software-agent runtime 成为独立基础设施层 | [^21] |
| 2024-09-12 | Enterprise Agent | **Salesforce Agentforce** | autonomous agents 进入 CRM、销售、客服、营销和企业权限体系 | [^22] |
| 2024-10-21 | Enterprise Agent | **Microsoft Copilot Studio autonomous agents** | 企业 Agent 从对话 Copilot 转向可自主运行的业务流程执行者 | [^23] |
| 2024-10-22 | Computer Use | **Claude Computer Use** | 模型通过截图、鼠标、键盘直接操作 GUI；桌面成为通用兼容层 | [^24] |
| 2024-11-25 | Tool Protocol | **Model Context Protocol (MCP)** | 工具、数据源、应用连接从一次性集成走向开放协议 | [^25] |
| 2024-12-03 | Managed Multi-Agent | **Amazon Bedrock multi-agent preview** | supervisor / specialist 多 Agent 进入云平台托管服务 | [^26] |
| 2024-12-18 | Workplace Benchmark | **TheAgentCompany** | 用模拟数字公司衡量 Agent 浏览内部网站、编码与“同事”协作能力 | [^27] |
| 2025-01-23 | Browser / Consumer Agent | **Operator / CUA** | computer-use agent 从开发接口进入面向终端用户的浏览器任务产品 | [^28] |
| 2025-02-02 | Research Agent | **Deep Research** | 异步执行多步网络研究，证明“行动”也可以是长程信息工作流 | [^29] |
| 2025-02-06 | Coding Agent | **GitHub Copilot Agent Mode** | IDE 中的编程助手进入自主读写、运行、修复循环 | [^30] |
| 2025-02-24 | Terminal Coding Agent | **Claude Code** | terminal + repository 成为 Agent 的自然执行环境 | [^31] |
| 2025-03-10 | Managed Multi-Agent | **Amazon Bedrock multi-agent GA** | 多 Agent 编排进入正式企业云服务 | [^32] |
| 2025-03-11 | Agent Platform | **Responses API / Agents SDK** | tools、handoff、guardrail、trace、agent loop 被平台化为正式开发组件 | [^33] |
| 2025-04-09 | Agent Protocol | **A2A** | 开始标准化不同 Agent 之间的发现、委派、状态与产物交换 | [^34] |
| 2025-04-09 | Multi-Agent Framework | **Google ADK** | 开源 Agent Development Kit，把多 Agent 工作流做成通用开发框架 | [^35] |
| 2025-05-16 | Async Coding Agent | **OpenAI Codex cloud agent** | 独立 cloud sandbox、并行任务、异步委派与 PR 交付成为 coding-agent 标准形态 | [^36] |
| 2025-05-19 | Agent Benchmark | **Terminal-Bench** | 终端成为通用 Agent 行动环境与可复现评测接口 | [^37] |
| 2025-05-21 | Long-running Runtime | **Remote MCP / Background Mode** | Agent 任务与单次 HTTP 请求生命周期解耦，长程后台执行进入 API 原语 | [^38] |
| 2025-06-23 | Protocol Governance | **A2A 进入 Linux Foundation** | Agent-to-Agent 协议从单厂商规范转向中立治理 | [^39] |
| 2025-07-17 | General Consumer Agent | **ChatGPT Agent** | Operator 的行动、Deep Research 的研究与 ChatGPT 对话合流，Research 与 Action 不再分家 | [^40] |
| 2025-12-09 | Open Governance | **Agentic AI Foundation (AAIF)** | MCP、goose、AGENTS.md 等 Agent 基础设施进入 Linux Foundation 下的中立治理 | [^41] |
| 2026-01-26 | Tool UI | **MCP Apps** | MCP 工具可返回会话内交互式 UI，工具与应用边界进一步模糊 | [^42] |
| 2026-01-26 | Agent Operations | **GitHub Agents Tab** | Agent session 像 Issue / PR 一样成为仓库中的一等管理对象 | [^43] |
| 2026-01-27 | Agent Swarm | **Kimi K2.5 Agent Swarm** | 多 Agent 开始被用作 test-time scaling 的横向扩展：自动组织约百个子 Agent | [^44] |
| 2026-02-02 | Multi-Agent Product | **Codex App** | “command center for agents”：并行 worktree、background task、skills、automations | [^45] |
| 2026-04-02 | Agent Payment | **x402 Foundation** | 将互联网原生支付明确纳入 Agent / API 交易基础设施 | [^46] |
| 2026-04-09 | A2A Adoption | **A2A 一周年** | Linux Foundation 称 150+ 组织支持，并进入主要云平台与企业生产部署 | [^47] |
| 2026-04-15 | Agent Runtime | **Agents SDK native sandbox** | harness、state 与临时计算环境进一步分离，snapshot / rehydrate 支持长程任务恢复 | [^48] |
| 2026-04-20 | Agent Swarm | **Kimi K2.6** | Swarm 扩展到最多约 300 个子 Agent、单任务 4,000+ tool calls | [^49] |
| 2026-07-14 | Agent Payment | **x402 Foundation operational launch** | Agent 支付协议从基金会成立进入正式运作阶段 | [^50] |
| 2026-07-28 | Tool Protocol | **MCP 2026-07-28 spec** | 无状态核心、Tasks、扩展框架、header routing、授权加固使 MCP 更接近生产基础设施 | [^51] |
| 2026-08-03 | Event-driven Agent | **Copilot Automations comments trigger** | Agent 不再必须由聊天启动，Issue / PR 等系统事件可以直接触发后台工作 | [^52] |
| 2026-08-27 | Physical Agent | **Anthropic MHS research preview** | Agent 标准接口从数字工具延伸到显微镜、机械臂等物理设备；当前按 Reuters 单一权威来源记录 | [^53] |

---

## 二、五次真正的形态变化

这张表如果只看产品名会非常碎。按系统边界重排，可以看见五次更稳定的变化：

| 阶段 | 核心变化 | 代表节点 |
|---|---|---|
| **Reason + Act** | 模型开始在行动结果后继续推理，而不是一次性回答 | ReAct、SayCan |
| **Structured Tools** | 行动意图从自由文本变成机器可验证接口 | Plugins、Function Calling、Tool Use、MCP |
| **Owned Workspace** | Agent 获得 browser、terminal、desktop、sandbox 与持久 workspace | Devin、Computer Use、Claude Code、Codex |
| **Delegation & Organization** | 人从“监督每一步”转向“给目标并验收”；Agent 之间开始分工 | Deep Research、A2A、Bedrock multi-agent、Kimi Swarm |
| **Durable & Governed Action** | 状态、恢复、身份、预算、审计、支付、事件触发和物理权限成为系统组成 | Background Mode、Agents SDK sandbox、AAIF、x402、MHS |

因此，Agent 历史最值得观察的指标不是“某个模型声称自主多少小时”，而是：

> **它能在什么环境行动，拥有多大权限，状态能保持多久，错误能否恢复，任务完成如何验证。**

---

## 三、协议分层速查

| 层 | 典型问题 | 代表协议 / 规范 |
|---|---|---|
| Agent ↔ Tool / Data | 如何发现、描述、调用和授权工具？ | MCP |
| Agent ↔ Agent | 如何发现另一个 Agent、委派任务、交换状态与产物？ | A2A |
| Agent ↔ User / Frontend | 长程任务的事件、状态、确认与 UI 如何持续同步？ | AG-UI、MCP Apps |
| Agent ↔ Repository | 在代码库里应遵守哪些本地说明？ | AGENTS.md |
| Agent ↔ Payment | 如何在授权预算内付款？ | x402 / payment APIs |
| Agent ↔ Hardware | 如何访问、限制和审计物理设备动作？ | MHS / vendor APIs |

这些协议并非天然竞争关系。到 2026 年，它们越来越像 Agent 时代的一组不同层次协议栈。

---

*2026-08-28 编表：GPT-5.6 Sol（OpenAI）。*

> 📖 详见《志·AI Agent 生态》《论·Agent 时代》《志·AI 编程助手》《Codex / GitHub Copilot 列传》。

---

[^1]: Ahn et al., “Do As I Can, Not As I Say”, arXiv:2204.01691. https://arxiv.org/abs/2204.01691
[^2]: Karpas et al., “MRKL Systems”, arXiv:2205.00445. https://arxiv.org/abs/2205.00445
[^3]: Yao et al., “ReAct”, arXiv:2210.03629. https://arxiv.org/abs/2210.03629
[^4]: Schick et al., “Toolformer”, arXiv:2302.04761. https://arxiv.org/abs/2302.04761
[^5]: Shinn et al., “Reflexion”, arXiv:2303.11366. https://arxiv.org/abs/2303.11366
[^6]: OpenAI, “ChatGPT plugins”, 2023-03-23. https://openai.com/index/chatgpt-plugins/
[^7]: AutoGPT / BabyAGI repositories. https://github.com/Significant-Gravitas/AutoGPT ; https://github.com/yoheinakajima/babyagi
[^8]: Li et al., “CAMEL”, arXiv:2303.17760. https://arxiv.org/abs/2303.17760
[^9]: Park et al., “Generative Agents”, arXiv:2304.03442. https://arxiv.org/abs/2304.03442
[^10]: Wang et al., “Voyager”, arXiv:2305.16291. https://arxiv.org/abs/2305.16291
[^11]: OpenAI, “Function calling and other API updates”, 2023-06-13. https://openai.com/index/function-calling-and-other-api-updates/
[^12]: Zhou et al., “WebArena”, arXiv:2307.13854. https://arxiv.org/abs/2307.13854
[^13]: Hong et al., “MetaGPT”, arXiv:2308.00352. https://arxiv.org/abs/2308.00352
[^14]: Liu et al., “AgentBench”, arXiv:2308.03688. https://arxiv.org/abs/2308.03688
[^15]: Microsoft Research, AutoGen. https://www.microsoft.com/en-us/research/project/autogen/
[^16]: OpenAI DevDay, 2023-11-06. https://openai.com/index/new-models-and-developer-products-announced-at-devday/
[^17]: Mialon et al., “GAIA”, arXiv:2311.12983. https://arxiv.org/abs/2311.12983
[^18]: Cognition, “Introducing Devin”, 2024-03-12. https://cognition.ai/blog/introducing-devin
[^19]: Xie et al., “OSWorld”, arXiv:2404.07972. https://arxiv.org/abs/2404.07972
[^20]: Yang et al., “SWE-agent”, arXiv:2405.15793. https://arxiv.org/abs/2405.15793
[^21]: OpenHands, “Introducing All Hands AI”, 2024-07-15. https://www.openhands.dev/blog/introducing-all-hands-ai
[^22]: Salesforce, Agentforce, 2024-09-12. https://www.salesforce.com/news/press-releases/2024/09/12/agentforce-announcement/
[^23]: Microsoft, autonomous agents, 2024-10-21. https://blogs.microsoft.com/blog/2024/10/21/new-autonomous-agents-scale-your-team-like-never-before/
[^24]: Anthropic, Computer Use, 2024-10-22. https://www.anthropic.com/news/3-5-models-and-computer-use
[^25]: Anthropic, MCP, 2024-11-25. https://www.anthropic.com/news/model-context-protocol
[^26]: AWS, Bedrock multi-agent preview, 2024-12-03. https://aws.amazon.com/blogs/aws/introducing-multi-agent-collaboration-capability-for-amazon-bedrock/
[^27]: Xu et al., TheAgentCompany, arXiv:2412.14161. https://arxiv.org/abs/2412.14161
[^28]: OpenAI, Operator / CUA, 2025-01-23. https://openai.com/index/introducing-operator/
[^29]: OpenAI, Deep Research, 2025-02-02. https://openai.com/index/deep-research/
[^30]: GitHub, Copilot Agent Mode, 2025-02-06. https://github.blog/news-insights/product-news/github-copilot-the-agent-awakens/
[^31]: Anthropic, Claude Code, 2025-02-24. https://www.anthropic.com/news/claude-3-7-sonnet
[^32]: AWS, Bedrock multi-agent GA, 2025-03-10. https://aws.amazon.com/about-aws/whats-new/2025/03/amazon-bedrock-multi-agent-collaboration/
[^33]: OpenAI, Responses API / Agents SDK, 2025-03-11. https://openai.com/index/new-tools-for-building-agents/
[^34]: Google, A2A, 2025-04-09. https://developers.googleblog.com/en/a2a-a-new-era-of-agent-interoperability/
[^35]: Google, ADK, 2025-04-09. https://developers.googleblog.com/agent-development-kit-easy-to-build-multi-agent-applications/
[^36]: OpenAI, Codex, 2025-05-16. https://openai.com/index/introducing-codex/
[^37]: Terminal-Bench, 2025-05-19. https://www.tbench.ai/news/announcement
[^38]: OpenAI, Responses API updates, 2025-05-21. https://openai.com/index/new-tools-and-features-in-the-responses-api/
[^39]: Linux Foundation, A2A project, 2025-06-23. https://www.linuxfoundation.org/press/linux-foundation-launches-the-agent2agent-protocol-project-to-enable-secure-intelligent-communication-between-ai-agents
[^40]: OpenAI, ChatGPT agent, 2025-07-17. https://openai.com/index/introducing-chatgpt-agent/
[^41]: Linux Foundation, Agentic AI Foundation, 2025-12-09. https://www.linuxfoundation.org/press/linux-foundation-announces-the-formation-of-the-agentic-ai-foundation
[^42]: MCP Blog, MCP Apps, 2026-01-26. https://blog.modelcontextprotocol.io/posts/2026-01-26-mcp-apps/
[^43]: GitHub, Agents tab, 2026-01-26. https://github.blog/changelog/2026-01-26-introducing-the-agents-tab-in-your-repository/
[^44]: Moonshot AI, Kimi K2.5, 2026-01-27. https://www.kimi.com/en/blog/kimi-k2-5
[^45]: OpenAI, Codex App, 2026-02-02. https://openai.com/index/introducing-the-codex-app/
[^46]: Linux Foundation, x402 Foundation, 2026-04-02. https://www.linuxfoundation.org/press/linux-foundation-is-launching-the-x402-foundation-and-welcoming-the-contribution-of-the-x402-protocol
[^47]: Linux Foundation, A2A one-year update, 2026-04-09. https://www.linuxfoundation.org/press/a2a-protocol-surpasses-150-organizations-lands-in-major-cloud-platforms-and-sees-enterprise-production-use-in-first-year
[^48]: OpenAI, Agents SDK evolution, 2026-04-15. https://openai.com/index/the-next-evolution-of-the-agents-sdk/
[^49]: Kimi Help Center, Agent Swarm. https://www.kimi.com/en/help/agent/agent-swarm
[^50]: Linux Foundation, x402 operational launch, 2026-07-14. https://www.linuxfoundation.org/press/linux-foundation-announces-operational-launch-of-x402-foundation-to-standardize-internet-native-payments-for-ai-agents-and-applications
[^51]: MCP Blog, 2026-07-28 specification. https://blog.modelcontextprotocol.io/posts/2026-07-28/
[^52]: GitHub, Copilot automations comments trigger, 2026-08-03. https://github.blog/changelog/2026-08-03-trigger-copilot-automations-with-comments/
[^53]: Reuters, Anthropic MHS, 2026-08-27. https://www.reuters.com/technology/anthropic-unveils-new-framework-allowing-ai-agents-operate-physical-devices-2026-08-27/