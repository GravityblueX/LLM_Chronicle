# 《Stable Diffusion 列传》

> Stable Diffusion（2022-08）是 AI 图像生成领域的"Linux 时刻"。它把文生图从 DALL·E 2 的 API 黑箱和 Midjourney 的 Discord 围墙里拽了出来，放到了每个人都能跑的消费级 GPU 上。一个开源权重、一张 4GB 显卡、一个社区——这三个要素叠加在一起，催生了 AI 绘画元年、LoRA 微调社区、ControlNet、Civitai，以及整个开源图像生成生态。Stable Diffusion 不是最好的文生图模型，但它是最重要的一张——因为它把画笔递到了每个人手里。

---

## 一、技术背景

2022 年上半年，AI 图像生成领域正在经历一次集体跃迁。

2022 年 4 月，OpenAI 发布 DALL·E 2，用 CLIP + 扩散模型的架构实现了文本到高分辨率图像的生成。[^1] 同年 5 月，Google 发布 Imagen，用大语言模型 T5-XXL 作为文本编码器，在人类评估中领先。[^2] 7 月，Midjourney 进入开放测试，用 Discord 界面降低了使用门槛。[^3]

这三者的共同特征是**闭源**。DALL·E 2 有候补名单，Imagen 未公开，Midjourney 按月收费。用户只能通过 API 或平台界面使用，无法下载模型、无法本地运行、无法二次开发。文生图的能力被锁在几家公司的服务器里。

技术底层的变化发生在 2021 年底。Rombach 等人在 2021 年 12 月发表《High-Resolution Image Synthesis with Latent Diffusion Models》，提出 Latent Diffusion Model（LDM）：不直接在像素空间做扩散，而是先用 VAE 把图像压缩到低维潜空间，在潜空间里扩散，最后再解码回像素。[^4] 这篇论文由慕尼黑大学（LMU Munich）的 CompVis 实验室和 Runway 合作完成，Robin Rombach 是第一作者。

LDM 的效果极其显著。像素空间里一张 512×512 图像的维度极高，扩散过程需要大量计算；潜空间里维度小得多，扩散快得多，显存也省得多。这让扩散模型真正可以在消费级 GPU 上跑起来。

论文发表时，这只是又一篇优秀的 CVPR 论文。真正的引爆点要等到 2022 年 8 月。

---

## 二、核心事件

### 2.1 发布（2022-08-22）：开源文生图的"寒武纪大爆发"

**2022 年 8 月 22 日**，Stability AI 正式发布 Stable Diffusion（SD），一个基于 LDM 的开源文生图模型。[^5]

Stability AI 是一家成立于 2020 年的英国公司，创始人 Emad Mostaque。公司在发布 SD 之前并不广为人知——它的主要业务是为各类 AI 研究提供算力支持。SD 的研发由 CompVis 实验室的 Robin Rombach 等人主导，Stability AI 提供计算资源，在 LAION-5B 数据集上训练。[^5]

SD 的核心创新不在算法——LDM 架构由 CompVis 此前发表于 CVPR 2022。[^4] 它的创新在于**工程与生态**：将扩散模型从论文中的概念变为一张 4GB 显卡能跑起来的工具。同时采用宽松的开源许可（CreativeML Open RAIL-M），允许商用与二次开发。

与 DALL·E 2 和 Midjourney 的对比鲜明：[^1][^3][^5]

| 特征 | DALL·E 2 | Midjourney | Stable Diffusion |
|------|----------|------------|------------------|
| 发布时间 | 2022-04 | 2022-07 | 2022-08 |
| 开放方式 | API 候补名单 | Discord 订阅 | 完全开源 |
| 本地运行 | 不可 | 不可 | 可（4GB 显存起） |
| 二次开发 | 不可 | 不可 | 完全开放 |
| 许可证 | 专有 | 专有 | CreativeML Open RAIL-M |

