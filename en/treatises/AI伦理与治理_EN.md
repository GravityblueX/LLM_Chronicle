# AI Ethics and Governance

> As models grow ever more powerful, a neglected question surfaces: what has AI done to people? The existing chronicle covers how models became stronger, how companies profited, and how open-source challenged closed-source — but says almost nothing about what AI has done to humans. This treatise records the overlooked ethical dimensions of AI development: the shadow workforce of annotators, bias and failures, deepfakes and disinformation, the environmental bill, the regulatory struggle, AI and employment, and the rise and fracture of Effective Altruism. This is not an appendix to the technology story — it is its other face.

---

## I. Overview

AI ethics is not a question of "whether to regulate" but of "who defines the boundaries of regulation." From ChatGPT's viral explosion in 2022 to Trump's revocation of Biden's executive order in 2025, AI governance underwent three years of rapid evolution. Technology companies used "safety" as a brand moat, governments used "regulation" as political leverage, and open-source communities used "transparency" as a counter-weapon — every party employed the word "ethics," but with entirely different definitions.

This treatise covers seven themes: the shadow workforce reveals the invisible underbelly of the AI industry; bias and failures demonstrate systematic inequalities embedded in training data; deepfakes and disinformation threaten the foundations of social trust; the environmental bill is the physical cost of computational expansion; the regulatory struggle is a contest among competing powers; AI and employment impacts the livelihoods of ordinary people; and the Effective Altruism movement serves as the ideological infrastructure of AI safety — and its fractures.

These themes are not isolated — together they form a complex picture of AI and human society mutually shaping one another.

---

## II. The shadow workforce

### Core event: OpenAI's Kenyan annotators

In November 2021, OpenAI constructed safety filters for ChatGPT by sending large volumes of text fragments to outsourcing company Sama (formerly Samasource) for annotation. The content to be annotated included descriptions of child sexual abuse, bestiality, murder, suicide, self-harm, incest, and other extreme violent/pornographic material. The annotators were local workers in Nairobi, Kenya, earning $1.32–$2 per hour.[^1]

One annotator reported recurring hallucinations after reading a description of sexual acts between a human and a dog, stating "that was torture." Sama positioned itself as an "ethical AI" company, claiming to have lifted 50,000 people out of poverty. The annotation work ultimately led Sama to terminate its contract with OpenAI eight months ahead of schedule.[^1]

### Perspectives from all sides

**OpenAI's response**: "Classifying and filtering harmful content is a necessary step in reducing violence and sexual content in training data." **Partnership on AI**: "Despite the fundamental role these data annotation professionals play, extensive research has revealed the precarious working conditions they face… out of sight, out of mind." **Critics**: the AI industry's "glossy" image depends on hidden labor from the Global South; these workers' contributions are systematically obscured.[^1]

### Scale AI's outsourcing system

Scale AI (valued in the billions) recruits crowdsourced annotators worldwide (Philippines, Kenya, Venezuela, etc.) through its subsidiary Remotasks. Controversy centers on low wages, lack of social insurance, opaque task assignments, and annotators' inability to know where their annotated data is used.[^2]

### RLHF's foundation and its cost

RLHF (Reinforcement Learning from Human Feedback) is the cornerstone of ChatGPT's safety, but whose "human feedback" does it rely on? The answer: annotators from low-wage countries in the Global South. They read harmful content, perform ranking annotations, and suffer psychological trauma — for less than $2 per hour. This is not a technical problem; it is a labor ethics problem. The AI industry's "alignment" is built upon "misaligned" labor relations.[^1] (See *The RLHF Chronicle*.)

---

## III. Bias and failures

### COMPAS recidivism prediction system

COMPAS (Correctional Offender Management Profiling for Alternative Sanctions) is an algorithmic system for predicting recidivism risk, developed by Northpointe in 1998 and fully adopted by Wisconsin in 2012. A 2016 ProPublica investigation found: COMPAS's false-positive "high risk" rate for Black defendants was nearly twice that for white defendants; the false-negative "low risk" rate for white defendants was higher than for Black defendants.[^3]

Northpointe rebutted: COMPAS's "calibration" was consistent across racial groups — among those rated high-risk, the actual re-offense proportions were similar across groups. The fundamental contradiction is that under conditions of systemic racial inequality, "calibration fairness" and "equal error rate fairness" cannot be simultaneously satisfied (Kleinberg et al. 2016 proved this impossibility theorem). The algorithm was a trade secret, inaccessible to defendants and the public. Simple, transparent algorithms were shown to have predictive power comparable to COMPAS.[^3]

### Gemini image generation failure

In February 2024, Google Gemini's image generation feature, when asked to generate historical figures, tended to produce racially/gender-inaccurate depictions (e.g., depicting America's Founding Fathers or Nazi soldiers as people of color/women), sparking massive controversy. Google suspended Gemini's ability to generate images of people.[^4]

