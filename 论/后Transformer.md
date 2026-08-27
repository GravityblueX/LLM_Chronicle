# 后 Transformer 架构之争

> 2017 年之后，Transformer 几乎统治了通用大模型。但 2026 年再问“谁会取代 Transformer”，问题已经有些问错了。Mamba、RWKV、xLSTM、Jamba 没有把 Attention 一夜推下王座；真正发生的是另一种变化：**线性注意力、状态空间、稀疏注意力和标准 attention 被逐渐吸收到混合架构中。** “后 Transformer”更像一场组件重组，而不是王朝更替。

---

## 一、问题为什么会出现：full attention 的 O(n²)

标准 self-attention 对长度为 n 的序列构造 token 两两交互，计算复杂度随序列长度呈 O(n²) 增长。[^1]

短文本时代，这不是决定性问题；当上下文进入 128K、1M，甚至 Agent 需要反复携带工具结果、代码、截图和历史状态时，注意力的计算、KV cache 和显存带宽都成为实际成本。

FlashAttention 极大改善了 attention 的 I/O 与显存执行方式，但**没有把 full attention 的数学计算复杂度从 O(n²) 改成 O(n)**。[^2]

因此研究者一直在寻找几个方向：

- 能否用 O(n) 或近似线性的机制处理大部分序列？
- 能否只在少数位置保留昂贵的全局注意力？
- 能否把“精确回看”与“长期状态压缩”拆给不同组件？

这就是后 Transformer 之争真正的工程背景。

---

## 二、Mamba：选择性状态空间把“记忆”重新写成递推

2023 年底，Albert Gu 与 Tri Dao 发布 Mamba。[^3]

Mamba 属于 State Space Model（SSM）路线。它不像 Transformer 为每个新 token 回看全部历史，而维护一个随序列递推的内部状态。

关键创新是 **selectivity**：状态更新参数依赖当前输入，因此模型可以学习什么时候保留信息、什么时候丢弃信息。

这使 Mamba 同时获得两个吸引力：

1. 训练仍可通过硬件感知扫描高效并行；
2. 自回归推理时状态大小不随上下文线性膨胀成传统 KV cache。

**2024 年 Mamba-2** 又通过 state space duality 进一步连接 SSM 与 attention 的数学关系。[^4]

这件事反而削弱了“Transformer vs SSM”这种绝对二分：二者越来越可以被视为一组可组合的序列变换结构。

---

## 三、RWKV 与 xLSTM：递归没有消失，只是换了工程形式

### 3.1 RWKV

RWKV 尝试做到“像 Transformer 一样并行训练、像 RNN 一样递推推理”。[^5]

它的优势主要是：

- 推理状态固定；
- 长序列内存需求稳定；
- 本地和流式场景有吸引力。

但通用前沿模型最看重的不只是理论复杂度，还包括大规模训练稳定性、工具生态、硬件 kernel、已有 checkpoint 与开发者经验。这也是 RWKV 一直拥有活跃社区、却没有直接替代主流 Transformer 旗舰的原因之一。

### 3.2 xLSTM

2024 年 xLSTM 重新设计 LSTM 的门控与记忆机制，试图把经典循环网络带回现代大模型。[^6]

它说明一个重要事实：Transformer 的成功并没有让“状态递推”这个思想失效。真正被淘汰的是旧时代那套难以规模化并行训练的实现方式。

---

## 四、Jamba：第一个很明确的答案——不要二选一

2024 年 AI21 Labs 发布 Jamba，将 Mamba / SSM 层与 Transformer attention 层交替组合，并使用 MoE。[^7]

这条路线的思想非常朴素：

- 大部分 token 流动用更便宜的状态机制；
- 需要精确全局回溯时保留 attention；
- 用 MoE 再控制每 token 实际激活的参数量。

Jamba 的意义不只是一个具体模型，而是它提出了一种后来越来越重要的架构哲学：

> **不是寻找一种结构取代 Transformer，而是把不同序列机制按成本和能力分工。**

---

## 五、2026：混合化从实验路线进入前沿生产模型

到了 2026 年，后 Transformer 之争出现了比“有没有纯 Mamba 万亿模型”更重要的证据：**线性/稀疏注意力开始直接进入前沿生产模型。**

### 5.1 DeepSeek：压缩 attention，而不是抛弃 attention

DeepSeek 从 MLA、DSA 到 V4 的 CSA/HCA 等路线，持续减少 KV、长上下文和注意力成本，但并没有简单放弃 Transformer 家族。它的做法更像持续重写 attention 的内部经济学。

这说明 Transformer 的“存活”并不代表 2017 年原版 attention 原封不动地存活。

### 5.2 Kimi K3：KDA + Gated MLA

Kimi K3 使用 KDA 与 Gated MLA 等混合机制，并通过大型 MoE 把总容量与 active compute 分离。[^8]

同样，它不是“纯 Transformer”与“纯替代架构”中的任何一端。

### 5.3 GLM-5.3-Flash：sparse attention + linear attention

**2026-08-26**，Z.ai 发布 GLM-5.3-Flash。官方披露该模型采用 **hybrid sparse + linear attention**，总参数 320B、每 token 约 18B active，并支持约 1M token 上下文。[^9]

这个节点非常适合修正旧稿的结论。

旧稿说“截至 2026 年中，前沿模型仍全部基于 Transformer，因此替代路线没有成功”。

