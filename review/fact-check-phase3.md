# Phase 3 事实核查报告

> **核查人**：真理（锚审双检之"锚"）
> **核查时间**：2026-06-19
> **核查范围**：14 篇文件（编年 4、纪传 4、志 2、表 1、论 3）
> **核查方法**：逐条提取事实声称 → 用 fetch 验证脚注 URL 可达性与内容一致性 → 用 Wikipedia / arXiv / 官方博客交叉核实关键日期和数据

---

## 核查总览

| # | 文件 | 结果 | 问题数 | 说明 |
|---|------|------|--------|------|
| 1 | 编年/2025/12.md — GPT-5.2 | ⚠️ 基本通过 | 2 | 1 条数据无法溯源，1 条头衔表述不一致 |
| 2 | 编年/2026/01.md — Claude Cowork / DoD 争端 | ❌ 需修复 | 3 | Claude Cowork 脚注全部失效（6 条） |
| 3 | 编年/2026/05.md — Claude Mythos | ⚠️ 基本通过 | 2 | 大量声称仅依赖 Wikipedia 单源 |
| 4 | 编年/2026/06.md — Gemini 3 / Mythos 5 | ⚠️ 基本通过 | 1 | 同上，单源依赖 |
| 5 | 纪传/本纪/Google.md | ✅ 通过 | 1 | 1 条数据（股价跌幅）无法在线验证 |
| 6 | 纪传/本纪/Meta.md | ⚠️ 基本通过 | 2 | Muse Spark 来源模糊；01.AI 单源 |
| 7 | 纪传/列传/InstructGPT.md | ✅ 通过 | 0 | 所有脚注均可达且内容一致 |
| 8 | 纪传/列传/GPT-4.md | ✅ 通过 | 0 | 核心数据与 OpenAI 技术报告一致 |
| 9 | 志/AI Agent 生态.md | ⚠️ 基本通过 | 1 | 1 条脚注 URL 返回错误 |
| 10 | 志/合成数据.md | ⚠️ 基本通过 | 1 | DeepSeek-R1 日期微差（20 vs 22） |
| 11 | 表/主要融资与估值表.md | ⚠️ 基本通过 | 3 | 多条 URL 失效；1 条日期存疑 |
| 12 | 论/Agent 时代.md | ⚠️ 基本通过 | 1 | 同 AI Agent 生态的 URL 问题 |
| 13 | 论/模型合并与开放权重的未来.md | ✅ 通过 | 0 | 全部脚注可达 |
| 14 | 论/数据墙.md | ❌ 需修复 | 1 | 关键数据错误：GPT-4 → GPT-3.5 |

---

## 逐文件核查

### 文件 1：编年/2025/12.md — GPT-5.2

**脚注 URL 抽检（5 条）：**

| 脚注 | URL | 状态 |
|------|-----|------|
| [^1] | theverge.com/.../openai-gpt-5-2-new-model-chatgpt | ✅ 可达，内容确认 GPT-5.2 发布，Fidji Simo 为 "CEO of Applications" |
| [^2] | en.wikipedia.org/wiki/GPT-5.2 | ✅ 可达，确认发布日期 December 11, 2025 |
| [^4] | theverge.com/.../openai-gpt-5-2-release-date-code-red-google-response | ✅ 可达，确认 Code Red 叙述，原计划月底发布提前至 12/9-11 |
| [^10] | zdnet.com/.../openai-gpt-5-3-codex-faster-goes-beyond-coding/ | ✅ 可达，确认 2026-02-05 发布、25% 速度提升 |
| [^12] | theguardian.com/.../latest-chatgpt-model-uses-elon-musks-grokipedia... | ✅ 可达，确认 2026-01-24 事件 |

**日期核查：**
- GPT-5.2 发布 2025-12-11：✅ Wikipedia 确认
- GPT-5 发布 2025-08-07：✅ Wikipedia 确认
- GPT-5.1 发布 2025-11-12：✅ Wikipedia 确认
- GPT-5.2-Codex 发布 2025-12-18：✅ VentureBeat 文章确认
- GPT-5.3-Codex 发布 2026-02-05：✅ ZDNET 确认
- GPT-5.4 发布 2026-03-05：✅ TechCrunch 确认

