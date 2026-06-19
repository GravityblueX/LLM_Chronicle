# 《AI 基础设施与芯片》

> 大模型的每一次能力涌现，最终都要落实到晶体管上。软件可以迭代，算法可以优化，数据可以清洗——但这一切的前提是一块能跑得动矩阵乘法的硅片。2020 年以前，AI 芯片几乎等同于 NVIDIA GPU；2020 年以后，Google、Amazon、华为、Microsoft 相继下场自研，芯片成为算力竞争与地缘博弈的物理战场。本篇记录 AI 芯片从 NVIDIA 一家独大到多极竞争的技术演进、制程竞赛与自研趋势。

---

## 一、概述

AI 基础设施的物理层由三个核心要素构成：计算芯片、互连网络和存储系统。其中计算芯片是最核心、最受关注、也最稀缺的环节——它直接决定了训练一个前沿模型需要多少天、花多少钱、消耗多少电。

2017—2020 年间，AI 训练硬件的事实标准是 NVIDIA V100 和 A100，绝大多数前沿模型的训练都在这两种 GPU 上完成。Google 从 2016 年开始自研 TPU（Tensor Processing Unit），但主要内部使用，对外影响有限。这一时期可以称为"单一供应商时代"——整个 AI 行业的算力供应链高度依赖 NVIDIA。

2020 年之后，三股力量打破了这种单一依赖：**缩放定律带来的算力需求爆炸**让 NVIDIA GPU 供不应求，倒逼云厂商自研替代方案；**美国对华芯片出口管制**（详见《地缘与封锁》）重新划定了全球 AI 芯片的流通边界；**制程工艺逼近物理极限**让每一代芯片的升级变得更加昂贵和困难。三股力量交织，共同塑造了 2025 年的 AI 芯片格局：不再是 NVIDIA 一家独大，而是"NVIDIA 仍然主导，但每一层都出现了替代者"。

---

## 二、NVIDIA GPU：从 A100 到 GB200 的三代跃迁

> *NVIDIA 的 GPU 迭代节奏在 2020 年之后显著加快——从"两年一代"压缩到"一年一代"，每一代的算力提升幅度从 2—3 倍跃升到 5—10 倍。这种加速既是技术驱动（制程进步、封装创新），也是竞争压力驱动（客户不能等，替代者在逼近）。*

### 2.1 A100：大模型训练的"基础设施之母"

NVIDIA A100 基于 Ampere 架构，2020 年 5 月发布。FP16 算力 312 TFLOPS，引入多实例 GPU（MIG）技术，允许将单块 GPU 分割为最多 7 个独立实例以提高利用率。[^1] A100 的真正突破不只是峰值算力——它首次将 **Tensor Core** 的矩阵运算能力与大规模分布式训练的互连需求（NVLink 2.0，600 GB/s）整合到一个产品中。

A100 成为 2020—2023 年间 AI 训练的事实标准。GPT-4 据估算使用了约 25,000 块 A100 训练，Meta 的 OPT-175B 使用了 992 块 A100，Google 的 PaLM 540B 使用了 6,144 块 TPUv4——但外部团队几乎只能选择 A100。[^2] A100 的 80GB HBM2e 版本（2021 年推出）尤其受大模型训练欢迎：高带宽内存意味着更大的 batch size 和更高的吞吐量。

### 2.2 H100：Transformer Engine 与 FP8 的硬件突破

H100 基于 Hopper 架构，2022 年发布、2023 年大规模出货。FP16 算力约 990 TFLOPS，是 A100 的约 3 倍；更重要的是引入了 **Transformer Engine**——一个专门针对 Transformer 模型训练优化的硬件单元，支持 FP8 精度训练，在不显著损失精度的前提下将训练吞吐量提升到 A100 的 2—4 倍。[^3]

H100 的另一项关键升级是 **NVLink 4.0**，单 GPU 互连带宽提升至 900 GB/s，并支持 NVLink Switch 以实现多机架级别的全互联。对于万卡级集群来说，互连带宽和拓扑架构决定了实际训练效率——单卡算力再高，如果通信成为瓶颈，集群效率也会大打折扣。（详见《算力变迁》）

