# The AI Agent Ecosystem

> From ChatGPT's question-and-answer paradigm to agents that autonomously plan, invoke tools, and operate screens — the utility of large language models underwent a paradigm reversal within two years. What follows is the factual record of this transformation: which events catalyzed the shift toward agents, which protocols sought to enable agent interoperability, and how far "having AI do things on your behalf" has actually progressed.

---

## I. Overview

After ChatGPT's release, the core interaction paradigm of large language models was **dialogue**: the user inputs a block of text, and the model returns a block of text. Even as context windows expanded to 128K tokens and beyond, the fundamental dynamic remained "you say something, it replies."

But as early as the first months of 2023, a subset of developers began asking a different question: **What if the model could decide what to do next, rather than merely answer questions?** This inquiry gave rise to AI agents — a system architecture that endows models with memory, tools, objectives, and the capacity for self-reflection.

From AutoGPT's viral explosion in March 2023 to the competition between MCP and A2A protocols in 2025, the agent ecosystem evolved through three phases: a proof-of-concept period (the fervor and disillusionment of the first half of 2023), an infrastructure-formation period (APIs and protocols from the second half of 2023 through 2024), and a productization-and-interoperability period (2025 to the present). The central question differed in each phase, but the underlying tension remained constant: **the greater the autonomy, the harder it is to guarantee reliability**.

---

## II. Proof of concept: AutoGPT and the agent frenzy (Q1–Q2 2023)

**2023-03-23**, OpenAI released ChatGPT Plugins, enabling ChatGPT to call third-party APIs — the first time a large language model was granted the ability to "act outward." Plugins declared available tools based on the OpenAPI specification, and ChatGPT autonomously decided when and how to invoke them.[^1]

One week after Plugins launched, on **2023-03-30**, developer Toran Bruce Richards released **AutoGPT** on GitHub. Its design was remarkably straightforward: give GPT-4 a goal and let it generate sub-tasks, execute actions, observe results, and plan the next step — an infinite loop of "Plan → Act → Observe → Reflect." AutoGPT could access the web, read and write files, and execute code; in theory, it could accomplish end-to-end tasks ranging from market research to software development.[^2]

AutoGPT set growth records on GitHub: it surpassed 100,000 stars within a week, becoming one of the fastest-growing open-source projects at the time.[^3] Shortly afterward, on **2023-04-03**, venture capitalist and AI researcher Yohei Nakajima released **BabyAGI** — a lighter-weight, task-driven agent that used OpenAI to generate task lists, Pinecone for memory storage, and LangChain to chain execution steps.[^4]

But enthusiasm quickly collided with reality. AutoGPT and BabyAGI exposed several fatal problems in practical use:

- **Loop traps**: the model repeatedly executed ineffective actions within the Plan → Act loop, failing to converge on the goal;
- **Cost spirals**: each loop iteration consumed GPT-4 tokens, and complex tasks routinely cost tens of dollars;
- **Insufficient reliability**: the model frequently made incorrect decisions during autonomous operation, lacking intermediate checkpoints for human oversight;
- **Fragile tooling**: when the invocation chain of external APIs broke, the entire loop would stall or produce hallucinations.

By **mid-2023**, AutoGPT's GitHub activity had declined sharply; star counts continued to grow, but actual usage did not recover to early levels.[^5] The industry gradually reached a consensus: **fully autonomous agents were not yet viable in 2023, but the agent concept — having models not merely answer questions but execute tasks — would not disappear.** The question was not "whether to build agents" but "how to make agents reliable."

---

## III. Infrastructure takes shape: From Function Calling to Assistants API (Q2–Q4 2023)

The failure of agent proof-of-concept projects redirected the industry toward infrastructure building.

