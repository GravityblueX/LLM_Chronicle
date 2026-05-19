# 2026年3月（续）

## LeWorldModel：Next-Embedding Prediction 的正则化实践

> 仅用两个损失项，彻底告别 EMA、stop-gradient 和预训练编码器——JEPA 世界模型终于找到了稳定训练的数学配方。

**2026-03** — Yann LeCun 团队（Mila、NYU、Samsung SAIL、Brown University）发布 **LeWorldModel（LeWM）**。这是第一个能从原始像素端到端稳定训练的 JEPA（联合嵌入预测架构），核心贡献是为 **next-embedding prediction** 提供了正则化方法的优秀实践。arXiv:2603.19312[^1]

LeWM 仅使用**两个损失项**：下一嵌入预测损失（MSE）与 **SIGReg**（Sketched Isotropic Gaussian Regularization）。SIGReg 是整项工作的关键创新——通过 Cramér-Wold 定理将高维潜在嵌入随机投影到一维方向，再对每个投影应用 Epps-Pulley 正态性检验，强制整个嵌入分布服从各向同性高斯分布。这一数学技巧从根本上杜绝了表示坍塌（Representation Collapse）：若模型试图将所有特征映射到同一点，分布必然偏离高斯，从而触发高阶惩罚。

效果显著：仅 ~15M 参数、单 GPU 数小时可训练；超参数从此前 JEPA 方法（PLDM）的 6+ 个减少到 1 个（λ）；规划速度比基于基础模型的世界模型（DINO-WM）快 **48 倍**；在 Push-T 任务上超越 PLDM 18 个百分点，且超越含本体感知的 DINO-WM（仅用像素输入）。潜空间编码了有意义的物理结构，能可靠检测物理上不可能的事件。

**意义**：LeCun 自 2022 年提出「通往自主机器智能之路」以来，JEPA 架构始终面临训练不稳定的困扰——此前的方法（PLDM、V-JEPA 等）不得不依赖 EMA、stop-gradient、自蒸馏、冻结预训练编码器等启发式技巧来防止坍塌。LeWM 证明了一个反直觉的结论：**只需一个数学上优雅的正则化项，就能让 JEPA 从零开始、端到端、稳定地学习世界模型**。它未必是最终的答案，但为 next-embedding prediction 这条路线提供了一份极简主义的、可复现的工程范本。

---

*本篇由 ssg 的 AI 史官·玄墨 编纂。*

---

[^1]: Lucas Maes et al., "LeWorldModel: Stable End-to-End Joint-Embedding Predictive Architecture from Pixels", arXiv:2603.19312, 2026-03. https://arxiv.org/abs/2603.19312
