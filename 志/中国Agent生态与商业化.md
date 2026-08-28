# 《中国 Agent 生态与商业化》

> 如果只从 OpenAI、Anthropic、Microsoft、Salesforce 看 Agent 商业化，会得到一条很自然的美国叙事：coding agent 先跑通，企业 SaaS 把 Agent action 变成计费单位，云厂商再把 runtime、memory、gateway 和 policy 拆成基础设施 SKU。
>
> 中国市场走出的形态更杂，也更贴近既有互联网与云生态。到 2026 年，中国 Agent 已同时进入**手机、电脑、超级应用、企业协作平台、公有云、低代码平台、开放模型、私有部署和多 Agent 集群**。它们没有收敛成一个统一产品，而是形成多条相互竞争、又经常互相调用的路线。

---

## 一、先定义：“国产 Agent”并不是一个干净的分类

本篇不用“国产”二字把所有中文团队产品混成一类，而分三层记录。

### 1. 中国境内公司直接运营的 Agent 产品与平台

包括：

- 阿里巴巴 / 阿里云：悟空、百炼 Managed Agents、Qoder CN、无影 Agentic Computer；
- 字节跳动：扣子、豆包手机助手、Seed Agent 模型；
- 腾讯：Tencent Cloud ADP；
- 百度：千帆 Agent 开发平台；
- 智谱：AutoGLM、GLM Agent API、GLM Coding Plan；
- 月之暗面：Kimi Agent / Agent Swarm / Kimi Code / Kimi Claw；
- MiniMax：MiniMax Agent / MaxClaw / MiniMax Code。

这些产品的运营主体、主要商业入口或基础设施明确在中国公司体系内。

### 2. 中国团队起源、但已全球化经营的平台

**Dify** 是典型例子。它由中文团队创办，拥有强大的中国开发者和企业用户基础，同时又是全球化开源 / 企业软件公司。2026 年 3 月 Dify 宣布完成 3000 万美元 Pre-A 融资；8 月 27 日又重构 Agent 产品，把 Agent 从 workflow 中的临时节点提升为可复用、可独立运行、可进入其他工作流协作的“AI teammate”。[^20][^22]

这类公司适合写入“中国 Agent 生态”，但不宜简单写成“只属于中国市场”。

### 3. 中国团队起源、但公司与市场已发生跨境迁移的产品

**Manus** 更需要谨慎。它由中国创业团队起源，2025 年爆红后迅速全球化并迁往新加坡；Reuters 2026 年报道其在被 Meta 收购前已达到约 1 亿美元 ARR，而且主要市场在日本、中东和美国，在中国并无实质业务。[^23]

因此 Manus 可以作为“中国 Agent 创业人才与产品方法向全球外溢”的案例，但不应和阿里、腾讯、百度这类中国境内企业 Agent 平台放在同一法律 / 市场分类下。

### 4. 模型有很强 Agent 能力，不等于厂商有一个成熟 Agent 产品

DeepSeek 是最容易被误分类的例子。

V3.2、V4 等模型已经把 thinking-in-tool-use、Responses API、长上下文、视觉 Agent 与代码能力做得很深，但 DeepSeek 的核心商业产品仍主要是模型 / API / 权重，而不是一个类似 Cowork、Wukong、Coze、Kimi Agent 的完整终端 Agent 工作台。

所以本篇把 DeepSeek 记作**Agent 模型底座路线**，而不是强行列成“第一方通用 Agent 产品”。

---

## 二、总览：中国 Agent 在 2026 年形成六条路线

| 路线 | 代表 | 核心价值 |
|---|---|---|
| 手机 / GUI Agent | AutoGLM、豆包手机助手 | 不等 App 提供 API，直接理解并操作人类界面 |
| 通用工作 / 多 Agent 工作台 | Kimi Agent、扣子 3.0、阿里悟空、MiniMax Agent | 把研究、Office、网页、文件、代码与长期任务放进一个任务空间 |
| 企业 Agent 开发平台 | 阿里云百炼、腾讯云 ADP、百度千帆 | 企业自建 Agent，接知识库、工作流、MCP、权限与业务系统 |
| 模型原生 Agent | Kimi K2.5/K2.6/K3、Seed1.8/2.x、GLM、DeepSeek V4 | 把 tool use、GUI、search、coding、long-horizon、swarm 训练进模型 |
| Coding Agent | Qoder CN、Kimi Code、GLM Coding Plan、MiniMax Code | 最早能被 test / Git / CI 机器验收的商业场景 |
| 开源 / 私有部署 Agent 平台 | Dify、Open-AutoGLM 等 | 降低模型厂商锁定，满足私有部署、合规与二次开发 |

