# The Biography of DeepSeek-R1

> DeepSeek-R1 (2025-01) was a paradigm-shifting event in the history of large language models. It was not merely a reasoning model—it was the first public demonstration of emergent behavior catalyzed purely by reinforcement learning, MIT-licensed open-source's direct answer to closed-source reasoning models, and the bullet behind $600 billion in market capitalization evaporation. R1 proved two things: reasoning capability does not require closed-source walls, and the most advanced AI does not require the most GPUs. On the track that o1 had opened, R1 was not a chaser—it redefined the rules of the race.

---

## I. Technical Background

### 1.1 The birth of reasoning models: o1's legacy

On 2024-09-12, OpenAI released o1, inaugurating the "reasoning model" category.[^1] o1's core idea was straightforward: let the model engage in internal chain-of-thought before answering, using additional inference time to plan, verify, and revise its reasoning. AIME math competition scores leapt from GPT-4o's 12% to 74%—this was not incremental improvement but a sudden migration of capability from one domain to another (see *The Biography of o1*).

But o1 had a fundamental contradiction: **it turned itself into a luxury product through hidden chain-of-thought and premium pricing**. o1-preview's output was priced at $60 per million tokens—four times that of GPT-4o.[^1] The chain-of-thought was deliberately hidden, and any attempt to view the reasoning process through jailbreaking resulted in account bans. OpenAI's logic was: chain-of-thought is core IP, reasoning capability is a scarce resource, and scarce resources should be sold at a premium.

Four months later, DeepSeek-R1 blew that logic apart with a single MIT license.

### 1.2 Test-time compute: a new scaling dimension

o1's success validated a new scaling dimension: **test-time compute**. In August 2024, Charlie Snell et al. published a paper systematically demonstrating that investing more computation at the inference stage could significantly improve effective performance without increasing model size.[^2]

o1 turned this theory into a product. But o1's training approach—SFT + RLHF, first using human-annotated reasoning examples for supervised fine-tuning, then refining with reinforcement learning—still relied on expensive human-labeled data. The industry's default assumption was that reasoning capability needed to be "taught" by humans first, and only then "reinforced" by RL.

DeepSeek-R1 shattered that assumption.

---

## II. Core Events

### 2.1 Release (2025-01-20)

On **2025-01-20**, DeepSeek officially released its reasoning model R1, simultaneously open-sourcing the model weights under the MIT license.[^3]

R1 was based on DeepSeek-V3-Base (MoE architecture, 671B total parameters / 37B activated), specializing in mathematics, code, and logical reasoning tasks. Prior to this, DeepSeek had released a preview version, R1-Lite, on 2024-11-20, which initially demonstrated the potential of reinforcement learning in reasoning tasks.[^3]

R1's release date coincided with Trump's inauguration ceremony—a detail noted by multiple media outlets but quickly drowned out in technical discussions. What was remembered were R1's three labels: **MIT open-source, performance on par with o1, and API pricing at merely 3% of o1's**.

### 2.2 R1-Zero: pure RL forges reasoning

R1's core technical pathway consisted of two steps. The first was R1-Zero—an experiment that was never fully productized but held the greatest historical significance.

**DeepSeek-R1-Zero** completely bypassed supervised fine-tuning (SFT), training exclusively with GRPO (Group Relative Policy Optimization) reinforcement learning. All rewards were rule-based: correctness rewards (whether math answers were correct, whether code passed tests) and format rewards (whether chain-of-thought was enclosed in `<think>...</think>` tags). No model-based reward functions were used.[^3]

The premise of this experiment was radical: **reasoning capability does not need to be taught by humans first; it can be directly "forced out" by RL**. The traditional training paradigm was SFT → RLHF—first feeding high-quality human-annotated reasoning examples so the model "learns" what good reasoning looks like, then fine-tuning with RL. R1-Zero eliminated the first step entirely.

The results were unexpected. Pure RL training gave rise to **emergent behavior**: during training, the model spontaneously learned "Aha Moments"—on a given problem, it would suddenly pause, re-evaluate its reasoning process in human-readable language, and proactively allocate more thinking time.[^3] The DeepSeek team wrote in their paper: "This was not programmed in but developed spontaneously through the model's interaction with the reinforcement learning environment."

