# Three Routes of Chinese AI

> DeepSeek, Qwen, GLM — the "Big Three" of Chinese large language models. Each grew from different soil: the trading floor of a quantitative hedge fund, the cloud computing division of an internet giant, the knowledge engineering laboratory of a top university. On the surface, they are all building large language models, but their DNA determines that they are fundamentally different species. This article does not ask "which is stronger" — but "why they emerged as three completely different routes."

---

## I. Framing the question: One country, three incommensurable routes

From 2023 to 2026, China's large language model industry crystallized into three routes. Not three stylistic preferences, but three **institutional types** that fully diverge in founder DNA, funding structure, technical philosophy, business model, and open-source strategy.

The differences among these three routes are so vast that discussing them under the single label of "Chinese AI" is almost misleading. DeepSeek's founder was still doing quantitative trading in 2022. Qwen's team was managing the world's third-largest cloud computing platform. GLM's central figure was teaching knowledge graph courses at Tsinghua University. They face different problems, command different resources, make different technical choices, and define success in different ways.

The only commonality is that they all produced world-class large language models between 2023 and 2026. And this article does not ask "which is stronger" — but "why the same country produced three completely different routes."

| Dimension | DeepSeek | Qwen | GLM |
|------|----------|------|-----|
| Backing entity | High-Flyer Quant (quantitative hedge fund) | Alibaba Cloud Intelligence Group | Zhipu AI (Tsinghua-affiliated startup) |
| Founder DNA | Liang Wenfeng — quantitative trader | Tongyi Lab — cloud product managers + researchers | Tang Jie — Tsinghua professor, knowledge graph background |
| Funding source | Quantitative trading profits (no fundraising, no IPO) | Public company cash flow | Venture capital (cumulative financing exceeding ¥4 billion) |
| Architecture choice | Standard Transformer + MoE + MLA | Standard Transformer + MoE | Non-standard (GLM bidirectional attention + blank infilling) |
| Open-source strategy | MIT full open-source, including chains of thought | Apache 2.0 full-spectrum open-source | Frontier closed-source, secondary open-source |
| Business model | Does not monetize AI | Free model, sell Alibaba Cloud compute | API pricing + enterprise solutions |
| Core technical philosophy | Efficiency first — savings are profits | Coverage first — occupy every ecological niche across the full spectrum | Architecture first — do something different |

These three routes are not "different strategies on the same racetrack" — they are **the result of three different species evolving in three distinct ecological environments.** To understand them, one must trace back to their respective origins.

---

## II. How founder DNA determines technical routes

### 2.1 DeepSeek: Large language models through the eyes of a quantitative trader

Liang Wenfeng is not from an AI research background. He is a quantitative trader. This background determined every technical decision at DeepSeek.

The core concern of quantitative trading is **efficiency**: given the same information, whose model computes faster, uses fewer GPU hours, consumes less bandwidth — that person earns more money. In this world, GPUs are not assets but costs. A good engineering optimization is not for publishing papers but for direct monetization.

When Liang Wenfeng brought this mindset into large language model training, it produced a cascade of technical consequences:

- **MLA** (Multi-head Latent Attention): 90% KV cache compression. In the world of quantitative trading, this equates to "running 10 times more inference on the same hardware."[^1]
- **MoE + auxiliary-loss-free load balancing**: 671B parameters with only 37B activated. In the world of quantitative trading, this equates to "building 18 times more factors at the same cost."[^2]
- **Pure RL training for R1**: Skipping the SFT phase. In the world of quantitative trading, this equates to "eliminating the most expensive human annotation cost."[^3]

The common characteristic of these technical innovations is: **they innovate not for academic novelty, but for efficiency.** DeepSeek's papers read more like engineering optimization reports — every technical choice comes with a clear quantitative metric of "how much cost was saved." This is no coincidence — it is a direct projection of founder DNA.

A quantitative trader doesn't need "technically impressive" technology. He needs "technologically cheap" technology. That is the entirety of DeepSeek's technical philosophy.

