# 《Amazon 本纪》

> AWS 是全球最大的云服务商，但在大模型时代，它选择了一条与 Google、Microsoft 截然不同的路——不做最强的模型，而是让所有最强的模型都跑在自己的基础设施上。从 Bedrock 平台聚合 Claude、Llama、Mistral，到 40 亿美元押注 Anthropic，再到自研 Trainium 芯片挑战 NVIDIA 垄断——Amazon 的 AI 十年，是一场"基础设施提供者如何定义游戏规则"的真实记录。

---

## 一、概述

Amazon 在大模型史上的角色不是发明者，不是模型创新者，而是**全球 AI 基础设施的最大提供者**。AWS 占据全球云服务市场约 31% 的份额（2024 年数据），超过 Microsoft Azure 和 Google Cloud 的总和。[^1] 当 OpenAI、Anthropic、Meta 等公司训练和部署大模型时，AWS 是它们最可能使用的云平台——即使 Amazon 自己也在做 AI 芯片和模型服务。

这种"基础设施提供者"的定位，让 Amazon 在大模型时代扮演了一个独特角色：它不直接参与"谁的模型更强"的军备竞赛，但它决定了这场竞赛的基础设施成本和可用性。当 Anthropic 需要训练下一代 Claude 时，当 Meta 需要部署 Llama 时，当企业客户需要调用大模型 API 时——AWS 是它们绕不开的选项。

---

## 二、创立与早年

### 2.1 AWS：云计算的发明者

AWS 的故事始于 2003 年。Amazon 内部在讨论如何将其基础设施能力对外输出时，Andy Jassy（时任 CEO Jeff Bezos 的技术顾问）提出了"基础设施即服务"（IaaS）的概念。[^2] 2006 年 3 月 14 日，AWS 正式推出 S3（Simple Storage Service），随后在同年 8 月推出 EC2（Elastic Compute Cloud）——这两个产品定义了云计算的基本范式。

AWS 的先发优势是压倒性的。当 Microsoft 在 2010 年推出 Azure、Google 在 2011 年推出 GCE 时，AWS 已经积累了四年以上的运营经验和客户基础。到 2015 年，AWS 的营收已超过 70 亿美元，成为 Amazon 最大的利润来源。[^3]

### 2.2 Amazon 的 AI 基因：从推荐系统到 Alexa

Amazon 的 AI 故事并非始于大模型。早在 2003 年，Amazon 就组建了专门的机器学习团队，用于商品推荐系统——这是电商领域最早的大规模 ML 应用之一。[^4]

2014 年 11 月，Amazon 发布 **Alexa** 语音助手和 **Echo** 智能音箱——这是消费级 AI 硬件的开创性产品。Alexa 的核心是自然语言理解（NLU）和语音识别，虽然在技术深度上不如后来的大模型，但它在产品形态上定义了"AI 助手"的基本交互模式：语音唤醒 → 意图识别 → 任务执行。

到 2018 年，Alexa 已进入超过 1 亿台设备，成为全球最广泛部署的语音助手。[^5] 但 Alexa 的技术架构——基于规则和有限状态机的对话管理——在大模型时代显得过时。这个问题后来成为 Amazon AI 战略转型的核心挑战。

---

## 三、关键事件

| 时间 | 事件 | 重要性 |
|------|------|--------|
| 2023-04 | Amazon Bedrock 发布 | 多模型聚合平台的开创性尝试 |
| 2023-09 | 宣布对 Anthropic 投资 40 亿美元 | 仅次于微软对 OpenAI 的 AI 投资 |
| 2023-11 | Trainium2 芯片发布 | 自研 AI 芯片挑战 NVIDIA 垄断 |
| 2024-02 | Alexa+ 发布 | 传统语音助手的大模型化转型 |
| 2024-12 | Amazon Nova 系列模型发布 | 自研基础模型的首次亮相 |

### 3.1 Bedrock 平台（2023-04）：多模型聚合的开创

