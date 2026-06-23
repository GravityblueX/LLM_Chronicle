# The Biography of Transformer

> Transformer is not a product, nor a single release from any company. It is an architecture for processing sequences: one that lets every token see every other token directly, then scales that capability all the way up. Born in 2017 for machine translation, within a few years it became the shared foundation for language models, image generation, and multimodal systems alike.

---

## I. Technical Background

Before Transformer, sequence modeling relied primarily on RNN, LSTM, and GRU. These models read text sequentially: first the first word, then the second, with each state depending on the previous one. This approach mirrors how humans read sentences, but it is unfriendly to machine training. The longer the sentence, the more information attenuates during transmission; training is also difficult to parallelize, because computing the 100th word requires waiting for the first 99 to be processed.

Attention mechanisms existed before Transformer. In 2014, Bahdanau et al. introduced attention in neural machine translation, allowing the decoder to look back at different parts of the input sentence when generating each word; in 2015, Luong et al. further refined the approach. At that time, attention was more like an auxiliary tool bolted onto RNN, not the backbone. [^1][^2]

In June 2017, eight authors from Google Brain and Google Research published "Attention Is All You Need." The paper proposed: no recurrence, no convolution—use attention alone to model sequences. This claim may sound like a bold provocation, but it was really an exercise in subtraction. Transformer removed the recurrent structure that most slowed training and most hindered scaling, leaving behind self-attention that could be parallelized, stacked deep, and scaled up. [^3]

---

## II. Core Innovations

### 2.1 Self-attention: letting all tokens see each other directly

The core of Transformer is self-attention. Every token in the input sequence is projected into three sets of vectors: Query, Key, and Value. The model computes relevance using Query and Key, then uses these weights to aggregate Value. In plain terms, every token asks: which positions in this sentence are relevant to me?

This design solved two fundamental cracks in RNN. First, distance is no longer a hard barrier. The beginning and end of a sentence can establish a relationship within a single attention layer, without traversing many steps of state propagation. Second, training can be parallelized. All pairwise relationships can be computed in one pass, rather than waiting timestep by timestep.

The paper uses scaled dot-product attention, with the core formula `softmax(QK^T / √d_k)V`. Dividing by `√d_k` prevents the dot products from becoming too large, which would push softmax into a region with vanishingly small gradients. This detail is inconspicuous but critical for stable training. [^3]

### 2.2 Multi-head attention: not looking at just one kind of relationship

A single attention head can only observe relationships from one representational subspace. Transformer splits attention into multiple heads computed in parallel, then concatenates the results. This way, the model can simultaneously learn different types of connections: some heads track syntax, others track coreference, others capture local collocations, and still others capture long-range dependencies.

The value of multi-head attention lies not in mystique but in division of labor. A large problem is decomposed into multiple small perspectives, then recombined. Later language models, vision Transformers, and multimodal models mostly inherit this design.

### 2.3 Positional encoding: adding order to orderless attention

Self-attention is inherently oblivious to order. If we look only at the attention matrix, "I hit you" and "you hit me" would be nearly indistinguishable. Transformer therefore adds positional encoding to inject each token's position in the sequence into the model.

The original paper uses sinusoidal positional encoding. Later models have produced many variants: learnable positional embeddings, relative positional encoding, RoPE, and others. The methods keep changing, but the problem remains the same: attention handles relationships, positional encoding handles order. Without order, both language and images lose their skeleton.

### 2.4 Key data

| Metric | Value | Notes |
|--------|-------|-------|
| Paper publication date | 2017-06-12 | arXiv:1706.03762 [^3] |
| Original model architecture | Encoder-Decoder | Targeted at machine translation |
| Transformer base | ~65M parameters | Reported in the original paper, used for WMT 2014 English-German translation [^3] |
| Transformer big | ~213M parameters | Reported in the original paper, used for WMT 2014 English-German/English-French translation [^3] |
| Core complexity property | Self-attention path length per layer is O(1) | More favorable for long-range dependencies and parallel training compared to recurrent structures [^3] |

We do not force later closed-source model parameters into this table. Frontier models such as GPT-4 and Gemini have not disclosed reliable parameter counts; rumors may serve as industry discussion leads, but cannot be treated as historical fact.

---

## III. Impact and Legacy

### 3.1 2018: The divergence of BERT and GPT

Transformer quickly split into two main paths.

One was the GPT path. In June 2018, OpenAI released GPT-1, using a Transformer decoder for generative pre-training, then fine-tuning on downstream tasks. Its parameter count was 117M, trained on BooksCorpus. GPT-1 was not the most dazzling model of its year, but it laid down what would become the most consequential direction: using a decoder-only Transformer to predict the next token. [^4]

