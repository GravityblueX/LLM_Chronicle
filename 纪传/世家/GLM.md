# 《GLM 世家》

> GLM 最初的历史地位来自“不是 GPT 的 Transformer”：自回归空白填充、ChatGLM-6B、消费级显卡上的中文对话。到 2026 年，这条故事已经发生了根本变化。GLM-5.x 的竞争重点不再是坚持一套不同的预训练范式，而是**长程 Agent、低激活 MoE、百万上下文、多模态，以及如何在国产 AI 芯片上把前沿模型真正跑起来。**

---

## 一、概述

GLM（General Language Model）由清华系团队发展，智谱 AI / Z.ai 将其从学术预训练模型推进为商业模型家族。

如果按历史阶段看，GLM 有三种不同身份：

1. **2022：架构实验**——GLM-130B 代表对统一理解与生成的一种探索；
2. **2023—2024：中文开源入口**——ChatGLM-6B 及后续版本让消费级硬件第一次较容易运行中文对话模型；
3. **2025—2026：Agent 与基础设施模型**——GLM-5.x 转向复杂 coding、长程任务、多模态与国产 serving。

因此，旧稿把 GLM 概括为“学术团队坚持少数派架构”，已经不能解释它后来的路线。

---

## 二、GLM-130B：学术原点

2022 年，GLM-130B 发布。其核心预训练思想来自 autoregressive blank infilling：通过遮盖片段再自回归生成，试图统一语言理解与生成。[^1]

在 GPT 式 decoder-only Transformer 后来成为主流之后，这条路线没有成为行业标准。但 GLM-130B 的历史位置仍然存在：它证明中文团队可以训练并开放百亿级、百十亿级以上的大模型研究资产。

真正改变中文开发者生态的，并不是 130B，而是随后缩小到 6B 的 ChatGLM。

---

## 三、ChatGLM：可运行性比参数纪录更重要

### 3.1 ChatGLM-6B：时间窗口的价值

**2023-03**，ChatGLM-6B 发布。[^2]

它的重要性不是同期最强，而是：

- 中文对话可用；
- 量化后可在消费级 GPU 运行；
- 提供较完整的本地部署与微调路径。

在 Llama 中文能力、许可证和部署生态都尚未成熟的时间窗口里，ChatGLM 成为许多中文开发者第一次真正“在自己机器上跑大模型”的入口。

### 3.2 ChatGLM2 / 3：从聊天走向工具

后续 ChatGLM2 提升长上下文和推理效率；ChatGLM3 加入 function call、代码解释器等工具能力。

这时 GLM 已经开始从“对话模型”转向“可以接工具的模型”。这种变化后来在 GLM-5 系列成为主线。

---

## 四、GLM-4：多模态与产品化

2024 年 GLM-4 系列进一步扩展上下文、视觉理解与工具调用，并同时存在开放模型和商业 API。

这一阶段最重要的不是某个单项 benchmark，而是 GLM 的公司形态发生变化：

> **开源模型负责扩大采用，商业模型和平台负责企业交付。**

这和中国其他模型公司的路线开始趋同。

---

## 五、GLM-5：竞争单位变成长程任务

到了 GLM-5 系列，智谱 / Z.ai 越来越多地把模型放在 coding agents、long-horizon tasks 和真实软件环境中评估。

这意味着性能单位发生变化：

过去问“这道题做对了吗”；

后来问“这个 GitHub issue 修好了吗”；

再后来问“一个包含搜索、代码、文件、浏览器和多轮反馈的任务最终完成了吗”。

GLM 的后训练也因此越来越围绕长程环境和可验证任务展开。

---

## 六、GLM-5.3：后训练本身成为主角

**2026-08-14**，Z.ai 发布 GLM-5.3。官方说明这一版本与 GLM-5.2 使用相同 base model，主要能力提升来自继续扩大 post-training：更多环境、更丰富的长程任务和更多后训练计算。[^3]

这个节点很值得记录，因为它说明 2026 年的 scaling 已经不再只有预训练：

> **同一个基座，可以通过更大规模的真实任务环境和后训练继续显著变强。**

这与《Scaling Law》《Test-Time Compute》中的新阶段相呼应：模型能力的计算预算已经从 pretraining 延伸到 post-training 和 runtime。

---

## 七、GLM-5.3-Flash：18B 激活参数与百万上下文

**2026-08-26**，Z.ai 发布 **GLM-5.3-Flash**。[^4]

官方披露：

- **320B 总参数**；
- **18B active parameters**；
- GLM-5 系列首个原生多模态模型；
- 训练使用约 30T token 多模态语料；
- 混合 sparse + linear attention；
- 采用 mHC（Manifold-Constrained Hyper-Connections）；
- 支持最高约 **1M token** 上下文；
- 权重公开，可通过 Hugging Face 获取。

这里最值得注意的是“320B / 18B”。

GLM 的竞争单位已经和整个行业一样从**总参数**转向**激活计算**。真正决定 serving 成本的，不是模型名义上多大，而是每个 token 实际经过多少参数、attention 与 KV cache 需要多少资源。

