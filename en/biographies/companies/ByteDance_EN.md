# The Annals of ByteDance

> ByteDance is one of the most distinctive players in the LLM era. It does not build the strongest models, yet possesses the most widely used AI products; it does not pursue breakthroughs at the technological frontier, yet uses price wars to redefine the competitive rules of China's LLM market. From Douyin's recommendation algorithms to Doubao's large language models, from Jimeng's video generation to TikTok's geopolitical gambit — ByteDance's decade in AI is a real experiment in how product-oriented thinking conquers a technology-driven domain.

---

## I. Overview

ByteDance was founded in 2012, initially as an information distribution company. A decade later, it has become the world's largest short-video platform operator — Douyin (domestic) and TikTok (international) together command over 2 billion daily active users.[^1] But ByteDance's story extends beyond short video. In the LLM era, it entered the AI arena in a distinctive manner: **not pursuing absolute model leadership, but pursuing absolute scale at the application layer**.

This strategy was highly consistent with ByteDance's organizational DNA. Douyin was not the first short-video product (Kuaishou preceded it), but Douyin perfected content distribution algorithms and user experience, ultimately overtaking its rival.[^2] Doubao was not the first Chinese LLM (ERNIE Bot preceded it by a year), but ByteDance's capabilities in traffic acquisition and product polish allowed Doubao to rapidly catch up with pioneers in consumer user scale.

ByteDance's AI deployment can be summarized at three levels:

1. **Model layer**: The Doubao large language model series, covering dialogue, role-playing, content creation, code generation, and other scenarios
2. **Application layer**: Doubao App (AI assistant), Jimeng (AI video generation), CapCut (AI video editing)
3. **Infrastructure layer**: Volcano Engine (cloud services), in-house AI chips (details undisclosed)

This "model → application → infrastructure" vertical integration makes ByteDance unique among Chinese LLM companies.

---

## II. Founding and Early Years

### 2.1 The recommendation algorithm DNA

ByteDance's AI story begins with recommendation algorithms. In 2012, when Zhang Yiming founded ByteDance, its core product was Toutiao — a personalized news recommendation application powered by machine learning.[^3] At the time, "recommendation algorithms" were not yet mainstream technology; most news apps relied on human editors or simple chronological sorting.

Toutiao's technical architecture had several key features:

- **User profiling**: Building dynamic interest models based on user behavior (clicks, dwell time, shares, comments)
- **Content understanding**: Using NLP techniques to extract article keywords, topics, and sentiment
- **Real-time ranking**: Adjusting recommendation strategies based on real-time user behavior rather than static "editor picks"

This recommendation system matured rapidly between 2014 and 2016, becoming ByteDance's core competitive advantage. When Douyin launched in 2016, it inherited Toutiao's recommendation algorithm — every video a user swiped through was the result of the algorithm computing in real-time based on their interests, behavior, and social connections.[^4]

### 2.2 Early AI accumulation

ByteDance's AI team started early, but its direction differed from Baidu and Alibaba.

Baidu began deploying deep learning in 2013, establishing the Institute of Deep Learning (IDL), which later became the core of Baidu's AI. Alibaba began investing in AI in 2014, but focused primarily on e-commerce scenarios (product recommendations, image search, intelligent customer service). ByteDance's AI investment concentrated on **content understanding and distribution** — its core business.

Between 2016 and 2019, ByteDance's AI team primarily worked on three things:

1. **Video understanding**: Identifying objects, scenes, actions, and emotions in videos to provide features for the recommendation system
2. **Content moderation**: Using AI to automatically identify violating content (violence, pornography, misinformation), reducing manual moderation costs
3. **Ad placement**: Using machine learning to optimize ad matching and bidding, increasing ad revenue

These technical accumulations became ByteDance's unique advantage in the LLM era — it possessed China's largest user behavior data and content understanding capabilities.[^5]

### 2.3 International expansion and the rise of TikTok

In 2017, ByteDance acquired Musical.ly (a lip-sync short video app) and merged it with TikTok in 2018.[^6] This was a pivotal step in ByteDance's internationalization.

TikTok's growth was staggering. In early 2018, TikTok had fewer than 100 million international users; by mid-2020, that number had surpassed 2 billion.[^7] TikTok's success brought not only user scale but also massive volumes of overseas user data — data that would be critical for training multilingual LLMs and understanding global cultural differences.

But TikTok's rise also brought geopolitical risk. In 2020, the Trump administration attempted to ban TikTok on "national security" grounds, demanding that ByteDance sell its U.S. operations.[^8] Although the ban was never implemented, this episode initiated a multi-year standoff between ByteDance and the U.S. government (see §III.5).

