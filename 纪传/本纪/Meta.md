# 《Meta 本纪》

> 一家社交媒体公司，无意间成了开源 AI 的最大推手。从 FAIR 的学术实验室到 Llama 的意外泄漏，从 Zuckerberg 的"开源宣言"到 Meta Superintelligence Labs 的成立——Meta 的 AI 轨迹证明了一件事：不靠模型赚钱的公司，最适合把模型免费送出去。

---

## 一、概述

Meta（前 Facebook）在大模型史上的角色极其独特：它是全球最大的开源大模型系列 Llama 的母公司，但它从来不靠 AI 模型赚钱。Meta 的商业模式是社交广告——Facebook、Instagram、WhatsApp、Threads 的信息流广告才是收入支柱。AI 对 Meta 而言不是产品本身，而是**产品背后的引擎**：内容推荐、广告定向、创作者工具、虚拟助手。

这种"模型免费、生态盈利"的定位——类似于 Google 在 Android 上的策略——使 Meta 成为了大模型开源运动中最具影响力也最具争议的参与者。Zuckerberg 在 2024 年的《开源宣言》中把话说得直白："我们不需要从模型赚钱——我们需要一个繁荣的开源生态来削弱竞争对手的护城河。"这不是慈善，是商业策略。

---

## 二、创立与早年

### 2.1 FAIR：从 Facebook 到 Meta 的 AI 能力积累

Facebook AI Research（FAIR）成立于 2013 年，由 Yann LeCun（2018 年图灵奖得主）领导。FAIR 的定位是纯基础研究实验室——发表论文、开源工具、不直接背负产品指标。[^1]

FAIR 在深度学习早期做出了多项重要贡献：Torch（深度学习框架）、fairseq（序列到序列模型）、PyTorch（2017 年发布，后成为 AI 研究领域的事实标准框架）、Detectron（目标检测工具箱）。PyTorch 的影响力超越了 FAIR 本身——它成为全球 AI 研究者和工程师的首选工具，是 Meta 对 AI 生态最重要的基础设施贡献。

FAIR 的研究风格更接近学术界而非工业界。LeCun 多次在公开场合强调"开放研究"的重要性——发论文、开源代码、促进学术交流。这种文化为后来 Llama 的开源策略埋下了种子。

### 2.2 从 Facebook 到 Meta：元宇宙的赌注与转向

2021 年 10 月，Mark Zuckerberg 宣布将公司名称从 Facebook 更改为 **Meta**，押注"元宇宙"（metaverse）——一个由 VR/AR 驱动的沉浸式虚拟世界。Reality Labs 在 2022-2023 年累计亏损超过 300 亿美元。[^2]

元宇宙战略的失败是 Meta AI 转向的背景板。到 2023 年，ChatGPT 的爆发让 Zuckerberg 意识到：**AI 才是下一个平台级机会**，而非 VR。Meta 迅速调转资源——缩减 Reality Labs 预算，扩大 AI 基础设施建设（GPU 集群），将 AI 融入核心产品（Instagram 推荐、WhatsApp AI 助手、Facebook 广告优化）。

这个转向的速度令人惊讶。从"元宇宙公司"到"AI 公司"，Meta 用了不到一年完成了品牌重塑。Zuckerberg 在 2023 年的一次采访中直言："AI 将是我们未来几年最大的投资领域。"

---

## 三、关键事件

### 3.1 Llama 1 的泄漏（2023-02）：意外的开源

2023 年 2 月 24 日，Meta 发布 Llama 1——原本只向经审批的研究人员提供权重。四天后，全部权重被上传到 4chan 和 BitTorrent。Llama 变成了一个事实上的开源模型。[^3]

这次泄漏不是计划中的——它是 Meta 用学术分发方式（Google Form 申请）控制一个具有巨大商业价值的模型的结果。在 BitTorrent 互联网上，这种控制注定失败。但泄漏的效果是爆炸性的：全球开发者基于 Llama 1 在数周内构建了 Alpaca（Stanford，$600 微调）、Vicuna（Berkeley）、GPT4All（Nomic AI）等数百个衍生模型。

