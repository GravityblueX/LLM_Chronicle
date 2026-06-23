# The Economics of Inference

> Training a frontier model costs tens to hundreds of millions of dollars — but that cost is one-time. Inferring from a frontier model processes billions of requests daily — that cost is perpetual. As model training costs converge and capability gaps narrow, the competitive focus of the AI industry is shifting from "who can train the best model" to "who can run the best model at the lowest cost." Inference is no longer an accessory to training — it is the lifeline that determines whether business models can work and whether AI capabilities can reach the masses.

---

## I. The inversion of cost structure

The economics of the large language model industry are undergoing a structural inversion.

Before 2023, the industry's core concern was training cost — GPT-4's training cost was estimated at approximately $100 million, and Meta consumed roughly 30.8M H100 GPU hours training Llama 3 405B.[^1] Whether a company could train a frontier model, and whether it had enough compute to do so, was the first threshold determining corporate survival.

But by 2025–2026, while the absolute value of training costs continued to rise, their **relative significance** had fundamentally changed. DeepSeek V3 used 2.788M H800 GPU hours (approximately $5.57 million) to train a model comparable to GPT-4o — a figure that seemed nearly impossible in 2023.[^2] Open-source model distillation and fine-tuning further lowered the barrier to "acquiring frontier capabilities." Training a frontier model remains expensive, but it is no longer unimaginably so.

Meanwhile, the scale of inference costs is growing exponentially. ChatGPT processed hundreds of millions of requests daily in early 2023; by 2025, global LLM API daily call volume had reached the order of tens of billions. Each request consumes GPU time, memory, and electricity — these are variable costs, growing linearly with user count. If a subscriber uses the service heavily, their monthly inference cost may far exceed the subscription fee itself.

This is the core contradiction of inference economics: **training is a fixed cost, inference is a variable cost. When both the number of models and user scale grow simultaneously, the total variable cost will far exceed the fixed cost.**

Inference cost has therefore become the key variable determining which models survive, which business models work, and which AI capabilities reach ordinary users. It is not a technical detail — it is one of the foundations of the entire AI industry.

---

## II. 1/370: The inference cost cliff

The decline in inference costs is not linear but cliff-like.

In 2020, GPT-3 Davinci's API pricing was $60 per million tokens (see *The Large Language Model Price History Table*).[^3] The logic behind this pricing was not cost but scarcity — at the time, there was only one callable 175B-parameter API, with no competitors and no bargaining power for users.

By April 2026, DeepSeek V4's API pricing was reportedly only approximately **1/370th** of GPT-5.5's.[^4] Over six years, the per-unit inference cost of the most frontier model dropped by approximately two orders of magnitude — not at the speed of Moore's Law, but at the speed of an avalanche.

Three pillars underpin this cliff.

**The first pillar is architectural efficiency.** DeepSeek's MLA (Multi-head Latent Attention) compresses KV cache to 5%–10% of its original size — the "memory usage" component of inference cost drops directly by 90% (see *The Inference Optimization Chronicle* and *The DeepSeek Chronicle*).[^5] MoE architecture enables a 671B total-parameter model to activate only 37B parameters during inference — forward pass compute drops to a fraction of a dense model's.[^2] The combination of MLA + MoE + FP8 makes DeepSeek's inference cost structure one to two orders of magnitude lower than a dense Transformer model of equivalent performance.

**The second pillar is inference framework optimization.** FlashAttention reduced attention's memory usage from O(n²) to O(n).[^6] vLLM's PagedAttention improved memory utilization from 50%–60% to over 95%.[^7] Continuous batching eliminated the efficiency loss in traditional batching where short requests are held back by long ones. Speculative decoding uses a small model's draft plus a large model's verification, boosting inference throughput 2–4× without quality loss.[^8] Each of these optimizations in isolation is an "engineering improvement"; stacked together, they amount to a one-to-two-order-of-magnitude cost difference.

**The third pillar is open-source pressure.** DeepSeek V3 began fully open-sourcing under the MIT license — anyone can download weights and run them on their own servers at marginal cost.[^2] When a GPT-4o-class model can be deployed for free, API pricing can no longer be based on "how much this capability is worth" but only on "marginal cost of service plus a small margin." The existence of open-source models pushes the entire industry's pricing logic from "capability premium" toward "cost pricing."

