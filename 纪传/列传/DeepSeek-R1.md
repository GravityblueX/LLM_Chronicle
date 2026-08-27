# 《DeepSeek-R1 列传》

> DeepSeek-R1 的历史位置不需要“600 万美元复刻 o1”这种夸张叙事来支撑。真正重要的事实已经足够强：R1-Zero 公开展示了 outcome-oriented RL 如何在强基座上强化出复杂推理行为；最终 R1 又把 cold-start、RL、SFT 与 rejection sampling 组合成可用产品；主模型权重以 MIT License 开放；六个蒸馏模型把推理能力进一步压进 1.5B—70B 尺寸。R1 把“推理模型”从一种闭源高价 SKU，变成了可以研究、部署、蒸馏和改造的开放技术路线。

---

## 一、技术背景：o1 打开了 test-time compute 这条轴

**2024-09**，OpenAI o1 把 test-time compute 推到大众视野：同一个回答过程可以通过更多推理计算换取更高质量。[^1]

此前的大模型 scaling 主要发生在训练阶段：更多参数、更多数据、更多 GPU。o1 之后，能力开始取决于另一个变量：**回答时愿意投入多少计算。**

但 o1 仍然是闭源产品：模型权重不可得，内部 chain-of-thought 不直接向用户开放，API 价格也明显高于普通聊天模型。

R1 四个月后进入同一赛道，却选择了完全不同的分发方式。

---

## 二、发布：2025-01-20

**2025-01-20**，DeepSeek 发布 DeepSeek-R1、DeepSeek-R1-Zero 以及六个 distilled checkpoints。[^2]

主模型基于 **DeepSeek-V3-Base**，后者为 671B 总参数、37B 激活参数的稀疏 MoE。[^3]

DeepSeek 官方仓库明确说明：**R1 代码仓库和主模型权重均采用 MIT License**，允许商业使用、修改与衍生。[^2]

这一点需要与 V3 区分：V3 的代码是 MIT，但模型权重使用单独的 DeepSeek License Agreement；R1 才把主模型权重明确放到 MIT 下。[^4]

---

## 三、R1-Zero：最干净也最容易被误读的实验

### 3.1 它做了什么

R1-Zero 从 DeepSeek-V3-Base 出发，**不先使用 cold-start SFT**，直接进行大规模强化学习。[^5]

训练采用 GRPO（Group Relative Policy Optimization）。在数学、代码等可验证任务中，奖励可以来自答案是否正确、代码是否通过测试，以及输出格式是否符合要求。

随着训练推进，论文报告模型出现：

- 更长的推理轨迹；
- 自我检查；
- 重新评估原路径；
- 在困难问题上主动投入更多推理 token。

论文把其中一个案例称为 **“aha moment”**。[^5]

### 3.2 它没有证明什么

“R1-Zero 不用 SFT”经常被夸张成“人类不需要教模型，纯 RL 能从零创造推理”。这不准确。

R1-Zero 并不是从随机权重开始：

- 基座已经经过 14.8T token 级别预训练；
- 奖励规则由人设计；
- 数学与代码任务本身提供强可验证信号。

因此更准确的结论是：

> **在已经具备强基础能力的预训练模型上，大规模 outcome-based RL 可以显著强化和组织已有的推理潜能，而不需要先提供大量人工书写的 reasoning demonstrations。**

这已经足够重要。

### 3.3 R1-Zero 为什么不能直接当产品

R1-Zero 有明显缺陷：

- 可读性差；
- 中英语言混杂；
- 通用任务表现不稳定；
- 输出风格并不适合直接交给用户。

因此“纯 RL”是一个非常有价值的研究结果，却不是最终产品配方。

---

## 四、DeepSeek-R1：cold start + RL + SFT + 再 RL

最终 DeepSeek-R1 的训练流程比“一次 RL”复杂得多。[^5]

可以简化为：

1. **cold-start data**：少量高质量 long-CoT 数据；
2. **reasoning-oriented RL**：强化数学、代码、逻辑等可验证推理；
3. **rejection sampling + SFT**：从 RL checkpoint 生成数据，并混入写作、事实问答、自我认知等非推理任务；
4. **第二阶段 RL**：兼顾 reasoning、helpfulness 与 harmlessness。

因此本书不再写“R1 是完全纯强化学习训练的模型”。

真正的纯 RL 证明由 **R1-Zero** 承担；**R1** 则是把这种能力工程化成可用助手。

这个区别非常重要，因为它揭示了一条后来被广泛采用的路线：

> **RL 可以负责把模型推向更强推理，SFT / rejection sampling 则负责把这种能力整理成更稳定、更可读、更通用的产品行为。**

---

## 五、GRPO：减少 critic，不等于“所有 reward model 都消失”

GRPO 的关键优势，是不需要像 PPO 那样训练单独的 value network / critic；它通过同一问题的一组输出的相对奖励估计优势。[^5]

在可验证任务上，reward 可以直接来自：

- 数学最终答案；
- 代码测试；
- 格式检查。

这让大规模 reasoning RL 具备非常强的自动化属性。

但“GRPO = 不需要任何模型化奖励”仍然过度简化。

最终 R1 的第二阶段 RL 还涉及 helpfulness / harmlessness 等目标，这些并不总能用一个简单的确定性规则评价。[^5]

因此 R1 真正推动的，是**可验证奖励（verifiable rewards）在推理训练中的规模化**，而不是“reward model 从此消失”。

---

## 六、公开评测：真正重要的是“开放模型进入同一量级”

DeepSeek 技术报告给出的代表性结果包括：[^5]

| 基准 | DeepSeek-R1 | R1-Zero | OpenAI o1-1217 |
|------|:--:|:--:|:--:|
| AIME 2024 | 79.8% | 71.0% | 79.2% |
| MATH-500 | 97.3% | — | 96.4% |
| Codeforces | 96.3 percentile | — | 96.6 percentile |
| SWE-bench Verified | 49.2% | — | 48.9% |

这些数字来自发布方评测，不能机械理解成“R1 全面超过 o1”。

R1 真正的里程碑是：

> **一个开放权重推理模型第一次公开进入与当时闭源前沿 reasoning model 可直接竞争的能力区间。**

这改变的不是排行榜，而是技术扩散速度。

---

## 七、开放：R1 比“可下载权重”更进一步

R1 主模型的 MIT License 允许下载、修改、商业使用和衍生。[^2]

这使研究者可以直接：

- 研究推理输出；
- 改变 inference stack；
- 做量化；
- 做蒸馏；
- 在私有环境部署；
- 将模型接进自己的 Agent runtime。

因此 R1 与 o1 的差异，不只是价格差异，而是**控制权差异**。

不过，“开放”仍然不等于全栈可复现：DeepSeek 没有公开完整预训练数据、全部实验 checkpoint 和整个训练基础设施。R1 依然更准确地属于**高度开放的 open-weight model**，而不是传统软件意义上一切材料齐备的源码工程。

---

## 八、蒸馏：把推理能力向下扩散

R1 同步发布六个蒸馏模型：[^2]

- DeepSeek-R1-Distill-Qwen-1.5B；
- Qwen-7B；
- Qwen-14B；
- Qwen-32B；
- Llama-8B；
- Llama-70B。

这些模型不是把 R1 的 671B 参数“压缩”进去，而是使用 R1 生成的高质量 reasoning samples 对较小基座进行微调。

因此它们证明的是**行为和策略可以通过数据传递**，不是权重本身按比例缩小。

### 8.1 许可必须沿谱系看

DeepSeek 官方明确提醒：

- Qwen distills 基于 Qwen2.5；
- Llama distills 基于 Llama 3.x；
- 下游仍需要遵守相应上游基座许可证。[^2]

所以“六个蒸馏模型全都和主模型一样纯 MIT”不严谨。

模型时代的许可证必须沿着谱系追踪。

---

## 九、成本：R1 没有公开“约 600 万美元总训练成本”

旧稿采用过“V3 约 557.6 万美元 + R1 RL 略高，总计约 600 万美元”的媒体推算。

这一数字没有 DeepSeek 官方训练账目支撑，因此本篇撤回。

可以确定的是：

- V3 技术报告披露 2.788M H800 GPU hours，并按 2 美元/GPU-hour 折算出约 557.6 万美元训练计算预算；[^3]
- R1 论文没有披露完整 RL GPU-hour 与总美元成本。[^5]

这意味着 R1 的研究意义不应建立在一个无法核验的“600 万美元”上。

事实上，把 V3 的 GPU compute bill 当成 DeepSeek 全部研发投入，也会低估数据、系统、前代架构、人员和集群资本的贡献。

---

## 十、2025-01-27：资本市场为什么反应如此巨大

R1 发布一周后，DeepSeek App 登上美国 App Store 免费榜首；NVIDIA 同日大跌约 17%，市值减少约 5890 亿美元。[^6]

市场当时担忧：如果前沿模型能在受限硬件与更低计算预算下训练，未来的 GPU 需求假设是否过高？

