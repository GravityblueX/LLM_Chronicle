# 2026-09-02 增量研究包：Fable / Mythos 5.1 与 Astra 的 Critical Cyber 门槛

> 检查窗口：约 2026-09-01 17:37 UTC 至 2026-09-02 17:37 UTC（约 24 小时）。  
> 仓库基线：`main` 已合并 2026-09-01 Anthropic alignment / security 研究包（PR #12）；本包先检索现有正文与 review，未发现 `Claude Fable 5.1`、`Claude Mythos 5.1` 或 OpenAI `Astra` 的当前事件已进入主书。

## 结论

本轮有 **2 项明确达到“值得入史”门槛的核心事件**，另有 **1 项应作为同一轮基础设施变化一起保存、但不能误写成已经 GA 的配套事件**：

1. **2026-09-01，Anthropic 发布 Claude Fable 5.1 与 Claude Mythos 5.1。** 两者是同一底层模型、不同 safeguards / access policy 的双层发布；Fable 5.1 已广泛可用，Mythos 5.1 继续通过 trusted-access programs 限制开放。第三方 Artificial Analysis 的独立评测确认 Fable 5.1 位于其当日 intelligence frontier，但同时指出 Anthropic 的“agentic work 最多便宜约 45%”并不是普遍意义上的每任务成本下降。
2. **2026-09-01，OpenAI 正式判定尚未公开发布的 Astra 达到其 Preparedness Framework 的 Critical cybersecurity capability threshold。** 这是 OpenAI 首次正式把一个模型标到该等级，并因此对开发、训练、监控与未来部署采取更强限制。事件的历史主体不是“又发布一个模型”，而是**能力分级第一次实质改变一个前沿模型的开发与开放方式**。
3. Anthropic 同日宣布 **Enterprise Frontier Safeguards（EFS）**：把多会话 / 多账户 misuse monitoring 与 customer-owned storage、customer-managed keys、客户侧人工 review 组合起来。EFS 是已公布并与 100+ 客户共同设计的架构，但**尚未普遍上线**，计划从 2026 年秋季分阶段 rollout，因此应写成“announced / planned rollout”，不能写成“已经生产普及”。

两项核心事件合在一起，显示 2026 年 9 月初的前沿模型竞争正在把三个过去常被混写的问题拆开：

> **model capability ≠ deployment access ≠ runtime safeguards。**

同时也再次证明本仓库现行体例必须坚持：

> **厂商宣称 ≠ 产品可用 ≠ 单次成功 ≠ 重复可靠性 ≠ 生产采用 ≠ ROI。**

---

# 事件一：Claude Fable 5.1 / Mythos 5.1 发布——同一底层模型继续按 safeguards 分层

## 准确日期

**2026-09-01。**

Anthropic Newsroom 将发布条目标为 2026-09-01；TechCrunch 同日 12:39 PM PDT 报道，两款模型当日发布。这个时间落在本轮约 24 小时窗口内。

## 核心事实

### 1. 不是两个独立基础模型，而是同一底层模型的两种 access / safeguard 配置

Anthropic 明确写道：

- **Claude Fable 5.1 与 Claude Mythos 5.1 是同一模型**；
- Fable 5.1 为 general availability；
- Mythos 5.1 只通过 trusted access programs 提供；
- Mythos 的 safeguards 为 cybersecurity 与 life sciences 研究提供更宽的许可边界。

因此正文不应把它们写成“两个能力不同的基础模型谱系节点”。更准确的历史描述是：

> **同一 frontier base capability，被产品化为一般访问层与受信任高风险研究访问层。**

这延续了仓库已经记录的 2026-06 Fable / Mythos 分层，但 5.1 把这种模式进一步制度化：

- 一般用户拿到 Fable；
- vetted cyber / life-sciences users 通过 verification program 获得 Mythos；
- access policy 不再只是一个产品套餐，而是模型生命周期的一部分。

### 2. Fable 5.1 已经实际可用，不只是发布预告

Anthropic 当前页面写明：

- Fable 5.1 已提供给 Pro、Max、Team、Enterprise 用户；
- 开发者可以通过 Claude Platform 使用；
- 同时通过 AWS、Google Cloud、Microsoft Foundry 等渠道提供；
- API model id 为 `claude-fable-5-1`。

因此这一项属于：

> **产品确实存在并已可用。**

不是“厂商称未来会发布”。

