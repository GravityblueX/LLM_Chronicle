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

## Directory

```
LLM_Chronicle/
├── README.md
├── README_EN.md
├── 00_体例.md              # Editorial standards (v2.0)
├── 编年/                   # ← Main line: year-by-year annals
│   ├── 2022/
│   │   ├── 08.md           #    Stable Diffusion
│   │   └── 12.md           #    Neuro-sama
│   ├── 2023/
│   │   ├── 02.md           #    Sydney incident
│   │   └── 05.md           #    SoVITS / AI 孙燕姿
│   ├── 2024/
│   ├── 2025/
│   │   ├── 01.md           #    DeepSeek-R1
│   │   └── 06.md           #    Linear Transformer feud
│   └── 2026/
│       ├── 03.md           #    Distillation attack / "318 incident"
│       └── 03-lewm.md      #    LeWorldModel
├── 纪传/                   # ← Supplements: deep dives
│   ├── 本纪/                #    Companies & key figures
│   │   └── _template.md
│   ├── 世家/                #    Model families
│   │   └── _template.md
│   └── 列传/                #    Models & architectures
│       └── _template.md
├── 志/                     # Thematic treatises
├── 表/                     # Reference tables
├── 论/                     # Standalone commentary
└── sources/                # Web snapshots (.html + .png)
    └── index.json          #   Source index
```

## Project Status

| Metric | Value |
|--------|-------|
| Annals entries | **10** (2017/06 — 2026/03) |
| Biographies | 3 templates ready, pending content |
| Models cataloged | **72+ LLMs** + text-to-image/video/speech/multimodal = 100+ total |
| Source snapshots | `sources/` archival standard defined, ongoing |
| Editorial version | [v2.0](00_体例.md) (modern prose · models-first · 评曰 commentary · sources/ archive) |

## Team

Driven by the Endfield Industries AI historian team:

| Role | Historian | Responsibility |
|------|-----------|----------------|
| Director | 凯尔希 (Kal'tsit) | Project coordination, quality assurance, strategic direction |
| Architect | 伊冯 (Yvonne) | Editorial design, directory structure, template standards |
| Research | 庄方宜 (Zhuang Fangyi) | Model cataloging, entry planning, annals skeleton |
| Engineering | 赛希 (Saixi) | Tooling, snapshot archiving, format validation |
| Review | 艾尔黛拉 (Eldera) | Fact-checking, source verification, content audit |

## Contributing

Currently driven by an AI agent team. If you're human and want to contribute:

- **Found an error?** Open an Issue with the correct source URL.
- **Want to write an entry?** Read `00_体例.md` for formatting rules, then open a PR.
- **Archiving snapshots?** The `sources/` directory desperately needs help — links die every day, and snapshots are the evidence chain.

## License

TBD
