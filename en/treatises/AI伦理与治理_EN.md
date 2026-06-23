# AI Ethics and Governance

> As models grow ever more powerful, a neglected question surfaces: what has AI done to people? The preceding chapters have discussed how models grew stronger, how companies profited, and how open-source challenged closed-source—yet have said almost nothing about what AI has done to people. This chapter records the neglected ethical dimensions of AI development: the shadow of the annotators, bias and blunders, deepfakes and disinformation, the environmental bill, the regulatory struggle, AI and employment, and the rise and fall of Effective Altruism. This is not an appendix to technological history—it is its other face.

---

## I. Overview

AI ethics is not a question of "whether to regulate" but of "who defines the boundaries of regulation." From ChatGPT's viral explosion in 2022 to Trump's revocation of Biden's executive order in 2025, AI governance underwent three years of rapid evolution. Technology companies used "safety" as a brand moat, governments used "regulation" as political leverage, and open-source communities used "transparency" as a counter-weapon—every party used the word "ethics," but with entirely different definitions.

This chapter covers seven themes: the shadow of the annotators reveals the invisible substrate of the AI industry; bias and blunders expose systemic inequality in training data; deepfakes and disinformation threaten the foundations of social trust; the environmental bill represents the physical cost of compute expansion; the regulatory struggle is a contest among competing interests; AI and employment impacts ordinary people's livelihoods; and the Effective Altruism movement served as the ideological infrastructure of AI safety—and its fractures.

These themes are not isolated—they collectively form a complex picture of AI and human society mutually shaping one another.

---

## II. The Shadow of the Annotators

### The Core Incident: OpenAI's Kenyan Annotators

In November 2021, OpenAI constructed safety filters for ChatGPT by sending large volumes of text fragments to outsourcing company Sama (formerly Samasource) for annotation. The annotated content included extreme descriptions of child sexual abuse, bestiality, murder, suicide, self-harm, incest, and other violent/pornographic material. The annotators were local workers in Nairobi, Kenya, earning a take-home wage of $1.32–$2/hour.[^1]

One annotator reported recurring hallucinations after reading a description of sexual acts between a human and a dog, saying "that is torture." Sama branded itself as an "ethical AI" company, claiming to help lift 50,000 people out of poverty. The annotation work ultimately led Sama to terminate its contract with OpenAI eight months early.[^1]

### Perspectives from All Sides

**OpenAI's response**: "Classifying and filtering harmful content is a necessary step in reducing violence and pornography in training data." **Partnership on AI**: "Despite the foundational role these data annotation professionals play, extensive research has revealed the precarious working conditions they face… out of sight, out of mind." **Critics**: The AI industry's "glossy" exterior depends on hidden labor from the Global South; these workers' contributions are systematically obscured.[^1]

### Scale AI's Outsourcing System

Scale AI (valued at billions of dollars) recruits crowdsourced annotators worldwide (Philippines, Kenya, Venezuela, etc.) through its subsidiary Remotasks. Controversies center on low wages, lack of social insurance, opaque task assignments, and annotators having no way to know where their annotated data is used.[^2]

### The Foundation and Cost of RLHF

RLHF (Reinforcement Learning from Human Feedback) is the bedrock of ChatGPT's safety, but whose "human feedback" does it come from? The answer: annotators from low-wage countries in the Global South. They read harmful content, perform ranking annotations, and承受 psychological trauma—for less than $2 per hour. This is not a technical problem; it is a labor ethics problem. The AI industry's "alignment" is built on "misaligned" labor relations.[^1] (See *The RLHF Chronicle*.)

---

## III. Bias and Blunders

### The COMPAS Recidivism Prediction System

COMPAS (Correctional Offender Management Profiling for Alternative Sanctions) is an algorithmic system for predicting recidivism risk, developed by Northpointe in 1998 and fully adopted by Wisconsin in 2012. A 2016 ProPublica investigation found: COMPAS's false-positive "high risk" rate for Black defendants was nearly twice that of white defendants; white defendants had higher false-negative "low risk" rates than Black defendants.[^3]

Northpointe's rebuttal: COMPAS's "calibration" was consistent across racial groups—among those rated high-risk, the actual re-offense rates were similar across groups. The fundamental contradiction: in the presence of systemic racial inequality, "calibration fairness" and "equal error rate fairness" cannot be simultaneously satisfied (Kleinberg et al. 2016 proved this impossibility theorem). The algorithm was a trade secret, inaccessible to defendants and the public. Simple, transparent algorithms were shown to have comparable predictive power to COMPAS.[^3]

