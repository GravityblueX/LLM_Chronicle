# The Biography of Attention

> Attention is not a model—it is a method that teaches neural networks "where to look." Starting as an auxiliary tool in machine translation, it first became the backbone of sequence modeling, then through FlashAttention solved the real-world bottleneck of "affordable to conceive but not to compute." This path stretches from 2014 to 2024—exactly a decade.

---

## I. Technical Background

Before 2014, the mainstream approach to neural machine translation was an encoder-decoder with RNN/LSTM. The encoder compressed the source sentence into a fixed-length vector, and the decoder generated the translation from that vector. When Cho et al. proposed the RNN Encoder-Decoder framework in 2014, this was precisely the design they used. [^1]

The problem lay in the "fixed-length vector" step. No matter how long the input sentence, the encoder could only give the decoder a context of fixed size. Once sentences grew long enough, information would be lost—like compressing an entire page into a single line of text, with early content squeezed out. Sutskever et al. called this the long-sequence bottleneck of LSTM. [^2]

This was the soil from which Attention grew. The field needed a mechanism that would let the decoder look back at different parts of the input sentence when generating each word, rather than staring at a single compressed vector.

---

## II. Core Innovations

### 2.1 Bahdanau Attention: teaching the decoder to "look back"

In September 2014, Bahdanau, Cho, and Bengio published "Neural Machine Translation by Jointly Learning to Align and Translate." They proposed: when the decoder generates each target word, instead of looking at a single fixed encoding vector, it computes a weighted sum over all encoder hidden states based on its current state. [^3]

This weighted sum is Attention. The weights indicate "how much should the current word being generated attend to each position in the source sentence." During training, the model learns alignment on its own—no manual annotation of which words correspond is needed.

Bahdanau Attention specifically uses additive attention: the decoder state and encoder state are concatenated, passed through a fully connected layer, then softmax to obtain weights. It is not complicated, yet it pushed translation quality up a notch. More importantly, it brought the idea of "attention" into sequence models.

### 2.2 Luong Attention: a simpler dot-product variant

In 2015, Luong, Pham, and Manning proposed several more direct variants of Attention. They demonstrated that additive networks were unnecessary; simply taking the dot product of decoder and encoder states worked well. [^4]