---

## III. Key Events

### 3.1 Doubao LLM launch and the price war (2024)

On May 15, 2024, ByteDance officially unveiled the Doubao large language model at the Volcano Engine Force Conference.[^9] This was ByteDance's first public disclosure of its in-house LLM — until then, ByteDance had maintained a low profile in the LLM space.

The Doubao series included multiple specifications — from lightweight on-device models to flagship models with hundreds of billions of parameters. But Doubao's technical highlights were not known for "topping leaderboards." ByteDance's strategy was to **build models good enough, not the strongest models**. Doubao's performance on mainstream benchmarks placed it in the first tier of Chinese LLMs, but not always at the top.[^10]

More critical was the pricing strategy. In August 2024, Volcano Engine dramatically slashed Doubao LLM API prices — **the flagship model's inference price dropped to 0.8 RMB per million tokens (input), approximately 1.2 RMB per million tokens (output)**.[^11] This price was an order of magnitude below the industry average. At the same time, GPT-4 was priced at approximately 200 RMB per million tokens, and even the cheapest Chinese providers were generally in the 10–50 RMB per million token range.

What does 0.8 RMB per million tokens mean? An average developer calling 1 million tokens daily would spend less than 25 RMB per month. LLM APIs dropped from "enterprise-level expenditure" to "pocket change for individual developers."

This pricing was not charity — ByteDance's logic was **trading scale for cost**. ByteDance owned its own AI infrastructure (Volcano Engine), and inference costs could be amortized through large-scale deployment. More importantly, ByteDance did not expect the API itself to be profitable — it anticipated that once developers flooded into the Doubao ecosystem, value-added services at the application layer (agent platforms, enterprise solutions, ad monetization) would be the true revenue sources.[^12]

Doubao's pricing directly ignited a price war in the Chinese LLM market (see "Doubao — A Model Biography"). Between May and August 2024, Baidu, Alibaba, Tencent, and iFlytek each slashed their LLM API prices. Alibaba's Tongyi Qianwen Qwen-Long dropped to 0.5 RMB per million tokens; Baidu's ERNIE Speed model announced limited-time free access; Zhipu AI's GLM-4-Flash also entered the "free" tier.[^13]

The essence of the price war was **competing for developers**. The LLM business model was shifting from "selling models" to "selling platforms" — whoever had the highest API call volume would have the most prosperous ecosystem and the greatest monetization potential at the application layer. ByteDance used pricing as a lever to switch the entire market's rules from "technology competition" to "scale competition." (See "Chronicles: May 2024")

### 3.2 Doubao App's consumer breakout (2024–2025)

The price war was a to-B matter, but Doubao's consumer growth was equally remarkable.

After the Doubao App launched, leveraging ByteDance's traffic distribution capabilities (Douyin recommendations, Toutiao referrals), its user scale rapidly climbed. By November 2024, the Doubao App's monthly active users (MAU) exceeded 60 million, making it one of China's largest AI-native applications.[^14] By early 2025, Doubao's MAU continued growing, consistently topping China's AI application charts.

Doubao's consumer product strategy was very "ByteDance" — **not pursuing academic depth, but pursuing stickiness and retention**. Doubao came loaded with role-playing, creative writing, AI companionship, and other entertainment features, targeting young users' leisure needs rather than professional users' productivity needs.[^15] This contrasted sharply with ChatGPT's "tool" positioning — ChatGPT helps you write code and analyze data; Doubao chats with you and tells stories.

Doubao's greatest structural advantage was the content ecosystem behind it. Douyin's 600 million daily actives, Toutiao's 300 million daily actives, Feishu's tens of millions of enterprise users — ByteDance's AI products didn't need to acquire users from scratch; they only needed to convert these existing users into AI users.[^16] Embedding AI search into Douyin, AI assistants into Feishu, and AI video editing into CapCut — each embedding point was a low-cost customer acquisition channel.

This "ecosystem grafting" strategy was difficult for Baidu and Alibaba to replicate. Baidu's search ecosystem was shrinking, and Alibaba's e-commerce ecosystem didn't integrate as naturally with AI assistants as content platforms. ByteDance's path of combining "content consumption" with "AI dialogue" was the smoothest among all Chinese LLM companies.

### 3.3 Jimeng: AI video generation deployment (2024)

In February 2024, OpenAI released the Sora preview, demonstrating AI's ability to generate long videos — the "GPT-3 moment" for text-to-video.[^17] After Sora's release, global video generation model development pivoted entirely toward the DiT (Diffusion Transformer) approach.

