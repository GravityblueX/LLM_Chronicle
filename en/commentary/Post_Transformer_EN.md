# The Post-Transformer Architecture Debate

> A single paper in 2017 changed the direction of all deep learning — "Attention Is All You Need" made Transformer the de facto standard for sequence modeling. Nine years later, Mamba, RWKV, xLSTM, and Jamba have taken turns on stage, trying to prove that attention is not all you need. But as of mid-2026, Transformer still firmly holds the throne. What this "post-Transformer" debate reveals is not who is stronger, but why one architecture is so difficult to replace.

---

## I. The shadow of O(n²)

The core mechanism of Transformer — self-attention — has a mathematically inescapable cost: every token must compute attention weights with every other token in the sequence, yielding a complexity of O(n²) (see *The Attention Chronicle* and *The Transformer Chronicle*).[^1]

This quadratic complexity is inconsequential for short sequences. For sentences of a few hundred tokens, O(n²) computation is trivial on modern GPUs. But when sequence lengths grow to thousands, tens of thousands, hundreds of thousands — long documents, genomic sequences, high-resolution images, long videos — O(n²) becomes a hard barrier. FlashAttention alleviated the memory bottleneck by optimizing GPU kernel I/O paths, but did not change the complexity itself.[^2]

This O(n²) shadow gave rise to an entire research direction of "alternative architectures." Researchers' basic thesis was: if an O(n) sequence modeling method could be found that maintains Transformer's modeling quality, it would yield decisive efficiency advantages in long-sequence scenarios.

Four approaches emerged in 2023–2024: State Space Models (Mamba), recurrent networks (RWKV), circular network revival (xLSTM), and hybrid architectures (Jamba). Their starting points differed, but they all pointed to the same question: **Is Transformer's attention mechanism the only correct answer for sequence modeling?**

---

## II. Mamba: Selective state spaces

The first challenger came from State Space Models (SSMs).

The theoretical foundation of SSMs is continuous-time dynamical systems for modeling sequences — treating the input as a driving signal to a dynamical system and the output as the system's state response. In January 2022, Albert Gu, then a doctoral researcher at CMU, published S4 (Structured State Spaces for Sequence Modeling), which solved the long-range dependency problem using special matrix initialization (HiPPO). S4's performance on ultra-long-sequence tasks like Path-X (sequence length 16,384) stunned the field — on these tasks, Transformer simply could not run due to O(n²) memory requirements.[^3]

But S4 had a critical flaw: **time-invariance.** Its state transition matrix did not vary with input — regardless of the token encountered, the system used the same set of parameters to transition states. This left S4 consistently lagging behind Transformer in language modeling tasks that required "selectively" attending to specific information.

On December 1, 2023, Albert Gu and Tri Dao (the author of FlashAttention) released **Mamba**, formally solving this problem.[^4] Mamba's core innovation was to make S4's fixed parameters **input-dependent**: B, C, and the timestep Δ all became functions of the current input x. In plain terms, the model could decide, based on the current token's content, "how much past information to retain and how much to ignore" — this is what "selective" means.

Gu and Dao called this input-dependent SSM "S6." Once parameters became input-dependent, S4's efficient FFT-based training method was no longer applicable. Tri Dao designed a **hardware-aware parallel scan algorithm** that completed the core computation in the GPU's SRAM — the philosophy was entirely consistent with FlashAttention: don't change the math, make the computation adapt to the hardware's actual characteristics.

The results were striking: Mamba matched Transformer of equivalent scale in language modeling, ran approximately 5× faster in inference, and the advantage grew with sequence length.[^4] Mamba was rapidly extended to vision (Vision Mamba), multimodal, genomics, and other domains.

In May 2024, Gu and Dao published **Mamba-2**, with a paper title that said it all: *Transformers are SSMs*.[^5] It proved that SSMs and attention are not two mutually exclusive methods but two faces of the same mathematical framework — Structured State Space Duality (SSD). Mamba-2 maintained linear complexity while being 2–8× faster than Mamba-1 and could leverage tensor core acceleration.

---

