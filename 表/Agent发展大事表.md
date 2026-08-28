# Agent 发展大事表

> 本表记录 **LLM Agent** 从理论前史到 2026 年物理设备接口的关键节点。传统 AI 中的 agent 概念远早于大语言模型；本表聚焦 2022 年以后“语言模型获得观察—行动闭环”这一条历史线。
>
> 本表不以“谁最强”排名，也不把每一个 Agent 产品都收进来。收录标准是：**是否改变了 Agent 的控制循环、行动接口、工作环境、状态机制、互操作协议、评测方式、安全边界、组织形态或大众产品范式。** 对 Agent 产品，厂商宣称能力不等于稳定可靠能力；详见《凡例 v2.2》。

---

## 一、时间线

| 时间 | 层级 | 事件 | 历史意义 | 出处 |
|---|---|---|---|---|
| 2022-04 | 物理 Agent / grounding | **SayCan** | 把 LLM 高层计划与机器人技能可行性结合；“想做”必须经过“能做”约束 | [^1] |
| 2022-05-01 | 模块化系统 | **MRKL Systems** | 把计算器、搜索、数据库等外部模块纳入语言模型调度；模型开始成为能力控制面 | [^2] |
| 2022-10-06 | 控制循环 | **ReAct** | 明确 `Reason → Act → Observe` 交替闭环，成为大量 LLM Agent 的直接思想祖先 | [^3] |
| 2023-02-09 | 工具学习 | **Toolformer** | 研究模型如何自主学习何时调用工具、调用什么工具 | [^4] |
| 2023-03-20 | 记忆 / 反思 | **Reflexion** | 不更新权重，而用自然语言反思与 episodic memory 改善后续尝试 | [^5] |
| 2023-03-23 | 消费产品 / 工具 | **ChatGPT Plugins** | 普通用户第一次大规模看到聊天模型调用外部服务；prompt injection 风险同步暴露 | [^6] |
| 2023-03—04 | 自主循环 | **AutoGPT / BabyAGI** | 把“给目标、自动分解、持续执行”推入大众视野，也暴露无限循环、漂移、成本失控等问题 | [^7] |
| 2023-03-31 | Multi-Agent | **CAMEL** | 用角色扮演研究大规模语言模型社会与多 Agent 协作 | [^8] |
| 2023-04-07 | Memory / Social Agent | **Generative Agents** | memory、reflection、planning 组合成长期行为架构 | [^9] |
| 2023-05-25 | Embodied / Skill Memory | **Voyager** | Minecraft 中用自动课程、技能库与环境反馈形成持续学习式 Agent | [^10] |
| 2023-06-13 | Tool API | **OpenAI Function Calling** | 工具调用从自然语言 prompt hack 变成结构化 JSON / schema API 原语 | [^11] |
| 2023-07-25 | Agent Benchmark | **WebArena** | 构建可复现真实网站环境，评测长程网页任务 | [^12] |
| 2023-08-01 | Multi-Agent / SOP | **MetaGPT** | 用角色与标准作业流程组织软件开发 Agent | [^13] |
| 2023-08-07 | Agent Benchmark | **AgentBench** | 将“LLM 作为 Agent”放进多种交互环境统一评测 | [^14] |
| 2023-09-25 | Multi-Agent Framework | **AutoGen** | 可组合 conversable agents 框架，多 Agent 编排进入通用开发阶段 | [^15] |
| 2023-11-06 | Hosted Runtime | **Assistants API** | 文件、Code Interpreter、Retrieval、Function Calling 与持久 thread 进入托管运行环境 | [^16] |
| 2023-11-21 | General Assistant Benchmark | **GAIA** | 浏览、工具、多模态和推理组合的现实任务评测 | [^17] |
| 2024-03-12 | Coding Agent | **Devin** | “给 Agent 一台独立电脑”成为大众产品形态 | [^18] |
| 2024-04-11 | Desktop Benchmark | **OSWorld** | 在真实桌面应用中评测 GUI / OS Agent | [^19] |
| 2024-05 | Agent Interface | **SWE-agent / ACI** | 环境接口设计本身成为 Agent 性能变量 | [^20] |
| 2024-07 | Open Coding Runtime | **OpenHands** | 开源 software-agent runtime 成为独立基础设施层 | [^21] |
| 2024-09-12 | Enterprise Agent | **Salesforce Agentforce** | autonomous agents 进入 CRM、客服、销售和企业权限体系 | [^22] |
| 2024-10-21 | Enterprise Agent | **Microsoft Copilot Studio autonomous agents** | 企业 Copilot 转向业务流程执行者 | [^23] |
| 2024-10-22 | Computer Use | **Claude Computer Use** | 模型通过截图、鼠标、键盘直接操作 GUI | [^24] |
| 2024-10-25 | Phone Use / 中国 | **智谱 AutoGLM** | GUI Agent 推进到真实 Android App，Phone Use 成为独立路线 | [^54] |
| 2024-11-25 | Tool Protocol | **Model Context Protocol (MCP)** | 工具、数据源与应用连接从一次性集成走向开放协议 | [^25] |
| 2024-12-03 | Managed Multi-Agent | **Amazon Bedrock multi-agent preview** | supervisor / specialist 多 Agent 进入云平台托管服务 | [^26] |
| 2024-12-18 | Workplace Benchmark | **TheAgentCompany** | 模拟数字公司评测办公、编码与协作 | [^27] |
| 2025-01-23 | Browser / Consumer Agent | **Operator / CUA** | computer-use agent 进入面向终端用户的浏览器任务产品 | [^28] |
| 2025-02-02 | Research Agent | **Deep Research** | 异步执行多步网络研究，长程信息工作流产品化 | [^29] |
| 2025-02-06 | Coding Agent | **GitHub Copilot Agent Mode** | IDE 助手进入自主读写、运行、修复循环 | [^30] |
| 2025-02-24 | Terminal Coding Agent | **Claude Code** | terminal + repository 成为 Agent 自然执行环境 | [^31] |
| 2025-03-10 | Managed Multi-Agent | **Amazon Bedrock multi-agent GA** | 多 Agent 编排进入正式企业云服务 | [^32] |
| 2025-03-11 | Agent Platform | **Responses API / Agents SDK** | tools、handoff、guardrail、trace、agent loop 平台化 | [^33] |
| 2025-04-09 | Agent Protocol | **A2A** | 开始标准化不同 Agent 的发现、委派、状态与产物交换 | [^34] |
| 2025-04-09 | Multi-Agent Framework | **Google ADK** | 多 Agent 工作流进入通用开发框架 | [^35] |
| 2025-05-16 | Async Coding Agent | **OpenAI Codex cloud agent** | cloud sandbox、异步委派、并行任务与 PR 交付成为标准形态 | [^36] |
| 2025-05-19 | Agent Benchmark | **Terminal-Bench** | 终端成为通用 Agent 行动环境与评测接口 | [^37] |
| 2025-05-21 | Long-running Runtime | **Remote MCP / Background Mode** | Agent task 与单次 HTTP response 生命周期解耦 | [^38] |
| 2025-06-23 | Protocol Governance | **A2A 进入 Linux Foundation** | Agent-to-Agent 协议转向中立治理 | [^39] |
| 2025-07-17 | General Consumer Agent | **ChatGPT Agent** | Operator 的行动、Deep Research 的研究与 ChatGPT 对话合流 | [^40] |
| **2025-11-25** | **Local-first Personal Agent** | **Clawd（OpenClaw 前身）诞生** | 把本机、workspace、消息入口、Skills、模型/API Key 与长期 gateway 组合成个人 Agent harness；后来引爆中国大众“养龙虾”浪潮 | [^65] |
| 2025-12-09 | Open Governance | **Agentic AI Foundation (AAIF)** | MCP、goose、AGENTS.md 等基础设施进入中立治理 | [^41] |
| 2025-12-18 | Agent-native Model / 中国 | **ByteDance Seed1.8** | Search、Code、GUI 与 workflow 合并进 generalized agentic model | [^55] |
| 2026-01-26 | Tool UI | **MCP Apps** | MCP 工具可返回会话内交互式 UI | [^42] |
| 2026-01-26 | Agent Operations | **GitHub Agents Tab** | agent session 成为 repository 一等管理对象 | [^43] |
| 2026-01-27 | Agent Swarm | **Kimi K2.5 Agent Swarm** | multi-agent 被用作横向 test-time scaling；相关规模/加速数字为厂商评测口径 | [^44] |
| **2026-01-29** | **Personal Agent / Ownership** | **OpenClaw 正式定名** | “Your assistant. Your machine. Your rules.”把 local-first、消息遥控与用户自持 runtime 变成高传播力产品范式 | [^66] |
| 2026-02-02 | Multi-Agent Product | **Codex App** | 多 Agent command center、worktree、background task、skills、automations | [^45] |
| **2026-03-04 / 03-09** | **Personal Desktop Agent / 中国** | **Tencent WorkBuddy** | 3/4 出现公开版本记录、3/9 对外正式/公测传播；OpenClaw 浪潮中出现的自研办公执行 Agent，非简单 fork | [^61][^67] |
| **2026-03-09—22** | **Mass-market Agent Wave / 中国** | **OpenClaw“养龙虾”爆发** | 地方推广、云托管、QClaw、DuClaw、ArkClaw、AutoClaw、ClawBot 等密集出现；普通用户第一次大规模把 Agent 当成长期执行者，同时暴露 token 成本、可靠性和权限风险 | [^68] |
| 2026-03-17 | Enterprise Work Agent / 中国 | **阿里悟空 Wukong** | 钉钉组织、权限与协作生态成为企业多 Agent 分发入口 | [^56] |
| 2026-04-02 | Agent Payment | **x402 Foundation** | 将互联网原生支付纳入 Agent / API 交易基础设施 | [^46] |
| 2026-04-09 | A2A Adoption | **A2A 一周年** | 150+ 组织支持并进入主要云平台与企业生产部署 | [^47] |
| 2026-04-15 | Agent Runtime | **Agents SDK native sandbox** | harness / state 与临时 compute 分离，支持 snapshot / rehydrate | [^48] |
| 2026-04-20 | Agent Swarm | **Kimi K2.6** | Swarm 横向扩展；规模数字仍需和成本/实际 ROI 分开理解 | [^49] |
| 2026-04-21 | Local-first Personal Agent / 中国 | **Tencent QClaw international beta** | OpenClaw 被包装成低部署门槛本机 Agent；支持 IM remote command 与 BYOK | [^62] |
| 2026-04-29 | Personal Memory Agent / 中国 | **ima copilot** | 个人知识库、用户档案、长期记忆与 Skills 形成独立“知识 / 记忆层” | [^63] |
| 2026-05-29 | AI Team Workspace / 中国 | **扣子 3.0** | 从 Bot/workflow builder 转向“一人+多 Agent / 多人+多 Agent”项目工作台 | [^57] |
| 2026-06-05 | Personal Agent Suite / 中国 | **腾讯个人效率 Agent 矩阵** | QClaw、WorkBuddy、元宝、ima、腾讯文档与企业侧 WorkBuddy/ClawPro/ADP 分层 | [^64] |
| 2026-07-01 | AgentOps Commercialization / 中国 | **Tencent Cloud ADP 工作台 / Claw 正式商用** | 任务运行时长进入正式计费 | [^58] |
| 2026-07-14 | Agent Payment | **x402 Foundation operational launch** | Agent 支付协议进入正式运作 | [^50] |
| 2026-07-28 | Tool Protocol | **MCP 2026-07-28 spec** | 无状态核心、Tasks、扩展和授权机制更适合生产基础设施 | [^51] |
| 2026-08-03 | Event-driven Agent | **Copilot Automations comments trigger** | Issue / PR 等系统事件可直接触发后台 Agent | [^52] |
| 2026-08-17 | Managed Agent Runtime / 中国 | **阿里云百炼 Managed Agents 商业化** | 0.5 元/小时 session runtime + model token + tools/MCP 独立计费 | [^59] |
| 2026-08-27 | Open Agent Platform / 中国团队 | **Dify 重构 Agent** | workflow-first 平台把 Agent 升级成可独立运行、可复用的长期主体 | [^60] |
| 2026-08-27 | Physical Agent | **Anthropic MHS research preview** | Agent 标准接口延伸到显微镜、机械臂等物理设备；当前按 Reuters 单一权威来源记录 | [^53] |

