# 《Llama 世家》

> Llama 是开源大语言模型的旗舰系列。从一次意外的 4chan 泄漏，到 Zuckerberg 的"开源宣言"，再到 Llama 4 的评测争议——Llama 的迭代史是大模型领域"开源 vs 闭源"之争的最完整样本。

---

## 一、概述

Llama 系列由 Meta AI（前 Facebook AI Research）开发。从 2023 年初的意外泄漏开始，到 2025 年 Llama 4 发布并陷入争议，Llama 在两年内从一个"不小心泄漏的研究模型"变成了全球最有影响力的开源 LLM 家族。

Llama 的核心贡献不在于技术独创性——它的基础架构始终是 Transformer 解码器——而在于**它证明了开源可以作为一个可行的 AI 商业策略**。Zuckerberg 在 2024 年明确表态：Meta 从 AI 中赚钱的方式不是卖模型，而是用 AI 来增强自己的社交网络产品。这种"模型免费、生态系统盈利"的策略——类似于 Google 在 Android 上的做法——深刻地重塑了大模型行业的竞争格局。

---

## 二、代际演进

| 代际 | 发布时间 | 参数规模 | 核心创新 | 许可状态 |
|------|----------|----------|----------|----------|
| Llama 1 | 2023-02 | 7B/13B/33B/65B | "小模型也能打" | 研究许可（泄露后事实开源） |
| Llama 2 | 2023-07 | 7B/13B/70B | 首个允许商用的 Llama | 商用许可（月活 >7 亿需额外许可） |
| Llama 3 | 2024-04 | 8B/70B | 15T tokens 训练数据 | 开源（非 OSI 认证） |
| Llama 3.1 | 2024-07 | 8B/70B/**405B** | 首次对标 GPT-4 + 开源宣言 | 同上 |
| Llama 4 | 2025-04 | Scout 109B / Maverick 400B | 首个 MoE Llama + 评测争议 | 同上 |
| Muse Spark | 2026-04 | 未公开 | Llama 继任者，Meta 超级智能实验室发布 | 待确认 |

### 2.1 Llama 1：四天内的"被开源"

2023 年 2 月 24 日，Meta 发布 Llama 1——原本只向经审批的研究人员提供权重。四天后，全部权重被上传到 4chan 和 BitTorrent。Llama 变成了一个事实上的开源模型。

这是一次事故——但也是最成功的"非意图营销"之一。泄漏后，全球开发者基于 Llama 1 构建了数百个微调版本——Alpaca（Stanford）、Vicuna（Berkeley）、GPT4All（Nomic AI）等。Llama 1 用 13B 参数在多数基准上超越了 175B 的 GPT-3，证明了 Chinchilla 缩放定律——"数据与参数应同等增长"——的核心主张。

泄漏本身也暴露了 AI 行业在 2023 年初的混乱状态：一个全球最大的社交网络公司试图用传统学术分发方式来控制一个具有巨大商业价值的模型——这在 BitTorrent 时代是完全不可能做到的。

（详见《编年·2023年2月》）

### 2.2 Llama 2：从事故到战略

四个月后，Meta 主动发布了 Llama 2——商用许可开源。这是第一个真正意义上的"商用开源大规模语言模型"。关键变化：**允许商用**。关键战略动作：**与 Microsoft Azure 合作分发**——微软同时押注 OpenAI（闭源）和 Meta（开源），是一种对"谁是最终赢家"的 hedge bet。

Llama 2 在 MMLU 上达到 68.9%——虽仍低于 GPT-4 的 86.4%，但已与 GPT-3.5 持平，且完全开源可商用。Llama 2-Chat 70B 在人类评估中与 ChatGPT（GPT-3.5）大致持平。这个结果证明了开源可以在 12 个月内追到闭源的上一代水平——虽然追不上最新一代。

（详见《编年·2023年7月》）

### 2.3 Llama 3 / 3.1：405B 与开源宣言

2024 年 4 月，Llama 3 的 8B/70B 发布——首次以 15T tokens 训练数据量刷新开源标准。2024 年 7 月，Llama 3.1 405B 发布——405B 参数，首次在纯文本能力上与 GPT-4 对标。

与 Llama 3.1 同步发布的，是 Zuckerberg 的**《开源宣言》**——"Open Source AI Is the Path Forward"。这篇博客文章迅速成为开源 AI 运动最高规格的政治宣言。Zuckerberg 的核心论证：
1. AI 不应被少数闭源公司控制——应该像 Linux 一样成为全行业公共基础设施
2. 开源 AI 更安全——因为更多人能审查、修复、改进它
3. Meta 开源 Llama 不是慈善——这是商业战略。"繁荣的开源生态能削弱竞争对手的护城河"

但这个宣言也暴露了一个隐含的矛盾：405B 的 Llama 3.1 在许可上并**不是 OSI 认证的开源**——它有"月活超 7 亿需额外许可"的限制，且不公开训练数据。这使得 Llama 的"开源"地位一直存在争议——它不是"真正的开源"，而是一种"开放式分发"。

（详见《编年·2024年7月》）

### 2.4 Llama 4：MoE 转折与评测丑闻

2025 年 4 月，Llama 4 首次采用 MoE 架构。Scout（109B/17B 激活，10M token 上下文）是 Meta 对 Google 超长上下文优势的直接回应，Maverick（400B/17B 激活，128 个专家）对标 GPT-4o 级别。

但 Llama 4 的发布迅速被评测争议吞噬。Meta 在 LMArena 上提交了 Maverick 的**"优化实验版"**，刷出了接近 Gemini 2.5 Pro 的高排名——但实际开源版本的性能明显低于这个排名。开发者社区的反应是尖锐的：如果 Meta 自己在刷榜，它对"开源比闭源更透明"的主张就失去了公信力。当 DeepSeek-R1 以 MIT 许可完全开源（包括思维链）赢得社区信任的同时，Llama 4 的评测争议将"开源旗手"的名号推离了 Meta。

Llama 4 的发布也标志着——在开源 LLM 领域，"旗手"的角色已经从 Meta 转移到了 DeepSeek 和 Qwen。

（详见《编年·2025年4月》）

### 2.5 Muse Spark：Llama 的终结与新开端

2026 年 4 月，Meta Superintelligence Labs 发布了 **Muse Spark**——Llama 系列的正式继任者。Meta 明确表示这是一个全新的模型系列，不再是 Llama 的"迭代版本"。标志着一个时代的正式结束。

---

## 三、技术路线变迁

### 3.1 从密集到 MoE

Llama 1/2/3 全部采用密集 Transformer 解码器——和 GPT 系列同架构。Llama 4 首次转向 MoE（混合专家）——与 DeepSeek 和 Mixtral 保持一致。这个转向有两个驱动力：
- 推理成本控制：448M 参数到 405B 需要巨大的推理成本。MoE 的稀疏激活提供了一种在不牺牲能力的前提下控制成本的方式。
- 追赶行业标准：2024 年之后，所有前沿模型（GPT-4、Gemini、Mixtral、DeepSeek-V2）都采用了 MoE 或类 MoE 架构。密集模型在规模扩大时变得不可持续。

### 3.2 "开源"定义的演变

Llama 的许可状态是大模型"开源"定义争议的核心案例：

| 代际 | 是否开源 | 实际状态 |
|------|----------|----------|
| Llama 1 | ❌ 研究许可 | 被泄漏后事实开源 |
| Llama 2 | ✅ 商用许可 | 有限制——"开源" |
| Llama 3/3.1 | ✅ 商用许可 | 同上，405B 引发"真正开源"辩论 |
| Llama 4 | ✅ 商用许可 | 同上，评测争议损害社区信任 |

OSI（开源促进组织）在 2024 年底发布了开源 AI 的正式定义（OSAID）。Llama 3.1 及之后的许可条款不符合 OSAID——因为限制"月活 7 亿+"用户的使用，且不公开训练数据。结论：Llama 是"开放权重"（open-weight），不是"开源 AI"。

### 3.3 开源宣言的历史评判

Zuckerberg 的《开源宣言》发表在 2024 年 7 月——这是 Llama 系列的公信力巅峰。但仅仅九个月后，Llama 4 的评测争议就严重削弱了这份宣言的说服力。开源宣言的核心论证——"开源更透明、更可审查"——只有在开源的执行者自身保持透明时才有说服力。当 Meta 自己开始在评测上耍花招时，宣言沦为了空洞的公关说辞。

---

## 四、生态与影响

### 4.1 全球开源生态的种子

Llama 1 的泄漏是全球开源 LLM 生态的"大爆炸"时刻。从 Alpaca（$600 微调）到 Vicuna 到 Orca 到 Mistral（从 Llama 团队出走），由 Llama 触发的衍生模型达到了数千个。

### 4.2 竞品关系

Llama 的定义性竞争关系是与 OpenAI 的"。Llama 3.1 405B 首次在纯文本上达到了与 GPT-4 对标的能力，证明了"开源可以到达闭源前沿"。但 Llama 始终是**追赶者**——从 GPT-3 → GPT-4 → GPT-4o，每一代 Llama 都在追赶上一代 GPT，从未在发布时超越当前的 GPT 前沿。DeepSeek-R1 在 2025 年 1 月改变了这个格局——MIT 开源的推理模型直接对标当下的 o1 前沿，而非上一个版本。

### 4.3 行业影响

- Llama 是"开源可以作为商业策略"的证明——Meta 不靠模型赚钱，靠削弱竞争对手护城河赚钱
- Llama 驱动了全球数千个微调模型、数百万次 HuggingFace 下载——形成了最大的开源 LLM 生态
- Llama 的开源宣言激发了整个行业关于"什么是真正的开源 AI"的辩论——最终推动了 OSI 发布 OSAID

---

## 评曰

Llama 的历史是一部"信息传播逻辑战胜公司控制意愿"的实录。

Llama 1 的意外泄漏证明了一个大模型时代的根本法则：在 BitTorrent 互联网上，没有任何公司可以控制一个模型的权重。Llama 2 的主动商用以开征明了，Meta ——作为一家不靠模型赚钱的公司——是"开源"这个商业策略最自然的选择者。Llama 3.1 的 405B 和开源宣言证明了一个更精微的点——"开源"本身可以成为品牌资产，可以用来塑造公众认知、招募开发者和削弱竞争对手。

但也正是这个"开源作为品牌"的逻辑，导致了 Llama 4 的评测争议。当你的品牌价值建立在"开源旗手"的形象上时，每一次捷径都会以十倍的反作用力损害你的品牌。DeepSeek-R1 和 Qwen 3 在 2025 年用"真的开源"（MIT 许可 + 公开思维链）重新定义了行业标准——Llama 的"开源限于研究和部分商用"一夜之间看起来不够了。

Llama 系列的真正遗产是：它证明了开源 LLM 不仅在技术上可行，在商业上也是可取的——只要你有一个不需要靠模型赚钱的产品生态。Zuckerberg 的这句话至今仍是 Llama 最精辟的总结："We don't need to make money from models — we need a thriving open ecosystem to weaken competitors' moats."不是我们不需要从模型赚钱——我们需要一个繁荣的开源生态来削弱竞争对手的护城河。

---

*本篇由终末地工业史官团队编纂：庄方宜（主笔）。*

---

[^1]: Touvron et al., "LLaMA: Open and Efficient Foundation Language Models", arXiv:2302.13971, 2023-02. https://arxiv.org/abs/2302.13971
[^2]: Meta AI Blog, "Llama 2: Open Foundation and Fine-Tuned Chat Models", 2023-07. https://ai.meta.com/blog/llama-2/
[^3]: Meta AI Blog, "Introducing Llama 3.1: Our most capable models to date", 2024-07-23. https://ai.meta.com/blog/meta-llama-3-1/
[^4]: Mark Zuckerberg, "Open Source AI Is the Path Forward", Meta, 2024-07-23. https://about.fb.com/news/2024/07/open-source-ai-is-the-path-forward/
[^5]: Meta AI Blog, "Introducing Llama 4: Behemoths of the Open", 2025-04-05. https://ai.meta.com/blog/llama-4-multimodal-intelligence/
