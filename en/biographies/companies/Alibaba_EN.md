# The Annals of Alibaba

> Alibaba is China's largest e-commerce company and the world's third-largest cloud service provider. But in the era of large language models, it chose a path starkly different from Baidu's — not to build the strongest model, but to let open-source and cloud ecosystems work in tandem. From the release of Tongyi Qianwen to the open-source iterations of the Qwen series, and then to Alibaba Cloud's AI transformation — Alibaba's decade in AI is a true record of how an e-commerce giant reinvented itself through cloud and open-source.

---

## I. Overview

Alibaba's role in the history of large language models is not the most dazzling, but it may be **the most pragmatic**. When Baidu rushed to release ERNIE Bot in March 2023, Alibaba launched Tongyi Qianwen a month later — not racing to be first, but laying deeper foundations. Alibaba's strategy was clear from day one: **a dual-track approach of open-source plus cloud ecosystem**. The open-source Qwen series accumulated over a hundred million downloads on HuggingFace, establishing a global developer ecosystem; the closed-source Tongyi Qianwen was deeply integrated into Alibaba Cloud's enterprise services and consumer products such as DingTalk and Taobao.

This "walking on two legs" strategy gave Alibaba unique resilience in the Chinese LLM competition from 2023 to 2026. While Baidu's closed-source strategy came under pressure from DeepSeek's impact, and ByteDance's Doubao was locked in fierce competition on the consumer front, Alibaba built solid foundations in both the enterprise market and the open-source community.[^1]

---

## II. Founding and Early Years

### 2.1 From e-commerce to cloud computing: The birth of Alibaba Cloud

Alibaba's AI story begins with Alibaba Cloud.

In September 2009, Alibaba Cloud was officially established — three years after AWS, but the earliest cloud computing practice in China. Dr. Wang Jian, then Alibaba's CTO, overruled widespread opposition and insisted on building an in-house cloud computing operating system called "Apsara." This decision was questioned by many at the time, but proved to be one of Alibaba's most prescient strategic investments a decade later.[^2]

Alibaba Cloud's growth was remarkable:
- **2013**: The Apsara cluster reached 5,000 machines, placing its processing capacity among the world's top
- **2015**: Alibaba Cloud began internationalization, opening nodes in Hong Kong, Singapore, the United States, and beyond
- **2017**: Became the global cloud service provider for the Olympic Games
- **2019**: Rose to the top three in the global cloud services market (behind only AWS and Azure)
- **2022**: Annual revenue exceeded 100 billion RMB, making it China's largest cloud service provider[^3]

Cloud computing provided both the infrastructure and the enterprise customer base for Alibaba's AI strategy. When the LLM era arrived, Alibaba Cloud was a natural carrier for the Chinese market — it had computing power, customers, and distribution channels.

### 2.2 DAMO Academy: Institutionalizing AI research

In October 2017, Alibaba established **DAMO Academy** — an institution dedicated to fundamental scientific research, with an initial investment of 100 billion RMB.[^4]

The founding of DAMO Academy marked Alibaba's institutional commitment to AI R&D. Before this, Alibaba's AI research was scattered across various business lines (Taobao recommendations, Ant Financial risk control, Cainiao logistics). DAMO Academy elevated AI research from "business support" to "strategic investment."

DAMO Academy's key outputs in NLP included:
- **2019**: Released StructBERT — incorporating linguistic structure information on top of BERT
- **2020**: Released Plug — a knowledge-enhanced pre-training model
- **2021**: Released M6 — a trillion-parameter multimodal model
- **2022**: Released OFA (One For All) — a unified multi-task multimodal model

These research efforts accumulated the technical reserves that would later power Tongyi Qianwen and the Qwen series. (See "DAMO Academy — A Collective Biography")

---

## III. Key Events

| Date | Event | Significance |
|------|-------|-------------|
| 2023-04-11 | Tongyi Qianwen released | Alibaba's first ChatGPT-like product |
| 2023-08 | Qwen series open-sourced (7B/14B/72B) | First large-scale open-source LLM from a Chinese internet giant |
| 2024-06 | Qwen 2 released | Major performance leap, entering the top tier of global open-source models |
| 2024-09 | Qwen 2.5 released | Covering the full spectrum from 0.5B to 72B |
| 2025-01 | Alibaba Cloud launches "Bailian" platform | Enterprise-grade LLM development platform |
| 2025-04 | Qwen 3 released | GPT-4-level capabilities |

