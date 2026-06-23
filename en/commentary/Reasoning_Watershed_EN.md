# The Reasoning Model Watershed

> Before 2024, large language model competition primarily asked one question: how much data, parameters, and compute to stack during training. After o1, the question became another: when answering, how much time is the model willing to spend thinking? This was not a minor tweak but a genuine watershed in the history of large language models.

## I. The watershed is not about "whether it can reason" but about "reasoning being productized"

Early large language models could obviously reason too. GPT-3, GPT-4, Claude, Gemini could all solve problems, write code, and analyze text. But back then, reasoning was more like a byproduct of language ability: the model read the question and directly generated forward based on patterns learned in training. You could use a prompt to ask it to "think step by step," but this was still an external prompting technique, not the model's product form itself.

**What o1 changed was the product definition.** OpenAI released o1-preview on September 12, 2024, turning "think first, answer later" into an independent model category: the model no longer just instantaneously continues text but consumes additional computation before answering, generating an internal reasoning trajectory, then delivering a polished answer to the user. OpenAI called this "learning to reason" and clearly demonstrated its leaps in mathematics, programming, and scientific reasoning.[^1]

The key here is not the phrase "chain of thought." Chain-of-thought as a prompting method already existed. The real novelty is: **inference time becomes a purchasable, dispatchable, priceable compute resource.** From this point, large language model capability growth no longer occurs only during training but also during inference. The old scaling was "train the model longer and bigger"; the new scaling is "let the model think longer and deeper when answering."

This is the historical position of test-time compute. It rewrites "smart" from a static property into a dynamic process: the same question can be answered cheaply and quickly or expensively and thoughtfully. The model is no longer just a parameter package that compressed knowledge but a system that allocates compute budgets at runtime.

## II. o1's pioneering and its cost: Capability breakthrough, trust contraction

o1's historical achievement is clear: it convinced the industry that after training-time scaling hit diminishing returns, inference-time scaling could still open new space. On the AIME 2024 mathematics competition, o1 reached 74.4% while GPT-4o scored only 12.1%; on the Codeforces programming competition, it reached the 89th percentile. These leaps made "reasoning models" no longer a paper concept but a commercial product.[^1]

But o1 simultaneously planted a problem: **it hid the reasoning process.**

OpenAI's rationale was safety. Hiding raw chains of thought could reduce the chance of users learning to bypass safety policies from the model's internal reasoning; it could also prevent the model from exposing unpolished intermediate thoughts, erroneous attempts, and sensitive inferences directly to users. This rationale is not entirely without merit. A model's actual thought trajectory does not necessarily equal a reliable explanation; it may contain trial-and-error, hallucination, bias, and security risks.

The problem is that hiding chains of thought also introduces another risk: the outside world has no way to judge how the model actually reached its conclusion. What users see is a stronger black box. It will say "I thought about it," but you cannot see how it thought; the provider says "this is for safety," but you cannot independently verify this safety logic.

Thus, o1 simultaneously pioneered the reasoning model and pushed the reasoning model's trust problem to the forefront. The previous black box was mainly about training data, weights, and system prompts; after o1, the black box gained another layer: **runtime thinking itself.**

This is o1's duality. It proved the value of test-time compute, but did not answer how test-time compute should be trusted.

## III. DeepSeek-R1: Turning reasoning capability from a luxury into a public good

The significance of DeepSeek-R1 cannot be seen as merely "another model that caught up with o1." If it were just closed-source API versus closed-source API, it would be nothing more than a price war and performance war. What truly changed the landscape was R1 combining three things: reasoning capability, open weights, and observable chains of thought.

DeepSeek released R1 on January 20, 2025, along with the paper, model weights, and distilled models. In the paper, R1-Zero developed reasoning behaviors through reinforcement learning and rule-based rewards without traditional cold-start supervised fine-tuning; R1 then added cold-start data on this basis to improve readability and stability.[^2] This allowed the industry to see clearly for the first time that reasoning capability does not necessarily have to be "forged" by closed laboratories through opaque processes — it can be described in papers, reproduced by communities, and distilled into smaller models.

R1's impact on o1 was not merely "I can reason too" but "I let others also possess reasoning." This was a dimensional reduction attack at the ecosystem level:

- o1 made reasoning a high-priced, closed-source, process-hidden service;
- R1 made reasoning a downloadable, modifiable, distillable capability;
- o1 made users trust the provider;
- R1 gave users at least the opportunity to verify for themselves.

