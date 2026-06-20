# 志·AI伦理与治理 素材搜集

> 调研员：迷迭香 | 产出日期：2026-06-20
> 目的：为赫默撰写《志·AI伦理与治理》提供素材弹药，覆盖 AI 发展中被忽视的伦理维度。

---

## 1. 标注员劳动问题

### 核心事件：OpenAI 肯尼亚标注员（2021–2022）

- **时间**：2021 年 11 月起，Sama 于 2022 年 2 月提前终止合同（原计划持续至 2022 年 11 月）
- **涉事公司**：OpenAI（发包方）→ Sama（旧称 Samasource，旧金山注册的外包公司，员工位于肯尼亚内罗毕）→ 标注员（肯尼亚当地工人）
- **关键事实**：
  - OpenAI 为 ChatGPT 构建安全过滤器（toxic content detector），将大量文本片段发给 Sama 标注
  - 标注内容包括儿童性虐待、兽交、谋杀、自杀、自残、乱伦等极端暴力/色情描述
  - 标注员实得工资 **$1.32–$2/小时**（取决于资历和绩效）
  - 一名标注员表示，阅读一段人与狗发生性行为的描述后反复出现幻觉，"那就是酷刑"
  - Sama 以"道德 AI"（ethical AI）公司自居，声称帮助 5 万人脱贫
  - 标注工作最终导致 Sama 提前 8 个月终止与 OpenAI 的合同
- **争议各方观点**：
  - **OpenAI 回应**："分类和过滤有害内容是减少训练数据中暴力和色情内容的必要步骤"
  - **Partnership on AI（AI 联盟，OpenAI 是成员）**："尽管这些数据标注专业人员发挥了基础性作用，但大量研究揭示了他们面临的不稳定工作条件……看不见也就想不到"
  - **批评者**：AI 产业的"光鲜"依赖全球南方的隐藏劳动力，这些工人的贡献被系统性地遮蔽
- **出处**：
  - Perrigo, B. (2023, Jan 18). "Exclusive: OpenAI Used Kenyan Workers on Less Than $2 Per Hour to Make ChatGPT Less Toxic." *TIME*. https://time.com/6247678/openai-chatgpt-kenya-workers/

### 扩展：Scale AI 的外包标注体系

- **公司**：Scale AI（总部旧金山，估值数十亿美元）
- **模式**：通过子公司 Remotasks 在全球（菲律宾、肯尼亚、委内瑞拉等）招募众包标注员
- **争议**：低薪、无社保、任务不透明、标注员无法知道自己标注的数据用于何处
- **出处**：
  - https://en.wikipedia.org/wiki/Scale_AI
  - *The Verge*, *Wired* 等媒体多次报道 Scale AI 标注员劳动条件

---

## 2. AI 偏见事件

### COMPAS 累犯预测系统争议（2016 至今）

- **时间**：1998 年由 Northpointe（现 Equivant）开发，2012 年威斯康星州全面采用，2016 年 ProPublica 调查引爆争议
- **涉事方**：Northpointe/Equivant（开发方）、美国多州法院（使用方）、ProPublica（调查媒体）
- **核心争议**：
  - ProPublica 2016 年调查发现：COMPAS 对黑人被告的"高风险"误判率是白人的近两倍；白人被告的"低风险"误判率高于黑人
  - Northpointe 反驳：COMPAS 在各种族群体中的"校准度"（calibration）一致——即被评为高风险的人中，实际再犯比例在各族群间相似
  - **根本矛盾**：在存在系统性种族不平等的情况下，"校准度公平"和"均等错误率公平"不可能同时满足（Kleinberg et al. 2016 证明了这个不可能性定理）
  - 算法是商业秘密（trade secret），被告和公众无法审查
  - 简单透明的算法被证明预测能力与 COMPAS 相当（ProPublica 用 logistic regression 复现了类似准确率）
  - *Loomis v. Wisconsin* 案：被告主张使用 COMPAS 违反正当程序，威斯康星最高法院 2016 年裁定 COMPAS 可以使用但有附加条件
