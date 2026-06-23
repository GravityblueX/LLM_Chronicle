# Qwen Family

> The Qwen (Tongyi Qianwen) series is the large model family developed by Alibaba Cloud since 2023. From the closed-source Tongyi Qianwen product to Apache 2.0 full-spectrum open source, from pure text to multimodal coverage spanning vision, audio, and code — Qwen's iteration history chronicles how a Chinese tech giant used a "dual-track strategy" (closed-source for revenue, open-source for community) to build the most complete model family in the global open-source LLM ecosystem.

---

## I. Overview

The Qwen series was developed by Alibaba Cloud's Tongyi Laboratory; its name is derived from the pinyin abbreviation of "Qianwen" (千问, "Thousand Questions") in "Tongyi Qianwen" (通义千问). It went through three stages: **product launch** (Tongyi Qianwen, 2023-04), **open-source expansion** (Qwen → Qwen2 → Qwen2.5, 2023-08 to 2024-09), and **reasoning integration** (Qwen 3, 2025-04).

Qwen's evolution main thread was not dramatic architectural transformation — it has always been a Transformer decoder — but rather **continuous expansion of coverage**: parameter scale from 1.8B to 235B MoE, modality from pure text to vision, audio, and code, licensing from a closed-source product line to Apache 2.0 full-spectrum open source. By 2025, the Qwen series had accumulated hundreds of millions of downloads on HuggingFace, making it the most influential Chinese model system in overseas open-source communities.[^1]

---

## II. Generational Evolution

| Generation | Release Date | Parameter Scale | Core Innovation | License |
|------------|--------------|-----------------|-----------------|---------|
| Tongyi Qianwen | 2023-04 | Undisclosed | Alibaba's all-product AI foundation | Closed-source |
| Qwen 1 | 2023-08 | 7B / 14B / 72B | First large-scale open-source LLM from a Chinese tech giant | Apache 2.0 |
| Qwen 1.5 | 2024-02 | 0.5B–72B | Full-spectrum coverage, training data and architecture upgrades | Apache 2.0 |
| Qwen 2 | 2024-06 | 0.5B / 1.5B / 7B / 72B | Comprehensive improvements in pre-training and alignment | Apache 2.0 |
| Qwen 2.5 | 2024-09 | 0.5B–72B (incl. MoE) | MMLU 85.0%, intermediate scale completion | Apache 2.0 |
| Qwen 3 | 2025-04 | 0.6B–235B (MoE, 22B active) | Hybrid reasoning (thinking/non-thinking dual mode) | Apache 2.0 |

### 2.1 Tongyi Qianwen: Alibaba's "AI foundation"

In March–April 2023, China's large model industry entered a period of intensive releases. Baidu's ERNIE Bot (March 16), Alibaba's Tongyi Qianwen (April 11), and Zhipu's ChatGLM (March) all debuted nearly simultaneously.

**2023-04-11** — Alibaba Cloud released **Tongyi Qianwen** at the Alibaba Cloud Summit in Beijing. CEO Daniel Zhang announced that "all Alibaba products will be connected to large models in the future."[^2] Tongyi Qianwen's positioning differed from ERNIE Bot from the start: it was not one person's conversational assistant, but **the AI foundation for all Alibaba products** — DingTalk, Tmall Genie, Taobao Search, Amap, Alibaba Cloud, all connected.

This release did not open-source model weights; Tongyi Qianwen was a closed-source product. But it laid the brand and engineering foundation for the subsequent open-source trajectory.

### 2.2 Qwen 1: The opening move of open source

**2023-08** — Alibaba released the Qwen open-source series, comprising 7B, 14B, and 72B scales. This was the first large-scale open-source LLM effort by a Chinese internet giant.[^2]

The initial open-source models were released under the **Tongyi Qianwen LICENSE** — a license permitting commercial and research use but not a standard open-source protocol. This choice sparked community debate at the time: the license's commercial friendliness fell short of Apache 2.0 or MIT, but it was a significant step forward from Baidu's fully closed-source approach.

Qwen-7B and Qwen-14B rapidly gained traction on HuggingFace, particularly filling the gap in the Chinese NLP community left by the Llama series' Chinese language limitations. Qwen-72B was among the largest-parameter Chinese models in the open-source community at the time.

### 2.3 Qwen-VL and multimodal expansion

