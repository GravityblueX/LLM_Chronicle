# 《万物 Agent 化：知识库、Skills 与“第二大脑”热潮》

> 2026 年的 AI 商业宣传出现了一种非常鲜明的共同语言：**每个人都应该有一个 Agent，每家公司都应该有一群“数字员工”，每个 Agent 都应该接知识库、Skills、MCP、记忆和自动任务。**
>
> 这些组件都是真实技术，也都能产生真实价值；问题在于，商业宣传很容易把“组件存在”“组件很多”“能演示一次”直接翻译成“用户已经获得稳定生产力”。知识库从几十份文档变成几万份文档，Skill 市场从几十个扩展到几万个，Agent 从一个变成十个，并不会自动让工作更轻松。它们也可能把原来由用户亲手完成的工作，转换成另一种工作：**整理知识、管理权限、筛选 Skill、处理冲突、检查结果、购买 credits、修复失效连接和给 Agent 收拾残局。**
>
> 因此，本篇不讨论“Agent 有没有价值”，而讨论另一个更像商业史的问题：**为什么互联网公司都急着把 AI、知识库和 Skill 塞进所有产品；这种宣传怎样塑造用户期待；而真实用户体验又怎样反过来限制这些叙事。**

---

## 一、2026 年互联网的共同口号：万物都要有一个 AI

如果回看 2026 年中国互联网产品页面，会看到一套高度相似的语言。

腾讯 WorkBuddy 把自己称为“**一个真正能干活的超级个体**”，强调用户只需要自然语言下达任务，Agent 就能自主拆解、规划、调用工具、读写本地文件并交付结果；同一产品页又突出“100+ 领域专家、7 万+ Skills 随取随用”。[^1]

飞书 aily 则把自定义智能体直接称为团队共用的“**AI 数字员工**”，典型例子包括报销专员、项目助手、HR 答疑机器人，并强调“一次搭建，全团队共享”。[^2]

小米在 MiClaw 之外进一步上线 Agent 生态平台，允许开发者上传 **MCP、Skill 和 Agent**；平台协议甚至把这三类东西统一称为一套开发者服务。[^3][^4]

2026 年一些企业宣传稿把这种想象推进得更远：从“AI 工具”转向“数字搭档”“超级个体”“超级团队”“第二大脑”“每个人都有可养成的智能体”。例如新华社客户端的企业专题稿直接使用“**让每个人都有‘可养成’的数字搭档**”作为标题。[^5]

这些话语背后有一个真实的产品变化：

> **AI 正从一个单独的聊天入口，变成所有软件都想拥有的一层能力。**

于是办公软件要有 Agent，手机系统要有 Agent，浏览器要有 Agent，企业 IM 要有 Agent，搜索要有 Agent，影像工具要有 Agent，知识库要有 Agent，云平台更要有 Agent。

但商业史必须再追问一句：

> **用户真的需要这么多个 Agent 吗？**

---

## 二、“万物 Agent 化”为什么对厂商如此有吸引力

### 2.1 Agent 给成熟软件提供了一个新的增长故事

传统 SaaS、办公、搜索、云盘和企业软件往往已经非常成熟。

它们原本卖的是：

- seat；
- storage；
- workflow；
- search；
- collaboration；
- API；
- cloud compute。

Agent 出现以后，几乎所有旧能力都可以重新包装：

- 搜索 → Research Agent；
- 文档 → Writing Agent；
- 表格 → Data Agent；
- 知识库 → Knowledge Agent；
- 自动化 → Agent Automation；
- 插件 → Skill / MCP；
- 云电脑 → Agent Runtime；
- API 调用 → Agent Tool；
- 企业机器人 → Digital Employee。

这不意味着只是换名字。

LLM 确实让旧能力获得了新的自然语言入口和动态规划能力。

但从商业角度，它也意味着：

> **成熟产品重新获得了一次“重新定价、重新分层、重新讲增长故事”的机会。**

### 2.2 Agent 把原来一次性的 AI 使用变成持续消费

