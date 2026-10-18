export const SITE_CONFIG = {
  name: "DanaTunai.my.id",
  agentName: process.env.NEXT_PUBLIC_AGENT_NAME || "Irwan Dharmawan",
  partnerBrand: "BFI Finance Indonesia",
  phone: "0812-3456-7890",
  whatsappNumber: process.env.NEXT_PUBLIC_WA_NUMBER || "6281234567890",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://danatunai.my.id",
  metaPixelId: process.env.NEXT_PUBLIC_FB_PIXEL_ID || "",
  tagline: "Pinjaman Dana Tunai Jaminan BPKB Mobil & Motor Cepat & Resmi BFI Finance",
  description: "Dapatkan pinjaman dana tunai jaminan BPKB Mobil & Motor proses cepat 1 hari cair, bunga rendah mulai 0.6%, plafon tinggi hingga 85% nilai kendaraan, resmi berizin & diawasi OJK.",
};

export const LOAN_PRODUCTS = [
  {
    id: "bpkb-mobil",
    title: "Gadai BPKB Mobil",
    shortTitle: "BPKB Mobil",
    slug: "/bpkb-mobil",
    badge: "Plafon Hingga Miliaran",
    rate: "Bunga mulai 0.6% / bln",
    disbursement: "Pencairan s/d 85%",
    tenor: "Tenor 12 s/d 48 Bulan",
    yearRequirement: "Minimal Tahun 2008 (Passanger) / 2013 (Komersial)",
    processTime: "1 Hari Kerja Cair",
    description: "Solusi modal usaha, renovasi, atau kebutuhan darurat dengan jaminan BPKB mobil segala tipe (Sedan, MPV, SUV, Truk, Pick Up). BPKB aman, mobil tetap bisa digunakan.",
    features: [
      "Plafon mulai Rp 20 Juta hingga Rp 2 Miliar+",
      "Bunga ringan mulai 0.6% flat per bulan",
      "Pencairan hingga 85% dari taksiran harga kendaraan",
      "Plat nomor daerah seluruh Indonesia bisa diproses",
      "Tanpa BI Checking ketat / SLIK Fleksibel",
      "Pajak mati / BPKB belum balik nama bisa dibantu",
    ],
  },
  {
    id: "bpkb-motor",
    title: "Gadai BPKB Motor",
    shortTitle: "BPKB Motor",
    slug: "/bpkb-motor",
    badge: "Cair Super Cepat 1-2 Jam",
    rate: "Bunga kompetitif",
    disbursement: "Pencairan s/d Rp 50 Juta",
    tenor: "Tenor 6 s/d 36 Bulan",
    yearRequirement: "Minimal Tahun 2013 (Honda, Yamaha, Kawasaki, Suzuki)",
    processTime: "1 - 2 Jam Cair Langsung",
    description: "Solusi dana cepat untuk kebutuhan mendadak dengan jaminan BPKB motor. Motor tetap Anda pakai harian untuk bekerja atau usaha.",
    features: [
      "Plafon pinjaman Rp 2 Juta s/d Rp 50 Juta",
      "Proses kilat bisa cair dalam 1 - 2 jam",
      "Pajak mati / telat bisa dibantu sampai tuntas",
      "Motor tetap bisa dipakai beraktivitas sehari-hari",
      "Syarat sangat mudah, verifikasi cepat",
      "Bebas biaya survei & tanpa potongan tersembunyi",
    ],
  },
];

export const TRUST_STATS = [
  { value: "1 Hari", label: "Proses Cepat Cair", desc: "Verifikasi kilat tanpa ribet" },
  { value: "0.6%", label: "Suku Bunga Ringan", desc: "Mulai 0.6% flat per bulan" },
  { value: "85%", label: "Maksimal Pencairan", desc: "Taksiran nilai tertinggi" },
  { value: "100% Resmi", label: "Terdaftar di OJK", desc: "Mitra resmi BFI Finance Tbk" },
];