## III. RWKV, xLSTM, and Jamba: Three alternative routes

Mamba was not the only challenger. Three other routes each offered a different answer to "what can replace attention."

### 3.1 RWKV: Back to RNN

RWKV was initiated by independent researcher Bo Peng.[^6] Its core idea is to replace Transformer's attention mechanism with an RNN-like recurrence formula — trainable in parallel like Transformer, but generating sequentially during inference like an RNN, with O(n) complexity.

RWKV's key design is the "WKV" (Weighted Key-Value) mechanism — a special weighting approach that replaces softmax attention, satisfying the conditions for a recurrence structure. This allows RWKV to leverage GPU parallelism for training while maintaining constant memory and compute overhead during inference — unlike Transformer, which requires KV cache that grows with context length.

RWKV has gone through multiple version iterations: RWKV-4 (2023-04, paper published at EMNLP 2023), RWKV-5 (Eagle, 2024), RWKV-6 (Finch, 2024).[^6] Bo Peng established the RWKV Foundation to drive community development. As of mid-2026, RWKV is one of the most community-active projects among non-Transformer approaches — but it similarly lacks large-scale frontier performance validation.

### 3.2 xLSTM: The revival of a classical recurrent network

In May 2024, the original inventor of LSTM, **Sepp Hochreiter** et al., published **xLSTM (Extended Long Short-Term Memory)**.[^7]

LSTM dominated sequence modeling for thirty years before Transformer appeared. Its gating mechanism — forget gate, input gate, output gate — was once the standard solution for handling long-range dependencies. But LSTM had two structural disadvantages: inability to parallelize training (due to recurrence dependencies) and gradual information attenuation over long sequences.

xLSTM attempts to solve both problems with modern techniques. It introduces two key innovations:

- **Exponential Gating**: Using exponential functions instead of traditional sigmoid gating, expanding the dynamic range of gating signals for more fine-grained control of information flow.
- **Matrix Memory**: Using parallelizable matrix operations instead of traditional scalar state transitions, improving the model's expressiveness and parallelism.

xLSTM represents a "back to the starting point" approach — not inventing a new architecture from scratch, but using decade-later technology to fix a classical architecture that was forgotten yet still holds potential. But xLSTM's influence currently remains mainly in academia and has not yet formed the community ecosystem seen with Mamba or RWKV.

### 3.3 Jamba: The hybrid compromise

In March 2024, AI21 Labs released **Jamba** — a hybrid architecture with SSM layers and Transformer attention layers **alternately stacked.**[^8] Approximately 52B total parameters, ~12B active parameters, using a MoE structure.

Jamba's design philosophy is not "replace Transformer" but "use attention where attention is necessary, and replace it with SSM where it is not." Specifically, most layers in the model are Mamba-style SSM layers (handling efficient sequence processing), while a small number of layers are standard Transformer attention layers (handling precise global information retrieval). This alternating structure allows Jamba to support a 256K context window while achieving significantly higher inference efficiency than a pure Transformer model of comparable size.

Jamba points to a possible future direction: **not SSM replacing attention, but SSM handling most of the computation while attention handles the critical layers requiring precise retrieval.** This compromise may be closer to the eventual practical solution than any purist approach.

---

## IV. Why Transformer endures

As of mid-2026, frontier large language models — GPT-4/o, Claude, Gemini, Llama 3, Qwen 2.5/3, DeepSeek-V3/R1 — are still based on Transformer or its variants. No non-Transformer architecture has fully replaced Transformer at the largest scale of general language modeling.[^9]

The reasons are multi-layered.

**First, attention has a mathematically unique advantage.** Every token can directly "see" any other token in the sequence, regardless of distance. This O(1) path length — any two positions connected in just one attention layer — is something RNNs, SSMs, and LSTMs cannot achieve. While SSM state propagation can theoretically handle long-range dependencies, information must pass through every intermediate state transition step, potentially creating information bottlenecks in deep networks. Attention's "any-to-any direct connection" is a fundamental capability difference — especially for tasks requiring precise retrieval (such as "what did the second sentence of paragraph 3 say").

