# Publikasi dan rilis manual / Publication and manual releases

## Bahasa Indonesia

Panduan ini membantu pemilik meninjau dan menerbitkan proyek secara manual. Tidak ada perintah atau workflow yang otomatis mengubah visibility, membuat rilis, atau melakukan deployment.

### Identitas pekerjaan di GitHub

1. Masuk ke akun GitHub Anda sendiri sebelum membuat branch, commit, PR, atau merge. Periksa nama akun pada setiap langkah konfirmasi.
2. Untuk pekerjaan melalui Git lokal, periksa `git config user.name` dan `git config user.email` dari clone yang benar. GitHub menghubungkan commit ke akun berdasarkan email yang terasosiasi dengan akun tersebut. Nama Git saja tidak menjamin atribusi akun.
3. Bila ingin menjaga email tetap privat pada commit mendatang, salin alamat `noreply` yang ditampilkan di **GitHub Settings → Emails** dan gunakan alamat tersebut untuk clone ini. Pengaturan email Git lokal dan pengaturan privasi email GitHub untuk operasi web adalah pengaturan yang berbeda.
4. Mengubah email sekarang tidak mengubah email pada commit lama. Tinjau riwayat sebelum publikasi. Jangan menulis ulang riwayat atau memaksa push tanpa rencana dan persetujuan pemilik.
5. Lakukan commit, push, pembuatan PR, dan merge sendiri jika Anda ingin mengendalikan langsung tindakan akun tersebut. Atribusi author commit dan akun yang melakukan merge dicatat secara terpisah oleh GitHub.

### Sebelum menjadi Public

- Tinjau kode terbaru, seluruh branch/tag yang masih ada, riwayat commit, komentar/PR/issue, serta riwayat dan log GitHub Actions. Hindari credential, informasi pelanggan, data internal, atau alamat email yang tidak ingin dipublikasikan.
- Jalankan `npm run check`. Hasil pemeriksaan pola credential bawaan terbatas; lakukan peninjauan tambahan sesuai kebutuhan proyek.
- Pastikan hak untuk menerbitkan kode/aset serta lisensinya. Pertahankan [LICENSE](../LICENSE) dan salinannya di `public/LICENSE.txt`.
- Verifikasi panduan mulai, tautan, dan tampilan website. Perubahan dokumentasi saja tidak berarti semua browser atau layanan hosting telah diuji ulang.
- Pastikan GitHub Actions untuk commit PR yang akan di-merge berhasil. Pemilik meninjau PR dan melakukan merge sendiri.

### Publikasi repository

1. Setelah semua keputusan review selesai, pemilik membuka **Settings → General → Danger Zone → Change repository visibility**, memilih Public, membaca konsekuensinya, lalu mengonfirmasi sendiri. Nama menu dapat berubah.
2. Publikasi membuat kode, riwayat, dan log Actions dapat dilihat pihak lain. Menjadikannya Private kembali tidak menarik salinan yang sudah diambil orang lain.
3. Setelah menjadi Public, aktifkan **Settings → Advanced Security → Private vulnerability reporting** jika tersedia. Verifikasi tombol **Security → Advisories → Report a vulnerability** dapat digunakan; ikuti [SECURITY.md](../SECURITY.md).
4. Periksa repository dari sesi yang tidak masuk GitHub agar README, LICENSE, tautan, dan berkas benar-benar dapat dibaca publik.

### Rilis versi dan hosting

Publikasi kode di GitHub tidak otomatis membuat rilis versi atau website live. Untuk rilis versi, pemilik memilih commit `main` yang lolos pemeriksaan, memastikan nomor versi `package.json` dan [CHANGELOG.md](../CHANGELOG.md) sesuai, lalu membuat tag dan GitHub Release secara manual. Jangan menyatakan tanggal rilis sebelum langkah tersebut selesai.

Nilai `private: true` pada `package.json` mencegah publikasi paket ke npm; ini tidak mengatur visibility repository GitHub. Starter ini tidak memerlukan publikasi npm.

Upload manual website mengikuti [panduan Hostinger](hostinger-deployment.md) atau [panduan hosting statis](static-deployment.md). Paket website hanya berisi isi `public/`, termasuk `LICENSE.txt`; jangan upload seluruh source repository, audit lokal, atau data Git.

Untuk Program Hostinger Open-source Partners, periksa formulir dan ketentuan terkini secara terpisah. Repository Public dan lisensi MIT tidak menjamin penerimaan atau kompatibilitas deployment sekali klik. Jangan menambahkan kode referral contoh sebagai kode Anda sendiri. Tidak ada pendaftaran program dalam workflow repository ini.

## English

This guide covers owner-controlled, manual publication. No command or workflow here automatically changes visibility, creates a release, or deploys a site.

### GitHub identity

Sign into your own GitHub account before creating branches, commits, pull requests, or merges, and check the account shown at confirmation. In a local clone, inspect `git config user.name` and `git config user.email`; GitHub associates commits using an email linked to the account, not merely the Git author name. To keep future commit email private, copy your account's `noreply` address from **Settings → Emails** and configure it for that clone. Local Git email and GitHub's email privacy settings for web operations are separate settings. Changing either does not remove email from old commits. Review existing history before publishing, and do not rewrite history or force-push without an agreed plan. Commit authorship and the account performing a merge are recorded separately.

### Review before publication

Review current code, all retained branches/tags, commit history, issue/PR comments, and Actions history/logs for credentials, private information, and author email exposure. Run `npm run check`; its credential patterns have limited coverage. Confirm code/asset rights and preserve the MIT notices. Check usage documentation, links, and relevant browser behavior. Documentation-only edits do not imply fresh testing of every browser or hosting service. Require successful Actions for the PR commit being merged. The owner reviews and merges manually.

### Publish, release, and host separately

After review, the owner can choose Public under **Settings → General → Danger Zone → Change repository visibility**, review the consequences, and confirm manually. Menu labels may change. Code, history, and Actions logs become visible; making a repository private later cannot recall copies already taken. Once public, enable **Private vulnerability reporting** under **Settings → Advanced Security** if available, verify the private reporting button, and check repository access from a signed-out session.

Publication does not create a version release or deploy a website. To release, select a passing `main` commit, align the package version and changelog, then manually create its tag and GitHub Release. `private: true` in `package.json` prevents npm publication; it does not control GitHub repository visibility. This starter needs no npm publication.

For hosting, upload only the contents of `public/`, including `LICENSE.txt`. Keep source-repository files, local audits, and Git data out of the hosting document root. Open-source Partners registration is a separate process: a public MIT repository does not guarantee approval or one-click compatibility, and example referral codes must not be presented as your own.

## Official references

- [GitHub: repository visibility](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/setting-repository-visibility)
- [GitHub: commit email and attribution](https://docs.github.com/en/account-and-profile/how-tos/email-preferences/setting-your-commit-email-address)
- [GitHub: private vulnerability reporting](https://docs.github.com/en/code-security/how-tos/report-and-fix-vulnerabilities/configure-vulnerability-reporting/configure-for-a-repository)
- [Hostinger: Open-source Partners](https://www.hostinger.com/open-source-partners)
