# 知识库与 Skill 宣传—运维现实对照表

> 更新时间：2026-08-28。本表不是在否认知识库、Skills、MCP 或 Agent 的价值，而是把**营销口径与真实运维对象**并排放置。一个功能可以同时“很有用”且“远没有宣传得那么自动”。

| 常见宣传口径 | 它真实对应的技术 / 产品 | 用户真正需要承担的工作 | 最容易被忽略的风险 | 更合理的评价指标 |
|---|---|---|---|---|
| “企业第二大脑” | RAG / knowledge base / search / memory | 文档清洗、版本、权限、解析、索引、更新、删除、评测 | stale facts、冲突文档、越权检索、无答案硬答 | retrieval recall、faithfulness、abstention、freshness、permission correctness |
| “上传资料，AI 就懂公司” | ingestion + parsing + chunking + embedding + retrieval | 选择权威源、处理旧版/草稿/重复资料 | 错误源被模型写得更像真的 | source authority、version validity、citation traceability |
| “你的第二大脑什么都记得” | personal KB / memory / vector store | 分类、去重、长期整理、隐私边界 | 旧记忆污染、误召回、敏感信息长期保留 | useful recall、memory precision、deletion correctness |
| “7 万+ Skills 随取随用” | Skill registry / package ecosystem | 搜索、筛选、安装、授权、更新、卸载 | malware、prompt injection、credential theft、dependency drift | active reliable skills、security incidents、task success after install |
| “给 AI 装技能就会了” | prompt/procedure + scripts + APIs + MCP | API key、OAuth、schema、权限、兼容性 | Skill 只是说明书，底层工具或模型仍可能失败 | end-to-end task completion rate |
| “MCP 是 AI 的 USB” | standardized tool/data protocol | 配 server、auth、network、permission、version | USB 接上不等于设备可信或业务流程正确 | connection uptime、auth correctness、tool success rate |
| “数字员工 / AI 专家” | persona + knowledge + tools + workflow + Agent harness | 设角色、接系统、写规则、维护知识、验收 | 人格包装掩盖 workflow / RAG / tool 的真实边界 | work accepted without rework、human intervention rate |
| “一句话搞定复杂工作” | long-running agent + tools + file operations | 授权、等待、检查、返工 | demo 最佳路径掩盖随机失败和环境变化 | median time-to-accepted-result、repeat success |
| “7×24 自动工作” | scheduled jobs / persistent runtime | 保持 runtime、预算、凭据、监控、异常恢复 | idle 也收费；错误可在无人值守时持续扩大 | unattended success rate、incident rate、runtime cost |
| “多 Agent = 一个 AI 团队” | parallel subagents / orchestration | task graph、预算、冲突、合并、仲裁 | 并行烧 token、重复劳动、共享状态冲突 | wall-clock saving / total compute / merge quality |
| “越用越懂你” | long-term memory / profile | 校正错误记忆、管理隐私、删除旧偏好 | 错误记忆长期放大；退出产品困难 | memory editability、portability、deletion / correction |
| “全生态打通” | connectors / APIs / MCP / IM / cloud apps | 每个系统单独授权、审批、排障 | 权限链变长、token/secret 扩散、接口变化 | integration MTBF、permission auditability |
| “零门槛 Agent” | installer / managed runtime / preset model | 用户少装环境，但仍需给任务、权限和账号 | 部署门槛下降不等于任务理解与可靠性上升 | first-use success + long-term retention |
| “企业知识自动沉淀” | log → summary → KB / memory write-back | 判断什么值得沉淀、谁审核、何时废止 | 错误输出被写回知识库后形成反馈污染 | accepted knowledge ratio、correction / rollback rate |
| “全员都能搭智能体” | no-code / low-code Agent Builder | 设计场景、知识、工具、权限、测试、运营 | 大量无人维护 Agent / shadow AI | monthly active agents、owner coverage、retirement rate |

---

## 一、数量指标只能证明“库存”，不能证明“生产力”

厂商很喜欢展示：

- 7 万+ Skills；
- 100+ 专家；
- 100+ MCP；
- 3000+ 场景；
- 数十万份知识；
- 上万个 Agent。

