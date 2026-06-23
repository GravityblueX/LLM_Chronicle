# The Evolution of Evaluation Benchmarks

> The capabilities of large language models are, in many cases, "seen" by evaluation benchmarks. GLUE and SuperGLUE saw language understanding; MMLU saw multidisciplinary knowledge; HumanEval saw code generation; Chatbot Arena / LMArena saw user preferences; SWE-bench saw real-world software engineering; AIME and GPQA saw advanced reasoning. When the benchmark changes, the target the industry chases changes with it.

---

## I. Overview

Since 2018, large model evaluation benchmarks have undergone four distinct shifts.

In the first phase, GLUE / SuperGLUE decomposed natural language understanding into a standardized set of tasks, driving BERT, RoBERTa, T5, and other models to compete on a single leaderboard. In the second phase, MMLU expanded evaluation to 57 disciplines, using "examinations" to measure whether models possessed cross-domain knowledge. In the third phase, HumanEval, Chatbot Arena / LMArena, and SWE-bench pushed evaluation from static multiple-choice questions toward code generation, user preferences, and real-world engineering tasks. In the fourth phase, AIME, GPQA, and other high-difficulty benchmarks entered frontier model release materials, becoming the yardstick for "reasoning models."

This trajectory illustrates a fact: large models are not merely trained — they are also selected by benchmarks. Whatever the industry sees, model companies optimize for; once old benchmarks become saturated, new ones emerge.

---

## II. From GLUE to SuperGLUE: Language understanding enters the leaderboard era

GLUE (General Language Understanding Evaluation) was proposed in 2018, assembling 9 natural language understanding tasks including sentiment classification, sentence similarity, textual entailment, and question-answering-style reasoning. Its contribution was not inventing any single task but packaging scattered tasks into a unified leaderboard, enabling different models to be compared under the same set of rules.[^1]

GLUE quickly encountered a problem: models were improving too fast. BERT, released in October 2018, used pre-training plus fine-tuning to refresh multiple NLP task scores, and pushed the paradigm of "learn general representations on large corpora first, then transfer to downstream tasks" into the mainstream.[^2] By 2019, researchers proposed SuperGLUE, explicitly stating that GLUE had been "surpassed" and that harder, more comprehensive new benchmarks were needed. SuperGLUE retained the leaderboard concept but featured fewer, harder tasks with greater emphasis on common sense, reference, entailment, and reading comprehension.[^3]

The place of GLUE / SuperGLUE in large model history is that of advancing evaluation from "individual tasks" to "composite scores." This brought model capabilities to public attention for the first time as a single aggregate score, and accustomed papers, companies, and media to narrating progress through leaderboards.

### Key data

| Date | Benchmark | Key facts | Historical role |
|------|-----------|-----------|-----------------|
| 2018 | GLUE | 9 natural language understanding tasks | Established composite NLU leaderboard |
| 2018-10 | BERT | Refreshed multiple GLUE-related tasks via pre-training + fine-tuning | Proved the pre-training paradigm effective |
| 2019 | SuperGLUE | Harder benchmark designed in response to "GLUE saturation" | Pushed evaluation toward common sense and complex understanding |

---

## III. MMLU: From language understanding to "knowledge examinations"

MMLU (Massive Multitask Language Understanding) was proposed in 2020. It encompasses 57 disciplines spanning STEM, humanities, social sciences, medicine, law, and business, with primarily multiple-choice questions. The paper positioned it as measuring world knowledge and problem-solving ability acquired during pre-training.[^4]

MMLU's significance lay in reframing the question from "can a large model understand language?" to "does a large model resemble a cross-disciplinary test-taker?" GPT-3 had already demonstrated that large models could perform many tasks few-shot, but MMLU provided a framework closer to an examination.[^5]

When GPT-4 was released in 2023, OpenAI placed MMLU at the core of its technical report's evaluations. The report stated GPT-4 achieved 86.4% on MMLU, and that in MMLU translated into 26 languages, GPT-4 exceeded GPT-3.5's English performance in 24 of them.[^6] This transformed MMLU from an academic benchmark into a metric that frontier model releases were obligated to address.

MMLU later revealed limitations: questions may have leaked into training data, multiple-choice formats invite targeted optimization, and score improvements do not necessarily reflect genuine reliability. But during 2021–2024, it genuinely served as a "general knowledge capability thermometer."

### Key data

| Date | Benchmark | Key facts | Historical role |
|------|-----------|-----------|-----------------|
| 2020 | MMLU | 57 disciplines, multiple-choice | Pushed LLM evaluation toward cross-disciplinary knowledge |
| 2023-03 | GPT-4 report | GPT-4 reported 86.4% on MMLU | MMLU became a standard fixture of frontier model releases |
| 2023–2024 | Multiple companies release models | MMLU repeatedly used in model cards and technical reports | Established "general capability" marketing language |

---

## IV. HumanEval: Code capability becomes a primary battlefield

HumanEval was proposed by OpenAI in the Codex paper to evaluate models' ability to generate Python code from function specifications. It contains 164 hand-written programming problems, with evaluation based not on text similarity but on running unit tests to determine whether generated code passes.[^7]

