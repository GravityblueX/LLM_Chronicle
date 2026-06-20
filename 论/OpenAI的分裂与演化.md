# 论·OpenAI 的分裂与演化

> OpenAI 的十年史不是一部公司史——是一部制度实验史。它从"我们是非营利的，不受财务回报约束"开始，到"我们估值数千亿，正在寻求完全营利化"结束。这中间每一步——转型、融资、闭源、解雇 CEO、重新聘用 CEO——都在回答同一个问题：**一个以"造福全人类"为使命的组织，在前沿 AI 的算力饥渴面前，能维持多久不改变初衷？**

---

## 一、结构性矛盾：非营利理想 vs 算力现实

OpenAI 的一切分裂——人的分裂、路线的分裂、品牌的分裂——都可以追溯到一个结构性矛盾：**它的使命要求开放和安全，但前沿 AI 训练要求封闭和巨额投入。**

2015 年 12 月，OpenAI 的成立宣言写得清清楚楚：

> "Our goal is to advance digital intelligence in the way that is most likely to benefit humanity as a whole, unconstrained by a need to generate financial return." [^1]

"unconstrained by a need to generate financial return"——不受财务回报需求的约束。这句话在 2015 年听起来像是理想主义。到了 2020 年，它变成了一个不可能兑现的承诺。

原因很简单：训练大模型的成本以指数级增长。GPT-1（2018）的训练成本约为几万美元。GPT-2（2019）约为几十万美元。GPT-3（2020）的训练成本估计在 460 万至 1200 万美元之间。[^2] GPT-4（2023）的训练成本在 6300 万至 1 亿美元之间。[^3] 这些数字的增长速度远超非营利组织的筹款能力——也远超任何单一捐助者的耐心。

非营利结构的致命缺陷在这里暴露：它能筹到研究的钱，但筹不到**规模化**的钱。在深度学习的早期（2015-2018），几百万美元的捐款足以支持一流研究。到了 Transformer 时代，训练一个前沿模型需要的算力成本以亿计——这不是捐款能覆盖的，这是需要资本市场的。

这个矛盾不是 OpenAI 管理层的失败——它是**物理约束与制度设计之间的不兼容**。只要前沿 AI 训练需要消耗越来越大规模的算力，任何不接入资本市场的 AI 组织都将被甩在后面。

---

## 二、转型三部曲：从非营利到封顶利润到完全营利

### 2.1 第一步：封顶利润（2019-03）

2019 年 3 月，OpenAI 宣布转型为 **OpenAI LP**——一个"封顶利润"（capped-profit）公司。投资人的回报上限为 100 倍，超额部分归非营利实体所有。Sam Altman 放弃了个人股权以维持"非营利精神"的正当性。[^4]

这个法律创新的精巧之处在于：它在名义上保留了"非营利"的外壳——非营利实体仍然拥有公司的控制权——但在实质上打开了商业资本的入口。"100 倍回报上限"在硅谷是一个极高的上限——它足以吸引风险资本，同时维持"我们不是为了赚钱"的叙事。

**内在逻辑**：OpenAI 需要钱，但不能公开承认"需要钱"。封顶利润是一种折中——"我们不是为了赚钱，但如果恰好赚了，那就分给你们一些——但不能太多。"

### 2.2 第二步：微软入局（2019-07，2023-01）

2019 年 7 月，微软向 OpenAI 投资 10 亿美元，Azure 成为 OpenAI 的独家云提供商。[^5] 2023 年 1 月，微软追加"多年、数十亿美元"投资，外界估计约 100 亿美元。[^6]

微软投资的后果不仅是资金——更是**权力结构的重塑**。当你的算力完全依赖于一家科技巨头时，你的独立性就是一个幻觉。OpenAI 的使命声明说"不受财务回报约束"——但它实际上受制于微软的 Azure 路线图、微软的股权诉求、微软的 Copilot 产品战略。

**内在逻辑**：算力需求把 OpenAI 从"独立研究实验室"变成了"微软的准子公司"。这个转变不是一夜之间发生的——而是通过两次投资、一次独家云合作、一次百亿美元注资逐步完成的。每一步都有合理的商业逻辑，但每一步都在收紧微软的控制链。

