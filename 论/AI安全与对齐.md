# AI 安全与对齐：从模型拒答到能力治理

> 早期 AI 安全讨论很容易围绕一句话展开：“怎样让模型不要说危险的话？” 到 2026 年，这个问题已经明显过时。模型会写代码、使用工具、操作电脑、连续工作数小时、访问网络、协调多个 Agent，并开始连接无人机、机械臂和实验设备。风险不再只存在于一句输出里，而存在于**能力、权限、持续时间和环境耦合**中。AI 安全因此从 alignment training 扩展为一套能力治理工程：训练、评测、runtime safeguards、trusted access、沙箱、回滚、审计、provenance、出口与法律制度共同作用。

---

## 一、先区分三个经常被混在一起的“安全”

AI 行业说“安全”时至少可能指三件不同的事：

### 1. Product safety

例如：

- 不输出诈骗指导；
- 不骚扰用户；
- 保护隐私；
- 避免明显危险建议。

这是日常产品层。

### 2. Agent / operational safety

例如：

- 不越权执行 shell；
- 转账前确认；
- 修改代码可回滚；
- 不把 prompt injection 当成系统指令；
- 不让子 Agent 获得超出任务的权限。

这是执行系统层。

### 3. Frontier / catastrophic risk

例如模型在：

- 网络攻击；
- 生物风险；
- 自动化 AI R&D；
- 高影响军事或物理系统

上的能力是否达到需要特殊治理的阈值。

这三层可以共享技术，但不能用一个“安全分数”概括。

---

## 二、RLHF / Constitutional AI：安全最初主要被装进模型行为

InstructGPT 证明 human preference 可以通过 RLHF 显著改善 instruction following。[^1]

Anthropic 的 Constitutional AI 则让模型依据明确原则自我批评和修订，再通过 AI feedback 进行对齐。[^2]

这一时期的核心思想是：

> **把“应该怎样回答”训练进默认行为。**

它非常重要，却有天然边界。

一个模型即使默认很谨慎，只要获得高权限工具，一个很小的错误率也会在长程 Agent 中积累。

所以“模型性格良好”不能等于“系统安全”。

---

## 三、从输出风险到能力风险：Computer Use 是关键分水岭

**2024-10**，Claude Computer Use 把模型的风险表面从文本扩展到 GUI。[^3]

以前模型说错一句话，人可以不采纳。

Computer Use 之后，模型可以：

- 点击；
- 输入；
- 下载；
- 登录；
- 修改状态。

这创造一个新的乘法关系：

**Risk ≈ capability × autonomy × access × duration。**

模型每一步 99% 正确，连续执行几百步仍可能出现不可接受错误。

Agent 安全因此必须引入传统系统安全思想：least privilege、isolation、approval、audit、rollback。

---

## 四、2025：安全评测开始追赶“模型能做真实工作”

随着 coding agents 与 browser agents 成熟，传统 MMLU / toxicity benchmark 已经无法覆盖主要风险。

安全评估开始转向：

- cyber tasks；
- biology tasks；
- model autonomy；
- sabotage / oversight evasion；
- computer use；
- agentic misalignment。

OpenAI、Anthropic、Google 等逐步发布 system card / model card，对模型能力与部署 safeguard 进行更系统披露。

这也意味着“能力评测”和“安全评测”越来越难分开。

一个模型越能完成真实任务，它同时越可能在危险任务上有效。

---

## 五、Frontier safety 的核心问题从“内容类别”变成“能力阈值”

对于普通内容风险，可以按类别判断。

但前沿风险更像阈值问题：

> 模型在 cyber / bio / AI R&D 上究竟强到什么程度以后，必须改变部署方式？

Anthropic Responsible Scaling Policy（RSP）就是这种治理思路的代表：随着能力达到不同风险水平，提高安全和部署要求。[^4]

OpenAI system cards 也逐渐把生物、网络安全等前沿能力评估单独列出。

这与“禁止某些关键词”完全不同。

治理对象已经从**内容**变成**capability**。

---

## 六、Fable / Mythos：同一底层模型可以因为治理制度成为两个产品

**2026-06**，Anthropic 发布 Claude Fable 5 / Mythos 5。[^5]

最值得入史的不是名字，而是产品结构：

- 同一个前沿底层模型；
- Fable 使用更强 runtime safeguards；
- Mythos 面向经过验证的 trusted access 用户，允许更广高风险能力使用。

这意味着：

> **模型身份不再只由权重定义，也由围绕权重的访问制度定义。**

这是前沿能力治理从论文进入产品 SKU 的明确标记。

---

## 七、政府暂停与恢复：安全制度已经进入模型生命周期

Fable / Mythos 发布后，美国政府指令一度导致两款模型暂停；限制解除后 Fable 恢复更广部署，Mythos 仍保持严格访问条件。[^6]

模型生命周期因此不再只是：

**train → test → launch。**

它还可能包含：

**restricted preview → government review → suspend → modify safeguards → redeploy。**

治理第一次像软件发布流程一样持续存在。

这对史学很重要，因为“发布日期”不再等于“稳定进入市场”。