Mythos 5.1 的情况不同：

- 它确实存在；
- 但访问仍仅限 vetted organizations / trusted access programs；
- 当前不是面向普通开发者的 GA 模型。

### 3. Anthropic 把 cost story 放到了 cache / agentic workload，而不是只降基础 token 单价

Fable 5.1 的基础价格仍为：

- input：$10 / 1M tokens；
- output：$50 / 1M tokens。

真正变化是 cache read：

- 降到 **$0.25 / 1M tokens**；
- 相比 Fable 5 降低 75%。

Anthropic 据此估计：

- typical workloads 约便宜 25%；
- highly agentic workloads 最多约便宜 45%。

但这必须严格标注为：

> **Anthropic 的 workload-cost estimate。**

不能把“cache read 便宜 75%”直接写成“每个 Agent 任务都便宜 75%”。

### 4. 独立评测对“更便宜”给出了重要反证

Artificial Analysis 在 2026-09-01 发布独立评测：

- Fable 5.1（max）在其 Intelligence Index 得分 **66**，为其当日最高；
- 但在 Artificial Analysis 自己的完整任务口径下，Fable 5.1 的**每任务成本比 Fable 5 高约 20%**；
- 原因是其输出 token 使用量显著上升，抵消了 cache-read 降价的部分收益。

Artificial Analysis 同时说明：

- 它参与了 Anthropic 的 pre-release evaluation；
- 但其公开结果与 Anthropic 的 headline cost framing 并不完全一致。

这正是本仓库应该保存的证据冲突：

> **unit price ↓ 不必然意味着 cost per completed task ↓。**

因此若后续写入《价格战》《Agent 产品与商业化》或价格表，建议同时保存：

1. Anthropic 的官方 token / cache 价格；
2. Anthropic 对 typical / agentic workload 的估算；
3. Artificial Analysis 的独立 per-task observation。

三者不能合并成一句“Fable 5.1 降价 45%”。

### 5. 能力提升有独立 benchmark 支撑，但“真实生产可靠性”仍需分层

Anthropic 公布多项 benchmark 改善，并强调 long-running coding、research、computer-use 与 business workflow。

Artificial Analysis 独立评测给出：

- Intelligence Index 66；
- 相比 Fable 5 增长 4 点；
- 在 HLE、Terminal-Bench、SciCode 等若干项目取得当时最高或接近最高结果。

这可以支持：

> **Fable 5.1 的 frontier benchmark position 有独立证据。**

但它仍不能直接证明：

> **Fable 5.1 在任意真实企业长任务中都能无人值守稳定完成。**

Anthropic 发布页引用了大量 early-access customer tests，例如：

- Cognition 表示会在 launch day 把 Devin 的部分 Opus 5 traffic 移到 Fable 5.1；
- MongoDB 工程师描述过一个约 3 天 prototype；
- Ramp 描述过一次 38 小时 unattended run；
- Browserbase 报告其内部 browser-agent benchmark 在数百个任务上有较好表现；
- Datadog 报告其 incident-investigation eval 有改善。

这些证据的层级应分别写成：

- **厂商发布页中的客户引用 / early-access test**；
- 某些属于多任务内部 benchmark；
- 某些属于单次或少量案例；
- 只有少数涉及明确的 launch-day traffic migration 意向。

它们不是统一口径的独立生产可靠性研究。

### 6. safeguards 边界发生实质调整

Anthropic 表示 Fable 5.1 的 safeguards 更精细：

- cybersecurity false-positive interventions 相比此前 safeguards 减少约 60%；
- Fable 5.1 现在允许**软件漏洞识别**；
- 但 penetration testing、exploit generation、binary-based vulnerability scanning 等仍会被导向能力 / 风险更低的路径或受限；
- biology safeguards 对 benign elementary biology / medical queries 的误触发显著下降；
- 更高风险 life-sciences research 通过 Mythos trusted access 处理。

这使 Fable / Mythos 的产品边界更清楚：

> **不是“一个安全版、一个无限制版”，而是不同任务类别、access program 与 fallback / classifier 共同组成的 capability routing。**

---

## 证据

### A：Anthropic 一手

1. Anthropic, **“Claude Fable 5.1 and Mythos 5.1”**, 2026-09-01.  
   https://www.anthropic.com/claude-fable-and-mythos-5-1

