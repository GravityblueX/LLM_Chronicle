# The Claude Family

> Claude is Anthropic's large language model family, built around "Constitutional AI" as its core technical approach, specializing in safety alignment. From its internal versions in 2022 to Claude 4 in 2025, Claude took a path starkly different from GPT — not winning through scale, but defining product boundaries through alignment. Its story is that of a "safety-first" AI company surviving, thriving, and ultimately surpassing GPT head-to-head in the "capability-first" competition.

---

## I. Overview

The Claude series is developed by Anthropic PBC. Anthropic was registered in San Francisco on January 26, 2021, by co-founders Dario Amodei and Daniela Amodei (brother and sister), both formerly of OpenAI — Dario as Vice President of Research and Daniela as Vice President of Operations. They left OpenAI with a different understanding of AI safety direction and founded Anthropic.[^1]

Claude's core technical innovation is **Constitutional AI** — a paper published in December 2022 proposed a new alignment method: instead of requiring large numbers of human annotators to label harmful content, a set of "constitutional principles" enables the AI to judge and revise its own outputs. The method's two phases — a supervised learning phase (AI self-critique and revision) and a reinforcement learning phase (RLAIF, Reinforcement Learning from AI Feedback) — established Claude's technical foundation of "achieving better safety alignment with fewer human labels."[^2]

Claude's iteration underwent three distinct phases: **alignment exploration** (Claude 1.x/2.x, 2023–early 2024), **capability breakthrough** (Claude 3/3.5, 2024), and **reasoning fusion** (Claude 3.7/4, 2025). In the first two phases, Claude was always a follower of GPT — superior in safety and conversational experience, but lagging in raw capability. The turning point was Claude 3 Opus in March 2024 — it first surpassed GPT-4 head-to-head on multiple benchmarks, changing the market perception that "Anthropic is an AI safety company, not an AI capability company."

---

## II. Generational Evolution

| Generation | Release Date | Parameter Scale | Core Innovation | License |
|-----------|-------------|----------------|-----------------|---------|
| Claude (original) | 2023-03 | Undisclosed (reportedly ~52B, disputed) | Constitutional AI (RLAIF) | Closed-source |
| Claude Instant | 2023-03 | Undisclosed | Lightweight fast version, lower cost | Closed-source |
| Claude 2 | 2023-07-11 | Undisclosed | 100K token context, first large-scale commercial use | Closed-source |
| Claude 2.1 | 2023-11 | Undisclosed | 200K context, hallucination rate halved | Closed-source |
| Claude 3 Haiku/Sonnet/Opus | 2024-03-04 | Undisclosed (three tiers) | First head-to-head surpass of GPT-4, vision capability | Closed-source |
| Claude 3.5 Sonnet | 2024-06-20 | Undisclosed | Artifacts, programming assistant benchmark | Closed-source |
| Claude 3.5 Sonnet (upgraded) | 2024-10-22 | Undisclosed | Computer use, SWE-bench 49% | Closed-source |
| Claude 3.5 Haiku | 2024-10/11 | Undisclosed | Matching Claude 3 Opus capability | Closed-source |
| Claude 3.7 Sonnet | 2025-02-24 | Undisclosed | First hybrid reasoning model | Closed-source |
| Claude Opus 4 / Sonnet 4 | 2025-05-22 | Undisclosed | World's best programming model, Claude Max subscription | Closed-source |

### 2.1 Claude (original): Constitutional AI's first test bed

In December 2022, Anthropic published the paper "Constitutional AI: Harmlessness from AI Feedback" on arXiv. The technique described — having AI self-critique and revise outputs based on a set of predefined principles — became the technical foundation of the Claude series.[^2]

In March 2023, Claude was officially released in two versions: Claude (high-performance) and Claude Instant (lightweight fast). Initial partners included Notion, Quora (via the Poe platform), and DuckDuckGo.[^3] Parameter counts were never publicly disclosed — external estimates put it at approximately 52B parameters (disputed), but Anthropic consistently refused to confirm.

