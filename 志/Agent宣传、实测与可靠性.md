# 《Agent 宣传、实测与可靠性》

> Agent 时代最容易制造一种新的史料错觉：**厂商演示中“做成过一次”，会被新闻稿、短视频和二手报道迅速改写成“这个 Agent 能稳定完成这类工作”。**
>
> 但 Agent 与普通生成模型不同。它不是只输出一句话，而是在环境中连续执行几十、几百甚至几千步。一次成功不能证明长期可靠；一个 benchmark 分数也不能自动证明真实用户可以无监督使用。本篇记录 Agent 从“能力演示”走向“可靠性工程”的历史，并给本书建立一套不把商业宣传直接当作能力事实的写法。

---

## 一、先分清五句话

关于一个 Agent，以下五句话看起来相近，证据强度却完全不同：

1. **厂商声称支持 X。**
2. **产品界面里确实存在 X 功能。**
3. **有人完成过一次 X。**
4. **在重复测试中，X 有较高成功率。**
5. **在生产环境里，X 长期具有可接受的成本、事故率和人工接管率。**

只有第五层才接近“成熟生产能力”。

因此本书以后采用以下固定写法：

| 证据层 | 推荐表述 | 不应直接写成 |
|---|---|---|
| 发布会 / 产品页 | “厂商称支持……” | “该 Agent 可以稳定……” |
| API / GA 产品可调用 | “该能力已进入公开产品” | “真实任务已经可靠” |
| 单次 demo / 用户案例 | “至少存在成功案例” | “普遍可复现” |
| 重复独立测试 | “在某环境下重复成功率为……” | “所有用户都能达到” |
| 长期生产数据 | “在已披露范围内形成生产采用” | “已经替代某类岗位” |

这里最重要的词不是“能不能”，而是：

> **多大概率能做成、要试几次、要人救几次、失败会留下什么后果、最终一件成功任务花多少钱。**

---

## 二、为什么 Agent 比聊天模型更容易被单次 demo 误导

聊天模型一次回答的状态空间相对有限。

Agent 则会依次经历：

> 理解目标 → 制定计划 → 选择工具 → 登录 → 搜索 → 打开页面 → 解析界面 → 输入 → 等待 → 判断结果 → 重试 → 修改计划 → 写文件 → 提交 / 发送 / 下单。

如果每一步成功率都是 99%，100 步连续成功的理论概率也只有约 36.6%。

真实系统里每一步还不是独立同分布：

- 网站会变；
- App 会弹窗；
- 登录态会过期；
- API 会限流；
- 模型输出具有随机性；
- 工具 schema 会漂移；
- 网络会超时；
- 用户指令本身可能含糊。

所以 Agent 的核心工程问题天然是：

> **长链条可靠性。**

这也是为什么“它能运行两个小时”不等于“它能可靠工作两个小时”。

---

## 三、pass@k 与 pass^k：一次成功和连续成功不是一回事

传统代码模型评测喜欢 `pass@k`：给模型多次尝试，只要其中一次通过就算能力存在。

这对研究“模型有没有可能找到正确答案”很有价值。

但生产 Agent 更需要另一个方向：

> **连续多次执行，同一任务是否都能成功？**

2026 年的 ReliabilityBench 明确使用 `pass^k` 讨论重复执行一致性，并把语义等价扰动、API 超时、rate limit、partial response、schema drift 等故障加入 Agent 评测。论文在其测试中观察到，仅加入一定程度的任务扰动，就能让成功率从 96.9% 降到 88.1%；rate limiting 是破坏性最大的故障之一。[^1]

同年《On the Reliability of Computer Use Agents》直接研究同一个 computer-use Agent 在**同一个任务上重复运行**的情况，结论是：即使任务与模型不变，一次成功也不能保证下一次成功。作者把不可靠性分解为执行随机性、任务歧义和 Agent 行为变化。[^2]

8 月的《Beyond Pass@k》进一步指出，部分 coding-agent benchmark 对 `pass@k` 的实现甚至可能把单次提交里的 unit tests 数量误当独立 rollout 数量，造成极大的分数膨胀；作者提出应以独立 rollout 计算 reliability@k，并同时考虑安全缺陷。[^3]

因此以后本书看到“成功率 90%”时必须继续问：

- 是一次跑 100 个不同任务？
- 还是同一任务跑 10 次？
- 允许 retry 吗？
- 允许 human intervention 吗？
- 是 best-of-N 还是 first try？
- harness、模型、工具权限和环境版本是什么？

没有这些条件的“90%”信息量很有限。

