# Audio AI

> After text and images, audio was the last modality AI conquered. Speech recognition endured forty years of struggle; voice synthesis traveled a long road from mechanical concatenation to waveform generation; and music generation — a composite modality requiring simultaneous modeling of melody, harmony, rhythm, timbre, and vocals — did not truly enter public consciousness until late 2023. But once the breakthrough came, the speed was staggering: from Whisper's open-source release to Suno generating four-minute complete songs, it took less than 18 months. This treatise records the complete technical stack from speech recognition to music generation: who built what, released what, and changed what.

---

## I. Overview

The development of audio AI can be divided into three overlapping phases:

- **Speech recognition (ASR) → Whisper (2022)**: from HMM-GMM to end-to-end Transformer, OpenAI trained a single model covering 99 languages on 680,000 hours of weakly supervised data and open-sourced it under the MIT license — this was virtually the "Stable Diffusion moment" of speech.
- **Voice synthesis (TTS) → ElevenLabs/Bark (2023)**: voice cloning dropped from requiring hours of recording to seconds of samples, with synthesis quality approaching real human voices. Two tracks ran in parallel — the closed-source product track (ElevenLabs) and the open-source model track (Bark, XTTS, Fish Speech).
- **Music generation → Suno/Udio (2023–2024)**: from MusicLM's 30-second fragments to Suno V3's four-minute complete songs (with vocals), AI became for the first time not an "assisted creation tool" but one that "sings on its own." What followed was copyright litigation, industry panic, and the birth of the entirely new identity of "AI musician."

---

## II. Speech recognition: Whisper's overwhelming advantage

### 2.1 Release

**2022-09-21**, OpenAI released Whisper, a general-purpose speech recognition model based on a Transformer encoder-decoder architecture.[^1] On the same day, all model weights and code were open-sourced on GitHub under the MIT license.

Whisper's core idea was "large-scale weakly supervised pre-training": trained on 680,000 hours of multilingual, multitask supervised data, covering 99 languages. The dataset included not only professional speech recognition corpora but also diverse audio sources collected from the internet — giving it robustness to accents, background noise, and technical terminology that previous models lacked.

The model family included five scales — tiny, base, small, medium, and large (from 39M to 1,550M parameters) — allowing developers to choose based on hardware constraints. Most critically: **fully open-source, MIT licensed** — this was unprecedented in the speech recognition field. Previously, the strongest ASR systems (such as Google Cloud Speech-to-Text and Amazon Transcribe) were all closed-source APIs.[^2]

### 2.2 Technical impact

Whisper transformed the infrastructure layer of audio AI:

- **Downstream application explosion**: Whisper-based subtitle generation, meeting transcription, podcast-to-text, and video translation tools proliferated in 2023. The Whisper + GPT combination became the most popular "audio → text → understanding" pipeline.
- **Multilingual breakthrough**: Whisper's non-English recognition capabilities far exceeded all open-source alternatives at the time, directly driving the rapid development of Chinese, Japanese, Korean, and other non-English speech applications.
- **Faster distillation/optimization**: In 2023, Distil-Whisper, faster-whisper (CTranslate2), WhisperX, and other projects improved inference speed by 4–70x, enabling real-time speech recognition on consumer-grade hardware.[^3]

By 2024, Whisper had become one of the most popular open-source speech AI projects on GitHub and the de facto standard foundation for most speech applications.

---

## III. Voice synthesis: From cloning to "indistinguishable from human"

### 3.1 Background: From concatenative synthesis to end-to-end

Traditional TTS relied on concatenative or parametric synthesis, with voice banks typically requiring dozens of hours of professional recording. In 2016, WaveNet (DeepMind) first introduced autoregressive generative models into voice synthesis, pioneering the "end-to-end neural TTS" approach. Tacotron 2 (2017), FastSpeech (2019), VITS (2021) and other techniques progressively improved synthesis quality and speed.

But what truly brought voice synthesis to "human-indistinguishable" levels was the convergence of two forces in 2023: **large-scale pre-training** (akin to the LLM paradigm) and **zero-shot voice cloning** (requiring only seconds of reference audio).

### 3.2 ElevenLabs: The commercial benchmark of voice cloning

**2023-01**, ElevenLabs — co-founded by former Google ML engineer Piotr Dąbkowski and former Palantir strategist Mati Staniszewski — launched its beta platform. The core product was **voice cloning and synthesis** — users uploaded an audio sample of one minute or more, and could generate that speaker's natural voice on any text.[^4]