ByteDance moved quickly. In June 2024, ByteDance launched **Jimeng** — an AI video generation tool.[^18] Jimeng's technical architecture adopted a DiT-like approach, supporting text-to-video and image-to-video generation.

Jimeng's strategic significance lay in extending ByteDance's AI capabilities from "text dialogue" to "video creation." Douyin's core is short video — if users could generate videos with AI, Douyin's content ecosystem would undergo a fundamental transformation. From "human creation, algorithmic distribution" to "AI creation, algorithmic distribution" — this was ByteDance's ultimate vision for the content domain.

In 2025, Jimeng's latest version, Seedance 2.0, surpassed Sora 2 on multiple benchmarks, becoming one of the world's leading video generation models.[^19] This marked ByteDance's transformation from "follower" to "leader" in the video generation space.

### 3.4 The advantage of massive user data

ByteDance's most unique asset in the AI domain was its user data.

Douyin's 600 million daily actives, TikTok's 2 billion monthly actives — these users generated massive volumes of behavioral data every day: watch duration, likes, comments, shares, searches, creations. This data held unique value for training LLMs:

1. **Dialogue data**: User interactions with Douyin search and the Doubao App provided authentic conversation samples
2. **Content understanding**: User feedback on videos (likes/skips/comments) provided implicit annotations of content quality
3. **Multilingual data**: TikTok's global user base provided authentic corpora covering 150+ languages
4. **Multimodal data**: Cross-referenced data from video, images, and text provided natural material for multimodal model training

This data was ByteDance's "moat" — other LLM companies needed to spend heavily on purchasing or annotating data, while ByteDance's data was a byproduct of its business operations.[^20]

### 3.5 TikTok ban controversy and geopolitical gambit (2020–2026)

TikTok's rise plunged ByteDance into the vortex of China-U.S. geopolitics.

**August 2020**: Trump signed an executive order demanding ByteDance divest TikTok's U.S. operations within 90 days or face a ban.[^8] The stated reason was "TikTok may share American user data with the Chinese government" — despite ByteDance's repeated denials of these allegations.

**June 2021**: The Biden administration revoked Trump's executive order but simultaneously initiated a national security review of TikTok.[^21]

**April 2024**: The U.S. Congress passed the Protecting Americans from Foreign Adversary Controlled Applications Act (PAFACA), requiring ByteDance to divest TikTok's U.S. operations within 270 days or face a ban on U.S. operations.[^22] This was the first time the U.S. Congress legislated against a specific company.

**January 2025**: TikTok briefly went dark in the U.S. (approximately 12 hours), then was restored after Trump's inauguration.[^23] Trump indicated he would grant TikTok a 90-day extension to find an American buyer.

**Early 2026**: At the time of writing, TikTok's U.S. divestiture remains under negotiation. Oracle, Walmart, Microsoft, and other companies have been named as potential buyers, but the deal structure is complex, involving algorithm ownership, data storage, national security reviews, and other sensitive issues.[^24]

The TikTok ban controversy had profound implications for ByteDance's AI strategy:

1. **Data isolation**: To address U.S. government concerns, ByteDance launched "Project Texas," storing American user data on Oracle's cloud servers under third-party audit.[^25]
2. **Algorithm bifurcation**: TikTok's recommendation algorithm and Douyin's algorithm share the same technical origins, but for regulatory compliance, the two began gradually separating at the data and model levels.
3. **Overseas LLM choices**: In international markets, ByteDance faced an awkward situation — its in-house Doubao LLM was primarily optimized for Chinese, while international users needed more capable English models. Reportedly, ByteDance used OpenAI's API (via Azure) in some international products, while also training its own multilingual models.[^26]

### 3.6 The overseas LLM dilemma

ByteDance's LLM choices in international markets reflected the structural predicament Chinese tech companies face in globalization.

On one hand, ByteDance possessed the world's largest user base and data resources, and should theoretically develop its own global LLM. On the other hand, building a multilingual LLM required massive English/multilingual corpora and computing resources — which became difficult amid chip sanctions and geopolitical tensions.

Between 2024 and 2025, ByteDance's overseas AI strategy took on a "hybrid model":

- **In-house models**: The Doubao series continued iterating, gradually enhancing multilingual capabilities
- **External partnerships**: Using APIs from OpenAI, Anthropic, and other companies in some international products
- **Open-source models**: Using Llama, Qwen, and other open-source models for fine-tuning in certain scenarios

