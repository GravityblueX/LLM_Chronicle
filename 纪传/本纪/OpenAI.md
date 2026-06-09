# 《OpenAI 本纪》

> OpenAI 是 Transformer 时代最具影响力的 AI 公司。从 2015 年的非营利研究实验室，到 2025 年估值数千亿的行业巨头——它的每一次战略转向，都在重塑整个大模型行业的格局。

---

## 一、概述

OpenAI 于 2015 年 12 月在旧金山成立。创始团队包括 Elon Musk、Sam Altman、Greg Brockman、Ilya Sutskever 等，初始承诺是"以造福全人类的方式构建安全的通用人工智能（AGI）"——一家非营利机构，不受商业利润驱动。

十年后，OpenAI 已经完全变了一个样：从非营利到"封顶利润"（capped-profit），从开源到彻底闭源，从研究实验室到 API 驱动的千亿估值公司。它的演化轨迹是大模型商业化的一个完整样本——每一步都有争议，每一步都有合理之处，每一步都在重新定义"AI 公司"的含义。

---

## 二、创立与早年

### 2.1 非营利的承诺

2015 年底，AI 领域发生了一件不大不小的事：一群硅谷最有权势的人宣布成立一家非营利 AI 研究实验室。Elon Musk、Sam Altman、Ilya Sutskever（当时 Google Brain 的研究员）、Greg Brockman（前 Stripe CTO）等 10 人联合发起，初始承诺筹集 10 亿美元用于 AI 安全研究。[^1]

成立的直接驱动是 Musk 和 Altman 对 Google 收购 DeepMind 之后的担忧——"Google 将拥有 AGI，没有人能制衡"。OpenAI 的使命声明直言不讳："Our goal is to advance digital intelligence in the way that is most likely to benefit humanity as a whole, unconstrained by a need to generate financial return."——不受财务回报需求的约束。

早期团队小而精。Ilya Sutskever 担任研究总监，Greg Brockman 担任 CTO。2016-2017 年间，OpenAI 的主要产出集中在强化学习（OpenAI Gym、Universe）和机器人领域。在 NLP 领域，当时还没有人知道"Transformer 架构 + 大量数据 + 大量算力"能够通往哪里。

### 2.2 Musk 的退出

2018 年 2 月，Elon Musk 辞去 OpenAI 董事会职务。OpenAI 官方声明表示这是为了避免"潜在的未来冲突"——Musk 的特斯拉正在开发自己的 AI 芯片和自动驾驶技术。[^2]

但 Musk 后来在 Twitter 上给出了另一个版本：他提议由自己接管 OpenAI 并注入更多资金，但被 Altman 和 Brockman 拒绝。Musk 此后多次在公开场合批评 OpenAI 背离了"安全"和"开放"的初衷——"一家应该像 Linux 一样开放的公司，变成了像 Microsoft 一样封闭的公司。"

Musk 的退出是一个转折点。它标志着 OpenAI 从"Musk + Altman 的双头领导"变为 Sam Altman 主导的局面。也是从这一年起，OpenAI 开始向商业路线大步迈进。

---

## 三、关键事件

### 3.1 GPT-1 与 GPT-2（2018-2019）：技术卡位的起步

**2018-06** — GPT-1（117M 参数）发布。"生成式预训练 + 任务微调"的范式确立。社区反应平淡——四个月后 BERT（340M）以 11 项 SOTA 抢走了所有注意力。[^3]

**2019-02** — GPT-2（1.5B 参数）发布，因"太危险"而分阶段放权。这是 OpenAI 第一次使用"安全叙事"来控制发布节奏——此后成为 OpenAI 的标准发布策略。"分阶段发布"引发的争议反而为 OpenAI 带来了巨量关注。[^4]

**2019-03** — OpenAI 宣布转型为 **"封顶利润"（capped-profit）** 公司——OpenAI LP。这是一次精心设计的法律创新：投资人回报上限为 100 倍，超额部分归非营利实体所有。Sam Altman 放弃股权以维持"非营利精神"的正当性。[^5]

### 3.2 微软的入场与 GPT-3（2019-2020）：从研究到平台

**2019-07-22** — 微软宣布向 OpenAI 投资 10 亿美元，双方建立"独家计算合作伙伴关系"。微软 Azure 成为 OpenAI 的独家云提供商。[^6]

这笔投资在 AI 史上是一个标志性事件：一家以"防止 AI 被巨头垄断"为使命的非营利机构，与全球最大的科技巨头之一结成了独家联盟。批评者称这是"Mission Capture"（使命被收买）的典型。但微软的算力是 OpenAI 能把 GPT-3 训练出来的必要条件。

