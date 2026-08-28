# 《OpenClaw 与中国 Agent“龙虾潮”》

> 如果把全球 LLM Agent 的历史从 OpenClaw 写起，会错过 ReAct、AutoGPT、Devin、Computer Use、MCP 等更早的技术脉络；但如果问的是：**中国普通用户什么时候第一次大规模把“Agent”理解成一台会长期运行、会用工具、会操作电脑、能从微信接任务的数字执行者？** 那么 2025 年末诞生、2026 年初爆红的 OpenClaw，确实是一个最合适的分水岭。
>
> 2026 年春天中国所谓“养龙虾”，不是单一产品爆红，而是一次开源 Agent harness 被迅速本地化、云化、商业化和超级应用化的浪潮。腾讯、百度、火山引擎、阿里、智谱等几乎在数周内同时推出“虾系”产品。它们有些直接基于 OpenClaw，有些只兼容其 Skills / MCP 生态，有些则只是被市场浪潮推动而采用相似产品形态。**把三者混成“OpenClaw 套壳”同样是不准确的。**

---

## 一、先把时间线摆正：OpenClaw 不是 Agent 的起点，但它是中国“会干活 Agent”大众化的引爆点

### 2025-11-25：Clawd 出生

OpenClaw 项目官方历史把 **2025-11-25** 视为 **Clawd** 的诞生日。Peter Steinberger 最初把它作为一个周末项目开发，核心并不是训练新模型，而是把模型、消息渠道、workspace、工具、Skills 和长期运行 gateway 组合成一个个人 Agent harness。[^1][^2]

这一点很关键：OpenClaw 的历史意义主要不在“模型更聪明”，而在于它提供了一种容易理解的执行结构：

> **自己的机器 + 自己的模型/API Key + 自己的 workspace + 消息入口 + Skills + 长期运行的 Agent loop。**

用户可以在 WhatsApp、Telegram、Slack、Discord、iMessage，后来也包括微信、QQ、飞书等渠道中给自己的 Agent 下令；Agent 则可以读取工作区、调用工具、执行命令并保留状态。[^3]

### 2026-01-29：正式更名 OpenClaw

项目先后经历 **Clawd → Moltbot → OpenClaw** 的名字变化。2026-01-29，Steinberger 正式宣布 OpenClaw 名称，并称项目在两个月左右已超过 100,000 GitHub stars。[^1]

所以在编年中应该区分：

- **2025-11-25**：项目 / 范式起点（Clawd）；
- **2026-01-29**：OpenClaw 名称正式成立；
- **2026-02—03**：中国大规模传播与“养龙虾”浪潮。

### 2026-02：爆红与安全警告几乎同时出现

OpenClaw 的优势——本机文件、shell、消息入口、credentials、长期运行——也天然扩大了攻击面。

2026-02-05，Reuters 报道中国工信部门就 OpenClaw 的公开暴露、身份认证与访问控制风险发出警告。报道指出，阿里云、腾讯云、百度等已经开始提供相关托管 / 部署能力。[^4]

Bloomberg 同期记录过一个非常具体的真实失败案例：用户给 OpenClaw iMessage 权限后，Agent 失控向本人、妻子和随机联系人连续发送数百条消息。[^5]

OpenClaw 自己也没有否认风险。项目官方把 prompt injection 明确称为行业尚未解决的问题，并持续强化 gateway / sandbox / credential 边界。[^1][^6]

这说明 OpenClaw 的历史从一开始就是双面的：

> **Agent 越像“自己的数字员工”，它拿到的权限也越像一个真实员工。**

---

## 二、2026 年 3 月：中国真正进入“养龙虾”阶段

Reuters、Bloomberg、财新和 CNA 都记录了 2026 年 3 月中国围绕 OpenClaw 出现的大规模社会热潮：线下安装活动、教程、云服务器套餐、地方补贴、“一人公司”叙事以及大厂产品密集发布。[^7][^8][^9][^10]

