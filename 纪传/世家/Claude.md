# 《Claude 世家》

> Claude 是 Anthropic 自 2023 年起发展的模型家族。它最初以 Constitutional AI 和长上下文建立“更安全、更可控”的差异化；Claude 3 证明安全公司同样可以做到前沿能力；3.5 Sonnet、Claude Code 和 computer use 又把 Claude 推成编程与 Agent 的重要基座。到 2026 年，Claude 的谱系发生了更深的变化：Haiku / Sonnet / Opus 之外出现 **Mythos-class**，同一底层前沿模型还可以因为 safeguards 和 trusted access 不同而分别叫 Fable 与 Mythos。安全不再只是训练时的一套理念，而开始直接参与模型命名、访问资格、价格和部署方式。

---

## 一、概述：从“安全的模型”到“按风险分发能力”

Anthropic 成立于 2021 年，由一批曾在 OpenAI 工作的研究者创办。Claude 系列早期最有辨识度的技术路线是 **Constitutional AI**：让模型根据一组原则进行自我批评和修订，并以 AI 反馈参与强化学习，减少对大规模有害内容人工标注的依赖。[^1][^2]

但如果把 Claude 的历史只写成“安全优先”，会错过它之后最重要的变化。

Claude 的谱系大致经历了五个阶段：

1. **对齐与长上下文**（Claude 1 / 2）：先证明模型可以更可控、能处理更长材料；
2. **能力追平前沿**（Claude 3）：Haiku / Sonnet / Opus 三层体系成形；
3. **编程与 Agent 产品化**（Claude 3.5 / 3.7 / 4）：Artifacts、computer use、Claude Code、extended thinking；
4. **长程执行与多 Agent**（Claude 4.5—4.8）：effort、context management、1M context、subagents / dynamic workflows；
5. **能力等级与风险等级合流**（Mythos Preview、Fable 5 / Mythos 5、Sonnet 5、Opus 5）：模型家族不再只按“强弱与价格”分档，而开始按**危险能力、safeguards 和访问制度**分档。

这第五步，是 2026 年 Claude 世家真正的新阶段。

---

## 二、代际演进

| 代际 | 时间 | 主要定位 | 关键变化 |
|------|------|----------|----------|
| Claude 1 / Instant | 2023-03 | 对话 / 低成本 | Constitutional AI 产品化 |
| Claude 2 / 2.1 | 2023-07—11 | 长文档 | 100K → 200K context、system prompts |
| Claude 3 Haiku / Sonnet / Opus | 2024-03 | 三层产品谱系 | 视觉、前沿能力、三档成本 |
| Claude 3.5 Sonnet | 2024-06 | 编程 / 创作 | Artifacts、代码能力飞跃 |
| Claude 3.5 Sonnet New | 2024-10 | computer use | 模型第一次直接操作计算机 |
| Claude 3.7 Sonnet | 2025-02 | hybrid reasoning | extended thinking + Claude Code |
| Claude Opus 4 / Sonnet 4 | 2025-05 | 长程 Agent | extended thinking with tool use |
| Opus 4.1 | 2025-08 | 高难编码 / Agent | 多文件重构、agentic search |
| Sonnet 4.5 / Haiku 4.5 | 2025-09—10 | Agent 主力 / 并行执行 | Agent SDK、memory、checkpoints、低成本 subagents |
| Opus 4.5 | 2025-11 | 长程工作 / 多 Agent | effort、compaction、subagent orchestration |
| Opus 4.6 / Sonnet 4.6 | 2026-02 | 1M context Agent | 更长任务、大代码库、computer use |
| Mythos Preview | 2026-04 | 受控前沿能力 | Project Glasswing、极强 cybersecurity |
| Opus 4.7 / 4.8 | 2026-04—05 | 高端日常 Agent | 更强视觉、验证、dynamic workflows |
| Fable 5 / Mythos 5 | 2026-06 | Mythos-class | 同底层模型，不同 safeguards / access |
| Sonnet 5 | 2026-06 | 高频 Agent | 接近 Opus 4.8、更低价格 |
| Opus 5 | 2026-07 | 日常最高端 | 接近 Fable 5，成本约一半 |

