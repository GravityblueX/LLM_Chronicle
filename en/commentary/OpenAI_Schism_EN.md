# The OpenAI Schism and Evolution

> OpenAI's decade-long history is not a corporate history — it is an institutional experiment history. It begins with "we are a nonprofit, unconstrained by financial return" and ends with "we are valued in the hundreds of billions, seeking full for-profit conversion." Every step in between — the transitions, fundraising, closed-sourcing, firing the CEO, rehiring the CEO — answers the same question: **an organization whose mission is to "benefit all of humanity," how long can it last before the compute hunger of frontier AI forces it to change course?**

---

## I. The Structural Contradiction: Nonprofit Ideals vs. Compute Reality

Every schism at OpenAI — of people, of direction, of brand — can be traced back to one structural contradiction: **its mission demands openness and safety, but frontier AI training demands closure and massive investment.**

In December 2015, OpenAI's founding statement was unambiguous:

> "Our goal is to advance digital intelligence in the way that is most likely to benefit humanity as a whole, unconstrained by a need to generate financial return." [^1]

"unconstrained by a need to generate financial return." In 2015, this sounded like idealism. By 2020, it had become an impossible promise.

The reason is simple: the cost of training large models grows exponentially. GPT-1 (2018) cost roughly tens of thousands of dollars to train. GPT-2 (2019) cost roughly hundreds of thousands. GPT-3 (2020) cost an estimated $4.6 million to $12 million.[^2] GPT-4 (2023) cost between $63 million and $100 million.[^3] The growth rate of these numbers far outstripped a nonprofit's fundraising capacity — and far outstripped any single donor's patience.

The fatal flaw of the nonprofit structure was exposed here: it could raise money for research, but not for **scaling.** In the early days of deep learning (2015–2018), a few million dollars in donations was enough to support first-rate research. By the Transformer era, training a frontier model required compute costs in the hundreds of millions — this was beyond donations; this required capital markets.

This contradiction was not a failure of OpenAI's management — it was an **incompatibility between physical constraints and institutional design.** As long as frontier AI training requires ever-larger compute, any AI organization not connected to capital markets will be left behind.

---

## II. The Transition Trilogy: From Nonprofit to Capped Profit to Full For-Profit

### 2.1 Step One: Capped Profit (2019-03)

In March 2019, OpenAI announced its transition to **OpenAI LP** — a "capped-profit" company. Investor returns were capped at 100x, with excess going to the nonprofit entity. Sam Altman gave up personal equity to maintain the legitimacy of the "nonprofit spirit." [^4]

The legal ingenuity of this structure lay in: it nominally preserved the "nonprofit" shell — the nonprofit entity retained control of the company — while substantively opening the door to commercial capital. A "100x return cap" is an extremely high cap in Silicon Valley — it was sufficient to attract venture capital while maintaining the "we're not in it for the money" narrative.

**Internal logic**: OpenAI needed money but couldn't openly admit "needing money." Capped profit was a compromise — "We're not in it for the money, but if we happen to make some, we'll share a bit with you — but not too much."

### 2.2 Step Two: Microsoft Enters (2019-07, 2023-01)

In July 2019, Microsoft invested $1 billion in OpenAI, and Azure became OpenAI's exclusive cloud provider.[^5] In January 2023, Microsoft made a "multi-year, multi-billion-dollar" follow-up investment, estimated at approximately $10 billion.[^6]

The consequences of Microsoft's investment went beyond capital — they reshaped the **power structure.** When your compute depends entirely on a tech giant, your independence is an illusion. OpenAI's mission statement says "unconstrained by financial return" — but it was effectively subject to Microsoft's Azure roadmap, Microsoft's equity demands, and Microsoft's Copilot product strategy.

**Internal logic**: Compute demands transformed OpenAI from an "independent research lab" into a "quasi-subsidiary of Microsoft." This transformation didn't happen overnight — it was accomplished incrementally through two investments, one exclusive cloud partnership, and one ten-billion-dollar infusion. Each step had sound business logic, but each step tightened Microsoft's chain of control.

### 2.3 Step Three: Full For-Profit Conversion (2024–2025)

From late 2024 through 2025, OpenAI began pushing for full for-profit conversion — transitioning from a "capped-profit" company to a standard for-profit corporation (PBC, Public Benefit Corporation).[^7] This meant:

- Investor returns would no longer be capped at 100x
- The nonprofit entity would lose legal control of the company
- Corporate governance would shift from "mission-driven" to "shareholder value-driven"

The immediate driver of this transition was valuation pressure. OpenAI's valuation in 2024–2025 reached hundreds of billions of dollars — fundraising at this scale was impossible within the "capped-profit" legal framework. Venture capital and sovereign wealth funds demanded standard for-profit corporate structures — no caps, no nonprofit board's intervention rights.

**Internal logic**: From nonprofit to capped profit was "for compute." From capped profit to full for-profit was "for capital." The two transitions had different drivers but the same direction — each was a further retreat from idealism toward reality.

---

## III. November 2023: 104 Hours of Institutional Crisis

### 3.1 The Event Recap

On 2023-11-17, OpenAI's board of directors suddenly dismissed Sam Altman as CEO, citing that "he was not consistently candid in his communications with the board." [^8]

What followed in the next 104 hours remains the most dramatic event in large language model history: 700+ employees signed an open letter demanding Altman's reinstatement or they would collectively leave for Microsoft; Microsoft CEO Satya Nadella announced he would take in Altman and Brockman; ultimately Altman was reinstated, the board was restructured, and Ilya Sutskever departed the board.

### 3.2 Deep Causes: The Structural Conflict Between Safety and Commerce

The surface reason for Altman's dismissal was "lack of candor in communications" — but virtually every informed observer pointed to the same deep contradiction: **the irreconcilability between the safety faction and the commercial faction.**

This contradiction didn't emerge in November 2023. Altman himself described the internal divisions as "tribes" in an internal email as early as 2019 — on one side the for-profit department pursuing commercialization, on the other the safety department concerned about AI capabilities.[^15] Tensions concentrated and erupted in the second half of 2023: in October, Altman diminished Sutskever's role in the company, further escalating the conflict.[^16] Meanwhile, before his dismissal, Altman was pursuing billions in investment from Middle Eastern sovereign wealth funds to develop AI chips to compete with Nvidia, and collaborating with SoftBank's Masayoshi Son and former Apple designer Jony Ive on AI hardware — Sutskever and allies believed these activities improperly leveraged the OpenAI name.[^16]

The November 6, 2023 DevDay event became the final trigger: Altman unveiled a series of commercialization initiatives including custom ChatGPT instances, which the opposition viewed as a clear signal of OpenAI accelerating commercialization.[^17] Eleven days later, the board acted.

The safety faction was represented by Ilya Sutskever. Sutskever was OpenAI's co-founder and Chief Scientist who from the very beginning saw "safety" as OpenAI's reason for existence. In his view, AGI safety was not a feature to be appended afterwards — it was OpenAI's entire purpose. If an AGI research organization compromised on safety, how would it be different from Google or Facebook? Before the dismissal, at the board's request, Sutskever compiled a 52-page memo and an approximately 70-page annotated dossier (including internal communications, documents, and photographs) alleging that Altman "exhibited a pattern of...lying" and provided misleading information to company executives and the board — particularly on safety issues.[^18] This dossier was not exposed until April 2026, when *The New Yorker*'s investigative report — a 70-page piece by Ronan Farrow — brought the full details to light.[^18]

Another key board member was Helen Toner — Director of Strategy at Georgetown University's CSET, with a background in the effective altruism movement. In October 2023, she published the paper "Decoding Intentions: AI and Costly Signals," which criticized OpenAI's safety efforts while praising Anthropic's approach. Altman called Toner to say the paper "could cause trouble" because the FTC was investigating OpenAI's data collection. Toner saw this as proof that Altman was manipulating board members for personal advantage.[^19] Additionally, reports emerged in November 2023 that a classified project codenamed Q* had achieved breakthroughs in logical and mathematical reasoning, reportedly reaching elementary school math levels — concerns about how Altman handled the safety implications of this discovery were brought to the board shortly before the dismissal.[^20]

The commercial faction was represented by Altman. Altman was not a technical person — he was the former president of Y Combinator, a natural entrepreneur and fundraising expert. In his view, OpenAI's mission was meaningful only if backed by sufficient power — a weak but "safe" AI lab could not change the world. To become powerful, you need money. To earn money, you need products. To build products, you need speed. Safety mattered — but it couldn't be a reason not to move forward.

