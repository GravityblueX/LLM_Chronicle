# The schism and evolution of OpenAI

> OpenAI's decade-long history is not a corporate history — it is a history of institutional experimentation. It begins with "we are a nonprofit, unconstrained by financial return" and ends with "we are valued at hundreds of billions and seeking full for-profit conversion." Every step in between — restructuring, fundraising, going closed-source, firing the CEO, rehiring the CEO — answers the same question: **an organization whose mission is to "benefit all of humanity" — how long can it hold out against the compute hunger of frontier AI before it changes its founding purpose?**

---

## I. The structural contradiction: nonprofit ideals vs. compute reality

Every schism at OpenAI — of people, of direction, of brand — can be traced to a single structural contradiction: **its mission demands openness and safety, but frontier AI training demands closure and massive capital.**

In December 2015, OpenAI's founding statement was crystal clear:

> "Our goal is to advance digital intelligence in the way that is most likely to benefit humanity as a whole, unconstrained by a need to generate financial return."[^1]

"Unconstrained by a need to generate financial return" — in 2015, this sounded like idealism. By 2020, it had become an impossible promise.

The reason is simple: training costs for large models grew exponentially. GPT-1 (2018) cost roughly tens of thousands of dollars to train. GPT-2 (2019): hundreds of thousands. GPT-3 (2020): an estimated $4.6 million to $12 million.[^2] GPT-4 (2023): $63 million to $100 million.[^3] These figures grew far faster than a nonprofit's fundraising capacity — and far faster than any single donor's patience.

The fatal flaw of the nonprofit structure was laid bare: it could raise money for research, but not for **scale.** In the early days of deep learning (2015–2018), a few million dollars in donations could support first-rate research. In the Transformer era, training a frontier model requires hundreds of millions in compute — this is not donations but capital markets.

This contradiction was not a failure of OpenAI's management — it was an **incompatibility between physical constraints and institutional design.** As long as frontier AI training requires ever-larger compute, any AI organization that doesn't connect to capital markets will be left behind.

---

## II. The three-act transformation: from nonprofit to capped-profit to full for-profit

### 2.1 Act one: capped profit (2019-03)

In March 2019, OpenAI announced its transformation into **OpenAI LP** — a "capped-profit" entity. Investor returns were capped at 100x, with excess going to the nonprofit entity. Sam Altman relinquished personal equity to maintain the legitimacy of the "nonprofit spirit."[^4]

The ingenuity of this legal innovation lay in: nominally preserving the "nonprofit" shell — the nonprofit entity retained control of the company — while in substance opening the door to commercial capital. A "100x return cap" is an extremely high cap in Silicon Valley — sufficient to attract venture capital while sustaining the narrative of "we're not in it for the money."

**Internal logic**: OpenAI needed money but couldn't openly admit it. Capped profit was a compromise — "we're not in it for the money, but if we happen to make some, we'll share a bit — but not too much."

### 2.2 Act two: Microsoft enters (2019-07, 2023-01)

In July 2019, Microsoft invested $1 billion in OpenAI, and Azure became OpenAI's exclusive cloud provider.[^5] In January 2023, Microsoft made a follow-on "multi-year, multi-billion dollar" investment, estimated externally at around $10 billion.[^6]

The consequences of Microsoft's investment extended beyond funding — they entailed a **reshaping of the power structure.** When your compute depends entirely on a tech giant, your independence is an illusion. OpenAI's mission statement says "unconstrained by financial return" — but it is in fact beholden to Microsoft's Azure roadmap, Microsoft's equity demands, and Microsoft's Copilot product strategy.

**Internal logic**: Compute needs transformed OpenAI from an "independent research lab" into a "quasi-subsidiary of Microsoft." This shift didn't happen overnight — it was accomplished incrementally through two investments, one exclusive cloud partnership, and one ten-billion-dollar infusion. Each step had sound business logic, but each step tightened Microsoft's chain of control.

### 2.3 Act three: full for-profit conversion (2024–2025)

From late 2024 into 2025, OpenAI began pushing for full for-profit conversion — transitioning from a "capped-profit" company to a standard for-profit corporation (PBC, Public Benefit Corporation).[^7] This meant:

- Investor returns would no longer be capped at 100x
- The nonprofit entity would lose legal control over the company
- Corporate governance would shift from "mission-driven" to "shareholder value-driven"

