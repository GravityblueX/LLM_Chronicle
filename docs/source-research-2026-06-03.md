# Source research memo — 2026-06-03/04

Project: `LLM_Chronicle`
Researcher: 博衣小夜璃
Scope requested: do not rewrite chronicle body; add source memo for gaps.
Method note: sources below were not only fetched via HTTP. I opened key URLs in browser tabs and verified visible page title/body/date text with browser/extension tools. Items marked **browser verified** include the visible evidence I observed.

## 1. Llama 4 / LMArena benchmark controversy

### 1.1 Meta official launch page

- Title: `The Llama 4 herd: The beginning of a new era of natively multimodal AI innovation`
- URL: https://ai.meta.com/blog/llama-4-multimodal-intelligence/
- Date: 2025-04-05 (visible in search result; page title browser verified, body extraction limited by site rendering)
- Browser verification: **browser verified** — opened in browser; tab title matched the official Meta Llama 4 launch title. Browser text extraction from the dynamic page returned limited text, so use this primarily as official launch URL, not as sole controversy evidence.
- Supports:
  - Meta official release page for Llama 4.
  - Search snippet / secondary reports quote Meta's page as saying Maverick had an “experimental chat version” with ELO 1417 on LMArena.
- Reliability: official for launch and model family; for controversy, use together with The Verge / TechCrunch / LMArena statement.

### 1.2 The Verge report on LMArena controversy

- Title: `Meta gets caught gaming AI benchmarks with Llama 4 | The Verge`
- URL: https://www.theverge.com/meta/645012/meta-llama-4-maverick-benchmarks-gaming
- Date: 2025-04-08 09:32 GMT+8; page notes update Apr 7 in body due timezone/site metadata inconsistency.
- Browser verification: **browser verified** — visible text included headline, byline, date, and quoted LMArena/Meta statements.
- Visible evidence:
  - “In fine print, Meta acknowledges that the version of Maverick tested on LMArena isn’t the same as what’s available to the public.”
  - LMArena quote: “Meta should have made it clearer that ‘Llama-4-Maverick-03-26-Experimental’ was a customized model to optimize for human preference.”
  - Meta spokesperson quote: “‘Llama-4-Maverick-03-26-Experimental’ is a chat optimized version we experimented with that also performs well on LMArena.”
- Supports:
  - The specific dispute: LMArena submission differed from public release.
  - LMArena policy response and Meta statement.
- Reliability: strong secondary source with direct quoted statements; should replace current vague footnote “Various community reports”.

### 1.3 TechCrunch follow-up on vanilla Maverick ranking

- Title: `Meta's vanilla Maverick AI model ranks below rivals on a popular chat benchmark | TechCrunch`
- URL: https://techcrunch.com/2025/04/11/metas-vanilla-maverick-ai-model-ranks-below-rivals-on-a-popular-chat-benchmark/
- Date: 2025-04-11 3:46 PM PDT.
- Browser verification: **browser verified** — visible text included headline, date, and article body.
- Visible evidence:
  - “Meta landed in hot water for using an experimental, unreleased version of its Llama 4 Maverick model to achieve a high score on a crowdsourced benchmark, LM Arena.”
  - “The unmodified Maverick, ‘Llama-4-Maverick-17B-128E-Instruct,’ was ranked below models including OpenAI’s GPT-4o, Anthropic’s Claude 3.5 Sonnet, and Google’s Gemini 1.5 Pro as of Friday.”
  - “Meta’s experimental Maverick, Llama-4-Maverick-03-26-Experimental, was ‘optimized for conversationality’...”
  - Meta statement repeated: “chat optimized version we experimented with that also performs well on LM Arena.”
- Supports:
  - The post-controversy claim that unmodified/public Maverick ranked lower than the experimental LMArena variant.
- Reliability: strong secondary source; especially useful for “actual open/release version weaker on LMArena” claim.

## 2. DeepSeek V2 concrete sources

### 2.1 arXiv paper

- Title: `DeepSeek-V2: A Strong, Economical, and Efficient Mixture-of-Experts Language Model`
- URL: https://arxiv.org/abs/2405.04434
- DOI: https://doi.org/10.48550/arXiv.2405.04434
- Date: submitted 2024-05-07 v1; latest revised 2024-06-19 v5.
- Browser verification: **browser verified** — arXiv page visible title, submission history, abstract.
- Visible evidence:
  - “[Submitted on 7 May 2024 (v1), last revised 19 Jun 2024 (this version, v5)]”
  - “It comprises 236B total parameters, of which 21B are activated for each token, and supports a context length of 128K tokens.”
  - “DeepSeek-V2 adopts innovative architectures including Multi-head Latent Attention (MLA) and DeepSeekMoE.”
  - “saves 42.5% of training costs, reduces the KV cache by 93.3%, and boosts the maximum generation throughput to 5.76 times.”