**2020-06** — GPT-3（175B）发布。不是开源，而是 API-only。这篇 72 页的论文展示了 zero-shot/few-shot 能力的规模涌现——是一个时代的定义性作品。但"不开放权重"的决定让 OpenAI 的"Open"成为一个被反复质疑的字。[^7]

### 3.3 ChatGPT 与 GPT-4（2022-2023）：从平台到产品

**2022-11-30** — ChatGPT 发布。五天百万用户，两月破亿。LLM 从研究领域进入大众生活。ChatGPT 背后的技术（GPT-3.5 + InstructGPT 的 RLHF）在此之前已经存在，但"放进一个聊天框"这个产品决定创造了一个全新的品类。[^8]

**2023-01-23** — 微软宣布对 OpenAI 进行"多年、数十亿美元"的新增投资。具体金额未公开，外界估计约 100 亿美元。[^9]

**2023-03-14** — GPT-4 发布。多模态，专业考试超越 90% 考生。但技术报告完全不公开参数规模、训练数据量、模型架构——开启了大模型"黑箱发布"的时代。

### 3.4 Sam Altman 的罢免与复职（2023-11）：一场 104 小时的董事会政变

**2023-11-17** — OpenAI 董事会突然宣布解除 Sam Altman 的 CEO 职务，理由是"他在与董事会的沟通中不够一贯坦诚"。Greg Brockman 随即辞去董事会主席职务。[^10]

这是大模型史上最戏剧化的事件之一。"政变"的具体原因至今未完全公开——外界猜测涉及安全派（Ilya Sutskever 等）与商业派（Altman 等）之间的根本分歧：模型发布的速度应该多快？商业化应该走多远？安全的优先级在哪？

随后发生了连续的戏剧性转折：
- 11 月 18 日——OpenAI 的 770 名员工中有超过 700 人签署公开信，要求董事会辞职并恢复 Altman 职务，否则集体跳槽微软
- 11 月 20 日——微软 CEO Satya Nadella 宣布 Altman 和 Brockman 将加入微软领导新的 AI 研究团队
- 11 月 21 日——OpenAI 董事会宣布与 Altman 达成协议：Altman 复职 CEO，董事会重组。Ilya Sutskever 退出董事会，Brockman 回归

104 小时的政变以 Altman 的全面胜利告终。新董事会包括 Bret Taylor（前 Salesforce CEO）、Larry Summers（前美国财政部长）、Adam D'Angelo（Quora CEO）——传统的硅谷权力结构取代了原来的理想主义色彩。

### 3.5 GPT-4o、o1 与后政变时代（2024-2025）

**2024-05-13** — GPT-4o 发布，原生多模态，免费向所有用户开放。标志着 OpenAI 从"付费壁垒"策略转向"规模优先"。

**2024-09-12** — o1 发布，首个推理模型。测试时计算（test-time compute）成为新的 scaling 维度。

**2024-12-26** — DeepSeek-V3 发布，MIT 开源，训练成本仅 ~$5.6M。在多项基准上接近 GPT-4o。

**2025-01-20** — DeepSeek-R1 发布，英伟达一天蒸发 5890 亿美元。OpenAI 首次面临"被开源全面追赶"的事实。

**2025-02-27** — GPT-4.5 发布，Sam Altman 称为"最后一个非思维链模型"。

**2026** — GPT-5 多次推迟，截至编纂时（2026-05）尚未正式发布。OpenAI 面临来自 Claude、Gemini、DeepSeek、Qwen 的多线压力。

---

## 四、兴衰分析

### 阶段一：非营利乌托邦（2015-2018）

**发生了什么**：一群有理想的技术精英创办了一家不受商业驱动的 AI 研究实验室。
**为什么发生**：DeepMind 被 Google 收购引发的恐慌；硅谷对 AGI 风险的早期关注；Musk 和 Altman 的个人影响力和融资能力。
**留下了什么**：OpenAI Gym、Universe 等强化学习开源工具；GPT-1 的预训练范式。但最重要的是"非营利"的品牌叙事——这个叙事在后来每一次商业化争议中都被用来辩护。

### 阶段二：商业化转型（2019-2020）

**发生了什么**：OpenAI 从非营利转为"封顶利润"公司，接受微软 10 亿美元投资，发布 GPT-3 并采用 API-only 模式。
**为什么发生**：训练大模型需要巨额算力——非营利的资金结构无法支撑。Google、DeepMind、Meta 等竞争对手的商业化基础设施远超 OpenAI。
**留下了什么**：GPT-3 的能力展示（zeroshot/fewshot）；"API 即模型"的商业模式；"封顶利润"的法律创新——后来被 Anthropic（公益公司 PBC）、xAI 等采纳为模板。