This design was significant. Natural language tasks often make it difficult to judge how much "almost correct" falls short; code is different — if it runs, it runs, and if tests fail, they fail. HumanEval thus became the representative benchmark of the code model era.

Codex and GitHub Copilot transformed "models writing code" from a capability demonstration into a real product. OpenAI reported in the Codex paper that a 12B Codex achieved 28.8% pass@1 on HumanEval, with pass@100 reaching 72.3% through repeated sampling.[^7] Subsequent models — Code Llama, DeepSeek-Coder, Qwen-Coder, GPT-4, Claude — all included HumanEval or HumanEval variants in their code evaluations.[^8]

HumanEval's limitations are also evident: problems are short, environments simple, and it primarily tests function-level generation. It cannot represent large-repository maintenance, dependency handling, test repair, and cross-file modification. This is precisely why SWE-bench later emerged.

### Key data

| Date | Benchmark | Key facts | Historical role |
|------|-----------|-----------|-----------------|
| 2021 | HumanEval | 164 Python programming problems, judged by unit tests | Made code generation evaluation executable |
| 2021 | Codex | 12B Codex reported pass@1 28.8%, pass@100 72.3% | Proved code models viable for real development assistance |
| 2023–2024 | Code model wave | Code Llama, DeepSeek-Coder, Qwen-Coder et al. repeatedly cite code benchmarks | Code capability became a major selling point for base models |

---

## V. Chatbot Arena / LMArena: From standard answers to human preferences

Chatbot Arena was launched by LMSYS in 2023. Its basic method is straightforward: show users two anonymized model responses to the same question side by side, let users vote for the better one; then use Elo or Bradley-Terry methods to estimate model rankings.[^9]

This addressed a pain point of static benchmarks: chatbot responses have no single correct answer. One response might be more helpful, more natural, or safer — or it might simply be more flattering. Traditional multiple-choice formats struggle to measure these differences; anonymized head-to-head comparison directly collects human preferences.

Chatbot Arena subsequently evolved into LMArena. Its influence operates on two levels. First, it provided a public arena for closed-source and open-source models to compete on equal footing — GPT, Claude, Gemini, Llama, Qwen, DeepSeek, and other models could all be directly compared by users. Second, it brought "user experience" into model rankings. After many model releases, attention focused not only on MMLU but also on whether Arena rankings improved.[^10]

But Arena is not unbiased truth. Voters' languages, regions, and task types influence results; models can win preferences through longer, more confident, more formatted responses; and traffic and sampling for popular models can affect stability. Therefore, Arena is better suited as a "real user preference signal" than as the sole proof of capability.

### Key data

| Date | Benchmark | Key facts | Historical role |
|------|-----------|-----------|-----------------|
| 2023 | Chatbot Arena | Anonymized dual-model head-to-head, user voting | Moved chatbot evaluation from standard answers to preference comparison |
| 2024 | LMSYS / LMArena | Leaderboard became a key observation point after model releases | Created publicly visible "experience rankings" |
| 2024–2025 | Frontier model competition | Closed-source and open-source models compared on the same board | Made model experience influence industry reputation |

---

## VI. SWE-bench: From "can write functions" to "can fix repositories"

SWE-bench was proposed in 2023, with tasks drawn from real GitHub issues and pull requests. Models must modify code in real Python repositories to make previously failing tests pass.[^11]

It differs significantly from HumanEval. HumanEval resembles programming problems in an exam — short problem statements, few dependencies, clear objectives; SWE-bench resembles real work: reading issues, finding files, understanding existing architecture, modifying code, running tests, and avoiding breaking existing functionality. It evaluates software engineering ability, not just code completion ability.

In 2024, SWE-bench Verified was released. This version comprised 500 problems screened by humans for greater reliability and evaluability, reducing ambiguity and environmental issues in the original tasks. OpenAI, in introducing SWE-bench Verified, stated it collaborated with SWE-bench's authors to improve the evaluation set and used it to assess models' ability to solve real-world software problems.[^12]

SWE-bench's historical role was pushing large model evaluation toward "can the agent complete the work?" From this point on, model companies no longer merely demonstrated chat and function generation but showcased automatic bug fixing, repository modification, test execution, and patch submission. It also directly drove the emergence of programming agent forms such as Devin, OpenHands, Claude Code, and Codex CLI.

### Key data

| Date | Benchmark | Key facts | Historical role |
|------|-----------|-----------|-----------------|
| 2023 | SWE-bench | Software engineering tasks from real GitHub issues/PRs | Advanced code evaluation to real-world repository repair |
| 2024 | SWE-bench Verified | 500 human-screened high-quality tasks | Reduced evaluation noise; became a standard frontier model metric |
| 2024–2025 | Programming agent rise | Multiple companies showcase SWE-bench or Verified scores | Evaluation target shifts from model to model + tools + agent pipeline |

---

## VII. AIME and GPQA: The high-difficulty thresholds of the reasoning model era

