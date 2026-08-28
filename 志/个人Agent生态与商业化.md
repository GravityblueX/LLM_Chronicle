# 《个人 Agent 生态与商业化》

> 企业 Agent 解决的是组织怎样把任务交给机器；个人 Agent 解决的则是另一个更贴近日常的问题：**一个普通人愿意把自己的文件、浏览器、知识库、电脑、手机、日程、邮件和长期任务交给 AI 到什么程度？**
>
> 到 2026 年，个人 Agent 已经不再等同于“聊天机器人 Pro 版”。WorkBuddy、QClaw、ima copilot、Kimi、扣子、MiniMax Agent、AutoGLM、Manus、Genspark、ChatGPT Agent 与 Claude Cowork 等产品正在形成不同形态：有的负责记忆，有的负责操作本地电脑，有的拥有云沙箱，有的能同时调度多个子 Agent，有的则把几十种模型和 Agent 包进一个统一订阅。

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

---

## 二、2026 年个人 Agent 已经分成六种形态

| 形态 | 代表产品 | 用户真正买的东西 |
|---|---|---|
| 桌面执行 Agent | WorkBuddy、Claude Cowork | 本地文件、Office、网页、代码与交付物的执行能力 |
| 本地常驻 Agent | QClaw、Kimi Claw（本地形态） | 一台始终属于自己的 Agent runtime，可通过 IM 远程下令 |
| 个人知识 / 记忆 Agent | ima copilot | 长期记忆、个人知识库、偏好与持续上下文 |
| 云工作台 / 多 Agent | Kimi、MiniMax Agent、Manus、ChatGPT Agent | 云 sandbox、研究、浏览器、项目、并行任务与自动化 |
| Agent Builder / 创作工作台 | 扣子、Genspark | 自己组 Agent、云设备、内容/代码/网页等多类制品 |
| Phone / GUI Agent | AutoGLM、豆包手机助手 | 直接操作没有标准 API 的手机 App 与人类界面 |

这六类经常重叠，但它们解决的问题不同。

因此“哪个个人 Agent 最强”本身就是一个不太好的问题。更有意义的是问：

> **你的工作状态放在哪里？Agent 的手伸到哪里？它是否常驻？失败以后能不能恢复？**

---

## 三、WorkBuddy：个人 Agent 从“回答”变成桌面工作台

### 3.1 2026-03-04：WorkBuddy 正式发布

腾讯 WorkBuddy 官方更新日志记录，**2026-03-04** WorkBuddy 4.5.0 正式上线。[^1]

首发已经不是一个普通聊天框，而包含：

- 多模型切换；
- 工作空间 / 项目；
- Skill 扩展；
- 文件读写；
- terminal command execution；
- 产物管理与文件预览；
- macOS / Windows；
- 持续对话模式。

到 2026 年夏季，WorkBuddy 又进一步加入：

- 长期记忆；
- 自动任务；
- 多专家 / 多模型协同；
- MCP、Skills、Plugins、Connectors；
- 腾讯文档深度集成；
- 项目计划、资产库、团队协作；
- 子 Agent sandbox；
- 桌面、移动端、小程序与主流 IM 入口。[^2][^3]

腾讯把它描述为：用户只需要一句自然语言指令，系统自主拆解、规划、执行，最后交付 Word、Excel、PPT、图表等可以验收的工作结果。[^4]

这说明 WorkBuddy 的商品单位已经从：

> **“给我一个答案”**

转成：

> **“给我一个完成后的工作产物”。**

### 3.2 价格：个人 Agent 形成“免费 → 高频 → 重度”梯度

WorkBuddy 当前国内个人版公开价格为：[^5]

| 版本 | 普通月付 | 连续包月 | 基础积分 / 月 | 典型定位 |
|---|---:|---:|---:|---|
| 体验版 | 免费 | — | 500 | 体验 Agent 办公 |
| 标准版 | ¥99 | ¥70 | 2,000 | 日常高频办公 |
| 高级版 | ¥199 | ¥140 | 4,000 | 个人进阶用户 |
| 旗舰版 | ¥999 | ¥700 | 20,000 | 重度个人 Agent 用户 |

官方还明确说明：**WorkBuddy 与 CodeBuddy 共用同一账号积分池，不需要分别订阅。**[^5]

这是一个很有代表性的商业化信号。

个人用户购买的已经不是单独一个“聊天会员”，而是一池可以被：