2023 年 4 月 13 日，Amazon 在 AWS Summit 上宣布推出 **Amazon Bedrock**——一个完全托管的大模型 API 平台，聚合了来自多家公司的基础模型：Anthropic 的 Claude、AI21 Labs 的 Jurassic-2、Stability AI 的 Stable Diffusion，以及 Amazon 自己的 Titan 系列模型。[^6]

Bedrock 的战略意图很清晰：**Amazon 不做最强的模型，但要做所有最强模型的运行平台**。这个定位与 Microsoft 的 Azure OpenAI Service 形成鲜明对比——Microsoft 通过独占 OpenAI 模型来建立壁垒，而 Amazon 通过聚合多家模型来建立平台。

Bedrock 的技术架构有几个关键设计：
- **统一 API**：无论底层模型是 Claude、Llama 还是 Titan，调用方式完全一致
- **私有化部署**：企业可以在 VPC 内部署模型，数据不出 AWS 网络
- **模型定制**：支持用企业私有数据微调模型，无需公开训练数据

到 2024 年底，Bedrock 已支持超过 200 种基础模型，成为 AWS 增长最快的 AI 服务之一。[^7]

### 3.2 投资 Anthropic（2023-09）：40 亿美元的押注

2023 年 9 月 25 日，Amazon 宣布向 Anthropic 投资 40 亿美元——这是当时科技行业对 AI 公司的第二大单笔投资，仅次于 Microsoft 对 OpenAI 的 100 亿美元追加投资。[^8]

交易结构据报道包含多个层面：
- **财务投资**：40 亿美元分阶段注入，首期 12.5 亿美元
- **云服务合作**：Anthropic 将 AWS 作为其主要云提供商，并使用 Amazon Trainium 芯片训练未来模型
- **产品集成**：Anthropic 的 Claude 模型通过 Bedrock 向 AWS 客户开放
- **芯片合作**：Anthropic 将参与 Amazon 自研 AI 芯片的测试和优化

这笔投资的战略意义在于：**Amazon 在不拥有 Anthropic 控制权的情况下，获得了前沿模型的独家合作渠道**。Anthropic 的 Claude 系列在编程基准、长上下文处理、安全对齐等维度上持续领先，成为 AWS 客户最青睐的模型之一。（详见《Anthropic 本纪》）[^9]

与 Microsoft 对 OpenAI 的深度绑定不同，Amazon 对 Anthropic 的投资更像是一种"战略合作伙伴关系"——Anthropic 保持独立运营，Amazon 获得模型使用权和芯片测试反馈。这种松耦合的结构在后来被证明更具灵活性：当 OpenAI 与 Microsoft 的关系出现裂隙时，Amazon 与 Anthropic 的合作依然稳固。

### 3.3 Trainium / Inferentia：挑战 NVIDIA 的芯片之路

Amazon 是全球唯一一家同时自研 AI 训练芯片和推理芯片的云服务商。[^10]

**Inferentia**（2018 年发布，2019 年上市）是 Amazon 的第一款自研 AI 推理芯片，专为大规模推理场景设计——低延迟、高吞吐、低成本。Inferentia 的定位不是与 NVIDIA 的 A100/H100 竞争，而是为推理密集型工作负载（如 Alexa 的语音识别、Bedrock 的模型推理）提供更经济的替代方案。

**Trainium**（2022 年发布）是 Amazon 的自研 AI 训练芯片，直接瞄准 NVIDIA GPU 的训练市场。Trainium 的架构针对 Transformer 模型的训练进行了深度优化，据 Amazon 称，在相同成本下可提供比 NVIDIA GPU 高出 40% 的训练性能。[^11]

**Trainium2**（2023 年 11 月发布）是第二代训练芯片，性能据称比 Trainium 提升 4 倍。Amazon 宣布 Trainium2 将用于 Anthropic 下一代模型的训练，这是对 NVIDIA 在 AI 训练芯片市场垄断地位的直接挑战。[^12]

