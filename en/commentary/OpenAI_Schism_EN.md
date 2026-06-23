# The OpenAI schism and evolution

> OpenAI's decade-long history is not a corporate history — it is a history of institutional experimentation. It began with "we are a nonprofit, unconstrained by financial return" and ended with "we are valued in the hundreds of billions and pursuing full for-profit conversion." Every step in between — the transformation, the fundraising, the closed-sourcing, the firing of the CEO, the re-hiring of the CEO — was answering the same question: **an organization whose mission is to "benefit all of humanity" — how long can it hold out against the compute hunger of frontier AI before it changes its founding principles?**

---

## I. The structural contradiction: Nonprofit ideals versus compute reality

Every schism at OpenAI — of people, of direction, of brand — can be traced to one structural contradiction: **its mission demands openness and safety, but frontier AI training demands closure and enormous capital.**

In December 2015, OpenAI's founding statement was unambiguous:

> "Our goal is to advance digital intelligence in the way that is most likely to benefit humanity as a whole, unconstrained by a need to generate financial return." [^1]

"Unconstrained by a need to generate financial return." In 2015, this sounded like idealism. By 2020, it had become an impossible promise.

The reason is simple: training costs for large language models grew exponentially. GPT-1 (2018) cost roughly tens of thousands of dollars to train. GPT-2 (2019) cost roughly hundreds of thousands. GPT-3 (2020) was estimated at $4.6 million to $12 million.[^2] GPT-4 (2023) was estimated at $63 million to $100 million.[^3] These figures grew far faster than a nonprofit's fundraising capacity — and far faster than any single donor's patience.

The fatal flaw of the nonprofit structure was exposed here: it could raise money for research, but it could not raise money for **scale.** In the early days of deep learning (2015–2018), a few million dollars in donations could support first-rate research. By the Transformer era, training a frontier model required hundreds of millions of dollars in compute costs — this was not something donations could cover; it required capital markets.

This contradiction was not a failure of OpenAI's management — it was **an incompatibility between physical constraints and institutional design.** As long as frontier AI training consumed ever-larger scales of compute, any AI organization that did not plug into capital markets would be left behind.

---

## II. The transformation trilogy: From nonprofit to capped-profit to full for-profit

### 2.1 Step one: Capped profit (2019-03)

In March 2019, OpenAI announced its transformation into **OpenAI LP** — a "capped-profit" entity. Investor returns were capped at 100 times, with excess going to the nonprofit entity. Sam Altman gave up personal equity to maintain the legitimacy of the "nonprofit spirit." [^4]

The legal innovation was elegant: it nominally preserved the "nonprofit" shell — the nonprofit entity still retained control of the company — while substantively opening the door to commercial capital. A "100x return cap" was an extremely high cap in Silicon Valley — high enough to attract venture capital while sustaining the narrative of "we're not in it for the money."

**Internal logic:** OpenAI needed money but could not openly admit it needed money. Capped profit was a compromise — "We're not in it for the money, but if we happen to make some, we'll share — just not too much."

### 2.2 Step two: Microsoft enters (2019-07, 2023-01)

In July 2019, Microsoft invested $1 billion in OpenAI, and Azure became OpenAI's exclusive cloud provider.[^5] In January 2023, Microsoft added a "multi-year, multi-billion dollar" investment, estimated externally at approximately $10 billion.[^6]

The consequences of Microsoft's investment went beyond capital — they reshaped **the power structure.** When your compute depends entirely on a tech giant, your independence is an illusion. OpenAI's mission statement says "unconstrained by financial return" — but it was effectively beholden to Microsoft's Azure roadmap, Microsoft's equity demands, and Microsoft's Copilot product strategy.

**Internal logic:** Compute hunger transformed OpenAI from "independent research lab" to "quasi-subsidiary of Microsoft." This did not happen overnight — it was completed incrementally through two investments, one exclusive cloud partnership, and one ten-billion-dollar infusion. Each step had sound business logic, but each step tightened Microsoft's chain of control.