**Second, the missing evidence for scaling laws.** Transformer's scaling law has been repeatedly validated — from Kaplan 2020 to Chinchilla 2022, from GPT-3 to GPT-4, scaling law predictions on Transformer have been empirically confirmed time and again.[^10] But Mamba's scaling law still lacks large-scale empirical evidence — no one knows what happens when you scale Mamba to hundreds of billions of parameters. When investing tens or hundreds of millions of dollars to train a frontier model, choosing an architecture with abundant scaling evidence versus one that is theoretically promising but lacks large-scale validation — any rational decision-maker would choose the former.

**Third, engineering inertia.** Transformer's training and inference infrastructure is extremely mature. From native support in PyTorch and JAX, to distributed training frameworks (Megatron-LM, DeepSpeed, FSDP), to inference optimization (FlashAttention, vLLM, TensorRT-LLM), to GPU kernel-level tensor core acceleration — all of this engineering investment has been built around Transformer's computational pattern. Switching architectures means rebuilding the entire engineering chain. This is not a question of "better or worse" — it is "whether it's worth spending two years rebuilding everything that already exists."

**Fourth, "good enough" optimizations keep emerging.** Transformer's O(n²) bottleneck is real, but the Transformer camp continues to self-improve. FlashAttention reduced memory usage from O(n²) to O(n). MLA compressed KV cache by 90%. GQA and MQA reduced attention head redundancy. Sparse attention (Longformer, BigBird) replaced full attention with local + global patterns. RoPE and ALiBi improved positional encoding support for long sequences. Each optimization narrows the gap between "Transformer's weaknesses" and "alternative architectures' advantages." When Transformer's O(n²) is optimized layer by layer in practical engineering to approach linear effects, the alternative architectures' selling point of "theoretically more efficient" becomes less compelling.

---

## V. Divergence: Not who replaces whom, but each has its strengths

By mid-2026, the landscape of this architecture debate has gradually clarified. It is not a zero-sum game of "who replaces whom" but a **divergence of capabilities.**

**Transformer's domain of dominance:** General language modeling, large-scale multi-task, complex reasoning, tasks requiring precise retrieval. These scenarios share these characteristics — data-rich, compute-abundant, requiring models to demonstrate the strongest capabilities at the largest scale. GPT-5.5, Claude 4, Gemini 3.x, DeepSeek V4 all compete in these scenarios, and all are based on Transformer.

**SSM's domain of advantage:** Ultra-long sequence processing, low-inference-latency scenarios, edge deployment. Genomics (sequence lengths up to hundreds of millions), audio stream processing, ultra-long context in real-time conversation — in these scenarios, O(n) complexity is not a theoretical advantage but an actual survival condition. When sequence lengths exceed 100K and inference latency is a hard constraint, SSM approaches demonstrate efficiency that Transformer cannot match.

**The possibility of hybrid architectures:** The Jamba-style hybrid approach suggests a more likely future — not "SSM replaces Transformer" or "Transformer remains unchanged forever," but "combining different computational modes according to task requirements." Attention handles the layers requiring precise retrieval, SSM handles the layers for efficient sequence scanning, MoE handles sparse activation of knowledge — these are not mutually exclusive technologies but coexisting modules.

Mamba-2's theoretical work has confirmed this possibility: SSM and attention are mathematically two faces of the same framework.[^5] Future architectures will likely not be "pure Transformer" or "pure SSM" but hybrid systems that adaptively select computational modes based on task and scenario.

---

## Commentary

The core of the post-Transformer architecture debate is not a technical competition — it is a philosophical question about **foundations.**

Transformer has dominated sequence modeling since 2017. Over nine years, it has survived the BERT/GPT divergence, scaling law validation, multimodal extension, the rise of reasoning models, and the open-source wave — each time it persisted, each time it grew larger. It is imperfect: O(n²) is a real bottleneck, KV cache is a real cost, long sequences are a real pain point. But these cracks have not caused its collapse — at every crack, engineers are patching.