---

## 三、Claude 1 / 2：先解决“怎么让模型更可控”

### 3.1 Constitutional AI

**2022-12** — Anthropic 发表《Constitutional AI: Harmlessness from AI Feedback》。论文描述的核心流程是：先让模型依据一组原则批评和修订自己的回答，再用 AI 反馈形成偏好数据并训练模型。[^2]

这套方法后来常被概括为 RLAIF，但更重要的是它改变了对齐问题的组织方式：安全要求可以被写成明确原则，并进入训练流程，而不只是产品上线以后叠一层关键词过滤器。

**2023-03** — Claude 正式面向合作伙伴与公众推出，早期包括 Claude 与 Claude Instant。[^3]

早期 Claude 在 raw capability 上并未超越 GPT-4，它真正的市场差异是对话风格、较低的有害输出倾向，以及 Anthropic 对安全方法本身的公开解释。

### 3.2 Claude 2：100K / 200K 把长文档变成产品能力

**2023-07-11** — Claude 2 发布，上下文扩展到 **100K tokens**，claude.ai 也开始更广泛开放。[^4]

**2023-11** — Claude 2.1 将上下文扩大到 **200K tokens**，并强化 system prompts 与工具集成。[^5]

Claude 2.x 因此与后来的 Kimi、Gemini 1.5 一起证明了一件事：上下文窗口不只是技术参数，它直接决定模型能不能处理一本书、一套合同、一个大型代码库或一组企业资料。

---

## 四、Claude 3：安全公司第一次站到能力前沿

**2024-03-04** — Claude 3 家族发布：**Haiku / Sonnet / Opus**。[^6]

这个命名体系后来成为 Anthropic 最稳定的产品结构：

- **Haiku**：速度和成本；
- **Sonnet**：能力 / 成本平衡；
- **Opus**：最高日常能力。

Claude 3 同时加入视觉输入。更关键的是，Opus 在多项当时主流评测中达到或超过 GPT-4 水平，使 Anthropic 不再只是“安全但弱一点”的替代者。

这一代还有一个容易被忽略的变化：Anthropic 明确强调减少**不必要的拒绝**。安全对齐开始从“拒绝更多”转向“更准确地区分危险与正常请求”。

这为 2026 年 Fable safeguards 的精细化埋下了非常长的伏笔。

---

## 五、Claude 3.5 / 3.7：编程、Artifacts 与 computer use

### 5.1 Sonnet 3.5：中档模型成为真正主角

**2024-06-20** — Claude 3.5 Sonnet 发布。它用 Sonnet 的价格和速度提供了超过上一代 Opus 的多项能力，并同步推出 **Artifacts**。[^7]

Artifacts 很重要，因为 Claude 的输出第一次稳定地脱离纯聊天消息：代码、网页、文档、图表和可交互内容可以成为独立工作对象。

这让 Claude 的产品路线从“和模型聊天”向“和模型一起做东西”移动。

### 5.2 2024-10：computer use

**2024-10-22** — 更新版 Claude 3.5 Sonnet 公测 **computer use**：模型通过截图理解界面，再移动鼠标、点击和输入。[^8]

当时能力仍不稳定，但这个方向后来成为所有前沿 Agent 的标准组件。模型开始获得一种新的权限：不只调用结构化 API，而是直接操作人类软件界面。

### 5.3 Claude 3.7 Sonnet：快答与慢想合流

**2025-02-24** — Claude 3.7 Sonnet 发布，被 Anthropic 定义为 hybrid reasoning model：同一模型既能直接响应，也能投入更多 **extended thinking**。[^9]

