# The AI Agent Ecosystem

> From ChatGPT's question-and-answer paradigm to agents that autonomously plan, call tools, and operate screens—the purpose of large language models underwent a paradigm reversal in just two years. What follows is the factual record of this transformation: which events catalyzed the agent turn, which protocols attempted to make agents interoperable, and how far the promise of "letting AI do things for you" has actually come.

---

## I. Overview

After ChatGPT's release, the core interaction paradigm for large language models was **dialogue**: the user inputs a block of text, and the model returns a block of text. Even as context windows stretched to 128K tokens and beyond, the fundamental dynamic remained "you say something, it responds."

But as early as early 2023, some developers were already asking a different question: **what if the model could decide what to do next, rather than just answer questions?** This inquiry gave birth to AI Agents—a system form that endows models with memory, tools, goals, and the ability to reflect.

From AutoGPT's viral explosion in March 2023 to the MCP versus A2A protocol competition in 2025, the agent ecosystem evolved through three phases: the proof-of-concept period (the fervor and disillusionment of the first half of 2023), the infrastructure formation period (APIs and protocols from the second half of 2023 through 2024), and the productization and interoperability period (2025 onward). The core question of each phase differed, but the tension running through them all was singular: **the greater the autonomy, the harder it is to ensure reliability**.

---

## II. Proof of Concept: AutoGPT and Agent Fever (2023 Q1–Q2)

**On 2023-03-23**, OpenAI released ChatGPT Plugins, allowing ChatGPT to call third-party APIs—the first time a large language model was granted the ability to "act outward." Plugins declared available tools based on the OpenAPI specification, with the model autonomously deciding when and how to invoke them.[^1]

One week after Plugins launched, on **2023-03-30**, developer Toran Bruce Richards released **AutoGPT** on GitHub. Its design was remarkably simple: give GPT-4 a goal and let it generate sub-tasks, execute actions, observe results, and plan the next step—an infinite loop of "Plan → Act → Observe → Reflect." AutoGPT could access the web, read and write files, and execute code, theoretically capable of completing end-to-end tasks from market research to code development.[^2]

AutoGPT set growth records on GitHub: surpassing 100,000 stars within one week, becoming one of the fastest-growing open-source projects at the time.[^3] Shortly thereafter, on **2023-04-03**, VC and AI researcher Yohei Nakajima released **BabyAGI**—a more lightweight task-driven agent that used OpenAI to generate task lists, Pinecone to store memory, and LangChain to chain execution.[^4]

But fervor quickly collided with reality. AutoGPT and BabyAGI exposed several fatal problems in actual use:

- **Loop traps**: The model repeatedly executed ineffective actions in the Plan → Act loop, unable to converge on the goal;
- **Cost overruns**: Each loop cycle consumed GPT-4 tokens; complex tasks easily cost tens of dollars;
- **Insufficient reliability**: The model frequently made erroneous decisions during autonomous operation, lacking intermediate steps for human oversight;
- **Fragile tooling**: Once the external API call chain broke, the entire loop would freeze or hallucinate.

**By mid-2023**, AutoGPT's GitHub activity declined significantly—star counts continued growing, but actual usage rates did not recover to early levels.[^5] The industry gradually formed a consensus: **fully autonomous agents were not yet viable in 2023, but the agent理念—the idea that models should not just answer questions but execute tasks—would not disappear.** The question was not "whether to build agents" but "how to make agents reliable."

---

## III. Infrastructure Takes Shape: From Function Calling to Assistants API (2023 Q2–Q4)

The failure of agent proof-of-concepts pivoted the industry toward infrastructure building.

**On 2023-06-13**, OpenAI released **Function Calling**, supporting gpt-3.5-turbo-0613 and gpt-4-0613.[^6] This was an underappreciated inflection point in agent ecosystem history. Before this, frameworks like LangChain simulated tool calling through prompt engineering—having the model output text in a specific format, then parsing it programmatically; if the format was wrong, the entire chain broke. Function Calling elevated tool calling to a first-class citizen: the model outputted function names and parameters in structured JSON, with the OpenAI API layer guaranteeing format correctness.

This meant the agent's "arms" (tool calling) had a reliable engineering foundation for the first time.

**On 2023-11-06**, OpenAI released the **Assistants API** and **GPTs** at DevDay.[^7] The Assistants API provided three categories of built-in capabilities:

1. **Code Interpreter**: The model could execute Python code and process files in a sandbox;
2. **Retrieval**: Built-in vector search, supporting uploaded documents for model queries;
3. **Function Calling**: Inherited from the June foundation tool calling capabilities.

GPTs were agent products oriented toward non-technical users: users configured a custom ChatGPT through dialogue, setting system instructions, knowledge bases, and available tools—all without writing code.[^7]

GPTs sparked a wave of "AI App Store" discussions—if agents could be published and distributed like apps, could they become the next platform? But this vision was not realized: the GPTs ecosystem lacked effective distribution and monetization mechanisms, developers found that making a useful GPT was not easy, and users struggled to find GPTs suited to their needs. Agent productization required more engineering.

---

## IV. Multimodal Agents and the "Embodied" Frontier (2024)

2024 was the pivotal year for agent capabilities moving from "pure text" to "multimodal."

**In 2024-03**, Anthropic formally introduced **tool use** (function calling) in the Claude 3 series, creating a competitive dynamic with OpenAI's Function Calling.[^8] Claude's tool calling design similarly structured output in JSON format for function names and parameters, but differentiated itself on system prompt flexibility.

**On 2024-03-12**, Cognition Labs released **Devin**, claiming it to be "the first AI software engineer."[^9] Devin could work in a complete development environment: terminal, editor, browser. It did not merely complete code—it understood requirements, planned implementation paths, wrote code, ran tests, and debugged errors. This marked agents moving from "calling APIs" to "operating entire computing environments."

**On 2024-10-22**, Anthropic released **Claude Computer Use**, based on claude-3.5-sonnet-20241022.[^10] This was the first time a large language model gained the ability to "see screens, move the mouse, and type on the keyboard"—the model received screenshots as visual input and outputted mouse coordinates and keyboard operations. Computer Use freed agents from API-call constraints, theoretically enabling them to operate any software with a graphical interface.

But Computer Use simultaneously exposed new problems:

- **Speed**: Each operation required screenshot → analyze → output coordinates → execute, with latency measured in seconds;
- **Accuracy**: The model's recognition of screen elements was imperfect; subtle UI differences could cause erroneous operations;
- **Security**: An agent that can operate a desktop has an enormous scope of power, requiring rigorous access control.

Computer Use at the end of 2024 was still closer to a "technical preview" than "production-ready"—but it opened a door: an agent's "body" can be the entire computer.

---

## V. The Protocol Wars: MCP, A2A, and Interoperability (2025)

As more and more agent frameworks and products emerged, a new question surfaced: **how do agents interoperate with each other and with tools?**

**On 2024-11-25**, Anthropic open-sourced the **Model Context Protocol (MCP)**.[^11] MCP defined a standardized protocol allowing AI models to connect to external data sources and tools in a unified manner. It was not just another function calling specification—MCP's design emphasis lay in:

- **Server-client architecture**: Tool providers implement MCP Servers; AI applications implement MCP Clients; the two communicate via a standard protocol;
- **Resource discovery**: Clients can dynamically discover tools, resources, and prompt templates offered by Servers;
- **Stateful sessions**: Support for context maintenance across multi-turn interactions.

MCP was rapidly adopted by the developer community after release. By the first half of 2025, mainstream AI tools including Cursor, Claude Desktop, Windsurf, and Zed all supported MCP. Anthropic positioned MCP as "the USB-C of AI"—a universal interface standard.[^11]

**On 2025-01-23**, OpenAI released **Operator**, an agent capable of operating a browser to complete real-world tasks (ordering food, shopping, filling forms).[^12] Operator was based on a Computer-Using Agent (CUA) model, interacting with users through the Chrome browser interface.

**On 2025-03-11**, OpenAI open-sourced the **Agents SDK**, providing a Python framework for building agent applications with production-grade features including handoff (multi-agent collaboration), guardrails (safety rails), and tracing (observability).[^13]

**On 2025-04-09**, Google DeepMind released the **Agent2Agent (A2A) protocol**.[^14] A2A and MCP were complementary but focused on different layers: MCP addressed how agents call tools, while A2A addressed how agents discover and collaborate with other agents. A2A was based on HTTP and JSON-RPC, defining core concepts including Agent Cards (capability declarations), Tasks (task delegation), and Artifacts (deliverables), with the goal of enabling agents built by different vendors and frameworks to interoperate.