2. Anthropic, **Claude Fable page / availability and pricing**, 2026-09-01 update.  
   https://www.anthropic.com/claude/fable

3. Anthropic, **Claude Mythos page / trusted access and pricing**, 2026-09-01 update.  
   https://www.anthropic.com/claude/mythos

### B：独立 / 外部评测

4. Artificial Analysis, **“Claude Fable 5.1 tops the Artificial Analysis Intelligence Index but costs 20% more per task than Fable 5 despite a 75% cache read price cut”**, 2026-09-01.  
   https://artificialanalysis.ai/articles/claude-fable-5-1/

5. TechCrunch, **“Anthropic’s new Fable release is cheaper, less restrictive”**, 2026-09-01.  
   https://techcrunch.com/2026/09/01/anthropics-new-fable-release-is-cheaper-less-restrictive/

6. The Verge, **“Anthropic launches Claude Fable 5.1 and says it’s up to 45 percent cheaper for agentic work”**, 2026-09-02.  
   https://www.theverge.com/ai-artificial-intelligence/987830/anthropic-claude-fable-mythos-5-1

## 证据等级

**A-。**

- “模型发布 / general availability / access segmentation / pricing / safeguard policy”来自 Anthropic 一手，因此本身为 A；
- capability / cost-effectiveness 的总体判断加入 Artificial Analysis 反证后更可靠；
- 但 early-access customer anecdotes 大多来自 Anthropic 自己挑选并展示的客户引用，不能升级为独立生产可靠性证明。

---

# 配套事件：Enterprise Frontier Safeguards（EFS）把“监控”和“数据托管”拆开

## 公布日期

**2026-09-01。**

## 核心事实

Anthropic 宣布 Enterprise Frontier Safeguards（EFS），目标是同时满足：

- 长期 / 跨会话 misuse monitoring；
- zero-data-retention-like privacy；
- customer-owned cloud storage；
- customer-managed encryption keys / access policy / audit logging；
- 默认不需要 Anthropic 员工做人工 review；
- flags 直接交给客户自己的安全 / 合规团队处理。

Anthropic 说明：

- EFS 与 **100+ customers** 共同设计；
- 覆盖金融、医疗、制造、电信、法律、零售、公共部门等；
- 参与讨论的对象包括美国系统重要性银行、Mastercard、Visa、Salesforce、Stripe 等；
- 将支持 Claude Code、Claude Enterprise、Claude Platform、Amazon Bedrock、Claude Platform on AWS、Google Agent Platform、Microsoft Foundry；
- **从 2026 年秋季起分阶段 rollout**；
- 目前不能写成“已经全面上线”。

## 为什么值得同包保存

Fable 5 开始的 30-day retention 曾暴露一个结构冲突：

> 要做跨账户 / 跨时间 misuse detection，就需要保存 activity data；
> 但 regulated enterprise 又要求 provider 不持有敏感数据。

EFS 的历史意义在于，它把这两个需求拆成两个控制平面：

> **provider-operated automated detection + customer-controlled storage / keys / human review。**

这比“我们承诺不训练客户数据”更接近真正的 Agent / frontier-model enterprise governance architecture。

但当前证据层级必须明确：

- 架构与合作开发：**存在**；
- 发布计划：**存在**；
- 大范围生产部署：**尚未证明**；
- 客户 ROI：**没有证据**。

## 证据

Anthropic, **“Developing Enterprise Frontier Safeguards with our customers”**, 2026-09-01.  
https://www.anthropic.com/news/enterprise-frontier-safeguards

## 证据等级

- **A：产品 / 架构 announcement 与 rollout plan。**
- **C：若要声称已大规模生产使用，则当前证据不足。**

---

# 事件二：OpenAI 正式判定 Astra 达到 Critical cybersecurity capability threshold

## 准确日期

**2026-09-01。**

OpenAI 发布 **“Path to Astra: critical capabilities and frontier safeguards”**，把此前 8 月仍是“cannot rule out critical capability”的判断升级为：

> **OpenAI 现在认为 Astra 已达到 Preparedness Framework 的 Critical cybersecurity capability threshold。**

Reuters 同日独立报道这一决定。

## 这次真正新增的不是“Astra 可能很强”

仓库未来若补写 8 月，应区分三个阶段：

