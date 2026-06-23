# The Annals of Meta

> A social media company that inadvertently became the greatest champion of open-source AI. From FAIR's academic laboratory to the accidental leak of Llama, from Zuckerberg's "Open Source Manifesto" to the founding of Meta Superintelligence Labs — Meta's AI trajectory proves one thing: companies that don't need to make money from models are best suited to give them away for free.

---

## I. Overview

Meta (formerly Facebook) plays an extraordinarily unique role in the history of large language models: it is the parent company of the world's largest open-source LLM family, Llama, yet it has never made money from AI models. Meta's business model is social advertising — the feed ads across Facebook, Instagram, WhatsApp, and Threads are its revenue pillars. For Meta, AI is not the product itself, but **the engine behind the product**: content recommendations, ad targeting, creator tools, and virtual assistants.

This "free models, profitable ecosystem" positioning — analogous to Google's strategy with Android — made Meta the most influential and most controversial participant in the LLM open-source movement. Zuckerberg stated it bluntly in his 2024 "Open Source Manifesto": "We don't need to make money from models — we need a thriving open ecosystem to weaken competitors' moats." This was not charity; it was business strategy.

---

## II. Founding and Early Years

### 2.1 FAIR: AI capability accumulation from Facebook to Meta

Facebook AI Research (FAIR) was established in 2013, led by Yann LeCun (2018 Turing Award laureate). FAIR was positioned as a pure fundamental research laboratory — publishing papers, open-sourcing tools, carrying no direct product metrics.[^1]

FAIR made numerous important contributions in the early days of deep learning: Torch (deep learning framework), fairseq (sequence-to-sequence models), PyTorch (released in 2017, later becoming the de facto standard framework for AI research), and Detectron (object detection toolbox). PyTorch's influence surpassed FAIR itself — it became the preferred tool for AI researchers and engineers worldwide, and Meta's most important infrastructure contribution to the AI ecosystem.

FAIR's research style was closer to academia than to industry. LeCun repeatedly emphasized the importance of "open research" on public occasions — publishing papers, open-sourcing code, facilitating academic exchange. This culture planted the seeds for Llama's later open-source strategy.

### 2.2 From Facebook to Meta: The metaverse bet and the pivot

In October 2021, Mark Zuckerberg announced the company's name change from Facebook to **Meta**, betting on the "metaverse" — an immersive virtual world driven by VR/AR. Reality Labs accumulated losses exceeding $30 billion in 2022–2023.[^2]

The metaverse strategy's failure provided the backdrop for Meta's AI pivot. By 2023, the ChatGPT explosion made Zuckerberg realize that **AI was the next platform-level opportunity**, not VR. Meta rapidly redirected resources — scaling back Reality Labs budgets, expanding AI infrastructure construction (GPU clusters), and integrating AI into core products (Instagram recommendations, WhatsApp AI assistant, Facebook ad optimization).

The speed of this pivot was striking. From "metaverse company" to "AI company," Meta completed its rebranding in less than a year. Zuckerberg stated in a 2023 interview: "AI will be our biggest investment area for the coming years."

---

## III. Key Events

### 3.1 The Llama 1 leak (2023-02): Accidental open-source

On February 24, 2023, Meta released Llama 1 — originally intended to provide weights only to approved researchers. Four days later, all weights were uploaded to 4chan and BitTorrent. Llama became a de facto open-source model.[^3]

The leak was unplanned — it was the result of Meta attempting to control a model of enormous commercial value using academic distribution methods (Google Form applications). On the BitTorrent internet, such control was doomed to fail. But the effect of the leak was explosive: within weeks, global developers built hundreds of derivative models based on Llama 1, including Alpaca (Stanford, $600 fine-tuning), Vicuna (Berkeley), and GPT4All (Nomic AI).

Llama 1, with 13B parameters, outperformed the 175B GPT-3 on most benchmarks, validating the core claim of Chinchilla scaling laws — "data and parameters should scale equally." More importantly, the fine-tuning ecosystem that erupted after the leak made Meta realize something: **open-source was not damage control — it was a growth engine**.

(See "The Llama Family")

### 3.2 Llama 2: From accident to strategy (2023-07)

Four months later, Meta proactively released Llama 2 — the first commercially permitted open-source LLM. Distributed in partnership with Microsoft Azure. Llama 2 achieved 68.9% on MMLU, on par with GPT-3.5.[^4]

Llama 2's release marked Meta's strategic transformation from "accidental open-source" to "intentional open-source." Zuckerberg made it clear internally: Llama was not a charity project — open-source LLMs could weaken OpenAI and Google's closed-source moats while attracting developers into Meta's ecosystem.

### 3.3 The Open Source Manifesto and Llama 3.1 (2024-07): The peak of credibility

In July 2024, Meta released Llama 3.1 405B — the first time it matched GPT-4 on pure text capabilities. Simultaneously released was Zuckerberg's "Open Source Manifesto" — "Open Source AI Is the Path Forward."[^5]

Zuckerberg's core arguments had three points:
1. AI should not be controlled by a few closed-source companies — it should become public infrastructure, like Linux
2. Open-source AI is safer — more people can audit, fix, and improve it
3. Meta open-sourcing Llama is not charity — a thriving open ecosystem weakens competitors' moats

This manifesto was the highest-profile political declaration of the open-source AI movement. But its credibility was severely undermined just nine months later.

### 3.4 The Llama 4 benchmark controversy (2025-04): A stain on the open-source champion

In April 2025, Llama 4 was released — adopting MoE architecture for the first time. But the release was quickly engulfed in benchmark controversy: Meta submitted an "optimized experimental version" of Maverick to LMArena, achieving a high ranking near Gemini 2.5 Pro, but the actual open-sourced version's performance was significantly below that ranking.[^6]

