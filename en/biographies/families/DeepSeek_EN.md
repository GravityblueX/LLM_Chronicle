# The DeepSeek Family

> From a 67B "decent but not earth-shattering" open-source model in late 2023 to an industry substitute whose API pricing is just 1/370th of GPT-5.5 in 2026 — DeepSeek achieved this in just five generations. The starting point was a quiet entry; the endpoint was a restructuring of the global AI industry's cost structure. MoE → MLA → MTP → extreme cost optimization — each generation's iteration was not for showing off, but to make the proposition that "frontier models don't need frontier budgets" ever more irrefutable.

---

## I. Overview

DeepSeek is an open-source language model series launched in late 2023 by the AI research arm of High-Flyer Quantitative Investment. Its first model, DeepSeek-LLM (67B), was noticed by almost no one; two and a half years later, its fourth-generation model V4 is being adopted by developers across China as the core alternative for "replacing the big three."

The DeepSeek family's uniqueness in open-source model history lies in: it did not achieve extremes in any single dimension — not the largest parameter count, not the highest benchmarks, not the first to release MoE. What it achieved extreme levels of was **cost efficiency**. From V2 to V3 to R1 to V4, each generation answered the same question: if money is not the constraint, then what is? And its answer was — **achieve greater capability with less money, then return the savings as lower prices to users.**

This strategy was not a market pricing strategy — it was a technical strategy. MLA compressing KV Cache by 90% was not to make papers look good — it was to reduce inference costs to one-tenth. The MoE architecture was not for publishing papers — it was to make 671B training parameters run with only 37B worth of compute. MTP was not for one more arXiv paper — it was to make every training token more effective. Together, these three technologies formed the deepest cost moat in the LLM industry.

(For the background of High-Flyer behind DeepSeek, Liang Wenfeng's decision logic, and the influence of quantitative DNA on technical direction, see "The Annals of DeepSeek." This article focuses on the model family's technical iterations.)

---

## II. Generational Evolution

| Generation | Release Date | Parameter Scale | Core Innovation | License | API Pricing Marker |
|-----------|-------------|----------------|-----------------|---------|-------------------|
| DeepSeek-LLM | 2023-11-29 | 7B/67B | Scaling law research + DPO alignment | Limited model weights license | — |
| DeepSeek-V2 | 2024-05-06 | 236B/21B (MoE) | **MLA** (KV Cache compression 90%) | Same | ~1% of GPT-4 |
| DeepSeek-V3 | 2024-12-26 | 671B/37B (MoE) | MTP + FP8 + auxiliary-loss-free MoE | **MIT** | Training cost only $5.6M |
| DeepSeek-R1 | 2025-01-20 | Based on V3 | Pure RL reasoning + GRPO | **MIT** (incl. chain of thought) | ~3% of o1 |
| DeepSeek-V4 | 2026-04-24 | Undisclosed | Pro/Flash dual variants + 1M context | **MIT** | ~1/370 of GPT-5.5 |

### 2.1 The original DeepSeek-LLM: Quiet foundations

On November 29, 2023, DeepSeek released its first language model, DeepSeek-LLM, in 7B and 67B scales, with Base and Chat versions open-sourced simultaneously.[^1]

In the AI industry of late 2023, 67B parameters were not stunning — Llama 2 already had 70B, and GPT-3 had 175B. But DeepSeek-LLM did three things that at the time seemed like "choices" but in retrospect were "inevitabilities."

First, **using DPO instead of RLHF**. The Chat model's alignment did not follow the then-mainstream RLHF (reward model + PPO optimization), but adopted DPO — published by Rafailov et al. just six months prior — a lighter, more stable alignment method. This planted the methodological seed for R1-Zero's later complete bypass of SFT using only RL for reasoning.

Second, **systematic scaling law research**. The paper independently verified compute-data ratios for open-source configurations, proposing a "longtermism" philosophy — training data and architecture design optimized not for a single release, but for future iteration scalability. This mindset later defined every DeepSeek model.