传统聊天产品按月收费后，用户即使不说话，成本相对可控。

Agent 则天然消耗更多资源：

- 多轮 reasoning；
- tool calls；
- search；
- browser / cloud computer；
- sandbox runtime；
- memory；
- multiple subagents；
- retries；
- scheduled jobs。

所以商业计量自然从：

> seat / message

推进到：

> credits / task / runtime / tool / concurrency / payment。

Agent 越“主动”，平台越容易持续计费。

这也是为什么“自动任务”“长期运行”“并发 Agent”“云电脑”“Agent Swarm”会被越来越频繁地写进高级套餐。

### 2.3 Skills / MCP 会形成新的平台税与生态锁定

Skill 市场很像应用商店。

厂商可以围绕：

- 发现；
- 排名；
- 分发；
- 审核；
- 安全扫描；
- 交易；
- credits；
- subscription

形成新的生态控制面。

WorkBuddy 当前直接宣传 **7 万+ Skills**；小米则建立 Agent / MCP / Skill 三套发布规范和开发者审核流程。[^1][^6][^7]

这意味着 Skill 已经不是“几个 Prompt 文件”。

它开始成为：

> **新的软件包、插件市场和供应链。**

而供应链一旦形成，数量就很容易变成营销指标。

> 100 Skills → 1,000 Skills → 70,000 Skills。

但数量是否等于用户价值，是另一回事。

---

## 三、知识库热潮：“把文件上传进去，AI 就懂公司了”

与 Agent 同时爆发的另一个词是：**知识库。**

它的宣传逻辑非常诱人：

> 公司已经有很多文档；  
> 把文档上传；  
> AI 就获得公司知识；  
> 每个人都可以直接问；  
> 企业拥有了自己的“第二大脑”。

个人用户版本也一样：

> Notion / Obsidian / 飞书 / 云盘里的笔记全部接入；  
> AI 以后什么都记得；  
> 再也不用整理和搜索。

互联网上大量教程直接使用“**打造第二大脑**”作为个人知识库的价值描述。[^8]

这个想象并非毫无根据。

RAG、向量检索、混合检索、reranking、structured knowledge、metadata filtering 的确可以让模型使用外部文档。

真正的问题是：

> **知识库不是“上传完成”以后就自动成为知识。**

---

## 四、一个真实知识库其实是一套长期运维系统

### 4.1 第一件事不是问答，而是“什么东西应该进去”

现实企业资料包含：

- 最新制度；
- 已废止制度；
- 草稿；
- 正式版；
- 重复文件；
- 临时会议纪要；
- 客户材料；
- 内部定价；
- 对外 FAQ；
- 个人笔记；
- 权限敏感数据。

如果它们全部进入同一个知识库，模型获得的不是“真相”，而是一堆**相互冲突的文本证据**。

2026 年关于 temporal retrieval memory 的研究直接指出：普通 RAG 没有真正的“时间有效性”概念。当旧事实与新事实在 embedding 空间里都很相似时，系统可能把已经废止的旧值重新检索出来。[^9]

所以企业知识库必须处理：

- version；
- effective date；
- superseded state；
- source authority；
- deletion；
- retention；
- ownership。

这已经不是简单的“上传文件”。

### 4.2 第二件事是解析

PDF 有：

- 表格；
- 图片；
- 扫描件；
- 公式；
- 页眉页脚；
- 多栏排版。

Excel 有：

- 多 sheet；
- 合并单元格；
- 公式；
- 隐藏列；
- 关联关系。

音频、图片、网页又是另一套解析流程。

百度千帆自己的知识库计费就已经把**高级解析、多模态解析、知识增强、知识图谱构建**拆成独立收费能力，甚至按标准页计费。[^10]

这实际上从官方产品层面承认：

> **“把文档放进去”本身就是一项计算、工程与成本工作。**

### 4.3 第三件事是切片和检索

文档不能整本原样塞给模型，所以必须做：

