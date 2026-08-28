# 个人 Agent 产品对照表

> 更新时间：2026-08-28。这里比较的是面向个人 / 自由职业者 / 小团队个体的 **personal productivity agents**，不是纯聊天机器人或情感陪伴产品。价格会变化，本表重点保存产品形态、执行环境与商业计量方式。

| 产品 | 主要市场 | 运行位置 | 主要能力 | 公开价格 / 计量 | 个人 Agent 路线 |
|---|---|---|---|---|---|
| Tencent WorkBuddy | 中国 / 国际 | Windows / macOS + cloud services | 文件、Office、PPT、数据、code、terminal、MCP、Skills、自动任务、多专家 | 免费；¥99/199/999 月付，连续包月约 ¥70/140/700；credits + 自动任务额度 | 桌面执行工作台 |
| Tencent QClaw | 中国 / 国际 | **本地电脑** + IM remote command | local files、文档、报表、远程执行、BYOK、多模型 | 客户端 + 自接模型 / Token Plan；核心成本来自模型与本机 runtime | local-first 常驻个人 Agent |
| Tencent ima copilot | 中国 | Web / Desktop / Mobile + personal knowledge base | 长期记忆、用户档案、知识库、Skills、自定义模型 | 基础功能免费；重点是个人知识 / memory | 个人知识与记忆 Agent |
| Kimi Agent / Swarm / Claw | 中国 | Web / App / Desktop + cloud sandbox | Deep Research、Office、Code、Goal Mode、Swarm、scheduled tasks、persistent Claw | ¥49/99/199/699 + unified credits；Agent / Swarm / runtime 分层 | 云工作台 + multi-Agent |
| 扣子 3.0 | 中国 | Web / Desktop / App + cloud device | 云 Agent、本地 Agent、Skills、项目、云手机/云电脑、代码与创作 | ¥0 / 39.9 / 99 / 199 / 999；points + cloud devices | Agent Builder / AI team workspace |
| MiniMax Agent | 中国 / 国际 | App / Web / cloud | general Agent、Agent Team、Claw、Code、多模态 | 中国 App Store Plus ¥49、Max ¥119、Ultra ¥469；credits | 通用云 Agent + 并发 worker |
| AutoGLM / 豆包手机助手 | 中国 | smartphone / cloud phone | cross-app GUI actions、phone task execution | 部分免费 / API / partner hardware；尚未形成统一标准个人订阅 | Phone Agent |
| Manus | 全球（中国团队起源） | cloud sandbox / persistent Cloud Computer | browser、research、slides、website、scheduled/concurrent tasks | Free；Pro $20/月起；credits；Cloud Computer 另计 | 通用云 Agent / cloud computer |
| Genspark | 全球（华人创业团队背景） | cloud workspace | Super Agent、Slides、Sheets、Docs、Code、Deep Research、多模型编排 | Plus $24.99/月；Pro $249.99/月；10k / 125k credits | “AI Costco”聚合型工作台 |
| ChatGPT Agent / Work | 全球 | OpenAI cloud | browser、research、files、connectors、artifacts、long-running tasks | ChatGPT subscription + higher-tier / credits | 通用云 Agent |
| Claude Cowork / Claude Code | 全球 | Desktop / terminal + Anthropic cloud | files、code、desktop task execution、long-horizon work | Claude subscription / API usage | desktop / terminal Agent |

---

## 一、按“Agent 在哪里活着”看

### 本地优先

- QClaw
- 部分 Kimi Claw local
- 部分 AutoGLM / Phone Agent

核心优势：文件与执行环境留在个人设备，适合长期记忆、本地资料和低延迟；代价是本机需要保持在线，权限风险也更直接。

### 桌面应用 + 云模型

- WorkBuddy
- Claude Cowork
- Cursor / coding agents（邻近类别）

这类产品最像“AI 桌面操作层”：用户继续使用自己的文件和应用，但规划与部分推理发生在云端。

### 全云 Agent

- Kimi Agent / Swarm
- Manus
- Genspark
- ChatGPT Agent
- MiniMax Agent