---

## 四、Computer Use：最直观的“能做但不稳定”

Computer Use 特别适合观察 Agent 的宣传与现实差异。

原因很简单：

API 工具调用通常有 schema；GUI 没有。

Agent 面对的是：

- 像素；
- 窗口；
- 按钮；
- 动画；
- 延迟；
- tooltip；
- modal；
- 验证码；
- 焦点状态；
- 版本差异。

这使同一个动作“点击提交”都可能因为页面滚动位置不同而失败。

OSWorld 等 benchmark 很重要，但 Computer Use 的最终成熟度不能只看榜单。

必须同时看：

> **重复可靠性、环境恢复、误操作后果和人工接管。**

如果 Agent 第一次成功、第二次失败，研究意义仍然存在；但如果它负责发邮件、下订单、改生产配置，这种方差就直接变成事故率。

---

## 五、OpenClaw：中国第一次大规模遇到“高权限 Agent 的现实”

2026 年中国“养龙虾”热潮让这个问题从研究论文进入普通用户生活。

OpenClaw 的吸引力来自一个极其直接的组合：

> **本机 / 云机常驻 + shell / 文件 / 浏览器 / Skills + IM 远程指令 + 自己选择模型。**

它让 Agent 第一次像一个普通软件一样被大量非专业用户部署。

但这也意味着：安全、成本和可靠性问题被同步放大。

### 5.1 热潮不是只有成功故事

Reuters 2026 年 3 月在中国采访 OpenClaw 用户时同时记录了两面：一边是学生、退休者、开发者“养龙虾”的热情；另一边已经有用户抱怨 token 成本高、结果低效、投入产出不理想，部分任务执行时间很长。[^4]

这类材料特别重要，因为它打破了发布会叙事里最容易形成的错觉：

> “可以自动执行”不等于“自动执行比我自己做更省时间、更省钱”。

真正的产品价值应计算：

> **Agent 执行时间 + token / runtime 成本 + 人类等待 + 失败重做 + 检查结果的时间。**

### 5.2 安全警告甚至早于中国大爆发

2026 年 2 月 5 日，中国工信系统已公开警告 OpenClaw 部署中的安全风险，包括公网暴露不足、身份认证薄弱以及由错误配置带来的数据泄露与攻击面。Reuters 报道时指出，OpenClaw 当时已经在中国迅速扩散，多家云厂商开始提供托管。[^5]

这说明“龙虾潮”的历史不能写成：

> 爆红 → 后来才发现风险。

更准确的是：

> **爆红、风险暴露、监管提醒、厂商商业化几乎同时发生。**

---

## 六、中国大厂自己的文档，也在不断证明“支持”不等于“无限制”

### 6.1 ArkClaw：Multi-Agent 和云电脑会争资源

火山引擎 ArkClaw 官方文档明确列出云电脑限制：[^6]

- 低规格实例后来不再支持新建云电脑；
- 低配实例即使能用，操作流畅度也可能受限；
- 子 Agent 在调用 computer-use 前必须具备对应 Skill；
- **为避免资源竞争，同一实例同一时间建议只运行一个云电脑任务**；
- 初始化、重启、修复、欠费等状态会直接使云电脑不可用。

这组限制非常有史料价值。

如果只看市场材料，我们会看到：

> “云电脑 + Multi-Agent。”

如果看运行文档，就会发现：

> **Multi-Agent 并不意味着同一台执行环境可以无冲突并行操作。**

这正是“宣传能力”和“工程边界”应该同时记录的例子。

### 6.2 WorkBuddy：更新日志本身就是失败史料

WorkBuddy 的更新日志比宣传页更能说明 Agent 的真实复杂性。2026 年 3—6 月的 changelog 持续修复：[^7]

- 新建任务白屏 / 卡死；
- 对话异常终止；
- 历史记录丢失；
- BOT 配置链路不通；
- 自动化任务 prompt 缺失；
- 工作队列重复入队；
- 任务抢占与停止状态同步异常；
- 重进运行中任务时历史丢失；
- sandbox 环境状态恢复丢失；
- 未知工具权限请求导致会话挂起；
- 微信 ClawBot 长回复被截断；
- 自动化任务推送缺失最终回复。

这些不是“产品很差”的证据。

恰恰相反，它们证明：

> **一个长期 Agent 产品真正要做的工程工作，远超过模型推理。**

状态、队列、权限、恢复、UI、Connector、sandbox、IM 通道都可能成为失败点。

所以 changelog 应当是 Agent 史的一手材料，而不仅是产品维护日志。

