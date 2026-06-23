# Treatise: The Evolution of Model Alignment Technology

> After large models learned to speak, the next question humanity faced was not "what can it say" but "what is it willing to say." Alignment technology attempts to answer this question: how to transform a probabilistic machine that only cares about predicting the next token into an assistant that understands human intent, follows human rules, and acts within boundaries humans are comfortable with. This technical path began with the industrialization of RLHF in 2022 and continued through 2025 with GRPO and Process Reward Models redefining the source of reward signals. Over three years, the field underwent at least five paradigm shifts — each one not overturning the previous but building a new road on its cracks.

---

## I. Overview

The idea of alignment can be traced back to Christiano et al.'s work in 2017.[^1] But the watershed came in 2022: InstructGPT proved that a 1.3B aligned model could outperform a 175B unaligned model (see "The InstructGPT Biographies"), and ChatGPT pushed this methodology in front of hundreds of millions of users (see "The RLHF Biographies"). Thereafter, alignment technology evolved in phases defined by core tensions:

- **2022**: RLHF was industrialized; the core tension was "can human preferences be reliably learned";
- **2023**: DPO and Constitutional AI appeared; the core tension shifted to "human annotation is too expensive, too slow, too inconsistent";
- **2024**: KTO further reduced data requirements; SimPO eliminated the reference model; the core tension became "can the format constraints of preference data be broken";
- **2025**: GRPO and Process Reward Models emerged; the core tension escalated to "should reward signals come from human judgment, or from verifiable rules and reasoning steps."

This was not a substitution line "from human to machine," but an evolution line that continuously redefined "what counts as a good reward signal." Each generation of methods asked: whose preferences are being aligned, in what form, and at what granularity?

---

## II. The Industrialization of RLHF: InstructGPT and ChatGPT

### 2.1 The Three-Step Method Established

In March 2022, OpenAI published the InstructGPT paper, establishing what became known as the "standard three-step" alignment training pipeline:[^2]

1. **Supervised Fine-Tuning (SFT)**: Sampling from API user prompts, having annotators write ideal responses, and fine-tuning GPT-3 with these demonstration data;
2. **Reward Model Training (RM)**: For multiple model outputs to the same prompt, having annotators rank them, then training a reward model to predict "human preference scores";
3. **PPO Reinforcement Learning Optimization**: Using the reward model's output as the reward signal, adjusting language model parameters through Proximal Policy Optimization (PPO), while using KL divergence penalties to prevent the model from deviating too far from the SFT baseline.

The elegance of this pipeline lay in bypassing the unscalable bottleneck of "writing perfect answers" and leveraging the more scalable ability of "judging which of two answers is better." Annotators did not need to enumerate scenarios — they only needed to compare on limited samples.

### 2.2 ChatGPT: From Method to Product

On November 30, 2022, OpenAI released ChatGPT, placing the SFT + RLHF-aligned GPT-3.5 into a chat interface. One million users in five days, one hundred million monthly active users in two months (see "Chronicle: November 2022"). ChatGPT did not invent RLHF, but it did something more important — making the world realize that "alignment" is not a nice-to-have but a prerequisite for product usability.

RLHF redefined what a "good model" meant: from high benchmark scores to being satisfying in real-world use (see "The InstructGPT Biographies," "The RLHF Biographies").

### 2.3 PPO's Shadow

But the PPO stage quickly exposed engineering costs. PPO is an on-policy algorithm: during training, the language model continuously generates responses, the reward model scores them in real time, and the policy iterates repeatedly. At least three models simultaneously occupy GPUs — the language model, the reward model, and the value model. Training instability, hyperparameter sensitivity, and reward models being easily "gamed" (reward hacking) — these engineering problems became the direct motivation for later researchers to seek alternatives.

---

## III. 2023: DPO and Constitutional AI — Two Discontents with PPO

2023 was the year alignment technology forked, with two directions pointing to the same conclusion: **PPO is not the only path.**

### 3.1 DPO: Bypassing the Reward Model and Reinforcement Learning

In May 2023, Rafailov et al. at Stanford proposed DPO (Direct Preference Optimization).[^3] DPO's core insight: if the optimal solution for the reward model can be expressed in closed form, then there is no need to first train a reward model and then run PPO — the language model can be directly optimized with preference data.

Mathematically, DPO proved a key equivalence: there exists a one-to-one mapping between the optimal reward function and the optimal policy. Therefore, one can directly write a loss function that performs maximum likelihood estimation on preference data ("response A is preferred to response B") for the language model, without explicitly training a reward model or performing online reinforcement learning.

