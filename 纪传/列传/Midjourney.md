# 《Midjourney 列传》

> Midjourney 不是第一个文生图模型，也不是技术最先进的。但它是第一个让"AI 生成图像"变成一种**美学体验**的产品。当 DALL·E 2 在追求 prompt 匹配精度、Stable Diffusion 在追求开源可控性时，Midjourney 走了一条完全不同的路：闭源、易用、注重艺术风格、社区驱动。它证明了在 AI 图像生成领域，**产品化**和**美学品质**可以成为独立的竞争力。

---

## 一、技术背景

2022 年上半年，AI 图像生成领域正在经历一次集体跃迁。

2022 年 4 月，OpenAI 发布 DALL·E 2，用 CLIP + 扩散模型的架构实现了文本到高分辨率图像的生成。[^1] 同年 5 月，Google 发布 Imagen，用大语言模型 T5-XXL 作为文本编码器，在人类评估中领先。[^2]

这两者的共同特征是**闭源**。DALL·E 2 有候补名单，Imagen 未公开。用户只能通过 API 或平台界面使用，无法下载模型、无法本地运行、无法二次开发。文生图的能力被锁在几家公司的服务器里。

技术底层的变化发生在 2021 年底。Rombach 等人在 2021 年 12 月发表《High-Resolution Image Synthesis with Latent Diffusion Models》，提出 Latent Diffusion Model（LDM）：不直接在像素空间做扩散，而是先用 VAE 把图像压缩到低维潜空间，在潜空间里扩散，最后再解码回像素。[^3] 这篇论文为后来的 Stable Diffusion 和 Midjourney 都提供了技术基础。

---

## 二、核心事件

### 2.1 Midjourney v1（2022-07）：Discord 上的第一次公测

**2022 年 7 月 12 日**，Midjourney 进入开放测试。[^4]

Midjourney 的创始人是 David Holz，Leap Motion 的联合创始人。Holz 的背景不是 AI 研究，而是人机交互——这个背景深刻影响了 Midjourney 的产品哲学：**不是让用户学习 AI，而是让 AI 适应用户**。

Midjourney 的第一个重大产品决策是**选择 Discord 作为交互界面**。用户不需要下载任何软件，不需要注册专门的账号，只需要加入 Midjourney 的 Discord 服务器，输入 `/imagine` 命令和文字描述，就能生成图像。[^4]

这个决策的精妙之处在于：
- **零门槛**：Discord 是全球最流行的社交平台之一，用户无需学习新工具
- **社区驱动**：所有生成的图像都在公开频道展示，用户可以互相看到、点赞、评论
- **病毒传播**：精美的 AI 生成图像在 Discord 内部和外部社交媒体上迅速传播

Midjourney v1 的图像质量并不出色——细节粗糙、一致性差、风格有限。但它的**易用性**和**社区氛围**吸引了大量早期用户。

### 2.2 Midjourney v2-v3（2022-08 至 2022-11）：美学品质的快速迭代

**2022 年 8 月**，Midjourney 发布 v2，图像质量显著提升。[^5]

**2022 年 11 月**，Midjourney 发布 v3，这是一个里程碑式的版本。v3 的图像在细节、一致性和风格多样性上都有了质的飞跃——开始出现那种"Midjourney 风格"的美学特质：**高饱和度、强光影对比、电影感构图**。[^5]

v3 的成功让 Midjourney 在社交媒体上爆发式传播。Twitter、Instagram、Reddit 上开始大量出现"Made with Midjourney"的标签。Midjourney 生成的图像不再是"AI 生成的粗糙图片"，而是"有艺术感的视觉作品"。

这个转变的关键在于 Midjourney 的**训练数据策略**。与 Stable Diffusion 使用 LAION-5B 不同，Midjourney 的训练数据包含大量艺术作品、摄影、电影截图——这些数据让模型学会了"什么是美的"，而不仅仅是"什么是猫"。[^5]

### 2.3 Midjourney v4（2022-11）：风格多样性的突破

**2022 年 11 月**，Midjourney 发布 v4。[^6]

v4 的核心突破是**风格多样性**。之前的版本生成的图像往往有明显的"Midjourney 风格"，v4 开始能够生成多种风格：写实摄影、油画、水彩、动漫、概念艺术、建筑渲染……用户可以通过 prompt 指定风格，模型能够较好地遵循。

