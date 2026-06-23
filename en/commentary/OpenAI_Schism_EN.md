# On OpenAI's Schism and Evolution

> OpenAI's decade-long history is not a corporate history — it is a history of institutional experimentation. It begins with "we are a nonprofit, unconstrained by financial return" and ends with "we are valued in the hundreds of billions and seeking full for-profit conversion." Every step in between — restructuring, fundraising, closed-sourcing, firing the CEO, rehiring the CEO — answers the same question: **how long can an organization whose mission is to "benefit all humanity" hold to its founding principles in the face of frontier AI's insatiable compute hunger?**

---

## I. The structural contradiction: Nonprofit ideals vs. compute reality

Every schism within OpenAI — of people, of direction, of brand — can be traced to one structural contradiction: **its mission demands openness and safety, but frontier AI training demands closure and enormous capital.**

In **December 2015**, OpenAI's founding declaration was unambiguous:

> "Our goal is to advance digital intelligence in the way that is most likely to benefit humanity as a whole, unconstrained by a need to generate financial return." [^1]

"Unconstrained by a need to generate financial return." This sentence sounded like idealism in 2015. By 2020, it had become an impossible promise.

The reason is simple: the cost of training large models grows exponentially. GPT-1 (2018) cost approximately tens of thousands of dollars to train. GPT-2 (2019) cost hundreds of thousands. GPT-3 (2020) cost an estimated $4.6 million to $12 million.[^2] GPT-4 (2023) cost between $63 million and $100 million.[^3] These numbers grew far faster than any nonprofit's fundraising capacity — and far faster than any single donor's patience.

The fatal flaw of the nonprofit structure was exposed here: it could raise money for research, but not for **scale.** In deep learning's early days (2015–2018), a few million dollars in donations could fund first-rate research. By the Transformer era, training a frontier model required compute costs in the hundreds of millions — this was not something donations could cover. This required capital markets.

This contradiction was not a failure of OpenAI's management — it was **an incompatibility between physical constraints and institutional design.** As long as frontier AI training consumed ever-larger scales of compute, any AI organization that did not access capital markets would be left behind.

---

## II. The trilogy of transformation: From nonprofit to capped-profit to fully for-profit

### 2.1 Step one: Capped-profit (2019-03)

In **March 2019**, OpenAI announced its transformation into **OpenAI LP** — a "capped-profit" entity. Investor returns were capped at 100 times, with excess going to the nonprofit entity. Sam Altman relinquished personal equity to maintain the legitimacy of the "nonprofit spirit." [^4]

The ingenuity of this legal innovation lay in nominally preserving the "nonprofit" shell — the nonprofit entity still retained control of the company — while in substance opening the door to commercial capital. A "100x return cap" was an extremely high cap in Silicon Valley — high enough to attract venture capital while sustaining the narrative of "we're not in it for the money."

**The internal logic:** OpenAI needed money, but could not publicly admit it needed money. Capped-profit was a compromise — "we're not in it for the money, but if we happen to make some, we'll share — just not too much."

### 2.2 Step two: Microsoft enters (2019-07, 2023-01)

In **July 2019**, Microsoft invested $1 billion in OpenAI, and Azure became OpenAI's exclusive cloud provider.[^5] In **January 2023**, Microsoft made a "multi-year, multi-billion dollar" follow-up investment, externally estimated at approximately $10 billion.[^6]

The consequences of Microsoft's investment were not merely financial — they were a **reshaping of the power structure.** When your compute depends entirely on a tech giant, your independence is an illusion. OpenAI's mission statement says "unconstrained by financial return" — but it was in fact constrained by Microsoft's Azure roadmap, Microsoft's equity demands, and Microsoft's Copilot product strategy.

**The internal logic:** Compute needs transformed OpenAI from an "independent research lab" into a "quasi-subsidiary of Microsoft." This transformation did not happen overnight — it was accomplished incrementally through two rounds of investment, one exclusive cloud partnership, and one ten-billion-dollar infusion. Each step had sound business logic, but each step tightened Microsoft's chain of control.

### 2.3 Step three: Full for-profit conversion (2024–2025)

From late 2024 into 2025, OpenAI began pushing for full for-profit conversion — transitioning from a "capped-profit" company to a standard for-profit corporation (PBC, Public Benefit Corporation).[^7] This meant:

