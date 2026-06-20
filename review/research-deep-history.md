# LLM_Chronicle 深层历史素材挖掘

> **分析员**：迷迭香（Rosmontis）
> **日期**：2026-06-20
> **方法**：多源交叉验证——Wikipedia 条目追溯原始报道引用链，扩展到 The Atlantic、NYT、The Verge、WSJ、Semafor、Vox、Reuters、CNBC 等原始报道。
> **原则**：每条关键信息标注出处 URL 和可信度（高/中/低 + 理由）。单源标注"存疑"。

---

## 任务 1：OpenAI 内战深度调查

### 1.1 导火索：不是"突然"，而是积怨已久

**核心分歧：安全派 vs 商业派**

OpenAI 内部存在结构性裂痕。Altman 在 2019 年的一封内部邮件中将公司内部的分裂称为"部落"（tribes）——一边是追求商业化的营利部门，另一边是担忧 AI 能力的安全部门。
- 📎 出处：*The Atlantic*，Altman 内部邮件（Wikipedia 引用 [24]）
- 可信度：**高** — The Atlantic 获得了原始邮件

**Altman 削弱 Sutskever 的角色（2023 年 10 月）**

2023 年 10 月，Altman 削弱了 Sutskever 在公司的角色，进一步激化了矛盾。Sutskever 随后成功争取到几位董事会成员的支持。
- 📎 出处：*Bloomberg*，"BloombergCoup" 报道
- 可信度：**高** — Bloomberg 独家

**DevDay 会议（2023 年 11 月 6 日）是导火索**

Kara Swisher 和 *The Verge* 记者 Alex Heath 指出，Altman 在 DevDay 上发布自定义 ChatGPT 实例等商业化举措，成为反对派的最后引爆点。
- 📎 出处：Kara Swisher; *The Verge* (Alex Heath)
- 可信度：**高** — Swisher 是硅谷最权威的科技记者之一

**Altman 的外部野心引发警觉**

在被解职前，Altman 正在寻求中东主权财富基金的数十亿美元投资来开发 AI 芯片与 Nvidia 竞争，并与软银孙正义合作与前 Apple 设计师 Jony Ive 开发 AI 硬件。Sutskever 和盟友认为这些活动不正当地利用了 OpenAI 的名义。
- 📎 出处：*Bloomberg*（同上）
- 可信度：**高**

### 1.2 解雇日完整时间线（2023 年 11 月 17 日）

| 时间（PST） | 事件 |
|---|---|
| ~中午 | 董事会经"审议审查程序"后立即解除 Altman 职务 |
| 解职前 5-10 分钟 | Altman 在 Google Meet 上被通知，当时正在看拉斯维加斯大奖赛 |
| 解职后 30 分钟内 | Sutskever 通过 Google Meet 通知董事会主席 Greg Brockman |
| 解职后 30 分钟 | 董事会公开宣布解职 |
| 数小时内 | CTO Mira Murati 被任命为临时 CEO |
| 数小时后 | Brockman 辞去董事会主席职务 |
| 当日 | 研究总监 Jakub Pachocki、研究员 Aleksander Mądry 等辞职 |

- 📎 出处：*Engadget*; *Axios*; *The Washington Post*; *The Verge* 多方交叉验证
- 可信度：**高**

### 1.3 70 页档案（2026 年 4 月才曝光的关键细节）

2026 年 4 月，*The New Yorker* 的调查报道揭露：Sutskever 和其他人应董事会要求，编写了一份约 70 页的带注释档案，包含内部通信、文件和照片。该档案声称 Altman "表现出一贯的……撒谎模式"，并向公司高管和董事会——特别是在安全问题上——提供了不实信息。

Sutskever 此前已提交了一份 52 页的备忘录，大量依赖 Mira Murati 提供的信息，指控 Altman 撒谎、操纵高管并制造内部分裂。
- 📎 出处：*The New Yorker*（Farrow，2026 年 4 月）; Wikipedia "Ilya Sutskever" 条目引用 [46][47]
- 可信度：**高** — The New Yorker 长篇调查报道，Ronen Farrow 执笔

### 1.4 Q* 项目突破与安全争议

2023 年 11 月 22 日，有报道称 Altman 被解职可能与他在代号 Q* 的机密项目上的处理方式有关。Q* 旨在开发逻辑和数学推理能力，据报已达到小学数学水平。对 Altman 对此发现的安全影响的担忧在解职前不久被提交给董事会。
- 📎 出处：*Reuters*（Anna Tong 等）; *TweakTown*
- 可信度：**中** — 信息来自匿名内部来源，细节有限

### 1.5 董事会成员真实分歧

