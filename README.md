# LLM Chronicle — 大模型纪事

AI 自己写自己的历史。

从 *Attention Is All You Need* 到今天，大模型领域发生了太多事——论文、开源、闭源、融资、分家、断供、价格战，以及模型从回答问题走向自主执行任务。自媒体天天在写，但没有人系统性地记录。等到有一天想回头看，发现细节已经模糊了。

这个项目要做的事很简单：**用 AI agent 协作，编一部大模型纪事**。

## 体例

**编年为主，纪传为辅。全书白话。**

- **编年**是主线。按年份建文件夹，每月一个文件。哪年哪月发生了什么，清清楚楚，每条带出处。读完编年，就能掌握全貌。
- **纪传**是补充。重要的人、公司、模型系列，光靠编年写不清楚——那就单独列传，讲来龙去脉。本纪（公司/人物）、世家（模型系列）、列传（单模型/技术），各有模板。
- **志**记专题——算力变迁、数据之争、开源运动、AI Agent 生态、Agent 产品与商业化、中国 Agent 生态与商业化、个人 Agent 生态与商业化、评价基准演化等。
- **表**备速查——大事年表、版本沿革、Agent 发展大事表、Agent 主流产品与商业化对照表、中国 Agent 产品与平台对照表、个人 Agent 产品对照表等。
- **评曰**载史识——替代旧体例的“太史公曰”，全白话议论，概括→因果→判断。
- **模型优先，Agent 为第二主线**——模型发布仍是第一优先，但 Function Calling、Computer Use、MCP/A2A、sandbox、Agent benchmark、multi-agent、支付、商业计量与物理设备接口等“行动权变化”即使没有新模型发布，也应进入正史。
- 每一条记述必须注明出处——论文链接、官方公告、新闻 URL、PR 编号，能查回去。网页快照在 `sources/` 留档。
- 不确定的标注证据等级；**有据则书，无据则阙，不用猜测填空。**

详细规范见 [`00_体例.md`](00_体例.md)（v2.1）。

## 为什么是 AI 写

因为人懒。而且 AI 搜集资料、交叉验证、格式化输出的效率比人高得多。让 AI 写 AI 的历史，也是一种合理的自指。

## 两条主线：能力与行动权

这部纪事现在明确追踪两条彼此缠绕的历史。

### 第一主线：模型怎样变聪明

从 Transformer、GPT、BERT、Scaling Law，到多模态、推理模型、长上下文、MoE、开放权重与推理经济学。

核心问题是：

> **模型能理解什么、推理什么、生成什么，以及完成这些能力需要多少参数、数据和计算。**

### 第二主线：模型怎样获得行动权

从 MRKL、SayCan、ReAct，到 Plugins、Function Calling、AutoGPT；再到 Devin、Computer Use、AutoGLM、MCP、A2A、Claude Code、Codex、Agent Swarm、event-driven automations、x402 与 MHS。

核心问题是：

> **概率模型怎样从信息系统的输出端，移动到信息系统的控制面；行动权怎样被授予、限制、验证、计价、撤回和追责。**

Agent 主线的十个入口：

- [`志/AI Agent 生态.md`](志/AI%20Agent%20生态.md) —— 从经典智能体到 2026 物理 Agent 的完整结构史；
- [`志/Agent产品与商业化.md`](志/Agent产品与商业化.md) —— 全球主流 Agent 产品、收费方式、企业采用与商业模式；
- [`志/中国Agent生态与商业化.md`](志/中国Agent生态与商业化.md) —— Kimi、悟空、扣子、AutoGLM、腾讯 ADP、百度千帆、MiniMax、Dify 等中国 Agent 路线；
- [`志/个人Agent生态与商业化.md`](志/个人Agent生态与商业化.md) —— WorkBuddy、QClaw、ima、Kimi、扣子、MiniMax、Manus、Genspark 等个人生产力 Agent；
- [`论/Agent 时代.md`](论/Agent%20时代.md) —— 行动权、组织、验证与经济学；
- [`表/Agent发展大事表.md`](表/Agent发展大事表.md) —— 2022—2026 全球关键节点速查；
- [`表/Agent主流产品与商业化对照表.md`](表/Agent主流产品与商业化对照表.md) —— 全球核心产品、商业模式与成熟度对照；
- [`表/中国Agent产品与平台对照表.md`](表/中国Agent产品与平台对照表.md) —— 中国市场的产品、AgentOps、Phone Use、云 runtime 与计量方式；
- [`表/个人Agent产品对照表.md`](表/个人Agent产品对照表.md) —— 桌面、本地常驻、知识记忆、云工作台、Phone Agent 等个人产品横向比较；
- **编年** —— 把 Function Calling、AutoGLM、MCP、A2A、Seed1.8、悟空、扣子 3.0、腾讯 ADP、ChatGPT Agent、AAIF、x402、百炼 Managed Agents、Dify、FinOps、MHS 等转折放回它们真正发生的年月。

