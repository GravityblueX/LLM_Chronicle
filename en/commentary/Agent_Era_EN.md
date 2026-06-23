# The Agent Era

> From AutoGPT's one million GitHub stars to Claude Computer Use's mouse and keyboard, large language models spent two years proving one thing: the gap between a model that "can chat" and a model that "can act" is not technical capability, but engineering patience, trust boundaries, and ecosystem maturity.

## I. AutoGPT: The overpromise of the Agent concept (2023)

On March 30, 2023, an open-source project called AutoGPT launched on GitHub. What it did was simple: give GPT-4 a set of tools — web browsing, file read/write, code execution — then let the model plan tasks on its own, execute on its own, and decide the next step on its own. Within two weeks, it became one of the fastest-growing projects in GitHub history, with stars exceeding 100,000.[^1]

AutoGPT's explosion was not because it actually worked well. In fact, the vast majority of users quickly discovered: it would get stuck in loops, lose context, make absurd decisions, and burn through massive token counts without accomplishing anything.[^2] A typical failure case: a user asked AutoGPT to "research and write a blog post about quantum computing," and it would bounce between search engines and file systems, consuming hundreds of API calls, ultimately producing a very low-quality article — far inferior to simply asking GPT-4 directly.

But the explosion itself revealed something: **the market has an enormous, unmet desire for "AI that doesn't just chat but does things for you."** AutoGPT's GitHub star count (exceeding 100,000 in one week) was not an endorsement of code quality but a vote for the Agent concept. The public spoke with their stars: "We want more than chatbots."

AutoGPT's technical approach — using a natural language loop to drive an LLM to repeatedly call tools — quickly revealed its naivety. Large language models are not universal planners. They are already strong enough at single-step reasoning but have virtually no reliable capability in multi-step planning, state management, error recovery, and long-term memory. Wrapping a chatbot model directly into an autonomous agent is like sending a talented translator directly to be a general — the translator isn't unintelligent; their skill stack just wasn't designed for this task.

By the end of 2023, AutoGPT had largely faded into silence. Its contribution was not technical implementation but **concept validation**: the word "Agent" moved from academic concept to public consciousness. Every subsequent Agent product — whether Devin, Cursor, Claude Code, or OpenAI's Operator — lives within the expectations and shadow that AutoGPT planted.

## II. Function calling: Agent infrastructure quietly deployed (2023)

2023 was the year of Agent infrastructure groundwork.

After AutoGPT's retreat, what truly moved Agent from "demo" to "engineering" was Function Calling.

On June 13, 2023, OpenAI added Function Calling capability to the GPT-3.5 and GPT-4 APIs. Models no longer just output text — they could output structured JSON, precisely selecting which function to call and what parameters to pass.[^3] This appeared to be a small feature, but it was the foundation of Agent capability.

Before Function Calling, making models call tools required extensive prompt engineering. You had to describe all tools in the system prompt, then hope the model would output the call intent in the correct format — and format errors, hallucinated parameters, and wrong tool selections were the norm. Function Calling transformed this from a "prompting trick" into a "protocol": models learned during training how to correctly express tool-calling intent. This transition seemed minor but was the watershed of Agent engineering — from "relying on luck for models to do it right" to "relying on protocols to ensure models do it right." From this point, tool calling was no longer the Agent bottleneck — the bottleneck shifted to higher layers: planning, state management, and error recovery.

Anthropic added similar Tool Use capability in the Claude 3 series at the end of 2023; Google also implemented function calling in Gemini. By 2024, virtually all major model providers made "models can call tools" a baseline capability.[^4]

Function Calling's historiographic significance lies in decomposing Agent from a "monolithic system" into a composable architecture of "model + protocol + tools." AutoGPT tried to make the model do everything — planning, executing, judging. Post-Function Calling Agent systems took a different path: the model is responsible only for decision-making and dispatch, with execution delegated to specialized tools. This was an engineering concession and a practical advance.

## III. Claude Computer Use: Agent enters the operating system (2024)

