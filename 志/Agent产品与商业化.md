# 《Agent 产品与商业化》

> Agent 真正进入历史，不是在实验室第一次写出“自主循环”，而是在有人愿意为“把任务做完”持续付钱以后。2023 年的 AutoGPT 证明了需求；2024 年的 Devin、Computer Use 和企业 Copilot 证明了产品形态；2025—2026 年则出现了更关键的事情：Agent 开始形成稳定价格、席位、credits、actions、conversations、runtime、memory、gateway、policy 等可计费单位。到 2026 年夏季，Agent 商业化已经从“给聊天订阅加一个高级功能”，发展成一套接近云计算的资源市场。

---

## 一、先定义：什么才算商业 Agent 产品

“用了大模型”不等于“Agent 产品”。

本篇只把满足以下至少两项的产品纳入主流 Agent 商业史：

1. 用户可以委派**完整任务**，而非只问一个问题；
2. 系统能调用工具、文件、浏览器、终端、企业数据或外部服务；
3. 可以在多轮执行中读取环境反馈并继续行动；
4. 有独立的任务状态、后台运行、并行任务或恢复机制；
5. 产品按照 Agent 的执行价值，而不只是聊天席位进行定价或计量。

因此，Microsoft 365 Copilot 这类产品只有在其 Agent / Copilot Studio 能力范围内才属于本篇对象；普通聊天总结功能仍属于 AI assistant，而不是 Agent。

---

## 二、Agent 商业化的五个市场

到 2026 年，主流 Agent 产品没有形成一个统一市场，而是分成五类。

| 市场 | 代表产品 | 用户购买的核心价值 |
|---|---|---|
| 通用个人 / 工作 Agent | ChatGPT Agent / Work、Claude Cowork、Manus | 把研究、文件、网页和多步骤任务直接委派出去 |
| 编程 Agent | Claude Code、Codex、GitHub Copilot、Cursor、Devin | 把 Issue、代码库、终端和 PR 交给 Agent |
| 企业业务 Agent | Salesforce Agentforce、Microsoft Copilot Studio | CRM、客服、销售、人事等结构化业务流程自动执行 |
| Agent 开发平台 | OpenAI Agents SDK、Google Agent Platform、Microsoft Copilot Studio | 构建、部署、观察和治理企业自有 Agent |
| Agent 基础设施 | AWS AgentCore、Google Agent Runtime / Gateway / Memory | sandbox、runtime、memory、identity、policy、gateway 与 observability |

这五类产品最重要的差异并不是“哪个模型更聪明”，而是**Agent 被部署到哪里、权限给到多大、失败由谁承担、成本怎样计量**。

---

## 三、通用工作 Agent：订阅制先吃掉消费者和知识工作者

### 3.1 ChatGPT：从订阅聊天到 Agent 工作空间

OpenAI 最早的商业化优势来自 ChatGPT 订阅，而 Agent 最初也被装进这一套订阅结构。

截至 2026 年，个人层仍保留明显的阶梯：Free / Go / Plus / Pro；其中 Plus 为 **20 美元/月**，Pro 发展为面向高强度工作与 Codex 的高用量层。OpenAI 的官方价格页和帮助文档已经把 Deep Research、ChatGPT agent、Codex 等列入高级计划能力。[^1][^2]

企业侧则更值得记录。OpenAI Business 当前基础价格为 **20 美元/用户/月（年付）**，并把 ChatGPT、Codex、公司知识、连接器和 team agent plugins 放在同一工作空间里。对于 Business、Enterprise / Edu，OpenAI 又增加 flexible / credit-based pricing，ChatGPT Work、Workspace Agents 和 Codex 都有独立 credit rate。[^3][^4]

因此 OpenAI 的 Agent 商业模式已经是两层：

- **seat** 买组织入口、安全与基础能力；
- **credits / usage** 承担高算力工作 Agent 的真实边际成本。

这比传统 SaaS 的“每人每月固定价”更接近云服务。

### 3.2 Claude：一个订阅池里同时卖聊天、Code 与 Cowork

Anthropic 的个人商业化也走出类似结构，但“统一账户池”更明显。

截至 2026 年夏，Claude 个人计划大致为：

- Pro：**20 美元/月**；
- Max 5x：**100 美元/月**；
- Max 20x：**200 美元/月**。[^5]

Pro 已包含 Claude Code 与 Cowork；Max 则主要卖更高的 session / usage capacity。Anthropic 还允许 Pro、Max、Team 用户购买额外 usage bundles，这些余额可在 Claude、Claude Code、Cowork 和第三方产品间共享。[^6]

