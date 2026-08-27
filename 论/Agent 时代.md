# Agent 时代：当行动权成为新的 Scaling 维度

> 大模型从聊天走向 Agent，最容易被误解成“模型越来越像人”。真正发生的变化更制度化：**软件系统开始把原本只属于人类操作员的行动权，一层层委托给模型。** 先是选择一个函数，再是修改文件、操作浏览器、运行命令，后来是接管整个 Issue、在后台工作数小时，最后是协调一群子 Agent。Agent 时代的核心问题因此不是“AI 有没有自主意识”，而是：**行动权怎样被授予、限制、验证、撤销和追责。**

---

## 一、从生成内容到改变状态

语言模型最初的输出没有直接外部后果。它可以写错一段文章，但不会自己把文章发出去；可以生成错误代码，但不会自己部署。

Agent 的边界在于：**模型输出开始进入执行链。**

可以把这条演化写成五级委托：

| 阶段 | 人类交给 AI 什么 | 代表形态 |
|---|---|---|
| 预测 | 下一段内容 | autocomplete / completion |
| 建议 | 一个方案或代码片段 | chat / edit |
| 操作 | 一个具体动作 | function call / computer use |
| 委派 | 一个完整任务 | coding agent / research agent |
| 编排 | 一组目标与资源 | multi-agent / swarm / scheduler |

每上升一级，人类从“逐步操作”退到“定义边界和验收结果”。

这就是 Agent 时代最真实的权力转移。

---

## 二、AutoGPT 的历史意义：它把委派过早推到最高级

AutoGPT 在 2023 年爆红，是因为它一上来就许诺第四级甚至第五级：用户只给目标，模型自行拆解、行动、反思。[^1]

它失败得也很典型：状态漂移、循环、成本失控、工具错误、没有检查点。

这不是“Agent 路线错了”，而是当时直接跳过了中间的制度建设。

后来行业几乎是倒着补课：

- Function Calling 先规范一次动作；
- sandbox 限制动作发生在哪里；
- permission / confirmation 限制哪些动作需要批准；
- tracing 记录发生了什么；
- checkpoint 允许撤回；
- state store 让任务能够恢复；
- scheduler 决定多个任务何时并行。

所以 Agent 的成熟史，本质上是**给自主性重新装上制度**。

---

## 三、Function Calling：第一次把“行动”变成有类型的权力

**2023-06-13**，OpenAI 的 Function Calling 让模型不再用自然语言假装调用工具，而是输出结构化函数和参数。[^2]

这一步的关键不是 JSON。

它第一次把 AI 的行动空间写成一个显式集合：

> 你可以调用这些函数；函数接受这些参数；其余事情你做不了。

这其实已经是一种最简单的 capability security。

人类不是告诉模型“请乖一点”，而是从系统层定义**你手里有哪些钥匙**。

Agent 安全由此从纯 prompt 问题转向权限问题。

---

## 四、Computer Use：通用行动能力带来最大权限悖论

API 的优点是精确；缺点是每个工具都必须有人先集成。

Computer Use 反过来：只要软件有人类界面，模型理论上都可以操作。Anthropic 在 **2024-10-22** 把这一能力公开测试化。[^3]

这相当于给模型一把“万能钥匙”：

- 不用等 SaaS 提供 MCP；
- 不用等旧 ERP 开 API；
- 不用为每个网页单独写适配器。

但越通用，权限越难切细。

一个能点击网页的 Agent，可能点击“下一页”，也可能点击“付款”；能控制终端，就可能运行测试，也可能删除目录。

因此 GUI / computer-use Agent 迫使行业承认：**能力接口和授权接口不能是同一个东西。**

“能做到”不意味着“应该被允许做到”。

---

## 五、为什么编程 Agent 最先成熟

从 Claude Code、Codex、Copilot coding agent 到 Cursor，软件工程成了 Agent 最早稳定商业化的知识工作之一。

不是因为编程比别的工作简单，而是因为它拥有高度机器化的验收制度：

- compiler；
- type checker；
- tests；
- lint；
- Git diff；
- CI；
- PR review；
- rollback。

换句话说，软件工程已经提前几十年建立了“如何管理会犯错的协作者”的制度。

Agent 只是成为新的协作者类型。

**2025 年以后**，coding agent 从同步 IDE 操作进入异步委派：用户给一个 Issue，Agent 在独立环境里修改、运行测试，再交回 PR。[^4]

这一步比“代码生成能力提高几个百分点”更重要，因为它改变了组织流程：

> 人类不再把每一步怎么写告诉 AI，而把**任务边界和验收标准**交给它。

---

## 六、从 Copilot 到“数字工位”

传统软件工具是被人操作的对象。

长程 Agent 更像一个**数字工位（digital workstation）**：

- 有自己的工作目录；
- 有 shell；
- 有网络或受限网络；
- 有工具和 credentials；
- 有持续状态；
- 有任务日志；
- 有可交付 artifact。

