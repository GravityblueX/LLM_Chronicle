# 《NVIDIA 本纪》

> 在大模型时代，有一家公司不训练模型、不发布聊天应用、不做搜索引擎，却比所有做这些事的公司都更不可替代。NVIDIA 制造的 GPU——更准确地说，是围绕 GPU 构建的 CUDA 软件生态——是整个 AI 算力基础设施的基座。从 Transformer 在 8 块 P100 上诞生，到 Colossus 用 10 万块 H100 训练 Grok，每一次前沿模型的训练都离不开 NVIDIA 的芯片。它不是这场军备竞赛的参赛者，它是军火商。

---

## 一、概述

NVIDIA（全称 NVIDIA Corporation）由黄仁勋（Jensen Huang）、Chris Malachowsky 和 Curtis Priem 于 1993 年在加州桑尼维尔创办，最初定位是一家图形芯片公司——为 PC 游戏市场提供 3D 加速卡。[^1] 三十年后，NVIDIA 的核心叙事已经完全改变：它不再是一家显卡公司，而是**全球 AI 计算基础设施的事实垄断者**。

截至 2025 年，NVIDIA 在 AI 训练 GPU 市场的份额超过 80%。[^2] 全球几乎每一座 AI 数据中心——无论是 OpenAI、Google、Meta 还是中国的字节跳动和 DeepSeek——都在使用 NVIDIA 的 GPU 或曾经使用过。更重要的是，NVIDIA 的护城河不只是硬件。2006 年推出的 CUDA（Compute Unified Device Architecture）并行计算平台，经过二十年的迭代和生态建设，将主流深度学习框架（PyTorch、TensorFlow、JAX）与 NVIDIA GPU 深度绑定——任何一个想训练前沿模型的团队，都必须在 NVIDIA 的软硬件栈上工作。

这种双重锁定——硬件性能领先 + 软件生态不可替代——让 NVIDIA 在大模型时代获得了一种独特的权力：它不决定模型的方向，但它决定了模型的算力上限和成本下限。

---

## 二、创立与早年

### 2.1 显卡三国：从 VGA 到 GPU

1993 年创立时，NVIDIA 是数十家图形芯片创业公司之一。1990 年代的 PC 图形芯片市场是一个"混战"阶段——3dfx、ATI、S3、Matrox、Trident 各据一方。NVIDIA 的起步并不顺利：其前两款产品（NV1、NV2）采用非主流的四边形渲染方案，与行业标准的三角形渲染不兼容，市场反响惨淡。

转机出现在 1999 年。NVIDIA 发布 **GeForce 256**——首款以"GPU"（Graphics Processing Unit）命名的消费级图形芯片。GeForce 256 集成了硬件变换与光照（T&L），将此前由 CPU 承担的几何计算卸载到专用硬件上。[^3] "GPU"这个名称此后成为整个行业的标准术语。

2000 年，NVIDIA 收购 3dfx 的核心资产（3dfx 此前破产），巩固了在消费级图形市场的地位。到 2006 年，主要竞争者只剩 ATI（后被 AMD 于 2006 年收购）。显卡市场从"群雄割据"变成了 NVIDIA vs AMD 的两强格局——这个格局延续至今。

### 2.2 CUDA：从图形到通用计算的战略赌注

2006 年 11 月，NVIDIA 发布 **CUDA**——一个让开发者用 C 语言在 NVIDIA GPU 上编写通用并行计算程序的平台。[^4]

这是一个大胆到近乎反常的战略选择。当时 GPU 的"通用计算"（GPGPU）市场几乎不存在——用显卡做非图形计算是一个极小众的学术探索。CUDA 的开发和推广需要巨大的投入：文档、SDK、编译器、学术合作计划、培训课程。NVIDIA 持续投入了近十年，CUDA 的财务回报微乎其微。

黄仁勋的逻辑是：**GPU 的并行计算能力远超 CPU，只是缺少一个让开发者容易使用的软件栈。** 如果 CUDA 成功，GPU 将从"游戏硬件"变成"通用计算平台"，市场将从游戏扩展到科学计算、金融、石油勘探、分子动力学——每一个需要大规模并行计算的领域。

这个赌注在当时看来回报不确定，但黄仁勋坚持了。十年后，CUDA 的生态积累成为 NVIDIA 最深、最宽的护城河——不是因为别的公司造不出好 GPU，而是因为"迁移整个软件栈"的成本太高了。（详见《算力变迁》）

---

## 三、关键事件

### 3.1 AlexNet 时刻（2012）：GPU 从图形到 AI

