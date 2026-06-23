# Treatise: The Open-Source Movement

> The open-source movement in large models was not a straight line from closed to open. It was first ignited by a weight leak, then repeatedly rewritten by corporate strategy, community replication, national competition, and licensing disputes. What follows is the factual thread: who released what and when, and whether what was released was code, weights, data, or merely the label of "open."

---

## I. Overview

Before 2023, open-source language models had existed before. EleutherAI's GPT-Neo, GPT-J, and GPT-NeoX, and BigScience's BLOOM all demonstrated that communities could train large models. But after ChatGPT, the industry's attention converged on whether it was possible to obtain a powerful, locally deployable, fine-tunable conversational base model. This question was truly pushed to the forefront after the LLaMA weight leak in February 2023.

From that point on, "open-source AI" split into at least several layers of meaning:

- **Open weights**: Model parameters can be downloaded for deployment, fine-tuning, and quantization;
- **Open code**: Training, inference, and evaluation code is inspectable;
- **Open data information**: What data the model used, how it was filtered, and how it was processed is known;
- **Open license**: Any use is permitted, including commercial use, without discriminatory restrictions.

What the large model industry commonly calls "open-source" is, more often than not, merely "open weights." The controversy that OSI later pursued around the Open Source AI Definition (OSAID) was precisely to address this conflation of terms.[^1]

---

## II. 2023: The LLaMA Leak and Community Explosion

**2023-02-24**: Meta released LLaMA in 7B, 13B, 33B, and 65B variants. At the time, Meta did not open it for public download but provided weights to approved researchers under a research license. The paper emphasized "small and efficient": the 13B model surpassed GPT-3 on multiple benchmarks, and the 65B approached much larger models like Chinchilla and PaLM.[^2]

Shortly after release, LLaMA weights leaked via 4chan and BitTorrent. By **2023-03-08**, mainstream tech media had reported on the leak, noting that it had rapidly sparked debates over AI safety, research openness, and weight proliferation.[^3]

After the leak, the community did not merely "spectate" the model — it immediately turned it into production material:

| Date | Event | Significance |
|------|-------|--------------|
| 2023-02 | LLaMA released and leaked | A strong base model enters the public network in an irretrievable manner for the first time |
| 2023-03 | Stanford Alpaca released | Demonstrated low-cost instruction fine-tuning of LLaMA, showing the path to "making a usable chat model cheaply" |
| 2023-03 | Vicuna released | Fine-tuned with ShareGPT conversation data, catalyzing community evaluation and chat model replication |
| ~2023-04 | GPT4All, Koala, RedPajama, and others followed | Datasets, fine-tuning, quantization, and local runtime toolchains began to take shape |

A defining feature of this phase of the open-source movement was: **it was not initiated by license authorization, but by factual availability**. Once weights entered the public network, developers built toolchains around them; once toolchains were established, new model releases had to account for downstream components like Hugging Face, llama.cpp, vLLM, local quantization, and LoRA fine-tuning.

This is the historical position of the LLaMA leak: it did not provide a complete open-source license, but it provided a base that was strong enough, small enough, and replicable enough. The open ecosystem emerged before formal authorization.

---

## III. Meta's Strategic Pivot: From Llama 2 to Llama 3.1

**2023-07-18**: Meta and Microsoft released Llama 2 in 7B, 13B, and 70B variants, including pre-trained models and Llama 2-Chat. Unlike LLaMA 1, Llama 2 explicitly permitted research and commercial use, but the license retained certain restrictions: for example, services with more than 700 million monthly active users needed to apply to Meta for an additional license.[^4]

This step rewrote an "accident" into a "strategy." Meta's choice carried three layers of meaning:

1. **Acknowledging the community path as effective**: The ecosystem expansion after LLaMA 1's leak proved that open weights could rapidly generate influence;
2. **Turning openness into a distribution strategy**: Through channels like Azure and Hugging Face, Llama 2 entered enterprise and developer workflows;
3. **Retaining platform-level control**: The license permitted commercial use for most but set thresholds for mega-platforms.

