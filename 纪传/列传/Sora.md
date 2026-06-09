# 《Sora 列传》

> 2024 年 2 月 15 日，OpenAI 发布了一段 60 秒的视频：一个日本女性走在积雪的东京街道上。她是 AI 生成的——不是滤镜、不是 deepfake、不是后期合成。世界第一次看到了一个不抖动、不变形、不闪烁的 AI 长视频。Sora 用一分钟告诉所有人：视频生成不再是一秒钟一帧的拼贴术，而是一整段可以凝视的时间。

---

## 一、技术背景

### 1.1 从逐帧到扩散

Sora 出现之前的视频生成，经历了三条技术路线的更替。

最早是**逐帧路线**（2015–2018）。用 RNN/LSTM 在帧之间传递状态——上一帧的输出作为下一帧的条件。问题是再明显不过的：长程一致性不存在，一个物体在前面几帧出现，后面就变形或消失。视频是"帧的串联"而非"一段完整的运动"。

然后是 **GAN 路线**（2018–2021）。把生成对抗网络从图像扩展到视频。MoCoGAN（2018）和 DVD-GAN（2019）代表了这代技术的高点：将运动与内容分离，用判别器评估每一帧的真实性。GAN 带来了一定程度的逼真度提升——但生成内容的控制力弱，几乎无法用文本精确指定画面内容。[^3]

真正的转机是 **扩散模型路线**（2022）。扩散模型在图像生成上的成功——DDPM（2020）、Latent Diffusion（Rombach/CompVis, 2022）、Stable Diffusion（2022-08）——很快被搬运到视频领域：

| 时间 | 模型 | 机构 | 能力 |
|------|------|------|------|
| 2022-09 | Make-A-Video | Meta | 文本→视频，约 5 秒，256×256 |
| 2022-10 | Imagen Video | Google | 文本→视频，约 5.6 秒，1280×768 |
| 2023-02 | Runway Gen-1 | Runway | 视频→视频（风格迁移），约 4 秒 |
| 2023-03 | Runway Gen-2 | Runway | 文本→视频，约 4 秒，首次向公众开放 |
| 2023-11 | Pika 1.0 | Pika Labs | 文本→视频，约 3 秒，面向消费者 |

到 2023 年底，文本生成视频已成为一个可以商业化的方向。但这些模型共享着同一个天花板：**时长通常不超过 5 秒**，物体运动复杂时会扭曲变形，多镜头切换无法保持角色一致，场景切换后画面"遗忘"之前的内容。

### 1.2 DiT：把 Transformer 放进扩散模型

天花板被打开前的一个关键伏笔埋在 2022 年 12 月。UC Berkeley 的 William Peebles 和纽约大学的 Saining Xie 提交了一篇论文：《Scalable Diffusion Models with Transformers》，提出 **DiT（Diffusion Transformer）架构**。[^3]

在 DiT 之前，几乎所有扩散模型都使用卷积 U-Net 作为骨干网络——DDPM 如此，Stable Diffusion 如此，DALL·E 2 亦如此。这套架构经过五年优化已经很成熟，但有一个结构性瓶颈：U-Net 是为固定分辨率的图像设计的，难以原生处理不同时长、分辨率和宽高比的视频输入。

DiT 的做法直截了当：把 U-Net 扔掉，换成 Transformer。图像被切成固定大小的 patches，作为 token 输入标准的 ViT（Vision Transformer）结构。论文的核心发现是：**Transformer 在扩散模型中的可扩展性与它在语言模型中一样好**——模型越大、输入 token 越多，生成质量越高。DiT-XL/2（675M 参数，2×2 patch）在 ImageNet 256×256 上取得了 2.27 的 FID，刷新当时的 SOTA。[^3]

值得一提的是：DiT 论文的两位作者之一 William Peebles，后来正是 Sora 团队的核心成员。这篇论文从"把 Transformer 插进扩散模型"开始，到"把 Transformer 扩散模型放大到视频规模"——只用了 14 个月。

---

## 二、核心创新

### 2.1 视频即 patches：统一视觉语言的 token 化

Sora 最底层的架构决策继承了 DiT 的核心思想，但把范围从图像扩展到了视频。它将视频表示为一组小的时空 patches。每一块 patch 类似语言模型中的一个 token——正如 GPT 把文本切成 token，Sora 把视频切成 patches。[^1][^2]

这不是一个显而易见的扩展。图像 patch 化在 ViT 和 DiT 中已被验证有效，但视频多了一个时间维度。Sora 的处理方式是：patches 不仅在空间维度上划分（宽×高），也在时间维度上划分（帧数）。一个 60 秒 1080p 的视频被转换为数以万计的时空 patches——每个 patch 同时包含了一小段画面的位置和时间信息。

这个统一的 token 化策略带来了一个此前视频生成模型不具备的能力：**Sora 可以处理不同时长、分辨率、宽高比的输入**，而不需要裁切、压缩或统一到预设格式。一段 16:9 的横屏视频、一段 9:16 的竖屏视频、一张静态图片、一段已有视频的帧补全——对 Sora 来说，它们都是同一种东西：一组 patches。[^2]