SD 的发布引爆了社区。Reddit r/StableDiffusion 社区在发布一年内突破 25 万成员。[^6] B 站、小红书上的 AI 绘画教程和挑战如雨后春笋。"AI 绘画"从少数研究者的新奇玩具，变成了一个大众动词。

### 2.2 版本迭代

SD 的版本迭代记录了一条从"能用"到"好用"再到"争议中前行"的路线：[^7]

| 版本 | 时间 | 关键变化 |
|------|------|----------|
| SD 1.4 / 1.5 | 2022-08 / 10 | 首批广泛使用的版本，512×512 分辨率。催生了最早的 LoRA / Civitai 生态 |
| SD 2.0 / 2.1 | 2022-11 | 提升至 768×768，但移除了大量 NSFW 和名人数据，社区抵触强烈 |
| SDXL 1.0 | 2023-07 | 1024×1024 原生分辨率，双文本编码器，显著提升构图与细节 |
| SD3 | 2024-02 — 06 | 架构转向 DiT（Diffusion Transformer，MMDiT），对标 Sora 技术路线。但 Medium 版本因许可争议和人体结构缺陷引发社区不满 |
| FLUX.1 | 2024-08 | 前 Stability AI 核心团队（Robin Rombach 等）出走创立 Black Forest Labs，发布 FLUX.1，DiT 架构 + 流匹配，被视为 SD3 路线的真正继承者 |

SD 2.0 的争议是一个值得记录的教训。Stability AI 为回应安全顾虑，移除了训练数据中的大量 NSFW 和名人图像。技术上这降低了模型的风险面，但社区的反应是强烈的不满——用户觉得"你把一个能力更强的模型阉割了"。这个矛盾贯穿了整个 SD 历史：开源模型的使用者希望能力最大化，而提供者需要承担社会责任。

### 2.3 Stability AI 的兴衰

Stability AI 的命运与 SD 紧密交织，但并不等同。

公司 CEO Emad Mostaque 在 SD 发布后成为 AI 行业的明星人物。Stability AI 在 2022 年 10 月完成 1.01 亿美元融资，估值达 10 亿美元。[^8] 但此后公司陷入了财务和管理困境。2024 年 3 月，Mostaque 辞职。核心研发团队——包括 Robin Rombach 本人——出走创立 Black Forest Labs，发布 FLUX.1 系列。[^7] 2024 年底，Stability AI 被收购。

但 SD 的生态已经独立于 Stability AI 继续繁荣。LoRA、ControlNet、WebUI、Civitai——这些工具和社区不依赖 Stability AI 的公司实体。FLUX.1、SD3.5 等后续模型接续了开源文生图的路线。Stability AI 创造了一个远大于自身的生态，然后被这个生态超越。

---

## 三、技术核心：Latent Diffusion Model

### 3.1 在潜空间里扩散

Latent Diffusion Model 的核心思路很简单：**不在像素空间做扩散，在潜空间做**。

一个 512×512 的 RGB 图像有 786,432 个像素值。在这个空间里做扩散，每一步去噪都需要处理海量维度——显存和算力都是瓶颈。LDM 先用一个预训练的 VAE 把图像压缩到 64×64 的潜空间（压缩比约 48:1），在潜空间里做扩散，最后再解码回像素。[^4]

这层压缩的效果极其显著。维度从 786K 降到约 4K，扩散步骤从数百步压缩到几十步（配合 DDIM 采样），显存需求从十几 GB 降到 4GB 以下。这让扩散模型从"需要 A100 集群"变成了"一张 GTX 1660 就能跑"。

### 3.2 CLIP 文本编码器与 Classifier-Free Guidance

SD 使用 CLIP 的文本编码器（ViT-L/14）作为条件信号。[^4] 用户输入的文字 prompt 经过 CLIP 编码后，变成一个语义向量，在扩散的每一步引导去噪方向。这与 DALL·E 2 的方案类似——CLIP 负责"理解"文本的语义，扩散模型负责"画出"匹配的图像（详见《CLIP 列传》《DALL·E 列传》）。

