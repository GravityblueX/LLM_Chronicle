# The Biography of FlashAttention

> FlashAttention did not invent a new attention formula, but it made existing formulas truly runnable on long sequences. Its story is not "we came up with a better attention mechanism" — it is "we understood how data flows inside the GPU, then rewrote the algorithm." This is a micro-biography of IO-aware computing.

---

## I. Technical Background: The memory wall of standard attention

The core computation of self-attention is `softmax(QK^T / √d_k)V`. This formula is clean and powerful, but has a hard problem: Q and K are both `[N, d]` matrices, and QK^T produces an `[N, N]` result — the square of the sequence length. At N=2048 the matrix has 4M elements, which is manageable. At N=32K, it has 1B elements. At N=128K, over 16B. Not to mention ViT's high-resolution inputs and long video patch sequences.

The problem is not just computational cost. The problem lies in the GPU's **memory hierarchy**. A typical implementation of standard attention follows this flow:

- Read Q and K from HBM (high-bandwidth memory) to on-chip SRAM
- Compute S = QK^T, then write the full `[N, N]` intermediate matrix **back to HBM** (because SRAM cannot hold large matrices)
- Read S back from HBM, compute P = softmax(S), then write **back to HBM** again
- Read P back from HBM, compute O = PV, then write back

HBM bandwidth is large (A100: ~2 TB/s), but on-chip SRAM bandwidth is even larger (~19 TB/s), with much lower latency. Every write-and-read of the intermediate matrix to and from HBM incurs I/O overhead. As N grows, the HBM read/write volume expands with N², and computation becomes I/O-bound — this is the memory-bound problem.

When the Transformer paper was published (2017), people used sequence lengths of a few hundred tokens, and N² was not yet catastrophic. By 2021–2022, GPT-3's context had reached 2048, and long-text understanding, high-resolution images, and protein sequences were all pushing N higher, making the memory wall increasingly apparent.

---

## II. Core Innovation

### 2.1 FlashAttention-1: Tiling, incremental, no disk writes

In May 2022, Tri Dao (Stanford), Dan Fu, Stefano Ermon, Atri Rudra, and Christopher Ré published FlashAttention. The core insight in one sentence: **do not write the full S and P back to HBM**.[^1]

How? Three key techniques:

**Tiling**. Cut Q, K, and V into small blocks, computing softmax for one block at a time within SRAM. An outer loop iterates over blocks of Q, and an inner loop iterates over blocks of K and V. After completing each inner loop, that block's output O is fully computed.

**Incremental softmax**. Standard softmax requires knowing the maximum value of the entire row for numerically stable computation; after tiling, a row is split into multiple segments. FlashAttention uses incremental updates: for each new block, it uses an online algorithm to update the row maximum and the sum of exponentials, guaranteeing that the final result is mathematically identical to computing the full row at once — no loss in numerical precision.

**Recomputation**. Backward propagation normally requires storing the forward-pass intermediate results (S and P matrices) to compute gradients. FlashAttention does not store S and P — during the backward pass, it reads Q, K, V, and the forward output O directly from HBM and recomputes the softmax process in SRAM. HBM storage access drops from O(N²) to O(N).

The combined effect of these three techniques:

- **Speedup**: Standard attention is 2–4× slower than FlashAttention (3× speedup reported on GPT-2)
- **Memory savings**: Memory usage drops from O(N²) to O(N); intermediate memory for GPT-2 reduced by approximately 13×
- **Numerical equivalence**: This is not approximate attention — it is exact attention, matching standard implementation at the bit level

Dao demonstrated in the paper that training GPT-2 with FlashAttention was 3× faster than the original HuggingFace implementation, and the training loss curves overlapped exactly.[^1]

FlashAttention's historical role is unique. It did not propose a new attention formula, but it changed the **feasibility** of attention. Whether an O(N²) algorithm can run on long sequences depends not only on whether the formula is elegant but also on whether the implementation is IO-aware.

### 2.2 FlashAttention-2: Better parallelism and work partitioning

In July 2023, Tri Dao published FlashAttention-2 as a sole author. The paper's title was direct: "Faster Attention with Better Parallelism and Work Partitioning."[^2]

