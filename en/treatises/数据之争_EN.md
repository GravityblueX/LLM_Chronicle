# Treatise: The Battle for Data

> The training data of large models has never been a purely technical matter. Whose data is used, how it is used, whether it was paid for, whether it can be deleted — each point involves a tug-of-war between copyright law, platform interests, privacy protection, and model capability. This thread runs from the release of The Pile in 2020 to the mainstreaming of synthetic data in 2025, passing through copyright litigation, data lockdowns, dataset takedowns, and industry responses. This treatise maps out these threads by theme, with dates and sources for each. No predictions — only facts.

---

## I. Overview

During 2017–2020, the origins of early large model training data attracted little attention. GPT-1 used BooksCorpus, GPT-2 used WebText, GPT-3 used a filtered version of Common Crawl — none of these generated significant copyright controversy. What truly made "data legitimacy" a central industry issue was the release of The Pile at the end of 2020 and the copyright reckoning triggered by ChatGPT in 2023.

Viewed along a timeline, the battle for data unfolded along at least four threads:

- **Text copyright**: The Pile contained Books3 → authors and rights holders sued OpenAI, Meta, Stability AI, and others;
- **Platform lockdowns**: Reddit and StackOverflow announced in 2023 that they would charge for or restrict AI training data access;
- **Image compliance**: LAION-5B's openness sparked privacy and content compliance controversies, ultimately leading to the dataset's temporary withdrawal;
- **Finding an exit**: Synthetic data evolved from a research experiment into a mainstream strategy.

These four threads are interconnected: copyright litigation raised the legal risk of data collection, platform lockdowns restricted free sources, compliance incidents exposed the fragility of open datasets, and synthetic data accelerated under all these pressures.

---

## II. The Pile and Books3: From Open Data to Copyright Reckoning

### 2.1 The Pile's Positioning

**2020-12-31**: EleutherAI published The Pile paper on arXiv, introducing an 800GB open text dataset. The data comprised 22 subsets: standard academic/code/encyclopedic sources such as PubMed, ArXiv, GitHub, StackExchange, and Wikipedia, alongside Books3 — a collection of approximately 196,640 books.[^1]

The Pile's original purpose was to lower the barrier to entry for large model training: GPT-3 used WebText but did not release it, and the community needed a reproducible, multi-source open dataset. The paper showed that GPT-Neo series models trained on The Pile approached same-scale GPT series performance on multiple benchmarks.[^1]

But The Pile, from the moment of its release, carried an unresolved fissure: the legality of Books3's book sources.

### 2.2 What Was Books3

Books3 was one of The Pile's 22 subsets, compiled by independent researcher Shawn Presser from text mirrors of the private torrent tracker Bibliotik. The dataset itself did not distinguish between public-domain and copyright-protected works — works by Stephen King, Margaret Atwood, George R.R. Martin, and many others were included, without authorization.[^2]

In 2023, *The Atlantic* confirmed in its reporting that Books3 contained over 190,000 books, the majority of which were still under copyright; the report cited reactions from multiple authors who noted they had been included in training data without their knowledge.[^2]

### 2.3 The Copyright Litigation Wave

ChatGPT's explosion in 2023 pushed Books3 from a technical community topic into the public eye. Copyright lawsuits appeared in rapid succession in the second half of 2023:

| Date | Plaintiff | Defendant | Core Dispute |
|------|-----------|-----------|--------------|
| 2023-07 | Sarah Silverman and two other authors | OpenAI, Meta | Alleged that ChatGPT and LLaMA training data contained pirated books, constituting copyright infringement |
| 2023-09 | Authors Guild and 17 authors (including John Grisham, George R.R. Martin, et al.) | OpenAI | Argued that ChatGPT was trained on pirated copies, constituting systematic infringement |
| 2023-10 | Multiple nonfiction authors | OpenAI, Microsoft | Alleged unauthorized use of nonfiction works for model training |
| 2023-12 | The New York Times | OpenAI, Microsoft | Alleged that ChatGPT could reproduce NYT articles verbatim, constituting copyright infringement and commercial substitution |

As of mid-2025, most of these cases remain in litigation, with no final judgments. But the lawsuits themselves have already changed industry behavior: model companies have become more cautious in training data disclosures, and some have begun offering opt-out mechanisms and copyright indemnity commitments.

After 2024, another category of lawsuits emerged — targeting not just training data but model outputs: when a user prompts a model to generate copyright-protected content, who bears responsibility? The trajectory of these cases is still evolving.

---

## III. Reddit and StackOverflow: Platform Lockdowns

### 3.1 Reddit's API Fees

After ChatGPT's release, Reddit quickly realized its data was a premium source for training large models — community discussions covering Q&A, tutorials, opinions, and code, continuously updated.

**2023-04-18**: Reddit announced it would charge for large-scale API access. CEO Steve Huffman stated in an interview: "Reddit's data corpus is extremely valuable, and we don't need to give away all that value for free to some of the largest companies in the world."[^3]

