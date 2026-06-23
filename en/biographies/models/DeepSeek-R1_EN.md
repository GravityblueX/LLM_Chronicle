# The Biography of DeepSeek-R1

> DeepSeek-R1 (2025-01) was a paradigm event in the history of large models. It was not merely a reasoning model — it was the first public demonstration of emergent behavior catalyzed by pure reinforcement learning, a direct MIT-licensed answer to closed-source reasoning models, and the bullet behind $600 billion in market capitalization evaporation. R1 proved two things: reasoning capability does not require closed-source walls, and the most advanced AI does not require the most GPUs. On the track opened by o1, R1 was not a follower — it redefined the rules of the track.

---

## I. Technical Background

### 1.1 The birth of reasoning models: o1's legacy

On September 12, 2024, OpenAI released o1, inaugurating the "reasoning model" category.[^1] o1's core idea was to have the model perform internal chain-of-thought reasoning before answering, using additional inference time to plan, verify, and revise its thinking. AIME math competition scores leaped from GPT-4o's 12% to 74% — not a gradual improvement, but a sudden migration of capability from one domain to another (see *The Biography of o1*).

But o1 had a fundamental contradiction: **it used hidden chain-of-thought and premium pricing to turn itself into a luxury product.** o1-preview's output was priced at $60/million tokens — 4× that of GPT-4o.[^1] The chain-of-thought was deliberately hidden, and any attempt to view the reasoning process through jailbreaking would result in account bans. OpenAI's logic: the chain-of-thought is core IP, reasoning capability is a scarce resource, and scarce resources should be sold at premium prices.

Four months later, DeepSeek-R1 blew this logic apart with a single MIT license.

### 1.2 Test-time compute: a new scaling dimension

o1's success validated a new scaling dimension: **inference-time compute** (test-time compute). In August 2024, Charlie Snell et al. published a paper systematically arguing that investing more computation during the inference phase could significantly improve effective performance without increasing model size.[^2]

o1 validated this theory through its product. But o1's training method — SFT + RLHF, first using human-annotated reasoning examples for supervised fine-tuning, then optimizing with reinforcement learning — still depended on expensive human-annotated data. The industry's default assumption was that reasoning capability needed to be "taught" by humans first, then "reinforced" by RL.

DeepSeek-R1 broke this assumption.

---

## II. Core Events

### 2.1 Release (2025-01-20)

**January 20, 2025** — DeepSeek officially released its reasoning model R1, simultaneously open-sourcing the model weights under the MIT license.[^3]

R1 was built on DeepSeek-V3-Base (MoE architecture, 671B total parameters / 37B activated), specialized for math, code, and logical reasoning tasks. Previously, DeepSeek had released a preview version, R1-Lite, on November 20, 2024, demonstrating the initial potential of reinforcement learning for reasoning tasks.[^3]

R1's release date coincided with the Trump inauguration — a detail noted by multiple media outlets but quickly drowned out in technical discussions. What was remembered were R1's three labels: **MIT open-source, performance matching o1, and API pricing at only 3% of o1's**.

### 2.2 R1-Zero: pure RL forges reasoning

R1's core technical trajectory proceeded in two steps. The first was R1-Zero — an experiment that was not completed but held the greatest historical significance.

**DeepSeek-R1-Zero** completely bypassed supervised fine-tuning (SFT), trained solely with GRPO (Group Relative Policy Optimization) reinforcement learning. All rewards were rule-based — accuracy rewards (whether math answers are correct, whether code passes tests) and format rewards (whether the chain-of-thought is placed within `<think>...</think>` tags). No model-based reward functions were used.[^3]

The experiment's premise was radical: **reasoning capability does not need to be taught by humans first — it can be directly "coerced" by RL.** The traditional training paradigm was SFT → RLHF: first feed high-quality human-annotated reasoning examples so the model "learns" what good reasoning looks like, then fine-tune with RL. R1-Zero completely eliminated the first step.

The results were unexpected. Pure RL training catalyzed **emergent behavior** in the model: during training, the model spontaneously learned "aha moments" — on a given problem, it would suddenly pause, re-evaluate its reasoning process in human-readable language, and actively allocate more thinking time.[^3] The DeepSeek team wrote in the paper: "This was not programmed in but developed by the model through its interaction with the reinforcement learning environment."

