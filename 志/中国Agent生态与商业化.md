# 《中国 Agent 生态与商业化》

> 如果只从 OpenAI、Anthropic、Microsoft、Salesforce 看 Agent 商业化，会得到一条很自然的美国叙事：coding agent 先跑通，企业 SaaS 把 action / credit 变成计费单位，云厂商再把 runtime、memory、gateway、identity 和 policy 拆成基础设施 SKU。
>
> 中国市场的路径更杂。到 2026 年，Agent 同时长进了**个人电脑、微信 / 飞书 / 钉钉、手机系统、云电脑、企业软件、低代码平台、模型平台、支付系统和国产 AI 芯片 serving**。如果问“中国普通用户什么时候真正开始把 Agent 当成会干活的软件”，最有解释力的分水岭不是某个国产模型发布，而是 **2025 年末 Clawd / OpenClaw 出现、2026 年 3 月“养龙虾”爆发**。
>
> 但这一热潮也最容易制造假历史：发布会演示、产品页“支持”的功能和真实用户长期使用不是一回事。本篇按《凡例 v2.2》区分**厂商宣称、公开可用状态、用户 / 独立实测、已知限制与生产商业化**，不把“能演示一次”写成“稳定可靠”。

---

## 一、先定义：“中国 Agent”不是一个干净的国别标签

本篇分四层记录。

### 1. 中国境内公司直接运营的 Agent 产品 / 平台

代表包括：

- 腾讯：QClaw、WorkBuddy、ClawBot、ima、腾讯云 ADP；
- 百度：DuClaw、DuMate、RedClaw、千帆 Agent；
- 阿里：悟空、QwenPaw / CoPaw、HiClaw、百炼 Managed Agents、无影 Agentic Computer、Qoder；
- 字节：ArkClaw、扣子 3.0、飞书 OpenClaw / aily、Seed、豆包手机助手；
- 智谱：AutoGLM、AutoClaw、GLM Agent API、Coding Plan；
- 月之暗面：Kimi Agent / Swarm / Code / Claw；
- MiniMax：MiniMax Agent / MaxClaw / Code；
- 京东：JoyAgent / JoyClaw；
- 华为云：AgentArts / openJiuwen；
- 金山办公：WPS AI / 多智能体 / 智能知识 Agent；
- 荣耀：YOYO 智能体 / YOYO Claw / Agentic OS；
- 支付宝：Agent 支付 / AI 按量付费基础设施。

### 2. 中国团队起源、全球经营的平台

**Dify** 是典型：Community 自托管、Cloud SaaS、Enterprise 私有部署并存。[^34]

### 3. 中国团队起源、公司和市场后来跨境迁移

**Manus** 适合记录为“中国团队起源 / 全球商业化 Agent”，而不应简单当成中国境内 SaaS 市场代表。[^35]

### 4. 强 Agent 模型底座 ≠ 完整第一方 Agent 产品

DeepSeek V3.2 / V4、Seed、GLM、Qwen、Kimi 等模型都具备越来越强的 tool / code / vision / long-horizon 能力。

但只有模型支持 tool use，不等于厂商已经拥有类似 WorkBuddy、Wukong、Cowork 的终端产品。

**模型能力、harness、runtime、产品入口和商业计费必须分开。**

---

## 二、中国大众 Agent 产品史的真正分水岭：OpenClaw“养龙虾”

全球 Agent 史当然不从 OpenClaw 开始：ReAct、AutoGPT、Devin、Computer Use、MCP 都更早。

但中国 2026 年大众产品史很适合这样切：

> **2025-11-25 Clawd → 2026-01 OpenClaw → 2026-03 养龙虾 → 大厂本地化 / 云化 / 超级应用化 → AgentOps 与商业 runtime。**

OpenClaw 的关键不是训练了新模型，而是把一种个人执行结构做得足够直观：

> **自己的机器 + 自己的模型 / API Key + workspace + Skills + shell / browser + 消息入口 + 长期 gateway。**[^1][^2]

Reuters 3 月记录到学生、退休者、普通职场用户都开始“养龙虾”，地方政府办活动、给算力和产业支持，大厂迅速围绕 OpenClaw 推产品。[^3][^4]

与此同时，监管、安全部门和真实用户也几乎同步暴露另一面：token 成本高、执行慢、结果不理想、权限过宽、数据泄露和误操作风险。[^3][^5]

所以 OpenClaw 在中国真正改变的是产品想象：

