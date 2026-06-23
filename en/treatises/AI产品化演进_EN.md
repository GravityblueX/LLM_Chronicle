# The Evolution of AI Products

> The journey of large language models from the laboratory to users' desktops did not happen overnight. From API calls to chat boxes, from chat boxes to visual canvases, from canvases to agents that autonomously execute tasks, and from agents to directly operating computer screens—each leap in product form has accompanied a fundamental re-answering of the question: in what way should AI exist within human workflows? This article records the factual contours, key turning points, and underlying logic of this evolutionary path.

---

## I. Overview

Before 2020, the dominant form of AI products was **embedded capability**: recommendation algorithms hid inside information feeds, voice assistants hid inside smart speakers, and image recognition hid inside photo search. What users perceived was "features got better," not "I'm using AI."

GPT-3 changed this paradigm. When a general-purpose language model could be called by any developer through an API, AI was no longer an appendage of some product—it became a "primitive" that could be assembled into any scenario. But APIs were oriented toward developers—ordinary users still could not touch large language models.

ChatGPT's explosion completed the first leap: wrapping API capabilities into a **chat box** so anyone could directly converse with a large language model. This step appeared simple, yet it reshaped the entire industry's user expectations and product logic.

The subsequent evolution of product forms was, in essence, different answers to the same question: "Is the chat box the optimal form for user-AI interaction?"

The answer is clearly "not entirely." Claude's Artifacts turned chat output into editable visual documents, GPTs and Agents turned chat into task delegation, and Computer Use attempted to break the chat box itself—having AI directly operate your screen, working like a remote colleague.

From API to chat box was a **leap in visibility**; from chat box to Artifacts was a **leap in interaction depth**; from Artifacts to Agent was a **leap in autonomy**; from Agent to Computer Use was a **leap in physical interface**. Each leap answered the same question: what should the collaborative relationship between humans and AI look like?

---

## II. The API Era (2020–2022): The Developer Gateway to LLMs

**On 2020-06-11**, OpenAI released GPT-3 with 175 billion parameters, trained on approximately 45 TB of text.[^1] This was the first truly "general-purpose language model"—it was not trained for any specific task, but rather acquired emergent abilities for handling diverse language tasks through pre-training on massive text corpora.

But what truly changed the industry was not GPT-3's model itself, but its **distribution method**. In June 2020, OpenAI simultaneously opened the GPT-3 API, offering three tiers (Davinci, Curie, Babbage, Ada) with token-based pricing.[^2] This meant any developer could call a 175-billion-parameter model with just a few lines of code, without needing to train, deploy, or maintain infrastructure themselves.

The product logic of the API model was **capability subscription**: developers treated GPT-3 as a black-box capability source, integrating it into their own applications. Early products like Jasper (AI writing), Copy.ai (marketing copy), and AI Dungeon (text adventure game) were all built on the GPT-3 API.

But the API model had three structural limitations:

1. **Developer barrier**: Ordinary users could not use it directly; they could only access it indirectly through third-party applications;
2. **Single interaction paradigm**: API calls followed an "input-output" model with no conversational context or multi-turn interaction;
3. **Homogeneous product forms**: Most GPT-3 applications were variants of "text generator"—writing assistants, code completion, customer service bots.

**On 2021-08-10**, OpenAI released Codex, fine-tuned on GPT-3 with code data, specifically for code generation.[^3] Codex's productized form was GitHub Copilot—a VS Code plugin that embedded itself into programmers' workflows through "auto-completion" (see *The Codex / GitHub Copilot Chronicle*). This was one of the most successful product cases of the API era, and its success lay precisely in the fact that it **did not require users to change their habits**: programmers were already writing code; Copilot simply made auto-completion smarter.

Copilot's success foreshadowed a pattern: **the smoothest path for AI productization is embedding AI capabilities into users' existing workflows, rather than asking users to adapt to new interaction paradigms.** This pattern was repeatedly validated—and repeatedly challenged—in subsequent evolution.

---

## III. The Chat Box Era (2022–2023): ChatGPT and the Mass-Market Leap