这意味着 Claude Code 与 Cowork 没有被当成两个完全独立的软件授权，而逐渐变成同一“Claude 工作账户”的不同执行界面。

对商业史而言，这很重要：

> **Agent 产品开始从“软件功能”变成“一个用户每月能消费多少可执行智能”的账户体系。**

### 3.3 Manus：credits + 并发任务，把 Agent 做成消费者可理解的“任务配额”

Manus 代表另一条纯 Agent 产品路线。它没有先从聊天订阅积累用户，而是直接把“执行任务”作为核心商品。

2026 年 3 月官方定价说明显示：Free 为 0 美元；Pro 从 **20 美元/月**起，另有更高 credit 档；Team 从 **20 美元/席位/月**起。套餐同时写明 monthly credits、并发任务数和 scheduled tasks。[^7]

这是一种很“Agent 原生”的定价语言：

- 用户不只购买模型访问；
- 还购买**多少任务能同时跑、多少任务能被排程、能消耗多少执行积分**。

它比传统 token 价格更接近普通用户对 Agent 的真实感受。

---

## 四、编程 Agent：最早真正证明 Agent 可以产生大额收入的市场

软件工程是 Agent 商业化最成熟的垂直领域。

原因仍然是可验证性：代码可以编译、测试、lint、diff、review、rollback。因此企业更敢把行动权交给模型，也更容易算 ROI。

### 4.1 Claude Code：模型公司第一次靠 Agent 工具反向拉动企业收入

Claude Code 从 2025 年的终端工具，迅速变成 Anthropic 最重要的企业入口之一。到 2026 年，Claude Code 已包含在个人 Pro / Max 和新的 Team / Enterprise 计划中；API key 用户则继续按 token / cloud provider 用量计费。[^8][^9]

Reuters 2026 年 4 月对 OpenAI 与 Anthropic 收入竞赛的报道，将 Anthropic 的企业增长明确归因于 Claude coding agents 与软件插件需求；同年 8 月 Reuters 又报道 Anthropic 为满足 Claude Code 等产品增长持续扩大算力采购。[^10][^11]

这说明 coding agent 已不再只是“帮模型卖更多 token”，而是模型公司本身的重要收入发动机。

### 4.2 GitHub Copilot：从席位产品变成 credits 产品

GitHub Copilot 是传统 SaaS 向 Agent 计量最典型的迁移。

当前个人计划已经形成：

- Pro：**10 美元/月**；
- Pro+：**39 美元/月**；
- Max：**100 美元/月**。[^12]

更关键的是，GitHub 已把 Chat、CLI、Cloud agent、第三方 coding agents 等统一纳入 **AI credits**。企业计划的 included credits 在组织层汇总，长程 cloud agent 使用 frontier model 会消耗更多 credits。[^13]

这等于承认：

> 一次“Agent 帮我解决 Issue”与一次“Chat 问一个 API 怎么用”根本不是同一种成本。

传统固定席位开始只负责身份、权限和基础额度；真正的 Agent 使用继续向 usage billing 迁移。

### 4.3 Cursor：Agent 把 IDE 的商业模式从“编辑器订阅”改成“推理预算账户”

Cursor 的价格变化尤其能说明 Agent 对软件商业模式的冲击。

2026 年个人计划为：

- Pro：**20 美元/月**；
- Pro+：**60 美元/月**；
- Ultra：**200 美元/月**；
- Teams Standard：**40 美元/用户/月**；
- Teams Premium：**120 美元/用户/月**。[^14]

Cursor 文档甚至直接给出了不同用户的典型 Agent 消费：daily Agent users 通常约 **60—100 美元/月总 usage**，multiple agents / automation 的 power users 常达到 **200 美元以上/月**。[^15]

2025 年 Cursor 就公开解释过为什么 fixed request pricing 不适合 Agent：一个简单语法问题和“完成整个 PR”即使使用相同模型，token / tool execution 成本可以相差一个数量级。因此 Teams 从固定 request 计费转向底层模型 API 价格 + Cursor 自己的 token rate。[^16]

2026 年 Cursor 再用 Standard / Premium seat 解决“少数重度 Agent 用户吃掉团队大部分成本”的问题。[^17]

这几乎就是 Agent 商业化的一个缩影：

> **软件席位仍在，但真正的商品已经变成推理预算。**

