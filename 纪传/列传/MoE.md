# 《MoE 列传》

> MoE（Mixture of Experts，混合专家）不是某一个模型，而是一条把“总参数量”和“单次计算量”拆开的路线。它的想法很朴素：模型里放很多专家，但每个 token 只请其中少数几个专家出手。这样，模型可以拥有很大的知识容量，又不必在每次推理时把全部参数都算一遍。

---

## 一、技术背景

大模型的早期扩展路线很直接：参数更多，数据更多，算力更多。Transformer 证明这条路能走，GPT-3 又把它推成产业共识。但 dense model（稠密模型）有一个硬问题：模型越大，每个 token 经过的参数也越多，训练和推理成本一起上涨。参数量、显存、通信、延迟，像同一条河里的水位，同时涨上来。

MoE 要处理的正是这个矛盾。它不问“能不能继续做大”，而是问“能不能只激活一小部分来完成一次计算”。这和人类组织很像：一个研究院可以有许多科室，但每个问题不必召集所有人开会；生态科的问题找生态专家，材料科的问题找材料专家。模型里也是这样：把前馈网络拆成多个专家，再用一个门控网络决定当前 token 该交给谁。

混合专家的概念并不新。早在 1991 年，Jacobs、Jordan 等人就提出 Adaptive Mixtures of Local Experts，用门控网络把不同输入分配给不同专家。那时它还不是大语言模型的规模武器，而是一种分而治之的机器学习结构。[^1]

真正让 MoE 和大模型扩展绑定在一起的，是 2017 年 Google 的 sparsely-gated MoE。Shazeer 等人把专家层放进大规模神经网络，让每个样本只激活少量专家，并报告在机器翻译和语言建模中用更少计算获得更大模型容量。[^2] 从这里开始，MoE 的历史主题变得清楚：不是为了优雅地分类，而是为了在算力墙前继续扩张。

---

## 二、核心创新

### 2.1 稀疏专家：参数很多，但每次只用一点

MoE 的核心是稀疏激活。普通 Transformer 里的前馈层是稠密的：每个 token 都走同一套 FFN。MoE 把这套 FFN 换成许多“专家”FFN，再由 router 或 gating network 给 token 分配专家。常见做法是 top-1 或 top-2 routing：每个 token 只送给得分最高的一两个专家。

这让“模型大小”和“计算成本”不再完全绑死。一个 MoE 模型可以有上百亿、上千亿甚至更多总参数，但单个 token 只激活其中一小部分。换句话说，总参数量代表模型的容量，激活参数量代表每次推理实际付出的计算。

这不是免费午餐。router 需要学会分流，专家负载要均衡，分布式训练时还要把 token 送到不同设备上的专家那里。MoE 的难点不在公式，而在系统：如果某几个专家总被挤爆，其他专家闲着，模型就会变慢、变差，甚至训练不稳。

### 2.2 GShard：把 MoE 变成可分片训练的工业系统

2020 年，Google 提出 GShard，把 MoE 和自动分片结合起来，目标是在 TPU 集群上训练超大多语言翻译模型。GShard 使用稀疏门控专家层，并配合 SPMD 分区，让模型参数、专家和数据可以跨设备分布。论文报告了一个 600B 参数的多语言神经机器翻译模型，每个 token 只激活少量专家。[^3]

GShard 的历史作用，不是发明“专家”这个词，而是把 MoE 从模型技巧推进到系统工程。MoE 一旦变大，问题就不只是“哪个专家更合适”，还包括：专家放在哪些芯片上，token 如何跨设备通信，batch 如何切分，负载如何平衡，编译器如何自动生成分布式执行计划。

这一点很重要。后来所有真正可用的大型 MoE，都必须同时是模型和系统。没有分布式路由、容量控制和通信优化，MoE 只是一片漂亮但淤塞的水网；水分子知道该往哪里流，河道却承受不住。

### 2.3 Switch Transformer：把 top-2 简化为 top-1

2021 年，Google 发布 Switch Transformer。它做了一件看似保守、实则关键的减法：每个 token 只路由到一个专家，也就是 top-1 routing。这样可以减少通信和计算，让 MoE 更容易扩展。论文报告了最高 1.6T 参数的模型，并称在相同计算预算下，相比 T5-Base 预训练速度可达到 7 倍以上。[^4]

Switch Transformer 的意义在于降低 MoE 的工程门槛。早期 MoE 常用 top-2 routing，效果稳一些，但通信和合并更复杂。Switch 说：宁可每个 token 少找一个专家，也要让系统更简单、更快、更能放大。

它也暴露了 MoE 的典型矛盾：路由越稀疏，计算越省，但专家选择错误时损失也更直接；路由越丰富，效果可能更稳，但系统负担更重。MoE 后来的许多变化，都是在这条缝里调水位。

