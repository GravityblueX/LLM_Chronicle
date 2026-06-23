# Open-source model license comparison table

> This table documents the licenses of major open-weight models in the LLM field, grouped by model family, comparing license types, commercial permissions, key restrictions, and OSI certification status. Only models with downloadable weights are listed — purely API-based closed-source services (GPT-4, Claude, Gemini, etc.) are not included.

---

## Overview

- "Open weights" means model parameters can be downloaded; "open code" means training/inference code is publicly accessible; "open data information" means the training data sources and processing methods are known. These are three distinct concepts.
- OSI certification applies only to the code/software level. After the Open Source AI Definition (OSAID) was released, weight-based models can apply for OSAID compliance certification, but as of mid-2026 no model has formally passed.[^1]
- License names are taken from official originals. Chinese translations are for explanation only.
- "Commercial use allowed" refers to what the license itself permits — it does not cover third-party intellectual property risks (e.g., training data copyright disputes).
- Different versions within the same model family may have different licenses, distinguished by row in the table. Important version changes are noted in the appendix.

---

## Main table

| Model family | Representative models | Release date | License | OSI certified | Commercial | Key restrictions | Source |
|--------|----------|----------|--------|:--:|:--:|------|------|
| **Llama 1** | 7B / 13B / 33B / 65B | 2023-02 | Research license (non-open-source) | ❌ | ❌ | Available only to approved researchers; weights became de facto accessible after 4chan leak | [^2] |
| **Llama 2** | 7B / 13B / 70B | 2023-07 | Llama 2 Community License | ❌ | ✅ | Additional authorization required from Meta for >700M MAU | [^3] |
| **Llama 3** | 8B / 70B | 2024-04 | Llama 3 Community License | ❌ | ✅ | Same as above | [^4] |
| **Llama 3.1** | 8B / 70B / 405B | 2024-07 | Llama 3.1 Community License | ❌ | ✅ | Same as above; Mark Zuckerberg called it "open-source," but OSI classifies it as open-weight rather than open-source AI | [^5] |
| **Mistral** | Mistral 7B / Mixtral 8x7B | 2023-09 / 2023-12 | Apache 2.0 | ✅ | ✅ | No additional restrictions; Apache 2.0 is an OSI-approved classic open-source license | [^6][^7] |
| **DeepSeek-V2** | DeepSeek-V2 | 2024-05 | MIT | ✅ (code level) | ✅ | Weights open; code repository MIT | [^8] |
| **DeepSeek-V3** | 671B MoE | 2024-12 | MIT | ✅ | ✅ | Weights and code both MIT; training data information disclosed in technical report | [^9] |
| **DeepSeek-R1** | 671B MoE + 6 distilled models | 2025-01 | MIT | ✅ | ✅ | Weights, code, paper, and distilled models all MIT; widely regarded as one of the most permissive open-weight models | [^10] |
| **Qwen2.5** | 0.5B–72B + Coder + Math | 2024-09 | Apache 2.0 (except 3B and 72B) | ✅ (mostly) | ✅ (mostly) | 3B and 72B use Qwen License (a custom license similar to Llama) | [^11] |
| **Qwen3** | 0.6B–235B MoE + dense | 2025-04 | Apache 2.0 (all open models) | ✅ | ✅ | Full spectrum Apache 2.0; unified license for MoE and dense | [^12] |
| **Gemma 1** | 2B / 7B | 2024-02 | Gemma Terms of Use | ❌ | ✅ | Google custom terms; prohibits generating harmful content, developing weapons, etc.; commercial use requires accepting terms | [^13] |
| **Gemma 2** | 9B / 27B | 2024-06 | Gemma Terms of Use | ❌ | ✅ | Same as above; terms largely consistent with Gemma 1 | [^14] |
| **Stable Diffusion** | SD 1.x / 2.x / SDXL | 2022-08 onward | CreativeML Open RAIL-M | ❌ | ✅ | Based on RAIL (Responsible AI License); includes behavioral restrictions: prohibits illegal use, discrimination, misinformation, medical decisions, etc. | [^15] |
| **BLOOM** | 176B | 2022-07 | RAIL 1.0 | ❌ | ✅ | Similar to RAIL-M; includes usage behavioral restrictions | [^16] |
| **Falcon** | 7B / 40B / 180B | 2023-06 onward | TII Falcon License → Apache 2.0 | ⚠️ | ✅ | Initial version was TII custom license (similar to Apache 2.0 + extra terms); changed to Apache 2.0 starting with 180B | [^17] |
| **Yi** | 6B / 9B / 34B | 2023-11 onward | Apache 2.0 | ✅ | ✅ | Released by 01.AI; no additional restrictions | [^18] |
| **Command R** | Command R / R+ | 2024-03 | CC BY-NC 4.0 | ❌ | ❌ | Creative Commons Attribution-NonCommercial; not for commercial use, research only | [^19] |
| **Phi** | Phi-2 / Phi-3 / Phi-3.5 | 2023-12 onward | MIT | ✅ | ✅ | Released by Microsoft; MIT license, no additional restrictions | [^20] |
| **EleutherAI** | GPT-Neo / GPT-J / GPT-NeoX / Pythia | 2021–2023 | MIT / Apache 2.0 | ✅ | ✅ | Full-stack open (weights, code, data, training logs); the LLM project closest to the traditional open-source definition | [^21] |

---

## License classification quick reference

### Classic open-source licenses (OSI approved, no behavioral restrictions)

