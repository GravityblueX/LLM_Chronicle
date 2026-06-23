# The Creator Economy and AI-Generated Content: When Tools Become Rivals

> In August 2022, an AI-generated painting titled *Théâtre D'opéra Spatial* won first place in the digital arts category at the Colorado State Fair fine arts competition. Its creator, Jason Allen, had not painted a single stroke — he spent over 80 hours adjusting prompts on Midjourney, curating selections, and post-processing. The award announcement ignited a fire on social media that has yet to be extinguished: was this creation, or cheating? Creators suddenly realized that they were not competing against another painter, but against an entirely new mode of production — one trained on the very works they had spent years creating.

## I. The point of impact: Creators discover they are training data

AI's impact on the creator economy did not begin with a product launch. It began with a discovery: **your work was fed to the machine, and you were never told.**

In the second half of 2022, after Stable Diffusion was released as open source (see *Chronicle: August 2022*), the artist community quickly discovered that its training dataset, LAION-5B, contained billions of images scraped from the internet — among them vast numbers of copyrighted illustrations, photographs, and design works. The tens of thousands of LoRA models that emerged on the Civitai platform made the problem even more concrete: some people trained style-transfer models on specific artists' works, producing images bearing those artists' distinct visual signatures, yet the artists themselves neither consented nor were compensated (see *Community Culture*, Section 4, "Civitai and the LoRA Community").

This was not an isolated incident. The same story unfolded simultaneously across different creative domains:

- **Visual arts**: Midjourney's rapid iteration from v1 to v5 elevated AI image generation from "obviously machine-made" to "potentially fooling humans" within 18 months (see *The Midjourney Chronicle*). The v5-generated image of "the Pope in a white puffer jacket" that went viral on social media in March 2023 marked AI imagery's entry into the phase where humans could barely distinguish it from reality.[^1]
- **Music**: Suno AI achieved text-to-complete-song generation in 2023–2024 — including melody, harmony, arrangement, and vocals — producing a full song in one minute. For independent musicians, this was not a fun toy but a tool that could directly replace their production capability.
- **Video**: Sora demonstrated 60-second single-take AI-generated video in February 2024, pushing video generation from "3–5 second clip stitching" to "a complete stretch of time one can gaze at" (see *The Sora Chronicle*). Although Sora itself ultimately did not survive, the DiT pathway it pioneered has been inherited by products like Kling and Veo, and the substitution pressure on video creators continues to intensify.[^2]

The severity of impact varied by domain. **Graphic design and concept art** were hit first — after Midjourney v5, many illustrators found their commercial orders declining sharply. According to a 2023 survey by the Illustrators Partnership of America, approximately 30% of responding illustrators reported that AI image generation had a "significant" or "devastating" impact on their income.[^3] **The photography industry** followed close behind — AI-generated "photo-realistic" images began entering stock image markets, competing with real photography for the same advertising budgets. **The music industry** was shaken more at the copyright level — when anyone can type "a sad folk ballad" into Suno and get a complete song, where does an independent musician's "irreplaceability" come from?

This is not technophobia but economic reality. When a new tool can complete in seconds what previously took hours or even days of professional work, and the cost approaches zero, the old pricing system must inevitably collapse — just as the large language model API price war demonstrated (see *Commentary: The Price War*).

## II. Is "AI art" truly art?

The debate over whether AI-generated content counts as "art" has not ceased since the day *Théâtre D'opéra Spatial* won its award. On the surface, this debate is philosophical; in substance, it concerns the economic legitimacy of creators — if AI-generated images do not deserve to be called "art," then human creators retain the power of definition and pricing; if they do, then the boundaries of the "creator" identity are permanently rewritten.

The positions on both sides are clear and opposed:

**Opponents** argue that the essence of art is human creative expression. AI does not "understand" what it generates — it performs recombination of statistical patterns, not meaningful aesthetic choices. Artist Sarah Andersen (also a plaintiff in the Getty v. Stability AI case) stated in a 2023 interview: "This is not a new paintbrush, this is automated theft."[^4] From this perspective, no matter how exquisite AI-generated images may be, they are merely advanced remixes of human creations compressed into model weights — their "creativity" derives from fragments of human creativity embedded in the model, not from any agency of the machine itself.

