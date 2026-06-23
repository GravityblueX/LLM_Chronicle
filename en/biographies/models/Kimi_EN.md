# The Biography of Kimi

> Kimi was the conversational assistant released by Moonshot AI in October 2023, and the first product from a Chinese AI startup to break into the market on the strength of a single technical label—"ultra-long context." While the industry was still competing over MMLU scores and parameter counts, Kimi turned "reading two million characters in one go" into a feature that users could touch, experience, and spread by word of mouth. It was not China's strongest LLM, but it was the first product to make ordinary Chinese users intuitively understand the concept of a "context window." From the 128K of 2023 to the K1.5 reasoning model of 2025, Kimi's evolutionary trajectory reflected how Chinese AI startups found their own narrative in the space between OpenAI and DeepSeek.

---

## I. Moonshot AI: a "technology-narrative" startup

Moonshot AI was founded in March 2023 by Yang Zhilin. Yang Zhilin graduated from Tsinghua University and pursued his doctoral studies at Carnegie Mellon University (CMU) under prominent scholars in speech and language processing, participating in LLM research at Meta AI and Google Brain.[^1]

Moonshot AI's founding window coincided with the first wave of China's AI startup boom. In the first half of 2023, the shockwave of ChatGPT reached China, and massive capital poured into the LLM track. Zhipu AI (Tsinghua-affiliated), Baichuan Intelligence (Wang Xiaochuan), 01.AI (Kai-Fu Lee), and MiniMax (Yan Junjie) started almost simultaneously, each securing financing in the hundreds of millions of dollars. Moonshot AI completed two funding rounds within 2023, accumulating over $1 billion in financing, with investors including Sequoia China and Alibaba.[^1]

Moonshot AI's differentiation was clear from the very beginning: it would not fight the all-out war of general-purpose LLMs (that was the battleground of Zhipu and Baichuan); instead, it chose to go deep on a single technical direction—**long context**. While other companies pursued "best Chinese MMLU score" and "best Chinese code generation," Moonshot AI bet on a technology parameter with greater product appeal: how many characters the model could read at once.

This choice seemed somewhat niche at the time. In mid-2023, OpenAI's GPT-4 had a maximum context of 32K tokens (approximately 24,000 characters), and Claude 2's 100K tokens (approximately 75,000 characters) was already considered cutting-edge. Moonshot AI aimed directly at ultra-long contexts exceeding 100K—not to look good on benchmarks, but to let users actually upload a book, a complete financial report, or an entire codebase. (For the complete evolution of long-context technology, see *The Chronicle of Long-Context Technology*.)

---

## II. Kimi's launch and long-context strategy

**October 2023** — Kimi Smart Assistant officially launched with an initial context window of 128K tokens, approximately 200,000 Chinese characters.[^2]

128K was already a competitive number at the time—OpenAI's GPT-4 Turbo had only just expanded to 128K around the same period. But Kimi's true killer feature was not the number itself; it was **productization**. Kimi's user interface was designed around long context: users could directly upload PDFs, Word documents, even entire books, and Kimi would read them in one go before answering questions. This experience was virtually unique in the 2023 Chinese-language internet market.

**March 2024** — Kimi expanded its context window to 2 million Chinese characters—approximately 2M tokens.[^2] This figure was among the largest publicly available context windows globally at the time of release, comparable to Google Gemini 1.5 Pro's 1M tokens (see *The Chronicle of Long-Context Technology*, §IV). Moonshot AI's marketing directly coined the slogan "Let AI read an entire book in one go"—which spread widely across the Chinese-language internet.

Kimi's technical implementation relied on multiple long-context optimizations: chunked attention, KV cache compression, and extrapolative extensions to RoPE positional encoding.[^2] But these technical details did not matter to users—what mattered was the experience. A student could upload an entire textbook for Kimi to summarize; an analyst could upload an annual report for Kimi to extract key data; a programmer could upload an entire codebase for Kimi to analyze its architecture. Before Kimi, these scenarios required segmented uploads, multi-turn conversations, and manual stitching; Kimi reduced them to "one shot, done."

### 2.1 "Long context" as a product label

Kimi's success revealed an interesting market logic: **long context was technically "nice to have" but was a "killer feature" from a product perspective** (see *The Chronicle of Long-Context Technology*, §V).