The original Claude was not positioned for head-to-head capability competition with GPT-3.5 — it lagged behind ChatGPT on most benchmarks. Claude's selling point was "less harmful output, easier conversation, more controllable." Anthropic specifically emphasized at launch "less likely to produce harmful outputs" — both a technical promise and a market differentiator.

Notably, Claude's original release came just four months after ChatGPT's explosion (November 2022). Anthropic was forced to release its first product at the moment GPT changed the world — a decision squeezed by the timeline, not a leisurely chosen timing.

### 2.2 Claude 2: 100K and first large-scale commercial use

On July 11, 2023, Claude 2 was released.[^4] Core upgrade: **100K token context window** — at the time the industry's largest available context window, meaning Claude could process hundreds of pages of technical documents or even an entire book at once. Simultaneously, Anthropic opened the claude.ai website to the public for the first time — until then, Claude had only been available via API and partners.

In capability, Claude 2 scored 76.5% on the Bar Exam's multiple-choice section (Claude 1.3 scored 73.0%); exceeded 90% of test-takers on GRE reading and writing; and achieved 71.2% on the Codex HumanEval coding benchmark (Claude 1.3 scored 56.0%).[^4]

But Claude 2 was still not a model that could compete with GPT-4 on raw capability. It matched GPT-3.5 on most benchmarks — in a market where GPT-4 had been out for four months, this meant Claude 2 was a "safe alternative to GPT-3.5" rather than a "competitor to GPT-4."

### 2.3 Claude 2.1: 200K and halved hallucinations

In November 2023, Claude 2.1 was released, doubling the context window to **200K tokens** — approximately 150,000 words or 500 pages of documents.[^5] This was an industry first.

The more important upgrade was hallucination rates: Anthropic claimed Claude 2.1's false statement rate was halved compared to Claude 2.0. They tested the model with a complex set of factual questions — Claude 2.1 was more inclined to admit "uncertainty" rather than fabricate answers.[^5]

Claude 2.1 also introduced two key features: **system prompts** and **tool use** — the former allowing developers to define Claude's role and behavioral constraints, the latter enabling Claude to call external APIs and tools. These two features transformed Claude from a "conversation model" into an "AI component" that could be embedded in applications.

### 2.4 Claude 3: Three models, first head-to-head surpass of GPT-4

On March 4, 2024, Claude 3 was released — not a single model, but a family: **Haiku** (lightweight fast), **Sonnet** (balanced performance), and **Opus** (flagship intelligence).[^6] This three-tier pricing system continues to this day.

**Claude 3 Opus was the first model to surpass GPT-4 head-to-head on multiple authoritative benchmarks.** On MMLU (undergraduate knowledge), GPQA (graduate-level reasoning), GSM8K (mathematics), and other standard tests, Opus met or exceeded GPT-4's levels.[^6] This was Anthropic's milestone — proving that a safety-centered company could equally produce the most capable model.

Claude 3 also brought **vision capability** — the ability to process photographs, charts, and technical documents. Anthropic noted that up to 50% of enterprise customers' knowledge bases exist in non-plain-text formats such as PDFs, flowcharts, and presentations.[^6] Vision capability was not showing off — it was an enterprise market requirement.

Another important improvement was reducing "unnecessary refusals." A problem plaguing Claude 1.x/2.x was excessive conservatism — frequently declining to answer questions that were actually harmless. Claude 3 demonstrated more nuanced understanding of requests, distinguishing genuinely harmful intent from boundary-approaching but harmless queries.[^6]

### 2.5 Claude 3.5 Sonnet: The birth of Artifacts and the programming assistant

On June 20, 2024, Claude 3.5 Sonnet was released — the first model in the Claude 3.5 series.[^7] Anthropic chose to release the mid-tier Sonnet before the flagship Opus, a deliberate strategy: 3.5 Sonnet's capabilities surpassed Claude 3 Opus (the flagship) while maintaining Claude 3 Sonnet's speed and cost — a dimensionality reduction attack of "flagship capability at mid-tier pricing."

