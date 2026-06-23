# Treatise: Multimodal Fusion

> Large models could originally only read text — tokens went in line by line, tokens came out line by line. Seven or eight years later, frontier models can simultaneously see images, hear sounds, read text, and speak, even "understanding" video end-to-end. The road from unimodal to native multimodal was not a single-release leap, but a relay paved over a decade by a series of key works: ViT, CLIP, LLaVA, GPT-4o, and others.

---

## I. Overview

When the Transformer was born in 2017, its goal was narrow — translating one English sentence into one French sentence. Text in, text out. Visual models traveled a different path: CNNs as the backbone, ImageNet as the proving ground, with image classification, object detection, and semantic segmentation each pursuing their own tracks.

The two paths began converging around 2020. The convergence point was not "stitching CNNs and RNNs together," but a more fundamental discovery: images could also be tokenized and fed into Transformers. From that point on, text and images shared the same attention mechanism, and the boundary between vision and language models began to blur. In 2021, CLIP welded them into a shared representation space through contrastive learning. In 2023, LLaVA connected a visual encoder in front of a language model. In 2024, GPT-4o announced end-to-end processing of text, vision, and audio within a single neural network.

What follows is a mapping of the key milestones on this road to fusion.

---

## II. 2020: ViT — Images Can Be "Tokenized" Too

The first gate of multimodal fusion was teaching Transformers to see images.

Before ViT, attention had been used in vision, but never as a backbone. CNNs were the lingua franca of the visual domain — everyone spoke it, nobody felt the need to switch. In October 2020, Google's Dosovitskiy et al. released the Vision Transformer (ViT), with a straightforward approach: slice an image into fixed-size patches (e.g., 16×16 pixels), flatten each patch into a vector, and feed them into a standard Transformer encoder just like words.[^1]

The interest ViT generated at the time was not about how much it won on a particular benchmark, but about proving that "convolution is not the only answer." A Transformer could be used unchanged across different modalities — no need to build a custom recurrent structure for images, just cut pixels into tokens.

The paper also noted that ViT underperformed CNNs on small and medium datasets, requiring large-scale pre-training (such as on JFT-300M) to fully realize its potential. This conclusion was repeatedly verified afterward: the Transformer's strength lies in universality when data is sufficiently abundant, and CNNs remain a good choice when data is scarce. But in the large model era, "data scarcity" is increasingly less of a bottleneck.

### Key Data

| Date | Work | Core Contribution | Source |
|------|------|-------------------|--------|
| 2020-10 | ViT | Image patches → Transformer; proved convolution is not essential | [^1] |

---

## III. 2021: CLIP — Welding "Seeing" and "Reading" Together

ViT solved "Can Transformers see images?" CLIP solved a bigger problem: "How to make a model understand that an image and a piece of text are saying the same thing."

In January 2021, OpenAI released CLIP. It performed contrastive training on 400 million (image, text) pairs: an image encoder (ViT or ResNet) and a text encoder (Transformer) each produced vectors, with correct image-text pairs pulled closer and incorrect pairs pushed apart. After this training, the model could recognize categories it had never "seen" — as long as a text description was provided, CLIP could find the corresponding content in an image.[^2]

CLIP's historical significance went beyond being a "zero-shot visual classifier." It drew a dividing line: before CLIP, visual models understood the world through fixed labels; after CLIP, visual models understood the world through natural language. Labels are closed — 1,000 classes are 1,000 classes. Language is open — any concept you can articulate can theoretically be retrieved and recognized.

Its first wave of impact hit image generation. In April 2022, DALL·E 2 used the CLIP latent space as a semantic bridge for image generation — first mapping text to a CLIP image embedding via a prior, then rendering it into pixels with a diffusion decoder. In August 2022, Stable Diffusion used the CLIP ViT-L/14 text encoder to convert prompts into embeddings.[^3][^4] Millions of creators began writing prompts and adjusting weights in Stable Diffusion, and every "translation" from text to image was powered by the shared space that CLIP had trained.

### Key Data

| Date | Work | Core Contribution | Source |
|------|------|-------------------|--------|
| 2021-01 | CLIP | Contrastive learning on 400M image-text pairs; vision and language enter the same representation space | [^2] |
| 2022-04 | DALL·E 2 | CLIP latent as semantic bridge for image generation | [^3] |
| 2022-08 | Stable Diffusion | CLIP text encoder drives open-source text-to-image | [^4] |