但 Trainium/Inferentia 生态面临的挑战也很明显：**CUDA 生态的护城河太深**。NVIDIA 的 CUDA 平台积累了超过 15 年的软件生态，主流深度学习框架（PyTorch、TensorFlow）的 GPU 加速几乎完全依赖 CUDA。Amazon 的自研芯片需要开发者重写代码或使用 Amazon 提供的编译器（如 AWS Neuron SDK），这增加了迁移成本。（详见《算力变迁》）

### 3.4 Alexa+（2024-02）：传统语音助手的大模型化

2024 年 2 月，Amazon 发布 **Alexa+**——将大语言模型能力集成到 Alexa 语音助手中的重大升级。[^13]

Alexa+ 的核心变化包括：
- **对话能力**：从基于规则的意图识别升级为基于 LLM 的自然对话
- **个性化**：能够记住用户偏好、历史对话、家庭习惯
- **多步骤任务**：支持复杂的多轮指令（如"帮我规划下周的晚餐菜单，考虑我的饮食限制和冰箱里的食材"）
- **生成能力**：能够创作故事、撰写邮件、生成购物清单

Alexa+ 的发布标志着 Amazon 对语音助手市场的战略调整：从"语音控制的智能家居遥控器"转向"AI 原生的个人助手"。但 Alexa+ 面临的挑战也很明显——它需要与 Google Assistant（背靠 Gemini）、Apple Siri（背靠 Apple Intelligence）、Microsoft Copilot（背靠 GPT-4）竞争。

### 3.5 Amazon Nova（2024-12）：自研模型的首次亮相

2024 年 12 月，Amazon 在 re:Invent 大会上发布 **Amazon Nova** 系列基础模型——包括文本模型（Nova Micro、Nova Pro、Nova Premier）和多模态模型（Nova Canvas 图像生成、Nova Reel 视频生成）。[^14]

Nova 的发布标志着 Amazon 从"基础设施提供者"向"基础设施 + 模型提供者"的转型。Nova 系列的定位不是与 GPT-5、Claude 4 竞争前沿性能，而是提供**高性价比的 AWS 原生模型**——在 Bedrock 平台上，Nova 的定价低于 Claude 和 GPT，但性能足够满足大部分企业需求。

Nova 的技术架构据 Amazon 称基于 Transformer 的多种变体，训练数据包含 Amazon 内部的电商数据、Alexa 对话数据、AWS 文档等独家数据源。这些数据优势是外部模型公司无法复制的——它们是 Amazon 二十年互联网基础设施积累的副产品。

---

## 四、兴衰分析

### 阶段一：云计算的先发优势（2006-2022）

**发生了什么**：AWS 从 2006 年推出 S3/EC2 开始，定义了云计算的基本范式。到 2022 年，AWS 年营收超过 800 亿美元，占全球云服务市场约 31%。

**为什么发生**：Amazon 的电商基因决定了它对"基础设施即服务"的敏锐洞察——当内部团队需要快速扩展计算资源时，Amazon 选择了将其基础设施能力对外输出。先发优势、持续迭代、企业客户基础，三者叠加形成了 AWS 的护城河。

**留下了什么**：全球最大的云服务基础设施；超过 200 种云服务；数百万企业客户。这些资产在大模型时代成为 Amazon AI 战略的基石。

### 阶段二：AI 基础设施的全面布局（2023-至今）

**发生了什么**：Bedrock 平台发布（2023-04）；投资 Anthropic 40 亿美元（2023-09）；Trainium2 芯片发布（2023-11）；Alexa+ 大模型化（2024-02）；Nova 系列模型发布（2024-12）。

**为什么发生**：大模型的爆发让 AI 计算成为云服务增长最快的领域。Amazon 的战略选择是——不与 OpenAI、Anthropic、Google 在模型性能上竞争，而是让它们都在 AWS 上运行。同时，通过自研芯片降低对 NVIDIA 的依赖，通过 Bedrock 聚合多家模型建立平台壁垒。

**留下的悬念**：Trainium/Inferentia 能否在 NVIDIA 的 CUDA 生态中建立足够的开发者基础？Nova 系列能否在性价比上建立真正的差异化优势？当 Google TPU 和 Microsoft Maia 都在自研 AI 芯片时，Amazon 的"基础设施提供者"定位能维持多久？

