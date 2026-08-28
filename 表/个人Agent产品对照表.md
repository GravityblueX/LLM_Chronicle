# 个人 Agent 产品对照表

> 更新时间：2026-08-28。这里比较的是面向个人 / 自由职业者 / 小团队个体的 **personal productivity agents**，不是纯聊天机器人或情感陪伴产品。
>
> 重要：**“官方称支持某能力”不等于“该能力已被证明可以稳定重复完成”。** 本表新增“产品状态 / 已知边界”一栏，避免把发布会、功能列表和单次 demo 直接写成生产可靠性事实。

| 产品 | 主要市场 | 运行位置 | 官方 / 产品层能力 | 公开价格 / 计量 | 产品状态 / 已知边界 | 个人 Agent 路线 |
|---|---|---|---|---|---|---|
| Tencent WorkBuddy | 中国 / 国际 | Windows / macOS + cloud services | 文件、Office、PPT、数据、code、terminal、MCP、Skills、自动任务、多专家 | 免费；¥99/199/999 月付，连续包月约 ¥70/140/700；credits + 自动任务额度 | 2026-03-04 有公开 4.5.0“正式发布”记录；3—6 月 changelog 持续修复任务卡死、历史丢失、队列、sandbox 恢复、BOT/权限等问题，说明产品真实但可靠性工程仍快速变化 | 桌面执行工作台 |
| Tencent QClaw | 中国 / 国际 | **本地电脑** + IM remote command | OpenClaw 产品化、本地文件、远程执行、BYOK、多模型 | 客户端 + 自接模型 / Token Plan；核心成本来自模型与本机 runtime | beta / 快速演进；降低部署门槛不等于降低运行复杂性，依赖本机在线、模型/API 和本地环境；公开重复成功率有限 | local-first 常驻个人 Agent |
| Tencent ima copilot | 中国 | Web / Desktop / Mobile + personal knowledge base | 长期记忆、用户档案、知识库、Skills、自定义模型 | 基础功能免费；重点是个人知识 / memory | 重点是记忆 / 知识而非高权限电脑执行；长期记忆质量、迁移性和跨产品一致性仍是开放问题 | 个人知识与记忆 Agent |
| Kimi Agent / Swarm / Claw | 中国 | Web / App / Desktop + cloud sandbox | Deep Research、Office、Code、Goal Mode、Swarm、scheduled tasks、persistent Claw | ¥49/99/199/699 + unified credits；Agent / Swarm / runtime 分层 | Agent / Swarm 已正式商品化；高并发 Agent 的跨任务 ROI、协调错误率和平均人工接管率并未普遍公开，不能把“更多 sub-agent”直接等同于更高生产率 | 云工作台 + multi-Agent |
| 扣子 3.0 | 中国 | Web / Desktop / App + cloud device | 云 Agent、本地 Agent、Skills、项目、云手机/云电脑、代码与创作 | ¥0 / 39.9 / 99 / 199 / 999；points + cloud devices | 商业产品；复杂任务表现依赖 Agent、模型、Skill 与云设备组合，积分 / 云设备成本和配置复杂度是实际体验的一部分 | Agent Builder / AI team workspace |
| MiniMax Agent | 中国 / 国际 | App / Web / cloud | general Agent、Agent Team、Claw、Code、多模态 | 中国 App Store Plus ¥49、Max ¥119、Ultra ¥469；credits | 正式订阅产品；并发 Agent 数被商品化，但并发能力本身不证明任务间无协调开销 | 通用云 Agent + 并发 worker |
| AutoGLM / 豆包手机助手 | 中国 | smartphone / cloud phone | cross-app GUI actions、phone task execution | 部分免费 / API / partner hardware；尚未形成统一标准个人订阅 | AutoGLM 已有真实产品/API；豆包手机助手仍明确带 early exploration 色彩。GUI 受 App 更新、登录、验证码、支付、弹窗和风控影响，必须保留人工确认边界 | Phone Agent |
| WPS 灵犀 / WPS AI | 中国 | WPS desktop / cloud computer | 文档、PPT、长期办公上下文、AI 原生办公助手 | 会员 / 灵点等分层 | 官方社区同时存在 PPT 卡住、云电脑任务错误、连接失败、灵点成本与权益拆分等个案反馈；这些不能代表全部用户，但证明“宣传能力”和“实际可用性/订阅体验”应分栏记录 | Office-native Agent |
| Manus | 全球（中国团队起源） | cloud sandbox / persistent Cloud Computer | browser、research、slides、website、scheduled/concurrent tasks | Free；Pro $20/月起；credits；Cloud Computer 另计 | 商业化明确；云环境降低本地配置难度，但 persistent runtime、并发任务与高成本工作受 credits / cloud capacity 约束 | 通用云 Agent / cloud computer |
| Genspark | 全球（华人创业团队背景） | cloud workspace | Super Agent、Slides、Sheets、Docs、Code、Deep Research、多模型编排 | Plus $24.99/月；Pro $249.99/月；10k / 125k credits | 正式商业产品；聚合多模型 / 多 Agent 减少用户选型成本，但也增加底层供应商、路由和 credits 透明度问题 | “AI Costco”聚合型工作台 |
| ChatGPT Agent / Work | 全球 | OpenAI cloud | browser、research、files、connectors、artifacts、long-running tasks | ChatGPT subscription + higher-tier / credits | 产品成熟度高，但网站状态、权限、人工确认和任务类型仍决定实际成功率；产品存在不等于所有网页工作可以无人化 | 通用云 Agent |
| Claude Cowork / Claude Code | 全球 | Desktop / terminal + Anthropic cloud | files、code、desktop task execution、long-horizon work | Claude subscription / API usage | Coding 场景有 Git/test/CI verifier，知识工作和 computer-use 则更依赖环境；computer-use 研究已显示同任务重复执行存在成功/失败方差 | desktop / terminal Agent |
| OpenClaw 原生 | 全球 / 中国高热度 | local / cloud / IM | shell、files、browser、Skills、长期 workspace、IM remote command、多模型 | 开源软件 + 自有模型/API/机器成本 | 2026 中国“养龙虾”爆发的核心母体；扩展性极强，同时伴随安全配置、token 成本、结果低效和高权限误操作风险 | 开放个人 Agent runtime |

