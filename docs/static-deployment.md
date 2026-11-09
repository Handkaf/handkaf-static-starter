# Hosting statis lainnya / Other static hosts

## Bahasa Indonesia

Gunakan penyedia yang menyajikan berkas HTML/CSS/JS statis. Atur publish/output directory ke `public`. Tidak ada build command atau install command yang diperlukan. Jika penyedia mewajibkan build command, gunakan perintah no-op yang didukungnya sesuai dokumentasi penyedia.

Untuk upload manual, salin isi `public/` ke document root, termasuk `LICENSE.txt`. Untuk hosting dalam subfolder seperti `/starter/`, salin folder website ke sana dan buka `/starter/`; jalur aset bersifat relatif. Tidak ada router SPA atau aturan rewrite yang diperlukan. Contoh ini tidak menyertakan halaman 404 khusus; gunakan mekanisme bawaan hosting bila diperlukan.

Jangan memilih root repository sebagai folder publik. Jangan mengaktifkan integrasi auto-deploy atau mengubah visibility tanpa persetujuan pemilik.

Checklist sesudah upload:

- URL utama dan HTTPS benar.
- CSS, JavaScript, dan favicon berhasil dimuat; huruf besar/kecil nama berkas sesuai.
- Semua anchor dan tautan eksternal benar untuk website Anda.
- Menu, keyboard, tema, FAQ, lebar ponsel, dan zoom diperiksa.
- Hanya aset website yang tersedia; berkas repository/credential tidak terunggah.
- Salinan lisensi dan pemberitahuan hak cipta dipertahankan saat kode dibagikan.
- Backup dan cara rollback tersedia.

## English

Use a provider that serves static HTML/CSS/JS files. Set its publish/output directory to `public`. No build or install command is needed. If a provider requires a build command, use a supported no-op according to that provider's documentation.

For manual upload, copy the contents of `public/` to the document root, including `LICENSE.txt`. For a subdirectory such as `/starter/`, place the site there and visit `/starter/`; asset paths are relative. No SPA router or rewrite rules are required. There is no custom 404 page; use the host's standard mechanism if needed.

Do not use the repository root as the public directory. Do not enable automatic deployment or change visibility without owner approval.

After upload, verify the main HTTPS URL, CSS/JS/favicon loading and case-sensitive filenames, internal anchors and customized external links, mobile navigation, keyboard access, themes, FAQs, and zoom. Confirm that only site assets were uploaded, license/copyright notices remain with distributed code, and a backup and rollback path are available.
