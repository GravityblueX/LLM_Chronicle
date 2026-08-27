# 《AI 产品化演进》

> 大模型产品形态的演化，不是聊天框被下一种 UI 简单替代。从 API 到聊天、Artifacts、IDE、Agent、Work、Cowork、多 Agent command center，再到事件触发 automations，每一代都把人与模型之间的“操作距离”再缩短一点。到 2026 年，聊天框仍然存在，却越来越像**控制面**：人负责表达目标、设权限和验收；真正的工作发生在后台 sandbox、浏览器、代码仓库、文件系统和多个 Agent 之间。

---

## 一、产品化的真正主线：用户离“结果”越来越近

可以把大模型产品史写成六个阶段：

| 阶段 | 用户主要做什么 | AI 主要做什么 |
|---|---|---|
| API | 开发者写调用代码 | 返回能力 |
| Chat | 用户描述问题 | 返回答案 |
| Artifact / IDE | 用户描述修改 | 直接产出可编辑对象 |
| Agent | 用户给任务 | 自己调用工具执行 |
| Workspace | 用户给项目 | 在持久环境里长期工作 |
| Multi-agent / Automation | 用户给目标 / 规则 | 多任务并行、事件触发、后台持续执行 |

它们并不互相淘汰，而是层层叠加。

---

## 二、2020—2022：API——模型作为“远程函数”

GPT-3 API 把一个巨型模型包装成开发者可以通过网络调用的服务。[^1]

这是大模型第一次成为通用产品原语：创业公司不需要训练模型，只需要：

- prompt；
- API key；
- 自己的 UI / workflow。

Jasper、Copy.ai 等第一波生成式 AI 产品本质上都是“把通用模型包成一个垂直表单”。

API 的历史意义是降低**开发门槛**；它并没有直接降低终端用户门槛。

Codex / Copilot 则展示了更强的路径：不是让用户去一个新网站“使用 AI”，而把 AI 嵌进原有编辑器。[^2]

这条“嵌入已有工作流”路线后来会反复胜出。

---

## 三、2022—2023：ChatGPT——聊天框成为通用 UI

ChatGPT 把大模型从开发者组件变成所有人都能直接使用的产品。[^3]

聊天框的伟大之处是没有学习成本：

> 你已经会说话 / 打字，所以你已经会用它。

多轮对话又让 prompt 从“精心写一句 API 输入”变成渐进协作：用户可以补充、纠正、追问。

聊天框由此成为大模型时代的默认 UI。

但它也带来一个结构性错觉：

> **所有工作都被压成一串消息。**

文档、代码、表格、网页、图像都必须先变成聊天输入 / 输出，再由用户复制回真正工作的地方。

聊天框让 AI 可用，却把“说”和“做”分开。

---

## 四、2024：Artifacts / IDE——产物从消息里分离

Claude Artifacts 把代码、文档、网页等结果放到独立工作区，而不是继续塞在聊天记录里。[^4]

Cursor、Copilot、IDE 内 AI 也做了同样的结构变化：

- 聊天负责意图；
- 文件 / 编辑器负责真实产物。

这一步的重要性在于**artifact 获得独立生命周期**。

一篇文档不应该只是第 43 条 assistant message；一段代码也不应该只存在于 markdown fence。

产品开始承认：

> 人与 AI 的共同工作对象需要能保存、编辑、运行、diff 和再次引用。

这为后来的 Agent 奠定了产品结构。

---

## 五、2024—2025：Computer Use——AI 适配旧软件，而不是旧软件适配 AI

Function Calling / MCP 的理想世界是每个服务都有结构化接口。

现实世界大量软件只有 GUI。

Claude Computer Use 等能力让模型直接看屏幕、点击、输入。[^5]

它的产品意义非常大：

- 旧 ERP 不必先重写 API；
- 网站不必主动支持 AI；
- 模型理论上可以使用人类能使用的大量软件。

但 GUI 同时是最脆弱的控制面：按钮移动、弹窗、验证码、prompt injection 都可能让任务失败。

于是“通用操作能力”与“可靠结构化工具”两条路线长期并存。

---

## 六、2025：Agent——产品从“回答”变成“任务委托”

coding agents、browser agents、research agents 等产品开始接受完整目标，而不是一步 prompt。

用户的典型输入变成：

> “修这个 Issue。”
>
> “研究这个市场，给我一份报告。”
>
> “把这些文件整理并做成结果。”

Agent 自己：

- 规划；
- 选择工具；
- 执行；
- 读取反馈；
- 重试；
- 交付 artifact。

产品的核心对象由**对话**转为**任务**。

OpenAI Responses API / Agents SDK、Claude Code、GitHub coding agent 都属于这次变化。[^6][^7]

---

## 七、2025—2026：从 Agent 到 Workspace——任务需要“住的地方”

短任务可以活在聊天会话里；长任务需要文件、状态、工具、日志和恢复。