> **AI 不只是回答问题，而应该有一台机器、一直在线、能从微信接任务并真的改变软件状态。**

> 📖 详见《志·OpenClaw 与中国 Agent“龙虾潮”》《表·中国 OpenClaw“龙虾”生态对照表》。

---

## 三、OpenClaw 之后不是“一堆套壳”，而是四种不同关系

把所有“Claw”都写成套壳会严重失真。

### 第一类：直接产品化 / 托管 OpenClaw

- **QClaw**：腾讯把安装、模型配置和微信 / IM 入口做成个人产品；
- **DuClaw**：百度智能云 zero-deployment 托管 OpenClaw；[^6]
- **ArkClaw**：火山引擎托管并持续同步 OpenClaw，支持把已有记忆 / Skills 迁入；[^7]
- **AutoClaw**：智谱官方称基于 OpenClaw 开源框架。[^8]

### 第二类：基于 OpenClaw 扩展到不同设备 / 企业场景

百度进一步做出：

- DuMate（桌面）；
- RedClaw（移动）；
- DuClaw（云）；
- 小度设备 Agent。[^9]

### 第三类：兼容 OpenClaw 生态，但内核自研

**WorkBuddy** 是最容易被误写的例子。

媒体可称它“腾讯版 OpenClaw”，但腾讯资料 / 社区实测把 QClaw 与 WorkBuddy 明确区分：QClaw 更接近 OpenClaw 产品化，WorkBuddy 则来自 CodeBuddy 系列 Agent 架构，同时兼容 OpenClaw Skills / MCP / Claw 工作方式。[^10]

### 第四类：同一浪潮下的独立重实现 / 竞争产品

- **QwenPaw（原 CoPaw）**：AgentScope / AgentScope Runtime / ReMe 路线；[^11]
- **HiClaw**：Manager + Worker 轻量多 Agent；[^12]
- **悟空**：钉钉组织 / 权限里的企业多 Agent；
- Kimi / 扣子 / MiniMax 的 Claw / Swarm / persistent Agent 形态。

所以更准确的结论是：

> **OpenClaw 没有垄断中国 Agent，却像一个 PC clone / Linux moment，让所有公司突然必须回答“我的长期执行 Agent 长什么样”。**

---

## 四、腾讯：个人 Agent、微信入口与企业 AgentOps 三层并行

腾讯是中国 Agent 产品分层最清楚的样本之一。

### 4.1 QClaw：本机常驻层

QClaw 面向普通用户降低 OpenClaw 部署门槛，并把微信 / 其他 IM 变成远程命令入口。腾讯后来又把 OpenClaw 接入微信 **ClawBot**，Agent 可以像联系人一样被下令。[^13]

### 4.2 WorkBuddy：办公执行层

WorkBuddy 有两个日期口径：

- 3 月 4 日已有 4.5.0 公开版本记录；
- 3 月 9 日进入公开发布 / 公测传播。[^14][^15]

官方列出文件、Office、terminal、Skills、自动任务、MCP、腾讯文档、多模型 / 专家等能力。

按 v2.2 凡例，这些应写作**厂商宣称 / 产品功能**，而不是“复杂任务已经稳定无人值守”。真实使用仍取决于文件格式、权限、网络、外部应用和模型随机性。

### 4.3 ima：个人知识 / 记忆层

ima copilot 更偏用户档案、知识库、长期记忆和偏好，而不是高权限电脑操作。

因此腾讯个人侧可以用一个便于理解、但不是官方架构定义的三层比喻：

> **ima = 脑子 / 记忆；WorkBuddy = 手脚 / 交付；QClaw = 常驻本机 runtime。**

### 4.4 ADP：企业 AgentOps

腾讯云 **Agent Development Platform（ADP）**走的是企业路线：Agentic Loop、RAG、Workflow、Multi-Agent、API/SDK、observability、权限和生命周期。[^16]

**2026-07-01**，工作台 / Claw 模式结束免费公测并正式按任务运行时长消耗 PU。[^17]

这里的历史意义是：

> **Agent runtime 在中国云市场成为单独收费对象。**

---

## 五、百度：从“租一只 OpenClaw”到云、桌面、手机和企业平台

### DuClaw：Managed OpenClaw

**2026-03-11**，DuClaw 以 zero-deployment OpenClaw 形式发布，预装百度 Search / Baike / Scholar Skills，并支持多个模型。[^6]

### “龙虾家族”

**2026-03-17**，Reuters 记录百度推出 DuMate、RedClaw、DuClaw 与小度设备 Agent。[^9]

