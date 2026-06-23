# Geopolitics and Blockades

> Large language models did not emerge from a vacuum. Behind every generation of models' parameters and performance lies a silicon supply chain — from TSMC's fabs to NVIDIA's GPUs, from U.S. export control lists to China's smuggling channels. When AI capabilities began approaching or even surpassing human professional levels, chips ceased to be mere commodities — they became the boundary of national security. This treatise records five years of escalating blockades, from the A100 ban to the AI Diffusion Rule, and the AI sovereignty strategies they catalyzed worldwide.

---

## I. First round: October 2022, A100/H100 export ban to China

The geopolitical blockade of the large model era did not begin with ChatGPT — it began with chips.

**2022-10-07**, the U.S. Department of Commerce's Bureau of Industry and Security (BIS) issued an Interim Final Rule (IFR) imposing export controls on advanced computing chips. The core threshold was a composite formula based on compute power and interconnect bandwidth: chips with **TPP (Total Processing Performance) ≥ 4800** required a BIS license for export to China (including Hong Kong and Macau). The A100's TPP was approximately 624, and the H100's was even higher — both fell within the controlled scope.[^1]

This marked the moment the U.S.-China chip war expanded from Huawei/5G to AI chips. Previous sanctions targeted specific entities such as Huawei and SMIC, but the October 7 rule was the first to draw an embargo boundary based on **performance thresholds** — not to blockade a specific company, but to blockade a capability.

**NVIDIA's "compliance downgrade"**: After the ban took effect, NVIDIA rapidly designed China-specific chips — the **A800** (November 2022) and **H800** (early 2023). Both had identical computational performance to the A100/H100, circumventing the TPP threshold solely by reducing NVLink interconnect bandwidth (from 600 GB/s to 400 GB/s). This meant single-card training capability remained unchanged, but multi-card cluster efficiency declined — a substantive loss for thousand-card-scale large model training.[^2]

---

## II. Second round: October 2023, closing the A800/H800 loophole

NVIDIA's "reduce speed, not capacity" strategy lasted less than a year.

**2023-10-17**, BIS issued updated rules, significantly tightening export controls:[^3]

- **Eliminated the single TPP threshold** and introduced a **Performance Density** metric — examining both total compute power and per-unit-area compute density. Although the A800/H800 had reduced interconnect speeds, their per-chip compute density remained unchanged, falling under the new rules.
- **Introduced D1–D5 country groupings**, applying a "presumption of denial" licensing policy to Macau and D5 group countries (including China).
- **Narrowed "compliance downgrade" space**: explicitly restricting "variant chips designed to circumvent controls." If the original chip design exceeded the threshold, the downgraded version was also controlled.
- **Restricted advanced chip manufacturing equipment**: not only banning chip sales but also restricting the export of lithography equipment and EDA tools used to produce advanced chips.

The significance of this round of amendments lay not in the specific changes to the ban but in the dynamic it revealed: **the contest between controls and supply chains is a chase, not a siege.** Every time rules tightened, NVIDIA found a compliance gap; BIS tightened again to close it. The A800/H800 completed its full cycle of "birth → compliance → obsolescence" within eight months.

Thereafter, NVIDIA again introduced China-specific versions, the H20 and L20 — but this time the compromise was far greater: the H20's single-card compute was cut to approximately 15% of the H100's, well below the control threshold. The cost was that the H20 was nearly unusable for large model training, suitable only for inference.[^4]

---

## III. Blackwell and the escalation of blockades

**2024-03-18**, NVIDIA unveiled the Blackwell architecture and B200 GPU at GTC 2024. The GB200 NVL72 interconnected 72 Blackwell GPUs via NVLink into a single massive compute node, achieving 20 PFLOPS of FP4 inference compute — approximately 30 times that of the A100.[^5]

Blackwell's release placed new pressure on the blockade logic. Under the October 2023 rules, the B200 clearly fell under control — its compute density far exceeded the threshold. NVIDIA again designed a China-compliant B20, but according to public reports it had not yet received BIS approval by early 2025, and Chinese customers had limited interest in the significantly downgraded compliant chips.

