# The Biography of ERNIE

> ERNIE was the pioneer of Chinese large models — not the fastest runner, but the first to start running. Baidu had been betting on language models since ERNIE 1.0 in 2019, and when it rushed to release ERNIE Bot in March 2023, the three characters "large model" were nearly synonymous with Baidu in the Chinese market for a time. Yet first-mover advantage does not equal lasting moat: as Alibaba, ByteDance, and DeepSeek each caught up, ERNIE could not hold onto its "China's #1" position. This history tells the story of what lies between "being first" and "lasting to the end" in a technological revolution.

---

## I. Technical Background

In October 2018, Google released BERT, using masked language models (MLM) to set new records on 11 NLP benchmarks.[^1] BERT's approach was "self-supervised + fine-tuning" — pre-train on massive unlabeled text, then fine-tune on downstream tasks with small amounts of labeled data. This paradigm rapidly swept the NLP field.

But BERT had a blind spot: **it only learned the statistical patterns on the surface of text, not the knowledge behind text.** "Harry Potter was written by J.K. Rowling" — BERT did not know that "Harry Potter" is a fictional character, "J.K. Rowling" is a real author, and the relationship between them is "created by." It only knew that these words frequently co-occur.

In Chinese-language scenarios, this problem was more severe. Chinese lacks explicit word boundaries, and the composition of entities and phrases is complex; BERT's character-level masking strategy was less efficient for Chinese semantics than for English.[^2] Baidu's NLP team identified this gap — **if structured knowledge could be injected into the pre-training process, Chinese understanding could surpass BERT.**

On the product side, Baidu's context was equally urgent. In January 2023, ChatGPT burst onto the scene, surpassing 100 million monthly active users in two months.[^3] Robin Li made an internal decision swiftly — Baidu had to be the first Chinese company to deliver a ChatGPT-like product. The race for China's ChatGPT had begun.

---

## II. Core Innovation

### 2.1 ERNIE 1.0: Knowledge-enhanced pre-training

In March 2019, Baidu released ERNIE (Enhanced Representation through Knowledge Integration).[^2] ERNIE's core idea was to **inject entity-level and phrase-level knowledge into pre-training** on top of BERT's masked language model.

Specifically, while BERT randomly masks individual characters (tokens), ERNIE masks entire entities and phrases — "Harbin is a [city] in Heilongjiang Province" rather than "Har[?]bin is a [?]city[?] in Hei[?]long[?]jiang." To predict the masked semantic units, the model must understand the entities' internal structure and external relationships. With the assistance of Baidu's proprietary knowledge graph, ERNIE also introduced semantic relationship modeling — teaching the model not just "word co-occurrence" but "what the relationships between words are."

On Chinese tasks, ERNIE 1.0 comprehensively surpassed BERT on five tasks: sentiment analysis, named entity recognition, natural language inference, semantic similarity, and reading comprehension.[^2]

### 2.2 ERNIE 3.0: The unified framework

In July 2021, Baidu released ERNIE 3.0 with 10 billion (10B) parameters, leading comprehensively on Chinese NLP benchmarks.[^4] ERNIE 3.0's architectural innovation was **unifying autoregressive and autoencoding objectives into a single framework** — first using large-scale autoregressive pre-training to acquire general language ability, then performing incremental training with different downstream objectives.

ERNIE 3.0 achieved state-of-the-art results on over 50 Chinese NLP tasks, including text classification, reading comprehension, dialogue generation, code generation, and more. It was the first truly "milestone" work in the Chinese large model domain.[^4]

In December 2021, Baidu further released ERNIE 3.0 Titan (260 billion parameters), which was at one point the world's largest Chinese pre-trained model.[^5]

### 2.3 ERNIE Bot: China's first ChatGPT-like product

On March 16, 2023, Baidu officially released ERNIE Bot.[^6] Robin Li personally took the stage, candidly acknowledging that "ERNIE Bot is not yet perfect" but that Baidu had to be the first to step forward. ERNIE Bot was based on Baidu's proprietary ERNIE foundation model (ERNIE 3.5), supporting Chinese dialogue, text generation, code writing, logical reasoning, and more.

Within 4 hours of launch, over 100,000 users applied for beta access.[^6] Baidu's strategy was clear — use first-mover advantage to capture users' mindshare, making "ERNIE Bot" the first association when Chinese users mentioned AI chatbots.

On August 31, 2023, ERNIE Bot was officially opened to the public, no longer requiring beta application.[^7]

### 2.4 ERNIE Foundation Model 4.0: Chasing GPT-4

On October 17, 2023, Baidu released the ERNIE Foundation Model 4.0 at Baidu World 2023. Robin Li demonstrated 4.0's improvements across four capabilities — understanding, generation, logic, and memory — and stated its "overall level is comparable to GPT-4."[^8]