**2024-04**: Meta released Llama 3 in 8B and 70B variants; **2024-07-23**: Meta released Llama 3.1, whose flagship model reached 405B parameters with 128K context support, pushing open model capabilities close to the closed-source frontier.[^5]

That same day, Mark Zuckerberg published "Open Source AI Is the Path Forward." The article framed Llama's open approach as an infrastructure play similar to Linux: openness allows developers to customize models, reduces vendor lock-in, and improves security audit capability; for Meta, an open ecosystem could also erode competitors' closed-source moats.[^6]

But Llama 3.1 also brought the controversy into the open: it was an open-weight model, but it did not equal open-source AI in the OSI sense. Reasons included: the license imposed restrictions on very large users, training data was not fully disclosed, and the training process could not be fully reproduced externally.

---

## IV. The European Route: Mistral Productizes "Small and Strong"

After LLaMA, Europe's most important open-weight player was Mistral AI. Its approach was not to pursue the largest parameters from the start, but to put "efficiency" and "permissive licensing" first.

**2023-09-27**: Mistral released Mistral 7B. It was a 7.3B-parameter model using GQA and Sliding Window Attention, officially claimed to surpass Llama 2 13B on multiple benchmarks, and released under the Apache 2.0 license, permitting unrestricted use.[^7]

**2023-12-11**: Mistral released Mixtral 8x7B. It employed a sparse MoE architecture with 46.7B total parameters, but only about 12.9B parameters activated per token. Officially claimed to surpass Llama 2 70B on most benchmarks with roughly 6x faster inference speed, and to match or exceed GPT-3.5 on multiple standard benchmarks. Mixtral was also released with open weights under Apache 2.0.[^8]

Mistral's factual contributions were:

- Advancing open-weight models from "following Llama" to an independent architectural path;
- Proving that small models and MoE could achieve advantages on the cost/performance curve;
- Using permissive licenses like Apache 2.0 to reduce legal costs for enterprise adoption.

However, Mistral subsequently released more closed-source or API-first commercial models. This demonstrates that open weights do not necessarily mean a company has chosen "full open-source" as its overall strategy. More precisely, Mistral treated open models as one component of entering the market, building reputation, and expanding its ecosystem.

---

## V. The Chinese Route: Qwen and DeepSeek Expand the Open-Weight Map

After 2024, Chinese teams became a major source of open-weight models. The two most prominent lines were Alibaba's Qwen and DeepSeek.

### Qwen: A model family spanning multiple sizes, languages, and tasks

Qwen's strategy was model-family-style releases: a single generation of models covering multiple parameter scales, accompanied by specialized models for code, math, vision, and more.

**2024-09**: Qwen2.5 was released. Officially described as a large-scale open-source release, it included Qwen2.5, Qwen2.5-Coder, Qwen2.5-Math, and other series. The main Qwen2.5 model covered sizes from 0.5B, 1.5B, 3B, 7B, 14B, 32B, to 72B, with training data reaching up to 18T tokens, supporting 128K context and more than 29 languages. The official documentation also stated that most open models used the Apache 2.0 license, with the exception of 3B and 72B.[^9]

**2025-04**: Qwen3 was released. Qwen3 opened two MoE models — Qwen3-235B-A22B and Qwen3-30B-A3B — along with multiple dense models from 0.6B to 32B. Officially, these models were released under the Apache 2.0 license and supported both "Thinking" and "Non-Thinking" modes.[^10]

Qwen's influence extended beyond the models themselves — it provided the downstream ecosystem with stable Chinese-language, multilingual, code, and mathematical foundations. DeepSeek-R1's distilled models included multiple versions based on Qwen2.5, further cementing Qwen's infrastructure status within the open ecosystem.[^11]

### DeepSeek: From open weights to open reasoning models

DeepSeek's open approach placed greater emphasis on the idea that "frontier capabilities can also be open."