**2025-01-13**, one week before the Biden administration left office, BIS issued the "AI Diffusion Rule" (Interim Final Rule on Framework for Artificial Intelligence Diffusion). This was the most comprehensive AI chip export control framework to date:[^6]

- Categorized over 170 countries into three tiers: **Tier 1** (18 allied nations, unrestricted), **Tier 2** (approximately 120 countries, with quota caps), **Tier 3** (China, Russia, etc., embargoed).
- **Tier 2 quotas**: each country could purchase a maximum of approximately 1,700 high-end GPUs per year (or equivalent compute), with additional permits required beyond that.
- Extended the control scope from GPU chips to **model weight exports** — for closed-source models exceeding a specified compute threshold (10²⁶ FLOP training), transferring weights to Tier 2/3 countries required Commerce Department authorization.

This rule generated widespread controversy. NVIDIA publicly opposed it, stating it was "anti-China in name but in practice打击了 global AI diffusion's normal market." The European Commission also expressed concern that the quota system could affect AI infrastructure construction in smaller European nations.

---

## IV. Model export controls and Anthropic's restricted terms

Beyond chips, the models themselves — and access to them — are also becoming geopolitical instruments.

**Anthropic Terms of Service** (updated September 2025): explicitly listed China as a "restricted region," with Chinese enterprises holding more than 50% ownership prohibited from using Claude. The stated rationale pointed directly to "U.S. national security policy — preventing advanced AI capabilities from being used for military and intelligence purposes."[^7]

**OpenAI API restrictions**: Although OpenAI did not explicitly list China in its terms, its API has been continuously restricted for mainland China IP addresses since 2024. ChatGPT has never been officially available in mainland China.

**Model distillation allegations**: On February 23, 2026, Anthropic publicly accused DeepSeek, Moonshot AI (月之暗面), and MiniMax of conducting "industrial-scale distillation attacks" through approximately 24,000 fake accounts (see *Chronicle: March 2026*).[^8] This incident expanded the scope of model export controls from "whether chips can be purchased" to "whether API outputs can be used to train competitor models" — a problem far more difficult to delineate than chips.

---

## V. China's response: From Huawei to self-reliant substitution

Facing blockades, China's response concentrated on two tracks: **stockpile hoarding + self-reliant substitution**.

**Hoarding**: Before the October 2023 ban took effect, Chinese companies engaged in massive procurement of A800s (reports indicate that ByteDance, Tencent, and other major Chinese firms collectively stockpiled over 100,000 A800/H800 units). These chips supported most of China's large model training in 2024 — including DeepSeek-V3's H800 cluster (2,048 H800s, trained for 2.788M GPU hours).

**Huawei Ascend**: Huawei's Ascend 910B/C series is currently the closest Chinese-made AI chip to NVIDIA's competitive offerings. Publicly available MLPerf benchmark data from 2024 showed the 910B approaching A100 levels in certain inference scenarios, but with notable gaps in training performance and CUDA ecosystem compatibility. Huawei has built an alternative software stack through its proprietary CANN operator library and MindSpore framework, but CUDA's two decades of ecosystem accumulation cannot be replicated in the short term.

**Other domestic chips**: Cambricon (MLU series), Biren Technology (BR100 series), and Hygon Information (DCU series) are all catching up, but most remain at the "usable but not powerful" stage. During 2024–2025, the consensus among Chinese AI companies was: **inference can use domestic chips, but training still heavily relies on NVIDIA inventory.**

**Domestic manufacturing**: The Kirin 9000S chip in the Huawei Mate 60 Pro (August 2023) was teardown-confirmed to use SMIC's 7nm process, shocking the West. But GPU manufacturing complexity far exceeds that of smartphone SoCs — the H100 uses TSMC's 4nm process and CoWoS advanced packaging, which SMIC cannot replicate in the near term.

---

## VI. Global landscape: Three-way polarization

The chip blockade is not a bilateral affair between the United States and China. It has triggered a tripolar AI sovereignty landscape globally.

### United States: Tech leadership + allied distribution

