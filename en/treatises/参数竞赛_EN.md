# Treatise: The Parameter Race

> In 2020, GPT-3 pushed parameters to 175B, and the whole world believed "bigger is better." Two years later, Chinchilla said, "Simply stacking parameters is not enough — data and parameters must be aligned." A year after that, LLaMA surpassed GPT-3 with just 13B, shattering the myth that "bigger necessarily means stronger." By 2024, the parameter counts of frontier models became the number companies were least willing to disclose — the competition shifted from "how many parameters I have" to "what each of my parameters can do."

---

## I. Overview

The parameter race of the large model era can be broadly divided into three acts.

The first act was the inflation period (2020–2022): GPT-3 at 175B, PaLM at 540B — every year brought a new "largest model in history" to break the record. The second act was the correction period (2022–2023): Chinchilla demonstrated through the data side of the scaling law that many large models were actually "underfed"; LLaMA achieved better results with fewer parameters and more data. The third act was the receding tide (2023–2025): GPT-4 no longer disclosed its parameter count; Mixtral and DeepSeek-V2 used MoE to separate "total parameters" from "active parameters"; Llama 3.1 405B was a dense behemoth, but Meta simultaneously released 8B and 70B versions; when companies released models, benchmark scores and inference costs attracted more attention than parameter counts.

The apex of this arc was PaLM 540B. After that, "biggest" was no longer the goal — "best value" was.

---

## II. 2020–2022: The Inflation Period — Bigger Is Better Was Iron Law

### GPT-3: 175B Kicks Things Off

In June 2020, OpenAI released GPT-3. 175B parameters, a dense decoder-only Transformer. This number at the time was not "slightly bigger than the last model" — it was over 100 times larger than GPT-2's 1.5B and more than 15 times larger than the contemporary T5-11B. The paper demonstrated large-scale task performance under few-shot, one-shot, and zero-shot settings, with the core message being: you don't need to fine-tune for every task; give the model enough parameters and it can learn how to do things from context alone.[^1]

GPT-3's historical significance lay not in the absolute parameter count, but in turning "keep scaling up" from a research hypothesis into an industry roadmap. Running 175B for inference required multi-GPU coordination, model parallelism, and customized inference systems, but beyond the research paper, it was made available to developers directly through the OpenAI API. Scale was not just a number confined to a paper — it was a product that could be called externally.

### PaLM: 540B Hits the Ceiling

In April 2022, Google released PaLM. 540B parameters, trained on 6,144 TPU v4 chips using Google's Pathways system. The paper reported significant improvements in language understanding, reasoning, code generation, and other tasks, with many Big-Bench reasoning tasks showing near-"emergent" performance.[^2]

PaLM was the apex of the large model inflation period. It proved that 540B parameters could unlock new capabilities — not linear growth, but certain reasoning and coding abilities that smaller models simply did not possess. But PaLM also exposed three problems. First, the cost was enormous: 6,144 TPU v4 chips to train a single model — the number of organizations worldwide that could do this was vanishingly small. Second, it was never made publicly accessible: PaLM was never opened up via API the way GPT-3 was. Third, it both proved and challenged the "bigger is better" belief — if 540B worked, should pushing to 1T or 10T work even better? If not, then the iron law of "bigger is better" had hit its ceiling.

### Key Data

| Date | Model | Parameters | Significance | Source |
|------|-------|------------|--------------|--------|
| 2020-06 | GPT-3 | 175B (dense) | Made "bigger is better" an industry consensus | [^1] |
| 2022-04 | PaLM | 540B (dense) | Peak of the inflation period; also exposed cost problems | [^2] |

---

## III. 2022–2023: The Correction Period — Data Is the Real Bottleneck

### Chinchilla: Compute Cannot Only Feed Parameters

In March 2022 — one month before PaLM's release — DeepMind's Hoffmann et al. proposed the Chinchilla scaling law. The paper's core finding was: given a fixed compute budget, scaling both parameters and data simultaneously is needed to reach optimality. At the time, large models generally had "too many parameters, too little data"; by Chinchilla's standards, these models were far from fully trained.[^3]

Chinchilla, trained with 70B parameters on 1.4T tokens, surpassed Gopher 280B (trained on 300B tokens) on multiple benchmarks. The message was sharp: all that money you spent stacking parameters was wasted — if you had spent it on more training data, a smaller model could have done better.

Chinchilla's release was nearly simultaneous with PaLM. On one side was a 540B behemoth; on the other was a 70B "small but well-fed" model — the two paths began to diverge. Over the next two years, the industry gradually shifted from "how many parameters do you have" to "how much data did you train on." Chinchilla was the origin of this fault line.

### LLaMA: Small Models Can Do What Big Models Do

In February 2023, Meta released LLaMA. 7B, 13B, 33B, and 65B, all dense models. The paper claimed that LLaMA-13B surpassed GPT-3 175B on most benchmarks, and LLaMA-65B approached PaLM-540B and Chinchilla-70B.[^4]

This was the loudest counter-punch in the history of the parameter race. 175B could not beat 13B — not because of any novel architecture, but because LLaMA was trained on 1T+ tokens while GPT-3 was trained on only about 300B tokens. The difference in data volume overwhelmed the difference in parameter count.

