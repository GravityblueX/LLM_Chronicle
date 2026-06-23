# The AI Infrastructure Arms Race

> In January 2024, OpenAI, SoftBank, and Oracle jointly announced the Stargate project, committing $500 billion over four years to AI infrastructure. That same year, Microsoft announced $80 billion in data center investment, Meta accumulated over 600,000 H100 GPUs, and Google rolled out TPU v6 clusters at full scale. As the most expensive technology infrastructure race in human history unfolds, a fundamental question surfaces: is this wager an industrial-revolution-level strategic move, or yet another episode of overinvestment destined for correction?

## I. Investment scale: Unprecedented

On January 21, 2025, President Trump announced the **Stargate** project at the White House: OpenAI, SoftBank, and Oracle jointly formed a venture planning up to **$500 billion** in AI infrastructure investment over four years, with an initial $100 billion commitment.[^1] This figure exceeds any single technology project in human history — including the Manhattan Project (~$30 billion, inflation-adjusted), the Apollo Moon program (~$260 billion, inflation-adjusted), and the International Space Station (~$150 billion).

Stargate is not an isolated case. While its scale is the largest, the industry's infrastructure investment showed a collective acceleration across 2024–2025:

- **Microsoft**: Plans approximately **$80 billion** in AI data center spending for fiscal year 2025, with over half in the United States.[^2] This represents approximately 80% growth over fiscal year 2024.
- **Meta**: By end of 2024, had cumulatively deployed approximately **600,000 NVIDIA H100 GPUs** across multiple data center clusters.[^3] Mark Zuckerberg publicly stated that by end of 2025, Meta would possess sufficient compute to train the next generation of frontier models.
- **Google**: Full deployment of **TPU v6 (Trillium)** clusters, with Cloud TPU v6e entering public preview.[^4] Google continued doubling down on its proprietary chip roadmap, raising 2025 capital expenditure plans to approximately **$75 billion**.[^5]
- **xAI**: The Memphis Colossus cluster expanded from 100,000 to 200,000 H100s, with Elon Musk announcing plans for further upgrades to B200 clusters.[^6]

Adding these numbers together — Stargate's $500 billion, Microsoft's $80 billion (single year), Google's $75 billion (single year), Meta's hundreds of thousands of GPU purchases — global AI infrastructure investment in 2024–2025 easily exceeds the trillion-dollar scale.

These numbers have become so abstract as to defy intuition. To convey their weight: Microsoft's $80 billion data center spend in fiscal year 2025 exceeds the annual defense budget of most nations. Stargate's $500 billion commitment equals Vietnam's entire 2024 GDP.

## II. Investment logic: "Build the power plant first, optimize efficiency later"

Why are tech giants willing to invest such sums? The answer can be summarized in one sentence: **during a capability explosion, infrastructure is the first priority, efficiency is the second.**

This logic is analogous to 19th-century railroad construction, early 20th-century electrical grid deployment, or late 1990s fiber-optic network investment — in every new technology cycle's early phase, the market first frantically lays infrastructure, then discusses how to use it efficiently. Railroads built far more mileage than actual demand before transportation optimization followed; the excess fiber laid during the internet bubble ultimately became the physical foundation for the Web 2.0 boom.

In the AI context, the "build the power plant first" logic is more specific:

**First, scaling laws have not yet failed.** Although the Chinchilla scaling law optimized the parameter-to-data ratio (see *Chronicle: Compute Transitions*, §3), the fundamental relationship discovered by Kaplan et al. — that more compute investment yields better model capabilities — still holds in 2025. The rise of test-time compute further expands compute demand: models not only need compute during training but are beginning to consume substantial computation during inference.[^7]

**Second, first-mover advantage determines ecological niche.** In a rapidly iterating industry, the party that first possesses compute infrastructure can train models faster, iterate products faster, and lock in users faster. This was precisely OpenAI's strategy from GPT-3 to GPT-4 to GPT-4o — each capability leap was accompanied by user base expansion, and once a user base forms, migration costs are extremely high.