On October 22, 2024, Anthropic released a feature called Computer Use. Claude could no longer only call APIs or tools — it could operate a computer like a human: viewing the screen, moving the mouse, clicking buttons, typing text, reading on-screen content.[^5]

This was not the first attempt to "make AI operate a computer." Various RPA (robotic process automation) tools existed before, and AutoGPT had tried using a browser. But Computer Use was different: a mainstream model provider made "GUI interaction" a formal API capability. The model receives screenshots as input and outputs mouse and keyboard operations — an entirely different Agent paradigm from API calls.

Computer Use's breakthrough was bypassing the "API barrier." Not all software has APIs; not all APIs have documentation; not all documentation is accurate. But all software has a GUI. An Agent that can operate GUIs can theoretically use any software — including legacy systems with no APIs, no plugins, and no developer integrations. This is significant for enterprise automation scenarios.

But Computer Use also exposed Agent's most fundamental fragility. GUI operations are brittle: screen resolution changes, UI layout updates, pop-up overlays, network latency — any tiny variable can cause Agent operations to fail.[^6] The deeper problem is: Agents lack "semantic understanding" when operating GUIs — they see pixels, not intent. They know "there is a button here" but don't always know "what this button means in this context."

This is the classic paradox of the Agent era: **the more universal the interface, the more fragile; the more specialized the interface, the more reliable.** API calls are precise but narrow in coverage; GUI interaction has broad coverage but low reliability. Real Agent products must find balance between the two. The MCP protocol (see §8) attempts to find a third path in this paradox: not relying on GUI, nor relying on fixed APIs — but using a standardized protocol layer to establish reliable yet flexible connections between Agents and tools. Whether this path works depends on MCP ecosystem adoption speed.

## IV. Claude Code's capability leap: From autocomplete to autonomous refactoring

In January 2025, Anthropic released Claude Code — a coding Agent running in the terminal.[^7] Before this, AI programming assistance's mainstream forms were "in-editor completion" (Copilot) and "conversational Q&A" (ChatGPT). Claude Code took a different path: it is not an editor plugin but a standalone Agent running in the terminal that can directly read/write files, execute commands, and operate Git repositories.

Claude Code's true breakthrough was a fundamental shift in working mode: from "you ask a question, it answers" to "you give a task, it works independently for hours." Users describe a task objective — such as "migrate this project from React 15 to React 18" or "fix all TypeScript type errors" — and Claude Code autonomously plans steps, reads files, modifies code, runs tests, adjusts approaches based on errors, and continues working until completion or encountering an unsolvable problem.

By mid-2025, Claude Code could autonomously complete large-scale code refactoring, cross-file migration, complex bug fixes, and similar tasks. Developer community reports included: processing hundreds of files in a single session, working continuously for hours to complete framework-to-framework migration, automatically running tests and adjusting based on failure results.[^8] Some developers reported that Claude Code completed in a single session refactoring tasks that would take humans days — and the quality was not low.

This capability leap raised new trust questions. When Claude Code refactors half a codebase, human developers cannot review every change line by line like reviewing a colleague's Pull Request. Output volume exceeds human review capacity. Thus a paradox emerges: **the more capable the Agent, the harder for humans to verify whether it did things correctly.**

In coding scenarios, compilers and test suites provide partial automated verification. But compiling and passing tests does not equal good code quality — an Agent might write code that runs but has terrible maintainability, just as a student might pass an exam without truly understanding the material. More dimensions of code quality — readability, maintainability, naming conventions, architectural soundness — cannot be covered by automated testing and still require human judgment.

Claude Code's success also redefined "programming assistant." GitHub Copilot (first released June 2021) was initially "autocomplete one line of code" — humans write most code, AI completes a small portion. Cursor (March 2023) expanded to "conversational programming within the editor" — humans describe intent, AI generates code snippets. Claude Code advanced to "autonomously complete complex tasks, humans only set goals and review results" — humans define tasks, AI completes execution. This is not incremental improvement — it is a qualitative shift from "tool" to "collaborator." The human role shifts from "writing code" to "defining intent, reviewing results, bearing responsibility."

## V. Devin's marketing vs. reality: The narrative bet behind a $2B valuation

