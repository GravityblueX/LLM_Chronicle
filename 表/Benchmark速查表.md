# 重要 Benchmark 速查表

> **说明**：本表不再维护“当前前沿分数”。原因很简单：截至 2026 年，模型更新速度、prompt / tool / scaffold 差异、测试集污染和动态排行榜变化，使单个“世界纪录数字”极易过期甚至误导。这里改为记录：**Benchmark 测什么、最适合回答什么问题、以及它不能证明什么。**

---

## 一、知识 / 推理类

| Benchmark | 首次发布 | 测什么 | 2026 年主要用途 | 主要局限 | 出处 |
|---|---:|---|---|---|---|
| MMLU | 2020 | 57 学科多选知识 / 推理 | 历史代际比较、基础知识覆盖 | 老、公开广、污染风险高；前沿区分度下降 | [^1] |
| MMLU-Pro | 2024 | 更难、多选项更多的知识推理 | 替代部分 MMLU 饱和比较 | 仍是静态题库，不测工具与行动 | [^2] |
| GPQA / Diamond | 2023 | 博士级科学问答 | 高难科学知识 / 推理 | prompt、tool/search 是否允许会显著影响可比性 | [^3] |
| BIG-Bench Hard | 2022/23 | BIG-Bench 中较困难推理子集 | 观察 CoT / reasoning 方法 | 子任务老化，不能代表真实工作 | [^4] |
| ARC-Challenge | 2018 | 科学常识推理 | 历史参考 | 前沿模型已接近饱和，区分力有限 | [^5] |

---

## 二、数学类

| Benchmark | 首次发布 | 测什么 | 主要价值 | 主要局限 | 出处 |
|---|---:|---|---|---|---|
| GSM8K | 2021 | 小学数学应用题、多步推理 | 早期 CoT / reasoning 里程碑 | 已高度饱和；训练污染风险 | [^6] |
| MATH / MATH-500 | 2021 / 后续子集 | 高中—大学竞赛数学 | 精确推理与答案验证 | 只评答案/过程的一部分，不等于开放式科研 | [^7] |
| AIME | 年度竞赛；2024 后大量用于 LLM | 高中奥数竞赛题 | reasoning / test-time compute 常用指标 | 每年题量少；年度难度不同；pass@k / 多采样设置差异大 | [^8] |

### 数学 benchmark 的新问题

2026 年不能只写“模型 A AIME 90%，模型 B 88%”。至少还要问：

- single attempt 还是多次采样？
- 是否使用工具 / Python？
- reasoning effort 多大？
- 是否使用 majority vote / verifier？
- 题目是哪一年？

同一个模型在不同 compute budget 下可能不是同一个“分数产品”。

---

## 三、代码生成 → 软件工程

| Benchmark | 首次发布 | 单位 | 测什么 | 2026 年位置 | 出处 |
|---|---:|---|---|---|---|
| HumanEval | 2021 | 函数 | 根据 docstring 生成 Python 函数并过测试 | 代码模型早期基准；前沿模型区分度显著下降 | [^9] |
| MBPP | 2021 | 小程序 | Python 程序合成 | 轻量代码能力参考 | [^10] |
| SWE-bench | 2023 | GitHub issue | 在真实 repo 中修复 issue | 从“写函数”转向“改工程” | [^11] |
| SWE-bench Verified | 2024 | 500 个人工验证 issue | 更可靠的真实软件修复 | coding agent 核心基准之一；使用的 scaffold / tools 必须一起报告 | [^12] |

**SWE-bench Verified**由专业开发者对问题描述和测试进行人工筛选，最终保留 500 个样本，并提供容器化评测 harness。[^12]

它比 HumanEval 更接近 coding agent，但仍不等于企业真实开发：benchmark 通常不会完整衡量 PR 可读性、长期维护、安全回归和人类 review 成本。

---

## 四、Web / Computer Use / Agent 环境类

| Benchmark | 首次发布 | 环境 | 测什么 | 主要价值 | 出处 |
|---|---:|---|---|---|---|
| WebArena | 2023 / ICLR 2024 | 自托管真实风格网站 | 电商、论坛、开发协作、CMS 等长程网页任务 | 评端到端 task success，而非一句答案 | [^13] |
| VisualWebArena | 2024 | 视觉网页 | 需要图像 / 页面视觉理解的 web agent | 补纯文本 DOM / accessibility tree 的不足 | [^14] |
| OSWorld | 2024 | Ubuntu / Windows / macOS 真实应用环境 | 跨应用、文件、GUI 的 computer-use tasks | 衡量真正桌面 Agent；原版 369 tasks | [^15] |
| OSWorld-Verified | 2025 | 修订后的 OSWorld | 修复环境与标注问题、提高信号可靠性 | 2025 后应优先注明 benchmark version | [^16] |
| Terminal-Bench | 2025 | Linux terminal | 复杂终端任务 | coding/general agents 的 shell 行动能力 | [^17] |

WebArena 的原论文里，GPT-4-based baseline 的 end-to-end success 只有 14.41%，而人类为 78.24%；这个历史数字的重要性不是“今天谁多少分”，而是它展示了**真实环境长程执行远难于静态问答**。[^13]

OSWorld 则把问题扩展到真正桌面环境：原始 benchmark 有 369 个任务，跨网页、桌面应用、文件 I/O 和多应用 workflow。[^15]

---

## 五、对话 / 人类偏好

| Benchmark | 形式 | 测什么 | 优点 | 局限 | 出处 |
|---|---|---|---|---|---|
| MT-Bench | LLM-as-a-judge 多轮问答 | 对话质量 | 成本低、早期影响大 | judge bias、题集固定、容易饱和 | [^18] |
| LMArena / Chatbot Arena | 匿名双模型人类偏好 | 用户偏好 | 动态、真实人类盲测 | 不是任务正确率；样本分布、风格偏好会影响结果 | [^19] |

