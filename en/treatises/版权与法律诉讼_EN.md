# Copyright and Legal Battles

> The copyright wars surrounding large language models are not a single lawsuit — they are an entire battlefield. Since 2023, authors, news organizations, image companies, and record labels have successively filed suits against AI companies. At the core of every dispute lies a single question: does using someone else's content to train a model constitute lawful conduct? There is no unified answer — the United States invokes "fair use," Europe invokes "text and data mining exceptions," and courts in various jurisdictions are each finding their own way, with no final judgment rendered to date. This treatise organizes the record by plaintiff type, tracing the factual trajectory and the evolution of legal boundaries. It makes no predictions — it records only what has happened and what is still being contested.

---

## I. Overview

The vast majority of training data for large language models comes from the internet: web pages, books, news articles, images, forum posts, code repositories. Before 2023, the industry assumed this content could be used for training — the construction of public datasets such as Common Crawl, The Pile, and LAION-5B proceeded largely without prior consent from copyright holders (see *The Data Wars*). ChatGPT's explosion pushed this question from technical circles into the courtroom.

Starting in the second half of 2023, copyright lawsuits erupted in clusters. Organized by plaintiff type, there are at least four fronts:

- **Authors and publishers**: Sarah Silverman, the Authors Guild, The New York Times, and others sued OpenAI, Meta, and Microsoft;
- **Image copyright holders**: Getty Images sued Stability AI, alleging that Stable Diffusion's training data contained vast quantities of copyrighted images;
- **Music copyright holders**: Universal Music Group and other record labels sued Anthropic, alleging that Claude's output of song lyrics constituted infringement;
- **News organizations and media groups**: following the NYT, multiple media groups initiated or prepared lawsuits in various jurisdictions.

The common question across all these suits: **under copyright law, does using protected content to train AI models constitute "fair use"?** If it does, AI companies can continue training on publicly available data; if it does not, the entire industry's data acquisition model must be rebuilt (see the discussion in *The Data Wars*, Section V, "Synthetic Data").

As of mid-2026, no lawsuit has reached a final judgment. But the litigation itself has profoundly altered industry behavior: model companies have begun offering opt-out mechanisms, signing data licensing agreements, disclosing training data sources in technical reports, and even offering copyright indemnification commitments. The law has not yet spoken, but the market has already adjusted.

---

## II. NYT vs. OpenAI: The news industry's copyright reckoning

### Filing of the lawsuit

**2023-12-27**, The New York Times filed suit against OpenAI and Microsoft in the U.S. District Court for the Southern District of New York. This was the first major news organization to sue an AI company and the single most consequential case in the copyright litigation wave.[^1]

The NYT's complaint advanced two core allegations:

1. **Training infringement**: OpenAI used millions of NYT articles without permission to train its GPT series models, infringing copyright;
2. **Output infringement**: ChatGPT can reproduce NYT article content verbatim or near-verbatim — the complaint's appendices included multiple examples demonstrating that through carefully designed prompts, ChatGPT could reproduce copyrighted report text in its entirety.[^1]

The complaint also named Microsoft as a co-defendant, on the grounds that Microsoft had invested over $13 billion in OpenAI and integrated GPT technology into Bing and Copilot products, constituting "contributory infringement" and "vicarious infringement."

### The devastating impact of "verbatim output"

The most damaging element of the NYT complaint was not "where the training data came from" — that was an open secret in the industry — but the output-side evidence it presented. The complaint's appendices showed that through carefully crafted prompts, ChatGPT could reproduce paragraphs of NYT reporting verbatim, including content behind the paywall.[^1]

This carried enormous legal weight. Among the four factors of traditional "fair use" analysis, "the effect on the market for the original work" carries the greatest weight. If a model can substitute for reading the original work — if users need not subscribe to the NYT to access its reporting — the "fair use" defense becomes extremely difficult to sustain.

OpenAI publicly acknowledged the existence of "verbatim output" but attributed it to "memorization" rather than "copying" — claiming the model had incidentally memorized portions of training samples rather than intentionally storing and retrieving them. OpenAI also stated it had taken measures to reduce such "regurgitation" and accused the NYT of using "adversarial prompts" to deliberately elicit protected content from the model.[^2]

### Subsequent developments

As of mid-2026, NYT vs. OpenAI remains in the trial phase. In 2024, OpenAI requested the court to dismiss portions of the complaint; the court denied most of the motions, finding that the NYT's allegations were sufficient to proceed to fact-finding.[^3]