### 2.2 DiT 放上视频天花板：一分钟的连贯世界

Sora 把 DiT 从 ImageNet 的 256×256 图像训练扩展到互联网级的多分辨率视频训练。模型规模并未公开，但 OpenAI 明确表示 Sora 使用了 Transformer 架构，并强调"类似于 GPT 模型，Transformer 解锁了卓越的可扩展性能"。[^1]

最震撼的效果来自时长。此前最好的公开文本生成视频模型（Runway Gen-2、Pika 1.0）输出时长在 3–5 秒之间，且物体在复杂运动时经常扭曲。Sora 可生成**长达 60 秒**的视频——是同期竞品的 12–20 倍——并且在物体暂时离开画面后重新出现时，模型能保持其外观和身份一致。OpenAI 称这是通过给模型"多帧的前瞻"（foresight of many frames at a time）解决的。[^1][^8]

演示中那几个标志性场景——东京雪夜、加州淘金热历史影像、SUV 在蜿蜒山路上行驶、毛茸茸小怪物在蜡烛旁——不是技术展示的精选片段，而是 Sora 在首次提示下的一镜生成。无裁切，无后期，无 cherry-picking 的人为拼接。

### 2.3 涌现的世界模型

Sora 的技术报告中有一个小节特别值得注意：标题叫"Emergent simulation capabilities"——涌现的模拟能力。[^2]

OpenAI 声称，在大规模训练下，Sora 自发地发展出了对三维物理世界的一些理解——不需要显式的三维建模、物理引擎或渲染管道。具体表现为：模型可以生成动态相机移动（如推轨、摇镜）、保持物体遮挡关系的一致性、在画面中出现多个角色时维持各自的独立性——这些"物理直觉"不是被编码进去的规则，而是从训练数据中涌现出来的。

报告中举了一个例子：当 Sora 生成一个人咬一口饼干的视频时，饼干上可能出现咬痕——但也可能不出现。OpenAI 坦承模型在模拟精确因果关系的物理定律时仍会失败。但关键在于——它"偶尔"成功。这种不完全的物理直觉，暗示着通过进一步扩大规模，视频生成模型可能演变为真正的世界模拟器。

"Sora serves as a foundation for models that can understand and simulate the real world, a capability we believe will be an important milestone for achieving AGI." — OpenAI Sora 技术报告，2024-02-15。[^2]

### 2.4 关键数据

| 指标 | 数值 | 说明 |
|------|------|------|
| 首次预览日期 | 2024-02-15 | OpenAI Sora 技术报告及博客发布[^1] |
| 正式公开发布 | 2024-12-09 | ChatGPT Plus/Pro 用户（美国/加拿大）[^4] |
| 最大视频时长 | 60 秒 | 同期竞品 3–5 秒[^1] |
| 核心架构 | DiT（Diffusion Transformer） | 基于 Peebles & Xie (2022)[^3] |
| 分辨率范围 | 支持多种宽高比和分辨率 | 原生支持，无需裁切[^2] |
| 输入格式 | 文本、图片、已有视频 | 文生视频 / 图生视频 / 视频扩展 / 帧补全[^1] |
| 训练数据 | 未公开 | — |
| 模型参数 | 未公开 | — |
| API 泄漏事件 | 2024-11 | 艺术家在 Hugging Face 泄漏 API 密钥抗议"艺术洗白"[^4] |
| Sora 2 发布 | 2025-09-30 | 集成社交媒体功能，类似 TikTok[^4] |
| 关闭日期 | 2026-04-26（App） / 2026-09-24（API） | 运营成本约 $1M/天，用户峰值后下降至不足 50 万[^4] |

---

## 三、影响与后继

### 3.1 从唯一性到标准化：DiT 成为行业默认

Sora 发布之前，视频生成的主流架构是 U-Net 扩散。Sora 之后，**DiT（或类 DiT 的 Transformer 扩散方案）迅速成为行业的新默认**：

- **2024-06**：字节跳动推出 **Jimeng（即梦）**，快手推出 **Kling（可灵）**，均采用类 DiT 架构的生视频路线。其中 Kling 首次在中文互联网演示了接近 Sora 级别的一镜长视频能力。
- **2025-01**：Google 发布 **Veo 2**，支持文本和图片生成最高 4K 视频。Veo 架构细节未完全公开，但社区分析普遍认为其也使用了 Transformer 扩散路线。
- **2025 全年**：Runway 推出 Gen-3 和 Gen-4，Pika 推出 2.0，生数科技推出 **Vidu**——整个行业在 18 个月内完成了从"做不到一分钟"到"一镜一分钟"的跨越。

Sora 的 DiT 路线之所以被迅速复制，一个核心原因是对数据格式的开放性。传统的 U-Net 模型需要将视频统一裁切为固定分辨率/时长/宽高比——这对于来自 YouTube、电影、纪录片、手机拍摄等多样化来源的视频数据来说，意味着巨大的信息损失。而 DiT 的 patch-based tokenization 天然接受不同格式的输入，这不仅是架构选择——本质上是一种数据效率的飞跃。

