# 《Google 本纪》

> Google 是 Transformer 的发明者，全球唯一拥有从 TPU 芯片到模型到产品到操作系统的完整 AI 栈的公司。从 Transformer 论文的八位作者到 Bard 翻车的集体耻笑，再到 Gemini 3 登顶 LMArena——Google 的 AI 十年，是一场"发明者如何夺回自己创造的世界"的漫长反击。

---

## 一、概述

Google 在大模型史上的地位独一无二：**Transformer 架构诞生于 Google Brain**，2017 年的《Attention Is All You Need》改变了整个行业的技术底座。但 Google 并没有从自己的发明中获得最大的商业回报——ChatGPT 由 OpenAI 率先产品化，Google 反而成了被追赶的追赶者。

从 2023 年 Bard 的仓促翻车，到 2025 年 Gemini 2.5 Pro 登顶 LMArena，Google 用了两年时间完成了从"被嘲笑"到"被认可"的转型。支撑这条弧线的不是某一次算法突破，而是 Google 在硬件（TPU）、数据（YouTube/搜索）、分发（Android/Workspace）三个维度上的结构性优势。这些优势是任何纯模型公司无法复制的。

---

## 二、创立与早年

### 2.1 Google Brain：深度学习的先驱

Google 的 AI 故事始于 2011 年。Google Brain 项目由 Jeff Dean、Andrew Ng（吴恩达）和 Greg Corrado 发起——用 16,000 个 CPU 核心训练了一个深度神经网络，从 YouTube 视频中自动学会了识别猫。这个实验在学术上不算突破，但在工业上意义重大：它证明了大规模计算可以直接提升模型能力。[^1]

Google Brain 此后成为 Google 内部 AI 研究的核心引擎。2014 年收购 DeepMind（约 $5 亿），形成了 Google 内部两个 AI 实验室并存的格局——Google Brain 侧重工程和产品，DeepMind 侧重基础研究和游戏 AI（AlphaGo、AlphaFold）。这种"双头制"在带来内部竞争的同时，也埋下了组织协调的隐患。

### 2.2 Transformer 论文：改变世界的八个人

2017 年 6 月 12 日，Google Brain 和 Google Research 的八位作者——Ashish Vaswani、Noam Shazeer、Niki Parmar、Jakob Uszkoreit、Llion Jones、Aidan N. Gomez、Łukasz Kaiser 和 Illia Polosukhin——在 arXiv 上发布了《Attention Is All You Need》。[^2]

这篇论文的核心贡献不是发现了注意力机制（它之前已经存在），而是做了一道减法：把循环结构（RNN/LSTM）完全砍掉，只用自注意力来建模序列。这个设计让训练可以完全并行，让模型可以堆得更深、更大，为后来所有大模型——GPT、BERT、PaLM、Llama——铺平了道路。

极具讽刺意味的是，论文的八位作者中，**没有一位留在 Google**。Ashish Vaswani 和 Niki Parmar 联合创办了 Adept AI（后被 Amazon 收购）；Noam Shazeer 创办了 Character.AI（后被 Google 收回）；Llion Jones 创办了 Sakana AI；Łukasz Kaiser 加入了 OpenAI（后成为 o1 项目的核心成员）；Illia Polosukhin 创办了 NEAR Protocol。[^3] Google 发明了 Transformer，却没能留住任何一个发明者。

---

## 三、关键事件

### 3.1 TPU：从芯片开始的自主之路

Google 是全球唯一一家同时自研 AI 芯片和大模型的公司。TPU（Tensor Processing Unit）自 2015 年起迭代：TPU v1 用于推理加速（驱动 AlphaGo），TPU v2/v3 用于训练，TPU v4（2021）开始成为 Gemini 系列的训练基础设施，TPU v5p（2023）被用于 Gemini 1.0 Ultra 的训练。[^4]

TPU 的战略意义在于：Google 不受英伟达 GPU 供应限制。当 OpenAI 和 Anthropic 在 2023-2024 年为争抢 H100/A100 集群而头疼时，Google 可以自由扩展自己的训练算力。这个优势在推理成本上更为明显——Gemini 系列的 API 定价可以持续压低，因为 Google 不需要向英伟达支付 GPU 溢价。

但 TPU 生态也有裂隙。TPU 的软件栈（JAX/XLA）不如英伟达的 CUDA 生态成熟，外部开发者更习惯 PyTorch + CUDA。这意味着 Google 的 AI 基础设施优势更多体现在内部训练和推理上，而非吸引外部开发者生态。

