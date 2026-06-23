# The Biography of Megatron-LM

> Megatron-LM is not a large model — it is an engineering framework that makes large models "trainable." At a time when GPT-2 had only 1.5B parameters and BERT-large had only 340M, Megatron-LM proved that through clever model partitioning, Transformer parameter counts could be pushed to the tens of billions and even hundreds of billions. It transformed parallel training from "buy more GPUs when one isn't enough" into a discipline with both theory and implementation.

---

## I. Technical Background

After BERT and GPT in 2018, the direction was clear: bigger models perform better. But training a large model is far more than just "making the parameter matrix bigger."

A single GPU has limited memory. The V100 of 2018 had 32 GB of VRAM, and a medium-sized Transformer's optimizer states (Adam requires storing first and second moments plus gradients), activations, and parameters themselves could easily exceed that amount. Reducing batch size could help, but a batch that is too small would leave the GPU underutilized.

The parallelism methods available at the time each had limitations:

- **Data Parallelism**: Every GPU holds the complete model, with data split across GPUs. The all-reduce communication volume equals the parameter count times the number of GPUs; as the GPU count grows, communication explodes.
- **Pipeline Parallelism**: The model is split into segments by layers, each segment placed on a different GPU. Naive implementations suffer from large "bubbles" — GPUs idling while waiting for the previous segment's output.

In 2018–2019, OpenAI trained GPT-2 1.5B on 32 GPUs, and Google trained BERT on TPU pods. But how to efficiently train larger Transformers on general-purpose GPU clusters had no systematic open-source solution. NVIDIA's Megatron-LM emerged precisely to fill this gap.

---

## II. Core Innovation

### 2.1 Megatron-LM v1: Partitioning attention and FFN along model parallel dimensions

In September 2019, Shoeybi et al. published "Megatron-LM: Training Multi-Billion Parameter Language Models Using Model Parallelism."[^1]

The paper's core idea was not to propose a new form of parallelism but to find the partitioning strategy most suited to the Transformer's internal structure:

- **Partitioning attention heads**. Each head in multi-head attention is naturally independent — the Q, K, V projection matrices can be split along the "number of heads" dimension, with each GPU holding a subset of heads. After computation, each GPU only needs to perform one all-reduce along the column dimension of the output projection matrix.
- **Partitioning the FFN's two layers**. The FFN has the structure `W₂(GeLU(W₁x))`. Megatron splits W₁ along columns and W₂ along rows. This way, both the input and output of GeLU are computed locally without communication; only a single all-reduce is needed at the end.

The key advantage of this scheme: **communication occurs only once at the end of each attention and FFN block**, while the bulk of intermediate computation is entirely local. Compared to data parallelism's per-layer all-reduce, communication volume drops dramatically.

The paper used this scheme to train an 8.3B-parameter GPT-2-style language model on 8 V100s (32 GB each), and a model with 8.3 billion parameters on 512 V100s, demonstrating performance improvements on benchmarks including Wikitext-103, LAMBADA, and RACE.

Megatron-LM v1's historical role: **the first demonstration that model parallelism can linearly scale Transformer parameter counts without modifying the model architecture.** It did not push the problem to bigger GPUs but used mathematically equivalent transformations to split matrices across multiple GPUs.

### 2.2 Megatron-LM v2: Fusing tensor parallelism and pipeline parallelism

In 2020, Narayanan et al. proposed Megatron-LM v2, combining tensor parallelism (TP) and pipeline parallelism (PP) into a unified parallelism strategy.[^2]

- **Tensor Parallelism (TP)** is the v1 approach: splitting matrix operations within a single layer, with communication completed within the layer. Advantages: high efficiency, low latency; disadvantages: communication volume scales with GPU count, best suited for NVLink-connected intra-node setups.
- **Pipeline Parallelism (PP)**: Splitting the model into segments by layers, each segment on a different GPU. v2's key improvement was the **1F1B (one-forward-one-backward) schedule** — instead of completing all forward passes then all backward passes, it interleaved them: after a micro-batch's forward pass, immediately start the next micro-batch's forward and the previous micro-batch's backward, reducing pipeline bubbles.

