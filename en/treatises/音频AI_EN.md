# Audio AI

> After text and images, audio was the modality that AI攻克 last. Speech recognition struggled for four decades; speech synthesis traversed the long road from mechanical concatenation to waveform generation; and music generation—a composite modality requiring simultaneous modeling of melody, harmony, rhythm, timbre, and vocals—did not truly enter public consciousness until late 2023. But once the breakthrough came, the speed was astonishing: from Whisper's open-source release to Suno generating four-minute complete songs, it took less than 18 months. This article records the complete technology stack from speech recognition to music generation: who did what, what was released, and what changed.

---

## I. Overview

The development of audio AI can be divided into three overlapping phases:

- **Speech recognition (ASR) → Whisper (2022)**: From HMM-GMM to end-to-end Transformers, OpenAI used 680,000 hours of weakly supervised data to train a single model covering 99 languages for speech recognition, open-sourced under the MIT license—this was virtually the "Stable Diffusion moment" for audio.
- **Speech synthesis (TTS) → ElevenLabs/Bark (2023)**: Voice cloning went from requiring hours of recording to just seconds of sample audio, with synthesis quality approaching real human speech. Two paths ran in parallel—closed-source products (ElevenLabs) and open-source models (Bark, XTTS, Fish Speech).
- **Music generation → Suno/Udio (2023–2024)**: From MusicLM's 30-second clips to Suno V3's four-minute complete songs with vocals, AI was for the first time not an "auxiliary creation tool" but "singing on its own." What followed were copyright lawsuits, industry panic, and the birth of the entirely new identity of "AI musician."

---

## II. Speech Recognition: Whisper's Dominating Strike

### 2.1 Launch

**On 2022-09-21**, OpenAI released Whisper, a universal speech recognition model based on a Transformer encoder-decoder architecture.[^1] On the same day, all model weights and code were open-sourced on GitHub under the MIT license.

Whisper's core approach was "large-scale weakly supervised pre-training": trained on 680,000 hours of multilingual, multi-task supervised data, covering 99 languages. The dataset included not only professional speech recognition corpora but also diverse audio sources collected from the internet—giving it robustness to accents, background noise, and technical terminology that previous models lacked.

The model series includes five scales—tiny, base, small, medium, and large (from 39M to 1.55B parameters)—allowing developers to choose based on hardware constraints. Most critically: **fully open-source, MIT license**—this was unprecedented in the speech recognition field. Previously, the strongest ASR systems (such as Google Cloud Speech-to-Text and Amazon Transcribe) were all closed-source APIs.[^2]

### 2.2 Technical Impact

Whisper changed the infrastructure layer of audio AI:

- **Downstream application explosion**: Whisper-based subtitle generation, meeting transcription, podcast-to-text, and video translation tools emerged密集 in 2023. The Whisper + GPT combination became the most popular "audio → text → understanding" pipeline.
- **Multilingual breakthrough**: Whisper's non-English recognition capabilities far exceeded all existing open-source alternatives at the time, directly driving the rapid development of Chinese, Japanese, Korean, and other non-English speech applications.
- **Faster distillation/optimization**: In 2023, projects like Distil-Whisper, faster-whisper (CTranslate2), and WhisperX improved inference speed by 4–70×, enabling real-time speech recognition on consumer-grade hardware.[^3]

By 2024, Whisper had become one of the most popular open-source speech AI projects on GitHub and the de facto standard foundation for most speech applications.

---

## III. Speech Synthesis: From Cloning to "Indistinguishable from Human"

### 3.1 Background: From Concatenative to End-to-End

Traditional TTS relied on concatenative or parametric synthesis, typically requiring数十 hours of professional recordings for the voice database. In 2016, WaveNet (DeepMind) first introduced autoregressive generative models into speech synthesis,开创 the "end-to-end neural TTS" paradigm. Tacotron 2 (2017), FastSpeech (2019), VITS (2021), and other technologies progressively improved synthesis quality and speed.