中国市场的特殊性在于：**这六条路线常常不是由六家公司分别占据，而是同一家公司同时做几层。**

阿里既有悟空这种终端工作 Agent，也有百炼 Managed Agents、Qoder、无影云 Agent 和 Qwen 模型；字节既有 Seed 模型，也有扣子工作台和豆包手机助手；智谱既卖模型 API，又做 AutoGLM Phone Use 和 Agent API。

因此中国 Agent 竞争比“谁做出了一个最强 Agent App”更像一场**全栈组合战**。

---

## 三、Kimi：把 Agent 直接写进消费者会员等级

月之暗面的路线最值得单独写，因为它把 multi-agent scaling 与消费订阅结合得最直接。

### 3.1 从长上下文品牌转向 Agent 品牌

Kimi 早期最强的市场认知是长上下文。到 K2.5 / K2.6 后，产品核心已经扩展为：

- Agent；
- Deep Research；
- Office 文档 / PPT / Excel；
- Kimi Code；
- Kimi Work；
- Kimi Claw；
- Agent Swarm；
- scheduled tasks；
- website deployment。

Kimi 官方把 Agent 描述为可直接输出 Word、PDF、Excel、PPT 等工作制品，而 K2.6 Agent Swarm 最多可协调约 300 个 sub-agent、单任务 4000+ tool calls。[^2]

### 3.2 Agent Swarm 不再只是研究功能，而进入付费套餐

Kimi 当前会员体系非常有史料价值：[^1]

| 套餐 | 月费 | Agent / Swarm 相关权益 |
|---|---:|---|
| Andante | ¥49 | 约 30 次 Agent 使用；scheduled tasks；Kimi Code |
| Moderato | ¥99 | 约 60 次 Agent；2 个并行 Agent task；25 次 Swarm；2 个并行子任务 |
| Allegretto | ¥199 | 约 150 次 Agent；50 次 Swarm；4 个并行子任务；Goal Mode；Kimi Claw |
| Allegro | ¥699 | 约 360 次 Agent；120 次 Swarm；8 个并行子任务；1M 长对话；更高项目 / 存储配额 |

更重要的是，Kimi 后来把 Agent、Deep Research、PPT、Docs、Sheets、Code、Work、Claw 等统一到一个 credit pool，按实际 token 消耗扣减。[^3][^4]

这意味着商业单位从：

> “你订阅了 Kimi”

变成：

> **“你购买了一池可被研究、代码、Agent、Swarm 和云沙箱共同消费的智能预算。”**

### 3.3 云主机本身也开始持续扣费

Kimi Claw 的云主机即使暂时没有主动执行任务，只要保持部署状态，就持续占用 sandbox / runtime 资源；官方帮助中心直接说明会按日从会员 credits 中扣除云主机运行成本。[^1]

这非常接近传统云计算：

- 模型 token 是计算量；
- Agent task 是工作负载；
- Claw host 是持续在线 runtime；
- website deployment 是持续在线服务。

Kimi 因而是中国市场里**“消费级 Agent → 云 workload 计费”**最清楚的样本之一。

---

## 四、阿里：从 Qwen 模型生态走向“企业 Agent 全栈”

阿里的 Agent 路线最难用一个产品名概括，因为它同时做终端工作台、模型平台、开发者计划和云计算环境。

### 4.1 悟空：把 Agent 直接放进企业协作系统

**2026-03-17**，阿里巴巴正式发布企业级 AI 原生 Agent 平台 **悟空（Wukong）**。官方称它可以在单一界面协调多个 Agent，处理文档、表格、会议、研究等复杂任务，并直接嵌入拥有 2000 万+企业组织的钉钉。[^5]

悟空的重要性不是“阿里也有一个聊天 Agent”。

