# The Biography of PaLM

> PaLM was not Google's first large language model, but it was the first time Google pushed "large" to its extreme. 540B parameters, 6,144 TPU v4 chips, 780B tokens—these numbers themselves are not what matters; what matters is that with this compute, PaLM proved two things: when a model is large enough, few-shot can approach human performance; and Chain-of-Thought can unlock reasoning ability. After PaLM, Google's large model trajectory shifted entirely to Pathways.

---

## I. Technical Background

After GPT-3's release in 2020, Google faced an awkward situation: Transformer was invented by Google Brain, but the spotlight for few-shot learning was stolen by OpenAI. GPT-3, with 175B parameters, demonstrated the "large model + large data = general capability" paradigm, while Google's largest language model at the time was T5-11B—only 11 billion parameters, less than a tenth of GPT-3. [^1]

Google was not lacking in compute; it lacked the architecture to concentrate compute on a single model. The mainstream approach before 2020 was "data parallelism"—splitting the same batch of data across multiple GPUs, each holding a complete copy of the model. This approach's efficiency dropped sharply when models exceeded tens of billions of parameters, because the model itself could not fit into a single card's memory, necessitating complex model parallelism strategies.

In 2021, Google proposed the **Pathways** architecture—a new distributed training system aiming to "make thousands of accelerators work as one." [^2] Pathways' core innovation was **mixed scheduling of model parallelism + pipeline parallelism + data parallelism**, enabling different compute nodes to process different parts of the model while simultaneously handling different data. This architecture solved the engineering problem of "how to train a 500B+ parameter model on thousands of TPUs."

PaLM was Pathways' first "graduation project."

---

## II. Core Events

### 2.1 PaLM 540B (2022-04): Google's parameter peak

On April 4, 2022, Google Research published the paper "PaLM: Scaling Language Modeling with Pathways," unveiling the PaLM model family. [^3]

PaLM came in three versions: 8B, 62B, and 540B. The largest 540B version had **540 billion parameters**, trained on **780 billion tokens** (from English web pages, books, Wikipedia, GitHub code, dialogue data, etc.), using **6,144 TPU v4 chips** for training. [^3]

This was the largest dense language model publicly known at the time. The closest competitor was NVIDIA and Microsoft's jointly trained Megatron-Turing NLG (530B), with slightly fewer parameters than PaLM. [^4]

PaLM 540B set new state-of-the-art results on 28 of 29 evaluation benchmarks, spanning question answering, commonsense reasoning, reading comprehension, translation, code generation, and other tasks. More critically, it demonstrated astonishing **few-shot learning ability**: on many tasks, given just a few examples, PaLM could match or even exceed fine-tuned specialized models. [^3]

### 2.2 Chain-of-Thought: the reasoning breakthrough

In January 2022, Google's Jason Wei et al. published "Chain-of-Thought Prompting Elicits Reasoning in Large Language Models," proposing a new prompting method: in few-shot examples, provide not only the final answer but also intermediate reasoning steps. [^5]

The effect on PaLM 540B was stunning: on GSM8K (grade-school math), standard few-shot prompting achieved approximately 18% accuracy; adding Chain-of-Thought boosted accuracy to **57%**. [^5] On some tasks, Chain-of-Thought prompting even enabled PaLM 540B to surpass models fine-tuned on large volumes of annotated data.