On March 12, 2024, Cognition Labs released Devin, positioning it as "the world's first AI software engineer" — not a programming assistant, not a code completion tool, but an Agent that could independently complete the full pipeline from requirements analysis to coding, testing, and deployment.[^9] Cognition Labs was founded by Scott Wu, with team members largely from competitive programming backgrounds. Devin's name itself signals positioning — not Copilot (co-pilot) but Devin (an independent engineer).

Devin's launch demo showed impressive capabilities: understanding natural language requirements, formulating development plans, writing code, running tests, debugging errors, and even deploying applications. The demo showed Devin completing multiple real Upwork freelance tasks. But independent testers quickly discovered Devin's actual capabilities fell far short of the demo — frequent failures on many simple tasks, limited planning ability, unreliable error recovery.[^10]

Despite this, Cognition Labs still achieved a valuation of approximately $2 billion.[^11] This valuation was not based on current product capability but on a narrative bet: **the ultimate form of AI programming is not "assisting humans" but "replacing humans."** Cursor and Claude Code position as tools that augment human productivity — programmers still exist, just more efficiently. Devin positions as replacing the programmer themselves — a programmer's position can be replaced by an Agent. The market's enthusiastic response to the latter reveals: what investors and business owners truly want is not "making people more efficient" but "not needing people."

Devin and Claude Code represent two philosophies of Agent development. Claude Code's philosophy is "augmentation" — humans remain the subject, Agents are capability amplifiers. Devin's philosophy is "replacement" — Agents are the subject, humans only review and accept. The former is more easily accepted by programmers; the latter is more favored by investors and management. The tension between these two philosophies will define human-machine relationships in the Agent era — are Agents programmers' tools, or their competitors?

## VI. Google's "agentic era" declaration

On December 11, 2024, Google DeepMind released Gemini 2.0 Flash. Unlike previous model releases, Google CEO Sundar Pichai and DeepMind lead Demis Hassabis explicitly positioned Gemini 2.0 as the foundation for entering the "agentic era" — AI as a system that can take actions on behalf of users, not just answer questions.[^12] Pichai wrote in the launch blog: "If 2023 was the year of AI awakening, then 2025 will be the year of Agent awakening." This statement marked the world's largest internet company formally defining Agent as its next-phase strategic direction.

On the same day, Google released Project Mariner — an Agent running in the Chrome browser that can understand web content, execute actions, and complete tasks.[^13] Mariner's technical approach is similar to Anthropic Computer Use (viewing screens, operating GUIs) but with a different integration method: Computer Use is an API capability requiring developer invocation; Mariner is a browser extension directly facing end users.

Google's "agentic era" declaration marked an important turning point: **all three major AI labs (OpenAI, Anthropic, Google) explicitly positioned Agent as the core direction for the next phase during 2024–2025.** OpenAI has Operator (January 2025), Anthropic has Computer Use (October 2024), Google has Project Mariner (December 2024). The three have different paths — OpenAI builds standalone products, Anthropic builds API capabilities, Google builds browser integration — but the direction is aligned: **from dialogue to action, from answering questions to doing things for you.**

But Google's Agent path faces a unique challenge. Google's core business is search advertising — if Agents directly complete tasks for users (booking flights, buying products, filling forms), users won't need to click ad links in search results. The more successful the Agent, the greater the threat to Google's existing business model. Google's search ad revenue in 2024 was approximately $198 billion, about 57% of Alphabet's total revenue. Google must find a delicate balance between Agent capability and ad protection — a balance point that may never be comfortable.

Google's advantage lies in distribution channels. Chrome has over 3 billion users; Android covers most smartphones globally. If Google can deeply integrate Agent capabilities into Chrome and Android, it has an Agent distribution channel larger than any competitor's. Technical capability can be caught up with, but a 3-billion-user distribution channel cannot be replicated.

## VII. Agent failure modes: Why most Agent projects failed

Between 2023 and 2025, large numbers of Agent projects emerged — and failed in large numbers. From AutoGPT to various enterprise Agent solutions, failure rates far exceeded success rates. Understanding Agent failure modes is more valuable than understanding success cases — because failure modes reveal structural limitations of the current technical stage, not individual product deficiencies.

