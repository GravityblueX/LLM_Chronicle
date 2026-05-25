// Extract all unique URLs from project markdown files
const fs = require('fs');
const path = require('path');

function findMd(dir) {
  const results = [];
  for (const entry of fs.readdirSync(dir, {withFileTypes:true})) {
    if (entry.name.startsWith('.') || entry.name === 'node_modules') continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) results.push(...findMd(full));
    else if (entry.name.endsWith('.md')) results.push(full);
  }
  return results;
}

const root = process.argv[2] || process.cwd();
const files = findMd(root).filter(f => !f.includes('node_modules'));

const urlRe = /https?:\/\/[^\s\)\]\u4e00-\u9fff]+/g;
const all = [];
for (const f of files) {
  const content = fs.readFileSync(f, 'utf8');
  const lines = content.split('\n');
  for (const m of content.matchAll(urlRe)) {
    let url = m[0].replace(/[.,;:!?)>\]]+$/, '');
    const lineNum = content.substring(0, m.index).split('\n').length;
    const rel = path.relative(root, f).replace(/\\/g, '/');
    all.push({ file: rel, url, line: lineNum });
  }
}

// Write JSON
const outPath = path.join(root, 'tools', 'urls.json');
fs.writeFileSync(outPath, JSON.stringify(all, null, 2), 'utf8');

// Summary
const seen = new Set();
const unique = all.filter(u => seen.has(u.url) ? false : seen.add(u.url));

console.log(`Files scanned: ${files.length}`);
console.log(`Total URLs: ${all.length}`);
console.log(`Unique URLs: ${unique.length}`);
console.log(`Output: ${outPath}`);

unique.forEach(u => console.log(`${u.file}:${u.line}  ${u.url}`));