**Third, competitors may fall behind due to insufficient compute.** The game theory of the arms race is simple: if I don't build and others do, I lose. This is not the "optimal strategy" but the "minimum strategy to avoid elimination." When Stargate announced $500 billion, Anthropic, Google, and Meta had to respond — not because $500 billion is necessarily justified, but because not responding means conceding on the compute dimension (see *Table: Major Financing and Valuation Table* for the 2024–2025 financing surge across companies).

DeepSeek's emergence provides an interesting counterexample to this logic. DeepSeek-V3 achieved GPT-4o-level performance at a training cost of under $6 million (see *Commentary: The Price War*, §5), proving that architectural innovation and engineering optimization can dramatically reduce dependence on raw compute. But whether DeepSeek's counterexample can be generalized depends on one premise: whether the marginal returns of architectural innovation are diminishing. If the next capability leap still requires an order of magnitude more compute — then Stargate's logic still holds.

## III. Who is building what: Four routes

The infrastructure arms race is not monolithic. The four major participants are pursuing four different routes:

**OpenAI + SoftBank + Oracle (Stargate): From zero to self-built.** Stargate's uniqueness lies in OpenAI's attempt to break free from dependence on Microsoft Azure compute. Before 2024, OpenAI's training and inference relied almost entirely on Azure data centers; Stargate marks OpenAI's pursuit of independent compute infrastructure.[^8] SoftBank provides capital, Oracle provides data center operational expertise, and OpenAI provides model capability and brand. This is a transformation from "tenant to landlord" — at the cost of $500 billion and years of construction.

**Microsoft: Betting on both sides.** Microsoft continues expanding Azure AI infrastructure ($80 billion/year) while also diversifying risk — reportedly, Microsoft has begun testing models from Anthropic, Meta, and others to guard against over-reliance on OpenAI.[^8] Microsoft's strategy is "the platform matters more than the model": regardless of whose model ultimately wins, they all need to run on Azure.

**Google: The long bet on proprietary chips.** Google's differentiating route is TPU. From TPU v1 (2016) to TPU v6 Trillium (2024–2025), Google has followed a compute supply path distinct from NVIDIA.[^4] The advantage of proprietary chips is controllable costs and supply chain independence; the risk is long R&D cycles and a less mature software-hardware ecosystem than NVIDIA CUDA. Google's TPU investment spans nearly a decade — the longest-running proprietary route among all participants.

**Meta: The open-source + self-built cluster combination.** Meta's route is the most distinctive: using the Llama series of open-source models to reduce competitive pressure at the model layer while frantically purchasing GPUs at the infrastructure layer.[^3] Meta's 600,000 H100s serve not only AI research — they simultaneously support recommendation systems, content moderation, advertising delivery, and metaverse rendering. This makes Meta's infrastructure investment easier to digest: even if AI model training returns fall short of expectations, the GPUs won't sit idle.

## IV. Bubble risk: Echoes of history

Whenever investment reaches "unprecedented" levels, the word "bubble" appears. It is not conspiracy theory — it is a reasonable concern with ample historical precedent.

**The telecom bubble's lesson.** From 1996 to 2001, global telecommunications companies invested over $1 trillion laying undersea cables and terrestrial fiber networks. The investment logic was correct — the internet was indeed growing explosively — but the timing was wrong. Fiber deployment far outpaced demand growth, causing fiber prices to crash and dozens of telecom companies to go bankrupt. Yet the broadband boom of the mid-2000s was built precisely on this "excess" fiber. The bubble burst, but the infrastructure remained.

The AI infrastructure arms race may follow a similar temporal mismatch:

