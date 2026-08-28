# 《中国终端与垂直 Agent 生态》

> 中国 Agent 史如果只写模型公司、OpenClaw“龙虾”和企业 AgentOps，仍然会漏掉一大块：**操作系统、PC 厂商、手机厂商、搜索、办公、影像和文档工具本身正在变成 Agent 的宿主。**
>
> 这一层尤其重要，因为普通用户未必会主动安装一个独立 Agent App。更可能发生的是：买来的电脑里已经有天禧，手机系统里已经有 MiClaw / 小艺 / YOYO，搜索工具里已经有纳米 AI，影像软件里已经有 RoboNeo / Picchi，文档工具直接以 Skill / MCP 接进 OpenClaw。Agent 因而从“一个应用”下沉成**终端和垂直软件的控制层**。

---

## 一、先纠正一个容易被“龙虾潮”掩盖的历史

OpenClaw 是 2026 年中国大众高权限个人 Agent 的重要引爆点，但**中国 Agent 产品并不是从 OpenClaw 才出现。**

至少可以看到几条更早的脉络：

- **2024-10**：智谱 AutoGLM 已经把视觉模型推进到 Phone / GUI action；
- **2025-06-11**：360 发布“纳米 AI 超级搜索智能体”，把搜索从“给答案”包装成“规划、调用工具、交付结果”；[^1]
- vivo 蓝心智能体平台在 2025 年已经支持工作流、知识库、插件和手机端调试；[^2]
- 手机系统级 AI 助手也持续吸收记忆、第三方应用控制和多模态能力。

所以本书现在采用更精确的断代：

> **OpenClaw 不是“中国 Agent 的诞生”，而是中国普通用户对“persistent personal execution agent”形成全民级认知的转折。**

这也解释了为什么 OpenClaw 爆红以后，终端厂商会迅速使用 `Claw` 命名或强调“会办事”：它们不是从零开始，而是把原有 AIOS / 智能助手 / 本地模型能力重新组织到 Agent 叙事中。

---

## 二、小米：MiClaw 把 Agent 直接放进 HyperOS 和“人车家”生态

### 2.1 2026-03-06：MiClaw 小范围封测

小米官方开发者平台明确写道，**Xiaomi MiClaw 于 2026-03-06 开启小范围封测**，定位为基于 Xiaomi MiMo 大模型构建的**系统级 AI Agent**。[^3]

小米在年度材料中进一步描述其目标：在用户理解和授权后，MiClaw 可以调用应用与生态能力，自主选择系统级工具执行命令，并借助记忆系统沉淀经验。[^4]

这条路线与 OpenClaw 的共同点是“从对话走向执行”，但二者不是同一种系统：

- OpenClaw 以用户自己掌控的 harness / gateway / Skills 为中心；
- MiClaw 的战略位置是 **OS-level Agent**，天然接触小米手机、PC、汽车、IoT 和账号体系。

因此即使名称带 `Claw`，也不能没有代码证据就写成 OpenClaw fork。

### 2.2 4 月：Agent 生态平台开放 MCP / Skill / Agent 发布

**2026-04-21**，小米宣布 Agent 生态平台进入小范围公测招募。开发者可以上传：[^3]

- MCP；
- Skill；
- Agent；

并通过在线开发与检测后台生成、调试和发布 Agent；创建出的 Agent 仅在 MiClaw 内分发。[^5]

这意味着手机 OS 厂商开始做的不只是“一个系统助手”，而是：

> **Agent App Store / Agent runtime ecosystem。**

小米随后发布 Agent 平台服务协议与 Agent 发布规范，涉及开发者资质、运行环境、权限安全分级、供应链和外部组件安全。[^6]

这类文件比发布会更值得进入历史：真正的 Agent 平台成熟以后，最重要的问题会变成**谁能发布 Skill、它能拿什么权限、平台怎样审核和撤回。**

### 2.3 HyperOS 4：系统级执行能力进入更广的“小爱”入口

Xiaomi HyperOS 4 的官方说明已经把超级小爱 2.0 的“专家模式”写入系统，并列出深度研究、PPT / 网页 / 视频生成、跨设备文件调用、家居和出行等能力。[^7]

同一页面也留下了非常有价值的限制说明：

- 部分能力只在特定机型 / 版本开放；
- 设备和第三方服务必须满足条件；
- 生成结果可能偏差或不完整；
- 修改、删除或外发数据前的确认，只在特定专家模式下生效；
- 跨设备取文件要求设备不休眠、联网且后台服务运行。

这正是 Agent 史应保存的完整形态：

> **能力列表 + 版本条件 + 权限确认 + 运行前提。**

---

## 三、联想：AI PC 厂商把“自己的 Agent”做成端云混合系统