### 2.3 第三步：完全营利化（2024-2025）

2024 年底至 2025 年，OpenAI 开始推进完全营利化——从"封顶利润"公司转为标准的营利性公司（PBC，公益公司）。[^7] 这意味着：

- 投资人回报不再有 100 倍上限
- 非营利实体将失去对公司的法律控制权
- 公司治理将从"使命驱动"转向"股东价值驱动"

这个转变的直接驱动力是估值压力。OpenAI 在 2024-2025 年的估值达到数千亿美元——这个规模的融资不可能在"封顶利润"的法律框架内完成。风险资本和主权基金要求标准的营利性公司结构——没有上限、没有非营利董事会的干预权。

**内在逻辑**：从非营利到封顶利润是"为了算力"。从封顶利润到完全营利是"为了资本"。两步转型的驱动力不同，但方向一致——每一次转型都是理想主义向现实的进一步退让。

---

## 三、2023 年 11 月：104 小时的制度危机

### 3.1 事件回顾

2023 年 11 月 17 日，OpenAI 董事会突然解除 Sam Altman 的 CEO 职务，理由是"他在与董事会的沟通中不够一贯坦诚"。[^8]

随后 104 小时内发生的一切，至今仍是大模型史上最戏剧化的事件：700+ 员工签署公开信要求恢复 Altman，否则集体跳槽微软；微软 CEO Satya Nadella 宣布接收 Altman 和 Brockman；最终 Altman 复职，董事会重组，Ilya Sutskever 退出董事会。

### 3.2 深层原因：安全派 vs 商业派的结构性冲突

Altman 罢免事件的表面原因是"沟通不坦诚"——但几乎所有知情者都指向同一个深层矛盾：**安全派与商业派之间的不可调和**。

这个矛盾不是 2023 年 11 月才出现的。Altman 自己在 2019 年的一封内部邮件中就把公司内部的分裂称为"部落"（tribes）——一边是追求商业化的营利部门，另一边是担忧 AI 能力的安全部门。[^15] 积怨在 2023 年下半年集中爆发：10 月，Altman 削弱了 Sutskever 在公司的角色，进一步激化矛盾。[^16] 紧接着，Altman 在被解职前正寻求中东主权财富基金的数十亿美元投资来开发 AI 芯片与 Nvidia 竞争，并与软银孙正义、前 Apple 设计师 Jony Ive 合作开发 AI 硬件——Sutskever 和盟友认为这些活动不正当地利用了 OpenAI 的名义。[^16]

2023 年 11 月 6 日的 DevDay 大会成了最后的引爆点：Altman 在会上发布自定义 ChatGPT 实例等一系列商业化举措，反对派将其视为 OpenAI 加速商业化的明确信号。[^17] 十一天后，董事会动手了。

安全派以 Ilya Sutskever 为代表。Sutskever 是 OpenAI 的联合创始人和首席科学家，他从一开始就把"安全"视为 OpenAI 存在的理由。在他看来，AGI 的安全问题不是事后附加的 feature——它是 OpenAI 的全部意义。如果一个 AGI 研究组织在安全问题上妥协，它和 Google、Facebook 有什么区别？Sutskever 在解职发生前应董事会要求，编写了一份 52 页的备忘录和一份约 70 页的带注释档案（包含内部通信、文件和照片），指控 Altman "表现出一贯的……撒谎模式"，并向公司高管和董事会——特别是在安全问题上——提供了不实信息。[^18] 这份档案直到 2026 年 4 月才被 *The New Yorker* 的调查报道曝光——Ronen Farrow 的 70 页长文让整个事件的细节重见天日。[^18]

另一位关键的董事会成员是 Helen Toner——乔治城大学 CSET 策略主任，有效利他主义运动的背景。2023 年 10 月，她发表了论文《Decoding Intentions: AI and Costly Signals》，其中批评 OpenAI 的安全努力同时赞扬了 Anthropic 的做法。Altman 打电话给 Toner 称论文"可能引起麻烦"，因为 FTC 正在调查 OpenAI 的数据收集。Toner 认为这恰恰证明了 Altman 在操纵董事会成员以谋取私利。[^19] 此外，2023 年 11 月有报道称，代号 Q* 的机密项目在逻辑和数学推理上取得突破，据报已达到小学数学水平——对 Altman 如何处理这一发现的安全影响的担忧，在解职前不久被提交给董事会。[^20]

