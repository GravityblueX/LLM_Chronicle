# The AI Infrastructure Arms Race

> In January 2024, OpenAI, SoftBank, and Oracle jointly announced the Stargate project, committing $500 billion over four years to AI infrastructure. That same year, Microsoft announced $80 billion in data center investment, Meta accumulated over 600,000 H100 GPUs, and Google rolled out TPU v6 clusters across the board. As the most expensive technology infrastructure race in human history unfolds, a fundamental question surfaces: is this wager an industrial-revolution-scale strategic bet, or yet another overinvestment destined for correction?

## I. Scale of investment: Unprecedented

On January 21, 2025, President Trump announced the **Stargate** project at the White House: OpenAI, SoftBank, and Oracle formed a joint venture planning to invest up to **$500 billion** in AI infrastructure over four years, with an initial commitment of $100 billion.[^1] This figure exceeds any single technology project in human history — including the Manhattan Project (~$30 billion inflation-adjusted), the Apollo Moon Landing Program (~$260 billion inflation-adjusted), and the International Space Station (~$150 billion).

Stargate was not an isolated case. While its scale was the largest, the entire industry's infrastructure investment displayed a collective acceleration during 2024–2025:

- **Microsoft**: planned approximately **$80 billion** in AI data center spending for fiscal year 2025, with more than half allocated to the U.S. domestic market.[^2] This represented roughly an 80% increase over fiscal year 2024.
- **Meta**: by end of 2024, had cumulatively deployed approximately **600,000 NVIDIA H100 GPUs** across multiple data center clusters.[^3] Mark Zuckerberg publicly stated that by end of 2025, Meta would possess sufficient compute to train next-generation frontier models.
- **Google**: fully deployed **TPU v6 (Trillium)** clusters and announced Cloud TPU v6e had entered public preview.[^4] Google simultaneously continued doubling down on its custom silicon track, raising its 2025 capital expenditure plan to approximately **$75 billion**.[^5]
- **xAI**: the Memphis Colossus cluster expanded from 100,000 H100s to 200,000, with Elon Musk announcing plans for further upgrades to B200 clusters.[^6]

Tallying these figures together — Stargate $500 billion, Microsoft $80 billion (single year), Google $75 billion (single year), Meta's hundreds of thousands of GPU acquisitions — global AI infrastructure investment in 2024–2025 easily surpassed the trillion-dollar magnitude.

These numbers have reached a level of abstraction that defies intuition. To convey their weight: Microsoft's $80 billion data center investment in fiscal year 2025 exceeds the annual defense budget of most countries worldwide. Stargate's $500 billion commitment is equivalent to Vietnam's entire 2024 GDP.

## II. Investment logic: "Build the power plant first, then discuss efficiency"

Why are tech giants willing to commit funds at such scale? The answer can be summarized in one sentence: **during a capability explosion, infrastructure is the first priority; efficiency is the second.**

This logic is analogous to 19th-century railway construction, early 20th-century electrical grid deployment, or late 1990s fiber-optic network investment — in every new technology cycle's early phase, the market first frantically lays down infrastructure, then discusses how to use it efficiently. Railways built far more mileage than actual demand before transportation optimization emerged; the excess fiber laid during the internet bubble ultimately became the material foundation for Web 2.0's prosperity.

In the AI context, the "build the power plant first" logic is more specific:

**First, scaling laws have not yet失效.** Although Chinchilla's law optimized the parameter-to-data ratio (see *Treatise: The Evolution of Compute*, §III), the fundamental relationship discovered by Kaplan et al. — that more compute investment yields better model capability — still held in 2025. The rise of test-time compute (inference-time computation) further expanded compute demand: models not only require compute during training but have begun consuming substantial computation during inference.[^7]

**First-mover advantage determines ecosystem position.** In a rapidly iterating industry, the party that first possesses compute infrastructure can train models faster, iterate products faster, and lock in users faster. This was precisely OpenAI's strategy from GPT-3 to GPT-4 to GPT-4o — each capability leap was accompanied by expansion of the user base, and once established, user switching costs are extremely high.