更值得保存的是百度高管同时提醒：

> **Agent 仍处于发展中，并且容易犯错。**[^9]

这条边界必须和“能剪视频 / 做 PPT / 研究 / 跨设备执行”的功能演示一起记录。

### 千帆：企业 Agent 平台

百度千帆已经把自身定位更新为**大模型服务及 Agent 开发平台**，围绕 Agent engine、MCP/tools、RAG、Workflow、UI Builder 与企业服务展开。[^18]

它的成本不是一个 Agent seat，而是：

> **model token + search + retrieval + knowledge base + document processing + enterprise resources。**

---

## 六、字节：ArkClaw、扣子、飞书、Seed 和手机助手组成多入口体系

### 6.1 ArkClaw：托管 OpenClaw

**2026-03-16**，火山引擎正式发布 ArkClaw，并持续同步 OpenClaw 社区版本。月底又允许把已有 OpenClaw 的记忆与 Skills 迁入云端。[^7][^19]

产品后来加入云浏览器、云电脑、备份 / 恢复、团队模式、观测与 Agent Plan。

但官方文档也写得非常清楚：[^20]

- 部分轻量实例不支持云电脑；
- 流畅度受资源规格影响；
- 多 Agent 同时操作一个云电脑可能发生资源冲突；
- 复杂验证码、扫码登录、高危权限确认可能需要人工接管。

这比“支持云电脑、多 Agent”更接近真实工程。

### 6.2 扣子 3.0：从 Bot Builder 到 AI Team Workspace

**2026-05-29**，扣子把产品重新定位成“一人 + 多 Agent / 多人 + 多 Agent”的 AI 团队协作平台，加入项目、长期记忆、云端 / 本地 Agent、Skills 与第三方 Agent。[^21]

扣子还直接售卖云电脑、云手机、OpenClaw 云电脑，并按规格 / 在线时长消耗资源。[^22]

### 6.3 飞书 OpenClaw / aily / Team Agent

字节体系另一条线发生在飞书。

**2026-04-16**，飞书官方上线一键部署 **飞书 OpenClaw**，宣传重点是无需技术背景，在飞书群里组织多 Agent、模板、云端记忆和国内模型。[^23]

**2026-04-23**，飞书 aily 自定义智能体继续强化企业知识、权限、定时任务和飞书文档 / 多维表格操作。[^24]

7 月，多维表格智能体又被定义成以真实业务表为数据基座的 **Team Agent**，可以查询、录入、分析、提醒和写回。[^25]

这条路线说明中国超级协作软件不一定需要“另一个 Agent App”：

> **Agent 可以直接长在已有业务数据、评论、权限和自动化流上。**

### 6.4 Seed：Agent 模型底座

Seed1.8 在 2025-12 已直接称 generalized agentic model，把 Search、Code、GUI 和复杂 workflow 合进模型训练目标。[^26]

所以字节形成：

> **Seed 模型 → 火山 runtime → 扣子工作台 → 飞书企业入口 → 豆包手机助手。**

---

## 七、阿里：Wukong + QwenPaw + Managed Agents + 无影 + Qoder

### 7.1 Wukong：企业组织型 Agent

**2026-03-17**，阿里发布悟空。它发生在 OpenClaw craze 中，却不是简单 OpenClaw fork，而是直接利用钉钉组织、文档、会议、审批、通讯录和企业权限来承载多个 Agent。[^27]

### 7.2 QwenPaw / HiClaw：本地与轻量多 Agent

QwenPaw（原 CoPaw）是 AgentScope 体系的开源自托管个人助手；HiClaw 进一步探索 Manager + Worker、低内存多 Agent。[^11][^12]

### 7.3 Managed Agents：runtime 按小时卖

阿里云 **Managed Agents** 自 **2026-08-17**起商业化：[^28]

- 会话 runtime：**0.5 元 / 小时**；
- 模型 token：另计；
- tool / MCP：另计。

这是中国 Agent 商业史很明确的一条价格史料：

> **Agent runtime 不再免费附着在模型调用上，而成为独立云资源。**

### 7.4 无影 Agentic Computer / Qoder

无影给 Agent 独立企业云电脑，管理员配置模型、权限与环境；Qoder / Token Plan 则把 Coding Agent、credits 和多模型调用接入开发者工作流。[^29]

阿里的全栈闭环因此是：