**2024-12**: DeepSeek-V3 was released. V3 was a MoE model with 671B total parameters and 37B activated per token, using MLA, DeepSeekMoE, auxiliary-loss-free load balancing, and Multi-Token Prediction. The official repository stated that V3 was pre-trained on 14.8T tokens at a training cost of 2.788M H800 GPU hours, achieving performance approaching closed-source frontier models.[^12]

**2025-01**: DeepSeek-R1 was released. R1 was based on DeepSeek-V3-Base, focused on reasoning capabilities. DeepSeek simultaneously open-sourced DeepSeek-R1-Zero, DeepSeek-R1, and six dense small models distilled from R1, based on Qwen2.5 and Llama series backbones. DeepSeek explicitly stated that R1 achieved comparable levels to OpenAI o1 on mathematics, code, and reasoning tasks.[^11]

The key significance of DeepSeek-R1 was not just "open weights" but pushing reasoning models — a previously highly closed-source direction — into the open ecosystem: researchers could download the model, observe reasoning outputs, distill small models, and reproduce experimental directions. This advanced the open-weight movement from "catching up with chat models" to "catching up with reasoning models."

---

## VI. The OSI Definition Dispute: What Counts as Open Source AI

As Llama, Mistral, Qwen, DeepSeek, and other models gained popularity, the term "open-source AI" became increasingly confused. Some called open weights "open source," some demanded that training code and data also be open; some focused on freedom of commercial use, some on the ability to reproduce training.

**2024-10-28**: The Open Source Initiative released the Open Source AI Definition 1.0. The definition emphasized that Open Source AI should confer four freedoms: use, study, modify, and share; and the "preferred form for making modifications" to a machine learning system should include three categories of elements: sufficient information about training data, training and running code, and model parameters.[^13]

The key point was not that every training sample's raw text must be disclosed. OSI's articulation was more nuanced: if data cannot be fully shared, sufficiently detailed information about data sources, scope, selection, annotation, processing, and filtering must be provided, enabling capable parties to build a "substantially equivalent" system.[^1]

The controversy concentrated here:

- **Model companies worried that data disclosure would bring copyright, privacy, and commercial risks**;
- **Open-source organizations worried that merely opening weights would downgrade "open source" to a marketing term**;
- **Researchers cared about reproducibility**: without knowing the data and training process, it was difficult to judge where a model's capabilities came from;
- **Enterprise users cared about usage freedom**: if a license restricted specific scales, specific uses, or specific competitors, it did not constitute the free use defined by traditional open-source definitions.

Thus, the OSI definition pushed models like Llama into an awkward position: they were extremely important to the industry and had genuinely opened their weights, but they did not necessarily satisfy the full definition of Open Source AI. A more accurate term is **open-weight models**.

---

## VII. Factual Thread Table

| Date | Participant | Event | Form of Openness |
|------|-----------|-------|------------------|
| 2023-02 | Meta / community | LLaMA released and weights leaked | Factual availability, not formal authorization |
| 2023-03–04 | Stanford, Berkeley, Nomic, Together, etc. | Alpaca, Vicuna, GPT4All, RedPajama, etc. emerged | LLaMA-based fine-tuning, data, and toolchain proliferation |
| 2023-07 | Meta / Microsoft | Llama 2 released | Open weights, permits most commercial use, but with scale restrictions |
| 2023-09 | Mistral | Mistral 7B released | Apache 2.0 open weights |
| 2023-12 | Mistral | Mixtral 8x7B released | Apache 2.0 open weights, MoE route |
| 2024-07 | Meta | Llama 3.1 405B and open-source manifesto | Open weights, strategic openness |
| 2024-09 | Qwen | Qwen2.5 model family released | Multi-size open weights, partially Apache 2.0 |
| 2024-10 | OSI | OSAID 1.0 released | Defines four freedoms and three categories of necessary elements for Open Source AI |
| 2024-12 | DeepSeek | DeepSeek-V3 released | Open weights, frontier MoE model |
| 2025-01 | DeepSeek | DeepSeek-R1 released | Open reasoning model and distilled models |
| 2025-04 | Qwen | Qwen3 released | Multi-size dense and MoE open weights, Apache 2.0 |