Of course, disclosing chains of thought does not equal absolute truth or absolute safety. The `<think>` displayed by the model may still be a trained and shaped readable trajectory, not necessarily equivalent to all internal mechanisms. Treating "displayed thinking" as "true cause" is also naive. But what matters historically is not whether it provided philosophical transparency, but that it changed the industry default: reasoning models do not have to be inherently hidden.

After R1, a reasoning model's legitimacy no longer comes solely from "I am stronger" but also from "whether I allow you to inspect, deploy, and replace me." This is its watershed significance.

## IV. Claude 3.7: Reasoning need not be a different model — it can be a switch

OpenAI's approach was separation: a regular model handles daily tasks, the o-series handles complex reasoning. This design is clear and easy for users to understand — switch to the reasoning model when you want reasoning. But it created a practical problem: many tasks do not naturally divide into "needs reasoning" and "doesn't need reasoning." Writing code might require deep thinking, or it might just be filling in a function; a chat might just need a quick answer, or it might suddenly enter a complex decision.

On February 24, 2025, Anthropic released Claude 3.7 Sonnet, offering a different answer: placing both regular responses and extended thinking within the same model, letting the user or system decide when to activate thinking. Anthropic stated in its release that Claude 3.7 Sonnet is its first hybrid reasoning model, emphasizing that it can both respond instantly and engage in extended thinking when needed.[^3]

The historiographic significance of this step is transforming reasoning from a "model difference" into a "runtime mode difference."

If o1 established reasoning models as a new category, Claude 3.7 reminded the industry that reasoning need not exist permanently as a new category. It may simply be one working state of future general-purpose models. Just as humans don't split into "daily person" and "reasoning person" but allocate different attention to different tasks; models may not need to split into fast models and slow models but can switch within the same entity.

This hybrid reasoning addresses one of o1's product pain points: users are not always willing to wait for "deliberate thinking." For simple questions, slow thinking is wasteful; for complex questions, a quick answer is irresponsible. The core of hybrid reasoning is transforming test-time compute from a fixed cost into a variable cost.

But it also introduces a new question: who decides when to think? Manual toggling by users increases the usage burden; automatic determination by the model risks misjudgment. Once the reasoning budget becomes part of the product experience, UI, billing, latency, and reliability all become entangled with the technical approach. This shows that reasoning model competition is no longer just model paper competition but systems design competition.

## V. Qwen3: Hybrid reasoning enters the open-source full spectrum

Qwen3's position is precisely after Claude 3.7, bringing the "thinking/non-thinking" dual mode into open-source model series. Alibaba released Qwen3 on April 29, 2025, covering multiple scales from small parameters to the MoE flagship, and prominently featuring thinking mode and non-thinking mode switching in its project documentation.[^4]

The importance of this is twofold.

First, hybrid reasoning is no longer just a closed-source product experience. The open-source community can obtain models supporting thinking switches for local deployment, fine-tuning, quantization, agent systems, and industry adaptation. Reasoning capability thus enters the "full-spectrum" stage: not only the most expensive flagship model can think slowly; small models can also allocate thinking budgets within their own capability boundaries.

Second, Qwen3 shifts reasoning model competition from individual models to family ecosystems. R1's strength was using a single open-source release to break through o1's closed narrative; Qwen3's strength is completeness: multiple sizes, unified license, hybrid reasoning, engineering-ready. For enterprises and developers, this completeness is sometimes more important than being first on a single leaderboard. Because real-world deployment is never as simple as "choosing the world's strongest model" — it requires balancing cost, latency, hardware, language, licensing, and maintainability.

From o1 to R1, then to Claude 3.7 and Qwen3, reasoning models completed a morphological evolution:

1. **Dedicated reasoning model**: o1 proved slow thinking is effective;
2. **Open reasoning model**: R1 proved slow thinking can be open-sourced and distilled;
3. **Hybrid reasoning model**: Claude 3.7 proved slow thinking can be a toggle;
4. **Open-source hybrid reasoning series**: Qwen3 proved this toggle can enter a complete ecosystem.

This chain is more important than any single benchmark.

## VI. Hidden vs. revealed: Chains of thought are not the answer but a governance question

The most slogan-prone debate around reasoning models is "hidden chains of thought" versus "revealed chains of thought." But this is not a simple moral multiple-choice question.