> **Qwen → AgentScope / QwenPaw → 百炼 → Managed runtime → Wukong / Qoder / 无影 → 钉钉分发。**

---

## 八、智谱：AutoGLM 与 AutoClaw 是两条不同的 Agent 史

### AutoGLM：2024 就开始的 Phone / GUI 路线

AutoGLM 早于 OpenClaw。核心是视觉理解手机屏幕，执行 Tap / Type / Swipe / Back 等操作，并逐步支持微信、淘宝、京东、美团、12306、滴滴、小红书等中文 App。[^30]

### AutoClaw：2026 龙虾潮里的长期 runtime

AutoClaw 官方说明则明确基于 OpenClaw，强调 IM、文件、浏览器、代码、Skills、记忆与集群。[^31]

所以不能把两者混成“智谱的同一个 Agent”：

> **AutoGLM = Phone / GUI action；AutoClaw = OpenClaw-style persistent harness。**

智谱还有 GLM Agent API、PPT Agent、Coding Plan 等开发者 / 垂直商业入口。

---

## 九、Kimi 与 MiniMax：把 Agent 数量、并发和 runtime 直接卖给消费者

### Kimi

Kimi 从长上下文品牌转向 Agent / Swarm / Code / Claw，并把：

- Agent 次数；
- Swarm 次数；
- 并行任务；
- 并行子 Agent；
- persistent Claw runtime；
- unified credits

直接写进会员权益。[^32]

这意味着消费者购买的不再只是模型 access，而是：

> **“我能同时雇多少 AI worker，以及它们能工作多久。”**

但 Multi-Agent 更多不等于更划算；总 compute、协调与结果合并成本必须一起算。

### MiniMax

MiniMax 同时提供模型 API、MiniMax Agent、MaxClaw、Code，并以订阅 / credits / concurrent agents 分层。[^33]

MiniMax 公司收入增长可以证明商业需求增强，却不能把公司全部收入都归因于 Agent；语音、视频、API 等业务需要分开理解。

---

## 十、京东：JoyAgent / JoyClaw 把零售与企业 AI 底座接进 Agent 市场

京东 **JoyAgent** 平台已经把个人与企业入口放在同一站点：模型 API Key、知识库、Agent、企业定制与积分预付费。官方页面列出 **JoyClaw 专业版（2026-03-13）**作为个人 AI 助手入口。[^36]

京东更早的言犀长期积累客服 / 营销与企业智能人机交互能力；JoyAgent 则把这些能力重组到 Agent / model hub 语境下。[^37]

这里不应因为“京东有 Agent”就推断它已在通用 Agent 市场占主导，但它说明零售 / 电商大厂同样在把：

> **模型 → 知识 → Agent → 企业定制 → 交易场景**

串成一套产品。

---

## 十一、华为云：AgentArts / openJiuwen 走生产级 Harness 与行业 Agent

**2026-06**，华为云发布 / 公测 **智果 AgentArts** 企业智能体平台，并贡献同源度很高的开源版 **openJiuwen**。华为官方把重点放在：[^38]

- 长程任务；
- 企业安全；
- 行业知识；
- 全链路 observability；
- Harness 工程；
- ModelArts Next 模型路由；
- “智果园” Agentic 云入口。

这是一条和 Dify / ADP / 百炼相邻，但更强调国产云、行业部署和开源内核的企业 Agent 路线。

同样，华为页面给出的“路由精准率”“成本降低”等数字属于**厂商测试 / 平台指标**，应记录其口径，不直接泛化到所有企业 workload。

---

## 十二、WPS：办公软件原生 Agent 与“宣传—套餐—实际体验”问题

金山办公在 2026 年把 Agent 直接嵌入多维表格、知识库与 WPS AI。

**2026-04-22**发布的新一代多维表格引擎把**多智能体协作**作为核心能力之一；WPS 官方 / 官方博客称其可让不同智能体围绕表格数据分工处理业务。[^39][^40]

8 月，WPS 智能知识基座又加入 Agent 模式，把传统问答升级成多工具检索、分析、生成结构化结果的任务链。[^41]

这类 Office-native Agent 很可能比“另开一个聊天 App”更容易进入日常工作，因为数据和编辑器本来就在 WPS 里。

但 WPS 也恰好提供一个非常好的**商业宣传与用户感受可能不一致**的史料案例。

WPS 官方社区 2026-08 出现用户投诉，称自己购买大会员时看到“AI 办公智能体 / 一句话复杂工作”等宣传，后来高阶 Agent 能力被划到“灵犀专业版”等独立收费体系，认为实际权益与购买时理解不一致。[^42]

