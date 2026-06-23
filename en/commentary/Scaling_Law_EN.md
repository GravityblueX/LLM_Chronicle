# The Death and Rebirth of Scaling Law

> Scaling Law has never been overthrown. It has merely been revised — again and again — and each revision was an era saying: "You had the wrong focus before." From Kaplan to Chinchilla to o1, the scaling law in the history of large language models has undergone three revisions. Not three denials, but three redefinitions of what "scale" means.

## I. Kaplan Scaling Law: The First Creed

In January 2020, Jared Kaplan and others at OpenAI published the paper *Scaling Laws for Neural Language Models*, putting forward a conclusion of far-reaching consequence: the performance of language models follows a **power-law relationship** with model parameter count, training data volume, and training compute.[^1] In simple terms: give it more data or more parameters, and the loss drops at a predictable rate.

This was no laboratory curiosity. It was the theoretical foundation on which GPT-1 (2018-06) launched with 117M parameters, GPT-2 (2019-02) surged to 1.5B, and GPT-3 (2020-06) exploded to 175B. The Kaplan paper provided a prediction formula precise to the decimal point — given how a model performs at a certain scale, how much performance gains from an N-fold increase in parameters could be calculated in advance. In the AI industry of 2020, this was an immensely seductive promise: **performance was pre-orderable.** You didn't need to invent new architectures; you just needed to buy more GPUs and stack more data, and the model would naturally grow stronger.

GPT-3's 175B parameters represented the first large-scale fulfillment of this creed. From 1.5B to 175B, the parameters inflated a hundredfold, and capabilities underwent a qualitative leap across many-shot, few-shot, and zero-shot settings — including what would later be widely discussed as "emergent" phenomena. DeepMind, at the end of 2021, systematically evaluated 152 tasks with Gopher (280B parameters), independently verifying the applicability of scaling law once again.[^2]

But buried within Kaplan's conclusions was a specific inference that would later prove incorrect: **parameter scale matters more than data scale.** The paper's recommendation was that, given a fixed compute budget, one should increase parameters rather than training data. This recommendation would be precisely overturned by the Chinchilla paper.

## II. Chinchilla: The First Revision — Not a Parameter Deficit, but a Data Gap

In March 2022, DeepMind's Hoffmann et al. offered a succinct revision in the Chinchilla paper: given a fixed compute budget, **model parameter count and training token count should grow in roughly equal proportions.**[^3]

It sounds like a mere technical detail correction. But its actual implication was revolutionary: Kaplan said "stack parameters," Chinchilla said "stack data." By Chinchilla's formula, GPT-3's 175B parameters paired with roughly 300B training tokens was severely "data-starved" — it should have been trained with fewer parameters and more data, and the results would have been better.

DeepMind provided a vivid experimental proof: a 70B-parameter Chinchilla model, under the same training compute budget (~5.76×10²³ FLOPs), trained on approximately 1.4T tokens, comprehensively surpassed the 280B-parameter Gopher (trained on only 300B tokens) on nearly all downstream tasks. Parameters were a quarter of Gopher's; capabilities were an across-the-board surpassing. Under Kaplan's framework, this shouldn't have happened — but it did.

The significance of Chinchilla was not as narrow as "70B beats 280B." It fundamentally altered the industry's understanding of "scale":

