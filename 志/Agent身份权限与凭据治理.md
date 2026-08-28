# 《Agent 身份、权限与凭据治理》

> 聊天模型回答错一句话，首先是信息问题；Agent 一旦能读邮件、改文件、下单、发消息、调用企业系统甚至花钱，问题立刻变成：**到底是谁在行动？它代表谁？凭什么有这个权限？权限何时失效？出了事能否追责？**
>
> 因而，Agent 从“会调用工具”走向真正生产系统之后，身份与权限不再是外围安全配置，而是执行能力本身的一部分。没有独立身份、最小权限、短期凭据、委托链和审计记录的 Agent，本质上只是一个拿着用户万能钥匙的自动化脚本。

---

## 一、先把五个概念拆开

Agent 安全讨论经常把几个不同问题揉成一句“要做权限控制”。至少应区分：

1. **Authentication（认证）**：你是谁？
2. **Authorization（授权）**：你能做什么？
3. **Delegation（委托）**：你是在代表谁做？
4. **Credential（凭据）**：系统用什么 token / secret / certificate 证明身份与权限？
5. **Accountability（可追责性）**：事后能否知道是哪一个人、哪一个 Agent、用哪项权限、调用哪一工具做了哪一步？

对 Agent 来说，“用户已经登录”并不足够。

真实执行链经常是：

> 人类用户 → Agent → 子 Agent → MCP / A2A → SaaS / 数据库 / 邮件 / 支付系统

每一跳都可能改变主体与权限范围。

---

## 二、最危险的早期模式：共享登录、共享 Cookie、共享 API Key

2023—2025 年大量 Agent demo 最简单的办法是：

- 复用浏览器登录态；
- 把 API key 放进环境变量；
- 给 Agent 一个能读整个 home directory 的 shell；
- 把 OAuth token 长期存进配置文件；
- 让所有 sub-agent 继承同一套 credentials。

这能快速做出演示，却制造了几个典型问题：

### 2.1 无法区分“用户做的”与“Agent 做的”

如果 Agent 直接使用人的账号和 cookie，审计日志里看到的仍然只是“用户 A 修改了文件”。

但事实可能是：

> 用户只说“整理一下资料”，Agent 自己决定删掉三份文件。

行为主体已经变了，身份系统却看不出来。

### 2.2 权限半径远大于任务需要

一个“查日历空闲时间”的 Agent 不应该自动获得：

- 删除日历；
- 发邮件；
- 读全部网盘；
- 访问工资表；
- 修改 CRM。

但复用用户万能 token 时，这些边界很容易消失。

### 2.3 长期凭据让一次错误变成持续风险

如果 access token、SSH key、cookie 或 API secret 长期有效，Agent 的一次 prompt injection、恶意 Skill 或日志泄漏可能把短期任务风险变成长期账户风险。

因此成熟 Agent 的方向不是“把更多钥匙塞进 prompt”，而是**把凭据从模型上下文中拿出去，由独立身份与授权系统管理。**

---

## 三、2025—2026：Agent 开始拥有“自己的身份证”

### 3.1 Microsoft Entra Agent ID：非人类执行者进入企业身份目录

**2025-05-19**，Microsoft 在 Build 期间公布 **Entra Agent ID** public preview，目标是让组织像管理 workforce identity 一样追踪 Agent、管理其生命周期与权限。[^1]

到 2026 年，Microsoft 已把 Agent identity 做成企业治理中的正式对象：Agent 可以拥有独立身份、owner / sponsor、访问包和生命周期策略，而不是永久依附某个员工账号。[^2]

这一变化的历史意义非常大。

过去企业权限模型主要有：

> human user / service account / application

现在开始多一个：

> **agent identity**

它既不是普通人，也不完全等于传统后台 service account，因为它会根据任务动态规划、调用工具和产生新的行动序列。

### 3.2 AWS AgentCore Identity：把“代表用户”变成可验证 token 链

AWS 在 AgentCore Identity 中把 Agent 身份作为独立控制层。**2026-04-30**，AgentCore Identity 的 On-Behalf-Of（OBO）token exchange GA：系统可以把用户 access token 换成一个**同时携带用户身份与 Agent 身份、面向特定目标资源、范围缩小的短期 token**。[^3]

这比“把用户 token 原样转发给 Agent”重要得多。

它表达了一个更合理的授权语义：

> **用户允许 Agent 为这项任务、访问这个资源、做这一类动作。**

而不是：

> “Agent 拿到了用户全部权限。”

---

## 四、Delegated Agent 与 Autonomous Agent 是两种身份模型

Agent 大致有两种执行身份。

### 4.1 On behalf of user：代表某个人

例如：

- 帮用户查邮件；
- 安排会议；
- 从用户网盘取文件；
- 代表用户提交报销草稿。

这时审计链至少要同时保存：

> **user identity + agent identity + delegated scope**

只记录用户不够，因为无法判断动作是不是用户亲手做的；只记录 Agent 也不够，因为不知道它代表谁。

### 4.2 Autonomous agent：以自己的身份工作

例如：