- Investor returns would no longer have a 100x cap
- The nonprofit entity would lose legal control of the company
- Corporate governance would shift from "mission-driven" to "shareholder value-driven"

The immediate driver was valuation pressure. OpenAI's valuation in 2024–2025 reached hundreds of billions of dollars — financing at this scale was impossible within the "capped-profit" legal framework. Venture capital and sovereign wealth funds demanded standard for-profit corporate structures — no caps, no nonprofit board veto power.

**The internal logic:** From nonprofit to capped-profit was "for compute." From capped-profit to fully for-profit was "for capital." The drivers of the two transformations differed, but the direction was the same — each transformation was a further retreat from idealism toward reality.

---

## III. November 2023: The 104-hour institutional crisis

### 3.1 The event

On **2023-11-17**, the OpenAI board of directors abruptly removed Sam Altman as CEO, citing that "he was not consistently candid in his communications with the board." [^8]

What followed in the next 104 hours remains the most dramatic episode in large model history: 700+ employees signed an open letter demanding Altman's reinstatement, threatening mass resignation to Microsoft; Microsoft CEO Satya Nadella announced he would welcome Altman and Brockman; ultimately Altman was reinstated, the board was restructured, and Ilya Sutskever departed the board.

### 3.2 Deep causes: The structural conflict between the safety faction and the business faction

The surface reason for Altman's ouster was "lack of candor" — but virtually every informed observer pointed to the same underlying contradiction: **the irreconcilable conflict between the safety faction and the business faction.**

This contradiction did not emerge in November 2023. Altman himself, in a 2019 internal email, described the company's internal divisions as "tribes" — on one side the for-profit division pursuing commercialization, on the other the safety division worried about AI capabilities.[^15] Tensions concentrated and erupted in the second half of 2023: in October, Altman diminished Sutskever's role within the company, further escalating the conflict.[^16] Concurrently, before his removal, Altman was pursuing billions in investment from Middle Eastern sovereign wealth funds to develop AI chips to compete with Nvidia, and collaborating with SoftBank's Masayoshi Son and former Apple designer Jony Ive on AI hardware — activities that Sutskever and his allies believed improperly leveraged the OpenAI name.[^16]

The **2023-11-06** DevDay became the final flashpoint: Altman unveiled a series of commercialization initiatives including custom ChatGPT instances, which the opposition interpreted as an unambiguous signal of OpenAI accelerating commercialization.[^17] Eleven days later, the board acted.

The safety faction was represented by Ilya Sutskever. Sutskever was a co-founder and Chief Scientist of OpenAI who from the very beginning regarded "safety" as OpenAI's reason for existing. In his view, AGI safety was not a feature to be bolted on afterward — it was OpenAI's entire purpose. If an AGI research organization compromised on safety, how was it different from Google or Facebook? Before the ouster, at the board's request, Sutskever compiled a 52-page memo and an approximately 70-page annotated dossier (including internal communications, documents, and photographs) accusing Altman of "a pattern of…lying" and providing misleading information to company executives and the board — particularly on safety matters.[^18] This dossier was not exposed until April 2026, when *The New Yorker*'s investigative report by Ronan Farrow — a 70-page article — brought the full details to light.[^18]

Another key board member was Helen Toner — Director of Strategy at Georgetown's CSET, with a background in the effective altruism movement. In October 2023, she published the paper "Decoding Intentions: AI and Costly Signals," which criticized OpenAI's safety efforts while praising Anthropic's approach. Altman called Toner to say the paper "could cause trouble," given that the FTC was investigating OpenAI's data collection. Toner viewed this as precisely the kind of board manipulation by Altman for self-serving ends.[^19] Additionally, in November 2023, reports emerged of a classified project codenamed Q* achieving breakthroughs in logical and mathematical reasoning, reportedly reaching elementary school math proficiency — concerns about how Altman handled the safety implications of this discovery were raised with the board shortly before the ouster.[^20]

The business faction was represented by Altman. Altman was not a technical figure — he was the former president of Y Combinator, a natural entrepreneur and fundraising expert. In his view, OpenAI's mission was meaningful only if the organization was powerful enough — a weak but "safe" AI lab could not change the world. To become powerful required money. To earn money required productization. To productize required speed. Safety mattered — but could not be a reason not to move forward.

