# Training cost comparison table

> **Note**: This table documents pre-training cost estimates for major large language models from 2020 to 2026, with compute expenditure as the primary metric. "Training cost" refers to GPU computing costs for the final round of pre-training (or RL training), excluding data procurement, labor costs, trial-and-error overhead, and multiple intermediate training runs. Costs for closed-source models are industry estimates (from Epoch AI, SemiAnalysis, etc.), labeled "Estimated"; costs for open-source models come from self-reported technical reports or derived calculations, labeled "Reported" or "Derived." `*` indicates data that is estimated or uncertain. GPU hourly rates are estimated based on market prices during each model's training period (V100 ~$1.5/hr, A100 ~$2/hr, H100 ~$2/hr, H800 ~$2/hr).
>
> **Style basis**: [00_Style_Guide §IV](../00_Style_Guide_EN.md) — Treatises and tables. Tables contain no commentary — pure data, no opinions.
>
> **Cross-references**: Funding and valuation changes: see [Major Funding and Valuation Table](主要融资与估值表_EN.md); GPU generation and cluster scale evolution: see [Treatise: Compute Evolution](../志/算力变迁.md); Inference API pricing changes: see [LLM Pricing History Table](大模型价格沿革表_EN.md).

---

| Release date | Model | Developer | Parameter count | Training cost estimate | Training duration | GPU count / model | Data source |
|----------|------|--------|----------|-------------|----------|----------------|----------|
| 2020-06 | GPT-3 | OpenAI | 175B (dense) | ~$4.6M* | ~34 days | ~10K V100 | Estimated[^1] |
| 2022-03 | Chinchilla | DeepMind | 70B (dense) | Undisclosed | Undisclosed | TPUv4 | Undisclosed[^2] |
| 2022-04 | PaLM 540B | Google | 540B (dense) | Undisclosed* | Undisclosed | 6,144 TPUv4 | Undisclosed[^3] |
| 2023-03 | GPT-4 | OpenAI | ~1.8T MoE (~220B active)* | $63M—$100M+* | ~90—100 days | ~25K A100 | Estimated[^4] |
| 2023-07 | Llama 2 70B | Meta | 70B (dense) | ~$20M* | ~29 days | 2,048 A100 | Estimated[^5] |
| 2024-07 | Llama 3.1 405B | Meta | 405B (dense) | ~$60M+* | ~54 days | ~16K H100 | Reported[^6] |
| 2024-12 | DeepSeek-V3 | DeepSeek | 671B MoE (37B active) | **~$5.6M** | ~55 days | 2,048 H800 | Reported[^7] |
| 2025-01 | DeepSeek-R1 | DeepSeek | 671B MoE (V3 base) | ~$6M total* (incl. V3 base ~$5.6M + RL phase) | ~55 days pre-training + RL phase | 2,048 H800 | Derived[^8] |
| 2026-04 | DeepSeek-V4 | DeepSeek | Undisclosed* | Undisclosed | Undisclosed | Undisclosed | Undisclosed[^9] |

---

## Notes

### Correspondence with major funding events

The scale of training costs maps clearly to concurrent funding events:

- **GPT-4's $63M—$100M+** training cost occurred when OpenAI had just received Microsoft's ~$10B strategic investment (2023-01). The single training run represented approximately 0.6%–1% of that round (see [Major Funding and Valuation Table](主要融资与估值表_EN.md)[^3]).
- **Llama 3.1 405B's ~$60M+** training cost was borne by Meta's own capital — Meta's AI R&D budget is estimated at $3–4B/year, and this training represented only a fraction of its annual compute budget.
- **DeepSeek-V3's ~$5.6M** training cost was funded by parent company High-Flyer Capital Management's own capital, with no traditional fundraising (see [Major Funding and Valuation Table](主要融资与估值表_EN.md) DeepSeek notes). The $5.57M figure represents approximately **6%** of GPT-4's estimated cost.

### Correspondence with compute evolution

GPU cluster scale has grown from GPT-3's ~10K V100 to Llama 3.1 405B's ~16K H100, and further to xAI Colossus's 100K H100 — the compute threshold for training frontier models continues to rise (see [Treatise: Compute Evolution](../志/算力变迁.md) §IV–V). DeepSeek-V3's completion of frontier-level training with 2,048 H800 (export-control downgraded variant) on a $5.6M budget stands as a notable outlier on this upward curve.

### Methodology notes

