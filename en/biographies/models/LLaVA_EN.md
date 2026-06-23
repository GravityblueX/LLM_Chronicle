# The Biography of LLaVA

> LLaVA (Large Language and Vision Assistant, 2023-04) answered a seemingly simple question: **how much engineering does it take for a language model to "understand" images?** The answer: almost none—a pre-trained visual encoder, a linear projection layer, and a language model, and those three components put together constitute LLaVA's entire architecture. Before LLaVA, multimodal models either took Flamingo's complex cross-attention route or relied on closed-source APIs (GPT-4V). LLaVA proved with a paper of fewer than two pages that visual instruction tuning + linear projection suffices for high-quality image-text dialogue. Its position in the open-source multimodal ecosystem is equivalent to Llama's position in open-source text LLMs—not the strongest, but the most important foundation and starting point.

---

## I. Technical Background

By early 2023, language models had become remarkably articulate—ChatGPT swept the globe after its November 2022 launch. But it had a fundamental limitation: **it could not see.** Send it a photo, and it did not know what was in it. You could describe an image in words, but you could not make it "look" for itself.

The fusion of vision and language was not a new problem. In 2022, DeepMind released Flamingo, using gated cross-attention to inject visual information into a language model, achieving few-shot image-text dialogue. [^1] Flamingo's architecture was complex—requiring dedicated cross-attention modules to be inserted between frozen language model layers, with high training data and engineering costs. That same year, Microsoft's BLIP-2 proposed a Q-Former adapter, using a set of learnable query vectors to extract language-relevant visual information from the visual encoder. [^2] Q-Former was more streamlined than Flamingo, but still required training a substantial dedicated adapter module.

The other route was closed-source. In March 2023, OpenAI released GPT-4 with technical support for image input. [^3] But GPT-4's multimodal capability was locked behind an API—you did not know how it processed images, what visual encoder it used, or how it aligned vision and language. For researchers and developers, GPT-4V was a powerful but unexaminable black box.

Both routes had flaws: open-source approaches were too complex, closed-source approaches too opaque. Was there a simpler path?

---

## II. Core Events

### 2.1 LLaVA's release (2023-04-17)

On **April 17, 2023**, Haotian Liu, Chunyuan Li, and colleagues at the University of Wisconsin-Madison published the paper "Visual Instruction Tuning" on arXiv. [^4]

LLaVA's architecture can be described in a single sentence: **connect CLIP's visual encoder in front of a language model, with a linear projection layer in between.** That's it. No cross-attention, no Q-Former, no complex adapters. [^4]

Specifically:

1. **Visual encoder**: CLIP ViT-L/14, with frozen parameters, responsible for encoding images into visual token sequences. [^4]
2. **Linear projection layer**: A simple fully connected layer (MLP) mapping CLIP's visual representations into the language model's input space. This is the only new parameter that needs training. [^4]
3. **Language model**: Vicuna 13B (an open-source dialogue model fine-tuned from LLaMA-1 13B), responsible for understanding image-text mixed input and generating text output. [^4]

The total trainable parameters consisted of only a few tens of millions in the projection layer—less than 0.5% of the language model itself.

### 2.2 Visual Instruction Tuning: using GPT-4 to create training data

LLaVA's true innovation was not in its architecture, but in its training methodology.

The researchers used GPT-4 (the text-only version) to generate a set of **multimodal instruction tuning data**. [^4] The specific approach: provide GPT-4 with text descriptions of images (such as COCO image captions and bounding box information), then have it generate various types of instruction-following data—dialogue, detailed descriptions, complex reasoning.

For example, given a text description of an image "a cat sitting on a keyboard," GPT-4 would generate:

- **Dialogue**: "What's in this image?" "An orange cat is lying on the keyboard of a laptop."
- **Detailed description**: "Please describe this image in detail." "An orange cat occupies most of the keyboard area, its front paws resting on the spacebar, its tail draping over the side of the laptop…"
- **Reasoning**: "What might this cat be doing? Why might it have chosen this position?" "The cat may have been attracted by the warmth of the keyboard…"

This method is called **Visual Instruction Tuning**—using a language model's textual capability to synthesize vision-language instruction data, then using this data to train the alignment layer between vision and language. It bypasses the cost bottleneck of manually annotating multimodal data, using GPT-4's "knowledge" to teach a smaller model to "see."

### 2.3 Two-stage training

LLaVA's training is divided into two stages: [^4]

