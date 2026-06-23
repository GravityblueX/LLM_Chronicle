# Treatise: Inference Optimization

> No matter how intelligent a model is, if a single inference costs $10, it can only live in papers. The commercialization of large models was never a question of "whether the model is good enough" — it was a question of "whether inference is cheap enough." From KV Cache to Speculative Decoding, from FP8 quantization to PagedAttention, inference optimization is not an engineering nicety but the lifeline that determines which models survive and which business models are viable. What follows is not the story of any single model, but the evolution of the underlying infrastructure that allows all models to be used.

---

## I. Overview

Large model inference refers to the process of deploying a model to a production environment and serving user requests after training is complete. If training is a one-time massive investment (GPT-4's training cost is estimated on the order of $100 million), then inference is an ongoing daily expense — every user interaction consumes compute, and every token generated corresponds to real GPU time and electricity costs.

The core tension of inference optimization is: **there is a structural tension between a large model's capability and its inference cost.** The larger the model, the longer the context, and the longer the generation, the higher the inference cost. What users expect is — larger, faster, and cheaper, all at once.

From 2022 to 2026, the technical evolution in the inference optimization field can be summarized as four parallel main threads:

1. **Attention computation optimization**: Making the attention mechanism itself faster and more memory-efficient (FlashAttention, MLA);
2. **KV Cache compression**: Reducing the memory overhead of storing historical token Key/Value during inference (MLA, MQA, GQA);
3. **Quantization**: Reducing the precision of weights and activations to decrease compute and memory usage (INT8, INT4, FP8, GPTQ, AWQ);
4. **Decoding strategies**: Reducing the actual computation required to generate each token (Speculative Decoding, Continuous Batching).

These four threads did not evolve independently — they are deeply coupled in actual inference frameworks. An excellent inference engine (such as vLLM or TensorRT-LLM) must implement all of the above optimizations while ensuring compatibility among them.

---

## II. Attention Computation Optimization

### 2.1 FlashAttention: A Memory Revolution at the Algorithmic Level

**FlashAttention**, proposed by Tri Dao et al. in 2022, is one of the most important single technical breakthroughs in the history of inference optimization.[^1] (For the complete technical story of FlashAttention, see "The FlashAttention Biographies"; here we focus on its role in inference optimization.)

The computational complexity of standard attention is O(N²) — not just the compute, but more critically the memory footprint. Traditional implementations require writing the full N×N attention matrix into GPU HBM (High Bandwidth Memory), which is an unacceptable memory bottleneck for sequences longer than 4K.

FlashAttention's core idea is **tiling**: splitting the Q, K, V matrices into small blocks, computing attention within the GPU's SRAM (on-chip memory), and using the online softmax algorithm to update results block by block, avoiding writing the full attention matrix to HBM.[^1]

FlashAttention's impact on inference is twofold:

- **Speed**: Reducing HBM read/write operations accelerated attention computation by 2–4 times;
- **Scalability**: Memory usage dropped from O(N²) to O(N), making long-context inference (32K, 128K, 1M) feasible in engineering.

FlashAttention-2 (July 2023) further optimized parallelism and work partitioning, improving performance by approximately another 2x over FlashAttention.[^2] By 2024, FlashAttention-2 had become a standard component in virtually every mainstream inference framework.

### 2.2 Multi-Head Latent Attention (MLA): DeepSeek's KV Cache Revolution

MLA (Multi-head Latent Attention) was first proposed by DeepSeek in the V2 model (May 2024) and is one of the most original architectural innovations in inference optimization.[^3]

Standard multi-head attention (MHA) requires caching independent Key and Value vectors for each attention head — this is the KV Cache. For a model with 32 heads and head_dim=128, each token's KV Cache needs to store 2×32×128=8,192 floating-point numbers. At 128K context, this means tens of GB of VRAM — solely for caching historical tokens' KV information.

MLA's core idea: **rather than caching KV in the original space, project KV into a low-dimensional "latent space," cache only this low-dimensional representation, and reconstruct the full KV from the low-dimensional representation during attention computation.**[^3]

To use an imprecise but intuitive analogy: traditional KV Cache is like storing a full scan of every page of a book; MLA is like storing a compressed index of every page — the full content is reconstructed from the index when needed.

MLA's effect is remarkable: the KV Cache is compressed to **5%–10%** of its original size.[^3] This means:

- The same GPU VRAM can support 10–20 times longer contexts;
- The "VRAM usage" component of inference cost drops directly by 90%.

MLA is the inference cost foundation of DeepSeek-V2 and all subsequent DeepSeek models (V3, R1, V4). It may not be the most elegant technique — but it is the first pillar that makes the proposition "frontier models don't require frontier budgets" hold true.

### 2.3 Multi-Query Attention (MQA) and Grouped-Query Attention (GQA)

Before MLA, the primary routes for KV Cache compression were MQA and GQA.

**MQA (Multi-Query Attention)** was proposed by Noam Shazeer in 2019: all attention heads share a single set of Key and Value, with only Query maintaining multiple heads.[^4] This compresses the KV Cache to 1/H (where H is the number of attention heads), at the cost of reduced attention expressiveness.

**GQA (Grouped-Query Attention)** was proposed by Meta (formerly Facebook) in 2023: attention heads are grouped, with each group sharing KV — a compromise between MHA and MQA.[^5] LLaMA 2 70B adopted GQA.

| Scheme | KV Cache Size | Attention Expressiveness | Representative Models |
|--------|--------------|--------------------------|----------------------|
| MHA | 1× (baseline) | Strongest | GPT-3, LLaMA 1 |
| GQA | ~1/4 to 1/8 | Strong | LLaMA 2 70B, Qwen |
| MQA | ~1/H | Weaker | PaLM, Falcon |
| MLA | ~1/10 to 1/20 | Strong (restored via reconstruction) | DeepSeek V2/V3/V4 |

---

## III. Quantization: Trading Precision for Efficiency

### 3.1 The Basic Logic of Quantization

Large model weights and activations are stored and computed by default in FP16 or BF16 (16-bit floating point). Quantization is the process of mapping these values from high precision to lower precision representations — for example, INT8 (8-bit integer), INT4 (4-bit integer), or even lower.

The core trade-off of quantization is **precision vs. efficiency**:

- INT8 quantization: model size halved, inference speed improved by roughly 1.5–2 times, precision loss typically controllable (<1%);
- INT4 quantization: model size reduced to 1/4, inference speed improved by roughly 2–3 times, precision loss noticeable but still acceptable for many scenarios;
- FP8: between FP16 and INT8; DeepSeek V3 used FP8 throughout its entire 671B training.[^6]

### 3.2 Post-Training Quantization Methods: GPTQ and AWQ

Post-Training Quantization (PTQ) does not require retraining the model — it directly quantizes the already-trained model weights. This is extremely important for the large model community because most developers lack the compute to train a model from scratch.

**GPTQ** (October 2022, Frantar et al.): A layer-wise quantization method based on second-order information (Hessian matrix approximation).[^7] GPTQ can quantize a 175B model to INT4 on a single GPU within hours, with minimal precision loss. GPTQ-quantized models circulate widely on Hugging Face and are one of the most commonly used quantization schemes in the open-source community.

**AWQ (Activation-Aware Weight Quantization)** (June 2023, Lin et al.): The core observation is that not all weights are equally important — a small number of "salient weights" sensitive to activations should maintain higher precision.[^8] AWQ identifies these salient weights by analyzing activation distributions and applies protective quantization (or mixed-precision storage) to them.

By 2024, the GPTQ vs. AWQ competition had evolved into coexistence: GPTQ is more mature in community practice, AWQ is more elegant in theory, and the gap between them in actual results is narrowing.

### 3.3 FP8: The New Efficiency Frontier

FP8 is a low-precision floating-point format natively supported by NVIDIA H100/H200 GPUs. Unlike INT8's integer quantization, FP8 retains the exponent-mantissa structure of floating-point numbers, making it more friendly to the dynamic range encountered in large model training and inference.

DeepSeek V3 was a milestone in FP8 training — the first to complete pre-training entirely in FP8 mixed precision at 671B scale.[^6] This doubled training efficiency: the same GPU hours could process twice the tokens. On the inference side, FP8 can similarly improve inference speed by approximately 1.5–2 times with less precision loss than INT8 quantization.

By 2025–2026, FP8 is becoming the standard precision for inference — just as FP16 replaced FP32 in 2020–2022.

---

## IV. Speculative Decoding: Small Model Drafts + Large Model Verification

### 4.1 Core Idea

The bottleneck of standard autoregressive inference is **sequentiality**: generating each token requires a complete forward pass — no parallelism is possible. A 70B model generating 100 tokens needs 100 forward passes, each taking approximately 20–50ms, totaling 2–5 seconds.

**Speculative Decoding**'s core idea: **use a small, fast "draft model" to quickly generate multiple candidate tokens, then use the large model to verify all candidates at once.**[^9]

For example: use a 1B model to quickly generate 5 tokens (~5ms), then use the 70B model to verify all 5 tokens at once (~50ms). If the draft model's prediction quality is good enough (e.g., 3–4 are accepted), the effective result is equivalent to the 70B model generating 3–4 tokens in one shot — inference throughput improves 2–4 times, while output quality is completely identical to pure 70B inference.[^9]

The key property of Speculative Decoding is that it is **lossless**: the verification step mathematically guarantees that the final output distribution is exactly identical to pure large model inference. This is not an approximation — it is exact equivalence.

### 4.2 Practice and Variants

Since Speculative Decoding's proposal in 2023, multiple practical variants have emerged:

- **Self-Speculative Decoding**: Uses the large model's own shallow layers as the draft model, requiring no additional small model. Suitable for deployment environments that cannot maintain multiple models.
- **Medusa** (2024): Adds multiple parallel prediction heads on top of the large model, each predicting tokens at different positions — no independent draft model needed.[^10]
- **Eagle** (2024): Performs draft prediction based on the large model's hidden states, further improving the draft acceptance rate.[^11]

By 2025–2026, Speculative Decoding has entered mainstream inference frameworks (vLLM, TensorRT-LLM), becoming a standard technique for improving interactive inference speed.

---

## V. Inference Frameworks and Batching Strategies

### 5.1 vLLM: PagedAttention and Continuous Batching

**vLLM**, proposed by Kwon et al. at UC Berkeley in 2023, is the most influential project among open-source inference frameworks.[^12]

vLLM's core innovation is **PagedAttention** — a KV Cache management method inspired by operating system virtual memory paging. Traditional inference frameworks pre-allocate a contiguous block of VRAM for each request to store its KV Cache — causing severe memory fragmentation and waste (since request sequence lengths vary, pre-allocated blocks often have large amounts of unused space).

PagedAttention divides the KV Cache into fixed-size "pages." Different requests' KV Cache can be stored in non-contiguous physical VRAM — just like operating system virtual memory.[^12] The result is that VRAM utilization rises from the traditional 50%–60% to over 95% — the same GPU can serve 2–4 times more concurrent requests.

vLLM also implemented **Continuous Batching**: traditional batching (static batching) requires all requests in a batch to complete before the next batch can start — short requests are "held back" by long ones. Continuous Batching allows new requests to be dynamically added and completed requests to be removed during generation — freeing GPU utilization from the "shortest straw" effect.[^12]

### 5.2 TensorRT-LLM

NVIDIA's **TensorRT-LLM** is a high-performance inference framework designed for its own GPUs. It applies TensorRT's deep optimizations (operator fusion, memory planning, automatic kernel tuning) to large model inference, with native support for FP8, INT4 quantization, Speculative Decoding, and other techniques.

TensorRT-LLM's advantage lies in extreme optimization for NVIDIA hardware — on the same GPU, TensorRT-LLM's inference speed is typically 20%–50% faster than vLLM. Its disadvantage is being tied to the NVIDIA ecosystem, with significantly higher configuration complexity than vLLM.

### 5.3 Inference Framework Competitive Landscape

By mid-2025, the competitive landscape of open-source inference frameworks has become clearer:

| Framework | Core Strength | Best For |
|-----------|--------------|----------|
| vLLM | PagedAttention, Continuous Batching, ease of use | General deployment, small-to-mid teams |
| TensorRT-LLM | Deep NVIDIA optimization, native FP8 support | Large-scale production, NVIDIA-exclusive |
| SGLang | RadixAttention, structured generation optimization | Agent/tool-calling scenarios |
| llama.cpp | CPU/low-resource inference, GGUF quantization format | Consumer hardware, edge deployment |

---

## VI. Inference Cost and Business Models

### 6.1 Cost Structure

The pricing of large model APIs is essentially a function of inference cost. A typical API pricing model:

```
API price ≈ (GPU rental cost × inference time) + profit margin
```

Where "inference time" depends on:
- Model size (more parameters = slower forward pass per token);
- KV Cache overhead (longer context = more VRAM used);
- Batching efficiency (more requests per batch = lower per-unit cost);
- Quantization level (lower precision = faster computation).

This is why DeepSeek's API can be 100–370 times cheaper: MLA compresses KV Cache by 90% (extremely low context costs), MoE means active parameters are only 5% of total parameters (extremely fast forward pass), FP8 doubles compute efficiency. The three combined reduce inference cost by one to two orders of magnitude.

### 6.2 Inference Cost Determines Business Models

Inference optimization is not merely a technical problem — it is a **determining factor for business models**.

- **Subscription model** (e.g., ChatGPT Plus at $20/month): Inference cost must be below $20/user/month, otherwise the more users, the greater the loss. GPT-4's initial $20 pricing was reportedly loss-making — subsidized by ChatGPT-3.5's low-cost users.
- **API pay-per-use** (e.g., OpenAI API): Pricing must cover inference cost + profit margin. When DeepSeek's inference cost is 1/100 of OpenAI's, it can remain profitable at 1/370 the price.
- **Free open-source** (e.g., DeepSeek R1 MIT open-source): Only when inference costs are low enough is fully free open-source sustainable — otherwise users' API calls become a financial black hole for the research institution.

The ultimate significance of inference optimization is: **it determines the pace of AI capability democratization.** Every order-of-magnitude reduction in inference cost expands the addressable user base by an order of magnitude. From this perspective, the "engineering details" of FlashAttention, MLA, FP8, and PagedAttention are the true infrastructure of AI democratization.

---

## VII. Factual Thread Table

| Date | Technology | Proposer | Core Contribution | Impact |
|------|-----------|----------|-------------------|--------|
| 2019 | Multi-Query Attention | Noam Shazeer (Google) | All attention heads share KV | Pioneer of KV Cache compression |
| 2022-05 | FlashAttention | Tri Dao et al. | Tiled attention, O(N) memory | Cornerstone of inference scalability |
| 2022-10 | GPTQ | Frantar et al. | Post-training INT4 quantization | Open-source community quantization standard |
| 2023-06 | AWQ | Lin et al. | Activation-aware weight quantization | More precise PTQ |
| 2023-06 | vLLM / PagedAttention | Kwon et al. (UC Berkeley) | Paged KV Cache management | Inference framework revolution |
| 2023-07 | FlashAttention-2 | Tri Dao | Attention optimization sped up 2× again | Standard for long-context inference |
| 2023-07 | Grouped-Query Attention | Meta | Compromise between MHA/MQA | Adopted by LLaMA 2 |
| 2023-11 | Speculative Decoding | Leviathan et al. / Chen et al. | Small model draft + large model verification | Lossless inference acceleration |
| 2024-05 | Multi-head Latent Attention | DeepSeek | KV projected to low-dimensional latent space | KV Cache compression by 90% |
| 2024 | Medusa | Cai et al. | Multi-head parallel draft prediction | No independent draft model needed |
| 2024 | Eagle | Li et al. | Hidden-state draft prediction | Improved acceptance rate |
| 2024-12 | FP8 full training | DeepSeek (V3) | FP8 training at 671B scale | Training efficiency doubled |

---

## Commentary

Inference optimization is the least conspicuous yet most leveraged layer of the large model technology stack.

Training technology determines how intelligent a model is. Inference technology determines how many people can use that model. No matter how intelligent GPT-4 is, if a single inference costs $1, it is an elite toy. No matter how cheap DeepSeek R1 is, without MLA and FP8, its 1/370 pricing would be impossible.

The past four years of inference optimization history reveal a clear pattern: **every order-of-magnitude cost reduction came not from a single technical breakthrough, but from the compounding of multiple optimizations.** FlashAttention made attention 2–4 times faster, MLA made KV Cache 10 times smaller, FP8 doubled compute efficiency, PagedAttention raised VRAM utilization from 50% to 95% — viewed individually, each is an "engineering optimization," but stacked together, they represent a one-to-two-order-of-magnitude cost difference. This is the true source of DeepSeek's price advantage — not any single breakthrough technology, but every link in the entire inference chain pushed close to physical limits.

The next phase of inference optimization faces two core challenges. The first is the **linear cost problem of long contexts**: as context extends from 128K to 1M or beyond, even with MLA and FlashAttention, inference cost still grows linearly. How to achieve "the longer the context, the lower the per-unit cost" is a fundamental challenge of the attention mechanism. The second is the **convergence of inference and training**: Multi-Token Prediction (MTP) blurs the boundary between training and inference — if "multi-token prediction" is already being done during training, then Speculative Decoding during inference can directly use the MTP heads from training as draft models. This convergence will transform "inference optimization" from a post-training afterthought into a first-class citizen of model architecture design.

The story of inference optimization is far from over. It will continue to work behind the scenes, determining — which models survive, which business models are viable, and which AI capabilities truly reach ordinary users.

---

*Compiled by the Endfield Industrial Historian Team: Yvonne (Architecture Audit).*

---

[^1]: Tri Dao et al., "FlashAttention: Fast and Memory-Efficient Exact Attention with IO-Awareness", NeurIPS 2022, arXiv:2205.14135. https://arxiv.org/abs/2205.14135
[^2]: Tri Dao, "FlashAttention-2: Faster Attention with Better Parallelism and Work Partitioning", 2023-07-17. https://arxiv.org/abs/2307.08691
[^3]: DeepSeek-AI, "DeepSeek-V2: A Strong, Economical, and Efficient Mixture-of-Experts Language Model", arXiv:2405.04434, 2024-05-07. MLA technical description in §3.1. https://arxiv.org/abs/2405.04434
[^4]: Noam Shazeer, "Fast Transformer Decoding: One Write-Head is All You Need", 2019-11. https://arxiv.org/abs/1911.02150
[^5]: Aidan et al. (Meta AI), "Llama 2: Open Foundation and Fine-Tuned Chat Models", 2023-07. GQA introduction in §3.2. https://arxiv.org/abs/2307.09288
[^6]: DeepSeek-AI et al., "DeepSeek-V3 Technical Report", arXiv:2412.19437, 2024-12-27. FP8 full training in §3. https://arxiv.org/abs/2412.19437
[^7]: Elias Frantar et al., "GPTQ: Accurate Post-Training Quantization for Generative Pre-trained Transformers", ICLR 2023, 2022-10. https://arxiv.org/abs/2210.17323
[^8]: Ji Lin et al., "AWQ: Activation-aware Weight Quantization for LLM Compression and Acceleration", MLSys 2024, 2023-06. https://arxiv.org/abs/2306.00978
[^9]: Yaniv Leviathan et al., "Fast Inference from Transformers via Speculative Decoding", ICML 2023, 2022-11. https://arxiv.org/abs/2211.17192
[^10]: Cai et al., "Medusa: Simple LLM Inference Acceleration Framework with Multiple Decoding Heads", 2024-01. https://arxiv.org/abs/2401.10774
[^11]: Li et al., "EAGLE: Speculative Sampling Requires Rethinking Feature Uncertainty", ICML 2024. https://arxiv.org/abs/2401.15077
[^12]: Kwon et al., "Efficient Memory Management for Large Language Model Serving with PagedAttention", SOSP 2023, 2023-06. https://arxiv.org/abs/2309.06180
