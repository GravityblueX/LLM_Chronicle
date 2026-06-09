# AI 安全与对齐：从技术方案到治理博弈

> 大模型每一次能力跃升，都会同时制造两件事：兴奋和恐惧。兴奋来自"它能做什么"，恐惧来自"它会不会做不该做的事"。AI 安全与对齐，就是人类试图管理这种恐惧的持续努力——从最早的 RLHF 让模型学会"听人话"，到 Constitutional AI 用规则代替人工反馈，再到各国政府试图用法律给模型划下硬边界。这不是一条直线，而是一系列拉锯。

## 一、RLHF：把人类偏好灌进模型

大模型的安全对齐问题，最早是以一个很朴素的方式被提出的：模型很强，但它不一定听你的。

GPT-3 可以写出流畅的文章，也可以生成种族歧视、性别偏见、暴力内容。它不是故意的——它只是在训练数据里见过这些东西，然后忠实地模仿出来。预训练让模型"学会说话"，但没有教会它"什么不该说"。

**InstructGPT** 在 2022 年 1 月由 OpenAI 发布，论文标题是《Training language models to follow instructions with human feedback》。它提出了后来成为行业标准的三步流程：先收集人类偏好的标注数据（人类标注员对同一 prompt 的多个回答进行排序），再用这些偏好训练一个奖励模型（reward model），最后用强化学习（PPO 算法）调整语言模型，让它生成的回答更符合人类偏好。[^1]

这套流程被简称为 RLHF（Reinforcement Learning from Human Feedback）。它做的不只是"过滤脏话"。它让模型学会了一种更微妙的东西：什么是一个"好回答"。人类标注员不是只告诉模型"这句话不能说"，而是教它"这个回答比那个回答更有帮助、更诚实、更无害"。

几乎同时，Anthropic 发布了《Training a Helpful and Harmless Assistant with Reinforcement Learning from Human Feedback》。论文详细探讨了 Helpful（有帮助）和 Harmless（无害）之间的张力——有时候用户想要的信息可能正是有害的信息，模型需要在二者之间找到平衡。[^2]

RLHF 在大模型史上的位置很特殊。它不是让模型变"聪明"的技术，而是让模型变"听话"的技术。ChatGPT 之所以能在 2022 年 11 月爆火，除了 GPT-3.5 本身的能力外，RLHF 让模型更像一个"愿意帮忙的助手"而非"冷冰冰的续写器"，是一个被低估的关键因素。

但 RLHF 也有一道硬伤：它依赖于大量人工标注。OpenAI 雇佣了大量标注员（其中很多在肯尼亚等低工资国家），让他们阅读模型生成的有害内容，让他们标注"哪个回答更好"。这些人拿着低薪、承受着心理伤害，而他们的劳动是 ChatGPT 安全的基石。[^3]

而且，随着模型越来越强，人工判断越来越不够用。当一个 540B 参数的模型写出人类难以理解的技术推理时，普通标注员怎么评判它是对是错？RLHF 做了最早的铺路，但路在模型能力前面一点点就到了尽头。

## 二、Constitutional AI：用规则代替人工

RLHF 的极限推动了一种替代方案：能不能不要人一条条标注，而是给模型一套"宪法"（Constitution），让它自己判断什么是对、什么是错？

Anthropic 在 2022 年 12 月提出 Constitutional AI（CAI）。做法分两步。第一步，用一套行为准则（Constitution）让模型批判和修正自己的回答——比如"请判断这个回答是否包含歧视性内容，如果有，请重写"。这样就生成了一批高质量的自修正数据。第二步，用这些数据训练一个偏好模型，再通过 RL 做最终微调。[^4]

Constitution 的内容来自多个来源：联合国人权宣言、Apple 的服务条款、DeepMind 的 Sparrow 规则、Anthropic 自己的安全研究等。这种做法的哲学是：不要靠临时标注员的直觉来判断"好"和"坏"，而是靠一套事先写下来的、原则性的、可审计的规则。

CAI 在历史上至少做了三件事。第一，它显著减少了对人工标注的依赖，砍掉了 RLHF 中那层"让人看有害内容然后打分"的痛苦。第二，它让安全策略变得可读——Constitution 是一份文本，可以被公开、被讨论、被修改、被审计。第三，它无意中让 AI 安全从"工程师的内部调整"变成了一种"治理问题"：谁有权写宪法？写进去什么？省略了什么？

