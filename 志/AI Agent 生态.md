# 《AI Agent 生态》

> AI Agent 的历史不是“模型终于变成了人”。它更像一套软件系统逐层长出手脚：先学会结构化调用函数，再获得浏览器、终端和桌面；随后出现沙箱、持久状态、检查点、观测日志、子 Agent 与跨厂商协议。到 2026 年，真正决定 Agent 能否进入生产环境的，已经不是模型会不会规划，而是**执行环境能否隔离、状态能否恢复、权限能否限制、任务能否审计、多个 Agent 能否互相协作**。

---

## 一、从“回答”到“行动”

ChatGPT 时代最初的交互单位是一轮对话：输入文本，得到文本。Agent 改变的是系统边界——模型不再只是生成答案，而开始选择工具、改变外部状态，并根据执行结果继续决策。

这条路线可以分成五个阶段：

1. **概念验证（2023）**：AutoGPT / BabyAGI 证明市场强烈需要“AI 替我做事”，也证明纯提示词循环极不可靠；
2. **工具基础设施（2023—2024）**：Function Calling、Assistants、tool use、Computer Use 把行动拆成结构化接口；
3. **工作环境 Agent（2024—2025）**：Devin、Claude Code、Cursor/Copilot agent mode 进入代码库、终端、浏览器和桌面；
4. **协议与生产化（2025）**：MCP、A2A、Agents SDK、Responses API 把连接、编排、guardrail 与 tracing 标准化；
5. **持久化、多 Agent 与调度（2026）**：sandbox、checkpoint、resume、subagents、Agent Swarm、Agents tab、automations 和长程任务成为主线。

贯穿五个阶段的矛盾始终没变：**行动权越大，错误的外部后果越大。**

---

## 二、2023：AutoGPT 证明“想要 Agent”，也证明“不能只靠循环”

**2023-03-23**，OpenAI 发布 ChatGPT Plugins，让模型能够调用外部服务。[^1]

**2023-03-30**，AutoGPT 把这个方向推到极端：给 GPT-4 一个目标，让它自己规划、行动、观察、再规划。[^2] BabyAGI、LangChain agents 等项目随后快速扩散。

这一代 Agent 的失败模式后来几乎成为教科书：

- 无限循环与目标漂移；
- 工具参数幻觉；
- token 成本失控；
- 没有可靠状态机；
- 错误后无法回滚；
- “反思”往往只是继续生成更多文本。

AutoGPT 的历史贡献不在于它最终成为生产框架，而在于它把问题暴露得足够清楚：**聪明模型不等于可靠执行系统。**

---

## 三、2023—2024：工具调用从 prompt hack 变成协议

**2023-06-13**，OpenAI 发布 Function Calling。模型可以输出结构化函数名与参数，而不是依靠自然语言约定。[^3]

**2023-11-06**，Assistants API 把代码执行、检索、文件和 function calling 放进更完整的运行环境。[^4]

Anthropic、Google 随后把 tool use / function calling 变成前沿模型的基础能力。到这个阶段，Agent 的“手”逐渐可靠，瓶颈开始上移到规划、状态与恢复。

**2024-10-22**，Claude Computer Use 又把行动面扩展到 GUI：模型能够看截图、移动鼠标、输入文本。[^5]

GUI 的意义是覆盖没有 API 的旧系统；代价是脆弱。按钮位置、弹窗、窗口大小、网页变化都可能让一步错误扩散成整个任务失败。

这由此形成了 Agent 工程里一个长期张力：

> **专用接口更可靠，通用接口覆盖更广。**

后来的 MCP、浏览器工具和 computer-use model，本质上都在重新寻找两者之间的平衡。

---

## 四、2024—2025：软件工程成为 Agent 的最佳试验场

Devin、Cursor、Claude Code、GitHub Copilot coding agent 等产品让 Agent 首先在软件工程里真正站稳脚跟。

原因并不神秘。软件工程天然提供机器可读反馈：

- 文件 diff；
- 编译器错误；
- 单元测试；
- lint / typecheck；
- Git 历史；
- CI；
- Pull Request 审查。

也就是说，代码不是因为“程序员最容易被替代”，而是因为它是少数**Agent 做完以后，世界会自动告诉它哪里错了**的知识工作。

