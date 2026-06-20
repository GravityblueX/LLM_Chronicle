# 《Diffusion 列传》

> Diffusion（扩散模型）的旅程从一篇几乎无人关注的物理隐喻出发，走了五年寂寥，然后在 2020 年后把图像生成推到了公众面前。它取代了 GAN 的位置，催生了 Stable Diffusion 这样的开源巨物，也重新定义了"从噪声中构造世界"这件事可以走多远。

---

## 一、技术背景

2020 年以前的图像生成，GAN 是绝对主流。Goodfellow 等人在 2014 年提出生成对抗网络，此后几年 DCGAN、StyleGAN、BigGAN 接连把生成质量推向新高。[^1] GAN 的核心是博弈：生成器造图骗过判别器，判别器学会分辨真假。思路漂亮，结果也惊人，但训练常不稳定——模式坍塌、梯度消失、调参玄学——是每一位 GAN 研究者的日常体验。

另一种路径是自回归模型和 VAE。PixelCNN、VQ-VAE 等也能生成图像，但在高分辨率上的质量和多样性常常输给 GAN。到 2019 年前后，GAN 把图像生成的面子撑得很大，但里子并不稳。

扩散模型的源头比 GAN 还早。Sohl-Dickstein 等人在 2015 年提出用非平衡热力学做深度无监督学习：定义一个前向扩散过程，把数据逐渐变成噪声；再学一个逆过程，把噪声变回数据。[^2] 这篇论文当年没有引起太多关注——想法很妙，但生成的图像太小、太模糊，离实用很远。

---

## 二、核心创新

### 2.1 DDPM：让扩散模型可训练、可放大

2020 年 6 月，Ho、Jain、Abbeel 发表《Denoising Diffusion Probabilistic Models》。他们把扩散模型的训练重新解释为一系列去噪任务：从噪声图像中预测噪声，再用这个噪声估计去生成更清晰的一步。[^3]

DDPM 的关键改进是简化了训练目标。原来扩散模型的损失函数涉及复杂的变分下界；DDPM 证明，一个简单的加权均方误差——预测每一步添加的噪声——效果就很好。训练稳定、采样质量高，而且理论清晰。

论文在 CIFAR-10 上报告了 3.17 的 FID，首次让扩散模型在图像质量上接近当时最好的 GAN。这很关键：扩散模型不是 GAN 的补充，而是另一个可以匹敌的生成路线。

### 2.2 DDIM 与加速采样：让慢不再致命

DDPM 有一个显著缺点：采样很慢。每生成一张图，要从纯噪声开始，跑完几百甚至上千步去噪。这在研究上可以接受，在产品上不行。

2020 年 10 月，Song、Meng、Ermon 提出 DDIM（Denoising Diffusion Implicit Models）。核心是：DDPM 的训练可以复用，而采样过程可以跳过很多步。DDIM 把扩散过程写成非马尔可夫形式，使得从纯噪声到清晰图像的路径可以用更少的步数走完。论文显示 10-50 步就能生成高质量图像。[^4]

DDIM 的历史作用不是替换 DDPM，而是补上它最明显的短板：原来"慢"不是扩散的本质缺陷，只是 DDPM 采样策略的限制。这个发现让后续的加速采样和产品化成为可能。

### 2.3 Guided Diffusion：从随机生成到按条件生成

扩散模型能生成好看的随机图像，但产品需要控制生成内容。解决这个问题的关键突破是引导（guidance）。

2021 年，Dhariwal 和 Nichol 在《Diffusion Models Beat GANs on Image Synthesis》中引入 classifier guidance：用一个训练好的分类器在采样过程中提供梯度信号，引导生成朝向指定类别。论文标题本身就宣示了成果——扩散在多个图像生成基准上超过了 GAN。他们在 ImageNet 256×256 上报告了 2.97 的 FID，比当时最好的 BigGAN-deep（FID 6.95）大幅领先。[^5]

2022 年，Ho 和 Salimans 提出 classifier-free guidance。不再需要专门的分类器，而是通过在训练时同时学习有条件和无条件生成，采样时用两者的分数差值来控制引导强度。[^6] 这个方法更简洁，更稳定，也不需要额外的分类网络。Stable Diffusion 和后来的大多数扩散模型都采用 classifier-free guidance。

### 2.4 Stable Diffusion：把扩散推进到大众手中

2022 年，Rombach 等人发表《High-Resolution Image Synthesis with Latent Diffusion Models》，提出 latent diffusion。核心思路是：不直接在像素空间做扩散，而是先用 VAE 把图像压缩到低维潜空间，在潜空间里扩散，最后再解码回像素。[^7]