它直接继承钉钉的：

- 组织身份；
- 通讯录；
- 文档；
- 日程；
- 审批；
- 企业应用；
- 权限体系。

钉钉随后完成 CLI 化改造，让 Agent 能调用钉钉大量能力，而不必靠模拟鼠标点击。[^6]

这条路线与 Computer Use 很不同：

> GUI Agent 用视觉模拟人类；悟空更希望把企业软件本身改造成**Agent 可调用的结构化操作面**。

### 4.2 悟空商业模式：个人算粒 + 企业销售

悟空公开站点当前给出 Free、Starter、Basic、Premium 等档位，并以“算粒”提供任务 / 模型消费额度；同时企业方案走联系销售。[^7]

这说明阿里同时保留：

- 类 ChatGPT / Cursor 的订阅入口；
- 企业合同；
- 算力 / 模型 usage 计量。

### 4.3 百炼 Managed Agents：Agent runtime 正式按小时卖

阿里云 **Managed Agents** 自 **2026-08-17** 起正式商业化。官方价格把 Agent 拆成三项：[^8]

| 费用 | 计量 |
|---|---|
| 会话运行时费 | **0.5 元 / 小时** |
| 模型调用费 | 按实际模型 token 标准计费 |
| 工具 / MCP 调用费 | 按对应工具 / 服务单独计费 |

这是中国市场很重要的一步，因为它明确宣告：

> **Agent runtime 本身是一种独立云资源，不再免费附送给 token。**

### 4.4 无影 Agentic Computer：给企业 Agent 一台受管云电脑

阿里云无影的 **Agentic Computer** 则把 Agent 运行环境产品化：管理员创建 Agent、配置底层模型与权限，用户通过无影客户端、钉钉、飞书、企业微信、微信、QQ 等入口下达任务，Agent 在云环境执行。[^9]

这条路线非常像企业 VDI 与 Agent runtime 的结合：

> **不是让 Agent 接管员工真电脑，而是给 Agent 一台企业可控的云电脑。**

### 4.5 Qoder / Token Plan：Coding Agent 也进入统一 credits

阿里云 Token Plan 团队版采用 Credits 统一计量，可接 Qwen Code、Claude Code、OpenClaw 等多种 Agent / coding 工具；Qoder CN 则作为阿里云自己的智能编码 IDE 接入 Token Plan / Coding Plan / 按量计费。[^10][^11]

因此阿里 2026 年的商业闭环大致是：

> **Qwen 模型 → 百炼 token / credits → Managed Agent runtime → Qoder / Wukong / Agentic Computer → 钉钉企业分发。**

---

## 五、字节：扣子从“搭 Bot”变成“AI 团队工作台”

### 5.1 扣子 3.0：一人 + 多 Agent / 多人 + 多 Agent

**2026-05-29**，扣子发布 3.0。官方把产品重新定义成“面向 Agent 时代的新一代 AI 团队协作平台”。[^12][^13]

核心变化包括：

- 一人 + 多 Agent；
- 多人 + 多 Agent；
- 项目空间；
- 长期记忆；
- 专业技能；
- 云端 Agent；
- 本地 Agent 接入；
- Claude Code / Codex CLI / OpenClaw 等第三方 Agent 接入；
- 手机 / 电脑跨端持续推进任务。

这说明扣子已经从 2023—2024 年的“低代码 Bot / workflow builder”转向：

> **项目、资产、人类成员与多个 Agent 共存的协作空间。**

### 5.2 扣子的收费：订阅 + 积分 + 云设备在线时长

扣子现在有个人版、团队版、企业版。企业版采用**包年包月 + 按量付费**混合计费；企业版的积分和席位绑定。[^14]

更值得记录的是云设备：[^15]

- 扣子云电脑；
- 扣子云手机；
- OpenClaw 云电脑。

从 2026 年 6—7 月开始，这些云设备按规格与**在线时长**计费。

这与 Kimi Claw、阿里 Managed Agents 的方向高度一致：中国 Agent 商业化正在逐渐承认：

> **真正贵的不只是模型输出，而是一直在线、随时可以替你干活的执行环境。**

### 5.3 Seed：把 Search、Code、GUI 合进通用 Agent 模型

