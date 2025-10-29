# Product Catalog – Next.js Mini Project
Mini project untuk menampilkan daftar produk dengan fitur pencarian dan filter kategori.

### INSTALASI dan RUNNING PROGRAM
- npm install
- npm run start

### Features
- Halaman `/products` menampilkan grid produk.
- Fitur Search dan Filter by Category (client-side filtering).
- Halaman detail `/products/[id]` dengan data SSG.
- Komponen reusable: `<ProductCard />`, `<PriceTag />`.
- Menggunakan Next.js `<Image />` dan `<Link />`.
- Untuk memberikan akses dari url internal, memerlukan beberapa konfigurasi untuk mendaftarkan url di next.config.ts (digunakan untuk link gambar url eksternal pada product dan detail product)

### Tech Stack
- Next.js 16
- Tailwind CSS
- TypeScript