Third, **open-source from day one**. Although model weights used a limited license (not MIT), this stance was uncommon among Chinese LLMs at the time.

In performance, DeepSeek-LLM 67B comprehensively surpassed Llama 2 70B on HumanEval (73.78%), GSM8K (84.1%), MATH (32.6%), and MMLU (71.3%), with the Chat version matching GPT-3.5 on open-ended evaluations.[^1]

(See "Chronicles: November 2023")

### 2.2 DeepSeek-V2: MLA and the price butcher

On May 6, 2024, DeepSeek released V2. This was the first model in the DeepSeek series to truly reshape the industry landscape.[^2]

**Architecture**: 236B total parameters, 21B activated, MoE architecture. But V2's real weapon was not MoE — it was **MLA (Multi-head Latent Attention)**.

Traditional multi-head attention requires caching Key and Value matrices for each token, with KV Cache growing linearly with sequence length — the biggest bottleneck for inference costs. MLA's core idea projects KV into a low-dimensional latent space and reconstructs attention from it — compressing KV Cache to 5%–10% of original size without losing attention quality.[^2]

This technique looks like an unremarkable engineering optimization. But its consequences are revolutionary: 90% KV Cache compression means 90% inference cost compression. DeepSeek-V2's API pricing could be pushed to approximately 1% of GPT-4 Turbo — not by burning money, but by MLA.

In performance, V2's MMLU reached 80.3%, approaching GPT-4. But the industry remembered not the benchmark numbers — but the 1% pricing. V2 triggered a genuine price war in the Chinese AI community: Alibaba Tongyi Qianwen, Baidu ERNIE Bot, Zhipu GLM, and ByteDance Doubao all slashed prices dramatically within weeks. In less than a month, Chinese AI API prices fell to less than one-tenth of their beginning-of-year levels.[^3]

V2 was the most underrated model in LLM history. R1 erasing $589 billion from NVIDIA's market cap in one day captured the world's spotlight — but without V2's MLA, there would be no R1. MLA is the cost foundation for all subsequent DeepSeek models.

(See "Chronicles: May 2024")

### 2.3 DeepSeek-V3: A $5.6M frontier model

On December 26, 2024, DeepSeek released V3: 671B MoE total parameters (37B activated), with performance matching GPT-4o and Claude 3.5 Sonnet. But the most important number was an expenditure figure: pre-training consumed only 2.788M H800 GPU hours, costing approximately **$5.576 million** at market prices.[^4]

V3 advanced the route inherited from V2 in three technical directions:

**MLA scaling**: Extending V2's MLA to 671B scale in combination with MoE. During inference, only 37B parameters' attention computation is activated per token, while benefiting from 671B parameters' expert knowledge; KV Cache compression remains effective, making inference cost a fraction of same-performance dense models.

**DeepSeekMoE + auxiliary-loss-free load balancing**: Using a fine-grained partition of 1 shared expert + 256 routed experts, activating 8 experts per token. First achieving auxiliary-loss-free load balancing — controlling routing through dynamic bias adjustment, avoiding the traditional MoE trade-off of sacrificing model quality for load balance.[^4]

**Multi-Token Prediction (MTP)**: Predicting multiple subsequent tokens simultaneously at each position, rather than traditional single-token prediction. MTP significantly improved sample efficiency and final performance — each training data group was more fully utilized. Proving MTP's effectiveness at 671B scale was one of the inflection points for the entire industry shifting from "stacking data" to "using data more intelligently."

Additionally, V3 adopted FP8 mixed-precision full-course training — one of the first models to achieve this at 600B+ scale. The entire pre-training was completed in approximately two months, during which **no irrecoverable loss spikes requiring rollback occurred** — an ultimate testament to its engineering pipeline's stability.[^4]