This "hybrid model" was pragmatic in the short term — it allowed ByteDance to quickly launch overseas AI products without waiting for its in-house models to globalize. But in the long run, over-reliance on external models would erode ByteDance's independence.[^27]

---

## IV. Rise and Fall Analysis

### Phase One: The recommendation algorithm accumulation period (2012–2019)

**What happened**: ByteDance started with Toutiao's recommendation algorithm, progressively building AI-driven content distribution capabilities. Douyin launched in 2016, TikTok expanded internationally in 2017–2018, and ByteDance became the world's largest short-video platform.

**Why it happened**: Zhang Yiming's technical faith in "information distribution" — his belief that algorithms could match users with content more efficiently than human editors. ByteDance's organizational culture of "data-driven, rapid iteration" aligned perfectly with the demands of AI technology.

**What it left behind**: Massive user behavior data, mature recommendation algorithms, and a globalized user base. These assets became ByteDance's core competitive advantage in the LLM era.

### Phase Two: The late entry into LLMs (2023)

**What happened**: In the first half of 2023, while Baidu, Alibaba, and Zhipu AI were all competing for the "China's first LLM" label, ByteDance made no public statement. ByteDance's LLM team started late, without the decade of NLP foundation that Baidu's ERNIE had.[^28]

**Why it happened**: ByteDance's AI deployment was earlier and deeper, but concentrated in recommendation algorithms, content understanding, and ad placement — LLMs were not its core business. ByteDance's strategy was "let others validate the direction, then follow quickly."

**What it left behind**: ByteDance missed the "first LLM" label but avoided early-stage trial-and-error on technical approaches. By the time Doubao launched in 2024, ByteDance clearly understood that LLM competition was not about "who has the best technology" but "who has the widest application."

### Phase Three: Product-driven explosion (2024–2025)

**What happened**: Doubao LLM released (2024-05); price war ignited (2024-08); Doubao App MAU exceeded 60 million (2024-11); Jimeng video generation model released (2024-06); TikTok ban controversy continued (2024–2025).

**Why it happened**: ByteDance's core capability is "turning technology into products and products into scale." Doubao's success lay not in its model's technical metrics but in the product capabilities, traffic channels, and pricing strategy behind it.

**Lingering questions**: Is the price war sustainable? How deep is Doubao's consumer moat? Can Jimeng establish leadership in video generation? Can TikTok's U.S. operations be preserved? The answers to these questions will determine ByteDance's ultimate position in the AI era.

---

## Appraisal

ByteDance's decade in AI can be summarized in one sentence: **Not building the strongest models, but building the AI that the most people use.**

Behind this strategic choice lies ByteDance's organizational DNA — it is fundamentally a product company. From Toutiao to Douyin to Doubao, its core capability is "turning complex technology into simple experiences." When Google invested a decade in TPUs and OpenAI pursued the utmost in model capabilities, ByteDance chose a path more aligned with its own DNA: letting technology serve products, and products serve scale.

The price war is both this strategy's blade and its vulnerability. The blade: it collapsed and rebuilt the entire industry's pricing logic, forcing all players to shift from "selling models" to "selling applications." The vulnerability: price wars consume profits, and profits are the fuel for sustained innovation. When ByteDance itself must operate at a loss at the 0.8 RMB price point, it is essentially trading capital market patience for a time window of market share.

The TikTok ban controversy reveals another dimension of ByteDance's AI strategy: **data is both an asset and a geopolitical risk**. ByteDance possesses the world's largest user behavior data, but this data has become a political pawn in the China-U.S. rivalry. When the U.S. government requires TikTok to store American data on Oracle servers, ByteDance must make a difficult choice between "globalization" and "data sovereignty."

ByteDance's ultimate fate hinges on a question that has yet to be answered: **Is the moat of AI applications scale or capability?** If scale is the determining factor, ByteDance's 600-million-daily-active traffic portal may make it the ultimate winner; if capability is the determining factor, Doubao's "good enough" strategy may be rendered obsolete by technological generational shifts. Until the answer is revealed, ByteDance is the most aggressive variable in China's LLM market — it may not be the ultimate winner, but it is shaping the competitive rules of this market.

---

*This biography was compiled by the Endfield Industrial Historian Team: Silence (lead writer).*

---

