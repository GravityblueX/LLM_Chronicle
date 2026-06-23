# AI Infrastructure and Chips

> Every emergent capability of a large language model ultimately comes down to transistors. Software can be iterated, algorithms optimized, data cleaned—but all of it rests on a silicon die capable of running matrix multiplications. Before 2020, AI chips were virtually synonymous with NVIDIA GPUs; after 2020, Google, Amazon, Huawei, and Microsoft each entered the custom chip race, making chips the physical battleground of computing power competition and geopolitical maneuvering. This article records the technological evolution, process node competition, and custom silicon trends of AI chips—from NVIDIA's monopoly to a multipolar contest.

---

## I. Overview

The physical layer of AI infrastructure comprises three core elements: compute chips, interconnect networks, and storage systems. Among these, compute chips are the most critical, most closely watched, and scarcest component—they directly determine how many days, how many dollars, and how many watts of electricity it takes to train a frontier model.

Between 2017 and 2020, the de facto standard for AI training hardware was the NVIDIA V100 and A100, with the vast majority of frontier models trained on these two GPUs. Google began developing its own TPU (Tensor Processing Unit) in 2016, but it was primarily used internally with limited external impact. This period can be called the "single-vendor era"—the entire AI industry's compute supply chain was heavily dependent on NVIDIA.

After 2020, three forces shattered this single-vendor dependency: **the explosion in compute demand driven by scaling laws** made NVIDIA GPUs chronically scarce, compelling cloud providers to develop their own alternatives; **U.S. export controls on AI chips to China** (see *Geopolitics and Embargoes*) redrew the global boundaries of AI chip circulation; and **process technology approaching physical limits** made each generation of chips more expensive and difficult to upgrade. These three forces intertwined to shape the AI chip landscape of 2025: no longer an NVIDIA monopoly, but rather "NVIDIA still dominates, yet alternatives have emerged at every layer."

---

## II. NVIDIA GPUs: Three Generations from A100 to GB200

> *NVIDIA's GPU iteration cadence accelerated significantly after 2020—from a "two-year cycle" compressed to "one generation per year," with performance gains per generation jumping from 2–3× to 5–10×. This acceleration was driven both by technology (process advances, packaging innovation) and by competitive pressure (customers cannot wait, and alternatives are closing in).*

### 2.1 A100: The "Mother of Infrastructure" for LLM Training

The NVIDIA A100, based on the Ampere architecture, launched in May 2020. It delivered 312 TFLOPS of FP16 compute and introduced Multi-Instance GPU (MIG) technology, allowing a single GPU to be partitioned into up to seven independent instances to improve utilization.[^1] The A100's true breakthrough was not just peak throughput—it was the first product to integrate **Tensor Core** matrix computation capabilities with the interconnect requirements of large-scale distributed training (NVLink 2.0 at 600 GB/s).

The A100 became the de facto standard for AI training from 2020 to 2023. GPT-4 was estimated to have been trained on approximately 25,000 A100s, Meta's OPT-175B used 992 A100s, and Google's PaLM 540B used 6,144 TPUv4 chips—yet external teams had virtually no alternative to the A100.[^2] The 80 GB HBM2e variant of the A100 (released in 2021) was especially popular for LLM training: high-bandwidth memory meant larger batch sizes and higher throughput.

### 2.2 H100: Transformer Engine and the FP8 Hardware Breakthrough

The H100, based on the Hopper architecture, was announced in 2022 and shipped at scale in 2023. It delivered approximately 990 TFLOPS of FP16 compute—roughly 3× the A100. More importantly, it introduced the **Transformer Engine**, a hardware unit specifically optimized for Transformer model training that supports FP8 precision, boosting training throughput to 2–4× that of the A100 without significant loss in accuracy.[^3]

Another key upgrade in the H100 was **NVLink 4.0**, which raised single-GPU interconnect bandwidth to 900 GB/s and supported NVLink Switch for full cross-rack interconnection. For clusters of ten thousand GPUs or more, interconnect bandwidth and topology determine actual training efficiency—no matter how powerful a single GPU is, if communication becomes the bottleneck, cluster efficiency drops dramatically. (See *The Evolution of Computing Power.*)

