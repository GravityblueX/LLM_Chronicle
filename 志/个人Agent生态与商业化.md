# 《个人 Agent 生态与商业化》

> 企业 Agent 解决的是组织怎样把任务交给机器；个人 Agent 解决的则是一个更贴近日常的问题：**一个普通人愿意把自己的文件、浏览器、知识库、电脑、手机、日程、邮件和长期任务交给 AI 到什么程度？**
>
> 到 2026 年，个人 Agent 已经不再等同于“聊天机器人 Pro 版”。OpenClaw / QClaw、WorkBuddy、ima copilot、Kimi、扣子、MiniMax Agent、AutoGLM、Manus、Genspark、ChatGPT Agent 与 Claude Cowork 等产品正在形成不同形态：有的负责记忆，有的负责操作本地电脑，有的拥有云沙箱，有的同时调度多个子 Agent，有的则把几十种模型和 Agent 包进统一订阅。
>
> 但本篇按《凡例 v2.2》特别提醒：**厂商列出的功能，不等于这些功能在所有真实任务里都稳定可用。** “支持生成 PPT”“可自动操作文件”“全程自主执行”首先是产品能力声明；真正成熟度还要看重复成功率、人工接管、耗时、成本和错误后的恢复。

---

## 一、先定义：本篇写的是“个人生产力 Agent”，不是 AI 陪伴角色

个人 AI 产品至少可以分成两类：

1. **陪伴 / 人格型 AI**：重点是关系、情绪、角色连续性；
2. **个人生产力 Agent**：重点是文件、工具、任务、记忆、自动化与可交付结果。

本篇主要记录第二类。

一个产品只会聊天、搜索或总结，并不足以进入这里。至少应具备以下若干特征：

- 能接受完整任务而不只是回答一个问题；
- 能读写文件、网页、知识库、代码或 App；
- 能在多步骤中观察结果并继续执行；
- 有持久记忆、项目、workspace、scheduled task 或长期状态；
- 能操作本地电脑、云电脑、浏览器或手机；
- 能把“运行多少任务、多少 Agent、多少自动化”商品化。

个人 Agent 的真正边界不是“说话像不像人”，而是：

> **它能替你改变多少现实的软件状态。**

而个人 Agent 的真正成熟度也不是“功能页写了多少”，而是：

> **这些状态变化能不能稳定、可控、低成本地重复完成。**

---

## 二、2026 年个人 Agent 已经分成六种形态

| 形态 | 代表产品 | 用户真正买的东西 |
|---|---|---|
| 桌面执行 Agent | WorkBuddy、Claude Cowork | 本地文件、Office、网页、代码与交付物的执行能力 |
| 本地常驻 Agent | OpenClaw / QClaw、Kimi Claw（本地形态） | 一台始终属于自己的 Agent runtime，可通过 IM 远程下令 |
| 个人知识 / 记忆 Agent | ima copilot | 长期记忆、个人知识库、偏好与持续上下文 |
| 云工作台 / 多 Agent | Kimi、MiniMax Agent、Manus、ChatGPT Agent | 云 sandbox、研究、浏览器、项目、并行任务与自动化 |
| Agent Builder / 创作工作台 | 扣子、Genspark | 自己组 Agent、云设备、内容 / 代码 / 网页等多类制品 |
| Phone / GUI Agent | AutoGLM、豆包手机助手 | 直接操作没有标准 API 的手机 App 与人类界面 |

这六类经常重叠，但解决的问题不同。

因此“哪个个人 Agent 最强”本身不是一个好问题。更有意义的是问：

> **你的工作状态放在哪里？Agent 的手伸到哪里？它是否常驻？失败以后能不能恢复？同一任务重做一次还会成功吗？**

---

## 三、OpenClaw / QClaw：个人 Agent 的大众想象先从“我的机器”开始

OpenClaw 的技术前史并不晚于 ReAct、AutoGPT、Devin 或 Computer Use；但它在 2026 年中国的特殊意义，是把个人 Agent 的形态浓缩成一句非常直观的话：

> **Your assistant. Your machine. Your rules.**[^21]

用户自己决定模型、API Key、workspace、消息入口和长期运行机器。到了 2026 年 3 月，中国“养龙虾”热潮把这种极客结构大众化；QClaw、DuClaw、ArkClaw 等产品又进一步把安装、托管和消息连接变成消费产品。

QClaw 的商业价值因此未必是创造了新 Agent 算法，而是：

> **让普通用户不必理解 Node、gateway、Skill 配置，也能拥有一个可从微信 / IM 远程下令的本机 Agent。**

