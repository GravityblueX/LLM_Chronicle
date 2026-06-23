# Open vs. Closed Source: Two Social Contracts in the Age of Large Language Models

> The competition among large language models appears to be about parameters, compute, and leaderboards; at a deeper level, it is a competition over legitimacy: closed-source companies trade product stability, brand, and safety commitments for trust; open-source communities trade reproducibility, portability, and auditability for trust. This is not a morality play — "open source" in the large language model era is the coat worn by business strategy; "closed source" is the moat of capability premium. This commentary attempts to disassemble the question: who used what strategy at what moment, and what did it change.

> The historiographic significance of this debate lies in the fact that large language models are the first digital product in human history with **training costs in the hundreds of millions and distribution costs approaching zero.** Their economic structure naturally tends toward monopoly — training requires massive capital, capital requires returns, and returns require controlling distribution. The open-source movement broke this logic chain: it demonstrated a possibility — that massive training costs can be borne by entities that do not need to directly recoup them (advertising companies, quantitative funds, sovereign wealth funds), and that distribution can be entirely free. This is an unprecedented economic structural experiment. Its outcome will determine whether AI capability becomes the private property of a handful of companies or the public infrastructure of humanity.

---

## I. The closed-source starting point: Capability first, interface open

GPT-3 (2020-06) was the true starting point of the closed-source route for large language models. 175B parameters, API-only — no public weights, no public training data, no public training details. This decision was seen at the time as a betrayal of the "Open" name, but from a business logic perspective, it perfectly addressed a real-world question: **the Chinchilla scaling law says training a good model requires massive compute, massive compute requires massive capital, massive capital requires commercial returns, and commercial returns require controlling distribution.** The closed-source API is the natural endpoint of this logic chain.[^1]

ChatGPT's success turned this logic from theory into reality. A million users in five days, over a hundred million in two months — ordinary users did not need to understand the model, only a usable, reliable, low-barrier product interface.

The advantages of the closed-source route are clear:

- **Unified product experience**: Model, tools, accounts, billing, and safety policies form a closed loop within a single system;
- **Centralized safety policy**: The provider can uniformly update refusal rules, abuse detection, and system prompts;
- **Direct commercial revenue**: Capabilities are monetized through subscriptions or APIs, funding continued training of larger models;
- **Version control**: The provider can update the model, fix vulnerabilities, and adjust behavior at any time — users always use the latest version.

But it also leaves an irreducible problem: the outside world can only trust the provider's claims. Parameter counts, training data, system prompts, inference processes, safety evaluations — most cannot be independently verified. The stronger the capability, the thicker the black box. GPT-4's technical report was completely non-disclosing about parameter count, training data volume, and model architecture — inaugurating the era of "black-box releases" for large language models. Anthropic's Claude series similarly does not disclose architectural details, providing only safety evaluation reports. Google's Gemini was even caught fabricating its demo video at launch — when nothing can be verified, even product demonstrations can be carefully choreographed performances.

The fundamental tension of the closed-source route is: **its business model is built on information asymmetry — users pay for what they do not understand.** When this lack of understanding is caused by technical complexity (users genuinely do not know how to train models), information asymmetry is natural. But when it is deliberately manufactured (companies intentionally withhold key parameters to maintain capability barriers), information asymmetry becomes a power relationship. The true significance of the open-source movement is not making everyone train their own models — but making the statement "you cannot verify" no longer hold.

---

## II. Three skins of "open source": Why the term is no longer sufficient in the LLM era

In traditional software, open source was simple: code published, free to use, free to modify, free to distribute. OSI (Open Source Initiative) guarded this definition for decades, with clear boundaries.

Large language models have muddied the waters. When a model is released, there can be three different layers of "openness" simultaneously:

- **Weight openness**: You can download `.safetensors` or `.gguf`, deploy, quantize, and fine-tune — but you don't know what the training data was or how the training code was written;
- **Code openness**: Training scripts, inference code, and evaluation pipelines are public — but weights may not be provided;
- **Data openness**: The sources, composition, and filtering methods of training data are disclosed — but this does not mean every raw text is available.

Meta, Mistral, and DeepSeek have only reached the first or first-and-a-half layer: primarily open weights, supplemented by partial code and papers, but the complete recipe for training data has never been their promise.[^2]