**Competitors may fall behind due to insufficient compute.** The game-theoretic logic of arms races is simple: if I don't build and others do, I lose. This is not the "optimal strategy" but the "minimum strategy to avoid elimination." When Stargate announced $500 billion in investment, Anthropic, Google, and Meta had to respond — not because $500 billion was necessarily justified, but because not responding meant conceding on the compute dimension (see the soaring 2024–2025 fundraising scales of each company in the *Major Funding and Valuation Table*).

DeepSeek's emergence provided an interesting counterexample to this logic. DeepSeek-V3 achieved GPT-4o-level performance at a training cost of under $6 million (see *Commentary: The Price War*, §V), proving that architectural innovation and engineering optimization can dramatically reduce dependence on raw compute. But whether DeepSeek's counterexample generalizes depends on one premise: whether the marginal returns of architectural innovation are diminishing. If the next capability leap still requires orders of magnitude more compute — then Stargate's logic still holds.

## III. Who is building what: Four routes

The infrastructure arms race is not monolithic. The four major participants are pursuing four distinct routes:

**OpenAI + SoftBank + Oracle (Stargate): From tenant to owner.** Stargate's uniqueness lies in OpenAI's attempt to disentangle itself from Microsoft Azure's compute dependency. Before 2024, OpenAI's training and inference relied almost entirely on Azure data centers; Stargate marked OpenAI's pursuit of independent compute infrastructure.[^8] SoftBank provides capital, Oracle contributes data center operational expertise, and OpenAI contributes model capability and brand. This is a transformation from "tenant to landlord" — at the cost of $500 billion and a multi-year construction timeline.

**Microsoft: Betting on both sides.** Microsoft continues expanding Azure AI infrastructure ($80 billion/year) while simultaneously diversifying risk — reports indicate Microsoft has begun testing models from Anthropic, Meta, and others to guard against over-reliance on OpenAI.[^8] Microsoft's strategy is "the platform matters more than the model": regardless of whose model ultimately wins, they all need to run on Azure.

**Google: The long bet on custom silicon.** Google's differentiated route is TPU. From TPU v1 (2016) to TPU v6 Trillium (2024–2025), Google has pursued a compute supply path distinct from NVIDIA.[^4] Custom chips offer controllable costs and supply chain autonomy; the risks are long R&D cycles and a software-hardware ecosystem less mature than NVIDIA CUDA. Google's TPU investment spans nearly a decade — the longest-running custom silicon track among all participants.

**Meta: The open-source + self-built cluster combination.** Meta's route is the most distinctive: using the Llama series of open-source models to reduce competitive pressure at the model layer while aggressively purchasing GPUs at the infrastructure layer.[^3] Meta's 600,000 H100s serve not only AI research — they simultaneously support recommendation systems, content moderation, ad delivery, and metaverse rendering across multiple business lines. This makes Meta's infrastructure investment easier to absorb: even if AI model training returns fall short of expectations, the GPUs will not sit idle.

## IV. Bubble risk: Echoes of history

Whenever investment reaches an "unprecedented" scale, the word "bubble" appears. It is not a conspiracy theory — it is a reasonable concern with ample historical precedent.

**The telecom bubble's lesson.** Between 1996 and 2001, global telecommunications companies invested over $1 trillion laying undersea cables and terrestrial fiber networks. The investment logic was correct — the internet was indeed growing explosively — but the timing was wrong. Fiber deployment far outpaced demand growth, causing fiber prices to collapse and dozens of telecom companies to go bankrupt. Yet the broadband boom of the mid-2000s was built precisely on this "excess" fiber. The bubble burst, but the infrastructure remained.

The AI infrastructure arms race may follow a similar temporal mismatch:

**Revenue-side uncertainty.** In 2025, the global AI industry's annualized revenue (including API calls, subscription services, and enterprise solutions) was estimated at $50–80 billion. This means the industry invested more than ten times its total annual revenue in infrastructure in a single year. This does not mean the investment is irrational — infrastructure investment naturally precedes revenue — but revenue growth must sustain exponential growth for years to come to absorb these investments. If AI product revenue growth slows, a large number of data centers may face underutilization risk.

**Compute supply may exceed demand.** The current compute shortage narrative stems partly from NVIDIA GPU supply bottlenecks — H100 delivery lead times once stretched to months. But as B200/B300 reach volume production, AMD MI300X competes, and Intel Gaudi series enters the market, GPU supply is rapidly loosening in 2025–2026. If all announced construction plans are completed on schedule, global AI compute supply may experience a surplus in 2026–2027.

**Power constraints are a hard ceiling.** A single large AI data center's power demand can reach hundreds of megawatts, equivalent to a mid-sized city. Multiple Stargate data center sites involve nuclear-plant-level power supply solutions.[^9] Power infrastructure construction timelines (substations, transmission lines, power plants) are far longer than data center construction timelines. This means that even with sufficient capital and GPUs, power constraints may impose hard limits on actual construction scale.

**Valuation bubble and physical bubble overlay.** During 2024–2025, AI company valuations inflated at astonishing speeds (see *Major Funding and Valuation Table*): OpenAI soared from $29 billion (early 2023) to $300 billion (March 2025), Anthropic from $4.6 billion to $61.5 billion, and xAI from nothing to $50 billion. These valuations assume a revenue explosion that has not yet arrived. If AI product commercialization falls short of expectations, valuation correction and infrastructure surplus may occur simultaneously — a double blow.

## V. Another possibility: Not a bubble, but a turning point

The above is the bubble narrative. But there is another possibility: this is not a bubble but a permanent inflection point in human computing infrastructure.

**AI is not the internet — it has no "post-bubble winter."** The internet bubble's lesson: the bubble burst, but demand persisted. The internet companies of 2001 littered the landscape, but the internet of 2010 was ten times larger than that of 2000. If AI follows a similar path — short-term overinvestment correction possible, but long-term all infrastructure will be fully utilized.

**Infrastructure itself is a competitive moat.** Unlike internet-era fiber (which depreciated once laid), AI infrastructure's value is deeply bound to the software ecosystem. An operational 100,000-card cluster, paired with mature training frameworks, data pipelines, and operations teams, constitutes a competitive moat that latecomers cannot easily replicate. Stargate's $500 billion is not merely buying GPUs — it is building a digital factory that would take years to replicate.

**Sovereign competition is joining.** In 2025, Saudi Arabia, the UAE, Japan, France, and other governments announced national AI infrastructure investment plans.[^10] AI compute is becoming a new "strategic resource," alongside oil and semiconductor manufacturing capability. Once state power enters the equation, infrastructure investment logic is no longer determined solely by commercial returns — it becomes a national security question. This will drive up investment scale and extend tolerance for longer investment horizons.

## VI. The endgame of the arms race

The infrastructure arms race's endgame is one of three scenarios:

**Scenario one: Returns materialize.** AI product revenue explodes over the next three to five years, absorbing current infrastructure investment. Stargate's $500 billion becomes the most successful strategic investment in human history. This is not impossible — but requires AI to simultaneously create massive new value across enterprise applications, consumer products, and scientific discovery.

**Scenario two: Partial surplus, structural reorganization.** Some overbuilt data centers are idled or transferred at discounted prices, and certain participants (particularly mid-sized players relying purely on financing) exit the race. But the strongest players — Microsoft, Google, Meta — absorb surplus compute through diversified business lines and ultimately convert infrastructure into long-term competitive advantage. This most closely parallels the telecom bubble's outcome.