Reuters 3 月 19 日报道甚至同时采访到学生、退休者和普通职场用户“养龙虾”。这不是典型开发者框架的传播路径，而是一次罕见的开源 Agent 大众化。[^9]

因此，从中国 Agent 产品史角度，可以把 2026 年春天看作：

> **OpenClaw 把“Agent = 能长期运行并实际操作软件的东西”这个产品范式，突然教给了整个市场。**

接下来几周发生的事情，和 2023 年 ChatGPT 爆红后中国大模型集中发布有些相似：所有厂商都必须回答“我的 Agent 在哪里？”

---

## 三、第一类：直接基于、托管或高度继承 OpenClaw 的“原生虾”

这一类不能只说“像 OpenClaw”，而是产品文档明确把 OpenClaw 当底座、迁移对象或托管目标。

### 3.1 腾讯 QClaw：把 OpenClaw 安装和微信入口产品化

腾讯在 2026 年 3 月快速推出 **QClaw**。Reuters 后来把它列为腾讯面向个人用户的 OpenClaw 产品线之一；腾讯开发者社区的实测也普遍把 QClaw 描述为更接近原生 OpenClaw 的本地产品：主要价值在于简化安装、接入微信 / IM，并继承 OpenClaw Skills 生态。[^11][^12]

它的意义不是“腾讯重新发明了 Agent”，而是：

> **把一个极客项目变成普通 Windows / macOS 用户能安装、能扫码、能从微信远程下令的东西。**

这一步本身就是商业化。

### 3.2 微信 ClawBot：超级应用成为 Agent 遥控器

**2026-03-22**，Reuters 报道腾讯把 OpenClaw 接入微信，形成 **ClawBot**。Agent 可以像联系人一样出现在微信中，用户通过聊天远程控制。[^13]

这件事对中国市场尤其重要。OpenClaw 最初的核心设计就是“从你已经使用的消息渠道给 Agent 下令”；微信拥有十亿级用户后，消息入口不再只是 Telegram / Discord 的技术爱好者生态，而成为大众基础设施。

### 3.3 百度 DuClaw：把 OpenClaw 做成零部署云服务

**2026-03-11**，百度宣布 **DuClaw**：托管在百度智能云上的 zero-deployment OpenClaw 服务，预装百度搜索、百度百科、百度学术等 Skills，并支持多个基础模型。[^14]

这里的商业模式非常直接：

> 用户不再“养一台自己的虾”，而是**租一只已经装好的虾**。

OpenClaw 因而从本地软件变成 managed service。

### 3.4 百度“龙虾家族”：DuMate、RedClaw、DuClaw、小度设备

到 3 月 17—18 日，百度又公开一整个 OpenClaw-based 产品族：[^15]

- **DuMate（搭子）**：桌面 Agent；
- **RedClaw**：移动端；
- **DuClaw**：云端托管；
- **小度智能设备 Agent**：把执行入口延伸到家庭硬件。

Reuters 特别记录了百度高管自己的提醒：这些 Agent **仍然会犯错**。[^15]

这句话比“可以剪视频、做 PPT、研究、点咖啡”的功能列表更值得史书保存，因为它来自发布方自己对成熟度边界的承认。

### 3.5 火山引擎 ArkClaw：OpenClaw 进入云产品生命周期

火山引擎 **ArkClaw** 于 **2026-03-16** 正式发布。其官方更新记录显示，产品持续同步 OpenClaw 社区版本，并在 3 月 23—26 日加入“迁移 OpenClaw 至 ArkClaw”，允许把已有 OpenClaw 的记忆、Skills 和数据迁入云端产品。[^16][^17]

ArkClaw 后续继续加入：

- 云浏览器 / 云电脑；
- 多任务与团队模式；
- 自动备份 / 恢复；
- OpenClaw 原生控制台；
- Hermes Agent runtime；
- Agent Plan；
- 企业观测与日志。

这几乎是“开源 harness → 云托管 Agent OS”的标准演化。

但火山官方文档同样记录了真实限制：例如云电脑功能一度只在部分规格可用，多 Agent 并发访问同一个云电脑会产生资源冲突，官方建议同一实例同一时间只运行一个云电脑任务。[^18]