The direct driver of this transformation was valuation pressure. OpenAI's valuation in 2024–2025 reached hundreds of billions of dollars — fundraising at this scale was impossible within the "capped-profit" legal framework. Venture capital and sovereign wealth funds demanded standard for-profit corporate structure — no cap, no nonprofit board veto power.

**Internal logic**: The shift from nonprofit to capped profit was "for compute." The shift from capped profit to full for-profit was "for capital." The drivers of the two transformations differed, but the direction was the same — each transformation represented a further retreat from idealism toward reality.

---

## III. November 2023: 104 hours of institutional crisis

### 3.1 The event

On 2023-11-17, OpenAI's board of directors abruptly removed Sam Altman as CEO, citing "he was not consistently candid in his communications with the board."[^8]

What followed in the next 104 hours remains the most dramatic episode in large language model history: 700+ employees signed an open letter demanding Altman's reinstatement, threatening collective departure to Microsoft; Microsoft CEO Satya Nadella announced he would take in Altman and Brockman; ultimately Altman was reinstated, the board was restructured, and Ilya Sutskever departed the board.

### 3.2 Deep causes: the structural conflict between the safety faction and the business faction

The surface reason for Altman's ouster was "lack of candor in communications" — but virtually every informed observer pointed to the same underlying contradiction: **the irreconcilable conflict between the safety faction and the business faction.**

This contradiction didn't emerge in November 2023. Altman himself, in a 2019 internal email, described the company's internal divisions as "tribes" — the commercialization-oriented business faction on one side, and the capability-concerned safety faction on the other.[^15] Resentment erupted in the second half of 2023: in October, Altman diminished Sutskever's role within the company, further intensifying the conflict.[^16] Meanwhile, before his removal, Altman was seeking billions in investment from Middle Eastern sovereign wealth funds to develop AI chips to compete with Nvidia, and was collaborating with SoftBank's Masayoshi Son and former Apple designer Jony Ive on AI hardware — Sutskever and his allies believed these activities improperly leveraged OpenAI's name.[^16]

The DevDay conference on 2023-11-06 became the final trigger: Altman unveiled a series of commercialization initiatives including custom ChatGPT instances, which the opposition took as a clear signal of OpenAI's accelerating commercialization.[^17] Eleven days later, the board acted.

The safety faction was represented by Ilya Sutskever. Sutskever was OpenAI's co-founder and chief scientist; from the very beginning, he regarded "safety" as OpenAI's reason for existence. In his view, AGI safety was not a feature to be bolted on afterward — it was OpenAI's entire purpose. If an AGI research organization compromised on safety, how would it differ from Google or Facebook? At the board's request before the firing, Sutskever compiled a 52-page memo and an annotated dossier of approximately 70 pages (containing internal communications, documents, and photographs), accusing Altman of "a pattern of … dishonesty" and providing misleading information to company executives and the board — particularly on safety matters.[^18] This dossier was not exposed until April 2026, when *The New Yorker*'s investigative report by Ronan Farrow — a 70-page article — brought the full details to light.[^18]

Another key board member was Helen Toner — director of strategy at Georgetown's CSET, with a background in the effective altruism movement. In October 2023, she published the paper "Decoding Intentions: AI and Costly Signals," which criticized OpenAI's safety efforts while praising Anthropic's approach. Altman called Toner to say the paper "could cause trouble" because the FTC was investigating OpenAI's data collection. Toner took this as proof that Altman was manipulating board members for personal advantage.[^19] Additionally, in November 2023, reports emerged that a classified project codenamed Q* had achieved breakthroughs in logical and mathematical reasoning, reportedly reaching elementary-school math levels — concerns about how Altman was handling the safety implications of this discovery were brought to the board shortly before the removal.[^20]

The business faction was represented by Altman. Altman was not a technologist by background — he was the former president of Y Combinator, a born entrepreneur and fundraising expert. In his view, OpenAI's mission mattered only if the organization was powerful enough — a weak but "safe" AI lab couldn't change the world. To become powerful, you needed money. To earn money, you needed products. To build products, you needed speed. Safety mattered — but it couldn't be a reason not to move forward.