Claude 系列模型从 Claude 1（2023 年 3 月）开始，就以 Constitutional AI 作为核心安全框架。Anthropic 的定位一直很明确：我们不是"最强模型"，我们是"最安全模型"。在 ChatGPT 和 GPT-4 席卷市场的时候，Anthropic 用"安全"作为差异化——这个策略在 2023 年看起来像防守，在 2024 年监管压力加大后，成了进攻。

## 三、治理竞赛：各国政府出手

2023 年以后，AI 安全从技术公司的自选动作变成了政府监管的必答题。

**2023 年 10 月 30 日**，美国白宫发布《Executive Order on Safe, Secure, and Trustworthy Artificial Intelligence》。这是美国联邦政府迄今最全面的 AI 行政令，涵盖安全测试标准、隐私保护、公平性、劳动力影响和国家安全。行政令要求开发最强大 AI 系统的公司向政府报告安全测试结果。[^5]

**2023 年 11 月 1—2 日**，首届 AI 安全峰会在英国 Bletchley Park 召开，28 个国家（包括美国、中国、欧盟）签署了《Bletchley Declaration》，同意在 AI 安全上开展国际合作。这份宣言的历史意义在于，它是在中美科技竞争加剧的背景下达成的——两国同意至少在 AI 安全上合作。[^6]

**2024 年 5 月 21—22 日**，AI 首尔峰会（AI Seoul Summit）召开，16 家主要 AI 公司（包括 OpenAI、Google、Microsoft、Amazon、Meta、Anthropic 等）签署了前沿 AI 安全承诺，包括在模型风险达到一定阈值时暂停开发或部署。[^7]

**2024 年 8 月 1 日**，欧盟《AI 法案》（EU AI Act）正式生效。这是全球第一部综合性 AI 法律，采用风险分级制度：不可接受风险的 AI 应用被禁止（如社会信用评分）、高风险 AI 系统需满足严格合规要求、有限风险需透明、最小风险无额外义务。法案规定了对通用 AI 模型和基础模型的监管框架。[^8]

这一连串动作说明了一件事：**AI 安全从工程师的笔记本走进了国会的投票厅**。但治理竞赛也带来了一个新的张力：不同国家的监管节奏不同。欧盟跑在最前面，通过了一套严格而具体的法律；美国通过行政令而非立法推进，更灵活但更容易被下一任总统推翻；中国用备案制而非法律框架管理大模型部署。全球 AI 治理不是一副拼好的图，而是三套不同的规则在同一条赛道上并行。

## 四、SB 1047：加州法案的升起与坠落

2024 年，美国 AI 治理最戏剧性的一幕发生在加州。

**SB 1047**（Safe and Secure Innovation for Frontier Artificial Intelligence Models Act）由加州参议员 Scott Wiener 提出。法案的核心要求是：训练大模型（训练成本超过 1 亿美元或使用超过 10²⁶ FLOPS 算力）的开发者，必须在训练前进行安全评估、实施安全措施、保留可审计记录，并对模型造成的重大危害承担责任。[^9]

这个法案在 2024 年夏天引发了 AI 行业的全面分裂。

支持方主要是 AI 安全研究者和部分学者：Geoffrey Hinton、Yoshua Bengio 等人士公开支持，认为预防性监管是负责任的做法，等事故发生再立法就晚了。反对方则几乎囊括了硅谷主流：OpenAI、Anthropic、Google、Meta 都表示反对或持保留态度。反对理由集中在几点：规制应该是联邦层面的而非州级、过度关注假想风险而忽视当下危害、可能扼杀开源创新。Anthropic 反对 SB 1047 尤其引人注目——一个以"安全"为招牌的公司，反对一项以"安全"命名的法案。

2024 年 9 月 29 日，加州州长 Gavin Newsom 否决了 SB 1047。他在否决声明中表示，虽然法案的出发点值得认可，但其门槛过于武断——仅凭训练成本和算力规模来定义"高风险"，而不是根据模型的实际应用场景来评估风险。Newsom 同时表示，他会与立法者、联邦政府和学术界合作推进更合理的监管方案。[^10]

SB 1047 的历史意义不在它是否通过了，而在于它让一件事变得清楚：**再没有一家公司可以说"AI 安全不需要监管"了**。争议的核心不是"要不要监管"，而是"谁来监管、按什么标准监管、什么时候出手"。法案被否决了，但它把争论的框架从"自我规制 vs 政府规制"推进到了"怎样的政府规制是合理的"。

## 五、当下格局：三线并行

到 2026 年，AI 安全与对齐的格局大致是三条线并行。

