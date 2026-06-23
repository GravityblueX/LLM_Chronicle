# Data Annotation and AI Labor: The Other Side of Intelligence

> Every time you chat with ChatGPT and it gives a "safe, helpful, and harmless" answer, remember: this "safety" did not fall from the sky. It was annotated, one item at a time, by Kenyan workers earning less than $2 per hour who read vast quantities of violent, pornographic, and hateful content. ChatGPT's "politeness" is built upon these people's psychological trauma. This is not a technical problem — it is a labor justice problem. And the entire AI industry has devoted enormous effort to ensuring you never think about it.

---

## I. The human cost of RLHF: Who pays for safety

RLHF (Reinforcement Learning from Human Feedback) is the core technology for making large language models "obedient." InstructGPT (2022-01) pioneered this paradigm: collect human annotators' preference rankings of model outputs, train a reward model, then use reinforcement learning to adjust the language model (see *AI Safety and Alignment*, §1). This process is technically elegant — but it hides an ugly fact: **RLHF's "human feedback" comes from the most vulnerable labor force in the world.** (See *The RLHF Chronicle*.)

In January 2023, Billy Perrigo of *TIME* published an investigative report revealing OpenAI's annotation outsourcing in Kenya. OpenAI hired Kenyan annotators through Sama (a San Francisco-based data annotation company with offices in Kenya) at hourly wages between $1.32 and $2. The annotators' job was to read harmful text that ChatGPT might generate — including descriptions of child sexual abuse, genocide, torture, and suicide methods — then annotate the "degree of harm" of this content, used to train the model to refuse such requests.[^1]

**ChatGPT's "safety" was purchased at the cost of these people's mental health.**

These annotators were not engineers, not researchers, not even long-term employees — most were temporary workers hired through Sama, on short-term contracts, without mental health support or long-term healthcare. During their 8-hour shifts, they read some of the darkest text humanity has produced — passages describing child violence, detailed suicide instructions, glorifications of genocide — then went home. Reportedly, multiple annotators developed symptoms of post-traumatic stress disorder (PTSD): insomnia, nightmares, emotional numbness, and increased fear in daily life.[^1]

Sama terminated its contract with OpenAI in February 2022 — reportedly in part because internal concerns arose about the impact of annotation work on employees' mental health. But OpenAI's annotation needs did not disappear — they simply shifted to other outsourcing companies and other countries. The operating logic of the entire annotation industry is: if workers in one place start complaining or attracting media attention, move to a quieter place.

The annotator wage structure is especially unsettling. $1.32–$2/hour is not the lowest in Kenya — the local minimum wage is approximately $1.15/hour. But this comparison itself is a concealment: annotators read the darkest content in human civilization, enduring a work environment that psychology has established as traumatic — what should the "market price" for this job be? $2/hour? $20/hour? $200/hour? The answer depends on how you price human psychological well-being. And the market's answer is: as cheaply as possible.

This is not just an OpenAI problem. Nearly every company using RLHF — Google, Anthropic, Meta — relies on similar outsourced annotation systems. The essence of annotation work is commodifying human "judgment": you need a person to determine "whether this answer is harmful," but you do not want to pay a premium salary for that judgment. So annotation is outsourced to places with the lowest labor costs — Kenya, the Philippines, India, Venezuela — performed by people with the least bargaining power.

RLHF's economics reveal an unsettling equation: **the model's degree of safety is positively correlated with the annotators' degree of psychological trauma.** The more harmful content annotators see, the more detailed their annotations, the "safer" the model becomes. But the more harmful content annotators see, the more their mental health deteriorates. Safety and harm are not exchanged between the model and the user — they are exchanged on the bodies of the annotators.

---

## II. The data annotation industry: AI's supply chain floor

RLHF is only the tip of the iceberg. The entire large language model industry — from pre-training to fine-tuning to evaluation — is built upon a massive data annotation industry.

**Scale AI** is the largest company in this industry. Headquartered in San Francisco, founded by Alexandr Wang in 2016, valued at $14 billion by 2024.[^2] Scale AI does not directly employ annotators — it operates a platform (Remotasks is its consumer-facing brand) connecting "AI companies needing annotated data" with "workers willing to do annotation work." This model is the same as Uber's relationship with drivers — the platform does not employ workers, only provides matching services; workers are independent contractors with no minimum wage guarantees, no benefits, no unions.

Remotasks operates large-scale annotation tasks in the Philippines, Kenya, Venezuela, India, and other countries. Annotator work includes: labeling images ("this is a cat," "this is a car"), judging text sentiment, evaluating AI answer quality, and performing RLHF preference rankings. This work may seem simple — but it requires uniquely human capabilities: **boundary judgment, cultural understanding, common-sense reasoning.** AI models need human annotation precisely because these are the capabilities current AI lacks most.