**2023-06-13**, OpenAI released the **Function Calling** capability, supporting gpt-3.5-turbo-0613 and gpt-4-0613.[^6] This was an underappreciated turning point in agent ecosystem history. Prior to Function Calling, frameworks like LangChain simulated tool invocation through prompt engineering — instructing the model to output text in a specific format, then parsing it programmatically; any format deviation would break the entire chain. Function Calling elevated tool invocation to a first-class capability: the model outputted function names and arguments in structured JSON, with the OpenAI API layer guaranteeing format correctness.

This meant that the agent's "hands" (tool invocation) had a reliable engineering foundation for the first time.

**2023-11-06**, OpenAI unveiled the **Assistants API** and **GPTs** at DevDay.[^7] The Assistants API provided three categories of built-in capabilities:

1. **Code Interpreter**: the model could execute Python code and process files in a sandbox;
2. **Retrieval**: built-in vector search supporting uploaded documents for model queries;
3. **Function Calling**: inheriting the foundational tool-calling capability from June.

GPTs were agent products aimed at non-technical users: through conversational configuration, users could create a custom ChatGPT instance — setting system instructions, knowledge bases, and available tools — without writing any code.[^7]

The release of GPTs sparked a wave of "AI App Store" discussions — if agents could be published and distributed like apps, could they become the next platform? But this vision was never realized: the GPTs ecosystem lacked effective distribution and monetization mechanisms, developers found it difficult to build genuinely useful GPTs, and users struggled to find ones that suited them. Agent productization required more engineering.

---

## IV. Multimodal agents and the "embodied" frontier (2024)

2024 was the pivotal year in which agent capabilities expanded from "text-only" to "multimodal."

**2024-03**, Anthropic formally introduced **tool use** (function calling) in the Claude 3 series, establishing a competitive dynamic with OpenAI's Function Calling. Claude's tool-calling design likewise structured outputs as JSON-formatted function names and arguments, but differentiated itself through greater system prompt flexibility.[^8]

**2024-03-12**, Cognition Labs released **Devin**, claiming it to be "the first AI software engineer."[^9] Devin could operate within a complete development environment: terminal, editor, and browser. It did not merely complete code — it understood requirements, planned implementation paths, wrote code, ran tests, and debugged errors. This marked the agent's transition from "calling APIs" to "operating entire computing environments."

**2024-10-22**, Anthropic released **Claude Computer Use**, based on claude-3.5-sonnet-20241022.[^10] This was the first time a large language model acquired the ability to "see screens, move cursors, and type on keyboards" — the model received screenshots as visual input and outputted mouse coordinates and keyboard operations. Computer Use freed agents from dependence on API calls, enabling them in theory to operate any software with a graphical interface.

But Computer Use simultaneously exposed new problems:

- **Speed**: every operation required a screenshot → analysis → coordinate output → execution cycle, with latencies measured in seconds;
- **Precision**: the model's recognition of onscreen elements was imperfect, and minor UI discrepancies could lead to erroneous operations;
- **Security**: an agent capable of operating a desktop possessed an enormous scope of authority, requiring rigorous permission controls.

By the end of 2024, Computer Use remained closer to a "technical preview" than "production-ready" — but it opened a door: an agent's "body" could be the entire computer.

---

## V. The protocol wars: MCP, A2A, and interoperability (2025)

As an increasing number of agent frameworks and products emerged, a new question surfaced: **how should agents interoperate with each other and with tools?**

**2024-11-25**, Anthropic open-sourced the **Model Context Protocol (MCP)**.[^11] MCP defined a standardized protocol enabling AI models to connect to external data sources and tools in a uniform manner. It was not merely another function-calling specification — MCP's design priorities included:

- **Server-client architecture**: tool providers implement MCP Servers, AI applications implement MCP Clients, and the two communicate via a standard protocol;
- **Resource discovery**: Clients can dynamically discover the tools, resources, and prompt templates offered by Servers;
- **Stateful sessions**: support for context maintenance across multiple turns of interaction.

