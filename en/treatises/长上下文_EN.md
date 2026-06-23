# Treatise: Long-Context Technology

> The context window of a large model determines how much it can "see" at once. From GPT-3's 2,048 tokens to Gemini 1.5 Pro's 1 million tokens, context length expanded nearly 500-fold in four years — this was not a quantitative change but a qualitative one. It shifted the boundary of "what tasks can be entrusted to a large model": from answering a paragraph, to reading an entire book, analyzing an entire codebase, or understanding hundreds of pages of legal contracts. Along this evolutionary path, technologies like RoPE, YaRN, Ring Attention, and MLA relayed to solve one engineering and algorithmic bottleneck after another. What follows is the technical history of how large models learned to "read more at once."

---

## I. Overview

The context window is the number of tokens a large language model can process in a single inference pass. It is both the model's memory capacity and the information channel between the model and the user — all user inputs, system instructions, conversation history, and reference documents must fit within this window.

The size of the context window directly determines the types of tasks a model can perform:

- **2K tokens** (GPT-3, 2020): Can handle only a few paragraphs; suitable for short conversations and simple Q&A.
- **8K–32K tokens** (GPT-4, 2023): Can handle a medium-length document; suitable for document analysis and code understanding.
- **100K–200K tokens** (Claude 2/2.1, 2023): Can handle hundreds of pages; suitable for long-form reading and legal analysis.
- **1M–2M tokens** (Gemini 1.5 Pro, 2024): Can handle an entire book or an entire codebase; suitable for large-scale knowledge retrieval and multi-document reasoning.

Extending context length is not simply "increasing a number" — it involves a cascade of technical challenges: the extrapolation ability of positional encodings, the quadratic complexity of attention computation, the VRAM consumption of KV Cache, and the problem of information being "lost in the middle" of long texts.

---

## II. The Evolution of Positional Encoding: From Sinusoidal to Rotary

The core computation of the Transformer — self-attention — does not inherently contain positional information. Q, K, and V are all linearly projected from a token's semantic representation; without injecting a positional signal, the model cannot distinguish "the 1st word" from "the 100th word." Positional Encoding was introduced to solve this problem.

### 2.1 Sinusoidal Positional Encoding: The Transformer's Original Scheme

The 2017 Transformer paper used **sinusoidal positional encoding**: generating position vectors from a set of sine and cosine functions at different frequencies, added to the token embeddings.[^1] This scheme was simple and required no trainable parameters, but had a critical weakness: **poor extrapolation**. The model only encountered positions up to a certain length during training; at inference time, if the sequence exceeded the training length, positional encoding values went beyond the model's seen range, and performance degraded sharply.

### 2.2 RoPE: Rotary Position Embedding

In 2021, Su Jianlin proposed **RoPE (Rotary Position Embedding)**.[^2] RoPE's core idea was: instead of "adding" positional encodings to embeddings, use rotation matrices to "multiply" them onto Q and K — making the inner product between each pair of Q and K naturally depend on their relative position.

RoPE's advantages:

1. **Relative position sensitivity**: Attention scores depend only on the distance between two tokens, not on absolute position.
2. **Compatibility with linear attention**: Rotation preserves vector norms and does not alter the attention computation structure.
3. **Good extrapolation**: In theory, RoPE generalizes reasonably to relative positions not seen during training.

RoPE quickly became the standard positional encoding for open-source models — LLaMA, Mistral, Qwen, and DeepSeek series all adopted RoPE. It provided the foundation for subsequent long-context extensions.

But RoPE's extrapolation ability is not unlimited. When inference length far exceeds training length (e.g., training at 4K, inferring at 128K), RoPE's rotation angles go beyond the training distribution, causing attention scores to become erratic — the model starts to "get confused."

### 2.3 YaRN: Generalizing RoPE to Longer Sequences

**In 2023**, Peng et al. proposed **YaRN (Yet another RoPE extensioN)**, solving RoPE's extrapolation problem on long sequences.[^3]

YaRN's core observation: RoPE's rotation frequencies can be decomposed into high-frequency and low-frequency components — high-frequency components encode local positional relationships (distances between adjacent tokens), while low-frequency components encode global positional relationships (distances between distant tokens). High-frequency components need no modification, but low-frequency components "overflow" beyond the training length — YaRN corrects this through frequency scaling (interpolating the rotation angles of low-frequency components).

