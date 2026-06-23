# Open-source model influence ranking table

> **Note**: This table documents ecosystem influence metrics of major open-weight models (including model family aggregates) from 2023 to 2026. Data is current as of 2026-06-19. HuggingFace download counts represent cumulative totals for major model variants under official namespaces including `meta-llama`, `Qwen`, `deepseek-ai`, `mistralai`, `google`, `microsoft`, `01-ai`, `tiiuae`, `stabilityai`, etc. (Instruct / Chat variants only; excludes quantized formats such as GGUF). GitHub Stars are from the main repositories' latest data. Derivative model counts are approximate results from HuggingFace keyword searches, affected by search algorithms and intended only for order-of-magnitude reference.
>
> **Style basis**: [00_Style_Guide §IV](../00_Style_Guide_EN.md) — Treatises and tables. Tables contain no commentary — pure data, no opinions.
>
> **Cross-references**: [Treatise: Open-Source Movement](../志/开源运动.md), [Table: Open-Source Model License Comparison](开源模型许可证对照表_EN.md).

---

## I. Model family comprehensive ranking

| Rank | Model family | Developer | First open version | Latest open version | HuggingFace official downloads (cumulative) | GitHub Stars (main repo) | Derivative models (HF approx.) | License | Source |
|:--:|--------|--------|-------------|-------------|:--:|:--:|:--:|------|------|
| 1 | **Qwen** | Alibaba Cloud | Qwen-7B (2023-08) | Qwen3.6-27B (2026-04) | ~119M | 27,316 (Qwen3) | >275,000 | Apache 2.0 (mostly) | [^1][^2] |
| 2 | **Llama** | Meta | LLaMA (2023-02) | Llama 4 Scout (2025-04) | ~30.37M | 59,465 (llama) | >171,000 | Llama Community License | [^3][^4] |
| 3 | **Gemma** | Google | Gemma 1 (2024-02) | Gemma 4-31B (2026-03) | ~44.37M | 5,694 (gemma_pytorch) | >50,000 | Gemma ToU → Apache 2.0 | [^5][^6] |
| 4 | **DeepSeek** | DeepSeek | DeepSeek-V2 (2024-05) | DeepSeek-V4-Pro (2026-04) | ~30.14M | 103,780 (DeepSeek-V3) | >16,000 | MIT | [^7][^8] |
| 5 | **Mistral** | Mistral AI | Mistral 7B (2023-09) | Mistral-Medium-3.5 (2026-03) | ~6.71M | 10,817 (mistral-inference) | >40,000 | Apache 2.0 | [^9][^10] |
| 6 | **Phi** | Microsoft | Phi-2 (2023-12) | Phi-4-mini (2025-02) | ~6.04M | — | >15,000 | MIT | [^11] |
| 7 | **Falcon** | TII | Falcon-7B/40B (2023-06) | Falcon-180B (2023-09) | ~250K | — | >10,000 | Apache 2.0 | [^12] |
| 8 | **Yi** | 01.AI | Yi-6B/34B (2023-11) | Yi-1.5 (2024-05) | ~60K | 7,822 (Yi) | >8,000 | Apache 2.0 | [^13] |
| 9 | **Stable Diffusion** | Stability AI / CompVis | SD 1.4 (2022-08) | SDXL 1.0 (2023-07) | ~1.85M | 73,129 (stable-diffusion) | >60,000 | CreativeML Open RAIL-M | [^14] |
| 10 | **BLOOM** | BigScience | BLOOM-176B (2022-07) | — | — | 1,017 (bigscience) | >5,000 | RAIL 1.0 | [^15] |

---

## II. HuggingFace single-model download Top 20

> As of 2026-06-19. Using the highest-downloaded single model variant from each model family.

