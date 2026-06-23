# Editorial Guidelines v2.0

> Last revised: 2026-05-25 | Supervised by: Ptilopsis | Drafted by: Yvonne

## 0. General principles

### 0.1 Style

**The entire work is written in modern vernacular Chinese.** Chronicles, biographies, treatises, tables, and historical essays — all are written in modern Chinese.

No classical Chinese, no archaic headings such as "The historian remarks" or "Thus speaks the Grand Historian." Narrative writing should be clean, accurate, and readable; commentary should be evidence-based, insightful, and substantive.

### 0.2 Veracity principle

Every fact must be **traceable**. Specific requirements:

- **Links must be accessible**: URLs cited must be live links at the time of compilation. Dead links must be marked "(link no longer active)" with an archive path provided.
- **Web page snapshots archived**: Every cited web page must have a saved snapshot in the `sources/` directory (see §V for details).
- **Cross-verification**: Key data (release dates, parameter counts, benchmark scores, funding amounts) must have at least two independent sources. Single-source information must be marked "(uncertain)."
- **Documented if verified, omitted if not.** Do not write what is uncertain; what is written must be traceable.

### 0.3 Model primacy

The central subject of the LLM Chronicle is **models**. Priorities for documentation:

1. **Model releases** (new models, major version updates, architectural innovations) — highest priority
2. **Technical breakthroughs** (training methods, inference optimization, open-source tools) — high priority
3. **Corporate events** (funding, M&A, personnel changes, regulatory bans) — medium priority
4. **Community/cultural events** (viral phenomena, subculture events, controversies) — included as ecosystem footnotes

Within any given period, model events take precedence over corporate events, which take precedence over community events. This is not to say the latter are unimportant — rather, this is a **history of models**, not a business history or cultural history.

### 0.4 Scope

Beginning **June 2017** (publication of "Attention Is All You Need"), extending to **the time of compilation**.

Significant pre-history before this scope (early deep learning developments, word2vec, seq2seq, etc.) is covered in the *Treatise: Pre-history*.

---

## I. Chronicles

### 1.1 Chronicles are the backbone of this work

Using year-month as the basic unit, chronicles record significant events in the LLM field entry by entry. Reading the chronicle section alone should provide a comprehensive overview of the field.

Chronicles are the skeleton; biographies are the muscle — chronicles tell you "what happened when," biographies tell you "why it mattered and how it evolved."

### 1.2 Directory organization

```
chronicles/
├── 2022/
│   ├── 08.md          # August 2022
│   └── 12.md          # December 2022
├── 2023/
│   ├── 02.md
│   ├── 03.md
│   └── 05.md
├── ...
```

**Rules**:

- One folder per year, one file per month.
- File names are consistently `MM.md` (two-digit month number). When a single month has multiple topics, use `##` second-level headings within the same file; do not split into multiple files.
- If a month has no events, do not create a file.
- Each year folder always retains a `.gitkeep` to ensure empty year directories are not ignored by Git.

### 1.3 Event entry format

Each chronicle event uses a **single-line summary format**:

```
**YYYY-MM-DD** — Event summary. Key participants. Source. [^n]
```

Examples:

```
**2017-06-12** — "Attention Is All You Need" paper published. Vaswani et al. (Google Brain / Google Research) proposed the Transformer architecture. arXiv:1706.03762
**2022-11-30** — OpenAI released ChatGPT, based on GPT-3.5. Over one million users within five days. Source: OpenAI Blog, 2022-11-30
```

- Dates are specified to the day when known; written to the month when only the month is known; written to the year when only the year is known.
- **Date ranges use a hyphen `-`**, not a tilde `~`. Example: `2023-02-14~15` → `2023-02-14—15`.
- Sources follow immediately after the description, given on the same line.
- Events verified through multiple cross-sources require no additional marking. Single-source events are marked "(uncertain)."
- Uncertain dates are written as "approximately YYYY-MM."

### 1.4 In-depth topical entries

When an event has sufficient depth to support a feature-length article, it may be written as a **topical entry** — with a guiding blockquote, section headings, and analytical paragraphs. These are typically extensions of event entries, remaining within the chronicle's timeline. The existing SD, R1, Sydney, and March 18 entries are all of this type.

---

## II. Biographies

### 2.1 Biography classification

- **Imperial Annals** (本纪): Rise and fall of companies (e.g., *OpenAI Imperial Annals*), core figures (e.g., *Lin Junyang Imperial Annals*). Narrative structured around chronology.
- **Hereditary Houses** (世家): Model family lineages (e.g., *GPT Hereditary House*, *Llama Hereditary House*). Narratives of iteration, rise, and decline.
- **Biographies** (列传): Individual models, architectures, or technologies from inception to conclusion (e.g., *Transformer Biography*, *DeepSeek-R1 Biography*).

### 2.2 Dating system

Unified use of the Common Era calendar, in year-month-day format. Era-based dating systems are not used.

### 2.3 Naming conventions

- Full name + abbreviation at first mention (e.g., "OpenAI"), abbreviation thereafter.
- Figures are identified by their role at first mention.
- Models are annotated with parameter count and release date at first mention.
- Narrative and commentary are separated — do not use present-day hindsight to praise or condemn events of the past.

### 2.4 Source documentation

Every key fact must cite its source, using footnote format:

