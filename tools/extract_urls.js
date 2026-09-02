#!/usr/bin/env node
// Extract URL references from project Markdown files.
const fs = require('fs');
const path = require('path');

// Quotes, Markdown delimiters, and CJK prose punctuation terminate a bare URL.
// Parentheses are handled separately so URLs such as Wikipedia's
// `Llama_(language_model)` keep their balanced closing parenthesis.
const URL_RE = /https?:\/\/[^\s<>"'`\u3001\u3002\u3010\u3011\u3008\u3009\u300a\u300b\u2013\u2014\u2018\u2019\u201c\u201d\uff01\uff08\uff09\uff0c\uff1a\uff1b\uff1f]+/gi;
const TRAILING_PUNCTUATION_RE = /[.,;:!?>]+$/;
const PLACEHOLDER_PATH_RE = /\/\.{3}(?:[.,;:!?>\]]*)$/;

function compareNames(a, b) {
  return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
}

function findMd(dir) {
  const results = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true }).sort(compareNames);
  for (const entry of entries) {
    if (entry.name.startsWith('.') || entry.name === 'node_modules') continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) results.push(...findMd(full));
    else if (entry.isFile() && entry.name.endsWith('.md')) results.push(full);
  }
  return results;
}

function trimUrlCandidate(candidate) {
  let url = candidate;
  let previous;

  // Markdown can add both punctuation and an unmatched closing parenthesis,
  // for example `[source](https://example.test/path_(v2)).`.
  do {
    previous = url;
    if (PLACEHOLDER_PATH_RE.test(url)) return '';
    url = url.replace(TRAILING_PUNCTUATION_RE, '');
    if (url.endsWith(')')) {
      const opening = (url.match(/\(/g) || []).length;
      const closing = (url.match(/\)/g) || []).length;
      if (closing > opening) url = url.slice(0, -1);
    }
    if (url.endsWith(']')) {
      const opening = (url.match(/\[/g) || []).length;
      const closing = (url.match(/\]/g) || []).length;
      if (closing > opening) url = url.slice(0, -1);
    }
  } while (url !== previous);

  return url;
}

function isHttpUrl(value) {
  if (/[{}\\]/.test(value)) return false;
  try {
    const parsed = new URL(value);
    return parsed.protocol === 'http:' || parsed.protocol === 'https:';
  } catch {
    return false;
  }
}

function extractUrls(content) {
  const urls = [];
  let line = 1;
  let lineScanStart = 0;

  for (const match of content.matchAll(URL_RE)) {
    for (let i = lineScanStart; i < match.index; i += 1) {
      if (content.charCodeAt(i) === 10) line += 1;
    }
    lineScanStart = match.index + match[0].length;

    const url = trimUrlCandidate(match[0]);
    if (isHttpUrl(url)) urls.push({ url, line });
  }

  return urls;
}

function collectUrls(root, files = findMd(root)) {
  const all = [];
  for (const file of files) {
    const content = fs.readFileSync(file, 'utf8');
    const rel = path.relative(root, file).replace(/\\/g, '/');
    for (const entry of extractUrls(content)) {
      all.push({ file: rel, url: entry.url, line: entry.line });
    }
  }
  return all;
}

function main(args = process.argv.slice(2)) {
  const root = path.resolve(args[0] || process.cwd());
  const files = findMd(root);
  const all = collectUrls(root, files);

  const outPath = path.join(root, 'tools', 'urls.json');
  fs.writeFileSync(outPath, JSON.stringify(all, null, 2), 'utf8');

  const seen = new Set();
  const unique = all.filter(entry => seen.has(entry.url) ? false : seen.add(entry.url));

  console.log(`Files scanned: ${files.length}`);
  console.log(`Total URLs: ${all.length}`);
  console.log(`Unique URLs: ${unique.length}`);
  console.log(`Output: ${outPath}`);

  unique.forEach(entry => console.log(`${entry.file}:${entry.line}  ${entry.url}`));
}

if (require.main === module) main();

module.exports = {
  collectUrls,
  extractUrls,
  findMd,
  isHttpUrl,
  trimUrlCandidate,
};