In performance, V3 traded wins with GPT-4o on MMLU (88.5%), MATH 500 (90.2%), and HumanEval (92.1%). It led comprehensively on Chinese tasks.[^4]

The real shock V3引发 was not the benchmark numbers themselves — GPT-4o-level performance had become routine — but the $5.6M figure. For the previous four years, the industry's default answer was tens of millions to hundreds of millions of dollars in compute. V3 broke through that wall with less than $6 million, proving three things: compute is not a moat, MoE is the optimal solution for open source, and even regulated hardware like H800 can train frontier models.[^4]

(See "Chronicles: December 2024")

### 2.4 DeepSeek-R1: MIT open-source + $589 billion erased

On January 20, 2025, DeepSeek released R1 — a reasoning model based on V3-Base. This was DeepSeek's most famous model and the single AI product that triggered the largest stock market disruption in history.[^5]

**Technical approach**: R1's core technical innovation came in two steps.

The first step was **R1-Zero**: completely bypassing supervised fine-tuning (SFT), training solely with GRPO (Group Relative Policy Optimization) reinforcement learning. All rewards were rule-based — whether the answer was correct, whether the format was correct. No model-based reward functions were used.

Pure RL training催生了 surprising emergent behaviors: the model spontaneously learned "aha moments" during training — on certain problems, it would suddenly pause, re-evaluate its reasoning process in human-readable language, and proactively allocate more thinking time. The DeepSeek team stated this was not programmed in but developed through the model's interaction with the RL environment.[^5]

The second step was **R1**: introducing cold-start SFT data (thousands of high-quality chain-of-thought examples) on top of R1-Zero, then conducting RL training. This solved R1-Zero's output readability issues while maintaining reasoning capability.

**Performance**: R1 matched OpenAI o1 on AIME 2024 (79.8% vs o1 79.2%), MATH-500 (97.3% vs o1 96.4%), Codeforces (96.3rd percentile vs o1 96.6th percentile), and SWE-bench Verified (49.2% vs o1 48.9%).[^5]

**MIT open-source**: R1 was fully open-sourced under MIT license — weights, code, methods, including chain-of-thought outputs. OpenAI o1 deliberately concealed its chain of thought and charged $200/month subscriptions. R1 gave the world a comparable reasoning model completely free and completely transparent.

**Shockwave**: On January 27, 2025, DeepSeek surpassed ChatGPT to top the Apple App Store charts in the United States. The same day, NVIDIA's stock price plunged 17%, erasing approximately $589 billion in market value — the largest single-day loss in U.S. stock market history. The market's fear was not R1 itself, but the fact it revealed: the most advanced AI does not necessarily require the most GPUs.[^6]

Meta internally formed four teams专门研究 DeepSeek — respectively studying cost reduction, training data, and model architecture restructuring. OpenAI claimed to have evidence that DeepSeek used its proprietary model outputs to train R1 (DeepSeek denied the allegation).[^7][^8]

**Follow-up**: On May 28, 2025, the R1-0528 upgrade was released, with AIME 2025 accuracy jumping from 70% to 87.5%. In September of the same year, the R1 paper was formally published in *Nature*, becoming one of the first LLM papers to appear in Nature.[^9][^10]

(See "Chronicles: January 2025," "The Annals of DeepSeek")

### 2.5 DeepSeek V4: From pursuer to substitute

On April 24, 2026, DeepSeek released V4 Preview — the first major version update 15 months after R1. V4 offered Pro and Flash variants, supporting 1M token context windows, open-sourced under MIT license.[^11]

V4's most striking number was price. Multiple Chinese media outlets reported its API pricing at approximately 1/370th of GPT-5.5 (2.5 RMB per million tokens vs approximately $130 per million tokens).[^12] The price gap expanding from approximately 100x in the V2 era to approximately 370x in the V4 era suggested that DeepSeek's efficiency advantage had not been narrowed by pursuers in 15 months — it was actually widening.