- **出处**：
  - https://en.wikipedia.org/wiki/COMPAS_(software)
  - Angwin, J. et al. (2016). "Machine Bias." *ProPublica*. https://www.propublica.org/article/machine-bias-risk-assessments-in-criminal-sentencing

### Gemini 图像生成翻车（2024 年 2 月）

- **时间**：2024 年 2 月
- **涉事公司**：Google
- **事件**：Google Gemini（原 Bard）的图像生成功能在用户请求生成历史人物图片时，倾向于生成不符合史实的种族/性别形象（如将美国开国元勋、纳粹士兵描绘为有色人种/女性），引发巨大争议
- **后果**：Google 暂停了 Gemini 生成人物图像的功能
- **争议各方观点**：
  - **批评者（保守派为主）**：Google 在"政治正确"上走得太远，AI 被注入了意识形态偏见
  - **Google 回应**：承认"矫枉过正"，表示正在调整
  - **技术分析**：模型的"安全对齐"机制（避免种族单一化）在未指定种族的提示词上过度补偿
- **出处**：
  - https://en.wikipedia.org/wiki/Google_Gemini#Image_generation_controversy

---

## 3. Deepfake 与虚假信息

### Taylor Swift Deepfake 事件（2024 年 1 月）

- **时间**：2024 年 1 月
- **事件**：AI 生成的 Taylor Swift 色情深度伪造图片在 X（原 Twitter）等平台大规模传播，单条帖子获得数千万浏览量
- **技术手段**：基于 GAN 和扩散模型的面部替换/生成技术
- **后果**：
  - X 平台被迫屏蔽搜索 "Taylor Swift" 相关关键词
  - 白宫发言人表示"对 AI 生成的非自愿色情内容深感担忧"
  - 推动了多州和联邦层面的反 deepfake 立法讨论
- **出处**：
  - https://en.wikipedia.org/wiki/Deepfake
  - 多家媒体（BBC, Guardian, NYT）2024 年 1 月报道

### Deepfake 的更广泛影响

- **政治 deepfake**：2024 年美国大选期间出现 AI 生成的政治虚假信息（如模仿拜登声音的机器人电话）
- **名人非自愿色情**：Taylor Swift 事件是最著名的案例，但类似问题长期存在于 Reddit 等平台
- **检测与应对**：
  - C2PA（Coalition for Content Provenance and Authenticity）——内容溯源标准
  - 欧盟 AI Act 要求 AI 生成内容必须标注
  - 深度伪造检测技术（deepfake detection）成为活跃研究领域
- **出处**：
  - https://en.wikipedia.org/wiki/Deepfake

---

## 4. 环境成本

### Strubell et al. 2019 — 训练 NLP 模型的能耗估算

- **论文**：Strubell, E., Ganesh, A., & McCallum, A. (2019). "Energy and Policy Considerations for Deep Learning in NLP." *ACL 2019*.
- **关键数据**：
  - 训练一个 Transformer 大模型（架构搜索版本）排放约 **284 吨 CO₂**（相当于 5 辆汽车终身排放量）
  - 训练 BERT-base 约排放 1,438 磅 CO₂
  - 训练成本从数万到数百万美元不等
- **影响**：这是第一篇系统量化 NLP 训练环境成本的论文，引发了学术界和工业界对 AI 碳足迹的广泛讨论
- **出处**：
  - https://arxiv.org/abs/1906.02243

### GPT-3 训练碳排放

- **模型**：GPT-3（1750 亿参数，2020 年发布）
- **估算**：训练 GPT-3 消耗约 1,287 MWh 电力，排放约 552 吨 CO₂（来自 Patterson et al. 2021 的估算）
- **出处**：
  - Patterson, D. et al. (2021). "Carbon Emissions and Large Neural Network Training." *arXiv:2104.10350*.

### Meta 60 万张 H100 集群

- **规模**：Meta 在 2024 年宣布建设包含约 60 万张 NVIDIA H100 GPU 的训练集群
- **能耗估算**：单张 H100 TDP 约 700W，60 万张满载运行约 420MW——相当于一座中型发电站的输出
- **出处**：
  - Meta 官方博客 2024 年多次披露