Annotator income varies enormously. On Remotasks, Filipino annotators reportedly earn $1–$3/hour, with income varying by task type — simple image labeling pays least, RLHF annotation requiring specialized knowledge pays somewhat more, but still far below developed-country minimum wages.[^3] In India and Venezuela, some simple annotation tasks pay even less — reportedly as low as $0.10/task, with each task taking anywhere from several to over ten minutes.

Annotation platforms typically use "per-task" rather than "per-hour" pricing — meaning annotators' effective hourly wage depends on their speed, and platforms can control costs by adjusting task difficulty and unit prices. When the platform needs more annotation, unit prices may rise; when annotator supply is sufficient, unit prices drop. Annotators have virtually no bargaining power in this relationship — if you won't do it, someone else will. This is identical to the situation of Uber drivers.

Appen (an Australian public company, once the largest AI data annotation company) faced severe business decline in 2024 — its stock price fell over 95% from its 2020 peak.[^11] Appen's decline was partly because RLHF and RLAIF reduced demand for simple annotation, and partly because competitors like Scale AI captured market share. But Appen's story also illustrates a deeper truth: the annotation industry is itself a consumable of AI — when a model no longer needs a certain type of annotation, the company doing that annotation becomes obsolete.

The structural characteristic of this industry is: **the more powerful AI becomes, the greater the demand for annotated data, but the skill requirements for annotators are changing.** Early annotation work (image classification, text classification) had low skill requirements and low wages. RLHF annotation demands higher judgment and pays somewhat more. But with the rise of RLAIF (using AI feedback to replace human feedback), demand for human annotation may decline — and the decline will first impact annotators with the fewest skill barriers.

---

## III. The annotator's condition: Invisible laborers

The most striking characteristic of the data annotation industry is its **invisibility.** When you use ChatGPT, you see a polished chat interface. You will not see — nor can you see — the people who annotated data for the model you are using. They are not on OpenAI's employee roster, do not appear in the author lists of technical papers, and do not attend product launches. They are the "ghost labor" of the AI industry — necessary, cheap, invisible.

This invisibility is not accidental — it is by design. The outsourced annotation business model ensures that at least one (usually two) layers of intermediation stand between the AI company and the annotator: Sama, Scale AI, Appen, Toluka, and other annotation companies. When controversy arises — such as the Kenyan annotators' PTSD issue — the AI company can say "we hired through legitimate outsourcing companies; we are not directly responsible for annotators' working conditions." Outsourcing is both a cost optimization strategy and a liability isolation strategy.

Another dilemma facing annotators is the **absence of upward mobility.** A Filipino worker who has done image annotation on Remotasks for two years will not receive better career opportunities because of their "extensive experience in the AI industry." The skills of annotation work — judgment, patience, attention to detail — are not "skills" recognized by the labor market. Annotators are not accumulating human capital; they are expending time. When they can no longer continue (due to age, health, or tasks being replaced by AI), they will be replaced like consumables.

Union protection is virtually nonexistent in the annotation industry. Annotators are typically independent contractors rather than employees — meaning labor law provisions on minimum wage, overtime pay, and workplace injury protection do not apply to them. In countries like Kenya and the Philippines, unionization rates are already low, and the decentralized structure of annotation platforms (annotators work from home, accepting tasks through platforms) makes traditional union organizing nearly impossible.

---

## IV. Job displacement: AI is already replacing humans

"Will AI replace human jobs?" — the tense of this question is wrong. The correct tense is not "will it" but "it is."

**Klarna** (Swedish fintech company) announced in 2024 that its AI customer service assistant handled 2.3 million conversations in its first month online, equivalent to the workload of 700 full-time customer service agents.[^4] Klarna subsequently froze human customer service hiring. **BT** (British Telecom) announced in 2023 plans to cut up to 55,000 jobs within 5–7 years, a significant portion of which would be replaced by AI.[^5] **IBM** CEO Arvind Krishna stated in 2023 that IBM expected to pause hiring for back-office positions that AI could replace, with approximately 7,800 positions potentially affected.[^6]

In late 2024, San Francisco AI company **Artisan** put up billboards reading "Stop Hiring Humans."[^7] This was not satire — it was Artisan's genuine business proposition. Artisan sells AI Sales Agents, and its marketing message is: your sales team can be replaced by an AI agent that needs no salary, no vacation, and will never quit.

"Stop Hiring Humans" generated massive controversy not because it said anything new — but because it said aloud what the industry was privately thinking. AI company CEOs discuss "how to replace 80% of the customer service team with AI" in closed-door meetings, but in public say "AI won't replace you; people who use AI will replace you." Artisan's ad stripped away that veneer.