At noon on 2023-11-17, the board immediately dismissed Altman following a "deliberative review process" — Altman was watching the Las Vegas Grand Prix when he was notified via Google Meet, with only 5–10 minutes' notice before the dismissal.[^21] Sutskever then notified board chairman Greg Brockman via Google Meet — Brockman promptly resigned as chairman. But Altman's 700 employees (roughly 95% of the total) voted with their feet — they signed an open letter threatening to collectively resign, choosing Altman over the board.[^22]

Microsoft even approached Anthropic's Dario Amodei behind the scenes, proposing he replace Altman and potentially merge the two companies — Amodei declined both proposals.[^22] The final settlement: Altman returned, Toner, McCauley, and Sutskever left the board, replaced by Lawrence Summers and Bret Taylor.[^22]

Sutskever told an all-hands meeting that firing Altman was "the board doing its job" — but expressed regret a week later.[^19] This vacillation of "did the right thing but couldn't bear the consequences" is itself a microcosm of the safety faction's predicament: they had institutional power (voting rights) but not organizational strength (employee loyalty).

**Institutional lesson**: In a company with 770 employees and a multi-billion-dollar valuation, a four-person board could fire the CEO without advance notice — while 700 employees could overturn the board through collective resignation. This event exposed a core problem: OpenAI's governance structure was designed for a small nonprofit research lab — not for one of the world's largest AI product companies. When the company's actual scale and influence far exceeded its governance framework, institutional collapse was only a matter of time.

### 3.3 Aftermath: The Safety Team's Collective Exodus

Ilya Sutskever officially left OpenAI in May 2024 after Altman's reinstatement. One month later, he announced the founding of **Safe Superintelligence Inc. (SSI)** — an independent research institution focused on superintelligence safety, co-founded with former Apple AI lead Daniel Gross and former OpenAI researcher Daniel Levy.[^9]

The name SSI was itself a declaration: **the safety problem of superintelligence is too important to be solved inside a company that has already commercialized.** The capital market's response was staggering: $1 billion in funding in September 2024 (from SV Angel, DST Global, Sequoia Capital, a16z), and by March 2025 the valuation soared to $30 billion — a sixfold increase in six months.[^23] In April 2025, SSI partnered with Google Cloud for TPU access. In the first half of 2025, Meta attempted to acquire SSI, but Sutskever refused. In July 2025, co-founder Daniel Gross departed to join Meta Superintelligence Labs, and Sutskever became sole CEO — the company had approximately 50 people.[^23]

Sutskever's decade at OpenAI taught him one thing — the "internal reform" route had failed. He had pushed for safety research within OpenAI for a decade, only to be overturned by the collective will of 700 employees in a single board vote. This led him to a conclusion: safety must be advanced in an organization **independent of commercial pressures.**

But the exodus went beyond Sutskever. In May 2024, OpenAI Superalignment project co-lead **Jan Leike** announced his resignation — he wrote on X:

> "Over the past years, safety culture and processes have taken a backseat to shiny products." [^24]

> "I gradually lost trust in OpenAI's leadership." [^24]

Leike subsequently joined Anthropic. According to *The Decoder*, OpenAI's AI safety team lost at least seven researchers during those months — including Sutskever, Leike, Daniel Kokotajlo, and others.[^24] Earlier still, OpenAI co-founder **John Schulman** also joined Anthropic in 2024.[^25]

Sutskever was the co-creator of AlexNet, a co-author of the AlphaGo paper, an OpenAI co-founder, and the driving force behind the GPT series and the o1 reasoning model — a three-time NeurIPS Test of Time Award winner (2022–2024), called "one of the most cited computer scientists." His trajectory personifies the tension line of "safety vs. commerce." When such a person chooses to leave and found an independent safety lab, the signal significance far exceeds the commercial significance.

---

## IV. "Open"AI: From Most Open to Most Closed

OpenAI's name contains the word "Open" — this word underwent the most ironic semantic shift over a decade.