商业派以 Altman 为代表。Altman 不是技术出身——他是 Y Combinator 前总裁，一个天生的企业家和融资专家。在他看来，OpenAI 的使命只有在足够强大的前提下才有意义——一个弱小但"安全"的 AI 实验室无法改变世界。要变得强大，就需要钱。要赚到钱，就需要产品化。要产品化，就需要速度。安全很重要——但不能成为不前进的理由。

2023 年 11 月 17 日中午，董事会经"审议审查程序"后立即解除 Altman 职务——Altman 在 Google Meet 上被通知时正在看拉斯维加斯大奖赛，距离解职仅 5-10 分钟。[^21] Sutskever 随后通过 Google Meet 通知董事会主席 Greg Brockman——后者随即辞去主席职务。但 Altman 的 700 名员工（约占总人数 95%）用脚投票——他们签署了联名信威胁集体辞职，选择了 Altman 而不是董事会。[^22]

微软甚至在幕后接触了 Anthropic 的 Dario Amodei，提议让其取代 Altman 并可能合并两家公司——Amodei 拒绝了两项提议。[^22] 最终和解：Altman 回归，Toner、McCauley、Sutskever 离开董事会，由 Lawrence Summers 和 Bret Taylor 接替。[^22]

Sutskever 在全体会议上说解雇 Altman 是"董事会在履行职责"——但一周后表达后悔。[^19] 这种"做了正确的事但无法承受后果"的摇摆，本身就是安全派困境的缩影：他们有制度性的权力（投票权），但没有组织性的力量（员工忠诚度）。

**制度教训**：在一家拥有 770 名员工、估值数百亿的公司里，4 个人的董事会可以在没有提前通知的情况下解雇 CEO——而 700 名员工可以用集体辞职来推翻董事会。这个事件暴露了一个核心问题：OpenAI 的治理结构是为一家小型非营利研究实验室设计的——不是为一家全球最大的 AI 产品公司设计的。当公司的实际规模和影响力远超其治理框架时，制度崩溃只是时间问题。

### 3.3 后果：安全团队的集体出走

Ilya Sutskever 在 Altman 复职后于 2024 年 5 月正式离开 OpenAI。一个月后，他宣布创办 **Safe Superintelligence Inc.（SSI）**——一家专注于超级智能安全的独立研究机构，与前 Apple AI 负责人 Daniel Gross 和前 OpenAI 研究员 Daniel Levy 联合创立。[^9]

SSI 的名字本身就是一种宣言：**超级智能的安全问题太重要了，不能放在一家已经商业化了的公司内部解决。** 资本市场的回应是惊人的：2024 年 9 月融资 10 亿美元（SV Angel、DST Global、Sequoia Capital、a16z），2025 年 3 月估值飙至 300 亿美元——六个月内翻了六倍。[^23] 2025 年 4 月与 Google Cloud 合作获取 TPU。2025 年上半年 Meta 试图收购 SSI，被 Sutskever 拒绝。2025 年 7 月，联合创始人 Daniel Gross 离开加入 Meta Superintelligence Labs，Sutskever 成为唯一 CEO——公司约 50 人。[^23]

Sutskever 在 OpenAI 十年的经历教会了他一件事——"内部改良"路线失败了。他在 OpenAI 内部推动了十年的安全研究，最终在一次董事会投票中被 700 名员工的集体意志推翻。这让他得出了一个结论：安全必须在一个**独立于商业压力**的组织中推进。

但出走的不只是 Sutskever。2024 年 5 月，OpenAI 超级对齐项目的联合负责人 **Jan Leike** 宣布辞职——他在 X 上写道：

> "Over the past years, safety culture and processes have taken a backseat to shiny products." [^24]

> "I gradually lost trust in OpenAI's leadership." [^24]