Anthropic CEO Dario Amodei predicted in a 2025 blog post: AI could eliminate up to 50% of entry-level white-collar jobs within 1–5 years.[^8] This is not fear-mongering from AI critics — it is a self-warning from the most important CEO in the AI industry. When an AI company's CEO tells you AI might replace your job, continuing to say "AI won't replace you" is a form of deception.

What is being displaced is not just "low-skill" jobs. Translation, junior legal document review, financial analysis, basic programming, content creation — the common characteristic of these positions is that their work can be decomposed into standardized subtasks, each of which can be completed by current AI models. This does not mean these jobs will entirely disappear — but it means corporate demand for personnel in these positions will decline dramatically.

A typical example is the translation industry. DeepL, Google Translate, and GPT-4's translation quality on common language pairs now approaches that of human translators. For "good enough" translation needs — business emails, product descriptions, news summaries — AI is already adequate. Only in scenarios requiring deep domain knowledge, such as literary translation, legal translation, and medical translation, are human translators still irreplaceable. But "good enough" translation accounts for the majority of the translation market — when this demand is met by AI, large numbers of mid- and lower-tier translators lose their market.

Another example is junior programming. GitHub Copilot and Cursor can already automatically generate substantial amounts of basic code — function implementations, unit tests, API integration, bug fixes. A senior engineer using Copilot can accomplish the work that previously required two junior engineers. Corporate demand for junior programmers is declining — not because junior programmers are "bad" but because an AI + senior engineer combination is cheaper, faster, and more reliable. (See *The AI Programming Assistants Chronicle*.)

The key characteristic of this displacement pattern is: **it is not "a job being fully replaced by AI" but "a job's personnel demand being dramatically reduced by AI."** A team that originally needed 10 customer service agents now needs 3 (plus AI). A team that originally needed 5 junior programmers now needs 2 (plus Copilot). Each individual reduction may seem modest — 30%, 50% — but when such reductions occur simultaneously across all industries, all countries, the aggregate employment impact is enormous.

---

## V. Vibe coding and the future of programmers

In February 2025, former Tesla AI lead and OpenAI founding member Andrej Karpathy coined a new term: "vibe coding." He described a new way of programming: **you describe what you want in natural language, AI writes the code, you check whether it feels right, then run it. You don't need to understand every line of code — you just need to "vibe" that it's correct.**[^9]

Vibe coding is not just a change in programming method — it is a change in the programmer's role. In traditional programming, the programmer is "the person who writes code." In vibe coding, the programmer is "the person who describes requirements." Code writing is outsourced to AI — just as data annotation execution is outsourced to workers in developing countries.

For senior engineers, vibe coding is a productivity tool — they have enough experience to judge whether AI-written code is correct, even without line-by-line review. For junior programmers, vibe coding is a mirror of exposure — if AI can write code as good as yours, where is your value?

The traditional growth path for junior programmers is: accumulating experience, building intuition, and understanding systems through writing large amounts of basic code. Vibe coding bypasses this process — junior programmers no longer need to write basic code because AI writes it for them. But this also means they lose the opportunity to "learn" through "writing." A programmer raised on vibe coding may never have the opportunity to understand operating systems through debugging a low-level memory leak.

**The ultimate form of AI programming may not be "AI replacing programmers" — but "AI making a few elite programmers more powerful while making large numbers of junior programmers no longer needed."** This is a skill polarization: top-tier engineer + AI combinations can accomplish work that previously required 10 people, while bottom-tier junior engineers face a paradox — they need experience to get jobs, but the jobs themselves are being eliminated by AI.

---

## VI. The future of annotation: When humans are no longer needed

Large language models' demand for human annotation is undergoing a clear diminishing trajectory.

**RLHF** (2022): Fully dependent on human annotation. Human annotators rank model outputs by preference to train reward models. Human annotation quality directly determines model safety.

**Constitutional AI / RLAIF** (2022–2023): Partially replaces human annotation. A "constitution" (code of conduct) enables the model to self-criticize and self-correct, reducing dependence on human annotation. Humans still need to draft the constitution but no longer annotate item by item.

**Pure RL** (2025): DeepSeek-R1-Zero used pure reinforcement learning with rule-based rewards, developing reasoning capability without any human-annotated data.[^10] (See *The DeepSeek-R1 Chronicle*.) R1-Zero's chains of thought emerged from scratch — it was never taught "what good reasoning looks like" but discovered good reasoning patterns through trial and error.

R1-Zero's significance is not that it is "better than RLHF" — its reasoning quality still has gaps compared to RLHF-trained models. Its significance lies in demonstrating a possibility: **models can develop advanced capabilities without human annotation.** If this direction continues to develop, human annotation in RLHF — those people in Kenya and the Philippines reading harmful text — will become unnecessary.

