# 《AI 编程助手生态志》

> AI 编程是大模型最早完成“从能力到工作流”转化的领域。它从 Codex 生成一个函数，发展到 Copilot Tab 补全；再到 Cursor / Copilot Chat 多文件编辑；2025 年以后，coding agent 开始接收 Issue、进入隔离环境、运行测试、提交 Pull Request；2026 年又出现 Agents tab、Codex 多 Agent command center、worktree 隔离与事件触发 automations。编程助手的历史因此不是“代码生成越来越准”，而是**软件工程把越来越大的执行权限交给模型，同时用 Git、CI、sandbox 和 review 把风险圈起来。**

---

## 一、为什么编程最先成为成熟 Agent 场景

代码有一个其他知识工作很少具备的优势：结果可以被机器部分验证。

程序员拥有：

- 编译器；
- type checker；
- lint；
- unit / integration tests；
- Git diff；
- branch protection；
- CI；
- Pull Request review。

因此，模型写错代码后，环境会产生结构化反馈。

这让编程天然适合“模型行动 → 环境验证 → 修正 → 再行动”的 Agent loop。

AI 编程的成熟速度，不只是因为训练数据里代码多，也因为**软件工程早就有一套管理不完全可靠修改的制度。**

---

## 二、2021—2022：Codex / Copilot 把生成能力塞进 Tab 键

Codex 证明专门针对代码训练的语言模型可以显著提高 HumanEval 等程序合成任务表现。[^1]

**2021-06-29**，GitHub Copilot 技术预览把这个能力产品化：编辑器灰字预测，用户按 Tab 接受。[^2]

**2022-06-21**，Copilot 正式 GA。[^3]

这个产品形态非常克制：

- AI 不掌握文件系统；
- 不自己运行命令；
- 不创建 PR；
- 人始终是执行者。

所以早期 Copilot 的风险和收益都局限在“建议代码”。

这是 **assistive AI**，还不是 Agent。

---

## 三、2023—2024：从补全到编辑整个代码库

Copilot X、Cursor、Windsurf 等产品把交互从“下一行是什么”改成：

> “我想让这个仓库发生什么变化？”

模型开始拥有：

- repository indexing；
- multi-file edits；
- chat；
- terminal context；
- codebase search。

真正变化的是**工作单位变大**：

一行 → 一个函数 → 一个文件 → 多个文件。

Claude 3.5 Sonnet 在 2024 年成为 coding 场景的重要底层模型；Artifacts、Computer Use 等能力进一步让模型从代码文本走向可执行环境。[^4][^5]

但这一阶段大多数产品仍要求人在 IDE 里实时监督。

---

## 四、2025：Agent mode——AI 开始自己决定下一步编辑

**2025-02-06**，GitHub 发布 Copilot agent mode：Agent 可以跨多个文件实施修改，并在过程中决定下一步动作。[^6]

这和普通 chat / edit 的差异在于：

- 人给目标；
- Agent 自己搜索相关文件；
- 进行一系列修改；
- 根据工具结果继续。

编辑器里的 Agent 由“生成器”变成了**局部执行者**。

同年 Claude Code、Codex CLI 等终端 Agent 进一步让 shell、Git 和测试成为一等工具。

终端之所以适合 Agent，是因为它比 GUI 更结构化，又比单一 API 更通用。

---

## 五、2025：Coding Agent 真正跨过一道线——从同步协作到异步委派

**2025-05-19**，GitHub Copilot coding agent 进入 public preview。用户可以像分配给开发者一样把 GitHub Issue assign 给 Copilot。Agent 在基于 GitHub Actions 的独立云开发环境里工作，运行 tests / linter，最终提交 Pull Request 请求人类 review。[^7][^8]

这一步的历史意义大于“agent mode 又增强了”：

> **用户不再需要在线陪着 AI。**

任务被委派到后台环境。

从这一刻起，coding agent 的基本单位从“会话”变成“任务 / PR”。

同时 GitHub 保留了软件工程的控制结构：

- branch protections；
- PR review；
- workflow approval；
- session logs；
- Actions 环境隔离。[^8]

这几乎是 Agent 安全最早的大规模生产范式之一：**不是阻止 Agent 修改，而是让修改进入已有的变更管理制度。**

---

## 六、Claude Code：终端成为长期 Agent 工作台

Claude Code 从 2025 年开始持续强化：

- 读取 / 修改整个仓库；
- shell / Git / test；
- extended thinking；
- memory；
- checkpoints；
- subagents；
- 更长 context / compaction。

随着 Claude 4.5—5 系列出现，coding 逐渐变成 Anthropic 训练 Agent 能力的主要压力测试场。[^9][^10]

原因仍然是反馈闭环：

> 写错 → 测试失败 → 读错误 → 再改。

因此 Claude Code 不只是“一个很成功的编程产品”，它也是 Claude 长程 Agent 能力进入 Cowork / professional work 的工程母体。

