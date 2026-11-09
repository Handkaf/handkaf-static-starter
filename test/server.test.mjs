import test from 'node:test';
import assert from 'node:assert/strict';
import { request } from 'node:http';
import { createPreviewServer } from '../scripts/serve.mjs';

test('preview serves only public files and handles unsafe requests', async () => {
  const server = createPreviewServer();
  await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
  const get = (path, method = 'GET') => new Promise((resolve, reject) => {
    const req = request({ host: '127.0.0.1', port: server.address().port, path, method }, (res) => {
      let body = ''; res.setEncoding('utf8'); res.on('data', (chunk) => { body += chunk; });
      res.on('end', () => resolve({ status: res.statusCode, headers: res.headers, body }));
    }); req.on('error', reject); req.end();
  });
  try {
    const page = await get('/'); assert.equal(page.status, 200); assert.match(page.body, /<h1/);
    assert.match((await get('/css/styles.css?v=1')).headers['content-type'], /text\/css/);
    assert.match((await get('/js/main.js')).headers['content-type'], /javascript/);
    assert.match((await get('/assets/favicon.svg')).headers['content-type'], /image\/svg/);
    const license = await get('/LICENSE.txt');
    assert.equal(license.status, 200);
    assert.match(license.headers['content-type'], /text\/plain/);
    assert.match(license.body, /Copyright \(c\) 2026 HANDKAF/);
    assert.match(license.body, /Permission is hereby granted/);
    const head = await get('/', 'HEAD'); assert.equal(head.status, 200); assert.equal(head.body, '');
    for (const path of ['/../README.md', '/%2e%2e/README.md', '/%5c..%5cLICENSE', '/%00']) assert.equal((await get(path)).status, 403, path);
    assert.equal((await get('/%ZZ')).status, 400);
    assert.equal((await get('/missing.html')).status, 404);
    assert.equal((await get('/README.md')).status, 404);
    assert.equal((await get('/', 'POST')).status, 405);
  } finally { await new Promise((resolve) => server.close(resolve)); }
});