这条路线的优势是用户更容易控制文件位置和机器；风险则来自 OpenClaw 本身的高权限结构：shell、文件、credentials、Skills 与长期 daemon 一旦配置不当，错误会直接改变用户电脑状态。

所以“本地运行”不能和“天然安全”画等号。

> 📖 OpenClaw 在中国的完整扩散史见《志·OpenClaw 与中国 Agent“龙虾潮”》。

---

## 四、WorkBuddy：个人 Agent 从“回答”变成桌面工作台

### 4.1 日期要分两个口径：3 月 4 日版本记录，3 月 9 日公开发布

WorkBuddy 早先很容易被写成“2026-03-04 正式发布”，但更严谨的史料口径应拆开：

- **2026-03-04**：腾讯官方更新日志出现 WorkBuddy 4.5.0 的首个公开版本记录；[^1]
- **2026-03-09**：腾讯云 Techpedia、同期报道把这一天作为对外正式 / 公测发布节点。[^22]

因此本书以后统一写：

> **3 月 4 日已有公开版本记录；3 月 9 日进入对外正式 / 公测发布。**

这也说明产品“第一次有版本”“媒体发布日”“GA 商业化日”并不总是同一个日期。

### 4.2 WorkBuddy 不是简单的 OpenClaw fork

WorkBuddy 经常被媒体简称为“腾讯版 OpenClaw”。如果只描述市场位置，这个比喻可以理解；如果描述代码 / 产品来源，则不够准确。

腾讯开发者资料把 QClaw 与 WorkBuddy 分开：QClaw 更接近 OpenClaw 产品化；WorkBuddy 则来自 CodeBuddy 系列自研 Agent 架构，同时兼容 OpenClaw Skills / MCP / Claw 的一部分使用习惯。[^23]

因此更准确的是：

> **WorkBuddy 是 OpenClaw 浪潮里的自研办公 Agent，而不是 OpenClaw 套壳。**

### 4.3 官方能力：文件、Office、代码、terminal、自动任务与交付物

WorkBuddy 官方版本与产品资料列出：[^1][^2][^3][^4]

- 多模型切换；
- workspace / project；
- Skills；
- 文件读写；
- terminal command execution；
- Office / 文档 / 表格 / PPT；
- 产物管理；
- 长期记忆；
- 自动任务；
- MCP / Plugins / Connectors；
- 腾讯文档集成；
- 子 Agent sandbox；
- 桌面、移动端、小程序与 IM 入口。

腾讯把它描述为：用户给自然语言目标，系统自主拆解、规划、执行，最终交付 Word、Excel、PPT、图表等工作结果。[^4]

按 v2.2 凡例，这里应写成：

> **“官方称支持上述工作流与制品交付。”**

而不是未经验证就写：

> “WorkBuddy 可以稳定无人值守完成这些任务。”

真实体验会受文件结构、权限、网络、Office 格式、外部服务、模型随机性和任务本身歧义影响。腾讯社区的用户实测也呈现明显场景差异：有人认为 QClaw 更适合简单个人办公，有人更看重 OpenClaw 自定义自由度，WorkBuddy 则偏标准化办公 / 团队工作；这些经验只能作为**有限样本的社区实测**，不能变成总体胜负结论。[^23][^24]

### 4.4 价格：个人 Agent 形成“免费 → 高频 → 重度”梯度

WorkBuddy 当前国内个人版公开价格为：[^5]

| 版本 | 普通月付 | 连续包月 | 基础积分 / 月 | 典型定位 |
|---|---:|---:|---:|---|
| 体验版 | 免费 | — | 500 | 体验 Agent 办公 |
| 标准版 | ¥99 | ¥70 | 2,000 | 日常高频办公 |
| 高级版 | ¥199 | ¥140 | 4,000 | 个人进阶用户 |
| 旗舰版 | ¥999 | ¥700 | 20,000 | 重度个人 Agent 用户 |

官方说明 WorkBuddy 与 CodeBuddy 共用账号积分池。[^5]

套餐还以自动任务数量分层。[^6]

这说明消费者买的已经不只是“聊天会员”，而是：

> **智能 credits + 自动任务额度 + 文件 / 代码 / 制品执行预算。**

---

## 五、腾讯个人 Agent 矩阵：ima 是记忆，WorkBuddy 是执行，QClaw 是常驻 runtime

**2026-06-05**，腾讯在 AI 产业应用大会把 **QClaw、WorkBuddy、元宝、ima、腾讯文档**列为面向个人用户的 AI 生产力工具集，同时另行推出 WorkBuddy 企业版、ClawPro 与 ADP 等企业产品。[^7]

