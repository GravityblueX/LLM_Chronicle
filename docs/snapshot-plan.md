# 网页快照留档方案

## 问题

《大模型纪事》每条编年条目都引用了出处链接（论文 URL、新闻报道、博客文章等）。这些链接会随时间失效（链接腐烂 / link rot），导致史料不可追溯。需要为每条出处保存一份**可验证的留档**。

约束：
- GitHub 仓库不宜存大量二进制文件（截图 PNG/JPEG 单张数十 KB 起步，批量可达数百 MB）
- 存档需可通过 URL 原址回溯
- 操作应可自动化，融入 CI/脚本流程

---

## 候选方案

### 选项 A：HTML/Markdown 文本快照 → `sources/` + 原始 URL

**做法**：对每条出处链接，用 `fetch` 或 headless browser 抓取页面内容，保存为 `.html` 或 `.md` 纯文本（可附带元数据 JSON），存入仓库的 `sources/` 目录。文件按年/月/条目组织命名。

| 优点 | 缺点 |
|------|------|
| 纯文本，diff 友好，Git 压缩效率高 | 丢失视觉信息（截图、视频、交互元素） |
| 全文可搜索（`grep` 即可） | 动态渲染页面（SPA）需 headless browser |
| 不依赖第三方服务，完全自控 | 网页抓取行为可能触发反爬/封 IP |
| 保留原文文字，可引用、可对比 | 版权风险：转载全文可能侵犯著作权 |
| GitHub 仓库天然适配 | 每次更新条目需手动触发快照 |

**结论**：适合论文页、博客等文本为主的页面。不适合交互式页面、富媒体内容。是**最低成本自托管方案**。

---

### 选项 B：Internet Archive (Wayback Machine) Save Page Now API

**做法**：调用 `https://web.archive.org/save/{url}` API，请求 IA 立即爬取并归档目标页面。IA 返回永久快照 URL（如 `https://web.archive.org/web/20260525120000/https://example.com/article`），将该 URL 作为 `[存档]` 附在出处脚注旁。

| 优点 | 缺点 |
|------|------|
| 零仓库空间占用 | 依赖第三方（IA 可能宕机、被墙） |
| 归档质量高（HTML+CSS+JS+图片完整保留） | API 有速率限制，批量提交需间隔 |
| 已是大规模信任基础设施（27 年运营历史） | 快照不可控——IA 抓取何时完成不确定 |
| 法律合规——IA 作为图书馆有存档豁免 | 某些网站屏蔽 IA 爬虫（robots.txt） |
| 社区认可度高（维基百科大量引用） | 国内访问 IA 不稳定 |

**结论**：最"正统"的互联网存档方式，维基百科级别的可信度。但不能作为唯一方案——对国内用户不友好，且 IA 不可控。

---

### 选项 C：GitHub Releases 存截图包

**做法**：用 Puppeteer/Playwright 截取每个出处页面的全页 PNG，打包成 `screenshots-v2026-05.zip`，通过 GitHub Releases 发布（单文件最大 2GB，不占仓库 Git 历史）。

| 优点 | 缺点 |
|------|------|
| 完整视觉留档，所见即所得 | 截图包体积大（43 个页面可能 50-200MB） |
| GitHub Releases 免费，不限次数 | 截图无法 diff，不易对比变化 |
| 可版本化管理（每个 release 对应一个时间点） | 需额外 CI 流程生成发布 |
| 用户可选择性下载，不影响 `git clone` | 动态页面可能截不全（需等待加载） |

**结论**：适合作为"终极留档"补充，不适合日常使用。截图包对读者价值有限（不如文本快照可直接搜索），价值主要在于法律/争议层面的"当时长这样"的证明。

---

## 推荐方案：**A + B 组合（文本快照 + Internet Archive）**

这是成本和可靠性之间的最佳平衡点。

### 实施策略

```
每条出处链接 → 两路并行存档：
  ├── A 路：wget/curl → sources/YYYY/MM/entry-title.html  (文本快照，入 Git)
  └── B 路：POST web.archive.org/save/{url}               (IA 存档，出永久链接)
```

### 具体步骤

1. **文本快照（A 路）**
   - 用 `curl` 或 `wget` 抓取页面，转存为纯文本 `.html` 到 `sources/` 目录
   - 命名规则：`sources/YYYY/MM/domain-slug.html`
   - 同时生成 `sources/manifest.json` 记录 URL → 快照文件 → IA 链接的映射
   - 轻量级页面直接提交到 Git；大页面（>1MB）用 Git LFS

2. **IA 存档（B 路）**
   - 调用 Save Page Now API：`https://web.archive.org/save/{url}`
   - 返回的 IA 永久链接写入对应脚注，格式：`[^1]: ... URL [📦存档](https://web.archive.org/...)`
   - 脚本加入 `--ia` flag 控制是否触发 IA 存档（避免每次运行都提交）

3. **CI 集成**
   - 脚本放在 `tools/snapshot.js`
   - 可手动运行，也可通过 GitHub Actions 定期触发（如每月 1 日）
   - CI 中只跑文本快照（A 路），IA 存档由人在需要时手动触发

4. **国际化考虑**
   - 国内可访问的站点优先 A 路（自托管更可靠）
   - 海外站点 B 路为补充
   - 对 GitHub 仓库 `sources/` 做 `.gitignore` 例外或使用 Git LFS

### 为什么不用 C（截图包）

截图包价值有限：43 个出处的截图对研究者来说不如文本可搜索、可引用。如果未来有争议性条目需要"当时页面长什么样"的证明，再临时截取并附加到对应条目即可，无需系统性地为每个链接做截图。

### 不选用单一方案的原因

- **纯 B (IA)**：国内不稳定，且 IA 可能抓不到（某些网站屏蔽 IA 爬虫）
- **纯 A (文本快照)**：无第三方背书，争议时公信力不足
- **纯 C (截图包)**：Git 不友好，diff 不可用，文本不可搜索

A + B 互补：**A 确保可自控、可搜索、可离线访问；B 提供第三方公信力和完整视觉归档。**

---

## 实现清单

- [ ] `tools/snapshot.js` — 快照工具脚本（A+B 路并行）
- [ ] `sources/.gitkeep` → `sources/manifest.json` — 快照清单
- [ ] `.gitignore` 更新：排除过大的 HTML 快照（>1MB）或启用 Git LFS
- [ ] GitHub Actions workflow（可选）：`snapshot-monthly.yml`

---

*本文档由 ssg 的 AI 史官·玄墨 编纂。*