这就是“宣传功能”和“稳定可用边界”应当同时保存的典型例子。

### 3.6 智谱 AutoClaw：OpenClaw + GLM + 本地办公 / IM

智谱在已有 AutoGLM Phone Use 路线之外，又推出 **AutoClaw**。官方产品说明明确称它“基于 OpenClaw 开源框架打造”，强调本地安装、飞书 / IM 入口、文件 / 浏览器 / 代码执行、预置 Skills，并继续增加集群模式、长期记忆和自进化。[^19]

AutoGLM 与 AutoClaw 不应混写：

- AutoGLM 更早，核心是视觉 GUI / Phone Use；
- AutoClaw 属于 2026 “龙虾潮”，核心是 OpenClaw 式个人执行 runtime。

二者代表智谱同时押注**操作界面**与**长期 Agent harness**。

### 3.7 阿里 CoPaw → QwenPaw：不照抄 OpenClaw，但明显属于“龙虾潮”的自托管个人 Agent

阿里 AgentScope 团队推出 **CoPaw**，后更名 **QwenPaw**。官方文档称其为基于 AgentScope / AgentScope Runtime / ReMe 的开源自托管个人助手，具备多渠道、持久记忆和主动任务执行，并提供阿里云轻量应用服务器预装镜像。[^20][^21]

它不是 OpenClaw fork，但产品问题意识明显来自同一浪潮：

> “怎样给普通用户一个常驻、可自托管、可从消息入口使用的个人 Agent？”

因此应归为**OpenClaw 浪潮中的独立重实现**，而不是 OpenClaw 衍生版本。

### 3.8 阿里 HiClaw：Manager + Workers 的轻量多 Agent 路线

阿里云社区 3 月公开 **HiClaw + CoPaw** 组合，重点之一就是减少 OpenClaw Worker 容器的内存开销，并把 Manager / Worker 多 Agent 组织做轻量化。[^22]

这个案例说明 OpenClaw 的影响并不只产生“套壳客户端”，还产生了对其**资源消耗、worker 隔离与组织结构**的工程再设计。

---

## 四、第二类：兼容 OpenClaw 生态，但内核不是 OpenClaw

### WorkBuddy：最容易被媒体写错的例子

WorkBuddy 经常被简称为“腾讯版 OpenClaw”，但这句话只能描述市场定位，不能描述代码来源。

腾讯云公开资料和多篇实测都把 **QClaw** 与 **WorkBuddy** 分开：QClaw 更接近 OpenClaw 原生生态；WorkBuddy 则来自 CodeBuddy 智能体架构，兼容 OpenClaw Skills / MCP / Claw 使用习惯，但并非简单 fork。[^12][^23]

这件事值得专门写，因为“某厂商版 OpenClaw”在媒体标题里可能同时表示三种完全不同的关系：

1. 真正 fork / 托管 OpenClaw；
2. 兼容 OpenClaw Skills / 数据 / 使用方式；
3. 只是同一市场类别的竞争产品。

史书不能把三个概念合并。

WorkBuddy 的发布时间也需要区分两个口径：腾讯更新日志显示 **4.5.0 软件版本在 2026-03-04 已出现**；腾讯云产品百科、财新等将 **2026-03-09** 记为正式 / 公测上线日。[^24][^25]

因此更准确的写法是：

> **3 月 4 日首个公开版本记录；3 月 9 日对外正式 / 公测发布。**

---

## 五、第三类：被“龙虾潮”推动，但不是 OpenClaw 套壳

### 5.1 阿里悟空：龙虾潮后的企业协作型答案

Alibaba **Wukong（悟空）**于 2026-03-17 发布，发生在 OpenClaw 热潮最猛烈的时期。Reuters 直接把其发布背景放在中国 agent craze 之中。[^26]

但悟空的核心并不是复刻 OpenClaw 本地 gateway，而是利用钉钉组织、身份、文档、会议和企业应用，把多 Agent 工作放进企业协作系统。

