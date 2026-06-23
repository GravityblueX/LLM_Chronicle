# Falcon Family

> The Falcon series is an open-source large language model family developed by the Technology Innovation Institute (TII) of the United Arab Emirates since 2023. From the Falcon-7B/40B topping the HuggingFace Open LLM Leaderboard to Falcon-180B becoming the world's largest open-source model at the time — Falcon's rise and fall tells an atypical story: a Gulf state without chips, without an internet ecosystem, and without even a local AI talent pool, using sovereign wealth to purchase compute and a single paper on data quality, briefly stood at the summit of the open-source world. It was not from Silicon Valley, not from China, not from Europe — it belonged to the desert.

---

## I. Overview

The Falcon series was developed by the Technology Innovation Institute (TII), based in Abu Dhabi, United Arab Emirates. TII operates under the Advanced Technology Research Council (ATRC) and is part of the UAE's national research institution system — not a startup, not an internet giant, not a side project of a quantitative fund, but a sovereign nation's artificial intelligence laboratory.

The Falcon series went through three stages: **spectacular debut** (Falcon-7B/40B, 2023-05), **scale sprint** (Falcon-180B, 2023-09), and **dormancy and transformation** (Falcon 2, 2024). Compared to contemporaneous models such as Llama (Meta's open-source strategic weapon; see the *Llama Family*), Qwen (Alibaba Cloud's dual-track strategy; see the *Qwen Family*), and DeepSeek (High-Flyer Quant's pure-technology route; see the *DeepSeek Family*), Falcon represented a fourth path — **sovereign wealth-driven national-level AI investment**. This path had the highest starting point (national will), but its sustainability faced the most skepticism.

The core narrative value of the Falcon series does not lie in the models themselves — in fact, Falcon's technical iteration had essentially stalled by 2024. Its value lies in representing a unique geopolitical force: Gulf states using petrodollars to purchase AI compute, attract global AI talent, and attempt to establish a "third pole" between the US and China. The successes and failures of this attempt provide an irreplaceable case study for understanding the global AI competition landscape. (For Gulf states' chip procurement and AI sovereignty strategies, see *Treatise: Geopolitics and Embargoes* §VI.)

---

## II. Generational Evolution

| Generation | Release Date | Parameter Scale | Core Innovation | License | Ecological Significance |
|------------|--------------|-----------------|-----------------|---------|------------------------|
| Falcon-7B / 40B | 2023-05 | 7B / 40B | RefinedWeb dataset + MQA, topped Open LLM Leaderboard | TII Falcon License | First non-US, non-Chinese model to top the HuggingFace leaderboard |
| Falcon-180B | 2023-09 | 180B | Scale breakthrough, 3.5T tokens training | Apache 2.0 | World's largest open-source model at release |
| Falcon 2 | 2024-05 | 1B / 7B / 11B / 40B | Multi-scale coverage + multimodal (Vision) | Apache 2.0 | Attempted to build a product line, but failed to recapture the initial impact |

### 2.1 Falcon-7B / 40B: A Rocket from the Desert

On **2023-05-25**, TII released **Falcon-7B** and **Falcon-40B**, simultaneously open-sourcing model weights and training code.[^1] At the time of release in May 2023, the open-source LLM landscape had just been disrupted by the LLaMA leak (2023-02; see *Open-Source Movement* §II) and Stanford Alpaca (2023-03). Meta had not yet released the officially open-licensed Llama 2 (2023-07), and Mistral 7B (2023-09) was still in development. Falcon-40B's release exploited a narrow window of opportunity.

Shortly after its release, Falcon-40B surpassed LLaMA-65B and all known open-source models on the HuggingFace Open LLM Leaderboard, claiming the top position.[^2] This was the **first time a model developed by a non-US, non-Chinese team held the number-one spot on the open-source leaderboard** — a national laboratory in the Abu Dhabi desert had defeated Meta, Google, Stanford, and a host of Chinese tech giants.

Three key factors underpinned this achievement:

