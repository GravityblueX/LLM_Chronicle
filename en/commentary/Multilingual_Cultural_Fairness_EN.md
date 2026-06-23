# Multilingual and Cultural Fairness

> The language capabilities of large language models are not uniform. English is the mother tongue, Chinese is the second language, and the remaining hundreds of languages are dialects. This is not a neutral technological choice, but a reflection of unequal distribution of data, compute, and attention. When a model can compose exquisite poetry in English but cannot answer a simple question in Yoruba, the cracks in technical fairness are already visible.

---

## I. English hegemony: Language bias in training data

The language capabilities of large language models are almost entirely determined by the language distribution of their training data. In GPT-3's training data, English accounted for over 90%, while all other languages combined made up less than 10%.[^1] This was not accidental — English-language internet content is the most abundant and most accessible, and mainstream training datasets such as Common Crawl, The Pile, and C4 are all dominated by English.

This data bias translates directly into capability bias. On English benchmarks, GPT-3 demonstrated remarkable few-shot learning ability; but when switched to other languages, its performance often fell off a cliff. A model scoring 70% on English MMLU might achieve only half or even lower accuracy on equivalent benchmarks in Chinese, Arabic, or Swahili.

The deeper problem is the **absence of cultural expression.** Large language models are not merely language tools; they carry the cultural cognition, value judgments, and worldviews embedded in their training data. When 90% of training data is in English, the worldview the model internalizes is also 90% that of the English-speaking world. It knows American history, Hollywood films, and Silicon Valley startup stories, but often has only stereotypical understanding of African tribal traditions, Middle Eastern religious philosophy, and East Asian Confucian ethics.

This is not a technical deficiency — it is the **politics of resource allocation.** The selection of training data is not neutral — whose language is included, whose culture is "seen" by the model; whose language is marginalized, whose existence is "overlooked" by the model.

---

## II. The arduous experiment of multilingualism: BLOOM

In July 2022, BLOOM (BigScience Large Open-science Open-access Multilingual Language Model) was released. This was a 176B-parameter open-source multilingual model jointly trained by over 1,000 researchers from more than 60 countries over more than a year. It attempted to answer a question that no one had truly answered before: **Can a genuinely multilingual, frontier-scale language model be trained through open collaboration?**[^2]

BLOOM's training data was the **ROOTS corpus** — 46 natural languages, 13 programming languages, approximately 366B tokens. Unlike GPT-3's English dominance, ROOTS deliberately balanced the proportion of different languages: beyond English and French, it covered Spanish, Arabic, Chinese, Vietnamese, Yoruba, Swahili, and dozens of other languages, many of them low-resource.[^3]

This multilingual coverage decision was not the result of technical optimization but a **reflection of values.** BigScience's core participants stated explicitly: if only English performance were optimized, the model would be stronger; but a language model that truly serves the global community cannot speak only English.[^2]

BLOOM's performance on English benchmarks trailed behind PaLM-540B of the same period and even the earlier Chinchilla-70B.[^2] But these comparisons miss the point. BLOOM's value lies not in benchmark leaderboards but in three things:

1. **It proved that non-profit, non-corporate collaboration can train a frontier-scale model.** Over 1,000 researchers, a government supercomputer, more than a year of coordination — this is not a replicable business model, but it is a replicable organizational model.
2. **It was the first serious multilingual open-source large language model.** Coverage of 46 languages made it the first truly usable base model for non-English-speaking communities to study large language models.
3. **It pioneered the "open science + open model" release paradigm.** Not just releasing weights, but also publishing data construction methodology, ethics review processes, and governance decision records.[^2]

However, it must be honestly noted: BLOOM's multilingual performance was not satisfactory for every language. For some extremely low-resource languages, generation quality remained limited. Although the ROOTS corpus deliberately balanced language coverage, unevenness in data quality and quantity is still visible in the model's output. BLOOM opened a door, but the path beyond it requires much more work.

(See *The BLOOM Chronicle* for details.)

---

## III. The Chinese path: Qwen's Chinese and multilingual strategy

Unlike BLOOM's idealism, Qwen (Tongyi Qianwen)'s multilingual approach is more pragmatic. Alibaba Cloud began open-sourcing the Qwen series in 2023, and by Qwen 2.5 in September 2024, it covered more than 29 languages.[^4]