But what truly brought speech synthesis to "human-level" was the convergence of two forces in 2023: **large-scale pre-training** (similar to the LLM paradigm) and **zero-shot voice cloning** (requiring only seconds of reference audio).

### 3.2 ElevenLabs: The Commercial Standard for Voice Cloning

**In January 2023**, ElevenLabs—co-founded by former Google ML engineer Piotr Dąbkowski and former Palantir strategist Mati Staniszewski—launched its beta platform. The core product was **voice cloning and synthesis**—users uploaded an audio sample of one minute or more and could generate that speaker's natural voice on任意 text.[^4]

ElevenLabs' synthesis quality far exceeded market expectations at launch: natural emotional expression, realistic breathing and pauses, and support for 29 languages. In June 2023, the company completed a $19 million Series A at approximately $100 million valuation, led by a16z.[^5]

Between 2024 and 2025, ElevenLabs expanded from TTS to full-stack audio AI: dubbing, AI agent voice interaction (ElevenAgents), sound effects generation (Sound Effects), and music generation (ElevenMusic, April 2026). In February 2026, it completed a $500 million Series D at an $11 billion valuation.[^5]

ElevenLabs also raised deepfake concerns—its technology could be used to forge anyone's voice. The company responded through "voice verification" and watermarking technology, but regulatory challenges remain far from resolved.

### 3.3 Bark: Suno's Open-Source Path

**On 2023-04-20**, the team then still called Suno released Bark on GitHub—a fully generative text-to-audio model under the MIT license.[^6]

Unlike traditional TTS, Bark did not follow the "given phonemes → generate waveform" approach. Instead, it generated complete audio from scratch—including speech, music, background sound effects, and even non-verbal sounds (laughter, crying, sighing). This made it more like an "audio foundation model" than a TTS engine. Output quality was less stable than ElevenLabs, but its fully open-source, locally runnable, and commercially free characteristics迅速 attracted community attention—Bark received thousands of stars on HuggingFace.

Bark was an important stepping stone for the Suno team on the road to music generation—it validated the technical feasibility of "transformer-based fully generative audio," laying the groundwork for subsequent Suno music model development.

### 3.4 Other Open-Source TTS

- **XTTS (Coqui AI)**: Released in 2023, supporting voice cloning in 17 languages with only 6 seconds of reference audio. Coqui later ceased operations; the XTTS community fork continues maintenance.
- **Fish Speech**: Released in 2024 by a Chinese team, focusing on Chinese speech synthesis quality; open-source.
- **Meta Voicebox** (paper published June 2023, weights not open-sourced): Demonstrated multi-task TTS capabilities under the large model paradigm—speech editing, noise reduction, and cross-lingual style transfer.

---

## IV. Music Generation: AI Starts to "Sing"

The technical difficulty of music generation far exceeds that of speech recognition and synthesis. A song involves simultaneous modeling of multiple dimensions: melody (pitch sequences), harmony (chord progressions), rhythm (tempo and time signature), timbre (instrumental and vocal texture), structure (verse/chorus/bridge), and lyrics with vocal performance. Before 2023, "AI can produce audio fragments that sound like music" was already achievable, but "AI can produce a structurally complete song with vocals" remained science fiction.

### 4.1 MusicLM: Text-to-Music Breaks the Ice (January 2023)

**On 2023-01-27**, Google Research published the MusicLM paper—a model for generating high-fidelity music from text descriptions. The demo clips (30 seconds) in the paper首次 demonstrated the feasibility of "generating music from text": users wrote "a soothing jazz piece with a saxophone solo," and MusicLM generated the corresponding music.[^7]

MusicLM used AudioLM's (Google 2022) multi-stage autoregressive framework, trained on 280,000 hours of music. The paper's key technical contribution was the MuLan joint embedding—mapping text descriptions and audio into a shared representation space, enabling the model to "understand" the correspondence between language and music.

**But MusicLM never released its weights.** Google cited "copyright and responsible AI risks" and only opened access to select users through AI Test Kitchen in May 2023. MusicLM's historical position is "tech demo, not product"—it proved the technical feasibility of text-to-music but never allowed the public to truly use it.