Mamba proved that linear complexity can match Transformer. RWKV proved that RNNs can be revived on modern hardware. xLSTM proved that classical methods can be reinvented. Jamba proved that hybridization is possible. These are real advances — not fantasies, but advances with papers, code, and experimental results.

But between "proven viable" and "replaced" lies a vast chasm. This chasm lies not in mathematics — but in ecosystem. An architecture needs training framework support, inference engine optimization, hardware accelerator adaptation, and understanding and usage by tens of thousands of developers. Transformer has been on this path for nine years. For alternative routes to catch up will not be a matter of one or two years.

Those who have spent a decade building a city know: **a foundation is not called a foundation because it has no cracks, but because it can continue bearing weight when cracks appear.** Transformer is exactly such a foundation — imperfect, but it has borne the heaviest stretch of history in the large language model era. The true meaning of the post-Transformer era is not that Transformer will be replaced, but that its computational mode will be supplemented, hybridized, and extended. Future sequence modeling may not be "Attention Is All You Need," nor "Attention Is No Longer Needed" — but "Attention Is One of the Things You Need."

---

*This piece was compiled by the Endfield Industrial Historical Archives team: Zhuang Fangyi (lead writer).*

---

[^1]: Vaswani et al., "Attention Is All You Need", arXiv:1706.03762, 2017-06-12. https://arxiv.org/abs/1706.03762. O(n²) complexity detailed in §3.2 of the paper.
[^2]: Tri Dao et al., "FlashAttention: Fast and Memory-Efficient Exact Attention with IO-Awareness", NeurIPS 2022, arXiv:2205.14135. FlashAttention reduced memory usage from O(n²) to O(n), but the FLOPs of the attention computation itself remain O(n²). https://arxiv.org/abs/2205.14135
[^3]: Gu, Goel, Ré, "Efficiently Modeling Long Sequences with Structured State Spaces" (S4), ICLR 2022, arXiv:2111.00396. S4 achieved the first meaningful scores on Path-X (sequence length 16,384), while Transformer completely failed on that task due to O(n²) memory exhaustion. https://arxiv.org/abs/2111.00396
[^4]: Gu, Dao, "Mamba: Linear-Time Sequence Modeling with Selective State Spaces", arXiv:2312.00752, 2023-12-01. Mamba matched equivalent Transformer in language modeling with approximately 5× inference throughput improvement. https://arxiv.org/abs/2312.00752
[^5]: Dao, Gu, "Transformers are SSMs: Generalized Models and Efficient Algorithms Through Structured State Space Duality" (Mamba-2), arXiv:2405.21060, 2024-05-31. The paper demonstrated the mathematical duality between SSMs and attention. https://arxiv.org/abs/2405.21060
[^6]: Peng et al., "RWKV: Reinventing RNNs for the Transformer Era", EMNLP 2023 Findings, arXiv:2305.13048, 2023-05. RWKV was initiated by independent researcher Bo Peng; the first public version, RWKV-4, was uploaded to HuggingFace in April 2023. https://arxiv.org/abs/2305.13048
[^7]: Beck et al., "xLSTM: Extended Long Short-Term Memory", arXiv:2405.04517, 2024-05-07. Proposed by the team of Sepp Hochreiter, the original inventor of LSTM. https://arxiv.org/abs/2405.04517
[^8]: Lieber et al., "Jamba: A Hybrid Transformer-Mamba Language Model", arXiv:2403.19887, 2024-03-28. Developed by AI21 Labs, 52B total parameters/12B active, supporting 256K context. https://arxiv.org/abs/2403.19887
[^9]: As of mid-2026, mainstream frontier models (GPT-4/5 series, Claude series, Gemini series, Llama series, Qwen series, DeepSeek series) are all based on Transformer architecture or variants (such as Decoder-only Transformer + MoE). No publicly released frontier large language model uses a pure SSM or pure RNN architecture.
[^10]: Kaplan et al., "Scaling Laws for Neural Language Models", arXiv:2001.08361, 2020. Hoffmann et al., "Training Compute-Optimal Large Language Models" (Chinchilla), arXiv:2203.15556, 2022. See *The Transformer Chronicle*, §3.2.