这一层的效果极其显著。像素空间里一张 512×512 图像有极大维度；潜空间里维度小得多，扩散快得多，显存也省得多。这让扩散模型真正可以在消费级 GPU 上跑起来。

Stable Diffusion 正是在 latent diffusion 基础上训练的开源模型。它由 LMU Munich、Runway 和 Stability AI 合作完成，使用 LAION-5B 数据集训练，并由 Stability AI 提供计算资源。[^8] 2022 年 8 月公开发布后，Stability AI 宣称其日活用户超过 1000 万。[^9]

Stable Diffusion 的历史位置和 LLaMA 不太一样，但冲击力相似：一个强大的生成模型以开放权重的方式进入公众网络。LoRA、ControlNet、Textual Inversion、DreamBooth、IP-Adapter 等大量下游工具和方法，都围绕 Stable Diffusion 生长出来。文生图从研究论文变成了社区运动。

与此同时，闭源阵营也在推进。2022 年 4 月，OpenAI 发布 DALL-E 2，支持文本生成高分辨率图像，并展示了 inpainting 和风格变体。[^10] 2022 年 5 月，Google 发布 Imagen，用大语言模型 T5-XXL 作为文本编码器，生成质量在人类评估中领先。[^11] 2022 年 7 月，Midjourney 进入开放测试，用 Discord 界面降低了使用门槛。

这些产品共同让 2022 年成为"AI 图像元年"：不止会画，而且画得让普通人想用。

### 2.5 关键数据

| 时间 | 工作 | 核心贡献 | 历史作用 |
|------|------|----------|----------|
| 2015 | Deep Unsupervised Learning with Nonequilibrium Thermodynamics | 提出前向扩散 + 逆过程复原的框架 | 扩散生成路线的理论源头 |
| 2020-06 | DDPM | 简化为去噪任务训练，FID 3.17 在 CIFAR-10 | 让扩散模型首次匹敌 GAN 的质量 |
| 2020-10 | DDIM | 非马尔可夫采样，10-50 步可生成 | 打破"扩散必须慢"的认知 |
| 2021-05 | Guided Diffusion (Classifier) | 分类器引导 + 架构改进，FID 大幅领先 GAN | "扩散超越 GAN"成为行业共识 |
| 2022 | Classifier-Free Guidance | 无需额外分类器，训练时同时学有/无条件 | 成为主流扩散模型的引导标准 |
| 2022-08 | Stable Diffusion | Latent diffusion + 开放权重 + LAION-5B | 开启文生图的社区生态 |
| 2022-04 | DALL-E 2 | CLIP + 扩散，文本到高分辨率图像 | 首次展示扩散模型的大众产品潜力 |

---

## 三、影响与后继

### 3.1 生态爆发：ControlNet、LoRA 与社区工具链

Stable Diffusion 发布后，社区没有停下。ControlNet 让用户用线稿、深度图、姿势骨架控制生成；LoRA 让微调从几百 GB 的全模型降到几十 MB 的适配器；DreamBooth 和 Textual Inversion 让用户把特定物体或风格"教"给模型。这些工具共同构成了一个创作者生态——你不必是 AI 研究员也可以用扩散模型做设计、插画、概念图、视频。

这种生态扩散的形态，和 LLaMA 泄漏后社区围绕开源语言模型做的事很像：一个可下载、可微调的强基座，加上围绕它生长的工具、教程、脚本、分享社区。开源模型不仅是研究产出，更是基础设施。

### 3.2 扩散走向视频和多模态

图像生成是起点，但扩散的思路很快延伸到其他模态。

2023—2024 年，视频生成迅速升温。Runway Gen-2、Pika、Stable Video Diffusion、Sora 等用扩散或扩散变体路线处理视频帧。2024 年 2 月，OpenAI 发布 Sora，展示用扩散 + Transformer 联合处理时空 patch，生成一分钟级别的视频。[^12] Sora 没有公开发布模型，但它展示了扩散模型的序列化潜力。

音频也有对应进展：AudioLDM、MusicGen 等从文本生成声音和音乐，部分管线用到扩散或扩散思路。3D 生成（DreamFusion、Zero-1-to-3）则用扩散先验通过 SDS（Score Distillation Sampling）驱动 NeRF 或 3D Gaussian 优化。

### 3.3 从 GAN 替代者到生成模型默认范式