2012 年，Alex Krizhevsky、Ilya Sutskever 和 Geoffrey Hinton 的 **AlexNet** 在 ImageNet 图像分类挑战赛中以压倒性优势获胜（top-5 错误率从 26% 降到 15.3%）。[^5] AlexNet 在两块 NVIDIA GTX 580 GPU 上训练了约六天。

这个技术事件对 NVIDIA 的意义远超学术界：它第一次证明了"GPU 训练深度神经网络"的可行性——而且 GPU 训练比 CPU 训练快了数十倍。从此，NVIDIA 的产品线从"游戏显卡"扩展到了"AI 研究硬件"。

2012—2017 年间，AI 研究者对 NVIDIA GPU 的需求从"几块游戏卡"扩展到了"几十块专业卡"。NVIDIA 的数据中心业务收入从 2012 年的不足 3 亿美元增长到 2017 年的约 19 亿美元。[^6] 但真正改变规模的，是 2017 年 Transformer 的诞生。

### 3.2 Transformer 与 GPU 算力需求的爆发（2017—2020）

2017 年 6 月，Vaswani 等人发表《Attention Is All You Need》。这篇论文的训练在 8 块 NVIDIA P100 GPU 上完成——训练 base 模型仅用了 12 小时。[^7] 此时的 AI 训练对 GPU 的需求还停留在"实验室设备"级别。

但 Transformer 架构打开了 Scaling Law 的大门。2018 年的 BERT（340M 参数）、2019 年的 GPT-2（1.5B），到 2020 年的 GPT-3（175B 参数）——模型规模的指数增长直接转化为对 GPU 数量和性能的需求。GPT-3 在微软 Azure 上使用了约 10,000 块 V100 GPU 训练，训练计算量约 3.14×10²³ FLOPs。（详见《算力变迁》）

NVIDIA 的产品线也随之快速迭代：

- **V100**（2017 年，Volta 架构）：首次引入 Tensor Core，FP16 算力 125 TFLOPS，是 P100 的约 6 倍。[^8]
- **A100**（2020 年 5 月，Ampere 架构）：FP16 算力 312 TFLOPS，引入多实例 GPU（MIG）和结构稀疏支持。成为 2020—2023 年间 AI 训练的事实标准。[^9]

A100 的发布恰逢大模型训练从"研究项目"向"工程基础设施"转变。GPT-4 的训练据估算使用了约 25,000 块 A100 GPU，Meta 的 Llama 3 405B 则使用了 16,000+ 块 H100。每一代 GPU 的性能提升，都被随之而来的更大规模训练需求所吞噬——GPU 不够用是常态。

### 3.3 H100 与"一卡难求"（2022—2023）

2022 年，NVIDIA 发布 **H100**（Hopper 架构）。FP16 算力约 990 TFLOPS，加上 FP8 支持和 Transformer Engine，实际训练吞吐量约为 A100 的 2—4 倍。[^10]

H100 的发布时机极其关键——2022 年底 ChatGPT 发布后，全球对 AI 训练 GPU 的需求在数月内爆发式增长。H100 的供需失衡成为 2023 年科技行业最突出的硬件叙事：

- **等待时间**：从下单到交付，H100 的等待时间一度达到数月。
- **价格飙升**：云 GPU 按小时计费的 H100 实例成为最稀缺的计算资源。二手市场价格暴涨。
- **战略地位**：硅谷投资人 Marc Andreessen 在 2023 年说："现在能拿到 H100，比能拿到钱更重要。"

2023 年，NVIDIA 的数据中心业务收入从 2022 年的约 150 亿美元暴涨至约 475 亿美元，同比增长超过 200%。[^11] 公司市值在 2023 年首次突破 1 万亿美元，随后在 2024 年突破 3 万亿美元——一度成为全球市值最高的公司。

### 3.4 芯片禁运与"合规降级"博弈（2022—2025）

NVIDIA 在中国市场经历了一段持续的管制与合规博弈。

**2022-10-07**，美国商务部 BIS 发布出口管制新规，以算力阈值（TPP ≥ 4800）划定禁运边界。A100 和 H100 均落入管制范围——中国客户无法直接采购。[^12] NVIDIA 迅速设计了中国特供版 **A800**（2022 年 11 月）和 **H800**（2023 年初），通过降低 NVLink 互连带宽来规避门槛。单卡计算能力不变，但多卡集群效率下降。（详见《地缘与封锁》）