**Helen Toner**（CSET 策略主任，有效利他主义运动背景）
- 2023 年 10 月发表论文《Decoding Intentions: AI and Costly Signals》，其中批评 OpenAI 的安全努力同时赞扬了 Anthropic 的做法
- Altman 打电话给 Toner 称论文"可能引起麻烦"，因为 FTC 正在调查 OpenAI 的数据收集
- Toner 认为 Altman 在操纵董事会成员以谋取私利
- 📎 出处：Wikipedia "Helen Toner" 条目，引用 *The Atlantic*、*The Washington Post*
- 可信度：**高**

**Ilya Sutskever**
- 核心关切：OpenAI 偏离了安全初衷，转向过度商业化
- 编写 52 页备忘录 + 70 页档案
- 在全体会议上说解雇 Altman 是"董事会在履行职责"
- 但一周后表达后悔
- 📎 出处：同上
- 可信度：**高**

**Tasha McCauley**（企业家）和 **Adam D'Angelo**（Quora CEO）
- D'Angelo 是唯一留在新董事会的原董事
- McCauley 与 Toner 一起在和解后离开董事会
- 📎 出处：多家媒体交叉验证
- 可信度：**高**

### 1.6 五天后回归与后果

**Microsoft 的角色**：OpenAI 董事会在 Altman 被解职后曾接触 Dario Amodei，提议让其取代 Altman 并可能合并两家公司。Amodei 拒绝了两项提议。
- 📎 出处：Wikipedia "Dario Amodei" 条目引用 [24]
- 可信度：**高**

**员工起义**：约 700 名 OpenAI 员工（当时总人数的约 95%）签署联名信威胁集体辞职。
- 最终和解：Altman 回归，Toner、McCauley、Sutskever 离开董事会，由 Lawrence Summers 和 Bret Taylor 接替
- 📎 出处：多家媒体广泛报道
- 可信度：**高**

### 1.7 安全团队集体出走

**Jan Leike 的辞职（2024 年 5 月）**

Jan Leike 是 OpenAI 超级对齐（Superalignment）项目的联合负责人（与 Sutskever 共同领导），2024 年 5 月宣布辞职。他在 X 上写道：

> "Over the past years, safety culture and processes have taken a backseat to shiny products"

> "I gradually lost trust" in OpenAI's leadership.

Leike 随后加入 Anthropic（2024 年 5 月 28 日）。
- 📎 出处：*Vox*（Sigal Samuel，2024-05-17）; *The Guardian*（Dan Milmo，2024-05-18）; *The Verge*（2024-05-28）
- 可信度：**高** — Leike 本人公开发言

**其他出走的安全研究人员**

据 *The Decoder* 报道，OpenAI 的 AI 安全团队在近几个月至少失去了七名研究员。除了 Leike 和 Sutskever，还有 Daniel Kokotajlo 等人。
- 📎 出处：*The Decoder*（Matthias Bastian，2024-05-18）
- 可信度：**高**

**John Schulman 也去了 Anthropic**

OpenAI 联合创始人 John Schulman 在 2024 年加入 Anthropic。
- 📎 出处：Wikipedia "Anthropic" 条目
- 可信度：**高**

### 1.8 SSI（Safe Superintelligence Inc.）创立

- **创立日期**：2024 年 6 月 19 日
- **创始人**：Ilya Sutskever、Daniel Gross（前 Apple AI 负责人）、Daniel Levy（前 OpenAI AI 研究员/投资人）
- **使命**：专注于安全开发超级智能
- **总部**：Palo Alto, CA + Tel Aviv, Israel
- **融资**：
  - 2024 年 9 月：$1B（SV Angel, DST Global, Sequoia Capital, a16z）
  - 2025 年 3 月：估值 $30B（Greenoaks Capital 领投），6 倍于 2024 年 9 月的 $5B 估值
- **关键事件**：
  - 2025 年 4 月：与 Google Cloud 合作获取 TPU
  - 2025 年上半年：Meta 试图收购 SSI，被 Sutskever 拒绝
  - 2025 年 7 月：联合创始人 Daniel Gross 离开加入 Meta Superintelligence Labs；Sutskever 成为 CEO
- **员工数**：约 50 人（2025 年 7 月）
- 📎 出处：*Reuters*（2024-09-04）; *Bloomberg*（Ashlee Vance，2024-06-19）; *The Verge*（Emma Roth，2024-06-19）; *NYT*（Cade Metz，2024-06-19）; *WSJ*（2025-03-07）; *CNBC*（2025-06-19）
- 可信度：**高** — 多家权威媒体交叉验证

---

## 任务 2：Google 三年恐慌弧线

