# The Annals of Google

> Google is the inventor of the Transformer and the only company in the world with a complete AI stack spanning TPU chips, models, products, and operating systems. From the eight authors of the Transformer paper to the collective mockery of Bard's fiasco, to Gemini 3 topping LMArena — Google's decade in AI is a protracted counter-offensive of "how the inventor reclaimed the world it created."

---

## I. Overview

Google's place in the history of large language models is singular: **the Transformer architecture was born at Google Brain**, and the 2017 paper "Attention Is All You Need" changed the technological foundation of the entire industry. But Google did not capture the greatest commercial returns from its own invention — ChatGPT was first commercialized by OpenAI, and Google instead became the pursuer being pursued.

From Bard's hasty fiasco in 2023 to Gemini 2.5 Pro topping LMArena in 2025, Google took two years to complete its transformation from "laughingstock" to "acknowledged leader." Undergirding this arc was not any single algorithmic breakthrough, but Google's structural advantages across three dimensions: hardware (TPU), data (YouTube/Search), and distribution (Android/Workspace). These advantages are irreplicable by any pure model company.

---

## II. Founding and Early Years

### 2.1 Google Brain: The deep learning pioneer

Google's AI story began in 2011. The Google Brain project was initiated by Jeff Dean, Andrew Ng (Ng Wai-yeung), and Greg Corrado — using 16,000 CPU cores to train a deep neural network that automatically learned to recognize cats from YouTube videos. This experiment was not an academic breakthrough, but it was industrially significant: it proved that large-scale computing could directly improve model capabilities.[^1]

Google Brain subsequently became the core engine of AI research within Google. The acquisition of DeepMind in 2014 (for approximately $500 million) created a dual-laboratory structure within Google — Google Brain focusing on engineering and products, DeepMind focusing on fundamental research and game AI (AlphaGo, AlphaFold). This "dual-head system" brought internal competition but also planted seeds of organizational coordination challenges.

### 2.2 The Transformer paper: Eight people who changed the world

On June 12, 2017, eight authors from Google Brain and Google Research — Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit, Llion Jones, Aidan N. Gomez, Łukasz Kaiser, and Illia Polosukhin — published "Attention Is All You Need" on arXiv.[^2]

The paper's core contribution was not the discovery of the attention mechanism (which already existed), but a subtraction: completely eliminating recurrent structures (RNN/LSTM) and using only self-attention to model sequences. This design enabled fully parallel training, allowed models to be stacked deeper and larger, and paved the way for all subsequent large language models — GPT, BERT, PaLM, and Llama.

Profoundly ironic is that of the paper's eight authors, **not one remained at Google**. Ashish Vaswani and Niki Parmar co-founded Adept AI (later acquired by Amazon); Noam Shazeer founded Character.AI (later reacquired by Google); Llion Jones founded Sakana AI; Łukasz Kaiser joined OpenAI (later becoming a core member of the o1 project); Illia Polosukhin founded NEAR Protocol.[^3] Google invented the Transformer, yet failed to retain a single one of its inventors.

---

## III. Key Events

### 3.1 TPU: The path of self-reliance starting from chips

Google is the only company in the world that simultaneously develops both AI chips and large language models in-house. The TPU (Tensor Processing Unit) has iterated since 2015: TPU v1 for inference acceleration (powering AlphaGo), TPU v2/v3 for training, TPU v4 (2021) becoming the training infrastructure for the Gemini series, and TPU v5p (2023) used for training Gemini 1.0 Ultra.[^4]

The strategic significance of TPU lies in: Google is not constrained by NVIDIA GPU supply. When OpenAI and Anthropic were struggling to secure H100/A100 clusters in 2023–2024, Google could freely scale its own training compute. This advantage was even more evident in inference costs — the Gemini series' API pricing could be continually depressed because Google did not need to pay NVIDIA GPU premiums.

But the TPU ecosystem also had cracks. TPU's software stack (JAX/XLA) was not as mature as NVIDIA's CUDA ecosystem, and external developers were more accustomed to PyTorch + CUDA. This meant Google's AI infrastructure advantage manifested more in internal training and inference than in attracting external developer ecosystems.

### 3.2 The Bard fiasco (2023-02): The cost of panic