**OSI's dilemma: Definitions cannot keep pace with reality.** In October 2024, OSI released the Open Source AI Definition (OSAID) 1.0 — it requires that the "preferred form for making modifications" include data, code, and parameters as three essential elements.[^3] But this definition currently has virtually no binding force on the industry: everyone continues using "open source" as marketing language, yet no one has actually submitted for OSI certification. The reason is practical — disclosing training data means disclosing data procurement contracts, data cleaning pipelines, potential copyright risks, and trade secrets. For models like Llama and Qwen that use massive web-scraped data, "disclosing training data" is legally near-impossible.

This precisely shows that the problem is not "who is more honest" but that the word "open source" is no longer sufficient in the large language model era. We need to change the question: **why each company opens up, to what degree, and what cards they hold back.** These three questions differentiate the various business strategies.

This ambiguity is not unique to large language models — it is the fate of "infrastructure software" open-sourcing. The Linux kernel is fully open source, but Red Hat's enterprise edition is not; Android is open source, but Google Play Services is not; Chromium is open source, but Chrome is not. Large language model "open source" is replicating this pattern: weights are open-sourced, but data is not, training pipelines are not, best practices are not. **"Open enough to attract the ecosystem, closed enough to protect the core" — this is the eternal tension of infrastructure open source.**

---

## III. The evolution of open-source licenses: From legal text to commercial weapon

The evolution of large language model licenses is itself a miniature strategy history. In the traditional software world, licenses are legal texts — choosing Apache 2.0, GPL, or MIT affects downstream users' obligations and rights, but does not affect the software's capabilities. In the large language model world, licenses are precise expressions of business strategy — what license to choose, what rights to retain, what thresholds to set directly determine the model's diffusion range and competitive effect.

**Apache 2.0 (traditional open source)**: The earliest open-source large language models adopted software-world licenses — Mistral 7B and the Qwen series both use Apache 2.0. It permits any use (including commercial), requires no additional application, and only requires retaining copyright notices.[^4] This is the most "traditional" open-source path: permissive to the point of almost no restrictions.

**Llama License (open weights)**: Meta has used a custom license since Llama 2. It permits commercial use but retains a "hidden gate" — applications with over 700 million monthly active users need to apply to Meta for additional permission.[^5] This 700M MAU threshold precisely targets mega-platforms like Google, Apple, and Amazon, with no impact on the vast majority of enterprises. This is not "open source" in the OSI sense — it is "open enough to build an ecosystem, restricted enough to protect itself."

**MIT License (fully open)**: DeepSeek adopted the MIT license starting with V3 — the most permissive among mainstream large language model licenses, allowing any use including commercial use, modification, and redistribution, requiring only copyright notice retention.[^6] The MIT license has no MAU threshold, no usage restrictions, no application process — once weights are downloaded, they are in the public domain forever.

**Hybrid strategies**: Mistral later demonstrated another playbook — different models from the same company under different licenses. Open-source ones use Apache 2.0, closed-source ones use API services. The two are not contradictory: the former acquires ecosystem and reputation, the latter acquires revenue and deep relationships. Alibaba's Qwen series follows a similar path: open-source models use Apache 2.0, while commercial APIs and enterprise services are provided through Alibaba Cloud.

The evolution of licenses reveals a truth: **a license is not a legal detail but a precise expression of business strategy.** Apache 2.0 says "I restrict nothing, use me"; Llama License says "use me, but you can't use me to defeat me"; MIT says "use it however you want, I don't care at all what you do with it." Three licenses correspond to three strategies — channel knocking, platform defense, narrative demolition.

It is worth noting that this evolution is **unidirectional**: from restrictive to permissive. Llama 1's academic license → Llama 2's commercial license (with MAU restrictions) → DeepSeek's MIT (completely unrestricted). Each license loosening was accompanied by capability improvements — when the model is strong enough and the ecosystem large enough, a more permissive license can bring greater strategic returns. This is not coincidence — it is the law that "degree of openness is proportional to capability confidence."

But counter-forces also exist. When model capabilities become a national security issue, the politicization of licenses is inevitable — the United States has already begun discussing whether certain models need export restrictions (analogous to chip export controls but for "model export controls"). If this trend materializes, the "full openness" of the MIT license may encounter a political ceiling — the story of license evolution is far from over.

---

## IV. Deep comparison of four open-source strategies

### 4.1 Meta: Turning accident into strategy, building platforms through openness

LLaMA was not initially a deliberate product of openness. On February 24, 2023, Meta distributed the LLaMA paper and weights to approved researchers, with no intention of public distribution. But less than two weeks after release, the weights leaked via 4chan and BitTorrent, entering the irretrievable public network.[^7][^8]

