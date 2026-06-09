# 《音频 AI》

> 在文字和图像之后，声音曾是 AI 最晚攻克的模态。语音识别苦熬了四十年，语音合成走过了机械拼接到波形生成的漫漫长路，而音乐生成——这个需要同时处理旋律、和声、节奏、音色、人声的复合模态——直到 2023 年底才真正进入公众视野。但一旦突破，速度惊人：从 Whisper 开源到 Suno 生成四分钟完整歌曲，只用了不到 18 个月。本篇记录从语音识别到音乐生成的完整技术栈：谁做了什么、放出了什么、改变了什么。

---

## 一、概述

音频 AI 的发展可以分为三个交叠的阶段：

- **语音识别（ASR）→ Whisper（2022）**：从 HMM-GMM 到端到端 Transformer，OpenAI 用 68 万小时弱监督数据训练出一个单模型覆盖 99 种语言的语音识别系统，并以 MIT 协议开源——这几乎是语音领域的"Stable Diffusion 时刻"。
- **语音合成（TTS）→ ElevenLabs/Bark（2023）**：语音克隆从需要数小时录音降到几秒钟样本，合成质量逼近真人。两类路线并行——闭源产品路线（ElevenLabs）和开源模型路线（Bark、XTTS、Fish Speech）。
- **音乐生成 → Suno/Udio（2023—2024）**：从 MusicLM 的 30 秒片段到 Suno V3 的四分钟完整歌曲（含人声），AI 第一次不是"辅助创作工具"而是"自己唱"。随之而来的是版权诉讼、产业恐慌和"AI 音乐人"这一全新身份的诞生。

---

## 二、语音识别：Whisper 的降维打击

### 2.1 发布

**2022-09-21**，OpenAI 发布 Whisper，一个基于 Transformer encoder-decoder 架构的通用语音识别模型。[^1] 同日在 GitHub 以 MIT 许可证开源全部模型权重与代码。

Whisper 的核心思路是"弱监督大规模预训练"：在 680,000 小时的多语言、多任务监督数据上训练，覆盖 99 种语言。数据集不仅包括专业语音识别语料，还包括从互联网上收集的多种音频来源——使其对口音、背景噪声和技术术语具有此前模型不具备的鲁棒性。

模型系列包括 tiny、base、small、medium、large 五种规模（从 39M 到 1550M 参数），让开发者可以根据硬件条件选择。最关键的是：**完全开源，MIT 许可**——这在语音识别领域是史无前例的。此前最强的 ASR 系统（如谷歌 Cloud Speech-to-Text、亚马逊 Transcribe）都是闭源 API。[^2]

### 2.2 技术影响

Whisper 改变了语音 AI 的基础设施层：

- **下游应用爆炸**：基于 Whisper 的字幕生成、会议记录、播客转文字、视频翻译工具在 2023 年密集涌现。Whisper + GPT 组合成为最流行的"音频→文字→理解"pipeline。
- **多语言突破**：Whisper 的非英语识别能力远超当时所有开源替代方案，直接推动了中文、日语、韩语等非英语语音应用的快速发展。
- **更快的 distill/优化**：2023 年，Distil-Whisper、faster-whisper（CTranslate2）、WhisperX 等项目将推理速度提升 4-70 倍，使实时语音识别可以在消费级硬件上运行。[^3]

到 2024 年，Whisper 已成为 GitHub 上最流行的语音 AI 开源项目之一，也是大多数语音应用的事实标准基座。

---

## 三、语音合成：从克隆到"真人"

### 3.1 背景：从拼接合成到端到端

传统 TTS 依赖拼接合成（concatenative）或参数合成（parametric），语音库通常需要数十小时的专业录音。2016 年 WaveNet（DeepMind）首次将自回归生成模型引入语音合成，开创"端到端神经 TTS"路线。Tacotron 2（2017）、FastSpeech（2019）、VITS（2021）等技术逐步提升了合成质量和速度。

但真正让语音合成进入"真人级别"的，是 2023 年两股力量的交汇：**大规模预训练**（类似 LLM 范式）与**零样本语音克隆**（仅需数秒参考音频）。

### 3.2 ElevenLabs：语音克隆的商业标杆