ElevenLabs' synthesis quality at launch far exceeded market expectations: natural emotional expression, realistic breathing and pauses, and support for 29 languages. In June 2023, the company completed a $19 million Series A at approximately $100 million valuation, led by a16z.[^5]

Between 2024 and 2025, ElevenLabs expanded from TTS to a full audio AI stack: dubbing, AI agent voice interaction (ElevenAgents), sound effects generation, and music generation (ElevenMusic, April 2026). In February 2026, it completed a $500 million Series D at $11 billion valuation.[^5]

ElevenLabs also raised deepfake concerns — its technology could be used to forge anyone's voice. The company responded through "voice verification" and watermarking technology, but regulatory challenges remain far from resolved.

### 3.3 Bark: Suno's open-source track

**2023-04-20**, the team then still called Suno released Bark on GitHub — a fully generative text-to-audio model under the MIT license.[^6]

Unlike traditional TTS, Bark did not work by "given phonemes → generate waveforms." Instead, it generated complete audio from scratch — including speech, music, background sound effects, and even non-verbal sounds (laughter, crying, sighing). This made it more like an "audio foundation model" than a TTS engine. Output quality was less stable than ElevenLabs, but its fully open-source, locally runnable, and commercially free characteristics rapidly drew community attention — Bark received thousands of stars on HuggingFace.

Bark was an important stepping stone for the Suno team on the path to music generation — it validated the technical feasibility of "transformer-based fully generative audio," laying the groundwork for subsequent Suno music model development.

### 3.4 Other open-source TTS

- **XTTS (Coqui AI)**: Released in 2023, supporting voice cloning in 17 languages with only 6 seconds of reference audio. Coqui later ceased operations; the XTTS community fork continues maintenance.
- **Fish Speech**: Released in 2024 by a Chinese team, focusing on Chinese voice synthesis quality; open-source.
- **Meta Voicebox** (paper released June 2023, weights not open-sourced): demonstrated TTS multi-task capabilities under the large model paradigm — voice editing, noise reduction, and cross-language style transfer.

---

## IV. Music generation: AI starts "singing"

The technical difficulty of music generation far exceeds that of speech recognition and synthesis. A song involves simultaneous modeling across multiple dimensions: melody (pitch sequence), harmony (chord progressions), rhythm (tempo and time signature), timbre (instrumental and vocal texture), structure (verse/chorus/bridge), and lyrics with vocal performance. Before 2023, "AI can produce audio fragments that sound like music" was already achievable, but "AI can produce a structurally complete song with vocals" remained science fiction.

### 4.1 MusicLM: Text-to-music icebreaker (January 2023)

**2023-01-27**, Google Research released the MusicLM paper — a model generating high-fidelity music from text descriptions. The paper's demo clips (30 seconds) first demonstrated the feasibility of "generating music from text": users wrote "a soothing jazz piece with a saxophone solo," and MusicLM generated corresponding music.[^7]

MusicLM used AudioLM's (Google 2022) multi-stage autoregressive framework, trained on 280,000 hours of music. The paper's key technical contribution was the MuLan joint embedding — mapping text descriptions and audio into a shared representation space, enabling the model to "understand" the correspondence between words and music.

**But MusicLM never released its weights.** Google, citing "copyright and responsible AI risks," only opened it to select users through AI Test Kitchen in May 2023. MusicLM's historical position is "tech demo, not product" — it proved the technical feasibility of text-to-music but never let the public actually use it.

### 4.2 MusicGen: Meta's open-source music model (June 2023)

**2023-06**, Meta released the AudioCraft framework, containing MusicGen — an open-source text-to-music generation model. MusicGen used a single-stage autoregressive Transformer + EnCodec audio tokenizer, trained on 20,000 hours of licensed music data. Unlike MusicLM, MusicGen open-sourced model weights and code under the MIT license, permitting commercial use.[^8]

MusicGen's open-source release triggered a community explosion: Stable Audio (Stability AI, September 2023), Riffusion (a spectrogram-based method leveraging Stable Diffusion), and other projects quickly followed. But all these models shared one common limitation: **no reliable vocals.** They could generate instrumental music and produce background tracks, but could not "sing" a single lyric.

### 4.3 Suno: The AI that sings (December 2023)