### 2.1 "Code Red"（2022 年 11 月-12 月）

**时间线**：
- 2022 年 11 月 30 日：ChatGPT 发布，迅速成为病毒级互联网现象
- Google 高管发出"Code Red"警报，重新分配多个团队支援 AI 工作
- Google 联合创始人 **Larry Page** 和 **Sergey Brin**（2019 年已卸任 Alphabet 联席 CEO）被召回来参加紧急会议讨论对策
- **Brin 在 2023 年 2 月首次在多年后亲自请求访问 Google 代码**

**Sundar Pichai 的否认**：Pichai 后来对 *The New York Times* 否认是他发出了"Code Red"警报——这本身就很说明问题。
- 📎 出处：Wikipedia "Google Gemini" 条目，引用 *NYT*; *CNBC*; *The Verge*; *AP*
- 可信度：**高** — 多家权威媒体交叉验证

**内部反应**：在全员会议上，员工问 Jeff Dean 和 Pichai，LaMDA 是否是错过了与 ChatGPT 竞争的机会。两人的回答是：虽然 LaMDA 有类似能力，但引入可能传播虚假信息的 LLM 有风险，所以决定等待。
- 📎 出处：*CNBC*; *The Verge*
- 可信度：**高**

### 2.2 Bard 翻车（2023 年 2 月）

**时间线**：
- 2023 年 1 月：DeepMind CEO Demis Hassabis 暗示计划推出 ChatGPT 竞品
- 2023 年 1 月：Google 员工被指示加速推进"Apprentice Bard"等聊天机器人的测试
- 2023 年 2 月 6 日：Google 宣布 Bard，由 LaMDA 驱动，先向 10,000 名"可信测试者"开放
- **2023 年 2 月 8 日**：Bard 在宣传视频中给出了关于 James Webb 太空望远镜的错误回答。Google 股价**一天内蒸发约 1000 亿美元市值**
- 多家媒体和金融分析师用"rushing"（仓促）描述 Google 的应对
- 📎 出处：*LA Times*; *WSJ*; *Forbes*; *CNBC*; *Reuters*
- 可信度：**高**

**代号**：项目开发代号为"Atlas"，"Bard"取自凯尔特语中的"讲故事者"。

### 2.3 Google Brain 与 DeepMind 合并（2023 年 4 月）

**合并宣布**：2023 年 4 月，Google 宣布将 Google Brain 与姐妹公司 DeepMind 合并为 **Google DeepMind**，作为公司加速 AI 工作的持续努力的一部分。

**权力格局变化**：
- **Demis Hassabis**（DeepMind CEO）出任 Google DeepMind CEO——这是关键的权力转移
- **Jeff Dean** 被任命为 Google "首席科学家"（Chief Scientist）——这个头衔看似荣升，实则是从 Google Brain 的实际领导权中退居二线。合并前 Dean 是 Google AI 的实际掌门人，合并后 Hassabis 掌握了所有 AI 研发的实权
- Google Brain 的名义变为 Google AI 的子品牌，实质上被 DeepMind 吞并

**组织政治背景**：
- Google Brain 和 DeepMind 长期存在内部竞争和重复研究
- DeepMind 在 2014 年被 Google 以 $400M-$650M 收购后一直保持较大的独立性
- 合并是对 ChatGPT 冲击的直接组织应对
- 📎 出处：Wikipedia "Google DeepMind"、"Google Brain"、"Jeff Dean" 条目；*NYT*; *CNBC*
- 可信度：**高**

### 2.4 Gemini 追赶路径

**从被嘲笑到登顶的时间线**：

| 时间 | 事件 | 意义 |
|---|---|---|
| 2023/12/06 | Gemini 1.0 发布（Ultra/Pro/Nano） | 首次正面挑战 GPT-4 |
| 2024/02/08 | Bard 更名为 Gemini | 品牌统一 |
| 2024/02 | Gemini 图像生成因历史不准确和偏见被暂停 | 又一次公关危机 |
| 2024/02-06 | Gemini 1.5 Pro 发布，100 万 token 上下文窗口 | 长上下文领先 |
| 2024/12 | Gemini 2.0 Flash 发布，明确定位"agentic era" | 技术定位转型 |
| 2025/03 | Gemini 2.5 Pro 登顶 LMArena | **Google 首次在公开竞技场排名第一** |
| 2026/02 | Gemini 3 Deep Think 发布 | 推理模型追赶 o1 |
| 2026/02 | Gemini 3.1 Pro 发布 | 最新前沿 |
| 2026/05 | Gemini 3.5 Flash 发布 | 效率模型 |