- 文档；
- 代码；
- 自动任务；
- 多模型；
- 多专家；
- Agent 执行

共同消耗的**个人智能预算**。

### 3.3 自动任务比聊天次数更像 Agent 指标

WorkBuddy 套餐还限制 / 分层自动任务数量。官方产品页目前给出的典型额度包括体验版约 3 个、标准版 15 个、高级版 30 个、旗舰版 99 个自动任务。[^6]

这比“每月能发多少消息”更值得记录。

因为用户购买的正在变成：

> **有多少工作可以不需要我实时守在聊天框前。**

---

## 四、腾讯个人 Agent 矩阵：WorkBuddy、QClaw 与 ima 并不是同一个产品

**2026-06-05**，腾讯云在 AI 产业应用大会明确把 **QClaw、WorkBuddy、元宝、ima、腾讯文档**列为面向个人用户升级的“开箱即用 AI 工具”，同时另行推出 WorkBuddy 企业版、ClawPro 与 ADP 等企业产品。[^7]

这说明腾讯自己已经在区分个人侧与企业侧 Agent。

其中最有历史解释力的是 WorkBuddy、QClaw 与 ima 三者的分工。

### 4.1 WorkBuddy：手脚——替用户执行并交付

WorkBuddy 的中心是：

- 文件；
- Office；
- 网页；
- code；
- project；
- artifact；
- 自动任务。

它更像一个**桌面工作执行器**。

### 4.2 QClaw：常驻本机——把个人电脑变成可远程调度的 Agent runtime

腾讯 **2026-04-21** 推出 QClaw 国际 beta。[^8]

QClaw 基于 OpenClaw，强调：

- Windows / macOS 本地部署；
- 不需要复杂环境配置；
- 可接不同模型，也可 BYOK；
- 可以从 WhatsApp / Telegram 等手机端远程下指令；
- 国内文档还强调微信直连；
- 文件传输、文档处理、报表等动作在本机完成。[^8][^9]

这一形态和云 Agent 非常不同。

云 Agent 的典型路径是：

> 用户任务 → 厂商 cloud sandbox → 结果返回

QClaw 更接近：

> 手机 / IM 指令 → **自己的电脑** → 本地文件 / 软件 → 结果

所以用户购买 / 配置的核心不是“云端有一个更聪明的机器人”，而是：

> **把自己的电脑变成一个长期在线、可以远程召唤的执行节点。**

这也是“个人 Agent”非常重要的一条路线：**Local-first personal runtime。**

### 4.3 ima copilot：脑子——个人知识和长期记忆层

腾讯 ima 在 **2026-04-29**推出知识 Agent `copilot`，并于 **2026-05-25**全面开放。[^10]

其关键能力不是电脑操作，而是：

- 用户档案；
- 长期记忆；
- 经验技巧；
- copilot 设定；
- 个人知识库直接参与任务；
- Skills 扩展；
- 自定义模型 API Key。

因此 ima 更像个人 Agent 系统里的**知识与记忆层**。

腾讯云社区甚至出现了一个很形象的用户总结：

> ima 负责“想”，WorkBuddy 负责“做”。[^11]

虽然这是社区用户经验而不是腾讯正式产品定义，但它非常准确地说明了个人 Agent 为什么可能不会收敛成一个超级 App：

> **长期知识记忆和高权限执行，可能天然需要不同的产品边界。**

---

## 五、Kimi：把个人 Agent 的“工作量”直接写进会员权益

Kimi 是目前个人 Agent 商业化里最有史料价值的产品之一。

当前公开会员：[^12]

| 套餐 | 月费 | Agent 相关权益 |
|---|---:|---|
| Andante | ¥49 | 约 30 次 Agent；scheduled / widget tasks；Kimi Code |
| Moderato | ¥99 | 约 60 次 Agent；2 个并行任务；25 次 Agent Swarm |
| Allegretto | ¥199 | 约 150 次 Agent；50 次 Swarm；Goal Mode；Kimi Claw |
| Allegro | ¥699 | 约 360 次 Agent；4 个并行任务；120 次 Swarm；8 个并行子任务 |

Agent、Deep Research、PPT、Docs、Sheets、Kimi Code、Kimi Work、Kimi Claw、K3 / Swarm 等共享一个 credit pool，并按真实 token 消耗扣减。[^12][^13]

Kimi Claw 的云主机还会因为持续在线占用 sandbox / runtime 而持续扣除 credits。[^12]

