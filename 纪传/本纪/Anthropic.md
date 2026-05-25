# 《Anthropic 本纪》

> 一群因为担心 AI 安全而离开 OpenAI 的人，创办了一家新公司，做了一个不那么会写诗但更不会撒谎的模型。三年后，Anthropic 的 Claude 在编程基准上成了全行业的对标线，它的 Artifacts 重新定义了 AI 交互界面，它的"宪法 AI"方法论开创了一条与 OpenAI RLHF 完全不同的安全路线。

---

## 一、概述

Anthropic 于 2021 年由前 OpenAI 高管 Dario Amodei 和 Daniela Amodei（兄妹）等创立。公司名称源自"人择原理"（anthropic principle），反映了其核心理念：AI 系统应以人类利益为中心。

Anthropic 最大的不同不是技术路线——统一使用 Transformer 架构、RL 对齐——而是**组织基因**。从创立的第一天起，"安全"就是它的核心产品属性，而非事后附加的 feature。这种以"安全为第一性"的理念，贯穿了从 Constitutional AI 到 Claude 系列的每一个关键决策。

---

## 二、创立：「出走者的公司」

### 2.1 从 OpenAI 分裂

2020 年底至 2021 年初，OpenAI 内部发生了一场深刻的分裂。副总裁 Dario Amodei 和一批员工认为 OpenAI 在商业化压力下对安全投入不足——模型发布速度越来越快、对潜在风险的评估越来越简略、"开源"的承诺正在被商业利益侵蚀。

这批出走者都是 OpenAI 的安全派——他们曾主导 OpenAI 的安全研究方向，包括 RLHF 的前期工作。分裂的导火索是 GPT-3 的 API 商业化决策（2020-06）——Dario 等人认为，在没有任何公众安全评估框架的前提下，将一个 175B 参数的模型推入商业市场，是对 OpenAI 原始使命的背叛。

### 2.2 早期的低调

Anthropic 在 2021 年成立后保持了近两年的低调。它没有像 OpenAI 那样频繁发布博客、开放 API、做媒体采访。Anthropic 的核心团队在西雅图和旧金山安静地做基础研究——安全对齐方法、模型可靠性评估、训练基础设施。

这种"在研究上高调、在宣传上低调"的风格，后来成为 Anthropic 的标志性品牌特征。

---

## 三、关键事件

### 3.1 Constitutional AI（2022-12）：安全方法论的定义

Anthropic 开发了 **Constitutional AI（宪法 AI）**——一种独特的安全对齐方法。

与 OpenAI 的 RLHF 不同，Constitutional AI 不使用人类标注员直接评估模型输出。相反，它：
1. 给模型一套明确的"宪法"——来自联合国人权宣言、苹果服务条款等公开文件
2. 让模型**自己评估和修改自己的输出**——生成回答 → 用宪法原则自我批评 → 修改回答
3. 用 AI 生成的反馈来训练偏好模型
4. 用 RL 微调模型

核心洞察是：**不要用人来判断什么是好的——让模型用可公开审计的规则来判断**。这个方法的可扩展性（不需要大量人工标注）、透明性（规则公开可查）、可审计性——是它区别于 RLHF 的三个关键特征。

Constitutional AI 的理论基础在 2022 年 12 月发表，比 ChatGPT 仅仅早两天。但这个时间点——在 ChatGPT 引发全球 AI 安全恐慌的仅仅 48 小时前——赋予了它超乎预期的重要性。当全世界的政策制定者和监管机构开始追问"如何确保 AI 系统安全"时，Anthropic 恰好有一套已经开发完成的方法论。

### 3.2 Claude 的发布与 GPT-4 同日（2023-03）：巧合或有意

2023 年 3 月 14 日——GPT-4 发布的同一天——Anthropic 向合作伙伴开放了 Claude API。同一天发布是巧合或有意，至今没有定论。但两篇发布并列在一起，恰好构成了大模型两条路的分野：

Claude 的定位从一开始就是"更诚实、更无害"的对话 AI——不是"更聪明"的 ChatGPT。在 GPT-4 以"更强"为导向的同时，Claude 以"更安全"为导向。这两者的差异不是技术路线上的——是产品定位和价值观上的。