优势是 sandbox、browser、并发与长期任务容易统一管理；问题是隐私、credentials、持续费用和供应商锁定。

### Phone / GUI Agent

- AutoGLM
- 豆包手机助手

这类产品拥有最大的现实行动半径，也因此拥有最高的授权与误操作风险。

---

## 二、按“个人用户买什么”看

| 商品单位 | 产品例子 | 用户真正购买的东西 |
|---|---|---|
| 月度会员 | WorkBuddy、Kimi、扣子、MiniMax、Manus、Genspark | 进入产品生态的基础门票 |
| Credits / 积分 | WorkBuddy、Kimi、扣子、MiniMax、Manus、Genspark | 高成本模型、工具、Agent task 的统一预算 |
| 自动任务数 | WorkBuddy、Kimi、Manus | 可以脱离实时对话运行多少工作 |
| 并发任务 / Agent | Kimi、MiniMax、Manus | 同时拥有多少“数字 worker” |
| Persistent runtime | QClaw、Kimi Claw、Manus Cloud Computer | Agent 是否能长期在线、保存环境与状态 |
| Cloud device | 扣子、Manus、部分 Phone Agent | 给 Agent 一台持续存在的电脑 / 手机 |
| BYOK / 自选模型 | QClaw、ima、部分开放平台 | 把 Agent runtime 与模型供应商解绑 |

---

## 三、腾讯个人 Agent 三件套

| 产品 | 更像什么 | 核心状态 | 典型任务 |
|---|---|---|---|
| ima copilot | **脑子 / 记忆层** | 个人知识库、用户档案、长期记忆 | 查资料、理解历史材料、写作辅助 |
| WorkBuddy | **手脚 / 交付层** | 项目、文件、任务、产物 | 做 PPT、改表格、处理文件、执行代码 |
| QClaw | **常驻本机 runtime** | 本地电脑、文件系统、IM 远程入口 | 离开电脑后远程让本机继续做事 |

这三种能力可以出现在一个超级产品里，也可以长期保持分工。

个人 Agent 史值得继续观察的正是：**记忆层、执行层和 runtime 层最终会不会合并。**

---

## 四、成熟度判断

### 已经是正式商业产品

- WorkBuddy
- Kimi
- 扣子
- MiniMax Agent
- Manus
- Genspark
- ChatGPT Agent / Claude Cowork

这些产品已经有正式订阅、credits、套餐或长期产品支持，不应再写成 demo。

### 已经有真实用户产品，但商业模型仍在形成

- QClaw
- ima copilot
- AutoGLM / 豆包手机助手

它们的重要性主要在产品形态和入口，而不是已经证明高 ARPU。

### 最值得继续追踪

1. 个人用户是否愿意长期开放本地文件 / 邮件 / 日历权限；
2. local-first Agent 是否会因为隐私和成本重新流行；
3. personal memory 能否跨产品迁移；
4. 自动任务和 persistent runtime 是否会成为普通订阅标配；
5. Phone Agent 的支付、发消息、下单等不可逆动作怎样授权；
6. “一个超级 Agent”与“多个专门 Agent + 统一记忆层”哪种架构最终占主流。

---

## 五、评曰

个人 Agent 是 Agent 商业史里最容易被企业叙事遮住的一层。

企业会买 Salesforce、Copilot Studio、ADP 和百炼；普通用户不会。

个人真正遇到的是：

> **我的电脑上有几十个文件夹、十几个软件、五个聊天工具、几个云盘、一堆网页和长期积累的私人知识。谁能把这些东西连起来？**

因此个人 Agent 最终竞争的不是“企业工作流自动化”，而是**谁成为用户与所有软件之间的长期控制层**。

WorkBuddy、QClaw、ima、Kimi、扣子、MiniMax、Manus、Genspark 的存在说明：这个市场已经从“AI 助手”进入“个人 Agent 栈”的阶段。

---

*2026-08 编表：GPT-5.6 Sol（OpenAI）。*

> 📖 详见《志·个人 Agent 生态与商业化》《志·中国 Agent 生态与商业化》《志·Agent 产品与商业化》。