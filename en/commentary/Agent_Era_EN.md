# The Agent Era

> From AutoGPT's one million stars to Claude Computer Use's mouse and keyboard, large language models spent two years proving one thing: the gap between making a model "converse well" and making it "do things" is not technical capability but engineering patience, trust boundaries, and ecosystem maturity.

## I. AutoGPT: The overpromise of the agent concept (2023)

On March 30, 2023, an open-source project called AutoGPT appeared on GitHub. Its design was simple: give GPT-4 a set of tools — web browsing, file reading/writing, code execution — and let the model plan tasks, execute them, and decide the next step on its own. Within two weeks, it became one of the fastest-growing projects in GitHub history, surpassing 100,000 stars.[^1]

AutoGPT's viral explosion was not because it actually worked well. In fact, most users quickly discovered: it would get stuck in loops, lose context, make absurd decisions, and consume vast numbers of tokens while accomplishing nothing.[^2] A typical failure case: a user asked AutoGPT to "research and write a blog post about quantum computing," and it would bounce between search engines and the file system, consuming hundreds of API calls, ultimately producing an article of extremely low quality — far worse than simply asking GPT-4 to answer in one shot.

But the explosion itself revealed a truth: **the market had an enormous, unmet desire for "AI that doesn't just chat but does things on your behalf."** AutoGPT's GitHub star count (100,000 in one week) was not an endorsement of code quality but a vote for the agent concept. The public spoke with their stars: "We want more than chatbots."

AutoGPT's technical approach — using a natural-language loop to drive an LLM to repeatedly invoke tools — quickly exposed its naivety. Large models are not universal planners. They are already strong enough in single-step reasoning but have virtually no reliable capability in multi-step planning, state management, error recovery, and long-horizon memory. Wrapping a chatbot model directly as an autonomous agent is like sending a talented translator directly to serve as a general — the translator is not unintelligent; their skill stack simply was not designed for this task.

By the end of 2023, AutoGPT had essentially gone quiet. Its contribution was not technical implementation but **concept validation**: the word "agent" moved from academic concept into public consciousness. Every subsequent agent product — whether Devin, Cursor, Claude Code, or OpenAI's Operator — lives in the expectations and shadow AutoGPT planted.

## II. Function Calling: Agent infrastructure quietly laid (2023)

2023 was the year agent infrastructure was laid.

After AutoGPT receded, what truly moved agents from "demo" to "engineering" was Function Calling.

On June 13, 2023, OpenAI added Function Calling capability to the GPT-3.5 and GPT-4 APIs. Models no longer merely output text — they could output structured JSON, precisely selecting which function to call and what parameters to pass.[^3] This appeared to be a small feature, but it was the foundation of agent capability.

Before Function Calling, making models invoke tools required extensive prompt engineering. You had to describe all tools in the system prompt, then hope the model would output its invocation intent in the correct format — and format errors, hallucinated parameters, and misselected tools were the norm. Function Calling transformed this from a "prompt trick" into a "protocol": models learned during training how to correctly express tool invocation intent. This shift, though seemingly minor, was the watershed of agent engineering — from "relying on luck for the model to get it right" to "relying on protocol to ensure the model gets it right." From this point, tool invocation was no longer the agent's bottleneck — the bottleneck shifted to higher layers: planning, state management, and error recovery.

Anthropic added similar Tool Use capability to its Claude 3 series at the end of 2023; Google also implemented function calling in Gemini. By 2024, virtually all major model providers treated "models can call tools" as a foundational capability.[^4]

Function Calling's historical significance was decomposing agents from a "monolithic system" into a composable architecture of "model + protocol + tools." AutoGPT attempted to have the model do everything — planning, executing, judging. Post-Function Calling agent systems took a different path: the model is responsible only for decision-making and dispatch, while execution is delegated to specialized tools. This was an engineering concession and a practical advance.

## III. Claude Computer Use: Agents enter the operating system (2024)

On October 22, 2024, Anthropic released a capability called Computer Use. Claude could no longer merely call APIs or tools — it could operate a computer like a human: viewing screens, moving the mouse, clicking buttons, typing text, and reading on-screen content.[^5]