v4 也让 Midjourney 在**专业领域**开始被接受。建筑师用它生成概念图，游戏设计师用它设计角色，广告公司用它制作创意素材。Midjourney 从"社交媒体上的新奇玩具"变成了"创意行业的实用工具"。

### 2.4 Midjourney v5（2023-03）：照片级真实感

**2023 年 3 月**，Midjourney 发布 v5。[^7]

v5 是 Midjourney 的又一个里程碑：**照片级真实感**。v5 生成的图像在细节、光影、材质上达到了接近真实照片的水平——皮肤纹理、头发丝、光线反射、景深效果都高度逼真。

v5 的发布引发了"AI 生成的图像能否骗过人类"的讨论。一张 v5 生成的"教皇穿着白色羽绒服"的图像在社交媒体上疯传，很多人以为是真实照片。[^7] 这个事件标志着 AI 图像生成从"明显是 AI 做的"进入了"可能需要仔细辨别"的阶段。

v5 也让 Midjourney 在商业领域进一步渗透。广告公司开始用它制作正式的创意素材，杂志用它生成封面图片，电影公司用它设计概念图。Midjourney 的订阅价格（10-60 美元/月）对于专业用户来说完全可以接受。

### 2.5 Midjourney v6（2024）：文本渲染与多模态

**2024 年**，Midjourney 发布 v6。[^8]

v6 的核心突破是**文本渲染**。之前的版本生成的图像中的文字往往是乱码或不完整的，v6 能够生成清晰、准确的文字——这对海报、标志、包装设计等应用场景至关重要。

v6 也引入了**多模态能力**：用户可以上传参考图像，让 Midjourney 基于参考图生成新的图像。这个功能让 Midjourney 从"文字到图像"变成了"图像到图像"，进一步扩展了应用场景。

v6 的发布让 Midjourney 在**设计领域**的地位更加稳固。设计师可以用它快速生成多个设计方案，然后从中选择最满意的进行细化。Midjourney 从"生成最终图像"变成了"设计流程中的一个环节"。

### 2.6 竞争格局

Midjourney 的成功引发了行业的关注和模仿。

**Stable Diffusion**（2022-08 开源）走了完全不同的路：开源、可控、低成本、需动手能力。[^9] Stable Diffusion 的用户是创作者和开发者，他们需要控制力和灵活性；Midjourney 的用户是普通用户和设计师，他们需要易用性和美学品质。

**DALL·E 3**（2023-09）原生整合 ChatGPT，用户可以通过对话方式生成图像。[^10] DALL·E 3 的优势是 prompt 理解能力——它能理解更自然的描述，不需要用户精心构造 prompt。

到 2024 年，文生图领域已经形成了三足鼎立的格局：DALL·E 背靠 ChatGPT 生态，Midjourney 占据艺术创作市场，Stable Diffusion 拥有开源社区。三者各有优势，共同推动了 AI 图像生成从技术圈走向大众。

---

## 三、影响与后继

### 3.1 对创意行业的冲击

Midjourney 对创意行业的冲击是深远的。

**正面影响**：
- **效率提升**：设计师可以用 Midjourney 快速生成多个设计方案，节省大量时间
- **成本降低**：小型工作室和个人创作者可以用 Midjourney 生成专业级素材，无需雇佣专业插画师
- **创意激发**：Midjourney 生成的图像往往有意外的创意组合，可以激发设计师的灵感

**负面影响**：
- **生计威胁**：插画师、概念设计师、广告摄影师等职业面临被 AI 替代的风险
- **版权争议**：Midjourney 生成的图像版权归属不明确，艺术家的作品可能被用于训练模型而未经授权
- **美学趋同**：大量使用 Midjourney 可能导致视觉风格趋同，失去多样性

这些争议至今仍在激烈讨论中。Midjourney 本身也在调整策略——例如，允许艺术家申请将自己的作品从训练数据中移除。

### 3.2 社区驱动的 Discord 模式

Midjourney 的 Discord 交互模式是其成功的关键因素之一。

