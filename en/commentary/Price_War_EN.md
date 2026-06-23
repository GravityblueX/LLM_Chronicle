# The Large Language Model API Price War: A History

> In 2020, GPT-3 charged $60 per million tokens. In 2025, models of equivalent capability are available for free. Over five years, large language model API prices fell by nearly four orders of magnitude — not at the speed of Moore's Law, but at the speed of an avalanche.

## I. The price war began not with competition, but with scarcity

The commercialization of large language model APIs began with OpenAI's GPT-3 API. On June 11, 2020, OpenAI released the GPT-3 API in private beta, billing by token. The most powerful Davinci endpoint was priced at **$0.06/1K tokens** — equivalent to approximately $60 per million input tokens.[^1]

The logic behind this pricing was not cost but **scarcity.** In the world of 2020, there was only one callable 175B-parameter large language model API. No competitors, no alternatives, no bargaining power for users. $60/1M tokens was widely accepted at the time — because it was the only option on the market.

GPT-3 API's pricing structure also established a tiered system that would be repeatedly imitated: Davinci (most expensive, most powerful), Curie ($0.006/1K), Babbage ($0.0012/1K), Ada ($0.0008/1K). The intuition that "stronger means more expensive" seemed self-evident in 2020 — until someone proved it was not necessarily so.

## II. GPT-3.5 Turbo: The first price cut sets the benchmark

On March 1, 2023, OpenAI released **GPT-3.5 Turbo**, priced at **$0.002/1K tokens** — **30 times cheaper** than Davinci.[^2]

This price cut was not driven by competition — the API market in early 2023 still had no real challengers. It came from engineering optimization: GPT-3.5's inference efficiency improved dramatically, and the cost structure allowed OpenAI to proactively lower prices. OpenAI's strategy was clear: lock in the developer ecosystem with low prices, leaving no price gap for latecomers.

Meanwhile, the GPT-4 API was released on March 14, 2023, priced at **$0.03/1K input + $0.06/1K output** ($30/$60 per 1M).[^3] This defined another price anchor: frontier models are worth this price. GPT-4's pricing did not drop for the next ten months — because no competitor could match its performance.

In August 2023, GPT-3.5 Turbo's 4K-context version dropped to **$0.0015/1K input, $0.002/1K output**; the November 2023 GPT-4 Turbo dropped to **$0.01/1K input, $0.03/1K output**.[^4][^5] But these were incremental adjustments by OpenAI — without external competitors, prices would only fall slowly.

## III. Anthropic and Google enter the arena: Tiered competition takes shape

From March 2023 to early 2024, real competitors began appearing in the API market — but the pricing logic was still "benchmark against GPT-4, price slightly lower":

- **Claude 3 Opus** (2024-03, Anthropic): **$15/$75 per 1M** — benchmarked against GPT-4 but slightly more expensive[^6]
- **Claude 3 Sonnet** (2024-03): **$3/$15 per 1M** — "mid-range" pricing
- **Claude 3 Haiku** (2024-03): **$0.25/$1.25 per 1M** — anchored against GPT-3.5 Turbo
- **Gemini 1.5 Pro** (2024-05, Google): **$3.50/$10.50 per 1M** (below 128K context)[^7]

The implicit assumption of this pricing system was: **the stronger the capability, the higher the price.** Opus was most expensive, Sonnet in the middle, Haiku cheapest — a direct continuation of the Davinci/Curie/Babbage/Ada logic from the GPT-4 era. In the first half of 2024, no one questioned this logic.

## IV. DeepSeek-V2: The first rupture of the pricing system (2024-05)

On May 6, 2024, DeepSeek released the V2 model with API pricing at **¥1/1M input, ¥2/1M output** — approximately **$0.14/$0.28 per 1M** at the prevailing exchange rate.[^8]

In a performance-comparable context (V2 approached GPT-4 Turbo on multiple benchmarks), this price was roughly **1/70th** of GPT-4 Turbo.

This was not "slightly cheaper" — it was **the tearing apart of the pricing system.** V2 used a MoE architecture (MLA + DeepSeekMoE) to achieve a cliff-edge drop in inference cost, enabling a near-GPT-4-level model to be served at marginal costs approaching open-source deployment. The DeepSeek team clearly had no intention of extracting a "capability premium" — they passed the cost advantage directly to users.

V2's pricing directly triggered a chain reaction in the Chinese market. The Chinese AI community in May 2024 entered an extraordinary **price war**:

- **2024-05-15**: ByteDance released the Doubao large model, **Pro-32k priced at ¥0.0008/1K** (approximately ¥0.8/1M), claiming "99.3% cheaper than the industry"[^9]
- **2024-05-21**: Alibaba Cloud's Tongyi Qianwen GPT-4-class flagship model Qwen-Long cut API prices by **97%**, down to ¥0.0005/1K[^10]
- **Same day**: Baidu's ERNIE Speed and ERNIE Lite announced **free access**[^11]
- **2024-06-05**: Zhipu AI reduced GLM-4 pricing to **¥0.1/1M**; GLM-4 Flash went free[^12]
- iFlytek, 01.AI, MiniMax and others followed with price cuts or free offerings

The root cause of this price war was V2: when an MIT-licensed open-source model with near-GPT-4 performance set its API at ¥1/1M, the entire old coordinate system of "capability = price" shattered. Every player relying on API premiums was forced to respond — either cut prices, go free, or prove that their model was genuinely worth a 70x price difference.

## V. Second half of 2024: GPT-4o price cut and DeepSeek-V3's second wave

On May 13, 2024, OpenAI released **GPT-4o**, priced at **$5/$15 per 1M** — another 50% reduction from GPT-4 Turbo.[^13] GPT-4o mini (2024-07-18) further dropped to **$0.15/$0.60 per 1M**.[^14] These price cuts were not entirely driven by competition — GPT-4o's inference efficiency was itself significantly improved over GPT-4 — but competitive pressure undoubtedly accelerated the pace.

On December 26, 2024, DeepSeek released **V3** — performance benchmarked against GPT-4o, API priced at **¥1/1M input (cache hit), ¥2/1M (cache miss), ¥8/1M output**.[^15] Training cost was only approximately $5.6 million. V3's pricing was not "cheaper than OpenAI" — it was **pricing based on its own cost structure**, and OpenAI's prices appeared absurd in comparison.

## VI. 2025: Free becomes the default, GPT-4.5 becomes the last anomaly

By early 2025, the API pricing landscape had undergone a fundamental transformation:

- **DeepSeek-R1** (2025-01-20): **¥1/¥4/¥16 per 1M** — a reasoning model priced at approximately **3%** of OpenAI o1[^16]
- **OpenAI o3-mini** (2025-01-31): **$1.10/$4.40 per 1M** — the cheapest reasoning model in OpenAI's history, clearly under R1 pricing pressure[^17]
- **Claude 3.5 Haiku** (2024-10): **$0.80/$4 per 1M**[^18]
- **Gemini 2.0 Flash** (2024-12): **$0.10/$0.40 per 1M**; with generous free tiers
- **GPT-4.5** (2025-02-27): **$75/$150 per 1M** — amid universal price cuts, GPT-4.5's pricing was the sole contrarian

GPT-4.5's $75/$150 pricing revealed a deep contradiction: it was 10–15 times more expensive than GPT-4o ($5/$15), but on most tasks did not deliver a corresponding 10–15x capability improvement. Shortly after, OpenAI announced that GPT-4.5 would be retired in July 2025 — a high-priced model had no survival space in the era of price wars.[^19]

By mid-2025, "free" was becoming the default state for an increasing number of model tiers. Beyond Google Gemini Flash's free tiers, DeepSeek's free API, Alibaba Tongyi Qianwen's free tier, Baidu's free ERNIE service, Zhipu's free GLM-Flash — free was no longer a marketing tactic but the **commodification of baseline capabilities.**

## VII. The essence of the price war: From scarcity to abundance, from premium to cost pricing

The five-year large language model API price war is essentially the superposition of three forces:

**Cost reduction**: From GPT-3 to GPT-4o, engineering innovations — MoE architecture (MLA, DeepSeekMoE), FP8 training, quantized inference, Multi-Token Prediction — compressed inference costs by one to two orders of magnitude. What it cost to run one inference on a 175B dense model in 2020 could run 70 inferences on a 671B MoE model in 2025.

**Open-source pressure**: DeepSeek's MIT open-sourcing was the decisive catalyst of the price war. When a GPT-4o-class model can be downloaded for free, deployed locally, and run inference at marginal cost, API pricing can no longer be based on "how much this capability is worth" but only on "marginal cost plus a small margin." From V2 to V3 to R1, DeepSeek pushed pricing closer to the cost line with every step.

**The shattering of the scarcity illusion**: From 2020 to 2023, the industry defaulted to the belief that "frontier AI capabilities are scarce, therefore premium-priced." But this logic had a premise: frontier capabilities could only be delivered by a handful of companies. When DeepSeek proved that frontier capabilities could be delivered via open source at extremely low cost, the scarcity narrative shattered. Frontier capabilities were no longer moats — they increasingly resembled water and electricity: essential, but not premium-priced.

