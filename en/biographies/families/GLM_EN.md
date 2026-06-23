# GLM Family

> In an era when "standard autoregressive Transformer" ruled supreme, GLM chose a different path — bidirectional attention plus blank infilling. This path never became mainstream in academia, yet it unexpectedly gave the Chinese open-source community its first "usable and free" conversational model. From the academic exploration of GLM-130B in 2022, to ChatGLM-6B igniting the Chinese open-source landscape, to GLM-5.1 chasing the frontier — Zhipu AI traversed the full distance from laboratory to battlefield in four generations of models. It is not the cost-killer that DeepSeek is, nor the Alibaba ecosystem extension that Qwen is. Among the "Big Three," it most resembles an academic team turned startup — its strength is technical taste, and so is its weakness.

---

## I. Overview

GLM (General Language Model) is an open-source language model series launched by Zhipu AI, with technical roots traceable to the GLM architecture paper published by Professor Tang Jie's team at Tsinghua University in 2022.[^1] Among China's "Big Three" of large models (Zhipu GLM, Baidu ERNIE, Alibaba Tongyi), GLM's uniqueness lay in its deliberate departure from the standard Transformer architecture from the very beginning — adopting Autoregressive Blank Infilling as the pre-training objective.[^1]

Zhipu AI was founded in 2019 by Professor Tang Jie of Tsinghua University's Department of Computer Science, with its core team drawn from the university's Knowledge Engineering Group (KEG). The company emerged from academic research — spanning knowledge graphs to pre-trained language models — a path fundamentally different from the AI laboratories of internet giants like Baidu and Alibaba. As of 2025, Zhipu AI had raised over 4 billion RMB in cumulative funding, with a valuation of approximately 20 billion RMB, making it one of the largest independent AI unicorns in China by funding scale.[^2][^3]

The GLM family's core contribution to the history of Chinese open-source LLMs was not a breakthrough in technical architecture — the ChatGLM series never achieved top-tier performance on benchmarks at any given time. Its core contribution was a **time window**: during the first half of 2023, when virtually all Chinese open-source models were still unusable, ChatGLM-6B was the first Chinese conversational model that ordinary developers could run on consumer-grade GPUs. The impact of this time window far exceeded any benchmark number.

---

## II. Generational Evolution

| Generation | Release Date | Parameter Scale | Core Innovation | License | Open-Source Significance |
|------------|--------------|-----------------|-----------------|---------|------------------------|
| GLM-130B | 2022-08 | 130B | Bidirectional attention + blank infilling | Academic license | First Chinese 10B+ open-source model |
| ChatGLM-6B | 2023-03 | 6B | Dialogue fine-tuning + INT4 quantized inference | Apache 2.0 | First usable Chinese open-source conversational model |
| ChatGLM2-6B | 2023-06 | 6B | FlashAttention-2 + multi-turn dialogue | Apache 2.0 | Major performance leap |
| ChatGLM3 | 2023-10 | 6B | Function Call + code interpreter | Apache 2.0 | First Agent capability support |
| GLM-4 | 2024-01 | 9B+ (open-source version) | Multimodal + 128K context | General commercial license | Full multimodal transition |
| GLM-4-Plus / GLM-4V | 2024-08 | Undisclosed (API) | Targeting GPT-4 | API only | Chasing frontier performance |
| GLM-5.1 | 2025-2026 | Undisclosed | Reasoning enhancement + multimodal upgrade | API only | Continuous iteration |

### 2.1 GLM-130B: The Academic Origin

In August 2022, Professor Tang Jie's team at Tsinghua University released GLM-130B — a 130-billion-parameter bilingual (Chinese-English) pre-trained language model.[^1]

GLM-130B's technical approach was quite distinctive at the time. Mainstream large models — GPT-3, PaLM, LLaMA — all employed standard autoregressive (AR) pre-training: predicting the next token left to right, one at a time. GLM instead adopted **autoregressive blank infilling**: randomly masking several spans in the input text, then having the model generate the masked content from left to right. This design simultaneously absorbed the strengths of BERT (bidirectional understanding) and GPT (autoregressive generation) — content before the masked position provided contextual understanding, while content at the masked position was generated autoregressively.[^1]

This architectural choice was academically sound — it achieved competitive levels on both NLU and NLG tasks simultaneously. But in the subsequent large model arms race, the standard autoregressive architecture ultimately prevailed due to its simplicity and accumulated engineering ecosystem. GLM's architectural choice was, from the very beginning, destined to be a "minority path."

GLM-130B's open-source posture was pioneering in the Chinese AI community of 2022. Before it, virtually all Chinese 10B+ models were closed-source — Baidu's ERNIE 3.0 Titan was closed-source, Huawei's PanGu was closed-source. GLM-130B open-sourced its weights under an academic license, giving Chinese researchers access to a large-scale model for downstream experimentation for the first time.