But V4's true historical significance was not the price number itself — but the timing. One month earlier, the March 31 Incident (March 2026, see "Chronicles: March 2026") had just proven one thing: Chinese developers' dependence on overseas models was a geopolitical risk. V4 proved one month later that this risk could be dissolved — not by sentiment, not by policy, but by a substitute costing two orders of magnitude less with performance in the same league.

In the V2 era, the industry was shocked by 1% pricing. In the V3 era, the industry was bewildered by $5.6M training costs. In the R1 era, the industry was uneasy about MIT open-source. In the V4 era, the industry was no longer shocked, confused, or uneasy — the industry was migrating. From "impossible" to "happening now," DeepSeek completed the full arc from technical disruption to ecosystem substitution in four generations.

(See "Chronicles: April 2026")

---

## III. Technical Route Evolution

### 3.1 A through-line: Efficiency first

From the original LLM to V4, DeepSeek's technical trajectory follows a clear through-line: **every generation treats efficiency as the core metric, not parameter count or benchmark numbers**. This systematically differentiates it from OpenAI's "bigger is stronger" path from GPT-1 to GPT-4, Google's "more modalities, more features" path, and Anthropic's "safer, better aligned" path.

| Generation | Efficiency Core | Implementation | Effect |
|-----------|----------------|---------------|--------|
| Original LLM | Training efficiency | Scaling law research, DPO replacing RLHF | Validated optimal compute-data ratios |
| V2 | **Inference efficiency** | MLA (KV Cache compression 90%) | Inference cost dropped to GPT-4's 1/100 |
| V3 | **Training + inference efficiency** | MTP + FP8 + auxiliary-loss-free MoE | Training cost $5.6M, cheaper inference |
| R1 | **Alignment efficiency** | GRPO pure RL + rule rewards | Bypassed SFT for reasoning,extremely low alignment cost |
| V4 | **Full-pipeline efficiency** | Culmination of all technical accumulation | Price gap widened to 370x |

### 3.2 MoE: DeepSeek's architectural choice

DeepSeek fully adopted MoE architecture starting with V2, being among the first teams in open-source LLMs to use MoE at scale and validate its viability at frontier performance.

MoE's core economic logic is sparse activation — 671B total parameters, but only 37B activated per token. This fundamentally changes the cost structure of training and inference: the model benefits from massive parameter knowledge capacity during training, but only pays for the activated portion during inference. MoE was the first critical lever enabling V3's $5.6M training cost.

DeepSeek's contribution to MoE extended beyond adoption — it achieved auxiliary-loss-free load balancing in V3, solving a longstanding MoE problem: using auxiliary loss to force expert load balancing damages model quality. DeepSeek's dynamic bias method made MoE routing "adaptive" rather than "forced."

### 3.3 MLA: The KV Cache revolution

MLA is DeepSeek's most original technical contribution and the inference cost foundation for all subsequent models. Traditional attention's computation cost scales quadratically with sequence length, and KV Cache grows linearly — meaning long-text inference costs explode. MLA projects KV Cache into a low-dimensional latent space and reconstructs from it, compressing KV Cache to 5%–10% of original without losing attention quality.

MLA's value was amplified to its extreme in V3's 128K context and V4's 1M context. When your KV Cache is compressed by 90%, 128K context inference costs approach what others pay for 12K context — enabling DeepSeek to support ultra-long context without price increases, while competitors double inference fees for every doubling of context.

### 3.4 MTP + FP8: Saving more from the training side

Multi-Token Prediction (MTP) and FP8 full-course training were DeepSeek's two key innovations in training efficiency.

MTP's core idea is having the model predict multiple subsequent tokens simultaneously at each position — rather than traditional single-token prediction. This appears to merely change a training objective, but the effect is that each training sample is more fully utilized — dramatically improving sample efficiency, producing better models from the same training data volume.

FP8 full-course training's significance lies in doubling compute efficiency. Switching from FP16 to FP8, theoretically allowing twice the tokens to be trained per GPU hour. V3 was one of the industry's first models to use FP8 throughout at 600B+ scale.

