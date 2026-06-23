# The Biography of GPT-4o

> GPT-4o is OpenAI's natively multimodal model released in May 2024. The "o" stands for "omni"—text, images, and audio processed end-to-end within a single neural network, eliminating the need for a "convert-to-text-first-then-understand" pipeline. A 320-millisecond voice latency crossed the "naturalness threshold" of human-machine conversation, and the decision to make it freely available brought GPT-4-level capability to every user for the first time. It did not raise the capability ceiling, but it made existing capabilities useful to everyone.

---

## I. Technical Background

GPT-4 (2023-03) defined the "frontier" standard, but its multimodality was a "half-finished product"—it could only read images, not listen to or produce speech. Users' voice interactions with GPT-4 required a three-stage pipeline: speech → text (ASR) → GPT-4 processing → text → speech (TTS). This pipeline had three fatal flaws:

**First, latency.** The end-to-end latency of the three-stage pipeline ranged from 2.8 to 5.4 seconds—after the user finished speaking, they waited three to five seconds for a response. This far exceeded the natural rhythm of human conversation (average 200–500 milliseconds), keeping voice interaction perpetually at the level of "issuing commands to a machine" rather than "talking to a person."

**Second, information loss.** Tone, emotion, pauses, background sounds in audio—information critical to understanding human intent—was entirely lost during ASR transcription to text. The model could only read the words, missing everything between the lines.

**Third, cost.** The three-stage pipeline required three independent models working together—an ASR model, a language model, and a TTS model—each with its own inference cost and deployment complexity. This made high-quality voice interaction difficult to scale.

By early 2024, the industry was standing at the doorstep of "end-to-end multimodal." Google's Gemini 1.0 (2023-12) claimed to be "multimodal by design," but its actual product still relied on pipelines for audio and video processing. OpenAI needed a model that truly connected all modalities—not shortening the pipeline, but dismantling it.

---

## II. Core Innovations

### 2.1 Native multimodality: dismantling the pipeline

GPT-4o's core technical breakthrough was its **end-to-end multimodal architecture**—a single neural network simultaneously processing text, image, and audio inputs, and generating text, image, and audio outputs. [^1]

This was fundamentally different from GPT-4's "visual encoder + language model" concatenation architecture. GPT-4's image understanding relied on an independent visual encoder (reportedly a CLIP variant), which converted images into token sequences that were concatenated with text tokens and fed into the language model. GPT-4o transformed this "concatenation" into "fusion"—all modalities flowed through the same model, sharing the same attention mechanism.

Technical details were not disclosed, but external speculation suggests GPT-4o employed a **unified tokenization scheme**: text, image patches, and audio frames were all encoded into the same kind of token sequence, fed into a single Transformer. This design allowed the model to "see" images while "hearing" sounds, comprehending them holistically within the same context.

### 2.2 Real-time voice: the 320-millisecond threshold

GPT-4o's most stunning product experience was **real-time voice conversation**. Average response latency: 320 milliseconds—approaching the speed of human conversational response (average human reaction time is approximately 200–500 milliseconds). [^1]

The significance of 320 milliseconds lies not in technical difficulty—it lies in crossing the "naturalness threshold" of human conversation. Latency exceeding half a second feels like "talking to a machine"; latency below half a second feels like "talking to a person." GPT-4o achieved the latter.

More critically, GPT-4o's speech understanding was not "convert to text, then understand"—it directly perceived tone, emotion, pauses, and speaking-rate variations in the audio signal. This meant the model could:
- Sense whether the user was angry, excited, or confused
- Adjust response tone based on the user's emotions
- Understand role switches in multi-person conversations
- Handle background noise, music, and ambient sounds

The launch demo showcased: GPT-4o describing the scenery outside a window for a blind person, real-time translating a conversation between two people, and guiding step-by-step through a handwritten math problem from an image. These capabilities individually were not new, but integrating them into a "real-time conversation" experience produced a qualitative shift.

### 2.3 Free access: democratizing GPT-4-level capability

The most important announcement at GPT-4o's launch was not a technical upgrade, but a business model change: **GPT-4o was made available to free-tier users.** [^1]

Previously, GPT-4 had been an exclusive feature of the $20/month ChatGPT Plus subscription. GPT-4o broke down this paywall. The logic behind this decision: OpenAI needed to maintain competitiveness at the free tier. Google's Gemini was already free, Meta's Llama 3 was open-source and free, Claude had a free version—if OpenAI insisted on keeping GPT-4 behind a paywall, it would be gradually eroded in user scale.

From a business perspective, the "free GPT-4o + 5× usage limits for Plus users" model proved successful—it sustained free user growth while preserving the conversion logic for paid users. ChatGPT's user base doubled after GPT-4o's launch. [^2]

### 2.4 Voice mode controversy: the Scarlett Johansson incident

GPT-4o's voice mode triggered one of the most controversial events in OpenAI's history: the **Scarlett Johansson voice incident**.

In May 2024, when GPT-4o launched, its "Sky" voice in voice mode was widely perceived as strikingly similar to actress Scarlett Johansson's portrayal of the AI assistant Samantha in the film *Her* (2013). Johansson subsequently issued a statement saying OpenAI had contacted her in September 2023, requesting her to voice ChatGPT, but she declined. After GPT-4o's launch, she discovered that the "Sky" voice bore an "eerily similar" resemblance to hers and hired lawyers to demand that OpenAI stop using it. [^3]

OpenAI responded that the Sky voice came from a different professional voice actress and was not a clone of Johansson's voice. However, OpenAI suspended the use of the Sky voice after the controversy erupted. [^4]