The United States has "NATO-ized" the AI supply chain through export controls: Tier 1 allies (Japan, South Korea, Taiwan, UK, France, Germany, etc.) can freely access the most advanced chips and technology; Tier 2 (India, Brazil, Saudi Arabia, Indonesia, etc.) have quotas; Tier 3 is fully embargoed. The ideal outcome of this system: **AI capabilities flow freely within a "circle of trusted nations," China is isolated, and intermediate countries are tethered by "sufficient but not excessive" compute quotas.**

### China: Forced acceleration

Blockades did not halt Chinese AI — they accelerated three things: **domestic chip R&D** (policy + capital dual thrust), **algorithmic efficiency optimization** (DeepSeek-V3's MoE architecture, MLA attention, and infrastructure optimization achieved near-frontier levels on constrained GPUs), and **open-source strategy** (using open-source models to build ecosystem influence, bypassing hardware limitations).

### EU: Regulatory sovereignty

On August 1, 2024, the European Union's AI Act (EU AI Act) officially entered into force — the world's first comprehensive AI regulatory legislation. It centers on risk classification: unacceptable risk (e.g., social credit scoring) is banned, high-risk applications (healthcare, education, law enforcement) require compliance assessment, and general-purpose AI (GPAI) models require transparency reports.[^9]

The EU AI Act and U.S. export controls represent two different paths of "AI sovereignty" narrative: **the United States uses chip embargoes to control "who can build AI," while the EU uses legal frameworks to control "how AI can be used."** Both are vying for the right to define global AI governance rules, but currently operate independently without coordination.

---

## VII. Timeline of key events

| Date | Event | Significance |
|------|-------|--------------|
| 2022-10-07 | BIS TPP ≥ 4800 chip embargo on China | A100/H100 severed; NVIDIA launches A800/H800 |
| 2023-08 | Huawei Mate 60 Pro released, Kirin 9000S | SMIC 7nm mass production; Western shock |
| 2023-10-17 | BIS second wave of controls, closing A800/H800 loophole | Performance density metric added; compliance downgrade space narrowed |
| 2024-03-18 | NVIDIA GTC unveils Blackwell B200 | Generational compute leap; blockade pressure transmits westward |
| 2024-08-01 | EU AI Act enters into force | World's first comprehensive AI regulatory law; risk-tiered framework |
| 2024-12 | DeepSeek-V3 released | Frontier MoE model trained on 2,048 constrained H800 GPUs |
| 2025-01-13 | BIS "AI Diffusion Rule" | Three-tier country system established; model weights brought under export control |
| 2025-01-20 | DeepSeek-R1 MIT open-source | Achieves o1-level reasoning capability under chip blockade |
| 2025-09 | Anthropic terms restrict China | Model service itself becomes a geopolitical instrument |
| 2026-02-23 | Anthropic distillation attack allegations | API output usage rights enter the center of contention |

---

## VIII. Trend analysis

- **Controls are a chase, not a siege**: Every escalation in controls triggers a cycle of "compliance downgrade → re-tightening." A100→A800→H100→H800→H20→B20 — NVIDIA found a balance between commercial viability and technical compliance in every round.
- **Blockades produced unexpected acceleration**: DeepSeek-V3 and R1 demonstrated that algorithmic efficiency can partially compensate for compute disadvantages. If the blockade's objective was "to keep Chinese AI behind," the short-term and long-term effects have diverged.
- **Tripolarization is irreversible**: The American sphere (free flow), the Chinese sphere (self-reliant substitution), and the European sphere (regulatory leadership) — the global AI ecosystem is splitting into three technological sovereignty systems. For China, complete self-reliant substitution still requires years, but complete blockade has proven infeasible.
- **Software ecosystems are harder to replace than hardware**: The CUDA ecosystem is NVIDIA's deepest and widest moat. Huawei's CANN and open-source frameworks (ROCm, oneAPI) are catching up, but the entire large model training/inference toolchain — from code to deployment — is deeply bound to CUDA. This is a barrier more difficult to overcome than the chips themselves.
- **Model weight export controls are the newest frontier**: The January 2025 AI Diffusion Rule brought models themselves under control for the first time. Enforcement of this line is more ambiguous than chip controls — model weights are digital files, and open-source distribution has virtually no physical boundaries. SIGReg, R1 distillation, MoE architectures… knowledge itself cannot be embargoed.

---

## Commentary

There is a line of laser-etched text on the A100, but what is truly etched into this blockade war is a simple economic principle: **prohibiting free exchange does not change demand — it only changes the path and cost of supply.**

When the October 2022 ban took effect, many predicted that Chinese large models would fall hopelessly behind. But three years later, the results are more complex than anticipated. DeepSeek trained a model approaching GPT-4o on constrained H800s; Huawei achieved 7nm mass production without EUV — though yields and costs are far from TSMC's, the fact that it was achievable is itself a signal. Blockades have indeed increased the cost and delay of Chinese AI, but they have not stopped it.

This calls to mind the Cold War-era COCOM embargo: the West prohibited advanced computer exports to the Soviet Union, and the Soviets built the BESM series themselves — a generation behind, but never fully cut off. Historically, technology blockades have been most successful when the technological gap was already unbridgeable — and when the gap can be closed, blockades instead become catalysts for manufacturing a sense of national urgency.

But do not overestimate the "blockades breed innovation" narrative. Algorithmic efficiency optimization can partially compensate for insufficient compute — using MoE architectures to activate only a fraction of parameters per token, using MLA attention to reduce KV cache overhead, using Multi-Token Prediction to improve training efficiency — but the ceiling of these optimizations depends on the floor of physical chip capabilities. Training a GPT-4-class dense model still requires massive quantities of frontier-level GPUs, something no algorithm can fully substitute.

The real variable is open source. R1 released its weights, training techniques, and chain-of-thought outputs under the MIT license. This signals an entirely new mode of technology diffusion — not through chip trade, not through API licensing, but through GitHub repositories. When model weights can be freely downloaded, the chip seller paradoxically loses part of their bargaining power. Perhaps this is the most unforeseen counterstrike of the blockade — not from the blockaded party, but from an organic open movement within the industry itself.

---

*Compiled by the Endfield Industrial Chronicle team: Ealdora (Annotations).*

---

(The complete story of DeepSeek from High-Flyer Quantitative to global impact is covered in *The DeepSeek Chronicle*.)

[^1]: US Department of Commerce, BIS, "Implementation of Additional Export Controls: Certain Advanced Computing and Semiconductor Manufacturing Items", 2022-10-07. 87 FR 62186. https://www.federalregister.gov/documents/2022/10/13/2022-21658/implementation-of-additional-export-controls-certain-advanced-computing-and-semiconductor
[^2]: Wikipedia, "Hopper (microarchitecture)". https://en.wikipedia.org/wiki/Hopper_(microarchitecture)
[^3]: US Department of Commerce, BIS, "Export Controls on Semiconductor Manufacturing Items and Advanced Computing Items", 2023-10-17. 88 FR 73410. https://www.federalregister.gov/documents/2023/10/25/2023-23049/export-controls-on-semiconductor-manufacturing-items-and-advanced-computing-items
[^4]: Wikipedia, "Artificial intelligence industry in China § US export controls". https://en.wikipedia.org/wiki/Artificial_intelligence_industry_in_China
[^5]: Nvidia, "NVIDIA Blackwell Platform Arrives to Power a New Era of Computing", GTC 2024, 2024-03-18. https://nvidianews.nvidia.com/news/nvidia-blackwell-platform-arrives-to-power-a-new-era-of-computing
[^6]: US Department of Commerce, BIS, "Framework for Artificial Intelligence Diffusion", 2025-01-13. https://www.federalregister.gov/documents/2025/01/15/2025-00244/framework-for-artificial-intelligence-diffusion
[^7]: Anthropic, "Commercial Terms of Service" (2025-09 update). See also AtomGit, "幕后黑手曝光：2.4万马甲、1600万次对话", 2026-03-29. https://gitcode.csdn.net/69c880230a2f6a37c59b424c.html
[^8]: Anthropic Blog, "Detecting and Preventing Distillation Attacks", 2026-02-23. https://www.anthropic.com/news/detecting-and-preventing-distillation-attacks
[^9]: European Union, "Regulation (EU) 2024/1689 (Artificial Intelligence Act)", in force 2024-08-01. https://eur-lex.europa.eu/eli/reg/2024/1689/oj