所以 2026 年产品开始明显出现 workspace / workbench 形态。

### Claude Cowork

Claude 的桌面 / 工作型 Agent 把文件和专业任务从 terminal coding 扩展到一般知识工作。

### ChatGPT Work

**2026-07-09**，OpenAI 推出 ChatGPT Work，把连接的数据 / 文件、长程 Agent 与文档、表格、演示等 artifact 工作放进持续 workspace。[^8]

### Codex App

**2026-02-02**，Codex App 被定义为 **command center for agents**：并行 Agent、独立 thread、worktree、Skills、Automations。[^9]

这里的 UI 已经不是“一个 AI 对一个人”，而更像任务管理器。

---

## 八、Multi-agent：界面开始服务于“监督很多工作”

单 Agent 的产品界面通常围绕：

- 一条对话；
- 一个任务；
- 一份执行日志。

多 Agent 需要不同 UI：

- task list；
- status；
- ownership；
- parallel threads；
- diff / artifact preview；
- budget；
- conflict resolution。

Kimi Agent Swarm、GPT-5.6 ultra、Codex App 都把“同时有很多 Agent”从架构问题变成产品问题。[^10][^11]

人类角色因此从“和 AI 聊天”变成：

> **分配、观察、插手、验收。**

这是 AI 产品 UI 的又一次根本变化。

---

## 九、2026：Agents tab——Agent 变成领域对象，而不是聊天功能

GitHub **Agents tab**是一个非常好的产品史信号。[^12]

在代码仓库里，Agent session 与 Issues、Pull Requests 并列存在。

这表示 GitHub 不再把 Agent 当“Copilot Chat 的一个按钮”，而把它当作需要：

- 独立创建；
- 持续追踪；
- 关联 PR；
- 恢复；
- 管理

的一等工作对象。

未来其他领域也可能出现同样结构：

- CRM 里的 agent run；
- 财务系统里的 reconciliation task；
- 法律系统里的 research run；
- 医疗系统里的 review task。

Agent 会像“工单”一样成为软件里的原生对象。

---

## 十、Automations：聊天框开始退出触发链

**2026-08**，GitHub Copilot automations 可以由 issue / PR comment 触发 Agent。[^13]

Codex App 同样把 scheduled / background automation 作为产品方向。[^9]

这意味着用户甚至不需要每次打开聊天框。

产品触发方式变成：

- 时间；
- webhook / event；
- 文件变化；
- Issue / PR；
- 数据条件。

AI 从“你问我答”进入**ambient / event-driven computing**。

这可能是聊天框之后最深的一步，因为它改变了“什么时候 AI 存在”：

> 不是用户召唤它时才存在，而是工作流需要时自动运行。

---

## 十一、本地常驻：Muse Glimmer 展示另一条产品路线

云 Agent 越来越持久，也让隐私、网络依赖和费用更突出。

Meta **Muse Glimmer**把 always-on local agent 作为明确目标：30B、消费级 GPU、本地文件 / tools / memory。[^14]

这产生另一种产品形态：

> AI 不是一个网站，也不是一个 SaaS workspace，而是设备里的常驻进程。

本地 Agent 可能更适合：

- 私人文件；
- 离线环境；
- 高频小任务；
- 低延迟设备控制。

所以未来 AI 产品很可能同时存在：

- 云端前沿“大脑”；
- 本地常驻“反射层”。

---

## 十二、Artifact 比 Conversation 更重要

聊天产品天然优化“回答看起来好不好”。

工作产品必须优化**产物是否能继续使用**。

2026 年越来越多 AI 产品的终点是：

- PR；
- spreadsheet；
- slide deck；
- document；
- dashboard；
- code branch；
- structured record。

这意味着产品质量指标也变化：

- artifact 是否正确；
- 是否可编辑；
- 是否符合 schema / template；
- 是否带 provenance；
- 是否能进入下游工作流。

Agent 的回复文字可能只是过程说明，真正产品价值在 artifact。

---

## 十三、聊天框不会消失，它会成为控制面

自然语言仍然是最灵活的意图输入。

所以聊天框不会像命令行那样被彻底淘汰。

但它的地位可能改变：

### 2022

聊天框 = 工作发生的地方。

### 2026

聊天框 = **启动、解释、纠偏和接管工作的控制面。**

后台真实工作发生在：

- sandbox；
- browser；
- repo；
- connected apps；
- subagents。

这比“聊天框之后是什么 UI”更准确：

> 下一代不是一个新 UI 替换聊天，而是工作从 UI 里迁移到 Agent runtime。

---

## 十四、产品护城河从模型前端转向工作流基础设施

2023 年很多产品只是“某模型的聊天壳”。模型一升级，前端差异立即被抹平。

2026 年更难复制的部分是：

- connectors；
- permissions；
- durable state；
- artifact system；
- sandbox；
- enterprise audit；
- multi-agent scheduler；
- domain workflow；
- user / org memory。

