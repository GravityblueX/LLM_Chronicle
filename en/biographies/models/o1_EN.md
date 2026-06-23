# The Biography of o1

> o1 was OpenAI's first "reasoning model," released in September 2024. It did not pursue larger parameters or more training data—it generated an internal chain-of-thought before answering, using additional inference time to plan, verify, and revise its reasoning. AIME math competition scores leapt from GPT-4o's 12% to 74%—this was not incremental improvement but a sudden migration of capability from one domain to another. o1 inaugurated the "reasoning model" category and redefined the boundaries of Scaling Law.

---

## I. Technical Background

GPT-4 (2023-03) defined the "frontier" standard, but its reasoning was "intuitive"—predicting the next token without internal analysis steps. GPT-4 could fluently write code, solve math problems, and perform translations, but it still had clear shortcomings on tasks requiring multi-step reasoning. It was like a smart student—knowing a lot, but prone to "careless" mistakes when facing complex problems.

In early 2024, the industry faced an unsolved question: **pure parameter scaling was approaching diminishing returns.** GPT-4's parameter count was rumored to be 1.76 trillion, but its reasoning ability had not made a qualitative leap over GPT-3.5—it merely "passed" on more benchmarks. Kaplan's Law (2020) and the Chinchilla correction (2022) both focused on training-stage scaling: more parameters, more data, more compute. But training-side scaling was approaching its ceiling—data walls, cost walls, and energy walls made "continuing to stack training compute" increasingly difficult.

In August 2024, Charlie Snell et al. published "Scaling LLM Test-Time Compute Optimally can be More Effective than Scaling Model Parameters," systematically arguing for a previously underappreciated dimension: **investing more computation at the inference stage could significantly improve a model's effective performance without increasing its size.**[^1]

One month later, OpenAI turned this theory into a product with o1.

---

## II. Core Innovations

### 2.1 Inaugurating the "thinking" paradigm: internal chain-of-thought

o1's core differentiator was: before answering, it generated a **hidden chain-of-thought** internally—using additional inference time to plan, verify, and revise its reasoning. Users saw only the final answer; the intermediate reasoning process was deliberately hidden.[^2]

The design philosophy was clear: GPT-4's "next token" prediction was intuitive fast thinking—fluent and quick, but error-prone on tasks requiring multi-step reasoning. o1's "think before speaking" was deliberative slow thinking—slower, more computationally intensive, but far more accurate in mathematics, programming, and scientific reasoning.

o1's "thinking" was not traditional chain-of-thought prompting (where the user asks the model to "think step by step" and the model writes out its reasoning in the output). o1's reasoning was **implicit**—the reasoning process was intercepted by the system, and users only saw the final conclusion, unable to observe how the model traveled from question to conclusion. OpenAI called this hidden chain-of-thought.[^2]

### 2.2 o1-preview / o1-mini: a two-product combination

**2024-09-12** — OpenAI released **o1-preview** and **o1-mini**, initially available only to ChatGPT Plus/Team and API Tier 5 users.[^2]

o1-preview was the flagship reasoning model, focused on complex reasoning tasks. o1-mini was a smaller, faster, cheaper reasoning model focused on STEM (science, technology, engineering, mathematics) reasoning. o1-mini was inferior to o1-preview on non-STEM tasks, but its cost-effectiveness on mathematics and programming far exceeded the flagship.

The pricing gap was stark:[^2]
- o1-preview: $15/million tokens input, $60/million tokens output
- o1-mini: $3/million tokens input, $12/million tokens output

o1-mini was 80% cheaper, yet on certain reasoning benchmarks its performance approached or even exceeded o1-preview. For most developers' real-world scenarios (code generation, math problem-solving, data cleaning), o1-mini was the more rational choice.

This decision was elegant at the product level. o1-preview established the "strongest reasoning" brand ceiling, but its premium pricing deterred most users; o1-mini served as a low-barrier entry point, letting developers experiment with "reasoning models" at minimal cost. Together, they formed a two-tier pricing structure of "brand elevation + volume"—the same logic as Mercedes-Benz's S-Class for prestige and C-Class for volume.