More deeply, quantitative traders have a natural obsession with "reproducibility" — a trading strategy must generate stable profits under all market conditions, not just during a specific time period. This obsession, when mapped onto large language model training, becomes DeepSeek's extreme pursuit of "training pipeline stability." V3's technical report contains an inconspicuous but critically important sentence: no irrecoverable loss spikes requiring rollback occurred during the entire pre-training process.[^2] The subtext of this sentence is — the entire training process was precisely controllable. This control capability comes not from luck but from the professional habit of "precisely controlling every variable" ingrained in the quantitative trading world.

### 2.2 Qwen: Large language models through the eyes of a cloud product manager

Alibaba Cloud's DNA is **platform.** It doesn't produce content; it sells compute. It doesn't build the most dazzling products; it builds the most reliable infrastructure.

When Alibaba Cloud decided to build large language models, it faced entirely different problems from DeepSeek. DeepSeek needed to answer "how to train the best model with the least money." Alibaba Cloud needed to answer: "how to make large language models help Alibaba Cloud sell more servers."

This underlying question produced Qwen's entire strategy:

- **Full-spectrum coverage** (0.5B to 235B MoE): Not for technical showmanship, but to cover all compute tiers of Alibaba Cloud's customers — 0.5B for mobile, 7B for edge devices, 14B for small and medium businesses, 72B for large enterprises, 235B for flagship scenarios. Every customer can find a "just sufficient" model in the Qwen series and deploy it on Alibaba Cloud.[^4]
- **Apache 2.0 open-sourcing**: Not for community sentiment, but to eliminate commercial barriers and maximize the developer ecosystem — every model fine-tuned on Qwen ultimately runs inference on Alibaba Cloud.[^5]
- **Closed-source + open-source dual track**: The best model (Tongyi Qianwen) serves enterprise clients as a closed-source revenue generator, while secondary models are open-sourced to expand the ecosystem. The two tracks feed each other — open-source users grow up to become closed-source customers.[^6]

Qwen's technical route is "not cool enough" — it has no MLA, no architectural innovation, no legend of "training a frontier model for $5.57 million." But Qwen's technical route is **stable enough**: every step expands Alibaba's cloud ecosystem moat. This is the victory of a product manager, not an engineer.

This "not cool enough" is itself a strategic choice. In the large language model arms race, "the most dazzling technical breakthrough" receives the most media attention — but media attention does not equal customer value. Alibaba Cloud's customers don't need "the most dazzling model"; they need "a just-sufficient model + a reliable deployment plan + a reasonable price." Qwen's full-spectrum coverage exists precisely to meet this need — 0.5B for mobile real-time inference, 7B for edge devices, 14B for small and medium businesses, 72B for large enterprises. Every scale tier has a clear customer scenario mapped to an Alibaba Cloud product.

### 2.3 GLM: Large language models through the eyes of a professor

Tang Jie is a professor in the Computer Science Department at Tsinghua University, with a background in knowledge graphs. His technical aesthetic is **architectural innovation** — doing something different, proving that "another path can also work."

This aesthetic produced all of GLM's uniqueness:

- **Autoregressive blank infilling**: Not the standard "left-to-right next-token prediction," but "mask a portion, and let the model fill in the blanks." This design had theoretical justification in 2022 — it unified the training objectives of understanding (BERT-style bidirectional context) and generation (GPT-style autoregressive).[^7]
- **Persistence on proprietary architecture across four generations**: From GLM-130B to ChatGLM-6B to GLM-4 to GLM-5.1, even as the standard Transformer became the industry consensus, GLM maintained its own architecture. This is "academic confidence" — or perhaps "path lock-in."
- **Frontier closed-source + secondary open-source**: GLM-4-Plus is closed-source, GLM-4-9B is open-source. This is not a platform strategy but a startup survival strategy — the best model must generate revenue, or the ¥4 billion in funding will eventually run out.[^8]

