#!/usr/bin/env node
/**
 * 格式校验工具 — LLM Chronicle
 *
 * 检查编年条目是否符合《00_体例.md》（v2.0）规范。
 *
 * v2.0 关键规则:
 *   E001 — 禁 MM-slug.md 拆分（同月多专题用 ## 标题合并）
 *   E003 — 日期范围禁 ~，宜用 — 或"至"
 *   E006 — 编纂署名行格式: *本篇由终末地工业史官团队编纂：XXX（角色）*
 *   E010 — 旧"论曰"须改为"评曰"
 *
 * 用法:
 *   node tools/validate_format.js                    # 检查所有条目
 *   node tools/validate_format.js 编年/2025/01.md     # 检查指定文件
 *   node tools/validate_format.js --json              # 输出 JSON
 *   node tools/validate_format.js --strict            # 严格模式（警告也报错）
 */

const fs = require('fs');
const path = require('path');

// ============================================================
// 规则定义
// ============================================================

const RULES = {
  // === 文件级 ===

  file_naming: {
    id: 'E001',
    level: 'error',
    desc: '文件名应为 YYYY/MM.md（v2.0 禁 MM-slug.md 多文件拆分）',
    check(fileRel) {
      const parts = fileRel.replace(/\\/g, '/').split('/');
      const year = parseInt(parts[parts.length - 2]);
      const filename = parts[parts.length - 1];
      // v2.0: 只允许 MM.md，禁止 MM-slug.md（同月多专题用 ## 标题分隔）
      const match = filename.match(/^(\d{2})\.md$/);
      const slugMatch = filename.match(/^(\d{2})-[\w-]+\.md$/);
      if (slugMatch) {
        return [{ level: 'error', rule: 'E001', msg: `禁止使用 MM-slug.md 格式: ${filename}。v2.0 规定同月多专题用 ## 二级标题合并在同一文件内，不拆多个文件。` }];
      }
      if (!match) {
        return [{ level: 'error', rule: 'E001', msg: `文件名不符合规范: ${filename}，期望格式 MM.md（如 03.md）` }];
      }
      const month = parseInt(match[1]);
      if (month < 1 || month > 12) {
        return [{ level: 'error', rule: 'E001', msg: `月份超出范围: ${filename}` }];
      }
      if (isNaN(year) || year < 2017 || year > 2030) {
        return [{ level: 'warning', rule: 'E001', msg: `年份不在预期范围 2017-2030: ${year}` }];
      }
      return [];
    }
  },

  // === 标题级 ===

  title_format: {
    id: 'E002',
    level: 'error',
    desc: '一级标题须为 # YYYY年M月 或 # YYYY年M月（续）',
    check(content, fileRel) {
      const parts = fileRel.replace(/\\/g, '/').split('/');
      const year = parts[parts.length - 2];
      const firstH1 = content.match(/^# (.+)$/m);
      if (!firstH1) {
        return [{ level: 'error', rule: 'E002', msg: '缺少一级标题 (# YYYY年M月)' }];
      }
      const title = firstH1[1].trim();
      const expected = new RegExp(`^${year}年\\d{1,2}月`);
      if (!expected.test(title)) {
        return [{ level: 'warning', rule: 'E002', msg: `标题格式异常: "${title}"，期望以 "${year}年X月" 开头` }];
      }
      return [];
    }
  },

  // === 条目级 ===

  entry_date_format: {
    id: 'E003',
    level: 'error',
    desc: '编年条目的日期格式应为 **YYYY-MM-DD** — 或 **约YYYY年M月** —',
    check(content) {
      const issues = [];
      const entryRe = /^\*\*([^*]+)\*\*\s*[—–-]/gm;
      let match;
      while ((match = entryRe.exec(content)) !== null) {
        const dateStr = match[1].trim();
        const lineNum = content.substring(0, match.index).split('\n').length;

        // 允许的日期格式
        const validDate = /^\d{4}-\d{2}-\d{2}$/;
        const validApprox = /^约\d{4}年\d{1,2}月/;
        const validMonthOnly = /^\d{4}年\d{1,2}月/;
        const validYearOnly = /^\d{4}年$/;
        const looksLikeDate = /^\d/.test(dateStr); // 以数字开头 = 尝试写日期但格式不对

        if (looksLikeDate) {
          // v2.0: 禁波浪号 ~ 用于日期范围，应改用 em-dash（—）或"至"
          if (/~/.test(dateStr)) {
            issues.push({
              level: 'warning',
              rule: 'E003',
              line: lineNum,
              msg: `日期范围使用了波浪号(~): "${dateStr}"。v2.0 规定日期范围用 em-dash（—），如 2023-02-14—15，或"至"`
            });
          }

          // 尝试写日期但格式错误 → error
          if (!validDate.test(dateStr) && !validApprox.test(dateStr)
              && !validMonthOnly.test(dateStr) && !validYearOnly.test(dateStr)) {
            issues.push({
              level: 'error',
              rule: 'E003',
              line: lineNum,
              msg: `日期格式不符合规范: "${dateStr}"。期望: YYYY-MM-DD / 约YYYY年M月 / YYYY年M月。常见错误: 用了波浪号(~)替代短横(-)、漏写日`
            });
          }
        } else {
          // 不以数字开头 → 可能是叙述性标签（如"随后""冲突升级"），仅 info
          issues.push({
            level: 'info',
            rule: 'E003',
            line: lineNum,
            msg: `「${dateStr}」使用了 **...** — 格式但不是日期。如果是事件内的叙述标记则忽略；如果是独立事件请补日期`
          });
        }

        // 如果是 YYYY-MM-DD，验证日期合法性
        if (validDate.test(dateStr)) {
          const [y, m, d] = dateStr.split('-').map(Number);
          const dt = new Date(y, m - 1, d);
          if (dt.getFullYear() !== y || dt.getMonth() !== m - 1 || dt.getDate() !== d) {
            issues.push({
              level: 'error',
              rule: 'E003',
              line: lineNum,
              msg: `日期无效: ${dateStr}（该月没有这一天）`
            });
          }
        }
      }
      return issues;
    }
  },

  // === 脚注级 ===

  footnote_format: {
    id: 'E004',
    level: 'error',
    desc: '出处脚注格式应为 [^N]: 来源, "标题", 日期. URL',
    check(content) {
      const issues = [];
      const fnRe = /^\[(\^\d+)\]:\s*(.+)$/gm;
      let match;
      const seen = new Set();
      while ((match = fnRe.exec(content)) !== null) {
        const num = match[1];
        const body = match[2].trim();
        const lineNum = content.substring(0, match.index).split('\n').length;

        if (seen.has(num)) {
          issues.push({ level: 'error', rule: 'E004', line: lineNum, msg: `重复的脚注编号: ${num}` });
        }
        seen.add(num);

        // 检查是否包含 URL
        if (!/https?:\/\//.test(body)) {
          issues.push({ level: 'warning', rule: 'E004', line: lineNum, msg: `${num} 缺少 URL 链接（可能为纯文本引用，非网页来源则忽略）` });
        }
      }
      return issues;
    }
  },

  footnote_orphan: {
    id: 'E005',
    level: 'warning',
    desc: '正文引用的脚注编号必须在尾部有对应定义',
    check(content) {
      const issues = [];
      const bodyRefs = new Set();
      // 正文中的引用（排除脚注定义行本身）
      const bodyLines = content.split('\n').filter(l => !l.match(/^\[\^\d+\]:/));
      const refRe = /\[\^(\d+)\]/g;
      for (const line of bodyLines) {
        for (const m of line.matchAll(refRe)) {
          bodyRefs.add(`^${m[1]}`);
        }
      }

      const defined = new Set();
      const fnRe = /^\[(\^\d+)\]:/gm;
      for (const m of content.matchAll(fnRe)) {
        defined.add(m[1]);
      }

      // 引用但未定义
      for (const ref of bodyRefs) {
        if (!defined.has(ref)) {
          issues.push({ level: 'error', rule: 'E005', msg: `正文引用了 [${ref}] 但脚注未定义` });
        }
      }

      // 定义但未被引用
      for (const def of defined) {
        if (!bodyRefs.has(def)) {
          issues.push({ level: 'warning', rule: 'E005', msg: `脚注 [${def}] 定义了但正文未引用` });
        }
      }

      return issues;
    }
  },

  // === 元数据级 ===

  entry_courtesy_line: {
    id: 'E006',
    level: 'warning',
    desc: '条目末尾应有编纂署名行: *本篇由终末地工业史官团队编纂：XXX（角色）*',
    check(content) {
      // v2.0 格式: *本篇由终末地工业史官团队编纂：XXX（角色）*
      if (!/本篇由.*编纂/.test(content)) {
        return [{ level: 'warning', rule: 'E006', msg: '缺少编纂署名行（v2.0 格式: *本篇由终末地工业史官团队编纂：XXX（角色）*）' }];
      }
      // 检查是否使用了旧格式（非"终末地工业史官团队"）
      if (!/终末地工业史官团队/.test(content) && /本篇由/.test(content) && !/玄墨/.test(content)) {
        return [{ level: 'info', rule: 'E006', msg: '编纂署名行可能使用了旧格式，建议更新为: *本篇由终末地工业史官团队编纂：XXX（角色）*' }];
      }
      return [];
    }
  },

  // === 引用级 ===

  entry_references_section: {
    id: 'E007',
    level: 'warning',
    desc: '条目应有明确的出处脚注区块（至少一条 [^N]: 定义）',
    check(content) {
      if (!/^\[\^\d+\]:/m.test(content)) {
        return [{ level: 'warning', rule: 'E007', msg: '缺少出处脚注定义' }];
      }
      return [];
    }
  },

  // === 存疑标注 ===

  single_source_check: {
    id: 'E008',
    level: 'info',
    desc: '仅有单一出处的事件应标注（存疑）',
    check(content) {
      const fnCount = (content.match(/^\[\^\d+\]:/gm) || []).length;
      const bodyRefs = new Set();
      const bodyLines = content.split('\n').filter(l => !l.match(/^\[\^\d+\]:/));
      for (const line of bodyLines) {
        for (const m of line.matchAll(/\[\^(\d+)\]/g)) {
          bodyRefs.add(m[1]);
        }
      }
      if (fnCount === 1 && bodyRefs.size === 1 && !/存疑/.test(content)) {
        return [{ level: 'info', rule: 'E008', msg: '仅有一个出处且未标注"存疑"，建议确认是否需要标注' }];
      }
      return [];
    }
  },

  // === URL 可疑检查 ===

  suspicious_url: {
    id: 'E009',
    level: 'warning',
    desc: 'URL 路径过于简短（可能链接不完整）',
    check(content) {
      const issues = [];
      const urlRe = /(https?:\/\/[^\s\)\]\u4e00-\u9fff]+)/g;
      for (const m of content.matchAll(urlRe)) {
        const url = m[0];
        try {
          const u = new URL(url);
          if (u.pathname === '/' || u.pathname.length <= 3) {
            const lineNum = content.substring(0, m.index).split('\n').length;
            issues.push({ level: 'warning', rule: 'E009', line: lineNum, msg: `URL 可能不完整（缺少具体文章路径）: ${url}` });
          }
        } catch { /* ignore invalid URLs */ }
      }
      return issues;
    }
  },

  // === v2.0 迁移检查 ===

  luryue_migration: {
    id: 'E010',
    level: 'warning',
    desc: 'v2.0 已将"论曰"改为"评曰"，旧格式"论曰"不应再使用',
    check(content) {
      const issues = [];
      const matches = content.match(/^#{1,4}\s*论曰/gm);
      if (matches) {
        for (const m of matches) {
          const lineNum = content.substring(0, content.indexOf(m)).split('\n').length;
          issues.push({
            level: 'warning',
            rule: 'E010',
            line: lineNum,
            msg: `检测到旧格式"${m.trim()}"。v2.0 已改为"评曰"，请将"论曰"替换为"评曰"并改写为白话议论`
          });
        }
      }
      return issues;
    }
  },
};