At noon on 2023-11-17, following a "deliberative review process," the board immediately terminated Altman — he was watching the Las Vegas Grand Prix when notified via Google Meet, only 5–10 minutes before the removal.[^21] Sutskever then notified board chairman Greg Brockman via Google Meet — Brockman promptly resigned as chairman. But Altman's 700 employees (roughly 95% of the total) voted with their feet — they signed an open letter threatening collective resignation, choosing Altman over the board.[^22]

Microsoft even approached Anthropic's Dario Amodei behind the scenes, proposing that he replace Altman and potentially merge the two companies — Amodei declined both proposals.[^22] The final settlement: Altman returned, Toner, McCauley, and Sutskever left the board, replaced by Lawrence Summers and Bret Taylor.[^22]

Sutskever told an all-hands meeting that firing Altman was "the board doing its duty" — but expressed regret a week later.[^19] This vacillation of "did the right thing but couldn't bear the consequences" was itself a microcosm of the safety faction's predicament: they had institutional power (voting rights) but not organizational strength (employee loyalty).

**Institutional lesson**: In a company with 770 employees and a valuation of tens of billions, four board members could fire the CEO without advance notice — and 700 employees could overturn the board through collective resignation. This incident exposed a core problem: OpenAI's governance structure was designed for a small nonprofit research lab — not for one of the world's largest AI product companies. When a company's actual scale and influence far exceed its governance framework, institutional collapse is only a matter of time.

### 3.3 Aftermath: the collective exodus of the safety team

Ilya Sutskever formally left OpenAI in May 2024 after Altman's reinstatement. One month later, he announced the founding of **Safe Superintelligence Inc. (SSI)** — an independent research institution focused on superintelligence safety, co-founded with former Apple AI lead Daniel Gross and former OpenAI researcher Daniel Levy.[^9]

The name SSI was itself a declaration: **the safety of superintelligence is too important to be resolved inside a company that has already commercialized.** The capital market's response was staggering: in September 2024, SSI raised $1 billion (from SV Angel, DST Global, Sequoia Capital, a16z); by March 2025, its valuation soared to $30 billion — a sixfold increase in six months.[^23] In April 2025, SSI partnered with Google Cloud for TPU access. In the first half of 2025, Meta attempted to acquire SSI, but Sutskever refused. In July 2025, co-founder Daniel Gross departed to join Meta Superintelligence Labs, leaving Sutskever as sole CEO — the company had approximately 50 employees.[^23]

Sutskever's decade at OpenAI taught him one thing — the "internal reform" route had failed. He championed safety research inside OpenAI for ten years, only to be overturned by the collective will of 700 employees in a single board vote. This led him to a conclusion: safety must be advanced in an organization **independent of commercial pressures.**

But Sutskever was not the only one who left. In May 2024, **Jan Leike**, co-lead of OpenAI's Superalignment project, announced his resignation — writing on X:

> "Over the past years, safety culture and processes have taken a backseat to shiny products."[^24]

> "I gradually lost trust in OpenAI's leadership."[^24]

Leike subsequently joined Anthropic. According to *The Decoder*, OpenAI's AI safety team lost at least seven researchers in those months — including Sutskever, Leike, Daniel Kokotajlo, and others.[^24] Earlier still, OpenAI co-founder **John Schulman** had also joined Anthropic in 2024.[^25]

Sutskever was co-creator of AlexNet, co-author of the AlphaGo paper, co-founder of OpenAI, the driving force behind the GPT series and the o1 reasoning model — a three-time recipient of the NeurIPS Test of Time Award (2022–2024), called "one of the most cited computer scientists." His trajectory personified the tension line of "safety vs. business." When such a person chooses to leave and found an independent safety lab, the signal value far exceeds its commercial significance.

---

## IV. "Open"AI: from most open to most closed

OpenAI's name contains an "Open" — a word that underwent the most ironic semantic shift over the course of a decade.

| Period | Meaning of "Open" | Degree of openness |
|--------|-------------------|--------------------|
| 2015–2018 | Open research, open-source tools | High (OpenAI Gym, Universe open-sourced) |
| 2018–2019 | GPT-2 "staged release" | Medium (open with reservations) |
| 2020 | GPT-3 API-only | Low (weights not open) |
| 2023 | GPT-4 fully black-box | Very low (no public parameters, data, or architecture) |
| 2024–present | Closed-source + paid | Very low (chains of thought hidden, $200/month subscription) |