所以 Kimi 的个人订阅其实已经同时售卖：

> **任务数量 + 并发任务 + 并发 Agent + 模型计算 + persistent runtime。**

这比传统“会员多几次消息”更接近真正的 Agent 商品。

---

## 六、扣子：个人用户也可以买“云设备 + Agent + 创作环境”

扣子 3.0 虽然同时覆盖团队与企业，但个人套餐本身已经非常 Agent 化。

官方 2026 年 8 月套餐：[^14]

| 个人档位 | 月费 | 月积分 | Agent / 云设备特征 |
|---|---:|---:|---|
| 免费 | ¥0 | — | 可连接 1 个本地 Agent（限时免费） |
| 进阶 | ¥39.9 | 30,000 | 个人创作 / 基础能力 |
| 高阶 | ¥99 | 99,000 | 云设备、云端 Agent、项目协作开始进入 |
| 旗舰 | ¥199 | 199,000 | 更多云设备 / Agent / 项目能力 |
| 尊享 | ¥999 | 999,000 | 前沿模型与最高个人资源档 |

扣子还允许：

- 云手机 / 云电脑；
- 创建云端 Agent / 职业模板；
- 连接多个本地 Agent；
- 项目协作；
- Skills / CLI / code；
- 按积分消耗生成与执行资源。[^14]

因此扣子的个人商业模式更像：

> **AI 创作软件 + Agent Builder + 云设备租用 + credits。**

它不是单纯“一个 Agent 替我做完所有事情”，而是让个人用户自己组装一支可调用的 AI 工具队伍。

---

## 七、MiniMax Agent：并发 Agent 也进入 App Store 订阅

MiniMax 在中国 App Store 直接把产品命名为 **“MiniMax - 通用 AI Agent”**。[^15]

截至 2026-08，其 iOS 端公开内购包括：

- Plus：¥49/月；
- Max：¥119/月；
- Ultra：¥469/月；
- 另有 credit / 增强包。[^15]

MiniMax Agent 的官方订阅规则同样采用 credit 体系，月度会员 credits、额外购买 credits、奖励 credits 分开管理。[^16]

这一类产品说明个人 Agent 正在复制手游 / 创作 SaaS 很熟悉的结构：

> **月卡 + 资源包 + 高峰优先级 + 高级功能提前体验。**

区别只是被消费的资源从图片次数、存储空间变成了 Agent 执行计算。

---

## 八、Phone Agent：个人 Agent 最接近“真正替你操作生活”的路线

AutoGLM、豆包手机助手等 Phone Agent 的特殊性在于：

它们面对的不是企业 API，而是普通用户手机里已经存在的 App。

中国用户大量真实行动封装在：

- 微信；
- 淘宝 / 京东；
- 美团 / 饿了么；
- 携程 / 12306；
- 滴滴；
- 小红书 / 抖音；
- 银行与生活服务 App。

因此 Phone Agent 如果成熟，理论上可以直接触及：

> 搜索 → 选择 → 填表 → 下单 → 支付前确认 → 状态追踪

这比文件 Agent 更接近“个人数字代理人”。

但也因为如此，权限风险最高。

个人 Phone Agent 的终点不能只是“识别按钮更准”，还必须解决：

- 哪些动作可以自动做；
- 哪些动作必须确认；
- 金钱与身份动作怎样二次授权；
- App 更新后如何保持可靠；
- prompt injection / 恶意页面怎样隔离；
- 错误订单、误发消息怎样撤销。

因此本书仍把 Phone Agent 标记为**高潜力、但高风险且尚未完全成熟**的一层。

---

## 九、Manus 与 Genspark：个人 Agent 也出现“云电脑”和“AI Costco”两种全球化路线

### 9.1 Manus：用户购买 cloud task capacity

Manus 当前个人方案从 Free 到 Pro。官方帮助中心给出的典型结构为：[^17]

- Free：$0，1 个并发任务、2 个 scheduled tasks；
- Pro：$20/月起，约 4,000 credits 起；
- 更高 Pro 档：$40/月起，约 8,000 credits；
- Pro 支持最多约 20 个并发任务和 20 个 scheduled tasks。

Manus 还单独出售 / 管理 persistent **Cloud Computer**，即长期在线 Ubuntu 环境。[^18]

这意味着个人用户可以购买的不只是“Agent 次数”，还包括一台长期存在的云计算环境。