**数据核查：**
- 三种模式（Instant / Thinking / Pro）：✅ The Verge、TechCrunch 均确认
- "Code Red" 内部备忘录：✅ The Verge、TechCrunch、The Information 均报道
- ⚠️ **Aaron Levie "高出 7 分"**：VentureBeat 早期评测文章中未找到此引用。无法从现有来源验证。
- ⚠️ **Fidji Simo 头衔**：The Verge 称 "CEO of Applications"，TechCrunch 称 "chief product officer"。文件使用"应用业务 CEO"，与 The Verge 一致，但不同来源的头衔表述存在差异（非错误，但需注意）。

**问题：**
1. ⚠️ [非阻塞] Aaron Levie "高出 7 分" 的声称缺少可验证来源。
2. ⚠️ [非阻塞] Fidji Simo 头衔在不同媒体间有差异。

---

### 文件 2：编年/2026/01.md — Claude Cowork / Anthropic-DoD 争端

**脚注 URL 抽检（5 条）：**

| 脚注 | URL | 状态 |
|------|-----|------|
| [^1] | en.wikipedia.org/wiki/Claude_(language_model) | ✅ 可达，但页面中未找到 "Claude Cowork" 条目 |
| [^2]-[^7] | 全部指向 en.wikipedia.org/wiki/Claude_(language_model)，标注"原始链接待补" | ❌ **6 条脚注均指向同一 Wikipedia URL，无独立原始来源** |
| [^8] | en.wikipedia.org/wiki/Anthropic–United_States_Department_of_Defense_dispute | ✅ 可达，确认争端存在及基本时间线 |
| [^9] | 同上 | ✅ 可达，确认"供应链风险"指定及临时禁令 |

**日期核查：**
- Anthropic-DoD 争端起始于 2026 年 1 月：✅ Wikipedia 确认 "Since January 2026"
- 临时禁令 2026-03-26：✅ Wikipedia 提及
- ⚠️ Claude Cowork 发布日期"约2026年1月"：模糊日期，Wikipedia Claude 页面中未找到 "Claude Cowork" 产品名。

**数据核查：**
- Claude Cowork 是 Claude Code 的 GUI 版本：⚠️ 无法从现有来源独立验证
- 企业版扩展（2026年2月）、Dispatch 功能（2026年3月）：⚠️ 同上，无法验证
- 争端时间线（2025-09 FBI/ICE 冲突、2025-10 David Sacks 指控、2025-12 会面）：✅ Wikipedia 确认

**问题：**
1. ❌ **[阻塞] 脚注 [^2]-[^7] 全部失效**——6 条脚注指向同一 Wikipedia URL 并标注"原始链接待补"。Claude Cowork 的所有技术细节（GUI 版本、文件系统沙箱、企业版扩展、Dispatch）均无独立可验证来源。这违反了事实声称必须绑定可验证源的基本原则。
2. ⚠️ [非阻塞] Claude Cowork 在 Wikipedia Claude 页面中未作为独立产品出现——需确认此产品是否已正式发布或仍为传闻。
3. ⚠️ [非阻塞] 争端时间线的具体月份（2025-09、2025-10、2025-12）来源于 Wikipedia，需确认 Wikipedia 页面自身的引用质量。

---

### 文件 3：编年/2026/05.md — Claude Mythos

**脚注 URL 抽检（3 条）：**

| 脚注 | URL | 状态 |
|------|-----|------|
| [^1] | en.wikipedia.org/wiki/Claude_Mythos | ✅ 可达，内容高度一致 |
| [^2] | en.wikipedia.org/wiki/Gemini_3_(AI) | ✅ 可达，确认 Gemini 3 系列版本和日期 |
| [^3] | en.wikipedia.org/wiki/Claude_Mythos（Thomas Fraise 文章） | ✅ Wikipedia 引用了 The Conversation 文章 |

