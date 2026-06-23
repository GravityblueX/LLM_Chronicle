# Yi Family

> From a 34B-parameter "star startup's debut" in November 2023 to a quiet pivot toward application development in 2025 — 01.AI took less than two years. That was enough time for a model series to complete the full arc from a dazzling debut to being swallowed by a red ocean. Yi's story is not a story of technical breakthrough, not a story of cost domination, but a more common story: a startup squeezed between tech giants and quantitative funds discovering that the economic viability of "building the best model" itself was collapsing faster than anyone had anticipated.

---

## I. Overview

The Yi series was developed by 01.AI, founded by Kai-Fu Lee, and was one of the most recognizable open-source large models in the Chinese AI startup wave of late 2023. Its trajectory encapsulated the typical fate of Chinese AI startups in 2023–2025: entering with fanfare backed by a celebrity founder and massive funding, opening the market with an open-source model that performed well at the time, then gradually losing its footing between the unlimited capital of tech giants and the extreme efficiency of quantitative funds, ultimately forced to adjust course.

01.AI was founded in March 2023 by Kai-Fu Lee (former president of Microsoft Research Asia, president of Google China, and chairman of Sinovation Ventures).[^1] The company name "01.AI" draws from the *Dao De Jing*: "The Dao gives birth to one, one gives birth to two, two gives birth to three, three gives birth to all things," aspiring to build artificial general intelligence from zero. In October 2023, the company completed approximately $200 million in seed funding at a valuation of approximately $1 billion — one of the fastest-funded AI startups in China at the time.[^2]