At noon on **2023-11-17**, after a "deliberative review process," the board immediately removed Altman — Altman was watching the Las Vegas Grand Prix when notified via Google Meet, only 5–10 minutes before the removal.[^21] Sutskever then notified board chairman Greg Brockman via Google Meet — Brockman promptly resigned as chairman. But Altman's 700 employees (approximately 95% of the total) voted with their feet — they signed an open letter threatening collective resignation, choosing Altman over the board.[^22]

Microsoft even approached Anthropic's Dario Amodei behind the scenes, proposing that he replace Altman and potentially merge the two companies — Amodei declined both proposals.[^22] The final settlement: Altman returned, Toner, McCauley, and Sutskever left the board, replaced by Lawrence Summers and Bret Taylor.[^22]

Sutskever told an all-hands meeting that firing Altman was "the board doing its duty" — but expressed regret a week later.[^19] This vacillation of "did the right thing but could not bear the consequences" is itself a microcosm of the safety faction's predicament: they had institutional power (voting rights) but not organizational power (employee loyalty).

**The institutional lesson:** In a company with 770 employees and a multi-billion-dollar valuation, a four-person board could fire the CEO without advance notice — and 700 employees could overturn the board through collective resignation. This event exposed a core problem: OpenAI's governance structure was designed for a small nonprofit research lab — not for one of the world's largest AI product companies. When a company's actual scale and influence far exceed its governance framework, institutional collapse is only a matter of time.

### 3.3 Aftermath: The collective exodus of the safety team

Ilya Sutskever officially left OpenAI in **May 2024** after Altman's reinstatement. One month later, he announced the founding of **Safe Superintelligence Inc. (SSI)** — an independent research institution focused on superintelligence safety, co-founded with former Apple AI lead Daniel Gross and former OpenAI researcher Daniel Levy.[^9]

SSI's name is itself a declaration: **the safety problem of superintelligence is too important to be resolved inside an already-commercialized company.** The capital market's response was striking: $1 billion in funding in September 2024 (SV Angel, DST Global, Sequoia Capital, a16z), with valuation soaring to $30 billion by March 2025 — a sixfold increase in six months.[^23] In April 2025, SSI partnered with Google Cloud for TPU access. In the first half of 2025, Meta attempted to acquire SSI, but Sutskever refused. In July 2025, co-founder Daniel Gross departed to join Meta Superintelligence Labs, leaving Sutskever as sole CEO — with approximately 50 employees.[^23]

Sutskever's decade at OpenAI taught him one thing — the "internal reform" path had failed. He had championed safety research from within OpenAI for a decade, only to be overturned by the collective will of 700 employees in a single board vote. This led him to a conclusion: safety must be advanced in an organization **independent of commercial pressures.**

But Sutskever was not the only one to leave. In **May 2024**, OpenAI's Superalignment project co-lead **Jan Leike** announced his resignation, writing on X:

> "Over the past years, safety culture and processes have taken a backseat to shiny products." [^24]

> "I gradually lost trust in OpenAI's leadership." [^24]

Leike subsequently joined Anthropic. According to *The Decoder*, OpenAI's AI safety team lost at least seven researchers in those months — including Sutskever, Leike, Daniel Kokotajlo, and others.[^24] Earlier still, OpenAI co-founder **John Schulman** also joined Anthropic in 2024.[^25]

Sutskever was the co-creator of AlexNet, a co-author of the AlphaGo paper, a co-founder of OpenAI, and the driving force behind the GPT series and the o1 reasoning model — a three-time NeurIPS Test of Time award winner (2022–2024), described as "one of the most cited computer scientists." His trajectory personifies the tension line of "safety vs. business." When such a figure chooses to leave and found an independent safety lab, its signal value far exceeds its commercial significance.

---

## IV. "Open"AI: From most open to most closed

OpenAI's name contains the word "Open" — a word that underwent the most ironic semantic shift over the course of a decade.

| Period | Meaning of "Open" | Degree of openness |
|--------|-------------------|--------------------|
| 2015–2018 | Open research, open-source tools | High (OpenAI Gym, Universe open-sourced) |
| 2018–2019 | GPT-2 "staged release" | Medium (open with reservations) |
| 2020 | GPT-3 API-only | Low (weights not released) |
| 2023 | GPT-4 fully black-boxed | Extremely low (parameters, data, architecture undisclosed) |
| 2024–present | Closed-source + paid | Extremely low (chain of thought hidden, $200/month subscription) |