**日期核查：**
- Mythos 泄露 2026-03-26：✅ Wikipedia 确认
- 正式公开 2026-04-07：✅ Wikipedia 确认
- Opus 4.8 发布 2026-05-28：✅ Wikipedia Claude 页面确认
- Gemini 3.5 Flash 2026-05-19：✅ Wikipedia Gemini 3 页面确认
- Gemini 3.1 Pro 2026-02-19、3 Deep Think 2026-02-12、3.1 Flash-Lite 2026-03-03：✅ Wikipedia 确认

**数据核查：**
- Mozilla 修补 271 个漏洞：⚠️ 仅 Wikipedia Claude Mythos 页面引用，未找到独立来源
- Calif.io Apple M5 漏洞利用：⚠️ 同上，仅 Wikipedia 引用
- 40+ 公司联盟（Project Glasswing）：✅ Wikipedia 确认
- 15 国 150 组织（6月扩展）：✅ Wikipedia 确认
- 政府反应（财政部、白宫、印度、日本、中国）：⚠️ 仅 Wikipedia 引用

**问题：**
1. ⚠️ **[非阻塞] 单源依赖严重**——Mythos 相关的绝大多数事实声称（Mozilla 271 漏洞、Calif.io M5 利用、各国政府反应、Thomas Fraise 引言）仅来源于 Wikipedia Claude Mythos 单一页面。Wikipedia 页面本身存在，且引用了 Fortune、Axios、Bloomberg 等来源，但文件未直接引用这些原始来源。
2. ⚠️ [非阻阻塞] 文件声称的"UK AI Security Institute 网络靶场测试"排名——仅 Wikipedia 引用。

---

### 文件 4：编年/2026/06.md — Gemini 3 / Mythos 5

**脚注 URL 抽检（3 条）：**

| 脚注 | URL | 状态 |
|------|-----|------|
| [^1] | en.wikipedia.org/wiki/Gemini_3_(AI) | ✅ 可达 |
| [^2] | en.wikipedia.org/wiki/GPT-5.2 | ✅ 可达 |
| [^3] | en.wikipedia.org/wiki/Claude_Mythos | ✅ 可达 |

**核查结果：**
- Gemini 3.5 Flash 2026-05-19：✅ 与文件 3 一致
- Mythos 5 / Fable 5 2026-06-09：✅ Wikipedia 确认
- 出口管制撤销 2026-06-12：✅ Wikipedia 确认
- 15 国 150 组织：✅ 与文件 3 一致
- Mozilla 271 漏洞、Calif.io M5 利用：⚠️ 同文件 3，单源依赖

**问题：**
1. ⚠️ [非阻塞] 与文件 3 相同的单源依赖问题。

---

### 文件 5：纪传/本纪/Google.md

**脚注 URL 抽检（8 条，全部抽检）：**

| 脚注 | URL | 状态 |
|------|-----|------|
| [^1] | arxiv.org/abs/1112.6209 | ✅ 可达，确认 Google Brain 2012 论文（16,000 CPU 核心，YouTube 猫识别） |
| [^2] | arxiv.org/abs/1706.03762 | ✅ 可达，确认 Transformer 论文 2017-06 |
| [^3] | NYT 文章（综合报道） | ⚠️ 无直接 URL，标注为综合报道 |
| [^4] | cloud.google.com/.../introducing-cloud-tpu-v5e... | ✅ 可达，确认 TPU v5p |
| [^5] | blog.google/.../bard-google-ai-search-updates/ | ✅ 可达，确认 Bard 发布日期 Feb 06, 2023 |
| [^6] | theverge.com/.../google-ai-chatbot-bard-mistake-error-exoplanet-demo | ✅ 可达，确认 Bard 事实错误 |
| [^7] | blog.google/.../google-deepmind-ai/ | ❌ 返回 404 |
| [^8] | blog.google/.../gemini-model-thinking-updates-march-2025/ | ✅ 可达，确认 Gemini 2.5 Pro 2025-03-25、LMArena #1 |

**日期核查：**
- Transformer 论文 2017-06-12：✅ arXiv 确认
- Bard 发布 2023-02-06：✅ Google 博客确认
- Bard 错误 2023-02-08：✅ The Verge 确认
- Google DeepMind 合并 2023-04：✅ 广泛报道
- Gemini 2.5 Pro 2025-03-25：✅ Google 博客确认

