# The Biography of o1

> o1 was OpenAI's first "reasoning model," released in September 2024. It did not pursue larger parameters or more training data — it performed internal chain-of-thought reasoning before answering, using additional inference time to plan, verify, and revise its thinking. AIME math competition scores leaped from GPT-4o's 12% to 74% — not a gradual improvement, but a sudden migration of capability from one domain to another. o1 inaugurated the "reasoning model" category and redefined the boundaries of the Scaling Law.

---

## I. Technical Background

GPT-4 (2023-03) defined the "frontier" standard, but its reasoning was "intuitive" — predicting the next token, with no internal analytical steps. GPT-4 could fluently write code, solve math problems, and translate, but still had clear shortcomings on tasks requiring multi-step reasoning. It was like a clever student — knowledgeable but prone to "careless" mistakes when facing complex problems.

In early 2024, the industry faced an unsolved problem: **pure parameter scaling was approaching diminishing returns.** GPT-4's parameter count was rumored to be 1.76 trillion, but its reasoning ability did not show a qualitative leap over GPT-3.5 — it merely "passed" on more benchmarks. The Kaplan law (2020) and the Chinchilla correction (2022) both focused on training-phase scaling: more parameters, more data, more compute. But training-side scaling was approaching its ceiling — the data wall, cost wall, and energy wall made "continuing to stack training compute" increasingly difficult.

In August 2024, Charlie Snell et al. published "Scaling LLM Test-Time Compute Optimally can be More Effective than Scaling Model Parameters," systematically arguing for a previously underappreciated dimension: **investing more computation during the inference phase could significantly improve a model's effective performance without increasing its size.**[^1]

One month later, OpenAI turned this theory into a product with o1.

---

## II. Core Innovation

### 2.1 Inaugurating the "thinking" paradigm: internal chain-of-thought

o1's core differentiator: it generates a **hidden chain-of-thought** internally before answering — using additional inference time to plan, verify, and revise its thinking. Users see only the final answer; the intermediate reasoning process is deliberately hidden.[^2]

The design philosophy was clear: GPT-4's "next token" prediction is an intuitive form of fast thinking — fluent, quick, but error-prone on tasks requiring multi-step reasoning. o1's "think first, then speak" is a reasoning form of slow thinking — slower, more computationally expensive, but far more accurate on math, coding, and scientific reasoning.

o1's "thinking" is not traditional chain-of-thought prompting (where the user asks the model to "think step by step" and the model writes the reasoning in its output). o1's reasoning is **implicit** — the reasoning process is intercepted by the system, and users see only the final conclusion without seeing how the model navigated from question to conclusion. OpenAI called this hidden chain-of-thought.[^2]

### 2.2 o1-preview / o1-mini: a two-product combination

**2024-09-12** — OpenAI released **o1-preview** and **o1-mini**, available only to ChatGPT Plus/Team and API Tier 5 users.[^2]

o1-preview was the flagship reasoning model, focused on complex reasoning tasks. o1-mini was a smaller, faster, cheaper reasoning model focused on STEM (science, technology, engineering, mathematics) reasoning. o1-mini underperformed o1-preview on non-STEM tasks, but its cost-effectiveness on math and coding far exceeded the flagship.

The pricing gap was significant:[^2]
- o1-preview: $15/million input tokens, $60/million output tokens
- o1-mini: $3/million input tokens, $12/million output tokens

o1-mini was 80% cheaper, yet its performance on certain reasoning benchmarks approached or even exceeded o1-preview. For most developers' practical scenarios (code generation, math problem-solving, data cleaning), o1-mini was the more sensible choice.

This decision was elegant at the product level. o1-preview established the brand ceiling of "strongest reasoning," but its premium pricing deterred most people; o1-mini was a low-barrier entry point, letting developers try "reasoning models" at low cost. Together, the two formed a "brand pull + volume" dual-tier pricing structure — the same logic as Mercedes-Benz's premium S-Class and volume C-Class.

