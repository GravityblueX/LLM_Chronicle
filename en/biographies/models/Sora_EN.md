# The Biography of Sora

> On February 15, 2024, OpenAI released a 60-second video: a Japanese woman walking through snow-covered Tokyo streets. She was AI-generated — not a filter, not a deepfake, not post-production compositing. The world saw for the first time an AI-generated long-form video that did not shake, warp, or flicker. Sora used one minute to tell everyone: video generation was no longer a one-second-at-a-time collage technique, but a stretch of time one could gaze upon in its entirety.

---

## I. Technical Background

### 1.1 From frame-by-frame to diffusion

Before Sora, video generation had undergone three successive technical trajectories.

The earliest was the **frame-by-frame approach** (2015–2018). RNN/LSTM was used to pass state between frames — the output of one frame serving as the condition for the next. The problem was obvious: long-range consistency was nonexistent; an object appearing in the first few frames would distort or vanish in later ones. Video was "a concatenation of frames" rather than "a complete piece of motion."

Next came the **GAN approach** (2018–2021). Generative adversarial networks were extended from images to video. MoCoGAN (2018) and DVD-GAN (2019) represented the high-water mark of this generation: separating motion from content, using a discriminator to evaluate the realism of each frame. GANs brought a degree of improvement in photorealism — but control over generated content was weak, and it was nearly impossible to precisely specify visual content via text.[^3]

The real turning point was the **diffusion model approach** (2022). The success of diffusion models in image generation — DDPM (2020), Latent Diffusion (Rombach/CompVis, 2022), Stable Diffusion (2022-08) — was quickly transferred to the video domain:

| Date | Model | Organization | Capability |
|------|-------|-------------|------------|
| 2022-09 | Make-A-Video | Meta | Text→video, ~5 seconds, 256×256 |
| 2022-10 | Imagen Video | Google | Text→video, ~5.6 seconds, 1280×768 |
| 2023-02 | Runway Gen-1 | Runway | Video→video (style transfer), ~4 seconds |
| 2023-03 | Runway Gen-2 | Runway | Text→video, ~4 seconds, first to open to the public |
| 2023-11 | Pika 1.0 | Pika Labs | Text→video, ~3 seconds, consumer-facing |

By the end of 2023, text-to-video had become a commercially viable direction. But all these models shared the same ceiling: **duration typically did not exceed 5 seconds**, objects distorted during complex motion, multi-shot transitions could not maintain character consistency, and scenes "forgot" previous content after transitions.

### 1.2 DiT: putting Transformers into diffusion models

A critical foreshadowing of the ceiling being broken was planted in December 2022. William Peebles of UC Berkeley and Saining Xie of New York University submitted a paper: "Scalable Diffusion Models with Transformers," proposing the **DiT (Diffusion Transformer) architecture**.[^3]

Before DiT, virtually all diffusion models used convolutional U-Nets as their backbone network — DDPM, Stable Diffusion, and DALL·E 2 alike. This architecture had matured over five years of optimization but had a structural bottleneck: U-Net was designed for fixed-resolution images and could not natively handle video inputs of varying duration, resolution, and aspect ratio.

DiT's approach was straightforward: throw out the U-net, replace it with a Transformer. Images are cut into fixed-size patches, which serve as tokens fed into a standard ViT (Vision Transformer) structure. The paper's core finding: **the scalability of Transformers in diffusion models is as good as in language models** — the larger the model and the more input tokens, the higher the generation quality. DiT-XL/2 (675M parameters, 2×2 patches) achieved an FID of 2.27 on ImageNet 256×256, setting a new state-of-the-art at the time.[^3]

It is worth noting that one of the paper's two authors, William Peebles, later became a core member of the Sora team. This paper's trajectory — from "plugging Transformers into diffusion models" to "scaling Transformer diffusion models to video scale" — took only 14 months.

---

## II. Core Innovation

### 2.1 Video as patches: unified tokenization of visual language

Sora's most fundamental architectural decision inherits DiT's core idea but extends the scope from images to video. It represents video as a set of small spatiotemporal patches. Each patch is analogous to a token in a language model — just as GPT cuts text into tokens, Sora cuts video into patches.[^1][^2]

This was not an obvious extension. Image patching had already been validated in ViT and DiT, but video adds a temporal dimension. Sora's approach: patches are segmented not only along spatial dimensions (width × height) but also along the temporal dimension (frame count). A 60-second 1080p video is converted into tens of thousands of spatiotemporal patches — each patch containing both the spatial position and temporal information of a small segment of the scene.

This unified tokenization strategy brought a capability that previous video generation models did not possess: **Sora can process inputs of varying duration, resolution, and aspect ratio** without cropping, compressing, or unifying them to a preset format. A 16:9 landscape video, a 9:16 portrait video, a static image, frame completion of an existing video — to Sora, they are all the same thing: a set of patches.[^2]