Among the "Big Three," GLM most resembles an academic team doing a startup — its strength is good technical taste (ChatGLM-6B was the only viable option for Chinese developers during the time window of March 2023), and its weakness is also good technical taste (autoregressive blank infilling is a persistent technical debt in the engineering ecosystem).

But there is a deeper paradox here. GLM's proprietary architecture choice made sense in 2022 — at that time, no one knew that the pure autoregressive Transformer would become a winner-take-all. But in 2024–2025, when all frontier optimizations — FlashAttention, KV cache compression, speculative decoding, MoE — are built around the standard autoregressive architecture, GLM's uniqueness shifts from "academic advantage" to "engineering debt." Zhipu AI faces a dilemma: continuing to maintain the GLM architecture means forever needing additional adaptation work to benefit from industry optimizations; switching to the standard Transformer means admitting that a decade of architectural exploration was a detour. For an academic startup whose brand identity is built on technical taste, the latter might be a bigger brand crisis than the technical debt itself.

---

## III. How funding sources determine business models

The differences in funding structures across the three routes directly determine what kinds of commercial decisions they can make.

### 3.1 DeepSeek: "No need to make money from AI"

This is DeepSeek's most fundamental structural advantage. High-Flyer Quant's trading profits are sufficient to cover all of DeepSeek's operations, without needing to recover training costs from API revenue. This condition allows DeepSeek to make decisions that **no profit-requiring company could ever make**:

- Selling API at 1% of GPT-4's price — because it doesn't need to be profitable[^9]
- Fully open-sourcing under MIT license — because it doesn't need to protect commercial value[^3]
- No fundraising, no IPO — because it doesn't need external capital[^10]

This condition also determines DeepSeek's ceiling: it can only be "the best model factory," not "the best product company." Because once DeepSeek starts building products (agents, toolchains, enterprise integration), it must start earning customers' money — and "starting to make money" would destroy its structural advantage of "not needing to make money."

**Scenario risk**: All of DeepSeek's advantages depend on one premise — High-Flyer Quant's trading profits can continuously cover AI R&D costs. If the quantitative trading industry faces a systemic crisis (regulatory tightening, strategy failures, prolonged low market volatility), DeepSeek's "cash-rich" status will cease to exist. This is a route without a Plan B.

### 3.2 Qwen: "Free model, monetize through cloud"

Alibaba's business model is as clear as arithmetic: Qwen open-sources → developers build applications on top of Qwen → applications run on Alibaba Cloud → Alibaba Cloud charges server fees.

The model is not the product — the model is a customer acquisition tool. Alibaba Cloud's competitors are AWS, Azure, and Google Cloud. Qwen's role is to tear open an opening in these giants' model ecosystems: when global developers use Qwen instead of Llama to build Chinese AI applications, the infrastructure of these applications is locked into Alibaba Cloud.

**Scenario risk**: Qwen's risk is not at the model layer — but at the cloud layer. If Alibaba Cloud itself continues to hemorrhage in competition with AWS/Azure, Qwen's "customer acquisition value" cannot be converted into actual revenue. Additionally, DeepSeek's extremely low API prices are eroding Qwen's closed-source track revenue — when developers can access GPT-5.5-level APIs at 1/370 of the price, who would still be willing to pay for Alibaba Cloud's closed-source model?

### 3.3 GLM: "Extend runway with funding, generate blood with revenue"

Zhipu AI has the most traditional and most fragile business model of the three. It does not rely on quantitative trading profits to subsidize operations, nor on a cloud platform ecosystem for monetization — it earns money directly from API and enterprise clients.

The ¥4 billion in venture funding gives it ample ammunition, but the burn rate is also accelerating. In a market environment where DeepSeek provides equivalent service at 1% of the price, Zhipu AI's API revenue faces structural pressure. Can it prove that "my model is good enough to justify being 100 times more expensive"? For enterprise clients, perhaps — customization, private deployment, security compliance, and local support are services DeepSeek does not provide. In the general-purpose API market, it is difficult.