---

## VIII. Trend Analysis

- **The first phase was leak-driven**: LLaMA 1's impact came from factual diffusion, not license design.
- **The second phase was corporate strategy-driven**: Llama 2 and Llama 3.1 turned open weights into a platform competition tool.
- **The third phase was multi-center competition**: Mistral, Qwen, and DeepSeek proved that open weights were no longer defined solely by Meta.
- **The fourth phase was definition tightening**: OSI attempted to distinguish "open weights," "open models," and "open source AI," preventing terminology from being co-opted by marketing.
- **The most stable reality is layered openness**: Weights are the easiest to open, training code is next, and training data is the hardest; the more permissive the license, the easier commercial adoption becomes, but the harder it is for companies to retain strategic control.

---

## Commentary

The open-source movement took on a different shape in the large model era. In traditional software open source, the core was source code; in large models, the core is a combination of weights, data, training processes, and compute experience. Releasing weights alone is sufficient to transform the industry's division of labor, yet insufficient for external parties to fully understand how the model generates. The LLaMA leak ignited the ecosystem, Mistral proved the efficiency route of permissive licensing, Qwen and DeepSeek pushed open weights toward multilingual, reasoning, and frontier capabilities, and OSI reminded the industry: openness is not a slogan but a set of freedoms that can be verified. The historian recording this should take apart the words "open source" and examine: which freedoms are genuine, which are merely downloadable, which are strategic giveaways, and which are truly public infrastructure.

---

*Compiled by the Endfield Industrial Historian Team: Yvonne (Architecture Audit)*

---

(For the Llama family's open-source journey, see "The Llama Dynasty"; for DeepSeek's open-source strategy, see "The DeepSeek Dynasty"; for Qwen's dual-track approach, see "The Qwen Dynasty.")

[^1]: Open Source Initiative, "The Open Source AI Definition – 1.0". https://opensource.org/ai/open-source-ai-definition
[^2]: Touvron et al., "LLaMA: Open and Efficient Foundation Language Models", arXiv:2302.13971, 2023-02. https://arxiv.org/abs/2302.13971
[^3]: The Verge, "Meta's LLaMA model leaked online, sparking debate over AI safety", 2023-03-08. https://www.theverge.com/2023/3/8/23629362/meta-ai-language-model-llama-leak-online
[^4]: Meta AI, "Llama 2: Open Foundation and Fine-Tuned Chat Models", 2023-07-18. https://ai.meta.com/blog/llama-2/
[^5]: Meta AI, "Introducing Llama 3.1: Our most capable models to date", 2024-07-23. https://ai.meta.com/blog/meta-llama-3-1/
[^6]: Mark Zuckerberg, "Open Source AI Is the Path Forward", Meta, 2024-07-23. https://about.fb.com/news/2024/07/open-source-ai-is-the-path-forward/
[^7]: Mistral AI, "Mistral 7B", 2023-09-27. https://mistral.ai/news/announcing-mistral-7b
[^8]: Mistral AI, "Mixtral of experts", 2023-12-11. https://mistral.ai/news/mixtral-of-experts
[^9]: Qwen Team, "Qwen2.5: A Party of Foundation Models!", 2024-09. https://qwenlm.github.io/blog/qwen2.5/
[^10]: Qwen Team, "Qwen3: Think Deeper, Act Faster", 2025-04. https://qwenlm.github.io/blog/qwen3/
[^11]: DeepSeek-AI, "DeepSeek-R1", GitHub repository, 2025. https://github.com/deepseek-ai/DeepSeek-R1
[^12]: DeepSeek-AI, "DeepSeek-V3", GitHub repository, 2024. https://github.com/deepseek-ai/DeepSeek-V3
[^13]: Open Source Initiative, "The Open Source Initiative Announces the Release of the Industry's First Open Source AI Definition", 2024-10-28. https://opensource.org/blog/the-open-source-initiative-announces-the-release-of-the-industrys-first-open-source-ai-definition
