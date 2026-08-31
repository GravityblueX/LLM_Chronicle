#!/usr/bin/env node
/**
 * 链接验证工具 — LLM Chronicle
 * 
 * 批量验证中文主书与 README 中所有出处链接的可访问性（HTTP 状态码检查）。
 * 
 * 用法:
 *   node tools/validate_links.js                    # 检查全部链接
 *   node tools/validate_links.js --only 编年/2025   # 只检查指定目录
 *   node tools/validate_links.js --json              # 输出 JSON 格式结果
 *   node tools/validate_links.js --timeout 15000     # 自定义超时 (ms)
 */

const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

// ============================================================
// 配置
// ============================================================

const DEFAULT_TIMEOUT = parsePositiveInteger(process.env.LINK_TIMEOUT, 10000);
const DEFAULT_MAX_REDIRECTS = parsePositiveInteger(process.env.LINK_MAX_REDIRECTS, 10);
const CONCURRENCY = 5;
const USER_AGENT = 'LLM_Chronicle_LinkChecker/1.0 (historiography project; contact: github.com/tmzncty/LLM_Chronicle)';
const REDIRECT_STATUSES = new Set([301, 302, 303, 307, 308]);

// Cloudflare-protected domains — skip curl, verify via Internet Archive instead
const CF_DOMAINS = [
  'openai.com',
];

function parsePositiveInteger(value, fallback) {
  const parsed = Number.parseInt(value, 10);
  return Number.isSafeInteger(parsed) && parsed > 0 ? parsed : fallback;
}

// ============================================================
// URL 提取
// ============================================================

function findMdFiles(dir, filter, root = dir) {
  const results = [];
  const normalizedFilter = filter
    ? filter.replace(/\\/g, '/').replace(/^\.\//, '').replace(/\/$/, '')
    : null;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith('.') || entry.name === 'node_modules' || entry.name === 'tools') continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...findMdFiles(full, normalizedFilter, root));
    } else if (entry.name.endsWith('.md')) {
      const rel = path.relative(root, full).replace(/\\/g, '/');
      if (!normalizedFilter || rel === normalizedFilter || rel.startsWith(`${normalizedFilter}/`)) {
        results.push(full);
      }
    }
  }
  return results;
}

function extractUrls(filePath, root) {
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');
  const urlRe = /https?:\/\/[^\s\)\]\u4e00-\u9fff]+/g;
  const urls = [];

  for (const m of content.matchAll(urlRe)) {
    let url = m[0].replace(/[.,;:!?)>\]]+$/, '');
    // 跳过明显不是真实 URL 的（含模板标记 { }）
    if (/[{}\\]/.test(url)) continue;
    // 验证 URL 可解析
    try { new URL(url); } catch { continue; }
    const lineNum = content.substring(0, m.index).split('\n').length;
    const rel = path.relative(root, filePath).replace(/\\/g, '/');
    urls.push({ file: rel, line: lineNum, url });
  }

  return urls;
}

// ============================================================
// Internet Archive 可用性检查
// ============================================================

async function checkWayback(url) {
  try {
    const resp = await fetch(`https://archive.org/wayback/available?url=${encodeURIComponent(url)}`, {
      signal: AbortSignal.timeout(10000),
    });
    const data = await resp.json();
    if (data.archived_snapshots?.closest?.available) {
      return {
        ok: true,
        status: 200,
        latency: 0,
        ia_snapshot: data.archived_snapshots.closest.url,
        ia_timestamp: data.archived_snapshots.closest.timestamp,
      };
    }
    return { ok: false, status: null, error: 'No Wayback Machine archive' };
  } catch (err) {
    return { ok: false, status: null, error: `IA check failed: ${err.message}` };
  }
}

function isCloudflareDomain(url) {
  try {
    const host = new URL(url).hostname.replace(/^www\./, '');
    return CF_DOMAINS.some(d => host === d || host.endsWith('.' + d));
  } catch { return false; }
}

// ============================================================
// HTTP 检查
// ============================================================