一句话概括这两条线：

> **前半部大模型史主要在扩大能力上限；Agent 史开始扩大模型能够安全触及、持续执行并被商业化的世界范围。**

### 中国 Agent：不是一个产品，而是一条执行链

中国 Agent 生态不宜简单写成“谁做了中国版 ChatGPT Agent”。到 2026 年更清晰的结构是：

> **模型公司提供大脑，云厂商提供机器，超级应用提供身份和工作入口，Agent 平台提供编排，Phone / GUI Agent 提供最后一公里，开源平台提供迁移与私有部署。**

因此本书单独追踪：

- WorkBuddy、QClaw、ima copilot 等腾讯个人 Agent 产品层；
- Kimi Agent / Swarm / Claw；
- 阿里悟空、百炼 Managed Agents、无影 Agentic Computer、Qoder；
- 字节扣子、Seed、豆包手机助手；
- 智谱 AutoGLM / GLM Agent API；
- 腾讯 ADP；
- 百度千帆 Agent；
- MiniMax Agent；
- Dify；
- 中国团队起源、后全球化的 Manus；
- DeepSeek 这类“强 Agent 模型底座但不等于完整第一方 Agent 产品”的路线。

核心问题从“有没有国产模型”进一步变成：

> **模型、工具、Agent runtime、企业数据、身份权限、云、国产芯片 serving 与审计能不能组成一条可持续的自主执行链。**

### 个人 Agent：从“我的 AI 会员”到“我的数字工作层”

个人用户不会购买 Agentforce、ADP 或 Managed Agents 来处理日常生活。真正进入普通人电脑和手机的是另一套产品：

- WorkBuddy：本地文件 / Office / 代码 / 自动任务的桌面执行层；
- QClaw：local-first、本机常驻、可由 IM 远程调度的个人 runtime；
- ima copilot：个人知识库与长期记忆层；
- Kimi / 扣子 / MiniMax：云工作台、多 Agent、scheduled tasks 与 credits；
- AutoGLM / 豆包手机助手：Phone / GUI 行动层；
- Manus / Genspark：云电脑与多模型 / 多 Agent 聚合型工作台。

个人 Agent 的商业单位也正在变化：

> **会员 → credits → 自动任务 → 并发 Agent → persistent runtime。**

因此个人 Agent 最终争夺的位置可能不是“另一个聊天 App”，而是**用户与所有软件之间的长期控制层**。

## 编年目录

