# 《Agent 记忆、状态与可恢复性》

> “这个 Agent 有记忆”是 2025—2026 年最常见的产品宣传之一。但**长上下文、聊天历史、知识库、任务状态、checkpoint、个人记忆和工作目录不是同一种东西。**
>
> 一个真正长期工作的 Agent 不只需要“记得以前说过什么”，还必须知道：任务执行到哪一步、哪些动作已经真正发生、哪些结果还没提交、崩溃后从哪里恢复、错误记忆怎样更正、隐私怎样删除、多个 Agent 怎样避免把彼此状态混在一起。
>
> 所以成熟 Agent 的问题不是“能不能记”，而是三个更严格的问题：**该记什么？该忘什么？坏了以后怎样安全地继续？**

---

## 一、先拆开七种经常被统称为“记忆”的东西

| 层 | 它记录什么 | 典型用途 |
|---|---|---|
| **Context window** | 当前模型调用能看到的 token | 当前推理 |
| **Conversation history / Session** | 过去对话与 tool call | 多轮连续性 |
| **Task / execution state** | 工作流当前执行到哪一步 | resume / orchestration |
| **Workspace / filesystem** | 文件、代码、下载物、临时制品 | 持续工作环境 |
| **Checkpoint** | 某一时刻的执行状态快照 | 故障恢复 / HITL |
| **Long-term memory** | 跨 session 提炼出的偏好、事实、经验 | 个性化 / 经验复用 |
| **Knowledge base** | 组织或用户维护的外部资料 | RAG / 权威知识 |

把这七层混在一起，会产生大量误解。

例如：

> “模型支持 1M context”

只能说明它一次能够处理更多输入。

它不能自动说明：

- 下周还能记得用户偏好；
- 任务中断后能恢复；
- 错误记忆可以删除；
- 不同用户的记忆不会串；
- 已经发出的邮件不会因为重试再发一次。

---

## 二、Session memory：首先解决“下一轮还记得上一轮”

OpenAI Agents SDK 的 Sessions 是很典型的例子：session 会在多次 agent run 之间持久保存 conversation history，运行前读取旧历史，运行后把新的输入、输出与 tool events 写回。[^1][^2]

这已经比每次手工拼 prompt 稳定很多。

但 session 主要回答的是：

> **“这段会话之前发生了什么？”**

它并不自动回答：

> “什么信息值得永久记住？”

也不等于：

> “整个业务任务的副作用都可以安全重放。”

因此 SDK 文档后来明确区分：

- application-managed history；
- SDK session；
- server-side conversation；
- previous response continuation。

“有上下文”本身已经出现多种 state ownership 模式。[^3]

---

## 三、短期记忆与长期记忆不是简单“多存几条消息”

AWS AgentCore Memory 很适合说明 2026 年基础设施如何把 memory 拆层。官方区分：[^4]

### Short-term memory

保存：

- messages；
- tool calls；
- session events。

主要用于同一个 session 内的连续工作。

### Long-term memory

则从原始 interaction 中进一步提炼：

- semantic facts；
- summaries；
- user preferences；
- episodic experiences；
- custom strategies。

以后在新的 session 中再按语义检索。

这里发生了一个非常重要的变化：

> **长期记忆不是“保存全部聊天”，而是“从历史里选择什么值得留下”。**

于是 memory 本质上出现了一个**write policy**问题。

---

## 四、“记忆”首先是写入治理，而不只是检索

RAG 时代最常问：

> 怎么把正确资料检索出来？

长期 Agent 还必须问：

> **什么东西有资格被写进长期记忆？**

如果每次模型总结都自动写入 memory，可能出现：

- 用户一句临时抱怨变成永久偏好；
- 一次错误推断变成长期事实；
- 旧地址覆盖新地址；
- 某次失败经验被误学成永久规则；
- prompt injection 内容被写进 memory；
- 一个项目的秘密污染另一个项目。

因此长期 memory 至少需要：

1. **write criteria**：什么值得存；
2. **authority**：谁说的可信；
3. **namespace**：属于哪个用户 / 项目 / Agent；
4. **version / timestamp**：什么时候有效；
5. **correction**：怎样改错；
6. **deletion**：怎样真正忘掉；
7. **retention**：多久过期。

AWS 的 memory store 甚至允许配置 event expiration / retention 和加密等策略；过期事件不可恢复。[^5]

这说明“忘记”不是 bug，而是 memory system 的设计能力。

---

## 五、Knowledge Base 与 Personal Memory 必须分开

企业宣传里很容易把两者都叫“第二大脑”。

但它们的 authority 完全不同。

### Knowledge base

更像：

> **组织认定的外部事实。**

例如：

- 员工制度；
- 产品手册；
- 标准流程；
- 客户文档。

### Personal memory

更像：

> **这个用户 / Agent 的历史与偏好。**

例如：

- 用户更喜欢表格而不是长段文字；
- 上次项目做到哪里；
- 某个联系人之前怎么沟通。

