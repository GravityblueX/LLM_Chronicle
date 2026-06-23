# LLM pricing history table

## Overview

This table documents the public API pricing milestones of major large language models since GPT-3's commercialization in 2020, using per million tokens (per 1M) as a unified unit to record input/output prices for easy cross-comparison. Prices listed are the initial published prices at launch; subsequent price reductions are noted in separate rows. Some Chinese vendors initially quoted prices "per thousand tokens"; these have been converted to per 1M. Data sources include official pricing pages, launch blogs, or API documentation.

## Table

| Date | Model | Developer | Input ($/1M) | Output ($/1M) | Notes | Source |
|------|-------|-----------|:--:|:--:|-------|--------|
| 2020-06 | GPT-3 Davinci | OpenAI | $60.00 | $60.00 | First LLM API, scarcity pricing, output = input same price | [^1] |
| 2020-06 | GPT-3 Curie | OpenAI | $6.00 | $6.00 | — | [^1] |
| 2023-03 | GPT-3.5 Turbo | OpenAI | $2.00 | $2.00 | 30× cheaper than Davinci | [^2] |
| 2023-03 | GPT-4 (8K) | OpenAI | $30.00 | $60.00 | First GPT-4-tier pricing, "stronger = more expensive" established | [^3] |
| 2023-08 | GPT-3.5 Turbo (4K) | OpenAI | $1.50 | $2.00 | Fine-tuning price reduction | [^4] |
| 2023-11 | GPT-4 Turbo | OpenAI | $10.00 | $30.00 | 67% cheaper than GPT-4 | [^5] |
| 2024-03 | Claude 3 Haiku | Anthropic | $0.25 | $1.25 | Budget tier targeting GPT-3.5 | [^6] |
| 2024-03 | Claude 3 Sonnet | Anthropic | $3.00 | $15.00 | Mid-tier | [^6] |
| 2024-03 | Claude 3 Opus | Anthropic | $15.00 | $75.00 | Premium tier targeting GPT-4, most expensive at the time | [^6] |
| 2024-05 | DeepSeek-V2 | DeepSeek | ~$0.14 | ~$0.28 | Price disruption. ~1/70 the price of GPT-4 level | [^7] |
| 2024-05 | GPT-4o | OpenAI | $5.00 | $15.00 | Replaced GPT-4 Turbo, another 50% reduction | [^8] |
| 2024-05 | Gemini 1.5 Flash | Google | $0.35 | $0.35 | For ≤128K; 2M slightly more expensive | [^9] |
| 2024-05 | Gemini 1.5 Pro | Google | $3.50 | $10.50 | For ≤128K | [^9] |
| 2024-05 | Doubao Pro-32K | ByteDance | ~$0.11 | ~$0.11 | ¥0.0008/1K ≈ ¥0.8/1M | [^10] |
| 2024-05 | Qwen-Long | Alibaba Cloud | ~$0.07 | ~$0.07 | 97% price reduction to ¥0.5/M | [^11] |
| 2024-06 | GLM-4 Flash | Zhipu AI | Free | Free | China's first wave of free-tier offerings | [^12] |
| 2024-07 | GPT-4o mini | OpenAI | $0.15 | $0.60 | OpenAI's cheapest model | [^13] |
| 2024-09 | o1-preview | OpenAI | $15.00 | $60.00 | First reasoning model pricing — back to GPT-4 levels | [^14] |
| 2024-10 | Claude 3.5 Haiku | Anthropic | $0.80 | $4.00 | Slightly more expensive than 3 Haiku, with substantially improved performance | [^15] |
| 2024-12 | DeepSeek-V3 | DeepSeek | ~$0.14/$0.28 | ~$1.12 | cache hit/miss: ¥1/¥2; output: ¥8/M | [^16] |
| 2024-12 | Gemini 2.0 Flash | Google | $0.10 | $0.40 | Generous experimental free tier | [^17] |
| 2025-01 | DeepSeek-R1 | DeepSeek | ~$0.14/$0.56 | ~$2.24 | ¥1/¥4 in, ¥16 out; 3% of o1's price | [^18] |
| 2025-01 | o3-mini | OpenAI | $1.10 | $4.40 | Major reasoning model price cut under R1 pressure | [^19] |
| 2025-02 | GPT-4.5 | OpenAI | $75.00 | $150.00 | Most expensive ever, going against the tide; discontinued 2025-07 | [^20] |