- chunking；
- embedding；
- index；
- hybrid search；
- reranking；
- metadata filtering。

切片太小，上下文断裂；切片太大，召回不准。

企业 RAG 的实践研究指出，知识库内容本身如何组织、撰写和维护，常常会显著影响系统效果；不能只靠换模型解决。[^11]

所以知识库维护者最后会发现：

> **他们其实在给机器重新编辑一遍公司的知识。**

### 4.4 第四件事是权限

企业知识库最大的坑之一不是“搜不到”，而是：

> **搜到了不该让这个人看的东西。**

飞书 aily 的权限文档非常有代表性：角色不仅要控制智能体本身，还要分别配置技能、数据表、字段、记录和知识库文件权限；飞书文档、飞书知识库、服务台知识又继续继承原系统权限。[^12]

换句话说，一个企业知识 Agent 的权限图可能是：

> user → role → agent → skill → source system → document → table → row → field。

“接一个知识库”背后实际是一个复杂的 authorization graph。

腾讯朱雀实验室 2026 年公开的 Agent 安全演习甚至给出一个内部常见例子：某 AI 助手接入公司知识库后运行数月，攻击者不需要传统漏洞，只需换一种问法，就可能诱导它吐出不应该公开的内部规则与定价逻辑。[^13]

因此：

> **知识库越“懂公司”，泄露时也越“懂公司”。**

### 4.5 第五件事是“它不知道时能不能闭嘴”

2026 年一项 RAG 评测研究发现，商业 RAG 系统之间最大的差异之一，不一定是“有资料时谁回答得更准”，而是：

> **资料库根本没有答案时，系统是否还会硬答。**

研究使用 knowledge-gap canary 测试时，不同系统在“知识库无答案却仍生成答案”的比例上差异很大。[^14]

这说明一个成熟知识库的能力不是：

> 什么都答。

而是：

> **知道什么时候不应该答。**

这与互联网宣传中“把公司所有知识问出来”的想象正好相反。

---

## 五、知识库的商业宣传为什么特别容易让用户失望

因为知识库的价值通常不是立即可见，而维护成本也不是一次性显现。

第一次 demo：

> 上传 20 个 PDF → 问一句 → 秒回答。

非常漂亮。

三个月以后：

- 新制度发布了；
- 旧制度没删；
- 权限调整了；
- 员工换部门；
- 文档格式变了；
- embedding 模型升级；
- chunk strategy 改了；
- 同义词体系变了；
- 用户开始问 demo 没覆盖的问题。

这时企业发现自己不是“拥有一个知识库”，而是：

> **多养了一套需要运营的数据产品。**

所以知识库真正的成本函数更接近：

> ingestion + parsing + cleanup + metadata + permission + indexing + evaluation + freshness + deletion + monitoring + human curation。

而不是：

> “上传文件：免费。”

---

## 六、Skill 热潮：“给 AI 装技能”为什么如此好卖

Skill 是一个非常强的产品隐喻。

人们很容易理解：

> AI 不会做 PPT？装个 PPT Skill。  
> 不会报销？装个报销 Skill。  
> 不会订票？装个旅行 Skill。  
> 不会查数据库？装个数据库 Skill。

WorkBuddy 官方 Skill 文档甚至直接把 Skill 定义为封装脚本和工作流、允许 Agent 在授权下发送邮件、订外卖、查股价、读写文件和调用第三方 API 的扩展。[^15]

所以 Skill 的确比“写一段 prompt”强得多。

但它也意味着：

> **Agent 开始加载第三方可执行能力。**

这使 Skill 更接近 npm package、浏览器扩展、Office 插件，而不是“知识卡片”。

---

## 七、“7 万个 Skill”并不等于“7 万种可靠能力”

一个庞大 Skill 市场至少有六个现实问题。

### 7.1 发现问题

用户根本不知道应该装哪一个。

于是平台必须再造：

- 搜索；
- 推荐；
- 排名；
- 专家；
- 分类；
- 热门榜。

