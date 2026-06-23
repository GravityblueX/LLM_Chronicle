# Geopolitics and Embargoes

> Large language models did not emerge from a vacuum. Behind every generation of model parameters and performance lies a silicon supply chain—from TSMC's wafer fabs to NVIDIA's GPUs, from U.S. export control lists to China's smuggling channels. When AI capabilities began approaching or even surpassing human expert levels, chips ceased to be mere commodities—they became the boundary of national security. This article records the five-year escalation of embargoes from the A100 ban to the AI Diffusion Rule, and the AI sovereignty strategies that emerged in response across nations.

---

## I. Round One: October 2022 — A100/H100 Supply Cut to China

The geopolitical封锁 of the large language model era did not begin with ChatGPT—it began with chips.

**On 2022-10-07**, the U.S. Department of Commerce's Bureau of Industry and Security (BIS) issued an Interim Final Rule (IFR) imposing export controls on advanced computing chips. The core threshold was a composite formula based on compute performance and interconnect bandwidth: chips with **TPP (Total Processing Performance) ≥ 4800** required a BIS license for export to China (including Hong Kong and Macau). The A100 scored approximately 624 on the TPP scale, and the H100 even higher—both fell within the controlled scope.[^1]

This was the标志性 moment when the U.S.-China chip war expanded from Huawei/5G to AI chips. Previous sanctions targeted specific entities like Huawei and SMIC, but the October 7 rule was the first to draw an embargo boundary based on **performance thresholds**—not to block a single company, but to block a capability.

**NVIDIA's "compliant downgrade"**: After the ban took effect, NVIDIA quickly designed China-specific chips—the **A800** (November 2022) and **H800** (early 2023). Both offered identical compute capabilities to the A100/H100, merely reducing NVLink interconnect bandwidth (from 600 GB/s to 400 GB/s) to circumvent the TPP threshold. This meant single-card training performance was preserved, but multi-card cluster efficiency decreased—a实质性 loss for thousand-card-scale LLM training.[^2]

---

## II. Round Two: October 2023 — Closing the A800/H800 Loophole

NVIDIA's "slow the speed, keep the compute" strategy lasted less than a year.

**On 2023-10-17**, BIS issued updated rules, dramatically tightening export controls:[^3]

- **Eliminated the single TPP threshold** and introduced a **Performance Density** metric—evaluating both total compute and compute-per-area. Although the A800/H800 had reduced interconnect speeds, their single-chip compute density was unchanged, bringing them under the new rules.
- **Added D1–D5 country groupings**, imposing a "presumption of denial" licensing policy for Macau and D5 group countries (including China).
- **Narrowed the "compliant downgrade" space**: explicitly restricting "variant chips designed to circumvent controls." If a chip's original design exceeded the threshold, the downgraded version was equally controlled.
- **Restricted advanced chip manufacturing equipment**: not only banning chip sales but also limiting exports to China of lithography equipment and EDA tools used to produce advanced chips.

The key significance of this round of revisions was not the change in ban content, but the dynamic it revealed: **the game between controls and supply chains is a chase, not a siege.** Each time rules tightened, NVIDIA found a compliance loophole; BIS tightened again, closing that loophole. The A800/H800 completed its full "birth → compliance → obsolescence" cycle within eight months.

Subsequently, NVIDIA again introduced China-specific versions—the H20 and L20—but this time the compromise was far greater: the H20's single-card compute was slashed to approximately 15% of the H100's, well below the control threshold. The代价 was that the H20 was nearly unusable for LLM training, suitable only for inference.[^4]

---

## III. Blackwell and the Escalation of Controls

**On 2024-03-18**, NVIDIA unveiled the Blackwell architecture and B200 GPU at GTC 2024. The GB200 NVL72 interconnected 72 Blackwell GPUs via NVLink into a single巨型 compute node, achieving 20 PFLOPS of FP4 inference compute (approximately 30× the A100).[^5]

Blackwell's release subjected the embargo logic to new pressure. Under the October 2023 rules, the B200 clearly fell under control—its compute density far exceeded the threshold. NVIDIA again designed a China-compliant B20, but public reports indicated it had not yet received BIS approval as of early 2025, and Chinese customers showed limited interest in the大幅 downgraded compliant chips.