**Revenue-side uncertainty.** In 2025, the global AI industry's annualized revenue (including API calls, subscriptions, and enterprise solutions) is estimated at $50–80 billion. This means the industry invested over ten times its total annual revenue in infrastructure in a single year. This does not mean the investment is unreasonable — infrastructure investment naturally precedes revenue — but revenue growth must sustain exponential growth over the coming years to absorb this investment. If AI product revenue growth slows, large numbers of data centers risk underutilization.

**Compute supply may become excessive.** The current compute shortage narrative partly stems from NVIDIA GPU supply bottlenecks — H100 delivery lead times once stretched to months. But with B200/B300 mass production, AMD MI300X competition, and Intel Gaudi series entry, GPU supply is rapidly loosening in 2025–2026. If all announced construction plans are completed on schedule, global AI compute supply may experience a surplus by 2026–2027.

**Power constraints are a hard ceiling.** A single large AI data center's power demand can reach hundreds of megawatts, equivalent to a mid-sized city. Multiple Stargate data center sites involve nuclear-plant-level power supply solutions.[^9] Power infrastructure construction cycles (substations, transmission lines, power plants) far exceed data center construction cycles. This means that even with sufficient funding and GPUs, power constraints may become the hard limit on actual build-out scale.

**Valuation bubble overlaid with physical bubble.** In 2024–2025, AI company valuations inflated at astonishing rates (see *Table: Major Financing and Valuation Table*): OpenAI soared from $29 billion (early 2023) to $300 billion (March 2025), Anthropic from $4.6 billion to $61.5 billion, xAI from nothing to $50 billion. These valuations assume a revenue explosion that has not yet arrived. If AI product commercialization underperforms expectations, valuation correction and infrastructure surplus could occur simultaneously — a double blow.

## V. Another possibility: Not a bubble but a turning point

The above is the bubble narrative. But there is another possibility: this is not a bubble but a permanent turning point in human computing infrastructure.

**AI is not the internet — it has no "post-bubble winter."** The internet bubble's lesson is: the bubble burst, but the demand remained. The internet company corpses of 2001 littered the landscape, but by 2010 the internet was ten times larger than in 2000. If AI follows a similar path — there may be short-term overinvestment corrections, but in the long run, this infrastructure will be fully utilized.

**Infrastructure itself is a competitive moat.** Unlike internet-era fiber (which depreciated once laid), AI infrastructure's value is deeply bound to the software ecosystem. A completed 100,000-GPU cluster, paired with mature training frameworks, data pipelines, and operations teams, itself constitutes a competitive moat difficult for latecomers to replicate. Stargate's $500 billion is not just buying GPUs — it is building a digital factory that would take years to replicate.

**Sovereign competition is entering.** In 2025, Saudi Arabia, the UAE, Japan, France, and other governments announced national AI infrastructure investment plans.[^10] AI compute is becoming a new "strategic resource," on par with oil and chip manufacturing capability. Once state power enters, infrastructure investment logic is no longer determined solely by commercial returns — it becomes a national security question. This will inflate investment scales and extend tolerance for investment horizons.

## VI. The endgame of the arms race

The infrastructure arms race's endgame comes down to three scenarios:

**Scenario 1: Returns materialize.** AI product revenue grows explosively over the next three to five years, absorbing the current infrastructure investment. Stargate's $500 billion becomes the most successful strategic investment in human history. This is not impossible — but it requires AI to simultaneously create massive new value across enterprise applications, consumer products, and scientific discovery.

**Scenario 2: Partial surplus, structural reorganization.** Some overbuilt data centers are idled or sold at distressed prices, and certain participants (especially mid-sized players relying purely on financing) exit the race. But the strongest players — Microsoft, Google, Meta — absorb excess compute through diversified businesses, ultimately converting infrastructure into long-term competitive advantage. This most closely mirrors the telecom bubble's outcome.