**2023-12-20**, Suno released Suno V1, first integrating lyrics and music into a unified generation system — users input lyrics and style prompts, and Suno generated a song with complete vocal performance.[^9]

Suno's technical details remain undisclosed, but the industry widely believes it uses a transformer-based fully generative approach similar to Bark — not separating "music" and "vocals" into two subsystems, but modeling the entire song (melody, accompaniment, vocals, mixing) as a unified audio sequence. This avoided the synthesizer feel inherent in traditional approaches of "first producing accompaniment, then layering vocals."

The iteration speed was remarkable:
- **2023-12**: Suno V1, initial version
- **2024-03-21**: Suno V3, significant quality and structure improvements; free users could generate 4-minute songs
- **2024-07-01**: Mobile app released
- **2024-11-19**: Suno V4, further improved audio quality and style diversity
- **2025-10-21**: Suno V4.5-all
- **2026-03-26**: Suno V5.5

Suno's diffusion was staggering: by mid-2024, Suno AI-generated songs went viral on social platforms, with users generating over ten million songs. In July 2025, Suno user imoliver signed with Hallwood Media, becoming the first AI creator signed by a traditional music label.[^9]

### 4.4 Udio: The DeepMind-alumni challenger (April 2024)

**2024-04-10**, Udio launched its public beta. The founding team comprised former Google DeepMind researchers David Ding, Conor Durkan, Charlie Nash, and Yaroslav Ganin, with investment from a16z, will.i.am, and Common.[^10]

Udio's vocal synthesis quality at launch was widely considered superior to Suno V3 at the time — particularly in high-register naturalness and emotional expression. The most breakout case was **"BBL Drizzy"**: an AI-generated song using Udio that went viral during the Drake vs. Kendrick Lamar feud, accumulating over 23 million views on Twitter.

Like Suno, Udio's technical details remain undisclosed. Both chose the "closed-source product + freemium model" path — contrasting with the text/image modality pattern of "open-source foundation model, closed-source product layer."

---

## V. Copyright dispute: RIAA sues Suno/Udio

**2024-06**, the Recording Industry Association of America (RIAA), representing Sony Music, Universal Music Group, Warner Records, and other major labels, filed copyright infringement lawsuits against Suno and Udio. Core allegation: both companies **used vast quantities of copyrighted sound recordings without authorization** in training their music generation models. The lawsuits sought injunctions against continued use of infringing materials and damages of up to $150,000 per infringed work.[^11]

This litigation was one of the core battlefields of the generative AI copyright war — forming three parallel legal fronts alongside text-modality NYT v. OpenAI and image-modality Getty v. Stability AI. The particularity of music copyright lies in the fact that a song's copyright is typically divided into **composition rights** (lyrics and melody) and **sound recording rights** (the specific recording), and AI models directly generate "recordings" — meaning they simultaneously touch both layers of copyright.

In March 2025, thousands of musicians including Thom Yorke (Radiohead) and Björn Ulvaeus (ABBA) signed an open letter demanding AI companies stop using copyrighted music to train models. On the same day, super-producer Timbaland publicly endorsed Suno — this split reflected the entire music industry's contradictory attitude toward AI.[^9]

---

## VI. Timeline of key events

| Date | Participant | Event | Openness |
|------|-----------|-------|----------|
| 2022-09-21 | OpenAI | Whisper released | MIT open-source |
| 2023-01 | ElevenLabs | Beta platform launched | Closed-source product |
| 2023-01-27 | Google | MusicLM paper | Not released |
| 2023-04-20 | Suno | Bark open-sourced | MIT open-source |
| 2023-06 | Meta | MusicGen released | MIT open-source |
| 2023-09 | Stability AI | Stable Audio released | Open-source |
| 2023-12-20 | Suno | Suno V1 released | Closed-source product |
| 2024-03-21 | Suno | Suno V3 released | Closed-source product |
| 2024-04-10 | Udio | Public beta | Closed-source product |
| 2024-06 | RIAA | Sues Suno/Udio | — |
| 2024-11-19 | Suno | Suno V4 released | Closed-source product |

---

## VII. Trend analysis

