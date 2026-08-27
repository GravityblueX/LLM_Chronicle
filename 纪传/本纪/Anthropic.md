# 《Anthropic 本纪》

> Anthropic 最初以“安全公司”的形象进入大模型史，但到 2026 年，它已经不能再用“更安全的 Claude”一句话概括。Claude Code、Computer Use、长程 Agent、Fable / Mythos、runtime classifiers、trusted access、文本水印，乃至 Model Hardware Standard，把 Anthropic 推到了一个更复杂的位置：**它试图把前沿能力的风险边界做成产品架构本身。**

---

## 一、概述

Anthropic 成立于 2021 年，由 Dario Amodei、Daniela Amodei 等前 OpenAI 成员创办。早期公司的辨识度来自安全研究：RLHF、Constitutional AI、可解释性与前沿风险评估。Claude 则把这些研究转化为实际产品。

如果只看到这里，会把 Anthropic 写成“安全优先的 OpenAI 分支”。但 2024—2026 年的事实已经超出这个框架：

- Claude 3.5 Sonnet 让 Anthropic 成为软件工程市场的重要模型供应商；
- Computer Use 与 Claude Code 把 Claude 从回答问题推进到操作环境；
- Claude 4.x、Sonnet 5 把 effort、compaction、memory、checkpoint、subagents 等 Agent 机制推入产品；
- Fable 5 / Mythos 5 则第一次公开把**同一模型的能力等级与风险控制、访问资格结合起来**；
- 2026 年 8 月，文本水印与 Model Hardware Standard 又把治理扩展到输出来源和物理设备控制。

因此 Anthropic 的公司史，已经从“安全与能力是否冲突”变成另一个问题：

> **当模型越来越能行动时，怎样把能力、权限、风险与访问制度组成一个可运行的系统？**

---

## 二、创立：从 OpenAI 分出另一种治理实验

Anthropic 的创办团队来自 OpenAI，Dario Amodei 曾负责研究工作。两家公司后来经常被写成“商业派 OpenAI”与“安全派 Anthropic”的镜像，但这种二分不能解释全部历史。

更准确的说法是：Anthropic 从一开始就把**前沿模型开发与安全研究放在同一个组织内**。这意味着安全不是外部审查机构，也不是发布后的过滤器，而要与模型训练、评估、产品和部署一起发展。

这一点后来体现在两个长期项目中：

1. **Constitutional AI**：尝试把行为原则写成可检查的文本规则，并用 AI feedback 扩展监督；[^1]
2. **Responsible Scaling Policy / 前沿评估体系**：让模型能力达到不同危险阈值时，对应不同的部署和防护要求。

早期 Claude 的“Helpful, Honest, Harmless”标签只是这套制度的消费级表面。到 2026 年，真正重要的部分已经转移到运行时权限和能力分层。

---

## 三、Claude：从对话助手到工程 Agent

### 3.1 Claude 1—3：安全品牌获得能力基础

**2023-03**，Anthropic 发布 Claude。[^2]

**2024-03**，Claude 3 Opus / Sonnet / Haiku 发布。三档模型证明了一件对后续很重要的事：一个模型家族可以不只按“大小”分层，也可以按速度、成本和任务价值分层。[^3]

**2024-06**，Claude 3.5 Sonnet 发布，并推出 Artifacts。[^4] 这代模型在软件开发中的采用，让 Anthropic 的公司定位发生第一次明显变化：它不再只靠“安全”获得企业信任，也开始靠**可验证的工程工作能力**获得开发者。

### 3.2 Computer Use 与 Claude Code：行动权扩大

**2024-10-22**，Anthropic 发布 Computer Use，让 Claude 通过截图、鼠标与键盘操作图形界面。[^5]

**2025-02-24**，Claude 3.7 Sonnet 与 Claude Code 同时发布。[^6]

Claude Code 的历史意义比单个 benchmark 更大。软件工程提供了 Agent 所需的一整套外部反馈：

- 文件是否真的修改；
- shell 命令是否成功；
- 测试是否通过；
- git diff 是否符合预期；
- 错误能否回滚。

于是 Claude Code 成了 Anthropic 长程 Agent 的实验场。后来进入 Claude / Cowork / 企业 Agent 的 memory、compaction、checkpoint、subagents、effort 等机制，都可以在编码场景中找到成熟前史。

### 3.3 Claude 4.x 到 Sonnet 5：前沿能力向工作马下放