| License | Model families |
|--------|--------|
| **MIT** | DeepSeek-V2, V3, R1; Phi; EleutherAI (GPT-Neo/J/NeoX, etc.) |
| **Apache 2.0** | Mistral (7B, Mixtral); Qwen2.5 (mostly), Qwen3 (all); Falcon (180B); Yi |

### Custom open licenses (commercial use permitted, but with conditions)

| License / Type | Model families | Typical restrictions |
|---------------|--------|----------|
| **Llama Community License** | Llama 2 / 3 / 3.1 | Additional authorization required for >700M MAU |
| **Gemma Terms of Use** | Gemma 1 / 2 | Prohibits generating harmful content, weapon development, and other specific uses |
| **CreativeML Open RAIL-M** | Stable Diffusion | Prohibits illegal, discriminatory, misleading, and medical decision-making uses |
| **RAIL 1.0** | BLOOM | Includes usage behavioral restrictions |

### Non-commercial open weights only

| License | Model families | Restrictions |
|--------|--------|------|
| **CC BY-NC 4.0** | Command R / R+ | No commercial use |
| **Research license** | Llama 1 (original) | Approved researchers only |

---

## Notes

- Llama 1's "de facto open-source" is a special case: the original license was a non-open-source research license, but after weights were fully leaked on BitTorrent, they became de facto open resources. Meta did not pursue liability for the leak and proactively released Llama 2 with a commercial license four months later.
- Qwen2.5's 3B and 72B use a custom Qwen License rather than Apache 2.0. Qwen3 has unified all sizes to Apache 2.0.
- Stable Diffusion 3 and subsequent versions (SD3 Medium, SD3.5) had adjusted license terms, with some versions adding restrictions for large-scale commercial users; these are not covered by CreativeML Open RAIL-M. This table only lists the 1.x–SDXL generation most used by the community.
- EleutherAI is the most thoroughly open LLM project in terms of full-stack openness: from data (The Pile) to training code (GPT-NeoX) to weights to training logs, everything is public. It is frequently cited as the extreme reference point in "open-source AI" standard discussions.
- For the relationship between the OSI Open Source AI Definition (OSAID) and the above licenses, see Treatise: Open-Source Movement §VI.

---

*Compiled by the Endfield Industrial Historian team: Yvonne (Architecture Audit)*

---

[^1]: Open Source Initiative, "The Open Source AI Definition – 1.0", 2024-10-28. https://opensource.org/ai/open-source-ai-definition
[^2]: Touvron et al., "LLaMA: Open and Efficient Foundation Language Models", arXiv:2302.13971, 2023-02. https://arxiv.org/abs/2302.13971
[^3]: Meta AI, "Llama 2: Open Foundation and Fine-Tuned Chat Models", 2023-07-18. https://ai.meta.com/blog/llama-2/
[^4]: Meta AI, "Introducing Meta Llama 3", 2024-04-18. https://ai.meta.com/blog/meta-llama-3/
[^5]: Meta AI, "Introducing Llama 3.1", 2024-07-23. https://ai.meta.com/blog/meta-llama-3-1/
[^6]: Mistral AI, "Mistral 7B", 2023-09-27. https://mistral.ai/news/announcing-mistral-7b
[^7]: Mistral AI, "Mixtral of experts", 2023-12-11. https://mistral.ai/news/mixtral-of-experts
[^8]: DeepSeek-AI, "DeepSeek-V2: A Strong, Economical, and Efficient Mixture-of-Experts Language Model", arXiv:2405.04434, 2024-05. https://arxiv.org/abs/2405.04434
[^9]: DeepSeek-AI, "DeepSeek-V3 Technical Report", arXiv:2412.19437, 2024-12. https://arxiv.org/abs/2412.19437
[^10]: DeepSeek-AI, "DeepSeek-R1", GitHub, 2025-01. https://github.com/deepseek-ai/DeepSeek-R1
[^11]: Qwen Team, "Qwen2.5: A Party of Foundation Models!", 2024-09. https://qwenlm.github.io/blog/qwen2.5/
[^12]: Qwen Team, "Qwen3: Think Deeper, Act Faster", 2025-04. https://qwenlm.github.io/blog/qwen3/
[^13]: Google, "Gemma: Introducing new state-of-the-art open models", 2024-02-21. https://blog.google/technology/developers/gemma-open-models/
[^14]: Google, "Gemma 2: Improving open language models at a practical size", 2024-06-27. https://blog.google/technology/developers/google-gemma-2/
[^15]: Stability AI, "Stable Diffusion Public Release", 2022-08-22. https://stability.ai/news/stable-diffusion-public-release
[^16]: BigScience, "BLOOM: A 176B-Parameter Open-Access Multilingual Language Model", arXiv:2211.05100, 2022-11. https://arxiv.org/abs/2211.05100
[^17]: Technology Innovation Institute, "Falcon LLM", 2023. https://falconllm.tii.ae/
[^18]: 01.AI, "Yi: Open Foundation Models", 2023-11. https://github.com/01-ai/Yi
[^19]: Cohere, "Command R: Retrieval Augmented Generation at Production Scale", 2024-03. https://docs.cohere.com/docs/command-r
[^20]: Microsoft, "Phi-2: The surprising power of small language models", 2023-12. https://azure.microsoft.com/en-us/blog/phi-2-the-surprising-power-of-small-language-models/
[^21]: EleutherAI, "GPT-NeoX-20B: An Open-Source Autoregressive Language Model", arXiv:2304.04165, 2023-04. https://arxiv.org/abs/2304.04165