### 2.3 Leap in math/coding/scientific reasoning

o1 achieved a leap on reasoning-intensive benchmarks:[^2]

| Benchmark | o1-preview | GPT-4o | Improvement |
|-----------|:--:|:--:|:--:|
| AIME 2024 (math competition) | 74.4% | 12.1% | **+62.3** |
| GPQA Diamond (scientific reasoning) | 77.3% | 56.1% | +21.2 |
| Codeforces | 89%ile | 11%ile | +78 |
| International Math Olympiad | 83.3% | 13.4% | +69.9 |

The most stunning number was AIME: from 12% to 74%. This was not a gradual improvement — it was a sudden migration of capability from one domain to another. GPT-4o's 12% accuracy on AIME meant it "essentially cannot" solve competition math problems; o1's 74% meant it "mostly can." This gap was achieved not through a bigger model or more training data, but through the model investing far more reasoning computation per question than its predecessors.

In the 2024 International Olympiad in Informatics (IOI), o1 scored 213 under human-equivalent conditions, ranking at the 49th percentile among all contestants. This meant o1's coding ability surpassed nearly half of the human participants — and these participants were the world's finest young programmers.

### 2.4 ARC-AGI performance

o1's performance on ARC-AGI (Abstraction and Reasoning Corpus for Artificial General Intelligence) attracted widespread attention. ARC-AGI is a reasoning benchmark proposed by François Chollet in 2019, specifically testing a model's abstract reasoning ability — it tests not knowledge memory but the ability to "induce rules from a few examples."

o1's performance on ARC-AGI far exceeded all previous models — though still not reaching human level, it crossed the threshold of "meaningful progress." This was seen as an important milestone for reasoning models in the direction of "general reasoning."[^3]

### 2.5 The triumph of test-time compute

o1's success demonstrated a new scaling dimension: **inference-time computation**. Traditional large model scaling focused on the training phase — more parameters, more data, more compute. o1 opened a new direction: having the model spend more time "thinking" when answering questions.

"Test-time compute" — having the model spend more time reasoning before answering — became the hottest research direction of 2024–2025. Subsequent DeepSeek-R1, Kimi K1.5, Claude extended thinking, and Qwen3-Thinker all ran on the track o1 opened.

o1's success answered a key question: **reasoning computation can substitute for some training computation.** Rather than spending billions of dollars training a larger model, it was better to spend more tokens during inference to let the existing model "think a little more." This provided the industry with a new scaling path — against the backdrop of training-side scaling approaching its ceiling, inference-side scaling became the new growth curve.

### 2.6 The hidden chain-of-thought controversy

o1's most controversial design decision was **hiding the chain-of-thought.** OpenAI's stated reason was "safety" — if users could see the model's internal reasoning, they might learn to bypass safety restrictions. But critics argued this precisely reversed OpenAI's earlier commitment to "transparency."[^2]

OpenAI implemented a "zero tolerance" ban for users who attempted to see the chain-of-thought — any attempt to view o1's thinking process through prompt injection or jailbreaking would result in account suspension. This further escalated community dissatisfaction: "You say it's for safety, but you won't let anyone verify your safety measures."

Four months later, DeepSeek-R1 gave o1 its loudest answer with MIT open-source + fully public chain-of-thought: reasoning models can be both powerful and transparent (see *The Biography of DeepSeek-R1*). This contrast became one of the most important debates in the AI industry in early 2025 — should reasoning models be transparent or opaque? The answer remains undecided to this day.

### 2.7 Overthinking: the first product challenge of reasoning models

o1 users quickly discovered a phenomenon that was both amusing and exasperating: it would overthink when it shouldn't think at all.

"A cat has 4 legs. How many legs do 10 cats have?" — o1-preview would spend 20 seconds "thinking" about this answer that is obviously 40, generating hundreds of words of reasoning chain before giving the answer. In more extreme cases, a user asking a simple "hello" would also trigger o1's reasoning mode, carefully analyzing the greeting's meaning and possible response strategies.