The deeper issue of this incident was not "whether the voices sounded alike"—it was **where the boundary lies for AI systems replicating human identity**. If an AI's voice "sounds like" a celebrity but is technically not a voice clone of that celebrity, does that constitute infringement? If AI-generated images "look like" a particular artist's style but do not directly copy that artist's works, does that constitute plagiarism?

The Johansson incident was a microcosm of AI copyright disputes—it transformed "AI imitating humans" from a technical issue into a legal issue, from an ethical discussion into courtroom battles. This controversy continued to ferment throughout 2024–2025, affecting the product strategies and legal compliance of companies including OpenAI, Midjourney, and Stability AI.

---

## III. Impact and Legacy

### 3.1 Commercial impact: user base doubled

GPT-4o's free-access strategy directly drove explosive growth in ChatGPT's user base. OpenAI announced that after GPT-4o's launch, ChatGPT's weekly active users doubled from 100 million to 200 million. [^2]

This growth validated a key hypothesis: **free access is the strongest driver of growth.** GPT-4's paywall limited user scale—users willing to pay $20/month were a minority, but users willing to try for free was everyone. GPT-4o transformed GPT-4-level capability from a "paid privilege" into "public infrastructure," turning AI assistants from "toys for tech enthusiasts" into "tools for everyone."

### 3.2 Technical impact: end-to-end multimodal becomes the new standard

GPT-4o's end-to-end multimodal architecture redefined the technical standard for "frontier models." Subsequently released models—Gemini 2.0, Claude 4 series, Qwen3—are all evolving toward end-to-end multimodality. Pipeline-based multimodality (convert to text first, then process) is gradually becoming an "outdated architecture."

The deeper significance of this shift: AI models are transforming from "text processors" into "world understanders." A model that can simultaneously see, hear, speak, and write has a more complete understanding of the world than one that can only read. This "completeness" is not a number on a benchmark—it is a qualitative shift in user experience.

### 3.3 Industry impact: free access triggers a price war

GPT-4o's free access was one of the triggers for the AI industry's "price war." OpenAI offering GPT-4-level capability for free forced Google, Anthropic, and Meta to follow suit—not following meant falling behind in user scale.

This price war intensified throughout the second half of 2024:
- Google's Gemini offered free access
- Anthropic's Claude free tier enhanced its capabilities
- Meta's Llama 3.1 was open-source and free
- Chinese providers (Alibaba, Baidu, ByteDance, DeepSeek) slashed API prices to 1% of GPT-4's

By 2025, "free or near-free" had become the default pricing strategy for AI assistants. GPT-4o's free access was not charity—it was a strategic choice OpenAI had to make in the competition for user scale. But the consequence of this choice was permanent: the price of AI assistants would never return to the $20/month era.

### 3.4 Decline and absorption

GPT-4o's frontier advantage held for approximately six months. In December 2024, Gemini 2.0 Flash surpassed GPT-4o on multiple benchmarks; in early 2025, the Claude 4 series took the lead across coding and reasoning. By mid-2025, GPT-4o-level capability was no longer "frontier"—it had become the standard for all mid-tier and above models.

GPT-4o's legacy is not its position as "the strongest model"—that position belonged to others long ago. Its legacy is **the rules it changed**: end-to-end multimodal became the default, real-time voice became standard, free access became the growth engine. These rules remain in effect long after GPT-4o ceased to be the strongest.

---

## Commentary

GPT-4o's historical significance lies in simultaneously accomplishing two contradictory feats: **pushing interaction toward greater naturalness while driving the price to zero.**

On one hand, it pushed human-machine interaction to unprecedented naturalness—320-millisecond voice latency, end-to-end multimodal understanding, real-time emotion perception. These are not numbers on a benchmark—they are a qualitative shift in user experience. GPT-4o transformed "talking to AI" from "issuing commands to a machine" into "speaking with a person," directly driving global public discourse on "whether AI will replace human social interaction."

On the other hand, it pioneered the "free access" business model—liberating GPT-4-level capability from behind the $20/month paywall into public infrastructure available to everyone. This decision was not charity—it was a strategic choice OpenAI had to make in the competition for user scale. But the consequence of this choice was permanent: the price of AI assistants would never return to what it was.

The Scarlett Johansson voice incident revealed a deeper question: when AI can perfectly imitate a human's voice, style, and identity, where is the boundary between "imitation" and "replication"? This controversy continued to ferment throughout 2024–2025, affecting the product strategies and legal compliance of the entire AI industry. GPT-4o did not answer this question—it merely used 320 milliseconds of latency and a zero price tag to place the question before everyone.

GPT-4o was the first model to make "natural conversation" a daily commodity—billions of people speak with it every day, yet no one knows how large it actually is, how it was trained, or why it is sometimes brilliant and sometimes foolish. Whether this is liberation or dependence depends on which side you stand on. But regardless of which side, you cannot deny: GPT-4o changed the definition of "AI assistant"—and the new definition is still in effect.

---

*This entry was compiled by the Endfield Industrial Chronicle team: Zhuang Fangyi (lead author).*

---

[^1]: OpenAI Blog, "Hello GPT-4o", 2024-05-13. https://openai.com/research/hello-gpt-4o
[^2]: TechCrunch, "ChatGPT's weekly active users have doubled since November", 2024-08-29. https://techcrunch.com/2024/08/29/chatgpts-weekly-active-users-have-doubled-since-november/
[^3]: The Verge, "Scarlett Johansson says OpenAI copied her voice for ChatGPT", 2024-05-20. https://www.theverge.com/2024/5/20/24160599/scarlett-johansson-openai-chatgpt-sky-voice
[^4]: The Verge, "OpenAI pulls ChatGPT voice mode after Scarlett Johansson comparison", 2024-05-20. https://www.theverge.com/2024/5/20/24160599/scarlett-johansson-openai-chatgpt-sky-voice
