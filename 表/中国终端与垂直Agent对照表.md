# 中国终端与垂直 Agent 对照表

> 更新时间：2026-08-28。本表补充《中国 Agent 产品与平台对照表》里容易遗漏的一类：**不是先做通用 Agent App，而是从手机 OS、PC、搜索、办公、影像和专业工具出发的 Agent。**
>
> “官方能力”只代表产品声明 / 公开入口；“已知边界”记录版本、众测、权限、用户反馈或商业口径限制。

| 产品 / 平台 | 厂商 | Agent 所在层 | 官方 / 产品层能力 | 产品状态 | 已知边界 / 史料提醒 |
|---|---|---|---|---|---|
| Xiaomi MiClaw | 小米 | HyperOS 系统级 Agent | 基于 MiMo；调用应用 / 系统工具、记忆、Agent/MCP/Skill 生态 | 2026-03-06 小范围封测；4 月 Agent 生态平台定向公测 | **不是因名字带 Claw 就能写成 OpenClaw fork**；平台仍定向邀请；能力受机型、系统、权限约束 |
| 超级小爱 2.0 / 专家模式 | 小米 | OS 级个人助手 / execution | 深度研究、PPT/网页/视频、跨设备文件、家居/出行、应用控制 | HyperOS 4 正式系统能力，部分能力分阶段开放 | 官方页面明确写机型 / 版本限制、结果可能偏差、第三方服务依赖、删除/外发确认条件 |
| 天禧 AI / 天禧 AI Claw | 联想 | PC / phone / tablet 端云 Agent | 多 Agent、跨设备、任务进程、Skills、知识库、持续执行 | 天禧 3.5 商业终端能力；Claw 2026-03-18 发布并启动内测，5 月升级 4.0 | “7×24”“可信赖”“复杂任务精准执行”等是厂商定位；Project Kubit / OSWorld 数字是联想测试口径，不直接视为普遍真实成功率 |
| 小艺 / 鸿蒙智能体框架 HMAF | 华为 | HarmonyOS 系统级 Agent 框架 | 多模态、应用/设备调用、多智能体、A2A | 系统正式能力，具体智能体按机型 / 版本开放 | 不同设备/版本差异大；“智能体”包含问答型与执行型，不能全部算高权限 Agent |
| 小艺帮帮忙 | 华为 | Phone / app-control Agent | 购物、订机票、下载视频；通过示范/图/语言教新 Skill | **众测中** | 必须保留众测标签、机型限制和确认边界；产品页示例不等于重复成功率 |
| 蓝心智能体平台 / 蓝心小V | vivo | Phone OS / Agent Builder | workflow、知识库、plugin/MCP、复杂流程、API、真机调试、部分第三方应用控制 | 正式开发者平台 | 更像系统助手 + Builder 生态；公开材料不足以把所有智能体写成 persistent high-privilege Agent |
| 纳米 AI 超级搜索智能体 | 360 | Search / research Agent | 搜索、规划、工具调用、内容生成、交付结果、个人记忆 | 2025-06 已发布；后续 App 持续更新 | 厂商社区/产品材料为主；“国内首个”“全流程自动执行”等属于厂商定位，需要独立任务实测 |
| 360 龙虾卫士 | 360 | Agent security layer | OpenClaw 权限、安全监控、Skill/API key 风险、防护、人在回路 | 2026-03 发布 | 安全产品能力首先是厂商声明；实际对新型 prompt injection / malicious Skill 的覆盖仍需独立安全验证 |
| RoboNeo | 美图 | Visual creative Agent | 调用影像能力、编辑/生成、创作工作流 | 2026-07 正式上线 | 美图披露上线首月百万 MAU；属于公司统计，不是第三方 measurement，也不等于所有任务自主完成 |
| Picchi / Agent Teams / MVLAND | 美图 | Vertical professional Agent / multi-Agent | 人像修图风格学习、电商视觉资产、多 Agent 音乐视觉生成 | 2026-06 产品线发布 / 升级 | 公司披露 MAU/ARR/ARPPU 可作为商业信号，但不能把整个业务收入归因于 Agent 自治能力 |
| 夸克扫描王 Agent 接入 | 阿里 / 夸克 | Agent Skill / MCP 外设 | OCR、扫描、格式转换、题目识别；OpenClaw、MCP、CLI、Hermes Agent 接入 | 2026 年正式开放平台能力 | **它主要是给 Agent 提供工具，不是通用 Agent 本体**；“高精准/全自动”属厂商营销，具体场景需独立测 |
| YOYO Claw / Agentic OS | 荣耀 | PC / phone / OS Agent | 本地 Claw、IM 遥控、Skills、记忆；Robot Phone / Agentic OS | 2026-08 正式产品 / 硬件发布 | “3000+场景”等规模口径属于厂商披露；跨应用真实成功率仍需长期实测 |
| WPS 灵犀 / 多智能体 | 金山办公 | Office-native Agent | 文档、PPT、表格、知识库、Agent 模式、多 Agent | 商业产品 | 官方社区有任务错误 / 套餐权益个案反馈；必须与营销“效率提升”数字分栏 |
| JoyAgent / JoyClaw | 京东 | Retail / enterprise / personal Agent | 模型、知识库、Agent、个人助手、企业定制 | JoyClaw 2026-03 产品入口；JoyAgent 平台 | 产品真实，但公开市场份额和长期 Agent ROI 数据不足，不应从电商体量推断 Agent 领先 |
| AgentArts / openJiuwen | 华为云 | Enterprise Agent runtime / harness | long-running、state、recovery、guard、observability、多 Agent | 2026 企业公测 / 平台演进 | 厂商效率 / 精准率数字需按口径记录；很多能力仍处公测 |
| Alipay Agent Payment | 支付宝 | Agent payment infrastructure | 402、Payment-Proof、API/Skill/MCP 按量付费、授权与验证 | 2026 生产支付基础设施 | 平台交易规模是支付宝自报；“支付成功”不等于 Agent 对用户意图理解正确 |

