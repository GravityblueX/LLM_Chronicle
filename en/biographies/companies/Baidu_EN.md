# The Annals of Baidu

> Baidu is China's AI pioneer — when it established its deep learning laboratory in 2013, the vast majority of Chinese internet companies were still in the traffic business. A decade later, when the LLM wave swept the globe, Baidu was the first to unveil ERNIE Bot, only to suffer a stock price plunge on the very day of its launch. From "China's first AI stock" to "troubled by the DeepSeek shock," Baidu's decade in AI is a true record of how a Chinese tech giant navigates its place amid technological transformation.

---

## I. Overview

Baidu's place in the history of large language models is unique: **it was the earliest Chinese internet giant to invest in AI R&D, and the first Chinese company to release a ChatGPT-like product**. From establishing its deep learning laboratory in 2013, to releasing ERNIE 1.0 in 2019, to rushing out ERNIE Bot in March 2023 — Baidu's AI deployment was at least three years ahead of its Chinese peers.

But first-mover advantage does not equate to lasting moats. As Alibaba, ByteDance, and DeepSeek each caught up, Baidu failed to hold its position as "China's number one in AI." The stumble at ERNIE Bot's launch, the closed ecosystem of PaddlePaddle, the predicament of a closed-source strategy under open-source assault — these issues exposed the structural contradictions of Baidu as a "traditional internet giant" undergoing AI transformation.

Baidu's story is not a story of failure. It is a quintessential case study of Chinese tech giants' AI transformation — with vision, investment, and results, but also limitations, misjudgments, and costs.

---

## II. Founding and Early Years

### 2.1 The search engine's AI DNA

Baidu was founded in 2000 and is China's largest search engine company. The core technologies of search engines — information retrieval, natural language processing, user intent understanding — are inherently AI application scenarios. Baidu's AI DNA was not grafted on later; it grew organically from the search engine's own genes.

In January 2013, Baidu established the **Institute of Deep Learning (IDL)** — the first independent research institution named after "deep learning" among Chinese internet companies.[^1] Robin Li personally served as its director, recruiting top AI researchers from Google, Microsoft, and other companies. The IDL was established two years after Google Brain (2011), but was at least three years ahead of any other technology team within Baidu in deploying deep learning.

### 2.2 The ambition of full-stack self-reliance

Baidu's AI strategy was characterized by "full-stack self-reliance" from the very beginning. This was no accident — when Baidu began its AI deployment in 2013, China's AI infrastructure was virtually nonexistent: no in-house chips, no deep learning frameworks, no pre-trained models. Baidu chose the heaviest path: building from the ground up.

Key milestones along this path:
- **2013–2016**: Institute of Deep Learning (IDL) established, beginning foundational research in speech recognition, image recognition, NLP, and more
- **2016**: Released PaddlePaddle — China's first and the world's third deep learning framework (the first two being Google's TensorFlow and Facebook's PyTorch)
- **2018**: Released Kunlun chip — China's first cloud-based full-function AI chip
- **2019**: Released ERNIE 1.0 — a knowledge-enhanced pre-trained language model

This "chip + framework + model + application" full-stack deployment made Baidu the only company in China with a complete AI technology stack. This advantage was fully realized when the LLM explosion occurred in 2023 — while other Chinese companies were still worrying about GPU embargoes, framework dependencies, and model capabilities, Baidu could "plug and play" with ERNIE Bot.

---

## III. Key Events

| Date | Event | Significance |
|------|-------|-------------|
| 2013-01 | Institute of Deep Learning (IDL) established | First deep learning research institution among Chinese internet companies |
| 2016 | PaddlePaddle open-sourced | China's first deep learning framework |
| 2018 | Kunlun chip released | China's first cloud AI chip |
| 2019-03 | ERNIE 1.0 released | Pioneering work in knowledge-enhanced pre-training |
| 2023-03-16 | ERNIE Bot released | China's first ChatGPT-like product, but suffered a launch stumble |
| 2023-10-17 | ERNIE 4.0 released | Milestone in pursuing GPT-4 |
| 2025-01 | DeepSeek R1 released | Fundamental shock to Baidu's closed-source strategy |

