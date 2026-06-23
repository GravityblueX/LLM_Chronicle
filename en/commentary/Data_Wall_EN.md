# The Data Wall

> The Chinchilla scaling law of 2022 told the industry: if you want a stronger model, you need more data. But the reality of 2024 is that high-quality text data on the internet is being exhausted. Scaling Law hasn't died — it has hit a wall.

## I. Chinchilla's prediction and the data ceiling

In March 2022, DeepMind published what would come to be known as the "Chinchilla paper": training token count should grow in sync with parameter count, with an optimal ratio of roughly 20 tokens per parameter.[^1] This paper changed the training strategy of the entire industry — previously, GPT-3's 175B parameters had been trained on only 300B tokens, far below Chinchilla's optimal ratio. Thereafter, all major laboratories began dramatically increasing training data volumes.

But the Chinchilla scaling law carried an implicit assumption that was rarely discussed: **data is infinite.**

Reality is otherwise. At the end of 2022, Epoch AI researchers made an estimate: the total volume of high-quality global text data (books, academic papers, high-quality websites, code repositories) is approximately 10 to 15 trillion tokens. If the threshold is lowered to all available public internet text (including Reddit, news, forums), the upper limit is approximately 30 to 50 trillion tokens.[^2]

These numbers sound large, but under the Chinchilla ratio, a 1 trillion-parameter model would require 20 trillion tokens. If one wanted to train a 5 trillion-parameter model — not unreasonable by 2024 technology trends — one would need 100 trillion tokens, two to three times all available global data.

This is what "data wall" means: **not that data does not exist, but that the supply rate of high-quality data cannot keep up with the growth rate of model scale.** Low-quality data (random web pages, auto-generated content, machine-translated text) is abundant but introduces noise, bias, and hallucination — garbage ingested during training will be excreted during inference.

In 2023–2024, multiple reports confirmed that major laboratories were struggling with "data hunger." The Information and other tech media reported multiple times that OpenAI, Google, Anthropic, and other companies were racing to sign data licensing agreements with publishers, news organizations, and social media platforms.[^3] Meanwhile, copyright lawsuits began appearing intensively: The New York Times sued OpenAI and Microsoft (2023-12-27), accusing them of using millions of articles to train models.[^4] Data is not only scarce — it is contested.

## II. Synthetic data: Large language models eating their own tails

Facing the data wall, the most natural answer is: **use models to generate data for training models.**

In June 2023, Li et al. at Microsoft Research published a paper called "Textbooks Are All You Need." They used GPT-3.5 to generate approximately 1 billion tokens of "textbook-quality" synthetic text and trained a small model of only 1.3 billion parameters, Phi-1, on this data. On the code generation benchmark HumanEval, Phi-1 reached 50.6% — surpassing many much larger models.[^5]

The shock value of this experiment was not the score itself but the possibility it implied: **if data quality is high enough, small models can surpass large models.** This was a direct challenge to the Chinchilla scaling law — Chinchilla assumed data and parameters are equally important, while the Phi series implied that data quality may matter more than data quantity.

Subsequent versions of Phi continued to strengthen this direction. Phi-1.5 (September 2023) achieved remarkable performance on natural language tasks using synthetic data.[^6] Phi-3 (April 2024) expanded further to 3.8B parameters, competing with models 10× its size on multiple benchmarks.[^7]

But synthetic data has a fundamental logical problem: **it is distillation of existing large language model knowledge, not creation of new knowledge.**

When you use GPT-3.5 to generate textbooks for training Phi-1, the knowledge Phi-1 acquires cannot exceed what GPT-3.5 already possesses. You can use carefully designed prompts to make GPT-3.5 "explicitify" implicit knowledge — making the model organize patterns memorized during training but not easily directly output into teaching materials — but you cannot make it produce knowledge it does not have.

This raises a concern known as "model collapse": if all models are trained on the previous generation's output, and the proportion of genuine human-generated data continues to decline, model capabilities will eventually converge to some cyclical steady state — continuously rearranging existing knowledge without acquiring new knowledge.[^8] It is like a library that only writes new books from old books — the content of new books cannot exceed the scope of old ones.