Critics (primarily conservative) argued Google had gone too far with "political correctness" and that AI had been injected with ideological bias. Google acknowledged "overcorrection." Technical analysis indicated that the model's "safety alignment" mechanism (designed to avoid racial homogeneity) overcompensated on prompts that did not specify race.[^4] (See *The Gemini Chronicle*.)

### The systematicity of bias

AI bias is not accidental — it reflects systematic inequality in training data. COMPAS's bias stems from racial disparities in historical crime data; Gemini's failure stems from overcompensation for "diversity." AI amplifies the biases in its training data, and training data is a mirror of human society. The question is not "whether AI has bias" but "what kind of bias we want."

---

## IV. Deepfakes and disinformation

### The Taylor Swift deepfake incident

In January 2024, AI-generated pornographic deepfake images of Taylor Swift spread massively on X (formerly Twitter) and other platforms, with individual posts receiving tens of millions of views. The underlying technology was based on GAN and diffusion model face replacement/generation techniques. X was forced to block search terms related to "Taylor Swift." The White House press secretary stated being "deeply concerned about AI-generated non-consensual pornographic content."[^5]

### Political deepfakes

During the 2024 U.S. presidential election, AI-generated political disinformation appeared (such as robocalls mimicking Biden's voice). When "seeing is believing" fails, what is the foundation of social trust? Deepfakes are not merely a technical problem — they constitute a systematic threat to democratic elections, judicial evidence, and journalistic integrity.[^5]

### Detection and response

C2PA (Coalition for Content Provenance and Authenticity) established content provenance standards. The EU AI Act requires AI-generated content to be labeled. Deepfake detection technology has become an active research area. But detection technology always lags behind generation technology — this is a perpetual arms race.[^5]

---

## V. The environmental bill

### Training carbon emissions

A 2019 paper by Strubell et al. estimated that training a single Transformer large model (with architecture search) emitted approximately 284 tons of CO₂ (equivalent to the lifetime emissions of 5 cars).[^6] GPT-3's training in 2020 consumed approximately 1,287 MWh of electricity, emitting approximately 552 tons of CO₂.[^7]

### Data center energy consumption

Meta announced in 2024 the construction of training clusters containing approximately 600,000 NVIDIA H100 GPUs. A single H100 has a TDP of approximately 700W; 600,000 running at full load would consume approximately 420MW — equivalent to the output of a mid-sized power plant.[^8]

### Google's carbon emissions paradox

Google's 2024 environmental report showed carbon emissions had increased approximately 48% compared to 2019, primarily attributed to data center expansion driven by AI training/inference demand. The contradiction: Google had previously pledged to achieve net-zero emissions by 2030.[^9]

### Water consumption

Data centers training large models require vast quantities of water for cooling. During GPT-4's training, Microsoft's data center water consumption rose significantly. "Smarter AI" means more electricity and more water — this is the physical cost of computational expansion.[^10]

---

## VI. The regulatory struggle

### EU AI Act

On August 1, 2024, the European Union's AI Act officially entered into force. This was the world's first comprehensive AI legislation, adopting a risk-tiered system: AI applications posing unacceptable risk are banned (e.g., social credit scoring), high-risk AI systems must meet strict compliance requirements, limited-risk systems require transparency, and minimal-risk systems bear no additional obligations. The legislation established a regulatory framework for general-purpose AI models and foundation models.[^11]

The EU AI Act, similar to GDPR, has extraterritorial reach — it can apply to non-EU companies with users in the EU. Tech companies worried about compliance costs and innovation suppression; civil liberties organizations considered the exemption clauses (military/national security) overly broad; open-source models received partial exemptions, but the boundaries remained unclear.[^11]

### Biden's AI executive order

On October 30, 2023, the White House issued the "Executive Order on Safe, Secure, and Trustworthy Artificial Intelligence." This was the most comprehensive AI executive order from the U.S. federal government to date, covering safety testing standards, privacy protection, fairness, workforce impact, and national security. The order required companies developing the most powerful AI systems to report safety testing results to the government.[^12]

### Trump's revocation

On January 20, 2025, the day of his inauguration, Trump revoked Biden's executive order through the "Initial Rescissions of Harmful Executive Orders and Actions." On January 23, he signed a replacement executive order, shifting the focus from "safety and regulation" to "innovation and competitiveness." Safety researchers worried that removing safety requirements would create risks; the tech industry broadly welcomed the reduction in regulatory burden.[^13]

### China's AI regulations

China adopted a filing system rather than a legal framework to manage large model deployment: the Data Security Law (2021), Algorithm Recommendation Management Provisions (2022/3), Deep Synthesis Management Provisions (2023/1), and Interim Measures for the Management of Generative AI Services (2023/8). AI-generated content must conform to "socialist core values." Western observers focus on censorship and free speech issues; China's framework emphasizes "balancing development and security."[^14]

### Collision of three regulatory philosophies

The EU: strict legislation, risk tiers, extraterritorial reach. The United States: executive orders are flexible but unstable, subject to political cycles. China: filing systems, ideological censorship, development-first. Global AI governance is not a completed jigsaw puzzle but three different sets of rules running in parallel on the same track.

---

## VII. AI and employment

### Artisan's "Stop Hiring Humans" campaign

In November 2024, AI sales automation startup Artisan placed large billboard advertisements in San Francisco with the slogan "Stop Hiring Humans." The ads were widely criticized as "anti-human" and "disturbing." The CEO stated it was a deliberate marketing strategy to provoke discussion. The ads reflected that anxiety about AI replacing white-collar work had moved from theoretical debate into public visual space.[^15]

### Customer service job displacement

Between 2023 and 2025, numerous companies replaced human customer service representatives with AI chatbots. Klarna (Swedish fintech company) announced in 2024 that its AI customer service had handled two-thirds of customer service conversations, equivalent to the workload of 700 full-time employees. Controversy centered on: efficiency gains vs. job losses vs. declining service quality (AI customer service was frequently criticized by users for "being unable to resolve issues").[^16]

### Impact of coding assistants on junior programmers

AI coding assistants such as GitHub Copilot, Cursor, and Claude Code can handle a large volume of junior/repetitive coding work. Optimists believe AI liberates programmers to focus on architecture and creativity; pessimists believe junior positions are being compressed, raising barriers to entry for newcomers and potentially weakening the talent pipeline over time. Stack Overflow's 2024 Developer Survey showed that over 75% of developers were using or planning to use AI coding tools.[^17]

### "AI won't replace you — people who use AI will replace you"

Is this statement true or a placebo? For those who have already mastered AI tools, it is true; for displaced customer service workers and junior programmers, it is a placebo. AI's impact on employment is not uniform — it replaces standardized, repeatable work and augments work requiring creativity, judgment, and interpersonal interaction. The question is not "whether AI will replace people" but "which people will be replaced and which will be augmented."

---

## VIII. Effective Altruism and AI governance

### The rise of the EA movement

Effective Altruism (EA) originated in the 2000s from the convergence of three threads: Peter Singer's utilitarian ethics, GiveWell's evidence-based philanthropy, and the LessWrong rationalist community. Its core claim: use evidence and rationality to maximize the impact of good deeds. "Longtermism" holds that the well-being of future humans is equally important as that of present humans, and AI safety is regarded as one of the highest-priority existential risks.[^18]

Open Philanthropy (founded by Dustin Moskovitz and Cari Tuna) is one of the largest funders of AI safety research. The EA community cultivated a large number of AI safety researchers — Anthropic's founding team had extensive EA backgrounds. 80,000 Hours listed "AI safety research" as one of the highest-impact career paths.[^18]

### The SBF/FTX scandal's impact

In November 2022, FTX collapsed, and Sam Bankman-Fried (SBF) — one of the EA movement's largest individual donors — was arrested. SBF publicly professed adherence to EA, claiming his vast wealth accumulation was for the purpose of "effective giving." FTX's fraudulent conduct (misappropriation of customer funds) stood in sharp contradiction with EA's moral claims.[^19]

The EA movement faced a severe credibility crisis: "If EA's biggest supporter is a fraud, where is the movement's judgment?" Internal community reflection focused on: the risk of over-reliance on a single funding source; the moral hazard of the "earning to give" strategy. Some observers linked this event to EA's "elitism" and "techno-solutionist" tendencies.[^19]

### EA's legacy and controversies

EA's core理念 (using evidence to maximize good) retains value independent of SBF. But its influence on AI governance has been profound: Open Philanthropy's funding flows, AI safety research agenda-setting, longtermism's influence on policymaking — none of these disappear because SBF went to prison. The controversy is whether EA has over-focused on "existential risks" (such as AI extinction) while neglecting present-day inequality.[^18]

---

## IX. Trend analysis

The seven themes appear independent but share underlying logical intersections:

- **The invisible underclass**: The annotator labor issue reveals the global division of labor in the AI industry — technology companies in developed countries, annotation labor in the Global South, and obscured psychological trauma. This is not a technical problem; it is a labor ethics problem.

- **The bias amplifier**: AI bias is not accidental — it reflects systematic inequality in training data. COMPAS's bias stems from historical crime data; Gemini's failure stems from overcompensation for "diversity." AI amplifies the biases in its training data, and training data is a mirror of human society.

- **The erosion of trust**: Deepfakes are not merely a technical problem — they constitute a systematic threat to democratic elections, judicial evidence, and journalistic integrity. When "seeing is believing" fails, what is the foundation of social trust?

- **The cost of computation**: The environmental bill is the physical cost of computational expansion. Smarter AI means more electricity and more water. Google's carbon emissions paradox (pledging net-zero while emissions grew 48%) reveals the fundamental tension between AI development and sustainability.

- **The regulatory game**: The collision of three regulatory philosophies (EU strict legislation, U.S. executive orders, China's filing system) reflects different societies' different trade-offs between "safety" and "innovation." Global AI governance is not a completed jigsaw puzzle but three different sets of rules running in parallel on the same track.

- **The employment shock**: AI's impact on employment is not uniform — it replaces standardized, repeatable work and augments work requiring creativity, judgment, and interpersonal interaction. "AI won't replace you — people who use AI will replace you" — for those who have mastered AI tools, this is true; for displaced customer service workers and junior programmers, it is a placebo.

- **Ideological infrastructure**: The EA movement is the ideological infrastructure of AI safety, but the SBF scandal exposed its fragility. EA's core idea (using evidence to maximize good) retains value, but its "elitism" and "techno-solutionist" tendencies are under scrutiny.

---

## Commentary

AI ethics is not a question of "whether to regulate" but of "who defines the boundaries of regulation."

The shadow workforce, bias and failures, deepfakes and disinformation, the environmental bill, the employment shock — none of these problems can be solved by technology alone. They require labor law, anti-discrimination law, election law, environmental law, and labor market policies — the governance tools of human society, not optimization objectives of algorithms.

The core of the regulatory struggle is not "whether to regulate" but "by whose standards to regulate." The EU uses risk tiers, the United States uses executive orders, China uses a filing system — each party defines "safety" and "innovation" using its own values. The fragmentation of global AI governance is not accidental — it is an expression of differing societal values.

The Effective Altruism movement sought to maximize good through "evidence and rationality," but the SBF scandal exposed its fragility: when "evidence" can be manipulated and "rationality" can be distorted, the definition of "good" itself becomes a question. EA's legacy lies not in SBF's fraud but in the fundamental question it raised: how do we ensure that AI development serves humanity's long-term interests?

Ultimately, the boundaries of AI ethics are not determined by technology but by the power structures of human society. Annotator wages, the definition of bias, the legal status of deepfakes, carbon emission standards, employment protections — these are not technical questions but political ones. Who defines the boundaries of regulation? The answer: those with the power to define. The question is whether those people represent all those affected by AI.

---

*Compiled by the Endfield Industrial Chronicle team: Silence (Lead Writer).*

---

[^1]: Perrigo, "OpenAI Used Kenyan Workers on Less Than $2 Per Hour to Make ChatGPT Less Toxic", TIME, 2023-01-18. https://time.com/6247678/openai-chatgpt-kenya-workers/
[^2]: Scale AI. https://en.wikipedia.org/wiki/Scale_AI
[^3]: Angwin et al., "Machine Bias", ProPublica, 2016. https://www.propublica.org/article/machine-bias-risk-assessments-in-criminal-sentencing
[^4]: Google Gemini image generation controversy. https://en.wikipedia.org/wiki/Google_Gemini#Image_generation_controversy
[^5]: Deepfake. https://en.wikipedia.org/wiki/Deepfake
[^6]: Strubell et al., "Energy and Policy Considerations for Deep Learning in NLP", ACL 2019. https://arxiv.org/abs/1906.02243
[^7]: Patterson et al., "Carbon Emissions and Large Neural Network Training", arXiv:2104.10350, 2021.
[^8]: Meta 2024 AI infrastructure disclosures.
[^9]: Google Environmental Report 2024.
[^10]: Li et al., "Making AI Less 'Thirsty': Uncovering and Addressing the Secret Water Footprint of AI Models", arXiv:2304.03271, 2023.
[^11]: European Union Artificial Intelligence Act. https://en.wikipedia.org/wiki/European_Union_Artificial_Intelligence_Act
[^12]: Executive Order 14110. https://en.wikipedia.org/wiki/Executive_Order_14110
[^13]: Executive Order 14179. https://en.wikipedia.org/wiki/Executive_Order_14179
[^14]: Artificial intelligence in China. https://en.wikipedia.org/wiki/Artificial_intelligence_in_China
[^15]: Artisan "Stop Hiring Humans" campaign, November 2024, reported by multiple outlets.
[^16]: Klarna AI customer service press release, 2024.
[^17]: Stack Overflow Developer Survey 2024.
[^18]: Effective altruism. https://en.wikipedia.org/wiki/Effective_altruism
[^19]: Sam Bankman-Fried. https://en.wikipedia.org/wiki/Sam_Bankman-Fried
