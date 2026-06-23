# The Biography of Mamba

> Mamba (2023-12) is an architecture—not a model, not a product, but an alternative way of processing sequences. Albert Gu and Tri Dao's Selective State Space Model (Selective SSM) compressed the computational complexity of sequence modeling from Transformer's O(n²) to O(n), while maintaining modeling quality comparable to Transformer. As of mid-2026, Mamba has not replaced Transformer; but it is the most important technical exploration of the "post-Transformer era"—it proved that linear-complexity sequence models can genuinely compete, and together with RWKV, xLSTM, and Jamba, it constitutes the full lineup of "non-Transformer routes."

---

## I. Technical Background

Transformer has dominated sequence modeling since 2017. But its core mechanism—self-attention—has a mathematically inescapable cost: for every sequence processed, each token must compute attention weights with every other token, resulting in O(n²) complexity (see "The Biography of Attention" and "The Biography of Transformer").

This quadratic complexity is not a problem for short sequences. For sentences of a few hundred tokens, O(n²) computation is trivial on modern GPUs. But when sequence length grows to thousands, tens of thousands, or even hundreds of thousands—long documents, high-resolution images, long videos, genomic sequences—O(n²) becomes a hard barrier. FlashAttention alleviated this by optimizing the GPU kernel's I/O path, but did not change the complexity itself. [^1]

Another path was to fundamentally change the architecture. Since Transformer's inception, researchers have been seeking linear-complexity O(n) alternatives:

- **Linear Attention** (2020): Replacing softmax attention with kernel function approximation, reducing complexity from O(n²) to O(n), but experimental results consistently fell short of standard attention. [^2]
- **RWKV** (2023): Replacing Transformer's attention mechanism with an RNN-like recurrence formula, enabling parallel training and recurrent inference at O(n) complexity. [^3]
- **State Space Models (SSM)**: Modeling sequences using continuous-time dynamical systems—the direct precursor to Mamba.

The key figure in the SSM route was **Albert Gu**. In January 2022, Gu, then a PhD researcher at CMU, published **S4 (Structured State Spaces for Sequence Modeling)**. [^4] S4 used a linear ordinary differential equation to describe a sequence's state evolution, solving the long-range dependency problem through a special matrix structure (HiPPO initialization). S4's performance on long-sequence tasks (such as Path-X, with sequence length 16,384) stunned the field—on these tasks, Transformer could not even run due to O(n²), yet S4 handled them effortlessly. [^4]

But S4 had a critical flaw: **its state transitions were time-invariant.** Regardless of what token was input, the system used the same set of parameters to transition states. This made S4 perform poorly on tasks requiring "selectivity"—such as keyword capture in language modeling or relevant content filtering in information retrieval. S4 was powerful on long-range dependency tasks, but could never catch up with Transformer on the core task of language modeling.

Mamba was designed to solve this: **can we maintain linear complexity while making the state space model learn to "select"?**

---

## II. Core Innovations

### 2.1 Selective State Space Model (Selective SSM / S6)

Mamba's core innovation was making S4's **time-invariant** parameters **time-varying and input-dependent.** [^5]

In a standard SSM, the system's state equation is:

```
h_t = A·h_{t-1} + B·x_t
y_t = C·h_t
```

where A, B, and C are fixed matrices—regardless of input, the transition rules remain unchanged. Gu made B, C, and the timestep Δ **functions of the input x**: B = B(x_t), C = C(x_t), Δ = Δ(x_t). [^5]

The implication of this change is intuitive: the model can decide, based on the current input's content, "how much past information to retain, how much to ignore, and how much new information to inject." When processing "the cat sat on the mat," the token "cat" might need to be strongly remembered (because it is the subject), while the function word "on" might only need to be lightly remembered. The selectivity mechanism allows the model to make this distinction.

Gu and Dao named this input-dependent SSM **S6 (Selective Structured State Space—the superscript 6 representing the abbreviation of six-S)** to distinguish it from the original S4. [^5]

### 2.2 Hardware-aware scan algorithm

After the parameters became input-dependent, an engineering problem arose: S4 could train efficiently because its time-invariance allowed the use of FFT (Fast Fourier Transform) for convolution—and convolution is very fast on GPUs. With input dependence, this convolution shortcut was no longer available.

**Tri Dao**—the author of FlashAttention—solved this problem (see "The Biography of Attention"). [^1][^5] He designed a **hardware-aware parallel scan algorithm**, mapping the forward and backward passes of the selective SSM onto the GPU's memory hierarchy: performing the core state transition computation in SRAM (on-chip cache), avoiding frequent reads and writes to HBM (high-bandwidth memory).

This design philosophy was entirely consistent with FlashAttention: don't change the mathematical formula, but adapt the computation process to the hardware's actual characteristics. The result: the selective SSM's training speed could match the Transformer + FlashAttention combination, while inference had the advantage of linear complexity.

