# 《Qwen 世家》

> Qwen（通义千问）是阿里巴巴自 2023 年起发展的基础模型家族。它最初是阿里云面向企业与自家产品的“通义千问”，随后迅速扩展为覆盖文本、视觉、音频、代码、数学和 Agent 的开放模型谱系。Qwen 真正特殊之处并不是某一次 benchmark 登顶，而是长期同时经营两套系统：一套在云上不断更新 Max / Plus / Flash 等商业模型，一套把不同尺寸、架构与能力逐步放给开发者。到 2026 年 Qwen3.8，原本主要留在云端的 Max 级旗舰也第一次开放权重，Qwen 的“双轨”开始从“闭源旗舰 + 开放中小模型”演化为“云服务与开放权重共同覆盖前沿”。

---

## 一、概述：Qwen 的主线不是一个模型，而是一张模型网

Qwen 的发展很难用传统“1 → 2 → 3”代际史完整概括。它至少同时沿着四条轴扩张：

1. **尺寸**：从小模型覆盖到万亿参数 MoE；
2. **模态**：文本 → 视觉 / 视频 → 音频 → 原生视觉语言 Agent；
3. **任务**：通用对话 → 代码、数学、搜索、工作流与 Agent；
4. **交付方式**：云 API、Qwen Chat / QwenWork、Hugging Face / ModelScope 开放权重并行。

早期 Qwen 最有辨识度的是“全尺寸覆盖”：开发者可以在同一家族里找到 0.5B、7B、14B、32B、72B 等不同规模。到 2025—2026 年，重点又发生变化：**规模覆盖逐渐让位于架构效率、原生多模态、长上下文和 Agent 完成能力。**

因此 Qwen 的历史不是简单地“越来越大”，而是越来越像一个模型操作系统：同一品牌下既有本地小模型，又有开放 MoE，又有云端旗舰，还有代码、视觉、图像、语音和工作 Agent。

---

## 二、代际总表

| 阶段 | 时间 | 代表模型 | 核心变化 |
|------|------|----------|----------|
| 通义千问 | 2023-04 | Tongyi Qianwen | 阿里全产品 AI 底座，云端闭源起步 |
| Qwen 1 | 2023-08 起 | 7B / 14B / 72B 等 | 权重开放，中文开源生态起步 |
| Qwen1.5 | 2024-02 | 0.5B—72B，后扩展 110B / MoE | 全尺寸覆盖、开发者体验与标准框架兼容 |
| Qwen2 | 2024-06 | 0.5B—72B + 57B-A14B | 多语言、长上下文、MoE 与许可开放度提高 |
| Qwen2.5 | 2024-09 | 0.5B—72B + Coder / Math / VL | “模型家族”策略成熟，专业分支爆发 |
| Qwen3 | 2025-04 | 0.6B—32B、30B-A3B、235B-A22B | thinking / non-thinking 统一，Agent 与 MCP |
| Qwen3-Next | 2025-09 | 80B-A3B | 混合注意力、超稀疏 MoE、长上下文效率 |
| Qwen3.5 | 2026-02 | 397B-A17B 等 | 原生多模态 Agent，Gated DeltaNet + MoE |
| Qwen3.6 | 2026-04 | 35B-A3B / 27B 等 | 小激活参数下强化编码、视觉与 Agent |
| Qwen3.7 | 2026-05—07 | Plus / Max / Flash | 1M context、云端工作流与多模态 Agent 产品线 |
| Qwen3.8 | 2026-08 | Max / 2.4T-A95B / 27B / Flash-Next | Max 级首次开放；Qwen4 架构预览 |

---

## 三、2023：从“通义千问”到 Qwen 开放权重

### 3.1 通义千问：先做阿里自己的基础设施

**2023-04-11** — 阿里云正式发布通义千问。张勇当时宣布，未来阿里巴巴旗下产品将全面接入大模型能力。[^1]

这一定义了 Qwen 的企业基因：它从一开始就不是单纯的聊天机器人，而是面向钉钉、淘宝、天猫精灵、阿里云等产品的通用 AI 底座。

与后来开源社区熟悉的 Qwen 不同，最初的通义千问首先是云端产品。

### 3.2 Qwen 1：把权重送进社区

