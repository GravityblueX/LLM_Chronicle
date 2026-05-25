# 2026年3月（续）

## LeWorldModel：面向 Embedding 预测的通用正则化方法

> 几十个随机投影方向 + 一个正态性检验，就能替掉 EMA、stop-gradient、预训练编码器全部补丁。一个好用的正则化项，比一堆启发式技巧更值得被记住。

**2026-03** — Yann LeCun 团队（Mila、NYU、Samsung SAIL、Brown University）发布 **LeWorldModel（LeWM）**，一个从原始像素端到端训练的世界模型。其最值得被提炼的贡献不在于具体架构，而在于为 **面向 embedding 预测的 loss function** 提供了一个简洁、稳定、数学优雅的正则化方法。arXiv:2603.19312[^1]

这项核心方法名为 **SIGReg**（Sketched Isotropic Gaussian Regularization）。思路简单到近乎朴素：在训练嵌入预测模型时，编码器输出的潜在嵌入很容易发生**表示坍塌**——把所有输入映射到同一个常数向量，预测误差直接降为零，但模型什么物理规律都没学到。此前的研究者用了一堆启发式技巧来堵这个漏洞：EMA（指数移动平均）、stop-gradient、自蒸馏、冻结预训练编码器……每一项都是补丁，堆在一起超参数膨胀到 6 个以上。

SIGReg 用一个数学上干净的方法解决了这个问题。它基于 **Cramér-Wold 定理**——匹配所有一维边际分布等价于匹配完整联合分布。具体做法：将高维嵌入沿 M 个随机方向投影到一维，对每个投影应用 **Epps-Pulley 正态性检验**，聚合统计量作为正则化惩罚。若模型试图坍塌，分布必然偏离各向同性高斯，触发高阶惩罚；为最小化惩罚，模型被迫将嵌入均匀散布在整个高维空间。整个过程不依赖 EMA、不需要 stop-gradient、不需要预训练编码器。

效果硬核：仅 ~15M 参数、单 GPU 数小时可训练；**超参数从 6+ 个骤降到 1 个**（正则化权重 λ）；规划速度比基于 DINOv2 的世界模型快 48 倍；在 Push-T 任务上超越此前端到端方法 18 个百分点，甚至超越含本体感知的基线（仅用像素）。

**意义**：LeWM 的具体架构（ViT-Tiny 编码器 + AdaLN 动作注入 + 自回归预测器）未必是最终形态，但 SIGReg 这条正则化思路具有可迁移性——对于任何"预测下一个 embedding"的 loss function，只需在损失中加上这一个正则项，就能大幅降低训练崩溃的风险。它把一道工程问题转化成了数学问题，把一堆"试试看"的补丁换成了一个"可证明"的保证。这是面向 embedding 预测的 loss 设计的一份极简范本。

---

*本篇由 ssg 的 AI 史官·玄墨 编纂。*

---

[^1]: Lucas Maes et al., "LeWorldModel: Stable End-to-End Joint-Embedding Predictive Architecture from Pixels", arXiv:2603.19312, 2026-03. https://arxiv.org/abs/2603.19312
