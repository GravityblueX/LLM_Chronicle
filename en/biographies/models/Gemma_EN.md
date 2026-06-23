# The Biography of Gemma

> Gemma was the first time Google seriously committed to open-source large models. Previously, Google's open-source strategy was "open-source small models, keep large models closed" — T5 could be open-sourced, but PaLM could not. Gemma changed this logic: Google decided to distill Gemini's technology into open-source models, using the open-source ecosystem to feed back into the competitiveness of its closed-source products.

---

## I. Technical Background

During 2023–2024, the open-source large model landscape was dominated by Meta's Llama series. The releases of Llama 1 (2023-02) and Llama 2 (2023-07) gave the open-source community its first base models capable of competing with GPT-3.5.[^1][^2] Subsequently, Mistral (France) demonstrated with Mistral 7B and Mixtral 8x7B that small teams could also build excellent models; China's Qwen (Alibaba) and DeepSeek were also rapidly catching up.[^3][^4]

Google was absent from this track. It had the best closed-source models (PaLM 2, Gemini) but no corresponding open-source versions. T5 (2019) and Flan-T5 (2022) were open-sourced but were small models unable to compete with Llama 70B.[^5] Google had virtually no presence in the open-source large model domain.

In early 2024, Google finally decided to enter the arena. Gemma was the product of that decision — not training a new model from scratch, but distilling Gemini's technical essence into smaller models and releasing them in open-source form.

---

## II. Core Events

### 2.1 Gemma 1 (2024-02): Google's open-source beginning

On February 21, 2024, Google released Gemma 1 in two versions: **2B and 7B**.[^6]

Gemma 1's positioning was clear: not to compete with Llama 2 70B on parameter count, but to match Llama 2 7B on performance at the same scale. Google claimed Gemma 1's technology derived from Gemini — using the same architectural design, training data processing pipeline, and training methodology, but with parameters dramatically reduced.[^6]

Key specifications:

| Metric | Gemma 1 7B | Llama 2 7B | Mistral 7B |
|--------|-----------|-----------|-----------|
| Parameters | 8.5B | 6.7B | 7.3B |
| Training data | 6T tokens | 2T tokens | Not disclosed |
| Context length | 8192 | 4096 | 32768 |
| Release date | 2024-02 | 2023-07 | 2023-09 |

Gemma 1 7B outperformed Llama 2 7B on most evaluation benchmarks, with mixed results against Mistral 7B.[^6] While not a "crushing victory," for Google's first open-source attempt, it was sufficiently earnest.

Gemma 1 also had an important feature: **fully open weights, permitting commercial use.** This was more permissive than Llama 2's license (which restricted users with over 700 million monthly active users) and Mistral's Apache 2.0.[^6]

### 2.2 Gemma 2 (2024-06): Best-in-class at equivalent scale

On June 27, 2024, Google released Gemma 2 in three versions: **9B, 27B, and a 2.6B lightweight variant**.[^7]

Gemma 2's core improvements:

- **Knowledge distillation**: Knowledge was distilled from a larger model (presumably Gemini Pro or Ultra level) into smaller models. This was Google's unique advantage — possessing the world's best closed-source models as "teachers."[^7]
- **Alternating attention mechanism**: Alternating between global attention and local sliding window attention, achieving a better balance between performance and efficiency.[^7]
- **More training data**: Gemma 2 27B was trained on 13T tokens, more than double Gemma 1 7B's 6T tokens.[^7]

Gemma 2's evaluation results were remarkably strong: **Gemma 2 27B surpassed Llama 3 70B on most evaluations** — a 27B model defeating a competitor 2.5× its size.[^7] Gemma 2 9B also ranked at the top of its size class (7B–9B tier), surpassing Llama 3 8B and Mistral 7B.[^7]

Gemma 2's success proved that Google's "knowledge distillation" strategy was effective: using knowledge from closed-source large models to boost the performance of open-source small models was an asymmetric competitive advantage.

### 2.3 Gemma 3 (2025-03): Open-source multimodal

On March 12, 2025, Google released Gemma 3 in four versions: 1B, 4B, 12B, and 27B.[^8]

Gemma 3's greatest breakthrough was **native multimodality**: supporting text, image, and video input (the 1B version supports text only). This was the first time Google open-sourced multimodal capabilities to the community.[^8]

Key features:

- **Multimodal understanding**: Gemma 3 12B and 27B could understand images and short videos — a capability that same-scale models from Llama 3 and Qwen 2 did not possess (they required additional visual encoders).[^8]
- **128K context**: Upgraded from Gemma 2's 8192 to 128K tokens, supporting long document processing.[^8]
- **ShieldGemma safety filter**: Built-in safety mechanisms filtering harmful inputs and outputs.[^8]

Gemma 3 27B briefly ranked first among same-scale open-source models in the LMSYS Arena (human blind evaluation rankings), surpassing Llama 3 70B and Qwen 2 72B.[^9] A 27B multimodal model defeating a 70B text-only model once again validated the "distillation + multimodal" strategy.

### 2.4 Gemma 3n (2025-05): On-device optimization

In May 2025, Google released Gemma 3n, optimized for phones and edge devices.[^10] Gemma 3n came in two versions: E2B (effective parameters ~2B) and E4B (effective parameters ~4B); although total parameters were 5B and 8B respectively, through a selective activation mechanism, only about 40% of parameters were used during inference.[^10]