2023 年下半年，阿里陆续开放 Qwen-7B、14B、72B 等模型权重，并把项目推向 Hugging Face、ModelScope 与 GitHub。[^2]

这里需要区分**代码许可**与**模型权重许可**。Qwen GitHub 仓库代码采用 Apache 2.0，但早期不同模型权重曾使用 Tongyi Qianwen LICENSE / Research License 等单独协议，并不是一句“Qwen 从第一代就全系 Apache 2.0”能够概括。[^2]

这种许可上的渐进开放，反而更能说明阿里的真实策略：先验证开放模型不会破坏商业模式，再逐步扩大许可与模型尺寸。

### 3.3 Qwen-VL / Audio：模型家族开始横向生长

Qwen 很早就没有把自己限制在纯文本。Qwen-VL 把图像理解、视觉问答与定位带进家族，Qwen-Audio 则继续覆盖语音和通用音频理解。[^3]

这为后来的 Qwen2-VL、Qwen2.5-VL、Qwen3.5 原生多模态路线埋下伏笔：多模态不是 2026 年突然接上的“插件”，而是一条从 2023 年就存在的支系。

---

## 四、2024：全尺寸覆盖比单个旗舰更重要

### 4.1 Qwen1.5：把“好用”做成生态竞争力

**2024-02** — Qwen1.5 发布。官方首先强调的不是某个巨大旗舰，而是从小尺寸到 72B 的完整系列、量化版本、Hugging Face Transformers 原生支持，以及 vLLM、SGLang、llama.cpp 等部署生态。[^4]

这一步很关键。一个开权重模型如果必须靠作者自己维护的特殊代码才能跑，开放价值会大幅缩水；Qwen1.5 开始把“标准框架直接能加载”当成一等产品目标。

### 4.2 Qwen2：开放许可确实扩大了，但不是“一刀切”

**2024-06** — Qwen2 发布 0.5B、1.5B、7B、57B-A14B、72B 等模型，并扩展多语言、数学、代码与长上下文能力。[^5]

Qwen2 的许可比早期明显开放：0.5B、1.5B、7B、57B-A14B 转向 Apache 2.0；但当时最大的 72B 仍保留 Qianwen License。[^5]

所以更准确的历史描述不是“Qwen1.5 起全系 Apache”，而是：

> **阿里不断把标准开放许可推向更大的模型，但旗舰层长期保留额外边界。**

### 4.3 Qwen2.5：真正的“模型超市”

**2024-09-19** — Qwen2.5 发布。通用语言模型覆盖 0.5B、1.5B、3B、7B、14B、32B、72B，同时推出 Coder、Math、VL 等专业分支。[^6]

许可同样并非完全一致：官方明确说明，除部分尺寸外，大多数开放模型使用 Apache 2.0；例如当时 3B 与 72B 采用不同许可。[^6]

但这并没有阻止 Qwen2.5 成为全球开源生态最常见的基座之一。它真正形成的是“模型超市”逻辑：

- 想本地跑，有小模型；
- 想做通用助手，有中型模型；
- 想追能力，有 72B；
- 想写代码，有 Coder；
- 想做数学，有 Math；
- 想理解图片和文档，有 VL。

Qwen 的优势开始从“某个模型比 Llama 强多少”变成**迁移成本低**：任务变了，往往不必离开 Qwen 家族。

---

## 五、2025：Qwen3 把 reasoning 与 Agent 放进同一模型

### 5.1 Qwen3：thinking 不再需要换模型

**2025-04-29** — Qwen3 发布。旗舰包括 **Qwen3-235B-A22B**，另有 30B-A3B 以及多个 dense 小模型。[^7]

Qwen3 最重要的设计之一是 **hybrid thinking mode**：同一个 checkpoint 可以在 thinking 与 non-thinking 模式间切换，而不需要为简单问答与复杂推理分别部署两套模型。官方同时把 coding、agentic capabilities 与 MCP 支持列为重点方向。[^7]

这反映了 2025 年模型竞争的变化：推理能力不再是一条单独产品线，而逐渐成为可分配的运行时预算。

### 5.2 2507：Qwen3 从“一次发布”变成持续软件化迭代

2025 年 7—8 月，Qwen3 连续发布 235B-A22B、30B-A3B、4B 等 2507 更新，并把部分旗舰的长上下文能力扩展到 256K，随后支持通过扩展处理 1M token 输入。[^7]

