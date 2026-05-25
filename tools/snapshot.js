#!/usr/bin/env node
/**
 * 快照归档脚本 — LLM Chronicle
 *
 * 按体例 v2.0 §五 规范，A+B 组合方案自动归档。
 *   A 路：curl -L 抓取 HTML → sources/YYYY/MM/slug.html
 *   B 路：Internet Archive Save Page Now → 永久链接写入 index.json
 *
 * 用法:
 *   node tools/snapshot.js 编年/2023/02.md          # 对指定条目 A+B 双路归档
 *   node tools/snapshot.js --text-only 编年/2023/02.md  # 仅 A 路（HTML 快照）
 *   node tools/snapshot.js --ia 编年/2023/02.md           # 仅 B 路（IA 存档）
 *   node tools/snapshot.js                           # 归档 urls.json 中所有编年链接
 *   node tools/snapshot.js --dry-run                  # 试运行
 *   node tools/snapshot.js --update-only              # 仅更新 index.json
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const crypto = require('crypto');

// ============================================================
// 配置
// ============================================================

const ROOT = path.resolve(__dirname, '..');
const SOURCES_DIR = path.join(ROOT, 'sources');
const URLS_JSON = path.join(ROOT, 'tools', 'urls.json');
const USER_AGENT = 'LLM_Chronicle_Snapshot/1.0 (historiography project; contact: github.com/tmzncty/LLM_Chronicle)';
const CURL_TIMEOUT = 30; // 秒
const IA_TIMEOUT = 60; // 秒（IA 归档较慢）
const MAX_FILE_SIZE_MB = 1;
const SOCIAL_MEDIA_DOMAINS = ['twitter.com', 'x.com', 'zhihu.com', 'weibo.com', 'bilibili.com'];
const IA_SPN_API = 'https://web.archive.org/save';

// ============================================================
// 工具函数
// ============================================================

function slugify(url) {
  try {
    const u = new URL(url);
    const host = u.hostname.replace(/^www\./, '').replace(/\./g, '-');
    let pathPart = u.pathname.replace(/\/$/, '').replace(/\.[^.]+$/, '');
    if (!pathPart || pathPart === '/') return host;
    const segments = pathPart.split('/').filter(Boolean);
    const key = segments.slice(-2).join('-');
    let slug = `${host}-${key}`
      .replace(/[^a-zA-Z0-9\-_]/g, '-')
      .replace(/-{2,}/g, '-')
      .replace(/^-|-$/g, '')
      .substring(0, 80);
    return slug || host;
  } catch {
    return crypto.createHash('md5').update(url).digest('hex').substring(0, 12);
  }
}

function needsScreenshot(url) {
  try {
    const host = new URL(url).hostname.replace(/^www\./, '');
    return SOCIAL_MEDIA_DOMAINS.some(d => host === d || host.endsWith('.' + d));
  } catch { return false; }
}

function monthFromFilePath(filePath) {
  const m = filePath.match(/编年[\\/](\d{4})[\\/](\d{2})/);
  return m ? `${m[1]}-${m[2]}` : null;
}

function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

/** 从 Markdown 文件中提取所有 URL 及对应的脚注编号 */
function extractUrlsFromFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const entries = [];
  const urlRe = /https?:\/\/[^\s\)\]\u4e00-\u9fff]+/g;
  const refRe = /\[\^(\d+)\]/g;

  // 建立脚注 URL → ref 的映射
  const footnoteLines = content.split('\n').filter(l => /^\[\^\d+\]:/.test(l));
  const urlToRef = new Map();
  for (const line of footnoteLines) {
    const refMatch = line.match(/^\[(\^\d+)\]:/);
    const urlMatch = line.match(/(https?:\/\/[^\s\)\]\u4e00-\u9fff]+)/);
    if (refMatch && urlMatch) {
      const url = urlMatch[0].replace(/[.,;:!?)>\]]+$/, '');
      try { new URL(url); urlToRef.set(url, refMatch[1]); } catch {}
    }
  }

  // 提取正文中的 URL
  for (const m of content.matchAll(urlRe)) {
    let url = m[0].replace(/[.,;:!?)>\]]+$/, '');
    if (/[{}\\]/.test(url)) continue;
    try { new URL(url); } catch { continue; }
    const lineNum = content.substring(0, m.index).split('\n').length;
    const rel = path.relative(ROOT, filePath).replace(/\\/g, '/');
    entries.push({ file: rel, line: lineNum, url, ref: urlToRef.get(url) || null });
  }

  return entries;
}

