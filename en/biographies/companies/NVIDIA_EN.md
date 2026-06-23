# The Annals of NVIDIA

> In the LLM era, there is one company that does not train models, does not release chat applications, does not build search engines, yet is more irreplaceable than all the companies that do. The GPUs NVIDIA manufactures — or more precisely, the CUDA software ecosystem built around those GPUs — are the foundation of the entire AI computing infrastructure. From the Transformer's birth on 8 P100 GPUs to Colossus training Grok on 100,000 H100s, every frontier model's training is inseparable from NVIDIA's chips. It is not a participant in the arms race — it is the arms dealer.

---

## I. Overview

NVIDIA (formally NVIDIA Corporation) was founded by Jensen Huang, Chris Malachowsky, and Curtis Priem in 1993 in Sunnyvale, California, initially positioned as a graphics chip company — providing 3D accelerator cards for the PC gaming market.[^1] Thirty years later, NVIDIA's core narrative has completely transformed: it is no longer a graphics card company, but the **de facto monopolist of global AI computing infrastructure**.

As of 2025, NVIDIA commands over 80% of the AI training GPU market.[^2] Virtually every AI data center in the world — whether OpenAI, Google, Meta, or China's ByteDance and DeepSeek — uses or has used NVIDIA GPUs. More importantly, NVIDIA's moat extends beyond hardware. CUDA (Compute Unified Device Architecture), the parallel computing platform launched in 2006, has through two decades of iteration and ecosystem building deeply coupled mainstream deep learning frameworks (PyTorch, TensorFlow, JAX) with NVIDIA GPUs — any team wanting to train a frontier model must work within NVIDIA's hardware-software stack.

This dual lock-in — hardware performance leadership plus software ecosystem irreplaceability — gave NVIDIA a unique form of power in the LLM era: it does not determine the direction of models, but it determines their computing ceiling and cost floor.

---

## II. Founding and Early Years

### 2.1 The graphics card triumvirate: From VGA to GPU

At its founding in 1993, NVIDIA was one of dozens of graphics chip startups. The 1990s PC graphics chip market was a "free-for-all" — 3dfx, ATI, S3, Matrox, and Trident each held territory. NVIDIA's start was rocky: its first two products (NV1, NV2) used a non-mainstream quad rendering approach incompatible with the industry-standard triangle rendering, and market reception was dismal.

The turning point came in 1999. NVIDIA released **GeForce 256** — the first consumer graphics chip to be named a "GPU" (Graphics Processing Unit). GeForce 256 integrated hardware transform and lighting (T&L), offloading geometric computation previously handled by the CPU to specialized hardware.[^3] The term "GPU" subsequently became the industry's standard terminology.

In 2000, NVIDIA acquired 3dfx's core assets (3dfx had previously gone bankrupt), consolidating its position in the consumer graphics market. By 2006, the only major remaining competitor was ATI (later acquired by AMD in 2006). The graphics card market shifted from "warring states" to an NVIDIA vs. AMD duopoly — a structure that persists to this day.

### 2.2 CUDA: The strategic bet from graphics to general-purpose computing

In November 2006, NVIDIA released **CUDA** — a platform enabling developers to write general-purpose parallel computing programs on NVIDIA GPUs using the C language.[^4]

This was a strategic choice so bold it bordered on aberrant. At the time, the market for "general-purpose GPU computing" (GPGPU) was virtually nonexistent — using graphics cards for non-graphics computation was a niche academic pursuit. CUDA's development and promotion required massive investment: documentation, SDK, compilers, academic collaboration programs, and training courses. NVIDIA invested continuously for nearly a decade, with negligible financial returns from CUDA.

Jensen Huang's logic was: **GPU parallel computing capabilities far exceed those of CPUs; what's missing is a software stack that makes it easy for developers to use.** If CUDA succeeded, GPUs would transform from "gaming hardware" to "general-purpose computing platforms," and the market would expand from gaming to scientific computing, finance, oil exploration, molecular dynamics — every domain requiring massive parallel computation.

The bet's return was uncertain at the time, but Huang persisted. A decade later, CUDA's accumulated ecosystem became NVIDIA's deepest and widest moat — not because other companies couldn't build good GPUs, but because the cost of "migrating an entire software stack" was prohibitively high. (See "The Evolution of Computing Power")