---

## 八、Runtime Classifier：为什么安全不必全部烤进权重

Fable 5 的 cyber / biology safeguards 使用独立 runtime classifiers。

它们可以：

- 判断请求是否触发高风险能力；
- 拒绝；
- fallback 到低能力模型；
- 独立更新阈值。

**2026-08-07**，Anthropic 更新 biology safeguards，并称正常 biology 请求的 fallback 在内部评测中下降约 85%。[^7]

底层 Fable 没有重新训练。

这说明安全工程开始把“**模型能力**”和“**能力是否放行**”拆成两个独立系统。

优点是更新快；缺点是 classifier 自己也会误判、被绕过或产生新的攻击面。

所以 runtime safety 不是真正的“外置万能盾”，只是 defense in depth 的一层。

---

## 九、安全真正成熟的标志可能是承认模型一定会犯错

很多安全叙述目标是“让模型不犯某类错误”。

实际 Agent 工程更接近传统可靠性工程：

> **错误无法完全消灭，所以系统必须让错误可发现、可限制、可恢复。**

这解释了：

- sandbox；
- read/write permission；
- checkpoints；
- diff review；
- rollback；
- transaction boundary；
- human approval

为什么逐渐成为 Agent 默认能力。

一个能回滚的 98% 可靠 Agent，可能比一个不能回滚的 99.5% 可靠 Agent 更安全。

安全评价必须考虑**损失可逆性**。

---

## 十、Prompt Injection：Agent 时代最典型的“模型层无法独自解决”风险

当 Agent 浏览网页或读取文件时，外部内容可能包含恶意指令。

模型需要区分：

- 数据；
- 用户指令；
- 系统规则；
- 工具返回内容。

但语言模型本质上都以 token 形式处理它们。

Prompt injection 因而成为一个结构性安全问题。

仅靠“训练模型更聪明地识别恶意 prompt”无法提供硬安全边界。

更可靠的方案需要：

- instruction hierarchy；
- tool permission；
- data taint / provenance；
- restricted execution；
- confirmation on high-impact actions。

这再次说明 AI safety 已经是 systems security。

---

## 十一、开放权重的安全争论应该区分“开放”与“危险能力”

关于 open weights 的争论长期被简化成：

- 开放派：透明、创新、去垄断；
- 安全派：开源危险、无法控制。

实际立场更复杂。

**2026-07**，Dario Amodei 公开写道 Anthropic 从未主张禁止 open-weight models，并认为不具危险能力的开放权重模型可以是公共品；主要担忧是拥有很高危险能力的前沿权重一旦扩散后无法重新施加 safeguard。[^8]

因此更准确的争议是：

> **什么能力阈值之后，不可撤回分发变成特殊风险？**

而不是“开放模型天然危险”。

Kimi K3、Qwen3.8 等超大开放权重旗舰使这个问题越来越现实。

---

## 十二、Watermark：治理开始覆盖“模型输出离开平台之后”

**2026-08-14**，Anthropic 宣布未来 Claude 文本加入统计式 watermark，以满足透明度要求。[^9]

它不添加隐藏字符，也不包含用户身份信息。

这类 provenance 技术解决的不是模型生成当下，而是：

> **内容离开平台、被复制和传播之后，社会还能不能识别其 AI 来源。**

AI safety 因此从 inference 现场延伸到信息生态。

---

## 十三、物理 Agent：风险第一次真正跨过屏幕

Anthropic 在 2026 年连续推进 physical AI：

- 与 UST 合作将 Claude 接入制造与工程场景；
- Project Pilot 测试模型控制无人机；
- 8 月 27 日 Reuters 报道 Model Hardware Standard（MHS）research preview，让 Agent 连接机械臂、显微镜等物理设备。[^10][^11][^12]

截至本篇补订时 MHS 官方页面仍待归档，因此 MHS 本身按单一 Reuters 权威来源记录。

当 Agent 接入物理设备，传统软件安全的 rollback 也不总能成立。

物理安全需要：

- hard limits；
- emergency stop；
- speed / force limits；
- geofencing；
- simulation；
- human presence；
- redundant sensors。

AI safety 从 cybersecurity 进一步进入**control safety**。

---

## 十四、监管史也必须避免“只会越来越严”的线性叙述

一个很好的反例是美国 **AI Diffusion Rule**。

2025 年 1 月，拜登政府公布 Framework for Artificial Intelligence Diffusion，试图建立先进芯片与部分模型权重的全球分层扩散框架。[^13]

但 **2025-05-13**，特朗普政府商务部宣布撤销这套规则，在主要合规要求生效前停止实施并寻求替代框架。[^14]

这说明 AI 治理不会简单单向收紧。

政策会受：

- 政府更迭；
- 产业游说；
- 国家安全；
- 外交；
- 开放模型生态

共同影响。

因此“未来监管一定怎样”应当谨慎。

---

## 十五、EU AI Act：另一种路线是部署责任和透明度

EU AI Act 于 2024 年正式生效并分阶段适用。[^15]

欧盟的重点与美国出口管制不同：

