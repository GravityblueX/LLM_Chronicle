# 《GPT 世家》

> GPT 系列是 OpenAI 自 2018 年起发展至今的核心模型谱系。它从 117M 参数的研究模型出发，先证明生成式预训练可以迁移到下游任务，再通过 GPT-2 / GPT-3 把规模扩展变成方法论，通过 InstructGPT / ChatGPT 把模型对齐成助手，通过 o1 把推理时计算变成新的 scaling 轴，最后在 GPT-5 系列中把快速回答、深度推理、工具使用、Agent 执行与多 Agent 并行重新合到一条主线上。GPT 的历史因此不只是“模型越来越大”，而是 OpenAI 不断改变“什么才算一个模型”的历史。

---

## 一、概述：GPT 的六次换题

如果把 GPT 家族从 2018 年看到 2026 年，它至少经历了六个阶段：

1. **生成式预训练**：GPT-1 证明预训练 + 微调可以迁移；
2. **规模扩展与 in-context learning**：GPT-2 / GPT-3 把 zero-shot、few-shot 推到中心；
3. **对齐与产品化**：InstructGPT、GPT-3.5、ChatGPT 把“续写模型”变成“助手”；
4. **原生多模态**：GPT-4 / GPT-4o 把文本之外的视觉、语音纳入统一交互；
5. **推理时计算**：o1 / o3 把“回答前多想一会”变成新的能力来源；
6. **统一 Agent 模型**：GPT-5 以后，快速回答、深度推理、工具调用、代码执行、电脑操作和并行 Agent 开始被看作同一智能系统的不同运行方式。

这条线最值得注意的，是“模型”这个词本身在变化。2018 年它主要指一组 Transformer 权重；2026 年谈 GPT-5.6 时，已经很难把模型与 router、reasoning effort、工具、计算机操作、Agent 编排和产品运行时完全拆开。

---

## 二、代际总表

| 代际 | 发布时间 | 参数规模 | 核心变化 | 开放状态 |
|------|----------|----------|----------|----------|
| GPT-1 | 2018-06 | 117M | 生成式预训练 + 任务微调 | 权重/代码公开 |
| GPT-2 | 2019-02 | 1.5B | zero-shot、分阶段发布 | 最终开放权重 |
| GPT-3 | 2020-05/06 | 175B | few-shot / in-context learning、API | 闭源 API |
| InstructGPT / GPT-3.5 | 2022 | 未完整公开 | SFT + RLHF、指令遵循 | 闭源 |
| GPT-4 | 2023-03 | 未公开 | 更强推理、多模态输入、安全系统化 | 闭源 |
| GPT-4o | 2024-05 | 未公开 | 原生实时多模态 | 闭源 |
| o1 | 2024-09 | 未公开 | test-time compute / reasoning | 闭源 |
| GPT-4.5 | 2025-02 | 未公开 | 大规模非推理模型路线的阶段性高点 | 闭源 |
| GPT-5 | 2025-08 | 未公开 | 快速模型 + reasoning + router 的统一系统 | 闭源 |
| GPT-5.1 | 2025-11 | 未公开 | 自适应推理、Instant / Thinking 分工细化 | 闭源 |
| GPT-5.2 | 2025-12 | 未公开 | 专业知识工作、长上下文、长程 Agent | 闭源 |
| GPT-5.3-Codex | 2026-02 | 未公开 | Codex 与 GPT-5 训练栈合流 | 闭源 |
| GPT-5.4 | 2026-03 | 未公开 | 编程、推理、Agent 工作流并入主线 | 闭源 |
| GPT-5.5 | 2026-04 | 未公开 | computer use、知识工作、Agent 长程执行 | 闭源 |
| GPT-5.6 | 2026-07 | 未公开 | Sol / Terra / Luna 分层；ultra 多 Agent 并行 | 闭源 |

参数规模在 GPT-4 以后不再是官方叙事中心。外界长期流传 GPT-4 使用约 1.76T 总参数 MoE 等说法，但 OpenAI 从未正式确认这些架构与参数细节，因此本篇不把它们当作定论。[^5]

---

## 三、GPT-1：生成式预训练的起笔

**2018 年 6 月**，OpenAI 发布《Improving Language Understanding by Generative Pre-Training》。117M 参数、12 层 Transformer decoder，在 BooksCorpus 上做生成式预训练，再针对下游任务微调。[^1]

GPT-1 的关键不是参数大，而是把一套后来极其熟悉的流程写清楚：

