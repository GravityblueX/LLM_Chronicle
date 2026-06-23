# The Evolution of Evaluation Benchmarks

> The capabilities of large language models are, in many cases, "seen" by evaluation benchmarks. GLUE and SuperGLUE saw language understanding; MMLU saw multidisciplinary knowledge; HumanEval saw code writing; Chatbot Arena / LMArena saw user preferences; SWE-bench saw real-world software engineering; AIME and GPQA saw high-difficulty reasoning. When the benchmarks change, the targets the industry pursues change with them.

---

## I. Overview

Since 2018, large language model evaluation benchmarks have undergone four distinct shifts.

In the first phase, GLUE / SuperGLUE decomposed natural language understanding into a set of standardized problems, driving BERT, RoBERTa, T5, and other models to compete on a single leaderboard. In the second phase, MMLU expanded the evaluation scope to 57 disciplines, using "examinations" to measure whether models possessed cross-domain knowledge. In the third phase, HumanEval, Chatbot Arena / LMArena, and SWE-bench pushed evaluation from static multiple-choice questions toward code generation, user preferences, and real-world engineering tasks. In the fourth phase, high-difficulty benchmarks like AIME and GPQA entered frontier model launch materials, becoming the yardstick for testing "reasoning models."

This trajectory illustrates one fact: large language models are not merely trained—they are also selected by benchmarks. What the industry sees is what model companies optimize for; once old benchmarks become saturated, new ones emerge.

---

## II. From GLUE to SuperGLUE: Language Understanding Enters the Leaderboard Era

GLUE (General Language Understanding Evaluation) was proposed in 2018, collecting 9 natural language understanding tasks including sentiment classification, sentence similarity, textual entailment, and question-answering reasoning. Its contribution was not inventing any single task, but packaging disparate tasks into a unified leaderboard enabling different models to be compared under the same rules.[^1]

GLUE quickly encountered a problem after its release: models were improving too fast. BERT, released in October 2018, refreshed multiple NLP task scores through pre-training plus fine-tuning, and also pushed the paradigm of "first learning general representations on large corpora, then transferring to downstream tasks" into the mainstream.[^2] By 2019, researchers proposed SuperGLUE, explicitly stating that GLUE had been "saturated" and that a harder, more comprehensive new benchmark was needed. SuperGLUE retained the leaderboard concept but featured fewer, harder tasks with greater emphasis on commonsense reasoning, reference resolution, entailment, and reading comprehension.[^3]

The position of GLUE / SuperGLUE in LLM history was advancing evaluation from "single-task performance" to "composite scores." This was the first time model capabilities entered public consciousness as a single total score, and it habituated papers, companies, and media to using leaderboards to narrate progress.

### Key Data

| Time | Benchmark | Key Fact | Historical Role |
|------|------|----------|----------|
| 2018 | GLUE | 9 NLU tasks | Established a composite NLU leaderboard |
| 2018-10 | BERT | Refreshed multiple GLUE tasks via pre-training + fine-tuning | Proved the pre-training paradigm effective |
| 2019 | SuperGLUE | Harder benchmark designed for "GLUE saturation" | Pushed evaluation toward commonsense and complex understanding |

---

## III. MMLU: From Language Understanding to "Knowledge Examinations"

MMLU (Massive Multitask Language Understanding) was proposed in 2020. It spans 57 disciplines covering STEM, humanities, social sciences, medicine, law, business, and other fields, with questions primarily in multiple-choice format. The paper positioned it as measuring the world knowledge and problem-solving abilities models acquire during pre-training.[^4]

MMLU's significance lay in shifting the question from "can LLMs understand language?" to "how well does an LLM perform as a cross-disciplinary test-taker?" GPT-3 had already demonstrated that LLMs could perform many tasks few-shot, but MMLU provided a framework closer to an examination.[^5]

When GPT-4 was released in 2023, OpenAI placed MMLU at the core of its technical report evaluation. The report stated GPT-4 achieved 86.4% on MMLU, and that in translated versions of MMLU across 26 languages, GPT-4 surpassed GPT-3.5's English performance in 24 of them.[^6] This transformed MMLU from an academic benchmark into a mandatory metric for frontier model launches.

MMLU later also revealed limitations: questions may have leaked into training data, multiple-choice formats invite targeted optimization, and higher scores do not necessarily equate to real-world reliability. But during 2021–2024, it did serve as the "thermometer for general knowledge capability."

### Key Data

