# 论·中国 AI 三条路线：从制度差异到基础设施合流

> DeepSeek、Qwen、GLM 确实来自三种不同组织：量化基金内部研究体系、超大互联网云平台、清华系创业公司。这个差异解释了它们为什么在 2023—2024 年走出不同路线。但旧稿把“创始人基因决定技术路线”写得太像宿命论，也低估了 2026 年发生的合流：三家都在做开放权重、Agent、长上下文、稀疏模型、工具调用和多硬件部署。真正值得研究的，不再是“三种不可通约的物种”，而是**不同制度起点如何在同一产业约束下逐渐收敛，又在哪些层面继续保持差异。**

---

## 一、先把“三条路线”从人格故事还原成制度结构

把 DeepSeek 解释成“量化交易员思维”、Qwen 解释成“云计算产品经理思维”、GLM 解释成“教授思维”，很有叙事吸引力，却容易把组织史写成创始人性格决定论。

技术路线通常由多种约束共同决定：

- 资金从哪里来；
- 是否必须直接从模型收入回收成本；
- 已有客户是谁；
- 是否拥有云基础设施；
- 能不能长期承担基础研究；
- 模型发布以后希望谁来部署；
- 国内外硬件供应发生变化时，系统要怎样迁移。

从这个角度看，DeepSeek、Qwen、GLM 的差异仍然非常清楚，但原因比“创始人职业性格”更结构化。

| 维度 | DeepSeek | Qwen / Alibaba | GLM / Z.ai（智谱） |
|------|----------|----------------|--------------------|
| 组织起点 | 幻方量化内部 AI 研究体系 | 阿里云 / 阿里集团 AI 平台 | 清华技术商业化创业公司 |
| 主要既有资产 | 研究自由、GPU/系统工程积累 | 云基础设施、企业客户、产品渠道 | 学术人才、创业融资、模型产品团队 |
| 早期差异化 | 训练/推理效率、开放研究 | 全尺寸模型族、云服务、生态覆盖 | 中文模型、Agent 与自主技术路线 |
| 2026 核心方向 | V4：1M context、Agent、Pro/Flash、国产硬件 | Qwen3.8：Max 旗舰开放、全谱系、多模态、云分发 | GLM-5.x：长程 Agent、开放权重、多模态、国产芯片大规模推理 |
| 最明显约束 | 大规模服务与产品化能力必须继续扩建 | 开放生态与阿里云商业利益如何平衡 | 创业公司资本强度、基础设施规模与全球分发 |

所以“三条路线”仍然成立，但它们是**组织制度路线**，不是三种永远不变的模型哲学。

---

## 二、DeepSeek：不是“省钱哲学”，而是持续重写成本函数

DeepSeek 最容易被归纳为“效率优先”。这个判断基本正确，但旧稿把效率理解得太窄，仿佛 DeepSeek 的所有创新只是为了“更便宜”。

从 V2 到 V4，DeepSeek 真正持续做的是：**每一代都寻找系统中最昂贵或最受限制的部分，并重新设计。**

### 2.1 V2：KV Cache

DeepSeek-V2 的 MLA（Multi-head Latent Attention）通过低维潜在表示降低 KV Cache 成本。[^1]

这是一个典型 DeepSeek 式选择：不是把显存瓶颈当作部署团队的问题，而直接修改模型架构。

### 2.2 V3：大规模 MoE 训练

V3 将 MLA、DeepSeekMoE、auxiliary-loss-free load balancing、FP8 与 Multi-Token Prediction 放进 671B / 37B active 的超大 MoE。[^2]

技术报告披露 2.788M H800 GPU hours，并按 2 美元/GPU-hour 折算出约 557.6 万美元的训练计算预算。

这个数字不能等同于全部研发成本，但它证明了一件更有价值的事：**前沿模型的最终训练计算账单并不是参数规模的简单函数。**

### 2.3 R1：可验证强化学习