On February 6, 2023, Sundar Pichai announced Bard on Google's official blog — a conversational AI product based on LaMDA. This was one day before Microsoft's launch of Bing+ChatGPT — Google was attempting to seize attention through "going first."[^5]

Two days later, during a demo in Paris, Bard made a factual error in answering a question about the James Webb Space Telescope. A screenshot went viral on social media — Google's stock price fell 7.7% that day, erasing over $100 billion in market value.[^6]

The Bard fiasco was the most iconic humiliation in Google's AI strategy. It exposed the tension between "rapid release vs. thorough testing" — a company accustomed to the search engine culture of "thorough testing before launch" was forced into a hasty move under ChatGPT's pressure. But Bard also forced Google to make a critical decision: **abandoning the dual-head structure of Google Brain and DeepMind, merging them into Google DeepMind.**

### 3.3 The founding of Google DeepMind (2023-04): Merger and unification

In April 2023, Google officially announced the merger of Google Brain and DeepMind into **Google DeepMind**, led by DeepMind co-founder Demis Hassabis.[^7]

The immediate catalyst for this merger was the organizational efficiency problems exposed by the Bard fiasco: the two laboratories operated independently, resources were duplicated, and productization paths were fragmented. After the merger, the Gemini project became Google DeepMind's flagship — jointly developed by former Brain and DeepMind teams, unified on TPU v5p for training.

Hassabis's leadership style was starkly different from the previous dual-head system. He emphasized "research must serve products" — DeepMind had previously been known for pure fundamental research (AlphaFold, AlphaGo), but after the merger, it had to simultaneously produce deployable models. This pivot frustrated some research-oriented members, but from an organizational efficiency standpoint, the merger produced immediate results: Gemini 1.0 was released just eight months after the merger.

### 3.4 Gemini 1.0 to 3.x: From the editing controversy to LMArena dominance

**2023-12-06** — Google DeepMind released Gemini 1.0; Ultra outperformed GPT-4 on 30 of 32 benchmarks. But the release demo was exposed for editing fraud, damaging community trust (see "The Gemini Family").

**2024-02-15** — Gemini 1.5 Pro released with a 1M token context window — opening the "ultra-long context" track and forcing all competitors to follow.

**2024-12-11** — Gemini 2.0 Flash released, positioned as an "agentic era" pioneer — Google was the first to position LLMs as "agents capable of invoking tools."

**2025-03-25** — Gemini 2.5 Pro released, topping the LMArena leaderboard. From the "editing fraud" of December 2023 to the "user-voted champion" of March 2025, Google covered the path from mockery to recognition in 16 months.[^8]

**2026-05** — Gemini 3 series released, continuing the three-tier product structure of Pro (flagship) + Flash (speed) + Deep Think (deep reasoning), in continuous racing competition with GPT-5.x and Claude 4.

### 3.5 Data moats: YouTube, Search, Books

Google possesses the deepest data moat for LLM training: YouTube (video data, the world's largest video platform), Google Search (web index covering the vast majority of the internet's pages), and Google Books (billions of pages of scanned books). These three data sources are irreplicable by OpenAI and Anthropic — they are byproducts of Google's twenty years of internet infrastructure accumulation.

Gemini's "native multimodality" — trained from the design stage on joint text, image, audio, and video data — was only possible because of these exclusive data sources. Even if competitors matched Google algorithmically, they would struggle to rival the breadth and diversity of its training data.

---

## IV. Rise and Fall Analysis

### Phase One: The inventor's advantage (2011–2020)

**What happened**: Google Brain and DeepMind advanced the deep learning frontier in parallel; the Transformer paper, BERT, TPU, AlphaFold, and other landmark achievements all emerged from this period.

**Why it happened**: Google's search and advertising businesses provided ample financial support; an academically free organizational culture encouraged fundamental research; in-house TPU development gave Google a computing advantage.

**What it left behind**: The Transformer architecture became the entire industry's technological foundation; TPU became Google's hardware moat; but the "inventor's advantage" also bred a certain inertia — Google was better at publishing papers than at rapidly productizing.

### Phase Two: Caught off guard by ChatGPT (2022–2023)

**What happened**: ChatGPT (2022-11) captured public attention; Google hastily released Bard (2023-02) but suffered a fiasco; was forced to merge Brain and DeepMind.