For ordinary users, "AI can read an entire book" was more tangible than "AI scores 2 percentage points higher on MMLU." Kimi transformed a technical parameter into a product selling point—this was one of the most commercially astute moves in the long-context arms race. When ChatGPT and ERNIE Bot were converging in functionality, Kimi's "ultra-long context" became a clear differentiating label.

In the first half of 2024, Kimi's monthly active users grew rapidly, making it one of China's most popular AI conversational assistants. Its user growth curve closely overlapped with the marketing spread of "long context"—every social media share of "Kimi finished reading all of *The Three-Body Problem*" was free product promotion.

### 2.2 The limitations of long context

But long context was not a cure-all. The "Lost in the Middle" problem—models paying less attention to information in the middle of the context than to the beginning and end—also existed in Kimi.[^3] When a user uploaded an entire book, Kimi's citation accuracy was higher for the opening and closing sections than for middle chapters. This meant "being able to contain" did not equal "being able to use well."

Moreover, the inference cost of ultra-long context was a practical concern. A single inference on 2 million characters consumed far more computational resources than short-context inference, with higher latency and more expensive API fees. Kimi's free users experienced the convenience of long context, but high-frequency usage in commercial scenarios still required balancing cost and efficiency.

---

## III. K1.5: from long context to reasoning model

**January 2025** — Moonshot AI released **Kimi K1.5**, a reinforcement learning-based reasoning model.[^4]

K1.5's release marked Kimi's transformation from a "long-context product" to a "reasoning model product." K1.5 performed strongly in mathematics (AIME 2024 at 77.5%), programming (Codeforces at 2024 rating), and multimodal reasoning, approaching or matching OpenAI o1 on several benchmarks.[^4]

K1.5's technical approach was similar to DeepSeek-R1: using reinforcement learning (RL) to train the model to perform internal chain-of-thought reasoning before answering, with rule-based rewards and process rewards guiding the model to learn "think before speaking." Moonshot AI's technical report emphasized the combination of "long-context scaling" and "RL-based reasoning"—using long-context capability to provide a larger thinking space for the reasoning model.[^4]

K1.5's release timing—late January 2025—came just one week after DeepSeek-R1 (2025-01-20). This timing meant K1.5 was significantly overshadowed by DeepSeek-R1 in terms of news coverage. Nevertheless, K1.5 represented an important exploration by Chinese AI startups in the reasoning model direction. (For the technical evolution and category differentiation of reasoning models, see *The Watershed of Reasoning Models*.)

K1.5's pricing strategy continued Kimi's consistent "high cost-effectiveness" approach. Compared to OpenAI o1-preview's output pricing of $60/million tokens, K1.5's API price was an order of magnitude lower—similar to DeepSeek-R1's low-price strategy, reflecting the "volume-over-price" logic commonly adopted by Chinese AI companies in their pricing.

---

## IV. Position in the Chinese AI startup landscape

Moonshot AI's position among Chinese AI startups can be described with a concise coordinate: **it was the most successful productization case among "technology-narrative" companies**.

The Chinese AI startup landscape of 2023–2025 can be roughly categorized as follows:

| Company | Positioning | Core Label |
|---------|-------------|------------|
| Zhipu AI | Full-stack LLM | Chinese GPT-4, GLM series |
| Baichuan Intelligence | Industry LLM | Healthcare, finance vertical scenarios |
| 01.AI | Efficiency-oriented model | Yi series, open-source route |
| MiniMax | Multimodal | Voice, music, video generation |
| **Moonshot AI** | **Long context + reasoning** | **Kimi 2M characters, K1.5** |

Moonshot AI did not pursue leading on all benchmarks; instead, it chose a sufficiently distinctive technical label and built product experience and brand recognition around it. This strategy was particularly astute in the crowded Chinese market—when users had to choose among a dozen seemingly similar AI assistants, "it can read an entire book" was a simple and powerful decision-making criterion.