### 2.2 DiT scaled to the video ceiling: one minute of coherent world

Sora scaled DiT from ImageNet's 256×256 image training to internet-scale multi-resolution video training. The model scale has not been disclosed, but OpenAI explicitly stated that Sora uses a Transformer architecture and emphasized that "similar to GPT models, Transformers unlock remarkable scaling performance."[^1]

The most stunning effect was in duration. Previously, the best publicly available text-to-video models (Runway Gen-2, Pika 1.0) produced outputs of 3–5 seconds, with frequent distortion during complex motion. Sora could generate videos **up to 60 seconds** — 12–20 times longer than its contemporaries — and when objects temporarily left the frame and reappeared, the model maintained their appearance and identity. OpenAI attributed this to giving the model "foresight of many frames at a time."[^1][^8]

The iconic scenes in the demo — the snowy Tokyo night, the California Gold Rush historical footage, an SUV on a winding mountain road, a fluffy little monster by candlelight — were not cherry-picked highlights but single-take generations from Sora on the first prompt. No cropping, no post-processing, no cherry-picked stitching.

### 2.3 Emergent world model

One section of Sora's technical report deserves particular attention: titled "Emergent simulation capabilities."[^2]

OpenAI claimed that at scale, Sora spontaneously developed some understanding of the three-dimensional physical world — without explicit 3D modeling, physics engines, or rendering pipelines. Specifically, the model could generate dynamic camera movements (such as tracking shots and pan shots), maintain consistency in object occlusion relationships, and preserve the independence of multiple characters in a scene — these "physical intuitions" were not encoded rules but emerged from the training data.

The report offered an example: when Sora generates a video of a person biting a cookie, bite marks might appear on the cookie — or they might not. OpenAI acknowledged that the model still fails when simulating the precise causal relationships of physical laws. But the key point — it "occasionally" succeeds. This incomplete physical intuition suggests that with further scaling, video generation models may evolve into genuine world simulators.

"Sora serves as a foundation for models that can understand and simulate the real world, a capability we believe will be an important milestone for achieving AGI." — OpenAI Sora Technical Report, 2024-02-15.[^2]

### 2.4 Key data

| Metric | Value | Notes |
|--------|-------|-------|
| First preview date | 2024-02-15 | OpenAI Sora technical report and blog post[^1] |
| Official public release | 2024-12-09 | ChatGPT Plus/Pro users (US/Canada)[^4] |
| Maximum video duration | 60 seconds | Contemporary competitors: 3–5 seconds[^1] |
| Core architecture | DiT (Diffusion Transformer) | Based on Peebles & Xie (2022)[^3] |
| Resolution range | Supports multiple aspect ratios and resolutions | Native support, no cropping required[^2] |
| Input formats | Text, images, existing video | Text-to-video / image-to-video / video extension / frame completion[^1] |
| Training data | Not disclosed | — |
| Model parameters | Not disclosed | — |
| API leak incident | 2024-11 | Artists leaked API keys on Hugging Face to protest "art washing"[^4] |
| Sora 2 release | 2025-09-30 | Integrated social media features, similar to TikTok[^4] |
| Shutdown date | 2026-04-26 (App) / 2026-09-24 (API) | Operating cost ~$1M/day; user peak declined to under 500K[^4] |

---

## III. Impact and Successors

### 3.1 From uniqueness to standardization: DiT becomes the industry default

Before Sora's release, the dominant architecture for video generation was U-Net diffusion. After Sora, **DiT (or DiT-like Transformer diffusion schemes) rapidly became the industry's new default**:

- **2024-06**: ByteDance launched **Jimeng**, and Kuaishou launched **Kling**, both adopting DiT-like architectures for video generation. Kling was the first to demonstrate near-Sora-level single-take long-form video capability on the Chinese internet.
- **2025-01**: Google released **Veo 2**, supporting text and image input to generate up to 4K video. While Veo's architectural details were not fully disclosed, community analysis widely believed it also used a Transformer diffusion approach.
- **Throughout 2025**: Runway launched Gen-3 and Gen-4; Pika launched 2.0; Shengshu Technology launched **Vidu** — the entire industry completed the leap from "can't do one minute" to "one-take one minute" within 18 months.

A core reason Sora's DiT approach was so quickly replicated is its openness to data formats. Traditional U-Net models require videos to be uniformly cropped to fixed resolution/duration/aspect ratios — for video data from diverse sources such as YouTube, films, documentaries, and phone recordings, this means enormous information loss. DiT's patch-based tokenization naturally accepts inputs of varying formats — this is not merely an architectural choice but fundamentally a leap in data efficiency.

### 3.2 The collapse of the product matrix