2025—2026 年 Claude 4 系列持续推进 Agent 工作能力。到 **2026-06-30**，Claude Sonnet 5 发布，Anthropic 将其定义为最 agentic 的 Sonnet，能够规划、使用浏览器与终端并进行更长时间的自主工作。Sonnet 5 的定价后来在 8 月永久保持为 **$2 / $10 per 1M input/output tokens**。[^7]

这里形成了 Anthropic 很稳定的产品节奏：

> 前沿能力先在昂贵层出现 → Agent 工程成熟 → 能力逐渐下放到更便宜的 Sonnet 层。

因此“最强模型”并不是唯一关键。**能力下放的速度**同样决定多少真实工作可以被自动化。

---

## 四、Fable / Mythos：模型身份开始由治理结构定义

2026 年是 Anthropic 公司史最值得单独记的一年。

### 4.1 Mythos Preview：前沿能力不再默认普遍开放

2026 年 4 月，Anthropic 通过 Project Glasswing 向特定安全研究伙伴提供 Mythos Preview。它被用于高能力网络安全研究，而不是普通公众产品。

这里第一次清楚出现了“**模型很强，但访问资格不是默认平等**”的产品形式。

### 4.2 Fable 5 与 Mythos 5：同一底模，两种治理身份

**2026-06-09**，Anthropic 发布 Claude Fable 5 与 Claude Mythos 5。Anthropic 明确说明：**Fable 5 与 Mythos 5 是同一个模型，区别在 safeguards。**[^8]

- Fable 5：保留 cyber / bio 等运行时防护，可向一般用户提供；
- Mythos 5：解除部分 safeguards，只通过 trusted-access 体系向验证机构和研究人员开放。

这件事改变了“模型版本”的定义。

过去说 GPT-4、Claude 3、Llama 3，模型身份主要由权重和训练版本决定。Fable / Mythos 则公开承认：

> **模型的身份，也可以由围绕权重的 classifier、访问权限和用途验证决定。**

### 4.3 出口管制危机：安全制度碰上国家制度

**2026-06-12**，美国政府要求暂停外国人访问 Fable 5 与 Mythos 5。Anthropic 因无法实时可靠验证所有用户国籍，暂时停止两款模型访问。[^9]

**2026-06-30 / 07-01**，限制解除，Fable 5 与 Mythos 5 恢复部署。[^10]

这次事件说明前沿 AI 的“权限系统”已经不只由公司设计：国家安全、出口管制、身份验证与云服务都可能进入模型的运行边界。

---

## 五、安全从训练方法变成运行时基础设施

### 5.1 Runtime classifiers 与 fallback

Fable 5 的部分高风险请求由独立 classifiers 判断；必要时请求会被阻断，或切换到能力更低的模型。[^8]

这和早期 Constitutional AI 有本质差异：

- Constitutional AI 主要改变模型训练后的行为倾向；
- runtime classifier 可以**不改底层权重，单独升级安全边界**。

**2026-08**，Anthropic 更新 Fable 5 biology safeguards，官方称内部测试中的相关误触发下降约 85%。[^11]

这说明安全层已经像普通软件一样可以独立版本化，而不是每次都重新训练整个模型。

### 5.2 Trusted access：能力不再只有“开放 / 不开放”两档

Mythos 5 的 trusted-access 计划要求验证组织和用途后再开放更高风险能力。[^8]

这不是传统 API key 的区别，而是在模型能力本身上设访问层级。到这里，Anthropic 实际上形成了：

**普通访问 → 更高能力订阅 → Fable safeguards → Mythos trusted access**

这样的能力梯度。

### 5.3 Provenance：输出本身成为治理对象

**2026-08-14**，Anthropic 宣布未来 Claude 文本加入统计式 watermark，以满足透明度与来源识别要求。官方强调其不插入隐藏字符，也不包含用户身份追踪信息。[^12]

治理由“模型能否回答”继续扩展到“输出如何被识别”。

### 5.4 从软件到物理设备

**2026-08-27**，Reuters 报道 Anthropic 发布 Model Hardware Standard（MHS）research preview，目标是给 AI Agent 一套标准接口，用于控制显微镜、机械臂等实验和物理设备。[^13]

截至本篇补订时，仓库尚未取得 Anthropic 官方 MHS 页面，因此该节点按**单一权威媒体来源**记录，不扩写具体技术细节。

它的重要性在于边界变化：当 Agent 从 shell、browser、desktop 进入实验设备，权限与安全就不再只关系到文件和账号，而开始涉及物理动作。