---

## III. Key Events

### 3.1 The AlexNet moment (2012): GPU from graphics to AI

In 2012, Alex Krizhevsky, Ilya Sutskever, and Geoffrey Hinton's **AlexNet** won the ImageNet image classification challenge by an overwhelming margin (top-5 error rate from 26% to 15.3%).[^5] AlexNet was trained on two NVIDIA GTX 580 GPUs for approximately six days.

This technical event's significance for NVIDIA far exceeded academia: it proved for the first time the feasibility of "GPU-trained deep neural networks" — and GPU training was dozens of times faster than CPU training. From this point, NVIDIA's product line expanded from "gaming graphics cards" to "AI research hardware."

Between 2012 and 2017, AI researchers' demand for NVIDIA GPUs expanded from "a few gaming cards" to "dozens of professional cards." NVIDIA's data center business revenue grew from less than $300 million in 2012 to approximately $1.9 billion in 2017.[^6] But what truly changed the scale was the Transformer's birth in 2017.

### 3.2 Transformer and the explosion of GPU compute demand (2017–2020)

In June 2017, Vaswani et al. published "Attention Is All You Need." The paper's training was completed on 8 NVIDIA P100 GPUs — the base model required only 12 hours.[^7] At this point, AI training's GPU demand still remained at "laboratory equipment" scale.

But the Transformer architecture opened the door to Scaling Laws. BERT in 2018 (340M parameters), GPT-2 in 2019 (1.5B), to GPT-3 in 2020 (175B parameters) — the exponential growth in model scale translated directly into demand for GPU quantity and performance. GPT-3 was trained on Microsoft Azure using approximately 10,000 V100 GPUs, with training compute of approximately 3.14×10²³ FLOPs. (See "The Evolution of Computing Power")

NVIDIA's product line iterated rapidly in response:

- **V100** (2017, Volta architecture): First to introduce Tensor Cores, FP16 compute at 125 TFLOPS, approximately 6x the P100.[^8]
- **A100** (May 2020, Ampere architecture): FP16 compute at 312 TFLOPS, introducing Multi-Instance GPU (MIG) and structural sparsity support. Became the de facto standard for AI training from 2020–2023.[^9]

The A100's release coincided with LLM training's transition from "research project" to "engineering infrastructure." GPT-4's training reportedly used approximately 25,000 A100 GPUs, while Meta's Llama 3 405B used 16,000+ H100s. Each generation's GPU performance improvement was consumed by the resulting larger-scale training demand — GPU scarcity was the norm.

### 3.3 H100 and the "impossible to buy" era (2022–2023)

In 2022, NVIDIA released the **H100** (Hopper architecture). FP16 compute at approximately 990 TFLOPS, plus FP8 support and the Transformer Engine, yielding real-world training throughput approximately 2–4x that of the A100.[^10]

The H100's timing was critical — after ChatGPT's release in late 2022, global demand for AI training GPUs exploded within months. The H100 supply-demand imbalance became the most prominent hardware narrative of 2023:

- **Wait times**: From order to delivery, H100 wait times reached months.
- **Price surges**: Cloud GPU H100 hourly instances became the scarcest computing resource. Secondary market prices skyrocketed.
- **Strategic position**: Silicon Valley investor Marc Andreessen said in 2023: "Being able to get H100s right now is more important than being able to get money."

In 2023, NVIDIA's data center business revenue soared from approximately $15 billion in 2022 to approximately $47.5 billion, year-over-year growth exceeding 200%.[^11] The company's market cap first surpassed $1 trillion in 2023, then surpassed $3 trillion in 2024 — briefly becoming the world's most valuable company.

### 3.4 Chip embargo and the "compliant downgrade" game (2022–2025)

NVIDIA experienced a continuous cycle of regulation and compliance maneuvering in the Chinese market.

**2022-10-07**: The U.S. Department of Commerce BIS issued new export control rules, drawing the embargo boundary at a computing threshold (TPP ≥ 4800). Both A100 and H100 fell within the controlled scope — Chinese customers could not purchase them directly.[^12] NVIDIA quickly designed China-specific **A800** (November 2022) and **H800** (early 2023), reducing NVLink interconnect bandwidth to skirt the threshold. Single-card computing capability remained unchanged, but multi-card cluster efficiency declined. (See "Geopolitics and Sanctions")

