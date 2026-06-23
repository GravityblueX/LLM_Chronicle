# Treatise: The Compute Shift

> The compute history of large models is not a smooth curve. It jumps by an order of magnitude every two or three years, and each leap transforms "this is impossible" into "this isn't enough." What follows is the ever-expanding line of GPU counts — from the Transformer's 8 P100s to Colossus's 200,000 H100s.

---

## I. Overview

In 2017, Vaswani et al. trained the Transformer model on a single machine with 8 NVIDIA P100 GPUs, using approximately 3.3 × 10¹⁸ FLOPs of training compute.[^1] This figure seems negligible today — a consumer-grade RTX 4090 could finish it in under an hour — but at the time, it was already considered "large-scale" training.

Seven years later, in 2024, xAI completed the Colossus cluster in Memphis, initially deploying 100,000 NVIDIA H100 GPUs, built from groundbreaking to power-on in just 122 days, with plans to expand to 200,000.[^11] Between these two numbers, GPU count grew by 25,000 times, and training compute leapt from the 10¹⁸ FLOPs tier to the 10²⁶ FLOPs tier.

This expansion curve was not uniform. It had three critical inflection points: GPT-3 pushed training clusters from "a few machines" to "a small data center"; after ChatGPT, clusters of tens of thousands of GPUs became the standard; and Colossus made "hundred-thousand GPU" clusters a reality. Each leap raised the threshold for "who can train frontier models" by another level.

The compute shift was not merely a hardware procurement issue. It altered the emergent capability boundaries of models (scaling laws), reshaped the cost structure of training economics, and transformed the geopolitical landscape of the AI industry — from "a few PhDs training models in a lab" to "a game only trillion-dollar companies or sovereign funds can play."

---

## II. 2017–2019: 8 GPUs on a Single Machine — GPUs as Lab Equipment

In 2017, the mainstream hardware for training large neural networks was NVIDIA P100 and V100. The P100 was based on the Pascal architecture (released in 2016), with FP16 compute of approximately 21 TFLOPS per card; the V100 was based on Volta (released in 2017), and with the introduction of Tensor Cores, its FP16 compute reached 125 TFLOPS — roughly a 6x jump.[^12]

The Transformer paper stated plainly: "We trained the model on a single machine with 8 NVIDIA P100 GPUs."[^1] Training the base model took 12 hours; the "big" model took 3.5 days. For the entire training process, 8 cards packed into a single machine sufficed.

BERT (2018) and GPT-2 (2019) did not break out of this order of magnitude either:

- BERT-Large was trained on 64 TPUv3 chips for 4 days, with approximately 1 × 10²⁰ FLOPs of training compute.[^2]
- GPT-2 (1.5B parameters) used 32 TPUv3 chips.[^13]

The compute characteristics of this era were clear: **a university lab or small startup team could afford it and use it**. Training at the scale of 4 to 64 GPUs required no specialized data center, no liquid cooling, and no dedicated power substation. AI training was essentially a "large experiment," not an "engineering project."

### Key Data

| Model | Year | Compute Setup | Training Compute (FLOPs) | GPU Generation |
|-------|------|---------------|--------------------------|----------------|
| Transformer | 2017 | 8×P100 | ~3.3 × 10¹⁸ | Pascal |
| BERT-Large | 2018 | 64 TPUv3 | ~1 × 10²⁰ | TPUv3 |
| GPT-2 1.5B | 2019 | 32 TPUv3 | ~1.5 × 10²¹ | TPUv3 |

*Note: FLOPs estimates are based on Epoch AI data.[^7]*

---

## III. 2020–2022: Scaling Laws and the Thousand-GPU Era

Two things happened in this phase that changed the game: scaling laws were discovered, and the A100 arrived.

### Scaling Laws: More Is Better — But How Much Is "More"?

In early 2020, Kaplan et al.'s scaling law paper provided a clear mathematical relationship: test loss decreases as a power law with model size, data volume, and compute.[^4] The curve's implication was straightforward — keep scaling up, and performance keeps rising. It turned "believe in scaling" from an intuition into a quantifiable proposition, and directly drove the budget decisions behind GPT-3.

### GPT-3: The First "Ordinary People Can't Afford This" Training Run

GPT-3 175B did not publish exact GPU counts, but its training compute was approximately 3.14 × 10²³ FLOPs — roughly 200 times that of GPT-2.[^3] OpenAI trained it on V100 GPU clusters via Microsoft Azure. Epoch AI estimated that, at cloud GPU prices of the time, the training compute cost alone was in the millions of dollars.[^7]

This was the first time a frontier model's training run produced the reality that "ordinary people can't afford to train this." Not "technically impossible," but "financially impossible."

### A100: Hardware Caught Up with Ambition