// ============================================================
// A 路：HTML 文本快照（curl）
// ============================================================

function fetchSnapshot(url, outputPath, timeout) {
  const cmd = `curl -L -s -S -A "${USER_AGENT}" --max-time ${timeout} -o "${outputPath}" -w "%{http_code}|%{size_download}|%{time_total}" "${url}"`;
  try {
    const stdout = execSync(cmd, {
      encoding: 'utf8',
      timeout: (timeout + 5) * 1000,
      stdio: ['pipe', 'pipe', 'pipe'],
    });
    const parts = stdout.trim().split('|');
    const status = parseInt(parts[0]) || 0;
    const size = parseInt(parts[1]) || 0;
    const latency = parseFloat(parts[2]) || 0;
    return {
      ok: status >= 200 && status < 400,
      status,
      size,
      latency_sec: latency,
      too_large: size > MAX_FILE_SIZE_MB * 1024 * 1024,
    };
  } catch (err) {
    return {
      ok: false,
      status: null,
      size: 0,
      latency_sec: timeout,
      error: err.stderr ? err.stderr.toString().substring(0, 200) : (err.message || 'Unknown curl error'),
      too_large: false,
    };
  }
}

// ============================================================
// B 路：Internet Archive Save Page Now
// ============================================================

async function archiveToWayback(url) {
  const apiUrl = `${IA_SPN_API}/${encodeURIComponent(url)}`;
  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), IA_TIMEOUT * 1000);

    const resp = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'User-Agent': USER_AGENT,
      },
      signal: controller.signal,
      redirect: 'follow',
    });
    clearTimeout(timer);

    const body = await resp.text();
    let data;
    try { data = JSON.parse(body); } catch { data = null; }

    if (resp.ok && data && data.url) {
      // IA 返回的 url 字段即为永久快照地址
      return {
        ok: true,
        wayback_url: data.url,
        job_id: data.job_id || null,
        message: data.message || null,
      };
    }

    // SPN 可能返回 200 但实际未保存（如已在队列中）
    if (data && data.message) {
      console.error(`    ℹ IA: ${data.message}`);
    }

    // 检查是否已有存档（可能返回 already archived 等）
    if (data && data.url) {
      return { ok: true, wayback_url: data.url, job_id: data.job_id || null, message: data.message };
    }

    return {
      ok: false,
      wayback_url: null,
      error: `IA returned HTTP ${resp.status}: ${body.substring(0, 200)}`,
    };
  } catch (err) {
    if (err.name === 'AbortError') {
      return { ok: false, wayback_url: null, error: `IA timeout after ${IA_TIMEOUT}s` };
    }
    return { ok: false, wayback_url: null, error: err.message || 'Unknown IA error' };
  }
}

// ============================================================
// index.json 管理
// ============================================================

function loadIndex(monthDir) {
  const indexPath = path.join(monthDir, 'index.json');
  if (fs.existsSync(indexPath)) {
    try { return JSON.parse(fs.readFileSync(indexPath, 'utf8')); } catch {}
  }
  return { month: path.basename(monthDir), sources: [] };
}

function saveIndex(monthDir, index) {
  const indexPath = path.join(monthDir, 'index.json');
  fs.mkdirSync(monthDir, { recursive: true });
  fs.writeFileSync(indexPath, JSON.stringify(index, null, 2) + '\n', 'utf8');
}

function upsertSource(index, source) {
  const existing = index.sources.find(s =>
    (source.ref && s.ref === source.ref) || s.url === source.url
  );
  if (existing) {
    Object.assign(existing, source);
  } else {
    index.sources.push(source);
  }
}

// ============================================================
// 主逻辑
// ============================================================