### 2.3 Step three: Full for-profit conversion (2024–2025)

From late 2024 through 2025, OpenAI began pushing for full for-profit conversion — transitioning from a "capped-profit" company to a standard for-profit corporation (PBC, Public Benefit Corporation).[^7] This meant:

- Investor returns would no longer have a 100x cap
- The nonprofit entity would lose legal control of the company
- Corporate governance would shift from "mission-driven" to "shareholder-value-driven"

The immediate driver was valuation pressure. OpenAI's valuation in 2024–2025 reached hundreds of billions of dollars — fundraising at this scale was impossible within the "capped-profit" legal framework. Venture capital and sovereign wealth funds demanded a standard for-profit structure — no caps, no nonprofit board veto power.

**Internal logic:** From nonprofit to capped profit was "for compute." From capped profit to full for-profit was "for capital." The two transformations had different drivers, but the same direction — each step was a further retreat of idealism before reality.

---

## III. November 2023: 104 hours of institutional crisis

### 3.1 The event

On November 17, 2023, OpenAI's board of directors suddenly removed Sam Altman as CEO, citing that "he was not consistently candid in his communications with the board." [^8]

What followed over the next 104 hours remains the most dramatic event in large language model history: 700+ employees signed an open letter demanding Altman's reinstatement, threatening to leave for Microsoft en masse; Microsoft CEO Satya Nadella announced he would welcome Altman and Brockman; ultimately Altman was restored, the board was restructured, and Ilya Sutskever left the board.

### 3.2 Underlying causes: The structural conflict between safety and commercialization

The surface reason for Altman's ouster was "lack of candor in communications" — but virtually every informed observer points to the same deep contradiction: **the irreconcilability between the safety faction and the commercial faction.**

This contradiction did not emerge in November 2023. Altman himself, in a 2019 internal email, described the company's internal divisions as "tribes" — on one side the for-profit division pursuing commercialization, on the other the safety division worried about AI capabilities.[^15] Resentment concentrated and erupted in the second half of 2023: in October, Altman diminished Sutskever's role within the company, further escalating tensions.[^16] Immediately afterward, Altman was seeking billions in investment from Middle Eastern sovereign wealth funds to develop AI chips to compete with Nvidia, and was collaborating with SoftBank's Masayoshi Son and former Apple designer Jony Ive on AI hardware — Sutskever and his allies believed these activities improperly exploited the OpenAI name.[^16]

The DevDay conference on November 6, 2023 became the final trigger: Altman unveiled a series of commercialization initiatives including custom ChatGPT instances, which the opposition interpreted as a clear signal of OpenAI's accelerating commercialization.[^17] Eleven days later, the board acted.

The safety faction was represented by Ilya Sutskever. Sutskever was a co-founder and Chief Scientist of OpenAI who from the beginning regarded "safety" as OpenAI's reason for existence. In his view, the safety problem of AGI was not a post-hoc feature — it was OpenAI's entire purpose. If an AGI research organization compromised on safety, how was it different from Google or Facebook? Before the ouster, at the board's request, Sutskever compiled a 52-page memorandum and an approximately 70-page annotated dossier (containing internal communications, documents, and photographs) accusing Altman of "a pattern of…lying" and providing false information to company executives and the board — particularly on safety matters.[^18] This dossier was not revealed until April 2026, when *The New Yorker*'s investigative report — Ronan Farrow's 70-page long-form piece — brought the full details to light.[^18]

Another key board member was Helen Toner — Director of Strategy at Georgetown's CSET, with a background in the effective altruism movement. In October 2023, she published the paper "Decoding Intentions: AI and Costly Signals," which criticized OpenAI's safety efforts while praising Anthropic's approach. Altman called Toner to say the paper "could cause trouble" because the FTC was investigating OpenAI's data collection. Toner saw this as proof that Altman was manipulating board members for private gain.[^19] Additionally, in November 2023, reports emerged that a classified project codenamed Q* had achieved breakthroughs in logical and mathematical reasoning, reportedly reaching elementary-school math level — concerns about how Altman handled the safety implications of this discovery were submitted to the board shortly before the ouster.[^20]

