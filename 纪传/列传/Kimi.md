# 《Kimi 列传》

> Kimi 是月之暗面（Moonshot AI）自 2023 年起发展的模型与产品体系。它最初靠“超长上下文”让普通用户第一次直观感受到大模型上下文窗口的意义；2025 年之后，又沿着强化学习推理、开放权重 MoE、原生多模态与 Agent 并行执行一路演化。到 2026 年的 Kimi K3，Kimi 已经不再只是“能读很长文档的聊天助手”，而成为一条试图把开放权重、长上下文、多模态和 Agent 工程合到同一模型体系里的技术路线。

---

## 一、月之暗面：从产品标签切入大模型竞争

月之暗面成立于 2023 年，创始人为杨植麟。公司在中国大模型创业潮最密集的阶段进入市场，与智谱、百川、MiniMax、零一万物等新公司同场竞争；阿里巴巴后来成为其重要投资方之一。[^1]

与一些一开始就强调“通用基座能力”的公司不同，月之暗面的早期差异化非常明确：**先把长上下文做成用户能够直接感知的产品能力。**

这是一种很典型的“技术叙事产品化”。参数规模、训练 token 数、benchmark 分数对普通用户都很抽象，但“可以一次上传一本书”“可以读完整份财报”是具体的。Kimi 早期真正建立品牌认知的，不是某张榜单第一，而是把“上下文窗口”从技术报告中的参数变成了日常产品体验。

---

## 二、Kimi 的发布与长上下文策略

**2023 年 10 月**，Kimi 智能助手上线，早期版本即以长上下文和文档阅读为核心卖点。随后在 **2024 年 3 月**，Kimi 宣布支持约 200 万汉字的超长上下文。[^2]

这项能力之所以有传播力，并不只是因为窗口数字很大，而是因为产品界面围绕它重新组织：PDF、Word、网页和长文本可以直接成为一次对话的输入。学生上传教材、分析师上传年报、研究者上传论文，用户不再需要手工把材料切成几十段。

### 2.1 从参数到产品

Kimi 的早期成功说明了一件很重要的事：**大模型的技术参数只有被翻译成使用动作，才会成为品牌。**

对普通用户来说，“128K”“1M tokens”本身没有意义；“它能一次读完这本书”才有意义。Kimi 把长上下文变成了中国 AI 产品竞争中第一个真正广泛传播的技术标签之一。

### 2.2 “能装下”不等于“能用好”

长上下文同时暴露出另一个问题：窗口越大，不代表模型越能稳定利用窗口里的每一部分信息。研究中著名的 “Lost in the Middle” 现象表明，模型往往更容易利用上下文首尾的信息，而忽略中间部分。[^3]

此外，超长上下文会放大推理成本、KV Cache、延迟和上下文管理问题。于是行业很快从“谁的窗口最长”转向更难的问题：**如何检索、压缩、记忆、管理和真正利用长上下文。**

---

## 三、K1.5：从“读得长”走向“想得久”

**2025 年 1 月**，月之暗面发布 **Kimi K1.5**。技术报告将它描述为通过强化学习扩展推理能力的多模态模型，并特别强调 long-context scaling 与 reinforcement learning 的结合。[^4]

K1.5 在数学、代码和视觉推理等任务上表现突出。它的意义不只是进入了当时最热的“推理模型”竞争，更在于 Kimi 第一次明显改变自己的技术主叙事：

**2023—2024 年，Kimi 的核心问题是“模型一次能看多少”；到 2025 年，问题开始变成“模型看完以后能推演多久、能否完成复杂任务”。**

K1.5 与 DeepSeek-R1 几乎在同一时期进入公众视野，因此新闻声量被 R1 的开放权重和低成本冲击部分盖过。但从 Kimi 自身谱系看，K1.5 是后续 K2 Agent 路线的重要过渡：强化学习不再只用于提高回答正确率，而开始为更长程的行动与工具使用做准备。

> 📖 详见《编年·2025年1月》（Kimi K1.5 专题）。

---

## 四、Kimi K2：从聊天产品转向开放 Agent 基座

**2025-07-11** — 月之暗面正式发布并开放 **Kimi K2** 权重。K2 采用 MoE 架构，**1T 总参数、32B 激活参数**，预训练约 15.5T tokens；官方同时强调 MuonClip 优化器以及面向工具使用、代码和 Agent 任务的训练。[^5]

这一步改变了 Kimi 的位置。此前 Kimi 首先是一个消费级产品品牌；K2 则第一次把月之暗面放进全球开放权重基座模型竞争里。Reuters 当时也把这次发布放在中国模型公司集体转向开放路线的背景下观察。[^1]

K2 的关键词不再是“长文本”，而是 **Open Agentic Intelligence**。官方把 K2-Instruct 明确定位为通用聊天与 Agent 场景的后训练版本，而不是单纯的问答模型。[^5]

**2025-09-05** — K2-0905 更新增强编码、前端开发和工具调用能力，并把上下文从 128K 扩展到 **256K tokens**。[^6]

**2025-11-06** — Moonshot Open Platform 正式上线 **Kimi K2 Thinking** 及 Turbo 版本。[^7]

从 K1.5 到 K2 Thinking，可以看到“推理”开始被吸收到 Agent 体系里：模型不是为了展示更长的思维链而推理，而是为了决定下一次搜索、下一次工具调用和下一步代码修改。

---

## 五、K2.5 与 K2.6：原生多模态，以及 Agent Swarm

**2026-01-27** — 月之暗面发布 **Kimi K2.5**。它仍延续 K2 的 1T / 32B MoE 主体，但通过约 15T 图文混合 tokens 的持续预训练加入原生多模态能力，支持 256K 上下文，并同时提供 instant / thinking、对话 / Agent 等不同工作模式。[^8]

K2.5 更值得注意的变化是 **Agent Swarm**。官方不再只让一个 Agent 串行执行所有步骤，而是允许主模型主动拆解任务，再动态创建多个子 Agent 并行执行搜索、分析和工具任务。[^8]

这意味着 Kimi 的扩展路线发生了又一次变化：

- K1.5 主要扩展**单次推理深度**；
- K2 主要扩展**工具调用与 Agent 能力**；
- K2.5 开始扩展**并行 Agent 数量**。

**2026-04-20** — Kimi K2.6 发布并开放。Moonshot 的 Agent 文档称，K2.6 对 Swarm 进行明显扩展，单任务可协调最多约 **300 个子 Agent**、超过 **4,000 次工具调用**，官方测试中相较单 Agent 串行执行约快 4.5 倍。[^9]

这里的“规模化”已经不是单纯增加模型参数，而是在推理阶段横向扩展执行主体。大模型系统开始出现类似分布式计算的思路：不是让一个上下文里的模型无限思考，而是把工作拆散、并行，再汇总。

---

## 六、Kimi K3：3T 级开放前沿模型

**2026-07-16** — 月之暗面发布 **Kimi K3**。官方称其为首个开放的 3T 级模型：**2.8T 总参数、104B 激活参数**，原生支持视觉，并把上下文扩展到 **1,048,576 tokens**。[^10][^11]

K3 并不是简单把 K2 放大。它引入了 **Kimi Delta Attention（KDA）**、**Gated MLA**、**Attention Residuals（AttnRes）** 与 Stable LatentMoE；模型共有 896 个专家，每个 token 选择其中 16 个。官方称这一组合相对 K2 获得约 2.5 倍的整体 scaling efficiency 改善。[^10]

K3 的目标任务也非常明确：长时间代码工程、大型仓库操作、终端工具编排、深度研究、知识工作和多模态 Agent，而不是只追求聊天榜单分数。官方公开评测把它与 GPT-5.6 Sol、Claude Fable 5 等闭源前沿模型直接并列比较。[^10]

**2026-07-27** — K3 完整权重公开；同期发布的技术报告进一步确认 2.8T / 104B、百万 token 上下文和新的混合注意力架构。[^12]

> 📖 详见《编年·2026年7月》。

### 6.1 “开放”也重新变得复杂

K3 的规模同时暴露出开放权重路线的新矛盾：**权重可以开放，但运行它本身越来越不像个人开发者能够完成的事情。**

2.8T 参数意味着真正高吞吐的部署高度依赖大型推理集群和云服务。到 **2026-08-26**，Reuters 报道 Moonshot 正与 Microsoft、Amazon、Google 洽谈 K3 云托管的收入分成安排。[^13]

这形成了一种很有意思的新结构：模型权重可以由一家中国创业公司开放，但大规模商业分发仍可能依赖美国云平台。所谓“开放模型生态”，已经不只是许可证问题，还包括芯片、推理引擎、云托管、计费和跨境治理。

---

## 七、重新理解月之暗面的位置

如果只看 2023—2024 年，会很容易把月之暗面概括成一家“靠长上下文出圈的产品公司”。到 K3 以后，这个概括已经不够用了。

| 阶段 | 代表版本 | 核心问题 | Kimi 的答案 |
|------|----------|----------|-------------|
| 2023—2024 | Kimi | 一次能读多少？ | 把超长上下文产品化 |
| 2025-01 | K1.5 | 能不能进行长程推理？ | 强化学习 + 推理 scaling |
| 2025-07 | K2 | 能不能真正行动？ | 开放权重 MoE + 工具调用 + Agent |
| 2026-01—04 | K2.5 / K2.6 | 一个 Agent 太慢怎么办？ | 原生多模态 + Agent Swarm |
| 2026-07 | K3 | 开放模型能否进入前沿工作负载？ | 2.8T MoE + 1M context + 长程 Agent |

这条路线最大的连续性其实仍然是“长程”。早期是**长上下文**，后来是**长推理**，再后来是**长时间任务执行**。表面上技术标签换了几次，底层问题却很一致：怎样让模型在更大的信息与时间尺度上保持有效工作。

它也解释了为什么 Kimi 没有简单复制 DeepSeek。DeepSeek 最具代表性的优势长期是训练与推理效率以及开放生态；Kimi 则逐渐把差异化押在“**超长上下文 + 原生多模态 + 长程 Agent + 并行执行**”的组合上。

---

## 评曰

Kimi 最早让人记住的是“200 万字”。这件事看起来像营销，但其实决定了它此后几年的路线。

它第一次证明：大模型能力必须经过一次“翻译”才能成为产品。上下文窗口从论文参数，被翻译成“上传一本书”；强化学习从训练方法，被翻译成“模型会先推理再行动”；Agent 从工具调用能力，被翻译成“把整项工作交给它”；到了 Agent Swarm，横向扩展又被翻译成“让许多个子 Agent 同时干活”。

因此，Kimi 的演化并不是不断追逐行业热点那么简单。它真正持续追逐的是一个问题：**怎样扩大 AI 一次能够处理的工作尺度。**

2023 年，这个尺度用“字数”衡量；2025 年开始用“推理步骤”和“工具调用”衡量；2026 年已经要用“任务持续时间、子 Agent 数量、代码仓库规模和并行工作量”衡量。

这也让 K3 成为一个比参数数字更有意义的节点。2.8T 参数当然醒目，但更值得记录的是：一个最初因为“能读长文”出名的中国 AI 产品，三年后变成了一个试图用开放权重模型承担长程工程和知识工作的系统。Kimi 的品牌标签变了，问题意识却没有变。

---

*本篇由终末地工业史官团队编纂：赫默（列传主笔）；2026-08-28 补订至 Kimi K3。*

---

[^1]: Reuters, "China's Moonshot AI releases open-source model to reclaim market position", 2025-07-11. https://www.reuters.com/business/media-telecom/chinas-moonshot-ai-releases-open-source-model-reclaim-market-position-2025-07-11/
[^2]: 每日经济新闻, "时隔5个月，Kimi从20万字到200万字，月之暗面‘长文本时代’一路狂奔", 2024-03-18. https://www.nbd.com.cn/articles/2024-03-18/3285223.html
[^3]: Liu et al., "Lost in the Middle: How Language Models Use Long Contexts", arXiv:2307.03172, 2023. https://arxiv.org/abs/2307.03172
[^4]: Moonshot AI, "Kimi k1.5: Scaling Reinforcement Learning with LLMs", arXiv:2501.12599, 2025-01-21. https://arxiv.org/abs/2501.12599
[^5]: Moonshot AI, "Kimi K2: Open Agentic Intelligence", GitHub. https://github.com/MoonshotAI/Kimi-K2
[^6]: Moonshot AI, "Kimi K2-0905 update", Kimi Forum, 2025-09-05. https://forum.moonshot.ai/t/kimi-k2-0905-update/81
[^7]: Kimi Open Platform, "New Feature Release Log" — 2025-11-06: Kimi K2 Think / Turbo. https://platform.kimi.ai/blog/posts/changelog
[^8]: Moonshot AI, "Kimi K2.5: Open Visual Agentic Intelligence", GitHub; Kimi Help Center, Agent overview. https://github.com/MoonshotAI/Kimi-K2.5 ; https://www.kimi.com/en/help/agent/agent-overview
[^9]: Kimi Help Center, "Agent Swarm" — K2.6 release and Swarm scaling, 2026-04-20. https://www.kimi.com/en/help/agent/agent-swarm
[^10]: Moonshot AI, "Kimi K3: Open Frontier Intelligence", GitHub. https://github.com/MoonshotAI/Kimi-K3
[^11]: Reuters, "China's Moonshot unveils world's largest open AI model, closing in on US rivals", 2026-07-17. https://www.reuters.com/world/china/chinas-moonshot-unveils-worlds-largest-open-ai-model-closing-us-rivals-2026-07-17/
[^12]: Moonshot AI, "Kimi K3: Open Frontier Intelligence", arXiv:2607.24653; Kimi Help Center, Agent overview. https://arxiv.org/abs/2607.24653 ; https://www.kimi.com/en/help/agent/agent-overview
[^13]: Reuters, "China's Moonshot in talks with Microsoft, Amazon, Google over K3 revenue sharing, sources say", 2026-08-26. https://www.reuters.com/business/retail-consumer/chinas-moonshot-talks-with-microsoft-amazon-google-over-k3-revenue-sharing-2026-08-26/