**Why it happened**: Google's productization cadence was fundamentally different from OpenAI's — Google was accustomed to the "search engine style" of thorough testing before launch, while OpenAI used "research previews" to iterate rapidly. Google's internal "dual-head system" led to resource fragmentation and slow decision-making.

**What it left behind**: The Bard fiasco became the most iconic humiliation in Google's AI history, but also became a catalyst for organizational transformation — directly leading to the founding of Google DeepMind.

### Phase Three: The structural counter-offensive (2024–present)

**What happened**: The Gemini series iterated from 1.0's editing controversy to 2.5 Pro's LMArena dominance; ultra-long context, native multimodality, and agentic positioning became differentiating advantages; TPU in-house development continued iterating.

**Why it happened**: Google's structural advantages — TPU, data, distribution — gradually came into play in long-term competition. Gemini did not need to be the strongest in every dimension; it only needed to be unrivaled on the product of "capability × cost × distribution."

**Lingering questions**: Can Google maintain its lead in reasoning models (Deep Think)? Will OpenAI's GPT-5.x and Anthropic's Claude 4 pull ahead again on core capabilities? Can Google's "full-stack self-reliance" advantage be converted into genuine market share?

---

## Appraisal

Google's decade in AI can be summarized in one sentence: **It invented the tool that changed the world, but failed to understand its product value in time.**

All eight authors of the Transformer paper left Google — this was not accidental. It exposed a fissure in Google's organizational culture: the tension between academic freedom and product speed. Google encouraged publishing papers, but after publication, the pace of productization was far slower than that of a 50-person startup. ChatGPT was not technically stronger than Google's models — GPT-3.5's base capability was inferior to PaLM's — but it put existing technology into a chat box and gained a million users in five days. Google had stronger models, but it did not have a product called "ChatGPT."

But Google also proved one thing: **infrastructure is the greatest friend of time**. TPU, YouTube data, Android distribution — assets that take more than a decade to build become increasingly important in long-term competition. As model capabilities converge toward homogeneity (GPT-5.x, Claude 4, and Gemini 3.x show diminishing gaps on core benchmarks), competition shifts from "whose model is stronger" to "whose system is more complete." On this dimension, Google remains the only company in the world with a complete AI stack spanning chips, models, products, and operating systems.

The humiliation of Bard's fiasco and the glory of Gemini's dominance occurred within the same company — this is not a contradiction, but two sides of the same force: an organization accustomed to deep thinking stumbles when forced to accelerate, but rises after falling because the foundation beneath its feet is thicker than anyone else's.

---

*This biography was compiled by the Endfield Industrial Historian Team: Zhuang Fangyi (lead writer).*

---

[^1]: Le et al., "Building High-level Features Using Large Scale Unsupervised Learning," arXiv:1112.6209, 2012. https://arxiv.org/abs/1112.6209
[^2]: Vaswani et al., "Attention Is All You Need," arXiv:1706.03762, 2017-06-12. https://arxiv.org/abs/1706.03762
[^3]: Cade Metz / The New York Times, "The A.I. Revolution Is Coming. Not Everyone Is Convinced.," 2023-05-01. (Comprehensive reporting on the whereabouts of the Transformer paper's eight authors)
[^4]: Google Cloud Blog, "Cloud TPU v5p and AI Hypercomputer," 2023-12-06. https://cloud.google.com/blog/products/ai-machine-learning/introducing-cloud-tpu-v5e-and-a3-gpus
[^5]: Sundar Pichai / Google Blog, "An important next step on our AI journey," 2023-02-06. https://blog.google/technology/ai/bard-google-ai-search-updates/
[^6]: The Verge, "Google's AI chatbot Bard makes factual error in first demo," 2023-02-08. https://www.theverge.com/2023/2/8/23590864/google-ai-chatbot-bard-mistake-error-exoplanet-demo
[^7]: Google Blog, "Google DeepMind: Bringing together two world-class AI teams," 2023-04-20. https://blog.google/technology/ai/google-deepmind-google-brain/ (original URL expired; archived alternative link provided)
[^8]: Google DeepMind Blog, "Gemini 2.5: Our most intelligent AI model," 2025-03-25. https://blog.google/technology/google-deepmind/gemini-model-thinking-updates-march-2025/