**2023-10-17**，BIS 发布更新规则，引入性能密度指标，堵上了 A800/H800 的合规漏洞。[^13] NVIDIA 再次推出中国特供版 **H20**、**L20**——但这次的妥协更大：H20 的单卡算力被砍到 H100 的约 15%，在大模型训练上几乎不可用，只能用于推理。[^14]

**2025-01-13**，拜登政府离任前发布"AI Diffusion Rule"，将全球 170 多个国家分为三个层级管控。NVIDIA 公开反对，称"打着反华的旗号，实际上打击了全球 AI 扩散的正常市场"。[^15]

这段博弈是大模型时代最复杂的地缘叙事之一。NVIDIA 处于一种两难位置：它需要遵守美国法律限制对华出口，但中国是其第二大市场。每一次管制升级，NVIDIA 都在合规空间内寻找平衡点——设计降规版、调整产品线、游说政策制定者。这个"管制→降规→再收紧→再降规"的追逐战，是理解 NVIDIA 商业策略的核心线索。

### 3.5 Blackwell 架构与算力新纪元（2024—2025）

**2024-03-18**，NVIDIA 在 GTC 2024 上发布 **Blackwell 架构**与 **B200 GPU**。B200 通过双 die 封装将两块 GPU 合为一块，FP4 推理算力达到 20 PFLOPS，约为 H100 的 3—5 倍。单机架 **GB200 NVL72** 包含 72 块 B200 和 36 块 Grace CPU，总 FP4 算力 1.44 EFLOPS。[^16]

Blackwell 的算力密度消除了"十万卡"的部分电力焦虑——同等算力需要的 GPU 数量大幅减少。但也意味着每块 GPU 更贵、单位功耗更高、冷却需求更大。GB200 NVL72 单机架售价据外界估算超过 300 万美元。[^17]

2025 年初，Blackwell 面临良率问题和供应延迟。黄仁勋在 2024 年财报电话会上承认"Blackwell 的需求远超供应"。xAI 的 Colossus 二期扩建据报道将从 H100 转向 B200，Microsoft、Google 等云厂商也已下单 GB200 NVL72。算力军备竞赛从"万卡 H100"升级到了"十万卡 Blackwell"。

### 3.6 DeepSeek-R1 与"6000 亿美元时刻"（2025-01）

2025 年 1 月 20 日，DeepSeek 发布 R1 推理模型——MIT 协议开源，API 价格仅为 o1 的三十分之一，能力达到同等前沿水平。次日，NVIDIA 股价暴跌近 17%，单日市值蒸发约 5,890 亿美元，创美国股市历史最大单日跌幅。[^18]

市场的恐惧不只是 R1 本身，而是它揭示的事实：**最先进的 AI 不一定需要最多的 GPU**。DeepSeek 用 2,048 块降规版 H800（出口管制的产物）训练出了 V3，在推理模型 R1 上达到 o1 同等水平，训练总成本仅约 600 万美元——是西方可比模型的百分之一到千分之一。（详见《编年·2025年1月》）

这对 NVIDIA 的估值叙事构成了深层挑战：如果算力不再是前沿 AI 的瓶颈——如果算法效率可以部分弥补硬件劣势——那"算力军备竞赛"的逻辑是否需要修正？

但短期冲击过后，NVIDIA 的股价和业务并未受到持续损害。原因在于：DeepSeek 虽然证明了"用更少 GPU 也能做出前沿模型"，但它同时也降低了训练和推理的成本门槛——这意味着更多的团队、更多的公司、更多的国家可以参与 AI 开发，最终对 GPU 的总需求反而可能增加。正如黄仁勋所言："Jevons Paradox——效率越高，使用量越大。"

---

## 四、兴衰分析

### 阶段一：GPU 时代的起源（1993—2006）

**发生了什么**：NVIDIA 从一家图形芯片创业公司成长为消费级 GPU 市场的双寡头之一。GeForce 256（1999）定义了"GPU"概念，收购 3dfx（2000）清除了最有威胁的竞争对手。

**为什么发生**：PC 游戏市场的持续增长为 NVIDIA 提供了稳定的现金流。摩尔定律驱动的芯片迭代节奏（约每 18 个月一代新架构）让持续投入研发的公司能够保持领先。NVIDIA 的执行力——每一代产品在性能和能效上的领先——逐渐拉开了与竞争对手的差距。

**留下了什么**：全球最大的独立 GPU 厂商；一个以"每代提升约 2 倍"为节奏的工程文化；黄仁勋在公司内部建立的"使命是做好显卡"的组织共识——这个共识后来在 AI 时代变成了"使命是做好计算平台"。

### 阶段二：CUDA 与 AI 的前夜（2006—2017）