3.5 Sonnet set new highs in graduate-level reasoning (GPQA), undergraduate knowledge (MMLU), and programming capability (HumanEval). On internal agentic coding evaluations, 3.5 Sonnet solved 64% of problems, while Claude 3 Opus solved only 38%.[^7]

But 3.5 Sonnet's most profound impact was the **Artifacts feature** — launched simultaneously in June 2024. Artifacts transformed Claude's output from plain text to interactive code, documents, and charts — turning Claude from a "conversational AI" into a "creative workbench." This feature directly propelled Claude 3.5 Sonnet to become the preferred tool for programmers and content creators — in the programming assistance domain, Claude 3.5 Sonnet became the de facto industry benchmark.

(See "Chronicles: June 2024")

### 2.6 Claude 3.5 Sonnet (upgraded): Computer Use and SWE-bench 49%

On October 22, 2024, Anthropic released an upgraded Claude 3.5 Sonnet, along with two important updates: the upgraded 3.5 Sonnet and Claude 3.5 Haiku.[^8]

The upgraded 3.5 Sonnet's biggest highlight was **computer use capability** — the first frontier model to offer this feature in a public beta. Developers could have Claude operate a computer like a human: viewing the screen, moving the cursor, clicking buttons, typing text. While Anthropic itself acknowledged that the computer use was still "clumsy and error-prone," companies including Asana, Canva, Cognition, DoorDash, and Replit were already exploring the capability.[^8]

On programming capability, the upgraded 3.5 Sonnet improved on SWE-bench Verified from 33.4% to **49.0%** — surpassing all publicly available models at the time, including OpenAI's o1-preview.[^8] This score meant Claude was no longer just a "chat-to-code" model — it could understand complex codebases, locate bugs, and fix them independently.

**Claude 3.5 Haiku** was announced the same day — performance matching Claude 3 Opus (the previous flagship), but speed approaching Claude 3 Haiku.[^8] This continued the "mid-tier flagship-ification" strategy: each generation's mid-tier and lightweight models caught up to the previous generation's flagship.

(See "Chronicles: October 2024")

### 2.7 Claude 3.7 Sonnet: The first hybrid reasoning model

On February 24, 2025, Claude 3.7 Sonnet was released — Anthropic called it **"the market's first hybrid reasoning model."**[^9]

What did "hybrid" mean? Until then, reasoning models (like OpenAI o1) and regular language models were two separate products — you had to use them differently. Claude 3.7 Sonnet merged them into one: in standard mode, it was an upgraded 3.5 Sonnet with instant responses; in **extended thinking mode**, it performed internal step-by-step reasoning before providing deeper answers.

"Just as humans use the same brain for quick reactions and deep thinking" — Anthropic used this analogy to explain their philosophy.[^9] API users could even control a "thinking budget" — specifying the maximum tokens the model could use for reasoning, flexibly balancing speed and quality.

Claude 3.7 Sonnet also simultaneously released **Claude Code** — a command-line tool allowing developers to delegate programming tasks directly to Claude in the terminal. This marked Claude's formal transformation from "conversational assistant" to "programming collaborator."[^9]

Pricing matched the previous generation: $3 per million input tokens, $15 per million output tokens — including thinking tokens.[^9] This meant Anthropic did not charge extra for reasoning capability — a pricing statement that "reasoning should be a first-class capability, not a paid upgrade."

### 2.8 Claude 4: The world's best programming model

On May 22, 2025, Claude 4 was released — including **Claude Opus 4** and **Claude Sonnet 4**.[^10]