R1-Zero 与 R1 又把优化对象移动到 reasoning training：数学、代码等任务有可验证结果，因此可以用大规模 RL 把预训练能力组织成更强推理行为。[^3]

这里“省人工标注”只是副产品，真正重要的是**环境可以成为老师**。

### 2.4 V3.2 / V4：工具循环、百万上下文与服务系统

到 V3.2，DeepSeek 开始强化 thinking-in-tool-use；到 2026 年 V4，模型正式转向 1M context、Agentic Coding、Responses API、Pro / Flash 分层和多硬件适配。[^4]

这时“效率”已经不再只是 FLOPs：

- 一个 Agent 要不要重试；
- 工具调用失败多少次；
- 1M context 是否需要高昂 KV Cache；
- 国产芯片上能不能维持吞吐；
- 高峰期算力怎么调度。

因此 DeepSeek 的路线更准确地说是：

> **把 AI 系统成本从一个既定事实，变成一个持续被工程化的变量。**

### 2.5 商业模式也不能再写成“不从 AI 赚钱”

幻方背景确实给了 DeepSeek更强的长期研究自由，但 2026 年的 DeepSeek 已经运营 App、API、大规模推理服务并进行明显的产品分层。

V4-Pro 与 V4-Flash 价格差、峰谷定价尤其说明：DeepSeek 也在学习**怎样给不同质量的任务完成率定价**。

所以“DeepSeek 不需要赚钱，因此永远可以免费”已经不是可持续的分析框架。

---

## 三、Qwen：不是“开源替阿里云卖 GPU”这么简单

Qwen 的确拥有最强的平台型基因。

阿里有：

- Alibaba Cloud；
- ModelScope；
- 百炼 / Model Studio；
- 企业客户；
- 电商、办公、搜索与开发工具等真实内部负载。

因此 Qwen 一开始就比多数创业公司更容易做“模型家族”而不是“单个明星模型”。

### 3.1 全谱系的意义是部署覆盖，而不是参数收藏

Qwen 从早期 7B / 14B / 72B，到 Qwen2.5、Qwen3，再到 2026 的 3.5 / 3.6 / 3.7 / 3.8，始终维护多个尺寸和用途。

这件事的产业价值在于：

- 本地设备需要小模型；
- 企业服务器需要中型模型；
- 云上 Agent 需要高吞吐模型；
- 最高难度任务需要 Max / 大 MoE。

“全谱系”因此是一种**部署产品设计**。

### 3.2 许可史比“Qwen 从 1.5 起全 Apache 2.0”复杂

旧稿把 Qwen 写成从 Qwen1.5 以后“全系 Apache 2.0”，这是过度简化。

不同代际和尺寸曾使用不同许可，例如 Qwen2 72B、Qwen2.5 部分尺寸并不都与中小模型使用同一 Apache 2.0 条款。

所以 Qwen 的真正趋势不是“一步完全开放”，而是：

> **开放边界逐代扩大。**

这条趋势到 2026 年达到一个新阶段。

### 3.3 Qwen3.8：Max 级旗舰进入开放权重主线

**2026-08**，Qwen3.8-Max 发布，随后 2.4T-A95B 开放权重版本上线。[^5]

这件事改变了 Qwen 过去“云端 Max + 开放次旗舰”的稳定分工：**最顶层旗舰本身也进入开放路线。**

于是阿里的“双轨”需要重新解释。

过去可以说：

**闭源抢收入，开源抢社区。**

到 2026 年，更准确的是：

**云端真实负载 → 模型训练与后训练 → 开放权重 → runtime / framework 生态 → 更多部署 → 更多云负载。**

这是一个循环，不是两条互不相干的轨道。

### 3.4 开放以后，阿里仍然拥有基础设施优势

2.4T 参数模型即使给你权重，也不意味着普通开发者能自己部署。

这反而强化云平台的重要性。