**2023-10-17**: BIS issued updated rules, introducing performance density metrics, closing the A800/H800 compliance loophole.[^13] NVIDIA again launched China-specific **H20** and **L20** — but this time the compromise was greater: H20's single-card computing power was cut to approximately 15% of H100's, nearly unusable for LLM training, suitable only for inference.[^14]

**2025-01-13**: The Biden administration, before leaving office, issued the "AI Diffusion Rule," categorizing over 170 countries into three control tiers. NVIDIA publicly opposed it, stating it was "using anti-China rhetoric while actually打击ing the normal market for global AI diffusion."[^15]

This cycle was one of the LLM era's most complex geopolitical narratives. NVIDIA was caught in a dilemma: it needed to comply with U.S. law restricting exports to China, but China was its second-largest market. With each escalation in controls, NVIDIA sought balance within the compliance space — designing downgraded versions, adjusting product lines, lobbying policymakers. This "controls → downgrade → re-tighten → re-downgrade" pursuit was the core thread for understanding NVIDIA's commercial strategy.

### 3.5 Blackwell architecture and the new computing era (2024–2025)

**2024-03-18**: NVIDIA unveiled the **Blackwell architecture** and **B200 GPU** at GTC 2024. The B200 combined two GPU dies into one package through dual-die packaging, achieving FP4 inference compute of 20 PFLOPS, approximately 3–5x the H100. A single **GB200 NVL72** rack contained 72 B200s and 36 Grace CPUs, totaling 1.44 EFLOPS of FP4 compute.[^16]

Blackwell's compute density alleviated some of the power anxiety around "100,000-card" clusters — the number of GPUs needed for equivalent compute was drastically reduced. But it also meant each GPU was more expensive, with higher per-unit power consumption and greater cooling demands. A single GB200 NVL72 rack was estimated to cost over $3 million.[^17]

In early 2025, Blackwell faced yield issues and supply delays. Jensen Huang acknowledged on the 2024 earnings call that "Blackwell demand far exceeds supply." xAI's Colossus Phase 2 expansion reportedly would shift from H100 to B200, and cloud providers including Microsoft and Google had already ordered GB200 NVL72 racks. The computing arms race escalated from "10,000 H100s" to "100,000 Blackwells."

### 3.6 DeepSeek-R1 and the "$589 billion moment" (2025-01)

On January 20, 2025, DeepSeek released the R1 reasoning model — MIT-licensed open-source, API pricing at just one-thirtieth of o1's, with capabilities matching the frontier. The next day, NVIDIA's stock plunged nearly 17%, erasing approximately $589 billion in market value in a single day — the largest single-day loss in U.S. stock market history.[^18]

The market's fear was not just about R1 itself, but the fact it revealed: **the most advanced AI does not necessarily require the most GPUs**. DeepSeek trained V3 using 2,048 downgraded H800 GPUs (a product of export controls), achieving o1-level performance on the reasoning model R1, with total training costs of only approximately $6 million — one-hundredth to one-thousandth of comparable Western models. (See "Chronicles: January 2025")

This posed a deep challenge to NVIDIA's valuation narrative: if computing power was no longer the bottleneck for frontier AI — if algorithmic efficiency could partially compensate for hardware disadvantage — did the "computing arms race" logic need revision?

But after the short-term shock, NVIDIA's stock price and business were not sustained. The reason: although DeepSeek proved "frontier models can be built with fewer GPUs," it simultaneously lowered the training and inference cost threshold — meaning more teams, more companies, and more countries could participate in AI development, potentially increasing total GPU demand. As Jensen Huang put it: "Jevons Paradox — the higher the efficiency, the greater the usage."

---

## IV. Rise and Fall Analysis

### Phase One: Origins of the GPU era (1993–2006)

**What happened**: NVIDIA grew from a graphics chip startup to one of two dominant players in the consumer GPU market. GeForce 256 (1999) defined the "GPU" concept; the acquisition of 3dfx (2000) eliminated the most threatening competitor.

