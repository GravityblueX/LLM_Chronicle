# The Biography of MoE

> MoE (Mixture of Experts) is not a single model — it is a trajectory that decouples "total parameter count" from "per-token computation." Its idea is straightforward: place many experts in the model, but for each token only a few experts are activated. This way, the model can possess vast knowledge capacity without computing all parameters during every inference pass.

---

## I. Technical Background

The early scaling trajectory for large models was direct: more parameters, more data, more compute. Transformers proved this path viable, and GPT-3 pushed it into industry consensus. But dense models face a hard problem: the larger the model, the more parameters each token passes through, and training and inference costs rise together. Parameter count, memory, communication, and latency are like water levels in the same river — rising simultaneously.

MoE addresses precisely this contradiction. It does not ask "can we keep making it bigger?" but rather "can we activate only a small portion for each computation?" This resembles human organizations: a research institute may have many departments, but not every problem requires assembling everyone; ecology questions go to ecology experts, materials questions to materials experts. The same holds for models: split the feed-forward network into multiple experts, then use a gating network to decide which expert should handle the current token.

The concept of mixture of experts is not new. As early as 1991, Jacobs, Jordan et al. proposed Adaptive Mixtures of Local Experts, using a gating network to route different inputs to different experts.[^1] At that time, it was not yet a scaling weapon for large language models but rather a divide-and-conquer machine learning structure.

What truly bound MoE to large model scaling was Google's sparsely-gated MoE in 2017. Shazeer et al. placed expert layers into large-scale neural networks, activating only a few experts per sample, and reported obtaining greater model capacity with less computation in machine translation and language modeling.[^2] From this point onward, MoE's historical theme became clear: not for elegant categorization, but for continued expansion in the face of computational walls.

---

## II. Core Innovation

### 2.1 Sparse experts: many parameters, but only a few used each time

MoE's core is sparse activation. In an ordinary Transformer, the feed-forward layer is dense: every token passes through the same FFN. MoE replaces this FFN with many "expert" FFNs, and a router or gating network assigns experts to each token. Common approaches are top-1 or top-2 routing: each token is sent to only the one or two highest-scoring experts.

This decouples "model size" from "computation cost." An MoE model can have tens of billions, hundreds of billions, or even more total parameters, but each token activates only a small fraction. In other words, total parameter count represents model capacity, while activated parameter count represents the actual computation per inference.

This is not a free lunch. The router must learn to distribute traffic, expert loads must be balanced, and during distributed training tokens must be routed to experts on different devices. MoE's difficulty lies not in formulas but in systems: if certain experts are always overloaded while others sit idle, the model slows down, degrades, or even becomes unstable during training.

### 2.2 GShard: turning MoE into a sharded industrial training system

In 2020, Google proposed GShard, combining MoE with automatic sharding, targeting the training of massively multilingual translation models on TPU clusters. GShard used sparse gating expert layers together with SPMD partitioning, allowing model parameters, experts, and data to be distributed across devices. The paper reported a 600B-parameter multilingual neural machine translation model, with each token activating only a few experts.[^3]

GShard's historical role was not coining the word "expert" but pushing MoE from a model trick to a systems engineering problem. Once MoE scales up, the question is no longer just "which expert is more suitable" but also: which chips hold the experts, how tokens communicate across devices, how batches are partitioned, how loads are balanced, and how the compiler automatically generates distributed execution plans.

This point is crucial. Every subsequently usable large-scale MoE must be simultaneously a model and a system. Without distributed routing, capacity control, and communication optimization, MoE is merely a beautiful but silted water network — the water molecules know where to flow, but the channels cannot bear the load.

### 2.3 Switch Transformer: simplifying top-2 to top-1

In 2021, Google released Switch Transformer. It performed a seemingly conservative but actually critical simplification: each token routes to only one expert — top-1 routing. This reduces communication and computation, making MoE easier to scale. The paper reported models up to 1.6T parameters and claimed pre-training speed more than 7× faster than T5-Base under the same compute budget.[^4]

Switch Transformer's significance was in lowering MoE's engineering barrier. Early MoE commonly used top-2 routing, which was more stable but more complex in communication and merging. Switch said: better to have each token find one fewer expert if it makes the system simpler, faster, and more scalable.

It also exposed MoE's typical tension: the sparser the routing, the more computation is saved, but the more direct the loss when expert selection errs; the richer the routing, the more stable the effect, but the heavier the system burden. Many subsequent MoE variations are adjustments within this seam.

### 2.4 Mixtral: the open-source community's first real taste of MoE's sweetness