**On 2025-01-13**, one week before the Biden administration left office, BIS issued the "AI Diffusion Rule" (Framework for Artificial Intelligence Diffusion Interim Final Rule). This was the most comprehensive AI chip export control framework to date:[^6]

- Divided over 170 countries into three tiers: **Tier 1** (18 allied nations, unrestricted), **Tier 2** (approximately 120 countries, with quota caps), **Tier 3** (China, Russia, etc., embargoed).
- **Tier 2 quotas**: each country could purchase approximately 1,700 high-end GPUs per year (or equivalent compute), with additional licenses required beyond that.
- Expanded controls from GPU chips to **model weight exports**: for closed-source models exceeding a specific compute threshold (10^26 FLOP training compute), transferring weights to Tier 2/3 countries required Department of Commerce approval.

This rule sparked widespread controversy. NVIDIA publicly opposed it, stating it was "ostensibly anti-China but actually打击 the normal market for global AI proliferation." The European Commission also expressed concern, arguing that the quota system could affect AI infrastructure construction in smaller European nations.

---

## IV. Model Export Controls and Anthropic's Restricted Terms

Beyond chips, the models themselves—and access to them—were also becoming geopolitical tools.

**Anthropic's Terms of Service** (September 2025 update): explicitly listed China as a "restricted region," with Chinese-controlled entities holding over 50% ownership prohibited from using Claude. The rationale directly cited "U.S. national security policy—preventing advanced AI capabilities from being used for military and intelligence purposes."[^7]

**OpenAI API restrictions**: Although OpenAI did not explicitly list China in its terms, from 2024 onward, its API access from mainland China IPs was持续 restricted. ChatGPT was never officially launched in mainland China.

**Model distillation allegations**: On 2026-02-23, Anthropic publicly accused DeepSeek, Moonshot AI (月之暗面), and MiniMax of conducting "industrial-scale distillation attacks" through approximately 24,000 fake accounts (see *Chronicle: March 2026*).[^8] This incident expanded the scope of model export controls from "whether chips can be purchased" to "whether API outputs can be used to train competitor models"—a problem far more difficult to demarcate than chips.

---

## V. China's Response: From Huawei to Self-Reliant Substitution

Facing the embargo, China's response concentrated on two lines: **stockpiling existing inventory + self-reliant substitution**.

**Stockpiling**: Before the October 2023 ban took effect, Chinese companies massively purchased A800s (reports indicate ByteDance, Tencent, and other major Chinese tech companies collectively stockpiled over 100,000 A800/H800 units). These chips supported the training of most Chinese LLMs in 2024—including DeepSeek-V3's H800 cluster (2,048 H800s, 2.788M GPU hours of training).

**Huawei Ascend**: Huawei's Ascend 910B/C series is currently the closest Chinese domestic AI chip to NVIDIA's competitive offerings. Publicly available MLPerf benchmark data from 2024 showed that the 910B approaches A100 levels in certain inference scenarios, but still has明显的 gaps in training performance and CUDA ecosystem compatibility. Huawei has built an alternative software stack through its proprietary CANN operator library and MindSpore framework, but two decades of CUDA ecosystem accumulation cannot be replicated in the short term.

**Other domestic chips**: Cambricon (MLU series), Biren Technology (BR100 series), and Hygon (DCU series) are all追赶, but most remain in the "usable but not powerful" stage. During 2024–2025, the consensus among Chinese AI companies was: **inference can use domestic chips, but training still relies heavily on NVIDIA inventory.**

**Domestic manufacturing**: The Kirin 9000S chip (August 2023) in the Huawei Mate 60 Pro was teardown-confirmed to use SMIC's 7nm process, alarming the West. But GPU manufacturing complexity far exceeds that of smartphone SoCs—the H100 uses TSMC's 4nm process and CoWoS advanced packaging, which SMIC cannot replicate in the near term.

---

## VI. The Global Landscape: Tripartite Polarization

The chip embargo was not solely a U.S.-China bilateral affair. It triggered a tripartite AI sovereignty格局 worldwide.

### The United States: Technological Leadership + Allied Distribution

