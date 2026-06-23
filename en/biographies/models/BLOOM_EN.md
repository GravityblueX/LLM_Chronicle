# The Biography of BLOOM

> BLOOM (BigScience Large Open-science Open-access Multilingual Language Model, 2022-07) is a 176B-parameter open-source multilingual model jointly trained by over 1,000 researchers from more than 60 countries over a period of more than a year. It was not the most powerful language model—by the time of its release, it had already been surpassed by contemporary models PaLM and Chinchilla. But it answered a question that nobody had truly answered before: **can the academic community and open-source community independently train a frontier-scale large model?** The answer is yes. BLOOM's significance lies not in performance rankings, but in proving that a CERN-style distributed research model can operate in the AI field, laying the organizational groundwork and confidence for the subsequent full rise of the HuggingFace ecosystem and the open-source wave following the LLaMA leak.

---

## I. Technical Background

After GPT-3's release in 2020, the large model field faced a structural contradiction: the compute, data, and engineering capabilities required to train a frontier-scale language model had far exceeded what any individual researcher could bear. GPT-3's training consumed an estimated 3,640 petaFLOP-days of compute—equivalent to thousands of GPUs running for several months. [^1] Only a handful of leading companies—Google, OpenAI, NVIDIA—could do this.

Academia was not without attempts. EleutherAI—a volunteer-based open-source research collective—trained GPT-NeoX-20B in 2021, demonstrating the feasibility of community-collaborative language model training, but the 20B parameter scale remained an order of magnitude behind frontier models. [^2] The first core contradiction of the large model era was: **whoever can train frontier models defines the upper bound of capability; and the number of organizations that can train frontier models can be counted on one hand.**

Another background factor was multilingualism. GPT-3's training data was predominantly English, with very limited coverage of other languages. Even Google's PaLM, though claiming to cover multiple languages, still had an overwhelmingly high proportion of English in its training data. For billions of non-English speakers worldwide, large language models were a technology they could neither participate in nor be served by.

BLOOM was born in the gap between these two tensions: **can an open, collaborative approach train a truly multilingual, frontier-scale language model?**

---

## II. Core Events

### 2.1 BigScience: an unprecedented collaborative experiment

BigScience was an open research project led by Hugging Face, supported by France's Centre National de la Recherche Scientifique (CNRS), GENCI (France's national computing center), and multiple European academic institutions. [^3] The project began preparations in early 2021, assembling over 1,000 researchers from more than 60 countries and regions—drawn from natural language processing, machine learning, linguistics, law, ethics, sociology, and other disciplines.

The project's organizational structure drew from the model of large-scale physics experiments: no single PI or company in charge, but division of labor through working groups—the data working group collected and cleaned multilingual corpora, the ethics working group reviewed bias and harmful content in the data, the model working group handled architecture design and training engineering, and the governance working group managed decision-making processes. [^3]

This "thousand-person collaborative model training" approach was unprecedented in AI. Before this, large model training was a company's behind-closed-doors engineering; BigScience turned it into an organized, labor-divided, peer-reviewed public experiment.

### 2.2 Model training (2022-03—2022-07)

BLOOM's training began in March 2022 on the French government-owned supercomputer **Jean Zay**. [^4] Jean Zay is located at the Institut du Développement et des Ressources en Informatique Scientifique (IDRIS) on the southern outskirts of Paris, one of France's most powerful scientific computing infrastructures.

Key model parameters: [^4]

| Metric | Value | Notes |
|--------|-------|-------|
| Parameters | 176B | Same scale as GPT-3 |
| Architecture | Decoder-only Transformer | Similar to the GPT series architecture |
| Training data | ROOTS corpus | 46 natural languages + 13 programming languages, approximately 366B tokens |
| Training hardware | 384 A100 80GB GPUs | Jean Zay supercomputer |
| Training duration | ~3.5 months | March to July 2022 |
| License | RAIL (Responsible AI License) | Open weights with responsible use provisions |

The **ROOTS corpus** was the core of BLOOM's training data, built from scratch by BigScience's data working group. [^5] It was not simply scraped from the internet but deliberately balanced across language representation—beyond English and French, it covered Spanish, Arabic, Chinese, Vietnamese, Yoruba, Swahili, and dozens of other languages. Many of these were low-resource languages that had never been seriously addressed in previous large model training.

