# Benchmark quick reference table

> **Note**: This table documents the most frequently cited major benchmarks in LLM evaluation. "Current frontier scores" are representative best results as of mid-2026 (based on published papers or official leaderboards); scores for the same benchmark may vary significantly due to evaluation settings (prompt format, few-shot count, sampling temperature, etc.). `*` indicates scores that are approximate values reported across multiple sources, not a single authoritative figure. LMArena is a dynamic human-voted ranking without a fixed frontier score.
>
> **Style basis**: [00_Style_Guide §IV](../00_Style_Guide_EN.md) — Treatises and tables. Tables contain no commentary — pure data, no opinions.

---

| Benchmark | What it measures | Difficulty level | First released | Current frontier score | Representative evaluation models |
|-----------|--------|----------|----------|-------------|-------------|
| MMLU [^1] | Multi-discipline multiple choice (57 subjects, elementary to professional level) | College-level | 2020 | ~90%* | GPT-4.5, Claude 3.5 Opus |
| HumanEval [^2] | Python function-level code generation (164 problems, pass@1) | Function-level | 2021 | ~95%* pass@1 | Claude 3.5 Sonnet, GPT-4o |
| GSM8K [^3] | Elementary math word problems (8.5K problems, multi-step reasoning) | Elementary | 2021 | ~97%* | Gemini 2.5 Pro, Claude 3.5 Opus |
| GPQA [^4] | Graduate/PhD-level science Q&A (448 questions, authored by domain experts) | PhD-level | 2023 | ~75%* | o3, Claude 3.5 Opus |
| AIME [^5] | American Invitational Mathematics Examination (competition-level, 30 problems/year) | High school competition | 2024 (as LLM benchmark) | ~90%* | o3, Gemini 2.5 Pro |
| SWE-bench Verified [^6] | Real GitHub issue automated resolution (500 verified subset) | Engineer-level | 2024 | ~72%* | Claude 3.5 Sonnet + scaffolding |
| LMArena [^7] | Human blind-test preference voting (Elo ranking, continuously updated) | — | 2023 | Dynamic ranking | Continuously changing (see leaderboard) |
| MATH [^8] | Math problem set (12.5K problems, high school to college competition level) | High school–college | 2021 | ~95%* | o3, DeepSeek R1 |
| ARC-Challenge [^9] | Elementary science reasoning (multiple choice, common-sense reasoning) | Elementary | 2018 | ~98%* | Multiple frontier models approaching saturation |
| MT-Bench [^10] | Multi-turn dialogue quality scoring (80 questions, GPT-4 judge, 1-10 scale) | — | 2023 | ~9.5/10* | GPT-4.5, Claude 3.5 Opus |
| BigBench-Hard [^11] | Hard reasoning task collection (23 subtasks, selected hardest problems) | — | 2023 | ~92%* | o3, Claude 3.5 Opus |

---

## Notes

### Benchmark classification

The above benchmarks can be categorized into three groups by evaluation dimension:

- **Knowledge & reasoning**: MMLU, GPQA, ARC-Challenge, BigBench-Hard — testing models' knowledge base and logical reasoning at varying difficulty levels.
- **Math & code**: GSM8K, MATH, AIME, HumanEval, SWE-bench — testing models' capabilities in precise computation and code generation. Math and code are the areas where models have progressed most rapidly.
- **Dialogue & preference**: MT-Bench, LMArena — testing dialogue quality and human preference alignment. These evaluations are more subjective but most relevant in product-facing scenarios.

### Evaluation credibility

Benchmark score credibility has been a core industry concern in recent years:

- **Benchmark gaming risk**: Some models may mix evaluation sets into training data (data contamination), leading to inflated scores. Early benchmarks like MMLU and GSM8K, which have been widely circulated on the internet, carry the highest risk of data contamination.
- **Evaluation setting variance**: The same model can differ by 5-10 percentage points under different prompt formats (0-shot vs 5-shot) and sampling temperatures (0 vs 0.7). Cross-model comparisons should ensure consistent evaluation settings.
- **Saturation**: Benchmarks like ARC-Challenge and GSM8K are approaching saturation (frontier scores >95%), with significantly diminished discrimination. The industry is shifting toward more challenging evaluations (GPQA, AIME, SWE-bench).
- **Dynamic evaluation**: LMArena (formerly Chatbot Arena) uses human blind-test voting with continuous updates, providing the strongest resistance to benchmark gaming, but at the highest cost and with limited sample sizes.

### Cross-references to the chronicle

For specific scores of each model on the above benchmarks, see the generational evolution sections in the corresponding family histories and biographies. This table provides only a benchmark overview and does not reiterate individual model results.

---

*Compiled by the Endfield Industrial Historian team: Yvonne (Architecture Audit)*

---

[^1]: Hendrycks, D. et al., "Measuring Massive Multitask Language Understanding", ICLR 2021, arXiv:2009.03300, 2020-09. 57 subjects, ~16K multiple-choice questions. https://arxiv.org/abs/2009.03300
[^2]: Chen, M. et al., "Evaluating Large Language Models Trained on Code", OpenAI, 2021-07. 164 Python programming problems; pass@1 is single-sample accuracy. https://arxiv.org/abs/2107.03374
[^3]: Cobbe, K. et al., "Training Verifiers to Solve Math Word Problems", arXiv:2110.14168, 2021-10. 8.5K elementary math word problems requiring 2-8 step reasoning. https://arxiv.org/abs/2110.14168
[^4]: Rein, D. et al., "GPQA: A Graduate-Level Google-Proof Q&A Benchmark", arXiv:2311.12022, 2023-11. Authored by PhD domain experts, designed as high-difficulty Q&A where "Google can't find the answer." https://arxiv.org/abs/2311.12022
[^5]: AIME (American Invitational Mathematics Examination) is itself a US math competition. Its use as an LLM evaluation benchmark began in 2024, when OpenAI used AIME 2024 as a core evaluation metric in the o1 release. AIME has approximately 30 problems per year, with a perfect score of 15.
[^6]: OpenAI et al., "SWE-bench: Can Language Models Resolve Real-World GitHub Issues?", arXiv:2310.06770, 2023-10. The Verified subset contains 500 human-verified problems. https://arxiv.org/abs/2310.06770
[^7]: LMArena (formerly Chatbot Arena) was created by LMSYS in 2023. Users chat with two anonymous models and vote for the better response; Elo scores are computed using the Bradley-Terry model. https://lmarena.ai/
[^8]: Hendrycks, D. et al., "Measuring Mathematical Problem Solving with the MATH Dataset", NeurIPS 2021, arXiv:2103.03874, 2021-03. 12.5K problems covering 7 domains including algebra, geometry, and probability. https://arxiv.org/abs/2103.03874
[^9]: Clark, P. et al., "Think you have Solved Question Answering? Try ARC", arXiv:1803.05457, 2018-03. ARC-Challenge is the harder subset, requiring scientific reasoning rather than simple retrieval. https://arxiv.org/abs/1803.05457
[^10]: Zheng, L. et al., "Judging LLM-as-a-Judge with MT-Bench and Chatbot Arena", NeurIPS 2023, arXiv:2306.05685, 2023-06. 80 multi-turn dialogue questions, judged by GPT-4. https://arxiv.org/abs/2306.05685
[^11]: Suzgun, M. et al., "Challenging BIG-Bench Tasks and Whether Chain-of-Thought Can Solve Them", ACL 2023 Findings, arXiv:2210.09261, 2022-10. 23 of the most difficult subtasks selected from BIG-Bench's 204 tasks. https://arxiv.org/abs/2210.09261