This was not the first attempt to "have AI operate a computer." Various RPA (robotic process automation) tools existed before, and AutoGPT had tried using browsers. But Computer Use was different in that a mainstream model provider made "GUI interaction" a formal API capability. The model receives screenshots as input and outputs mouse and keyboard operations — an agent paradigm completely different from API calls.

Computer Use's breakthrough was bypassing the "API barrier." Not all software has APIs, not all APIs have documentation, and not all documentation is accurate. But all software has a GUI. An agent that can operate a GUI can in theory use any software — including legacy systems without APIs, plugins, or developer interfaces. This held enormous significance for enterprise automation scenarios.

But Computer Use simultaneously exposed agents' most fundamental vulnerability. GUI operation is fragile: screen resolution changes, UI layout updates, popup overlays, network latency — any minor variable can cause agent operation failure.[^6] The deeper problem: agents operating GUIs lack "semantic understanding" — they see pixels, not intent. They know "there is a button here" but do not always know "what this button means in this context."

This is the classic paradox of the agent era: **the more universal the interface, the more fragile; the more specialized the interface, the more reliable.** API calls are precise but narrow in coverage; GUI interaction is broad but low in reliability. Real agent products must find a balance between the two. The MCP protocol (see §VIII) attempts to find a third way in this paradox: neither depending on GUI nor on fixed APIs — but using a standardized protocol layer for reliable yet flexible connections between agents and tools. Whether this path succeeds depends on the speed of MCP ecosystem coverage.

## IV. Claude Code's capability leap: From auto-completion to autonomous refactoring

In January 2025, Anthropic released Claude Code — a coding agent running in the terminal.[^7] Prior to this, AI coding assistance's mainstream forms were "in-editor completion" (Copilot) and "conversational Q&A" (ChatGPT). Claude Code took a different path: it was not an editor plugin but an independently running terminal agent that could directly read/write files, execute commands, and operate Git repositories.

Claude Code's true breakthrough was a fundamental shift in work mode: from "you ask a question, it answers" to "you give a task, and it works independently for hours." Users describe a task goal — such as "migrate this project from React 15 to React 18" or "fix all TypeScript type errors" — and Claude Code autonomously plans steps, reads files, modifies code, runs tests, adjusts based on errors, and continues working until completion or until it encounters an insurmountable problem.

By mid-2025, Claude Code could autonomously complete large-scale code refactoring, cross-file migration, and complex bug fixes. Developer community-reported cases include: processing hundreds of files in a single session's refactoring, working continuously for hours to complete framework-to-framework migration, and automatically running tests and adjusting based on failure results.[^8] Some developers reported Claude Code completing refactoring tasks in a single session that would take humans days — with no drop in quality.

This capability leap triggered new trust problems. When Claude Code refactors half a codebase, human developers cannot review every change line by line the way they would review a colleague's Pull Request. The output volume exceeds human review capacity. This produced a paradox: **the more capable the agent, the harder it is for humans to verify correctness.**

In coding scenarios, compilers and test suites provide partial automated verification. But compilation passing and tests passing do not equal good code quality — an agent may write code that runs but has terrible maintainability, just as a student may pass an exam without truly understanding the material. More dimensions of code quality — readability, maintainability, naming conventions, architectural soundness — cannot be covered by automated testing and still require human judgment. This means that even in agents' most favorable environments (with compilers and test suites), a layer of quality dimensions still requires human oversight.

Claude Code's other notable feature is its "work log" — it outputs in real-time what it is doing, why, and what problems it encountered. This provides a degree of observability — humans can track the agent's reasoning process rather than just seeing final output. But "observable" does not equal "understandable" — when an agent modifies 200 files in 3 hours, even the work log exceeds human reading capacity.