This is why GPT-4.5's $75/$150 pricing looked so jarring. It was not "expensive" — it was "still using 2023 logic to price a 2025 product." In 2023, scarcity was real — there was only one GPT-4. In 2025, there were too many alternatives. When a V3 or R1 is available for near-free, $75/$150 is not a luxury price — it is a wrong price.

## Commentary

The five years of the large language model API price war can be summarized in one sentence: **capabilities rose, prices collapsed.**

This is not market failure; on the contrary, it is the healthiest signal of competition. The high prices of 2020–2023 were not "fair prices" but seller pricing under conditions of scarcity. The low prices of 2024–2025 are not "malicious competition" but value correction driven by cost reduction and open-source pressure. Behind every price collapse, there was a technical breakthrough — MoE, MLA, FP8, open source, pure RL reasoning — these were not reasons for price cuts; these were the causes of price cuts.

But one question merits vigilance: if prices continue approaching zero, who will keep investing in base models? The endpoint of the price war is not "everything free" — it is "value migrating from the model layer to the application layer." Models increasingly resemble water and electricity — indispensable, but not premium-priced. Real value will accrue above the model: in targeted fine-tuning, vertical-scenario optimization, agent system orchestration, and proprietary data utilization. This is not a bad thing, but base-model company investors need to recalculate: when your product may be free, where is your business model?

OpenAI's GPT-4.5 tried to swim against the current — charging $75/$150 in an era when free models proliferated. Its failure was not a failure of commercial execution but a misreading of the direction of history. The price war has no losers — those with the ability to cut prices survive, those without are eliminated. The only losers are those still living in 2023.

---

*This piece was compiled by the Endfield Industrial Historical Archives team: Zhuang Fangyi (lead writer).*

---

(DeepSeek's pricing strategy and technical path are covered in the "DeepSeek" chronicle.)

[^1]: OpenAI, "OpenAI API", 2020-06-11. https://openai.com/blog/openai-api (IA archive: https://web.archive.org/web/20240501200000/https://openai.com/blog/openai-api)
[^2]: OpenAI, "Introducing ChatGPT and GPT-3.5 Turbo API", 2023-03-01. https://openai.com/index/introducing-chatgpt-and-whisper-apis/
[^3]: OpenAI, "GPT-4", 2023-03-14. https://openai.com/index/gpt-4-research/
[^4]: OpenAI Blog, "GPT-3.5 Turbo fine-tuning and API updates", 2023-08-22. https://openai.com/index/gpt-3-5-turbo-fine-tuning-and-api-updates/
[^5]: OpenAI, "New models and developer products announced at DevDay", 2023-11-06. https://openai.com/index/new-models-and-developer-products-announced-at-devday/
[^6]: Anthropic, "Introducing the next generation of Claude", 2024-03-04. https://www.anthropic.com/news/claude-3-family
[^7]: Google, "Gemini 1.5 Pro and 1.5 Flash GA", 2024-05-14. https://blog.google/technology/ai/google-gemini-update-may-2024/
[^8]: DeepSeek-AI, "DeepSeek-V2", arXiv:2405.04434, 2024-05. https://arxiv.org/abs/2405.04434
[^9]: ByteDance, "Doubao Large Model Officially Released", 2024-05-15. https://www.volcengine.com/theme/2225822-T-64-1
[^10]: Alibaba Cloud, "Tongyi Qianwen Price Reduction Notice", 2024-05-21. https://help.aliyun.com/zh/model-studio/getting-started/billing-for-tongyiqianwen
[^11]: Baidu Cloud, "ERNIE Speed and ERNIE Lite Made Free", 2024-05-21.
[^12]: Zhipu AI, "GLM Series Model Price Adjustment", 2024-06-05.
[^13]: OpenAI, "Hello GPT-4o", 2024-05-13. https://openai.com/index/hello-gpt-4o/
[^14]: OpenAI, "GPT-4o mini: advancing cost-efficient intelligence", 2024-07-18. https://openai.com/index/gpt-4o-mini-advancing-cost-efficient-intelligence/
[^15]: DeepSeek-AI, "DeepSeek-V3 Technical Report", arXiv:2412.19437, 2024-12-27. https://arxiv.org/abs/2412.19437
[^16]: DeepSeek-AI, "DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning", arXiv:2501.12948, 2025-01-22. https://arxiv.org/abs/2501.12948
[^17]: OpenAI, "OpenAI o3-mini", 2025-01-31. https://openai.com/index/openai-o3-mini/
[^18]: Anthropic, "Claude 3.5 Haiku", 2024-10-22. https://www.anthropic.com/news/claude-3-5-haiku
[^19]: OpenAI, "Introducing GPT-4.5", 2025-02-27. https://openai.com/index/introducing-gpt-4-5/