**Scenario 3: Technological paradigm shift, current infrastructure depreciates.** If the next generation of AI architecture dramatically reduces dependence on GPU compute (e.g., more efficient small models, brain-inspired computing, optical computing), the GPU data centers built for hundreds of billions of dollars may face accelerated depreciation. This is the most extreme scenario — lowest probability, but highest impact.

Regardless of which scenario unfolds, one thing is certain: this arms race is permanently altering the scale and nature of human computing infrastructure. Even if the bubble bursts, what remains will not be empty buildings — just as the telecom bubble of 2001 left behind fiber networks.

## Commentary

The AI infrastructure arms race is fundamentally a competition over "who has the right to build the future."

In 2017, training a Transformer model required 8 P100s — a doctoral student's experimental budget. In 2025, training a frontier model requires 100,000 H100s, a substation, and a sovereign-fund-level financing plan. The steepness of this compute curve (see *Chronicle: Compute Transitions*) is not the natural pace of technological progress — it is an artificially accelerated, game-theory-driven arms race.

The irony of the arms race is: every participant is making a "rational choice" — you must call the hand or fold — but the sum of everyone's rational choices may be collective irrationality. Investing $500 billion in an industry with revenue of only tens of billions requires an extraordinarily optimistic assumption regardless. And history repeatedly tells us that "this time is different" are the five most expensive words in financial history.

But there is another voice: after the internet bubble, the world was indeed permanently changed. The fiber investments of 2000 that seemed absurd became the broadband infrastructure that every person uses every day today. The AI infrastructure arms race may be the same — excessive in the short term, necessary in the long term. Stargate's $500 billion may not recoup costs by 2028, but the world of 2038 will most likely be built upon the infrastructure it leaves behind.

What truly deserves vigilance is not the investment scale itself — but "who is spending whose money." When trillion-dollar investments are jointly supported by private valuations, sovereign funds, and government subsidies, the ultimate risk-bearer is often not the decision-maker. The historical lesson of arms races is: the loser is not the weakest, but the last to realize the game has already ended.

---

*This piece was compiled by the Endfield Industrial Historical Archives team: Fu Xuan (lead writer).*

---

[^1]: The White House, "Fact Sheet: President Donald J. Trump Announces The Stargate Project", 2025-01-21. https://www.whitehouse.gov/fact-sheets/2025/01/fact-sheet-president-donald-j-trump-announces-the-stargate-project/
[^2]: Microsoft, "Microsoft announces up to $80 billion investment in AI data centers in FY 2025", 2025-01-03. Reference: Bloomberg / CNBC reporting.
[^3]: Meta, "Building Meta's GenAI Infrastructure", 2024-03-12; Meta Q4 2024 Earnings Call supplementary disclosure. https://engineering.fb.com/2024/03/12/data-center-engineering/building-metas-genai-infrastructure/
[^4]: Google Cloud, "Cloud TPU v6e is available in preview", 2024-12. https://cloud.google.com/blog/products/ai-machine-learning/introducing-trillium-6th-gen-tpu
[^5]: Alphabet, "Alphabet Q4 2024 Earnings Call", 2025-02-04. CEO Sundar Pichai mentioned 2025 capital expenditure plan of approximately $75B.
[^6]: Elon Musk on X, 2024-09-02; subsequent expansion reporting from Reuters / The Information.
[^7]: Snell et al., "Scaling LLM Test-Time Compute Optimally can be More Effective than Scaling Model Parameters", arXiv:2408.03314, 2024-08.
[^8]: The Information, "Microsoft and OpenAI Plot $100 Billion Stargate AI Supercomputer", 2024-03-29; analysis of OpenAI's independence aspirations in the Microsoft chronicle.
[^9]: Financial Times, "AI data centres turn to nuclear power to feed energy-hungry models", 2024-09. https://www.ft.com/content/ai-data-centres-nuclear-power
[^10]: Reuters, "Saudi Arabia plans $40 billion AI investment fund", 2024-03; Financial Times, "France announces €100 billion AI investment at Paris summit", 2025-02.