### 7.1 为什么 Flash 不只是“小模型”

GLM-5.3-Flash 并不是把模型简单缩小，而是围绕低成本 inference 重新设计：

- active parameters 大幅减少；
- hybrid attention 降低长上下文计算；
- IndexPool 压缩索引开销；
- multimodal encoding / prefill / decode 可以拆开调度。

因此“Flash”在 2026 年越来越不是“旗舰的廉价阉割版”，而是一种专门面向生产负载的架构方向。

这与 Gemini 3.7 Flash、DeepSeek V4-Flash 构成了同一历史趋势。

---

## 八、国产 AI 芯片 serving：GLM 路线最重要的新变量

GLM-5.3-Flash 发布前，Z.ai 以 **Ox Alpha** 的匿名身份在真实流量中测试模型。官方称这些流量全部由**国产 AI 芯片**提供 serving。[^4]

更重要的是，Z.ai 详细披露了其基础设施工作：

- 在国产加速器集群上部署；
- 基于 SGLang 构建专用 inference engine；
- 使用 W8A8、混合 INT8/FP8/BF16 cache quantization；
- 采用 Encode–Prefill–Decode（EPD）解耦架构；
- 面向数万张国产加速器进行独立 worker pool 调度；
- 官方称相对早期 baseline 获得约 3× 端到端 serving 提升。

这个节点改变了“国产替代”的含义。

过去经常问：

> 国产芯片能不能训练 / 跑大模型？

2026 年更准确的问题变成：

> **国产硬件能不能长期承受真实前沿模型生产流量，并把单位 token 成本压到可竞争范围？**

GLM-5.3-Flash 提供了一个明确的工程案例。

---

## 九、模型帮助优化自己的 serving stack

Z.ai 还披露，GLM-5.3-powered infrastructure agent 参与了 kernel 开发、性能瓶颈诊断和 serving stack 优化。[^4]

这件事虽然仍是厂商自述，却很有历史意味：

> **Agent 不只替人写应用代码，也开始参与优化承载自己的底层系统。**

软件工程 Agent、基础设施 Agent 和模型 serving 因此开始形成反馈循环。

这和 2023 年的 ChatGLM 已经是完全不同的世界。

---

## 十、重新评价 GLM

旧稿习惯把 GLM 解释成“教授团队的架构坚持”。这种写法有两个问题：

第一，它容易把创始背景写成技术决定论；

第二，它无法解释 GLM-5.3-Flash 这样的产品——这里真正核心的是 MoE 激活效率、长上下文、后训练、Agent 环境和硬件协同，而不是早期 blank infilling 本身。

更合适的分期是：

| 阶段 | GLM 的核心问题 |
|---|---|
| GLM-130B | 能不能走一条不同的预训练路线 |
| ChatGLM | 能不能让中文模型真正跑到开发者机器上 |
| GLM-4 | 能不能覆盖多模态、长上下文与工具调用 |
| GLM-5.x | 能不能完成复杂长程 Agent 工作 |
| GLM-5.3-Flash | 能不能以低激活参数和国产硬件大规模 serving |

这条线比“坚持非标准架构”更能解释 GLM 的历史连续性：

> **GLM 一直在寻找让模型真正可用的下一层瓶颈。**

---

## 评曰

ChatGLM-6B 的历史价值，是让很多中文开发者第一次发现：大模型并不只存在于远端 API，它真的可以在自己手里的显卡上运行。

三年后，GLM-5.3-Flash 又把同一个问题推到了完全不同的规模：

不是“一张显卡能不能跑”，而是“数万张国产加速器能不能稳定承受百万上下文、多模态、Agent 生产流量”。

这看似从小模型走向大集群，实际上仍是同一个主题——**可运行性**。

因此 GLM 世家的长期意义不一定是某种预训练架构最终胜出。它更可能在两个时代各留下一个基础设施节点：

- 2023：中文本地模型的可运行性；
- 2026：国产硬件上的前沿 Agent serving。

当大模型从论文进入生产系统以后，谁的模型更漂亮只是问题的一部分。能不能在真实硬件上长期、稳定、便宜地跑，越来越决定模型究竟有没有历史影响力。

---

*本篇由终末地工业史官团队编纂：伊冯（架构审计）。*  
*2026-08 补订：GPT-5.6 Sol（OpenAI）。*

---

[^1]: Du et al., “GLM: General Language Model Pretraining with Autoregressive Blank Infilling”. https://arxiv.org/abs/2103.10360
[^2]: THUDM, ChatGLM-6B repository, 2023-03. https://github.com/THUDM/ChatGLM-6B
[^3]: Z.ai, “GLM-5.3: Frontier Coding with Emergent Cyber Capabilities”, 2026-08-14. https://z.ai/blog/glm-5.3
[^4]: Z.ai, “GLM-5.3-Flash: Frontier Intelligence, Flash Cost”, 2026-08-26. https://z.ai/blog/glm-5.3-flash