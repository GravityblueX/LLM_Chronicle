# The Biography of Kimi

> Kimi was the chatbot assistant released by Moonshot AI in October 2023, and the first product from a Chinese AI startup to break into the market on the strength of a single technical label — "ultra-long context." While the industry was still competing over MMLU scores and parameter counts, Kimi made "read two million characters in one sitting" into a feature that users could touch, experience, and share. It was not China's strongest large model, but it was the first product to make ordinary Chinese users intuitively understand the concept of "context window." From the 128K of 2023 to the K1.5 reasoning model of 2025, Kimi's evolution reflects how Chinese AI startups found their own narrative in the space between OpenAI and DeepSeek.

---

## I. Moonshot AI: A "technology-narrative" startup

Moonshot AI was founded in March 2023 by Yang Zhilin. Yang graduated from Tsinghua University and completed his doctoral studies at Carnegie Mellon University (CMU) under renowned scholars in speech and language processing, with prior experience in large language model research at Meta AI and Google Brain.[^1]

Moonshot AI's founding window coincided with the first wave of Chinese AI entrepreneurship. In the first half of 2023, the shockwave of ChatGPT reached China, and massive capital flooded into the large model track. Zhipu AI (Tsinghua-affiliated), Baichuan Intelligence (Wang Xiaochuan), 01.AI (Kai-Fu Lee), and MiniMax (Yan Junjie) all launched nearly simultaneously, each securing funding in the hundreds of millions of dollars. Moonshot AI completed two funding rounds within 2023, raising over $1 billion cumulatively, with investors including Sequoia China and Alibaba.[^1]

Moonshot AI's differentiated positioning was clear from the start: not to fight the full-scale war of general-purpose large models (that was Zhipu and Baichuan's battlefield), but to choose one technical direction and break through — **long context**. While other companies pursued "Chinese MMLU #1" or "Chinese code generation #1," Moonshot AI bet on a technical parameter with greater product resonance: how many characters the model could read at once.

This choice seemed somewhat niche at the time. In mid-2023, OpenAI's GPT-4 had a maximum context of 32K tokens (~24,000 characters), and Claude 2's 100K tokens (~75,000 characters) was already considered leading. Moonshot AI directly targeted ultra-long context beyond 100K — not for benchmark appearances, but to let users truly upload a book, a complete financial report, or an entire codebase. (For a complete evolution of long-context technology, see *The Chronicle of Long Context Technology*.)

---

## II. Kimi's launch and long-context strategy

**October 2023** — Kimi intelligent assistant officially launched, with an initial context window of 128K tokens, approximately 200,000 Chinese characters.[^2]

128K was already a competitive number at the time — OpenAI's GPT-4 Turbo had only just expanded to 128K around the same time. But Kimi's real killer feature was not the number itself but **productization**. Kimi's user interface was designed around long context: users could directly upload PDFs, Word documents, or even entire books, and Kimi would read them in one sitting and answer questions. This experience was virtually unique in the 2023 Chinese internet market.

**March 2024** — Kimi expanded its context window to 2 million Chinese characters — approximately 2M tokens.[^2] At release, this was one of the largest publicly available context windows globally, on par with Google Gemini 1.5 Pro's 1M tokens (see *The Chronicle of Long Context Technology*, §IV). Moonshot AI's marketing directly used the slogan "let AI read an entire book in one go" — which spread widely across the Chinese internet.

Kimi's technical implementation relied on multiple long-context optimizations: chunked attention, KV cache compression, and extrapolative extensions to RoPE positional encoding.[^2] But these technical details were unimportant to users — what mattered was the experience. A student could upload an entire textbook for Kimi to summarize, an analyst could upload an annual report for Kimi to extract key data, a programmer could upload an entire codebase for Kimi to analyze architecture. These scenarios previously required segmented uploads, multi-turn conversations, and manual stitching; Kimi turned them into a "one-shot" process.

### 2.1 "Long context" as a product label

Kimi's success revealed an interesting market logic: **long context is technically "nice-to-have" but is a "killer feature" at the product level** (see *The Chronicle of Long Context Technology*, §V).