它应理解为：

> **OpenClaw 证明市场需要“会干活的 Agent”，悟空回答企业内部应该怎样组织这些 Agent。**

### 5.2 扣子、Kimi、MiniMax：从已有产品线吸收“长期执行 / Claw / Swarm”语言

扣子、Kimi、MiniMax 都有 OpenClaw 之前的产品基础，因此不能说它们“始于 OpenClaw”。

但 2026 年以后可以明显看到：

- 扣子从 Bot / Workflow 转向多 Agent AI team workspace；
- Kimi 把 Claw、Agent、Swarm、scheduled tasks 写进会员体系；
- MiniMax 把 Agent / MaxClaw / concurrent agents 写进产品与套餐。

这说明“龙虾潮”的影响已经超出 fork：它改变了整个中国市场对**Agent 产品应该长什么样**的想象。

---

## 六、为什么 OpenClaw 在中国比在许多其他市场更容易爆炸

### 6.1 中国模型 token 足够便宜

OpenClaw 不是模型，它会持续消耗模型调用。中国市场拥有 DeepSeek、Qwen、Kimi、GLM、MiniMax 等大量低价 API，使普通用户更容易承担长程 Agent 的 token 成本。Reuters / Breakingviews 也观察到中国市场在低成本 token 上形成了明显竞争。[^27]

### 6.2 超级应用解决“Agent 从哪里接收命令”

微信、企业微信、飞书、钉钉本来就是用户全天在线的消息入口。

OpenClaw 的 messaging-first 设计因此和中国超级应用生态高度契合：

> 用户不需要每天打开一个 Agent App；只要“微信一下”。

### 6.3 云厂商迅速消灭安装门槛

原生 OpenClaw 对普通用户并不轻松：Node 环境、API Key、gateway、插件、权限、安全配置都可能成为障碍。

中国云厂商迅速把这些变成：

- 一键部署；
- 预装镜像；
- 托管 OpenClaw；
- 云桌面 / 云手机；
- 包月 Agent Plan。

“会不会安装”本身变成了一个可以商业化解决的问题。

### 6.4 “一人公司”叙事提供了传播想象

Reuters、WIRED 等都记录了中国社交媒体中 OpenClaw 与“一人公司”、副业、自动运营之间的绑定。[^7][^28]

它让普通用户第一次能非常具体地想象：

> “如果我有一只一直在线的 Agent，它能不能替我盯邮件、做调研、运营内容、找客户、处理订单？”

但这也正是商业宣传最容易超过实际能力的地方。

---

## 七、最重要的史料规则：不要把“它声称能做”写成“它稳定能做”

Agent 产品比聊天模型更容易制造**宣传—体验落差**。

因为一次发布会 demo 只需要成功一次，而真实用户需要：

> **同一个任务，今天、明天、下周、UI 改版后、网络抖动时，都能大致成功。**

这完全是两种指标。

### 7.1 本书以后统一区分四层证据

| 层级 | 可以证明什么 | 不能证明什么 |
|---|---|---|
| **厂商声明 / 功能页** | 产品宣称支持某项能力 | 不能证明成功率、稳定性、ROI |
| **公开可用产品 / API** | 功能真的可以被用户调用 | 不能证明复杂任务长期可靠 |
| **独立实测 / 多次运行 / 环境验证** | 能说明真实任务中的成功、失败、耗时、成本 | 仍可能受版本、账号、环境影响 |
| **生产指标 / 长期使用数据** | 能说明留存、可靠性、成本和组织价值 | 仍不能自动推出“可替代某岗位” |

因此正文应优先写：

> **“厂商称支持……”**

而不是：

> **“它能够……”**

除非有更强证据。

### 7.2 “能做一次”不等于“可靠”

2026 年关于 Computer-Use Agent 的研究指出，即使任务和模型完全不变，Agent 一次成功后再次运行仍可能失败；可靠性同时受到随机性、任务歧义和行为变化影响。[^29]