From "the most open AI lab" to "the most closed frontier model company" — this transformation didn't happen overnight but through a series of "decisions with reasonable justifications":

1. GPT-2 wasn't open-sourced because it was "too dangerous" — reasonable
2. GPT-3 was API-only because "a business model was needed to support larger models" — reasonable
3. GPT-4's parameters weren't released for "competitive reasons" — reasonable
4. o1's chains of thought were hidden for "safety reasons" — reasonable

Every step had a reasonable justification. But taken together, "Open" had transformed from a mission into an irony. OpenAI's critics — including Elon Musk — repeatedly attacked it with this irony: "A company that was supposed to be open like Linux became closed like Microsoft."[^10]

DeepSeek-R1's MIT open-source release pushed this irony to its extreme. When a comparable reasoning model was given away completely free, completely public — chains of thought included — OpenAI's narrative that "safety requires closed source" was factually challenged.[^11] The question was no longer "should OpenAI open-source?" — but "if someone else open-sourced an equally powerful model and the world didn't end, where exactly is OpenAI's justification for staying closed?"

---

## V. How the schisms reshaped the entire industry

OpenAI's internal contradictions didn't only affect OpenAI itself — they spawned a series of "companies of the departed," each representing a critique of OpenAI's path.

### 5.1 The first schism: Anthropic (2021)

From late 2020 to early 2021, OpenAI vice president Dario Amodei and a group of safety researchers departed to found Anthropic. The immediate trigger was GPT-3's API commercialization — Dario and others believed that pushing a 175-billion-parameter model to market without a safety assessment framework was a betrayal of OpenAI's mission.[^12]

Anthropic represented the route of **safety-first external institution-building.** It didn't try to change OpenAI from within — it founded a new company and redefined "safety" through Constitutional AI: not "human review of every output" but "auditable rules for model self-constraint."[^13]

During OpenAI's civil war in November 2023, the board even approached Amodei himself, proposing that he replace Altman and potentially merge the two companies — Amodei declined both proposals.[^22] This detail is critically important: in its most desperate moment, OpenAI's board turned to the safety faction's departed leader for help — proving that they themselves acknowledged the safety faction's judgment was, in some sense, correct. But Amodei's refusal also proved one thing: the departed no longer believed that "returning to reform OpenAI from within" was viable.

Anthropic's founding proved something: AI safety is not a problem that can be solved by "allocating a bit more resources within an existing company" — it requires **institutional guarantees at the organizational level.** A company that must continuously release more capable models under commercial pressure will naturally rank safety behind "more capable."

### 5.2 The second schism: SSI and the great safety exodus (2024)

If Anthropic was OpenAI's first safety schism — the business faction won, the safety faction departed — then 2024's collective safety team exodus was the second schism, larger in scale and clearer in signal.

The November 2023 Altman ouster was the catalyst: Sutskever saw firsthand that even with voting power at the board level, the safety faction could not withstand the combined force of "700 employees + Microsoft + Altman." He expressed regret within five days — but the rift was irreparable. In May 2024, Sutskever formally departed. That same month, Jan Leike made his now-frequently-quoted public statement: "safety culture and processes have taken a backseat to shiny products" — and then he left too. John Schulman — OpenAI co-founder and core champion of RLHF — also went to Anthropic in 2024.

Sutskever's SSI represented the **independent route for superintelligence safety.** Its name — Safe Superintelligence Inc. — was blunt to the point of provocation: safety is not "a feature"; safety is "the entire company's sole purpose."[^9] The capital market responded with a $30 billion valuation — proving one thing: **an AI company with safety as its sole mission can achieve a higher valuation than many commercially oriented AI companies.**[^23]

### 5.3 The shadow of a third schism

As of mid-2026, OpenAI is pushing forward with full for-profit conversion. This means the nonprofit entity will lose legal control — the last institutional safety barrier is being dismantled. If this process is completed, OpenAI will no longer have any **structural** safety constraints — only management's good-faith commitments.

