# 2026-09-03 增量研究包：OpenAI、Anthropic、xAI 同期大面积服务故障

> 事件日期：2026-09-03（UTC / 美国东部时间）；北京时间影响跨越 9 月 3 日晚至 9 月 4 日凌晨。  
> 研究目的：把“模型能力史”之外的 **service reliability / provider concentration / operational dependency** 纳入《大模型纪事》。  
> 注意：本事件能够确认的是多家前沿 AI 服务在同一时间窗口发生故障；**目前没有证据证明三家由同一个上游、同一个北美服务器集群或同一云事故同时击穿。**

## 结论

**值得入史。**

2026-09-03，OpenAI、Anthropic 与 xAI 的主要 AI 服务在高度重叠的时间窗口内同时出现明显故障：

- OpenAI：ChatGPT 与 Codex elevated errors；
- Anthropic：Claude Mythos/Fable 5.1、Mythos/Fable 5、Opus 5、Opus 4.8、Opus 4.6 等多个模型 elevated errors；
- xAI：Grok Web、Android、iOS、Grok in X、Office/Workspace Plugins，以及至少 us-east-1 / us-west-2 API 区域发生 model outage。

按各家公开状态页时间线计算，三家明确故障窗口存在约 **1 小时 33 分钟**的三重重叠：

> **14:43 UTC — 16:16 UTC**  
> 北京时间：**22:43（9 月 3 日）— 00:16（9 月 4 日）**

这不是“某个聊天网页暂时打不开”那么简单。它同时触及：

- 消费级聊天产品；
- coding agent / Codex；
- Claude API / 多模型 serving；
- Grok 跨区域 API；
- 移动端、Web、X 内嵌与 Workspace 插件。

因此它说明到 2026 年，AI 已经形成一种新的基础设施风险：

> **用户可以拥有多家模型供应商，但“多模型”并不自动等于“高可用”。当几家头部服务在同一小时级窗口同时退化时，依赖云端前沿模型的 Agent、coding workflow、研究与自动化链条会出现相关性故障。**

不过，这里的“相关性”只指**时间上的共同暴露**，不能偷换成已证明的**共同根因**。

---

# 一、准确时间线

## 1. xAI / Grok

xAI 官方状态页记录：

- **2026-09-03 13:30 UTC**：Models outage 开始；
- **2026-09-03 17:04—17:07 UTC**：不同产品 / API 区域陆续恢复；
- us-east-1 API 官方给出的事件持续时间：**3 小时 37 分钟**；
- Android 官方给出的持续时间：**3 小时 34 分钟**。

受影响组件至少包括：

- Grok Web；
- Grok Android；
- Grok in X；
- Office / Workspace Plugins；
- Grok Build；
- API us-east-1；
- API us-west-2。

因此这不是单个客户端 bug，而是明显的模型 / serving 层广泛故障。

### 一手证据

- xAI Status, Grok in X history:  
  https://status.x.ai/grok-in-x
- xAI Status, API us-east-1:  
  https://status.x.ai/api-us-east-1
- xAI Status, incident example (Android):  
  https://status.x.ai/android-app/INC3b127ff3

## 2. Anthropic / Claude

Anthropic 官方状态页记录：

- **13:26 UTC**：开始调查 Claude Mythos 5.1、Claude Fable 5.1、Claude Opus 5 elevated errors；
- **13:50 UTC**：官方列出更完整受影响模型：Mythos/Fable 5.1、Mythos/Fable 5、Opus 5、Opus 4.8、Opus 4.6；
- **15:25 UTC**：多数模型恢复，剩余 Opus 4.8 / Opus 5；
- **16:06 UTC**：fix deployed，进入 monitoring；
- 官方称影响在 **16:16 UTC** 结束；
- **16:23 UTC**：事件标记 resolved。

按首次 investigating 到 impact ended 计算，影响窗口约 **2 小时 50 分钟**。

### 一手证据

- Claude Status, 2026-09-03 incident history:  
  https://status.claude.com/

Anthropic 状态页确认了故障与恢复，但当前公开页面没有给出足以证明“与 OpenAI / xAI 同源”的根因材料。

## 3. OpenAI / ChatGPT + Codex

OpenAI 官方状态页记录：

- **14:43 UTC**：开始调查 ChatGPT 与 Codex elevated errors；
- **15:17 UTC**：已部署 mitigation 并 monitoring；
- **16:55 UTC**：事件 resolved；
- 官方特别提示：部分 Codex remote control 用户在事故后可能需要重新配对移动设备。

按 investigating 到 resolved 计算，事件持续约 **2 小时 12 分钟**。

### 一手证据

- OpenAI Status, “Elevated errors across ChatGPT and Codex”:  
  https://status.openai.com/incidents/01M1KWEDH417T2CF44YYHZDFCR
