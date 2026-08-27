# Test-Time Compute：从“多想一会儿”到运行时计算控制面

> 2024 年人们第一次看到 o1 时，test-time compute 很容易被理解成“模型在回答前多想几十秒”。到 2026 年，这个定义已经不够。推理预算可以被动态调节，可以花在搜索、验证、工具调用上，可以并行给多个 Agent，也可以因为 cache、batch、Fast mode 和峰谷调度产生完全不同的成本。Test-Time Compute 已从一种“推理技巧”演化成 **runtime compute control plane**：系统决定一项任务应该调用多少模型、多少时间、多少工具和多少并行资源。

---

## 一、起点：训练完的模型不再只有一个固定“工作档位”

传统语言模型的直觉是：模型训练完成后，能力大致固定。

给定一个 prompt，它执行一次前向生成并输出答案。

**2024 年**，Snell 等人系统研究推理阶段额外计算的分配；随后 OpenAI o1 将 test-time compute 产品化。[^1][^2]

最重要的变化不是“chain-of-thought 有用”，而是：

> **同一模型系统可以根据任务困难程度分配不同计算预算。**

简单题快答，难题慢答。

这让 inference 成为新的资源配置阶段。

---

## 二、o1：把 reasoning budget 变成产品变量

**2024-09**，o1 发布。

它通过额外内部推理过程显著改善数学、科学和代码等任务。[^2]

这创造了一个新的产品问题：

- 用户要等待多久？
- 平台为这次回答花多少推理 token？
- 更长推理是否真的带来更高正确率？
- 什么任务值得投入更多 budget？

因此 o1 的真正创新不只是一个 reasoning model，而是第一次让“**回答前要分配多少计算**”进入产品设计。

---

## 三、R1：计算预算开始与可验证搜索绑定

DeepSeek-R1-Zero / R1 将 test-time reasoning 与大规模 reinforcement learning 连接。[^3]

数学和代码任务存在客观 verifier：

- 最终答案；
- 单元测试；
- 编译结果。

这意味着推理预算可以被用于探索多个候选路径，并通过结果信号学习怎样搜索。

因此 test-time compute 更准确的概念不是“思考长度”，而是：

> **为了找到可靠答案，允许系统搜索多大的候选空间。**

长 chain-of-thought 只是其中一种搜索载体。

其他载体还包括：

- best-of-N sampling；
- verifier reranking；
- self-consistency；
- tree search；
- external tool feedback；
- retry。

---

## 四、为什么“推理 token 越多越好”是错误理解

额外计算有边际收益，也有失败模式。

模型可能：

- 在错误前提上越想越远；
- 反复验证同一条错误路线；
- 用大量 token 重述而不增加信息；
- 在开放问题上缺乏客观 verifier；
- 因长过程增加延迟和成本。

所以 test-time compute 的目标不是**最大化思考长度**，而是**最大化单位计算带来的成功概率提升**。

这与训练 compute optimization 本质类似。

---

## 五、Claude / GPT-5：reasoning effort 从型号变成旋钮

Claude 3.7 把 standard / extended thinking 放进同一个模型；后续 Claude 系列又加入 effort controls。

GPT-5 则更进一步：一个 router 根据请求在快速模型与深度推理路径之间选择。[^4]

GPT-5.6 Sol 又提供更明确的 reasoning effort / thinking control。

这说明 test-time compute 正从“买哪一个模型”转成“**给这项任务多少预算**”。

未来模型 API 的核心参数未必是 model name，而可能越来越包括：

- effort；
- latency target；
- max tool calls；
- parallelism；
- budget；
- completion confidence。

---

## 六、工具调用把 test-time compute 推出模型内部

当 Agent 调用工具，计算过程不再只发生在语言模型 token 中。

例如 coding Agent：

1. 读取代码；
2. 推理；
3. 修改；
4. 跑测试；
5. 读取错误；
6. 再推理；
7. 再修改。

测试运行本身不是 LLM token，却是任务推理的一部分。

浏览器 Agent 同样如此：搜索、页面加载、截图、DOM、下载文件都属于**runtime work**。

所以 Agent 时代的 test-time compute 应包括：

**LLM inference + tools + environment interaction + verification。**

只统计 hidden reasoning tokens 会漏掉越来越大的成本部分。

---

## 七、2026：并行 test-time compute

### 7.1 GPT-5.5 Pro

OpenAI GPT-5.5 System Card 描述 Pro 配置使用更多**parallel test-time compute**。[^5]

这意味着额外预算不一定沿时间轴串行增加，而可以横向分叉：

- 多条候选解；
- 多个搜索路径；
- 多个子任务；
- 再汇总。

### 7.2 GPT-5.6 与多 Agent

GPT-5.6 高计算设置进一步把多个 Agent 并行协调放入复杂工作流。[^6]

此时 test-time compute 已经从“一个模型的思考”变成“**一组执行者的总运行预算**”。

这也是为什么“推理时计算”逐渐与“Agent orchestration”融合。

---

## 八、并行不是免费午餐

多 Agent 可以缩短 wall-clock time，也会快速扩大总 token 和工具成本。

如果 8 个 Agent 并行，却有 6 个重复搜索同样的信息，计算只是浪费。

因此新的问题变成：

> **怎样避免并行探索的冗余？**

优秀 orchestrator 需要：

