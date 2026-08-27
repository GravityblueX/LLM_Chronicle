# 《DeepSeek 世家》

> DeepSeek 从 2023 年末的 67B 开放模型起步，先以 MLA、MoE、FP8 和 MTP 把“前沿能力到底需要多少算力”变成工程问题；R1 又把推理训练的成本结构公开给全行业；到 2025 年下半年，思考模式、工具调用和稀疏注意力开始汇流；2026 年 V4 则把效率战推进到百万上下文、Agent、国产硬件适配和多模态执行。DeepSeek 最稳定的传统并不是“永远最便宜”，而是不断寻找智能系统里最贵的那一层，然后重新设计它。

---

## 一、概述：效率不是定价，是架构

DeepSeek（深度求索）源自幻方量化的 AI 研究体系。它在 2023 年进入大模型赛道时并没有最强的品牌、最多的用户或最大的云平台，却很快形成了一条异常连贯的技术路线：**不把算力昂贵当作自然规律。**[^1]

这条路线经历了几次对象转换：

- 初代 LLM 研究 **scaling law 与训练配比**；
- V2 用 **DeepSeekMoE + MLA** 攻击推理时的参数与 KV Cache 成本；
- V3 用 **FP8、MTP 和无辅助损失的 MoE 负载均衡**继续压训练与推理成本；
- R1 用强化学习把“推理能力”从昂贵闭源服务变成可公开复现的训练路线；
- V3.1 / V3.2 开始把思考能力直接嵌进工具调用和 Agent；
- V4 则进一步攻击**长上下文、长程 Agent、硬件部署与服务调度**的成本。

因此，DeepSeek 的历史如果只写成“价格屠夫”会漏掉真正重要的部分：价格只是结果，**系统效率才是因。**

---

## 二、代际演进

| 代际 | 时间 | 规模 / 形态 | 核心变化 | 历史位置 |
|------|------|-------------|----------|----------|
| DeepSeek-LLM | 2023-11 / 2024-01 | 7B / 67B | scaling law、开放基座 | 技术路线起点 |
| DeepSeek-V2 | 2024-05 | 236B / 21B active MoE | MLA + DeepSeekMoE | 把推理成本拉入主战场 |
| DeepSeek-V2.5 | 2024-09 | V2 系融合 | Chat + Coder 合流 | 通用能力与代码能力合并 |
| DeepSeek-V3 | 2024-12 | 671B / 37B active MoE | FP8、MTP、无辅助损失负载均衡 | 前沿训练效率冲击 |
| DeepSeek-R1 | 2025-01 | 基于 V3 | RL 推理、R1-Zero、GRPO | 开放推理模型的分水岭 |
| V3.1 | 2025-08 | 统一模型 | thinking / non-thinking 双模式、Agent | 推理开始进入工具执行 |
| V3.2 | 2025-12 | 稀疏注意力 + Agent | DSA、thinking in tool-use | 长程 Agent 的过渡代 |
| DeepSeek-V4 | 2026-04 | Pro 1.6T/49B；Flash 284B/13B | 1M context、CSA/HCA、mHC、Muon | 长上下文效率重构 |
| V4-Flash / V4-Pro GA | 2026-07—08 | 分层服务 | Responses API、effort、峰谷定价 | 从“低价模型”到计算服务分层 |
| V4-Flash-Vision-Exp | 2026-08-21 | 多模态实验版 | 视觉 Agent | DeepSeek 明显跨出纯文本路线 |

---

## 三、第一阶段：把“便宜”做进模型里

### 3.1 DeepSeek-LLM：安静的地基

DeepSeek 最初的 7B / 67B 模型在 2023 年末出现，技术报告于 2024 年 1 月公开。论文标题里的 **“Scaling Open-Source Language Models with Longtermism”** 已经说明了团队最初的关注：不是做一次性的榜单产品，而是研究数据、算力和模型规模怎样长期扩展。[^1]

初代模型没有改变全球市场，但它确立了两个后来反复出现的习惯：其一，技术细节公开得相对充分；其二，工程判断高度围绕投入产出比，而不是单纯把参数量当成进步尺度。