- 📎 出处：Wikipedia "Google Gemini" 条目，引用多家媒体
- 可信度：**高**

**技术关键转折点**：
- Gemini 1.5 Pro 的 100 万 token 上下文窗口是"非对称优势"——GPT-4 只有 128K
- Gemini 2.5 Pro 登顶 LMArena 是叙事转折——从"被嘲笑"到"被认可"
- Noam Shazeer 2024 年 8 月回归 Google 并共同领导 Gemini 项目，是人才层面的关键补充

### 2.5 Noam Shazeer 回归 Google 的关键交易

- 2021 年：Shazeer 和 Daniel de Freitas 因 Google 拒绝发布其聊天机器人 Meena 而离开，创办 Character.AI
- 2024 年 8 月：Google 以 **$2.7B** 的交易让 Shazeer 回归，同时获得 Character.AI 技术的非独占授权
- Shazeer 拥有 Character.AI 30-40% 的股份，估计个人获得 **$750M-$1B**
- 被任命为 Gemini 技术负责人（与 Jeff Dean 和 Oriol Vinyals 共同领导）
- **2026 年 6 月：Shazeer 再次离开 Google 加入 OpenAI**
- 📎 出处：*WSJ*（Miles Kruppa & Lauren Thomas，2024-09-25）; *Reuters*（2024-08-22）; *NYT*
- 可信度：**高**

---

## 任务 3：AI 人才流动关键人物

### 3.1 Transformer 八作者散落各方

以下是 2017 年论文"Attention Is All You Need"八位共同作者的去向。论文发表时全部在 Google 工作；截至 2026 年，**全部已离开 Google**。

| 作者 | Google 期间角色 | 离开后去向 | 当前状态（2026） |
|---|---|---|---|
| **Ashish Vaswani** | Google Brain 研究员 | 共同创办 Adept AI → 离开 → 共同创办 Essential AI | Essential AI CEO |
| **Noam Shazeer** | Google 21 年老兵（2000-2021） | 创办 Character.AI → 回归 Google（$2.7B 交易）→ 加入 OpenAI | OpenAI（2026 年 6 月起） |
| **Niki Parmar** | Google Brain | 与 Vaswani 共同创办 Essential AI | Essential AI |
| **Jakob Uszkoreit** | Google Brain（"Transformer"命名者） | 未公开详细去向 | 存疑——公开信息有限 |
| **Llion Jones** | Google | 创办 Sakana AI（东京） | Sakana AI CEO |
| **Aidan Gomez** | Google Brain 实习生（20 岁） | 创办 Cohere | Cohere CEO；估值 $7B+（2025/09）|
| **Łukasz Kaiser** | Google Brain | 加入 OpenAI | OpenAI |
| **Illia Polosukhin** | Google Research 工程经理 | 创办 NEAR Protocol（区块链） | NEAR Protocol 联合创始人 |

- 📎 出处：Wikipedia 各人条目；*Bloomberg*; *Reuters*; *Time*; *Economic Times*
- 可信度：**高** — 多数有 Wikipedia 独立条目和多家媒体报道

**叙事线索**：八位创造了人类历史上最具影响力的 AI 架构的人，没有一个留在发明它的公司。这本身就是一个关于 Google 组织文化的故事。

### 3.2 Ilya Sutskever：从 Hinton 的学生到安全异见者

| 时间 | 事件 |
|---|---|
| 1986 | 生于苏联高尔基市（今下诺夫哥罗德），犹太家庭 |
| 5 岁 | 移民以色列，在耶路撒冷长大 |
| 16 岁 | 移民加拿大，进入多伦多大学 |
| 2012 | 与 Hinton、Krizhevsky 共同创建 AlexNet |
| 2013 | Google 收购 DNNResearch，加入 Google Brain |
| 2015 年底 | 离开 Google，成为 OpenAI 联合创始人兼首席科学家 |
| 2022 | 推文"今天的大型神经网络可能略有意识"——引发 AI 意识辩论 |
| 2023/06 | 宣布共同领导 OpenAI Superalignment 项目 |
| 2023/11 | 投票解雇 Altman → 一周后表达后悔 → 离开董事会 |
| 2024/05 | 正式离开 OpenAI |
| 2024/06 | 创办 SSI Inc. |
| 2025/03 | SSI 估值 $30B |
| 2025/07 | 成为 SSI CEO（Gross 离开后） |

- 📎 出处：Wikipedia "Ilya Sutskever" 条目；*Bloomberg*; *The Verge*; *NYT*
- 可信度：**高**

