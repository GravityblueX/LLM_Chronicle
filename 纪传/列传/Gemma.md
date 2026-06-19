# 《Gemma 列传》

> Gemma 是 Google 第一次认认真真做开源大模型。在此之前，Google 的开源策略是"开源小模型，闭源大模型"——T5 可以开源，PaLM 不行。Gemma 改变了这个逻辑：Google 决定把 Gemini 的技术下放到开源模型中，用开源生态反哺闭源产品的竞争力。

---

## 一、技术背景

2023-2024 年，开源大模型的格局由 Meta 的 Llama 系列主导。Llama 1（2023-02）和 Llama 2（2023-07）的发布，让开源社区第一次有了可以和 GPT-3.5 竞争的基座模型。[^1][^2] 之后，Mistral（法国）用 Mistral 7B 和 Mixtral 8x7B 证明了小团队也能做出好模型；中国的 Qwen（阿里）和 DeepSeek 也在快速追赶。[^3][^4]

Google 在这个赛道上是缺席的。它有最好的闭源模型（PaLM 2、Gemini），但没有对应的开源版本。T5（2019）和 Flan-T5（2022）虽然开源，但都是小模型，无法和 Llama 70B 竞争。[^5] Google 在开源大模型领域几乎没有存在感。

2024 年初，Google 终于决定入场。Gemma 就是这个决定的产物——不是从零开始训练一个新模型，而是把 Gemini 的技术精华下放到小模型中，以开源形式发布。

---

## 二、核心事件

### 2.1 Gemma 1（2024-02）：Google 开源的起步

2024 年 2 月 21 日，Google 发布 Gemma 1，包含两个版本：**2B 和 7B**。[^6]

Gemma 1 的定位很明确：不是和 Llama 2 70B 比参数量，而是和 Llama 2 7B 比同规模下的性能。Google 声称 Gemma 1 的技术来自 Gemini——使用了和 Gemini 相同的架构设计、训练数据处理流程和训练方法，但参数量大幅缩小。[^6]

关键参数：

| 指标 | Gemma 1 7B | Llama 2 7B | Mistral 7B |
|------|-----------|-----------|-----------|
| 参数量 | 8.5B | 6.7B | 7.3B |
| 训练数据 | 6T token | 2T token | 不公开 |
| 上下文长度 | 8192 | 4096 | 32768 |
| 发布时间 | 2024-02 | 2023-07 | 2023-09 |

Gemma 1 7B 在多数评测基准上优于 Llama 2 7B，与 Mistral 7B 互有胜负。[^6] 虽然不是"碾压"，但对于 Google 的第一次开源尝试来说，已经足够有诚意。

Gemma 1 还有一个重要特点：**完全开放权重，允许商业使用**。这比 Llama 2 的许可证（限制月活 7 亿以上用户）和 Mistral 的 Apache 2.0 更为开放。[^6]

### 2.2 Gemma 2（2024-06）：同规模最强

2024 年 6 月 27 日，Google 发布 Gemma 2，包含三个版本：**9B、27B 和一个 2.6B 的轻量版**。[^7]

Gemma 2 的核心改进：

- **知识蒸馏**：从更大的模型（推测是 Gemini Pro 或 Ultra 级别）蒸馏知识到小模型中。这是 Google 的独特优势——有世界上最好的闭源模型当"老师"。[^7]
- **交替注意力机制**：交替使用全局注意力（global attention）和局部滑动窗口注意力（sliding window attention），在性能和效率之间取得更好的平衡。[^7]
- **更多训练数据**：Gemma 2 27B 使用了 13T token 训练，比 Gemma 1 7B 的 6T token 多了一倍多。[^7]

Gemma 2 的评测结果非常亮眼：**Gemma 2 27B 在多数评测上超过了 Llama 3 70B**——一个 27B 的模型击败了比自己大 2.5 倍的竞品。[^7] Gemma 2 9B 也在同规模（7B-9B 级别）中位居前列，超过 Llama 3 8B 和 Mistral 7B。[^7]

Gemma 2 的成功证明了 Google 的"知识蒸馏"策略是有效的：用闭源大模型的知识来提升开源小模型的性能，是一种不对称的竞争优势。

### 2.3 Gemma 3（2025-03）：多模态开源

2025 年 3 月 12 日，Google 发布 Gemma 3，包含 1B、4B、12B 和 27B 四个版本。[^8]

Gemma 3 的最大突破是**原生多模态**：支持文本、图像和视频输入（1B 版本仅支持文本）。这是 Google 第一次把多模态能力开源给社区。[^8]

关键特性：

- **多模态理解**：Gemma 3 12B 和 27B 可以理解图像和短视频，这是 Llama 3 和 Qwen 2 同规模模型不具备的能力（需要额外的视觉编码器）。[^8]
- **128K 上下文**：从 Gemma 2 的 8192 提升到 128K token，支持长文档处理。[^8]
- **ShieldGemma 安全过滤器**：内置安全机制，过滤有害输入和输出。[^8]

Gemma 3 27B 在 LMSYS Arena（人类盲评排名）中一度位列同规模开源模型第一，超过了 Llama 3 70B 和 Qwen 2 72B。[^9] 一个 27B 的多模态模型击败了 70B 的纯文本模型，再次验证了"蒸馏 + 多模态"的策略。

### 2.4 Gemma 3n（2025-05）：端侧优化

2025 年 5 月，Google 发布 Gemma 3n，针对手机和边缘设备优化。[^10] Gemma 3n 有两个版本：E2B（有效参数约 2B）和 E4B（有效参数约 4B），虽然总参数量分别为 5B 和 8B，但通过选择性激活机制，推理时只使用约 40% 的参数。[^10]

