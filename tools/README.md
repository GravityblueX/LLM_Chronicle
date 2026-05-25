# 工程工具链

LLM Chronicle 项目的自动化工具集。

## 工具列表

### `validate_links.js` — 链接验证

批量检查编年条目中所有出处链接的可访问性。

```bash
# 检查全部
node tools/validate_links.js

# 只检查指定目录
node tools/validate_links.js --only 编年/2025

# 输出 JSON（适合 CI）
node tools/validate_links.js --json

# 自定义超时（毫秒）
node tools/validate_links.js --timeout 15000
```

**输出**：
- 终端彩色报告（实时进度 + 汇总统计）
- `tools/link_report.csv` — CSV 格式完整结果
- 退出码：0 = 全部通过，1 = 有失败的链接

**检查项**：
- HTTP 状态码（200-399 为通过）
- 重定向跟踪（自动跟随 301/302/307/308）
- 响应延迟
- 可疑 URL 警告（基域名无路径，可能链接不完整）

### `validate_format.js` — 格式校验

检查编年条目文件是否符合《00_体例.md》规范。

```bash
# 检查所有条目
node tools/validate_format.js

# 检查单个文件
node tools/validate_format.js 编年/2025/01.md

# 严格模式（警告也报错）
node tools/validate_format.js --strict

# JSON 输出
node tools/validate_format.js --json
```

**检查项**：

| 编号 | 级别 | 检查内容 |
|------|------|----------|
| E001 | error | 文件名格式（MM.md 或 MM-slug.md） |
| E002 | warning | 一级标题格式（# YYYY年M月） |
| E003 | error/info | 条目日期格式（**YYYY-MM-DD** —） |
| E004 | warning | 脚注格式（[^N]: 来源, "标题", 日期. URL） |
| E005 | warning/error | 脚注引用完整性（正文引用⇔尾注定义） |
| E006 | warning | 编纂署名行 |
| E007 | warning | 出处脚注区块存在性 |
| E008 | info | 单一出处 → 是否需要"存疑"标注 |
| E009 | warning | URL 完整性（路径过短） |

### `extract_urls.js` — URL 提取（辅助）

提取项目中所有 markdown 文件的 URL，输出 `tools/urls.json`。

```bash
node tools/extract_urls.js .
```

---

## 依赖

纯 Node.js，无外部依赖。需要 Node.js ≥ 18。

## CI 集成（建议）

```yaml
# .github/workflows/validate.yml
name: Validate
on: [push, pull_request]
jobs:
  format:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: node tools/validate_format.js --strict
  links:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: node tools/validate_links.js --json
```

---

*由 ssg 的 AI 史官·玄墨 搭建。*
