# The Biography of ERNIE

> ERNIE was the pioneer of Chinese LLMs—not the fastest runner, but the earliest to start running. Baidu had been betting on language models since ERNIE 1.0 in 2019, and by March 2023 had rushed to release ERNIE Bot, to the point where "LLM" was almost synonymous with Baidu in the Chinese market. However, first-mover advantage did not equal lasting moat: as Alibaba, ByteDance, and DeepSeek each caught up, ERNIE could not hold its position as "China's number one." This history tells the story of what lies between "being the first to do it" and "being the last one standing" in a technological revolution.

---

## I. Technical Background

In October 2018, Google released BERT, using masked language modeling (MLM) to set new records on 11 NLP benchmarks.[^1] BERT's approach was "self-supervised + fine-tuning"—pre-training on massive unlabeled text, then fine-tuning downstream tasks with small amounts of labeled data. This paradigm rapidly swept through the NLP field.

But BERT had a blind spot: **it only learned the surface-level statistical patterns of text, not the knowledge behind the text.** "Harry Potter was written by J.K. Rowling"—BERT did not know that "Harry Potter" was a fictional character, "J.K. Rowling" was a real author, and the relationship between them was "created by." It only knew that these words frequently appeared together.

In Chinese-language scenarios, this problem was more severe. Chinese lacked clear word boundaries, entities and phrases had complex compositional structures, and BERT's character-level masking strategy was less efficient at understanding Chinese semantics than English.[^2] Baidu's NLP team identified this gap—**if structured knowledge could be injected into the pre-training process, Chinese understanding could outperform BERT.**

On the product side, Baidu faced an equally urgent backdrop. In January 2023, ChatGPT burst onto the scene, surpassing 100 million monthly active users within two months.[^3] Robin Li (Li Yanhong) made a swift internal decision—Baidu had to be the first Chinese company to release a ChatGPT-like product. The race for China's ChatGPT had begun.

---

## II. Core Innovations

### 2.1 ERNIE 1.0: knowledge-enhanced pre-training

In March 2019, Baidu released ERNIE (Enhanced Representation through Knowledge Integration).[^2] ERNIE's core idea was: building on BERT's masked language model, **injecting entity-level and phrase-level knowledge into pre-training.**

Specifically, while BERT randomly masked individual tokens, ERNIE masked entire entities and phrases—"Harbin is a [city] in Heilongjiang Province" rather than "Har[?]bin is a [?] in Heilong[?] Pro[?]." To predict the masked semantic units as wholes, the model had to understand both the internal structure and external relationships of entities. With the aid of Baidu's proprietary knowledge graph, ERNIE also introduced semantic relationship modeling—enabling the model to know not just "which words co-occur" but "what the relationship between words is."

On Chinese tasks, ERNIE 1.0 surpassed BERT across five tasks: sentiment analysis, named entity recognition, natural language inference, semantic similarity, and reading comprehension.[^2]

### 2.2 ERNIE 3.0: a unified framework

In July 2021, Baidu released ERNIE 3.0, with parameters reaching 10 billion (10B), achieving comprehensive leadership on Chinese NLP benchmarks.[^4] ERNIE 3.0's architectural innovation was **unifying autoregressive and autoencoding objectives within a single framework**—first using large-scale autoregressive pre-training to acquire general language capabilities, then performing incremental training with different downstream objectives.

ERNIE 3.0 achieved state-of-the-art results on over 50 Chinese NLP tasks, spanning text classification, reading comprehension, dialogue generation, code generation, and more. It was the first truly "milestone" work in the Chinese LLM field.[^4]

In December 2021, Baidu further released ERNIE 3.0 Titan (260 billion parameters), which was at one time the largest Chinese pre-training model in the world.[^5]

### 2.3 ERNIE Bot: China's first ChatGPT-like product

On 2023-03-16, Baidu officially released ERNIE Bot.[^6] Robin Li personally took the stage, candidly admitting that "ERNIE Bot is not yet perfect," but that Baidu had to be the first to step forward. ERNIE Bot was based on Baidu's proprietary ERNIE Foundation Model (ERNIE 3.5), supporting Chinese dialogue, text generation, code writing, logical reasoning, and other functions.

Within four hours of ERNIE Bot going live, over 100,000 users had applied for beta access.[^6] Baidu's strategy was clear—use first-mover advantage to seize user mindshare, making "ERNIE Bot" the first association when Chinese users mentioned AI chat.

On 2023-08-31, ERNIE Bot was fully opened to the public, with no beta application required.[^7]

### 2.4 ERNIE Foundation Model 4.0: catching up with GPT-4

On 2023-10-17, Baidu released ERNIE Foundation Model 4.0 at Baidu World 2023. Robin Li demonstrated improvements in four core capabilities—understanding, generation, logic, and memory—and declared it "comparable to GPT-4 overall."[^8]

