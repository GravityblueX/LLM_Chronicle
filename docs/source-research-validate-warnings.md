# Source Research — Validate Warnings Fix (2026-06-04)

Researcher: 博衣小夜璃 (Koyori)
Scope: E009 warnings from `validate_format.js` — URLs flagged as incomplete (missing article path).
Method: Browser real-page verification + HTTP fetch. All URLs opened in browser tabs, page title/date/body verified visually.

---

## 1. `编年/2026/03.md:78` — 80aj.com GLM-5.1 文章

### 1.1 问题

脚注 [^6] 当前 URL: `https://www.80aj.com/前沿/20260409/`

validator 的 URL 正则 `/(https?:\/\/[^\s\)\]\u4e00-\u9fff]+)/g` 排除了 CJK 字符（U+4E00-U+9FFF），导致含中文路径的 URL 被截断为 `https://www.80aj.com/`，触发 E009。

### 1.2 核验结果

- **实际 URL**: `https://www.80aj.com/2026/04/09/glm-5-modal-free-trial/`
- **标题**: 智谱 GLM-5.1 登陆 Modal 平台：限时免费试用，工具调用能力获好评
- **日期**: 2026-04-09
- **浏览器核验**: **browser verified** — 通过 Google 搜索 `site:80aj.com 智谱 GLM-5.1 Modal 2026` 定位，点击进入后页面标题匹配
- **HTTP fetch 验证**: 标题、日期、正文内容一致
- **关键句**: "云端开发平台 Modal 宣布限时提供智谱 AI 大模型 GLM-5.1 的免费试用服务，活动将持续至 4 月 30 日。"

### 1.3 建议

替换 [^6] URL 为 `https://www.80aj.com/2026/04/09/glm-5-modal-free-trial/`。该 URL 不含中文字符，validator 可正常解析。

### 1.4 附：[^4] 同站 URL 也需替换

脚注 [^4] 当前 URL: `https://www.80aj.com/AI/20260306/` — 该 URL 被 80aj.com 重定向到无关文章（AI成人内容市场），非目标文章。

- **实际 URL**: `https://www.80aj.com/2026/03/06/anthropic-account-suspension-2026/`
- **标题**: Anthropic 2026 封号潮深度解析：风控升级与社区进化
- **日期**: 2026-03-06
- **浏览器核验**: **browser verified** — 通过 Google 搜索 `site:80aj.com Anthropic 封号 2026` 定位
- **关键句**: "2026 年 3 月，中文社区再次迎来 Anthropic/Claude 封号小高峰。这不是第一次，也不会是最后一次。"

---

## 2. `编年/2022/08.md:53` — 腾讯新闻 AI 绘画史记

### 2.1 问题

脚注 [^4] 当前 URL: `https://view.inews.qq.com` — 仅含域名，无具体文章路径。

### 2.2 核验结果

- **实际 URL**: `https://news.qq.com/rain/a/20230727A0A6J000`
- **标题**: AI绘画史记：诞生的第一年，stable Diffusion改变了世界
- **作者**: AI赋能实验室
- **日期**: 2023-07-27 23:09
- **浏览器核验**: **browser verified** — 通过 Google 搜索 `site:view.inews.qq.com "AI绘画史记" stable diffusion 2023` 定位，点击后页面标题、作者、日期、正文均可见
- **HTTP fetch 验证**: 标题、作者、日期、正文内容一致
- **关键句**: "对于全球的科技爱好者来说，过去的一年无疑是一个充满变革和创新的年份。其中，最引人注目的莫过于人工智能领域的一项技术——Stable Diffusion（SD）。"
- **关键句**: "2022年8月22日，SD开源发布"

### 2.3 建议

替换 [^4] URL 为 `https://news.qq.com/rain/a/20230727A0A6J000`。

---

## 3. `编年/2023/03.md:143` — The Atlantic "Inside the Chaos at OpenAI"

### 3.1 问题

脚注 [^4] 当前 URL: `https://www.theatlantic.com/` — 仅含域名，无具体文章路径。

### 3.2 核验结果

- **实际 URL**: `https://www.theatlantic.com/technology/archive/2023/11/sam-altman-open-ai-chatgpt-chaos/676050/`
- **页面标题**: How ChatGPT Fractured OpenAI（标题在文中显示为 "Inside the Chaos at OpenAI"）
- **作者**: Karen Hao and Charlie Warzel
- **日期**: November 19, 2023（Updated November 20, 2023）
- **浏览器核验**: **browser verified** — 通过 Google 搜索 `site:theatlantic.com "The Chaos Inside OpenAI" 2023` 定位，点击进入后页面标题、作者、日期、正文均可见
- **HTTP fetch 验证**: 标题、作者、日期、正文内容一致
- **关键句**: "Altman's dismissal by OpenAI's board on Friday was the culmination of a power struggle between the company's two ideological extremes—one group born from Silicon Valley techno-optimism, energized by rapid commercialization; the other steeped in fears that AI represents an existential risk to humanity and must be controlled with extreme caution."
- **关键句**: "OpenAI was deliberately structured to resist the values that drive much of the tech industry"

### 3.3 关于脚注用途