### 3.1 Tongyi Qianwen release (2023-04-11): A late entry

On April 11, 2023, Alibaba Cloud officially released **Tongyi Qianwen** at its Beijing summit. CEO Daniel Zhang announced that "all Alibaba products will integrate LLMs in the future."[^5]

Tongyi Qianwen was released nearly a month after ERNIE Bot — in the race for "China's first ChatGPT-like product," Alibaba lost the first-mover advantage. But Alibaba's strategy was not about being first; it was about **building the foundation**. Tongyi Qianwen was never designed as a standalone consumer product, but as AI infrastructure for the entire Alibaba ecosystem:

- **DingTalk**: Integrated Tongyi Qianwen for intelligent assistants, document generation, meeting minutes, and more
- **Taobao**: Adopted LLM capabilities to optimize search, recommendations, and customer service
- **Amap (Gaode Maps)**: Integrated LLMs for intelligent route planning and voice interaction
- **Tmall Genie**: Upgraded to an AI-native assistant

This strategy stood in sharp contrast to Baidu's approach: Baidu's ERNIE Bot was a standalone "star product," while Alibaba's Tongyi Qianwen served as **the "invisible engine" for all products**. (See "Chronicles: April 2023")

### 3.2 Qwen open-source series (2023-08): The dawn of dual-track

In August 2023, Alibaba released the **Qwen** open-source series — including base and chat models at three scales: 7B, 14B, and 72B.[^6]

This was the first large-scale open-source LLM initiative from a Chinese internet giant. Alibaba's open-source strategy bore a strong resemblance to Meta's Llama: build a developer ecosystem through open-source, improve models through community feedback, and drive cloud service revenue through the brand effect of open-source models.

The significance of the Qwen open-source series manifested in three dimensions:
- **Technical transparency**: Model weights, training code, and technical reports were all publicly available, subject to community scrutiny
- **Ecosystem compatibility**: Built on PyTorch and HuggingFace, reducing developer migration costs
- **Permissive licensing**: Apache 2.0 license, allowing commercial use and secondary development

By 2025, the Qwen series had accumulated over 100 million downloads on HuggingFace, becoming one of the most downloaded Chinese open-source model series globally.[^7] The open-source community's contributions in turn enhanced Qwen's capabilities — community fine-tuning, adaptations, and evaluation data were used by Alibaba to improve subsequent versions. (See "The Qwen Family")

### 3.3 Qwen 2 (2024-06): A quantum leap in performance

In June 2024, Alibaba released the **Qwen 2** series — including models at 0.5B, 1.5B, 7B, 57B (MoE), and 72B scales.[^8]

The release of Qwen 2 marked Alibaba's entry into the top tier of global open-source model capabilities. Across multiple benchmarks, Qwen 2-72B outperformed Llama 3-70B, with comprehensive superiority on Chinese-language tasks. Qwen 2's technical improvements included:
- **Longer context**: Supporting 128K context windows
- **Multilingual support**: In addition to Chinese and English, supporting 27 languages
- **More efficient training**: Introducing GQA (Grouped Query Attention) and YaRN positional encoding

The release of Qwen 2 reshaped the competitive landscape of global open-source LLMs. Before this, Meta's Llama series was the undisputed benchmark for open-source LLMs; after Qwen 2, the title of "world's strongest open-source LLM" alternated between Llama and Qwen.

### 3.4 Qwen 2.5 (2024-09): Full-spectrum coverage

In September 2024, Alibaba released the **Qwen 2.5** series — the most comprehensive update to the Qwen lineup, covering the complete scale spectrum from 0.5B to 72B, including base models, chat models, code models, math models, and other variants.[^9]

Key innovations of Qwen 2.5:
- **Qwen 2.5-Coder**: Specifically optimized for code tasks, performing exceptionally on coding benchmarks such as HumanEval
- **Qwen 2.5-Math**: Specifically optimized for mathematical reasoning, achieving leading performance on benchmarks such as MATH
- **More efficient MoE architecture**: Qwen 2.5-72B adopted a Mixture of Experts (MoE) architecture, maintaining performance while reducing inference costs

The release of Qwen 2.5 gave Alibaba a clear advantage in the "open-source LLM full-family" track. From edge devices (0.5B) to server-side (72B), from general conversation to code generation to mathematical reasoning — Qwen 2.5 covered nearly every mainstream application scenario. This "full coverage" strategy differentiated it from Meta's Llama (which focused primarily on the 7B–70B range).

### 3.5 Qwen 3 (2025-04): Competing at the frontier

In April 2025, Alibaba released the **Qwen 3** series — the first time Alibaba explicitly benchmarked its models against GPT-4-level capabilities.[^10]

Key innovations of Qwen 3 included:
- **Chain-of-Thought reasoning**: Supporting CoT reasoning mode, with significant improvements on complex reasoning tasks
- **Multimodal fusion**: Natively supporting multimodal input and output across text, images, audio, and video
- **Longer context**: Supporting 256K context windows
- **More efficient training**: Introducing new training strategies to achieve better performance with less data

The release of Qwen 3 marked Alibaba's transformation from "follower" to "contender" in the open-source LLM space. Previously, the Qwen series was positioned as "the best open-source choice for Chinese scenarios"; after Qwen 3, its positioning shifted to "one of the world's strongest open-source LLMs" — competing head-to-head with Llama 4 and DeepSeek V3.

### 3.6 Alibaba Cloud's "Bailian" platform (2025-01): Enterprise AI infrastructure

In January 2025, Alibaba Cloud launched the **"Bailian" platform** — an enterprise-oriented LLM development and deployment platform.[^11]

The Bailian platform's positioning was similar to Amazon Bedrock: enabling enterprises to quickly access various LLMs, fine-tune them with private data, and deploy them in secure environments. Bailian supports multiple model families including the Qwen series, Llama series, and ChatGLM series, providing a unified API interface.

The strategic significance of the Bailian platform lay in: **deeply binding Alibaba's open-source models with cloud services**. Enterprises could trial Qwen open-source models for free on the platform; when they needed better performance or more customization, they could upgrade to the closed-source Tongyi Qianwen or purchase Alibaba Cloud computing resources. This "open-source for lead generation + cloud services for monetization" model bore a striking resemblance to AWS's Bedrock + Anthropic investment approach. (See "Chronicles: January 2025")

---

## IV. Rise and Fall Analysis

### Phase One: The e-commerce giant's AI accumulation (2009–2022)

**What happened**: Alibaba Cloud was established (2009); DAMO Academy was founded (2017); technical reserves accumulated in NLP, multimodal, search, recommendation, and other fields.

**Why it happened**: Alibaba's e-commerce business inherently required AI technology — product recommendations, search ranking, ad placement, customer service bots, logistics optimization — every link in the chain was an AI application scenario. Alibaba Cloud's founding provided the computing infrastructure for AI R&D, and DAMO Academy's establishment provided institutional support.

**What it left behind**: The infrastructure of the world's third-largest cloud service provider; DAMO Academy's accumulated research in NLP and multimodal AI; cloud computing experience serving millions of enterprise customers. These assets became the cornerstone of Alibaba's AI strategy in the LLM era.

### Phase Two: The LLM explosion and dual-track strategy (2023–2024)

**What happened**: Tongyi Qianwen released (2023-04); Qwen series open-sourced (2023-08); Qwen 2 released (2024-06); Qwen 2.5 released (2024-09).

**Why it happened**: The shock of ChatGPT made every Chinese internet company realize the importance of LLMs. Alibaba chose a dual-track strategy of "open-source + cloud ecosystem" — building a developer ecosystem through open-source, and monetizing through cloud services.

**What it left behind**: The Qwen series became one of the most downloaded Chinese open-source LLMs globally; Alibaba Cloud's enterprise customer base provided channels for LLM commercialization; the dual-track strategy demonstrated resilience in the face of DeepSeek's disruption.

### Phase Three: Open-source competition and frontier pursuit (2025–present)

**What happened**: Qwen 3 released (2025-04); Bailian platform launched (2025-01); Alibaba transformed from follower to contender in the open-source LLM space.

**Why it happened**: The open-source trend in LLMs became irreversible. As DeepSeek open-sourced under MIT license and Meta drove the open-source ecosystem with Llama, Alibaba's open-source strategy received external validation. Meanwhile, Alibaba Cloud's revenue growth and enterprise customer demand accelerated LLM commercialization.

**Lingering questions**: Can the Qwen series sustain GPT-4-level capabilities? Can Alibaba's "open-source lead generation + cloud services monetization" model endure under competition from DeepSeek and ByteDance? When open-source model capabilities converge toward homogeneity, where will Alibaba's differentiation lie?

---

## Appraisal

Alibaba's decade in AI can be summarized in one sentence: **Not racing for first, but striving for resilience.**

When Baidu rushed to release ERNIE Bot in March 2023, Alibaba launched Tongyi Qianwen a month later — not racing to be first, but laying deeper foundations. When Baidu chose a fully closed-source stack, Alibaba chose the dual track of open-source plus cloud ecosystem — not seeking to be the strongest, but the broadest. When DeepSeek open-sourced under MIT license in January 2025, Alibaba did not panic — because the Qwen series had been under Apache 2.0 license from day one.

Behind Alibaba's strategy lies its organizational DNA — it is fundamentally an "infrastructure + platform" company. From e-commerce to logistics to cloud computing, its core competency is "connecting supply and demand." In the LLM era, this DNA manifests as: open-source connecting developers, cloud services connecting enterprise customers, and Tongyi Qianwen connecting consumer products. Three lines in parallel, none needing to be the strongest individually, but together forming the most stable foundation in the Chinese LLM ecosystem.

But this strategy also comes at a cost. Alibaba has always been perceived as half a step behind on "core model capabilities" — while GPT-4, Claude 3, and DeepSeek R1 compete fiercely on benchmarks, the Qwen series is positioned more as "a good enough open-source choice" rather than "the strongest model." In the consumer market, Tongyi Qianwen's product presence is far less visible than ByteDance's Doubao or Baidu's ERNIE Bot. Whether Alibaba's strengths in enterprise and open-source communities are sufficient to compensate for its weakness on the consumer front remains an open question.

From Wang Jian to Daniel Zhang to Eddie Wu, Alibaba's AI story is the story of "how a platform company finds its place in the model era." It proves one thing: **in the LLM competition, resilience matters more than speed**. Model capabilities iterate, open-source trends toward homogeneity, but the infrastructure of the world's third-largest cloud service provider, the distribution channels serving millions of enterprise customers, and an open-source model series downloaded over a hundred million times on HuggingFace — these are assets that any competitor would need years to replicate.

---

*This biography was compiled by the Endfield Industrial Historian Team: Silence (lead writer).*

---

[^1]: Alibaba Cloud Q4 2024 Earnings Call, 2025-02. https://www.alibabagroup.com/en-US/ir-financial-reports-quarterly-results
[^2]: Wang Jian, *Online*, 2016.
[^3]: Alibaba Group, 2022 Annual Report, 2023. https://www.alibabagroup.com/en-US/ir-financial-reports-annual-results
[^4]: Alibaba, "DAMO Academy Established," 2017-10-11. https://damo.alibaba.com/
[^5]: The Paper, "All Alibaba Products Will Integrate Tongyi Qianwen; Platform Will Open to Third-Party LLMs," 2023-04-11. https://www.thepaper.cn/newsDetail_forward_22651605
[^6]: Alibaba Cloud, "Tongyi Qianwen Open-Sourced," 2023-08. https://qwenlm.github.io/
[^7]: HuggingFace, Qwen Series Download Statistics, 2025. https://huggingface.co/Qwen
[^8]: Alibaba Cloud, "Qwen 2 Released," 2024-06. https://qwenlm.github.io/blog/qwen2/
[^9]: Alibaba Cloud, "Qwen 2.5 Released," 2024-09. https://qwenlm.github.io/blog/qwen2.5/
[^10]: Alibaba Cloud, "Qwen 3 Released," 2025-04. https://qwenlm.github.io/blog/qwen3/
[^11]: Alibaba Cloud, "Bailian Platform Launched," 2025-01. https://bailian.console.aliyun.com/
