# The Biography of InstructGPT

> InstructGPT was not the largest model, nor the smartest. It was the first model that learned to "follow instructions." A 1.3B-parameter InstructGPT outperformed the 175B-parameter GPT-3 in human evaluation—this single sentence redefined the entire industry's concept of a "good model." Without InstructGPT, there would be no ChatGPT; without ChatGPT, large language models might still be confined to APIs and papers today.

---

## I. Technical Background

GPT-3 (2020-06) demonstrated the emergent abilities of large-scale language models: given 10–100 examples, it could perform translation, arithmetic, and coding. But GPT-3 had a fundamental product flaw: **it did not know what the user wanted.**

Ask GPT-3 to write an email, and it might continue completing the prompt text instead; ask it a dangerous question, and it might answer forthrightly; request a factual response, and it might fabricate one with great fluency. GPT-3's problem was not insufficient capability—it was a gap between the objective it learned during training (predicting the next token) and what users expected when using it (completing tasks according to instructions).

Before InstructGPT, the primary method for addressing this problem was **supervised fine-tuning (SFT)**: having human annotators write ideal responses for each prompt, then training the model on these examples. This method worked but scaled poorly—covering all possible prompts and scenarios would require an impractically large volume of annotated data. Moreover, in many cases, humans cannot articulate what the "best response" should look like, but can easily judge that "response A is better than response B." [^1]

RLHF (Reinforcement Learning from Human Feedback) seized upon this insight: **you don't need standard answers, only rankings.** This idea was first validated in a 2017 OpenAI work that used human preferences to train reinforcement learning agents for games and robotics tasks. [^2] InstructGPT's contribution was migrating this approach from games and robots to language models—and proving it was industrially viable.

---

## II. Core Innovations

### 2.1 The three-step method: SFT → Reward Model → PPO

InstructGPT's training pipeline consists of three steps, and this three-step method subsequently became the standard paradigm for post-training across the entire large model landscape: [^1]

**Step 1: Supervised Fine-Tuning (SFT).** Sample from GPT-3's API user prompts, have annotators write "ideal responses," and use these demonstration data to fine-tune GPT-3. The purpose of this step is to give the model an initial "instruction-following" ability—so it at least understands that "what the user said is not text to be completed, but a question to be answered."

**Step 2: Train a Reward Model.** For the same prompt, have the SFT model generate multiple responses (typically 4–9), and have annotators rank these responses—"A is better than B, B is better than C." Use these ranking data to train a reward model that learns to assign a score to any response, predicting "how good a human would find this response."

**Step 3: PPO Reinforcement Learning Optimization.** Use the reward model's scores as reward signals and optimize the language model through the PPO (Proximal Policy Optimization) algorithm—teaching the model to generate higher-scoring responses. To prevent the model from "going off track" during optimization (pursuing high scores while losing language ability), a KL divergence penalty term is added during training, constraining the optimized model from deviating too far from the SFT model.

The elegance of this three-step method lies in: **transforming the vague concept of "what humans consider good" into a trainable numerical signal.** Annotators do not need to write perfect answers—only to compare. The reward model then generalizes these local comparisons to a broader range of prompts. PPO then back-propagates the reward signal into the language model's parameters.

### 2.2 Small models beating large models

InstructGPT's most impactful experimental result was: **the 1.3B-parameter InstructGPT outperformed the 175B-parameter GPT-3 in human evaluation.** [^1]

The significance of this result was profound—it was the first definitive proof that: **a model's "usability" depends not only on parameter scale.** A 1.3B model, after alignment training, comprehensively surpassed a 100× larger unaligned model across three dimensions: "following instructions," "being helpful," and "reducing harmful outputs."

This discovery directly changed the industry's evaluation criteria for "good models." In 2020, a "good model" meant "high scores on benchmarks"; after 2022, a "good model" meant "satisfying in real-world use." InstructGPT introduced "user experience" into the core of model evaluation—for a field long driven by benchmarks, this was a paradigm shift.

### 2.3 Key data

| Metric | Value | Notes |
|--------|-------|-------|
| Base model | GPT-3 (175B) | InstructGPT was built on different scale versions of GPT-3 [^1] |
| Smallest aligned version | 1.3B | Outperformed 175B GPT-3 in human evaluation [^1] |
| Number of annotators | ~40 | From Upwork and OpenAI's internal annotation team [^1] |
| Paper publication date | 2022-03-04 | arXiv:2203.02155 [^1] |
| API availability | 2022-01 | InstructGPT model series offered via OpenAI API [^3] |
| Alignment tax | ~5–10% reduction | On some academic benchmarks, aligned models scored slightly below the original GPT-3 [^1] |

---

## III. Impact and Legacy

### 3.1 ChatGPT: InstructGPT's productization

InstructGPT was a technical paper; ChatGPT was a product. The relationship between them is straightforward: **ChatGPT is the result of applying the InstructGPT method to GPT-3.5.**

On November 30, 2022, OpenAI released ChatGPT—placing the SFT + RLHF-aligned GPT-3.5 into a chat interface. One million users in five days, 100 million monthly active users in two months. ChatGPT did not invent RLHF, nor did it invent the chat interface—it simply combined InstructGPT's method with a simple UI, and the result was an entirely new product category.

