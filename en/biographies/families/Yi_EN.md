# Yi Family

> From a 34B-parameter "star startup's debut" in November 2023 to a quiet pivot toward application development in 2025 — 01.AI took less than two years. That was enough time for a model series to complete the full arc from stunning debut to drowning in a red ocean. Yi's story is not a story of technical breakthrough, nor a story of cost domination, but a more common story: a startup squeezed between tech giants and quant funds discovering that the economic viability of "building the best model" itself was collapsing faster than anyone had anticipated.

---

## I. Overview

The Yi series was developed by 01.AI, founded by Kai-Fu Lee, and was one of the most recognizable open-source large models among the wave of Chinese AI startups in the second half of 2023. Its trajectory encapsulates the archetypal fate of Chinese AI startups in 2023–2025: entering with fanfare backed by a celebrity founder and massive funding, establishing a foothold with a high-performance open-source model, then gradually losing ground between the unlimited capital of tech giants and the extreme efficiency of quant funds, ultimately forced to adjust course.

01.AI was founded in March 2023 by Kai-Fu Lee (former president of Microsoft Research Asia, president of Google China, and chairman of Sinovation Ventures).[^1] The company name "零一万物" (Zero One Everything) draws from the *Dao De Jing*: "The Dao gives birth to One, One gives birth to Two, Two gives birth to Three, Three gives birth to the ten thousand things," aspiring to build artificial general intelligence from zero. In October 2023, the company completed an approximately $200 million seed round at an estimated $1 billion valuation — one of the fastest-funded Chinese AI startups at the time.[^2]

