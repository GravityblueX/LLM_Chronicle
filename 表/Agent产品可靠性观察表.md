# Agent 产品可靠性观察表

> 更新时间：2026-08-28。本表不做“谁最强”排名，也不把单次 demo 当作成熟能力。目标是保存不同 Agent 产品 / 平台在**产品状态、官方宣称、独立证据、已知限制和失败恢复**上的差异。
>
> “未披露”不是扣分，而是史料状态。没有公开重复成功率，就不要替厂商发明一个可靠性结论。

| 产品 / 平台 | 产品状态 | 官方 / 产品层声明 | 独立或运行证据 | 已知限制 / 失败模式 | 史料判断 |
|---|---|---|---|---|---|
| OpenClaw | 开源 GA / 快速迭代 | 本地/云端常驻，shell/files/browser/skills/IM，多模型 | 中国 2026-03 大规模普通用户采用；Reuters 同时记录高 token 成本、低效结果与长执行时间抱怨 | 高权限配置风险、攻击面、token 成本、环境依赖；工信系统 2026-02 已发安全提醒 | **已证明高扩展性与大众传播；长期可靠性不能由 star / demo 推断** |
| WorkBuddy | 面向个人公开产品，持续快速更新 | 文件、Office、代码、terminal、Skills、MCP、自动任务、多专家 | changelog 持续记录真实功能和修复 | 白屏/卡死、历史丢失、队列重复、sandbox 状态丢失、权限请求挂起、ClawBot 截断等曾被官方修复 | **真实产品化程度高；可靠性工程仍快速演进** |
| QClaw | beta / local-first | OpenClaw 产品化、本机运行、IM 远程命令、BYOK | 腾讯正式产品文档 | 依赖本机在线、模型/API 与本地环境；生产重复成功率未公开 | **部署门槛显著下降，但不要把“一键安装”写成“一键可靠”** |
| ArkClaw | 云托管产品 | 云电脑 + OpenClaw / Skills / 多 Agent | 火山引擎官方运行文档 | 低规格不支持/不适合云电脑；同一实例建议仅一个云电脑任务；重启/修复/欠费时不可用 | **官方限制文档清楚，适合作为“能力与资源边界必须同时写”的样本** |
| Kimi Agent / Swarm | 商业化 | Research、Office、Code、Swarm、并发、scheduled tasks | 会员把 Agent/Swarm/并发直接商品化 | 超大 Swarm 的跨任务 ROI、协调错误率和平均人工接管率未充分公开 | **多 Agent 已商品化；“更多子 Agent = 更高生产率”仍需按任务验证** |
| AutoGLM / Phone | 产品/API/合作硬件 | 跨 App Phone Use、视觉操作 | 官方应用列表 / API 文档 | App UI 变化、登录、验证码、支付、风控、弹窗；大规模重复成功率未充分披露 | **Phone Use 路线真实存在，但行动半径越大越需要确认/审计** |
| 豆包手机助手 | early exploration / hardware partner | 手机操作、多模态 | 官方仍标早期探索 | 跨 App 稳定性、支付/身份动作边界仍在形成 | **应保留“早期”标签，不能按成熟 OS Agent 写** |
| WPS 灵犀 / AI Agent | 商业化 | 长上下文办公、文档/PPT/复杂任务 | 官方社区有真实使用与故障反馈 | PPT 卡住、云电脑任务错误、微信连接问题、灵点成本/权益拆分争议（均为个案或社区样本） | **产品真实、用户真实，但营销描述与订阅体验需要分栏记录** |
| Huawei AgentArts | 企业公测 / 商业平台 | 长程任务、安全、行业知识、observability、多 Agent | 官方文档公开状态持久化、恢复、灰度、智能体卫士 | 很多能力仍处公测；生产客户具体成功率/ROI 未统一披露 | **可靠性本身已成为平台 SKU，是企业 Agent 成熟的重要方向** |
| ChatGPT Agent / Work | 商业产品 | browser/research/workspace/long-running tasks | 大规模用户入口；具体任务性能依场景而异 | 真实权限/网站变化/人工确认/成本会显著影响任务结果 | **不应把产品存在等同于所有网页任务可无人化完成** |
| Claude Cowork / Computer Use | research preview → 产品化演进 | desktop/files/computer-use/knowledge work | OSWorld / computer-use 研究提供环境评测 | computer-use 重复执行存在显著方差；环境、任务歧义影响成功 | **单次成功不足以证明可靠性，适合用 repeated-run 指标** |
| Codex / coding agents | 商业产品 | repo、terminal、sandbox、PR、background work | 软件工程有 test/Git/CI verifier，生产采用最成熟 | hidden tests、环境配置、依赖、并行写冲突、错误修复可能反复 | **Agent 最先跑通的市场，但 benchmark 也要看 rollout 与 verifier** |
| 支付宝 Agent 支付 | 生产支付基础设施 | 402、Agent 自动购买、Payment-Proof、API/Skill/MCP 收付款 | 官方披露真实交易规模并提供集成 benchmark | 金钱动作必须授权、验证、风控；支付正确不等于 Agent 意图正确 | **行动错误开始变成金钱错误，可靠性要求显著高于普通工具调用** |

---

## 一、读表时不要忽略三个“没写出来的数字”

### 1. 重复成功率

一个任务做成一次，和连续十次都做成，是完全不同的产品属性。

真正接近生产可靠性的指标应包含：

- first-run success；
- repeated success / pass^k；
- retry 后成功率；
- mean time to recovery。

### 2. 人工接管率

Agent 可以“最终完成”一件事，但如果中间需要用户：

- 登录；
- 重新定位按钮；
- 修 prompt；
- 填验证码；
- 恢复环境；
- 检查并返工；

那么它的自动化价值和真正无人执行差别很大。

### 3. 成功任务总成本

应该记录：

> model tokens + search + tools + runtime + subagents + retries + human review + failure cost。

一个“便宜模型”如果让 Agent 重跑四次，未必便宜。

---

## 二、本表的成熟度用语

| 用语 | 含义 |
|---|---|
| **功能存在** | 产品 / API 中可以调用 |
| **已有成功案例** | 至少存在 demo / 用户成功案例 |
| **重复可用** | 有多次独立运行或可靠性数据支持 |
| **生产采用** | 企业或大规模用户真实部署 |
| **生产可靠** | 还需要公开的长期成功率、事故率、恢复与成本数据；本书不会轻易使用这个词 |

---

## 三、史官警示

看到以下宣传词时，应自动降低表述强度：

- “完全自主”
- “零人工”
- “一句话搞定”
- “AI 员工”
- “替代一个团队”
- “7×24 不间断”
- “几分钟完成原本数小时工作”

除非有独立、重复、同条件证据，否则它们首先是**产品定位**，不是**可靠性结论**。

---

*2026-08 编表：GPT-5.6 Sol（OpenAI）。*

> 📖 详见《志·Agent 宣传、实测与可靠性》《志·OpenClaw 与中国 Agent“龙虾潮”》《表·Benchmark 速查》《志·个人 Agent 生态与商业化》。