| Rank | Model name | Developer | HuggingFace downloads | Cumulative Likes | License | Source |
|:--:|----------|--------|:--:|:--:|------|------|
| 1 | Qwen3-0.6B | Alibaba Cloud | 27,537,244 | 1,342 | Apache 2.0 | [^1] |
| 2 | Qwen3-4B | Alibaba Cloud | 16,538,166 | 639 | Apache 2.0 | [^1] |
| 3 | Qwen2.5-7B-Instruct | Alibaba Cloud | 12,905,733 | 1,372 | Apache 2.0 | [^1] |
| 4 | Qwen3-8B | Alibaba Cloud | 12,574,844 | 1,150 | Apache 2.0 | [^1] |
| 5 | Gemma-4-26B-A4B-it | Google | 12,670,159 | 1,162 | Apache 2.0 | [^6] |
| 6 | Qwen2.5-3B-Instruct | Alibaba Cloud | 11,534,184 | 505 | Apache 2.0 / Qwen License | [^1] |
| 7 | Gemma-4-31B-it | Google | 11,081,369 | 3,029 | Apache 2.0 | [^6] |
| 8 | Qwen2.5-1.5B-Instruct | Alibaba Cloud | 10,672,297 | 744 | Apache 2.0 | [^1] |
| 9 | Llama-3.1-8B-Instruct | Meta | 9,845,394 | 6,112 | Llama 3.1 Community License | [^3] |
| 10 | Qwen3.5-4B | Alibaba Cloud | 9,599,668 | 657 | Apache 2.0 | [^1] |
| 11 | Qwen3.5-9B | Alibaba Cloud | 9,394,272 | 1,579 | Apache 2.0 | [^1] |
| 12 | Gemma-3-270M | Google | 8,309,967 | 1,034 | Gemma Terms of Use | [^5] |
| 13 | Llama-3.2-1B-Instruct | Meta | 8,191,345 | 1,487 | Llama 3.2 Community License | [^3] |
| 14 | Qwen2.5-VL-7B-Instruct | Alibaba Cloud | 8,018,709 | 1,587 | Apache 2.0 | [^1] |
| 15 | DeepSeek-R1-0528 | DeepSeek | 7,228,990 | 2,452 | MIT | [^7] |
| 16 | DeepSeek-R1 | DeepSeek | 6,838,667 | 13,400 | MIT | [^7] |
| 17 | Gemma-4-E4B-it | Google | 6,192,711 | 1,262 | Apache 2.0 | [^6] |
| 18 | Llama-2-7b-hf | Meta | 758,310 | 2,323 | Llama 2 Community License | [^3] |
| 19 | Mistral-7B-Instruct-v0.3 | Mistral AI | 2,825,132 | 2,642 | Apache 2.0 | [^9] |
| 20 | Phi-3.5-vision-instruct | Microsoft | 1,903,623 | 736 | MIT | [^11] |

---

## III. GitHub Stars ranking (model/tool repositories)

> Includes model inference repositories, training frameworks, and key ecosystem tools. Star counts are snapshots as of 2026-06-19.