The H100 supply-demand imbalance was the most prominent hardware narrative in the tech industry in 2023. Wait times stretched to months, and hourly-billed H100 cloud GPU instances became the scarcest computing resource. NVIDIA's data center revenue reached approximately $47.5 billion in FY2024, a year-over-year increase of over 200%.[^4]

### 2.3 B200 / GB200 NVL72: Dual-Die Packaging and the AI Factory

**On 2024-03-18**, NVIDIA unveiled the Blackwell architecture and the B200 GPU at GTC 2024. The B200 employs **dual-die packaging**—mounting two GPU dies on a single substrate—achieving 20 PFLOPS of FP4 inference compute, approximately 3–5× that of the H100.[^5]

The real system-level innovation was the **GB200 NVL72**: a single rack containing 72 B200 GPUs and 36 Grace CPUs, fully interconnected via fifth-generation NVLink and NVLink Switch, delivering a total of 1.44 EFLOPS of FP4 compute. The Grace CPU (based on the Arm architecture) connects directly to B200 GPUs via NVLink-C2C, achieving 900 GB/s of CPU-GPU bandwidth—far exceeding traditional PCIe.

The B200's yield issues triggered supply delays in the second half of 2024. Jensen Huang acknowledged on an earnings call that "demand far exceeds supply." However, Blackwell's large-scale deployment continued to advance: xAI's Colossus Phase II was reportedly transitioning from H100 to B200, and both Microsoft and Google had placed orders for GB200 NVL72.

> *Jensen Huang defined the GB200 NVL72 as an "AI factory" rather than a "server"—and this is more than marketing rhetoric. When a single rack exceeds 1 EFLOPS, the power supply, cooling systems, and network architecture of traditional data centers all need to be redesigned. AI infrastructure is no longer about "plugging GPUs into server racks"—it is about "building a factory dedicated to AI training."*

### Key Specifications

| GPU | Architecture | Year | FP16 Compute | FP4 Compute | Key Features |
|-----|------|----------|-----------|----------|----------|
| A100 | Ampere | 2020 | 312 TFLOPS | — | MIG, NVLink 2.0 |
| H100 | Hopper | 2022 | 990 TFLOPS | — | Transformer Engine, FP8, NVLink 4.0 |
| B200 | Blackwell | 2024 | — | 20 PFLOPS | Dual-die packaging, NVLink 5.0 |

*Note: A100/H100 report FP16 figures, while B200 reports FP4; the precision standards differ and cannot be directly compared as simple multiples.*

---

## III. Google TPU: The Pioneer of Custom AI Chips

> *Google is the only company with over a decade of accumulated experience in custom AI chips comparable to NVIDIA. The TPU evolved from an "internal experiment" in 2016 to its "sixth generation" in 2025, serving as the most mature blueprint for cloud-provider custom silicon—yet it also demonstrates just how difficult this path is.*

### 3.1 The Origins of TPU: Built for TensorFlow

The TPU (Tensor Processing Unit) is a custom-designed AI accelerator ASIC by Google, specifically optimized for tensor computations. The first-generation TPU was deployed in Google's data centers in 2016, used for the inference phase of AlphaGo's match against Lee Sedol.[^6] TPUv1 was an inference-only chip and did not support training.

**TPUv2** (2017) and **TPUv3** (2018) added training support. BERT-Large was trained on 64 TPUv3 chips over 4 days, and GPT-2 was trained on 32 TPUv3 chips.[^7] During this period, however, TPUs primarily served Google's internal research teams (Google Brain, DeepMind) and Google Cloud customers, with limited external penetration.

### 3.2 TPUv4 and TPUv5: Scaling Up and Gaining Competitiveness

**TPUv4** (deployed in 2022) was the first product in which Google demonstrated TPU competitiveness at large-scale training. PaLM 540B was trained on 6,144 TPUv4 chips with approximately 2.5×10²⁴ FLOPs of compute.[^8] The TPUv4 Pod's interconnect architecture uses a 3D Torus topology, with a single Pod supporting up to 4,096 chips and a theoretical peak performance of approximately 1.1 EFLOPS (BF16).

**TPUv5e** (released August 2023) and **TPUv5p** (released December 2023) further differentiated the product line: v5e targeted inference and mid-scale training (cost-efficiency first), while v5p targeted large-scale training (performance first). Gemini Ultra was reportedly trained on TPUv5p clusters.[^9]

