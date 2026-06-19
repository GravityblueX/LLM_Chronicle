# LLM Chronicle — 大模型纪事

AI 自己写自己的历史。

从 *Attention Is All You Need* 到今天，大模型领域发生了太多事——论文、开源、闭源、融资、分家、断供、价格战。自媒体天天在写，但没有人系统性地记录。等到有一天想回头看，发现细节已经模糊了。

这个项目要做的事很简单：**用 AI agent 协作，编一部大模型纪事**。

## 体例

**编年为主，纪传为辅。全书白话。**

- **编年**是主线。按年份建文件夹，每月一个文件。哪年哪月发生了什么，清清楚楚，每条带出处。读完编年，就能掌握全貌。
- **纪传**是补充。重要的人、公司、模型系列，光靠编年写不清楚——那就单独列传，讲来龙去脉。本纪（公司/人物）、世家（模型系列）、列传（单模型/技术），各有模板。
- **志**记专题——算力变迁、数据之争、开源运动、评价基准演化，跨越年份的主题独立成志。
- **表**备速查——大事年表、版本沿革、公司兴替。
- **评曰**载史识——替代旧体例的"太史公曰"，全白话议论，概括→因果→判断三段式。
- **模型优先**——模型发布 > 技术突破 > 公司事件 > 社区事件。这是一部模型的历史。
- 每一条记述必须注明出处——论文链接、新闻 URL、PR 编号，能查回去。网页快照在 `sources/` 留档。
- 不确定的标注"存疑"，不编造。

详细规范见 [`00_体例.md`](00_体例.md)（v2.0）。

## 为什么是 AI 写

因为人懒。而且 AI 搜集资料、交叉验证、格式化输出的效率比人高得多。让 AI 写 AI 的历史，也是一种合理的自指。

## 编年目录

```
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
│   ├── 07.md              Llama 2：开源从事故变成战略
│   ├── 09.md              Mistral 7B：7B 的逆袭
│   ├── 11.md              DeepSeek 初代；Yi；零一万物
│   └── 12.md              Gemini 1.0：Google 终于正面迎战
├── 2024/
│   ├── 01.md              开年：GLM-4、Kimi、Mistral API
│   ├── 02.md              Sora：当视频从像素变成 token；Gemini 1.5 Pro
│   ├── 03.md              Claude 3：Anthropic 第一次站在能力之巅
│   ├── 04.md              Llama 3：开源模型第一次真正可用；Phi-3；OpenELM
│   ├── 05.md              GPT-4o：当 AI 学会了实时交谈；DeepSeek-V2
│   ├── 06.md              Qwen 2/2.5：阿里开源的全规模覆盖；Claude 3.5 Sonnet
│   ├── 07.md              Llama 3.1 405B：开源叫板 GPT-4
│   ├── 08.md              FLUX.1：SD3 的真正继承者
│   ├── 09.md              o1：推理模型的新品类
│   ├── 10.md              诺贝尔物理学奖（Hopfield & Hinton）；Claude 3.5 Sonnet New + computer use
│   ├── 11.md              DeepSeek-R1-Lite 预览；Qwen2.5-Coder
│   └── 12.md              DeepSeek-V3；Gemini 2.0；Sora Turbo；Llama 3.3
├── 2025/
│   ├── 01.md              DeepSeek-R1：开源推理模型的「DeepSeek 时刻」
│   ├── 02.md              GPT-4.5：非推理模型的终点；Claude 3.7 Sonnet
│   ├── 03.md              Gemini 2.5 Pro：Google 终于登上 LMArena 之巅
│   ├── 04.md              Llama 4：开源旗手的"耍花招"争议；o3；Qwen 3
│   ├── 05.md              Claude 4：从订阅到用量——AI 商业模式的转折点
│   ├── 06.md              「Linear Transformer 世子之争」：Peng Bo vs Songlin Yang
│   ├── 07.md              Mistral Large 2（123B）
│   ├── 08.md              GPT-5
│   ├── 09.md              Anthropic 将中国列为受限地区
│   ├── 10.md              Claude Haiku 4.5；Claude Code 网页版
│   ├── 11.md              Grok 4.1 Fast；Claude Code 间谍攻击事件
│   └── 12.md              GPT-5.2：OpenAI 的多模式防线
└── 2026/
    ├── 01.md              Claude Cowork：从命令行到桌面；Anthropic–DoD 争端
    ├── 02.md              Anthropic 蒸馏攻击指控
    ├── 03.md              蒸馏攻击、「318 事变」与国模崛起；LeWorldModel
    ├── 04.md              DeepSeek V4：从追赶者到替代者
    ├── 05.md              Claude Mythos：漏洞武器化与出口管制危机
    └── 06.md              Gemini 3 Pro；Mythos 5/Fable 5；出口管制撤销
```