**Stage 1: Feature alignment pre-training.** Using the CC3M dataset (approximately 595,000 image-text pairs), only the linear projection layer is trained; the visual encoder and language model are frozen. This stage's goal is to teach the projection layer to map visual features into a space the language model can understand. Training on a single 8×A100 node took approximately 4 hours.

**Stage 2: End-to-end fine-tuning.** Using 158,000 multimodal instruction data generated by GPT-4, simultaneously updating the projection layer and language model parameters (visual encoder still frozen). This stage teaches the model to follow instructions for understanding and describing images.

The computational cost of both stages was remarkably low. Stage 1: 4 hours; Stage 2: approximately 10 hours—less than one day of 8×A100 time in total. Compared to Flamingo's 1,000+ TPUs and GPT-4's undisclosed massive training, LLaVA's cost was negligible.

### 2.4 Results: massive output from minimal cost

LLaVA demonstrated surprising results across multiple multimodal benchmarks: [^4]

- On visual dialogue and description tasks, LLaVA's quality approached or even exceeded that of Flamingo, BLIP-2, and other models with far greater parameters and compute.
- Using GPT-4 as an evaluator (LLaVA-Bench), LLaVA achieved approximately 85% of GPT-4's relative score on complex visual reasoning and detailed description tasks.
- On ScienceQA (science question answering), LLaVA combined with GPT-4 in an ensemble approach achieved the state of the art at the time.

The significance of these numbers lies not in precise percentages—it lies in demonstrating that **an extremely simple architecture, combined with high-quality instruction tuning data, is sufficient for high-quality multimodal dialogue.** There was no need to train a massive multimodal model from scratch, no need for complex cross-modal adapters—just make existing visual encoders and language models "talk to each other."

### 2.5 NeurIPS 2023 Outstanding Paper Award

In **December 2023**, LLaVA received the NeurIPS 2023 Outstanding Paper Award. [^5] This was the academic community's formal recognition of LLaVA's contribution—it was not merely a useful model but an insightful paper. Its core insight—that visual instruction tuning + a simple architecture suffices for high-quality multimodal dialogue—shifted the direction of open-source multimodal research.

---

## III. Impact and Legacy

### 3.1 LLaVA-1.5: from proof of concept to practical foundation

In **October 2023**, the same team released LLaVA-1.5. [^6] LLaVA-1.5 made a seemingly minor but profoundly impactful architectural improvement: replacing the projection layer from a single linear projection to a two-layer MLP, and increasing visual resolution from 224×224 to 336×336.

This change, combined with better training data and strategies, enabled LLaVA-1.5 to comprehensively surpass all previous open-source multimodal models on 11 benchmarks, including models with larger parameters such as Qwen-VL (10B) and InternVL. More remarkably, LLaVA-1.5 approached or matched GPT-4V's performance on certain benchmarks. [^6]

LLaVA-1.5 became the "default baseline" for open-source multimodal research. Subsequently, a large number of multimodal papers used LLaVA-1.5 as their baseline in experiments—just as open-source text LLM research used Llama as its baseline.

### 3.2 The explosion of derivative work

LLaVA spawned a vast family of derivative models:

| Date | Model | Key changes |
|------|-------|-------------|
| 2023-04 | MiniGPT-4 | Aligned BLIP-2's visual encoder with Vicuna; nearly contemporaneous with LLaVA, with similar ideas [^7] |
| 2023-10 | LLaVA-1.5 | Two-layer MLP projection + higher resolution, became the open-source multimodal baseline [^6] |
| 2024-01 | LLaVA-NeXT | Dynamic resolution processing, higher resolution input, more training data [^8] |
| 2024 | InternVL series | From Shanghai AI Lab, using a larger-scale visual encoder, an important Chinese multimodal foundation [^9] |
| 2024-2025 | Qwen-VL series | Alibaba's Qwen team, multilingual multimodal, inheriting LLaVA's projection alignment approach [^10] |

These derivative works share a common characteristic: they all retained LLaVA's core architecture—visual encoder + projection layer + language model—making improvements only in visual encoder selection, projection layer design, training data, and resolution. LLaVA contributed not just a model, but an architectural paradigm.

### 3.3 The Llama of open-source multimodal

Using the open-source history of text LLMs as an analogy: GPT-3 was the 2020 frontier, GPT-NeoX was the 2021 community attempt, and LLaMA was the 2023 turning point.

In the multimodal domain, Flamingo was the 2022 frontier, BLIP-2 was the early 2023 improvement, and **LLaVA was the LLaMA moment for multimodal**—it proved that open-source multimodal models could be genuinely usable, downloadable, fine-tunable, and deployable by anyone. After LLaVA, both the quantity and quality of open-source multimodal models experienced exponential growth.