- Supports:
  - Architecture, parameters, MLA, 128K context, efficiency claims.
- Caveat:
  - Publication/submission date is 2024-05-07, while model release date is better sourced by GitHub/HF news below as 2024-05-06.

### 2.2 Hugging Face model card

- Title: `deepseek-ai/DeepSeek-V2 · Hugging Face`
- URL: https://huggingface.co/deepseek-ai/DeepSeek-V2
- Date: model card includes release/news; page itself lacks a simple top date.
- Browser verification: **browser verified** — visible page title and model card body.
- Visible evidence:
  - “DeepSeek-V2: A Strong, Economical, and Efficient Mixture-of-Experts Language Model”
  - “Today, we’re introducing DeepSeek-V2...”
  - “It comprises 236B total parameters, of which 21B are activated for each token.”
  - “reduces the KV cache by 93.3%”
  - “We also provide OpenAI-Compatible API at DeepSeek Platform: platform.deepseek.com.”
- Supports:
  - Model card metadata, model availability, parameters, official DeepSeek/HF source.
- Caveat:
  - For explicit 2024-05-06 release date, GitHub repository news is cleaner (fetch verified earlier): https://github.com/deepseek-ai/DeepSeek-V2 contains “2024.05.06: We released the DeepSeek-V2.” If needed, browser-open this too before editing footnote.

## 3. DeepSeek V4 concrete API Docs page

### 3.1 DeepSeek API Docs — V4 preview

- Title: `DeepSeek-V4 预览版：迈入百万上下文普惠时代 | DeepSeek API Docs`
- URL: https://api-docs.deepseek.com/zh-cn/news/news260424
- Date: 2026-04-24.
- Discovery: Google browser search for `site:api-docs.deepseek.com/zh-cn/news DeepSeek V4` showed this exact page as first result.
- Browser verification: **browser verified** — opened exact API Docs page and verified title/sidebar/body.
- Visible evidence:
  - Sidebar/news label: “DeepSeek-V4 预览版发布 2026/04/24”.
  - Body: “今天，我们全新系列模型 DeepSeek-V4 的预览版本正式上线并同步开源。”
  - Body: “DeepSeek-V4 拥有百万字超长上下文，在 Agent 能力、世界知识和推理性能上均实现国内与开源领域的领先。”
  - Body: “API 服务已同步更新，通过修改 model_name 为 deepseek-v4-pro 或 deepseek-v4-flash 即可调用。”
  - Body: “V4-Pro 与 V4-Flash 最大上下文长度为 1M，均同时支持非思考模式与思考模式...”
  - Body: old model names `deepseek-chat` and `deepseek-reasoner` stop use after 2026-07-24; currently point to v4-flash non-thinking/thinking modes.
  - Open weights links visible:
    - https://huggingface.co/collections/deepseek-ai/deepseek-v4
    - https://modelscope.cn/collections/deepseek-ai/DeepSeek-V4
    - tech report: https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro/blob/main/DeepSeek_V4.pdf
- Supports:
  - Replace weak/404 Tencent News footnote for “DeepSeek V4 发布” with official API Docs page.
  - Supports exact model names and 1M context/API access claims.
- Correction needed:
  - Current `编年/2026/03.md` footnote [^7] points to `https://news.qq.com/rain/20260424`, which browser verification shows redirects/lands on Tencent 404 (`https://h5.news.qq.com/static/babyhome.htm`, title `404 您访问的页面找不到了_腾讯网`). This source should not be used as support.
  - Current text says “距 2025 年 1 月 R1 爆火以来时隔 15 个月的首个重大版本更新”; official page calls it “预览版本”, not necessarily “首个重大版本更新”. Mark wording for editorial review if body is later revised.

## 4. o3 / o3-mini / o4-mini date sources and date-conflict resolution

### 4.1 OpenAI o3-mini official page

- Title: `OpenAI o3-mini | OpenAI`
- URL: https://openai.com/index/openai-o3-mini/
- Date: visible page date 2025-01-31.
- Browser verification: **browser verified** — page auto-rendered Chinese locale but URL/title and visible body verified.
- Visible evidence:
  - “2025年1月31日”
  - “OpenAI o3‑mini”
  - “我们正在发布 OpenAI o3‑mini...” / “We’re releasing OpenAI o3‑mini...”
  - “这款功能强大的快速模型于 2024 年 12 月进行了预览发布” / Previewed in December 2024.
  - “即日起，o3‑mini 将在聊天完成 API、助手 API 和批处理 API 中逐步推出...”
  - “ChatGPT Plus、Team 和 Pro 版用户即日起可访问...”