> 📖 详见《Claude 世家》。

---

## 七、Codex：从 coding agent 到多 Agent command center

OpenAI 在 **2025** 把 Codex 重新定义为云端 coding agent，可在独立环境中处理任务。[^11]

**2026-02-02**，Codex App 进一步改造人机界面：它不再只围绕一个聊天线程，而是被定义为**command center for agents**。[^12]

关键机制包括：

- 多 Agent 并行；
- 每个 Agent 独立 thread；
- worktree 隔离，同一 repo 多任务不互相踩文件；
- diff review；
- Skills；
- Automations；
- CLI / IDE / cloud session 延续。

这里最值得记录的是 worktree。

多 Agent 最大的工程问题之一是并发修改冲突。Git worktree 把一个老软件工程工具变成了 Agent isolation primitive：每个 Agent 有自己的工作副本，再由人 / Git 合并。

Agent 时代没有抛弃 Git；相反，它开始更依赖 Git。

---

## 八、2026：GitHub Agents tab——仓库里出现“Agent 任务中心”

**2026-01-26**，GitHub 把 coding agent sessions 集中到 repository **Agents tab**。[^13]

它的界面逻辑已经非常接近 issue / PR 管理：

- 查看全部 Agent session；
- 创建任务；
- 切换任务；
- 跳到对应 PR；
- 从 CLI resume。

这意味着 coding agent 不再只是 IDE feature，而正式成为**repository object**。

代码库里传统对象是：

- commit；
- branch；
- issue；
- pull request。

2026 年开始多了：

- **agent session**。

这是一种非常具体的软件工程制度变化。

---

## 九、2026：第三方 Agent 进入 GitHub，同一个 Issue 不再只属于 Copilot

GitHub 2026 的另一项变化是支持第三方 coding agents 与 Copilot cloud agent 并列：用户可以把开发任务委派给不同 Agent，Agent 在后台工作并创建 PR。[^14]

这意味着 GitHub 开始从“卖一个 Copilot”转向“托管 Agent 工作流的平台”。

长期看，仓库可能拥有：

- Copilot agent；
- Claude-based agent；
- Codex agent；
- 企业内部 agent；
- 安全审计 agent；
- 文档 agent。

GitHub 的价值因此可能不只来自拥有最强 coding model，而来自：**成为所有 coding agents 的共同任务 / 权限 / review 平面。**

---

## 十、2026-08：Automations——软件维护开始事件驱动

GitHub Copilot automations 开始支持 issue / PR comment 触发。[^15]

这看起来像一个小功能，却改变了运行模型：

> 过去：人打开 Agent → 输入任务。
>
> 现在：仓库里发生事件 → Agent 自动开始工作。

例如：

- 评论 `/investigate` → 调查 bug；
- PR review comment → 修改；
- Issue label → 补文档 / 测试；
- 自动化任务 → 创建 follow-up。

这使 coding agent 逐渐接近 CI/CD：**由代码仓库事件驱动，而不是由聊天窗口驱动。**

---

## 十一、AI 编程助手生态的竞争单位已经改变

### 2021：模型 + autocomplete

比谁补全得准。

### 2023：模型 + IDE context

比谁理解代码库。

### 2025：模型 + execution environment

比谁能自主改、跑、测。

### 2026：模型 + agent runtime + repository control plane

比谁能：

- 长时间稳定工作；
- 多 Agent 并行；
- 隔离 workspace；
- 自动触发；
- 留下 trace；
- 进入 PR / CI / review 制度。

底层模型仍然关键，但**产品护城河越来越来自 harness 和 workflow integration。**

---

## 十二、代码生成 Benchmark 为什么越来越不够

HumanEval 评一个函数；Agent coding 已经是：

- 理解真实 repo；
- 修改多个文件；
- 使用工具；
- 运行测试；
- 与 CI / PR 交互。

因此 SWE-bench、Terminal-Bench 等环境式评测比 HumanEval 更接近实际工作。

但即便如此，真实生产还需要衡量：

- 改错文件了吗？
- 破坏兼容性了吗？
- 是否留下安全漏洞？
- PR 是否容易 review？
- retry 几次？
- 人类审查花多久？

coding agent 的最终 benchmark 可能就是：

> **这个 PR 能不能被安全合并。**

---

## 十三、审查带宽成为新瓶颈

AI 能生成更多代码，并不意味着团队能吸收更多代码。

Agent 一次提交 5,000 行修改后，人类 reviewer 可能完全失去逐行理解能力。

因此真正可扩展的 coding agent 必须帮助降低 review 成本：

- 小而明确的 diff；
- 自动测试；
- change summary；
- provenance；
- risk highlighting；
- 分阶段 commit；
- rollback；
- policy checks。

如果生成速度超过验证速度，生产力只是把瓶颈从“写代码”搬到“审代码”。

---

## 十四、初级工程师问题：学习路径正在改变，但结论不能写得太早