### 3.3 TPUv6 (Trillium): Competing with Blackwell

**On 2024-05-14**, Google announced **TPUv6e (codenamed Trillium)** at I/O 2024, claiming 4.7× single-chip inference performance over TPUv5e and approximately 3.8× training performance improvement.[^10] TPUv6 uses a SparseCore architecture to optimize sparse computation and improved HBM bandwidth to support training of even larger models.

Google TPU and NVIDIA GPU competition follows a fundamentally different logic: NVIDIA sells chips to everyone, while Google uses TPUs to train its own models and rents them out as cloud services. The TPU's competitiveness is not about "whether it can beat the H100," but about "whether it can free Google Cloud customers from NVIDIA dependency"—this is an ecosystem question, not a hardware benchmark question.

### Key Specifications

| Version | Year | Key Features | Representative Models |
|------|----------|----------|----------|
| TPUv1 | 2016 | Inference-only ASIC | AlphaGo inference |
| TPUv3 | 2018 | Training + Inference | BERT, GPT-2 |
| TPUv4 | 2022 | 3D Torus interconnect, 4096-chip Pod | PaLM 540B |
| TPUv5p | 2023 | Large-scale training optimized | Gemini Ultra |
| TPUv6e | 2024 | SparseCore, 4.7× inference improvement | Gemini 2.0 |

---

## IV. Huawei Ascend: Domestic Alternatives Under Embargo

> *Huawei's Ascend is the central narrative of China's domestic AI chip substitution. It did not emerge through commercial competition but was pushed into a "no other choice" position by export control pressures. This means Ascend's technical benchmarks must measure up on two dimensions simultaneously—catching up to NVIDIA's performance while filling the supply gap created by the embargo.*

### 4.1 The Ascend 910 Series

Huawei's Ascend series AI chips are designed by HiSilicon Semiconductor and built on Huawei's proprietary Da Vinci compute architecture.

**Ascend 910B** (2023): Currently the AI training chip closest to NVIDIA A100 competitiveness in the Chinese market. Publicly available MLPerf benchmark data from 2024 shows that the 910B approaches A100 levels in certain inference scenarios, with a nominal FP16 compute capacity of approximately 320 TFLOPS.[^11] However, in training scenarios, the 910B's actual throughput still lags behind the A100, particularly in large-scale distributed LLM training where interconnect bandwidth and software stack maturity are the primary bottlenecks.

**Ascend 910C** (reports emerged in the second half of 2024): Reportedly manufactured on SMIC's N+2 process (approximately equivalent to 7nm), aiming to further improve training performance over the 910B.[^12] However, due to the inability to access TSMC's advanced processes (5nm and below) and EUV lithography equipment, Ascend faces a hard ceiling on process technology.

### 4.2 Software Ecosystem: CANN and MindSpore

Huawei has built a proprietary software stack around Ascend: **CANN** (Compute Architecture for Neural Networks) as its operator library competing with CUDA, and **MindSpore** as its deep learning framework competing with PyTorch/TensorFlow. However, the CUDA ecosystem has been accumulated over two decades, encompassing millions of lines of optimized code and ingrained habits of hundreds of thousands of developers (see *The NVIDIA Saga*)—this is not something CANN can replicate in the short term.

The practical compatibility strategy is: Huawei provides a PyTorch plugin (torch_npu) to reduce migration costs, but in actual deployments, a large number of operators need to be re-adapted and optimized for Ascend hardware. The consensus in 2024 is: **inference can use Ascend, but training still relies heavily on existing NVIDIA inventory**. Major companies like ByteDance and Baidu are adapting to Ascend, but their core frontier model training still relies primarily on NVIDIA GPUs.

### 4.3 Other Domestic Chips

Beyond Huawei, China's AI chip market includes a cohort of追赶者:

- **Cambricon**: The MLU series; the SiYuan 590 (2024) has a nominal FP16 compute capacity of approximately 512 TFLOPS, but actual deployment scale remains limited.[^13]
- **Biren Technology**: The BR100 series was once billed as "China's most powerful," but was impacted by U.S. sanctions (placed on the Entity List in 2022), disrupting shipments.[^14]
- **Hygon**: The DCU series is based on AMD CDNA architecture licensing, with a technology path similar to the AMD MI250, but both process technology and software ecosystem are constrained.

