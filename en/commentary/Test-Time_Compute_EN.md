# Test-Time Compute: The Paradigm Revolution of Inference-Time Computing

> Scaling Law has undergone three revisions. The first (Kaplan, 2020) told the industry: stack more parameters, more data, more compute, and the model will get stronger. The second (Chinchilla, 2022) corrected the ratio of parameters to data. The third came in September 2024 — OpenAI released o1, making the industry realize for the first time that inference-time computing itself is a scalable resource. This was not a negation of the first two, but the opening of an entirely new dimension at the boundary of training-side scaling.

## I. Three revisions: The evolution of Scaling Law

To understand where test-time compute fits, one must first locate it in the evolution of Scaling Law.

In January 2020, OpenAI's Jared Kaplan et al. published "Scaling Laws for Neural Language Models." The core finding was that model performance (measured by cross-entropy loss) follows a power-law relationship with three factors — parameter count (N), dataset size (D), and training compute (C).[^1] Under this framework, as long as all three elements scale in concert, the model continues to improve. GPT-3's training strategy was a direct product of this thinking: 175 billion parameters, 300 billion tokens, and the largest training compute investment of its time.[^2]

The implicit assumption of the Kaplan scaling law was that, among the three variables, parameter scale mattered most, with data and compute merely playing a supporting role. In practice, many models had parameter counts far exceeding what Chinchilla would later identify as optimal — GPT-3's 175 billion parameters were trained on only 300 billion tokens, which by later standards was severely data-insufficient.

In March 2022, DeepMind's Hoffmann et al. published the "Chinchilla" paper, making the first major revision to the Kaplan scaling law. The Chinchilla paper demonstrated that under a fixed compute budget, parameter count and training data volume should grow in sync, with an optimal ratio of roughly 20 tokens per parameter.[^3] By this ratio, a GPT-3-level compute budget should have trained a model of roughly 70 billion parameters on 1.4 trillion tokens — fewer parameters, more data, and better results. Chinchilla's 70-billion-parameter model defeated Gopher's 280 billion parameters, validating this revision.[^3]

Chinchilla corrected Kaplan's neglect of data, but both shared the same premise: **all capability improvement happens during the training phase.** Once training is complete, capabilities are "frozen" in the weights. When users call the model, they are merely consuming pre-packaged capabilities — the inference phase produces no new capabilities, only outputs existing ones.

This premise was shaken in 2024.

In August 2024, Charlie Snell et al. published "Scaling LLM Test-Time Compute Optimally can be More Effective than Scaling Model Parameters," systematically arguing for a previously underestimated dimension: investing more compute during inference can significantly boost a model's effective performance without increasing model size.[^4] The paper proposed an optimal allocation strategy for test-time compute: different problems should receive different inference compute budgets — some problems require deep search, while quick answers suffice for others.

One month later, on September 12, 2024, OpenAI released o1, turning this theory into a commercial product.[^5] Test-time compute transformed from a paper concept into something users could touch. This was the third revision: **inference-time computing itself is a scalable resource.**

## II. o1: Turning inference compute into a product

After o1, the product logic of the large language model industry changed fundamentally. Previously, all models operated on a "question-in, answer-out" basis — input a prompt, output a response, with the inference process being instantaneous. o1 introduced a new temporal dimension: before delivering its final answer, the model consumes a large number of internal reasoning tokens, generating a chain of thought invisible to the user, then delivers a polished answer.[^5]

This "think first, answer later" mechanism is fundamentally different from traditional chain-of-thought prompting. Traditional CoT is explicit: the user asks the model to "think step by step," and the model writes its reasoning process in the output, where the user can read, check, and correct it. o1's "thinking" is implicit: the reasoning process is intercepted by the system, and the user sees only the final conclusion, unable to observe how the model got from the question to the answer.[^5] OpenAI called this hidden chain-of-thought.

Implicit reasoning produced a stunning performance leap. On the AIME 2024 mathematics competition, o1 achieved 74.4% accuracy, while GPT-4o scored only 12.1%.[^5] This was not an incremental improvement — it was exponential. The gap was not due to larger training parameters or more training data, but to the model investing vastly more inference compute in answering each question. If translated into training-time scaling, this 62-percentage-point gap might have required several times — or even tens of times — more training investment to achieve.