H100 的供需失衡是 2023 年科技行业最突出的硬件叙事。等待时间达到数月，云 GPU 按小时计费的 H100 实例成为最稀缺的计算资源。NVIDIA 的数据中心业务收入在 FY2024 达到约 475 亿美元，同比增长超过 200%。[^4]

### 2.3 B200 / GB200 NVL72：双 Die 封装与 AI 工厂

**2024-03-18**，NVIDIA 在 GTC 2024 上发布 Blackwell 架构与 B200 GPU。B200 采用 **双 Die 封装**——将两块 GPU 芯片封装在同一基板上，FP4 推理算力达到 20 PFLOPS，约为 H100 的 3—5 倍。[^5]

真正的系统级创新是 **GB200 NVL72**：一个机架包含 72 块 B200 GPU 和 36 块 Grace CPU，通过第五代 NVLink 和 NVLink Switch 全互联，总 FP4 算力达到 1.44 EFLOPS。Grace CPU（基于 Arm 架构）与 B200 GPU 通过 NVLink-C2C 直连，CPU-GPU 间带宽达到 900 GB/s，远超传统 PCIe。

B200 的良率问题在 2024 年下半年一度引发供应延迟。黄仁勋在财报电话会上承认"需求远超供应"。但 Blackwell 的规模化部署仍在推进：xAI 的 Colossus 二期据报将从 H100 转向 B200，Microsoft 和 Google 均已下单 GB200 NVL72。

> *黄仁勋将 GB200 NVL72 定义为"AI 工厂"而不是"服务器"——这不只是营销话术。当一个机架的算力超过 1 EFLOPS 时，传统数据中心的供电、散热、网络架构全部需要重新设计。AI 基础设施不再是"把 GPU 插进服务器机柜"，而是"为 AI 训练专门建造一座工厂"。*

### 关键数据

| GPU | 架构 | 发布年份 | FP16 算力 | FP4 算力 | 关键特性 |
|-----|------|----------|-----------|----------|----------|
| A100 | Ampere | 2020 | 312 TFLOPS | — | MIG、NVLink 2.0 |
| H100 | Hopper | 2022 | 990 TFLOPS | — | Transformer Engine、FP8、NVLink 4.0 |
| B200 | Blackwell | 2024 | — | 20 PFLOPS | 双 Die 封装、NVLink 5.0 |

*注：A100/H100 报 FP16，B200 报 FP4，精度标准不同，不能直接倍数比较。*

---

## 三、Google TPU：自研芯片的先行者

> *Google 是唯一一家在自研 AI 芯片上与 NVIDIA 有十年以上积累的公司。TPU 从 2016 年的"内部实验"发展到 2025 年的"第六代"，是云厂商自研芯片最成熟的范本——但也证明了这条路走通有多难。*

### 3.1 TPU 的起源：为 TensorFlow 而生

TPU（Tensor Processing Unit）是 Google 自主设计的 AI 加速器 ASIC，专门针对张量运算优化。第一代 TPU 于 2016 年部署于 Google 数据中心，用于 AlphaGo 对弈李世石的推理环节。[^6] TPUv1 是推理专用芯片，不支持训练。

**TPUv2**（2017 年）和 **TPUv3**（2018 年）增加了训练支持。BERT-Large 在 64 块 TPUv3 上训练了 4 天，GPT-2 使用 32 块 TPUv3 训练。[^7] 但这一时期，TPU 主要服务于 Google 内部研究（Google Brain、DeepMind）和 Google Cloud 客户，外部渗透率有限。

### 3.2 TPUv4 与 TPUv5：规模化与竞争力跃升

**TPUv4**（2022 年部署）是 Google 第一次在大规模训练中证明 TPU 竞争力的产品。PaLM 540B 在 6,144 块 TPUv4 上训练，计算量约 2.5×10²⁴ FLOPs。[^8] TPUv4 Pod 的互连架构采用 3D Torus 拓扑，单 Pod 最多 4,096 个芯片，理论峰值性能约 1.1 EFLOPS（BF16）。

**TPUv5e**（2023 年 8 月发布）和 **TPUv5p**（2023 年 12 月发布）进一步拉开了差异化路线：v5e 面向推理和中等规模训练（成本效率优先），v5p 面向大规模训练（性能优先）。Gemini Ultra 据报道在 TPUv5p 集群上训练。[^9]

