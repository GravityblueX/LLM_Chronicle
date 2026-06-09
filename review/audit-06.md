# 审计报告 #6 — 缺口扫描

**扫描日期**：2026-06-09  
**范围**：README 状态、目录填充、编年待写模型、audit-04/05 P0/P1 回扫。  
**原则**：只记下一批可写/可修，不展开长报告。

## 已直接处理

- `README.md` 项目状态已更新：编年 40→41；纪传 5→7；去掉“列传待填充”的过期说法。

## 当前结构缺口

- `志/` 不再是空目录：已有 `志/开源运动.md`。下一批可写：`算力变迁`、`数据之争`、`评价基准演化`。
- `纪传/列传/` 不再是空目录：已有 `Transformer.md`、`RLHF.md`。下一批可写：`Attention.md`、`MoE.md`、`Diffusion.md`、`CLIP.md`、`LoRA.md`。

## 编年待写模型（按优先级）

### P0：模型主线缺口

1. **2022/01 InstructGPT** — RLHF 对齐的直接起点；可与 `纪传/列传/RLHF.md` 互引。
2. **2022/04 DALL·E 2** — 文生图从 GPT/VQ 到 CLIP+Diffusion 的转折。
3. **2023/02 Llama 1** — Llama 世家有叙事，编年仍缺首发/泄漏节点。
4. **2023/07 Claude 2** — Claude 商用化与 100K 上下文节点。
5. **2023/11 DeepSeek-LLM 67B** — DeepSeek V2/V3/R1 前史。
6. **2024/12 DeepSeek-V3** — R1 之前的成本叙事核心，目前只在纪传/2025 条目中回述。

### P1：生态与非 LLM 缺口

7. **2022/09 Whisper** — 开源语音识别基础设施。
8. **2023/03 Bard** — Google 对 ChatGPT 的仓促回应，可并入 2023/03 或单月。
9. **2024/01 Kimi** — 中文超长上下文产品节点。
10. **2024/06 可灵 Kling** — 中国文生视频节点。
11. **2025/01 Kimi K1.5** — 中国推理模型补线。
12. **2026/04 Muse Spark** — Llama 后继/Meta 新路线。

> Phase3 清单里 2025/02–2025/05 的 GPT-4.5、Claude 3.7、Gemini 2.5、Llama 4、o3、Qwen3、Claude 4 已有编年正文；清单状态本身过期，后续应更新 `docs/模型收录清单_Phase3.md` 或新建 Phase4 清单。

## audit-04 / audit-05 P0/P1 回扫

### 已修复/基本修复

- `编年/2024/05.md` DeepSeek-V2 死链：已改为 arXiv 一级来源，并说明原博客失效。
- `纪传/世家/GPT.md` GPT-1/2/3/o1 脚注：已有 URL。
- `编年/2025/04.md` Llama 4 争议：已补 The Register 与 Digital Watch 链接；Llama 4 节已有评曰。
- `编年/2025/04.md` o3 日期矛盾：已说明 2024-12-20 为宣布/预告，2025-04 为正式可用发布。
- `纪传/本纪/DeepSeek.md` V2/V4 脚注：V2 已换 arXiv/HF；V4 已给官方 API Docs，但“1/370”仍需价格表或第三方换算锚点。
- `纪传/本纪/Anthropic.md` Constitutional AI 时间线：已修为晚于 ChatGPT 约两周。
- audit-04 指出的 2024 编年缺评曰：当前 2024/02、03、05、06、08 均已有评曰。

### 仍未修 / 需下一轮修

1. `纪传/本纪/OpenAI.md`：[^3] GPT-1、[^7] GPT-3、[^9] The Verge 仍无 URL；文件末尾还有两行残片 `ai.com/...`、`i.com/...`。
2. `纪传/本纪/OpenAI.md`：[^6] Microsoft 投资链接使用 OpenAI 旧路径；audit-04 标过 404，建议换 Microsoft News 一手稿或 sources 快照。
3. `编年/2023/04.md`：文心一言、通义千问仍是产品首页，不是发布公告。
4. `编年/2025/01.md`：多条脚注无 URL（validator 报 6 条 warning）。
5. `编年/2022/12.md`、`编年/2023/05.md`、`编年/2025/06.md`、`编年/2026/04.md`：仍有无 URL 脚注 warning。
6. `纪传/本纪/DeepSeek.md`：V4 “GPT-5.5 的 1/370”仍是待锚定换算声称。

## 工具检查

- `node tools/validate_format.js`：0 errors；既有 warnings/info 仍主要来自旧条目无 URL 脚注、单源提示与叙述性标签；新增 `2022/03`、`2022/09` 均为 0 issues。
- `npm run validate` 不存在（package.json 无 scripts）。若要方便协作，可补 `format`/`links` 脚本。
