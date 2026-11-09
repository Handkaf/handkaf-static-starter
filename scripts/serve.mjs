import { createServer } from 'node:http';
import { readFile, realpath, stat } from 'node:fs/promises';
import { resolve, sep, extname } from 'node:path';
import { fileURLToPath } from 'node:url';

const publicRoot = fileURLToPath(new URL('../public/', import.meta.url));
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.svg': 'image/svg+xml', '.txt': 'text/plain; charset=utf-8' };

// Preview only: bind to loopback and serve the public directory exclusively.
export function createPreviewServer() {
  return createServer(async (request, response) => {
    const send = (status, body) => { response.writeHead(status, { 'Content-Type': 'text/plain; charset=utf-8' }); response.end(request.method === 'HEAD' ? undefined : body); };
    if (!['GET', 'HEAD'].includes(request.method)) {
      response.setHeader('Allow', 'GET, HEAD');
      return send(405, 'Method not allowed');
    }
    let pathname;
    try { pathname = decodeURIComponent(request.url.split('?')[0]); } catch { return send(400, 'Bad request'); }
    if (pathname.includes('\0') || pathname.includes('\\') || pathname.split('/').includes('..')) return send(403, 'Forbidden');
    try {
      const root = await realpath(publicRoot);
      const path = await realpath(resolve(root, '.' + (pathname.endsWith('/') ? pathname + 'index.html' : pathname)));
      if (!path.startsWith(root + sep)) return send(403, 'Forbidden');
      if (!(await stat(path)).isFile()) return send(404, 'Not found');
      const content = await readFile(path);
      response.writeHead(200, { 'Content-Type': types[extname(path)] || 'application/octet-stream', 'Content-Length': content.length, 'X-Content-Type-Options': 'nosniff', 'Cache-Control': 'no-store' });
      response.end(request.method === 'HEAD' ? undefined : content);
    } catch { send(404, 'Not found'); }
  });
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const port = Number(process.env.PORT || 4173);
  if (!Number.isInteger(port) || port < 1 || port > 65535) throw new Error('PORT must be between 1 and 65535.');
  const server = createPreviewServer();
  server.on('error', (error) => { console.error(error.message); process.exitCode = 1; });
  server.listen(port, '127.0.0.1', () => console.log(`Local: http://127.0.0.1:${port}`));
}