**Insufficient planning capability** is the first hard injury. LLMs are already strong enough at single-step reasoning but remain unreliable at multi-step planning. Research shows that even the strongest models experience significantly declining success rates on tasks requiring more than 5 reasoning steps.[^14] This is not because models are "not smart enough" — it reflects a fundamental limitation of the current Transformer architecture in long-range planning. It excels at "next token" prediction but struggles with "dependencies among every step in the next 20 steps."

**Hallucination accumulation** is the second hard injury. In multi-step tasks, each step may introduce small errors. If single-step accuracy is 95%, overall accuracy after 10 steps drops to approximately 60% — after 20 steps to approximately 36%. This is a multiplicative effect where each step's reliability is amplified by subsequent steps.

**The human-in-the-loop dilemma.** One solution is adding human checkpoints in the Agent flow — Agent pauses at key decision points for human confirmation. This improves reliability but undermines the "autonomy" premise — if an Agent needs human confirmation every three steps, it's not an "autonomous Agent" but an "assistant requiring frequent approval."

**Trust boundary constraints.** In scenarios like credit assessment, medical decisions, and legal documents, Agent errors have irreversible consequences. The deeper problem is: **Agent errors have no "sorry" option.** When a self-driving system errs, the consequence may be physical harm. When a financial Agent executes a wrong trade, the consequence may be irreversible capital loss.

**Context window limitations** are also an underestimated failure cause. When Agents execute long-range tasks, they need to maintain understanding of the entire task state. But LLM context windows are limited — even the latest 100K+ window models lose early information when processing very long task histories.

These failure modes point to a shared conclusion: **the Agent bottleneck is not model capability but system reliability.** The most successful Agent products of 2025 — Cursor, Claude Code — succeeded precisely because they limited the Agent's action scope to a safe sandbox with compilers, test frameworks, and version control. Within this sandbox, errors can be automatically detected and reverted. Outside this sandbox — such as operating GUIs, browsing the web, interacting with the real world — Agent reliability drops precipitously. The real world has no `git revert`.

## VIII. MCP and Agent ecosystem: Protocol competition is platform competition

On November 25, 2024, Anthropic released the Model Context Protocol (MCP), an open protocol for standardizing connections between LLMs and external tools and data sources.[^15] MCP's design goal is to let any tool — database, file system, API, internal system — be callable by Agents through a unified protocol.

MCP's arrival marked a shift in Agent ecosystem competition from "whose model is stronger" to "whose protocol is more universal." This shares structural similarities with the early internet's browser wars and the mobile internet's OS wars: when underlying capabilities converge, platform competition depends on ecosystem richness. What MCP does, by analogy, is like how USB standardized device connections — before USB, every peripheral had its own interface; after USB, any peripheral could plug and play. MCP attempts to do the same for Agents: let any tool be "plug-and-play" callable by Agents.

By 2025, MCP had achieved considerable community adoption — large numbers of developers wrote MCP Servers for various services. But the Agent protocol battle is far from over. OpenAI released the Agents SDK and enhanced function calling; Google launched its own Agent framework; Microsoft deeply integrated the Copilot ecosystem with Microsoft Graph.[^16]

The competition between these protocols is essentially a contest for the position of "Agent operating system." Whoever defines the standard interface between Agents and tools controls the entry point of the Agent ecosystem. MCP's historical significance lies in being the first open protocol driven by a mainstream AI company aimed at standardizing Agent-tool connections.

## IX. From tool to colleague: The real threshold of the Agent era (2025–)

By 2025, Agents moved from demo to product, from product to ecosystem. But whether the "Agent era" has arrived depends on your definition of "arrived."

Two clear directions emerged for Agent products in 2025:

**Coding Agents** were the first successful deployment scenario. Cursor, GitHub Copilot, Claude Code, Windsurf, Devin — these products proved one thing: code is Agent's most natural working environment. Code can be compiled, tested, and reviewed through diffs. This means Agent output can be automatically verified without line-by-line human review.[^17] When errors can be automatically detected, the Agent reliability problem shifts from "absolutely cannot make mistakes" to "acceptable error rate."

