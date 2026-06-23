# Kimi

> Kimi was the conversational assistant launched by Moonshot AI in October 2023, and the first product from a Chinese AI startup to break into the market on the strength of a single technical label — "ultra-long context." While the industry was still competing over MMLU scores and parameter counts, Kimi turned "reading 2 million characters in one go" into a feature that users could touch, experience, and spread by word of mouth. It was not China's strongest large model, but it was the first product to make ordinary Chinese users intuitively understand the concept of a "context window." From 128K in 2023 to the K1.5 reasoning model in 2025, Kimi's evolutionary path reflects how Chinese AI startups found their own narrative in the cracks between OpenAI and DeepSeek.

---

## I. Moonshot AI: A "Technology Narrative" Startup

Moonshot AI was founded in March 2023 by Yang Zhilin. Yang Zhilin graduated from Tsinghua University, completed his PhD at Carnegie Mellon University (CMU) under renowned scholars in speech and language processing, and participated in large language model research at Meta AI and Google Brain.[^1]

Moonshot AI's founding window coincided with the first wave of the Chinese AI startup boom. In the first half of 2023, the shockwave of ChatGPT reached China, and massive capital poured into the large model track. Zhipu AI (Tsinghua lineage), Baichuan Intelligence (Wang Xiaochuan), 01.AI (Kai-Fu Lee), and MiniMax (Yan Junjie) all started nearly simultaneously, each securing funding in the hundreds of millions of dollars. Moonshot AI completed two funding rounds within 2023, raising over $1 billion cumulatively, with investors including Sequoia China and Alibaba.[^1]

Moonshot AI's differentiated positioning was clear from the start: not fighting the full-scale war of general-purpose large models (that was Zhipu and Baichuan's battlefield), but choosing one technical direction to break through — **long context.** While other companies chased "Chinese MMLU #1" and "Chinese code generation #1," Moonshot AI bet on a technical parameter with greater product appeal: how many characters the model could read at once.

This choice seemed somewhat niche at the time. In mid-2023, OpenAI's GPT-4 had a maximum context of 32K tokens (approximately 24,000 characters), and Claude 2's 100K tokens (approximately 75,000 characters) was already considered leading. Moonshot AI directly targeted ultra-long context beyond 100K — not for benchmark appearances, but to let users truly upload a book, a complete financial report, or an entire codebase. (For the complete evolution of long-context technology, see the *Long-Context Technology Treatise*.)

---

## II. Kimi's Launch and Long-Context Strategy

In **October 2023**, the Kimi intelligent assistant was officially launched with an initial context window of 128K tokens, approximately 200,000 Chinese characters.[^2]

128K was already a competitive number at the time — OpenAI's GPT-4 Turbo had only just expanded to 128K in the same period. But Kimi's real killer feature was not the number itself, but **productization.** Kimi's user interface was designed around long context: users could directly upload PDFs, Word documents, or even entire books, and Kimi would read them in one pass and answer questions. This experience was virtually unique in the 2023 Chinese internet market.

In **March 2024**, Kimi extended its context window to 2 million Chinese characters — approximately 2M tokens.[^2] This number was one of the largest publicly available context windows globally at launch, on par with Google Gemini 1.5 Pro's 1M tokens (see *Long-Context Technology Treatise* §IV). Moonshot AI's marketing directly proclaimed "let AI read an entire book in one go" — sparking widespread virality across the Chinese internet.

Kimi's technical implementation relied on multiple long-context optimizations: chunked attention, KV Cache compression, and extrapolation extensions to RoPE positional encoding.[^2] But these technical details were unimportant to users — what mattered was the experience. A student could upload an entire textbook and have Kimi summarize it, an analyst could upload an annual report for Kimi to extract key data, a programmer could upload an entire codebase for Kimi to analyze the architecture. Before Kimi, these scenarios required segmented uploads, multi-turn dialogue, and manual stitching; Kimi turned them into "one-and-done."

### 2.1 "Long Context" as a Product Label

Kimi's success revealed an interesting market logic: **long context is technically "nice to have," but productively it is a "killer feature"** (see *Long-Context Technology Treatise* §V).