同日，**Claude Code** 以研究预览形式推出。

这一组合的历史意义很清楚：推理不再是为了给一道数学题多想几十秒，而开始服务于真实执行——读代码、改文件、跑命令、看测试结果，再继续思考。

---

## 六、Claude 4：模型开始持续工作数小时

**2025-05-22** — Claude Opus 4 与 Sonnet 4 发布。二者支持 extended thinking 中使用工具，并明显面向编码 Agent 和长时间任务。[^10]

Anthropic 当时展示了 Opus 4 在复杂代码任务中连续工作的案例，Claude Code 也由研究项目转向更成熟的开发工具。

Claude 4 的真正变化不在 benchmark，而在**时间尺度**：AI 不再只需要一次回答正确，而要在几十分钟、数小时的工具循环中保持目标、上下文和修改的一致性。

---

## 七、4.1—4.8：长程执行被拆成一整套工程能力

### 7.1 Opus 4.1：多文件与 agentic search

**2025-08-05** — Opus 4.1 上线，重点改进 agentic tasks、现实代码工作和推理，特别是多文件重构、深入研究与 agentic search。[^11]

它仍然是“Opus 的小版本”，却代表 Anthropic 开始以很短周期优化**任务完成质量**，而不是等待完整代际升级。

### 7.2 Sonnet 4.5：Agent SDK、memory 与 rollback

**2025-09-29** — Claude Sonnet 4.5 发布。Anthropic 同时推出 / 加强：

- Claude Code **checkpoints** 与回滚；
- VS Code 原生扩展；
- API 的 **context editing 与 memory**；
- **Claude Agent SDK**；
- 更强的 computer use 与 prompt-injection 防御。[^12]

这里出现了一个重要转向：Agent 的能力不再只来自“模型更聪明”，还来自**记忆、权限、回滚、上下文管理和 harness**。

Claude 世家的能力单位因此从模型版本开始扩展成“模型 + Agent runtime”。

### 7.3 Haiku 4.5：便宜模型成为并行劳动力

**2025-10-15** — Haiku 4.5 发布，Anthropic 把它定位为接近前沿编码能力、但速度更快、价格更低的模型，定价 **$1 / $5** 每百万输入 / 输出 tokens。[^13]

官方甚至直接给出多 Agent 用法：让 Sonnet 负责规划和协调，让多个 Haiku 并行完成子任务。[^13]

这意味着 Haiku 不再只是“便宜聊天模型”，而成为**可横向扩展的 subagent 层**。

### 7.4 Opus 4.5：effort 与 subagent orchestration

**2025-11-24** — Opus 4.5 发布，价格降到 **$5 / $25**。与此同时，Anthropic 提供 effort parameter、context compaction 和更强的 tool use，并明确展示模型管理多个 subagents 的能力。[^14]

从这一刻起，Anthropic 的 scaling 已经至少有三条轴：

- 模型等级：Haiku → Sonnet → Opus；
- 单 Agent 推理预算：effort；
- 并行执行量：subagents。

### 7.5 Opus / Sonnet 4.6：1M context 进入 Agent

**2026-02-05** — Opus 4.6 发布，在 Opus 级首次提供 **1M token context beta**，强化大代码库、研究、金融分析和长程 Agent。[^15]

**2026-02-17** — Sonnet 4.6 发布，同样获得 1M context beta，并加强 coding、computer use、agent planning 和知识工作；它成为 Free / Pro 用户默认模型。[^16]

长上下文至此不再只是“多塞文档”，而是在给长时间运行的 Agent 保存更大的工作现场。

### 7.6 Opus 4.7 / 4.8：验证、视觉和 dynamic workflows

**2026-04-16** — Opus 4.7 发布，增强高难软件工程、长程任务、指令遵循和高分辨率视觉。Anthropic特别强调它更会自行验证结果。[^17]