1. **Cost scope**: "Training cost" in this table refers only to GPU computing costs (GPU hours × hourly rate), excluding data annotation, cleaning, labor, infrastructure, power/cooling, intermediate experimental training, etc. Actual total cost of ownership (TCO) is typically 2–5× the figures shown.
2. **GPU hourly rates**: Closed-source models are estimated based on public cloud A100/H100 on-demand instance pricing; DeepSeek uses H800 market rate ~$2/hr (self-reported data). Self-built clusters' actual depreciation costs may be lower than cloud prices.
3. **MoE models**: Both GPT-4 and DeepSeek-V3 use Mixture of Experts (MoE) architectures, where total parameters far exceed per-token activated parameters. Training cost is primarily determined by GPU hours and cluster size, not parameter count per se.
4. **DeepSeek-R1**: R1 performs RL training on the V3 base. The "~$6M total" in the table includes V3 base's ~$5.6M training cost plus R1's RL-phase-specific overhead. The exact cost of the RL phase is undisclosed; this figure is a composite estimate and is uncertain.
5. **DeepSeek-V4**: As of compilation (2026-06), V4's technical report has not been published, and training cost, GPU configuration, and other details are unavailable. V4's API pricing is reportedly approximately 1/370 that of GPT-5.5 (see Chronicle: April 2026), but inference price advantages do not directly equate to training cost advantages.

---

*Compiled by the Endfield Industrial Historian team: Yvonne (Architecture Audit)*

---

[^1]: Epoch AI, "Notable AI Models — Training Compute, Data, and Investment". GPT-3 training compute ~3.14×10²³ FLOPs. Training compute costs estimated in the low millions of dollars based on V100 cloud prices at the time. https://epochai.org/data/notable-ai-models ; Brown et al., "Language Models are Few-Shot Learners", arXiv:2005.14165, 2020-05. https://arxiv.org/abs/2005.14165
[^2]: Hoffmann et al., "Training Compute-Optimal Large Language Models" (Chinchilla), arXiv:2203.15556, 2022-03. DeepMind did not disclose training cost or GPU count in the paper. https://arxiv.org/abs/2203.15556
[^3]: Chowdhery et al., "PaLM: Scaling Language Modeling with Pathways", arXiv:2204.02311, 2022-04. Training used 6,144 TPUv4 chips; training compute ~2.5×10²⁴ FLOPs. Google did not disclose training cost. https://arxiv.org/abs/2204.02311
[^4]: OpenAI, "GPT-4 Technical Report", arXiv:2303.08774, 2023-03. OpenAI did not disclose training compute details in the technical report. Epoch AI estimated training compute at ~2×10²⁵ FLOPs, approximately 25K A100 for 90–100 days. SemiAnalysis estimated training cost at $63M+; the widely cited upper-bound figure is $100M+. Parameter count (~1.8T MoE) comes from industry estimates, not official confirmation. https://arxiv.org/abs/2303.08774 ; Epoch AI, https://epochai.org/data/notable-ai-models
[^5]: Touvron et al., "Llama 2: Open Foundation and Fine-Tuned Chat Models", arXiv:2307.09288, 2023-07. Meta did not explicitly disclose training cost in the paper. The 2,048 A100 for 29 days figure comes from Epoch AI estimates; at A100 cloud pricing ~$2/hr, this equates to approximately $20M. https://arxiv.org/abs/2307.09288
[^6]: Dubey et al., "The Llama 3 Herd of Models", arXiv:2407.21783, 2024-07. Meta officially disclosed that Llama 3 405B consumed approximately 30.8M H100 GPU hours. Meta built two clusters each containing 24,576 H100 GPUs for training. At H100 cloud pricing ~$2/hr, this equates to approximately $60M+. Meta did not officially publish a training cost figure. https://arxiv.org/abs/2407.21783 ; Meta, "Building Meta's GenAI Infrastructure", 2024-03-12. https://engineering.fb.com/2024/03/12/data-center-engineering/building-metas-genai-infrastructure/
[^7]: DeepSeek-AI et al., "DeepSeek-V3 Technical Report", arXiv:2412.19437, 2024-12-27. V3 self-reported consumption of 2.788M H800 GPU hours; at H800 market rate ~$2/GPU hr, this equates to approximately $5.576M. Pre-training covered approximately 14.8T tokens, entirely in FP8 mixed precision, completed in about two months with no loss spikes requiring rollback. The 2,048 H800 GPUs are export-control downgraded H100 variants (NVLink interconnect bandwidth halved). https://arxiv.org/abs/2412.19437
[^8]: R1 performs pure RL training (GRPO) on the V3 base. The exact cost of the RL phase is undisclosed. A composite estimate of R1's total training cost (including V3 base ~$5.6M + RL phase) is approximately $6M — this figure is aggregated from Wikipedia and multiple media reports and is uncertain. The V3 base portion is approximately $5.6M (see note [^7]). DeepSeek-AI et al., "DeepSeek-R1", arXiv:2501.12948, 2025-01-22. https://arxiv.org/abs/2501.12948 ; Wikipedia "DeepSeek-R1" entry citing sources: "External estimates suggest R1's training cost is slightly higher than DeepSeek-V3, at around $6M."
[^9]: DeepSeek V4 Preview was released on 2026-04-24 (DeepSeek API Docs, https://api-docs.deepseek.com/news/news260424). As of compilation, the technical report has not been published, and training cost and compute configuration are unavailable. V4's API pricing is reportedly approximately 1/370 that of GPT-5.5 (see Chronicle: April 2026), but inference pricing does not directly reflect training cost.