For ordinary users, "AI can read an entire book" was more perceptible than "AI scores 2 percentage points higher on MMLU." Kimi transformed a technical parameter into a product selling point — one of the most commercially astute moves in the long-context arms race. When ChatGPT and ERNIE Bot were converging toward product homogeneity, Kimi's "ultra-long context" became a clear differentiation label.

In the first half of 2024, Kimi's monthly active users grew rapidly, making it one of China's most popular AI conversational assistants. Its user growth curve correlated highly with the marketing spread of "long context" — every social share of "Kimi read the entire *Three-Body Problem*" was a free product promotion.

### 2.2 The Limits of Long Context

But long context was not a panacea. The "Lost in the Middle" problem — where models pay less attention to information in the middle of context than at the beginning and end — also affected Kimi.[^3] After users uploaded an entire book, Kimi's citation accuracy for the opening and closing sections was higher than for middle chapters. This meant "fitting it in" did not equal "using it well."

Moreover, the inference cost of ultra-long context was a practical concern. Single-pass inference on 2 million characters consumed far more computational resources than short contexts, with higher latency and more expensive API costs. Kimi's free users experienced the convenience of long context, but high-frequency calls in commercial scenarios still required balancing cost and efficiency.

---

## III. K1.5: From Long Context to Reasoning Model

In **January 2025**, Moonshot AI released **Kimi K1.5**, a reinforcement learning-based reasoning model.[^4]

K1.5's launch marked Kimi's transformation from a "long-context product" to a "reasoning model product." K1.5 excelled in mathematics (AIME 2024 reaching 77.5%), programming (Codeforces reaching 2024 rating), and multimodal reasoning, approaching or matching OpenAI o1 on certain benchmarks.[^4]

K1.5's technical approach was similar to DeepSeek-R1: using reinforcement learning (RL) to train the model to perform internal reasoning (chain-of-thought) before answering, with rule-based rewards and process rewards guiding the model to "think before speaking." Moonshot AI's technical report emphasized the combination of "long-context scaling" and "RL-based reasoning" — using long-context capabilities to provide reasoning models with a larger thinking space.[^4]

K1.5's release timing — late January 2025 — came just one week after DeepSeek-R1 (2025-01-20). This time window meant K1.5 was significantly overshadowed by DeepSeek-R1 in news coverage. But K1.5 still represented an important exploration by Chinese AI startups in the reasoning model direction. (For the technical evolution and category differentiation of reasoning models, see *The Watershed of Reasoning Models*.)

K1.5's pricing strategy continued Kimi's consistent "high cost-performance" approach. Compared to OpenAI o1-preview's output pricing of $60/million tokens, K1.5's API price was an order of magnitude lower — similar to DeepSeek-R1's low-price strategy, reflecting the "volume over margin" logic commonly adopted by Chinese AI companies.

---

## IV. Position in the Chinese AI Startup Landscape

Moonshot AI's position among Chinese AI startups can be described with a concise coordinate: **it was the most successful productization case among "technology narrative" companies.**

The Chinese AI startup landscape of 2023–2025 can be roughly categorized:

| Company | Positioning | Core Label |
|---------|-----------|-----------|
| Zhipu AI | Full-stack large model | Chinese GPT-4, GLM series |
| Baichuan Intelligence | Industry large model | Medical, finance vertical scenarios |
| 01.AI | Efficiency model | Yi series, open-source path |
| MiniMax | Multimodal | Voice, music, video generation |
| **Moonshot AI** | **Long context + reasoning** | **Kimi 2 million characters, K1.5** |

Moonshot AI did not pursue leading on all benchmarks but chose a sufficiently distinctive technical label and built product experience and brand recognition around it. This strategy was particularly astute in the crowded Chinese market competition — when users needed to choose among a dozen seemingly identical AI assistants, "it can read an entire book" was a simple and powerful decision criterion.

But Moonshot AI also faced unique challenges. The rise of DeepSeek — training world-class reasoning models at extreme cost efficiency and releasing them under MIT license — was reshaping the competitive landscape for Chinese AI startups. When DeepSeek-R1's reasoning capabilities were open-sourced and replicable, Moonshot AI's technical moat in the reasoning model direction became narrower than expected. In 2025, Moonshot AI needed to find new differentiation directions beyond "long context" and "reasoning capabilities."