**2026-05-28** — Opus 4.8 发布，同价继续提升 coding、agents 和 professional work；Claude Code 同时出现 **dynamic workflows** 研究预览，可针对大规模任务协调大量并行 subagents。[^18]

一个模型“能运行更久”逐渐被拆成多个工程问题：

> 怎么记住？怎么压缩上下文？怎么自己验证？怎么并行？怎么把失败回滚？怎么减少人工看守？

这也是 Claude Code 为什么在 Claude 世家里越来越重要：它是这些 Agent 技术最早大规模落地的试验场。

---

## 八、Mythos Preview：能力过强时，模型还能不能直接发布？

**2026-04-07** — Anthropic 与多家科技、云、安全和基础设施公司宣布 **Project Glasswing**，并披露 **Claude Mythos Preview**。[^19]

Mythos Preview 是一个通用前沿模型，但在 cybersecurity 上异常强。Anthropic 的红队研究认为，它在发现和利用软件漏洞方面已经达到需要特别部署策略的程度。[^20]

于是 Anthropic 没有像普通 Claude 一样把它直接放给所有用户，而是让 Glasswing 合作伙伴先用于防御关键软件。

这是 Claude 世家的一个分水岭：

**以前，模型家族按性能和价格分层；Mythos 开始按危险能力和访问资格分层。**

---

## 九、Fable 5 / Mythos 5：同一个模型，两套安全边界

### 9.1 Mythos-class 正式成为新能力等级

**2026-06-09** — Anthropic 发布 **Claude Fable 5** 与 **Claude Mythos 5**。官方明确说：Mythos-class 位于 Opus 之上。[^21]

最关键的是，**Fable 5 和 Mythos 5 是同一个底层模型**。

它们名字不同，不是因为参数规模不同，也不是因为一个更大，而是因为 safeguards 与 access policy 不同：

- **Fable 5**：面向一般用户，但对部分高风险 cyber / bio 请求设置实时 classifiers；触发时可以回退到较低风险模型；
- **Mythos 5**：同一底层能力，但在可信访问场景中解除部分 safeguards，先向 Project Glasswing 等安全合作伙伴开放，并规划 biology trusted access。[^21]

二者价格均为 **$10 / $50** 每百万输入 / 输出 tokens。[^21]

这在大模型谱系里非常罕见：**安全策略本身成为型号差异。**

模型家族不再只是：

> 小模型 / 中模型 / 大模型

而开始出现：

> 同样的能力，谁有资格以什么安全边界使用。

### 9.2 6 月 12 日暂停：治理第一次直接中断前沿模型生命周期

**2026-06-12** — 美国政府以国家安全权限对 Fable 5 / Mythos 5 发出出口管制指令，要求停止外国国民访问。Anthropic 表示由于无法实时验证所有用户国籍，只能暂时**对所有用户停用两款模型**。[^22]

这是模型史里非常重要的一种新事件：不是模型故障，不是安全事故，也不是公司主动下架，而是**国家治理直接决定一个模型是否能运行。**

**2026-06-30** — 管制被解除；**7 月 1 日**，Fable 5 全球恢复，Mythos 5 按受限结构恢复。[^23]

> 📖 详见《编年·2026年6月》《编年·2026年7月》。

### 9.3 Safeguards 也变成会快速迭代的软件层

Fable 5 发布时的 classifiers 有意设置得较保守，因此存在正常请求被 fallback 的问题。

**2026-08-07** — Anthropic 更新 Fable 5 的 biology safeguards，称内部测试中 biology 相关 fallback 下降约 **85%**。[^24]

这件事很值得和 Claude 3 当年的“减少不必要拒绝”对照。三年前的问题是模型本身太爱拒绝；三年后，问题变成**外部安全层如何在高风险能力上减少误杀**。

对齐已经从模型训练一路外溢成独立的运行时系统。

---

## 十、Sonnet 5 / Opus 5：前沿能力不断向下渗透

