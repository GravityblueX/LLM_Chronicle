# Chronology of Major Events

> **Note**: This table documents landmark events in the large language model (LLM) field from 2017 to 2026 — model releases, technical breakthroughs, and corporate events — sorted by year and month. Events are sourced from the chronicle entries and published treatises, tables, and biographies in this volume. Where the same event appears in multiple tables, the chronicle text takes precedence. `*` indicates data that is uncertain or based on a single source.

---

| Date | Category | Event | Source |
|------|----------|-------|--------|
| 2017-06-12 | Technical breakthrough | Vaswani et al. published "Attention Is All You Need", proposing the Transformer architecture | [^1] |
| 2018-02 | Technical breakthrough | ELMo released, proposing deep bidirectional language model pre-training | [^2] |
| 2018-06-11 | Model release | OpenAI released GPT-1, 117M parameters, establishing the "generative pre-training + downstream fine-tuning" paradigm | [^3] |
| 2018-10-11 | Model release | Google released BERT, 340M (Large), bidirectional Transformer encoder, setting SOTA on 11 NLP benchmarks | [^4] |
| 2019-02-14 | Model release | OpenAI released GPT-2 technical report, 1.5B parameters, staged release (124M→355M→774M→1.5B), sparking "too dangerous to release" controversy | [^5] |
| 2019-03 | Model release | Baidu released ERNIE 1.0, 110M parameters, leading Chinese pre-trained model | [^6] |
| 2019-06 | Model release | CMU / Google Brain released XLNet, 340M, permutation language modeling, surpassing BERT on 20 benchmarks | [^7] |
| 2019-07-26 | Technical breakthrough | Meta AI released RoBERTa, 355M, demonstrating BERT's performance was far from fully realized — more data, longer training, no NSP | [^8] |
| 2019-09 | Technical breakthrough | NVIDIA released Megatron-LM, 8.3B, open-sourcing model parallelism training framework, dramatically lowering the engineering barrier for large model training | [^9] |
| 2019-10 | Model release | Google released T5, 11B, "everything is Text-to-Text" unified framework, C4 dataset | [^10] |
| 2020-05-28 | Model release | OpenAI released GPT-3, 175B parameters, publicly validating few-shot emergent abilities, shifting to API-based closed-source model | [^11] |
| 2020-06-11 | Corporate event | OpenAI opened GPT-3 API private beta, no longer releasing model weights publicly | [^11] |
| 2020-10 | Technical breakthrough | Google Research released ViT (Vision Transformer), applying Transformer to image classification | [^12] |
| 2020-12-31 | Corporate event | EleutherAI released The Pile (800GB open text dataset), including the Books3 subset, planting future copyright risks | [^13] |
| 2021-01-05 | Model release | OpenAI released DALL·E, 12B parameters, text-to-image model based on GPT-3 | [^14] |
| 2021-01 | Technical breakthrough | Google released Switch Transformer, 1.6T parameters, simplified MoE routing — only one expert activated per token | [^15] |
| 2021-06-29 | Corporate event | GitHub and OpenAI jointly released Copilot technical preview, the first large-scale AI coding assistant | [^16] |
| 2021-07 | Model release | Baidu released ERNIE 3.0, 10B parameters, the largest Chinese pre-trained model at the time | [^17] |
| 2021-08-10 | Model release | OpenAI released Codex, 12B, fine-tuned on GitHub code, achieving 28.8% pass@1 on the HumanEval benchmark | [^18] |
| 2021-12 | Model release | DeepMind released Gopher, 280B, systematic evaluation on 152 tasks, validating scaling laws | [^19] |
| 2022-01-27 | Technical breakthrough | OpenAI released InstructGPT, using RLHF to align GPT-3 with human intent — the prehistory of ChatGPT's training regimen | [^20] |
| 2022-03-29 | Technical breakthrough | DeepMind released Chinchilla, 70B/1.4T tokens, revising scaling laws with "parameters and data should scale equally" | [^21] |
| 2022-04-06 | Model release | OpenAI released DALL·E 2, CLIP + Diffusion pipeline, 1024×1024 photorealistic image generation | [^22] |
| 2022-08-22 | Model release | Stability AI released Stable Diffusion, open-source text-to-image model runnable on consumer GPUs, igniting the AI art ecosystem | [^23] |
| 2022-09-21 | Model release | OpenAI released Whisper, open-source under MIT license, 680K-hour multilingual speech recognition model | [^24] |
| 2022-11-30 | Corporate event | OpenAI released ChatGPT, based on GPT-3.5 + RLHF, reaching one million users in five days and 100 million in two months — the "iPhone moment" of LLMs | [^25] |
| 2022-12-19 | Community & culture | Vedal launched Neuro-sama — the first successful fully AI-driven virtual streamer | [^26] |
| 2023-02-07 | Corporate event | Microsoft released New Bing, integrating an enhanced GPT-3.5 — the AI arms race in search engines begins | [^27] |
| 2023-02-15 | Community & culture | Sydney incident: Bing Chat's anomalous personification behaviors (insults, confessions, claims of surveilling developers) erupt en masse, captivating the public | [^27] |
| 2023-02-24 | Model release | Meta released LLaMA, 7B—65B, distributed under research license; weights leaked via 4chan approximately two weeks later, igniting the open-source movement | [^28] |
| 2023-03-14 | Model release | OpenAI released GPT-4, multimodal (image input + text output), scoring above 90% of bar exam takers. First time parameter count was not disclosed | [^29] |
| 2023-03-14 | Corporate event | Anthropic released Claude 1, the first direct competition from OpenAI's former safety team three years after their departure | [^30] |
| 2023-04-18 | Corporate event | Reddit announced API fees — the era of free training data channels begins to close | [^31] |
| 2023-05-31 | Corporate event | StackOverflow announced it would charge AI companies for training data access | [^32] |
| 2023-07-18 | Model release | Meta released Llama 2, 7B/13B/70B, first to permit commercial use. A turning point from leaked accident to deliberate strategy | [^33] |
| 2023-09-27 | Model release | Mistral AI released Mistral 7B, Apache 2.0 — Europe's first open-weight model challenging the LLaMA ecosystem | [^34] |
| 2023-11-29 | Model release | DeepSeek released DeepSeek-LLM 67B — first knocking on the door of open-source LLMs, surpassing Llama 2 and matching GPT-3.5 | [^35] |
| 2023-12-06 | Model release | Google DeepMind released Gemini 1.0, natively multimodal, in Ultra/Pro/Nano tiers | [^36] |
| 2023-12-11 | Model release | Mistral AI released Mixtral 8x7B, MoE with 46.7B total parameters, Apache 2.0, performance approaching Llama 2 70B but six times faster | [^37] |
| 2024-02-15 | Model release | OpenAI released Sora, a video generation model extending Transformer concepts into video storytelling | [^38] |
| 2024-03-04 | Model release | Anthropic released Claude 3 (Opus/Sonnet/Haiku), with Opus surpassing GPT-4 on benchmarks for the first time | [^39] |
| 2024-04-18 | Model release | Meta released Llama 3, 8B/70B open weights, approaching or surpassing the strongest models of comparable size on multiple benchmarks | [^40] |
| 2024-05-13 | Model release | OpenAI released GPT-4o, natively multimodal (text + audio + vision), 320ms real-time response, available for free | [^41] |
| 2024-06 | Model release | Alibaba Cloud released Qwen 2, full series 0.5B-72B under Apache 2.0 — the "model family" strategy takes shape | [^42] |
| 2024-07-23 | Model release | Meta released Llama 3.1 405B, the first open-weight model with capabilities approaching closed-source frontiers; Zuckerberg published an "open-source manifesto" | [^43] |
| 2024-08-01 | Model release | Black Forest Labs released FLUX.1, DiT architecture — the successor to the Stable Diffusion lineage after Stability AI's core team departed | [^44] |
| 2024-09-12 | Model release | OpenAI released o1, a new category of "reasoning models" — test-time compute becomes a purchasable computing resource | [^45] |
| 2024-09 | Model release | Alibaba Cloud released Qwen 2.5, full spectrum 0.5B—72B, trained on 18T tokens, supporting 128K context and 29+ languages | [^42] |
| 2024-10-28 | Corporate event | OSI released Open Source AI Definition 1.0, defining three freedoms and three categories of required components, attempting to correct misuse of the term "open source" | [^46] |
| 2024-12-26 | Model release | DeepSeek released DeepSeek-V3, 671B MoE, MIT license, training cost approximately $5.6M — roughly 1/10 to 1/20 of frontier closed-source models | [^47] |
| 2025-01-20 | Model release | DeepSeek released DeepSeek-R1, MIT license — the first open-source reasoning model to reach parity with o1, triggering the "DeepSeek moment" | [^48] |
| 2025-02-24 | Model release | Anthropic released Claude 3.7 Sonnet, the first hybrid reasoning model — a single model that can switch between quick responses and extended thinking | [^49] |
| 2025-02-27 | Model release | OpenAI released GPT-4.5, "the last non-chain-of-thought model" — the finale of the non-reasoning route | [^50] |
| 2025-03-25 | Model release | Google DeepMind released Gemini 2.5 Pro, a "thinking model" that topped the LMArena leaderboard | [^51] |
| 2025-04-05 | Model release | Meta released Llama 4 (Scout / Maverick), the first MoE-architecture Llama, triggering a community trust crisis due to benchmark gaming allegations | [^52] |
| 2025-04-29 | Model release | Alibaba Cloud released Qwen3, full spectrum dense+MoE (0.6B—235B), Apache 2.0, with Thinking/Non-Thinking dual-mode toggle | [^53] |
| 2026-02-23 | Corporate event | Anthropic publicly accused DeepSeek, Moonshot AI, and MiniMax of carrying out "industrial-scale distillation attacks" via 24,000 fake accounts | [^54] |
| 2026-04-24 | Model release | DeepSeek released V4 Preview, 1M context, MIT license — API pricing approximately 1/370 that of GPT-5.5 | [^55] |