This is the core value proposition of test-time compute: **inference-time computing can significantly boost effective performance without increasing model parameters.** In other words, inference compute can partially substitute for training compute. Rather than spending billions of dollars training a larger model, it makes more sense to spend more tokens at inference time letting the existing model "think a little more."

But o1's design also embedded two structural problems. The first is the transparency issue: hiding the reasoning process prevents users from assessing whether the model's thinking is reliable. The model can claim "I thought about it," but you cannot verify whether it actually did, or what it thought about. This issue is discussed in detail in "The Reasoning Model Watershed."[^6] The second is cost: the extra tokens consumed during inference cost money. When test-time compute transitions from an academic concept to a commercial product, who pays for the model's "thinking time" shifts from a technical question to an economic one.

## III. DeepSeek-R1: A different path for inference compute

o1 demonstrated the effectiveness of inference compute, but its technical approach was not the only possibility. DeepSeek-R1 offered a fundamentally different answer on January 20, 2025.[^7]

o1's reasoning capabilities came from a manually designed training regimen: OpenAI carefully constructed large volumes of supervision data, teaching the model how to reason step by step, then trained the model to "think" in a specific manner using this data. This can be understood as humans "programming" their own reasoning methodology into the model's weights. Inference compute in o1 is a trained, preset skill.

DeepSeek-R1-Zero took an entirely different path. It used no traditional supervised fine-tuning — no human-annotated "correct reasoning processes" to teach the model how to think step by step. It used only a base model, the GRPO (Group Relative Policy Optimization) reinforcement learning algorithm, and rule-based rewards: whether math answers were correct, whether code passed tests.[^7]

The result was that R1-Zero spontaneously developed emergent reasoning behaviors during training — self-verification, retrospective reflection, step-by-step checking. These behaviors were not imitated from human-annotated data; they "grew" under the drive of RL rewards.[^7]

The difference between these two paths reveals divergent understandings of inference compute. Under o1's framework, inference-time computing is a **designed capability**: humans must first define what "good reasoning looks like," then train the model to replicate that reasoning pattern. Under this framework, the ceiling of test-time compute depends on the cognitive boundaries of the human designers — humans can only teach the model reasoning methods they themselves know.

Under R1-Zero's framework, inference-time computing is a **guided behavior**: humans provide only the task and reward signals, and the model explores the most effective reasoning strategies on its own. Under this framework, the ceiling of test-time compute depends on the quality of the reward signals and the size of the search space — theoretically capable of surpassing human reasoning patterns.

This is not merely a dispute over technical approaches but a divergence between two research paradigms. o1's approach is closer to traditional supervised learning: there is annotated data, clear learning objectives, and strong engineering controllability. R1-Zero's approach is closer to evolutionary exploration: no preset objectives, only selection pressure, with results that are more emergent. The former's reasoning capability ceiling is the human designer; the latter's is the algorithm and compute.

Of course, R1-Zero was not without flaws. The purely RL-emergent reasoning behaviors exhibited issues of poor readability, mixed languages, and non-standard formatting. DeepSeek added cold-start data in the final R1 to address these engineering shortcomings.[^7] But the significance of R1-Zero as an experiment lies not in its engineering maturity but in its proof of one thing: reasoning capabilities can grow naturally from RL rewards without the need for manually designed reasoning processes.

## IV. The economics of inference compute

Pre-training costs and inference costs have fundamentally different economic structures. Pre-training is a one-time investment: the training cost of a frontier model ranges from tens of millions to hundreds of millions of dollars; once training is complete, that money is spent regardless of the model's performance — the sunk cost is irrecoverable. Inference cost is a marginal cost: every user call incurs compute charges; the more calls, the higher the total cost, but the per-call cost can be very low.