| Time | Benchmark | Key Fact | Historical Role |
|------|------|----------|----------|
| 2020 | MMLU | 57 disciplines, multiple-choice | Pushed LLM evaluation toward cross-disciplinary knowledge |
| 2023-03 | GPT-4 report | GPT-4 reported 86.4% on MMLU | MMLU became a standard fixture in frontier model launches |
| 2023–2024 | Multiple companies release models | MMLU repeatedly used in model cards and technical reports | Formed "general capability" marketing language |

---

## IV. HumanEval: Code Capability Becomes the LLM Battlefield

HumanEval was proposed by OpenAI in the Codex paper to evaluate a model's ability to generate Python code from function specifications. It contains 164 hand-written programming problems, with evaluation based not on text similarity but on running unit tests to see whether the generated code passes.[^7]

This design mattered. Natural language tasks often make it difficult to judge "how close is close enough"; code is different—either it runs or it does not, and either tests pass or they fail. HumanEval thus became the representative benchmark of the code model era.

Codex and GitHub Copilot transformed "models writing code" from a capability demonstration into a real product. In the Codex paper, OpenAI reported that the 12B Codex achieved a pass@1 of 28.8% on HumanEval, with pass@100 reaching 72.3% through repeated sampling.[^7] Subsequent models—Code Llama, DeepSeek-Coder, Qwen-Coder, GPT-4, Claude, and others—all included HumanEval or HumanEval variants in their code evaluations.[^8]

HumanEval's limitations are also clear: problems are short, environments simple, and it primarily tests function-level generation. It cannot represent large-repository maintenance, dependency management, test repair, and cross-file modification. This is precisely why SWE-bench later emerged.

### Key Data

| Time | Benchmark | Key Fact | Historical Role |
|------|------|----------|----------|
| 2021 | HumanEval | 164 Python programming problems, judged by unit tests | Turned code generation evaluation into executable tests |
| 2021 | Codex | 12B Codex reported pass@1 of 28.8%, pass@100 of 72.3% | Proved code models viable for real development assistance |
| 2023–2024 | Code model wave | Code Llama, DeepSeek-Coder, Qwen-Coder, etc. repeatedly cite code benchmarks | Code capability becomes a major selling point for base models |

---

## V. Chatbot Arena / LMArena: From Standard Answers to Human Preferences

Chatbot Arena was launched by LMSYS in 2023. Its basic method is straightforward: show users two anonymous model responses to the same question, and let users vote for the better one; the system then estimates model rankings using methods like Elo or Bradley-Terry.[^9]

This addressed a pain point of static benchmarks: chat model responses have no single correct answer. One response might be more helpful, more natural, or safer—or it might simply be better at flattering the user. Traditional multiple-choice questions struggle to measure these differences; anonymous head-to-head comparison directly collects human preferences.

Chatbot Arena later evolved into LMArena. Its impact was twofold. First, it provided a public arena where closed-source and open-source models could compete side by side—GPT, Claude, Gemini, Llama, Qwen, DeepSeek, and other models could be directly compared by users. Second, it brought "user experience" into model rankings. After many model launches, people looked not only at MMLU but also at whether Arena rankings had risen.[^10]

But Arena is not unbiased truth. Voters' languages, regions, and task types influence results; models can win preferences through longer, more confident, more formatted responses; traffic and sampling of popular models also affect stability. Therefore, Arena is better suited as a "real user preference signal" than as the sole proof of capability.

### Key Data

| Time | Benchmark | Key Fact | Historical Role |
|------|------|----------|----------|
| 2023 | Chatbot Arena | Anonymous dual-model head-to-head, user voting | Pushed chat model evaluation from standard answers to preference comparison |
| 2024 | LMSYS / LMArena | Leaderboard became a key post-launch observation point | Formed a publicly visible "experience ranking" |
| 2024–2025 | Frontier model competition | Closed-source and open-source models compared on the same board | Model experience influences industry reputation |

---

## VI. SWE-bench: From "Can Write Functions" to "Can Fix Repositories"

SWE-bench was proposed in 2023, with tasks sourced from real GitHub issues and pull requests. Models must modify code in real Python repositories to make previously failing tests pass.[^11]

It differs greatly from HumanEval. HumanEval is like a programming problem in an exam—short problem statement, few dependencies, clear objectives. SWE-bench is like real work: you must read the issue, find the relevant files, understand the existing architecture, modify code, run tests, and avoid breaking existing functionality. It evaluates software engineering capability, not just code completion.