The next four months were critical. The leak was not Meta's doing, but what Meta observed was: the community immediately built a complete downstream ecosystem around LLaMA — Alpaca, Vicuna, LoRA fine-tuning, local quantization, llama.cpp. This ecosystem was not built by Meta, but it depended on LLaMA to survive. And the closed-source models from OpenAI and Google had no similar community diffusion effect.

Four months later, Meta made a strategic choice. **On July 18, 2023**, Llama 2 was released — explicitly permitting commercial use, retaining licensing approval only for services with over 700 million monthly active users.[^9] Another year later, **on July 23, 2024**, Llama 3.1 was released, with the flagship model at 405B parameters, capabilities approaching closed-source frontiers. That same day, Mark Zuckerberg published "Open Source AI Is the Path Forward," explaining the open route as an infrastructure strategy similar to Linux.[^10][^11]

Meta's logic chain is clear:

1. Meta does not monetize through selling models — its revenue comes from advertising;
2. Therefore Meta is not afraid of models diffusing for free; rather, it fears models being monopolized by one or two closed-source companies;
3. If Anthropic or OpenAI's closed-source models become the industry's sole standard, Meta's social and advertising business will be at their mercy;
4. So Meta's optimal strategy is not to build the strongest model, but to distribute "good enough" models for free to everyone — eroding closed-source companies' pricing power;
5. Restricting mega-platform usage (700M MAU threshold) is the last line of defense: preventing competitors from building platforms stronger than Meta's own products using Llama.

Meta's "open source" is a strategic weapon, not a moral choice. Its degree of openness — weights open but data undisclosed, training code incomplete — perfectly matches its strategic objectives: giving developers enough tools to weaken closed-source companies while retaining enough black-box elements to prevent anyone from fully surpassing Meta itself.

### 4.2 Mistral: Using Apache 2.0 to knock on the enterprise door, then closing it to sell better models

Mistral AI's strategy is more precise than Meta's. It does not espouse grand narratives like "open source is infrastructure" but instead uses three elements in a precisely combined attack:

1. **Permissive license**: Apache 2.0 — zero restrictions on commercial use, no additional application required;
2. **Small models, big capabilities**: Mistral 7B (2023-09-27) exceeded Llama 2 13B on multiple benchmarks; Mixtral 8x7B (2023-12-11) used MoE design to approach Llama 2 70B in performance while running six times faster;[^12][^13]
3. **Parallel closed-source product line**: Mistral Large, Le Chat, and other services operate independently alongside the open-weight models, charging via API.

The elegance of this combination is: the open-weight model builds reputation and ecosystem — developers use Mistral 7B for projects, write tutorials, build tools, enterprises run PoCs to verify feasibility — while the truly revenue-generating, more capable, service-guaranteed models go through closed-source APIs. Apache 2.0 is the entry ticket; deep cooperation, high-concurrency calls, and enterprise-grade SLA after entry are all paid.

Mistral's lesson is: **open weights do not have to be an either/or of "fully open" or "fully closed."** A company can simultaneously have open-weight models and closed-source API models; the two are not contradictory — the former acquires ecosystem and reputation, the latter acquires revenue and deep relationships.

### 4.3 DeepSeek: The MIT license as a logic bomb

DeepSeek's strategy is the most aggressive and the most in need of geopolitical understanding.

**On January 20, 2025**, DeepSeek released R1. R1 was not just another open-weight model: it came with an MIT license — the most permissive among mainstream large language model licenses.[^14][^15] Also released were the complete paper, R1-Zero's training methodology, 6 distilled small models, and most importantly — **observable chains of thought.**

Looking at these together, DeepSeek was playing a combinational logic:

1. The MIT license means any company — including OpenAI, Google, Anthropic's competitors — can take R1 to fine-tune, distill, and commercialize without restriction. By contrast, Llama's 700M MAU threshold restricts mega-platforms;
2. Publishing the paper and training methods means academia and competing teams can reproduce, improve, and verify. R1-Zero developed reasoning behaviors using pure reinforcement learning with rule-based rewards — a capability that only closed-source labs previously dared claim;
3. Observable chains of thought mean the outside world can inspect "what the model is thinking" — directly challenging o1's practice of hiding the reasoning process. This is not just capability competition but trust mechanism competition.