---

## 七、WPS：商业宣传、产品拆包与用户体验也属于 Agent 商业史

WPS 的公开宣传强调 AI 办公智能体、“一句话搞定复杂工作”和长期工作上下文。

但 WPS 官方社区同时保留了另一类史料。

2026 年 8 月，一名用户在官方社区投诉：其购买 WPS 大会员时理解 AI 办公智能体等为核心权益，后来灵犀专业版独立收费，使其认为高阶 AI 能力被重新拆包。[^8]

另外，官方社区还能看到用户反馈：

- AI 生成 PPT 卡住；
- 云电脑处理合同审核出现系统错误；
- 微信连接失败；
- 灵点消耗过快；
- 部分用户主观感觉模型 / 续写质量下降。[^9]

这些都是**用户个案**，不能扩写成“WPS 普遍不可用”或“所有用户认为权益缩水”。

但它们应该进入史书，因为 Agent 商业化不只是技术问题，也包括：

> **原来的会员买到了什么？高级 Agent 功能是否重新分层？执行失败是否扣费？资源点数是否透明？**

“功能拆包”和“计算资源计量”本身就是 Agent 产品从 AI feature 变成独立商品的一部分。

---

## 八、华为 AgentArts：成熟平台会直接把“可靠性”做成产品层

华为云在 2026 年推出 / 公测 AgentArts 时，把平台定位直接放在企业生产问题上：long-running tasks、企业安全、行业知识与全链路 observability。[^10]

后续官方文档进一步提供：[^11]

- 状态持久化；
- 任务中断与恢复；
- 多实例状态管理与隔离；
- Agent 行为轨迹监控；
- 智能体卫士；
- runtime 灰度发布；
- 会话保持；
- API / MCP 网关。

这代表 Agent 产品从“强调它会多少 Skill”，进入另一阶段：

> **可靠性本身成为可出售的基础设施。**

真正生产级的平台必须卖：

- recovery；
- observability；
- isolation；
- policy；
- rollout；
- audit。

这些词不如“数字员工”吸引眼球，却决定 Agent 能不能进入核心业务。

---

## 九、支付：Agent 的错误开始直接等于金钱错误

支付宝 2026 年的 Agent 支付 / AI 按量付费把 Agent 可靠性推到一个更尖锐的位置。

其官方文档已经把 HTTP `402 Payment Required`、Payment-Needed、Payment-Proof、支付凭证验证等写成 Agent / MCP / Skill 的标准接入流程。[^12][^13]

支付宝还明确要求：

> **用户授权后，Agent 才能完成支付。**

支付层让一个此前抽象的风险变得非常具体：

> Agent 如果理解错任务，它不只是写错文件，还可能买错东西、调用错误的付费 API 或超出预算。

因此 Agent 支付必须同时具备：

- authorization；
- budget cap；
- proof；
- merchant verification；
- transaction log；
- refund / dispute；
- intent confirmation。

支付宝后续甚至发布支付集成 benchmark，从“能不能接入支付”推进到完成度、Skill 提升和任务运行成本比较。[^14]

这再次说明：

> **Agent 越接近真实经济，可靠性越不能只靠 demo。**

---

## 十、Agent 的失败至少有六种，不应只记“任务失败”

### 1. 未完成

最容易发现：任务没有结果。

### 2. 假完成

Agent 声称“已经完成”，但文件、订单、邮件或数据库状态其实没变。

这是 Agent 特别危险的失败类型，因为自然语言结果看起来很自信。

### 3. 做错

行动发生了，但对象、参数、文件或收件人错误。

### 4. 做过头

用户只授权一个局部任务，Agent 扩大了操作范围。

高权限个人 Agent 尤其需要警惕。

### 5. 成本失控

任务最后做成，但重试、search、tool call、subagent、cloud computer 与 token 消耗使成本失去经济意义。

### 6. 无法恢复

Agent 中途失败后，无法从 checkpoint / state 继续，只能全部重跑。

一个“成功率 90%”的 Agent，如果失败 10% 时都会造成不可逆损失，和失败后安全停止的 Agent 完全不是同一种产品。

---

## 十一、本书以后怎样记录 Agent 产品

每个重要 Agent 产品，尽量记录下面八项：