The developer community's reaction was sharp: if Meta itself was gaming benchmarks, its claim that "open source is more transparent than closed source" lost credibility. While DeepSeek-R1 won community trust through full MIT open-source, Llama 4's benchmark controversy pushed the title of "open-source champion" away from Meta.

(See "The Llama Family," "Chronicles: April 2025")

### 3.5 Meta Superintelligence Labs (2025-06): Strategic escalation

In June 2025, Meta announced the establishment of **Meta Superintelligence Labs (MSL)**, led by Alexandr Wang (former Scale AI CEO).[^7]

MSL's founding marked a major escalation in Meta's AI strategy: from "open-sourcing Llama as a business strategy" to "directly competing for frontier models." Zuckerberg stated in internal memos that MSL's goal was "building the world's most powerful AI systems" — a stark departure from the earlier defensive positioning of "weakening competitors' moats."

After MSL's founding, it released the Llama series' successor, Muse Spark (2026-04), formally marking the end of the Llama brand era. Meta's AI story entered a new chapter — from "accidental open-source champion" to "direct contender for AGI."

---

## IV. Rise and Fall Analysis

### Phase One: The academic laboratory (2013–2022)

**What happened**: FAIR operated in a purely academic style — publishing papers, open-sourcing tools, carrying no product metrics. PyTorch became the global de facto standard for AI research.

**Why it happened**: LeCun's academic idealism + Facebook's ad revenue provided the organizational conditions for "not needing to make money from AI."

**What it left behind**: The PyTorch ecosystem; the brand DNA of open research; the cultural foundation for Llama's open-source strategy.

### Phase Two: The accidental open-source champion (2023–2024)

**What happened**: Llama 1 leaked → Llama 2 proactively opened for commercial use → The "Open Source Manifesto." Meta went from "accidental leak" to "intentional embrace" of open-source, becoming the world's greatest champion of open-source AI.

**Why it happened**: Zuckerberg identified "open source as the most effective tool for weakening competitors' moats." Meta's business model of not making money from models made it a natural candidate for an open-source strategy.

**What it left behind**: The world's largest open-source LLM ecosystem; a paradigmatic example of "open source as business strategy"; but the controversy of "not truly open source" (by OSI standards) persisted throughout.

### Phase Three: Strategic escalation (2025–present)

**What happened**: Llama 4 benchmark controversy damaged brand trust; MSL's founding marked the shift from "open-source champion" to "direct contender for AGI"; Muse Spark signaled the end of the Llama era.

**Why it happened**: DeepSeek-R1 and Qwen 3 redefined industry standards with "true open source" (MIT license); Llama's "restricted to research and partial commercial use" was no longer sufficient. Meta needed to prove itself on AI's "hard power" (frontier model capabilities), not just maintain influence through "open-source strategy."

**Lingering questions**: Can MSL produce models with genuine frontier competitiveness? Is Meta's "not needing to make money from models" positioning an advantage or a disadvantage in the AGI race?

---

## Appraisal

Meta's decade in AI is a documentary of "unintended consequences bearing unexpected fruit."

When FAIR was established, no one foresaw that a social media company would become the greatest champion of open-source AI. The Llama 1 leak was an accident, not a strategy — but the response to the accident showcased Zuckerberg's sharpest instinct as a business decision-maker: he did not pursue accountability from the leakers, did not tighten distribution policies, but four months later proactively released Llama 2 with commercial permissions. From "we can't control it" to "we don't need to control it" — the speed and decisiveness of this pivot was Meta's most consequential decision in AI.

The "Open Source Manifesto" was the peak of credibility; the Llama 4 benchmark controversy was the crack in trust. When your brand value is built on the image of "open-source champion," every shortcut damages your brand with tenfold backlash. DeepSeek-R1 demonstrated with MIT open-source what "true open source" looks like — Meta's "additional license required for over 700 million MAU" looked inadequate overnight.

But Meta's ultimate legacy may not lie in Llama itself — but in proving that **a company that doesn't need to make money from models is best suited to give models away**. This logic was already validated once with Google's Android: when models serve as "free infrastructure," their ecosystem growth rate far exceeds any closed-source alternative. Llama spawned thousands of derivative models within two years — something no closed-source API could achieve.

Zuckerberg's words remain the most precise summary of Meta's AI strategy: "We don't need to make money from models — we need a thriving open ecosystem to weaken competitors' moats." Not that we don't need to make money from models — but that we need open source to erode others' moats. The cold precision of that statement is fitting.

---

*This biography was compiled by the Endfield Industrial Historian Team: Zhuang Fangyi (lead writer).*

---

[^1]: Yann LeCun / Facebook, "FAIR: Facebook AI Research," 2013-12. https://ai.meta.com/research/
[^2]: Meta 2022 Q4 Earnings Report. Reality Labs lost approximately $13.7B in 2022 and $16.1B in 2023.
[^3]: Touvron et al., "LLaMA: Open and Efficient Foundation Language Models," arXiv:2302.13971, 2023-02. https://arxiv.org/abs/2302.13971
[^4]: Meta AI Blog, "Llama 2: Open Foundation and Fine-Tuned Chat Models," 2023-07. https://ai.meta.com/llama/ (original blog URL returns 400; this is the official Llama page)
[^5]: Mark Zuckerberg, "Open Source AI Is the Path Forward," Meta, 2024-07-23. https://about.fb.com/news/2024/07/open-source-ai-is-the-path-forward/
[^6]: Meta AI Blog, "Introducing Llama 4: Behemoths of the Open," 2025-04-05. https://ai.meta.com/blog/llama-4-multimodal-intelligence/
[^7]: The Information / Reuters, "Meta creates Superintelligence Labs, led by Alexandr Wang," 2025-06. (Comprehensive reporting)