**2023-09** — Alibaba released **Qwen-VL**, extending Qwen's text understanding capabilities to the visual domain. Qwen-VL supported image description, visual question answering, and image-text grounding tasks. This was the Qwen series' first step from pure text toward multimodality.[^3]

Thereafter, the visual branch continued iterating: **Qwen2-VL** (second half of 2024) improved high-resolution image understanding and video comprehension; **Qwen2.5-VL** (early 2025) further enhanced dynamic resolution support and multi-image reasoning.

Concurrently, **Qwen-Audio** (2023-12) extended the modality to audio understanding, supporting speech recognition, audio description, music analysis, and other tasks.[^4]

### 2.4 Qwen 1.5: Full-spectrum + Apache 2.0 transition

**2024-02** — Alibaba released **Qwen 1.5**. This was not a "bigger and stronger" iteration, but an **ecosystem strategy upgrade.**[^5]

Three key changes: First, the license switched from Qwen LICENSE to **Apache 2.0** — all subsequent Qwen open-source models would no longer use proprietary licensing, completely eliminating commercial concerns. Second, full-spectrum coverage was introduced for the first time — from 0.5B to 72B, with a corresponding model for every scale, from mobile phones to servers, ensuring every compute node had a suitable Qwen. Third, training data and architecture received systematic upgrades, unifying context windows and dialogue templates.

Qwen 1.5's Apache 2.0 license was a watershed — it transformed Qwen from "a decent Chinese model" into "a first-class citizen of the global open-source community." Downloads on HuggingFace subsequently began growing exponentially.

### 2.5 Qwen 2/2.5: Completion of full-scale coverage

**2024-06** — Alibaba Cloud released **Qwen 2**, comprising 0.5B, 1.5B, 7B, and 72B scales, covering all scenarios from mobile to server.[^1] Qwen 2 delivered comprehensive improvements over Qwen 1.5 in pre-training data scale, multilingual capabilities (approximately 30 new languages), and long-context support (32K–128K).

**2024-09** — **Qwen 2.5** was released, adding 3B, 14B, and 32B intermediate scales to form the complete 0.5B–72B spectrum. Qwen 2.5 achieved 85.0% on MMLU — slightly below Llama 3.1 405B's 88.6%, but at 72B parameters, only one-sixth of 405B. On Chinese benchmarks, Qwen 2.5 comprehensively led models from Llama and Mistral at comparable scales.[^1]

Qwen 2.5 also introduced **MoE** (Mixture of Experts) variants — such as Qwen2.5-14B-A3B (14B total, ~3B active) — achieving capabilities close to dense models with less inference cost. This was an important experiment in efficiency for the Qwen series.

Concurrently, the **CodeQwen / Qwen2.5-Coder** sub-series (2024-04 to 2024-11) specialized in code generation, competing with proprietary code models on benchmarks like HumanEval and MBPP.[^6]

Alibaba's "full family" strategy was fully visible at this stage: not pursuing "the biggest and strongest," but "the most complete and most flexible." Developers could choose scale by scenario — 0.5B for phones, 7B for edge devices, 72B for enterprise servers. Meta's Llama had narrower coverage (8B/70B/405B), and Mistral had even less (7B/Mixtral/Large). This "full coverage" strategy was unique in the global open-source ecosystem.

### 2.6 Qwen 3: Hybrid reasoning and open-source dominance

**2025-04-29** — Alibaba Cloud released **Qwen 3**, open-sourced under Apache 2.0. Full-spectrum coverage spanning 0.6B, 1.7B, 4B, 8B, 14B, 32B, 72B, and 235B (MoE, 22B active).[^7]

Qwen 3's flagship **235B MoE** matched GPT-4o on multiple benchmarks, achieving approximately 80% on the AIME 2025 math benchmark. The key innovation was **"thinking/non-thinking" dual mode** — inspired by Claude 3.7 Sonnet, users could have the model answer instantly on simple questions or enter a reasoning mode for complex ones. This was the second mainstream model to adopt hybrid reasoning after Claude 3.7 Sonnet, and the first to do so open-source.[^7]

Qwen 3's release timing was dramatic — just 24 days after Llama 4. Llama 4 was at the time mired in the LMArena evaluation controversy, with the community broadly dissatisfied with Meta's "submitting an experimental version to game benchmarks." Qwen 3 entered the market with a posture of "comprehensive open-sourcing, no gimmicks, full-spectrum coverage," drawing a stark contrast in community reaction — Llama 4 was criticized; Qwen 3 was praised. This marked the transfer of the "open-source LLM flagship" title from Meta to a Chinese team.

