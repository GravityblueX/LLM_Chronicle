# Model version evolution table

## Overview

This table selects publicly released models or versions that have been landmark milestones in the LLM landscape since 2017, recording their release dates, developers, release formats, and traceable sources. Parameter counts are only listed when officially disclosed or published in papers; otherwise marked as "Undisclosed."

## Table

| Date | Model / Version | Developer | Release format | Parameter count | Source |
|------|----------------|-----------|---------------|----------------|--------|
| 2017-06 | Transformer | Google Brain / Google Research | Paper published | N/A | [^1] |
| 2018-06 | GPT-1 | OpenAI | Paper and code published | 117M | [^2] |
| 2018-10 | BERT | Google | Paper and code published | 340M (Large) | [^10] |
| 2019-02 | GPT-2 | OpenAI | Staged release | 1.5B | [^3] |
| 2020-05-28 | GPT-3 | OpenAI | Paper published, API service | 175B | [^4] |
| 2021-12 | Gopher | DeepMind | Paper published | 280B | [^11] |
| 2022-01 | InstructGPT | OpenAI | Paper published | 1.3B / 6B / 175B | [^12] |
| 2022-03 | Chinchilla | DeepMind | Paper published | 70B | [^13] |
| 2022-11 | ChatGPT (GPT-3.5) | OpenAI | Product release | Undisclosed | [^14] |
| 2023-02 | LLaMA | Meta AI | Research license release | 7B / 13B / 33B / 65B | [^5] |
| 2023-03 | GPT-4 | OpenAI | API and product release | Undisclosed | [^6] |
| 2023-03 | Claude | Anthropic | API | Undisclosed | [^15] |
| 2023-07 | Llama 2 | Meta AI | Open weights with license | 7B / 13B / 70B | [^7] |
| 2023-09 | Mistral 7B | Mistral AI | Open weights, Apache 2.0 | 7B | [^16] |
| 2023-12 | Gemini 1.0 | Google DeepMind | API | Undisclosed | [^17] |
| 2024-03 | Claude 3 | Anthropic | API | Undisclosed | [^18] |
| 2024-04 | Llama 3 | Meta AI | Open weights with license | 8B / 70B | [^8] |
| 2024-05 | GPT-4o | OpenAI | API and product | Undisclosed | [^19] |
| 2024-07 | Llama 3.1 | Meta AI | Open weights with license | 8B / 70B / 405B | [^20] |
| 2024-09 | o1 | OpenAI | API and product | Undisclosed | [^21] |
| 2024-12 | DeepSeek-V3 | DeepSeek | Open weights, MIT license | 671B (MoE) | [^22] |
| 2025-01 | DeepSeek-R1 | DeepSeek | Open weights, MIT license | 671B (MoE, total parameters) | [^9] |

## Notes

- "Release format" describes only the primary availability method at launch, not the full extent of openness.
- GPT-4, ChatGPT, Claude, Gemini, GPT-4o, o1, and others have undisclosed parameter counts; external estimates are not adopted in this table.
- DeepSeek-R1 and DeepSeek-V3 are Mixture of Experts (MoE) models; parameter figures in the table represent total parameters, with actual per-token activated parameters detailed elsewhere.
- InstructGPT's date is based on the OpenAI blog (2022-01-27); the arXiv paper was submitted on 2022-03-04.
- Although BERT is not an autoregressive language model, its "pre-training + fine-tuning" paradigm profoundly influenced subsequent LLM development.

---

*Compiled by the Endfield Industrial Historian team: Yvonne (initial draft), Zhuang Fangyi (cross-review)*

---

[^1]: Vaswani et al., "Attention Is All You Need", arXiv, 2017-06-12. https://arxiv.org/abs/1706.03762
[^2]: Radford et al., "Improving Language Understanding by Generative Pre-Training", OpenAI, 2018. https://cdn.openai.com/research-covers/language-unsupervised/language_understanding_paper.pdf
[^3]: OpenAI, "Better Language Models and Their Implications", 2019-02-14. https://openai.com/index/better-language-models/
[^4]: Brown et al., "Language Models are Few-Shot Learners", arXiv, 2020-05-28. https://arxiv.org/abs/2005.14165
[^5]: Meta AI, "Introducing LLaMA: A foundational, 65-billion-parameter large language model", 2023-02-24. https://ai.meta.com/blog/large-language-model-llama-meta-ai/
[^6]: OpenAI, "GPT-4", 2023-03-14. https://openai.com/index/gpt-4-research/
[^7]: Meta AI, "Llama 2: Open Foundation and Fine-Tuned Chat Models", 2023-07-18. https://ai.meta.com/research/publications/llama-2-open-foundation-and-fine-tuned-chat-models/
[^8]: Meta AI, "Introducing Meta Llama 3: The most capable openly available LLM to date", 2024-04-18. https://ai.meta.com/blog/meta-llama-3/
[^9]: DeepSeek-AI, "DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning", arXiv, 2025-01-22. https://arxiv.org/abs/2501.12948
[^10]: Devlin et al., "BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding", arXiv, 2018-10-11. https://arxiv.org/abs/1810.04805
[^11]: Rae et al., "Scaling Language Models: Methods, Analysis & Insights from Training Gopher", arXiv, 2021-12. https://arxiv.org/abs/2112.11446
[^12]: Ouyang et al., "Training language models to follow instructions with human feedback", arXiv, 2022-03-04. https://arxiv.org/abs/2203.02155
[^13]: Hoffmann et al., "Training Compute-Optimal Large Language Models", arXiv, 2022-03-29. https://arxiv.org/abs/2203.15556
[^14]: OpenAI Blog, "Introducing ChatGPT", 2022-11-30. https://openai.com/index/chatgpt/
[^15]: Anthropic, "Introducing Claude", 2023-03-14. https://www.anthropic.com/news/introducing-claude
[^16]: Mistral AI, "Announcing Mistral 7B", 2023-09-27. https://mistral.ai/news/announcing-mistral-7b/
[^17]: Google DeepMind, "Introducing Gemini", 2023-12-06. https://blog.google/technology/ai/google-gemini-ai/
[^18]: Anthropic, "Introducing the next generation of Claude", 2024-03-04. https://www.anthropic.com/news/claude-3-family
[^19]: OpenAI, "Hello GPT-4o", 2024-05-13. https://openai.com/index/hello-gpt-4o/
[^20]: Meta AI, "Introducing Llama 3.1", 2024-07-23. https://ai.meta.com/blog/meta-llama-3-1/
[^21]: OpenAI, "Learning to Reason with LLMs", 2024-09-12. https://openai.com/index/learning-to-reason-with-llms/
[^22]: DeepSeek-AI, "DeepSeek-V3 Technical Report", arXiv, 2024-12-27. https://arxiv.org/abs/2412.19437
