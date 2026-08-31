const assert = require('node:assert/strict');
const fs = require('node:fs');
const http = require('node:http');
const os = require('node:os');
const path = require('node:path');
const { after, before, test } = require('node:test');

const { checkUrl, findMdFiles, parsePositiveInteger } = require('./validate_links');

let server;
let baseUrl;

before(async () => {
  server = http.createServer((req, res) => {
    const routes = {
      '/ok': [200, {}, 'ok'],
      '/relative': [302, { Location: '/ok' }, ''],
      '/see-other': [303, { Location: '/ok' }, ''],
      '/loop-a': [302, { Location: '/loop-b' }, ''],
      '/loop-b': [302, { Location: '/loop-a' }, ''],
      '/chain-1': [302, { Location: '/chain-2' }, ''],
      '/chain-2': [302, { Location: '/chain-3' }, ''],
      '/chain-3': [302, { Location: '/ok' }, ''],
    };
    const [status, headers, body] = routes[req.url] || [404, {}, 'missing'];
    res.writeHead(status, headers);
    res.end(body);
  });

  await new Promise((resolve, reject) => {
    server.once('error', reject);
    server.listen(0, '127.0.0.1', resolve);
  });
  const { port } = server.address();
  baseUrl = `http://127.0.0.1:${port}`;
});

after(async () => {
  await new Promise((resolve, reject) => server.close(err => err ? reject(err) : resolve()));
});

test('follows a relative redirect and reports the final URL', async () => {
  const result = await checkUrl(`${baseUrl}/relative`, 1000);

  assert.equal(result.ok, true);
  assert.equal(result.status, 200);
  assert.equal(result.redirected, true);
  assert.equal(result.redirectCount, 1);
  assert.equal(result.finalUrl, `${baseUrl}/ok`);
});

test('follows HTTP 303 redirects', async () => {
  const result = await checkUrl(`${baseUrl}/see-other`, 1000);

  assert.equal(result.ok, true);
  assert.equal(result.redirectCount, 1);
});

test('detects a redirect loop before exhausting the redirect budget', async () => {
  const result = await checkUrl(`${baseUrl}/loop-a`, 1000, { maxRedirects: 10 });

  assert.equal(result.ok, false);
  assert.equal(result.error, 'Redirect loop detected');
  assert.equal(result.redirectCount, 2);
});

test('stops redirect chains at the configured limit', async () => {
  const result = await checkUrl(`${baseUrl}/chain-1`, 1000, { maxRedirects: 2 });

  assert.equal(result.ok, false);
  assert.equal(result.error, 'Too many redirects (limit: 2)');
  assert.equal(result.redirectCount, 2);
});

test('rejects unsupported protocols without making a request', async () => {
  const result = await checkUrl('ftp://example.com/archive', 1000);

  assert.equal(result.ok, false);
  assert.equal(result.error, 'Unsupported protocol: ftp:');
});

test('parses positive integer options and falls back for invalid values', () => {
  assert.equal(parsePositiveInteger('2500', 1000), 2500);
  assert.equal(parsePositiveInteger('0', 1000), 1000);
  assert.equal(parsePositiveInteger('not-a-number', 1000), 1000);
});

test('--only filtering is relative to the repository root at every directory depth', () => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'chronicle-links-'));
  try {
    fs.mkdirSync(path.join(root, '志'));
    fs.mkdirSync(path.join(root, '编年', '2025'), { recursive: true });
    fs.writeFileSync(path.join(root, 'README.md'), '# readme');
    fs.writeFileSync(path.join(root, '志', 'topic.md'), '# topic');
    fs.writeFileSync(path.join(root, '编年', '2025', '01.md'), '# month');

    assert.deepEqual(findMdFiles(root, 'README.md'), [path.join(root, 'README.md')]);
    assert.deepEqual(findMdFiles(root, '志'), [path.join(root, '志', 'topic.md')]);
    assert.deepEqual(findMdFiles(root, '编年/2025'), [path.join(root, '编年', '2025', '01.md')]);
  } finally {
    fs.rmSync(root, { recursive: true, force: true });
  }
});