这说明腾讯自己也没有把“个人 Agent”收敛成一个超级 App。

### 5.1 WorkBuddy：手脚 / 交付层

中心是文件、Office、网页、code、project、artifact、自动任务。

### 5.2 QClaw：常驻本机 runtime

腾讯 **2026-04-21** 推出 QClaw 国际 beta。[^8]

QClaw 强调 Windows / macOS 本地部署、模型切换 / BYOK、从手机 IM 远程下令，以及在用户自己的机器完成文件 / 软件任务。[^8][^9]

产品意义是：

> **把自己的电脑变成一个长期在线、可以远程召唤的 Agent node。**

### 5.3 ima copilot：脑子 / 长期记忆层

腾讯 ima 在 **2026-04-29** 推出知识 Agent `copilot`，并于 **2026-05-25**全面开放。[^10]

其重点是用户档案、长期记忆、个人知识库、偏好与 Skills，而不是高权限电脑操作。

腾讯云社区用户用一句很形象的话概括二者：ima 负责“想”，WorkBuddy 负责“做”。[^11]

这是社区经验，不是官方架构定义，但确实揭示了一种可能的个人 Agent 分层：

> **memory / knowledge 与 execution / permissions 未必应该由同一个产品无限合并。**

---

## 六、Kimi：把个人 Agent 的“工作量”直接写进会员权益

Kimi 当前会员公开把 Agent / Swarm / 并发能力直接商品化：[^12][^13]

| 套餐 | 月费 | Agent 相关权益（官方口径） |
|---|---:|---|
| Andante | ¥49 | 约 30 次 Agent；scheduled tasks；Kimi Code |
| Moderato | ¥99 | 约 60 次 Agent；并行任务；Agent Swarm 配额 |
| Allegretto | ¥199 | 更高 Agent / Swarm 配额；Goal Mode；Kimi Claw |
| Allegro | ¥699 | 更高并行 Agent / 子任务、长期项目和存储额度 |

Agent、Deep Research、PPT、Docs、Sheets、Code、Work、Claw 等共享 credit pool，Kimi Claw 的持续在线云主机也会消耗 credits。[^12][^13]

因此用户购买的是：

> **任务数量 + 并发工作 + 模型计算 + persistent runtime。**

但“更多 Swarm”不自动等于更高 ROI。Multi-Agent 会提高总 token / runtime，只有任务可并行且协调成本足够低时，wall-clock 优势才可能转化为真实价值。

---

## 七、扣子：Agent Builder + 云设备 + 个人创作环境

扣子 3.0 的个人套餐同时出售 points、云设备、云端 / 本地 Agent、项目与创作工具。[^14]

它更接近：

> **AI 创作软件 + Agent Builder + cloud device + credits。**

云手机 / 云电脑尤其说明，个人 Agent 的成本开始包含“保持一台执行环境在线”的费用，而不是只有模型 token。

这类功能同样需要看真实限制：网络、第三方 App 登录、验证码、云设备时延和运行时资源，都可能让“支持云设备”与“稳定完成任务”产生差距。

---

## 八、MiniMax Agent：订阅 + credits + 并发执行

MiniMax 在中国 App Store 直接以 **“通用 AI Agent”**定位产品，并提供 Plus / Max / Ultra 等会员和额外 credits。[^15][^16]

这说明个人 Agent 正在复制成熟互联网产品的商业结构：

> **月卡 + 资源包 + 更高并发 / 高峰优先级 + 高级功能。**

不过会员收入或 MiniMax 公司总收入不能全部归因于 Agent；语音、视频、模型 API 等业务必须分开理解。

---

## 九、Phone Agent：最接近生活，也最需要人工边界

AutoGLM、豆包手机助手等 Phone Agent 面对的是微信、淘宝、美团、12306、滴滴、小红书、银行和生活服务 App。

它们如果成熟，理论上能把：

> 搜索 → 选择 → 填表 → 下单 → 支付前确认 → 状态追踪

串起来。

但 Phone Agent 的可靠性不能由一次演示证明。现实边界包括：

- 登录 / 二次认证；
- 验证码 / 扫码；
- App UI 更新；
- 弹窗与广告；
- 支付确认；
- 风控；
- 错误订单或消息撤回。

所以本书仍将 Phone Agent 写成**高潜力、高权限、可靠性尚需长期证明**的路线，而不是“手机已经可以完全交给 AI”。

---

## 十、Manus 与 Genspark：Cloud Computer 和“AI Costco”

### Manus