**2023-01**，由前 Google 机器学习工程师 Piotr Dąbkowski 和前 Palantir 策略师 Mati Staniszewski 联合创立的 ElevenLabs 发布其 beta 平台。核心产品是**语音克隆与合成**——用户上传一段 1 分钟以上的音频样本，即可生成该说话人在任意文本上的自然语音。[^4]

ElevenLabs 的合成质量在发布时远超市场预期：情感表达自然、呼吸和停顿逼真、支持 29 种语言。2023 年 6 月，公司以约 1 亿美元估值完成 1900 万美元 A 轮融资，a16z 领投。[^5]

2024—2025 年间，ElevenLabs 从 TTS 扩展到音频 AI 全栈：配音（Dubbing）、AI Agent 语音交互（ElevenAgents）、音效生成（Sound Effects）、音乐生成（ElevenMusic，2026-04）。2026 年 2 月以 110 亿美元估值完成 5 亿美元 D 轮融资。[^5]

ElevenLabs 也引发了深度伪造（deepfake）担忧——其技术可用于伪造任何人的声音。公司通过"语音验证"和水印技术应对，但监管层面的挑战远未解决。

### 3.3 Bark：Suno 的开源路线

**2023-04-20**，当时仍叫 Suno 的团队在 GitHub 发布了 Bark——一个完全生成式的 text-to-audio 模型，MIT 许可证。[^6]

Bark 与传统 TTS 不同：它不是"给定音素→生成波形"，而是从头生成完整音频——包括语音、音乐、背景音效，甚至非语言声音（笑、哭、叹气）。这使它更像一个"音频的基础模型"而非一个 TTS 引擎。输出质量不如 ElevenLabs 稳定，但完全开源、本地可运行、商用免费的特性使其迅速获得社区关注——Bark 在 HuggingFace 上获得了数千次 stars。

Bark 是 Suno 团队在音乐生成之路上的一个重要踏脚石——它验证了 "transformer-based 全生成式音频"的技术可行性，为后续 Suno 音乐模型的研发奠定了基础。

### 3.4 其他开源 TTS

- **XTTS（Coqui AI）**：2023 年发布，支持 17 种语言的语音克隆，只需 6 秒参考音频。Coqui 后来停止运营，XTTS 社区分支继续维护。
- **Fish Speech**：2024 年由中国团队发布，专注中文语音合成质量，开源。
- **Meta Voicebox**（2023-06 论文发布，未开源权重）：展示了大模型范式下 TTS 的多任务能力——语音编辑、降噪、跨语言风格迁移。

---

## 四、音乐生成：AI 开始"唱歌"

音乐生成的技术难度远高于语音识别和合成。一首歌是多个维度的同时建模：旋律（音高序列）、和声（和弦行进）、节奏（速度与拍号）、音色（乐器与人声质地）、结构（主歌/副歌/桥段）、歌词与演唱。在 2023 年之前，"AI 能写出听起来像音乐的音频片段"已经能够做到，但"AI 能做出一首结构完整、有人声演唱的歌曲"仍是科幻。

### 4.1 MusicLM：文本到音乐的破冰（2023-01）

**2023-01-27**，Google Research 发布 MusicLM 论文——一个从文本描述生成高保真音乐的模型。论文中的演示片段（30 秒）首次展示了"根据文本生成音乐"的可行性：用户写"一段舒缓的爵士乐，有萨克斯独奏"，MusicLM 生成相应的音乐。[^7]

MusicLM 使用了 AudioLM（Google 2022）的多阶段自回归框架，训练数据为 28 万小时音乐。论文中的关键技术贡献是 MuLan 联合嵌入——将文本描述和音频映射到共享表示空间，使模型能够"理解"文字与音乐之间的对应关系。

**但 MusicLM 始终未开放权重。** Google 以"版权和负责任 AI 风险"为由，仅在 2023 年 5 月通过 AI Test Kitchen 向部分用户开放体验。MusicLM 的历史位置是"技术 demo，不是产品"——它证明了文本到音乐的技术可行性，但从未让公众真正使用。

### 4.2 MusicGen：Meta 的开源音乐模型（2023-06）

