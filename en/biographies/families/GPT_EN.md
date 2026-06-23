# GPT Family

> The GPT series is OpenAI's general-purpose language model family developed since 2018. From 117M to 1.76T (rumored), from learning to complete a single word to surpassing 90% of bar exam takers — the GPT iteration history chronicles the entire process of large models transforming from a research idea into a tool used daily by billions.

---

## I. Overview

GPT (Generative Pre-trained Transformer) series defined each generation of technical paradigms in the large model era. It went through four stages: **pre-training** (GPT-1), **scale emergence** (GPT-2/3), **alignment** (InstructGPT/ChatGPT), and **reasoning** (o1/3).

GPT's evolution has a clear main thread: not dramatic architectural changes — from GPT-1 to GPT-4, the core architecture remained the Transformer decoder. What changed were three things: **parameter scale**, **training data volume**, and **training methods** (from pure language models to RLHF to reasoning enhancement).

---

## II. Generational Evolution

| Generation | Release Date | Parameter Scale | Core Innovation | License |
|------------|--------------|-----------------|-----------------|---------|
| GPT-1 | 2018-06 | 117M | Generative pre-training + task fine-tuning | Open-source |
| GPT-2 | 2019-02 | 1.5B | Zero-shot capability emergence | Phased open-source |
| GPT-3 | 2020-06 | 175B | Few-shot emergence, API-only | Closed-source |
| GPT-3.5 / ChatGPT | 2022-11 | ~175B (disputed) | RLHF alignment, conversational productization | Closed-source |
| GPT-4 | 2023-03 | Undisclosed (rumored ~1.76T MoE) | Multimodal + reasoning leap | Closed-source |
| GPT-4o | 2024-05 | Undisclosed | Native multimodal, real-time dialogue | Closed-source |
| GPT-4.5 | 2025-02 | Undisclosed | End of non-reasoning models | Closed-source |
| o1 | 2024-09 | Undisclosed | Reasoning model, hidden chain-of-thought | Closed-source |
| GPT-5 | Expected 2025-2026 | Undisclosed | Unified GPT + o series | Closed-source |

### 2.1 GPT-1: The Opening Stroke of Generative Pre-Training

In June 2018, OpenAI published a paper titled "Improving Language Understanding by Generative Pre-Training." 117M parameters, 12 Transformer decoder layers, trained on BooksCorpus (7,000 unpublished books).[^1]

GPT-1's core formula was simple enough to be just two steps: pre-train on large-scale text with language model objective → add a linear layer and fine-tune on specific tasks. Achieved SOTA on 9 of 12 benchmarks — not particularly impressive under the shadows of LSTM and BERT, but it was the definer of the "pre-training" stage in GPT family's four stages. GPT-1 proved that Transformer decoders are better at generation than encoders — this intuition ultimately changed the direction of the entire industry.

### 2.2 GPT-2: Too Dangerous to Release All at Once

In February 2019, parameters jumped from 117M to 1.5B. GPT-2's zero-shot ability — doing translation, summarization, question answering without any fine-tuning, just through prompts — was something no one had seen before.[^2]

But GPT-2 is remembered not for technology, but for a release decision: OpenAI claimed the model was "too dangerous" and refused to release the full version at once, instead releasing it in four phases over nine months. This "phased release" controversy pushed AI safety from academic discussion into the public eye — and transformed OpenAI from a low-key research lab into the focus of global tech media.

In retrospect, GPT-2's danger was overestimated — 1.5B parameters' actual generation quality wasn't sufficient to support large-scale disinformation campaigns. But "OpenAI saying their own thing is too dangerous" had already imprinted on public consciousness. This narrative pattern would be repeatedly used over the next five years — from GPT-4's system card to o1's hidden chain-of-thought — the controversy itself became the best advertisement.

### 2.3 GPT-3: Scale Emergence and the Birth of API

In June 2020, 175B parameters — GPT-3's scale jumped 100 times compared to GPT-2. This 72-page paper demonstrated a phenomenon that had previously only existed in theory: when a model is large enough, it learns translation, arithmetic, programming, reasoning on its own — without any fine-tuning.[^3]

Few-shot was GPT-3's signature capability: given 10-100 examples, the model directly completes the task. On TriviaQA, GPT-3 few-shot surpassed fine-tuned SOTA. In arithmetic, the 175B model could perform three-digit addition and subtraction — the 125M model couldn't do this at all. This was the empirical pillar of the "emergence" concept: abilities don't grow linearly but suddenly appear after crossing a threshold.

GPT-3 was also the decisive turning point in OpenAI's business model: **no longer open-sourcing weights, only providing API**. The reason was to monitor and limit misuse. Critics said this violated the "Open" commitment. Supporters said it was the only sustainable safety model. Right or wrong, API-only became the standard mode for subsequent closed-source large models.

### 2.4 GPT-3.5 / ChatGPT: From API to Chat Box

In early 2022, OpenAI applied InstructGPT's RLHF method to GPT-3, creating GPT-3.5. It learned to "follow instructions" — no longer auto-completing the next word, but doing what you asked. This was a critical step from "model" to "assistant."[^4]

On November 30, 2022, OpenAI put GPT-3.5 into a chat box. ChatGPT gained 1 million users in five days, surpassing 100 million in two months — the fastest-growing consumer product in history.

ChatGPT's technology wasn't new — GPT-3.5 had been running in the API for months. What was new was the product form: chat box. New business model: free use + $20/month Plus subscription. New social impact: AI went from a professional term to a public verb.

### 2.5 GPT-4: Parameter Count Becomes a Secret

---

### Commentary

The GPT family's history is the history of large models itself. Each generation defined the paradigm of its era: GPT-1 defined pre-training, GPT-2 defined scaling, GPT-3 defined emergence, ChatGPT defined alignment, GPT-4 defined multimodality, and o1 defined reasoning. The technical details change, but the pattern remains: make it bigger, train it longer, align it better.

What's remarkable is how consistently OpenAI has been right about the big bets. Every major decision — from decoder-only architecture to API-only distribution to RLHF alignment — was controversial at the time and vindicated by history. This track record suggests something deeper than luck: a genuine understanding of where the technology is heading.

---

*This article was compiled by the Endfield Industries AI Historian Team.*

---

[^1]: Radford et al., "Improving Language Understanding by Generative Pre-Training", 2018.
[^2]: Radford et al., "Language Models are Unsupervised Multitask Learners", 2019.
[^3]: Brown et al., "Language Models are Few-Shot Learners", 2020.
[^4]: Ouyang et al., "Training language models to follow instructions with human feedback", 2022.