**First, data.** Falcon's most significant technical contribution was not architectural innovation but the **RefinedWeb** dataset. TII's research team published an important paper in 2023, "The RefinedWeb Dataset for Falcon LLM: Outperforming Curated Corpora with Web Data, and Web Data Only," whose central argument was: **carefully filtered and deduplicated raw web data can outperform manually curated high-quality corpora.**[^3] In the data-is-king era of 2023, this paper carried paradigmatic significance — it demonstrated that data quality does not depend on manual curation but on engineered cleaning pipelines. RefinedWeb comprised approximately 5 trillion tokens, processed through multi-stage pipelines including strict URL filtering, document deduplication (MinHash + suffix array), and quality scoring.

**Second, architectural efficiency.** Falcon-40B employed **Multi-Query Attention (MQA)** — in the standard Multi-Head Attention mechanism, all attention heads share the same set of Key and Value projections. This dramatically reduced KV cache memory consumption during inference, giving Falcon-40B a structural advantage in inference efficiency among models of comparable size. MQA was not pioneered by TII (Google's PaLM adopted it in 2022), but Falcon was one of the earliest open-source models to position MQA as a core selling point. (For MQA and attention optimization, see *Treatise: Inference Optimization*.)

**Third, licensing.** Falcon-7B/40B was initially released under the **TII Falcon License** — a custom license based on Apache 2.0 with additional clauses.[^4] These additional clauses primarily concerned usage restrictions and attribution requirements. The license sparked community discussion at the time: it was more open than Llama 1's research-only license, but more conservative than Mistral's Apache 2.0. Nevertheless, compared to the fully closed-source approach of most contemporary models, Falcon's openness was sufficient to attract developers.

Falcon-7B and Falcon-40B downloads on HuggingFace surged rapidly, becoming among the most popular open-source models of the first half of 2023. Numerous community fine-tuned versions emerged — from chat models to code models to Chinese language models — Falcon's weights were widely used by developers worldwide.

### 2.2 Falcon-180B: The Limits and Costs of Scale

In **2023-09**, TII released **Falcon-180B**, with a total of 180 billion parameters.[^5] This was the **largest open-source model publicly released globally** at the time — surpassing Meta's Llama 2 70B (2023-07) and BLOOM 176B (2022-07).

Falcon-180B introduced two key changes:

**License upgrade.** Falcon-180B switched to the **Apache 2.0** license — completely eliminating the commercial concerns raised by the initial custom license.[^5] This decision came after Llama 2's "additional license required for MAU exceeding 700 million" clause had sparked community controversy, and TII chose the most permissive path. In the *Open-Source Model License Comparison Table*, Falcon 180B is categorized under "classic open-source licenses." (For the evolution of Falcon's licensing, see *Table: Open-Source Model License Comparison Table*.)

**Training scale.** Falcon-180B was pre-trained on approximately 3.5 trillion tokens — making it one of the models with the largest publicly disclosed training data volume as of September 2023. Training was conducted on TII's in-house compute cluster, reportedly using 384 A100 80GB GPUs.[^6]

However, Falcon-180B's actual impact fell far short of what its parameter count implied. Three reasons explain this: first, the 180B scale meant it could not be deployed on a single GPU, resulting in high inference costs and limiting community adoption; second, Llama 2 70B (2023-07) had already captured the mainstream position in the open-source ecosystem, and Falcon-180B's performance advantage was insufficient to convince developers to migrate; third, contemporaneous Chinese models from DeepSeek and Qwen were rapidly rising, and the competitive landscape of the open-source ecosystem had shifted from "who is biggest" to "who is most usable."

### 2.3 Falcon 2: A Miracle That Could Not Be Repeated

In **2024-05**, TII released the **Falcon 2** series, comprising four scale variants (1B, 7B, 11B, and 40B) and introducing visual modality for the first time (Falcon 2 Vision).[^7] All variants adopted the Apache 2.0 license.

Falcon 2 attempted to replicate Qwen's "full-spectrum coverage" strategy — providing a corresponding model for every compute node, from mobile phones to servers. This time, however, TII faced a fundamentally different competitive landscape. By May 2024, Llama 3 (2024-04), Qwen 2 (imminent release in 2024-06), and multiple Mistral models had collectively raised the baseline for open-source LLMs by a significant margin. While Falcon 2's technical specifications were respectable, they no longer carried the shock impact of "emerging suddenly from the desert" that characterized May 2023.

More critically, after Falcon 2, TII's public model release activity essentially ceased. There was no Falcon 3, no large-scale subsequent iterations, and no sustained community engagement. By 2025, Falcon's activity on HuggingFace had fallen far behind that of Llama, Qwen, and DeepSeek.

