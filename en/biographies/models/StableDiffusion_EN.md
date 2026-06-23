# The Biography of Stable Diffusion

> Stable Diffusion (2022-08) was the "Linux moment" of AI image generation. It pulled text-to-image creation out of DALL·E 2's API black box and Midjourney's Discord walled garden, and placed it onto consumer-grade GPUs that anyone could run. An open-source weight file, a 4 GB graphics card, and a community — these three elements combined to give birth to the year of AI painting, the LoRA fine-tuning community, ControlNet, Civitai, and the entire open-source image generation ecosystem. Stable Diffusion is not the best text-to-image model, but it is the most important one — because it put the paintbrush into everyone's hands.

---

## I. Technical Background

In the first half of 2022, the field of AI image generation was undergoing a collective leap.

In April 2022, OpenAI released DALL·E 2, achieving text-to-high-resolution-image generation using a CLIP + diffusion model architecture.[^1] In May, Google released Imagen, using the large language model T5-XXL as the text encoder, leading in human evaluations.[^2] In July, Midjourney entered open beta, lowering the usage barrier through a Discord interface.[^3]

What all three shared in common was that they were **closed-source**. DALL·E 2 had a waitlist, Imagen was not publicly available, and Midjourney charged a monthly subscription. Users could only access these tools through APIs or platform interfaces — they could not download models, run them locally, or develop on top of them. The capability of text-to-image generation was locked inside the servers of a few companies.

The foundational technical shift occurred at the end of 2021. In December 2021, Rombach et al. published "High-Resolution Image Synthesis with Latent Diffusion Models," proposing the Latent Diffusion Model (LDM): rather than performing diffusion directly in pixel space, first compress the image into a low-dimensional latent space using a VAE, perform diffusion in the latent space, and then decode back to pixels.[^4] This paper was a collaboration between the CompVis laboratory at LMU Munich and Runway, with Robin Rombach as the first author.

The effect of LDM was dramatic. A 512×512 image in pixel space has extremely high dimensionality, and the diffusion process requires massive computation; in latent space the dimensionality is much smaller, diffusion is much faster, and memory consumption is far lower. This made diffusion models genuinely runnable on consumer-grade GPUs.

When the paper was published, it was simply another excellent CVPR paper. The real detonation point would have to wait until August 2022.

---

## II. Core Events

### 2.1 Release (2022-08-22): The "Cambrian explosion" of open-source text-to-image

**August 22, 2022** — Stability AI officially released Stable Diffusion (SD), an open-source text-to-image model based on LDM.[^5]

Stability AI is a British company founded in 2020 by Emad Mostaque. Before the release of SD, the company was not widely known — its primary business was providing computational resources for various AI research projects. SD's development was led by Robin Rombach and others from the CompVis laboratory, with Stability AI providing computational resources and training on the LAION-5B dataset.[^5]

SD's core innovation was not in algorithms — the LDM architecture had already been published by CompVis at CVPR 2022.[^4] Its innovation lay in **engineering and ecosystem**: turning the diffusion model from a concept in a paper into a tool that could run on a 4 GB graphics card. It also adopted a permissive open-source license (CreativeML Open RAIL-M) that allowed commercial use and further development.

The contrast with DALL·E 2 and Midjourney was stark:[^1][^3][^5]

| Feature | DALL·E 2 | Midjourney | Stable Diffusion |
|---------|----------|------------|------------------|
| Release date | 2022-04 | 2022-07 | 2022-08 |
| Access model | API waitlist | Discord subscription | Fully open-source |
| Local execution | No | No | Yes (4 GB VRAM minimum) |
| Custom development | No | No | Fully open |
| License | Proprietary | Proprietary | CreativeML Open RAIL-M |

SD's release ignited the community. The Reddit r/StableDiffusion community surpassed 250,000 members within a year of release.[^6] AI painting tutorials and challenges sprouted like mushrooms on Bilibili and Xiaohongshu. "AI painting" transformed from a novelty toy for a handful of researchers into a mainstream verb.