**2023-06**，Meta 发布 AudioCraft 框架，包含 MusicGen——一个开源的文本到音乐生成模型。MusicGen 使用单阶段自回归 Transformer + EnCodec 音频 tokenizer，在 20,000 小时授权音乐数据上训练。与 MusicLM 不同，MusicGen 以 MIT 许可证开源了模型权重和代码，允许商业使用。[^8]

MusicGen 的开源引发了社区爆发：Stable Audio（Stability AI，2023-09）、Riffusion（基于 Stable Diffusion 的频谱图方法）等项目迅速跟进。但所有这些模型都有一个共同局限：**没有可靠的人声**。它们可以生成器乐音乐，可以做背景音轨，但无法"唱"出一句歌词。

### 4.3 Suno：会唱歌的 AI（2023-12）

**2023-12-20**，Suno 发布 Suno V1，首次将歌词和音乐整合到一个统一的生成系统中——用户输入歌词和风格提示，Suno 生成一首带有完整人声演唱的歌曲。[^9]

Suno 技术细节未公开，但业界普遍认为它使用类似 Bark 的 transformer-based 全生成式方法——不分离"音乐"与"人声"两个子系统，而是将整首歌曲（包括旋律、伴奏、人声、混音）作为一个统一的音频序列来建模。这避免了传统方法中"先做伴奏再叠人声"导致的合成感。

迭代速度惊人：
- **2023-12**：Suno V1，初版
- **2024-03-21**：Suno V3，音质和结构显著提升，免费用户可生成 4 分钟歌曲
- **2024-07-01**：发布移动端 App
- **2024-11-19**：Suno V4，进一步改善音质与风格多样性
- **2025-10-21**：Suno V4.5-all
- **2026-03-26**：Suno V5.5

Suno 的扩散速度惊人：到 2024 年中，Suno AI 生成歌曲在社交平台上病毒传播，用户生成超过千万首歌曲。2025 年 7 月，Suno 用户 imoliver 与 Hallwood Media 签约，成为首个被传统音乐厂牌签约的 AI 创作者。[^9]

### 4.4 Udio：DeepMind 系的挑战者（2024-04）

**2024-04-10**，Udio 发布公开 beta。创始团队由前 Google DeepMind 研究员 David Ding、Conor Durkan、Charlie Nash、Yaroslav Ganin 组成，获得 a16z、will.i.am、Common 等投资。[^10]

Udio 在发布时的人声合成质量被广泛认为超越同期的 Suno V3——尤其是高音域的自然度和情感表达。最出圈的案例是 **"BBL Drizzy"**：一首用 Udio 生成的 AI 歌曲，在 Drake 与 Kendrick Lamar 的 beef 中走红，Twitter 浏览量超 2300 万。

与 Suno 一样，Udio 的技术细节未公开。两者都选择了"闭源产品 + 免费增值模式"的路线——与文本/图像模态中"基础模型开源、产品层闭源"的模式形成对比。

---

## 五、版权争议：RIAA 诉 Suno/Udio

**2024-06**，美国唱片业协会（RIAA）代表 Sony Music、Universal Music Group、Warner Records 等唱片巨头，对 Suno 和 Udio 提起版权侵权诉讼。指控核心：两家公司在训练音乐生成模型时，**未经授权使用了大量受版权保护的录音制品**。诉讼要求禁止继续使用侵权材料训练，并赔偿每首侵权作品最高 15 万美元。[^11]

这场诉讼是整个生成式 AI 版权战的核心战场之一——与文本模态的 NYT v. OpenAI、图像模态的 Getty v. Stability AI 构成三条并行的法律前线。但音乐版权的特殊性在于：一首歌的版权通常分为**作曲版权**（词曲）和**录音版权**（具体录音制品），而 AI 模型直接生成的是"录音"——这意味着它同时触碰了两层版权。

2025 年 3 月，包括 Thom Yorke（Radiohead）、Björn Ulvaeus（ABBA）在内的数千名音乐人签署公开信，要求 AI 公司停止使用受版权保护的音乐训练模型。同日，超级制作人 Timbaland 公开支持 Suno——这一分裂折射了整个音乐产业对 AI 的矛盾态度。[^9]

---

