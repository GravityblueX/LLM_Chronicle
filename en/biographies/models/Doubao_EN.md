# The Biography of Doubao

> Doubao was not the first Chinese large model, nor the most technically advanced one. It did something others were unwilling to do — drive the price to the floor. In May 2024, ByteDance released the Doubao large model; three months later, it slashed the inference price to ¥0.8/million tokens, dragging the entire Chinese large model market into a price war. Doubao's logic was quintessentially ByteDance: don't make money from the model itself; make money from scale effects at the application layer. Whether this logic holds remains disputed.

---

## I. Technical Background

2023 was the "year zero" for Chinese large models. Baidu's ERNIE Bot (March), Alibaba's Tongyi Qianwen (April), iFlytek's Spark (May), and Zhipu's ChatGLM (June) all launched in succession.[^1] But the Chinese large model market of 2023 had a notable characteristic: **everyone was building models, but few had figured out how to make money from them.**

Most companies' strategy was "release the model first, prove technical capability, then slowly figure out the business model." API pricing generally referenced OpenAI — GPT-4's API price was approximately $30/million input tokens, equivalent to over ¥200.[^2] Chinese companies priced slightly lower, but the gap was not large. Large model APIs remained something that most developers "could afford but were reluctant to use casually."

ByteDance was **late** to this stage. In the first half of 2023, when Baidu, Alibaba, and Zhipu were all competing for the "China's first large model" label, ByteDance made no public declarations. ByteDance's AI deployment was earlier and deeper, but concentrated in recommendation algorithms, content understanding, and ad placement — its large model team started later, lacking the decade of NLP foundation that Baidu's ERNIE had.

ByteDance's advantage lay not in its starting point but in something else: **it owned China's largest mobile internet content ecosystem.** Douyin (TikTok China) had 600 million daily active users, along with Toutiao, Feishu (Lark), and Jianying (CapCut) — ByteDance did not need to prove that large models were "useful"; it only needed to embed them into its existing 600-million-user products.[^3]

---

## II. Core Innovation

### 2.1 Doubao large model: released May 2024

On May 15, 2024, ByteDance officially released the Doubao large model at the Volcengine Force Conference.[^4] The Doubao series included multiple tiers — from lightweight on-device models to hundred-billion-parameter flagship models — covering scenarios including conversation, role-playing, content creation, and code generation.

Doubao's technical highlights were not known for "benchmark chasing." ByteDance's strategy was **to build a good-enough model, not the strongest model**. Doubao's performance on mainstream benchmarks was in the first tier of Chinese large models but not always first. ByteDance's bet was that as model capability gaps narrowed, price and application ecosystem would be the decisive factors.

### 2.2 The price war: ¥0.8/million tokens

In August 2024, Volcengine dramatically slashed Doubao's API pricing — **the main model's inference price dropped to ¥0.8/million tokens (input), approximately ¥1.2/million tokens (output)**.[^5] This price was an order of magnitude below the industry average. At the same time, GPT-4 was priced at approximately ¥200/million tokens, and even the cheapest Chinese vendors were generally in the ¥10–50/million token range.

What did ¥0.8/million tokens mean? An ordinary developer calling 1 million tokens per day would pay less than ¥25 per month. The large model API went from an "enterprise-level expense" to "pocket change for individual developers."

This pricing was not charity — ByteDance's logic was **scale for cost**. ByteDance owned its own AI infrastructure (Volcengine), and inference costs could be amortized through large-scale deployment. More critically, ByteDance did not expect the API itself to make money — it expected that once developers flooded into the Doubao ecosystem, the real revenue would come from value-added services at the application layer (agent platforms, enterprise solutions, advertising monetization).

### 2.3 Triggering the price war

Doubao's pricing directly ignited the Chinese large model market's price war.[^6]

Between May and August 2024, Baidu, Alibaba, Tencent, and iFlytek all slashed their large model API prices in succession. Alibaba's Tongyi Qianwen Qwen-Long dropped to ¥0.5/million tokens; Baidu's ERNIE Speed was announced as temporarily free; Zhipu's GLM-4-Flash also entered the "free" range.[^6]

The essence of the price war was **fighting for developers**. The large model business model was shifting from "selling models" to "selling platforms" — whoever had the highest API call volume would have the most prosperous ecosystem and the greatest monetization potential at the application layer. ByteDance used price as a lever to attempt switching the entire market's game rules from "technology competition" to "scale competition."