### 10.1 Sonnet 5：几个月前的 Opus 能力变成日常工作马

**2026-06-30** — Claude Sonnet 5 发布。Anthropic 将其描述为最 agentic 的 Sonnet，可自主规划、使用浏览器与终端，在若干任务上接近 Opus 4.8。[^25]

它最初以 **$2 / $10** 的促销价格推出；**2026-08-10**，Anthropic 将这一价格永久化。[^25]

Sonnet 5 的位置说明 Claude 家族里存在持续的**能力下放**：上一季度需要 Opus 的工作，很快会进入 Sonnet 的价格区间。

### 10.2 Opus 5：接近 Fable，但面向每天使用

**2026-07-24** — Claude Opus 5 发布，基础价格仍为 **$5 / $25**，与 Opus 4.8 相同。Anthropic 将其定位为接近 Fable 5 frontier intelligence、但成本约为 Fable 一半的日常高端模型。[^26]

Opus 5 继续强调 long-running agents、coding、knowledge work、computer use 与可调 effort。它还成为 Claude Max 默认模型，并是 Pro 上最强型号。[^26]

这让 2026 年 Claude 的产品层级比 2024 年复杂得多：

| 层级 | 主要意义 |
|------|----------|
| Haiku | 高吞吐 / subagents |
| Sonnet | 高频生产 Agent |
| Opus | 日常最高端复杂工作 |
| Fable | Mythos-class 能力 + 一般用户 safeguards |
| Mythos | Mythos-class + trusted access / 部分 safeguards 解除 |

**能力、价格、风险和身份验证第一次共同决定你拿到哪一个 Claude。**

---

## 十一、安全体系的演化：从“宪法”到“整套治理栈”

Claude 的安全路线如果只写 Constitutional AI，到了 2026 年已经远远不够。

它至少形成了五层：

### 11.1 训练层：Constitutional AI 与 alignment

原则、偏好训练和安全训练仍是基础。Sonnet 4.5 还公开展示了针对 sycophancy、deception、power-seeking、delusion encouragement 等行为的评估，并按 ASL-3 protections 部署。[^12]

### 11.2 Agent runtime：权限、memory、checkpoint、prompt-injection defense

当模型能操作电脑和长期运行以后，安全问题变成工程权限问题。Claude Code 的 checkpoint / rollback、Agent SDK 的权限设计、context management 和对 prompt injection 的防御，都属于这一层。[^12]

### 11.3 Runtime classifiers：能力不变，实时改变输出路径

Fable 5 的 cyber / bio safeguards 是独立 classifiers。高风险请求触发时，可以阻止或把请求切换给能力较低的模型。[^21]

这是“模型安全”从模型参数内部走向外部可更新系统的明确例子。

### 11.4 Trusted access：不是所有人拿到同一能力边界

Mythos 5 证明某些前沿能力可能采用**身份 / 组织 / 用途验证后开放**，而不是“全公开”与“全封闭”二选一。

### 11.5 Provenance：连输出文本也进入监管基础设施

**2026-08-14** — Anthropic 宣布未来 Claude 模型文本将加入统计式 watermark，以满足欧盟 AI Act 等透明度要求。该方法不添加隐藏字符、不额外消耗 token，也不包含可追踪到个人、组织或具体对话的身份信息。[^27]

监管要求因此进入 token 采样层本身。

这条路线很能说明 2026 年的大模型系统是什么：**模型、权限、classifier、身份验证、水印和法律义务已经构成同一产品。**

---

## 十二、闭源立场也比“Anthropic 反对开放权重”更复杂

Claude 一直是闭源模型家族，但不能把 Anthropic 的政策立场简单写成“反对 open weights”。

**2026-07-27**，Dario Amodei 明确写道 Anthropic “从未主张禁止开放权重模型”，并称不具危险能力的 open-weight models 是公共品；他的担忧集中于具有极高危险能力的前沿模型一旦不可逆扩散后难以重新加装 safeguards。[^28]

