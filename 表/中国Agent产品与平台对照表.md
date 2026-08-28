# 中国 Agent 产品与平台对照表

> 更新时间：2026-08-28。这里的“中国 Agent”按运营主体与团队来源分层记录，不把所有中文团队产品简单归成同一法律 / 市场类别。价格与套餐会变化，本表用于保存**产品形态与计量方式**，不是采购报价。

| 产品 / 平台 | 厂商 / 团队 | 类型 | 主要运行环境 | Agent 核心能力 | 当前商业化方式 | 2026 位置 |
|---|---|---|---|---|---|---|
| Kimi Agent / Agent Swarm / Kimi Claw | 月之暗面 | 通用工作 + Multi-Agent | Web / App / Desktop / cloud sandbox | Deep Research、Office、Code、Goal Mode、最多数百 sub-agent | ¥49 / 99 / 199 / 699 会员 + unified credits + Extra Usage；Claw runtime 持续扣 credits | 中国消费级 Agent 商业化最完整样本之一 |
| 悟空 Wukong | 阿里巴巴 / 钉钉 | 企业工作 Agent | Desktop + DingTalk + cloud | 多 Agent、Skills、Office、企业系统调用、定时任务、长期记忆 | Free / Starter / Basic / Premium 算粒套餐 + enterprise sales | 企业 IM / 权限体系原生 Agent |
| 百炼 Managed Agents | 阿里云 | Managed Agent runtime | Alibaba Cloud | session runtime、models、MCP/tools | 0.5 元/小时 runtime + model token + tools/MCP | 中国云厂商明确把 Agent runtime 独立收费 |
| 无影 Agentic Computer | 阿里云 | 企业 Agent 云电脑 | WUYING cloud desktop | 独立云环境、模型/权限集中配置、IM 指令入口 | cloud infrastructure + enterprise deployment | VDI / cloud desktop 与 Agent 合流 |
| Qoder CN | 阿里云 | Coding Agent / IDE | Desktop IDE + cloud models | repo、coding、Agent tools | Token Plan / Coding Plan / PAYG | 阿里 Coding Agent 商业入口 |
| 扣子 3.0 | 字节跳动 | AI 团队协作 / Agent Builder | Web / Desktop / App / cloud devices | 一人+多 Agent、多人+多 Agent、Skills、memory、cloud Agent、third-party agents | personal/team/enterprise subscription + points + PAYG | 从低代码 Bot 平台转为 AI team workspace |
| 豆包手机助手 | 字节跳动 | Phone Agent | partner smartphones | multimodal interaction、phone operation | hardware partner experience；仍标 early exploration | 消费硬件 Agent 试验线 |
| Seed1.8 / Seed2.x | 字节 Seed | Agent-native model | API / Volcengine / products | Search、Code、GUI、complex workflows | model API / product integration | 字节 Agent 模型底座 |
| Tencent Cloud ADP | 腾讯云 | 企业 AgentOps platform | Tencent Cloud / customer cloud | Agentic Loop、RAG、Workflow、Multi-Agent、API/SDK、observability | subscription / PU；workbench & Claw runtime duration billing；cloud License | 企业 AgentOps / 生命周期管理路线 |
| 百度千帆 Agent 开发平台 | 百度智能云 | 企业 Agent platform | Baidu Cloud | Agent engine、MCP/tools、RAG、Workflow、UI Builder | model token + search calls + retrieval / KB + enterprise resources | 把原大模型平台全面重排为 Agent-first |
| AutoGLM / AutoGLM-Phone | 智谱 | Phone / GUI Agent | Android / cloud phone / cloud computer | visual UI understanding、cross-app actions、tool planning | App/API/合作；部分能力免费或按 API/模型计费 | 中国 Phone Use 代表路线 |
| GLM Agent API / GLM PPT | 智谱 | Vertical Agent API | API | PPT、Office、specialized task execution | GLM PPT 5 元/百万 task-flow tokens 等 | 垂直 Agent API 商品化 |
| GLM Coding Plan | 智谱 | Coding Agent subscription | coding tools | coding、long-horizon engineering | individual/team subscription + managed usage | 模型公司向 developer workflow 下沉 |
| MiniMax Agent / MaxClaw | MiniMax | 通用 Agent + cloud assistant | Web / Desktop / cloud | Agent Team、Claw、Code、多模态 | Plus $20 / Max $50 / Ultra $120；按套餐提供 3–7 concurrent agents | “并发 Agent 数”直接进入套餐 |
| Dify Agent | Dify（中国团队起源，全球经营） | open-source / enterprise Agent platform | Cloud / self-host / VPC / on-prem | Agent、Workflow、RAG、triggers、enterprise governance | Community free；Cloud workspace subscription；Enterprise custom | 中国团队全球化 Agent 基础设施代表 |
| Manus | 中国团队起源、后全球化迁移 | general-purpose Agent | cloud | research / browser / artifacts / workflow execution | subscription / credits；曾达到约 $100M ARR | 中国起源但不宜简单归入中国境内市场 |
| DeepSeek V3.2 / V4 | DeepSeek | Agent model foundation | API / open weights / third-party runtimes | thinking-in-tool-use、coding、Responses API、vision agent | model API / weights | 强 Agent 底座，但非同等成熟的一方终端 Agent 产品 |

