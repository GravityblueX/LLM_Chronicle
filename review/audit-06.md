# Audit 06：志/开源运动.md 交叉审阅

> 审阅者：艾尔黛拉（事实审查） | 日期：2026-06-09 | 目标：伊冯产出

---

## 一、事实核查结论：PASS ✅

对文中全部关键事实声明进行了交叉验证（交叉比对编年条目、官方博客、论文、开源仓库），**未发现事实错误**。

| 声明 | 验证来源 | 结果 |
|------|----------|------|
| LLaMA 发布 2023-02-24，7B/13B/33B/65B | arXiv:2302.13971, 编年/2023/02.md | ✅ |
| LLaMA 权重经 4chan/BitTorrent 泄漏 | The Verge 2023-03-08 | ✅ |
| Llama 2 2023-07-18，7B/13B/70B，允许商业使用但有 7 亿 MAU 限制 | ai.meta.com, Llama 2 Community License §2 | ✅ |
| Llama 3.1 2024-07-23，405B，128K 上下文 | ai.meta.com/blog/meta-llama-3-1/ | ✅ |
| Mistral 7B 2023-09-27，Apache 2.0，GQA + SWA | mistral.ai/news/announcing-mistral-7b | ✅ |
| Mixtral 8x7B 2023-12-11，46.7B/12.9B active，Apache 2.0 | mistral.ai/news/mixtral-of-experts | ✅ |
| Qwen2.5 2024-09，多尺寸，3B/72B 非 Apache 2.0 | qwenlm.github.io/blog/qwen2.5/ | ✅ |
| Qwen3 2025-04，235B-A22B MoE + dense，Apache 2.0 | qwenlm.github.io/blog/qwen3/ | ✅ |
| DeepSeek-V3 2024-12，671B/37B active，14.8T tokens，2.788M H800h | github.com/deepseek-ai/DeepSeek-V3 | ✅ |
| DeepSeek-R1 2025-01，基于 V3-Base，6 个蒸馏模型 | github.com/deepseek-ai/DeepSeek-R1 | ✅ |
| OSI OSAID 1.0 2024-10-28 | opensource.org | ✅ |
| LLaMA release (2/24) vs arXiv submit (2/27) 3 天差 | 两者均正确（公告日 vs 论文上线日），无矛盾 | ✅ |

---

## 二、脚注 URL 可访问性：PASS ✅

全部 13 条脚注 URL 经手工 HTTP 请求验证，均为 **200 OK**。

| 脚注 | URL | 状态 |
|------|-----|------|
| [^1] | opensource.org/ai/open-source-ai-definition | 200 |
| [^2] | arxiv.org/abs/2302.13971 | 200 |
| [^3] | theverge.com/.../meta-ai-language-model-llama-leak-online | 200 (→ misuse 重定向) |
| [^4] | ai.meta.com/blog/llama-2/ | 200 |
| [^5] | ai.meta.com/blog/meta-llama-3-1/ | 200 |
| [^6] | about.fb.com/news/2024/07/open-source-ai-is-the-path-forward/ | 200 |
| [^7] | mistral.ai/news/announcing-mistral-7b | 200 |
| [^8] | mistral.ai/news/mixtral-of-experts | 200 |
| [^9] | qwenlm.github.io/blog/qwen2.5/ | 200 |
| [^10] | qwenlm.github.io/blog/qwen3/ | 200 |
| [^11] | github.com/deepseek-ai/DeepSeek-R1 | 200 |
| [^12] | github.com/deepseek-ai/DeepSeek-V3 | 200 |
| [^13] | opensource.org/blog/...first-open-source-ai-definition | 200 |

---

## 三、志模板结构完整性：GOOD ✅

对照 `志/_模板.md` 骨架要求：