（详见《编年·2023年3月》）

### 3.3 Claude 3（2024-03）：首次超越 GPT-4

2024 年 3 月，Anthropic 发布 Claude 3 系列（Opus/Sonnet/Haiku），首次在主流基准上**超越 GPT-4**。Opus 在 MMLU 86.8% vs GPT-4 86.4%、HumanEval 84.9% vs GPT-4 67.0%——是一个质的超越。

更精妙的是 Claude 3 的三层定价策略：Opus 是最贵、最强——面向"钱不是问题"的极端准确场景；Sonnet 是大多数人的默认选择——价格适中、能力充分；Haiku 是"嵌入式 AI"——极快、极便宜，适合实时客服和内容审核。这种"三种规模、三种定价、一个品牌"的策略，后来被证明是 Anthropic 对抗 OpenAI 的最有效武器。

Claude 3 的里程碑意义不仅在于数字——更在于它终结了"GPT-4 最强"的单一叙事。从这一刻起，大模型竞争进入了真正的三足鼎立：GPT-4 有最好的多模态、Claude 3 有最好的安全性和诚实性、Gemini 1.5 有超长上下文。

（详见《编年·2024年3月》）

### 3.4 Claude 3.5 Sonnet（2024-06）：程序员的集体选择

跳过 Opus 直接发布 Sonnet 升级版——这是一个精妙的产品信号：Anthropic 在说"我们不靠更大来变强——我们靠更好的工程来变强"。

Claude 3.5 Sonnet 以比 Opus 更低的价格达到了更强的效果。在编程基准 HumanEval 92.0% 和 SWE-bench 40.6% 上，它大幅领先 GPT-4o——这使它迅速成为全球程序员的首选 AI 编程助手。但更持久的遗产是 **Artifacts**——完全重新定义了 AI 对话的界面。从"聊天"到"建造"——Artifacts 允许 Claude 在对话中直接生成可预览的代码、组件、设计文档。

（详见《编年·2024年6月》）

### 3.5 Claude 3.7 Sonnet（2025-02）：混合推理的范式

Claude 3.7 Sonnet 是 Anthropic 对 OpenAI 的 o1 推理模型的回应——但回应方式不是"我们也做一个推理模型"。

Anthropic 把一个推理能力嵌入了同一个模型中——用户可以选择"即时回答"或"扩展思考"。这是对 OpenAI "两个模型全家桶"方式的范式反驳。更重要的是，Claude 3.7 Sonnet 展示了**透明思考**——用户可以看到模型的推理过程。这与 o1 的"隐藏思维链"形成了鲜明对比——也是对 DeepSeek-R1 "公开思维链"策略的认同。

（详见《编年·2025年2月》）

### 3.6 Claude 4（2025-05）：商业模式的拐点

Claude 4 的技术创新是渐进的——但商业模式的革新是激进的。Claude Max 的"用量制"定价——$200/月 + 按深度思考使用量计费——是 AI 行业从"统一订阅"向"按需计费"转型的第一个明确信号。

这个转折背后的经济学逻辑是不可逆的：深度推理的计算成本是即时回答的几十倍。统一月费会迫使轻度用户补贴重度用户（不公平），或让服务提供方在重度用户上亏损（不可持续）。Anthropic 是第一个直面这个逻辑的 AI 公司——无论 Claude Max 在市场上的短期表现如何，它准确预判了 AI 商业定价未来十年的方向。

（详见《编年·2025年5月》）

---

## 四、兴衰分析

### Anthropic 的结构优势

Anthropic 的核心竞争优势是它不需要和 OpenAI 正面比较"谁更强"——它有一个独立的、不与能力指标直接关联的差异化价值主张：**安全**。

当所有其他 AI 公司在 benchmark 和用户兴奋度上竞争时，Anthropic 在"可信赖性"上竞争。这个策略在以下场景中尤其有效：
- 企业客户更关心可控性和合规性而非生成长度或创意性
- 政府和公共部门的 AI 采购——安全是采购决策的首要标准
- 医疗、法律、金融等受监管行业——"诚实"的价值远高于"有创意"