Manus 的个人商业模式从 Free 到 Pro，用 credits、并发任务、scheduled tasks 与 persistent **Cloud Computer** 分层。[^17][^18]

用户购买的不是一个回答，而是一段可以长期存在的云端任务容量。

### Genspark

Genspark 把自己宣传为 **“AI Costco”**：一个订阅聚合前沿模型、Super Agent、Deep Research、Slides、Sheets、Docs、Code 与多媒体工具。[^19][^20]

这种模式说明个人 Agent 市场还可能出现“AI 总包商”：用户不关心底层到底是哪家模型，而购买一个负责路由与组合多个模型 / Agent 的工作层。

同样，聚合“几十个 Agent / 模型”只是供给广度；是否省时间还要看任务路由、结果质量和 credit 消耗。

---

## 十一、宣传页和真实使用之间，个人 Agent 特别容易出现落差

个人 Agent 的 demo 往往非常漂亮：一句话生成 PPT、整理整个文件夹、自动发邮件、跨 App 完成流程。

但真实世界需要的是：

> **同一件事重复做，仍然大致成功。**

2026 年 Computer-Use Agent 研究显示，同一 task / model 在重复执行时可能一次成功、下一次失败；可靠性受随机性、任务歧义和行为变化影响。[^25]

OpenClaw 在中国的真实用户采访也出现过**token 成本高、执行结果不理想、投入回报偏低**的抱怨。[^26]

因此个人 Agent 至少应同时记录：

| 维度 | 需要问什么 |
|---|---|
| Claimed capability | 厂商说支持什么？ |
| Availability | GA / beta / 邀测 / demo？ |
| Repeat reliability | 同一任务重复十次怎样？ |
| Intervention | 登录、验证码、确认、失败时要救几次？ |
| Latency | Agent 完成到底多久？ |
| Cost | token + runtime + tool + cloud device 总成本？ |
| Recovery | 中断 / 做错以后能否 resume / rollback？ |
| Trust | 用户是否敢把邮件、文件、账号和支付前流程交出去？ |

这比一个静态 benchmark 更接近普通人的实际体验。

---

## 十二、个人 Agent 的商业单位：从会员走向 persistent runtime

2026 年已经能看到四层商品：

1. **Seat / 月度会员**：WorkBuddy、Kimi、扣子、MiniMax、Manus、Genspark；
2. **Credits / 积分**：控制高成本模型、Agent 与制品生成；
3. **Task / automation / concurrency**：自动任务、Swarm、并发 worker、scheduled jobs；
4. **Runtime**：QClaw 本机 daemon、Kimi Claw、Manus Cloud Computer、Coze cloud devices。

因此个人 Agent 的商业演化可以写成：

> **聊天会员 → 智能额度 → 自动任务 → 并发 worker → persistent runtime。**

这也意味着用户未来买的可能不是“一个 AI App”，而是一段属于自己的持续计算 / 执行能力。

---

## 十三、为什么个人 Agent 可能比企业 Agent 更难

企业至少常有 IT 管理员、组织账号、权限体系、SOP、审批和日志。

个人电脑却混着：

- 私人照片；
- 工作文件；
- cookies；
- SSH key；
- 邮件；
- 微信；
- 网盘；
- 银行网页；
- 家庭资料。

所以个人 Agent 最难的问题不是“有没有 shell”，而是：

> **在没有管理员替用户划权限边界的情况下，怎样既让 Agent 真能做事，又不让它拥有一把万能钥匙。**

这正是 local-first、授权文件夹、credential isolation、sandbox、确认边界和 audit 为什么会成为 C 端竞争核心。

---

## 十四、评曰：个人 Agent 争夺的是用户和所有软件之间的控制层

传统 OS 管：

> 进程、文件、窗口、硬件。

个人 Agent 开始试图管：

> **目标、上下文、记忆、工具选择、任务生命周期和自动执行。**

WorkBuddy、QClaw、ima、Kimi、扣子、MiniMax、Manus、Genspark 看起来差异很大，但都在争同一个位置：

> **谁成为用户数字生活里那个长期存在、知道你要做什么、并能替你跨应用推进工作的中间层。**

OpenClaw 的“养龙虾”浪潮让这个想象第一次在普通用户中大规模传播，但它也把另一半问题同时摆出来：

> **一个 Agent 声称会做多少事，并不重要；重要的是它能否以可接受的成本和风险，长期、重复地把用户真正需要的事情做完。**

如果未来个人 Agent 真成为“第二操作系统层”，决定胜负的不会只是模型 benchmark。

更可能是：

> **可靠性 × 权限设计 × 记忆 × 任务成本 × 用户信任。**