### 2.3 Architecture: fitting SSM into Transformer's shape

Mamba's overall architecture borrowed Transformer's design language, replacing attention with SSM. [^5]

Each Mamba layer contains:
- A linear projection (expanding dimensionality)
- A 1D causal convolution (local context)
- A selective SSM layer (long-range dependencies)
- A gated output

This "Transformer shape, SSM core" design allowed Mamba to be stacked like Transformers, use residual connections, and build deep networks, while internally using linear-complexity SSM to replace quadratic-complexity attention.

### 2.4 Key data

| Metric | Value | Notes |
|--------|-------|-------|
| Paper publication date | 2023-12-01 | arXiv:2312.00752 [^5] |
| Authors | Albert Gu (CMU), Tri Dao (Princeton) | S4 founder + FlashAttention founder |
| Parameter scale (Mamba-130M to Mamba-2.8B) | 130M–2.8B | Multiple scales tested in the paper |
| Training data | The Pile (~300B tokens) | Standard open-source pre-training data [^5] |
| Time complexity | O(n) | Linear, vs Transformer's O(n²) |
| Inference efficiency | 5× faster than same-scale Transformer | Advantage grows with sequence length [^5] |
| Key benchmark (language modeling) | Matches same-scale Transformer | Verified across multiple scales [^5] |

The paper reports that Mamba matched same-parameter-count Transformers on language modeling (The Pile perplexity), and significantly outperformed Transformer on long-sequence tasks such as genomics and audio. More critically, Mamba's generation speed (inference throughput) was approximately 5× faster than same-scale Transformers, with the advantage becoming more pronounced as sequence length increased. [^5]

---

## III. Impact and Legacy

### 3.1 Mamba-2: unifying SSM and Attention

In **May 2024**, Gu and Dao published **Mamba-2**, with a paper title that was blunt: "Transformers are SSMs: Generalized Models and Efficient Algorithms Through Structured State Space Duality." [^6]

Mamba-2's core finding: **SSM and attention are not two mutually exclusive methods, but two faces of the same mathematical framework.** The paper proved a Structured State Space Duality (SSD), showing that Transformer's attention matrix can be viewed as a special case of SSM state transition, and SSM's selectivity mechanism can be viewed as a form of structured attention. [^6]

This unified perspective had not only theoretical significance but also engineering benefits: Mamba-2 was 2–8× faster than Mamba-1 while maintaining linear complexity, and could leverage GPU Tensor Cores for acceleration—something Mamba-1 could not do.

### 3.2 The non-Transformer route family

Mamba was not an isolated technical exploration. By 2024–2025, it joined several other routes to form the research frontier of "non-Transformer architectures":

| Architecture | Proposer | Date | Route | Key features |
|--------------|----------|------|-------|--------------|
| RWKV | Bo Peng | 2023-04 | RNN-style | Linear complexity, parallel training, recurrent inference, no attention [^3] |
| Mamba | Gu & Dao | 2023-12 | SSM-style | Selective state space, linear complexity, hardware-aware [^5] |
| xLSTM | Sepp Hochreiter et al. | 2024-05 | LSTM revival | Introducing exponential gating and matrix memory to classic LSTMs, attempting to "resurrect" recurrent networks with modern techniques [^7] |
| Jamba | AI21 Labs | 2024-03 | Hybrid | SSM layers and Transformer attention layers stacked alternately, balancing linear complexity and attention's expressiveness [^8] |

These four routes share a fundamental judgment: **Transformer's O(n²) attention is not necessarily the ultimate answer for sequence modeling.** But they offer different answers to "what the alternative should be." RWKV returns to RNN's recurrent structure, Mamba uses continuous-time dynamical systems, xLSTM revives classic recurrent networks, and Jamba takes a compromise—mixing SSM with attention.

Jamba's hybrid route gained some commercial attention in 2024–2025. AI21 Labs positioned it as the core architecture for enterprise-grade long-context models, claiming greater efficiency than pure Transformer models in long document processing. [^8] But overall, as of mid-2026, no non-Transformer architecture has fully replaced Transformer in general-purpose language modeling.

### 3.3 Rapid expansion of the Mamba ecosystem

After Mamba's paper release, the community rapidly reproduced and extended the SSM architecture across multiple domains:

- **Visual Mamba (Vim, VMamba, etc.)**: Applying Mamba to image classification and visual understanding, replacing Vision Transformer's attention with sequence scanning. [^9]
- **Multimodal Mamba**: Using Mamba instead of Transformer as the backbone in vision-language models.
- **Long-sequence applications**: Genomics, audio processing, long video understanding—domains where sequence lengths far exceed standard NLP tasks, representing Mamba's most natural application scenarios.