The combined result of these three pillars is: inference costs are declining at a rate far exceeding hardware Moore's Law. Every year, the inference cost of an equivalent-capability model is lower than the previous year by an order of magnitude. And this trend — at least as of 2026 — shows no sign of slowing.

---

## III. Inference chips: The rise of specialized hardware

The decline in inference costs comes not only from software optimization — fundamental changes are also occurring at the hardware level.

Traditionally, large language model inference runs on general-purpose GPUs — primarily NVIDIA's A100 and H100/H200. These GPUs were designed for both training and inference, but in pure inference scenarios they exhibit structural redundancy: high-precision compute units, large-scale interconnects, and large-capacity HBM needed for training are underutilized during inference.

In 2024–2025, a group of inference-focused chip companies began to emerge:

**Groq**, founded by former Google TPU architect Jonathan Ross, developed the LPU (Language Processing Unit).[^9] The LPU's core characteristic is **deterministic execution** — no cache misses, no branch prediction failures, no random memory access latency; every computation step has a deterministic timing. This enables the LPU to achieve extremely low latency and extremely high throughput in inference scenarios. Groq demonstrated multiple inference speed records on Llama models in 2024–2025 — token generation speeds an order of magnitude faster than equivalent-scale GPU deployments.[^9]

**Cerebras Systems** took an even more radical approach — the **Wafer-Scale Engine (WSE)**.[^10] Instead of making chips smaller, it made an entire wafer into a single chip — the WSE-2 features 850,000 compute cores and 2.6TB of on-chip SRAM. Cerebras demonstrated WSE-based inference performance in 2025, achieving throughput far exceeding GPU clusters in specific scenarios.[^10]

**NVIDIA** has not stood idle. The H200 increased HBM capacity (141GB); the B100/B200 further improved inference efficiency. NVIDIA's moat lies not only in hardware but in software ecosystem: CUDA, TensorRT-LLM, and the Triton inference server constitute a lock-in effect that developers cannot easily migrate away from.[^11]

The competitive landscape of inference chips was becoming clearer by early 2026: NVIDIA remains the default choice, but in large-scale inference deployments, Groq's and Cerebras' specialized solutions are entering the picture — especially in latency-sensitive and throughput-intensive scenarios. The diversification of inference hardware means that inference cost decline will not rely solely on software optimization — the evolution of hardware itself is also accelerating the process.

---

## IV. Business model competition: Per-token vs. subscription

Changes in inference costs are reshaping the business models of AI products. Two mainstream models currently exist — per-token billing and subscriptions — representing two fundamentally different economic logics.

**Per-token billing** (API model) is a pricing approach for developers. Users pay based on actual token consumption; pricing is transparent and elastic. OpenAI API, DeepSeek API, Google Gemini API, and Anthropic Claude API all use this model.[^12]

The advantage of per-token billing is **direct cost linkage**: the provider's revenue is proportional to inference consumption, and pricing can precisely reflect inference costs. The disadvantage is **demand uncertainty**: users may hesitate to use the service due to unpredictable costs, especially in scenarios like long conversations and batch processing. DeepSeek's strategy is to push per-token pricing to extremely low levels — when the API price is only 1/370th of competitors', users' cost anxiety nearly vanishes.

**Subscriptions** (ChatGPT Plus at $20/month, Claude Pro at $20/month, etc.) target end users.[^13] Users pay a fixed monthly fee for a certain quota of model access.

The advantage of subscriptions is **revenue predictability**: monthly users × monthly fee = stable revenue stream. The disadvantage is **cost-revenue decoupling**: heavy users may consume inference resources far exceeding $20 per month — reportedly, OpenAI's $20 subscription was loss-making for heavy users during early GPT-4.[^13] Light users effectively subsidized heavy users' costs.

The decline in inference costs is changing this balance. When inference costs are low enough, the subscription model's "heavy user loss" problem naturally resolves — $20 per month can support substantial usage. This is why inference optimization is not merely a technical question — it determines whether the "unlimited use for $20" user experience is sustainable.

