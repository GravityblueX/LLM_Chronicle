# The Biography of Gemma

> Gemma was Google's first serious attempt at open-source LLMs. Before this, Google's open-source strategy was "open-source small models, keep large models closed"—T5 could be open-sourced, but PaLM could not. Gemma changed this logic: Google decided to distill Gemini's technology into open-source models, using the open-source ecosystem to feed back into the competitiveness of its closed-source products.

---

## I. Technical Background

In 2023–2024, the open-source LLM landscape was dominated by Meta's Llama series. The releases of Llama 1 (2023-02) and Llama 2 (2023-07) gave the open-source community base models that could compete with GPT-3.5 for the first time.[^1][^2] Subsequently, Mistral (France) proved with Mistral 7B and Mixtral 8x7B that small teams could also build excellent models; China's Qwen (Alibaba) and DeepSeek were also catching up rapidly.[^3][^4]

Google was notably absent from this race. It had the best closed-source models (PaLM 2, Gemini) but no corresponding open-source versions. T5 (2019) and Flan-T5 (2022), though open-sourced, were small models unable to compete with Llama 70B.[^5] Google had virtually no presence in the open-source LLM space.

In early 2024, Google finally decided to enter the arena. Gemma was the product of this decision—not training a new model from scratch, but distilling Gemini's technological essence into smaller models and releasing them as open-source.

---

## II. Core Events

### 2.1 Gemma 1 (2024-02): Google's open-source debut

On 2024-02-21, Google released Gemma 1, comprising two versions: **2B and 7B.**[^6]

Gemma 1's positioning was clear: not competing with Llama 2 70B on parameter count, but competing with Llama 2 7B on performance at equivalent scale. Google claimed that Gemma 1's technology derived from Gemini—using the same architectural design, training data processing pipeline, and training methodology as Gemini, but with significantly reduced parameters.[^6]

Key specifications:

| Metric | Gemma 1 7B | Llama 2 7B | Mistral 7B |
|--------|-----------|-----------|-----------|
| Parameters | 8.5B | 6.7B | 7.3B |
| Training data | 6T tokens | 2T tokens | Not disclosed |
| Context length | 8192 | 4096 | 32768 |
| Release date | 2024-02 | 2023-07 | 2023-09 |

Gemma 1 7B outperformed Llama 2 7B on most evaluation benchmarks and was competitive with Mistral 7B, with each excelling in different areas.[^6] While not an "overwhelming victory," for Google's first open-source attempt, it was sufficiently sincere.

Gemma 1 also had an important characteristic: **fully open weights with commercial use permitted.** This was more open than Llama 2's license (which restricted users with over 700 million monthly active users) and Mistral's Apache 2.0.[^6]

### 2.2 Gemma 2 (2024-06): strongest at equivalent scale

On 2024-06-27, Google released Gemma 2, comprising three versions: **9B, 27B, and a 2.6B lightweight variant.**[^7]

Gemma 2's key improvements:

- **Knowledge distillation**: distilling knowledge from a larger model (presumably Gemini Pro or Ultra level) into smaller models. This was Google's unique advantage—possessing the world's best closed-source models to serve as "teachers."[^7]
- **Alternating attention mechanism**: alternating between global attention and local sliding window attention to achieve a better balance between performance and efficiency.[^7]
- **More training data**: Gemma 2 27B was trained on 13T tokens, more than double Gemma 1 7B's 6T tokens.[^7]

Gemma 2's evaluation results were striking: **Gemma 2 27B surpassed Llama 3 70B on most benchmarks**—a 27B model defeating a competitor 2.5 times its size.[^7] Gemma 2 9B also ranked at the top of its size class (7B–9B tier), surpassing Llama 3 8B and Mistral 7B.[^7]

Gemma 2's success proved that Google's "knowledge distillation" strategy was effective: using knowledge from closed-source large models to enhance the performance of open-source small models constituted an asymmetric competitive advantage.

### 2.3 Gemma 3 (2025-03): multimodal open-source

On 2025-03-12, Google released Gemma 3, in four versions: 1B, 4B, 12B, and 27B.[^8]

Gemma 3's biggest breakthrough was **native multimodality**: supporting text, image, and video input (the 1B version supported text only). This was the first time Google had open-sourced multimodal capabilities to the community.[^8]

Key features:

- **Multimodal understanding**: Gemma 3 12B and 27B could understand images and short videos—capabilities that Llama 3 and Qwen 2 models of equivalent size did not possess (they required additional vision encoders).[^8]
- **128K context**: expanded from Gemma 2's 8192 to 128K tokens, supporting long-document processing.[^8]
- **ShieldGemma safety filter**: built-in safety mechanisms filtering harmful inputs and outputs.[^8]