Previously, the emergent phenomena we had witnessed were mostly jumps in benchmark scores—parameter counts crossing a threshold and the model suddenly "knowing how to" solve a class of problems. R1-Zero's emergence was different: what emerged was a **behavior**—stopping, reflecting, rethinking. The philosophical weight of this lay in its implication: reasoning may not necessarily be taught; it can also be "forced out."

However, R1-Zero also had notable deficiencies: poor output readability (obscure reasoning processes, mixed languages), and unstable initial RL training. It proved the feasibility of the pure RL pathway but was not yet ready for direct product release.

### 2.3 R1: cold-start SFT + RL compromise

The second step was R1 itself—introducing cold-start SFT data (several thousand high-quality chain-of-thought examples) on top of R1-Zero, followed by RL training.[^3]

This compromise addressed R1-Zero's two problems: poor output readability and unstable initial RL training. The final model maintained reasoning capability while producing clearer, more user-friendly output.

Notably, R1's SFT data volume was small—thousands of examples, not tens or hundreds of thousands. This meant that RL remained the primary source of reasoning capability, with SFT serving merely as a "lubricant"—making the capability forged by RL more accessible to human understanding and use. This formed a subtle contrast with o1's approach: o1's reasoning capability came primarily from the SFT + RLHF combination, while R1's reasoning capability came primarily from RL, with SFT merely as icing on the cake.

### 2.4 GRPO: a more efficient RL algorithm

R1 employed GRPO (Group Relative Policy Optimization), a reinforcement learning algorithm developed in-house by DeepSeek.[^3] Traditional RLHF used PPO (Proximal Policy Optimization), which required a separate reward model to evaluate output quality. GRPO's innovation was: **no independent reward model was needed**. Instead, it evaluated outputs through intra-group relative comparison—generating multiple candidate answers for the same problem, ranking them within the group based on rule-based rewards (correct or incorrect answer, correct or incorrect format), and using ranking signals to directly optimize the policy.

The efficiency advantage of this design was significant. PPO needed to maintain three models (policy model, reference model, reward model), with substantial memory and compute overhead. GRPO required only two (policy model, reference model), eliminating the reward model overhead. At the scale of 671B parameters, this saving meant RL training could be completed on fewer GPUs.

### 2.5 Performance on par with o1

R1 matched OpenAI o1 across multiple benchmarks:[^3]

| Benchmark | DeepSeek-R1 | R1-Zero | OpenAI o1-1217 |
|-----------|:--:|:--:|:--:|
| AIME 2024 | 79.8% | 71.0% | 79.2% |
| MATH-500 | 97.3% | — | 96.4% |
| Codeforces | 96.3%ile | — | 96.6%ile |
| SWE-bench Verified | 49.2% | — | 48.9% |

The implication of these numbers was not "R1 is better than o1"—the two were comparable, each with its own strengths. The true meaning was: **R1 achieved the same level as o1 using MIT open-source licensing and 3% of the price, while o1 used closed-source licensing and $60 per million tokens**.

### 2.6 MIT open-source: demolishing the walls

R1 was fully open-sourced under the MIT license—weights, code, methods, including chain-of-thought outputs.[^3] Compared with o1:[^1]

| Feature | DeepSeek-R1 | OpenAI o1 |
|---------|-------------|-----------|
| License | MIT (fully open) | Proprietary |
| Chain-of-thought | Fully public | Deliberately hidden |
| Model weights | Downloadable | Not downloadable |
| API price (output) | ¥16/million tokens | $60/million tokens |
| Local deployment | Yes (multi-GPU required) | No |

o1 deliberately hid its chain-of-thought and charged premium subscription fees. R1 handed a model of equivalent capability to the world completely free of charge and fully transparent. This was not a technical comparison—it was a philosophical one. Should reasoning models be transparent or opaque? The answer ceased to be a rhetorical question the moment R1 was released.

### 2.7 Distillation ecosystem

Upon release, R1 simultaneously launched six distilled smaller models (1.5B to 70B parameters, initialized from Qwen and Llama).[^3] Among them, the 32B and 70B models surpassed OpenAI o1-mini on multiple benchmarks.

This spawned a powerful reasoning model distillation ecosystem: developers could download R1 distilled models and run inference on their own hardware—no more API fees, no more rate limits. Reasoning capability transformed from "only available to large corporations and paying users" to "available to anyone with a GPU."