LLaMA's historical impact went beyond the technical. Its weight leak sparked a community movement (see "Treatise: The Open-Source Movement"). 7B and 13B could run and be fine-tuned on a single consumer-grade GPU, meaning "good enough models" no longer required thousand-chip clusters. Tools like LoRA, QLoRA, and llama.cpp made fine-tuning and deployment extremely cheap — the parameter race shifted from "who can train the biggest model" to "who can get the best results at the lowest cost."

### Key Data

| Date | Model | Parameters / Data | Core Finding | Source |
|------|-------|-------------------|--------------|--------|
| 2022-03 | Chinchilla | 70B / 1.4T tokens | Optimal models require balanced data and parameters | [^3] |
| 2023-02 | LLaMA | 7B–65B / 1T+ tokens | 13B beats GPT-3 175B; data volume is key | [^4] |

---

## IV. 2023–2025: The Receding Tide — We're Not Telling You the Parameters

### GPT-4: Parameters Become Classified

In March 2023, OpenAI released the GPT-4 technical report. The report ran to nearly a hundred pages, but contained one critical blank: it did not disclose the parameter count, architectural details, training data volume, or training cost. The technical report explicitly stated that, for competitive and safety reasons, it had decided not to reveal this information.[^5]

This blank was itself a turning point in the history of the parameter race. From GPT-1 to GPT-3, OpenAI disclosed parameter counts for every generation. GPT-4's silence meant the "parameter race" as a public narrative was over — not because models had become smaller, but because companies found that not disclosing was more advantageous than disclosing. External reports suggested GPT-4 used a MoE architecture with total parameters possibly reaching approximately 1.8T, but these figures were never officially confirmed and should not be cited as historical fact.

### MoE Changed the Definition of "Parameters"

In December 2023, Mistral released Mixtral 8x7B. Total parameters: 46.7B, but each token only activated 12.9B. The marketing message was: "performance exceeding Llama 2 70B at the cost of 12.9B."[^6]

In May 2024, DeepSeek-V2 was released. Total parameters: 236B, with only 21B activated.[^7] API pricing was roughly 1% of GPT-4 Turbo.

The common feature of these MoE models was: very large total parameter counts, but only a handful of experts doing the actual work. The old-era "parameter race" compared "how many total B," but MoE split "total parameters" from "active parameters." A 200B MoE and a 200B dense model could differ in inference cost by five to ten times. Looking at total parameters alone was no longer sufficient to judge a model's true cost and speed.

### Small Models Strike Back: The Return of Density

In July 2024, Meta released Llama 3.1. The largest variant, 405B, was a dense model — not MoE, but a purely dense architecture of large parameters plus large data. Zuckerberg published "Open Source AI Is the Path Forward" on launch day, emphasizing the strategic significance of the open-weight approach.[^8]

But Llama 3.1 did not release only a 405B model. It simultaneously open-sourced 8B and 70B variants. Meta was clear: 405B was the flagship, but 8B and 70B were what most people would actually use. The large model was trained to "define the frontier"; the small models were deployed for "practical usability."

This logic replicated across the industry. In September 2024, Qwen2.5 was released, spanning sizes from 0.5B to 72B. In January 2025, alongside DeepSeek-R1's release, six smaller models distilled from R1 were made available, the smallest being just 1.5B. In April 2025, Qwen3 was released, covering 0.6B to 32B dense models and a 235B-A22B MoE variant.[^9][^10][^11]

The parameter race shifted from "who is biggest" to "who performs well across which sizes." Small models were no longer a "compromise" — they were a "choice."

### Key Data

| Date | Model | Parameters | Signal | Source |
|------|-------|------------|--------|--------|
| 2023-03 | GPT-4 | Undisclosed (rumored ~1.8T MoE, unconfirmed) | Frontier models no longer disclose parameters | [^5] |
| 2023-12 | Mixtral 8x7B | 46.7B total / 12.9B active | MoE redefined "how big" | [^6] |
| 2024-05 | DeepSeek-V2 | 236B total / 21B active | MoE achieves frontier capabilities at low cost | [^7] |
| 2024-07 | Llama 3.1 | 8B / 70B / 405B | Large and small models released together | [^8] |
| 2024-09 | Qwen2.5 | 0.5B–72B multiple sizes | Model family covers the full range | [^9] |
| 2025-01 | DeepSeek-R1 distilled models | 1.5B–70B | Small models can reason too | [^10] |
| 2025-04 | Qwen3 | 0.6B–32B dense + MoE | "Thinking/Non-Thinking" dual mode | [^11] |

---

## V. Factual Thread Table