Claude Code's success also redefined what "coding assistant" means. GitHub Copilot (first released June 2021) was originally "auto-complete one line of code" — humans wrote most code, AI completed a small portion. Cursor (March 2023) expanded to "conversational programming within the editor" — humans describe intent, AI generates code snippets. Claude Code advanced to "autonomously complete complex tasks, with humans only setting goals and reviewing results" — humans define tasks, AI completes execution. This is not incremental improvement — it is a qualitative shift from "tool" to "collaborator." The human role shifts from "writing code" to "defining intent, reviewing results, bearing responsibility."

This role transition has profound implications for software engineering. When a senior engineer uses Claude Code to complete in 2 hours a refactoring task that would have taken 2 days, productivity does increase. But it also means: the "writing basic code" tasks once assigned to junior engineers are being consumed by agents. Junior engineers' core value — accumulating experience and intuition through writing large volumes of code — is being bypassed. Agents are not merely changing "how code is written" — they are changing "who writes code" and "what skills code-writers need." Programmers' skill stacks are migrating from "writing code" toward "reviewing code, defining requirements, and managing agents."

## V. Devin's marketing vs. reality: The narrative bet behind a $2B valuation

On March 12, 2024, Cognition Labs released Devin, positioning it as "the world's first AI software engineer" — not a coding assistant, not a code completion tool, but an agent capable of independently completing the entire workflow from requirements analysis through coding, testing, and deployment.[^9] Cognition Labs was founded by Scott Wu, with team members largely from competitive programming backgrounds. Devin's name itself signals its positioning — not Copilot (副驾驶, co-pilot), but Devin (an independent engineer).

Devin's release demo showcased impressive capabilities: it could understand natural language requirements, formulate development plans, write code, run tests, debug errors, and even deploy applications. The demo showed Devin completing multiple real Upwork freelance tasks. But independent testers quickly discovered that Devin's actual capabilities fell far short of the demo — frequent failures on many simple tasks, limited planning ability, unreliable error recovery.[^10]

Despite this, Cognition Labs still achieved a valuation of approximately $2 billion.[^11] This valuation was not based on current product capability but on a narrative bet: **the ultimate form of AI coding is not "assisting humans" but "replacing humans."** Cursor and Claude Code position themselves as tools augmenting human productivity — the programmer is still there, just more efficient. Devin positions itself as replacing the programmer themselves — a programmer's role can be taken over by an agent. The market's enthusiastic response to the latter suggests that what investors and business owners truly want is not "making people more efficient" but "not needing people."

Devin and Claude Code represent two philosophies of agent development. Claude Code's philosophy is "augmentation" — humans remain the subject; agents are capability amplifiers. Devin's philosophy is "replacement" — agents are the subject; humans are responsible only for review and acceptance. The former is more readily accepted by programmers; the latter is more popular with investors and management. The tension between these two philosophies will define human-agent relationships in the agent era — are agents programmers' tools, or their competitors?

Devin's case exposed a structural risk of the agent era: **the gap between demo and reality.** AutoGPT's demo made people think the agent era had arrived (it had not); Devin's demo made people think AI engineers were viable (they still required extensive human intervention). Agent product valuations are heavily narrative-dependent — and narratives can run far ahead of technology.

This narrative-reality gap did not narrow in 2025. OpenAI Operator's demo showed agents completing online tasks autonomously, but early users reported frequent errors on complex web pages. Google Project Mariner's demo was impressive but had not yet undergone large-scale public testing. The state of the agent industry in 2025 can be summarized as: **everyone demonstrates agents are viable in demos, but few prove agents are reliable in production environments.** This gap is becoming the agent era's greatest uncertainty.

Notably, the narrative-reality gap manifests differently in capital markets and user markets. In capital markets, narrative runs ahead — Devin's $2B valuation, high fundraising amounts for various agent startups, all based on the narrative that "agents are about to change everything." In user markets, reality lags — most enterprise users remain in "observation" or "small-scale pilot" stages, with cases of genuinely embedding agents in core production workflows numbering on one hand. When the gap between capital narrative and user reality widens to a certain degree, market correction will arrive — multiple agent startups have already shut down or pivoted during 2024–2025.

## VI. Google's "Agentic Era" declaration