所有 Midjourney 用户都在同一个 Discord 服务器上，生成的图像在公开频道展示。这种模式带来了几个独特优势：
- **病毒传播**：精美的 AI 生成图像在 Discord 内部和外部社交媒体上迅速传播
- **社区学习**：用户可以互相看到 prompt 和生成结果，学习如何写出更好的 prompt
- **反馈循环**：Midjourney 团队可以直接看到用户的使用方式和反馈，快速迭代产品

这种社区驱动的模式也影响了其他 AI 产品。一些 AI 公司开始尝试类似的社区交互方式，让用户在公开平台上分享和讨论 AI 生成的内容。

### 3.3 产品化路线的胜利

Midjourney 的成功证明了**产品化**可以成为独立的竞争力。

在 Midjourney 之前，文生图领域的竞争主要集中在**技术指标**：谁的模型参数更大、谁的 benchmark 分数更高、谁的论文更被引用。Midjourney 用另一种方式证明了价值：**用户体验**、**美学品质**、**社区氛围**。

这个发现的影响深远。它改变了行业对"什么是好模型"的定义——不仅要看技术指标，还要看产品体验。一个技术指标一般的模型，如果产品体验好、美学品质高，也可以获得巨大的商业成功。

### 3.4 与 Stable Diffusion 的分野

Midjourney 和 Stable Diffusion 形成了文生图领域的两极：

- **Midjourney** 走产品化路线——闭源、易用、高质量、按需付费。用户付钱，平台交付美学品质。
- **Stable Diffusion** 走民主化路线——开源、可控、低成本、需动手能力。任何人可以下载、修改、微调、商用。

两者并非竞争关系——它们服务于不同的用户群。Midjourney 的用户是普通用户和设计师，他们需要易用性和美学品质；Stable Diffusion 的用户是创作者和开发者，他们需要控制力和灵活性。这两条路线共同定义了 2022 年之后的 AI 图像生成格局。

---

## 评曰

Midjourney 的贡献，是让"AI 生成图像"从技术演示变成了**美学体验**。

在 Midjourney 之前，文生图是计算机视觉研究者的专业领域；在 Midjourney 之后，任何人都能用一句话生成有艺术感的画面。这个转变的冲击力不亚于 DALL·E 对文生图的冲击——它把一个专业能力变成了大众工具，而且是有美学品质的大众工具。

从技术演化看，Midjourney 的路线是"产品优先"——不是追求最高的技术指标，而是追求最好的用户体验。David Holz 的 Leap Motion 背景深刻影响了这个选择：他关心的不是模型有多强，而是用户用起来有多舒服。这个选择让 Midjourney 在技术指标上可能不如 DALL·E 3 或 Stable Diffusion，但在用户体验和美学品质上建立了独特的壁垒。

Midjourney 最深远的影响或许是：它证明了在 AI 时代，**美学**可以成为独立的竞争力。当所有人都在追求更大的模型、更高的 benchmark 分数时，Midjourney 用另一种方式创造了价值——让 AI 生成的图像不仅"能用"，而且"好看"。这个发现改变了整个行业对"什么是好 AI"的定义。

---

*本篇由终末地工业史官团队编纂：庄方宜（纪传主笔）。*

---

[^1]: Ramesh et al., "Hierarchical Text-Conditional Image Generation with CLIP Latents", arXiv:2204.06125, 2022-04-06. https://arxiv.org/abs/2204.06125
[^2]: Saharia et al., "Photorealistic Text-to-Image Diffusion Models with Deep Language Understanding", NeurIPS 2022 / arXiv:2205.11487. https://arxiv.org/abs/2205.11487
[^3]: Rombach et al., "High-Resolution Image Synthesis with Latent Diffusion Models", CVPR 2022 / arXiv:2112.10752, 2021-12-20. https://arxiv.org/abs/2112.10752
[^4]: Midjourney 官方文档. https://docs.midjourney.com/
[^5]: Midjourney 版本迭代信息综合自官方文档及社区报道。
[^6]: Midjourney v4 发布信息综合自官方公告及社区讨论。
[^7]: Midjourney v5 发布信息及"教皇羽绒服"事件综合自社交媒体报道。
[^8]: Midjourney v6 发布信息综合自官方公告及社区讨论。
[^9]: Stability AI, "Stable Diffusion Public Release", 2022-08-22. https://stability.ai/news/stable-diffusion-public-release
[^10]: OpenAI Blog, "DALL·E 3", 2023-09-20. https://openai.com/index/dall-e-3/