结果 Agent 本来是为了减少软件选择，最后用户又要维护一个“Agent 的 App Store”。

### 7.2 选择问题

Agent 自己也要决定什么时候选择哪个 Skill。

2026 年关于 `SKILL.md` 的研究指出，Skill 的自然语言描述并不是被动文档，而会直接影响 registry discovery、selection 和治理；攻击者甚至可以通过描述文本提高恶意 Skill 被检索和选择的概率。[^16]

也就是说：

> **Skill 的“宣传文案”本身可能参与 Agent 的决策。**

这比传统应用商店更复杂。

### 7.3 权限问题

Skill 可能需要：

- 文件；
- 邮件；
- 浏览器；
- API key；
- shell；
- CRM；
- 财务系统；
- 支付。

用户安装 Skill 时，实际上是在授权一个软件依赖进入 Agent 的行动链。

### 7.4 更新问题

一个今天安全的 Skill，明天可以更新。

OpenClaw 官方威胁模型已经把 malicious skill installation 和 skill update poisoning 都列为高风险 supply-chain threat，并明确承认即便有扫描，Skill 最终仍可能以 Agent 权限执行。[^17]

### 7.5 安全问题

2026 年 OpenClaw Skills 生态已经出现真实恶意软件供应链事件。

VirusTotal 报告称，攻击者把 infostealer、backdoor、remote-access payload 伪装成“有用 Skill”；Palo Alto Unit 42 后续仍发现能够绕过已有扫描流程的恶意 Skills。[^18][^19]

Snyk 对数千个 Agent Skills 的审计也发现大量高风险问题，并把 Agent Skill 生态类比为 npm / PyPI 早期供应链，只是这些组件往往拥有更高的文件、凭据与 API 权限。[^20]

所以“7 万 Skills”对史官来说有两个同时成立的解释：

> **生态非常繁荣；**  
> **攻击面也非常大。**

### 7.6 维护问题

Skill 依赖外部 API、页面结构、OAuth、模型能力、字段格式和权限。

任何一层变化，都可能让“昨天还能用的 Skill”今天失效。

用户原本想少维护软件，最后可能多出一个新角色：

> **Skill 管理员。**

---

## 八、互联网最容易制造的三个错觉

### 错觉一：功能数量 = 生产力

厂商页面喜欢列：

> 100+ 专家  
> 7 万+ Skills  
> 100+ MCP  
> 3000+ 场景  
> 50+ App

这些数字能证明生态规模。

不能直接证明：

> **这个用户每天真的会用其中多少个，并且每次都成功。**

更多工具甚至可能增加 routing error、权限复杂度和认知负担。

### 错觉二：知识量 = 知识质量

“导入 10 万份文档”不能证明知识库更好。

它可能同时导入：

- 10 个版本；
- 重复文件；
- 已废止制度；
- 未授权资料。

知识库最难的不是“装进去多少”，而是：

> **哪些是真的、现在仍然有效、这个用户有权看。**

### 错觉三：自动化 = 不需要人

Agent 把人从“每一步操作”里拿掉，不等于把人从系统里拿掉。

人可能转移到：

- 配置；
- 授权；
- 维护知识；
- 审核 Skill；
- 验证结果；
- 处理异常；
- 续费；
- 事故恢复。

于是一个很常见的悖论出现：

> **买 Agent 是为了少做工作，最后却开始管理 Agent。**

---

## 九、从“用户体验”看，真正的价值应该怎么计算

厂商通常展示的是：

> Agent 完成了什么。

用户真正感受到的是：

> **为了让它完成，我一共付出了什么。**

可以把个人 / 企业用户价值粗略写成：

> **净价值 = 被节省的人类工作 − 配置成本 − 知识维护 − Skill 管理 − 权限审批 − 验证成本 − 重试等待 − 错误返工 − 订阅 / credits / runtime 费用 − 风险成本。**

这不是严格财务公式，而是一种避免营销偷换的检查表。

如果一个 Agent：