This multilingual coverage decision was not the result of technical optimization but an expression of values. BigScience's core participants explicitly stated: if only optimizing for English performance, the model would be stronger; but a truly globally-serving language model cannot speak only English.

### 2.3 Release and community reception (2022-07)

On **July 12, 2022**, BLOOM was officially released. Model weights were made available for download via HuggingFace Hub, accompanied by a complete model card and data documentation. [^4]

The reception at launch was enthusiastic but soberly realistic. The technical community immediately noted: BLOOM's performance on English benchmarks was inferior to the contemporary PaLM-540B (released April 2022), and even to the earlier Chinchilla-70B (released March 2022 by DeepMind, emphasizing compute-optimal training). [^4][^6] While the 176B parameter scale was comparable to GPT-3, its training efficiency and data ratios had fallen behind the latest understanding of 2022.

But these comparisons missed the point. BLOOM's value was not in benchmark leaderboards, but in three things:

1. **It proved that non-profit, non-corporate collaboration can train frontier-scale models.** Over 1,000 researchers, a government supercomputer, more than a year of coordination—this was not a replicable business model, but it was a replicable organizational model.
2. **It was the first serious multilingual open-source large model.** Coverage of 46 natural languages and 13 programming languages made it the first truly usable foundation for non-English communities to study large models.
3. **It pioneered the "open science + open model" release paradigm.** Not just releasing weights, but also releasing data construction methods, ethics review processes, and governance decision records. This level of transparency was unique among large model releases at the time.

### 2.4 RAIL License: a pioneering attempt at responsible openness

BLOOM's adoption of the RAIL License (Responsible AI License) was another innovation worth recording. [^7] Unlike traditional open-source licenses (MIT, Apache 2.0), RAIL allowed users to download and use model weights while attaching a set of usage restrictions: prohibiting the use of the model for generating disinformation, surveillance systems, weapons development, and other scenarios.

This "open but restricted" license model sparked heated debate in the open-source community in 2022. Pure open-source advocates argued that licenses with usage restrictions were not truly open source; safety researchers argued that attaching usage restrictions to frontier models was a necessary act of responsibility. This debate foreshadowed the larger 2024 debate around OSI's Open Source AI Definition (see "Chronicles: The Open-Source Movement").

BLOOM's RAIL License ultimately became a reference point for many subsequent open-source model license designs—including Meta's Llama 2 Community License, Mistral's Apache 2.0, and DeepSeek's custom license—all seeking different balances between "degree of openness" and "usage restrictions."

---

## III. Impact and Legacy

### 3.1 The demonstration effect on the open-source movement

BLOOM's most important impact was not how many people used it directly, but how it changed people's understanding of "who can train large models."

Before BLOOM, the open-source community's consensus was: training frontier models was a corporate privilege; the community could only fine-tune and adapt after models were released. BLOOM proved this consensus wrong—with sufficient coordination, compute, and organizational capability, open collaboration could train 176B-scale models. While this did not mean "anyone can train large models," it broke the psychological barrier that "only Big Tech can do it."

In February 2023, Meta released LLaMA and a subsequent weight leak occurred; the open-source community built a complete fine-tuning and deployment ecosystem around LLaMA. This ecosystem was able to establish itself rapidly in part because BigScience had already demonstrated the feasibility of "community training large models"—even though LLaMA's training itself was not community-completed, the community's confidence and organizational experience had already accumulated (see "Chronicles: The Open-Source Movement" and "Chronicles: Community Culture").

### 3.2 Catalyst for the HuggingFace ecosystem

The BLOOM project was a key node in HuggingFace's evolution from "model hosting platform" to "open-source AI infrastructure provider."

Before BLOOM, HuggingFace was already the center of the open-source NLP ecosystem—the Transformers library, Datasets library, and HuggingFace Hub were all growing rapidly. But BLOOM was the first time HuggingFace deeply participated in the **training** process of a model, not merely hosting a trained one.

After BLOOM's release, the number of models and download volumes on HuggingFace Hub continued to grow exponentially. HuggingFace completed a $100 million Series C funding round in May 2022 at a $2 billion valuation; by August 2023, it completed another round at a $4.5 billion valuation. [^8] BLOOM was not the sole reason for HuggingFace's commercial success, but it was the key case through which HuggingFace proved it was more than just "GitHub for models."