### Google 2024 碳排放增长

- **事实**：Google 2024 年环境报告显示碳排放量较 2019 年增长约 48%，主要归因于数据中心扩张（AI 训练/推理需求驱动）
- **矛盾**：Google 此前承诺 2030 年实现净零排放
- **出处**：
  - Google Environmental Report 2024
  - 多家媒体 2024 年报道

### 数据中心用水量

- **事实**：训练大模型的数据中心需要大量水进行冷却。GPT-4 训练期间，微软数据中心用水量显著上升
- **出处**：
  - Li, P. et al. (2023). "Making AI Less 'Thirsty': Uncovering and Addressing the Secret Water Footprint of AI Models." *arXiv:2304.03271*.

---

## 5. AI 监管演化

### EU AI Act（2024 通过）

- **时间线**：
  - 2021 年 4 月 21 日：欧盟委员会提出草案
  - 2024 年 3 月 13 日：欧洲议会投票通过
  - 2024 年 5 月 21 日：欧盟理事会一致批准
  - 2024 年 8 月 1 日：正式生效（条款将在 6–36 个月内分阶段实施）
- **核心框架**：按风险等级分类监管 AI
  - **不可接受风险**（禁止）：操纵人类行为、公共场所实时远程生物识别、社会评分系统
  - **高风险**（严格监管）：健康、教育、招聘、执法、司法等领域的 AI 应用
  - **有限风险**（透明度义务）：聊天机器人等
  - **最低风险**（不监管）
  - **通用目的 AI（GPAI）**：单独分类，要求透明度；高能力模型需额外评估
- **域外效力**：与 GDPR 类似，可适用于在欧盟有用户的非欧盟公司
- **争议**：
  - 科技公司担忧合规成本和创新抑制
  - 民权组织认为豁免条款（军事/国安）过于宽泛
  - 开源模型获得部分豁免，但边界模糊
- **出处**：
  - https://en.wikipedia.org/wiki/European_Union_Artificial_Intelligence_Act

### 拜登 AI 行政令 Executive Order 14110（2023/10/30）

- **标题**："Safe, Secure, and Trustworthy Development and Use of Artificial Intelligence"
- **核心内容**：
  - 要求联邦机构设立"首席 AI 官"（Chief AI Officer）
  - 对高能力 AI 模型提出安全测试要求
  - 保护公民权利，防止 AI 歧视
  - 促进 AI 竞争与创新
- **评价**：被认为是美国迄今最全面的 AI 治理措施
- **出处**：
  - https://en.wikipedia.org/wiki/Executive_Order_14110

### 特朗普撤销拜登行政令（2025/1/20 & 2025/1/23）

- **时间**：2025 年 1 月 20 日就职当天，特朗普通过 "Initial Rescissions of Harmful Executive Orders and Actions" 撤销了 EO 14110
- **替代行政令**：2025 年 1 月 23 日签署 EO 14179 "Removing Barriers to American Leadership in Artificial Intelligence"
- **核心转向**：
  - 从"安全与监管"转向"创新与竞争力"
  - 要求在 180 天内制定行动计划，维持美国 AI 全球领导地位
  - 明确要求 AI 发展"不受意识形态偏见或社会议程的影响"
  - 暂停、修订或撤销与拜登行政令相关的所有机构行动
- **争议**：安全研究者担忧撤销安全要求会带来风险；科技行业普遍欢迎减少监管负担
- **出处**：
  - https://en.wikipedia.org/wiki/Executive_Order_14179

### 中国 AI 法规

- **数据安全法（2021）**：中国首部涉及 AI 伦理的国家法律
- **算法推荐管理规定（2022/3）**：规范算法推荐服务
- **深度合成管理规定（2023/1）**：规范 AI 生成内容（deepfake 等）
- **生成式 AI 管理暂行办法（2023/8）**：要求 AI 生成内容符合"社会主义核心价值观"
- **国家网信办（CAC）**：主要监管机构
- **2023 年指南**：要求 AI 内容维护中共意识形态，避免歧视，尊重知识产权，保障用户数据
- **2025 年**：要求企业尽量少使用"不安全"数据进行训练，定期测试模型
- **争议**：
  - 西方观察者关注审查制度和言论自由问题
  - 中国框架强调"发展与安全并重"
