# 中国 Agent 产品与平台对照表

> 更新时间：2026-08-28。这里的“中国 Agent”按运营主体、团队来源与执行层分开记录。**“官方列出某能力”不等于“真实任务稳定可用”**；本表增加“证据 / 限制”列，区分产品状态、厂商声明、公开限制与实测边界。价格会变，本表不是采购报价。

| 产品 / 平台 | 厂商 / 团队 | 类型 / 与 OpenClaw 关系 | 主要运行环境 | 商业化 / 状态 | 证据 / 已知限制与历史位置 |
|---|---|---|---|---|---|
| **OpenClaw** | Peter Steinberger / 社区 | 母体开源 personal-agent harness | local machine + IM + workspace | MIT；模型 / 机器成本自理 | 2026 中国“养龙虾”引爆点；高权限也带来 prompt injection / shell / credential 风险 |
| **QClaw** | 腾讯 | OpenClaw 产品化 / local-first | Windows / macOS + 微信 / WhatsApp / Telegram | 客户端 + BYOK / 模型费用 | 降低部署门槛；更接近 OpenClaw 原生路线，不等于 WorkBuddy |
| **ClawBot** | 腾讯 / 微信 | OpenClaw 的 WeChat 入口 | WeChat | 逐步产品化 | Agent 像联系人一样被远程下令；消息入口扩大也扩大 prompt-injection 边界 |
| **WorkBuddy** | 腾讯 | **自研 CodeBuddy 架构；兼容 OpenClaw Skills / MCP** | Windows / macOS / mobile / Mini Program | 免费；¥99/199/999 月付，连续包月约 ¥70/140/700；credits | 官方称支持文件/Office/code/terminal/自动任务；复杂任务稳定性仍需按重复实测判断 |
| **ima copilot** | 腾讯 | 个人知识 / memory Agent | Web / Desktop / Mobile + KB | 个人知识入口 | 更偏记忆与知识，不等同高权限执行器 |
| **Tencent Cloud ADP** | 腾讯云 | enterprise AgentOps | Tencent / customer cloud | subscription / PU；工作台 / Claw runtime 商用；cloud License | Agentic Loop、RAG、Workflow、Multi-Agent、observability；企业控制层 |
| **DuClaw** | 百度 | Managed OpenClaw | Baidu Cloud / Web | 托管云服务 | zero-deployment OpenClaw；云托管降低安装门槛，不自动提高任务可靠性 |
| **DuMate** | 百度 | OpenClaw-based desktop / enterprise | PC / enterprise | 正式产品族 | 百度高管公开提醒 Agent 仍易犯错 |
| **RedClaw** | 百度 | OpenClaw-based mobile | Mobile | 产品族 | Phone/跨 App 路线；GUI / 登录 / 风控影响稳定性 |
| **小度 OpenClaw Agent** | 百度 | OpenClaw-based hardware entry | smart devices | 产品族 / 探索 | 执行动作延伸家庭硬件，权限边界更敏感 |
| **百度千帆 Agent** | 百度智能云 | enterprise Agent platform | Baidu Cloud | model/search/RAG/KB 等分项计费 | Agent engine、MCP/tools、Workflow；企业平台层 |
| **ArkClaw** | 火山引擎 | Managed OpenClaw，可迁移 OpenClaw 状态 | Volcengine + cloud browser/computer | Agent Plan / cloud subscription | 官方明确：部分规格无云电脑；并发云电脑会资源冲突；验证码/高危操作需人工接管 |
| **扣子 3.0** | 字节 | 独立 AI Team Workspace，可连接第三方 / OpenClaw | Web / Desktop / App / cloud devices | personal/team/enterprise + points + PAYG | 一人+多 Agent / 多人+多 Agent；云设备在线本身产生费用 |
| **飞书 OpenClaw** | 飞书 / 字节 | 官方 OpenClaw 一键部署 / 飞书深度整合 | Feishu group / cloud | 对飞书用户开放 / 活动额度 | 厂商称支持多 Agent team、模板、云记忆；功能广度不等于连续成功率 |
| **飞书 aily** | 飞书 | enterprise custom Agent | Feishu | 面向用户开放 / 企业产品 | 知识、权限、定时任务、文档/多维表格操作；Team Agent 路线 |
| **飞书多维表格智能体** | 飞书 | business-data Team Agent | Feishu Bitable | 2026-07 产品能力 | 读写真实业务表、提醒/分析/写回；依赖表结构与企业权限 |
| **Seed1.8 / Seed2.x** | 字节 Seed | Agent-native model foundation | API / Volcengine / products | model API | Search、Code、GUI、workflow 属模型底座，不等同完整终端 Agent |
| **豆包手机助手** | 字节 | Phone Agent | partner smartphones | 早期硬件 / 产品探索 | 真实 App 环境受登录、验证码、支付与 UI 更新影响 |
| **Wukong 悟空** | 阿里 / 钉钉 | 独立 enterprise multi-Agent，非 OpenClaw fork | DingTalk + cloud | 算粒套餐 + enterprise sales | 直接继承组织身份、日程、文档、审批、权限；企业协作型答案 |
| **QwenPaw / CoPaw** | 阿里 AgentScope | OpenClaw 浪潮下独立重实现 | self-host / cloud image | open-source + cloud deployment | AgentScope/Runtime/ReMe；官方文档亦提醒用户自行评估安全/稳定性 |
| **HiClaw** | 阿里云社区 | lightweight manager/worker multi-Agent | local/cloud | open-source / ecosystem | 重点优化 worker 资源，不等同成熟 C 端商业产品 |
| **百炼 Managed Agents** | 阿里云 | managed Agent runtime | Alibaba Cloud | **0.5 元/小时 runtime + model token + tools/MCP** | 中国云厂商把 Agent runtime 明确独立计费 |
| **无影 Agentic Computer** | 阿里云 | enterprise Agent cloud computer | WUYING | cloud infra / enterprise | 给 Agent 独立受管云电脑，而非直接接管员工物理 PC |
| **Qoder CN** | 阿里云 | Coding Agent / IDE | Desktop + cloud models | Token/Coding Plan/PAYG | coding Agent 入口，和模型/credits 体系联动 |
| **AutoGLM / AutoGLM-Phone** | 智谱 | Phone / GUI Agent，**早于 OpenClaw** | Android / cloud phone | App/API/合作 | 中国 Phone Use 代表；不能误写成 2026 龙虾潮产物 |
| **AutoClaw** | 智谱 | 官方称基于 OpenClaw | local + IM | 下载 / 模型服务 | files/browser/code/Skills/memory；功能声明需和长期实测分开 |
| **GLM Agent API / PPT** | 智谱 | vertical Agent API | API | task-flow / API usage | 垂直制品 Agent 商品化 |
| **GLM Coding Plan** | 智谱 | Coding Agent subscription | coding tools | individual/team subscription | 模型公司下沉 developer workflow |
| **Kimi Agent / Swarm / Claw** | 月之暗面 | cloud/personal multi-Agent | Web/App/Desktop/cloud sandbox | ¥49/99/199/699 + credits / Extra Usage | Agent/Swarm/并发/runtime 直接进会员；更多并发不等于更低任务成本 |
| **MiniMax Agent / MaxClaw** | MiniMax | general personal Agent | Web/Desktop/App/cloud | subscription + credits | 并发 Agent 与 credits 进入套餐；公司总收入不能全归因 Agent |
| **JoyAgent / JoyClaw** | 京东 | model/agent hub + personal Agent | Web/cloud/API | 个人积分 + API key；企业定制 | JoyClaw 专业版在官方平台列为 2026-03-13 产品；零售/企业 AI 进入 Agent hub |
| **言犀** | 京东 | customer-service / interaction platform | enterprise | custom sales | 较早企业 AI 能力，为 JoyAgent 的业务/交互基础之一，不应和通用 Agent 混为同类 |
| **AgentArts / openJiuwen** | 华为云 | enterprise harness + open-source runtime | Huawei Cloud / private | AgentArts enterprise + openJiuwen open-source | 长程任务、安全、行业知识、observability；华为效率数字属于厂商测试口径 |
| **WPS 多智能体 / 知识 Agent** | 金山办公 | Office-native / team Agent | WPS / WPS 365 | WPS AI / enterprise plans | 多维表、知识库、Office 原生；官方营销效率数字需当厂商案例口径 |
| **WPS 灵犀专业版** | 金山办公 | personal office Agent | standalone/Web/WPS | 独立收费 / 灵点等体系 | 官方社区已有单个用户投诉旧大会员宣传与后续独立收费认知不一致；仅作为用户体验样本 |
| **YOYO 智能体 / YOYO Claw** | 荣耀 | system/PC Agent | Honor phone / PC | 终端产品能力 | YOYO Claw 直接使用“一键养虾”产品语言；场景数属厂商口径 |
| **Robot Phone / Agentic OS** | 荣耀 | system-level / embodied Agent | smartphone + gimbal | 2026-08 hardware product | 把 Agent 扩到跨 App 与物理云台；实际重复成功率仍需独立验证 |
| **支付宝 Agent 支付 / AI 按量付费** | 蚂蚁 / 支付宝 | **Agent commerce infrastructure** | payment APIs / MCP/Skill ecosystem | transaction / usage billing | 不是 Agent App，而是 Agent 授权支付、402、API/Skill/MCP 计费层；平台交易数为厂商统计 |
| **Dify Agent** | Dify（中国团队起源、全球经营） | open-source / enterprise Agent platform | Cloud/self-host/VPC/on-prem | Community free + Cloud + Enterprise | workflow-first → reusable Agent；私有部署/迁移路线 |
| **Manus** | 中国团队起源、后全球化 | general-purpose cloud Agent | cloud | subscription + credits + Cloud Computer | 中国起源但主要全球市场，不宜等同中国境内 SaaS |
| **DeepSeek V3.2 / V4** | DeepSeek | Agent model foundation | API/open weights/third-party runtime | model API / weights | 强 Agent 底座；不强行写成完整第一方 WorkBuddy/Cowork 类产品 |