DPO requires only the language model and preference data, drastically reducing GPU costs. Open-source dialogue models like Llama 2-Chat, Zephyr, and Tulu quickly adopted DPO or its variants for post-training. But DPO is an offline method that does not perform online exploration, with an upper bound lower than PPO; it is also sensitive to preference data quality — noisy annotations can cause training degradation. It is more of a "low-cost post-training" solution than the ultimate tool for frontier alignment.

### 3.2 Constitutional AI: Replacing Annotation with Principles

December 2022 (paper submission) / 2023 (publication and deployment): Anthropic proposed Constitutional AI (CAI).[^4] CAI's starting point was not simplifying PPO's engineering complexity, but questioning RLHF's feedback source itself.

RLHF relies on massive human annotation, which has three problems. First, **high cost**: annotators need to read large amounts of harmful content, with mental health risks.[^5] Second, **inconsistency**: different annotators, different cultures, and different tasks yield varying judgments of "good answers." Third, **unauditable**: annotators' preferences are implicit and cannot be externally inspected or modified.

CAI's response proceeded in two steps. Step one: give the model a "constitution" — a set of behavioral principles extracted from sources such as the UN Declaration of Human Rights, DeepMind's Sparrow rules, and Apple's terms of service — and have the model self-critique and self-revise its responses based on these principles, generating high-quality self-correction data. Step two: use AI-generated preference data (RLAIF) to replace human annotation data, training a preference model for final fine-tuning.

CAI was fully applied in the Claude series of models. It shifted "who judges good from bad" from human annotators to written-down principles — public, discussable, and auditable (see "AI Safety and Alignment"). Its limitations were also clear: the quality of the model's self-critique was bounded by its own capabilities, and the formulation of constitutional principles was itself a value choice. But CAI proved one thing: alignment does not need to rely 100% on human point-by-point scoring.

---

## IV. 2024: KTO and SimPO — Lowering the Data Bar

DPO reduced dependence on PPO, but it still required a specific data format: **paired preference comparisons** — for the same prompt, annotating "response A is preferred to response B." While the collection cost of this data was lower than RLHF's full annotation, it was still much more expensive than simple "good/bad" binary classification.

Two important works in 2024 further lowered the data bar.

### 4.1 KTO: All You Need Is "Good" or "Bad"

In May 2024, Ethayarajh et al. proposed KTO (Kahneman-Tversky Optimization).[^6] KTO drew on prospect theory from behavioral economics: human perception of loss and gain is asymmetric — the pain of loss exceeds the pleasure of equivalent gain. KTO required no paired preference data; it only needed each response labeled "good" or "bad," optimizing the model with prospect theory's asymmetric loss function. In practice, only a boolean label was needed, further reducing data collection costs. Experiments showed KTO matched DPO on certain benchmarks and even had a slight advantage in data-constrained scenarios, though it lacked DPO's theoretical equivalence guarantees.

### 4.2 SimPO: Removing the Reference Model

DPO training requires a frozen reference model (typically the post-SFT initial model) to compute the KL divergence penalty, consuming additional GPU memory in large model training. In May 2024, Meng et al. proposed SimPO (Simple Preference Optimization).[^7] SimPO used sequence-average log probabilities as an implicit reward, eliminating the explicit reference model while introducing a target reward margin to control preference strength. It outperformed DPO on multiple benchmarks with lower training costs.

KTO and SimPO jointly pointed to a trend: **the engineering barrier to preference optimization continued to decline.** From PPO's three models to DPO's two models to SimPO's single model, from paired comparisons to binary classification labels, alignment training's "data format requirements" and "compute requirements" were being systematically simplified.

---

## V. 2025: GRPO and Process Reward Models — Elevating the Reward Signal

If the main thread of 2023–2024 was "simplifying the engineering complexity of alignment training," then 2025's main thread elevated to a more fundamental question: **where should reward signals come from?**

### 5.1 GRPO: Policy Optimization Without a Value Model

In January 2025, DeepSeek released DeepSeek-R1, which employed the GRPO (Group Relative Policy Optimization) algorithm.[^8] GRPO's core improvement was removing the value model (critic) from PPO.

In standard PPO, the value model provides a baseline for policy gradients and reduces variance, but its training cost equals the language model's. GRPO's solution: for the same prompt, generate a group of responses and use the group's average reward as the baseline — the value model is replaced by "within-group comparison," reducing the required models from three to two.