这与 Fable / Mythos 的设计正好对应：Anthropic 的核心主张不是“权重必须闭源”，而是**访问制度应随危险能力变化**。

赞同与否是政策讨论；但从史料上看，这比旧稿“Anthropic 因安全原因从不开放、立场从未动摇”的二分说法准确得多。

---

## 十三、Claude Code 为什么越来越像 Claude 世家的第二条主线

从 Sonnet 3.5 开始，Claude 的能力跃迁越来越频繁地首先在编码 Agent 中显现：

- 长上下文对应整个代码库；
- tool use 对应 shell / git / test runner；
- computer use 对应浏览器和 GUI；
- memory / compaction 对应长任务；
- checkpoints 对应可回滚；
- subagents / dynamic workflows 对应并行工程；
- effort 对应任务级推理预算。

软件工程恰好提供了 Agent 最需要的反馈机制：文件是否改了、测试是否通过、diff 是否合理、命令是否失败。

因此 Claude Code 不只是 Anthropic 的一个产品。它是 Claude 训练路线的**压力测试场**：模型要从“说得像会做”变成“真的连续做完”。

这也解释了为什么 Claude 后来的 professional work、Cowork、浏览器操作和企业 Agent 会大量复用最早在 coding 场景里成熟的机制。

---

## 评曰

Claude 世家最初回答的问题是：**AI 能不能在变强的同时更可控？**

Constitutional AI 给出了第一版答案：把原则写进训练。Claude 3 又证明，重视安全并不意味着能力永远只能当第二名。

但到了 2026 年，这个问题已经被模型能力本身推得更复杂。

当模型只能聊天时，“安全”主要是不要输出危险文本；当模型会写代码、操作电脑、运行几十小时、调用工具和协调 subagents 时，安全变成了权限、回滚、prompt injection、工具边界和持续监督；当 Mythos-class 出现以后，甚至连**谁可以拿到完整能力**都成为模型设计的一部分。

Fable 5 与 Mythos 5 是这一变化最清晰的历史标记：

> **同一个底层模型，因为 safeguards 与访问制度不同，成为两个型号。**

这意味着模型谱系第一次公开承认：模型的“身份”不仅由权重定义，也由围绕权重的治理结构定义。

而 Sonnet 5 与 Opus 5 又展示了另一面。前沿能力并不是永远被锁在最高风险层；它会随着成本下降、安全措施成熟和下一代模型出现，不断向日常层渗透。几个月前属于 Opus 的能力进入 Sonnet，接近 Fable 的能力进入 Opus。

因此 Claude 2026 年真正形成的是一条动态梯度：

**能力向前推进，安全层跟着重构；当风险可以被更精确控制，能力再向更广用户下放。**

这比“安全和能力不是跷跷板”更准确。二者有时确实冲突——Fable 的 false positive、Mythos 的受限访问、6 月出口管制都说明冲突是真实的。Anthropic 的路线不是消灭这种冲突，而是把冲突本身做成工程系统和访问制度。

Claude 世家的长期遗产，也许最终不是某一代模型最强，而是它最早把一个问题推到了产品层面：

**前沿智能不只是“能做什么”，还必须回答“在什么条件下、由谁、以什么权限做”。**

到了 Agent 时代，这个问题已经和模型能力本身一样重要。

---

*本篇由终末地工业史官团队编纂：赫默（编年主笔）。*  
*2026-08 补订：GPT-5.6 Sol（OpenAI）。*

---