### 阶段三：产品爆发（2022-2023）

**发生了什么**：ChatGPT 成为史上增长最快的消费产品；GPT-4 定义了全球 AI 前沿；微软百亿加注；Sam Altman 被罢免又复职。
**为什么发生**：RLHF 对齐让 GPT 从"技术 demo"变成"可用的产品"。把 LLM 放进聊天框的产品决定，比任何算法创新都改变了行业。
**留下了什么**：AI 聊天作为一个独立的产品品类被确立；OpenAI 的品牌价值从"研究实验室"转变为"全球最火的科技产品公司"；但"Open"的商标与"闭源"的现实之间的张力达到了空前。

### 阶段四：多线竞争与身份危机（2024-至今）

**发生了什么**：o1 推理模型开辟新品类但未守住独占；GPT-5 多次推迟；开源阵营（DeepSeek、Qwen、Llama）在能力上大步追赶；GPT-4.5 被评价为"增量太小"。
**为什么发生**：OpenAI 的"先发优势"正在被多个方面侵蚀——推理模型被 DeepSeek-R1 的 MIT 开源反超；超长上下文被 Google Gemini 1.5 Pro 压制；编程能力被 Claude 3.5 Sonnet 追上；成本优势被 DeepSeek-V3 的 1% 定价碾压。
**留下的悬念**：GPT-5 能否重新拉大差距？OpenAI 是否还能像 2020-2023 年那样定义一个时代的"前沿"？还是说"多极化"才是 AI 的最终稳态？

---

## 评曰

OpenAI 的十年，是一个"非营利如何在商业压力下变形"的完整样本。

从外部看，它的转型似乎是一次次的妥协——从开源到闭源，从非营利到封顶利润，从安全优先到产品优先，从"Open"到不 Open。每走一步都有人喊"你们背弃了初心"。

但从内部看，每一步都有清晰的商业逻辑。Chinchilla scaling law 说训练好东西需要大量算力——非营利结构筹不到那么多钱，所以需要微软。GPT-2 说"太危险"引发公愤——但每次分阶段发布都把媒体注意力放大数倍，所以继续用。API-only 模式被诟病违背"Open"的承诺——但这是唯一可持续的商业模式，所以坚持。

OpenAI 真正的创新不是任何一个模型。它是**安全叙事的商业化应用**——"因为危险，所以需要控制；因为控制，所以闭源；因为闭源，所以收费。"这个逻辑闭环为 OpenAI 的商业化提供了道德正当性——它的批评者称之为"安全 washing"，它的支持者称之为"负责任的发展"。无论怎么评价，这是一套被证明极度有效的叙事策略。

DeepSeek-R1 的 MIT 开源给这个叙事投下了最大的阴影。当推理模型的思维链被公开、权重被自由下载、价格只有 3%——"安全需要闭源"这个前提受到了事实性的挑战。OpenAI 在 2025-2026 年面临的核心问题不是技术上的——是叙事上的：如果开源也能安全，那闭源的正当性在哪里？

---

*本篇由终末地工业史官团队编纂：庄方宜（主笔）。*

---

[^1]: OpenAI Blog, "Introducing OpenAI", 2015-12-11. https://openai.com/blog/introducing-openai
[^2]: OpenAI Blog, "OpenAI Supporters", 2018-02-20. https://openai.com/blog/openai-supporters
[^3]: Radford et al., "Improving Language Understanding by Generative Pre-Training", OpenAI, 2018-06-11. https://openai.com/research/language-unsupervised
[^4]: OpenAI Blog, "Better Language Models and Their Implications", 2019-02-14. https://openai.com/research/better-language-models
[^5]: OpenAI Blog, "OpenAI LP", 2019-03-11. https://openai.com/blog/openai-lp
[^6]: OpenAI Blog, "Microsoft invests in and partners with OpenAI", 2019-07-22. https://openai.com/blog/microsoft-invests-in-and-partners-with-openai
[^7]: Brown et al., "Language Models are Few-Shot Learners", arXiv:2005.14165, 2020-05-28. https://arxiv.org/abs/2005.14165
[^8]: OpenAI Blog, "Introducing ChatGPT", 2022-11-30. https://openai.com/blog/chatgpt
[^9]: The Verge, "Microsoft extends OpenAI partnership with multi-billion dollar investment", 2023-01-23. https://www.theverge.com/2023/1/23/23567448/microsoft-openai-investment-chatgpt
[^10]: OpenAI Blog, "OpenAI announces leadership transition", 2023-11-17. https://openai.com/blog/openai-announces-leadership-transition