The commercial faction was represented by Altman. Altman was not from a technical background — he was the former president of Y Combinator, a natural entrepreneur and fundraising expert. In his view, OpenAI's mission was meaningful only if the organization was powerful enough — a weak but "safe" AI lab could not change the world. To become powerful required money. To earn money required productization. To productize required speed. Safety mattered — but could not be a reason not to move forward.

At noon on November 17, 2023, after a "deliberative review process," the board immediately terminated Altman — Altman was watching the Las Vegas Grand Prix when he was notified via Google Meet, just 5–10 minutes before the termination.[^21] Sutskever then notified board chairman Greg Brockman via Google Meet — Brockman promptly resigned as chairman. But Altman's 700 employees (roughly 95% of the total) voted with their feet — they signed a letter threatening to collectively resign, choosing Altman over the board.[^22]

Microsoft even approached Anthropic's Dario Amodei behind the scenes, proposing that he replace Altman and potentially merge the two companies — Amodei declined both proposals.[^22] The ultimate settlement: Altman returned, Toner, McCauley, and Sutskever left the board, replaced by Lawrence Summers and Bret Taylor.[^22]

Sutskever said at an all-hands meeting that firing Altman was "the board doing its job" — but expressed regret a week later.[^19] This vacillation of "did the right thing but could not bear the consequences" is itself a microcosm of the safety faction's dilemma: they had institutional power (voting rights) but not organizational strength (employee loyalty).

**Institutional lesson:** In a company with 770 employees and a valuation in the tens of billions, four board members could fire the CEO without advance notice — and 700 employees could overturn the board through collective resignation. This event exposed a core problem: OpenAI's governance structure was designed for a small nonprofit research lab — not for one of the world's largest AI product companies. When the company's actual scale and influence far exceed its governance framework, institutional collapse is only a matter of time.

### 3.3 Aftermath: The collective exodus of the safety team

After Altman's reinstatement, Ilya Sutskever formally left OpenAI in May 2024. One month later, he announced the founding of **Safe Superintelligence Inc. (SSI)** — an independent research institution focused on superintelligence safety, co-founded with former Apple AI lead Daniel Gross and former OpenAI researcher Daniel Levy.[^9]

SSI's name was itself a declaration: **the safety problem of superintelligence is too important to be solved inside a company that has already commercialized.** The capital market's response was astonishing: $1 billion raised in September 2024 (from SV Angel, DST Global, Sequoia Capital, a16z), and a valuation soaring to $30 billion by March 2025 — a sixfold increase in six months.[^23] In April 2025, SSI partnered with Google Cloud for TPU access. In the first half of 2025, Meta attempted to acquire SSI; Sutskever refused. In July 2025, co-founder Daniel Gross departed to join Meta Superintelligence Labs, leaving Sutskever as sole CEO — the company had approximately 50 employees.[^23]

Sutskever's decade at OpenAI taught him one lesson — the "internal reform" path had failed. He pushed safety research from within OpenAI for a decade, only to be overturned by the collective will of 700 employees in a single board vote. This led him to conclude that safety must be advanced in an organization **independent of commercial pressure.**

But Sutskever was not the only one to leave. In May 2024, **Jan Leike**, co-lead of OpenAI's Superalignment project, announced his resignation — writing on X:

> "Over the past years, safety culture and processes have taken a backseat to shiny products." [^24]

> "I gradually lost trust in OpenAI's leadership." [^24]

Leike subsequently joined Anthropic. According to *The Decoder*, OpenAI's AI safety team lost at least seven researchers in those months — including Sutskever, Leike, and Daniel Kokotajlo, among others.[^24] Earlier still, OpenAI co-founder **John Schulman** also joined Anthropic in 2024.[^25]

