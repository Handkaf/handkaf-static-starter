# Deployment Hostinger / Hostinger deployment

## Bahasa Indonesia

Panduan manual untuk paket web hosting yang mendukung upload HTML/CSS/JS melalui File Manager. Ini tidak berlaku untuk editor Hostinger Website Builder. Starter tidak memerlukan WordPress, PHP, database, atau Node.js di hosting.

1. Jalankan `npm run check` dan periksa tampilan lokal sesuai [panduan instalasi](installation.md).
2. Pastikan domain/site dan document root tujuan benar. Buat backup berkas website lama sebelum mengganti apa pun. Gunakan staging atau subfolder kosong untuk percobaan.
3. Masuk ke hPanel, pilih website yang benar, lalu buka File Manager. Label menu dapat berubah. Buka document root domain tersebut, biasanya `public_html/`.
4. Upload **isi** `public/`: `index.html`, `LICENSE.txt`, `css/`, `js/`, dan `assets/`. Hasilnya harus `public_html/index.html`, bukan `public_html/public/index.html`. Pertahankan struktur dan huruf besar/kecil nama berkas serta `LICENSE.txt` bersama kode website.
5. Jika memakai ZIP, ZIP hanya isi `public/`, ekstrak ke folder tujuan, periksa hasilnya, lalu hapus arsip upload agar tidak menjadi unduhan publik. Jangan upload root repository, `.git`, `.env`, tes, atau dokumentasi internal.
6. Setelah domain dan sertifikat siap, buka URL HTTPS. Pastikan tidak ada peringatan sertifikat, aset 404, atau mixed content. Uji navigasi, tema, FAQ, mobile, dan refresh.
7. Jika versi lama masih terlihat, periksa folder tujuan dan cache browser/hosting. Jangan mengubah DNS, menghapus website lama, atau menimpa berkas lain tanpa review dampaknya.

Untuk rollback, kembalikan backup berkas website sebelumnya ke folder yang sama lalu verifikasi ulang. Tidak ada migrasi data pada starter ini. GitHub Actions hanya memvalidasi; tidak menyimpan credential hosting atau melakukan deployment.

## English

These manual steps target web hosting plans that support HTML/CSS/JS uploads through File Manager, not the Hostinger Website Builder editor. No WordPress, PHP, database, or hosted Node.js is required.

1. Run `npm run check` and review the local site using the [installation guide](installation.md).
2. Verify the target site/domain and document root. Back up the existing website before replacing files. Use staging or an empty subfolder for a trial.
3. In hPanel, select the correct website and open File Manager. Menu labels may change. Open that domain's document root, usually `public_html/`.
4. Upload the **contents** of `public/`: `index.html`, `LICENSE.txt`, `css/`, `js/`, and `assets/`. The result should be `public_html/index.html`, not `public_html/public/index.html`. Preserve directory structure and filename case, and keep `LICENSE.txt` with the website code.
5. If using ZIP, archive only the contents of `public/`, extract into the target, inspect the result, and remove the uploaded archive so it is not publicly downloadable. Never upload the repository root, `.git`, `.env`, tests, or internal documentation.
6. Once the domain and certificate are ready, open the HTTPS URL. Check for certificate warnings, missing assets, and mixed content; test navigation, themes, FAQs, mobile widths, and refresh.
7. If old content remains, check the target directory and browser/hosting caches. Review impacts before changing DNS, deleting an old website, or replacing unrelated files.

To roll back, restore the previous website backup in the same directory and verify again. This starter has no data migrations. GitHub Actions validates only; it stores no hosting credentials and performs no deployment.

## Official references

Checked November 9, 2026. The site owner must approve an actual deployment separately.

- [Hostinger: File Manager](https://www.hostinger.com/support/4548688-basic-actions-in-the-file-manager-in-hostinger/)
- [Hostinger: Upload an archive through File Manager](https://www.hostinger.com/support/1869114-how-to-upload-backups-with-file-manager-in-hostinger/)