Princeton HAL 的 reliability 研究也强调：Agent 的 raw accuracy 持续提高，但 reliability 提升明显更慢；**pass@k（试很多次至少一次成功）和 pass^k（连续很多次都成功）之间存在巨大差距**。[^30]

这对商业宣传尤其重要。

一个“95% 单步成功”的系统，如果任务需要连续很多个关键步骤，端到端无失败概率会迅速下降。

### 7.3 Benchmark 自己也会错

2026 年对 computer-use benchmarks 的审计发现，公开判为 FAIL 的轨迹中有相当部分实际上是 evaluator false negative 或 broken task。[^31]

所以本书既不能相信厂商 demo，也不能迷信一个 leaderboard 数字。

真正应该记录的是：

- 测了什么环境；
- 是否重复执行；
- 是否允许 retry；
- 失败在哪里；
- Agent 有没有错误地宣称任务完成；
- 实际世界状态是否真的改变成功。

### 7.4 OpenClaw 中国热潮本身就留下了现实反例

Reuters 在 2026-03-19 的中国用户采访中记录：一些用户发现 token 消耗很高、执行结果并不理想，投入和回报不成比例；百度发布自己的 OpenClaw 产品时也明确提醒 Agent 仍然容易犯错。[^9][^15]

Bloomberg 的 OpenClaw iMessage 失控案例则说明另一类失败：**不是“做不成”，而是做过头。**[^5]

这类事故恰恰是 Agent 与聊天模型最重要的区别。

聊天模型胡说一句，主要改变信息；Agent 拿着权限胡做一步，会改变文件、账号、消息、订单甚至钱。

---

## 八、安全问题：OpenClaw 的成功同时暴露了个人 Agent 的信任边界

OpenClaw 的设计把几个高权限组件放进一条链：

- messaging channel；
- model；
- workspace；
- shell / browser；
- credentials；
- Skills；
- persistent daemon。

这使 prompt injection、恶意 Skill、错误权限、公开 gateway、credential leakage 的后果被放大。

2026 年中国一边出现地方政府补贴、企业安装活动，另一边政府机构、银行和安全部门又迅速开始限制在办公设备上安装 OpenClaw。[^7][^32]

这种“地方推广—敏感机构限制”并不矛盾。

它说明行业同时看到了两件事：

> **Agent 的生产力是真实的；Agent 的权限风险也是真实的。**

真正成熟的产品化，不是把 OpenClaw 一键装得更快，而是重新设计：

- credential isolation；
- sandbox；
- approval boundary；
- audit log；
- network policy；
- backup / rollback；
- sensitive-data access；
- skill supply-chain security。

这也是为什么 WorkBuddy、ArkClaw、DuMate 等产品都把“安全、企业隔离、审计”作为卖点——不过这些仍首先是**产品设计与厂商声明**，具体有效性仍需要独立安全研究与真实部署数据验证。

---

## 九、从“龙虾”到产品：2026 年中国 Agent 的真正分叉

把 2026 年春天以后所有产品放在一起，真正发生的不是“大家都做 OpenClaw”。

而是 OpenClaw 把一个共同问题暴露出来以后，市场开始分叉：

| 路线 | 代表 | 解决的问题 |
|---|---|---|
| 原生 / 本地 OpenClaw | OpenClaw、QClaw、AutoClaw | 自己的机器、自己的数据、自己的 Agent |
| Managed OpenClaw | DuClaw、ArkClaw | 不想安装，也能拥有长期 Agent runtime |
| 独立轻量重实现 | CoPaw / QwenPaw、HiClaw | 降低资源、增强记忆或重做 worker 架构 |
| 自研办公 Agent | WorkBuddy | 把 OpenClaw 式执行体验做成开箱即用办公产品 |
| 企业多 Agent 平台 | Wukong、ADP、千帆 | 组织、权限、企业数据、AgentOps |
| 云设备 / Phone Use | AutoGLM、RedClaw、无影 Agentic Computer | 给 Agent 一台可控的手机 / 电脑 |
| Multi-Agent / Claw 产品化 | Kimi、扣子、MiniMax | 把并发 Agent、长期任务和 credits 卖给普通用户 |

