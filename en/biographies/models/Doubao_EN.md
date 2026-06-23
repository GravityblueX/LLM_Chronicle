# The Biography of Doubao

> Doubao was not the first Chinese LLM, nor was it the technically strongest. It did something no one else was willing to do—drive the price down to the floor. In May 2024, ByteDance released the Doubao LLM; three months later, it slashed the inference price to ¥0.8/million tokens, dragging the entire Chinese LLM market into a price war. Doubao's logic was quintessentially ByteDance: don't make money on the model itself; make money on the scale effects of the application layer. Whether this logic holds remains debated to this day.

---

## I. Technical Background

2023 was the "first year" of Chinese LLMs. Baidu's ERNIE Bot (March), Alibaba's Tongyi Qianwen (April), iFlytek's Spark (May), and Zhipu AI's ChatGLM (June) were released in succession.[^1] But the Chinese LLM market of 2023 had a conspicuous feature: **everyone was building models, but few had figured out how to make money from them**.

Most vendors followed the strategy of "release the model first, prove technical capability, then slowly figure out the business model." API pricing generally referenced OpenAI—GPT-4's API was priced at approximately $30/million tokens (input), equivalent to over ¥200 in Chinese yuan.[^2] Chinese vendors priced somewhat lower, but not by much. LLM APIs remained something that most developers could "afford but were reluctant to use casually."

ByteDance was **late** at this stage. In the first half of 2023, while Baidu, Alibaba, and Zhipu were all competing for the label of "China's first LLM," ByteDance made no public statement. ByteDance's AI deployment was actually earlier and deeper, but it was concentrated in recommendation algorithms, content understanding, and ad delivery—its LLM team started late and lacked the decade-long NLP foundation of Baidu's ERNIE.

ByteDance's advantage lay not in early starts but in something else: **it owned China's largest mobile internet content ecosystem.** Douyin (TikTok China) with 600 million daily active users, Toutiao, Feishu, Jianying—ByteDance did not need to prove that LLMs were "useful"; it only needed to insert LLMs into products that already had 600 million users.[^3]

---

## II. Core Innovations

### 2.1 Doubao LLM: released May 2024

On 2024-05-15, ByteDance officially released the Doubao LLM at the Volcengine Force Conference.[^4] The Doubao series included multiple specifications—from lightweight edge models to flagship models with hundreds of billions of parameters, covering scenarios including conversation, role-playing, content creation, and code generation.

Doubao's technical highlights were not known for "topping leaderboards." ByteDance's strategy was to **build a model that was good enough, not the strongest model.** Doubao's performance on mainstream benchmarks placed it in the first tier of Chinese LLMs, but not always at the top. ByteDance's bet was: when model capability gaps narrow, price and application ecosystem become the decisive factors.

### 2.2 Price war: ¥0.8/million tokens

In August 2024, Volcengine dramatically slashed Doubao LLM API prices—**the primary model's inference price dropped to ¥0.8/million tokens (input), approximately ¥1.2/million tokens (output).**[^5] This price was an order of magnitude below the industry average. At the same time, GPT-4 was priced at approximately ¥200/million tokens, and even the cheapest Chinese vendors were generally in the ¥10–50/million tokens range.

What did ¥0.8/million tokens mean? An ordinary developer calling 1 million tokens daily would pay less than ¥25 per month. LLM APIs went from being an "enterprise expense" to "pocket change for individual developers."

This pricing was not charity—ByteDance's logic was **exchanging scale for cost reduction.** ByteDance owned its own AI infrastructure (Volcengine), and inference costs could be amortized through large-scale deployment. More critically, ByteDance did not expect the API itself to be profitable—what it expected was that once developers flooded into the Doubao ecosystem, the application layer's value-added services (agent platforms, enterprise solutions, ad monetization) would be the real revenue source.

### 2.3 Triggering the price war

Doubao's pricing directly ignited the price war in the Chinese LLM market.[^6]

Between May and August 2024, Baidu, Alibaba, Tencent, and iFlytek successively slashed their LLM API prices. Alibaba's Tongyi Qianwen reduced Qwen-Long pricing to ¥0.5/million tokens; Baidu's ERNIE Speed announced time-limited free access; Zhipu AI's GLM-4-Flash also entered the "free" range.[^6]

The essence of the price war was a **scramble for developers.** The LLM business model was shifting from "selling models" to "selling platforms"—whoever had the highest API call volume would have the most thriving ecosystem and the greatest monetization potential at the application layer. ByteDance used price as a lever to try to switch the entire market's rules of the game from "technology competition" to "scale competition."