---

## V. Kimi k2 and the Future

In **2025**, Moonshot AI continued iterating the Kimi series. Market reports emerged about a Kimi k2 model — reportedly adopting a MoE (Mixture-of-Experts) architecture with parameters reaching the trillion scale.[^5] Moonshot AI was simultaneously exploring multimodal capabilities (image understanding, video analysis) and agent capabilities (tool calling, multi-step planning), attempting to upgrade Kimi from a "long-text reading assistant" to a "general-purpose AI assistant."

But these explorations faced a fundamental question: as a startup, Moonshot AI's resources (compute, data, talent) could not compete head-to-head with ByteDance (Doubao), Alibaba (Tongyi Qianwen), Baidu (ERNIE Bot), and other tech giants, nor could it compete with DeepSeek's open-source ecosystem. Kimi's core advantage — the productized brand of long context — was diluting as the industry's overall context windows expanded. When all mainstream models supported 128K or even 1M token contexts, "long context" was no longer a differentiation label but an industry standard.

Moonshot AI's future hinged on whether it could find the next "killer feature" at the intersection of long context, reasoning models, multimodality, and agents — a product label as intuitive, viral, and unoccupied by competitors as "reading 2 million characters in one go" once was.

---

## Commentary

Kimi's story is fundamentally a story about **how productization transforms the landscape of technical competition.**

Before Kimi, the context window was a parameter in large model technical reports — 128K, 200K, 1M — researchers cared, developers cared, but ordinary users did not. Kimi turned this parameter into an experience where users could upload an entire book. This was not a technical breakthrough — technical breakthroughs happened in Google Gemini's Ring Attention, in DeepSeek's MLA, in YaRN's frequency scaling. What Kimi did was translate these technical breakthroughs into a product form that users could understand, share, and pay for.

The risk of this strategy was that product labels are easier to catch up to than technical breakthroughs. "Can read an entire book" was a unique selling point in 2023; by 2025, it was an industry standard. When competition over context windows shifted from "who has the longer window" to "who uses it better," Kimi needed to prove that 2 million characters was not merely a marketing number but a capability that could truly create differentiated value for users.

K1.5's launch was Moonshot AI's strategic pivot — from "long-context product" toward "reasoning model product." But this pivot collided head-on with the DeepSeek-R1 storm. Competition in reasoning models was no longer a performance issue but an ecosystem issue: DeepSeek turned reasoning capabilities into a public good through MIT open-sourcing, while OpenAI turned reasoning capabilities into a premium service through brand and ecosystem. Between these two extremes, Moonshot AI needed to find its own ecological niche.

Kimi's greatest contribution may lie not in what it built, but in what it proved: in the Chinese AI market, a technical parameter can become a product brand. Before Kimi, "context window" was just a line of numbers in a technical report; after Kimi, it was an experience where users could upload an entire book. This ability to translate parameters into products was Moonshot AI's core asset — and the capability it needed to continuously prove going forward.

---

*This article was compiled by the Endfield Industries AI Historian Team: Hemer (Biography Lead Writer).*

---

[^1]: Moonshot AI company background compiled from public reports. Founder Yang Zhilin graduated from Tsinghua University, holds a PhD from CMU, and conducted large language model research at Meta AI and Google Brain. Company founded March 2023, cumulative funding exceeding $1 billion.
[^2]: Moonshot AI, "Kimi Intelligent Assistant", 2023-10. Kimi initial context 128K tokens, expanded to 2 million Chinese characters (approximately 2M tokens) in March 2024. https://kimi.moonshot.cn/
[^3]: Liu et al., "Lost in the Middle: How Language Models Use Long Contexts", arXiv:2307.03172, 2023. https://arxiv.org/abs/2307.03172
[^4]: Moonshot AI, "Kimi k1.5: Scaling Reinforcement Learning with LLMs", arXiv:2501.12599, 2025-01-21. https://arxiv.org/abs/2501.12599
[^5]: Kimi k2 model information compiled from market public reports; specific parameter scale and release date are tentative.