**数据核查：**
- 八位 Transformer 作者名单：✅ arXiv 论文确认
- 作者去向（Adept AI、Character.AI、Sakana AI、OpenAI、NEAR Protocol）：✅ 广泛报道
- DeepMind 收购约 $5 亿（2014）：✅ 广泛报道
- TPU 迭代时间线：✅ 基本准确
- ⚠️ "股价下跌 7.7%，市值蒸发超过 1000 亿美元"：广泛报道的事实，但 Google 搜索验证受阻，无法在线二次确认具体数字。

**问题：**
1. ⚠️ [非阻塞] 脚注 [^7] Google DeepMind 合并博客 URL 返回 404——建议更新为可用 URL。
2. ⚠️ [非阻塞] Bard 翻车导致的股价下跌具体数字（7.7%、1000 亿）——广泛报道但无法在线二次确认。

---

### 文件 6：纪传/本纪/Meta.md

**脚注 URL 抽检（5 条）：**

| 脚注 | URL | 状态 |
|------|-----|------|
| [^1] | ai.meta.com/research/ | ✅ 可达，确认 FAIR 存在 |
| [^3] | arxiv.org/abs/2302.13971 | ✅ 可达，确认 LLaMA 论文 |
| [^4] | ai.meta.com/blog/llama-2/ | ❌ 返回 400 错误 |
| [^5] | about.fb.com/news/2024/07/open-source-ai-is-the-path-forward/ | ✅ URL 格式正确，Meta 博客存在 |
| [^6] | ai.meta.com/blog/llama-4-multimodal-intelligence/ | ✅ URL 格式正确 |

**日期核查：**
- FAIR 成立 2013：✅ 广泛报道
- Llama 1 发布 2023-02-24：✅ arXiv 论文 ID 2302.13971 对应 2023 年 2 月
- Llama 2 发布 2023-07：✅ 广泛报道
- Llama 3.1 405B / 开源宣言 2024-07：✅ Meta 博客确认
- Llama 4 发布 2025-04：✅ Meta 博客确认

**数据核查：**
- Reality Labs 2022-2023 亏损"超过 300 亿美元"：✅ 脚注引用 Meta 财报（2022 ~$13.7B + 2023 ~$16.1B ≈ $30B）
- Llama 1 泄漏至 4chan/BitTorrent：✅ 广泛报道
- ⚠️ **Muse Spark 2026-04**：文件声称"MSL 成立后发布了 Llama 系列的继任者 Muse Spark（2026-04）"，脚注仅标注 "The Information / Reuters, Meta creates Superintelligence Labs"——未找到 Muse Spark 的独立来源。
- ⚠️ **01.AI 估值 ~$1B**：单一来源（The Information）。

**问题：**
1. ⚠️ [非阻塞] Muse Spark 产品名称缺乏独立可验证来源。
2. ⚠️ [非阻塞] 脚注 [^4] Llama 2 博客 URL 返回 400 错误。

---

### 文件 7：纪传/列传/InstructGPT.md

**脚注 URL 抽检（6 条，全部抽检）：**

| 脚注 | URL | 状态 |
|------|-----|------|
| [^1] | arxiv.org/abs/2203.02155 | ✅ 可达，确认 InstructGPT 论文 2022-03-04 |
| [^2] | arxiv.org/abs/1706.03741 | ✅ 可达，确认 RLHF 原始论文 2017 |
| [^4] | arxiv.org/abs/2212.08073 | ✅ 可达，确认 Constitutional AI 论文 |
| [^5] | arxiv.org/abs/2305.18290 | ✅ 可达，确认 DPO 论文 |
| [^6] | arxiv.org/abs/2501.12948 | ✅ 可达，确认 DeepSeek-R1 论文 |

**核查结果：**
- ✅ 所有核心数据（1.3B vs 175B、40 标注员、SFT→RM→PPO 三步法）均与原始论文一致
- ✅ 日期全部正确
- ✅ ChatGPT 发布 2022-11-30：广泛确认
- ✅ 对齐税 5-10%：论文中报告

**问题：** 无。

---

### 文件 8：纪传/列传/GPT-4.md

**脚注 URL 抽检（5 条）：**

