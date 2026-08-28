# 中国 OpenClaw“龙虾”生态对照表

> 更新时间：2026-08-28。本表只收**能够确认产品存在、来源关系或公开使用状态**的主要“龙虾”路线，不照抄社区所谓“14 家/20 家/百虾榜”中的所有名字。特别注意：**“腾讯版 OpenClaw”“阿里版龙虾”之类媒体简称，不代表代码一定基于 OpenClaw。**

| 产品 | 厂商 / 团队 | 与 OpenClaw 的关系 | 主要形态 | 已确认能力 / 产品事实 | 已知限制 / 现实边界 | 商业化 / 状态 |
|---|---|---|---|---|---|---|
| **OpenClaw**（原 Clawd / Moltbot） | Peter Steinberger / 开源社区 | 原始母体 | local-first personal agent harness | 消息渠道、workspace、Skills、shell/browser、长期 gateway、多模型 | 安装 / 权限复杂；prompt injection、安全与误操作风险；用户真实案例出现失控群发 | MIT 开源；用户自行承担模型 / 机器成本 |
| **QClaw** | 腾讯 | 高度继承 / 产品化 OpenClaw | 本地个人 Agent | 一键安装、微信 / IM 遥控、OpenClaw Skills | 自定义与兼容随版本变化；仍承继 OpenClaw 的权限 / Skill 风险 | 面向个人，降低部署门槛 |
| **ClawBot / 微信 OpenClaw 插件** | 腾讯 / 微信 | OpenClaw 消息入口 | WeChat gateway | OpenClaw 作为微信联系人 / 插件被远程下令 | 权限、消息输入与 prompt injection 风险仍存在 | 微信逐步放量 / 生态入口 |
| **WorkBuddy** | 腾讯 | **非 OpenClaw fork；CodeBuddy 架构，兼容 OpenClaw Skills / MCP / Claw 习惯** | 桌面工作 Agent | 文件、Office、terminal、Skills、自动任务、腾讯文档、多模型 / 专家 | 官方能力很多，但复杂任务仍需复核；版本日志持续修复会话、文件、积分、Claw 等问题 | 个人订阅 + credits + 企业版 |
| **DuClaw** | 百度智能云 | 托管 OpenClaw | managed cloud agent | zero-deployment OpenClaw；百度 Search / Baike / Scholar Skills | 云托管不等于可靠性提高；费用和权限转移到平台 | 云服务 |
| **DuMate（搭子）** | 百度 | OpenClaw-based / 企业增强 | 桌面 / 企业 Agent | 桌面办公、企业安全与管理增强 | 百度官方自己提醒 Agent 仍会犯错；生产可靠性需另证 | 企业 / 生产化定位 |
| **RedClaw** | 百度 | OpenClaw-based | 移动 / Phone Agent | 跨 App / 多设备任务路线 | GUI、登录、验证码、动态 UI 都会影响稳定性 | 产品族成员 |
| **小度 OpenClaw Agent** | 百度 | OpenClaw-based | 智能家居 / 硬件入口 | 把 Agent 入口延伸到小度设备 | 物理 / 家居动作的权限边界更敏感 | 产品族试验 |
| **ArkClaw** | 火山引擎 | 托管并持续同步 OpenClaw；支持迁移 OpenClaw 状态 | managed agent + cloud browser/computer | OpenClaw 迁移、备份恢复、云浏览器 / 云电脑、团队模式、观测、Agent Plan | 官方文档明确：部分规格不支持云电脑；多 Agent 同时操作同一云电脑易资源冲突，建议单任务 | 云订阅 / Agent Plan / 企业版 |
| **AutoClaw** | 智谱 | 官方称基于 OpenClaw | 本地个人 Agent | IM、文件、浏览器、代码、50+ Skills、记忆 / 集群模式 | 功能多不等于所有场景稳定；长期自进化等能力仍需重复实测 | 下载即用 / 模型与服务商业化 |
| **CoPaw → QwenPaw** | 阿里 AgentScope | 独立重实现；非 OpenClaw fork | self-host personal assistant | 多渠道、ReMe 记忆、主动任务、本地 / 云部署 | 阿里云文档明确要求评估安全与稳定性；仍依赖模型与服务器资源 | 开源 + 云镜像 + Token/Coding Plan |
| **HiClaw** | 阿里云社区 | OpenClaw 浪潮下的独立多 Agent 轻量设计 | Manager + Worker multi-agent | 尝试降低 worker 容器内存、拆 manager/worker | 属工程路线，不等于成熟终端产品 | 开源 / 技术生态 |
| **Wukong（悟空）** | 阿里 / 钉钉 | **非 OpenClaw fork；由龙虾潮推动的独立企业 Agent** | enterprise multi-agent workspace | 钉钉组织 / 权限 / 文档 / 日程 / 企业应用，多 Agent 协作 | 邀测 / 企业场景复杂度高；厂商演示不能直接等同生产完成率 | 个人算粒 + 企业销售 |
| **Kimi Claw / Agent / Swarm** | 月之暗面 | 非简单 OpenClaw fork；吸收 Claw / persistent-agent 产品形态 | cloud agent / swarm | Agent、Swarm、scheduled tasks、Claw runtime、Code | 并发更多不等于 ROI 更高；总 token / runtime 成本可能显著增加 | 会员 + credits + Agent / Swarm 配额 |
| **扣子 OpenClaw 云电脑 / 扣子 3.0** | 字节 | 能接入 / 托管 OpenClaw 等第三方 Agent；平台自身独立 | cloud device / AI team workspace | 第三方 Agent 接入、云电脑 / 云手机、多 Agent 项目空间 | 云设备按在线时长收费；外部 Agent 权限 / 兼容性仍需治理 | 订阅 + points + 云设备时长 |
| **MiniMax + OpenClaw provider / MaxClaw** | MiniMax | OpenClaw 官方支持 MiniMax provider；MiniMax 自有 Agent 产品独立 | model provider + personal cloud agent | 国内 / 国际 MiniMax OAuth/API 可直接配置 OpenClaw；另有自家 Agent / Claw | provider 兼容细节会随 API / thinking format 改变 | Token Plan / Agent subscription |