---

*2026-08 补订：GPT-5.6 Sol（OpenAI）。*

> 📖 详见《志·OpenClaw 与中国 Agent“龙虾潮”》《志·AI Agent 生态》《志·Agent 产品与商业化》《志·中国 Agent 生态与商业化》《表·个人 Agent 产品对照表》。

---

[^1]: Tencent WorkBuddy release notes / changelog, first public 4.5.0 record, 2026-03-04. https://cloud.tencent.com/document/product/1831/134324
[^2]: Tencent WorkBuddy Changelog / later updates. https://www.workbuddy.cn/docs/workbuddy/Changelog
[^3]: WorkBuddy, “AI Agent 办公新范式”. https://www.workbuddy.cn/work/
[^4]: Tencent Cloud, WorkBuddy product page. https://cloud.tencent.com/product/workbuddy
[^5]: Tencent WorkBuddy Docs, Pricing. https://www.workbuddy.cn/docs/workbuddy/Pricing
[^6]: WorkBuddy home / pricing. https://www.workbuddy.cn/home
[^7]: Tencent, “腾讯云首发效率智能体工具集，构建面向多元人群的AI生产力入口”, 2026-06-05. https://www.tencent.com/zh-cn/tencent-cloud-debuts-productivity-agent-suite-creating-a-new-gateway-to-ai-for-users-and-enterprises/
[^8]: Tencent, QClaw international beta, 2026-04-21. https://www.tencent.com/zh-cn/%E8%85%BE%E8%AE%AF%E6%8E%A8%E5%87%BAqclaw%E6%B5%B7%E5%A4%96%E7%89%88%EF%BC%8C%E9%99%8D%E4%BD%8Eai%E6%99%BA%E8%83%BD%E4%BD%93%E9%83%A8%E7%BD%B2%E9%97%A8%E6%A7%9B/
[^9]: Tencent Cloud Docs, QClaw. https://intl.cloud.tencent.com/zh/document/product/1300/81043
[^10]: Tencent Cloud Developer, ima copilot knowledge Agent. https://cloud.tencent.com/developer/techpedia/2613/20569
[^11]: Tencent Cloud Developer Community, “左手脑子，右手手脚——我的 IMA Copilot 与 WorkBuddy 联用实战”, 2026-07-15. https://cloud.tencent.com/developer/article/2709666
[^12]: Kimi Help Center, membership pricing. https://www.kimi.com/help/membership/membership-pricing
[^13]: Kimi Help Center, Agent Credits and Billing Rules. https://www.kimi.com/en/help/agent/agent-quota-and-billing
[^14]: Coze Docs, subscription plans. https://docs.coze.cn/guides_edition
[^15]: Apple App Store China, “MiniMax - 通用AI Agent”. https://apps.apple.com/cn/app/minimax-%E9%80%9A%E7%94%A8ai-agent/id6446482834
[^16]: MiniMax Agent, subscription / credit rules. https://agent.minimax.io/doc/en/credit-rules.html
[^17]: Manus Help Center, membership pricing, 2026-03-16. https://help.manus.im/en/articles/11711111-what-is-the-current-membership-pricing-for-manus
[^18]: Manus Help Center, Cloud Computer plans, 2026-06-05. https://help.manus.im/en/articles/15392078-understanding-cloud-computer-plans-and-billing
[^19]: Genspark, Membership Benefits. https://www.genspark.ai/zh-cn/membership-benefits-lp
[^20]: Genspark Help Center, Membership Plans. https://www.genspark.ai/helpcenter/membership-plans
[^21]: OpenClaw official lore. https://docs.openclaw.ai/lore
[^22]: Tencent Cloud Techpedia, WorkBuddy public launch record, 2026-03-09. https://cloud.tencent.com/developer/techpedia/2610
[^23]: Tencent Cloud Developer Community, QClaw / WorkBuddy architecture and positioning. https://developer.cloud.tencent.com/article/2646434
[^24]: Tencent Cloud Developer Community, multi-day QClaw / WorkBuddy user test. https://developer.cloud.tencent.com/article/2687513
[^25]: Gonzalez-Pumariega et al., “On the Reliability of Computer Use Agents”, arXiv:2604.17849. https://arxiv.org/abs/2604.17849
[^26]: Reuters, “As OpenClaw enthusiasm grips China, schoolkids and retirees alike raise ‘lobsters’”, 2026-03-19. https://www.reuters.com/technology/openclaw-enthusiasm-grips-china-schoolkids-retirees-alike-raise-lobsters-2026-03-19/
