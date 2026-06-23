# The Biography of GPT-4

> GPT-4 defined the "frontier" standard of 2023. It outperformed 90% of bar exam takers, could read images and write poetry, could interpret memes—yet OpenAI this time told no one how large the model actually was. GPT-4 was not merely a stronger language model; it inaugurated the era of "black-box release" for large models and opened a new epoch where "multimodal is the default."

---

## I. Technical Background

GPT-3 (2020-06) demonstrated the emergent abilities of large-scale language models, and InstructGPT (2022-01) proved that alignment training could make models "follow instructions." But by early 2023, frontier large models faced three unsolved problems:

**First, multimodality.** GPT-3 was a pure text model—it could not view images, listen to audio, or understand the visual world. Yet human cognition is inherently multimodal—we simultaneously process text, images, sound, and spatial relationships. To what extent can a model that only understands text truly "understand" the world?

**Second, reasoning ceilings.** GPT-3.5 + RLHF was already a highly usable chat assistant, but still had clear shortcomings on complex reasoning tasks—the bar exam, SAT math, advanced programming—tasks that required not just "a bigger model," but some qualitative shift.

**Third, transparency versus trade secrets.** GPT-1 and GPT-2/3 both disclosed parameter scales and training details. But as models grew larger, training data grew more sensitive (copyright disputes, privacy concerns), and competitive pressure intensified—should OpenAI continue to disclose this information?

GPT-4 answered all three questions simultaneously—but the way it answered the third became its most controversial legacy.

---

## II. Core Innovations

### 2.1 Multimodality: from "can only read and write" to "can see the world"

GPT-4's most significant capability breakthrough was **image input**—it was the first GPT model to support visual understanding. Users could upload images, and GPT-4 would analyze image content and generate text descriptions, answer related questions, or even generate HTML code from hand-drawn sketches. [^1]

Demonstration examples included:
- Explaining the humor of a meme composed of multiple images
- Recommending recipes based on available ingredients from a photo of the inside of a refrigerator
- Analyzing charts, reading handwritten text, identifying objects in photographs
- Generating corresponding web page code from hand-drawn sketches

But there were limitations: GPT-4 could only **read** images, not **generate** them. Full "read + write" multimodal capability would have to wait for GPT-4o (2024-05), a year later. GPT-4's multimodality was more like "adding a pair of eyes" to the language model—visual information was encoded into tokens the model could process, flowing alongside text within the same Transformer.

From a technical standpoint, GPT-4's visual understanding relied on an independent visual encoder (reportedly a variant based on CLIP), which converted images into token sequences that were then concatenated with text tokens and fed into the model. This "visual encoder + language model" architecture was later widely adopted by LLaVA, Qwen-VL, Claude 3, and others.

### 2.2 A qualitative leap in reasoning

GPT-4 achieved remarkable scores on nearly every human examination:

| Examination/Benchmark | GPT-4 Score | GPT-3.5 Score | Improvement |
|-----------------------|-------------|---------------|-------------|
| Uniform Bar Exam | 90th percentile | 10th percentile | +80 |
| LSAT | 88th percentile | 40th percentile | +48 |
| SAT Evidence-Based Reading & Writing | 710/800 | 670/800 | +40 |
| GRE Quantitative | 163/170 | 147/170 | +16 |
| MMLU | 86.4% | 70.0% | +16.4 |
| HumanEval (coding) | 67.0% | 48.1% | +18.9 |

[^1]

Outperforming 90% of bar exam takers—this number had enormous symbolic significance in early 2023. It meant an AI model's performance on a professional examination had surpassed that of most human professionals. GPT-4 turned "AI surpassing humans" from a general statement into a quantifiable fact—though a vast gulf remained between "scoring well on an exam" and "doing good legal work."

### 2.3 Black-box release: a technical report that reports no technical details

GPT-4's technical report (arXiv:2303.08774) ran to 98 pages—but was almost entirely safety evaluations and benchmark results. **No parameter scale was disclosed, no training data volume, no model architecture.** This was a first in the GPT series. [^2]

OpenAI's stated reason was "the competitive landscape and safety implications"—if parameter scale and architectural details were disclosed, competitors could more easily replicate them, while potentially triggering safety concerns. External estimates (based on leaks and reverse engineering): GPT-4 had approximately **1.76 trillion parameters**, using a **Mixture-of-Experts (MoE) architecture** composed of 8 expert models of roughly 220B each, with 2 activated per inference. This estimate was never confirmed by OpenAI. [^3]

"A technical report that reports no technical details"—this irony became GPT-4's most enduring tag. It set the precedent for "black-box release" of large models: from then on, all closed-source frontier models (Claude, closed-source versions of Gemini) adopted similar opaque strategies. The open-source community's frustration with the "black box" became an important driving force for the subsequent open-source movement—"What OpenAI won't tell us, we'll figure out ourselves."

---

## III. Impact and Legacy

### 3.1 Redefining the "frontier" standard

At its release, GPT-4 was the best-performing AI model on benchmarks in the world. It defined the "frontier" standard for 2023–2024—every subsequent competitor (Claude 3, Gemini 1.0, Llama 3.1 405B) used GPT-4 as their benchmarking target.