Key improvements of ERNIE 4.0 included:
- **Generation capability**: supporting more coherent long-text generation with reduced hallucination.
- **Logical reasoning**: significantly improved performance on mathematical reasoning, code generation, and related tasks.
- **Multimodal**: supporting image understanding and generation, moving toward a unified multimodal architecture.

By November 2024, ERNIE Bot's user base exceeded 430 million, with daily API calls surpassing 1.5 billion.[^9]

### 2.5 Key milestones

| Date | Event | Significance |
|------|-------|--------------|
| 2019-03 | ERNIE 1.0 released | Knowledge-enhanced pre-training, comprehensively surpasses BERT on Chinese NLP[^2] |
| 2019-07 | ERNIE 2.0 released | Continual learning framework, first to surpass human baseline on SQuAD 2.0[^10] |
| 2021-07 | ERNIE 3.0 released | 10B parameters, SOTA on 50+ Chinese tasks[^4] |
| 2021-12 | ERNIE 3.0 Titan released | 260 billion parameters, world's largest Chinese pre-training model[^5] |
| 2023-03-16 | ERNIE Bot released | China's first ChatGPT-like product[^6] |
| 2023-08-31 | ERNIE Bot fully opened | Officially available to the public[^7] |
| 2023-10-17 | ERNIE Foundation Model 4.0 released | Catching up with GPT-4[^8] |
| 2024-04 | ERNIE 3.5/4.0 tool versions launched | Supporting agent and plugin ecosystems[^11] |
| 2024-11 | Users exceed 430 million | 1.5 billion daily API calls[^9] |

---

## III. Impact and Aftermath

### 3.1 The starting gun for China's LLM race

ERNIE Bot's greatest impact was not on the technical level but on the strategic level: **it was the starting gun for China's LLM race.**

Before ERNIE Bot's release, Chinese tech companies were still in a wait-and-see mode regarding "ChatGPT-like products." After ERNIE Bot's early launch, Alibaba released Tongyi Qianwen in April 2023, Huawei released Pangu Model 3.0 in July 2023, and iFlytek released Spark Cognitive LLM in May 2023.[^12] Overnight, Chinese AI companies shifted from "discussing LLMs" to "releasing LLMs."

Baidu also received a short-term, strong response in the capital markets—within one month of ERNIE Bot's release, Baidu's Hong Kong-listed stock price rose approximately 15% cumulatively.[^13]

### 3.2 The erosion of first-mover advantage

But first-mover advantage did not equal lasting moat.

From the second half of 2023 through the first half of 2024, China's AI landscape shifted rapidly. Alibaba's Tongyi Qianwen open-sourced the Qwen series, gaining enormous influence in the open-source community. Zhipu AI's GLM series built its reputation among academia and developers. In January 2025, DeepSeek-R1 stunned the world by training a reasoning model on par with GPT-4 at extremely low cost.[^14]

ERNIE Bot's problem was that **it lacked differentiation at the product level.** Users experienced little difference between using ERNIE Bot and using other Chinese LLM chatbots. Once the technical catch-up was complete, the advantage of "doing it first" was diluted. Baidu's ecosystem—search, maps, document library—and its integration with ERNIE Bot were not deep enough to form an ecosystem barrier comparable to ChatGPT + OpenAI API.

### 3.3 From ERNIE to applications: Baidu's AI strategy pivot

Baidu's AI strategy underwent a clear shift in focus.

In the early period (2019–2022), Baidu's AI strategy centered on **technical leadership**—the ERNIE series continuously set new records on Chinese NLP benchmarks, the PaddlePaddle deep learning framework competed with TensorFlow/PyTorch, and the Apollo autonomous driving platform competed with Waymo.[^15] Baidu's narrative was "the company with the strongest AI technology in China."

After ERNIE Bot's release (2023–present), Baidu's strategic focus shifted toward **application deployment**—agent (Agent) ecosystems, ERNIE Bot enterprise edition, and deep integration with Baidu Search, Baidu Doc, and Baidu Netdisk.[^11] Baidu began telling the story of "AI-native applications" rather than "AI technology breakthroughs."

This pivot was pragmatic, but it also meant Baidu implicitly acknowledged a reality: in foundational LLM capabilities, the moat was no longer secure.

### 3.4 Being overtaken and being chased

By 2025, ERNIE's position in the Chinese LLM market had shifted from "leading" to "first tier but not alone." DeepSeek attracted massive numbers of developers with extreme cost-effectiveness and open-source strategy; ByteDance's Doubao rapidly captured the market with consumer-side applications and low-price strategy; Alibaba's Tongyi Qianwen continued expanding with its open-source ecosystem and technical depth.[^14][^16][^17]