Sora's story has an awkward ending. From the February 2024 preview to the December 2024 official release, there was a 10-month wait; less than a year after launch, Sora 2 (September 2025) added TikTok-like social features, attempting to turn a generation tool into a content platform; less than seven months later, OpenAI announced the shutdown of the Sora app in April 2026 and the API in September 2026.[^4]

By estimates, Sora's daily operating costs were approximately $1 million, while global users peaked at just over one million and active usage continuously declined to under 500,000.[^4] The high computational cost of video generation and the relatively narrow user scenarios (professional creators adopted AI tools far more slowly than text and image users) meant that Sora's productization never matched ChatGPT's.

Sora went from "the most wanted video model in the world" to "one of OpenAI's shortest-lived products" — this contrast itself illustrates: **technological leadership ≠ product survival**. Just as DiT was rapidly replicated by the industry, Sora's first-mover technical advantage was neutralized by the rapid follow-up from Kling, Veo, and Runway. Sora's historical position is not "a successful product" but "a technological demonstration that changed the industry's architecture."

### 3.3 The legacy of the world model

After Sora's shutdown, OpenAI did not explain the reasons in detail, but the industry widely viewed it as a consolidation toward core products (ChatGPT, inference APIs). The high computational cost of video generation and relatively narrow profit margins made Sora a casualty among non-core businesses.[^4]

But the path that Sora pioneered did not disappear. The DiT architecture has become infrastructure for the video generation field, and the concept of the world model has permeated from research papers into industry roadmaps. Teaching models to understand that "an object hidden behind something will reappear," that "light comes from a certain direction," that "water should flow downward" — these capabilities are not explicitly encoded physical rules but internal representations of the three-dimensional world that emerge from large-scale training. Chinese video generation teams (Kuaishou's Kling, Shengshu Technology's Vidu) and Chinese multimodal research groups — including teams like Qwen — have continued to advance along this path after Sora's shutdown, adapting the DiT architecture to the Chinese internet's content ecosystem and exploring the fusion of video generation and multimodal understanding.

Sora's true legacy: it demonstrated that Transformer diffusion models are not merely tools for drawing pictures but a possible path toward world models. After it died, that bet remains on the table.

---

## Commentary

Sora is a rare case in the history of large models where "the trailer was more stunning than the feature film." The few minutes of demo video on February 15, 2024 sent a thunderclap through the entire AIGC industry — far exceeding the impact of the product itself that followed. Its true contribution was not the TikTok-style social features added in 2025, nor the licensing deal with Disney — it was that in early 2024, it pointed every video generation team in the world in a direction: put Transformers into diffusion models, cut video into patches, and scale up.

By analogy, Sora's position in video generation is comparable to GPT-3's position in language models. GPT-3 was not the first language model, nor the last, but it proved that "scaling up" was viable in that domain, thereby redefining the industry's boundaries. Sora was not the first text-to-video model (Meta's Make-A-Video was 17 months earlier), but it proved that scaling up also worked in video — a 60-second coherent video was a dimensionality-reduction-level shock at the time.

The tragedy is: GPT-3 became the foundation of a product (ChatGPT), whereas Sora did not survive long enough to become the "video ChatGPT." But DiT has proliferated everywhere. An architecture survived; a product died — this fork in the road is itself worth recording in history.

---

*Compiled by the Endfield Industrial History Team: Rosmontis (Intelligence Analysis).*

---

(Related entries: *The Biography of Diffusion*, *The Biography of DALL·E*.)

[^1]: OpenAI, "Sora: Creating video from text", 2024-02-15. https://openai.com/index/sora/
[^2]: Tim Brooks, Bill Peebles et al. / OpenAI, "Video generation models as world simulators", 2024-02-15. https://openai.com/index/video-generation-models-as-world-simulators/
[^3]: William Peebles, Saining Xie, "Scalable Diffusion Models with Transformers" (DiT), arXiv:2212.09748, submitted 2022-12-19. https://arxiv.org/abs/2212.09748
[^4]: Wikipedia, "Sora (text-to-video model)". https://en.wikipedia.org/wiki/Sora_(text-to-video_model)
[^5]: Meta AI, "Make-A-Video", announced 2022-09-29. https://makeavideo.studio/
[^6]: Google Research, "Imagen Video: High Definition Video Generation with Diffusion Models", arXiv:2210.02303, 2022-10-05. https://imagen.research.google/video/
[^7]: Runway, "Gen-2: Generate novel videos with text, images or video clips", announced 2023-02, released 2023-03. https://research.runwayml.com/gen2
[^8]: Cade Metz / The New York Times, "OpenAI Unveils Sora, an A.I. That Generates Eye-Popping Videos", 2024-02-15. https://www.nytimes.com/2024/02/15/technology/openai-sora-videos.html