- OpenAI Status history:  
  https://status.openai.com/history

### 同日还有一个应与本事件分开的 OpenAI 故障

OpenAI 另有一份独立 postmortem：

- 2026-09-02 22:46 PDT 至 2026-09-03 02:25 PDT；
- 部分 ChatGPT Web 页面无法显示已生成的回答；
- 官方根因是 CDN 上误配置的自动 DDoS 防护规则阻止关键 JavaScript bundle 加载；
- 官方估计受影响窗口内最高约 **20% page loads** 无法显示回答。

这说明 9 月 3 日对 OpenAI 是一个可靠性问题密集日，但这项 CDN 事故**不是**后面三家同时故障窗口的一部分，不能合并成同一根因。

来源：  
https://status.openai.com/incidents/01KXXDNEAKEPRGFM661SBJJAM6/write-up

---

# 二、三家到底重叠了多久

用官方状态页最保守的明确影响时间：

| 厂商 | 明确开始 | 明确结束 | 约持续 |
|---|---:|---:|---:|
| xAI | 13:30 UTC | 17:07 UTC | 3h37m |
| Anthropic | 13:26 UTC | 16:16 UTC | 2h50m |
| OpenAI | 14:43 UTC | 16:55 UTC | 2h12m |

因此三家共同处于已确认故障状态的交集为：

> **14:43 UTC — 16:16 UTC = 1 小时 33 分钟。**

换算：

- 美国东部夏令时：约 **10:43 — 12:16 EDT**；
- 北京时间：约 **22:43（9 月 3 日）— 00:16（9 月 4 日）**。

这与大量用户在美国东部上午 9—11 点开始报告 AI 服务异常的外部监测基本一致。

---

# 三、独立报道：确认“同时炸”，但不能证明“同一个原因”

## The Verge

The Verge 当日报道标题即为：

> “ChatGPT, Grok, and Claude all went down at the same time”

报道确认三家同期不可用，并明确写道：

> **it remains unclear whether the outages were connected.**

这句话应成为本书的因果边界。

来源：  
https://www.theverge.com/ai-artificial-intelligence/989503/chatgpt-grok-claude-outage-down

## Forbes / Downdetector 用户报告

Forbes 汇总 Downdetector：

- ChatGPT 报告峰值超过 **37,000**；
- Grok 约 **1,365**；
- Claude 约 **1,324**；
- Gemini 也出现约数百条异常报告。

这些数字只能代表**用户故障报告量**，不是失败请求数、受影响用户总量，更不能直接比较厂商实际 outage severity。

来源：  
https://www.forbes.com/sites/maryroeloffs/2026/09/03/widespread-ai-outage-hitting-open-ai-claude-and-others/

## Gemini 是否算第四家？

本轮建议：**列为观察项，不作为与前三家同等级的已确认核心节点。**

原因：

- 多家媒体与 Downdetector 的确观察到 Gemini 用户报告上升；
- 但截至本研究包整理时，Google Workspace Status Dashboard 并未留下一个与 OpenAI / Anthropic / xAI 同等级的 Gemini 大面积官方 incident 记录；
- Google Cloud Service Health 当时也显示 “No broad severe incidents”。

因此更严谨的写法是：

> **OpenAI、Anthropic、xAI 有各自官方状态页确认的同期事故；Gemini 有同期用户报告与媒体观察，但官方事故证据较弱。**

Google Cloud Service Health:  
https://status.cloud.google.com/regional/americas

---

# 四、是否存在共同上游？目前不能证明

这是本事件最容易被误写的地方。

网络上已经出现“OpenAI、Anthropic、Grok 的北美服务器集群一起炸了”“共同 Azure / Cloudflare 上游导致”之类叙述，但目前证据不足。

## 能确认的

- 三家时间窗口高度重叠；
- 三家各自官方状态页都确认有故障；
- xAI 故障跨多个客户端与 API 区域；
- OpenAI 同时影响 ChatGPT 与 Codex；
- Anthropic 同时影响多代多个 Claude 模型。

## 不能确认的

- 三家共用一个故障数据中心；
- 三家由同一个 Azure / AWS / Cloudflare 事故击穿；
- 北美网络骨干故障是共同根因；
- 某次模型发布（如 Astra）直接导致其它厂商故障。

The Verge 明确称关联性未知。

同时，本轮检查的公共基础设施状态也没有给出足以解释三家的统一事故：

- Google Cloud 公共 dashboard 当时显示 **No broad severe incidents**；
- Cloudflare 9 月 3 日确有 Western North America R2 503、Seattle 522 等 minor incidents，但公开记录不足以把它们与三家 AI outage 建立因果链；
- Azure 公共 status / history 暂未找到一个与 14:43—16:16 UTC 完整吻合、且公开确认会同时击穿三家的 broad incident。

所以主编年必须写：