- 任务拆分；
- 去重；
- specialization；
- dependency management；
- early stopping；
- result verification；
- 合并冲突处理。

这使 orchestration 本身也成为一种模型能力。

Kimi Agent Swarm、Codex multi-agent workflows 等产品都在探索这层。

---

## 九、Cache：过去的推理计算也可以被“复用”

长 Agent 任务会反复使用：

- system prompt；
- 大型代码库前缀；
- 文档；
- 工具定义；
- 历史上下文。

Prompt caching 允许重复前缀不必每轮重新执行完整 prefill。

因此 test-time compute 的另一个核心变量是：

> **多少计算能被复用。**

DeepSeek、Anthropic、OpenAI、Google 等都把 cache pricing / prompt caching 作为 API 的重要经济机制。

在 1M context 时代，cache 不是优惠券，而是长任务经济学的基础。

---

## 十、Prefill 与 Decode：同一个 token 也不是同一种成本

推理一般包含两个主要阶段：

- **Prefill**：读取整个输入上下文；
- **Decode**：逐 token 生成输出。

两者的硬件瓶颈、batch 策略和服务方式不同。

长上下文 Agent 可能 prefill 极重；长思维模型可能 decode 极重。

2026 年越来越多 serving 系统进行 prefill/decode 解耦，GLM-5.3-Flash 的国产芯片生产 serving 甚至把 Encode–Prefill–Decode 分离作为系统优化的一部分。[^7]

因此“每 1M token 一个价格”正在掩盖真实资源结构。

---

## 十一、Fast mode、Batch、峰谷价格：test-time compute 进入调度经济学

Anthropic Claude Opus 5 Fast mode 用更高价格换更低延迟；DeepSeek V4 引入峰谷价格；多家平台提供 Batch discount。

这些定价形式都在表达同一件事：

> **同样的模型计算，在不同时间、延迟和调度条件下，价值与成本不同。**

这使模型 API 越来越像云计算资源，而不是一张静态 token 价目表。

用户购买的实际上是：

- compute amount；
- priority；
- latency；
- concurrency；
- availability。

---

## 十二、Test-Time Compute 的正确评价指标

如果只比较“模型用了多少 thinking tokens”，会奖励啰嗦。

更合理的指标应该包括：

| 指标 | 问题 |
|------|------|
| Accuracy / success rate | 最终有没有做对 |
| Cost per success | 做对一次花多少钱 |
| Time to success | 做对一次花多久 |
| Human intervention rate | 需要人接管多少次 |
| Tool / retry count | 是否反复浪费动作 |
| Parallel efficiency | 多 Agent 是否真正带来加速 |
| Recoverability | 失败后能否 checkpoint / rollback |

这也是 Agent benchmark 从单轮知识题转向 SWE-bench、Terminal-Bench、OSWorld、WebArena 等环境评测的原因。

---

## 十三、隐藏思维链不是 test-time compute 的必要定义

o1 时代，人们容易把 test-time compute 和 hidden chain-of-thought 绑定。

实际上二者是不同问题。

Test-time compute 描述**运行时投入多少计算**；推理过程向用户展示多少，是**界面、安全和监督策略**。

计算可以发生在：

- hidden reasoning；
- visible reasoning summary；
- search tree；
- tool calls；
- verifier；
- subagents。

所以未来 test-time compute 完全可能越来越大，而用户看到的显式 chain-of-thought 越来越少。

系统只需要提供足够的**可审计行动记录和结果证据**。

---

## 评曰

Test-Time Compute 的第一阶段问题是：

> “多想一会儿，会不会更聪明？”

答案已经是：很多任务会。

第二阶段的问题变成：

> “应该想多久？”

于是出现 effort、router 和动态推理。

到 2026 年，问题已经第三次变化：

> **“为了把工作做完，运行时到底应该动员多少模型、工具、并行分支、缓存和环境反馈？”**

这时“思考”已经不再局限在模型脑内。

一次长程 Agent 任务像一套小型分布式计算系统：它读取大量状态，调用不同工具，创建子任务，验证结果，保存 checkpoint，失败后回滚。

因此 test-time compute 的最终形态可能不是“更长的 chain-of-thought”，而是**更聪明的计算调度**。

推理模型打开了这个时代；Agent 系统正在重新定义它。

---

*本篇由终末地工业史官团队编纂。*  
*2026-08 补订：GPT-5.6 Sol（OpenAI）。*

---

> 📖 详见《论·Scaling Law 的终结与重生》《论·推理经济学》《志·AI Agent 生态》《表·Benchmark 速查表》。

[^1]: Snell et al., “Scaling LLM Test-Time Compute Optimally can be More Effective than Scaling Model Parameters”. https://arxiv.org/abs/2408.03314
[^2]: OpenAI, “Learning to reason with LLMs”. https://openai.com/index/learning-to-reason-with-llms/
[^3]: DeepSeek-R1. https://arxiv.org/abs/2501.12948
[^4]: OpenAI, “Introducing GPT-5”. https://openai.com/index/introducing-gpt-5/
[^5]: OpenAI, GPT-5.5 System Card. https://openai.com/index/gpt-5-5-system-card/
[^6]: OpenAI, GPT-5.6. https://openai.com/index/gpt-5-6/
[^7]: Z.ai, GLM-5.3-Flash technical blog. https://z.ai/blog/glm-5.3-flash
