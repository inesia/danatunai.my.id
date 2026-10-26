import type { Metadata } from "next";
import Link from "next/link";
import {
  Car,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Banknote,
  Percent,
  FileText,
  PhoneCall,
  ArrowRight,
  HelpCircle,
  Sparkles,
  ChevronRight,
} from "lucide-react";
import QuickApplicationForm from "@/components/QuickApplicationForm";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Gadai BPKB Mobil Cepat Cair Bunga 0.6% — Mitra Resmi BFI Finance",
  description:
    "Pinjaman dana tunai jaminan BPKB Mobil (Sedan, Minibus, MPV, SUV, Pick Up, Truk). Plafon hingga 2 Miliar, bunga mulai 0.6% flat/bln, proses 1 hari cair, BPKB aman di BFI Finance resmi OJK.",
  keywords: [
    "gadai bpkb mobil",
    "pinjaman jaminan bpkb mobil",
    "dana tunai bpkb mobil bfi",
    "kredit bpkb mobil avanza xenia innova",
    "bunga rendah gadai bpkb mobil",
    "gadai bpkb mobil plat luar kota",
    "gadai bpkb mobil pajak mati",
    "taksiran pinjaman bpkb mobil",
  ],
  alternates: {
    canonical: "/bpkb-mobil",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: `${SITE_CONFIG.siteUrl}/bpkb-mobil`,
    title: "Gadai BPKB Mobil Cepat Cair Bunga 0.6% — Mitra Resmi BFI Finance",
    description:
      "Pinjaman dana tunai jaminan BPKB Mobil resmi BFI Finance. Plafon hingga 2 Miliar, bunga ringan 0.6%, proses 1 hari cair.",
    images: ["/logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gadai BPKB Mobil Cepat Cair Bunga 0.6% — Mitra Resmi BFI Finance",
    description: "Plafon hingga 2 Miliar, bunga mulai 0.6% flat/bln, proses 1 hari cair.",
    images: ["/logo.png"],
  },
};