### 3.1 The ERNIE series: China's knowledge-enhanced route

Baidu's technical contribution to the LLM field is primarily embodied in the **ERNIE (Enhanced Representation through Knowledge Integration)** series. ERNIE's core innovation was injecting structured knowledge (knowledge graphs, entity relationships) into the pre-training process, enabling the model to learn not just "word co-occurrence" but "the relationships between words."[^2]

The ERNIE iteration timeline:
- **ERNIE 1.0** (2019-03): Built on BERT's masked language model with entity-level and phrase-level knowledge enhancement, comprehensively surpassing BERT on Chinese NLP tasks
- **ERNIE 3.0** (2021-07): 10 billion parameters, unifying autoregressive and autoencoding objectives, achieving state-of-the-art on over 50 Chinese NLP tasks
- **ERNIE 3.0 Titan** (2021-12): 260 billion parameters, briefly the world's largest Chinese pre-trained model
- **ERNIE 3.5/4.0** (2023–2024): Foundation models for ERNIE Bot, continuously iterated

ERNIE's technical approach differentiated itself from OpenAI's GPT and Google's BERT: GPT emphasized the "scaling laws" of brute force, BERT emphasized the "mask + fine-tune" pre-training paradigm, while ERNIE emphasized "knowledge injection" — enabling models to understand semantic structures behind text. This approach had natural advantages in Chinese scenarios: Chinese entity and phrase structures are more complex than English, making knowledge injection more valuable. (See "ERNIE — A Model Biography")

### 3.2 ERNIE Bot launch (2023-03-16): The cost of going first

On March 16, 2023, Baidu held a launch event at its Beijing headquarters, officially unveiling **ERNIE Bot**. CEO Robin Li personally demonstrated the product, candidly admitting that "ERNIE Bot is not yet perfect," but that Baidu had to be the first to step forward.[^3]

The launch event's reception exceeded all expectations — but not positively. Robin Li's entire demonstration used pre-recorded videos rather than live interaction. This detail was seized upon by media and investors, interpreted as "Baidu lacks confidence in ERNIE Bot's capabilities." On the day of the launch, Baidu's Hong Kong-listed shares fell 6%, erasing approximately HK$30 billion in market value.[^4]

ERNIE Bot's stumble exposed the tension between Baidu's "technical capability vs. product demonstration." Baidu's technical team did have the ability to build China's first ChatGPT-like product — ERNIE 3.5 performed well on multiple Chinese benchmarks. But Robin Li's demonstration approach — pre-recorded, cautious, avoiding live interaction — sent a signal of "we're afraid of making mistakes." Against the backdrop of ChatGPT having already amazed the world with real-time conversation, this caution was interpreted as "insufficient capability."

But ERNIE Bot's first-mover advantage was also real. On August 31, 2023, ERNIE Bot was officially opened to the public without requiring beta access.[^5] By 2024, Baidu claimed ERNIE Bot had surpassed 200 million users.[^6] In the Chinese market, "ERNIE Bot" briefly became synonymous with "AI chat" — much like "ChatGPT" on the global stage.

### 3.3 Full-stack self-reliance: Moat and shackle

Baidu's full-stack approach — Kunlun chip + PaddlePaddle + ERNIE + ERNIE Bot — was a unique deployment in China's AI industry. This showed strategic value when GPU embargoes intensified in 2023: while other Chinese companies worried about NVIDIA GPU supply, Baidu could train and deploy models using its in-house Kunlun chip.

But full-stack self-reliance was also a shackle. The **PaddlePaddle** framework's closed ecosystem was the most criticized aspect of Baidu. Compared to PyTorch (the framework with the most active global developer community), PaddlePaddle's user base, third-party libraries, and tutorial resources lagged far behind.[^7] This meant external developers preferred the PyTorch + NVIDIA GPU combination over PaddlePaddle + Kunlun.