---

## 一、按“Agent 在哪里活着”看

### 本地优先

- OpenClaw
- QClaw
- 部分 Kimi Claw local
- 部分 AutoGLM / Phone Agent

核心优势：文件与执行环境留在个人设备，适合长期记忆、本地资料和低延迟；代价是本机需要保持在线，权限风险也更直接。

### 桌面应用 + 云模型

- WorkBuddy
- Claude Cowork
- WPS 灵犀
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
| 月度会员 | WorkBuddy、Kimi、扣子、MiniMax、WPS、Manus、Genspark | 进入产品生态的基础门票 |
| Credits / 积分 | WorkBuddy、Kimi、扣子、MiniMax、WPS 灵点、Manus、Genspark | 高成本模型、工具、Agent task 的统一预算 |
| 自动任务数 | WorkBuddy、Kimi、Manus | 可以脱离实时对话运行多少工作 |
| 并发任务 / Agent | Kimi、MiniMax、Manus | 同时拥有多少“数字 worker” |
| Persistent runtime | OpenClaw、QClaw、Kimi Claw、Manus Cloud Computer | Agent 是否能长期在线、保存环境与状态 |
| Cloud device | 扣子、Manus、部分 Phone Agent | 给 Agent 一台持续存在的电脑 / 手机 |
| BYOK / 自选模型 | OpenClaw、QClaw、ima、部分开放平台 | 把 Agent runtime 与模型供应商解绑 |

---

## 三、腾讯个人 Agent 三件套