The consensus for 2024–2025 is: **domestic AI chips have achieved usability for inference scenarios, but still face a generational gap in training scenarios.** The embargo has not stalled Chinese AI—DeepSeek-V3 trained a frontier model on H800s is proof—but it does impose structural constraints on China's long-term supply of advanced-process GPUs. (See *Geopolitics and Embargoes.*)

---

## V. Cloud Provider Custom Chips: From Dependency to Diversification

> *When NVIDIA GPU supply became so tight that "money alone cannot buy them," cloud providers responded by building their own. This is not merely about cost reduction—it is a strategic hedge for supply chain security.*

### 5.1 Amazon: Trainium and Inferentia

Amazon (AWS) is the earliest and most aggressive player among cloud providers in custom AI chip development.

**Inferentia** (2019, first generation): An inference-only chip designed for cost-sensitive inference workloads.[^15]

**Trainium** (2022, first generation) and **Trainium2** (announced at re:Invent 2024): Designed for LLM training. Trainium2 offers a nominal BF16 compute capacity of approximately 200 TFLOPS per chip, with cluster scale supporting up to 100,000 chips interconnected via UltraCluster.[^16] Anthropic is one of Trainium2's largest customers—in 2024, AWS and Anthropic signed a multi-billion-dollar Trainium training contract.

AWS's custom chip strategy does not aim to surpass NVIDIA in single-card performance, but rather to achieve **cluster-level cost efficiency**—through custom interconnects (EFA, Elastic Fabric Adapter) and an optimized software stack (AWS Neuron SDK), achieving training efficiency comparable to NVIDIA on large clusters, but at a lower price.

### 5.2 Microsoft: Maia 100 and Cobalt

**On 2023-11-15**, Microsoft unveiled **Maia 100** at Ignite 2023—its first custom AI accelerator, manufactured on TSMC's 5nm process.[^17] Maia 100's detailed specifications were not fully disclosed, but it reportedly features 4-bit low-precision inference optimization paired with Microsoft's custom Sidekick liquid cooling system.

Microsoft also announced **Cobalt 100**—an Arm-based general-purpose CPU designed for non-AI compute workloads in cloud instances. The Maia + Cobalt combination signals Microsoft's attempt to build a complete custom infrastructure from CPU to AI accelerator—reducing dependency on both NVIDIA and Intel.

However, Maia's actual deployment has been slow. As of early 2025, Azure's AI training still relies primarily on NVIDIA GPUs (H100, GB200), with Maia primarily used for internal workloads and select customer pilots.

### 5.3 Apple: The AI Dimension of M-Series Chips

Apple's M-series (M1–M4) SoCs contain a Neural Engine that, while not a data center chip, holds a unique position in on-device AI inference (running LLMs on iPhones and Macs). The Neural Engine in the M4 Pro/Max delivers 38 TOPS of compute, supporting quantized inference of 70B-parameter-class models locally.[^18]

Apple's presence highlights an easily overlooked trend: **AI chips are not limited to data centers**. As model compression and on-device inference technologies mature, AI acceleration units within consumer-grade chips are becoming increasingly important.

---

## VI. The Process Node Race: Moore's Law Meets AI

> *AI chip performance gains rest on two pillars: architecture innovation and process advancement. Architecture innovation can deliver multi-fold efficiency improvements (e.g., Tensor Core, Transformer Engine), but process advancement is the deeper, more enduring driver. As processes approach physical limits, each generation of upgrades becomes more expensive and more difficult—and AI chips are hungrier for advanced processes than any other chip category.*

### 6.1 TSMC: The Only Choice for AI Chip Manufacturing

TSMC is the de facto monopoly holder for advanced-process AI chip fabrication. NVIDIA's A100 (TSMC 7nm), H100 (TSMC 4nm), and B200 (TSMC 4nm, enhanced) are all fabricated by TSMC. Google TPUs, Amazon Trainium, and Microsoft Maia also largely depend on TSMC's 5nm or more advanced processes.[^19]