YaRN's effect: **a model trained at 4K length can maintain good performance at 128K or even longer contexts through YaRN** — requiring only minimal fine-tuning (a few hundred steps) to complete length extrapolation. This made "short-context training + long-context inference" a viable technical route, dramatically reducing the training cost of long-context models.

---

## III. The Efficiency Bottleneck of Attention Computation

Positional encoding solved the problem of "whether the model can understand long sequences," but another bottleneck was more practical: **the complexity of attention computation is O(N²)**.

Standard self-attention requires computing attention scores between every pair of tokens — for a sequence of length N, an N×N attention matrix must be computed. When N=4,096, this matrix has 16 million elements; when N=128K, over 16 billion. This is not just a compute problem but a memory problem — the attention matrix must reside entirely in GPU VRAM.

### 3.1 FlashAttention: A Memory Revolution at the Algorithmic Level

**FlashAttention** (Tri Dao et al., 2022) used tiling and an online softmax algorithm to avoid writing the full attention matrix into GPU HBM (High Bandwidth Memory), reducing attention memory usage from O(N²) to O(N).[^4] FlashAttention-2 (July 2023) further optimized parallelism, improving performance by approximately another 2x.[^5]

FlashAttention's significance was not just "faster" — it made long-context inference feasible in engineering. Without FlashAttention, 128K-context inference would require more VRAM than a single GPU could provide; with FlashAttention, long-context inference became achievable on consumer-grade GPUs.