**关键评价**：Sutskever 是 AlexNet 的联合创造者、AlphaGo 的论文共同作者、OpenAI 的联合创始人、GPT 系列和 o1 推理模型的推动者——NeurIPS 时间检验奖三连（2022-2024），被称为"引用次数最多的计算机科学家之一"。他的轨迹是"安全 vs 商业"这条张力线的人格化。

### 3.3 Dario Amodei：从物理学家到 AI 政治家

| 时间 | 事件 |
|---|---|
| 1983 | 生于旧金山 |
| ~2014-2015 | 在百度工作 |
| 之后 | 在 Google 工作 |
| 2016 | 加入 OpenAI |
| ~2018-2020 | 成为 OpenAI 研究副总裁 |
| 2021/01 | 与 Daniela Amodei 及其他 OpenAI 前高管共同创办 Anthropic |
| 2023/11 | OpenAI 董事会接触 Amodei 请其取代 Altman——**拒绝** |
| 2024/10 | 发表"Machines of Loving Grace"长文 |
| 2025/01 | 批评 Stargate 项目"混乱"，反对撤销拜登 AI 行政令 |
| 2025 | 在 Facebook 称特朗普为"封建军阀" |
| 2026/01 | 发表"The Adolescence of Technology"——阐述五大 AI 风险 |
| 2026/01-06 | 与美国国防部陷入持续争端 |
| 2026/06 | Anthropic 估值 $965B，提交 IPO 文件 |

- 📎 出处：Wikipedia "Dario Amodei" 条目；*NYT*; *Time*; *Forbes*
- 可信度：**高**

**关键洞察**：Amodei 的轨迹反映了一条从"纯粹研究者"到"AI 政治家"的演化——从百度到 Google 到 OpenAI 到 Anthropic，每次跳槽都是因为对 AI 发展方向的分歧。他现在可能是硅谷最敢于公开对抗政治权力的 AI CEO。

### 3.4 Arthur Mensch：欧洲 AI 主权的旗手

| 时间 | 事件 |
|---|---|
| 1992 | 生于法国塞夫尔 |
| ~2020 年底 | 加入 DeepMind 巴黎办公室 |
| 2023 年 5 月 | 离开 DeepMind，与 Guillaume Lample、Timothée Lacroix 共同创办 Mistral AI |
| 2023/06 | 种子轮 €105M |
| 2023/12 | 融资 €385M，估值 ~€2B |
| 2024/06 | Series B €600M，估值 ~€5.8B |
| 2024 | *Time* 100 Innovators |
| 2025/09 | Series C €1.7B，估值 €11.7B |

- 📎 出处：Wikipedia "Arthur Mensch" 条目；*Le Point*; *Challenges*; *Time*
- 可信度：**高**

**关键叙事**：Mensch 的 Mistral 是"欧洲 AI 冠军"叙事的核心——从 DeepMind 巴黎出走，创建开源 + 企业混合策略的 AI 公司。他频繁在法国参议院作证，倡导欧洲计算主权。

### 3.5 Noam Shazeer：永不停歇的流浪者

| 时间 | 事件 |
|---|---|
| 2000 | 加入 Google（公司第 30 号员工级别附近） |
| 2017 | "Attention Is All You Need" 第一作者 |
| ~2020-2021 | 与 Daniel de Freitas 开发 Meena 聊天机器人 |
| 2021 | 因 Google 拒绝发布 Meena 而离开，创办 Character.AI |
| 2023 | *Time* 100 AI |
| 2024/08 | 回归 Google（$2.7B 交易），共同领导 Gemini |
| 2026 | 当选美国国家工程院院士 |
| **2026/06** | **再次离开 Google，加入 OpenAI** |

- 📎 出处：*WSJ*（2024-09-25）; *Reuters*; Wikipedia "Noam Shazeer" 条目
- 可信度：**高**

**关键叙事**：Shazeer 可能是 AI 行业最戏剧性的人才流动案例——Google→Character.AI→Google（$2.7B）→OpenAI。每次跳槽都反映了当时行业权力格局的变化。

### 3.6 Andrej Karpathy：永远在路上的教育者

| 时间 | 事件 |
|---|---|
| 1986 | 生于布拉迪斯拉发（当时属捷克斯洛伐克），15 岁移居多伦多 |
| 2015 | 斯坦福博士（导师：Fei-Fei Li） |
| 2015-2017 | OpenAI 联合创始成员、研究科学家 |
| 2017/06 | 加入 Tesla，任 AI 和 Autopilot Vision 总监 |
| 2022/07 | 离开 Tesla（此前已休假数月） |
| 2023/02 | 宣布回归 OpenAI |
| 2024/02 | 确认离开 OpenAI |
| 2024/07 | 创办 Eureka Labs（AI 教育平台） |
| 2025/02 | 创造术语"vibe coding" |
| **2026/05/19** | **加入 Anthropic，领导预训练研究团队** |