**2023-06-09**: Reddit posted a detailed explanation in its official community, pricing the API at $0.24 per 1,000 requests. This pricing led multiple third-party Reddit clients to announce shutdowns, sparking massive user protests and subreddit blackouts. For AI companies, the free data pipeline was permanently closed. Reddit's subsequent $60 million/year data licensing deal with Google marked a new phase of "monetizing user-generated content."[^4]

### 3.2 StackOverflow Moves to Paid Access

StackOverflow's response was even more direct. **2023-05-31**: Stack Overflow announced it would charge AI companies for training data access and stated it would launch its own AI product, OverflowAI.[^5]

By 2024, Stack Overflow had signed a data licensing agreement with OpenAI while continuing to charge other AI companies. This strategy drew controversy in the developer community: some argued that platforms had a right to benefit from their data, while others contended that StackOverflow's content was community-contributed and the platform should not have exclusive monetization rights.

### 3.3 The Domino Effect of Lockdowns

Reddit and StackOverflow were not isolated cases. During 2023–2024, Twitter/X, Getty Images, and several news publishing groups also joined the lockdown or paywall trend. The consequences were twofold:

- **Short-term**: Free, high-quality data sources shrank, and training costs rose.
- **Long-term**: Licensing agreements between model companies and data holders began to become industry standard. Data went from "picked up off the ground" to "bought at the table."

---

## IV. LAION and the Image Dataset Compliance Crisis

### 4.1 LAION-5B's Open Ambitions

**2022-03**: LAION released LAION-5B — an open dataset containing 5.85 billion image-text pairs, 14 times larger than its predecessor LAION-400M.[^6] It used the CLIP model to automatically filter image-text pairs from Common Crawl, quickly becoming the primary training data source for text-to-image models like Stable Diffusion.[^7]

LAION did not host the images themselves — it only provided URLs and alt text. This structure reduced distribution liability but also left a vulnerability: the content pointed to by URLs was beyond LAION's control.

### 4.2 The CSAM Incident

**2023-12-20**: The Stanford Internet Observatory published a report confirming the detection of links to Child Sexual Abuse Material (CSAM) within LAION-5B. The report noted that these links originated from the original Common Crawl scrapes and were not effectively excluded during CLIP filtering.[^8]

LAION subsequently announced the temporary takedown of the LAION-5B dataset and stated it would collaborate with Stanford and other institutions on cleanup. This incident changed the discourse framework around open datasets — the conversation was no longer solely about "openness" but also about "safety audit obligations."

### 4.3 Privacy and Portrait Rights

Beyond CSAM, LAION faced another dimension of problems: personal photographs and medical images. Researchers discovered that LAION-5B contained patient medical photographs (from illustrations in publicly accessible medical literature), personal social media photos, and similar content. Although this material was scraped from public web pages, its use shifted from "display" to "training AI," altering the legal basis.

During 2023–2024, European data protection authorities began examining whether LAION and similar datasets met GDPR requirements for lawful processing. The Hamburg data protection authority in Germany issued a preliminary assessment in 2024 suggesting that LAION's scraping activities might be protected by TDM (Text and Data Mining) exceptions, but this opinion was neither final nor necessarily applicable across all jurisdictions.

---

## V. Synthetic Data: From Alternative to Mainstream

### 5.1 What Is Synthetic Data

Synthetic data is not real data but data generated by existing models. The typical approach is: use a strong model to generate training samples, then use those samples to train another model. It is essentially a distillation loop where "the old model teaches the new model."

Synthetic data's appeal lies in bypassing three problems — copyright, privacy, and platform lockdowns: no need to scrape someone else's books, no need to buy Reddit's API, and no need to explain where the images came from.

### 5.2 Microsoft's Phi Series: The Textbook Strategy

The most striking case of synthetic data was Microsoft's Phi series.

**2023-06**: Microsoft Research released Phi-1, a 1.3B-parameter code model. What made it special was its training data: not from the web, but from "textbook-quality" synthetic data generated by GPT-3.5/GPT-4. The paper was simply titled "Textbooks Are All You Need."[^9]

Subsequent releases Phi-1.5 and Phi-2 continued this approach: using synthetic data combined with carefully curated web data to achieve unexpectedly strong capabilities at extremely small parameter scales.

This strategy was further amplified in the 2024 Phi-3 series: Phi-3-mini (3.8B) matched or exceeded 7B-level open-source models on multiple benchmarks, and its data recipe became a research hotspot.

### 5.3 Diffusion Across the Industry

By 2025, synthetic data had become the mainstream practice:

- **DeepSeek-R1** publicly mentioned using chain-of-thought synthetic data to distill small models;
- **The Llama 3 series** reportedly used synthetic data extensively in later training stages;
- **The Claude series** employed Constitutional AI methods — using synthetic data for RLHF;
- **Instruction fine-tuning datasets for major open-source projects** have mostly been mixed with or dominated by synthetic data.

Synthetic data has its own problems: model snowballing — child models can only learn the distribution that parent models can generate, biases may be amplified, and diversity may contract. Diversity monitoring for data, quality verification for synthetic data, and finding the optimal range for "synthetic data ratios" have become a new wave of research topics.

---

## VI. Factual Thread Table