### 4.2 MusicGen: Meta's Open-Source Music Model (June 2023)

**In June 2023**, Meta released the AudioCraft framework, containing MusicGen—an open-source text-to-music generation model. MusicGen used a single-stage autoregressive Transformer with an EnCodec audio tokenizer, trained on 20,000 hours of licensed music data. Unlike MusicLM, MusicGen open-sourced its model weights and code under the MIT license, permitting commercial use.[^8]

MusicGen's open-source release triggered a community explosion: Stable Audio (Stability AI, September 2023), Riffusion (a spectrogram-based approach using Stable Diffusion), and other projects quickly followed. But all these models shared one common limitation: **no reliable vocals**. They could generate instrumental music and produce background tracks, but could not "sing" a single line of lyrics.

### 4.3 Suno: The AI That Sings (December 2023)

**On 2023-12-20**, Suno released Suno V1, first integrating lyrics and music into a unified generation system—users input lyrics and style prompts, and Suno generated a song with complete vocal performance.[^9]

Suno's technical details remain undisclosed, but the industry普遍认为 it uses a Bark-like transformer-based fully generative approach—not separating "music" and "vocals" into two subsystems, but modeling the entire song (including melody, accompaniment, vocals, and mix) as a unified audio sequence. This avoided the synthetic feel caused by traditional approaches of "creating accompaniment first, then layering vocals."

The iteration speed was staggering:
- **December 2023**: Suno V1, initial version
- **2024-03-21**: Suno V3, significantly improved audio quality and structure; free users could generate 4-minute songs
- **2024-07-01**: Mobile app released
- **2024-11-19**: Suno V4, further improved audio quality and style diversity
- **2025-10-21**: Suno V4.5-all
- **2026-03-26**: Suno V5.5

Suno's proliferation was remarkable: by mid-2024, Suno AI-generated songs were spreading virally on social platforms, with users generating over ten million songs. In July 2025, Suno user imoliver signed with Hallwood Media, becoming the first AI creator signed by a traditional music label.[^9]

### 4.4 Udio: The DeepMind-Aligned Challenger (April 2024)

**On 2024-04-10**, Udio released its public beta. The founding team comprised former Google DeepMind researchers David Ding, Conor Durkan, Charlie Nash, and Yaroslav Ganin, with investment from a16z, will.i.am, and Common.[^10]

Udio's vocal synthesis quality at launch was widely considered to surpass that of Suno V3 at the time—particularly in the naturalness of high registers and emotional expression. The most viral case was **"BBL Drizzy"**: an AI-generated song created with Udio that went viral during the Drake vs. Kendrick Lamar beef, garnering over 23 million views on Twitter.

Like Suno, Udio's technical details remain undisclosed. Both chose the "closed-source product + freemium model" path—contrasting with the "foundation model open-source, product layer closed-source" pattern seen in text and image modalities.

---

## V. Copyright Disputes: RIAA v. Suno/Udio

**In June 2024**, the Recording Industry Association of America (RIAA), representing record giants including Sony Music, Universal Music Group, and Warner Records, filed copyright infringement lawsuits against Suno and Udio. The core allegation: both companies **used大量 copyrighted sound recordings without authorization** when training their music generation models. The lawsuits sought injunctions against continued use of infringing material and damages of up to $150,000 per infringing work.[^11]

This lawsuit is one of the central battlegrounds of the entire generative AI copyright war—running parallel to the text modality's NYT v. OpenAI and the image modality's Getty v. Stability AI as three concurrent legal fronts. But music copyright's peculiarity lies in: a song's copyright typically分为 **composition rights** (lyrics and music) and **sound recording rights** (the specific recording), and AI models directly generate "recordings"—meaning they simultaneously触碰 both layers of copyright.

In March 2025, thousands of musicians including Thom Yorke (Radiohead) and Björn Ulvaeus (ABBA) signed an open letter demanding AI companies stop using copyrighted music to train models. On the same day, super-producer Timbaland publicly支持 Suno—this split reflected the entire music industry's ambivalent attitude toward AI.[^9]