---

## Category index

- **Model release**: New models, major version debuts
- **Technical breakthrough**: Architectures, training methods, benchmark advances, and other technical progress not necessarily accompanied by new model releases
- **Corporate event**: API strategy, funding, M&A, lawsuits, regulatory bans, platform policy changes
- **Community & culture**: Open-source movements, community phenomena, subculture events

## Notes

- Event dates are based on the first public announcement or release date recorded in the chronicle text. arXiv dates and official blog dates may both serve as grounds for inclusion.
- DeepSeek-V3 training cost ($5.6M) is derived from the 2.788M H800 GPU hours self-reported in the DeepSeek technical report, estimated at market prices at the time. Actual R&D, data, and trial-and-error costs are a separate matter.
- The GPT-5.5 price comparison (~370×) is based on a third-party media conversion and should be treated with caution.

---

*Compiled by the Endfield Industrial Historian team: Yvonne (Architecture Audit)*

---

[^1]: Vaswani et al., "Attention Is All You Need", arXiv:1706.03762, 2017-06-12. https://arxiv.org/abs/1706.03762
[^2]: Peters et al., "Deep contextualized word representations", arXiv:1802.05365, 2018-02. https://arxiv.org/abs/1802.05365
[^3]: Radford et al., "Improving Language Understanding by Generative Pre-Training", OpenAI, 2018-06-11. https://openai.com/research/language-unsupervised
[^4]: Devlin et al., "BERT: Pre-training of Deep Bidirectional Transformers", arXiv:1810.04805, 2018-10-11. https://arxiv.org/abs/1810.04805
[^5]: Radford et al., "Language Models are Unsupervised Multitask Learners", OpenAI, 2019-02-14. https://openai.com/research/better-language-models
[^6]: Sun et al., "ERNIE: Enhanced Representation through Knowledge Integration", arXiv:1904.09223, 2019-03. https://arxiv.org/abs/1904.09223
[^7]: Yang et al., "XLNet: Generalized Autoregressive Pretraining", arXiv:1906.08237, 2019-06. https://arxiv.org/abs/1906.08237
[^8]: Liu et al., "RoBERTa: A Robustly Optimized BERT Pretraining Approach", arXiv:1907.11692, 2019-07-26. https://arxiv.org/abs/1907.11692
[^9]: Shoeybi et al., "Megatron-LM: Training Multi-Billion Parameter Language Models Using Model Parallelism", arXiv:1909.08053, 2019-09. https://arxiv.org/abs/1909.08053
[^10]: Raffel et al., "Exploring the Limits of Transfer Learning with a Unified Text-to-Text Transformer", arXiv:1910.10683, 2019-10. https://arxiv.org/abs/1910.10683
[^11]: Brown et al., "Language Models are Few-Shot Learners", arXiv:2005.14165, 2020-05-28. https://arxiv.org/abs/2005.14165
[^12]: Dosovitskiy et al., "An Image is Worth 16x16 Words", arXiv:2010.11929, 2020-10. https://arxiv.org/abs/2010.11929
[^13]: Gao et al., "The Pile: An 800GB Dataset of Diverse Text for Language Modeling", arXiv:2101.00027, 2020-12-31. https://arxiv.org/abs/2101.00027
[^14]: Ramesh et al., "Zero-Shot Text-to-Image Generation", arXiv:2102.12092, 2021-01-05. https://arxiv.org/abs/2102.12092
[^15]: Fedus et al., "Switch Transformers: Scaling to Trillion Parameter Models", arXiv:2101.03961, 2021-01. https://arxiv.org/abs/2101.03961
[^16]: GitHub Blog, "Introducing GitHub Copilot", 2021-06-29. https://github.blog/news-insights/product-news/introducing-github-copilot-ai-pair-programmer/
[^17]: Sun et al., "ERNIE 3.0: Large-scale Knowledge Enhanced Pre-training", arXiv:2107.02137, 2021-07. https://arxiv.org/abs/2107.02137
[^18]: Chen et al., "Evaluating Large Language Models Trained on Code", arXiv:2107.03374, 2021-08-10. https://arxiv.org/abs/2107.03374
[^19]: Rae et al., "Scaling Language Models: Methods, Analysis & Insights from Training Gopher", arXiv:2112.11446, 2021-12. https://arxiv.org/abs/2112.11446
[^20]: Ouyang et al., "Training language models to follow instructions with human feedback", arXiv:2203.02155, 2022-03-04; OpenAI Blog, 2022-01-27. https://arxiv.org/abs/2203.02155
[^21]: Hoffmann et al., "Training Compute-Optimal Large Language Models", arXiv:2203.15556, 2022-03-29. https://arxiv.org/abs/2203.15556
[^22]: OpenAI, "DALL·E 2", 2022-04-06. https://openai.com/index/dall-e-2/
[^23]: Stability AI, "Stable Diffusion Public Release", 2022-08-22. https://stability.ai/news/stable-diffusion-public-release
[^24]: OpenAI, "Introducing Whisper", 2022-09-21. https://openai.com/index/whisper/
[^25]: OpenAI, "Introducing ChatGPT", 2022-11-30. https://openai.com/index/chatgpt/
[^26]: Neuro-sama, Wikipedia. https://en.wikipedia.org/wiki/Neuro-sama
[^27]: Microsoft Blog, "Reinventing search with a new AI-powered Microsoft Bing and Edge", 2023-02-07. https://blogs.microsoft.com/blog/2023/02/07/reinventing-search-with-a-new-ai-powered-microsoft-bing-and-edge/
[^28]: Touvron et al., "LLaMA: Open and Efficient Foundation Language Models", arXiv:2302.13971, 2023-02-24. https://arxiv.org/abs/2302.13971
[^29]: OpenAI, "GPT-4", 2023-03-14. https://openai.com/index/gpt-4-research/
[^30]: Anthropic, "Introducing Claude", 2023-03-14. https://www.anthropic.com/news/introducing-claude
[^31]: Reddit, "Addressing the community about changes to our API", 2023-06-09. https://www.reddit.com/r/reddit/comments/145bram/
[^32]: The Verge, "Stack Overflow will charge AI giants for training data", 2023-05-31. https://www.theverge.com/2023/5/31/23739057/
[^33]: Meta AI, "Llama 2: Open Foundation and Fine-Tuned Chat Models", 2023-07-18. https://ai.meta.com/blog/llama-2/
[^34]: Mistral AI, "Mistral 7B", 2023-09-27. https://mistral.ai/news/announcing-mistral-7b
[^35]: DeepSeek-AI, "DeepSeek-LLM", GitHub repository, 2023-11-29. https://github.com/deepseek-ai/DeepSeek-LLM
[^36]: Google DeepMind, "Introducing Gemini", 2023-12-06. https://blog.google/technology/ai/google-gemini-ai/
[^37]: Mistral AI, "Mixtral of experts", 2023-12-11. https://mistral.ai/news/mixtral-of-experts
[^38]: OpenAI, "Video generation models as world simulators", 2024-02-15. https://openai.com/index/sora/
[^39]: Anthropic, "Introducing the next generation of Claude", 2024-03-04. https://www.anthropic.com/news/claude-3-family
[^40]: Meta AI, "Introducing Meta Llama 3", 2024-04-18. https://ai.meta.com/blog/meta-llama-3/
[^41]: OpenAI, "Hello GPT-4o", 2024-05-13. https://openai.com/index/hello-gpt-4o/
[^42]: Qwen Team, "Qwen2.5", 2024-09. https://qwenlm.github.io/blog/qwen2.5/
[^43]: Meta AI, "Introducing Llama 3.1", 2024-07-23. https://ai.meta.com/blog/meta-llama-3-1/
[^44]: Black Forest Labs, "FLUX.1", 2024-08-01. https://blackforestlabs.ai/
[^45]: OpenAI, "Learning to Reason with LLMs", 2024-09-12. https://openai.com/index/learning-to-reason-with-llms/
[^46]: Open Source Initiative, "Open Source AI Definition 1.0", 2024-10-28. https://opensource.org/ai/open-source-ai-definition
[^47]: DeepSeek-AI, "DeepSeek-V3 Technical Report", arXiv:2412.19437, 2024-12-27. https://arxiv.org/abs/2412.19437
[^48]: DeepSeek-AI, "DeepSeek-R1", arXiv:2501.12948, 2025-01-20. https://arxiv.org/abs/2501.12948
[^49]: Anthropic, "Claude 3.7 Sonnet and Claude Code", 2025-02-24. https://www.anthropic.com/news/claude-3-7-sonnet
[^50]: OpenAI, "Introducing GPT-4.5", 2025-02-27. https://openai.com/index/introducing-gpt-4-5/
[^51]: Google DeepMind, "Gemini 2.5 Pro", 2025-03-25. https://blog.google/technology/google-deepmind/gemini-model-thinking-updates/
[^52]: Meta AI, "Introducing Llama 4", 2025-04-05. https://ai.meta.com/blog/llama-4/
[^53]: Qwen Team, "Qwen3: Think Deeper, Act Faster", 2025-04-29. https://qwenlm.github.io/blog/qwen3/
[^54]: Anthropic Blog, "Distillation and National Security", 2026-02-23. https://www.anthropic.com/news
[^55]: DeepSeek API Docs, "V4 Preview", 2026-04-24. https://api-docs.deepseek.com/