But this analogy is not entirely precise. LLaMA 1's impact stemmed largely from the uncontrollable propagation after its weight leak; LLaVA's impact came from the paper's own elegant insight and the community's active adoption. LLaVA did not experience a "leak" event—its success was entirely because researchers saw its design and actively reproduced and improved it. This may be the healthier form of dissemination.

### 3.4 Current landscape

By 2025–2026, LLaVA as a "specific model" had been surpassed by latercomers—LLaVA-NeXT, InternVL-2.5, Qwen-VL-Max, DeepSeek-VL2, and others are all stronger on various benchmarks. But LLaVA as an "architectural paradigm" still dominates the open-source multimodal domain. The vast majority of open-source multimodal models' core architecture remains: visual encoder → projection/adapter layer → language model. This paradigm was first validated by LLaVA in its most minimal form, then inherited by the entire community.

With the emergence of natively multimodal models (such as GPT-4o, Gemini 1.5) in 2024–2025, LLaVA's "concatenation-style" multimodal architecture faces new challenges: end-to-end trained natively multimodal models are superior in modality fusion depth. But for the open-source community, "concatenation" remains most practical—because it allows flexible replacement of visual encoders and language models, enables low-cost fine-tuning, and permits overlaying multimodal capabilities onto existing models.

---

## Commentary

LLaVA's contribution was not inventing the multimodal model, but transforming multimodal models from "requiring massive specialized training" into "three components put together and ready to go."

Before LLaVA, multimodal fusion was heavy engineering: Flamingo needed thousands of TPUs and specially designed cross-attention modules, and GPT-4V required undisclosed massive compute and a closed-source technology stack. After LLaVA, multimodal fusion was something even a graduate student could do: download a CLIP encoder, train a projection layer, synthesize some data with GPT-4—and within a day you could have a multimodal dialogue system running.

In the larger narrative, LLaVA's position in the history of multimodal fusion is one of "simplifying complexity." ViT proved images could be tokenized, CLIP proved images and text could be aligned, and LLaVA proved—connecting these two already-accomplished things in front of a language model is sufficient. Complexity should not be a barrier to entry. A simple design that democratizes capability contributes more to the entire field than a stronger but complex design that only a few teams can reproduce.

---

*This entry was compiled by the Endfield Industrial Chronicle team: Silence (biography lead author).*

---

[^1]: Alayrac et al., "Flamingo: a Visual Language Model for Few-Shot Learning", NeurIPS 2022 / arXiv:2204.14198, 2022-04-29. https://arxiv.org/abs/2204.14198
[^2]: Li et al., "BLIP-2: Bootstrapping Language-Image Pre-training with Frozen Image Encoders and Large Language Models", ICML 2023 / arXiv:2301.12597, 2023-01-30. https://arxiv.org/abs/2301.12597
[^3]: OpenAI, "GPT-4 Technical Report", arXiv:2303.08774, 2023-03-15. https://arxiv.org/abs/2303.08774
[^4]: Liu et al., "Visual Instruction Tuning", NeurIPS 2023 Oral / arXiv:2304.08485, 2023-04-17. https://arxiv.org/abs/2304.08485
[^5]: NeurIPS 2023 Outstanding Paper Awards. https://neurips.cc/virtual/2023/awards_detail
[^6]: Liu et al., "Improved Baselines with Visual Instruction Tuning" (LLaVA-1.5), arXiv:2310.03744, 2023-10-05. https://arxiv.org/abs/2310.03744
[^7]: Zhu et al., "MiniGPT-4: Enhancing Vision-Language Understanding with Advanced Large Language Models", arXiv:2304.10592, 2023-04-20. https://arxiv.org/abs/2304.10592
[^8]: Liu et al., "LLaVA-NeXT: Improved reasoning, OCR, and world knowledge", 2024-01. https://llava-vl.github.io/blog/2024-01-30-llava-next/
[^9]: Chen et al., "InternVL: Scaling up Vision Foundation Models and Aligning for Generic Visual-Linguistic Tasks", arXiv:2312.14238, 2023-12. https://arxiv.org/abs/2312.14238
[^10]: Bai et al., "Qwen-VL: A Versatile Vision-Language Model for Understanding, Localization, Text Reading, and Beyond", arXiv:2308.12966, 2023-08. https://arxiv.org/abs/2308.12966