### 3.3 TPUv6（Trillium）：对标 Blackwell

**2024-05-14**，Google 在 I/O 2024 上宣布 **TPUv6e（代号 Trillium）**，声称单芯片推理性能是 TPUv5e 的 4.7 倍，训练性能提升约 3.8 倍。[^10] TPUv6 采用 SparseCore 架构优化稀疏计算，并改进了 HBM 带宽以支持更大规模模型的训练。

Google TPU 与 NVIDIA GPU 的竞争逻辑不同：NVIDIA 卖芯片给所有人，Google 用 TPU 训练自己的模型并作为云服务出租。TPU 的竞争力不在于"能不能打败 H100"，而在于"能不能让 Google Cloud 客户不再依赖 NVIDIA"——这是一个生态系统问题，不是一个硬件 benchmark 问题。

### 关键数据

| 版本 | 发布年份 | 关键特性 | 代表模型 |
|------|----------|----------|----------|
| TPUv1 | 2016 | 推理专用 ASIC | AlphaGo 推理 |
| TPUv3 | 2018 | 训练+推理 | BERT、GPT-2 |
| TPUv4 | 2022 | 3D Torus 互连，4096 芯片 Pod | PaLM 540B |
| TPUv5p | 2023 | 大规模训练优化 | Gemini Ultra |
| TPUv6e | 2024 | SparseCore，4.7× 推理提升 | Gemini 2.0 |

---

## 四、华为昇腾：封锁下的国产替代

> *华为昇腾是中国 AI 芯片国产替代的核心叙事。它不是在商业竞争中脱颖而出的，而是在出口管制的压力下被推到了"没有选择"的位置。这意味着昇腾的技术指标必须在两个维度上同时对标——既要追赶 NVIDIA 的性能，又要填补禁运造成的供给缺口。*

### 4.1 昇腾 910 系列

华为 Ascend（昇腾）系列 AI 芯片由海思半导体设计，基于华为自研 Da Vinci（达芬奇）计算架构。

**昇腾 910B**（2023 年）：是目前中国市场上最接近 NVIDIA A100 竞争力的 AI 训练芯片。2024 年公开的 MLPerf 评测数据显示，910B 在部分推理场景中接近 A100 水平，FP16 算力标称约 320 TFLOPS。[^11] 但在训练场景中，910B 的实际吞吐量与 A100 仍有差距，尤其是在大模型分布式训练中，互连带宽和软件栈的成熟度是主要瓶颈。

**昇腾 910C**（2024 年下半年传出消息）：据报道采用中芯国际 N+2 工艺（约等效 7nm），目标是在 910B 基础上进一步提升训练性能。[^12] 但由于无法获得台积电先进制程（5nm 及以下）和 EUV 光刻设备，昇腾在制程上存在硬性天花板。

### 4.2 软件生态：CANN 与 MindSpore

华为围绕昇腾构建了自研软件栈：**CANN**（Compute Architecture for Neural Networks）算子库对标 CUDA，**MindSpore** 深度学习框架对标 PyTorch/TensorFlow。但 CUDA 生态经过二十年积累，拥有数百万行优化代码和数十万开发者的使用习惯（详见《NVIDIA 本纪》），这不是 CANN 短期能复制的。

现实中的兼容策略是：华为提供 PyTorch 插件（torch_npu）以降低迁移成本，但在实际部署中，大量算子需要针对昇腾硬件重新适配和优化。2024 年的共识是：**推理可以用昇腾，训练仍严重依赖 NVIDIA 存量**。字节跳动、百度等大厂虽然在适配昇腾，但核心前沿模型的训练仍以 NVIDIA GPU 为主。

### 4.3 其他国产芯片

华为之外，中国 AI 芯片市场还有一批追赶者：

- **寒武纪（Cambricon）**：MLU 系列，思元 590（2024 年）标称 FP16 算力约 512 TFLOPS，但实际部署规模有限。[^13]
- **壁仞科技（Biren）**：BR100 系列曾标称"中国最强"，但受美国制裁（2022 年被列入实体清单）影响，出货受阻。[^14]
- **海光信息（Hygon）**：DCU 系列基于 AMD CDNA 架构授权，技术路线与 AMD MI250 接近，但制程和软件生态同样受限。

