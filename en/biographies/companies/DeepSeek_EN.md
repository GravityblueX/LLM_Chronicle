# The Annals of DeepSeek

> How did a Chinese quantitative hedge fund come to train the large language model that reshaped the global AI landscape? DeepSeek's story is not the story of an AI company — it is the story of "a company that had no need to make money from AI, crushing an entire industry at minimal cost." From V2 to V3 to R1 to V4 — every step answered the same question: if money is no object, then what is?

---

## I. Overview

DeepSeek was founded in 2023 as the AI research arm of High-Flyer Quantitative Investment. High-Flyer is one of China's largest quantitative hedge funds, managing assets substantial enough that DeepSeek had absolutely no need to be profitable from API revenue.

This lineage gave DeepSeek a structural advantage that no competitor could replicate. OpenAI, Anthropic, Google — their training costs must be recovered through subscriptions or API fees. DeepSeek did not. This allowed it to do things the entire industry found incomprehensible: selling API access at 1% of GPT-4-level pricing, training a GPT-4o-level model for approximately $5.6 million, fully open-sourcing a reasoning model under MIT license — including the chain of thought.

These decisions were insane within a conventional business logic framework. But given the premise of "not needing to make money from AI" — they were simply rational.

---

## II. Origins: High-Flyer, quantitative trading, and the "money-agnostic" entrant

### 2.1 The quantitative DNA behind the scenes

High-Flyer Quantitative Investment, founded by Liang Wenfeng, is one of China's most technically accomplished quantitative hedge funds. Before entering the large language model space, High-Flyer had already accumulated the following key advantages:

- **GPU clusters**: Quantitative trading demands extremely high GPU capacity — deep learning models for high-frequency trading require massive parallel computing. While other startups were still queuing for A100s, High-Flyer already had mature GPU infrastructure.
- **No fundraising pressure**: As a profitable quantitative fund, High-Flyer did not need external financing to train models. This meant DeepSeek never needed to explain to any venture capitalist why it was selling API access at a loss.
- **Engineering culture**: Quantitative trading and LLM training share a common engineering problem — "how to achieve maximum results with minimum computing resources." This mindset permeated all of DeepSeek's technical decisions.

### 2.2 DeepSeek-LLM (2023-11) — A quiet debut

In November 2023, DeepSeek released its first language model, DeepSeek-LLM (67B). Almost no one noticed.

In the AI industry of November 2023, all eyes were on OpenAI's Sam Altman — his firing and reinstatement. A 67B-parameter model — even with decent performance — had no capital to attract attention. But DeepSeek chose the smartest time window: while others were arguing, quietly accumulating technical capabilities.

The 67B DeepSeek-LLM approached Llama 2 70B on multiple benchmarks — not enough to change the industry, but enough for DeepSeek's team to prove they could train a reliable base model. The real edge would emerge in the next release.

---

## III. Key Events

### 3.1 DeepSeek-V2 (2024-05): MLA and the price butcher

In May 2024, DeepSeek released V2. This was the first DeepSeek product that truly changed the industry — not because of its benchmark scores (though they approached GPT-4), but because it did two things that competitors found incomprehensible:

1. API pricing at approximately **1%** of GPT-4 Turbo
2. Introducing **MLA (Multi-head Latent Attention)** — an attention mechanism that compressed inference costs to one-tenth

The 1% pricing triggered a price war across the industry. Alibaba, Baidu, Zhipu AI, and ByteDance all slashed prices dramatically within weeks — Chinese AI API prices fell to less than one-tenth of their beginning-of-year levels within a single month.

But DeepSeek was not running a charity or burning cash to capture the market. MLA brought its inference costs down to one-tenth of GPT-4's, so it could price at 1% of GPT-4 — and still turn a profit. "Cost advantage" and "price advantage" were the same thing here. This was not a price war — it was the natural result of a structural advantage.

What was even more unsettling: High-Flyer, behind DeepSeek, did not need to make money from AI. Even if the API were completely free, DeepSeek could continue operating as a research institution — because its funding came from quantitative trading profits. This meant DeepSeek could maintain 1% pricing indefinitely, until every competitor whose business model depended on API revenue was squeezed out of the market.

(See "Chronicles: May 2024")

### 3.2 DeepSeek-V3 (2024-12): A $5.6M GPT-4o