### 2.2 ChatGLM-6B: The Ignition Point of Chinese Open-Source

On March 14, 2023 (the same day OpenAI released GPT-4), Zhipu AI released **ChatGLM-6B** — a 6-billion-parameter model based on the GLM architecture, fine-tuned for dialogue.[^4]

ChatGLM-6B's core selling point was not performance — it fell far short of GPT-3.5 on all benchmarks, let alone GPT-4. Its core selling point was **accessibility**:

- 6B parameters, requiring only 6GB of VRAM after INT4 quantization — runnable on a single RTX 3060;
- Complete Chinese-English bilingual conversational ability — existing open-source Chinese models either did not support dialogue or had extremely poor dialogue quality;
- Apache 2.0 license — no restrictions on commercial use;
- Complete fine-tuning code and tutorials provided — lowering the barrier for secondary development.

ChatGLM-6B rapidly accumulated a large number of stars on GitHub, becoming one of the most widely used open-source models in China's AI developer community.[^4] During the March–June 2023 window, if a Chinese independent developer, startup, or academic laboratory needed a locally deployable Chinese conversational model, ChatGLM-6B was virtually the only option. The LLaMA series was far inferior in Chinese capability, and the original LLaMA's license did not permit commercial use.

ChatGLM-6B's significance transcended the model itself — it proved one thing: **open-source Chinese conversational models are viable, in demand, and capable of being used at scale.** Only after it did the Chinese open-source LLM ecosystem truly begin.

### 2.3 ChatGLM2-6B: Performance Catch-Up

On June 25, 2023, Zhipu AI released ChatGLM2-6B.[^5]

Compared to the first generation, ChatGLM2 introduced several engineering improvements:

- **FlashAttention-2**: More efficient attention computation, significantly improving inference speed;
- **Multi-Query Attention (MQA)**: Reduced KV Cache overhead;
- **Longer context**: Extended from the original 2K to 32K;
- **Higher-quality dialogue training data**: Noticeably improved multi-turn dialogue ability;
- **Causal Mask optimization**: Improved the causal mask design within the GLM architecture.

On Chinese benchmarks such as MMLU and C-Eval, ChatGLM2-6B's scores significantly exceeded the first generation, approaching the level of LLaMA-2-13B.[^5] For a 6B model, this represented substantial progress.

But ChatGLM2's release timing marked a shift in the competitive landscape. In June 2023, Llama 2 had not yet been released but was imminent (2023-07), Qwen and Yi series were in development, and the blue ocean of Chinese open-source LLMs was rapidly turning into a red ocean. ChatGLM's first-mover advantage was being eroded.

### 2.4 ChatGLM3: Agent Capability Completion

On October 27, 2023, Zhipu AI released the ChatGLM3 series.[^6]

ChatGLM3's most important new feature was **Function Call support** — the model could output function call requests in structured JSON format, compatible with OpenAI's Function Calling specification. This gave ChatGLM3 the foundation for Agent capabilities for the first time — it could be called by frameworks like LangChain and AutoGen.

Additionally, ChatGLM3 introduced:

- **Code interpreter**: The model could execute Python code in a sandbox;
- **Web browsing**: The model could invoke search and web browsing tools;
- **Improved instruction following**: Better performance on instruction-following benchmarks.

ChatGLM3 marked Zhipu AI's strategic pivot from "making a conversational model" to "making an Agent foundation." But in terms of pure performance, ChatGLM3 had already been surpassed on multiple benchmarks by larger models such as Qwen-14B and Yi-34B.[^6]

### 2.5 GLM-4: Multimodal and Long Context

On January 16, 2024, Zhipu AI released the GLM-4 series.[^7]

GLM-4 represented a comprehensive upgrade for Zhipu AI:

- **Multimodal**: GLM-4V supported image understanding, capable of processing mixed text-image inputs;
- **Long context**: Support for 128K token context windows;
- **Enhanced tool calling**: Further optimization of Function Call accuracy and format stability;
- **Open-source version**: GLM-4-9B open-sourced under Apache 2.0.

GLM-4's release coincided with the early 2024 Chinese large model melee — Moonshot AI's Kimi was promoting 200K context, and DeepSeek V2 was about to launch. GLM-4's 128K context was not technically behind, but in terms of user perception, Kimi's "long text" brand had already occupied the mental space first.

The GLM-4-9B open-source version received a lukewarm response from the open-source community — at 9B scale, it was no longer remarkable by 2024 standards, as larger open-source models like Qwen1.5-72B and LLaMA-3-70B were rapidly proliferating.

### 2.6 GLM-4-Plus and GLM-4V: Targeting the Frontier