如果二者混在一起，会出现奇怪的权威倒置：

> 用户随口说“报销上限可能是 5000 元”

结果 personal memory 比正式财务制度更优先。

成熟 Agent 应该明确：

> **组织知识、用户偏好、模型推断、历史事件拥有不同的信任等级。**

---

## 六、Task State：Agent “记得我是谁”不等于“知道工作做到哪了”

长期执行真正困难的是 execution state。

例如一个 Agent 要：

1. 搜集 50 家公司；
2. 去重；
3. 查价格；
4. 生成表格；
5. 发给用户。

跑到第 37 家时进程崩了。

仅靠聊天历史重新开始并不理想。

系统真正需要保存：

- 已完成哪些 company IDs；
- 哪些请求还 pending；
- 哪些结果已验证；
- 当前文件版本；
- 哪一步等待 human approval；
- 哪些 side effects 已经发生。

这就是为什么 durable workflow / graph systems 会把**执行状态**做成独立数据结构，而不是只存 conversation transcript。

---

## 七、Checkpoint：把 Agent 从“会话”变成可以暂停和恢复的进程

LangGraph 的 persistence 是典型例子：配置 checkpointer 后，graph state 会在执行步骤中持续保存 checkpoint。[^6]

这支持：

- human-in-the-loop；
- memory；
- time-travel debugging；
- fault tolerance；
- 从最后成功步骤继续。

它甚至保留 pending writes：同一个 super-step 里已经成功的节点结果可以保留，恢复时不必全部重跑。[^6]

这说明 Agent runtime 越来越像：

> **带事务语义的长程工作流系统。**

而不是：

> “一个很长的 while loop。”

---

## 八、Human-in-the-loop 为什么必须依赖持久状态

一个高风险动作经常需要暂停：

> “准备好了付款 3000 元，要不要确认？”

用户可能十分钟以后、甚至第二天才回复。

如果 Agent 状态只在内存进程里：

- 服务重启就丢；
- worker 切换就丢；
- approval 到来时上下文已经不存在。

LangChain / LangGraph 的 HITL 机制依赖 persisted state：Agent 可以在 tool call 前 interrupt，等待 approve / edit / reject，然后从原状态恢复。[^7]

OpenAI Agents SDK 同样支持把 interrupted RunState 与 session 结合，再在批准后继续执行。[^1][^2]

因此“需要用户确认”并不只是 UI 功能。

它要求 runtime 真的能**暂停一个进程并稍后继续**。

---

## 九、最危险的恢复 bug：重复副作用

恢复机制最容易被忽略的问题不是“恢复失败”，而是：

> **恢复以后把已经做过的现实动作又做一次。**

例如：

- 邮件发了两遍；
- 工单建了两次；
- 数据库重复写入；
- 支付扣款两次；
- 文件删了以后 retry 又执行第二条相关删除。

所以 Agent recovery 不能只靠“重新跑上一段 prompt”。

系统需要：

- idempotency key；
- operation ID；
- side-effect ledger；
- transaction / compensation；
- exactly-once 或至少 effectively-once 语义；
- 明确区分 **planned / executed / acknowledged**。

一个成熟 checkpoint 应知道：

> “模型想到这一步”

和：

> **“外部世界已经发生这一步”**

不是同一件事。

---

## 十、Workspace / Sandbox 状态是另一种记忆

Coding Agent、OpenClaw、Cowork、WorkBuddy 等都大量依赖 workspace。

Agent 可能不需要把所有东西写进向量数据库；它可以把：

- README；
- TODO；
- 计划；
- 临时结果；
- 下载文件；
- code diff；
- structured notes

放进 filesystem。

OpenAI 的 sandbox-agent memory 甚至把“memory”与 session history 分开：Agent 可以把提炼后的经验写进 workspace files，并有独立 retention / sensitivity policy。[^8]

这说明未来个人 Agent 的记忆很可能不是一个统一数据库，而是多层组合：

> **conversation + structured state + files + vector memory + external KB。**

---

## 十一、Compaction：上下文压缩解决 token，不自动解决真相

长任务会不断积累历史。

常见办法是：

- summary；
- compaction；
- context editing；
- 删除旧 tool outputs。

OpenAI Agents SDK 已提供 compaction session 等机制来缩短持久历史。[^1]

但 compaction 本质上会产生新的信息损失问题。

一份 100 页历史被压成 2 页摘要时，可能丢掉：

- 数字；
- 否定条件；
- exception；
- 用户临时约束；
- 某次失败的真正原因。

所以：

> **Context optimization ≠ state correctness。**

最重要的业务状态不应该只存在于模型自动总结里。

---

## 十二、记忆会“污染”，而且污染可能比一次幻觉持续得更久

一次普通 hallucination 可能随着会话结束消失。

错误 long-term memory 却可能在未来几十次任务里反复被召回。

典型污染来源：