> **同期故障 ≠ 同源故障。**

---

# 五、为什么值得进入“大模型纪事”

## 1. 大模型服务已经成为基础设施，而不是单个网站

如果 2023 年 ChatGPT 宕机主要意味着“一个热门网站挂了”，到 2026 年同类事故已经会同时打断：

- coding agent；
- research agent；
- API automation；
- 工作区 Agent；
- IM / mobile assistant；
- 多模型代理网关；
- 企业 workflow。

当用户把 Agent 设成持续运行任务时，模型 API 的 uptime 已经属于系统 SLO 的一部分。

## 2. “我接了三家模型，所以我有容灾”并不成立

本事件最值得记住的技术史含义是：

> **vendor diversity 不自动等于 failure independence。**

即使三个 provider 最终根因彼此独立，用户层面仍然出现了同一时段多供应商同时不可用。

因此 Agent / AI infra 的可靠性设计不能只写：

> primary model → fallback model。

还需要考虑：

- 多区域；
- 本地 / 自托管 fallback；
- task checkpoint；
- retry budget；
- idempotency；
- queue / delayed execution；
- provider health awareness；
- 能否在模型恢复后从中间状态继续，而不是整条任务重跑。

这与仓库已有 `Agent记忆状态与可恢复性` 主线直接相连。

## 3. 这也是一次“相关故障风险”的公开样本

截至目前不能证明共同根因，但历史意义仍成立：

> **对于使用者而言，相关性风险由结果决定，不一定要求底层根因相同。**

三个独立事件如果刚好在同一窗口发生，也足以使“跨厂商 fallback”失效。

因此可靠性评估应开始区分：

- 单 provider uptime；
- cross-provider correlated downtime；
- regional failure；
- shared dependency failure；
- independent coincident failure。

---

# 六、证据等级

## A：事故存在、时间与受影响产品

**A。**

理由：OpenAI、Anthropic、xAI 均有官方状态页；多个独立媒体确认同期发生。

## B：影响规模

**B。**

Downdetector / Forbes 等能说明大量用户实际感知故障，但报告量不是完整遥测。

## C / 未证实：共同根因

**C / unresolved。**

目前没有足够证据证明是统一 Azure、AWS、Cloudflare、北美机房或骨干网络事故。

主书不得写成：

> “三大 AI 厂商因为同一北美服务器故障同时宕机。”

建议写成：

> “三家头部 AI 服务在 2026-09-03 出现高度重叠的大面积故障；截至事后早期公开资料，是否存在共同根因尚不清楚。”

---

# 七、建议写入位置

## 编年

`编年/2026/09.md`

建议条目标题：

> **9 月 3 日：OpenAI、Anthropic、xAI 同期故障——多模型时代第一次显著的跨厂商相关可用性样本**

建议正文核心：

- 保存三家官方时间；
- 写出约 1h33m 三重故障重叠；
- 明确 ChatGPT/Codex、Claude 多模型、Grok 跨 API / 客户端均受影响；
- 强调共同根因未知。

## 志

建议新增 / 修订：

- `志/Agent宣传、实测与可靠性.md`：加入 provider outage / cross-provider availability；
- `志/Agent记忆状态与可恢复性.md`：加入服务宕机后的 durable task / checkpoint 恢复问题；
- `志/AI Agent 生态.md`：把模型供应商 uptime 作为 Agent runtime dependency；
- 如以后新建 `志/大模型服务基础设施与可靠性.md`，本事件可作为 2026 年关键案例。

## 表

建议在：

- `表/Agent产品可靠性观察表.md`；
- `表/大事年表.md`

加入该事件。

---

# 八、是否需要修订已有条目

**需要。**

仓库目前对 Agent reliability 的主要关注还是：

- task success；
- repeatability；
- human takeover；
- retry；
- memory / state；
- sandbox / permission。

本事件说明还缺一层：

> **provider availability 与 cross-provider correlated failure。**

也就是说，Agent “可靠性”不能只测模型是否会把任务做对，还要测：

> **模型服务不在的时候，任务是否仍然能活下来。**

---

# 九、史学判断

这次事故不必夸张成“AI 基础设施崩溃”，但也不能因为几小时后恢复就不记录。

真正值得入史的是：

> **当 OpenAI、Anthropic、xAI 在同一小时级窗口同时退化时，多模型 fallback 这一看似天然的容灾方案暴露了边界。**

2026 年的大模型已经不只是模型参数和 benchmark；它们是持续在线、被 Agent 和企业流程调用的公共服务。

因此从这一天开始，《大模型纪事》在写“可靠性”时，应明确增加第四层：

> **单次能力 → 重复任务可靠性 → durable runtime / state recovery → provider / cross-provider availability。**

这条链比“昨天谁又多了两分 benchmark”更接近 AI 真正成为基础设施之后的历史。
