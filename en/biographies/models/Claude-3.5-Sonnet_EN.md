# The Biography of Claude 3.5 Sonnet

> Anthropic did something counterintuitive: instead of releasing an upgrade to the flagship Opus, it upgraded the mid-tier Sonnet. The result was that Claude 3.5 Sonnet, at a lower price and faster speed than Opus, surpassed the previous flagship's performance. SWE-bench 49.0% — the first model to surpass all others, including OpenAI's o1-preview. The Computer Use feature allowed AI to "operate" a computer for the first time. It proved one thing: in the competition among large models, the most expensive model is not necessarily the best one to use.

---

## I. Technical Background

In March 2024, Anthropic released the Claude 3 family — Haiku (lightweight), Sonnet (mid-tier), and Opus (flagship). Claude 3 Opus was the first to squarely surpass GPT-4 on multiple benchmarks, changing the market perception that "Anthropic is an AI safety company, not an AI capability company."[^1]

But Claude 3's pricing followed industry convention: the flagship was most expensive and most capable; the mid-tier was cheaper but with reduced capability. Claude 3 Opus's API pricing was $15/million input tokens and $75/million output tokens — the standard price for frontier models at the time. Claude 3 Sonnet was only about one-third the price of Opus, but was also notably weaker in capability.

By mid-2024, the industry faced a structural problem: **model capabilities were converging, but pricing was still tiered.** GPT-4o (2024-05) broke GPT-4's paywall with a free access strategy; Gemini was freely available; Meta's Llama 3 was open-source and free. Under the macro-trend of "frontier capabilities becoming cheaper," the equation that "the most expensive model equals the strongest model" was eroding.

Anthropic needed an answer: not to build a stronger flagship, but to prove that **a mid-tier model can surpass a flagship**.

---

## II. Core Innovation

### 2.1 Performance surpassing Claude 3 Opus at faster speed and lower price

**2024-06-20** — Anthropic released **Claude 3.5 Sonnet** — skipping Opus to directly upgrade the mid-tier line.[^1]

Claude 3.5 Sonnet surpassed Claude 3 Opus on multiple benchmarks — at only one-third the price. Key figures published by Anthropic:

| Benchmark | Claude 3.5 Sonnet | Claude 3 Opus | Improvement |
|-----------|:--:|:--:|:--:|
| GPQA (graduate-level reasoning) | 65.0% | 50.4% | +14.6 |
| MMLU (undergraduate knowledge) | 88.7% | 86.8% | +1.9 |
| HumanEval (coding) | 92.0% | 84.9% | +7.1 |
| Internal agentic coding evaluation | 64% | 38% | +26 |

The most stunning number was the internal agentic coding evaluation: 3.5 Sonnet solved 64% of coding problems while Opus solved only 38%. This meant that in coding ability, the mid-tier model's improvement was not "approaching the flagship" — it **left the flagship far behind**.

More importantly, 3.5 Sonnet's inference speed was approximately twice that of Opus, and its API pricing was only about one-third. Faster, cheaper, stronger — three normally contradictory attributes simultaneously achieved in a single model.

### 2.2 Artifacts: from "conversation" to "creative workbench"

The **Artifacts** feature, released alongside Claude 3.5 Sonnet, transformed the interaction model of AI conversations.[^1]

Previously, user-AI interaction was confined to the chat box — text in, text out. Artifacts allowed Claude to directly generate an independent content window within the same interface — it could be a piece of code (executable), a React component (previewable), an SVG graphic (renderable), or a design document.

This feature appeared to be merely a UI improvement, but in reality its impact on AI products was profound: **"Chatting" was no longer the only interaction mode. AI could "build," not just "answer."** Artifacts was widely emulated by major AI products in the year that followed — ChatGPT Canvas, Gemini's interactive panel, and the shared Copilot workspace are all successors to Artifacts.

Artifacts made Claude 3.5 Sonnet the preferred tool for programmers and content creators — in the coding assistance domain, it became the de facto industry standard.

### 2.3 SWE-bench 49.0%: first to surpass all models

On October 22, 2024, Anthropic released an upgraded version of Claude 3.5 Sonnet (later called "Claude 3.5 Sonnet New"), achieving another leap in coding ability.[^2]

The upgraded 3.5 Sonnet reached **49.0%** on **SWE-bench Verified** — a historically significant number. SWE-bench is a real-world software engineering benchmark testing a model's ability to understand complex codebases, locate bugs, and independently fix them. 49.0% meant Claude could solve nearly half of real software engineering problems — surpassing all publicly available models at the time, including OpenAI's o1-preview (released 2024-09-12).[^2]