**2025 年**，coding agent 的交互进一步从“人在 IDE 里看着它”变成“把 Issue 委派出去，Agent 在独立环境工作，回来交一个 PR”。这一步把 Agent 从同步协作工具推向异步工作者。

> 📖 详见《Codex / GitHub Copilot 列传》与《志·AI 编程助手》。

---

## 五、MCP 与 A2A：2025 年看似协议竞争，2026 年变成分层互补

### 5.1 MCP：Agent 如何接工具、数据和交互面

**2024-11-25**，Anthropic 发布 Model Context Protocol（MCP）。[^6]

MCP 的核心不是让模型“更聪明”，而是把工具连接从每个应用自己的私有适配层，抽象成客户端 / Server 协议。

到 2026 年，MCP 已不再只是 Claude 生态里的一个接口。**2026-07-28** 规范把协议核心改造成无状态 request/response 模型，加入 Multi Round-Trip Requests、header routing、可缓存工具列表、扩展框架、Tasks 与更严格的授权机制。官方称 Tier 1 SDK 月下载量已接近 5 亿，TypeScript 和 Python SDK 累计下载均跨过 10 亿。[^7]

这里最重要的变化是“无状态核心”。早期 Agent demo 可以把状态塞在一个进程里；生产系统需要普通负载均衡、网关、缓存、权限控制和故障恢复。MCP 的演进，恰好记录了 Agent 从开发者玩具变成基础设施后所面对的问题。

### 5.2 A2A：Agent 如何把任务交给另一个 Agent

Google 在 **2025-04-09** 发布 A2A（Agent2Agent）协议；同年 6 月项目进入 Linux Foundation。[^8][^9]

到 **2026-04-09**，Linux Foundation 宣布 A2A 已有 150 多个组织支持，并进入 Google、Microsoft、AWS 等主要云平台和企业生产场景。[^10]

因此，把 MCP 与 A2A 写成“谁会赢”的竞争，到 2026 年已经不准确。

更合适的理解是：

| 层 | 主要问题 | 代表协议 |
|---|---|---|
| Agent ↔ 工具 / 数据 / UI | 我能调用什么、如何授权和发现？ | MCP |
| Agent ↔ Agent | 我能把什么任务委派给谁、如何交换产出？ | A2A |

它们可能重叠，但并不天然冲突。Agent 可以通过 MCP 使用工具，再通过 A2A 把子任务交给别的 Agent。

协议战争正在变成**协议栈**。

---

## 六、2025—2026：Agent harness 成为真正的产品层

“有一个强模型 + 有几个工具”已经不足以定义 Agent。

**2025-03**，OpenAI 发布 Responses API 与 Agents SDK，将 handoff、guardrail、tracing、内置工具和多 Agent 编排做成标准组件。[^11]

**2026-04-15**，OpenAI 又把 Agents SDK 推进到 model-native harness + native sandbox：Agent 可以检查文件、运行命令、编辑代码，并在隔离环境里执行长程任务。更关键的是，状态可以外置，sandbox 丢失后可以 snapshot / rehydrate，从检查点继续。[^12]

这代表一种重要的架构分离：

- **harness**：保存目标、状态、权限、策略、工具目录和执行逻辑；
- **sandbox / compute**：真正运行模型生成的代码和命令；
- **credentials**：尽量留在 sandbox 之外；
- **state**：尽量不与某个短命容器绑定。

Agent 工程开始像分布式系统，而不是提示词工程。

这也是 2026 年“长程 Agent”真正能跑起来的原因之一：任务持续时间第一次与某一个聊天会话、某一个容器的生命周期解耦。

---

## 七、2026：从一个 Agent 到许多个 Agent

### 7.1 Kimi Agent Swarm：横向扩展执行主体

Kimi K2.5 开始把复杂任务拆给多个子 Agent；到 K2.6，官方文档描述的 Swarm 可以在单任务中协调数百个子 Agent 与数千次工具调用。[^13]

它改变了 test-time scaling 的含义。过去增加推理预算，主要是让**同一个模型思考更久**；Swarm 则让系统**同时启动更多执行主体**。