MTP + FP8 + MoE sparse activation — these three technologies together explain why V3 could match GPT-4o performance with 2.788M H800 GPU hours, while Llama 3 405B required approximately 30.8M H100 GPU hours to achieve similar levels.

---

## IV. Ecosystem and Impact

### 4.1 Open-source route: From limited license to MIT

DeepSeek's open-source posture underwent a critical shift: from the limited licenses of the original LLM and V2, to full MIT licensing starting with V3.

This shift was not accidental — V3's $5.6M training cost made "fully open-source" strategically rational. If a model's training cost is $100 million, open-sourcing means forgoing massive potential revenue. If a model's training cost is only $5.57 million — and the company behind it doesn't make money from AI — open-sourcing becomes an almost zero-cost brand offensive.

R1's MIT open-source (including chain of thought) was theultimate expression of this logic. OpenAI o1 charged $200/month subscriptions while hiding its chain of thought as core IP. DeepSeek released a comparable reasoning model completely, freely, and publicly — including the chain of thought. This decision not only technicallyimpacted the industry but commerciallyshattered the default assumption that "reasoning models = luxury goods."

### 4.2 Price war and industry restructuring

DeepSeek's pricing strategy was the most aggressive in LLM commercial history. From V2's 1% to V4's 1/370, each generation widened the price gap.

But the key was — this was not selling at a loss. MLA reduced inference costs by 90%, so DeepSeek could price at 1% of GPT-4 and still profit. MoE + MTP + FP8 reduced training costs to $5.6M, so DeepSeek could open-source models for free without impacting business. There were no subsidies, no cash-burning — only structural cost advantages.

This structural advantage placed enormous pressure on the entire industry's business models: when DeepSeek's API price is 1/100th or even 1/370th of yours, any business model centered on API revenue becomes unsustainable — unless you can prove your model is worth a 370x premium. And in most business scenarios, "good enough + 370x cheaper"crushes "possibly slightly better but 370x more expensive."

### 4.3 Distillation ecosystem

R1's release was accompanied by 6 distilled small models (1.5B to 70B, initialized from Qwen and Llama) — with the 32B and 70B models surpassing OpenAI o1-mini on multiple benchmarks. Thisgave rise to a powerful reasoning model distillation ecosystem: developers could download R1 distilled models and run inference on their own hardware — no more API fees, no more rate limits. Reasoning capability went from "only big companies and paying users can access it" to "anyone with a GPU can use it."

---

## Appraisal

The DeepSeek family is the most technically coherent and cost-efficient series among contemporary open-source LLMs.

From the original LLM's scaling law research, to V2's MLA architecture, to V3's MTP + FP8, to R1's pure RL reasoning, to V4's full-pipeline integration — every step was purposeful. No parameter-stacking for paper counts, no benchmark-gaming for PR, no "multimodal grand unification" for fundraising. Every step pointed to the same goal: achieving more capability with fewer resources, then returning the savings to users.

This path stands in stark contrast to Llama's "open source as business strategy" route. Llama's license terms always had ambiguity — OSI never certified Llama as truly open-source. Meta's Llama 4 benchmark controversy further damaged the "open-source champion's" credibility. DeepSeek fully adopted MIT licensing from late 2024, including training techniques, model weights, and chain-of-thought outputs — no hidden clauses about "additional license required for over 700 million MAU," no controversy over "optimized experimental versions gaming leaderboards." This transparency was not a PR strategy — it was structural: when you don't need to make money from models, you have no reason to hide anything.

But the DeepSeek family also has its own limitations. Its technical trajectory ishighly focused on text reasoning — in multimodality, agents, enterprise integration, and hardware ecosystems, DeepSeek's presence is not prominent. Behind this lies the same paradox: DeepSeek doesn't make money from AI, so it can be the best model factory — but precisely because it doesn't make money from AI, it has no incentive to build a complete product ecosystem around models. It is the best model provider — but not the best AI product company.