所以 Qwen3.8 的开放并不自动削弱阿里云；大型开放权重模型可能让云平台从“唯一模型供应者”转型成“最方便的运行场所”。

这也是 2026 开放模型经济学最反直觉的一点：

> **权重越开放，托管市场未必越小；模型越大，专业托管反而越重要。**

---

## 四、GLM：旧稿最需要修正的一条路线

旧稿把 GLM 的本质写成“教授坚持非标准 GLM 架构”，并推演其会因为行业围绕标准自回归 Transformer 优化而陷入长期工程负债。

这个判断在 2026 年已经明显过时。

GLM-5 系列的公开定位不再围绕“坚持 blank infilling 传统”展开，而是围绕：

- Agentic Engineering；
- long-horizon tasks；
- coding；
- 1M context；
- 稀疏模型；
- 多模态；
- 开放权重；
- 国产芯片上的大规模 serving。[^6]

这说明智谱并没有把早期 GLM 技术身份变成不可改变的宗教。

### 4.1 GLM-5 / 5.1：长程 Agent 成为主线

**2026-02**，GLM-5 开放；**4 月** GLM-5.1 发布并开源，官方把它定位成 agentic engineering 旗舰，强调可以在一次任务中持续工作数小时。[^6][^7]

模型的评价单位从“中文 benchmark”转成：

- repo generation；
- terminal tasks；
- coding agent；
- 长时间规划、执行、修复和交付。

这与 GPT、Claude、DeepSeek 同期的变化高度一致。

### 4.2 GLM-5.2：1M context 与 long-horizon tasks

**2026-06**，GLM-5.2 继续围绕 coding、1M context 与长程任务推进。[^8]

这使智谱从“有自己架构传统的中文模型公司”明显转型为**长程 Agent 工程公司**。

### 4.3 GLM-5.3-Flash：国产芯片 serving 成为模型卖点

**2026-08-26**，Z.ai 发布并开放 **GLM-5.3-Flash**：320B 总参数、18B 激活参数，是 GLM-5 系列首个原生多模态模型，引入 linear + sparse attention hybrid 与 mHC，并支持 1M context。[^9]

更值得入史的是部署。

Z.ai 表示，在正式发布前以 `ox-alpha` 匿名测试时，大规模请求**全部由国产 AI 芯片集群提供服务**；官方技术说明进一步描述了基于 SGLang 的专用推理引擎、EPD（Encode–Prefill–Decode）解耦和多种内存/通信优化。[^9]

因此 GLM 在 2026 年出现了一个过去文章完全没有预见的定位：

> **不仅做国产模型，而且把“前沿模型能否在国产芯片上以生产规模服务全球流量”本身变成技术成果。**

这使 GLM 路线与中国芯片自主化真正接上。

---

## 五、到 2026 年，“三条路线”其实在收敛

如果只看 2023 年，很容易得到：

- DeepSeek = 效率；
- Qwen = 平台；
- GLM = 架构。

到 2026 年，三家却都在做：

| 能力 | DeepSeek | Qwen | GLM |
|------|:--:|:--:|:--:|
| 开放权重旗舰 | ✅ | ✅ | ✅ |
| 稀疏 / MoE | ✅ | ✅ | ✅ |
| 长上下文 | 1M | 1M | 1M |
| Agent / coding | ✅ | ✅ | ✅ |
| tool use | ✅ | ✅ | ✅ |
| 多模态 | V4 Vision 实验 | 原生多模态主线 | GLM-5.3-Flash 原生多模态 |
| 云 API | ✅ | ✅ | ✅ |
| 国产硬件适配 | 强化中 | 阿里云/国内硬件生态 | 已把国产芯片大规模 serving 作为发布亮点 |

这并不是谁抄谁。

它反映的是 2026 年前沿模型面对**同一组生产约束**：