这只是**一名用户在官方社区的投诉**，不能证明所有用户都遭遇同样问题；但它说明 Agent 商业史不仅要保存“功能上线”，也要保存：

> **功能后来被怎样拆套餐、迁移产品、重新收费，以及用户是否认为最初宣传兑现。**

WPS 自己的企业营销页还给出“效率提升 60%、80%、98%”等案例数字。[^43] 这些应明确归属为厂商 / 案例宣传，不能未经方法、样本和第三方验证就写成普遍生产率事实。

---

## 十三、荣耀与手机厂商：Agent 从 App 进入系统层和硬件层

荣耀 YOYO 已经不只是语音助手。官方产品页称 YOYO 覆盖大量自动执行场景，并提供记忆、购物、美食、跨端等能力。[^44]

到 **2026 年 8 月**，荣耀又推出 **YOYO Claw（PC版）**，直接用“一键养虾”的语言，把本地 / IM 遥控、Skills 与个人 Agent 推进 PC。[^45]

**2026-08-12** 发布的 Robot Phone 更进一步把 **Agentic OS**、YOYO Pro、自动执行和物理云台放进手机系统 / 硬件。[^46]

这些官方材料证明的是产品定位和已发布硬件 / 软件能力；对于“3000+ 场景”“跨应用自动执行”等规模性口径，仍应等独立长期实测再判断真实成功率。

中国 Phone Agent 的重要性尤其高，因为大量现实服务被封装在 App 而不是公开 API；但它的权限风险也最大——账号、通信、位置、订单和支付都在同一设备。

---

## 十四、支付宝：Agent 经济开始拥有交易与按量计费基础设施

中国 Agent 生态不能只写“谁有 Agent App”，还要写 Agent 怎样付钱。

支付宝在 2026 年形成 **Agent 支付 / AI 按量付费**产品，支持 Agent 在用户授权下购买 API、Skill、MCP tool 与数字资源，并把 `402 Payment Required` 引入 A2M（Agent-to-Merchant）流程。[^47][^48]

平台公开称支持：

- Agent 发起支付；
- API / Skill / MCP 按调用计费；
- Token / 点数 / 用量账单；
- 授权、风控、争议处理；
- 订阅与续费。

支付宝还公布“Agent 支付笔数 3 亿+、服务用户 1 亿+”等平台指标。[^48]

这些数字属于**支付宝自身平台统计**，可以用来证明其宣称的交易规模，却不应被解释成“1 亿人都在使用高度自主 Agent”。很多交易可能来自不同 AI 产品形态和授权流程。

这里真正值得记录的是：

> **Agent 不但成为软件执行者，也开始成为被授权的交易执行者。**

这使预算、支付确认、退款、责任追溯和意图偏移检测进入 Agent runtime。

---

## 十五、Dify 与 openJiuwen：开放平台提供迁移和私有部署

### Dify

Dify 形成：

> **Community self-host → Cloud SaaS → Enterprise private deployment。**[^34]

2026-08 又把 Agent 从 workflow 临时节点升级成 reusable / independently runnable teammate。

### openJiuwen

华为 openJiuwen 与 AgentArts 同源，给中国企业另一条开源 / 私有部署 Agent harness 路线。[^38]

这说明“开放 Agent”不只等于开放模型权重，还包括：

- runtime；
- workflow；
- tools；
- memory；
- observability；
- deployment；
- governance。

---

## 十六、中国 Agent 的商业计量已经出现九种单位

| 计量单位 | 代表 |
|---|---|
| Seat / 会员 | WorkBuddy、Kimi、扣子、MiniMax、Coding Plan |
| Credits / 积分 / 算粒 / PU | WorkBuddy、Kimi、扣子、悟空、腾讯 ADP、JoyAgent |
| Token | 百炼、千帆、智谱、MiniMax、Seed / 火山 |
| Agent / Swarm 次数 | Kimi |
| 并发 Agent 数 | Kimi、MiniMax |
| Runtime 时长 | 百炼 Managed Agents、腾讯工作台 / Claw、扣子 / ArkClaw 云设备 |
| Tool / Search / MCP / Retrieval | 阿里、百度、腾讯、支付宝等 |
| 企业 License / 私有部署 | ADP、Dify、AgentArts 等 |
| Payment / transaction | 支付宝 Agent 支付 / 按量付费 |

因此“中国 Agent 多少钱”已经没有一个答案。