Gemma 3 27B temporarily ranked first among open-source models of its size on the LMSYS Arena (human blind evaluation rankings), surpassing Llama 3 70B and Qwen 2 72B.[^9] A 27B multimodal model defeating a 70B text-only model once again validated the "distillation + multimodal" strategy.

### 2.4 Gemma 3n (2025-05): edge optimization

In May 2025, Google released Gemma 3n, optimized for phones and edge devices.[^10] Gemma 3n came in two versions: E2B (effective parameters approximately 2B) and E4B (effective parameters approximately 4B). Although total parameter counts were 5B and 8B respectively, through a selective activation mechanism, only approximately 40% of parameters were used during inference.[^10]

Gemma 3n's positioning was to make LLMs run on phones—achieving local inference on devices like Pixel and Samsung Galaxy without requiring internet connectivity.

---

## III. Impact and Aftermath

### 3.1 Positioning in the open-source ecosystem

Gemma occupied a unique ecological niche in the open-source LLM ecosystem: **not the largest, but possibly the best performance at equivalent scale.**

| Model | Parameters | Core advantage | Key competitors |
|-------|-----------|----------------|-----------------|
| Llama 3 | 8B/70B/405B | Largest parameter count, broadest ecosystem | Gemma, Qwen, Mistral |
| Qwen 2.5 | 0.5B–72B | Strongest Chinese, multi-size | Gemma, Llama |
| Mistral | 7B/8x7B/8x22B | MoE architecture, inference efficiency | Gemma, Llama |
| **Gemma 3** | 1B–27B | **Native multimodal, strong distillation** | Llama, Qwen |

Gemma's competitive advantage was not "overwhelming dominance" but "differentiation." While Llama pursued larger parameter counts, Qwen pursued Chinese-language capability, and Mistral pursued inference efficiency, Gemma chose the "multimodal + knowledge distillation" route.

### 3.2 Why Google pursued open-source

Google's motivation for building open-source models was more complex than Meta's:

- **Countering Meta's open-source dominance**: The Llama series had established a de facto open-source standard; Google had to participate in the competition, or the entire developer ecosystem would be built around Llama.
- **Using open-source to feed closed-source**: Gemma's open-source community feedback (bug reports, evaluation results, downstream applications) could help improve Gemini. Open-source was free "crowdsourced testing."
- **TPU ecosystem promotion**: Gemma natively supported Google Cloud TPU; open-sourcing Gemma could drive TPU adoption.
- **Policy considerations**: Regulatory trends such as the EU AI Act imposed greater pressure on closed-source models; open-source served as a "compliance strategy."

Unlike Meta's philosophy of "open-source as moat," Google's open-source approach was more "tactical open-source"—open-source small models to protect large models; open-source base models to drive cloud services.

### 3.3 Knowledge distillation as a differentiation route

Gemma's most lasting impact may be demonstrating that **knowledge distillation is an effective training strategy for open-source models.**

Traditional LLM training involved training from scratch with massive datasets; knowledge distillation extracted knowledge from an already-trained large model and injected it into a smaller model. Google was the company best suited for this—it had "teacher models" like Gemini Ultra and the computational power of TPU clusters.

Gemma 2 27B's ability to surpass Llama 3 70B was largely due to knowledge distillation. This result inspired other companies to experiment with distillation strategies: DeepSeek's R1 distillation versions and Microsoft's Phi series employed similar approaches.

---

## Commentary

Gemma's core contribution was not defeating anyone in parameter count, but bringing two new routes to the open-source community: knowledge distillation and native multimodality.

The reason Gemma could stand out at equivalent scale lay in Google's unique advantage—possessing one of the world's best closed-source models (Gemini) and being able to distill its knowledge into smaller models. This was a capability that Meta and Mistral did not possess. While Llama used more data and larger parameter counts to improve performance, Gemma took a shortcut with "teacher model knowledge." Gemma 3's multimodal capability pushed this approach to its extreme: a 27B model that could understand images and videos—unique among open-source models of its size.

Gemma's historical significance lay in changing the stereotype that "open-source models are the leftovers of large corporations." Before Gemma, Google's open-source strategy was "open-source old technology, retain new technology"; after Gemma, Google began distilling cutting-edge technology (multimodal, knowledge distillation) into open-source models. This shift was not born of charity but of competition—on the open-source LLM track, non-participation meant ceding the entire developer ecosystem to Meta and Mistral. Gemma proved one thing: in the LLM era, open-source is not the refuge of the weak, but the battlefield of the strong.

---

*This entry was compiled by the Endfield Industrial History Team: Silence (Lead Biographer).*

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