- Agent 需要长上下文；
- 长上下文要求更高效注意力；
- 实时大量调用要求稀疏激活；
- 企业采用要求 tool use；
- 国内供应链要求多硬件可部署；
- 开放权重要求能进入 vLLM / SGLang / Transformers 等 runtime。

当约束相同，路线自然会收敛。

---

## 六、真正没有收敛的是“价值最终沉淀在哪里”

虽然技术表面越来越相似，三家的产业位置仍然不同。

### DeepSeek：价值沉淀在模型效率与研究品牌

DeepSeek 最强的护城河仍是：

- 架构与训练创新；
- 成本效率；
- 开放前沿模型的全球品牌；
- 让第三方平台愿意快速兼容。

它需要继续证明的是：能否把研究优势长期变成大规模服务和稳定企业生态。

### Qwen：价值沉淀在模型 + 云 + 开发者平台

Qwen 的模型即使完全开放，阿里仍可以在：

- 百炼；
- 云 GPU / 加速器；
- 企业数据；
- Qoder / coding products；
- ModelScope；
- 模型托管和推理优化

上获得商业价值。

因此 Qwen 更接近基础设施平台策略。

### GLM：价值沉淀在 Agent 产品与国产 serving 能力

Z.ai / 智谱必须同时证明两件事：

1. 模型能力足以与全球前沿竞争；
2. 一个规模远小于阿里的创业公司也能构建可靠的 Agent 产品与 serving stack。

GLM-5.3-Flash 把国产芯片集群 serving 做成发布主角，正是在回答第二个问题。

---

## 七、开放策略也在互相靠近

旧稿中的差异是：

- DeepSeek：MIT 全开；
- Qwen：Apache 全开；
- GLM：前沿闭源、次级开源。

这三句现在都需要重写。

### DeepSeek

V3 代码 MIT、模型权重 DeepSeek License；R1 主模型权重与代码 MIT；后续模型还需逐版本看官方许可。不能把“DeepSeek”整族写成单一 MIT。[^10]

### Qwen

Qwen 不同代际、尺寸历史上存在 Apache 2.0 与自定义许可并存，开放边界持续扩大，到 Qwen3.8 Max 级旗舰也进入开放权重主线。

### GLM

GLM-5、5.1、5.2、5.3-Flash 已把开放前沿模型重新放到品牌核心，旧有“旗舰闭源、次旗舰开源”的二分也不再成立。[^6][^9]

因此 2026 中国前沿模型最显著的共同特征之一，反而是：

> **强旗舰开放权重正在成为竞争手段，而不是能力落后后的补充策略。**

---

## 八、为什么中国路线特别容易把“成本”做成第一等指标

这并不是民族性，也不仅是 DeepSeek 的量化基因。

中国模型公司共同面临几个现实约束：

- 最先进 NVIDIA 芯片供应受限；
- 国产加速器单卡性能与软件生态仍需要追赶；
- 国内 API 市场长期价格竞争激烈；
- 用户愿意频繁在不同国产模型之间迁移；
- 开放权重使第三方部署商不断压低推理价格。

这些条件共同奖励：

- MoE；
- sparse / linear attention；
- KV Cache 优化；
- 低激活参数；
- 量化；
- prefill / decode 解耦；
- cache pricing；
- 多硬件 runtime。

因此 DeepSeek、Qwen、GLM 到 2026 年都越来越重视“每一单位计算买到多少智能”。

这不是单一公司的美学，而是一个市场环境的选择压力。

---

## 九、三条路线之外：它们正在共同改变全球开放模型中心

2023 年的开放权重中心几乎完全由 Meta Llama 定义。

到 2026 年：

- Kimi K3：2.8T；
- Qwen3.8：2.4T；
- DeepSeek V4：超大稀疏 Agent 模型；
- GLM-5.x：持续开放长程 Agent；
- Qwen / DeepSeek / GLM 都形成全球 runtime 支持。