ERNIE 4.0's core improvements included:
- **Generation capability**: Support for longer coherent text generation, reduced hallucination issues.
- **Logical reasoning**: Significant improvement on mathematical reasoning, code generation, and other tasks.
- **Multimodal**: Support for image understanding and generation, moving toward a unified multimodal architecture.

By November 2024, ERNIE Bot's user base exceeded 430 million, with over 1.5 billion daily API calls.[^9]

### 2.5 Key data

| Date | Event | Significance |
|------|-------|-------------|
| 2019-03 | ERNIE 1.0 released | Knowledge-enhanced pre-training, comprehensively surpassing BERT on Chinese NLP[^2] |
| 2019-07 | ERNIE 2.0 released | Continual learning framework, first to surpass human baseline on SQuAD 2.0[^10] |
| 2021-07 | ERNIE 3.0 released | 10B parameters, SOTA on 50+ Chinese tasks[^4] |
| 2021-12 | ERNIE 3.0 Titan released | 260B parameters, world's largest Chinese pre-trained model[^5] |
| 2023-03-16 | ERNIE Bot released | China's first ChatGPT-like product[^6] |
| 2023-08-31 | ERNIE Bot fully opened | Officially available to the public[^7] |
| 2023-10-17 | ERNIE Foundation Model 4.0 released | Chasing GPT-4[^8] |
| 2024-04 | ERNIE 3.5/4.0 tool versions launched | Supporting agents and plugin ecosystem[^11] |
| 2024-11 | Users exceed 430 million | 1.5 billion daily calls[^9] |

---

## III. Impact and Successors

### 3.1 The starting gun for China's large model race

ERNIE Bot's greatest impact was not technical but strategic: **it was the starting gun for China's large model race.**

Before ERNIE Bot's release, Chinese tech companies were still watching and waiting on "ChatGPT-like products." After ERNIE Bot's early launch, Alibaba released Tongyi Qianwen in April 2023, Huawei released PanGu Model 3.0 in July 2023, and iFlytek released Spark in May 2023.[^12] Overnight, Chinese AI companies shifted from "discussing large models" to "releasing large models."

Baidu also received a strong short-term response in the capital market — within one month of ERNIE Bot's release, Baidu's Hong Kong stock price rose approximately 15%.[^13]

### 3.2 The dissolution of first-mover advantage

But first-mover advantage does not equal lasting moat.

From the second half of 2023 through the first half of 2024, China's AI landscape changed rapidly. Alibaba's Tongyi Qianwen open-sourced the Qwen series, gaining enormous influence in the open-source community. Zhipu AI's GLM series built a strong reputation among academics and developers. In January 2025, DeepSeek-R1 trained a reasoning model matching GPT-4's level at extremely low cost, stunning the world.[^14]

ERNIE Bot's problem was that **it lacked product-level differentiation.** The experience of using ERNIE Bot versus other Chinese large model chatbots was not significantly different. Once the technology caught up, the advantage of "being first" was diluted. Baidu's ecosystem — search, maps, document library — was not deeply enough integrated with ERNIE Bot to form a developer ecosystem moat comparable to ChatGPT + OpenAI API.

### 3.3 From ERNIE to applications: Baidu's AI strategy pivot

Baidu's AI strategy underwent a clear shift in center of gravity.

In the early period (2019–2022), Baidu's AI strategy centered on **technical leadership** — the ERNIE series continuously set new records on Chinese NLP benchmarks; PaddlePaddle deep learning framework targeted TensorFlow/PyTorch; and the Apollo autonomous driving platform targeted Waymo.[^15] Baidu's narrative was "the company with the strongest AI technology in China."

After ERNIE Bot's release (2023–present), Baidu's strategic focus shifted to **application deployment** — agent (Agent) ecosystem, ERNIE Bot enterprise edition, and deep integration with Baidu Search/Document Library/Netdisk.[^11] Baidu began telling the story of "AI-native applications" rather than "AI technology breakthroughs."

This pivot was pragmatic, but it also meant Baidu tacitly acknowledged a reality: in foundational large model capabilities, the moat was no longer secure.

### 3.4 Being overtaken and being caught

By 2025, ERNIE's position in the Chinese large model market had shifted from "leading" to "first tier but not unique." DeepSeek attracted massive numbers of developers with its extreme cost-effectiveness and open-source strategy; ByteDance's Doubao rapidly captured market share with consumer-side applications and low-price strategy; Alibaba's Tongyi Qianwen continued to expand with its open-source ecosystem and technical depth.[^14][^16][^17]

Baidu still retained its own advantages — enterprise clients, search ecosystem integration, and years of accumulated Chinese NLP technology stack. But the label of "China's ChatGPT" no longer belonged exclusively to ERNIE Bot.