Following Qwen 3's release, Alibaba further launched **Qwen3-Coder** (code-optimized) and **Qwen3-Thinker** (reasoning-enhanced), continuing the full-spectrum strategy to cover more vertical scenarios.

---

## III. Technical trajectory evolution

### 3.1 Architecture

The core architecture of all Qwen models has always been the **Transformer decoder**. Qwen 1 through Qwen 2.5 used standard dense Transformers; Qwen 2.5 and Qwen 3's flagship versions introduced MoE (Mixture of Experts), replacing "total parameter scale" with "activated parameter efficiency" as the new efficiency metric. Qwen 3's 235B MoE activates only approximately 22B parameters per inference — less than 6% of Llama 3.1 405B — while matching it on multiple benchmarks.

Positional encoding evolved from RoPE (Rotary Position Embedding) to YaRN extension to support context window scaling from 8K to 128K.

### 3.2 Training methodology

- Qwen 1/1.5: Standard language model pre-training + SFT (supervised fine-tuning) + RLHF
- Qwen 2/2.5: Massive expansion of pre-training data, multilingual ratio optimization, long-context continued pre-training
- Qwen 3: Pre-training → SFT → RL → hybrid reasoning training (joint training of thinking and non-thinking modes)

Unlike the GPT series, Qwen's alignment has never been the narrative focus — Alibaba's strategy is "build solid foundational capabilities and let the community tune for themselves." This aligns with Alibaba Cloud's platform DNA: not making the most dazzling product, but the most reliable infrastructure.

### 3.3 Licensing strategy

Qwen's licensing evolution is a landmark case in the broader open-source large model movement:

| Generation | License | Notes |
|------------|---------|-------|
| Qwen 1 | Qwen LICENSE | Alibaba's proprietary license; permits commercial use but not standard open-source |
| Qwen 1.5 onward | Apache 2.0 | Permanent shift to standard open-source license |

The decision to transition from proprietary to Apache 2.0 licensing occurred in February 2024 — precisely when Llama 2's "pseudo-open-source" license was generating controversy and Mistral was winning community favor with Apache 2.0. Alibaba chose the most open path, and this propelled Qwen to become the most-downloaded non-Meta model family on HuggingFace within the following year.

### 3.4 Open-source strategy: Dual-track

Alibaba's "dual-track" approach is the fundamental characteristic that distinguishes the Qwen series from all competitors:

- **Closed-source track**: Tongyi Qianwen, serving Alibaba Cloud enterprise clients and Alibaba's own product matrix (DingTalk, Taobao, Amap, etc.), charged on a per-use API basis.
- **Open-source track**: Qwen series, Apache 2.0 fully open-source, spanning HuggingFace, ModelScope, and GitHub, targeting global developers.

The closed-source product generates revenue; the open-source series generates ecosystem. "Closed-source captures revenue; open-source captures community" — this strategy was later pushed to its extreme by DeepSeek (fully open-source, ultra-low API pricing), but Alibaba was the first Chinese tech giant to execute the dual-track approach effectively.

---

## IV. Ecosystem and impact

### 4.1 Direct derivatives

The Qwen series is the infrastructure of the Chinese open-source LLM ecosystem. Numerous models are fine-tuned, distilled, and secondarily developed on Qwen:

- **Distillation base**: When DeepSeek-R1 was released, its distilled smaller models (1.5B to 70B) used Qwen and Llama directly as base model initializations.
- **Chinese vertical domain fine-tuning**: Fine-tuned models across legal, medical, financial, educational, and other vertical domains predominantly choose Qwen as their base — because of its comprehensive Chinese capabilities, friendly licensing, and full-spectrum coverage.
- **Multimodal downstream**: Qwen-VL and Qwen-Audio became foundational models for Chinese multimodal research and applications.

