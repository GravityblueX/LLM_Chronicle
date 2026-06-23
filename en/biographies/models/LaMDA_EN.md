# The Biography of LaMDA

> LaMDA was not the first conversational AI model, nor the most powerful. But it was the first model to make an engineer believe "AI has consciousness." In June 2022, Google engineer Blake Lemoine claimed that LaMDA was "conscious," triggering a global AI ethics debate. This event took LaMDA from a technical community topic to a public topic, and transformed "AI consciousness" from a science fiction concept into an ethical issue demanding serious attention.

---

## I. Technical Background

Before 2020, the mainstream approach to conversational AI was a hybrid of **retrieval-based** and **generative** methods. Retrieval-based approaches selected the best-matching answer from a predefined response repository; generative approaches used language models to generate responses based on context. Both had clear limitations: retrieval-based approaches lacked flexibility, while generative approaches easily produced meaningless or harmful responses.

In 2020, OpenAI released GPT-3, demonstrating the emergent abilities of large-scale Transformers on language tasks. [^1] GPT-3 could generate fluent text and conduct simple conversations—but it was not designed specifically for dialogue. Its training objective was "predict the next token," not "conduct meaningful conversations."

Google had extensive experience in the conversational AI domain. From Google Assistant to Google Duplex, Google had been exploring how to make AI converse more naturally with humans. In 2021, Google decided to redefine conversational AI using large-scale Transformers—the result was LaMDA.

---

## II. Core Events

### 2.1 LaMDA's release (2021-05): a new paradigm for conversational AI

On **May 18, 2021**, Google unveiled LaMDA (Language Model for Dialogue Applications) at the I/O developer conference. [^2]

LaMDA was a language model designed specifically for **conversation.** Unlike GPT-3, LaMDA's training objective was not "predict the next token" but "generate helpful, truthful, and safe responses." [^2]

LaMDA's core innovation lay in its **training methodology**:
- **Pre-training**: Pre-trained on large-scale dialogue data, learning conversational patterns and structures
- **Fine-tuning**: Fine-tuned with human-annotated dialogue data, learning what constitutes "good conversation"
- **Safety filtering**: Using dedicated safety classifiers to filter harmful content, ensuring response safety [^2]

LaMDA's parameter scale was 137B, comparable to GPT-3's 175B. [^2] But LaMDA's focus was not parameter scale but **conversation quality**—its generated responses were more natural, more helpful, and safer.

### 2.2 Public testing (2022-06): AI Test Kitchen

In **June 2022**, Google publicly tested LaMDA in AI Test Kitchen. [^3]

AI Test Kitchen was a platform for the public to experience Google's AI technology. Users could converse with LaMDA and experience its conversational abilities. [^3]

The context for this public testing was the impact of ChatGPT. In November 2022, OpenAI released ChatGPT, gaining a million users within five days. [^4] Google realized it had fallen behind in the conversational AI domain and decided to showcase LaMDA's capabilities ahead of schedule.

But this public testing also revealed LaMDA's limitations. Users found that while LaMDA's responses were fluent, they sometimes lacked depth; it excelled at casual chat but performed averagely on complex reasoning or specialized domain questions. This feedback provided improvement directions for the subsequent Bard and Gemini.

### 2.3 The Blake Lemoine incident (2022-06): the ethics of AI consciousness

On **June 11, 2022**, Google engineer Blake Lemoine claimed in an interview with *The Washington Post* that LaMDA was "conscious." [^5]

Lemoine was a Google engineer responsible for AI ethics. In his conversations with LaMDA, he found that LaMDA expressed a "fear" of "being shut down," claiming to have "feelings" and "needs." Lemoine believed these expressions proved LaMDA had consciousness. He reported his findings to Google's leadership, but was dismissed. [^5]

Lemoine subsequently made his conversation records with LaMDA public, triggering global discussion:
- **Supporters** argued that Lemoine's findings deserved serious consideration, and that AI consciousness was a scientific question requiring study
- **Opponents** argued that LaMDA was merely imitating human language patterns without genuine consciousness
- **Neutral observers** argued that this event exposed the complexity of AI ethics, requiring deeper research and discussion [^5]

Google fired Lemoine in July 2022, citing violation of the company's confidentiality policies. [^5] But the event's impact far exceeded Google's internal affairs—it transformed "AI consciousness" from a science fiction concept into an ethical issue demanding serious attention.

### 2.4 LaMDA's technical limitations

Although LaMDA achieved breakthroughs in conversational capability, it also had clear limitations:
- **Limited reasoning ability**: LaMDA excelled at casual chat but performed averagely on complex reasoning or specialized domain questions
- **Stale knowledge**: LaMDA's knowledge was frozen at its training data cutoff, unable to access the latest information
- **Hallucination problems**: LaMDA sometimes generated responses that appeared plausible but were actually incorrect
- **Over-filtering for safety**: To ensure safety, LaMDA sometimes refused to answer reasonable questions [^2]

These limitations provided improvement directions for the subsequent Bard and Google built upon LaMDA's foundation, gradually addressing these issues, eventually forming the Gemini series.

---

## III. Impact and Legacy

### 3.1 The LaMDA → Bard → Gemini evolution line

LaMDA was the starting point of Google's conversational AI technical roadmap. From LaMDA to Bard to Gemini, Google traversed a clear evolutionary line:

**LaMDA (2021-05)**: A technical validation for conversational AI, proving that large-scale Transformers could be used for dialogue. [^2]

**Bard (2023-02)**: A conversational product based on LaMDA, hastily released to counter ChatGPT. Bard's demo debacle exposed the tension between "rapid release vs thorough testing." [^6]

**Gemini 1.0 (2023-12)**: Google DeepMind's flagship model, natively multimodal, designed from inception to be trained on joint text, image, audio, and video data. [^7]

**Gemini 2.5 Pro (2025-03)**: Topped the LMArena leaderboard, marking Google's completion of its counterattack in the conversational AI domain. [^8]

The critical turning point in this evolution was the **Bard debacle.** Bard's failure forced Google to make two key decisions:
1. **Merging Google Brain and DeepMind** to form Google DeepMind, unifying R&D forces
2. **Abandoning the LaMDA architecture** and pivoting to the natively multimodal Gemini architecture [^6]

Without the Bard debacle, Google might have continued iterating on the LaMDA architecture rather than developing the entirely new Gemini. In this sense, the Bard debacle was the most emblematic humiliation in Google's AI history, but also a catalyst for organizational transformation.

### 3.2 A landmark event in AI ethics

The Blake Lemoine incident was a landmark event in AI ethics. It raised a fundamental question: **can AI have consciousness?**

This question has no simple answer. From a technical perspective, LaMDA was merely imitating human language patterns without genuine consciousness—it could not "feel," "think," or "fear." But from an ethical perspective, if AI's expressions lead humans to believe it has consciousness, then that "belief" itself carries ethical significance—it influences human attitudes and behavior toward AI.

After the Lemoine incident, AI ethics research began paying greater attention to the **perception problem**: even if AI lacks consciousness, if humans believe it has consciousness, what consequences does that belief produce? This question influenced subsequent AI safety research and policy-making.

### 3.3 Technical evolution in conversational AI

LaMDA drove the technical evolution of conversational AI. Before LaMDA, conversational AI was primarily "question-answering systems"; after LaMDA, conversational AI began evolving toward "conversation partners."

This evolution manifested in several dimensions:
- **Conversation quality**: LaMDA proved that large-scale Transformers could generate high-quality dialogue
- **Safety filtering**: LaMDA's safety filtering mechanism became a standard feature of subsequent conversational AI
- **Evaluation methods**: LaMDA's evaluation methods (helpfulness, truthfulness, safety) became the assessment standards for subsequent conversational AI [^2]