### 2.2 Version history

SD's version history traces a path from "usable" to "polished" to "advancing amid controversy":[^7]

| Version | Date | Key changes |
|---------|------|-------------|
| SD 1.4 / 1.5 | 2022-08 / 10 | First widely used versions, 512×512 resolution. Spawned the earliest LoRA / Civitai ecosystem |
| SD 2.0 / 2.1 | 2022-11 | Upgraded to 768×768, but removed large amounts of NSFW and celebrity data; strong community backlash |
| SDXL 1.0 | 2023-07 | 1024×1024 native resolution, dual text encoders, significant improvements in composition and detail |
| SD3 | 2024-02 — 06 | Architecture shifted to DiT (Diffusion Transformer, MMDiT), aligning with Sora's technical direction. But the Medium version drew community complaints over licensing controversy and anatomical defects |
| FLUX.1 | 2024-08 | Former Stability AI core team (Robin Rombach et al.) departed to found Black Forest Labs and released FLUX.1 — DiT architecture + flow matching, regarded as the true successor to the SD3 lineage |

The SD 2.0 controversy is a lesson worth recording. In response to safety concerns, Stability AI removed large quantities of NSFW and celebrity images from the training data. Technically this reduced the model's risk surface, but the community's reaction was intense backlash — users felt that "a more capable model had been censored." This tension runs throughout SD's history: open-source model users want maximum capability, while providers must bear social responsibility.

### 2.3 The rise and fall of Stability AI

Stability AI's fate is deeply intertwined with SD, but not identical to it.

CEO Emad Mostaque became a star figure in the AI industry after SD's release. Stability AI raised $101 million in October 2022, reaching a valuation of $1 billion.[^8] But the company subsequently fell into financial and management difficulties. In March 2024, Mostaque resigned. The core R&D team — including Robin Rombach himself — departed to found Black Forest Labs and released the FLUX.1 series.[^7] By the end of 2024, Stability AI had been acquired.

But SD's ecosystem had already flourished independently of Stability AI. LoRA, ControlNet, WebUI, Civitai — these tools and communities do not depend on Stability AI's corporate entity. FLUX.1, SD3.5, and other successor models continued the open-source text-to-image lineage. Stability AI created an ecosystem far larger than itself, and was then surpassed by that very ecosystem.

---

## III. Technical Core: Latent Diffusion Model

### 3.1 Diffusion in latent space

The core idea of the Latent Diffusion Model is simple: **don't do diffusion in pixel space; do it in latent space**.

A 512×512 RGB image has 786,432 pixel values. Performing diffusion in this space means that every denoising step must process a massive number of dimensions — both VRAM and compute are bottlenecks. LDM first uses a pretrained VAE to compress the image into a 64×64 latent space (a compression ratio of approximately 48:1), performs diffusion in the latent space, and then decodes back to pixels.[^4]

The effect of this compression layer is dramatic. Dimensionality drops from 786K to roughly 4K; diffusion steps compress from hundreds to tens (with DDIM sampling); and VRAM requirements drop from over ten GB to under 4 GB. This took diffusion models from "requiring an A100 cluster" to "runnable on a single GTX 1660."

### 3.2 CLIP text encoder and classifier-free guidance

SD uses CLIP's text encoder (ViT-L/14) as the conditioning signal.[^4] The user's text prompt is encoded by CLIP into a semantic vector, which guides the denoising direction at every step of the diffusion process. This is similar to DALL·E 2's approach — CLIP handles "understanding" the text semantics, while the diffusion model handles "painting" the matching image (see *The Biography of CLIP* and *The Biography of DALL·E*).