---

## Commentary

ERNIE Bot was the first starting gun of the Chinese large model era.

Baidu walked four years from ERNIE 1.0 to ERNIE Bot. In those four years, its knowledge-enhanced approach to Chinese NLP was original, and its product launch was decisive. On March 16, 2023, when the world was asking "where is China's ChatGPT?", only Baidu could raise its hand and say "here." The value of that time window was enormous — it let Baidu temporarily occupy the mindshare position of "China's AI."

But first-mover advantage is essentially a "time gap," and time gaps get closed. As foundational model capabilities converged (GPT-4 level was no longer a moat), as open-source models (Qwen, DeepSeek) narrowed the technical gap with closed-source models, the advantage of "being first" degraded from a moat to a brand memory. Baidu's dilemma was not that it did the wrong thing — but that the return on "doing the right thing" continuously diminished as competitors poured in.

ERNIE's historical lesson is: on a track of rapid technological iteration, leading at the starting line does not mean reaching the finish line. Baidu proved that Chinese companies could build their own large models and chat products — but between "building" and "lasting to the end" lies a comprehensive contest of ecosystem, pricing, developer relations, and sustained innovation capability.

---

*This entry was compiled by the Endfield Industrial History Team: Silence (Chronicle Lead Writer).*

---

[^1]: Devlin et al., "BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding", arXiv:1810.04805, 2018-10-11. https://arxiv.org/abs/1810.04805
[^2]: Sun et al., "ERNIE: Enhanced Representation through Knowledge Integration", arXiv:1904.09223, 2019-04-19. https://arxiv.org/abs/1904.09223
[^3]: Reuters, "ChatGPT sets record for fastest-growing user base - analyst note", 2023-02-01. (Report on ChatGPT surpassing 100 million monthly active users within two months of release)
[^4]: Sun et al., "ERNIE 3.0: Large-scale Knowledge Enhanced Pre-training for Language Understanding and Generation", arXiv:2107.02137, 2021-07-05. https://arxiv.org/abs/2107.02137
[^5]: Wang et al., "ERNIE 3.0 Titan: Exploring Larger-scale Knowledge Enhanced Pre-training for Language Understanding and Generation", arXiv:2112.12731, 2021-12-23. https://arxiv.org/abs/2112.12731
[^6]: Baidu Official, "ERNIE Bot Press Conference", 2023-03-16. (Robin Li personally launched ERNIE Bot, candidly acknowledging the product was not yet complete but that Baidu had to be the first to step forward)
[^7]: Baidu Official, "ERNIE Bot full public service announcement", 2023-08-31. (ERNIE Bot officially opened to the public, no longer requiring beta application)
[^8]: Baidu World 2023, "ERNIE Foundation Model 4.0 release", 2023-10-17. (Robin Li released ERNIE 4.0 at Baidu World, claiming overall level comparable to GPT-4)
[^9]: Baidu 2024 Q3 financial report and official data, 2024-11. (ERNIE Bot users exceed 430 million, daily calls exceed 1.5 billion)
[^10]: Sun et al., "ERNIE 2.0: A Continual Pre-training Framework for Language Understanding", arXiv:1907.12412, 2019-07-29. https://arxiv.org/abs/1907.12412
[^11]: Baidu Official, "ERNIE 3.5/4.0 tool version release", 2024-04. (Supporting agents and plugin ecosystem, marking Baidu's shift from technology breakthroughs to application deployment)
[^12]: Composite reports: Alibaba Tongyi Qianwen (2023-04-07), Huawei PanGu Model 3.0 (2023-07-07), iFlytek Spark (2023-05-06) all launched within two months of ERNIE Bot's release.
[^13]: Hong Kong Stock Exchange Baidu Group (9888.HK) price data, 2023-03-16 to 2023-04-16. (Baidu's Hong Kong stock rose approximately 15% cumulatively within one month of ERNIE Bot's release)
[^14]: DeepSeek-AI et al., "DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning", arXiv:2501.12948, 2025-01-22. https://arxiv.org/abs/2501.12948
[^15]: Baidu AI Open Platform, PaddlePaddle deep learning framework documentation. https://www.paddlepaddle.org.cn/; Baidu Apollo autonomous driving open platform. https://apollo.auto/
[^16]: ByteDance Doubao large model related reports, 2024-05 to 2024-08. (Doubao's major price cuts after release triggered a price war; MAU grew rapidly)
[^17]: Qwen Team (Alibaba), "Qwen Technical Report", arXiv:2309.16609, 2023-09-28. https://arxiv.org/abs/2309.16609; Qwen 2.5 series gained widespread adoption in the open-source community.