v2 also introduced the **interleaved pipeline**, where each GPU processes not consecutive layers but scattered layer chunks (e.g., GPU 1 handles layers 1, 2, 9, 10; GPU 2 handles layers 3, 4, 11, 12). This distributes workloads more evenly across GPUs, reducing bubbles.

The combined strategy: TP within nodes (high-bandwidth NVLink can handle the communication), PP across nodes (small cross-node communication volume). Each form of parallelism handles the communication granularity it is best suited for.

Megatron-LM v2 demonstrated on A100 clusters that 1T-parameter models could be efficiently trained across thousands of GPUs, pushing theoretical efficiency (model FLOPS utilization) above 50%.

### 2.3 Megatron-LM v3: Sequence parallelism and other optimizations

In 2021, Korthikanti et al. published Megatron-LM's third major technical report, focusing on additional techniques for reducing VRAM consumption.[^3]

- **Sequence Parallelism (SP)**: Building on tensor parallelism, also splitting the activations of layer norm and dropout along the sequence length dimension. Since these operations scale with sequence length, significant memory savings result in large batch / long sequence scenarios. Combined with TP's existing communication patterns, this only requires adding one all-gather and one reduce-scatter before and after layer norm.
- **Selective Activation Recomputation**: Only recomputing operations with large memory footprints (such as attention softmax and dropout), without recomputing compute-heavy operations (such as GEMM), striking a balance between memory and speed.

These optimizations allowed Megatron-LM to train larger models or longer sequences within the same memory budget. The paper reported that combining TP, SP, and selective recomputation saved approximately 5× memory compared to pure TP alone, with minimal impact on training speed.

### 2.4 Megatron-Turing NLG: The proof of concept at hundred-billion scale

In late 2021, NVIDIA and Microsoft jointly released Megatron-Turing NLG 530B — a 530-billion-parameter language model trained using the Megatron-LM framework together with Microsoft's DeepSpeed on NVIDIA Selene and Azure NDv4 clusters.[^4]

MT-NLG was one of the largest publicly known dense language models at the time. The paper particularly emphasized training stability — using Megatron's parallelism strategy and training process monitoring to stably train the 530B-parameter model across thousands of A100s, and reporting zero-shot/few-shot performance exceeding GPT-3 175B.

This was also Megatron-LM's "proof of capability": not a paper design, but actually training a 530B dense model to completion.

### 2.5 Key data

| Version / Event | Date | Core contribution | Historical role |
|-----------------|------|-------------------|-----------------|
| Megatron-LM v1 | 2019-09 | Splitting along attention heads + FFN column/row | First efficient tensor parallelism designed for Transformers |
| Megatron-LM v2 | 2020 | TP + PP fusion, 1F1B scheduling, interleaved pipeline | Enabled efficient hundred-billion-parameter training across thousands of GPUs |
| Megatron-Turing NLG | 2021-10 | Successful training of 530B dense model | Proved the framework could carry the largest dense model of its era |
| Megatron-LM v3 | 2021 | Sequence parallelism + selective activation recomputation | Further compressed memory, enabling larger models / longer sequences |

---

## III. Impact and Successors

### 3.1 The default parallelism toolbox for large model training

By 2026, Megatron-LM's tensor parallelism ideas had become a standard component of virtually every large model training framework.

- **DeepSpeed**: Microsoft's ZeRO optimization primarily optimizes memory at the data parallelism level (partitioning optimizer states, gradients, parameters), complementing Megatron's tensor parallelism. In practice, large-scale training commonly uses the combination of Megatron-style TP + DeepSpeed ZeRO.
- **Colossal-AI**: Offers more flexible tensor parallelism abstractions, including 2D, 2.5D, and 3D parallelism, but its 1D parallelism shares the same lineage as Megatron's TP.
- **PyTorch FSDP + TP**: PyTorch's 2.x versions built in both FSDP (similar to ZeRO-3) and tensor parallelism, with API design influenced by Megatron.
- **Megatron-Core**: NVIDIA extracted Megatron-LM's core components into the independent Megatron-Core library, which serves as the underlying training engine for the NeMo framework and is one of the training infrastructures for models like Llama 3 and Nemotron.

