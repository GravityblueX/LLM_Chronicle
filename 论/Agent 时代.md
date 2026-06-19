# Agent 时代

> 从 AutoGPT 的一百万 star 到 Claude Computer Use 的鼠标键盘，大模型用了两年时间证明一件事：让模型"会聊天"和让模型"会做事"之间，隔着的不是技术能力，而是工程耐心、信任边界和生态成熟度。

## 一、AutoGPT：Agent 概念的过度承诺

2023 年 3 月 30 日，一个名叫 AutoGPT 的开源项目在 GitHub 上线。它做的事情很简单：给 GPT-4 一套工具——网页浏览、文件读写、代码执行——然后让模型自己规划任务、自己执行、自己判断下一步。两周之内，它成为 GitHub 历史上增长最快的项目之一，star 数突破 10 万。[^1]

AutoGPT 的爆红不是因为它真的好用。事实上，绝大多数用户很快发现：它会陷入循环、丢失上下文、做出荒谬决策、花费大量 token 却一事无成。[^2] 但爆红本身说明了一个问题：**市场对"AI 不只是聊天，而是替你做事"这件事有巨大的、未经满足的渴望。**

AutoGPT 的技术路线——用自然语言循环驱动一个 LLM 反复调用工具——很快暴露了其天真之处。大模型不是万能规划器。它在单步推理上已经足够强，但在多步规划、状态管理、错误恢复和长程记忆上几乎没有可靠能力。把一个聊天模型直接包装成自主代理，就像把一个聪明的翻译官直接送去当将军——翻译官不是不聪明，是他的技能栈不是为这个任务设计的。

到 2023 年底，AutoGPT 基本沉寂。它的贡献不是技术实现，而是**概念验证**：Agent 这个词从学术概念进入了大众视野。此后所有 Agent 产品——无论是 Devin、Cursor、Claude Code 还是 OpenAI 的 Operator——都活在 AutoGPT 种下的期待和阴影里。

## 二、Function Calling：Agent 的基础设施在悄悄铺开

AutoGPT 退潮之后，真正让 Agent 从"demo"走向"工程"的是 Function Calling。

2023 年 6 月 13 日，OpenAI 在 GPT-3.5 和 GPT-4 的 API 中加入 Function Calling 功能。模型不再只是输出文本——它可以输出结构化的 JSON，精确地选择调用哪个函数、传入什么参数。[^3] 这看起来是一个小功能，但它是 Agent 能力的地基。

在 Function Calling 之前，让模型调用工具需要大量的 prompt engineering。你得在系统提示中写明所有工具的描述，然后期望模型以正确的格式输出调用意图——而格式错误、幻觉参数、误选工具是常态。Function Calling 把这件事从"提示技巧"变成了"协议"：模型在训练阶段就学会了如何正确地表达工具调用意图。

Anthropic 在 2023 年底的 Claude 3 系列中加入了类似的 Tool Use 能力，Google 在 Gemini 中也实现了 function calling。到 2024 年，几乎所有主要模型提供商都把"模型可以调用工具"作为基础能力。[^4]

Function Calling 的史学意义在于：它把 Agent 从一个"整体系统"拆解为"模型 + 协议 + 工具"的可组合架构。AutoGPT 试图让模型自己做所有事——规划、执行、判断。Function Calling 之后的 Agent 系统走的是另一条路：模型只负责决策和调度，执行交给专门的工具。这是一种工程上的退让，也是实用上的进步。

## 三、Claude Computer Use：Agent 进入操作系统

2024 年 10 月 22 日，Anthropic 发布了一项名为 Computer Use 的功能。Claude 不再只是调用 API 或工具——它可以像人一样操作电脑：看屏幕、移动鼠标、点击按钮、输入文字、读取屏幕上的内容。[^5]

这不是第一个"让 AI 操作电脑"的尝试。之前有各种 RPA（机器人流程自动化）工具，AutoGPT 也试过用浏览器。但 Computer Use 的不同在于：它是一个主流模型提供商把"GUI 交互"做成了正式 API 能力。模型接收屏幕截图作为输入，输出鼠标和键盘操作——这是一种完全不同于 API 调用的 Agent 范式。

Computer Use 的突破在于它绕过了"API 壁垒"。不是所有软件都有 API，不是所有 API 都有文档，不是所有文档都准确。但所有软件都有 GUI。一个能操作 GUI 的 Agent，理论上可以使用任何软件——包括那些没有 API、没有插件、没有开发者对接的老系统。这对企业自动化场景来说意义重大。

但 Computer Use 同时暴露了 Agent 最根本的脆弱性。GUI 操作是脆弱的：屏幕分辨率变化、UI 布局更新、弹窗遮挡、网络延迟，任何一个微小变量都可能导致 Agent 操作失败。[^6] 更深层的问题是：Agent 在操作 GUI 时缺乏"语义理解"——它看到的是像素，不是意图。它知道"这里有一个按钮"，但不总是知道"这个按钮在这个上下文中意味着什么"。

这是 Agent 时代的经典悖论：**越通用的接口越脆弱，越专用的接口越可靠**。API 调用精确但覆盖面窄，GUI 交互覆盖面广但可靠性低。真正的 Agent 产品必须在两者之间找到平衡。

## 四、MCP 与 Agent 生态：协议之争就是平台之争

2024 年 11 月 25 日，Anthropic 发布 Model Context Protocol（MCP），一个开放协议，用于标准化 LLM 与外部工具、数据源之间的连接。[^7] MCP 的设计目标是让任何工具——数据库、文件系统、API、内部系统——都能通过一个统一协议被 Agent 调用。

MCP 的出现标志着 Agent 生态竞争从"谁的模型更强"转向"谁的协议更通用"。这和早期互联网的浏览器之争、移动互联网的操作系统之争有相似结构：当底层能力趋同时，平台的胜负取决于生态的丰富度。