For ordinary users, "AI can read an entire book" is more perceptible than "AI scores 2 points higher on MMLU." Kimi turned a technical parameter into a product selling point — one of the most commercially astute moves in the long-context arms race. When ChatGPT and ERNIE Bot were converging in functionality, Kimi's "ultra-long context" became a clear differentiating label.

In the first half of 2024, Kimi's monthly active users grew rapidly, making it one of China's most popular AI chatbot assistants. Its user growth curve closely overlapped with the marketing spread of "long context" — every social media share of "Kimi finished reading the entire *Three-Body Problem*" was a free product promotion.

### 2.2 The limitations of long context

But long context was not a panacea. The "Lost in the Middle" problem — where models pay less attention to information in the middle of the context than at the beginning and end — also existed in Kimi.[^3] After a user uploaded an entire book, Kimi's citation accuracy for the opening and closing sections was higher than for middle chapters. This meant "being able to hold it" did not equal "being able to use it well."

Additionally, the inference cost of ultra-long context was a practical concern. A single inference pass over 2 million characters consumed far more computational resources than short-context queries, with higher latency and more expensive API fees. Kimi's free users experienced the convenience of long context, but high-frequency calls in commercial scenarios still required balancing cost and efficiency.

---

## III. K1.5: from long context to reasoning model

**January 2025** — Moonshot AI released **Kimi K1.5**, a reinforcement learning-based reasoning model.[^4]

K1.5's launch marked Kimi's transformation from a "long-context product" to a "reasoning model product." K1.5 performed well on math (AIME 2024 reaching 77.5%), coding (Codeforces 2024 rating), and multimodal reasoning, approaching or matching OpenAI o1 on some benchmarks.[^4]

K1.5's technical approach was similar to DeepSeek-R1: training the model through reinforcement learning (RL) to perform internal reasoning (chain-of-thought) before answering, using rule-based rewards and process rewards to guide the model in learning "think first, then speak." Moonshot AI's technical report emphasized the combination of "long-context scaling" and "RL-based reasoning" — using long-context capability to provide a larger thinking space for reasoning models.[^4]

K1.5's release date — late January 2025 — came just one week after DeepSeek-R1 (2025-01-20). This timing meant K1.5 was significantly overshadowed in news coverage by DeepSeek-R1. But K1.5 still represented an important exploration by Chinese AI startups in the reasoning model direction. (For the technical evolution and category differentiation of reasoning models, see *The Watershed of Reasoning Models*.)

K1.5's pricing strategy continued Kimi's consistent "high value-for-money" approach. Compared to OpenAI o1-preview's output pricing of $60/million tokens, K1.5's API price was an order of magnitude lower — similar to DeepSeek-R1's low-price strategy, reflecting the "volume-over-price" logic commonly adopted by Chinese AI companies in their pricing.

---

## IV. Position in the Chinese AI startup landscape

Moonshot AI's position among Chinese AI startups can be described with a concise coordinate: **it is the most successful productization case among "technology-narrative" companies.**

The Chinese AI startup landscape of 2023–2025 can be roughly categorized:

| Company | Positioning | Core label |
|---------|------------|------------|
| Zhipu AI | Full-stack large model | Chinese GPT-4, GLM series |
| Baichuan Intelligence | Industry-specific models | Healthcare, finance vertical scenarios |
| 01.AI | Efficiency-oriented models | Yi series, open-source route |
| MiniMax | Multimodal | Voice, music, video generation |
| **Moonshot AI** | **Long context + reasoning** | **Kimi 2M characters, K1.5** |

Moonshot AI did not pursue leading on every benchmark but chose a sufficiently distinct technical label and built its product experience and brand identity around it. This strategy was especially astute in the crowded competition of the Chinese market — when users needed to choose among a dozen seemingly similar AI assistants, "it can read an entire book" was a simple and powerful decision-making criterion.

But Moonshot AI also faced unique challenges. The rise of DeepSeek — training world-class reasoning models at extremely low cost and releasing them under MIT license — was changing the competitive landscape for Chinese AI startups. When DeepSeek-R1's reasoning capability was open-sourced and replicable, Moonshot AI's technical moat in the reasoning model direction became narrower than expected. Moonshot AI in 2025 needed to find new differentiating directions beyond "long context" and "reasoning capability."