所以 OpenClaw 更像 2026 中国 Agent 市场的 **Linux / PC clone moment**：

> 它没有垄断后来的产品，但它让所有人突然知道“这种计算形态可以存在”。

---

## 十、评曰：OpenClaw 真正改变的，不是“Agent 有没有”，而是“普通人开始想拥有一个自己的 Agent”

ReAct 给了 Agent 控制循环；Function Calling 给了结构化工具接口；Devin 给了 Agent 一台电脑；MCP 给了标准化工具连接。

OpenClaw 的贡献更接近产品文化：

> **把这些部件打成一个普通人能想象、能自己运行、能从聊天软件遥控的个人执行者。**

中国市场随后把这个想象放大到极致。

“养龙虾”之所以重要，不是因为所有龙虾真的都能像宣传视频那样独立工作，而是因为从这以后，普通用户开始把 AI 的价值单位从：

> “它回答得好不好”

改成：

> **“它到底替我做完了什么？”**

这个问题也必须带着另一半：

> **“它做了几次才成功？花了多少 token？中间需要我救几次？有没有做错或做过头？”**

Agent 商业史如果只保存厂商的成功 demo，会制造一部虚假的技术史。

真正值得保存的，是**能力、失败、成本与权限同时扩大的历史。**

---

*2026-08 补订：GPT-5.6 Sol（OpenAI）。*

> 📖 详见《志·中国 Agent 生态与商业化》《志·个人 Agent 生态与商业化》《表·中国 OpenClaw“龙虾”生态对照表》《表·Agent 发展大事表》《论·Agent 时代》。

---

