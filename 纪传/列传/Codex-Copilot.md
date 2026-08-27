# 《Codex / GitHub Copilot 列传》

> Codex 和 GitHub Copilot 不是第一个会写代码的模型与产品，但它们把“AI 写代码”从研究演示变成了开发者每天使用的工作方式。2021 年的 Codex 解决“能不能生成代码”，Copilot 把它翻译成 Tab 键可接受的补全；Copilot X 把补全变成对话；2025 年之后，Codex 与 Copilot 又分别把软件开发推向云端执行、异步委派和多 Agent 调度。到 2026 年，“AI 编程助手”已经不足以概括这个品类——真正竞争的是谁能承担更大比例的软件工程流程。

---

## 一、从 GPT-3 的副能力到专门代码模型

GPT-3 发布后，人们很快发现一个副作用：一个主要在自然语言上训练的模型，同样能够补全程序。代码本来就是互联网文本的一部分，函数名、注释、README、Stack Overflow 问答和公开仓库共同提供了大量“自然语言—程序”对应关系。

但“偶尔能写代码”和“稳定完成编程任务”不是一回事。OpenAI 随后把这项副能力独立出来，专门用代码数据继续训练 GPT-3 系模型，得到 **Codex**。

**2021-08-10** — OpenAI 对外发布 Codex。配套论文《Evaluating Large Language Models Trained on Code》系统研究了代码生成，并提出后来广为使用的 **HumanEval**：164 道带函数签名、自然语言说明和单元测试的 Python 题，以 pass@k 衡量生成程序通过测试的概率。[^1]

论文中的最大 Codex 模型为 12B 参数，在 HumanEval 上取得 28.8% pass@1。今天看这个数字并不起眼，但它在当时证明了一个关键事实：**代码生成可以成为一个独立、可测量、可产品化的大模型能力。**

HumanEval 此后几乎成为代码模型的“入学考试”。更重要的是，它把代码模型评测从“看起来像代码”推进到“能不能通过测试”。软件工程后来所有关于执行验证、测试反馈和 Agent loop 的发展，都可以在这里看到早期影子。

---

## 二、GitHub Copilot：把模型能力塞进编辑器

### 2.1 2021—2022：Tab 键就是产品创新

**2021-06-29** — GitHub 发布 Copilot 技术预览。[^2]

**2022-06-21** — GitHub Copilot 正式 GA。[^3]

Copilot 最重要的创新并不是模型结构，而是交互方式。程序员不需要打开一个聊天网页，也不需要编写复杂 prompt，只需要继续敲代码：模型在光标后面预测下一段，满意就按 Tab 接受。

这看起来极其朴素，却完成了第一次关键的产品翻译：

> **代码生成模型 → 编辑器里的连续补全。**

它把 AI 从“偶尔请教的工具”变成一个常驻在开发环境里的协作者。GitHub 后来披露，Copilot 的采用速度和代码接受量迅速增长；无论具体比例如何变化，一个新的工作习惯已经形成：程序员开始默认编辑器会主动提供一段可能正确的实现。[^4]

### 2.2 2023：Copilot X，把补全变成对话

**2023-03-22** — GitHub 公布 Copilot X 愿景。[^5]

Copilot Chat、PR 辅助、文档问答等功能，把 AI 的位置从“光标后面的预测器”挪到了“理解任务与代码库的对话者”。这又完成了一次翻译：

> **下一段代码是什么？ → 我现在想完成什么？**

从这一步开始，AI 编程工具的核心资源不再只是当前文件附近几十行代码，而是整个代码库、终端输出、Issue、PR、文档和开发者意图。

---

## 三、2025：Agent 不是一个词，而是两种工作方式

2025 年是 AI 编程史上容易被一句“进入 Agent 时代”糊过去的一年。实际上，这一年形成了两种不同的 Agent 形态。

### 3.1 IDE 内 Agent：人在旁边，模型连续行动

**2025-02-06** — GitHub 为 VS Code 中的 Copilot 引入 **agent mode**，同时宣布 Copilot Edits GA。[^6]

这种 Agent 仍然发生在开发者眼前：模型读取工作区，决定需要修改哪些文件，执行终端命令，根据报错继续修正。相比 Chat，它不再等待人类把每一步拆开。