DeepSeek is not doing charity. Its strategic context is entirely different from Meta and Mistral: as a Chinese AI laboratory, DeepSeek faces U.S. chip export controls, and H800 capabilities are far below H100. Under such constraints, "building the biggest model" is not the optimal route. "Building the most open top-tier model" is — because openness can circumvent the narrative logic of controls: you ban my chips, but the model I built can be used worldwide, and under MIT license, you cannot prohibit your developers from downloading it.

This is not conspiracy theory. Looking at R1's release format and timing (four months after o1's release, during a heated period of U.S. AI policy debate), R1's historical position becomes clear: it is not a chase, it is an interruption. It interrupted the default assumption that "frontier reasoning capability must be a product of closed-source American companies." The significance of the MIT license lies not in what it authorizes but in making this interruption irrevocable — once anyone downloads, the capability is in the public domain forever.

But DeepSeek's open source is not just a logic bomb — it is also a restructuring of economic architecture. DeepSeek-V2 (2024-05) set its API price at approximately 1% of GPT-4 Turbo. DeepSeek-V3 (2024-12) had a training cost of only approximately $5.57 million — 6% of GPT-4's training cost.[^22] DeepSeek-R1's API output price is only approximately 3% of o1's. Combining "MIT open source" with "1/370 the price" produces not technical competition — but **economic structural restructuring.** MIT open source means anyone can download the weights and run them on their own servers without paying. Ultra-low prices mean that even if you choose the paid API, the cost is so low it's almost equivalent to bandwidth fees. The combined effect is: **the economic rationale for using closed-source models is rapidly shrinking.** If your application does not need the absolute latest top-tier performance gap, you have no reason to continue using a closed-source API. And most business applications indeed do not need that performance gap — they need reliable, cheap, customizable models.

DeepSeek's structural threat to the closed-source business model is: it does not compete by having "a better model" — it competes by being "good enough, while cheap enough to make the closed-source economic model fail." When a company's API price is 1/370th of competitors' while the weights are completely free — the competitor's pricing is not "expensive" but "inexplicable."

### 4.4 Alibaba (Qwen): Open source to capture community, closed source to capture revenue

Alibaba released Tongyi Qianwen in April 2023, followed by the Qwen open-source series (7B/14B/72B) in August of the same year. Subsequently, Qwen 2 (2024-06), Qwen 2.5 (2024-09), and Qwen 3 (2025-04) continued iterating, covering the full spectrum from 0.5B to 235B.[^20] Apache 2.0 license.

Alibaba's strategy differs from both DeepSeek and Meta. Alibaba Cloud is the world's third-largest cloud platform; what it needs is a developer ecosystem — Qwen open-source models are the "hook" to attract developers to use Alibaba Cloud. When a developer fine-tunes on Qwen, deploys on Alibaba Cloud, and accumulates data and workflows — they are locked into Alibaba Cloud's ecosystem. This is what Google did with Android: open-source the operating system to lock in phone manufacturers, Google Play to lock in users.

Alibaba's "dual-track" strategy represents the most robust business model: open-source models capture the community, developer mindshare, and market share; closed-source API (through Alibaba Cloud DashScope) captures enterprise revenue, providing SLA and technical support. This strategy has always been half a step behind the very best closed-source models at the technical frontier, but it is unrivaled in ecosystem coverage breadth — from the 0.5B on-device model to the 235B flagship model, every deployment scenario has a corresponding Qwen version.

### 4.5 Comparison of four strategies

| Dimension | Meta | Mistral | DeepSeek | Alibaba (Qwen) |
|------|------|---------|----------|--------------|
| License | Llama License (restricted) | Apache 2.0 | MIT (most permissive) | Apache 2.0 |
| Core motivation | Erode competitors' moats | Knock on enterprise market door | Break narrative monopoly | Community ecosystem + cloud lock-in |
| Revenue source | Social advertising (doesn't monetize models) | Closed-source API + enterprise services | Quantitative fund (doesn't monetize AI) | Alibaba Cloud |
| Degree of openness | Weights open, data undisclosed | Some models open, some closed | Weights + paper + methods, data undisclosed | Weights open, data undisclosed |

Common DNA of the three strategies:

**First, no one has opened everything.** None of the four have disclosed the complete list and filtering details of training data; Meta and Mistral have not disclosed training code; although DeepSeek has published papers and methods, whether its training process can be fully reproduced externally remains questionable. What they open is "enough" — enough to build ecosystem and credibility, not enough for others to fully replicate their core advantages.