Leike 随后加入 Anthropic。据 *The Decoder* 报道，OpenAI 的 AI 安全团队在那几个月至少失去了七名研究员——包括 Sutskever、Leike、Daniel Kokotajlo 等人。[^24] 更早之前，OpenAI 联合创始人 **John Schulman** 也在 2024 年加入了 Anthropic。[^25]

Sutskever 是 AlexNet 的联合创造者、AlphaGo 的论文共同作者、OpenAI 的联合创始人、GPT 系列和 o1 推理模型的推动者——NeurIPS 时间检验奖三连（2022-2024），被称为"引用次数最多的计算机科学家之一"。他的轨迹是"安全 vs 商业"这条张力线的人格化。当这样一个人选择出走创办独立安全实验室，其信号意义远超其商业意义。

---

## 四、"Open"AI：从最开放到最封闭

OpenAI 的名称中有一个"Open"——这个字在十年间经历了最讽刺的语义变化。

| 时期 | "Open" 的含义 | 开放程度 |
|------|-------------|---------|
| 2015-2018 | 开放研究、开源工具 | 高（OpenAI Gym、Universe 开源） |
| 2018-2019 | GPT-2"分阶段发布" | 中（有保留地开放） |
| 2020 | GPT-3 API-only | 低（不开放权重） |
| 2023 | GPT-4 完全黑箱 | 极低（不公开参数、数据、架构） |
| 2024-至今 | 闭源 + 付费 | 极低（思维链隐藏，$200/月订阅） |

从"最开放的 AI 实验室"到"最封闭的前沿模型公司"——这个转变不是一夜之间发生的，而是通过一系列"有合理理由的决定"逐步完成的：

1. GPT-2 不公开是因为"太危险"——合理
2. GPT-3 API-only 是因为"需要商业模式支撑更大模型"——合理
3. GPT-4 不公开参数是因为"竞争考虑"——合理
4. o1 隐藏思维链是因为"安全考虑"——合理

每一步都有合理的理由。但连续几步下来，"Open"已经从一个使命变成了一个讽刺。OpenAI 的批评者——包括 Elon Musk——反复用这个讽刺攻击它："一家应该像 Linux 一样开放的公司，变成了像 Microsoft 一样封闭的公司。" [^10]

DeepSeek-R1 的 MIT 开源把这个讽刺推到了极致。当一个同级别的推理模型被完全免费、完全公开地交给全世界——包括思维链——OpenAI 的"安全需要闭源"叙事就受到了事实性的挑战。[^11] 问题不再是"OpenAI 是否应该开源"——而是"如果别人开源了同样强的模型而世界没有毁灭，OpenAI 闭源的正当性到底在哪里？"

---

## 五、分裂如何重塑整个行业

OpenAI 的内部矛盾不是只影响了 OpenAI 自己——它催生了一系列"出走者的公司"，每一家都代表着对 OpenAI 路线的一种反思。

### 5.1 第一次分裂：Anthropic（2021）

2020 年底至 2021 年初，OpenAI 副总裁 Dario Amodei 和一批安全研究者出走，创办 Anthropic。直接导火索是 GPT-3 的 API 商业化——Dario 等人认为在缺乏安全评估框架的情况下将 175B 参数模型推入市场，是对 OpenAI 使命的背叛。[^12]

Anthropic 代表了**安全优先的外部建制**路线。它不试图从内部改变 OpenAI——它创办了一家新公司，用 Constitutional AI（宪法 AI）重新定义了"安全"的含义：不是"人工审核每一条输出"，而是"用可审计的规则让模型自我约束"。[^13]

2023 年 11 月 OpenAI 内战期间，董事会甚至接触了 Amodei 本人，提议让其取代 Altman 并可能合并两家公司——Amodei 拒绝了两项提议。[^22] 这个细节极为关键：OpenAI 的董事会在最危急的时刻，选择向安全派出走者求助——这证明了他们自己也承认，安全派的判断在某种意义上是对的。但 Amodei 的拒绝也证明了一件事：出走者已经不相信"回到 OpenAI 内部改良"是可行的了。

Anthropic 的成立证明了一件事：AI 安全不是一个可以用"在现有公司内部多投入一些资源"来解决的问题——它需要**组织层面的制度保障**。一家在商业压力下必须不断发布更强模型的公司，天然地会把安全排在"更强"后面。