The paper compared three scoring methods: dot (dot product), general (with a learnable weight matrix), and concat (similar to Bahdanau's additive scheme). The general approach performed best in many experiments.

Luong Attention also distinguished between "global attention" (looking at all source positions) and "local attention" (looking at only a window). This was an early precursor to sparse attention and windowed attention. At the time, however, the main question on everyone's mind was: can Attention be extended from translation to more tasks?

### 2.3 Self-attention: elevating Attention from auxiliary to backbone

In 2017, Vaswani et al. pushed Attention to its extreme in the Transformer paper. They proposed scaled dot-product attention: computing attention weights using Query, Key, and Value vectors, then dividing by √dₖ to prevent gradient vanishing. The paper's most essential sentence is "Attention Is All You Need"—not "Attention added on top of RNN," but "Attention alone." [^5]

Self-attention lets every position in a sequence directly see every other position. No recurrence, no convolution—all relationships resolved within a single layer of computation. This made parallel training possible and eliminated the need for long-range dependencies to propagate through many steps of state.

Multi-head attention splits attention into multiple subspaces computed in parallel, letting the model learn different types of associations simultaneously—some heads track syntax, others coreference, others local collocations.

This topic is covered in greater detail in "The Biography of Transformer" and will not be expanded here. But from the history of Attention's perspective, the significance of self-attention is this: Attention was no longer merely an "external alignment tool"—it became sequence modeling itself.

### 2.4 FlashAttention: solving the "can we actually afford to compute this" problem

Self-attention is powerful, but it has a hard flaw: its complexity is O(n²).

For long sequences—lengthy documents, high-resolution images, long videos—as n grows, the computation and storage costs of the QK^T matrix explode. This is not a theoretical problem; it is a GPU memory and bandwidth problem. HBM capacity is limited, and when intermediate matrices are too large, they must be read and written repeatedly, with one kernel calling another kernel, and I/O overhead consuming vast amounts of time.

In 2022, Dao et al. proposed FlashAttention. The core insight: instead of writing the full QK^T matrix back to HBM, perform incremental softmax computation in blocks within SRAM. This reduces HBM read/write cycles, shifting Attention from memory-bound to compute-bound. [^6]

The effect is direct: FlashAttention maintains numerical precision (exact attention) while accelerating standard Attention by 2–4× and reducing memory from O(n²) to O(n). The paper specifically notes that its advantage grows with sequence length—GPT-2 with FlashAttention trained 3× faster than the original.

In 2023, FlashAttention-2 further improved the parallelism strategy and work partitioning, achieving approximately 2× acceleration on both forward and backward passes. The paper also pushed sequence length to 64K. [^7]

In 2024, FlashAttention-3 leveraged Hopper GPU's asynchronous instructions and FP8 low precision to achieve an additional 1.5–2.0× speedup on H100, claiming to reach 75% of H100's theoretical peak FLOPS. [^8]

The historical role of the FlashAttention series is distinctive: it did not invent a new attention formula, but it made existing formulas truly usable for long sequences. Many long-context models, vision Transformers, and multimodal systems rely on FlashAttention to keep training costs within a reasonable range.

### 2.5 Key data

| Time | Work | Core contribution | Historical role |
|------|------|-------------------|-----------------|
| 2014-09 | Bahdanau Attention | Additive attention, letting decoder dynamically look back at encoder | Introduced "attention" as an alignment mechanism in neural machine translation |
| 2015-08 | Luong Attention | Dot/general/additive variants, global and local attention | Simplified attention computation and promoted its adoption across more tasks |
| 2017-06 | Self-Attention (Transformer) | Scaled dot-product, multi-head, self-attention replaces recurrence | Attention became the backbone of sequence modeling |
| 2022-05 | FlashAttention | Blockwise incremental softmax, reducing HBM I/O | Made O(n²) attention truly trainable on long sequences |
| 2023-07 | FlashAttention-2 | Improved parallelism and work partitioning, 2× forward and backward | The dominant implementation for long-context training |
| 2024-07 | FlashAttention-3 | Hopper asynchronous instructions + FP8, 75% of H100 theoretical FLOPS | Pushed attention efficiency to the limits of new hardware |

---

## III. Impact and Legacy

### 3.1 From translation to universal sequence modeling

Bahdanau and Luong's Attention was originally a specialized improvement for translation tasks. But with Transformer, self-attention proved it could handle far more than translation: language modeling, text understanding, code generation, image classification, audio processing, multimodal fusion—all could use the same attention framework.

Attention thus transformed from a sub-component of NLP into a universal computational primitive. OpenAI's GPT series, Google's BERT/T5, Meta's Llama, Anthropic's Claude, DeepSeek's models—all rely fundamentally on self-attention. That a single mechanism can underpin so many different lines of models suggests it captures not the surface patterns of any one data type, but a more fundamental capacity for "relationship modeling."

### 3.2 Long sequences spawning sparse attention and linear attention

The pressure of O(n²) also spawned numerous variants. Longformer, BigBird, Reformer, and others used sparse attention, local windows, and hash routing to reduce complexity. Linear attention and state space models (such as Mamba) attempted to push complexity down to O(n) or O(n log n) at the formula level.

These variants each have suitable scenarios: sparse attention is effective for long document understanding; state space models can match Transformer on certain sequence tasks; but the training ecosystem, hardware optimization, and engineering maturity still favor self-attention. FlashAttention's emergence also alleviated the urgency of O(n²)—rather than inventing new formulas, it made more sense to run existing ones faster.

### 3.3 A paradigm for hardware-algorithm co-design

FlashAttention's historical significance extends beyond "faster." It demonstrated a paradigm: algorithm design cannot be divorced from hardware. The IO-aware philosophy—understanding how data flows between HBM and SRAM, and where the bottleneck lies—is becoming the standard approach for designing efficient deep learning systems.

This is also what makes the Biography of Attention unique. The earliest Bahdanau Attention was a pure model innovation, independent of hardware. By the time of FlashAttention, algorithms and GPU architecture had become inseparable. An attention mechanism, over the course of a decade, evolved from "an alignment module outside RNN" to "blockwise computation inside GPU kernels"—this is itself a complete arc of transformation.

### 3.4 Decline or absorption

By 2026, Attention has not been replaced. It remains the core mechanism of frontier large models, simultaneously surrounded by numerous variants. FlashAttention has been integrated into PyTorch, Hugging Face Transformers, vLLM, and other mainstream frameworks, becoming the default attention implementation.

Its most visible challenge comes from state space models, linear attention, and other sub-quadratic complexity approaches. But these approaches currently more closely approximate Transformer on specific tasks; they are still some distance from full replacement. Attention's historical position is more like a primitive that is continually optimized rather than overthrown.

---

## Commentary

The decade of Attention is the decade in which "selection" evolved from a design trick into a core capability.

Bahdanau showed that letting a model learn "where to look" beats having engineers prescribe it; Luong showed that a simple dot product can do complex things. Transformer bound selection and relationships directly together, making Attention shoulder the entire model. FlashAttention then reminded the industry: a good idea is only the first step—making it run and run cheaply is what brings it to production.

Attention's allure lies not in elegant formulas, but in capturing a very fundamental operation—comparing, weighting, aggregating—and then, through a decade of engineering, honing it to its fullest potential. History will remember it not because it is the only attention formula, but because it proved a principle: teaching a model to allocate its own attention opens the ceiling of capability more than simply feeding it more data.

---

*This entry was compiled by the Endfield Industrial Chronicle team: Muirsey (systems modeling).*

---

[^1]: Cho et al., "Learning Phrase Representations using RNN Encoder–Decoder for Statistical Machine Translation", EMNLP 2014 / arXiv:1406.1078. https://arxiv.org/abs/1406.1078
[^2]: Sutskever, Vinyals, Le, "Sequence to Sequence Learning with Neural Networks", NeurIPS 2014 / arXiv:1409.3215. https://arxiv.org/abs/1409.3215
[^3]: Bahdanau, Cho, Bengio, "Neural Machine Translation by Jointly Learning to Align and Translate", ICLR 2015 / arXiv:1409.0473, 2014-09-01. https://arxiv.org/abs/1409.0473
[^4]: Luong, Pham, Manning, "Effective Approaches to Attention-based Neural Machine Translation", EMNLP 2015 / arXiv:1508.04025, 2015-08-17. https://arxiv.org/abs/1508.04025
[^5]: Vaswani et al., "Attention Is All You Need", NeurIPS 2017 / arXiv:1706.03762, 2017-06-12. https://arxiv.org/abs/1706.03762
[^6]: Dao et al., "FlashAttention: Fast and Memory-Efficient Exact Attention with IO-Awareness", NeurIPS 2022 / arXiv:2205.14135. https://arxiv.org/abs/2205.14135
[^7]: Dao, "FlashAttention-2: Faster Attention with Better Parallelism and Work Partitioning", arXiv:2307.08691, 2023-07-17. https://arxiv.org/abs/2307.08691
[^8]: Shah et al., "FlashAttention-3: Fast and Accurate Attention with Asynchrony and Low-Precision", arXiv:2407.08608, 2024-07-11. https://arxiv.org/abs/2407.08608