More surprisingly, Chain-of-Thought ability appeared to be an "emergent ability" unique to large models—virtually ineffective on smaller models (GPT-3 175B's few-shot was about 15%), suddenly appearing only when model parameters exceeded a certain threshold (approximately 100B). [^5] This finding directly triggered extensive subsequent research on "emergent abilities," and proved that "scale" itself can bring qualitative change.

### 2.3 PaLM 2 (2023-05): a more efficient next generation

On May 10, 2023, Google unveiled PaLM 2 at Google I/O. [^6] Unlike PaLM 1's "brute-force parameter stacking," PaLM 2 focused on **efficiency**—better data, better training methods, achieving better results with fewer parameters.

PaLM 2's technical details were sparsely disclosed (Google did not publish a complete technical paper), but from public information several key changes can be assembled:

- **More and better training data**: PaLM 2's training data was far more extensive than PaLM 1's, with more non-English data (supporting 100+ languages) and mathematics/science data. [^6]
- **More efficient architecture**: Specific parameter count was not disclosed, but multiple sources estimated PaLM 2's largest version at between 340B and 540B, with training efficiency far exceeding PaLM 1. [^7]
- **Improved reasoning**: Substantially surpassing PaLM 1 on mathematical reasoning (MATH), code generation (HumanEval), scientific reasoning, and other tasks. [^6]

PaLM 2 was the technical foundation of **Bard** (Google's conversational AI product, later renamed Gemini). When users interacted with Bard in 2023, PaLM 2 was running behind the scenes. [^6]

### 2.4 From PaLM to Gemini: the evolution of the technical roadmap

On December 6, 2023, Google released Gemini 1.0, marking the formal conclusion of the PaLM era. [^8] Gemini was no longer a pure language model—it was a **natively multimodal model**, trained from the start on joint text, image, audio, video, and code data.

Gemini 1.0 came in three versions: Ultra, Pro, and Nano. Gemini Ultra was the first to surpass human experts on MMLU (90.0% vs human 89.8%), outperforming GPT-4 on 30 of 32 evaluation benchmarks. [^8]

The evolution from PaLM to Gemini:

| Version | Date | Key changes |
|---------|------|-------------|
| PaLM 540B | 2022-04 | Pathways architecture, 540B parameters, few-shot SOTA |
| PaLM 2 | 2023-05 | Efficiency optimization, multilingual, reasoning, Bard foundation |
| Gemini 1.0 | 2023-12 | Natively multimodal, surpassing GPT-4 |
| Gemini 1.5 | 2024-02 | Million-token context, MoE architecture |
| Gemini 2.0 | 2024-12 | Native tool use, agent capabilities |

PaLM's technical legacy—Pathways distributed training, Chain-of-Thought reasoning, emergent abilities from scale—was all inherited and further developed by Gemini.

---

## III. Impact and Legacy

### 3.1 The reasoning revolution sparked by Chain-of-Thought

Chain-of-Thought's impact extends far beyond PaLM itself. After 2022, "reasoning" became one of the core themes of large model research:

- **Zero-shot CoT** (2022-05): Kojima et al. discovered that simply adding "Let's think step by step" to a prompt could activate Chain-of-Thought reasoning, without few-shot examples. [^9]
- **Self-Consistency** (2023-03): Wang et al. proposed sampling multiple chains of thought and voting, further improving reasoning accuracy. [^10]
- **Tree-of-Thought / Graph-of-Thought**: More complex reasoning frameworks introducing search and backtracking on top of Chain-of-Thought.
- **OpenAI o1** (2024-09): Transformed Chain-of-Thought from a "prompting trick" into an "intrinsic model capability," using reinforcement learning to teach models longer, deeper reasoning chains. [^11]

It is fair to say that without Chain-of-Thought's stunning performance on PaLM, the entire "reasoning augmentation" direction would not have developed.

### 3.2 Pathways: a paradigm shift in distributed training

PaLM's other important legacy is the **Pathways system itself.** Before PaLM, large model training primarily relied on Megatron-LM's (NVIDIA) model parallelism approach; after PaLM, Google's Pathways proved that "mixed parallelism" was the correct path for training ultra-large-scale models. [^2]

Pathways' design philosophy—enabling different compute nodes to process different parts of the model while simultaneously handling different data—was later adopted by multiple systems. Google's own subsequent models (the entire Gemini series) were trained on Pathways; other companies' distributed training frameworks (such as DeepSpeed, FSDP) also gradually introduced similar mixed parallelism strategies.

### 3.3 The technological cornerstone of the Bard/Gemini product line

PaLM's most direct successor was **Bard** (released March 2023, later renamed Gemini). [^12] Under pressure from ChatGPT, Google was forced to push the not-fully-prepared PaLM 2 to the public; Bard's underwhelming early performance became a laughingstock. But Google quickly replaced Bard's underlying model with Gemini, and in February 2024 officially renamed Bard to Gemini. [^13]

From a product perspective, PaLM's value lay in proving that Google had the capability to train world-class large language models—it was just half a step behind OpenAI in the "model to product" conversion. This lesson profoundly influenced Google's subsequent AI product strategy—Gemini was designed from the start for both research and product.

---

## Commentary

PaLM's core contribution was using engineering prowess to prove the value of "scale": 540B parameters set new SOTA on 28 of 29 benchmarks, while Chain-of-Thought prompting's stunning performance on PaLM opened up the entire reasoning augmentation direction.

PaLM matters not only because it was a good model, but because it carried Google's architectural innovation—Pathways. While OpenAI trained the GPT series on Microsoft Azure's GPU clusters, Google chose the full-stack route of proprietary TPU + proprietary distributed system + proprietary model. This route's cost was less flexibility than the GPU ecosystem, but its advantage was the ability to train ultra-large-scale models that other companies could not. The PaLM → Gemini evolution proved the viability of this route.

PaLM's historical position must be understood within a larger context: it was Google's critical turning point from "Transformer inventor" to "large model competitor." Before PaLM, Google's large model strategy was wavering; after PaLM, Google established the "Pathways + TPU + multimodal" technical route, leading all the way to Gemini. Without PaLM's success, Google would not have had competitiveness in the large model era. PaLM was Google AI's "Battle of Midway"—not the final victory, but proof that it had the capability to fight this war.

---

*Silence (chronicle lead author)*

---

[^1]: Raffel et al., "Exploring the Limits of Transfer Learning with a Unified Text-to-Text Transformer", arXiv:1910.10683, 2019-10-23. https://arxiv.org/abs/1910.10683
[^2]: Dean et al., "Pathways: Autoregressive Text Generation with Large Language Models", Google AI Blog, 2022-03-29. https://blog.google/technology/ai/introducing-pathways-next-generation-ai-architecture/
[^3]: Chowdhery et al., "PaLM: Scaling Language Modeling with Pathways", arXiv:2204.02311, 2022-04-04. https://arxiv.org/abs/2204.02311
[^4]: Smith et al., "Using DeepSpeed and Megatron to Train Megatron-Turing NLG 530B, A Large-Scale Generative Language Model", arXiv:2201.11990, 2022-01-24. https://arxiv.org/abs/2201.11990
[^5]: Wei et al., "Chain-of-Thought Prompting Elicits Reasoning in Large Language Models", arXiv:2201.11903, 2022-01-10. https://arxiv.org/abs/2201.11903
[^6]: Google, "PaLM 2 Technical Report", arXiv:2305.10403, 2023-05-10. https://arxiv.org/abs/2305.10403
[^7]: Wiggers, K., "Google's PaLM 2 language model reportedly trained on almost five times more data than its predecessor", TechCrunch, 2023-05-17. https://techcrunch.com/2023/05/17/googles-palm-2-language-model-reportedly-trained-on-almost-five-times-more-data-than-its-predecessor/
[^8]: Gemini Team, "Gemini: A Family of Highly Capable Multimodal Models", arXiv:2312.11805, 2023-12-06. https://arxiv.org/abs/2312.11805
[^9]: Kojima et al., "Large Language Models are Zero-Shot Reasoners", arXiv:2205.11916, 2022-05-24. https://arxiv.org/abs/2205.11916
[^10]: Wang et al., "Self-Consistency Improves Chain of Thought Reasoning in Language Models", arXiv:2203.11171, 2023-03-07. https://arxiv.org/abs/2203.11171
[^11]: OpenAI, "Learning to Reason with LLMs", OpenAI Blog, 2024-09-12. https://openai.com/index/learning-to-reason-with-llms/
[^12]: Google, "An important next step on our AI journey", The Keyword, 2023-03-21. https://blog.google/technology/ai/bard-google-ai-search-updates/
[^13]: Google, "Bard is now Gemini", The Keyword, 2024-02-08. https://blog.google/technology/ai/google-gemini-ai-update-february-2024/