## III. RL doesn't need a data wall: A different signal source

DeepSeek-R1 provided an unexpected answer to the "data wall" problem: **if the way you train a model is not "feeding data" but "giving rewards," the data wall becomes irrelevant.**

On January 20, 2025, DeepSeek released the R1 paper, the most striking section of which was R1-Zero. R1-Zero used no traditional supervised fine-tuning — no human-annotated "correct reasoning processes" to teach the model how to think step by step. It used only a base model, a reinforcement learning algorithm (GRPO), and rule-based rewards (whether math answers were correct, whether code passed tests).[^9]

In the traditional training paradigm, data is the "teacher" — you show the model correct answers and reasoning processes, and the model imitates. In the RL paradigm, data is not the teacher — the environment is. The model tries on its own, the environment gives feedback (right or wrong), and the model adjusts its strategy based on feedback.

This is one way to bypass the data wall. It does not need 10 trillion tokens of human text to "teach" the model to reason — it lets the model learn to reason through interaction with the task environment. R1-Zero spontaneously developed self-verification, retrospective reflection, and other reasoning behaviors during training; these behaviors were not learned from data but "grown" from RL reward signals.[^9]

Of course, RL has its own bottlenecks. It works best on tasks with clear right/wrong judgments like mathematics and code, because the reward signal is clear. But for open-ended tasks — writing, analysis, creativity — the standard of "correct" is ambiguous, and rule-based rewards cannot cover it. This means RL can bypass the data wall in the reasoning domain but cannot bypass it across the entire model capability spectrum.

## IV. The real wall is quality, not quantity

Understanding the data wall as "not enough data" is an oversimplification.

A more accurate diagnosis is: **there is not enough high-quality data, and low-quality data is not only insufficient — it is harmful.**

The 2023 LIMA paper ("Less Is More for Alignment") demonstrated this: using only 1,000 carefully curated high-quality instruction data to fine-tune LLaMA-65B achieved dialogue quality approaching GPT-4.[^10] This proved one thing: the model already acquired rich knowledge and capabilities during the pre-training phase; the alignment phase does not need massive data — it needs **curated data.**

The lesson from LIMA and the lesson from the Phi series point in the same direction: given sufficient parameters and sufficiently broad pre-training data, the bottleneck for incremental capability is not data quantity but data information density.

This changes the strategic direction for addressing the data wall. Rather than indiscriminately expanding datasets (adding more low-quality web pages), it is better to improve the signal-to-noise ratio of data:

- **Data curation**: Using classifiers to identify high-value subsets from massive text corpora;
- **Data augmentation**: Performing semantics-preserving transformations on high-quality samples (paraphrasing, translating, expanding);
- **Targeted use of synthetic data**: Not using synthetic data to fill volume but to supplement specific capability gaps;
- **Multimodal data**: Extending training signals from pure text to code, images, video, audio, and interaction logs.

The common thread of these strategies is: no longer treating "more data" as the answer but "better data" as the answer. Scaling Law has not been overthrown — it has been revised: **under conditions where data quality is adjustable, the independent variable of Scaling Law is not data volume but effective information content.**

## V. Industrial consequences of the data wall

The data wall's impact is not just technical; it is reshaping the data supply chain of the entire AI industry.

**Data monopolies are forming.** The most valuable data — high-quality books, academic papers, professional code repositories, news articles — is being locked down by large corporations through exclusive licensing agreements. Reddit signed a data licensing agreement with Google in 2024 worth approximately $60 million.[^11] OpenAI signed with Associated Press, Financial Times, Axel Springer, and other publishers.[^12] These deals ensure that payers get exclusive access to high-quality data, while the open-source community and smaller companies are excluded.

**Data disputes are being legalized.** The New York Times v. OpenAI case, Getty Images v. Stability AI case, and numerous class actions by authors — the final rulings in these cases will determine whether "training AI on copyrighted data" constitutes fair use.[^4] If courts lean toward copyright holders, data costs will become a new entry barrier, further consolidating large companies' data monopolies.