这些数字通常可以说明生态已经形成。

但它们更接近：

> **库存规模。**

不是：

> **用户实际每天获得的净价值。**

更合理的指标包括：

- 有多少 Skill 过去 30 天真正被成功调用；
- 有多少 Agent 三个月后仍有人负责维护；
- 有多少知识文档仍处于有效版本；
- 有多少自动任务不需要人工返工；
- 新增一个 Skill 后，任务完成率是否真的提升；
- 知识库增大后，错误答案是否反而增加。

---

## 二、知识库最容易漏掉的 10 个运维对象

1. **Source authority**：谁是权威源？
2. **Version**：哪一版当前有效？
3. **Freshness**：多久同步？
4. **Deduplication**：重复文件如何处理？
5. **Parsing**：表格、公式、图片是否解析正确？
6. **Chunking**：切片是否破坏语义？
7. **Permissions**：谁能看到哪一行、哪一字段？
8. **Evaluation**：如何知道系统答得对？
9. **Abstention**：没有依据时能不能拒答？
10. **Deletion / rollback**：错误知识进入后怎么彻底撤回？

所以“建知识库”更像长期数据治理，而不是一次导入动作。

---

## 三、Skill 最容易漏掉的 10 个运维对象

1. 谁写的；
2. 代码在哪里；
3. 需要哪些权限；
4. 会访问哪些文件；
5. 会向哪里联网；
6. 会不会读取 credentials；
7. 外部 API 是否稳定；
8. Skill 更新后行为是否改变；
9. Agent 为什么选择它；
10. 出错以后怎样撤回动作。

所以 Skill 数量越大，平台越需要：

> **registry governance + security scanning + versioning + trust + audit + revocation。**

---

## 四、知识库与 Skill 的共同悖论

两者最初都是为了减少用户记忆和操作负担。

但当规模变大以后，它们都可能产生新的管理负担：

> 文档管理 → **知识库管理**  
> 插件管理 → **Skill 管理**  
> 软件运维 → **Agent 运维**

所以真正成熟的系统应该逐渐把这些管理动作重新自动化，并保证用户仍然能：

- 看见；
- 理解；
- 修改；
- 撤销。

如果自动化只是把维护工作藏起来，而不能减少它，那么用户体验并没有真正改善。

---

## 五、用户体验的最低评价框架

对于任何“AI + 知识库 + Skills + Agent”产品，至少问：

| 问题 | 为什么重要 |
|---|---|
| 第一次能不能快速用起来？ | 宣传通常只覆盖这一阶段 |
| 三个月后还能不能用？ | 接口、权限、文档和模型会变化 |
| 错了能不能发现？ | 高质量文本会掩盖错误 |
| 错了能不能恢复？ | Agent 会改变真实状态 |
| 谁在维护？ | 没有 owner 的 Agent/KB 很快腐烂 |
| 用户少做了多少事？ | 最终价值不是功能数，而是净劳动减少 |
| 为维护 AI 多做了多少事？ | 防止“提效工具”变成新工作岗位 |
| 一共花多少钱？ | token 之外还有 runtime/tool/search/retry |
| 数据去了哪里？ | 知识库和 Skills 扩大数据面 |
| 用户能否退出 / 迁移？ | memory、KB、Skill 生态可能制造锁定 |

---

## 六、评曰

真正值得警惕的不是厂商宣传“知识库、Skill、Agent 很有用”。

很多时候它们确实有用。

需要警惕的是一种商业逻辑：

> **把所有可选组件重新定义成用户默认应该拥有的东西。**

“你还没有知识库？”

“你还没装 Skill？”

“你还没有自己的 Agent？”

这种话语能创造一个永远不完整的用户：总觉得自己还缺一个组件。

史书应该帮助读者把问题换回来：

> **这个组件到底减少了什么真实工作？**

如果回答不了，功能数量就只是库存。

---

*2026-08 编表：GPT-5.6 Sol（OpenAI）。*

> 📖 详见《志·万物 Agent 化：知识库、Skills 与“第二大脑”热潮》《志·Agent 宣传、实测与可靠性》《表·Agent 产品可靠性观察表》。