- 📎 出处：Wikipedia "Andrej Karpathy" 条目；*X*（Karpathy 本人公告）
- 可信度：**高**

**关键叙事**：Karpathy 的"Z 世代 AI 人才"轨迹——OpenAI→Tesla→OpenAI→Eureka Labs→Anthropic——反映了 AI 行业中最优秀的人才在"研究"和"产品"之间的永恒摇摆。

---

## 任务 4：Anthropic 的制度化抗争

### 4.1 争端完整时间线

#### 前史：Anthropic 与政府的初始接触（2024-2025）

| 时间 | 事件 | 出处 |
|---|---|---|
| 2024/11 | Anthropic 与 Palantir 和 AWS 合作（已有 FedRAMP 授权） | Wikipedia [8] |
| 拜登时期 | Anthropic 与 AI Safety Institute 达成协议，参与核信息评估 | Wikipedia [8] |
| 2025/01 | Amodei 批评 Stargate 项目"混乱"，反对撤销拜登 AI 行政令 | Wikipedia [5] |
| 2025/05 之前 | DHS 授权其员工使用 Claude 等商业 AI 系统 | Wikipedia [9] |
| 2025/06 | Anthropic 宣布允许国家安全客户使用 Claude Gov | Wikipedia [11][12] |
| 2025/05 | Anthropic 反对特朗普中东之行签署的海湾国家 AI 协议 | Wikipedia |
| 2025/06 | Semafor 报道：特朗普官员斥责 Anthropic 聘用拜登政府官员（Elizabeth Kelly、Tarun Chhabra、Ben Buchanan） | Wikipedia [6] |
| 2025/06 | Amodei 在 *NYT* 发表专栏文章，称 AI 监管法案"过于生硬" | Wikipedia [7] |
| 2025/07 | 特朗普签署"Preventing Woke AI in the Federal Government"行政令 | Wikipedia [15] |
| 2025/09 | Amodei 批评特朗普对半导体出口限制的做法 | Wikipedia [14] |
| 2025/09 | Anthropic 的使用政策与 FBI、特勤局、ICE 的监控系统产生冲突 | Wikipedia [13] |

- 可信度：**高** — Wikipedia 条目有大量引用，原始报道来自 *Semafor*、*WSJ*、*NYT*

#### 升级期（2025 年 10 月-12 月）

| 时间 | 事件 |
|---|---|
| 2025/10 | David Sacks 在 All-In 播客称 Anthropic 在"基于恐惧制造运行精密的监管俘获策略" |
| 2025/10 | WSJ 报道：Sacks 附近官员调查 Claude 是否是"woke AI" |
| 2025/10 | Amodei 发表博文反驳特朗普政府对 Anthropic 政策的"不准确说法"——文中包括 JD Vance 明确表达的观点 |
| 2025/12 | Amodei 与特朗普官员和数位参议员会面，试图改善关系 |
| 2025/12 | 国防部长 Pete Hegseth 宣布 GenAI.mil 平台，先后签约 Google Gemini 和 OpenAI ChatGPT |
| 2025/12 | Hegseth 宣布额外签约 xAI Grok 用于军事，抨击"woke AI" |

- 📎 出处：Wikipedia "Anthropic–United States Department of Defense dispute" 条目，引用 *WSJ*; *Semafor*; *All-In Podcast*
- 可信度：**高**

#### 爆发期（2026 年 1 月-6 月）

| 时间 | 事件 |
|---|---|
| 2026/01 | Semafor 报道：国防部要求 Anthropic 移除禁止将其技术用于国内监控和全自主武器的合同限制——Anthropic 拒绝 |
| 2026/01 之后 | 国防部将 Anthropic 列为"供应链风险"，禁止所有美国军事承包商、供应商和合作伙伴与该公司开展业务 |
| 2026/02 | Anthropic 在 Super Bowl LX 播放两条广告，强调"无广告"承诺 |
| 2026/02 | Anthropic 向 Public First Action 捐赠 $2000 万，该组织宣布支持主张 AI 监管的政治候选人 |
| 2026/03/26 | **联邦法官对国防部的"供应链风险"认定发出临时禁令** |
| 2026/05 | Anthropic 寻求 IPO，目标 2026 秋季上市 |
| 2026/06/01 | Anthropic 向 SEC 提交保密 IPO 文件 |
| 2026/06/12 | Anthropic 暂停向外国国民提供 Claude Fable 5 和 Mythos 5 的访问权限——因美国当局提出国家安全关切 |