**Scenario risk**: The risk GLM faces is not technical but **existential.** Under the dual squeeze from DeepSeek and Qwen, an independent AI startup needs to prove that its "irreplaceability" lies not in model capability itself — but in enterprise services, industry verticalization, academic influence, and other value beyond the model. If these values cannot be established in time, Zhipu AI's ¥4 billion in funding becomes a countdown.

It is worth noting that the "academic DNA" of GLM's route may also serve as a unique survival strategy. Zhipu AI's deep ties to Tsinghua University mean it can continuously attract top research talent — talent that may have no interest in joining a large corporation (Alibaba) or a quantitative fund (High-Flyer) but is passionate about staying at the intersection of academia and entrepreneurship. If Zhipu AI can convert this talent advantage into technical barriers in specific vertical domains (such as scientific literature understanding, knowledge graph-driven reasoning, etc.), it may find a survival path different from both DeepSeek and Qwen.

---

## IV. Comparison with Western routes

| Dimension | DeepSeek | Qwen | GLM | OpenAI | Anthropic | Meta/Llama |
|------|----------|------|-----|--------|-----------|------------|
| Funding structure | Quantitative profits | Public company | VC financing | Microsoft investment | Google/Amazon investment | Advertising revenue |
| Core philosophy | Efficiency extremization | Ecosystem full coverage | Architectural differentiation | Safety narrative commercialization | Safety first | Open-source moat |
| Open-source level | Full MIT | Apache 2.0 | Partial open-source | From open to closed | Closed-source | Open weights (not OSI-certified) |
| Business logic | Does not monetize AI | Sell cloud | Sell API | Subscription + API | API + enterprise | Undercut competitors' moat |

Several key comparisons merit elaboration:

**DeepSeek vs. OpenAI**: The two represent the two poles of AI cost structure. OpenAI's philosophy is "trade more for stronger" — more parameters, more GPUs, more money. DeepSeek's philosophy is "smarter engineering saves more capability" — MLA saves inference cost, MoE saves training cost, pure RL saves alignment cost. This is not stylistic preference — it is a direct projection of founder worldview. A quantitative trader views GPUs as costs (to be minimized); a Silicon Valley entrepreneur views GPUs as investments (to be scaled). Two worldviews produced two entirely different technical routes, and DeepSeek's route crushes OpenAI in cost efficiency.

**DeepSeek vs. Meta/Llama**: Neither directly monetizes the model, but their motivations are completely different. Meta uses Llama to erode OpenAI and Google's API moats — it is using its own open-sourcing to protect its advertising empire. DeepSeek doesn't need to erode anyone — it isn't even in the same commercial game. Meta's open-sourcing is a weapon; DeepSeek's open-sourcing is an incidental byproduct.[^11] But the result is the same: two companies that "don't monetize models" jointly define the capability ceiling of open-source large language models — squeezing all companies that need to monetize their models.

**Qwen vs. Meta/Llama**: Both are large-corporation open-sourcing, both use models to funnel users to their own clouds. But Qwen's full-spectrum coverage strategy (0.5B to 235B) is something Llama lacks — Llama has only three tiers: 8B/70B/405B.[^4] Qwen is more like a carefully designed product line; Llama is more like a research output. Additionally, Qwen has fully adopted the Apache 2.0 license since version 1.5 — closer to true open source than Llama's "open weights" license — which has earned Qwen more trust than Llama in the global developer community.

**GLM vs. Anthropic**: Both were founded by "academics who left," both emphasize safety and technical taste. But Anthropic has continuous investment from Google and Amazon (over $7 billion cumulative by 2025), while Zhipu AI's funding comes from VC financing — once burned through, it's gone.[^12] Anthropic has proven that "a safety-first AI company can survive," but GLM needs to prove that "an academic-DNA AI startup can survive in China" — which is far harder than the former. The more critical distinction is: Anthropic's Constitutional AI is a methodological innovation — even if the model is caught up with, the methodology retains independent value. GLM's proprietary architectural innovation is more fragile — as the standard Transformer ecosystem grows stronger, the value of "being different" diminishes.