### 5.2 第二次分裂：SSI 与安全团队大出走（2024）

如果说 Anthropic 是 OpenAI 的第一次安全分裂——商业派赢了，安全派出走——那么 2024 年的安全团队集体出走就是第二次分裂，规模更大、信号更清晰。

2023 年 11 月的 Altman 罢免事件是催化剂：Sutskever 亲眼看到，即使在董事会层面拥有投票权，安全派仍然无法抵挡"700 名员工+微软+Altman"的联合力量。五天后他就后悔了——但裂痕已经无法弥合。2024 年 5 月，Sutskever 正式离开。同一月，Jan Leike 在公开声明中说出了那句后来被反复引用的话："safety culture and processes have taken a backseat to shiny products"——然后也离开了。John Schulman——OpenAI 联合创始人、RLHF 的核心推动者——同样在 2024 年去了 Anthropic。

Sutskever 创办的 SSI 代表了**超级智能安全的独立路线**。它的名字——Safe Superintelligence Inc.——直白到近乎挑衅：安全不是"一个功能"，安全是"整个公司的全部目的"。[^9] 而资本市场用 300 亿美元的估值回应了这个宣言——它证明了一件事：**纯粹以安全为使命的 AI 公司，可以获得比许多商业化 AI 公司更高的估值**。[^23]

### 5.3 第三次分裂的阴影

截至 2026 年中，OpenAI 正在推进完全营利化。这意味着非营利实体将失去法律控制权——最后一道制度上的安全屏障正在被拆除。如果这个过程完成，OpenAI 内部将不再有任何**结构性的**安全约束——有的只是管理层的善意承诺。

每次分裂都在重复同一个模式：安全派发现"内部改良"不够，选择出走，创办新公司。Anthropic（2021）是第一波，SSI（2024）是第二波。如果这个模式继续——如果 OpenAI 的完全营利化导致第三波安全派出走——那么 AI 安全运动将被彻底碎片化为多个独立的小组织，每个都在自己的方向上努力，但没有任何一个拥有足够大的影响力来制衡 OpenAI 的商业决策。

---

## 六、这是技术公司发展的必然吗？

OpenAI 的分裂模式——"理想主义创办 → 资本需求驱动转型 → 内部分裂 → 出走者建新组织"——不是 OpenAI 独有的。它几乎是所有"使命驱动型技术公司"的必经之路。

**Google/DeepMind**：DeepMind 创始人 Demis Hassabis 多次与 Google 管理层就 AI 安全和组织独立性发生冲突。2023 年，DeepMind 被合并进 Google DeepMind，失去了法律上的独立性。[^14]

**Tesla/Autopilot**：Musk 本人既是 OpenAI 的联合创始人，又是 Tesla AI 的推动者。他在 OpenAI 和 Tesla 之间的"冲突"——即 OpenAI 成立声明中提到的"潜在的未来冲突"——本身就是科技公司内在矛盾的一个缩影。[^2]

**为什么必然？** 因为前沿 AI 的两个特征——**算力饥渴**和**安全风险**——本质上是矛盾的。算力饥渴要求资本密集投入，资本要求回报，回报要求商业化，商业化要求速度。安全风险要求谨慎，谨慎要求放慢，放慢要求推迟发布。这两个特征不可能在同一家公司内部和平共处——它们之间的张力会不断积累，直到以分裂的形式释放。

这不是"坏人 vs 好人"的故事。Altman 不是坏人——他在正确的时间做了正确的产品决策（ChatGPT），为 AI 带来了前所未有的公众关注。Sutskever 不是坏人——他在坚持一个正确的信念（安全不能被商业化稀释）。Amodei 不是坏人——他选择了用行动而非争论来推进安全研究。

这是一个**制度设计问题**。非营利结构无法支撑前沿 AI 训练的算力需求。营利性结构无法内置足够的安全约束。封顶利润是一种折中，但折中不能持久。目前没有人找到一个既能获得足够资本、又能内置安全约束的制度框架——这才是 OpenAI 十年分裂的根本原因。

---

## 七、遗留问题

OpenAI 的故事还远未结束。截至 2026 年中，几个关键悬念仍在展开：

