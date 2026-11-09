# Keamanan / Security

## Bahasa Indonesia

Starter ini menyediakan contoh berkas statis dan alat pratinjau lokal. Tidak ada backend, autentikasi, pemrosesan pembayaran, atau pengiriman formulir. Laporan terhadap kode terbaru pada `main` diterima untuk ditinjau; belum ada jaminan masa dukungan atau SLA respons. Pengguna versi lama sebaiknya memeriksa apakah masalah juga terjadi pada `main` terbaru sebelum membuat laporan.

Jangan kirim credential, kunci privat, backup, atau data pelanggan ke repository atau folder `public/`. Semua yang dikirim ke browser dapat dibaca pengunjung; JavaScript browser bukan tempat menyimpan rahasia. `.gitignore` tidak menghapus rahasia yang sudah ter-commit. Jika terjadi kebocoran, cabut/rotasi credential dahulu, kemudian koordinasikan penanganan riwayat dengan pemilik.

Untuk kerentanan, gunakan **Security → Advisories → Report a vulnerability** bila private reporting tersedia. Jika tombol tidak tersedia, buka issue yang hanya meminta pemilik repository `abialkaf` mengaktifkan private vulnerability reporting atau menyediakan kanal privat. Jangan sertakan detail kerentanan, langkah eksploit, credential, atau data sensitif dalam permintaan publik tersebut; tunggu sampai kanal privat tersedia. Jika Anda sudah memiliki kanal privat dengan pemilik, gunakan kanal tersebut. Tidak ada alamat email keamanan yang ditetapkan dalam proyek ini.

Laporan ideal mencakup commit/versi terdampak, langkah reproduksi minimal dengan data sintetis, dampak, dan saran mitigasi. Hindari menguji sistem pihak lain tanpa izin. Pemeriksaan pola credential bawaan bersifat terbatas; bukan pengganti audit, secret scanner khusus, atau pengamanan hosting. Server `npm start` hanya untuk loopback/pengembangan; gunakan server produksi dari penyedia hosting untuk publikasi.

## English

This starter provides static example files and a local preview tool. There is no backend, authentication, payment processing, or form submission. Reports affecting the latest code on `main` are accepted for review; no support period or response SLA is promised. Users of older versions should check whether the issue also occurs on the latest `main` before reporting it.

Never commit credentials, private keys, backups, or customer data, or place them under `public/`. Anything sent to the browser is readable by visitors; browser JavaScript cannot keep secrets. `.gitignore` does not remove previously committed secrets. For a leak, revoke/rotate the credential first, then coordinate history handling with the owner.

Use **Security → Advisories → Report a vulnerability** if private reporting is available. If the button is unavailable, open an issue asking only that repository owner `abialkaf` enable private vulnerability reporting or provide a private channel. Do not include vulnerability details, exploitation steps, credentials, or sensitive data in that public request; wait until a private channel is available. If you already have a private channel with the owner, use it. This project has no designated security email address.

Include the affected commit/version, minimal reproduction using synthetic data, impact, and suggested mitigation. Do not test third-party systems without permission. Built-in credential patterns are limited and do not replace an audit, dedicated secret scanner, or hosting security controls. The `npm start` server is for loopback/development only; use your hosting provider's production server for publication.