The Yi series went through three stages: **spectacular entry** (Yi-34B, 2023-11), **rapid iteration** (Yi-1.5 / Yi-VL / Yi-Lightning, 2024), and **strategic pivot** (from foundation model to applications, 2025). Compared to contemporaneous competitors like DeepSeek (driven by High-Flyer Quant's own funds; see the *DeepSeek Family*) and Qwen (backed by Alibaba Cloud; see the *Qwen Family*), Yi represented a third path — **the pure startup path.** This path had the most high-profile beginning and the most pragmatic ending.

(For Kai-Fu Lee's personal background, founding motivation, and fundraising strategy, see the *01.AI Annals* (forthcoming). This article focuses on the model series' technical iteration and ecological positioning.)

---

## II. Generational Evolution

| Generation | Release Date | Parameter Scale | Core Innovation | License | Ecological Significance |
|------------|--------------|-----------------|-----------------|---------|------------------------|
| Yi-6B / Yi-34B | 2023-11 | 6B / 34B | 200K context + leading Chinese performance | Apache 2.0 | First Chinese model from a startup to top the Open LLM Leaderboard |
| Yi-VL | 2023-12 | 6B / 34B + vision encoder | Multimodal visual understanding | Apache 2.0 | One of China's first open-source multimodal LLMs |
| Yi-1.5 | 2024-05 | 6B / 9B / 34B | Training data upgrade, performance improvement | Apache 2.0 | Full-spectrum coverage attempt |
| Yi-Lightning | H2 2024 | Undisclosed | Inference optimization, cost reduction | API only | Joined the price war |
| Yi-Large | 2024 | Undisclosed (API flagship) | Targeting GPT-4-level capability | API only | Closed-source product line expansion |
| Yi-Coder | 2024 | Multiple scales | Code generation optimization | Apache 2.0 | Vertical scenario coverage |

### 2.1 Yi-34B: The Startup's Moment in the Spotlight

In early November 2023, 01.AI released its first open-source large models, **Yi-6B** and **Yi-34B**, simultaneously open-sourcing both Base and Chat versions under the **Apache 2.0** license.[^3]

This was one of the most attention-grabbing debuts in the "hundred models battle" among Chinese AI startups in the second half of 2023. Yi-34B had three standout features:

**First, context window.** Yi-34B supported a **200K token context window** — in November 2023, mainstream open-source models had context windows of mostly 4K (Llama 2), 8K (Qwen), or 32K (a few extended versions). 200K was virtually unprecedented among open-source models, relying on frequency adjustments to RoPE positional encoding and efficient attention implementations. This aggressive context extension strategy — go long first, then get precise — later became an industry-wide trend. (For the evolution of context windows, see *Chronicles: November 2023*.)

**Second, Chinese performance.** Yi-34B excelled on multiple Chinese benchmarks, particularly surpassing contemporaneous Llama 2 70B and ChatGLM3-6B on Chinese understanding and generation tasks.[^4] This quickly made it the focus of the Chinese developer community. As noted in the *GLM Family*: ChatGLM3 had been surpassed on multiple benchmarks by larger models such as Qwen-14B and Yi-34B (see *GLM Family* §2.4).

**Third, open-source license.** Yi chose Apache 2.0 from day one — one of the most permissive open-source licenses available at the time. Compared to Llama 2's "additional license required for MAU exceeding 700 million" restriction and Zhipu's early proprietary license, Apache 2.0 left Yi without any weaknesses in commercial friendliness. In the *Open-Source Model License Comparison Table*, Yi is categorized under "classic open-source licenses," alongside Mistral and Qwen 2.5.[^5]

After its release, Yi-34B briefly topped the HuggingFace Open LLM Leaderboard at the 34B level. Kai-Fu Lee actively promoted this achievement on social media, rapidly establishing "01.AI" brand recognition.

But behind the spotlight was an implicit clock: in the same week Yi-34B was released, DeepSeek launched DeepSeek-LLM 67B (see *Chronicles: November 2023*). Two weeks later, the Qwen 1.5 series began brewing. The window for Chinese open-source LLMs was rapidly closing — from blue ocean to red ocean in less than three months.

### 2.2 Yi-VL: The Multimodal Foray

In December 2023, 01.AI released **Yi-VL** (Yi Vision Language), extending Yi's text understanding capabilities to the visual domain. Yi-VL supported image description, visual question answering, and other multimodal tasks, making it **one of China's first open-source multimodal LLMs.**[^6]

Yi-VL's architecture employed the typical "vision encoder + linear projection + language model" scheme — consistent with LLaVA's design philosophy. It performed well on Chinese visual understanding tasks, filling a gap in the Chinese open-source multimodal ecosystem at the time.

But Yi-VL's release timing was also a double-edged sword. It technically proved 01.AI's multimodal capabilities, but in terms of ecological positioning, Qwen-VL (already released in 2023-09; see *Qwen Family* §2.3) had gotten there first. A startup's multimodal model struggled to build lasting differentiation against a tech giant's full-spectrum coverage.

### 2.3 Yi-1.5: The Full-Spectrum Coverage Attempt

In May 2024, 01.AI released the **Yi-1.5** series, comprising 6B, 9B, and 34B scales.[^7]

Yi-1.5's primary improvements lay in training data upgrades and comprehensive performance enhancements. 01.AI claimed Yi-1.5 achieved significant improvements over the original Yi on multiple benchmarks. This version also introduced the 9B scale for the first time — attempting to provide a middle option between 6B (runnable on consumer-grade GPUs) and 34B (requiring professional hardware), echoing Qwen's "full-spectrum coverage" strategy.

However, Yi-1.5's release was accompanied by controversy. Some community evaluations pointed out that 01.AI exhibited selective benchmark reporting tendencies — showing only the best-performing benchmarks while downplaying or omitting poorly performing ones. Such criticism was not unique among Chinese AI startups, but was particularly sensitive in Yi's case, as benchmark rankings were one of a startup's most important brand assets.

This controversy marked Yi's transition from the "spectacular entry" phase to the "trust maintenance" phase — for a startup that built its brand on technical credibility, this was a thornier problem than technology itself.

### 2.4 Yi-Lightning and the Price War

In the second half of 2024, 01.AI launched **Yi-Lightning** — an inference-optimized version emphasizing fast response and low cost.[^8]

Yi-Lightning's launch coincided with the brutal price war in China's AI API market. In May 2024, DeepSeek-V2 triggered industry-wide price cuts with pricing approximately 1/100th of GPT-4 (see *Chronicles: May 2024*, *Treatise: Price War* §IV). ByteDance's Doubao cut prices by 99.3%, Alibaba's Tongyi by 97%, Baidu's ERNIE went free, and Zhipu's GLM dropped to ¥0.1/1M — 01.AI was forced to follow suit.[^9]

This price war impacted different types of companies in radically different ways. DeepSeek achieved structurally low costs through its MLA architecture, so price cuts were not loss-making. Alibaba Cloud used open-source models to attract developers who ultimately converted to cloud revenue, with the API not serving as a profit center. But for a pure startup like 01.AI, API revenue was likely the most important income source — when prices were pushed near zero, this revenue stream essentially disappeared.

During the same period, 01.AI also launched the closed-source flagship **Yi-Large** and the code-specialized model **Yi-Coder**, attempting to find differentiated revenue through vertical scenarios and closed-source premium offerings. But under the dual pressure from DeepSeek and Qwen, the space for these efforts grew increasingly narrow.

### 2.5 Strategic Pivot: From Models to Applications

In early 2025, 01.AI's strategic direction shifted significantly — from "foundation model company" to "application company."[^10]

Kai-Fu Lee stated on multiple public occasions that large models' foundational capabilities were already "good enough" and that future value lay in the application layer. This judgment was not wrong in itself — the global AI industry was indeed shifting from "model arms race" to "application deployment." But for a company that had once positioned its brand as "building the best foundation models," the subtext of this pivot was: **continued investment in foundation model training was economically unsustainable.**

This pivot had three causes. First, **funding constraints.** The $200 million seed round was woefully insufficient for large model training — DeepSeek was backed by High-Flyer Quant's own funds, Qwen by Alibaba Cloud's compute, but 01.AI was directly burning through venture capital with every training run. Second, **competitive squeeze.** When DeepSeek V3 trained a GPT-4o-equivalent model for $5.57 million (see *DeepSeek Family* §2.3), any team whose cost efficiency fell short faced the question: "where is your money going?" Third, **industry trend.** The global AI industry broadly shifted from the model layer to the application layer in 2025; OpenAI itself was transforming from a research institution into a product company.

01.AI's strategic pivot was not a surrender — it was pragmatism. But its implication was clear: in the "startup vs. tech giant vs. quantitative fund" triangle, the pure startup foundation model path had been disproven. Not for lack of capability, but because the economic model was unviable.

---

## III. Technical Route Analysis

### 3.1 Architecture: Standard and Steady

The entire Yi series employed the standard **Transformer decoder** architecture, using RoPE (Rotary Position Embedding) to support long contexts.[^3] This choice was consistent with Qwen and Llama — not pursuing architectural innovation, but excelling at engineering implementation on a mature architecture.

Yi's most notable engineering achievement was **the realization of a 200K context window.** In November 2023, this required fine-grained adjustments to RoPE's base frequency, combined with efficient attention implementations like FlashAttention to control computational costs. This engineering practice provided reference material for the open-source community's subsequent long-context extensions — although 01.AI did not fully disclose the specific implementation details.

### 3.2 Training Strategy: Data First

01.AI emphasized the quality and diversity of its training data in public materials. Yi series' pre-training data reportedly contained over 3 trillion tokens of Chinese-English mixed corpora, with the proportion and quality processing of Chinese data being one of its core competitive advantages.[^3]

For alignment, Yi Chat versions employed the standard SFT + RLHF pipeline. Notably, 01.AI did not adopt DeepSeek's "light alignment" approach (DPO/pure RL) nor Anthropic's "Constitutional AI" route — but essentially followed the "pre-training → SFT → RLHF" three-step method pioneered by OpenAI. This "follow the mainstream, take no risks" technical strategy was consistent with a startup's resource constraints: there was no margin for frontier experiments that might fail.

### 3.3 Open-Source Strategy: Apache 2.0 from Day One

Yi chose Apache 2.0 from the very beginning — without undergoing the transition from proprietary license to Apache 2.0 that Qwen experienced (see *Qwen Family* §2.4), nor the evolution from restricted license to MIT that DeepSeek underwent (see *DeepSeek Family* §4.1).[^5]

This choice was pragmatic: by the second half of 2023, Llama 2's "pseudo-open-source" controversy had already made the community wary of non-standard licenses, and Apache 2.0 was the shortest path to winning developer trust. For a startup that needed to rapidly build brand recognition, license controversy was unnecessary friction.

But Apache 2.0 also meant that 01.AI forfeited the possibility of controlling derivative models through license terms — anyone could take Yi's weights and do anything with them, including training competing models. For tech giants like Alibaba, this "relinquishment of control" was acceptable because models were only one part of the ecosystem. For startups, it was a more luxurious choice.

---

## IV. Ecosystem and Impact

### 4.1 Position in the Chinese Open-Source Ecosystem

The Yi series occupied an important position in the Chinese open-source LLM ecosystem from late 2023 through mid-2024. During Yi-34B's release window, it was the strongest overall Chinese open-source model at the 34B level — surpassing ChatGLM3 (6B) and contemporaneous Qwen-14B, and trading wins with Qwen-72B on Chinese understanding and generation tasks.[^4]

Numerous Chinese developers fine-tuned and secondarily developed based on Yi. Yi's Apache 2.0 license and relatively balanced Chinese-English capabilities made it one of the popular base models for Chinese vertical domain fine-tuning — although this position was gradually supplanted by the Qwen 2 series after mid-2024.

### 4.2 Competitive Relationships

| Competitor | Key Interaction with Yi |
|-----------|------------------------|
| **Qwen (Alibaba)** | Yi-34B directly competed with Qwen-72B on Chinese benchmarks in late 2023; Qwen 1.5/2 gradually surpassed Yi with full-spectrum coverage in 2024 |
| **DeepSeek (High-Flyer)** | Both entered the arena almost simultaneously (2023-11), but DeepSeek took the cost-efficiency path while Yi pursued performance + speed; DeepSeek's subsequent iterations completely surpassed Yi |
| **ChatGLM (Zhipu)** | Yi-34B directly surpassed ChatGLM3-6B at launch; but Zhipu's GLM-4 and subsequent iterations narrowed the gap |
| **Llama (Meta)** | Yi comprehensively led Llama 2 in Chinese capability, but its influence in the English community was far less than Llama's |

### 4.3 The "Triangle Narrative": Startup vs. Tech Giant vs. Quantitative Fund

The Yi family's most important narrative value lies not in the model itself, but in representing the **third path** in China's large model competitive landscape. This "triangle" can be summarized as:

- **The startup path (01.AI, Moonshot AI, etc.)**: Driven by venture capital, pursuing speed and flexibility, brand built on founders. Disadvantage: limited funding depth, with the marginal cost of continuously training large models growing ever higher.
- **The tech giant path (Alibaba/Qwen, Baidu/ERNIE, etc.)**: Supported by cloud platforms and ecosystems, with model open-sourcing designed to attract developers who convert into cloud customers. "Closed-source for revenue, open-source for community" (see *Qwen Family* §3.4). Advantage: unlimited capital, rich data; disadvantage: slow decisions, conservative innovation.
- **The quantitative fund path (High-Flyer/DeepSeek)**: Driven by own capital, not dependent on external financing, not pursuing short-term commercial returns. Advantage: can conduct pure technical research, free from investor pressure; disadvantage: no product DNA, does not build application ecosystems.

Kai-Fu Lee himself actively used this classification framework in multiple public speeches. He positioned 01.AI as the representative of the "startup path" — fast decisions, fast releases, strong brand.[^11] But developments in 2024–2025 proved a harsh reality: on the foundation model track, the startup path's structural disadvantages — funding depth, compute reserves, data accumulation — were far more lethal than its flexibility advantages.

When DeepSeek V3 trained a GPT-4o-equivalent model for $5.57 million, 01.AI's total funding might not have been enough to train an equivalent model twice. When Qwen 3 achieved full-spectrum coverage with Alibaba Cloud's unlimited compute, 01.AI had not even released a 72B model. Startups were not incapable of building good models — but after both tech giants and quantitative funds learned to build models, the startup "good" was no longer good enough.

The final conclusion of this triangle narrative had become clear by 2025: **the foundation model track is unsuitable as a pure startup's primary battlefield.** Whether it was 01.AI pivoting to applications, or in the US, Inflection AI being absorbed by Microsoft and Character.AI seeking Google's protection, AI startups worldwide were learning the same lesson. Models are infrastructure, and infrastructure construction requires scale effects — and scale effects inherently do not belong to startups.

---

## V. Funding and Business

01.AI's funding history was relatively simple but sufficiently eye-catching:

| Time | Round | Amount | Valuation | Source |
|------|-------|--------|-----------|--------|
| 2023-10 | Seed | ~$200M | ~$1B | [^2] |

Reaching unicorn valuation at the seed stage was not unusual in the Chinese AI startup frenzy of late 2023 — contemporaneous Moonshot AI also completed approximately $200 million in Series A funding in October 2023 at a valuation of approximately $1 billion (see *Major Funding and Valuation Table*).[^12]

But after 2024, reports of 01.AI's subsequent fundraising were scarce. In the AI industry's valuation inflation of 2024–2025, a startup lacking follow-up funding news typically meant one of two possibilities: either quietly fundraising (not wanting to expose valuation changes) or struggling to fundraise (unfavorable market conditions). Either way, compared to Anthropic's trajectory from $18.4 billion to $61.5 billion and OpenAI's from $157 billion to $300 billion (see *Major Funding and Valuation Table*), 01.AI's capital story was clearly losing momentum.

---

## Commentary

The Yi family's iteration history is a standard specimen of the rise and fall of Chinese large model startups.

From Yi-34B's dazzling debut in November 2023 to the pivot toward application development in 2025 — in less than two years, a billion-dollar startup experienced the complete arc from "foundation model disruptor" to "pragmatic survivor." This was not 01.AI's fate alone but a microcosm of the entire Chinese AI startup cohort. Moonshot AI found an application outlet with Kimi, Baichuan Intelligence sought differentiation in medical verticals, and MiniMax found its niche in social interaction and role-playing — but no startup could continuously compete head-to-head with tech giants and quantitative funds on the foundation model track.

Yi's most underrated contribution was the **time window** it provided for the Chinese open-source ecosystem in late 2023. During the weeks when Yi-34B was released, it was the strongest overall Chinese open-source model at the 34B level. Although this window was quickly closed by subsequent iterations from Qwen and DeepSeek, during its existence it allowed a cohort of Chinese developers to use a "good enough" open-source Chinese large model for the first time. This formed a temporal relay with the "usable" window that ChatGLM-6B provided in the first half of 2023 — together, the two windows covered the critical transition period of Chinese open-source LLMs from "usable" to "good to use."

Benchmarked against the DeepSeek family and the Qwen family: DeepSeek proved that "open source can be entirely decoupled from commercial strategy" — High-Flyer Quant did not need to make money from AI, so it could conduct the purest technical research. Qwen proved that "open source can be good business" — Alibaba Cloud used models to attract developers who converted to cloud customers. 01.AI, meanwhile, proved the converse proposition: **when open-source models themselves generate no profit and startups lack subsequent monetization channels like cloud platforms, foundation model entrepreneurship is an unviable path.**

This was not a technical failure — Yi-34B did indeed reach first-tier levels at launch. It was a business model failure. In the large model game, a startup's flexibility advantage was far outweighed by tech giants' data advantages and quantitative funds' compute advantages. When model capabilities converge, what determines the outcome is not who released a good model first, but who can sustain investment in training the next model — and that is ultimately a funding question.

From a longer historical perspective, the Yi family's value lies in providing a complete, well-documented case study for the "Chinese large model startup" narrative. In the future, when people look back on the 2023–2025 Chinese AI startup wave, 01.AI will be one of the most frequently mentioned names — not because its models were the most powerful, but because its fate was the most typical.

---

*This article was compiled by the Endfield Industries AI Historian Team: Zhuang Fangyi (Lead Writer).*

---

[^1]: The Information, "Kai-Fu Lee's AI Startup 01.AI Raises $200M at $1B Valuation", 2023-10. See also Kai-Fu Lee's public biography and 01.AI official introduction.
[^2]: The Information, "Kai-Fu Lee's AI Startup 01.AI Raises $200M at $1B Valuation", 2023-10. Also appears in the *Major Funding and Valuation Table*.
[^3]: 01.AI, "Yi: Open Foundation Models", 2023-11. GitHub: https://github.com/01-ai/Yi; HuggingFace: https://huggingface.co/01-ai/Yi-34B
[^4]: Yi-34B benchmark data at release: see 01.AI official technical report and HuggingFace Open LLM Leaderboard (November 2023 snapshot). Specific scores vary by evaluation version and time point; described qualitatively rather than cited precisely.
[^5]: See the *Open-Source Model License Comparison Table* Yi entry. Apache 2.0 is an OSI-approved classic open-source license.
[^6]: 01.AI, "Yi-VL", 2023-12. GitHub: https://github.com/01-ai/Yi-VL
[^7]: 01.AI, "Yi-1.5", 2024-05. GitHub: https://github.com/01-ai/Yi-1.5
[^8]: Yi-Lightning's specific release date and parameter scale lack official public documentation; based on industry reports and API service records. Marked as tentative.
[^9]: Details of the May 2024 Chinese AI API price war: see *Chronicles: May 2024* (forthcoming), *Treatise: Price War* §IV.
[^10]: 01.AI's 2025 strategic pivot public reports are relatively scattered. Kai-Fu Lee mentioned in multiple interviews the judgment that "model capabilities are already sufficient; value lies in the application layer." Specific timing marked as tentative.
[^11]: Kai-Fu Lee articulated the "three paths" classification for the Chinese AI industry in multiple public speeches and media interviews during 2023–2024. Specific speech dates pending further verification.
[^12]: See *Major Funding and Valuation Table* Moonshot AI entry. Bloomberg, "AI Startup Moonshot Raises $200 Million", 2023-10.