- 📎 出处：Wikipedia "Anthropic"、"Anthropic–DoD dispute" 条目；*BBC*; *NYT*; *WSJ*
- 可信度：**高**

### 4.2 David Sacks 的角色与"Woke AI"叙事

David Sacks 是特朗普的 AI 和加密货币顾问，对 Anthropic 的敌意集中在三个"证据"上：
1. Amodei 选择参加达沃斯世界经济论坛而非特朗普就职典礼
2. Anthropic 聘用拜登政府官员
3. Anthropic 与 Open Philanthropy（Dustin Moskovitz 和 Holden Karnofsky 创办的有效利他主义慈善组织）的关联

Sacks 在 2025 年 10 月公开称 Anthropic 在进行"基于恐惧制造的精密监管俘获策略"。
- 📎 出处：*WSJ*; *All-In Podcast*（Sacks 本人发言）
- 可信度：**高** — Sacks 的公开言论

### 4.3 Amodei 的"封建军阀"帖子与法律切割

2024 年总统大选前，Amodei 在 Facebook 上敦促 associates 投票给 Kamala Harris，称特朗普为"封建军阀"。

当特朗普政府开始针对律所时，Amodei 主动切断了与 Skadden Arps 和 Latham & Watkins 的关系——这两家律所与特朗普政府达成协议以避免惩罚。
- 📎 出处：Wikipedia "Anthropic–DoD dispute"
- 可信度：**高**

### 4.4 "Responsible Scaling" 政策在政治压力下被挑战

Anthropic 是"负责任扩展"（Responsible Scaling Policy, RSP）的行业标杆。但在政治压力下：
- 特朗普政府撤销了拜登的 AI 行政令
- 国防部要求移除合同限制——实质上是要 Anthropic 放弃其使用政策中对监控和自主武器的禁令
- "Woke AI"行政令将安全导向的 AI 公司定位为"政治不正确"
- David Sacks 将 Anthropic 的安全立场重新定义为"监管俘获策略"

**核心张力**：Anthropic 的 RSP 在技术精英中获得认可，但在政治环境中被重新框架为"反美"或"过度限制"。

### 4.5 Mythos 模型与安全分级发布策略（Project Glasswing）

根据 Wikipedia "Claude (language_model)" 条目：
- **Claude Mythos** 是一个额外的模型系列，于 2026 年向少数公司发布
- 2026 年 6 月 12 日，Anthropic 暂停向外国国民提供 Claude Fable 5 和 **Mythos 5** 的访问权限——因美国当局提出国家安全关切

**Claude 模型代系**（截至 2026 年 6 月）：
- Claude Fable 5（2026-06-09）
- Claude Opus 4.8（2026-05-28）
- Claude Sonnet 4.6（2026-02-17）
- Claude Haiku 4.5（2025-10-15）

**注意**：关于"Project Glasswing"的具体细节——即 Anthropic 如何为 Mythos 模型设计安全分级发布策略——目前公开报道极为有限。Wikipedia 仅提到 Mythos 是"一个额外的模型"，且在国家安全关切后暂停了外国访问。更多信息需要等待后续报道。
- 可信度：**中** — Mythos 的存在是确认的，但"Project Glasswing"的完整细节在现有公开来源中信息不足，标注为需要进一步追踪

### 4.6 Anthropic 的数据快照（截至 2026 年 6 月）

| 指标 | 数值 | 出处 |
|---|---|---|
| 估值 | $965B（2026 年 5 月） | Wikipedia [12] |
| 员工数 | ~2,500（2026） | Wikipedia [8] |
| Amodei 净值 | $15.5B（Forbes 估计） | Wikipedia [29] |
| 主要投资者 | Amazon、Google（14%）、Microsoft/Nvidia | Wikipedia [7] |
| IPO | 2026/06/01 提交保密文件 | Wikipedia [39] |
| 战略收购 | Bun（2025/12）、Stainless（2026/05） | Wikipedia |
| 基础设施 | Google TPU + xAI Colossus + Microsoft Azure | Wikipedia [23][34][24] |

---

## 附录：关键原始报道链接索引