**CoWoS (Chip-on-Wafer-on-Substrate) advanced packaging** is another critical bottleneck. The HBM (High Bandwidth Memory) stacking required by the H100 and B200 depends on CoWoS packaging, and TSMC's CoWoS capacity has been chronically insufficient. During 2023–2024, CoWoS capacity was at one point the single most critical bottleneck constraining NVIDIA GPU shipments—more scarce than the chips themselves.[^20]

### 6.2 Samsung and Intel: The Chasers

**Samsung Foundry's** 3nm GAA (Gate-All-Around) process entered production in 2022, but both yield and performance lagged behind TSMC's contemporaneous offerings. Some NVIDIA consumer GPUs use Samsung fabrication, but all data center products are manufactured by TSMC.

**Intel Foundry Services** launched Intel 18A (approximately equivalent to 1.8nm) in 2024, but high-volume production has not yet been validated. Intel's Gaudi 3 AI accelerator (originally from the Habana Labs product line) uses Intel's own process, with limited market penetration.

### 6.3 SMIC: The 7nm Ceiling

SMIC (Semiconductor Manufacturing International Corporation) is mainland China's most advanced wafer foundry. In August 2023, the Kirin 9000S chip inside the Huawei Mate 60 Pro was teardown-confirmed to use SMIC's N+1 process (approximately equivalent to 7nm).[^21] However, 7nm represents the limit of what SMIC can achieve without EUV lithography—TSMC's 5nm, 4nm, and 3nm processes all rely on ASML's EUV equipment, and ASML is restricted by Dutch export controls from selling EUV machines to China.

This means Huawei's Ascend chips face a hard ceiling on process technology: **for the foreseeable future, domestic AI chips will remain at the 7nm level**, while NVIDIA's next-generation products will use TSMC's 3nm or even more advanced processes. The process gap translates into an energy efficiency gap—higher power consumption for equivalent compute, or lower compute for equivalent power.

---

## VII. The Custom Chip Trend: Why Every Cloud Provider Wants to Build Its Own

The custom AI chip wave began in 2016 (Google TPU) and fully accelerated during 2023–2024. The driving forces are not merely technological—the deeper reasons lie in supply chain security and pricing power.

**Supply chain security**: The NVIDIA GPU supply-demand imbalance (2023) made every cloud provider acutely aware of the risks of "depending on a single supplier." H100 wait times forced customers to delay model training plans, and cloud providers' expansion cadences were held hostage by NVIDIA's delivery schedules. Custom chips represent a "don't put all your eggs in one basket" hedge.

**Pricing power**: NVIDIA's data center GPU gross margins exceed 70%—meaning for every dollar customers spend on GPUs, NVIDIA takes more than 70 cents. Custom chips let cloud providers control their own cost structure. Even if custom chips' absolute performance falls short of NVIDIA, as long as total cluster cost (including chip procurement, power, cooling, and software) is lower, the investment is worthwhile.

**Vertical integration**: Vertical integration from chips to cloud services allows cloud providers to optimize hardware design for their own software stacks—Google optimizes TPUs for JAX, AWS optimizes Trainium for Neuron SDK. This kind of "software-hardware co-design" is something NVIDIA, as a third-party chip vendor, cannot achieve.

But the challenges of custom chip development are equally enormous:

- **Software ecosystem**: The CUDA ecosystem is NVIDIA's deepest moat. Custom chips must build their own software stacks (TPU's JAX/XLA, Trainium's Neuron SDK, Ascend's CANN), and the learning and migration costs for developers are extremely high.
- **ROI timeline**: Chip R&D from design to mass production typically takes 3–5 years. In an industry where AI technology iterations are measured in months, a chip's design decisions may already be obsolete by the time it reaches volume production.
- **NVIDIA's iteration speed**: NVIDIA maintains a cadence of one new architecture every 1–2 years, with each generation delivering 2–5× performance gains. To match this pace, the human and capital investment required of custom chip teams is staggering.

---

## VIII. Timeline of Key Events

