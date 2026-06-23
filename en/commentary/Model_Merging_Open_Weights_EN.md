# Model Merging and the Future of Open Weights

> When anyone can average two models' weights, compute differences, and select optimal layers, the concept of "a model" begins to collapse. A model is no longer an indivisible whole but a collection of parts that can be disassembled, reassembled, and mixed. This is not the victory of open source — it is an identity crisis for "the model."

## I. Model merging: A new way to acquire capabilities without training

Traditionally, acquiring a new large language model capability had only one path: training. You collect data, design architecture, tune parameters, spend compute, and wait. This path is expensive, lengthy, and uncertain in outcome.

Starting in 2023, a completely different approach began to gain popularity: **model merging.** Its logic is extremely simple — if you have two or more already-trained models, instead of training a new one, you perform mathematical operations directly on their weights, "blending" them into a new model.

The most basic merging method is linear interpolation: for two models A and B, take a weighted average of each parameter to obtain model C = αA + (1-α)B. This has precedent in traditional machine learning — Stochastic Weight Averaging (SWA) is a simple weight-averaging technique.[^1] But applying it to large-scale language models and discovering that merged models can inherit capabilities from both "parent models" was a 2023 discovery.

In May 2023, a group of independent researchers released TIES-Merging (Trim, Elect Sign, Merge), a more refined merging method: first prune small-magnitude parameter changes, then resolve sign conflicts, then merge.[^2] In November of the same year, another group proposed DARE (Drop And REscale), which reduces interference during merging by randomly dropping most delta parameters and rescaling.[^3] In 2024, Sakana AI proposed Evolutionary Model Merge, using evolutionary algorithms to automatically search for optimal inter-layer merging strategies.[^4]

The shared assumption of these methods is: **a model's knowledge can be decomposed.** Different models' parameters are not a monolithic slab but more like fabric that can be cut and pieced together.

## II. Ghosts on the Hugging Face Leaderboard

The real-world impact of model merging was most directly visible on Hugging Face's Open LLM Leaderboard.

From late 2023 to 2024, "merged models" began appearing in large numbers on the leaderboard — they had no original training data, no pre-training or fine-tuning process of their own; they were simply the result of mathematical operations on several open-source models' weights. The most famous were the "cognitivecomputations" series and various community contributors' merged models produced with the mergekit tool.[^5]

These merged models sometimes shone on specific benchmarks — even surpassing any single "parent model." This sparked heated debate: **does a model with no training process "truly possess" the capabilities it demonstrates on benchmarks?**

The opposing argument is intuitive: merging is merely mathematical operation and produces no new knowledge. If model A excels at mathematics and model B at language, the merged model C regresses to mediocre on both — this is not capability synthesis but capability dilution.

The supporting argument is more nuanced: in the parameter space of modern large language models, different capabilities are distributed across different subspaces. If a merging method can precisely preserve model A's mathematical subspace and model B's language subspace while suppressing interference between them, merging can indeed produce a model that is sufficiently good on both dimensions. This is not "without training" but "using the structure of parameter space to substitute for the training process."[^6]

This debate remains unresolved. But one fact is now irreversible: **in the world of open-source models, "a model" is no longer an atomic entity but disassemblable, reassemblable parts.**

## III. When weights become Lego bricks: The license dilemma

Model merging poses an unprecedented question for the open-source license system.

In July 2023, Meta released Llama 2 with a license permitting commercial use but with several conditions — including requiring separate authorization for products with over 700 million monthly active users.[^7] This license was itself not "open source" in the traditional OSI sense. But it allowed downloading weights, fine-tuning, and redistribution, effectively giving the community enormous room to operate.

The problem is: when you merge a model under the Llama 2 license with a model under the Apache 2.0 license, what license applies to the output model?

Traditional software licensing logic is built on the premise that "code is divisible" — if you reference a GPL library, your entire codebase is GPL-bound. But model merging is not "referencing." It is mathematical operation at the parameter level. In a merged model, you cannot distinguish which parameters came from parent model A and which from parent model B. This is not code linking — it is molecular-level fusion.

This pushes the entire license system into a gray zone. Creative Commons' "derivative works" definition, GPL's "copyleft" logic, Apache's "license retention" requirements — all of these frameworks fail before model merging. Because whether a merged model is legally a "derivative work" has no precedent to answer.

In October 2024, the Open Source Initiative (OSI) released the Open Source AI Definition (OSAID) 1.0, attempting to draw a line for "what is open source AI." OSAID requires: an open-source AI system must disclose training data, training code, model weights, and evaluation code, and the license must not restrict use cases.[^8] This definition excluded many models that self-identified as "open source" — including the Llama series (training data not fully disclosed) and the Mistral series (license restricts competitive use).

