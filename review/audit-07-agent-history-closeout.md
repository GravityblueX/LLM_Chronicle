# Audit 07：Agent 主线总补订收口审计

> 审阅者：GPT-5.6 Sol（OpenAI） | 日期：2026-08-29 | 范围：中文主书 Agent 主线收口

---

## 一、结论

**收口通过。**

PR #3 已把 Agent 从零散产品事件提升为《大模型纪事》的正式第二主线，并在 `main` 中形成了从技术接口、产品商业化、中国与个人生态、OpenClaw 大众化、终端/垂直 Agent、可靠性、知识库/Skill 商业话语，到身份/权限、记忆/状态/恢复的完整结构。

本次收口不再追求“把所有带 Agent 名字的产品都列一遍”。后续是否继续开新专题，应以是否出现**新的历史层级、结构性转折或足以推翻当前判断的证据**为标准。

---

## 二、当前已经形成的 Agent 正史结构

### 2.1 技术与运行时

- ReAct / Toolformer / AutoGPT 等直接前史；
- Function Calling / Tool Use；
- Computer Use / Phone Use；
- MCP / A2A / UI / payment / hardware 接口；
- sandbox / background task / durable state / multi-agent；
- Agent identity / delegation / permission / credential；
- session / task state / checkpoint / long-term memory / recovery；
- observability / verification / rollback；
- event-driven automation 与 physical agents。

### 2.2 产品与商业化

- 通用 Agent；
- Coding Agent；
- Research Agent；
- 企业 Agent / AgentOps；
- 个人桌面 / local-first persistent Agent；
- Phone / OS / AI PC Agent；
- managed runtime / cloud computer；
- 垂直 Agent 与 Agent 外设；
- credits / action / task / runtime / payment 等计量方式。

### 2.3 中国与大众产品史

中国 Agent 技术和产品早于 OpenClaw；但 2025-11 Clawd → 2026-01 OpenClaw → 2026-03 “养龙虾”构成中国大众 persistent-personal-agent 的明显断代。当前主书已经覆盖模型、云、超级应用、Phone/OS、PC、Office、搜索、影像、AgentOps、支付、国产芯片 serving 和开放/私有部署等执行层。

### 2.4 宣传、用户体验与可靠性

现行凡例 v2.2 已明确：

> **Claim ≠ Availability ≠ One-shot success ≠ Repeated reliability ≠ Production ROI**

同时把“超级个体 / 数字员工 / 第二大脑 / 7万 Skills / 全员智能体”等互联网商业话语作为史料保存，但不把组件数量、一次 demo 或厂商 benchmark 直接改写为用户生产力。

---

## 三、当前不再视为正文缺口的事项

以下事项仍存在，但属于**机器维护 / 镜像 / 归档层**，不应与“中文正文没写完”混为一谈：

1. **英文 `en/` 镜像**：应按中文主书重新翻译同步；此前有意延后，避免中文事实尚未稳定时双倍维护。
2. **`INDEX.md`**：自动生成文件，继续由生成器重建，不手工修改。
3. **HTML snapshots**：当前 GitHub 连接器不能运行仓库本地网页归档流程；新增活链均应保持 `snapshot pending`，不得伪造快照。
4. **实时产品价格 / 套餐 / benchmark**：天然会变化，后续更新应保留“当时口径”和日期，不把动态数字写成永久属性。

---

## 四、以后什么情况下值得重新开 Agent 补订

不是每次新品发布都需要继续扩书。优先在以下情况出现时再开系统补订：

### A. 新的行动权层级出现

例如 Agent 获得新的标准化权限、支付、交易、物理设备、身份委托或跨组织行动能力，而不是只多一个工具。

### B. 可靠性发生结构性变化

例如长程任务重复成功率显著提高，human intervention 大幅下降，或出现可重复的生产级 `pass^k` / incident-rate 数据。

### C. 商业模式发生变化

例如市场从 seat / credits 进一步转向按完成结果、收益分成、保险/担保、自治预算或 Agent-to-Agent 交易结算。

### D. 中国市场发生收敛或洗牌

尤其关注 OpenClaw / Claw 系产品是否只是短期命名热潮；哪些平台一年后仍有真实用户、付费、生态维护和生产部署；哪些“万物 Agent 化”产品最终被撤回、合并或降级。

### E. 知识库 / Skill / MCP 生态出现平台级治理

例如签名、权限声明、供应链扫描、信誉系统、版本锁定、撤销机制、兼容标准或真实的 marketplace economics 成熟。

### F. 身份、记忆和恢复成为跨平台标准

例如 Agent identity、delegation token、portable memory、task checkpoint、exactly-once side effect 或跨供应商 handoff 出现事实标准。

### G. 独立研究推翻厂商叙事

例如真实用户研究证明某类 Agent 的净生产率为负，或反过来证明某类工作已经能在低人工干预下稳定完成。

---

## 五、今后新增 Agent 产品的最低记录模板

如果只是单个新产品，先不要急着立专题。至少记录：

1. **它是哪一层**：模型、harness、runtime、tool、OS、AgentOps、payment、hardware？
2. **产品状态**：demo / preview / beta / GA / commercial？
3. **厂商声称能力**：原话是什么？
4. **真实可用能力**：普通用户或企业实际拿到什么？
5. **独立证据**：有没有重复实测、生产数据或第三方用户研究？
6. **失败模式**：验证码、权限、状态、UI 变化、成本、误操作、恢复？
7. **商业模式**：seat / credits / token / task / runtime / action / outcome？
8. **为什么值得入史**：它改变了哪一层，而不是“名字里有 Agent”。

如果第 8 条答不出来，通常只需要进产品表或月度编年，不需要再立新《志》。

---

## 六、工具链收口建议

本轮检查发现，`tools/validate_links.js` 当前已经覆盖 `编年/`、`纪传/`、`志/`、`论/` 与 `00_体例.md`，但尚未覆盖新增大量外链的 `表/` 与 README。

因此本收口建议同时把链接验证范围扩到：

- `表/`
- `README.md`

这样 Agent 产品表、可靠性观察表、知识库/Skill 对照表和总导航中的链接也能进入同一死链检查流程。

---

## 七、封卷判断

到 2026-08-29，中文主书可以暂时视为**Agent 主线第一阶段封卷**。

此后的更新不必追求日更式“新闻完整”，而应继续坚持本项目已经形成的标准：

> **能找到的事实尽量保存；会变的数字注明日期；厂商宣传保留为宣传；真实使用保留为真实使用；不知道的地方就明确写不知道。**

如果以后发现明确漏项、硬错误，或 Agent 的技术/商业结构再次发生断代式变化，再继续修。

---

*本收口审计由 GPT-5.6 Sol（OpenAI）完成于 2026-08-29。*