---

## VI. Timeline of Key Events

| Date | Actor | Event | Openness |
|------|--------|------|----------|
| 2022-09-21 | OpenAI | Whisper released | MIT open-source |
| 2023-01 | ElevenLabs | Beta platform launched | Closed-source product |
| 2023-01-27 | Google | MusicLM paper | Not released |
| 2023-04-20 | Suno | Bark open-sourced | MIT open-source |
| 2023-06 | Meta | MusicGen released | MIT open-source |
| 2023-09 | Stability AI | Stable Audio released | Open-source |
| 2023-12-20 | Suno | Suno V1 released | Closed-source product |
| 2024-03-21 | Suno | Suno V3 released | Closed-source product |
| 2024-04-10 | Udio | Public beta | Closed-source product |
| 2024-06 | RIAA | Sued Suno/Udio | — |
| 2024-11-19 | Suno | Suno V4 released | Closed-source product |

---

## VII. Trend Analysis

- **Audio AI is moving from "auxiliary tool" to "autonomous creator"**: Whisper helps humans transcribe, ElevenLabs helps humans dub—these are tools. But Suno/Udio no longer require human musical skill—they sing, arrange, and mix on their own. The creator's identity shifts from "composer" to "prompt writer."

- **Vocals are the watershed of audio AI**: MusicGen and Stable Audio can generate instrumentals, but market response was lukewarm. Suno and Udio's explosion came entirely from "being able to sing"—vocals naturally carry emotion and identity, making them the most irreplaceable dimension in music and the breakthrough point where AI most powerfully触动 human senses.

- **Copyright is the boot that has yet to drop**: The RIAA lawsuits are still ongoing. If the verdict requires "per-work licensing," training costs for music generation models will increase exponentially and model quality will大幅 regress. If the verdict favors AI companies, the music industry will be forced to accept new production methods—just as it once had to with synthesizers and samplers.

- **The open-source/closed-source path split**: Whisper, Bark, and MusicGen are open-source—but the highest-quality music generation models (Suno, Udio) are entirely closed-source. This hints at a new layering: **lower-level foundation models can be open-source (speech recognition, basic music understanding), while higher-level product models are closed-source (full song generation)**—because product-layer differentiation lies not in model architecture but in training data and commercial licensing treatment.

---

## Commentary

Audio AI's history is shorter than text and image AI's, but more densely compressed. From Whisper to Suno, 18 months completed the full cycle of "professional tool → mass product → industry panic → legal action → AI musician signs with a record label."

What is most值得琢磨 is not the technology itself, but humanity's reaction to "machines singing." When ChatGPT produced seemingly clever responses, the reaction was "pretty smart." When Midjourney generated exquisite images, the reaction was "beautiful, but lacking soul." But when Suno sings a love song with a trembling voice—even when you know it's AI-generated—you still get goosebumps.

The human voice is the last line of defense. It carries not just information, but identity, emotion, and vulnerability. When AI crosses this line, human creators face not just "will efficiency tools replace me?" but "is that voice mine?"—and more importantly, "if a machine can sing a more moving love song than I can, then who is the主体 of 'being moved'?"

The music industry last experienced a similar shock in the 1980s with the proliferation of MIDI and samplers—and back then, people also said "machines will kill music." They did not: tools changed production methods but did not replace creation. But this time is different. Suno does not require you to understand music theory, does not require you to play any instrument, does not even require you to have "musical talent"—you only need a prompt. This is not "assisted creation"—this is "delegated creation"—you outsource your intent to the model.

The outcome of the RIAA lawsuit will define the copyright framework for the entire generative AI era. But if history is any guide—Napster was ruled illegal in 2001, and streaming took its place in the 2010s—the law may slow but cannot reverse. "Machines singing" has already been sung.

---

*This article was compiled by the Endfield Industrial Chronicle team: Eledra (supplementary notes).*

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