| 产品 | 更像什么 | 核心状态 | 典型任务 | 需要警惕的现实边界 |
|---|---|---|---|---|
| ima copilot | **脑子 / 记忆层** | 个人知识库、用户档案、长期记忆 | 查资料、理解历史材料、写作辅助 | “记住了”需要区分检索到、长期存储和真正正确调用 |
| WorkBuddy | **手脚 / 交付层** | 项目、文件、任务、产物 | 做 PPT、改表格、处理文件、执行代码 | changelog 显示队列、历史、sandbox、权限和连接器都可能成为失败点 |
| QClaw | **常驻本机 runtime** | 本地电脑、文件系统、IM 远程入口 | 离开电脑后远程让本机继续做事 | 本机在线、权限、安全配置与底层模型成本由用户承担更多 |

这三种能力可以出现在一个超级产品里，也可以长期保持分工。

个人 Agent 史值得继续观察的正是：**记忆层、执行层和 runtime 层最终会不会合并。**

---

## 四、不要只写“成熟度”，还要写“可靠性证据”

### 已经是正式商业产品

- WorkBuddy
- Kimi
- 扣子
- MiniMax Agent
- WPS 灵犀 / WPS AI
- Manus
- Genspark
- ChatGPT Agent / Claude Cowork

这说明它们已经是可购买、可持续维护的产品，**不等于所有官方能力都已有独立重复可靠性数据**。

### 已经有真实用户产品，但商业 / 可靠性模型仍在形成

- QClaw
- ima copilot
- AutoGLM / 豆包手机助手
- OpenClaw 各类本地/云端衍生

它们的重要性主要在产品形态和入口，而不是已经证明高 ARPU 或高自动化成功率。

### 可靠性仍应逐项问

1. 同一任务连续运行 10 次成功几次？
2. 允许几次 retry？
3. 失败后会安全停止、回滚，还是留下半完成状态？
4. 需要用户接管几次？
5. 任务总成本是多少？
6. 产品升级 / 页面变化后成功率是否保持？

---

## 五、最值得继续追踪

1. 个人用户是否愿意长期开放本地文件 / 邮件 / 日历权限；
2. local-first Agent 是否会因为隐私和成本重新流行；
3. personal memory 能否跨产品迁移；
4. 自动任务和 persistent runtime 是否会成为普通订阅标配；
5. Phone Agent 的支付、发消息、下单等不可逆动作怎样授权；
6. “一个超级 Agent”与“多个专门 Agent + 统一记忆层”哪种架构最终占主流；
7. 产品是否开始公开 repeated-run reliability、human intervention rate 与 cost per successful task。

---

## 六、评曰

个人 Agent 是 Agent 商业史里最容易被企业叙事遮住、也最容易被宣传视频美化的一层。

企业会买 Salesforce、Copilot Studio、ADP 和百炼；普通用户不会。

个人真正遇到的是：

> **我的电脑上有几十个文件夹、十几个软件、五个聊天工具、几个云盘、一堆网页和长期积累的私人知识。谁能把这些东西连起来？**

而真实产品还必须再回答：

> **它今天做成了，明天还能做成吗？失败时会不会乱改文件、乱发消息、烧掉大量 credits？**

因此个人 Agent 最终竞争的不是“企业工作流自动化”，而是**谁成为用户与所有软件之间的长期控制层，同时又足够稳定、可恢复和可负担。**

WorkBuddy、QClaw、ima、OpenClaw、Kimi、扣子、MiniMax、WPS、Manus、Genspark 的存在说明：这个市场已经从“AI 助手”进入“个人 Agent 栈”的阶段。

---

*2026-08 编表：GPT-5.6 Sol（OpenAI）。*

> 📖 详见《志·个人 Agent 生态与商业化》《志·OpenClaw 与中国 Agent“龙虾潮”》《志·Agent 宣传、实测与可靠性》《表·Agent 产品可靠性观察表》《志·中国 Agent 生态与商业化》。