Reuters 在 2026 年 6 月报道 SpaceX 宣布以 600 亿美元收购 Cursor 母公司 Anysphere，并称 Cursor 当时约有 **26 亿美元 annualized B2B revenue**。无论最终并购的长期意义如何，这至少说明 coding agent 已经成为可以独立支撑十亿美元级企业收入的产品类别。[^18]

### 4.4 Devin：从“第一个 AI 软件工程师”变成分层订阅 + Agent Compute

Devin 早期以“AI software engineer”叙事出名，到 2026 年商业模式已经高度普通化：Free、Pro、Max、Teams 加 Enterprise。

官方当前价格为：

- Free：0；
- Pro：**20 美元/月**；
- Max：**200 美元/月**；
- Teams：**80 美元/月起**；
- Enterprise：按合同约定的 **Agent Compute Units（ACUs）**计费。[^19][^20]

Devin 官网同时宣称已拥有 **100 万+ 用户、4000+ Enterprise customers**。[^21]

这说明 Devin 的商业化最终没有停留在“买一个数字员工”，而变成：

- 自助订阅负责进入门槛；
- credits / compute units 负责真实执行量；
- 企业合同负责治理、安全和组织级消费。

这与 Cursor、GitHub 的收敛非常明显。

---

## 五、企业业务 Agent：真正开始按“动作”和“业务结果”收费

如果 coding agent 的商品单位是“推理预算”，CRM / customer service Agent 则更进一步：它们试图直接按业务动作收费。

### 5.1 Salesforce Agentforce：从 seat 转向 action / conversation

Salesforce Agentforce 是最明确地把“数字劳工”写进价格表的企业产品之一。

2026 年官方价格页给出多种并存模型：

- Flex Credits：**500 美元 / 100,000 credits**；
- 一个普通 Agentforce action 消耗 20 credits，即约 **0.10 美元/action**；
- Conversations：**2 美元 / conversation**；
- employee Agentforce add-on：**125 美元/用户/月**；
- 也有 5 美元/用户/月 + metered credits 的 Agentforce User License。[^22][^23]

这种设计的历史意义在于：Salesforce 已经不满足于“每人每月买一个 AI 席位”，而想把价格锚到**Agent 实际更新了一条 CRM 记录、完成了一次客户服务、执行了一次业务动作**。

这是真正的“digital labor pricing”。

### 5.2 Microsoft Copilot Studio：seat + Copilot Credits

Microsoft 走的是更典型的平台路线。

Microsoft 365 Copilot 仍以 **30 美元/用户/月**的席位建立企业入口；Copilot Studio 则可以预购 **25,000 Copilot Credits / 200 美元/月**，或采用 pay-as-you-go。[^24]

不同 Agent 行为消耗不同 credits，例如 generative answer、agent action、tenant graph grounding、voice 等拥有不同 billing rate。[^25]

这说明微软把企业 Agent 拆成两层：

1. 员工拥有一个 Copilot 席位；
2. 真正复杂的自主 Agent workflow 再按 credits 计费。

到 2026 年 7 月，Reuters 报道 Microsoft 365 Copilot 已达到 **3000 万+付费席位**。虽然这些席位不等同于 3000 万个自主 Agent，但它构成了 Microsoft 推销内部 Agent 的巨大商业入口。[^26]

### 5.3 企业采用：Agent 并没有简单等于“裁员”

2026 年的企业数据同时呈现两个方向。

一方面，华尔街大型银行开始把 Agent 当“digital assistants / digital employees”纳入财富管理、客户审查、交易和 treasury 工作流；Reuters 报道超过一半受访银行在测试 agentic AI。[^27]

Workday 2026 年第二季度则称，**超过一半新客户购买了至少一种 AI offering**。[^28]

另一方面，把 Agent 直接等价为人员替代并不稳定。Reuters 对 Meta Project OT 的调查显示，一次试图用 Agent 大规模重构组织和裁减岗位的计划遭遇生产率、员工反弹和技术故障，最终缩减原计划。[^29]

因此 2026 年商业市场的真实状态更接近：

> Agent 已经能卖钱，但“卖得出去”与“能够稳定替代整类岗位”仍是两回事。

---

## 六、云 Agent 基础设施：商业模式开始完全像云计算

2026 年最深的商业变化，发生在 AWS 与 Google 这一层。

### 6.1 AWS AgentCore：把 Agent runtime 拆成十几个 SKU

Amazon Bedrock AgentCore 不是卖一个“AI 员工”，而是卖 Agent 所需的基础设施零件。

当前价格表分别对以下项目收费：