### 2.4 Consumer-side growth: the Doubao App

The price war was a B2B affair, but Doubao's consumer-side growth was equally staggering.

After the Doubao App launched, it leveraged ByteDance's traffic distribution capabilities (Douyin recommendations, Toutiao diversions) to rapidly scale its user base. By November 2024, the Doubao App's monthly active users (MAU) exceeded 60 million, making it one of China's largest AI-native applications.[^7] By early 2025, Doubao's MAU continued to grow, maintaining its lead atop China's AI application charts.

Doubao's consumer-side product strategy was quintessentially ByteDance—**not pursuing academic depth but pursuing addiction and retention.** Doubao featured extensive entertainment-oriented functions including role-playing, creative writing, and AI companions, targeting young users' leisure needs rather than professional users' productivity needs. This stood in sharp contrast to ChatGPT's "tool" positioning—ChatGPT helped you write code and analyze data; Doubao kept you company with chat and storytelling.

### 2.5 Key milestones

| Date | Event | Significance |
|------|-------|--------------|
| 2023-08 | Doubao App launches (internal beta) | ByteDance enters the AI assistant arena[^8] |
| 2024-05-15 | Doubao LLM officially released | ByteDance's proprietary LLM goes public[^4] |
| 2024-08 | API price drops to ¥0.8/million tokens | Ignites China's LLM price war[^5] |
| 2024-11 | Doubao MAU exceeds 60 million | One of China's largest AI-native applications[^7] |
| 2024-12 | Doubao vision understanding model released | Entry into the multimodal arena[^9] |
| 2025 Q1 | Doubao MAU continues to grow | Leading the consumer AI assistant track[^7] |

---

## III. Impact and Aftermath

### 3.1 Chain reaction of the price war

The price war ignited by Doubao profoundly altered the competitive logic of the Chinese LLM market.

Before the price war, competition in the Chinese LLM market centered primarily on **technical capability**—whose model ranked higher on benchmarks like C-Eval and MMLU. After the price war, the focus of competition shifted to **cost-effectiveness**—at equivalent capability, who could offer lower prices and more stable service to developers.[^6]

The beneficiaries of this shift were developers and small-to-medium enterprises. Before 2024, the cost of LLM API calls deterred many startups; after 2024, "calling an LLM" became a basic expense comparable to calling a cloud server. China's LLM application ecosystem accelerated accordingly—intelligent customer service, AI writing assistants, code completion tools, educational products—a wave of applications built on LLM APIs emerged in the second half of 2024.

But the other side of the price war was **the disappearance of profits.** When API prices dropped to ¥0.8/million tokens, most vendors were not profitable at this price point and were even losing money. The price war accelerated industry consolidation—small model companies without proprietary infrastructure and without application-layer monetization capabilities had virtually no room to survive.

### 3.2 ByteDance's AI strategy: application over model

Doubao represented ByteDance's core strategy in the AI domain—**not pursuing absolute model leadership but pursuing absolute scale at the application layer.**

This strategy was consistent with ByteDance's playbook in the short-video domain. Douyin was not the first short-video product (Kuaishou preceded it), but Douyin perfected content distribution algorithms and user experience, ultimately overtaking its predecessor.[^3] Doubao was also not the first Chinese LLM (ERNIE Bot preceded it by a year), but ByteDance's capabilities in traffic acquisition and product refinement enabled Doubao to rapidly catch up with pioneers in consumer-side user scale.

ByteDance's AI strategy could be summarized in one sentence: **the model is infrastructure; the application is the business.** ByteDance did not need Doubao to be the strongest model—it needed Doubao to be the most widely used AI assistant, and then monetize around that user base.

### 3.3 Integration with the Douyin/TikTok ecosystem

Doubao's greatest structural advantage was the content ecosystem behind it.

Douyin with 600 million DAU, Toutiao with 300 million DAU, Feishu with tens of millions of enterprise users—ByteDance's AI products did not need to acquire customers from scratch; they only needed to convert these existing users into AI users.[^3] Embedding AI search into Douyin, AI assistants into Feishu, AI video editing into Jianying—each embedding point was a low-cost customer acquisition channel.

This "ecosystem grafting" strategy was difficult for Baidu and Alibaba to replicate. Baidu's search ecosystem was shrinking, and Alibaba's e-commerce ecosystem was less naturally suited for AI assistant integration than content platforms. ByteDance's path of combining "content consumption" with "AI conversation" was the smoothest among all Chinese LLM companies.