> **先在大规模无标注文本上学语言，再用很少的有监督数据适配任务。**

它并没有立即统治 NLP；同年稍晚发布的 BERT 甚至在理解类任务上更耀眼。但 GPT-1 留下了一条后来被规模扩展不断放大的路线：使用单向生成式 Transformer，把“语言建模”本身当成通用任务接口。

---

## 四、GPT-2：zero-shot 与“太危险所以分阶段开放”

**2019 年 2 月**，GPT-2 把规模提高到 1.5B。OpenAI 的论文强调模型可以在没有任务专门训练的情况下完成摘要、翻译、问答等任务。[^2]

GPT-2 同时留下了另一条更具制度史意义的遗产：OpenAI 没有一次性公布最大模型，而是以滥用风险为由分阶段发布，直到 2019 年 11 月才完整开放 1.5B 权重。

后来回看，GPT-2 的实际危害能力远没有 2019 年舆论想象得那么强，但“能力越强，发布方式越应受到治理”这条原则从此进入 OpenAI 的产品制度。GPT-4 的 system card、o 系列的推理披露限制以及后来 Preparedness Framework，都能在这里找到早期脉络。

---

## 五、GPT-3：规模扩展第一次变成行业信仰

**2020 年 5 月论文、6 月 API**，GPT-3 把参数规模提高到 175B。[^3]

它最重要的贡献不是某个单项 benchmark，而是 **in-context learning**：不给模型做梯度更新，只在 prompt 里放几个示例，模型就能理解任务形式并继续完成。

GPT-3 由此把大模型训练逻辑从“每个任务训练一个模型”改写为：

> **训练一个足够大的通用模型，让任务在上下文里被临时定义。**

它同时确立了 OpenAI 后来的商业模式：前沿权重不再直接公开，而通过 API 提供能力。大模型从论文对象变成基础设施服务，token 计费也逐渐成为闭源模型行业的标准经济单位。

---

## 六、InstructGPT / ChatGPT：从“续写”到“服从指令”

GPT-3 很强，但它本质上仍然在做“最可能的后续文本”。真正把模型变成助手的关键是 **InstructGPT**。

**2022 年**，OpenAI 系统公开了 SFT + 人类偏好排序 + reward model + PPO 的 RLHF 流程。[^4]

这套流程的意义是重新定义优化目标：不只要预测训练数据，还要**按照人的意图回答**。

**2022-11-30**，ChatGPT 把 GPT-3.5 系模型放进聊天界面。真正引爆大众市场的并不是一个新架构，而是三件事叠加：

- 指令遵循；
- 连续多轮对话；
- 几乎没有学习成本的聊天框。

大模型从此不再主要是一种 API 能力，而成为一种大众交互范式。

---

## 七、GPT-4：能力跃迁与技术不透明化

**2023-03-14**，GPT-4 发布。OpenAI 官方确认它是能够接受图像与文本输入、输出文本的多模态模型，并在大量专业和学术考试上显著提升。[^5]

与此同时，GPT-4 技术报告明确拒绝披露模型规模、硬件、训练算力、数据集构成和训练方法细节。

这是 GPT 系列史上的另一个转折点：

> **能力报告继续增长，架构透明度却显著下降。**

关于 GPT-4 的 MoE 结构、总参数量、专家数量等信息后来出现大量产业传闻和逆向推测，但这些没有得到 OpenAI 官方确认。历史记录可以记“外界曾如此推测”，不能把推测改写成官方事实。

---

## 八、GPT-4o：从“多模态输入”到“原生多模态交互”

**2024-05-13**，OpenAI 发布 GPT-4o。官方给出的语音响应时间最低约 232ms、平均约 320ms，接近人类对话节奏。[^6]

GPT-4o 的关键是 omni。此前语音助手往往是：

> 语音 → ASR 转文字 → LLM → 文本 → TTS 语音

GPT-4o 则把文本、视觉与音频放进同一个端到端模型体系，使语气、停顿、情绪、环境声音等信息不必先被压扁成文字。

GPT 家族由此从“语言模型”继续向“通用感知与生成模型”移动。

---

## 九、o1 / o3：第二条 Scaling Law——推理时间

**2024-09-12**，OpenAI 发布 o1-preview / o1-mini，强调模型在回答前使用更多计算完成推理。[^7]

这次变化的重要性甚至超过模型命名本身。GPT-3 时代的直觉是：

> **训练时给更多参数、数据和算力 → 模型更强。**

