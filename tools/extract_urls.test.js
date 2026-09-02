const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { spawnSync } = require('node:child_process');

const { extractUrls, findMd, trimUrlCandidate } = require('./extract_urls');

function makeTempDir(t) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'llm-chronicle-urls-'));
  t.after(() => fs.rmSync(dir, { recursive: true, force: true }));
  return dir;
}

test('extractUrls removes prose delimiters and keeps balanced URL parentheses', () => {
  const content = [
    'Quoted: "https://example.test/release",',
    '[Wiki](https://en.wikipedia.org/wiki/Llama_(language_model)).',
    '中文：https://example.test/article（存档：https://archive.example.test/page）',
    '<https://example.test/autolink>.',
    '[IPv6](http://[2001:db8::1]/path).',
    '中文路径：https://www.80aj.com/前沿/20260409/。',
    '中文查询：https://www.baidu.com/s?wd=百度深度学习研究院；',
  ].join('\n');

  assert.deepEqual(extractUrls(content), [
    { url: 'https://example.test/release', line: 1 },
    { url: 'https://en.wikipedia.org/wiki/Llama_(language_model)', line: 2 },
    { url: 'https://example.test/article', line: 3 },
    { url: 'https://archive.example.test/page', line: 3 },
    { url: 'https://example.test/autolink', line: 4 },
    { url: 'http://[2001:db8::1]/path', line: 5 },
    { url: 'https://www.80aj.com/前沿/20260409/', line: 6 },
    { url: 'https://www.baidu.com/s?wd=百度深度学习研究院', line: 7 },
  ]);
});

test('extractUrls accepts case-insensitive HTTP schemes and skips malformed URLs', () => {
  const content = [
    'HTTPS://EXAMPLE.TEST/valid',
    'https://example.test:invalid-port/path',
    'http://[not-an-ipv6-address]/',
    'https://example.test/{placeholder}',
    'https://example.test/\\template',
  ].join('\n');

  assert.deepEqual(extractUrls(content), [
    { url: 'HTTPS://EXAMPLE.TEST/valid', line: 1 },
  ]);
});

test('trimUrlCandidate removes only unmatched closing delimiters', () => {
  assert.equal(
    trimUrlCandidate('https://example.test/a_(balanced)'),
    'https://example.test/a_(balanced)',
  );
  assert.equal(
    trimUrlCandidate('https://example.test/a_(balanced))).'),
    'https://example.test/a_(balanced)',
  );
  assert.equal(
    trimUrlCandidate('http://[2001:db8::1]/path]'),
    'http://[2001:db8::1]/path',
  );
  assert.equal(
    trimUrlCandidate('https://example.test/path[segment]'),
    'https://example.test/path[segment]',
  );
});

test('extractUrls rejects template destinations instead of truncating to live parents', () => {
  const content = [
    'https://web.archive.org/save/{url}',
    'https://example.test/path/...',
    '[placeholder](https://example.test/path/...).',
  ].join('\n');

  assert.deepEqual(extractUrls(content), []);
});

test('findMd is deterministic and ignores hidden, dependency, and symlink entries', t => {
  const root = makeTempDir(t);
  fs.mkdirSync(path.join(root, 'b'));
  fs.mkdirSync(path.join(root, 'a'));
  fs.mkdirSync(path.join(root, '.hidden'));
  fs.mkdirSync(path.join(root, 'node_modules'));
  fs.writeFileSync(path.join(root, 'z.md'), 'z');
  fs.writeFileSync(path.join(root, 'b', 'b.md'), 'b');
  fs.writeFileSync(path.join(root, 'a', 'a.md'), 'a');
  fs.writeFileSync(path.join(root, '.hidden', 'hidden.md'), 'hidden');
  fs.writeFileSync(path.join(root, 'node_modules', 'dependency.md'), 'dependency');

  try {
    fs.symlinkSync(path.join(root, 'z.md'), path.join(root, 'linked.md'));
  } catch (error) {
    if (process.platform !== 'win32') throw error;
  }

  const originalReaddirSync = fs.readdirSync;
  let discovered;
  try {
    // Filesystems often return directory entries in sorted order by accident.
    // Reverse every enumeration so this regression requires findMd's own sort.
    fs.readdirSync = function reversedReaddirSync(...args) {
      return Reflect.apply(originalReaddirSync, this, args).reverse();
    };
    discovered = findMd(root).map(file => path.relative(root, file).replace(/\\/g, '/'));
  } finally {
    fs.readdirSync = originalReaddirSync;
  }

  assert.deepEqual(discovered, [
    'a/a.md',
    'b/b.md',
    'z.md',
  ]);
});

test('CLI writes clean references in deterministic file order', t => {
  const root = makeTempDir(t);
  fs.mkdirSync(path.join(root, 'tools'));
  fs.mkdirSync(path.join(root, 'entries'));
  fs.writeFileSync(path.join(root, 'z.md'), 'https://example.test/z”');
  fs.writeFileSync(path.join(root, 'entries', 'a.md'), 'first\nhttps://example.test/a_(v1)');

  const result = spawnSync(process.execPath, [path.join(__dirname, 'extract_urls.js'), root], {
    encoding: 'utf8',
  });

  assert.equal(result.status, 0, result.stderr);
  const output = JSON.parse(fs.readFileSync(path.join(root, 'tools', 'urls.json'), 'utf8'));
  assert.deepEqual(output, [
    { file: 'entries/a.md', url: 'https://example.test/a_(v1)', line: 2 },
    { file: 'z.md', url: 'https://example.test/z', line: 1 },
  ]);
});