| Date | Parties Involved | Event | Nature |
|------|-----------------|-------|--------|
| 2020-12 | EleutherAI | The Pile released, containing Books3 | Open dataset; planted copyright time bomb |
| 2022-03 | LAION | LAION-5B released | Open image-text dataset; provided training source for Stable Diffusion |
| 2023-04 | Reddit | Announced API fees | Platform lockdown of free data channels |
| 2023-05 | StackOverflow | Announced data access fees and OverflowAI launch | Platform lockdown |
| 2023-06 | Microsoft | Phi-1 released, trained on synthetic data | Synthetic data moves from niche experiment to product |
| 2023-07 | Multiple authors | Silverman et al. sue OpenAI | Copyright litigation begins |
| 2023-09 | Authors Guild | Joint lawsuit against OpenAI | Copyright litigation escalates, involving multiple bestselling authors |
| 2023-12 | NYT | Sues OpenAI/Microsoft | First major news organization to file suit |
| 2023-12 | Stanford / LAION | CSAM report published; LAION-5B taken down | Open dataset compliance crisis |
| 2024-05 | Stack Overflow / OpenAI | Data licensing agreement signed | Platform lockdown pivots to commercial licensing |
| 2024–2025 | Industry-wide | Synthetic data becomes mainstream training strategy | From reactive response to proactive choice |

---

## VII. Trend Analysis

- **Data shifted from "public resource" to "asset"**: The choices by Reddit and StackOverflow signaled that platforms would no longer tacitly permit free scraping. Data licensing agreements are replacing crawler scripts.
- **Compliance thresholds for open datasets have risen sharply**: After the LAION incident, releasing a large-scale dataset is no longer just a technical problem — it requires content safety audits, privacy compliance assessments, and legal risk forecasting.
- **Copyright litigation is unresolved but has already changed behavior**: No verdicts does not mean no impact. Companies have added opt-outs, indemnity commitments, and training data disclosures — all "consciences compelled by law."
- **Synthetic data is not a perfect solution, but the shift is irreversible**: The triple pressure of copyright, lockdowns, and compliance has turned synthetic data from a research option into an industry default. Its quality ceiling and bias amplification effects are the key questions for the next phase.
- **"Who owns the training data" is reshaping the value chain**: Upstream data holders (news groups, Reddit, StackOverflow) have gained bargaining power, midstream model companies face rising data costs, and downstream users may see models that are either increasingly capable or increasingly homogeneous.

---

## Commentary

The story of the large model industry's earliest years can be summarized as "data and compute were both picked up for free." The Pile packaged the scavenged data and distributed it to everyone; LAION fed scavenged images to Stable Diffusion; everyone assumed the internet was a mine that required no payment.

In 2023, the gates of that mine began to close one by one. Authors sued, platforms charged fees, datasets were taken down — it was not that any single entity had done wrong, but that the underlying assumption of "free by default" was being dismantled.

But this was not necessarily a bad thing. The era of free data gave rise to GPT and Stable Diffusion, but it also blurred the boundaries of rights. If training data were always free, content creators would forever be the party implicitly subsidizing model companies. Synthetic data, forced into existence by fees and litigation, may be imperfect, but it at least shifts data sources from "something that was taken" to "something that was made" — the former requires an apology or compensation, the latter only requires a technical breakthrough.

The historian records this not to take sides, but to remind those who follow: the most glorious years of large models were built on the dividends of a gray zone. Those dividends will eventually recede; only the rules left behind will define the road ahead.

---

*Compiled by the Endfield Industrial Historian Team: Yvonne (Architecture Audit)*

---

[^1]: Gao et al., "The Pile: An 800GB Dataset of Diverse Text for Language Modeling", arXiv:2101.00027, 2020-12-31. https://arxiv.org/abs/2101.00027
[^2]: Alex Reisner, "The Book-Piracy Problem", *The Atlantic*, 2023-08-23. https://www.theatlantic.com/technology/archive/2023/08/books3-ai-training-data/675102/
[^3]: Reddit, "Addressing the community about changes to our API", Reddit Blog, 2023-06-09. https://www.reddit.com/r/reddit/comments/145bram/addressing_the_community_about_changes_to_our_api/
[^4]: The Verge, "Reddit's API pricing is going into effect", 2023-07-01. https://www.theverge.com/2023/7/1/23781192/reddits-api-pricing-is-going-into-effect
[^5]: Stack Overflow, "Stack Overflow will charge AI giants for training data", 2023-05-31. https://www.wired.com/story/stack-overflow-will-charge-ai-giants-for-training-data/
[^6]: LAION, "LAION-5B: A New Era of Open Large-Scale Multi-Modal Datasets", 2022-03-31. https://laion.ai/blog/laion-5b/
[^7]: Schuhmann et al., "LAION-5B: An open large-scale dataset for training next generation image-text models", arXiv:2210.08402, 2022. https://arxiv.org/abs/2210.08402
[^8]: Stanford Internet Observatory, "LAION-5B CSAM Report", 2023-12-20. https://purl.stanford.edu/kh752sm9123
[^9]: Gunasekar et al., "Textbooks Are All You Need", arXiv:2306.11644, 2023-06. https://arxiv.org/abs/2306.11644
