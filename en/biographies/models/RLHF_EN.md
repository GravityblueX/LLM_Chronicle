# The Biography of RLHF

> RLHF (Reinforcement Learning from Human Feedback) is not a model—it is a training methodology that transforms language models that can only "continue text" into assistants that can "follow instructions." It made large models usable as products for the first time, and turned "alignment" from a paper topic into industry infrastructure.

---

## I. Technical Background

GPT-3 proved that large models could learn many things through scale, but it never truly learned to "act according to human intentions." Ask it to write an email, and it might continue completing the prompt; ask it a dangerous question, and it might answer anyway; request facts, and it might fabricate fluently. The problem was not that the model could not generate text—it was that it did not know which kind of response humans would prefer.

The early solution was supervised fine-tuning: having annotators write ideal responses, then training the model on these samples. This could teach the model to imitate demonstrations, but it was difficult to cover all situations. In many cases, humans cannot articulate what the "best response" should be, but they can readily see which of two responses is better. RLHF seized precisely on this distinction: not just having people write answers, but having people rank answers. [^1]

RLHF's prehistory can be traced to OpenAI's 2017 work: using human preferences as reward signals to train reinforcement learning agents for Atari games and robotic control tasks. By the time of InstructGPT, this line of thinking was transplanted to language models, becoming the standard route for large model alignment. [^2]

---

## II. Core Innovations

### 2.1 From "writing standard answers" to "comparing which is better"

InstructGPT's training pipeline has three steps: first, supervised fine-tuning (SFT) with human demonstrations; next, having annotators compare multiple model outputs to train a reward model; finally, PPO reinforcement learning to optimize the language model toward producing responses that humans prefer. [^1]

The key to this design is not PPO itself, but the transformation of "human preference" into a trainable signal. Annotators do not need to write perfect answers for every question—only to judge that A is better than B. The reward model then generalizes these local judgments to a wider range of prompts. What the model learns is not a specific set of answers, but a style of responding: more helpful, more honest, less harmful.

InstructGPT's results were highly representative: the outputs of a 1.3B-parameter InstructGPT were preferred by human evaluators over those of the 175B-parameter GPT-3. In other words, alignment training demonstrated for the first time unequivocally that a model's "usability" does not depend solely on parameter scale. [^1]

### 2.2 ChatGPT: the productization of RLHF

ChatGPT did not invent RLHF. Its importance lies in letting the entire world experience RLHF's effects for the first time. On November 30, 2022, OpenAI released ChatGPT, placing the instruction-tuned and RLHF-aligned GPT-3.5 into a chat interface. One million users in five days, 100 million monthly active users in two months—this was not a speed of dissemination that a paper alone could produce. [^3][^4]

ChatGPT's "intelligence" partly came from the base model, but its "assistant-like" quality came primarily from post-training. It would explain steps, apologize, decline clearly inappropriate requests, and respond in a stable, polite, and predictable tone. For ordinary users, these details mattered more than benchmarks. RLHF transformed the language model from a "powerful text completer" into a "conversational tool."

This section does not repeat the narrative about GPT-3.5 and ChatGPT's growth covered in "The GPT Lineage." Here we note only one point: ChatGPT was RLHF's showroom. Before this, RLHF was a training method; after this, RLHF was a product threshold.

### 2.3 Key data

| Event | Date | Key point |
|-------|------|-----------|
| OpenAI trained RL agents with human preferences | 2017-06 | Early experiment using human preferences as reward signals [^2] |
| InstructGPT paper published | 2022-03 | SFT → Reward Model → PPO, establishing the standard RLHF pipeline for language models [^1] |
| ChatGPT released | 2022-11-30 | RLHF-aligned GPT-3.5 packaged as a mass-market chat product [^3] |
| Constitutional AI paper submitted | 2022-12-15 | Using AI feedback and explicit principles to reduce dependence on human preference annotation [^5] |
| DeepSeek-R1 released | 2025-01-20 | Using rule-based rewards and GRPO to advance reasoning capability, challenging the centrality of "human preference reward models" [^6] |

---

## III. Impact and Legacy

### 3.1 Industry standard: post-training is mandatory after pre-training

RLHF changed the large model training pipeline. In the GPT-3 era, people cared about pre-training scale: how many parameters, how many tokens, how many GPUs. After InstructGPT, the question became: how do we make a model usable after pre-training?

Thus "pre-train → SFT → preference optimization" became the industry's default recipe. Different companies change the names, algorithms, and data sources, but the fundamental goal is the same: take a model that can generate text and shape it into an assistant that is more willing to follow instructions, less prone to misbehavior, and more aligned with product boundaries. Claude, Gemini, Llama-Chat, Qwen-Chat, and other subsequent models all find their own versions within this post-training route.

RLHF also created new organizational needs. Companies need annotation teams, red-teaming, policy documents, refusal rules, evaluation sets, and safety reports. Alignment is no longer a set of values researchers write about in papers—it has become an entire suite of processes that must be completed before product launch.

### 3.2 Anthropic's Constitutional AI: the first systematic counter-reaction to RLHF

RLHF's weaknesses were equally clear. First, it depends on massive human annotation, which is expensive and slow to scale. Second, human preferences are inherently unstable: different cultures, regions, and tasks have varying judgments of a "good response." Third, the reward model learns annotator preferences, which do not necessarily equal publicly auditable principles.

Anthropic's Constitutional AI was proposed precisely along these weaknesses. It gives the model a set of "constitutional" principles, has the model first generate problematic responses, then self-critique and self-revise according to the principles; subsequently, it trains the model using AI-generated preference data. This does not entirely abandon RL, but changes "humans scoring one by one" to "model self-evaluating according to explicit principles." [^5]