---

## V. Sustainability projections for the three routes

The Grand Diviner has conducted three rounds of projection.

**Round one — Status quo assessment**: DeepSeek has a structural advantage at the model layer (efficiency) but lacks productization capability and enterprise-grade services. Qwen has a structural advantage at the ecosystem layer (coverage) but its closed-source track faces DeepSeek's price pressure — when developers can access equivalent models at 1/370 of the price, where is the value of a closed-source API? GLM once had a first-mover advantage in its time window (ChatGLM-6B in March 2023), but that window closed in the second half of 2023 — Qwen and Llama quickly caught up in Chinese-language capability.

**Round two — External variables**: U.S. GPU export controls on China continue to escalate. This variable affects the three routes very differently — DeepSeek's "efficiency route" is an accidental beneficiary (controls forced it to do better engineering on weaker GPUs, producing a lasting cost advantage), Qwen's "full-coverage route" is partially constrained (small models are less affected by GPU controls, but flagship model training requires more compute), and GLM's "independent startup route" is the most vulnerable (no proprietary compute subsidies, can only purchase GPU hours at market price). The March 18 Incident (2026-03) simultaneously brought opportunities to all three routes from the demand side — Chinese developers are undergoing "de-Americanization" migration, and both DeepSeek and GLM have become alternative options.

**Round three — Endgame projection**: The three routes are unlikely to converge into one. DeepSeek will continue as a "model factory" because its DNA won't allow it to do otherwise — it cannot become a product company without losing its structural advantage. Qwen will continue as a "model platform" because its DNA is platform — models are the means, cloud is the end. GLM needs to find its own irreplaceability — perhaps industry verticalization (fields like law and healthcare that require deep customization), perhaps deep integration with the academic ecosystem (Tsinghua's knowledge graph and academic network are assets DeepSeek and Qwen lack), perhaps a track we have not yet foreseen.