This was the milestone of "a mid-tier model surpassing a reasoning model." o1-preview was OpenAI's strongest coding model built with reasoning compute — it excelled at competitive programming like Codeforces, but in real-world software engineering (understanding codebases, locating bugs, submitting fixes), Claude 3.5 Sonnet was superior. This demonstrated: **reasoning compute is not a panacea — on tasks requiring extended context understanding and code structural analysis, a model's base capabilities are equally critical.**

Subsequent versions further pushed SWE-bench Verified to **53.0%**, consolidating Claude's lead on coding benchmarks.

### 2.4 Computer Use: AI "operates" a computer for the first time

The **Computer Use** feature, released alongside the upgraded 3.5 Sonnet, was a watershed event for the AI industry.[^2]

Computer Use allowed Claude to operate a computer desktop like a human — viewing screenshots, moving the mouse cursor, clicking buttons, and entering text. This was achieved through three new API sets:
- **Computer actions**: Screenshot → coordinate clicks / keyboard input
- **Text editor**: File read/write and command execution
- **Tool use**: Structured interactions

Anthropic acknowledged in its announcement that this feature was still "clumsy and error-prone" but emphasized it already had practical value — companies including Asana, Canva, Cognition, DoorDash, and Replit were already exploring the capability.[^2]

The deeper significance of Computer Use was: AI moved from "understanding and generating" to **"directly manipulating the environment."** Previously, AI's capability boundary was "giving you answers" — text, code, images, audio. Computer Use extended that boundary to "doing things for you" — opening browsers, filling out forms, operating software, executing commands. This was a critical step toward AI agents.

### 2.5 Claude 3.5 Haiku: the flagship-ification of small models

**Claude 3.5 Haiku**, released on the same day as the upgraded 3.5 Sonnet, continued Anthropic's "mid-tier flagship-ification" strategy — its performance matched Claude 3 Opus (the previous flagship) while its speed approached Claude 3 Haiku (the previous lightweight version).[^2]

This meant that Anthropic's "most lightweight" model had reached the level of the "strongest" model from just six months prior — at lower pricing and faster speed. This trend became known in the industry as "flagship capability sinking" — each generation's flagship capabilities eventually reappear in the next generation's mid-tier or even lightweight models.

### 2.6 The paradigm shift of "mid-tier models surpassing previous-generation flagships"

The most far-reaching impact of the Claude 3.5 Sonnet series was establishing a new industry paradigm: **mid-tier models can systematically surpass previous-generation flagships.**

This was uncommon in the GPT series. GPT-3.5 was stronger than GPT-3, but GPT-4 far exceeded GPT-3.5 — it required entirely new architecture, larger parameters, and more training data. The upgrade path was "build a bigger model."

Anthropic's path was different. Claude 3.5 Sonnet did not surpass Opus by stacking parameters — it achieved this through more efficient training methods, better data ratios, and more refined alignment techniques. This demonstrated: **improving model capability does not necessarily require more resources — smarter methods work just as well.**

This paradigm shift had profound implications for the industry. It meant that "frontier capabilities" were no longer monopolized by flagship models — mid-tier and even lightweight models could reach the frontier level of six months prior. It changed users' decision logic: there was no longer a need to pay the highest price for "the strongest capability," because "good enough capability" was available in cheaper models.

### 2.7 Direct competition with GPT-4o

Claude 3.5 Sonnet's release date (2024-06-20) fell exactly one month after GPT-4o (2024-05-13). The two models' positioning and strategies formed a striking contrast:

| Dimension | GPT-4o | Claude 3.5 Sonnet |
|-----------|--------|-------------------|
| Core selling point | Native multimodal, real-time voice, free access | Coding ability, Artifacts, cost-effectiveness |
| Pricing | Free (basic) / Plus subscription | API pay-per-use ($3/$15 per M tokens) |
| Interaction mode | Voice conversation first | Text conversation + Artifacts |
| Target users | Everyone | Programmers and creators |
| Technical approach | End-to-end multimodal | Efficient training + alignment optimization |

GPT-4o's core advantage was "natural conversation" — 320ms voice latency made it the most human-like AI assistant. Claude 3.5 Sonnet's core advantage was "efficient creation" — Artifacts + coding ability made it the programmer's preferred tool.

The competition between the two was not about "who is stronger" but "who is better in what scenario." GPT-4o led in voice conversation and multimodal understanding; Claude 3.5 Sonnet led in coding, document processing, and creative work. This "each excels in its own domain" competitive landscape persisted into 2025 — demonstrating that the large model market is not a winner-take-all zero-sum game but an ecological competition where multiple products dominate different niches.