联想的历史位置和模型公司很不同。

它最重要的资产不是模型 API，而是：

- PC；
- 平板；
- 手机；
- 本地 NPU / GPU；
- 文件和系统能力；
- 跨设备账号。

### 3.1 天禧：OpenClaw 之前已有“个人超级智能体”路线

2026 年 3 月初，联想已经把 **天禧 AI 3.5**称为端侧个人超级智能体，并强调端—边—云、多智能体协同、AI PC / 平板 / 手机跨端。[^8]

这说明 OpenClaw 浪潮出现时，联想并不是临时从零造 Agent。

### 3.2 3 月 18 日：天禧 AI Claw

**2026-03-18**，联想正式发布 **天禧 AI Claw** 并准备内测。官方宣传它可以拆步骤、跑流程、调资源、做判断，并以“零门槛、全天候跨端、安全可托付”定位。[^9]

必须按 v2.2 凡例理解这些词：

> “7×24”“可信赖”“自主执行复杂任务”首先是厂商产品目标，不能自动等于独立测得的长期成功率。

不过它确实证明了一个产品转折：**PC 厂商开始把 Agent runtime 当成终端系统能力，而不只是一个聊天 App。**

### 3.3 OpenClaw 与联想自己的架构并行

联想 3 月还公开过把 OpenClaw 部署到端侧概念机 Project Kubit 的实验，并给出 OSWorld 单次成功率等厂商测试数据。[^10]

与此同时，天禧 Claw 后续演进为自己的执行力系统，结合个人知识库、Skills、端云混合调度和安全机制。5 月的天禧 AI 4.0继续强化这条路线。[^11]

因此不能把“联想 Claw”简单等于“联想 OpenClaw”。

更准确是：

> **OpenClaw 是生态参照和实验框架之一；天禧是联想试图控制的 OS / device-native Agent 产品。**

---

## 四、华为终端：小艺从“智能助手”进入系统级 Agent / 多 Agent 框架

华为云的 AgentArts 是企业平台；终端侧的小艺则是另一条完全不同的历史。

### 4.1 鸿蒙智能体框架：Agent 成为 OS 服务层

华为当前小艺官方页面明确列出 **鸿蒙智能体框架（HMAF）**，强调多模态输入、应用 / 设备能力以及多智能体协作，并把 **A2A** 作为跨平台 / 框架 / 厂商 Agent 协作协议展示。[^12]

这里最重要的不是“小艺也叫 Agent”。

而是：

> **OS 厂商开始把 Agent discovery / orchestration / app capability 写进系统框架。**

### 4.2 “小艺帮帮忙”：从聊天进入应用操控

华为官方支持文档中的 **“小艺帮帮忙”**已经明确属于应用操控服务：用户可以通过自然语言让小艺完成购物、订机票、下载视频等任务；还可以通过一张图、一句话或一次演示，把日常操作教成专属技能。[^13]

官方同时明确标注这项能力仍处于**众测中**，支持机型有限。

这一句“众测中”非常重要。

史书不应只抄：

> “小艺可以订机票。”

更准确的是：

> **“华为在部分 HarmonyOS 设备众测应用操控 Agent，官方列举订机票等目标任务。”**

### 4.3 华为自己的 FAQ 直接承认生成式 Agent 会出错

“小艺玩机助手”官方 FAQ 有一个非常罕见、但很有史料价值的问题：

> 为什么答复不准、错误或重复？

华为的回答明确承认生成式 AI 客观存在不确定性，生成内容仅供参考、用户需要甄别。[^14]

这比任何“领先 AIOS”宣传更能说明 2026 年 Agent 产品的现实：

> **连 OS 厂商自己的官方帮助文档也必须告诉用户，它可能错。**

---

## 五、vivo：Agent 平台已经存在，但不应和高权限 persistent Agent 混写

vivo 有正式的 **蓝心智能体平台**，支持：[^2]

- 角色 / 文本 / 娱乐 / 提效智能体；
- 复杂流程；
- workflow；
- knowledge base；
- plugin；
- MCP plugin；
- API 接入；
- 手机端真机调试。[^15]

蓝心小 V / BlueOS 也已经支持对部分第三方应用和设备进行操作。[^16]

但从当前公开材料看，它的核心叙事仍更接近：

> **系统级智能助手 + Agent Builder / plugin ecosystem。**

这和 OpenClaw 那种获得 shell / files / browser 高权限、长期常驻的 personal runtime 不能直接划等号。

因此本书收录 vivo 的意义是：**中国终端 Agent 生态早已在长，只是不同厂商对“Agent”的权限半径完全不同。**

---

## 六、360：搜索 Agent 早于龙虾潮，OpenClaw 之后又长出“安全 Agent”