OpenAI 在 **2026-04-15** 对 Agents SDK 的更新非常典型：model-native harness、native sandbox、snapshot / rehydrate，把状态从短命 compute 中分离。[^5]

这说明 Agent 不再是“一个 API 调用多跑几轮”。

它已经需要操作系统和分布式系统才有的概念：生命周期、状态、隔离、恢复。

---

## 七、Agent 的真正单位从会话变成任务

聊天产品的基本统计单位是：

- 消息；
- token；
- 会话；
- 日活。

Agent 产品越来越关心：

- 一个 Issue 是否解决；
- 一份研究是否完成；
- 一次部署是否成功；
- 一个任务跑了多久；
- 中间失败几次；
- 花费多少 token / compute；
- 是否需要人类接管。

也就是说，产品指标从 **response quality** 转向 **task completion**。

这就是为什么 SWE-bench、Terminal-Bench、OSWorld、WebArena 一类环境式评测越来越重要：它们不只评一句答案，而评模型能否在环境中完成行动链。

但即使如此，benchmark 仍然很难覆盖企业真正关心的指标：权限违规、回滚成本、隐藏副作用、审计、任务持续稳定性。

Agent 时代最终需要的是“单位成功任务成本”，而不只是“每百万 token 价格”。

---

## 八、MCP 与 A2A：Agent 时代正在复制互联网的分层

2024—2025 年，Agent 的工具接口与协作接口开始标准化。

MCP 解决模型 / Agent 如何连接外部工具、数据与资源；A2A 解决一个 Agent 如何发现并把任务委派给另一个 Agent。[^6][^7]

到 2026 年，A2A 已进入 Linux Foundation，并获得 150+ 组织支持和主要云平台生产采用；MCP 的新规范则继续向无状态、缓存、授权、Tasks 与扩展机制推进。[^8][^9]

因此，所谓“协议战争”越来越像互联网早期各层协议最终形成栈：

- 工具层；
- Agent 通信层；
- 身份授权层；
- 调度层；
- artifact / state 层。

真正重要的不是某个协议名赢，而是**Agent 不再假设全世界都在一个进程里。**

---

## 九、多 Agent：Test-Time Compute 开始横向 Scaling

o1 时代的 test-time compute 主要意味着：给一个模型更多思考 token。

Kimi Agent Swarm、GPT-5.6 ultra 等路线则把 scaling 横向化：**不是一个 Agent 想更久，而是同时启动更多 Agent。**[^10][^11]

这和计算机历史非常相似：

1. 单线程跑快一点；
2. 多线程；
3. 多进程；
4. 分布式任务。

但并行智能也复制了并行计算的老问题：

- 子任务怎么切；
- 谁拥有哪个文件；
- 冲突怎样合并；
- 谁来判断两个 Agent 的结论矛盾；
- 预算怎样分；
- 一个坏 Agent 是否污染全局状态。

因此 multi-agent 的核心技术可能不是“更多 Agent”，而是**调度与隔离**。

---

## 十、事件驱动 Agent：从“点击运行”到组织流程

**2026-01**，GitHub Agents tab 把 coding agent sessions 变成仓库里的任务中心。[^12]

**2026-08**，Copilot automations 支持 issue / PR comment 触发云 Agent。[^13]

这意味着 Agent 可以不由用户实时发起，而由组织事件触发：

- 新 Issue → 调查；
- PR 评论 → 修改；
- CI 失败 → 诊断；
- 定时任务 → 报告；
- 数据变化 → 重新分析。

当这一机制普及，Agent 就不再是聊天窗口里的角色，而是企业流程中的**事件消费者和任务生产者**。

这比 anthropomorphic 的“AI 员工”比喻更准确：它首先像一个可被事件触发、拥有权限和队列的服务进程。

---

## 十一、人类角色不是消失，而是上移

Agent 叙事经常把终点想成“完全无人监督”。

但工程实践更像人类控制点上移：

| 旧的人类动作 | Agent 化后的控制点 |
|---|---|
| 写每一行代码 | 定义任务与验收标准 |
| 手工点击每一步 | 定义工具权限与审批规则 |
| 手工保存进度 | 定义 checkpoint / rollback |
| 手工分配子任务 | 定义调度 / agent policy |
| 阅读每个中间步骤 | 观察 traces、tests 与 artifacts |

因此 human-in-the-loop 最终可能不是“每一步点确认”，而是**human-on-the-loop**：

人类设计规则、监控异常、处理边界情况，并承担最终责任。

---

## 十二、验证带宽：Agent 时代真正稀缺的人类资源

如果 AI 的生成速度远高于人类阅读速度，传统“人类最终审一遍”会成为瓶颈。

这在 coding agent 上已经很明显：Agent 一次修改数百文件，人不可能逐字符重做一次工作。

所以可扩展的监督必须依赖机器可验证结构：

- tests；
- schema；
- static analysis；
- policy engine；
- budget limit；
- diff summaries；
- provenance；
- deterministic checks；
- isolated rollout / canary。