从这里开始，Qwen 的版本方式越来越不像传统学术模型：同一代架构在几个月里不断 post-train、扩 context、拆 instruct / thinking、补尺寸。

### 5.3 Qwen3-Next：第一次把“未来架构”提前开放

**2025-09-10** — Qwen 发布 **Qwen3-Next-80B-A3B**。它以 80B 总参数仅激活约 3B，引入混合 **Gated DeltaNet + Gated Attention**、高度稀疏 MoE、多 token prediction 等设计，重点解决长上下文下训练与推理成本。[^8]

Qwen Team 当时明确表示，这套架构将继续发展为 Qwen3.5。

这一发布方式后来变得很有 Qwen 风格：**先把下一代架构的小规模/高效率版本放给社区，再用它训练更大的主线模型。**

---

## 六、2026：从“很多模型”转向原生多模态 Agent

### 6.1 Qwen3.5：视觉语言不再是旁支

**2026-02-15** — Qwen3.5 首批开放 **397B-A17B**。官方把这一代定义为 “Towards Native Multimodal Agents”。模型把视觉语言能力直接做进主干，并继承 Qwen3-Next 的混合线性注意力与稀疏 MoE；397B 总参数每次只激活约 17B。[^9]

云端的 Qwen3.5-Plus 则默认提供 1M 上下文、内置工具与 adaptive tool use。[^9]

这标志着 Qwen 的组织方式发生变化：过去“文本 Qwen + Qwen-VL”是两个明显分支；Qwen3.5 以后，**原生多模态成为通用主模型应该具备的基础能力。**

### 6.2 Qwen3.6：把前沿能力压进更小激活规模

2026 年 4 月，Qwen3.6 系列继续推出 **35B-A3B** 与 27B 等模型。35B-A3B 只有约 3B 激活参数，但重点覆盖编码、视觉语言理解、空间推理与 Agent 执行。[^10]

这条路线与 Qwen3-Next 一脉相承：相比“总参数越大越好”，Qwen 越来越强调**每次实际激活多少参数、在长上下文和多步工具调用中花多少计算**。

### 6.3 Qwen3.7：云端版本开始跑得比开放代际更快

到 2026 年 5—7 月，阿里云 Model Studio 已经提供 Qwen3.7 Plus / Max / Flash。Qwen3.7-Plus 支持文本、图片、视频、1M context、函数调用与内置工具；Flash 则强化多模态理解与 Agent 执行，并承担低成本工作负载。[^11]

这时 Qwen 出现一个明显现象：**云端商业版本号跑得比大规模开放权重发布更快。**

开放社区仍然拿得到大量强模型，但阿里云会先用 Plus / Max / Flash 验证新能力、价格与工作流，再决定哪些能力以什么尺寸进入开放谱系。

双轨仍然存在，只是边界不再简单等同于“闭源 = Max，开源 = 小模型”。

---

## 七、Qwen3.8：Max 级旗舰第一次真正开放

### 7.1 2.4T：规模不是重点，越过旗舰边界才是

**2026-08-03** — 阿里发布 **Qwen3.8-Max**，总参数 **2.4T**，支持 1M token 上下文与原生视觉，重点面向 coding、专业工作、研究与 long-horizon tasks。阿里同时宣布将首次开放 Qwen-Max 级模型权重。[^12][^13]

**2026-08-12** — **Qwen3.8-2.4T-A95B** 正式出现在 Hugging Face 与 ModelScope。官方仓库称这是“第一次把 Qwen-Max-class model 带到开放发布”；2.4T 总参数，每步约 95B 激活。[^13][^14]

这个节点真正改写的是 Qwen 的“双轨”定义。

2023—2025 年可以粗略说：

> 云端旗舰抢收入，开放模型抢生态。

到 2026 年 8 月，这句话已经不够准确。Max 级能力本身也可以开放权重，而商业价值转移到：

- 谁提供高吞吐推理；
- 谁能托管 2.4T 模型；
- 谁提供缓存、批处理与全球 endpoint；
- 谁把模型接进 QwenWork、Qoder、搜索与企业数据；
- 谁承担持续 post-training 与版本维护。

开放模型不再与云收入相冲突，反而可能成为云推理需求的入口。