Test-time compute changed the structure of inference costs. Traditional model inference costs are roughly linear with output token count — generating 1,000 tokens costs approximately ten times more than generating 100 tokens. Reasoning model inference costs introduce a new variable: **thinking depth.** o1 answering a math question may consume thousands of reasoning tokens — invisible to the user, producing no direct information value — yet they are a necessary investment for the model to arrive at the correct answer.

This creates a pricing conundrum: how should reasoning tokens be billed?

One approach is to include reasoning tokens in the total token count for billing purposes. This is what most APIs do — users pay based on total tokens (including reasoning tokens). This approach is simple and transparent, but carries a risk for users: reasoning token counts are opaque (especially in models like o1 that hide the reasoning process), and users cannot predict the cost of a single call. For the same question, the model might use 500 tokens of thinking this time and 5,000 next time, resulting in a tenfold cost difference.

Another approach is the subscription model. OpenAI launched ChatGPT Pro (December 2024, $200/month), offering unlimited access to o1-pro.[^8] Anthropic launched the Claude Max plan (approximately $100–200/month), providing higher usage quotas.[^9] The core value proposition of these premium subscriptions is precisely to provide heavy users with a predictable fixed cost for their inference compute needs.

The economics of the subscription model work like this: the cost of inference compute shifts from "variable cost per call" to "fixed monthly subscription fee," with the platform bearing the uncertainty risk of reasoning tokens. This is cost-effective for heavy users (researchers and developers who call reasoning models dozens of times per day), but not for casual users (ordinary people who occasionally ask a question).

The deeper economic question is: **how much are users willing to pay for "slower but more accurate" answers?**

There is no universal answer. In mathematics competitions, the gap from 12.1% to 74.4% means going from "basically can't do it" to "mostly can" — if the value of a correct answer is high enough (such as critical computations in scientific research, risk modeling in finance), the additional cost of inference compute may be negligible. But in everyday conversation, creative writing, emotional companionship, and similar scenarios, the value of "more accurate" is hard to quantify, and the marginal return of inference compute may be small.

This means that the business model for test-time compute may not be a uniform pricing question but a scenario-specific value question. In high-value, verifiable scenarios, inference compute has a clear payment logic; in low-value, subjective scenarios, a quick answer may suffice. This aligns with the product tiering logic discussed in "The Reasoning Model Watershed": reasoning models do not replace general-purpose models but open up a new value tier on top of them.[^6]

## V. The productization of inference compute: A three-tier pricing gradient

The most profound product impact of test-time compute is its transformation of AI services from a single product into a **gradient of variable compute budgets.**

Traditional large language model products had only one compute mode: input a prompt, the model generates a response, and output tokens are billed. All users and all tasks used the same inference path and the same compute amount. The only difference was model size — GPT-3 was cheap but weak, GPT-4 was expensive but strong.

Reasoning models introduced a second dimension: **compute depth within the same model.** The same question can be handled with a quick answer (spending less compute) or with deep thinking (spending more compute). This creates a three-tier pricing gradient:

**Tier 1: Quick answers.** Using minimal compute, the model generates answers directly without deep reasoning. Suited for simple queries, everyday conversation, and formatting tasks. Lowest price, shortest latency.

**Tier 2: Extended thinking.** The model performs moderate reasoning, consuming a certain number of reasoning tokens. Suited for medium-difficulty analysis, writing, and coding assistance. Mid-range price, acceptable latency.

**Tier 3: Deep reasoning.** The model invests substantial compute in search, verification, and self-correction. Suited for high-difficulty mathematics, complex code generation, and multi-step reasoning. Highest price, longest latency.

OpenAI's product line already reflects this tiering: o1-mini handles simple reasoning tasks, o1 handles standard reasoning tasks, and o1-pro handles high-difficulty tasks.[^8] Anthropic took a different approach: in Claude 3.7 Sonnet, "thinking" is implemented as a toggleable switch — the same model in normal mode provides quick answers, while in extended thinking mode it performs deep reasoning.[^10] The latter offers a more coherent user experience but more complex pricing.