This was not a bug — it was the first systemic challenge of reasoning model productization. Previous language models were all "fast thinking": input directly to output. They made mistakes too, but the mistakes were intuitive — fast and therefore careless. o1's slow thinking dramatically reduced error rates on complex tasks but wasted users' time and API fees on simple tasks.

The problem this phenomenon exposed was deeper than it appeared: **reasoning models lack "task difficulty perception."** They do not know whether a question is 1+1=2 or an AIME competition problem — they simply generate reasoning chains according to patterns learned during training. And what training taught them was "all questions deserve thinking through."

Later reasoning models (Claude 3.7 Sonnet, Gemini 2.5 Pro, Qwen3) all attempted to address this through "thinking toggles" that let users decide when slow thinking was needed. But this solution also had costs: it transferred the judgment burden to users. Between o1's "always think more" and Claude's "user decides," the industry has yet to find a perfect middle ground.

---

## III. Impact and Successors

### 3.1 From o1-preview to o1 official release

- **2024-09-12**: o1-preview and o1-mini released, limited to ChatGPT Plus/Team and API Tier 5 users
- **2024-12-05**: o1 official release, adding multimodal (image input) support
- **2024-12-20**: o3 released (skipping o2), setting new highs in coding and math

o1-preview caused a sensation at release, but users quickly discovered many issues: it overthought simple questions, was less flexible than GPT-4o on certain conversation tasks, and had extremely expensive API pricing (o1-preview output at $60/million tokens — 4× that of GPT-4o).

### 3.2 o3: further breakthroughs in reasoning models

**2024-12-20** — OpenAI released **o3** (skipping o2), setting new highs in coding and math.[^4]

o3's release proved that reasoning model scaling was not a one-time event — it could iterate continuously. o3 surpassed o1 on multiple benchmarks, particularly in coding and mathematical reasoning. This validated a key hypothesis: **reasoning compute scaling can continuously produce returns** — as long as model training quality is sufficient, investment in reasoning compute can continuously improve effective performance.

o3's release also sparked discussion about "where the ceiling of reasoning models lies." If o1 could leap from 12% to 74%, how far could o3 leap from 74%? Is there a limit to reasoning compute scaling? These questions became frontier topics in AI research in 2025.

### 3.3 The explosion of the reasoning model category

o1 created an entirely new model category — "reasoning model." All previous LLMs (GPT series, Claude series, Llama series) were in "direct generation" mode — predicting the next token, with no internal analytical steps. o1 demonstrated a new scaling dimension: **inference-time computation.**

In the six months that followed, virtually every AI company in the world released its own reasoning model — validating the feasibility of the "category" o1 defined. But it also proved that o1 could not hold its exclusive advantage — the technical barriers for reasoning models are lower than for pre-training models, and the catch-up speed is faster.

Major reasoning models included:
- **DeepSeek-R1** (2025-01): MIT open-source, fully public chain-of-thought, reasoning capability emerging from RL
- **Kimi K1.5** (2025-01): Moonshot AI's reasoning model, excelling on Chinese reasoning tasks
- **Claude 3.7 Sonnet** (2025-02): Anthropic's hybrid reasoning model, supporting switching between normal and extended thinking modes
- **Gemini 2.5 Pro** (2025-03): Google's reasoning model, integrated across all Google products
- **Qwen3-Thinker** (2025-04): Alibaba's reasoning model, leading on Chinese reasoning tasks

### 3.4 Redefining the Scaling Law

o1's success redefined the boundaries of the Scaling Law. The Kaplan law (2020) and the Chinchilla correction (2022) both focused on training-phase scaling: more parameters, more data, more compute. o1 opened a new dimension: **inference-time computation.**

This does not negate training-side scaling — it supplements it. Training-side scaling determines the model's "capability ceiling" — how much the model "knows" and what it can "do." Inference-side scaling determines "how close the model gets to this ceiling on each task" — given a specific problem, what proportion of its potential the model actually realizes.