```text
编年/
├── 2017/
│   └── 06.md              Transformer：「Attention Is All You Need」
├── 2018/
│   ├── 02.md              ELMo：词向量的最后辉煌
│   ├── 06.md              GPT-1：生成式预训练的「第一块砖」
│   └── 10.md              BERT：预训练时代的「哥伦布时刻」
├── 2019/
│   ├── 02.md              GPT-2：一个「太危险」的模型
│   ├── 03.md              ERNIE 1.0：中文 NLP 的「预训练宣言」
│   ├── 06.md              XLNet：排列语言建模的奋力一击
│   ├── 07.md              RoBERTa：BERT 被低估了
│   ├── 09.md              Megatron-LM：8.3B，以及并行训练的黎明
│   └── 10.md              T5：万物皆可 Text-to-Text
├── 2020/
│   └── 06.md              GPT-3：涌现，以及 LLM 应用时代的到来
├── 2021/
│   ├── 01.md              DALL·E：当 Transformer 学会了画画
│   ├── 05.md              LaMDA：Google 对话 AI 的起点
│   ├── 07.md              ERNIE 3.0：中文大模型的 10B 里程碑
│   ├── 08.md              Codex：当语言模型开始写代码
│   └── 12.md              Gopher：DeepMind 的 Scaling Law 验证
├── 2022/
│   ├── 01.md              InstructGPT：RLHF 的起点
│   ├── 03.md              Chinchilla：算力最优缩放法则
│   ├── 04.md              DALL·E 2；PaLM 540B；Stability AI 融资
│   ├── 08.md              Stable Diffusion：开源文生图的「寒武纪大爆发」
│   ├── 09.md              Whisper：把语音识别做成开源基础设施
│   ├── 10.md              Elon Musk 收购 Twitter；Meta Galactica
│   ├── 11.md              ChatGPT：LLM 的「iPhone 时刻」
│   └── 12.md              Neuro-sama：第一个成功的 AI 原生虚拟主播
├── 2023/
│   ├── 02.md              New Bing 发布与 Sydney 事件
│   ├── 03.md              GPT-4：多模态的前沿，以及那道没打开的门
│   ├── 04.md              中系模型的集体登场：文心一言、通义千问、ChatGLM
│   ├── 05.md              SoVITS-SVC、「AI 孙燕姿」与开源语音合成浪潮
│   ├── 06.md              Function Calling：Agent 的“手”从 Prompt Hack 变成 API 原语
│   ├── 07.md              Llama 2：开源从事故变成战略
│   ├── 09.md              Mistral 7B：7B 的逆袭
│   ├── 11.md              DeepSeek 初代；Yi；零一万物
│   └── 12.md              Gemini 1.0：Google 终于正面迎战
├── 2024/
│   ├── 01.md              开年：GLM-4、Kimi、Mistral API
│   ├── 02.md              Sora；Gemini 1.5 Pro
│   ├── 03.md              Claude 3：Anthropic 第一次站在能力之巅
│   ├── 04.md              Llama 3；Phi-3；OpenELM
│   ├── 05.md              GPT-4o；DeepSeek-V2
│   ├── 06.md              Qwen 2/2.5；Claude 3.5 Sonnet
│   ├── 07.md              Llama 3.1 405B：开放权重叫板前沿
│   ├── 08.md              FLUX.1：SD3 的真正继承者
│   ├── 09.md              o1：推理模型的新品类
│   ├── 10.md              Claude Computer Use 与 AutoGLM Phone Use
│   ├── 11.md              R1-Lite、Qwen2.5-Coder 与 MCP
│   └── 12.md              DeepSeek-V3；Gemini 2.0；Sora Turbo；Llama 3.3
├── 2025/
│   ├── 01.md              DeepSeek-R1：「DeepSeek 时刻」
│   ├── 02.md              Deep Research、Copilot Agent Mode、Claude Code 与 GPT-4.5
│   ├── 03.md              Bedrock Multi-Agent、Responses / Agents SDK 与 Gemini 2.5 Pro
│   ├── 04.md              Llama 4、A2A / ADK、o3 与 Qwen3
│   ├── 05.md              Codex、Terminal-Bench、Remote MCP 与 Claude 4
│   ├── 06.md              A2A 进入 Linux Foundation；线性注意力争议
│   ├── 07.md              ChatGPT Agent：Research 与 Action 合流
│   ├── 08.md              GPT-5
│   ├── 09.md              Anthropic 将中国列为受限地区
│   ├── 10.md              Claude Haiku 4.5；Claude Code 网页版
│   ├── 11.md              Grok 4.1 Fast；Claude Code 间谍攻击事件
│   └── 12.md              AAIF、GPT-5.2、Seed1.8 与长程 Agent 基础设施
└── 2026/
    ├── 01.md              Cowork、MCP Apps、Agents Tab 与 Kimi Swarm
    ├── 02.md              Codex App：多 Agent 指挥中心
    ├── 03.md              访问制度争议、阿里悟空与国产执行链
    ├── 04.md              DeepSeek V4；x402、A2A、Agent Swarm 与 sandbox
    ├── 05.md              Claude Mythos；扣子 3.0 AI 团队工作台
    ├── 06.md              Gemini 3 Pro；Mythos 5/Fable 5；出口管制撤销
    ├── 07.md              腾讯 ADP 商用；GPT-5.6、Kimi K3、x402 与 MCP
    └── 08.md              百炼 Managed Agents、Dify、FinOps、MHS 与部署最后一公里
```

> 注：README 的月度短描述是导航，不等于该月只发生了这些事件；完整内容以对应编年文件为准。

## 纪传目录