Claude Opus 4 was Anthropic's most powerful model ever. It scored **72.5%** on SWE-bench (software engineering benchmark) and **43.2%** on Terminal-bench (terminal operation benchmark) — both world-best at the time.[^10] Anthropic's positioning of Opus 4 was unambiguous: "the world's best programming model." It could work continuously on complex codebases for hours — in Rakuten's testing, Opus 4 independently ran an open-source project refactoring for **7 hours** maintaining stable performance.[^10]

Claude Sonnet 4 similarly achieved **72.7%** on SWE-bench — slightly exceeding Opus 4.[^10] GitHub announced it as the underlying model for GitHub Copilot's next-generation coding agent.[^10]

Both models were hybrid reasoning models supporting extended thinking mode, and for the first time supported **tool use within extended thinking** — including web search.[^10] This meant Claude could actively retrieve external information during reasoning, not merely relying on pre-trained knowledge.

Claude 4's release was accompanied by a suite of new API capabilities: code execution tools, MCP connectors, file APIs, and up to one-hour prompt caching — all pointing in one direction: **AI agents**.[^10]

Launched alongside Claude 4 was the **Claude Max subscription plan** — starting at $100/month, providing 5x or 20x the usage of Pro with higher output limits.[^11] This was Anthropic's major subscription model upgrade, benchmarking against OpenAI's ChatGPT Pro.

---

## III. Technical Route Evolution

### 3.1 Alignment methods: From Constitutional AI to hybrid reasoning

The Claude series' technical route has always taken **alignment** as its starting point — forming a fundamental contrast with the GPT series' starting point of "scale."

- **Constitutional AI (2022–2023)**: Using a set of principles for AI self-critique and revision, replacing human annotation with RLAIF. The core advantage was "achieving better safety alignment with fewer human labels."[^2]
- **Claude 2.x (2023–2024)**: Alignment methodology unchanged, but with added engineering-level constraints — system prompts enabled developers to precisely define Claude's behavioral boundaries.
- **Claude 3.x (2024–2025)**: The balance point between alignment and capability shifted — from "safety first, capability second" to "capability catching up to GPT-4, safety uncompromised." Reducing unnecessary refusals was a key signal — it showed Anthropic had learned "smarter alignment" rather than "more conservative alignment."
- **Claude 3.7/4 (2025)**: Reasoning capability was integrated into the alignment framework — extended thinking had Claude self-reason before answering, essentially an inference-time version of Constitutional AI's "self-critique" phase.

### 3.2 Context windows: From 9K to 200K

| Generation | Context Window |
|-----------|---------------|
| Claude 1.x | ~9K tokens |
| Claude 2 | 100K tokens |
| Claude 2.1+ | 200K tokens |

Anthropic was far more aggressive than OpenAI in advancing context windows. 100K (July 2023) and 200K (November 2023) were both leaps made while GPT-4's 8K/32K/128K was being gradually opened. Long context windows were not just technical capability — they directly determined whether Claude could handle enterprise scenarios like "uploading an entire codebase" or "reading a whole book." After Claude 3, 200K became Claude's standard configuration.

### 3.3 Productization path

Claude's productization path also differed significantly from GPT's:

- **GPT**: API → ChatGPT → Plus subscription → Enterprise. Starting point was API; explosion point was the chat box.
- **Claude**: Partner API → claude.ai → Pro subscription → Artifacts → Max subscription. Starting point was B2B partners (Notion, Quora); explosion point was Artifacts and programming assistance.

Artifacts (June 2024) was the critical turning point in Claude's productization path. Before it, Claude was a "better chatbot" — with users, but no killer application scenario. Artifacts turned Claude into a "creative tool" — programmers used it for writing code, debugging, generating documentation; non-programmers used it for flowcharts, data analysis, presentations. This feature transformed Claude from a "ChatGPT alternative" to "what ChatGPT can't do."

### 3.4 Consistent closed-source strategy

The Claude series has never open-sourced any model. Unlike Llama's "open weights" and GPT's "from open to closed," Claude has been fully closed-source from day one. Anthropic's rationale was not commercial secrecy — but safety considerations. Dario Amodei has repeatedly stated publicly that open distribution of model weights at current safety levels is irresponsible.