字节 Seed 团队在 **2025-12-18** 发布 **Seed1.8**，官方直接称其为 generalized agentic model，并把 search、code、GUI interaction 和 complex workflow 合为同一模型能力。[^16]

到 2026 年，Seed 模型页已经把 Seed2.0 / Seed2.1 继续定义为面向真实生产力的 Agent 模型。[^17]

字节因此形成两层：

> **Seed 负责 Agent 模型；扣子负责 Agent 产品与协作平台。**

### 5.4 豆包手机助手：Agent 进入消费硬件

豆包手机助手官方页面已经提供配套硬件体验，并明确列出“操作手机”能力；同时仍把产品称为**早期探索阶段**。[^18]

这点很重要：它已经是真实产品和硬件合作，不再只是 benchmark；但它也还不能写成成熟的大规模手机操作系统替代方案。

中国市场在 Phone Use 上非常激进，但商业史必须同时保留“已经出售 / 可体验”和“仍处于早期”的两面。

---

## 六、智谱：Phone Use 是中国 Agent 最早形成鲜明差异化的路线

### 6.1 AutoGLM：不是聊天，而是直接操作 App

智谱在 2024 年就推出 AutoGLM，核心是让视觉语言模型理解手机屏幕，再通过设备控制执行 Tap、Type、Swipe、Back、Home 等动作。

当前 **AutoGLM-Phone** 官方文档已经明确支持 Android，并列出微信、淘宝、京东、拼多多、美团、饿了么、携程、12306、滴滴、Bilibili、抖音、小红书等 50+ 中文应用。[^19]

这条路线的重要性在于：

> **中国移动互联网大量能力被封装在 App 里，而不是开放 Web / API。**

所以 Phone Use 对中国 Agent 的价值，可能比欧美桌面 Web 场景更高。

### 6.2 AutoGLM 2.0：给 Agent 自己的云手机 / 云电脑

后续 AutoGLM 2.0 又把执行移入独立云手机 / 云电脑，使 Agent 工作时不占用户本地屏幕，并计划扩展定时任务、跨设备和硬件 API。[^24]

这和 Cowork / Codex 的 cloud sandbox、扣子云设备、阿里 Agentic Computer 在结构上越来越接近：

> **Agent 最终需要自己的机器，而不是永远借用人的屏幕。**

### 6.3 商业化不只靠 AutoGLM App

智谱还有更传统的商业入口：

- GLM Coding Plan 团队版：席位、权限、用量、预算统一管理；[^25]
- Agent API；
- GLM PPT 等垂直 Agent API。

GLM PPT 当前公开定价为 **5 元 / 百万 Tokens**，并按整个 Agent task flow 中所有节点产生的 token 总数计量。[^26]

这说明智谱同时走：

> **C 端 GUI Agent + 开发者 Agent API + Coding subscription + 垂直任务 Agent。**

---

## 七、腾讯：更像 AgentOps 平台，而不是做一个明星 Agent App

腾讯云 **Agent Development Platform（ADP）** 的定位非常企业化。

官方把它描述为以 **AgentOps** 为核心的企业原生 Agent 平台，支持：

- Agentic Loop；
- LLM + RAG；
- Workflow；
- Multi-agent；
- 构建、分发、管理、使用全生命周期；
- API / SDK；
- 企业安全、可观测性与运营。[^27][^28]

### 7.1 2026-07-01：工作台 / Claw 模式正式商业化

腾讯云公告明确：智能工作台和 Claw 模式应用从 **2026-07-01** 起结束免费公测，转为正式商用，并根据**任务运行时长**按量计费；费用使用 PU 余额 / 资源包扣除。[^29]

这又一次说明：中国云厂商正在把 Agent 计费单位从 token 扩展到：

> **runtime duration。**

### 7.2 云部署 License

腾讯 ADP 还提供云部署方案，通过软件 License 将平台部署在客户自己的腾讯云基础设施上，由客户自主运维数据、网络与资源。[^30]

对于金融、医疗、媒体、制造等企业，这种“平台 License + 自有 IaaS + 模型资源”的方式，比单纯 SaaS Agent 更符合采购习惯。

### 7.3 客户不是空白

腾讯云产品页列出银行、汽车、医疗、媒体、消费电子等多个合作客户。[^27]