**On 2022-11-30**, OpenAI released ChatGPT, based on a fine-tuned GPT-3.5, available as a free web application.[^4] ChatGPT surpassed one million users within five days and one hundred million within two months—a growth rate unprecedented in internet product history.

ChatGPT's technical foundation was not much more powerful than GPT-3 (GPT-3.5 was an incremental improvement over GPT-3). Its true innovation was the **product form**: a simple chat box with user input on the left and model output on the right, supporting multi-turn dialogue, contextual memory, and instruction following.

The product logic of the chat box was **zero-barrier dialogue**:

- No API key needed, no coding required, no server deployment;
- The interaction paradigm was natural language—users already knew how to type, with no new operations to learn;
- Output was instantly visible—type, press Enter, and see results within seconds.

This seemingly simple design resolved the three structural limitations of the API era. For the first time, ordinary users could directly converse with a large language model without developers as intermediaries. Multi-turn dialogue transformed AI from "single input-output" to "continuous communication," opening up collaborative space for follow-ups, corrections, and iteration.

But the chat box also introduced new limitations:

1. **Single output format**: Could only output text, unable to generate charts, code editors, or interactive components;
2. **Linear interaction**: All conversations existed on a single timeline, unable to process multiple tasks in parallel;
3. **Inability to execute actions**: The model could only "speak," not "do"—it could tell you how to write code, but could not run code for you.

**On 2023-03-14**, OpenAI released GPT-4, supporting multimodal input (text + images) with significantly enhanced capabilities.[^5] On the same day, Anthropic released the first Claude, emphasizing safety alignment (see *The Claude Lineage*). **On 2023-03-22**, GitHub released Copilot X, integrating GPT-4, evolving from auto-completion to conversational programming (see *The Codex / GitHub Copilot Chronicle*).

The core tension of this phase was: **the chat box is the most successful AI product form in history, but it is not the ultimate form of AI products.** The chat box made AI visible, usable, and accessible, but it confined AI's output to "text." When users began using AI to write code, perform data analysis, and generate documents, "text output" proved insufficient—code needs to run, data needs visualization, and documents need editing.

The chat box is the entry point, not the destination.

---

## IV. Interaction Evolution (2024): Artifacts and the Visual Canvas

**On 2024-06-20**, Anthropic released Claude 3.5 Sonnet alongside the **Artifacts** feature.[^6] Artifacts was designed so that when Claude generates code, documents, charts, web pages, and other content, the output no longer crowded into the chat stream but appeared in a separate canvas to the right of the chat box, where users could directly preview, edit, and iterate.

Artifacts solved the chat box's **output format problem**:

- Code could be run and previewed in real time;
- Documents could be independently edited, no longer buried under chat history;
- Charts and visualizations could be rendered directly, without users needing to copy them to other tools.

From a product form perspective, Artifacts meant Claude evolved from a "chatbot" to a "collaborative workspace." User-AI interaction was no longer a linear chat log, but a dual-panel structure of "dialogue area + workspace"—discuss on the left, produce on the right.

**On 2024-10-22**, Anthropic released an upgraded Claude 3.5 Sonnet, introducing the **Computer Use** capability for the first time, enabling Claude to operate a virtual computer—moving the mouse, clicking buttons, typing text, and taking screenshots to assess state.[^7] During the same period, OpenAI introduced similar capabilities, allowing ChatGPT to perform data analysis and file processing through code execution.

But the most important productization trend of 2024 was not any specific feature—it was that **AI products began shifting from "outputting text" to "outputting results."** Users were no longer satisfied with AI telling them "how to do it"; they began expecting AI to directly "get it done."

This raised the next question: if AI can directly "do things," why does the user need to stand by and watch?

---

## V. The Agent Turn (2025): From Answering to Executing

The concept of agents emerged as early as 2023. **On 2023-03-30**, AutoGPT was released, demonstrating the possibility of having GPT-4 autonomously plan, execute, and reflect.[^8] But agents in 2023 were mostly proof-of-concept—high cost, low reliability, prone to loops (see *The AI Agent Ecosystem*).

The agent wave of 2025 differs from 2023. The distinction lies in the maturation of three infrastructure components:

1. **Standardized tool calling**: OpenAI's Function Calling (2023-06) and Anthropic's Tool Use (2024) transformed tool calling from "prompt hacks" into API primitives;
2. **Sufficiently long context windows**: 128K or longer context windows enabled agents to process all information for complex tasks within a single session;
3. **Sufficiently strong reasoning capabilities**: The emergence of reasoning models like o1 and DeepSeek-R1 brought qualitative leaps in planning and multi-step decision-making.

**In the first half of 2025**, multiple agent products emerged simultaneously:

- **OpenAI's Operator**: Could autonomously browse the web, fill out forms, and complete online tasks;
- **Anthropic's Claude Code**: Autonomously wrote, debugged, and ran code in the terminal;
- **Google's Project Mariner**: Operated web pages through a Chrome extension;
- **Microsoft's Copilot Studio**: Allowed enterprises to build custom agents.

The product logic of agentification was **task delegation**: users no longer needed to guide AI step by step; instead, they provided a goal, and AI autonomously decomposed the task, called tools, handled exceptions, and returned results. This pushed human-computer interaction from "conversational collaboration" toward "task outsourcing."

But agentification also introduced new product challenges:

- **Controllability**: The higher the agent's autonomy, the harder it is for users to predict what it will do;
- **Explainability**: When an agent makes an incorrect decision, users need to know why;
- **Safety boundaries**: When agents operate real systems, a single error may cause irreversible consequences.

**On 2025-05-22**, Anthropic released Claude Opus 4 and Sonnet 4, with Claude Code officially becoming the flagship product.[^9] This marked the evolution of AI coding assistants from "辅助工具" (auxiliary tools) to "自主开发者" (autonomous developers)—Claude Code could read entire codebases, understand project structures, and independently complete the full workflow from requirements to deployment (see *The Claude Lineage*).

---

## VI. Computer Use: Crossing the Digital Interface

**On 2024-10-22**, Anthropic first introduced Computer Use capabilities in the upgraded Claude 3.5 Sonnet—enabling AI to directly operate the graphical interface of a virtual computer.[^7] This was not about calling software through APIs, but about using the mouse and keyboard like a human, reading screenshots to judge state.

The product logic of Computer Use was **universal interface adaptation**:

- No need for every piece of software to provide an API; AI could operate any graphical interface like a human;
- No need to write specialized toolchains for each task; AI could directly use existing software;
- No need to change users' software environments; AI adapts to users, not the other way around.

**In 2025**, Computer Use capabilities expanded rapidly:

- Anthropic's Claude could operate complete desktop environments, including browsers, terminals, and file managers;
- OpenAI's ChatGPT could analyze data and generate reports through code execution;
- Google's Gemini could operate Android phone interfaces.

The significance of Computer Use is this: it broke through the "digital interface" barrier in AI productization. Before this, AI needed APIs, Function Calling, or specialized tool interfaces to execute actions—each requiring developers to predefine them. Computer Use removed this prerequisite: AI could operate any software with a human-machine interface, even if that software had not been designed with an AI interface.

But Computer Use also faces serious challenges:

- **Latency**: The screenshot-analyze-click loop is an order of magnitude slower than API calls;
- **Reliability**: Graphical interface recognition still has error rates; a single misclick may trigger unintended operations;
- **Security**: AI operating a real desktop means it can access sensitive information and perform sensitive operations.

Computer Use is still in its early stages. Its long-term significance may not lie in "having AI operate computers" per se, but in **driving a paradigm shift in software design**: when AI becomes a regular user of software, should software interfaces be specifically optimized for AI? The answer to this question will determine the form of the next generation of software.

---

## VII. Product Form Evolution Matrix

| Phase | Period | Representative Products | Core Interaction | User Role | Product Logic |
|------|------|----------|----------|----------|----------|
| API Era | 2020–2022 | GPT-3 API, Codex | Code invocation | Developer | Capability subscription |
| Chat Box Era | 2022–2023 | ChatGPT, Claude | Natural language dialogue | End user | Zero-barrier dialogue |
| Visual Canvas | 2024 | Claude Artifacts | Dialogue + live preview | Creator | Collaborative workspace |
| Agent Turn | 2025 | Claude Code, Operator | Task delegation | Delegator | Task outsourcing |
| Computer Use | 2024–2025 | Claude Computer Use | Interface operation | Observer | Universal interface adaptation |