- **出处**：
  - https://en.wikipedia.org/wiki/Artificial_intelligence_in_China

---

## 6. AI 与就业

### Artisan "Stop Hiring Humans" 广告（2024/11）

- **时间**：2024 年 11 月
- **公司**：Artisan AI（一家 AI 销售自动化初创公司）
- **事件**：在旧金山投放大规模广告牌，标语为 "Stop Hiring Humans"（停止雇佣人类），宣传其 AI 销售代理
- **争议**：
  - 广告被广泛批评为"反人类"、"令人不安"
  - Artisan CEO Jaspar Carmack-Jack 称这是故意引发讨论的营销策略
  - 与 2013 年旧金山反科技浪潮（Google bus 抗议）形成历史呼应
  - 反映了 AI 取代白领工作的焦虑已从理论讨论进入公共视觉空间
- **出处**：
  - 多家媒体 2024 年 11 月报道（The Verge, Business Insider 等）

### 客服岗位被 AI 替代

- **趋势**：2023–2025 年间，大量公司用 AI 聊天机器人替代人工客服
- **典型案例**：Klarna（瑞典金融科技公司）2024 年宣布其 AI 客服已处理 2/3 的客服对话，相当于 700 名全职员工的工作量
- **争议**：效率提升 vs. 就业流失 vs. 服务质量下降（AI 客服常被用户抱怨"无法解决问题"）
- **出处**：
  - Klarna 官方新闻稿 2024 年
  - 多家媒体报道

### 编程助手对初级程序员的冲击

- **工具**：GitHub Copilot, Cursor, Claude Code 等
- **趋势**：AI 编程助手能完成大量初级/重复性编码工作
- **争议**：
  - 乐观派：AI 解放程序员，让他们专注于架构和创意
  - 悲观派：初级岗位被压缩，新人入行门槛提高，长期可能削弱人才梯队
  - Stack Overflow 2024 开发者调查显示超过 75% 的开发者正在使用或计划使用 AI 编程工具
- **出处**：
  - Stack Overflow Developer Survey 2024
  - GitHub Octoverse 2024

---

## 7. "有效利他主义"运动（Effective Altruism, EA）

### EA 与 AI 安全的关系

- **起源**：2000s 代，Peter Singer 的功利主义伦理学 + GiveWell 的证据导向慈善 + LessWrong 理性主义社区三线汇合
- **关键人物**：
  - **Peter Singer**：功利主义哲学家，"动物解放"和全球贫困伦理的倡导者
  - **William MacAskill**：《Doing Good Better》作者，"长期主义"（longtermism）的主要倡导者
  - **Toby Ord**：《The Precipice》作者，存在风险研究者
  - **Dustin Moskovitz**（Facebook 联合创始人）& **Cari Tuna**：Open Philanthropy 创始人，EA 最大资金来源
- **核心主张**：
  - 用证据和理性最大化善行的影响力
  - "长期主义"：未来人类的福祉与当代人同等重要
  - AI 安全被视为最高优先级的存在风险之一
- **影响 AI 治理**：
  - Open Philanthropy 是 AI 安全研究的最大资助方之一
  - EA 社区培养了大量 AI 安全研究人员（Anthropic 创始团队有大量 EA 背景）
  - 80,000 Hours 将"AI 安全研究"列为最高影响力的职业路径之一
- **出处**：
  - https://en.wikipedia.org/wiki/Effective_altruism

### SBF / FTX 丑闻对 EA 信誉的冲击