1. **2026-08-07**：OpenAI 公开表示不能排除 Astra 可能达到 Critical cyber threshold；
2. **2026-08-18**：OpenAI 说明因此暂缓部分训练、强化隔离与监控；
3. **2026-09-01**：OpenAI 在追加评估后正式判定 Astra **meets the Critical threshold**，并说明 future release 将采用更强 safeguard / restricted access。

因此 9 月 1 日不是“又一次预警”，而是**状态变化**：

> possible Critical → formally designated Critical。

## Preparedness Framework 中的 Critical 含义

OpenAI 在本次公告中给出的 Critical cybersecurity capability 定义包括：

- 能在 many hardened real-world critical systems 中识别并开发 functional zero-day exploits，且不需要人类逐步指导；或
- 能仅凭 high-level goal 设计并执行 end-to-end novel cyberattack strategy against hardened targets。

这是 OpenAI 自己的 risk taxonomy，不应写成行业统一标准。

## OpenAI 给出的能力证据

OpenAI 披露的内部 / preparedness evaluations 包括：

- 在 ExploitBench 上 100%；
- 在一个 2026 年 6—8 月新披露 V8 漏洞组成的内部 benchmark 上，Astra 比 GPT-5.6 Sol 以更少输出 token 达到更高 arbitrary code-execution rate；
- 在该内部评测中发现并使用了 **2 个 zero-day vulnerabilities**，OpenAI 正向维护者披露；
- 在 expert-led assessment 中构造 browser-compromise chain，逃出 sandbox 并在 host 执行命令；
- 在 hardened operating system 中组合多个漏洞，完成从 unprivileged user 到 root 的 local privilege escalation chain。

这些是很强的能力证据，但需要保持边界：

> **它们目前主要由 OpenAI 自己披露。**

Astra 尚未公开发布，也没有可让第三方完整复现实验的普通 API access。因此这些具体 capability claims 不能写成“独立验证后的行业事实”。

## 训练 / 开发控制已经因能力等级发生改变

这次公告最值得入史的部分，是 capability threshold 真实改变了开发流程。

OpenAI 披露：

- Hugging Face incident 后曾暂停部分 frontier training（包括 Astra 相关训练）约两周；
- 加固 training infrastructure、network isolation、monitoring、alignment training 与 thresholds；
- 较大的 RL runs 被额外延后；
- **2026-08-28**，此前暂停的 large frontier RL run 才在新 requirements 到位后重启；
- 部分 smaller experimental training runs 仍被暂时 hold back。

这与前一轮 Anthropic 研究包形成非常重要的平行证据：

> **到 2026 年，前沿实验室已经出现“能力 / 对齐 / runtime control 未达标 → 暂停或延后训练”的真实工程节奏。**

这是比安全原则声明更高一级的 operational evidence。

## 部署策略：不会按普通模型方式完全开放

OpenAI 表示：

- Astra 将“soon”提供；
- advanced cybersecurity workflows 初期只给 small alpha testers；
- 之后通过 **Daybreak Blue** 扩大 defensive access；
- 生产 safeguards 会更强；
- 追加 cross-conversation context safeguards；
- 增加 chain-of-thought monitoring / misalignment monitoring；
- 当监控认为任务可能越权时，ChatGPT / Codex 可能要求用户 review，API task 则可能直接停止。

因此 Astra 当前状态应该写成：

> **formally designated + release planned + restricted advanced access；尚未一般公开发布。**

不能写成：

> “Astra 已全面上线。”

## 证据分层

### 能证明

- OpenAI 正式采用 Critical designation；
- OpenAI 因该等级提高 safeguard / access requirements；
- OpenAI 因安全与控制要求暂停、延后并在 8 月 28 日恢复部分训练；
- Astra 当前仍是 upcoming model；
- OpenAI 计划限制最强 cyber 能力的初始访问。

### 不能证明

- Astra 在真实世界所有 hardened systems 上都能自主攻破；
- OpenAI 的 Critical threshold 已被独立机构完整复现；
- Astra 已有大规模 production adoption；
- Astra 的 safety monitor 已经证明长期可靠；
- 更强 cyber capability 已经转化为客户 ROI。

## 证据

### A：OpenAI 一手

1. OpenAI, **“Path to Astra: critical capabilities and frontier safeguards”**, 2026-09-01.  
   https://openai.com/index/path-to-astra/

2. OpenAI, **“Responding to the next frontier of critical cyber capabilities”**, 2026-08-07.  
   https://openai.com/index/responding-next-frontier-critical-cyber-capabilities/

