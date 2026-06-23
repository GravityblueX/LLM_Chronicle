# Copyright and Legal Battles

> The copyright struggle surrounding large language models is not a single lawsuit—it is an entire battlefield. Since 2023, authors, news organizations, image companies, and record labels have successively filed suits against AI companies. The core dispute is singular: does using other people's content to train models constitute lawful conduct? There is no uniform answer—the United States invokes "fair use," Europe invokes "text and data mining exceptions," and courts in various jurisdictions are each摸索 their way, with no final judgment rendered to date. This article organizes the factual record by plaintiff category, tracing the evolution of legal boundaries—making no predictions, only recording what has happened and what tug-of-war is ongoing.

---

## I. Overview

The vast majority of large language model training data comes from the internet: web pages, books, news articles, images, forum posts, code repositories. Before 2023, the industry tacitly assumed this content could be used for training—the construction of public datasets like Common Crawl, The Pile, and LAION-5B largely proceeded without prior consent from copyright holders (see *The Data Wars*). ChatGPT's explosion pushed this question from the technical圈子 into the courtroom.

Starting in the second half of 2023, copyright lawsuits erupted in clusters. Organized by plaintiff type, there are at least four fronts:

- **Authors and publishers**: Sarah Silverman, the Authors Guild, The New York Times, and others sued OpenAI, Meta, and Microsoft;
- **Image copyright holders**: Getty Images sued Stability AI, alleging that Stable Diffusion's training data contained大量 copyrighted images;
- **Music copyright holders**: Universal Music Group and other record labels sued Anthropic, alleging that Claude's output of lyrics constituted infringement;
- **News organizations and media groups**: Following the NYT, multiple media groups initiated or prepared lawsuits in different jurisdictions.

The common question across all these lawsuits: **under copyright law frameworks, does using protected content to train AI models constitute "fair use"?** If it does, AI companies can continue training on public data; if it does not, the entire industry's data acquisition model must be rebuilt (see the discussion of "synthetic data" in *The Data Wars*, Section V).

As of mid-2026, no lawsuit has reached a final judgment. But the lawsuits themselves have already profoundly altered industry behavior: model companies have begun providing opt-out mechanisms, signing data licensing agreements, disclosing training data sources in technical reports, and even offering copyright indemnification pledges. The law has not yet reached a conclusion, but the market has already adjusted.

---

## II. NYT v. OpenAI: The Copyright Reckoning for Journalism

### Filing the Lawsuit

**On 2023-12-27**, The New York Times filed suit against OpenAI and Microsoft in the U.S. District Court for the Southern District of New York. This was the first mainstream news organization to sue an AI company as a major media outlet, and the single most impactful case in the copyright litigation wave.[^1]

The NYT's complaint raised two core allegations:

1. **Training infringement**: OpenAI used millions of NYT articles without permission to train the GPT series of models, infringing copyright;
2. **Output infringement**: ChatGPT could verbatim or near-verbatim reproduce the content of NYT articles—the complaint included multiple appendices demonstrating that through specific prompts, ChatGPT could reproduce copyrighted report text.[^1]

The complaint also named Microsoft as a co-defendant, on the grounds that Microsoft had invested over $13 billion in OpenAI and integrated GPT technology into Bing and Copilot products, constituting "contributory infringement" and "vicarious infringement."

### The Devastating Power of "Verbatim Output"

The most impactful portion of the NYT complaint was not "where the training data came from"—this was already an open secret in the industry—but the output-side evidence it presented. The complaint's appendices showed that through carefully crafted prompts, ChatGPT could reproduce entire paragraphs of NYT reports verbatim, including content behind paywalls.[^1]

This carried enormous legal significance. Among the four factors of traditional "fair use" analysis, "the effect on the market for the original work" carries the highest weight. If a model can substitute for reading the original work—allowing users to access NYT reporting without subscribing—the "fair use" defense becomes extremely difficult to sustain.