function checkUrl(url, timeout, options = {}) {
  const maxRedirects = options.maxRedirects ?? DEFAULT_MAX_REDIRECTS;
  const redirectCount = options.redirectCount ?? 0;
  const startedAt = options.startedAt ?? Date.now();
  const visited = options.visited ?? new Set();

  return new Promise((resolve) => {
    let parsedUrl;
    try {
      parsedUrl = new URL(url);
    } catch {
      resolve({ status: null, latency: Date.now() - startedAt, error: 'Invalid URL', ok: false, redirectCount });
      return;
    }

    if (parsedUrl.protocol !== 'http:' && parsedUrl.protocol !== 'https:') {
      resolve({ status: null, latency: Date.now() - startedAt, error: `Unsupported protocol: ${parsedUrl.protocol}`, ok: false, redirectCount });
      return;
    }

    const normalizedUrl = parsedUrl.href;
    if (visited.has(normalizedUrl)) {
      resolve({ status: null, latency: Date.now() - startedAt, error: 'Redirect loop detected', ok: false, redirectCount });
      return;
    }
    visited.add(normalizedUrl);

    const transport = parsedUrl.protocol === 'https:' ? https : http;
    let settled = false;
    const finish = (result) => {
      if (settled) return;
      settled = true;
      resolve(result);
    };

    const req = transport.get(parsedUrl, {
      timeout,
      headers: { 'User-Agent': USER_AGENT },
    }, (res) => {
      // 处理重定向
      if (REDIRECT_STATUSES.has(res.statusCode)) {
        const loc = res.headers.location;
        res.resume();
        if (!loc) {
          finish({ status: res.statusCode, redirected: true, latency: Date.now() - startedAt, error: 'Redirect without Location header', ok: false, redirectCount });
          return;
        }

        if (redirectCount >= maxRedirects) {
          finish({ status: res.statusCode, redirected: true, latency: Date.now() - startedAt, error: `Too many redirects (limit: ${maxRedirects})`, ok: false, redirectCount });
          return;
        }

        let targetUrl;
        try {
          // Location may be relative (the common case for same-site redirects).
          targetUrl = new URL(loc, parsedUrl).href;
        } catch {
          finish({ status: res.statusCode, redirected: true, latency: Date.now() - startedAt, error: 'Invalid redirect URL', ok: false, redirectCount });
          return;
        }

        checkUrl(targetUrl, timeout, {
          maxRedirects,
          redirectCount: redirectCount + 1,
          startedAt,
          visited,
        }).then(result => finish({ ...result, redirected: true }));
        return;
      }

      // 消费掉响应体
      res.resume();
      res.on('end', () => {
        finish({
          status: res.statusCode,
          redirected: redirectCount > 0,
          redirectCount,
          finalUrl: normalizedUrl,
          latency: Date.now() - startedAt,
          ok: res.statusCode >= 200 && res.statusCode < 400,
        });
      });
    });

    req.on('timeout', () => {
      req.destroy();
      finish({ status: null, latency: Date.now() - startedAt, error: `Timeout (${timeout}ms)`, ok: false, redirectCount });
    });

    req.on('error', (err) => {
      finish({ status: null, latency: Date.now() - startedAt, error: err.code || err.message, ok: false, redirectCount });
    });
  });
}

// ============================================================
// 主逻辑
// ============================================================