What does this mean for annotators?

In the short term, annotation demand will not disappear — what R1-Zero proved is that "reasoning capability can emerge without human annotation," but "alignment" (making models safe, helpful, and harmless) still requires human judgment. RLAIF reduces dependence on human annotation but does not eliminate it — at least regarding the judgment of "what is harmful," human participation is still needed.

In the long term, annotators' fate depends on a deeper question: **when AI is powerful enough to judge "what is good" on its own, how much is human judgment still worth?** If RLAIF can fully replace RLHF, if models can self-evaluate and self-correct, then human annotation — as a form of labor — has reached its end.

This is not a remote hypothesis. DeepSeek-R1-Zero has already taken the first step. When models no longer need human annotation, the tens of thousands of workers who depend on annotation work for their livelihood — in Kenya, the Philippines, India — will be cast into the tide of unemployment, just like factory workers replaced by automation. And the AI industry's response will most likely be silence.

---

## Commentary

The AI industry has constructed an elaborate narrative structure: using the myth of "model intelligence" to conceal the reality of "human labor." When we discuss GPT-4's emergent abilities, Claude's safety alignment, and DeepSeek's reasoning emergence, we are discussing technology. But beneath technology lies labor — vast quantities of low-wage, high-psychological-harm annotation labor.

RLHF's "human feedback" is not abstract — it comes from concrete people, in concrete time zones, earning concrete hourly wages, enduring concrete trauma. The data annotation industry is not an appendage of AI — it is AI's foundation. Without annotators, there is no RLHF; without RLHF, there is no ChatGPT safety; without safety, ChatGPT could never have reached a billion users. But in OpenAI's valuation story, the annotators' position is zero.

This is not a technical problem. It is a labor justice problem. The invisibility of annotation work — outsourced, remote, per-task paid, independent contractors — ensures that annotators never enter public view. They are not "employees" of the AI industry; they are "consumables" of the AI industry. When used up, replace them with a fresh batch.

"Will AI replace human jobs?" — the framing of this question is itself a form of concealment. It implies this is a future question, a hypothetical question, a question that may or may not be discussed. The facts are: AI is already replacing human jobs — customer service, translation, junior programming, data entry. The facts are: AI industry CEOs themselves say "50% of entry-level white-collar jobs may be eliminated within 1–5 years." The facts are: Artisan's "Stop Hiring Humans" ad is not satire but a business model.

DeepSeek-R1-Zero poses the final question: when models no longer need human annotation, what happens to the annotators? The answer is most likely: the AI industry will not answer this question. Just as automated manufacturing did not answer "what happens to workers replaced by robots" — not because there is no answer, but because answering the question is not profitable.

What the historian must record is not how smart AI is — but upon whose labor AI's intelligence is built. Behind every "capability emergence," there are people — in offices in Nairobi, in apartments in Manila, in shared housing in Bangalore — reading texts we do not want to read, making judgments we do not want to make, earning wages we would not accept. Their names will not appear in papers; their faces will not appear at product launches. But without them, none of this would exist.

---

*This piece was compiled by the Endfield Industrial Historical Archives team: Fu Xuan (lead historical commentary).*

---

[^1]: Perrigo, "OpenAI Used Kenyan Workers on Less Than $2 Per Hour to Make ChatGPT Less Toxic", TIME, 2023-01-18. https://time.com/6247678/openai-chatgpt-kenya-workers/
[^2]: Scale AI website, https://scale.com/; valuation data from Forbes, "Scale AI valued at $14 billion", 2024.
[^3]: See MIT Technology Review, "The gig workers powering AI's biggest companies", 2023. Remotasks annotator income varies by task type and region, typically $1–$3/hour.
[^4]: Klarna, "AI assistant handles two-thirds of customer service chats in its first month", 2024-02-27. https://www.klarna.com/international/press/klarna-ai-assistant-handles-two-thirds-of-customer-service-chats-in-its-first-month/
[^5]: Reuters, "BT to cut up to 55,000 jobs by end of decade", 2023-05-18.
[^6]: Bloomberg, "IBM to Pause Hiring for Jobs That AI Could Do", 2023-05-01.
[^7]: Artisan, "Stop Hiring Humans" advertising campaign, 2024-11. See Business Insider, "This AI startup's billboard says 'Stop Hiring Humans'", 2024-11.
[^8]: Amodei, D., "Machines of Loving Grace", 2025. https://darioamodei.com/machines-of-loving-grace
[^9]: Karpathy, A., post on X, 2025-02. Coined the term "vibe coding."
[^10]: DeepSeek-AI, "DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning", arXiv:2501.12948, 2025-01-22. R1-Zero experiment demonstrated reasoning capability emergence without human-annotated data.
