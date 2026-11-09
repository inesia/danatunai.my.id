import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  Lock,
  FileText,
  CheckCircle2,
  XCircle,
  AlertCircle,
  Phone,
  ChevronRight,
  ExternalLink,
  Info,
  Car,
  Zap,
  Bike,
  UserCheck,
  HelpCircle,
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Kebijakan Privasi — DanaTunai.my.id Mitra Agen BFI Finance",
  description:
    "Kebijakan Privasi DanaTunai.my.id menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi data pribadi Anda saat Anda mengisi formulir di website dan iklan kami.",
  keywords: [
    "kebijakan privasi danatunai",
    "privacy policy danatunai",
    "perlindungan data pinjaman bpkb",
    "kebijakan data bfi finance agen",
  ],
  alternates: {
    canonical: "/kebijakan-privasi",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: `${SITE_CONFIG.siteUrl}/kebijakan-privasi`,
    title: "Kebijakan Privasi — DanaTunai.my.id Mitra Agen BFI Finance",
    description:
      "Penjelasan resmi bagaimana kami mengumpulkan, menggunakan, dan melindungi data pribadi Anda saat mengisi formulir layanan.",
    images: ["/logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kebijakan Privasi — DanaTunai.my.id Mitra Agen BFI Finance",
    description:
      "Perlindungan dan transparansi pemrosesan data pribadi pengunjung di DanaTunai.my.id.",
    images: ["/logo.png"],
  },
};