---

## 二、五次真正的形态变化

| 阶段 | 核心变化 | 代表节点 |
|---|---|---|
| **Reason + Act** | 模型开始在行动结果后继续推理 | ReAct、SayCan |
| **Structured Tools** | 行动意图从自由文本变成机器可验证接口 | Plugins、Function Calling、MCP |
| **Owned Workspace** | Agent 获得 browser、terminal、desktop、sandbox、长期本机或云 runtime | Devin、Computer Use、AutoGLM、OpenClaw、WorkBuddy、Claude Code、Codex |
| **Delegation & Organization** | 人从监督每一步转向给目标并验收，Agent 间开始分工 | Deep Research、A2A、Bedrock multi-agent、Kimi Swarm、Wukong、Coze 3.0 |
| **Durable & Governed Action** | 状态、恢复、身份、预算、审计、支付、事件触发和物理权限成为系统组成 | Background Mode、ima memory、Agents SDK sandbox、AAIF、x402、ADP、Managed Agents、MHS |

OpenClaw 在这里不是一种新的控制循环，而是一种**产品文化与所有权范式**：它把前面已经存在的技术部件打包成“普通人应该拥有一只长期在线 Agent”的大众想象。

---

## 三、看 Agent 大事表时必须记住：功能不是可靠性

从 2026 年开始，Agent 大事表越来越容易被厂商发布节奏误导。以后读表至少区分：