### 2.4 Mixtral：开源社区第一次真正摸到 MoE 的甜头

2023 年 12 月，Mistral AI 发布 Mixtral 8x7B。它是稀疏 MoE：每层有 8 个专家，每个 token 选 2 个专家；模型总参数约 46.7B，但每个 token 只使用约 12.9B 参数。Mistral 宣称 Mixtral 在多数基准上超过 Llama 2 70B，并且推理速度快约 6 倍。[^5]

Mixtral 的地位很特别。GShard 和 Switch 证明了 MoE 的上限，但离普通开发者很远；Mixtral 则把 MoE 带进开源模型生态。人们第一次可以相对方便地下载、量化、部署、微调一个强力 MoE 语言模型，并亲眼看到“总参数很大、激活参数较小”的实际好处。

它还改变了开源模型竞争的语气。过去大家常问：7B、13B、70B 谁更强？Mixtral 之后，问题变成：总参数、激活参数、专家数、路由策略、显存占用和吞吐之间怎么权衡？MoE 把模型规模从一维数字变成了多维设计。

### 2.5 DeepSeekMoE 与 DeepSeek-V2：把专家切得更细

DeepSeekMoE 的路线不是简单堆更多专家，而是把专家分工做得更细。DeepSeekMoE 论文提出细粒度专家分割和共享专家隔离：一部分专家作为共享专家处理通用知识，另一部分作为路由专家处理更专门的知识。这样既保留公共能力，又让专门能力有地方生长。[^6]

2024 年 5 月，DeepSeek-V2 发布。它采用 MoE 架构，并与 MLA（Multi-head Latent Attention，多头潜在注意力）结合，目标是同时降低训练成本和推理 KV cache。官方说明称 DeepSeek-V2 总参数 236B，每个 token 激活 21B 参数；API 价格也因结构优化大幅下降。[^7]

DeepSeek-V2 的历史作用，是把 MoE 从“研究上可扩展”推向“商业上可承受”。如果说 Switch 关心训练扩展，Mixtral 关心开源可用，那么 DeepSeek-V2 关心的是另一条现实河道：强模型能不能以低价格、高吞吐对外服务。此后 DeepSeek-V3、R1 等模型继续沿用和发展 MoE，使 DeepSeek 系列成为 2024—2025 年开源与开放权重大模型竞争中的重要力量。[^8]

### 2.6 关键数据

| 模型/工作 | 时间 | MoE 设计 | 历史作用 |
|------|------|------|------|
| Adaptive Mixtures of Local Experts | 1991 | 门控网络分配局部专家 | 提出“多个专家 + 门控”的早期框架[^1] |
| Sparsely-Gated MoE | 2017 | 稀疏门控，每次激活少量专家 | 把 MoE 接到大规模神经网络扩展上[^2] |
| GShard | 2020 | MoE + 自动分片，600B 参数翻译模型 | 把 MoE 变成分布式训练系统问题[^3] |
| Switch Transformer | 2021 | top-1 routing，最高 1.6T 参数 | 用简化路由降低超大 MoE 扩展难度[^4] |
| Mixtral 8x7B | 2023 | 8 专家、每 token 选 2 个 | 让开源社区大规模接触实用 MoE[^5] |
| DeepSeekMoE | 2024 | 细粒度专家 + 共享专家隔离 | 强调专家专门化与共享能力并存[^6] |
| DeepSeek-V2 | 2024 | 236B 总参数、21B 激活参数 | 展示低成本服务强模型的 MoE 路线[^7] |

---

## 三、影响与后继

### 3.1 MoE 改变了“参数量”的含义

MoE 出现后，单说“这个模型多少参数”变得不够了。一个 200B MoE 和一个 200B dense model，在推理成本上可能完全不是一回事。前者也许每个 token 只激活二三十 B 参数，后者则要把全部参数都算过去。

所以 MoE 迫使行业区分几个数字：总参数量、激活参数量、专家数、每 token 选择专家数、训练 FLOPs、推理吞吐、显存占用。总参数像森林面积，激活参数像每次真正走过的林径。森林大代表物种多，但你每一步踩到的土地有限。

这也是 MoE 最容易被误解的地方。宣传里巨大的总参数很吸引人，但模型是否好用，还要看路由训练、专家利用率、数据质量、上下文长度、后训练和推理系统。MoE 给了扩展新自由，也给了指标包装新空间。

### 3.2 从训练扩展到推理经济学

早期 MoE 主要回答训练扩展问题：如何在固定计算下塞进更多参数容量。到 2023—2025 年，它越来越变成推理经济学问题：在用户请求暴涨时，怎样用更低成本提供更强模型。