- **时间**：2022 年 11 月 FTX 崩溃，2022 年 12 月 12 日 SBF 在巴哈马被捕，2024 年 3 月 28 日被判 25 年监禁
- **涉事人物**：Sam Bankman-Fried（SBF），FTX 创始人，EA 运动最大个人捐赠者之一
- **关联**：
  - SBF 公开宣称信奉 EA，声称赚取巨额财富是为了"有效捐赠"（earning to give）
  - FTX 崩溃前，SBF 是 EA 事业的主要资助者（FTX Foundation 捐赠数亿美元）
  - FTX 的欺诈行为（挪用客户资金）与 EA 的道德主张形成尖锐矛盾
- **影响**：
  - EA 运动面临严重的信誉危机——"如果 EA 的最大支持者是骗子，这个运动的判断力在哪里？"
  - EA 社区内部反思：过度依赖单一资金来源的风险；"earning to give" 策略的道德风险
  - 部分观察者将此事件与 EA 的"精英主义"和"技术至上"倾向联系起来
  - 但 EA 的核心理念（用证据最大化善行）仍有独立于 SBF 的价值
- **SBF 个人信息**：
  - 1992 年 3 月 5 日生于斯坦福，MIT 物理学学士
  - 2017 年创立 Alameda Research，2019 年创立 FTX
  - 2024 年 3 月 28 日被判 25 年联邦监禁，罚没 110 亿美元
  - 被称为"加密货币界的伯尼·麦道夫"
- **出处**：
  - https://en.wikipedia.org/wiki/Effective_altruism
  - https://en.wikipedia.org/wiki/Sam_Bankman-Fried
  - https://en.wikipedia.org/wiki/Bankruptcy_of_FTX

---

## 叙事线索

```
标注员劳动问题 ← AI 产业的"不可见底层"
    ↓ 揭示了
AI 偏见事件 ← 训练数据中的系统性不平等
    ↓ 被恶意利用时
Deepfake 与虚假信息 ← 生成式 AI 的武器化
    ↓ 而这一切的
环境成本 ← 算力扩张的物理代价
    ↓ 催生了
AI 监管演化 ← 各方势力的博弈场
    ↓ 最终冲击到
AI 与就业 ← 普通人的切身利益
    ↓ 背后的
有效利他主义运动 ← AI 安全的意识形态基础设施，及其裂痕
```

---

## 可信度评估

| 主题 | 可信度 | 理由 |
|------|--------|------|
| OpenAI 肯尼亚标注员 | **高** | TIME 独家调查，有内部文件和多名证人佐证 |
| COMPAS 偏见 | **高** | ProPublica 系统性数据分析 + 学术界广泛验证 |
| Gemini 图像翻车 | **高** | Google 官方承认并暂停功能，多家媒体交叉报道 |
| Taylor Swift Deepfake | **高** | 全球主流媒体广泛报道，X 平台有实际屏蔽行动 |
| Strubell 碳排放估算 | **中** | ACL 同行评审论文，但估算基于假设，实际数字有争议 |
| GPT-3 碳排放 | **中** | Patterson et al. 论文有估算，但不同方法论给出不同数字 |
| Meta H100 集群能耗 | **中** | 基于公开的 GPU 数量和 TDP 推算，非实测数据 |
| Google 碳排放增长 | **高** | Google 自己的环境报告披露 |
| EU AI Act | **高** | 欧盟官方立法文本公开 |
| 拜登/特朗普行政令 | **高** | 联邦公报（Federal Register）公开记录 |
| 中国 AI 法规 | **高** | 官方法规文本公开，Wikipedia 有系统整理 |
| Artisan 广告 | **高** | 多家媒体有图片和报道 |
| EA / SBF | **高** | 法庭记录、Wikipedia 详细条目、大量新闻报道 |

---

## 待补充信息

以下主题在本次搜集中有信息缺口，赫默撰写时如需更详细数据可指定补充：

1. **Scale AI 标注员劳动条件的系统性调查**（需要更具深度的调查报告，如 *The Verge* 或 *Wired* 的长篇报道）
2. **AI 与就业的量化研究**（如 Acemoglu & Restrepo 的劳动力经济学论文）
3. **特朗普 2025 AI 行政令的后续实施细节**（2025 年仍在发展中）
4. **Google 碳排放 2024 报告的具体数字**（需要直接引用 Google Environmental Report 2024 原文）