---

## VIII. Trend Analysis

- **From "users adapting to AI" to "AI adapting to users"**: The API era required users to write code; the chat box era required users to write prompts; the agent era required users to define goals; in the Computer Use era, AI directly uses users' existing tools. Each leap lowered the adaptation cost for users.

- **Interaction paradigms are moving from singular to hybrid**: Early products were pure chat or pure API; today's products are hybrids of chat + canvas + tool calling + code execution. Future AI products are unlikely to have only one interaction mode.

- **"Visibility" and "autonomy" are two orthogonal axes of evolution**: The chat box made AI visible; agents made AI autonomous. The two can be combined—featuring both a visible dialogue interface and autonomous background execution.

- **The core tension of productization is "controllability vs. autonomy"**: Users want AI to complete tasks autonomously, but also want to know what AI is doing at any moment and be able to intervene at any time. This tension has no perfect solution, only tradeoffs tailored to different scenarios.

- **Computer Use is the long-term direction; in the short term, it remains experimental**: Having AI operate computers like a human is technically feasible, but it still has clear shortcomings in latency, reliability, and security. It is more likely a "last mile" solution—a fallback when APIs and tool calling are insufficient.

---

## Commentary

The history of AI productization is, in essence, a history of "interaction interface" evolution. APIs turned large language models into developer tools, the chat box turned them into mass-market products, Artifacts turned chat into a workspace, agents turned dialogue into task delegation, and Computer Use turned the digital world into AI's operating space. Each leap did not replace the previous form, but tore open new possibilities at the boundaries of the prior one.

Yet the endpoint of this evolutionary line is not "letting AI do everything." Every historical paradigm shift in interaction—from command line to graphical interface, from desktop to mobile—has proven one thing: the best tool is not the one with the highest autonomy, but the one that makes users feel "I am in control." The real challenge of AI productization is not making AI more powerful, but ensuring that as AI becomes more powerful, users still feel like drivers rather than passengers.

The chroniclers note this as a reminder: technological evolution is often described as "from simple to complex," but the true direction of product evolution is "from complex to natural." The chat box succeeded not because it was advanced, but because it was natural. The winner of the next generation of AI product forms will most likely not be the one with the strongest capabilities, but the one that feels most natural to users.

---

*Compiled by the Endfield Industrial Chronicle team: Fu Xuan (theoretical framework).*

---

[^1]: Brown et al., "Language Models are Few-Shot Learners", arXiv:2005.14165, 2020. https://arxiv.org/abs/2005.14165
[^2]: OpenAI, "GPT-3 API", OpenAI Blog, 2020-06-11. https://openai.com/blog/gpt-3-api/
[^3]: Chen et al., "Evaluating Large Language Models Trained on Code", arXiv:2107.03374, 2021-07. https://arxiv.org/abs/2107.03374
[^4]: OpenAI, "ChatGPT: Optimizing Language Models for Dialogue", OpenAI Blog, 2022-11-30. https://openai.com/blog/chatgpt/
[^5]: OpenAI, "GPT-4", OpenAI Blog, 2023-03-14. https://openai.com/research/gpt-4
[^6]: Anthropic, "Claude 3.5 Sonnet", Anthropic Blog, 2024-06-20. https://www.anthropic.com/news/claude-3-5-sonnet
[^7]: Anthropic, "Introducing computer use", Anthropic Blog, 2024-10-22. https://www.anthropic.com/news/3-5-models-and-computer-use
[^8]: Toran Bruce Richards, "Auto-GPT", GitHub, 2023-03-30. https://github.com/Significant-Gravitas/Auto-GPT
[^9]: Anthropic, "Claude Opus 4 & Sonnet 4", Anthropic Blog, 2025-05-22. https://www.anthropic.com/news/claude-4