更准确的是：

> **替代路线没有完成一次干净的王朝更替，但其核心思想已经进入主流模型内部。**

线性 attention 不必先建立一个“非 Transformer 帝国”，才能产生历史影响。

---

## 六、为什么纯替代仍然很难

### 6.1 Attention 的随机访问能力仍然珍贵

标准 attention 的核心能力，是当前位置可以直接与很远的任意 token 建立显式交互。

递推状态虽然高效，但把历史压进有限状态后，精确回取某个细节更困难。

对代码库、法律文本、复杂 Agent state 等任务，精确回看往往仍然有价值。

### 6.2 前沿训练最怕未知风险

训练一个前沿模型需要极大计算预算。

成熟 Transformer 路线拥有：

- scaling 经验；
- 已验证 optimizer / parallelism；
- FlashAttention 等 kernel；
- vLLM / TensorRT-LLM 等 serving 生态；
- 大量工程师经验。

新架构哪怕理论上更优，也必须证明它在数百亿、数千亿甚至万亿参数规模仍然稳定。

这是一种真实的工程路径依赖。

### 6.3 Transformer 本身一直在变化

“Transformer”这个词已经越来越宽。

今天的前沿模型可能同时拥有：

- MoE；
- GQA / MLA；
- sparse attention；
- linear attention；
- recurrent state；
- local/global hybrid；
- attention residual / routing；
- million-token context extensions。

如果这些模型仍被统称 Transformer，那么“Transformer 没被替代”有时只是因为定义本身不断吸收挑战者。

---

## 七、真正的竞争单位：不是架构名字，而是每单位工作成本

2023 年研究者常比较：

> Transformer 和 Mamba 谁 perplexity 更好？

2026 年生产系统更关心：

- 一个 1M context prefill 需要多少时间？
- KV / state 占多少显存？
- decode 每 token 多贵？
- 在相同硬件上能并发多少 Agent？
- 长任务中是否需要 compaction？
- 精确回取旧信息的成功率怎样？

因此后 Transformer 竞争正在从“理论 O(n) vs O(n²)”进入**系统成本竞争**。

一个混合架构只要能把 90% 的 token 用便宜路径处理，再把 10% 的关键交互交给 attention，就可能比“纯粹的理论胜利”更有商业意义。

---

## 八、后 Transformer 更像 Unix，而不是王朝战争

软件史里，新系统很少把旧系统的所有思想全部抹去。更常见的是：成功设计被后来的主流吸收。

大模型架构也正在发生类似事情：

- RNN 的状态思想回来；
- SSM 的线性递推被采用；
- attention 保留随机访问；
- MoE 负责容量；
- routing 决定每个 token 走哪条计算路径。

于是最终的前沿模型可能很难再被一句“它是 Transformer”完整描述。

---

## 评曰

“Attention Is All You Need”从来不是真的说世界上永远只需要 attention。

它的历史力量在于：2017 年的那个架构足够简单、足够并行、足够可扩展，因此成为了整个产业最方便继续堆计算的基座。

Mamba、RWKV、xLSTM 没有把它推翻，并不意味着挑战失败。

真正的变化发生得更安静：

**Transformer 正在被它的挑战者改造。**

当 GLM-5.3-Flash 把 linear attention 与 sparse attention 混在同一个前沿模型里，当 K3 把新的 attention 变体与 MoE 组合，当 DeepSeek 一代代重写 KV 与长上下文成本时，“后 Transformer”已经不需要等一个完全不同名字的新王朝才能到来。

它可能以混合架构的形式，悄悄发生在 Transformer 内部。

因此 2026 年最合适的判断不是“Transformer 赢了”或“Mamba 输了”，而是：

> **架构竞争从替代之争，进入了组件吸收与系统协同之争。**

谁最终成为标准，不一定取决于论文里谁的复杂度更漂亮，而取决于谁能把长上下文、推理、Agent 与真实硬件上的单位工作成本同时压下来。

---

*本篇由终末地工业史官团队编纂：符玄（史论主笔）。*  
*2026-08 补订：GPT-5.6 Sol（OpenAI）。*

---

[^1]: Vaswani et al., “Attention Is All You Need”, 2017. https://arxiv.org/abs/1706.03762
[^2]: Dao et al., “FlashAttention”, 2022. https://arxiv.org/abs/2205.14135
[^3]: Gu & Dao, “Mamba: Linear-Time Sequence Modeling with Selective State Spaces”, 2023. https://arxiv.org/abs/2312.00752
[^4]: Dao & Gu, “Transformers are SSMs: Generalized Models and Efficient Algorithms Through Structured State Space Duality”, 2024. https://arxiv.org/abs/2405.21060
[^5]: Peng et al., RWKV project and papers. https://github.com/BlinkDL/RWKV-LM
[^6]: Beck et al., “xLSTM: Extended Long Short-Term Memory”, 2024. https://arxiv.org/abs/2405.04517
[^7]: AI21 Labs, Jamba technical report / model release, 2024. https://arxiv.org/abs/2403.19887
[^8]: Moonshot AI, Kimi K3 official repository / technical report, 2026. https://github.com/MoonshotAI/Kimi-K3
[^9]: Z.ai, “GLM-5.3-Flash: Frontier Intelligence, Flash Cost”, 2026-08-26. https://z.ai/blog/glm-5.3-flash