// ============================================================
// 执行器
// ============================================================

function findChronicleFiles(root, targetFile) {
  if (targetFile) {
    const full = path.resolve(targetFile);
    if (!fs.existsSync(full)) {
      console.error(`File not found: ${targetFile}`);
      process.exit(1);
    }
    return [full];
  }

  const results = [];
  const chronicleDir = path.join(root, '编年');
  if (!fs.existsSync(chronicleDir)) {
    console.error('编年/ directory not found');
    return [];
  }

  for (const yearDir of fs.readdirSync(chronicleDir)) {
    const yearPath = path.join(chronicleDir, yearDir);
    if (!fs.statSync(yearPath).isDirectory()) continue;
    for (const f of fs.readdirSync(yearPath)) {
      if (f.endsWith('.md') && f !== '.gitkeep') {
        results.push(path.join(yearPath, f));
      }
    }
  }
  return results.sort();
}

function checkFile(filePath, root, strict) {
  const content = fs.readFileSync(filePath, 'utf8');
  const fileRel = path.relative(root, filePath).replace(/\\/g, '/');
  const allIssues = [];

  // Rules that only need the file path
  const fileOnlyRules = ['file_naming'];

  for (const [name, rule] of Object.entries(RULES)) {
    let issues;
    if (fileOnlyRules.includes(name)) {
      issues = rule.check(fileRel);
    } else {
      issues = rule.check(content, fileRel);
    }
    for (const issue of issues) {
      allIssues.push(issue);
    }
  }

  return { file: fileRel, issues: allIssues };
}