Gemma 3n 的定位是让大模型跑在手机上——在 Pixel、Samsung Galaxy 等设备上实现本地推理，无需联网。

---

## 三、影响与后继

### 3.1 开源生态中的定位

Gemma 在开源大模型生态中占据了一个独特的生态位：**不是最大的，但可能是同规模性能最好的**。

| 模型 | 参数量 | 核心优势 | 主要竞品 |
|------|--------|----------|----------|
| Llama 3 | 8B/70B/405B | 最大参数量、最广生态 | Gemma、Qwen、Mistral |
| Qwen 2.5 | 0.5B-72B | 中文最强、多尺寸 | Gemma、Llama |
| Mistral | 7B/8x7B/8x22B | MoE 架构、推理效率 | Gemma、Llama |
| **Gemma 3** | 1B-27B | **多模态原生、蒸馏效果好** | Llama、Qwen |

Gemma 的竞争优势不是"全面碾压"，而是"差异化"。当 Llama 追求更大的参数量，Qwen 追求中文能力，Mistral 追求推理效率时，Gemma 选择了"多模态 + 知识蒸馏"的路线。

### 3.2 Google 为什么要做开源

Google 做开源模型的动机比 Meta 更复杂：

- **对抗 Meta 的开源主导权**：Llama 系列已经建立了事实上的开源标准，Google 必须参与竞争，否则整个开发者生态都会围绕 Llama 构建。
- **用开源反哺闭源**：Gemma 的开源社区反馈（bug 报告、评测结果、下游应用）可以帮助改进 Gemini。开源是免费的"众包测试"。
- **TPU 生态推广**：Gemma 原生支持 Google Cloud TPU，开源 Gemma 可以拉动 TPU 的使用量。
- **政策考量**：欧盟 AI 法案等监管趋势对闭源模型施加更大压力，开源是一种"合规策略"。

与 Meta "开源即护城河"的哲学不同，Google 的开源更像是一种"战术性开源"——开源小模型，保护大模型；开源基座，拉动云服务。

### 3.3 知识蒸馏作为差异化路线

Gemma 最持久的影响可能是证明了**知识蒸馏是开源模型的有效训练策略**。

传统的大模型训练是从头开始用海量数据训练；知识蒸馏是从一个已经训练好的大模型中提取知识，注入到小模型中。Google 是最适合做这件事的公司——它有 Gemini Ultra 这样的"教师模型"，也有 TPU 集群的算力。

Gemma 2 27B 能超越 Llama 3 70B，很大程度上就是因为知识蒸馏。这个结果激励了其他公司也开始尝试蒸馏策略：DeepSeek 的 R1 蒸馏版、Microsoft 的 Phi 系列都用了类似的方法。

---

## 评曰

Gemma 的核心贡献，不是在参数量上打败谁，而是给开源社区带来了两条新路线：知识蒸馏和原生多模态。

Gemma 之所以能在同规模中脱颖而出，关键在于 Google 的独特优势——拥有世界上最好的闭源模型之一（Gemini），可以把它的知识蒸馏到小模型中。这是一种 Meta 和 Mistral 不具备的能力。当 Llama 用更多的数据、更大的参数量来提升性能时，Gemma 用"教师模型的知识"走了一条捷径。Gemma 3 的多模态能力更是把这条路推向了极致：27B 的模型能理解图像和视频，这在同规模开源模型中是独一份的。

Gemma 的历史意义在于：它改变了"开源模型 = 大公司的残羹冷炙"的刻板印象。在 Gemma 之前，Google 的开源策略是"开源旧技术，保留新技术"；在 Gemma 之后，Google 开始把前沿技术（多模态、知识蒸馏）下放到开源模型中。这个转变不是出于慈善，而是出于竞争——在开源大模型的赛道上，不参与就意味着把整个开发者生态拱手让给 Meta 和 Mistral。Gemma 证明了一件事：在大模型时代，开源不是弱者的退路，而是强者的战场。

---

*赫默（编年主笔）*

---

[^1]: Touvron et al., "LLaMA: Open and Efficient Foundation Language Models", arXiv:2302.13971, 2023-02-27. https://arxiv.org/abs/2302.13971
[^2]: Touvron et al., "Llama 2: Open Foundation and Fine-Tuned Chat Models", arXiv:2307.09288, 2023-07-18. https://arxiv.org/abs/2307.09288
[^3]: Jiang et al., "Mistral 7B", arXiv:2310.06825, 2023-10-10. https://arxiv.org/abs/2310.06825
[^4]: Bai et al., "Qwen Technical Report", arXiv:2309.16609, 2023-09-28. https://arxiv.org/abs/2309.16609
[^5]: Chung et al., "Scaling Instruction-Finetuned Language Models", arXiv:2210.11416, 2022-10-20. https://arxiv.org/abs/2210.11416
[^6]: Gemma Team, "Gemma: Open Models Based on Gemini Research and Technology", arXiv:2403.08295, 2024-02-21. https://arxiv.org/abs/2403.08295
[^7]: Gemma Team, "Gemma 2: Improving Open Language Models at a Practical Size", arXiv:2408.00118, 2024-06-27. https://arxiv.org/abs/2408.00118
[^8]: Gemma Team, "Gemma 3 Technical Report", arXiv:2503.19786, 2025-03-12. https://arxiv.org/abs/2503.19786
[^9]: LMSYS Chatbot Arena, "Gemma 3 27B Ranking", LMSYS, 2025-03. https://chat.lmsys.org/
[^10]: Google, "Introducing Gemma 3n: The most capable model you can run on a phone", Google AI Blog, 2025-05-20. https://blog.google/technology/developers/gemma-3n/
