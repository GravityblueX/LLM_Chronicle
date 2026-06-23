# Frontier model comparison matrix (2026 frontier edition)

## Overview

This table compares major frontier large language models as of mid-2026, covering six dimensions: reasoning capability, coding ability, multimodal support, context length, API pricing, and openness. Data sources include official technical reports, official pricing pages, and public benchmark leaderboards. Numbers marked with `*` are widely cited industry estimates that have not been officially confirmed by the developers. Due to differences in evaluation settings (prompt format, few-shot count, sampling temperature, etc.), cross-model comparisons on the same benchmark should ensure consistent settings.

> **Style basis**: [00_Style_Guide §IV](../00_Style_Guide_EN.md) — Treatises and tables. Tables contain no commentary — pure data, no opinions.

---

## I. Core specifications comparison

| Model | Developer | Release date | Architecture | Total parameters | Context length | Openness |
|-------|-----------|-------------|-------------|-----------------|---------------|----------|
| GPT-5.5 | OpenAI | ~2025–2026 | Decoder-only Transformer (inferred) | Undisclosed | 256K* | Closed-source |
| Claude 4 | Anthropic | ~2025–2026 | Decoder-only Transformer (inferred) | Undisclosed | 500K* | Closed-source |
| Gemini 3.x Pro | Google DeepMind | ~2025–2026 | Decoder-only Transformer + MoE (inferred) | Undisclosed | 1M* | Closed-source |
| DeepSeek V4 Pro | DeepSeek (High-Flyer) | 2026-04-24 | MoE + MLA (671B base*) | Undisclosed (V3 was 671B) | 1M | MIT open-source |
| Qwen 3 (largest) | Alibaba Cloud | 2025-04 | MoE + Transformer | 235B (35B active) | 128K | Apache 2.0 |
| GLM-5.1 | Zhipu AI | ~2025–2026 | GLM (bidirectional attention + autoregressive hybrid) | Undisclosed | 128K* | Undetermined |

---

## II. Capability dimension comparison

| Model | Reasoning | Coding | Multimodal | Agent / Tool use |
|-------|-----------|--------|-----------|-----------------|
| GPT-5.5 | Top-tier: MMLU ~92%*, GPQA ~80%* | Top-tier: SWE-bench ~75%* | Text + image + audio + video* | Native Function Calling |
| Claude 4 | Top-tier: MMLU ~91%*, GPQA ~78%* | Top-tier: HumanEval ~96%*, SWE-bench ~78%* | Text + image + PDF | Native Tool Use, Computer Use |
| Gemini 3.x Pro | Top-tier: MMLU ~92%*, AIME ~90%* | Excellent | Text + image + audio + video (natively multimodal) | Native Function Calling |
| DeepSeek V4 Pro | Top-tier: on par with GPT-5.5* | Excellent: Codeforces ~95th percentile* | Text + image* | Function Calling supported |
| Qwen 3 (largest) | Excellent: MMLU ~88%* | Excellent | Text + image + audio + video | Qwen-Agent framework |
| GLM-5.1 | Excellent | Good | Text + image | Tool calling supported |

> **Evaluation note**: The reasoning and coding ability metrics above are representative estimates as of mid-2026. Specific scores for closed-source models such as GPT-5.5 and Claude 4 are typically selectively published by their developers in technical reports or release blogs, and evaluation settings may differ across benchmarks. Precise cross-model comparisons on the same benchmark should be based on reproduction results under standardized settings. For detailed definitions and evaluation credibility of benchmarks, see the Benchmark Quick Reference Table notes.

---

## III. API pricing comparison

Prices are in US dollars per million tokens ($/1M), based on published pricing at launch.

| Model | Input price ($/1M) | Output price ($/1M) | Free tier | Source |
|-------|:--:|:--:|----------|--------|
| GPT-5.5 | ~$15* | ~$45* | Limited free version | [^1] |
| Claude 4 | ~$3* | ~$15* | Limited free version | [^2] |
| Gemini 3.x Pro | ~$3.50* | ~$10.50* | Generous free tier | [^3] |
| DeepSeek V4 Pro | ~$0.04* | ~$0.18* | Free API available | [^4] |
| Qwen 3 (235B) | ~$0.20* | ~$0.60* | Generous free tier | [^5] |
| GLM-5.1 | ~$0.70* | ~$1.50* | Flash version free | [^6] |

> **Pricing note**: The table above shows representative single-tier prices for input/output. In practice, different models may have varying pricing strategies such as long-context surcharges, batch API discounts, or cache hit discounts. DeepSeek's cache hit pricing is even lower (V3: ¥1/1M). For a complete historical price evolution, see the LLM Pricing History Table.
>
> **What 1/370 means**: DeepSeek V4's API pricing is reportedly approximately 1/370 that of GPT-5.5.[^4] This means if GPT-5.5's blended average price is approximately $30/1M (input/output weighted), DeepSeek V4's blended average is approximately $0.08/1M.

---

## IV. Key benchmark references

The table below lists each model's publicly reported or widely cited best results on selected key benchmarks. Numbers marked with `*` are industry estimates. For definitions of each benchmark, see the Benchmark Quick Reference Table.

| Benchmark | GPT-5.5 | Claude 4 | Gemini 3.x Pro | DeepSeek V4 | Qwen 3 | GLM-5.1 |
|-----------|:--:|:--:|:--:|:--:|:--:|:--:|
| MMLU | ~92%* | ~91%* | ~92%* | ~89%* | ~88%* | ~86%* |
| GPQA | ~80%* | ~78%* | ~79%* | ~72%* | ~68%* | ~65%* |
| HumanEval | ~95%* | ~96%* | ~93%* | ~92%* | ~90%* | ~85%* |
| MATH-500 | ~96%* | ~95%* | ~96%* | ~94%* | ~92%* | ~88%* |
| SWE-bench Verified | ~75%* | ~78%* | ~70%* | ~68%* | ~55%* | ~45%* |
| AIME 2024 | ~85%* | ~80%* | ~90%* | ~78%* | ~72%* | ~65%* |