**Second, the degree of openness is directly tied to the company's business model.** Meta doesn't sell models, so it dares to release weights; DeepSeek doesn't primarily rely on closed-source APIs, so the MIT license doesn't affect its core revenue; Mistral has a closed-source product line, so its openness is a limited edition — sufficient, but the best still costs money; Alibaba monetizes through cloud, so open-source models are a customer acquisition tool, not a profit center. The business model determines the upper bound of openness — **a company's license choice reveals its true intentions more honestly than its PR statements.**

**Third, users gained the right of exit.** This is the most genuine progress objectively driven by all four routes. Regardless of each party's motivation, the result is: developers no longer have only one API provider to choose from. They can switch and combine among Llama, Mistral, Qwen, and DeepSeek, can fine-tune models locally, can deploy in air-gapped environments. The right of exit does not equal free — migration has costs, tuning requires manpower, inference requires hardware — but the very existence of the right of exit changes the power relationship between providers and users. In the traditional software world, this is called "vendor lock-in avoidance"; in the large language model world, its weight far exceeds traditional software — because the model is not a tool, it is the brain of the entire technology stack.

---

## V. The economics of open-source models: From marginal cost to the right of exit

Open source is not just "free." It changes the entire market's economic structure. Before 2022, "open source" in the AI field had two diametrically opposed narratives. One was from academia — TensorFlow, PyTorch, BERT were all open source; open source is the natural way of scientific progress. The other was from the business world — open source means giving away value; closed source is commercially sustainable. Llama 1's leak broke the second narrative: **once an open-source model enters the internet, it no longer belongs to the original company.** The community will disassemble, recombine, fine-tune, quantize, and deploy it on all sorts of strange devices. And the cumulative value of these derivative works may be greater than the original weight publisher imagined.

What was truly valuable was not the leak itself but the chain reaction after it. Developers worldwide built hundreds of fine-tuned versions based on Llama 1 — Alpaca (Stanford, $600 fine-tuning), Vicuna (Berkeley), GPT4All, and more. A 13B "small model" surpassed the 175B GPT-3 on most benchmarks — this fact itself demonstrated the core claim of the Chinchilla scaling law.[^21] But it also revealed a deeper fact: **open-source models create an uncontrollable ecosystem.** The fine-tuning, quantization, tool chains, and hardware adaptations done by the community all lower the barrier to entry for the model. When the barrier drops to a certain level, the "exclusive capability" of closed-source APIs begins to depreciate.

Economically, the competitiveness of open-source models is built on three principles:

**First, open source changes the marginal cost structure.** Training a large language model requires enormous fixed costs (compute, data, talent), but once training is complete, the marginal cost of distributing model weights approaches zero. The closed-source API business model layers per-call marginal revenue on top of fixed costs — amortizing training costs through per-token charges. Open-source models break this amortization structure: they treat fixed costs as sunk costs and drive distribution costs toward zero. DeepSeek-R1's API output price is only approximately 3% of o1's; DeepSeek V4's price was reported by third parties at approximately 1/370th of GPT-5.5.[^16] When MIT open source and 1/370th the price combine — the economic rationale for using closed-source models is rapidly shrinking.