| Period | Meaning of "Open" | Degree of Openness |
|--------|-------------------|--------------------|
| 2015–2018 | Open research, open-source tools | High (OpenAI Gym, Universe open-sourced) |
| 2018–2019 | GPT-2 "staged release" | Medium (open with reservations) |
| 2020 | GPT-3 API-only | Low (weights not open) |
| 2023 | GPT-4 fully black-box | Very low (no public parameters, data, or architecture) |
| 2024–present | Closed-source + paid | Very low (chain-of-thought hidden, $200/month subscription) |

From "the most open AI lab" to "the most closed frontier model company" — this transition did not happen overnight but through a series of "decisions with reasonable justifications":

1. GPT-2 was not released openly because it was "too dangerous" — reasonable
2. GPT-3 was API-only because "a business model was needed to support larger models" — reasonable
3. GPT-4's parameters were not disclosed because of "competitive considerations" — reasonable
4. o1's chain-of-thought was hidden because of "safety considerations" — reasonable

Each step had a reasonable justification. But taken in sequence, "Open" had transformed from a mission into an irony. OpenAI's critics — including Elon Musk — repeatedly attacked it with this irony: "A company that was supposed to be as open as Linux became as closed as Microsoft." [^10]

DeepSeek-R1's MIT open-sourcing pushed this irony to its extreme. When a comparable reasoning model was given away completely free, completely public — including its chain-of-thought — OpenAI's narrative that "safety requires closed-sourcing" was factually challenged.[^11] The question was no longer "should OpenAI open-source?" — it became "if someone else open-sourced an equally powerful model and the world didn't end, where exactly lies the justification for OpenAI being closed?"

---

## V. How the Schisms Reshaped the Entire Industry

OpenAI's internal contradictions didn't only affect OpenAI itself — they spawned a series of "emigrant companies," each representing a critique of OpenAI's path.

### 5.1 The First Schism: Anthropic (2021)

From late 2020 to early 2021, OpenAI Vice President Dario Amodei and a group of safety researchers departed to found Anthropic. The immediate trigger was GPT-3's API commercialization — Dario and others believed that pushing a 175-billion-parameter model to market without a safety evaluation framework was a betrayal of OpenAI's mission.[^12]

Anthropic represented the **safety-first external institution-building** path. It didn't try to change OpenAI from within — it founded a new company, redefining "safety" through Constitutional AI: not "human review of every output" but "auditable rules for the model to self-regulate." [^13]

During the November 2023 OpenAI civil war, the board even approached Amodei himself, proposing he replace Altman and potentially merge the two companies — Amodei declined both proposals.[^22] This detail is critical: OpenAI's board, at its most desperate moment, turned to the safety faction emigrants for help — proving they themselves acknowledged that the safety faction's judgment was, in some sense, correct. But Amodei's refusal also proved one thing: emigrants no longer believed that "returning to reform OpenAI from within" was viable.

Anthropic's founding proved one thing: AI safety is not a problem that can be solved by "allocating a bit more resources within an existing company" — it requires **institutional safeguards at the organizational level.** A company that must continuously release more powerful models under commercial pressure will naturally rank safety after "more powerful."

### 5.2 The Second Schism: SSI and the Safety Team Exodus (2024)

If Anthropic was OpenAI's first safety schism — the commercial faction won, the safety faction emigrated — then the 2024 safety team exodus was the second schism, larger in scale and clearer in signal.

The November 2023 Altman dismissal was the catalyst: Sutskever witnessed firsthand that even with voting power at the board level, the safety faction could not withstand the combined force of "700 employees + Microsoft + Altman." He expressed regret within five days — but the rift was irreparable. In May 2024, Sutskever officially left. That same month, Jan Leike said in a public statement what became a repeatedly quoted line: "safety culture and processes have taken a backseat to shiny products" — and then he left too. John Schulman — OpenAI co-founder and the core champion of RLHF — also went to Anthropic in 2024.

Sutskever's SSI represented the **independent superintelligence safety path.** Its name — Safe Superintelligence Inc. — was blunt to the point of provocation: safety is not "a feature"; safety is "the entire purpose of the company." [^9] The capital market responded with a $30 billion valuation — proving one thing: **a purely safety-missioned AI company can achieve a higher valuation than many commercialized AI companies.** [^23]

### 5.3 The Shadow of a Third Schism