**Why it happened**: The PC gaming market's sustained growth provided NVIDIA with stable cash flow. Moore's Law-driven chip iteration rhythms (approximately one new architecture every 18 months) allowed companies investing continuously in R&D to maintain leadership. NVIDIA's execution — performance and energy efficiency leadership with each generation — progressively widened the gap with competitors.

**What it left behind**: The world's largest independent GPU manufacturer; an engineering culture of "approximately 2x improvement per generation"; the organizational consensus Jensen Huang built internally — "our mission is to make great graphics cards" — which later became "our mission is to make great computing platforms" in the AI era.

### Phase Two: CUDA and the eve of AI (2006–2017)

**What happened**: CUDA platform released (2006); NVIDIA began investing in general-purpose computing. AlexNet (2012) proved the feasibility of GPU-trained deep neural networks. NVIDIA launched the data-center-oriented Tesla GPU series; data center revenue grew from approximately $300 million in 2012 to approximately $1.9 billion in 2017.

**Why it happened**: Jensen Huang foresaw that GPU parallel computing capabilities would extend beyond graphics. CUDA's sustained investment — persisting for a decade with negligible financial returns — was one of tech history's most successful "long-term" investments. The rise of deep learning gave CUDA a "killer application" — not gaming, not oil exploration, but training neural networks.

**What it left behind**: A CUDA ecosystem with millions of developers; deep coupling of deep learning frameworks (PyTorch, TensorFlow) with NVIDIA GPUs; the industry consensus that "AI training = NVIDIA GPUs" began to form.

### Phase Three: From $1 trillion to $3 trillion (2020–2024)

**What happened**: A100 (2020) became the de facto standard for AI training; ChatGPT (2022-11) ignited global AI compute demand; H100 (2022) became "impossible to buy"; NVIDIA's market cap soared from $1 trillion in 2023 to over $3 trillion in 2024. Data center revenue surged from approximately $15 billion in 2022 to over $100 billion in 2024.

**Why it happened**: The scale effects of LLM training — each generation of frontier models requiring an order of magnitude more GPUs than the previous — transformed NVIDIA GPUs from "research equipment" to "strategic resources." The CUDA ecosystem's lock-in made it difficult for competitors (AMD ROCm, Google TPU, Huawei Ascend) to capture significant market share. Chip embargoes further strengthened NVIDIA's pricing power — compliant downgraded chips actually expanded NVIDIA's product line coverage.

**Lingering questions**: Can Blackwell be delivered at scale on time? How will the AI Diffusion Rule affect global GPU supply chains? With Google TPU, Amazon Trainium, and Microsoft Maia all developing in-house AI chips, how long can NVIDIA's CUDA ecosystem moat endure?

### Phase Four: The post-DeepSeek era (2025–present)

**What happened**: DeepSeek-R1 (2025-01) proved that efficient algorithms can partially compensate for computing disadvantage; NVIDIA lost $589 billion in market value in a single day. But total GPU demand did not decline — efficiency lowers thresholds, lower thresholds bring more participants, more participants increase demand. Blackwell architecture entered large-scale deployment. NVIDIA launched NVLink 5 and NVLink Switch in 2025, elevating single-rack interconnect bandwidth to a new magnitude.

**Why it happened**: The AI market expanded from "a few labs training frontier models" to "enterprises, startups, and governments purchasing inference compute at scale." Inference demand growth (running models consumes more sustained compute than training them) was becoming NVIDIA's new growth engine. Jensen Huang positioned NVIDIA as an "AI infrastructure company" at GTC 2025 — no longer just selling chips, but selling complete AI factories from chips to networking to software.

**Lingering questions**: If alternative Transformer architectures (such as Mamba state space models) have different requirements for GPU parallel computing patterns, could CUDA's ecosystem lock-in be bypassed? If open-source model efficiency continues to improve, is "stacking compute" still the mandatory path to frontier AI?

---

## Appraisal

NVIDIA's story is not as simple as "making the best chips."

