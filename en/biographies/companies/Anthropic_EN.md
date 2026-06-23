# The Annals of Anthropic

> A group of people who left OpenAI out of concern for AI safety founded a new company and built a model that is less skilled at writing poetry but far less likely to lie. Three years later, Anthropic's Claude became the industry-wide benchmark on programming benchmarks, its Artifacts redefined the AI interaction interface, and its "Constitutional AI" methodology pioneered an entirely different safety approach from OpenAI's RLHF.

---

## I. Overview

Anthropic was founded in 2021 by former OpenAI executives Dario Amodei and Daniela Amodei (brother and sister) along with others. The company name derives from the "anthropic principle," reflecting its core belief: AI systems should be centered on human interests.

Anthropic's greatest distinction is not its technical approach — both sides use Transformer architecture and RL alignment — but its **organizational DNA**. From day one, "safety" has been a core product attribute, not a feature bolted on after the fact. This "safety as the first principle" philosophy has permeated every key decision, from Constitutional AI to the Claude series.

---

## II. Founding: "The Company of Departees"

### 2.1 The schism from OpenAI

Between late 2020 and early 2021, a profound schism occurred within OpenAI. Vice President Dario Amodei and a group of employees believed that OpenAI was under-investing in safety under commercial pressure — model release cadences were accelerating, risk assessments were becoming more cursory, and the "open-source" commitment was being eroded by commercial interests.

These departees were OpenAI's safety faction — they had led the direction of OpenAI's safety research, including the preliminary work on RLHF. The catalyst for the split was the GPT-3 API commercialization decision (2020-06) — Dario and others believed that pushing a 175B-parameter model into the commercial market without any public safety assessment framework was a betrayal of OpenAI's original mission.

### 2.2 Early quietude

After its founding in 2021, Anthropic maintained a low profile for nearly two years. It did not publish blogs frequently, open APIs, or conduct media interviews as OpenAI had. Anthropic's core team worked quietly in Seattle and San Francisco on fundamental research — safety alignment methods, model reliability evaluation, and training infrastructure.

This "high-profile in research, low-profile in publicity" style later became Anthropic's signature brand characteristic.

---

## III. Key Events

### 3.1 Constitutional AI (2022-12): Defining the safety methodology

Anthropic developed **Constitutional AI** — a unique approach to safety alignment.

Unlike OpenAI's RLHF, Constitutional AI does not use human annotators to directly evaluate model outputs. Instead, it:
1. Gives the model an explicit "constitution" — drawn from the UN Universal Declaration of Human Rights, Apple's terms of service, and other public documents
2. Has the model **evaluate and modify its own outputs** — generate a response → self-critique using constitutional principles → revise the response
3. Uses AI-generated feedback to train a preference model
4. Fine-tunes the model with RL

The core insight is: **don't use humans to judge what's good — let the model judge using publicly auditable rules**. The scalability (no need for massive human annotation), transparency (rules are publicly accessible), and auditability of this approach are its three distinguishing features from RLHF.

The theoretical foundations of Constitutional AI were submitted to arXiv on December 15, 2022 — chronologically after OpenAI released ChatGPT on November 30, 2022, by approximately two weeks. This timing — immediately following ChatGPT's triggering of a global AI safety discourse — endowed it with an importance beyond expectations. When policymakers and regulators worldwide began asking "how do we ensure AI systems are safe?", Anthropic happened to have a fully developed methodology ready.

### 3.2 Claude's release on the same day as GPT-4 (2023-03): Coincidence or design

On March 14, 2023 — the same day GPT-4 was released — Anthropic opened the Claude API to its partners. Whether the simultaneous release was coincidental or intentional remains debated to this day. But side by side, the two launches precisely delineated the divergence of two paths in the LLM era:

Claude was positioned from the start as a "more honest, more harmless" conversational AI — not a "smarter" ChatGPT. While GPT-4 was oriented toward "stronger," Claude was oriented toward "safer." The difference was not in technical approach — it was in product positioning and values.

