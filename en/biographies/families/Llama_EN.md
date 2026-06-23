# Llama Family

> Llama is the flagship series of open-source large language models. From an accidental 4chan leak, to Zuckerberg's "open-source manifesto," to the Llama 4 evaluation controversy — Llama's iteration history is the most complete specimen of the "open-source vs. closed-source" debate in the large model era.

---

## I. Overview

The Llama series was developed by Meta AI (formerly Facebook AI Research). From its accidental leak in early 2023 to the release and ensuing controversy of Llama 4 in 2025, Llama transformed in just two years from a "leaked research model" into the world's most influential open-source LLM family.

Llama's core contribution did not lie in technical originality — its underlying architecture was always the Transformer decoder — but in **proving that open source could serve as a viable AI business strategy**. Zuckerberg stated explicitly in 2024: Meta's way of making money from AI was not selling models, but using AI to enhance its own social network products. This "models free, ecosystem profitable" strategy — analogous to Google's approach with Android — profoundly reshaped the competitive landscape of the large model industry.

---

## II. Generational Evolution

| Generation | Release Date | Parameter Scale | Core Innovation | License Status |
|------------|--------------|-----------------|-----------------|----------------|
| Llama 1 | 2023-02 | 7B/13B/33B/65B | "Small models can punch above their weight" | Research license (de facto open-source after leak) |
| Llama 2 | 2023-07 | 7B/13B/70B | First Llama permitting commercial use | Commercial license (MAU >700M requires additional license) |
| Llama 3 | 2024-04 | 8B/70B | 15T tokens training data | Open-source (not OSI-certified) |
| Llama 3.1 | 2024-07 | 8B/70B/**405B** | First GPT-4 parity + open-source manifesto | Same as above |
| Llama 4 | 2025-04 | Scout 109B / Maverick 400B | First MoE Llama + evaluation controversy | Same as above |
| Muse Spark | 2026-04 | Undisclosed | Llama successor, released by Meta Superintelligence Labs | TBD |

### 2.1 Llama 1: "Open-Sourced" Within Four Days

On February 24, 2023, Meta released Llama 1 — originally intended to provide weights only to approved researchers. Four days later, all weights were uploaded to 4chan and BitTorrent. Llama had become a de facto open-source model.

This was an accident — but also one of the most successful "unintentional marketing" campaigns ever. After the leak, developers worldwide built hundreds of fine-tuned versions based on Llama 1 — Alpaca (Stanford), Vicuna (Berkeley), GPT4All (Nomic AI), and more. Llama 1, with 13B parameters, surpassed the 175B GPT-3 on most benchmarks, validating the core claim of the Chinchilla scaling law — "data and parameters should grow in equal proportion."

The leak itself also exposed the chaotic state of the AI industry in early 2023: the world's largest social network company attempted to control a model of enormous commercial value using traditional academic distribution methods — an endeavor completely impossible in the BitTorrent era.

(See *Chronicles: February 2023*)

### 2.2 Llama 2: From Accident to Strategy

Four months later, Meta proactively released Llama 2 — with an open-source commercial license. This was the first truly "commercial open-source large-scale language model." Key change: **commercial use permitted.** Key strategic move: **partnership with Microsoft Azure for distribution** — Microsoft simultaneously bet on OpenAI (closed-source) and Meta (open-source), hedging against uncertainty about who would ultimately prevail.

Llama 2 achieved 68.9% on MMLU — still below GPT-4's 86.4%, but on par with GPT-3.5, and fully open-source and commercially usable. Llama 2-Chat 70B roughly matched ChatGPT (GPT-3.5) in human evaluations. This result proved that open source could reach the previous generation's closed-source level within 12 months — though it could not yet catch up to the latest generation.

(See *Chronicles: July 2023*)

### 2.3 Llama 3 / 3.1: 405B and the Open-Source Manifesto

In April 2024, Llama 3's 8B/70B variants were released — resetting the open-source standard with 15T tokens of training data. In July 2024, Llama 3.1 405B was released — 405 billion parameters, achieving parity with GPT-4 on pure-text capabilities for the first time.

Released alongside Llama 3.1 was Zuckerberg's **"Open-Source Manifesto"** — "Open Source AI Is the Path Forward." This blog post quickly became the highest-profile political declaration of the open-source AI movement. Zuckerberg's core arguments:
1. AI should not be controlled by a handful of closed-source companies — it should become industry-wide public infrastructure, like Linux
2. Open-source AI is safer — because more people can audit, fix, and improve it
3. Meta open-sourcing Llama is not charity — it is business strategy. "A thriving open ecosystem weakens competitors' moats"

But this manifesto also exposed an underlying contradiction: the 405B Llama 3.1's license was **not OSI-certified open source** — it contained restrictions requiring "additional license for MAU exceeding 700 million" and did not disclose training data. This made Llama's "open-source" status perpetually contested — it was not "true open source" but rather a form of "open distribution."

(See *Chronicles: July 2024*)

### 2.4 Llama 4: The MoE Pivot and Evaluation Scandal

In April 2025, Llama 4 adopted the MoE architecture for the first time. Scout (109B/17B active, 10M token context) was Meta's direct response to Google's ultra-long context advantage; Maverick (400B/17B active, 128 experts) targeted GPT-4o-level performance.

But Llama 4's release was quickly consumed by evaluation controversy. Meta submitted an **"optimized experimental version"** of Maverick to LMArena, achieving rankings close to Gemini 2.5 Pro — but the actual open-sourced version's performance was noticeably lower. Developer community reactions were sharp: if Meta itself was gaming the leaderboard, its advocacy that "open source is more transparent than closed source" lost all credibility. While DeepSeek-R1, fully open-sourced under MIT license (including chain of thought), was winning community trust, Llama 4's evaluation controversy pushed the title of "open-source champion" away from Meta.

Llama 4's release also marked a transition — in the open-source LLM domain, the role of "standard-bearer" had shifted from Meta to DeepSeek and Qwen.

(See *Chronicles: April 2025*)

### 2.5 Muse Spark: The End of Llama and a New Beginning

In April 2026, Meta Superintelligence Labs released **Muse Spark** — the official successor to the Llama series. Meta explicitly stated this was an entirely new model family, no longer an "iterative version" of Llama, formally marking the end of an era.

---

## III. Technical Route Evolution

### 3.1 From Dense to MoE

Llama 1/2/3 all employed dense Transformer decoders — the same architecture as the GPT series. Llama 4 was the first to shift to MoE (Mixture of Experts) — aligning with DeepSeek and Mixtral. This transition was driven by two forces:
- Inference cost control: Scaling from 448M to 405B parameters required enormous inference costs. MoE's sparse activation offered a way to control costs without sacrificing capability.
- Catching up to industry standards: After 2024, all frontier models (GPT-4, Gemini, Mixtral, DeepSeek-V2) adopted MoE or MoE-like architectures. Dense models became unsustainable at scale.

### 3.2 The Evolution of "Open Source" Definitions

Llama's license status is the central case study in the large model "open source" definition debate:

| Generation | Open-Source? | Actual Status |
|------------|-------------|---------------|
| Llama 1 | ❌ Research license | De facto open-source after leak |
| Llama 2 | ✅ Commercial license | Restricted — "open source" |
| Llama 3/3.1 | ✅ Commercial license | Same, 405B sparked "true open source" debate |
| Llama 4 | ✅ Commercial license | Same, evaluation controversy damaged community trust |

The OSI (Open Source Initiative) published the formal definition of open-source AI (OSAID) in late 2024. Llama 3.1's and subsequent license terms did not comply with OSAID — because they restricted users with "MAU exceeding 700 million" and did not disclose training data. Conclusion: Llama was "open-weight," not "open-source AI."

### 3.3 Historical Judgment on the Open-Source Manifesto

Zuckerberg's "Open-Source Manifesto" was published in July 2024 — the credibility peak of the Llama series. But merely nine months later, Llama 4's evaluation controversy severely undermined the manifesto's persuasive power. The core argument of the open-source manifesto — "open source is more transparent and more auditable" — only held persuasive force when the open-source practitioner itself maintained transparency. When Meta began manipulating evaluations, the manifesto was reduced to empty public relations rhetoric.

---

## IV. Ecosystem and Impact

### 4.1 The Seed of the Global Open-Source Ecosystem

Llama 1's leak was the "Big Bang" moment for the global open-source LLM ecosystem. From Alpaca ($600 fine-tuning) to Vicuna to Orca to Mistral (founded by former Llama team members), the derivative models triggered by Llama numbered in the thousands.

### 4.2 Competitive Relationships

Llama's defining competitive relationship was with OpenAI. Llama 3.1 405B was the first to achieve parity with GPT-4 on pure-text capabilities, proving that "open source can reach the closed-source frontier." But Llama was always the **pursuer** — from GPT-3 to GPT-4 to GPT-4o, each generation of Llama caught up to the previous generation of GPT but never surpassed the current GPT frontier at launch. DeepSeek-R1 changed this paradigm in January 2025 — an MIT-licensed open-source reasoning model that directly targeted the current o1 frontier, not the previous version.

### 4.3 Industry Impact

- Llama proved that "open source can be a business strategy" — Meta does not make money from models; it profits by weakening competitors' moats
- Llama drove thousands of fine-tuned models globally, millions of HuggingFace downloads — forming the largest open-source LLM ecosystem
- Llama's open-source manifesto catalyzed an industry-wide debate about "what constitutes true open-source AI" — ultimately pushing the OSI to publish OSAID

---

## Commentary

Llama's history is a chronicle of "the logic of information dissemination overcoming corporate control."

Llama 1's accidental leak proved a fundamental law of the large model era: on the BitTorrent internet, no company can control a model's weights. Llama 2's proactive commercial open-sourcing demonstrated that Meta — as a company that does not need to make money from models — was the most natural candidate for "open source" as a business strategy. Llama 3.1's 405B and open-source manifesto proved a more subtle point — that "open source" itself could become a brand asset, used to shape public perception, recruit developers, and weaken competitors.

But it was precisely this "open source as brand" logic that led to Llama 4's evaluation controversy. When your brand value is built on the image of "open-source champion," every shortcut damages your brand with tenfold backlash. DeepSeek-R1 and Qwen 3 redefined industry standards in 2025 with "genuinely open source" (MIT license + public chain of thought) — overnight, Llama's "open-source with restrictions on commercial use" no longer seemed sufficient.

The true legacy of the Llama series is this: it demonstrated that open-source LLMs are not only technically feasible but also commercially desirable — provided you have a product ecosystem that does not depend on model revenue. Zuckerberg's words remain the most incisive summary of Llama: "We don't need to make money from models — we need a thriving open ecosystem to weaken competitors' moats."

---

*This article was compiled by the Endfield Industries AI Historian Team: Zhuang Fangyi (Lead Writer).*

---

[^1]: Touvron et al., "LLaMA: Open and Efficient Foundation Language Models", arXiv:2302.13971, 2023-02. https://arxiv.org/abs/2302.13971
[^2]: Meta AI Blog, "Llama 2: Open Foundation and Fine-Tuned Chat Models", 2023-07. https://ai.meta.com/blog/llama-2/
[^3]: Meta AI Blog, "Introducing Llama 3.1: Our most capable models to date", 2024-07-23. https://ai.meta.com/blog/meta-llama-3-1/
[^4]: Mark Zuckerberg, "Open Source AI Is the Path Forward", Meta, 2024-07-23. https://about.fb.com/news/2024/07/open-source-ai-is-the-path-forward/
[^5]: Meta AI Blog, "Introducing Llama 4: Behemoths of the Open", 2025-04-05. https://ai.meta.com/blog/llama-4-multimodal-intelligence/