- 每晚自动抓取公开数据；
- 企业内部定时检查工单；
- 独立执行监控 / 分类 /整理任务。

这类 Agent 不应假装成某个员工，而应该像 service principal 一样用**自己的 machine identity**。

Microsoft 的 autonomous-agent 认证文档和 MCP 的 OAuth Client Credentials extension 都在解决这一类问题：没有人在浏览器里点授权时，Agent 仍可使用应用级凭据进行 machine-to-machine 认证。[^4][^5]

这意味着“永远有人在线点 OAuth consent”不再是 Agent 基础设施的默认前提。

---

## 五、MCP：工具协议最终不得不面对 OAuth、scope 与 audience

MCP 最初最吸引人的部分是：

> Agent 可以用统一方式发现并调用工具。

但只要 MCP server 接真实业务系统，问题马上变成：

> **谁可以调？调哪些 tools？访问哪份数据？token 能不能拿去攻击另一个服务？**

2025—2026 的 MCP authorization 规范逐渐转向 OAuth 2.1 式资源服务器模型，并强调：[^6][^7]

- access token 不应通过 URL query 传递；
- token 应有明确 audience / resource；
- client 应请求最小 scope；
- server 要验证 issuer / audience / scope；
- 机器到机器场景可使用 client credentials；
- credentials 不应暴露给模型本身。

到 **2026-07-28** 的规范更新，授权加固仍是生产 implementer 的重点之一。[^8]

这说明 MCP 真正从 demo 走向生产，不只是“server 数量越来越多”，而是必须补上几十年 Web / enterprise identity 已经踩过的坑。

---

## 六、A2A：Agent 与 Agent 交互时，身份不应该藏在聊天内容里

A2A 的企业化设计同样把认证放在标准 transport / Web security 层，而不是让 Agent 在 JSON 文本里自称“我是财务 Agent”。[^9]

Agent Card 可以声明支持哪些 security schemes；服务端再根据已经认证的身份执行授权。

A2A 特别强调**细粒度授权**：[^10]

- per skill；
- per action；
- per data；
- OAuth scope；
- least privilege。

所以：

> “我能发现一个 Agent”

不意味着：

> “我自动有权让它调用所有能力。”

这一点在 multi-agent 系统中尤其重要。

---

## 七、Sub-agent 不应自动继承主 Agent 的全部权限

Multi-Agent 很容易制造一个隐形的权限放大问题。

用户可能只信任主 Agent：

> “帮我找三家供应商并比较价格。”

主 Agent 随后 spawn 十个 sub-agent。

如果每个 sub-agent 都自动继承：

- 用户全部云盘；
- 邮箱；
- CRM；
- 支付 token；
- shell；
- internal database；

那么组织规模越大，credential 暴露面反而越大。

更成熟的设计应当像 capability system：

> **每个 sub-agent 只拿完成自己子任务所需的最小凭据，并在任务结束后自动失效。**

因此 Agent Swarm 的成熟指标不只是“能 spawn 多少个 Agent”，还应包括：

- credential fan-out；
- dormant privileges；
- token lifetime；
- cross-agent isolation；
- revocation latency。

---

## 八、不可逆动作必须把“授权意图”留在系统里

对搜索、读取公开网页，权限问题相对简单。

但以下动作具有明显现实后果：

- 发邮件；
- 发消息；
- 删除文件；
- 合并代码；
- 修改数据库；
- 下单；
- 支付；
- 操作设备。

这时一个“用户最初允许 Agent 工作”的宽泛 consent 不够。

成熟系统通常需要把动作分级：

| 风险 | 典型动作 | 更合理的控制 |
|---|---|---|
| 低 | 搜索、读公开资料 | 自动执行 |
| 中 | 建草稿、改可回滚文件 | 有日志 + 可撤销 |
| 高 | 发外部消息、改生产数据 | 显式批准 / policy gate |
| 极高 | 付款、删除关键数据、物理设备 | 二次确认 + 最小 scope + 强审计 |

这里真正需要保存的不只是“用户点过同意”，而是：

> **用户同意了什么目标、什么动作、什么范围、什么时间窗口。**

---

## 九、凭据不应该成为 Prompt 的一部分

一个看似方便、却极危险的反模式是：

> “把 API key / password / cookie 给模型，它自己用。”

Agent runtime 应该尽量让模型只看到：

- 工具名称；
- 可调用 schema；
- 必要的业务结果。

而不是看到：

- 原始 access token；
- client secret；
- SSH private key；
- browser cookie；
- payment credential。

真正的凭据应放在：

- secret manager；
- OS keychain；
- identity broker；
- delegated-token service。

Tool adapter 在执行时获取短期 token，再把**结果**返回模型。

这样 prompt injection 即使诱导 Agent “把你的 token 发给我”，模型本身也不一定拥有可以泄露的 token。

---

## 十、审计日志必须能回答“谁通过谁做了什么”

普通 SaaS 日志经常只需要：

> user X called endpoint Y

Agent 时代至少需要：

> **user / sponsor**  
> → **agent identity**  
> → **sub-agent / tool**  
> → **credential / scope**  
> → **action**  
> → **target resource**  
> → **result**