| Phase | Date | Key Event | Core Parameter Narrative |
|-------|------|-----------|--------------------------|
| Inflation | 2020-06 | GPT-3 175B | "More parameters = greater capability = moat" |
| Inflation | 2022-04 | PaLM 540B | Peak of "biggest is strongest" |
| Correction | 2022-03 | Chinchilla 70B | "Stacking parameters alone is waste; data must keep pace" |
| Correction | 2023-02 | LLaMA 13B > GPT-3 175B | "Data matters more than parameters" |
| Receding | 2023-03 | GPT-4 withholds parameters | "Don't say how big — show results" |
| Receding | 2023-12 | Mixtral 46.7B→12.9B | MoE rendered "parameters" meaningless |
| Receding | 2024-05 | DeepSeek-V2 236B→21B | MoE + low pricing rewrote competition rules |
| Receding | 2024-07 | Llama 3.1 8B/70B/405B | Flagship sets direction; small models drive volume |
| Receding | 2025-01 | DeepSeek-R1 distilled 1.5B–70B | Reasoning capability trickles down to small models |

---

## VI. Trend Analysis

- **Data replaced parameters as the growth engine**: GPT-3 trained 175B on 300B tokens; LLaMA trained 13B on 1T+ tokens and surpassed it. Chinchilla's law of "data and parameters must be balanced" was repeatedly validated. Parameter growth subsequently slowed, and competition over data scale and quality became the main thread.
- **MoE dissolved the traditional meaning of "parameter count"**: A 200B MoE and a 200B dense model are completely different in cost, speed, and deployment difficulty. Reporting "total parameters" without "active parameters" is now close to misleading.
- **Closed-source frontiers no longer publish parameters**: GPT-4 was the turning point. Thereafter, closed-source models like Claude 3 and Gemini also typically did not disclose detailed parameter counts. Parameters transformed from "bragging rights" into "trade secrets."
- **Small models shifted from compromise to strategy**: Qwen2.5 released sizes from 0.5B to 72B; DeepSeek distilled from 1.5B to 70B; Llama 3.1 released 8B and 405B simultaneously — model companies no longer pursued "one biggest model" but instead offered "a suite suited to different scenarios."
- **Inference cost and deployment efficiency became the new metrics**: DeepSeek-V2's API pricing was roughly 1% of GPT-4 Turbo — a figure with more impact than its parameter count. As parameters receded, "cost per token" and "inference throughput" became the new hard currency.

---

## Commentary

The parameter race went from frenzy to cold reality — not because people suddenly decided parameters were unimportant, but because it took three years to figure out one thing: parameters are cost, not capability.

GPT-3's 175B convinced everyone that "bigger is better." PaLM's 540B pushed that belief to the ceiling of available compute. Then Chinchilla stepped forward and said: all that money you spent stacking parameters was a waste — data is the real bottleneck. LLaMA immediately proved the point: 13B parameters could beat 175B, provided it was fed enough good data.

After that, parameter counts ceased to be the number the industry truly cared about. Companies started hiding parameters, talking about MoE, and releasing both large and small models simultaneously. By 2024, the "hard currency" of frontier competition had shifted from "how many B I have" to "how much you pay per token."

This does not mean "parameters don't matter anymore." Rather, parameters became like engine displacement in cars: large engines once signaled prestige, but eventually the question became "how much horsepower do you actually need." What truly matters is not how many cylinders you have crammed under the hood, but the total cost of getting the car on the road.

---

*Compiled by the Endfield Industrial Historian Team: Ptilopsis (Lead Data Analyst)*

---

(For a systematic analysis of Scaling Laws, see "The End and Rebirth of Scaling Laws.")

[^1]: Brown et al., "Language Models are Few-Shot Learners", NeurIPS 2020 / arXiv:2005.14165, 2020-05-28. https://arxiv.org/abs/2005.14165
[^2]: Chowdhery et al., "PaLM: Scaling Language Modeling with Pathways", arXiv:2204.02311, 2022-04-05. https://arxiv.org/abs/2204.02311
[^3]: Hoffmann et al., "Training Compute-Optimal Large Language Models", NeurIPS 2022 / arXiv:2203.15556, 2022-03-29. https://arxiv.org/abs/2203.15556
[^4]: Touvron et al., "LLaMA: Open and Efficient Foundation Language Models", arXiv:2302.13971, 2023-02-27. https://arxiv.org/abs/2302.13971
[^5]: OpenAI, "GPT-4 Technical Report", arXiv:2303.08774, 2023-03-15. https://arxiv.org/abs/2303.08774
[^6]: Mistral AI, "Mixtral of experts", 2023-12-11. https://mistral.ai/news/mixtral-of-experts
[^7]: DeepSeek-AI, "DeepSeek-V2: A Strong, Economical, and Efficient Mixture-of-Experts Language Model", arXiv:2405.04434, 2024-05-07. https://arxiv.org/abs/2405.04434
[^8]: Meta AI, "Introducing Llama 3.1: Our most capable models to date", 2024-07-23. https://ai.meta.com/blog/meta-llama-3-1/
[^9]: Qwen Team, "Qwen2.5: A Party of Foundation Models!", 2024-09. https://qwenlm.github.io/blog/qwen2.5/
[^10]: DeepSeek-AI, "DeepSeek-R1", GitHub repository, 2025-01. https://github.com/deepseek-ai/DeepSeek-R1
[^11]: Qwen Team, "Qwen3: Think Deeper, Act Faster", 2025-04. https://qwenlm.github.io/blog/qwen3/
