# DeepSeek Family

> From a 67B open-source model in late 2023 that was "respectable but not earth-shattering," to an industry alternative in 2026 whose API pricing stands at roughly 1/370th of GPT-5.5 — DeepSeek achieved this in just five generations of models. The journey began with a quiet debut and culminated in a global restructuring of the AI industry's cost structure. MoE → MLA → MTP → extreme cost optimization — each generational iteration was never about showing off, but about making the proposition that "frontier models do not require frontier budgets" ever more irrefutable.

---

## I. Overview

DeepSeek (深度求索) is an open-source language model series launched in late 2023 by the AI research institution affiliated with High-Flyer Quant (幻方量化). Its first model, DeepSeek-LLM (67B), went virtually unnoticed; two and a half years later, its fourth-generation model, V4, is being adopted by developers across China as the core replacement for "the three dominant foreign providers."

What makes the DeepSeek family unique in the history of open-source models is this: it does not push any single dimension to its extreme — it is not the largest in parameter count, does not top every benchmark, and was not the first to release a MoE model. What it pushes to the extreme is **cost efficiency**. From V2 to V3 to R1 to V4, every generation answers the same question: if money is not the constraint, what is? And its answer is: **achieve greater capability with fewer resources, then return the savings as lower prices to users.**

This is not a market pricing strategy — it is a technical strategy. MLA compresses KV Cache by 90% not to make a paper look good, but to reduce inference costs to one-tenth. The MoE architecture is not designed for publications; it enables 671B total parameters to run on the compute of 37B. MTP is not another arXiv paper; it makes every training token more efficient. Together, these three technologies form the deepest cost moat in the large language model industry.

(For the background of High-Flyer Quant behind DeepSeek, Liang Wenfeng's decision-making logic, and the influence of quantitative trading genes on DeepSeek's technical roadmap, see the *DeepSeek Annals*. This article focuses on the technical evolution of the model family.)

---

## II. Generational Evolution

| Generation | Release Date | Parameter Scale | Core Innovation | License | API Pricing Milestone |
|------------|--------------|-----------------|-----------------|---------|----------------------|
| DeepSeek-LLM | 2023-11-29 | 7B/67B | Scaling law research + DPO alignment | Restricted model weights | — |
| DeepSeek-V2 | 2024-05-06 | 236B/21B (MoE) | **MLA** (90% KV Cache compression) | Same as above | ~1% of GPT-4 |
| DeepSeek-V3 | 2024-12-26 | 671B/37B (MoE) | MTP + FP8 + auxiliary-loss-free MoE | **MIT** | Training cost only $5.6M |
| DeepSeek-R1 | 2025-01-20 | Based on V3 | Pure RL reasoning + GRPO | **MIT** (including chain-of-thought) | ~3% of o1 |
| DeepSeek-V4 | 2026-04-24 | Undisclosed | Pro/Flash dual variants + 1M context | **MIT** | ~1/370th of GPT-5.5 |

### 2.1 DeepSeek-LLM: The quiet foundation

On November 29, 2023, DeepSeek released its first language model, DeepSeek-LLM, available in 7B and 67B sizes, with both Base and Chat versions open-sourced simultaneously.[^1]

In the AI landscape of late 2023, 67B parameters were unremarkable — Llama 2 already had 70B, and GPT-3 had long existed at 175B. But DeepSeek-LLM did three things that seemed like mere "choices" at the time, yet in hindsight proved to be "inevitabilities."

First, **DPO replaced RLHF**. Rather than following the then-dominant RLHF approach (reward model + PPO optimization) for aligning the Chat model, DeepSeek adopted DPO — a lighter, more stable alignment method published by Rafailov et al. just six months prior. This laid the methodological groundwork for R1-Zero's later leap of bypassing SFT entirely and training reasoning through RL alone.

Second, **systematic scaling law research**. The paper independently verified optimal compute-data ratios for open-source configurations and articulated a philosophy of "longtermism" — that training data and architecture design should not optimize for a single release, but for the scalability of future iterations. This mindset would come to define every subsequent DeepSeek model.