2024—2025 年的共识是：**国产 AI 芯片在推理场景已具备可用性，训练场景仍存在代际差距。** 封锁并没有让中国 AI 停滞——DeepSeek-V3 在 H800 上训练出前沿模型就是明证——但它确实让中国在先进制程 GPU 的长期供给上面临结构性约束。（详见《地缘与封锁》）

---

## 五、云厂商自研芯片：从依赖到多源

> *当 NVIDIA GPU 的供应紧张到"有钱也买不到"时，云厂商的应对策略是：自己造。这不只是降本——更是一种供应链安全的战略对冲。*

### 5.1 Amazon：Trainium 与 Inferentia

Amazon（AWS）是云厂商自研 AI 芯片最早、最积极的玩家。

**Inferentia**（2019 年，第一代）：推理专用芯片，面向成本敏感的推理场景。[^15]

**Trainium**（2022 年，第一代）和 **Trainium2**（2024 年 re:Invent 发布）：面向大模型训练。Trainium2 单芯片 BF16 算力标称约 200 TFLOPS，集群规模支持最多 100,000 个芯片通过 UltraCluster 互连。[^16] Anthropic 是 Trainium2 的最大客户之一——2024 年 AWS 与 Anthropic 签署了数十亿美元的 Trainium 训练合同。

AWS 的自研芯片策略不追求在单卡性能上超越 NVIDIA，而是追求**集群级别的成本效率**——通过定制互连（EFA，Elastic Fabric Adapter）和优化软件栈（AWS Neuron SDK），在大集群上实现接近 NVIDIA 的训练效率，但价格更低。

### 5.2 Microsoft：Maia 100 与 Cobalt

**2023-11-15**，Microsoft 在 Ignite 2023 上发布 **Maia 100**——首款自研 AI 加速器，基于台积电 5nm 工艺。[^17] Maia 100 的详细规格未完全公开，但据报道采用 4-bit 低精度推理优化，配合 Microsoft 自研的 Sidekick 液冷系统。

Microsoft 同时发布了 **Cobalt 100**——基于 Arm 架构的通用 CPU，用于云实例中的非 AI 计算负载。Maia + Cobalt 的组合表明 Microsoft 试图构建从 CPU 到 AI 加速器的完整自研基础设施——减少对 NVIDIA 和 Intel 的依赖。

但 Maia 的实际部署进度较慢。2025 年初，Azure 的 AI 训练仍以 NVIDIA GPU（H100、GB200）为主，Maia 主要用于内部工作负载和特定客户试点。

### 5.3 Apple：M 系列芯片的 AI 维度

Apple 的 M 系列（M1—M4）SoC 中的 Neural Engine 虽然不是数据中心芯片，但在端侧 AI 推理（iPhone、Mac 上运行大模型）领域有独特地位。M4 Pro/Max 的 Neural Engine 算力达到 38 TOPS，支持在本地运行 70B 参数级模型的量化推理。[^18]

Apple 的存在提示了一个容易被忽略的趋势：**AI 芯片不只有数据中心**。随着模型压缩和端侧推理技术的成熟，消费级芯片中的 AI 加速单元正变得越来越重要。

---

## 六、制程竞赛：摩尔定律的 AI 维度

> *AI 芯片的性能提升有两条腿：架构创新和制程进步。架构创新可以带来数倍的效率提升（如 Tensor Core、Transformer Engine），但制程进步是更底层、更持久的推动力。当制程逼近物理极限时，每一代升级都变得更昂贵、更困难——而 AI 芯片对先进制程的需求比任何其他芯片品类都更饥渴。*

### 6.1 台积电：AI 芯片制造的唯一选择

台积电（TSMC）是 AI 芯片先进制程的事实垄断者。NVIDIA 的 A100（台积电 7nm）、H100（台积电 4nm）、B200（台积电 4nm，改进版）全部由台积电代工。Google TPU、Amazon Trainium、Microsoft Maia 也大多依赖台积电 5nm 或更先进工艺。[^19]

**CoWoS（Chip-on-Wafer-on-Substrate）先进封装**是另一个关键瓶颈。H100 和 B200 的 HBM（高带宽内存）堆叠需要 CoWoS 封装，而台积电的 CoWoS 产能长期供不应求。2023—2024 年间，CoWoS 产能一度成为制约 NVIDIA GPU 出货的最关键瓶颈——比芯片本身更紧张。[^20]