---

## 评曰

Amazon 的 AI 十年，可以用一句话概括：**不做最强的模型，但做所有最强模型的家。**

这个战略选择背后是 Amazon 的组织基因——它本质上是一家基础设施公司，从 AWS 到物流网络到电商后台，它的核心能力是"把复杂的东西变成标准化的服务"。当 Google 在 TPU 上投入十年、Microsoft 在 OpenAI 上押注百亿时，Amazon 选择了一条更符合自身基因的路：让 Google 的 TPU、NVIDIA 的 GPU、Anthropic 的 Claude、Meta 的 Llama，都跑在 AWS 的基础设施上。

但这个战略也有裂隙。当 Google 的 Gemini 和 Microsoft 的 Copilot 开始在终端用户体验上建立壁垒时，Amazon 的"基础设施中立"策略面临挑战——它没有自己的"杀手级应用"来展示模型能力。Alexa+ 的发布是对此的回应，但效果尚待验证。Nova 系列模型的发布，则是 Amazon 在"基础设施提供者"和"模型提供者"之间寻找平衡的尝试。

从 Andy Jassy 到 Anthropic 的 Dario Amodei，Amazon 证明了一件事：在 AI 时代，**基础设施是最大的时间朋友**。模型能力会趋于同质化，芯片架构会迭代，但全球最大的云服务基础设施——覆盖 30 多个地理区域、数百万企业客户、数百种 AI 服务——是任何竞争对手都需要十年以上才能复制的资产。当大模型的军备竞赛进入白热化时，Amazon 可以坐在自己的基础设施上，安静地等待所有参赛者来租用它的算力。

---

*本篇由终末地工业史官团队编纂：赫默（主笔）。*

---

[^1]: Synergy Research Group, "Cloud Market Share Q4 2024", 2025-01. https://www.srgresearch.com/articles/cloud-market-share-q4-2024
[^2]: Andy Jassy, "The Birth of AWS", 2016-03-14. https://www.aboutamazon.com/news/aws/the-birth-of-aws
[^3]: Amazon, "2015 Annual Report", 2016. https://ir.aboutamazon.com/annual-reports-proxies-and-shareholder-letters/default.aspx
[^4]: Greg Linden, "Early Amazon: Shopping cart recommendations", 2019-04. https://glinden.blogspot.com/2019/04/early-amazon-shopping-cart.html
[^5]: The Verge, "Amazon says Alexa has more than 10,000 skills", 2018-09. https://www.theverge.com/2018/9/19/17879306/amazon-alexa-skills-10000
[^6]: AWS Blog, "Amazon Bedrock is now available", 2023-04-13. https://aws.amazon.com/blogs/aws/amazon-bedrock-is-now-available/
[^7]: Amazon, "AWS re:Invent 2024 Keynote", 2024-12. https://aws.amazon.com/events/reinvent/
[^8]: Amazon, "Amazon to invest up to $4 billion in Anthropic", 2023-09-25. https://www.aboutamazon.com/news/company-news/amazon-to-invest-up-to-4-billion-in-anthropic
[^9]: Anthropic, "Claude 3.5 Sonnet", 2024-06. https://www.anthropic.com/news/claude-3-5-sonnet
[^10]: AWS, "Amazon EC2 Inf1 instances", 2019-12. https://aws.amazon.com/ec2/instance-types/inf1/
[^11]: AWS, "Amazon Trainium", 2022-11. https://aws.amazon.com/machine-learning/trainium/
[^12]: AWS, "AWS re:Invent 2023 Keynote", 2023-11. https://aws.amazon.com/events/reinvent/
[^13]: Amazon, "Introducing Alexa+", 2024-02-26. https://www.aboutamazon.com/news/devices/introducing-alexa-plus
[^14]: AWS, "Introducing Amazon Nova foundation models", 2024-12-03. https://aws.amazon.com/blogs/aws/introducing-amazon-nova-foundation-models-high-performance-and-low-cost-intelligence-for-your-requests/