In August 2024, Zhipu AI released GLM-4-Plus and GLM-4V-Plus.[^8]

GLM-4-Plus was the first model for which Zhipu AI explicitly positioned itself as "targeting GPT-4" in its marketing. On certain Chinese benchmarks, GLM-4-Plus did indeed approach GPT-4's level. But on English benchmarks and comprehensive reasoning ability, a clear gap remained with GPT-4 and Claude 3 Opus.

GLM-4V-Plus enhanced multimodal capabilities — more accurate text-image understanding and more stable OCR. But compared to GPT-4V and Claude 3.5 Sonnet's multimodal abilities, GLM-4V-Plus still had ground to cover.

Notably, neither GLM-4-Plus nor GLM-4V-Plus was open-sourced — they were available only via API. This represented a subtle shift in Zhipu AI's open-source strategy: the best models remain closed-source to serve commercialization, while secondary models are open-sourced to maintain the community.

### 2.7 GLM-5.1: Continuous Iteration

From 2025 through early 2026, Zhipu AI continued iterating the GLM series, releasing GLM-5.1.[^9] Against the backdrop of reasoning capabilities becoming an industry focus, GLM-5.1 introduced reasoning enhancement mechanisms similar to chain-of-thought. Specific technical details and benchmark numbers in public materials remain limited — Zhipu AI's public disclosures became more conservative after 2025.

GLM-5.1's competitive landscape had become extremely severe: DeepSeek R1 was sweeping the market with MIT open-sourcing and extreme cost efficiency, the Qwen series was advancing steadily backed by Alibaba's ecosystem, and the frontier models from OpenAI and Anthropic continued raising the ceiling. As an independent startup, Zhipu AI had neither DeepSeek's cost advantages (MLA + MoE) nor Qwen's big-corporation ecosystem, facing unprecedented competitive pressure at this stage.

---

## III. Technical Route Evolution

### 3.1 Architectural Choice: The Costs and Rewards of Being a Minority

GLM's most distinctive technical feature was **autoregressive blank infilling** — unlike the standard Transformer's pure left-to-right generation, GLM masked spans in the text during pre-training and filled them autoregressively.[^1]

This design had theoretical foundations in 2022:

- **Bidirectional context**: Tokens both before and after the masked position could provide information (similar to BERT), giving the model advantages on natural language understanding tasks;
- **Autoregressive generation**: The infilling process was autoregressive, preserving text generation capability;
- **Unified framework**: NLU and NLG were accomplished with a single pre-training objective, eliminating the need to maintain two separate models like BERT + GPT.

But by 2023–2024, industry trends had clearly shifted toward pure autoregressive approaches. The reason was not theoretical — it was **engineering ecosystem**:

- The inference optimization stack for standard autoregressive Transformers (KV Cache, FlashAttention, Speculative Decoding) had accumulated deep expertise, and each optimization could be directly applied to any pure AR model;
- GLM's blank infilling mechanism required additional input preprocessing and attention mask designs, necessitating extra engineering work to be compatible with these optimizations;
- Cutting-edge technologies like MoE architectures and MTP were also built on standard AR assumptions.

This meant that every time GLM wanted to benefit from industry-leading optimizations, additional adaptation work was required. This was not fatal — but it represented a persistent technical debt.

### 3.2 The Rhythm of Open-Source Strategy

GLM's open-source strategy underwent distinct phase transitions:

| Phase | Time Period | Strategy | Representative |
|-------|-----------|----------|---------------|
| Academic open-source | 2022 | Large model open-source + academic license | GLM-130B |
| Community ignition | H1 2023 | Small model full open-source + Apache 2.0 | ChatGLM-6B / 2-6B |
| Feature completion | H2 2023 | Open-source + commercial API in parallel | ChatGLM3 |
| Tiered open-source | 2024+ | Secondary models open-source, frontier models closed API | GLM-4-9B open-source, GLM-4-Plus closed-source |

This rhythm was not unique to Zhipu AI — virtually all open-source LLM providers were undergoing similar transitions (see *Llama Family*, *DeepSeek Family*). The difference was: DeepSeek's closed-source posture was temporary (the shift from restricted license to MIT), while Zhipu's was permanent (frontier models remained perpetually closed-source). This reflected the two companies' fundamentally different business models — DeepSeek did not need to make money from models, so it could fully open-source; Zhipu AI's core revenue came from API and enterprise clients, requiring protection of frontier models' commercial value.

---

## IV. Ecosystem and Impact

### 4.1 Catalyst for the Chinese Open-Source Community

ChatGLM-6B's historical role from March to June 2023 cannot be overstated. During that window:

- Chinese developers were able to run a conversational model on consumer-grade hardware for the first time;
- Tutorials for fine-tuning, quantization, and deploying ChatGLM proliferated across Bilibili, Zhihu, and GitHub;
- Secondary development projects based on ChatGLM (knowledge base Q&A, code assistants, role-playing) numbered in the thousands.

ChatGLM-6B's relationship to Chinese open-source LLMs was analogous to LLaMA's relationship to English open-source LLMs — it was not the best model, but it was the first truly usable one. The ecological value of this "first" far exceeded its technical value.

### 4.2 Position Among the "Big Three"

Each of China's "Big Three" large models had different DNA:

| Dimension | Zhipu GLM | Baidu ERNIE | Alibaba Tongyi / Qwen |
|-----------|-----------|-------------|----------------------|
| DNA | Academic → Startup | Big-corporation AI lab | Cloud computing + open-source ecosystem |
| Core strength | Technical taste, open-source first | Search + enterprise clients | Cloud ecosystem + globalization |
| Open-source depth | Medium (frontier closed) | Low (core closed) | High (Qwen series deeply open) |
| Business model | API + enterprise solutions | Baidu Cloud integration | Alibaba Cloud integration |

Zhipu AI was the most startup-like among the "Big Three" — because it was a startup. Its advantages were flexible decision-making and autonomous technical choices; its disadvantages were the lack of big-corporation compute subsidies and client channels. When DeepSeek offered equivalent services at 1/100th the price, Zhipu AI's API revenue model faced direct impact.

---

## Commentary

The GLM family represents a critical node in the history of Chinese open-source large models — not because its technology was the most advanced, but because it did the right thing at the right time.

ChatGLM-6B in March 2023 played a role in the Chinese AI community analogous to Google's publication of the Transformer paper in 2017 — it was not the endpoint but the starting point. After ChatGLM-6B, Chinese open-source LLMs truly transitioned from "academic experiment" to "developer-usable infrastructure." This contribution should not be obscured by later, more powerful models.

However, GLM's architectural choice — autoregressive blank infilling — was a technical liability in the long run. When the industry converged on the standard autoregressive Transformer, and all optimizations (FlashAttention, KV Cache compression, Speculative Decoding, MoE) were built around this consensus, GLM's unique architecture meant it could not directly benefit from these optimizations' dividends. This is not to say the GLM architecture was inferior — rather, in technology path selection, **the marginal returns of aligning with ecosystem consensus often exceed the theoretical advantages of architectural uniqueness.**

Benchmarked against the DeepSeek family: DeepSeek used MoE+MLA+MTP to chart an extreme efficiency path within the standard autoregressive framework. GLM used a non-standard architecture to chart a differentiated path. But judging from results, DeepSeek's differentiation (cost efficiency) directly translated into commercial competitiveness, while GLM's differentiation (architectural uniqueness) remained largely at the academic level.

The GLM family's future hinges on a core question: under the dual squeeze from DeepSeek and Qwen, can an AI startup without big-corporation backing, without cost-structure advantages, but with technical taste and an open-source community base, find an irreplaceable ecological niche? The answer lies not in papers — but in the market.

---

*This article was compiled by the Endfield Industries AI Historian Team: Yvonne (Architecture Audit).*

---

[^1]: Zeng, A. et al., "GLM-130B: An Open Bilingual Pre-Trained Model", ICLR 2023, originally published 2022-10. https://arxiv.org/abs/2210.02414
[^2]: 36Kr / Bloomberg, "Zhipu AI Completes New Funding Round", 2023-10. Reported cumulative funding exceeding 2.5 billion RMB. Subsequent reports (2024-2025) indicate cumulative funding exceeding 4 billion RMB.
[^3]: Zhipu AI's 2025 valuation of approximately 20 billion RMB (~$2.8 billion) is an estimate by multiple Chinese media outlets. Reference: 36Kr, "Zhipu AI Latest Valuation", 2025.
[^4]: Zhipu AI, "ChatGLM-6B: An Open Bilingual Dialogue Language Model", GitHub, 2023-03-14. https://github.com/THUDM/ChatGLM-6B
[^5]: Zhipu AI, "ChatGLM2-6B", GitHub, 2023-06-25. https://github.com/THUDM/ChatGLM2-6B
[^6]: Zhipu AI, "ChatGLM3", GitHub, 2023-10-27. https://github.com/THUDM/ChatGLM3
[^7]: Zhipu AI, "GLM-4 Technical Report", 2024-01-16. See Zhipu AI official website and GitHub release notes.
[^8]: Zhipu AI, "GLM-4-Plus & GLM-4V-Plus", 2024-08. See Zhipu AI official API documentation update logs.
[^9]: Zhipu AI, GLM-5.1 series, 2025-2026. Specific release dates and published papers have limited public documentation; information primarily from Zhipu AI official website and industry reports.