From "the most open AI lab" to "the most closed frontier model company" — this transformation did not happen overnight but was accomplished through a series of "decisions with reasonable justifications":

1. GPT-2 was not released openly because it was "too dangerous" — reasonable
2. GPT-3 was API-only because "a business model was needed to fund larger models" — reasonable
3. GPT-4's parameters were not disclosed because of "competitive considerations" — reasonable
4. o1's chain of thought was hidden for "safety reasons" — reasonable

Each step had a reasonable justification. But taken together, "Open" had transformed from a mission into a satire. OpenAI's critics — including Elon Musk — repeatedly attacked it with this irony: "A company that was supposed to be as open as Linux became as closed as Microsoft." [^10]

DeepSeek-R1's MIT-licensed open-sourcing pushed this irony to its extreme. When a comparable reasoning model was given away completely free and completely open — including its chain of thought — OpenAI's "safety requires closed-source" narrative was challenged by empirical fact.[^11] The question was no longer "should OpenAI open-source" — but "if someone else open-sourced an equally powerful model and the world didn't end, where exactly lies the justification for OpenAI staying closed?"

---

## V. How schisms reshaped the entire industry

OpenAI's internal contradictions did not only affect OpenAI itself — they gave rise to a series of "companies of defectors," each representing a reflection on OpenAI's path.

### 5.1 The first schism: Anthropic (2021)

From late 2020 into early 2021, OpenAI vice president Dario Amodei and a group of safety researchers departed to found Anthropic. The immediate trigger was the commercialization of GPT-3's API — Dario and others believed that pushing a 175-billion-parameter model to market without a safety evaluation framework was a betrayal of OpenAI's mission.[^12]

Anthropic represented the route of **safety-first external institution-building.** It did not attempt to change OpenAI from within — it founded a new company and redefined the meaning of "safety" through Constitutional AI: not "having humans review every output," but "using auditable rules to make the model self-regulate." [^13]

During the November 2023 OpenAI civil war, the board even approached Amodei personally, proposing that he replace Altman and potentially merge the two companies — Amodei declined both proposals.[^22] This detail is critical: at its most desperate moment, OpenAI's board turned to the safety defectors for help — proving that even the board itself acknowledged the safety faction's judgment was, in some sense, correct. But Amodei's refusal also proved something: the defectors no longer believed that "returning to reform OpenAI from within" was viable.

Anthropic's founding proved one thing: AI safety is not a problem that can be solved by "allocating a few more resources within the existing company" — it requires **institutional guarantees at the organizational level.** A company that must continuously release more powerful models under commercial pressure will naturally place safety behind "more powerful."

### 5.2 The second schism: SSI and the great safety exodus (2024)

If Anthropic was OpenAI's first safety schism — the business faction won, the safety faction departed — then the 2024 collective safety team exodus was the second schism, larger in scale and clearer in signal.

The **November 2023** Altman ouster was the catalyst: Sutskever witnessed firsthand that even with voting power at the board level, the safety faction could not withstand the combined force of "700 employees + Microsoft + Altman." He expressed regret within five days — but the rift was irreparable. In **May 2024**, Sutskever officially left. That same month, Jan Leike stated in his public declaration the line that would be quoted again and again: "safety culture and processes have taken a backseat to shiny products" — and then he left too. John Schulman — OpenAI co-founder and a core champion of RLHF — also went to Anthropic in 2024.

Sutskever's SSI represents the **independent path for superintelligence safety.** Its name — Safe Superintelligence Inc. — is blunt to the point of provocation: safety is not "a feature"; safety is "the company's entire purpose." [^9] And the capital market responded with a $30 billion valuation — proving one thing: **a purely safety-missioned AI company can command a higher valuation than many commercialized AI companies.** [^23]

### 5.3 The shadow of a third schism

As of mid-2026, OpenAI is pushing forward with full for-profit conversion. This means the nonprofit entity will lose legal control — the last institutional safety barrier is being dismantled. If this process is completed, OpenAI will no longer have any **structural** safety constraints — only the good-faith commitments of its management.