- **Claim**：厂商说它能做什么；
- **Availability**：demo、beta、GA 还是 commercial；
- **Repeat reliability**：同一个真实任务反复做是否稳定；
- **Human intervention**：验证码、登录、支付、冲突、错误时要不要人接管；
- **Total task cost**：token、runtime、tools、retry、人工返工；
- **Recovery / safety**：失败后能否停止、恢复、rollback，credentials 与权限是否隔离。

因此“发布某 Agent”是历史事实；“这个 Agent 已经能稳定替人完成工作”则需要更强证据。

---

## 四、协议分层速查

| 层 | 典型问题 | 代表协议 / 规范 |
|---|---|---|
| Agent ↔ Tool / Data | 如何发现、描述、调用和授权工具？ | MCP |
| Agent ↔ Agent | 如何发现另一个 Agent、委派任务、交换状态与产物？ | A2A |
| Agent ↔ User / Frontend | 长程任务的事件、状态、确认与 UI 如何持续同步？ | AG-UI、MCP Apps |
| Agent ↔ Repository | 在代码库里应遵守哪些本地说明？ | AGENTS.md |
| Agent ↔ Payment | 如何在授权预算内付款？ | x402 / payment APIs |
| Agent ↔ Hardware | 如何访问、限制和审计物理设备动作？ | MHS / vendor APIs |