The most likely endgame is not "winner takes all" but "niche differentiation": DeepSeek is the water and electricity of the infrastructure layer (cheap, effective, you don't care about the brand), Qwen is the Android of the application layer (full coverage, developer-friendly, ecosystem lock-in), GLM is the Xiaomi of a specific vertical domain (the best choice for specific scenarios, but not a universal solution).

---

## VI. A question nobody has asked

Why was it **China** — rather than India, Japan, or Europe — that produced these three routes?

The answer lies not in technology but in institutions.

China simultaneously possesses three conditions: a domestic market large enough (1.4 billion people, the world's second-largest economy, with unique vertical scenarios in AI applications — such as Chinese NLP, short-video recommendation, and e-commerce search), a highly competitive internet industry (BAT + ByteDance + High-Flyer, five players with different DNA, competing with an intensity far exceeding Silicon Valley's oligopolistic structure), and an education system with sufficient academic accumulation in the AI field (Tsinghua, Peking University, and the Chinese Academy of Sciences produce a large volume of AI papers and talent annually). These three conditions are indispensable — India has the market but insufficient industrial competitiveness, Japan has the technology but a conservative market, Europe has the academia but lacks large-scale commercialization infrastructure, and the United States has all the conditions but with higher DNA convergence among its large corporations (nearly all of Silicon Valley's large companies are internet-DNA).

The "DNA diversity" of China's internet industry is especially critical. The quantitative fund DNA of High-Flyer Quant, the cloud computing DNA of Alibaba, the academic DNA of Tsinghua University — the differences among these three kinds of DNA are greater than those between any two AI companies in Silicon Valley. DNA differences breed route differences, route differences breed competition, competition breeds progress. This is the structural reason for the coexistence of three routes in Chinese AI.

The coexistence of the three routes is itself an indicator of the health of China's AI ecosystem — if there were only one route (for example, only the large-corporation route), it would signal innovation monoculture. The coexistence of three routes means that different technical assumptions, business models, and organizational forms are all being tested — the market and time will determine which route goes the furthest.

---

## Commentary

The existence of the three routes proves one thing: **large language model competition is not just technical competition but institutional competition.**

DeepSeek's efficiency route is a projection of its quantitative trading DNA — when your founder sees GPUs as costs rather than assets, your technical route naturally trends toward "doing more with less." Qwen's ecosystem route is a projection of its cloud computing DNA — when your founder sees models as customer acquisition tools rather than products, your technical route naturally trends toward "full coverage + open source." GLM's architectural route is a projection of its academic DNA — when your founder sees innovation as academic dignity, your technical route naturally trends toward "doing something different."

DNA is not determinism — but it sets the default path. Deviating from the default path requires extremely strong external forces. DeepSeek deviating from its "don't build products" default would require High-Flyer Quant to suddenly need AI revenue. Qwen deviating from its "don't chase the frontier" default would require Alibaba Cloud to suddenly decide to pursue first place at the model layer. GLM deviating from its "maintain proprietary architecture" default would require Zhipu AI to admit that the standard Transformer is a better choice. None of these external forces exist at this moment in 2026.

The three routes will not merge into one. But the tension among them — efficiency vs. coverage vs. innovation — defines the full range of possibilities for Chinese AI. Who ultimately prevails does not depend on whose model is stronger — but on whose DNA is best adapted to the next ecological environment.

And what that next ecological environment will be — that is the part we cannot yet project.

---

*This piece was compiled by the Endfield Industrial Historical Archives team: Fu Xuan (theoretical framework review).*

---

[^1]: DeepSeek-AI, "DeepSeek-V2: A Strong, Economical, and Efficient Mixture-of-Experts Language Model", arXiv:2405.04434, 2024-05-07. https://arxiv.org/abs/2405.04434
[^2]: DeepSeek-AI et al., "DeepSeek-V3 Technical Report", arXiv:2412.19437, 2024-12-27. https://arxiv.org/abs/2412.19437
[^3]: DeepSeek-AI et al., "DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning", arXiv:2501.12948, 2025-01-22. https://arxiv.org/abs/2501.12948
[^4]: GitHub, "Qwen2.5: A Party of Foundation Models", 2024-09. https://github.com/QwenLM/Qwen2.5; GitHub, "Qwen3", 2025-04-29. https://github.com/QwenLM/Qwen3
[^5]: GitHub, "Qwen1.5", 2024-02. https://github.com/QwenLM/Qwen1.5
[^6]: The Paper (澎湃新闻), "All Alibaba Products Will Connect to 'Tongyi Qianwen'", 2023-04-11. https://www.thepaper.cn/newsDetail_forward_22651605
[^7]: Zeng, A. et al., "GLM-130B: An Open Bilingual Pre-Trained Model", ICLR 2023. https://arxiv.org/abs/2210.02414
[^8]: 36Kr, "Zhipu AI Completes New Round of Financing", 2023-10. Subsequent reports (2024–2025) state cumulative financing exceeding ¥4 billion.
[^9]: DeepSeek-V2 API input pricing: ¥1/million tokens; GPT-4 Turbo input: $10/million tokens (approximately ¥72/million tokens), approximately 1% of GPT-4's price.
[^10]: High-Flyer Quant, the entity behind DeepSeek, manages a massive asset base and has never conducted external financing. See the DeepSeek chronicle.
[^11]: Meta AI, "Open Source AI Is the Path Forward", 2024-07. https://about.fb.com/news/2024/07/open-source-ai-is-the-path-forward/
[^12]: Anthropic was founded in 2021 by former OpenAI executives Dario Amodei and Daniela Amodei, among others, with cumulative financing exceeding $7 billion by 2025. See the Anthropic chronicle.