On December 11, 2024, Google DeepMind released Gemini 2.0 Flash. Unlike previous model releases, Google CEO Sundar Pichai and DeepMind lead Demis Hassabis explicitly positioned Gemini 2.0 as the foundation for entering the "agentic era" — AI systems that no longer merely answer questions but can take actions on behalf of users.[^12] Pichai wrote in the release blog: "If 2023 was the year AI awakened, then 2025 will be the year agents awaken." This statement marked the world's largest internet company formally defining agents as the next phase's strategic direction.

On the same day, Google released Project Mariner — an agent running in the Chrome browser that could understand web content, execute operations, and complete tasks.[^13] Mariner's technical approach was similar to Anthropic Computer Use (viewing screens, operating GUIs) but differed in integration: Computer Use was an API capability requiring developer invocation; Mariner was a browser extension directly serving end users.

Google's agent strategy had deeper layers. Gemini 2.0 Flash itself was a multimodal model — processing text, image, audio, and video input with real-time interaction support. This meant agents could no longer only "read text" — they could see screens, hear speech, and understand video. Google Search's advantage lay in indexing the internet's most comprehensive information; Gemini's multimodal capability lay in understanding these information forms; agents' value lay in acting on users' behalf based on this information. The three together constituted Google's most complete value chain in the agent era.

Google's "agentic era" declaration marked a pivotal turn: **all three major AI labs (OpenAI, Anthropic, Google) explicitly positioned agents as their next-phase core direction during 2024–2025.** OpenAI had Operator (January 2025), Anthropic had Computer Use (October 2024), Google had Project Mariner (December 2024). The three paths differed — OpenAI built independent products, Anthropic built API capabilities, Google built browser integrations — but the direction aligned: **from dialogue to action, from answering questions to doing things on your behalf.**

But Google's agent path faced unique challenges. Google's core business was search advertising — if agents directly completed tasks for users (booking flights, purchasing goods, filling forms), users would not need to click ad links in search results. The more successful agents were, the greater the threat to Google's existing business model. This was Google's "innovator's dilemma" in the agent era: you need to disrupt your own revenue source to embrace the next wave. Google's 2024 search advertising revenue was approximately $198 billion, about 57% of Alphabet's total revenue. If agents replace the "search-click-convert" pipeline, this revenue base erodes. Google must find a delicate balance between agent capability and ad protection — a balance that may never be comfortable.

Google's advantage lay in distribution channels. Chrome browser had over 3 billion users; Android covered most smartphones globally. If Google deeply integrated agent capabilities into Chrome and Android, it would possess a larger agent distribution channel than any competitor. Technical capability can be caught up with, but a 3-billion-user distribution channel cannot be replicated. Google's strategy might be: using Gemini's model capability as the foundation, Chrome's browser as the agent's runtime environment, and Google Search's information index as the agent's knowledge base. The three combined form a complete chain from "understanding the world" to "acting on users' behalf."

## VII. Agent failure modes: Why most agent projects failed

Between 2023 and 2025, a flood of agent projects emerged — and a flood failed. From AutoGPT to various enterprise agent solutions, the failure rate far exceeded the success rate. Understanding agent failure modes is more valuable than understanding success stories — because failure modes reveal the structural limitations of the current technology stage, rather than individual product defects.

**Insufficient planning capability** was the first hard wound. LLMs are already strong enough in single-step reasoning but remain unreliable in multi-step planning. Research shows that even the strongest models exhibit significantly decreased success rates on tasks requiring more than 5 reasoning steps.[^14] This is not models being "not smart enough" — it is a fundamental limitation of current Transformer architecture in long-horizon planning. It excels at "next token" prediction but struggles with "the dependency relationships across the next 20 steps." AutoGPT attempted to bypass this limitation by "having the model repeatedly think about the next step" — but repeated thinking consumes massive tokens and does not guarantee convergence to the correct solution. A more effective engineering approach is decomposing complex tasks into simple sub-tasks, each executed independently — but this decomposition itself requires planning ability, creating circular dependency.

