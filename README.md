# DanaTunai.my.id — Landing Page & Lead Gen Mitra Resmi BFI Finance (Irwan Dharmawan)

Platform landing page dan kalkulator simulasi pinjaman dana tunai jaminan BPKB Mobil & Motor yang dirancang khusus untuk konversi tinggi Facebook Ads (Meta Pixel) & Google Ads.

---

## 🌟 Fitur Utama

1. **Integrasi Meta Pixel (Facebook Ads) Otomatis**:
   - Tracking event `PageView` saat pengunjung membuka setiap halaman.
   - Tracking event `Lead` otomatis saat pengunjung mengklik tombol WhatsApp atau menggunakan kalkulator pinjaman.
2. **Multipage Architecture (Next.js 14 App Router)**:
   - `/` : Landing Page utama lengkap dengan Hero, Quick Calculator, Keunggulan, Testimoni, FAQ, dan Call to Action.
   - `/bpkb-mobil` : Halaman khusus gadai BPKB Mobil (Sedan, MPV, SUV, Truk, Pick Up) plafon hingga Rp 2 Miliar+, bunga mulai 0.6%.
   - `/bpkb-motor` : Halaman khusus gadai BPKB Motor proses kilat 1-2 jam cair plafon s/d Rp 50 Juta.
   - `/cek-limit` : Kalkulator simulasi angsuran interaktif & tabel estimasi cicilan per bulan.
3. **Kalkulator Pinjaman Interaktif**:
   - Menghitung estimasi angsuran secara real-time berdasarkan pilihan kendaraan, plafon, dan tenor (6 s/d 48 bulan).
   - Tombol langsung mengarah ke WhatsApp dengan format pesan rapi yang terisi otomatis.
4. **Teknis & Programmatic SEO**:
   - JSON-LD Structured Data `FinancialService` untuk pencarian Google.
   - OpenGraph & Twitter Card metadata.
   - Dynamic `sitemap.ts` & `robots.ts`.
5. **Mobile-First & Ultra Fast**:
   - Desain responsif, modern, dan bersih dengan Tailwind CSS.
   - Tombol Floating WhatsApp yang menarik perhatian di pojok kanan bawah.

---

## ⚙️ Cara Menjalankan di Lokal

### 1. Konfigurasi Environment (`.env.local`)
Buka file `.env.local` dan sesuaikan nomor WhatsApp serta ID Meta Pixel Anda:
```env
NEXT_PUBLIC_WA_NUMBER=6281234567890
NEXT_PUBLIC_AGENT_NAME="Irwan Dharmawan"
NEXT_PUBLIC_SITE_NAME="DanaTunai.my.id"
NEXT_PUBLIC_SITE_URL="https://danatunai.my.id"
NEXT_PUBLIC_FB_PIXEL_ID=""
```

### 2. Jalankan Server Development
```bash
npm run dev
```
Buka browser di [http://localhost:3003](http://localhost:3003).

### 3. Build untuk Produksi
```bash
npm run build
npm run start
```
Atau deploy langsung ke **Vercel** cukup dengan menghubungkan repositori GitHub ini.