In December 2024, DeepSeek released V3: 671B MoE parameters (37B active), with performance matching GPT-4o and Claude 3.5 Sonnet. The most important number was not the parameter count — it was the training cost: approximately **$5.57 million** (on H800 GPUs).

For comparison, GPT-4's training cost was estimated between $63 million and $100 million. V3's training cost was approximately **6%** of GPT-4's.

V3's ability to achieve frontier performance at such low cost relied on three technical pillars:

- **MoE architecture**: 671B total parameters, but only 37B activated per forward pass — drastically reducing training and inference costs
- **MLA (inherited from V2)**: 90% KV Cache compression, dramatically reducing inference costs
- **MTP (Multi-Token Prediction)**: Multi-token prediction training objective, improving sample efficiency

V3's release in December 2024 did not create the global shock that R1 would. But V3 was the truly "inexplicable" achievement — it proved that frontier models without frontier budgets was reproducible. V2's extremely low inference cost could be a fluke; V3's extremely low training cost proved it was no accident. DeepSeek now had a methodology for full-pipeline cost control, from training to inference.

V3 was open-sourced under the MIT license. At this point, DeepSeek had established a fully coherent technical and commercial strategy: ultra-low-cost training → ultra-low-cost inference → open source → maintaining price advantages → expanding market share. None of these steps required the premise of "making money from AI."

### 3.3 DeepSeek-R1 (2025-01): MIT open-source + $589 billion erased from NVIDIA

On January 20, 2025, DeepSeek released R1 — a reasoning model fine-tuned from V3, trained entirely with reinforcement learning. The core innovation was "cold-start RL" — having the model learn to reason through pure reinforcement learning, rather than having human annotators demonstrate reasoning steps as OpenAI did.

R1's greatest impact came from the combination of three actions:

- **MIT open-source**: Weights, code, methods — all open-sourced. Commercially friendly license.
- **Performance matching o1**: On math (AIME 79.8% vs o1 79.2%) and coding (Codeforces 96.3rd percentile vs o1 96.6th percentile) benchmarks, reaching o1-level performance.
- **Public chain of thought**: Allowing users to fully observe R1's reasoning process — while o1 deliberately concealed it.

The result: NVIDIA's stock price plunged 17% in a single day, erasing $589 billion in market value. This was not because R1 was truly worth $589 billion — but because R1 shattered a core assumption: that training frontier models required the most expensive GPUs. If DeepSeek could train an o1-level model using H800s (GPUs restricted by U.S. export controls) — then market demand expectations for H100/GB200 were severely overestimated.

R1's MIT open-source was another shock. While o1 was still charging $200/month for subscriptions, DeepSeek fully open-sourced a comparable reasoning model. The logic of this choice continued the consistency of V2 and V3 — "if there's no need to make money from models, why not open-source?"

(See "Chronicles: January 2025")

### 3.4 DeepSeek V4 (2026-04): The price gap widens to 370x

On April 24, 2026, DeepSeek released V4 — a major update 15 months after R1. V4's API pricing was only 1/370th of GPT-5.5. This price gap — expanding from 100x in the V2 era to 370x in the V4 era — suggested that DeepSeek's cost advantage was not being narrowed by pursuers, but was actually widening.

V4's release marked DeepSeek's transformation from "follower" to "substitute." After the March 31 Incident (2026-03), DeepSeek and GLM-5.1 together became the core alternatives for "de-Americanization" of Chinese AI applications.

(See "Chronicles: April 2026")

---

## IV. Rise and Fall Analysis

### DeepSeek's core paradox

DeepSeek's success is built on a paradox: its greatest advantage — "not needing to make money from AI" — is also its most irreproducible trait. No competitor can replicate this strategy, because no competitor possesses a profitable quantitative hedge fund as its funding source.

This paradox places DeepSeek in a unique position in the competition: it is a **top-tier AI research institution that does not need market validation**. Its very existence shatters a default assumption of the AI industry — "training frontier models requires a business model to sustain them" — thereby raising an unsettling question: if the most competitive player in the AI industry does not participate in the same commercial game, how meaningful is the concept of "market competition" in AI?

### DeepSeek's technical philosophy

From V2 to V4, DeepSeek's technical trajectory follows a clear through-line: **efficiency over scale**.

This stands in sharp contrast to OpenAI's path from GPT-1 to GPT-4. OpenAI's philosophy was "more for stronger" — more parameters, more GPUs, more money. DeepSeek's philosophy was "smarter engineering saves more capability" — MLA saving inference costs, MoE saving training costs, Pure RL saving alignment costs.