- Supports:
  - o3-mini official release date is 2025-01-31.
  - December 2024 was preview, not public/full release.

### 4.2 OpenAI official o3 and o4-mini page

- Title: `隆重推出 OpenAI o3 和 o4-mini | OpenAI` (Chinese locale for official page)
- Canonical URL: https://openai.com/index/introducing-o3-and-o4-mini/
- Browser-resolved URL: https://openai.com/zh-Hans-CN/index/introducing-o3-and-o4-mini/
- Date: visible page date 2025-04-16.
- Browser verification: **browser verified** — opened official page in browser; initial English path failed to load in one tab, but navigation to canonical with locale rendered successfully.
- Visible evidence:
  - “2025年4月16日”
  - “隆重推出 OpenAI o3 和 o4-mini”
  - “今日，我们正式发布 OpenAI o3 和 o4-mini...”
  - “OpenAI o3 是我们功能最为强大的推理模型...”
  - Access section in fetched source also says ChatGPT Plus/Pro/Team users see o3/o4-mini starting today and developers can access via API.
- Supports:
  - o3 official release date is 2025-04-16.
  - o4-mini release date is 2025-04-16.

### 4.3 ARC Prize o3 preview/evaluation page

- Title: `OpenAI o3 Breakthrough High Score on ARC-AGI-Pub | ARC Prize`
- URL: https://arcprize.org/blog/oai-o3-pub-breakthrough
- Date: 2024-12-20.
- Browser verification: **browser verified** — visible title/date/body.
- Visible evidence:
  - “PUBLISHED 20 DEC 2024”
  - “Update 12/20/2024: ARC Prize presented o3's performance results in person with OpenAI's Sam Altman ... during the final ‘12 Days of OpenAI’ event.”
  - “Updated (April 16, 2025): OpenAI has officially released o3. OpenAI has confirmed that this version is not the same as the one we tested in this original post.”
- Supports:
  - 2024-12-20 is a preview/evaluation/presentation date for an o3 system, not the same as the released o3 model.
  - Resolves date conflict with 2025-04-16 official release.

## 5. 2026/03 LeWorldModel source quality

### 5.1 arXiv LeWorldModel

- Title: `LeWorldModel: Stable End-to-End Joint-Embedding Predictive Architecture from Pixels`
- URL: https://arxiv.org/abs/2603.19312
- DOI: https://doi.org/10.48550/arXiv.2603.19312
- Date: submitted 2026-03-13 v1; revised 2026-03-24 v2.
- Browser verification: **browser verified** — arXiv page visible title, authors, abstract, submission history.
- Visible evidence:
  - Authors: “Lucas Maes, Quentin Le Lidec, Damien Scieur, Yann LeCun, Randall Balestriero.”
  - Abstract: “we introduce LeWorldModel (LeWM), the first JEPA that trains stably end-to-end from raw pixels using only two loss terms...”
  - “This reduces tunable loss hyperparameters from six to one...”
  - “With ~15M parameters trainable on a single GPU in a few hours, LeWM plans up to 48x faster...”
  - Submission history: “[v1] Fri, 13 Mar 2026 ... [v2] Tue, 24 Mar 2026...”
- Supports:
  - Current LeWorldModel entry has a strong primary source for the core claims.
- Correction / caution:
  - Current chronicle line says “Yann LeCun 团队（Mila、NYU、Samsung SAIL、Brown University）”. The arXiv visible authors list only names, not affiliations in the abstract page. To substantiate affiliations, use PDF or HTML page before asserting institutions. Do not rely solely on arXiv abstract page for affiliation list.

## 6. 2026/03 “318 事变” source quality

### 6.1 Anthropic official distillation page

- Title: `Detecting and preventing distillation attacks | Anthropic`
- URL: https://www.anthropic.com/news/detecting-and-preventing-distillation-attacks
- Date: 2026-02-23 (from current chronicle and page metadata/fetched content; browser tab title verified, dynamic body extraction limited)
- Browser verification: **browser verified for page title and URL**; due dynamic rendering/tool return issue, visible body was not captured by browser eval, but HTTP fetch captured article text. Since administrator requested not only fetch, this one is only partially browser-verified.
- Fetched evidence:
  - “We have identified industrial-scale campaigns by three AI laboratories—DeepSeek, Moonshot, and MiniMax...”
  - “over 16 million exchanges with Claude through approximately 24,000 fraudulent accounts...”
  - DeepSeek scale: “Over 150,000 exchanges”; Moonshot: “Over 3.4 million exchanges”; MiniMax: “Over 13 million exchanges”.
- Supports:
  - Strong official source for the distillation-attack allegation and aggregate 24k/16M numbers.
