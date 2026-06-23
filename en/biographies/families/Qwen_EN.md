# Qwen Family

> The Qwen (Tongyi Qianwen) series is the large model family developed by Alibaba Cloud since 2023. From the closed-source Tongyi Qianwen product to Apache 2.0 full-spectrum open source, from pure text to multimodal coverage spanning vision, audio, and code — Qwen's iteration history chronicles how a Chinese tech giant used a "dual-track strategy" (closed-source for revenue, open-source for community) to build the most complete model family in the global open-source LLM ecosystem.

---

## I. Overview

The Qwen series was developed by Alibaba Cloud's Tongyi Laboratory, with its name derived from the pinyin abbreviation of "Tongyi Qianwen" (通义千问). It went through three stages: **product deployment** (Tongyi Qianwen, 2023-04), **open-source expansion** (Qwen → Qwen2 → Qwen2.5, 2023-08 to 2024-09), and **reasoning integration** (Qwen 3, 2025-04).

Qwen's evolutionary main thread was not dramatic architectural change — it used the Transformer decoder throughout — but rather **continuous expansion of coverage**: parameter scales spanning from 1.8B to 235B MoE, modalities extending from pure text to vision, audio, and code, licensing expanding from closed-source products to Apache 2.0 full-spectrum open source. By 2025, the Qwen series had accumulated hundreds of millions of downloads on HuggingFace, making it the most influential Chinese model family in the overseas open-source community.[^1]

---

## II. Generational Evolution

| Generation | Release Date | Parameter Scale | Core Innovation | License |
|------------|--------------|-----------------|-----------------|---------|
| Tongyi Qianwen | 2023-04 | Undisclosed | Alibaba's all-product AI foundation | Closed-source |
| Qwen 1 | 2023-08 | 7B / 14B / 72B | First large-scale open-source LLM from a Chinese tech giant | Apache 2.0 |
| Qwen 1.5 | 2024-02 | 0.5B–72B | Full-spectrum coverage, training data and architecture upgrade | Apache 2.0 |
| Qwen 2 | 2024-06 | 0.5B / 1.5B / 7B / 72B | Comprehensive pre-training and alignment improvements | Apache 2.0 |
| Qwen 2.5 | 2024-09 | 0.5B–72B (incl. MoE) | MMLU 85.0%, intermediate scale completion | Apache 2.0 |
| Qwen 3 | 2025-04 | 0.6B–235B (MoE, 22B active) | Hybrid reasoning (thinking/non-thinking dual mode) | Apache 2.0 |

### 2.1 Tongyi Qianwen: Alibaba's "AI Foundation"

In March–April 2023, China's large model industry entered a period of intensive releases. Baidu's ERNIE Bot (March 16), Alibaba's Tongyi Qianwen (April 11), and Zhipu's ChatGLM (March) all appeared almost simultaneously.

On **2023-04-11**, Alibaba Cloud released **Tongyi Qianwen** at the Alibaba Cloud Summit in Beijing. CEO Daniel Zhang announced that "all Alibaba products will integrate large models in the future."[^2] Tongyi Qianwen's positioning differed from ERNIE Bot's from the start: it was not one person's conversational assistant but the **AI foundation for all Alibaba products** — DingTalk, Tmall Genie, Taobao Search, Amap, Alibaba Cloud, all connected.

This release did not open-source model weights; Tongyi Qianwen was a closed-source product. But it laid the brand and engineering foundation for the subsequent open-source path.

### 2.2 Qwen 1: The Opening Open-Source Move

In **2023-08**, Alibaba released the Qwen open-source series, comprising 7B, 14B, and 72B scales. This was the first large-scale open-source LLM initiative from a Chinese internet giant.[^2]

The initial open-source models were released under the **Tongyi Qianwen LICENSE** — a non-standard open-source license permitting commercial and research use. This choice sparked community controversy at the time: the license's commercial friendliness fell short of Apache 2.0 or MIT, but represented a major step forward compared to Baidu's fully closed-source approach.

Qwen-7B and Qwen-14B quickly gained attention on HuggingFace, filling the gap left by the Llama series' insufficient Chinese capabilities in the Chinese NLP community. Qwen-72B was one of the largest-parameter Chinese models in the open-source community at the time.

### 2.3 Qwen-VL and Multimodal Expansion

