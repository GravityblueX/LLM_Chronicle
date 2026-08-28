# Agent 主流产品与商业化对照表

> 更新时间：2026-08-28。价格随地区、合同、促销和用量变化；本表记录公开价格与计量逻辑，不作为采购报价。更重要的是观察**商品单位**怎样从席位迁移到 credits、actions、tasks 与 runtime resources。

## 核心十条商业路线

| 产品 | 厂商 | 主要对象 | Agent 形态 | 公开价格 / 计量方式（2026-08） | 商业化信号 |
|---|---|---|---|---|---|
| ChatGPT Agent / Work / Codex | OpenAI | 个人、团队、企业 | research + browser + files + coding + workspace agents | Plus $20/月；高用量 Pro 分层；Business $20/用户/月（年付）；企业 Work / Codex 可走 credits | 从聊天订阅转向 seat + flexible usage |
| Claude Code / Cowork | Anthropic | 开发者、知识工作者、企业 | terminal / IDE coding agent + desktop task agent | Pro $20/月；Max 5x $100；Max 20x $200；可买 usage bundles；API 另计 | Code/Cowork 与聊天并入统一 Claude usage pool |
| GitHub Copilot Cloud Agent | GitHub / Microsoft | 软件团队 | repo / issue / PR cloud coding agent | Pro $10；Pro+ $39；Max $100；企业使用 AI credits 池 | 传统 seat 正在变成 seat + pooled AI credits |
| Cursor | Anysphere / SpaceX | 开发者、软件团队 | IDE agent + cloud agent + automations + review | Pro $20；Pro+ $60；Ultra $200；Teams $40 / Premium $120；超额按模型 usage | 最典型的“编辑器订阅 → 推理预算账户” |
| Devin | Cognition | 开发者、企业工程团队 | cloud / desktop software engineer agent | Free；Pro $20；Max $200；Teams $80 起；Enterprise 用 ACU | 官网称 1M+ 用户、4000+ enterprise customers |
| Manus | Manus | 个人、研究、通用任务 | browser / research / artifact / scheduled tasks | Free；Pro $20 起 / 更高 credit 档；Team $20/seat 起；credits + 并发 + scheduled tasks | 直接把“任务配额”商品化 |
| Agentforce | Salesforce | CRM、客服、销售、员工 workflow | customer / employee business agents | $500/100k Flex Credits；普通 action 约 $0.10；$2/conversation；另有 seat/add-on | 最明确的 action / conversation “digital labor”定价 |
| Copilot Studio | Microsoft | 企业内部与外部业务流程 | autonomous agents + M365 / Azure integrations | 25,000 Copilot Credits / $200/月，或 PAYG；M365 Copilot $30/用户/月 | seat 负责入口，credits 负责 Agent 行动量 |
| Gemini Enterprise Agent Platform | Google Cloud | 企业 Agent 与开发平台 | runtime + gateway + memory + sessions + governance | Agent Compute 约 $0.085/vCPU-h；storage / memory / requests / model tokens 分开计 | Agent 被当成独立 cloud workload 做 FinOps |
| Bedrock AgentCore | AWS | Agent 开发者与企业 | runtime + browser + code interpreter + gateway + identity + memory + policy | Runtime CPU $0.0895/vCPU-h；memory $0.00945/GB-h；search/gateway/memory 等分别计价 | 最接近“Agent 操作系统即云 SKU” |

这十条不是“全球所有 Agent 产品排行榜”，而是十种最具代表性的商业路线：通用订阅、模型厂商工作台、Git 原生 Agent、AI IDE、独立数字工程师、通用任务 Agent、CRM 数字劳工、企业低代码平台以及两种云 Agent 基础设施。

---

## 第二圈：已经商业化、但不必挤进核心十位的主流产品

| 产品 / 平台 | 厂商 | 2026 年商业状态 | 为什么值得写 |
|---|---|---|---|
| AI Agents / Otto / AI Agent Orchestrator / AI Control Tower | ServiceNow | 正式产品；按既有产品 tier / license 提供，并建立 partner-built Agent marketplace | IT、客服、HR、CRM 工作流中把多 Agent、control tower、marketplace 做成同一企业平台 |
| Sana AI Agents + Agent System of Record | Workday | 正式销售；使用 **Workday Flex Credits** 批量购买 Agent / AI 能力 | HR / Finance SaaS 明确把 Agent 作为可治理的“系统记录对象”和持续 upsell |
| Joule Agents | SAP | Premium AI；官方明确按 **agent actions** 收费 | 与 Salesforce 类似，价格单位开始直接锚定“Agent 做了多少工作” |
| Fusion Agentic Applications / AI Agent Studio | Oracle | 正式 Fusion Cloud 能力；支持 specialized agent teams、workflow、approval、audit | 传统 ERP 把 Agent 直接嵌进 business objects 与审批链，而不是外置聊天机器人 |
| watsonx Orchestrate | IBM | 正式企业 Agent 平台；Essentials / Standard、cloud credits、AWS 等购买路径 | 重点不是单一 Agent，而是跨框架 import、gateway、治理、catalog 与 Agent monetization |
| Comet for Enterprise | Perplexity | 企业版 AI-native browser；Enterprise Pro $40/seat/月、Enterprise Max $325/seat/月 | browser 本身变成 Agent 执行面，并配有企业级 Agent policies / controls / monitoring |
| Genspark | Genspark | 消费 / 专业订阅；Plus $24.99/月、Pro $249.99/月（另有年付折扣） | 走“多模型 + 多 Agent + Slides/Sheets/Docs/Code 一站式聚合订阅”，与单模型厂商路线不同 |