Sutskever was co-creator of AlexNet, co-author of the AlphaGo paper, co-founder of OpenAI, champion of the GPT series and the o1 reasoning model, three-time NeurIPS Test of Time award winner (2022–2024), and called "one of the most cited computer scientists." His trajectory is the personification of the "safety vs. commerce" tension line. When such a person chooses to leave and found an independent safety lab, the signal value far exceeds the commercial significance.

---

## IV. "Open" AI: From most open to most closed

The name "OpenAI" contains the word "Open" — a word that underwent the most ironic semantic shift over the course of a decade.

| Period | Meaning of "Open" | Degree of openness |
|--------|-------------------|-------------------|
| 2015–2018 | Open research, open-source tools | High (OpenAI Gym, Universe open-sourced) |
| 2018–2019 | GPT-2 "staged release" | Medium (open with reservations) |
| 2020 | GPT-3 API-only | Low (weights not open) |
| 2023 | GPT-4 fully black-box | Very low (parameters, data, architecture undisclosed) |
| 2024–present | Closed-source + paid | Very low (chain of thought hidden, $200/month subscription) |

From "the most open AI lab" to "the most closed frontier model company" — this transformation did not happen overnight but was completed through a series of "decisions with reasonable justifications":

1. GPT-2 was not released because it was "too dangerous" — reasonable
2. GPT-3 was API-only because "a business model was needed to support larger models" — reasonable
3. GPT-4's parameters were not disclosed because of "competitive considerations" — reasonable
4. o1's chain of thought was hidden because of "safety considerations" — reasonable

Each step had a reasonable justification. But taken in sequence, "Open" had transformed from a mission into an irony. OpenAI's critics — including Elon Musk — repeatedly used this irony to attack it: "A company that was supposed to be as open as Linux became as closed as Microsoft." [^10]

DeepSeek-R1's MIT open-sourcing pushed this irony to its extreme. When a reasoning model of comparable capability was given away completely free and completely public — including its chain of thought — OpenAI's narrative that "safety requires closed-source" was factually challenged.[^11] The question was no longer "should OpenAI open-source" — but "if someone else open-sourced an equally powerful model and the world did not end, where exactly lies the justification for OpenAI staying closed?"

---

## V. How the schisms reshaped the entire industry

OpenAI's internal contradictions did not only affect OpenAI itself — they gave rise to a series of "émigré companies," each representing a different reflection on OpenAI's path.

### 5.1 The first schism: Anthropic (2021)

From late 2020 through early 2021, OpenAI Vice President Dario Amodei and a group of safety researchers departed to found Anthropic. The immediate trigger was GPT-3's API commercialization — Dario and others believed that pushing a 175B-parameter model to market without a safety evaluation framework was a betrayal of OpenAI's mission.[^12]

Anthropic represented the **safety-first external institution** path. It did not attempt to change OpenAI from within — it founded a new company and redefined the meaning of "safety" through Constitutional AI: not "manually reviewing every output" but "using auditable rules to let the model self-constrain." [^13]

During the November 2023 OpenAI civil war, the board even approached Amodei personally, proposing that he replace Altman and potentially merge the two companies — Amodei declined both proposals.[^22] This detail is critical: at OpenAI's most desperate moment, the board turned to the safety faction's émigrés for help — proving that they themselves acknowledged the safety faction's judgment was, in some sense, correct. But Amodei's refusal also proved one thing: the émigrés no longer believed that "returning to reform OpenAI from within" was viable.

Anthropic's founding proved something: AI safety is not a problem that can be solved by "allocating more resources within an existing company" — it requires **institutional safeguards at the organizational level.** A company that must continuously release more powerful models under commercial pressure will naturally place safety behind "more powerful."

### 5.2 The second schism: SSI and the great safety exodus (2024)