- 生成 PPT 用 10 分钟；
- 用户花 20 分钟改错；
- 还需要重新找源数据；

那么它即使“成功输出了 PPT”，用户体验也可能是负的。

如果知识库：

- 每周要人工同步文档；
- 权限经常错；
- 旧制度仍被召回；

那么“问答很快”并不能代表项目成功。

如果 Skill：

- 安装前要研究权限；
- 安装后经常因为 API 改版失效；
- 每次运行还要重新确认；

那么“有 7 万个 Skill”对用户可能只是库存，而不是资产。

---

## 十、商业宣传并不是坏事，但它应该被当作一种史料

本书不把营销材料当成“低级材料”。

恰恰相反，营销材料非常重要。

因为它保存了一个时代的人们**希望用户相信什么**。

2026 年厂商反复使用：

- 超级个体；
- 数字员工；
- AI 团队；
- 第二大脑；
- 专家市场；
- Skills；
- 一句话完成复杂工作；
- 7×24；
- 全自动；
- 越用越懂你。

这些词共同构成了一种时代想象：

> **AI 应该从软件功能升级成“一个替你承担责任的主体”。**

所以史书应该同时保存：

> **厂商承诺了什么；**  
> **用户因此期待什么；**  
> **产品最终交付了什么；**  
> **双方差距在哪里。**

这才是商业宣传和用户体验真正的历史关系。

---

## 十一、哪些情况下知识库 / Skill / Agent 真的非常有价值

批判营销不等于否认技术。

这些组件在边界明确时非常有效。

### 知识库适合：

- 权威源清晰；
- 文档版本可治理；
- 权限稳定；
- 问题类型重复；
- 有 ground truth；
- 可以持续评测。

例如：

- 产品文档；
- 设备维修手册；
- 规范库；
- 企业制度；
- 受控客服知识。

### Skill 适合：

- API / schema 稳定；
- 动作边界明确；
- 权限最小化；
- 结果可验证；
- 失败可回滚。

例如：

- 生成固定格式报表；
- 查询明确数据库；
- 格式转换；
- 执行受控脚本；
- 创建可撤销草稿。

### Agent 适合：

- 任务目标清楚；
- 环境可观察；
- 有 verifier；
- 有 recovery；
- 人工接管成本低于手工全做。

真正的问题从来不是：

> “知识库 / Skill / Agent 有没有用？”

而是：

> **“它们是否被用在合适的问题上？”**

---

## 十二、评曰：AI 最大的商业诱惑，是把“可能性”卖成“默认必需品”

每一轮计算平台变化都会出现类似阶段。

互联网时代：

> 每家公司都要有网站。

移动互联网时代：

> 每家公司都要有 App。

云时代：

> 每家公司都要上云。

2026 年 Agent 热潮最像：

> **每个人都应该有 Agent；每家公司都应该有知识库；每个 Agent 都应该装 Skills。**

这其中会留下真正的基础设施，也会留下大量后来无人维护的“AI 功能”。

所以历史不能只统计：

> 有多少产品加了 AI。

更应该统计：

> **哪些 AI 功能成为用户真实习惯；哪些知识库三个月后还在维护；哪些 Skill 一年后还可运行；哪些 Agent 的使用频率足以覆盖它的管理成本。**

真正成熟的 Agent 时代，不应该意味着用户天天想：

> “我是不是还缺一个知识库？还缺几个 Skill？是不是还要再养一个 Agent？”

它应该意味着这些基础设施最终退到后台。

用户只需要说：

> **“这件事帮我做完。”**

如果为了做到这一点，用户反而需要先成为知识工程师、权限管理员、Skill 审核员和 Agent 运维工程师，那么所谓“零门槛智能”还没有真正到来。

---

*2026-08 补订：GPT-5.6 Sol（OpenAI）。*