### 3.4 Limitations and controversies

Doubao's strategy was not without risks.

First, **the price war was unsustainable.** The ¥0.8/million tokens price was below most vendors' inference costs, meaning ByteDance was subsidizing the market. When the subsidies stopped, would prices rise? Would developers defect? These questions had no answers yet.

Second, **consumer-side application moats were shallow.** Doubao App's role-playing and creative writing functions could also be replicated by competitors like Kimi, ERNIE Bot, and Tongyi Qianwen. The cost for users to migrate from one AI assistant to another was extremely low—switching apps was even easier than switching search engines. Although Doubao's user scale was large, whether its retention and stickiness were sufficient still needed time to verify.

Third, **the ceiling on model capability.** ByteDance's strategy was "good enough," but in certain high-end scenarios (complex reasoning, long-document analysis, domain-specific Q&A), Doubao still had a gap with technology-oriented models like DeepSeek and Tongyi Qianwen. When application-layer competition escalated from "who's cheaper" to "who's stronger," could ByteDance keep up?

---

## Commentary

Doubao was the biggest bet ByteDance placed in the AI era—a bet not on technical leadership but on scale as king.

The logic of this bet was clear: LLM capabilities were converging toward homogeneity. When the gap between models shrank from "generational" to "percentage points," the determining factor in competition shifted from "whose model is better" to "whose user base is larger." ByteDance used ¥0.8/million tokens pricing and 600 million DAU traffic entries to attempt to replay Douyin's script in the Chinese LLM market—not the first to do it, but the biggest.

The price war was both this strategy's blade and its weakness. Its blade lay in collapsing and rebuilding the pricing logic of the entire industry, forcing all players to shift from "selling models" to "selling applications." Its weakness lay in the fact that price wars consume profits, and profits are the fuel for sustained innovation. When ByteDance itself was forced to operate at a loss at ¥0.8, it was essentially trading capital market patience for a time window of market share.

Doubao's ultimate fate hinged on a question that had no answer yet: **Is an AI assistant infrastructure like a search engine (winner-takes-all), or an application-layer product like social media (multiple coexist)?** If the former, ByteDance's scale strategy might ultimately prevail; if the latter, Doubao's first-mover advantage might not prove more lasting than ERNIE Bot's. Until the answer was revealed, Doubao was the most aggressive variable in the Chinese LLM market—not necessarily the final winner, but actively shaping the competitive rules of the market.

---

*This entry was compiled by the Endfield Industrial History Team: Silence (Lead Biographer).*

---

[^1]: Composite reports: Baidu ERNIE Bot (2023-03-16), Alibaba Tongyi Qianwen (2023-04-07), iFlytek Spark Cognitive LLM (2023-05-06), Zhipu ChatGLM (2023-03-14).
[^2]: OpenAI Pricing, "GPT-4 API", 2023-2024. https://openai.com/pricing (GPT-4 input price approximately $30/1M tokens, equivalent to over ¥200/million tokens in Chinese yuan)
[^3]: ByteDance official data and third-party reports, 2024. (Douyin DAU approximately 600 million, Toutiao DAU approximately 120 million; data sourced from QuestMobile and other third-party mobile internet data platforms)
[^4]: Volcengine Force Conference, "Doubao LLM Release", 2024-05-15. (ByteDance officially released the Doubao LLM series at the Volcengine Force Conference)
[^5]: Volcengine, "Doubao LLM API Pricing Adjustment Announcement", 2024-08. (Primary model inference price dropped to ¥0.8/million tokens (input), approximately ¥1.2/million tokens (output))
[^6]: Composite reports: May–August 2024 Chinese LLM API price war. Alibaba Tongyi Qianwen Qwen-Long dropped to ¥0.5/million tokens; Baidu ERNIE Speed announced time-limited free access; Zhipu GLM-4-Flash entered the free range. Multiple media outlets reported on this chain reaction triggered by Doubao's pricing.
[^7]: QuestMobile and other third-party data platforms, 2024-11 to 2025 Q1. (Doubao App MAU exceeded 60 million, continuously leading China's AI-native application charts)
[^8]: ByteDance internal and media reports, 2023-08. (The Doubao App began internal beta testing in August 2023 as ByteDance's first standalone AI assistant application)
[^9]: Volcengine, "Doubao Vision Understanding Model Release", 2024-12. (Doubao entered the multimodal arena, supporting image understanding and visual reasoning)