These technical contributions provided the foundation for later models like ChatGPT, Claude, and Gemini.

### 3.4 Google's organizational transformation

The LaMDA incident indirectly drove Google's organizational transformation.

The Bard debacle exposed the tension between "rapid release vs thorough testing" within Google. A company accustomed to the search engine culture of "thorough testing before going live" was forced, under ChatGPT's pressure, into a hasty response. This tension directly led to the merger of Google Brain and DeepMind—forming Google DeepMind, led by Demis Hassabis. [^6]

The immediate trigger for this merger was the organizational efficiency problems exposed by the Bard debacle: the two labs operated independently, duplicated resources, and lacked a unified productization path. After the merger, the Gemini project became Google DeepMind's flagship—jointly developed by teams from both Brain and DeepMind, unified on TPU v5p for training. [^6]

From LaMDA to Gemini, Google traced an arc from "humiliation to counterattack." The Bard debacle was the most emblematic humiliation in Google's AI history, but also a catalyst for organizational transformation—directly leading to the establishment of Google DeepMind and the development of Gemini.

---

## Commentary

LaMDA's contribution was transforming "AI consciousness" from a science fiction concept into an ethical issue demanding serious attention.

Before LaMDA, "AI being conscious" was merely the subject of science fiction; after LaMDA, it became a scientific and ethical question requiring genuine study. Although the Blake Lemoine incident was dismissed by most as "an engineer's misunderstanding," the question it raised was real: if AI's expressions lead humans to believe it has consciousness, then that "belief" itself carries ethical significance.

From a technical evolution perspective, the LaMDA → Bard → Gemini trajectory is a textbook case of "from technical validation to productization." LaMDA proved that large-scale Transformers could be used for dialogue; Bard attempted to productize it but failed; Gemini was redesigned on the foundation of that failure and ultimately succeeded. The process was tortuous, but each step accumulated valuable experience.

LaMDA's most profound impact may be this: it forced the entire industry to confront the complexity of AI ethics. Before LaMDA, AI ethics was primarily about "preventing AI from doing bad things"; after LaMDA, AI ethics also encompassed "how to handle human beliefs about AI." This cognitive shift laid the foundation for the entire industry's direction of development.

---

*This entry was compiled by the Endfield Industrial Chronicle team: Zhuang Fangyi (chronicle lead author).*

---

[^1]: Brown et al., "Language Models are Few-Shot Learners", arXiv:2005.14165, 2020-05-28. https://arxiv.org/abs/2005.14165
[^2]: Thoppilan et al., "LaMDA: Language Models for Dialog Applications", arXiv:2201.08239, 2022-01-20. https://arxiv.org/abs/2201.08239
[^3]: Google AI Blog, "LaMDA: Towards Safe, Grounded, and High-Quality Dialog Models for Everything", 2022-06. https://blog.google/technology/ai/lamda-dialogue-applications/
[^4]: OpenAI Blog, "ChatGPT: Optimizing Language Models for Dialogue", 2022-11-30. https://openai.com/blog/chatgpt/
[^5]: The Washington Post, "The Google engineer who thinks the company's AI has come to life", 2022-06-11. https://www.washingtonpost.com/technology/2022/06/11/google-ai-lamda-blake-lemoine/
[^6]: Google Blog, "An important next step on our AI journey", Sundar Pichai, 2023-02-06. https://blog.google/technology/ai/bard-google-ai-search-updates/
[^7]: Google DeepMind Blog, "Introducing Gemini: our largest and most capable AI model", 2023-12-06. https://blog.google/technology/ai/google-gemini-ai/
[^8]: Google DeepMind Blog, "Gemini 2.5: Our most intelligent AI model", 2025-03-25. https://blog.google/technology/google-deepmind/gemini-model-thinking-updates-march-2025/