export default function BpkbMobilPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Beranda",
        "item": SITE_CONFIG.siteUrl,
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Gadai BPKB Mobil",
        "item": `${SITE_CONFIG.siteUrl}/bpkb-mobil`,
      },
    ],
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "FinancialProduct",
    "name": "Pinjaman Dana Tunai Jaminan BPKB Mobil",
    "description":
      "Fasilitas kredit pinjaman dana tunai dengan jaminan BPKB Mobil penumpang dan komersial resmi PT BFI Finance Indonesia Tbk.",
    "annualPercentageRate": "7.2%",
    "feesAndCommissionsSpecification": "Bebas biaya provisi siluman, transparan di awal",
    "provider": {
      "@type": "FinancialService",
      "name": SITE_CONFIG.partnerBrand,
      "url": SITE_CONFIG.siteUrl,
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "IDR",
      "lowPrice": "20000000",
      "highPrice": "2000000000",
    },
  };

  return (
    <div className="py-8 md:py-10 space-y-16">
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

      {/* HEADER & HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Visual Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center space-x-2 text-xs sm:text-sm text-[#64748B]">
            <li>
              <Link href="/" className="hover:text-[#049851] transition-colors">
                Beranda
              </Link>
            </li>
            <ChevronRight className="w-3.5 h-3.5 text-[#64748B]" />
            <li className="font-semibold text-[#0A335D]" aria-current="page">
              Gadai BPKB Mobil
            </li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 bg-[#E8F8F0] border border-[#049851]/30 text-[#049851] text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full shadow-sm">
              <Car className="w-4 h-4 text-[#049851]" />
              <span>Program Resmi Mitra BFI Finance Indonesia</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-[#0A335D] tracking-tight leading-tight">
              Pinjaman Dana Tunai Jaminan{" "}
              <span className="text-[#049851]">BPKB Mobil</span> Cepat Cair
            </h1>

            <p className="text-base sm:text-lg text-[#64748B] leading-relaxed font-normal">
              Dapatkan plafon pinjaman mulai <strong className="text-[#0F172A]">Rp 20 Juta hingga Rp 2 Miliar+</strong> dengan suku bunga ringan mulai <strong className="text-[#049851]">0.6% flat per bulan</strong>. Mobil tetap Anda gunakan untuk keperluan mobilitas atau operasional usaha harian.
            </p>

            {/* Fast Benefit Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="flex items-center space-x-3 text-xs sm:text-sm text-[#0F172A] bg-white p-3.5 rounded-[12px] border border-[#E2E8F0] shadow-sm">
                <div className="w-6 h-6 rounded-full bg-[#E8F8F0] text-[#049851] flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span>Pencairan Hingga 85% Nilai Pasar</span>
              </div>
              <div className="flex items-center space-x-3 text-xs sm:text-sm text-[#0F172A] bg-white p-3.5 rounded-[12px] border border-[#E2E8F0] shadow-sm">
                <div className="w-6 h-6 rounded-full bg-[#E8F8F0] text-[#049851] flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span>Tenor Fleksibel 12 s/d 48 Bulan</span>
              </div>
              <div className="flex items-center space-x-3 text-xs sm:text-sm text-[#0F172A] bg-white p-3.5 rounded-[12px] border border-[#E2E8F0] shadow-sm">
                <div className="w-6 h-6 rounded-full bg-[#E8F8F0] text-[#049851] flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span>Pajak Mati & Plat Luar Kota Bisa</span>
              </div>
              <div className="flex items-center space-x-3 text-xs sm:text-sm text-[#0F172A] bg-white p-3.5 rounded-[12px] border border-[#E2E8F0] shadow-sm">
                <div className="w-6 h-6 rounded-full bg-[#E8F8F0] text-[#049851] flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span>Tanpa BI Checking Kaku / Fleksibel</span>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-3">
              <a
                href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=Halo%2C%20saya%20ingin%20mengajukan%20pinjaman%20BPKB%20Mobil.%20Mohon%20dibantu%20pengajuan%20dan%20persyaratannya.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-[#049851] hover:bg-[#067A42] text-white font-semibold py-3.5 px-6 rounded-[12px] transition-all duration-200 text-sm shadow-md"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Konsultasi via WhatsApp</span>
              </a>
              <Link
                href="/cek-limit"
                className="inline-flex items-center space-x-2 bg-white hover:bg-slate-50 text-[#0A335D] font-semibold py-3.5 px-6 rounded-[12px] border border-[#E2E8F0] transition-colors text-sm shadow-sm"
              >
                <span>Form Pengajuan Mobil</span>
                <ArrowRight className="w-4 h-4 text-[#0A335D]" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <QuickApplicationForm
              defaultType="Mobil"
              title="Form Pengajuan BPKB Mobil"
              subtitle="Taksiran plafon s/d 85% & bunga mulai 0.6% via BFI Finance"
            />
          </div>
        </div>
      </section>

      {/* SYARAT KENDARAAN & DOKUMEN */}
      <section className="bg-white py-16 border-y border-[#E2E8F0]" aria-labelledby="section-criteria-title">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
            <h2 id="section-criteria-title" className="text-2xl sm:text-3xl font-bold font-heading text-[#0A335D] tracking-tight">
              Syarat & Kriteria Pengajuan Gadai BPKB Mobil
            </h2>
            <p className="text-sm sm:text-base text-[#64748B]">
              Persyaratan mudah dan transparan untuk memastikan proses pencairan berjalan cepat dan aman.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Kriteria Kendaraan */}
            <div className="bg-[#F8FAFC] p-6 sm:p-8 rounded-[12px] border border-[#E2E8F0] shadow-sm space-y-5">
              <div className="w-12 h-12 rounded-[12px] bg-dna-gradient text-white flex items-center justify-center shadow-md">
                <Car className="w-6 h-6" />
              </div>
              <h3 className="font-bold font-heading text-xl text-[#0A335D]">Kriteria Unit Mobil</h3>
              <ul className="space-y-3.5 text-xs sm:text-sm text-[#0F172A]">
                <li className="flex items-start space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#049851] shrink-0 mt-0.5" />
                  <span><strong>Mobil Penumpang (Passanger):</strong> Min. Tahun 2008 (Sedan, Minibus, MPV, SUV: Avanza, Innova, Fortuner, Pajero, Xpander, CR-V, Jazz, dll).</span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#049851] shrink-0 mt-0.5" />
                  <span><strong>Mobil Komersial:</strong> Min. Tahun 2013 (Pick Up, Box, Truk engkel/dobel: L300, GranMax, Canter, Isuzu Elf, Hino Dutro).</span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#049851] shrink-0 mt-0.5" />
                  <span>Plat kendaraan seluruh wilayah Indonesia dapat diproses langsung di cabang BFI Finance terdekat.</span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#049851] shrink-0 mt-0.5" />
                  <span>BPKB atas nama sendiri, pasangan, keluarga, atau atas nama orang lain (bisa dibantu proses balik nama/mutasi).</span>
                </li>
              </ul>
            </div>

            {/* Dokumen Persyaratan */}
            <div className="bg-[#F8FAFC] p-6 sm:p-8 rounded-[12px] border border-[#E2E8F0] shadow-sm space-y-5">
              <div className="w-12 h-12 rounded-[12px] bg-dna-gradient text-white flex items-center justify-center shadow-md">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="font-bold font-heading text-xl text-[#0A335D]">Dokumen yang Disiapkan</h3>
              <ul className="space-y-3.5 text-xs sm:text-sm text-[#0F172A]">
                <li className="flex items-start space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#049851] shrink-0 mt-0.5" />
                  <span>Foto KTP Pemohon & Pasangan (jika sudah menikah).</span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#049851] shrink-0 mt-0.5" />
                  <span>Foto Kartu Keluarga (KK).</span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#049851] shrink-0 mt-0.5" />
                  <span>Bukti Kepemilikan Rumah (PBB / Rek Listrik / AJB).</span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#049851] shrink-0 mt-0.5" />
                  <span>Bukti Penghasilan (Slip Gaji / Rekening Koran 3 Bulan Terakhir).</span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#049851] shrink-0 mt-0.5" />
                  <span>Foto STNK (pajak aktif atau mati) dan BPKB asli kendaraan.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="max-w-4xl mx-auto px-4 text-center space-y-5 pb-6" aria-labelledby="section-mobil-cta">
        <h2 id="section-mobil-cta" className="text-2xl sm:text-3xl font-bold font-heading text-[#0A335D] tracking-tight">
          Taksir Nilai Pencairan Mobil Anda Sekarang
        </h2>
        <p className="text-[#64748B] text-sm sm:text-base max-w-xl mx-auto">
          Cukup kirimkan foto STNK & BPKB via WhatsApp, tim kami akan segera menghitung taksiran plafon maksimal untuk mobil Anda dalam hitungan menit.
        </p>
        <div className="pt-2">
          <a
            href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=Halo%2C%20saya%20mau%20taksir%20nilai%20pencairan%20BPKB%20Mobil%20saya.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-[#049851] hover:bg-[#067A42] text-white font-semibold py-4 px-8 rounded-[12px] transition-all duration-200 text-sm shadow-md"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Chat WhatsApp untuk Taksir Mobil</span>
          </a>
        </div>
      </section>
    </div>
  );
}