- **Audio AI is transforming from "assistive tool" to "autonomous creator"**: Whisper helps humans transcribe; ElevenLabs helps humans dub — these are tools. But Suno/Udio no longer need human musical skills — they sing, arrange, and mix on their own. The creator's identity shifts from "composer" to "prompt writer."
- **Vocals are the watershed of audio AI**: MusicGen and Stable Audio can generate instrumentals, but market response was tepid. Suno and Udio's explosion came entirely from "being able to sing" — the human voice naturally carries emotion and identity; it is the most irreplaceable dimension in music and AI's most powerful sensory breakthrough.
- **Copyright is the other shoe yet to drop**: The RIAA lawsuit is still ongoing. If the judgment requires "per-work licensing," music generation model training costs will increase exponentially, and model quality will regress substantially. If the judgment favors AI companies, the music industry will be forced to accept a new mode of production — just as synthesizers and samplers once compelled.
- **Open-source and closed-source path divergence**: Whisper, Bark, and MusicGen are open-source — but the highest-quality music generation models (Suno, Udio) are entirely closed-source. This suggests a new layering: **low-level foundation models can be open-source (speech recognition, basic music understanding), while high-level product models are closed-source (full song generation)** — because product-level differentiation lies not in model architecture but in training data and commercial licensing processing.

---

## Commentary

Audio AI's history is shorter than that of text and images, but more densely compressed. From Whisper to Suno, within 18 months it completed the full cycle of "specialized tool → mass product → industry panic → lawsuit → AI musician signing with a record label."

What deserves the most contemplation is not the technology itself, but humanity's reaction to "machines singing." When ChatGPT produces seemingly clever answers, the reaction is "pretty smart." When Midjourney generates exquisite images, the reaction is "beautiful, but lacks soul." But when Suno sings a love song with a trembling voice — even knowing it is AI-generated — you still get goosebumps.

The human voice is the last line of defense. It carries not only information but also identity, emotion, and vulnerability. When AI crosses this line, human creators face not "will efficiency tools replace me?" but "is that voice mine?" — and more importantly, "if a machine can sing a more moving love song than I can, then who is the subject of 'moving'?"

The last time the music industry experienced a similar shock was the popularization of MIDI and samplers in the 1980s — people said then that "machines would kill music." They did not: tools changed production methods but did not replace creation. But this time is different. Suno does not require you to understand music theory, does not require you to play any instrument, does not even require you to have "musical talent" — you only need a prompt. This is not "assisted creation" — this is "delegated creation" — you outsource intent to the model.

The outcome of the RIAA lawsuit will define the copyright framework of the entire generative AI era. But if history is any guide — Napster was ruled illegal in 2001, and streaming replaced it in the 2010s — the law may delay but cannot reverse. "Machines singing" has already been sung.

---

*Compiled by the Endfield Industrial Chronicle team: Ealdora (Annotations).*

---

(The complete technical story of Whisper is covered in *The Whisper Chronicle*.)

[^1]: Alec Radford et al. (OpenAI), "Robust Speech Recognition via Large-Scale Weak Supervision", arXiv:2212.04356, 2022-12-06. https://arxiv.org/abs/2212.04356
[^2]: OpenAI, "Whisper", GitHub repository, 2022-09. https://github.com/openai/whisper
[^3]: Wikipedia, "Whisper (speech recognition system)". https://en.wikipedia.org/wiki/Whisper_(speech_recognition_system)
[^4]: Wikipedia, "ElevenLabs". https://en.wikipedia.org/wiki/ElevenLabs
[^5]: ElevenLabs Blog, "ElevenLabs raises $500M Series D at $11B valuation", 2026-02-04. https://elevenlabs.io/blog/series-d
[^6]: Suno, "Bark: Text-Prompted Generative Audio Model", GitHub, 2023-04. https://github.com/suno-ai/bark
[^7]: Google Research, "MusicLM: Generating Music From Text", arXiv:2301.11325, 2023-01-26. https://arxiv.org/abs/2301.11325
[^8]: Meta Research, "AudioCraft: A simple one-stop shop for audio modeling", 2023-08-02. https://ai.meta.com/blog/audiocraft-musicgen-audiogen-encodec-generative-ai-audio/
[^9]: Wikipedia, "Suno AI". https://en.wikipedia.org/wiki/Suno_AI
[^10]: Wikipedia, "Udio". https://en.wikipedia.org/wiki/Udio
[^11]: The Verge, "Major record labels sue AI company behind 'BBL Drizzy'", 2024-06-24. https://www.theverge.com/2024/6/24/24184710/riaa-lawsuit-suno-udio-copyright-infringement-ai