### 7.2 GPT-5.6 ultra：多 Agent 成为旗舰能力设置

GPT-5.6 Sol 的 `ultra` 被 OpenAI 描述为可协调多个 Agent 并行推进复杂工作流；Responses API 也提供 multi-agent beta。[^14]

### 7.3 GitHub Agents tab 与 Automations：Agent 变成工作队列

**2026-01-26**，GitHub 把 coding agent sessions 集中到仓库内的 **Agents tab**，像 mission control 一样管理任务与 PR。[^15]

**2026-08-03**，Copilot automations 又支持由 issue / PR comment 触发云 Agent：生成文档、调查错误、创建后续任务。[^16]

这一步非常重要。Agent 不再必须由人类点一下“开始”。它可以被仓库事件、评论和自动化规则触发。

于是 Agent 从聊天产品变成**事件驱动执行单元**。

---

## 八、Agent 的可靠性问题也换了形状

2023 年的典型失败是“模型想错了”。2026 年的失败面已经扩大：

### 8.1 Prompt injection

Agent 会读取网页、Issue、文档和邮件。外部内容因此可能包含针对模型的恶意指令。安全边界不能只靠 system prompt，而必须靠权限隔离、工具 allowlist、数据 / 指令分离和外部 policy。

### 8.2 Credential exfiltration

当模型能运行命令时，最危险的资产往往不是文本，而是 API key、SSH key、cloud credential。现代 Agent harness 越来越强调把凭据留在执行 sandbox 外。[^12]

### 8.3 长程漂移

一个五分钟任务和一个五小时任务不是同一个可靠性问题。长程任务需要：checkpoint、compaction、持久 memory、状态外置、失败恢复、预算限制。

### 8.4 多 Agent 的协调错误

并行 Agent 可以缩短时间，也会制造：重复劳动、相互覆盖、冲突修改、错误汇总和预算爆炸。

因此，多 Agent 不是“一个 Agent × N”这么简单。真正需要的是调度、隔离和仲裁。

### 8.5 人类审查带宽

Agent 的输出速度可能超过人类验证速度。代码 Agent 一次改几百个文件、研究 Agent 一次生成几十页材料后，“human in the loop”可能退化成一句口号。

这使**可验证性**比“始终盯着 Agent”更重要：测试、schema、diff、权限边界、审计日志和结构化产物，都比要求人类阅读每一步更可扩展。

---

## 九、2026 年的 Agent 技术栈

到 2026 年中，一个生产 Agent 通常已经不是“LLM + tools”，而至少包含：

| 层 | 作用 |
|---|---|
| Model | 决策、推理、多模态理解 |
| Harness | 循环、状态、恢复、handoff、预算 |
| Tool protocol | MCP / function calling / browser / computer use |
| Agent protocol | A2A / 内部 subagent protocol |
| Sandbox | 文件、shell、代码执行、网络隔离 |
| Memory / compaction | 跨长任务保存有效状态 |
| Observability | trace、tool log、token / cost、失败原因 |
| Guardrail / policy | 权限、敏感操作确认、风险分类 |
| Artifact / state store | 文档、代码、PR、表格、检查点 |
| Scheduler | 并行 Agent、事件触发、重试、队列 |

这张表本身就是 Agent 史最大的变化。

2023 年 Agent 是一个 prompt pattern；2026 年 Agent 已经是一套**应用运行时**。

---

## 十、趋势判断

### 10.1 “完全自主”不是唯一目标

生产系统真正追求的是**授权范围内的自主**。不同 Agent 可以获得不同目录、工具、网络、消费额度和审批要求。

自主性从一个百分比，变成权限系统。

### 10.2 对话框不会消失，但会退居控制面

人类仍会用自然语言下达目标；真正工作则发生在后台 sandbox、浏览器、代码仓库和多个子 Agent 之间。

聊天框从“工作发生的地方”变成“工作被发起、解释和接管的控制面”。

### 10.3 Agent 性能越来越应该按任务衡量

传统模型 benchmark 评一条回答；Agent 更适合问：

- 任务是否完成？
- 花了多久？
- 调了多少工具？
- 成本多少？
- 失败后能否恢复？
- 是否越权？
- 产物是否可验证？