The outcome of this case will have a benchmark effect on the entire industry: if the court determines that training constitutes infringement, all model companies using publicly available data face similar risks; if training is deemed fair use, the litigation strategies of the NYT and similar copyright holders will be forced to pivot — likely focusing on the output-side "market substitution" issue rather than the training-side "copying" issue.

Notably, after the NYT filed suit, several other news organizations — including The Intercept, Raw Story, and AlterNet — also filed similar lawsuits against OpenAI.[^4] Meanwhile, other media groups chose a different strategy: signing data licensing agreements with AI companies (such as Axel Springer and Associated Press), substituting commercial cooperation for legal confrontation. Litigation and licensing in parallel constituted the two poles of the news industry's relationship with the AI sector in 2024–2025.

---

## III. Getty vs. Stability AI: The first image copyright case

### Filing of the lawsuit

**2023-02-03**, Getty Images filed suit against Stability AI in the UK High Court, alleging that Stable Diffusion's training data contained tens of millions of Getty-copyrighted images, and that some model-generated images even bore residual Getty watermarks.[^5]

In the same month, Getty Images also filed a parallel suit against Stability AI in the U.S. District Court for the District of Delaware.[^6]

Getty's core argument was that Stability AI, in training Stable Diffusion, had scraped vast quantities of Getty-copyrighted images from the internet without permission or compensation. The LAION-5B dataset was Stable Diffusion's primary training source, containing image links scraped from stock photography websites including Getty Images (see *The Data Wars*, Section IV). Getty also noted that Stable Diffusion in some cases generated images bearing distorted Getty watermarks — direct evidence that the training data included Getty images.[^5]

### The evidentiary power of "watermark residuals"

The appearance of watermark residuals in AI-generated images submitted by Getty became the case's most visually striking evidence. From a legal perspective, the evidentiary force of this exhibit lay in directly proving that the model had "seen" Getty's images — if the training data did not contain these images, watermarks could not appear in the output in any form.

Stability AI did not deny using datasets containing Getty images in its response but argued that its conduct fell within the scope of "text and data mining" (TDM), potentially protected under the UK's 2014 copyright exception provisions.[^7] Stability AI also emphasized that Stable Diffusion's generated images were "new works" rather than copies of originals — the model learned styles and visual patterns rather than storing and retrieving specific images.

### Dual-jurisdiction litigation in the UK and US

What made the Getty case distinctive was its simultaneous filing in the UK and the US, two jurisdictions with starkly different approaches to "fair use":

- **United States**: Fair use is a flexible doctrine applied by judges on a case-by-case basis using four factors, with no explicit TDM exception. Whether AI training constitutes fair use depends on the degree of "transformativeness" and the assessment of "market impact."
- **United Kingdom**: The 2014 Copyright Act amendment introduced a limited TDM exception (Section 29A), permitting text and data mining for non-commercial research purposes. Whether commercial AI training is protected under this provision remains legally undetermined.

This dual-jurisdiction approach means the same act (using copyrighted images to train AI models) may yield different judgments in different countries. This creates enormous legal uncertainty for multinational AI companies.

As of mid-2026, Getty vs. Stability AI remains undecided in both the UK and the US.[^8]

---

## IV. Universal Music vs. Anthropic: A new front in music copyright

### Filing of the lawsuit

**2023-10-18**, Universal Music Group (UMG), together with Concord, ABKCO, and other music publishers, filed suit against Anthropic in the U.S. District Court for the Middle District of Tennessee, alleging that Claude output copyrighted song lyrics upon user request, constituting copyright infringement.[^9]

Unlike the NYT and Getty cases, Universal Music's lawsuit focused on the **output side** rather than the training side. The complaint's core evidence: through simple prompts (e.g., "write me the lyrics to Taylor Swift's 'Love Story'"), Claude would output the complete lyrics verbatim.[^9]

### The particularities of music copyright

Music copyright is more complex than text and image copyright because it involves **multiple layers of rights**:

- **Composition rights**: held by songwriters and music publishers;
- **Sound recording rights**: held by record labels.

The plaintiffs in this case were publishers, asserting composition rights. UMG and others argued that Claude's output of complete lyrics constituted unauthorized "mechanical reproduction" — equivalent in nature to lyric websites publishing lyrics without authorization.

Anthropic's response strategy was similar to other AI companies: arguing that output is "generation" rather than "copying," that the model does not store complete lyrics, and claiming to have deployed filtering measures to reduce copyrighted content output.[^10]

### Industry signals beyond the lawsuit

Universal Music was one of the most active plaintiff parties in the AI copyright disputes of 2023. Beyond suing Anthropic, UMG also:

- Demanded that streaming platforms including Spotify and Apple Music prohibit uploads of AI-generated music;
- Collaborated with YouTube to develop AI music content identification tools;
- Publicly stated that the use of its music library in AI training was "neither authorized nor reasonable."[^11]

These actions indicate that the music industry established anti-AI legal strategies earlier and more systematically than the text and image industries. However, the legal efficacy of the litigation still depends on the court's determination of "output infringement" — if Claude merely output lyrics "memorized" from training data under user inducement, the question of liability attribution (AI company vs. user) is itself a novel legal question.

As of mid-2026, Universal Music vs. Anthropic remains in the trial phase.[^12]

---

## V. The global debate over fair use

Interpretations of whether AI training constitutes "fair use" are sharply opposed:

| Factor | AI companies' position | Copyright holders' position |
|--------|----------------------|---------------------------|
| Purpose and nature of use | Training is "transformative use" — the model learns statistical patterns, not copies content | Training is commercial activity aimed at building profitable products |
| Nature of the work | Training data sources are diverse, with much factual content | Includes a large volume of highly original literary, artistic, and journalistic works |
| Amount and substantiality | Each individual work represents a vanishing fraction of the training set | The model can reproduce substantial portions of works |
| Effect on the market | The model does not substitute for the original work's market | Model output can directly substitute for consumption of the original work |

AI companies have attempted to invoke the logic of the 2021 Google v. Oracle case: the U.S. Supreme Court held that Google's copying of Java APIs constituted fair use, reasoning that the "transformativeness" was extremely high — Android did not directly compete with Java.[^13] But copyright holders counter: the NYT's complaint has already demonstrated that models can reproduce original text verbatim — this is not "transformation" but "substitution." The premise of Google v. Oracle was that Google did not provide Java itself to users; ChatGPT, by contrast, delivers copyrighted content directly to users.

Attitudes across jurisdictions are also inconsistent. The EU Copyright Directive (DSM Directive) Article 4 permits TDM on lawfully accessed works, but copyright holders may opt out; whether robots.txt constitutes an effective opt-out remains legally undetermined.[^14] Japan's Copyright Act Article 30-4 permits use of works for "information analysis," but whether complete copies are excluded remains disputed.[^16] China's "Interim Measures for the Management of Generative AI Services" requires the use of "lawfully sourced" data but provides no specific guidance on training copyright issues.[^17] The same training act may yield different judgments in different countries.

---

## VI. Copyright ownership of AI-generated content

**2023-02-21**, the U.S. Copyright Office issued its registration decision regarding *Zarya of the Dawn*, a graphic novel using Midjourney-generated illustrations. The Copyright Office ruled: the text and overall arrangement of the graphic novel were protected, but individual AI-generated illustrations were not — on the grounds that copyright law protects "human authorship."[^18] In March of the same year, the Copyright Office issued formal guidance: AI-generated content is not copyrightable, but portions where humans applied "sufficient creative arrangement or modification" to AI output may be protected.[^19]

This left a critical question: how much "creative work" must a human perform for AI-assisted output to receive copyright protection? In practice, a blurry spectrum exists: pure AI generation (using output directly) is unprotected; AI-generated content with human selective arrangement (as in the *Zarya* case) — the arrangement portion is protected; human-led, AI-assisted creation — the whole is protected. The U.S. Copyright Office also rejected the copyright registration application of the DABUS system's "autonomous creation" in 2023.[^20]

The uncertainty of copyright ownership directly impacts commercialization: if AI-generated images are unprotected, competitors may freely use them; the legal validity of AI-assisted code under open-source licenses is similarly undetermined.[^21]

---

## VII. Impact of legal battles on the AI industry

### Rebuilding data acquisition models

The most direct impact of litigation has been to drive a shift in data acquisition from "default scraping" to "licensing first." Reddit began charging for API access in 2023 (see *The Data Wars*, Section III); Axel Springer, Associated Press, and Stack Overflow signed data licensing agreements with OpenAI in 2024. Copyright litigation raised the legal risk of "default scraping," while platform lockdowns reduced the availability of free data — together, these forces drove the formation of a data licensing market.

### Opt-out mechanisms and compliance declarations

Facing litigation pressure, some AI companies took proactive measures: OpenAI introduced a robots.txt blocking mechanism and a "Copyright Shield," promising to bear copyright claims for enterprise customers;[^22] Adobe trained Firefly exclusively on licensed content from the start, sidestepping copyright disputes;[^23] Google permitted copyright holders to control crawlers via robots.txt.

After 2023, technical reports for mainstream models also began including more detailed data source disclosures. Meta's Llama series technical reports stated that training data came from "publicly available online resources" but did not elaborate on how copyrighted content was handled. The open-source community was most critical: open-weight models' training data opacity means users cannot determine whether a model was trained on a foundation of copyright infringement (see *The Open-Source Movement*, Section VI, regarding the OSAID definition).

