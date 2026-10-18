import Link from "next/link";
import {
  ShieldCheck,
  Zap,
  CheckCircle,
  Car,
  Bike,
  Clock,
  Percent,
  Banknote,
  ArrowRight,
  PhoneCall,
  FileCheck2,
  Lock,
  ThumbsUp,
} from "lucide-react";
import QuickApplicationForm from "@/components/QuickApplicationForm";
import FaqAccordion from "@/components/FaqAccordion";
import { LOAN_PRODUCTS, TRUST_STATS, HOW_IT_WORKS, SITE_CONFIG } from "@/lib/constants";

export default function HomePage() {
  return (
    <div className="space-y-16 md:space-y-24">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/70 via-white to-slate-50 pt-8 pb-16 md:pt-14 md:pb-24 border-b border-slate-200/60">
        {/* Background glow orbs */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-blue-400/10 rounded-full blur-3xl -z-10 pointer-events-none" />
        <div className="absolute top-1/3 -right-20 w-[400px] h-[300px] bg-amber-400/10 rounded-full blur-3xl -z-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Headlines & Benefits */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 bg-blue-100/80 border border-blue-200 text-blue-800 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold shadow-sm">
                <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Mitra Resmi BFI Finance &bull; Terdaftar & Diawasi OJK</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.15]">
                Solusi Dana Cepat Jaminan{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-sky-600 to-indigo-600">
                  BPKB Mobil & Motor
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Dapatkan pencairan dana tunai hingga <strong>85% dari nilai kendaraan</strong> dengan suku bunga rendah mulai <strong>0.6% flat/bulan</strong>. BPKB aman tersimpan di BFI Finance, kendaraan tetap Anda gunakan.
              </p>

              {/* Key Bullet Highlights */}
              <div className="grid grid-cols-2 gap-3 pt-2 text-left max-w-lg mx-auto lg:mx-0">
                <div className="flex items-center space-x-2 text-xs sm:text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Proses 1 Hari Langsung Cair</span>
                </div>
                <div className="flex items-center space-x-2 text-xs sm:text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Pajak Mati & Plat Daerah Bisa</span>
                </div>
                <div className="flex items-center space-x-2 text-xs sm:text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Tanpa Biaya Survei</span>
                </div>
                <div className="flex items-center space-x-2 text-xs sm:text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Pencairan Masuk Rekening Utuh</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-4">
                <a
                  href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=Halo%20Mas%20${encodeURIComponent(
                    SITE_CONFIG.agentName
                  )}%2C%20saya%20ingin%20konsultasi%20pinjaman%20dana%20tunai%20jaminan%20BPKB.%20Mohon%20info%20syarat%20dan%20proses%20pengajuannya.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg shadow-emerald-600/30 hover:shadow-xl hover:shadow-emerald-600/40 transition-all duration-200 transform hover:-translate-y-0.5"
                >
                  <PhoneCall className="w-5 h-5 animate-pulse" />
                  <span>Konsultasi WA Cepat</span>
                </a>
                <Link
                  href="/cek-limit"
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-white hover:bg-slate-50 text-slate-800 font-bold py-4 px-7 rounded-xl border border-slate-300 shadow-sm hover:border-slate-400 transition-all duration-200"
                >
                  <span>Form Pengajuan</span>
                  <ArrowRight className="w-4 h-4 text-slate-500" />
                </Link>
              </div>

              {/* Social Proof Mini */}
              <div className="pt-2 flex items-center justify-center lg:justify-start space-x-3 text-xs text-slate-500">
                <span className="flex -space-x-2">
                  <span className="inline-block w-7 h-7 rounded-full bg-blue-600 text-white text-[10px] font-bold flex items-center justify-center ring-2 ring-white">BFI</span>
                  <span className="inline-block w-7 h-7 rounded-full bg-emerald-600 text-white text-[10px] font-bold flex items-center justify-center ring-2 ring-white">OJK</span>
                  <span className="inline-block w-7 h-7 rounded-full bg-amber-500 text-white text-[10px] font-bold flex items-center justify-center ring-2 ring-white">★5</span>
                </span>
                <span>Dipercaya ribuan nasabah di seluruh Indonesia</span>
              </div>
            </div>

            {/* Right Column: Quick Lead Application Form */}
            <div className="lg:col-span-5">
              <QuickApplicationForm defaultType="Mobil" />
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {TRUST_STATS.map((s, idx) => (
            <div
              key={idx}
              className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow text-center"
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-blue-700 tracking-tight">
                {s.value}
              </div>
              <div className="font-bold text-slate-900 text-sm sm:text-base mt-1">
                {s.label}
              </div>
              <div className="text-xs text-slate-500 mt-0.5">{s.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUK PINJAMAN UTAMA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
            PILIHAN LAYANAN
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
            Produk Pinjaman Dana Tunai Resmi BFI Finance
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Pilih jenis agunan kendaraan Anda untuk mendapatkan taksiran plafon maksimal dengan bunga paling kompetitif.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {LOAN_PRODUCTS.map((prod) => (
            <div
              key={prod.id}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-6">
                <div className="flex justify-between items-start">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-200 shadow-sm">
                    {prod.id === "bpkb-mobil" ? <Car className="w-7 h-7" /> : <Bike className="w-7 h-7" />}
                  </div>
                  <span className="inline-block bg-amber-50 text-amber-700 font-bold text-xs px-3 py-1.5 rounded-full border border-amber-200">
                    {prod.badge}
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-slate-900">{prod.title}</h3>
                  <p className="text-sm text-slate-600 mt-2 leading-relaxed">{prod.description}</p>
                </div>

                {/* Metric pills */}
                <div className="grid grid-cols-2 gap-2 text-xs bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                  <div>
                    <span className="text-slate-400 block font-medium">Suku Bunga:</span>
                    <strong className="text-blue-700 font-bold">{prod.rate}</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block font-medium">Waktu Proses:</span>
                    <strong className="text-emerald-700 font-bold">{prod.processTime}</strong>
                  </div>
                  <div className="col-span-2 pt-1 border-t border-slate-200/60 mt-1">
                    <span className="text-slate-400 block font-medium">Syarat Tahun:</span>
                    <span className="text-slate-700 font-semibold">{prod.yearRequirement}</span>
                  </div>
                </div>

                {/* Features list */}
                <div className="space-y-2.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Keunggulan Program:
                  </span>
                  {prod.features.map((feat, fidx) => (
                    <div key={fidx} className="flex items-start space-x-2 text-xs sm:text-sm text-slate-700">
                      <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
                <Link
                  href={prod.slug}
                  className="flex-1 text-center py-3 px-4 rounded-xl font-bold text-sm bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-500/20 transition-all duration-200"
                >
                  Detail & Syarat Lengkap
                </Link>
                <a
                  href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=Halo%20Mas%20${encodeURIComponent(
                    SITE_CONFIG.agentName
                  )}%2C%20saya%20tertarik%20dengan%20program%20${encodeURIComponent(
                    prod.title
                  )}.%20Bisa%20bantu%20taksir%20nilai%20pencairan%20dan%20persyaratannya%3F`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center py-3 px-5 rounded-xl font-bold text-sm bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 transition-colors flex items-center justify-center space-x-1.5"
                >
                  <PhoneCall className="w-4 h-4 text-emerald-600" />
                  <span>Chat WA</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MENGAPA MEMILIH KAMI / KEUNGGULAN */}
      <section className="bg-slate-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-widest bg-blue-900/60 px-3 py-1 rounded-full border border-blue-700/60">
              KENAPA HARUS KAMI
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight">
              Keuntungan Mengajukan Pinjaman Bersama Kami
            </h2>
            <p className="text-sm sm:text-base text-slate-400">
              Pengalaman pembiayaan yang transparan, mudah, dan didukung penuh oleh jaringan BFI Finance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800/70 p-6 rounded-2xl border border-slate-700/80 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center">
                <Lock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold">BPKB 100% Aman Terjamin</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Dokumen BPKB asli Anda disimpan langsung di brankas kantor cabang BFI Finance resmi yang diawasi OJK, bukan pihak ketiga yang mencurigakan.
              </p>
            </div>

            <div className="bg-slate-800/70 p-6 rounded-2xl border border-slate-700/80 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-600/20 text-emerald-400 flex items-center justify-center">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold">Proses Kilat 1 Hari Cair</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Proses berkas cepat tanpa birokrasi berbelit-belit. Untuk motor bisa 1-2 jam cair, untuk mobil rata-rata 1 hari kerja dana sudah masuk rekening.
              </p>
            </div>

            <div className="bg-slate-800/70 p-6 rounded-2xl border border-slate-700/80 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-600/20 text-amber-400 flex items-center justify-center">
                <Banknote className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold">Pencairan Maksimal & Bersih</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Taksiran unit tertinggi di kelasnya hingga 85%. Tanpa potongan liar atau biaya administrasi fiktif. Dana masuk rekening utuh.
              </p>
            </div>

            <div className="bg-slate-800/70 p-6 rounded-2xl border border-slate-700/80 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-sky-600/20 text-sky-400 flex items-center justify-center">
                <FileCheck2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold">Pajak Mati & BPKB Belum Balik Nama</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Pajak kendaraan mati atau telat bertahun-tahun? BPKB masih atas nama orang lain? Tim kami siap membantu pendampingan pengurusannya.
              </p>
            </div>

            <div className="bg-slate-800/70 p-6 rounded-2xl border border-slate-700/80 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-purple-600/20 text-purple-400 flex items-center justify-center">
                <ThumbsUp className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold">Kendaraan Tetap Milik Anda</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Hanya BPKB yang diagunkan. Mobil atau motor Anda tetap bebas Anda gunakan sehari-hari untuk operasional kantor, usaha, atau keluarga.
              </p>
            </div>

            <div className="bg-slate-800/70 p-6 rounded-2xl border border-slate-700/80 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-rose-600/20 text-rose-400 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold">Pendampingan Agen Resmi</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Anda dibimbing langsung oleh mitra resmi terdaftar ({SITE_CONFIG.agentName}), mulai dari taksiran awal hingga dana berhasil dicairkan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4 LANGKAH MUDAH PENGAJUAN */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
            PROSEDUR PENGAJUAN
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
            4 Langkah Mudah Dana Cair ke Rekening
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Tanpa perlu repot antre panjang, semua proses awal bisa dilakukan secara online dari HP Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {HOW_IT_WORKS.map((step, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative group hover:border-blue-400 hover:shadow-lg transition-all"
            >
              <div className="text-3xl font-black text-blue-600/30 group-hover:text-blue-600 transition-colors mb-2">
                {step.step}
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">{step.title}</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>



      {/* FAQ SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
            PERTANYAAN UMUM
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
            Pertanyaan yang Sering Diajukan (FAQ)
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Pelajari segala hal mengenai syarat, keamanan BPKB, dan mekanisme pencairan dana.
          </p>
        </div>

        <FaqAccordion />
      </section>

      {/* BOTTOM CONVERSION CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-900 rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-72 h-72 bg-white/5 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl space-y-5 text-center sm:text-left">
            <span className="inline-block bg-white/20 text-blue-100 text-xs font-bold px-3 py-1 rounded-full">
              Pelayanan Cepat & Fast Respon
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight leading-tight">
              Butuh Dana Mendesak Hari Ini? Konsultasikan Sekarang Tanpa Ribet!
            </h2>
            <p className="text-sm sm:text-base text-blue-100 leading-relaxed">
              Tim kami siap membantu pengecekan taksiran harga kendaraan, kelengkapan berkas, dan memandu pengajuan hingga dana cair ke rekening Anda.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
              <a
                href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=Halo%20Mas%20${encodeURIComponent(
                  SITE_CONFIG.agentName
                )}%2C%20saya%20butuh%20dana%20tunai%20segera.%20Bisa%20bantu%20proses%20pengajuannya%3F`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3.5 px-8 rounded-xl shadow-lg transition-transform hover:-translate-y-0.5"
              >
                <PhoneCall className="w-5 h-5" />
                <span>Chat WhatsApp Mas Irwan</span>
              </a>
              <Link
                href="/cek-limit"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-white/10 hover:bg-white/20 text-white font-semibold py-3.5 px-6 rounded-xl border border-white/20 transition-colors"
              >
                <span>Isi Form Pengajuan</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