In December 2023, Mistral AI released Mixtral 8x7B. It is a sparse MoE: each layer has 8 experts, with each token selecting 2; total parameters approximately 46.7B, but each token uses only about 12.9B parameters. Mistral claimed Mixtral surpasses Llama 2 70B on most benchmarks, with inference speed approximately 6× faster.[^5]

Mixtral's position is unique. GShard and Switch demonstrated MoE's ceiling but remained distant from ordinary developers; Mixtral brought MoE into the open-source model ecosystem. For the first time, people could relatively easily download, quantize, deploy, and fine-tune a powerful MoE language model and see firsthand the practical benefits of "large total parameters, smaller activated parameters."

It also changed the tone of open-source model competition. Previously, people asked: 7B, 13B, 70B — who is stronger? After Mixtral, the question became: how to balance total parameters, activated parameters, number of experts, routing strategy, memory usage, and throughput? MoE transformed model scale from a one-dimensional number into a multi-dimensional design.

### 2.5 DeepSeekMoE and DeepSeek-V2: finer-grained expert division

DeepSeekMoE's approach was not simply stacking more experts but making expert specialization finer. The DeepSeekMoE paper proposed fine-grained expert segmentation and shared expert isolation: some experts serve as shared experts handling general knowledge, while others serve as routed experts handling more specialized knowledge. This preserves common capabilities while giving specialized capabilities room to grow.[^6]

In May 2024, DeepSeek-V2 was released. It adopted an MoE architecture combined with MLA (Multi-head Latent Attention), aiming to simultaneously reduce training costs and inference KV cache. Official documentation states DeepSeek-V2 has 236B total parameters with 21B activated per token; API prices also dropped significantly due to structural optimizations.[^7]

DeepSeek-V2's historical role was pushing MoE from "research-scalable" to "commercially affordable." If Switch cared about training scalability, Mixtral cared about open-source usability, then DeepSeek-V2 cared about a different practical channel: whether a strong model can serve externally at low cost and high throughput. Subsequently, DeepSeek-V3, R1, and other models continued to use and develop MoE, making the DeepSeek series a significant force in the 2024–2025 open-source and open-weight model competition.[^8]

### 2.6 Key data

| Model/Work | Date | MoE design | Historical role |
|------------|------|------------|-----------------|
| Adaptive Mixtures of Local Experts | 1991 | Gating network assigns local experts | Proposed the early framework of "multiple experts + gating"[^1] |
| Sparsely-Gated MoE | 2017 | Sparse gating, activating few experts per token | Connected MoE to large-scale neural network scaling[^2] |
| GShard | 2020 | MoE + automatic sharding, 600B translation model | Made MoE a distributed systems training problem[^3] |
| Switch Transformer | 2021 | Top-1 routing, up to 1.6T parameters | Simplified routing to reduce ultra-large MoE scaling difficulty[^4] |
| Mixtral 8x7B | 2023 | 8 experts, 2 selected per token | Brought practical MoE to the open-source community at scale[^5] |
| DeepSeekMoE | 2024 | Fine-grained experts + shared expert isolation | Emphasized coexistence of expert specialization and shared capabilities[^6] |
| DeepSeek-V2 | 2024 | 236B total / 21B activated parameters | Demonstrated the MoE route for low-cost strong model serving[^7] |

---

## III. Impact and Successors

### 3.1 MoE changed what "parameter count" means

After MoE, simply stating "how many parameters does this model have" became insufficient. A 200B MoE and a 200B dense model may have completely different inference costs. The former might activate only twenty to thirty billion parameters per token; the latter must compute all parameters.

Thus MoE forced the industry to distinguish several numbers: total parameters, activated parameters, number of experts, experts selected per token, training FLOPs, inference throughput, and memory usage. Total parameters are like forest area; activated parameters are like the actual path walked each time. A large forest means many species, but the ground you step on at any given moment is limited.

This is also MoE's most easily misunderstood aspect. The enormous total parameter count in marketing materials is attractive, but whether a model is actually useful depends on routing training, expert utilization, data quality, context length, post-training, and inference systems. MoE gave new freedom in scaling, but also gave new room for metric packaging.

### 3.2 From training scaling to inference economics

Early MoE primarily addressed training scaling questions: how to fit more parameter capacity under fixed compute. By 2023–2025, it increasingly became an inference economics question: when user requests surge, how to provide a stronger model at lower cost.

Mixtral showed open-source deployers that MoE can deliver near-large-model capability with relatively manageable activation costs. DeepSeek-V2 pushed this further into API pricing and serving efficiency. For model companies, inference cost is not a secondary concern — it is the business model itself. Each token being slightly cheaper means a completely different financial structure at million-user scale.