到 **2025-04-04**，GitHub 开始向更广泛的 VS Code 用户推出 agent mode，并加入 MCP 支持，使 Agent 可以接入外部工具和上下文。[^7]

这类模式可以概括为：

> **人和 Agent 共用一个驾驶舱，人盯着它连续开。**

### 3.2 异步 Coding Agent：把 Issue 交出去，回来审 PR

真正更剧烈的变化发生在 5 月。

**2025-05-16** — OpenAI 发布新的 **Codex 云端软件工程 Agent**研究预览。它由 codex-1 驱动，每个任务在独立云端沙箱中运行，可以阅读与修改仓库、执行测试、lint 和类型检查，并在完成后给出可审核的 diff 或 PR。更重要的是，多个任务可以并行委派。[^8][^9]

这里“Codex”这个名字发生了一次很有历史意味的复归：2021 年 Codex 是“专门生成代码的模型”；2025 年 Codex 已经变成“承担软件工程任务的 Agent 系统”。同一个名字，从 model 变成了 worker。

**2025-05-19** — GitHub 随即推出 **Copilot coding agent** 公测。用户可以像给开发者分配 Issue 一样把任务指派给 Copilot；它在 GitHub Actions 提供的独立环境中工作，自己探索仓库、修改代码、跑测试，然后开 draft PR 请求人工 review。[^10]

**2025-09-25** — Copilot coding agent 正式 GA，覆盖付费 Copilot 用户。[^11]

这类异步 Agent 与 IDE agent mode 的区别非常重要：

| 模式 | 人在哪里 | Agent 在哪里 | 主要交互 |
|------|----------|--------------|----------|
| 补全 | 光标前 | 编辑器 | Tab 接受 |
| Chat / Edits | IDE 内 | IDE 内 | 对话、指定修改 |
| Agent mode | IDE 内持续监督 | 本地/IDE 工具环境 | 模型自己连续操作 |
| Coding agent | 人可以离开 | 独立云环境 | Issue → PR → Review |

从这里开始，软件工程 Agent 不再只是“更聪明的 IDE 功能”，而开始获得自己的执行环境、任务队列和生命周期。

---

## 四、Codex CLI：终端重新成为 Agent 的自然界面

在云端 Codex 发布前一个月，OpenAI 已经推出开源的 **Codex CLI**。它可以直接读取、修改和运行本地代码，把模型置于 shell、文件系统和版本控制之间。[^12]

终端之所以重新变得重要，是因为 Agent 需要的并不是更漂亮的聊天界面，而是**可组合的执行能力**：grep、git、测试命令、构建工具、包管理器、脚本以及后来越来越普遍的 MCP 工具。

CLI 与云端 Agent 于是形成互补：

- 本地 CLI：低延迟、贴近开发者、适合交互式修改；
- 云端 Agent：隔离环境、可异步运行、适合并行委派；
- IDE：承担阅读、人工修改和即时监督；
- GitHub：承担 Issue、PR、Review 和团队协作。

到 2025 年 10 月 Codex GA 时，OpenAI 已经把 CLI、IDE 与云端连接成同一套 Codex 工作流，并加入 SDK、Slack 集成和团队管理能力。[^13]

这意味着“AI 编程产品”的边界开始消失。它不再是一款插件，而是一套横跨编辑器、终端、云容器、代码托管平台和团队协作工具的执行层。

---

## 五、2026：从一个 Agent 到 Agent 的“调度台”

如果说 2025 年的关键词是“把任务交给 Agent”，那么 2026 年的问题变成了：**当你同时交给很多 Agent 时，谁来管理它们？**

### 5.1 GitHub：Agent 成为仓库一级对象

**2026-01-26** — GitHub 在仓库中加入新的 **Agents** 标签页，用统一界面管理 Copilot coding agent 会话、查看任务和跳转关联 PR。[^14]

这件事看似只是 UI 变化，实际上意味着 Agent 获得了和 Issues、Pull requests 相似的“仓库原生对象”地位。开发者不再只打开聊天框找 AI，而开始查看：

- 哪些 Agent 正在工作；
- 每个 Agent 在处理哪个任务；
- 哪个会话对应哪个 PR；
- 哪些工作需要人类接手。