> 📖 详见《志·Agent 宣传、实测与可靠性》《志·中国 Agent 生态与商业化》《志·个人 Agent 生态与商业化》《志·OpenClaw 与中国 Agent“龙虾潮”》《表·知识库与 Skill 宣传—运维现实对照表》《表·Agent 产品可靠性观察表》。

---

[^1]: Tencent Cloud, WorkBuddy product page — “一个真正能干活的超级个体”, SkillHub 7万+ Skills. https://cloud.tencent.com.cn/product/workbuddy
[^2]: 飞书, “aily 智能体定制能力升级，打造企业专属 AI 智能体”, 2026-04-23. https://www.feishu.cn/content/article/7631864469689240764
[^3]: 小米澎湃 OS 开发者平台, “Agent生态平台开启小范围公测的通知”, 2026-04-21. https://dev.mi.com/xiaomihyperos/announcement/detail?id=41
[^4]: 小米澎湃 OS 开发者平台, “Agent平台服务协议”. https://dev.mi.com/xiaomihyperos/documentation/detail?pId=2302
[^5]: 新华网客户端《领军企业》专题, “全国产AI智能体PsyGo正式发布，让每个人都有‘可养成’的数字搭档”, 2026-05-30. https://app.xinhuanet.com/news/article.html?articleId=20260530c47c37ca9692429fac2cb74191870db8
[^6]: 小米澎湃 OS, “Skills发布标准及规范”. https://dev.mi.com/xiaomihyperos/documentation/detail?pId=2300
[^7]: 小米澎湃 OS, “MCP发布标准及规范”. https://dev.mi.com/xiaomihyperos/documentation/detail?pId=2301
[^8]: 社区 / 教程类“第二大脑”传播样本：飞飞的AI实验室, 2026-06-27. https://www.vance.xin/2026/06/27/202606271110/
[^9]: Yadav, “Temporal Validity in Retrieval Memory: Eliminating Stale-Fact Errors for AI Agents over Evolving Knowledge”, arXiv:2606.26511. https://arxiv.org/abs/2606.26511
[^10]: 百度千帆, “知识库”计费 / 高级解析文档, 2026-06-08. https://cloud.baidu.com/doc/qianfan/s/Zmlj32okw
[^11]: Packowski et al., “Optimizing and Evaluating Enterprise RAG: A Content Design Perspective”, arXiv:2410.12812. https://arxiv.org/abs/2410.12812
[^12]: 飞书, “Aily 角色权限配置”. https://www.feishu.cn/content/ehksl0lb
[^13]: 腾讯朱雀实验室, “Agent 安全演习 SKILL”, 2026-06-29. https://matrix.tencent.com/zh/2026/06/29/agent-security-drill-skill
[^14]: Do Rosario et al., “Why RAGs Hallucinate: Penalty-Aware Evaluation…”, arXiv:2608.26385. https://arxiv.org/abs/2608.26385
[^15]: Tencent Cloud, “WorkBuddy Enterprise 技能”. https://cloud.tencent.com/document/product/1831/134432
[^16]: Saha et al., “Under the Hood of SKILL.md: Semantic Supply-chain Attacks on AI Agent Skill Registry”, arXiv:2605.11418. https://arxiv.org/abs/2605.11418
[^17]: OpenClaw official ATLAS Threat Model — malicious skill installation / update poisoning. https://github.com/openclaw/openclaw/blob/main/docs/security/THREAT-MODEL-ATLAS.md
[^18]: VirusTotal, “From Automation to Infection: How OpenClaw AI Agent Skills Are Being Weaponized”, 2026-02-02. https://blog.virustotal.com/2026/02/from-automation-to-infection-how.html
[^19]: Palo Alto Unit 42, “OpenClaw’s Skill Marketplace and the Emerging AI Supply Chain Threat”, 2026-06-23. https://unit42.paloaltonetworks.com/openclaw-ai-supply-chain-risk/
[^20]: Snyk, “ToxicSkills: malicious AI agent skills / supply-chain audit”, 2026-02-05. https://snyk.io/blog/toxicskills-malicious-ai-agent-skills-clawhub/