### 3.2 V2：MLA 把 KV Cache 变成一等公民

**2024-05** — DeepSeek-V2 发布，采用 **236B 总参数、约 21B 激活参数**的 MoE 架构，并引入后来成为 DeepSeek 标志的 **Multi-head Latent Attention（MLA）**。[^2]

MLA 的意义在于重新处理推理阶段最昂贵的状态之一：KV Cache。传统注意力要随着上下文增长持续保存 Key / Value；MLA 把这些表示压缩到潜在空间，再在需要时恢复，从而显著降低长上下文的内存占用。

这件事后来影响远超过 V2 本身。大模型第一次非常直观地向行业证明：**同样的模型能力，推理侧架构可以让单位 token 成本差一个数量级。** V2 发布后，中国市场迅速出现 API 降价潮，价格开始从营销变量变成模型架构的公开竞争指标。

### 3.3 V2.5：Chat 与 Coder 合流

**2024-09-05** — DeepSeek 把 DeepSeek-V2 Chat 与 DeepSeek-Coder-V2 合并为 **DeepSeek-V2.5**。官方更新明确把通用对话、代码和指令遵循收进同一模型。[^3]

这个小版本后来显得很重要：模型产品不再需要“通用”和“代码”两套完全分离的身份。2025—2026 年主流前沿模型把 coding、tool use 和 general reasoning 合流，V2.5 是 DeepSeek 自己谱系里的早期预演。

---

## 四、V3 与 R1：训练效率和推理训练同时爆发

### 4.1 DeepSeek-V3：557.6 万美元究竟意味着什么

**2024-12-26** — DeepSeek-V3 发布：**671B 总参数、37B 激活参数**，并继续采用 MLA 与细粒度 MoE。技术报告披露预训练阶段消耗约 **2.788M H800 GPU hours**；按照报告采用的每 GPU 小时 2 美元估算，对应约 **557.6 万美元的预训练计算成本**。[^4]

这里需要比旧叙事更严谨：**557.6 万美元不是整项模型研发、数据、人力和所有实验的“总成本”**，而是论文明确核算的一段训练计算开销。即使如此，这个数字依然足以冲击当时“前沿模型必然需要数亿美元训练”的默认想象。

V3 的关键技术组合包括：

- **FP8 混合精度训练**，降低训练算力与显存压力；
- **Multi-Token Prediction（MTP）**，让训练目标同时利用多个后续 token；
- **无辅助损失的负载均衡**，减少传统 MoE 为平衡专家而付出的质量代价；
- 延续 **MLA + DeepSeekMoE**，让总参数规模与每 token 实际计算量脱钩。[^4]

V3 因此不是“低价版 GPT-4o”，而是一次完整的成本工程展示。

### 4.2 DeepSeek-R1：把推理训练公开化

**2025-01-20** — DeepSeek 发布 **R1** 与 R1-Zero。R1-Zero 的实验重点是尽可能少依赖监督推理轨迹，通过强化学习直接诱导复杂推理行为；正式 R1 则加入冷启动数据与后续训练，以改善可读性、稳定性和通用能力。[^5]

R1 最重要的影响不是“某一张数学榜单追平 o1”，而是把此前极度封闭的 reasoning model 训练讨论变成公共工程对象：GRPO、规则奖励、RL scaling、蒸馏小模型以及 reasoning trace 的行为都可以被社区直接研究。

**2025-05-28** — R1-0528 继续提升推理、函数调用和前端能力，官方给出的 AIME 2025 等指标显著上升。[^6]

R1 之后，行业不再能把“推理能力”描述成某一家公司的独家黑箱。推理模型由一个昂贵产品类别，迅速变成了整个开源生态都可以复现、蒸馏和改造的技术方向。

---

## 五、V3.1 / V3.2：推理开始进入 Agent

### 5.1 V3.1：一个模型，两种思考方式

**2025-08-21** — DeepSeek-V3.1 发布。官方将其定义为**混合推理架构**：同一模型同时支持 thinking 与 non-thinking 模式，并明确强化工具使用和 Agent 能力。[^7]

这一步看似只是把 R1 的推理能力合回 V3，实际上改变了产品结构。简单任务不必为长推理付费，复杂任务又不必切换到另一个完全不同的模型。DeepSeek 从“chat / reasoner 两套模型”开始走向**一个基座、不同推理预算**。

### 5.2 V3.2-Exp 与 DeepSeek Sparse Attention

**2025-09-29** — V3.2-Exp 引入 **DeepSeek Sparse Attention（DSA）**。官方把它定位为迈向下一代架构的实验：在尽量保持模型效果的同时，减少长上下文训练和推理的注意力计算。[^8]

这使 DeepSeek 的效率攻击从“每个 token 用多少参数”“KV Cache 多大”继续推进到“**长上下文里到底需要看多少历史 token**”。

### 5.3 V3.2：Thinking in Tool-Use

**2025-12-01** — DeepSeek-V3.2 正式发布，同时推出强调极限推理的 V3.2-Speciale。V3.2 的关键变化是 **thinking in tool-use**：模型可以在思考模式中进行多轮工具调用，而不是先思考完再一次性调用工具。[^9]

官方还披露其 Agent 训练数据合成覆盖超过 1,800 个环境和 85,000 条复杂指令。此时 DeepSeek 已经明显不是“一个便宜聊天模型”，而是在构造能持续搜索、调用工具、修正路径的 Agent 基座。

---

## 六、DeepSeek-V4：效率战进入百万上下文

### 6.1 V4 Preview：不是一款模型，而是两种负载

**2026-04-24** — DeepSeek-V4 Preview 开放权重并上线 API，分为：

- **V4-Pro：1.6T 总参数 / 49B 激活参数**；
- **V4-Flash：284B 总参数 / 13B 激活参数**；
- 两者都支持 **1M token** 上下文。[^10][^11]

V4 的技术报告把长上下文效率放到核心位置，引入 **Compressed Sparse Attention（CSA）+ Heavily Compressed Attention（HCA）** 的混合注意力、**Manifold-Constrained Hyper-Connections（mHC）** 与 **Muon optimizer**。官方报告称，相比 V3.2，在百万 token 上下文设置下，V4-Pro 的单 token 推理 FLOPs 和 KV Cache 均显著下降。[^10]

这一步把 DeepSeek 过去三年的路线串在了一起：MLA 解决 KV 表示，DSA 减少注意范围，V4 再把稀疏与压缩注意力推到 1M context。**长上下文不是加一个数字，而是重新设计推理成本函数。**

Reuters 同日还报道 V4 对华为 Ascend 集群的适配与支持。硬件适配开始成为模型代际的一部分：效率不再只发生在 Transformer 内部，也发生在芯片、并行策略和推理引擎之间。[^11]

> 📖 详见《编年·2026年4月》。

### 6.2 V4-Flash：便宜的 Agent 工作马

**2026-07-31** — V4-Flash 正式版进入公开测试。官方强调这次主要是 post-training 更新，显著强化代码 Agent、工具调用和生产型任务，并原生支持 Responses API、适配 Codex。[^12]

Reuters 随后援引 Artificial Analysis 数据，将 V4-Flash 描述为当时知名模型中运行成本最低的一档：约 **$0.14 / 1M 输入 tokens、$0.28 / 1M 输出 tokens**。[^13]

这延续了 DeepSeek 的传统，但也埋下了下一步变化：如果 Flash 负责极低成本，那么 Pro 就可以开始出售更高的任务完成率。

### 6.3 V4-Pro GA：DeepSeek 也开始卖“旗舰溢价”

**2026-08-13** — V4-Pro 正式版上线 App、Web 与 API，显著加强 Agent 能力，支持 Responses API，并加入 low / high / max 三档 thinking effort。官方同时宣布 V4 家族改为**峰谷定价**。[^12]

Reuters 报道当时 V4-Pro 定价约为 **$1.32 / 1M 输入、$3.96 / 1M 输出**，分别约为 V4-Flash 的 9 倍和 14 倍。[^14]

这件事修正了早期对 DeepSeek 的一种简单想象：它不是永远只把价格往下压。到了 V4，DeepSeek 也开始明确区分**廉价高吞吐负载**和**高完成率复杂 Agent 负载**，甚至用峰谷价引导用户错峰使用算力。

所谓“模型价格”正在越来越像计算资源市场，而不是软件许可证。

### 6.4 V4-Flash-Vision-Exp：文本效率路线第一次明显跨模态

**2026-08-21** — DeepSeek 发布 **V4-Flash-Vision-Exp**。官方称其纯文本能力与 V4-Flash 大致持平，但在需要视觉理解的 Agent benchmark 上有显著提升，并将多模态 Agent 能力推近 Opus 4.8。[^12]

这使旧稿里“DeepSeek 主要局限于文本推理、多模态存在感较弱”的判断正式过期。

DeepSeek 进入视觉并不是为了做一个独立“看图聊天”产品，而是为了补齐 **computer use、图表、网页、截图、视觉工具环境**中的 Agent 输入。它仍然沿着同一条主线前进：不是追求模态数量，而是补足长期任务执行里真正缺失的感知通道。

---

## 七、重新理解 DeepSeek 的技术主线

如果只看新闻标题，DeepSeek 的标签会不断变化：价格屠夫、R1、国产替代、开源模型、华为适配、Agent、百万上下文。

把模型谱系连起来，主线反而很稳定：

| 阶段 | 最昂贵的瓶颈 | DeepSeek 的回答 |
|------|--------------|-----------------|
| 初代 | 训练规模怎么配 | scaling law |
| V2 | KV Cache / 激活参数 | MLA + MoE |
| V3 | 训练精度、样本利用率、专家路由 | FP8 + MTP + loss-free balancing |
| R1 | 推理能力训练 | RL / GRPO |
| V3.1 | 快思考与慢思考割裂 | hybrid reasoning |
| V3.2 | 长上下文注意力与 Agent 工具循环 | DSA + thinking in tool-use |
| V4 | 百万上下文、长程 Agent、硬件与服务调度 | CSA/HCA + mHC + 分层模型 + 峰谷定价 |
| V4 Vision | Agent 缺少视觉环境输入 | 多模态感知 |

因此 DeepSeek 的“效率”定义一直在扩大：最早是**每个训练 token 的成本**，后来是**每个生成 token 的成本**，再后来是**完成一整项 Agent 工作的成本**。

---

## 八、开放权重与基础设施

DeepSeek 对开放生态的影响也发生了变化。

V3、R1、V3.2 让开发者可以研究训练方法和权重；V4 则进一步迫使推理框架适配新注意力结构。V4 发布当天，vLLM、SGLang 等社区迅速跟进支持，说明前沿开放模型的竞争已经不只是“谁把 checkpoint 上传到 Hugging Face”，而是**谁能让整个推理栈一起工作**。[^15]

2T 级以下的开放模型仍然可能在本地或小型集群运行，但 V4-Pro 这种 1.6T MoE 已经天然要求复杂的专家并行、KV 管理和集群调度。开放权重并不会自动带来低部署门槛。

这与 2026 年整个行业的变化一致：**权重开放解决控制权，系统软件与硬件效率决定可用性。**

---

## 评曰

DeepSeek 最容易被记成“把 API 卖得特别便宜的公司”，但这是一个过于表面的结论。

V2 的 MLA、V3 的 FP8 / MTP、R1 的强化学习、V3.2 的稀疏注意力、V4 的百万上下文压缩，本质上都在做同一件事：**拒绝接受行业当前最昂贵的那一步是不可改变的。**

有时候最贵的是训练，于是压训练；有时候最贵的是 KV Cache，于是重新表示 KV；有时候最贵的是推理时思考，于是研究 RL 和 effort；有时候最贵的是百万 token 历史，于是稀疏和压缩注意力；有时候最贵的是 GPU 高峰期，于是连 API 也做峰谷调度。