Previously, emergent behavior we had seen was mostly benchmark score jumps — parameter count crosses a threshold and the model suddenly "can" solve a certain type of problem. R1-Zero's emergence was different: what emerged was a **behavior** — pausing, reflecting, rethinking. The philosophical weight of this lies in its implication: reasoning may not necessarily be taught; it can also be "coerced."

But R1-Zero also had clear deficiencies: poor output readability (obscure reasoning, mixed languages), and unstable initial RL training. It proved the feasibility of the pure RL path but was not yet suitable for direct product release.

### 2.3 R1: the cold-start + RL compromise

The second step was R1 itself — introducing cold-start SFT data (thousands of high-quality chain-of-thought examples) on top of R1-Zero, followed by RL training.[^3]

This compromise addressed R1-Zero's two problems: poor output readability and unstable initial RL training. The final model maintained reasoning capability while producing clearer, more user-friendly output.

Notably, R1's SFT data volume was small — thousands of entries, not tens or hundreds of thousands. This meant RL remained the primary source of reasoning capability, with SFT serving only as "lubricant" — making the RL-forged capabilities easier for humans to understand and use. This formed a subtle contrast with o1's approach: o1's reasoning capability came mainly from the SFT + RLHF combination, while R1's reasoning capability came mainly from RL, with SFT merely as icing on the cake.

### 2.4 GRPO: a more efficient RL algorithm

R1's GRPO (Group Relative Policy Optimization) is DeepSeek's proprietary RL algorithm.[^3] Traditional RLHF uses PPO (Proximal Policy Optimization), which requires a separate reward model to evaluate output quality. GRPO's innovation: **no independent reward model needed.** Instead, outputs are evaluated through intra-group relative comparison — generating multiple candidate answers for the same question, ranking them within the group based on rule rewards (correct answer? correct format?), and directly optimizing the policy using ranking signals.

This design's efficiency advantage is significant. PPO requires maintaining three models (policy model, reference model, reward model), with large memory and compute overhead. GRPO requires only two (policy model, reference model), eliminating the reward model's overhead. At the 671B parameter scale, this saving means RL training can be completed on fewer GPUs.

### 2.5 Performance matching o1

R1 fully matched OpenAI o1 across multiple benchmarks:[^3]

| Benchmark | DeepSeek-R1 | R1-Zero | OpenAI o1-1217 |
|-----------|:--:|:--:|:--:|
| AIME 2024 | 79.8% | 71.0% | 79.2% |
| MATH-500 | 97.3% | — | 96.4% |
| Codeforces | 96.3%ile | — | 96.6%ile |
| SWE-bench Verified | 49.2% | — | 48.9% |

The meaning of these numbers is not "R1 is better than o1" — the two are in the same league, each winning some and losing others. The real meaning: **R1, with MIT open-source + 3% of the price, reached the level that o1 achieved with closed-source + $60/million tokens**.

### 2.6 MIT open-source: blowing open the walls

R1 was fully open-sourced under MIT license — weights, code, methods, including chain-of-thought outputs.[^3] Contrast with o1:[^1]

| Feature | DeepSeek-R1 | OpenAI o1 |
|---------|-------------|-----------|
| License | MIT (fully open) | Proprietary |
| Chain-of-thought | Fully public | Deliberately hidden |
| Model weights | Downloadable | Not downloadable |
| API price (output) | ¥16/million tokens | $60/million tokens |
| Local deployment | Yes (multi-GPU required) | No |

o1 deliberately hid its chain-of-thought and charged premium subscription fees. R1 gave an equivalently capable model to the world completely free and completely transparent. This contrast was not technical — it was philosophical. Should reasoning models be transparent or opaque? The answer ceased to be a rhetorical question at the moment R1 was released.

### 2.7 Distillation ecosystem

Upon release, R1 simultaneously launched 6 distilled smaller models (1.5B to 70B parameters, initialized from Qwen and Llama).[^3] Among them, the 32B and 70B models surpassed OpenAI o1-mini on multiple benchmarks.

This catalyzed a powerful reasoning model distillation ecosystem: developers could download R1 distilled models and run reasoning on their own hardware — no more API fees, no more rate limits. Reasoning capability went from "available only to big companies and paying users" to "available to anyone with a GPU."