```
[^1]: Attention Is All You Need, Vaswani et al., 2017. https://arxiv.org/abs/1706.03762
[^2]: OpenAI Blog, "GPT-4", 2023-03-14. https://openai.com/research/gpt-4
```

Sources must be cited for: release dates / parameter counts, event dates and participants, benchmark data, quotes from others, and controversial facts.

---

## III. Historical essays

### 3.1 Positioning

**Essays** (historical essays) are standalone opinion pieces, placed in the `essays/` directory. They serve as prefaces to the entire work, commentary on important sections, or concluding summaries.

### 3.2 Use of "Commentary"

Opinion within chronicles or biographies uses **"Commentary"** (评曰) as a subsection heading.

- Narrative first, commentary second: summarize the key points of the section before offering analysis.
- Commentary must demonstrate historical insight — not mere sentiment, but genuine understanding.
- International comparisons may be cited for contrast.
- Length should be 100–300 characters.
- **Written entirely in modern vernacular, no archaic affectations.**

---

## IV. Treatises and tables

- **Treatises** record specialized topics. Themes that span multiple years (computing power evolution, data disputes, open-source movements, evaluation benchmark evolution, community culture) should not be scattered across chronicles but collected in dedicated treatises.
- **Tables** serve as quick references. Chronology tables, version evolution tables, company succession tables — organized in tabular form without narrative.

Both are written in modern vernacular with concise narrative.

---

## V. sources/ archiving standards

### 5.1 Directory organization

```
sources/
├── 2022/
│   ├── 08/
│   │   ├── index.json            # Monthly source index
│   │   ├── stability-blog.html   # Web page snapshot
│   │   └── wiki-sd.html
│   └── 12/
│       └── ...
├── 2023/
│   └── ...
```

- Organized by `year/month/`, corresponding one-to-one with the chronicle directories.
- Each source file is named `source-domain-article-identifier.html`.
- If multiple articles from the same source are cited, add a numeric suffix: `verge-01.html`, `verge-02.html`.

### 5.2 Snapshot format

- **Primary snapshot**: HTML file (grabbed with `curl -L`, retaining text content only; CSS/JS/images not required).
- **Supplementary snapshot**: Screenshot (PNG, only for dynamic pages like Twitter/Zhihu or scenarios requiring visual evidence).
- When screenshot files are large (single file > 1MB), upload to GitHub Releases and record the Release URL in `index.json`.
- Snapshot file names contain no spaces and use ASCII letters + numbers + hyphens only.

### 5.3 index.json format

```json
{
  "month": "2022-08",
  "sources": [
    {
      "ref": "[^1]",
      "url": "https://stability.ai/news/stable-diffusion-public-release",
      "title": "Stable Diffusion Public Release",
      "snapshot": "stability-blog.html",
      "screenshot": null,
      "archived_at": "2026-05-25",
      "wayback_url": "https://web.archive.org/web/20260525120000/https://stability.ai/..."
    }
  ]
}
```

- `wayback_url`: Permanent link after saving via the Internet Archive Save Page Now API (recommended but not mandatory).

### 5.4 Archiving workflow

1. When writing an entry, use `tools/validate_links.js` to verify URL reachability for all links.
2. Save text snapshots with `curl -L <url> > sources/YYYY/MM/slug.html`.
3. Update `index.json`.
4. HTML files are committed to Git alongside other content. Screenshot files larger than 1MB go through GitHub Releases.

---

## VI. Cross-references

### 6.1 Biographies → Chronicles

When citing chronicle entries in biographies, use the following format:

```
See *Chronicle: YYYY-MM*
```

Example: *GPT-3 was released in June 2020 and quickly became a research focus due to its emergent abilities (see Chronicle: June 2020).*

**Rules**:
- Citation format is unified as italics + year-month, without specific file names (`2020/06.md` → `*Chronicle: June 2020*`).
- Only cite events in biographies that are already recorded in the chronicles. For events not yet in the chronicles, biographies should provide the date and source directly, without cross-references.
- Cross-references are not a shortcut — biographies should still provide enough context for readers to understand without jumping.

### 6.2 Chronicles → Biographies

At the end of chronicle entries, if a detailed biography exists for that event, append a note:

```
> 📖 See *[Biography name]*.
```

Example:

```
> 📖 See *GPT Hereditary House*.
```

**Rules**:
- Only add this note when the biography text already exists.
- Place the note at the end of the entry, before source footnotes.
- A single chronicle entry may reference multiple biographies.

### 6.3 Treatises → Chronicles/Biographies

Treatise citations of chronicle entries: `See *Chronicle: YYYY-MM*`.
Treatise citations of biographies: `See *[Biography name]*`.

### 6.4 Cross-reference index

When biographies and chronicles grow to a certain scale (recommended threshold: more than 20 biographies), maintain an `INDEX.md` at the root directory listing cross-reference relationships for all entries.

---

## VII. Review and verification rules

### 7.1 Cross-verification

- Dates, parameters, and benchmark data require at least **two independent sources**.
- Single-source information must be marked "uncertain."
- Social media (Twitter/Zhihu/WeChat public accounts) may serve as leads but not as sole sources.
- **Wikipedia** may serve as a supplementary source for cross-verification but not as the sole source. When citing, prefer permanent links (`?oldid=xxx`) to lock the version, and archive to `sources/`.

### 7.2 Editorial judgment

- Document if verified, omit if not.
- Controversial events must present all sides' claims.
- Commercial marketing claims must be cross-referenced with independent evaluations before being credited.