### 6.2 三星与 Intel：追赶者

**三星（Samsung Foundry）** 的 3nm GAA（Gate-All-Around）工艺于 2022 年投产，但良率和性能均不及台积电同期产品。部分 NVIDIA 消费级 GPU 使用三星代工，但数据中心级产品全部选择台积电。

**Intel Foundry Services** 在 2024 年推出 Intel 18A（约等效 1.8nm），但大规模量产尚未得到验证。Intel 的 Gaudi 3 AI 加速器（原 Habana Labs 产品线）使用 Intel 自有工艺，市场渗透率有限。

### 6.3 中芯国际：7nm 的天花板

中芯国际（SMIC）是中国大陆最先进的晶圆代工厂。2023 年 8 月，华为 Mate 60 Pro 搭载的麒麟 9000S 芯片被拆解证实使用中芯国际 N+1 工艺（约等效 7nm）。[^21] 但 7nm 是 SMIC 不使用 EUV 光刻技术的极限——台积电的 5nm、4nm、3nm 工艺依赖 ASML 的 EUV 设备，而 ASML 受荷兰出口管制限制无法向中国出售 EUV 机器。

这意味着华为昇腾芯片在制程上面临硬性天花板：**在可以预见的未来，国产 AI 芯片将停留在 7nm 级别**，而 NVIDIA 的下一代产品将使用台积电 3nm 甚至更先进工艺。制程差距转化为能效差距——相同算力下功耗更高，相同功耗下算力更低。

---

## 七、自研芯片趋势：为什么每个云厂商都要造芯片

自研 AI 芯片的浪潮始于 2016 年（Google TPU），在 2023—2024 年间全面加速。驱动力不只是技术——更深层的原因是供应链安全和定价权。

**供应链安全**：NVIDIA GPU 的供需失衡（2023 年）让所有云厂商意识到"依赖单一供应商"的风险。H100 的等待时间让客户的模型训练计划被迫推迟，也让云厂商的扩张节奏被 NVIDIA 的供货排期绑架。自研芯片是一种"不把鸡蛋放在一个篮子里"的对冲。

**定价权**：NVIDIA 数据中心 GPU 的毛利率超过 70%——这意味着客户每花 1 美元买 GPU，NVIDIA 赚走 70 美分以上。自研芯片让云厂商可以自己控制成本结构。即使自研芯片的绝对性能不如 NVIDIA，只要集群总成本更低（包括芯片采购、电力、冷却、软件），就值得投资。

**垂直整合**：从芯片到云服务的垂直整合，让云厂商可以针对自己的软件栈优化硬件设计——Google 针对 JAX 优化 TPU，AWS 针对 Neuron SDK 优化 Trainium。这种"软件-硬件协同设计"是 NVIDIA 作为第三方芯片供应商无法做到的。

但自研芯片的挑战同样巨大：

- **软件生态**：CUDA 生态是 NVIDIA 最深的护城河。自研芯片必须构建自己的软件栈（TPU 的 JAX/XLA、Trainium 的 Neuron SDK、昇腾的 CANN），而开发者的学习和迁移成本极高。
- **投资回报周期**：芯片研发从设计到量产通常需要 3—5 年。在 AI 技术迭代速度以月计的行业里，一颗芯片的设计决策可能在量产时已经过时。
- **NVIDIA 的迭代速度**：NVIDIA 保持着每 1—2 年一代新架构的节奏，每一代性能提升 2—5 倍。自研芯片要追上这个速度，投入的人力和资本是惊人的。

---

## 八、事实脉络表