This is a moderate counter-reaction: it acknowledges RLHF's goal—making models more harmless and more controllable—but it is dissatisfied with RLHF's means—delegating massive value judgments to invisible annotation processes. The historical significance of Constitutional AI lies here: it pushed alignment from "human preferences" toward "principles that can be written down." These principles may not be perfect, but they are easier to discuss, challenge, and modify than black-box annotation.

### 3.3 From RLHF to RLAIF and DPO: moving PPO from the center

PPO in RLHF is effective but temperamental. Training can be unstable, engineering complexity is high, and the reward model can be "gamed." Subsequent research therefore began seeking simpler preference optimization methods.

RLAIF (Reinforcement Learning from AI Feedback) replaced the feedback source from humans with AI, reducing annotation costs; DPO (Direct Preference Optimization) went further, bypassing explicit reward models and online reinforcement learning entirely, directly optimizing the language model with preference data. After the DPO paper was proposed in 2023, it quickly became one of the commonly used methods for post-training open-source models. [^7]

These methods are not enemies of RLHF—they are more like its decomposers. They accept that "preference data is important" but question whether "you must train a reward model and then run PPO." This indicates that RLHF's true legacy is not some particular algorithmic combination, but a larger idea: language models need to be shaped by preferences.

### 3.4 DeepSeek-R1: the second counter-reaction to the RLHF paradigm

DeepSeek-R1's counter-reaction was more radical. It was concerned not with the politeness and safety of ordinary chat, but with verifiable tasks like mathematics, code, and logical reasoning. For these tasks, human preferences are not necessarily the best reward signal; whether the answer is correct and whether the code passes tests is clearer.

DeepSeek-R1-Zero skipped cold-start SFT, starting directly from the base model, using GRPO and rule-based rewards to train reasoning capability. Rewards came primarily from verifiable rules: whether mathematical answers were correct, whether output formats met requirements. The paper reported that during training, the model exhibited "aha moment"-like self-reflection behaviors: it would pause to re-evaluate its reasoning and allocate more thinking time. [^6]

The official DeepSeek-R1 then moderated the approach: first using a small amount of high-quality cold-start data to improve readability, then performing large-scale RL. This shows that R1 was not simply claiming "no SFT, no human data"—it was proving something else: for reasoning capability, rewards can come from the environment and from rules, without always depending on human preference models.

This had a major impact on the RLHF paradigm. RLHF trains models to be "more like what humans prefer in an assistant"; the R1 route trains models to be "better at solving verifiable objectives." The former emphasizes desirability; the latter emphasizes verifiability. As frontier competition enters the reasoning phase, the latter's importance is rapidly rising.

### 3.5 Decline or absorption

By 2026, RLHF has not disappeared, but it is no longer the sole answer. It has been absorbed into the larger concept of "post-training": SFT, RLHF, RLAIF, DPO, rule-based rewards, refusal training, red-team data, and inference-time compute all play roles within the same phase.

Its most brilliant moment was ChatGPT: using human feedback to turn a model into a mass-market product. Its most obvious limitations also emerged after ChatGPT: excessive accommodation makes models sycophantic, reward models can be exploited, human annotation is expensive, refusal boundaries spark controversy, and genuine reasoning ability cannot rely solely on "humans feeling it seems right."

Therefore, RLHF's fate is not to be overthrown, but to be demoted: from "the synonym for large model alignment" to "one core tool in the post-training toolbox."

---

## Commentary

RLHF's contribution was teaching large models to restrain themselves in the presence of humans.

Pre-training gave models knowledge and linguistic ability, but no sense of propriety. RLHF used preference rankings to supply this propriety: which responses are helpful, which are dangerous, what tone earns trust. InstructGPT proved that a small model after alignment can be more usable than a large one; ChatGPT proved that this "usability" was sufficient to open the mass market.

But RLHF was not the endpoint either. Anthropic argued that behind preferences there should be publicly discussable principles; DeepSeek-R1 argued that for reasoning tasks, the best reward may not come from human feelings, but from the answer itself. That a method can provoke such counter-reactions is itself evidence that it once stood at the center. RLHF's ultimate historical position is probably not "the final solution for alignment," but the earliest bridge built between large models that can speak and large models that can act.

---

*This entry was compiled by the Endfield Industrial Chronicle team: Silence (lead author).*

---

(Related entry: "The Biography of InstructGPT.")

[^1]: Ouyang et al., "Training language models to follow instructions with human feedback", arXiv:2203.02155, 2022-03-04. https://arxiv.org/abs/2203.02155
[^2]: Christiano et al., "Deep reinforcement learning from human preferences", arXiv:1706.03741, 2017-06-13. https://arxiv.org/abs/1706.03741
[^3]: OpenAI, "Introducing ChatGPT", 2022-11-30. https://openai.com/blog/chatgpt
[^4]: Reuters, "ChatGPT sets record for fastest-growing user base - analyst note", 2023-02-01. https://www.reuters.com/technology/chatgpt-sets-record-fastest-growing-user-base-analyst-not-2023-02-01/
[^5]: Bai et al., "Constitutional AI: Harmlessness from AI Feedback", arXiv:2212.08073, 2022-12-15. https://arxiv.org/abs/2212.08073
[^6]: DeepSeek-AI et al., "DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning", arXiv:2501.12948, 2025-01-22. https://arxiv.org/abs/2501.12948
[^7]: Rafailov et al., "Direct Preference Optimization: Your Language Model is Secretly a Reward Model", arXiv:2305.18290, 2023-05-29. https://arxiv.org/abs/2305.18290