(For FlashAttention's complete technical story, see "The FlashAttention Biographies." For its role in inference optimization, see "Treatise: Inference Optimization.")

### 3.2 Ring Attention: Distributed Long-Context

When context length extends further to 1M tokens, even with FlashAttention, a single GPU's VRAM is still insufficient. **Ring Attention** (2023, Liu et al.) proposed a distributed attention computation scheme: splitting the long sequence into multiple chunks, distributing them across multiple GPUs, with each GPU computing attention between its own Q and the KV on other GPUs — passing KV blocks between GPUs via ring communication.[^6]

Ring Attention's key property: **communication and computation can overlap** — while one GPU is receiving the next KV block, it can simultaneously compute attention for the current block. This makes Ring Attention's efficiency approach theoretical limits: processing a sequence of length N across P GPUs, each GPU's memory requirement drops to N/P, while total computation time barely increases.

Ring Attention was one of the key technologies enabling Google Gemini 1.5 Pro's 1M token context.[^7]

### 3.3 Sliding Window Attention

**Sliding Window Attention (SWA)** is another approach to reducing attention complexity: each token attends only to other tokens within a fixed window size (e.g., 4,096 tokens) around it, rather than all history.[^8]

SWA's advantage is simplicity and efficiency — complexity drops from O(N²) to O(N×W) (where W is the window size), with no need for additional training tricks. Mistral 7B (2023-09) was the first mainstream open-source model to adopt SWA.[^8]

But SWA's limitations are also clear: it essentially sacrifices "distant information" for efficiency. Historical tokens beyond the window receive zero attention — for tasks requiring global understanding (e.g., "summarize how the first three pages and last three pages of this 100-page report are related"), SWA may miss critical information.

### 3.4 MLA: DeepSeek's KV Cache Revolution

**Multi-head Latent Attention (MLA)** was proposed by DeepSeek in the V2 model (2024-05) and is the most original architectural innovation in long-context inference optimization.[^9]

MLA's core approach differs from the methods above — it does not modify the computation scope of attention, but compresses the KV Cache. Standard attention requires caching the full Key and Value vectors for every token; MLA projects KV into a low-dimensional latent space, caches only the low-dimensional representation, and reconstructs it during computation. This compresses the KV Cache to 5%–10% of its original size, dramatically reducing the VRAM requirements for long-context inference.[^9]

(For MLA's complete technical analysis, see "Treatise: Inference Optimization" §2.2.)

---

## IV. The Context Length Arms Race (2023–2025)

Technical breakthroughs drove the context window arms race. Key milestones:

| Date | Model/Product | Context Window | Significance |
|------|--------------|----------------|-------------|
| 2020-06 | GPT-3 | 2,048 tokens | The founder |
| 2023-03 | GPT-4 | 8K / 32K tokens | First to offer two context options |
| 2023-07 | Claude 2 | 100K tokens | First commercial 100K model[^10] |
| 2023-11 | GPT-4 Turbo | 128K tokens | OpenAI matches long-context competition |
| 2023-11 | Claude 2.1 | 200K tokens | Anthropic takes the lead again[^11] |
| 2024-02 | Gemini 1.5 Pro | 1M tokens (10M in testing) | Long context enters the million era[^7] |
| 2024-03 | Claude 3 | 200K tokens | Standard context maintained at 200K |
| 2024-10 | Claude 3.5 Sonnet (v2) | 200K tokens | Long context + coding ability combined |
| 2025-01 | DeepSeek-R1 | 128K tokens | Reasoning models also attend to long context |

**Gemini 1.5 Pro** (2024-02) was the highlight of this arms race.[^7] It pushed the context window to 1M tokens — approximately 700,000 words or the volume of several novels. Google's technical report demonstrated "Needle-in-a-Haystack" test results at 10M token context: even in 10 million tokens of context, the model could still accurately locate specific information hidden in the middle.

Google's technical breakthrough was built on MoE (Mixture-of-Experts) architecture and Ring Attention. A 1M token context involves enormous computation per inference pass, but MoE's sparse activation mechanism — where each token activates only a subset of experts — effectively controlled computation costs.

---

## V. Kimi: Long Context as Product Differentiation in the Chinese Market

In the Chinese internet market, long context became an unexpected product differentiator.

**March 2024**: Moonshot AI released **Kimi Intelligent Assistant**, featuring "2 million characters of ultra-long context" — approximately 2 million Chinese characters, equivalent to about 2M tokens.[^12] Kimi's product positioning was "let AI read an entire book in one go" — users could upload a complete novel, a complete financial report, or even an entire codebase, and Kimi would understand all of it at once.

Kimi's success in the Chinese market reflected an interesting market logic: **long context is technically "nice to have," but in product terms it is a "killer feature."** For ordinary users, "AI can read an entire book" is more tangible than "AI scores 2 points higher on MMLU." Kimi turned a technical parameter into a product selling point — one of the most commercially astute moves in the long-context arms race.

Kimi's technical foundation drew partly from Moonshot AI's engineering optimizations for long-context training and inference, including chunked attention, KV Cache compression, and RoPE extrapolation extensions.[^12] But Kimi's more important contribution was **market education**: it allowed Chinese internet users to viscerally understand for the first time what "long context" actually means.

---

## VI. Long Context vs. RAG: Substitution or Complement?

The expansion of context windows sparked an ongoing debate: **if a model can read all documents at once, is RAG (Retrieval-Augmented Generation) still needed?**

RAG's core logic: a model's knowledge is static (in its parameters), and real-time retrieval of external knowledge is needed to supplement it. When the context window was only 4K tokens, the only viable approach was to slice a 100-page document into fragments, use vector retrieval to find the most relevant passages, and stitch them into the context. But when the context window reaches 1M tokens, stuffing the entire document directly into context becomes possible — no slicing, no retrieval, no worry about losing cross-paragraph reasoning.

Anthropic explicitly drew this comparison in Claude 2's release blog: "For complex questions, [long context] is likely to be much better than approaches based on vector search."[^10]

But in practice, long context cannot fully replace RAG. Three reasons:

1. **Cost**: A 1M token context means each inference could cost several dollars — for high-frequency scenarios like customer service, search, and knowledge bases, this cost is unacceptable. The most relevant passages retrieved by RAG are typically only a few thousand tokens, two orders of magnitude cheaper.
2. **Knowledge freshness**: Long context loads user-provided documents; RAG can retrieve the latest information in real time. A database updated daily is not suitable for stuffing the entire database into context for every query.
3. **Information localization**: Although Gemini 1.5 Pro performed excellently in "Needle-in-a-Haystack" tests, within a 1M token context, the model's attention to information in the middle portion is still lower than at the beginning and end — this is known as the "Lost in the Middle" problem.[^13] RAG's retrieval step naturally avoids this issue.

Therefore, a more accurate assessment is: **long context and RAG are complementary, not substitutive.** Long context suits "one-shot processing of large document volumes" (legal analysis, code understanding, book Q&A), while RAG suits "high-frequency, low-cost, real-time update" scenarios (customer service, search, knowledge bases). In practice, the most powerful systems often combine both: using RAG to retrieve relevant documents from a massive knowledge base, then using the long context window to pass both the retrieved results and the user's question to the model for processing.

(For RAG's complete technical story, see "The RAG Biographies.")

---

## VII. The Technical Ceiling of Context Length

Although context windows have expanded to 1M tokens, several technical challenges remain unsolved:

**Lost in the Middle**: Research by Stanford and UC Berkeley in 2023 found that even with a sufficiently large context window, the model's ability to retrieve and reason over information in the middle of the context was significantly weaker than at the beginning and end.[^13] This means "fitting it all in" does not equal "using it all well" — when a model processes 1M tokens of context, not all tokens are treated equally.

**Inference cost**: The longer the context, the greater the computation and memory consumption. Although FlashAttention and MLA have significantly mitigated this, the per-inference cost of 1M token context remains far higher than 4K tokens. For scenarios requiring real-time responses, the latency of long context is also a practical issue.

**Training data scarcity**: Training a model that truly "understands" 1M token context requires massive amounts of ultra-long text training data — but most text on the internet is far shorter. While technical documents, legal contracts, books, and other long text sources exist, quality is uneven, and copyright and privacy issues arise.

**Evaluation methodology gaps**: Current long-context evaluations (such as "Needle-in-a-Haystack") primarily test information retrieval ability — whether the model can find specific information in long text. But for more important long-context capabilities — cross-paragraph reasoning, global understanding, multi-document correlation — mature evaluation benchmarks are lacking.

---

## Commentary

The technical evolution of long context reveals a recurring pattern in large model development: **first break through the limit, then optimize efficiency.**

GPT-3 had only a 2K context window — not because researchers didn't want longer context, but because the O(N²) complexity of attention was a hard constraint at the time. RoPE provided the possibility of positional encoding extrapolation, FlashAttention shattered the memory bottleneck of attention, YaRN enabled short training lengths to generalize to long inference lengths, and Ring Attention used a distributed scheme to break through the VRAM limits of a single GPU — each technical breakthrough extended the feasible boundary of context length.

But "fitting more in" does not equal "understanding more." The Lost in the Middle problem reminds us: context length is a "capacity" metric, not a "capability" metric. A model that can hold 1M tokens but is blind to the middle 90% is no different in practical ability from one that can hold only 100K tokens.

The ultimate value of long context lies not in "longer" but in "more complete" — enabling a model to establish causal chains spanning tens of thousands of tokens, compare contradictions across multiple documents, and synthesize hundreds of pages of information into a judgment, all within a single inference pass. Current models can already "fit in" a great deal, but there is still a considerable distance between that and truly "understanding" what has been fitted in.

---

*Compiled by the Endfield Industrial Historian Team: Silence (Lead Writer).*

---

[^1]: Vaswani et al., "Attention Is All You Need", NeurIPS 2017. arXiv:1706.03762. https://arxiv.org/abs/1706.03762
[^2]: Su et al., "RoFormer: Enhanced Transformer with Rotary Position Embedding", arXiv:2104.09864, 2021. https://arxiv.org/abs/2104.09864
[^3]: Peng et al., "YaRN: Efficient Context Window Extension of Large Language Models", arXiv:2309.00071, 2023. https://arxiv.org/abs/2309.00071
[^4]: Dao et al., "FlashAttention: Fast and Memory-Efficient Exact Attention with IO-Awareness", NeurIPS 2022. arXiv:2205.14135. https://arxiv.org/abs/2205.14135
[^5]: Dao, "FlashAttention-2: Faster Attention with Better Parallelism and Work Partitioning", arXiv:2307.08691, 2023. https://arxiv.org/abs/2307.08691
[^6]: Liu et al., "Ring Attention with Blockwise Transformers for Near-Infinite Context", arXiv:2310.01889, 2023. https://arxiv.org/abs/2310.01889
[^7]: Google, "Gemini 1.5: Unlocking multimodal understanding across millions of tokens of context", 2024-02-15. https://arxiv.org/abs/2403.05530
[^8]: Jiang et al., "Mistral 7B", arXiv:2310.06825, 2023. https://arxiv.org/abs/2310.06825
[^9]: DeepSeek-AI, "DeepSeek-V2: A Strong, Economical, and Efficient Mixture-of-Experts Language Model", arXiv:2405.04434, 2024. https://arxiv.org/abs/2405.04434
[^10]: Anthropic, "Introducing 100K Context Windows", 2023-05-11. https://www.anthropic.com/news/100k-context-windows
[^11]: Anthropic, "Claude 2.1", 2023-11. https://www.anthropic.com/news/claude-2-1
[^12]: Moonshot AI, "Kimi Intelligent Assistant", 2024. https://kimi.moonshot.cn/
[^13]: Liu et al., "Lost in the Middle: How Language Models Use Long Contexts", arXiv:2307.03172, 2023. https://arxiv.org/abs/2307.03172