**发生了什么**：CUDA 平台发布（2006），NVIDIA 开始投入通用计算。AlexNet（2012）证明 GPU 训练深度神经网络的可行性。NVIDIA 推出针对数据中心的 Tesla 系列 GPU，数据中心业务收入从 2012 年的约 3 亿美元增长到 2017 年的约 19 亿美元。

**为什么发生**：黄仁勋预见到 GPU 的并行计算能力将超越图形领域。CUDA 的持续投入——在商业回报微乎其微的情况下坚持了十年——是科技史上最成功的"长期主义"投资之一。深度学习的兴起给了 CUDA 一个"杀手级应用"——不是游戏，不是石油勘探，而是训练神经网络。

**留下了什么**：一个拥有数百万开发者的 CUDA 生态；深度学习框架（PyTorch、TensorFlow）与 NVIDIA GPU 的深度绑定；"AI 训练 = NVIDIA GPU"的行业共识开始形成。

### 阶段三：从 1 万亿到 3 万亿（2020—2024）

**发生了什么**：A100（2020）成为 AI 训练的事实标准；ChatGPT（2022-11）引爆全球 AI 算力需求；H100（2022）"一卡难求"；NVIDIA 市值从 2023 年的 1 万亿美元飙升至 2024 年的 3 万亿美元以上。数据中心业务收入从 2022 年的约 150 亿美元暴涨至 2024 年的超过 1,000 亿美元。

**为什么发生**：大模型训练的规模效应——每一代前沿模型需要的 GPU 数量比上一代多一个数量级——将 NVIDIA 的 GPU 从"研究设备"变成了"战略资源"。CUDA 生态的锁定效应让竞争者（AMD ROCm、Google TPU、华为昇腾）难以大规模抢夺市场份额。芯片禁运进一步强化了 NVIDIA 的定价权——合规降规版芯片反而增加了 NVIDIA 的产品线覆盖。

**留下的悬念**：Blackwell 能否按时大规模交付？AI Diffusion Rule 会如何影响全球 GPU 供应链？当 Google TPU、Amazon Trainium、Microsoft Maia 都在自研 AI 芯片时，NVIDIA 的 CUDA 生态护城河能维持多久？

### 阶段四：后 DeepSeek 时代（2025—至今）

**发生了什么**：DeepSeek-R1（2025-01）证明高效算法可以部分弥补算力劣势，NVIDIA 单日蒸发 5,890 亿美元市值。但 GPU 总需求未降反升——效率降低门槛，门槛降低参与者，参与者增加需求。Blackwell 架构进入规模化部署阶段。NVIDIA 在 2025 年推出了 NVLink 5 和 NVLink Switch，将单机架互联带宽提升至新的量级。

**为什么发生**：AI 市场从"少数实验室训练前沿模型"扩展到了"企业、创业公司、政府全面采购推理算力"。推理需求的增长（运行模型比训练模型消耗更多持续算力）正在成为 NVIDIA 增长的新引擎。Jensen Huang 在 2025 年 GTC 上将 NVIDIA 定位为"AI 基础设施公司"——不再只是卖芯片，而是卖从芯片到网络到软件的完整 AI 工厂。

**留下的悬念**：如果 Transformer 的替代架构（如 Mamba 状态空间模型）对 GPU 的并行计算模式需求不同，CUDA 的生态锁定是否会被绕过？如果开源模型的效率持续提升，"堆算力"是否仍是前沿 AI 的必经之路？

---

## 评曰

NVIDIA 的故事，不是"造出最好的芯片"那么简单。

芯片领先是可以追赶的——台积电的先进制程面向所有客户，AMD 的 MI300X 在部分基准上已追平 H100，Google 的 TPU 在推理效率上有结构性优势。真正的壁垒不在晶体管里，在软件栈里。二十年的 CUDA 生态积累了数百万行优化代码、数十万开发者习惯、数百个深度学习库的 GPU 加速实现——这不是任何竞争对手用一代芯片就能复制的。这个壁垒比硬件更难突破，因为它的本质不是技术，是集体惯性。

黄仁勋的战略眼光也值得单独记录。从 2006 年坚持投入 CUDA 到 2012 年押注 AI 训练、从"GPU 公司"到"AI 基础设施公司"的转型——每一步在当时都有人质疑"市场太小""回报太慢"。但三十年的积累让他在大模型时代到来时占据了一个任何竞争对手都无法绕过的位置。这不是运气。这是对"并行计算将改变一切"这个信念持续三十年的投资。