After 2024, frontier models began emphasizing "reasoning." At this point, AIME and GPQA became important.

AIME is the American Invitational Mathematics Examination, aimed at high school math competition participants. Answers are integers from 0 to 999, enabling unambiguous computer grading. It was not designed for AI but is well suited to testing mathematical reasoning, long-chain computation, and resistance to guessing. OpenAI used AIME in the o1 series release materials, stating that o1 significantly exceeded GPT-4o in competition mathematics; DeepSeek-R1 also used AIME 2024 as a core metric upon release, reporting DeepSeek-R1's AIME 2024 pass@1 at 79.8.[^13][^14]

GPQA (Graduate-Level Google-Proof Q&A) was proposed in 2023 — a set of graduate-level, multidisciplinary, expert-written question-answer problems. The paper emphasized that these questions were difficult to answer even with web search, aiming to test deep understanding in professional domains rather than the recitation of common knowledge.[^15]

The combined effect of AIME and GPQA was making "hard-problem performance" the entry ticket for reasoning models. MMLU is more like a general education exam, HumanEval more like a programming exercise, Arena more like user voting; AIME/GPQA are more like a pressure test: can the model perform long-horizon reasoning on mathematics and specialized scientific problems.

But caution is warranted here. AIME's problem bank is public, and some years' questions may have entered training data; GPQA's sample size is limited, and single-epoch evaluation variance can be significant. If reasoning models chase only these benchmarks, they may still exhibit "can solve leaderboard problems but cannot solve real-world problems." High-difficulty benchmarks should therefore be used alongside real-world tasks, human review, and process analysis.

### Key data

| Date | Benchmark | Key facts | Historical role |
|------|-----------|-----------|-----------------|
| 2023 | GPQA | Graduate-level, expert-written, Google-proof emphasis | Tests specialized knowledge and deep reasoning |
| 2024 | AIME enters frontier model materials | o1, DeepSeek-R1 et al. use AIME to showcase mathematical reasoning | Math competition problems become the reasoning model yardstick |
| 2025 | Reasoning model competition | AIME, GPQA, MATH, Codeforces frequently displayed side by side | Frontier evaluation shifts to high-difficulty, long-chain tasks |

---

## VIII. Timeline of key events

| Date | Benchmark | Evaluation target | Role in large model history |
|------|-----------|------------------|----------------------------|
| 2018 | GLUE | Natural language understanding | Established composite NLU leaderboard |
| 2019 | SuperGLUE | Harder language understanding, common sense, reading | Addressed GLUE saturation; raised difficulty |
| 2020 | MMLU | 57-discipline knowledge and problem-solving | Pushed model evaluation toward cross-disciplinary examination |
| 2021 | HumanEval | Python function-level code generation | Used unit tests to evaluate code capability |
| 2023 | Chatbot Arena | Open-ended chat experience | Used human preference to evaluate non-standardized answers |
| 2023 | SWE-bench | Real repository issue repair | Advanced code capability to software engineering tasks |
| 2023 | GPQA | Expert-level scientific Q&A | Tested specialized deep reasoning |
| 2024 | AIME popularized in reasoning model releases | Math competition reasoning | Became the showcase yardstick for o1, R1, and other reasoning models |
| 2024 | SWE-bench Verified | 500 screened real-world software tasks | Became a standard hard metric for programming agents |
| 2024–2025 | LMArena | Large-scale human preference ranking | Influenced public and industry judgments of model experience |

---

## IX. Trend analysis

- **From task scores to composite leaderboards**: GLUE / SuperGLUE transformed NLU evaluation into leaderboard competition, driving models to iterate around aggregate scores.
- **From language understanding to knowledge examinations**: MMLU treated models as cross-disciplinary test-takers, suitable for showcasing general knowledge but vulnerable to training contamination and targeted optimization.
- **From static questions to executable results**: HumanEval used tests to judge code correctness; SWE-bench further required models to complete modifications in real repositories.
- **From standard answers to human preferences**: Chatbot Arena / LMArena acknowledged that chat has no single correct answer, supplementing traditional benchmarks with user voting.
- **From general capability to advanced reasoning**: AIME / GPQA raised the bar for frontier models, making "whether a model can reason deeply" the core narrative of models after 2024.
- **From model to system capability**: SWE-bench, Arena, and similar benchmarks often evaluate not the pure model but the combination of model, prompts, tools, retrieval, execution environment, and product interaction.

---

## Commentary

Evaluation benchmarks are not spectators — they shape history. GLUE drove everyone to chase NLU aggregate scores, MMLU had model companies showcasing general knowledge, HumanEval gave code generation a hard test, Arena brought user preferences into leaderboards, SWE-bench made "can it do the work?" a question, and AIME and GPQA pushed reasoning difficulty higher still. Each generation of benchmarks compensates for what the previous generation could not see, and each is quickly caught up with by advances in models, data, and engineering. To read the history of large models, one must not only look at how much scores have risen but also understand what those scores are actually measuring.

---

*Compiled by the Endfield Industrial Chronicle team: Iris (Lead Data Analyst).*

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