GRPO's other key innovation concerned the choice of reward signal. DeepSeek-R1 used **rule-based rewards** on reasoning tasks (mathematics, code): correct answers earn positive scores, correctly formatted responses earn positive scores, otherwise no score or negative score. This meant that for verifiable tasks, reward signals no longer needed to come from human preferences or a reward model — they could come directly from the objective criteria of the task itself.

R1-Zero was even more aggressive: skipping SFT and starting GRPO + rule-based reward training directly from the base model. The model exhibited "aha moments" during training — spontaneous self-reflection behaviors. This demonstrated that under verifiable objectives, RL could emerge complex reasoning strategies without human preference guidance (see "The DeepSeek-R1 Biographies," "The RLHF Biographies").

### 5.2 Process Reward Models (PRM): From Outcome Supervision to Step Supervision

Traditional reward models (ORM, Outcome Reward Model) only judge whether the final answer is good, not the reasoning process. But in reasoning tasks, the critical factor is often not the final answer but the intermediate steps: one wrong step and everything after is wrong.

The Process Reward Model (PRM) approach: **reward or punish each step of the reasoning process**, not just the final outcome.

OpenAI first systematically validated PRM's effectiveness in mathematical reasoning in the 2023 paper "Let's Verify Step by Step."[^9] The paper found that PRM significantly outperformed ORM in best-of-N sampling — because PRM could identify erroneous steps early in the reasoning chain, rather than only making judgments at the final answer level. PRM's challenge lies in annotation cost. Researchers explored automated methods: using Monte Carlo sampling to estimate each step's "correct prefix probability" as a step-level reward signal. Such methods were further applied in DeepSeek-R1 and OpenAI's subsequent work.

PRM's historical significance lies in pushing alignment granularity from "answer-level" to "step-level." In chat scenarios, "is the answer good enough" suffices for judgment; in reasoning scenarios, "is each step correct" is the key. This marks alignment technology deepening from "surface behavior constraints" to "internal reasoning process supervision."

### 5.3 Verifiable Rewards vs. Human Preferences

GRPO + rule-based rewards and PRM jointly point to a deeper trend: **for verifiable tasks, the best alignment signal may not be human preference, but objective criteria.**

This forms a symmetry with RLHF. RLHF was born from a judgment: humans cannot articulate the "best answer" but can tell "which is better." GRPO and PRM move toward another judgment: for verifiable tasks, even "which is better" does not require human judgment — whether the answer is correct and whether the reasoning chain is broken can be directly verified by machines.

But this line has boundaries. In open-ended dialogue, ethical judgment, and creative writing, "correct answers" do not exist, and "verifiable" is moot. The future landscape of alignment technology is not substitution but **division by task type**: verifiable tasks use rule-based rewards and PRM; unverifiable tasks use human preferences or AI feedback.

---

## VI. Factual Thread Table

| Date | Method | Proposer | Core Innovation | Reward Signal Source |
|------|--------|----------|-----------------|---------------------|
| 2022-03 | InstructGPT (RLHF) | OpenAI | SFT → RM → PPO three-step method | Human preference ranking |
| 2022-12 | Constitutional AI | Anthropic | Constitutional principles + AI self-critique + RLAIF | AI feedback + public principles |
| 2023-05 | DPO | Stanford | Direct optimization with preference data, bypassing RM and PPO | Paired preference data |
| 2024-05 | KTO | Ethayarajh et al. | Binary classification labels only; prospect theory loss | Good/bad binary |
| 2024-05 | SimPO | Meng et al. | Remove reference model; sequence avg. log-probability as reward | Paired preference data |
| 2025-01 | GRPO | DeepSeek | Within-group relative baseline replaces value model | Rule-based rewards / verifiable objectives |
| 2023–2025 | PRM | OpenAI et al. | Step-level rewards; reasoning process supervision | Step correctness (automated/manual) |

---

## VII. Evolution Logic and Trend Analysis

Surveying three years of alignment technology evolution, three clear logical threads can be identified:

**Thread one: Systematic reduction of engineering barriers.** From PPO's three-model online training, to DPO's two-model offline optimization, to SimPO's single model, to KTO's binary classification labels — each step made alignment training cheaper and simpler. The driving force was pragmatism: if only large companies could afford alignment training, the ecosystem could not be healthy.

**Thread two: Diversification of feedback sources.** From RLHF's human preference ranking, to Constitutional AI's AI self-evaluation plus public principles, to DPO/KTO reducing format requirements, to GRPO's rule-based rewards, to PRM's step-level supervision — feedback sources expanded from a single human preference stream to five parallel channels, each with its own applicability boundaries.

