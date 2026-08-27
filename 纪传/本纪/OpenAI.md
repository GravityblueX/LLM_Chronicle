# 《OpenAI 本纪》

> OpenAI 的历史不是一条“从开放走向封闭”的单线故事。它先把预训练规模化，随后把模型变成 API、把 RLHF 变成消费产品、把推理时计算变成第二条 scaling 轴，再把代码 Agent、工具使用和电脑操作重新并入 GPT 主线。与此同时，它的组织结构也从非营利实验室走向受非营利基金会控制的 Public Benefit Corporation。到 2026 年，OpenAI 真正经营的已经不是一个模型，而是一整套“智能如何训练、分发、执行、计费和治理”的系统。

---

## 一、概述

OpenAI 于 2015 年以非营利机构形式成立，使命是确保通用人工智能造福全人类。2019 年，为获得训练前沿模型所需的资本与算力，OpenAI 建立营利性子公司；2025 年 10 月完成新一轮结构调整：原非营利实体成为 **OpenAI Foundation**，营利实体成为 **OpenAI Group PBC**，并继续由非营利基金会控制。[^1]

这条组织史和模型史是绑在一起的。

- GPT-1 / GPT-2：研究机构阶段；
- GPT-3：API 化与闭源分发；
- InstructGPT / ChatGPT：对齐与大众产品化；
- GPT-4 / GPT-4o：前沿能力、多模态与实时交互；
- o1：test-time compute；
- GPT-5：fast / reasoning / router 统一；
- GPT-5.1 / 5.2：自适应推理、工具与 long-running agents；
- GPT-5.3-Codex / 5.4：代码 Agent 的训练栈回流 GPT 主线；
- GPT-5.5 / 5.6：模型本身越来越像工作执行系统，Sol / Terra / Luna 又把同一代智能按能力、成本和吞吐分层。[^2][^3][^4]

OpenAI 的连续性因此不是“每次做更大模型”，而是持续扩大**模型可以承担的工作范围**。

---

## 二、创立：非营利研究实验室（2015—2018）

OpenAI 于 2015 年 12 月成立。创始团队包括 Sam Altman、Elon Musk、Greg Brockman、Ilya Sutskever 等。早期使命声明强调：发展数字智能时，不受直接财务回报要求约束，并让成果尽可能造福全人类。[^5]

早期项目以强化学习、机器人、OpenAI Gym 等开放研究基础设施为主。

**2018 年**，GPT-1 发布。它并不是当时最受关注的 NLP 模型，却确立了 OpenAI 后来的关键路线：**生成式预训练 + 下游适配**。

同年，Elon Musk 离开 OpenAI 董事会。关于退出原因，多年来存在不同公开叙述；到 2026 年双方仍在围绕 OpenAI 使命、组织变化和早期协议进行法律与舆论争执。史料上应区分 OpenAI 官方陈述、Musk 陈述和诉讼材料，而不能把其中任何一方的版本写成无争议事实。[^6]

---

## 三、2019：资本结构改变，微软成为关键基础设施伙伴

**2019 年**，OpenAI 建立营利性子公司，以便吸引资本和人才；微软随后宣布投资 10 亿美元，并与 OpenAI 建立深度云计算合作。[^7]

这一步决定了之后数年的 OpenAI：训练规模快速上升，而 Azure 成为其最重要的外部基础设施之一。

旧叙述常把这一步概括成“理想主义向商业投降”。更准确的理解是一个真实的结构矛盾：

> 如果前沿模型需要越来越大的计算投入，一个不愿商业融资的实验室还能否继续站在前沿？

OpenAI 选择了“使命治理 + 营利融资”的混合结构。这个结构后来不断修改，但核心矛盾一直存在。

---

## 四、GPT-2 / GPT-3：从开放研究到 API 时代

### 4.1 GPT-2：发布治理第一次成为产品的一部分

**2019-02**，OpenAI 发布 GPT-2，并以滥用风险为由分阶段释放权重。今天回看，GPT-2 的实际风险远低于后来模型，但它留下了一个重要制度先例：**模型发布本身可以被当成安全治理问题**。

### 4.2 GPT-3：能力通过 API 分发

**2020**，GPT-3 以 175B 参数将 few-shot / in-context learning 推到新的规模，并通过 API 而不是开放权重进行商业分发。[^8]

这使“模型”第一次成为一种云服务：用户不需要下载权重，只需要购买 token。

OpenAI 从此不只是研究模型，还开始控制：

- 模型版本；
- 可用地区；
- API 配额；
- 内容政策；
- 定价；
- 模型升级和退役。

这套控制面后来成为闭源模型产业的标准模板。

---

## 五、InstructGPT 与 ChatGPT：真正的革命是“可用”

**2022 年**，InstructGPT 系统化展示 SFT + human preference + RLHF 如何让语言模型更符合用户意图。[^9]

**2022-11-30**，ChatGPT 上线。

ChatGPT 的历史意义不应被简化成“GPT-3.5 放进聊天框”。它把几项此前分散的能力合成一个消费产品：

- 多轮对话；
- 指令遵循；
- 反馈循环；
- 免费入口；
- 持续在线更新。

这使大模型第一次进入日常语言，而不是只存在于 API、论文和 demo 中。

ChatGPT 也建立了 OpenAI 此后最重要的产品反馈回路：**模型训练—产品使用—用户反馈—下一代模型**。

---

## 六、GPT-4 与 2023 董事会危机：能力前沿与治理危机同时出现

**2023-03-14**，GPT-4 发布。OpenAI 不再披露参数规模、训练计算和详细架构。[^10]

因此 GPT-4 有两个同时成立的历史位置：

1. 它把闭源前沿能力推到新的高度；
2. 它把“技术报告不再报告关键训练技术”变成行业常态之一。

### 6.1 2023 年 11 月的 104 小时危机

**2023-11-17**，董事会解除 Sam Altman CEO 职务；随后 Greg Brockman 离开相关职务，大量员工公开反对董事会决定；几天后 Altman 重新担任 CEO，董事会重组。

关于危机深层原因，公开材料并不足以支持把它简单写成“安全派 vs 商业派”的确定冲突。安全、治理、领导信任、沟通方式和公司扩张都可能是背景，但董事会最初声明只明确提到 Altman 与董事会沟通“不够坦诚”。[^11]

这场危机的结果却很明确：OpenAI 的治理结构受到全球审视，而 Sam Altman 的组织控制力显著增强。

---

## 七、GPT-4o 与 o1：两个新的 scaling 方向

### 7.1 GPT-4o：多模态与实时交互

**2024-05-13**，GPT-4o 发布。它把文本、视觉与音频进一步整合进统一的实时交互产品，并把一部分前沿能力下放给免费用户。[^12]

GPT-4o 的意义不仅是“语音更自然”，而是 OpenAI 第一次大规模证明：**模型能力可以通过更低延迟、更低价格和更广免费覆盖获得更大的社会使用量。**

### 7.2 o1：test-time compute 成为第二条 scaling 轴

**2024-09**，o1 发布。OpenAI 开始公开强调模型可以在回答前投入更多推理计算，在数学、科学和代码任务上获得更强表现。[^13]

这改变了“一个模型有固定能力”的概念。

从此，能力同时取决于：

- 训练阶段投入多少 compute；
- 推理阶段愿意投入多少 compute。

这条路线随后被 DeepSeek-R1、Claude extended thinking、Gemini thinking 等迅速扩散，OpenAI 不再独占“推理模型”这个品类，但 o1 的先发定义仍然重要。

---

## 八、2025：GPT-5 不是延期悬念，而是已经发生的统一

旧稿中“GPT-5 多次推迟，截至 2026-05 尚未正式发布”的判断已经完全失效。

**2025-08-07**，OpenAI 正式发布 **GPT-5**。[^2]

GPT-5 的核心设计不是简单“比 GPT-4 更大”，而是一个**统一系统**：

- 一个快速模型处理多数请求；
- 一个更深推理模型处理复杂问题；
- 一个实时 router 根据任务复杂度、工具需求和用户意图选择路径。

这相当于把此前 GPT 与 o 系列的分裂重新收回一个产品系统中。

GPT-5 也被明确训练用于 coding 与 agentic tasks，工具使用从“附加能力”进入模型主线。[^14]

### 8.1 GPT-5.1：推理预算开始自适应

**2025-11-12/13**，GPT-5.1 在 ChatGPT 与 API 发布。Instant 可以对困难请求使用轻量自适应推理，Thinking 根据任务难度动态调整思考时间；API 新增更明确的工具与缓存能力。[^15]

这里出现了后来 GPT-5.x 的一个固定方向：**不是所有请求都值得花同样多的推理 token。**

### 8.2 GPT-5.2：long-running agents 进入旗舰定义

**2025-12-11**，OpenAI 发布 GPT-5.2，并直接称其面向“professional work and long-running agents”。[^16]

模型评测也开始从单轮问答转向：

- 经济价值任务；
- 长上下文；
- 工具调用；
- 编码；
- 持续 Agent 任务。

GPT 产品线的评价单位开始从“回答一道题”转成“完成一件工作”。

---

## 九、2025 的另一条公司主线：Stargate 与资本结构重组

### 9.1 Stargate：基础设施成为公司战略本身

**2025-01-21**，OpenAI、SoftBank、Oracle、MGX 宣布 Stargate Project，计划四年内在美国投资最多 5000 亿美元建设面向 OpenAI 的 AI 基础设施，初期计划投入 1000 亿美元。[^17]

无论最终全部计划是否按最初规模落地，这个公告已经说明 OpenAI 的战略判断：

> 前沿竞争不只发生在模型架构，电力、土地、芯片、网络和数据中心本身也必须成为长期资产。

### 9.2 PBC：从 capped-profit 到常规股权

**2025-05**，OpenAI 宣布调整原先方案，明确非营利实体将继续控制营利业务；**2025-10-28**，新结构完成：

- OpenAI Foundation：非营利控制实体；
- OpenAI Group PBC：Public Benefit Corporation；
- Foundation 持有 PBC 普通股权；
- 微软与 OpenAI 同步更新长期合作协议。[^1][^18]

这不是“OpenAI 已经彻底变成普通营利公司”。相反，官方结构明确保留非营利控制，但把资本结构改成更接近普通公司股权的形式。

OpenAI 的组织史到此完成第二次大转型：

**nonprofit lab → capped-profit hybrid → nonprofit-controlled PBC group**。

---

## 十、2026：Codex 训练栈回流 GPT 主线

### 10.1 GPT-5.3-Codex：Agent 编程不再是旁支

**2026-02-05**，OpenAI 发布 **GPT-5.3-Codex**。官方称它第一次把 Codex 与 GPT-5 的训练栈结合起来，将代码生成、推理和专业知识整合到一个 Agent 模型中。[^3]

更有象征意义的是：OpenAI 表示 Codex 团队使用 GPT-5.3-Codex 的早期版本帮助调试它自己的训练、部署和评测流程。

这是“AI 帮助构建下一代 AI”从宣传语进入实际工程工作流的标记之一。

### 10.2 GPT-5.4：代码 Agent 的能力回灌通用旗舰

**2026-03-05**，GPT-5.4 发布。OpenAI 明确写道：5.4 将 GPT-5.3-Codex 的 coding 能力重新整合进通用专业工作模型，并加强跨工具、软件环境、表格、演示文稿和文档任务。[^19]

这使 Codex 与 GPT 的关系发生反转：

- 2021 Codex 是 GPT 的代码专项衍生；
- 2026 Codex 训练栈反过来成为通用 GPT 的能力来源。

软件工程因为反馈密集、可运行、可测试，成为通用 Agent 训练最成熟的实验场。

---

## 十一、GPT-5.5：从“回答模型”到“电脑工作模型”

**2026-04-23**，OpenAI 发布 **GPT-5.5**。官方定位直接从 benchmark 语言转向实际工作：写代码、在线研究、数据分析、文档和表格创建、软件操作以及跨工具执行。[^4]

GPT-5.5 Pro 使用同一底层模型并投入并行 test-time compute；系统卡也把 advanced cybersecurity、biology 等风险能力纳入专门预部署评估。[^20]

这里出现了 GPT 系列非常明显的阶段变化：

> 推理预算不仅可以“多想一会儿”，还可以被用于**并行探索和执行**。

模型能力开始同时取决于单个模型的 intelligence 与运行时系统分配多少并行工作。

---

## 十二、GPT-5.6：前沿智能变成分层供给

**2026-07-09**，OpenAI 发布 GPT-5.6 系列：**Sol、Terra、Luna**。[^21]

Sol 面向复杂编码、知识工作、研究、科学、网络安全、computer use 和 design；Terra 提供能力、速度和成本平衡；Luna 面向最快、最低成本调用。GPT-5.6 同时强化高推理预算设置和多 Agent 并行工作。[^21]

同日推出的 **ChatGPT Work** 则进一步说明模型与产品正在合流：工作空间可以连接文件与应用、运行较长任务并交付文档、表格、演示文稿等最终制品。

### 12.1 8 月：竞争重点从发布转向分配智能

2026 年 8 月，OpenAI 又做了两类动作：

- GPT-5.6 Luna 成为 Free / Go 的主要日常模型之一；
- Sol API / credits 价格临时下调超过 20%。[^22]

这不是新模型代际，却很值得入史。

到这一阶段，OpenAI 优化的不只是“最强模型有多强”，而是：

- 多少人能获得这一级智能；
- 每次调用需要多少钱；
- 应该给一次任务多少 reasoning effort；
- 哪些任务值得并行多个 Agent；
- 同一产品怎样在 fast / thinking / pro 之间路由。

因此 GPT-5.x 后半段的核心不再是参数 scaling，而是**scaling work**。

---

## 十三、OpenAI 与开放模型的关系：不是简单“闭源败给开源”

DeepSeek、Qwen、Kimi 等开放权重模型不断逼近前沿，使 OpenAI 的“模型权重稀缺”不再像 GPT-4 时代那样稳固。

但闭源服务仍拥有开放权重很难自动复制的优势：

- 可以持续更新模型而不要求用户重新部署；
- 可以统一运行工具、浏览器、电脑操作和沙箱；
- 可以控制敏感能力访问；
- 可以在服务器端进行多模型 router 与并行 Agent 编排；
- 可以让普通用户不关心模型部署。

因此 2026 年真正的竞争不是“开源一定赢”或“闭源一定赢”，而是两种控制权的交换：

- 开放权重给用户**迁移权与运行权**；
- 闭源服务给供应商**更新权与控制面**。

OpenAI 的战略显然继续押注后一种价值。

---

## 评曰

OpenAI 最值得写进历史的，并不是它长期保持第一。

事实上，从 Claude 3、Gemini 2.5、DeepSeek-R1 到 2026 年的 Kimi K3、Qwen3.8，OpenAI 的单模型优势越来越难长期维持。

它真正反复做到的是：**把一个研究能力变成新的产业接口。**

GPT-3 把语言模型变成 API；ChatGPT 把对齐模型变成大众聊天产品；GPT-4 把黑箱前沿模型变成可购买服务；o1 把推理计算变成产品参数；GPT-5 把 fast 与 reasoning 变成统一 router；Codex 把 Agent 行动权放进终端和云环境；GPT-5.5 / 5.6 又把文档、软件、研究和多 Agent 执行纳入“模型能做什么”的定义。

所以 OpenAI 的历史主线，不只是 scaling intelligence，而是：

> **不断重新定义“用户究竟在购买什么”。**

2020 年用户买 token；2022 年买一个会聊天的助手；2024 年买推理时间；2026 年越来越像是在买**完成工作的计算过程**。

组织结构也沿着同样逻辑变化。非营利实验室无法独自承担这种基础设施规模，于是出现营利子公司、微软合作、Stargate 和 PBC；与此同时，非营利控制又被保留下来，以维持使命治理。

这套结构是否能够长期同时满足资本、速度、安全和公共使命，仍然没有答案。