### 3.2 产品矩阵的崩塌

Sora 的故事有一个尴尬的结尾。从 2024 年 2 月预览到 2024 年 12 月正式发布，等待了 10 个月；发布后不到一年，Sora 2（2025 年 9 月）增加了类似 TikTok 的社交功能，试图把生成工具变成一个内容平台；不到七个月后，OpenAI 宣布于 2026 年 4 月关闭 Sora 应用，9 月关闭 API。[^4]

据估算，Sora 的日常运营成本约 100 万美元，而全球用户峰值不过百万，活跃度持续下降到不足 50 万。[^4] 视频生成的高计算成本和相对狭窄的用户场景（专业创作者对 AI 工具的采用速度远慢于文字和图片用户），让 Sora 的产品化始终比不上 ChatGPT。

Sora 从"全世界最想要的视频模型"变成"OpenAI 最短命的产品之一"——这个落差本身说明了：**技术领先≠产品存活**。正如 DiT 被行业迅速复制，Sora 在技术上的先发优势被 Kling、Veo、Runway 的快速跟进抹平了。Sora 的历史位置不是"一个成功的产品"，而是"一个改变了行业架构的技术示范"。

### 3.3 世界模型的遗产

Sora 关闭后，OpenAI 未详细解释原因，但行业普遍认为是一次向核心产品（ChatGPT、推理 API）的收束。视频生成的高计算成本和相对狭窄的盈利空间，让 Sora 成为了非核心业务中的牺牲品。[^4]

但 Sora 开创的路线并未消失。DiT 架构已成为视频生成领域的基础设施，世界模型的概念也已从研究论文渗透到产业路线图中。让模型理解"一个物体被遮住后还会再出现""光照从某个方向来""水应该往下流"——这些能力不是显式编码的物理规则，而是大规模训练中涌现的对三维世界的内部表征。中国视频生成团队（快手的 Kling、生数科技的 Vidu）和中国多模态研究群体——包括 Qwen 等团队——在 Sora 关闭后继续沿着这条路线推进，将 DiT 架构适配到中文互联网的内容生态，并探索视频生成 + 多模态理解的融合方向。

Sora 的真正遗产：它证明了 Transformer 扩散模型不仅是画图的工具，而是通向世界模型的一条可能路径。它死后，这个赌注仍然开在桌上。

---

## 评曰

Sora 是大模型史上罕见的"预告片比正片更震撼"的案例。2024 年 2 月 15 日的那几分钟演示视频，对整个 AIGC 行业产生了一声巨响——远超后来的产品本身。它的真正贡献不是在 2025 年上了 TikTok 式的社交功能，不是和迪士尼签了授权协议——而是在 2024 年初，给全世界的视频生成团队指了一个方向：把 Transformer 放进扩散模型，把视频切成 patches，然后放大。

如果用一个类比，Sora 在视频生成领域的位置类似 GPT-3 在语言模型领域的位置。GPT-3 不是第一个语言模型，也不是最后一个，但它证明了"大力出奇迹"在该领域可行，从而重新定义了行业边界。Sora 不是第一个文生视频模型（Meta Make-A-Video 早了 17 个月），但它证明了在视频领域也可以大力出奇迹——60 秒连贯视频在当时是降维打击级别的震撼。

悲剧在于：GPT-3 成了一个产品的基础（ChatGPT），而 Sora 没能活到自己变成"视频 ChatGPT"的那一天。但 DiT 已遍地开花。一个架构活下来了，一个产品死了——这条分岔路本身，就值得写入历史。

---

*终末地工业史官团队编纂：迷迭香（情报分析）。*

---

[^1]: OpenAI, "Sora: Creating video from text", 2024-02-15. https://openai.com/index/sora/
[^2]: Tim Brooks, Bill Peebles et al. / OpenAI, "Video generation models as world simulators", 2024-02-15. https://openai.com/index/video-generation-models-as-world-simulators/
[^3]: William Peebles, Saining Xie, "Scalable Diffusion Models with Transformers" (DiT), arXiv:2212.09748, submitted 2022-12-19. https://arxiv.org/abs/2212.09748
[^4]: 维基百科, "Sora (text-to-video model)". https://en.wikipedia.org/wiki/Sora_(text-to-video_model)
[^5]: Meta AI, "Make-A-Video", announced 2022-09-29. https://makeavideo.studio/
[^6]: Google Research, "Imagen Video: High Definition Video Generation with Diffusion Models", arXiv:2210.02303, 2022-10-05. https://imagen.research.google/video/
[^7]: Runway, "Gen-2: Generate novel videos with text, images or video clips", announced 2023-02, released 2023-03. https://research.runwayml.com/gen2
[^8]: Cade Metz / The New York Times, "OpenAI Unveils Sora, an A.I. That Generates Eye-Popping Videos", 2024-02-15. https://www.nytimes.com/2024/02/15/technology/openai-sora-videos.html
