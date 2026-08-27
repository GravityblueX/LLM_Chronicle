# 《DeepSeek 本纪》

> DeepSeek 的特殊之处，从来不只是“便宜”。从量化基金内部研究组到全球前沿模型供应者，它把大模型竞争中几个原本被视为常数的东西——训练计算、KV Cache、激活参数、强化学习成本、上下文长度、国产硬件适配和 API 定价——一个接一个变成了可以重新设计的变量。到 2026 年，DeepSeek 已经不再只是“低价开源搅局者”：它同时经营开放权重、云 API、Agent 工具链、百万上下文、多模态实验与分层服务。

---

## 一、概述

DeepSeek（深度求索）由梁文锋主导，源自幻方量化的 AI 研究体系。它在 2023 年进入大语言模型领域，先后形成 DeepSeek-LLM、Coder、MoE、V2、V2.5、V3、R1、V3.1/V3.2 与 V4 系列。

早期外界常用一句话概括 DeepSeek：**“不靠 AI 赚钱，所以可以把模型做得极便宜。”** 这解释了部分历史，却不足以解释 2026 年的 DeepSeek。

首先，DeepSeek 的成本优势不是单靠母公司补贴，而是技术路线本身持续压缩系统成本：MoE 降低每 token 激活计算，MLA 压缩 KV Cache，FP8 提升训练吞吐，Multi-Token Prediction 提高训练效率，后续又把优化对象扩展到长上下文、工具调用、国产硬件与服务调度。[^1][^2]

其次，DeepSeek 的开放策略并非一直都是“MIT 权重”。V3 仓库的**代码**采用 MIT License，但 V3 **模型权重**使用单独的 DeepSeek License Agreement，并带有用途限制；R1 才明确把代码与主模型权重一起置于 MIT License 下。[^3][^4]

再次，2026 年的 DeepSeek 已经开始做明显的产品分层。V4-Flash 继续压低单位调用成本，而 V4-Pro 为更强 Agent 能力收取更高价格，并引入峰谷定价。DeepSeek 从“永远最便宜”走向“让不同任务购买不同档位的智能”。[^5]

因此，DeepSeek 本纪真正值得记录的主线不是“便宜”，而是：

> **不断寻找系统里最贵、最受限制的一层，然后重新设计它。**

---

## 二、起源：量化工程文化进入大模型

### 2.1 幻方背景

DeepSeek 的前身研究工作来自幻方量化。量化交易与大模型训练虽然业务完全不同，却共享一种工程文化：计算资源昂贵，吞吐、延迟、通信和数值稳定性都直接影响结果。

这种背景不应被神化成“量化基金天然会做大模型”，但它确实帮助解释了 DeepSeek 为什么从一开始就极度关注**计算效率和系统工程**，而不是只关注参数规模。

### 2.2 DeepSeek-LLM 与 Coder：先证明自己能训练基座

2023 年底，DeepSeek 发布 DeepSeek-LLM 7B / 67B 与 DeepSeek-Coder。第一代模型没有改变全球格局，但完成了两个重要准备：

- 建立中文、英文、代码等大规模预训练数据与训练管线；
- 独立研究 scaling law、长训练稳定性和开源模型对齐。

它们是后续 V2/V3 的地基，而不是“突然冒出来的 R1”之前无关紧要的前史。[^6]

---

## 三、V2：把推理成本变成架构问题

**2024-05**，DeepSeek-V2 发布。V2 使用 236B 总参数、约 21B 激活参数的 MoE，并引入 **Multi-head Latent Attention（MLA）**。[^1]

传统注意力在长序列推理中需要保存越来越大的 KV Cache。MLA 将 Key/Value 信息压缩进低维潜在表示，再在需要时恢复，从而显著降低 KV Cache 成本。

V2 的历史意义在于：DeepSeek 没有把“显存太贵”当作部署问题，而把它当作**模型架构问题**。

与此同时，V2 的低 API 价格触发了 2024 年中国大模型市场的一轮大规模降价。字节、阿里、百度、智谱等厂商随后陆续降价或推出免费档。此后，“前沿能力必须维持高 token 溢价”第一次被大规模挑战。

---

## 四、V3：真正需要校正的是“557.6 万美元”如何理解

**2024-12-26**，DeepSeek 发布 V3；技术报告披露其为 **671B 总参数、37B 激活参数**的 MoE，并报告整个训练过程消耗 **2.788M H800 GPU hours**。论文按每 GPU-hour 2 美元折算，将相应的**训练计算成本**写为约 **557.6 万美元**。[^2]

这个数字后来被大量报道简化成“DeepSeek 只花 557 万美元就开发了 V3”，这是不严谨的。

它**不等于**：

- DeepSeek 全部研发成本；
- 数据获取、清洗与存储成本；
- 前期架构实验和失败训练成本；
- 人员、机房、电力和集群建设总成本；
- 幻方此前积累 GPU 的资本开支。

它严格能够支持的说法是：**DeepSeek 技术报告给出了最终 V3 训练过程的 GPU-hour 统计，并按固定 GPU-hour 单价换算出约 557.6 万美元计算预算。**

这仍然非常重要，因为它证明前沿模型的**最终训练计算**可以被系统工程压低；但它不能被拿来证明“任何团队只要 600 万美元现金就能复制 V3”。

V3 延续 MLA 和 DeepSeekMoE，并引入 auxiliary-loss-free load balancing、Multi-Token Prediction 和 FP8 混合精度训练。[^2]

### 4.1 V3 的许可也必须拆开记

V3 仓库存在两份不同许可：

- `LICENSE-CODE`：MIT License；
- `LICENSE-MODEL`：DeepSeek License Agreement，包含特定用途限制。[^3]

因此，旧稿中“V3 模型权重 MIT 开源”的说法不准确。V3 是高度开放的开放权重模型，但不能把代码许可直接套到模型权重上。

---

## 五、R1：开放推理模型改变了全球叙事

**2025-01-20**，DeepSeek 发布 DeepSeek-R1 与 R1-Zero。R1 技术报告的核心实验是：R1-Zero 在没有先进行传统 SFT 冷启动的情况下，通过大规模强化学习出现复杂推理行为；最终 R1 再加入冷启动数据、多阶段 RL 与 SFT，以改善可读性和通用能力。[^7]

R1 使用 GRPO（Group Relative Policy Optimization），通过组内相对优势估计降低传统 PPO 类训练的部分开销。

R1 的历史影响来自三件事叠加：

1. **推理能力进入开放权重生态**；
2. **代码和主模型权重明确 MIT License**；
3. 同步发布基于 Qwen、Llama 的多档蒸馏模型，让推理能力进入更小模型。[^4]

需要注意：R1 的蒸馏模型虽然由 R1 生成数据训练，但仍继承各自基座模型的许可条件；不能把所有 distill checkpoint 简单理解为“无条件 MIT”。DeepSeek 官方仓库也明确提示了 Qwen 与 Llama 基座的上游许可。[^4]

**2025-01-27**，DeepSeek App 在美国 App Store 免费榜登顶，同日英伟达市值大幅下跌。市场把 R1 解读为对“前沿 AI 必然需要不断增加最先进 GPU”的冲击。这个反应有过度外推成分，却成为 DeepSeek 从技术项目进入全球公共议题的关键节点。[^8]

---

## 六、2025：从单次冲击走向系统化迭代

R1 之后，DeepSeek 并没有只沿着“更长思维链”一条线走。

**R1-0528** 提升推理能力并成为后续蒸馏的重要来源；V3.1 / V3.2 则进一步把 thinking / non-thinking、工具调用和 Agent 交互纳入统一模型路线。

到 V3.2，DeepSeek 开始强调 **thinking in tool-use**：模型的推理不再只发生在回答之前，而需要穿插在搜索、代码执行、外部工具结果之间。此时“推理模型”开始变成“Agent 模型”。

这一步很重要，因为 Agent 的主要成本与失败来源并不只是生成思维 token，而是**多轮环境交互**。

---

## 七、V4：效率对象扩展到百万上下文与 Agent

**2026-04-24**，DeepSeek 发布 **V4 Preview**。官方资料披露两个规模：

- **V4-Pro：1.6T 总参数 / 49B 激活参数**；
- **V4-Flash：284B 总参数 / 13B 激活参数**；
- 两者均支持 **1M token context**。[^9]

这说明 V4 不是模糊的“V3 加长上下文”，而是重新设计过的模型族。

DeepSeek 对 V4 的定位包括 Agentic Coding、世界知识、推理和长上下文。API 同时兼容 OpenAI ChatCompletions 与 Anthropic 风格接口，旧 `deepseek-chat` / `deepseek-reasoner` 名称随后退出。[^10]

旧稿把 V4 主要概括为“比 GPT-5.5 便宜 370 倍”。这个比值来自第三方媒体在特定计费假设下的换算，不能承担 V4 的核心历史判断，也不能用它反推 DeepSeek 的真实推理成本。

V4 更重要的变化是：**效率不再只指 token 单价。** 百万上下文能否稳定运行、Agent 能否连续多轮使用工具、推理服务能否适配不同硬件，开始决定一项任务的总成本。

---

## 八、2026 夏季：Flash、Pro、Vision 与价格分层

### 8.1 V4-Flash：低成本工作马

**2026-07-31**，DeepSeek 推出 V4-Flash 正式版 API 公测。官方更新强调 Agent、代码和工具使用，并原生支持 Responses API、适配 Codex。[^11]

Flash 的角色与 Google Gemini Flash 类似：不是用最高单项能力统治所有任务，而是承担高频、持续调用的生产负载。

### 8.2 V4-Pro：DeepSeek 也开始卖“更强完成率”

**2026-08-13**，V4-Pro 正式版上线。Reuters 报道称，同日 DeepSeek 调整 Pro / Flash API 定价并引入峰谷价格；V4-Pro 相比 V4-Flash 显著更贵。[^5]

这件事修正了一个常见想象：DeepSeek 并不是必然把所有模型价格压到同一极低水平。

当 Agent 执行开始消耗几十轮工具调用时，更强模型如果能减少重试、返工和人工接管，**更贵的 token 也可能带来更便宜的任务总成本**。

DeepSeek 因而进入能力分层时代：

- Flash：单位调用便宜、高吞吐；
- Pro：更强 Agent / 复杂任务能力；
- 峰谷价格：把推理需求和资源调度直接写进价目表。

### 8.3 Vision：DeepSeek 不再只是“文本效率公司”

**2026-08-21**，DeepSeek-V4-Flash-Vision-Exp 进入实验路线，说明 DeepSeek 开始把此前主要集中于文本、代码、推理的能力扩展到视觉 Agent。

因此旧稿“DeepSeek 的局限是多模态和 Agent 生态较弱”只能作为某一时点判断，不能再作为家族本质。

---

## 九、开放、国产硬件与部署政治

DeepSeek 的地缘意义不只是“美国限制芯片，中国仍训练出模型”。

出口管制确实构成硬约束，但不能简单推出“管制必然使中国更强”这种单因果结论。更准确地说：资源约束提高了**效率优化和国产硬件适配的边际价值**。

V4 时代，DeepSeek 开始更系统地适配不同国产 AI 加速器和推理栈。对中国企业而言，模型可用性因此出现多个层级：

- API 能不能调用；
- 权重能不能拿到；
- 权重能不能在本国硬件上高效运行；
- 出口管制或地区服务变化时能不能迁移。

这使 DeepSeek 从“一个模型供应者”逐渐变成中国 AI 基础设施自主性的一部分。

---

## 十、DeepSeek 的商业逻辑已经比“不靠 AI 赚钱”复杂

早期 DeepSeek 的确受益于幻方的资金和长期主义，但到 2026 年，再用“它不需要赚钱”解释所有行为已经失真。

DeepSeek 运营 API、App、开放模型生态和大规模推理基础设施，这些都存在真实成本。V4-Pro 分层定价与峰谷价格尤其说明：公司开始通过**服务质量、能力等级与资源调度**设计价格。

因此更准确的判断是：

> 幻方背景给了 DeepSeek 更强的长期投入自由，但 DeepSeek 的竞争力最终必须由技术与服务效率支撑，而不是由“无限补贴”解释。

这也让 DeepSeek 更值得研究：如果低价仅来自补贴，它的历史只是资本竞争；如果低价主要来自架构和系统创新，它改变的才是产业成本曲线。

---

## 评曰

DeepSeek 最容易被写成两个神话。

第一个神话是：**“600 万美元打败十亿美元。”**

这个说法把一个清晰的工程指标——V3 技术报告披露的训练 GPU hours 与计算成本——扩大成整个研发项目的总账。它传播力很强，但会遮蔽 DeepSeek 真正值得记录的东西：不是一次便宜训练，而是一条连续的效率工程路线。

第二个神话是：**“DeepSeek 不赚钱，所以可以永远免费。”**

V4-Pro、Flash 与峰谷定价已经说明事情没有这么简单。随着 Agent 任务变长，模型公司必须管理昂贵的实时推理、缓存、并发、工具沙箱和硬件调度。价格不会简单归零，而会越来越像云计算。

把两个神话拿掉以后，DeepSeek 的历史反而更有力量。

V2 把 KV Cache 变成架构问题；V3 把大规模 MoE 训练效率推进到新的水平；R1 把推理模型推入开放权重世界；V3.2 把推理嵌进工具循环；V4 把百万上下文、Agent 和多硬件部署放进同一个系统；V4-Flash / Pro 再把成本差异变成明确的产品分层。

所以 DeepSeek 的连续性不在“永远便宜”，而在一种工程习惯：

> **发现最昂贵的约束，重新设计它。**

只要这个习惯还在，DeepSeek 的历史就不会被某一个 benchmark、某一个价格数字或某一次股市震荡定义。

---

*本篇由终末地工业史官团队编纂：赫默（主笔）。*  
*2026-08 补订：GPT-5.6 Sol（OpenAI）。*

---

> 📖 详见《DeepSeek 世家》《DeepSeek-R1 列传》《编年·2024年12月》《编年·2025年1月》《编年·2026年4月》《编年·2026年8月》《志·推理优化》《论·推理经济学》《论·价格战》。

[^1]: DeepSeek-AI et al., “DeepSeek-V2: A Strong, Economical, and Efficient Mixture-of-Experts Language Model”, arXiv:2405.04434, 2024-05. https://arxiv.org/abs/2405.04434
[^2]: DeepSeek-AI et al., “DeepSeek-V3 Technical Report”, arXiv:2412.19437, 2024-12-27. https://arxiv.org/abs/2412.19437
[^3]: DeepSeek-V3 repository licenses: `LICENSE-CODE` (MIT) and `LICENSE-MODEL` (DeepSeek License Agreement). https://github.com/deepseek-ai/DeepSeek-V3
[^4]: DeepSeek-AI, “DeepSeek-R1”, license section. https://github.com/deepseek-ai/DeepSeek-R1
[^5]: Reuters, “DeepSeek releases official V4 Pro model as it steps up expansion”, 2026-08-13. https://www.reuters.com/world/china/deepseek-releases-official-v4-pro-model-it-steps-up-expansion-2026-08-13/
[^6]: DeepSeek-AI et al., “DeepSeek LLM: Scaling Open-Source Language Models with Longtermism”, arXiv:2401.02954. https://arxiv.org/abs/2401.02954
[^7]: DeepSeek-AI et al., “DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning”, arXiv:2501.12948. https://arxiv.org/abs/2501.12948
[^8]: Reuters, DeepSeek market reaction coverage, 2025-01-27. https://www.reuters.com/technology/artificial-intelligence/
[^9]: DeepSeek, “DeepSeek-V4 Preview: Entering the Era of Affordable Million-Token Context”, 2026-04-24. https://deepseek.com/en/news/v4-preview/
[^10]: DeepSeek API Docs, Change Log, 2026-04-24. https://api-docs.deepseek.com/updates/
[^11]: DeepSeek API Docs, “DeepSeek-V4-Flash Update”, 2026-07-31. https://api-docs.deepseek.com/updates/