---

## III. Impact and Successors

### 3.1 Reshuffling the coding assistant market

The combination of Claude 3.5 Sonnet + Artifacts built loyalty among Anthropic's developer base — especially in coding and prototyping scenarios. By 2025, Claude had become the default benchmark line for large models on coding benchmarks (SWE-bench) — not because it was the strongest, but because developers **felt it was the best to use**.

The deeper reason for this word-of-mouth effect: coding ability depends not only on benchmark scores but also on the model's understanding of code style, memory of context, and inference of developer intent. Claude 3.5 Sonnet built advantages in these "soft metrics," making it the collective choice of programmers.

### 3.2 The starting point of AI from "answering" to "acting"

The release of Computer Use marked AI's transition from "language assistant" to "action agent." Previously, AI's capability boundary was "giving you answers"; after Computer Use, it extended to "doing things for you."

This transition continued to ferment in 2025 — Claude 4's code execution tools, MCP connectors, and long-running autonomous capabilities were all continuations of the Computer Use vision. By mid-2025, "AI Agent" had become the industry's hottest keyword — and Claude 3.5 Sonnet's Computer Use was the first milestone on that road.

### 3.3 "Mid-tier flagship-ification" becomes industry standard

The paradigm established by Claude 3.5 Sonnet — "mid-tier models surpassing previous-generation flagships" — became the industry standard by 2025. Every model release followed the same logic:

- Claude 3.5 Sonnet surpassed Claude 3 Opus
- Claude 3.5 Haiku reached Claude 3 Opus level
- Claude 3.7 Sonnet surpassed 3.5 Sonnet
- Claude Sonnet 4 matched or surpassed Opus 4

The consequence of this trend: users increasingly did not need to pay the highest price for "the strongest capability." Mid-tier pricing, flagship capability — this combination was becoming the standard configuration for AI products.

### 3.4 Decline and absorption

Claude 3.5 Sonnet's frontier advantage lasted approximately six months. In February 2025, Claude 3.7 Sonnet was released (the first hybrid reasoning model), inheriting 3.5 Sonnet's coding strengths while adding reasoning capabilities. In May 2025, Claude 4 was released, achieving SWE-bench 72.5% — thoroughly surpassing 3.5 Sonnet's 53.0%.

But Claude 3.5 Sonnet's legacy is not its SWE-bench score — that score no longer belongs to it. Its legacy is **the rules it changed**: mid-tier models can surpass flagships, Artifacts redefined interaction, Computer Use opened a new era of AI action. These rules remain valid long after Claude 3.5 Sonnet ceased to be the strongest.

---

## Commentary

Claude 3.5 Sonnet's historical position lies in breaking an equation that seemed unbreakable: **stronger = bigger = more expensive.**

In the GPT era, the industry's default logic was: the most expensive model is the strongest, and wanting more capability means paying more. Claude 3.5 Sonnet achieved results surpassing the flagship at one-third the price — this was not lucky coincidence but a victory of more efficient training methods and more refined alignment techniques. It proved one thing: in the competition among large models, methodology matters more than resources.

Artifacts changed the definition of "AI conversation." Previously, user-AI interaction was linear — one question, one answer, output as text. Artifacts turned AI's output into interactive objects — code could run, components could preview, charts could render. This seemingly simple UI improvement actually changed the interaction paradigm across the industry — ChatGPT Canvas and Gemini's interactive panel all compete within the coordinate system that Artifacts established.

Computer Use was 3.5 Sonnet's boldest bet. Anthropic itself acknowledged it was "clumsy and error-prone" — but it expanded AI's capability boundary from "giving you answers" to "doing things for you." This was not a mature product — it was a declaration of direction. And direction matters more than current precision.

But 3.5 Sonnet's most enduring legacy may be a more humble insight: **developers choose models not because of the highest benchmark, but because of "the best feel in practice."** When model capabilities approach parity, trust and experience become core competitive advantages. Claude 3.5 Sonnet led o1-preview by fewer than 10 points on SWE-bench, but the reputation gap among programmers was far greater. This was not a victory of technology — it was a victory of product intuition.

---

*This entry was compiled by the Endfield Industrial History Team: Zhuang Fangyi (Lead Writer).*

---

[^1]: Anthropic Blog, "Claude 3.5 Sonnet", 2024-06-20. https://www.anthropic.com/news/claude-3-5-sonnet
[^2]: Anthropic Blog, "Introducing computer use, a new Claude 3.5 Sonnet, and Claude 3.5 Haiku", 2024-10-22. https://www.anthropic.com/news/3-5-models-and-computer-use