// ============================================================
// 输出
// ============================================================

const ICONS = { error: '\x1b[31m✗\x1b[0m', warning: '\x1b[33m⚠\x1b[0m', info: '\x1b[36mℹ\x1b[0m' };

function printResults(results, useJson) {
  const allIssues = results.flatMap(r => r.issues);
  const errors = allIssues.filter(i => i.level === 'error');
  const warnings = allIssues.filter(i => i.level === 'warning');
  const infos = allIssues.filter(i => i.level === 'info');

  if (useJson) {
    console.log(JSON.stringify(results, null, 2));
    return;
  }

  for (const result of results) {
    if (result.issues.length === 0) {
      console.error(`\x1b[32m✓\x1b[0m ${result.file} — 通过`);
    } else {
      console.error(`\n${result.file}:`);
      for (const issue of result.issues) {
        const icon = ICONS[issue.level] || '';
        const loc = issue.line ? `:${issue.line}` : '';
        console.error(`  ${icon} [${issue.rule}]${loc} ${issue.msg}`);
      }
    }
  }

  console.error(`\n━━━━━━━━━━━━━━━━━━━━━━━━`);
  console.error(`  Files:   ${results.length}`);
  console.error(`  Errors:  ${errors.length}`);
  console.error(`  Warnings:${warnings.length}`);
  console.error(`  Info:    ${infos.length}`);
  console.error(`━━━━━━━━━━━━━━━━━━━━━━━━`);

  if (errors.length > 0) {
    console.error(`\n\x1b[31m${errors.length} error(s) found — 需要修复。\x1b[0m`);
  } else if (warnings.length > 0) {
    console.error(`\n\x1b[33m${warnings.length} warning(s) — 建议检查。\x1b[0m`);
  } else {
    console.error(`\n\x1b[32m全部通过！\x1b[0m`);
  }
}

// ============================================================
// Main
// ============================================================

function main() {
  const args = process.argv.slice(2);
  const useJson = args.includes('--json');
  const strict = args.includes('--strict');
  const targetFile = args.find(a => !a.startsWith('--'));

  const root = path.resolve(__dirname, '..');
  const files = findChronicleFiles(root, targetFile);

  if (files.length === 0) {
    console.error('No chronicle files found.');
    process.exit(1);
  }

  console.error(`Validating ${files.length} file(s)...\n`);

  const results = files.map(f => checkFile(f, root, strict));
  printResults(results, useJson);

  const hasErrors = results.some(r => r.issues.some(i => i.level === 'error'));
  const hasWarnings = results.some(r => r.issues.some(i => i.level === 'warning'));
  process.exit(hasErrors ? 1 : (hasWarnings && strict ? 1 : 0));
}

main();