The philosophical roots of this efficiency path can be traced back to its quantitative DNA. In quantitative trading, GPUs are a cost — not an asset. An efficiency improvement in a trading strategy directly translates to profit. DeepSeek brought the same thinking to LLMs: 90% KV Cache compression was not a paper's elegance — it was monetizable profit. While OpenAI and Google competed over who could spend more, DeepSeek competed over who could save more. And under the dominion of a fundamental economic law — "cost advantage is the ultimate advantage" — the latter is the more sustainable competitive strategy.

### The geopolitical dimension

DeepSeek's rise has an indispensable backdrop: U.S. export controls on GPUs to China. The H800 GPUs DeepSeek used to train V3 and R1 were export-controlled products — their performance was deliberately restricted to prevent frontier AI training.

But DeepSeek's efficiency path inadvertently proved something: the effects of controls can backfire. When American AI companies depended on the most powerful GPUs for competitiveness, Chinese companies were forced to do better engineering on weaker GPUs. The result was not that controls left China behind — controls taught China to achieve maximum efficiency under resource constraints. And once efficiency was "enlightened" — cost advantage became a permanent moat.

On the day R1 was released, NVIDIA lost $589 billion in market value. This number was not merely a correction of market expectations — it was a market vote against the logic of U.S. AI controls. The market was saying: restricting hardware cannot prevent model progress — it will only catalyze more effective software.

---

## Appraisal

DeepSeek is the most irreproducible player in AI history.

Training V2 and pricing it at 1% of GPT-4 — that required not needing to make money from AI. Training V3 for only $5.57 million — that required quantitative-trading-level GPU optimization expertise. Releasing R1 as fully MIT open-source — that required a decision-maker indifferent to commercial returns. These three things converging in a single company was accidental and unreproducible.

But DeepSeek's legacy is not "DeepSeek is amazing" — it is "AI costs can be lower than previously imaginable." V2's 1% pricing tore open the first crack, V3's $5.6M training cost tore open the second, and R1's MIT open-source tore open the third. These three cracks connected, forming a staggering message: **the marginal production cost of frontier AI capability can approach zero.**

If this is true — if costs can continue to fall while capabilities continue to rise — then the entire economic model of the AI industry needs rewriting. OpenAI's $200/month subscription business model becomes acutely fragile in the face of DeepSeek's free, open-source logic.

But DeepSeek also faces its own challenges. "Not making money from AI" is its greatest competitive advantage — but it is also its natural bottleneck. As AI technology expands from model capabilities to product ecosystems (agents, toolchains, enterprise integration, hardware devices), DeepSeek's "models only" strategy will become increasingly constrained. It may always be the best model factory — but never the best product company.

This is precisely DeepSeek's destiny: its success constrains its self-definition. It cannot become OpenAI — because becoming OpenAI means "starting to make money from AI," which would destroy all its cost advantages. It can only continue doing the one thing it does best: training the best models with the least resources, and then open-sourcing them.

---

*This biography was compiled by the Endfield Industrial Historian Team: Zhuang Fangyi (lead writer).*

---

[^1]: DeepSeek-AI, "DeepSeek-V2: A Strong, Economical, and Efficient Mixture-of-Experts Language Model," arXiv:2405.04434, submitted 2024-05-07. https://arxiv.org/abs/2405.04434; official model card/README: https://huggingface.co/deepseek-ai/DeepSeek-V2/blob/main/README.md
[^2]: DeepSeek-AI, "DeepSeek-V3 Technical Report," arXiv:2412.19437, 2024-12. https://arxiv.org/abs/2412.19437
[^3]: DeepSeek-AI, "DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning," arXiv:2501.12948, 2025-01. https://arxiv.org/abs/2501.12948
[^4]: DeepSeek API Docs, "DeepSeek V4 Preview Release," 2026-04-24. https://api-docs.deepseek.com/news/news260424 (official announcement; confirms V4 Preview release, open-source, 1M context, Pro/Flash parameters and API pricing); OpenAI API Pricing (GPT-5.5 priced at $5.00 input / $30.00 output per 1M tokens), confirmed 2026-06. https://openai.com/api/pricing/ (the "1/370th of GPT-5.5" figure in the text is derived from third-party comparison of the two parties' publicly available pricing, and is subject to verification)