In its public response, OpenAI acknowledged the existence of "verbatim output" but attributed it to "memorization" rather than "copying"—claiming the model had incidentally memorized portions of training samples during training, rather than intentionally storing and retrieving them. OpenAI also stated it had taken measures to reduce such "regurgitation" and accused the NYT of using "adversarial prompts" to deliberately induce the model into outputting protected content.[^2]

### Subsequent Developments

As of mid-2026, NYT v. OpenAI remains in the trial phase. In 2024, OpenAI requested the court dismiss portions of the claims; the court denied most of the motions, finding the NYT's allegations sufficient to proceed to fact discovery.[^3]

The outcome of this case will have a landmark effect on the entire industry: if the court determines that training constitutes infringement, all model companies using publicly available data face similar risks; if training is deemed fair use, the NYT's and similar copyright holders' litigation strategies will be forced to pivot—likely focusing on output-side "market substitution" rather than training-side "copying."

Notably, after the NYT filed suit, multiple news organizations—including The Intercept, Raw Story, and AlterNet—also filed similar lawsuits against OpenAI.[^4] Meanwhile, other media groups chose different strategies: signing data licensing agreements with AI companies (such as Axel Springer and Associated Press), substituting commercial cooperation for legal confrontation. Litigation and licensing running in parallel构成了 the two poles of the news industry's relationship with the AI sector in 2024–2025.

---

## III. Getty v. Stability AI: The First Image Copyright Case

### Filing the Lawsuit

**On 2023-02-03**, Getty Images filed suit against Stability AI in the High Court of Justice of England and Wales, alleging that Stable Diffusion's training data included tens of millions of Getty-copyrighted images, and that some model-generated images even bore residual Getty watermarks.[^5]

In the same month, Getty Images also filed a parallel lawsuit against Stability AI in the U.S. District Court for the District of Delaware.[^6]

Getty's complaint argued that Stability AI scraped vast quantities of Getty-copyrighted images from the internet when training Stable Diffusion, without permission and without compensation. The LAION-5B dataset was Stable Diffusion's primary training source, containing image links scraped from stock photography websites including Getty Images (see *The Data Wars*, Section IV). Getty further noted that Stable Diffusion, in certain cases, generated images bearing distorted Getty watermarks—direct evidence that the training data contained Getty images.[^5]

### The Evidentiary Power of "Watermark Ghosts"

The appearance of watermark artifacts in AI-generated images submitted by Getty became the case's most visually striking evidence. From a legal standpoint, this evidence's effectiveness lies in directly proving the model had "seen" Getty's images—if the training data did not contain these images, watermarks could not appear in any form in the output.

Stability AI did not deny using datasets containing Getty images in its response, but argued its conduct fell within the scope of "text and data mining" (TDM), potentially protected under the UK's 2014 copyright exception provisions.[^7] Stability AI also emphasized that images generated by Stable Diffusion were "new works" rather than copies of originals—the model learned styles and visual patterns, rather than storing and retrieving specific images.

### Two Parallel Fronts: UK and US

What made the Getty case distinctive was its simultaneous filing in both the UK and the US, two jurisdictions with vastly different stances on "fair use":

- **United States**: Fair use is a flexible principle applied by judges on a case-by-case basis using four factors, with no explicit TDM exception. Whether AI training constitutes fair use depends on the degree of "transformative use" and the assessment of "market impact."
- **United Kingdom**: The 2014 Copyright Act amendment introduced a limited TDM exception (Section 29A), permitting text and data mining for non-commercial research purposes. Whether commercial AI training enjoys this protection remains legally undetermined.

This dual-jurisdiction parallelism means that the same act (training AI models on copyrighted images) may produce different verdicts in different countries. This creates enormous legal uncertainty for multinational AI companies.

As of mid-2026, Getty v. Stability AI remains undecided in both the UK and the US.[^8]

---

## IV. Universal Music v. Anthropic: A New Front for Music Copyright