真正的成本函数越来越像：

> **模型 + runtime + 搜索 / RAG + 工具 + 云设备 + 并发 + 存储 + 支付 + 人工接管 + 错误返工。**

这和全球市场最终转向 **Cost per successful completed task** 是同一个方向。

---

## 十七、最重要的提醒：商业宣传和实际使用必须拆开

Agent 产品比聊天模型更容易夸大“能做什么”。

原因很简单：

> **发布会只需要展示一次成功；用户需要每天重复成功。**

### 17.1 本书统一看五层

1. **厂商宣称**：产品页写什么；
2. **可用状态**：demo / invite / beta / GA / commercial；
3. **真实实测**：独立 / 社区用户重复使用怎样；
4. **已知限制**：哪里需要人工、哪里会冲突、哪里会失败；
5. **生产价值**：长期留存、成本、事故与 ROI。

### 17.2 已经出现的中国现实反例

- Reuters 采访 OpenClaw 中国用户，出现 token 成本高、结果不理想、收益不足的抱怨；[^3]
- 百度在自己的“龙虾”发布时直接提醒 Agent 仍然容易犯错；[^9]
- ArkClaw 官方文档写明云电脑规格、并发冲突与验证码 / 高风险操作需要人工接管；[^20]
- WPS 官方社区出现消费者对 AI Agent 宣传与后续独立收费产品之间差异的投诉；[^42]
- Phone Agent 仍会遇到登录、验证码、支付、UI 更新与风控。

这些不意味着 Agent 是骗局。

相反，它们说明 Agent 已经进入了真正的软件产品阶段：

> **用户开始不只评价“回答聪不聪明”，而是评价“它有没有真的省我的时间”。**

### 17.3 单次 benchmark 也不够

Computer-Use Agent 研究显示，同一任务 / 模型重复运行时仍可能一次成功一次失败；Agent reliability 的提升慢于单次 accuracy。[^49]

对 benchmark 的后续审计甚至发现，部分公开 FAIL 本身是 evaluator false negative 或 broken task。[^50]

所以本书既不迷信发布会 demo，也不迷信一张 leaderboard。

最重要的现实指标是：

> **重复成功率 × 人工接管率 × 完成时延 × 总任务成本 × 可恢复性。**

---

## 十八、中国 Agent 的优势与短板

### 优势

**1. 分发入口强。** 微信、飞书、钉钉、WPS、Kimi、手机系统、云平台都可以直接成为 Agent 入口。

**2. 低价模型多。** DeepSeek、Qwen、Kimi、GLM、MiniMax、Seed 降低长程 Agent token 成本。

**3. Phone / cloud-device 路线激进。** 中国 App 生态倒逼 Agent 更早处理 GUI、云手机与跨应用权限。

**4. 模型—云—产品距离短。** 同一家大厂经常同时控制模型、runtime、企业软件与分发。

**5. 支付和商业链成熟。** 支付宝、超级应用和电商生态让 Agent-to-service / Agent-to-merchant 更容易直接进入真实交易。

### 短板

**1. 产品碎片化。** 同一家常有模型平台、Claw、工作台、Coding Plan、云电脑、Agent Builder 多套品牌。

**2. 真实 ROI 数据仍少。** “很多客户”“几千场景”不等于公开证明节省多少人力。

**3. GUI / Phone reliability 仍难。** UI、验证码、风控与支付不是 benchmark 静态环境。

**4. 权限和供应链风险大。** Skills、MCP、shell、credentials 与云设备扩大攻击面。

**5. OpenClaw 热潮容易造成同质化营销。** “一键养虾”“AI 员工”“一人公司”非常适合传播，却可能让用户高估当前稳定性。

---

## 十九、评曰：2026 年中国 Agent 不是“国产 ChatGPT Agent”，而是一次执行层大爆发

中国大模型竞争早期最容易问：

> 有没有自己的 GPT？

2026 年以后问题换了：

> **有没有自己的执行层？**

OpenClaw 让普通人先看见“自己的 Agent 应该一直在线、能用工具、能从微信接命令”；大厂随后把这个形态拆进各自最强的资产里：

