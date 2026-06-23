# Kimi K1.5: A Third Path for RL

> While DeepSeek-R1 forged reasoning capability through pure reinforcement learning, Moonshot AI was delivering its own answer in the same time window. Kimi K1.5's approach was neither "pure RL" nor "SFT + RLHF" — it was a more austere path: extend the context, keep the policy optimization clean, and forgo Monte Carlo Tree Search, value functions, and process reward models. The result: performance on par with o1.

---

## I. Release

**2025-01-22** — Moonshot AI published the paper "Kimi k1.5: Scaling Reinforcement Learning with LLMs" on arXiv, reporting the reasoning performance achieved by its latest multimodal LLM through reinforcement learning training. The paper's release date closely overlapped with the DeepSeek-R1 paper (2025-01-22) and the official DeepSeek-R1 launch (2025-01-20), marking January 2025 as a concentrated explosion window for Chinese reasoning models. [^1]

The Kimi team had previously been known for long-context processing — Kimi Chat was the first to support 2-million-token context in late 2023. K1.5 inherited this technical lineage: **long context scaling** was the core driving force of its RL training, rather than relying on more complex search or reward architectures.

K1.5 simultaneously released the paper and detailed descriptions of its training methodology (GitHub: MoonshotAI/Kimi-k1.5), but did not release model weights. [^2]

---

## II. Technical approach: Stack context, not complexity

K1.5's technical approach appeared somewhat "counter-trend" at the time of release. DeepSeek-R1's story of forging reasoning capability directly from a base model using pure GRPO reinforcement learning had already gone viral (see *Annals, January 2025*), and while OpenAI o1's internal architecture remained unknown, external speculation suggested heavy use of MCTS and process rewards. The K1.5 team made three deliberate subtractions: [^1]

### 2.1 Abandoning MCTS

Monte Carlo Tree Search (MCTS) was a classic technique from the AlphaGo era, and many reasoning model researchers regarded it as an "essential component." The K1.5 team explicitly rejected MCTS, with straightforward reasoning: MCTS imposes enormous computational overhead and implementation complexity on language models, while its benefits remain unclear. The paper states: "We establish a simple and effective RL framework that does not rely on more complex techniques such as Monte Carlo Tree Search, value functions, and process reward models."

### 2.2 No process reward model (PRM)

OpenAI's 2023 paper "Let's Verify Step by Step" focused on process reward models — scoring each step of reasoning rather than only the final answer. This was considered a key technique for reasoning training. K1.5 did not use a PRM, employing only the correctness of the final answer as the reward signal — "whether the process is right doesn't matter; whether the answer is right does." This approach was remarkably similar to DeepSeek-R1-Zero's "pure rule-based rewards," indicating that in early 2025, two independent Chinese teams simultaneously discovered that keeping the reward function simple was more effective than making it complex.

### 2.3 Leveraging long context

No MCTS, no PRM, no value function — so where does the driving force for RL training come from? K1.5's answer: **extend the context**.

The paper emphasizes that long context scaling is the core driver of its RL framework. Longer context means the model can complete longer chains of thought in a single inference pass, backtrack through more intermediate steps, and perform more thorough self-correction. This is more efficient than relying on MCTS branching exploration — because all exploration occurs within a coherent context window, and the model's attention mechanism can naturally integrate all information.

### 2.4 Multimodal

K1.5 was not merely a text reasoning model — it was a multimodal LLM supporting joint text+vision reasoning. This meant it could directly "understand" charts, geometric figures, and mathematical formulas in image form, achieving 74.9 on MathVista (the mathematical visual reasoning benchmark), on par with o1. [^1]

---

## III. Performance

K1.5 achieved the following benchmark results at the time of release: [^1]

| Benchmark | Kimi K1.5 (long-CoT) | OpenAI o1 | GPT-4o | Claude 3.5 Sonnet |
|------|:--:|:--:|:--:|:--:|
| AIME 2024 | 77.5 | 79.2 | — | — |
| MATH-500 | 96.2 | 96.4 | — | — |
| Codeforces | 94th %ile | 96.6th %ile | — | — |
| MathVista | 74.9 | 73.2 | — | — |

**Long2Short technique**: Another important contribution of K1.5 was demonstrating that "a model trained with long chain-of-thought can be distilled to yield strong reasoning with short chain-of-thought." Through the long2short method, K1.5 achieved the following in short-CoT mode:

| Benchmark | Kimi K1.5 (short-CoT) | GPT-4o | Claude 3.5 Sonnet |
|------|:--:|:--:|:--:|
| AIME 2024 | 60.8 | 9.3 | — |
| MATH-500 | 94.6 | 74.6 | 78.3 |
| LiveCodeBench | 47.3 | 32.2 | 36.4 |

In short-CoT mode, K1.5 surpassed GPT-4o and Claude 3.5 Sonnet by enormous margins — up to 550% (on AIME 2024). This meant K1.5 was not only a "think more, get stronger" slow reasoning model, but after distillation, also a "fast and strong" everyday model. [^1]

---

## IV. Historical significance

K1.5's release marked several historically significant milestones:

- **A twin-star formation with R1**: DeepSeek-R1 was released on January 20, 2025, and the K1.5 paper went online on January 22 — two Chinese models demonstrated different RL reasoning training approaches within 48 hours. R1 took the "pure RL → emergent reasoning" path, while K1.5 took the "long context + clean RL framework" path. Both arrived at a strikingly consistent conclusion: **RL-based reasoning training does not require complex search or reward architectures**.

- **Validating a new axis of RL scaling**: The paper's title, "Scaling Reinforcement Learning with LLMs," directly states its central thesis — RL is a new dimension of the scaling law. Pre-training scaling is limited by available data volume, while RL scaling extends training data by having the model explore the reward space on its own.

- **The practical value of Long2Short**: The deployment cost of reasoning models far exceeds that of ordinary conversational models — longer chains of thought mean higher latency and greater token consumption. K1.5's long2short technique demonstrated that "thinking hard during training, thinking fast during inference" is feasible — a crucial engineering consideration for the real-world deployment of reasoning models.

- **Divergent open-source strategies**: Unlike DeepSeek, which open-sourced R1 weights under the MIT license, Moonshot AI chose the path of "releasing the paper and technical descriptions without releasing weights." This reflected a divergence in open-source strategy among Chinese AI companies — whether to prioritize technology demonstration or ecosystem building, each with its own judgment.

---

## V. Commentary

The most important thing to remember about K1.5's paper is not its benchmark scores — because those numbers might be surpassed within two months. What deserves to be remembered is a fact it confirmed together with R1: **training a reasoning model does not require turning the reward function into rocket science.**

In 2024, the entire industry's imagination of reasoning models was shaped by the assumption that "complex search and reward architectures are inevitably necessary" — MCTS to search the reasoning tree, PRM to score each step, value functions to estimate future returns. This line of thinking came from AlphaGo, from RL textbooks, from the implications of OpenAI's "Let's Verify Step by Step." But in January 2025, two independent Chinese teams simultaneously proved, using two different technical approaches: that path may be a detour.

DeepSeek-R1 said: rule-based rewards alone (correct answer or not) + GRPO is sufficient. Kimi K1.5 said: use long context to fold the exploration space into a single window, and even the policy optimization method doesn't need to be particularly sophisticated. Both paths reached o1's level. This is not a coincidence — it is a signal. The emergence of reasoning may depend more on "letting the model see more" and "giving the model a clear objective" than on "telling the model what to do at every step."

But K1.5 also carries another footnote regarding open-source strategy. Not releasing weights means the outside world cannot reproduce, distill, or verify every number in the paper. In the same week that R1 was fully open-sourced under the MIT license, K1.5's choice put it at a natural disadvantage in academic impact — open-source models are repeatedly scrutinized, improved, and reproduced by academia and the developer community, with numbers independently verified hundreds or thousands of times, whereas the numbers in a closed-source paper can only be vouched for by its authors. This gap continued to widen over the following months of 2025.

---

*This entry was compiled by the Endfield Industrial Historical Bureau: Aeldra (Annotated).*

---

> 📖 See also: *The GPT Lineage*, *GPT-4: A Biography*, *The Claude Lineage*, *Anthropic: A Chronicle*, *DeepSeek-R1: A Biography*, *The DeepSeek Lineage*, *DeepSeek: A Chronicle*.

[^1]: Kimi Team (Moonshot AI), "Kimi k1.5: Scaling Reinforcement Learning with LLMs", arXiv:2501.12599, 2025-01-22. https://arxiv.org/abs/2501.12599
[^2]: Moonshot AI, "Kimi-k1.5", GitHub repository. https://github.com/MoonshotAI/Kimi-k1.5
