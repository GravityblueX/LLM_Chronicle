# The Annals of OpenAI

> OpenAI is the most influential AI company of the Transformer era. From a nonprofit research lab in 2015 to an industry giant valued at hundreds of billions in 2025 — every strategic pivot it made reshaped the landscape of the entire large language model industry.

---

## I. Overview

OpenAI was founded in December 2015 in San Francisco. The founding team included Elon Musk, Sam Altman, Greg Brockman, Ilya Sutskever, and others, with the initial commitment to "build safe artificial general intelligence (AGI) that benefits all of humanity" — a nonprofit organization, not driven by commercial profit.

A decade later, OpenAI had become unrecognizable: from nonprofit to "capped-profit," from open-source to fully closed-source, from research lab to API-driven company valued in the hundreds of billions. Its evolutionary trajectory is a complete case study of LLM commercialization — every step was controversial, every step had its rationale, and every step redefined the meaning of "AI company."

---

## II. Founding and Early Years

### 2.1 The nonprofit promise

In late 2015, a moderately significant event occurred in the AI field: a group of Silicon Valley's most powerful figures announced the founding of a nonprofit AI research lab. Elon Musk, Sam Altman, Ilya Sutskever (then a Google Brain researcher), Greg Brockman (former Stripe CTO), and 10 others jointly initiated it, with an initial commitment to raise $1 billion for AI safety research.[^1]

The immediate impetus was Musk and Altman's concern following Google's acquisition of DeepMind — "Google will own AGI, and no one will be able to counterbalance it." OpenAI's mission statement was explicit: "Our goal is to advance digital intelligence in the way that is most likely to benefit humanity as a whole, unconstrained by a need to generate financial return."

The early team was small but elite. Ilya Sutskever served as Research Director, Greg Brockman as CTO. Between 2016 and 2017, OpenAI's primary outputs concentrated on reinforcement learning (OpenAI Gym, Universe) and robotics. In NLP, no one yet knew that "Transformer architecture + massive data + massive compute" could lead anywhere.

### 2.2 Musk's departure

In February 2018, Elon Musk resigned from OpenAI's board. OpenAI's official statement cited avoiding "potential future conflicts" — Musk's Tesla was developing its own AI chip and autonomous driving technology.[^2]

But Musk later offered another version on Twitter: he proposed taking over OpenAI and injecting more capital, but was rejected by Altman and Brockman. Musk subsequently criticized OpenAI publicly on multiple occasions for abandoning its original commitments to "safety" and "openness" — "a company that should have been as open as Linux became as closed as Microsoft."

Musk's departure was a turning point. It marked OpenAI's shift from "Musk + Altman dual leadership" to Sam Altman's dominance. It was also from this year that OpenAI began its march toward a commercial path.

---

## III. Key Events

### 3.1 GPT-1 and GPT-2 (2018–2019): The beginning of technical positioning

**2018-06** — GPT-1 (117M parameters) released. The "generative pre-training + task fine-tuning" paradigm was established. Community response was muted — four months later, BERT (340M) stole all attention with 11 SOTA results.[^3]

**2019-02** — GPT-2 (1.5B parameters) released, with staged rollout due to being "too dangerous." This was the first time OpenAI used a "safety narrative" to control its release cadence — it subsequently became OpenAI's standard release strategy. The controversy surrounding "staged release" actually amplified media attention enormously.[^4]

**2019-03** — OpenAI announced its transformation into a **"capped-profit"** company — OpenAI LP. This was an elaborately designed legal innovation: investor returns were capped at 100x, with excess going to the nonprofit entity. Sam Altman relinquished equity to maintain the legitimacy of the "nonprofit spirit."[^5]

### 3.2 Microsoft's entry and GPT-3 (2019–2020): From research to platform

**2019-07-22** — Microsoft announced a $1 billion investment in OpenAI, establishing an "exclusive computing partnership." Microsoft Azure became OpenAI's exclusive cloud provider.[^6]

This investment was an iconic moment in AI history: a nonprofit whose mission was to "prevent AI from being monopolized by tech giants" formed an exclusive alliance with one of the world's largest tech giants. Critics called it a textbook case of "Mission Capture." But Microsoft's computing power was a necessary condition for OpenAI to train GPT-3.

**2020-06** — GPT-3 (175B) released. Not open-source, but API-only. This 72-page paper demonstrated the scale emergence of zero-shot/few-shot abilities — a defining work of an era. But the decision to "not release weights" made OpenAI's "Open" a perpetually questioned word.[^7]