### 2.3 Leap in math/programming/scientific reasoning

o1 achieved a leap on reasoning-intensive benchmarks:[^2]

| Benchmark | o1-preview | GPT-4o | Improvement |
|-----------|:--:|:--:|:--:|
| AIME 2024 (math competition) | 74.4% | 12.1% | **+62.3** |
| GPQA Diamond (scientific reasoning) | 77.3% | 56.1% | +21.2 |
| Codeforces | 89%ile | 11%ile | +78 |
| International Math Olympiad | 83.3% | 13.4% | +69.9 |

The most striking number was AIME: from 12% to 74%. This was not incremental improvement—it was a sudden migration of capability from one domain to another. GPT-4o's 12% accuracy on AIME meant it "essentially couldn't" solve competition math; o1's 74% meant it "could solve most." This gap was achieved not through a larger model or more training data, but through the model investing far more inference computation on each question than its predecessors.

In the 2024 International Olympiad in Informatics (IOI), o1 scored 213 under human-equivalent conditions, ranking at the 49th percentile among all contestants. This meant o1's programming ability had surpassed nearly half of all human competitors—and these competitors were the world's finest young programmers.

### 2.4 ARC-AGI performance

o1's performance on ARC-AGI (Abstraction and Reasoning Corpus for Artificial General Intelligence) attracted widespread attention. ARC-AGI was a reasoning benchmark proposed by François Chollet in 2019, specifically testing a model's abstract reasoning ability—it did not test knowledge recall, only the ability to "generalize rules from a few examples."

o1's ARC-AGI performance far surpassed all previous models—though still below human levels, it had crossed the threshold of "meaningful progress." This was regarded as a significant milestone for reasoning models in the direction of "general reasoning."[^3]

### 2.5 The triumph of test-time compute

o1's success validated a new scaling dimension: **test-time compute**. Traditional LLM scaling focused on the training stage—more parameters, more data, more compute. o1 opened a new direction: letting models spend more time "thinking" when answering questions.

"Test-time compute"—letting models spend more time reasoning before answering—became the hottest research direction of 2024–2025. Subsequent models including DeepSeek-R1, Kimi K1.5, Claude extended thinking, and Qwen3-Thinker all ran on the track that o1 had opened.

o1's success answered a critical question: **inference computation can substitute for a portion of training computation.** Rather than spending billions of dollars training a larger model, one could spend more tokens at the inference stage to let the existing model "think harder." This provided the industry with a new scaling path—while training-side scaling approached its ceiling, inference-side scaling became a new growth curve.

### 2.6 The hidden chain-of-thought controversy

o1's most controversial design decision was the **hidden chain-of-thought**. OpenAI's stated rationale was "safety"—if users could see the model's internal reasoning, they might learn to circumvent safety restrictions. But critics argued this directly reversed OpenAI's earlier commitment to "transparency."[^2]

OpenAI enforced a "zero tolerance" ban on users who attempted to view the chain-of-thought—any attempt to observe o1's thinking process through prompt injection or jailbreaking resulted in account bans. This further escalated community frustration: "You claim this is for safety, but you won't let anyone verify your safety measures."

Four months later, DeepSeek-R1 gave o1 its most resounding answer with MIT open-source licensing and fully public chain-of-thought: reasoning models can be both powerful and transparent (see *The Biography of DeepSeek-R1*). This comparison became one of the most important debates in the AI industry in early 2025—should reasoning models be transparent or opaque? The answer remains unresolved to this day.

### 2.7 Overthinking: the first product challenge of reasoning models

o1 users quickly discovered an ironic phenomenon: it would overthink when it shouldn't.

"A cat has 4 legs; how many legs do 10 cats have?"—o1-preview would spend 20 seconds "thinking" about this obviously-40 answer, generating hundreds of words of reasoning chain before giving the answer. In more extreme cases, when a user said a simple "Hello," o1 would also activate its reasoning mode, carefully analyzing the meaning of the greeting and possible response strategies.