Mixtral 让开源部署者看到，MoE 可以在相对可控的激活成本下获得接近大模型的能力。DeepSeek-V2 则把这点推进到 API 价格和服务效率上。对模型公司来说，推理成本不是附属问题，而是商业模型本身。每个 token 便宜一点，百万用户规模下就是完全不同的财务结构。

因此，MoE 的历史作用不只是“把模型做大”。它真正改变的是扩展的经济结构：能力增长不必总以同等比例的单次计算增长为代价。

### 3.3 专家分工带来新的可解释性想象，也带来新的系统风险

MoE 天然让人联想到“模型内部有不同专家”。这给可解释性带来诱惑：能不能观察某些专家专门处理代码，某些专家专门处理数学，某些专家专门处理多语言？确实，专家分工有时会出现可观察的偏好，但它不是人类科室表。专家由梯度和路由共同塑形，不一定按人类命名的学科边界组织。

风险也随之增加。router 可能偏置，专家可能塌缩，少数专家过载会拖慢整个 batch；分布式推理时，跨卡通信可能吃掉稀疏计算省下来的收益。MoE 像一片水网：支流越多，容量越大，但闸门、泵站和河道调度也越关键。只谈专家，不谈调度，是看不见系统的。

### 3.4 被吸收，而不是取代 Transformer

MoE 没有取代 Transformer。它通常是嵌在 Transformer 里的：注意力层照常处理上下文关系，MoE 多半替换或扩展前馈层。也就是说，MoE 是扩容机制，不是完整的新底座。

到 2026 年，前沿大模型的路线已经很少是单一技术竞争。Transformer、MoE、长上下文、检索增强、后训练、规则奖励、工具调用、多模态编码器，都被编进同一张网里。MoE 的位置，是让这张网在容量上更宽，在成本上不至于立刻崩塌。

它也不会在所有场景胜过 dense model。小模型、端侧模型、低延迟场景、通信受限场景，稠密结构仍然有优势。MoE 的强项在大规模训练和服务，在那里，稀疏激活节省的计算足以抵消路由和通信的复杂度。

---

## 评曰

MoE 的贡献，是把大模型扩展从“所有参数每次一起上”改成“许多专家按需出手”。

它的厉害之处不在公式，而在重新安排了容量和计算的关系。GShard 让人看到 MoE 可以进入超大规模分布式训练；Switch Transformer 用 top-1 routing 把系统做简单；Mixtral 把 MoE 带给开源社区；DeepSeekMoE 和 DeepSeek-V2 则说明，专家分工可以服务于更低成本、更高吞吐的现实产品。

但 MoE 不是魔法。它省下的计算，会在路由、负载均衡、通信和工程复杂度上讨回一部分。它也不自动带来真正"像人一样"的专家组织。历史会记住 MoE，不是因为它给模型起了"专家"的名字，而是因为它在算力昂贵、需求暴涨的时代，给大模型找到了一种继续生长的稀疏形态。像雨林的根系一样，表面看不见全貌，水流却因此能抵达更远的地方。

---

*本篇由终末地工业史官团队编纂：缪尔赛思（系统建模）。*

---

[^1]: Jacobs, Jordan, Nowlan, Hinton, "Adaptive Mixtures of Local Experts", Neural Computation, 1991. https://www.cs.toronto.edu/~hinton/absps/jjnh91.pdf
[^2]: Shazeer et al., "Outrageously Large Neural Networks: The Sparsely-Gated Mixture-of-Experts Layer", arXiv:1701.06538, 2017. https://arxiv.org/abs/1701.06538
[^3]: Lepikhin et al., "GShard: Scaling Giant Models with Conditional Computation and Automatic Sharding", arXiv:2006.16668, 2020. https://arxiv.org/abs/2006.16668
[^4]: Fedus, Zoph, Shazeer, "Switch Transformers: Scaling to Trillion Parameter Models with Simple and Efficient Sparsity", arXiv:2101.03961, 2021. https://arxiv.org/abs/2101.03961
[^5]: Mistral AI, "Mixtral of experts", 2023-12-11. https://mistral.ai/news/mixtral-of-experts
[^6]: Dai et al., "DeepSeekMoE: Towards Ultimate Expert Specialization in Mixture-of-Experts Language Models", arXiv:2401.06066, 2024. https://arxiv.org/abs/2401.06066
[^7]: DeepSeek-AI, "DeepSeek-V2: A Strong, Economical, and Efficient Mixture-of-Experts Language Model", arXiv:2405.04434, submitted 2024-05-07. https://arxiv.org/abs/2405.04434（原始博客链接已失效，论文为一级来源）
[^8]: DeepSeek-AI et al., "DeepSeek-V3 Technical Report", arXiv:2412.19437, 2024. https://arxiv.org/abs/2412.19437