But Moonshot AI also faced unique challenges. The rise of DeepSeek—training a world-class reasoning model at extremely low cost and releasing it under the MIT license—was reshaping the competitive landscape for Chinese AI startups. When DeepSeek-R1's reasoning capability was replicated through open source, Moonshot AI's technical moat in the reasoning model direction became narrower than expected. Moonshot AI in 2025 needed to find a new direction for differentiation beyond "long context" and "reasoning capability."

---

## V. Kimi k2 and the future

**2025** — Moonshot AI continued iterating the Kimi series. Market reports emerged about the Kimi k2 model—reportedly employing a MoE (Mixture-of-Experts) architecture with parameters reaching the trillion level.[^5] Moonshot AI was simultaneously exploring multimodal capabilities (image understanding, video analysis) and agentic capabilities (tool use, multi-step planning), attempting to upgrade Kimi from a "long-text reading assistant" to a "general-purpose AI assistant."

But these explorations faced a fundamental problem: as a startup, Moonshot AI's resources (compute, data, talent) could not compete head-to-head with ByteDance (Doubao), Alibaba (Tongyi Qianwen), Baidu (ERNIE Bot), and other tech giants, nor could it compete with DeepSeek's open-source ecosystem. Kimi's core advantage—the productized brand of long context—was being diluted as the industry's overall context windows expanded. When all mainstream models supported 128K or even 1M token contexts, "long context" was no longer a differentiating label but an industry standard.

Moonshot AI's future depended on whether it could find the next "killer feature" at the intersection of long context, reasoning models, multimodal, and agents—a feature as intuitive, viral, and unoccupied by competitors as "reading two million characters in one go."

---

## Commentary

Kimi's story was essentially a story about how productization can reshape the landscape of technological competition.

Before Kimi, the context window was a parameter in an LLM technical report—128K, 200K, 1M—researchers cared, developers cared, but ordinary users did not. Kimi transformed this parameter into the experience of being able to upload an entire book. This was not a technical breakthrough—technical breakthroughs happened in Google Gemini's Ring Attention, in DeepSeek's MLA, in YaRN's frequency scaling. What Kimi did was translate these technical breakthroughs into a product form that users could understand, share, and pay for.

The risk of this strategy was that product labels are easier to catch up with than technical breakthroughs. "Being able to read an entire book" was a unique selling point in 2023; by 2025 it was an industry standard. When the competition over context windows shifted from "who's longer" to "who uses it better," Kimi needed to prove that 2 million characters was not just a marketing number but a capability that genuinely created differentiated value for users.

K1.5's release was a strategic pivot for Moonshot AI—from "long-context product" toward "reasoning model product." But this pivot happened to collide with the DeepSeek-R1 storm. The competition among reasoning models was no longer about performance but about ecosystem: DeepSeek used MIT open-source licensing to turn reasoning capability into a public good; OpenAI used brand and ecosystem to turn reasoning capability into a premium service. Between these two extremes, Moonshot AI needed to find its own ecological niche.

Kimi's greatest contribution may not lie in what it did itself but in what it proved: in the Chinese AI market, a technical parameter can become a product brand. Before Kimi, "context window" was just a line of numbers in a technical report; after Kimi, it was the experience of uploading an entire book. This ability to translate parameters into products was Moonshot AI's core asset—and the capability it would need to continuously demonstrate going forward.

---

*This entry was compiled by the Endfield Industrial History Team: Silence (Lead Biographer).*

---

[^1]: Moonshot AI company background information compiled from public reports. Founder Yang Zhilin graduated from Tsinghua University, earned his Ph.D. from CMU, and conducted LLM research at Meta AI and Google Brain. The company was founded in March 2023 and has raised over $1 billion cumulatively.
[^2]: Moonshot AI, "Kimi Smart Assistant", 2023-10. Kimi's initial context was 128K tokens, expanded to 2 million Chinese characters (~2M tokens) in March 2024. https://kimi.moonshot.cn/
[^3]: Liu et al., "Lost in the Middle: How Language Models Use Long Contexts", arXiv:2307.03172, 2023. https://arxiv.org/abs/2307.03172
[^4]: Moonshot AI, "Kimi k1.5: Scaling Reinforcement Learning with LLMs", arXiv:2501.12599, 2025-01-21. https://arxiv.org/abs/2501.12599
[^5]: Kimi k2 model information compiled from public market reports; specific parameter scale and release date remain uncertain.