FA-2's main improvements:

**Reducing non-matrix-multiplication FLOPs**. FA-1's pseudocode contained some rescaling and masking operations that consumed significant instruction cycles but could be mathematically rearranged. FA-2 merged the rescaling inside softmax into the matrix multiplication loop, reducing non-matmul overhead.

**Optimized parallelism strategy**. FA-1 parallelized only along the batch and head dimensions; the sequence length dimension was serialized. FA-2 added parallelism along the sequence length — row-wise parallelism in the forward pass, column-wise in the backward pass — improving GPU utilization for large N scenarios.

**Better work partitioning**. FA-1 used fixed-size blocks; FA-2 dynamically distributes more uniform workloads across thread blocks.

Results: approximately 2× speedup in both forward and backward passes; sequence length can be pushed to 64K; on A100, it achieves approximately 73% of theoretical peak throughput.

FA-2 was integrated into PyTorch 2.0 as one of the default backends for `torch.nn.functional.scaled_dot_product_attention` — this was the critical step for mainstream adoption. Most developers do not need to invoke FlashAttention manually; PyTorch automatically dispatches to it when conditions are met.

### 2.3 FlashAttention-3: Hardware-specific optimization for new GPUs

In July 2024, Shah, Dao et al. published FlashAttention-3, targeting the new capabilities of the NVIDIA Hopper (H100) architecture.[^3]

New capabilities brought by Hopper:

- **WGMMA** (Warp Group Matrix Multiply-Accumulate): More efficient matrix multiplication instructions than the previous generation of Tensor Cores
- **TMA** (Tensor Memory Accelerator): A hardware unit for asynchronous data loading that can move data from HBM to SRAM while computation proceeds simultaneously
- **FP8**: 8-bit floating-point format, saving more VRAM and bandwidth than BF16/FP16

FA-3's design tightly revolves around these three features:

- WGMMA for tiled matrix multiplication, maximizing Tensor Core utilization
- TMA for asynchronous data prefetching, fully overlapping data transfer with computation to eliminate I/O waits
- Maintaining high precision on the FP8 data path — GEMM uses FP8, while softmax and accumulation maintain FP32, ensuring numerical accuracy does not degrade from low precision

Results: 1.5–2.0× faster than FA-2 on H100; achieving 75% (FP16) and 67% (FP8) of theoretical peak FLOPS on H100 benchmarks. The paper also demonstrated that with FP8, KV cache can be compressed 4–8× — a significant relief for memory pressure during large model inference.

By FA-3, FlashAttention was no longer just "accelerating attention." It became a paradigm of **algorithm-hardware co-design**: when a new GPU arrives, the algorithm is rewritten to match its hardware characteristics, extracting every ounce of potential from each generation of hardware.

### 2.4 Key data

| Version | Date | Core improvement | Speedup | Historical role |
|---------|------|------------------|---------|-----------------|
| FlashAttention-1 | 2022-05 | Tiling + incremental softmax + recomputation | 2–4× vs. standard GPT-2 | First to prove exact attention can be IO-aware |
| FlashAttention-2 | 2023-07 | Parallelism improvements + reduced non-matmul FLOPs | ~2× vs. FA-1 | Became PyTorch's default attention backend |
| FlashAttention-3 | 2024-07 | H100 WGMMA + TMA + FP8 | 1.5–2× vs. FA-2 | Benchmark for hardware co-design |

---

## III. Impact and Successors

### 3.1 Long context is no longer a luxury

FlashAttention's most direct impact was making long-context training go from "possible but expensive" to "business as usual." GPT-4's 128K, Claude's 200K, and Gemini's 1M context windows all depend on efficient attention implementations at the foundation.

Llama 3.1 405B's training report mentions FlashAttention-2 and vLLM's PagedAttention as key components.[^4] This is not to say that FlashAttention invented long context — architectural improvements, positional encoding, and fine-tuning data are equally important — but without it, training and inference with 128K+ windows would exhaust HBM.

### 3.2 IO-aware computing becomes a design paradigm