If Anthropic was OpenAI's first safety schism — the commercial faction won, the safety faction departed — then the 2024 collective safety team exodus was the second schism, larger in scale and clearer in signal.

The November 2023 Altman ouster was the catalyst: Sutskever witnessed firsthand that even with voting power at the board level, the safety faction could not withstand the combined force of "700 employees + Microsoft + Altman." He expressed regret within five days — but the rift was irreparable. In May 2024, Sutskever formally departed. That same month, Jan Leike publicly stated what became the most-quoted line of the episode: "safety culture and processes have taken a backseat to shiny products" — and then he too left. John Schulman — OpenAI co-founder and core champion of RLHF — also went to Anthropic in 2024.

Sutskever's SSI represented the **independent path for superintelligence safety.** Its name — Safe Superintelligence Inc. — was blunt to the point of provocation: safety is not "a feature"; safety is "the entire company's sole purpose." [^9] And the capital market responded with a $30 billion valuation — proving one thing: **a company whose sole mission is safety can achieve a higher valuation than many commercially oriented AI companies.** [^23]

### 5.3 The shadow of a third schism

As of mid-2026, OpenAI is pushing forward with full for-profit conversion. This means the nonprofit entity will lose legal control — the last institutional safety barrier is being dismantled. If this process is completed, OpenAI will no longer have any **structural** safety constraints — only management's good-faith promises.

Each schism repeats the same pattern: the safety faction discovers "internal reform" is insufficient, chooses to depart, and founds a new organization. Anthropic (2021) was the first wave; SSI (2024) was the second. If this pattern continues — if OpenAI's full for-profit conversion triggers a third wave of safety-faction departures — then the AI safety movement will be thoroughly fragmented into multiple small independent organizations, each working in its own direction but none possessing sufficient influence to counterbalance OpenAI's commercial decisions.

---

## VI. Is this inevitable for technology companies?

OpenAI's schism pattern — "idealist founding → capital-driven transformation → internal split → émigrés found new organizations" — is not unique to OpenAI. It is practically the inevitable path of every "mission-driven technology company."

**Google/DeepMind:** DeepMind founder Demis Hassabis repeatedly clashed with Google management over AI safety and organizational independence. In 2023, DeepMind was merged into Google DeepMind, losing its legal independence.[^14]

**Tesla/Autopilot:** Musk himself was both an OpenAI co-founder and the driving force behind Tesla AI. His "conflict" between OpenAI and Tesla — the very "potential future conflict" mentioned in OpenAI's founding statement — is itself a microcosm of the inherent contradiction within tech companies.[^2]

**Why inevitable?** Because two characteristics of frontier AI — **compute hunger** and **safety risk** — are fundamentally contradictory. Compute hunger demands capital-intensive investment; capital demands returns; returns demand commercialization; commercialization demands speed. Safety risk demands caution; caution demands slowdown; slowdown demands delayed releases. These two characteristics cannot coexist peacefully within the same company — the tension between them will accumulate until it is released through schism.

This is not a story of "bad people versus good people." Altman is not a bad person — he made the right product decisions at the right time (ChatGPT), bringing unprecedented public attention to AI. Sutskever is not a bad person — he held firm to a correct belief (safety cannot be diluted by commercialization). Amodei is not a bad person — he chose to advance safety through action rather than argument.

This is an **institutional design problem.** A nonprofit structure cannot support the compute demands of frontier AI training. A for-profit structure cannot internalize sufficient safety constraints. Capped profit is a compromise, but compromises cannot endure. Currently, no one has found an institutional framework that can simultaneously secure sufficient capital and internalize safety constraints — this is the fundamental reason for OpenAI's decade of schisms.

---

## VII. Unresolved questions

OpenAI's story is far from over. As of mid-2026, several key suspense threads remain unfolding:

- **Can full for-profit conversion be completed?** The California Attorney General and the Delaware Court are reviewing this transition. If blocked, OpenAI will be trapped in an institutional no-man's-land — "neither sufficiently for-profit nor sufficiently nonprofit." [^7]
- **Can GPT-5 reopen the gap?** GPT-5 has been delayed multiple times, and the multi-front pursuit by Claude, Gemini, and DeepSeek is narrowing OpenAI's first-mover advantage.
- **Can the safety movement maintain unity?** Anthropic is pursuing Constitutional AI, SSI is pursuing superintelligence safety, and OpenAI's internal safety team is pursuing internal reform — three paths operating independently, lacking coordination. Can a fragmented safety movement counterbalance the commercial inertia of a closed-source company generating billions in annual revenue?

The answers to these questions will determine the trajectory of the entire AI industry.

---

## Afterword

OpenAI's decade is a complete specimen of "how a mission is deformed by capital" — but reading it as "a fall from grace" is wrong.

Every step of OpenAI's transformation had clear rational logic: the nonprofit could not raise enough money, so capped profit was needed. Capped profit could not attract the largest capital, so Microsoft was needed. Microsoft's investment demanded productization, so closed-sourcing was needed. Closed-sourcing generated revenue, so more closed-sourcing was needed. Full for-profit conversion attracted the largest capital, so the nonprofit structure needed to be dismantled. Not a single step on this logic chain was "malicious" — each was a rational choice made under the constraints of the preceding step.

But the cumulative result of rational choices can be irrational. When a company's mission shifts from "open" to "closed," from "nonprofit" to "for-profit," from "safety first" to "product first" — even if every step had its reasons — the distance between where it ultimately arrived and where it claimed to be heading at the start has grown too vast to explain away with "we were doing the right thing."

The real lesson is not "OpenAI fell from grace" — it is that **no institutional design currently exists that can simultaneously satisfy the capital demands and safety constraints of frontier AI research.** Every institutional form OpenAI took — nonprofit, capped profit, full for-profit — solved the previous form's problems while creating new ones. The nonprofit solved the motivation problem but could not raise money. Capped profit solved the money problem but could not retain the safety faction. Full for-profit solves the capital problem but dismantles the last safety barrier.

This path of institutional evolution is less a failure of OpenAI than a **failure of institutional design** across the entire AI industry. As of 2026, we still have not found an organizational form that can simultaneously accommodate trillion-scale capital and internalize safety constraints — this is the real warning that OpenAI's decade of schisms delivers.

The departures of Anthropic and SSI are not OpenAI's loss — they are a loss for institutional design. If a better institutional framework existed, these people would not have needed to leave; their safety research could have been conducted within a larger, more powerful, better-resourced organization. They left — because no such framework exists.

This is not OpenAI's tragedy. It is all of ours.

---

*Compiled by the Endfield Industrial Historian team: Fu Xuan (Theoretical Framework Review).*

---