The other was the BERT path. In October 2018, Google released BERT, using a Transformer encoder for bidirectional language understanding. BERT-base had 110M parameters; BERT-large had 340M parameters. It was pre-trained via masked language modeling and next sentence prediction, setting new results across multiple NLP understanding tasks. [^5]

This divergence was significant. BERT was better at "reading"—suited for understanding, classification, retrieval, and extraction; GPT was better at "writing"—suited for generation, dialogue, code, and tool use. In 2018, BERT's benchmarks were more impressive; after 2022, the GPT path became the main gateway through which the public encountered AI. Neither path disappeared entirely; they simply assumed different positions: BERT-style encoders sank into search and retrieval systems, while GPT-style decoders took center stage in generative AI.

### 3.2 2019–2020: Scale becomes the main thread

In 2019, GPT-2 scaled GPT-1 up to 1.5B parameters. Its technical report, titled "Language Models are Unsupervised Multitask Learners," focused not on a new module but on demonstrating that larger language models could perform translation, summarization, question answering, and other tasks under zero-shot conditions. OpenAI adopted a staged release strategy at the time, initially releasing only smaller models, citing concerns about misuse. [^6]

That same year, NVIDIA's Megatron-LM demonstrated methods for training even larger Transformer language models using model parallelism; Google's T5 unified many NLP tasks into a text-to-text format and trained up to 11B parameters. Together, these works demonstrated something important: Transformer was not just an architecture, but an engineering framework capable of consuming ever more compute and data. [^7][^8]

In 2020, Kaplan et al. published scaling laws for neural language models, systematically studying the power-law relationships among model scale, data volume, compute, and loss. It provided the industry with a simple but powerful belief: as long as data, parameters, and compute continued to increase, performance would improve along a predictable trend. [^9]

That same year, OpenAI released GPT-3. 175B parameters, decoder-only Transformer; the paper demonstrated extensive task performance under few-shot, one-shot, and zero-shot settings. GPT-3 did not win through a new architecture—it pushed Transformer scale to a position that few teams could reach at the time. It turned "keep scaling" from a research hypothesis into an industrial roadmap. [^10]

This history has a fissure: scale is not free. The larger the parameters, the higher the training costs, data governance requirements, inference latency, and deployment barriers. In 2022, DeepMind's Chinchilla paper added a further caveat: under a fixed compute budget, model parameters and training tokens must be balanced; piling on parameters without sufficient data is a waste of compute. [^11]

### 3.3 After 2022: From language to images and multimodality

Transformer was born for machine translation, but its true vitality lies in "tokenization." As long as an object can be segmented into a sequence, text can be tokens, code can be tokens, image patches can be tokens, and audio frames can be tokens.

The turning point in the visual domain was Vision Transformer. In 2020, Dosovitskiy et al. proposed splitting images into fixed-size patches and feeding them into a Transformer just like words. ViT demonstrated that convolution is not the only backbone for visual models—a Transformer on large-scale data can process images equally well. [^12]

In 2021, OpenAI released CLIP, which used natural language supervision to align images and text into a shared representational space. CLIP itself is not a conversational model, but it made "controlling visual models with text" feasible. Subsequent text-to-image systems, image-text retrieval, and multimodal understanding all benefited enormously from this image-text alignment approach. [^13]

After 2022, diffusion models brought image generation to the public eye. Stable Diffusion, released in August 2022, adopted the latent diffusion approach proposed by Rombach et al., with text conditioning typically relying on the CLIP text encoder; it is not a pure Transformer system, yet it reveals a larger picture: Transformer has evolved from a standalone model into a critical component within multimodal pipelines. [^14][^19]

In 2023, GPT-4 was released, supporting image input and text output. OpenAI did not disclose model parameters or training details, but the fact that "a language model can see images" itself changed the default definition of a frontier model: knowing only text was no longer enough—a model had to handle images, charts, screenshots, and handwritten content. [^15]

At the end of 2023, Google released Gemini 1.0, claiming it was natively multimodal by design, capable of processing text, images, audio, video, and code. In 2024, OpenAI released GPT-4o, emphasizing end-to-end real-time interaction across text, audio, and images; that same year, Sora extended the Transformer approach into video generation narratives. [^16][^17][^18]

These successors are not all "simple stacking of the original Transformer." Diffusion, MoE, retrieval augmentation, reinforcement learning, visual encoders, and audio encoders have all been incorporated. But the underlying idea remains clear: decompose the world into computable representations, and let the model learn relationships across vast amounts of context. Transformer's transformation from an NLP architecture into a universal modeling language rests on this principle.