Qwen's multilingual strategy does not pursue "fairness for every language" but rather **establishes balance between Chinese and English.** Qwen 2.5 leads Llama and Mistral models of the same tier across all Chinese benchmarks, while also maintaining competitiveness on English benchmarks — the 72B-parameter model scored 85.0% on MMLU, slightly below Llama 3.1 405B's 88.6%, but with only one-sixth the parameters.[^4]

The deeper logic of this strategy is: **multilingual capability is not charity but a business necessity.** Alibaba Cloud's target users are not only the English-speaking world but also emerging markets in Southeast Asia, the Middle East, and Africa. A model that speaks only English has no competitive advantage in these markets. Qwen's multilingual coverage is essentially the technical backbone of Alibaba Cloud's globalization strategy.

But Qwen's multilingualism also has limitations. Its optimization for Chinese and English far exceeds that for other languages, and its support for low-resource languages like Arabic and Swahili remains limited. This is not unique to Qwen — all large language models face the choice of "when resources are limited, who to serve first." Qwen chose the Chinese market and the global Chinese community, which is a pragmatic business decision but also an implicit trade-off regarding cultural fairness.

(See *The Qwen Chronicle* for details.)

---

## IV. The evaluation dilemma: How to measure multilingual capability

Evaluating multilingual capability is itself an unsolved problem. Existing mainstream benchmarks — MMLU, HellaSwag, WinoGrande, ARC — are almost entirely in English.[^5] This means that when we say a model is "capable," we are really saying "it is capable on English tasks."

The construction of non-English benchmarks faces a threefold difficulty:

**First, the limitations of translation.** Directly translating English benchmarks is often infeasible — language is not a neutral vessel; the same question may carry different semantic connotations in different cultures. The differences in what "democracy" means in English, Chinese, and Arabic cannot be captured by simple translation.

**Second, the absence of native benchmarks.** Many languages simply lack large-scale standardized test sets. The NLP research communities for languages like Yoruba, Swahili, and Vietnamese are smaller, and the resources and coordination costs needed to build high-quality benchmarks are high.

**Third, cultural bias in evaluation methods.** Even multilingual benchmarks often retain evaluation logic from the English-speaking world — emphasizing logical reasoning, factual accuracy, and instruction following, while neglecting abilities that other cultures may value more, such as narrative coherence, rhetorical appropriateness, and cultural sensitivity.

Since 2023, some multilingual evaluation projects have begun to emerge. HuggingFace's Open LLM Leaderboard has introduced multilingual subsets; MMLU has been translated into multiple languages; some research teams have begun constructing native benchmarks for specific languages.[^5] But these efforts remain scattered and unsystematic, far from forming a widely accepted multilingual evaluation standard.

---

## V. Technical challenges: Low-resource language data, evaluation, and fairness

The challenges facing low-resource languages are systemic, not simply a matter of "too little data."

**Data scarcity.** Low-resource languages have less internet content to begin with. Swahili Wikipedia has fewer than 70,000 articles, while English has over 6.8 million.[^6] Even if all available Swahili text were used for training, it would be far insufficient to support a large language model's pre-training needs.

**Data quality.** Low-resource language data is often of uneven quality — machine-translated texts, repetitive news articles, and corpora lacking diversity. Models trained on such data may only speak "news register" and cannot understand colloquial speech, dialects, or culturally specific expressions.

**Evaluation standards.** The NLP research communities for low-resource languages are smaller, lacking large-scale annotated data and standardized evaluation sets. Even if a model has some capability in a low-resource language, it is difficult for us to accurately measure "how good" it actually is.

**The fairness paradox.** If a model has 90% accuracy in English but only 50% in Swahili, we call it "unfair." But if we increase the proportion of Swahili training data to improve its accuracy, we may lower English accuracy. **There is a tension between fairness and efficiency** — this is not something technology can automatically resolve; it requires ethical decision-making.

---

## VI. Cultural fairness: Beyond language capability

Multilingualism is only the surface; cultural fairness is the deeper issue. A model's ability to answer questions in Arabic does not mean it understands Arabic culture; its ability to write in Chinese does not mean it understands the complexities of Chinese society.

Cultural fairness encompasses at least three dimensions:

**Plurality of worldviews.** The model should be able to understand different cultures' worldviews rather than fitting all questions into the English-speaking world's framework. When a user asks "What is good education?", the model should understand that in an American context, this might mean "creativity and critical thinking"; in a Chinese context, it might emphasize "diligence and discipline"; in certain African cultures, it might value "community participation and practical skills."

**Neutrality of value judgments.** The model should not treat the English-speaking world's values as "universal standards." When a user asks "Is democracy good?", the model should not presuppose "democracy is necessarily good" but should present different cultures' understanding and evaluation of democracy.

**Accuracy of cultural expression.** The model should avoid stereotypes and cultural appropriation when describing other cultures. It should know: not all Chinese people know kung fu, not all Arabs are Muslim, not all Africans live on the savanna.

The realization of these dimensions is far more difficult than improving language accuracy. What it requires is not just more data but **cultural sensitivity toward data** — what kinds of text can represent a culture, what kinds of expressions are stereotypes, what kinds of narratives are fair.

---

## VII. Future directions: From multilingual to culturally fair

The future of multilingual fairness may require simultaneous effort in several directions:

**Data layer.** Build more diverse, higher-quality multilingual datasets. This means not just collecting more data, but deliberately balancing linguistic and cultural representation. BLOOM's ROOTS corpus was a start, but more similar projects are needed.

**Evaluation layer.** Develop multilingual, multicultural evaluation standards. This requires interdisciplinary collaboration — linguists, cultural researchers, sociologists, and AI researchers jointly designing evaluation frameworks to ensure that evaluation measures not only language ability but also cultural understanding.

**Model layer.** Explore technical solutions for multilingual fairness. This may include: language-specific fine-tuning, culturally sensitive prompt design, multilingual alignment training, and more. Qwen's "full-spectrum coverage" strategy may offer lessons for other languages.

**Governance layer.** Establish industry standards and ethical guidelines for multilingual fairness. This requires the participation of international organizations, governments, corporations, and academia. OSI's Open Source AI Definition has taken a first step, but more specific norms regarding multilingual fairness are still needed.

---

## Commentary

The distribution of language capabilities in large language models is a mirror — reflecting the power structure of global knowledge production. English became the model's "mother tongue" not merely because English data is abundant, but because the English-speaking world's technology industry, academic system, and internet infrastructure have dominated knowledge production over the past three decades.

BLOOM attempted to break this monopoly with idealism — over 1,000 researchers, more than 60 countries, 46 languages — proving that multilingual large language models are possible, while also revealing the systemic predicament of low-resource languages. Qwen forged another path with pragmatism — establishing balance between Chinese and English, serving emerging markets with full-spectrum coverage — but it also sidestepped the harder question of "true cultural fairness."

The future large language model order will not automatically trend toward fairness. Without deliberate data balancing, evaluation standard reform, and ethical governance, technological progress will only continue to reinforce existing language hegemony. What the historian must record is not whose model is "smarter," but whose language is heard by the model, whose culture is seen by the model, and whose voice is overlooked by the model.

---

*This piece was compiled by the Endfield Industrial Historical Archives team: Fu Xuan (theoretical framework).*

---

[^1]: Brown et al., "Language Models are Few-Shot Learners", arXiv:2005.14165, 2020-05-28. https://arxiv.org/abs/2005.14165
[^2]: BigScience Workshop et al., "BLOOM: A 176B-Parameter Open-Access Multilingual Language Model", arXiv:2211.05100, 2022-11-09. https://arxiv.org/abs/2211.05100
[^3]: Laurençon et al., "The BigScience ROOTS Corpus: A 1.6TB Composite Multilingual Dataset", NeurIPS 2022 Datasets and Benchmarks / arXiv:2303.03915, 2023. https://arxiv.org/abs/2303.03915
[^4]: Qwen Team, "Qwen2.5: A Party of Foundation Models!", 2024-09. https://qwenlm.github.io/blog/qwen2.5/
[^5]: Hendrycks et al., "Measuring Massive Multitask Language Understanding", arXiv:2009.03300, 2020-09-07. https://arxiv.org/abs/2009.03300
[^6]: Wikipedia, "Swahili Wikipedia". https://sw.wikipedia.org/