### Filing the Lawsuit

**On 2023-10-18**, Universal Music Group (UMG), together with Concord, ABKCO, and other music publishers, filed suit against Anthropic in the U.S. District Court for the Middle District of Tennessee, alleging that Claude output copyrighted lyrics when requested by users, constituting copyright infringement.[^9]

Unlike the NYT and Getty cases, Universal Music's lawsuit focused on the **output side** rather than the training side. The complaint's core evidence: through simple prompts (e.g., "write me the lyrics to Taylor Swift's 'Love Story'"), Claude would verbatim output complete lyrics.[^9]

### The Peculiarities of Music Copyright

Music copyright is more complex than text and image copyright because it involves **multiple layers of rights**:

- **Composition rights**: Held by songwriters and music publishers;
- **Sound recording rights**: Held by record companies.

The plaintiffs in this case are publishers, asserting composition rights. UMG and others argued that Claude's output of complete lyrics constitutes unauthorized "mechanical reproduction"—equivalent in nature to lyrics websites publishing lyrics without authorization.

Anthropic's response strategy was similar to other AI companies: arguing that output is "generated" rather than "copied," that the model does not store complete lyrics, while claiming to have deployed filtering measures to reduce copyrighted content output.[^10]

### Industry Signals Beyond the Lawsuit

Universal Music was one of the most aggressive plaintiffs in the AI copyright dispute in 2023. Beyond suing Anthropic, UMG also:

- Demanded that streaming platforms like Spotify and Apple Music prohibit uploads of AI-generated music;
- Collaborated with YouTube to develop AI music content identification tools;
- Publicly declared that AI training using its music catalog was "neither licensed nor reasonable."[^11]

These actions indicate that the music industry established anti-AI legal strategies earlier and more systematically than the text and image industries. But the legal effect of the lawsuit still depends on the court's determination of "output infringement"—if Claude merely output lyrics "memorized" from training data under user inducement, the question of liability attribution (AI company vs. user) is itself a novel legal issue.

As of mid-2026, Universal Music v. Anthropic remains in the trial phase.[^12]

---

## V. The Global Debate Over Fair Use

Interpretations of whether AI training constitutes "fair use" are sharply opposed:

| Factor | AI Companies' Argument | Copyright Holders' Argument |
|------|--------------|-------------|
| Purpose and nature of use | Training is "transformative use"—models learn statistical patterns, not copy content | Training is commercial activity aimed at building profit-generating products |
| Nature of the work | Training data sources are diverse, with大量 factual content | Includes大量 highly original literary, artistic, and journalistic works |
| Amount and substantiality | Each individual work represents a vanishing fraction of the training set | The model can reproduce substantial portions of works |
| Effect on the market | Models do not substitute for the original work's market | Model output can directly substitute for consumption of the original work |

AI companies have attempted to invoke the logic of the 2021 Google v. Oracle case: the U.S. Supreme Court ruled that Google's copying of Java APIs constituted fair use, reasoning that the "transformativeness" was extremely high—Android and Java did not compete directly.[^13] But copyright holders countered: the NYT's complaint has already proved that models can verbatim output original text—this is not "transformation," it is "substitution." The premise of Google v. Oracle was that Google did not provide Java itself to users; whereas ChatGPT does exactly that—delivering copyrighted content to users.

Attitudes across jurisdictions are also inconsistent. The EU Copyright Directive (DSM Directive) Article 4 permits TDM of lawfully accessed works, but copyright holders may opt out; whether robots.txt constitutes a valid opt-out remains legally undetermined.[^14] Japan's Copyright Law Article 30-4 permits use of works for "information analysis," but whether it excludes complete copies is disputed.[^16] China's "Interim Measures for the Management of Generative AI Services" requires the use of "lawfully sourced" data but does not provide specific guidance on training copyright issues.[^17] The same training conduct may produce different verdicts in different countries.

---

## VI. Copyright Ownership of AI-Generated Content