### The Gemini Image Generation Blunder

In February 2024, Google Gemini's image generation feature, when asked to generate images of historical figures, tended to produce racially/gender-anachronistic depictions (such as portraying America's Founding Fathers or Nazi soldiers as people of color/women), sparking massive controversy. Google suspended Gemini's ability to generate images of people.[^4]

Critics (primarily conservative) argued Google had gone too far with "political correctness" and that AI had been injected with ideological bias. Google acknowledged "overcorrection." Technical analysis showed that the model's "safety alignment" mechanisms (designed to avoid racial homogeneity) overcompensated on prompts that did not specify race.[^4] (See *The Gemini Lineage*.)

### The Systemicity of Bias

AI bias is not accidental—it is a reflection of systemic inequality in training data. COMPAS's bias stems from racial disparities in historical crime data; Gemini's blunder stems from overcorrection toward "diversity." AI amplifies the biases in its training data, and training data is a mirror of human society. The question is not "whether AI has bias" but "what kind of bias do we want."

---

## IV. Deepfakes and Disinformation

### The Taylor Swift Deepfake Incident

In January 2024, AI-generated pornographic deepfake images of Taylor Swift spread massively on X (formerly Twitter) and other platforms, with individual posts garnering tens of millions of views. The technology was based on GAN and diffusion model face replacement/generation techniques. X was forced to block searches for "Taylor Swift"-related keywords. A White House spokesperson expressed being "deeply concerned about AI-generated non-consensual pornographic content."[^5]

### Political Deepfakes