### 3.2 Bard 翻车（2023-02）：恐慌的代价

2023 年 2 月 6 日，Sundar Pichai 在 Google 官方博客宣布 Bard——基于 LaMDA 的对话 AI 产品。这一天比微软发布 Bing+ChatGPT 早一天——Google 试图用"先发"来抢占注意力。[^5]

两天后的巴黎 demo 中，Bard 在回答一个关于詹姆斯·韦伯太空望远镜的问题时犯了事实性错误。一张截图在社交媒体上疯传——Google 股价当日下跌 7.7%，市值蒸发超过 1000 亿美元。[^6]

Bard 翻车是 Google AI 战略中最具标志性的耻辱。它暴露了 Google 在"快速发布 vs 充分测试"之间的矛盾——一个习惯了搜索引擎"经过充分测试再上线"文化的公司，在 ChatGPT 的冲击下被迫仓促出招。但 Bard 也迫使 Google 做了一个关键决定：**放弃 Google Brain 和 DeepMind 的双头制，合并为 Google DeepMind**。

### 3.3 Google DeepMind 的成立（2023-04）：合并与统一

2023 年 4 月，Google 正式宣布将 Google Brain 和 DeepMind 合并为 **Google DeepMind**，由 DeepMind 联合创始人 Demis Hassabis 领导。[^7]

这次合并的直接动因是 Bard 翻车暴露的组织效率问题：两个实验室各自为政、资源重复投入、产品化路径不统一。合并后，Gemini 项目成为 Google DeepMind 的旗舰——由原 Brain 和 DeepMind 的团队联合开发，统一在 TPU v5p 上训练。

Hassabis 的领导风格与之前的双头制截然不同。他强调"研究必须服务于产品"——DeepMind 之前以纯基础研究著称（AlphaFold、AlphaGo），合并后必须同时产出可部署的模型。这个转向让一些纯研究导向的成员不满，但从组织效率上看，合并立竿见影：Gemini 1.0 在合并后仅八个月就发布了。

### 3.4 Gemini 1.0 到 3.x：从剪辑争议到 LMArena 登顶

**2023-12-06** — Google DeepMind 发布 Gemini 1.0，Ultra 在 32 项基准中 30 项超过 GPT-4。但发布 demo 被曝剪辑造假，社区信任度受损（详见《Gemini 世家》）。

**2024-02-15** — Gemini 1.5 Pro 发布，1M token 上下文窗口——开辟"超长上下文"赛道，迫使所有对手跟进。

**2024-12-11** — Gemini 2.0 Flash 发布，定位"agentic era"先锋——Google 率先将大模型定位为"能调用工具的智能体"。

**2025-03-25** — Gemini 2.5 Pro 发布，LMArena 排行榜登顶。从 2023 年 12 月的"剪辑造假"到 2025 年 3 月的"用户投票登顶"，Google 用了 16 个月走完了从被嘲笑到被认可的路。[^8]

**2026-05** — Gemini 3 系列发布，延续 Pro（旗舰）+ Flash（速度）+ Deep Think（深度推理）三层产品结构，与 GPT-5.x、Claude 4 处于持续竞速状态。

### 3.5 数据护城河：YouTube、搜索、Books

Google 拥有大模型训练数据中最深的护城河：YouTube（视频数据，全球最大视频平台）、Google Search（网页索引，覆盖互联网的绝大多数页面）、Google Books（数十亿页书籍扫描）。这三个数据源是 OpenAI 和 Anthropic 无法复制的——它们是 Google 二十年互联网基础设施积累的副产品。

Gemini 的"原生多模态"——从设计之初就在文本、图像、音频、视频的联合数据上训练——只有在拥有这些独家数据源时才成为可能。竞争对手即使在算法上追上 Google，在训练数据的广度和多样性上也很难匹敌。

---

## 四、兴衰分析

### 阶段一：发明者的优势（2011-2020）

**发生了什么**：Google Brain 和 DeepMind 并行推进深度学习前沿，Transformer 论文、BERT、TPU、AlphaFold 等重大成果均出自此期。

**为什么发生**：Google 的搜索和广告业务提供了充足的资金支持；学术自由的组织文化鼓励基础研究；TPU 自研使 Google 在算力上领先。

**留下了什么**：Transformer 架构成为全行业的技术底座；TPU 成为 Google 的硬件护城河；但"发明者优势"也带来了一种惰性——Google 更擅长发论文，不擅长快速产品化。

### 阶段二：被 ChatGPT 打得措手不及（2022-2023）