Benchmarked against the Llama family: Llama proved "open source can serve as business strategy" — Meta doesn't make money from models; it makes money by weakening competitors' moats. DeepSeek proved "open source can exist without any business strategy attached" — High-Flyer doesn't need to weaken anyone's moat; it doesn't even participate in the same commercial game. This "top-tier AI research institution that doesn't need market validation" is precisely DeepSeek's irreproducible core.

From a longer-term historical perspective, the DeepSeek family's greatest legacy may not be any model, benchmark, or price figure — but a proposition: **the marginal production cost of frontier AI capability can continue declining, at a rate far exceeding industry expectations.** If this proposition holds — and DeepSeek's five generations of data indicate it does — then the AI industry's current business model centered on "subscriptions + high API premiums" will be irreversibly eroded by cost advantages in the coming years.

The DeepSeek family doesn't need to be the protagonist of the AI industry. It only needs to keep forcing the protagonists — OpenAI, Google, Anthropic — to answer the same question: why is your model 370 times more expensive?

---

*This biography was compiled by the Endfield Industrial Historian Team: Silence (chronicle lead writer).*

---

[^1]: DeepSeek-AI et al., "DeepSeek LLM: Scaling Open-Source Language Models with Longtermism," arXiv:2401.02954, submitted 2024-01-05. https://arxiv.org/abs/2401.02954
[^2]: DeepSeek-AI, "DeepSeek-V2: A Strong, Economical, and Efficient Mixture-of-Experts Language Model," arXiv:2405.04434, 2024-05-07. https://arxiv.org/abs/2405.04434
[^3]: DeepSeek-V2's "1%" pricing is an industry consensus estimate — V2 API input at 1 RMB/million tokens, GPT-4 Turbo input at $10/million tokens. Converted at exchange rate, approximately 1% of GPT-4. See DeepSeek API pricing page (archived May 2024) and OpenAI API Pricing.
[^4]: DeepSeek-AI et al., "DeepSeek-V3 Technical Report," arXiv:2412.19437, 2024-12-27. https://arxiv.org/abs/2412.19437. Training compute consumptionsee the paper §2.1.
[^5]: DeepSeek-AI et al., "DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning," arXiv:2501.12948, 2025-01-22. https://arxiv.org/abs/2501.12948
[^6]: The Paper, "DeepSeek surpasses ChatGPT, topping Apple US free app download charts," 2025-01-27. Wall Street CN, "NVIDIA market cap erased by nearly $600 billion, largest in US stock history," 2025-01-28.
[^7]: The Information / Stephanie Palazzolo, "Meta Scrambles After Chinese AI Equals Its Own, Upending Silicon Valley," 2025-01-27. https://www.theinformation.com/articles/meta-scrambles-after-chinese-ai-equals-its-own-upending-silicon-valley (paywall)
[^8]: OpenAI distillation allegations and DeepSeek's response, see Nature, 2025-09-17 (note [^10]) reporting.
[^9]: HuggingFace, "deepseek-ai/DeepSeek-R1-0528," 2025-05-28. https://huggingface.co/deepseek-ai/DeepSeek-R1-0528
[^10]: Elizabeth Gibney, "Secrets of DeepSeek AI model revealed in landmark paper," *Nature*, 2025-09-17. doi:10.1038/d41586-025-03015-6. https://doi.org/10.1038/d41586-025-03015-6
[^11]: DeepSeek API Docs, "DeepSeek V4 Preview Release," 2026-04-24. https://api-docs.deepseek.com/news/news260424
[^12]: Tencent News, "DeepSeek V4 released: Today, we can finally replace the foreign big three," 2026-04-24. https://news.qq.com/rain/20260424. The 1/370 price comparison is a third-party calculation based on DeepSeek and OpenAI's publicly available pricing, subject to verification.
ication.