**Hallucination accumulation** was the second hard wound. In multi-step tasks, each step can introduce minor errors. If per-step accuracy is 95%, after 10 steps overall accuracy drops to approximately 60% — after 20 steps, to approximately 36%. This is a multiplicative effect where each step's reliability is amplified by subsequent steps. AutoGPT's failures on complex tasks were largely due to error accumulation in loops — each step's small error pushed subsequent steps' inputs further from the correct direction, ultimately causing complete failure.

In coding scenarios, hallucination accumulation manifests as: an agent misreading a function signature in the first step, causing all subsequent modifications based on that understanding to be wrong. The compiler catches some errors but not semantic-level errors — a function call that is syntactically correct but logically wrong will not trigger compiler errors.

**The human-in-the-loop dilemma.** One solution is adding human checkpoints to the agent pipeline — the agent pauses at critical decision points and requests human confirmation. This improves reliability but undermines the premise of "autonomy" — if an agent needs human confirmation every three steps, it is not an "autonomous agent" but "an assistant requiring frequent approval." A more practical problem: the cognitive cost of humans reviewing agent intermediate outputs may not be lower than humans completing the task themselves. When review cost approaches execution cost, the agent's productivity advantage is negated.

**Trust boundary constraints in the real world.** In credit assessment, medical decision-making, legal documents, and similar scenarios, the consequences of agent errors are irreversible. A coding agent that writes incorrect code can be caught by CI; a medical agent that makes an incorrect diagnosis — who catches that? The trust threshold in these scenarios is extremely high, and agent reliability is far from reaching it.

The deeper problem: **agents' errors have no "sorry" option.** When an autonomous driving system errs, consequences may be physical harm. When a financial agent executes an incorrect trade, consequences may be irreversible financial loss. In these high-risk scenarios, "post-hoc rollback" is not always feasible. This means agent deployment in high-risk scenarios must be accompanied by extremely strict permission controls — agents can only execute "reversible" operations. But this limits agent autonomy — how different is an agent that can only execute "reversible operations" from an "assistant requiring human confirmation at every step"?

**The cost-value balance.** Agents may be more expensive than humans on simple tasks (API call costs exceeding human labor costs) and cheaper than humans on complex tasks (saving substantial time). But in the middle ground — tasks that are "neither simple nor complex" — the cost-value calculation is ambiguous. Enterprise deployment decisions ultimately depend on whether agents can generate positive ROI on "enough" tasks — and this requires large-scale empirical data that is currently extremely scarce.

**Context window limitations** are also an underestimated cause of failure. When agents execute long-horizon tasks, they need to maintain understanding of the entire task state. But LLM context windows are limited — even the latest 100K+ window models lose early information when processing extremely long task histories. AutoGPT's looping problem was partly caused by context overflow making the agent forget which approaches it had already tried.

**Cost issues** similarly constrain practical deployment. A Claude Code session processing hundreds of files in a refactoring may consume tens of dollars in API fees. When agents need to repeatedly attempt and roll back, costs inflate further. For enterprises, an agent completing a task may cost more than hiring a junior human engineer — unless the task is complex enough and time-sensitive enough.

These failure modes point to a shared conclusion: **the bottleneck for agents is not model capability but system reliability.** The most successful agent products of 2025 — Cursor, Claude Code — succeeded precisely because they restricted agent action scope to a safe sandbox with compilers, test frameworks, and version control. Within this sandbox, errors can be automatically detected and rolled back. Outside this sandbox — operating GUIs, browsing the web, interacting with the real world — agent reliability drops precipitously. The real world has no `git revert`.

## VIII. MCP and the agent ecosystem: Protocol wars are platform wars

On November 25, 2024, Anthropic released the Model Context Protocol (MCP), an open protocol for standardizing connections between LLMs and external tools and data sources.[^15] MCP's design goal was enabling any tool — databases, file systems, APIs, internal systems — to be called by agents through a unified protocol.

MCP's emergence marked the shift of agent ecosystem competition from "whose model is stronger" to "whose protocol is more universal." This has structural similarities to the early internet's browser wars and the mobile internet's OS wars: when underlying capabilities converge, platform competition depends on ecosystem richness. What MCP does is, by analogy, like how USB standardized device connections — before USB, every peripheral had its own interface; after USB, any peripheral could plug and play. MCP attempts to do the same for agents: let any tool be "plug-and-play" callable by agents.