async function main() {
  const args = process.argv.slice(2);
  const useJson = args.includes('--json');
  const onlyDir = args.indexOf('--only') >= 0 ? args[args.indexOf('--only') + 1] : null;
  const timeoutIdx = args.indexOf('--timeout');
  const timeout = timeoutIdx >= 0 ? parsePositiveInteger(args[timeoutIdx + 1], DEFAULT_TIMEOUT) : DEFAULT_TIMEOUT;
  const redirectsIdx = args.indexOf('--max-redirects');
  const maxRedirects = redirectsIdx >= 0
    ? parsePositiveInteger(args[redirectsIdx + 1], DEFAULT_MAX_REDIRECTS)
    : DEFAULT_MAX_REDIRECTS;

  const root = path.resolve(__dirname, '..');
  const mdFiles = findMdFiles(root, onlyDir).filter(f => {
    const rel = path.relative(root, f).replace(/\\/g, '/');
    // 扫描中文主书、表格、体例和 README；review/ 与 en/ 不纳入主书死链验收
    return rel.startsWith('编年/') || rel.startsWith('纪传/') || rel.startsWith('志/') || rel.startsWith('论/') || rel.startsWith('表/') || rel === '00_体例.md' || rel === 'README.md';
  });

  console.error(`Scanning ${mdFiles.length} markdown files...`);

  // 收集所有链接
  const allUrls = [];
  for (const f of mdFiles) {
    allUrls.push(...extractUrls(f, root));
  }

  const uniqueUrls = [...new Set(allUrls.map(entry => entry.url))];
  console.error(`Found ${allUrls.length} URL references (${uniqueUrls.length} unique). Checking with ${CONCURRENCY} concurrent connections (timeout: ${timeout}ms, redirects: ${maxRedirects})...\n`);

  // 并发池按 URL 去重检查，最后再展开到原始文件位置。
  const checks = new Map();
  const queue = [...uniqueUrls];

  async function worker() {
    while (queue.length > 0) {
      const url = queue.shift();
      let result;

      if (isCloudflareDomain(url)) {
        // Cloudflare-protected domain → verify via Internet Archive
        result = await checkWayback(url);
        const icon = result.ok ? '\x1b[32m✓\x1b[0m' : '\x1b[31m✗\x1b[0m';
        const detail = result.ok ? `IA snapshot (${result.ia_timestamp})` : result.error;
        console.error(`  ${icon} ${url}  → ${detail} [cloudflare: IA check]`);
      } else {
        result = await checkUrl(url, timeout, { maxRedirects });
        const icon = result.ok ? '\x1b[32m✓\x1b[0m' : (result.error ? '\x1b[31m✗\x1b[0m' : '\x1b[33m?\x1b[0m');
        const detail = result.ok ? `HTTP ${result.status}` : (result.error || `HTTP ${result.status}`);
        console.error(`  ${icon} ${url}  → ${detail} (${result.latency}ms)`);
      }

      checks.set(url, result);
    }
  }

  const workers = Array.from({ length: CONCURRENCY }, () => worker());
  await Promise.all(workers);

  const results = allUrls.map(entry => ({ ...entry, ...checks.get(entry.url) }));

  // 统计
  const ok = results.filter(r => r.ok);
  const failed = results.filter(r => !r.ok);

  console.error(`\n━━━━━━━━━━━━━━━━━━━━━━━━`);
  console.error(`  Total:    ${results.length}`);
  console.error(`  OK:       ${ok.length}`);
  console.error(`  Failed:   ${failed.length}`);
  console.error(`━━━━━━━━━━━━━━━━━━━━━━━━\n`);

  if (failed.length > 0) {
    console.error('Failed links:');
    failed.forEach(r => {
      console.error(`  ✗ ${r.file}:${r.line}  ${r.url}`);
      console.error(`    → ${r.error || ('HTTP ' + r.status)}`);
    });
  }

  // 额外：检查可疑的简短 URL（可能路径不完整）
  const suspicious = results.filter(r => {
    try {
      const u = new URL(r.url);
      return u.pathname === '/' || u.pathname === '';
    } catch { return false; }
  });
  if (suspicious.length > 0) {
    console.error(`\n⚠ Suspicious URLs (base domain only, may be incomplete):`);
    suspicious.forEach(r => {
      console.error(`  ⚠ ${r.file}:${r.line}  ${r.url}`);
    });
  }

  // 输出
  if (useJson) {
    console.log(JSON.stringify(results, null, 2));
  }

  // 生成 CSV 报告
  const csvPath = path.join(root, 'tools', 'link_report.csv');
  const csvHeader = 'file,line,url,status,latency_ms,ok,error';
  const csvRows = results.map(r =>
    [r.file, r.line, r.url, r.status || '', r.latency, r.ok, r.error || '']
      .map(v => typeof v === 'string' ? `"${v.replace(/"/g, '""')}"` : v)
      .join(',')
  );
  fs.writeFileSync(csvPath, [csvHeader, ...csvRows].join('\n'), 'utf8');
  console.error(`\nReport saved: ${csvPath}`);

  process.exit(failed.length > 0 ? 1 : 0);
}

if (require.main === module) {
  main().catch(err => {
    console.error('Fatal error:', err);
    process.exit(2);
  });
}

module.exports = {
  checkUrl,
  extractUrls,
  findMdFiles,
  isCloudflareDomain,
  parsePositiveInteger,
};