The impact of the distillation ecosystem ran deeper than it appeared. It proved that reasoning capability could be "compressed"—a 70B distilled model could inherit most of the reasoning capability of a 671B model. This opened the door for edge deployment of reasoning models (phones, laptops, embedded devices).

### 2.8 Shockwave

On **2025-01-27**, DeepSeek surpassed ChatGPT to claim the top spot on the Apple App Store's free apps chart in the United States.[^4]

On the same day, NVIDIA's stock price plummeted nearly 17%, wiping out approximately $589 billion in market capitalization in a single day—the largest single-day decline in U.S. stock market history.[^5] The market's fear was not R1 itself but the fact it revealed: the most advanced AI does not necessarily require the most GPUs. Compute power is not a moat.

Meta internally assembled four dedicated teams to study DeepSeek—focusing respectively on cost reduction, training data, and model architecture restructuring.[^6] Mark Zuckerberg announced AI investments exceeding $60 billion for 2025—this response itself spoke volumes about the magnitude of R1's impact. OpenAI claimed to have evidence that DeepSeek used its proprietary model outputs to train R1 (a model distillation accusation), which DeepSeek denied.[^7]

### 2.9 Aftermath

- **2025-05-28**: Release of the R1-0528 upgrade, with AIME 2025 accuracy leaping from 70% to 87.5%, and average thinking length increasing from ~12k tokens to ~23k tokens.[^8]
- **2025-09-17**: The R1 paper was officially published in *Nature*, becoming one of the first LLM papers to appear in Nature.[^7]
- **From 2025-02**: Government departments in Shenzhen, Beijing, Foshan, and other cities integrated DeepSeek; automakers including BMW, BYD, Dongfeng, and Honda announced partnerships.[^9]

---

## III. Impact and Aftermath

### 3.1 The explosion of reasoning models

R1 proved that o1 was not the only form reasoning models could take—reasoning models could be open-source, affordable, and allow users to see the chain-of-thought.

In the six months that followed, virtually every AI company in the world released its own reasoning model—proving both the viability of the category o1 had defined and that R1 had redefined its rules. Key reasoning models included (see *The Biography of o1*):

- **Kimi K1.5** (2025-01): Moonshot AI's reasoning model, excelling on Chinese-language reasoning tasks
- **Claude 3.7 Sonnet** (2025-02): Anthropic's hybrid reasoning model, supporting toggling between standard and extended thinking modes
- **Gemini 2.5 Pro** (2025-03): Google's reasoning model, integrated across Google's entire product line
- **Qwen3-Thinker** (2025-04): Alibaba's reasoning model, leading on Chinese-language reasoning tasks

None of these models adopted o1's "hidden chain-of-thought" approach—R1's open-source transparency paradigm became the industry default.

### 3.2 The cultural significance of the "DeepSeek moment"

R1's influence extended beyond the tech community. The phrase "DeepSeek moment" was widely used by mainstream global media in early 2025 to describe an event in which a Chinese AI company matched American frontier technology and overturned industry expectations with its business model.

This cultural shock had two layers. The first was technical: a company less than two years old, with far less funding than OpenAI, built a reasoning model on par with o1 at a training cost of under $6 million. The second was geopolitical: within the narrative framework of U.S.-China AI competition, R1 became a symbol of "Chinese AI capability matching America's"—regardless of whether that simplification was accurate.

### 3.3 Significance for the DeepSeek lineage

R1 marked the turning point for the DeepSeek lineage from "price slasher" to "paradigm challenger" (see *The DeepSeek Lineage*).[^10]

V2's MLA reduced inference costs to 1/100th of GPT-4's; V3 built a GPT-4o-level model at a training cost of $5.6M—these were technical achievements, but their impact was largely confined to the AI industry. R1's MIT open-source release and $600 billion market cap evaporation transformed DeepSeek from an industry-internal success story into a global public event.

From a technical trajectory perspective, R1's GRPO pure RL training represented the ultimate expression of the DeepSeek lineage's "efficiency-first" philosophy—not only was training cost low, but alignment cost was also low. Traditional RLHF required expensive human-annotated data to train reward models; GRPO replaced human annotations with rule-based rewards, driving alignment costs toward zero. This was in the same vein as V2's MLA (low inference cost) and V3's MTP + FP8 (low training cost)—each generation answered the same question: what other cost can be eliminated?

### 3.4 Long-term impact of distilled models

R1's distilled model ecosystem produced an important byproduct: **the democratization of reasoning capability**.