- Caveat:
  - It does **not** by itself support the later community term “318 事变”, nor OpenAI/Google synchronous restrictions.

### 6.2 AtomGit / CSDN community explainer

- Title: `幕后黑手曝光：2.4万马甲、1600万次对话，他们把Claude的路走窄了_php_lulu1216544078-AtomGit开源社区`
- URL: https://gitcode.csdn.net/69c880230a2f6a37c59b424c.html
- Date: 2026-03-29 (per current chronicle; article page fetch did not expose clean date in visible excerpt)
- Evidence from fetched page:
  - Repeats Anthropic’s 24k/16M claim.
  - Explains user-side seal/ban wave and behavioral risk features: short-time high-volume conversations, similar request structures, frequent account switching.
- Supports:
  - Community-level explanation of Claude ban wave and why ordinary proxy users may be affected.
- Reliability: weak-to-medium; sponsored/promotional ending; should not be sole source for high-stakes claims.

### 6.3 Current Tencent News V4 source is broken

- Current URL: https://news.qq.com/rain/20260424
- Browser verification: **browser verified broken** — opening it redirected to `https://h5.news.qq.com/static/babyhome.htm`, title `404 您访问的页面找不到了_腾讯网`.
- Recommendation:
  - Remove/replace as V4 source with DeepSeek API Docs `news260424`.

### 6.4 Unsupported / lower-confidence claims in current 318 entry

The following current claims need stronger sources before retaining as factual assertions:

1. “OpenAI 和 Google 同步收紧对中国地区的 API 限制” — not verified by official/major source in this pass. Need official policy pages or reputable reporting.
2. Community label “316/317/318 事变” — search result quality was poor; term may be community slang and needs forum/social source if retained.
3. “Claude 彻底断供中国” from Tencent Cloud article — current URL should be rechecked; not browser-verified in this pass.
4. “中国模型（MiniMax、Kimi、GLM）在生产型 Token 调用量上首次超越美国模型” — current source is a personal archive/blog; needs industry report or platform telemetry source.
5. “DeepSeek V4 和 GLM-5.1 可替代御三家” — interpretive/community consensus; needs to be marked as opinion unless backed by evaluations.

## 7. URL shortlist for footnote replacement

Recommended high-priority replacements/additions:

1. Llama 4 official launch: https://ai.meta.com/blog/llama-4-multimodal-intelligence/
2. Llama 4 controversy / LMArena: https://www.theverge.com/meta/645012/meta-llama-4-maverick-benchmarks-gaming
3. Llama 4 vanilla Maverick lower ranking: https://techcrunch.com/2025/04/11/metas-vanilla-maverick-ai-model-ranks-below-rivals-on-a-popular-chat-benchmark/
4. DeepSeek-V2 arXiv: https://arxiv.org/abs/2405.04434
5. DeepSeek-V2 HF model card: https://huggingface.co/deepseek-ai/DeepSeek-V2
6. DeepSeek-V2 GitHub release/news: https://github.com/deepseek-ai/DeepSeek-V2
7. DeepSeek-V4 API Docs: https://api-docs.deepseek.com/zh-cn/news/news260424
8. o3-mini official release: https://openai.com/index/openai-o3-mini/
9. o3/o4-mini official release: https://openai.com/index/introducing-o3-and-o4-mini/
10. o3 Dec 2024 preview/evaluation distinction: https://arcprize.org/blog/oai-o3-pub-breakthrough
11. LeWorldModel arXiv: https://arxiv.org/abs/2603.19312
12. Anthropic distillation official source: https://www.anthropic.com/news/detecting-and-preventing-distillation-attacks

## 8. Editorial recommendations without body rewrite

- `编年/2025/04.md` footnote [^2] should be replaced from “Various community reports...” to at least The Verge + TechCrunch; optionally include LMArena X post if separately archived.
- `编年/2024/05.md` DeepSeek-V2 footnote currently says original blog link失效 and uses arXiv. Add HF/GitHub source for 2024-05-06 release date and model card facts; keep arXiv for technical report.
- `编年/2026/03.md` footnote [^7] should be replaced: Tencent URL is broken; official API Docs page `news260424` is the reliable source.
- `编年/2025/04.md` o3 date is correct for official release: 2025-04-16. If project also mentions 2024-12-20 elsewhere, distinguish it as preview/evaluation presentation, not same as released o3.
- `编年/2026/03.md` LeWorldModel source is high quality for technical claims; affiliation claim needs PDF/HTML verification.
- `编年/2026/03.md` “318 事变” remains source-fragile beyond Anthropic’s official allegation; preserve as community framing only with caveat unless stronger sources are found.

这篇论文的引用链我回溯了，原始数据在这里——虽然网页不是论文页码，但每个关键事实都已落到可见 URL 和页面证据上。