The product implications of this tiering are far-reaching. It means AI services are no longer "a commodity" but "a gradient of compute budgets" — users can flexibly choose reasoning depth based on task complexity and budget. This is closer to cloud computing's pricing model (pay-as-you-go, elastic scaling) than to traditional software's fixed licensing model.

But it also introduces new user experience challenges. If reasoning depth is adjustable, who decides the adjustment — the user or the model? Manual selection by users increases the usage burden ("Should this task use quick mode or deep mode?"); automatic determination by the model risks misjudgment (giving a quick answer when deep thinking was needed, or consuming excessive reasoning tokens when a quick answer would have sufficed). This problem has no mature solution yet, but it will be one of the core design challenges in the productization of reasoning models.

## VI. Theoretical implications: Where is the ceiling of intelligence?

The deepest theoretical implication of test-time compute is a redefinition of the concept of "intelligence."

In the Kaplan-Chinchilla era, the industry's understanding of intelligence could be simplified to a function: **Intelligence = f(training compute).** The intelligence ceiling was determined during the training phase, and the inference phase merely consumed this ceiling. More training investment meant a higher intelligence ceiling — this was the fundamental logic of scaling law.

Test-time compute revised this function to: **Intelligence = f(training compute, inference compute).** Training compute determines the model's **capability ceiling** — how much the model "knows" and what it can "do." Inference compute determines **how closely the model approaches this ceiling** on each task — how much of its potential the model actually realizes when facing a specific problem.

The theoretical significance of this revision is that intelligence is no longer a static property ("how smart is this model") but a dynamic process ("on this problem, how much compute did the model use to approach its capability ceiling"). The same model, answering a simple question quickly (low inference compute) and reasoning deeply about a complex question (high inference compute), exhibits strikingly different levels of "intelligence."

This leads to a radical hypothesis: **if inference-time compute can also scale, does that mean "a sufficiently capable base model + unlimited inference time" could solve any problem?**

This hypothesis approaches validity under certain conditions. For verifiable tasks like mathematics and code, inference compute scaling indeed demonstrates sustained returns — the model can try multiple approaches, self-verify, backtrack and correct until it finds the right answer. In this sense, inference compute transforms "thinking" from an instantaneous act into a search process: the larger the search space (the more reasoning tokens), the higher the probability of finding the correct answer.

But this hypothesis fails under other conditions. For tasks requiring subjective judgment, aesthetic perception, or emotional understanding, more inference compute does not necessarily produce better results. A literary criticism question has no single correct answer, and giving the model ten times more thinking time will not necessarily make the criticism more insightful — because the ultimate judgment criterion lies not within the model's capability range but within the human acceptance range.

There is a critical dividing line here: **task verifiability.** For verifiable tasks (with clear right/wrong criteria), inference compute can extend effective capability through search and self-testing. For non-verifiable tasks (with ambiguous or subjective criteria), the returns on inference compute diminish, because the model cannot know whether it is "approaching" the correct answer.

This means test-time compute is not a panacea. It is an effective supplement to training compute for verifiable tasks, but for non-verifiable tasks, the base model's capability ceiling remains decisive.

Even for verifiable tasks, inference compute scaling faces diminishing returns. Once the model has found the correct answer, continuing to invest reasoning tokens wastes resources. The optimal allocation of inference compute is "just enough" — one token more is waste, one token less is insufficient. This mirrors the ultimate fate of training-side scaling law: as investment increases, marginal returns decline until costs exceed benefits.

The ceiling of intelligence may not lie in any single dimension of scaling — whether training compute or inference compute — but in **the intersection of three dimensions**: the base model's capability ceiling, the depth of inference compute investment, and the task's inherent verifiability. Any shortfall in any one dimension becomes the ceiling. Only when all three expand simultaneously can one approach the theoretical capability limit.

## Commentary

The three revisions of Scaling Law trace a cognitive evolution about "where intelligence comes from."

The Kaplan scaling law of 2020 believed: intelligence comes from more parameters, more data, more compute. This belief drove years of headlong progress from GPT-3 to GPT-4. The Chinchilla revision of 2022 corrected a technical detail: data and parameters must be balanced. The industry's attention shifted from "stacking parameters" to "stacking data." Test-time compute in 2024 opened an entirely new door: intelligence is not only produced during training but can also be enhanced during inference through computation.