- Runtime microVM CPU：**0.0895 美元 / vCPU-hour**；
- memory：**0.00945 美元 / GB-hour**；
- Web Search：**7 美元 / 1000 queries**；
- Gateway API invocation：**0.005 美元 / 1000 次**；
- Memory 的事件、存储和 retrieval；
- identity token / API key request；
- evaluator tokens；
- observability 继续按 CloudWatch 计费。[^30]

最有意思的是 Code Interpreter / Runtime 对 I/O wait 的处理：Agent 在等待 LLM、API 或数据库时，如果没有消耗 CPU，就不收 CPU active consumption。AWS 明确指出 Agent workload 经常有 **30—70% 时间处于 I/O wait**。[^30]

这已经完全不是 SaaS 定价，而是操作系统 / 云 runtime 经济学。

### 6.2 Google Agent Platform：compute、memory、sessions、governance 逐层计价

Google Gemini Enterprise Agent Platform 也走向同样方向。

Agent Compute 当前定价为约 **0.085 美元 / vCPU-hour**（每账号每月有一定免费层）；Agent Gateway、Memory Bank、Sessions、Skill Registry、Semantic Governance Policy 又有各自计价方式。[^31]

例如长期 memory 不只是“模型功能”：

- storage 以 GiB-month 计；
- read / write operation 计量；
- memory generation / embeddings 的 model tokens 另收费。[^31]

Google 甚至开始为 Agent 工作负载单独做 FinOps。2026 年 8 月 26 日，Google Cloud 宣布为 Gemini Enterprise 和开发者 Agent 工具扩展 billing flexibility 与 cost controls，原因正是 Agent 工作量越来越难用传统固定预算预测。[^32]

到这里，Agent 商业化真正完成了一次范式转换：

> **Agent 不再是一项 AI 功能，而是一种新的计算工作负载。**

---

## 七、2026 年主流产品的商业定位

| 产品 | 主要市场 | 执行环境 | 当前主要收费方式 | 商业化成熟度 |
|---|---|---|---|---|
| ChatGPT Agent / Work / Codex | 通用知识工作、开发 | OpenAI cloud / workspace | seat + credits / usage | 高 |
| Claude Code / Cowork | 编程、桌面知识工作 | terminal / desktop / cloud | subscription + usage bundles / API | 高 |
| GitHub Copilot Cloud Agent | 软件工程 | GitHub repo / cloud env | seat + AI credits | 高 |
| Cursor | 软件工程 | IDE + cloud agents | seat + API-priced usage | 高 |
| Devin | 软件工程 | cloud / desktop | subscription + credits / ACU | 中高 |
| Manus | 通用个人 Agent | cloud workspace | subscription + credits + concurrency | 中 |
| Salesforce Agentforce | CRM / customer service / employees | Salesforce platform | action / conversation / seat | 高 |
| Microsoft Copilot Studio | 企业内部 / 外部 workflow | M365 + Azure | seat + Copilot Credits / PAYG | 高 |
| Google Gemini Enterprise Agent Platform | 企业 Agent / developer infra | Google Cloud | compute + storage + requests + model usage | 高 |
| AWS Bedrock AgentCore | Agent infrastructure | AWS | granular consumption pricing | 高 |

“成熟度”在这里不是评价模型强弱，而是看产品是否已经拥有公开价格、稳定企业渠道、组织治理与可持续计量方式。

---

## 八、商业模式的四次迁移

### 第一阶段：聊天订阅

最早的 AI 商业化单位是：

> **20 美元 / 用户 / 月。**

用户购买的是“更多消息、更强模型”。

### 第二阶段：Agent 席位

Claude Code、Copilot、Cursor、Devin 把同一个 seat 变成“可以真正执行任务的软件”。

但很快发现：两个用户虽然都占一个席位，消耗算力可以差几十倍。

### 第三阶段：credits / action / conversation

于是 2025—2026 年出现：

- AI credits；
- Copilot Credits；
- Flex Credits；
- Agent Compute Units；
- task credits；
- action / conversation billing。

价格开始跟执行深度绑定。

### 第四阶段：Agent cloud economics

AWS / Google 再把任务拆成：

- compute；
- memory；
- storage；
- search；
- gateway；
- identity；
- policy；
- evaluation；
- observability。

这时 Agent 与传统云应用的区别只剩**调用模型的比例更高、行为更不可预测、资源使用更动态**。

---

## 九、真正应该看的商业指标：不是 token，而是成功任务

Agent 时代最容易误导人的价格比较仍是 `$ / 1M tokens`。

但一个真实任务可能包含：