SD also employs classifier-free guidance.[^9] During training, the model simultaneously learns both conditional and unconditional generation; during sampling, the difference between the two scores is used to control the guidance strength (CFG scale). This parameter became one of the most important tuning knobs in the SD community — higher CFG means the output adheres more closely to the prompt but with reduced diversity; lower CFG means more randomness but possible deviation from the prompt.

### 3.3 Training data: LAION-5B

SD was trained on the LAION-5B dataset — an open-source dataset containing 5.85 billion image-text pairs extracted from Common Crawl.[^10] The scale and openness of LAION-5B were the foundation of SD's capabilities, but also brought controversy: the dataset contained copyrighted images, inappropriate content, and personal privacy information. These controversies surfaced quickly after SD's release and escalated into multiple lawsuits in 2023–2024.

---

## IV. Impact and Successors

### 4.1 LoRA and the fine-tuning community

One of the community's most important innovations after SD's release was bringing LoRA (Low-Rank Adaptation) into the image generation domain.[^11] LoRA fine-tuning requires only a few dozen images and a consumer-grade GPU to train a custom style or character model — reducing file sizes from the multi-GB full model to a few dozen MB for the adapter.

Civitai became the primary platform for sharing LoRA models, with hundreds of thousands of publicly available LoRA models to date.[^12] Users can download LoRAs of various styles — oil painting, anime, specific artist styles, specific characters — and combine them. This "base model + infinite LoRAs" pattern created an unprecedented degree of creative flexibility.

### 4.2 ControlNet: from "gacha" to "controllable creation"

In February 2023, Lvmin Zhang released ControlNet, providing SD with precise spatial control capabilities — pose, line art, depth maps, and edge detection.[^13]

Before ControlNet, using SD felt like playing "gacha": input a prompt, generate an image, and if unsatisfied, try again — results were essentially left to chance. ControlNet allowed users to specify composition with line art, specify character poses with skeletal structures, and specify spatial relationships with depth maps. AI painting went from "hoping for the best" to "controllable creation."

ControlNet's impact was profound. It demonstrated that the true advantage of open-source models lies not in the performance of a single model, but in the **plugin ecosystem**. The features of closed-source models (DALL·E 2, Midjourney) are determined by the platform; the features of open-source models are determined by the community. The combination of SD + ControlNet + LoRA remains a flexibility moat that closed-source models have yet to replicate.

### 4.3 Toolchain and community infrastructure

SD's open-source release spawned a complete toolchain:[^6]

- **AUTOMATIC1111 WebUI**: The most popular SD interface, wrapping command-line operations into a graphical interface and dramatically lowering the usage barrier.
- **ComfyUI**: A node-based SD workflow editor targeting advanced users, supporting complex generation pipelines.
- **Civitai**: A model-sharing platform where users can upload, download, and rate LoRA and checkpoint models.
- **Hugging Face**: A model-hosting platform where SD's official models and a vast array of community variants are hosted.

Together, these tools formed an ecosystem — you no longer needed to be an AI researcher to use diffusion models for design, illustration, concept art, or video. Open-source models are not merely research outputs; they are infrastructure.

### 4.4 The divergence with Midjourney

SD and Midjourney formed two poles in the text-to-image field:[^3][^5]

- **SD** took the democratization route — open-source, controllable, low-cost, requiring hands-on ability. Anyone can download, modify, fine-tune, and use it commercially.
- **Midjourney** took the productization route — closed-source, easy to use, high quality, pay-per-use. Users pay; the platform delivers aesthetic quality.

The two are not in direct competition — they serve different user bases. SD's users are creators and developers who need control and flexibility; Midjourney's users are ordinary consumers and designers who need ease of use and aesthetic quality. Together, these two paths defined the landscape of AI image generation after 2022.

### 4.5 Decline and absorption

The decline of Stability AI as a company contrasted sharply with the flourishing of SD as an ecosystem. After the core team's departure in 2024, Stability AI was no longer the leader in open-source text-to-image generation. But SD's ideas — latent-space diffusion, open-source weights, community ecosystem — have been inherited by successor models. FLUX.1, SD3.5, and numerous community-driven models continue the path that SD blazed.