Hiding chains of thought has justification. A model's raw thinking may expose safety strategies, leak sensitive inferences, or mislead users into treating intermediate guesses as facts. Especially in fields like healthcare, law, finance, and cybersecurity, unpolished reasoning processes could create new risks. A provider not disclosing raw chains does not necessarily equal malice.

Revealing chains of thought also has justification. Users need to know why the model answered this way, researchers need to analyze where the model fails, and developers need to debug agent behavior. Complete concealment turns reasoning models into "oracle machines": they give conclusions without checkable paths. The stronger the capability, the more dangerous this oracle-ization becomes.

So the real question is not "reveal or hide" but **to what level to reveal, to whom, and in what form.**

The likely stable form is not dumping all raw tokens to the user, nor forever providing only a conclusion, but tiering:

- For ordinary users: readable, concise, safety-processed reasoning;
- For developers: reasoning summaries, tool call traces, confidence scores, and failure signals;
- For auditors: more granular logs and evaluation materials under controlled conditions;
- For high-risk tasks: requiring the model to explicitly list key assumptions, evidence sources, and uncertainties.

In other words, chains of thought are not simply "explanation text" but a governance interface. o1 pulled it back inside the provider; R1 pushed it into the open; Claude 3.7 and Qwen3 made it a toggleable experience. Future truly mature reasoning systems will likely decompose "thinking" into multiple levels rather than choosing between fully hidden and fully revealed.

## VII. The true watershed: From model capability history to compute budget history

The watershed of reasoning models is superficially a relay of several models — o1, R1, Claude 3.7, Qwen3; at a deeper level, the narrative center of gravity of large language model history has shifted.

In the era from GPT-3 to GPT-4, everyone cared about training: how many parameters, how many tokens, how many GPUs, how much data. After a model was released, its capabilities were largely fixed in the weights. Users calling the model were merely consuming pre-packaged capabilities.

In the reasoning model era, capabilities are no longer fully fixed. Models can at runtime use more tokens for search, verification, reflection, tool calling, and generating candidate answers before selecting. Thus, the questions become:

- When is it worth thinking more?
- How much more thinking is cost-effective?
- Can the thinking process be trusted?
- Who pays the reasoning cost?
- Can open-source models bring this capability to local and industry scenarios?

This is the true meaning of test-time compute. It is not as shallow as "the model outputs longer text" — it expands the AI system's core resource from training-centric to inference-on-site. Training-time compute determines the model's ceiling; inference-time compute determines how closely each answer is willing to approach this ceiling.

Therefore, o1 is the door-opener, DeepSeek-R1 is the wall-breaker, Claude 3.7 is the product form transformer, and Qwen3 is the one who spread the new form into the open-source ecosystem. Together, the four completed a turning point: large language models are no longer just ever-larger language machines; they are beginning to become reasoning systems that allocate compute budgets at the task site.

## Commentary

The watershed of reasoning models is not some day when a model suddenly "gained thought." More precisely, it is the industry admitting that intelligence is not only hidden in trained parameters but also happens in the process of answering questions.

o1 made slow thinking a commodity, R1 made slow thinking a public capability, Claude 3.7 made slow thinking a switch, Qwen3 brought this switch into the open-source full spectrum. The debate between hidden and revealed chains of thought is only the surface layer of this shift; the deeper change is the restructuring of compute budgets, trust mechanisms, and product forms together.

Henceforth, evaluating a model requires not only asking "how strong is it" but also "how does it think, when does it think, who can inspect its thinking, and can users afford its thinking." These four questions are precisely the fundamental questions of the reasoning model era.

---

*This piece was compiled by the Endfield Industrial Historical Archives team: Fu Xuan (theoretical framework).*

---

(The complete iteration history of the GPT series is covered in *The GPT Chronicle*; DeepSeek's reasoning model breakthrough is covered in *The DeepSeek Chronicle*.)

[^1]: OpenAI, "Learning to Reason with LLMs", 2024-09-12. https://openai.com/index/learning-to-reason-with-llms/
[^2]: DeepSeek-AI et al., "DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning", arXiv:2501.12948, 2025-01-22. https://arxiv.org/abs/2501.12948; DeepSeek-AI, "DeepSeek-R1", GitHub repository. https://github.com/deepseek-ai/DeepSeek-R1
[^3]: Anthropic, "Claude 3.7 Sonnet and Claude Code", 2025-02-24. https://www.anthropic.com/news/claude-3-7-sonnet
[^4]: QwenLM, "Qwen3", GitHub repository, 2025-04-29. https://github.com/QwenLM/Qwen3