export const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Konsultasi / Isi Formulir",
    desc: "Hubungi via WhatsApp atau isi formulir pengajuan online untuk konsultasi taksiran nilai pencairan maksimal Anda.",
  },
  {
    step: "02",
    title: "Kirim Dokumen & Taksiran",
    desc: "Kirim foto KTP, KK, STNK, dan BPKB via WhatsApp. Tim kami langsung menilai taksiran unit dan mengajukan plafon maksimal.",
  },
  {
    step: "03",
    title: "Survei Fleksibel",
    desc: "Proses survei unit dan verifikasi fisik bisa langsung di rumah Anda atau kantor cabang BFI Finance terdekat.",
  },
  {
    step: "04",
    title: "Dana Cair ke Rekening",
    desc: "Setelah disetujui, dana langsung ditransfer ke rekening pribadi Anda secara utuh tanpa potongan aneh-aneh.",
  },
];

export const TESTIMONIALS = [
  {
    name: "Hendro Saputro",
    location: "Bekasi, Jawa Barat",
    loanType: "BPKB Toyota Avanza 2017",
    amount: "Cair Rp 95.000.000",
    comment: "Prosesnya sangat transparan dan cepat lewat Mas Irwan. Pagi konsultasi lewat WA, sore disurvei, besok siang dana sudah masuk rekening untuk tambahan modal toko bangunan saya. Mantap!",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    rating: 5,
  },
  {
    name: "Siti Rahmawati",
    location: "Surabaya, Jawa Timur",
    loanType: "BPKB Honda Scoopy 2021",
    amount: "Cair Rp 11.500.000",
    comment: "Awalnya ragu karena pajak motor saya mati 1 tahun, tapi ternyata dibantu pengurusannya dan bisa cair di hari yang sama. Motor tetap saya pakai jualan online.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    rating: 5,
  },
  {
    name: "Agus Pratama",
    location: "Tangerang, Banten",
    loanType: "BPKB Mitsubishi Pajero 2019",
    amount: "Cair Rp 320.000.000",
    comment: "Pelayanan sangat ramah dan profesional. Angsuran jelas, simulasi di web akurat, dan tidak ada biaya tersembunyi. Sangat recommended bagi yang butuh dana cepat.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
    rating: 5,
  },
];

export const FAQ_LIST = [
  {
    question: "Apakah BPKB kendaraan aman dijaminkan?",
    answer: "Sangat aman. BPKB disimpan langsung di brankas kantor cabang resmi PT BFI Finance Indonesia Tbk yang terdaftar dan diawasi oleh Otoritas Jasa Keuangan (OJK). Anda akan menerima bukti tanda terima penyerahan BPKB resmi.",
  },
  {
    question: "Apakah kendaraan ditarik atau ditahan?",
    answer: "Tidak! Yang dijaminkan hanya buku BPKB saja. Kendaraan fisik (mobil atau motor) tetap berada di tangan Anda dan tetap bebas Anda gunakan sehari-hari untuk operasional keluarga maupun usaha.",
  },
  {
    question: "Bagaimana jika pajak STNK mati atau plat daerah?",
    answer: "Bisa diproses! Pajak kendaraan yang mati/telat bisa dibantu pengurusannya (bisa dipotong dari pencairan pinjaman), dan kendaraan plat luar daerah (seluruh wilayah Indonesia) tetap bisa kami layani.",
  },
  {
    question: "Apakah bisa mengajukan jika belum atas nama sendiri?",
    answer: "Bisa! Syaratnya cukup melampirkan bukti kuitansi pembelian jual-beli atau dokumen pendukung kepemilikan yang sah.",
  },
  {
    question: "Berapa lama proses pencairan dana?",
    answer: "Untuk jaminan BPKB Motor rata-rata 1 sampai 2 jam cair setelah berkas lengkap. Untuk jaminan BPKB Mobil umumnya berkisar 1 hari kerja setelah survei dan cek fisik unit kendaraan.",
  },
  {
    question: "Apa saja syarat utama pengajuan pinjaman?",
    answer: "Syarat mudah: KTP pemohon & pasangan (jika menikah), Kartu Keluarga (KK), Bukti tempat tinggal (PBB/rek listrik), Bukti penghasilan (slip gaji/mutasi rekening 3 bulan), serta STNK & BPKB asli kendaraan.",
  },
];