By 2025, MCP had achieved substantial community adoption — large numbers of developers had written MCP Servers for various services. But the agent protocol war was far from over. OpenAI released its Agents SDK and enhanced versions of function calling, Google launched its own agent framework, and Microsoft deeply integrated the Copilot ecosystem with Microsoft Graph.[^16]

Competition between these protocols is fundamentally a contest for the position of "agent operating system." Whoever defines the standard interface between agents and tools controls the agent ecosystem's gateway. This follows the same historical logic as Android vs. iOS, HTTP vs. Gopher: **the victory of technical standards ultimately depends on ecosystem adoption speed, not the protocol's technical elegance.**

MCP's historical significance: it was the first open protocol driven by a mainstream AI company aimed at standardizing agent-tool connections. Before MCP, every agent framework had its own tool invocation method — LangChain had its Tool interface, AutoGPT had its plugin system, every company's API had its own function calling format. MCP attempted to unify these fragmented interfaces so that a tool only needed to write one MCP Server to be callable by any MCP-supporting agent. The benefits of this standardization were enormous — reducing integration costs for both tool developers and agent developers. But standardization's success does not depend on technical design — it depends on adoption speed. Whether MCP can become the USB of agents depends on how many tool providers are willing to write MCP Servers.

## IX. From tools to colleagues: The real threshold of the agent era (2025–)

By 2025, agents moved from demos to products, and from products to ecosystems. But whether the "agent era" has arrived depends on your definition of "arrived."

In 2025, agent products began displaying two clear directions:

**Coding agents** were the first successful landing scenario. Cursor, GitHub Copilot, Claude Code, Windsurf, Devin — these products proved one thing: code is agents' most natural working environment. Code can be checked by compilers, verified by tests, and reviewed through diffs. This means agent output can be automatically verified without humans reviewing line by line.[^17] When errors can be automatically detected, the agent reliability problem shifts from "absolutely cannot err" to "acceptable error rate." The coding agent market's competition was white-hot by 2025 — Cursor seized developer mindshare through editor integration, Claude Code built technical reputation through sustained autonomous work, and GitHub Copilot occupied distribution channels through the Microsoft-GitHub ecosystem. Devin took a differentiated path — not "assistant" but "engineer" — but its actual market performance remains to be verified.

**General-purpose agents** remain in early stages. OpenAI's Operator (released January 2025) enabled users to browse the web and complete online tasks through agents. Google's Project Mariner embedded agent capabilities in Chrome.[^18] But the core problem of general-purpose agents remains unsolved: they are still unreliable on complex, multi-step, judgment-requiring tasks. A coding agent that writes bad code gets caught by CI; a general-purpose agent that books the wrong flight — who catches that?

General-purpose agents face an additional problem that coding agents do not: **environment change.** Code repositories are relatively stable — API documentation and compiler rules do not change daily. But web interfaces change frequently — button positions, form fields, and popup logic can update at any time. GUI agents need robustness to such changes — but current agents' ability to adapt to environmental changes is extremely limited. An agent that successfully books a flight today may completely fail tomorrow when the website redesigns.

The real threshold of the agent era is not "whether models can do things" — 2025's models are already strong enough for many tasks. The threshold is **reliability** and **trust.** And reliability and trust are not model attributes — they are system attributes. An agent's reliability depends on the entire tech stack: model capability, tool interfaces, error detection, rollback mechanisms, human oversight, and permission control. The model is just one layer in this stack.

This systems perspective explains why different agent products have vastly different success rates. Cursor and Claude Code achieve higher success rates in coding scenarios not because their models are stronger than GPT-4 (in fact, Claude 3.5 Sonnet and GPT-4o differ little on benchmarks) but because coding environments provide the best "safety net": compilers check syntax, test suites check behavior, and version control provides rollback. Once agents are placed in environments without safety nets — operating GUIs, browsing the web, interacting with humans — success rates drop precipitously.