This stance appeared out of step during the open-source wave of 2024–2025 — DeepSeek-R1 fully open-sourced its chain of thought under MIT license, Qwen 3 was fully open-source, Llama 3.1 405B had open weights. But Anthropic never wavered. By 2025–2026, when Anthropic refused to allow Claude to be used for mass surveillance and fully autonomous weapons by the U.S. military (leading the Department of Defense to classify it as a "supply chain risk"), the outside world began to re-understand Anthropic's safety stance — it was not a marketing slogan, but a core principle of corporate governance.[^12]

---

## IV. Ecosystem and Impact

### 4.1 The rise of the programming ecosystem

Claude's most significant market achievement in 2024–2025 was not "surpassing GPT-4" — but becoming **the preferred model in the programming assistance domain**. This position was established through three key milestones:

1. **Claude 3.5 Sonnet (2024-06)**: Artifacts + programming capability leap → became the underlying model for AI programming tools like Cursor and Windsurf
2. **Claude 3.5 Sonnet upgraded (2024-10)**: SWE-bench 49%, surpassing all public models → de facto standard for programming assistance
3. **Claude 4 (2025-05)**: GitHub Copilot chose Sonnet 4 as the coding agent's foundation → entering the world's largest programming ecosystem

From Cursor to GitHub Copilot, Claude's penetration in AI programming tools surpassed GPT in 2025. This changed Anthropic's market positioning — it was no longer just "a safer ChatGPT"; it was "a better programming assistant."

### 4.2 Competitive relationships

Claude's competitive relationship with GPT is one of the clearest dual narratives in the LLM space:

- **2023**: Claude was a follower of GPT. Claude 2 matched GPT-3.5 but lagged far behind GPT-4.
- **March 2024**: Claude 3 Opus first surpassed GPT-4 head-to-head — Anthropic's "moon landing moment."
- **June–October 2024**: Claude 3.5 Sonnet established advantages in programming and practical applications — while GPT-4o led in multimodality and voice, for "helping you write code," Claude became the better choice.
- **2025**: Claude 3.7/4 benchmarked against o1/o3 on reasoning — Anthropic responded to OpenAI's "reasoning model" strategy with "hybrid reasoning," but avoided charging separately for reasoning capability.

Competition with Gemini manifested more in the enterprise market — Google's Gemini relied on Google Cloud's distribution advantage, while Claude was simultaneously distributed through Amazon Bedrock and Google Cloud Vertex AI (yes, Claude is sold on Google's own cloud platform — Google holds approximately 14% of Anthropic's shares).

### 4.3 The dialectic of safety and commerce

Anthropic's story is essentially an experiment: **can a company whose core mission is safety survive in a market where capability is the core competitive dimension?**

In 2023, the answer appeared to be "no" — Claude 1.x and 2.x's capabilities were clearly behind GPT-4, with awkward market positioning. In 2024, the answer became "yes" — Claude 3's capabilities caught up, and the safety positioning actually became a differentiating advantage ("not just powerful, but trustworthy"). In 2025, the answer was "not just surviving, but winning" — Claude 4 led globally in programming capability, and Anthropic's valuation reached **$965 billion** (May 2026), making it the world's most valuable pure AI company.[^13]

But this story is not simply "safety first and you win." Anthropic won through **dual drives of safety and capability** — if Claude 3 Opus hadn't surpassed GPT-4 on benchmarks, the best safety story would not have translated into commercial value. Constitutional AI is not a marketing concept — it is a training method that genuinely produces better models. This is the Claude family's core narrative: safety is not the opposite of capability; safety itself is a form of capability.

---

## Appraisal

The Claude series' iteration history answers a question repeatedly asked in the AI industry: **is a company whose core mission is safety destined to lose the capability race?**