In 2024, SWE-bench Verified was released. This version had humans curate 500 more reliable, evaluable problems, reducing ambiguity and environmental issues in the original task set. OpenAI, in introducing SWE-bench Verified, stated they collaborated with the SWE-bench authors to improve the evaluation set and used it to assess models' ability to solve real software problems.[^12]

SWE-bench's historical role was pushing LLM evaluation toward "can an agent actually do the work?" From this point on, model companies no longer merely showcased chat and function generation—they demonstrated automatic bug fixing, repository modification, test running, and patch submission. It also directly spurred the creation of programming agent forms like Devin, OpenHands, Claude Code, and Codex CLI.

### Key Data

| Time | Benchmark | Key Fact | Historical Role |
|------|------|----------|----------|
| 2023 | SWE-bench | Software engineering tasks from real GitHub issues/PRs | Pushed code evaluation into real repository repair |
| 2024 | SWE-bench Verified | 500 human-curated high-quality tasks | Reduced evaluation noise; became a common frontier model metric |
| 2024–2025 | Programming agent rise | Multiple companies showcase SWE-bench or Verified scores | Evaluation target shifts from model to model + tools + agent pipeline |

---

## VII. AIME and GPQA: The High-Difficulty Threshold of the Reasoning Model Era

After 2024, frontier models began emphasizing "reasoning." At this point, AIME and GPQA became important.

AIME is the American Invitational Mathematics Examination, designed for high school math competition participants. Answers are integers from 0 to 999, enabling unambiguous computer grading. It was not originally designed for AI, but is well-suited for testing mathematical reasoning, long-chain computation, and resistance to guessing. OpenAI used AIME in the o1 series launch materials, stating that o1 significantly surpassed GPT-4o in competition mathematics; DeepSeek-R1's launch also featured AIME 2024 as a core metric, reporting a DeepSeek-R1 pass@1 of 79.8 on AIME 2024.[^13][^14]

GPQA (Graduate-Level Google-Proof Q&A) was proposed in 2023—a set of graduate-level, multidisciplinary, expert-written questions. The paper emphasized that these questions are difficult to answer even with web search access, aiming to test models' deep understanding in specialized domains rather than memorization of common knowledge.[^15]

AIME and GPQA collectively made "hard-problem performance" the admission ticket for reasoning models. MMLU is more like a general education exam, HumanEval more like a coding quiz, and Arena more like a user poll; AIME / GPQA are more like high-pressure screening: can the model perform long-range reasoning on mathematics and specialized science problems.

But caution is warranted here. The AIME problem bank is public, and some years' problems may have entered training data; GPQA has a limited sample size, and single-evaluation variance may be large. If reasoning models only chase these benchmarks, they may still end up "able to solve leaderboard problems but unable to tackle real-world issues." High-difficulty benchmarks should therefore be used alongside real-world tasks, human review, and process analysis.

### Key Data

| Time | Benchmark | Key Fact | Historical Role |
|------|------|----------|----------|
| 2023 | GPQA | Graduate-level, expert-written, Google-proof emphasis | Tests specialized knowledge and deep reasoning |
| 2024 | AIME enters frontier model materials | o1, DeepSeek-R1, etc. use AIME to showcase math reasoning | Competition math becomes the yardstick for reasoning models |
| 2025 | Reasoning model competition | AIME, GPQA, MATH, Codeforces, etc. frequently showcased side by side | Frontier evaluation shifts to high-difficulty, long-chain tasks |

---

## VIII. Timeline of Key Events

| Time | Benchmark | Evaluation Target | Role in LLM History |
|------|------|----------|----------------------|
| 2018 | GLUE | Natural language understanding | Established composite NLU leaderboard |
| 2019 | SuperGLUE | Harder language understanding, commonsense, and reading | Addressed GLUE saturation, raised difficulty |
| 2020 | MMLU | 57-discipline knowledge and problem-solving | Pushed model evaluation toward cross-disciplinary exams |
| 2021 | HumanEval | Python function-level code generation | Used unit tests to evaluate code capability |
| 2023 | Chatbot Arena | Open-ended chat experience | Used human preference to evaluate no-standard-answer responses |
| 2023 | SWE-bench | Real repository issue repair | Pushed code capability into software engineering tasks |
| 2023 | GPQA | Expert-level scientific Q&A | Tests specialized deep reasoning |
| 2024 | AIME gains popularity in reasoning model launches | Competition math reasoning | Became the showcase yardstick for o1, R1, and other reasoning models |
| 2024 | SWE-bench Verified | 500 curated real software tasks | Became a standard hard metric for programming agents |
| 2024–2025 | LMArena | Large-scale human preference ranking | Influences public and industry judgment of model experience |