By 2025–2026, the technological frontier in text-to-image had shifted to the Diffusion Transformer (DiT) architecture — using Transformers to replace U-Net as the denoising network. Sora, FLUX.1, and SD3 all adopted this direction. But the usage patterns, community structures, and toolchains of these new models remain built upon the foundation that SD laid.

---

## Commentary

Stable Diffusion's core contribution was **turning text-to-image generation from a privilege into infrastructure**.

Before SD, text-to-image was a few companies' API black boxes — you could use them, but you could not inspect, modify, or run them on your own machines. After SD, text-to-image became a paintbrush inside everyone's computer — you could download, modify, fine-tune, combine, and use it commercially. The impact of this transformation was no less than that of Linux on the operating system market or Android on the mobile market.

It matters not because it was the best model — DALL·E 2 and Midjourney were both at least as good as SD 1.5 at the time of their respective releases. It matters because **it was open-sourced**. Open-sourcing was not a technical decision — it was an ecosystem decision. It enabled LoRA, ControlNet, Civitai, and ComfyUI to grow; it allowed the birth of "AI-native creators" — a generation who did not start from traditional artistry but thought in AI-first terms.

From the broader technological narrative, SD is the final chapter of the "text-to-image tetralogy" (Diffusion → CLIP → DALL·E → Stable Diffusion). Diffusion models provided the generative framework; CLIP provided semantic understanding; DALL·E validated product viability; and SD delivered it all to the world. Every link in this tetralogy was indispensable — but only the last one changed the shape of the world.

---

*This entry was compiled by the Endfield Industrial History Team: Silence (Lead Biographer).*

---

[^1]: Ramesh et al., "Hierarchical Text-Conditional Image Generation with CLIP Latents", arXiv:2204.06125, 2022-04-06. https://arxiv.org/abs/2204.06125
[^2]: Saharia et al., "Photorealistic Text-to-Image Diffusion Models with Deep Language Understanding", NeurIPS 2022 / arXiv:2205.11487. https://arxiv.org/abs/2205.11487
[^3]: Midjourney Official Documentation. https://docs.midjourney.com/
[^4]: Rombach et al., "High-Resolution Image Synthesis with Latent Diffusion Models", CVPR 2022 / arXiv:2112.10752, 2021-12-20. https://arxiv.org/abs/2112.10752
[^5]: Stability AI, "Stable Diffusion Public Release", 2022-08-22. https://stability.ai/news/stable-diffusion-public-release
[^6]: Reddit r/StableDiffusion community; membership exceeded 250,000 by August 2023. See *Chronicle · August 2022*.
[^7]: Stable Diffusion version history synthesized from Stability AI's official blog and Wikipedia. FLUX.1 release: Black Forest Labs, 2024-08-01. https://blackforestlabs.ai/
[^8]: Stability AI funding information. TechCrunch, "Stability AI raises $101M for open-source AI", 2022-10-17.
[^9]: Ho, Salimans, "Classifier-Free Diffusion Guidance", NeurIPS 2021 Workshop / arXiv:2207.12598, 2022-07-26. https://arxiv.org/abs/2207.12598
[^10]: Schuhmann et al., "LAION-5B: An Open Large-Scale Dataset for Training Next Generation Image-Text Models", NeurIPS 2022 / arXiv:2210.08402. https://arxiv.org/abs/2210.08402
[^11]: Hu et al., "LoRA: Low-Rank Adaptation of Large Language Models", ICLR 2022 / arXiv:2106.09685. https://arxiv.org/abs/2106.09685
[^12]: Civitai platform. https://civitai.com/
[^13]: Zhang, "Adding Conditional Control to Text-to-Image Diffusion Models", arXiv:2302.05543, 2023-02-10. https://arxiv.org/abs/2302.05543