---

## III. Technical Route Analysis

### 3.1 Architecture: Efficiency First

The core architecture of the Falcon series is the **Transformer decoder**, with several noteworthy engineering choices:

- **Multi-Query Attention (MQA)**: All attention heads share K/V projections, reducing the KV cache by a factor of N_head during inference. This choice gave Falcon a structural advantage in inference efficiency, particularly suited for long-sequence scenarios. MQA was later widely adopted beyond Falcon — Google's PaLM and Gemini series, as well as Mistral 7B, all employed MQA or its variant GQA (Grouped-Query Attention). (For the evolution of attention optimization, see *Treatise: Inference Optimization*.)

- **RoPE positional encoding**: Consistent with most contemporary models, Falcon used rotary positional encoding to support variable-length contexts.

- **Parallel attention and FFN**: Falcon's Transformer layers computed attention and the feed-forward network (FFN) in parallel rather than in series. This eliminated one full communication pass and one LayerNorm operation, further improving training throughput. This design choice also appeared in Google's PaLM but was not universally adopted across all open-source models.

Falcon's architectural choices were fundamentally **pragmatic engineering optimizations** — no entirely new architectural paradigms were introduced; instead, known efficiency improvements were selected on top of the mature Transformer decoder foundation. This stood in contrast to DeepSeek's later aggressive innovations in MLA and MoE.

### 3.2 Data Strategy: The Paradigmatic Significance of RefinedWeb

Falcon's most important technical contribution to the open-source LLM domain was **RefinedWeb** — and the "data engineering first" philosophy it embodied.

Before 2023, pre-training data for large models typically comprised two components: **curated corpora** (manually curated high-quality text, such as Wikipedia, books, and academic papers) and **web corpora** (raw web pages extracted from Common Crawl, with highly variable quality). The mainstream view held that a higher proportion of curated corpora led to better model quality. LLaMA's training data, for example, contained a substantial proportion of curated corpora.

The RefinedWeb paper challenged this assumption. The TII team demonstrated that **if raw web data is subjected to sufficiently rigorous filtering and deduplication, models trained on web-only data can surpass those trained on curated corpora.**[^3] Their filtering pipeline included:

1. **URL filtering**: Removing known low-quality domains (advertising, pornography, spam)
2. **Document filtering**: Removing low-quality documents based on heuristic rules (document length, repetition rate, special character ratio)
3. **Line-level filtering**: Removing boilerplate text (navigation bars, copyright notices, cookie prompts, etc.)
4. **Deduplication**: Using MinHash + LSH for fuzzy deduplication and suffix arrays for exact substring deduplication
5. **Quality scoring**: Using classifiers to score document quality and retaining high-scoring documents

The key insight of this pipeline was: **the volume of web data (trillions of tokens) far exceeds that of curated data (hundreds of billions of tokens); if quality can be extracted from this volume advantage, there is no need to rely on scarce curated corpora.**

RefinedWeb's philosophy had a profound impact on the subsequent open-source ecosystem. DeepSeek-V3's pre-training data (14.8T tokens) was dominated by web data — a direct continuation of the RefinedWeb approach. The Qwen series' training data scale expansion also benefited from similar web data engineering methodologies. It can be said that Falcon's most enduring legacy is not the model weights themselves, but that it changed the industry's answer to the question of "whether web data can be used."

### 3.3 Licensing Evolution: From Custom to Apache 2.0

| Generation | License | Notes |
|------------|---------|-------|
| Falcon-7B / 40B | TII Falcon License | Based on Apache 2.0 with additional clauses |
| From Falcon-180B onward | Apache 2.0 | Permanent shift to standard open-source license |

Falcon's licensing evolution followed a path similar to Qwen's (from Qwen License to Apache 2.0; see *Qwen Family* §3.3): starting with a custom license, pushed by community commercial concerns, and ultimately embracing Apache 2.0. But Falcon's transition was faster — from May 2023 to September 2023, the switch was completed in just four months. This reflected TII's decision-making logic as a national research institution: unlike startups that agonize over the commercial protections of license terms, a national laboratory's primary objective is maximizing impact, and Apache 2.0 is the shortest path to achieving that goal.

---