软件开发界面开始从“文件与分支管理器”向“人类 + Agent 工作队列管理器”变化。

### 5.2 Codex App：多 Agent 工作台

**2026-02-02** — OpenAI 发布 Codex macOS 应用，并于 **2026-03-04** 推出 Windows 版。官方直接把它称为管理多个 Agent 的 command center：不同 Agent 可以在隔离 worktree 中并行执行长任务，用户在一个界面里监督进度、审查 diff，并通过 Skills 与 Automations 固化团队工作方式。[^15]

这已经不是“pair programming”的自然延伸，而更像一次角色变化：

> 2021 年，人负责写，AI 补；  
> 2023 年，人负责描述，AI 改；  
> 2025 年，人负责分派，AI 执行；  
> 2026 年，人越来越负责**设计任务、环境、约束和反馈回路**，同时监督多个 Agent。

OpenAI 后来把这种模式概括为“humans steer, agents execute”，并公开描述过由 Codex 生成全部代码、而人类主要建设环境与反馈机制的内部工程实验。[^16]

这里真正变化的不是代码生成率，而是**软件工程里的控制平面**。

---

## 六、Benchmark 也从“写函数”变成“修仓库”

工具形态变化的同时，代码模型评测也发生了对应迁移。

- **HumanEval**：给函数说明，生成函数体；[^1]
- **MBPP**：短程序合成；[^17]
- **CodeContests / AlphaCode**：竞赛级算法题；[^18]
- **SWE-bench**：给真实 GitHub Issue，让模型修改真实仓库并通过测试。[^19]

这条变化与产品史几乎完全同构：

> **函数 → 文件 → 多文件 → 仓库 → 完整工程任务。**

因此，单纯报告 HumanEval 已经越来越难说明一个 Coding Agent 是否有用。一个真正的 Agent 还要处理环境安装、代码搜索、失败恢复、测试反馈、版本控制、任务边界以及长时间执行中的状态保持。

模型智能依然重要，但它只是整个系统的一部分。

---

## 七、从 Copilot 到“软件工程操作系统”

回头看，Codex / Copilot 的演化可以划成五个阶段：

| 阶段 | 时间 | 代表形态 | 人机关系 |
|------|------|----------|----------|
| 代码生成 | 2021 | Codex | 人提题，模型写函数 |
| 自动补全 | 2021—2022 | Copilot | 人写主线，AI 补下一段 |
| 对话与编辑 | 2023—2024 | Copilot X / Chat / Edits | 人描述修改，AI执行局部变更 |
| Agent 执行 | 2025 | agent mode / Codex / Copilot coding agent | 人给任务，AI连续行动 |
| 多 Agent 编排 | 2026 | Codex App / GitHub Agents | 人设计任务与约束，监督多个执行体 |

这条路线的终点恐怕不是“一个特别会写代码的聊天机器人”，而是某种**软件工程操作系统**：模型负责推理，Agent loop 负责行动，沙箱负责安全，Git 负责状态与回滚，CI 负责验证，Issue / PR 负责人与 Agent 之间的协议，而 IDE、CLI 和 Web 只是不同入口。

这也是为什么 2026 年再讨论“哪个模型 HumanEval 更高”已经显得有些旧。真正的竞争单位正在变成：

**模型 + 上下文管理 + 工具 + 沙箱 + Git + 测试 + Agent 调度 + 人类审查。**

---

## 评曰

Codex 最早解决的是“机器能不能写程序”，Copilot 最早解决的是“怎样让程序员愿意每天使用机器写的程序”。这两件事合起来，才真正打开了 AI 编程时代。

最初，AI 的位置非常低：它住在光标后面，等着人按 Tab。后来它搬进聊天框，可以听懂任务；再后来它获得终端和文件系统，可以自己跑测试；接着又获得云端沙箱、Issue 和 PR，可以在人离开以后继续工作。到 2026 年，开发者甚至开始需要一个专门界面管理同时工作的多个 Agent。

所以这段历史真正值得记录的，不是“代码有百分之多少由 AI 生成”。代码比例是一个很容易变化、也很容易误导的数字。更深的变化是**行动权逐级下放**：从建议一行代码，到修改文件，到执行命令，到完成 Issue，再到并行承担多个工程任务。

