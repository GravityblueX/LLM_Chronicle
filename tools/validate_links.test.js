const assert = require('node:assert/strict');
const fs = require('node:fs');
const http = require('node:http');
const os = require('node:os');
const path = require('node:path');
const { after, before, test } = require('node:test');

const {
  MAX_TIMEOUT_MS,
  checkWayback,
  checkUrl,
  extractUrls,
  findMdFiles,
  findScopedMdFiles,
  parseCliOptions,
  parsePositiveInteger,
} = require('./validate_links');

let server;
let baseUrl;

before(async () => {
  server = http.createServer((req, res) => {
    if (req.url === '/slow-drip') {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      const interval = setInterval(() => res.write('still alive\n'), 20);
      const stop = setTimeout(() => {
        clearInterval(interval);
        res.end('done\n');
      }, 320);
      res.on('close', () => {
        clearInterval(interval);
        clearTimeout(stop);
      });
      return;
    }

    if (req.url === '/slow-chain-1') {
      res.writeHead(302, { Location: '/slow-chain-2' });
      res.end();
      return;
    }

    if (req.url === '/slow-chain-2') {
      const timer = setTimeout(() => {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('ok');
      }, 650);
      res.on('close', () => clearTimeout(timer));
      return;
    }

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

test('enforces timeout as a total deadline for a slow-drip response', async () => {
  const result = await checkUrl(`${baseUrl}/slow-drip`, 75);

  assert.equal(result.ok, false);
  assert.equal(result.error, 'Timeout (75ms)');
  assert.ok(result.latency < 250, `timeout resolved after ${result.latency}ms`);
});

test('shares the total timeout deadline across redirect hops', async () => {
  const timeout = 1000;
  const result = await checkUrl(`${baseUrl}/slow-chain-1`, timeout, {
    // Leave enough real time for a loaded CI runner to follow the first hop,
    // while proving that the second hop cannot reset the original deadline.
    startedAt: Date.now() - 600,
  });

  assert.equal(result.ok, false);
  assert.equal(result.error, `Timeout (${timeout}ms)`);
  assert.equal(result.redirectCount, 1);
});

test('applies the configured timeout to the complete Wayback lookup', async () => {
  let observedAbort = false;
  const fetchImpl = async (_url, { signal }) => ({
    json: () => new Promise((resolve, reject) => {
      signal.addEventListener('abort', () => {
        observedAbort = true;
        reject(signal.reason);
      }, { once: true });
    }),
  });

  const result = await checkWayback('https://openai.com/research/', 25, { fetch: fetchImpl });

  assert.equal(result.ok, false);
  assert.equal(result.error, 'Timeout (25ms)');
  assert.equal(observedAbort, true);
  assert.ok(result.latency < 250, `timeout resolved after ${result.latency}ms`);
});

test('settles at the Wayback deadline when fetch or body parsing ignores abort', async () => {
  const neverSettles = () => new Promise(() => {});
  const cases = [
    { fetch: neverSettles },
    { fetch: async () => ({ json: neverSettles }) },
  ];

  for (const options of cases) {
    const result = await checkWayback('https://openai.com/research/', 25, options);
    assert.equal(result.ok, false);
    assert.equal(result.error, 'Timeout (25ms)');
    assert.ok(result.latency < 250, `timeout resolved after ${result.latency}ms`);
  }
});

test('rejects timeout values outside the Node timer domain without throwing', async () => {
  for (const timeout of [0, -1, 1.5, NaN, Infinity, MAX_TIMEOUT_MS + 1, Number.MAX_SAFE_INTEGER]) {
    const result = await checkUrl(`${baseUrl}/ok`, timeout);
    assert.equal(result.ok, false, `timeout ${timeout}`);
    assert.equal(result.error, `Invalid timeout (expected 1-${MAX_TIMEOUT_MS}ms)`, `timeout ${timeout}`);

    const waybackResult = await checkWayback('https://openai.com/research/', timeout);
    assert.equal(waybackResult.ok, false, `Wayback timeout ${timeout}`);
    assert.equal(waybackResult.error, `Invalid timeout (expected 1-${MAX_TIMEOUT_MS}ms)`, `Wayback timeout ${timeout}`);
  }

  const boundaryResult = await checkUrl(`${baseUrl}/ok`, MAX_TIMEOUT_MS);
  assert.equal(boundaryResult.ok, true);
});

test('rejects unsupported protocols without making a request', async () => {
  const result = await checkUrl('ftp://example.com/archive', 1000);

  assert.equal(result.ok, false);
  assert.equal(result.error, 'Unsupported protocol: ftp:');
});

test('extracts link-check URLs with shared Markdown and Unicode boundaries', t => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'chronicle-link-urls-'));
  t.after(() => fs.rmSync(root, { recursive: true, force: true }));
  const fixtureDir = path.join(root, '志');
  const fixture = path.join(fixtureDir, 'parser-fixture.md');
  fs.mkdirSync(fixtureDir);
  fs.writeFileSync(fixture, [
    'Quoted: "https://example.test/release"',
    '中文分号：https://example.test/article；',
    '注释：https://arxiv.org/abs/2303.15343（SigLIP）',
    '全角右括号：https://example.test/archive）',
    '[Wiki](https://en.wikipedia.org/wiki/Llama_(language_model)).',
    '[IPv6](http://[2001:db8::1]/path).',
    '中文路径：https://www.80aj.com/前沿/20260409/。',
    '中文查询：https://www.baidu.com/s?wd=百度深度学习研究院；',
  ].join('\n'));

  assert.deepEqual(extractUrls(fixture, root), [
    { file: '志/parser-fixture.md', url: 'https://example.test/release', line: 1 },
    { file: '志/parser-fixture.md', url: 'https://example.test/article', line: 2 },
    { file: '志/parser-fixture.md', url: 'https://arxiv.org/abs/2303.15343', line: 3 },
    { file: '志/parser-fixture.md', url: 'https://example.test/archive', line: 4 },
    { file: '志/parser-fixture.md', url: 'https://en.wikipedia.org/wiki/Llama_(language_model)', line: 5 },
    { file: '志/parser-fixture.md', url: 'http://[2001:db8::1]/path', line: 6 },
    { file: '志/parser-fixture.md', url: 'https://www.80aj.com/前沿/20260409/', line: 7 },
    { file: '志/parser-fixture.md', url: 'https://www.baidu.com/s?wd=百度深度学习研究院', line: 8 },
  ]);
});

test('parses positive integer options and falls back for invalid values', () => {
  assert.equal(parsePositiveInteger('2500', 1000), 2500);
  assert.equal(parsePositiveInteger('0', 1000), 1000);
  assert.equal(parsePositiveInteger('not-a-number', 1000), 1000);
  assert.equal(parsePositiveInteger('2500ms', 1000), 1000);
  assert.equal(parsePositiveInteger('1.5', 1000), 1000);
  assert.equal(parsePositiveInteger(String(MAX_TIMEOUT_MS), 1000, MAX_TIMEOUT_MS), MAX_TIMEOUT_MS);
  assert.equal(parsePositiveInteger(String(MAX_TIMEOUT_MS + 1), 1000, MAX_TIMEOUT_MS), 1000);
});

test('rejects missing, malformed, duplicate, and unknown CLI options', () => {
  assert.throws(() => parseCliOptions(['--only']), /--only requires a value/);
  assert.throws(() => parseCliOptions(['--timeout', '2500ms']), /positive integer/);
  assert.throws(
    () => parseCliOptions(['--timeout', String(MAX_TIMEOUT_MS + 1)]),
    new RegExp(`positive integer no greater than ${MAX_TIMEOUT_MS}`),
  );
  assert.throws(() => parseCliOptions(['--json', '--json']), /Duplicate option/);
  assert.throws(() => parseCliOptions(['--onyl', '志']), /Unknown option/);
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
    assert.throws(
      () => findScopedMdFiles(root, '编年/2099'),
      /--only matched no in-scope Markdown files/,
    );
  } finally {
    fs.rmSync(root, { recursive: true, force: true });
  }
});