---

## IV. 2023: LLaVA and GPT-4V — Language Models Begin to "See"

2023 was the year multimodal large models were born. The key shift was: instead of treating vision and language as two separately trained, post-hoc stitched systems, a language model was made to directly receive visual input.

**LLaVA (Large Language and Vision Assistant)** was released in April 2023. Its architecture was elegant: a pre-trained CLIP visual encoder was connected in front of a Vicuna language model, with a projection layer in between. The visual encoder handled "seeing" — converting images into vectors; the projection layer handled "alignment" — mapping visual vectors into the language model's input space; the language model handled "reading and writing" — receiving mixed image-text sequences and generating text as usual.[^5]

LLaVA's key insight was: there was no need to train a massive multimodal model from scratch. The language model already had understanding ability, the visual encoder already had "seeing" ability, and all that was missing was an adapter in between. This approach later became the standard recipe for open-source multimodal models.

**GPT-4V** began rolling out to select users around September 2023 and was officially demonstrated at OpenAI DevDay in November 2023. OpenAI's technical report did not disclose GPT-4's architectural details but explicitly stated that GPT-4 could accept image and text inputs and output text.[^6]

**Gemini 1.0** was released in December 2023. Google stated it was designed as a multimodal model from the ground up, capable of processing text, images, audio, video, and code. The Ultra version achieved the highest scores of the time on benchmarks including MMLU.[^7]

This year established a new normal: a frontier model that could only handle text was no longer enough. The ability to see images, read charts, and understand photographs and screenshots became the baseline for large model "usability."

### Key Data

| Date | Work | Core Contribution | Source |
|------|------|-------------------|--------|
| 2023-04 | LLaVA | Visual encoder + projection layer + LLM; open-source multimodal dialogue | [^5] |
| 2023-03 | GPT-4 | Supports image input (GPT-4V rolled out later that year) | [^6] |
| 2023-12 | Gemini 1.0 | Native multimodal design covering text/image/audio/video | [^7] |

---

## V. 2024: GPT-4o — Toward "Native" Multimodality

The multimodal models of 2023 shared a common "patchwork feel": visual encoder → projection layer → language model; audio first transcribed to text then fed into the model. These models could indeed see images and hear sounds, but information was lost between modalities — the tone, emotion, and background noise of audio were lost in transcription, and fine-grained image information might be compressed by the projection layer.

In May 2024, OpenAI released GPT-4o. The key change was written in its name — "o" stands for "omni." GPT-4o processed text, vision, and audio end-to-end within a single neural network: all inputs handled by the same model, all outputs generated by the same model. Audio latency dropped to an average of 320 milliseconds, approaching the response speed of human conversation.[^8]

Before GPT-4o, ChatGPT's voice mode was a "three-stage pipeline": speech → text (ASR) → GPT-4 processes text → text → speech (TTS). GPT-4o compressed these three stages into one. The result was not just faster — the model could directly perceive the speaker's tone, emotion, and the roles in a multi-person conversation, which was impossible to preserve in verbatim transcription.

Nearly simultaneously, Google released Gemini 1.5 Pro (2024-02) and subsequent updates, supporting million-token context and powering Google's entire product line with Gemini's multimodal capabilities. From late 2024 through 2025, Qwen-VL, DeepSeek-VL2, Claude 3 series, and other models also continued iterating in the multimodal direction.[^9]

### Key Data

| Date | Work | Core Contribution | Source |
|------|------|-------------------|--------|
| 2024-05 | GPT-4o | End-to-end text/vision/audio; 320ms voice latency | [^8] |
| 2024-02 | Gemini 1.5 Pro | Million-token context, multimodal | [^9] |
| 2024–2025 | Qwen-VL, DeepSeek-VL2, etc. | Open-source multimodal models continue iterating | — |

---

## VI. Factual Thread Table