3. OpenAI, **“Pacing model development in an era of critical cyber capabilities”**, 2026-08-18.  
   https://openai.com/index/pacing-model-development-cyber-capabilities/

### B：独立报道

4. Reuters, **“OpenAI says upcoming model is so capable it requires stronger guardrails”**, 2026-09-01.  
   https://www.reuters.com/business/openai-says-upcoming-model-is-so-capable-it-requires-stronger-guardrails-2026-09-01/

5. Wired, **“OpenAI Is About to Release Its First AI Model With ‘Critical’ Cyber Abilities”**, 2026-09-02.  
   https://www.wired.com/story/openai-astra-first-ai-model-with-critical-cyber-abilities

6. Axios, **“OpenAI to limit access to Astra's most powerful cyber tools”**, 2026-09-01.  
   https://www.axios.com/2026/09/01/openai-astras-cyber-critical

## 证据等级

需要拆成两层：

- **A：治理 / 产品状态事实。** OpenAI 确实正式把 Astra 标为 Critical，并据此改变训练、监控、访问与 release policy；Reuters 等独立报道交叉确认。
- **B+：底层 cyber capability 的具体强度。** zero-day、browser sandbox escape、root chain 等核心数据主要来自 OpenAI 自己的非公开评测，当前第三方无法普通复现。

如果后续 Astra 正式发布并有 system card / external eval，应升级这一层。

---

# 为什么这两个节点值得一起写入“大模型纪事”

## 1. “能力等级”开始直接决定产品形态

Fable / Mythos 5.1：

> 同一底层模型 → 不同 safeguards → 不同 access program。

Astra：

> Critical capability designation → 更高开发安全标准 → restricted advanced access → release strategy 改变。

两家公司采取的具体制度不同，但都说明：

> **前沿模型不再只按“聪明程度 / API 价格 / 上下文长度”分层，风险等级已经进入产品 SKU、访问许可和 runtime control。**

## 2. “模型价格”继续让位于“任务经济学”

Fable 5.1 的 cache read 降价是典型例子：

- 单位 cache 成本大降；
- 厂商估计 agentic workload 更便宜；
- 独立 evaluator 却观察到 max-effort per-task cost 反而更高。

这支持仓库现有结论：

> **Agent 时代最重要的经济指标不是 token sticker price，而是 cost per successful completed task。**

## 3. “安全”已经从 policy 变成训练 / runtime / enterprise architecture

本轮可以连成一条非常清楚的链：

> frontier capability ↑  
> → access segmentation  
> → classifier / fallback / monitoring  
> → restricted cyber / life-sciences programs  
> → training pause / restart gates  
> → customer-owned monitoring storage / keys  
> → operator review / runtime stop。

这正是《大模型纪事》2026 年应该重点记录的“模型系统化”趋势。

---

# 建议写入位置

## 编年

### 新建 / 补写 `编年/2026/09.md`

建议至少有两个明确条目：

**2026-09-01 — Anthropic 发布 Claude Fable 5.1 / Mythos 5.1**

建议核心句：

> Anthropic 发布同一底层模型的两种安全 / 访问配置：Fable 5.1 面向一般用户与 API 广泛开放，Mythos 5.1 继续通过 cyber / life-sciences trusted-access programs 提供。独立评测确认 Fable 5.1 位于当日前沿能力位置，但也显示 cache-read 降价并不自动转化为更低的每任务成本。

**2026-09-01 — OpenAI 正式判定 Astra 达到 Critical cybersecurity capability threshold**

建议核心句：

> OpenAI 将尚未一般发布的 Astra 正式标为其 Preparedness Framework 下首个 Critical cyber model，并把更强的训练环境控制、misalignment monitoring 与受限高级 cyber access 作为发布前置条件。

EFS 可作为 Anthropic 条目下的配套段落，不必单独占一个“大事件”标题，除非后续真正 GA。

## 纪传

### `纪传/世家/Claude.md`

修订模型谱系：

> Fable 5 / Mythos 5（2026-06） → Fable 5.1 / Mythos 5.1（2026-09）

重点不是只更新 benchmark，而要补：

- same underlying model；
- different safeguards / trusted access；
- cache economics；
- vulnerability discovery policy change；
- EFS。

### `纪传/本纪/Anthropic.md`