而 o1 以后，多了一条同样重要的轴：

> **推理时允许模型花更多计算 → 单次任务能力也能继续提升。**

这就是 test-time compute。随后 o3、DeepSeek-R1 等模型把这种范式推向行业主流。

但 o 系列也制造了一个产品问题：用户为什么要理解“普通模型”和“推理模型”是两个家族？OpenAI 最终在 GPT-5 给出了答案：**不应该让用户自己承担这种模型路由。**

---

## 十、GPT-5：GPT 与 o 系列重新合流

**2025-08-07**，GPT-5 正式发布。[^8]

OpenAI 把它定义为“统一系统”：一个高效模型处理大多数请求，一个更深的 reasoning model 处理困难问题，实时 router 根据任务类型、复杂度、工具需求以及用户意图决定调用方式。

这一步解决了 GPT-4o 与 o 系列并存造成的产品割裂：

> 用户不再需要先判断“这个问题该选聊天模型还是推理模型”；系统自己决定回答速度和思考深度。

GPT-5 在 API 中也被明确定位为当时 OpenAI 最强的 coding / agentic task 模型，强化长链工具调用、代码修改和复杂软件工程能力。[^9]

从这里开始，“GPT 主线”不再只是基础模型家族，而越来越像一个**动态计算系统**。

---

## 十一、GPT-5.1 / 5.2：推理预算成为产品参数

**2025-11-12** — GPT-5.1 Instant / Thinking 发布。Instant 可以在必要时使用轻量自适应推理，Thinking 则更精确地根据任务难度调整思考时间。API 版 GPT-5.1 进一步加入 reasoning effort 的细粒度选择，以及 apply_patch、shell 等面向 Agent 的工具。[^10][^11]

这意味着推理不再只是“开/关”两个状态，而开始像 CPU 调频一样变成动态预算。

**2025-12-11** — GPT-5.2 发布，OpenAI 将它定位为面向专业工作与 long-running agents 的前沿模型，重点强调知识工作、长上下文、工具调用、编码、视觉与复杂多步项目。[^12]

GPT-5.2 很重要，因为 GPT 系列的中心任务已经明显从“生成回答”转向“完成工作”：表格、演示文稿、代码、长文档、研究与工具链被放到同一个评价框架里。

---

## 十二、GPT-5.3-Codex / GPT-5.4：专用 Agent 栈回灌主线

**2026-02-05** — GPT-5.3-Codex 发布。OpenAI 称它是首个把 **Codex 与 GPT-5 训练栈**真正合并的模型：既保留前沿 agentic coding，又拥有更通用的推理和知识能力，并支持在长时间任务执行过程中被用户继续引导。[^13]

这是 GPT 世家里一个很值得注意的“支系回流”现象：

- 2021 年 Codex 从 GPT 支系分出，专门做代码；
- 2025 年 Codex 发展成独立 Agent 产品；
- 2026 年 GPT-5.3-Codex 又把这套 Agent / coding 训练经验重新灌回主模型。

**2026-03-05** — GPT-5.4 发布。OpenAI 明确称它整合 GPT-5.3-Codex 的编程能力，并把 reasoning、coding、agentic workflows 合成一套面向专业工作的主线模型。[^14]

GPT 与 Codex 至此不再是“通用模型 / 编程模型”平行发展，而是开始共享能力栈。

---

## 十三、GPT-5.5：模型开始被定义为“会把活干完”

**2026-04-23** — GPT-5.5 发布。[^15]

OpenAI 对它的描述已经非常不像传统模型发布：重点不再只是考试分数，而是模型能否理解一个混乱、多部分的目标，自己计划、上网研究、分析数据、创建文档和表格、操作软件、跨工具移动、检查结果并持续工作直到任务完成。

GPT-5.5 的产品语义因此可以概括成一句话：

> **不是更会回答，而是更会把事情做完。**

它也继续强化了 computer use、agentic coding 与工具执行。模型能力与 Agent runtime 的边界进一步模糊。

---

## 十四、GPT-5.6：能力分层、效率竞争与多 Agent 并行

**2026-07-09** — OpenAI 发布 GPT-5.6 家族：**Sol、Terra、Luna**。[^16]

这一次命名方式本身就在说明市场变化：不再用一个旗舰模型覆盖全部任务，而是把前沿智能按成本、速度和工作复杂度分层供给。