---

*2026-08-28 编表 / 重订：GPT-5.6 Sol（OpenAI）。*

> 📖 详见《志·OpenClaw 与中国 Agent“龙虾潮”》《志·AI Agent 生态》《志·个人 Agent 生态与商业化》《志·中国 Agent 生态与商业化》《表·中国 OpenClaw“龙虾”生态对照表》《论·Agent 时代》。

---

[^1]: Ahn et al., SayCan. https://arxiv.org/abs/2204.01691
[^2]: Karpas et al., MRKL Systems. https://arxiv.org/abs/2205.00445
[^3]: Yao et al., ReAct. https://arxiv.org/abs/2210.03629
[^4]: Schick et al., Toolformer. https://arxiv.org/abs/2302.04761
[^5]: Shinn et al., Reflexion. https://arxiv.org/abs/2303.11366
[^6]: OpenAI, ChatGPT plugins. https://openai.com/index/chatgpt-plugins/
[^7]: AutoGPT / BabyAGI repositories. https://github.com/Significant-Gravitas/AutoGPT ; https://github.com/yoheinakajima/babyagi
[^8]: Li et al., CAMEL. https://arxiv.org/abs/2303.17760
[^9]: Park et al., Generative Agents. https://arxiv.org/abs/2304.03442
[^10]: Wang et al., Voyager. https://arxiv.org/abs/2305.16291
[^11]: OpenAI, Function Calling. https://openai.com/index/function-calling-and-other-api-updates/
[^12]: Zhou et al., WebArena. https://arxiv.org/abs/2307.13854
[^13]: Hong et al., MetaGPT. https://arxiv.org/abs/2308.00352
[^14]: Liu et al., AgentBench. https://arxiv.org/abs/2308.03688
[^15]: Microsoft Research, AutoGen. https://www.microsoft.com/en-us/research/project/autogen/
[^16]: OpenAI DevDay. https://openai.com/index/new-models-and-developer-products-announced-at-devday/
[^17]: Mialon et al., GAIA. https://arxiv.org/abs/2311.12983
[^18]: Cognition, Devin. https://cognition.ai/blog/introducing-devin
[^19]: Xie et al., OSWorld. https://arxiv.org/abs/2404.07972
[^20]: Yang et al., SWE-agent. https://arxiv.org/abs/2405.15793
[^21]: OpenHands. https://www.openhands.dev/blog/introducing-all-hands-ai
[^22]: Salesforce, Agentforce. https://www.salesforce.com/news/press-releases/2024/09/12/agentforce-announcement/
[^23]: Microsoft, autonomous agents. https://blogs.microsoft.com/blog/2024/10/21/new-autonomous-agents-scale-your-team-like-never-before/
[^24]: Anthropic, Computer Use. https://www.anthropic.com/news/3-5-models-and-computer-use
[^25]: Anthropic, MCP. https://www.anthropic.com/news/model-context-protocol
[^26]: AWS, Bedrock multi-agent preview. https://aws.amazon.com/blogs/aws/introducing-multi-agent-collaboration-capability-for-amazon-bedrock/
[^27]: TheAgentCompany. https://arxiv.org/abs/2412.14161
[^28]: OpenAI, Operator / CUA. https://openai.com/index/introducing-operator/
[^29]: OpenAI, Deep Research. https://openai.com/index/deep-research/
[^30]: GitHub, Copilot Agent Mode. https://github.blog/news-insights/product-news/github-copilot-the-agent-awakens/
[^31]: Anthropic, Claude Code. https://www.anthropic.com/news/claude-3-7-sonnet
[^32]: AWS, Bedrock multi-agent GA. https://aws.amazon.com/about-aws/whats-new/2025/03/amazon-bedrock-multi-agent-collaboration/
[^33]: OpenAI, Responses API / Agents SDK. https://openai.com/index/new-tools-for-building-agents/
[^34]: Google, A2A. https://developers.googleblog.com/en/a2a-a-new-era-of-agent-interoperability/
[^35]: Google, ADK. https://developers.googleblog.com/agent-development-kit-easy-to-build-multi-agent-applications/
[^36]: OpenAI, Codex. https://openai.com/index/introducing-codex/
[^37]: Terminal-Bench. https://www.tbench.ai/news/announcement
[^38]: OpenAI, Responses API updates. https://openai.com/index/new-tools-and-features-in-the-responses-api/
[^39]: Linux Foundation, A2A project. https://www.linuxfoundation.org/press/linux-foundation-launches-the-agent2agent-protocol-project-to-enable-secure-intelligent-communication-between-ai-agents
[^40]: OpenAI, ChatGPT agent. https://openai.com/index/introducing-chatgpt-agent/
[^41]: Linux Foundation, AAIF. https://www.linuxfoundation.org/press/linux-foundation-announces-the-formation-of-the-agentic-ai-foundation
[^42]: MCP Blog, MCP Apps. https://blog.modelcontextprotocol.io/posts/2026-01-26-mcp-apps/
[^43]: GitHub, Agents tab. https://github.blog/changelog/2026-01-26-introducing-the-agents-tab-in-your-repository/
[^44]: Moonshot AI, Kimi K2.5. https://www.kimi.com/en/blog/kimi-k2-5
[^45]: OpenAI, Codex App. https://openai.com/index/introducing-the-codex-app/
[^46]: Linux Foundation, x402 Foundation. https://www.linuxfoundation.org/press/linux-foundation-is-launching-the-x402-foundation-and-welcoming-the-contribution-of-the-x402-protocol
[^47]: Linux Foundation, A2A one-year update. https://www.linuxfoundation.org/press/a2a-protocol-surpasses-150-organizations-lands-in-major-cloud-platforms-and-sees-enterprise-production-use-in-first-year
[^48]: OpenAI, Agents SDK evolution. https://openai.com/index/the-next-evolution-of-the-agents-sdk/
[^49]: Kimi Help Center, Agent Swarm. https://www.kimi.com/en/help/agent/agent-swarm
[^50]: Linux Foundation, x402 operational launch. https://www.linuxfoundation.org/press/linux-foundation-announces-operational-launch-of-x402-foundation-to-standardize-internet-native-payments-for-ai-agents-and-applications
[^51]: MCP Blog, 2026-07-28 spec. https://blog.modelcontextprotocol.io/posts/2026-07-28/
[^52]: GitHub, Copilot automations comments trigger. https://github.blog/changelog/2026-08-03-trigger-copilot-automations-with-comments/
[^53]: Reuters, Anthropic MHS. https://www.reuters.com/technology/anthropic-unveils-new-framework-allowing-ai-agents-operate-physical-devices-2026-08-27/
[^54]: Z.ai, AutoGLM history / Phone Use. https://www.zhipuai.cn/zh/research/145
[^55]: ByteDance Seed1.8. https://seed.bytedance.com/zh/blog/official-release-of-seed1-8-a-generalized-agentic-model
[^56]: Alibaba Group, Wukong. https://www.alibabagroup.com/en-US/document-1971078136456019968
[^57]: Coze 3.0. https://docs.coze.cn/cozespace_coze_app_faq
[^58]: Tencent Cloud ADP commercialization. https://cloud.tencent.com/announce/detail/2331
[^59]: Alibaba Cloud Managed Agents billing. https://help.aliyun.com/zh/model-studio/managed-agents-billing
[^60]: Dify, A New Chapter for Dify Agent. https://dify.ai/zh/blog/a-new-chapter-for-dify-agent
[^61]: Tencent WorkBuddy release notes, first public version record 2026-03-04. https://cloud.tencent.com/document/product/1831/134324
[^62]: Tencent, QClaw international beta, 2026-04-21. https://www.tencent.com/zh-cn/%E8%85%BE%E8%AE%AF%E6%8E%A8%E5%87%BAqclaw%E6%B5%B7%E5%A4%96%E7%89%88%EF%BC%8C%E9%99%8D%E4%BD%8Eai%E6%99%BA%E8%83%BD%E4%BD%93%E9%83%A8%E7%BD%B2%E9%97%A8%E6%A7%9B/
[^63]: Tencent, ima copilot. https://cloud.tencent.com/developer/techpedia/2613/20569
[^64]: Tencent, personal productivity Agent suite. https://www.tencent.com/zh-cn/tencent-cloud-debuts-productivity-agent-suite-creating-a-new-gateway-to-ai-for-users-and-enterprises/
[^65]: OpenClaw official lore — Clawd born Nov 25, 2025. https://docs.openclaw.ai/lore
[^66]: Peter Steinberger, “Introducing OpenClaw”, 2026-01-29. https://github.com/openclaw/openclaw.ai/blob/main/src/content/blog/introducing-openclaw.md
[^67]: Tencent Cloud Techpedia, WorkBuddy public/formal launch record, 2026-03-09. https://cloud.tencent.com/developer/techpedia/2610
[^68]: Reuters, “As OpenClaw enthusiasm grips China, schoolkids and retirees alike raise ‘lobsters’”, 2026-03-19. https://www.reuters.com/technology/openclaw-enthusiasm-grips-china-schoolkids-retirees-alike-raise-lobsters-2026-03-19/