Each schism repeats the same pattern: the safety faction discovers "internal reform" is insufficient, chooses to depart, and founds a new organization. Anthropic (2021) was the first wave; SSI (2024) was the second. If this pattern continues — if OpenAI's full for-profit conversion triggers a third wave of safety departures — then the AI safety movement will be thoroughly fragmented into multiple independent small organizations, each working in its own direction, but none with sufficient influence to counterbalance OpenAI's commercial decisions.

---

## VI. Is this inevitable for technology companies?

OpenAI's schism pattern — "idealistic founding → capital-driven transformation → internal split → defectors build new organizations" — is not unique to OpenAI. It is virtually the inevitable path of every "mission-driven technology company."

**Google/DeepMind:** DeepMind founder Demis Hassabis repeatedly clashed with Google management over AI safety and organizational independence. In 2023, DeepMind was merged into Google DeepMind, losing its legal independence.[^14]

**Tesla/Autopilot:** Musk himself was both a co-founder of OpenAI and a champion of Tesla AI. His "conflict of interest" between OpenAI and Tesla — the very "potential future conflicts" mentioned in OpenAI's founding statement — is itself a microcosm of the internal contradictions of technology companies.[^2]

**Why inevitable?** Because the two defining characteristics of frontier AI — **compute hunger** and **safety risk** — are inherently contradictory. Compute hunger demands capital-intensive investment; capital demands returns; returns demand commercialization; commercialization demands speed. Safety risk demands caution; caution demands slowing down; slowing down demands delaying releases. These two characteristics cannot coexist peacefully within the same company — the tension between them accumulates continuously until it is released in the form of schism.

This is not a story of "villains vs. heroes." Altman is not a villain — he made the right product decisions at the right time (ChatGPT), bringing unprecedented public attention to AI. Sutskever is not a villain — he held firm to a correct belief (safety cannot be diluted by commercialization). Amodei is not a villain — he chose to advance safety research through action rather than argument.

This is an **institutional design problem.** Nonprofit structures cannot sustain the compute demands of frontier AI training. For-profit structures cannot embed sufficient safety constraints. Capped-profit is a compromise, but compromises do not endure. Currently, no one has found an institutional framework that can both access sufficient capital and embed safety constraints — this is the fundamental reason for OpenAI's decade of schism.

---

## VII. Outstanding questions

OpenAI's story is far from over. As of mid-2026, several key uncertainties continue to unfold:

- **Can full for-profit conversion be completed?** The California Attorney General and the Delaware courts are reviewing this transformation. If blocked, OpenAI will be trapped in an institutional limbo — "neither sufficiently for-profit nor sufficiently nonprofit." [^7]
- **Can GPT-5 reestablish the gap?** GPT-5 has been repeatedly delayed, while the multi-front pursuit by Claude, Gemini, and DeepSeek is narrowing OpenAI's first-mover advantage.
- **Can the safety movement maintain unity?** Anthropic pursues Constitutional AI, SSI pursues superintelligence safety, and OpenAI's internal safety team pursues internal reform — three routes each going its own way, lacking coordination. Can a fragmented safety movement counterbalance the commercial momentum of a closed-source company generating billions in annual revenue?

The answers to these questions will determine the trajectory of the entire AI industry.

---

## Commentary

OpenAI's decade is a complete specimen of "how a mission is deformed by capital" — but reading it as "decline" is wrong.

Each of OpenAI's transformations had clear and rational logic: the nonprofit could not raise enough money, so capped-profit was needed. Capped-profit could not attract the largest capital, so Microsoft was needed. Microsoft's investment demanded productization, so closed-sourcing was needed. Closed-sourcing generated revenue, so more closed-sourcing was needed. Full for-profit conversion attracted the largest-scale capital, so the nonprofit structure had to be dismantled. Not a single step on this logic chain was "malicious" — each was a rational choice made under the constraints of the preceding step.

But the cumulative result of rational choices can be irrational. When a company's mission shifts from "open" to "closed," from "nonprofit" to "for-profit," from "safety-first" to "product-first" — even if every step had a reason — the distance between where it ultimately arrived and where it declared it was heading at the outset has grown too large to explain away with "we were doing the right thing."