FlashAttention's other legacy is the spread of a way of thinking. It told system architects and hardware engineers: between an algorithm's "theoretical complexity" and its "actual efficiency" lies the memory hierarchy. Without understanding how data flows between HBM ↔ SRAM ↔ Register, optimization is merely hyperparameter tuning.

Many subsequent works continued the IO-aware approach:

- **Flash-Decoding**: Parallelizes attention computation of a single query against the KV cache in tiled fashion, solving the low GPU utilization problem during long-sequence inference.
- **PagedAttention / vLLM**: Divides the KV cache into pages and manages VRAM like an operating system manages virtual memory, reducing fragmentation.
- **FlashInfer**: Uses more flexible kernel fusion and scheduling to uniformly handle different attention variants and sampling strategies.

Not all of these are called FlashAttention, but they all inherit its core belief: **only when it runs efficiently on hardware do theory and engineering truly connect**.

### 3.3 Complementarity with other attention optimizations

FlashAttention did not replace sparse attention or linear attention but complemented them.

Sparse attention (e.g., Sliding Window, Longformer) theoretically reduces computation; FlashAttention reduces I/O in implementation. The two paths can be combined: Sliding Window already builds in sparsity, and using FlashAttention's block-sparse implementation on top of it yields even greater efficiency.

Linear attention and state space models (e.g., Mamba, RWKV, RetNet) attempt to reduce complexity to O(N) or O(N log N) at the formula level, aiming to bypass the N² bottleneck entirely for very long sequences. While FlashAttention reduces the constant in N², it does not change the order of complexity. The relationship between these approaches in 2024–2025 is both competitive and complementary: SSM approaches have theoretical advantages on extremely long sequences, but FlashAttention keeps attention as the most mature choice for "long but not extreme" sequences.

### 3.4 Fading or being absorbed

By 2026, the FlashAttention series has been deeply integrated into mainstream frameworks' foundations, and users rarely call it directly — PyTorch, vLLM, TensorRT-LLM, and HuggingFace Transformers have all built it in or adopted its variants. Being absorbed is itself a success: an optimization that went from paper to default implementation.

Its name may no longer appear frequently in product announcements, but every long-context training and inference session uses it quietly. FlashAttention's ultimate legacy is not any particular line of code, but a sentence: **Those who write algorithms must see the water flowing inside the hardware~**

---

## Commentary

FlashAttention's historical position lies not in the attention formula, but in bridging the gap between attention and real-world hardware.

Standard attention's theory is clean, but in practice, the N² intermediate matrix of long sequences overwhelms GPU memory and bandwidth. Tri Dao did not change the mathematics — he decomposed the computation into tiles, kept data in fast SRAM, and used incremental softmax to preserve precision. These three things turned long context from a laboratory capability into something every model can do.

Its influence extends beyond attention. Many subsequent efficient inference and training works — PagedAttention, Flash-Decoding, vLLM — all followed the path of "figuring out how data moves between HBM and SRAM." FlashAttention-3 further proved: every time a new hardware architecture appears, algorithms must be rewritten to extract the hardware's full potential. This is the threshold from pure algorithm research to algorithm-hardware co-evolution — and FlashAttention stands guard~

---

*This entry was compiled by the Endfield Industrial History Team: Mizuusei (Systems Modeling).*

---

(Related entries: *Inference Optimization*.)

[^1]: Dao et al., "FlashAttention: Fast and Memory-Efficient Exact Attention with IO-Awareness", NeurIPS 2022 / arXiv:2205.14135. https://arxiv.org/abs/2205.14135
[^2]: Dao, "FlashAttention-2: Faster Attention with Better Parallelism and Work Partitioning", arXiv:2307.08691, 2023-07-17. https://arxiv.org/abs/2307.08691
[^3]: Shah et al., "FlashAttention-3: Fast and Accurate Attention with Asynchrony and Low-Precision", arXiv:2407.08608, 2024-07-11. https://arxiv.org/abs/2407.08608
[^4]: Dubey et al., "The Llama 3 Herd of Models", arXiv:2407.21783, 2024-07-31. https://arxiv.org/abs/2407.21783