The causal chain of the three revisions is clear. The Kaplan scaling law drove the industry to pile on training compute regardless of cost, until training costs soared into the billions of dollars. Chinchilla pointed out that data and parameters must match, pushing the industry to rethink training efficiency. As the optimization space on the training side gradually narrowed — data walls approaching, diminishing returns setting in, frontier model training costs reaching their limits — the industry naturally turned its gaze to the inference side. o1 was not an inspiration that appeared from thin air but a rational choice by the industry after training-side scaling approached its ceiling: the growth curve of training compute was slowing, so a new growth curve must be found on the inference side.

But test-time compute is not a one-time breakthrough. It has its own economic constraints — reasoning tokens cost money, and how much users are willing to pay for "slower but more accurate" answers determines its true market size. It has its own theoretical boundaries — it can only scale continuously on verifiable tasks, with limited contributions to subjective judgment tasks. It has its own trust issues — whether to hide or reveal the reasoning process remains an unresolved governance challenge.

The true historical significance of test-time compute is its rewriting of "intelligence" from a static concept into a dynamic process. In the past, "how smart is this model" was a question with a definitive answer — parameter count, data volume, benchmark scores defined a model's capabilities. Now, "how smart is this model" depends on how much inference compute it is willing to spend on a specific task. A model's capability is no longer a fixed point but a curve — with inference compute investment on the horizontal axis and effective performance on the vertical axis, and the curve's shape determined by training quality.

Kaplan revised compute cognition, Chinchilla revised data cognition, and Test-Time Compute revised inference cognition. Together, they compose the complete picture of contemporary AI scaling: intelligence comes not from either training or inference alone, but from the sum of both working in concert. Whether this sum has an upper limit depends on our understanding of "intelligence" itself — an understanding that is clearly still undergoing revision.

---

*This piece was compiled by the Endfield Industrial Historical Archives team: Fu Xuan (theoretical framework).*

---

(The full technical landscape of inference optimization — from FlashAttention to speculative decoding — is covered in the "Inference Optimization" chronicle.)

[^1]: Kaplan et al., "Scaling Laws for Neural Language Models", arXiv:2001.08361, 2020-01-23. https://arxiv.org/abs/2001.08361
[^2]: Brown et al., "Language Models are Few-Shot Learners" (GPT-3 paper), arXiv:2005.14165, 2020-05-28. https://arxiv.org/abs/2005.14165
[^3]: Hoffmann et al., "Training Compute-Optimal Large Language Models" (Chinchilla paper), arXiv:2203.15556, 2022-03-29. https://arxiv.org/abs/2203.15556
[^4]: Snell et al., "Scaling LLM Test-Time Compute Optimally can be More Effective than Scaling Model Parameters", arXiv:2408.03314, 2024-08-06. https://arxiv.org/abs/2408.03314
[^5]: OpenAI, "Learning to Reason with LLMs", 2024-09-12. https://openai.com/index/learning-to-reason-with-llms/
[^6]: See "The Reasoning Model Watershed" in this chronicle.
[^7]: DeepSeek-AI et al., "DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning", arXiv:2501.12948, 2025-01-22. https://arxiv.org/abs/2501.12948
[^8]: OpenAI, "Introducing ChatGPT Pro", 2024-12-05. https://openai.com/index/introducing-chatgpt-pro/. ChatGPT Pro subscription is priced at $200/month, offering unlimited access to premium features including o1 pro mode.
[^9]: Anthropic's Claude Max plan is priced at approximately $100–200/month, providing heavy users with higher usage quotas and priority access. Specific pricing is uncertain; refer to Anthropic's official website for published rates.
[^10]: Anthropic, "Claude 3.7 Sonnet and Claude Code", 2025-02-24. https://www.anthropic.com/news/claude-3-7-sonnet. Claude 3.7 Sonnet is positioned as Anthropic's first hybrid reasoning model, supporting switching between normal mode and extended thinking mode.