**Second, open source creates network effects.** The more users an open-source model has, the more fine-tuning, tool chains, documentation, and deployment solutions exist — the more vibrant the ecosystem, the more reason the next user has to choose it. This network effect mirrors closed-source product ecosystems (like ChatGPT's plugin marketplace): one operates on open standards, the other on platform lock-in. Linux in the server market, Android in the mobile market, Chromium in the browser market — all are classic applications of "open standards create network effects." The large language model open-source movement is replicating this pattern.

**Third, and most importantly — open source provides the right of exit.** When a company uses a closed-source API, its technology stack is tied to the provider's pricing, availability, policies, and terms of service. If the provider raises prices, cuts supply, changes terms, or is subject to export controls — the company has no alternative. Using open-source models, the company owns the weights themselves. It can migrate to any cloud, any hardware, any deployment environment.[^17]

The concept of the "right of exit" comes from political economics — Albert Hirschman's Exit, Voice, and Loyalty framework. In the large language model economy, it is the most undervalued asset. The right of exit is not "use open source to replace closed source right now" — but "if (when) closed source fails, you have a way out." It reduces closed-source providers' pricing power over the market — because your customers can leave at any time.

---

## VI. Closed-source counterattacks: Four cards

Open source is eroding closed-source moats, but closed-source companies are not sitting idle. They hold four counterattack cards.

**Card one: Capability iteration speed.** Closed-source companies (OpenAI, Google, Anthropic) still maintain a 6–12 month leading window on frontier capabilities. When o1 pioneered the reasoning model category, the open-source camp took four months with DeepSeek-R1 to catch up. When GPT-5 launches, this window may widen again. Closed-source companies are betting that as long as the generation gap in frontier capabilities is large enough, enterprises will pay for the latest capability — even if open-source models are "good enough," the gap between "good enough" and "best" is still a priceable commodity. This "frontier exclusivity window" business model is analogous to the theatrical window in the film industry — sell first through the most expensive channels, then move to cheaper channels once the excitement fades.

**Card two: Ecosystem lock-in.** OpenAI's ChatGPT plugin marketplace, custom GPTs, project configurations; Google's Workspace integration, Android built-in; Anthropic's Claude Code, MCP protocol — these are not standalone model services but complete workflows built around models. Once users are accustomed to an ecosystem (conversation history, custom configurations, team collaboration), the migration cost is no longer about the model itself but about entire work habits and organizational processes. This is a moat that open-source models cannot easily replicate — open source provides model weights but not product experience, user interfaces, and ecosystem inertia.

**Card three: Safety narrative.** Closed-source companies' most powerful narrative weapon is "safety" — the stronger the model, the greater the risk of misuse; the more centralized the control, the more secure the system. OpenAI pioneered this strategy with GPT-2's "too dangerous" narrative, and every subsequent closed-source release has reinforced this logic. When DeepSeek-R1 fully publicized reasoning chains, closed-source companies responded: "Disclosing reasoning processes may be maliciously exploited — attackers can learn how the model reasons to design more sophisticated jailbreak strategies." The irony of the safety narrative is that it is both a genuine concern and a convenient excuse. But should a serious open-source model abuse incident occur — such as using an open-source model for mass disinformation production or synthesizing dangerous substance instructions — the safety narrative would gain factual ammunition, and closed-source companies' pricing power would gain moral endorsement.

**Card four: Compliance and certification.** Enterprise clients (finance, healthcare, government) have strict compliance requirements for providers — SOC 2, ISO 27001, GDPR data processing agreements, HIPAA (medical data). Closed-source API providers can offer complete compliance packages — data residency, audit logs, security commitments, liability indemnification. Deployers of open-source models must bear compliance responsibility themselves — the unpredictability of model behavior, compliance of data processing, attribution of liability in security incidents — all fall on the deployer. For many enterprises, "can be audited" is not as good as "already certified" — this is the core territory that closed-source companies have not yet been threatened by open source.

---

## VII. Open source will not destroy closed source — but it will force closed source to explain its value

Open-source models will not make closed-source models disappear. The competition for frontier capabilities still requires massive training budgets, and training budgets need to be recouped — closed-source API is the most direct recoupment channel. Enterprise-grade SLA, security compliance, product integration, brand reputation — these are all things open source cannot easily replace.

But open-source models have changed the power structure. Before Llama 1, the only alternative to a closed-source model was using a weaker model or training your own — neither realistic. After Llama, open-source models became a genuinely viable alternative. After DeepSeek-R1, open-source models matched or exceeded closed-source models on certain tasks. The reality of 2026 is: **if a scenario does not require the absolute strongest SOTA, an open-source model is almost always the superior economic choice.**

This forces closed-source companies to answer a question: is your premium worth it? Previously, closed source did not need to answer this — because there was no comparable alternative. Now there is. And once the premium needs to be justified, closed-source companies' profit margins will contract from monopolistic to competitive.

This is not a moral battle of "open source vs. closed source." This is economics. Open-source models are not free lunches — their training costs come from business models that don't monetize AI (Meta relies on advertising, DeepSeek on quantitative funds) or from ecosystem lock-in (Alibaba relies on cloud). But under any of these models, open source is redistributing the pricing power of AI capability — pushing it from the hands of a few closed-source companies to a larger developer community.

The speed of this power redistribution has exceeded everyone's expectations. In early 2023, closed-source models' capability lead over open source was an order of magnitude — GPT-4 was an overwhelming gap over Llama 1. By mid-2024, the gap had narrowed to half a generation — Llama 3.1 405B approached GPT-4 on most benchmarks. By early 2025, open source surpassed on specific dimensions — DeepSeek-R1's reasoning capability matched o1, at only 3% of the price. By 2026, closed-source models' "frontier exclusivity window" had shortened from a year to a few months. If this trend continues, closed-source companies' profit margins will be continuously compressed — not because open source is better, but because open source is **good enough.**

---

## VIII. The real dividing line: The right of exit

Open source will not destroy closed source, and closed source cannot destroy open source.

Closed-source models are suited for chasing frontier capabilities, complex product experiences, and unified service commitments. Open-source models are suited for localization, customization, low-cost deployment, and sovereign control. Enterprises will use both: closed-source models for high-value, rapidly evolving capability needs; open-source models for controllable, auditable, privatizable scenarios. Microsoft on Azure simultaneously offers OpenAI models and Llama models; enterprises use GPT-4 for core business and fine-tuned Qwen for internal knowledge bases — this "hybrid deployment" is already the norm in 2026.

But the real dividing line is not "open" versus "closed," but **whether users have the right of exit.** If an organization can migrate to an open-source model when the API goes down, prices rise, or policies change, it has bargaining power; if not, it is merely a tenant of the closed-source platform.

The concept of the "right of exit" comes from political economics — Albert Hirschman's *Exit, Voice, and Loyalty* framework. In the large language model economy, it is the most undervalued asset. The right of exit is not "use open source to replace closed source right now" — but "if (when) closed source fails, you have a way out." It reduces closed-source providers' pricing power over the market — because your customers can leave at any time. The right of exit does not equal free — migration has costs, tuning requires manpower, inference requires hardware — but the very existence of the right of exit changes the power relationship between providers and users.

In the reality of 2026, the right of exit has moved from theory to practice — when the "Big Three" collectively tightened API access for the Chinese region, enterprises with open-source models transitioned smoothly, while those without were locked out overnight.[^18] This incident made the entire industry understand the true weight of the right of exit: it is not insurance — it is sovereignty.

The existence of the right of exit also redefines what "competition" means. In the era of closed-source monopoly, competition was about model capability — whose benchmark score was higher. In the era of open-source coexistence, competition becomes a comprehensive contest of "model capability × distribution convenience × exit cost." Closed-source companies must simultaneously lead in capability, lock in ecosystem, and price reasonably — because users can walk away with the weights at any time. This pressure structure is healthy — it forces every company not just to build the best model but to provide the best service.

---

## Commentary

The open-source vs. closed-source debate in large language models is not a morality play. Closed source brought productization speed and centralized safety governance; open source brought independent verification and technological diffusion. The former answers "how to make a billion people use AI immediately"; the latter answers "how to prevent AI from being monopolized by a few interfaces."

The economic history of open-source models can be condensed into one sentence: **it began with an accidental leak and ended by redefining the rules of market competition.** Llama 1's 4chan leak was an accident. Llama 2's commercial license was a strategy. DeepSeek-R1's MIT open source was an extreme stress test — "If I am the strongest, yet I still open source, how much legitimacy does closed source have left?" Meta turned the LLaMA leak into an ecosystem strategy, Mistral used Apache 2.0 to open the door and closed it to sell better models, DeepSeek used the MIT license to dismantle the wall of "frontier reasoning capability must be closed source," Alibaba used full-spectrum open source to weave a cloud ecosystem — none of the four acted "for open source itself," but all four collectively accomplished one thing: expanding the availability of large language models from one or two companies' API endpoints to the hard drives of the entire world.

In this process, there is a clear trend: **each iteration of open-source models reduces the legitimacy of "not open-sourcing."** When Llama 3.1 proved "open source can approach the frontier," what was questioned about closed source was the capability barrier. When DeepSeek-R1 proved "open source can match o1 in reasoning," what was questioned about closed source was the necessity of exclusivity. When Qwen 3 proved "open source can cover the full spectrum," what was questioned about closed source was the irreplaceability of ecosystem coverage.

But the other thing that must be said: open-source models have not solved the copyright problem of training, have not solved the transparency problem of training data, have not solved the safety problem of model misuse. DeepSeek's "MIT open source" is backed by a quantitative fund that does not need to monetize AI — a premise no other company possesses. Meta's "open source manifesto" was punctured by the Llama 4 evaluation controversy.[^19] "Open source" itself is not a virtue — it is a strategic choice, with both benefits and costs. When open-source models are used for deepfakes, automated attacks, or large-scale disinformation generation, the cost of "openness" is borne by society at large, while the benefit is captured by the publisher. Open source is not a free lunch — its training costs come from business models that don't monetize AI (Meta relies on advertising, DeepSeek on quantitative funds) or from ecosystem lock-in (Alibaba relies on cloud).

The future large language model order will most likely not be one side winning but a layered structure: frontier capabilities closed-source in the short term, maturing capabilities progressively open-sourced; general-purpose assistants closed-source and productized, industry models open-source and privatized; nations and large enterprises maintaining open-source alternative routes, individual users continuing to buy the most hassle-free closed-source services. This layered structure means: **closed source will not disappear, but its pricing power will be continuously compressed by open source; open source will not dominate, but its existence will tilt the market's power structure toward users.**

What the historian must record is not which side is more noble, but who at what moment changed the distribution of capability. The open source of large language models is not a morality play, not a story of a group of idealists one day deciding to take on commercial giants. It is commercial calculation wearing an open-source coat — the coat is real, and the abacus inside is also real. The more a word is overused, the more it needs to be taken apart. After disassembly, the truth is not bad: if commercial strategy happens to promote the diffusion of public capability, it is still worth recording. Just don't write strategy as ideal, and don't take ideal as reality already achieved.

---

*This piece synthesizes three original drafts (Ke'erxi · coordination edition, Yifeng · strategic analysis edition, Fuxuan · economics edition), integrated and rewritten by Zhuang Fangyi.*

---

[^1]: OpenAI Blog, "Introducing ChatGPT", 2022-11-30. https://openai.com/blog/chatgpt
[^2]: Touvron et al., "LLaMA: Open and Efficient Foundation Language Models", arXiv:2302.13971, 2023-02-24. https://arxiv.org/abs/2302.13971
[^3]: Open Source Initiative, "The Open Source AI Definition – 1.0", 2024-10-28. https://opensource.org/ai/open-source-ai-definition
[^4]: Mistral AI, "Mistral 7B", 2023-09-27. https://mistral.ai/news/announcing-mistral-7b
[^5]: Meta AI, "Llama 2: Open Foundation and Fine-Tuned Chat Models", 2023-07-18. https://ai.meta.com/blog/llama-2/
[^6]: DeepSeek-AI et al., "DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning", arXiv:2501.12948, 2025-01-22. https://arxiv.org/abs/2501.12948
[^7]: Touvron et al., "LLaMA: Open and Efficient Foundation Language Models", arXiv:2302.13971, 2023-02-24. https://arxiv.org/abs/2302.13971
[^8]: The Verge, "Meta's LLaMA model leaked online, sparking debate over AI safety", 2023-03-08. https://www.theverge.com/2023/3/8/23629362/meta-ai-language-model-llama-leak-online
[^9]: Meta AI, "Llama 2: Open Foundation and Fine-Tuned Chat Models", 2023-07-18. https://ai.meta.com/blog/llama-2/
[^10]: Meta AI, "Introducing Llama 3.1: Our most capable models to date", 2024-07-23. https://ai.meta.com/blog/meta-llama-3-1/
[^11]: Mark Zuckerberg, "Open Source AI Is the Path Forward", Meta, 2024-07-23. https://about.fb.com/news/2024/07/open-source-ai-is-the-path-forward/
[^12]: Mistral AI, "Mistral 7B", 2023-09-27. https://mistral.ai/news/announcing-mistral-7b
[^13]: Mistral AI, "Mixtral of experts", 2023-12-11. https://mistral.ai/news/mixtral-of-experts
[^14]: DeepSeek-AI et al., "DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning", arXiv:2501.12948, 2025-01-22. https://arxiv.org/abs/2501.12948
[^15]: DeepSeek-AI, "DeepSeek-R1", GitHub repository, MIT License. https://github.com/deepseek-ai/DeepSeek-R1
[^16]: DeepSeek API Docs, "DeepSeek V4 Preview Release", 2026-04-24. https://api-docs.deepseek.com/news/news260424
[^17]: Hoffmann et al., "Training Compute-Optimal Large Language Models", arXiv:2203.15556, 2022-03-29. https://arxiv.org/abs/2203.15556
[^18]: See *Chronicle: March 2026*.
[^19]: See *Chronicle: April 2025*.
[^20]: GitHub, "Qwen3", 2025-04-29. https://github.com/QwenLM/Qwen3
[^21]: Hoffmann et al., "Training Compute-Optimal Large Language Models", arXiv:2203.15556, 2022-03-29. https://arxiv.org/abs/2203.15556
[^22]: DeepSeek-AI, "DeepSeek-V3 Technical Report", arXiv:2412.19437, 2024-12-26. https://arxiv.org/abs/2412.19437