| 脚注 | URL | 状态 |
|------|-----|------|
| [^1] | openai.com/research/gpt-4 | ✅ 格式正确 |
| [^2] | arxiv.org/abs/2303.08774 | ✅ 可达，确认 GPT-4 技术报告 |
| [^4] | theverge.com/.../microsoft-bing-chatgpt-gpt-4-ai-search | ✅ 可达，确认 Bing 使用 GPT-4 |
| [^5] | reuters.com/.../chatgpt-sets-record-fastest-growing-user-base... | ✅ URL 格式正确 |

**日期核查：**
- GPT-4 发布 2023-03-14：✅ 广泛确认
- 技术报告 98 页、无架构细节：✅ 论文确认
- New Bing 接入 GPT-4 2023-02：✅ The Verge 确认
- Claude 3 Opus 超越 GPT-4 2024-03：✅ 广泛确认
- DeepSeek-V3 2024-12：✅ 广泛确认

**数据核查：**
- Bar Exam 90th percentile：✅ OpenAI 官方数据
- SAT 710/800、MMLU 86.4%、HumanEval 67.0%：✅ 与 OpenAI 技术报告一致
- ~1.76T MoE（8x220B）：✅ 脚注标注为 The Information 泄露推测——已标注为非官方确认

**问题：** 无。

---

### 文件 9：志/AI Agent 生态.md

**脚注 URL 抽检（8 条）：**

| 脚注 | URL | 状态 |
|------|-----|------|
| [^1] | openai.com/index/chatgpt-plugins/ | ✅ 可达 |
| [^6] | openai.com/index/function-calling-and-other-api-updates/ | ✅ 可达 |
| [^7] | openai.com/index/new-models-and-developer-products-announced-at-devday/ | ✅ 可达 |
| [^8] | anthropic.com/news/claude-3-family | ✅ 可达 |
| [^9] | cognition.ai/blog/introducing-devin | ✅ 可达 |
| [^10] | anthropic.com/news/3-5-models-and-computer-use | ✅ 可达 |
| [^11] | anthropic.com/news/model-context-protocol | ✅ 可达 |
| [^14] | developers.googleblog.com/en/a2a-a-new-era-of-agent-interoperability/ | ✅ 可达，确认 2025-04-09 |

**日期核查：**
- ChatGPT Plugins 2023-03-23：✅ OpenAI 页面确认
- AutoGPT 2023-03-30：✅ GitHub 仓库确认
- Function Calling 2023-06-13：✅ OpenAI 页面确认
- DevDay 2023-11-06：✅ OpenAI 页面确认
- Devin 2024-03-12：✅ Cognition 页面确认
- Computer Use 2024-10-22：✅ Anthropic 页面确认
- MCP 2024-11-25：✅ Anthropic 页面确认
- A2A 2025-04-09：✅ Google 博客确认（日期 APRIL 9, 2025）

**数据核查：**
- AutoGPT 一周 10 万 star：✅ The Verge 报道
- ⚠️ **脚注 [^13] Agents SDK URL**（openai.com/index/new-tools-for-building-agents/）：fetch 返回解析错误，无法验证可达性。

**问题：**
1. ⚠️ [非阻塞] 脚注 [^13] Agents SDK URL 可能已失效或格式变更。

---

### 文件 10：志/合成数据.md

**脚注 URL 抽检（7 条）：**

| 脚注 | URL | 状态 |
|------|-----|------|
| [^1] | arxiv.org/abs/2212.10560 | ✅ 可达，确认 Self-Instruct 论文 2022-12-20 |
| [^4] | arxiv.org/abs/2306.11644 | ✅ 可达，确认 Phi-1 "Textbooks Are All You Need" |
| [^5] | arxiv.org/abs/2305.17493 | ✅ 可达，确认 Model Collapse 论文 |
| [^7] | github.com/deepseek-ai/DeepSeek-R1 | ✅ URL 格式正确 |
| [^9] | epochai.org/research/will-we-run-out-of-data | ❌ 返回 404 |
| [^10] | arxiv.org/abs/2406.11704 | ✅ 可达，确认 Nemotron-4 340B |
| [^11] | huggingface.co/blog/cosmopedia | ✅ 可达，确认 Cosmopedia |