## IV. Geopolitical Significance: Gulf States' AI Sovereignty

### 4.1 TII: Not a Company, but National Will

To understand Falcon, one must first understand the organizational nature of TII.

TII operates under the ATRC, which is primarily driven by the UAE's National Security Advisor, Sheikh Tahnoon bin Zayed Al Nahyan. TII's research directions span AI, quantum computing, cryptography, autonomous systems, biotechnology, and more — it is not a pure AI company but a **multidisciplinary national research laboratory**.

This organizational form is unique in global AI competition. Frontier models in the United States are developed by technology companies (OpenAI, Google, Anthropic) or academic institutions (Stanford, Berkeley); in China by internet giants (Alibaba, Baidu) or quantitative funds (High-Flyer); in Europe by startups (Mistral) or transnational research alliances (BigScience/BLOOM). Only the UAE took the path of **sovereign wealth directly investing in a research laboratory**.

The advantages of this model are obvious: no shortage of funds, no pursuit of short-term commercial returns, and the ability to mobilize national-level resources for building compute clusters. In 2023, TII reportedly possessed an in-house cluster of up to several thousand A100 GPUs — for an institution that neither manufactures chips nor operates cloud computing platforms, this required pure capital investment.[^6]

The disadvantages are equally apparent: **no downstream ecosystem**. Meta has Facebook/Instagram/WhatsApp as application scenarios and data sources for its models; Alibaba has DingTalk, Taobao, and Alibaba Cloud; Google has Search, YouTube, and Gmail. What does TII have? The UAE's domestic market is too small and its internet ecosystem too thin to enable a commercial flywheel of "open-source model → developer adoption → cloud customer conversion" like Chinese and American tech giants. Falcon's impact relied entirely on the open-source community — and community memory is short.

### 4.2 The "Gulf States AI Sovereignty" Narrative

Falcon's release was one of the most prominent events in the "Gulf states AI sovereignty" narrative, but not the only one. Between 2023 and 2025, Gulf states' investment in AI surged dramatically:

- **Saudi Arabia**: In March 2024, reports indicated Saudi Arabia was establishing an AI investment fund of up to $40 billion. The Saudi Data and AI Authority (SDAIA) launched the Arabic-language large model **ALLaM**.[^8]
- **UAE**: Beyond TII's Falcon, the UAE's G42 (part of the same Abu Dhabi technology ecosystem as TII) entered into a $1.5 billion strategic investment partnership with Microsoft in 2024, further consolidating its presence in AI infrastructure.[^9]
- **Qatar**: The Qatar Investment Authority (QIA) is a significant investor in multiple global AI companies.

The common logic behind these investments is: **oil will eventually run out, and AI is the most important strategic asset for the post-oil era.** Gulf states do not intend to compete with China and the US on the technological frontier of AI — their strategy is to **trade capital for presence**: investing in leading global AI companies (Saudi Arabia invested in xAI, Anthropic, etc.), building domestic compute infrastructure, training local language models (particularly Arabic), and — through open-source models like Falcon — establishing brand recognition and technological discourse power in the global AI community.

However, this narrative has inherent tensions. Gulf states' AI investments face two structural constraints: **talent** and **market**. AI research talent is heavily concentrated in US and Chinese academic institutions and technology companies. While the UAE and Saudi Arabia have attracted some researchers through high salaries, their domestic AI talent pools remain extremely thin. The domestic market (total population under 60 million) cannot support large-scale AI application deployment — Gulf states' AI investments are largely directed at the global market, but that market has already been divided between Chinese and American giants.

### 4.3 The Chip Dilemma: Not Embargoed, but Unable to Buy the Best

Gulf states' situation regarding AI chips is fundamentally different from China's, yet equally complex.

Under the "AI Diffusion Rule" of January 2025 (see *Treatise: Geopolitics and Embargoes* §III), the UAE and Saudi Arabia were placed in **Tier 2** — not embargoed, but subject to quota restrictions. This means Gulf states can legally procure advanced AI chips, but each country faces an annual ceiling. The implicit message of this policy is: **the US allows Gulf states to develop AI capabilities, but not to the level where they could threaten American technological supremacy.**