Before R1, reasoning models were API services—users paid, platforms delivered reasoning results. After R1, reasoning models were downloadable weights—developers could run 1.5B, 7B, 14B, 32B, 70B distilled models on their own hardware, fully offline, completely free. This meant reasoning capability could be embedded into any application—math tutoring on phones, code assistants on laptops, decision engines on embedded devices.

The long-term significance of this impact may be greater than R1 itself: **it transformed reasoning capability from a "cloud service" into a "local capability."** Just as Stable Diffusion transformed text-to-image generation from an API into a local tool, R1 transformed reasoning from an API into a local tool. Both "cloud-to-edge" migrations followed the same logic: open-source + distillation = capability diffusion.

---

## Commentary

DeepSeek-R1 made two contributions—one smaller, one larger. The smaller one was technical; the larger one was ecological. But both deserve to be remembered.

**The smaller contribution: pure RL forging reasoning capability.** R1-Zero completely bypassed SFT, starting directly from a base model and using GRPO reinforcement learning with purely rule-based rewards to forge reasoning capability from scratch. The "Aha Moments" that spontaneously emerged during this process—the model learning on its own to stop, re-evaluate, and rethink during training—rank among the most striking emergent phenomena of the LLM era. Previous emergent phenomena were jumps in numbers; this time what emerged was behavior. It implied that reasoning may not necessarily be taught—it can also be "forced out."

**The larger contribution: MIT open-source demolishing the walls around reasoning models.** Had R1 been merely another closed-source, high-priced API, it would have been just another competitor to o1, not an earthquake. OpenAI o1 had made reasoning models into a luxury: invisible chain-of-thought, prohibitive pricing, black-box model weights—an elegant closed loop of "scarce capability → premium pricing → compute investment → reinforced barriers." R1 blew that loop open with a single MIT license. Reasoning models transformed from luxury goods into public goods.

NVIDIA lost $600 billion in a single day; the market feared not R1 itself but the fact it revealed: the most advanced AI does not necessarily require the most GPUs. Compute power is not a moat. The subsequent global wave of reasoning models—Kimi K1.5, Qwen3-Thinker, Claude extended thinking—was catalyzed by R1 without exception. What it defined was not merely a model but a category. And the term "open-source reasoning model" did not exist before 2025-01-20.

---

*This entry was compiled by the Endfield Industrial History Team: Silence (Lead Biographer).*

---

[^1]: OpenAI Blog, "Learning to Reason with LLMs", 2024-09-12. https://openai.com/index/learning-to-reason-with-llms/
[^2]: Snell et al., "Scaling LLM Test-Time Compute Optimally can be More Effective than Scaling Model Parameters", arXiv:2408.03314, 2024-08-06. https://arxiv.org/abs/2408.03314
[^3]: DeepSeek-AI et al., "DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning", arXiv:2501.12948, 2025-01-22. https://arxiv.org/abs/2501.12948
[^4]: The Paper (澎湃新闻), "DeepSeek surpasses ChatGPT to top Apple's free app download chart in the US", 2025-01-27. https://www.thepaper.cn/
[^5]: Wall Street CN (华尔街见闻), "NVIDIA's market cap evaporates by nearly $600 billion, the largest single-day loss in US stock market history", 2025-01-28. https://wallstreetcn.com/
[^6]: The Information/Stephanie Palazzolo, "Meta Scrambles After Chinese AI Equals Its Own, Upending Silicon Valley", 2025-01-27. https://www.theinformation.com/articles/meta-scrambles-after-chinese-ai-equals-its-own-upending-silicon-valley
[^7]: Elizabeth Gibney, "Secrets of DeepSeek AI model revealed in landmark paper", Nature, 2025-09-17. doi:10.1038/d41586-025-03015-6. https://doi.org/10.1038/d41586-025-03015-6
[^8]: HuggingFace, "deepseek-ai/DeepSeek-R1-0528", 2025-05-28. https://huggingface.co/deepseek-ai/DeepSeek-R1-0528
[^9]: Wikipedia, "DeepSeek-R1". https://zh.wikipedia.org/wiki/DeepSeek-R1
[^10]: DeepSeek Official Blog, "DeepSeek-R1 Release: Performance on Par with OpenAI o1", 2025-01-20. https://api-docs.deepseek.com/zh-cn/news/news250120