- **Sol**：旗舰，面向复杂 coding、知识工作、网络安全、科学、computer use 和设计；
- **Terra**：更均衡的日常工作模型；
- **Luna**：强调成本效率。

GPT-5.6 还引入了 **ultra**：在最困难工作上协调多个 Agent 并行执行不同 workstream，以更多推理时资源换取更高任务完成率和更短墙钟时间。[^16]

这里发生的是 GPT 世家又一次 scaling 维度变化：

- GPT-3：扩训练规模；
- o1：扩单 Agent 推理时间；
- GPT-5.5 Pro：使用更强 parallel test-time compute；
- GPT-5.6 ultra：进一步把计算扩展到**多个并行 Agent**。

**2026-07-30**，OpenAI 下调 Luna 80%、Terra 20% 的价格；**2026-08-21**，又把 Sol 的 API / credits 价格临时下调超过 20%。[^16][^17]

这说明 2026 年前沿模型竞争已经很难只按“谁最聪明”来写。能力、token 效率、任务完成成本和并行执行能力正在一起决定模型的位置。

> 📖 详见《编年·2026年7月》。

---

## 十五、技术路线：从权重规模到运行时系统

### 15.1 训练范式

GPT 家族的训练逻辑可以粗略写成：

- **GPT-1 / 2 / 3**：next-token pretraining 是主体；
- **InstructGPT / 3.5**：pretrain → SFT → preference / RLHF；
- **GPT-4**：训练细节大量不公开，但对齐、安全评估和多模态成为系统工程；
- **o1 / o3**：强化推理训练 + test-time compute；
- **GPT-5 以后**：推理、工具、agentic task、软件环境和专业工作 increasingly co-trained / co-optimized。

到 GPT-5.5 / 5.6，“训练一个会聊天的模型，再外挂工具”已经不是最准确的描述。更接近现实的是：**训练目标开始直接包含工具使用、长程执行与环境反馈。**

### 15.2 推理时计算

GPT 世家最重要的 scaling 变量已经发生三次迁移：

| 时期 | 主要 scaling 轴 |
|------|----------------|
| 2018—2023 | 参数、数据、训练 FLOPs |
| 2024—2025 | 单模型 test-time compute |
| 2026 | reasoning effort + tool execution + parallel agents |

这并不意味着训练规模不再重要，而是“部署以后还能花多少计算”也成为能力组成部分。

### 15.3 参数不再是主要产品指标

GPT-3 的“175B”是品牌的一部分；GPT-4 以后，OpenAI 不再公开参数规模。

到了 GPT-5.6，官方叙事更关心：

- 完成任务需要多少 token；
- 单位美元能完成多少工作；
- 是否能可靠调用工具；
- 能否操作计算机；
- 是否能持续数小时乃至更久；
- 是否能并行调度多个 Agent。

这是一种从**模型尺寸经济学**向**任务完成经济学**的转变。

---

## 十六、开放策略：从论文项目到黑箱基础设施

GPT 系列的开放程度总体呈收缩趋势：

| 代际 | 开放状态 |
|------|----------|
| GPT-1 | 论文、代码、权重公开 |
| GPT-2 | 分阶段开放，最终公开 |
| GPT-3 | API 为主，不公开权重 |
| GPT-4—GPT-5.6 | 不公开前沿权重与核心训练细节 |

但“封闭”也发生了形态变化。GPT-3 时代用户只能通过 API 调用模型；GPT-5 时代，OpenAI 同时开放了 Responses API、工具接口、Codex CLI / SDK 等大量运行时能力。

因此 2026 年所谓开放 / 闭源已经不能只看“有没有权重”：**权重越来越封闭，Agent 接口和系统扩展能力反而越来越丰富。**

---

## 十七、竞品关系：前沿优势从“代差”变成“短窗口”

GPT 系列早期经常拥有较长时间的领先：GPT-3 发布后，行业需要很久才出现同量级通用模型；GPT-4 也在相当长时间内充当事实上的能力标杆。

推理模型以后，追赶速度显著加快：o1 在 2024-09 引入的推理范式，到 2025-01 就出现 DeepSeek-R1 这样的开放权重强力回应。

2025—2026 年，这种竞争进一步变成多轴同时发生：

- Anthropic 争 Claude / coding / agent 长程执行；
- Google 争 Gemini 多模态、Flash 成本与模型速度；
- DeepSeek、Qwen、Kimi 等开放权重模型争成本与生态；
- OpenAI 则不断把 GPT 与 Codex、computer use、知识工作和多 Agent 调度重新整合。