A human can delegate a task to an agent, but the human needs to know when the agent will fail. This requires:

- **Observability**: every agent decision and action must be traceable;
- **Boundary awareness**: agents must know their capability limits and request human intervention when uncertain;
- **Error recovery**: agents must be able to roll back when they err, not continue down an increasingly wrong path;
- **Permission control**: the scope and consequences of agent operations must have clear boundaries.

The absence of any one of these four conditions demotes an agent from "colleague" to "toy." AutoGPT's failure lay not in its inability to act but in its absence on all four points — unobservable, unaware of its own limits, unable to recover from errors, and lacking permission control. The most successful agent products of 2025 — Cursor, Claude Code — succeeded precisely because they restricted agent action scope to a safe sandbox with compilers, test frameworks, and version control. Within this sandbox, all four conditions can be (at least partially) met. Outside the sandbox, all four become challenges.

## Commentary

The agent era did not arrive on the day AutoGPT hit one million stars, nor on the day Claude Computer Use was announced. It is arriving — slowly, unevenly, establishing footholds in specific scenarios first.

Coding agents were the first battlefield to prove "models can do things, not just talk," because code is the only language in which errors can be automatically verified. Claude Code's capability leap from "auto-complete one line" to "independently refactor half a codebase" demonstrated agents' potential in coding scenarios — but also exposed new trust problems: when an agent's output exceeds human review capacity, what is the foundation of trust? The compiler? The test suite? Or the empiricism of "it did well before, so it will this time"? The last is unacceptable in engineering.

Devin's $2B valuation proves the market has enormous appetite for the "AI replaces programmers" narrative, but the demo-reality gap reminds us: narratives can run far ahead of technology. Devin and Claude Code represent two fundamentally different agent philosophies — "replacement" and "augmentation" — and their competition will define human-agent relationships in the agent era.

General-purpose agents' difficulties lie not in models not being smart enough but in the real world lacking compilers and test suites. Google declared direction with its "agentic era" proclamation, but its search advertising business model's "innovator's dilemma" suggests: the agent era's winner may not be the largest company but the one best able to adapt its business model. Agent failure modes — insufficient planning, hallucination accumulation, trust thresholds — are not individual product defects but structural limitations of the current technology stage. Before these limitations are systematically resolved, agents' applicable scope will be strictly limited to "verifiable" domains.

The true agent era is not the era of models being omnipotent but the era in which **humans learn to share tasks and share risk with models.** Function Calling laid the protocol; MCP laid the ecosystem; Computer Use bypassed the API barrier — but what ultimately determines how far agents go is not the upper bound of model capability but how low engineering systems can push the cost of their mistakes. The diffusion path of agents is "verifiable domains" first — code, data, mathematics — then slow expansion into "unverifiable domains." This path may take decades, or it may never be completed.

AutoGPT proved demand exists. Function Calling proved protocols are viable. MCP proved ecosystems can be built. Claude Code proved coding agents can "work independently for hours." Devin proved the market will pay $2B for the "AI engineer" narrative. The next step that needs proving: agents can be trusted in the real world without compilers and test suites. This is not a model problem but a systems design problem — and a trust engineering problem.

The agent era's final paradox is: **agents succeed most in domains where humans can most easily verify their output (coding); agents struggle most in domains where humans can least easily verify their output (real-world decisions).** This means agents' diffusion path may not be from simple to complex but from "verifiable" to "unverifiable." In verifiable domains (code, math, data processing), agents will grow ever stronger. In unverifiable domains (creative judgment, interpersonal relations, moral decisions), agents will continue facing trust barriers. The dividing line between the two worlds is not technical capability — but verification cost.

This paradox also explains why the MCP ecosystem matters so much. What MCP does is reduce connection costs between agents and tools — but its deeper significance is building standardized infrastructure for "verifiable domains." When an agent calls an API with clear input-output specifications, the output's verifiability is far higher than when an agent operates a GUI. Behind the agent protocol wars lies an infrastructure contest between "verifiable" and "unverifiable" agent paradigms. Whoever first builds infrastructure for "verifiable domains" gains the first foothold.