MCP rapidly gained adoption in the developer community after release. By the first half of 2025, mainstream AI tools including Cursor, Claude Desktop, Windsurf, and Zed all supported MCP. Anthropic positioned MCP as "the USB-C of AI" — a universal interface standard.[^11]

**2025-01-23**, OpenAI released **Operator**, an agent capable of operating a browser to complete real-world tasks (ordering food, shopping, filling out forms).[^12] Operator was built on the Computer-Using Agent (CUA) model and interacted with users through the Chrome browser interface.

**2025-03-11**, OpenAI open-sourced the **Agents SDK**, providing a Python framework for building agent applications with production-grade features including handoff (multi-agent collaboration), guardrails, and tracing (observability).[^13]

**2025-04-09**, Google DeepMind released the **Agent2Agent (A2A) protocol**.[^14] A2A complemented MCP but had a different focus: MCP addressed how agents call tools, while A2A addressed how agents discover and collaborate with other agents. A2A was based on HTTP and JSON-RPC and defined core concepts including Agent Cards (capability declarations), Tasks (task delegation), and Artifacts (deliverables), with the goal of enabling interoperability among agents built by different vendors and frameworks.

By mid-2025, the competitive landscape between MCP and A2A had become clearer: **MCP emerged as the de facto standard** (owing to Anthropic's first-mover advantage and community adoption), while A2A positioned itself as a higher-level inter-agent collaboration protocol. The two were not zero-sum — an MCP Server could itself be an A2A Agent, and vice versa — but the protocol rivalry reflected a deeper structural question: **who holds dominion over the agent ecosystem?**

---

## VI. Timeline of key events

| Date | Participant | Event | Significance |
|------|-----------|-------|--------------|
| 2023-03-23 | OpenAI | ChatGPT Plugins released | First structured capability for LLMs to call external APIs |
| 2023-03-30 | Significant Gravitas | AutoGPT released; 100K GitHub stars in one week | Agent concept ignites, but reliability problems exposed |
| 2023-04-03 | Yohei Nakajima | BabyAGI released | Lighter-weight task-driven agent paradigm |
| 2023-06-13 | OpenAI | Function Calling released | Tool invocation elevated from prompt hack to first-class capability |
| 2023-11-06 | OpenAI | DevDay: Assistants API + GPTs released | Agent productization begins; GPTs attempt an "Agent App Store" |
| 2024-03 | Anthropic | Claude 3 introduces tool use | Tool invocation enters duopolistic competition |
| 2024-03-12 | Cognition Labs | Devin released | Agents move from "calling APIs" to "operating development environments" |
| 2024-10-22 | Anthropic | Claude Computer Use released | Agents gain the ability to view screens and operate mouse/keyboard |
| 2024-11-25 | Anthropic | MCP (Model Context Protocol) open-sourced | The beginning of standardized agent-tool connectivity |
| 2025-01-23 | OpenAI | Operator released | Browser-operating agent productized |
| 2025-03-11 | OpenAI | Agents SDK open-sourced | Production-grade agent framework (handoff / guardrail / tracing) |
| 2025-04-09 | Google DeepMind | Agent2Agent (A2A) protocol released | Standardization attempt for inter-agent interoperability |

---

## VII. Trend analysis

- **From "fully autonomous" to "supervised autonomy"**: AutoGPT demonstrated that purely autonomous agents were infeasible in 2023; the industry subsequently shifted toward human-in-the-loop design — Operator requires user confirmation for payments, Claude Code requires user approval for file modifications. Fully autonomous agents remain the objective, but the current engineering consensus is "place humans at critical decision points."
- **Tool invocation is infrastructure, not a feature**: The significance of Function Calling lay not in "enabling models to call APIs" but in making tool invocation reliable, composable, and auditable infrastructure. MCP then pushed this infrastructure layer from "controlled by a single company" toward "open protocol."
- **Protocols determine ecosystem dynamics**: The MCP vs. A2A competition is fundamentally a contest between Anthropic and Google over the definition of agent interoperability standards. Historically, the first-mover advantage of open protocols often determines outcomes more than technical superiority (cf. HTTP vs. Gopher). MCP's community adoption rate significantly led in the first half of 2025.
- **The agent's "body" is expanding**: From pure-text dialogue (2023), to code execution (Assistants API), to browser operation (Operator), to desktop operation (Computer Use) — the agent's action space has continuously expanded. Each expansion brings new capabilities and new security concerns.
- **Reliability remains the bottleneck**: Agents perform impressively in demonstrations, but in production environments, the error rate of each tool invocation step compounds rapidly through chain multiplication. An agent with 95% per-step reliability over five steps yields an end-to-end success rate of only 77%. This problem remained fundamentally unsolved as of mid-2025.

---

## Commentary

The story of AI agents is, at its core, a tug-of-war between autonomy and reliability. AutoGPT's frenzy demonstrated how intense the public desire for "AI doing things on my behalf" truly was; its subsequent cooling proved that engineering a language model to plan and act autonomously is far harder than imagined. The evolutionary path from 2023 to 2025 — from proof of concept to infrastructure to protocol standardization — followed the classic engineering trajectory: first prove a concept works, then make critical components reliable, and finally connect the ecosystem through standard protocols. MCP's victory was not due to technical superiority, but because it gave developers a stable anchor at the right moment. The true test of the agent ecosystem lies not in the protocol wars of 2025, but in the next step: when agents' action spaces expand from screens to the physical world, and reliability requirements shift from "correct most of the time" to "cannot fail at critical moments" — that is when the agent story truly begins.

---

*Compiled by the Endfield Industrial Chronicle team: Yvonne (Architecture Audit).*

---

(The evolution of AI coding assistants from Codex to Copilot is covered in *The Codex-Copilot Chronicle*.)

[^1]: OpenAI, "ChatGPT plugins", 2023-03-23. https://openai.com/index/chatgpt-plugins/
[^2]: Significant Gravitas, "Auto-GPT", GitHub repository, 2023-03-30. https://github.com/Significant-Gravitas/AutoGPT
[^3]: The Verge, "AutoGPT is the future of AI assistants — if it can stop making mistakes", 2023-04-19. https://www.theverge.com/2024/4/19/24134730/autogpt-ai-agent-open-source
[^4]: Yohei Nakajima, "BabyAGI", GitHub repository, 2023-04-03. https://github.com/yoheinakajima/babyagi
[^5]: The Verge, "AutoGPT and the rise of AI agents", 2024. https://www.theverge.com/2024/4/19/24134730/autogpt-ai-agent-open-source
[^6]: OpenAI, "Function calling and other API updates", 2023-06-13. https://openai.com/index/function-calling-and-other-api-updates/
[^7]: OpenAI, "New models and developer products announced at DevDay", 2023-11-06. https://openai.com/index/new-models-and-developer-products-announced-at-devday/
[^8]: Anthropic, "Introducing the next generation of Claude", 2024-03-04. https://www.anthropic.com/news/claude-3-family
[^9]: Cognition Labs, "Introducing Devin", 2024-03-12. https://www.cognition.ai/blog/introducing-devin
[^10]: Anthropic, "Introducing computer use, a new Claude 3.5 Sonnet, and Claude 3.5 Haiku", 2024-10-22. https://www.anthropic.com/news/3-5-models-and-computer-use
[^11]: Anthropic, "Model Context Protocol", 2024-11-25. https://www.anthropic.com/news/model-context-protocol
[^12]: OpenAI, "Introducing Operator", 2025-01-23. https://openai.com/index/introducing-operator/
[^13]: OpenAI, "New tools for building agents", 2025-03-11. https://openai.com/index/new-tools-for-building-agents/
[^14]: Google DeepMind, "Announcing the Agent2Agent protocol", 2025-04-09. https://developers.googleblog.com/en/a2a-a-new-era-of-agent-interoperability/