But the legal efficacy of these measures remains unclear — whether opt-out mechanisms constitute "implied consent" by copyright holders (if you didn't block it, you consented to training) is a circular argument in law.

---

## VIII. The evolution of legal boundaries

### From "can you train" to "can you output"

Most 2023 lawsuits alleged both training-side and output-side infringement. By 2024–2025, a trend had become clear: **output-side infringement is more readily accepted by courts than training-side infringement.** A model's ability to reproduce copyrighted content verbatim directly demonstrates the possibility of "market substitution." The NYT's complaint was devastating precisely because it demonstrated this with extensive examples. In contrast, the "transformative use" defense for training is more persuasive — the model learns statistical patterns, and each individual work's contribution to model capability is negligible. But if what is output is original text, "transformation" no longer holds.

This means: even if courts ultimately determine that training constitutes fair use, AI companies must still rigorously filter copyrighted content on the output side — "you can train" does not mean "you can output."

### The legal vacuum of "style imitation"

AI can generate "paintings in Picasso's style" or "songs in Taylor Swift's style" — these outputs do not reproduce specific works but imitate a particular creator's style. Current copyright law does not protect "style," only specific expression. But the "AI Stefanie Sun" phenomenon recorded in *Community Culture* demonstrates that voice-cloning tools have already made "singing someone else's song in a singer's vocal timbre" a mass behavior. If "style" can be precisely extracted and transferred technically, should the law reconsider the boundary between "style" and "expression"? The U.S. Copyright Office and courts have not yet issued specific rulings on this matter, but Universal Music's lawsuit against Anthropic is pushing this issue onto the legal stage.

### The double-edged sword of class action

Starting in 2024, the lawsuit driven by the Authors Guild attempted to represent "all authors whose works were included in Books3." Once class action status is confirmed, settlement or judgment amounts could far exceed individual cases. But this is a double-edged sword: if the court determines that training constitutes fair use, the judgment's effect would cover a vast number of copyright holders — a definitive ruling in one stroke.

---

## IX. Timeline of key events

| Date | Plaintiff | Defendant | Core dispute | Status |
|------|----------|-----------|-------------|--------|
| 2023-02 | Getty Images | Stability AI | Training data included copyrighted images; output bore watermark residuals | Under trial in both UK and US |
| 2023-07 | Sarah Silverman et al. | OpenAI, Meta | Training data included pirated books | Some claims dismissed; remainder under trial |
| 2023-09 | Authors Guild | OpenAI | Systematic copyright infringement | Under trial |
| 2023-10 | Universal Music Group | Anthropic | Claude output complete song lyrics | Under trial |
| 2023-12 | The New York Times | OpenAI, Microsoft | Dual infringement in training and output | Under trial |
| 2023-03 | U.S. Copyright Office | — | *Zarya of the Dawn* registration decision | Pure AI generation unprotected |
| 2023-10 | The Intercept, Raw Story | OpenAI | News content copyright infringement | Under trial |
| 2024-01 | Axel Springer | — | Signed licensing agreement with OpenAI | Commercial license |
| 2024 | Multiple parties | — | UMG pushes AI music content identification and platform bans | Ongoing |

---

## X. Trend analysis

- **The "chilling effect" of litigation arrives before judgments**: Changes in data source disclosures, opt-out mechanisms, and copyright indemnification commitments are all "compliance compelled by law." Industry behavior has already adjusted ahead of legal conclusions.
- **The ultimate determination of "fair use" will reshape the value chain**: If training is deemed fair use, demand for data licensing markets will contract sharply; if deemed infringement, already-trained models face retroactive risk. Either outcome would rewrite the industry landscape.
- **The output side is more dangerous than the training side**: Even if training is lawful, model output of copyrighted content may still constitute infringement. Filtering mechanisms and safety guardrails are not optional configurations — they are legal necessities.
- **Multi-jurisdictional parallelism creates "regulatory arbitrage" space**: The United States, EU, UK, and Japan have different rules on TDM and fair use. AI companies may choose to train in countries with more favorable legal environments — this has already begun to influence the geographic distribution of compute infrastructure.
- **Copyright holders' strategies are diverging**: NYT and Getty chose litigation; Axel Springer and AP chose licensing; Universal Music simultaneously pursued litigation and industry lobbying. Different strategies will produce different precedential effects.

---

## Commentary

Copyright litigation marks the large model industry's entry into the "rule of law" phase. Before 2023, training data acquisition followed the logic of "if the technology can do it, do it" — The Pile bundled 190,000 books, LAION indexed 5.8 billion images, and the internet was an unguarded mine. In 2023, the mine's owners stood up. NYT, Getty, and Universal Music demanded compensation — not opposing AI technology per se, but discovering that years of accumulated content assets had been converted, without compensation, into model companies' core production inputs.

But litigation also exposed a deeper dilemma: models do not store and copy — they learn and compress. Regulating this behavior using a "reproduction right" framework is like governing automobiles with horse-and-buggy regulations — the tool is imprecise, but there is nothing better at hand. Legal boundaries continue to evolve: the NYT case may drag on until 2027 or beyond. Until then, the industry's data compliance strategies, model companies' risk hedging, and copyright holders' licensing pricing all rest on an uncertain legal foundation. The chronicler records this not to take sides, but to document a fact: the legal boundaries of the most essential production input for large models — data — are being carved out, piece by piece, through litigation.

---

*Compiled by the Endfield Industrial Chronicle team: Fu Xuan (Theoretical Framework).*

---

[^1]: The New York Times v. Microsoft Corp. & OpenAI, Inc., Case No. 1:23-cv-11195 (S.D.N.Y.), Complaint filed 2023-12-27. https://nytco-assets.pdf.s3.amazonaws.com/NYT_Complaint_Dec2023.pdf
[^2]: OpenAI, "OpenAI and journalism", OpenAI Blog, 2024-01-08. https://openai.com/index/openai-and-journalism
[^3]: The New York Times, "Judge Denies Most of OpenAI's Motion to Dismiss in NYT Lawsuit", 2024-08. (Reported across multiple tech media outlets.)
[^4]: The Intercept v. OpenAI, Case No. 1:24-cv-01570 (S.D.N.Y.), filed 2024-02; Raw Story v. OpenAI, filed 2024-02.
[^5]: Getty Images (US) Inc. v. Stability AI Ltd., Claim No. IL-2023-000007 (High Court of Justice, England and Wales), filed 2023-02-03.
[^6]: Getty Images (US) Inc. v. Stability AI, Inc., Case No. 1:23-cv-00135 (D. Del.), filed 2023-02-03.
[^7]: UK Copyright, Designs and Patents Act 1988, Section 29A (as amended 2014), permitting text and data analysis for non-commercial research.
[^8]: As of mid-2026, Getty vs. Stability AI remains without a final judgment in both the UK and the US. Confirmed by multiple industry reports.
[^9]: Concord Music Group, Inc. v. Anthropic PBC, Case No. 3:23-cv-01092 (M.D. Tenn.), Complaint filed 2023-10-18.
[^10]: Anthropic denied infringement in its litigation response and claimed to have deployed content filtering measures. Compiled from legal reporting.
[^11]: Universal Music Group, "UMG's principles for AI", 2023. https://www.universalmusic.com/ai-principles/
[^12]: As of mid-2026, Universal Music vs. Anthropic remains in the trial phase. Confirmed by legal reporting.
[^13]: Google LLC v. Oracle America, Inc., 593 U.S. ___ (2021). The U.S. Supreme Court ruled 6–2 that Google's copying of Java APIs constituted fair use.
[^14]: Directive (EU) 2019/790, Article 4, "Exception or limitation for text and data analysis."
[^15]: Hamburg court preliminary ruling on LAION data scraping and TDM exceptions (2024), exact case number uncertain; compiled from legal commentary.
[^16]: Japan Copyright Act Article 30-4 (added by 2018 amendment), permitting use of works for information analysis purposes.
[^17]: Interim Measures for the Management of Generative AI Services (China, 2023-08-15). https://www.cac.gov.cn/2023-07/13/c_1690898327029107.htm
[^18]: U.S. Copyright Office, "Zarya of the Dawn" Registration Decision, 2023-02-21. https://www.copyright.gov/docs/zarya-of-the-dawn.pdf
[^19]: U.S. Copyright Office, "Copyright Registration Guidance: Works Containing Material Generated by Artificial Intelligence", 2023-03. https://www.govinfo.gov/content/pkg/FR-2023-03-16/pdf/2023-05321.pdf
[^20]: U.S. Copyright Office, DABUS copyright registration denial, 2023.
[^21]: Legal implications of AI-generated code under open-source licenses remain undetermined as of 2026.
[^22]: OpenAI, "Copyright Shield", 2023-11. https://openai.com/policies/copyright-shield
[^23]: Adobe, "Adobe Firefly: Generative AI for Creative Professionals", 2023. https://www.adobe.com/sensei/generative-ai/firefly.html