The distillation ecosystem's impact was more profound than it appeared on the surface. It proved that reasoning capability can be "compressed" — a 70B distilled model could inherit most of the 671B model's reasoning capability. This opened the door for reasoning model deployment at the edge (phones, laptops, embedded devices).

### 2.8 Shockwave

**January 27, 2025** — DeepSeek surpassed ChatGPT to top the Apple App Store's free app chart in the United States.[^4]

On the same day, NVIDIA's stock plunged nearly 17%, with approximately $589 billion in market capitalization evaporating in a single day — the largest single-day loss in U.S. stock market history.[^5] The market feared not R1 itself but the fact it revealed: the most advanced AI does not necessarily need the most GPUs. Compute is not a moat.

Meta internally assembled four dedicated teams to study DeepSeek — focusing on cost reduction, training data, and model architecture restructuring respectively.[^6] Mark Zuckerberg announced AI spending exceeding $60 billion in 2025 — this response itself indicated the magnitude of R1's impact. OpenAI claimed to have evidence that DeepSeek used its proprietary model outputs to train R1 (model distillation allegations), which DeepSeek denied.[^7]

### 2.9 Aftermath

- **2025-05-28**: R1-0528 upgrade released; AIME 2025 accuracy jumped from 70% to 87.5%; average thinking length increased from ~12K to ~23K tokens.[^8]
- **2025-09-17**: R1 paper officially published in *Nature*, becoming one of the first large model papers to appear in Nature.[^7]
- **From 2025-02**: Government departments in Shenzhen, Beijing, Foshan, and other cities adopted DeepSeek; BMW, BYD, Dongfeng, Honda, and other automakers announced partnerships.[^9]

---

## III. Impact and Successors

### 3.1 The explosion of the reasoning model category

R1 proved that o1 was not the only form of reasoning model — reasoning models could be open-source, affordable, and let users see the chain-of-thought.

In the six months that followed, virtually every AI company in the world released its own reasoning model — validating the feasibility of the category o1 defined, and demonstrating that R1 redefined the category's rules. Major reasoning models included (see *The Biography of o1*):

- **Kimi K1.5** (2025-01): Moonshot AI's reasoning model, excelling on Chinese reasoning tasks
- **Claude 3.7 Sonnet** (2025-02): Anthropic's hybrid reasoning model, supporting switching between normal and extended thinking modes
- **Gemini 2.5 Pro** (2025-03): Google's reasoning model, integrated across all Google products
- **Qwen3-Thinker** (2025-04): Alibaba's reasoning model, leading on Chinese reasoning tasks

None of these models adopted o1's "hidden chain-of-thought" approach — R1's open-source transparent paradigm became the industry default.

### 3.2 The cultural significance of the "DeepSeek moment"

R1's impact transcended the technical community. The phrase "DeepSeek moment" was widely used by global mainstream media in early 2025 to describe an event where a Chinese AI company matched American frontier technology and disrupted industry expectations with its business model.

This cultural shock had two layers. The first was technical: a company less than two years old, with funding far smaller than OpenAI's, trained a reasoning model matching o1 at a cost of under $6 million. The second was geopolitical: within the narrative framework of U.S.-China AI competition, R1 became a symbol of "Chinese AI capability not inferior to America's" — regardless of whether this simplification was accurate.

### 3.3 Significance for the DeepSeek lineage

R1 was the turning point of the DeepSeek lineage from "price killer" to "paradigm challenger" (see *The House of DeepSeek*).[^10]

V2's MLA reduced inference costs to 1/100th of GPT-4's; V3 achieved GPT-4o-level performance with $5.6M in training costs — these were technical achievements but their impact was mainly limited to the AI industry. R1's MIT open-source release and $600 billion in market cap evaporation transformed DeepSeek from an industry-internal success story into a global public event.

From a technical trajectory perspective, R1's GRPO pure-RL training was the ultimate expression of the DeepSeek lineage's "efficiency first" philosophy — not just low training costs but also low alignment costs. Traditional RLHF requires expensive human-annotated data to train reward models; GRPO replaced human annotations with rule-based rewards, driving alignment costs toward zero. This was in the same vein as V2's MLA (low inference cost), V3's MTP + FP8 (low training cost) — each generation answering the same question: what other cost can be cut?

### 3.4 The long-term impact of distilled models