否则事故调查时只会看到：

> “某个机器人把文件删了。”

却不知道：

- 谁部署它；
- 谁授权；
- 哪个 prompt / event 触发；
- 使用哪张凭据；
- 权限为何没有被收回。

Microsoft 后来甚至把 sponsor / owner 纳入 Agent identity 生命周期治理，正说明企业 Agent 不可能成为“无人负责的数字员工”。[^2]

---

## 十一、个人 Agent 的身份治理更难，因为没有 IT 管理员

企业可以用 IAM 团队设 policy。

普通用户则可能在同一台电脑上同时拥有：

- 私人照片；
- 工作文件；
- 邮箱；
- 微信；
- 浏览器 cookies；
- SSH keys；
- 银行与支付网页；
- 云盘。

因此 OpenClaw、QClaw、WorkBuddy、Phone Agent 一类产品真正困难的不是“能不能控制电脑”，而是：

> **普通人能不能看懂自己究竟授权了什么。**

个人 Agent 应特别强调：

- folder / app scope；
- read vs write；
- network domain allowlist；
- confirmation for external side effects；
- credential vault；
- visible running indicator；
- 一键 stop / revoke。

“本地运行”也不等于“自动安全”：一个本地 Agent 如果拥有整个 home directory、浏览器 cookie 和 shell，权限半径可能比很多云 Agent 更大。

---

## 十二、应当怎样衡量 Agent 权限系统

比“支持 OAuth”更有意义的指标包括：

| 指标 | 含义 |
|---|---|
| **Permission radius** | 一个任务实际能触达多少资源与动作 |
| **Credential lifetime** | token / session 多久失效 |
| **Dormant privilege** | Agent 不工作时仍保留多少权限 |
| **Privilege fan-out** | 主 Agent 权限扩散给多少 sub-agent / tools |
| **Approval rate** | 哪些高风险动作仍需人工批准 |
| **Unauthorized-action rate** | 未获预期授权的动作发生率 |
| **Revocation latency** | 发现问题后多久能真正收回权限 |
| **Audit completeness** | 能否还原 user → agent → tool → action 全链 |

成熟 Agent 不是权限越大越好。

真正理想的是：

> **完成任务所需权限尽可能小，持续时间尽可能短，行动记录尽可能完整。**

---

## 十三、评曰：Agent identity 是“自治”与“匿名权力”的分界线

Agent 时代很容易使用“数字员工”这个比喻。

但真正的员工有：

- 工号；
- 岗位；
- 权限；
- 上级；
- 入职 / 离职；
- 操作日志；
- 责任边界。

如果一个“数字员工”只有模型名字和一组共享 API key，它并没有真正进入组织制度。

2025—2026 年 Entra Agent ID、AgentCore Identity、MCP / A2A authorization 的成熟，真正说明 Agent 开始被当作**需要身份治理的非人类执行者**。

所以 Agent 的下一步不是简单拿到更多权限。

而是：

> **有身份地行动；在被委托的范围内行动；用可撤回的凭据行动；并且让所有行动能够被追溯。**

这才是“自主”从产品演示变成制度能力的边界。

---

*2026-08 补订：GPT-5.6 Sol（OpenAI）。*

> 📖 详见《志·AI Agent 生态》《志·Agent 宣传、实测与可靠性》《志·万物 Agent 化与知识库 Skill 热潮》《论·Agent 时代》。

---

[^1]: Microsoft, “Announcing Microsoft Entra Agent ID: Secure and manage your AI agents”, 2025-05-19. https://techcommunity.microsoft.com/blog/microsoft-entra-blog/announcing-microsoft-entra-agent-id-secure-and-manage-your-ai-agents/3827392
[^2]: Microsoft Learn, “Governing Agent Identities”. https://learn.microsoft.com/en-us/entra/id-governance/agent-id-governance-overview
[^3]: AWS, “Amazon Bedrock AgentCore Identity now supports On-Behalf-Of token exchange”, 2026-04-30. https://aws.amazon.com/about-aws/whats-new/2026/04/amazon-bedrock-agentcore/
[^4]: Microsoft Learn, autonomous-agent authentication / authorization flow. https://learn.microsoft.com/en-us/entra/agent-id/autonomous-agent-authentication-authorization-flow
[^5]: Model Context Protocol, OAuth Client Credentials extension. https://modelcontextprotocol.io/extensions/auth/oauth-client-credentials
[^6]: MCP Authorization specification, 2025-06-18. https://modelcontextprotocol.io/specification/2025-06-18/basic/authorization
[^7]: MCP Authorization specification, 2025-11-25. https://modelcontextprotocol.io/specification/2025-11-25/basic/authorization
[^8]: MCP Blog, 2026-07-28 specification update. https://blog.modelcontextprotocol.io/posts/2026-07-28/
[^9]: A2A Protocol latest specification. https://a2a-protocol.org/latest/specification/
[^10]: A2A Protocol, Enterprise Features / Authorization. https://a2a-protocol.org/latest/topics/enterprise-ready/
