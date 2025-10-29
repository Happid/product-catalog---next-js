## Q1. Pilih SSR, SSG, atau CSR untuk dashboard dinamis dan jelaskan alasannya.
Jawaban:
SSR (Server-Side Rendering) untuk dashboard dinamis, karena data selalu berubah. SSR memastikan pengguna selalu mendapatkan data terbaru.

---

## Q2. Sebutkan 3 kasus kapan komponen harus menjadi Client Component.
1. Saat membutuhkan interaksi component dan perubahan di client (misal: form input, search, filter).
2. Saat menggunakan state atau hooks (useState, useEffect).
3. Saat menggunakan event listener (onClick, onChange).

---

## Q3. Sebutkan 3 penyebab Next.js app lambat dan cara mengatasinya.
1. Bundle terlalu besar → gunakan code splitting & dynamic import dan Reusable Component.
2. Gambar besar tanpa optimasi → gunakan `<Image />` bawaan Next.js dan format webp.
3. Gunakan Lazy Loading untuk memuat gambar yang besar atau jika data yang terlalu besar bisa juga gunakan webworker.

---

## Q4. Di mana harus dilakukan validasi role premium agar data sensitif tidak bocor?
Validasi harus dilakukan di server-side (API Route / server action) agar data sensitif tidak bisa diakses langsung dari client.
contoh bisa menggunkan httpOnly cookies, jangan simpan di local storage karena bisa diakses melalui devtools.