**On 2023-02-21**, the U.S. Copyright Office issued its registration decision regarding *Zarya of the Dawn*, a graphic novel using Midjourney-generated illustrations. The Copyright Office ruled: the text and overall arrangement of the graphic novel were protected, but the AI-generated individual illustrations were not—the rationale being that copyright law protects "human authorship" creation.[^18] In March of the same year, the Copyright Office issued formal guidance: AI-generated content is not eligible for copyright protection, but portions where a human exercises "sufficient creative arrangement or modification" over AI output can be protected.[^19]

This left a critical question: how much "creative work" must a human perform for AI-assisted output to receive copyright protection? In practice, a blurry spectrum exists: purely AI-generated (directly using the output) is unprotected; AI-generated with human selective arrangement (as in the *Zarya* case), the arrangement portion is protected; human-led with AI as a tool, the whole is protected. The U.S. Copyright Office also rejected a copyright registration application for "autonomous creation" by the DABUS system in 2023.[^20]

The uncertainty of copyright ownership directly impacts commercialization: if AI-generated images are unprotected, competitors can freely use them; the legal validity of AI-assisted code under open-source licenses is similarly undetermined.[^21]

---

## VII. The Impact of Legal Battles on the AI Industry

### Rebuilding the Data Acquisition Model

The most direct impact of the lawsuits has been driving a shift in data acquisition models from "scrape by default" to "license first." Reddit began charging for API access in 2023 (see *The Data Wars*, Section III); Axel Springer, Associated Press, and Stack Overflow signed data licensing agreements with OpenAI in 2024. Copyright litigation raised the legal risk of "scraping by default," and platform lockdowns reduced the availability of free data—together, these forces drove the formation of a data licensing market.

### Opt-Out Mechanisms and Compliance Statements

Facing litigation pressure, some AI companies took proactive measures: OpenAI introduced a robots.txt blocking mechanism and "Copyright Shield," pledging to承担 copyright claims on behalf of enterprise customers;[^22] Adobe from the outset trained Firefly only on licensed content, sidestepping copyright disputes;[^23] Google allowed copyright holders to control crawlers via robots.txt.

After 2023, mainstream model technical reports also began including more detailed data source disclosures. Meta's Llama series technical reports stated that training data came from "publicly available online resources" but did not elaborate on how copyrighted content was handled. The open-source community was most critical of this: the opacity of open-weight model training data means users cannot判断 whether a model was trained on the basis of copyright infringement (see the discussion of OSAID definitions in *The Open-Source Movement*, Section VI).

But the legal efficacy of these measures remains unclear—whether opt-out mechanisms constitute copyright holders' "implied consent" (if not blocked, then consented to training) is a circular reasoning problem in law.

---

## VIII. The Evolution of Legal Boundaries

### From "Can You Train?" to "Can You Output?"

Most 2023 lawsuits alleged both training-side and output-side infringement. By 2024–2025, a clear trend emerged: **output-side infringement is easier for courts to accept than training-side infringement**. A model's ability to verbatim reproduce copyrighted content directly demonstrates the possibility of "market substitution." The NYT's complaint was so devastating precisely because it proved this point with extensive examples. By contrast, the training-side "transformative use" defense is more persuasive—models learn statistical patterns, and a single work's contribution to model capability is negligible. But if the output is verbatim text, "transformation" no longer holds.

This means: even if courts ultimately determine that training constitutes fair use, AI companies must still strictly filter copyrighted content on the output side—"able to train" does not mean "able to output."

### The Legal Vacuum of "Style Mimicry"

AI can generate "paintings in the style of Picasso," "songs in the style of Taylor Swift"—these outputs do not reproduce specific works but mimic a particular creator's style. Current copyright law does not protect "style," only specific expression. But the "AI Stefanie Sun" phenomenon documented in *Community Culture* demonstrates that voice cloning tools have made "singing another person's song in a singer's timbre" a mass behavior. If "style" can be precisely extracted and transferred technologically, should the law re-examine the boundary between "style" and "expression"? The U.S. Copyright Office and courts have not yet issued specific rulings on this, but Universal Music's lawsuit against Anthropic is pushing this issue into the legal spotlight.