**发生了什么**：ChatGPT（2022-11）引爆公众关注，Google 仓促发布 Bard（2023-02）却遭遇翻车，被迫合并 Brain 和 DeepMind。

**为什么发生**：Google 的产品化节奏与 OpenAI 截然不同——Google 习惯了"搜索引擎式"的充分测试后上线，而 OpenAI 用"研究预览"的方式快速迭代。Google 内部的"双头制"导致资源分散、决策缓慢。

**留下了什么**：Bard 翻车成为 Google AI 历史上最具标志性的耻辱事件，但也成为了组织变革的催化剂——直接导致了 Google DeepMind 的成立。

### 阶段三：结构性反击（2024-至今）

**发生了什么**：Gemini 系列从 1.0 的剪辑争议迭代到 2.5 Pro 的 LMArena 登顶；超长上下文、原生多模态、agentic 定位成为差异化优势；TPU 自研持续迭代。

**为什么发生**：Google 的结构性优势——TPU、数据、分发——在长期竞争中逐渐发挥作用。Gemini 不必在每个维度上都是最强，只需在"能力×成本×分发"的乘积上无人能及。

**留下的悬念**：Google 能否在推理模型（Deep Think）上持续领先？OpenAI 的 GPT-5.x 和 Anthropic 的 Claude 4 会否在核心能力上再次拉开差距？Google 的"全栈自主"优势能否转化为真正的市场份额？

---

## 评曰

Google 的 AI 十年，可以用一句话概括：**发明了改变世界的工具，却没有在第一时间理解它的产品价值。**

Transformer 论文的八位作者全部离开 Google，这不是偶然——它暴露了 Google 组织文化中的一个裂隙：学术自由与产品速度之间的张力。Google 鼓励发论文，但论文发完之后，产品化的节奏远慢于一个 50 人的创业公司。ChatGPT 不是技术上比 Google 的模型更强——GPT-3.5 的底座能力不如 PaLM——但它把已有技术放进了一个聊天框，五天百万用户。Google 有更强的模型，却没有一个叫"ChatGPT"的产品。

但 Google 也证明了一件事：**基础设施是最大的时间朋友**。TPU、YouTube 数据、Android 分发——这些需要十年以上才能建成的资产，在长期竞争中越来越重要。当模型能力趋于同质化（GPT-5.x、Claude 4、Gemini 3.x 在核心基准上差距越来越小），竞争会从"谁的模型更强"转向"谁的系统更完整"。在这个维度上，Google 至今仍是全世界唯一一个拥有从芯片到模型到产品到操作系统的完整 AI 栈的公司。

Bard 翻车的耻辱和 Gemini 登顶的荣耀，发生在同一家公司身上——这不是矛盾，而是同一种力量的两面：一个习惯了深度思考的组织，在被迫加速时会摔跤，但在跌倒后能站起来，因为它脚下踩的地基比任何人都厚。

---

*本篇由终末地工业史官团队编纂：庄方宜（主笔）。*

---

[^1]: Le et al., "Building High-level Features Using Large Scale Unsupervised Learning", arXiv:1112.6209, 2012. https://arxiv.org/abs/1112.6209
[^2]: Vaswani et al., "Attention Is All You Need", arXiv:1706.03762, 2017-06-12. https://arxiv.org/abs/1706.03762
[^3]: Cade Metz / The New York Times, "The A.I. Revolution Is Coming. Not Everyone Is Convinced.", 2023-05-01.（关于 Transformer 八位作者去向的综合报道）
[^4]: Google Cloud Blog, "Cloud TPU v5p and AI Hypercomputer", 2023-12-06. https://cloud.google.com/blog/products/ai-machine-learning/introducing-cloud-tpu-v5e-and-a3-gpus
[^5]: Sundar Pichai / Google Blog, "An important next step on our AI journey", 2023-02-06. https://blog.google/technology/ai/bard-google-ai-search-updates/
[^6]: The Verge, "Google's AI chatbot Bard makes factual error in first demo", 2023-02-08. https://www.theverge.com/2023/2/8/23590864/google-ai-chatbot-bard-mistake-error-exoplanet-demo
[^7]: Google Blog, "Google DeepMind: Bringing together two world-class AI teams", 2023-04-20. https://blog.google/technology/ai/google-deepmind-google-brain/ （原 URL 已失效，此为归档替代链接）
[^8]: Google DeepMind Blog, "Gemini 2.5: Our most intelligent AI model", 2025-03-25. https://blog.google/technology/google-deepmind/gemini-model-thinking-updates-march-2025/