(See "Chronicles: March 2023")

### 3.3 Claude 3 (2024-03): Surpassing GPT-4 for the first time

In March 2024, Anthropic released the Claude 3 series (Opus/Sonnet/Haiku), **surpassing GPT-4** on mainstream benchmarks for the first time. Opus scored MMLU 86.8% vs GPT-4's 86.4%, and HumanEval 84.9% vs GPT-4's 67.0% — a qualitative leap.

More astute was Claude 3's three-tier pricing strategy: Opus was the most expensive and most capable — targeting extreme-accuracy scenarios where "cost is no object"; Sonnet was the default choice for most users — moderately priced with sufficient capability; Haiku was "embedded AI" — extremely fast, extremely cheap, suitable for real-time customer service and content moderation. This "three sizes, three price points, one brand" strategy later proved to be Anthropic's most effective weapon against OpenAI.

The milestone significance of Claude 3 lay not just in the numbers — but in ending the singular narrative of "GPT-4 is the strongest." From this moment, LLM competition entered a true three-way contest: GPT-4 had the best multimodality, Claude 3 had the best safety and honesty, and Gemini 1.5 had ultra-long context.

(See "Chronicles: March 2024")

### 3.4 Claude 3.5 Sonnet (2024-06): The collective choice of programmers

Skipping Opus and directly releasing an upgraded Sonnet was a subtle product signal: Anthropic was saying "we don't get stronger by getting bigger — we get stronger through better engineering."

Claude 3.5 Sonnet achieved stronger results at a lower price than Opus. On the programming benchmarks HumanEval (92.0%) and SWE-bench (40.6%), it dramatically outperformed GPT-4o — quickly making it the preferred AI programming assistant for developers worldwide. But its more enduring legacy was **Artifacts** — which completely redefined the AI conversation interface. From "chatting" to "building" — Artifacts allowed Claude to directly generate previewable code, components, and design documents within conversations.

(See "Chronicles: June 2024")

### 3.5 Claude 3.7 Sonnet (2025-02): The hybrid reasoning paradigm

Claude 3.7 Sonnet was Anthropic's response to OpenAI's o1 reasoning model — but the response was not "we'll make a reasoning model too."

Anthropic embedded a reasoning capability within the same model — users could choose "instant response" or "extended thinking." This was a paradigmatic rebuttal of OpenAI's "two-model family" approach. More importantly, Claude 3.7 Sonnet demonstrated **transparent thinking** — users could observe the model's reasoning process. This stood in stark contrast to o1's "hidden chain of thought" — and aligned with DeepSeek-R1's strategy of "public chain of thought."

(See "Chronicles: February 2025")

### 3.6 Claude 4 (2025-05): The commercial inflection point

Claude 4's technical innovations were incremental — but its commercial innovations were radical. Claude Max's "usage-based" pricing — $200/month plus charges for deep thinking usage — was the first clear signal of the AI industry's transition from "flat-rate subscription" to "pay-per-use."

The economics behind this inflection are irreversible: the computational cost of deep reasoning is dozens of times that of instant response. A flat monthly fee would force light users to subsidize heavy users (unfair), or cause service providers to lose money on heavy users (unsustainable). Anthropic was the first AI company to confront this logic head-on — regardless of Claude Max's short-term market performance, it accurately anticipated the direction of AI commercial pricing for the next decade.

(See "Chronicles: May 2025")

---

## IV. Rise and Fall Analysis

### Anthropic's structural advantages

Anthropic's core competitive advantage is that it does not need to compete head-to-head with OpenAI on "who is stronger" — it has an independent, differentiated value proposition not directly tied to capability metrics: **safety**.

While all other AI companies compete on benchmarks and user excitement, Anthropic competes on "trustworthiness." This strategy is especially effective in the following scenarios:
- Enterprise customers care more about controllability and compliance than generation length or creativity
- Government and public sector AI procurement — safety is the primary criterion in purchasing decisions
- Regulated industries such as healthcare, law, and finance — "honesty" is valued far more than "creativity"