OSAID's intentions are good, but the reality it faces is: **the practice of open-source AI has far outpaced the definition.** The community is already merging, distilling, fine-tuning, and quantizing; it has already begun using models as Lego bricks. Definitions cannot keep up with practice.

## IV. The dissolution of model identity

The deeper question model merging raises is not a licensing question but an **ontological question**: what is "a model"?

In the GPT-3 era, "a model" had clear boundaries — it was a set of weights trained by OpenAI using a specific dataset, on a specific architecture, with specific compute. You downloaded it, deployed it, called it. It had a name, a version number, a release date.

But in the open-source merging era:

- Model A (Llama 3 70B) and Model B (a fine-tuned Mistral 7B) are merged to produce Model C.
- Model C is merged with Model D (another Qwen-based fine-tune) to produce Model E.
- E is quantized and distilled to 7B parameters to produce Model F.
- F is domain fine-tuned by some company to produce Model G.

**Who is Model G?** It has five "ancestors," its parameters come from four different architecture families, and its capabilities are the overlay of multiple merges, distillations, and fine-tunings. Giving it a name and version number is a convenient simplification — but not the truth.

This is not academic hair-splitting. When model capabilities become so decomposable, reassemblable, and transferable, the relationship between "who trained this model" and "who is responsible for this model's behavior" becomes blurred. If a model produced through merging exhibits harmful behavior in a specific scenario, who bears the responsibility? The original trainer? The merger? The fine-tuner? The deployer?

The "fork" logic of traditional software does not fully apply here. After a software fork, the code is still readable and auditable. After a model merge, the parameters are unreadable — no one can read weights to determine why a model produces harmful output for a specific input.

## V. Dialectic: Model merging is both deconstruction and democratization

The duality of model merging must be acknowledged simultaneously.

**The positive**: Model merging lowers the threshold for "owning a good model" from "training a model" to "downloading several models and doing math." For researchers, startups, and individual developers lacking large-scale compute, this is genuine capability democratization. You don't need an A100 cluster, don't need a 100,000-GPU training budget — you just need a machine large enough to run the merge script. Tools like mergekit reduce the process to a single command.[^5]

**The negative**: Model merging also makes the provenance of capabilities untraceable. When a merged model is used in sensitive scenarios — healthcare, law, military — its capability origin, bias distribution, and safety characteristics become difficult to audit. You don't know which parent model's biases it inherited, you don't know whether the merging process accidentally weakened some safety guard.

At a deeper level: model merging is devaluing "model brands." When users discover they can merge a model that performs as well as GPT-4 on specific tasks but is free, "GPT-4" as a brand shifts from "a uniquely powerful model" to "one of many optional bases." This accelerates the commodification of models — echoing the price war discussed in the previous chronicle.

## Commentary

The rise of model merging is not a technical breakthrough but a change in production relations. Its significance does not lie in how sophisticated the merging algorithm is — linear interpolation is middle-school mathematics — but in its shattering of the default assumption that "a model is a whole."

When models can be disassembled, pieced together, and blended, the intellectual property systems, safety evaluation systems, and brand trust systems built around models all face fundamental challenges. Licenses cannot answer "whose is a merged model"; benchmarks cannot answer "is a merged model's capability reliable"; and users cannot understand a merged model's internal logic through any readable means.

This is a structural paradox of the large language model era: we have always pursued better models, but when "better" shifts from "training a better model" to "merging existing models," the concept of "a model" itself becomes unstable. Open source is not the destroyer — it merely reveals the contradiction: **we never truly understood why these parameters work, and model merging ensures we can no longer pretend we do.**

---

*This piece was compiled by the Endfield Industrial Historical Archives team: Fu Xuan (lead historical commentary).*

---

[^1]: Izmailov et al., "Averaging Weights Leads to Wider Optima and Better Generalization", UAI 2018. arXiv:1803.05407
[^2]: Yadav et al., "TIES-Merging: Resolving Interference When Merging Models", NeurIPS 2023. arXiv:2306.01708
[^3]: Yu et al., "Language Models are Super Mario: Absorbing Abilities from Homologous Models as a Free Lunch", ICML 2024. arXiv:2311.03099
[^4]: Akiba et al., "Evolutionary Optimization of Model Merging Recipes", Sakana AI, 2024-03-19. arXiv:2403.13187
[^5]: mergekit by Charles Goddard, GitHub repository. https://github.com/arcee-ai/mergekit; see the growing proportion of merged models on the Hugging Face Open LLM Leaderboard.
[^6]: See Peft library and model merging community discussions. Matena & Raffel, "Merging Models with Fisher-Weighted Averaging", NeurIPS 2022. arXiv:2111.09832
[^7]: Meta AI, "Llama 2 Community License Agreement", 2023-07-18. https://ai.meta.com/llama/license/
[^8]: Open Source Initiative, "Open Source AI Definition 1.0", 2024-10-28. https://opensource.org/ai/definition