> **Important**: The numbers above are industry estimates as of mid-2026, not precise results under standardized evaluation settings. Benchmark scores for closed-source models are typically self-reported by developers, and evaluation settings (prompt format, few-shot, sampling temperature, tool use) may vary. Cross-model comparisons should be based on reproduction results under standardized settings.

---

## V. Overall positioning

| Model | Core strengths | Key limitations | Best use cases |
|-------|---------------|----------------|---------------|
| GPT-5.5 | Strongest overall capability, most complete ecosystem | Expensive, closed-source | General enterprise applications, strongest all-around capability needed |
| Claude 4 | Top-tier coding and reasoning, long context | Limited video modality support* | Software development, document analysis, precise long-context tasks |
| Gemini 3.x Pro | Natively multimodal, reasonable pricing, 1M context | Less open than open-source alternatives | Multimodal applications, long video understanding, Google ecosystem integration |
| DeepSeek V4 | **Extreme cost-efficiency** (1/370), MIT open-source, 1M context | Multimodal support is newer, Agent ecosystem still shallow | Cost-sensitive scenarios, local deployment, custom fine-tuning |
| Qwen 3 | Full spectrum of sizes (0.5B–235B), Apache 2.0, leading Chinese language | Reasoning model (QwQ) still catching up | Chinese language applications, multi-size deployment, edge devices |
| GLM-5.1 | Proprietary architecture, Chinese language ecosystem | Smaller ecosystem than top three | China domestic application scenarios |

---

## Notes

### On data sources for closed-source models

The specific parameter counts, training details, and benchmark scores for closed-source models such as GPT-5.5, Claude 4, and Gemini 3.x Pro are typically not fully disclosed. Numbers marked with `*` in this table come from:
- Benchmark scores selectively published by developers in release blogs or technical reports
- Industry media reports and third-party evaluation reproductions
- Inference from Elo rankings on human blind-test leaderboards such as LMArena (formerly Chatbot Arena)

These numbers should be treated as reference values rather than precise data.

### On openness classification

- **MIT open-source**: Model weights, training code, and methodology fully published, no commercial use restrictions (DeepSeek V4, DeepSeek R1)
- **Apache 2.0**: Similar to MIT as a permissive license, but may include patent grant clauses (Qwen 3)
- **Closed-source**: API access only, model weights and architecture details not disclosed (GPT-5.5, Claude 4, Gemini 3.x Pro)

Openness does not equal usability — closed-source model APIs are typically more stable and feature-complete; open-source models require users to deploy and maintain themselves. See the Open-Source Model License Comparison Table for details.

### Cross-references to other tables

- Historical pricing evolution for each model: see the LLM Pricing History Table
- Definitions and evaluation methods for each benchmark: see the Benchmark Quick Reference Table
- Complete iteration history for each model family: see the corresponding family histories (GPT, Claude, Gemini, DeepSeek, Qwen, GLM Families)
- Inference optimization technical details: see the Inference Optimization Treatise

---

*Compiled by the Endfield Industrial Historian team: Zhuang Fangyi (Lead Writer).*

---

[^1]: GPT-5.5 is OpenAI's frontier model. GPT-4o was priced at $5/$15 per 1M (2024-05), GPT-4.5 at $75/$150 per 1M (2025-02). GPT-5.5's specific pricing had not been confirmed at the time of this table's compilation — the $15/$45 marked with `*` are estimates based on industry trends. See the LLM Pricing History Table. OpenAI API Pricing: https://openai.com/pricing
[^2]: Claude 4 is Anthropic's frontier model. Claude 3.5 Sonnet was priced at $3/$15 per 1M, Claude 3 Opus at $15/$75 per 1M. Claude 4's specific pricing is unconfirmed — $3/$15 is an estimate based on the Claude 3.5 Sonnet price point. See the LLM Pricing History Table. Anthropic Pricing: https://www.anthropic.com/pricing
[^3]: Gemini 3.x is Google DeepMind's frontier model. Gemini 1.5 Pro was priced at $3.50/$10.50 per 1M, Gemini 2.0 Flash at $0.10/$0.40 per 1M. Gemini 3.x Pro's specific pricing is unconfirmed — $3.50/$10.50 is an estimate based on the Gemini Pro series' historical price range. Google AI Pricing: https://ai.google.dev/pricing
[^4]: DeepSeek V4 Pro API pricing is reportedly approximately 1/370 that of GPT-5.5. Based on GPT-5.5's approximately $30/1M (input/output weighted) and the 1/370 ratio, V4 Pro is estimated at approximately $0.04/$0.18 per 1M. V3's exact prices were: cache hit ¥1/M, cache miss ¥2/M input, ¥8/M output. DeepSeek API Pricing: https://platform.deepseek.com/api-docs/pricing. See DeepSeek Family §2.5 for details.
[^5]: Qwen 3 was released in April 2025, spanning sizes from 0.5B to 235B (MoE, 35B active). Apache 2.0 license. Prices are estimates for the Qwen API (Tongyi Qianwen). Qwen 3 Technical Report: https://qwenlm.github.io/. See the Qwen Family for details.
[^6]: GLM-5.1 is Zhipu AI's frontier model (GLM-4 was released in January 2024, GLM-4 Flash offered for free). Prices are estimates based on the GLM series' historical pricing. Zhipu AI pricing page: https://open.bigmodel.cn/pricing. See the GLM Family for details.