**Thread three: Continuous refinement of alignment granularity.** RLHF and DPO compare at the "answer level"; PRM evaluates at the "step level." Finer granularity means more precise supervision, but also higher annotation costs — automated methods (Monte Carlo sampling, AI-assisted annotation) are the key to balancing this tension.

### Future Trends

- **Hybrid alignment strategies become mainstream**: Frontier models will not use just one method — SFT as the foundation, DPO/KTO for low-cost preference optimization, GRPO + rule-based rewards to reinforce reasoning, PRM for step-level fine-tuning. Each method plays its role at a different stage of the pipeline.
- **Alignment routes diverge by verifiability**: Mathematics and code use rule-based rewards and PRM; open-ended dialogue and ethical judgment continue to rely on human preferences or AI feedback. This divergence is already visible in DeepSeek-R1.
- **Synthetic preference data continues to rise**: Constitutional AI pioneered AI-generated preference data. By 2025, virtually every frontier model's alignment training uses synthetic data to varying degrees. Human annotation will not disappear but will increasingly be reserved for quality verification and edge cases.
- **Process Reward Models expand toward general reasoning**: PRM has been validated primarily in mathematical reasoning, but its "step-level supervision" approach can extend to code, scientific reasoning, multi-step planning, and other scenarios. The challenge lies in automated assessment of step correctness.

---

## Commentary

Three years of alignment technology evolution were fundamentally answering one question: **as models grow stronger, what is the reliable "steering wheel"?**

RLHF's answer was "human intuition" — effective, but expensive, inconsistent, and unauditable. DPO and KTO reduced the cost without changing the steering wheel's material. Constitutional AI replaced the steering wheel from "annotator intuition" to "written-down rules," but who writes the rules remained an open question. GRPO and PRM proposed a radical possibility for verifiable domains: the steering wheel itself may be unnecessary — as long as the track is clear enough, the model knows where to drive.

But this precisely exposes alignment's ultimate boundary. Tasks with clear tracks do not need human preferences; tasks with ambiguous tracks — what is justice, what is beauty, what harm is intolerable — will always require humans to draw the line. Technology can reduce alignment costs, improve alignment precision, and expand alignment's scope, but it cannot answer the question "what do we actually want" on humanity's behalf.

At this point in the divination, the logic of this evolutionary line is clear: every technical leap did not overturn the previous one but patched a new board on its limitations. RLHF exposed the annotation cost problem, and DPO patched the engineering board; DPO exposed data format constraints, and KTO patched the flexibility board; human preferences exposed insufficient verifiability, and GRPO and PRM patched the rule-based reward board. No single board is the final answer, but each one brings this bridge closer to the other shore.

What is the other shore? A model strong enough, reliable enough, and transparent enough that humans can trust it to act autonomously in most scenarios — while retaining an inalienable veto. That veto resides not in any algorithm, but in the hands of users and governors (see "AI Safety and Alignment").

---

*Compiled by the Endfield Industrial Historian Team: Fu Xuan (Theory Framework Audit).*

---

[^1]: Christiano et al., "Deep reinforcement learning from human preferences", arXiv:1706.03741, 2017-06-13. https://arxiv.org/abs/1706.03741
[^2]: Ouyang et al., "Training language models to follow instructions with human feedback", arXiv:2203.02155, 2022-03-04. https://arxiv.org/abs/2203.02155
[^3]: Rafailov et al., "Direct Preference Optimization: Your Language Model is Secretly a Reward Model", arXiv:2305.18290, 2023-05-29. https://arxiv.org/abs/2305.18290
[^4]: Bai et al., "Constitutional AI: Harmlessness from AI Feedback", arXiv:2212.08073, 2022-12-15. https://arxiv.org/abs/2212.08073
[^5]: Perrigo, "OpenAI Used Kenyan Workers on Less Than $2 Per Hour to Make ChatGPT Less Toxic", *TIME*, 2023-01-18. https://time.com/6247678/openai-chatgpt-kenya-workers/
[^6]: Ethayarajh et al., "KTO: Model Alignment as Prospect Theoretic Optimization", arXiv:2402.01306, 2024-05. https://arxiv.org/abs/2402.01306
[^7]: Meng et al., "SimPO: Simple Preference Optimization with a Reference-Free Reward", arXiv:2405.14734, 2024-05. https://arxiv.org/abs/2405.14734
[^8]: DeepSeek-AI et al., "DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning", arXiv:2501.12948, 2025-01-22. https://arxiv.org/abs/2501.12948
[^9]: Lightman et al., "Let's Verify Step by Step", arXiv:2305.20050, 2023-05. https://arxiv.org/abs/2305.20050