| Date | Milestone | Modality Coverage | Fusion Method |
|------|-----------|-------------------|---------------|
| 2017-06 | Transformer | Text | Pure text, attention encoding |
| 2020-10 | ViT | Image | Image patches → Transformer |
| 2021-01 | CLIP | Image + Text | Contrastive learning aligns dual towers |
| 2022-04 | DALL·E 2 | Text → Image | CLIP latent + diffusion |
| 2022-08 | Stable Diffusion | Text → Image | CLIP encoder + latent diffusion |
| 2023-04 | LLaVA | Image → Text | Visual encoder + projection layer + LLM |
| 2023-03/09 | GPT-4 / GPT-4V | Image + Text → Text | Undisclosed; supports image input |
| 2023-12 | Gemini 1.0 | Text/Image/Audio/Video | Native multimodal design |
| 2024-05 | GPT-4o | Text/Vision/Audio (end-to-end) | Single neural network; 320ms voice |

---

## VII. Trend Analysis

- **It all started with "cutting tokens"**: ViT proved that as long as a modality can be sliced into a sequence, a Transformer can process it. This insight was the starting point of multimodal fusion — every multimodal system since has essentially done the same thing: converting different modalities into a unified token format.
- **From dual-tower alignment to end-to-end fusion**: The CLIP era was "two encoders + contrastive loss"; the LLaVA era was "encoder + projection + LLM"; the GPT-4o era was "one model handles everything." The degree of fusion deepened at each step, and information loss between modalities decreased at each step.
- **Vision went from supplementary to standard**: In 2021, CLIP was "an interesting visual research direction"; in 2024, multimodality is "a frontier model without it is a defective product." Visual understanding went from bonus points to an admission ticket.
- **The open-source route relies on CLIP's legacy**: Open-source systems like LLaVA and Stable Diffusion heavily depend on CLIP-trained visual encoders. Although CLIP was not designed for these tasks, it became the foundation of the multimodal open-source ecosystem.
- **Audio fusion is the new frontier of 2024**: GPT-4o's 320ms voice latency is not just an engineering metric — it allows a model to participate in "human-like" real-time conversation for the first time. Native audio modeling may be the next major battleground of multimodality.

---

## Commentary

The story of multimodal fusion is not "one day a large model suddenly learned to see images." It was a slow but clearly visible seam. ViT cut images into tokens, CLIP welded images and text into a shared space, DALL·E 2 and Stable Diffusion enabled that space to output pixels in reverse, LLaVA and GPT-4V taught language models to "read images," and GPT-4o finally stitched text, vision, and audio into a single neural network.

The direction of this thread was always consistent: reducing information loss between modalities, reducing "translation" steps. Every intermediate pipeline removed brought the model's understanding of the world one step closer to completeness. It was not about making the model "smarter" — it was about making the model more "complete." A model that can see, hear, speak, and write is one step closer to this world than a model that can only read text.

---

*Compiled by the Endfield Industrial Historian Team: Ptilopsis (Lead Data Analyst)*

---

(For CLIP's technical story, see "The CLIP Biographies"; for Sora's technical story, see "The Sora Biographies.")

[^1]: Dosovitskiy et al., "An Image is Worth 16x16 Words: Transformers for Image Recognition at Scale", ICLR 2021 / arXiv:2010.11929, 2020-10-22. https://arxiv.org/abs/2010.11929
[^2]: Radford et al., "Learning Transferable Visual Models From Natural Language Supervision", arXiv:2103.00020, 2021-02-26. https://arxiv.org/abs/2103.00020
[^3]: Ramesh et al., "Hierarchical Text-Conditional Image Generation with CLIP Latents", arXiv:2204.06125, 2022-04-13. https://arxiv.org/abs/2204.06125
[^4]: Rombach et al., "High-Resolution Image Synthesis with Latent Diffusion Models", arXiv:2112.10752, 2021; Stability AI, "Stable Diffusion Public Release", 2022-08-22. https://stability.ai/news/stable-diffusion-public-release
[^5]: Liu et al., "Visual Instruction Tuning", NeurIPS 2023 Oral / arXiv:2304.08485, 2023-04-17. https://arxiv.org/abs/2304.08485
[^6]: OpenAI, "GPT-4 Technical Report", arXiv:2303.08774, 2023-03-15. https://arxiv.org/abs/2303.08774
[^7]: Google, "Introducing Gemini: our largest and most capable AI model", 2023-12-06. https://blog.google/technology/ai/google-gemini-ai/
[^8]: OpenAI, "Hello GPT-4o", 2024-05-13. https://openai.com/index/hello-gpt-4o/
[^9]: Google, "Gemini 1.5: Unlocking multimodal understanding across millions of tokens of context", arXiv:2403.05530, 2024. https://arxiv.org/abs/2403.05530