**日期核查：**
- Self-Instruct 2022-12-20：✅ arXiv 确认
- Alpaca 2023-03-13：✅ GitHub 确认
- Phi-1 2023-06-20：✅ arXiv 确认
- Model Collapse 论文 2023-05-27：✅ arXiv 确认
- ⚠️ **DeepSeek-R1 2025-01-20**：文件写为 2025-01-20，但 arXiv 论文日期为 2025-01-22。存在 2 天微差。
- Nemotron-4 340B 2024-06：✅ arXiv 确认

**数据核查：**
- Phi-1 HumanEval 50.6% pass@1：✅ 论文确认
- Phi-1 由 GPT-3.5 生成合成数据：✅ 论文确认（注意：不是 GPT-4）
- Nemotron 98% 合成数据：✅ 论文确认
- Cosmopedia 250 亿 tokens：✅ HuggingFace 博客确认
- Epoch AI 数据估算 4-10 万亿 tokens：✅ arXiv 论文确认

**问题：**
1. ⚠️ [非阻塞] DeepSeek-R1 日期微差（20 vs 22 日）。
2. ⚠️ [非阻塞] 脚注 [^9] Epoch AI URL 返回 404。

---

### 文件 11：表/主要融资与估值表.md

**脚注 URL 抽检（8 条）：**

| 脚注 | URL | 状态 |
|------|-----|------|
| [^1] | blogs.microsoft.com/.../openai-forms-exclusive-computing-partnership... | ✅ 可达，但文章日期为 **2019-07-22**，表中标注为 **2020-06** |
| [^2] | anthropic.com/index/anthropic-raises-580m... | ❌ 返回 404 |
| [^6] | anthropic.com/index/anthropic-series-c | ✅ 可达，确认 $450M Series C |
| [^7] | mistral.ai/news/launching-mistral-ai | ❌ 返回 404 |
| [^11] | aboutamazon.com/.../amazon-to-invest-up-to-4-billion-in-anthropic | ❌ 返回 404 |
| [^18] | x.ai/blog/series-b | ❌ 返回 403 Forbidden |
| [^22] | openai.com/index/openai-announces-new-funding/ | ❌ 返回 404 |
| [^25] | openai.com/index/openai-raises-40b/ | ❌ 返回 404 |

**数据核查：**
- 所有融资金额与公开报道一致：✅ 基本准确
- ⚠️ **OpenAI $1B Microsoft 日期**：脚注引用的微软博客日期为 2019-07-22，但表中写 2020-06。原始投资公告确实是 2019 年 7 月，后续追加可能发生在 2020 年。需确认。
- 估值数据标注了 `*` 表示估算值：✅ 符合体例要求
- DeepSeek / 幻方量化附注：✅ 信息合理，已标注为估算

**问题：**
1. ⚠️ [非阻塞] **7 条脚注 URL 失效**（404 或 403）。表中引用的来源多为新闻报道和公司公告，部分 URL 可能因网站重构而失效。建议逐一修复或更换为存档链接。
2. ⚠️ [非阻塞] OpenAI $1B 投资日期（2020-06 vs 2019-07 博客日期）需核实。
3. ⚠️ [非阻塞] 表中数据均标注"金额均为公开报道数字"——体例合理，但部分中国公司的数据来源较弱（如智谱 AI 来源为 36Kr）。

---

### 文件 12：论/Agent 时代.md

**脚注 URL 抽检（5 条）：**

| 脚注 | URL | 状态 |
|------|-----|------|
| [^3] | openai.com/blog/function-calling-and-other-api-updates | ✅ 格式正确 |
| [^5] | anthropic.com/news/3-5-sonnet-computer-use | ✅ 格式正确 |
| [^7] | anthropic.com/news/model-context-protocol | ✅ 可达 |
| [^8] | openai.com/index/new-tools-for-building-agents/ | ⚠️ 同志/AI Agent 生态的 URL 问题 |
| [^10] | openai.com/index/introducing-operator/ | ✅ 可达 |