The NVIDIA A100, based on the Ampere architecture, was released in May 2020. FP16 compute reached 312 TFLOPS — about 2.5x the V100 — and more importantly, it introduced Multi-Instance GPU (MIG) and structural sparsity support, dramatically improving training efficiency.[^14] The A100 became the de facto standard for AI training from 2020 to 2023.

### PaLM and Chinchilla: Two Paths

In 2022, two different compute deployment paths emerged:

- **PaLM 540B**: Google trained it on 6,144 TPUv4 chips, with approximately 2.5 × 10²⁴ FLOPs of training compute — the extreme example of the parameter-scaling path.[^6]
- **Chinchilla 70B**: DeepMind's Hoffmann et al. published the Chinchilla scaling law, arguing that previous models were "underfed" — compute should be allocated at a 20:1 ratio (training tokens to parameters). Chinchilla 70B was trained on TPUv4 with approximately 5.6 × 10²³ FLOPs, but used several times more data than Gopher 280B.[^5]

The divergence between these two paths was not merely a technical choice — it was a bet: whether to pour compute into bigger models or into more data. Later models like Llama 3 and DeepSeek-V3 leaned toward the latter, with data volumes even exceeding Chinchilla's recommended ratios.

### Key Data

| Model | Year | Compute Setup | Training Compute (FLOPs) | GPU Generation |
|-------|------|---------------|--------------------------|----------------|
| GPT-3 175B | 2020 | ~10K V100 | ~3.14 × 10²³ | Volta |
| Gopher 280B | 2021 | TPUv3 | ~6.3 × 10²³ | TPUv3 |
| Chinchilla 70B | 2022 | TPUv4 | ~5.6 × 10²³ | TPUv4 |
| PaLM 540B | 2022 | 6144 TPUv4 | ~2.5 × 10²⁴ | TPUv4 |

---

## IV. 2023–2024: The Ten-Thousand-GPU Race — H100 as New Currency

After ChatGPT's release, the nature of the compute arms race changed. Before 2023, compute was a "research cost"; after 2023, compute became a "strategic investment." Clusters of tens of thousands of GPUs went from being news to being standard equipment at every frontier lab.

### H100: Impossible to Get

The NVIDIA H100, based on the Hopper architecture, was announced in 2022 and shipped at scale in 2023. FP16 compute was approximately 990 TFLOPS; with FP8 support and the Transformer Engine, actual training throughput was roughly 2–4 times that of the A100 (depending on workload).[^15] The H100 supply-demand imbalance was the most prominent hardware narrative of 2023 — wait times stretched to months, secondary market prices surged, and H100 cloud GPU instances billed by the hour became the scarcest compute resource.

### GPT-4: The Compute Peak Hidden Behind NDAs

OpenAI did not publish training compute details in the GPT-4 technical report, itself a sign that the compute race had entered its "opaque phase." SemiAnalysis and Epoch AI estimated GPT-4's training compute at approximately 2 × 10²⁵ FLOPs, using roughly 25,000 A100 GPUs over 90–100 days.[^7][^8] At cloud GPU prices, the training compute cost alone was estimated in the tens to hundreds of millions of dollars.

### Meta's 16K H100: Ten Thousand GPUs as the Threshold

In 2024, Meta publicly disclosed two GPU clusters, each containing 24,576 H100 GPUs, used for training Llama 3 405B.[^9] Llama 3 405B was trained on 16K H100s, with approximately 3.8 × 10²⁵ FLOPs of training compute — exceeding GPT-4's estimated figure.[^10]

Meta's disclosure was informative: they not only published GPU counts but also detailed cluster architecture — RoCE networking, multi-path routing, and load-balancing strategies.[^9] This effectively told the industry: a ten-thousand-GPU cluster is not as simple as "buy cards and connect them." Networking, cooling, power supply, and scheduling all require order-of-magnitude changes at every layer.

### DeepSeek-V3's "Low-Cost" Narrative

In late 2024, DeepSeek disclosed that V3's training consumed only 2.788M H800 GPU hours (approximately 2.788 million H800 GPU hours), estimated at roughly $5.57 million in training costs at H800 market prices.[^16] The shock this caused was not just about "why so cheap" — it was about "why everyone else is so expensive." If DeepSeek's training efficiency numbers were real, they implied that extreme optimization of large-scale InfiniBand + MoE architectures could dramatically reduce the training bill for frontier models.

But an important context must be added: the H800 is a downgraded H100 for the Chinese market (with halved interconnect bandwidth). DeepSeek's ability to reach frontier-level results under these constraints also highlighted the engineering ingenuity born of hardware restrictions.

### Key Data