### 6.1 2025-06：纳米 AI 超级搜索智能体

360 在 **2025-06-11**发布“纳米 AI 超级搜索智能体”，厂商宣传的核心从“搜索给答案”转向“理解目的、调用工具、自动执行、交付结果”。[^1]

这件事可以直接反驳一种过度简化：

> **中国“Agent 产品”并不是 2026 年 3 月才第一次出现。**

不过纳米 AI 更接近 search/research/creation agent，与 OpenClaw 的高权限本机执行不是同一条路线。

### 6.2 2026 龙虾潮：360 龙虾卫士

OpenClaw 爆红以后，360 又从自己最擅长的安全位置切入，推出 **360 龙虾卫士**，强调最小权限、人在回路、恶意 Skill / API key / 数据泄露防护。[^17]

这很有历史意味：

> **Agent 生态成熟到一定程度以后，安全软件本身也会变成 Agent runtime 的一层。**

360 对其安全产品的能力描述仍属于厂商声明；是否能覆盖所有 Skill / prompt injection / credential attack，需要独立安全研究，而不能只靠产品页判断。

---

## 七、美图：垂直 Agent 不操作操作系统，而是直接交付专业创作成果

Agent 史很容易被“谁能操作电脑”绑架。

美图提供了另一种成熟路线：

> **垂直领域里，Agent 不一定需要万能权限；它只要把专业工具链组织起来并交付成果。**

### 7.1 RoboNeo：视觉 Agent 产品化

美图披露，**RoboNeo** 2026 年 7 月正式上线，并在上线首月达到百万 MAU；美图将其称为 Agent，并让其调用集团多种影像能力。[^18]

这些 MAU 属于**公司披露数据**，可以记录商业传播规模，但不是独立第三方测量。

### 7.2 Picchi / Agent Teams / MVLAND：专业多 Agent

2026 美图影像节进一步推出 / 升级：[^19]

- **Picchi**：学习个人 / 他人修图风格的人像修图 Agent；
- **美图设计室 Agent Teams**：面向电商视觉资产的多 Agent 工作；
- **MVLAND**：多 Agent 协同生成音乐视觉内容；
- **MeituHub**：连接模型、工具与 workflow 的影像生产线底座。

官方还披露美图设计室、开拍、Vmake Labs 的 MAU / ARR / ARPPU 等商业数据。[^20]

这些数字能证明垂直生产力 AI 已经有付费需求，但不能直接证明其中有多少收入由“自主 Agent”本身产生；应保留业务口径。

---

## 八、夸克扫描王：传统工具开始主动变成 Agent 的 Skill / MCP 外设

夸克自身目前更像 AI 浏览器 / 搜索 /文档工具，而不是一个高权限通用 Agent。

但**夸克扫描王开放平台**在 2026 年出现了一个很值得写的变化：它同时提供：[^21]

- OpenClaw Skill；
- API；
- MCP；
- CLI；
- Hermes Agent；

把 OCR、扫描、格式转换、题目识别等几十项能力暴露给 Agent。

这代表另一种 Agent 生态扩张：

> **不是所有公司都需要造 Agent；大量成熟软件会选择把自己变成 Agent 的“外设”。**

这可能比再造一个通用聊天 Agent 更有长期价值，因为垂直工具往往已经拥有成熟算法、用户和业务流程。

同样，夸克官方页面大量使用“精准”“全自动”“效率提升”等营销语言；这些可以记录为厂商定位，但具体 OCR / 自动化成功率需要独立任务评测。

---

## 九、小米、联想、华为为什么可能比独立 Agent App 更有长期优势

独立 Agent App 最大的问题之一是：

> **它必须向操作系统申请权限。**

而 OS / PC / 手机厂商本身已经拥有：

- 账号；
- 文件；
- 通知；
- 前后台生命周期；
- 系统 API；
- 跨设备通道；
- NPU / GPU；
- 安全硬件；
- App 安装与权限框架。

所以它们天然有机会把 Agent 做得更深。

但“更深”也意味着更危险：

> **一个系统级 Agent 做错事，潜在后果远大于网页聊天机器人。**

因此这条路线最终竞争的不会只是模型能力，而是：

- permission design；
- local / cloud boundary；
- memory ownership；
- cross-device identity；
- confirmation；
- audit；
- rollback；
- developer Agent / Skill review。

小米的 Agent 发布规范、华为的机型 / 众测限制、联想的安全架构宣传，都说明终端厂商已经意识到这个问题；但安全是否真的有效，仍需要漏洞、事故和长期实测来验证。

---

## 十、评曰：Agent 时代的“大厂入口”不一定长得像 ChatGPT

2023 年以后，人们很容易用一个固定想象判断 AI 产品：