---

## 六、Anthropic 的公司路线究竟是什么

旧稿把 Anthropic 概括为“安全是护城河”。这在 2023 年有解释力，到 2026 年已经不够。

Anthropic 的真正路线更接近四层同时推进：

| 层 | 代表工作 | 解决的问题 |
|---|---|---|
| 模型能力 | Claude Opus / Sonnet / Fable | 能做多复杂的工作 |
| Agent runtime | Claude Code、Computer Use、memory、checkpoint、subagents | 能连续做多久、怎样恢复 |
| 安全控制面 | classifiers、fallback、sandbox、watermark | 怎样限制错误与滥用 |
| 访问制度 | Fable / Mythos、trusted access | 谁可以获得哪一级能力 |

因此 Anthropic 与 OpenAI 的区别，也不应写成“OpenAI 追求能力、Anthropic 追求安全”。两家公司都追求能力，也都做安全。

真正的差异之一在于：Anthropic 在 2026 年更明确地把**风险等级本身产品化**。

---

## 评曰

Anthropic 最初的问题是：

> **模型能不能在变强的同时更可控？**

Constitutional AI 给出的答案是：把原则放进训练。

Claude Code 给出的答案是：把行动放进沙箱、测试、diff、checkpoint 和权限体系。

Fable / Mythos 给出的答案则更激进：

> **当风险无法只靠训练解决时，就让同一个底层智能拥有不同的访问身份。**

这也意味着不能再说“安全和能力不是跷跷板”。Fable 的 false positives、Mythos 的受限访问、6 月的暂停都说明冲突是真实存在的。Anthropic 的路线不是证明冲突不存在，而是尝试**把冲突工程化、分层化和制度化**。

到了 2026 年，Claude 的“安全”已经不是一句品牌文案。它越来越像操作系统里的权限模型：模型、工具、classifier、身份、sandbox、watermark 和法律要求共同决定一次行动到底能不能发生。

如果 Anthropic 最终在 AI 史上留下一个最独特的制度遗产，也许不是 Constitutional AI 本身，而是它很早就把一个问题推到了产品层：

**前沿智能不只要回答“能做什么”，还要回答“由谁、在什么条件下、以什么权限做”。**

---

*本篇由终末地工业史官团队编纂：庄方宜（主笔）。*  
*2026-08 补订：GPT-5.6 Sol（OpenAI）。*

---

[^1]: Bai et al., “Constitutional AI: Harmlessness from AI Feedback”, arXiv:2212.08073. https://arxiv.org/abs/2212.08073
[^2]: Anthropic, “Introducing Claude”, 2023-03. https://www.anthropic.com/news/introducing-claude
[^3]: Anthropic, “Introducing the next generation of Claude”, 2024-03-04. https://www.anthropic.com/news/claude-3-family
[^4]: Anthropic, “Claude 3.5 Sonnet”, 2024-06-20. https://www.anthropic.com/news/claude-3-5-sonnet
[^5]: Anthropic, “Introducing computer use, a new Claude 3.5 Sonnet, and Claude 3.5 Haiku”, 2024-10-22. https://www.anthropic.com/news/3-5-models-and-computer-use
[^6]: Anthropic, “Claude 3.7 Sonnet and Claude Code”, 2025-02-24. https://www.anthropic.com/news/claude-3-7-sonnet
[^7]: Anthropic, “Introducing Claude Sonnet 5”, 2026-06-30, updated 2026-08-10. https://www.anthropic.com/news/claude-sonnet-5
[^8]: Anthropic, “Claude Fable 5 and Claude Mythos 5”, 2026-06-09. https://www.anthropic.com/news/claude-fable-5-mythos-5
[^9]: Anthropic, “Statement on the US government directive to suspend access to Fable 5 and Mythos 5”, 2026-06-12. https://www.anthropic.com/news/fable-mythos-access
[^10]: Anthropic, “Redeploying Claude Fable 5”, 2026-06-30 / update 2026-07-01. https://www.anthropic.com/news/redeploying-fable-5
[^11]: Anthropic, “Improving Fable 5's biology safeguards”, 2026-08. https://www.anthropic.com/news/improving-fable-5-s-biology-safeguards
[^12]: Anthropic, “How Claude’s text watermark works”, 2026-08-14. https://www.anthropic.com/news/claude-text-watermark
[^13]: Reuters, “Anthropic launches Model Hardware Standard research preview”, 2026-08-27. 单源节点；官方一手链接待 sources/ 补档。