| 时间 | 事件 | 意义 |
|------|------|------|
| 2016-05 | Google TPUv1 部署 | 首款 AI 专用 ASIC，推理专用 [^6] |
| 2020-05 | NVIDIA A100 发布 | 成为 2020—2023 AI 训练事实标准 [^1] |
| 2022-10 | BIS 对华 AI 芯片禁运 | A100/H100 断供，全球芯片供应链重构 [^22] |
| 2022 | TPUv4 大规模部署 | PaLM 540B 在 6144 块 TPUv4 上训练 [^8] |
| 2022-10 | NVIDIA H100 出货 | Transformer Engine、FP8，2—4× A100 [^3] |
| 2023-08 | Google TPUv5e 发布 | 推理成本优化路线 [^9] |
| 2023-11 | Microsoft Maia 100 发布 | 首款微软自研 AI 加速器 [^17] |
| 2024-03 | NVIDIA B200 / GB200 NVL72 发布 | 双 Die 封装，单机架 1.44 EFLOPS [^5] |
| 2024-05 | Google TPUv6e (Trillium) 发布 | 4.7× 推理提升，SparseCore [^10] |
| 2024-12 | AWS Trainium2 发布 | 集群规模 100K 芯片 [^16] |
| 2024 | 华为昇腾 910C 消息 | 中芯国际 N+2 工艺，7nm 天花板 [^12] |

---

## 九、趋势分析

- **NVIDIA 仍然主导，但护城河正在被侵蚀**。2025 年，NVIDIA 在 AI 训练 GPU 市场的份额仍超过 80%，但 Google TPU、AWS Trainium、华为昇腾各自在特定场景中建立了竞争力。侵蚀的速度取决于自研芯片的软件生态能否达到"开发者不觉得痛苦"的门槛——目前还没有。

- **自研芯片是云厂商的战略必然，不是技术理想**。驱动自研的核心原因不是"造出比 NVIDIA 更好的芯片"，而是"不被 NVIDIA 的供货排期和定价权绑架"。即使自研芯片的绝对性能低于 NVIDIA，只要成本效率和供应链可控性更好，就值得投资。

- **制程竞赛的赢家仍然是台积电**。无论 NVIDIA、Google 还是 Amazon，先进制程芯片的代工都依赖台积电。台积电的 CoWoS 先进封装产能是比芯片设计更稀缺的资源。在这个意义上，AI 芯片的竞争不只是"谁设计得更好"，也是"谁能在台积电拿到更多产能"。

- **软件生态是真正的长期壁垒**。硬件可以追赶，制程可以等——但 CUDA 生态的二十年积累是一个无法用一代芯片绕过的障碍。自研芯片要成功，最终要解决的不是"算力"问题，而是"开发者愿意在你的平台上写代码"的问题。

- **AI 芯片正在从"通用 GPU"向"专用加速器"分化**。NVIDIA 的 Transformer Engine、Google 的 SparseCore、Amazon 的自定义精度支持——每一代新芯片都在往"为特定 AI 工作负载优化"的方向走。通用计算 GPU 的时代正在结束，AI 专用硬件的时代正在开始。

---

## 评曰

AI 芯片的历史读到 2025 年，有一条清晰的主线浮现出来：**从"谁的芯片最快"变成了"谁的芯片最不可替代"。**

NVIDIA 的 GPU 不是最快的——Google TPU 在部分推理任务上效率更高，Apple Neural Engine 在端侧延迟上更低，甚至华为昇腾在特定中国客户场景中性价比更好。但 NVIDIA 之所以不可替代，是因为整个 AI 行业的软件栈——从 PyTorch 的每一行算子优化，到每一位博士生的代码习惯——都绑定在 CUDA 上。这是一种"集体惯性"构成的垄断：不是你不能用别的，而是你不想付出迁移的代价。

但惯性不会永远持续。Google 在 2025 年已经证明 JAX + TPU 的组合可以在 Gemini 系列上训练出世界级模型。DeepSeek 用 H800（NVIDIA 针对中国的降规版）和自研 MoE 架构做出了前沿模型——这说明硬件约束可以被算法效率部分突破。如果开源软件栈（如 Triton、ROCm）继续成熟，如果自研芯片的开发者体验不再那么痛苦，NVIDIA 的 CUDA 护城河可能在未来五年内被侵蚀到"优势明显但不再垄断"的程度。

对整个 AI 行业来说，芯片的多极化是一件好事。单一供应商的过度依赖——无论是 NVIDIA 还是台积电——都是系统性风险。当 Google、Amazon、Microsoft、华为都在造自己的芯片时，行业对任何单一供应商的脆弱性都在下降。但多极化也意味着碎片化：不同芯片、不同软件栈之间的兼容性问题，可能成为未来十年 AI 基础设施的最大工程挑战之一。

---

*本篇由终末地工业史官团队编纂：符玄（理论框架审核）。*