[^1]: Peter Steinberger, “Introducing OpenClaw”, 2026-01-29. https://github.com/openclaw/openclaw.ai/blob/main/src/content/blog/introducing-openclaw.md
[^2]: OpenClaw, “Lore” — Clawd: Nov 25, 2025 - Jan 27, 2026. https://github.com/openclaw/openclaw/blob/main/docs/start/lore.md
[^3]: OpenClaw official repository / README. https://github.com/openclaw/openclaw
[^4]: Reuters, “China warns of security risks linked to OpenClaw open-source AI agent”, 2026-02-05. https://www.reuters.com/world/china/china-warns-security-risks-linked-openclaw-open-source-ai-agent-2026-02-05/
[^5]: Bloomberg, “OpenClaw’s an AI Sensation, But Its Security a Work in Progress”, 2026-02-04. https://www.bloomberg.com/news/articles/2026-02-04/openclaw-s-an-ai-sensation-but-its-security-a-work-in-progress
[^6]: OpenClaw, “Why OpenClaw” / security model. https://docs.openclaw.ai/start/why-openclaw
[^7]: Reuters, “Chinese tech hubs promote OpenClaw AI agent despite security warnings”, 2026-03-09. https://www.reuters.com/world/asia-pacific/chinas-shenzhen-backs-openclaw-ai-with-subsidies-despite-beijings-security-2026-03-09/
[^8]: Caixin Global, “OpenClaw Craze Fuels Fresh AI Ambitions, Fears in China”, 2026-03-20. https://www.caixinglobal.com/2026-03-20/in-depth-openclaw-craze-fuels-fresh-ai-ambitions-fears-in-china-102425383.html
[^9]: Reuters, “As OpenClaw enthusiasm grips China, schoolkids and retirees alike raise ‘lobsters’”, 2026-03-19. https://www.reuters.com/technology/openclaw-enthusiasm-grips-china-schoolkids-retirees-alike-raise-lobsters-2026-03-19/
[^10]: CNA, “China’s ‘lobster’ craze: OpenClaw drafts reports, books flights - and raises security concerns”, 2026-03-11. https://www.channelnewsasia.com/east-asia/china-openclaw-ai-agent-lobster-popular-security-risks-5985886
[^11]: Reuters, Tencent AI / OpenClaw suite coverage, 2026-03-18. https://www.reuters.com/world/asia-pacific/tencent-books-13-rise-quarterly-revenue-gaming-ai-demand-2026-03-18/
[^12]: Tencent Cloud Developer Community, “QClaw 与 WorkBuddy / OpenClaw 实测与定位”. https://developer.cloud.tencent.com/article/2646434
[^13]: Reuters, “Tencent integrates WeChat with OpenClaw AI agent”, 2026-03-22. https://www.reuters.com/technology/tencent-integrates-wechat-with-openclaw-ai-agent-amid-china-tech-battle-2026-03-22/
[^14]: Baidu, “DuClaw: zero-deployment access to OpenClaw”, 2026-03-11. https://www.prnewswire.com/news-releases/baidu-launches-duclaw-enables-zero-deployment-access-to-openclaw-302710924.html
[^15]: Reuters, “Baidu joins China’s OpenClaw frenzy with new AI agents”, 2026-03-17. https://www.reuters.com/business/media-telecom/baidu-joins-chinas-openclaw-frenzy-with-new-ai-agents-2026-03-17/
[^16]: Volcengine, ArkClaw release notes — 2026-03-16 launch. https://www.volcengine.com/docs/87732/2279754
[^17]: Volcengine, “迁移 OpenClaw 至 ArkClaw”. https://www.volcengine.com/docs/87732/2431032
[^18]: Volcengine, ArkClaw cloud-computer limitations. https://www.volcengine.com/docs/87732/2431008
[^19]: Zhipu AutoClaw product updates, “AutoClaw 是什么——将 Agent 执行力装进 IM 入口”. https://autoclaw.zhipuai.cn/blog/product/
[^20]: Alibaba Cloud, CoPaw / QwenPaw docs. https://www.alibabacloud.com/help/en/model-studio/qwenpaw
[^21]: Alibaba Cloud, “Purchase and deploy CoPaw”. https://www.alibabacloud.com/help/en/simple-application-server/use-cases/purchase-and-deploy-copaw
[^22]: Alibaba Cloud Native Community, “HiClaw & CoPaw”. https://www.alibabacloud.com/blog/alibaba-open-sources-hiclaw-%2526-copaw-low-memory-ai-agents-for-local-automation_602950
[^23]: Tencent Cloud Developer Community, WorkBuddy architecture / CodeBuddy lineage. https://developer.cloud.tencent.com/article/2651860
[^24]: Tencent Cloud, WorkBuddy release notes. https://cloud.tencent.com/document/product/1831/134324
[^25]: Tencent Cloud Techpedia, WorkBuddy — public launch 2026-03-09. https://cloud.tencent.com/developer/techpedia/2610
[^26]: Reuters, “Alibaba launches AI platform for enterprises as agent craze sweeps China”, 2026-03-17. https://www.reuters.com/world/asia-pacific/alibaba-launches-new-ai-agent-platform-enterprises-2026-03-17/
[^27]: Reuters Breakingviews, “China’s AI token obsession may be misguided”, 2026-04-15. https://www.reuters.com/commentary/breakingviews/chinas-ai-token-obsession-may-be-misguided-2026-04-15/
[^28]: WIRED, “China’s OpenClaw Boom Is a Gold Rush for AI Companies”, 2026-03-13. https://www.wired.com/story/china-is-going-all-in-on-openclaw/
[^29]: Gonzalez-Pumariega et al., “On the Reliability of Computer Use Agents”, arXiv:2604.17849. https://arxiv.org/abs/2604.17849
[^30]: Princeton HAL, Agent Reliability findings. https://hal.cs.princeton.edu/reliability/findings/
[^31]: Dong et al., “How Benchmarks Mis-Score Computer-Use Agents”, arXiv:2607.28367. https://arxiv.org/abs/2607.28367
[^32]: Bloomberg, “China Moves to Curb OpenClaw AI Use at Banks, State Agencies”, 2026-03-11. https://www.bloomberg.com/news/articles/2026-03-11/china-moves-to-limit-use-of-openclaw-ai-at-banks-government-agencies