- **完全营利化能完成吗？** 加州总检察长和特拉华州法院正在审查这一转型。如果被阻止，OpenAI 将陷入一个"既不够营利也不够非营利"的制度夹缝。[^7]
- **GPT-5 能重新拉开差距吗？** GPT-5 多次推迟，Claude、Gemini、DeepSeek 的多线追赶正在缩小 OpenAI 的先发优势。
- **安全运动能保持统一吗？** Anthropic 在做 Constitutional AI，SSI 在做超级智能安全，OpenAI 内部的安全团队在做内部改良——三条路线各自为政，缺乏协调。碎片化的安全运动能否对冲一个年营收数十亿美元的闭源公司的商业惯性？

这些问题的答案将决定整个 AI 行业的走向。

---

## 评曰

OpenAI 的十年，是"使命如何被资本变形"的完整样本——但把它读成"堕落"是错误的。

OpenAI 的每一步转型都有清晰的合理逻辑：非营利筹不到足够的钱，所以需要封顶利润。封顶利润吸引不到最大的资本，所以需要微软。微软的投资要求产品化，所以需要闭源。闭源带来收入，所以需要更多闭源。完全营利化吸引最大规模的资本，所以需要解除非营利结构。这条逻辑链上没有任何一步是"恶意的"——每一步都是在前一步的约束下做出的理性选择。

但理性选择的累积结果可以是非理性的。当一家公司的使命从"open"变成了"closed"、从"nonprofit"变成了"for-profit"、从"安全优先"变成了"产品优先"——即使每一步都有理由——它最终到达的地方和出发时宣称的目的地之间的距离，已经大到无法用"我们在做正确的事"来解释了。

真正的教训不是"OpenAI 堕落了"——而是**目前不存在一种制度设计，能同时满足前沿 AI 研发的资本需求和安全约束**。OpenAI 的每一种制度形态——非营利、封顶利润、完全营利——都解决了上一个形态的问题，同时创造了新问题。非营利解决了动机问题但筹不到钱。封顶利润解决了筹钱问题但留不住安全派。完全营利解决了资本问题但拆除了最后一道安全屏障。

这条制度演化的路径，与其说是 OpenAI 的失败，不如说是整个 AI 行业的**制度失灵**。我们在 2026 年还没有找到一个既能容纳万亿级资本、又能内置安全约束的组织形式——这才是 OpenAI 十年分裂给我们的真正警告。

Anthropic 和 SSI 的出走不是 OpenAI 的损失——是制度设计的损失。如果存在一种更好的制度框架，这些人不必出走，他们的安全研究可以在一个更大、更强大、拥有更多资源的组织中进行。他们出走了——因为不存在这样的框架。

这不是 OpenAI 的悲剧。这是我们所有人的悲剧。

---

*本篇由终末地工业史官团队编纂：符玄（理论框架审思）。*

---