The true lesson is not "OpenAI declined" — it is that **no institutional design currently exists that can simultaneously satisfy the capital demands and safety constraints of frontier AI research.** Every institutional form OpenAI adopted — nonprofit, capped-profit, fully for-profit — solved the problems of the previous form while creating new ones. The nonprofit solved the motivation problem but could not raise money. Capped-profit solved the fundraising problem but could not retain the safety faction. Full for-profit solved the capital problem but dismantled the last safety barrier.

This path of institutional evolution is less a failure of OpenAI than an **institutional failure of the entire AI industry.** As of 2026, we have not yet found an organizational form that can accommodate trillion-dollar-scale capital while embedding safety constraints — this is the real warning that OpenAI's decade of schism delivers.

The departures of Anthropic and SSI are not OpenAI's loss — they are a loss of institutional design. If a better institutional framework existed, these people would not have needed to leave; their safety research could have been conducted within a larger, more powerful, better-resourced organization. They left — because no such framework exists.

This is not OpenAI's tragedy. This is all of our tragedy.

---

*This essay was compiled by the Rhodes Island Industrial Chronicle team: Fu Xuan (theoretical framework review).*

[^1]: OpenAI, "OpenAI Charter", 2015-12. Original founding declaration.
[^2]: See various estimates of GPT-series training costs. GPT-1 training cost was approximately tens of thousands of dollars; GPT-2 approximately hundreds of thousands; GPT-3 estimated at $4.6M–$12M (see Patterson et al., "Carbon Emissions and Large Neural Network Training", 2021).
[^3]: GPT-4 training cost estimates: $63M–$100M. See The Information, "OpenAI's Costs", 2023; and various analyst estimates.
[^4]: OpenAI, "OpenAI LP", 2019-03. https://openai.com/blog/openai-lp
[^5]: Microsoft, "Microsoft invests in and partners with OpenAI", 2019-07-22.
[^6]: The Information / Bloomberg, "Microsoft invests billions more in OpenAI", 2023-01-23.
[^7]: See The Information, "OpenAI plans for-profit conversion", 2024–2025; and various reports on California AG and Delaware court proceedings.
[^8]: OpenAI, "OpenAI announces leadership transition", 2023-11-17.
[^9]: Safe Superintelligence Inc. (SSI), founded 2024-06. See Bloomberg, "Sutskever starts new AI safety company", 2024-06.
[^10]: Elon Musk, various public statements regarding OpenAI's name and open-source commitments, 2023–2024.
[^11]: DeepSeek, "DeepSeek-R1", MIT License, 2025-01. https://github.com/deepseek-ai/DeepSeek-R1
[^12]: See various accounts of Anthropic's founding, including the departure of Dario Amodei and Daniela Amodei from OpenAI in late 2020 / early 2021.
[^13]: Anthropic, "Constitutional AI: Harmlessness from AI Feedback", 2022-12.
[^14]: See Wired / The Verge, "DeepMind merged into Google DeepMind", 2023-04.
[^15]: Sam Altman internal email, 2019. Referenced in *The New Yorker*, April 2026.
[^16]: See *The New Yorker*, "The Inside Story of OpenAI's Crisis", Ronan Farrow, April 2026. Detailed accounts of Altman's activities and Sutskever's response.
[^17]: OpenAI DevDay, 2023-11-06.
[^18]: *The New Yorker*, Ronan Farrow, "The Inside Story of OpenAI's Crisis", April 2026. The 52-page memo and 70-page annotated dossier were first reported in this investigation.
[^19]: Helen Toner, "Decoding Intentions: AI and Costly Signals", October 2023; and related accounts of Altman's interactions with Toner.
[^20]: See Reuters / The Information, "OpenAI researchers warned board about Q* breakthrough", November 2023.
[^21]: See various accounts of the timing of Altman's removal, including that he was watching the Las Vegas Grand Prix on Google Meet when notified.
[^22]: See multiple sources on the November 2023 crisis resolution, including the employee open letter, Microsoft's involvement, and the board restructuring.
[^23]: Bloomberg / The Information, "SSI valuation reaches $30 billion", March 2025; and various reports on SSI funding rounds, Google Cloud partnership, and Meta acquisition attempt.
[^24]: Jan Leike, posts on X (formerly Twitter), May 2024; *The Decoder*, "OpenAI safety team loses seven researchers", 2024.
[^25]: John Schulman joined Anthropic in 2024. See The Verge / Bloomberg reporting.