**General-purpose Agents** remain in early stages. OpenAI's Operator (January 2025) lets users browse the web and complete online tasks through Agents. Google's Project Mariner embeds Agent capability in Chrome.[^18] But the core problem general-purpose Agents face remains unsolved: they are still unreliable on complex, multi-step tasks requiring judgment.

The Agent era's true threshold is not technical capability but **trust calibration.** The challenge is not "can the Agent do this task" but "can I trust the Agent to do this task correctly enough to not need checking — and if checking is needed, is the checking cost less than doing it myself?"

This threshold varies enormously by scenario. In coding, automated verification (compilers, tests) makes trust calibration tractable. In web browsing, the lack of automated verification makes trust calibration nearly intractable. In healthcare, law, and finance, the consequences of errors make trust calibration existentially important.

The Agent era's arrival is not a binary event but a gradual expansion of the trust boundary — starting from domains where automated verification exists (code), expanding toward domains where it doesn't (general knowledge work). This expansion will take years, not months. And it will be driven not by model capability improvements alone but by the co-evolution of verification infrastructure, trust frameworks, and organizational adaptation.

The gap between "can chat" and "can act" is not a technical gap — it is an engineering, trust, and ecosystem gap. AutoGPT proved the desire exists. Function Calling proved the protocol can work. Claude Computer Use proved GUI interaction is feasible. Claude Code proved autonomous coding is viable. But proving feasibility and achieving reliability are separated by the same chasm that separates any demo from any production system: the last 10% that takes 90% of the effort.

---

*This piece was compiled by the Endfield Industrial Historical Archives team: Zhuang Fangyi (lead writer).*

---

[^1]: Significant Gravitas, "AutoGPT", GitHub repository, 2023-03-30. https://github.com/Significant-Gravitas/Auto-GPT
[^2]: Multiple user reports documented AutoGPT's tendency to enter loops and consume excessive tokens without completing tasks. See various community forums and GitHub issues from 2023.
[^3]: OpenAI, "Function calling and other API updates", 2023-06-13. https://openai.com/blog/function-calling-and-other-api-updates
[^4]: Anthropic, "Introducing Tool Use with Claude", 2023 (Claude 3 series). Google, function calling in Gemini API documentation.
[^5]: Anthropic, "Introducing computer use, a new Claude 3.5 Sonnet, and Claude 3.5 Haiku", 2024-10-22. https://www.anthropic.com/news/3-5-models-and-computer-use
[^6]: Multiple developer reports documented the brittleness of Computer Use in real-world scenarios with varying screen resolutions and UI layouts.
[^7]: Anthropic, "Claude Code", 2025-01. https://docs.anthropic.com/en/docs/claude-code
[^8]: Developer community reports on Claude Code capabilities, various platforms, 2025.
[^9]: Cognition Labs, "Devin", 2024-03-12. https://www.cognition.ai/
[^10]: Independent testing of Devin showed significant gaps between demo capabilities and real-world performance. See various independent reviews, 2024.
[^11]: Bloomberg / The Information, "Cognition Labs valued at approximately $2 billion", 2024.
[^12]: Google, "Introducing Gemini 2.0: our new AI model for the agentic era", 2024-12-11. https://blog.google/technology/google-deepmind/google-gemini-ai-update-december-2024/
[^13]: Google, "Project Mariner", 2024-12. Chrome extension for Agent-based web interaction.
[^14]: Research on multi-step planning reliability in LLMs. Various studies from 2024–2025.
[^15]: Anthropic, "Model Context Protocol", 2024-11-25. https://modelcontextprotocol.io/
[^16]: Various Agent SDK releases from OpenAI, Google, and Microsoft in 2024–2025.
[^17]: Coding Agent products demonstrated that automated verification (compilers, test suites) significantly improves Agent reliability in software development scenarios.
[^18]: OpenAI, "Introducing Operator", 2025-01. Google, "Project Mariner", 2024-12.