### 9.2 Genspark：从 Agent 产品变成“所有模型与 Agent 一个订阅”

Genspark 的定位更像个人 AI 聚合层。

当前官方宣传直接称自己为 **“AI Costco”**：一个订阅中聚合多个前沿模型和 Agent。[^19]

典型个人价格：

- Plus：$24.99/月，10,000 credits；
- Pro：$249.99/月，125,000 credits；
- 包含 Slides、Sheets、Docs、Code、Super Agent、Deep Research、Image / Video / Audio 等工作台。[^19][^20]

这一形态意味着个人 Agent 市场可能出现另一种商业角色：

> **用户不再忠于某一个底层模型，而订阅一个负责替自己选择和编排模型 / Agent 的“AI 总包商”。**

---

## 十、个人 Agent 的真正竞争变量不是 benchmark

对于个人用户，决定产品是否真的留下来的指标越来越像：

| 指标 | 为什么重要 |
|---|---|
| Time-to-result | 从下指令到真正拿到可用文件 / 完成动作需要多久 |
| Intervention rate | 中间需要用户救场多少次 |
| Permission radius | Agent 能触及多少文件、网页、App、账号与设备 |
| Memory quality | 多久以后还记得用户的项目、偏好与历史 |
| Recovery | 中断、失败、重启后能否继续 |
| Locality | 文件和 credentials 留在本地还是进入厂商云 |
| Automation capacity | 能同时跑多少任务、多少 scheduled jobs |
| Cost per completed task | 真正做完一件事一共花多少钱 |
| Trust | 用户是否敢把邮件、日历、文件、支付前流程交出去 |

所以个人 Agent 竞争最终可能不是：

> “谁在某个 benchmark 高 3 分？”

而是：

> **“谁可以连续半年活在我的数字生活里，而不会让我每天重新配置、纠错和收拾残局？”**

---

## 十一、个人 Agent 的四种商业单位

2026 年已经可以看到四层商品同时存在。

### 1. Seat / 月度会员

最熟悉的入口：

- WorkBuddy；
- Kimi；
- 扣子；
- MiniMax；
- Manus；
- Genspark。

### 2. Credits / 积分

真正控制高成本任务：

- WorkBuddy credits；
- Kimi unified credits；
- Coze points；
- MiniMax credits；
- Manus credits；
- Genspark credits。

### 3. Task / automation / concurrency

最能体现 Agent 与聊天不同：

- WorkBuddy 自动任务数；
- Kimi Agent / Swarm 次数与并发；
- Manus concurrent / scheduled tasks；
- Coze local / cloud agents；
- MiniMax concurrent agents。

### 4. Runtime

Agent 真正变成“常驻进程”以后出现：

- Kimi Claw cloud host；
- Manus Cloud Computer；
- QClaw 本机 runtime；
- Coze cloud devices；
- WorkBuddy 本机 workspace / sandbox。

因此个人 Agent 的商业演化可以写成：

> **聊天会员 → 智能额度 → 任务额度 → 并发 worker → persistent runtime。**

---

## 十二、为什么个人 Agent 可能比企业 Agent 更难

企业工作虽然复杂，但组织通常能定义：

- 权限；
- 数据边界；
- SOP；
- 审批；
- 日志；
- 责任人。

个人数字生活反而更加混乱。

同一台电脑里可能同时有：

- 私人照片；
- 工作文件；
- 浏览器 cookies；
- SSH key；
- 银行网页；
- 微信聊天；
- 学习笔记；
- 邮件；
- 云盘；
- 游戏；
- 家庭资料。

所以个人 Agent 的长期难题不是“有没有电脑控制能力”，而是：

> **怎样在没有 IT 管理员替你划边界的情况下，仍然给 Agent 足够能力去做事。**

这也是 WorkBuddy 的授权文件夹、QClaw 的 local-first、ima 的知识层、Phone Agent 的确认边界为什么都很重要。

---

## 十三、评曰：个人 Agent 正在变成“第二个操作系统层”

个人电脑过去的基本抽象是应用程序。

用户自己决定：

> 打开 Word → 找文件 → 搜资料 → 复制 → 修改 → 发邮件。

个人 Agent 试图把这一串操作翻转：

> **用户描述目标 → Agent 选择应用 / 工具 → 执行 → 交付结果。**

如果这一模式成立，那么 Agent 在用户和应用之间增加了一个新的控制层。

