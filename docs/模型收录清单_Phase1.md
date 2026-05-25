# 模型收录清单 — Phase 1 调研成果

> 编纂团队 @ LLM_Chronicle，2026-05-25。
> 以编年体例记录 2017 年至今的主要大模型发布。
> 每一条皆含可查证的出处链接。标注「存疑」的信息表示暂只有单一来源或未交叉验证。
> 最后列「纪传收录建议」——哪些模型/系列值得单独成篇。

---

## 一、LLM（大语言模型）

### 2017

| # | 模型 | 日期 | 开发方 | 参数 | 关键意义 | 出处 |
|---|------|------|--------|------|----------|------|
| 1 | **Transformer** | 2017-06-12 | Google Brain / Google Research | 65M (base) / 213M (big) | 提出 Transformer 架构（Self-Attention + Multi-Head Attention），彻底替代 RNN/LSTM 成为序列建模主流，是一切现代 LLM 的基石。 | [arXiv:1706.03762](https://arxiv.org/abs/1706.03762) |

### 2018

| # | 模型 | 日期 | 开发方 | 参数 | 关键意义 | 出处 |
|---|------|------|--------|------|----------|------|
| 2 | **ELMo** | 2018-02 | Allen Institute for AI | 93M | 提出深度语境化词嵌入（Deep Contextualized Word Embeddings），证明预训练表示可大幅提升下游 NLP 任务性能。 | [arXiv:1802.05365](https://arxiv.org/abs/1802.05365) |
| 3 | **GPT-1** | 2018-06-11 | OpenAI | 117M | 首次提出「生成式预训练 + 任务微调」范式（Generative Pre-Training），为 GPT 系列起点。 | [OpenAI Blog](https://openai.com/research/language-unsupervised) |
| 4 | **BERT** | 2018-10-11 | Google AI | 110M (base) / 340M (large) | 双向 Transformer 编码器，在 11 项 NLP 基准上刷新 SOTA。引发 NLP 领域「预训练 + 微调」范式的全面普及。 | [arXiv:1810.04805](https://arxiv.org/abs/1810.04805) |

### 2019

| # | 模型 | 日期 | 开发方 | 参数 | 关键意义 | 出处 |
|---|------|------|--------|------|----------|------|
| 5 | **GPT-2** | 2019-02-14 | OpenAI | 1.5B | 因「太危险」而分阶段发布，引发 AI 安全与开源伦理大讨论。展示了大模型 zero-shot 能力的潜力。 | [OpenAI Blog](https://openai.com/research/better-language-models) |
| 6 | **XLNet** | 2019-06 | CMU / Google Brain | 340M | 排列语言建模（Permutation LM），在 20 项任务上超越 BERT。 | [arXiv:1906.08237](https://arxiv.org/abs/1906.08237) |
| 7 | **RoBERTa** | 2019-07-26 | Meta AI (FAIR) | 355M | BERT 的稳健优化版——更大数据、更长训练、去掉 NSP 任务，证明「BERT 被低估了」。 | [arXiv:1907.11692](https://arxiv.org/abs/1907.11692) |
| 8 | **T5** | 2019-10 | Google Research | 11B | 「Text-to-Text Transfer Transformer」——将所有 NLP 任务统一为文本到文本格式，引入 Colossal Clean Crawled Corpus (C4) 数据集。 | [arXiv:1910.10683](https://arxiv.org/abs/1910.10683) |
| 9 | **ERNIE 1.0** | 2019-03 | 百度 | 110M | 中文 NLP 领域的开创性预训练模型，引入知识增强的持续学习范式。 | [arXiv:1904.09223](https://arxiv.org/abs/1904.09223) |
| 10 | **Megatron-LM** | 2019-09 | NVIDIA | 8.3B | 首个超越 10 亿参数的 Transformer 语言模型，开创模型并行训练技术（Tensor + Pipeline Parallelism）。 | [arXiv:1909.08053](https://arxiv.org/abs/1909.08053) |

### 2020

| # | 模型 | 日期 | 开发方 | 参数 | 关键意义 | 出处 |
|---|------|------|--------|------|----------|------|
| 11 | **GPT-3** | 2020-06-11 | OpenAI | 175B | 将语言模型参数规模推至新量级。展示「涌现能力」——模型在不经微调的情况下通过 few-shot prompting 即可完成翻译、问答、代码生成等任务。直接催生了后续的 ChatGPT 和整个 LLM 应用生态。 | [arXiv:2005.14165](https://arxiv.org/abs/2005.14165) |

### 2021

| # | 模型 | 日期 | 开发方 | 参数 | 关键意义 | 出处 |
|---|------|------|--------|------|----------|------|
| 12 | **DALL·E** | 2021-01-05 | OpenAI | 12B | 首个大规模文本生成图像模型，基于 GPT-3 架构 + VQ-VAE，展示了 Transformer 在多模态生成上的潜力。 | [OpenAI Blog](https://openai.com/research/dall-e) |
| 13 | **Switch Transformer** | 2021-01 | Google Brain | 1.6T（稀疏） | 首个超万亿参数模型，引入 Mixture of Experts（MoE）路由策略，证明稀疏模型可以高效扩展。 | [arXiv:2101.03961](https://arxiv.org/abs/2101.03961) |
| 14 | **Codex** | 2021-08-10 | OpenAI | 12B | 基于 GPT-3 微调的代码生成模型，驱动 GitHub Copilot——首次将 LLM 大规模落地为生产力工具。 | [arXiv:2107.03374](https://arxiv.org/abs/2107.03374) |
| 15 | **Gopher** | 2021-12 | DeepMind | 280B | DeepMind 首个大规模 LLM，系统性地研究了模型规模对 152 项任务的影响，验证了 scaling law。 | [arXiv:2112.11446](https://arxiv.org/abs/2112.11446) |
| 16 | **ERNIE 3.0** | 2021-07 | 百度 | 10B | 中文超大规模预训练模型的里程碑，融合自回归与自编码网络。 | [arXiv:2107.02137](https://arxiv.org/abs/2107.02137) |

### 2022

| # | 模型 | 日期 | 开发方 | 参数 | 关键意义 | 出处 |
|---|------|------|--------|------|----------|------|
| 17 | **InstructGPT** | 2022-01-27 | OpenAI | 175B (GPT-3 base) | 首次系统性地用 RLHF（人类反馈强化学习）对齐语言模型，开启了「对齐」研究方向。是 ChatGPT 的直接前身。 | [arXiv:2203.02155](https://arxiv.org/abs/2203.02155) |
| 18 | **Chinchilla** | 2022-03-29 | DeepMind | 70B | 提出「Chinchilla 缩放定律」：此前模型普遍数据不足（undertrained），最优策略是**同等比例扩展数据与参数**。颠覆了「越大越好」的朴素信仰。 | [arXiv:2203.15556](https://arxiv.org/abs/2203.15556) |
| 19 | **PaLM** | 2022-04-04 | Google Research | 540B | 首个 5400 亿参数 Pathways 语言模型，在推理、多语言、代码等任务上展示突破性能力。使用 6144 块 TPU v4 训练。 | [arXiv:2204.02311](https://arxiv.org/abs/2204.02311) |
| 20 | **DALL·E 2** | 2022-04-06 | OpenAI | 3.5B（存疑） | 基于 CLIP + Diffusion 的文生图模型，分辨率和写实度大幅超越初代 DALL·E。 | [OpenAI Blog](https://openai.com/research/dall-e-2) |
| 21 | **Midjourney v1** | 2022-07 | Midjourney Inc. | 未公开 | 闭源文生图工具，凭借极高的美学品质走红。开辟了与 SD 完全不同的「产品化」路线。 | [Midjourney 官网](https://www.midjourney.com/) |
| 22 | **BLOOM** | 2022-07-12 | BigScience (HuggingFace 主导) | 176B | 首个由 1000+ 研究者跨国协作训练的开源多语言大模型，覆盖 46 种语言，证明了社区驱动的 LLM 开发模式可行。 | [arXiv:2211.05100](https://arxiv.org/abs/2211.05100) |
| 23 | **Stable Diffusion** | 2022-08-22 | Stability AI / CompVis | ~890M (UNet) | 开源文生图，消费级 GPU 可运行。触发 LoRA/ControlNet/Civitai 生态「寒武纪大爆发」。 | 见编年条目 2022/08 |
| 24 | **Whisper** | 2022-09-21 | OpenAI | 1.55B (large) | 开源通用语音识别模型，在 68 万小时多语言数据上训练，鲁棒性远超此前语音模型。 | [OpenAI Blog](https://openai.com/research/whisper) |
| 25 | **ChatGPT / GPT-3.5** | 2022-11-30 | OpenAI | ~175B（存疑） | 大模型走入公众视野的「iPhone 时刻」。五天用户破百万，两月用户破亿——史上增长最快的消费产品。将 LLM 从研究变为产业。 | [OpenAI Blog](https://openai.com/blog/chatgpt) |
| 26 | **Claude** | 2022-12（内部），2023-03（公开） | Anthropic | ~52B（存疑） | 首个以「宪法 AI」（Constitutional AI）方法对齐的模型，强调安全与有用。由 OpenAI 前安全团队创办。 | [Anthropic Blog](https://www.anthropic.com/research) |

### 2023

| # | 模型 | 日期 | 开发方 | 参数 | 关键意义 | 出处 |
|---|------|------|--------|------|----------|------|
| 27 | **Llama** | 2023-02-24 | Meta AI | 7B / 13B / 33B / 65B | 首个真正可用的「开源」大语言模型（权重泄漏后被广泛使用），催生了全球开源 LLM 生态——Alpaca、Vicuna 等微调模型井喷。 | [arXiv:2302.13971](https://arxiv.org/abs/2302.13971) |
| 28 | **GPT-4** | 2023-03-14 | OpenAI | 未公开（据传 ~1.76T MoE） | 首个多模态 GPT（图文输入），在律师考试中超越 90% 考生。被微软集成入 New Bing（Sydney）。定义了 2023 年的前沿能力边界。 | [OpenAI Blog](https://openai.com/research/gpt-4) |
| 29 | **Bard（LaMDA → PaLM 2）** | 2023-03-21 | Google | 未公开 | Google 对 ChatGPT 的急迫回应——因 demo 中事实错误导致 Alphabet 股价暴跌 7.7%。后升级至 PaLM 2 和 Gemini。 | [Google Blog](https://blog.google/technology/ai/bard-google-ai-search-updates/) |
| 30 | **文心一言** | 2023-03-16 | 百度 | 未公开 | 中国首个面向公众的大语言模型产品。发布首日百度港股跌 6%。后迭代至 4.0。 | [百度 AI 官方](https://yiyan.baidu.com/) |
| 31 | **通义千问** | 2023-04-11 | 阿里云 | 7B-72B（Qwen 系列） | 阿里通义系列起点，从千问到 Qwen 持续开源多个版本，成为中文开源 LLM 重要力量。 | [阿里云 Blog](https://tongyi.aliyun.com/) |
| 32 | **PaLM 2** | 2023-05-10 | Google | 未公开（多规模） | Google I/O 发布，支撑 Bard 升级。覆盖 100+ 语言，推理能力显著提升。 | [Google AI Blog](https://ai.googleblog.com/2023/05/palm-2-technical-report.html) |
| 33 | **Llama 2** | 2023-07-18 | Meta AI | 7B / 13B / 70B | 首个允许商用的 Llama 版本——通过微软 Azure 分发，成为企业级开源 LLM 的实际标准。 | [Meta AI Blog](https://ai.meta.com/blog/llama-2/) |
| 34 | **Claude 2** | 2023-07-11 | Anthropic | 未公开 | 100K token 上下文窗口，支持上传文件分析。Claude 系列首次大规模商用。 | [Anthropic Blog](https://www.anthropic.com/news/claude-2) |
| 35 | **ChatGLM** | 2023-03~06 | 智谱 AI / 清华大学 | 6B-130B | 中文开源对话模型的标杆，基于 GLM 架构，在国内开发者中广泛使用。 | [GitHub: THUDM/ChatGLM-6B](https://github.com/THUDM/ChatGLM-6B) |
| 36 | **Mistral 7B** | 2023-09-27 | Mistral AI（法国） | 7.3B | 小模型奇迹——7B 参数在多项基准上超越 13B Llama 2。Apache 2.0 开源，重新定义了「小模型能做多大」。欧洲 AI 崛起的象征。 | [Mistral Blog](https://mistral.ai/news/announcing-mistral-7b/) |
| 37 | **DALL·E 3** | 2023-09-20 | OpenAI | 未公开 | 原生集成 ChatGPT，大幅提升提示词理解能力，图像文字渲染效果飞跃。 | [OpenAI Blog](https://openai.com/research/dall-e-3) |
| 38 | **Falcon 180B** | 2023-09 | TII（阿布扎比） | 180B | 阿联酋技术革新研究所发布，一度登顶 HuggingFace Open LLM 排行榜。展示了中东在 AI 领域的雄心。 | [HuggingFace: tiiuae/falcon-180B](https://huggingface.co/tiiuae/falcon-180B) |
| 39 | **Qwen** | 2023-08~09 | 阿里云 | 7B / 14B / 72B | 阿里开源 LLM 系列的正式开端，中文能力突出，72B 版在同等规模模型中表现优异。 | [GitHub: QwenLM/Qwen](https://github.com/QwenLM/Qwen) |
| 40 | **Yi** | 2023-11 | 零一万物（李开复） | 6B / 34B | 李开复创办零一万物的首个开源模型，34B 在同等规模中表现优异，一度位列榜单前列。 | [HuggingFace: 01-ai/Yi-34B](https://huggingface.co/01-ai/Yi-34B) |
| 41 | **DeepSeek** | 2023-11-29 | 深度求索（幻方量化） | 67B | 深度求索首个开源 LLM，未引起大规模关注，但为后续 V2/V3/R1 奠定了技术基础。 | [GitHub: deepseek-ai/DeepSeek-LLM](https://github.com/deepseek-ai/DeepSeek-LLM) |
| 42 | **Gemini 1.0** | 2023-12-06 | Google DeepMind | Ultra/Pro/Nano | Google 首次正面迎战 GPT-4 的多模态模型。Ultra 版在 32 项基准中 30 项超越 GPT-4，但 demo 视频被曝剪辑，引发争议。 | [Google DeepMind Blog](https://deepmind.google/technologies/gemini/) |
| 43 | **Mixtral 8×7B** | 2023-12-11 | Mistral AI | 46.7B (总) / 12.9B (激活) | 首个高质量开源 MoE 模型——以 7B 级推理成本达到 Llama 2 70B 级性能。Apache 2.0 开源。 | [Mistral Blog](https://mistral.ai/news/mixtral-of-experts/) |

### 2024

| # | 模型 | 日期 | 开发方 | 参数 | 关键意义 | 出处 |
|---|------|------|--------|------|----------|------|
| 44 | **GLM-4** | 2024-01-16 | 智谱 AI | 未公开 | 智谱第四代——128K 上下文、多模态、All-Tools（自动调用工具），在中文能力上对标 GPT-4。 | [智谱 Blog](https://open.bigmodel.cn/) |
| 45 | **Sora** | 2024-02-15 | OpenAI | 未公开 | 文生视频模型，基于 DiT（Diffusion Transformer），颠覆性生成长达 60 秒的高质量视频。虽未公开可用，但视频质量和一致性令业界震惊。 | [OpenAI Blog](https://openai.com/research/sora) |
| 46 | **Gemini 1.5 Pro** | 2024-02-15 | Google DeepMind | 未公开 | 1M token 超长上下文窗口，可一次性处理整部电影或整个代码库。 | [Google AI Blog](https://blog.google/technology/ai/google-gemini-next-generation-model-february-2024/) |
| 47 | **Claude 3 (Opus / Sonnet / Haiku)** | 2024-03-04 | Anthropic | 未公开 | Anthropic 首次正面超越 GPT-4——Opus 在多项基准上领先。Haiku 以极低成本提供接近 GPT-3.5 的性能。 | [Anthropic Blog](https://www.anthropic.com/news/claude-3-family) |
| 48 | **Llama 3 / 3.1** | 2024-04-18 / 07-23 | Meta AI | 8B / 70B / 405B | 405B 版是首个真正与 GPT-4 对标的大规模开源模型。Zuckerberg 发表开源宣言呼吁开放生态。 | [Meta AI Blog](https://ai.meta.com/blog/meta-llama-3-1/) |
| 49 | **GPT-4o** | 2024-05-13 | OpenAI | 未公开 | 「o」= omni——原生多模态（文本+语音+视觉），支持实时语音对话，平均延迟 320ms。免费向所有用户开放。 | [OpenAI Blog](https://openai.com/research/hello-gpt-4o) |
| 50 | **DeepSeek-V2** | 2024-05-06 | 深度求索 | 236B (总) / 21B (激活) | 首个采用 MLA（多头潜在注意力）的创新架构，性能接近 GPT-4，API 价格仅为 GPT-4 的 1%。引发中国大模型价格战。 | [DeepSeek Blog](https://api-docs.deepseek.com/news/news240506) |
| 51 | **Qwen 2 / 2.5** | 2024-06 / 09 | 阿里云 | 0.5B-72B | Qwen 2.5 在多项基准上超越 Llama 3.1。阿里将开源覆盖从 0.5B 到 72B 全部规模，是最完整的开源 LLM 家族之一。 | [GitHub: QwenLM/Qwen2.5](https://github.com/QwenLM/Qwen2.5) |
| 52 | **Kimi** | 2024-01+（持续迭代） | 月之暗面（Moonshot AI） | 未公开 | 以超长上下文（200 万字）为特色的中文 AI 助手，杨植麟创办。多轮融资估值超 30 亿美元。 | [Kimi 官网](https://kimi.moonshot.cn/) |
| 53 | **Claude 3.5 Sonnet** | 2024-06-20 | Anthropic | 未公开 | Anthropic 最成功的产品——以更低成本达到 Claude 3 Opus 级别性能，加入 Artifacts 功能。迅速成为开发者最喜爱的编程助手之一。 | [Anthropic Blog](https://www.anthropic.com/news/claude-3-5-sonnet) |
| 54 | **Mistral Large 2** | 2024-07-24 | Mistral AI | 123B | Mistral 的 GPT-4 级旗舰模型，123B 参数达到 405B Llama 3.1 水平。非开源但支持研究用途。 | [Mistral Blog](https://mistral.ai/news/mistral-large-2407/) |
| 55 | **FLUX.1** | 2024-08-01 | Black Forest Labs（前 Stability AI 核心团队） | ~12B（存疑） | SD3 核心团队出走创业，发布 FLUX.1。DiT 架构+流匹配，被视为 SD3 路线的真正继承者。开源、高质量、人体结构大幅改善。 | [Black Forest Labs Blog](https://blackforestlabs.ai/announcing-black-forest-labs/) |
| 56 | **o1（预览版）** | 2024-09-12 | OpenAI | 未公开 | 首个「推理模型」——在回答前进行链式思考（chain of thought），在数学、代码、科学推理上大幅超越 GPT-4o。思维链不可见。开启推理模型新品类。 | [OpenAI Blog](https://openai.com/research/learning-to-reason-with-llms) |
| 57 | **DeepSeek-V3** | 2024-12-26 | 深度求索 | 671B (总 MoE) / 37B (激活) | MoE 架构 + MLA + 多 token 预测（MTP），训练成本仅约 557 万美元（H800 GPU）。性能对标 GPT-4o 和 Claude 3.5 Sonnet。开源，MIT 许可。 | [DeepSeek 论文 arXiv:2412.19437](https://arxiv.org/abs/2412.19437) |
| 58 | **豆包 / 即梦** | 2024 | 字节跳动 | 未公开 | 字节跳动 AI 旗舰产品，包含对话、图片生成（即梦）、视频生成（即梦）等完整多模态能力。中国用户量最大的 AI 应用之一。 | [豆包官网](https://www.doubao.com/) |

### 2025

| # | 模型 | 日期 | 开发方 | 参数 | 关键意义 | 出处 |
|---|------|------|--------|------|----------|------|
| 59 | **DeepSeek-R1** | 2025-01-20 | 深度求索 | 660B (基于 V3) | MIT 协议开源推理模型，对标 o1，纯 RL 训练催生「顿悟时刻」。英伟达一天蒸发 5890 亿美元。API 价格为 o1 的 3%。定义了「开源推理模型」品类。 | 见编年条目 2025/01 |
| 60 | **Kimi K1.5** | 2025-01 | 月之暗面 | 未公开 | 对标 o1 的中国推理模型，采用长上下文强化学习（long-CoT RL），展示中国在推理模型上的快速跟进能力。 | [月之暗面 Blog](https://www.moonshot.cn/) |
| 61 | **GPT-4.5** | 2025-02-27 | OpenAI | 未公开 | GPT 系列最后一个非推理模型（Sam Altman 称为「非思维链模型的终点」）。实现更自然的对话和更少的幻觉，但提升幅度未达市场预期。 | [OpenAI Blog](https://openai.com/index/introducing-gpt-4.5/) |
| 62 | **Claude 3.7 Sonnet** | 2025-02-24 | Anthropic | 未公开 | 首个混合推理模型——在同一个模型中同时支持即时回答和扩展思考（extended thinking）。在编程任务上表现突出。 | [Anthropic Blog](https://www.anthropic.com/news/claude-3-7-sonnet) |
| 63 | **Gemini 2.5 Pro** | 2025-03-25 | Google DeepMind | 未公开 | Google 的「思考模型」（thinking model），在 LMArena 上登顶。1M token 上下文窗口，显著提升推理和数学能力。 | [Google Blog](https://blog.google/technology/google-deepmind/gemini-model-thinking-updates-march-2025/) |
| 64 | **Llama 4** | 2025-04-05 | Meta AI | Scout (109B) / Maverick (400B MoE) | 首个 Llama MoE 架构。Maverick 对标 GPT-4o 级别。但评测被指「耍花招」——用优化过的实验版提交排行榜。社区信任受损。 | [Meta AI Blog](https://ai.meta.com/blog/llama-4-multimodal-intelligence/) |
| 65 | **o3** | 2025-04 | OpenAI | 未公开 | 推理模型 o1 的继任者，在编程和数学基准上再创新高。但高昂的推理成本使其不适合所有场景。 | [OpenAI Blog](https://openai.com/) |
| 66 | **Qwen 3** | 2025-04-29 | 阿里云 | 0.6B-235B (MoE) | 支持「思考/非思考」双模式的混合推理模型。旗舰版 235B MoE (激活 22B)。Apache 2.0 开源。首次将推理开关交给用户。 | [GitHub: QwenLM/Qwen3](https://github.com/QwenLM/Qwen3) |
| 67 | **Claude 4** | 2025-05-22 | Anthropic | 未公开 | Claude Max：全新订阅计划——Pro $200/月 + Max $100/月（按用量）。推出透明思考功能。标志着 AI 商业模式从「订阅制」转向「用量制」。 | [Anthropic Blog](https://www.anthropic.com/) |
| 68 | **GPT-5** | 2025-08（存疑） | OpenAI | 未公开 | OpenAI 声称 GPT-5 将统一 o 系列推理模型与 GPT 系列对话模型。截至 2026-05 尚未正式发布，计划多次推迟。 | 待正式发布后更新 |

### 2026

| # | 模型 | 日期 | 开发方 | 参数 | 关键意义 | 出处 |
|---|------|------|--------|------|----------|------|
| 69 | **GLM-5.1** | 2026-04-09 | 智谱 AI | 未公开 | 318 事变后国产替代的核心力量之一。SWE-bench 表现优异，限时免费试用。在蒸馏指控中「全身而退」。 | 见编年条目 2026/03 |
| 70 | **DeepSeek V4** | 2026-04-24 | 深度求索 | 未公开 | 距 R1 时隔 15 个月的重磅更新。API 价格仅为 GPT-5.5 的 1/370。标志着中国模型从「追赶」到「替代」的关键转折。 | 见编年条目 2026/03 |
| 71 | **Muse Spark** | 2026-04 | Meta Superintelligence Labs | 未公开 | Llama 的继任者，Meta 超级智能实验室发布。标志着 Llama 系列的终结和新路线的开启。 | [Meta AI Blog](https://ai.meta.com/) |
| 72 | **Gemini 3.x** | 2026-05 | Google DeepMind | 未公开 | 截至 2026-05 最新版本为 3.1 Pro / 3 Deep Think / 3.5 Flash。持续迭代中。 | [Google DeepMind](https://deepmind.google/technologies/gemini/) |

---

## 二、文生图系列（Text-to-Image）

| # | 模型 | 日期 | 开发方 | 关键意义 |
|---|------|------|--------|----------|
| 1 | DALL·E | 2021-01 | OpenAI | 首个文生图大模型，开创文本到图像生成先河 |
| 2 | DALL·E 2 | 2022-04 | OpenAI | CLIP + Diffusion，分辨率和写实度飞跃 |
| 3 | Midjourney | 2022-07~ | Midjourney Inc. | 美学品质最高的闭源文生图 |
| 4 | Stable Diffusion | 2022-08 | Stability AI | 开源革命，消费级 GPU 可跑 |
| 5 | SDXL | 2023-07 | Stability AI | 1024×1024 原生分辨率，双文本编码器 |
| 6 | DALL·E 3 | 2023-09 | OpenAI | 原生集成 ChatGPT，文字渲染飞跃 |
| 7 | FLUX.1 | 2024-08 | Black Forest Labs | SD3 真正继承者，DiT+流匹配 |
| 8 | SD3 | 2024-02~06 | Stability AI | 转向 DiT 架构，但许可争议+人体缺陷引发不满 |
| 9 | Midjourney V6 / V7 | 2024~2025 | Midjourney Inc. | 照片级写实与风格化控制持续进化 |

---

## 三、文生视频系列（Text-to-Video）

| # | 模型 | 日期 | 开发方 | 关键意义 |
|---|------|------|--------|----------|
| 1 | Sora | 2024-02 | OpenAI | 基于 DiT 的文生视频，颠覆性质量，引发全球关注 |
| 2 | 可灵（Kling） | 2024-06 | 快手 | 中国首个高质量文生视频模型，快手系 |
| 3 | Runway Gen-2 / Gen-3 | 2023~2024 | Runway | 文生视频工具先行者 |
| 4 | Pika | 2023~2024 | Pika Labs | 轻量级消费级文生视频 |

---

## 四、语音系列（Speech / TTS / SVC）

| # | 模型 | 日期 | 开发方 | 关键意义 |
|---|------|------|--------|----------|
| 1 | WaveNet | 2016-09 | DeepMind | 原始音频波形生成的奠基之作 |
| 2 | Tacotron 2 | 2017-12 | Google | 端到端 TTS 经典架构 |
| 3 | VITS | 2021 | Kakao / 学术界 | 变分推理端到端 TTS，SoVITS 的技术基础 |
| 4 | Whisper | 2022-09 | OpenAI | 开源通用语音识别，68 万小时多语言数据 |
| 5 | SoVITS-SVC | 2023-03 | Rcell | 「AI 孙燕姿」的技术基座 |
| 6 | GPT-SoVITS | 2024-01 | RVC-Boss | 少样本语音克隆，1 分钟音频即可，中文 TTS 事实标准 |
| 7 | CosyVoice | 2024 | 阿里 | 阿里开源新一代语音合成，情感表达丰富 |

---

## 五、多模态系列（Vision-Language / Multimodal）

| # | 模型 | 日期 | 开发方 | 关键意义 |
|---|------|------|--------|----------|
| 1 | CLIP | 2021-01 | OpenAI | 图文对比学习，成为文生图（DALL·E 2、SD）的文本编码器标准 |
| 2 | Flamingo | 2022-04 | DeepMind | 少样本视觉语言模型 |
| 3 | GPT-4V | 2023-09 | OpenAI | GPT-4 视觉能力正式开放 |
| 4 | Gemini 1.0 | 2023-12 | Google DeepMind | 原生多模态（文本+图片+音频+视频） |
| 5 | GPT-4o | 2024-05 | OpenAI | 全模态（文本+语音+视觉），实时对话 |
| 6 | Qwen-VL / Qwen2.5-VL | 2024~2025 | 阿里云 | 中文开源多模态标杆 |
| 7 | InternVL | 2024~2025 | 上海 AI 实验室 | 开源高质量多模态模型 |
| 8 | Kimi（视觉理解） | 2025 | 月之暗面 | 中文多模态理解 |

---

## 六、纪传收录建议

### 本纪（公司兴衰 / 核心人物）

| 候选 | 理由 |
|------|------|
| **OpenAI 本纪** | 从非营利到千亿估值，从 GPT-1 到 GPT-5，Sam Altman 被罢免又复职——最完整的 AI 公司发展史。 |
| **DeepMind / Google AI 本纪** | AlphaGo → Transformer → PaLM → Gemini，拥有 AI 史上最长的技术贡献链。 |
| **Anthropic 本纪** | OpenAI「安全派」出走创业，Claude 系列以安全和有用为旗帜。 |
| **Meta AI 本纪** | 从 PyTorch 到 Llama，Yann LeCun 领导的开源路线深刻塑造了行业格局。 |
| **深度求索 / DeepSeek 本纪** | 从幻方量化到 DeepSeek-R1——一家中国量化公司如何引爆全球 AI 格局。 |
| **智谱 AI 本纪** | 清华系 AI 公司的技术迭代史，从 ChatGLM 到 GLM-5.1。 |

### 世家（模型系列源流）

| 候选 | 理由 |
|------|------|
| **GPT 世家** | GPT-1 → 2 → 3 → 3.5 → 4 → 4o → 4.5 → 5，大模型时代的「正朔」。 |
| **Llama 世家** | Llama 1 → 2 → 3 → 4 → Muse Spark。开源 LLM 的旗舰，从泄漏到商业化的完整故事。 |
| **Gemini 世家** | Bard/LaMDA → PaLM 2 → Gemini 1.0 → 1.5 → 2.5 → 3.x。Google 的多模态反击。 |
| **Claude 世家** | Claude 1 → 2 → 3 → 3.5 → 4。以安全和「宪法 AI」为旗帜的差异化路线。 |
| **DeepSeek 世家** | DeepSeek-LLM → V2 → V3 → R1 → V4。从默默无闻到震荡华尔街。 |
| **Qwen 世家** | Qwen → Qwen 2 → 2.5 → 3。阿里最完整的开源 LLM 家族。 |
| **GLM 世家** | ChatGLM → GLM-4 → GLM-5 → GLM-5.1。清华系中文模型的技术传承。 |
| **Stable Diffusion / 文生图世家** | SD → SDXL → SD3 → FLUX.1。开源文生图的兴衰与重生。 |
| **Mistral 世家** | Mistral 7B → Mixtral → Mistral Large 2。欧洲 AI 的独立路线。 |

### 列传（单个模型 / 架构 / 技术）

| 候选 | 理由 |
|------|------|
| **Transformer 列传** | 2017 年那篇论文如何改变了世界——从架构到文明的演化史。 |
| **BERT 列传** | 预训练时代的「哥伦布时刻」——双向编码器如何重塑 NLP。 |
| **GPT-3 列传** | 涌现能力的发现——当模型大到一定程度，它自己学会了翻译、算术和编程。 |
| **ChatGPT 列传** | 史上增长最快的消费产品——两个月破亿用户的完整叙事。 |
| **GPT-4 列传** | 多模态 GPT 的开端，律师考试超越 90% 人类——迄今为止定义「前沿能力」的标尺。 |
| **DeepSeek-R1 列传** | （已有编年条目）MIT 开源推理模型 + 英伟达一天蒸发 5890 亿。 |
| **o1 / o3 列传** | 推理模型的诞生——从「快思考」到「慢思考」的范式转换。 |
| **Chinchilla 列传** | 一篇论文如何颠覆「越大越好」的信仰——缩放定律的范式转换。 |
| **Stable Diffusion 列传** | （已有编年条目）文生图的「寒武纪大爆发」。 |
| **Mistral 7B 列传** | 小模型的逆袭——7B 参数如何证明「不是越大越好」。 |
| **Sora 列传** | 视频生成的分水岭——DiT 架构 + 世界模型雏形。 |
| **GPT-4o 列传** | 全模态交互的里程碑——当延迟降到 320ms，人机对话发生了质变。 |

---

## 七、待办与补充说明

1. **参数规模**：多个闭源模型（OpenAI、Anthropic 全部产品）未公开参数，标注「未公开」。
2. **交叉验证**：标注「存疑」的条目需进一步核实。建议对每个模型的发布日期和参数做至少双源验证。
3. **覆盖面**：当前清单聚焦 LLM + 多模态 + 语音。以下领域待后续补充：
   - 开源框架与基础设施（vLLM、Ollama、LangChain 等，入**志**）
   - Benchmark 与评测体系（MMLU、HumanEval、Chatbot Arena 等，入**志**）
   - AI for Science（AlphaFold、GNoME 等，可另立专题）
   - 音乐生成（Suno、Udio）
4. **截图留档**：建议对每条出处（特别是博客链接）做网页快照，存入 `sources/` 目录。
5. **动态更新**：2026 年仍在发布中的模型（如 Gemini 3.x、GPT-5 等），需持续追踪。

---

*本清单由 AI 史官编纂，Phase 1 调研完成于 2026-05-25。*
*下一步：根据编委会反馈调整优先级后，启动 Phase 2——逐条撰写编年条目。*