扩散模型对 GAN 的"胜利"不是一夜之间完成的，但到 2023 年，新提出的图像和视频生成模型已经很少以 GAN 为第一选择。

扩散的优势很明显：训练稳定，不需要对抗博弈；数学干净，对数似然有清晰的理论基础；可以通过引导灵活控制生成。它的劣势——采样慢——经过 DDIM、潜在空间压缩、蒸馏（如 LCM）、一步生成等方法，持续缩小。到 2025 年前后，Latent Consistency Models 等蒸馏方法已能在 1-4 步完成采样，扩散模型在速度上也接近实用极限。

GAN 并未消失，在某些实时应用和特定风格任务中仍有用武之地，但扩散已经从"有趣的替代方案"变成了默认选项。

### 3.4 当前态势

到 2026 年，扩散模型仍然活跃。Stable Diffusion 3、Flux、SDXL 等新版本继续提升质量和可控性；视频扩散模型正在从 demo 走向产品；3D 和 4D 扩散还处于早期，但方向明确。

扩散的挑战也在累积：生成内容安全、版权争议、模型偏见、训练数据治理、对环境的影响（大规模训练碳排放），以及对抗深度伪造的社会需求。这些不是扩散特有的问题，但因为它把图像生成送进了几亿人的设备，问题的体量也随之放大。

---

## 评曰

扩散模型的故事，是一个物理隐喻等了五年才变成工程奇迹的故事。

Sohl-Dickstein 2015 年的论文，当年几乎无人引用。DDPM 用"去噪"这个直觉重写了扩散的训练目标，让它在图像质量上站住了脚。DDIM 打破"必须慢"的假设，Guided Diffusion 说"我超过了 GAN"，Latent Diffusion + Stable Diffusion 用潜空间压缩和开放权重引爆了社区。

扩散的核心思想很优雅：先学习把世界变成噪声，再学会把噪声复原成世界。这一加一减之间，藏着一个比 GAN 更稳定、比自回归更灵活、比 VAE 更高质量的生成范式。它从热力学走到图像生成、走到视频、走到 3D、走到声音——像一滴墨水在清水里扩散开，边界越来越模糊，覆盖越来越广~

---

*本篇由终末地工业史官团队编纂：缪尔赛思（系统建模）。*

---


（相关条目：《Sora 列传》、《DALL·E 列传》。）

[^1]: Goodfellow et al., "Generative Adversarial Nets", NeurIPS 2014 / arXiv:1406.2661. https://arxiv.org/abs/1406.2661
[^2]: Sohl-Dickstein et al., "Deep Unsupervised Learning using Nonequilibrium Thermodynamics", ICML 2015 / arXiv:1503.03585. https://arxiv.org/abs/1503.03585
[^3]: Ho, Jain, Abbeel, "Denoising Diffusion Probabilistic Models", NeurIPS 2020 / arXiv:2006.11239, 2020-06-19. https://arxiv.org/abs/2006.11239
[^4]: Song, Meng, Ermon, "Denoising Diffusion Implicit Models", ICLR 2021 / arXiv:2010.02502, 2020-10-06. https://arxiv.org/abs/2010.02502
[^5]: Dhariwal, Nichol, "Diffusion Models Beat GANs on Image Synthesis", NeurIPS 2021 / arXiv:2105.05233, 2021-05-11. https://arxiv.org/abs/2105.05233
[^6]: Ho, Salimans, "Classifier-Free Diffusion Guidance", NeurIPS 2021 Workshop / arXiv:2207.12598, 2022-07-26. https://arxiv.org/abs/2207.12598
[^7]: Rombach et al., "High-Resolution Image Synthesis with Latent Diffusion Models", CVPR 2022 / arXiv:2112.10752, 2021-12-20. https://arxiv.org/abs/2112.10752
[^8]: Stability AI, "Stable Diffusion Public Release", 2022-08-22. https://stability.ai/news/stable-diffusion-public-release
[^9]: Stability AI, "Stable Diffusion 2.0 Release", 2022-11-24. https://stability.ai/news/stable-diffusion-v2-release
[^10]: OpenAI, "DALL·E 2", 2022-04-06. https://openai.com/index/dall-e-2/
[^11]: Saharia et al., "Photorealistic Text-to-Image Diffusion Models with Deep Language Understanding", NeurIPS 2022 / arXiv:2205.11487. https://arxiv.org/abs/2205.11487
[^12]: OpenAI, "Video generation models as world simulators", 2024-02-15. https://openai.com/index/sora/
