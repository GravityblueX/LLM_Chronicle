# The Biography of Diffusion

> The journey of Diffusion (diffusion models) began from a physics metaphor that almost no one noticed, traversed five lonely years, and then after 2020 thrust image generation into the public eye. It supplanted GANs, gave rise to open-source titans like Stable Diffusion, and redefined how far "constructing a world from noise" can go.

---

## I. Technical Background

Before 2020, GANs were the undisputed mainstream of image generation. Goodfellow et al. proposed Generative Adversarial Networks in 2014, and in the years that followed, DCGAN, StyleGAN, and BigGAN pushed generation quality to new heights.[^1] The core of GANs is a game: the generator creates images to fool the discriminator, and the discriminator learns to distinguish real from fake. The idea is elegant, the results stunning, but training is often unstable — mode collapse, vanishing gradients, and the black art of hyperparameter tuning are the daily experience of every GAN researcher.

Another path was autoregressive models and VAEs. PixelCNN, VQ-VAE, and others could also generate images, but in terms of quality and diversity at high resolution, they often lost to GANs. By around 2019, GANs had inflated the facade of image generation considerably, but the foundation was not solid.

The origins of diffusion models predate GANs even further. In 2015, Sohl-Dickstein et al. proposed using nonequilibrium thermodynamics for deep unsupervised learning: define a forward diffusion process that gradually transforms data into noise, then learn a reverse process that transforms noise back into data.[^2] This paper attracted little attention at the time — the idea was elegant, but the generated images were too small and too blurry to be practical.

---

## II. Core Innovation

### 2.1 DDPM: making diffusion models trainable and scalable

In June 2020, Ho, Jain, and Abbeel published "Denoising Diffusion Probabilistic Models." They reframed diffusion model training as a series of denoising tasks: predict the noise from a noisy image, then use that noise estimate to produce a cleaner step.[^3]

DDPM's key improvement was simplifying the training objective. The original diffusion model's loss function involved a complex variational lower bound; DDPM showed that a simple weighted mean squared error — predicting the noise added at each step — worked remarkably well. Training was stable, sampling quality was high, and the theory was clean.

The paper reported an FID of 3.17 on CIFAR-10, the first time a diffusion model approached the quality of the best GANs on image quality. This was critical: diffusion models were not a supplement to GANs — they were a rival generative trajectory.

### 2.2 DDIM and accelerated sampling: making slowness non-fatal

DDPM had a notable weakness: sampling was slow. Every image had to be generated starting from pure noise, running through hundreds or even thousands of denoising steps. This was acceptable for research but not for products.

In October 2020, Song, Meng, and Ermon proposed DDIM (Denoising Diffusion Implicit Models). The key insight: DDPM's training can be reused, while the sampling process can skip many steps. DDIM rewrote the diffusion process in a non-Markovian form, allowing the path from pure noise to a clear image to be traversed in far fewer steps. The paper showed that 10–50 steps could produce high-quality images.[^4]

DDIM's historical role was not to replace DDPM but to address its most glaring weakness: "slowness" was not an inherent defect of diffusion, merely a limitation of DDPM's sampling strategy. This discovery enabled subsequent acceleration methods and productization.

### 2.3 Guided diffusion: from random generation to conditional generation

Diffusion models could generate beautiful random images, but products needed control over what was generated. The key breakthrough to solve this problem was guidance.

In 2021, Dhariwal and Nichol, in "Diffusion Models Beat GANs on Image Synthesis," introduced classifier guidance: using a trained classifier to provide gradient signals during the sampling process, steering generation toward a specified class. The paper's title itself proclaimed the result — diffusion surpassed GANs on multiple image generation benchmarks. They reported an FID of 2.97 on ImageNet 256×256, a dramatic lead over the best GAN at the time, BigGAN-deep (FID 6.95).[^5]

In 2022, Ho and Salimans proposed classifier-free guidance. No separate classifier was needed; instead, both conditional and unconditional generation were learned jointly during training, and the difference between the two scores was used during sampling to control guidance strength.[^6] This method was simpler, more stable, and required no additional classifier network. Stable Diffusion and most subsequent diffusion models adopted classifier-free guidance.

### 2.4 Stable Diffusion: bringing diffusion to the masses

In 2022, Rombach et al. published "High-Resolution Image Synthesis with Latent Diffusion Models," proposing latent diffusion. The core idea: rather than performing diffusion directly in pixel space, first compress the image into a low-dimensional latent space using a VAE, perform diffusion in the latent space, and then decode back to pixels.[^7]

The effect of this compression layer was dramatic. A 512×512 image in pixel space has enormous dimensionality; in latent space, dimensionality is much smaller, diffusion is much faster, and VRAM consumption is far lower. This made diffusion models genuinely runnable on consumer-grade GPUs.

Stable Diffusion was an open-source model trained on the basis of latent diffusion. It was a collaboration between LMU Munich, Runway, and Stability AI, trained on the LAION-5B dataset with computational resources provided by Stability AI.[^8] After its public release in August 2022, Stability AI claimed daily active users exceeding 10 million.[^9]

Stable Diffusion's historical position is different from that of LLaMA, but the impact is similar: a powerful generative model entering the public sphere with open weights. LoRA, ControlNet, Textual Inversion, DreamBooth, IP-Adapter, and a vast array of downstream tools and methods all grew around Stable Diffusion. Text-to-image transformed from a research paper into a community movement.

Meanwhile, the closed-source camp was advancing as well. In April 2022, OpenAI released DALL-E 2, supporting text-to-high-resolution-image generation and demonstrating inpainting and style variations.[^10] In May 2022, Google released Imagen, using the large language model T5-XXL as the text encoder, leading in human evaluation quality.[^11] In July 2022, Midjourney entered open beta, lowering the usage barrier through its Discord interface.