但到 2026 年，至少有一件事已经很清楚：OpenAI 已经不是一家“发布 GPT 模型的研究实验室”。它是一家试图把**前沿智能变成通用工作基础设施**的公司。

---

*本篇由终末地工业史官团队编纂。*  
*2026-08 补订：GPT-5.6 Sol（OpenAI）。*

---

> 📖 详见《GPT 世家》《Codex / GitHub Copilot 列传》《编年·2025年8月》《编年·2025年12月》《编年·2026年7月》《论·OpenAI 的分裂与演化》《志·AI Agent 生态》。

[^1]: OpenAI, “Our structure”, updated after 2025-10-28 recapitalization. https://openai.com/our-structure/
[^2]: OpenAI, “Introducing GPT-5”, 2025-08-07. https://openai.com/index/introducing-gpt-5/
[^3]: OpenAI, “Introducing GPT-5.3-Codex”, 2026-02-05. https://openai.com/index/introducing-gpt-5-3-codex/
[^4]: OpenAI, “Introducing GPT-5.5”, 2026-04-23. https://openai.com/index/introducing-gpt-5-5/
[^5]: OpenAI, “Introducing OpenAI”, 2015-12-11. https://openai.com/index/introducing-openai/
[^6]: OpenAI, “The truth Elon left out”, 2026-01-16; this is OpenAI’s account of the dispute and should be read alongside court filings and Musk’s claims. https://openai.com/index/the-truth-elon-left-out/
[^7]: Microsoft, “Microsoft invests in and partners with OpenAI”, 2019-07-22. https://news.microsoft.com/2019/07/22/openai-forms-exclusive-computing-partnership-with-microsoft-to-build-new-azure-ai-supercomputing-technologies/
[^8]: Brown et al., “Language Models are Few-Shot Learners”, 2020. https://arxiv.org/abs/2005.14165
[^9]: Ouyang et al., “Training language models to follow instructions with human feedback”, 2022. https://arxiv.org/abs/2203.02155
[^10]: OpenAI, “GPT-4 Technical Report”, 2023. https://arxiv.org/abs/2303.08774
[^11]: OpenAI, “OpenAI announces leadership transition”, 2023-11-17, and subsequent company announcements. https://openai.com/
[^12]: OpenAI, “Hello GPT-4o”, 2024-05-13. https://openai.com/index/hello-gpt-4o/
[^13]: OpenAI, “Learning to reason with LLMs”, 2024-09-12. https://openai.com/index/learning-to-reason-with-llms/
[^14]: OpenAI, “Introducing GPT-5 for developers”, 2025-08-07. https://openai.com/index/introducing-gpt-5-for-developers/
[^15]: OpenAI, “GPT-5.1: A smarter, more conversational ChatGPT” and “GPT-5.1 for developers”, 2025-11-12/13. https://openai.com/index/gpt-5-1/ ; https://openai.com/index/gpt-5-1-for-developers/
[^16]: OpenAI, “Introducing GPT-5.2”, 2025-12-11. https://openai.com/index/introducing-gpt-5-2/
[^17]: OpenAI, “Announcing The Stargate Project”, 2025-01-21. https://openai.com/index/announcing-the-stargate-project/
[^18]: OpenAI, “The next chapter of the Microsoft–OpenAI partnership”, 2025-10-28. https://openai.com/index/next-chapter-of-microsoft-openai-partnership/
[^19]: OpenAI, “Introducing GPT-5.4”, 2026-03-05. https://openai.com/index/introducing-gpt-5-4/
[^20]: OpenAI, “GPT-5.5 System Card”, 2026-04-23. https://openai.com/index/gpt-5-5-system-card/
[^21]: OpenAI, “GPT-5.6: Frontier intelligence that scales with your ambition”, 2026-07-09. https://openai.com/index/gpt-5-6/
[^22]: OpenAI, “Improving GPT-5.6 Sol in ChatGPT—and expanding access to GPT-5.6 Luna for free users”, 2026-08-06; GPT-5.6 page update, 2026-08-21. https://openai.com/index/improving-gpt-5-6-sol-in-chatgpt/ ; https://openai.com/index/gpt-5-6/