| Model/Project | Year | Compute Setup | Training Compute (FLOPs) | Status |
|---------------|------|---------------|--------------------------|--------|
| GPT-4 | 2023 | ~25K A100 | ~2 × 10²⁵ (est.) | Undisclosed |
| Gemini Ultra | 2023 | TPUv5p | Undisclosed | Undisclosed |
| Llama 3 405B | 2024 | 16K H100 | ~3.8 × 10²⁵ | Public |
| DeepSeek-V3 | 2024 | 2048 H800 | ~2.788M GPU hrs | Public |

---

## V. 2024–2025: The Hundred-Thousand-GPU Cluster — Colossus and the Compute Spectacle

If the signature of 2023–2024 was "ten-thousand-GPU clusters," then the narrative inaugurated in the second half of 2024 was "can a hundred thousand GPUs actually be used?"

### Colossus: 122 Days, 100,000 H100s

In September 2024, Elon Musk announced on X that xAI had completed the Colossus cluster in Memphis: "From groundbreaking to power-on in just 122 days… Colossus is the most powerful AI training system in the world."[^11] Initial deployment: 100,000 H100 GPUs, with plans to expand to 200,000.

Key figures for Colossus:

- **Scale**: 100K H100s, single-site deployment. The previous public record was Meta's 2 × 24K H100 clusters.[^9]
- **Speed**: 122 days from zero to power-on — including site selection, power supply, cooling, network infrastructure, GPU installation, and software integration.
- **Expansion**: Musk stated it would double to 200K H100s (including H200s) within months.

Colossus's construction approach — rapid assembly in a repurposed factory building, temporary power from mobile generators — sparked controversy over environmental approvals and grid stability.[^17] But it also conclusively demonstrated one thing: a hundred-thousand-GPU cluster was no longer a purely theoretical problem — a company had actually built one.

### Stargate and Beyond

The "Stargate" project by Microsoft and OpenAI was an even grander narrative. In 2024, multiple media outlets reported that the two companies planned to invest over $100 billion in a multi-phase AI supercomputer, with Stargate being the codename for Phase 5 (post-2028).[^18] Although the exact GPU count was not disclosed, reports implied it would be a facility of several million GPUs.

This was no longer a question of "who can train frontier models" — it was a question of "who can afford a power-plant-scale compute facility."

### GPU Generation Evolution: B200 Arrives

NVIDIA announced the B200 (Blackwell architecture) at GTC in March 2024. The B200 combines two dies into one package, achieving 20 PFLOPS of FP4 compute — roughly 3–5 times the H100 (depending on precision and workload).[^19] With NVLink 5 and NVLink Switch interconnects, a single GB200 NVL72 rack contains 72 B200 GPUs and 36 Grace CPUs, totaling 1.44 EFLOPS of FP4 compute.

The compute density of this GPU generation alleviated some of the power anxiety around "hundred-thousand GPU" clusters — the number of GPUs needed for equivalent compute decreased significantly. But it also meant each GPU was more expensive, consumed more power per unit, and required greater cooling. In 2025, the large-scale deployment of B200 (including rumors that xAI plans to use B200s for Colossus expansion) will be the next major milestone in the compute shift.

### Key Data

| Project | Year | GPU Count | GPU Model | Notes |
|---------|------|-----------|-----------|-------|
| Meta dual cluster | 2024 | 2×24,576 | H100 | Publicly disclosed, used for Llama 3 [^9] |
| xAI Colossus | 2024-09 | 100,000 | H100 | Built in 122 days, Memphis [^11] |
| xAI Colossus expansion | 2025 | 200,000 | H100/H200/B200 | Phased expansion |
| MS/OpenAI Stargate | Target 2028+ | Undisclosed | Undisclosed | 5-phase build, total investment $100B+ [^18] |

---

## VI. Trend Analysis

- **Order-of-magnitude jumps occur roughly every two years**. From P100 (10¹⁸) to V100/A100 clusters (10²³–10²⁴), to H100 ten-thousand clusters (10²⁵), to H100 hundred-thousand clusters (10²⁶), each phase spans about two orders of magnitude.[^7]
- **GPUs went from lab equipment to commodities**. In 2017, buying 8 P100s was a departmental budget approval. In 2025, ordering 100,000 H100s is a national-scale supply chain event. NVIDIA is no longer just a hardware company — its delivery schedules directly determine the training cadence of frontier models.
- **"Training cost transparency" ended after GPT-4**. In the GPT-3 era, training GPU counts were imprecise but roughly estimable; after GPT-4, frontier labs generally stopped disclosing training compute. Publicly verifiable compute data grew increasingly scarce, and cross-checking became ever harder. For historians, this is a signal — compute is transitioning from a "research parameter" to a "trade secret."
- **Hardware restrictions catalyzed architectural innovation**. H800 downgrades, export controls, and similar constraints did not prevent DeepSeek-V3 from reaching frontier levels — instead, they spurred extreme-efficiency designs like MoE + MLA + MTP. This demonstrates that compute volume is not the only variable: architecture, software stack, and data quality equally determine final outcomes.
- **After hundred-thousand GPUs, the bottleneck shifted to power and cooling**. Colossus's mobile generators and Stargate's rumored nuclear power plant both point to the same reality: when GPU count ceases to be the primary constraint, physical infrastructure becomes the new ceiling.