[^1]: ByteDance official data and third-party reports, 2024. (Douyin DAU approximately 600 million, TikTok MAU approximately 2 billion; data from QuestMobile, Sensor Tower, and other third-party platforms)
[^2]: Douyin vs. Kuaishou competitive analysis, multiple media reports, 2018–2020. (Kuaishou launched before Douyin, but Douyin overtook it through recommendation algorithms and operational strategy)
[^3]: Zhang Yiming's public speeches and ByteDance official materials, 2012–2014. (Toutiao's machine learning-based personalized recommendation system)
[^4]: ByteDance technical blog, 2016–2018. (Douyin inheriting Toutiao's recommendation algorithm technical architecture)
[^5]: ByteDance AI Lab public materials, 2016–2019. (AI technical accumulation in video understanding, content moderation, and ad placement)
[^6]: Bloomberg, "ByteDance to Buy Musical.ly for Up to $1 Billion," 2017-11-09. https://www.bloomberg.com/news/articles/2017-11-09/bytedance-said-to-buy-social-video-app-musical-ly-for-up-to-1b
[^7]: TikTok official data and third-party reports, 2020. (TikTok global MAU surpassed 2 billion)
[^8]: The Verge, "Trump signs executive order banning TikTok," 2020-08-06. https://www.theverge.com/2020/8/6/21357789/trump-tiktok-ban-executive-order
[^9]: Volcano Engine Force Conference, "Doubao LLM Released," 2024-05-15. (ByteDance officially released the Doubao LLM series at the Volcano Engine Force Conference)
[^10]: Comprehensive benchmarks: C-Eval, MMLU, CMMLU, 2024. (Doubao placed in the first tier on mainstream benchmarks but was not always first)
[^11]: Volcano Engine, "Doubao LLM API Pricing Adjustment Notice," 2024-08. (Flagship model inference price dropped to 0.8 RMB per million tokens (input), approximately 1.2 RMB per million tokens (output))
[^12]: ByteDance Volcano Engine official materials, 2024. (Trading scale for cost, monetizing through application-layer value-added services)
[^13]: Comprehensive reporting: May–August 2024 Chinese LLM API price war. Alibaba Tongyi Qianwen Qwen-Long dropped to 0.5 RMB per million tokens; Baidu ERNIE Speed offered limited-time free access; Zhipu GLM-4-Flash entered the free tier.
[^14]: QuestMobile and other third-party data platforms, 2024-11 to 2025-Q1. (Doubao App MAU exceeded 60 million, consistently topping China's AI-native application charts)
[^15]: Doubao App product analysis, multiple media reports, 2024–2025. (Doubao featured built-in role-playing, creative writing, AI companionship, and other entertainment features)
[^16]: ByteDance official data and third-party reports, 2024. (Douyin DAU approximately 600 million, Toutiao DAU approximately 120 million; data from QuestMobile and other third-party mobile internet data platforms)
[^17]: OpenAI, "Video generation models as world simulators," 2024-02-15. https://openai.com/research/video-generation-models-as-world-simulators
[^18]: Comprehensive reporting: ByteDance Jimeng launch, 2024-06. (ByteDance launched an AI video generation tool using a DiT-like architecture)
[^19]: Artificial Analysis Leaderboard, 2025. (Seedance 2.0 surpassed Sora 2 on multiple benchmarks)
[^20]: ByteDance data advantage analysis, multiple media reports, 2024–2025. (Douyin/TikTok user behavior data provides unique advantages for LLM training)
[^21]: The Verge, "Biden revokes Trump's TikTok ban," 2021-06-09. https://www.theverge.com/2021/6/9/22526586/biden-tiktok-ban-revoked-executive-order
[^22]: Reuters, "US House passes bill that could ban TikTok," 2024-04-13. https://www.reuters.com/technology/us-house-passes-bill-that-could-ban-tiktok-2024-04-13/
[^23]: The Verge, "TikTok is down in the US," 2025-01-18. https://www.theverge.com/2025/1/18/24346516/tiktok-down-united-states-shut-down
[^24]: Bloomberg, "TikTok Sale Talks Continue," 2025–2026. (Oracle, Walmart, Microsoft, and other companies named as potential buyers)
[^25]: TikTok, "Project Texas," 2022–2023. (TikTok's plan to store American user data on Oracle servers)
[^26]: The Information, "ByteDance Uses OpenAI API for Some Overseas Products," 2024. (ByteDance used OpenAI API in some international products)
[^27]: ByteDance overseas AI strategy analysis, multiple media reports, 2024–2025. (Hybrid model of in-house models, external partnerships, and open-source models)
[^28]: Comprehensive reporting: 2023 Chinese LLM competitive landscape, 2023. (Baidu ERNIE Bot, Alibaba Tongyi Qianwen, and Zhipu ChatGLM established early positions; ByteDance was relatively delayed)
