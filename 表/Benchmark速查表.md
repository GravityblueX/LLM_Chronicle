# 重要 Benchmark 速查表

> **说明**：本表收录大模型评测中最常被引用的主要 Benchmark。"当前前沿分数"为截至 2026 年中的代表性最优结果（以公开论文或官方排行榜为准），同一 Benchmark 的得分因评测设置（prompt 格式、few-shot 数、采样温度等）可能有显著差异。`*` 表示分数为多家报道的近似值，非单一权威数字。LMArena 为动态人类投票排名，不设固定前沿分数。
>
> **体例依据**：[00_体例.md §四](../00_体例.md) — 志、表。表不设"评曰"——纯数据，不议论。

---

| Benchmark | 测什么 | 难度等级 | 首次发布 | 当前前沿分数 | 代表评测模型 |
|-----------|--------|----------|----------|-------------|-------------|
| MMLU [^1] | 多学科多选题（57 个学科，从小学到专业级） | 大学级 | 2020 | ~90%* | GPT-4.5、Claude 3.5 Opus |
| HumanEval [^2] | Python 函数级代码生成（164 题，pass@1） | 函数级 | 2021 | ~95%* pass@1 | Claude 3.5 Sonnet、GPT-4o |
| GSM8K [^3] | 小学数学应用题（8.5K 题，多步推理） | 小学 | 2021 | ~97%* | Gemini 2.5 Pro、Claude 3.5 Opus |
| GPQA [^4] | 研究生/博士级科学问答（448 题，领域专家出题） | 博士级 | 2023 | ~75%* | o3、Claude 3.5 Opus |
| AIME [^5] | 美国数学邀请赛（高中竞赛级，30 题/年） | 高中竞赛 | 2024（作为 LLM 评测） | ~90%* | o3、Gemini 2.5 Pro |
| SWE-bench Verified [^6] | 真实 GitHub issue 自动修复（500 验证集） | 工程师级 | 2024 | ~72%* | Claude 3.5 Sonnet + scaffolding |
| LMArena [^7] | 人类盲测偏好投票（Elo 排名，持续更新） | — | 2023 | 动态排名 | 持续变化（见 leaderboard） |
| MATH [^8] | 数学问题集（12.5K 题，高中至大学竞赛） | 高中-大学 | 2021 | ~95%* | o3、DeepSeek R1 |
| ARC-Challenge [^9] | 小学科学推理（多选题，常识推理能力） | 小学 | 2018 | ~98%* | 多个前沿模型接近饱和 |
| MT-Bench [^10] | 多轮对话质量评分（80 题，GPT-4 评判，1-10 分） | — | 2023 | ~9.5/10* | GPT-4.5、Claude 3.5 Opus |
| BigBench-Hard [^11] | 困难推理任务集合（23 个子任务，精选最难题） | — | 2023 | ~92%* | o3、Claude 3.5 Opus |

---

## 附注

### Benchmark 分类

上述 Benchmark 可按评测维度分为三类：

- **知识与推理**：MMLU、GPQA、ARC-Challenge、BigBench-Hard——测试模型在不同难度等级上的知识储备和逻辑推理能力。
- **数学与代码**：GSM8K、MATH、AIME、HumanEval、SWE-bench——测试模型在精确计算和程序生成方面的能力。数学和代码是当前模型进步最快的领域。
- **对话与偏好**：MT-Bench、LMArena——测试模型的对话质量和人类偏好对齐程度。这类评测的主观性较强，但在产品化场景中最有参考价值。

### 评测可信度

Benchmark 分数的可信度是近年来行业关注的核心问题之一：

- **刷榜风险**：部分模型可能在训练数据中混入评测集（data contamination），导致分数虚高。MMLU、GSM8K 等早期 Benchmark 因在互联网上广泛流传，数据污染的风险最高。
- **评测设置差异**：同一模型在不同 prompt 格式（0-shot vs 5-shot）、不同采样温度（0 vs 0.7）下的分数可能相差 5-10 个百分点。跨模型比较时应确保评测设置一致。
- **饱和度**：ARC-Challenge、GSM8K 等 Benchmark 已接近饱和（前沿分数 >95%），区分度大幅下降。行业正转向更具挑战性的评测（GPQA、AIME、SWE-bench）。
- **动态评测**：LMArena（原 Chatbot Arena）采用人类盲测投票、持续更新的方式，抗刷榜能力最强，但成本最高、样本量有限。

### 与编年的交叉引用

各模型在上述 Benchmark 上的具体分数，详见对应世家/列传中的代际演进章节。本表仅提供基准概览，不重复引用个别模型的成绩。

---

*终末地工业史官团队编纂：伊冯（架构审计）*

---

[^1]: Hendrycks, D. et al., "Measuring Massive Multitask Language Understanding", ICLR 2021, arXiv:2009.03300, 2020-09. 57 个学科、约 16K 多选题。https://arxiv.org/abs/2009.03300
[^2]: Chen, M. et al., "Evaluating Large Language Models Trained on Code", OpenAI, 2021-07. 164 个 Python 编程问题，pass@1 为一次采样的正确率。https://arxiv.org/abs/2107.03374
[^3]: Cobbe, K. et al., "Training Verifiers to Solve Math Word Problems", arXiv:2110.14168, 2021-10. 8.5K 小学数学应用题，需要 2-8 步推理。https://arxiv.org/abs/2110.14168
[^4]: Rein, D. et al., "GPQA: A Graduate-Level Google-Proof Q&A Benchmark", arXiv:2311.12022, 2023-11. 由领域博士专家出题，目标是"Google 搜不到答案"的高难度问答。https://arxiv.org/abs/2311.12022
[^5]: AIME（American Invitational Mathematics Examination）本身是美国数学竞赛。作为 LLM 评测基准使用始于 2024 年，OpenAI 在 o1 发布时以 AIME 2024 作为核心评测指标。AIME 每年约 30 题，满分 15 分。
[^6]: OpenAI et al., "SWE-bench: Can Language Models Resolve Real-World GitHub Issues?", arXiv:2310.06770, 2023-10. Verified 子集为 500 个人工验证的问题。https://arxiv.org/abs/2310.06770
[^7]: LMArena（原 Chatbot Arena）由 LMSYS 于 2023 年创建。用户与两个匿名模型对话后投票选择更好的回复，基于 Bradley-Terry 模型计算 Elo 分数。https://lmarena.ai/
[^8]: Hendrycks, D. et al., "Measuring Mathematical Problem Solving with the MATH Dataset", NeurIPS 2021, arXiv:2103.03874, 2021-03. 12.5K 题，涵盖代数、几何、概率等 7 个领域。https://arxiv.org/abs/2103.03874
[^9]: Clark, P. et al., "Think you have Solved Question Answering? Try ARC", arXiv:1803.05457, 2018-03. ARC-Challenge 为其中困难子集，需要科学推理而非简单检索。https://arxiv.org/abs/1803.05457
[^10]: Zheng, L. et al., "Judging LLM-as-a-Judge with MT-Bench and Chatbot Arena", NeurIPS 2023, arXiv:2306.05685, 2023-06. 80 道多轮对话题，由 GPT-4 担任评判。https://arxiv.org/abs/2306.05685
[^11]: Suzgun, M. et al., "Challenging BIG-Bench Tasks and Whether Chain-of-Thought Can Solve Them", ACL 2023 Findings, arXiv:2210.09261, 2022-10. 从 BIG-Bench 的 204 个任务中精选 23 个最困难的子任务。https://arxiv.org/abs/2210.09261