async function main() {
  const args = process.argv.slice(2);
  const dryRun = args.includes('--dry-run');
  const updateOnly = args.includes('--update-only');
  const textOnly = args.includes('--text-only');
  const iaOnly = args.includes('--ia');
  const singleUrl = args.indexOf('--url') >= 0 ? args[args.indexOf('--url') + 1] : null;
  const singleMonth = args.indexOf('--month') >= 0 ? args[args.indexOf('--month') + 1] : null;
  // 文件路径参数（非 flag 参数）
  const fileArg = args.find(a => !a.startsWith('--') && a !== singleUrl && a !== singleMonth);

  const doAText = !iaOnly;   // A 路：默认开，--ia 关
  const doBWayback = !textOnly; // B 路：默认开，--text-only 关

  // ---------- 收集 URL ----------
  let entries = [];

  if (singleUrl && singleMonth) {
    entries.push({ url: singleUrl, file: `编年/${singleMonth.replace('-', '/')}/manual.md`, line: 0, ref: null });
  } else if (singleUrl) {
    console.error('Error: --url requires --month');
    process.exit(1);
  } else if (fileArg) {
    // 从指定文件提取 URL
    const fullPath = path.resolve(fileArg);
    if (!fs.existsSync(fullPath)) {
      console.error(`File not found: ${fileArg}`);
      process.exit(1);
    }
    entries = extractUrlsFromFile(fullPath);
    console.error(`Extracted ${entries.length} URLs from ${fileArg}`);
  } else {
    // 从 urls.json 加载
    if (!fs.existsSync(URLS_JSON)) {
      console.error(`urls.json not found. Run first: node tools/extract_urls.js`);
      process.exit(1);
    }
    const allUrls = JSON.parse(fs.readFileSync(URLS_JSON, 'utf8'));
    entries = allUrls.filter(u => u.file.startsWith('编年/'));
    console.error(`Loaded ${entries.length} URLs from urls.json (chronicle entries only)`);
  }

  // ---------- 按月份分组 ----------
  const byMonth = {};
  for (const entry of entries) {
    const month = monthFromFilePath(entry.file);
    if (!month) {
      console.error(`  ⚠ Cannot determine month for: ${entry.file} — skipping`);
      continue;
    }
    if (!byMonth[month]) byMonth[month] = [];
    byMonth[month].push(entry);
  }

  if (dryRun) {
    console.error(`\nDry run — ${Object.keys(byMonth).length} months, ${entries.length} URLs:\n`);
    for (const [month, urls] of Object.entries(byMonth).sort()) {
      console.error(`  ${month}: ${urls.length} URLs`);
      for (const u of urls) {
        const slug = slugify(u.url);
        const scree = needsScreenshot(u.url) ? ' [📸 SCREENSHOT NEEDED]' : '';
        const modes = [];
        if (doAText) modes.push('A:HTML');
        if (doBWayback) modes.push('B:IA');
        console.error(`    → ${slug}.html${scree}  [${modes.join('+')}]`);
        console.error(`      ${u.url}`);
      }
    }
    return;
  }

  // ---------- 归档执行 ----------
  const now = new Date().toISOString().split('T')[0];
  let totalOkA = 0, totalFailA = 0, totalScreenshot = 0;
  let totalOkB = 0, totalFailB = 0, totalSkippedB = 0;

  for (const [month, urls] of Object.entries(byMonth).sort()) {
    const [year, mm] = month.split('-');
    const monthDir = path.join(SOURCES_DIR, year, mm);
    let index = loadIndex(monthDir);

    console.error(`\n📅 ${month} (${urls.length} URLs)`);

    for (const entry of urls) {
      const slug = slugify(entry.url);
      let finalSlug = slug;
      let counter = 1;
      while (index.sources.some(s => s.snapshot === `${finalSlug}.html`)) {
        counter++;
        finalSlug = `${slug}-${String(counter).padStart(2, '0')}`;
      }
      const filename = `${finalSlug}.html`;
      const outputPath = path.join(monthDir, filename);
      const needsScreen = needsScreenshot(entry.url);

      if (updateOnly) {
        if (!fs.existsSync(outputPath)) {
          console.error(`  ⚠ ${slug} — snapshot missing, use without --update-only to fetch`);
          continue;
        }
        const stat = fs.statSync(outputPath);
        upsertSource(index, {
          ref: entry.ref,
          url: entry.url,
          title: null,
          snapshot: filename,
          screenshot: null,
          screenshot_status: needsScreen ? 'MANUAL_NEEDED' : null,
          archived_at: now,
          wayback_url: null,
          file_size: stat.size,
          file_size_human: formatBytes(stat.size),
          curl_status: null,
        });
        console.error(`  📋 ${slug} — indexed`);
        totalOkA++;
        continue;
      }

      console.error(`  ⬇ ${finalSlug}`);
      fs.mkdirSync(monthDir, { recursive: true });

      // ---- A 路：HTML 文本快照 ----
      let aResult = { ok: false, status: null, size: 0, too_large: false };
      if (doAText) {
        aResult = fetchSnapshot(entry.url, outputPath, CURL_TIMEOUT);
        if (aResult.ok) {
          const icon2 = aResult.too_large ? '⚠' : '✅';
          console.error(`    [A] ${icon2} HTTP ${aResult.status} — ${formatBytes(aResult.size)} in ${aResult.latency_sec.toFixed(1)}s`);
          if (aResult.too_large) {
            console.error(`    ⚠ File >${MAX_FILE_SIZE_MB}MB — consider GitHub Releases`);
          }
          totalOkA++;
        } else {
          console.error(`    [A] ❌ ${aResult.error || ('HTTP ' + aResult.status)}`);
          try { if (fs.existsSync(outputPath) && fs.statSync(outputPath).size < 100) fs.unlinkSync(outputPath); } catch {}
          totalFailA++;
        }
      } else {
        console.error(`    [A] ⏭ skipped (--ia mode)`);
      }

      // ---- B 路：Internet Archive ----
      let waybackUrl = null;
      let waybackOk = false;
      if (doBWayback) {
        const iaResult = await archiveToWayback(entry.url);
        if (iaResult.ok) {
          waybackUrl = iaResult.wayback_url;
          waybackOk = true;
          console.error(`    [B] ✅ ${waybackUrl}`);
          totalOkB++;
        } else {
          console.error(`    [B] ❌ ${iaResult.error}`);
          totalFailB++;
        }
      } else {
        console.error(`    [B] ⏭ skipped (--text-only mode)`);
      }

      // ---- 社交媒体截图标记 ----
      let screenshotStatus = null;
      if (needsScreen) {
        screenshotStatus = 'MANUAL_NEEDED';
        totalScreenshot++;
        console.error(`    📸 Manual screenshot needed (social media page)`);
      }

      // ---- 更新 index.json ----
      upsertSource(index, {
        ref: entry.ref,
        url: entry.url,
        title: null,
        snapshot: aResult.ok ? filename : null,
        screenshot: null,
        screenshot_status: screenshotStatus,
        archived_at: now,
        wayback_url: waybackUrl,
        file_size: aResult.ok ? aResult.size : 0,
        file_size_human: aResult.ok ? formatBytes(aResult.size) : 'N/A',
        curl_status: aResult.ok ? aResult.status : (aResult.error || 'unknown'),
      });
    }

    // 保存 index.json
    index.month = month;
    index.updated_at = now;
    saveIndex(monthDir, index);
    console.error(`  💾 index.json saved (${index.sources.length} sources)`);
  }

  // ---------- 汇总 ----------
  console.error(`\n━━━━━━━━━━━━━━━━━━━━━━━━`);
  if (doAText) {
    console.error(`  [A] HTML snapshots:  ✅ ${totalOkA}  ❌ ${totalFailA}`);
  }
  if (doBWayback) {
    console.error(`  [B] IA archives:     ✅ ${totalOkB}  ❌ ${totalFailB}`);
  }
  console.error(`  📸 Screenshots:       ${totalScreenshot} (manual needed)`);
  console.error(`  📂 Months:            ${Object.keys(byMonth).length}`);
  console.error(`━━━━━━━━━━━━━━━━━━━━━━━━\n`);

  if (totalScreenshot > 0) {
    console.error(`⚠ ${totalScreenshot} social media page(s) require manual screenshot (PNG).`);
    console.error(`  These are typically interactive pages that curl cannot faithfully capture.`);
    console.error(`  Use a browser to screenshot and save as sources/YYYY/MM/slug.png`);
  }
}

main().catch(err => {
  console.error('Fatal:', err);
  process.exit(2);
});