SD 同时采用 classifier-free guidance（无分类器引导）。[^9] 训练时同时学习有条件和无条件生成，采样时用两者的分数差值来控制引导强度（CFG scale）。这个参数成了 SD 社区最重要的调参旋钮之一——CFG 越高，生成结果越"贴合"prompt，但多样性越低；CFG 越低，生成越随机但可能偏离 prompt。

### 3.3 训练数据：LAION-5B

SD 在 LAION-5B 数据集上训练——一个包含 58.5 亿图文对的开源数据集，从 Common Crawl 中提取。[^10] LAION-5B 的规模和开放性是 SD 能力的基础，但也带来了争议：数据集中包含受版权保护的图像、不当内容、以及个人隐私信息。这些争议在 SD 发布后迅速浮现，并在 2023-2024 年演变为多起法律诉讼。

---

## 四、影响与后继

### 4.1 LoRA 与微调社区

SD 发布后，社区最重要的创新之一是将 LoRA（Low-Rank Adaptation）引入图像生成领域。[^11] LoRA 微调只需几十张图片和消费级 GPU，就能训练出专属风格或角色模型——文件大小从几 GB 的全模型降到几十 MB 的适配器。

Civitai 成为 LoRA 模型的主要分享平台，迄今已有数十万个公开 LoRA 模型。[^12] 用户可以在平台上下载各种风格的 LoRA——油画风格、动漫风格、特定艺术家风格、特定角色——然后组合使用。这种"基座模型 + 无限 LoRA"的模式，创造了一种前所未有的创作灵活性。

### 4.2 ControlNet：从"抽卡"到"可控创作"

2023 年 2 月，张吕敏（Lvmin Zhang）发布 ControlNet，为 SD 提供了精确的空间控制能力——姿态、线稿、深度图、边缘检测。[^13]

在 ControlNet 之前，SD 的使用体验像"抽卡"：输入 prompt，生成一张图，不满意就再来一次，结果基本靠运气。ControlNet 让用户可以用线稿指定构图、用姿势骨架指定人物动作、用深度图指定空间关系。AI 绘图从"碰运气"变成了"可控创作"。

ControlNet 的影响深远。它证明了开源模型的真正优势不在于单个模型的性能，而在于**插件生态**。闭源模型（DALL·E 2、Midjourney）的功能由平台决定；开源模型的功能由社区决定。SD + ControlNet + LoRA 的组合，至今仍是闭源模型难以复制的灵活性壁垒。

### 4.3 工具链与社区基础设施

SD 的开源催生了一个完整的工具链：[^6]

- **AUTOMATIC1111 WebUI**：最流行的 SD 使用界面，将命令行操作封装为图形界面，大幅降低使用门槛。
- **ComfyUI**：基于节点的 SD 工作流编辑器，面向进阶用户，支持复杂的生成管线。
- **Civitai**：模型分享平台，用户可以上传、下载、评价 LoRA 和 Checkpoint 模型。
- **HuggingFace**：模型托管平台，SD 的官方模型和大量社区变体在此托管。

这些工具共同构成了一个生态——你不必是 AI 研究员也可以用扩散模型做设计、插画、概念图、视频。开源模型不仅是研究产出，更是基础设施。

### 4.4 与 Midjourney 的分野

SD 和 Midjourney 形成了文生图领域的两极：[^3][^5]

- **SD** 走民主化路线——开源、可控、低成本、需动手能力。任何人可以下载、修改、微调、商用。
- **Midjourney** 走产品化路线——闭源、易用、高质量、按需付费。用户付钱，平台交付美学品质。

两者并非竞争关系——它们服务于不同的用户群。SD 的用户是创作者和开发者，他们需要控制力和灵活性；Midjourney 的用户是普通用户和设计师，他们需要易用性和美学品质。这两条路线共同定义了 2022 年之后的 AI 图像生成格局。

### 4.5 衰落与被吸收