This means "intelligence" is no longer a static attribute ("how smart is this model") but a dynamic process ("how much computation does the model invest on this problem to approach its capability ceiling"). The same model, answering simple questions quickly (low reasoning computation) and reasoning deeply on complex problems (high reasoning computation), displays drastically different apparent "intelligence."

### 3.5 The economic implications of pricing

o1-preview's output pricing — $60/million tokens — was a landmark number in large model pricing history. GPT-4o's output was $15/million tokens. o1 was 4× more expensive.[^2]

The justification for this price difference was not parameter count but **inference-time computation.** o1 consumed far more tokens per question than ordinary models — the hidden chain-of-thought was also billed by token. Users were paying not only for the final answer but also for the "thinking process."

Thus o1's pricing inaugurated a new form of large model commodity: **pricing by thinking volume.** Previous token billing charged for "generated content"; o1's token billing charged for "generated thinking" — and the thinking content was invisible to users. This raised trust issues: if I pay for thinking but cannot see the thinking process, how do I know my money went to genuine reasoning rather than being wasted on unproductive loops?

---

## Commentary

o1 was the paradigm shift of large models from "bigger" to "smarter." It answered a question that GPT-4 had shelved: pure parameter scaling was approaching diminishing returns, but **reasoning scaling** (having models spend more time thinking) still had enormous room for improvement. This was a new scaling law — not training-time computation, but inference-time computation.

The hidden chain-of-thought decision was o1's most controversial aspect. OpenAI said it was for safety — but the premise of safety checks is transparency, and hiding is itself non-transparent. Four months later, DeepSeek-R1 gave o1 its loudest answer with MIT open-source + fully public chain-of-thought: reasoning models can be both powerful and transparent. o1 created the category but gave away the opportunity to define its rules to DeepSeek.

From a product perspective, o1 also exposed a core tension of reasoning models: users do not necessarily want a "deliberative" AI. ChatGPT's charm lies in instant conversation — as natural as chatting. o1's "wait 30 seconds for a better answer" is an interruption for daily chat and a blessing for math problems. This tension remains unresolved — subsequent reasoning models all attempt to "let fast thinking and slow thinking coexist," but no one has found an elegant UI to accommodate both simultaneously.

o1's most far-reaching impact may be its redefinition of the concept of "intelligence." In the past, "how smart is this model" was a question with a definite answer — parameters, data, benchmark scores, and the model's capability was set. Now, "how smart is this model" depends on how much reasoning computation it is willing to invest on a specific task. A model's capability is no longer a fixed point but a curve — the x-axis is reasoning computation investment, the y-axis is effective performance, and the curve's shape is determined by training quality.

o1 was the first model to turn "thinking" into a commodity — users pay for the model's "thinking time" but cannot see the thinking content. Whether this is efficiency or waste depends on which side you stand on. But regardless of your position, you cannot deny: o1 changed the definition of "AI capability" — and that new definition is still in effect today.

---

*This entry was compiled by the Endfield Industrial History Team: Zhuang Fangyi (Lead Writer).*

---

[^1]: Snell et al., "Scaling LLM Test-Time Compute Optimally can be More Effective than Scaling Model Parameters", arXiv:2408.03314, 2024-08-06. https://arxiv.org/abs/2408.03314
[^2]: OpenAI Blog, "Learning to Reason with LLMs", 2024-09-12. https://openai.com/index/learning-to-reason-with-llms/
[^3]: ARC-AGI is a reasoning benchmark proposed by François Chollet in 2019, specifically testing a model's abstract reasoning ability. o1's performance on ARC-AGI far exceeded all previous models and was seen as an important milestone for reasoning models in the direction of "general reasoning."
[^4]: OpenAI, "o3 and o4-mini System Card", 2025-04-16. https://openai.com/index/o3-and-o4-mini-system-card/