| Rank | Repository | Type | Stars | Model family / Ecosystem | Source |
|:--:|------|------|:--:|------|------|
| 1 | [ollama/ollama](https://github.com/ollama/ollama) | Local runtime framework | 174,534 | Llama / Cross-ecosystem | [^16] |
| 2 | [open-webui/open-webui](https://github.com/open-webui/open-webui) | Web UI | 142,262 | Cross-ecosystem | [^16] |
| 3 | [ggml-org/llama.cpp](https://github.com/ggml-org/llama.cpp) | Inference engine | 117,316 | Core Llama ecosystem | [^16] |
| 4 | [deepseek-ai/DeepSeek-V3](https://github.com/deepseek-ai/DeepSeek-V3) | Model repository | 103,780 | DeepSeek | [^7] |
| 5 | [deepseek-ai/DeepSeek-R1](https://github.com/deepseek-ai/DeepSeek-R1) | Model repository | 91,986 | DeepSeek | [^7] |
| 6 | [vllm-project/vllm](https://github.com/vllm-project/vllm) | Inference engine | 83,334 | Cross-ecosystem | [^16] |
| 7 | [CompVis/stable-diffusion](https://github.com/CompVis/stable-diffusion) | Model repository | 73,129 | Stable Diffusion | [^14] |
| 8 | [hiyouga/LlamaFactory](https://github.com/hiyouga/LlamaFactory) | Fine-tuning framework | 72,301 | Llama / Cross-ecosystem | [^16] |
| 9 | [unslothai/unsloth](https://github.com/unslothai/unsloth) | Fine-tuning acceleration | 66,844 | Cross-ecosystem | [^16] |
| 10 | [Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm) | Application layer | 61,814 | Cross-ecosystem | [^16] |
| 11 | [meta-llama/llama](https://github.com/meta-llama/llama) | Model repository | 59,465 | Llama | [^3] |
| 12 | [QwenLM/Qwen3](https://github.com/QwenLM/Qwen3) | Model repository | 27,316 | Qwen | [^1] |
| 13 | [QwenLM/Qwen](https://github.com/QwenLM/Qwen) | Model repository | 21,315 | Qwen (1/1.5/2/2.5) | [^1] |
| 14 | [mistralai/mistral-inference](https://github.com/mistralai/mistral-inference) | Inference code | 10,817 | Mistral | [^9] |
| 15 | [01-ai/Yi](https://github.com/01-ai/Yi) | Model repository | 7,822 | Yi | [^13] |
| 16 | [EleutherAI/gpt-neox](https://github.com/EleutherAI/gpt-neox) | Training framework | 7,441 | EleutherAI | [^17] |

---

## IV. DeepSeek-R1 distilled model comparison

> DeepSeek-R1 simultaneously released 6 distilled dense models, with base models from Qwen2.5 and Llama respectively. This is the benchmark case for open-source reasoning model distillation.

| Distilled model | Base model | Parameters | HuggingFace downloads | Likes | License | Source |
|----------|------|:--:|:--:|:--:|------|------|
| DeepSeek-R1-Distill-Qwen-1.5B | Qwen2.5-1.5B | 1.5B | 654,603 | 1,526 | MIT | [^7] |
| DeepSeek-R1-Distill-Qwen-7B | Qwen2.5-7B | 7B | 358,198 | 845 | MIT | [^7] |
| DeepSeek-R1-Distill-Qwen-14B | Qwen2.5-14B | 14B | 520,058 | 656 | MIT | [^7] |
| DeepSeek-R1-Distill-Qwen-32B | Qwen2.5-32B | 32B | 652,637 | 1,567 | MIT | [^7] |
| DeepSeek-R1-Distill-Llama-8B | Llama-3.1-8B | 8B | 417,533 | 866 | MIT | [^7] |
| DeepSeek-R1-Distill-Llama-70B | Llama-3.3-70B | 70B | 103,526 | 780 | MIT | [^7] |

**Observation**: The Qwen2.5 distilled models have collectively higher downloads than the Llama distilled models (4 Qwen distills totaling 2.19M vs. 2 Llama distills totaling 520K), reflecting Qwen's higher community adoption rate at small-to-medium parameter scales. The 32B distilled model became the most popular reasoning base.

---

## V. Ecosystem toolchain influence

> The value of open-source models extends beyond the weights themselves — inference engines, fine-tuning frameworks, and local runtime tools built around models collectively form the ecosystem. Below are key tool repositories that directly serve open-weight models.

| Tool | Type | Stars | Primary models served | First release | Source |
|------|------|:--:|------|------|------|
| **Ollama** | Local runtime | 174,534 | Llama, Qwen, Mistral, DeepSeek, etc. | 2023-08 | [^16] |
| **Open WebUI** | Web interface | 142,262 | Ollama backend | 2023-12 | [^16] |
| **llama.cpp** | CPU/edge inference | 117,316 | Llama (namesake) and all GGUF models | 2023-03 | [^16] |
| **vLLM** | High-performance inference | 83,334 | All Transformers models | 2023-06 | [^16] |
| **LlamaFactory** | Fine-tuning framework | 72,301 | Llama, Qwen, Mistral, etc. | 2023-09 | [^16] |
| **Unsloth** | Fine-tuning acceleration | 66,844 | Llama, Mistral, Gemma, etc. | 2023-12 | [^16] |
| **Anything LLM** | RAG application | 61,814 | Cross-ecosystem | 2023-10 | [^16] |
| **FastChat** | Serving framework | 39,482 | Vicuna / Llama ecosystem | 2023-03 | [^16] |

---

## Notes

### HuggingFace download count methodology

- Download counts are cumulative all-time totals from the HuggingFace official `downloads` API field, not monthly or annual figures.
- Only major model variants (base / Instruct / Chat) under official namespaces are counted; community quantized versions (GGUF, GPTQ, AWQ, etc.) and multimodal or speech extended variants (excluding VL, OCR, etc. that are separately tallied) are excluded.
- Totals for each model family are simple sums of selected variants and do not represent the family's full HuggingFace download count — community forks and quantized version downloads are not included.
- Qwen's downloads surged significantly after Qwen3's release in 2025; Qwen3-0.6B, with 27.5 million downloads, became the single most-downloaded model on HuggingFace, reflecting demand for edge deployment and lightweight inference.

### Derivative model counts

- Derivative model counts are approximate results from HuggingFace model search by keyword. A "llama" search may include non-direct-derivative projects like LlamaIndex and llama.cpp; a "qwen" search includes cross-modal variants like Qwen-VL and Qwen-Audio. Numbers are for order-of-magnitude reference only and should not be used for precise comparison.
- The Llama ecosystem has the most derivative models, but Qwen and DeepSeek's growth rates have accelerated significantly since 2025.

### Distilled model notes

- DeepSeek-R1's 6 distilled models (§IV) are publicly released, officially published distillation cases. The number of community-distilled R1-style models far exceeds this — searching "DeepSeek-R1-Distill" on HuggingFace returns numerous unofficial distilled variants.
- Llama and Qwen have established a division of labor as distillation bases in the open-source movement: Qwen covers 0.5B–32B at small-to-medium parameter scales, Llama covers 8B–70B at medium-to-large scales. See Treatise: Open-Source Movement §V for details.

### License details

For license classification of each model family, see the [Table: Open-Source Model License Comparison](开源模型许可证对照表_EN.md). Brief overview:
- **Apache 2.0** (OSI approved): Mistral, Qwen3 (all), Gemma 4, Falcon (180B), Yi
- **MIT** (OSI approved): DeepSeek (all), Phi
- **Llama Community License** (custom): Llama 2/3/3.1/3.2/4 — additional authorization required for >700M MAU
- **Gemma Terms of Use** (custom): Gemma 1/2/3 — prohibits specific harmful uses
- **CreativeML Open RAIL-M**: Stable Diffusion — includes behavioral restrictions

---

*Compiled by the Endfield Industrial Historian team: Yvonne (Architecture Audit)*

---

[^1]: Qwen Team, "Qwen3: Think Deeper, Act Faster", 2025-04. https://qwenlm.github.io/blog/qwen3/ ; Qwen Team, "Qwen2.5: A Party of Foundation Models!", 2024-09. https://qwenlm.github.io/blog/qwen2.5/
[^2]: HuggingFace, Qwen models API. https://huggingface.co/api/models?author=Qwen (queried 2026-06-19)
[^3]: Meta AI, "Introducing Meta Llama 3", 2024-04-18. https://ai.meta.com/blog/meta-llama-3/ ; "Introducing Llama 3.1", 2024-07-23. https://ai.meta.com/blog/meta-llama-3-1/
[^4]: GitHub, meta-llama/llama. https://github.com/meta-llama/llama (queried 2026-06-19, 59,465 stars)
[^5]: Google, "Gemma: Introducing new state-of-the-art open models", 2024-02-21. https://blog.google/technology/developers/gemma-open-models/
[^6]: Google, "Gemma 4", 2026-03. https://blog.google/technology/developers/gemma-4/ ; HuggingFace, google/gemma-4-31B-it. https://huggingface.co/google/gemma-4-31B-it
[^7]: DeepSeek-AI, "DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning", arXiv:2501.12948, 2025-01. https://arxiv.org/abs/2501.12948 ; GitHub, deepseek-ai/DeepSeek-V3. https://github.com/deepseek-ai/DeepSeek-V3 (103,780 stars)
[^8]: DeepSeek-AI, "DeepSeek-V3 Technical Report", arXiv:2412.19437, 2024-12. https://arxiv.org/abs/2412.19437
[^9]: Mistral AI, "Mistral 7B", 2023-09-27. https://mistral.ai/news/announcing-mistral-7b ; GitHub, mistralai/mistral-inference. https://github.com/mistralai/mistral-inference (10,817 stars)
[^10]: HuggingFace, mistralai models API. https://huggingface.co/api/models?author=mistralai (queried 2026-06-19)
[^11]: Microsoft, "Phi-2: The surprising power of small language models", 2023-12. https://azure.microsoft.com/en-us/blog/phi-2-the-surprising-power-of-small-language-models/ ; HuggingFace, microsoft/phi-4. https://huggingface.co/microsoft/phi-4
[^12]: Technology Innovation Institute, "Falcon LLM", 2023. https://falconllm.tii.ae/
[^13]: 01.AI, "Yi: Open Foundation Models", 2023-11. https://github.com/01-ai/Yi (7,822 stars)
[^14]: Stability AI, "Stable Diffusion Public Release", 2022-08-22. https://stability.ai/news/stable-diffusion-public-release ; GitHub, CompVis/stable-diffusion. https://github.com/CompVis/stable-diffusion (73,129 stars)
[^15]: BigScience, "BLOOM: A 176B-Parameter Open-Access Multilingual Language Model", arXiv:2211.05100, 2022-11. https://arxiv.org/abs/2211.05100
[^16]: GitHub star counts queried via GitHub API on 2026-06-19. All numbers are point-in-time snapshots.
[^17]: EleutherAI, "GPT-NeoX-20B: An Open-Source Autoregressive Language Model", arXiv:2304.04165, 2023-04. https://arxiv.org/abs/2304.04165