**Scenario three: Technological paradigm shift, current infrastructure depreciates.** If next-generation AI architectures drastically reduce dependence on GPU compute (e.g., more efficient small models, brain-inspired computing, optical computing), the GPU data centers built with hundreds of billions of dollars could face accelerated depreciation. This is the most extreme scenario — lowest probability, but highest impact.

Regardless of which scenario materializes, one thing is certain: this arms race is permanently altering the scale and nature of human computing infrastructure. Even if the bubble bursts, what remains will not be empty shells — just as the fiber networks left behind by the 2001 telecom bubble.

## Commentary

The AI infrastructure arms race is, at its core, a competition over "who has the right to build the future."

In 2017, training a Transformer model required 8 P100 GPUs — a single PhD student's experimental budget. In 2025, training a frontier model requires 100,000 H100s, a substation, and a sovereign-fund-level financing plan. The steepness of this compute curve (see *Treatise: The Evolution of Compute*) is not the natural rhythm of technological progress — it is an artificially accelerated, game-theory-driven arms race.

The irony of the arms race is that every participant is making a "rational choice" — you must match the bet or you are out — but the sum of everyone's rational choices may be collectively irrational. Investing $500 billion in an industry with only a few hundred billion in revenue requires, by any measure, an extremely optimistic assumption. And history repeatedly teaches us that "this time is different" are the five most expensive words in financial history.

But there is also another voice: after the internet bubble, the world was indeed permanently changed. The seemingly absurd fiber investments of 2000 became the broadband infrastructure that every person uses every day today. The AI infrastructure arms race may be the same — excessive in the short term, necessary in the long term. Stargate's $500 billion may not recoup costs by 2028, but the world of 2038 will most likely be built on the infrastructure it leaves behind.

What truly warrants vigilance is not the scale of investment itself — but "who is using whose money." When trillion-dollar investments are jointly supported by private valuations, sovereign funds, and government subsidies, the ultimate bearers of risk are often not the decision-makers. The historical lesson of arms races is: the loser is not the weakest, but the last to realize the game has ended.

---

*Compiled by the Endfield Industrial Chronicle team: Fu Xuan (Lead Writer).*

---

[^1]: The White House, "Fact Sheet: President Donald J. Trump Announces The Stargate Project", 2025-01-21. https://www.whitehouse.gov/fact-sheets/2025/01/fact-sheet-president-donald-j-trump-announces-the-stargate-project/
[^2]: Microsoft, "Microsoft announces up to $80 billion investment in AI data centers in FY 2025", 2025-01-03. Ref: Bloomberg / CNBC reporting.
[^3]: Meta, "Building Meta's GenAI Infrastructure", 2024-03-12; Meta Q4 2024 Earnings Call supplemental disclosure. https://engineering.fb.com/2024/03/12/data-center-engineering/building-metas-genai-infrastructure/
[^4]: Google Cloud, "Cloud TPU v6e is available in preview", 2024-12. https://cloud.google.com/blog/products/ai-machine-learning/introducing-trillium-6th-gen-tpu
[^5]: Alphabet, "Alphabet Q4 2024 Earnings Call", 2025-02-04. CEO Sundar Pichai mentioned 2025 capital expenditure plan of ~$75B.
[^6]: Elon Musk on X, 2024-09-02; subsequent expansion reporting from Reuters / The Information.
[^7]: Snell et al., "Scaling LLM Test-Time Compute Optimally can be More Effective than Scaling Model Parameters", arXiv:2408.03314, 2024-08.
[^8]: The Information, "Microsoft and OpenAI Plot $100 Billion Stargate AI Supercomputer", 2024-03-29; *Chronicle · Annals · Microsoft* § analysis of OpenAI's independence aspirations.
[^9]: Financial Times, "AI data centres turn to nuclear power to feed energy-hungry models", 2024-09. https://www.ft.com/content/ai-data-centres-nuclear-power
[^10]: Reuters, "Saudi Arabia plans $40 billion AI investment fund", 2024-03; Financial Times, "France announces €100 billion AI investment at Paris summit", 2025-02.