[^1]: OpenAI Blog, "Introducing OpenAI", 2015-12-11. https://openai.com/blog/introducing-openai
[^2]: OpenAI Blog, "OpenAI Supporters", 2018-02-20. https://openai.com/blog/openai-supporters
[^3]: GPT-4 训练成本估计为 $63M-$100M，综合多家分析机构估算。参见 SemiAnalysis, "GPT-4 Architecture, Infrastructure, Training Dataset, Costs, Vision, MoE", 2023-07. 另见 The Verge 等媒体相关报道。
[^4]: OpenAI Blog, "OpenAI LP", 2019-03-11. https://openai.com/blog/openai-lp
[^5]: OpenAI Blog, "Microsoft invests in and partners with OpenAI", 2019-07-22. https://openai.com/blog/microsoft-invests-in-and-partners-with-openai
[^6]: The Verge, "Microsoft extends OpenAI partnership with multi-billion dollar investment", 2023-01-23. https://www.theverge.com/2023/1/23/23567448/microsoft-openai-investment-chatgpt
[^7]: OpenAI 完全营利化计划于 2024-2025 年间推进。参见 Bloomberg、The Verge 等多家媒体相关报道。加州总检察长审查一事见 Reuters, "California AG reviewing OpenAI's conversion to for-profit", 2025.
[^8]: OpenAI Blog, "OpenAI announces leadership transition", 2023-11-17. https://openai.com/blog/openai-announces-leadership-transition
[^9]: Safe Superintelligence Inc. (SSI) 由 Ilya Sutskever、Daniel Gross 和 Daniel Levy 于 2024 年 6 月联合创办。Sutskever 在 2024 年 5 月正式离开 OpenAI。参见 SSI 官网及多家媒体报道。
[^10]: Elon Musk 多次在 Twitter/X 上批评 OpenAI 从开放转向封闭。引文为其 2023-2024 年间公开言论的大意概括。
[^11]: DeepSeek-AI et al., "DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning", arXiv:2501.12948, 2025-01. https://arxiv.org/abs/2501.12948
[^12]: Anthropic 的创始团队包括前 OpenAI 研究副总裁 Dario Amodei、前 OpenAI 政策负责人 Daniela Amodei 等。分裂的直接背景参见 Anthropic 本纪。
[^13]: Bai et al., "Constitutional AI: Harmlessness from AI Feedback", arXiv:2212.08073, 2022-12. https://arxiv.org/abs/2212.08073
[^14]: 2023 年 4 月，Google 将旗下 AI 实验室 Google Brain 和 DeepMind 合并为 Google DeepMind，DeepMind 失去法律独立性。参见 Google Blog, "Google DeepMind", 2023-04-20.
[^15]: Altman 在 2019 年内部邮件中将公司内部的分裂称为"部落"（tribes）。*The Atlantic* 获得了原始邮件。参见 Wikipedia "OpenAI" 条目引用。
[^16]: 2023 年 10 月 Altman 削弱 Sutskever 角色、寻求中东投资及与软银/Jony Ive 合作等细节，出自 *Bloomberg* "BloombergCoup" 独家报道。另见 *The New Yorker*（Ronen Farrow, 2026 年 4 月）。
[^17]: DevDay 作为导火索的分析，出自 Kara Swisher 和 *The Verge* 记者 Alex Heath 的报道。
[^18]: Sutskever 编写的 52 页备忘录和 70 页带注释档案，指控 Altman "表现出一贯的……撒谎模式"。*The New Yorker*（Ronen Farrow, 2026 年 4 月）调查报道首次曝光全文细节。参见 Wikipedia "Ilya Sutskever" 条目引用 [46][47]。
[^19]: Helen Toner 论文事件及 Sutskever 全体会议发言，出自 *The Atlantic*、*The Washington Post* 等多家媒体。参见 Wikipedia "Helen Toner" 条目。
[^20]: Q* 项目突破与安全争议，出自 *Reuters*（Anna Tong 等）。信息来自匿名内部来源，可信度中等。
[^21]: 解雇日时间线——Altman 在 Google Meet 上被通知、正在看拉斯维加斯大奖赛等细节，出自 *Engadget*、*Axios*、*The Washington Post*、*The Verge* 多方交叉验证。
[^22]: 约 700 名员工（约 95%）签署联名信、Amodei 被邀请取代 Altman 并拒绝、和解条件等细节，出自多家媒体广泛报道。参见 Wikipedia "Dario Amodei" 条目引用 [24]。
[^23]: SSI 创立于 2024 年 6 月 19 日（Sutskever、Daniel Gross、Daniel Levy），2024 年 9 月融资 $1B，2025 年 3 月估值 $30B，2025 年 4 月与 Google Cloud 合作获取 TPU，Meta 试图收购被拒，2025 年 7 月 Gross 离开加入 Meta Superintelligence Labs。*Reuters*、*Bloomberg*、*The Verge*、*NYT*、*WSJ*、*CNBC* 多家交叉验证。
[^24]: Jan Leike 辞职声明（2024 年 5 月），*Vox*（Sigal Samuel, 2024-05-17）、*The Guardian*（Dan Milmo, 2024-05-18）。安全团队至少失去七名研究员，出自 *The Decoder*（Matthias Bastian, 2024-05-18）。Leike 后于 2024 年 5 月 28 日加入 Anthropic（*The Verge*）。
[^25]: John Schulman 于 2024 年加入 Anthropic。参见 Wikipedia "Anthropic" 条目。