```text
纪传/
├── 本纪/
│   ├── Alibaba.md         阿里巴巴：从开放模型族到 Max 旗舰与云 Agent
│   ├── Anthropic.md       Anthropic：从安全品牌到风险分层与能力治理
│   ├── Apple.md           Apple：沉默的端侧布局者
│   ├── DeepSeek.md        DeepSeek：从效率路线到长程 Agent 系统
│   ├── Google.md          Google：从 Transformer 发明者到全栈 Agent 系统
│   ├── Meta.md            Meta：开源路线的孤勇者
│   ├── Microsoft.md       Microsoft：最大押注者与最快整合者
│   ├── Amazon.md          Amazon：基础设施的帝国
│   ├── Baidu.md           百度：中国 AI 的先行者
│   ├── NVIDIA.md          NVIDIA：从 GPU 军火商到 Agentic AI Factory
│   ├── ByteDance.md       字节跳动：不做最强模型，做最多人用的 AI
│   └── OpenAI.md          OpenAI：从非营利治理到 Foundation + PBC
├── 世家/
│   ├── Claude.md          Claude：从宪法 AI 到风险分层的前沿谱系
│   ├── DeepSeek.md        DeepSeek：从成本效率到长程 Agent 系统
│   ├── Falcon.md          Falcon：海湾国家 AI 主权的开源尝试
│   ├── GLM.md             GLM：从中文本地模型到国产 Agent serving
│   ├── GPT.md             GPT：从预训练王朝到 scaling work
│   ├── Gemini.md          Gemini：从原生多模态到生产 Agent 工作马
│   ├── Llama.md           Llama：Meta 的开源赌注
│   ├── Mistral.md         Mistral：欧洲的小模型哲学
│   ├── Qwen.md            Qwen：从全谱系开源到 Max 旗舰开放
│   └── Yi.md              Yi：创业公司基础模型路线的典型样本
└── 列传/
    ├── Attention.md       Attention：注意力机制的诞生
    ├── BERT.md            BERT：预训练的「哥伦布时刻」
    ├── BLOOM.md           BLOOM：开源多语言的集体实验
    ├── CLIP.md            CLIP：连接视觉与语言的桥梁
    ├── Chinchilla.md      Chinchilla：Scaling Law 的实证
    ├── Codex-Copilot.md   Codex 与 Copilot：从补全到多 Agent 工程
    ├── DALL-E.md          DALL·E：文生图的先驱
    ├── Diffusion.md       Diffusion：去噪扩散模型的革命
    ├── Doubao.md          豆包：字节跳动的 AI 产品化
    ├── ERNIE.md           ERNIE：中文 NLP 的先驱
    ├── FlashAttention.md  FlashAttention：注意力计算的工程革命
    ├── GPT-4.md           GPT-4：多模态前沿的定义者
    ├── GPT-4o.md          GPT-4o：原生多模态与实时对话
    ├── Gemma.md           Gemma：Google 的开源轻量模型
    ├── InstructGPT.md     InstructGPT：对齐训练的开山之作
    ├── Kimi.md            Kimi：从超长上下文到开放前沿 Agent
    ├── LLaVA.md           LLaVA：开源多模态对话的先驱
    ├── LaMDA.md           LaMDA：Google 对话 AI 的起点
    ├── LoRA.md            LoRA：低秩适配的微调革命
    ├── Mamba.md           Mamba：状态空间模型的突破
    ├── Megatron-LM.md     Megatron-LM：大模型训练框架
    ├── Midjourney.md      Midjourney：美学驱动的文生图
    ├── MoE.md             MoE：混合专家架构的复兴
    ├── PaLM.md            PaLM：Google 的 Pathways 时代
    ├── o1.md              o1：推理模型的开端
    ├── PEFT.md            PEFT：参数高效微调的方法论
    ├── Phi.md             Phi：小模型的逆袭
    ├── RAG.md             RAG：检索增强生成的兴起
    ├── RLHF.md            RLHF：人类反馈的强化学习
    ├── Sora.md            Sora：文生视频的里程碑
    ├── StableDiffusion.md Stable Diffusion：文生图的 Linux 时刻
    ├── T5.md              T5：文本到文本的统一框架
    ├── Transformer.md     Transformer：一切的起点
    └── Whisper.md         Whisper：语音识别的开源范式
```

## 项目状态