Each schism has repeated the same pattern: the safety faction discovers that "internal reform" is insufficient, chooses to depart, and founds a new company. Anthropic (2021) was the first wave; SSI (2024) was the second. If this pattern continues — if OpenAI's full for-profit conversion triggers a third wave of safety faction departures — then the AI safety movement will be completely fragmented into multiple independent small organizations, each working in its own direction, but none possessing sufficient influence to counterbalance OpenAI's commercial decisions.

---

## VI. Is this the inevitable path of technology companies?

OpenAI's schism pattern — "idealistic founding → capital-driven transformation → internal split → departees found new organizations" — is not unique to OpenAI. It is virtually the inevitable path of every "mission-driven technology company."

**Google/DeepMind**: DeepMind founder Demis Hassabis repeatedly clashed with Google management over AI safety and organizational independence. In 2023, DeepMind was merged into Google DeepMind, losing its legal independence.[^14]

**Tesla/Autopilot**: Musk himself was both an OpenAI co-founder and the driver of Tesla AI. His "conflict" between OpenAI and Tesla — the "potential future conflict" mentioned in OpenAI's founding statement — is itself a microcosm of the inherent contradictions within tech companies.[^2]

**Why inevitable?** Because frontier AI's two defining characteristics — **compute hunger** and **safety risk** — are inherently contradictory. Compute hunger demands capital-intensive investment; capital demands returns; returns demand commercialization; commercialization demands speed. Safety risk demands caution; caution demands slowing down; slowing down demands delayed releases. These two characteristics cannot coexist peacefully within a single company — the tension between them accumulates continuously until it is released in the form of schisms.

This is not a story of "bad people vs. good people." Altman is not a bad person — he made the right product decisions at the right time (ChatGPT), bringing unprecedented public attention to AI. Sutskever is not a bad person — he held firm to a correct conviction (safety cannot be diluted by commercialization). Amodei is not a bad person — he chose to advance safety through action rather than argument.

This is an **institutional design problem.** Nonprofit structures cannot sustain the compute demands of frontier AI training. For-profit structures cannot embed sufficient safety constraints. Capped profit is a compromise, but compromises cannot endure. No one has yet found an institutional framework that can simultaneously access sufficient capital and embed safety constraints — this is the fundamental reason for OpenAI's decade of schisms.

---

## VII. Unresolved questions

OpenAI's story is far from over. As of mid-2026, several key suspense threads remain open:

- **Can the full for-profit conversion be completed?** The California Attorney General and the Delaware courts are reviewing this transformation. If blocked, OpenAI will be stuck in an institutional limbo — "neither sufficiently for-profit nor sufficiently nonprofit."[^7]
- **Can GPT-5 reestablish the gap?** GPT-5 has been delayed repeatedly, and the multi-front pursuit by Claude, Gemini, and DeepSeek is narrowing OpenAI's first-mover advantage.
- **Can the safety movement maintain unity?** Anthropic is working on Constitutional AI, SSI is working on superintelligence safety, and OpenAI's internal safety team is pursuing internal reform — three routes operating independently, lacking coordination. Can a fragmented safety movement counterbalance the commercial inertia of a closed-source company with billions in annual revenue?

The answers to these questions will determine the direction of the entire AI industry.

---

## Commentary

OpenAI's decade is a complete specimen of "how mission is deformed by capital" — but reading it as "decline" is wrong.

Every step of OpenAI's transformation had clear, rational logic: the nonprofit couldn't raise enough money, so capped profit was needed. Capped profit couldn't attract the largest capital, so Microsoft was needed. Microsoft's investment demanded productization, so closed-sourcing was needed. Closed-sourcing generated revenue, so more closed-sourcing was needed. Full for-profit conversion attracts the largest capital, so the nonprofit structure must be dismantled. Not a single step on this logic chain was "malicious" — each was a rational choice made under the constraints of the previous step.

But the cumulative result of rational choices can be irrational. When a company's mission shifts from "open" to "closed," from "nonprofit" to "for-profit," from "safety first" to "product first" — even if every step had its reasons — the distance between where it ultimately arrived and the destination it proclaimed at the outset has grown too vast to explain away with "we're doing the right thing."

The real lesson is not "OpenAI declined" — it is that **no institutional design currently exists that can simultaneously satisfy the capital demands and safety constraints of frontier AI R&D.** Every institutional form OpenAI has taken — nonprofit, capped profit, full for-profit — solved the problems of the previous form while creating new ones. The nonprofit solved the motivation problem but couldn't raise money. Capped profit solved the fundraising problem but couldn't retain the safety faction. Full for-profit solves the capital problem but dismantles the last safety barrier.