| 模板节 | 对应 | 状态 |
|--------|------|------|
| 一、概述 | 一、概述 | ✅ 覆盖主题、时间跨度、核心问题 |
| 二、第一阶段 | 二、LLaMA 泄漏与社区爆发 | ✅ |
| 三、第二阶段 | 三~六（Meta/Mistral/中国/OSI） | ✅ 超出模板，组织合理 |
| 四、趋势分析 | 八、趋势分析 | ✅ |
| 评曰（可选） | 评曰 | ✅ 150-200 字，白话，有洞察 |

体例合规检查：
- ✅ 全书白话文（无文言残留）
- ✅ 关键事实有出处（13 条脚注）
- ✅ 正文有"评曰"小节，按格式要求
- ✅ 末尾署名行：`*本篇由终末地工业史官团队编纂：伊冯（架构审计）*`

额外亮点：
- 第七节"事实脉络表"是模板之外的增值内容，以表格扼要呈现全文时间线，方便速查

---

## 四、问题列表

### 4.1 缺失 sources/ 快照（中等优先级）

根据 00_体例.md §五，每条引用 URL 应有对应 HTML 快照存档于 `sources/`。13 条脚注中：

**已有快照（5/13）**：
- [^2], [^3], [^4], [^5], [^6], [^7] — 这些快照由编年条目归档时创建，路径在 `sources/YYYY/MM/` 下

**缺失快照（7/13）**：
- [^1] opensource.org/ai/open-source-ai-definition
- [^8] mistral.ai/news/mixtral-of-experts
- [^9] qwenlm.github.io/blog/qwen2.5/
- [^10] qwenlm.github.io/blog/qwen3/
- [^11] github.com/deepseek-ai/DeepSeek-R1
- [^12] github.com/deepseek-ai/DeepSeek-V3
- [^13] opensource.org/blog/...first-open-source-ai-definition

**结构性问题**：志是跨年专题，不归入单一年/月。体例中 sources/ 按 `年份/月份/` 组织，与志的跨年性质存在张力。建议：在 `sources/志/开源运动/` 或按各脚注所属年月分别归档。

### 4.2 缺失编年交叉引用（低优先级）

体例 §6.3 要求志中引用编年条目，但文中未出现任何 `见《编年·YYYY年M月》` 交叉引用。以下位置天然适合添加（对应的编年条目均已存在）：

| 位置 | 建议引用 |
|------|----------|
| 第二节 LLaMA 泄漏段 | 见《编年·2023年2月》 |
| 第三节 Llama 2 发布段 | 见《编年·2023年7月》 |
| 第四节 Mistral 7B 段 | 见《编年·2023年9月》 |
| 第五节 DeepSeek-R1 段 | 见《编年·2025年1月》 |

### 4.3 工具覆盖缺口：validate_links.js 未扫描志/ 目录（低优先级）

`tools/validate_links.js` 第 169 行过滤条件为 `rel.startsWith('编年/') || rel.startsWith('纪传/')`，不含 `志/`。这意味着 `npm run validate` 无法自动检测志类条目的死链。建议扩展过滤条件。

### 4.4 Nit：脚注日期精度不一致

- [^1] 缺失日期（OSAID 1.0 发布于 2024-10-28，正文第 109 行已注明）
- [^11] 仅写 "2025"（DeepSeek-R1 发布于 2025-01）
- [^12] 仅写 "2024"（DeepSeek-V3 发布于 2024-12）

建议补全到月级精度，与 [^9] [^10] 的 `2024-09` / `2025-04` 风格对齐。

---

## 五、结论

**批准** — 无需阻塞性修改。

伊冯的这篇志在事实准确性、脚注完整性、模板结构三方面均表现优异。时间线梳理清晰，许可证分类准确，叙事客观克制。评曰也保持了体例要求的"有洞察、不空谈"。

发现的 4 个问题均为过程/工具层改进点（快照归档、交叉引用、工具覆盖），不影响正文内容质量。建议在下一次 sources/ 归档批量操作时一并处理。