脚注 [^4] 在正文中支撑的是"2020 年底，OpenAI 内部发生了一次著名的分裂。副总裁 Dario Amodei 和安全政策总监 Daniela Amodei（兄妹）带领一批员工离开，创办了 Anthropic。" 

该文确实讨论了 OpenAI 内部的意识形态分裂，但 **未直接提及 Dario/Daniela Amodei 离职创办 Anthropic 的具体细节**。文章更侧重于 Sam Altman 被解雇事件（2023-11）。建议正文编辑时确认该脚注是否适合支撑 Anthropic 创立的叙述，或需要补充更直接的来源（如 Anthropic 官方 about 页面）。

### 3.4 建议

替换 [^4] URL 为完整路径 `https://www.theatlantic.com/technology/archive/2023/11/sam-altman-open-ai-chatgpt-chaos/676050/`。

---

## 4. `编年/2023/04.md:84-85` — 文心一言/通义千问官方发布页

### 4.1 问题

- 脚注 [^1] 当前 URL: `https://yiyan.baidu.com/` — 文心一言产品首页
- 脚注 [^2] 当前 URL: `https://tongyi.aliyun.com/` — 通义千问产品首页

两者均为产品主页，非具体发布文章。

### 4.2 文心一言核验

- **替代源 URL**: `https://www.thepaper.cn/newsDetail_forward_22343209`
- **标题**: 李彦宏发布首个"中国版ChatGPT"，百度文心一言能否一战？
- **来源**: 澎湃新闻（澎湃号·媒体 / 时代周报）
- **日期**: 2023-03-17 16:19
- **浏览器核验**: **browser verified** — 通过 Google 搜索定位，点击进入后页面标题、日期、正文均可见
- **HTTP fetch 验证**: 标题、作者、日期、正文内容一致
- **关键句**: "3月16日下午两点，百度正式召开新闻发布会，宣布基于百度新一代大语言模型的生成式AI产品文心一言正式发布。"
- **关键句**: "百度创始人、董事长兼首席执行官李彦宏亲自站台"
- **关键句**: "发布会举行期间，百度股价应声下跌，最大跌幅近10%。截至3月16日收盘，百度股价为125.100港元/股，较前一日下跌6.36%。"

### 4.3 通义千问核验

- **替代源 URL**: `https://www.thepaper.cn/newsDetail_forward_22651605`
- **标题**: 阿里所有产品都将接入"通义千问"，平台将开放第三方大模型接入
- **来源**: 澎湃新闻（未来2%）
- **日期**: 2023-04-11
- **浏览器核验**: **browser verified** — 通过 Google 搜索 `site:thepaper.cn 通义千问 发布 2023 张勇 阿里云峰会` 定位
- **HTTP fetch 验证**: 标题、日期、正文内容一致
- **关键句**: "4月11日，2023阿里云峰会在北京举行，阿里巴巴集团董事会主席兼CEO、阿里云智能集团CEO张勇在会上表示，阿里巴巴所有产品未来将接入'通义千问'大模型，进行全面改造"
- **关键句**: "会上，阿里云智能首席技术官周靖人正式发布了阿里'通义千问'大模型"

### 4.4 建议

- [^1] 可保留 `https://yiyan.baidu.com/` 作为产品页引用，但建议**补充**澎湃新闻文章 `https://www.thepaper.cn/newsDetail_forward_22343209` 作为发布事件的权威来源
- [^2] 同理，可保留 `https://tongyi.aliyun.com/` 并**补充**澎湃新闻文章 `https://www.thepaper.cn/newsDetail_forward_22651605`

---

## 汇总：建议替换的 URL

| 脚注位置 | 当前 URL | 建议替换为 | 来源 |
|---------|----------|-----------|------|
| `编年/2026/03.md` [^4] | `https://www.80aj.com/AI/20260306/` | `https://www.80aj.com/2026/03/06/anthropic-account-suspension-2026/` | 80aj.com, browser verified |
| `编年/2026/03.md` [^6] | `https://www.80aj.com/前沿/20260409/` | `https://www.80aj.com/2026/04/09/glm-5-modal-free-trial/` | 80aj.com, browser verified |
| `编年/2022/08.md` [^4] | `https://view.inews.qq.com` | `https://news.qq.com/rain/a/20230727A0A6J000` | 腾讯新闻, browser verified |
| `编年/2023/03.md` [^4] | `https://www.theatlantic.com/` | `https://www.theatlantic.com/technology/archive/2023/11/sam-altman-open-ai-chatgpt-chaos/676050/` | The Atlantic, browser verified |
| `编年/2023/04.md` [^1] | `https://yiyan.baidu.com/` | 建议补充 `https://www.thepaper.cn/newsDetail_forward_22343209` | 澎湃新闻, browser verified |
| `编年/2023/04.md` [^2] | `https://tongyi.aliyun.com/` | 建议补充 `https://www.thepaper.cn/newsDetail_forward_22651605` | 澎湃新闻, browser verified |

---

## 浏览器 Tab 纪律

所有 tab 在验证完成后已关闭。本轮核验未保留任何浏览器 tab。

---

*这篇论文的引用链我回溯了，原始数据在这里——每条 URL 都经过浏览器实页核验和 HTTP fetch 双重确认。*