### 3.4 Decline or absorption

By 2026, Transformer has not truly declined. Many of its local components have been replaced, and it has faced challenges from state space models, linear attention, and hybrid architectures, but the backbone of frontier large models still largely revolves around Transformer or its variants.

The domain where it has been most thoroughly absorbed is one where people no longer even mention it as an "innovation." When new models are released, unless the architecture is markedly different, some form of Transformer is the default. When a technology goes from paper titles to default background, that is not a loss of status—it has become the foundation.

---

## Commentary

Transformer's historical significance lies not in being the first to propose attention, but in having the audacity to elevate attention into the backbone and remove the recurrent structure.

This is a rare kind of engineering intuition: less structure actually leaves more room for scale. RNN is like a narrow road—passable, but unable to accommodate a convoy; Transformer is like widening the road, letting data, compute, and parameters flood in together. The 2018 divergence of BERT and GPT proved it could support both understanding and generation; the 2019–2020 scaling proved it could grow stronger with scale; the post-2022 expansion into images and multimodality proved it was not limited to language.

It also left fissures. The computational cost of attention, the price of long context, data bias, and the opacity of closed-source models—none of these are trivial. But those who have spent a decade building a city know that a foundation is not defined by the absence of cracks; it is defined by its ability to bear weight even when cracks appear. Transformer is precisely such a foundation: imperfect, yet it has borne the heaviest stretch of history in the large language model era.

---

*This entry was compiled by the Endfield Industrial Chronicle team: Zhuang Fangyi (lead author).*

---

[^1]: Bahdanau, Cho, Bengio, "Neural Machine Translation by Jointly Learning to Align and Translate", arXiv:1409.0473, 2014. https://arxiv.org/abs/1409.0473
[^2]: Luong, Pham, Manning, "Effective Approaches to Attention-based Neural Machine Translation", arXiv:1508.04025, 2015. https://arxiv.org/abs/1508.04025
[^3]: Vaswani et al., "Attention Is All You Need", arXiv:1706.03762, 2017-06-12. https://arxiv.org/abs/1706.03762
[^4]: Radford et al., "Improving Language Understanding by Generative Pre-Training", OpenAI, 2018-06-11. https://openai.com/research/language-unsupervised
[^5]: Devlin et al., "BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding", arXiv:1810.04805, 2018-10-11. https://arxiv.org/abs/1810.04805
[^6]: Radford et al., "Language Models are Unsupervised Multitask Learners", OpenAI, 2019-02-14. https://openai.com/research/better-language-models
[^7]: Shoeybi et al., "Megatron-LM: Training Multi-Billion Parameter Language Models Using Model Parallelism", arXiv:1909.08053, 2019. https://arxiv.org/abs/1909.08053
[^8]: Raffel et al., "Exploring the Limits of Transfer Learning with a Unified Text-to-Text Transformer", arXiv:1910.10683, 2019. https://arxiv.org/abs/1910.10683
[^9]: Kaplan et al., "Scaling Laws for Neural Language Models", arXiv:2001.08361, 2020. https://arxiv.org/abs/2001.08361
[^10]: Brown et al., "Language Models are Few-Shot Learners", arXiv:2005.14165, 2020-05-28. https://arxiv.org/abs/2005.14165
[^11]: Hoffmann et al., "Training Compute-Optimal Large Language Models", arXiv:2203.15556, 2022-03-29. https://arxiv.org/abs/2203.15556
[^12]: Dosovitskiy et al., "An Image is Worth 16x16 Words: Transformers for Image Recognition at Scale", arXiv:2010.11929, 2020. https://arxiv.org/abs/2010.11929
[^13]: Radford et al., "Learning Transferable Visual Models From Natural Language Supervision", arXiv:2103.00020, 2021. https://arxiv.org/abs/2103.00020
[^14]: Rombach et al., "High-Resolution Image Synthesis with Latent Diffusion Models", arXiv:2112.10752, 2021. https://arxiv.org/abs/2112.10752
[^15]: OpenAI, "GPT-4", 2023-03-14. https://openai.com/research/gpt-4
[^16]: Google, "Introducing Gemini: our largest and most capable AI model", 2023-12-06. https://blog.google/technology/ai/google-gemini-ai/
[^17]: OpenAI, "Hello GPT-4o", 2024-05-13. https://openai.com/research/hello-gpt-4o
[^18]: OpenAI, "Video generation models as world simulators", 2024-02-15. https://openai.com/research/sora
[^19]: Stability AI, "Stable Diffusion Public Release", 2022-08-22. https://stability.ai/news/stable-diffusion-public-release