Agent 越强，人类越需要从“检查内容”转向“设计检查系统”。

这也意味着一个反直觉事实：

> **Agent 最重要的基础设施之一，不是生成，而是验证。**

---

## 十三、Agent 经济学：便宜模型不一定便宜任务

Agent 一项任务可能调用模型几十次甚至几千次，还包括：

- 搜索；
- 浏览器；
- sandbox compute；
- code execution；
- storage；
- cache；
- 子 Agent；
- retry。

因此比较 Agent 时，“这个模型 $0.20 / 1M token”只是成本函数的一项。

真正的经济指标是：

> **Cost per successful completed task**

一个贵 5 倍、但一次成功率高很多、工具调用更少的模型，可能最终更便宜。

这也是 2026 年模型厂商同时做 Flash / Pro、reasoning effort、峰谷价、cache price 的原因之一：Agent 负载使模型价格进入系统工程，而不再是简单价目表。

> 📖 详见《论·价格战》《论·推理经济学》。

---

## 十四、Agent 时代并没有抹掉模型差异

曾经有人认为：Agent 框架做好后，底层模型可以随便换。

事实并没有这么简单。

模型差异会放大到行动链：

- 工具选择错误率；
- 长程状态保持；
- 对失败输出的理解；
- computer use 精度；
- 代码修改质量；
- 是否会在困难任务中过早放弃；
- 对 prompt injection 的抵抗；
- 多 Agent 协调能力。

一个单轮只差几个百分点的能力差距，经过几十步链式执行可能变成巨大的任务完成率差距。

所以 Agent 时代不是“模型不重要了”，而是**模型能力被系统结构放大或压缩**。

---

## 十五、评曰：Agent 的历史，是授权制度的历史

把 Agent 说成“会自己做事的 AI”没有错，但太粗。

更精确地看，它是一段行动权不断从人类界面迁移到机器运行时的历史。

Function Calling 授予的是一把钥匙；Computer Use 授予的是一间房；coding agent 授予的是一个任务；persistent sandbox 授予的是持续工作时间；multi-agent system 授予的是调度其他执行者的权力。

每多授予一层权力，系统就必须多发明一层制度：权限、隔离、日志、checkpoint、回滚、预算、身份、协议与验收。

所以真正成熟的 Agent 并不是“完全没人管”。

它更像现代组织中的专业岗位：被授权在特定范围内自主行动，但所有行动都发生在制度、资源和责任边界内。

这也是为什么 2026 年 Agent 最值得记录的进步，不再只是 benchmark 又涨了多少，而是无状态协议、持久状态、sandbox、A2A、MCP、Agents tab、automations 和 swarm scheduler。

模型学会了行动之后，行业真正开始学习的，是**怎样治理行动。**

如果把 2023—2026 压缩成一句话：

> **Agent 时代不是 AI 成为人，而是智能第一次被纳入软件世界的授权、执行与责任体系。**

---

*本篇原由终末地工业史官团队编纂。*  
*2026-08 重订：GPT-5.6 Sol（OpenAI）。*

---

[^1]: Significant Gravitas, AutoGPT repository. https://github.com/Significant-Gravitas/AutoGPT
[^2]: OpenAI, “Function calling and other API updates”, 2023-06-13. https://openai.com/index/function-calling-and-other-api-updates/
[^3]: Anthropic, “Introducing computer use…”, 2024-10-22. https://www.anthropic.com/news/3-5-models-and-computer-use
[^4]: OpenAI, “Introducing Codex”, 2025-05-16. https://openai.com/index/introducing-codex/
[^5]: OpenAI, “The next evolution of the Agents SDK”, 2026-04-15. https://openai.com/index/the-next-evolution-of-the-agents-sdk/
[^6]: Anthropic, “Model Context Protocol”. https://www.anthropic.com/news/model-context-protocol
[^7]: Google Developers Blog, “A2A: A new era of agent interoperability”. https://developers.googleblog.com/en/a2a-a-new-era-of-agent-interoperability/
[^8]: Linux Foundation, “A2A Protocol Surpasses 150 Organizations…”, 2026-04-09. https://www.linuxfoundation.org/press/a2a-protocol-surpasses-150-organizations-lands-in-major-cloud-platforms-and-sees-enterprise-production-use-in-first-year
[^9]: Model Context Protocol, “The 2026-07-28 Specification”. https://blog.modelcontextprotocol.io/posts/2026-07-28/
[^10]: Kimi Help Center, “Agent Swarm”. https://www.kimi.com/en/help/agent/agent-swarm
[^11]: OpenAI, “GPT-5.6”. https://openai.com/index/gpt-5-6/
[^12]: GitHub Changelog, “Introducing the Agents tab in your repository”, 2026-01-26. https://github.blog/changelog/2026-01-26-introducing-the-agents-tab-in-your-repository/
[^13]: GitHub Changelog, “Trigger Copilot automations with comments”, 2026-08-03. https://github.blog/changelog/2026-08-03-trigger-copilot-automations-with-comments/