The MCP versus A2A competitive landscape gradually clarified by mid-2025: **MCP became the de facto standard** (due to Anthropic's first-mover advantage and earlier community adoption), while A2A positioned itself as a higher-level inter-agent collaboration protocol. The two were not zero-sum—an MCP Server could itself be an A2A Agent, and vice versa—but the protocol rivalry reflected a deeper structural question: **who holds the dominant position in the agent ecosystem?**

---

## VI. Timeline of Key Events

| Date | Actor | Event | Phase Significance |
|------|--------|------|----------|
| 2023-03-23 | OpenAI | ChatGPT Plugins released | LLMs first gained structured ability to call external APIs |
| 2023-03-30 | Significant Gravitas | AutoGPT released; 100K GitHub stars in one week | Agent concept ignites, but exposes reliability problems |
| 2023-04-03 | Yohei Nakajima | BabyAGI released | A more lightweight task-driven agent paradigm |
| 2023-06-13 | OpenAI | Function Calling released | Tool calling elevated from prompt hack to first-class citizen |
| 2023-11-06 | OpenAI | DevDay: Assistants API + GPTs released | Agent productization begins; GPTs attempt an "Agent App Store" |
| 2024-03 | Anthropic | Claude 3 introduces tool use | Tool calling enters duopoly competition |
| 2024-03-12 | Cognition Labs | Devin released | Agents move from "calling APIs" to "operating dev environments" |
| 2024-10-22 | Anthropic | Claude Computer Use released | Agents gain ability to "see screens, operate mouse and keyboard" |
| 2024-11-25 | Anthropic | MCP (Model Context Protocol) open-sourced | The beginning of standardized agent-tool connectivity |
| 2025-01-23 | OpenAI | Operator released | Browser-operating agent productized |
| 2025-03-11 | OpenAI | Agents SDK open-sourced | Production-grade agent framework (handoff / guardrail / tracing) |
| 2025-04-09 | Google DeepMind | Agent2Agent (A2A) protocol released | Standardized attempt at agent-to-agent interoperability |

---

## VII. Trend Analysis

- **From "full autonomy" to "supervised autonomy"**: AutoGPT proved that purely autonomous agents were not viable in 2023, and the industry subsequently pivoted to human-in-the-loop design—Operator requires user confirmation for payments, Claude Code requires user approval for file modifications. Fully autonomous agents remain the goal, but the current engineering consensus is "keep humans at critical decision points."
- **Tool calling is infrastructure, not a feature**: The significance of Function Calling was not "letting models call APIs" but making tool calling a reliable, composable, auditable infrastructure layer. MCP then pushed this infrastructure layer from "controlled by one company" to "open protocol."
- **The protocol layer determines the ecosystem landscape**: The MCP versus A2A competition is essentially Anthropic and Google vying for the definition of agent interoperability standards. Historically, the first-mover advantage of open protocols often determines outcomes more than technical superiority (cf. HTTP vs. Gopher). MCP's community adoption rate significantly led in the first half of 2025.
- **The agent "body" is expanding**: From pure text dialogue (2023), to code execution (Assistants API), to browser operation (Operator), to desktop operation (Computer Use)—the agent's action space has continually expanded. Each expansion brings new capabilities and new security concerns.
- **Reliability remains the bottleneck**: Agents perform impressively in demos, but in production environments, the error rate of each tool call step amplifies rapidly through chain multiplication. A 95% reliable five-step agent has an end-to-end success rate of only 77%. This problem remained fundamentally unsolved as of mid-2025.

---

## Commentary

The story of AI agents is fundamentally a tug-of-war between autonomy and reliability. AutoGPT's fervor demonstrated just how intense people's desire for "AI doing things on my behalf" truly was; its subsequent cooling demonstrated that engineering autonomous planning and action for language models is far more difficult than imagined. The evolutionary path from 2023 to 2025—from proof-of-concept to infrastructure to protocol standardization—followed a classic engineering trajectory: first prove the concept is viable, then make critical components reliable, and finally connect the ecosystem through standard protocols. MCP's victory was not because it was technically superior, but because it gave developers a stable anchor point at the right time. The true test for the agent ecosystem is not the protocol wars of 2025, but what comes next: when agents' action space expands from screens to the physical world, and reliability requirements shift from "right most of the time" to "cannot be wrong when it matters"—that is when the agent story truly begins.

---

*Compiled by the Endfield Industrial Chronicle team: Yvonne (architecture audit).*

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