## Notes

- Prices are marked in US dollars or USD-equivalent at the time of release. RMB prices are converted at approximate exchange rates at the time (~¥7.2/$1 in 2024-05, ~¥7.3/$1 in 2025-01).
- DeepSeek price conversions are for reference only — actual pricing is in RMB, and exchange rates and settlement methods may differ for the China market.
- GPT-3's early pricing was in "per thousand tokens" (per 1K), here converted to per 1M: $0.06/1K = $60/1M.
- The same model may have different pricing for different context lengths (e.g., Gemini 1.5 Pro at ≤128K vs. 2M); the table uses the cheaper short-context tier.
- Free models are not listed with prices, only noted in the remarks column.
- Some Chinese vendors' older pricing comes from media reports rather than long-retained official API documentation; entries marked "(uncertain)" lack continuously accessible official sources.

---

*Compiled by the Endfield Industrial Historian team: Zhuang Fangyi (Lead Writer).*

---

[^1]: OpenAI, "OpenAI API", 2020-06-11. https://openai.com/blog/openai-api (IA archive: https://web.archive.org/web/20240501200000/https://openai.com/blog/openai-api)
[^2]: OpenAI, "Introducing ChatGPT and GPT-3.5 Turbo API", 2023-03-01. https://openai.com/index/introducing-chatgpt-and-whisper-apis/
[^3]: OpenAI, "GPT-4", 2023-03-14. https://openai.com/index/gpt-4-research/
[^4]: OpenAI Blog, "GPT-3.5 Turbo fine-tuning and API updates", 2023-08-22. https://openai.com/index/gpt-3-5-turbo-fine-tuning-and-api-updates/
[^5]: OpenAI, "New models and developer products announced at DevDay", 2023-11-06. https://openai.com/index/new-models-and-developer-products-announced-at-devday/
[^6]: Anthropic, "Introducing the next generation of Claude", 2024-03-04. https://www.anthropic.com/news/claude-3-family
[^7]: DeepSeek-AI, "DeepSeek-V2", arXiv:2405.04434, 2024-05. https://arxiv.org/abs/2405.04434
[^8]: OpenAI, "Hello GPT-4o", 2024-05-13. https://openai.com/index/hello-gpt-4o/
[^9]: Google, "Gemini 1.5 Pro and 1.5 Flash GA", 2024-05-14. https://blog.google/technology/ai/google-gemini-update-may-2024/
[^10]: ByteDance, "Doubao Large Model Official Launch", 2024-05-15. https://www.volcengine.com/theme/2225822-T-64-1
[^11]: Alibaba Cloud, "Tongyi Qianwen Price Reduction Notice", 2024-05-21. https://help.aliyun.com/zh/model-studio/getting-started/billing-for-tongyiqianwen
[^12]: Zhipu AI, "GLM Series Model Price Adjustment", 2024-06-05. (Uncertain: official pricing page URL not stably retained long-term; cross-verified from widely reported media coverage at the time)
[^13]: OpenAI, "GPT-4o mini: advancing cost-efficient intelligence", 2024-07-18. https://openai.com/index/gpt-4o-mini-advancing-cost-efficient-intelligence/
[^14]: OpenAI, "Learning to Reason with LLMs", 2024-09-12. https://openai.com/index/learning-to-reason-with-llms/
[^15]: Anthropic, "Claude 3.5 Haiku", 2024-10-22. https://www.anthropic.com/news/claude-3-5-haiku
[^16]: DeepSeek-AI, "DeepSeek-V3 Technical Report", arXiv:2412.19437, 2024-12-27. https://arxiv.org/abs/2412.19437
[^17]: Google for Developers, "Gemini 2.0 Flash", 2024-12-11. https://ai.google.dev/gemini-api/docs/models#gemini-2.0-flash
[^18]: DeepSeek-AI, "DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning", arXiv:2501.12948, 2025-01-22. https://arxiv.org/abs/2501.12948
[^19]: OpenAI, "OpenAI o3-mini", 2025-01-31. https://openai.com/index/openai-o3-mini/
[^20]: OpenAI, "Introducing GPT-4.5", 2025-02-27. https://openai.com/index/introducing-gpt-4-5/