This path of institutional evolution is less OpenAI's failure than a **systemic institutional failure** of the entire AI industry. As of 2026, we have not found an organizational form that can accommodate trillion-scale capital while embedding safety constraints — this is the true warning that OpenAI's decade of schisms gives us.

The departures of Anthropic and SSI are not OpenAI's loss — they are institutional design's loss. If a better institutional framework existed, these people would not have needed to leave; their safety research could have been conducted within a larger, stronger, better-resourced organization. They left — because no such framework exists.

This is not OpenAI's tragedy. It is all of ours.

---

*This piece was compiled by the Endfield Industrial History team: Fuxuan (theoretical framework review).*

---

[^1]: OpenAI, "OpenAI," founding blog post, 2015-12-11. https://openai.com/blog/openai/
[^2]:参见 various estimates. GPT-1: OpenAI, "Improving Language Understanding by Generative Pre-Training", 2018. GPT-2: Radford et al., "Language Models are Unsupervised Multitask Learners", 2019. GPT-3: Brown et al., "Language Models are Few-Shot Learners", NeurIPS 2020 / arXiv:2005.14165.
[^3]: 参见 various estimates for GPT-4 training costs, including Fortune and The Information reports, 2023.
[^4]: OpenAI, "OpenAI LP", 2019-03. https://openai.com/blog/openai-lp
[^5]: Microsoft, "Microsoft invests in and partners with OpenAI", 2019-07-22. https://blogs.microsoft.com/blog/2019/07/22/microsoft-invests-in-and-partners-with-openai/
[^6]: Microsoft, "Microsoft and OpenAI extend partnership", 2023-01-23. https://blogs.microsoft.com/blog/2023/01/23/microsoft-and-openai-extend-partnership/
[^7]:参见 The Information and Bloomberg reports on OpenAI's for-profit conversion plans, 2024–2025.
[^8]: OpenAI, "OpenAI announces leadership transition", 2023-11-17. https://openai.com/blog/openai-announces-leadership-transition
[^9]: Sutskever, I., Gross, D., Levy, D., "Safe Superintelligence Inc.", 2024-06-19. https://ssi.inc/
[^10]: 参见 Elon Musk's public statements and legal filings regarding OpenAI, 2023–2024.
[^11]: DeepSeek, "DeepSeek-R1", 2025-01. https://github.com/deepseek-ai/DeepSeek-R1
[^12]: 参见 Dario Amodei's departure from OpenAI and founding of Anthropic, 2020–2021. Various reports including The Information.
[^13]: Bai et al., "Constitutional AI: Harmlessness from AI Feedback", arXiv:2212.08073, 2022-12-15. https://arxiv.org/abs/2212.08073
[^14]: 参见 Google DeepMind merger reports, 2023.
[^15]: 参见 Altman's internal email referencing "tribes," as reported in subsequent investigations.
[^16]: 参见 *The New Yorker*, Ronan Farrow, investigative report on OpenAI, 2026-04. Reports on Altman's Middle East fundraising, SoftBank collaboration, and Jony Ive AI hardware project.
[^17]: 参见 OpenAI DevDay coverage, 2023-11-06.
[^18]: *The New Yorker*, Ronan Farrow, 2026-04. Sutskever's 52-page memo and ~70-page annotated dossier.
[^19]: 参见 Helen Toner's paper "Decoding Intentions: AI and Costly Signals", 2023-10; and subsequent reporting on the Altman-Toner exchange.
[^20]: 参见 Reuters and other outlets reporting on project Q*, 2023-11.
[^21]: 参见 multiple accounts of Altman's removal, including his being at the Las Vegas Grand Prix when notified.
[^22]: 参见 the employee open letter and final settlement reporting, 2023-11. Multiple outlets including The Verge, Bloomberg, The Information.
[^23]: Bloomberg and The Information reporting on SSI fundraising and valuation, 2024–2025.
[^24]: Leike, J., posts on X, 2024-05-17. *The Decoder*, reporting on OpenAI safety team departures.
[^25]: 参见 John Schulman's move to Anthropic, 2024. Multiple reports.