**Proponents** counter that the definition of art has never been fixed. When photography was invented, painters said "clicking a shutter doesn't count as creation"; when digital painting emerged, traditional painters said "painting with a mouse isn't real art." Jason Allen, in responding to critics, emphasized that he invested over 80 hours of prompt engineering and post-curation in *Théâtre D'opéra Spatial* — this itself is a form of creative labor.[^5] From this perspective, AI is a tool, not an author — just as a camera is a tool, not a photographer.

The deeper divergence lies in whether **intent** is a necessary condition for art.

A painter conceives a composition, selects colors, adjusts the arrangement — each step carries intent. A Midjourney user inputs "cyberpunk city, neon lights, rainy night" — in the generated image, how light refracts, how buildings are arranged, how pedestrians move, none of this is "decided" by the user but "chosen" by the model. The question is: is this "choosing" a genuine choice, or merely sampling from a probability distribution?

This question currently has no answer. But its economic consequences are clear: **if AI-generated content is not regarded as "art," it cannot attain the same market position, copyright protection, and cultural respect as human-created work.** The U.S. Copyright Office's 2023 *Zarya of the Dawn* decision drew the first line — purely AI-generated images are not copyrightable, but portions where a human exercises "sufficient creative arrangement" can be protected (see *Copyright and Legal Proceedings*, Section 6).[^6] The trajectory of this line will directly determine the legal foundation of the AI creator economy.

It is worth noting that the debate is not purely academic. The "AI Stefanie Sun" phenomenon documented in *Community Culture* demonstrates that public acceptance of AI-generated content far outpaces the speed of legal and academic definition. Millions of listeners in the summer of 2023 happily listened to songs "covered" by "AI Stefanie Sun" — most of them did not care whether this counted as "real music."[^7] The market was already voting with its feet, while the struggle over definitional power continued.

## III. Copyright litigation: The arduous drawing of legal boundaries