### 7.2 Qwen3.8-27B：旗舰开放之外，全尺寸传统仍在

**2026-08-14** — Qwen3.8-27B 开放。[^13]

这提醒人们，2.4T 并没有让 Qwen 放弃自己的老传统。超大旗舰负责抬高能力上限，中型 dense / sparse 模型负责让更多人真正部署。

Qwen 的“全家桶”从 2024 年的小中大尺寸覆盖，变成 2026 年的**本地模型—高效 MoE—云端 Plus/Flash—开放 Max**多层覆盖。

### 7.3 Flash-Next：把 Qwen4 的架构提前放出来

**2026-08-26** — Qwen 又开放 **Qwen3.8-Flash-Next**。它不是单纯的 3.8 小版本，而被官方明确称为 **Qwen4 架构的早期预览**。[^15]

模型主体 125B，另有 51B n-gram embedding，每 token 只激活约 6B；架构引入 Qwen Sparse Attention（QSA）、Gated Residual、N-gram Embedding 与改进的 Muon 优化。Qwen Team 表示，这种“Next”发布承担与 2025 年 Qwen3-Next 类似的角色：先把架构变化开放给社区检验，再继续训练下一代主线。[^15]

于是 Qwen 的开放策略又多了一层：

> **不仅开放最终模型，也提前开放下一代架构方向。**

这对研究社区的价值和“放一个权重文件”完全不同。社区可以在旗舰正式发布前验证 attention、residual、embedding 与推理框架是否真的有效。

---

## 八、重新理解 Qwen 的“双轨”

旧式概括“闭源抢收入，开源抢社区”曾经很有解释力，但到 Qwen3.8 已经过于简单。

更准确的结构是四层：

| 层 | 典型形态 | 作用 |
|----|----------|------|
| 云端旗舰 | Max / Plus | 最快获得新能力，企业服务与 API 收入 |
| 云端效率层 | Flash | 大规模生产调用、压低单位任务成本 |
| 开放权重 | 27B、MoE、2.4T-A95B 等 | 私有部署、研究、微调、生态扩散 |
| 架构预览 | Qwen3-Next、Qwen3.8-Flash-Next | 提前验证下一代技术路线 |

这四层之间不是互斥，而是互相喂养：

- 云端真实流量暴露问题；
- 新架构降低推理成本；
- 开放权重扩大适配与优化生态；
- 社区对 vLLM、SGLang、llama.cpp 等支持又反过来降低阿里云和企业部署成本。

Qwen 的核心竞争力因此越来越不像“一个最强模型”，而是**把模型研究、开放社区和云服务变成同一个循环。**

---

## 九、许可史：不能把“开放”写成一条直线

Qwen 的许可史尤其值得谨慎记录。

早期代码仓库与不同模型权重使用过不同协议；Qwen2 时代，多数中小模型采用 Apache 2.0，但 72B 仍使用 Qianwen License；Qwen2.5 也存在部分尺寸不使用 Apache 2.0 的情况。[^5][^6]

因此历史上更准确的说法应是：

> **Qwen 持续扩大开放程度和标准开放许可覆盖范围，但不同代际、不同尺寸的模型许可并不始终一致。**

这比“从 Qwen1.5 起全系 Apache 2.0”麻烦，却更重要。对于真正部署和再分发模型的人来说，许可证不是品牌印象，而是实际工程约束。

到 2026 年，开放模型竞争也已经超出许可证：2.4T 权重即使允许下载，是否“开放可用”仍取决于硬件、量化、推理引擎、云托管和运维能力。

---

## 十、生态与影响：Qwen 为什么变成基础材料

Qwen 在全球模型生态中的影响力，很大程度来自它长期提供**适合再加工的中间层模型**。

DeepSeek-R1 的多款蒸馏模型以 Qwen 为基座；大量中文法律、医疗、金融、教育模型以 Qwen 做微调；Qwen-VL 系列又成为文档、OCR、视觉 Agent 的常见基础模型。

这类影响不一定体现在“Qwen Chat 有多少用户”，而体现在另一个更难统计的问题：

> **有多少别人的模型和产品，底下其实站着 Qwen。**

当一个模型家族能覆盖 0.xB 到 2.4T、dense 到 MoE、文本到视觉、普通回答到 Agent，它就不仅是一组产品，更接近一种供应链。