- 腾讯：微信 + 本机 Agent + 办公 + AgentOps；
- 百度：Search + 云 + 桌面 / 手机；
- 字节：火山 runtime + 扣子 + 飞书 + Seed；
- 阿里：Qwen + 百炼 + 钉钉 + 无影；
- 智谱：Phone Use + OpenClaw runtime；
- Kimi / MiniMax：消费者 Agent / Swarm / credits；
- 京东：电商 / 企业 AI + JoyAgent；
- 华为：国产云 + Harness + 行业 Agent；
- WPS：Office 原生工作流；
- 荣耀：系统级 / 硬件 Agent；
- 支付宝：交易与计费。

所以“国产 Agent”不是底层换成国产模型就结束。

真正的执行链更接近：

> **国产模型 + tools / MCP + Agent runtime + workspace / device + 企业 / 个人数据 + identity / permission + 国内云 + 国产 AI 芯片 serving + observability / audit + payment / FinOps。**

但最后仍然必须用一个去营销化的标准检验：

> **不是“它叫不叫 Agent，也不是官网列了多少 Skills”，而是它能否以可接受的成本和权限边界，重复、稳定地把真实任务做完。**

如果几年后回看 2026 年，中国 Agent 史真正值得保存的可能不是哪家发布会说自己有“第一只龙虾”，而是：

> **一群用户第一次认真尝试把电脑、手机和工作流交给 AI；然后很快发现，行动权比回答能力更难工程化。**

---

*2026-08 重订：GPT-5.6 Sol（OpenAI）。*

> 📖 详见《志·OpenClaw 与中国 Agent“龙虾潮”》《志·个人 Agent 生态与商业化》《表·中国 OpenClaw“龙虾”生态对照表》《表·中国 Agent 产品与平台对照表》《论·Agent 时代》。

---