R1's distilled model ecosystem catalyzed an important byproduct: **the democratization of reasoning capability.**

Before R1, reasoning models were API services — users paid, platforms provided reasoning results. After R1, reasoning models were downloadable weights — developers could run 1.5B, 7B, 14B, 32B, 70B distilled models on their own hardware, completely offline, completely free. This meant reasoning capability could be embedded into any application — math tutoring on phones, code assistants on laptops, decision engines on embedded devices.

The long-term significance of this impact may be greater than R1 itself: **it transformed reasoning capability from a "cloud service" into a "local capability."** Just as SD transformed text-to-image from an API to a local tool, R1 transformed reasoning from an API to a local tool. Both "cloud-to-edge" migrations follow the same logic: open-source + distillation = capability sinking.

---

## Commentary

DeepSeek-R1 has two contributions — one major, one minor. The minor one is technical; the major one is ecological. But both deserve to be remembered.

**The minor one: pure RL forges reasoning capability.** R1-Zero completely bypassed SFT, starting directly from the base model, using GRPO reinforcement learning and pure rule-based rewards to forge reasoning capability. The "aha moments" that spontaneously emerged during the process — the model learning on its own to pause, re-evaluate, and rethink — were among the most striking emergent phenomena of the large model era. Previous emergent behavior involved jumps in numbers; this time what emerged was behavior itself. It suggests that reasoning may not necessarily be taught — it can also be "coerced."

**The major one: MIT open-source blew open the reasoning model walls.** If R1 had been just another closed-source high-priced API, it would have been merely a competitor to o1, not an earthquake. OpenAI o1 made reasoning models into luxury goods: invisible chain-of-thought, unaffordable pricing, model weights as a black box — an elegant closed loop of "capability scarcity → high premiums → compute investment → reinforcing barriers." R1 blew this loop apart with a single MIT license. Reasoning models transformed from luxury goods into public goods.

NVIDIA's $600 billion single-day evaporation — the market feared not R1 itself but the fact it revealed: the most advanced AI does not necessarily need the most GPUs. Compute is not a moat. The subsequent global wave of reasoning models — Kimi K1.5, Qwen3-Thinker, Claude extended thinking — was catalyzed by R1 in one way or another. It defined not just a model but a category. And the five words "open-source reasoning model" did not exist before January 20, 2025.

---

*This entry was compiled by the Endfield Industrial History Team: Silence (Lead Biographer).*

---

[^1]: OpenAI Blog, "Learning to Reason with LLMs", 2024-09-12. https://openai.com/index/learning-to-reason-with-llms/
[^2]: Snell et al., "Scaling LLM Test-Time Compute Optimally can be More Effective than Scaling Model Parameters", arXiv:2408.03314, 2024-08-06. https://arxiv.org/abs/2408.03314
[^3]: DeepSeek-AI et al., "DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning", arXiv:2501.12948, 2025-01-22. https://arxiv.org/abs/2501.12948
[^4]: The Paper (澎湃新闻), "DeepSeek surpasses ChatGPT, tops Apple US free app download chart", 2025-01-27. https://www.thepaper.cn/
[^5]: Wall Street CN (华尔街见闻), "NVIDIA market cap evaporates nearly $600 billion, largest single-day loss in US stock history", 2025-01-28. https://wallstreetcn.com/
[^6]: The Information / Stephanie Palazzolo, "Meta Scrambles After Chinese AI Equals Its Own, Upending Silicon Valley", 2025-01-27. https://www.theinformation.com/articles/meta-scrambles-after-chinese-ai-equals-its-own-upending-silicon-valley
[^7]: Elizabeth Gibney, "Secrets of DeepSeek AI model revealed in landmark paper", Nature, 2025-09-17. doi:10.1038/d41586-025-03015-6. https://doi.org/10.1038/d41586-025-03015-6
[^8]: HuggingFace, "deepseek-ai/DeepSeek-R1-0528", 2025-05-28. https://huggingface.co/deepseek-ai/DeepSeek-R1-0528
[^9]: Wikipedia, "DeepSeek-R1". https://zh.wikipedia.org/wiki/DeepSeek-R1
[^10]: DeepSeek Official Blog, "DeepSeek-R1 release, performance matching OpenAI o1 official version", 2025-01-20. https://api-docs.deepseek.com/zh-cn/news/news250120