---

## 评曰

Qwen 最初的优势是“全”。别人发布一个旗舰，阿里往往发布一排尺寸；别人把视觉另做产品，Qwen 很快又补 VL、Audio、Coder、Math。这个策略看起来缺少一个足够戏剧性的“神模型时刻”，却非常适合建立基础设施。

2025 年以后，这个“全”开始升级成另一种能力：**把新技术很快变成可部署的谱系。** Qwen3 把 thinking 和 non-thinking 合进同一模型；Qwen3-Next 把混合线性注意力与超稀疏 MoE 提前开放；Qwen3.5 把视觉语言变成通用 Agent 的原生能力；Qwen3.8 又第一次把 Max 级旗舰权重放进开放路线。

因此 Qwen 真正值得写进历史的，不只是“中国开源模型很强”。更深的一层是：阿里逐渐找到了一种让开放与商业云不互相抵消的结构。

早年人们担心：模型一旦开放，谁还会付 API 钱？Qwen3.8 给出的答案是，2.4T 权重可以让所有人拿到，但绝大多数真正的大规模使用者仍需要推理引擎、GPU 集群、缓存、监控、全球节点和企业集成。**权重开放以后，稀缺性从模型文件转移到了运行模型的能力。**

这也是 Qwen 世家从 2023 到 2026 最明显的变化：最初阿里是在“开放模型”；后来它实际上是在开放一套进入阿里 AI 基础设施生态的接口。

---

*本篇由终末地工业史官团队编纂：庄方宜（主笔）。*  
*2026-08 补订：GPT-5.6 Sol（OpenAI）。*

---

[^1]: 澎湃新闻，“阿里所有产品都将接入‘通义千问’，平台将开放第三方大模型接入”，2023-04-11. https://www.thepaper.cn/newsDetail_forward_22651605
[^2]: QwenLM, Qwen original repository and licensing materials. https://github.com/QwenLM/Qwen
[^3]: QwenLM, Qwen-VL and Qwen-Audio repositories. https://github.com/QwenLM/Qwen-VL ; https://github.com/QwenLM/Qwen-Audio
[^4]: Qwen Team, “Introducing Qwen1.5”, 2024-02-04. https://qwenlm.github.io/blog/qwen1.5/
[^5]: Qwen Team, “Hello Qwen2”, 2024-06-07. https://qwenlm.github.io/blog/qwen2/
[^6]: Qwen Team, “Qwen2.5: A Party of Foundation Models!”, 2024-09-19. https://qwenlm.github.io/blog/qwen2.5/
[^7]: QwenLM, Qwen3 official repository / documentation, released 2025-04-29. https://github.com/QwenLM/Qwen3
[^8]: Qwen Team, “Qwen3-Next: Towards Ultimate Training & Inference Efficiency”, 2025-09-10. https://qwen.ai/blog?id=qwen3-next
[^9]: Qwen Team, “Qwen3.5: Towards Native Multimodal Agents”, 2026-02-15. https://qwen.ai/blog?id=qwen3.5
[^10]: Qwen Team, Qwen3.6-35B-A3B / Qwen3.6-27B release materials, 2026-04. https://qwen.ai/blog?id=qwen3.6-35b-a3b ; https://qwen.ai/blog?id=qwen3.6-27b
[^11]: Alibaba Cloud Model Studio, Qwen3.7 model documentation and pricing. https://www.alibabacloud.com/help/en/model-studio/vision-model ; https://www.alibabacloud.com/help/en/model-studio/model-pricing
[^12]: Alibaba Group, “Alibaba Unveils Qwen3.8-Max: Its Largest and Most Capable Flagship Model to Date”, 2026-08-03. https://www.alibabagroup.com/en-US/document-2021044032125272064
[^13]: QwenLM, Qwen3.8 official repository. https://github.com/QwenLM/Qwen3.8
[^14]: Alibaba Cloud Model Studio, “qwen3.8-2.4t-a95b Model Info”, updated 2026-08-13. https://www.alibabacloud.com/help/en/model-studio/qwen3-8-2-4t-a95b
[^15]: Qwen Team, “Qwen3.8-Flash-Next: A New Architecture, Towards Ultimate Cost-Efficiency”, 2026-08-26. https://qwen.ai/blog?id=qwen3.8-flash-next