---

## V. Kimi k2 and the future

**2025** — Moonshot AI continued iterating the Kimi series. Market reports indicated the Kimi k2 model — reportedly adopting an MoE (Mixture-of-Experts) architecture with parameters reaching the trillion level.[^5] Moonshot AI was also exploring multimodal capabilities (image understanding, video analysis) and agent capabilities (tool calling, multi-step planning), attempting to upgrade Kimi from a "long-text reading assistant" to a "general-purpose AI assistant."

But these explorations faced a fundamental problem: as a startup, Moonshot AI's resources (compute, data, talent) could not compete head-on with ByteDance (Doubao), Alibaba (Tongyi Qianwen), Baidu (ERNIE Bot), and other major companies, nor could it compete with DeepSeek's open-source ecosystem. Kimi's core advantage — the productized brand of long context — was being diluted as the industry's overall context windows expanded. When all mainstream models supported 128K or even 1M token contexts, "long context" was no longer a differentiating label but an industry standard.

Moonshot AI's future depended on whether it could find the next "killer feature" at the intersection of long context, reasoning models, multimodality, and agents — something as intuitive, viral, and unoccupied by competitors as "read two million characters in one go."

---

## Commentary

Kimi's story is fundamentally a story about how productization can reshape the landscape of technological competition.

Before Kimi, the context window was a parameter in large model technical reports — 128K, 200K, 1M — researchers cared, developers cared, but ordinary users did not. Kimi turned this parameter into an experience where users could upload an entire book. This was not a technical breakthrough — the breakthroughs happened in Google Gemini's Ring Attention, in DeepSeek's MLA, in YaRN's frequency scaling. What Kimi did was translate these technical breakthroughs into a product form that users could understand, share, and pay for.

The risk of this strategy lies in the fact that product labels are easier to catch up to than technical breakthroughs. "Can read an entire book" was a unique selling point in 2023 and an industry standard in 2025. When the context window competition shifts from "who has more" to "who uses it better," Kimi needs to prove that 2 million characters is not just a marketing number but a capability that genuinely creates differentiated value for users.

K1.5's release was Moonshot AI's strategic pivot — from "long-context product" toward "reasoning model product." But this pivot collided head-on with the DeepSeek-R1 storm. The competition among reasoning models is no longer about performance but about ecosystem: DeepSeek used MIT open-source to turn reasoning capability into a public good; OpenAI used brand and ecosystem to turn reasoning capability into premium service. Moonshot AI, caught between these two extremes, needs to find its own ecological niche.

Kimi's greatest contribution may not be what it accomplished itself but what it proved: in the Chinese AI market, a technical parameter can become a product brand. Before Kimi, "context window" was just a line of numbers in a technical report; after Kimi, it was an experience where users could upload an entire book. This ability to translate from parameter to product is Moonshot AI's core asset — and the capability it needs to continuously demonstrate in the future.

---

*This entry was compiled by the Endfield Industrial History Team: Silence (Lead Biographer).*

---

[^1]: Moonshot AI background information synthesized from public reports. Founder Yang Zhilin graduated from Tsinghua University, holds a Ph.D. from CMU, and conducted large language model research at Meta AI and Google Brain. The company was founded in March 2023, with cumulative funding exceeding $1 billion.
[^2]: Moonshot AI, "Kimi Intelligent Assistant", 2023-10. Kimi's initial context was 128K tokens, expanded to 2 million Chinese characters (~2M tokens) in March 2024. https://kimi.moonshot.cn/
[^3]: Liu et al., "Lost in the Middle: How Language Models Use Long Contexts", arXiv:2307.03172, 2023. https://arxiv.org/abs/2307.03172
[^4]: Moonshot AI, "Kimi k1.5: Scaling Reinforcement Learning with LLMs", arXiv:2501.12599, 2025-01-21. https://arxiv.org/abs/2501.12599
[^5]: Kimi k2 model information synthesized from public market reports; specific parameter scale and release date remain unconfirmed.