The 2023 answer appeared to be "yes" — Claude 1.x and 2.x were clearly behind GPT-4 in capability, with minuscule market share, and media coverage always mentioned Claude as the "safer but weaker" option.

In March 2024, Claude 3 Opus changed that narrative. It did not gain market share through safety — it gained it by **surpassing GPT-4 head-to-head** on standard benchmarks like MMLU, GPQA, and HumanEval. Alignment did not hamper capability — alignment may have even enhanced it. When your training method makes a model better at "understanding human intent," it naturally performs better on instruction-following tasks.

But the Claude family's more profound legacy is its contribution to **AI productization paths**. Artifacts transformed AI from a "dialogue box" into a "workbench" — this shift appears simple, but it redefined what an "AI assistant" should be. Claude 4 and Claude Code pushed AI into the role of "programming collaborator" — from "helping you write a line of code" to "helping you refactor an entire project." GitHub Copilot's choice of Claude Sonnet 4 as its underlying model was the most weighty endorsement of this direction.

The Claude family's history is also an empirical study of "time windows." In 2023, GPT's frontier advantage was two years. By 2024, Claude 3 caught up in one year. By 2025, Claude 4 and o1 were released almost simultaneously — the time window shrank to near zero. When "the frontier" is no longer any single company's exclusive advantage, competition expands from "capability" to "safety," "product experience," "programming ability," and "enterprise trust" — and these happen to be Claude's strengths.

Ultimately, the Claude family's true significance lies not in defeating GPT — but in proving: **safety and capability are not opposite ends of a seesaw, but two sides of the same coin.** Constitutional AI is not a limitation — it is a smarter training method. Anthropic is not "sacrificing capability for safety" — it found a path where safety becomes a source of capability. This insight may be one of the most important discoveries of the 2020s AI industry.

---

*This biography was compiled by the Endfield Industrial Historian Team: Silence (chronicle lead writer).*

---

[^1]: Anthropic, "Introducing Claude," Anthropic Blog. https://www.anthropic.com/index/introducing-claude; Wikipedia, "Anthropic," https://en.wikipedia.org/wiki/Anthropic
[^2]: Bai et al., "Constitutional AI: Harmlessness from AI Feedback," arXiv:2212.08073, 2022-12. https://arxiv.org/abs/2212.08073
[^3]: Anthropic, "Introducing Claude," Anthropic Blog, 2023-03. https://www.anthropic.com/index/introducing-claude
[^4]: Anthropic, "Claude 2," Anthropic Blog, 2023-07-11. https://www.anthropic.com/news/claude-2
[^5]: Anthropic, "Introducing Claude 2.1," Anthropic Blog, 2023-11. https://www.anthropic.com/news/claude-2-1
[^6]: Anthropic, "Introducing the next generation of Claude," Anthropic Blog, 2024-03-04. https://www.anthropic.com/news/claude-3-family
[^7]: Anthropic, "Introducing Claude 3.5 Sonnet," Anthropic Blog, 2024-06-20. https://www.anthropic.com/news/claude-3-5-sonnet
[^8]: Anthropic, "Introducing computer use, a new Claude 3.5 Sonnet, and Claude 3.5 Haiku," Anthropic Blog, 2024-10-22. https://www.anthropic.com/news/3-5-models-and-computer-use
[^9]: Anthropic, "Claude 3.7 Sonnet and Claude Code," Anthropic Blog, 2025-02-24. https://www.anthropic.com/news/claude-3-7-sonnet
[^10]: Anthropic, "Introducing Claude 4," Anthropic Blog, 2025-05-22. https://www.anthropic.com/news/claude-4
[^11]: Anthropic, "Plans & Pricing," https://www.anthropic.com/pricing
[^12]: Wikipedia, "Claude (language model)," https://en.wikipedia.org/wiki/Claude_(language_model) — Anthropic–United States Department of Defense dispute.
[^13]: Wikipedia, "Anthropic," https://en.wikipedia.org/wiki/Anthropic — estimated valuation $965 billion (May 2026).