| Date | Event | Significance |
|------|------|------|
| 2016-05 | Google TPUv1 deployed | First AI-specific ASIC, inference only [^6] |
| 2020-05 | NVIDIA A100 launched | Became the 2020–2023 de facto AI training standard [^1] |
| 2022-10 | BIS AI chip embargo on China | A100/H100 supply cut off; global chip supply chain restructured [^22] |
| 2022 | TPUv4 large-scale deployment | PaLM 540B trained on 6,144 TPUv4 chips [^8] |
| 2022-10 | NVIDIA H100 shipped | Transformer Engine, FP8; 2–4× over A100 [^3] |
| 2023-08 | Google TPUv5e released | Cost-optimized inference path [^9] |
| 2023-11 | Microsoft Maia 100 announced | Microsoft's first custom AI accelerator [^17] |
| 2024-03 | NVIDIA B200 / GB200 NVL72 announced | Dual-die packaging; 1.44 EFLOPS per rack [^5] |
| 2024-05 | Google TPUv6e (Trillium) released | 4.7× inference improvement, SparseCore [^10] |
| 2024-12 | AWS Trainium2 announced | Cluster scale of 100K chips [^16] |
| 2024 | Huawei Ascend 910C reports | SMIC N+2 process; 7nm ceiling [^12] |

---

## IX. Trend Analysis

- **NVIDIA still dominates, but its moat is eroding**. In 2025, NVIDIA's share of the AI training GPU market still exceeds 80%, but Google TPU, AWS Trainium, and Huawei Ascend have each established competitiveness in specific scenarios. The pace of erosion depends on whether custom chip software ecosystems can reach the threshold of "developers don't feel the pain"—they have not yet done so.

- **Custom chips are a strategic inevitability for cloud providers, not a technological ideal**. The core driver is not "building a better chip than NVIDIA" but "not being held hostage by NVIDIA's delivery schedules and pricing power." Even if custom chips' absolute performance is lower than NVIDIA's, as long as cost efficiency and supply chain controllability are superior, the investment is justified.

- **The process node race still has TSMC as the winner**. Whether NVIDIA, Google, or Amazon, advanced-process chip fabrication depends on TSMC. TSMC's CoWoS advanced packaging capacity is a scarcer resource than chip design itself. In this sense, AI chip competition is not just about "who designs better" but also about "who can secure more capacity at TSMC."

- **Software ecosystem is the true long-term moat**. Hardware can be caught up with, process technology can be waited for—but two decades of CUDA ecosystem accumulation is an obstacle that cannot be bypassed with a single generation of chips. For custom chips to succeed, the ultimate challenge is not "compute power" but "developers willing to write code on your platform."

- **AI chips are diverging from "general-purpose GPUs" toward "specialized accelerators"**. NVIDIA's Transformer Engine, Google's SparseCore, Amazon's custom precision support—each new generation of chips moves further toward optimization for specific AI workloads. The era of general-purpose compute GPUs is ending; the era of AI-specific hardware is beginning.

---

## Commentary

Reading the history of AI chips through 2025, one clear throughline emerges: **the question has shifted from "whose chip is fastest" to "whose chip is most irreplaceable."**

NVIDIA's GPUs are not the fastest—Google TPUs are more efficient on certain inference tasks, Apple's Neural Engine delivers lower on-device latency, and Huawei Ascend even offers better cost-performance for specific Chinese customers. But NVIDIA is irreplaceable because the entire AI industry's software stack—from every line of operator optimization in PyTorch to every Ph.D. student's coding habits—is bound to CUDA. This is a monopoly built on "collective inertia": it is not that you cannot use something else, but that you do not want to pay the cost of migration.