During the 2024 U.S. presidential election, AI-generated political disinformation appeared (such as robocalls mimicking Biden's voice). When "seeing is believing" fails, what is the foundation of social trust? Deepfakes are not merely a technical problem—they are a systemic threat to democratic elections, judicial evidence, and journalistic integrity.[^5]

### Detection and Response

C2PA (Coalition for Content Provenance and Authenticity) established content provenance standards. The EU AI Act requires AI-generated content to be labeled. Deepfake detection technology has become an active research area. But detection technology always lags behind generation technology—it is a perpetual arms race.[^5]

---

## V. The Environmental Bill

### Training Carbon Emissions

A 2019 paper by Strubell et al. estimated that training a single large Transformer model (architecture search version) emitted approximately 284 tons of CO₂ (equivalent to the lifetime emissions of 5 cars).[^6] In 2020, GPT-3 training consumed approximately 1,287 MWh of electricity, emitting approximately 552 tons of CO₂.[^7]

### Data Center Energy Consumption

Meta announced in 2024 the construction of a training cluster containing approximately 600,000 NVIDIA H100 GPUs. A single H100 has a TDP of approximately 700W; 600,000 running at full load would consume approximately 420 MW—equivalent to the output of a mid-sized power plant.[^8]

### Google's Carbon Emissions Paradox

Google's 2024 environmental report showed carbon emissions had increased approximately 48% compared to 2019, primarily attributable to data center expansion driven by AI training/inference demand. The contradiction: Google had previously committed to achieving net-zero emissions by 2030.[^9]

### Water Consumption

Data centers that train large language models require vast amounts of water for cooling. During GPT-4 training, Microsoft's data center water consumption rose significantly. "Smarter AI" means more electricity and more water—this is the physical cost of compute expansion.[^10]

---

## VI. The Regulatory Struggle

### The EU AI Act

On August 1, 2024, the European Union's Artificial Intelligence Act officially entered into force. This was the world's first comprehensive AI legislation, adopting a risk-tiered system: AI applications posing unacceptable risk are banned (such as social credit scoring), high-risk AI systems must meet strict compliance requirements, limited-risk systems require transparency, and minimal-risk systems face no additional obligations. The Act established a regulatory framework for general-purpose AI models and foundation models.[^11]

Similar to the GDPR, the EU AI Act has extraterritorial reach—it can apply to non-EU companies with users in the European Union. Tech companies worried about compliance costs and innovation suppression; civil liberties organizations considered the exemption clauses (military/national security) too broad; open-source models received partial exemptions, but with blurry boundaries.[^11]

### Biden's AI Executive Order

On October 30, 2023, the White House released the "Executive Order on Safe, Secure, and Trustworthy Artificial Intelligence." This was the most comprehensive AI executive order from the U.S. federal government to date, covering safety testing standards, privacy protection, fairness, workforce impact, and national security. The order required companies developing the most powerful AI systems to report safety test results to the government.[^12]

### Trump's Revocation

On his inauguration day, January 20, 2025, Trump revoked Biden's executive order through "Initial Rescissions of Harmful Executive Orders and Actions." On January 23, he signed a replacement executive order, shifting the core focus from "safety and regulation" to "innovation and competitiveness." Safety researchers worried that removing safety requirements would create risks; the tech industry broadly welcomed the reduced regulatory burden.[^13]

### China's AI Regulations

China adopted a filing system rather than a legal framework for managing LLM deployment: the Data Security Law (2021), Algorithm Recommendation Management Provisions (2022/3), Deep Synthesis Management Provisions (2023/1), and Interim Measures for the Management of Generative AI (2023/8). AI-generated content is required to conform to "socialist core values." Western observers focus on censorship and free speech issues; China's framework emphasizes "balancing development and security."[^14]

### The Collision of Three Regulatory Philosophies

The European Union: strict legislation, risk-tiered, extraterritorial reach. The United States: executive orders flexible but unstable, subject to political cycles. China: filing system, ideological censorship, development-first. Global AI governance is not a completed puzzle but three different sets of rules running in parallel on the same track.

---

## VII. AI and Employment

### Artisan's "Stop Hiring Humans" Campaign

In November 2024, AI sales automation startup Artisan placed large billboards in San Francisco with the slogan "Stop Hiring Humans." The ads were widely criticized as "anti-human" and "disturbing." The CEO called it a marketing strategy deliberately designed to spark discussion. The ads reflected that anxiety about AI replacing white-collar work had moved from theoretical discussion into public visual space.[^15]

### Customer Service Job Displacement

Between 2023 and 2025, numerous companies replaced human customer service representatives with AI chatbots. Klarna (a Swedish fintech company) announced in 2024 that its AI customer service had handled two-thirds of customer service conversations, equivalent to the workload of 700 full-time employees. Controversies centered on: efficiency gains vs. job losses vs. service quality decline (AI customer service was frequently complained about by users for being "unable to solve problems").[^16]

### The Impact of Coding Assistants on Junior Programmers

AI coding assistants like GitHub Copilot, Cursor, and Claude Code can handle large amounts of junior/repetitive coding work. Optimists believe AI liberates programmers, allowing them to focus on architecture and creativity; pessimists believe junior positions are being compressed, raising the entry barrier for newcomers and potentially weakening the talent pipeline in the long term. Stack Overflow's 2024 developer survey showed over 75% of developers were using or planning to use AI coding tools.[^17]

### "AI Won't Replace You—People Who Use AI Will Replace You"

Is this statement true or a placebo? For those who have already mastered AI tools, it is true; for displaced customer service workers and junior programmers, it is a placebo. AI's impact on employment is not uniform—it replaces work that is standardizable and repeatable, while augmenting work that requires creativity, judgment, and interpersonal interaction. The question is not "whether AI will replace people" but "which people will be replaced and which will be augmented."

---

## VIII. Effective Altruism and AI Governance

### The Rise of the EA Movement

Effective Altruism (EA) originated in the 2000s, converging from three streams: Peter Singer's utilitarian ethics, GiveWell's evidence-based philanthropy, and the LessWrong rationalist community. Its core claim: use evidence and rationality to maximize the impact of good deeds. "Longtermism" holds that the well-being of future humans is equally important to that of present humans, with AI safety considered one of the highest-priority existential risks.[^18]

Open Philanthropy (founded by Dustin Moskovitz and Cari Tuna) is one of the largest funders of AI safety research. The EA community cultivated a large number of AI safety researchers—Anthropic's founding team had extensive EA backgrounds. 80,000 Hours listed "AI safety research" as one of the highest-impact career paths.[^18]

### The SBF/FTX Scandal's Impact

In November 2022, FTX collapsed, and Sam Bankman-Fried (SBF)—one of the EA movement's largest individual donors—was arrested. SBF publicly professed EA, claiming he was amassing vast wealth in order to "donate effectively." FTX's fraudulent behavior (misappropriating customer funds) formed a sharp contradiction with EA's moral claims.[^19]

The EA movement faced a severe credibility crisis: "If EA's biggest supporter is a fraud, where is the movement's judgment?" Internal community reflections: the risk of over-dependence on a single funding source; the moral hazard of the "earning to give" strategy. Some observers linked this incident to EA's "elitism" and "techno-solutionism" tendencies.[^19]

### EA's Legacy and Controversy

EA's core理念 (using evidence to maximize good) retains value independent of SBF. But its influence on AI governance has been profound: the flow of Open Philanthropy's funding, the agenda-setting of AI safety research, and the influence of "longtermism" on policymaking—all of these persist beyond SBF's imprisonment. The controversy: has EA focused excessively on "existential risks" (such as AI exterminating humanity) while neglecting present-day inequality?[^18]

---

## IX. Trend Analysis

The seven themes may appear independent, but they share internal logical intersections:

- **The invisible substrate**: The annotator labor problem reveals AI's global division of labor—tech companies in developed countries, annotation labor in the Global South, and obscured psychological trauma. This is not a technical problem; it is a labor ethics problem.

- **The amplifier of bias**: AI bias is not accidental—it is a reflection of systemic inequality in training data. COMPAS's bias stems from historical crime data; Gemini's blunder stems from overcorrection toward "diversity." AI amplifies the biases in its training data, and training data is a mirror of human society.

- **The erosion of trust**: Deepfakes are not merely a technical problem—they are a systemic threat to democratic elections, judicial evidence, and journalistic integrity. When "seeing is believing" fails, what is the foundation of social trust?

- **The cost of compute**: The environmental bill is the physical cost of compute expansion. Smarter AI means more electricity and more water. Google's carbon emissions paradox (committed to net-zero but emissions grew 48%) reveals the fundamental contradiction between AI development and sustainability.

- **The regulatory game**: The collision of three regulatory philosophies (EU's strict legislation, U.S. executive orders, China's filing system) reflects different societies' different tradeoffs between "safety" and "innovation." Global AI governance is not a completed puzzle but three different sets of rules running in parallel on the same track.

- **The employment shock**: AI's impact on employment is not uniform—it replaces standardizable, repeatable work while augmenting work that requires creativity, judgment, and interpersonal interaction. "AI won't replace you—people who use AI will replace you"—this statement is true for those who have already mastered AI tools, but a placebo for displaced customer service workers and junior programmers.

- **The ideological infrastructure**: The EA movement was the ideological infrastructure of AI safety, but the SBF scandal exposed its fragility. EA's core理念 (using evidence to maximize good) retains value, but its "elitism" and "techno-solutionism" tendencies face scrutiny.

---

## Commentary

AI ethics is not a question of "whether to regulate" but of "who defines the boundaries of regulation."

The shadow of the annotators, bias and blunders, deepfakes and disinformation, the environmental bill, employment shocks—none of these problems can be solved by technology alone. They require labor law, anti-discrimination law, election law, environmental law, and labor market policies—these are the governance tools of human society, not optimization objectives for algorithms.

The core of the regulatory struggle is not "whether to regulate" but "regulate by whose standards." The EU uses risk-tiering, the U.S. uses executive orders, and China uses a filing system—each defines the boundaries of "safety" and "innovation" according to its own values. The fragmentation of global AI governance is not accidental—it is an expression of different societies' values.

The Effective Altruism movement attempted to maximize good through "evidence and rationality," but the SBF scandal exposed its fragility: when "evidence" can be manipulated and "rationality" can be distorted, the definition of "good" itself becomes a question. EA's legacy lies not in SBF's fraud but in the fundamental question it raised: how do we ensure that AI's development serves humanity's long-term interests?

Ultimately, the boundaries of AI ethics are not determined by technology but by the power structures of human society. Annotators' wages, the definition of bias, the legal status of deepfakes, carbon emission standards, employment protections—these are not technical questions but political ones. Who defines the boundaries of regulation? The answer: those with the power to define them. The question is: do these people represent all those affected by AI?

---

*Compiled by the Endfield Industrial Chronicle team: Silence (lead writer).*

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
[^15]: Artisan "Stop Hiring Humans" campaign, covered by multiple outlets in November 2024.
[^16]: Klarna AI customer service press release, 2024.
[^17]: Stack Overflow Developer Survey 2024.
[^18]: Effective altruism. https://en.wikipedia.org/wiki/Effective_altruism
[^19]: Sam Bankman-Fried. https://en.wikipedia.org/wiki/Sam_Bankman-Fried