Llama 1 用 13B 参数在多数基准上超越了 175B 的 GPT-3，证明了 Chinchilla 缩放定律的核心主张——"数据与参数应同等增长"。更关键的是，泄漏后爆发的微调生态让 Meta 意识到一件事：**开源不是损失控制——它是增长引擎**。

（详见《Llama 世家》）

### 3.2 Llama 2：从事故到战略（2023-07）

四个月后，Meta 主动发布了 Llama 2——首次允许商用的开源大模型。与 Microsoft Azure 合作分发。Llama 2 在 MMLU 上达到 68.9%，与 GPT-3.5 持平。[^4]

Llama 2 的发布标志着 Meta 从"被动开源"到"主动开源"的战略转型。Zuckerberg 在内部明确表态：Llama 不是慈善项目——开源 LLM 可以削弱 OpenAI 和 Google 的闭源护城河，同时吸引开发者进入 Meta 的生态。

### 3.3 《开源宣言》与 Llama 3.1（2024-07）：公信力的巅峰

2024 年 7 月，Meta 发布 Llama 3.1 405B——首次在纯文本能力上与 GPT-4 对标。同步发布的是 Zuckerberg 的《开源宣言》——"Open Source AI Is the Path Forward"。[^5]

Zuckerberg 的核心论证有三点：
1. AI 不应被少数闭源公司控制——应该像 Linux 一样成为公共基础设施
2. 开源 AI 更安全——更多人能审查、修复、改进它
3. Meta 开源 Llama 不是慈善——繁荣的开源生态能削弱竞争对手的护城河

这篇宣言是开源 AI 运动最高规格的政治宣言。但它的公信力在九个月后就受到了严重削弱。

### 3.4 Llama 4 的评测争议（2025-04）：开源旗手的污点

2025 年 4 月，Llama 4 发布——首次采用 MoE 架构。但发布迅速被评测争议吞噬：Meta 在 LMArena 上提交了 Maverick 的"优化实验版"，刷出了接近 Gemini 2.5 Pro 的高排名，但实际开源版本的性能明显低于这个排名。[^6]

开发者社区的反应是尖锐的：如果 Meta 自己在刷榜，它对"开源比闭源更透明"的主张就失去了公信力。当 DeepSeek-R1 以 MIT 许可完全开源赢得社区信任的同时，Llama 4 的评测争议将"开源旗手"的名号推离了 Meta。

（详见《Llama 世家》《编年·2025年4月》）

### 3.5 Meta Superintelligence Labs（2025-06）：战略升级

2025 年 6 月，Meta 宣布成立 **Meta Superintelligence Labs（MSL）**，由 Alexandr Wang（前 Scale AI CEO）领导。[^7]

MSL 的成立标志着 Meta AI 战略的重大升级：从"开源 Llama 作为商业策略"转向"正面竞争前沿模型"。Zuckerberg 在内部备忘中表示，MSL 的目标是"构建世界上最强大的 AI 系统"——这与之前"削弱竞争对手护城河"的防御性定位截然不同。

MSL 成立后发布了 Llama 系列的继任者 Muse Spark（2026-04），标志着 Llama 品牌时代的正式结束。Meta 的 AI 故事从"意外的开源旗手"进入了一个新篇章——正面竞逐 AGI。

---

## 四、兴衰分析

### 阶段一：学术实验室（2013-2022）

**发生了什么**：FAIR 以纯学术风格运作——发论文、开源工具、不背负产品指标。PyTorch 成为全球 AI 研究的事实标准。

**为什么发生**：LeCun 的学术理想主义 + Facebook 的广告收入提供了"不需要从 AI 赚钱"的组织条件。

**留下了什么**：PyTorch 生态；开放研究的品牌基因；为 Llama 的开源策略奠定了文化基础。

### 阶段二：意外的开源旗手（2023-2024）

**发生了什么**：Llama 1 泄漏 → Llama 2 主动商用 → 《开源宣言》。Meta 从"被动泄漏"到"主动拥抱"开源，成为全球开源 AI 的最大推手。