---

## 一、按市场层看

### C 端 / 个人生产力

- Kimi Agent / Swarm
- 扣子 3.0
- AutoGLM
- 豆包手机助手
- MiniMax Agent

这一层主要争夺：**用户愿不愿意把完整任务交给 AI，以及愿意为多少并发、多少任务、多少运行时付费。**

### Coding Agent

- Qoder CN
- Kimi Code
- GLM Coding Plan
- MiniMax Code

中国 Coding Agent 的一个特点是：经常和模型订阅 / Token Plan 绑在一起，而不是完全独立于基础模型厂商。

### 企业 Agent / AgentOps

- 悟空
- 百炼 Managed Agents
- Tencent Cloud ADP
- 百度千帆 Agent
- 扣子企业版
- Dify Enterprise

这一层竞争的不只是模型能力，而是：**身份、权限、私有知识、MCP、workflow、audit、deployment、budget 与企业分发入口。**

### Phone / GUI / Cloud Device

- AutoGLM
- 豆包手机助手
- 扣子云手机 / 云电脑
- 阿里无影 Agentic Computer

这是中国市场最有差异化的一层，因为大量真实生活与企业能力长期封装在 App / native software，而不是公开 Web API。

---

## 二、商业计量方式对照

| 计量方式 | 产品例子 | 商业含义 |
|---|---|---|
| 月度会员 | Kimi、MiniMax、扣子、悟空 | 维持用户熟悉的 SaaS 入口 |
| Credits / 积分 / 算粒 / PU | Kimi、扣子、悟空、腾讯 ADP | 把不同模型和 Agent 功能统一成内部“智能货币” |
| Token | 百炼、千帆、智谱、MiniMax | 保留模型 API 的底层计量 |
| Agent / Swarm 次数 | Kimi | 任务数量与高级执行方式直接商品化 |
| 并发 Agent 数 | Kimi、MiniMax | 用户购买的是同时工作的 worker 数量 |
| Runtime 时长 | 百炼 Managed Agents、腾讯工作台/Claw、扣子云设备 | 执行环境本身成为收费资源 |
| Search / MCP / Tool / Retrieval | 阿里、百度、腾讯 | 外部行动与数据获取被拆出独立成本 |
| 企业 License / 私有部署 | 腾讯 ADP、Dify、各云厂商 | 满足企业控制、合规和既有 IaaS 采购模式 |

---

## 三、成熟度判断

### 已经明确商业化

- Kimi membership + credits + Extra Usage
- 悟空付费套餐 / 企业方案
- 百炼 Managed Agents runtime billing
- 扣子个人 / 团队 / 企业套餐与云设备计费
- Tencent Cloud ADP 工作台 / Claw 商用
- 百度千帆模型 / 搜索 / 知识库等生产计费
- MiniMax Token Plan / Agent concurrency
- Dify Cloud / Enterprise

### 已有真实产品，但仍应保留“早期”标签

- 豆包手机助手
- 部分 GUI / Phone Agent 的跨 App 全自动执行
- AutoGLM 大范围硬件生态扩展
- 超高并发 Agent Swarm 在所有类型任务中的 ROI

### 不应误写成“成熟 Agent 产品”的能力

- 仅模型支持 function calling / tool use；
- 只有 benchmark 的 GUI Agent；
- 只有 SDK demo、无产品状态 / 计费 / 生产客户；
- 开放权重模型本身。

---

## 四、中国市场最值得继续追踪的五个变量

1. **Phone Agent 是否能从实验性硬件走到主流手机系统层。**
2. **多 Agent 的成本是否能被真实任务的 wall-clock / 人力节省覆盖。**
3. **企业 Agent 平台是否会形成 MCP / A2A 之外的事实互操作标准。**
4. **国产模型 + 国产 Agent runtime + 国产 AI 芯片能否形成完整生产链。**
5. **Agent 的价格单位最终会收敛到 credits，还是继续分裂成 token、runtime、tool、seat 与 action。**

---

## 资料入口

详细论述与脚注见《志·中国 Agent 生态与商业化》及 `sources/志/中国Agent生态与商业化/index.json`。

*2026-08 补订：GPT-5.6 Sol（OpenAI）。*