From a technical perspective, ChatGPT's improvements over InstructGPT were incremental—a better base model (GPT-3.5 vs GPT-3), more dialogue data, more refined safety boundaries. But from a product perspective, it was a qualitative shift: when an RLHF-aligned large model was placed in a chat box that ordinary people could use, "AI" transformed from a technical term into a popular verb.

(See also "The GPT Lineage" and "The Biography of RLHF")

### 3.2 "Pre-train → SFT → RLHF" becomes the industry standard

After InstructGPT, the three-step "pre-train → SFT → RLHF" pipeline became the default training pipeline for all closed-source large models. Claude uses a Constitutional AI variant (replacing some human feedback with AI feedback); Gemini uses its own proprietary preference optimization method; Llama-Chat uses DPO (Direct Preference Optimization) instead of PPO—but the fundamental framework has remained the three steps established by InstructGPT.

This standardization had impact beyond the technical level. It created new organizational needs: companies needed annotation teams, red-teaming, policy documents, refusal rules, evaluation sets, and safety reports. **Alignment was no longer a set of values researchers wrote about in papers—it became an entire suite of processes that must be passed before product launch.** InstructGPT transformed "alignment" from an academic concept into industrial infrastructure.

### 3.3 Subsequent challenges to RLHF

The RLHF paradigm established by InstructGPT was not without controversy.

Anthropic's **Constitutional AI** (2022-12) posed the first systematic challenge: using "constitutional principles + AI self-criticism" to replace some human annotation, reducing annotation cost and subjective bias. [^4]

**DPO** (2023-05) bypassed explicit reward models and PPO, directly optimizing the language model with preference data—simpler training, lower engineering complexity. [^5]

**DeepSeek-R1** (2025-01) posed a more radical challenge: for reasoning ability, the best reward signal is not "what humans consider good" but "whether the answer is correct." R1-Zero skipped SFT entirely, directly using rule-based rewards and GRPO to train reasoning capability—proving that RLHF was not the only post-training path. [^6]

These challenges collectively point to one conclusion: InstructGPT's three-step method is a starting point, not an endpoint. It established the necessity of "post-training," but later practitioners found different answers to the questions of "what signal to use," "how to optimize," and "whether human preferences are needed."

### 3.4 Decline or absorption

InstructGPT as a standalone product has long been retired from OpenAI's API—replaced by ChatGPT (GPT-3.5/4). But the methodology it established—SFT + preference optimization—remains the core framework for post-training all large language models to this day.

Its most brilliant legacy is ChatGPT. Its most important intellectual contribution is: **a model's usability depends not only on how large it is, but on how well it "listens."** Before 2022, this was the intuition of a few; after 2022, it became the common knowledge of the entire industry.

---

## Commentary

InstructGPT's contribution was teaching large models to restrain themselves in the presence of humans.

GPT-3 proved that scale could produce emergent abilities, but it gave the model no sense of propriety—it did not know what to say, what not to say, or what tone earns trust. InstructGPT used preference rankings to supply this propriety. The 1.3B InstructGPT beating the 175B GPT-3 was not because the 1.3B model was "smarter"—it was because it better understood what users wanted.

The far-reaching significance of this discovery: it transformed "model capability" from a one-dimensional scale (benchmark scores) into a two-dimensional one (capability × alignment). A model with high capability but poor alignment may deliver a worse user experience than a model with lower capability but good alignment. This insight changed the entire industry's resource allocation logic—from "spend everything on pre-training" to "pre-training and post-training are equally important."

InstructGPT's technical details—SFT, reward model, PPO—were quickly surpassed and replaced. But its core insight—"human preferences are a trainable signal"—remains the cornerstone of all large model post-training. From RLHF to DPO to RLAIF to rule-based rewards, what later practitioners changed was the method; what remained unchanged was the principle InstructGPT first proved: large models must learn to listen before they can become useful.

---

*This entry was compiled by the Endfield Industrial Chronicle team: Zhuang Fangyi (lead author).*

---

[^1]: Ouyang et al., "Training language models to follow instructions with human feedback", arXiv:2203.02155, 2022-03-04. https://arxiv.org/abs/2203.02155
[^2]: Christiano et al., "Deep reinforcement learning from human preferences", arXiv:1706.03741, 2017-06-13. https://arxiv.org/abs/1706.03741
[^3]: OpenAI Blog, "Aligning language models to follow instructions", 2022-01. (Announcement of the InstructGPT model series first being made available via API)
[^4]: Bai et al., "Constitutional AI: Harmlessness from AI Feedback", arXiv:2212.08073, 2022-12-15. https://arxiv.org/abs/2212.08073
[^5]: Rafailov et al., "Direct Preference Optimization: Your Language Model is Secretly a Reward Model", arXiv:2305.18290, 2023-05-29. https://arxiv.org/abs/2305.18290
[^6]: DeepSeek-AI et al., "DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning", arXiv:2501.12948, 2025-01-22. https://arxiv.org/abs/2501.12948