[^1]: OpenAI Blog, "Introducing OpenAI", 2015-12-11. https://openai.com/blog/introducing-openai
[^2]: OpenAI Blog, "OpenAI Supporters", 2018-02-20. https://openai.com/blog/openai-supporters
[^3]: GPT-4 training cost estimated at $63M–$100M, synthesized from multiple analyst estimates. See SemiAnalysis, "GPT-4 Architecture, Infrastructure, Training Dataset, Costs, Vision, MoE", 2023-07. See also coverage from *The Verge* and other outlets.
[^4]: OpenAI Blog, "OpenAI LP", 2019-03-11. https://openai.com/blog/openai-lp
[^5]: OpenAI Blog, "Microsoft invests in and partners with OpenAI", 2019-07-22. https://openai.com/blog/microsoft-invests-in-and-partners-with-openai
[^6]: *The Verge*, "Microsoft extends OpenAI partnership with multi-billion dollar investment", 2023-01-23. https://www.theverge.com/2023/1/23/23567448/microsoft-openai-investment-chatgpt
[^7]: OpenAI's full for-profit conversion plan progressed during 2024–2025. See *Bloomberg*, *The Verge*, and other outlets. The California AG review is reported in *Reuters*, "California AG reviewing OpenAI's conversion to for-profit", 2025.
[^8]: OpenAI Blog, "OpenAI announces leadership transition", 2023-11-17. https://openai.com/blog/openai-announces-leadership-transition
[^9]: Safe Superintelligence Inc. (SSI) was co-founded by Ilya Sutskever, Daniel Gross, and Daniel Levy on June 19, 2024. Sutskever formally left OpenAI in May 2024. See the SSI website and multiple media reports.
[^10]: Elon Musk has repeatedly criticized OpenAI's shift from open to closed on Twitter/X. The quote is a paraphrase of his public statements from 2023–2024.
[^11]: DeepSeek-AI et al., "DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning", arXiv:2501.12948, 2025-01. https://arxiv.org/abs/2501.12948
[^12]: Anthropic's founding team included former OpenAI VP of Research Dario Amodei, former OpenAI policy lead Daniela Amodei, and others. For the split's background, see the Anthropic chronicle.
[^13]: Bai et al., "Constitutional AI: Harmlessness from AI Feedback", arXiv:2212.08073, 2022-12. https://arxiv.org/abs/2212.08073
[^14]: In April 2023, Google merged its AI labs Google Brain and DeepMind into Google DeepMind; DeepMind lost its legal independence. See Google Blog, "Google DeepMind", 2023-04-20.
[^15]: Altman described the company's internal divisions as "tribes" in a 2019 internal email. *The Atlantic* obtained the original email. See the "OpenAI" Wikipedia entry for citations.
[^16]: October 2023 details of Altman diminishing Sutskever's role, seeking Middle Eastern investment, and collaborating with SoftBank/Jony Ive are from *Bloomberg*'s "BloombergCoup" exclusive reporting. See also *The New Yorker* (Ronen Farrow, April 2026).
[^17]: Analysis of DevDay as a trigger point comes from reporting by Kara Swisher and *The Verge*'s Alex Heath.
[^18]: Sutskever's 52-page memorandum and 70-page annotated dossier accusing Altman of "a pattern of…lying." *The New Yorker* (Ronen Farrow, April 2026) investigative reporting first revealed the full details. See the "Ilya Sutskever" Wikipedia entry citations [46][47].
[^19]: The Helen Toner paper incident and Sutskever's all-hands remarks were reported by *The Atlantic*, *The Washington Post*, and others. See the "Helen Toner" Wikipedia entry.
[^20]: The Q* project breakthrough and safety controversy are from *Reuters* (Anna Tong et al.). Information from anonymous internal sources; credibility is moderate.
[^21]: The timeline of the firing day — Altman notified via Google Meet, watching the Las Vegas Grand Prix, etc. — is cross-verified by *Engadget*, *Axios*, *The Washington Post*, and *The Verge*.
[^22]: Approximately 700 employees (~95%) signing the letter, Amodei being invited to replace Altman and refusing, settlement terms, etc., are from widely reported coverage across multiple outlets. See the "Dario Amodei" Wikipedia entry citation [24].
[^23]: SSI founded June 19, 2024 (Sutskever, Daniel Gross, Daniel Levy); $1B raised September 2024; $30B valuation March 2025; Google Cloud TPU partnership April 2025; Meta acquisition attempt refused; Gross departed July 2025 to join Meta Superintelligence Labs. Cross-verified by *Reuters*, *Bloomberg*, *The Verge*, *NYT*, *WSJ*, and *CNBC*.
[^24]: Jan Leike resignation statement (May 2024), *Vox* (Sigal Samuel, 2024-05-17), *The Guardian* (Dan Milmo, 2024-05-18). At least seven researchers lost from the safety team, per *The Decoder* (Matthias Bastian, 2024-05-18). Leike joined Anthropic on May 28, 2024 (*The Verge*).
[^25]: John Schulman joined Anthropic in 2024. See the "Anthropic" Wikipedia entry.