---

## 一、为什么这一层容易被漏掉

模型公司的产品名字通常直接写着 Agent。

终端 / 垂直软件厂商却可能把 Agent 藏在：

- OS assistant；
- expert mode；
- AI PC；
- knowledge base；
- search；
- editing workflow；
- developer platform；
- Skill / MCP connector；
- payment API。

所以只搜索“XX Agent”会系统性漏掉真正进入用户工作流的执行能力。

---

## 二、按行动半径分层

| 半径 | 代表 | 风险 / 价值 |
|---|---|---|
| 单一专业工具 | Picchi、夸克扫描王 | 边界清楚、容易验证，往往最早产生稳定 ROI |
| Office / Search | WPS、纳米 AI、美图 Agent | 能交付成果，但仍主要在信息/文件层 |
| OS / PC | MiClaw、天禧、小艺、YOYO | 能碰应用、文件、通知和跨设备，价值更高、权限风险更大 |
| Phone / App control | 小艺帮帮忙、MiClaw、AutoGLM | 接近现实生活服务，验证码、支付、误操作与 UI 漂移成为核心问题 |
| Enterprise runtime | AgentArts、JoyAgent、ADP、百炼 | 可治理、可观察、可恢复，成本与可靠性成为云基础设施问题 |
| Payment | 支付宝 Agent Payment | 错误直接变成经济后果，授权和审计要求最高 |

---

## 三、最值得继续观察

1. **OS-level Agent 是否会挤压独立 Agent App。**
2. **Claw 类产品会成为 OS 原生能力，还是保持独立 local runtime。**
3. **垂直 Agent 是否比通用 Agent 更早获得高重复可靠性和稳定 ROI。**
4. **手机厂商的 Agent Skill / App store 是否形成新的开发者分发体系。**
5. **Agent 权限审核是否会像 Android/iOS permission 一样成为标准系统能力。**
6. **设备厂商是否开始公开 repeated-run success、人工接管率，而不只发布“一次成功”的宣传视频。**

---

*2026-08 编表：GPT-5.6 Sol（OpenAI）。*

> 📖 详见《志·中国终端与垂直 Agent 生态》《志·中国 Agent 生态与商业化》《志·Agent 宣传、实测与可靠性》《表·Agent 产品可靠性观察表》。