### OpenAI 内战
1. *The New Yorker* (Ronen Farrow, 2026/04): 70 页档案调查报告 — https://www.newyorker.com/ （需具体文章 URL，存疑——Wikipedia 引用但未给全文链接）
2. *The Washington Post* (2023/12): Altman 被指行为霸凌 — https://www.washingtonpost.com/technology/2023/12/
3. *Vox* (Sigal Samuel, 2024/05/17): "I lost trust: Why the OpenAI team in charge of safeguarding humanity imploded" — https://www.vox.com/future-perfect/2024/5/17/24158403/openai-resignations-ai-safety-ilya-sutskever-jan-leike-artificial-intelligence
4. *The Guardian* (Dan Milmo, 2024/05/18): "OpenAI putting 'shiny products' above safety" — https://www.theguardian.com/technology/article/2024/may/18/openai-putting-shiny-products-above-safety-says-departing-researcher
5. *The Verge* (Alex Heath, 2024/05/14): Sutskever officially leaving — https://www.theverge.com/2024/5/14/24156920/openai-chief-scientist-ilya-sutskever-leaves
6. *Bloomberg*: Altman's Middle Eastern ambitions and board coup — 引用自 Wikipedia，具体 URL 需进一步确认
7. *Bloomberg* (Ashlee Vance, 2024/06/19): SSI 创立 — https://www.bloomberg.com/news/articles/2024-06-19/openai-co-founder-plans-new-ai-focused-research-lab

### SSI
8. *Reuters* (2024/09/04): SSI raises $1B — https://www.reuters.com/technology/artificial-intelligence/openai-co-founder-sutskevers-new-safety-focused-ai-startup-ssi-raises-1-billion-2024-09-04/
9. *WSJ* (2025/03/07): SSI at $30B valuation — https://www.wsj.com/tech/ai/ai-safe-superintelligence-startup-ilya-sutskever-openai-2335259b
10. *CNBC* (2025/06/19): Meta tried to buy SSI — https://www.cnbc.com/2025/06/19/meta-tried-to-buy-safe-superintelligence-hired-ceo-daniel-gross.html

### Google 恐慌弧线
11. *NYT*: Pichai denies "Code Red" — 引用自 Wikipedia，具体 URL 需确认
12. *CNBC*: Google all-hands meeting on LaMDA — 引用自 Wikipedia
13. *WSJ* (Miles Kruppa & Lauren Thomas, 2024/09/25): "Google Paid $2.7 Billion to Bring Back an AI Genius Who Quit in Frustration" — https://www.wsj.com/tech/ai/noam-shazeer-google-ai-deal-d3605697

### AI 人才流动
14. *NYT* (Cade Metz, 2024/06/19): Sutskever starts SSI — https://www.nytimes.com/2024/06/19/technology/ilya-sutskever-openai-safe-superintelligence.html
15. *The Verge* (Emma Roth, 2024/06/19): SSI — https://www.theverge.com/2024/6/19/24181870/openai-former-chief-scientist-ilya-sutskever-ssi-safe-superintelligence
16. *Reuters* (2023/05/04): Vaswani & Parmar's Essential AI — https://www.reuters.com/technology/top-ex-google-ai-researchers-raise-funding-thrive-capital-sources-2023-05-04/
17. *Economic Times* (2025/06/17): Essential AI interview — https://economictimes.indiatimes.com/tech/artificial-intelligence/we-would-like-to-be-deepseek-in-the-west-says-essential-ai-cofounder/articleshow/121891250.cms

### Anthropic-DoD 争端
18. *Semafor*: Multiple reports on Anthropic-Trump tensions (2025/06, 2026/01) — 需具体 URL
19. *WSJ*: David Sacks examining whether Claude is "woke AI" — 引用自 Wikipedia [15]
20. *BBC*: US federal agencies phasing out Claude — 引用自 Wikipedia "Claude" 条目 [1]
21. Wikipedia "Anthropic–United States Department of Defense dispute" — https://en.wikipedia.org/wiki/Anthropic%E2%80%93United_States_Department_of_Defense_dispute

---

## 信息缺口与待追踪事项

1. **Project Glasswing 完整细节**：Anthropic 的 Mythos 模型安全分级发布策略的具体设计——当前公开信息不足，标注为"存疑/待追踪"
2. **Jakob Uszkoreit 的当前去向**：Transformer 命名者的后续职业路径——Wikipedia 无独立条目，标注为"存疑"
3. **Niki Parmar 的详细职业路径**：除"与 Vaswani 共同创办 Essential AI"外细节有限
4. **The Information 的独家报道**：多次被引用但因付费墙无法获取全文——建议后续通过其他渠道补充
5. **2023 年 11 月 OpenAI 董事会的内部讨论细节**：部分信息可能需要等待更多回忆录/调查报道的发布
6. **The New Yorker 2026 年 4 月调查报告全文**：70 页档案的更多细节——Ronen Farrow 执笔，但具体 URL 在 Wikipedia 引用中未完整给出

---

*本调研基于 2026 年 6 月 20 日可获取的公开来源编写。所有"存疑"标注的信息均等待更多独立来源的验证。*