### 2.4 Consumer-side growth: the Doubao App

The price war was a B2B matter, but Doubao's consumer-side growth was equally astonishing.

After the Doubao App launched, leveraging ByteDance's traffic distribution capabilities (Douyin recommendations, Toutiao referrals), its user base surged rapidly. By November 2024, the Doubao App's monthly active users (MAU) exceeded 60 million, making it one of China's largest AI-native applications.[^7] By early 2025, Doubao's MAU continued to grow, consistently leading China's AI application charts.

Doubao's consumer-side product strategy was very "ByteDance" — **not pursuing academic depth, pursuing addictiveness and retention.** Doubao built in numerous role-playing, creative writing, AI companion, and other entertainment features, targeting young users' leisure needs rather than professional users' productivity needs. This contrasted sharply with ChatGPT's "tool person" positioning — ChatGPT helps you write code and analyze data; Doubao chats with you and tells stories.

### 2.5 Key data

| Date | Event | Significance |
|------|-------|-------------|
| 2023-08 | Doubao App launches (internal beta) | ByteDance enters the AI assistant space[^8] |
| 2024-05-15 | Doubao large model officially released | ByteDance's proprietary large model goes public[^4] |
| 2024-08 | API price drops to ¥0.8/million tokens | Ignites Chinese large model price war[^5] |
| 2024-11 | Doubao MAU exceeds 60 million | One of China's largest AI-native applications[^7] |
| 2024-12 | Doubao vision understanding model released | Enters the multimodal track[^9] |
| 2025-Q1 | Doubao MAU continues growing | Leads consumer-side AI assistant track[^7] |

---

## III. Impact and Successors

### 3.1 The price war's chain reaction

The price war ignited by Doubao profoundly changed the competitive logic of China's large model market.

Before the price war, competition in China's large model market centered on **technical capability** — whose model ranked higher on benchmarks like C-Eval and MMLU. After the price war, competition shifted to **cost-effectiveness** — for the same capability, who could provide it to developers at lower cost and with more stable service.[^6]

The beneficiaries of this shift were developers and small-to-medium enterprises. Before 2024, the cost of large model API calls deterred many startups; after 2024, "calling a large model" became a basic expense comparable to calling a cloud server. China's large model application ecosystem therefore accelerated — intelligent customer service, AI writing assistants, code completion tools, and educational products, all based on large model APIs, emerged en masse in the second half of 2024.

But the other side of the price war was **the disappearance of profits.** When API prices dropped to ¥0.8/million tokens, most vendors were not profitable at that price — they were losing money. The price war accelerated industry consolidation — small model companies without proprietary infrastructure or application-layer monetization capabilities had virtually no room to survive.

### 3.2 ByteDance's AI strategy: applications over models

Doubao represented ByteDance's core strategy in the AI domain — **not pursuing absolute model leadership, but pursuing absolute scale at the application layer.**

This strategy was consistent with ByteDance's playbook in the short-video domain. Douyin was not the first short-video product (Kuaishou preceded it), but Douyin perfected content distribution algorithms and user experience, ultimately overtaking its competitor.[^3] Doubao was also not the first Chinese large model (ERNIE Bot preceded it by a year), but ByteDance's capabilities in traffic acquisition and product polish allowed Doubao to quickly catch up with first movers in consumer-side user scale.

ByteDance's AI strategy could be summarized in one sentence: **models are infrastructure; applications are the business.** ByteDance did not need Doubao to be the strongest model — it needed Doubao to be the most widely used AI assistant, then monetize around that user base.

### 3.3 Integration with the Douyin/TikTok ecosystem

Doubao's greatest structural advantage was the content ecosystem behind it.

Douyin's 600 million DAU, Toutiao's 300 million DAU, Feishu's tens of millions of enterprise users — ByteDance's AI products did not need to acquire users from scratch; they only needed to convert these existing users into AI users.[^3] Embedding AI search into Douyin, AI assistants into Feishu, and AI video editing into Jianying — each embedding point was a low-cost user acquisition channel.

This "ecosystem grafting" strategy was difficult for Baidu and Alibaba to replicate. Baidu's search ecosystem was shrinking, and Alibaba's e-commerce ecosystem did not integrate with AI assistants as naturally as content platforms. ByteDance's path of combining "content consumption" with "AI conversation" was the smoothest among all Chinese large model companies.