export default function KebijakanPrivasiPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Beranda",
        "item": SITE_CONFIG.siteUrl,
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Kebijakan Privasi",
        "item": `${SITE_CONFIG.siteUrl}/kebijakan-privasi`,
      },
    ],
  };

  return (
    <div className="py-8 md:py-12">
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center space-x-2 text-xs sm:text-sm text-[#64748B]">
            <li>
              <Link href="/" className="hover:text-[#0A335D] transition-colors">
                Beranda
              </Link>
            </li>
            <li>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            </li>
            <li className="font-semibold text-[#0A335D] truncate" aria-current="page">
              Kebijakan Privasi
            </li>
          </ol>
        </nav>

        {/* Header Banner */}
        <header className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 md:p-10 shadow-sm mb-8">
          <div className="inline-flex items-center space-x-2 bg-emerald-50 text-[#049851] px-3 py-1.5 rounded-full text-xs font-semibold mb-4 border border-emerald-200">
            <ShieldCheck className="w-4 h-4" />
            <span>Transparansi & Perlindungan Data Pribadi</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0A335D] tracking-tight mb-4">
            Kebijakan Privasi
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Selamat datang di <strong className="text-[#0A335D]">danatunai.my.id</strong>. Halaman ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi data pribadi Anda saat Anda mengisi formulir di website dan iklan kami.
          </p>

          {/* Agency Disclaimer Box */}
          <div className="mt-6 bg-[#0A335D]/5 border-l-4 border-[#0A335D] p-4 sm:p-5 rounded-r-xl">
            <div className="flex items-start space-x-3">
              <Info className="w-5 h-5 text-[#0A335D] shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                <strong className="text-[#0A335D] font-semibold">Status Kemitraan:</strong> Kami adalah{" "}
                <strong>Agen Independen Resmi BFI Finance</strong>, bukan PT BFI Finance Indonesia Tbk secara langsung. Kami membantu proses pengecekan estimasi awal dan meneruskan pengajuan kepada pihak BFI Finance sesuai ketentuan yang berlaku.
              </div>
            </div>
          </div>
        </header>

        {/* Content Body */}
        <div className="space-y-6 text-slate-700 leading-relaxed text-sm sm:text-base">
          {/* Section 1 */}
          <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 text-[#049851] flex items-center justify-center font-bold text-sm">
                1
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-[#0A335D]">
                Layanan Yang Kami Layani
              </h2>
            </div>
            <p className="text-slate-600 mb-4">
              Formulir di <strong>danatunai.my.id</strong> digunakan untuk layanan pengecekan estimasi limit jaminan BPKB:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="flex items-center space-x-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <Zap className="w-5 h-5 text-emerald-600 shrink-0" />
                <span className="font-semibold text-[#0A335D] text-sm">BPKB Mobil Listrik</span>
              </div>
              <div className="flex items-center space-x-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <Car className="w-5 h-5 text-[#0A335D] shrink-0" />
                <span className="font-semibold text-[#0A335D] text-sm">BPKB Mobil Reguler (Bensin / Diesel)</span>
              </div>
              <div className="flex items-center space-x-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <Bike className="w-5 h-5 text-[#049851] shrink-0" />
                <span className="font-semibold text-[#0A335D] text-sm">BPKB Motor</span>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 text-[#049851] flex items-center justify-center font-bold text-sm">
                2
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-[#0A335D]">
                Data Yang Kami Kumpulkan Melalui Formulir
              </h2>
            </div>
            <p className="text-slate-600 mb-4">
              Tergantung produk yang Anda pilih, kami hanya mengumpulkan:
            </p>
            <ul className="space-y-2.5">
              {[
                "Nama lengkap",
                "Nomor WhatsApp",
                "Kota domisili",
                "Merk kendaraan",
                "Type / varian kendaraan",
                "Tahun kendaraan dan kisaran kilometer (untuk mobil)",
                "Status kepemilikan BPKB (atas nama sendiri, pasangan, atau keluarga dalam 1 KK)",
                "Kesiapan bukti punya / pernah punya kendaraan lain (khusus mobil listrik, sesuai ketentuan BFI Finance)",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start space-x-3 text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-[#049851] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Section 3 */}
          <section className="bg-white rounded-2xl border border-red-200/80 p-6 sm:p-8 shadow-sm">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-red-50 text-red-600 flex items-center justify-center font-bold text-sm">
                3
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-[#0A335D]">
                Data Yang TIDAK Kami Minta Melalui Formulir
              </h2>
            </div>
            <p className="text-slate-600 mb-4">
              Kami <strong>TIDAK meminta</strong> dan <strong>TIDAK menyimpan</strong> melalui formulir ini:
            </p>
            <ul className="space-y-2.5 mb-5">
              {[
                "Nomor KTP / NIK",
                "Foto KTP, KK, STNK, BPKB, atau Faktur",
                "Nomor rekening bank, nomor kartu kredit / debit, atau PIN",
                "Alamat lengkap rumah",
                "Slip gaji atau penghasilan",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start space-x-3 text-slate-700">
                  <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <span className="font-medium text-slate-800">{item}</span>
                </li>
              ))}
            </ul>
            <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl text-xs sm:text-sm text-slate-600 leading-relaxed">
              <span className="font-semibold text-slate-800">Catatan Penting:</span> Dokumen tersebut hanya akan diminta pada tahap lanjutan melalui WhatsApp, setelah Anda menyetujui untuk melanjutkan proses, dan sesuai ketentuan dari BFI Finance.
            </div>
          </section>

          {/* Section 4 */}
          <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 text-[#049851] flex items-center justify-center font-bold text-sm">
                4
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-[#0A335D]">
                Tujuan Penggunaan Data
              </h2>
            </div>
            <p className="text-slate-600 mb-4">Data Anda hanya digunakan untuk:</p>
            <ul className="space-y-2.5">
              <li className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-[#049851] shrink-0 mt-0.5" />
                <span>Menghubungi Anda melalui WhatsApp untuk menyampaikan hasil cek estimasi limit BPKB</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-[#049851] shrink-0 mt-0.5" />
                <span>Melakukan verifikasi awal sesuai syarat BFI Finance untuk produk yang Anda pilih</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-[#049851] shrink-0 mt-0.5" />
                <span>Meneruskan data kepada tim BFI Finance jika Anda menyetujui untuk melanjutkan ke tahap pengajuan</span>
              </li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 text-[#049851] flex items-center justify-center font-bold text-sm">
                5
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-[#0A335D]">
                Pembagian Data
              </h2>
            </div>
            <p className="text-slate-700 leading-relaxed">
              Data Anda tidak akan dijual, disewakan, atau dibagikan kepada pihak ketiga yang tidak berkepentingan, kecuali kepada <strong>BFI Finance</strong> untuk keperluan proses pengajuan yang telah Anda setujui.
            </p>
          </section>

          {/* Section 6 */}
          <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 text-[#049851] flex items-center justify-center font-bold text-sm">
                6
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-[#0A335D]">
                Penyimpanan dan Keamanan Data
              </h2>
            </div>
            <p className="text-slate-700 leading-relaxed">
              Data Anda disimpan dengan aman dan hanya diakses oleh tim kami yang berkepentingan. Kami tidak menyimpan data lebih lama dari yang diperlukan untuk keperluan pengecekan estimasi dan proses lanjutan.
            </p>
          </section>

          {/* Section 7 */}
          <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 text-[#049851] flex items-center justify-center font-bold text-sm">
                7
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-[#0A335D]">
                Hak Anda
              </h2>
            </div>
            <p className="text-slate-600 mb-4">Anda berhak untuk:</p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-[#049851] shrink-0 mt-0.5" />
                <span>Meminta informasi data apa saja yang kami simpan tentang Anda</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-[#049851] shrink-0 mt-0.5" />
                <span>Meminta perbaikan data yang salah</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-[#049851] shrink-0 mt-0.5" />
                <span>Meminta penghapusan data Anda</span>
              </li>
            </ul>
            <p className="text-slate-600 text-sm">
              Untuk permintaan tersebut, silakan hubungi kami melalui WhatsApp yang tertera di <strong>danatunai.my.id</strong> atau melalui halaman Facebook / Instagram Agen Independen Resmi BFI Finance.
            </p>
          </section>

          {/* Section 8 */}
          <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 text-[#049851] flex items-center justify-center font-bold text-sm">
                8
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-[#0A335D]">
                Persetujuan
              </h2>
            </div>
            <p className="text-slate-700 leading-relaxed">
              Dengan mengisi dan mengirimkan formulir, Anda menyatakan telah membaca dan menyetujui <strong>Kebijakan Privasi</strong> ini.
            </p>
          </section>

          {/* Section 9 */}
          <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 text-[#049851] flex items-center justify-center font-bold text-sm">
                9
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-[#0A335D]">
                Perubahan Kebijakan
              </h2>
            </div>
            <p className="text-slate-700 leading-relaxed">
              Kebijakan ini dapat diperbarui sewaktu-waktu. Versi terbaru akan selalu ditampilkan di halaman ini.
            </p>
          </section>

          {/* Footer Contact & Update Info */}
          <section className="bg-[#0A335D] text-white rounded-2xl p-6 sm:p-8 shadow-md">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <p className="text-xs text-slate-300 font-medium mb-1">
                  Terakhir diperbarui: <strong>November 2026</strong>
                </p>
                <h3 className="text-lg font-bold text-white mb-1">
                  Kontak: Agen Independen Resmi BFI Finance
                </h3>
                <p className="text-sm text-slate-300">
                  Website:{" "}
                  <Link href="/" className="text-emerald-300 hover:underline font-medium">
                    https://danatunai.my.id
                  </Link>
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=Halo%20Admin%20DanaTunai,%20saya%20ingin%20bertanya%20mengenai%20Kebijakan%20Privasi%20layanan`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-2 bg-[#049851] hover:bg-[#067A42] text-white font-semibold px-5 py-3 rounded-xl transition-all shadow-sm text-sm"
                >
                  <Phone className="w-4 h-4" />
                  <span>Hubungi via WhatsApp</span>
                </a>
                <Link
                  href="/cek-limit"
                  className="inline-flex items-center justify-center space-x-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-5 py-3 rounded-xl transition-all border border-white/20 text-sm"
                >
                  <span>Cek Estimasi Limit</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