In **2023-09**, Alibaba released **Qwen-VL**, extending Qwen's text understanding capabilities to the visual domain. Qwen-VL supported image description, visual question answering, and text-image grounding tasks. This was the Qwen series' first step from pure text into multimodality.[^3]

The visual branch continued to iterate thereafter: **Qwen2-VL** (H2 2024) improved high-resolution image understanding and video comprehension; **Qwen2.5-VL** (early 2025) further enhanced dynamic resolution support and multi-image reasoning.

During the same period, **Qwen-Audio** (2023-12) extended modalities to audio understanding, supporting speech recognition, audio description, music analysis, and more.[^4]

### 2.4 Qwen 1.5: Full-Spectrum + Apache 2.0 Shift

In **2024-02**, Alibaba released **Qwen 1.5**. This was not a "bigger and stronger" iteration but an **ecosystem strategy upgrade.**[^5]

Three key changes: first, the license switched from Qwen LICENSE to **Apache 2.0** — all subsequent Qwen open-source models would no longer use proprietary licenses, completely eliminating commercial concerns. Second, full-spectrum coverage was introduced for the first time — from 0.5B to 72B, with a corresponding model for every scale, from mobile phones to servers, ensuring every compute node had a suitable Qwen. Third, systematic upgrades were made to training data and architecture, unifying context windows and dialogue templates.

Qwen 1.5's Apache 2.0 license was a watershed — it transformed Qwen from "a decent Chinese model" into "a first-class citizen of the global open-source community." Downloads on HuggingFace began growing exponentially thereafter.

### 2.5 Qwen 2/2.5: Completing Full-Scale Coverage

In **2024-06**, Alibaba Cloud released **Qwen 2**, comprising 0.5B, 1.5B, 7B, and 72B scales, covering the full range from mobile to server scenarios.[^1] Qwen 2 delivered comprehensive improvements over Qwen 1.5 in pre-training data scale, multilingual capabilities (approximately 30 new languages), and long-context support (32K–128K).

In **2024-09**, **Qwen 2.5** was released, adding 3B, 14B, and 32B intermediate scales to form a complete 0.5B–72B spectrum. Qwen 2.5 achieved 85.0% on MMLU — slightly below Llama 3.1 405B's 88.6%, but at 72B parameters, only one-sixth of 405B. On Chinese benchmarks, Qwen 2.5 comprehensively led Llama and Mistral models at comparable scales.[^1]

Qwen 2.5 also introduced **MoE** (Mixture of Experts) variants — such as Qwen2.5-14B-A3B (14B total, approximately 3B active) — achieving near-dense-model capability at lower inference costs. This was an important experiment in the efficiency direction for the Qwen series.

During the same period, the **CodeQwen / Qwen2.5-Coder** sub-series (2024-04 to 2024-11) specialized in code generation, targeting performance parity with proprietary code models on programming benchmarks such as HumanEval and MBPP.[^6]

Alibaba's "full family bundle" strategy was now fully visible at this stage: not pursuing "biggest and strongest" but "most complete and most flexible." Developers could choose scale by scenario — 0.5B on phones, 7B on edge devices, 72B on enterprise servers. Meta's Llama had narrower coverage (8B/70B/405B), and Mistral had even less (7B/Mixtral/Large). This "full coverage" strategy was unique in the global open-source ecosystem.

### 2.6 Qwen 3: Hybrid Reasoning and Open-Source Supremacy

On **2025-04-29**, Alibaba Cloud released **Qwen 3** under Apache 2.0. The full spectrum covered 0.6B, 1.7B, 4B, 8B, 14B, 32B, 72B, and 235B (MoE, 22B active).[^7]

The flagship **235B MoE** of Qwen 3 matched GPT-4o on multiple benchmarks, achieving approximately 80% on the AIME 2025 math benchmark. The key innovation was the **"thinking/non-thinking" dual mode** — inspired by Claude 3.7 Sonnet, users could have the model answer instantly on simple questions or enter reasoning mode on complex ones. This was the second mainstream model to adopt hybrid reasoning after Claude 3.7 Sonnet, and the first to do so in open source.[^7]

Qwen 3's release timing was dramatically coincidental — just 24 days after Llama 4's launch. Llama 4 was mired in LMArena evaluation controversy at the time, with the community broadly dissatisfied with Meta's "submitting experimental versions to game the leaderboard." Qwen 3 entered the market with a posture of "comprehensive open-sourcing, no gimmicks, full-spectrum coverage," creating a stark contrast in community reactions — Llama 4 was criticized while Qwen 3 was praised. This marked the handover of the "open-source LLM flagship" title from Meta to a Chinese team.