A hybrid trend emerged in 2025–2026: multiple companies simultaneously offer subscriptions and per-token API billing, letting users choose as needed. OpenAI's ChatGPT Plus/Pro/Enterprise correspond to different subscription tiers, while API services target developers. DeepSeek provides ultra-low-priced APIs while offering free access to end users.[^4] This dual-track approach is not a compromise — it is the natural optimal solution that emerges after inference costs decline.

---

## V. The deeper logic of inference economics

Inference economics is not just about "who is cheaper" — it reveals a deep structural change in the AI industry.

**Capability convergence is the prerequisite for inference cost competition.** In 2023, a clear quality gap existed between GPT-4 and other models — users were willing to pay a premium for a better model. By 2025–2026, the gap among GPT-5.5, Claude 4, Gemini 3.x, DeepSeek V4, and Qwen 3 had narrowed to within 5%–10% on most tasks. When capability gaps shrink, price gaps become decisive — "370 times cheaper with capability gap within 10%" is more persuasive than "370 times more expensive but 10% better" in most business scenarios.

**Inference cost determines the pace of AI adoption.** From $60/million tokens in 2020 to under $0.10/million tokens in 2026 — every order-of-magnitude reduction in inference cost expands the addressable user base by an order of magnitude. In the $60 era, AI was a tool for elite research institutions. In the $0.10 era, AI can be embedded in every application, every device, every interaction. The ultimate significance of inference optimization lies not in "cheaper" — but in "more people can use it."

**Value migrates from the model layer to the application layer.** When inference costs approach zero, the commercial value of the base model itself will be compressed — it increasingly resembles water and electricity: indispensable, but not premium-priced. Real value will accrue above the model: in targeted fine-tuning, vertical-scenario optimization, agent system orchestration, and proprietary data utilization. DeepSeek can price its API at 1/370th because it doesn't monetize through APIs — but companies dependent on API revenue must answer: when the model itself may be free, where is your business model?[^14]

This is not a bad thing. The decline in inference costs is the true driver of AI democratization — "engineering technical details" like FlashAttention, MLA, FP8, and PagedAttention are the underlying infrastructure that enables more people to access AI capabilities. Every historical technology adoption — electricity, the internet, mobile communications — was accompanied by order-of-magnitude reductions in core costs. AI's inference cost curve is repeating this pattern.

---

## Commentary

The story of inference economics can be summarized in one sentence: **from "how much is the model worth" to "how much does inference cost."**

In 2020, the industry defaulted to the belief that frontier AI capabilities were scarce and therefore premium-priced. This assumption held until 2023 — there was only one GPT-4, with no alternatives. But DeepSeek V2's MLA architecture in 2024 proved that inference costs could be reduced by 90%; V3's $5.6M training cost in 2024 proved that frontier capabilities are not prohibitively expensive; R1's MIT open source in 2025 proved that the best reasoning models can be obtained for free. Each step pushed the "scarcity" narrative toward collapse.

By 2026, GPT-5.5 is priced at $130/million tokens while DeepSeek V4 is priced at approximately $0.35/million tokens — a 370× price gap that is no longer "a bit better so a bit more expensive" but two entirely different cost structures colliding. OpenAI is still using 2023's scarcity logic to price a 2026 product. DeepSeek uses 2026's cost structure to price a 2026 product. History tells us that when these two logics collide, the latter has the better odds.

But the endgame of inference economics is not "everything free." Free water still requires pipes, treatment plants, and maintenance. The rise of inference chips (Groq, Cerebras) shows that even as inference costs approach zero, "delivering inference to users at zero cost" itself still has value. The endgame of inference economics is: **the model layer becomes infrastructure, and value shifts up to the application and distribution layers.** Just as in the internet era, the TCP/IP protocol is free but Google is worth a trillion — not because the protocol doesn't matter, but because the applications built on top of it are more valuable.

For base model companies, this is both a threat and an opportunity. The threat is — if the model itself cannot command a premium, a business model relying purely on model API revenue will be unsustainable. The opportunity is — if inference costs are low enough, AI can penetrate every scenario previously unreachable due to cost. A larger market, a lower unit price — this is not necessarily a worse business, but it is certainly a different business.

---

*This piece was compiled by the Endfield Industrial Historical Archives team: Zhuang Fangyi (lead writer).*

---

[^1]: Meta AI, "Llama 3 Herd of Models", arXiv:2407.21783, 2024-07. Llama 3 405B training consumed approximately 30.8M H100 GPU hours. The $100M figure for GPT-4 training cost comes from widely cited industry estimates; OpenAI has not publicly confirmed it. https://arxiv.org/abs/2407.21783
[^2]: DeepSeek-AI et al., "DeepSeek-V3 Technical Report", arXiv:2412.19437, 2024-12-27. Training consumed 2.788M H800 GPU hours, approximately $5.576 million. https://arxiv.org/abs/2412.19437
[^3]: OpenAI, "OpenAI API", 2020-06-11. GPT-3 Davinci pricing: $0.06/1K tokens = $60/1M tokens. See *The Large Language Model Price History Table*. https://openai.com/blog/openai-api
[^4]: DeepSeek V4 (released 2026-04-24) API pricing reportedly approximately 1/370th of GPT-5.5. Multiple Chinese tech media outlets (QbitAI, Synced, etc.) reported this figure. Exact conversion varies by exchange rate and GPT-5.5's specific pricing. See *The DeepSeek Chronicle*, §2.5.
[^5]: DeepSeek-AI, "DeepSeek-V2: A Strong, Economical, and Efficient Mixture-of-Experts Language Model", arXiv:2405.04434, 2024-05-07. MLA compresses KV cache to 5%–10% of original. See *The Inference Optimization Chronicle*, §2.2. https://arxiv.org/abs/2405.04434
[^6]: Tri Dao et al., "FlashAttention", NeurIPS 2022, arXiv:2205.14135. See *The Inference Optimization Chronicle*, §2.1.
[^7]: Kwon et al., "Efficient Memory Management for Large Language Model Serving with PagedAttention" (vLLM), SOSP 2023, arXiv:2309.06180. See *The Inference Optimization Chronicle*, §5.1. https://arxiv.org/abs/2309.06180
[^8]: Leviathan et al., "Fast Inference from Transformers via Speculative Decoding", ICML 2023, arXiv:2211.17192. See *The Inference Optimization Chronicle*, §4.
[^9]: Groq (formerly Groq, Inc.) was founded by Jonathan Ross in 2016. Ross was one of the principal architects of Google TPU v1. Groq LPU was publicly demonstrated in 2024, achieving >300 tokens/sec generation speed on Llama 2 70B. In 2025, Groq announced large-scale inference deployment plans. Groq Cloud opened for public beta in 2024.
[^10]: Cerebras Systems, "Wafer-Scale Deep Learning" (WSE), Hot Chips 2019; Cerebras CS-2 with WSE-2 (2021). WSE-2 features 850,000 cores and 2.6TB SRAM. Cerebras launched inference optimization solutions in 2024–2025. https://cerebras.ai/
[^11]: NVIDIA, "NVIDIA H200 Tensor Core GPU Datasheet", 2023-11. H200 equipped with 141GB HBM3e. B100/B200 announced at 2024 GTC. TensorRT-LLM is NVIDIA's inference optimization framework. See *The Inference Optimization Chronicle*, §5.2.
[^12]: OpenAI API Pricing: https://openai.com/pricing; DeepSeek API Pricing: https://platform.deepseek.com/api-docs/pricing; Anthropic API Pricing: https://www.anthropic.com/pricing; Google Gemini API Pricing: https://ai.google.dev/pricing
[^13]: ChatGPT Plus launched in 2023-02 at $20/month. ChatGPT Pro launched in 2024-12 at $200/month. Reports indicate that OpenAI's $20 subscription was loss-making for heavy users during early GPT-4. See *The Price War Commentary*, §6.
[^14]: High-Flyer Quant, the entity behind DeepSeek, does not monetize through AI; its core revenue source is quantitative investment. This "no need to monetize AI" structure allows it to price models far below cost-recovery levels — see *The DeepSeek Chronicle*, Commentary.