---

## 一、OpenClaw 关系速查

| 关系 | 代表 | 史书写法 |
|---|---|---|
| 原始母体 | OpenClaw | 2025-11 Clawd → 2026-01 OpenClaw → 3 月中国爆发 |
| 直接托管 / 产品化 | QClaw、DuClaw、ArkClaw、AutoClaw | 可说“基于 / 托管 OpenClaw”，但仍分别记录厂商改造和限制 |
| OpenClaw-based 设备 / 企业衍生 | DuMate、RedClaw、小度 | 不等同原生 OpenClaw 产品 |
| 兼容生态、内核自研 | WorkBuddy | **不可写成简单套壳** |
| 同浪潮独立重实现 / 竞争产品 | QwenPaw、HiClaw、Wukong、Kimi/Coze 等 | 写“受龙虾潮推动 / 同类产品”，不冒充 fork |

> 📖 更细见《表·中国 OpenClaw“龙虾”生态对照表》。

---

## 二、按市场层看

### 个人 / 本机

OpenClaw、QClaw、WorkBuddy、ima、Kimi、MiniMax、AutoClaw、QwenPaw、YOYO Claw。

核心变量：**是否常驻、数据在哪里、能否远程下令、成本和权限半径。**

### Phone / GUI / OS

AutoGLM、豆包手机助手、RedClaw、荣耀 YOYO / Robot Phone、云手机 / 云电脑。