Following Qwen 3's release, Alibaba further launched **Qwen3-Coder** (code-optimized) and **Qwen3-Thinker** (reasoning-enhanced), continuing the full-spectrum strategy to cover more vertical scenarios.

---

## III. Technical Route Evolution

### 3.1 Architecture

The core architecture of the entire Qwen series remained the **Transformer decoder**. Qwen 1 through Qwen 2.5 used standard dense Transformers; Qwen 2.5 and Qwen 3's flagship versions introduced MoE (Mixture of Experts), replacing "total parameter scale" with "active parameter efficiency" as the new efficiency metric. Qwen 3's 235B MoE activated only approximately 22B parameters per inference — less than 6% of Llama 3.1 405B — yet matched it on multiple benchmarks.

Positional encoding evolved from RoPE (Rotary Position Embedding) to YaRN extension, supporting context window expansion from 8K to 128K.

### 3.2 Training Methods

- Qwen 1/1.5: Standard language model pre-training + SFT (supervised fine-tuning) + RLHF
- Qwen 2/2.5: Massive expansion of pre-training data scale, optimized multilingual ratios, long-context continued pre-training
- Qwen 3: Pre-training → SFT → RL → hybrid reasoning training (joint training of thinking and non-thinking modes)

Unlike the GPT series, Qwen's alignment never became a narrative focal point — Alibaba's strategy was "build solid foundational capabilities and let the community fine-tune on its own." This aligned with Alibaba Cloud's platform DNA: not making the most dazzling product, but the most reliable infrastructure.

### 3.3 Licensing Strategy

Qwen's licensing evolution was an important case study in the broader large model open-source movement:

| Generation | License | Notes |
|------------|---------|-------|
| Qwen 1 | Qwen LICENSE | Alibaba's proprietary license, permitting commercial use but not standard open source |
| From Qwen 1.5 onward | Apache 2.0 | Permanent shift to standard open-source license |

The decision to transition from a proprietary license to Apache 2.0 occurred in February 2024 — coinciding with the period when Llama 2's "pseudo-open-source" license was drawing controversy and Mistral was winning community favor with Apache 2.0. Alibaba chose the most open path, which made Qwen the highest-downloaded non-Meta model family on HuggingFace within the following year.

### 3.4 Open-Source Strategy: Dual Track

Alibaba's "dual track" was the fundamental characteristic distinguishing the Qwen series from all competitors:

- **Closed-source track**: Tongyi Qianwen, serving Alibaba Cloud enterprise clients and Alibaba's own product matrix (DingTalk, Taobao, Amap, etc.), with API-based pay-per-use billing.
- **Open-source track**: Qwen series, Apache 2.0 full-spectrum open source, available on HuggingFace, ModelScope, and GitHub, targeting global developers.

The closed-source product generated revenue; the open-source series built the ecosystem. "Closed-source for revenue, open-source for community" — this strategy was later pushed to the extreme by DeepSeek (fully open-source, extremely low API pricing), but Alibaba was the first Chinese tech giant to execute the dual-track model effectively.

---

## IV. Ecosystem and Impact

### 4.1 Direct Derivatives

The Qwen series was the infrastructure of the Chinese open-source LLM ecosystem. Numerous models were fine-tuned, distilled, and secondarily developed based on Qwen:

- **Distillation base**: When DeepSeek-R1 was released, its distilled small models (1.5B to 70B) directly used Qwen and Llama as base model initializations.
- **Chinese vertical domain fine-tuning**: Large numbers of fine-tuned models in legal, medical, financial, educational, and other vertical domains preferred Qwen as the base — for its comprehensive Chinese capabilities, friendly licensing, and full-spectrum coverage.
- **Multimodal downstream**: Qwen-VL and Qwen-Audio became foundational models for Chinese multimodal research and applications.