### 3.3 Catalyst for multilingual research

BLOOM's 46-language coverage made it an important foundation for multilingual NLP research. Before BLOOM, non-English communities' large model research relied mainly on translation or cross-lingual transfer, lacking a direct multilingual foundation. After BLOOM, multilingual research papers using BLOOM as their base grew rapidly—spanning text generation for low-resource languages, cross-lingual transfer learning, multilingual dialogue systems, and other directions. [^4]

However, it must also be said honestly: BLOOM's multilingual performance was not satisfactory across all languages. For some extremely low-resource languages, generation quality remained limited. Although the ROOTS corpus deliberately balanced language coverage, unevenness in data quality and quantity was still visible in model outputs. BLOOM opened a door, but the road beyond it requires more work.

### 3.4 Decline and legacy

By 2024–2025, BLOOM as a "directly usable model" had been surpassed by latercomers. Llama 2/3, Qwen, Mistral, and other models significantly outperformed BLOOM on both English and multilingual performance, with lower training costs and easier deployment. BLOOM 176B's inference cost was high—requiring at least 8 A100s to run—while Llama 2 70B could run on 4 A100s with better performance.

But BLOOM's legacy as an "organizational model" and "thought experiment" remains active. BigScience's collaborative framework—large-scale distributed, multidisciplinary, ethics-heavy—was referenced by subsequent open-source projects. After BLOOM, HuggingFace continued to promote the training and release of open-source models, including StarCoder, Zephyr, and open-source RLHF tools, all inheriting BLOOM's "open science" spirit.

More importantly, BLOOM occupies a special position on the timeline of the large model open-source movement: it was the most important open-source large model event before the LLaMA leak—the bridge between the "GPT-3 era where only companies could train models" and the "Llama era where the community can fine-tune everything."

---

## Commentary

BLOOM's core contribution does not lie in its benchmark scores—those numbers were not the strongest at the time of release. Its contribution was answering a question that almost no one dared to directly confront in 2021: **can a frontier-scale large model be independently trained by an open, collaborative academic community?**

The answer is yes, and the cost was lower than imagined—not that the training cost of a 176B model was low (it was still in the millions of dollars of compute investment), but that this cost could be shouldered by a non-profit organization, supported by government-funded supercomputers, and completed through the collaboration of over 1,000 volunteers. BLOOM proved a CERN-style possibility: large model training does not necessarily require corporate organizational structures, commercial return expectations, and closed-door development.

In the larger technological narrative, BLOOM was the "manifesto" of the open-source movement, LLaMA was the "uprising," and Llama 2 was the "establishment." BLOOM's significance was in being the first to raise its voice—though the reverberations of that voice would not truly become a tsunami until a year later, with the LLaMA leak.

---

*This entry was compiled by the Endfield Industrial Chronicle team: Silence (biography lead author).*

---

[^1]: Brown et al., "Language Models are Few-Shot Learners", arXiv:2005.14165, 2020-05-28. https://arxiv.org/abs/2005.14165
[^2]: Black et al., "GPT-NeoX-20B: An Open-Source Autoregressive Language Model", arXiv:2204.06745, 2022-04. https://arxiv.org/abs/2204.06745
[^3]: BigScience Workshop. https://bigscience.huggingface.co/
[^4]: BigScience Workshop et al., "BLOOM: A 176B-Parameter Open-Access Multilingual Language Model", arXiv:2211.05100, 2022-11-09. https://arxiv.org/abs/2211.05100
[^5]: Laurençon et al., "The BigScience ROOTS Corpus: A 1.6TB Composite Multilingual Dataset", NeurIPS 2022 Datasets and Benchmarks / arXiv:2303.03915, 2023. https://arxiv.org/abs/2303.03915
[^6]: Hoffmann et al., "Training Compute-Optimal Large Language Models" (Chinchilla), arXiv:2203.15556, 2022-03-29. https://arxiv.org/abs/2203.15556
[^7]: Contractor et al., "Behavioral Use Licensing for Responsible AI", ACM FAccT 2020; RAIL License for BLOOM. https://bigscience.huggingface.co/blog/bigscience-bloom
[^8]: TechCrunch, "Hugging Face raises $100M at $2B valuation", 2022-05; TechCrunch, "Hugging Face valued at $4.5B in new funding round", 2023-08.