LMArena 排名不能直接替代技术 benchmark：用户更喜欢某个回答，不等于它在代码、数学、事实、Agent 权限等任务上更可靠。

---

## 六、多模态类应该分任务，不该只写“支持图像”

多模态评测至少需要区分：

- 图像问答 / 文档理解；
- chart / diagram reasoning；
- video understanding；
- GUI / computer use；
- spatial / grounding；
- 多模态 Agent 行动。

“模型支持图片”本身几乎没有区分度。

前沿模型对比时，应优先使用对应任务 benchmark，而不是把所有视觉能力归成一个“多模态 ✅”。

---

## 七、Agent Benchmark 必须报告 Harness

这是 2026 年最重要的数据纪律之一。

传统 MMLU 可以比较一个 API 调用；Agent benchmark 的结果往往同时属于：

> **model + prompt + toolset + scaffold + context policy + retry policy + compute budget**

例如 SWE-bench / Terminal-Bench 的同一底层模型，换不同 coding harness 后结果可以明显变化。

因此正文引用 Agent 分数时至少应该尽量记录：

- 模型版本；
- benchmark 版本；
- harness / agent 名称；
- 是否允许 tools / web；
- 最大 token / effort / retry；
- pass@1 还是多次尝试。

只写“Claude / GPT 在 SWE-bench 是 X%”会越来越不完整。

---

## 八、Benchmark 污染与 Goodhart's Law

静态 benchmark 一旦成为商业 KPI，就会面临：

1. **训练数据污染**：题目进入训练语料；
2. **定向优化**：模型针对已知 benchmark 风格训练；
3. **测试框架优化**：不是模型更强，而是 scaffold 更适合这套题；
4. **选择性报告**：厂商只挑自己优势指标；
5. **多采样放大**：投入更多 compute 可以把 pass@k 做高。

所以 benchmark 的历史越来越像硬件 benchmark：仍然有用，但必须同时看测试条件和真实 workload。

---

## 九、2026 年建议的评测层级

| 层级 | 代表 | 回答的问题 |
|---|---|---|
| 静态知识 | MMLU-Pro / GPQA | 模型“知道/推理”多少？ |
| 精确推理 | AIME / MATH | 能否在可验证题上推演？ |
| 小程序 | HumanEval | 能否生成局部正确代码？ |
| 仓库工程 | SWE-bench Verified | 能否修真实软件问题？ |
| Terminal | Terminal-Bench | 能否在 shell 环境完成复杂任务？ |
| Web | WebArena | 能否在网站上完成长程操作？ |
| Desktop | OSWorld-Verified | 能否操作真实电脑应用？ |
| 人类偏好 | LMArena | 用户更喜欢哪个回答？ |
| 真实业务 | 内部 task suite | 能否完成**你的**工作？ |

最后一行通常最重要。

公开 benchmark 可以帮你筛模型，但生产选型最终应该建立自己的任务集。

---

## 十、最值得记录的新指标

Agent 时代的评测需要从“准确率”扩展：

- task success rate；
- cost / successful task；
- median / tail latency；
- tool-call count；
- retries；
- human interventions；
- policy violations；
- rollback / recovery rate；
- artifact quality；
- long-horizon degradation。

一个 Agent 得分更高但成本高 20 倍、需要更多人工接管，未必是更好的生产系统。

---

*终末地工业史官团队编纂：伊冯（架构审计）。*  
*2026-08 重订：GPT-5.6 Sol（OpenAI）。*

---

[^1]: Hendrycks et al., MMLU. https://arxiv.org/abs/2009.03300
[^2]: Wang et al., MMLU-Pro. https://arxiv.org/abs/2406.01574
[^3]: Rein et al., GPQA. https://arxiv.org/abs/2311.12022
[^4]: Suzgun et al., BIG-Bench Hard. https://arxiv.org/abs/2210.09261
[^5]: Clark et al., ARC. https://arxiv.org/abs/1803.05457
[^6]: Cobbe et al., GSM8K. https://arxiv.org/abs/2110.14168
[^7]: Hendrycks et al., MATH. https://arxiv.org/abs/2103.03874
[^8]: AIME official competition; LLM use became prominent with reasoning model evaluations from 2024 onward.
[^9]: Chen et al., HumanEval. https://arxiv.org/abs/2107.03374
[^10]: Austin et al., MBPP. https://arxiv.org/abs/2108.07732
[^11]: Jimenez et al., SWE-bench. https://arxiv.org/abs/2310.06770
[^12]: OpenAI / SWE-bench authors, “Introducing SWE-bench Verified”. https://openai.com/index/introducing-swe-bench-verified/
[^13]: Zhou et al., WebArena, ICLR 2024. https://proceedings.iclr.cc/paper_files/paper/2024/hash/4410c0711e9154a7a2d26f9b3816d1ef-Abstract-Conference.html
[^14]: Koh et al., VisualWebArena. https://arxiv.org/abs/2401.13649
[^15]: Xie et al., OSWorld. https://arxiv.org/abs/2404.07972
[^16]: OSWorld official repository, OSWorld-Verified update. https://github.com/xlang-ai/OSWorld
[^17]: Terminal-Bench, “Introducing Terminal-Bench”, 2025-05-19. https://www.tbench.ai/news/announcement
[^18]: Zheng et al., MT-Bench / Chatbot Arena. https://arxiv.org/abs/2306.05685
[^19]: LMArena. https://lmarena.ai/