- 风险分类；
- 高风险系统义务；
- transparency；
- GPAI rules；
- 市场责任。

Claude watermark 等产品更新已经直接引用 EU AI Act 类透明度要求作为背景。

这说明模型产品越来越必须在**不同法域下拥有不同治理层**。

---

## 十六、安全评估为什么也不能只看 benchmark

一个模型在 cyber benchmark 上达到某分数，不代表真实风险可以简单排序。

风险还取决于：

- 是否能自主行动；
- 能否持续几小时；
- 是否能购买资源；
- 是否能隐藏行为；
- 是否有联网；
- 是否能调用高权限工具；
- 是否有 human-in-the-loop。

因此真正的 risk assessment 越来越需要**scenario + deployment context**。

同一个权重，在离线 chatbox 和拥有 root shell 的 Agent 中，不是同一种风险对象。

---

## 十七、安全与能力不是“不冲突”，而是冲突必须被管理

旧安全叙事常用一句漂亮的话：

> “安全和能力不是跷跷板。”

这只能表达一种愿望。

现实中存在真实 trade-off：

- 过强 classifier 会误杀科研请求；
- 放宽能力会增加滥用风险；
- human approval 会降低自动化效率；
- sandbox 会限制任务范围；
- 开放权重提高可审计性，也降低原厂撤回能力。

Fable biology safeguards 的 false positive 改进正说明这种 trade-off 是可测、可优化的，而不是不存在。

成熟的安全工程不是否认冲突，而是：

> **把冲突暴露出来，测量它，建立权限和回退机制，在不同风险等级选择不同方案。**

---

## 评曰

AI 安全曾经是一场关于“模型应该拒绝什么”的争论。

到 2026 年，它越来越像一套数字社会的**能力治理制度**。

模型训练负责塑造默认倾向；runtime classifier 负责动态风险判断；trusted access 决定谁获得高能力；权限系统决定 Agent 能执行什么；checkpoint 和 rollback 控制错误损失；watermark 管输出离开平台之后；出口管制和法律再决定模型在哪些国家、以什么形式存在。

安全因此不可能有一个“终极 alignment algorithm”。

真正稳定的安全来自多层系统：

> **不要相信任何单层控制永远有效。**

这和互联网、操作系统、航空、核工业的安全经验没有本质区别。

AI 的特殊之处只是：核心执行者不是确定性程序，而是一个会泛化、会误解、会被诱导、也会在新环境中创造新策略的模型。

所以安全的最终任务并不是把模型变成不会犯错的圣人。

而是让一个不完全可靠的智能体，进入真实世界后仍然**可限制、可观察、可审计、可恢复、可追责**。

如果 Agent 时代有一条真正成熟的安全原则，大概就是这一条。

---

*本篇由终末地工业史官团队编纂。*  
*2026-08 补订：GPT-5.6 Sol（OpenAI）。*

---

> 📖 详见《志·模型对齐技术演进》《Claude 世家》《志·地缘与封锁》《志·AI Agent 生态》《志·AI 伦理与治理》。

[^1]: Ouyang et al., InstructGPT. https://arxiv.org/abs/2203.02155
[^2]: Bai et al., Constitutional AI. https://arxiv.org/abs/2212.08073
[^3]: Anthropic, computer use / Claude 3.5 update. https://www.anthropic.com/news/3-5-models-and-computer-use
[^4]: Anthropic, Responsible Scaling Policy. https://www.anthropic.com/responsible-scaling-policy
[^5]: Anthropic, “Claude Fable 5 and Claude Mythos 5”. https://www.anthropic.com/news/claude-fable-5-mythos-5
[^6]: Anthropic, Fable / Mythos suspension and redeployment statements. https://www.anthropic.com/news/fable-mythos-access ; https://www.anthropic.com/news/redeploying-fable-5
[^7]: Anthropic, “Improving Fable 5's biology safeguards”. https://www.anthropic.com/news/improving-fable-5-s-biology-safeguards
[^8]: Anthropic, “Our position on open-weights models”. https://www.anthropic.com/news/position-open-weights-models
[^9]: Anthropic, Claude text watermark. https://www.anthropic.com/news/claude-text-watermark
[^10]: Anthropic, UST physical AI. https://www.anthropic.com/news/ust-claude
[^11]: Anthropic / Andon Labs, Project Pilot. https://www.anthropic.com/research/project-pilot
[^12]: Reuters, Model Hardware Standard, 2026-08-27. https://www.reuters.com/technology/anthropic-unveils-new-framework-allowing-ai-agents-operate-physical-devices-2026-08-27/
[^13]: BIS, Framework for Artificial Intelligence Diffusion, 2025-01. https://www.bis.gov/press-release/biden-harris-administration-announces-regulatory-framework-responsible-diffusion-advanced-artificial
[^14]: BIS, rescission of AI Diffusion Rule, 2025-05-13. https://www.bis.gov/press-release/department-commerce-rescinds-biden-era-artificial-intelligence-diffusion-rule-strengthens-chip-related
[^15]: European Commission, EU AI Act framework. https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai
