# Scaling Law 的终结与重生：从训练幂律到工作规模化

> Scaling Law 没有“死”，但到 2026 年，继续把它理解成“参数、数据、训练 FLOPs 越多越强”已经太窄。Kaplan 研究的是训练 loss 的幂律；Chinchilla 研究固定 compute 下参数与数据怎样分配；o1 和 R1 让推理时计算成为显性资源；GPT-5.5 / 5.6、Kimi Agent Swarm 和多 Agent 工程又进一步证明，一项任务还可以通过并行搜索、工具调用、子 Agent 和环境反馈扩大计算。Scaling 的对象已经从**模型训练**扩展到**完成工作本身**。

---

## 一、Kaplan：性能第一次看起来可以被“预购”

**2020 年**，Kaplan 等人的《Scaling Laws for Neural Language Models》系统描述语言模型 loss 与参数量、数据量、训练 compute 之间的幂律关系。[^1]

这篇论文最重要的产业影响不是某个具体指数，而是一种预期：

> **如果给更多 compute，模型性能可以在相当范围内可预测地改善。**

GPT-3 175B 是这条路线最著名的早期工业实践之一。

在那个阶段，scaling 的对象基本等于**预训练规模**。

---

## 二、Chinchilla：第一次修正的是 compute allocation

**2022 年**，Chinchilla 研究指出，固定训练 compute 下，很多前沿模型参数过大、数据不足。70B Chinchilla 使用更多训练 token，可以超过 280B Gopher。[^2]

Chinchilla 不是“反 scaling”。

它真正做的是：

> **把“扩大规模”从参数单轴改成参数 × 数据的最优资源分配问题。**

这也是 scaling law 史上第一条重要教训：

**更多资源有用，但资源放错地方会浪费。**

后来 LLaMA 等模型通过更多 token 训练较小参数模型，进一步证明部署成本也会反过来影响训练最优点。

---

## 三、MoE：训练规模和每 token 推理规模开始解绑

Chinchilla 仍然主要讨论 dense model。

MoE 带来第二个结构变化：模型总容量可以扩大，而每个 token 只激活一部分专家。

代表例子：

- DeepSeek-V2：236B total / 21B active；
- DeepSeek-V3：671B / 37B；
- DeepSeek V4-Pro：1.6T / 49B；
- Kimi K3：2.8T / 104B；
- Qwen3.8：2.4T / 95B。[^3][^4][^5]

于是 scaling 出现两个不同方向：

1. **capacity scaling**：让模型拥有更多总参数；
2. **active compute efficiency**：尽量不让每 token 成本同步增长。

这使“训练更大的模型”和“运行更贵的模型”不再完全绑定。

---

## 四、o1：推理阶段也可以 scale

**2024-09**，OpenAI o1 把 test-time compute 变成主流产品概念。[^6]

模型不再必须即时给出答案，而可以投入额外推理过程来搜索、检查和修正。

这改变了一个长期默认假设：

> 训练结束后，模型能力上限就完全固定。

实际上，同一个训练好的模型系统可以根据任务分配不同 inference compute。

简单问题快速答，困难问题多想。

因此“能力”变成一个函数：

**Capability = f(weights, inference budget, task)。**

这并不意味着无限多 reasoning tokens 会无限提高正确率。推理仍有边际递减、错误路径锁定和验证瓶颈。

真正的新变量只是：**计算什么时候花。**

---

## 五、R1：可验证环境改变了 inference scaling 的训练方式

DeepSeek-R1-Zero 与 R1 把 reasoning scaling 和 reinforcement learning 连接起来。[^7]

数学、代码等任务有客观可验证结果，因此模型可以通过大量生成—验证循环学习怎样分配推理过程，而不完全依赖人工写出“标准思维链”。

这里出现 scaling 的另一种资源：

> **可验证反馈。**

如果环境能够快速告诉模型“这一步最终成功还是失败”，额外计算就不仅用于生成更多 token，还可以用于：

- sampling；
- self-consistency；
- search；
- verifier；
- retry；
- RL rollout。

所以 test-time compute 不是“思维链越长越聪明”这么简单。

它更像一个搜索预算。

---

## 六、2025：reasoning 开始被动态分配，而不是固定型号

Claude 3.7、Qwen3、GPT-5 等模型把“思考 / 不思考”从两个模型变成同一系统内的模式选择。

**GPT-5** 更进一步使用 router，在快速模型与深度推理之间动态分配请求。[^8]

这意味着 scaling 进入**资源路由**阶段。

系统面对的不是：

> “这个模型到底有多强？”

而是：

> “这个任务值得花多少 compute？应该在哪一个模型、哪一个模式、哪一个工具上花？”

这和 Chinchilla 的问题非常相似，只不过 Chinchilla 优化训练预算，router 优化**每个用户任务的运行预算**。

---

## 七、2026：从 test-time compute 到 work-time compute

到了 2026 年，只看一个 Agent 的 reasoning tokens 又不够了。

### 7.1 GPT-5.5 Pro：parallel test-time compute

OpenAI GPT-5.5 System Card 描述 Pro 设置使用更高的**并行 test-time compute**。[^9]

这意味着计算预算不只沿“更长时间”扩展，还可以沿“更多并行尝试”扩展。

一个任务可以同时搜索多个方案，再比较、合成或验证。

### 7.2 GPT-5.6 ultra：多 Agent 并行工作流

GPT-5.6 进一步把高计算设置描述为可协调多个 Agent 并行执行复杂任务。[^10]

此时 scaling 单位已经从一个模型回答一次，变成**一个工作图（work graph）**。

### 7.3 Kimi Agent Swarm：扩展的是协作宽度

Kimi K2.5 / K2.6 的 Agent Swarm 也在探索类似方向：一个 orchestrator 把任务拆给多个 subagents 并行处理，再整合结果。

这不是传统 test-time compute 的简单延长，而是**orchestration scaling**。

### 7.4 Coding agents：环境步骤本身也是 compute

一个 coding Agent 的“计算”包括：

- 读文件；
- grep；
- 编辑；
- 编译；
- 跑测试；
- 浏览文档；
- 重试；
- 开 subagent。

这些步骤很多根本不是 LLM token，却直接决定最后任务是否成功。

因此到 Agent 时代，真正需要统计的是：

> **完成一个任务消耗的全部模型 + 工具 + 环境计算。**

可以称为 **work-time compute**。

---

## 八、Scaling Law 的第四个对象：环境反馈密度

软件工程 Agent 为什么进步特别快？

因为环境反馈非常密：

- 编译成功 / 失败；
- 测试通过 / 不通过；
- git diff；
- lint；
- benchmark；
- 终端退出码。

同样的模型，放在有密集反馈的环境里，比放在“写一篇政策分析”这种难自动验证的环境里更容易通过额外计算提升成功率。

因此 work-time scaling 的效果不仅取决于 compute budget，还取决于：

**feedback density × verifier quality。**

这可能是 Agent 时代比单纯 reasoning token 更重要的 scaling 条件。

---

## 九、Scaling 的经济学：更多计算不等于更贵的成功任务

如果一个便宜模型每次任务要重试十次，而更贵模型一次成功，后者可能总成本更低。

如果两个 subagents 并行工作使总 wall-clock time 减半，虽然 token 使用更多，业务价值可能更高。

所以 2026 年 scaling 的目标函数已经不再只是：

**accuracy per FLOP**

还包括：

- cost per successful task；
- latency to completion；
- human intervention rate；
- rollback cost；
- reliability under long horizon。

这也是为什么 Flash、Pro、Fast mode、batch、cache、reasoning effort 和 peak/off-peak price 会同时出现。

厂商不再只卖模型，而在卖**不同 compute allocation strategy**。

---

## 十、训练 scaling 并没有结束

“test-time compute 出现，所以预训练 scaling 到头了”也是误解。

2026 年的 Kimi K3、Qwen3.8 等依然扩大到 T 级 total parameters；各公司仍建设越来越大的训练和推理集群。

变化是：预训练 scaling 不再独占全部进步来源。

现在至少有四层 scaling：

| 层 | 扩大的资源 | 代表 |
|----|------------|------|
| Pretraining scaling | 参数、数据、训练 FLOPs | GPT-3、PaLM、K3、Qwen3.8 |
| Sparse scaling | total capacity / active compute 解耦 | DeepSeek、Kimi、Qwen |
| Inference scaling | reasoning / search / verifier budget | o1、R1、Claude thinking |
| Orchestration scaling | tools、subagents、parallel workflows | GPT-5.6、Kimi Swarm、coding agents |

这四层不是替代关系，而是叠加关系。

---

## 十一、下一次“Chinchilla 时刻”可能出现在任务级预算

2022 年 Chinchilla 回答：固定 training compute 下，参数和 token 应怎样配比。

Agent 时代还缺一个类似理论：

在固定的任务预算下，应该把计算花在哪里？

例如 10 美元预算可以选择：

- 一个强模型深思；
- 十个便宜模型并行；
- 一个模型 + 多次工具验证；
- 一个大模型规划 + 小模型执行；
- 多 Agent swarm；
- 更多 context；
- 更多检索；
- 更多测试。

哪个组合最优？

不同任务的答案显然不同。

所以未来的 scaling law 可能不再只是关于神经网络 loss，而是关于**工作流资源分配**。

---

## 评曰

Scaling Law 真正经历的不是“终结与重生”，而是**研究对象不断扩大**。

Kaplan 说：扩大模型训练，loss 会可预测下降。

Chinchilla 说：别只扩大参数，要正确分配数据和参数。

MoE 说：容量和每 token 计算可以拆开。

o1 / R1 说：训练结束后还可以通过推理搜索扩大有效能力。

GPT-5.6 与 Agent Swarm 又说：一次任务可以动员不止一条推理链，而是一支模型、工具和环境组成的执行队伍。

因此到 2026 年，最重要的 scaling 问题已经从：

> “模型应该多大？”

变成：

> **“为了完成这件工作，计算应该在哪个阶段、哪个模型、哪个 Agent、哪个工具上花？”**

这就是从 **scaling model** 到 **scaling work**。

它不是一句营销口号，而是 scaling law 从训练理论走进 Agent 系统之后的自然结果。

---

*本篇由终末地工业史官团队编纂。*  
*2026-08 补订：GPT-5.6 Sol（OpenAI）。*

---

> 📖 详见《志·参数竞赛》《论·Test-Time Compute》《论·推理经济学》《GPT 世家》《Codex / GitHub Copilot 列传》《志·AI Agent 生态》。

[^1]: Kaplan et al., “Scaling Laws for Neural Language Models”. https://arxiv.org/abs/2001.08361
[^2]: Hoffmann et al., “Training Compute-Optimal Large Language Models”. https://arxiv.org/abs/2203.15556
[^3]: DeepSeek-V3 / V4 official materials. https://arxiv.org/abs/2412.19437 ; https://deepseek.com/en/news/v4-preview/
[^4]: MoonshotAI, Kimi K3. https://github.com/MoonshotAI/Kimi-K3
[^5]: Qwen3.8. https://github.com/QwenLM/Qwen3.8
[^6]: OpenAI, “Learning to reason with LLMs”. https://openai.com/index/learning-to-reason-with-llms/
[^7]: DeepSeek-R1. https://arxiv.org/abs/2501.12948
[^8]: OpenAI, “Introducing GPT-5”. https://openai.com/index/introducing-gpt-5/
[^9]: OpenAI, GPT-5.5 System Card. https://openai.com/index/gpt-5-5-system-card/
[^10]: OpenAI, GPT-5.6. https://openai.com/index/gpt-5-6/