This had a direct impact on TII's Falcon project. Falcon-180B used 384 A100 GPUs for training — a respectable cluster in 2023, but an order of magnitude smaller than the 16,000 H100 GPUs Meta used to train Llama 3.1 405B.[^6][^10] As model scales grew exponentially and training costs skyrocketed, TII's compute constraints became increasingly apparent. Insufficient compute was a major reason Falcon 2 failed to recapture the initial generation's impact.

---

## V. Ecosystem and Impact

### 5.1 Position in the Open-Source Ecosystem

Falcon occupied a unique position in the open-source LLM ecosystem from May 2023 through the end of that year. Before Llama 2's release (2023-07), Falcon-40B was one of the most popular open-source LLMs — it filled the window between the LLaMA leaked version (lacking formal authorization) and Llama 2 (not yet released).

Falcon-7B was one of the important options for small open-source models, competing with contemporaneous models such as MPT-7B (MosaicML) and StableLM-7B (Stability AI). Falcon-40B had virtually no competitors at the medium scale — until Llama 2 70B appeared. Falcon-180B reigned alone in terms of scale, but due to its high deployment threshold, its actual usage fell far short of Llama 2 70B.

By 2024, Falcon's ecological position had been rapidly marginalized. Llama 3, Qwen 2, and multiple Mistral models comprehensively surpassed the Falcon series in both performance and ecosystem support. The release of Falcon 2 failed to reverse the trend — community attention and contributions had already shifted.

### 5.2 Competitive Relationships

| Competitor | Key Interaction with Falcon |
|-----------|---------------------------|
| **Llama (Meta)** | Falcon-40B held the leaderboard top spot before Llama 2's release; Llama 2 (2023-07) rapidly replaced Falcon's ecological niche |
| **Qwen (Alibaba)** | Both were "non-American open-source models" in 2023-2024, but Qwen surpassed Falcon with full-spectrum coverage and sustained iteration |
| **DeepSeek (High-Flyer)** | DeepSeek trained frontier models with restricted GPUs, contrasting with Falcon's abundant funding but lack of subsequent iteration |
| **Mistral (Europe)** | Both were "new open-source forces" of 2023, but Mistral maintained influence through MoE architecture and sustained productization while Falcon gradually faded |
| **BLOOM (BigScience)** | Both were "non-US, non-Chinese" large open-source models, but BLOOM's academic consortium model fundamentally differs from TII's national laboratory model |

### 5.3 Falcon's Legacy

Falcon's most enduring legacy lies not on the leaderboard but in three dimensions:

**Data philosophy.** The RefinedWeb paper changed the industry's perception of web data. "Data engineering" — using systematic pipelines to improve data quality rather than relying on manual curation — became standard practice for all subsequent large-scale pre-training. DeepSeek-V3 and Qwen 3's training data strategies can both be traced to the direction RefinedWeb pioneered.

**Geopolitical precedent.** Falcon demonstrated that a non-technological-powerhouse nation could achieve short-term influence in AI through sovereign investment. This precedent inspired subsequent investments by Saudi Arabia, Qatar, and other Gulf states, and offered a potential development path for other resource-rich but technology-weak nations.

**Open-source diversity.** Falcon was the first significant model to demonstrate that "open-source LLM contributors need not come from Silicon Valley or Zhongguancun." While its impact did not endure, its very existence was a testament to the diversity of the open-source ecosystem.

---

## VI. Funding and Resources

As a national research institution, TII did not have traditional funding rounds. Its funding source was the UAE's sovereign wealth — disbursed through ATRC's annual budget. Specific annual R&D budgets have not been publicly disclosed.

However, the scale of investment can be estimated indirectly:

- TII's AI cluster reportedly contained several thousand A100 80GB GPUs. Based on the 2023 market price of approximately $10,000 per A100, the GPU hardware investment alone was in the tens of millions of dollars.[^6]
- Falcon-180B's training used 384 A100 GPUs, with training duration estimated at several months. At contemporary cloud computing prices (approximately $2/GPU-hour), training costs alone were in the millions of dollars.
- TII also employed researchers from around the world, with personnel costs comparable to hardware investment.

Compared to contemporaneous competitors: Meta used 16,000 H100 GPUs to train Llama 3.1, investing hundreds of millions of dollars; DeepSeek-V3 completed training with 2,048 H800 GPUs for $5.57 million. TII's investment scale fell between the two — sufficient to train a competitive model, but insufficient to sustain continuous large-scale iteration.

