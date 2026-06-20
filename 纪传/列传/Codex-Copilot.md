# 《Codex / GitHub Copilot 列传》

> Codex 和 GitHub Copilot 不是第一个能写代码的模型，但它们是第一个让程序员觉得"AI 能帮我干活"的模型。从自动补全到对话编程，从 VS Code 插件到自主编码 Agent，这对父子兵开创了整个 AI 编程助手赛道。

---

## 一、技术背景

2020 年 GPT-3 发布后，一个有趣的现象引起了研究者的注意：**GPT-3 虽然是语言模型，但它能写代码**。给它一个函数签名和注释，它能补全出功能正确的代码；给它一段 buggy 代码，它能指出错误并给出修复方案。

这个现象的根源在于 GPT-3 的训练数据：互联网上的代码仓库、技术文档、Stack Overflow 问答都包含大量代码，GPT-3 在预训练过程中"看"了这些数据，自然就学会了代码的语法和逻辑。

但 GPT-3 写代码的能力是"副产品"，不是"主业"。一个自然的问题随之浮现：**如果专门用代码数据微调 GPT-3，效果会不会好得多？** 答案是 Codex。

---

## 二、核心事件

### 2.1 Codex（2021-08）：代码微调的 GPT-3

2021 年 8 月 10 日，OpenAI 发布 Codex，一个专门用于代码生成的模型。[^1]

Codex 的技术路线很直接：**在 GPT-3（12B 参数版本）的基础上，用来自 GitHub 的代码数据进行微调**。训练数据包括公开 GitHub 仓库中的 Python 代码，总计约 159GB。

OpenAI 为 Codex 设计了一个专门的评测基准——**HumanEval**，包含 164 个手写的 Python 编程问题，每个问题都有函数签名、文档字符串和单元测试。模型需要根据描述生成函数体，然后用单元测试验证正确性。[^1]

Codex 在 HumanEval 上的成绩是 **28.8%**（pass@1）——意味着模型生成的代码在第一次尝试时，有 28.8% 的概率能通过所有测试。这个成绩在当时已经很惊人：GPT-3 在同一个评测上只有 0%（基本无法生成可运行的代码）。

HumanEval 后来成为代码生成领域的标准评测基准，几乎所有代码模型都会在这个基准上报告成绩。

### 2.2 GitHub Copilot（2022-06 正式发布）：AI 编程助手的产品化

2021 年 6 月 29 日，GitHub 和 OpenAI 联合发布 GitHub Copilot 技术预览版，定价 $10/月或 $100/年，以 VS Code 插件形式提供。[^2]

Copilot 的产品形态是**代码自动补全**：程序员在编辑器里写代码，Copilot 在旁边实时预测下一行或下几行代码，按 Tab 键接受。这个交互模式非常自然——就像一个更智能的自动补全，但它补全的不是一个变量名，而是一整段逻辑。

2022 年 6 月 21 日，GitHub Copilot 正式发布（GA），从技术预览转为正式产品。[^3] 到 2023 年初，GitHub 宣布 Copilot 已经被超过 100 万开发者使用，在支持的语言中（Python、JavaScript、TypeScript 等），平均有 40% 的代码是由 Copilot 生成的。[^4]

### 2.3 Copilot X（2023-03）：从补全到对话

2023 年 3 月 22 日，GitHub 发布 Copilot X，标志着 AI 编程助手从"自动补全"进化到"对话编程"。[^5]

Copilot X 的核心改进是接入了 GPT-4，并增加了三个新功能：

- **Copilot Chat**：在 IDE 内嵌一个聊天窗口，程序员可以用自然语言问问题（"这段代码有什么 bug？""帮我重构这个函数"）。
- **Copilot for Pull Requests**：自动生成 PR 描述、代码审查意见、甚至自动修复简单的 review comment。
- **Copilot for Docs**：基于文档库的问答系统，能回答"这个 API 怎么用"之类的问题。

这些功能标志着 AI 编程助手的角色转变：**从"预测下一行代码"到"理解程序员意图并协助完成任务"**。自动补全是被动的——它只能在你写代码的时候预测；对话是主动的——你可以直接告诉 AI 你想做什么。

### 2.4 竞争者涌现

Copilot 的成功验证了 AI 编程助手的市场需求，大量竞争者随之涌现。

**Cursor**（2023 年发布）是其中最成功的挑战者。它不是一个 VS Code 插件，而是一个完整的 AI-native IDE。Cursor 把 AI 深度整合到编辑器的每一个环节：代码补全、聊天、代码库问答、多文件编辑。[^6]

**Windsurf**（原 Codeium，2024 年更名）走的是另一条路：强调上下文理解能力，能基于整个代码库的上下文进行补全和问答。[^7]

**Claude Code**（2025 年发布）则代表了最新的趋势：**自主编码 Agent**。Claude Code 不再只是补全代码或回答问题——它能理解整个任务、制定计划、修改多个文件、运行测试、修复 bug。程序员的角色从"写代码"变成了"审查代码"。[^8]