这并不意味着 Windows、macOS、Android、iOS 会消失。

更可能发生的是：

> **传统 OS 管进程和文件；个人 Agent 管目标、上下文、工具选择与任务生命周期。**

WorkBuddy、QClaw、ima、Kimi、扣子、MiniMax、Manus、Genspark 看起来差异巨大，但它们都在争夺同一个位置：

> **谁成为用户数字生活里那个长期存在、知道你要做什么、并能替你跨应用推进工作的中间层。**

所以个人 Agent 的历史，最后很可能不会被某个模型版本定义。

它会被一个更日常的问题定义：

> **人从什么时候开始，不再自己打开每一个软件，而是直接告诉一个 Agent：“这件事帮我做完。”**

---

*2026-08 补订：GPT-5.6 Sol（OpenAI）。*

> 📖 详见《志·AI Agent 生态》《志·Agent 产品与商业化》《志·中国 Agent 生态与商业化》《表·个人 Agent 产品对照表》《表·中国 Agent 产品与平台对照表》。

---

[^1]: Tencent WorkBuddy Changelog, 4.5.0 release, 2026-03-04. https://www.workbuddy.cn/docs/workbuddy/Changelog
[^2]: Tencent WorkBuddy Changelog, 5.x updates. https://www.workbuddy.cn/docs/workbuddy/Changelog
[^3]: WorkBuddy, “AI Agent 办公新范式”. https://www.workbuddy.cn/work/
[^4]: Tencent Cloud, WorkBuddy product page. https://cloud.tencent.com/product/workbuddy
[^5]: Tencent WorkBuddy Docs, “定价”. https://www.workbuddy.cn/docs/workbuddy/Pricing
[^6]: WorkBuddy home / pricing. https://www.workbuddy.cn/home
[^7]: Tencent, “腾讯云首发效率智能体工具集，构建面向多元人群的AI生产力入口”, 2026-06-05. https://www.tencent.com/zh-cn/tencent-cloud-debuts-productivity-agent-suite-creating-a-new-gateway-to-ai-for-users-and-enterprises/
[^8]: Tencent, “腾讯推出QClaw海外版，降低AI智能体部署门槛”, 2026-04-21. https://www.tencent.com/zh-cn/%E8%85%BE%E8%AE%AF%E6%8E%A8%E5%87%BAqclaw%E6%B5%B7%E5%A4%96%E7%89%88%EF%BC%8C%E9%99%8D%E4%BD%8Eai%E6%99%BA%E8%83%BD%E4%BD%93%E9%83%A8%E7%BD%B2%E9%97%A8%E6%A7%9B/
[^9]: Tencent Cloud Docs, QClaw. https://intl.cloud.tencent.com/zh/document/product/1300/81043
[^10]: Tencent Cloud Developer, “ima 的知识 Agent copilot 功能是什么？”. https://cloud.tencent.com/developer/techpedia/2613/20569
[^11]: Tencent Cloud Developer Community, “左手脑子，右手手脚——我的 IMA Copilot 与 WorkBuddy 联用实战”, 2026-07-15. https://cloud.tencent.com/developer/article/2709666
[^12]: Kimi Help Center, “会员收费与套餐介绍”. https://www.kimi.com/help/membership/membership-pricing
[^13]: Kimi Help Center, “Agent Credits and Billing Rules”. https://www.kimi.com/en/help/agent/agent-quota-and-billing
[^14]: Coze Docs, “订阅套餐”. https://docs.coze.cn/guides_edition
[^15]: Apple App Store China, “MiniMax - 通用AI Agent”. https://apps.apple.com/cn/app/minimax-%E9%80%9A%E7%94%A8ai-agent/id6446482834
[^16]: MiniMax Agent, “Subscription Service Terms / Credit Rules”. https://agent.minimax.io/doc/en/credit-rules.html
[^17]: Manus Help Center, “What is the current membership pricing for Manus?”, 2026-03-16. https://help.manus.im/en/articles/11711111-what-is-the-current-membership-pricing-for-manus
[^18]: Manus Help Center, “Understanding Cloud Computer Plans and Billing”, 2026-06-05. https://help.manus.im/en/articles/15392078-understanding-cloud-computer-plans-and-billing
[^19]: Genspark, Membership Benefits. https://www.genspark.ai/zh-cn/membership-benefits-lp
[^20]: Genspark Help Center, Membership Plans. https://www.genspark.ai/helpcenter/membership-plans