**The future of data is not more, but different.** What may truly break through the data wall is not scraping more web pages from the internet but inventing new data sources:

- **Targeted production of synthetic data**: Custom-generating training data tailored to model weaknesses;
- **Environmental interaction data**: Obtaining training signals through agents' trial-and-error in real environments (an extension of RL);
- **User interaction data**: Extracting valuable knowledge from conversation logs (requiring strict privacy protections);
- **Sensor data textualization**: Converting physical-world observations into text that models can consume.

## Commentary

The data wall is not the end of scaling but a course correction for scaling.

In the era of the Chinchilla scaling law, the industry's implicit assumption was "data is free, compute is expensive." All optimization pointed toward how to use less computation to leverage more data. But when high-quality data began to run dry, data copyrights began to be charged, and the marginal returns of synthetic data began to diminish, the assumption reversed: **data is expensive, and compute is becoming relatively cheaper.**

The Phi series proved that data quality matters more than data quantity. DeepSeek-R1 proved that RL can cultivate reasoning ability without massive human-annotated data. LIMA proved that 1,000 curated data samples can outperform a million noisy ones. These three pieces of evidence point to the same conclusion: future model capability growth will rely primarily not on "more data" but on "better training methods" — smarter curation, more precise synthesis, more effective RL, and more modalities of signal.

The data wall is a fact, but it is not a dead end. It is more like a tollbooth: in the past, you could freely scrape all data from the internet to train models; now you must pay for data, or find new training methods that do not depend on traditional data. Both strategies are being pursued, and both can work. But the era of "unlimited free data supply" has indeed come to an end.

---

*This piece was compiled by the Endfield Industrial Historical Archives team: Fu Xuan (lead historical commentary).*

---

(The technical evolution and ethical controversies of synthetic data are covered in *The Synthetic Data Chronicle*.)

[^1]: Hoffmann et al., "Training Compute-Optimal Large Language Models", arXiv:2203.15556, 2022-03-29. https://arxiv.org/abs/2203.15556
[^2]: Villalobos et al., "Will We Run Out of Data? An Analysis of the Limits of Scaling Datasets in Machine Learning", Epoch AI, 2022-10-24. arXiv:2211.04325. Estimates available text data at approximately 4.6 to 17 trillion tokens.
[^3]: The Information, "AI Companies Search for Data", 2024. Reports on major laboratories racing to sign data licensing agreements.
[^4]: The New York Times Company v. Microsoft Corporation et al., Case No. 1:23-cv-11195, filed 2023-12-27 in the U.S. District Court for the Southern District of New York.
[^5]: Li et al., "Textbooks Are All You Need", Microsoft Research, 2023-06-20. arXiv:2306.11644
[^6]: Gunasekar et al., "Textbooks Are All You Need II: phi-1.5 technical report", Microsoft Research, 2023-09-11. arXiv:2309.05463
[^7]: Abdin et al., "Phi-3 Technical Report: A Highly Capable Language Model Locally on Your Phone", Microsoft, 2024-04-22. arXiv:2404.14219
[^8]: Shumailov et al., "The Curse of Recursion: Training on Generated Data Makes Models Forget", arXiv:2305.17493, 2023. First systematic demonstration of performance degradation when models are trained on their own output.
[^9]: DeepSeek-AI et al., "DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning", arXiv:2501.12948, 2025-01-22. https://arxiv.org/abs/2501.12948
[^10]: Zhou et al., "LIMA: Less Is More for Alignment", NeurIPS 2023. arXiv:2305.11206
[^11]: Reuters, "Google strikes deal with Reddit to use data for AI training", 2024-02-22. Reports the Google-Reddit data agreement at approximately $60 million.
[^12]: OpenAI, "Introducing the ChatGPT partnership with the Financial Times", 2024-04-29. https://openai.com/index/ft-chatgpt-partnership/