### 3.2 The combinatorial theory of parallelism strategies

Megatron-LM's most important intellectual legacy is the idea that **"parallelism is not just one thing."** It taught the industry: DP (data parallelism), TP (tensor parallelism), PP (pipeline parallelism), and SP (sequence parallelism) are four different weapons, each suited to different communication bandwidths and model structures. The optimal strategy is not choosing one but combining them — TP within nodes, DP or PP across nodes, dynamically adjusted based on model size and hardware topology.

This "parallel dimension space" way of thinking is more enduring than any single implementation. Every subsequent large model training scheme (whether GPT-4, Llama 405B, or DeepSeek-V3) searches for its optimal point within this dimensional space.

### 3.3 Dialogue with MoE

Megatron-LM was originally designed for dense Transformers. But with the rise of MoE, the framework adapted. MoE's multiple experts naturally combine well with tensor parallelism — each expert's FFN can be independently partitioned, while the router and attention layers have communication patterns similar to dense models.

Both Megatron-Core and DeepSpeed-MoE use similar parallelism strategies for MoE expert distribution. One could say that Megatron paved the road for MoE's system-level deployment in advance.

### 3.4 Absorbed rather than maintaining boundaries

Megatron-LM as an independent open-source project is still maintained, but its core ideas have been more broadly absorbed. Tensor Parallelism is no longer "NVIDIA's proprietary method" but a foundational option in PyTorch and every large model training codebase.

Frameworks tend to have shorter lifespans than models. Megatron-LM's historical position lies precisely in the fact that it solved not the problem of any particular model, but the general problem of "how to partition Transformers." As long as Transformers endure, the methods for partitioning them will continue to evolve along the path Megatron opened~

---

## Commentary

Megatron-LM's contribution was to transform large model training from "buy bigger GPUs" to "use clever partitioning to run across a group of GPUs."

Before this, models could not scale because a single GPU could not hold them. Data parallelism communication was too heavy; naive pipeline parallelism had bubbles that were too large. Megatron found the natural partitioning seams inside the Transformer — attention heads are naturally parallelizable, the FFN's multiplications and activation functions are naturally separable — and then used tensor parallelism to slice matrices along these seams.

Its enduring influence lies not in any particular version of code, but in one insight: **the model's mathematical structure contains the key to parallelism; find the key, and hardware does not need to expand alongside parameters.** From 8.3B in 2019 to 530B and eventually trillion-parameter models, every scale-up has Megatron's approach in its shadow. It did not invent parallelism — but it was the first to turn parallelism into reusable, composable, model-structure-symbiotic training primitives~

---

*This entry was compiled by the Endfield Industrial History Team: Mizuusei (Systems Modeling).*

---

[^1]: Shoeybi et al., "Megatron-LM: Training Multi-Billion Parameter Language Models Using Model Parallelism", arXiv:1909.08053, 2019-09-17. https://arxiv.org/abs/1909.08053
[^2]: Narayanan et al., "Efficient Large-Scale Language Model Training on GPU Clusters Using Megatron-LM", SC 2021 / arXiv:2104.04473. https://arxiv.org/abs/2104.04473
[^3]: Korthikanti et al., "Reducing Activation Recomputation in Large Transformer Models", MLSys 2023 / arXiv:2205.05198. https://arxiv.org/abs/2205.05198
[^4]: Smith et al., "Using DeepSpeed and Megatron to Train Megatron-Turing NLG 530B, A Large-Scale Generative Language Model", arXiv:2201.11990, 2022-01-28. https://arxiv.org/abs/2201.11990