---

## IX. Trend Analysis

- **From task scores to composite leaderboards**: GLUE / SuperGLUE turned NLP evaluation into leaderboard competition, driving models to iterate around composite scores.

- **From language understanding to knowledge examinations**: MMLU treated models as cross-disciplinary test-takers, suitable for showcasing general knowledge but vulnerable to training contamination and question-bank optimization.

- **From static questions to executable results**: HumanEval used tests to judge whether code was correct; SWE-bench further required models to complete modifications in real repositories.

- **From standard answers to human preferences**: Chatbot Arena / LMArena acknowledged that chat has no single correct answer, supplementing traditional benchmarks with user voting.

- **From general capability to high-difficulty reasoning**: AIME / GPQA raised the bar for frontier models, making "whether a model can reason deeply" the core of the model narrative after 2024.

- **From model primitives to system capabilities**: Benchmarks like SWE-bench and Arena often evaluate not raw models but combinations of model, prompts, tools, retrieval, execution environment, and product interaction.

---

## Commentary

Evaluation benchmarks are not bystanders—they change history. GLUE made everyone chase NLU composite scores, MMLU had model companies showcase general knowledge, HumanEval gave code generation a hard test, Arena brought user preferences into the leaderboard, SWE-bench made "can it do the actual work" the question, and AIME and GPQA pushed reasoning difficulty even higher. Each generation of benchmarks compensates for what the previous generation could not see, and each is quickly追上 by models, data, and engineering methods. To read the history of large language models, one cannot merely look at how much scores rose—one must also look at what those scores are actually measuring.

---

*This article was compiled by the Endfield Industrial Chronicle team: Platinum Owl (Lead Data Analyst).*

---

[^1]: Wang et al., "GLUE: A Multi-Task Benchmark and Analysis Platform for Natural Language Understanding", ICLR 2019 / arXiv:1804.07461. https://arxiv.org/abs/1804.07461
[^2]: Devlin et al., "BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding", arXiv:1810.04805, 2018. https://arxiv.org/abs/1810.04805
[^3]: Wang et al., "SuperGLUE: A Stickier Benchmark for General-Purpose Language Understanding Systems", NeurIPS 2019 / arXiv:1905.00537. https://arxiv.org/abs/1905.00537
[^4]: Hendrycks et al., "Measuring Massive Multitask Language Understanding", ICLR 2021 / arXiv:2009.03300. https://arxiv.org/abs/2009.03300
[^5]: Brown et al., "Language Models are Few-Shot Learners", NeurIPS 2020 / arXiv:2005.14165. https://arxiv.org/abs/2005.14165
[^6]: OpenAI, "GPT-4 Technical Report", arXiv:2303.08774, 2023. https://arxiv.org/abs/2303.08774
[^7]: Chen et al., "Evaluating Large Language Models Trained on Code", arXiv:2107.03374, 2021. https://arxiv.org/abs/2107.03374
[^8]: Meta AI, "Code Llama: Open Foundation Models for Code", 2023. https://ai.meta.com/research/publications/code-llama-open-foundation-models-for-code/
[^9]: Zheng et al., "Judging LLM-as-a-Judge with MT-Bench and Chatbot Arena", NeurIPS 2023 / arXiv:2306.05685. https://arxiv.org/abs/2306.05685
[^10]: LMArena, "Chatbot Arena Leaderboard". https://lmarena.ai/
[^11]: Jimenez et al., "SWE-bench: Can Language Models Resolve Real-World GitHub Issues?", ICLR 2024 / arXiv:2310.06770. https://arxiv.org/abs/2310.06770
[^12]: OpenAI, "Introducing SWE-bench Verified", 2024. https://openai.com/index/introducing-swe-bench-verified/
[^13]: OpenAI, "Learning to Reason with LLMs", 2024-09-12. https://openai.com/index/learning-to-reason-with-llms/
[^14]: DeepSeek-AI, "DeepSeek-R1", GitHub repository, 2025. https://github.com/deepseek-ai/DeepSeek-R1
[^15]: Rein et al., "GPQA: A Graduate-Level Google-Proof Q&A Benchmark", arXiv:2311.12022, 2023. https://arxiv.org/abs/2311.12022