Cumulative downloads on HuggingFace exceeded hundreds of millions, with substantial derivative models based on Qwen also present on OpenCSG and ModelScope (Alibaba's built-in model community).

### 4.2 Competitive Relationships

| Competitor | Key Interaction with Qwen |
|-----------|--------------------------|
| **Llama** | Llama dominated the English community in 2023-2024; from mid-2024, Qwen surpassed it in Chinese + full-spectrum coverage; 2025-04 Qwen 3 took the "open-source champion" title amid Llama 4's evaluation controversy |
| **Mistral** | Both Apache 2.0 open-source players, but Mistral's coverage was narrow. Qwen differentiated through full-spectrum coverage |
| **DeepSeek** | Complementary rather than directly competitive. DeepSeek focused on frontier reasoning, Qwen provided foundational bases. DeepSeek's distilled models heavily used Qwen as initialization |
| **ERNIE Bot (Baidu)** | The antithesis of closed-source vs. open-source dual track. Baidu went fully closed-source; Qwen used open source to build community barriers |
| **ChatGLM (Zhipu)** | GLM's proprietary architecture vs. Qwen's standard Transformer. Zhipu pursued academic open-source + proprietary architecture; Qwen pursued industrial open-source + full-spectrum coverage |

### 4.3 Industry Impact

The Qwen series' impact on the AI industry was multidimensional:

- **Benchmark for open-source licensing**: Qwen 1.5's Apache 2.0 shift set the standard for subsequent Chinese models' open-source licensing. DeepSeek-R1's MIT open-sourcing was, to some extent, a step further building upon the Apache 2.0 foundation.
- **Demonstration of the "full family bundle" strategy**: Qwen proved that "full coverage is more sustainable than single-point breakthrough" — winning the market not through one strongest model, but through a complete series where every developer could find the right fit.
- **Internationalization of Chinese open-source models**: Qwen was the first Chinese model family to gain mainstream attention in the global HuggingFace ecosystem. While its English capabilities lagged behind Chinese, its multilingual coverage and full-spectrum strategy gave it use cases even in non-Chinese markets.
- **Beneficiary of the March 18 incident**: After Anthropic/OpenAI/Google collectively tightened API restrictions for China in March 2026, the Qwen series became one of the top migration choices for developers — not because of "domestic alternative" sentiment, but because its capabilities were genuinely sufficient.

---

## Commentary

The Qwen series' iteration history can be seen as a microcosm of Chinese large models' journey from "catching up" to "setting standards."

The first stage (Tongyi Qianwen + Qwen 1) was about positioning — releasing a product within four months of ChatGPT's market explosion, open-sourcing models within six months. Speed itself was strategy. The second stage (Qwen 1.5 → 2 → 2.5) was about coverage — using Apache 2.0 licensing, full-spectrum coverage, and multimodal branches to occupy every possible developer need. The third stage (Qwen 3) was about reaching the summit — entering the market the same week Llama 4 was embroiled in evaluation controversy, and with no-gimmick open-sourcing and hybrid reasoning innovation, taking the "open-source champion" title from Meta's hands.

Qwen's most underrated legacy is not some benchmark score, but its proof that **open source can be good business.** Alibaba Cloud attracted massive numbers of developers through open-sourcing Qwen, and these developers ultimately became Alibaba Cloud's paying customers. This was more astute than selling API tokens — not selling models, but selling compute. Models are the entry point; cloud is the destination. "Closed-source for revenue, open-source for community" — these ten characters more precisely summarize the business logic of the large model era than any paper.

---

*This article was compiled by the Endfield Industries AI Historian Team: Zhuang Fangyi (Lead Writer).*

---

[^1]: GitHub, "Qwen2.5: A Party of Foundation Models", 2024-09. https://github.com/QwenLM/Qwen2.5
[^2]: The Paper (澎湃新闻), "All Alibaba Products Will Integrate 'Tongyi Qianwen,' Platform Will Open Third-Party Model Access", 2023-04-11. https://www.thepaper.cn/newsDetail_forward_22651605
[^3]: GitHub, "Qwen-VL: A Versatile Vision-Language Model", 2023-09. https://github.com/QwenLM/Qwen-VL
[^4]: GitHub, "Qwen-Audio: Advancing Universal Audio Understanding", 2023-12. https://github.com/QwenLM/Qwen-Audio
[^5]: GitHub, "Qwen1.5", 2024-02. https://github.com/QwenLM/Qwen1.5
[^6]: GitHub, "Qwen2.5-Coder: Code More, Learn More", 2024-11. https://github.com/QwenLM/Qwen2.5-Coder
[^7]: GitHub, "Qwen3", 2025-04-29. https://github.com/QwenLM/Qwen3