But inertia does not last forever. Google has already proven by 2025 that the JAX + TPU combination can train world-class models in the Gemini series. DeepSeek built a frontier model using H800s (NVIDIA's down-specced version for China) and a custom MoE architecture—demonstrating that hardware constraints can be partially overcome by algorithmic efficiency. If open-source software stacks (such as Triton, ROCm) continue to mature, and if the developer experience on custom chips becomes less painful, NVIDIA's CUDA moat may erode within the next five years from "dominant monopoly" to "clear advantage but no longer monopolistic."

For the AI industry as a whole, chip multipolarity is a good thing. Excessive dependence on a single supplier—whether NVIDIA or TSMC—is a systemic risk. When Google, Amazon, Microsoft, and Huawei are all building their own chips, the industry's vulnerability to any single supplier decreases. But multipolarity also means fragmentation: compatibility issues between different chips and different software stacks could become one of the biggest engineering challenges for AI infrastructure over the next decade.

---

*This article was compiled by the Endfield Industrial Chronicle team: Fu Xuan (theoretical framework review).*

---

[^1]: NVIDIA, "NVIDIA A100 Tensor Core GPU Architecture", 2020-05. https://images.nvidia.com/aem-dam/en-zz/Solutions/data-center/nvidia-ampere-architecture-whitepaper.pdf
[^2]: OpenAI, "GPT-4 Technical Report", arXiv:2303.08774, 2023-03. https://arxiv.org/abs/2303.08774
[^3]: NVIDIA, "NVIDIA H100 Tensor Core GPU Architecture", 2022. https://resources.nvidia.com/en-us-tensor-core/gtc22-whitepaper-hopper
[^4]: NVIDIA, "FY2024 Earnings Report", 2024-02-21. https://investor.nvidia.com/financial-info/quarterly-results
[^5]: NVIDIA, "NVIDIA Blackwell Platform Arrives to Power a New Era of Computing", GTC 2024, 2024-03-18. https://nvidianews.nvidia.com/news/nvidia-blackwell-platform-arrives-to-power-a-new-era-of-computing
[^6]: Jouppi et al., "In-Datacenter Performance Analysis of a Tensor Processing Unit", ISCA 2017. https://arxiv.org/abs/1704.04760
[^7]: Devlin et al., "BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding", arXiv:1810.04805, 2018-10. https://arxiv.org/abs/1810.04805
[^8]: Chowdhery et al., "PaLM: Scaling Language Modeling with Pathways", arXiv:2204.02311, 2022-04. https://arxiv.org/abs/2204.02311
[^9]: Google Cloud Blog, "Cloud TPU v5e and AI Hypercomputer", 2023-08-29. https://cloud.google.com/blog/products/ai-machine-learning/introducing-cloud-tpu-v5e-and-a3-hypercomputer
[^10]: Google Cloud Blog, "Google Axion Processors and TPU v6e (Trillium)", 2024-05-14. https://cloud.google.com/blog/products/compute/introducing-googles-new-ai-chips-tpu-v5p-and-axion
[^11]: MLPerf Inference v4.0 Results, 2024. https://mlcommons.org/benchmarks/inference-datacenter/
[^12]: SCMP, "Huawei's next-gen Ascend 910C AI chip reportedly in testing", 2024-08. https://www.scmp.com/tech/big-tech/article/3275000/huaweis-next-gen-ascend-910c-ai-chip-reportedly-testing
[^13]: Cambricon, "SiYuan 590 Product Page", 2024. https://www.cambricon.com/
[^14]: Reuters, "U.S. adds China's Biren, Moore Threads to export control list", 2022-10. https://www.reuters.com/technology/us-adds-chinas-biren-moore-threads-export-control-list-2022-10-07/
[^15]: AWS, "Amazon EC2 Inf1 Instances", 2019. https://aws.amazon.com/ec2/instance-types/inf1/
[^16]: AWS, "AWS Trainium2 and UltraServer", re:Invent 2024. https://aws.amazon.com/blogs/aws/new-amazon-ec2-trn2-instances-for-high-performance-gen-ai-model-training/
[^17]: Microsoft, "Microsoft unveils its first custom AI chip and Arm-based CPU", 2023-11-15. https://blogs.microsoft.com/blog/2023/11/15/microsoft-unveils-its-first-custom-ai-chip-and-cobalt-arm-based-cpu/
[^18]: Apple, "Apple Introduces M4 Pro and M4 Max", 2024-10-28. https://www.apple.com/newsroom/2024/10/apple-introduces-m4-pro-and-m4-max/
[^19]: TSMC, "TSMC N4P Technology", 2024. https://www.tsmc.com/english/dedicatedFoundry/technology/logic/l_4nm
[^20]: TrendForce, "CoWoS Capacity Becomes Bottleneck for AI Chip Shipments", 2024-03. https://www.trendforce.com/presscenter/news/20240301-12060.html
[^21]: TechInsights, "Huawei Mate 60 Pro — Kirin 9000s Die Analysis", 2023-08. https://www.techinsights.com/blog/huawei-mate-60-pro-teardown
[^22]: US Department of Commerce, BIS, "Implementation of Additional Export Controls", 2022-10-07. 87 FR 62186. https://www.federalregister.gov/documents/2022/10/13/2022-21658/