Agent 时代的单位不是 token，而是 **completed work**。

---

## 评曰

AI Agent 的早期历史常被讲成一条“模型越来越自主”的直线，但实际更像一次软件工程回归。

AutoGPT 最大的问题，不是 GPT-4 不够聪明，而是它几乎没有一个真正的运行时。后来每一次进步，都在把传统计算系统几十年积累的东西重新装回去：结构化接口、状态机、权限、沙箱、日志、队列、事务式检查点、重试和协议。

这不是 Agent 理想的失败，反而是它真正开始成熟的标志。

2026 年最关键的变化也不是“AI 能自己做更多”，而是：**系统终于开始认真规定它在哪里做、能做什么、失败以后怎么办，以及谁来验证结果。**

因此，Agent 的历史不是模型从工具变成人，而是模型从一个函数变成进程、再从进程变成分布式工作系统。

如果说 2023 年的问题是“AI 能不能行动”，2026 年的问题已经变成：

> **怎样让大量会行动但不完全可靠的智能，在权限、成本和责任边界内长期共存。**

这才是 Agent 生态真正的基础设施问题。

---

*终末地工业史官团队编纂：伊冯（架构审计）。*  
*2026-08 补订：GPT-5.6 Sol（OpenAI）。*

---

> 📖 相关：《论·Agent 时代》《志·AI 编程助手》《Codex / GitHub Copilot 列传》《Kimi 列传》《GPT 世家》《Claude 世家》。

[^1]: OpenAI, “ChatGPT plugins”, 2023-03-23. https://openai.com/index/chatgpt-plugins/
[^2]: Significant Gravitas, AutoGPT repository. https://github.com/Significant-Gravitas/AutoGPT
[^3]: OpenAI, “Function calling and other API updates”, 2023-06-13. https://openai.com/index/function-calling-and-other-api-updates/
[^4]: OpenAI, “New models and developer products announced at DevDay”, 2023-11-06. https://openai.com/index/new-models-and-developer-products-announced-at-devday/
[^5]: Anthropic, “Introducing computer use, a new Claude 3.5 Sonnet, and Claude 3.5 Haiku”, 2024-10-22. https://www.anthropic.com/news/3-5-models-and-computer-use
[^6]: Anthropic, “Model Context Protocol”, 2024-11-25. https://www.anthropic.com/news/model-context-protocol
[^7]: Model Context Protocol, “The 2026-07-28 Specification”, 2026-07-28. https://blog.modelcontextprotocol.io/posts/2026-07-28/
[^8]: Google Developers Blog, “A2A: A new era of agent interoperability”, 2025-04-09. https://developers.googleblog.com/en/a2a-a-new-era-of-agent-interoperability/
[^9]: Linux Foundation, “Linux Foundation Launches the Agent2Agent Protocol Project”, 2025-06-23. https://www.linuxfoundation.org/press/linux-foundation-launches-the-agent2agent-protocol-project-to-enable-secure-intelligent-communication-between-ai-agents
[^10]: Linux Foundation, “A2A Protocol Surpasses 150 Organizations…”, 2026-04-09. https://www.linuxfoundation.org/press/a2a-protocol-surpasses-150-organizations-lands-in-major-cloud-platforms-and-sees-enterprise-production-use-in-first-year
[^11]: OpenAI, “New tools for building agents”, 2025-03-11. https://openai.com/index/new-tools-for-building-agents/
[^12]: OpenAI, “The next evolution of the Agents SDK”, 2026-04-15. https://openai.com/index/the-next-evolution-of-the-agents-sdk/
[^13]: Kimi Help Center, “Agent Swarm”. https://www.kimi.com/en/help/agent/agent-swarm
[^14]: OpenAI, “GPT-5.6: Frontier intelligence that scales with your ambition”, 2026-07-09. https://openai.com/index/gpt-5-6/
[^15]: GitHub Changelog, “Introducing the Agents tab in your repository”, 2026-01-26. https://github.blog/changelog/2026-01-26-introducing-the-agents-tab-in-your-repository/
[^16]: GitHub Changelog, “Trigger Copilot automations with comments”, 2026-08-03. https://github.blog/changelog/2026-08-03-trigger-copilot-automations-with-comments/
