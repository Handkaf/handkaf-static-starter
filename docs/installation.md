# Instalasi / Installation

## Bahasa Indonesia

1. Clone repository dengan akun GitHub yang diberi akses, atau gunakan **Code → Download ZIP**, lalu ekstrak. Jangan masukkan token akses ke URL clone.
2. Untuk penggunaan tanpa alat pengembang, buka `public/index.html` langsung. Tema yang tersimpan mungkin tidak bertahan di mode `file://`.
3. Untuk pratinjau HTTP, pasang Node.js 22+ dari [situs resmi Node.js](https://nodejs.org/en/download). Dari root repository jalankan `npm start`. Tidak perlu menginstal paket.
4. Buka `http://127.0.0.1:4173`. Server hanya mendengarkan loopback dan hanya menyajikan folder `public/`. Hentikan dengan Ctrl+C. Ini server pengembangan, bukan server produksi.
5. Jalankan `npm run check`. Di PowerShell yang membatasi skrip `npm.ps1`, gunakan `npm.cmd start` dan `npm.cmd run check`.

Jika port dipakai aplikasi lain, pilih port berbeda. PowerShell:

```powershell
$env:PORT = '4174'
npm.cmd start
```

macOS/Linux:

```sh
PORT=4174 npm start
```

Sesuaikan teks, judul, deskripsi, bahasa `lang`, tautan, favicon, dan warna sebelum publikasi. Theme key `handkaf-theme` hanya menyimpan pilihan `light`/`dark`, tidak dikirim ke server oleh starter. Hapus key tersebut melalui pengaturan penyimpanan situs browser untuk kembali mengikuti tema sistem.

Periksa desktop dan ponsel; gunakan Tab/Enter, buka menu, tutup dengan Escape, coba FAQ, ubah tema dan refresh. Matikan JavaScript untuk memastikan konten tetap dapat dibaca. Coba zoom 200% dan pengaturan reduced motion. Panduan [deployment Hostinger](hostinger-deployment.md) dan [hosting statis](static-deployment.md) menjelaskan langkah berikutnya.

## English

1. Clone with an authorized GitHub account or choose **Code → Download ZIP** and extract it. Do not put access tokens in clone URLs.
2. For a tool-free preview, open `public/index.html`. Stored themes may not persist under `file://`.
3. For HTTP preview, install Node.js 22+ from the [official Node.js website](https://nodejs.org/en/download), then run `npm start` from the repository root. There are no packages to install.
4. Open `http://127.0.0.1:4173`. The preview server binds only to loopback and serves only `public/`. Stop it with Ctrl+C. It is a development server, not a production server.
5. Run `npm run check`. If PowerShell blocks `npm.ps1`, use `npm.cmd start` and `npm.cmd run check`.

If the port is busy, set `PORT` as shown above and use the corresponding URL. Replace the content, title, description, `lang`, links, favicon, and colors before publishing. The `handkaf-theme` storage key contains only `light`/`dark`; this starter does not transmit it to a server. Remove that key using browser site-storage settings to follow the system theme again.

Review desktop and mobile widths, Tab/Enter navigation, menu Escape behavior, FAQs, theme changes across refresh, JavaScript-disabled reading, 200% zoom, and reduced motion. Continue with [Hostinger deployment](hostinger-deployment.md) or [other static hosts](static-deployment.md).
