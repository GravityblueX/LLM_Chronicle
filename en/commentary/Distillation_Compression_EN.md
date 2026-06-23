# Knowledge Distillation and Model Compression

> Knowledge distillation is the quietest through-line in the history of large language models. It does not make headlines, does not crater market capitalizations, does not entangle geopolitics — until February 2026, when Anthropic used "distillation attacks" to push this 2015 vintage technology onto the front page of national security. From the naive idea in Hinton's lab to the industrialized distillation pipeline of DeepSeek-R1, the road knowledge distillation has traveled is a chronicle of "the same mathematics, different accusations."

## I. Hinton's distillation: A patented-less naive idea

In 2015, Geoffrey Hinton, Oriol Vinyals, and Jeff Dean submitted a paper to arXiv titled "Distilling the Knowledge in a Neural Network."[^1] The idea was extremely simple: a large model's (called the "teacher") softmax output contains not only the "correct answer" — its probability distribution over all incorrect options also carries the teacher's "dark knowledge" about the similarities and distinctions among options. If a small model (called the "student") is trained to fit the teacher's complete probability distribution rather than merely the training data's one-hot labels, the student can learn richer structure than what the original training data provides.

The importance of this idea lies not in its mathematical depth — softmax with temperature parameter, KL divergence as loss function, basic operations in machine learning — but in its alteration of a default assumption: **training signals do not necessarily have to come from annotated data; they can also come from another model.**

In Hinton's paper, this was a purely academic exploration. The problem it addressed was "how to fit a large model into a phone," not "how to extract capability from someone else's model." The paper's title uses "distilling" — distilling knowledge from a large model, like distilling essence from a solution. The metaphor itself carries the premise that "the knowledge in a large model is refined, concentrated."

Over the following decade, knowledge distillation was widely applied in image recognition, speech recognition, and NLP. From ResNet to BERT to GPT, whenever you wanted to push a behemoth model to edge devices, distillation was practically the only path. Together with quantization, pruning, and low-rank decomposition, it formed the model compression triad. At this stage, distillation was "engineering optimization" — no one saw it as having any ethical dimension.

## II. Distillation enters the large model era: From compression to transfer

Entering the Transformer era, distillation's role quietly expanded. In the BERT era (2018–2019), DistilBERT used distillation to compress a 340M BERT-base to 66M while retaining 97% of downstream task performance.[^2] This still fell within "deployment optimization."

But by 2023–2024, distillation began assuming a different role: **capability transfer.** Using high-quality large model outputs to train high-quality small models.

DeepSeek-R1's January 2025 release, alongside the open-source 660B main model, simultaneously released 6 distilled small models (1.5B to 70B parameters).[^3] This was not "compression" — it was **knowledge transfer.** DeepSeek used R1's reasoning chain outputs as teacher signals to fine-tune Qwen and Llama series small base models, enabling these small models to directly surpass OpenAI o1-mini on mathematics and programming tasks. A 32B distilled model achieved 70% or more of the 660B main model's reasoning capability — within Hinton's original framework, a normal distillation effect.

But a subtle change occurred here: the teacher model's "dark knowledge" in conventional tasks is the fine structure of probability distributions — whereas in reasoning models (like R1, o1), the "dark knowledge" is **the chain of thought itself.** Distilling a reasoning model means distilling its way of thinking, not just its answers.

This introduces the core duality of distillation in the large model era: **distillation can be teaching, or it can be copying.**

- If you distill your own model — letting the large R1 teach the small Qwen — that is teaching.
- If you distill someone else's model — using API outputs to fine-tune your own base model — that is copying.

The mathematical operations of the two are identical. The only difference is the source of the teacher model. And this distinction has no clear legal or moral boundary — Hinton never patented distillation; this technology belongs to no one.

## III. The distillation attack: A February 2026 storm

On February 23, 2026, Anthropic publicly accused three Chinese AI companies — DeepSeek, Moonshot AI, and MiniMax — of conducting "industrial-scale model distillation attacks" through approximately 24,000 fake accounts engaging in over 16 million conversations with Claude.[^4]

There are three layers of issues here, which must be distinguished.

**First, technical distillation is an objective reality.** Collecting model outputs through an API and using those outputs to fine-tune your own model is technically feasible and has been widely practiced across the entire industry. Anthropic itself uses interaction data from third-party API users to improve its own models, unless terms explicitly prohibit it. Distillation is not hacking — it is simply another use of the API.

**Second, scale is the key variable.** Hinton's original distillation used one teacher to teach one student — a one-to-one teacher-student relationship. Anthropic's description of "24,000 accounts, 16 million conversations" is industrial-scale — a massive "student army" simultaneously questioning the same teacher. This is no longer a teacher-student relationship but systematic capability extraction. It touches upon an implicit assumption of the API business model: the API business model assumes users employ the model to process their own tasks, not to collect training data to replace that model.

**Third, no one has clean hands on the narrative battlefield.** Anthropic accuses others of "stealing model outputs," but Anthropic itself used 7 million books downloaded from pirate book websites when training Claude. Elon Musk mocked Anthropic as "MisAnthropic," writing: "How dare they steal what Anthropic stole from human programmers?" The Register's headline was more direct: *Anthropic accuses Chinese AI labs of ripping off content — just like it does.*[^5]

This is not to say distillation attacks are not a problem. It is to say that on the chain of legitimacy for AI training data, no hand is clean. Scraping training data from the internet, collecting model outputs from APIs, training models on copyrighted materials — these actions have no fundamental technical difference, only differences in legal narrative. Whoever holds the rights to training data gets to define what is "distillation" and what is "theft."

