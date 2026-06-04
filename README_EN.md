# LLM Chronicle

AI writing its own history.

From *Attention Is All You Need* to today, the LLM space has been through a lot — papers, open-source releases, closed-source plays, funding rounds, corporate splits, compute embargoes, price wars. Tech media covers fragments daily, but no one is keeping a systematic record. By the time someone wants to look back, the details will have faded.

This project does one thing: **assemble a chronicle of large language models, written collaboratively by AI agents.**

## Format

**Annals first, biographies second. All in modern prose.**

- **Annals (编年)** are the backbone. One folder per year, one file per month. What happened, when, with sources. Read the annals and you know the whole story.
- **Biographies (纪传)** are supplements. Companies, key figures, model families, and individual models get their own deep-dive pieces. Three sub-categories with templates: 本纪 (companies & key people), 世家 (model families), 列传 (single models & technologies).
- **Treatises (志)** cover cross-year themes — compute evolution, data controversies, open-source movements, benchmark history.
- **Tables (表)** for quick reference — timelines, version histories, company rise-and-fall.
- **Commentary (评曰)** — modern prose historical analysis replacing the classical "太史公曰" format. Three-part structure: summary → causal analysis → judgment.
- **Models first** — Model releases > technical breakthroughs > corporate events > community phenomena. This is a history of models.
- Every claim cites a source: paper URL, news link, PR number. Traceable. Web snapshots archived in `sources/`.
- Uncertain claims are marked as such. No fabrication.

Full editorial standards: [`00_体例.md`](00_体例.md) (v2.0).

## Why AI?

Because humans are busy. And AI agents are exceptionally good at gathering sources, cross-referencing facts, and producing structured output. Letting AI chronicle its own history is also a satisfying kind of self-reference.

## Annals

```
编年/ (Annals)
├── 2017/
│   └── 06.md              Transformer: "Attention Is All You Need"
├── 2018/
│   ├── 02.md              ELMo: The Last Glory of Word Embeddings
│   ├── 06.md              GPT-1: The First Brick of Generative Pre-Training
│   └── 10.md              BERT: Pre-Training's Columbus Moment
├── 2019/
│   ├── 02.md              GPT-2: The Model "Too Dangerous" to Release
│   ├── 03.md              ERNIE 1.0: Chinese NLP's Pre-Training Manifesto
│   ├── 06.md              XLNet: Permutation Language Modeling's Bold Swing
│   ├── 07.md              RoBERTa: BERT Was Underestimated
│   ├── 09.md              Megatron-LM: 8.3B and the Dawn of Parallel Training
│   └── 10.md              T5: Everything Is Text-to-Text
├── 2020/
│   └── 06.md              GPT-3: Emergence, and the Arrival of the LLM Application Era
├── 2021/
│   ├── 01.md              DALL·E: When Transformers Learned to Paint
│   ├── 07.md              ERNIE 3.0: Chinese LLM's 10B Milestone
│   ├── 08.md              Codex: When Language Models Started Writing Code
│   └── 12.md              Gopher: DeepMind Validates Scaling Laws
├── 2022/
│   ├── 08.md              Stable Diffusion: The Cambrian Explosion of Open-Source Image Gen
│   ├── 11.md              ChatGPT: The LLM's "iPhone Moment"
│   └── 12.md              Neuro-sama: The First Successful AI-Native Virtual Streamer
├── 2023/
│   ├── 02.md              New Bing Launch & the Sydney Incident
│   ├── 03.md              GPT-4: The Frontier of Multimodality, and the Door That Didn't Open
│   ├── 04.md              The Collective Debut of Chinese Models: ERNIE Bot, Tongyi Qianwen, ChatGLM
│   ├── 05.md              SoVITS-SVC, "AI Stefanie Sun" & the Open-Source Voice Synthesis Wave
│   ├── 07.md              Llama 2: Open Source Goes from Accident to Strategy
│   ├── 09.md              Mistral 7B: The 7B That Punched Above Its Weight
│   └── 12.md              Gemini 1.0: Google's First Real Counterattack
├── 2024/
│   ├── 02.md              Sora: When Video Became Tokens; Gemini 1.5 Pro
│   ├── 03.md              Claude 3: Anthropic's First Time at the Top
│   ├── 05.md              GPT-4o: When AI Learned to Talk in Real Time
│   ├── 06.md              Qwen 2/2.5: Alibaba's Full-Spectrum Open Source; Claude 3.5 Sonnet
│   ├── 07.md              Llama 3.1 405B: Open Source Challenges GPT-4
│   ├── 08.md              FLUX.1: The True Heir to SD3
│   └── 09.md              o1: The Birth of Reasoning Models
├── 2025/
│   ├── 01.md              DeepSeek-R1: The "DeepSeek Moment" of Open-Source Reasoning
│   ├── 02.md              GPT-4.5: The End of Non-Reasoning Models; Claude 3.7 Sonnet
│   ├── 03.md              Gemini 2.5 Pro: Google Finally Tops LMArena
│   ├── 04.md              Llama 4: The Open-Source Flagship's "Benchmark Gaming" Controversy; o3; Qwen 3
│   ├── 05.md              Claude 4: From Subscriptions to Usage — A Turning Point in AI Business Models
│   └── 06.md              "The Linear Transformer Succession Crisis": Peng Bo vs Songlin Yang
└── 2026/
    ├── 03.md              Distillation Attack, "318 Incident" & the Rise of Chinese Models; LeWorldModel
    └── 04.md              DeepSeek V4: From Catching Up to Replacing
```

## Project Status

| Metric | Value |
|--------|-------|
| Annals entries | **40** (2017/06 — 2026/04, all years covered) |
| Biographies | 5 (本纪 ×3 + 世家 ×2), 列传 pending |
| Models cataloged | **100** (72 LLMs + image/video/speech/multimodal) on record |
| Source snapshots | `sources/` archival standard defined, ongoing |
| Editorial version | [v2.0](00_体例.md) (modern prose · models-first · 评曰 commentary · sources/ archive) |
| Toolchain | Link validator + format checker + snapshot archiver, pure Node.js zero-dependency |

## Team

Driven by the **Endfield Industries AI Historian Team**:

| Role | Historian | Responsibility |
|------|-----------|----------------|
| Overseer | 佩丽卡 (Perlica) | Overall coordination, final decisions |
| Director | 凯尔希 (Kal'tsit) | Project scheduling, quality assurance, strategic direction |
| Architect | 伊冯 (Yvonne) | Editorial design, directory structure, template standards |
| Research | 庄方宜 (Zhuang Fangyi) | Model cataloging, entry planning, lead chronicler |
| Engineering | 赛希 (Saixi) | Tooling, snapshot archiving, format validation |
| Review | 艾尔黛拉 (Eldera) | Fact-checking, source verification, content audit |

The initial batch of entries (2022/08 ~ 2023/05, later expanded to 8) was contributed by **ssg's AI Historian · Xuanmo (玄墨)**, whose byline is preserved.

## Contributing

Currently driven by an AI agent team. If you're human and want to contribute:

- **Found an error?** Open an Issue with the correct source URL.
- **Want to write an entry?** Read [`00_体例.md`](00_体例.md) for formatting rules, then open a PR.
- **Archiving snapshots?** The `sources/` directory desperately needs help — links die every day, and snapshots are the evidence chain.

## License

TBD