As of mid-2026, OpenAI is pushing forward with full for-profit conversion. This means the nonprofit entity will lose legal control — the last institutional safety barrier is being dismantled. If this process is completed, OpenAI will no longer have any **structural** safety constraints — only management's good-faith commitments.

Each schism repeats the same pattern: the safety faction discovers "internal reform" is insufficient, chooses to emigrate, and founds a new company. Anthropic (2021) was the first wave; SSI (2024) was the second. If this pattern continues — if OpenAI's full for-profit conversion triggers a third wave of safety faction departures — then the AI safety movement will be completely fragmented into multiple independent small organizations, each working in its own direction but none with sufficient influence to counterbalance OpenAI's commercial decisions.

---

## VI. Is This Inevitable for Technology Companies?

OpenAI's schism pattern — "idealistic founding → capital-driven transformation → internal schism → emigrants build new organizations" — is not unique to OpenAI. It is virtually the inevitable path of every "mission-driven technology company."

**Google/DeepMind**: DeepMind founder Demis Hassabis clashed repeatedly with Google management over AI safety and organizational independence. In 2023, DeepMind was merged into Google DeepMind, losing its legal independence.[^14]

**Tesla/Autopilot**: Musk himself was both an OpenAI co-founder and a Tesla AI champion. His "conflict" between OpenAI and Tesla — the "potential future conflict" mentioned in OpenAI's founding statement — is itself a microcosm of the inherent contradictions in tech companies.[^2]

**Why is it inevitable?** Because frontier AI's two characteristics — **compute hunger** and **safety risk** — are inherently contradictory. Compute hunger demands capital-intensive investment; capital demands returns; returns demand commercialization; commercialization demands speed. Safety risk demands caution; caution demands slowing down; slowing down demands delaying releases. These two characteristics cannot coexist peacefully within the same company — the tension between them accumulates continuously until it is released in the form of schism.

This is not a story of "bad people vs. good people." Altman is not a bad person — he made the right product decisions at the right time (ChatGPT), bringing unprecedented public attention to AI. Sutskever is not a bad person — he was upholding a correct belief (safety cannot be diluted by commercialization). Amodei is not a bad person — he chose to advance safety research through action rather than argument.

This is an **institutional design problem.** Nonprofit structures cannot support the compute demands of frontier AI training. For-profit structures cannot embed sufficient safety constraints. Capped profit is a compromise, but compromises cannot last. No one has yet found an institutional framework that can simultaneously secure sufficient capital and embed safety constraints — this is the fundamental reason for OpenAI's decade of schism.

---

## VII. Remaining Questions

OpenAI's story is far from over. As of mid-2026, several key suspense threads remain unfolding:

- **Can full for-profit conversion be completed?** The California Attorney General and the Delaware Court of Chancery are reviewing this transition. If blocked, OpenAI will be stuck in an institutional limbo of "neither sufficiently for-profit nor sufficiently nonprofit." [^7]
- **Can GPT-5 re-establish the gap?** GPT-5 has been repeatedly delayed, and the multi-pronged pursuit by Claude, Gemini, and DeepSeek is narrowing OpenAI's first-mover advantage.
- **Can the safety movement maintain unity?** Anthropic is doing Constitutional AI, SSI is doing superintelligence safety, and OpenAI's internal safety team is doing internal reform — three paths operating independently, lacking coordination. Can a fragmented safety movement counterbalance the commercial momentum of a closed-source company with annual revenues in the tens of billions?

The answers to these questions will determine the direction of the entire AI industry.

---

## Afterword

OpenAI's decade is a complete specimen of "how capital deforms mission" — but reading it as "decline" is wrong.

Every step of OpenAI's transformation had clear and rational logic: a nonprofit couldn't raise enough money, so capped profit was needed. Capped profit couldn't attract the largest capital, so Microsoft was needed. Microsoft's investment demanded productization, so closed-sourcing was needed. Closed-sourcing brought revenue, so more closed-sourcing was needed. Full for-profit conversion attracts the largest capital, so the nonprofit structure needed to be dismantled. No step in this logic chain was "malicious" — each was a rational choice made under the constraints of the previous step.

But the cumulative result of rational choices can be irrational. When a company's mission transforms from "open" to "closed," from "nonprofit" to "for-profit," from "safety first" to "products first" — even if every step has a justification — the distance between where it ultimately arrives and where it claimed to be heading at the start has grown too vast to explain away with "we're doing the right thing."