coding agents 显然会吞掉一部分过去用于培养新人的机械任务：

- boilerplate；
- 简单迁移；
- 基础测试；
- 文档；
- 小 bug。

但“因此初级工程师会消失”并不能从技术能力直接推出。

团队仍需要培养未来能：

- 定义系统架构；
- 判断需求；
- 审查 Agent；
- 处理生产事故；
- 理解深层约束

的人。

真正变化的是学习材料：新人可能不再通过手写 10 万行 boilerplate 获得经验，而通过**审查、实验、调试 Agent 产物**建立直觉。

这是教育与组织问题，不宜在技术史里提前宣布结局。

---

## 十五、2026 年的 AI 编程技术栈

| 层 | 代表 |
|---|---|
| Coding model | Claude Sonnet/Opus、GPT/Codex、Gemini、DeepSeek、Qwen 等 |
| IDE interaction | VS Code / Cursor / JetBrains / Copilot |
| Terminal agent | Claude Code / Codex CLI / Copilot CLI |
| Cloud coding agent | Copilot coding agent / Codex cloud / third-party agents |
| Sandbox | GitHub Actions / cloud containers / native sandbox |
| Repo isolation | branches / worktrees |
| Verification | tests / lint / typecheck / CI |
| Control plane | Issues / PRs / Agents tab / Codex App |
| Automation | comments / schedules / repository events |
| Review | diff / approval / branch protection |

这张表比“哪个 AI 写代码最好”更能说明赛道现状。

---

## 评曰

AI 编程助手最早卖的是一个非常小的动作：**按 Tab 少打几行字。**

五年后，它正在争夺的是整个软件变更流程。

这段历史真正连续的，不是 HumanEval 从多少涨到多少，而是**人类交给 AI 的变更权限越来越大**：

- 建议下一行；
- 修改一个文件；
- 修改整个仓库；
- 运行命令；
- 接一个 Issue；
- 提交 PR；
- 在后台持续工作；
- 同时调度多个 Agent；
- 被仓库事件自动触发。

与此同时，软件工程也把自己的老制度重新派上了用场：Git、branch、worktree、CI、PR、review、rollback。

所以 coding agent 的成功并没有证明“AI 已经像程序员一样可靠”。

它证明的是另一件事：

> **即使 Agent 不完全可靠，只要工作环境足够可验证、可隔离、可回滚，它仍然可以被安全地授予越来越多行动权。**

这可能也是编程对其他 Agent 场景最大的启示。

未来真正可复制的，不是“让 AI 会写代码”，而是软件工程这套**管理机器生成变更**的制度。

---

*本篇原由终末地工业史官团队编纂。*  
*2026-08 重订：GPT-5.6 Sol（OpenAI）。*

---

> 📖 相关：《Codex / GitHub Copilot 列传》《Claude 世家》《志·AI Agent 生态》《论·Agent 时代》。

[^1]: Chen et al., Codex / HumanEval. https://arxiv.org/abs/2107.03374
[^2]: GitHub, “Introducing GitHub Copilot”. https://github.blog/2021-06-29-introducing-github-copilot-ai-pair-programmer/
[^3]: GitHub, “GitHub Copilot is generally available”. https://github.blog/2022-06-21-github-copilot-is-generally-available-to-all-developers/
[^4]: Anthropic, Claude 3.5 Sonnet. https://www.anthropic.com/news/claude-3-5-sonnet
[^5]: Anthropic, Computer Use / Claude 3.5 update. https://www.anthropic.com/news/3-5-models-and-computer-use
[^6]: GitHub, “Copilot Agent Mode”, 2025-02-06. https://github.com/newsroom/press-releases/agent-mode
[^7]: GitHub, Copilot coding agent public preview, 2025-05-19. https://github.blog/changelog/2025-05-19-github-copilot-coding-agent-in-public-preview/
[^8]: GitHub, “Meet the new coding agent”. https://github.blog/news-insights/product-news/github-copilot-meet-the-new-coding-agent/
[^9]: Anthropic, Claude 3.7 Sonnet and Claude Code. https://www.anthropic.com/news/claude-3-7-sonnet
[^10]: Anthropic, Claude Sonnet 5. https://www.anthropic.com/news/claude-sonnet-5
[^11]: OpenAI, Introducing Codex. https://openai.com/index/introducing-codex/
[^12]: OpenAI, “Introducing the Codex app”, 2026-02-02. https://openai.com/index/introducing-the-codex-app/
[^13]: GitHub Changelog, Agents tab, 2026-01-26. https://github.blog/changelog/2026-01-26-introducing-the-agents-tab-in-your-repository/
[^14]: GitHub Docs, “About third-party coding agents”. https://docs.github.com/en/copilot/concepts/agents/about-third-party-coding-agents
[^15]: GitHub Changelog, “Trigger Copilot automations with comments”, 2026-08-03. https://github.blog/changelog/2026-08-03-trigger-copilot-automations-with-comments/