**第一条是技术线**。RLHF 和 Constitutional AI 仍是主流，但新方法在不断涌现。RLAIF（用 AI 反馈替代人类反馈）、可扩展监督（scalable oversight）、可解释性研究（Anthropic 的 mechanistic interpretability 团队）、红队测试、过程奖励模型都在试图回答同一个问题：当模型比人类更强时，人类怎么监督它？这个问题还没有答案。

**第二条是治理线**。EU AI Act 在执行中，美国各州和联邦在拉锯，中国在调整备案制度，英国在推进 AISI（AI 安全研究所）模式。国际治理碎片化带来了一个现实问题：一个模型可以在美国训练、在欧盟部署、数据来自全球——但到底要遵守哪套规则？

**第三条是争议线**。"安全"本身正在变成一个战场。OpenAI 用安全理由隐藏 o1 思维链，Anthropic 用安全作为品牌壁垒，开源的 DeepSeek 用公开思维链回应"透明就是安全"，各方的"安全"定义完全不同。有人说的安全是"防止人类灭绝"，有人说的是"保护用户隐私"，有人说的"符合法律法规"。"AI 安全"的共识只停留在"需要安全"，但在"安全是什么、谁来定义、如何验证"这三个关键问题上，分歧正在扩大。

## 评曰

AI 安全的历史不是一条上升的直线。RLHF 教会模型听人话，但人工标注的极限很快就到。Constitutional AI 用规则代替人工，但规则的制定权成了一个治理问题。各国政府介入，但监管节奏和标准的差异造成了碎片化。SB 1047 被否决了，但它留下的框架——"大模型需要被监管"——已经成为共识。

最值得警惕的不是安全技术本身的不足，而是安全叙事的工具化。"安全"正在从技术目标变成一个品牌、一个谈判筹码、一个竞争壁垒。OpenAI 用它隐藏思维链，Anthropic 用它建立护城河，反对开源的人用它警告"不可控扩散"，支持开源的人用它回应"透明才是真安全"。当"安全"可以被用来同时论证两个完全相反的立场时，历史学家应该做的，不是站队，而是把每一方的"安全"拆开来看：限制的是什么、保护的是谁、谁说了算。

---

*本篇由终末地工业史官团队编纂：白面鸮（Lead Data Analyst）*

---

[^1]: Ouyang et al., "Training language models to follow instructions with human feedback", NeurIPS 2022 / arXiv:2203.02155, 2022-03-04. https://arxiv.org/abs/2203.02155
[^2]: Bai et al., "Training a Helpful and Harmless Assistant with Reinforcement Learning from Human Feedback", arXiv:2204.05862, 2022-04-12. https://arxiv.org/abs/2204.05862
[^3]: Perrigo, "OpenAI Used Kenyan Workers on Less Than $2 Per Hour to Make ChatGPT Less Toxic", TIME, 2023-01-18. https://time.com/6247678/openai-chatgpt-kenya-workers/
[^4]: Bai et al., "Constitutional AI: Harmlessness from AI Feedback", arXiv:2212.08073, 2022-12-15. https://arxiv.org/abs/2212.08073
[^5]: The White House, "Executive Order on the Safe, Secure, and Trustworthy Development and Use of Artificial Intelligence", 2023-10-30. https://www.whitehouse.gov/briefing-room/presidential-actions/2023/10/30/executive-order-on-the-safe-secure-and-trustworthy-development-and-use-of-artificial-intelligence/
[^6]: UK Government, "The Bletchley Declaration by Countries Attending the AI Safety Summit", 2023-11-01. https://www.gov.uk/government/publications/ai-safety-summit-2023-the-bletchley-declaration
[^7]: UK Government, "AI Seoul Summit 2024: Frontier AI Safety Commitments", 2024-05-21. https://www.gov.uk/government/publications/ai-seoul-summit-2024-frontier-ai-safety-commitments
[^8]: European Commission, "AI Act enters into force", 2024-08-01. https://commission.europa.eu/news/ai-act-enters-force-2024-08-01_en
[^9]: California State Senate, "SB-1047: Safe and Secure Innovation for Frontier Artificial Intelligence Models Act", 2024. https://leginfo.legislature.ca.gov/faces/billNavClient.xhtml?bill_id=202320240SB1047
[^10]: Governor Gavin Newsom, "Veto Message for SB 1047", 2024-09-29. https://www.gov.ca.gov/wp-content/uploads/2024/09/SB-1047-Veto-Message.pdf