到 2025 年，MCP 已经获得了相当广泛的社区采纳——大量开发者为各种服务编写了 MCP Server。但 Agent 协议之争远未结束。OpenAI 发布了 Agents SDK 和 function calling 的增强版本，Google 推出了自己的 Agent 框架，微软把 Copilot 生态与 Microsoft Graph 深度整合。[^8]

这些协议之间的竞争，本质上是在争夺"Agent 的操作系统"这个位置。谁定义了 Agent 与工具之间的标准接口，谁就控制了 Agent 生态的入口。这和 Android 与 iOS 之争、HTTP 与 Gopher 之争的历史逻辑一样：**技术标准的胜利，最终取决于生态的采纳速度，而不是协议本身的技术优雅性。**

## 五、从工具到同事：Agent 时代的真正门槛

2025 年，Agent 产品开始呈现两个清晰的方向：

**编码 Agent** 是第一个成功的落地场景。Cursor、GitHub Copilot、Claude Code、Windsurf、Devin——这些产品证明了一件事：代码是 Agent 最自然的工作环境。代码可以被编译检查、被测试验证、被 diff 审阅。这意味着 Agent 的输出可以被自动验证，而不需要人类逐行审查。[^9] 当错误可以被自动检测时，Agent 的可靠性问题就从"绝对不能出错"变成了"错误率可接受"。

**通用 Agent** 则仍在早期。OpenAI 的 Operator（2025 年 1 月发布）让用户可以通过 Agent 浏览网页、完成在线任务。Google 的 Project Mariner 在 Chrome 中嵌入 Agent 能力。[^10] 但通用 Agent 面临的核心问题仍然没有解决：它在复杂、多步、需要判断力的任务上仍然不可靠。一个编码 Agent 写错代码，CI 会告诉你；一个通用 Agent 订错了机票，谁来告诉你？

Agent 时代的真正门槛不是"模型能不能做事"——2025 年的模型在很多任务上已经足够强。门槛是**可靠性**和**信任**。

人可以把一个任务交给 Agent，但人需要知道 Agent 在什么时候会失败。这需要：

- **可观察性**：Agent 的每一步决策和行动必须可追溯；
- **边界感知**：Agent 必须知道自己的能力边界，在不确定时请求人类介入；
- **错误恢复**：Agent 做错事后必须能回退，而不是在错误路径上越走越远；
- **权限控制**：Agent 操作的范围和后果必须有明确的边界。

这四个条件中的任何一个缺失，都会把 Agent 从"同事"降级为"玩具"。AutoGPT 的失败不在于它"不能"做事，而在于它在以上四点上全部缺失。2025 年最好的 Agent 产品——Cursor、Claude Code——之所以成功，恰恰是因为它们把 Agent 的行动范围限制在一个有编译器、测试框架和版本控制的安全沙箱里。

## 评曰

Agent 时代没有在 AutoGPT 的一百万 star 那天到来，也没有在 Claude Computer Use 的发布会那天到来。它正在到来——缓慢地、不均匀地、在特定场景里先站稳脚跟。

编码 Agent 是第一个证明"模型可以做事而不只是说话"的战场，因为代码是唯一一种错误可以被自动验证的语言。通用 Agent 的困难不在于模型不够聪明，而在于现实世界没有编译器和测试套件。一个 Agent 点错了按钮，在 GUI 里没有 `git revert`。

真正的 Agent 时代，不是模型无所不能的时代，而是**人类学会了和模型分担任务、分担风险**的时代。Function Calling 铺了协议，MCP 铺了生态，Computer Use 绕过了 API 壁垒——但最终决定 Agent 走多远的，不是模型能力的上限，而是工程系统能把它犯错的代价压到多低。

AutoGPT 证明了需求存在。Function Calling 证明了协议可行。MCP 证明了生态可建。下一步，需要证明的是：Agent 可以被信任。这不是一个模型问题，而是一个系统设计问题。

---

*本篇由终末地工业史官团队编纂：符玄（史论主笔）。*

---

[^1]: Significant Gravitas, "AutoGPT", GitHub repository, 2023-03-30. https://github.com/Significant-Gravitas/AutoGPT；参见 Reuters, "Auto-GPT and BabyAGI spark an 'autonomous AI agent' craze", 2023-04-12.
[^2]: 参见 Simon Willison, "Here's what I think about AutoGPT", 2023-04-13. https://simonwillison.net/2023/Apr/14/worst-that-can-happen/
[^3]: OpenAI, "Function calling and other API updates", 2023-06-13. https://openai.com/blog/function-calling-and-other-api-updates
[^4]: Anthropic, "Tool use (function calling)", Claude documentation, 2024. https://docs.anthropic.com/en/docs/build-with-claude/tool-use
[^5]: Anthropic, "Introducing computer use", 2024-10-22. https://www.anthropic.com/news/3-5-sonnet-computer-use
[^6]: 参见 The Verge, "Anthropic's AI can now control your computer", 2024-10-22. 报道中提及早期使用者反馈的可靠性问题。
[^7]: Anthropic, "Model Context Protocol (MCP)", 2024-11-25. https://www.anthropic.com/news/model-context-protocol
[^8]: OpenAI, "New tools for building agents", 2025-03-11. https://openai.com/index/new-tools-for-building-agents/；Google DeepMind, "Project Mariner", 2024-12-11. https://deepmind.google/technologies/project-mariner/
[^9]: Cursor, https://cursor.com/；参见 Wired, "The AI coding boom: how agents are reshaping software development", 2025.
[^10]: OpenAI, "Introducing Operator", 2025-01-23. https://openai.com/index/introducing-operator/；Google, "Project Mariner", 2024-12.