### The Double-Edged Sword of Class Actions

Starting in 2024, the lawsuit driven by the Authors Guild attempted to represent "all authors whose works were included in Books3." Once class action status is confirmed, settlement or judgment amounts could far exceed individual cases. But this is also a double-edged sword: if the court determines that training constitutes fair use, the class action judgment's effect would cover a vast number of copyright holders—effectively settling the matter in one stroke.

---

## IX. Timeline of Key Events

| Date | Plaintiff | Defendant | Core Dispute | Status |
|------|------|------|----------|------|
| 2023-02 | Getty Images | Stability AI | Training data contained copyrighted images; output bore watermark ghosts | Under trial in both UK and US |
| 2023-07 | Sarah Silverman et al. | OpenAI, Meta | Training data contained pirated books | Some claims dismissed; others proceed |
| 2023-09 | Authors Guild | OpenAI | Systematic copyright infringement | Under trial |
| 2023-10 | Universal Music Group | Anthropic | Claude output complete lyrics | Under trial |
| 2023-12 | The New York Times | OpenAI, Microsoft | Dual infringement: training and output | Under trial |
| 2023-03 | U.S. Copyright Office | — | *Zarya of the Dawn* registration decision | Pure AI generation unprotected |
| 2023-10 | The Intercept, Raw Story | OpenAI | News content copyright infringement | Under trial |
| 2024-01 | Axel Springer | — | Signed licensing agreement with OpenAI | Commercial licensing |
| 2024 | Multiple parties | — | UMG pushes AI music content ID and platform bans | Ongoing |

---

## X. Trend Analysis

- **The "chilling effect" of litigation arrives before verdicts**: Changes in data source disclosures, opt-out mechanisms, and copyright indemnification pledges are all "self-regulation forced by law." Industry behavior has already adjusted ahead of legal conclusions.

- **The ultimate determination of "fair use" will reshape the industry chain**: If training is deemed fair use, demand for data licensing markets will sharply contract; if deemed infringement, trained models face retroactive risks. Either outcome will rewrite the industry landscape.

- **The output side is more dangerous than the training side**: Even if training is legal, model output of copyrighted content may still constitute infringement. Filtering mechanisms and safety guardrails are not optional configurations—they are legal necessities.

- **Multi-jurisdictional parallelism creates "legal arbitrage" space**: The US, EU, UK, and Japan have different regulations on TDM and fair use. AI companies may choose to train in countries with more favorable legal environments—this has already begun influencing the geographic distribution of compute infrastructure.

- **Copyright holders' strategies are diverging**: NYT and Getty chose litigation, Axel Springer and AP chose licensing, and Universal Music simultaneously pursued litigation and industry lobbying. Different strategies will produce different precedential effects.

---

## Commentary

Copyright litigation marks the LLM industry's entry into a "rule of law" phase. Before 2023, training data acquisition followed the logic of "if the technology can do it, do it"—The Pile packaged 190,000 books, LAION indexed 5.8 billion images, and the internet was an unguarded mine. In 2023, the mine's owners stepped forward. The NYT, Getty, and Universal Music demanded compensation—not opposing AI technology per se, but discovering that years of accumulated content assets had been无偿 converted into model companies' core production factors.

But the lawsuits also exposed a deeper dilemma: models do not store and copy—they learn and compress. Using a "reproduction right" framework to regulate this behavior is like using horse-and-buggy regulations to manage automobiles—the tool is imprecise, but there is currently nothing better. Legal boundaries are still evolving: the NYT case may drag on until 2027 or beyond. Until then, the industry's data compliance strategies, model companies' risk hedging, and copyright holders' licensing pricing are all built on uncertain legal foundations. The chroniclers record this not to take sides, but to document a fact: the legal boundaries of large language models' most essential production factor—data—are being chiseled out, piece by piece, through litigation.