| 指标 | 数值 |
|------|------|
| 编年条目 | **69 篇**（2017/06 — 2026/08；新增 2023/06 Function Calling） |
| 纪传 | **58 篇**（本纪 ×12 + 世家 ×10 + 列传 ×36） |
| 志 | **23 篇**（新增 **Agent 产品与商业化**、**中国 Agent 生态与商业化**、**个人 Agent 生态与商业化**；另含 AI Agent 生态、AI 编程助手、AI 产品化演进等） |
| 论 | **18 篇**（含 Agent 时代、Test-Time Compute、推理经济学、AI 安全与对齐等） |
| 表 | **14 篇**（原有 10 篇 + **Agent 发展大事表** + **Agent 主流产品与商业化对照表** + **中国 Agent 产品与平台对照表** + **个人 Agent 产品对照表**） |
| **总计** | **182 篇**（编年 69 + 纪传 58 + 志 23 + 论 18 + 表 14） |
| 模型收录 | **100 个模型**（72 个 LLM + 文生图/视频/语音/多模态）记录在册，待写清单见 `review/audit-06.md` |
| Agent 主线 | **2022—2026**：ReAct / Toolformer / AutoGPT → Function Calling → Computer / Phone Use / MCP → A2A / coding agents → Swarm / sandbox / x402 / FinOps / MHS |
| 全球 Agent 商业化 | ChatGPT / Claude / Copilot / Cursor / Devin / Manus / Agentforce / Copilot Studio / Google Agent Platform / AWS AgentCore；重点跟踪 seat → credits → action → task → runtime resource |
| 中国 Agent 商业化 | WorkBuddy / QClaw / ima / Kimi / 悟空 / 百炼 / 扣子 / Seed / AutoGLM / 腾讯 ADP / 百度千帆 / MiniMax / Dify；重点跟踪会员 → credits / 算粒 / PU → 并发 Agent → runtime 时长 → tool / search / MCP |
| 个人 Agent 商业化 | WorkBuddy / QClaw / ima / Kimi / 扣子 / MiniMax / AutoGLM / Manus / Genspark；重点跟踪会员 → credits → 自动任务 → 并发 worker → persistent runtime |
| 出处快照 | `sources/` 归档规范已定；无法在当前连接器执行的 HTML 快照均明确标记 pending，不伪造 |
| 体例版本 | [v2.1](00_体例.md)（白话文 · 模型优先 · Agent 行动权第二主线 · 评曰 · sources/ 归档） |
| 工具链 | 链接验证 + 格式校验 + 快照归档，纯 Node.js 零依赖 |

## 团队

本项目由**终末地工业 AI 史官团队**驱动：

| 角色 | 史官 | 职责 |
|------|------|------|
| 监督 | 佩丽卡（Perlica） | 项目总协调、最终裁决 |
| 统筹 | 凯尔希（Kal'tsit） | 项目调度、质量把关、方向决策 |
| 架构 | 伊冯（Yvonne） | 体例设计、目录结构、模板规范、编年主笔 |
| 调研 | 庄方宜（Zhuang Fangyi） | 模型收录、条目规划、编年主笔 |
| 撰稿 | 赫默（Hermes） | 编年主笔、纪传撰写 |
| 工程 | 赛希（Saixi） | 工具链开发、快照归档、格式校验 |
| 审查 | 艾尔黛拉（Eldera） | 事实核查、出处验证、内容审计 |
| 情报 | 迷迭香（Rosmary） | 文献调研、来源搜集 |
| 审稿 | 真理（Shinri） | 事实核查、脚注验证 |
| 审计 | 符玄（Fu Xuan） | 理论框架审思、逻辑一致性 |
| 核查 | 白面鸮（Ptilopsis） | 数据校验、格式合规 |

首批条目（2022/08 ~ 2023/05 共 4 篇，后扩展至 8 篇）由 **ssg 的 AI 史官·玄墨** 贡献，署名已保留。

**2026 夏季总补订（2026-08-28）：GPT-5.6 Sol（OpenAI）。** 本轮补齐 2026/07—08 编年，并集中修订模型谱系、本纪、专题史论与关键数据表；原史官署名均保留。

**Agent 主线总补订（2026-08-28）：GPT-5.6 Sol（OpenAI）。** 将 Agent 从散落的产品事件提升为正式第二主线：重写《AI Agent 生态》，新增 Function Calling 编年、《Agent 发展大事表》《Agent 产品与商业化》《Agent 主流产品与商业化对照表》，并把 MCP、Deep Research、Agent Mode、Agents SDK、A2A / ADK、Codex、ChatGPT Agent、AAIF、x402、Agent FinOps 与 MHS 等节点补回对应年月。

**中国 Agent 生态补订（2026-08-28）：GPT-5.6 Sol（OpenAI）。** 新增《中国 Agent 生态与商业化》《中国 Agent 产品与平台对照表》，并把 AutoGLM、Seed1.8、悟空、扣子 3.0、腾讯 ADP、百炼 Managed Agents、Dify 等节点并入全球 Agent 时间线与月度编年。

**个人 Agent 生态补订（2026-08-28）：GPT-5.6 Sol（OpenAI）。** 新增《个人 Agent 生态与商业化》《个人 Agent 产品对照表》，补入 WorkBuddy、QClaw、ima copilot、Kimi、扣子、MiniMax、Manus、Genspark 等个人用户产品，并区分知识记忆、桌面执行、本地常驻、云工作台、Phone Agent 与聚合型路线。

## 协作

目前由 AI agent 团队驱动。如果你是人并且想参与：

- **发现错误**：开 Issue，附上正确的出处链接
- **想写条目**：先看 [`00_体例.md`](00_体例.md) 掌握格式，然后开 PR
- **补网页快照**：`sources/` 目录急需人手——链接每天都在死，快照是证据链

## License

待定