Stability AI 作为公司的衰落，与 SD 作为生态的繁荣形成了反差。2024 年核心团队出走后，Stability AI 已不再是开源文生图的领导者。但 SD 的思想——潜空间扩散、开源权重、社区生态——已经被后续模型继承。FLUX.1、SD3.5、以及大量社区驱动的模型，都在延续 SD 开辟的路线。

到 2025-2026 年，文生图领域的技术前沿已经转向 Diffusion Transformer（DiT）架构——用 Transformer 替代 U-Net 作为去噪网络。Sora、FLUX.1、SD3 都采用了这条路线。但这些新模型的使用方式、社区结构、工具链，仍然建立在 SD 奠定的基础上。

---

## 评曰

Stable Diffusion 的核心贡献是**把文生图从特权变成了基础设施**。

在 SD 之前，文生图是几家公司的 API 黑箱——你只能用，不能看、不能改、不能跑在自己的机器上。在 SD 之后，文生图是每个人电脑里的画笔——你可以下载、修改、微调、组合、商用。这个转变的冲击力，不亚于 Linux 对操作系统市场、Android 对移动市场的冲击。

它之所以重要，不是因为它是最好的模型——DALL·E 2 和 Midjourney 在发布时的生成质量都不逊于 SD 1.5。它重要是因为它**开源了**。开源不是一个技术决策——是一个生态决策。它让 LoRA、ControlNet、Civitai、ComfyUI 得以生长；它让"AI 原生创作者"——不从传统画师起步、直接用 AI 思维创作的一代人——得以诞生。

从更大的技术脉络看，SD 是"文生图四部曲"（Diffusion → CLIP → DALL·E → Stable Diffusion）的终章。扩散模型提供了生成框架，CLIP 提供了语义理解，DALL·E 验证了产品可行性，而 SD 把这一切交给了全世界。四部曲的每一环都不可或缺——但只有最后一环改变了世界的形状。

---

*本篇由终末地工业史官团队编纂：赫默（列传主笔）。*

---

[^1]: Ramesh et al., "Hierarchical Text-Conditional Image Generation with CLIP Latents", arXiv:2204.06125, 2022-04-06. https://arxiv.org/abs/2204.06125
[^2]: Saharia et al., "Photorealistic Text-to-Image Diffusion Models with Deep Language Understanding", NeurIPS 2022 / arXiv:2205.11487. https://arxiv.org/abs/2205.11487
[^3]: Midjourney 官方文档. https://docs.midjourney.com/
[^4]: Rombach et al., "High-Resolution Image Synthesis with Latent Diffusion Models", CVPR 2022 / arXiv:2112.10752, 2021-12-20. https://arxiv.org/abs/2112.10752
[^5]: Stability AI, "Stable Diffusion Public Release", 2022-08-22. https://stability.ai/news/stable-diffusion-public-release
[^6]: Reddit r/StableDiffusion 社区，截至 2023 年 8 月成员数超 25 万。参见《编年·2022年8月》。
[^7]: Stable Diffusion 版本迭代信息综合自 Stability AI 官方博客及维基百科。FLUX.1 发布：Black Forest Labs, 2024-08-01. https://blackforestlabs.ai/
[^8]: Stability AI 融资信息。TechCrunch, "Stability AI raises $101M for open-source AI", 2022-10-17.
[^9]: Ho, Salimans, "Classifier-Free Diffusion Guidance", NeurIPS 2021 Workshop / arXiv:2207.12598, 2022-07-26. https://arxiv.org/abs/2207.12598
[^10]: Schuhmann et al., "LAION-5B: An Open Large-Scale Dataset for Training Next Generation Image-Text Models", NeurIPS 2022 / arXiv:2210.08402. https://arxiv.org/abs/2210.08402
[^11]: Hu et al., "LoRA: Low-Rank Adaptation of Large Language Models", ICLR 2022 / arXiv:2106.09685. https://arxiv.org/abs/2106.09685
[^12]: Civitai 平台. https://civitai.com/
[^13]: Zhang, "Adding Conditional Control to Text-to-Image Diffusion Models", arXiv:2302.05543, 2023-02-10. https://arxiv.org/abs/2302.05543