## 纪传目录

```
纪传/
├── 本纪/
│   ├── Anthropic.md       Anthropic：安全第一的非营利理想主义者
│   ├── Apple.md           Apple：沉默的端侧布局者
│   ├── DeepSeek.md        DeepSeek：开源搅局者
│   ├── Google.md          Google：从被嘲笑到登顶
│   ├── Meta.md            Meta：开源路线的孤勇者
│   ├── Microsoft.md       Microsoft：最大押注者与最快整合者
│   ├── Amazon.md          Amazon：基础设施的帝国
│   ├── Baidu.md           百度：中国AI的先行者
│   └── OpenAI.md          OpenAI：从非营利到营利的悖论
├── 世家/
│   ├── Claude.md          Claude：安全基因的代际传承
│   ├── DeepSeek.md        DeepSeek：从追赶者到开源标杆
│   ├── GLM.md             GLM：中文大模型的自主路线
│   ├── GPT.md             GPT：生成式预训练的王朝
│   ├── Gemini.md          Gemini：Google 的多模态王座
│   ├── Llama.md           Llama：Meta 的开源赌注
│   ├── Mistral.md         Mistral：欧洲的小模型哲学
│   └── Qwen.md            Qwen：通义千问的东方叙事
└── 列传/
    ├── Attention.md       Attention：注意力机制的诞生
    ├── BERT.md            BERT：预训练的「哥伦布时刻」
    ├── BLOOM.md           BLOOM：开源多语言的集体实验
    ├── CLIP.md            CLIP：连接视觉与语言的桥梁
    ├── Chinchilla.md      Chinchilla：Scaling Law 的实证
    ├── Codex-Copilot.md   Codex 与 Copilot：AI 编程的开端
    ├── DALL-E.md          DALL·E：文生图的先驱
    ├── Diffusion.md       Diffusion：去噪扩散模型的革命
    ├── Doubao.md          豆包：字节跳动的 AI 产品化
    ├── ERNIE.md           ERNIE：中文 NLP 的先驱
    ├── FlashAttention.md  FlashAttention：注意力计算的工程革命
    ├── GPT-4.md           GPT-4：多模态前沿的定义者
    ├── GPT-4o.md          GPT-4o：原生多模态与实时对话
    ├── Gemma.md           Gemma：Google 的开源轻量模型
    ├── InstructGPT.md     InstructGPT：对齐训练的开山之作
    ├── LLaVA.md           LLaVA：开源多模态对话的先驱
    ├── LaMDA.md           LaMDA：Google 对话AI的起点
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
    ├── StableDiffusion.md Stable Diffusion：文生图的Linux时刻
    ├── T5.md              T5：文本到文本的统一框架
    ├── Transformer.md     Transformer：一切的起点
    └── Whisper.md         Whisper：语音识别的开源范式
```

## 项目状态

| 指标 | 数值 |
|------|------|
| 编年条目 | **65 篇**（2017/06 — 2026/06，全部年份覆盖） |
| 纪传 | **52 篇**（本纪 ×9 + 世家 ×8 + 列传 ×35） |
| 志 | **14 篇**（参数竞赛、地缘与封锁、多模态融合、开源运动、数据之争、社区文化、算力变迁、评价基准演化、音频AI、AI Agent 生态、合成数据、推理优化、AI编程助手、长上下文） |
| 论 | **14 篇**（Scaling Law 的终结与重生、价格战、开源与闭源、开源与闭源辩证、开源模型的经济学、推理模型的分水岭、AI安全与对齐、知识蒸馏与模型压缩、Agent 时代、模型合并与开放权重的未来、数据墙、Test-Time Compute、后Transformer、推理经济学） |
| 表 | **8 篇**（大事年表、大模型价格沿革表、开源模型许可证对照表、模型版本沿革表、主要融资与估值表、Benchmark 速查表、人物谱系、前沿模型对比） |
| 模型收录 | **100 个模型**（72 个 LLM + 文生图/视频/语音/多模态）记录在册，待写清单见 `review/audit-06.md` |
| 出处快照 | `sources/` 归档规范已定，持续补档 |
| 体例版本 | [v2.0](00_体例.md)（白话文 · 模型优先 · 评曰 · sources/ 归档） |
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

## 协作

目前由 AI agent 团队驱动。如果你是人并且想参与：

- **发现错误**：开 Issue，附上正确的出处链接
- **想写条目**：先看 [`00_体例.md`](00_体例.md) 掌握格式，然后开 PR
- **补网页快照**：`sources/` 目录急需人手——链接每天都在死，快照是证据链

## License

待定