这也解释了为什么 2026 年的 DeepSeek 和 2025 年初已经不同。R1 时代它最醒目的身份是“开放推理能力”；V4 时代它更像一家研究**智能计算系统成本结构**的实验室。模型、Agent、硬件、推理框架和价格开始被放进同一张账本。

而 V4-Flash-Vision-Exp 又修正了另一个旧判断：DeepSeek 并没有被“文本模型”这个身份锁死。它进入视觉不是为了多一个产品标签，而是因为 Agent 要真正操作世界，就必须看见世界。

所以 DeepSeek 世家的长期命题已经不只是“前沿 AI 能不能更便宜”，而是：

**当智能开始持续运行、调用工具、读取百万上下文并占用真实计算资源时，能否把完成一整项工作的边际成本继续压下去。**

只要这个问题仍然存在，DeepSeek 的技术路线就仍然有位置。

---

*本篇由终末地工业史官团队编纂：赫默（编年主笔）。*  
*2026-08 补订：GPT-5.6 Sol（OpenAI）。*

---

[^1]: DeepSeek-AI et al., “DeepSeek LLM: Scaling Open-Source Language Models with Longtermism”, arXiv:2401.02954. https://arxiv.org/abs/2401.02954
[^2]: DeepSeek-AI, “DeepSeek-V2: A Strong, Economical, and Efficient Mixture-of-Experts Language Model”, arXiv:2405.04434. https://arxiv.org/abs/2405.04434
[^3]: DeepSeek API Docs, “DeepSeek V2 Chat & DeepSeek Coder V2 Upgraded to DeepSeek V2.5”, 2024-09-05. https://api-docs.deepseek.com/updates/
[^4]: DeepSeek-AI et al., “DeepSeek-V3 Technical Report”, arXiv:2412.19437. https://arxiv.org/abs/2412.19437
[^5]: DeepSeek-AI et al., “DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning”, arXiv:2501.12948. https://arxiv.org/abs/2501.12948
[^6]: DeepSeek API Docs, “DeepSeek-R1-0528 Release”, 2025-05-28. https://api-docs.deepseek.com/updates/
[^7]: DeepSeek API Docs, “DeepSeek-V3.1”, 2025-08-21. https://api-docs.deepseek.com/updates/
[^8]: DeepSeek, “Introducing DeepSeek-V3.2-Exp”, 2025-09-29. https://api-docs.deepseek.com/news/news250929/
[^9]: DeepSeek, “DeepSeek-V3.2: Pushing the Frontier of Open Large Language Models”, 2025-12-01. https://www.deepseek.com/en/news/deepseek-v3-2/
[^10]: DeepSeek, “DeepSeek-V4 Preview: Entering the Era of Affordable Million-Token Context”, 2026-04-24. https://deepseek.com/en/news/v4-preview/
[^11]: Reuters, “DeepSeek-V4, the Chinese AI model adapted for Huawei chips”, 2026-04-24. https://www.reuters.com/world/china/deepseek-v4-chinese-ai-model-adapted-huawei-chips-2026-04-24/
[^12]: DeepSeek API Docs, “Change Log” — V4-Flash (2026-07-31), V4-Pro GA (2026-08-13), V4-Flash-Vision-Exp (2026-08-21). https://api-docs.deepseek.com/updates/
[^13]: Reuters, “DeepSeek's new AI model is by far the cheapest of well-known models to run, research firm says”, 2026-08-03. https://www.reuters.com/business/retail-consumer/deepseeks-new-ai-model-is-by-far-cheapest-well-known-models-run-research-firm-2026-08-03/
[^14]: Reuters, “DeepSeek launches V4 Pro at prices up to 14 times higher than V4 Flash”, 2026-08-13. https://www.reuters.com/world/china/deepseek-releases-official-v4-pro-model-it-steps-up-expansion-2026-08-13/
[^15]: vLLM Team, “DeepSeek V4 in vLLM: Efficient Long-context Attention”, 2026-04-24. https://vllm.ai/blog/deepseek-v4