第二圈最值得注意的是**传统企业软件全面 Agent 化**。Salesforce 之外，ServiceNow、Workday、SAP、Oracle、IBM 都已经不再把 Agent 当未来概念，而是正式写进产品目录、许可、credits、action billing、marketplace 或治理平台。

另一边，Comet 与 Genspark 说明通用 Agent 商业化也不只存在 ChatGPT / Claude / Manus 三条路线：

- **Comet** 把浏览器变成带 Agent policies 的企业工作环境；
- **Genspark** 则把多个前沿模型和 Agent 打包成一个“AI Costco”式订阅。

这些产品的资料统一见 `sources/志/Agent产品与商业化/index.json` 的第二圈来源（refs 34—40）。

---

## 一、个人 / 通用 Agent：订阅仍然重要，但已经不够

| 产品 | 基础订阅 | 高强度使用怎么处理 | 关键商业含义 |
|---|---:|---|---|
| ChatGPT | Plus $20/月 | Pro / credits / enterprise flexible usage | 高算力 Agent 无法长期被统一订阅价完全覆盖 |
| Claude | Pro $20/月 | Max $100/$200 + usage bundles | 同一余额可跨 Chat、Code、Cowork 使用 |
| Manus | Free / Pro $20 起 | credits、并发任务、scheduled task 配额 | 用户直接购买“能跑多少任务” |
| Genspark | Plus $24.99/月 | Pro $249.99/月、credit allowance 大幅提升 | 聚合多个模型 / Agent 后，credits 成为跨模型共同货币 |
| Perplexity Enterprise / Comet | Enterprise Pro $40/seat/月 | Enterprise Max $325/seat/月 | 浏览器 Agent 与企业 seat / policy 管理结合 |

### 观察

个人 Agent 仍然保留 SaaS 熟悉的月度订阅心理价位，但真正重度执行已经向更高 plan、credits 或企业 tier 迁移。与此同时，**聚合型 Agent 产品**开始出现：用户购买的不是某一个 checkpoint，而是一套跨模型的工作空间。

---

## 二、Coding Agent：最成熟的商业市场

| 产品 | 个人价格 | 团队 / 企业 | 超额成本 | 特点 |
|---|---:|---|---|---|
| Claude Code | Claude Pro $20 起 | Team / Enterprise | subscription allocation 或 API tokens | 模型厂商自己占领 terminal / IDE |
| GitHub Copilot | $10 / $39 / $100 | Business / Enterprise | AI credits | repo、PR、review、cloud agent 与 GitHub 原生融合 |
| Cursor | $20 / $60 / $200 | $40 / $120 per user | API-priced usage | Agent 使用量直接决定计划档位 |
| Devin | $20 / $200 | Teams $80 起 / Enterprise | credits / ACU | 从独立 AI 软件工程师转向标准企业 seat + compute |

### 观察

Coding Agent 已经验证三件事：

1. 用户愿意为 Agent 支付远高于传统 IDE 的月费；
2. 重度用户成本差异巨大，固定 request 计费很难维持；
3. Git / test / CI 让 ROI 与失败成本更容易测量。

Cursor 官方文档给出的典型消费已经把这一点写得很直白：daily Agent users 常见总使用约 $60—100/月，多 Agent / automation power users 经常超过 $200/月。

---

## 三、企业业务 Agent：从“买席位”到“买动作”

| 产品 | 基础计价 | 价值单位 | 典型场景 |
|---|---|---|---|
| Salesforce Agentforce | Flex Credits / conversations / add-on seat | action、conversation | CRM 更新、客服解决、销售动作 |
| Microsoft Copilot Studio | Copilot Credits / PAYG | answer、agent action、grounding、voice | M365 内部流程与外部客户渠道 |
| Workday Sana Agents | Flex Credits | agent / platform innovation usage | HR、finance、talent workflows |
| SAP Joule Agents | Premium AI commercial model | **agent action** | HR、finance、service / ERP workflow |
| ServiceNow AI Agents | product tier / license | workflow / AI specialist / agentic outcome | ITSM、customer service、HR、CRM |
| Oracle Fusion Agentic Applications | Fusion Cloud commercial stack | workflow / application entitlement | ERP / HCM / SCM business objects、approvals、audit |
| IBM watsonx Orchestrate | Essentials / Standard / cloud credits | capacity / orchestration usage | cross-system agent orchestration、catalog、governance |