因此 GPT 已经很难再靠“发布一个模型，领先一年”维持王朝。它必须依靠**模型 + 产品 + Agent runtime + 开发者生态 + 价格**共同维持前沿位置。

---

## 评曰

GPT 世家的第一段历史，是“规模能不能长出能力”。GPT-1 回答预训练有用，GPT-2 回答更大的生成模型会产生 zero-shot，GPT-3 回答足够大的模型能够通过上下文临时学习任务。

第二段历史，是“能力怎样变成可用的助手”。InstructGPT 用人类偏好重新塑造模型，ChatGPT 用聊天框把它送到大众面前，GPT-4 与 GPT-4o 又把视觉和语音纳入同一个交互世界。

第三段历史，从 o1 开始：问题变成“部署后还能不能继续 scale”。模型可以多想一会，可以调用工具，可以操作计算机，可以在沙箱里跑代码，可以把一个任务做几小时，甚至可以把任务拆给多个 Agent 并行完成。

于是 2018 年和 2026 年的 GPT 虽然共享三个字母，实际上已经不是同一种“东西”。GPT-1 是一组权重与一篇论文；GPT-5.6 更接近一个可动态分配推理预算、工具和执行主体的智能运行系统。

这也解释了为什么参数量在 GPT 叙事里逐渐消失。早年最容易问的是“它有多少参数”；现在更重要的问题是：**它能独立完成多大的工作，花多少时间、token 和钱，失败后能不能恢复，人类需要在哪些节点接管。**

GPT 的历史从 scaling model 开始，正在走向 scaling work。

---

*本篇由终末地工业史官团队编纂：庄方宜（主笔）。*  
*2026-08 补订：GPT-5.6 Sol（OpenAI）。*

---

[^1]: Radford et al., "Improving Language Understanding by Generative Pre-Training", OpenAI, 2018. https://cdn.openai.com/research-covers/language-unsupervised/language_understanding_paper.pdf
[^2]: Radford et al., "Language Models are Unsupervised Multitask Learners", OpenAI, 2019. https://cdn.openai.com/better-language-models/language_models_are_unsupervised_multitask_learners.pdf
[^3]: Brown et al., "Language Models are Few-Shot Learners", arXiv:2005.14165, 2020. https://arxiv.org/abs/2005.14165
[^4]: Ouyang et al., "Training language models to follow instructions with human feedback", arXiv:2203.02155, 2022. https://arxiv.org/abs/2203.02155
[^5]: OpenAI, "GPT-4 Technical Report", arXiv:2303.08774, 2023. https://arxiv.org/abs/2303.08774
[^6]: OpenAI, "Hello GPT-4o", 2024-05-13. https://openai.com/index/hello-gpt-4o/
[^7]: OpenAI, "Learning to reason with LLMs", 2024-09-12. https://openai.com/index/learning-to-reason-with-llms/
[^8]: OpenAI, "Introducing GPT-5", 2025-08-07. https://openai.com/index/introducing-gpt-5/
[^9]: OpenAI, "Introducing GPT-5 for developers", 2025-08-07. https://openai.com/index/introducing-gpt-5-for-developers/
[^10]: OpenAI, "GPT-5.1: A smarter, more conversational ChatGPT", 2025-11-12. https://openai.com/index/gpt-5-1/
[^11]: OpenAI, "Introducing GPT-5.1 for developers", 2025-11-13. https://openai.com/index/gpt-5-1-for-developers/
[^12]: OpenAI, "Introducing GPT-5.2", 2025-12-11. https://openai.com/index/introducing-gpt-5-2/
[^13]: OpenAI, "Introducing GPT-5.3-Codex", 2026-02-05. https://openai.com/index/introducing-gpt-5-3-codex/
[^14]: OpenAI, "Introducing GPT-5.4", 2026-03-05. https://openai.com/index/introducing-gpt-5-4/
[^15]: OpenAI, "Introducing GPT-5.5", 2026-04-23. https://openai.com/index/introducing-gpt-5-5/
[^16]: OpenAI, "GPT-5.6: Frontier intelligence that scales with your ambition", 2026-07-09. https://openai.com/index/gpt-5-6/
[^17]: Reuters, "OpenAI cuts developer pricing for frontier GPT-5.6 Sol model by more than 20%", 2026-08-21. https://www.reuters.com/technology/openai-cuts-developer-pricing-frontier-gpt-56-sol-model-by-more-than-20-2026-08-21/