Baidu still retained its own advantages—enterprise clients, search ecosystem integration, and years of accumulated Chinese NLP technology expertise. But the label of "China's ChatGPT" no longer belonged exclusively to ERNIE Bot.

---

## Commentary

ERNIE Bot was the first starting gun of the Chinese LLM era.

Baidu took four years from ERNIE 1.0 to ERNIE Bot. During those four years, its knowledge-enhanced approach to Chinese NLP was original, and its decisive early launch was bold. On 2023-03-16, when the entire world was asking "Where is China's ChatGPT?", only Baidu could raise its hand and say "here." The value of that time window was enormous—it allowed Baidu to momentarily own the mindshare of "Chinese AI."

But the essence of first-mover advantage is a "time gap," and time gaps get closed. When underlying model capabilities converged (GPT-4 level was no longer a barrier), when open-source models (Qwen, DeepSeek) narrowed the technical gap with closed-source models, the advantage of "doing it first" degraded from a moat into brand memory. Baidu's predicament was not that it did the wrong things—but that the return on "doing the right things" continuously diminished as competitors poured in.

The historical lesson of ERNIE is this: on a track of rapid technological iteration, leading at the starting line does not mean reaching the finish line. Baidu proved that Chinese companies could build their own LLMs and chat products—but between "building" and "being the last one standing" lies a comprehensive contest of ecosystem, pricing, developer relations, and sustained innovation capability.

---

*This entry was compiled by the Endfield Industrial History Team: Silence (Lead Biographer).*

---

[^1]: Devlin et al., "BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding", arXiv:1810.04805, 2018-10-11. https://arxiv.org/abs/1810.04805
[^2]: Sun et al., "ERNIE: Enhanced Representation through Knowledge Integration", arXiv:1904.09223, 2019-04-19. https://arxiv.org/abs/1904.09223
[^3]: Reuters, "ChatGPT sets record for fastest-growing user base - analyst note", 2023-02-01. (Report on ChatGPT surpassing 100 million MAU two months after launch)
[^4]: Sun et al., "ERNIE 3.0: Large-scale Knowledge Enhanced Pre-training for Language Understanding and Generation", arXiv:2107.02137, 2021-07-05. https://arxiv.org/abs/2107.02137
[^5]: Wang et al., "ERNIE 3.0 Titan: Exploring Larger-scale Knowledge Enhanced Pre-training for Language Understanding and Generation", arXiv:2112.12731, 2021-12-23. https://arxiv.org/abs/2112.12731
[^6]: Baidu Official, "ERNIE Bot Press Conference", 2023-03-16. (Robin Li personally launched ERNIE Bot, candidly acknowledging the product was not yet complete but Baidu had to be the first to step forward)
[^7]: Baidu Official, "ERNIE Bot Full Public Service Announcement", 2023-08-31. (ERNIE Bot officially opened to the public, no beta application required)
[^8]: Baidu World 2023, "ERNIE Foundation Model 4.0 Release", 2023-10-17. (Robin Li released ERNIE 4.0 at Baidu World, declaring overall performance comparable to GPT-4)
[^9]: Baidu 2024 Q3 earnings report and official data, 2024-11. (ERNIE Bot users exceed 430 million, daily API calls surpass 1.5 billion)
[^10]: Sun et al., "ERNIE 2.0: A Continual Pre-training Framework for Language Understanding", arXiv:1907.12412, 2019-07-29. https://arxiv.org/abs/1907.12412
[^11]: Baidu Official, "ERNIE 3.5/4.0 Tool Version Release", 2024-04. (Supporting agent and plugin ecosystems, marking Baidu's shift from technology breakthroughs to application deployment)
[^12]: Composite reports: Alibaba Cloud Tongyi Qianwen (2023-04-07), Huawei Pangu Model 3.0 (2023-07-07), iFlytek Spark Cognitive LLM (2023-05-06) all launched within two months of ERNIE Bot's release.
[^13]: HKEX Baidu Group (9888.HK) stock price data, 2023-03-16 to 2023-04-16. (Baidu's Hong Kong-listed stock rose approximately 15% cumulatively within one month of ERNIE Bot's release)
[^14]: DeepSeek-AI et al., "DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning", arXiv:2501.12948, 2025-01-22. https://arxiv.org/abs/2501.12948
[^15]: Baidu AI Open Platform, PaddlePaddle deep learning framework documentation. https://www.paddlepaddle.org.cn/; Baidu Apollo autonomous driving open platform. https://apollo.auto/
[^16]: ByteDance Doubao LLM-related reports, 2024-05 to 2024-08. (Doubao LLM triggered a price war with major price cuts after release; MAU grew rapidly)
[^17]: Qwen Team (Alibaba), "Qwen Technical Report", arXiv:2309.16609, 2023-09-28. https://arxiv.org/abs/2309.16609; Qwen 2.5 series gained widespread adoption in the open-source community.