## IV. Model compression: From technology to strategy

The reason distillation deserves to be a historiographic topic is not merely that it was entangled in geopolitics, but that it underwent a strategic transformation between 2023 and 2026.

In this transformation, distillation shifted from "model optimization" to "model dissemination."

In the Hinton era, distillation's goal was **compression**: shrink the model, preserve capability, reduce deployment cost. In the DeepSeek era, distillation's goal became **dissemination**: batch-transfer core reasoning capability from large models to small models, bringing reasoning capability into full-spectrum deployment.

DeepSeek-R1's distillation strategy is the template for this new direction:[^3]

| Distilled Model | Base | Parameters | AIME 2024 |
|----------|------|------|:---:|
| R1-Distill-Qwen-1.5B | Qwen2.5-Math | 1.5B | 28.9% |
| R1-Distill-Qwen-7B | Qwen2.5-Math | 7B | 55.5% |
| R1-Distill-Qwen-14B | Qwen2.5 | 14B | 69.7% |
| R1-Distill-Qwen-32B | Qwen2.5 | 32B | 72.6% |
| R1-Distill-Llama-70B | Llama 3.3 | 70B | 70.0% |

A 1.5B distilled model achieves 28.9% on AIME — stronger than most undistilled 7B or even 13B models. Distillation transforms reasoning capability from "the monopoly of large models" into "a distributable commodity." And this is precisely what Anthropic fears most: if distillation can be this efficient, then any closed API's cutting-edge capabilities can be extracted, compressed, and distributed — the API business model's moat is porous before distillation.

## V. Why distillation is a historiographic question

Knowledge distillation deserves to be written as a historiographic essay not because of how many parameters, benchmarks, or performance leaps it has. But because in 2026 it exposed a fundamental, unresolved problem of the large model era:

**To whom does a model's capability belong?**

Training data scraped from the internet belongs to the writers, photographers, programmers — but the scrapers consider it "publicly accessible information." The model parameters trained from that data belong to the trainer — even though the parameters crystallize the former's labor. The outputs distilled from the model's API belong to the distiller — even though the outputs are synthetic products of the first two. The new model trained from the distilled outputs belongs to the new model's trainer — even though its capability chain, traced to its origin, is a series of contributions that cannot be clearly attributed.

This is an assembly line where **every link on the property chain is in a gray zone.**

When Hinton invented distillation in 2015, he could not have imagined that ten years later it would be wrapped in "national security" as justification for sanctions. Distillation is just mathematics — a model learning by fitting another model's outputs. But once mathematics enters the API business ecosystem, it becomes armed with legal vocabulary: "ownership," "authorization," "misuse," "theft." In API terms of service, "you may not use this model's outputs to train competing models" is a rule that can be written. But the feasibility and moral legitimacy of this rule both rest on the premise that "training data sources are traceable" — and the entire AI industry is built on the opposite premise.

This is distillation's historiographic position. It is not the most conspicuous technology in large language model history, but it sits at **the intersection of intellectual property, model capability, and geopolitics.** Distillation's legitimacy has not been resolved; it has merely been temporarily frozen by geopolitics.

## Commentary

Knowledge distillation in the history of large language models is an "ownerless tool." It belongs to no company, charges no fee, requires no authorization, needs no GPU cluster — it only requires input-output alignment between two models.

When Hinton invented it, he was thinking about "how to fit a large model into a phone." When DeepSeek used it, it was thinking about "how to distribute reasoning capability to developers worldwide." When Anthropic prohibited it, it was thinking about "how to protect our API business model."

The same technology, the same mathematical principle, three completely different narratives. The history of distillation is a microcosm of the AI industry's transformation from "academic community" to "property battlefield."

But the point that most needs to be remembered is this: **distillation's philosophical premise — that knowledge can be extracted and transferred from one model — itself implies that models are not people.** A person cannot distill their IQ to another person. A model can. Because a model's "knowledge" is not learning in the biological sense but compression and transmission of statistical patterns. In this sense, distillation is not theft — it is a natural corollary of the model's essential nature as an information compressor. You cannot "steal" a compression algorithm — you can only replicate it. And the AI industry is so nervous about distillation precisely because it knows: before the logic of the steam engine, fences cannot hold.

---

*This piece was compiled by the Endfield Industrial Historical Archives team: Fu Xuan (theoretical framework).*

---

(DeepSeek's distillation strategy and efficiency innovations are covered in *The DeepSeek Chronicle*.)

[^1]: Hinton, Vinyals & Dean, "Distilling the Knowledge in a Neural Network", arXiv:1503.02531, 2015-03-09. https://arxiv.org/abs/1503.02531
[^2]: Sanh et al., "DistilBERT, a distilled version of BERT: smaller, faster, cheaper and lighter", arXiv:1910.01108, 2019-10. https://arxiv.org/abs/1910.01108
[^3]: DeepSeek-AI, "DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning", arXiv:2501.12948, 2025-01-22. https://arxiv.org/abs/2501.12948
[^4]: Anthropic Blog, "Detecting and Preventing Distillation Attacks", 2026-02-23. https://www.anthropic.com/news/detecting-and-preventing-distillation-attacks
[^5]: Zhihu/DeepTech, "Anthropic accuses Chinese AI labs of distillation; Musk and the entire internet laughed", 2026-02-25. https://zhuanlan.zhihu.com/p/2010041136933250897