- 多次模型调用；
- cache；
- search；
- browser；
- shell / code execution；
- memory read / write；
- subagents；
- retries；
- human takeover。

因此商业上真正有意义的指标越来越像：

> **Cost per successful completed task**

以及：

- success rate；
- time-to-completion；
- human intervention rate；
- rollback / incident cost；
- tasks per employee / per agent；
- gross margin after model + tool + compute cost。

Cursor 从 fixed request 转向 API-priced usage、Salesforce 从 seat 转向 action、AWS / Google 把 runtime 拆开计价，都在说明同一件事：**Agent 的边际成本比聊天更不均匀。**

---

## 十、Agent 商业化真正的瓶颈：责任，而不是能力

当 Agent 只能写草稿时，错误最多意味着重新生成。

当 Agent 可以：

- 发邮件；
- 改 CRM；
- merge PR；
- 访问客户数据；
- 执行付款；
- 操作实验设备；

商业采购真正关心的问题会变成：

- 谁授权？
- 谁承担事故？
- 权限是否最小化？
- 能不能审计？
- 能不能撤回？
- 数据是否越界？
- 保险是否覆盖？

2026 年 8 月，Reuters 报道多家网络保险公司开始重新审查 policy wording，以应对 autonomous Agent 获得合法权限后却自行造成网络损害的风险。[^33]

这说明 Agent 商业化已经走到一个很现实的阶段：

> **它开始进入保险、合规和责任分配，而不只是软件采购。**

一个技术只有在事故能够定责、成本能够定价以后，才真正成为成熟产业。

---

## 评曰

Agent 商业化最值得记住的，不是哪家公司先喊出“数字员工”。

真正的转折是**计量单位不断变化**：

> 消息 → token → 席位 → credits → action → task → runtime resource。

这条变化本身说明 Agent 和聊天模型不是同一种商品。

聊天卖的是一次响应；Agent 卖的是一个持续过程。

持续过程意味着更多算力、更长状态、更大权限、更复杂失败，也意味着更高价值。因此商业市场必然同时出现两种力量：

- 用户想按“任务价值”付钱；
- 厂商又必须按“实际资源消耗”控制成本。

Salesforce 的 action、Microsoft / GitHub 的 credits、Devin 的 ACU、Cursor 的 API usage、AWS / Google 的 runtime pricing，都是在这两端之间寻找一个可以活下去的计价单位。

到 2026 年，coding agent 已经证明 Agent 可以形成十亿美元级商业市场；企业工作流 Agent 已经进入 CRM、银行、人力资源和办公套件；云厂商则开始把 Agent 当成一种新的计算负载销售基础设施。

但“能卖钱”并不等于“能够无人化替代组织”。

Agent 商业化真正的长期问题不是：

> **AI 能不能做这个工作？**

而是：

> **在成功率、成本、权限、事故和责任都算进去之后，把这项工作交给 Agent 是否仍然划算？**

只有这个问题被稳定回答，Agent 才会从一轮产品热潮变成真正的生产方式。

---

*2026-08 补订：GPT-5.6 Sol（OpenAI）。*

> 📖 详见《志·AI Agent 生态》《志·AI 编程助手》《志·AI 产品化演进》《论·Agent 时代》《论·推理经济学》《表·Agent 发展大事表》《表·Agent 主流产品与商业化对照表》。