但"军火商"的定位也有裂隙。DeepSeek-R1 证明了一个事实：当算法效率足够高时，"更多 GPU = 更好模型"的等式不再成立。这对 NVIDIA 的长期估值叙事构成了结构性挑战——不是说 GPU 不重要了，而是说"算力垄断 = 竞争壁垒"的等式需要修正。如果开源社区的算法创新可以持续压低前沿模型的训练成本，那么"谁能拿到更多 GPU"这个问题的重要性就会下降，"谁能在更少 GPU 上训练更好模型"这个问题的重要性就会上升。

NVIDIA 在 2025 年之后面临的核心问题不是硬件——Blackwell 足够强——而是叙事：当全球最大的 AI 公司不再追求"更多的 GPU"而是追求"更少的 GPU 能做更多的事"时，NVIDIA 如何在"效率提升的推动者"和"算力需求的受益者"之间找到平衡？Jensen Huang 说得好——Jevons Paradox 效率越高用量越大。但 Paradox 不是定律，它需要每一代产品被市场验证后才能成立。

---

*本篇由终末地工业史官团队编纂：庄方宜（主笔）。*

---

[^1]: NVIDIA, "Company History". https://www.nvidia.com/en-us/about-nvidia/corporate-timeline/
[^2]: Jon Peddie Research, "AI Processor Market Report", 2025. https://www.jonpeddie.com/
[^3]: NVIDIA, "GeForce 256 Product Launch", 1999-08-31. https://www.nvidia.com/en-us/geforce/graphics-cards/graphics-cards/geforce-256/
[^4]: NVIDIA, "CUDA Zone", 2006-11. https://developer.nvidia.com/cuda-zone
[^5]: Krizhevsky, Sutskever & Hinton, "ImageNet Classification with Deep Convolutional Neural Networks", NeurIPS 2012. https://proceedings.neurips.cc/paper/2012/hash/c399862d3b9d6b76c8436e924a68c45b-Abstract.html
[^6]: NVIDIA, Annual Reports 2012—2017. https://investor.nvidia.com/financial-info/annual-reports
[^7]: Vaswani et al., "Attention Is All You Need", arXiv:1706.03762, 2017-06. https://arxiv.org/abs/1706.03762
[^8]: NVIDIA, "NVIDIA Tesla V100 GPU Architecture", 2017-08. https://images.nvidia.com/content/volta-architecture/pdf/volta-architecture-whitepaper.pdf
[^9]: NVIDIA, "NVIDIA A100 Tensor Core GPU Architecture", 2020-05. https://images.nvidia.com/aem-dam/en-zz/Solutions/data-center/nvidia-ampere-architecture-whitepaper.pdf
[^10]: NVIDIA, "NVIDIA H100 Tensor Core GPU Architecture", 2022. https://resources.nvidia.com/en-us-tensor-core/gtc22-whitepaper-hopper
[^11]: NVIDIA, "FY2024 Earnings Report", 2024-02-21. https://investor.nvidia.com/financial-info/quarterly-results
[^12]: US Department of Commerce, BIS, "Implementation of Additional Export Controls: Certain Advanced Computing and Semiconductor Manufacturing Items", 2022-10-07. 87 FR 62186. https://www.federalregister.gov/documents/2022/10/13/2022-21658/implementation-of-additional-export-controls-certain-advanced-computing-and-semiconductor
[^13]: US Department of Commerce, BIS, "Export Controls on Semiconductor Manufacturing Items and Advanced Computing Items", 2023-10-17. 88 FR 73410. https://www.federalregister.gov/documents/2023/10/25/2023-23049/export-controls-on-semiconductor-manufacturing-items-and-advanced-computing-items
[^14]: Wikipedia, "Artificial intelligence industry in China § US export controls". https://en.wikipedia.org/wiki/Artificial_intelligence_industry_in_China
[^15]: US Department of Commerce, BIS, "Framework for Artificial Intelligence Diffusion", 2025-01-13. https://www.federalregister.gov/documents/2025/01/15/2025-00244/framework-for-artificial-intelligence-diffusion
[^16]: NVIDIA, "NVIDIA Blackwell Platform Arrives to Power a New Era of Computing", GTC 2024, 2024-03-18. https://nvidianews.nvidia.com/news/nvidia-blackwell-platform-arrives-to-power-a-new-era-of-computing
[^17]: SemiAnalysis, "NVIDIA GB200 NVL72 Pricing Analysis", 2024-08. https://www.semianalysis.com/
[^18]: 华尔街见闻, "英伟达市值蒸发近6000亿美元，规模创美股史上最大", 2025-01-28. https://wallstreetcn.com/