### 3.4 Limitations and controversies

Doubao's strategy was not without risks.

First, **the price war was unsustainable.** The ¥0.8/million token price was below most vendors' inference costs, meaning ByteDance was subsidizing the market. When subsidies stopped, would prices rise? Would developers leave? These questions had no answers yet.

Second, **consumer-side application moats were not deep.** The role-playing and creative writing features of the Doubao App were also available from competitors like Kimi, ERNIE Bot, and Tongyi Qianwen. The cost for users to migrate from one AI assistant to another was extremely low — switching apps was easier than switching search engines. Although Doubao's user base was large, whether its retention and stickiness were sufficient still needed time to verify.

Third, **the ceiling of model capability.** ByteDance's strategy was "good enough," but in certain high-end scenarios (complex reasoning, long-document analysis, specialized domain Q&A), Doubao still had gaps compared to technology-oriented models like DeepSeek and Tongyi Qianwen. When application-layer competition escalated from "who is cheaper" to "who is stronger," could ByteDance keep up?

---

## Commentary

Doubao is ByteDance's biggest bet in the AI era — betting not on technical leadership but on scale as king.

The logic of this bet is clear: large model capabilities are converging, and when the gap between models narrows from "generational" to "percentage," the decisive factor shifts from "whose model is better" to "whose user base is larger." With ¥0.8/million token pricing and 600 million DAU as a traffic entry point, ByteDance attempted to replay the Douyin playbook in the Chinese large model market — not the first to do it, but the biggest.

The price war was this strategy's blade and its weakness. The blade: it caused the entire industry's pricing logic to collapse and rebuild, forcing all players to shift from "selling models" to "selling applications." The weakness: the price war consumes profit, and profit is the fuel for sustained innovation. When ByteDance itself had to operate at a loss at ¥0.8, it was effectively trading capital market patience for a time window of market share.

Doubao's ultimate fate depends on a question with no answer yet: **Are AI assistants infrastructure like search engines (winner-take-all), or application-layer products like social media (pluralistic coexistence)?** If the former, ByteDance's scale strategy may ultimately prevail; if the latter, Doubao's first-mover advantage may not be more enduring than ERNIE Bot's. Until the answer is revealed, Doubao is the most aggressive variable in the Chinese large model market — not necessarily the ultimate winner, but actively shaping this market's competitive rules.

---

*This entry was compiled by the Endfield Industrial History Team: Silence (Chronicle Lead Writer).*

---

[^1]: Composite reports: Baidu ERNIE Bot (2023-03-16), Alibaba Tongyi Qianwen (2023-04-07), iFlytek Spark (2023-05-06), Zhipu ChatGLM (2023-03-14).
[^2]: OpenAI Pricing, "GPT-4 API", 2023–2024. https://openai.com/pricing (GPT-4 input price ~$30/1M tokens, equivalent to ~¥200+/million tokens)
[^3]: ByteDance official data and third-party reports, 2024. (Douyin DAU ~600 million, Toutiao DAU ~120 million; data from QuestMobile and other third-party mobile internet data platforms)
[^4]: Volcengine Force Conference, "Doubao large model release", 2024-05-15. (ByteDance officially released the Doubao large model series at the Volcengine Force Conference)
[^5]: Volcengine, "Doubao large model API pricing adjustment announcement", 2024-08. (Main model inference price reduced to ¥0.8/million tokens (input), ~¥1.2/million tokens (output))
[^6]: Composite reports: May–August 2024 Chinese large model API price war. Alibaba Tongyi Qianwen Qwen-Long dropped to ¥0.5/million tokens; Baidu ERNIE Speed temporarily free; Zhipu GLM-4-Flash entered the free tier. Multiple media outlets reported the chain reaction triggered by Doubao's pricing.
[^7]: QuestMobile and other third-party data platforms, 2024-11 to 2025-Q1. (Doubao App MAU exceeded 60 million, consistently leading China's AI-native application charts)
[^8]: ByteDance internal and media reports, 2023-08. (Doubao App began internal beta testing in August 2023 as ByteDance's first standalone AI assistant application)
[^9]: Volcengine, "Doubao vision understanding model release", 2024-12. (Doubao entered the multimodal track, supporting image understanding and visual reasoning)