Baidu's closed-source strategy further compounded this issue. When Alibaba released the Qwen open-source series and Zhipu AI released the ChatGLM open-source series, Baidu chose the closed-source + API route — highly similar to OpenAI. This strategy protected Baidu's commercial interests in the short term (ERNIE Bot's API revenue), but weakened its developer ecosystem in the long run. (See "Chronicles: April 2023")

### 3.4 The DeepSeek shock (2025-01): The cost of going closed-source

In January 2025, **DeepSeek R1** was released — an open-source reasoning model under MIT license that achieved GPT-4-level performance on multiple benchmarks, with training costs reportedly a fraction of OpenAI's.[^8]

DeepSeek R1's impact on China's AI industry was structural. It proved one thing: **open-source models can match closed-source model capabilities**. This posed a fundamental challenge to Baidu's closed-source strategy — when open-source models are good enough, why would enterprise customers pay for ERNIE Bot's API?

The dilemmas Baidu faced:
- **Developer attrition**: The open-source community (PyTorch + HuggingFace) was far more attractive than the PaddlePaddle ecosystem
- **Price pressure**: DeepSeek R1's MIT license meant enterprises could use it for free; Baidu's API pricing had to go even lower
- **Brand dilution**: When "ERNIE Bot" was no longer "China's strongest model," where was its brand premium?

Baidu's response was to accelerate iteration — ERNIE 4.0, 4.5, and 5.0 were continuously released, attempting to catch up with the frontier on capability. But DeepSeek's shock had already changed the game: **closed-source was no longer the default option; open source became a force that could not be ignored**.

### 3.5 Geopolitics and sanctions: The strategic value of in-house chips

Baidu's full-stack self-reliance demonstrated unique strategic value in the context of geopolitical sanctions. In October 2022, the U.S. Department of Commerce imposed export controls on advanced computing chips, cutting off A100/H100 supplies to China.[^9] In October 2023, controls tightened further, bringing A800/H800 under restrictions as well. (See "Geopolitics and Sanctions")

For Baidu, the existence of the Kunlun chip meant it was not entirely dependent on NVIDIA GPUs. Although the Kunlun chip still lagged behind NVIDIA's flagship products in absolute performance, having an in-house chip versus not having one was a categorical difference. While other Chinese companies fretted over GPU supply, Baidu could continue training and deploying models using the Kunlun chip.

But the Kunlun chip's challenges were also evident: **the software ecosystem was immature**. NVIDIA's CUDA ecosystem had accumulated over 15 years of developer tools, third-party libraries, and optimization experience. While the Kunlun chip's software stack was continuously improving, the gap with CUDA remained substantial. This meant Baidu's AI infrastructure advantage was more about "usability" than "optimality."

---

## IV. Rise and Fall Analysis

### Phase One: The AI pioneer's deployment (2013–2022)

**What happened**: Baidu established its deep learning research institute in 2013, open-sourced PaddlePaddle in 2016, released the Kunlun chip in 2018, and released ERNIE 1.0 in 2019. By 2022, Baidu possessed China's most complete AI technology stack.

**Why it happened**: Robin Li's foresight on AI — during a period of steady search engine business growth, he advanced the deep learning deployment. Baidu's search engine DNA (NLP, information retrieval, user intent understanding) provided a natural foundation for AI R&D.

**What it left behind**: Full-stack self-reliance as a technical moat; the ERNIE series' leading position in Chinese NLP; the PaddlePaddle framework and Kunlun chip ecosystem.

### Phase Two: The LLM explosion and the cost of going first (2023–2024)

**What happened**: ChatGPT captured global attention; Baidu rushed to release ERNIE Bot (2023-03-16) but suffered a launch stumble. ERNIE Bot was progressively integrated across Baidu's product lines, reaching over 200 million users.

**Why it happened**: Baidu's AI deployment was three years ahead of Chinese peers; the first-mover advantage was real. But the "early sprint" also brought hasty product demonstration — pre-recorded demos, stock price plunge, and damaged market confidence.

**What it left behind**: ERNIE Bot became a pioneer in the Chinese market; but the closed-source strategy and PaddlePaddle ecosystem's insularity began to show cracks.

### Phase Three: The open-source shock and strategic recalibration (2025–present)

**What happened**: DeepSeek R1's release (2025-01) posed a fundamental challenge to Baidu's closed-source strategy. Open-source models achieved closed-source model capability levels; enterprise customers' willingness to pay declined.

**Why it happened**: LLM scaling laws and the rapid development of the open-source community invalidated the assumption that "closed-source = stronger." DeepSeek proved with its MIT license that open-source models could reach GPT-4 level.

**Lingering questions**: Can Baidu defend ERNIE Bot's market position under the open-source onslaught? Can the full-stack self-reliance advantage be converted into genuine differentiation? When the position of "China's AI number one" is no longer secure, where will Baidu's AI strategy go?

---

## Appraisal

Baidu's decade in AI can be summarized in one sentence: **It was first off the starting line, but the track changed.**

When it established its deep learning research institute in 2013, the vast majority of Chinese internet companies were still in the traffic business. Baidu's foresight was genuine — Kunlun, PaddlePaddle, ERNIE — each step was two to three years ahead of its peers. But first-mover advantage is a fragile asset in technological upheaval: it depends on the assumption that "the track stays the same." When ChatGPT changed the rules of the game, when DeepSeek proved open-source models could match closed-source levels, Baidu's full-stack self-reliance and closed-source strategy became burdens instead of advantages.

Baidu's predicament is not a technical problem — the ERNIE series still leads in Chinese NLP, and the Kunlun chip demonstrated strategic value amid GPU embargoes. Baidu's predicament is an **organizational and strategic problem**: how does a company accustomed to the "search + advertising" business model find its place amid the squeeze from open-source communities and startups? ERNIE Bot's stumble was not a technical accident but a reflection of organizational culture — a cautious, control-oriented organization appeared hesitant at a moment that called for "going all in."

From Robin Li to DeepSeek's Liang Wenfeng, Baidu's story is the quintessential case study of "Chinese tech giant AI transformation." It proves one thing: **in technological upheaval, the distance between "being first" and "lasting to the end" is measured not in time, but in organizational adaptability**. Baidu had the vision, the investment, and the results — but it needs to answer a question it has thus far sidestepped: when open-source models are good enough, where is the moat of full-stack self-reliance?

---

*This biography was compiled by the Endfield Industrial Historian Team: Silence (lead writer).*

---

[^1]: Baidu, "Baidu Institute of Deep Learning Established," 2013-01. https://www.baidu.com/s?wd=百度深度学习研究院
[^2]: Sun et al., "ERNIE: Enhanced Representation through Knowledge Integration," arXiv:1904.09223, 2019-03. https://arxiv.org/abs/1904.09223
[^3]: The Paper, "Robin Li Launches China's First 'Chinese ChatGPT' — Can ERNIE Bot Compete?," 2023-03-17. https://www.thepaper.cn/newsDetail_forward_22343209
[^4]: Baidu Hong Kong (9888.HK) closing data, 2023-03-16. Share price fell from approximately HK$142 to approximately HK$133.
[^5]: Baidu, "ERNIE Bot Fully Opens," 2023-08-31. https://yiyan.baidu.com/
[^6]: Baidu Q2 2024 Earnings Call, 2024-08.
[^7]: PyTorch vs PaddlePaddle developer community comparison, based on public data including GitHub stars and Stack Overflow question counts.
[^8]: DeepSeek, "DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning," 2025-01. https://arxiv.org/abs/2501.12948
[^9]: U.S. Department of Commerce Bureau of Industry and Security (BIS), "Export Controls on Advanced Computing Chips," 2022-10-07. https://www.bis.doc.gov/