The Yi series went through three stages: **high-profile debut** (Yi-34B, 2023-11), **rapid iteration** (Yi-1.5 / Yi-VL / Yi-Lightning, 2024), and **strategic pivot** (from foundation model to application, 2025). Compared to contemporaneous models — DeepSeek (driven by High-Flyer Quant's proprietary capital; see *DeepSeek Family*) and Qwen (backed by Alibaba Cloud; see *Qwen Family*) — Yi represents a third path: **the pure startup path.** This path had the most high-profile beginning and the most pragmatic ending.

(For Kai-Fu Lee's personal background, founding motivations, and fundraising strategy, see *01.AI Annals* (to be written). This article focuses on the model family's technical iteration and ecological positioning.)

---

## II. Generational Evolution

| Generation | Release Date | Parameter Scale | Core Innovation | License | Ecosystem Significance |
|------------|--------------|-----------------|-----------------|---------|----------------------|
| Yi-6B / Yi-34B | 2023-11 | 6B / 34B | 200K context + leading Chinese performance | Apache 2.0 | First Chinese model from a startup to top the Open LLM Leaderboard |
| Yi-VL | 2023-12 | 6B / 34B + vision encoder | Multimodal visual understanding | Apache 2.0 | Among China's first open-source multimodal large models |
| Yi-1.5 | 2024-05 | 6B / 9B / 34B | Training data upgrade, performance improvement | Apache 2.0 | Full-spectrum coverage attempt |
| Yi-Lightning | H2 2024 | Undisclosed | Inference optimization, cost reduction | API only | Joined the price war |
| Yi-Large | 2024 | Undisclosed (API flagship) | GPT-4-level capability targeting | API only | Closed-source product line expansion |
| Yi-Coder | 2024 | Multi-scale | Code generation optimization | Apache 2.0 | Vertical scenario coverage |

### 2.1 Yi-34B: A startup's moment in the spotlight

In early November 2023, 01.AI released its first open-source large models, **Yi-6B** and **Yi-34B**, simultaneously open-sourcing both Base and Chat versions under the **Apache 2.0** license.[^3]

This was one of the most eye-catching debuts in the "hundred models battle" among Chinese AI startups in the second half of 2023. Yi-34B had three standout features:

**First, context window.** Yi-34B supported a **200K token context window** — in November 2023, mainstream open-source models had context windows of mostly 4K (Llama 2), 8K (Qwen), or 32K (a few extended versions). 200K was nearly unprecedented among open-source models, relying on fine-tuned RoPE positional encoding frequency adjustments and efficient attention implementations. This aggressive context extension strategy — go long first, then go precise — later became an industry-wide trend. (For the evolution of context windows, see *Chronicles: November 2023*.)

**Second, Chinese performance.** Yi-34B excelled across multiple Chinese benchmarks, particularly surpassing contemporaneous Llama 2 70B and ChatGLM3-6B on Chinese understanding and generation tasks.[^4] This rapidly made it the focus of the Chinese developer community's attention. The GLM Family also notes: ChatGLM3 had already been surpassed on multiple benchmarks by larger models such as Qwen-14B and Yi-34B (see *GLM Family*, §2.4).

**Third, open-source license.** Yi chose Apache 2.0 from day one — one of the most permissive open-source licenses available at the time. Compared to Llama 2's "additional license required above 700M MAU" restriction and Zhipu's early proprietary license, Apache 2.0 left Yi with no短板 in commercial friendliness. In the *Open-Source Model License Comparison Table*, Yi is classified in the "classic open-source license" category, alongside Mistral and Qwen 2.5.[^5]

After Yi-34B's release, it briefly topped the 34B-tier rankings on the HuggingFace Open LLM Leaderboard. Kai-Fu Lee actively promoted this achievement on social media, rapidly establishing brand recognition for "01.AI" in a short period.

But behind the spotlight lurked an implicit clock: in the same week Yi-34B was released, DeepSeek released DeepSeek-LLM 67B (see *Chronicles: November 2023*). Two weeks later, the Qwen 1.5 series began brewing. The window for Chinese open-source LLMs was rapidly closing — from blue ocean to red ocean took less than three months.

### 2.2 Yi-VL: Multimodal experiment

In December 2023, 01.AI released **Yi-VL** (Yi Vision Language), extending Yi's text understanding capabilities to the visual domain. Yi-VL supported image description, visual question answering, and other multimodal tasks, making it **one of China's first open-source multimodal large models.**[^6]

Yi-VL's architecture employed the typical "vision encoder + linear projection + language model" scheme — consistent with LLaVA's design philosophy. It performed well on Chinese visual understanding tasks, filling a gap in the Chinese open-source multimodal ecosystem at the time.

But Yi-VL's release timing was a double-edged sword. Technically, it demonstrated 01.AI's multimodal capabilities; but in terms of ecological niche, Qwen-VL (already released in 2023-09; see *Qwen Family*, §2.3) had already established a lead. A startup's multimodal model, facing a tech giant's full-spectrum coverage, struggles to build lasting differentiation.

### 2.3 Yi-1.5: Full-spectrum coverage attempt

In May 2024, 01.AI released the **Yi-1.5** series, comprising 6B, 9B, and 34B scales.[^7]

Yi-1.5's primary improvements lay in training data upgrades and comprehensive performance enhancements. 01.AI claimed Yi-1.5 showed significant improvements over the original Yi on multiple benchmarks. This version also introduced the 9B scale for the first time — attempting to provide an intermediate option between 6B (runnable on consumer GPUs) and 34B (requiring professional hardware), echoing Qwen's "full-spectrum coverage" strategy.

However, Yi-1.5's release was also accompanied by controversy. Some community evaluations pointed out that 01.AI exhibited selective reporting tendencies in its benchmark presentations — showcasing only the best-performing benchmarks while downplaying or omitting poorly performing ones. Such criticisms were not unique among Chinese AI startups, but were particularly sensitive in Yi's case, as benchmark rankings constituted one of a startup's most critical brand assets.

This controversy marked Yi's transition from the "high-profile debut" phase into the "trust maintenance" phase — for a startup built on a technology brand, this was a thornier problem than technology itself.

### 2.4 Yi-Lightning and the price war

In the second half of 2024, 01.AI launched **Yi-Lightning** — an inference-optimized version emphasizing fast response and low cost.[^8]

Yi-Lightning's launch coincided with the brutal price war in China's AI API market. In May 2024, DeepSeek-V2's pricing at approximately 1/100th of GPT-4 triggered industry-wide price cuts (see *Chronicles: May 2024*, *Treatises: Price War*, §IV). ByteDance's Doubao cut prices by 99.3%, Alibaba Tongyi by 97%, Baidu ERNIE went free, and Zhipu GLM dropped to ¥0.1/1M — 01.AI was also forced to follow.[^9]

This price war impacted different types of companies in vastly different ways. DeepSeek achieved structurally low costs through its MLA architecture — price cuts were not loss-making. Alibaba Cloud used open-source models to attract developers, ultimately converting them to cloud revenue — API was not the profit center. But for a pure startup like 01.AI, API revenue was potentially the most critical income source — when prices were driven near zero, this revenue stream essentially vanished.

Concurrently, 01.AI also launched the closed-source flagship **Yi-Large** and the code-specialized model **Yi-Coder**, attempting to find differentiated revenue through vertical scenarios and premium closed-source offerings. But under the dual pressure from DeepSeek and Qwen, the space for these efforts grew increasingly narrow.

### 2.5 Strategic pivot: from model to application

In early 2025, 01.AI's strategic direction underwent a significant shift — from "foundation model company" to "application company."[^10]

Kai-Fu Lee stated on multiple public occasions that large models' foundational capabilities had become "good enough" and that future value lay in the application layer. This judgment was not wrong in itself — the global AI industry was indeed transitioning from "model arms race" to "application deployment." But for a company whose brand positioning had been "building the best foundation model," the subtext of this pivot was: **continued investment in foundation model training was economically unsustainable.**

This pivot had three causes. First, **capital constraints.** The seed round's $200 million was far from sufficient in the context of large model training — DeepSeek relied on High-Flyer Quant's proprietary funds, Qwen on Alibaba Cloud's compute, but 01.AI's every training round directly burned through its fundraising. Second, **competitive pressure.** When DeepSeek V3 trained a GPT-4o-equivalent model for $5.576 million (see *DeepSeek Family*, §2.3), any team whose cost efficiency fell short of this level faced the question: "Where is your money going?" Third, **industry trends.** The global AI industry in 2025 was broadly shifting from the model layer to the application layer — even OpenAI itself was transitioning from research institution to product company.

01.AI's strategic pivot was not a surrender — it was pragmatism. But its implication was clear: in the triangular competition of "startups vs. tech giants vs. quant funds," the pure startup's foundation model path was proven unviable. Not because of insufficient capability, but because the economic model does not hold.

---

## III. Technical trajectory analysis

### 3.1 Architecture: Standard and robust

The entire Yi series employs the standard **Transformer decoder** architecture, using RoPE (Rotary Position Embedding) for long-context support.[^3] This choice is consistent with Qwen and Llama — not pursuing architectural innovation, but delivering solid engineering on mature architecture.

Yi's most notable engineering achievement was **implementing the 200K context window.** As of November 2023, this required fine-grained adjustment of RoPE's base frequency, combined with efficient attention implementations like FlashAttention to control computational costs. This engineering practice provided a reference for subsequent long-context extensions in the open-source community — though 01.AI did not fully disclose the specific implementation details.

### 3.2 Training strategy: Data first

01.AI emphasized the quality and diversity of its training data in public materials. Yi series' pre-training data reportedly comprised over 3 trillion tokens of Chinese-English mixed corpora, with the proportion and quality processing of Chinese data being one of its core competitive advantages.[^3]

During alignment, the Yi Chat versions employed the standard SFT + RLHF pipeline. Notably, 01.AI did not follow DeepSeek's "lightweight alignment" approach (DPO/pure RL) or Anthropic's "Constitutional AI" route — but essentially adhered to the "pre-training → SFT → RLHF" three-step method pioneered by OpenAI. This "follow the mainstream, take no risks" technical strategy was consistent with a startup's resource constraints: there was no margin for frontier experiments that might fail.

### 3.3 Open-source strategy: Apache 2.0 from day one

Yi chose the Apache 2.0 license from the very beginning — it did not undergo the transition from proprietary to Apache 2.0 that Qwen experienced (see *Qwen Family*, §2.4), nor the evolution from restricted to MIT that DeepSeek went through (see *DeepSeek Family*, §4.1).[^5]

This choice was pragmatic: by the second half of 2023, the "pseudo-open-source" controversy surrounding Llama 2 had already made the community wary of non-standard licenses, and Apache 2.0 was the shortest path to winning developer trust. For a startup needing to rapidly build brand recognition, license controversy was unnecessary friction.

But Apache 2.0 also meant that 01.AI relinquished the possibility of controlling derivative models through license terms — anyone could take Yi's weights and do anything with them, including training competing models. For tech giants (like Alibaba), this "relinquishment of control" was acceptable, because models were only part of the ecosystem. For startups, this was a more luxurious choice.

---

## IV. Ecosystem and impact

### 4.1 Position in the Chinese open-source ecosystem

The Yi series held an important position in the Chinese open-source LLM ecosystem from late 2023 through mid-2024. At the time of Yi-34B's release, it was the strongest overall Chinese open-source model at the 34B tier — surpassing ChatGLM3 (6B) and contemporaneous Qwen-14B, and trading wins with Qwen-72B on Chinese understanding and generation tasks.[^4]

A large number of Chinese developers fine-tuned and secondarily developed on Yi. Yi's Apache 2.0 license and relatively balanced Chinese-English capabilities made it one of the popular bases for Chinese vertical domain fine-tuning — though this position was gradually superseded by the Qwen 2 series after mid-2024.

### 4.2 Competitive relationships

| Competitor | Key interaction with Yi |
|-----------|------------------------|
| **Qwen (Alibaba)** | Yi-34B and Qwen-72B directly competed on Chinese benchmarks in late 2023; 2024's Qwen 1.5/2 gradually surpassed Yi with full-spectrum coverage strategy |
| **DeepSeek (High-Flyer)** | Both entered nearly simultaneously (2023-11), but DeepSeek pursued cost efficiency while Yi pursued performance + speed; DeepSeek's subsequent iterations completely surpassed Yi |
| **ChatGLM (Zhipu)** | Yi-34B directly surpassed ChatGLM3-6B at launch; but Zhipu's GLM-4 and subsequent iterations narrowed the gap |
| **Llama (Meta)** | Yi comprehensively led Llama 2 in Chinese capabilities, but its influence in the English community was far less than Llama's |

### 4.3 The "triangular narrative": Startups vs. tech giants vs. quant funds

The Yi family's most important narrative value lies not in the models themselves, but in representing the **third path** in China's large model competitive landscape. This "triangle" can be summarized as:

- **Startup path (01.AI, Moonshot AI, etc.)**: Driven by venture capital, pursuing speed and flexibility, brand built on founders. Disadvantage: limited capital depth; the marginal cost of continuously training large models grows ever higher.
- **Tech giant path (Alibaba/Qwen, Baidu/ERNIE, etc.)**: Supported by cloud platforms and ecosystems; models are open-sourced to attract developers who convert to cloud customers. "Closed-source captures revenue; open-source captures community" (see *Qwen Family*, §3.4). Advantages: unlimited capital, rich data; disadvantages: slow decision-making, conservative innovation.
- **Quant fund path (High-Flyer/DeepSeek)**: Driven by proprietary capital, independent of external fundraising, not pursuing short-term commercial returns. Advantages: can conduct pure technical research, free from investor pressure; disadvantages: no product DNA, no application ecosystem construction.

Kai-Fu Lee himself proactively used this classification framework in multiple public speeches. He positioned 01.AI as the representative of the "startup path" — fast decisions, fast releases, strong brand.[^11] But developments in 2024–2025 proved a harsh reality: on the foundation model track, the startup path's structural disadvantages — capital depth, compute reserves, data accumulation — are far more lethal than its flexibility advantage.

When DeepSeek V3 trained a GPT-4o-equivalent model for $5.576 million, 01.AI's total fundraising might not have been enough to train an equivalent model twice. When Qwen 3 achieved full-spectrum coverage using Alibaba Cloud's unlimited compute, 01.AI had never even released a 72B model. It is not that startups cannot build good models — but after both tech giants and quant funds learned to build models, a startup's "good" was no longer good enough.

The final conclusion of this triangular narrative was clear by 2025: **the foundation model track is unsuitable as the primary battlefield for pure startups.** Whether it was 01.AI pivoting to applications, or in the US, Inflection AI being absorbed by Microsoft and Character.AI seeking Google's protection, AI startups worldwide were learning the same lesson. Models are infrastructure, and infrastructure construction requires scale effects — and scale effects inherently do not belong to startups.

---

## V. Funding and business

01.AI's fundraising history was relatively simple but sufficiently eye-catching:

| Time | Round | Amount | Valuation | Source |
|------|-------|--------|-----------|--------|
| 2023-10 | Seed | ~$200M | ~$1B | [^2] |

Reaching a unicorn valuation at the seed stage was not unique in the AI startup fervor of late 2023 — Moonshot AI also completed an approximately $200 million Series A at roughly $1 billion valuation in October 2023 (see *Major Funding and Valuation Table*).[^12]

But after 2024, reports of 01.AI's subsequent fundraising were scarce. In the AI industry's valuation inflation of 2024–2025, a startup lacking follow-up funding news typically suggests one of two possibilities: either quietly fundraising (not wanting to expose valuation changes), or struggling to fundraise (unfavorable market conditions). Either way, compared to the contemporaneous trajectories of Anthropic soaring from $18.4 billion to $61.5 billion and OpenAI from $157 billion to $300 billion (see *Major Funding and Valuation Table*), 01.AI's capital narrative clearly lacked staying power.

---

## Evaluation

The Yi family's iteration history is a standard specimen of the ebb and flow of China's large model startup wave.

From Yi-34B's stunning debut in November 2023 to the pivot toward application development in 2025 — in less than two years, a billion-dollar startup experienced the complete arc from "foundation model disruptor" to "pragmatic survivor." This was not 01.AI's fate alone, but a microcosm of the entire Chinese AI startup cohort. Moonshot AI found an application outlet in Kimi, Baichuan Intelligence sought differentiation in medical verticals, and MiniMax found its niche in social and role-playing scenarios — but not a single startup was able to sustain head-on competition with tech giants and quant funds on the foundation model track.

Yi's most underrated contribution was the **time window** it provided for the Chinese open-source ecosystem in late 2023. During the weeks when Yi-34B was released, it was the overall strongest Chinese open-source model at the 34B tier. Although this window was soon closed by subsequent iterations from Qwen and DeepSeek, during the period it existed, it enabled a cohort of Chinese developers to use a "good enough" open-source Chinese large model for the first time. This formed a temporal relay with the "usable" window that ChatGLM-6B provided in the first half of 2023 — the two windows together covered the critical transition period of Chinese open-source LLMs from "usable" to "useful."

Benchmarked against the DeepSeek Family and Qwen Family: DeepSeek proved that "open source can exist without any commercial strategy attached" — High-Flyer Quant does not monetize AI, so it can conduct the purest technical research. Qwen proved that "open source can be a good business" — Alibaba Cloud uses models to attract developers who convert to cloud customers. 01.AI proved a converse proposition: **when open-source models themselves generate no profit, and a startup lacks downstream monetization channels like a cloud platform, foundation model entrepreneurship is a dead end.**

This was not a technical failure — Yi-34B genuinely achieved first-tier performance at launch. It was a business model failure. In the large model game, a startup's flexibility advantage is far outweighed by a tech giant's data advantage and a quant fund's compute advantage. When model capabilities converge, what determines the outcome is not who releases a good model first, but who can sustain investment in training the next model — and that is, at its root, a capital question.

From a longer historical perspective, the Yi family's value lies in providing a complete, well-documented case for the "Chinese large model startup" narrative line. When people look back on the 2023–2025 Chinese AI startup wave, 01.AI will be one of the most frequently mentioned names — not because its models were the most powerful, but because its fate was the most representative.

---

*This article was compiled by the Endfield Industrial Historical Archives team: Fangyi Zhuang (lead chronicler).*

---

[^1]: The Information, "Kai-Fu Lee's AI Startup 01.AI Raises $200M at $1B Valuation," 2023-10. Also see Kai-Fu Lee's public biography and 01.AI's official introduction.
[^2]: The Information, "Kai-Fu Lee's AI Startup 01.AI Raises $200M at $1B Valuation," 2023-10. Also see *Major Funding and Valuation Table*.
[^3]: 01.AI, "Yi: Open Foundation Models," 2023-11. GitHub: https://github.com/01-ai/Yi; HuggingFace: https://huggingface.co/01-ai/Yi-34B
[^4]: Yi-34B's benchmark data at release is documented in 01.AI's official technical report and the HuggingFace Open LLM Leaderboard (November 2023 snapshot). Specific scores vary by evaluation version and time point; this is a qualitative description rather than an exact citation.
[^5]: See the Yi entry in *Open-Source Model License Comparison Table*. Apache 2.0 is an OSI-approved classic open-source license.
[^6]: 01.AI, "Yi-VL," 2023-12. GitHub: https://github.com/01-ai/Yi-VL
[^7]: 01.AI, "Yi-1.5," 2024-05. GitHub: https://github.com/01-ai/Yi-1.5
[^8]: Yi-Lightning's specific release date and parameter scale lack official public documentation; this entry follows industry reports and API service records. Flagged as uncertain.
[^9]: Details of the May 2024 Chinese AI API price war, see *Chronicles: May 2024* (to be supplemented), *Treatises: Price War*, §IV.
[^10]: Reports on 01.AI's 2025 strategic pivot are scattered. Kai-Fu Lee mentioned in multiple interviews that "model capabilities are good enough; value lies in the application layer." Specific timeline flagged as uncertain.
[^11]: Kai-Fu Lee articulated the "three paths" classification of the Chinese AI industry in multiple public speeches and media interviews during 2023–2024. Specific speech dates pending further verification.
[^12]: See the Moonshot AI entry in *Major Funding and Valuation Table*. Bloomberg, "AI Startup Moonshot Raises $200 Million," 2023-10.