Gemma 3n's positioning was to run large models on phones — achieving local inference on devices like Pixel and Samsung Galaxy without requiring internet connectivity.

---

## III. Impact and Successors

### 3.1 Positioning in the open-source ecosystem

Gemma occupied a unique ecological niche in the open-source large model ecosystem: **not the largest, but possibly the best-performing at equivalent scale.**

| Model | Parameters | Core advantage | Primary competitors |
|-------|-----------|----------------|-------------------|
| Llama 3 | 8B/70B/405B | Largest parameters, broadest ecosystem | Gemma, Qwen, Mistral |
| Qwen 2.5 | 0.5B–72B | Strongest Chinese, multi-size | Gemma, Llama |
| Mistral | 7B/8x7B/8x22B | MoE architecture, inference efficiency | Gemma, Llama |
| **Gemma 3** | 1B–27B | **Native multimodal, excellent distillation** | Llama, Qwen |

Gemma's competitive advantage was not "crushing across the board" but "differentiation." While Llama pursued larger parameters, Qwen pursued Chinese-language capability, and Mistral pursued inference efficiency, Gemma chose the "multimodal + knowledge distillation" route.

### 3.2 Why Google pursued open source

Google's motivation for building open-source models was more complex than Meta's:

- **Countering Meta's open-source dominance**: The Llama series had established a de facto open-source standard; Google had to participate or risk the entire developer ecosystem building around Llama.
- **Using open source to feed closed source**: Gemma's open-source community feedback (bug reports, evaluation results, downstream applications) could help improve Gemini. Open source was free "crowdsourced testing."
- **Promoting the TPU ecosystem**: Gemma natively supports Google Cloud TPU; open-sourcing Gemma could drive TPU usage.
- **Policy considerations**: Regulatory trends like the EU AI Act placed greater pressure on closed-source models; open source was a "compliance strategy."

Unlike Meta's philosophy of "open source as moat," Google's open source was more "tactical open source" — open-source small models, protect large models; open-source base models, drive cloud services.

### 3.3 Knowledge distillation as a differentiating path

Gemma's most enduring impact may be proving that **knowledge distillation is an effective training strategy for open-source models.**

Traditional large model training starts from scratch with massive data; knowledge distillation extracts knowledge from an already-trained large model and injects it into a smaller one. Google was the company best positioned to do this — it had "teacher models" like Gemini Ultra and the compute of TPU clusters.

Gemma 2 27B's ability to surpass Llama 3 70B was largely attributable to knowledge distillation. This result inspired other companies to try distillation strategies as well: DeepSeek's R1 distilled versions and Microsoft's Phi series both used similar approaches.

---

## Commentary

Gemma's core contribution was not defeating anyone on parameter count but bringing two new trajectories to the open-source community: knowledge distillation and native multimodality.

The reason Gemma could stand out at equivalent scale lay in Google's unique advantage — possessing one of the world's best closed-source models (Gemini) and being able to distill its knowledge into smaller models. This was an ability that Meta and Mistral did not possess. While Llama boosted performance with more data and larger parameters, Gemma took a shortcut with "teacher model knowledge." Gemma 3's multimodal capability pushed this path to its extreme: a 27B model that can understand images and video — unique among same-scale open-source models.

Gemma's historical significance lies in changing the stereotype that "open-source models are big companies' leftovers." Before Gemma, Google's open-source strategy was "open-source old technology, retain new technology"; after Gemma, Google began distilling frontier technology (multimodal, knowledge distillation) into open-source models. This shift was driven not by charity but by competition — on the open-source large model track, non-participation meant ceding the entire developer ecosystem to Meta and Mistral. Gemma proved one thing: in the era of large models, open source is not the retreat of the weak but the battlefield of the strong.

---

*Silence (Chronicle Lead Writer)*

---

[^1]: Touvron et al., "LLaMA: Open and Efficient Foundation Language Models", arXiv:2302.13971, 2023-02-27. https://arxiv.org/abs/2302.13971
[^2]: Touvron et al., "Llama 2: Open Foundation and Fine-Tuned Chat Models", arXiv:2307.09288, 2023-07-18. https://arxiv.org/abs/2307.09288
[^3]: Jiang et al., "Mistral 7B", arXiv:2310.06825, 2023-10-10. https://arxiv.org/abs/2310.06825
[^4]: Bai et al., "Qwen Technical Report", arXiv:2309.16609, 2023-09-28. https://arxiv.org/abs/2309.16609
[^5]: Chung et al., "Scaling Instruction-Finetuned Language Models", arXiv:2210.11416, 2022-10-20. https://arxiv.org/abs/2210.11416
[^6]: Gemma Team, "Gemma: Open Models Based on Gemini Research and Technology", arXiv:2403.08295, 2024-02-21. https://arxiv.org/abs/2403.08295
[^7]: Gemma Team, "Gemma 2: Improving Open Language Models at a Practical Size", arXiv:2408.00118, 2024-06-27. https://arxiv.org/abs/2408.00118
[^8]: Gemma Team, "Gemma 3 Technical Report", arXiv:2503.19786, 2025-03-12. https://arxiv.org/abs/2503.19786
[^9]: LMSYS Chatbot Arena, "Gemma 3 27B Ranking", LMSYS, 2025-03. https://chat.lmsys.org/
[^10]: Google, "Introducing Gemma 3n: The most capable model you can run on a phone", Google AI Blog, 2025-05-20. https://blog.google/technology/developers/gemma-3n/