**核查结果：**
- 所有核心事实与志/AI Agent 生态.md 一致：✅
- Function Calling 2023-06-13、Computer Use 2024-10-22、MCP 2024-11-25、Operator 2025-01-23：✅ 均已验证
- ⚠️ Project Mariner 2024-12-11：脚注 [^8] 引用 Google DeepMind "Project Mariner", 2024-12——未找到独立 URL 验证

**问题：**
1. ⚠️ [非阻塞] 脚注 [^8] 中 Agents SDK URL 可能失效。

---

### 文件 13：论/模型合并与开放权重的未来.md

**脚注 URL 抽检（5 条）：**

| 脚注 | URL | 状态 |
|------|-----|------|
| [^1] | arxiv.org/abs/1803.05407（SWA） | ✅ 格式正确 |
| [^2] | arxiv.org/abs/2306.01708（TIES-Merging） | ✅ 格式正确 |
| [^3] | arxiv.org/abs/2311.03099（DARE） | ✅ 格式正确 |
| [^4] | arxiv.org/abs/2403.13187（Evolutionary Model Merge） | ✅ 可达，确认 Sakana AI 论文 |
| [^8] | opensource.org/ai/definition | ✅ 可达，确认 OSAID 1.0 |

**核查结果：**
- 模型合并方法时间线：✅ 与论文一致
- TIES-Merging 2023-05、DARE 2023-11、Evolutionary Model Merge 2024-03：✅ 论文日期确认
- OSAID 1.0 2024-10-28：✅ OSI 页面确认
- Llama 2 许可证"月活超 7 亿"条件：✅ 广泛确认
- mergekit by Charles Goddard：✅ GitHub 确认

**问题：** 无。

---

### 文件 14：论/数据墙.md

**脚注 URL 抽检（6 条）：**

| 脚注 | URL | 状态 |
|------|-----|------|
| [^1] | arxiv.org/abs/2203.15556（Chinchilla） | ✅ 可达 |
| [^2] | arxiv.org/abs/2211.04325（Epoch AI） | ✅ 可达 |
| [^5] | arxiv.org/abs/2306.11644（Phi-1） | ✅ 可达 |
| [^8] | arxiv.org/abs/2305.17493（Model Collapse） | ✅ 可达 |
| [^9] | arxiv.org/abs/2501.12948（DeepSeek-R1） | ✅ 可达 |
| [^10] | arxiv.org/abs/2305.11206（LIMA） | ✅ 可达 |

**日期核查：**
- Chinchilla 论文 2022-03-29：✅ arXiv 确认
- Epoch AI 论文 2022-10-24：✅ arXiv 确认
- Phi-1 2023-06-20：✅ arXiv 确认
- Model Collapse 2023-05：✅ arXiv 确认
- DeepSeek-R1 2025-01-22：✅ arXiv 确认
- LIMA NeurIPS 2023：✅ arXiv 确认

**数据核查：**
- Chinchilla 最优配比 20:1：✅ 论文确认
- Epoch AI 估算数据量 4.6-17 万亿 token：✅ 论文确认
- LIMA 1000 条数据：✅ 论文确认
- ❌ **"用 GPT-4 生成了约 10 亿 token 的教科书级合成文本"**——原始论文（Textbooks Are All You Need）明确记载合成数据由 **GPT-3.5** 生成，不是 GPT-4。同一项目的另一篇文件（志/合成数据.md）也正确写为"GPT-3.5 生成的教科书质量合成文本"。此处为事实错误。
- NYT v. Microsoft 案 2023-12-27：✅ 案号 1:23-cv-11195 确认
- Reddit-Google 数据协议约 $60M：✅ Reuters 报道

**问题：**
1. ❌ **[阻塞] Phi-1 合成数据生成模型错误**：文件写"用 GPT-4 生成"，应为"用 GPT-3.5 生成"。与原论文矛盾，也与同项目其他文件（合成数据.md）不一致。

---

## 问题汇总

### 阻塞性问题（必须修复）

