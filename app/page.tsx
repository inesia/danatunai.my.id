import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle2,
  Car,
  Bike,
  ArrowRight,
  PhoneCall,
  FileCheck2,
  Lock,
  Building2,
  BadgeCheck,
  Wallet,
  Clock,
  Star,
  Quote,
} from "lucide-react";
import QuickApplicationForm from "@/components/QuickApplicationForm";
import FaqAccordion from "@/components/FaqAccordion";
import {
  LOAN_PRODUCTS,
  TRUST_STATS,
  HOW_IT_WORKS,
  TESTIMONIALS,
  FAQ_LIST,
  SITE_CONFIG,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: "Pinjaman Dana Tunai Jaminan BPKB Mobil & Motor — Cepat 1 Hari Cair",
  description:
    "Solusi pinjaman dana tunai cepat jaminan BPKB Mobil & Motor resmi BFI Finance. Bunga ringan mulai 0.6%, plafon hingga 2 Miliar, pencairan utuh, aman diawasi OJK.",
  alternates: {
    canonical: "./",
  },
};

export default function HomePage() {
  // Rich Structured Data for FAQPage and WebSite
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQ_LIST.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE_CONFIG.siteUrl}/#webpage`,
    "url": SITE_CONFIG.siteUrl,
    "name": "Pinjaman Dana Tunai Jaminan BPKB Mobil & Motor — Cepat 1 Hari Cair",
    "description": SITE_CONFIG.description,
    "isPartOf": {
      "@type": "WebSite",
      "@id": `${SITE_CONFIG.siteUrl}/#website`,
      "url": SITE_CONFIG.siteUrl,
      "name": SITE_CONFIG.name,
      "publisher": {
        "@type": "Organization",
        "name": SITE_CONFIG.name,
        "logo": `${SITE_CONFIG.siteUrl}/logo.png`,
      },
    },
    "about": [
      {
        "@type": "FinancialProduct",
        "name": "Gadai BPKB Mobil",
        "offers": {
          "@type": "AggregateOffer",
          "priceCurrency": "IDR",
          "lowPrice": "20000000",
          "highPrice": "2000000000",
        },
      },
      {
        "@type": "FinancialProduct",
        "name": "Gadai BPKB Motor",
        "offers": {
          "@type": "AggregateOffer",
          "priceCurrency": "IDR",
          "lowPrice": "2000000",
          "highPrice": "50000000",
        },
      },
    ],
  };

  return (
    <div className="space-y-16 md:space-y-24">
      {/* Inject Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      {/* HERO SECTION */}
      <section className="relative bg-white border-b border-[#E2E8F0] pt-8 pb-16 md:pt-14 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Headlines & Editorial Presentation */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Compliance & Partner Status Pill - 999px */}
              <div className="inline-flex items-center space-x-2 bg-[#E8F8F0] border border-emerald-200/90 text-[#049851] px-4 py-1.5 rounded-full text-xs font-semibold">
                <ShieldCheck className="w-4 h-4 text-[#049851] shrink-0" />
                <span>Mitra Agen Resmi BFI Finance &bull; Terdaftar & Diawasi OJK</span>
              </div>

              {/* Display 48px Bold Headline (Single H1) */}
              <h1 className="text-3xl sm:text-4xl lg:text-[48px] font-heading font-bold text-[#0A335D] tracking-tight leading-[1.2]">
                Pinjaman <span className="text-[#0A335D]">Dana</span>
                <span className="text-[#049851]">Tunai</span> Cepat Jaminan{" "}
                <span className="text-[#0A335D] underline decoration-[#049851] underline-offset-8">
                  BPKB Mobil & Motor
                </span>
              </h1>

              <p className="text-base sm:text-lg text-[#64748B] leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
                Dapatkan fasilitas pencairan dana cepat hingga <strong>85% dari nilai pasar kendaraan</strong> dengan suku bunga rendah mulai <strong>0.6% flat per bulan</strong>. Dokumen BPKB aman tersimpan di kantor cabang resmi BFI Finance, kendaraan tetap Anda gunakan.
              </p>

              {/* Editorial Feature Highlights */}
              <div className="grid grid-cols-2 gap-3.5 pt-2 text-left max-w-lg mx-auto lg:mx-0">
                <div className="flex items-start space-x-2 text-xs sm:text-sm text-[#0F172A]">
                  <CheckCircle2 className="w-4 h-4 text-[#049851] shrink-0 mt-0.5" />
                  <span>Proses 1 Hari Langsung Cair</span>
                </div>
                <div className="flex items-start space-x-2 text-xs sm:text-sm text-[#0F172A]">
                  <CheckCircle2 className="w-4 h-4 text-[#049851] shrink-0 mt-0.5" />
                  <span>Pajak Mati & Plat Daerah Bisa</span>
                </div>
                <div className="flex items-start space-x-2 text-xs sm:text-sm text-[#0F172A]">
                  <CheckCircle2 className="w-4 h-4 text-[#049851] shrink-0 mt-0.5" />
                  <span>Tanpa Biaya Potongan Siluman</span>
                </div>
                <div className="flex items-start space-x-2 text-xs sm:text-sm text-[#0F172A]">
                  <CheckCircle2 className="w-4 h-4 text-[#049851] shrink-0 mt-0.5" />
                  <span>Pencairan Masuk Rekening Utuh</span>
                </div>
              </div>

              {/* Buttons: Primary #049851 & Secondary #0A335D */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-3">
                <a
                  href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=Halo%2C%20saya%20ingin%20konsultasi%20pinjaman%20dana%20tunai%20jaminan%20BPKB.%20Mohon%20info%20taksiran%20dan%20syaratnya.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 bg-[#049851] hover:bg-[#067A42] text-white font-semibold py-3.5 px-7 rounded-[12px] shadow-soft transition-colors text-[16px] cursor-pointer"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Konsultasi via WhatsApp</span>
                </a>
                <Link
                  href="/cek-limit"
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-[#0A335D] hover:bg-[#082849] text-white font-semibold py-3.5 px-6 rounded-[12px] transition-colors text-[16px]"
                >
                  <span>Form Pengajuan</span>
                  <ArrowRight className="w-4 h-4 text-slate-300" />
                </Link>
              </div>

              {/* Authentic Accreditation Strip */}
              <div className="pt-4 border-t border-[#E2E8F0] flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-[#64748B]">
                <div className="flex items-center space-x-1.5">
                  <Building2 className="w-4 h-4 text-[#0A335D]" />
                  <span className="font-medium text-[#0F172A]">PT BFI Finance Indonesia Tbk</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <BadgeCheck className="w-4 h-4 text-[#049851]" />
                  <span className="font-medium text-[#0F172A]">Terdaftar & Diawasi OJK</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <Lock className="w-4 h-4 text-[#64748B]" />
                  <span className="font-medium text-[#0F172A]">Kerahasiaan Data Terjamin</span>
                </div>
              </div>
            </div>

            {/* Right Column: Application Form */}
            <div className="lg:col-span-5">
              <QuickApplicationForm defaultType="Mobil" />
            </div>
          </div>
        </div>
      </section>

      {/* STATS BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Statistik Layanan">
        <div className="bg-white rounded-[12px] border border-[#E2E8F0] p-6 sm:p-8 shadow-soft">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 divide-y lg:divide-y-0 lg:divide-x divide-[#E2E8F0]">
            {TRUST_STATS.map((s, idx) => (
              <div
                key={idx}
                className={`text-center ${idx > 0 && idx % 2 === 0 ? "pt-6 lg:pt-0" : ""} ${idx > 0 ? "lg:px-4" : ""}`}
              >
                <div className="text-2xl sm:text-3xl font-extrabold text-[#0A335D] tracking-tight">
                  {s.value}
                </div>
                <div className="font-semibold text-[#0F172A] text-xs sm:text-sm mt-1">
                  {s.label}
                </div>
                <div className="text-xs text-[#64748B] mt-0.5">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUK PINJAMAN UTAMA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-labelledby="section-products-title">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-2.5">
          <span className="text-xs font-semibold text-[#049851] uppercase tracking-wider bg-[#E8F8F0] px-3.5 py-1 rounded-full border border-emerald-200">
            Pilihan Agunan Kendaraan
          </span>
          <h2 id="section-products-title" className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-[#0A335D] tracking-tight">
            Produk Pinjaman Jaminan BPKB Mobil & Motor
          </h2>
          <p className="text-sm sm:text-base text-[#64748B]">
            Pilih fasilitas agunan sesuai kebutuhan modal usaha, investasi, biaya pendidikan, atau kebutuhan mendadak Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {LOAN_PRODUCTS.map((prod) => (
            <article
              key={prod.id}
              className="bg-white rounded-[12px] p-6 sm:p-8 border border-[#E2E8F0] shadow-soft flex flex-col justify-between hover:border-slate-300 transition-colors"
            >
              <div className="space-y-6">
                <div className="flex justify-between items-start">
                  <div className="w-12 h-12 rounded-[12px] bg-dna-gradient text-white flex items-center justify-center font-bold shadow-sm">
                    {prod.id === "bpkb-mobil" ? <Car className="w-6 h-6 text-white" /> : <Bike className="w-6 h-6 text-white" />}
                  </div>
                  <span className="inline-block bg-[#E8F8F0] text-[#049851] font-semibold text-xs px-3 py-1 rounded-full border border-emerald-200">
                    {prod.badge}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-heading font-bold text-[#0A335D]">{prod.title}</h3>
                  <p className="text-sm text-[#64748B] mt-2 leading-relaxed">{prod.description}</p>
                </div>

                {/* Structured Spec Sheet */}
                <div className="bg-[#F8FAFC] p-4 rounded-[12px] border border-[#E2E8F0] space-y-2 text-xs">
                  <div className="flex justify-between items-center py-1 border-b border-[#E2E8F0]">
                    <span className="text-[#64748B]">Estimasi Suku Bunga:</span>
                    <strong className="text-[#0A335D] font-semibold">{prod.rate}</strong>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-[#E2E8F0]">
                    <span className="text-[#64748B]">Estimasi Waktu Pencairan:</span>
                    <strong className="text-[#049851] font-semibold">{prod.processTime}</strong>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-[#E2E8F0]">
                    <span className="text-[#64748B]">Pilihan Tenor Angsuran:</span>
                    <span className="text-[#0F172A] font-medium">{prod.tenor}</span>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span className="text-[#64748B]">Kriteria Tahun Unit:</span>
                    <span className="text-[#0F172A] font-medium text-right">{prod.yearRequirement}</span>
                  </div>
                </div>

                {/* Features list with Tunai Green checkmark */}
                <div className="space-y-2.5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#64748B]">
                    Keunggulan Program:
                  </span>
                  {prod.features.map((feat, fidx) => (
                    <div key={fidx} className="flex items-start space-x-2 text-xs sm:text-sm text-[#0F172A]">
                      <CheckCircle2 className="w-4 h-4 text-[#049851] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons: Button Secondary & Button Primary */}
              <div className="pt-6 mt-6 border-t border-[#E2E8F0] flex flex-col sm:flex-row gap-3">
                <Link
                  href={prod.slug}
                  className="flex-1 text-center py-3 px-4 rounded-[12px] font-semibold text-sm bg-[#0A335D] hover:bg-[#082849] text-white transition-colors"
                >
                  Detail & Syarat Lengkap
                </Link>
                <a
                  href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=Halo%2C%20saya%20tertarik%20dengan%20program%20${encodeURIComponent(
                    prod.title
                  )}.%20Bisa%20bantu%20taksir%20nilai%20pencairan%20dan%20persyaratannya%3F`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center py-3 px-5 rounded-[12px] font-semibold text-sm bg-[#E8F8F0] hover:bg-emerald-100 text-[#049851] border border-emerald-200 transition-colors flex items-center justify-center space-x-1.5 cursor-pointer"
                >
                  <PhoneCall className="w-4 h-4 text-[#049851]" />
                  <span>Chat via WhatsApp</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* REFINED SECURITY & TRANSPARENCY SECTION - Dana Navy #0A335D */}
      <section className="bg-[#0A335D] text-white py-16 md:py-20 rounded-[20px] mx-4 sm:mx-6 lg:mx-8 shadow-modal" aria-labelledby="section-security-title">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-semibold text-[#049851] uppercase tracking-wider bg-[#061F38] px-3.5 py-1 rounded-full border border-blue-900/60">
              Standar Layanan & Kepatuhan OJK
            </span>
            <h2 id="section-security-title" className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold tracking-tight">
              Kenapa Memilih Pengajuan Gadai BPKB Bersama Kami?
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              Jaminan keamanan dokumen asli tersimpan resmi di kantor cabang dan pendampingan personal langsung dari awal hingga dana cair.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* Left: Financial Security Pillars */}
            <div className="space-y-4">
              <div className="bg-[#061F38] p-5 sm:p-6 rounded-[12px] border border-blue-900/60 flex items-start space-x-4">
                <div className="w-10 h-10 rounded-[12px] bg-dna-gradient text-white flex items-center justify-center shrink-0">
                  <Lock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-base text-white">BPKB Tersimpan Aman di Brankas Resmi Cabang</h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
                    Dokumen BPKB Anda langsung disimpan di brankas kantor cabang BFI Finance resmi yang diawasi OJK. Bebas risiko penyalahgunaan pihak ketiga.
                  </p>
                </div>
              </div>

              <div className="bg-[#061F38] p-5 sm:p-6 rounded-[12px] border border-blue-900/60 flex items-start space-x-4">
                <div className="w-10 h-10 rounded-[12px] bg-dna-gradient text-white flex items-center justify-center shrink-0">
                  <Wallet className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-base text-white">Pencairan Dana Utuh & Tanpa Biaya Tersembunyi</h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
                    Semua rincian biaya dan taksiran plafon diinformasikan transparan di depan. Tanpa biaya survei fiktif atau potongan liar.
                  </p>
                </div>
              </div>

              <div className="bg-[#061F38] p-5 sm:p-6 rounded-[12px] border border-blue-900/60 flex items-start space-x-4">
                <div className="w-10 h-10 rounded-[12px] bg-dna-gradient text-white flex items-center justify-center shrink-0">
                  <FileCheck2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-base text-white">Pajak Mati & Balik Nama Bisa Dibantu</h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
                    Pajak STNK mati atau unit belum atas nama sendiri tetap dapat diproses melalui mekanisme pengurusan resmi bersama tim kami.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Personal Consultant Card */}
            <div className="bg-[#061F38] rounded-[12px] p-6 sm:p-8 border border-blue-900/60 flex flex-col justify-between">
              <div className="space-y-5">
                <div className="inline-flex items-center space-x-2 text-xs font-semibold text-[#049851] bg-[#0A335D] border border-emerald-900/60 px-3.5 py-1 rounded-full">
                  <BadgeCheck className="w-4 h-4 text-[#049851]" />
                  <span>Konsultan Agen Terverifikasi</span>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-heading font-bold text-white">
                    Konsultan Kemitraan Resmi
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1">
                    Mitra Resmi PT BFI Finance Indonesia Tbk
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  Pengajuan pinjaman melalui mitra resmi memberikan Anda keuntungan konsultasi taksiran akurat lebih awal, verifikasi kelengkapan berkas yang fleksibel, dan pendampingan berkas prioritas di cabang.
                </p>

                <div className="space-y-2 text-xs text-slate-200 pt-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-[#049851] shrink-0" />
                    <span>Konsultasi gratis & hitung simulasi via WhatsApp</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-[#049851] shrink-0" />
                    <span>Bisa jemput berkas atau datang langsung ke cabang</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-[#049851] shrink-0" />
                    <span>Respon cepat dan ramah setiap hari</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-blue-900/60">
                <a
                  href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=Halo%2C%20saya%20ingin%20konsultasi%20pengajuan%20dana%20tunai%20jaminan%20BPKB.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center space-x-2 bg-[#049851] hover:bg-[#067A42] text-white font-semibold py-3.5 px-5 rounded-[12px] transition-colors text-sm cursor-pointer shadow-soft"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Konsultasi WhatsApp: {SITE_CONFIG.phone}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 LANGKAH MUDAH PENGAJUAN */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-labelledby="section-how-it-works-title">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-2.5">
          <span className="text-xs font-semibold text-[#049851] uppercase tracking-wider bg-[#E8F8F0] px-3.5 py-1 rounded-full border border-emerald-200">
            Alur Pengajuan Dana
          </span>
          <h2 id="section-how-it-works-title" className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-[#0A335D] tracking-tight">
            4 Langkah Mudah Hingga Dana Cair ke Rekening
          </h2>
          <p className="text-sm sm:text-base text-[#64748B]">
            Proses awal cepat dan praktis cukup dari ponsel Anda tanpa antrean panjang.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {HOW_IT_WORKS.map((step, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-[12px] border border-[#E2E8F0] shadow-soft relative group hover:border-slate-300 transition-colors"
            >
              <div className="text-sm font-bold text-white bg-dna-gradient w-8 h-8 rounded-[8px] flex items-center justify-center mb-4 shadow-sm">
                {step.step}
              </div>
              <h3 className="font-heading font-bold text-[#0A335D] text-base mb-2">{step.title}</h3>
              <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS SECTION (E-E-A-T & SOCIAL PROOF) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-labelledby="section-testimonials-title">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-2.5">
          <span className="text-xs font-semibold text-[#049851] uppercase tracking-wider bg-[#E8F8F0] px-3.5 py-1 rounded-full border border-emerald-200">
            Bukti Kepuasan Nasabah
          </span>
          <h2 id="section-testimonials-title" className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-[#0A335D] tracking-tight">
            Pengalaman Nasabah Pinjaman Gadai BPKB
          </h2>
          <p className="text-sm sm:text-base text-[#64748B]">
            Ratusan nasabah telah merasakan kemudahan pencairan dana tunai jaminan BPKB bersama kami.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testi, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[12px] p-6 sm:p-7 border border-[#E2E8F0] shadow-soft flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center space-x-1 text-amber-400">
                  {[...Array(testi.rating)].map((_, rIdx) => (
                    <Star key={rIdx} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-[#0F172A] italic leading-relaxed">
                  &ldquo;{testi.comment}&rdquo;
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-[#E2E8F0] flex items-center justify-between">
                <div>
                  <h3 className="font-heading font-bold text-sm text-[#0A335D]">{testi.name}</h3>
                  <p className="text-xs text-[#64748B]">{testi.location}</p>
                  <span className="inline-block mt-1 text-[11px] font-semibold text-[#049851] bg-[#E8F8F0] px-2 py-0.5 rounded">
                    {testi.amount} ({testi.loanType})
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-labelledby="section-faq-title">
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-2.5">
          <span className="text-xs font-semibold text-[#049851] uppercase tracking-wider bg-[#E8F8F0] px-3.5 py-1 rounded-full border border-emerald-200">
            Pusat Informasi & FAQ
          </span>
          <h2 id="section-faq-title" className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-[#0A335D] tracking-tight">
            Pertanyaan yang Sering Diajukan (FAQ)
          </h2>
          <p className="text-sm sm:text-base text-[#64748B]">
            Pelajari ketentuan syarat kendaraan, keamanan dokumen BPKB, dan mekanisme pencairan dana tunai.
          </p>
        </div>

        <FaqAccordion />
      </section>

      {/* BOTTOM CONVERSION CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="bg-[#0A335D] rounded-[20px] p-8 sm:p-12 text-white shadow-modal border border-blue-950">
          <div className="max-w-2xl space-y-4 text-center sm:text-left">
            <span className="inline-block bg-[#061F38] text-[#049851] text-xs font-semibold px-3.5 py-1 rounded-full border border-blue-900/60">
              Pelayanan Cepat & Fast Respon
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold tracking-tight leading-tight">
              Butuh Dana Mendesak? Konsultasikan Sekarang Tanpa Ribet
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              Tim kami siap membantu pengecekan taksiran harga kendaraan, kelengkapan berkas, dan memandu pengajuan hingga dana cair ke rekening Anda.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
              <a
                href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=Halo%2C%20saya%20butuh%20dana%20tunai%20segera.%20Bisa%20bantu%20proses%20pengajuannya%3F`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-[#049851] hover:bg-[#067A42] text-white font-semibold py-3.5 px-7 rounded-[12px] transition-colors text-[16px] cursor-pointer shadow-soft"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Chat via WhatsApp</span>
              </a>
              <Link
                href="/cek-limit"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-[#061F38] hover:bg-[#05182B] text-white font-medium py-3.5 px-6 rounded-[12px] border border-blue-900/60 transition-colors text-[16px]"
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