Chip leadership is catchable — TSMC's advanced processes serve all customers, AMD's MI300X has matched the H100 on some benchmarks, and Google's TPU has structural advantages in inference efficiency. The real moat is not in transistors — it's in the software stack. Twenty years of CUDA ecosystem accumulation — millions of lines of optimization code, hundreds of thousands of developers' habits, hundreds of deep learning libraries' GPU-accelerated implementations — cannot be replicated by any competitor with a single chip generation. This moat is harder to breach than hardware, because its essence is not technology — it is collective inertia.

Jensen Huang's strategic vision deserves separate record. From persistently investing in CUDA starting in 2006, to betting on AI training in 2012, to transforming from a "GPU company" to an "AI infrastructure company" — each step was questioned at the time as "market too small" or "returns too slow." But thirty years of accumulation positioned him in a place no competitor could bypass when the LLM era arrived. This was not luck. It was a thirty-year investment in the conviction that "parallel computing will change everything."

But the "arms dealer" positioning also has cracks. DeepSeek-R1 proved a fact: when algorithmic efficiency is high enough, the equation "more GPUs = better models" no longer holds. This poses a structural challenge to NVIDIA's long-term valuation narrative — not that GPUs are no longer important, but that the equation "compute monopoly = competitive moat" needs revision. If the open-source community's algorithmic innovations can continually drive down frontier model training costs, the importance of "who can get more GPUs" will decline, and the importance of "who can train better models with fewer GPUs" will rise.

The core question NVIDIA faces after 2025 is not hardware — Blackwell is strong enough — but narrative: when the world's largest AI companies pursue "fewer GPUs doing more" rather than "more GPUs," how does NVIDIA find balance between being "the enabler of efficiency gains" and "the beneficiary of compute demand"? Jensen Huang put it well — Jevons Paradox: the higher the efficiency, the greater the usage. But a paradox is not a law; it needs to be validated by the market with each generation of products.

---

*This biography was compiled by the Endfield Industrial Historian Team: Zhuang Fangyi (lead writer).*

---

[^1]: NVIDIA, "Company History." https://www.nvidia.com/en-us/about-nvidia/corporate-timeline/
[^2]: Jon Peddie Research, "AI Processor Market Report," 2025. https://www.jonpeddie.com/
[^3]: NVIDIA, "GeForce 256 Product Launch," 1999-08-31. https://www.nvidia.com/en-us/geforce/graphics-cards/graphics-cards/geforce-256/
[^4]: NVIDIA, "CUDA Zone," 2006-11. https://developer.nvidia.com/cuda-zone
[^5]: Krizhevsky, Sutskever & Hinton, "ImageNet Classification with Deep Convolutional Neural Networks," NeurIPS 2012. https://proceedings.neurips.cc/paper/2012/hash/c399862d3b9d6b76c8436e924a68c45b-Abstract.html
[^6]: NVIDIA, Annual Reports 2012–2017. https://investor.nvidia.com/financial-info/annual-reports
[^7]: Vaswani et al., "Attention Is All You Need," arXiv:1706.03762, 2017-06. https://arxiv.org/abs/1706.03762
[^8]: NVIDIA, "NVIDIA Tesla V100 GPU Architecture," 2017-08. https://images.nvidia.com/content/volta-architecture/pdf/volta-architecture-whitepaper.pdf
[^9]: NVIDIA, "NVIDIA A100 Tensor Core GPU Architecture," 2020-05. https://images.nvidia.com/aem-dam/en-zz/Solutions/data-center/nvidia-ampere-architecture-whitepaper.pdf
[^10]: NVIDIA, "NVIDIA H100 Tensor Core GPU Architecture," 2022. https://resources.nvidia.com/en-us-tensor-core/gtc22-whitepaper-hopper
[^11]: NVIDIA, "FY2024 Earnings Report," 2024-02-21. https://investor.nvidia.com/financial-info/quarterly-results
[^12]: US Department of Commerce, BIS, "Implementation of Additional Export Controls: Certain Advanced Computing and Semiconductor Manufacturing Items," 2022-10-07. 87 FR 62186.
[^13]: US Department of Commerce, BIS, "Export Controls on Semiconductor Manufacturing Items and Advanced Computing Items," 2023-10-17. 88 FR 73410.
[^14]: Wikipedia, "Artificial intelligence industry in China — US export controls."
[^15]: US Department of Commerce, BIS, "Framework for Artificial Intelligence Diffusion," 2025-01-13.