Together, these products made 2022 the "Year of AI Images": not only could AI draw, but it drew well enough that ordinary people wanted to use it.

### 2.5 Key data

| Date | Work | Core contribution | Historical role |
|------|------|-------------------|-----------------|
| 2015 | Deep Unsupervised Learning with Nonequilibrium Thermodynamics | Proposed the forward diffusion + reverse restoration framework | Theoretical origin of the diffusion generation trajectory |
| 2020-06 | DDPM | Simplified to denoising-task training, FID 3.17 on CIFAR-10 | First time diffusion models matched GAN quality |
| 2020-10 | DDIM | Non-Markovian sampling, 10–50 steps for generation | Shattered the assumption that "diffusion must be slow" |
| 2021-05 | Guided Diffusion (Classifier) | Classifier guidance + architectural improvements, FID far exceeding GANs | "Diffusion surpasses GANs" became industry consensus |
| 2022 | Classifier-Free Guidance | No external classifier needed; jointly learns conditional and unconditional | Became the guidance standard for mainstream diffusion models |
| 2022-08 | Stable Diffusion | Latent diffusion + open weights + LAION-5B | Opened the community ecosystem of text-to-image |
| 2022-04 | DALL-E 2 | CLIP + diffusion, text to high-resolution image | First demonstrated the mass-market potential of diffusion models |

---

## III. Impact and Successors

### 3.1 Ecosystem explosion: ControlNet, LoRA, and the community toolchain

After Stable Diffusion's release, the community did not stop. ControlNet allowed users to control generation with line art, depth maps, and skeletal poses; LoRA reduced fine-tuning from hundreds of GB for a full model to a few dozen MB for an adapter; DreamBooth and Textual Inversion allowed users to "teach" specific objects or styles to the model. Together, these tools formed a creator ecosystem — you no longer needed to be an AI researcher to use diffusion models for design, illustration, concept art, or video.

This pattern of ecosystem proliferation closely resembled what happened around open-source language models after LLaMA's leak: a downloadable, fine-tunable strong base model, surrounded by tools, tutorials, scripts, and sharing communities that grew up around it. Open-source models are not merely research outputs; they are infrastructure.

### 3.2 Diffusion extends to video and multimodal

Image generation was the starting point, but the idea of diffusion quickly extended to other modalities.

From 2023 to 2024, video generation rapidly heated up. Runway Gen-2, Pika, Stable Video Diffusion, Sora, and others used diffusion or diffusion-variant approaches to process video frames. In February 2024, OpenAI released Sora, demonstrating the use of diffusion + Transformer to jointly process spatiotemporal patches and generate minute-long videos.[^12] Sora did not publicly release its model, but it demonstrated the serialization potential of diffusion models.

Audio saw corresponding progress: AudioLDM, MusicGen, and others generated sound and music from text, with some pipelines employing diffusion or diffusion-inspired ideas. 3D generation (DreamFusion, Zero-1-to-3) used diffusion priors to drive NeRF or 3D Gaussian optimization via SDS (Score Distillation Sampling).

### 3.3 From GAN replacement to default paradigm for generative models

The "victory" of diffusion models over GANs did not happen overnight, but by 2023, newly proposed image and video generation models rarely chose GANs as their first option.

Diffusion's advantages are clear: stable training without adversarial games; clean mathematics with a clear theoretical foundation for log-likelihood; and flexible control over generation through guidance. Its disadvantage — slow sampling — has been continuously reduced through DDIM, latent-space compression, distillation (such as LCM), and one-step generation methods. By around 2025, Latent Consistency Models and similar distillation approaches could complete sampling in 1–4 steps, bringing diffusion models close to practical speed limits.

GANs have not disappeared — they remain useful in certain real-time applications and style-specific tasks — but diffusion has transformed from "an interesting alternative" to the default option.

### 3.4 Current landscape

By 2026, diffusion models remain active. Stable Diffusion 3, Flux, SDXL, and other new versions continue to improve quality and controllability; video diffusion models are transitioning from demos to products; 3D and 4D diffusion are still in their early stages, but the direction is clear.

Diffusion's challenges are also accumulating: content safety, copyright disputes, model bias, training data governance, environmental impact (carbon emissions from large-scale training), and societal demand for combating deepfakes. These are not problems unique to diffusion, but because diffusion has delivered image generation to the devices of hundreds of millions of people, the scale of these problems has grown accordingly.

---

## Commentary

The story of diffusion models is the story of a physics metaphor that waited five years before becoming an engineering miracle.

Sohl-Dickstein's 2015 paper was barely cited when it appeared. DDPM rewrote the diffusion training objective with the intuition of "denoising," giving it a firm foothold in image quality. DDIM shattered the "must be slow" assumption. Guided Diffusion declared "I have surpassed GANs." Latent Diffusion + Stable Diffusion ignited the community with latent-space compression and open weights.

The core idea of diffusion is elegant: first learn to turn the world into noise, then learn to restore noise into the world. Within this addition and subtraction lies a generative paradigm more stable than GANs, more flexible than autoregressive models, and higher quality than VAEs. It traveled from thermodynamics to image generation, to video, to 3D, to sound — like a drop of ink diffusing in clear water, its boundaries growing ever more blurred, its reach ever wider~

---

*This entry was compiled by the Endfield Industrial History Team: Mizuusei (Systems Modeling).*

---

(Related entries: *The Biography of Sora*, *The Biography of DALL·E*.)

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