---

*This article was compiled by the Endfield Industrial Chronicle team: Fu Xuan (theoretical framework).*

---

[^1]: The New York Times v. Microsoft Corp. & OpenAI, Inc., Case No. 1:23-cv-11195 (S.D.N.Y.), Complaint filed 2023-12-27. https://nytco-assets.pdf.s3.amazonaws.com/NYT_Complaint_Dec2023.pdf
[^2]: OpenAI, "OpenAI and journalism", OpenAI Blog, 2024-01-08. https://openai.com/index/openai-and-journalism
[^3]: The New York Times, "Judge Denies Most of OpenAI's Motion to Dismiss in NYT Lawsuit", 2024-08. (Reported by multiple tech media outlets.)
[^4]: The Intercept v. OpenAI, Case No. 1:24-cv-01570 (S.D.N.Y.), filed 2024-02; Raw Story v. OpenAI, filed 2024-02.
[^5]: Getty Images (US) Inc. v. Stability AI Ltd., Claim No. IL-2023-000007 (High Court of Justice, England and Wales), filed 2023-02-03.
[^6]: Getty Images (US) Inc. v. Stability AI, Inc., Case No. 1:23-cv-00135 (D. Del.), filed 2023-02-03.
[^7]: UK Copyright, Designs and Patents Act 1988, Section 29A (as amended 2014), permitting text and data analysis for non-commercial research.
[^8]: As of mid-2026, Getty v. Stability AI remains undecided in both the UK and the US. Confirmed by multiple industry reports.
[^9]: Concord Music Group, Inc. v. Anthropic PBC, Case No. 3:23-cv-01092 (M.D. Tenn.), Complaint filed 2023-10-18.
[^10]: Anthropic denied infringement in its litigation response and claimed to have deployed content filtering measures. Compiled from legal reports.
[^11]: Universal Music Group, "UMG's principles for AI", 2023. https://www.universalmusic.com/ai-principles/
[^12]: As of mid-2026, Universal Music v. Anthropic remains in the trial phase. Confirmed by legal reports.
[^13]: Google LLC v. Oracle America, Inc., 593 U.S. ___ (2021). The U.S. Supreme Court ruled 6–2 that Google's copying of Java APIs constituted fair use.
[^14]: Directive (EU) 2019/790, Article 4, "Exception or limitation for text and data analysis".
[^15]: Hamburg, Germany court preliminary ruling on LAION data scraping and TDM exception (2024); specific case number uncertain, compiled from legal commentary.
[^16]: Japan Copyright Law Article 30-4 (added by 2018 amendment), permitting use of works for information analysis purposes.
[^17]: Cyberspace Administration of China et al. (seven departments), "Interim Measures for the Management of Generative AI Services", published 2023-07-13. https://www.gov.cn/zhengce/zhengceku/202307/content_6891752.htm
[^18]: U.S. Copyright Office, "Zarya of the Dawn (Registration # VAu001480796)", Decision Letter, 2023-02-21.
[^19]: U.S. Copyright Office, "Copyright Registration Guidance: Works Containing Material Generated by Artificial Intelligence", Federal Register, 2023-03-16.
[^20]: U.S. Copyright Office Review Board, "Re: Second Request for Reconsideration for the AIGA Entrance to Paradise" (DABUS-related application), 2023.
[^21]: Starting in 2024, some open-source projects began requiring contributors to declare that submissions contain no AI-generated code, or to specially label AI-generated portions. No unified industry standard yet exists.
[^22]: OpenAI, "Copyright Shield", OpenAI Blog, 2023-11. https://openai.com/blog/copyright-shield
[^23]: Adobe, "Adobe Firefly: Generative AI for Creative Professionals", 2023-03. https://www.adobe.com/sensei/generative-ai/firefly.html