开放权重前沿的地理中心已经明显多极化，并且中国模型成为其中最大的供给来源之一。

这会产生两个相反结果：

一方面，中国公司获得全球开发者影响力；另一方面，模型越大，全球企业越依赖 AWS、Azure、Google Cloud、阿里云等专业托管。

所以模型开放不必然带来基础设施去中心化。

> **权重可以向中国集中生产，推理又可能向全球大云厂商集中。**

这正是 Kimi K3 2026 年与美国云厂商谈判最值得关注的地方。

---

## 十、评曰：三条路线不是三条命运

旧稿最大的误区，是把 DeepSeek、Qwen、GLM 写成被“基因”决定的三种物种。

历史已经证明它们会变。

DeepSeek 从“只做研究、极低价”走向 Pro / Flash 与服务调度；Qwen 从“开放中小模型、云端保留 Max”走到 Max 级旗舰开放；GLM 从“自主架构的学术创业”走到长程 Agent、开放权重和国产芯片 production serving。

这说明组织起点会影响路线，却不会永久锁死路线。

真正决定公司是否继续前进的，是它能不能在新约束出现时修改自己。

到了 2026 年，中国前沿模型竞争的共同问题已经变成：

> **怎样把越来越强的智能，以越来越低的激活成本，稳定运行在越来越多种硬件上，并让 Agent 连续完成越来越长的任务。**

DeepSeek、Qwen、GLM 对这个问题的答案仍然不同：

- DeepSeek 最擅长重新设计模型和系统成本；
- Qwen 最擅长把模型变成完整平台和模型族；
- GLM 正把长程 Agent 与国产 serving 结合成自己的新定位。

所以“三条路线”今天仍值得保留，但它们不应再被写成三种静态哲学。

更好的理解是：

> **同一场产业压力测试里，三种组织制度如何不断改变自己的解法。**

这比“谁最强”更能解释它们为什么会活到下一代。

---

*本篇由终末地工业史官团队编纂。*  
*2026-08 补订：GPT-5.6 Sol（OpenAI）。*

---

> 📖 详见《DeepSeek 世家》《Qwen 世家》《GLM 世家》《DeepSeek 本纪》《Alibaba 本纪》《志·开源运动》《志·地缘与封锁》《论·推理经济学》。

[^1]: DeepSeek-AI et al., “DeepSeek-V2”, arXiv:2405.04434. https://arxiv.org/abs/2405.04434
[^2]: DeepSeek-AI et al., “DeepSeek-V3 Technical Report”, arXiv:2412.19437. https://arxiv.org/abs/2412.19437
[^3]: DeepSeek-AI et al., “DeepSeek-R1”, arXiv:2501.12948. https://arxiv.org/abs/2501.12948
[^4]: DeepSeek, V4 Preview / API updates, 2026. https://deepseek.com/en/news/v4-preview/ ; https://api-docs.deepseek.com/updates/
[^5]: Alibaba / Qwen3.8 official model materials. https://github.com/QwenLM/Qwen3.8 ; https://www.alibabacloud.com/help/en/model-studio/qwen3-8-2-4t-a95b
[^6]: Z.ai Research, GLM model family timeline. https://www.zhipuai.cn/en/research
[^7]: Zhipu / Z.ai, GLM-5.1 model documentation, 2026-04. https://docs.bigmodel.cn/cn/guide/models/text/glm-5.1
[^8]: Zhipu / Z.ai, GLM-5.2 release, 2026-06. https://docs.bigmodel.cn/cn/update/new-releases
[^9]: Z.ai, “GLM-5.3-Flash: Frontier Intelligence, Flash Cost”, 2026-08-26. https://z.ai/blog/glm-5.3-flash
[^10]: DeepSeek-V3 model license and DeepSeek-R1 license. https://github.com/deepseek-ai/DeepSeek-V3/blob/main/LICENSE-MODEL ; https://github.com/deepseek-ai/DeepSeek-R1