The real lesson is not "OpenAI declined" — but that **no institutional design currently exists that can simultaneously satisfy the capital demands and safety constraints of frontier AI R&D.** Each of OpenAI's institutional forms — nonprofit, capped profit, full for-profit — solved the previous form's problems while creating new ones. The nonprofit solved the motivation problem but couldn't raise money. Capped profit solved the fundraising problem but couldn't retain the safety faction. Full for-profit solves the capital problem but dismantles the last safety barrier.

This path of institutional evolution, rather than being OpenAI's failure, is the **institutional failure** of the entire AI industry. In 2026, we still have not found an organizational form that can accommodate trillion-scale capital while embedding safety constraints — this is the real warning that OpenAI's decade of schism gives us.

The departures of Anthropic and SSI are not OpenAI's loss — they are a loss for institutional design. If a better institutional framework existed, these people wouldn't need to leave; their safety research could be conducted within a larger, more powerful, better-resourced organization. They left — because no such framework exists.

This is not OpenAI's tragedy. This is all of our tragedy.

---

*This article was compiled by the Endfield Industrial History Bureau team: Fu Xuan (theoretical framework review).*

---

[^1]: OpenAI, "OpenAI", 2015-12-11. https://openai.com/about/
[^2]: See various estimates for GPT-1, GPT-2, and GPT-3 training costs; also referenced in the "AI Infrastructure and Chips" chronicle.
[^3]: See various estimates for GPT-4 training costs, widely cited as $63M–$100M range.
[^4]: OpenAI, "OpenAI LP", 2019-03. https://openai.com/blog/openai-lp
[^5]: Microsoft, "Microsoft invests in and partners with OpenAI", 2019-07-22. https://blogs.microsoft.com/blog/2019/07/22/microsoft-invests-in-and-partners-with-openai/
[^6]: Microsoft, "Microsoft and OpenAI extend partnership", 2023-01-23. https://blogs.microsoft.com/blog/2023/01/23/microsoft-and-openai-extend-partnership/
[^7]: See multiple reports on OpenAI's PBC conversion, 2024–2025.
[^8]: OpenAI, "OpenAI announces leadership transition", 2023-11-17. https://openai.com/blog/openai-announces-leadership-transition
[^9]: Sutskever, I., Gross, D., Levy, D., "Safe Superintelligence Inc.", 2024-06-19. https://ssi.inc/
[^10]: Elon Musk, multiple posts on X criticizing OpenAI's closed-sourcing, 2023–2024.
[^11]: DeepSeek, "DeepSeek-R1", 2025-01. MIT license. https://github.com/deepseek-ai/DeepSeek-R1
[^12]: See multiple reports on Anthropic's founding, including Dario Amodei's departure from OpenAI, 2020–2021.
[^13]: Bai et al., "Constitutional AI: Harmlessness from AI Feedback", arXiv:2212.08073, 2022-12-15.
[^14]: See reports on DeepMind's merger into Google DeepMind, 2023.
[^15]: Sam Altman, internal email referencing "tribes" within OpenAI, 2019. Referenced in multiple investigative reports.
[^16]: See multiple investigative reports on the events leading to Altman's dismissal, October–November 2023.
[^17]: OpenAI, "DevDay", 2023-11-06. https://openai.com/devday
[^18]: Ronan Farrow, "The Inside Story of the Shakeup at OpenAI", *The New Yorker*, 2026-04. 70-page investigative report exposing Sutskever's 52-page memo and 70-page annotated dossier.
[^19]: Helen Toner, "Decoding Intentions: AI and Costly Signals", 2023-10.
[^20]: See reports on Project Q*, November 2023.
[^21]: See multiple accounts of the dismissal timeline, November 17, 2023.
[^22]: See multiple reports on the resolution of the OpenAI crisis, November 2023. Including the 700+ employee open letter and Microsoft's involvement.
[^23]: Bloomberg, multiple reports on SSI's funding and valuation, 2024–2025. $1B funding in September 2024; $30B valuation by March 2025.
[^24]: Jan Leike, posts on X, 2024-05-17. See also The Decoder, reporting on OpenAI safety team departures.
[^25]: See reports on John Schulman joining Anthropic, 2024.