This resource constraint — "wealthy but not infinitely wealthy" — ultimately became the fundamental reason the Falcon series could not sustain its competitive position. Large model training costs continued to soar between 2024 and 2025, with frontier model training investment jumping from the tens of millions to hundreds of millions of dollars. TII could not necessarily not afford this expenditure, but the priority of such spending within a national R&D budget faced competition from quantum computing, biotechnology, defense technology, and other fields.

---

## Commentary

The Falcon family's iteration history is a story about the "fleeting summit."

When Falcon-40B topped the HuggingFace leaderboard in May 2023, many saw it as a signal of "the rise of the Middle East." A sovereign national laboratory, powered by national will and sovereign wealth, had built an open-source model that defeated competitors from Silicon Valley and Zhongguancun — the narrative was too good, so good that it obscured the structural problems behind it. TII had no downstream ecosystem to retain developers, no sustained productization roadmap to hold community attention, and no data flywheel (user data feedback) for continuous model improvement. What it had was a one-time resource investment and a good paper about data quality.

Llama 2 was released two months later, and Meta's brand effect and Azure distribution channels instantly swallowed Falcon's ecological niche. By 2024, Qwen 2, Llama 3, and Mistral's continuous iterations had pushed the baseline of open-source LLMs to heights Falcon could not reach. When Falcon 2 was released, the community barely paid attention — attention is the scarcest resource, and Falcon had already lost it.

But this does not mean Falcon was unimportant. Quite the contrary — Falcon's historical position must be understood across two dimensions.

The first dimension is **technical contribution**. The RefinedWeb paper's impact on data engineering methodology was profound. It changed the industry's answer to the question of "whether web data can be used" — from "barely usable" to "if properly processed, it can surpass curated corpora." This insight was absorbed by all subsequent large-scale pre-training efforts. Falcon's application of MQA also advanced the popularization of attention optimization in the open-source community. Technical contributions can outlast the models themselves.

The second dimension is **geopolitical symbolism**. Falcon was the first and most prominent demonstration that "a non-superpower can produce a globally recognized AI model through sovereign investment." Regardless of Falcon's subsequent trajectory, this precedent has permanently altered the global AI competition landscape's topological map. When Saudi Arabia announces a $40 billion AI fund, when the UAE's G42 partners with Microsoft, when Qatar's sovereign fund invests in global AI companies — all of these developments trace a line back to Falcon's May 2023 moment. Falcon proved a thesis: in the AI era, money cannot buy everything, but it can buy a ticket to the table.

The question left by the Falcon family is not about technology — it is about whether sovereignty-driven AI investment can produce sustainable results when there is no downstream ecosystem to feed back into the model. The answer, as of 2026, remains unclear. But Falcon's example will be cited for a long time to come — as both an inspiration and a cautionary tale.

---

*This article was compiled by the Endfield Industries AI Historian Team.*

---

[^1]: TII, "Falcon LLM", 2023-05-25. https://falconllm.tii.ae/
[^2]: HuggingFace Open LLM Leaderboard, 2023-05 snapshot. Falcon-40B topped the overall leaderboard, surpassing LLaMA-65B.
[^3]: Penedo, G. et al., "The RefinedWeb Dataset for Falcon LLM: Outperforming Curated Corpora with Web Data, and Web Data Only", NeurIPS 2023 Datasets and Benchmarks Track, arXiv:2306.01116. https://arxiv.org/abs/2306.01116
[^4]: TII Falcon License. Based on Apache 2.0 with additional conditions regarding use restrictions and attribution.
[^5]: TII, "Falcon 180B", 2023-09. https://huggingface.co/tiiuae/falcon-180B. Apache 2.0 license.
[^6]: Reported compute details: 384 × A100 80GB for Falcon-180B training. Multiple sources including The Verge, Reuters.
[^7]: TII, "Falcon 2", 2024-05. https://falconllm.tii.ae/
[^8]: Reuters / Bloomberg, Saudi Arabia AI investment plans, 2024. SDAIA ALLaM model announcement.
[^9]: Microsoft-G42 partnership announcement, 2024. $1.5 billion strategic investment.
[^10]: Meta AI Blog, "Introducing Llama 3.1", 2024-07-23. 16,000 H100 GPUs for 405B training.