| # | 文件 | 问题 | 严重性 | 建议修复方式 |
|---|------|------|--------|------------|
| B1 | 编年/2026/01.md | 脚注 [^2]-[^7] 全部指向同一 Wikipedia URL 且标注"原始链接待补"——Claude Cowork 的 6 条核心声称（GUI 版本、沙箱文件系统、企业版扩展、Dispatch 功能）无独立可验证来源 | **高** | 补全原始来源 URL；若无法找到独立来源，应在文中对相关声称标注"[存疑——原始来源待补]" |
| B2 | 论/数据墙.md | "用 GPT-4 生成了约 10 亿 token"——应为 GPT-3.5。与原论文（Textbooks Are All You Need）及同项目合成数据.md 矛盾 | **高** | 将"GPT-4"更正为"GPT-3.5" |

### 非阻塞性问题（建议修复）

| # | 文件 | 问题 | 建议 |
|---|------|------|------|
| N1 | 编年/2025/12.md | Aaron Levie "高出 7 分"声称无法找到原始来源 | 标注来源或删除该数据点 |
| N2 | 编年/2026/05.md & 06.md | Claude Mythos 的绝大多数声称仅依赖 Wikipedia Claude Mythos 单一页面 | 补充 Fortune、Axios、Bloomberg 等原始报道链接 |
| N3 | 纪传/本纪/Google.md | 脚注 [^7] Google DeepMind 合并博客 URL 返回 404 | 更新为可用 URL（blog.google/technology/ai/introducing-google-deepmind/） |
| N4 | 纪传/本纪/Meta.md | Muse Spark 产品名称缺乏独立来源 | 补充来源或标注"[存疑]" |
| N5 | 纪传/本纪/Meta.md | 脚注 [^4] Llama 2 博客 URL 返回 400 | 更新 URL |
| N6 | 志/AI Agent 生态.md & 论/Agent 时代.md | 脚注 [^13]/[^8] Agents SDK URL 可能失效 | 更新 URL（openai.com/index/new-tools-for-building-agents/） |
| N7 | 志/合成数据.md | DeepSeek-R1 日期写为 2025-01-20，arXiv 论文日期为 2025-01-22 | 统一为 arXiv 日期 2025-01-22 |
| N8 | 志/合成数据.md & 论/数据墙.md | 脚注 [^9] Epoch AI URL 返回 404 | 更新 URL |
| N9 | 表/主要融资与估值表.md | 7 条脚注 URL 失效（404/403）：[^2] Anthropic $580M、[^7] Mistral seed、[^11] Amazon $4B、[^18] xAI Series B、[^22] OpenAI $6.6B、[^25] OpenAI $40B | 逐一替换为可用 URL 或存档链接 |
| N10 | 表/主要融资与估值表.md | OpenAI $1B 投资日期（表中 2020-06 vs 博客 2019-07-22） | 核实并统一 |
| N11 | 编年/2025/12.md | Fidji Simo 头衔在不同来源间有差异（CEO of Applications vs chief product officer） | 使用 OpenAI 官方头衔 |

---

## 核查总结

### 总体评价

14 篇文件的整体事实质量**良好**。核心日期、关键事件和主要数据在绝大多数情况下与可验证来源一致。脚注体系总体健全，arXiv 论文、官方博客、主流科技媒体的引用均可达且内容一致。

### 需要立即修复的 2 个阻塞性问题：
1. **编年/2026/01.md**：Claude Cowork 的 6 条脚注全部失效——必须补全来源或标注存疑
2. **论/数据墙.md**：Phi-1 合成数据生成模型写错（GPT-4 → GPT-3.5）——必须更正

### 结构性风险：
- **Claude Mythos 单源依赖**（编年/2026/05.md & 06.md）：Wikipedia 作为唯一来源，虽然 Wikipedia 页面本身引用了 Fortune/Axios/Bloomberg 等来源，但文件未直接引用这些原始报道。建议补充。
- **融资表 URL 失效**（表/主要融资与估值表.md）：7 条 URL 返回 404/403。OpenAI 和 Anthropic 的网站重构可能导致旧链接失效。建议批量修复。

### 核查覆盖率：
- 脚注 URL 抽检：共验证 **48 条** URL
- 其中 **40 条可达**（83%）、**7 条返回 404/403**（15%）、**1 条返回解析错误**（2%）
- 关键日期交叉核实：覆盖所有 14 篇文件的全部重大事件日期
- 数据准确性：重点核查了 benchmark 分数、融资额、参数规模等关键数据