### 3.3 ChatGPT and GPT-4 (2022–2023): From platform to product

**2022-11-30** — ChatGPT released. One million users in five days, over 100 million in two months. LLMs entered public life from the research domain. The technology behind ChatGPT (GPT-3.5 + InstructGPT's RLHF) already existed, but the product decision to "put it in a chat box" created an entirely new category.[^8]

**2023-01-23** — Microsoft announced a "multi-year, multi-billion dollar" additional investment in OpenAI. The exact amount was undisclosed; external estimates put it at approximately $10 billion.[^9]

**2023-03-14** — GPT-4 released. Multimodal, surpassing 90% of test-takers on professional exams. But the technical report fully withheld parameter counts, training data volume, and model architecture — inaugurating the era of "black-box releases" for LLMs.

### 3.4 Sam Altman's firing and reinstatement (2023-11): A 104-hour board coup

**2023-11-17** — OpenAI's board suddenly announced the removal of Sam Altman as CEO, citing "he was not consistently candid in his communications with the board." Greg Brockman subsequently resigned as board chairman.[^10]

This was one of the most dramatic events in LLM history. The specific reasons for the "coup" have never been fully disclosed — external speculation involved a fundamental divergence between the safety faction (Ilya Sutskever et al.) and the commercial faction (Altman et al.): How fast should models be released? How far should commercialization go? Where should safety rank in priorities?

What followed was a series of dramatic twists:
- November 18 — Over 700 of OpenAI's 770 employees signed an open letter demanding the board resign and Altman be reinstated, or they would collectively leave for Microsoft
- November 20 — Microsoft CEO Satya Nadella announced Altman and Brockman would join Microsoft to lead a new AI research team
- November 21 — OpenAI's board announced an agreement with Altman: Altman would be reinstated as CEO, and the board would be restructured. Ilya Sutskever left the board; Brockman returned

The 104-hour coup ended in Altman's complete victory. The new board included Bret Taylor (former Salesforce CEO), Larry Summers (former U.S. Treasury Secretary), and Adam D'Angelo (Quora CEO) — traditional Silicon Valley power structures replacing the original idealistic coloring.

### 3.5 GPT-4o, o1, and the post-coup era (2024–2025)

**2024-05-13** — GPT-4o released, natively multimodal, free to all users. Signaled OpenAI's shift from "paywall strategy" to "scale-first."

**2024-09-12** — o1 released, the first reasoning model. Test-time compute became a new scaling dimension.

**2024-12-26** — DeepSeek-V3 released, MIT-licensed open-source, training cost only ~$5.6M. Approaching GPT-4o on multiple benchmarks.

**2025-01-20** — DeepSeek-R1 released; NVIDIA lost $589 billion in one day. OpenAI faced for the first time the reality of "being fully caught up by open source."

**2025-02-27** — GPT-4.5 released; Sam Altman called it "the last non-chain-of-thought model."

**2026** — GPT-5 repeatedly delayed; as of the time of writing (2026-05), not yet officially released. OpenAI faced multi-front pressure from Claude, Gemini, DeepSeek, and Qwen.

---

## IV. Rise and Fall Analysis

### Phase One: The nonprofit utopia (2015–2018)

**What happened**: A group of idealistic tech elites founded an AI research lab not driven by commerce.
**Why it happened**: Panic over Google's acquisition of DeepMind; Silicon Valley's early attention to AGI risks; Musk and Altman's personal influence and fundraising ability.
**What it left behind**: OpenAI Gym, Universe, and other reinforcement learning open-source tools; GPT-1's pre-training paradigm. But most importantly, the "nonprofit" brand narrative — a narrative used to defend against every subsequent commercialization controversy.

### Phase Two: The commercialization pivot (2019–2020)

**What happened**: OpenAI transformed from nonprofit to "capped-profit," accepted Microsoft's $1 billion investment, and released GPT-3 in API-only mode.
**Why it happened**: Training LLMs requires enormous computing resources — the nonprofit financial structure could not support it. Competitors like Google, DeepMind, and Meta had commercialization infrastructure far exceeding OpenAI's.
**What it left behind**: GPT-3's capability demonstration (zero-shot/few-shot); the "API-as-model" business model; the "capped-profit" legal innovation — later adopted as a template by Anthropic (PBC), xAI, and others.

### Phase Three: The product explosion (2022–2023)

**What happened**: ChatGPT became the fastest-growing consumer product in history; GPT-4 defined the global AI frontier; Microsoft added billions; Sam Altman was fired and reinstated.
**Why it happened**: RLHF alignment transformed GPT from "tech demo" to "usable product." The product decision to put an LLM in a chat box changed the industry more than any algorithmic innovation.
**What it left behind**: AI chat established as a standalone product category; OpenAI's brand value transformed from "research lab" to "the world's hottest tech product company"; but the tension between the "Open" trademark and the closed-source reality reached an all-time high.

### Phase Four: Multi-front competition and identity crisis (2024–present)

**What happened**: The o1 reasoning model opened a new category but failed to maintain exclusivity; GPT-5 repeatedly delayed; open-source camps (DeepSeek, Qwen, Llama) made major capability catch-up; GPT-4.5 was assessed as "too incremental."
**Why it happened**: OpenAI's "first-mover advantage" was being eroded on multiple fronts — reasoning models overtaken by DeepSeek-R1's MIT open-source; ultra-long context suppressed by Google Gemini 1.5 Pro; programming capability matched by Claude 3.5 Sonnet; cost advantage crushed by DeepSeek-V3's 1% pricing.
**Lingering questions**: Can GPT-5 re-establish the gap? Can OpenAI still define an era's "frontier" as it did from 2020–2023? Or is "multipolarity" AI's ultimate steady state?

---

## Appraisal

OpenAI's decade is a complete case study of "how a nonprofit deforms under commercial pressure."

From the outside, its transformation appears to be a series of compromises — from open-source to closed-source, from nonprofit to capped-profit, from safety-first to product-first, from "Open" to not open. With every step, critics cried "you've betrayed your founding principles."

But from the inside, every step had clear commercial logic. Chinchilla scaling laws said training good things requires massive compute — the nonprofit structure couldn't raise enough money, hence Microsoft. GPT-2's "too dangerous" claim sparked outrage — but every staged release amplified media attention by several fold, so it continued. The API-only model was criticized as violating the "Open" promise — but it was the only sustainable business model, so it persisted.

OpenAI's true innovation was not any single model. It was the **commercial application of the safety narrative** — "because it's dangerous, we need control; because we need control, we go closed-source; because we go closed-source, we charge fees." This logical loop provided moral legitimacy for OpenAI's commercialization — critics called it "safety-washing," supporters called it "responsible development." Regardless of how it's judged, it was an extraordinarily effective narrative strategy.

DeepSeek-R1's MIT open-source cast the longest shadow over this narrative. When reasoning models' chains of thought are made public, weights are freely downloadable, and pricing is at just 3% — the premise of "safety requires closed-source" faces factual challenge. The core question OpenAI faces in 2025–2026 is not technical — it is narrative: if open source can also be safe, where is the justification for closed source?

---

*This biography was compiled by the Endfield Industrial Historian Team: Zhuang Fangyi (lead writer).*

---

[^1]: OpenAI Blog, "Introducing OpenAI," 2015-12-11. https://openai.com/blog/introducing-openai
[^2]: OpenAI Blog, "OpenAI Supporters," 2018-02-20. https://openai.com/blog/openai-supporters
[^3]: Radford et al., "Improving Language Understanding by Generative Pre-Training," OpenAI, 2018-06-11. https://openai.com/research/language-unsupervised
[^4]: OpenAI Blog, "Better Language Models and Their Implications," 2019-02-14. https://openai.com/research/better-language-models
[^5]: OpenAI Blog, "OpenAI LP," 2019-03-11. https://openai.com/blog/openai-lp
[^6]: OpenAI Blog, "Microsoft invests in and partners with OpenAI," 2019-07-22. https://openai.com/blog/microsoft-invests-in-and-partners-with-openai
[^7]: Brown et al., "Language Models are Few-Shot Learners," arXiv:2005.14165, 2020-05-28. https://arxiv.org/abs/2005.14165
[^8]: OpenAI Blog, "Introducing ChatGPT," 2022-11-30. https://openai.com/blog/chatgpt
[^9]: The Verge, "Microsoft extends OpenAI partnership with multi-billion dollar investment," 2023-01-23. https://www.theverge.com/2023/1/23/23567448/microsoft-openai-investment-chatgpt
[^10]: OpenAI Blog, "OpenAI announces leadership transition," 2023-11-17. https://openai.com/blog/openai-announces-leadership-transition