---

## Commentary

Reading the history of the compute shift to its end, the most sobering thing is not the steepness of the curve, but the fact that the answer to "who can still sit at the table?" grows narrower with each passing year. In 2017, a PhD student with a lab's 8 P100s could produce an architecture innovation that redirected the entire field. In 2025, training a frontier model requires 100,000 H100s, a dedicated power substation, and a multi-billion-dollar financing plan. This is not to say that "good ideas" no longer matter — the Transformer architecture itself was born on 8 P100s. But the cost of validating the next "Transformer-level" idea has gone from a credit card to a national budget. The historian recording this should note not only how much the numbers have grown — but that every raise of the compute threshold means someone's door has been closed.

---

*Compiled by the Endfield Industrial Historian Team: NET酱*

---

[^1]: Vaswani et al., "Attention Is All You Need", arXiv:1706.03762, 2017-06. https://arxiv.org/abs/1706.03762
[^2]: Devlin et al., "BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding", arXiv:1810.04805, 2018-10. https://arxiv.org/abs/1810.04805
[^3]: Brown et al., "Language Models are Few-Shot Learners", arXiv:2005.14165, 2020-05. https://arxiv.org/abs/2005.14165
[^4]: Kaplan et al., "Scaling Laws for Neural Language Models", arXiv:2001.08361, 2020-01. https://arxiv.org/abs/2001.08361
[^5]: Hoffmann et al., "Training Compute-Optimal Large Language Models", arXiv:2203.15556, 2022-03. https://arxiv.org/abs/2203.15556
[^6]: Chowdhery et al., "PaLM: Scaling Language Modeling with Pathways", arXiv:2204.02311, 2022-04. https://arxiv.org/abs/2204.02311
[^7]: Epoch AI, "Notable AI Models — Training Compute, Data, and Investment". https://epochai.org/data/notable-ai-models
[^8]: OpenAI, "GPT-4 Technical Report", arXiv:2303.08774, 2023-03. https://arxiv.org/abs/2303.08774
[^9]: Meta, "Building Meta's GenAI Infrastructure", 2024-03-12. https://engineering.fb.com/2024/03/12/data-center-engineering/building-metas-genai-infrastructure/
[^10]: Dubey et al. (Meta), "The Llama 3 Herd of Models", arXiv:2407.21783, 2024-07. https://arxiv.org/abs/2407.21783
[^11]: Elon Musk on X, "Pleased to announce that the xAI team...", 2024-09-02. https://x.com/elonmusk/status/1830326748998025218
[^12]: NVIDIA, "NVIDIA Tesla V100 GPU Architecture", 2017-08. https://images.nvidia.com/content/volta-architecture/pdf/volta-architecture-whitepaper.pdf
[^13]: Radford et al., "Language Models are Unsupervised Multitask Learners", 2019. https://cdn.openai.com/better-language-models/language_models_are_unsupervised_multitask_learners.pdf
[^14]: NVIDIA, "NVIDIA A100 Tensor Core GPU Architecture", 2020-05. https://images.nvidia.com/aem-dam/en-zz/Solutions/data-center/nvidia-ampere-architecture-whitepaper.pdf
[^15]: NVIDIA, "NVIDIA H100 Tensor Core GPU Architecture", 2022. https://resources.nvidia.com/en-us-tensor-core/gtc22-whitepaper-hopper
[^16]: DeepSeek-AI, "DeepSeek-V3 Technical Report", arXiv:2412.19437, 2024-12. https://arxiv.org/abs/2412.19437
[^17]: Financial Times, "Elon Musk's xAI supercomputer raises environmental concerns in Memphis", 2024-09. https://www.ft.com/content/7e8c3e4f-5d6b-4e1f-b4a8-2c3d5e7f9a0b
[^18]: The Information, "Microsoft and OpenAI Plot $100 Billion Stargate AI Supercomputer", 2024-03-29. https://www.theinformation.com/articles/microsoft-and-openai-plot-100-billion-stargate-ai-supercomputer
[^19]: NVIDIA, "NVIDIA Blackwell Platform Arrives to Power a New Era of Computing", 2024-03-18. https://nvidianews.nvidia.com/news/nvidia-blackwell-platform-arrives-to-power-a-new-era-of-computing