---

[^1]: NVIDIA, "NVIDIA A100 Tensor Core GPU Architecture", 2020-05. https://images.nvidia.com/aem-dam/en-zz/Solutions/data-center/nvidia-ampere-architecture-whitepaper.pdf
[^2]: OpenAI, "GPT-4 Technical Report", arXiv:2303.08774, 2023-03. https://arxiv.org/abs/2303.08774
[^3]: NVIDIA, "NVIDIA H100 Tensor Core GPU Architecture", 2022. https://resources.nvidia.com/en-us-tensor-core/gtc22-whitepaper-hopper
[^4]: NVIDIA, "FY2024 Earnings Report", 2024-02-21. https://investor.nvidia.com/financial-info/quarterly-results
[^5]: NVIDIA, "NVIDIA Blackwell Platform Arrives to Power a New Era of Computing", GTC 2024, 2024-03-18. https://nvidianews.nvidia.com/news/nvidia-blackwell-platform-arrives-to-power-a-new-era-of-computing
[^6]: Jouppi et al., "In-Datacenter Performance Analysis of a Tensor Processing Unit", ISCA 2017. https://arxiv.org/abs/1704.04760
[^7]: Devlin et al., "BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding", arXiv:1810.04805, 2018-10. https://arxiv.org/abs/1810.04805
[^8]: Chowdhery et al., "PaLM: Scaling Language Modeling with Pathways", arXiv:2204.02311, 2022-04. https://arxiv.org/abs/2204.02311
[^9]: Google Cloud Blog, "Cloud TPU v5e and AI Hypercomputer", 2023-08-29. https://cloud.google.com/blog/products/ai-machine-learning/introducing-cloud-tpu-v5e-and-a3-hypercomputer
[^10]: Google Cloud Blog, "Google Axion Processors and TPU v6e (Trillium)", 2024-05-14. https://cloud.google.com/blog/products/compute/introducing-googles-new-ai-chips-tpu-v5p-and-axion
[^11]: MLPerf Inference v4.0 Results, 2024. https://mlcommons.org/benchmarks/inference-datacenter/
[^12]: SCMP, "Huawei's next-gen Ascend 910C AI chip reportedly in testing", 2024-08. https://www.scmp.com/tech/big-tech/article/3275000/huaweis-next-gen-ascend-910c-ai-chip-reportedly-testing
[^13]: Cambricon, "SiYuan 590 Product Page", 2024. https://www.cambricon.com/
[^14]: Reuters, "U.S. adds China's Biren, Moore Threads to export control list", 2022-10. https://www.reuters.com/technology/us-adds-chinas-biren-moore-threads-export-control-list-2022-10-07/
[^15]: AWS, "Amazon EC2 Inf1 Instances", 2019. https://aws.amazon.com/ec2/instance-types/inf1/
[^16]: AWS, "AWS Trainium2 and UltraServer", re:Invent 2024. https://aws.amazon.com/blogs/aws/new-amazon-ec2-trn2-instances-for-high-performance-gen-ai-model-training/
[^17]: Microsoft, "Microsoft unveils its first custom AI chip and Arm-based CPU", 2023-11-15. https://blogs.microsoft.com/blog/2023/11/15/microsoft-unveils-its-first-custom-ai-chip-and-cobalt-arm-based-cpu/
[^18]: Apple, "Apple Introduces M4 Pro and M4 Max", 2024-10-28. https://www.apple.com/newsroom/2024/10/apple-introduces-m4-pro-and-m4-max/
[^19]: TSMC, "TSMC N4P Technology", 2024. https://www.tsmc.com/english/dedicatedFoundry/technology/logic/l_4nm
[^20]: TrendForce, "CoWoS Capacity Becomes Bottleneck for AI Chip Shipments", 2024-03. https://www.trendforce.com/presscenter/news/20240301-12060.html
[^21]: TechInsights, "Huawei Mate 60 Pro — Kirin 9000s Die Analysis", 2023-08. https://www.techinsights.com/blog/huawei-mate-60-pro-teardown
[^22]: US Department of Commerce, BIS, "Implementation of Additional Export Controls", 2022-10-07. 87 FR 62186. https://www.federalregister.gov/documents/2022/10/13/2022-21658/