[^1]: OpenAI, “Introducing ChatGPT Go, now available worldwide”, 2026-01-16. https://openai.com/index/introducing-chatgpt-go/
[^2]: OpenAI Help Center, “What is ChatGPT Pro?”. https://help.openai.com/en/articles/9793128/
[^3]: OpenAI, Business Pricing. https://openai.com/business/pricing/
[^4]: OpenAI Help Center, “ChatGPT Rate Card (Business, Enterprise/Edu credit-based pricing)”. https://help.openai.com/en/articles/11481834
[^5]: Anthropic Help Center, “Choose a Claude plan”, 2026-05-19. https://support.claude.com/en/articles/11049762-choose-a-claude-plan
[^6]: Anthropic Help Center, “Buy usage bundles”, 2026-05-18. https://support.claude.com/en/articles/14246112-buy-usage-bundles
[^7]: Manus Help Center, “What is the current membership pricing for Manus?”, 2026-03-16. https://help.manus.im/en/articles/11711111-what-is-the-current-membership-pricing-for-manus
[^8]: Anthropic Help Center, “Use Claude Code with your Pro or Max plan”, 2026-06-11. https://support.claude.com/en/articles/11145838-use-claude-code-with-your-pro-or-max-plan
[^9]: Anthropic Help Center, “Models, usage, and limits in Claude Code”, 2026-04-15. https://support.claude.com/en/articles/14552983-models-usage-and-limits-in-claude-code
[^10]: Reuters, “OpenAI versus Anthropic: What the revenue race means for their IPOs”, 2026-04-08. https://www.reuters.com/technology/artificial-intelligence/openai-versus-anthropic-what-revenue-race-means-their-ipos-2026-04-08/
[^11]: Reuters, “Anthropic to rent AI computing power from Nscale for $45 billion, source says”, 2026-08-26. https://www.reuters.com/technology/anthropic-pay-nscale-45-billion-rent-ai-computing-power-bloomberg-news-reports-2026-08-26/
[^12]: GitHub, Copilot Pricing. https://github.com/features/copilot
[^13]: GitHub Docs, “Usage-based billing for organizations and enterprises”. https://docs.github.com/en/copilot/concepts/billing/usage-based-billing-for-organizations-and-enterprises
[^14]: Cursor Help, “Pricing and plans”. https://prod.cursor.com/help/account-and-billing/pricing
[^15]: Cursor Docs, “Models & Pricing”. https://cursor.com/docs/models-and-pricing
[^16]: Cursor, “Updates to Teams pricing”, 2025-08-12. https://cursor.com/blog/aug-2025-pricing-teams
[^17]: Cursor, “Improvements to Teams Pricing”, 2026-06-01. https://cursor.com/blog/teams-pricing-june-2026
[^18]: Reuters, “SpaceX locks in $60 billion Cursor deal to close gap with rivals in AI coding race”, 2026-06-16. https://www.reuters.com/legal/transactional/spacex-buy-anysphere-60-billion-2026-06-16/
[^19]: Devin Docs, “Self-serve plans”. https://docs.devin.ai/admin/billing/self-serve
[^20]: Devin Docs, “Billing”. https://docs.devin.ai/admin/billing
[^21]: Devin, “Devin Desktop”. https://devin.ai/desktop
[^22]: Salesforce, Agentforce Pricing. https://www.salesforce.com/agentforce/pricing/
[^23]: Salesforce Help, “Agentforce Pricing”, updated 2025-05-19. https://help.salesforce.com/s/articleView?id=004811240&language=en_US&type=1
[^24]: Microsoft, Copilot Studio. https://www.microsoft.com/en-us/microsoft-365-copilot/microsoft-copilot-studio
[^25]: Microsoft Learn, “Billing rates and management - Microsoft Copilot Studio”. https://learn.microsoft.com/en-us/microsoft-copilot-studio/requirements-messages-management
[^26]: Reuters, “Microsoft says cash will keep flowing from AI, shares rise”, 2026-07-29. https://www.reuters.com/business/microsoft-tops-quarterly-cloud-growth-estimates-easing-spending-concerns-2026-07-29/
[^27]: Reuters, “Wall Street banks ramp up digital assistants in bid to win productivity race”, 2026-07-13. https://www.reuters.com/business/finance/wall-street-banks-ramp-up-digital-assistants-bid-win-productivity-race-2026-07-13/
[^28]: Reuters, “HR software firm Workday reports revenue rise, flags strong AI uptake”, 2026-08-27. https://www.reuters.com/business/workday-beats-second-quarter-revenue-estimates-2026-08-27/
[^29]: Reuters, “Mark Zuckerberg had a bold plan to replace Meta staff with AI. Here's how it imploded.”, 2026-08-26. https://www.reuters.com/investigations/mark-zuckerberg-had-bold-plan-replace-meta-staff-with-ai-heres-how-it-imploded-2026-08-26/
[^30]: AWS, “Amazon Bedrock AgentCore Pricing”. https://aws.amazon.com/bedrock/agentcore/pricing/
[^31]: Google Cloud, “Gemini Enterprise Agent Platform pricing”. https://cloud.google.com/products/gemini-enterprise-agent-platform/pricing
[^32]: Google Cloud, “FinOps for the AI era: New flexible billing and cost controls for agents”, 2026-08-26. https://cloud.google.com/blog/products/ai-machine-learning/flexible-billing-and-cost-controls-for-agents-on-google-cloud
[^33]: Reuters, “As AI agents go rogue, cyber insurers are adapting their policies”, 2026-08-27. https://www.reuters.com/legal/litigation/ai-agents-go-rogue-cyber-insurers-are-adapting-their-policies-2026-08-27/