[^1]: OpenClaw official lore. https://docs.openclaw.ai/lore
[^2]: OpenClaw official repository. https://github.com/openclaw/openclaw
[^3]: Reuters, “As OpenClaw enthusiasm grips China, schoolkids and retirees alike raise ‘lobsters’”, 2026-03-19. https://www.reuters.com/technology/openclaw-enthusiasm-grips-china-schoolkids-retirees-alike-raise-lobsters-2026-03-19/
[^4]: Reuters, “Chinese tech hubs promote OpenClaw AI agent despite security warnings”, 2026-03-09. https://www.reuters.com/world/asia-pacific/chinas-shenzhen-backs-openclaw-ai-with-subsidies-despite-beijings-security-2026-03-09/
[^5]: Reuters, “China warns state-owned firms and government agencies against OpenClaw AI”, 2026-03-11. https://www.reuters.com/technology/china-moves-curb-use-openclaw-ai-banks-state-agencies-bloomberg-news-reports-2026-03-11/
[^6]: Baidu, “DuClaw: zero-deployment access to OpenClaw”, 2026-03-11. https://www.prnewswire.com/news-releases/baidu-launches-duclaw-enables-zero-deployment-access-to-openclaw-302710924.html
[^7]: Volcengine, ArkClaw release notes. https://www.volcengine.com/docs/87732/2279754
[^8]: Zhipu, AutoClaw product updates. https://autoclaw.zhipuai.cn/blog/product/
[^9]: Reuters, “Baidu joins China's OpenClaw frenzy with new AI agents”, 2026-03-17. https://www.reuters.com/business/media-telecom/baidu-joins-chinas-openclaw-frenzy-with-new-ai-agents-2026-03-17/
[^10]: Tencent Cloud Developer Community, QClaw / WorkBuddy positioning. https://developer.cloud.tencent.com/article/2646434
[^11]: Alibaba Cloud, QwenPaw. https://www.alibabacloud.com/help/en/model-studio/qwenpaw
[^12]: Alibaba Cloud Native Community, HiClaw & CoPaw. https://www.alibabacloud.com/blog/alibaba-open-sources-hiclaw-%2526-copaw-low-memory-ai-agents-for-local-automation_602950
[^13]: Reuters, “Tencent integrates WeChat with OpenClaw AI agent”, 2026-03-22. https://www.reuters.com/technology/tencent-integrates-wechat-with-openclaw-ai-agent-amid-china-tech-battle-2026-03-22/
[^14]: Tencent Cloud WorkBuddy release notes. https://cloud.tencent.com/document/product/1831/134324
[^15]: Tencent Cloud Techpedia, WorkBuddy launch record. https://cloud.tencent.com/developer/techpedia/2610
[^16]: Tencent Cloud ADP. https://cloud.tencent.com/product/adp
[^17]: Tencent Cloud, ADP workbench / Claw commercialization, 2026-07-01. https://cloud.tencent.com/announce/detail/2331
[^18]: Baidu Qianfan Agent Platform. https://cloud.baidu.com/doc/AppBuilder/s/Tlpv3oxpy
[^19]: Volcengine, migrate OpenClaw to ArkClaw. https://www.volcengine.com/docs/87732/2431032
[^20]: Volcengine, ArkClaw cloud-computer limitations. https://www.volcengine.com/docs/87732/2431008
[^21]: Coze Docs, Coze 3.0 capabilities. https://docs.coze.cn/cozespace_coze_app_faq
[^22]: Coze Docs, cloud device billing. https://docs.coze.cn/coze_pro_cloud_device_fee
[^23]: Feishu, “飞书OpenClaw新功能上线，一键搭建你的多AI Agent协同办公团队”, 2026-04-16. https://www.feishu.cn/content/article/7629286303804329160
[^24]: Feishu, “aily智能体定制能力升级”, 2026-04-23. https://www.feishu.cn/content/article/7631864469689240764
[^25]: Feishu, “多维表格智能体是什么？”, 2026-07-02. https://www.feishu.cn/content/article/7657782356450741223
[^26]: ByteDance Seed, Seed1.8 generalized agentic model. https://seed.bytedance.com/zh/blog/official-release-of-seed1-8-a-generalized-agentic-model
[^27]: Alibaba Group, Wukong. https://www.alibabagroup.com/en-US/document-1971078136456019968
[^28]: Alibaba Cloud Model Studio, Managed Agents billing. https://help.aliyun.com/zh/model-studio/managed-agents-billing
[^29]: Alibaba Cloud WUYING / Model Studio Agentic Computer and Qoder product docs. https://www.alibabacloud.com/help/en/wuying-workspace/create-and-configure-jvscomputer-through-the-ai-management-center
[^30]: Zhipu, AutoGLM-Phone. https://docs.bigmodel.cn/cn/guide/models/vlm/autoglm-phone
[^31]: Zhipu, AutoClaw. https://autoclaw.zhipuai.cn/blog/product/
[^32]: Kimi Help Center, Agent / membership / Swarm. https://www.kimi.com/en/help/agent/agent-swarm
[^33]: MiniMax Agent. https://agent.minimax.io/
[^34]: Dify Pricing / product. https://dify.ai/zh/pricing
[^35]: Reuters, Manus origin / ARR / market context, 2026-01-13. https://www.reuters.com/technology/artificial-intelligence/talent-not-territory-will-define-ai-future-taosha-wang-2026-01-13/
[^36]: JoyAgent official platform; JoyClaw Professional listed as 2026-03-13 product. https://joyagent.jd.com/
[^37]: JD Yanxi intelligent human-machine interaction platform. https://yanxi.jd.com/
[^38]: Huawei, “华为云发布Agentic AI系列新品”, 2026-06. https://www.huawei.com/cn/news/2026/6/inspire-agenticera-agenticinfra
[^39]: WPS 365, multi-agent table engine announcement / summary. https://plus.wps.cn/blog/p106760.html
[^40]: WPS 365, multi-agent FAQ. https://plus.wps.cn/blog/p106765.html
[^41]: WPS 365, intelligent knowledge base Agent mode. https://plus.wps.cn/blog/p129818.html
[^42]: WPS official community, single user complaint about AI-agent marketing / later separate charging, 2026-08. https://forum.wps.cn/topics/node/8?child=89
[^43]: WPS AI enterprise promotional pages; efficiency claims are vendor / case marketing. https://365.wps.cn/content/6a4d662b0d65417b95eb3f10906c8de3.html
[^44]: HONOR AI / YOYO. https://www.honor.com/cn/tech/honor-ai/
[^45]: HONOR, YOYO Claw PC. https://www.honor.com/cn/tech/yoyo-claw/
[^46]: HONOR, Robot Phone / Agentic OS, 2026-08-12. https://www.honor.com/cn/news/honor-robot-phone-launch/
[^47]: Alipay Agent Payment, overview / product. https://aipay.alipay.com/
[^48]: Alipay Agent Payment docs, AI pay / 402-based usage billing. https://aipay.alipay.com/docs/ai-receive/MACHINE_PAY.html
[^49]: Gonzalez-Pumariega et al., “On the Reliability of Computer Use Agents”, arXiv:2604.17849. https://arxiv.org/abs/2604.17849
[^50]: Dong et al., “How Benchmarks Mis-Score Computer-Use Agents”, arXiv:2607.28367. https://arxiv.org/abs/2607.28367
