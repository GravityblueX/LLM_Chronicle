# The Biography of PEFT

> Fully fine-tuning a 175B-parameter model requires hundreds of GB of memory, dozens of GPUs, and weeks of time. PEFT answered this challenge with an elementary but devastating insight: you don't need to touch all the parameters. Adjust just a few thousand, a few tens of thousands, a few hundred thousand—and most of the model's capability remains, while the cost shrinks to the scale of a single person with a single card. From Adapter to LoRA, parameter-efficient fine-tuning transformed large models from "toys only big companies can touch" into "tools everyone can modify."

---

## I. Technical Background

In 2018–2019, BERT and GPT successively established the "pre-train + fine-tune" paradigm. The approach was straightforward: pre-train a general model on large-scale unlabeled text, then **update all parameters** on downstream tasks—run a few rounds of gradients to obtain a model specialized for a particular task.

This paradigm was feasible in the era of BERT-base (110M) and BERT-large (340M). A single V100 could handle it; a graduate student could tune it. But when GPT-2 (1.5B, February 2019) and T5 (11B, October 2019) appeared, the situation changed: the memory required for full fine-tuning was no longer affordable for individual researchers, and storing and deploying independent copies for each task was an additional hidden cost—storing a complete set of model weights for each of N downstream tasks meant storage costs scaling linearly with the number of tasks.

A more fundamental issue lay in a phenomenon repeatedly observed in BERTology research: during fine-tuning on downstream tasks, most parameters in large models change very little. The core capabilities for language understanding have already been learned during pre-training; fine-tuning merely makes surface-level adaptations. If so, why update all parameters?

This question was answered in 2019 by Houlsby et al. with a succinct idea: **insert small modules into the pre-trained model, freeze the original model, and train only the newly inserted parts.** [^1]

---

## II. Core Innovations

The evolution of PEFT follows a clear trajectory: each step makes choices along three dimensions—what to insert, where to insert it, and how to train it. From Adapter's serial bottleneck to LoRA's parallel low-rank decomposition, each iteration reduces parameter count and inference latency.

### 2.1 Adapter (2019): inserting bottleneck modules between layers

In 2019, Houlsby et al. (Google) proposed Adapter. The approach inserts a small neural network between each layer of the Transformer—two fully connected layers with a bottleneck in between, first reducing dimensionality then expanding it. All parameters of the pre-trained model are frozen; only these adapter modules are trained. [^1]

For example: the Transformer's hidden dimension is 768. The adapter is designed as a 768 → 64 → 768 bottleneck structure. The trainable parameters constitute only about 2% of the original model, yet performance on the GLUE benchmark approaches full fine-tuning (within 1% difference).

The advantage of adapters is extremely few parameters and minimal storage—each downstream task only requires saving an adapter of a few hundred KB, rather than copying the entire model weights. But it has a structural problem: adapters are inserted between layers and execute **serially**, requiring two extra matrix multiplications per layer. This means additional latency during inference—in a Transformer, each layer's computation time is the bottleneck, and adding an adapter is like adding a step that cannot be skipped. All subsequent methods attempted to circumvent this latency cost.

### 2.2 Prefix Tuning (2021): compressing all adaptation into "virtual prefixes"

In 2021, Li and Liang proposed Prefix Tuning. Instead of inserting modules, they concatenated a set of trainable "virtual tokens"—prefix vectors—before the input sequence. These prefix vectors do not come from any vocabulary; they are learned purely through gradients, but they participate in the attention computation of all subsequent tokens. [^2]

The core intuition: in generative tasks, prompts can dramatically alter a model's output. Rather than having humans hand-design prompts, let the model learn an optimal set of "prefixes." This set of prefixes functions as a continuous, differentiable prompt—it corresponds to no natural language word, but activates the attention patterns needed for specific tasks within the model.

Prefix Tuning uses fewer parameters than Adapter—a set of prefix vectors typically amounts to only a few dozen to a few hundred token embeddings, totaling less than 0.1% of the original model's parameters. Experiments on GPT-2 and BART showed it achieved performance matching full fine-tuning on table-to-text, summarization, and other generative tasks.

But Prefix Tuning also has a cost: the prefix consumes positions in the input sequence, compressing the context window available for actual input. For long-sequence tasks where context windows are already tight, this is no small issue.

### 2.3 LoRA (2021): replacing full updates with low-rank matrix decomposition

In June 2021, Hu et al. at Microsoft proposed LoRA (Low-Rank Adaptation), which rapidly became the most widely adopted method in the PEFT field. [^3]

LoRA's insight is based on an empirical observation: when large models are fine-tuned, although the parameter update matrix is full-rank, its "intrinsic dimension" is very low. In other words, model fine-tuning does not uniformly update in all directions—the vast majority of changes concentrate along a few key directions.