### 观察

企业 Agent 厂商正在尝试三种锚点：

- **席位 / 产品层级**：沿用 SaaS；
- **credits / capacity**：覆盖变化巨大的推理和执行成本；
- **action / conversation / outcome**：尽量接近业务价值。

SAP 明确写“agents are Premium AI capabilities, charged based on agent actions”，Salesforce 同样按 action / conversation 计费。传统企业软件正在把“数字劳工”从营销词推进到 billing meter。

---

## 四、Agent 基础设施：云厂商已经开始卖“运行一个 Agent 的每个零件”

### AWS AgentCore

| 资源 | 当前公开价格示例 |
|---|---:|
| Runtime / Browser / Code Interpreter CPU | $0.0895 / vCPU-hour |
| Runtime memory | $0.00945 / GB-hour |
| Web Search | $7 / 1000 queries |
| Gateway API invocation | $0.005 / 1000 |
| Gateway search API | $0.025 / 1000 |
| Identity token / API key request | $0.010 / 1000 |
| Short-term memory new event | $0.25 / 1000 |
| Long-term memory retrieval | $0.50 / 1000 |

### Google Gemini Enterprise Agent Platform

| 资源 | 当前计价方向 |
|---|---|
| Agent Compute | 约 $0.085 / vCPU-hour（有免费层） |
| Agent Storage | GiB-month |
| Gateway | request / compute |
| Memory Bank | storage + read/write + model token |
| Sessions | storage + operations |
| Skill Registry | storage + operations + vulnerability analysis tokens |
| Semantic Governance | policy evaluation / model tokens |

### 观察

Agent cloud pricing 已经和普通云基础设施非常相似，但增加了模型推理、memory generation、tool calls 与 policy evaluation。这表明 Agent 正成为一种独立 workload，而不是“聊天 API 的一个参数”。

---

## 五、商业成熟度不能只看用户数

| 指标 | 为什么重要 |
|---|---|
| Paid seats | 证明组织愿意持续购买入口 |
| Agent usage / credits | 证明用户真的让 Agent 执行工作，而非只开通许可 |
| Task success rate | 决定 Agent 能否减少返工 |
| Human intervention rate | 直接影响真实劳动节省 |
| Cost per successful task | Agent 时代最关键的综合成本 |
| Enterprise retention | 判断 Agent 是实验预算还是稳定生产工具 |
| Security / incident rate | 决定保险、合规和采购成本 |
| Gross margin after inference/tools | 决定产品商业模式是否真正可持续 |

单看“有多少企业客户”“有多少 seats”会高估 Agent 成熟度。很多公司已经购买 AI 产品，但真正 autonomous action 的使用比例可能远低于聊天、总结和搜索。

---

## 六、几个 2026 年可见的商业化信号

- **Cursor**：Reuters 2026-06 报道其 annualized B2B revenue 约 **26 亿美元**，说明 coding Agent 已可形成十亿美元级企业市场。
- **Devin**：官网宣称 **100 万+用户、4000+ Enterprise customers**。
- **Microsoft 365 Copilot**：Reuters 2026-07 报道付费席位超过 **3000 万**；这些不等于全部在使用 Agent，但构成企业 Agent 的巨大分发入口。
- **Workday**：2026 Q2 超过一半新客户购买至少一个 AI offering，说明传统 SaaS 正把 Agent / AI 变成 upsell。
- **ServiceNow**：2026 年继续扩展 Agent marketplace / partner program，并把 Otto、AI Agent Orchestrator、AI Control Tower 和 Autonomous Workforce 置于同一平台战略。
- **金融业**：Reuters 2026-07 报道超过一半受访银行正在测试 agentic AI，部分机构已把 Agent 当成有账号、经理和职责的“digital employee”管理。
- **保险业**：2026-08 网络保险公司开始修改 policy wording 应对 Agent 在合法授权下自主造成网络损害的责任问题。

这些信号共同说明：Agent 已经进入采购、预算、合作伙伴市场、组织设计和保险，而不只是技术演示。

---

## 七、仍然没有被证明的商业命题

以下说法截至 2026 年仍不能当作已经成立的事实：

- “Agent 会大规模替代绝大多数白领岗位”；
- “买了 Agent seat 就一定提高生产率”；
- “多 Agent 一定比单 Agent 更划算”；
- “成功率提高几个 benchmark 点就能覆盖推理成本”；
- “企业愿意把高风险动作完全无人化”。

Meta Project OT 的波折提醒行业：把 Agent 直接写进组织裁员计划，比把 Agent 写进软件工作流困难得多。

因此商业史必须同时记录**收入增长**和**部署失败**。

---

## 资料来源

详见《志·Agent 产品与商业化》脚注及 `sources/志/Agent产品与商业化/index.json`。本表的“第二圈”来源对应 source bank refs 34—40。

*2026-08 补订：GPT-5.6 Sol（OpenAI）。*