每一次下放都要求新增一层约束：补全需要接受键，编辑需要 diff，执行需要沙箱，异步任务需要 PR，长程 Agent 需要测试、日志、权限和回滚，多 Agent 又需要调度与隔离。于是 AI 编程的历史并不是“模型越来越聪明”这么简单，而是软件工程逐步发明出一套让不完全可靠的智能体可以安全参与生产的制度。

Codex 与 Copilot 最重要的遗产，可能正是这套制度的开端。

---

*本篇由终末地工业史官团队编纂：赫默（列传主笔）。*  
*2026-08 补订：GPT-5.6 Sol（OpenAI）。*

---

（相关条目：《AI Agent 生态》《AI 编程助手》。）

[^1]: Chen et al., "Evaluating Large Language Models Trained on Code", arXiv:2107.03374, 2021. https://arxiv.org/abs/2107.03374
[^2]: GitHub Blog, "Introducing GitHub Copilot: your AI pair programmer", 2021-06-29. https://github.blog/2021-06-29-introducing-github-copilot-ai-pair-programmer/
[^3]: GitHub Blog, "GitHub Copilot is generally available to all developers", 2022-06-21. https://github.blog/2022-06-21-github-copilot-is-generally-available-to-all-developers/
[^4]: GitHub Blog, "GitHub Copilot: The AI-powered developer tool", 2023-06-20. https://github.blog/2023-06-20-github-copilot-the-ai-powered-developer-tool/
[^5]: GitHub Blog, "GitHub Copilot X: The AI-powered developer experience", 2023-03-22. https://github.blog/2023-03-22-github-copilot-x-the-ai-powered-developer-experience/
[^6]: GitHub Blog, "GitHub Copilot: The agent awakens", 2025-02-06. https://github.blog/news-insights/product-news/github-copilot-the-agent-awakens/
[^7]: GitHub Blog, "Vibe coding with GitHub Copilot: Agent mode and MCP support rolling out to all VS Code users", 2025-04-04. https://github.blog/news-insights/product-news/github-copilot-agent-mode-activated/
[^8]: OpenAI, "Introducing Codex", 2025-05-16. https://openai.com/index/introducing-codex/
[^9]: OpenAI, "Addendum to o3 and o4-mini system card: Codex", 2025-05-16. https://openai.com/index/o3-o4-mini-codex-system-card-addendum/
[^10]: GitHub Changelog, "GitHub Copilot coding agent in public preview", 2025-05-19. https://github.blog/changelog/2025-05-19-github-copilot-coding-agent-in-public-preview/
[^11]: GitHub Changelog, "Copilot coding agent is now generally available", 2025-09-25. https://github.blog/changelog/2025-09-25-copilot-coding-agent-is-now-generally-available/
[^12]: OpenAI Help Center, "OpenAI Codex CLI – Getting Started"; OpenAI Codex repository. https://help.openai.com/en/articles/11096431 ; https://github.com/openai/codex
[^13]: OpenAI, "Codex is now generally available", 2025-10-06. https://openai.com/index/codex-now-generally-available/
[^14]: GitHub Changelog, "Introducing the Agents tab in your repository", 2026-01-26. https://github.blog/changelog/2026-01-26-introducing-the-agents-tab-in-your-repository/
[^15]: OpenAI, "Introducing the Codex app", 2026-02-02; updated 2026-03-04. https://openai.com/index/introducing-the-codex-app/
[^16]: OpenAI, "Harness engineering: leveraging Codex in an agent-first world", 2026. https://openai.com/index/harness-engineering/
[^17]: Austin et al., "Program Synthesis with Large Language Models", arXiv:2108.07732, 2021. https://arxiv.org/abs/2108.07732
[^18]: Li et al., "Competition-Level Code Generation with AlphaCode", Science / arXiv:2203.07814, 2022. https://arxiv.org/abs/2203.07814
[^19]: Jimenez et al., "SWE-bench: Can Language Models Resolve Real-World GitHub Issues?", arXiv:2310.06770, 2023. https://arxiv.org/abs/2310.06770