| 字段 | 问题 |
|---|---|
| Product status | research preview / beta / GA / enterprise production？ |
| Official claim | 厂商声称能做什么？ |
| Execution boundary | 能碰哪些文件、工具、网页、App、账号？ |
| Human handoff | 登录、验证码、支付、发送、删除时是否要求人介入？ |
| Reliability evidence | 有重复运行数据、生产成功率或独立评测吗？ |
| Known failures | 已知怎么失败？ |
| Cost | 一件成功任务实际要多少 token / credits / runtime / 人工？ |
| Recovery | 失败后能 resume / rollback / audit 吗？ |

如果这些信息没有公开：

> **就写“未披露”。**

这比替厂商猜一个成熟度更有价值。

---

## 十二、评曰：Agent 史最不能写成“功能发布史”

模型史里，“支持 1M context”通常至少是一个比较清楚的产品属性。

Agent 史里的：

> “支持自动处理邮件”

却可能隐藏几十个没有说出口的问题：

- 哪家邮箱？
- 能否登录？
- 能否读附件？
- 能否发信？
- 发信前要确认吗？
- 同样任务十次成功几次？
- 邮箱页面更新后呢？
- 收件人名字相似怎么办？
- prompt injection 怎么办？
- 失败后是否知道自己失败？

所以 Agent 产品史最重要的笔法变化是：

> **不要问“它有没有这个功能”；要问“在什么条件下，它能以什么概率、什么成本、什么风险完成这个功能”。**

这并不是对厂商宣传特别苛刻。

恰恰因为 Agent 开始拥有真实行动权，我们需要比聊天模型时代更严格地保存它的能力边界。

一个时代真正成熟的标志，也许不是发布会里“AI 员工”越来越像人。

而是有一天产品文档开始能够诚实回答：

> **它什么时候会失败；失败以后怎么办。**

---

*2026-08 补订：GPT-5.6 Sol（OpenAI）。*

> 📖 详见《志·OpenClaw 与中国 Agent“龙虾潮”》《志·个人 Agent 生态与商业化》《志·中国 Agent 生态与商业化》《表·Agent 产品可靠性观察表》《表·Benchmark 速查》。

---

[^1]: Gupta, “ReliabilityBench: Evaluating LLM Agent Reliability Under Production-Like Stress Conditions”, arXiv:2601.06112, 2026. https://arxiv.org/abs/2601.06112
[^2]: Gonzalez-Pumariega et al., “On the Reliability of Computer Use Agents”, arXiv:2604.17849, 2026. https://arxiv.org/abs/2604.17849
[^3]: Jiang et al., “Beyond Pass@k: Measuring Reliability and Security of Agentic Code Generation”, arXiv:2608.14711, 2026. https://arxiv.org/abs/2608.14711
[^4]: Reuters, “As OpenClaw enthusiasm grips China, schoolkids and retirees alike raise 'lobsters'”, 2026-03-19. https://www.reuters.com/technology/openclaw-enthusiasm-grips-china-schoolkids-retirees-alike-raise-lobsters-2026-03-19/
[^5]: Reuters, “China warns of security risks linked to OpenClaw open-source AI agent”, 2026-02-05. https://www.reuters.com/world/china/china-warns-security-risks-linked-openclaw-open-source-ai-agent-2026-02-05/
[^6]: 火山引擎, ArkClaw 云电脑使用限制, 2026-06-08. https://www.volcengine.com/docs/87732/2431008
[^7]: Tencent WorkBuddy Changelog, 2026-03—06. https://www.workbuddy.cn/docs/workbuddy/Changelog
[^8]: WPS Office 官方社区用户帖子，“本人购买了WPS大会员……”, 2026-08-07. https://bbs.wps.cn/topics/node/8?child=89
[^9]: WPS Office 官方社区 WPS AI / 灵犀反馈区, 2026-08. https://bbs.wps.cn/topics/node/8?child=58
[^10]: Huawei, “华为云发布 Agentic AI 系列新品”, 2026-06. https://www.huawei.com/cn/news/2026/6/inspire-agenticera-agenticinfra
[^11]: 华为云, AgentArts / openJiuwen 产品与最新动态. https://support.huaweicloud.com/productdesc-agentarts/agentarts_03_0002.html ; https://support.huaweicloud.com/wtsnew-agentarts/index.html
[^12]: 支付宝 Agent 支付, “AI按量付费产品接入指南”. https://aipay.alipay.com/docs/ai-receive/MACHINE_PAY.html
[^13]: 支付宝 Agent 支付, 支付凭证验证接口. https://aipay.alipay.com/docs/ai-receive/api-list/alipay-aipay-agent-payment-verify.html
[^14]: 支付宝 Agent 支付 Changelog, AIPay Benchmark, 2026-08-07. https://aipay.alipay.com/developers/Changelog