- 模型误总结；
- 用户信息已经变化；
- 恶意网页 prompt injection；
- 错误 tool result；
- 多 Agent 互相复制错误；
- 不恰当的自动 write-back。

所以长期 Agent 需要 memory hygiene：

- provenance；
- confidence；
- timestamp；
- write approval for sensitive facts；
- correction history；
- quarantined memory；
- source-aware retrieval。

“越用越懂你”如果没有 correction / deletion，也可能变成：

> **越用越确信一个很久以前就错了的你。**

---

## 十三、多 Agent 共享记忆：最怕串用户与串项目

Multi-Agent 系统常希望有 shared memory。

但共享不等于“所有 Agent 都读写同一个 namespace”。

至少应区分：

- user scope；
- organization scope；
- project scope；
- task scope；
- agent-private scratchpad；
- shared verified facts。

否则可能出现：

- A 客户信息进入 B 客户任务；
- 一个 sub-agent 的草稿被另一个当正式事实；
- 高权限 Agent 写下的秘密被低权限 Agent 检索；
- 一次恶意输入污染整个 swarm。

AWS AgentCore Memory 使用 actor ID + session ID 做 scoped memory，就是这类边界开始基础设施化的例子。[^4]

---

## 十四、删除与遗忘是用户权利，也是系统正确性

个人 Agent 最容易宣传：

> “越用越懂你。”

但用户同样需要：

> **“我不想让它再记这件事。”**

因此成熟 memory product 至少应支持：

- inspect；
- edit；
- delete；
- reset；
- TTL / expiration；
- export / portability；
- different sensitivity classes。

OpenAI Agents SDK session interface 甚至提供 history editing / pop / clear 等操作，这些看似小的 API，实际上反映一个重要原则：**记忆必须可纠错，而不是 append-only 神谕。**[^2]

如果记忆只能写不能删，长期个性化会很快变成数据债务。

---

## 十五、Agent recovery 应该衡量什么

| 指标 | 意义 |
|---|---|
| **Resume success rate** | 中断后能否从正确位置继续 |
| **Duplicate side-effect rate** | 恢复是否重复发信 / 下单 / 写数据 |
| **Checkpoint freshness** | 最多会丢多少已完成工作 |
| **Wrong-memory rate** | 长期记忆中错误事实比例 |
| **Useful recall** | 真正有用的信息能否在需要时被召回 |
| **Correction success** | 用户纠错后旧记忆是否停止影响系统 |
| **Deletion correctness** | 删除后是否真的不可再检索 |
| **Cross-user leakage** | 是否发生跨用户 / 项目记忆串线 |
| **Memory cost** | 存储、抽取、embedding、检索带来的持续成本 |
| **Retention compliance** | 数据是否按照策略过期 |

这些指标比：

> “支持长期记忆”

有信息量得多。

---

## 十六、评曰：成熟 Agent 必须同时学会记住、忘记和恢复

聊天模型时代，人们把 memory 理解成：

> “它还记得我之前说过什么。”

Agent 时代，memory 已经变成系统工程问题。

它需要处理：

> conversation continuity  
> + execution state  
> + workspace  
> + checkpoints  
> + long-term preferences  
> + organizational knowledge  
> + deletion / correction  
> + fault recovery。

所以一个成熟 Agent 不应该只是“记得更多”。

它应该：

> **该记的记住；过期的忘掉；错的能改；中断后能继续；现实世界已经做过的事情不会因为恢复而再做一遍。**

如果身份系统回答的是：

> “谁有权做这件事？”

那么记忆与状态系统回答的是：

> **“这件事到底做到哪里了，以及下一步怎样安全继续？”**

这两层共同决定 Agent 能不能真正从 demo 变成长期数字执行者。

---

*2026-08 补订：GPT-5.6 Sol（OpenAI）。*

> 📖 详见《志·AI Agent 生态》《志·Agent 身份、权限与凭据治理》《志·Agent 宣传、实测与可靠性》《志·万物 Agent 化与知识库 Skill 热潮》《论·Agent 时代》。

---

[^1]: OpenAI Agents SDK (TypeScript), “Sessions”. https://openai.github.io/openai-agents-js/guides/sessions/
[^2]: OpenAI Agents SDK (Python), “Sessions”. https://openai.github.io/openai-agents-python/sessions/
[^3]: OpenAI Agents SDK, “Running Agents — State and conversation management”. https://openai.github.io/openai-agents-js/guides/running-agents/
[^4]: Amazon Bedrock AgentCore, “Memory”. https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/harness-memory.html
[^5]: Amazon Bedrock AgentCore, “Create a memory store”. https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/memory-create-a-memory-store.html
[^6]: LangGraph, “Persistence”. https://docs.langchain.com/oss/python/langgraph/persistence
[^7]: LangChain, “Human-in-the-loop”. https://docs.langchain.com/oss/python/langchain/human-in-the-loop
[^8]: OpenAI Agents SDK, “Sandbox agents — Memory”. https://openai.github.io/openai-agents-js/guides/sandbox-agents/memory/