- **Before**: Parameter count was a status symbol. Companies competed over who had more model parameters, like the Cold War competition over nuclear warheads.
- **After**: Data volume and data quality were elevated to the same level as — or even higher than — parameter count. The Llama series (especially Llama 3's 15T-token training), the Claude series, and later DeepSeek all placed "how many tokens were trained" alongside "how many parameters" as co-equal metrics.

Chinchilla also changed model design at the economic level. In the Kaplan era, making parameters larger also increased inference cost — because per-token compute is proportional to parameter count. Chinchilla's message was: if you're willing to feed more data during training, you can achieve the same or even better performance with fewer parameters, and inference cost comes down. The implications for commercial deployment were direct: **spend a bit more on training, save a lot on inference.**

In terms of model generations, Chinchilla was the first revision — but not the endpoint. It still operated within Kaplan's framework: it discussed "how to optimally balance parameters and data during training to use compute efficiently." Once training ended, model capabilities were sealed into the weights. The inference phase merely "consumed" these capabilities without producing new ones.

This premise was shattered by o1 in September 2024.

## III. o1 and Test-Time Compute: The Second Revision — Inference Itself Can Scale

On September 12, 2024, OpenAI released o1, a "reasoning model."[^4] The core idea behind o1 was: before answering, the model first generates an internal chain of thought, using additional compute time to plan, verify, and correct its reasoning. What users see is a polished answer, not the raw reasoning process.

From the scaling law perspective, the significance of o1 is not "the model is stronger" — that would be a mere performance improvement. Its significance lies in opening up a **third axis** of scaling law.

Kaplan and Chinchilla discussed **training-time compute**: how to allocate compute to train the best possible weights. o1 discussed **test-time compute**: for an already-trained model, how much time to spend thinking when answering a question.

This was a fundamental paradigm shift. Before o1, once a model's capabilities were trained, they were fixed. The same model, the same question, asked 100 times — the capability ceiling would be the same 100 times, with perhaps some fluctuation from sampling randomness, but the ceiling remained unchanged. After o1, the same model could "think quickly" on simple questions and "think slowly" on complex ones. Slow thinking consumed more inference compute (generating longer chains of thought tokens), but produced more accurate answers. **Capabilities became dynamic, depending on how much compute budget you were willing to allocate to a given answer.**

The numbers from the AIME 2024 mathematics competition best illustrate the magnitude of this shift:[^4]

| Model | AIME 2024 |
|------|:--:|
| GPT-4o (no chain of thought) | 12.1% |
| o1 (with chain of thought) | 74.4% |
| Improvement | +62.3 percentage points |

Note: GPT-4o and o1 likely had similar base pre-training capabilities; o1's base model may not have been much stronger than GPT-4o. The gap came primarily from **those extra tens of seconds of inference time.** GPT-4o "guesses directly"; o1 "thinks first, then answers." This 62-percentage-point leap demonstrates one thing: as training-time scaling approaches diminishing returns, test-time scaling still has enormous room for expansion.

From the perspective of scientific history, this closely resembles "phase-space expansion" in physics. Classical mechanics describes motion in three-dimensional space; statistical mechanics extended phase space to 6N dimensions, making previously indescribable phenomena describable. Similarly, the Kaplan-Chinchilla scaling law described only the two- or three-dimensional space of "training" (parameters, data, compute); o1 extended this space into a fourth dimension — **inference time.** This is o1's significance as a scientific event, not its benchmark scores.

## IV. The Third Revision Has Not Yet Landed — But Its Contours Are Already Visible

If one had to write the scaling law's third revision in a single sentence, it could only be: **inference compute is not free — it has its own scaling law, and we haven't yet figured out its boundaries.**

Several key questions remain open:

**First, does test-time compute have a "Chinchilla moment"?** That is: for a given inference compute budget, is there an optimal "thinking length"? Direct answer generation (zero thinking), short chains of thought, long chains of thought, ultra-long chains of thought (with repeated verification and search) — which is optimal? No systematic study has yet produced anything analogous to Chinchilla's "compute-performance optimal curve." Each company has made engineering trade-offs in its own products: o1 lets the model think freely (but hides the process), DeepSeek-R1 lets the model think freely (and makes the process public), Claude 3.7 Sonnet lets users choose whether to think — but these are product design decisions, not theoretical breakthroughs.

**Second, where does the marginal return on inference compute begin to diminish?** DeepSeek-R1-0528 increased average thinking length from ~12k tokens to ~23k tokens, pushing AIME accuracy from 70% to 87.5%.[^5] This suggests that at least up to ~23k tokens, inference compute still yields significant positive returns. But what about 50k tokens? 100k tokens? Could there be a backlash of "the more you think, the more you drift"? Could a model amplify its initial biases rather than correct them in long chains of thought? These issues may not be obvious in closed-ended competition mathematics problems, but could be severe in open-ended policy analysis, medical diagnosis, and legal reasoning.

**Third, can training compute and inference compute substitute for each other?** This is the deepest strategic question. If they can — meaning that more expensive training (larger parameters, more data) can significantly reduce the thinking needed at inference time — then closed-source giants (OpenAI, Google, Anthropic) still hold an advantage, because they command the largest training compute. If they cannot — meaning that even with maximum training compute pushing the base model to its limits, it still requires extended thinking on complex problems — then inference compute itself becomes the new primary battleground, and this battlefield may favor DeepSeek-style efficiency approaches (reducing per-inference cost through architectural innovation, making "cheap slow thinking" viable).

This third question is in fact the central axis of large language model competition in 2025–2026. The release of GPT-4.5 (2025-02-27, which Sam Altman called "the last non-chain-of-thought model") was a public concession: pure training-time scaling had reached its end.[^6] But no one knows how far test-time compute scaling can go. It may have limits like training scaling; it may go further — because inference is a "self-feedback" process, while training is a "one-way" process.

## V. Scaling Law Didn't Die — It Migrated

From 2020 to 2026, Scaling Law underwent the following evolution:

| Phase | Time | Representative Work | Core Thesis | What Was Revised |
|------|------|----------|----------|--------------|
| First generation | 2020-01 | Kaplan et al.[^1] | More parameters → better performance (power law) | — |
| Revision 1 | 2022-03 | Chinchilla[^3] | Parameters and data should scale proportionally | Kaplan underestimated the importance of data |
| Revision 2 | 2024-09 | o1[^4] | Test-time compute is also scalable | Kaplan/Chinchilla discussed only training |
| Revision 3 (in progress) | 2025– | DeepSeek-R1, Claude 3.7, Qwen3 | Optimal allocation, diminishing returns, and efficiency of inference compute | Not yet closed |

"The End of Scaling Law" was a misnomer from the start. What ended was not scaling law itself — the power-law relationship still holds in the training phase. What ended was the overly narrow understanding that "scaling = stacking parameters."

The current landscape has three scaling axes operating simultaneously:

1. **Parameter/data scaling** (Kaplan → Chinchilla): Determines base capability during training;
2. **Inference-time scaling** (o1 → R1 → hybrid reasoning): Determines depth of performance at the moment of response;
3. **Efficiency scaling** (MLA → MoE → MTP): Uses architectural innovation to reduce per-step compute costs, enabling higher parameter counts and longer chains of thought at lower cost.

These three axes are not independent. Efficiency scaling (MLA, MoE, distillation) lowers inference costs, which in turn makes inference-time scaling commercially viable; the profits from inference-time scaling can then be reinvested in the next round of parameter/data scaling. The three form a positive feedback loop — DeepSeek's continuous iteration from V2 to V4 is the cleanest empirical demonstration of this cycle.

## VI. "Compute Budget" as a Unified Framework

When these three axes are viewed together, a more complete picture emerges.

The real change in large language models is not that one scaling law revised another, but that **the compute budget has expanded from a training-centric allocation to a full-lifecycle allocation.** In the GPT-3 era, the compute budget was spent almost entirely in the training phase. Once training was complete, inference cost was a fixed, non-dispatchable expense — each question could only be answered with a fixed amount of compute.

After o1, this model was broken. What you now have is a **dispatchable compute budget** that can be allocated across the following dimensions:

- **Invest more in training**: Larger parameters, more data, better alignment → higher base capability;
- **Invest more in inference**: Longer chains of thought, more verification, more search → deeper per-answer reasoning;
- **Optimize the architecture**: MLA compresses KV cache, MoE enables sparse activation, distillation transfers capability → reduces per-step compute consumption.

An ideal AI system should find the global optimum across all three dimensions — rather than, as in 2020, simply asking "how many parameters?" For providers, this is a three-way game of pricing strategy, latency strategy, and capability strategy. For users, it is a trade-off among "how much to spend, how long to wait, and how good an answer to get."

From this perspective, the true meaning of "The End of Scaling Law" is: **the era of training-centric single-axis scaling has ended.** In its place is the era of multi-axis scaling centered on compute budget allocation. This is not the end of scaling — it is scaling's transformation from a naive engineering intuition into a complex systems science.

## Commentary

Scaling Law has never been "overthrown." It has merely been transformed from a creed into a series of more nuanced questions.

Kaplan said "parameters and performance follow a power law" — this conclusion has never been refuted. But it didn't say how data should be proportioned. Chinchilla filled the gap: "Given fixed compute, parameters and data should scale proportionally." But it didn't say that compute could only be invested in training. o1 said: "Compute can also be invested at inference time, and doing so opens up an entirely new capability space." But it didn't say what the optimal allocation of inference compute looks like.

Each revision transformed scaling from a blunt "more" into an increasingly nuanced "how to allocate" — one that demands economic reasoning and systems thinking.

If Kaplan discovered the gold mine, Chinchilla taught you how to mine more efficiently, and o1 told you that the mine extends beneath the inference site as well — not just the training ground. And the third revision is still waiting for someone who can calculate the "optimal allocation across three axes."

This may be the most fascinating open problem in the science of large language models. And what makes it fascinating is precisely that it is no longer just science: it is simultaneously engineering, economics, and systems design — a question about how an entire AI civilization allocates its scarcest resource.

---

*This piece was compiled by the Endfield Industrial Historical Archives team: Fu Xuan (theoretical framework).*

---

[^1]: Kaplan et al., "Scaling Laws for Neural Language Models", arXiv:2001.08361, 2020-01-23. https://arxiv.org/abs/2001.08361
[^2]: Rae et al., "Scaling Language Models: Methods, Analysis & Insights from Training Gopher", arXiv:2112.11446, 2021-12. https://arxiv.org/abs/2112.11446
[^3]: Hoffmann et al., "Training Compute-Optimal Large Language Models", arXiv:2203.15556, 2022-03-29. https://arxiv.org/abs/2203.15556
[^4]: OpenAI, "Learning to Reason with LLMs", 2024-09-12. https://openai.com/research/learning-to-reason-with-llms
[^5]: HuggingFace, "deepseek-ai/DeepSeek-R1-0528", 2025-05-28. https://huggingface.co/deepseek-ai/DeepSeek-R1-0528
[^6]: OpenAI, "Introducing GPT-4.5", 2025-02-27. https://openai.com/index/introducing-gpt-4-5/