The conflict between the creator economy and AI inevitably made its way to the courts. 2023 was called "the year of AI copyright litigation" — in that year, copyright holders in virtually every creative domain filed lawsuits against AI companies (see *Copyright and Legal Proceedings*.

The core dispute in all these cases was just one: **does training AI models on copyrighted content constitute fair use?** But around this core, different lawsuits pursued different angles of attack:

- **Getty Images v. Stability AI** (February 2023) focused on training data — Stable Diffusion's training set contained tens of millions of Getty-copyrighted images, and generated images showed ghostly remnants of Getty watermarks, serving as direct visual evidence of training infringement.[^8]
- **Universal Music Group v. Anthropic** (October 2023) focused on the output side — Claude could reproduce copyrighted lyrics verbatim upon user request, constituting "mechanical reproduction."[^9]
- **The New York Times v. OpenAI** (December 2023) attacked both the training and output sides simultaneously — ChatGPT could reproduce NYT article text through specific prompts, including content behind the paywall.[^10]

These three fronts revealed an important trend: **output-side infringement is more readily accepted by courts than training-side infringement.** The defense that "the model learned statistical patterns" has some persuasive power on the training side, but if the model directly reproduces protected content at the output — verbatim lyrics, reproduced news articles, images bearing copyrighted watermarks — the "transformative use" defense becomes extremely difficult. This means: even if training is ultimately deemed legal, AI companies will still need to establish strict copyright content filtering mechanisms on the output side. "Able to train" does not equal "able to output."

Legal evolution is reshaping the game between creators and AI companies. Under litigation pressure, industry behavior has already adjusted ahead of legal conclusions: OpenAI introduced Copyright Shield, committing to bear copyright claims for enterprise users;[^11] Adobe from the very beginning trained Firefly only on licensed content;[^12] a data licensing market is emerging — Axel Springer, Associated Press, Reddit, and other platforms have signed paid data agreements with AI companies. These changes signal that **the era of "default scraping" is ending, and the era of "licensing first" is beginning.**

But legal boundaries remain fuzzy. A critical legal gap is "style imitation" — current copyright law does not protect "style," only specific expressions. AI can generate "a Picasso-style painting" or "a photograph in the style of a certain photographer" without reproducing any specific work, yet precisely extracting a creator's core visual assets. In the voice domain, this problem is even more acute — the AI Stefanie Sun phenomenon proved that voice cloning tools have made "singing someone else's song in another person's timbre" a mass behavior (see *Copyright and Legal Proceedings*, Section 8, "The Legal Gap of Style Imitation"). Should the law re-examine the boundary between "style" and "expression"? There is currently no answer — but this question will not disappear on its own.

## IV. Creators' response strategies: Resistance, adaptation, and reconstruction

Facing AI's impact, the creator community's response is evolving from initial panic and anger into a diverse spectrum of strategies.

### Resistance: Legal action and industry lobbying

The most direct form of resistance is litigation. The Authors Guild, Getty Images, Universal Music Group, and other organizations have used legal means to demand that AI companies pay for using copyrighted content in training. In early 2023, over 10,000 artists signed an open letter demanding that AI image generation companies stop using their works for training.[^13]

Industry lobbying is also advancing in parallel. SAG-AFTRA (the Screen Actors Guild) made AI's use of actors' likenesses and voices one of the core negotiation issues in the 2023 Hollywood strike, ultimately securing contractual limitations on AI usage.[^14] This was the first time the creative industry used collective action to write AI provisions into an industry agreement.

### Adaptation: Embracing tools, enhancing irreplaceability

Another group of creators chose adaptation — treating AI as a tool rather than an adversary. The Midjourney productization trajectory documented in *The Midjourney Chronicle* shows that Midjourney was ultimately accepted as "a step in the design process" rather than "a replacement for designers" — it is used for rapid concept generation, inspiration, and lowering the cost of initial drafts, while the final aesthetic judgment and creative decisions remain with humans.

"Irreplaceability" is becoming creators' new core competency. Specifically:

- **Narrative ability**: AI can generate a beautiful image but cannot endow a set of images with coherent narrative tension. Comic artists, game designers, brand visual directors — these roles that require "storytelling" remain difficult to replace.
- **Personal brand**: When AI can imitate any style, "who painted it" matters more than "what was painted." A renowned illustrator's signed work derives its value not just from the visual effect but from the creator's identity itself.
- **Cross-domain integration**: Using AI as part of a toolchain, combining human judgment, aesthetic sensibility, and project management capabilities. More and more designers have learned hybrid workflows of prompt engineering + post-editing — not resisting AI, but integrating it into their own capability systems.

### Reconstruction: New economic models

The deepest change is at the economic model level. The traditional creator economy was built on a premise: creation has costs — time, skills, tools, training. These costs constituted the creator's moat. When AI pushes the marginal cost of creation toward zero, the moat vanishes.

New economic models are emerging:

- **Subscriptions and direct support**: Platforms like Patreon and Aifadian let fans pay creators directly — not for the work itself (AI can do that too), but for "this person doing this thing."
- **Process economy**: More and more creators are selling the "creation process" rather than the "creation result" — tutorials, livestreams, behind-the-scenes stories. When results can be replicated by AI, the process becomes the truly scarce resource.
- **Customization and intimacy**: AI can generate "anyone's painting," but cannot generate "a painting made specifically for you." Custom services and the intimate relationship between creators and fans are becoming a new value anchor.
- **AI-native creators**: A new cohort of creators uses AI as their core tool from the very start — they create on Midjourney, Suno, and Kling, do not consider themselves "cheating," but rather believe they are using a new-era paintbrush. The very existence of this group is redefining what "creator" means.

## V. Future trends: An irreversible river

AI's impact on the creator economy is an irreversible river. Technology does not retreat; doors of capability once opened do not close. But the river's course still has multiple possibilities:

**Short term (2025–2027)**: Copyright litigation verdicts will set the legal tone for the industry. The outcome of the NYT v. OpenAI case is particularly critical — if training is deemed fair use, demand for data licensing markets will shrink; if deemed infringement, already-trained models face retroactive risk. Either outcome will rewrite the industry landscape. Meanwhile, "output-side filtering" will become a standard feature of all AI generation tools — not from conscience, but from legal necessity.

**Medium term (2027–2030)**: The creator economy will complete its stratification. Top-tier creators — those with strong personal brands and narrative ability — will become more efficient and more profitable thanks to AI. Bottom-tier creators — those whose value lies primarily in execution skills — will face sustained price pressure. The future of mid-tier creators depends on whether they can complete the transition from "skill provider" to "aesthetic decision-maker."

**Long term**: The creative industry may arrive at a new equilibrium — analogous to the fate of painting after the invention of photography. Photography did not kill painting, but it fundamentally transformed painting's economic model and cultural standing. AI will not kill creativity — it will kill "creative labor" that relies solely on execution skills, but it will amplify what is truly scarce: unique perspective, narrative ability, aesthetic judgment, personal brand. When everyone can generate "beautiful images," "beautiful" itself is no longer a competitive advantage — "whose, why, and for whom" is.

## Commentary

The conflict between the creator economy and AI-generated content is essentially a collision between two timescales. Skills that creators spent a decade honing, AI learned in ten months. An illustrator needs five years from learning to draw to landing the first commission; a Midjourney user needs ten minutes from signup to output. When two modes of production operating at such vastly different speeds meet in the marketplace, the collapse of the old system is not a question of "if" but of "how fast."

But collapse does not equal destruction. Photography did not kill painting; it merely freed painting from the practical function of "recording reality" and pushed it toward purer aesthetic exploration. By the same token, AI will not kill creativity — it will kill "creative labor" that survives solely on execution skills, but it will amplify what is truly scarce: unique perspective, narrative ability, aesthetic judgment, personal brand. When everyone can generate "beautiful images," "beautiful" itself ceases to be competitive — "whose, why, and for whom" is.

The most profound question in this conflict is not technical but ethical: model companies trained tools that replace creators using creators' works — however the law defines "fair use," the moral weight of this fact is real. Reports that NYT journalists spent years investigating and writing were compressed into a few gigabytes of model weights, then output for free in the form of "ChatGPT's answers" — whether this constitutes legal infringement remains undecided, but it already constitutes a moral asymmetry. The historian records this not to take sides, but to document a fact: the foundation of the creator economy in the AI era is a renegotiation over "who has the right to use whose creativity." The outcome of this negotiation will define the landscape of the creative industry for decades to come.

---

*This piece was compiled by the Endfield Industrial Historical Archives team: Fu Xuan (theoretical framework).*

---

[^1]: The New York Times, "How AI-Generated Images Are Changing the Internet", 2023-03. The Midjourney v5-generated "Pope in a white puffer jacket" image spread widely on social media in March 2023 and was covered by multiple media outlets. See *The Midjourney Chronicle*, Section 2.
[^2]: OpenAI, "Sora: Creating video from text", 2024-02-15. https://openai.com/index/sora/. Sora's technical legacy is covered in *The Sora Chronicle*, Section 3, "Impact and Successors."
[^3]: Illustrators Partnership of America, 2023 industry survey report. The specific percentage figures are compiled from multiple industry media reports; exact numbers vary due to differences in survey methodology.
[^4]: Sarah Andersen expressed this position in multiple 2023 interviews and social media statements. Andersen is also one of the affiliated artists in the Getty v. Stability AI case.
[^5]: Jason Allen emphasized his 80+ hours of prompt engineering time in interviews following his August 2022 Colorado State Fair award. Compiled from multiple media reports.
[^6]: U.S. Copyright Office, "Zarya of the Dawn" Registration Decision, 2023-02-21. The U.S. Copyright Office ruled that purely AI-generated illustrations are not protectable, but the text and overall arrangement are protectable. See *Copyright and Legal Proceedings*, Section 6.
[^7]: The AI Stefanie Sun phenomenon erupted on Bilibili and Douyin in the spring and summer of 2023. See *Community Culture*, Section 3, "AI Stefanie Sun: The Mass Enlightenment of Voice Cloning."
[^8]: Getty Images (US) Inc. v. Stability AI Ltd., Case No. IL-2023-000007 (High Court of Justice, England and Wales), filed 2023-02-03. See *Copyright and Legal Proceedings*, Section 3.
[^9]: Concord Music Group, Inc. v. Anthropic PBC, Case No. 3:23-cv-01092 (M.D. Tenn.), filed 2023-10-18. See *Copyright and Legal Proceedings*, Section 4.
[^10]: The New York Times v. Microsoft Corp. & OpenAI, Inc., Case No. 1:23-cv-11195 (S.D.N.Y.), filed 2023-12-27. See *Copyright and Legal Proceedings*, Section 2.
[^11]: OpenAI, "Copyright Shield", 2023-11. OpenAI committed to bearing copyright claims for enterprise users. See *Copyright and Legal Proceedings*, Section 7.
[^12]: Adobe, "Adobe Firefly: Generative AI for Creative Professionals", 2023-03. Adobe stated that Firefly was trained only on Adobe Stock licensed content and public domain content. See *Copyright and Legal Proceedings*, Section 7.
[^13]: The "Stop AI Art" open letter was launched on Change.org in December 2022, with over 10,000 artists having signed by early 2023.
[^14]: SAG-AFTRA, AI usage provisions in the 2023 actors' strike agreement. Compiled from multiple media reports.