### Anthropic's vulnerabilities

Anthropic's greatest vulnerability is: **"safety" as a product differentiator is fragile**. When competitors (especially GPT-4o and Gemini 2.5 Pro) also emphasize safety measures upon entering the market, "safety" is no longer Anthropic's exclusive label.

This is why Claude 3.5 Sonnet and Artifacts were so important — they extended Anthropic's differentiator from "safety" to "product experience" and "coding capability." "Strongest coding capability" is easier to build developer loyalty with than "safest" — because coding capability can be verified, while "safety" is amorphous.

From Claude 3 to Claude 4, Anthropic's narrative underwent a major evolution: from "the safest AI" → "the safest AI, also very useful" → "one of the most useful AIs, also safe." Safety shifted from the sole proposition to one among multiple diversified propositions.

### The fundamental difference between Anthropic and OpenAI

These two companies split from the same founders — but seven years later, they have become two entirely different species:

OpenAI's moat is brand; Anthropic's moat is trust.
OpenAI's goal is to define "frontier capabilities"; Anthropic's goal is to define "frontier safety."
OpenAI grows by generating excitement; Anthropic grows by building trust.

This duality is fundamental in the 2025 AI industry — it determines not only the fates of both companies, but how the entire AI industry balances "capability" and "safety."

---

## Appraisal

Anthropic is the most extraordinary company in AI history. It was born from an "anxiety about safety" — not from a technological breakthrough, nor from a business opportunity.

Its Constitutional AI methodology — having the model evaluate its own outputs using publicly auditable rules — is a solution conceptually more elegant than RLHF. Its Claude 3 surpassed GPT-4 on benchmarks for the first time — evidence that "safety faction" entrepreneurs could also match up technically. Its Artifacts and hybrid reasoning — proved that Anthropic is not only "the safe company" but also "the company with product insight."

But Anthropic also faces a profound paradox: its very existence validates many people's concerns about AI safety — yet it also validates that a company built around safety as its core value can succeed commercially. Does this mean that "safety" need not be guaranteed by an independent nonprofit organization — but can instead be guaranteed by a "for-profit company that sells safety as its value proposition"? If the answer is yes, then Anthropic's commercial success itself is deconstructing the logical foundation of OpenAI's original mission (that AGI should be safe and not profit-driven).

Anthropic's legacy — regardless of whether this company ultimately becomes the next OpenAI — is that it proved a fundamental proposition through three years of product delivery: **"safety" and "strength" are not mutually exclusive**. When the industry's prevailing narrative was "the stronger, the less safe," the Claude series has consistently demonstrated in the opposite direction that "stronger can be safer." The durability of this proof — especially as competitors also advance their safety capabilities — will determine Anthropic's ultimate place in the history of AI.

---

*This biography was compiled by the Endfield Industrial Historian Team: Zhuang Fangyi (lead writer).*

---

[^1]: Bai et al., "Constitutional AI: Harmlessness from AI Feedback," arXiv:2212.08073, submitted 2022-12-15. https://arxiv.org/abs/2212.08073; OpenAI Blog, "Introducing ChatGPT," 2022-11-30. https://openai.com/index/chatgpt/
[^2]: Anthropic Blog, "Introducing Claude," 2023-03-14. https://www.anthropic.com/news/introducing-claude
[^3]: Anthropic Blog, "Introducing the next generation of Claude," 2024-03-04. https://www.anthropic.com/news/claude-3-family
[^4]: Anthropic Blog, "Claude 3.5 Sonnet," 2024-06-20. https://www.anthropic.com/news/claude-3-5-sonnet
[^5]: Anthropic Blog, "Claude 3.7 Sonnet and Claude Code," 2025-02-24. https://www.anthropic.com/news/claude-3-7-sonnet
[^6]: Anthropic Blog, "Introducing the Claude 4 family," 2025-05-22. https://www.anthropic.com/news/claude-4