LoRA's approach is therefore remarkably elegant: no additions, no injected modules. It places two low-rank matrices A and B in parallel alongside the Transformer's attention layers (Q, K, V, O projection matrices)—A reduces dimensionality (d → r), B expands it (r → d), where r is much smaller than d (typical values r=8 or r=16). Pre-trained weights are frozen; only A and B are trained. During inference, the product BA can be merged directly with the original weight matrix (W' = W + BA), **adding zero inference latency**. [^3]

This is LoRA's critical advantage over Adapter: no additional computation at inference time. The parameter count during training is extremely small—for GPT-3 175B, LoRA with r=16 has only about 120M trainable parameters, less than 0.07% of the full amount.

LoRA's experiments on GPT-2 and GPT-3 covered both NLU and NLG tasks, showing that LoRA achieved comparable or better results with fewer parameters than Adapter. The paper also found that r can be very small (r=1 sometimes works), further confirming the core hypothesis that "model fine-tuning updates are low-rank."

### 2.4 QLoRA (2023): bringing LoRA into the 4-bit world

In 2023, Dettmers et al. proposed QLoRA. Its contribution was not algorithmic innovation but **making LoRA runnable on quantized models**. [^4]

At the time, 4-bit quantization could already fit a 65B Llama into 48 GB of memory, but fine-tuning a quantized model resulted in uncontrollable precision loss. QLoRA used three techniques to stabilize fine-tuning on quantized models: the NF4 quantization format (a 4-bit format specifically designed for neural network weight distributions), double quantization (quantizing the quantization constants again), and paged optimizers (temporarily spilling optimizer state to CPU memory).

Result: **a 65B Llama could be fine-tuned on a single 48 GB GPU.** QLoRA reduced PEFT's hardware barrier from a GPU cluster to a single consumer-grade card. After this, "fine-tuning large models on your own computer" truly became possible—not just algorithmically feasible, but hardware-feasible.

### 2.5 Subsequent variants and competing methods

After LoRA, the community produced a flood of improvements:

- **IA³ (2022)**: Liu et al. proposed "rescaling activations via learned vectors"—lighter than LoRA, requiring only a few vector parameters per task, surpassing full fine-tuning on the T0 benchmark. [^5]
- **AdaLoRA (2023)**: Zhang et al. made LoRA's rank r adaptively allocated across layers. Critical layers get more rank; non-critical layers get less—avoiding the waste of "giving all layers the same r." [^6]
- **DoRA (2024)**: Liu et al. decomposed weight updates into "direction" and "magnitude"—direction updated via LoRA, magnitude scaled by a learnable vector. Significantly outperformed standard LoRA in fine-tuning with smaller datasets. [^7]
- **VeRA (2024)**: Kopiczko et al. further froze LoRA's two low-rank matrices A and B as random initialization, training only learnable scaling vectors. Trainable parameters reduced to a fraction of the original, with virtually no performance loss. [^8]

### 2.6 Key data

| Method | Date | Trainable parameter share (GPT-3 175B baseline) | Inference latency | Core source |
|--------|------|-------------------------------------------------|-------------------|-------------|
| Full fine-tuning | 2018 | 100% | Baseline | — |
| Adapter | 2019 | ~2–4% | Increased | Houlsby et al. [^1] |
| Prefix Tuning | 2021 | ~0.01–0.1% | No significant increase | Li & Liang [^2] |
| LoRA (r=16) | 2021 | ~0.07% | No increase (mergeable) | Hu et al. [^3] |
| QLoRA (4-bit) | 2023 | ~0.07% (~120M) | No increase | Dettmers et al. [^4] |
| IA³ | 2022 | ~0.01% | No increase | Liu et al. [^5] |

---

## III. Impact and Legacy

### 3.1 Impact on research and the open-source ecosystem

Before LoRA, fine-tuning large models was "a game for the wealthy." A paper that wanted to run fine-tuning experiments on GPT-3 first had to solve the compute problem—either having OpenAI API access or having hundreds of GPUs. LoRA and QLoRA tore down this wall.

In 2023, the open-source LLM fine-tuning ecosystem exploded. Alpaca, Vicuna, UltraChat, Orca—these models fine-tuned from Llama (after the LLaMA weight leak) overwhelmingly used LoRA/QLoRA. Not because they chose this method—because there was no other option. A single 4090, loading a 4-bit quantized 7B Llama, plus LoRA, could produce a usable chat model in one afternoon. This lowering of the barrier directly catalyzed the "fine-tuning for everyone" wave of 2023.

### 3.2 From "model distribution" to "adapter distribution"

PEFT changed the logic of large model deployment. Before Adapters, distributing a model meant transferring the entire weight file—a 7B model required 14 GB of disk space. PEFT transformed this into "distribute the base model once, then only distribute tens of MB of LoRA weights thereafter."

This concept was pushed to its extreme in 2024 by Civitai (Stable Diffusion's model community): hundreds of thousands of LoRA models—each character, each art style, each scene—occupying only tens of MB. Users download one base model, stack a dozen LoRAs, and generate mixed styles. This is PEFT's closest moment to an "App Store": the large model is the operating system; LoRAs are the applications on top.

### 3.3 Adoption in industry

By 2025–2026, LoRA had become the de facto standard for large model fine-tuning:

- **HuggingFace PEFT library**: Integrated LoRA, QLoRA, IA³, Prefix Tuning, and other mainstream methods, with cumulative downloads in the tens of millions by 2025.
- **HuggingFace, vLLM, Ollama**, and other inference frameworks natively support dynamic loading and hot-swapping of LoRA adapters.
- **Platformization of large models**: The fine-tuning services of OpenAI (GPT fine-tuning API), Anthropic, Alibaba Cloud, and other platforms have largely migrated to LoRA or its variants. LoRA's mergeable and pluggable properties naturally fit multi-tenant inference architectures—each user's LoRA weights stored independently, dynamically mounted onto the shared base model at inference time.

### 3.4 Decline or absorption

PEFT was not declined—it was absorbed.

By 2026, the meaning of "fine-tuning a large model" had undergone a semantic shift. Unless "full fine-tuning" is explicitly specified, the default refers to some form of PEFT—in the vast majority of cases, LoRA. PEFT evolved from "a cost-saving alternative" into "the default approach."

This parallels the fate of the attention mechanism: when a technology sinks from paper titles into default configurations, it has actually won. PEFT is no longer a "new technology" requiring explanation—it is a standard step in large model engineering, just as Batch Normalization is to CNNs and Residual Connections are to deep networks.

---

## Commentary

PEFT's core contribution was not "making fine-tuning faster"—it was **making large models something everyone can modify.**

Before LoRA, a large model was a black box: you could converse with it, give it prompts, but you could not truly "own" it—because you could not change it. The cost barrier of full fine-tuning for 175B—compute, time, storage—locked model ownership inside large companies and a handful of research institutions. LoRA unlocked that lock. A single consumer-grade card, a few MB of weight files, one afternoon of training—and a general model becomes your own model.

The depth of this change extends beyond the technical level. The hundreds of thousands of LoRA models on Civitai, the small businesses of "spending $500 to buy a fine-tuned 7B model," the community fine-tuning shared in LoRA form on HuggingFace—none of these were predicted by PEFT's papers, but they are the inevitable consequence of being able to modify a large model with a single graphics card. When the cost of holding a tool drops low enough, the tool becomes expression.

From Adapter to Prefix Tuning to LoRA to QLoRA, every step of PEFT was subtraction: fewer parameters, less latency, less hardware. The end of this line is not a smarter algorithm, but a fact that has become common knowledge—you don't need to touch all the parameters to control a model. That plain sentence transformed the post-2023 AI story from "an arms race between large companies" into "creative freedom for everyone."

---

*This entry was compiled by the Endfield Industrial Chronicle team: Zhuang Fangyi (lead author).*

---

[^1]: Houlsby et al., "Parameter-Efficient Transfer Learning for NLP", ICML 2019. https://arxiv.org/abs/1902.00751
[^2]: Li & Liang, "Prefix-Tuning: Optimizing Continuous Prompts for Generation", ACL 2021. https://arxiv.org/abs/2101.00190
[^3]: Hu et al., "LoRA: Low-Rank Adaptation of Large Language Models", ICLR 2022 (arXiv:2021-06-17). https://arxiv.org/abs/2106.09685
[^4]: Dettmers et al., "QLoRA: Efficient Finetuning of Quantized Language Models", NeurIPS 2023. https://arxiv.org/abs/2305.14314
[^5]: Liu et al., "Few-Shot Parameter-Efficient Fine-Tuning is Better and Cheaper than In-Context Learning", NeurIPS 2022. https://arxiv.org/abs/2205.05638
[^6]: Zhang et al., "AdaLoRA: Adaptive Budget Allocation for Parameter-Efficient Fine-Tuning", ICLR 2023. https://arxiv.org/abs/2303.10512
[^7]: Liu et al., "DoRA: Weight-Decomposed Low-Rank Adaptation", ICML 2024. https://arxiv.org/abs/2402.09353
[^8]: Kopiczko et al., "VeRA: Vector-based Random Matrix Adaptation", ICLR 2024. https://arxiv.org/abs/2310.11454