The United States used export controls to "NATO-ize" the AI supply chain: Tier 1 allies (Japan, South Korea, Taiwan, the UK, France, Germany, etc.) could freely access the most advanced chips and technologies; Tier 2 (India, Brazil, Saudi Arabia, Indonesia, etc.) faced quotas; Tier 3 was完全 embargoed. The ideal outcome of this system: **AI capabilities flow freely within a circle of "trusted nations," China is isolated outside, and middle-tier countries are tethered by quotas that are "sufficient but not excessive."**

### China: Forced Acceleration

The embargo did not stall Chinese AI but rather accelerated three things: **domestic chip R&D** (dual push from policy and capital), **algorithmic efficiency optimization** (DeepSeek-V3's MoE architecture, MLA attention, and infrastructure optimization achieving near-frontier performance on constrained GPUs), and **open-source strategy** (using open-source models to build ecosystem influence, circumventing hardware limitations).

### The European Union: Regulatory Sovereignty

On August 1, 2024, the EU Artificial Intelligence Act (EU AI Act) officially entered into force—the world's first comprehensive AI regulatory legislation. Its core was risk-tiering: unacceptable risk (such as social credit scoring) was banned, high-risk applications (healthcare, education, law enforcement) required compliance assessments, and general-purpose AI (GPAI) models required transparency reports.[^9]

The EU AI Act and U.S. export controls formed two distinct paths of "AI sovereignty" narrative: **the United States uses chip embargoes to control "who can build AI," while the EU uses legal frameworks to control "how AI can be used."** Both are vying for the right to define global AI governance rules, but currently operate independently without coordination.

---

## VII. Timeline of Key Events

| Date | Event | Significance |
|------|------|------|
| 2022-10-07 | BIS TPP ≥ 4800 chip embargo on China | A100/H100 supply cut; NVIDIA launches A800/H800 |
| 2023-08 | Huawei Mate 60 Pro released with Kirin 9000S | SMIC 7nm mass production; Western alarm |
| 2023-10-17 | BIS second wave of controls, closing A800/H800 loophole | Performance density metric added; compliant downgrade space narrowed |
| 2024-03-18 | NVIDIA GTC launches Blackwell B200 | Generational compute leap; embargo pressure transfers westward |
| 2024-08-01 | EU AI Act enters into force | World's first comprehensive AI regulatory law; risk-tiered framework |
| 2024-12 | DeepSeek-V3 released | Trained frontier MoE model on 2,048 constrained H800 GPUs |
| 2025-01-13 | BIS "AI Diffusion Rule" | Three-tier country system established; model weights纳入 export controls |
| 2025-01-20 | DeepSeek-R1 MIT open-source | Achieved o1-level reasoning under chip embargo |
| 2025-09 | Anthropic terms restrict China | Model service itself becomes a geopolitical tool |
| 2026-02-23 | Anthropic distillation attack allegations | API output usage rights enter the center of controversy |

---

## VIII. Trend Analysis

- **Controls are a chase, not a siege**: Each control upgrade triggers a cycle of "compliant downgrade → re-tightening." A100 → A800 → H100 → H800 → H20 → B20—NVIDIA found a balance between business and technology at every round.

- **The embargo produced unexpected acceleration**: DeepSeek-V3 and R1 proved that algorithmic efficiency can partially compensate for compute disadvantage. If the embargo's goal was "to make Chinese AI fall behind," short-term effects and long-term effects have diverged.

- **Tripartite polarization is irreversible**: The American sphere (free flow), the Chinese sphere (self-reliant substitution), the European sphere (regulation-led)—the global AI ecosystem is splitting into three technology sovereignty systems. For China, complete self-reliant substitution still requires years, but complete embargo has proven infeasible.

- **Software ecosystems are harder to replace than hardware**: The CUDA ecosystem is NVIDIA's deepest and widest moat. Huawei's CANN and open-source frameworks (ROCm, oneAPI) are追赶, but the entire large model training/inference toolchain—from code to deployment—is deeply bound to CUDA. This is a barrier more difficult to攻克 than the chips themselves.

- **Model weight export controls are the newest frontier**: The January 2025 AI Diffusion Rule incorporated models themselves into controls for the first time. Enforcement of this line is more ambiguous than chip controls—model weights are digital files, and open-source distribution has virtually no physical boundaries. SIGReg, R1 distillation, MoE architectures… knowledge itself cannot be embargoed.

---

## Commentary

There is a line of laser-etched text on the A100, but what is truly engraved on this embargo war is a simple economic principle: **banning free trade does not change demand—it only changes the path and cost of supply.**

When the October 2022 ban took effect, many predicted Chinese LLMs would彻底 fall behind. But three years later, the results are more complex than anticipated. DeepSeek trained a model approaching GPT-4o on constrained H800s; Huawei's 7nm achieved mass production without EUV—though yields and costs are far inferior to TSMC, the mere fact of achieving it is a signal. The embargo certainly increased Chinese AI's costs and delays, but it did not stop it.

This reminds me of the Cold War-era COCOM embargo: the West banned advanced computer exports to the Soviet Union, and the Soviets built the BESM series themselves—lagging by a generation, but never completely cut off. Historically, technology embargoes have been most successful when the technology gap was already unbridgeable—whereas when the gap could be追赶, embargoes反而 became catalysts for manufacturing a sense of national urgency.

But do not overestimate the narrative that "embargoes催生 innovation." Algorithmic efficiency optimization can partially compensate for insufficient compute—using MoE architectures to activate only a small fraction of parameters per token, using MLA attention to reduce KV cache overhead, using Multi-Token Prediction to improve training efficiency—but the ceiling of these optimizations depends on the floor of physical chip capabilities. Training a GPT-4-class dense model still requires大量 frontier-level GPUs that algorithms alone cannot fully replace.

The real wildcard is open source. R1 released its weights, training techniques, and chain-of-thought outputs under the MIT license. This represents an entirely new mode of technology diffusion—not through chip trade, not through API licensing, but through GitHub repositories. When model weights can be freely downloaded, those selling chips反而 lose部分 bargaining power. This may be the most unanticipated counterattack of the embargo—not from the embargoed party, but from the industry's自发 open movement.

---

*This article was compiled by the Endfield Industrial Chronicle team: Eledra (supplementary notes).*

---

(The complete story of DeepSeek's journey from High-Flyer Quantitative to global disruption is covered in *The DeepSeek Chronicle*.)

[^1]: US Department of Commerce, BIS, "Implementation of Additional Export Controls: Certain Advanced Computing and Semiconductor Manufacturing Items", 2022-10-07. 87 FR 62186. https://www.federalregister.gov/documents/2022/10/13/2022-21658/implementation-of-additional-export-controls-certain-advanced-computing-and-semiconductor
[^2]: Wikipedia, "Hopper (microarchitecture)". https://en.wikipedia.org/wiki/Hopper_(microarchitecture)
[^3]: US Department of Commerce, BIS, "Export Controls on Semiconductor Manufacturing Items and Advanced Computing Items", 2023-10-17. 88 FR 73410. https://www.federalregister.gov/documents/2023/10/25/2023-23049/export-controls-on-semiconductor-manufacturing-items-and-advanced-computing-items
[^4]: Wikipedia, "Artificial intelligence industry in China § US export controls". https://en.wikipedia.org/wiki/Artificial_intelligence_industry_in_China
[^5]: Nvidia, "NVIDIA Blackwell Platform Arrives to Power a New Era of Computing", GTC 2024, 2024-03-18. https://nvidianews.nvidia.com/news/nvidia-blackwell-platform-arrives-to-power-a-new-era-of-computing
[^6]: US Department of Commerce, BIS, "Framework for Artificial Intelligence Diffusion", 2025-01-13. https://www.federalregister.gov/documents/2025/01/15/2025-00244/framework-for-artificial-intelligence-diffusion
[^7]: Anthropic, "Commercial Terms of Service" (2025-09 update). See also AtomGit, "幕后黑手曝光：2.4万马甲、1600万次对话", 2026-03-29. https://gitcode.csdn.net/69c880230a2f6a37c59b424c.html
[^8]: Anthropic Blog, "Detecting and Preventing Distillation Attacks", 2026-02-23. https://www.anthropic.com/news/detecting-and-preventing-distillation-attacks
[^9]: European Union, "Regulation (EU) 2024/1689 (Artificial Intelligence Act)", in force 2024-08-01. https://eur-lex.europa.eu/eli/reg/2024/1689/oj