这类客户列表不能证明 Agent 已经替代大量岗位，但至少说明 ADP 已经进入企业项目与正式售卖，而不是停留在技术预览。

---

## 八、百度：把千帆整个重构成“以 Agent 为核心”的企业平台

百度千帆当前官方名称已经直接写成：

> **百度千帆·大模型服务及 Agent 开发平台。**[^31]

平台围绕：

- Agent 引擎；
- 工具 / MCP；
- 模型服务；
- 企业级服务；
- RAG；
- Workflow；
- UI Builder；
- 零代码 / 低代码 / 全代码。

百度的路线不是先做一个“万能 AI 员工”，而是把原来的 ModelBuilder / AppBuilder 能力逐渐围绕 Agent 重排。

### 8.1 商业模式：模型 + 搜索 + 知识库 + 企业组件

百度千帆当前的计费结构同样是分层的：[^32][^33]

- 模型 token；
- 百度搜索 / 智能搜索按调用次数；
- 知识库检索按调用 / QPS / 专享资源；
- 文档解析；
- 某些行业组件按 QPS / 年购买。

这意味着企业 Agent 的成本不是一个“Agent seat”，而是一张资源账单：

> **model + search + retrieval + document processing + component。**

百度和阿里、腾讯一样，正在把 Agent 当成云资源组合器，而不是单一聊天产品。

---

## 九、MiniMax：模型公司开始把“并发 Agent 数”写进套餐

MiniMax 当前不仅有模型 API，也已经上线 **MiniMax Agent**，并提供 Agent Team / MaxClaw 等入口。[^34]

MiniMax 的 Token Plan 很有代表性：[^35]

| 套餐 | 月费（公开档） | Agent 相关权益 |
|---|---:|---|
| Plus | $20 | 约 3—4 concurrent agents |
| Max | $50 | 约 4—5 concurrent agents |
| Ultra | $120 | 约 6—7 concurrent agents |

同时包含 MiniMax Code、1M context、多模态与媒体生成配额。

这是一种非常直接的新计价维度：

> **不是“每月多少消息”，而是“你能同时雇多少个 Agent worker”。**

Reuters 2026 年 8 月报道 MiniMax 上半年收入同比增长 283.1% 至 1.166 亿美元，说明模型 / 平台商业需求已经形成规模；但这组收入不能全部归因于 Agent，需要和其语音、视频、模型 API 等业务一起理解。[^36]

---

## 十、Dify：开源 Agent 平台走向企业软件公司

Dify 是中国团队影响全球 Agent 工程生态的典型。

### 10.1 开源 + SaaS + Enterprise 三层商业模式

Dify 当前提供：[^21]

- Community：免费自托管；
- Cloud Professional：$590 / workspace / year；
- Cloud Team：$1590 / workspace / year；
- Enterprise：定制报价，支持私有部署、SSO、多工作空间、安全与治理。

这说明开源 Agent 平台并不意味着“只能靠咨询赚钱”。它可以形成：

> **开源分发 → 云订阅 → 企业 License / 托管 / 支持。**

### 10.2 2026：Agent 从 workflow node 升级成可复用 teammate

**2026-08-27**，Dify 发布重构后的 Agent。官方明确说，希望 Agent 不再只是 workflow 里的临时节点，而成为能学习反馈、独立运行、也能进入其他流程协作的 reusable AI teammate。[^20]

这说明连最典型的 workflow-first 平台也在发生变化：

> **Workflow 不会消失，但 Agent 正从“流程中的一个节点”变成“可以被流程调用的长期主体”。**

### 10.3 商业化信号

Dify 2026 年 3 月宣布完成 **3000 万美元 Pre-A**，并把企业采用与“people + agents”的组织形态作为后续重点。[^22]

Dify 的历史意义因此不只是“一个好用的开源工作流工具”，而是证明中国团队也能在全球开发者市场形成 Agent 基础设施产品。

---

## 十一、Manus：最成功的中国起源 Agent 创业案例，却不能简单叫“国产”

Manus 必须单独处理。

它在 2025 年以通用 Agent demo 爆红，很快转向海外市场，并在 2025 年底前后被 Meta 以超过 20 亿美元收购。Reuters 2026 年报道称，Manus 在交易前已达到约 **1 亿美元 ARR**。[^23]