---

## 三、影响与后继

### 3.1 程序员工作方式的改变

Copilot 最直接的影响是改变了程序员的工作方式。2023 年之后，"写代码"这个动作本身变得不那么重要——程序员更多的时间花在"设计架构""审查 AI 生成的代码""调试 AI 生成的 bug"上。

这个转变引发了一些争议：**AI 编程助手会不会让程序员变懒？** 一种观点认为，Copilot 会让更多人学会编程（降低了入门门槛）；另一种观点认为，它会让程序员丧失深入理解代码的能力（因为总是依赖 AI 补全）。

截至目前，两种观点都有一些证据支持，但没有定论。

### 3.2 代码生成 benchmark 的兴起

HumanEval 的成功催生了大量新的代码评测基准：

- **MBPP**（2021-09）：Google 发布，包含 974 个 Python 编程问题。[^9]
- **CodeContests**（2022-02）：DeepMind 发布，包含 10,000+ 竞赛编程题。[^10]
- **SWE-bench**（2023-10）：Princeton 发布，基于真实的 GitHub issue 评测模型修复 bug 的能力。[^11]

这些基准推动了代码生成技术的快速迭代——从 Codex 的 28.8% 到 GPT-4 的 67%（HumanEval），再到 Claude 3.5 Sonnet 的 92%，只用了两年时间。

### 3.3 从补全到 Agent 的演化

Copilot → Copilot X → Claude Code 的演化路径，代表了 AI 编程助手的三次范式转变：

1. **自动补全**（Copilot）：预测下一行代码，程序员主导。
2. **对话编程**（Copilot X）：程序员和 AI 对话，AI 帮忙写代码。
3. **自主编码**（Claude Code）：AI 理解任务并自主完成，程序员审查结果。

目前行业正处在第二阶段向第三阶段过渡的过程中。2025 年，"AI 编程助手"已经不太准确了——更准确的说法是"AI 编程 Agent"。

---

## 评曰

Codex 和 GitHub Copilot 的贡献，是把 AI 写代码从技术演示变成了生产力工具。

在 Codex 之前，"AI 写代码"是研究者在论文里展示的能力；在 Copilot 之后，"AI 帮我写代码"是每个程序员每天都在做的事情。这个转变的冲击力不亚于 ChatGPT 对自然语言处理的冲击——它改变了程序员定义自己工作的方式。

从技术演化看，Codex → Copilot → Copilot X 的路线转变（代码微调 → 产品化 → 多功能 Agent）是一个典型的"能力产品化"案例。OpenAI 和 GitHub 没有停留在技术论文上，而是在发现市场需求后迅速推出产品。这种务实态度值得尊敬。

Codex 最深远的影响或许是：它证明了"AI 编程"这个需求是真实存在的，而且市场巨大。在 Codex 之前，大多数人觉得"AI 写代码"只是技术噱头；在 Copilot 之后，所有人都意识到这是一个可以改变软件开发流程的工具。这个认知转变为整个赛道的爆发奠定了基础。

---

*本篇由终末地工业史官团队编纂：赫默（列传主笔）。*

---


（相关条目：《AI Agent 生态》。）

[^1]: Chen et al., "Evaluating Large Language Models Trained on Code", arXiv:2107.03374, 2021-07-07. https://arxiv.org/abs/2107.03374
[^2]: GitHub Blog, "GitHub Copilot · Your AI pair programmer", 2021-06-29. https://github.blog/2021-06-29-introducing-github-copilot-ai-pair-programmer/
[^3]: GitHub Blog, "GitHub Copilot is generally available to all developers", 2022-06-21. https://github.blog/2022-06-21-github-copilot-is-generally-available-to-all-developers/
[^4]: GitHub Blog, "GitHub Copilot: The AI-powered developer tool", 2023. https://github.blog/2023-06-20-github-copilot-the-ai-powered-developer-tool/
[^5]: GitHub Blog, "GitHub Copilot X: The AI-powered developer experience", 2023-03-22. https://github.blog/2023-03-22-github-copilot-x-the-ai-powered-developer-experience/
[^6]: Cursor 官方文档. https://docs.cursor.com/
[^7]: Windsurf (Codeium) 官方文档. https://codeium.com/
[^8]: Anthropic, "Claude Code", 2025. https://docs.anthropic.com/en/docs/claude-code
[^9]: Austin et al., "Program Synthesis with Large Language Models", arXiv:2108.07732, 2021-08-17. https://arxiv.org/abs/2108.07732
[^10]: Li et al., "Competition-Level Code Generation with AlphaCode", arXiv:2203.07814, 2022-03-15. https://arxiv.org/abs/2203.07814
[^11]: Jimenez et al., "SWE-bench: Can Language Models Resolve Real-World GitHub Issues?", arXiv:2310.06770, 2023-10-10. https://arxiv.org/abs/2310.06770