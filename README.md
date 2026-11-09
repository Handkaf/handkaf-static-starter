# HANDKAF Static Starter

An original, buildless HTML/CSS/JavaScript website starter for Hostinger and other static hosts.

[![Validate starter](https://github.com/Handkaf/handkaf-static-starter/actions/workflows/validate.yml/badge.svg?branch=main)](https://github.com/Handkaf/handkaf-static-starter/actions/workflows/validate.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

[Bahasa Indonesia](#bahasa-indonesia) · [English](#english)

## Bahasa Indonesia

Fondasi website sederhana untuk profil usaha, portofolio, atau halaman proyek. Seluruh kode aplikasi dan ilustrasi SVG/CSS dibuat khusus untuk starter ini; tidak mengambil kode dari produk proprietary atau proyek HANDKAF lain.

### Fitur

- Tata letak responsif, navigasi seluler dengan dukungan Escape dan fokus keyboard.
- Tema terang/gelap mengikuti sistem; pilihan pengguna disimpan secara lokal bila tersedia.
- HTML semantik, skip link, FAQ native, dan dukungan reduced motion.
- Konten dan navigasi tetap tersedia tanpa JavaScript.
- Tanpa framework, font eksternal, analytics, backend, atau dependensi runtime.
- README ID/EN, panduan hosting, pemeriksaan otomatis, dan tes basic tanpa paket tambahan.

### Mulai

```sh
git clone https://github.com/Handkaf/handkaf-static-starter.git
cd handkaf-static-starter
npm start
```

Buka `http://127.0.0.1:4173`. Node.js 22+ hanya diperlukan untuk alat lokal dan pemeriksaan; tidak diperlukan di hosting. Tidak perlu `npm install` karena tidak ada dependensi. Alternatif: buka `public/index.html` langsung; preferensi tema pada `file://` dapat berbeda antar browser. Jika repository belum dapat diakses publik, clone memerlukan akun yang diberi akses.

```sh
npm run check
```

Perintah ini memeriksa berkas wajib, referensi berkas/anchor lokal, sintaks JavaScript, beberapa pola credential, serta menjalankan tes perilaku navigasi/tema dan server pratinjau. Ini bukan audit keamanan lengkap, validator standar HTML/CSS, atau sertifikasi aksesibilitas. Periksa tampilan dan keyboard di browser sebelum rilis.

### Ubah dan unggah

Ubah teks dan metadata di [public/index.html](public/index.html), token warna dan layout di [styles.css](public/css/styles.css), interaksi di [main.js](public/js/main.js), serta [favicon](public/assets/favicon.svg). Halaman contoh berbahasa Indonesia; README dan panduan tersedia ID/EN. Ganti identitas, tautan repository, dan teks demo sebelum digunakan sebagai website Anda.

Unggah **isi folder `public/` saja** ke document root, misalnya `public_html/` pada Hostinger. Aset menggunakan jalur relatif sehingga dapat dipasang di subfolder. Tidak ada proses build, database, formulir pengiriman, atau konfigurasi server wajib. Sertakan `public/LICENSE.txt` yang berisi pemberitahuan hak cipta dan teks MIT lengkap. Perubahan repository tidak otomatis melakukan deployment.

- [Instalasi dan pratinjau](docs/installation.md)
- [Deployment Hostinger](docs/hostinger-deployment.md)
- [Hosting statis lainnya dan checklist](docs/static-deployment.md)
- [Persiapan publikasi dan rilis manual](docs/releasing.md) · [Changelog](CHANGELOG.md)
- [Kontribusi](CONTRIBUTING.md) · [Pelaporan keamanan](SECURITY.md)

### Lisensi dan status

[MIT](LICENSE), Copyright (c) 2026 HANDKAF. Pertahankan teks lisensi dan pemberitahuan hak cipta saat menggunakan atau mendistribusikan kode. Lisensi kode tidak memberikan hak atas merek HANDKAF atau Hostinger. Proyek independen; tidak berafiliasi atau disponsori Hostinger.

Panduan Hostinger mencakup upload manual ke hosting statis. Kompatibilitas tombol deployment sekali klik dan penerimaan dalam program Open-source Partners belum diverifikasi. Starter ini tidak menyertakan kode referral atau integrasi auto-deploy. Publikasi repository, rilis versi, pendaftaran program, dan deployment website adalah langkah terpisah yang dikelola pemilik.

## English

A simple foundation for a business profile, portfolio, or project page. Application code and SVG/CSS artwork were created specifically for this starter without copying proprietary code or other HANDKAF projects.

### Features

- Responsive layout and mobile navigation with Escape and keyboard focus handling.
- System-aware light/dark theme with local preference storage when available.
- Semantic HTML, a skip link, native FAQ disclosure, and reduced-motion support.
- Content and navigation remain available without JavaScript.
- No framework, external fonts, analytics, backend, or runtime dependencies.
- Bilingual documentation, hosting instructions, automated checks, and basic tests without extra packages.

### Quick start

```sh
git clone https://github.com/Handkaf/handkaf-static-starter.git
cd handkaf-static-starter
npm start
```

Open `http://127.0.0.1:4173`. Node.js 22+ is used only for local tools and checks; the deployed site needs no Node.js. No `npm install` is needed. You can also open `public/index.html` directly, although theme storage on `file://` varies by browser. If the repository is not yet public, cloning requires an authorized account.

Run `npm run check` before submitting changes. It checks required files, local file/anchor references, JavaScript syntax, a few credential patterns, and behavior tests for navigation, themes, and the preview server. It is not a comprehensive security audit, HTML/CSS standards validator, or accessibility certification. Review the site visually and with a keyboard before release.

### Customize and deploy

Edit [HTML content and metadata](public/index.html), [CSS tokens and layout](public/css/styles.css), [JavaScript behavior](public/js/main.js), and the [favicon](public/assets/favicon.svg). The demo page is in Indonesian; the README and guides cover Indonesian and English. Replace demo identity, repository links, and content before using it for your own website.

Upload **only the contents of `public/`** to your host's document root, such as `public_html/` on Hostinger. Relative asset paths support subdirectory hosting. No build, database, submission form, or mandatory server configuration is included. Keep `public/LICENSE.txt`, containing the copyright notice and full MIT text, with the deployed files. Repository changes do not automatically deploy the site.

- [Installation and preview](docs/installation.md)
- [Hostinger deployment](docs/hostinger-deployment.md)
- [Other static hosts and checklist](docs/static-deployment.md)
- [Publication and manual releases](docs/releasing.md) · [Changelog](CHANGELOG.md)
- [Contributing](CONTRIBUTING.md) · [Security reporting](SECURITY.md)

### License and status

[MIT](LICENSE), Copyright (c) 2026 HANDKAF. Keep the license and copyright notices when using or distributing the code. The code license does not grant trademark rights to HANDKAF or Hostinger. This is an independent project, not affiliated with or sponsored by Hostinger.

The Hostinger guide covers manual uploads to static hosting. One-click deployment compatibility and acceptance into the Open-source Partners program have not been verified. This starter includes no referral code or automatic deployment integration. Repository publication, version releases, program registration, and website deployment are separate steps managed by the owner.

## Structure

```text
public/                  # Deploy this directory's contents only
  index.html
  LICENSE.txt
  css/styles.css
  js/main.js
  assets/favicon.svg
scripts/                 # Local preview and basic validation
test/                    # Node.js behavior and HTTP tests
docs/                    # ID/EN installation and hosting guides
.github/workflows/       # Validation only; no deployment
```