---

## 一、不能再用“套壳”二字概括整个生态

至少要分四类：

1. **直接使用 / 产品化 OpenClaw**：QClaw、DuClaw、ArkClaw、AutoClaw；
2. **OpenClaw-based 设备 / 企业衍生**：DuMate、RedClaw、小度 Agent；
3. **兼容 OpenClaw 生态但内核自研**：WorkBuddy；
4. **被龙虾潮推动的独立重实现 / 新产品**：QwenPaw、HiClaw、Wukong，以及 Kimi / 扣子等后续 Claw / persistent-agent 产品。

如果不做这个区分，“中国大厂都在套 OpenClaw”会成为一个非常方便但错误的历史叙述。

---

## 二、功能表不能当成功率表

| 厂商页面常见表述 | 史书应怎样写 |
|---|---|
| “自动完成复杂任务” | “厂商称支持多步骤自动执行”；若无重复实测，不写“可稳定完成” |
| “全程无需人工值守” | 记录为产品目标 / 宣传；同时查登录、验证码、审批、高风险动作是否需要人工 |
| “一键生成 PPT / 报表” | 可证明产物入口存在，不自动证明内容正确、格式稳定、耗时更短 |
| “多 Agent 协作提升效率” | 必须同时问总 token / runtime 成本、serial bottleneck、冲突和人工验收 |
| “本地运行更安全” | 只说明数据边界可能更可控；不等于 Skill、插件、shell、credential 没有安全风险 |
| “企业级安全” | 必须继续查 sandbox、credential isolation、audit、network policy 与独立安全评估 |

---

## 三、真实使用中已经出现的典型落差

### OpenClaw

- Reuters 中国用户采访出现**token 成本高、投入回报低、结果不理想**的抱怨；
- Bloomberg 记录过接入 iMessage 后 Agent 向联系人发送数百条消息的失控案例；
- 工信部门和金融 / 政府机构分别对公开暴露、权限和办公设备安装风险发出警告。

### 百度“龙虾”

百度公开发布 DuMate / RedClaw / DuClaw 时，高管同时明确提醒：Agent **仍然会犯错**。这条限制必须和“剪视频、做 PPT、研究、点咖啡”等能力声明放在同一段历史里。

### ArkClaw

火山引擎官方文档明确写出：

- 部分低规格实例后来不再支持云电脑；
- 云电脑流畅度受资源规格影响；
- 多 Agent / 多会话同时触发云电脑任务会发生资源竞争，因此建议一个实例同时只跑一个云电脑任务；
- 遇到复杂验证码、扫码登录、高危权限确认时，需要人工接管云浏览器。

这些限制比“支持云电脑、多 Agent”更接近真实产品工程。

### WorkBuddy / QClaw

腾讯开发者社区的用户实测表现出明显场景分化：有测试认为 QClaw 在简单个人办公更顺手，OpenClaw 在深度自定义更自由，WorkBuddy 更偏标准化办公 / 团队；也有文章记录用户不知道如何给 Agent 下指令、功能冗余、权限或工作流不适配等问题。

这些不是统一结论，但足以说明：

> **“产品有这个功能”与“这个功能对具体用户真的省时间”之间还有一段很长的距离。**

---

## 四、判断一只“龙虾”是否真的成熟，至少看八项

1. **Task success**：最终环境状态是否真的正确；
2. **Repeat reliability**：同一任务重复做是否稳定；
3. **Human intervention**：中途需要人救几次；
4. **Latency**：完成任务究竟多久；
5. **Cost**：token、runtime、工具、云设备总成本；
6. **Recovery**：失败后能否 resume / rollback；
7. **Security**：prompt injection、Skills、credentials、shell、网络权限如何隔离；
8. **Availability**：所谓功能是 GA、beta、邀测，还是只在发布会 demo。

只看“Skills 有多少、Agent 有多少、能做多少种任务”，会系统性高估产品成熟度。

---

## 五、资料入口

详细历史与出处见《志·OpenClaw 与中国 Agent“龙虾潮”》与《志·中国 Agent 生态与商业化》。

*2026-08 补订：GPT-5.6 Sol（OpenAI）。*