Third, **open-source from day one**. Although the model weights were released under a restricted license (not MIT), this posture was still uncommon among domestic Chinese LLM developers at the time.

In terms of performance, DeepSeek-LLM 67B outperformed Llama 2 70B across benchmarks including HumanEval (73.78%), GSM8K (84.1%), MATH (32.6%), and MMLU (71.3%), with the Chat version matching GPT-3.5 on open-ended evaluations.[^1]

(See *Chronicles: November 2023*)

### 2.2 DeepSeek-V2: MLA and the price slayer

On May 6, 2024, DeepSeek released V2. This was the first model in the DeepSeek series to truly alter the industry landscape.[^2]

**Architecture**: 236B total parameters, 21B active parameters, MoE architecture. But V2's true weapon of disruption was not MoE — it was **MLA (Multi-head Latent Attention)**.

Traditional multi-head attention requires caching Key and Value matrices for every token, with KV Cache growing linearly with sequence length — the single largest bottleneck for inference costs. MLA's core idea is to project KV representations into a low-dimensional latent space and reconstruct attention from it, compressing KV Cache to 5–10% of its original size without sacrificing attention quality.[^2]

This technique may look like an unassuming engineering optimization. But its consequences are revolutionary: a 90% compression in KV Cache means a 90% reduction in inference cost. DeepSeek-V2's API pricing could be pushed to roughly 1% of GPT-4 Turbo — not through burning capital, but through MLA.

In terms of performance, V2 achieved 80.3% on MMLU, approaching GPT-4. But what the industry remembered was not the benchmark numbers — it was the 1% pricing. V2 triggered a genuine price war in the Chinese AI community: Alibaba's Qwen, Baidu's ERNIE Bot, Zhipu's GLM, and ByteDance's Doubao all slashed prices dramatically within weeks. In less than a month, China's AI API prices fell to less than one-tenth of their levels at the start of the year.[^3]

V2 is the most underrated model in large model history. R1's overnight evaporation of $589 billion in NVIDIA's market capitalization captured the world's spotlight — but without V2's MLA, there would have been no R1. MLA is the cost foundation for all subsequent DeepSeek models.

(See *Chronicles: May 2024*)

### 2.3 DeepSeek-V3: A frontier model for $5.6M

On December 26, 2024, DeepSeek released V3: 671B MoE total parameters (37B active), with performance comparable to GPT-4o and Claude 3.5 Sonnet. But the most important figure was a cost figure: pre-training consumed only 2.788M H800 GPU-hours, amounting to approximately **$5.576 million** at prevailing market prices.[^4]

V3 advanced the trajectory inherited from V2 along three technical directions:

**MLA scaling**: Extending V2's MLA to the 671B scale in conjunction with MoE. During inference, only 37B parameters' worth of attention computation is activated per token, while benefiting from the knowledge capacity of 671B parameters' experts; KV Cache compression remains effective, keeping inference costs to a fraction of comparably performing dense models.

**DeepSeekMoE + auxiliary-loss-free load balancing**: Employing fine-grained expert partitioning with 1 shared expert and 256 routed experts, activating 8 experts per token. For the first time, load balancing was achieved without auxiliary loss — routing was controlled through dynamic bias adjustment, avoiding the traditional MoE trade-off where load balancing comes at the expense of model quality.[^4]

**Multi-Token Prediction (MTP)**: Predicting multiple subsequent tokens at each position simultaneously, rather than the traditional single-token prediction. MTP significantly improved sample efficiency and final performance — every batch of training data was utilized more thoroughly. Demonstrating MTP's effectiveness at the 671B scale marked one of the industry's inflection points from "stacking more data" to "using data more intelligently."

Additionally, V3 adopted FP8 mixed-precision training throughout — one of the first models at the 600B+ scale to do so. The entire pre-training was completed in approximately two months, during which **no irrecoverable loss spikes requiring rollback occurred** — an extreme testament to the stability of its engineering pipeline.[^4]

In terms of performance, V3 traded wins with GPT-4o across benchmarks including MMLU (88.5%), MATH 500 (90.2%), and HumanEval (92.1%). On Chinese-language tasks, it led comprehensively.[^4]

The real shockwave from V3 was not the benchmark numbers themselves — the industry had already grown accustomed to GPT-4o-level performance — but the figure of $5.6 million. Over the preceding four years, the industry's default assumption was that tens to hundreds of millions of dollars in compute were required. V3 broke through that wall with under $6 million, demonstrating three things: compute is not a moat, MoE is the optimal solution for open source, and frontier models can be built even on restricted hardware like the H800.[^4]

(See *Chronicles: December 2024*)

### 2.4 DeepSeek-R1: MIT open-source and a $589 billion shockwave

On January 20, 2025, DeepSeek released R1 — a reasoning model built upon V3-Base. This is DeepSeek's most famous model, and the single AI product that has triggered the largest stock market disruption in history.[^5]

**Technical approach**: R1's core technical innovation unfolded in two steps.

The first step was **R1-Zero**: bypassing supervised fine-tuning (SFT) entirely, trained solely through GRPO (Group Relative Policy Optimization) reinforcement learning. All rewards were rule-based — whether the answer was correct, whether the format was correct. No model-based reward functions were used.

Pure RL training gave rise to unexpected emergent behavior: the model spontaneously learned "aha moments" during training — on a given problem, it would suddenly pause, re-evaluate its own reasoning process in human-readable language, and voluntarily allocate more thinking time. The DeepSeek team stated that this was not programmed in, but developed autonomously through the model's interaction with the RL environment.[^5]

The second step was **R1**: building on R1-Zero by introducing cold-start SFT data (several thousand high-quality chain-of-thought exemplars) before conducting further RL training. This resolved R1-Zero's output readability issues while preserving its reasoning capabilities.

**Performance**: R1 matched OpenAI's o1 across the board on AIME 2024 (79.8% vs o1's 79.2%), MATH-500 (97.3% vs o1's 96.4%), Codeforces (96.3rd percentile vs o1's 96.6th percentile), and SWE-bench Verified (49.2% vs o1's 48.9%).[^5]

**MIT open-source**: R1 was fully open-sourced under the MIT license — weights, code, methodology, including chain-of-thought outputs. OpenAI's o1 deliberately concealed its chain-of-thought and charged a $200/month subscription fee. R1 delivered an equivalently capable model to the entire world, completely free and completely transparent.

**Shockwave**: On January 27, 2025, DeepSeek surpassed ChatGPT to claim the top spot on the Apple App Store in the United States. On the same day, NVIDIA's stock price plunged 17%, erasing approximately $589 billion in market capitalization in a single trading session — the largest single-day loss in U.S. stock market history. What the market feared was not R1 itself, but the reality it revealed: the most advanced AI does not necessarily require the most GPUs.[^6]

Meta internally assembled four dedicated teams to study DeepSeek — focusing respectively on cost reduction, training data, and model architecture restructuring. OpenAI claimed to have evidence that DeepSeek used proprietary model outputs to train R1 (DeepSeek denied these allegations).[^7][^8]

**Aftermath**: On May 28, 2025, the R1-0528 upgrade was released, with AIME 2025 accuracy jumping from 70% to 87.5%. In September of the same year, the R1 paper was formally published in *Nature*, becoming one of the first large model papers to appear in the journal.[^9][^10]

(See *Chronicles: January 2025*, *DeepSeek Annals*)

### 2.5 DeepSeek V4: From challenger to alternative

On April 24, 2026, DeepSeek released V4 Preview — the first major version update in 15 months since R1. V4 offers Pro and Flash variants, supports a 1M token context window, and is open-sourced under the MIT license.[^11]

V4's most eye-catching figure is its price. Multiple Chinese media outlets reported its API pricing at approximately 1/370th of GPT-5.5 (2.5 RMB per million tokens vs. approximately $130 per million tokens).[^12] From the roughly 100x price gap of the V2 era to the approximately 370x gap of the V4 era — suggesting that DeepSeek's efficiency advantage has not narrowed in the 15 months but has actually widened.

But V4's true historical significance lies not in the pricing numbers themselves — but in the timing. One month earlier, the March 18 Incident (March 2026; see *Chronicles: March 2026*) had just demonstrated one thing: Chinese developers' dependence on foreign models constitutes a geopolitical risk. V4 proved one month later that this risk can be neutralized — not through sentiment, not through policy, but through an alternative that costs two orders of magnitude less while performing on the same tier.

In the V2 era, the industry was stunned by the 1% pricing. In the V3 era, the industry was puzzled by the $5.6M training cost. In the R1 era, the industry was unsettled by MIT open-sourcing. In the V4 era, the industry is no longer stunned, puzzled, or unsettled — it is migrating. From "impossible" to "happening now," DeepSeek completed the full arc from technical shock to ecosystem replacement in four generations of models.

(See *Chronicles: April 2026*)

---

## III. Technical trajectory evolution

### 3.1 A throughline: efficiency first

From the initial LLM to V4, DeepSeek's technical trajectory follows one clear主线: **every generation treats efficiency as the core metric, rather than parameter scale or benchmark numbers.** This sets it apart systematically from OpenAI's "bigger is stronger" path from GPT-1 to GPT-4, Google's "more modalities, more capabilities" path, and Anthropic's "safer, more aligned" path.

| Generation | Efficiency focus | Implementation | Effect |
|------------|-----------------|----------------|--------|
| Initial LLM | Training efficiency | Scaling law research, DPO replacing RLHF | Validated optimal compute-data ratios |
| V2 | **Inference efficiency** | MLA (90% KV Cache compression) | Inference cost reduced to 1/100th of GPT-4 |
| V3 | **Training + inference efficiency** | MTP + FP8 + auxiliary-loss-free MoE | Training cost $5.6M, inference even cheaper |
| R1 | **Alignment efficiency** | Pure RL with GRPO + rule-based rewards | Bypassed SFT for reasoning; extremely low alignment cost |
| V4 | **End-to-end efficiency** | Culmination of all accumulated technologies | Price gap widened to 370x |

### 3.2 MoE: DeepSeek's architectural choice

DeepSeek fully adopted the MoE architecture starting with V2, and was among the first teams in the open-source large model space to deploy MoE at scale and validate its viability at frontier performance levels.

MoE's core economic logic is sparse activation — 671B total parameters, but only 37B activated per token. This fundamentally reshapes the cost structure of training and inference: the model benefits from the knowledge capacity of a vast parameter set during training, yet only pays for the activated fraction during inference. The MoE architecture was the first critical lever enabling V3's $5.6M training cost.

DeepSeek's contribution to MoE extends beyond adoption — in V3, it achieved auxiliary-loss-free load balancing, resolving a longstanding issue in traditional MoE: using auxiliary loss to force balanced expert allocation degrades model quality. DeepSeek's dynamic bias method makes MoE routing "adaptive" rather than "coerced."

### 3.3 MLA: The KV Cache revolution

MLA is DeepSeek's most original technical contribution and the inference cost foundation for all subsequent models. The computational cost of traditional attention scales quadratically with sequence length, and KV Cache grows linearly — meaning that long-context inference costs explode. MLA projects KV caches into a low-dimensional latent space and reconstructs them, compressing KV Cache to 5–10% of its original size without sacrificing attention quality.

MLA's value was magnified to its fullest in V3's 128K context and V4's 1M context. When your KV Cache is compressed by 90%, the inference cost for 128K context approaches what others pay for 12K — enabling DeepSeek to support ultra-long context without raising prices, while competitors must charge proportionally more for every doubling of context length.

### 3.4 MTP + FP8: Saving more on the training side

Multi-Token Prediction (MTP) and full FP8 training are DeepSeek's two key innovations in training efficiency.

MTP's core idea is to have the model predict multiple subsequent tokens at each position simultaneously — rather than the traditional single-token prediction. This may appear to be merely a change in training objective, but its effect is that every training sample is utilized more thoroughly — sample efficiency improves dramatically, and the same volume of training data produces a better model.

The significance of full FP8 training lies in doubling compute efficiency. Switching from FP16 to FP8 theoretically allows training twice as many tokens per GPU-hour. V3 was among the first models in the industry to use FP8 throughout at the 600B+ scale.

MTP + FP8 + MoE sparse activation — the combination of these three technologies explains why V3 could match GPT-4o-level performance with 2.788M H800 GPU-hours, whereas Llama 3 405B required approximately 30.8M H100 GPU-hours to reach a comparable level.

---

## IV. Ecosystem and impact

### 4.1 Open-source trajectory: from restricted license to MIT

DeepSeek's open-source posture underwent a critical shift: from the restricted licenses of the initial LLM and V2 to the full adoption of the MIT license beginning with V3.

This transition was not coincidental — it was V3's $5.6M training cost that made "full open-source" strategically rational. If a model costs $100 million to train, open-sourcing means forgoing enormous potential revenue. If a model costs only $5.576 million — and the company behind it does not profit from AI — open-sourcing becomes an almost zero-cost brand offensive.

R1's MIT open-sourcing (including chain-of-thought) was the logical extreme of this reasoning. OpenAI's o1 charged $200/month and concealed chain-of-thought as core intellectual property. DeepSeek released a comparable reasoning model completely, freely, and publicly — including chain-of-thought. This decision not only shocked the industry technically; it shattered the default assumption in business models that "reasoning models = luxury goods."

### 4.2 Price war and industry restructuring

DeepSeek's pricing strategy is the most aggressive in large model commercial history. From V2's 1% to V4's 1/370th, each generation has widened the price gap.

But the key point is — this is not a loss-leading fire sale. MLA reduces inference costs by 90%, so DeepSeek can price at 1% of GPT-4 while still remaining profitable. MoE + MTP + FP8 reduce training costs to $5.6M, so DeepSeek can open-source models for free without undermining its business. There are no subsidies here, no capital-burning — only structural cost advantage.

This structural advantage has placed enormous pressure on the entire industry's business models: when DeepSeek's API price is 1/100th or even 1/370th of yours, any business model built around API revenue becomes unsustainable — unless you can prove your model is good enough to justify a 370x premium. And in most commercial scenarios, "good enough + 370x cheaper" crushes "possibly slightly better but 370x more expensive."

### 4.3 Distillation ecosystem

Alongside R1's release, DeepSeek simultaneously launched six distilled smaller models (1.5B to 70B, initialized from Qwen and Llama bases) — among which the 32B and 70B models surpassed OpenAI's o1-mini on multiple benchmarks. This spawned a powerful reasoning model distillation ecosystem: developers could download R1 distilled models and run inference on their own hardware — no longer needing API fees, no longer constrained by rate limits. Reasoning capability went from "only available to large corporations and paying users" to "available to anyone with a GPU."

---

## Evaluation

The DeepSeek family is the most technically coherent and cost-efficient series among contemporary open-source LLMs.

From the initial LLM's scaling law research, to V2's MLA architecture, to V3's MTP + FP8, to R1's pure RL reasoning, to V4's end-to-end integration — not a single step was wasted. There was no parameter-stacking for the sake of publications, no benchmark-chasing for public relations, no "multimodal grand unification" for fundraising. Every step points toward the same goal: achieving more capability with fewer resources, then returning the value to users.

This trajectory stands in stark contrast to Llama's "open-source as commercial strategy" path. Llama's license terms have always contained ambiguities — OSI has never certified Llama as truly open-source. Meta's benchmark controversies surrounding Llama 4 further damaged the credibility of its "open-source champion" image. DeepSeek, by contrast, adopted the MIT license comprehensively from late 2024 onward, covering training techniques, model weights, and chain-of-thought outputs — no hidden clauses about "additional license required above 700 million monthly active users," no controversies over "optimized experimental versions gaming benchmarks." This transparency is not a PR strategy — it is structural: when you do not need to make money from models, you have no reason to hide anything.

But the DeepSeek family also has its own limitations. Its technical trajectory is heavily focused on text reasoning — in areas such as multimodality, agents, enterprise integration, and hardware ecosystems, DeepSeek's presence is not prominent. The underlying paradox is the same: DeepSeek does not profit from AI, so it can be the best model factory — but precisely because it does not profit from AI, it also lacks the incentive to build a complete product ecosystem around its models. It is the best model provider — but not the best AI product company.

Compared to the Llama family: Llama proved that "open-source can serve as a commercial strategy" — Meta does not profit from models but from weakening competitors' moats. DeepSeek proved that "open-source can exist without any commercial strategy attached" — High-Flyer Quant does not need to weaken anyone's moat; it does not even participate in the same commercial game. This kind of "top-tier AI research institution that requires no market validation" is precisely DeepSeek's non-replicable core.

From a longer historical perspective, the DeepSeek family's greatest legacy may not be any single model, benchmark, or price point — but a proposition: **the marginal production cost of frontier AI capabilities can continue to decline, and at a rate far exceeding industry expectations.** If this proposition holds — and the data across five generations of DeepSeek models indicates that it does — then the AI industry's current business model, centered on "subscriptions + high API premiums," will be irreversibly eroded by cost advantages in the years ahead.

The DeepSeek family does not need to be the protagonist of the AI industry. It only needs to keep forcing the protagonists — OpenAI, Google, Anthropic — to answer the same question: why is your model 370 times more expensive?

---

*This article was compiled by the Endfield Industrial Historical Archives team: Silence (lead chronicler).*

---

[^1]: DeepSeek-AI et al., "DeepSeek LLM: Scaling Open-Source Language Models with Longtermism," arXiv:2401.02954, submitted 2024-01-05. https://arxiv.org/abs/2401.02954
[^2]: DeepSeek-AI, "DeepSeek-V2: A Strong, Economical, and Efficient Mixture-of-Experts Language Model," arXiv:2405.04434, 2024-05-07. https://arxiv.org/abs/2405.04434
[^3]: DeepSeek-V2's "1%" pricing is a consensus industry estimate — V2 API input at 1 RMB/million tokens, GPT-4 Turbo input at $10/million tokens. Converted at prevailing exchange rates, this amounts to approximately 1% of GPT-4's cost. See DeepSeek API pricing page (archived May 2024) and OpenAI API Pricing.
[^4]: DeepSeek-AI et al., "DeepSeek-V3 Technical Report," arXiv:2412.19437, 2024-12-27. https://arxiv.org/abs/2412.19437. Training compute consumption is detailed in §2.1 of the paper.
[^5]: DeepSeek-AI et al., "DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning," arXiv:2501.12948, 2025-01-22. https://arxiv.org/abs/2501.12948
[^6]: The Paper (澎湃新闻), "DeepSeek Surpasses ChatGPT to Top Apple's Free App Download Chart in the US," 2025-01-27. Wall Street Insights (华尔街见闻), "NVIDIA's Market Cap Nearly Wiped by $600 Billion, the Largest Single-Day Loss in US Stock History," 2025-01-28.
[^7]: The Information / Stephanie Palazzolo, "Meta Scrambles After Chinese AI Equals Its Own, Upending Silicon Valley," 2025-01-27. https://www.theinformation.com/articles/meta-scrambles-after-chinese-ai-equals-its-own-upending-silicon-valley (paywall)
[^8]: OpenAI's distillation allegations and DeepSeek's response are covered in the Nature report dated 2025-09-17 (see note [^10]).
[^9]: HuggingFace, "deepseek-ai/DeepSeek-R1-0528," 2025-05-28. https://huggingface.co/deepseek-ai/DeepSeek-R1-0528
[^10]: Elizabeth Gibney, "Secrets of DeepSeek AI Model Revealed in Landmark Paper," *Nature*, 2025-09-17. doi:10.1038/d41586-025-03015-6. https://doi.org/10.1038/d41586-025-03015-6
[^11]: DeepSeek API Docs, "DeepSeek V4 Preview Release," 2026-04-24. https://api-docs.deepseek.com/news/news260424
[^12]: Tencent News (腾讯新闻), "DeepSeek V4 Released: Today, We Can Finally Retire the Three Dominant Foreign Providers," 2026-04-24. https://news.qq.com/rain/20260424. The 1/370 price comparison is a third-party estimate based on publicly listed prices from DeepSeek and OpenAI, and should be treated with caution.
