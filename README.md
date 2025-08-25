# Malacca Toast — Static Site

Repo siap upload ke **GitHub** dan deploy ke **Vercel**.

## Deploy via GitHub
1. Buat repo baru di GitHub (misal: `malacca-toast`).
2. Unzip folder ini, lalu:
   ```bash
   git init
   git add .
   git commit -m "init: malacca toast static"
   git branch -M main
   git remote add origin https://github.com/USERNAME/malacca-toast.git
   git push -u origin main
   ```
3. Di Vercel: **Add New Project → Import** repo, **Framework**: Other, **Build**: kosong, **Output**: `.`.

## Atur Tautan
Edit `assets/js/main.js` → isi `order`, `lokasi`, `kemitraan`.

## Catatan
Gambar memakai URL CDN Typedream agar repo ringan.