因此“模型能力趋同会让所有 AI 产品同质化”并不成立。

模型越像基础设施，产品差异越向**上下文、工具与工作流**迁移。

---

## 十五、产品失败的新形态

Chatbot 失败通常是“回答错了”。

Agent 产品失败可能是：

- 改错文件；
- 发错消息；
- 越权读取；
- 重复执行；
- 消耗过多预算；
- 自动化循环；
- 状态恢复错误；
- 多 Agent 互相覆盖。

所以 AI 产品设计必须加入传统聊天产品没有的：

- permissions；
- transaction boundary；
- checkpoint；
- undo；
- audit log；
- dry run；
- human approval。

产品化越深入，安全越像传统软件工程，而不是一句“AI safety”。

---

## 十六、事实脉络

| 时间 | 产品形态节点 | 代表意义 |
|---|---|---|
| 2020 | GPT-3 API | 模型成为开发者能力原语 |
| 2021 | GitHub Copilot | AI 嵌进已有工作流 |
| 2022-11 | ChatGPT | 聊天成为大众 AI UI |
| 2024-06 | Claude Artifacts | artifact 从聊天消息分离 |
| 2024-10 | Computer Use | AI 直接操作旧软件 GUI |
| 2025 | coding / browser agents | 完整任务委托 |
| 2025-03 | Agents SDK / Responses | Agent runtime 产品化 |
| 2026-01 | GitHub Agents tab | Agent run 成为领域对象 |
| 2026-02 | Codex App | 多 Agent command center |
| 2026-04 | durable sandbox / state | 长程 Agent 运行环境成熟 |
| 2026-07 | ChatGPT Work | 通用知识工作 workspace |
| 2026-08 | Agent automations | 事件驱动 / 后台 Agent |
| 2026-08 | Muse Glimmer | 本地 always-on Agent |

---

## 评曰

大模型产品史一直在缩短“用户的意图”和“可交付结果”之间的距离。

API 要开发者写程序；聊天框让普通人直接描述；Artifacts 让结果成为真正对象；Agent 让用户不再逐步操作；Workspace 给 Agent 一个能长期工作的地方；Multi-agent UI 让一个人同时监督许多任务；Automation 最后甚至拿掉了“手工启动”这一步。

因此，产品演进并不是 AI 越来越像一个聊天伙伴。

恰恰相反，它越来越**不像聊天产品**。

聊天只是人类表达意图最方便的入口；真正的 AI 产品正在变成一套后台工作系统。

这也重新定义了“好产品”：

过去是回答自然、界面漂亮；现在还必须状态可恢复、权限可控制、artifact 可交付、任务可审计。

所以 2026 年最值得记住的产品变化，不是哪个聊天框又多了一个按钮，而是：

> **AI 从一个需要人持续操作的应用，逐渐变成可以被授权、被调度、被监督的运行时。**

人机交互没有消失。

它从“操作每一步”上移到了“定义目标与制度”。

---

*本篇原由终末地工业史官团队编纂。*  
*2026-08 重订：GPT-5.6 Sol（OpenAI）。*

---

[^1]: OpenAI API, 2020. https://openai.com/blog/openai-api
[^2]: GitHub, Introducing GitHub Copilot. https://github.blog/2021-06-29-introducing-github-copilot-ai-pair-programmer/
[^3]: OpenAI, ChatGPT. https://openai.com/index/chatgpt/
[^4]: Anthropic, Claude 3.5 Sonnet / Artifacts. https://www.anthropic.com/news/claude-3-5-sonnet
[^5]: Anthropic, Computer Use. https://www.anthropic.com/news/3-5-models-and-computer-use
[^6]: OpenAI, New tools for building agents. https://openai.com/index/new-tools-for-building-agents/
[^7]: GitHub, Copilot coding agent. https://github.blog/changelog/2025-05-19-github-copilot-coding-agent-in-public-preview/
[^8]: OpenAI ChatGPT release notes, 2026-07-09 / ChatGPT Work. https://help.openai.com/en/articles/6825453-chatgpt-release-notes-whats-new
[^9]: OpenAI, Codex App. https://openai.com/index/introducing-the-codex-app/
[^10]: Kimi Help Center, Agent Swarm. https://www.kimi.com/en/help/agent/agent-swarm
[^11]: OpenAI, GPT-5.6. https://openai.com/index/gpt-5-6/
[^12]: GitHub Changelog, Agents tab. https://github.blog/changelog/2026-01-26-introducing-the-agents-tab-in-your-repository/
[^13]: GitHub Changelog, Copilot automations. https://github.blog/changelog/2026-08-03-trigger-copilot-automations-with-comments/
[^14]: Meta AI Research, Muse Glimmer. https://research.meta.ai/blog/introducing-muse-glimmer-open-agentic-model