This was not a bug—it was the first systemic challenge in productizing reasoning models. All previous language models had been "fast thinkers": input yielded output. They made mistakes too, but their mistakes were intuitive—fast and careless. o1's slow thinking dramatically reduced error rates on complex tasks, but on simple tasks it wasted users' time and API fees.

The problem this phenomenon exposed was deeper than it appeared: **reasoning models lack "task difficulty perception."** It did not know whether a question was 1+1=2 or an AIME competition problem—it simply generated reasoning chains according to the patterns learned during training. And what training taught it was "all questions deserve some thought."

Later reasoning models (Claude 3.7 Sonnet, Gemini 2.5 Pro, Qwen3) all attempted to address this issue—through "thinking switches" that let users decide when slow thinking was needed. But this solution also had costs: it shifted the burden of judgment onto users. Between o1's "always think more" and Claude's "user decides," the industry has yet to find a perfect middle ground.

---

## III. Impact and Aftermath

### 3.1 From o1-preview to the official o1

- **2024-09-12**: o1-preview and o1-mini released, initially limited to ChatGPT Plus/Team and API Tier 5 users
- **2024-12-05**: Official o1 released, adding multimodal (image input) support
- **2024-12-20**: o3 released (skipping o2), setting new highs in programming and mathematics

o1-preview caused a sensation upon release, but users quickly discovered numerous issues: it overthought simple questions, was less flexible than GPT-4o on certain conversational tasks, and its API pricing was extremely expensive (o1-preview output at $60/million tokens, four times GPT-4o's rate).

### 3.2 o3: further breakthroughs in reasoning models

**2024-12-20** — OpenAI released **o3** (skipping o2), setting new highs in programming and mathematics.[^4]

o3's release proved that reasoning model scaling was not a one-time event—it could be iterated continuously. o3 surpassed o1 on multiple benchmarks, particularly in programming and mathematical reasoning. This validated a key assumption: **reasoning compute scaling can yield sustained returns**—as long as the model's training quality is sufficient, investment in reasoning compute can continuously improve effective performance.

o3's release also sparked discussion about "where is the ceiling for reasoning models?" If o1 could leap from 12% to 74%, how far could o3 leap from 74%? Does reasoning compute scaling have limits? These questions became frontier topics in AI research in 2025.

### 3.3 The explosion of reasoning models

o1 created an entirely new model category—"reasoning model." All previous LLMs (GPT series, Claude series, Llama series) operated in "direct generation" mode—predicting the next token without internal analysis steps. o1 proved a new scaling dimension: **test-time compute**.

Over the following six months, virtually every AI company in the world released its own reasoning model—proving the viability of the "category" o1 had defined. But it also proved that o1 could not hold its exclusive advantage—reasoning model technical barriers were lower than pre-training model barriers, and the pace of catching up was faster.

Key reasoning models included:
- **DeepSeek-R1** (2025-01): MIT open-source, fully public chain-of-thought, reasoning capability emerged through RL
- **Kimi K1.5** (2025-01): Moonshot AI's reasoning model, excelling on Chinese-language reasoning tasks
- **Claude 3.7 Sonnet** (2025-02): Anthropic's hybrid reasoning model, supporting toggling between standard and extended thinking modes
- **Gemini 2.5 Pro** (2025-03): Google's reasoning model, integrated across Google's entire product line
- **Qwen3-Thinker** (2025-04): Alibaba's reasoning model, leading on Chinese-language reasoning tasks

### 3.4 Redefining the Scaling Law

o1's success redefined the boundaries of the Scaling Law. Kaplan's Law (2020) and the Chinchilla correction (2022) both focused on training-stage scaling: more parameters, more data, more compute. o1 opened a new dimension: **test-time compute**.

This did not negate training-side scaling—it supplemented it. Training-side scaling determined a model's "capability ceiling"—how much the model "knows" and what it can "do." Inference-side scaling determined how closely the model approached that ceiling on each task—how much of its potential the model actually deployed on a specific problem.

This meant "intelligence" was no longer a static attribute ("how smart is this model") but a dynamic process ("how much computation did the model invest in approaching its capability ceiling on this problem"). The same model, answering a simple question quickly (low inference compute) and reasoning deeply about a complex problem (high inference compute), would exhibit strikingly different levels of apparent "intelligence."

### 3.5 Economic implications of pricing

o1-preview's output pricing—$60/million tokens—was a landmark number in LLM pricing history. GPT-4o's output was $15/million tokens. o1 was four times more expensive.[^2]

The justification for this price difference was not parameter count but **inference-time computation**. o1 consumed far more tokens when answering questions than ordinary models—those hidden chains-of-thought were also billed by the token. Users were paying not only for the final answer but also for the "thinking process."

Thus o1's pricing inaugurated a new form of LLM commodity: **pricing by the volume of thought.** Previous token billing charged for "generated content"; o1's token billing charged for "generated thought"—and users could not see the thought content. This raised trust issues: if I pay for thinking but cannot see the thinking process, how do I know my money went toward genuine reasoning rather than being wasted on ineffective loops?

---

## Commentary

o1 was the paradigm shift of LLMs from "bigger" to "smarter." It answered a question that GPT-4 had left open: pure parameter scaling was approaching diminishing returns, but **reasoning scaling** (letting models spend more time thinking) still had enormous room for improvement. This was a new scaling law—not training-time compute, but inference-time compute.

The decision to hide chain-of-thought was o1's most controversial aspect. OpenAI said it was for safety—but safety verification requires transparency, and hiding is itself non-transparent. Four months later, DeepSeek-R1 gave o1 its most resounding answer with MIT open-source licensing and fully public chain-of-thought: reasoning models can be both powerful and transparent. o1 created the category but ceded the opportunity to define its rules to DeepSeek.

From a product perspective, o1 also exposed a core tension in reasoning models: users do not necessarily want a "deliberative" AI. ChatGPT's appeal lay in instant conversation—natural, like chatting. o1's "wait 30 seconds for a better answer" was an interruption for casual chat but a blessing for math problems. This tension has yet to be fully resolved—subsequent reasoning models have all attempted to "let fast thinking and slow thinking coexist," but no one has found an elegant UI to simultaneously accommodate both.

o1's most far-reaching impact may be its redefinition of "intelligence." In the past, "how smart is this model" was a question with a definitive answer—parameter count, data volume, benchmark scores determined the model's capability. Now, "how smart is this model" depends on how much inference computation it is willing to invest on a specific task. A model's capability is no longer a fixed point but a curve—the x-axis being inference compute investment, the y-axis being effective performance, and the curve's shape determined by training quality.

o1 was the first model to make "thinking" a commodity—users paid for the model's "thinking time" but could not see the thinking content. Whether this constituted efficiency or waste depended on which side you stood on. But regardless of where you stood, you could not deny: o1 changed the definition of "AI capability"—and the new definition remains in effect to this day.

---

*This entry was compiled by the Endfield Industrial History Team: Zhuang Fangyi (Lead Writer).*

---

[^1]: Snell et al., "Scaling LLM Test-Time Compute Optimally can be More Effective than Scaling Model Parameters", arXiv:2408.03314, 2024-08-06. https://arxiv.org/abs/2408.03314
[^2]: OpenAI Blog, "Learning to Reason with LLMs", 2024-09-12. https://openai.com/index/learning-to-reason-with-llms/
[^3]: ARC-AGI was a reasoning benchmark proposed by François Chollet in 2019, specifically testing a model's abstract reasoning ability. o1's ARC-AGI performance far surpassed all previous models and was regarded as a significant milestone for reasoning models in the direction of "general reasoning."
[^4]: OpenAI, "o3 and o4-mini System Card", 2025-04-16. https://openai.com/index/o3-and-o4-mini-system-card/