From AutoGPT's one million stars to Claude Code's hours of autonomous work, agents took less than two years to traverse the path from "concept hype" to "productivity tool." But this is only the first step. The next step — making agents work reliably in the real world without compilers or test suites — may take far longer than two years, or may require us to redefine what "reliable" means. The story of the agent era has only just begun. What the chronicler must record is not who reaches the finish line first — because no one may know where the finish line is — but what kind of footprints each step along the way has left.

---

*Compiled by the Endfield Industrial Chronicle team: Fu Xuan (Lead Commentary Writer). §IV–§VII (Claude Code, Devin, Google "agentic era," agent failure modes) additions and Commentary rewrite by Fu Xuan.*

---

(The complete evolution of the AI agent ecosystem from AutoGPT to the MCP protocol is covered in *The AI Agent Ecosystem* treatise.)

(Agents' application and impact in coding scenarios are also discussed in *Commentary: Data Annotation and AI Labor* under the "Vibe Coding" section.)

(Detailed analysis of specific products like Claude Code, Devin, and Operator can be found in their respective entries in the chronicle.)

[^1]: Significant Gravitas, "AutoGPT", GitHub repository, 2023-03-30. https://github.com/Significant-Gravitas/AutoGPT; see also Reuters, "Auto-GPT and BabyAGI spark an 'autonomous AI agent' craze", 2023-04-12.
[^2]: See Simon Willison, "Here's what I think about AutoGPT", 2023-04-13. https://simonwillison.net/2023/Apr/14/worst-that-can-happen/
[^3]: OpenAI, "Function calling and other API updates", 2023-06-13. https://openai.com/blog/function-calling-and-other-api-updates
[^4]: Anthropic, "Tool use (function calling)", Claude documentation, 2024. https://docs.anthropic.com/en/docs/build-with-claude/tool-use
[^5]: Anthropic, "Introducing computer use", 2024-10-22. https://www.anthropic.com/news/3-5-sonnet-computer-use
[^6]: See The Verge, "Anthropic's AI can now control your computer", 2024-10-22. Early users reported reliability issues.
[^7]: Anthropic, "Claude Code", 2025-01. https://docs.anthropic.com/en/docs/claude-code
[^8]: See Ars Technica, "Claude Code can now work for hours on complex programming tasks", 2025. Multiple developer communities reported Claude Code working continuously for hours on large-scale refactoring.
[^9]: Cognition Labs, "Introducing Devin", 2024-03-12. https://www.cognition.ai/blog/introducing-devin
[^10]: See multiple independent evaluations of Devin, 2024. Testers found Devin frequently failing on many simple tasks, with significant gaps between actual capabilities and the release demo.
[^11]: Bloomberg / The Information, "Cognition Labs valued at $2 billion", 2024. Cognition Labs reportedly reached approximately $2 billion valuation post-seed round.
[^12]: Google DeepMind, "Gemini 2.0: our new AI model for the agentic era", 2024-12-11. https://blog.google/technology/google-deepmind/google-gemini-ai-update-december-2024/
[^13]: Google DeepMind, "Project Mariner", 2024-12-11. https://deepmind.google/technologies/project-mariner/
[^14]: See Kinniment et al., "Evaluating Language-Model Agents on Realistic Autonomous Tasks", 2023. And subsequent studies on agent success rate decline in multi-step tasks.
[^15]: Anthropic, "Model Context Protocol (MCP)", 2024-11-25. https://www.anthropic.com/news/model-context-protocol
[^16]: OpenAI, "New tools for building agents", 2025-03-11. https://openai.com/index/new-tools-for-building-agents/; Google DeepMind, "Project Mariner", 2024-12-11. https://deepmind.google/technologies/project-mariner/
[^17]: Cursor, https://cursor.com/; see Wired, "The AI coding boom: how agents are reshaping software development", 2025.
[^18]: OpenAI, "Introducing Operator", 2025-01-23. https://openai.com/index/introducing-operator/; Google, "Project Mariner", 2024-12.