## 六、事实脉络表

| 时间 | 参与者 | 事件 | 开放形态 |
|------|--------|------|----------|
| 2022-09-21 | OpenAI | Whisper 发布 | MIT 开源 |
| 2023-01 | ElevenLabs | Beta 平台上线 | 闭源产品 |
| 2023-01-27 | Google | MusicLM 论文 | 未公开 |
| 2023-04-20 | Suno | Bark 开源 | MIT 开源 |
| 2023-06 | Meta | MusicGen 发布 | MIT 开源 |
| 2023-09 | Stability AI | Stable Audio 发布 | 开源 |
| 2023-12-20 | Suno | Suno V1 发布 | 闭源产品 |
| 2024-03-21 | Suno | Suno V3 发布 | 闭环产品 |
| 2024-04-10 | Udio | 公开 beta | 闭环产品 |
| 2024-06 | RIAA | 起诉 Suno/Udio | — |
| 2024-11-19 | Suno | Suno V4 发布 | 闭环产品 |

---

## 七、趋势分析

- **音频 AI 正在从"辅助工具"变成"自主创作者"**：Whisper 帮助人类转录，ElevenLabs 帮助人类配音——这些都是工具。但 Suno/Udio 不再需要人类的音乐技能——它们自己演唱、编曲、混音。创作者的身份从"谱曲者"变成"提示词写手"。
- **人声是音频 AI 的分水岭**：MusicGen 和 Stable Audio 可以生成器乐，但市场反应平淡。Suno 和 Udio 的爆发完全来自"会唱歌"——人声天然携带情感和身份，它是音乐中最不可替代的维度，也是 AI 最能触动人类感官的突破口。
- **版权是尚未落地的靴子**：RIAA 诉讼仍在进行中。如果判决要求"逐首作品授权"，音乐生成模型的训练成本将指数级上升，模型质量将大幅倒退。如果判决有利于 AI 公司，音乐产业将被迫接受新的生产方式——就像合成器和采样器当年的遭遇一样。
- **开源与闭源的路线分裂**：Whisper、Bark、MusicGen 开源——但最高质量的音乐生成模型（Suno、Udio）全部闭源。这暗示了一种新的分层：**低层基础模型可以开源（语音识别、基础音乐理解），高层产品模型闭源（全歌曲生成）**——因为产品层的差异化不在模型架构，而在训练数据和商业授权处理。

---

## 评曰

音频 AI 的历史比文本和图像短，但压缩得更密。从 Whisper 到 Suno，18 个月内走完了"专业工具→大众产品→产业恐慌→法律诉讼→AI 音乐人签约唱片公司"的完整周期。

最值得琢磨的不是技术本身，而是人类对"机器唱歌"这件事的反应。当 ChatGPT 写出看似机智的回答时，人们的反应是"挺聪明的"。当 Midjourney 生成精美图像时，反应是"好看，但缺灵魂"。但当 Suno 用带着颤音的人声唱出一段情歌时——哪怕你知道这是 AI 生成的——你仍然会起鸡皮疙瘩。

人声是最后的防线。它携带的不仅是信息，还有身份、情感、脆弱。当 AI 跨越了这条线，人类创作者面临的不再是"效率工具会不会替代我"，而是"那个声音是不是我的"——以及更重要的是，"如果机器能唱出比我更动人的情歌，那'动人'这件事的主体是谁"。

音乐产业上一次经历类似的震动是 1980 年代 MIDI 和采样器的普及——当时也有人说"机器会杀死音乐"。结果没有：工具改变了生产方式，但没有替代创作。但这一次不同。Suno 不需要你懂乐理，不需要你会弹任何乐器，甚至不需要你有"音乐天赋"——你只需要一个 prompt。这不是"辅助创作"，这是"授权创作"——你把意图外包给了模型。

RIAA 诉讼的结局将定义整个生成式 AI 时代的版权框架。但如果历史是任何指引——Napster 在 2001 年被判非法，流媒体在 2010 年代取而代之——法律可能可以延缓，但无法逆转。"机器唱歌"这件事，已经唱出来了。

---

*本篇由终末地工业史官团队编纂：艾尔黛拉（补注）。*

---

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