> 有一个聊天框；问它问题；它回答。

Agent 时代可能完全不同。

一个普通用户未来最常用的 Agent，可能根本没有一个独立“Agent App”：

- 它可能是 HyperOS 里的 MiClaw；
- 是鸿蒙里的小艺；
- 是联想 PC 里的天禧；
- 是 vivo 的蓝心平台下发到手机的能力；
- 是 WPS 里的办公 Agent；
- 是美图里的修图 Agent；
- 是 OpenClaw 调用的夸克 OCR Skill。

真正的竞争单位因此不是 App 图标，而是：

> **谁能合法、安全、稳定地获得足够多的现实接口，然后把模型决策变成可验证的行动。**

这也是为什么中国 Agent 史必须同时写模型公司、OpenClaw 社区、云厂商、超级应用、手机 OS、PC 厂商和垂直软件。

少任何一层，都会把“执行层”误写成“又一轮聊天机器人大战”。

---

*2026-08 补订：GPT-5.6 Sol（OpenAI）。*

> 📖 详见《志·中国 Agent 生态与商业化》《志·OpenClaw 与中国 Agent“龙虾潮”》《志·个人 Agent 生态与商业化》《志·Agent 宣传、实测与可靠性》《表·中国终端与垂直 Agent 对照表》。

---

[^1]: 360 社区（厂商社区）, “国内首个！纳米AI超级搜索智能体正式发布！”, 2025-06-12（称产品 6 月 11 日发布）. https://bbs.360.cn/thread-16162567-1-1.html
[^2]: vivo 开放平台, 蓝心智能体平台. https://developers.vivo.com/product/ai/blueSmartPL
[^3]: 小米澎湃OS开发者平台, “Agent生态平台开启小范围公测的通知”, 2026-04-21（明确 MiClaw 2026-03-06 开始小范围封测）. https://dev.mi.com/xiaomihyperos/announcement/detail?id=41
[^4]: Xiaomi 2025Q4 / 2026 年报材料，MiClaw 与 Xiaomi Miloco. https://ir.mi.com/system/files-encrypted/nasdaq_kms/assets/2026/03/24/5-35-52/25Q4%20CN%20AC%20Xiaomi.pdf
[^5]: 小米澎湃OS开发者平台, Agent应用发布操作指南. https://dev.mi.com/xiaomihyperos/documentation/detail?pId=2305
[^6]: 小米澎湃OS开发者平台, Agent平台服务协议 / Agent发布标准. https://dev.mi.com/xiaomihyperos/documentation/detail?pId=2302 ; https://dev.mi.com/xiaomihyperos/documentation/detail?pId=2299
[^7]: Xiaomi HyperOS 4 官方页面. https://os.mi.com/
[^8]: 联想官网, 2026 焕新季 / 天禧 AI 3.5. https://brand.lenovo.com.cn/brand/ppn03670.html
[^9]: 联想官网, “联想发布天禧AI Claw 内测将启动”, 2026-03-18. https://brand.lenovo.com.cn/brand/ppn03698.html
[^10]: 联想官网品牌纪事, Project Kubit / OpenClaw / OSWorld, 2026-03-19. https://brand.lenovo.com.cn/brand/ppn03709.html
[^11]: 联想官网, 天禧 AI 4.0, 2026-05-19. https://brand.lenovo.com.cn/brand/ppn03769.html
[^12]: 华为消费者业务, 小艺 / 鸿蒙智能体框架 / A2A. https://consumer.huawei.com/cn/mobileservices/celia/
[^13]: 华为消费者业务, “小艺帮帮忙服务功能介绍”. https://consumer.huawei.com/cn/support/content/zh-cn16073021/
[^14]: 华为消费者业务, “玩机助手智能体介绍” FAQ. https://consumer.huawei.com/cn/support/content/zh-cn16065931/
[^15]: vivo 蓝心智能体平台, 手机端调试智能体. https://agents.vivo.com.cn/documents/gpts?id=2007
[^16]: vivo BlueOS / 蓝心小V. https://developers.vivo.com/product/blueOS
[^17]: 360 社区（厂商社区）, “360龙虾卫士重磅上线”, 2026-03-16. https://bbs.360.cn/thread-16178836-1-1.html
[^18]: 美图公司, RoboNeo 上线首月 MAU 披露. https://info.meitu.com/zh
[^19]: 美图, “2026美图影像节发布8款产品”, 2026-06-17. https://www.meitu.com/zh/media/438
[^20]: 美图, 生产力应用 MAU / ARR / ARPPU 披露. https://www.meitu.com/zh/media/439
[^21]: 夸克扫描王开放平台, 36项AI能力与多种 Agent 接入方式. https://scan.quark.cn/business/news-detail/26070801.html