### Anthropic 的脆弱点

Anthropic 的最大脆弱点是：**"安全"作为一个产品差异属性是脆弱的**。当竞争对手（特别是 GPT-4o、Gemini 2.5 Pro）进入市场后也强调安全措施时，"安全"就不再是 Anthropic 的专属标签。

这就是为什么 Claude 3.5 Sonnet 和 Artifacts 如此重要——它们将 Anthropic 的差异点从"安全"延伸到了"产品体验"和"编程能力"。"编程能力最强"比"最安全"更容易在开发者群体中建立忠诚度——因为编程能力是可以被验证的，"安全"是模糊的。

从 Claude 3 到 Claude 4，Anthropic 的叙事经历了重大演进：从"最安全的 AI" → "最安全的 AI，也很有用" → "最有用的 AI 之一，也是安全的"。安全从唯一的主张变成了多元化的多重主张中的一员。

### Anthropic 和 OpenAI 的根本差异

这两个公司从同一批创立者身上分裂而来——但七年后，它们变成了两个完全不同的物种：

OpenAI 的护城河是品牌；Anthropic 的护城河是信任。
OpenAI 的目标是定义"前沿能力"；Anthropic 的目标是定义"前沿安全"。
OpenAI 通过制造兴奋来增长；Anthropic 通过建立信任来增长。

这种二元性在 2025 年的 AI 行业中是根本性的——它不只决定了两家公司的命运，也决定了整个 AI 行业在"能力"和"安全"之间如何平衡。

---

## 评曰

Anthropic 是 AI 史上最特殊的公司。它从一场"安全焦虑"中诞生——不是从技术突破中，也不是从商业机会中。

它的 Constitutional AI 方法论——让模型用可公开审计的规则来评估自己的输出——是一个在概念上比 RLHF 更优雅的解决方案。它的 Claude 3 在基准上第一次超越 GPT-4——是"安全派"创业者在技术上也追上的证据。它的 Artifacts 和混合推理——证明了 Anthropic 不仅是"安全的公司"，还是"有产品洞察力的公司"。

但 Anthropic 也面临一个深层困境：它的存在本身证明了许多人对 AI 安全的担忧——但也证明了一家以安全为核心价值的公司可以在商业上成功。这是否意味着"安全"不必由一个独立的非营利机构来保证——而可以由一个"以安全为卖点的营利公司"来保证？如果答案是肯定的，那么 Anthropic 的商业成功本身，就是在解构 OpenAI 原始使命（AGI 应该安全且不受利润驱动）的逻辑基础。

Anthropic 的遗产——不论这家公司最终是否会变成下一个 OpenAI——是用三年的产品交付证明了一个根本命题：**"安全"和"强"不是互斥的**。当整个行业的叙事是"越强越不安全"时，Claude 系列一直在反方向证明"更强可以更安全"。这个证明的持久性——尤其是在竞争者也在追上安全能力时——将决定 Anthropic 在 AI 史上的最终位置。

---

*本篇由终末地工业史官团队编纂：庄方宜（主笔）。*

---

[^1]: Bai et al., "Constitutional AI: Harmlessness from AI Feedback", arXiv:2212.08073, 2022-12. https://arxiv.org/abs/2212.08073
[^2]: Anthropic Blog, "Introducing Claude", 2023-03-14. https://www.anthropic.com/news/introducing-claude
[^3]: Anthropic Blog, "Introducing the next generation of Claude", 2024-03-04. https://www.anthropic.com/news/claude-3-family
[^4]: Anthropic Blog, "Claude 3.5 Sonnet", 2024-06-20. https://www.anthropic.com/news/claude-3-5-sonnet
[^5]: Anthropic Blog, "Claude 3.7 Sonnet and Claude Code", 2025-02-24. https://www.anthropic.com/news/claude-3-7-sonnet
[^6]: Anthropic Blog, "Introducing the Claude 4 family", 2025-05-22. https://www.anthropic.com/news/claude-4