But these extensions were mostly research explorations and had not formed a Mamba-specific "ecosystem"—unlike Transformer, which has mature engineering infrastructure such as HuggingFace Transformers, PyTorch native support, and FlashAttention kernel optimization. This is an important reason why Mamba has not replaced Transformer by 2026: not because the math doesn't work, but because the engineering ecosystem hasn't caught up.

### 3.4 Why Transformer still holds firm

As of mid-2026, frontier large models—GPT-4/o, Claude, Gemini, Llama 3, Qwen 2.5/3, DeepSeek-V3—are still based on Transformer or its variants. Although Mamba has demonstrated competitiveness in theory and small-scale experiments, it has not been validated in the largest-scale model training.

The reasons are multifaceted:

1. **Engineering inertia**: Transformer's training infrastructure is extremely mature—from distributed training frameworks to GPU kernel optimization, from data loading pipelines to inference deployment tools. Changing architectures means rebuilding the entire engineering chain.
2. **Missing scaling law evidence**: Transformer's scaling laws have been repeatedly validated (Kaplan 2020, Chinchilla 2022). Mamba's scaling laws still lack large-scale empirical evidence—no one knows what happens when Mamba is stacked to hundreds of billions of parameters.
3. **Attention's "right to choose"**: The attention mechanism has a special advantage—each token can directly "see" any other token in the sequence, regardless of distance. Although SSM's state propagation can theoretically handle long-range dependencies, information must pass through every intermediate state transition step, potentially creating information bottlenecks in deep networks.

However, Jamba's hybrid approach points to a possible future: not "SSM replacing attention," but "SSM handling the bulk of computation, with attention handling the key layers that require precise backtracking." This compromise may be the ultimate deployment solution.

---

## Commentary

Mamba's historical position lies not in whether it replaced Transformer—as of 2026, it has not. Its historical position lies in **proving that Transformer is not the only answer.**

Before Mamba, researchers on the "non-Transformer route" faced an almost faith-level pressure: was Transformer's O(n²) attention some kind of irreplaceable necessity? Scaling laws, emergent abilities, multimodal extension—all had been validated on Transformer. Was it truly the case that if you wanted to go big and go well, there was no alternative?

Mamba answered: no. Linear-complexity sequence models can match Transformer on language modeling, surpass it on long sequences, and crush it on inference speed. From Albert Gu's S4 in 2022 to Mamba in 2023, the speed of this route's advance shows that the limitation was not mathematical but engineering. When selectivity was introduced, when hardware-aware algorithms were designed, state space models evolved from "specialists for long sequences" to "strong contenders for general modeling."

In the larger narrative, Mamba is an important signal in the evolution of large model architecture: **foundations are not eternal.** Transformer has dominated for nearly a decade since 2017, but domination does not mean forever. No architecture in history has lasted forever. RNN dominated for thirty years before being replaced by Transformer; CNN dominated vision for a decade before being challenged by ViT. Will Transformer one day be replaced by Mamba or its successors? Unknown. But Mamba has at least proven: the answer is not "impossible," but "not yet."

---

*This entry was compiled by the Endfield Industrial Chronicle team: Silence (biography lead author).*

---

[^1]: Dao et al., "FlashAttention: Fast and Memory-Efficient Exact Attention with IO-Awareness", NeurIPS 2022 / arXiv:2205.14135. https://arxiv.org/abs/2205.14135
[^2]: Katharopoulos et al., "Transformers are RNNs: Fast Autoregressive Transformers with Linear Attention", ICML 2020 / arXiv:2006.16236. https://arxiv.org/abs/2006.16236
[^3]: Peng et al., "RWKV: Reinventing RNNs for the Transformer Era", EMNLP 2023 / arXiv:2305.13048. https://arxiv.org/abs/2305.13048
[^4]: Gu, Goel, Ré, "Efficiently Modeling Long Sequences with Structured State Spaces", ICLR 2022 / arXiv:2111.00396. https://arxiv.org/abs/2111.00396
[^5]: Gu, Dao, "Mamba: Linear-Time Sequence Modeling with Selective State Spaces", arXiv:2312.00752, 2023-12-01. https://arxiv.org/abs/2312.00752
[^6]: Dao, Gu, "Transformers are SSMs: Generalized Models and Efficient Algorithms Through Structured State Space Duality" (Mamba-2), arXiv:2405.21060, 2024-05-31. https://arxiv.org/abs/2405.21060
[^7]: Beck et al., "xLSTM: Extended Long Short-Term Memory", arXiv:2405.04517, 2024-05-07. https://arxiv.org/abs/2405.04517
[^8]: Lieber et al., "Jamba: A Hybrid Transformer-Mamba Language Model", arXiv:2403.19887, 2024-03-28. https://arxiv.org/abs/2403.19887
[^9]: Zhu et al., "Vision Mamba: Efficient Visual Representation Learning with Bidirectional State Space Model", arXiv:2401.09417, 2024-01. https://arxiv.org/abs/2401.09417