**为什么发生**：Zuckerberg 识别出"开源是削弱竞争对手护城河的最有效工具"。Meta 不靠模型赚钱的商业模式，使其成为开源策略的天然选择者。

**留下了什么**：全球最大的开源 LLM 生态；"开源作为商业策略"的范例证明；但"不是真正的开源"（OSI 标准）的争议始终存在。

### 阶段三：战略升级（2025-至今）

**发生了什么**：Llama 4 评测争议损害品牌信任；MSL 成立标志从"开源旗手"转向"正面竞逐 AGI"；Muse Spark 标志 Llama 时代的结束。

**为什么发生**：DeepSeek-R1 和 Qwen 3 以"真正的开源"（MIT 许可）重新定义了行业标准，Llama 的"限于研究和部分商用"不再够用。Meta 需要在 AI 的"硬实力"（前沿模型能力）上证明自己，而非仅靠"开源策略"维持影响力。

**留下的悬念**：MSL 能否产出真正具有前沿竞争力的模型？Meta 的"不靠模型赚钱"定位，在 AGI 竞赛中是优势还是劣势？

---

## 评曰

Meta 的 AI 十年，是一段"无心插柳柳成荫"的实录。

FAIR 成立时，没有人预见到一家社交媒体公司会成为开源 AI 的最大推手。Llama 1 的泄漏是事故，不是战略——但事故之后的反应，展示了 Zuckerberg 作为商业决策者最敏锐的一面：他没有追究泄漏者的责任，没有收紧分发策略，而是四个月后主动发布了允许商用的 Llama 2。从"我们控制不了"到"我们不需要控制"——这个转身的速度和决断力，是 Meta 在 AI 领域最重要的决策。

《开源宣言》是公信力的巅峰，Llama 4 评测争议是信任的裂隙。当你的品牌价值建立在"开源旗手"的形象上时，每一次捷径都会以十倍的反作用力损害你的品牌。DeepSeek-R1 用 MIT 开源证明了"真正的开源"是什么样的——Meta 的"月活超 7 亿需额外许可"一夜之间看起来不够了。

但 Meta 最终的遗产可能不在于 Llama 本身——而在于它证明了**一家不靠模型赚钱的公司，最适合把模型送出去**。这条逻辑在 Google 的 Android 上已经被验证过一次：当模型是"免费基础设施"时，它的生态增长速度远超任何闭源方案。Llama 在两年内催生了数千个衍生模型——这是任何闭源 API 做不到的事情。

Zuckerberg 那句话至今仍是 Meta AI 战略最精准的总结："We don't need to make money from models — we need a thriving open ecosystem to weaken competitors' moats."不是不需要从模型赚钱——是需要用开源来削弱别人的护城河。这句话的冷酷和精确，恰如其分。

---

*本篇由终末地工业史官团队编纂：庄方宜（主笔）。*

---

[^1]: Yann LeCun / Facebook, "FAIR: Facebook AI Research", 2013-12. https://ai.meta.com/research/
[^2]: Meta 2022 Q4 Earnings Report. Reality Labs 2022 年亏损约 $13.7B，2023 年亏损约 $16.1B。
[^3]: Touvron et al., "LLaMA: Open and Efficient Foundation Language Models", arXiv:2302.13971, 2023-02. https://arxiv.org/abs/2302.13971
[^4]: Meta AI Blog, "Llama 2: Open Foundation and Fine-Tuned Chat Models", 2023-07. https://ai.meta.com/llama/ （原 blog URL 返回 400，此为 Llama 官方页面）
[^5]: Mark Zuckerberg, "Open Source AI Is the Path Forward", Meta, 2024-07-23. https://about.fb.com/news/2024/07/open-source-ai-is-the-path-forward/
[^6]: Meta AI Blog, "Introducing Llama 4: Behemoths of the Open", 2025-04-05. https://ai.meta.com/blog/llama-4-multimodal-intelligence/
[^7]: The Information / Reuters, "Meta creates Superintelligence Labs, led by Alexandr Wang", 2025-06. (综合报道)