[^1]: Anthropic, “Introducing Claude”, 2023. https://www.anthropic.com/index/introducing-claude
[^2]: Bai et al., “Constitutional AI: Harmlessness from AI Feedback”, arXiv:2212.08073, 2022-12. https://arxiv.org/abs/2212.08073
[^3]: Anthropic, “Introducing Claude”, 2023-03. https://www.anthropic.com/index/introducing-claude
[^4]: Anthropic, “Claude 2”, 2023-07-11. https://www.anthropic.com/news/claude-2
[^5]: Anthropic, “Introducing Claude 2.1”, 2023-11. https://www.anthropic.com/news/claude-2-1
[^6]: Anthropic, “Introducing the next generation of Claude”, 2024-03-04. https://www.anthropic.com/news/claude-3-family
[^7]: Anthropic, “Introducing Claude 3.5 Sonnet”, 2024-06-20. https://www.anthropic.com/news/claude-3-5-sonnet
[^8]: Anthropic, “Introducing computer use, a new Claude 3.5 Sonnet, and Claude 3.5 Haiku”, 2024-10-22. https://www.anthropic.com/news/3-5-models-and-computer-use
[^9]: Anthropic, “Claude 3.7 Sonnet and Claude Code”, 2025-02-24. https://www.anthropic.com/news/claude-3-7-sonnet
[^10]: Anthropic, “Introducing Claude 4”, 2025-05-22. https://www.anthropic.com/news/claude-4
[^11]: Anthropic, “Claude Opus 4.1”, 2025-08-05. https://www.anthropic.com/news/claude-opus-4-1
[^12]: Anthropic, “Introducing Claude Sonnet 4.5”, 2025-09-29. https://www.anthropic.com/news/claude-sonnet-4-5
[^13]: Anthropic, “Introducing Claude Haiku 4.5”, 2025-10-15. https://www.anthropic.com/news/claude-haiku-4-5
[^14]: Anthropic, “Introducing Claude Opus 4.5”, 2025-11-24. https://www.anthropic.com/news/claude-opus-4-5
[^15]: Anthropic, “Introducing Claude Opus 4.6”, 2026-02-05. https://www.anthropic.com/news/claude-opus-4-6
[^16]: Anthropic, “Introducing Claude Sonnet 4.6”, 2026-02-17. https://www.anthropic.com/news/claude-sonnet-4-6
[^17]: Anthropic, “Introducing Claude Opus 4.7”, 2026-04-16. https://www.anthropic.com/news/claude-opus-4-7
[^18]: Anthropic, “Introducing Claude Opus 4.8”, 2026-05-28. https://www.anthropic.com/news/claude-opus-4-8
[^19]: Anthropic, “Project Glasswing”, 2026-04-07. https://www.anthropic.com/glasswing
[^20]: Anthropic Frontier Red Team, “Assessing Claude Mythos Preview’s cybersecurity capabilities”, 2026-04-07. https://www.anthropic.com/research/mythos-preview
[^21]: Anthropic, “Claude Fable 5 and Claude Mythos 5”, 2026-06-09. https://www.anthropic.com/news/claude-fable-5-mythos-5
[^22]: Anthropic, “Statement on the US government directive to suspend access to Fable 5 and Mythos 5”, 2026-06-12. https://www.anthropic.com/news/fable-mythos-access
[^23]: Anthropic, “Redeploying Claude Fable 5”, 2026-06-30 / update 2026-07-01. https://www.anthropic.com/news/redeploying-fable-5
[^24]: Anthropic, “Improving Fable 5's biology safeguards”, 2026-08-07. https://www.anthropic.com/news/improving-fable-5-s-biology-safeguards
[^25]: Anthropic, “Introducing Claude Sonnet 5”, 2026-06-30; pricing made permanent 2026-08-10. https://www.anthropic.com/news/claude-sonnet-5
[^26]: Anthropic, “Introducing Claude Opus 5”, 2026-07-24. https://www.anthropic.com/news/claude-opus-5
[^27]: Anthropic, “How Claude’s text watermarking works”, 2026-08-14. https://www.anthropic.com/news/claude-text-watermark
[^28]: Dario Amodei / Anthropic, “Our position on open-weights models”, 2026-07-27. https://www.anthropic.com/news/position-open-weights-models