核心变量：**真实 App 状态变化、验证码 / 登录 / 支付边界、UI 变化后的重复可靠性。**

### 企业 / AgentOps / Collaboration

Wukong、ADP、Qianfan、AgentArts、Feishu aily / Team Agent、WPS、Dify Enterprise。

核心变量：**identity、permission、private knowledge、workflow、audit、deployment、budget。**

### Cloud runtime

ArkClaw、DuClaw、Managed Agents、无影、扣子云设备、腾讯工作台/Claw。

核心变量：**runtime 时长、CPU/memory、备份、resume、并发冲突、人工 takeover。**

### Commerce / Payment

支付宝 Agent 支付 / 按量付费。

核心变量：**授权、意图偏移检测、支付证明、退款、责任追溯与 Skill/MCP 计费。**

---

## 三、商业计量方式已经非常碎

| 计量方式 | 例子 |
|---|---|
| 会员 / seat | WorkBuddy、Kimi、MiniMax、WPS、悟空 |
| credits / points / 算粒 / PU | WorkBuddy、Kimi、扣子、悟空、ADP、JoyAgent |
| token | 百炼、千帆、智谱、MiniMax、Seed |
| task / automation | WorkBuddy、Kimi、Manus |
| Agent / Swarm / concurrency | Kimi、MiniMax |
| runtime 时长 | 百炼、ArkClaw、ADP、扣子云设备 |
| Search / MCP / Tool / Retrieval | 阿里、百度、腾讯、支付宝 |
| enterprise license | ADP、AgentArts、Dify、WPS 等 |
| payment / transaction | 支付宝 Agent 支付 |

因此最有意义的综合指标仍然是：

> **Cost per successful completed task**

而不是某一项 token 单价。

---

## 四、宣传与实际使用：速查表也要留下失败信息

以下事实不能被功能列表盖掉：

- Reuters 采访 OpenClaw 中国用户，存在 token 成本高、结果不理想、投入回报低的抱怨；
- 百度发布“龙虾家族”时自己提醒 Agent 仍会犯错；
- ArkClaw 官方明确写出云电脑规格限制、多 Agent 资源冲突和人工接管场景；
- WPS 官方社区出现个人用户对 AI Agent 宣传与后续产品拆分 / 收费变化的投诉；
- Phone / GUI Agent 仍面对验证码、登录、支付、UI 改版和错误撤回。

这些证据并不能证明“某产品不好”，但可以证明：

> **“官方支持”与“用户能稳定省时间”不是同一个命题。**

---

## 五、继续追踪的变量

1. OpenClaw 生态会长期存在，还是被大厂原生 runtime 吸收？
2. WorkBuddy / QClaw / ima 这类个人多产品分层会不会重新合并？
3. Phone / system Agent 能否跨过可靠性与支付权限门槛？
4. Team Agent 是长在飞书 / 钉钉 / WPS 数据里，还是由独立 Agent OS 接管？
5. 中国云的 runtime / token / tool / payment 会不会形成统一 Agent 账单？
6. 国产模型 + 国产 runtime + 国产芯片 serving 能否形成真正可迁移的全链路？
7. 厂商最终是否愿意公开**重复成功率、人工接管率、任务成本**，而不只是 Skills 数量和 benchmark？

---

## 资料入口

详见《志·中国 Agent 生态与商业化》《志·OpenClaw 与中国 Agent“龙虾潮”》《志·个人 Agent 生态与商业化》及对应 `sources/`。

*2026-08 重订：GPT-5.6 Sol（OpenAI）。*