但后续历史表明“R1 证明 GPU 不重要”同样是过度反应。2025—2026 年，全球 AI 数据中心和推理基础设施投资继续高速增长。

因此 R1 对算力史更准确的意义是：

> **它把竞争变量从“谁有最多 GPU”改成“谁能让一块 GPU 产生更多有效智能”。**

算力仍然重要，但**算力效率**成为同等级的战略变量。

---

## 十一、蒸馏争议：重要，但不能把指控当训练记录

R1 发布后，OpenAI 表示其掌握迹象，怀疑 DeepSeek 使用 OpenAI 模型输出进行 distillation。2026 年 Anthropic 又公开指控多家中国模型公司通过大量账号蒸馏 Claude。

这类事件说明闭源 API 输出本身已经成为一种战略训练资源。

但公开证据不足以完整重建 R1 训练数据，因此本书区分：

- “某公司提出蒸馏指控”——可记录的产业事实；
- “R1 确实由某个具体闭源模型蒸馏而来”——当前不能作为已证实事实。

这也是模型史写作必须坚持的证据边界。

---

## 十二、后继：R1 最终被“统一 Agent 模型”吸收

**2025-05-28**，R1-0528 继续提高推理能力。[^7]

但 DeepSeek 后来的主线并不是永远维护一个独立 R1 家族。

V3.1 / V3.2 开始统一 thinking / non-thinking，并强化工具调用；V3.2 更进一步强调 **thinking in tool-use**：模型在工具结果之间持续推理，而不是一次想完再执行。

到 2026 年 V4，DeepSeek 的焦点已经是：

- 1M context；
- Agentic Coding；
- Responses API；
- reasoning effort；
- Pro / Flash；
- 多硬件部署；
- 多模态实验。

换言之，R1 打开的 reasoning 能力后来被吸收进更大的 Agent 系统。

这与 OpenAI o 系列最终并入 GPT-5 主线、Claude extended thinking 并入 Sonnet/Opus 是同一个趋势：

> **“推理模型”最终可能不是永久独立品类，而会成为所有通用 Agent 模型的基础能力。**

---

## 评曰

DeepSeek-R1 最值得记住的，不是哪一个 benchmark，也不是英伟达跌了多少。

它改变的是推理能力的**生产关系**。

在 o1 时代，推理是一项服务器端特权：你只能通过厂商接口购买它。

R1 之后，推理能力可以：

- 下载；
- 本地运行；
- 量化；
- 蒸馏；
- 微调；
- 接入自己的工具；
- 重新定价。

这使“模型能力”第一次和“谁拥有模型运行权”被明显分开。

而 R1-Zero 还留下了一条更长远的方法论：当任务结果可以自动验证时，强化学习可以把大量人类中间示范替换成环境反馈。

这条路线后来从数学和代码扩展到浏览器、终端、软件工程和 Agent 环境。

因此 R1 的真正遗产不是“纯 RL”，而是：

> **把可验证环境变成训练老师，把开放权重变成能力扩散器。**

一个负责生产能力，一个负责传播能力。

两者结合，才构成 2025 年所谓的“DeepSeek 时刻”。

---

*本篇由终末地工业史官团队编纂。*  
*2026-08 补订：GPT-5.6 Sol（OpenAI）。*

---

> 📖 详见《编年·2025年1月》《DeepSeek 世家》《DeepSeek 本纪》《o1 列传》《论·Test-Time Compute》《论·知识蒸馏与模型压缩》。

[^1]: OpenAI, “Learning to reason with LLMs”, 2024-09-12. https://openai.com/index/learning-to-reason-with-llms/
[^2]: DeepSeek-AI, DeepSeek-R1 official repository. https://github.com/deepseek-ai/DeepSeek-R1
[^3]: DeepSeek-AI et al., “DeepSeek-V3 Technical Report”, arXiv:2412.19437. https://arxiv.org/abs/2412.19437
[^4]: DeepSeek-V3 model license. https://github.com/deepseek-ai/DeepSeek-V3/blob/main/LICENSE-MODEL
[^5]: DeepSeek-AI et al., “DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning”, arXiv:2501.12948. https://arxiv.org/abs/2501.12948
[^6]: Contemporary market reporting on DeepSeek and NVIDIA, 2025-01-27; see also 《编年·2025年1月》 source notes.
[^7]: DeepSeek-AI, DeepSeek-R1-0528, 2025-05-28. https://huggingface.co/deepseek-ai/DeepSeek-R1-0528