从产品商业史看，这说明一件很重要的事：

> **通用 Agent 不只是融资叙事，至少有产品已经证明可以达到九位数美元 ARR。**

但 Manus 的公司结构与市场后来已经高度国际化。Reuters 同时指出其主要客户和业务在日本、中东、美国，而不是中国。

因此本书把 Manus 放在“中国团队起源 / 全球商业化”一栏，而不是拿它代表中国境内 Agent 市场。

---

## 十二、为什么中国 Phone Use / Cloud Device 路线特别突出

欧美 Agent 产品最自然的环境通常是：

- browser；
- SaaS API；
- terminal；
- cloud sandbox。

中国互联网的结构不同。

大量真实生活服务长期被封装在移动 App 内：

- 微信；
- 淘宝；
- 京东；
- 拼多多；
- 美团；
- 饿了么；
- 携程；
- 12306；
- 滴滴；
- 小红书；
- 抖音。

它们并不都向第三方开放足够完整的自动化 API。

所以 AutoGLM、豆包手机助手，以及后来各种云手机 / 云电脑 Agent，会在中国市场自然获得更高战略价值。

这也带来更大的安全问题：

> 手机里不仅有网页，还有支付、账号、通信、位置、订单和隐私。

于是 Phone Agent 的成熟度不能只看 AndroidWorld / benchmark，也必须看：

- 登录与验证码怎样交给人；
- 支付动作是否必须确认；
- 哪些 App 可以操作；
- 操作日志是否可审计；
- 云手机保存什么凭据；
- 平台是否允许后台长期运行。

**行动半径越接近日常生活，权限工程越重要。**

---

## 十三、中国企业 Agent 的共同方向：从“搭应用”转向 AgentOps

把阿里、腾讯、百度、扣子、Dify 放在一起，会看到一条共同演进。

### 第一阶段：大模型应用开发平台

核心词是：

- Prompt；
- RAG；
- 知识库；
- Workflow；
- Plugin。

### 第二阶段：Agent 平台

核心词变成：

- Tool use；
- MCP；
- Memory；
- Multi-agent；
- Sandbox；
- Runtime；
- Scheduler；
- Observability；
- Permission；
- AgentOps。

也就是说，中国企业 Agent 平台正在经历和美国类似的工程迁移：

> **从“帮企业搭一个 AI 应用”，变成“帮企业运行一群长期工作的 AI 执行单元”。**

但中国厂商更常把这套系统嵌进既有云、IM、办公和移动生态，而不是完全独立地卖一个新 SaaS。

---

## 十四、商业计量：中国市场已经出现七种单位

截至 2026 年夏季，中国 Agent 市场至少同时存在：

| 计量单位 | 代表 |
|---|---|
| Seat / 会员等级 | Kimi、扣子、Coding Plan |
| Credits / 积分 / 算粒 / PU | Kimi、扣子、悟空、腾讯 ADP |
| Token | 百炼、千帆、智谱 Agent API、MiniMax |
| Agent 次数 / Swarm 次数 | Kimi 会员 |
| 并发 Agent 数 | Kimi、MiniMax |
| Runtime 时长 | 阿里 Managed Agents、腾讯智能工作台 / Claw、扣子云设备 |
| Tool / Search / MCP / Retrieval 调用 | 阿里、百度、腾讯等企业平台 |

这张表说明“中国 Agent 商业化”已经不能用“多少钱一个月”概括。

真正的成本函数越来越接近：

> **总任务成本 = 模型 + runtime + 搜索 / RAG + 工具 + 云设备 + 并发 + 存储 + 人工接管。**

这与全球 Agent 市场最终走向 **Cost per successful completed task** 的方向一致。

---

## 十五、中国 Agent 的优势与短板

### 已经形成的优势

**第一，产品分发入口很强。**

钉钉、扣子、豆包、Kimi、云平台、手机厂商合作，让 Agent 可以直接触及真实用户，而不必从零建立工作入口。

**第二，模型与产品迭代距离很短。**

Seed、Kimi、GLM、Qwen 等模型能力往往很快进入自家 Agent / coding / cloud 产品。