Thus MoE's historical role is not merely "making models bigger." What it truly changed is the economic structure of scaling: capability growth need not always come at the cost of proportionally increased per-token computation.

### 3.3 Expert division brings new interpretability possibilities — and new system risks

MoE naturally evokes the idea of "different experts inside the model." This creates interpretability temptations: can we observe certain experts specializing in code, others in math, others in multilingual tasks? Indeed, expert specialization sometimes produces observable preferences, but it is not a human department chart. Experts are shaped jointly by gradients and routing, and do not necessarily organize along humanly named disciplinary boundaries.

Risks also increase. The router may develop bias; experts may collapse; a few overloaded experts can slow down an entire batch; during distributed inference, cross-GPU communication may eat up the savings from sparse computation. MoE is like a water network: the more tributaries, the greater the capacity, but the more critical the gates, pump stations, and channel scheduling become. Talking only about experts without discussing scheduling means missing the system.

### 3.4 Absorbed, not replacing Transformers

MoE did not replace Transformers. It is typically embedded within Transformers: attention layers process contextual relationships as usual, and MoE mostly replaces or extends the feed-forward layers. In other words, MoE is a capacity-expansion mechanism, not a complete new foundation.

By 2026, the frontier of large models rarely involves single-technology competition. Transformers, MoE, long context, retrieval augmentation, post-training, rule-based rewards, tool calling, and multimodal encoders are all woven into the same web. MoE's position is to make this web wider in capacity without immediately collapsing under cost.

It does not outperform dense models in all scenarios either. Small models, on-device models, low-latency scenarios, and communication-constrained scenarios still favor dense structures. MoE's strengths lie in large-scale training and serving, where the computation saved by sparse activation more than compensates for the complexity of routing and communication.

---

## Commentary

MoE's contribution was to change large model scaling from "all parameters firing together every time" to "many experts engaging on demand."

Its brilliance lies not in formulas but in rearranging the relationship between capacity and computation. GShard showed that MoE can enter ultra-large-scale distributed training; Switch Transformer simplified the system with top-1 routing; Mixtral brought MoE to the open-source community; DeepSeekMoE and DeepSeek-V2 demonstrated that expert specialization can serve the practical goals of lower cost and higher throughput.

But MoE is not magic. The computation it saves is partly reclaimed by routing, load balancing, communication, and engineering complexity. It also does not automatically bring truly "human-like" expert organization. History will remember MoE not because it gave models the name "expert" but because in an era of expensive compute and surging demand, it found a sparse form for large models to continue growing. Like the root system of a rainforest, the full picture is invisible from the surface, yet water can therefore reach far greater distances.

---

*This entry was compiled by the Endfield Industrial History Team: Mizuusei (Systems Modeling).*

---

[^1]: Jacobs, Jordan, Nowlan, Hinton, "Adaptive Mixtures of Local Experts", Neural Computation, 1991. https://www.cs.toronto.edu/~hinton/absps/jjnh91.pdf
[^2]: Shazeer et al., "Outrageously Large Neural Networks: The Sparsely-Gated Mixture-of-Experts Layer", arXiv:1701.06538, 2017. https://arxiv.org/abs/1701.06538
[^3]: Lepikhin et al., "GShard: Scaling Giant Models with Conditional Computation and Automatic Sharding", arXiv:2006.16668, 2020. https://arxiv.org/abs/2006.16668
[^4]: Fedus, Zoph, Shazeer, "Switch Transformers: Scaling to Trillion Parameter Models with Simple and Efficient Sparsity", arXiv:2101.03961, 2021. https://arxiv.org/abs/2101.03961
[^5]: Mistral AI, "Mixtral of experts", 2023-12-11. https://mistral.ai/news/mixtral-of-experts
[^6]: Dai et al., "DeepSeekMoE: Towards Ultimate Expert Specialization in Mixture-of-Experts Language Models", arXiv:2401.06066, 2024. https://arxiv.org/abs/2401.06066
[^7]: DeepSeek-AI, "DeepSeek-V2: A Strong, Economical, and Efficient Mixture-of-Experts Language Model", arXiv:2405.04434, submitted 2024-05-07. https://arxiv.org/abs/2405.04434 (original blog link expired; paper is the primary source)
[^8]: DeepSeek-AI et al., "DeepSeek-V3 Technical Report", arXiv:2412.19437, 2024. https://arxiv.org/abs/2412.19437