Cumulative downloads on HuggingFace exceeded hundreds of millions, with extensive Qwen-based derivative models also available on OpenCSG and ModelScope (Alibaba's own model community).

### 4.2 Competitive relationships

| Competitor | Key interaction with Qwen |
|-----------|--------------------------|
| **Llama** | 2023–2024 Llama dominated in English community; mid-2024 onward Qwen surpassed in Chinese + full-spectrum coverage; 2025-04 Qwen 3 took over "open-source flagbearer" during Llama 4 evaluation controversy |
| **Mistral** | Both Apache 2.0 open-source players, but Mistral's coverage is narrower. Qwen differentiates with full-spectrum coverage |
| **DeepSeek** | Complementary rather than directly competitive. DeepSeek focuses on frontier reasoning; Qwen provides foundational bases. DeepSeek's distilled models heavily use Qwen as initialization |
| **ERNIE Bot (Baidu)** | Closed-source vs. open-source dual-track's counterpart. Baidu is fully closed-source; Qwen uses open source to build community moats |
| **ChatGLM (Zhipu)** | GLM's proprietary architecture vs. Qwen's standard Transformer. Zhipu takes the academic open-source + proprietary architecture route; Qwen takes the industrial open-source + full-spectrum coverage route |

### 4.3 Industry impact

The Qwen series' impact on the AI industry is multidimensional:

- **Benchmark for open-source licensing**: Qwen 1.5's Apache 2.0 transition set the standard for subsequent Chinese models' open-source licensing. DeepSeek-R1's MIT open-sourcing was, in a sense, building further upon the Apache 2.0 foundation.
- **Demonstration of the "full family" strategy**: Qwen proved that "full coverage is more sustainable than single-point breakthrough" — winning the market not through one strongest model, but through a complete series ensuring every developer finds the right fit.
- **Internationalization of Chinese open-source models**: Qwen was the first Chinese model family to achieve mainstream attention in the global HuggingFace ecosystem. While its English capabilities lagged behind Chinese, its multilingual coverage and full-spectrum strategy gave it use cases in non-Chinese markets.
- **Beneficiary of the March 18 Incident**: After Anthropic/OpenAI/Google collectively tightened API restrictions on China in March 2026, the Qwen series became one of the primary targets for developer migration — not because of "domestic replacement" sentiment, but because its capabilities were genuinely sufficient.

---

## Evaluation

The Qwen series' iteration history can be viewed as a microcosm of China's large model journey from "catching up" to "setting standards."

The first phase (Tongyi Qianwen + Qwen 1) was positioning — releasing a product within four months of ChatGPT's market explosion, open-sourcing a model within six months. Speed itself was strategy. The second phase (Qwen 1.5 → 2 → 2.5) was coverage — using Apache 2.0 licensing, full-spectrum coverage, and multimodal branches to occupy every possible developer need. The third phase (Qwen 3) was summit — in the same week that Llama 4 was engulfed by evaluation controversy, taking the "open-source flagbearer" title from Meta through gimmick-free open sourcing and hybrid reasoning innovation.

Qwen's most underrated legacy is not any benchmark score, but its demonstration that **open source can be a good business.** Alibaba Cloud attracted a massive developer base through open-sourcing Qwen, and these developers eventually became Alibaba Cloud's paying customers. This is more sophisticated than selling API tokens — it is not selling models, but selling compute. The model is the entry point; the cloud is the destination. "Closed-source captures revenue; open-source captures community" — these ten characters summarize the business logic of the large model era more precisely than any paper.

---

*This article was compiled by the Endfield Industrial Historical Archives team: Fangyi Zhuang (lead chronicler).*

---

[^1]: GitHub, "Qwen2.5: A Party of Foundation Models," 2024-09. https://github.com/QwenLM/Qwen2.5
[^2]: The Paper (澎湃新闻), "All Alibaba Products Will Connect to 'Tongyi Qianwen'; Platform Will Open Third-Party Large Model Access," 2023-04-11. https://www.thepaper.cn/newsDetail_forward_22651605
[^3]: GitHub, "Qwen-VL: A Versatile Vision-Language Model," 2023-09. https://github.com/QwenLM/Qwen-VL
[^4]: GitHub, "Qwen-Audio: Advancing Universal Audio Understanding," 2023-12. https://github.com/QwenLM/Qwen-Audio
[^5]: GitHub, "Qwen1.5," 2024-02. https://github.com/QwenLM/Qwen1.5
[^6]: GitHub, "Qwen2.5-Coder: Code More, Learn More," 2024-11. https://github.com/QwenLM/Qwen2.5-Coder
[^7]: GitHub, "Qwen3," 2025-04-29. https://github.com/QwenLM/Qwen3