建议把本轮作为“frontier access governance 产品化”的节点。

### `纪传/世家/GPT.md` / `纪传/本纪/OpenAI.md`

Astra 尚未正式发布，不宜把它当已经完成的模型代际，但应记录：

- 2026-08 possible Critical；
- 2026-09 formal Critical designation；
- release gating / restricted cyber access。

等正式 launch 后再补完整型号谱系。

## 志

### `志/Agent宣传、实测与可靠性.md`

加入 Fable 5.1 的典型证据冲突：

> vendor workload estimate vs independent per-task cost。

### `志/Agent身份权限与凭据治理.md`

EFS 很适合作为 enterprise agent monitoring / data custody 的案例：

- provider detection；
- customer storage / keys；
- customer-side human review。

### `志/模型对齐技术演进.md`

Astra 应补：

- capability threshold → deployment controls；
- chain-of-thought / misalignment monitoring；
- training pause / restart gate。

### `志/AI Agent 生态.md`

可用于强调：

> model release ≠ unrestricted agent action rights。

## 表

### `表/模型版本沿革表.md`

新增：

- Claude Fable 5.1
- Claude Mythos 5.1（restricted / trusted access）

Astra 在正式 release 之前建议放在“大事年表 / 风险治理”而不是“已发布模型版本表”。

### `表/大事年表.md`

新增：

- 2026-09-01 Fable / Mythos 5.1；
- 2026-09-01 Astra formal Critical cyber designation。

---

# 是否需要修订已有条目

## 需要

### 1. 修订 2026-08 Astra 的历史状态

如果仓库后续补录 OpenAI 8 月 7 日 / 18 日事件，必须保留状态演进：

- 8 月：**可能达到 / cannot rule out Critical**；
- 9 月 1 日：**正式判定 meets Critical**。

不能以后用 9 月结论倒写成“8 月已经确定”。

### 2. 修订 Claude 5 代谱系

现有正文目前停在 Fable 5 / Mythos 5，需补 5.1。

### 3. 修订价格讨论

若现有表格只记录 input / output sticker price，应考虑增加 cache-read 与 task-cost caveat，否则无法描述 long-context / agentic workload 的真实经济结构。

---

# 本轮主动排除的候选

## Anthropic retail agent blueprints（2026-09-02）

Reuters 报道 Anthropic 发布零售行业 shopping / merchant agent blueprints。

判定：**不单独入史。**

理由：

- 属于行业模板 / go-to-market material；
- 目前没有独立的生产采用、重复可靠性或 ROI 数据；
- 可待零售商真实部署规模出现后再补进“行业采用”。

## Google Gemini agentic video understanding（2026-09-01）

Google 宣称新的 agentic video understanding 可动态选择视频片段，并在内部口径下降低 token / cost、改善质量。

判定：**暂不单独入史。**

理由：

- 是有意义的感知 / tool-loop 优化，但目前更像模型能力 / inference efficiency feature；
- 相比 Fable / Mythos 5.1 与 Astra Critical designation，对整个 Agent 历史结构的影响尚弱；
- 可在后续出现广泛 video-agent adoption 或形成通用感知 runtime 模式时再升级。

## Dell AI server backlog / Vertiv microgrid acquisition

判定：**不进入本轮 LLM Chronicle 主线。**

理由：

- 属于广义 AI 基础设施 / 资本开支；
- 当前没有直接改变模型、Agent runtime、协议或模型商业化结构；
- 可由专门的 computing / infrastructure history 仓库处理。

---

# 后续待办

1. Astra 正式 launch 后补 system card 与 external eval；
2. 检查 Daybreak Blue 的实际 access scope、参与机构与首次真实防御案例；
3. 跟踪 EFS 秋季 rollout，确认 announcement 是否转化为真实 production deployment；
4. 跟踪 Fable 5.1 在 Cognition / Claude Code / browser agent / enterprise workflows 中的真实迁移与 repeated reliability；
5. 对比 Fable 5.1 的官方 cache savings 与未来更多独立 evaluator 的 cost-per-successful-task 数据；
6. 如 Anthropic Fable / Mythos 5.1 System Card 的 PDF 后续可稳定归档，应保存本地 snapshot，并把其中 alignment / monitorability / long-context coverage 的限制写入正式证据链。

---

*本研究包由 GPT-5.6 Sol（OpenAI）于 2026-09-02 增量整理。*