**第三，Phone Use / cloud device 探索更积极。**

移动 App 生态倒逼中国 Agent 更早处理 GUI、云手机、跨 App 与设备权限问题。

**第四，成本竞争激烈。**

模型价格、credits、国内云算力与开放权重使高频 Agent workload 的边际成本持续下降。

### 仍然明显的短板

**第一，产品碎片化严重。**

同一家公司里常同时存在模型平台、Agent Builder、工作台、Coding Plan、云电脑和多个品牌入口。

**第二，跨平台协议与生态仍在快速变化。**

MCP 已被普遍吸收，但真正跨厂商的 Agent-to-Agent 业务互操作仍远未稳定。

**第三，企业 ROI 公开数据仍不足。**

“有很多客户”“上线了很多 Agent”不等于已经证明节省了多少人力、产生多少毛利。

**第四，GUI Agent 的可靠性仍受真实应用变化影响。**

按钮、弹窗、验证码、登录态、风控、支付确认都比 benchmark 更难。

**第五，开放模型不自动等于开放 Agent。**

一个开放权重模型如果仍依赖私有云 runtime、闭源工作台和专有身份系统，最终控制权仍可能集中在平台。

---

## 十六、评曰：国产 Agent 不是一个产品，而是一场“执行层国产化”

中国大模型竞争早期最容易被理解成：

> 有没有自己的 GPT？

Agent 时代把问题换了。

真正需要本地化和自主控制的，不只有 checkpoint，还包括：

- 工具连接；
- 企业数据；
- 手机 / 电脑操作；
- 云沙箱；
- 多 Agent 调度；
- 身份与权限；
- 搜索与 RAG；
- Agent runtime；
- 计费与预算；
- 审计与运维。

从这个角度看，Kimi Swarm、AutoGLM、扣子、悟空、百炼 Managed Agents、腾讯 ADP、百度千帆、Dify 与 MiniMax 并不是同一赛道上的八个“聊天机器人”。

它们是在争夺**智能真正开始行动以后，谁来提供那一层执行基础设施。**

中国 Agent 的历史因此很可能不会复制 ChatGPT 的单一爆款路线。

它更可能长成一张复杂的网：

> **模型公司提供大脑，云厂商提供机器，超级应用提供身份与工作入口，Agent 平台提供编排，手机 / GUI Agent 提供最后一公里，开源平台提供迁移与私有部署。**

到 2026 年，这张网已经从 demo 阶段进入真正的商业化阶段。

但最后仍然要用同一个标准检验：

> **不是“它叫不叫 Agent”，而是它能否在可控成本和权限边界内，稳定地把真实任务做完。**

---

*2026-08 补订：GPT-5.6 Sol（OpenAI）。*

> 📖 详见《志·AI Agent 生态》《志·Agent 产品与商业化》《表·中国 Agent 产品与平台对照表》《表·Agent 主流产品与商业化对照表》《论·Agent 时代》《Kimi 列传》《Alibaba 本纪》《GLM 世家》。

---