Before GPT-4, "frontier" meant "highest score on specific benchmarks." After GPT-4, "frontier" became a multidimensional concept: not just leading on benchmarks, but simultaneously excelling in multimodal understanding, complex reasoning, safety alignment, and product experience. **GPT-4 transformed "frontier" from a ruler into a coordinate system.**

### 3.2 Multimodality becomes the default

GPT-4's multimodal capability directly influenced the design direction of all subsequent frontier models:

- **Claude 3** (2024-03): Added visual understanding
- **Gemini 1.0** (2023-12): Natively multimodal by design
- **Llama 3.2** (2024-09): Added visual capability
- **GPT-4o** (2024-05): Natively multimodal (text + audio + visual unified)

By 2025, no one was releasing pure-text frontier models. "Multimodal" went from being GPT-4's "special feature" to the "default form" of large models.

### 3.3 Open-source pursuit and closed-source legitimization

GPT-4's "black-box release" had a complex impact on the open-source movement.

On one hand, it galvanized the pursuit. Meta's Llama 2/3 series, Mistral's open-source models, DeepSeek's V/R series—one important driving force was "what OpenAI won't disclose, we will." GPT-4's opacity became the open-source community's best rallying cry.

On the other hand, it "legitimized" closed source. Before GPT-4, "not disclosing parameters" was considered a violation of academic spirit. After GPT-4, it became industry practice—competitors gradually accepted the rule that "frontier models need not disclose details." Closed source shifted from "unethical" to "a business choice."

### 3.4 A milestone in business models

GPT-4 was an exclusive feature of the ChatGPT Plus ($20/month) subscription. This pricing strategy created the AI industry's first major revenue stream—ChatGPT Plus rapidly became OpenAI's revenue pillar in 2023.

GPT-4 also drove the deep binding of Microsoft and OpenAI. New Bing (2023-02) was the first to integrate GPT-4 [^4], GitHub Copilot X was rebuilt on GPT-4, and Microsoft 365 Copilot was powered by GPT-4. GPT-4 was not just a model—it became the technical foundation of Microsoft's entire AI product strategy. ChatGPT's user growth rate broke all historical records for internet products. [^5]

### 3.5 Decline and absorption

GPT-4's frontier advantage held for approximately one year. In March 2024, Claude 3 Opus surpassed GPT-4 head-to-head on multiple benchmarks for the first time; in December of the same year, DeepSeek-V3 entered with GPT-4-level capability at 1% of the price. By 2025, GPT-4-level capability was no longer "frontier"—it had become the standard for all mid-tier and above models.

GPT-4's legacy is not its position as "the strongest model"—that position belonged to others long ago. Its legacy is **the rules it changed**: multimodal became the default, black-box became the norm, "surpassing humans on professional exams" became the baseline. These rules remain in effect long after GPT-4 ceased to be the strongest.

---

## Commentary

GPT-4's historical significance lies in simultaneously accomplishing two contradictory feats: **pushing the frontier further while closing the door tighter.**

On one hand, it pushed the capability boundary of large models to an unprecedented position—90th percentile on the bar exam, 710 on the SAT, 86.4% on MMLU—numbers that were unimaginable in 2022. GPT-4 turned "AI surpassing most humans on professional exams" from science fiction into fact, directly driving global public discourse on "which jobs AI will replace."

On the other hand, it pioneered the "black-box release"—no disclosed parameters, no disclosed architecture, no disclosed training data. Once that door closed, it never reopened. After GPT-4, all closed-source frontier models adopted similar opaque strategies. The open-source community's anger was real—but also understandable: a world-changing technology, and its creators refused to tell the world how it was made.

The tension between these two things was precisely the core contradiction of the 2023 AI industry: the stronger the model, the greater the risk of disclosure; but the less disclosed, the more fragile the industry's foundation of trust. GPT-4 proved with its capabilities that "a black box can be very powerful," but it did not answer "whether a black box should be this powerful"—a question that, in 2026, remains unresolved.

GPT-4 was the first model to make the "black box" a daily commodity—billions of people use some version of it every day, yet no one knows how large it actually is, how it was trained, or why it is sometimes brilliant and sometimes foolish. Whether this is liberation or dependence depends on which side you stand on. But regardless of which side, you cannot deny: GPT-4 changed the definition of "frontier"—and the new definition is still in effect.

---

*This entry was compiled by the Endfield Industrial Chronicle team: Zhuang Fangyi (lead author).*

---

[^1]: OpenAI Blog, "GPT-4", 2023-03-14. https://openai.com/research/gpt-4
[^2]: OpenAI, "GPT-4 Technical Report", arXiv:2303.08774, 2023-03-27. https://arxiv.org/abs/2303.08774
[^3]: Regarding speculation that GPT-4 is a ~1.76T MoE architecture, see: The Information, "GPT-4 Architecture, Infrastructure, Training Dataset, Costs, Vision, MoE", 2023-07 (composite report based on leaked information); George Hotz's discussion on Lex Fridman Podcast #367 (2023-03).
[^4]: The Verge, "Microsoft's Bing AI chatbot has been secretly using GPT-4", 2023-03-14. https://www.theverge.com/2023/3/14/23638725/microsoft-bing-chatgpt-gpt-4-ai-search
[^5]: Reuters, "ChatGPT sets record for fastest-growing user base - analyst note", 2023-02-01. https://www.reuters.com/technology/chatgpt-sets-record-fastest-growing-user-base-analyst-not-2023-02-01/
