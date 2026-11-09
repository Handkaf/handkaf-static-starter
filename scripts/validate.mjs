import assert from 'node:assert/strict';
import { readFile, readdir, stat } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';

const root = fileURLToPath(new URL('../', import.meta.url));
const read = (path) => readFile(resolve(root, path), 'utf8');
const required = ['README.md', 'LICENSE', '.gitignore', 'CONTRIBUTING.md', 'SECURITY.md', 'CHANGELOG.md', 'docs/installation.md', 'docs/hostinger-deployment.md', 'docs/static-deployment.md', 'docs/releasing.md', '.github/workflows/validate.yml', '.github/PULL_REQUEST_TEMPLATE.md'];
for (const path of required) assert.ok((await read(path)).trim(), `Missing or empty: ${path}`);
const html = await read('public/index.html');
assert.match(html, /^<!doctype html>/i);
assert.match(html, /<html lang="id">/);
assert.match(html, /<meta name="viewport"/);
assert.match(html, /<title>[^<]+<\/title>/);
assert.match(html, /<main id="main">/);
assert.equal((html.match(/<h1[ >]/g) || []).length, 1, 'Exactly one main heading');
const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]);
assert.equal(new Set(ids).size, ids.length, 'Duplicate HTML IDs');
for (const [, attribute, reference] of html.matchAll(/\b(href|src)="([^"]+)"/g)) {
  if (reference.startsWith('#')) {
    assert.ok(reference === '#' || ids.includes(reference.slice(1)), `Broken anchor: ${reference}`);
  } else if (!/^https:\/\//.test(reference)) {
    assert.ok(!/^(?:[a-z]+:|\/\/)/i.test(reference), `Unexpected URL: ${reference}`);
    assert.ok((await stat(resolve(root, 'public', reference))).isFile(), `Missing ${attribute}: ${reference}`);
  }
}
for (const [, id] of html.matchAll(/aria-controls="([^"]+)"/g)) assert.ok(ids.includes(id), `Broken aria-controls: ${id}`);
assert.ok(!/<(?:script|style)[^>]*>[^<\s]/i.test(html), 'Keep application scripts/styles in separate files');

// Validate local documentation links; remote links require manual review.
for (const path of required.filter((path) => path.endsWith('.md'))) {
  const markdown = await read(path);
  for (const [, link] of markdown.matchAll(/\]\(([^)\s]+)\)/g)) {
    if (/^(https?:|#)/.test(link)) continue;
    const target = resolve(root, dirname(path), link.split('#')[0]);
    assert.ok(target.startsWith(root), `Link escapes repository: ${link}`);
    await stat(target);
  }
}
async function walk(directory) {
  const files = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    if (['.git', 'node_modules', 'artifacts'].includes(entry.name)) continue;
    const path = resolve(directory, entry.name);
    if (entry.isDirectory()) files.push(...await walk(path)); else files.push(path);
  }
  return files;
}
const files = await walk(root);
for (const file of files) {
  const text = await readFile(file, 'utf8');
  assert.ok(!text.includes('\r\n'), `Use LF line endings: ${file}`);
  // Deliberately narrow screen, not a substitute for a dedicated secret scanner.
  const credentialPatterns = [/-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/, /gh[pousr]_[A-Za-z0-9]{30,}/, /github_pat_[A-Za-z0-9_]{40,}/, /AKIA[0-9A-Z]{16}/];
  for (const pattern of credentialPatterns) assert.ok(!pattern.test(text), `Possible credential in ${file}`);
  if (/\.(?:js|mjs)$/.test(file)) {
    const checked = spawnSync(process.execPath, ['--check', file], { encoding: 'utf8' });
    assert.equal(checked.status, 0, checked.stderr);
  }
}
assert.match(await read('LICENSE'), /Copyright \(c\) 2026 HANDKAF/);
assert.equal(await read('public/LICENSE.txt'), await read('LICENSE'), 'The deployable license must match the repository license');
console.log(`Validation passed: ${files.length} files, local links, anchors, JavaScript syntax, and basic credential patterns.`);