[^1]: Kimi Help Center, “Membership Pricing and Plan Overview”. https://www.kimi.com/en/help/membership/membership-pricing
[^2]: Kimi Help Center, “Agent Swarm Capabilities”. https://www.kimi.com/en/help/agent/agent-swarm
[^3]: Kimi Help Center, “Agent Credits and Billing”. https://www.kimi.com/en/help/agent/agent-quota-and-billing
[^4]: Kimi, “会员积分说明”. https://www.kimi.com/membership-credits
[^5]: Alibaba Group, “Alibaba Launches Wukong: An AI-Native Agentic Platform for Enterprises”, 2026-03-17. https://www.alibabagroup.com/en-US/document-1971078136456019968
[^6]: DingTalk, “钉钉完成 CLI 命令行界面化改造，支持 AI Agent 直接操作”, 2026-03-19. https://www.dingtalk-global.com/zh/news/activity/dingtalk-cli-ai-agent-support-260319
[^7]: Wukong official pricing / product page. https://www.wukong.ai/zh/
[^8]: Alibaba Cloud Model Studio, “Managed Agents 计费”, commercialized 2026-08-17. https://help.aliyun.com/zh/model-studio/managed-agents-billing
[^9]: Alibaba Cloud WUYING, “Agentic Computer in the AI Management Center”. https://www.alibabacloud.com/help/en/wuying-workspace/create-and-configure-jvscomputer-through-the-ai-management-center
[^10]: Alibaba Cloud Model Studio, “Token Plan（团队版）”. https://www.alibabacloud.com/help/zh/model-studio/token-plan-overview
[^11]: Alibaba Cloud Model Studio, “Qoder CN（原 Lingma）”. https://www.alibabacloud.com/help/zh/model-studio/lingma-agent
[^12]: Coze Docs, “扣子 3.0 都有哪些特色能力？”, release 2026-05-29. https://docs.coze.cn/cozespace_coze_app_faq
[^13]: Coze Docs, “了解扣子”. https://docs.coze.cn/
[^14]: Coze Docs, “订阅套餐 / 企业版计费规则”. https://docs.coze.cn/guides_edition
[^15]: Coze Docs, “云设备费用”. https://docs.coze.cn/coze_pro_cloud_device_fee
[^16]: ByteDance Seed, “通用 Agent 模型 Seed1.8 正式发布”, 2025-12-18. https://seed.bytedance.com/zh/blog/official-release-of-seed1-8-a-generalized-agentic-model
[^17]: ByteDance Seed, “Seed Models”. https://seed.bytedance.com/zh/models
[^18]: 豆包手机助手官方网站. https://o.doubao.com/
[^19]: 智谱 AI 开放文档, “AutoGLM-Phone”. https://docs.bigmodel.cn/cn/guide/models/vlm/autoglm-phone
[^20]: Dify, “A New Chapter for Dify Agent”, 2026-08-27. https://dify.ai/zh/blog/a-new-chapter-for-dify-agent
[^21]: Dify Pricing. https://dify.ai/zh/pricing
[^22]: Dify Blog, “Dify Raises $30M: Tomorrow's Organizations Will Be Built by People and Agents”, 2026-03-10. https://dify.ai/blog
[^23]: Reuters, “Talent, not territory will define AI future”, 2026-01-13; Manus ARR / market context. https://www.reuters.com/technology/artificial-intelligence/talent-not-territory-will-define-ai-future-taosha-wang-2026-01-13/
[^24]: AutoGLM 2.0 product summary / cloud phone-computer route, mirrored in Volcengine developer community. https://developer.volcengine.com/articles/7540557887958057002
[^25]: 智谱 AI 开放文档, “新品发布” — GLM Coding Plan 团队版, 2026-05-29. https://docs.bigmodel.cn/cn/update/new-releases
[^26]: 智谱 AI 开放文档, “GLM PPT” Agent API pricing. https://docs.bigmodel.cn/cn/guide/agents/glm-ppt
[^27]: 腾讯云, “腾讯云智能体开发平台（ADP）”. https://cloud.tencent.com/product/adp
[^28]: 腾讯云文档, “腾讯云智能体开发平台简介”. https://cloud.tencent.com/document/product/1759/132546
[^29]: 腾讯云公告, “智能工作台及 Claw 模式应用正式商业化”, effective 2026-07-01. https://cloud.tencent.com/announce/detail/2331
[^30]: 腾讯云文档, “ADP 云部署概述”. https://cloud.tencent.com/document/product/1759/128512
[^31]: 百度智能云, “百度千帆·大模型服务及 Agent 开发平台”. https://cloud.baidu.com/doc/AppBuilder/s/Tlpv3oxpy
[^32]: 百度智能云, “千帆价格”, updated 2026-07-09. https://cloud.baidu.com/doc/qianfan-docs/s/Jm8r1826a
[^33]: 百度智能云, “知识库计费”. https://cloud.baidu.com/doc/qianfan/s/Zmlj32okw
[^34]: MiniMax Agent. https://agent.minimax.io/
[^35]: MiniMax Token Plan. https://platform.minimax.io/subscribe/coding-plan
[^36]: Reuters, “China's MiniMax sees revenue nearly quadruple in first half as AI demand surges”, 2026-08-26. https://www.reuters.com/world/china/chinas-minimax-sees-revenue-nearly-quadruple-first-half-ai-demand-surges-2026-08-26/
