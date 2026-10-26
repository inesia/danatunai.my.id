import type { Metadata } from "next";
import Link from "next/link";
import {
  Bike,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Zap,
  FileText,
  PhoneCall,
  ArrowRight,
  Sparkles,
  ChevronRight,
} from "lucide-react";
import QuickApplicationForm from "@/components/QuickApplicationForm";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Gadai BPKB Motor Cepat Cair 1-2 Jam — Mitra Resmi BFI Finance",
  description:
    "Pinjaman dana tunai jaminan BPKB Motor Honda, Yamaha, Kawasaki, Suzuki minimal 2013. Plafon s/d 50 Juta, pencairan super kilat 1-2 jam, motor tetap bisa dipakai.",
  keywords: [
    "gadai bpkb motor",
    "pinjaman jaminan bpkb motor",
    "dana tunai bpkb motor bfi",
    "gadai bpkb motor nmax beat vario",
    "pinjaman cepat cair 1 jam bpkb motor",
    "gadai bpkb motor tanpa bi checking",
    "gadai bpkb motor plat daerah",
  ],
  alternates: {
    canonical: "/bpkb-motor",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: `${SITE_CONFIG.siteUrl}/bpkb-motor`,
    title: "Gadai BPKB Motor Cepat Cair 1-2 Jam — Mitra Resmi BFI Finance",
    description:
      "Pinjaman dana tunai kilat jaminan BPKB Motor resmi BFI Finance. Plafon hingga 50 Juta, cair 1-2 jam, motor tetap dipakai.",
    images: ["/logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gadai BPKB Motor Cepat Cair 1-2 Jam — Mitra Resmi BFI Finance",
    description: "Plafon s/d 50 Juta, pencairan kilat 1-2 jam, motor tetap dipakai.",
    images: ["/logo.png"],
  },
};

export default function BpkbMotorPage() {
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
        "name": "Gadai BPKB Motor",
        "item": `${SITE_CONFIG.siteUrl}/bpkb-motor`,
      },
    ],
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "FinancialProduct",
    "name": "Pinjaman Dana Tunai Jaminan BPKB Motor",
    "description":
      "Fasilitas kredit pinjaman dana kilat 1-2 jam cair dengan jaminan BPKB Motor resmi PT BFI Finance Indonesia Tbk.",
    "annualPercentageRate": "11.5%",
    "feesAndCommissionsSpecification": "Bebas biaya survei & tanpa potongan tersembunyi",
    "provider": {
      "@type": "FinancialService",
      "name": SITE_CONFIG.partnerBrand,
      "url": SITE_CONFIG.siteUrl,
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "IDR",
      "lowPrice": "2000000",
      "highPrice": "50000000",
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

      {/* HEADER SECTION */}
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
              Gadai BPKB Motor
            </li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 bg-[#E8F8F0] border border-[#049851]/30 text-[#049851] text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full shadow-sm">
              <Zap className="w-4 h-4 text-[#049851]" />
              <span>Pencairan Kilat 1 - 2 Jam Cair Resmi BFI Finance</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-[#0A335D] tracking-tight leading-tight">
              Pinjaman Cepat Jaminan{" "}
              <span className="text-[#049851]">BPKB Motor</span> Tanpa Ribet
            </h1>

            <p className="text-base sm:text-lg text-[#64748B] leading-relaxed font-normal">
              Butuh dana tunai cepat untuk kebutuhan mendadak? Ajukan jaminan BPKB motor dengan plafon hingga <strong className="text-[#0F172A]">Rp 50 Juta</strong>. Proses kilat hanya butuh waktu <strong className="text-[#049851]">1 - 2 jam cair</strong>, motor tetap bebas Anda pakai untuk mobilitas sehari-hari.
            </p>

            {/* Fast Benefit Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="flex items-center space-x-3 text-xs sm:text-sm text-[#0F172A] bg-white p-3.5 rounded-[12px] border border-[#E2E8F0] shadow-sm">
                <div className="w-6 h-6 rounded-full bg-[#E8F8F0] text-[#049851] flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span>Pencairan Kilat 1 - 2 Jam Langsung Cair</span>
              </div>
              <div className="flex items-center space-x-3 text-xs sm:text-sm text-[#0F172A] bg-white p-3.5 rounded-[12px] border border-[#E2E8F0] shadow-sm">
                <div className="w-6 h-6 rounded-full bg-[#E8F8F0] text-[#049851] flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span>Plafon Mulai Rp 2 Juta s/d Rp 50 Juta</span>
              </div>
              <div className="flex items-center space-x-3 text-xs sm:text-sm text-[#0F172A] bg-white p-3.5 rounded-[12px] border border-[#E2E8F0] shadow-sm">
                <div className="w-6 h-6 rounded-full bg-[#E8F8F0] text-[#049851] flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span>Pajak Mati & Plat Luar Kota Dibantu</span>
              </div>
              <div className="flex items-center space-x-3 text-xs sm:text-sm text-[#0F172A] bg-white p-3.5 rounded-[12px] border border-[#E2E8F0] shadow-sm">
                <div className="w-6 h-6 rounded-full bg-[#E8F8F0] text-[#049851] flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span>Tanpa BI Checking Ketat / Fleksibel</span>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-3">
              <a
                href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=Halo%2C%20saya%20mau%20ajukan%20pinjaman%20BPKB%20Motor.%20Mohon%20info%20syarat%20dan%20pengajuannya.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-[#049851] hover:bg-[#067A42] text-white font-semibold py-3.5 px-6 rounded-[12px] transition-all duration-200 text-sm shadow-md"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Ajukan via WhatsApp</span>
              </a>
              <Link
                href="/cek-limit"
                className="inline-flex items-center space-x-2 bg-white hover:bg-slate-50 text-[#0A335D] font-semibold py-3.5 px-6 rounded-[12px] border border-[#E2E8F0] transition-colors text-sm shadow-sm"
              >
                <span>Form Pengajuan Motor</span>
                <ArrowRight className="w-4 h-4 text-[#0A335D]" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <QuickApplicationForm
              defaultType="Motor"
              title="Form Pengajuan BPKB Motor"
              subtitle="Proses kilat 1-2 jam cair, plafon s/d 50 Juta via BFI Finance"
            />
          </div>
        </div>
      </section>

      {/* SYARAT KENDARAAN & DOKUMEN MOTOR */}
      <section className="bg-white py-16 border-y border-[#E2E8F0]" aria-labelledby="section-motor-criteria">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
            <h2 id="section-motor-criteria" className="text-2xl sm:text-3xl font-bold font-heading text-[#0A335D] tracking-tight">
              Kriteria Motor & Dokumen yang Dibutuhkan
            </h2>
            <p className="text-sm sm:text-base text-[#64748B]">
              Syarat ringkas, tanpa ribet, dan dapat diselesaikan dalam hitungan jam di hari yang sama.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Kriteria Motor */}
            <div className="bg-[#F8FAFC] p-6 sm:p-8 rounded-[12px] border border-[#E2E8F0] shadow-sm space-y-5">
              <div className="w-12 h-12 rounded-[12px] bg-dna-gradient text-white flex items-center justify-center shadow-md">
                <Bike className="w-6 h-6" />
              </div>
              <h3 className="font-bold font-heading text-xl text-[#0A335D]">Kriteria Unit Motor</h3>
              <ul className="space-y-3.5 text-xs sm:text-sm text-[#0F172A]">
                <li className="flex items-start space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#049851] shrink-0 mt-0.5" />
                  <span><strong>Merk Utama:</strong> Honda, Yamaha, Kawasaki, Suzuki.</span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#049851] shrink-0 mt-0.5" />
                  <span><strong>Tahun Kendaraan:</strong> Minimal Tahun 2013 ke atas (Matic, Bebek, Sport: Beat, Scoopy, Vario, PCX, Mio, NMAX, Aerox, KLX, dll).</span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#049851] shrink-0 mt-0.5" />
                  <span>Plat kendaraan seluruh wilayah Indonesia dapat dilayani di kantor cabang BFI Finance terdekat.</span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#049851] shrink-0 mt-0.5" />
                  <span>Kondisi motor prima, nomor mesin & rangka fisik cocok dengan dokumen BPKB.</span>
                </li>
              </ul>
            </div>

            {/* Dokumen Motor */}
            <div className="bg-[#F8FAFC] p-6 sm:p-8 rounded-[12px] border border-[#E2E8F0] shadow-sm space-y-5">
              <div className="w-12 h-12 rounded-[12px] bg-dna-gradient text-white flex items-center justify-center shadow-md">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="font-bold font-heading text-xl text-[#0A335D]">Dokumen Pengajuan</h3>
              <ul className="space-y-3.5 text-xs sm:text-sm text-[#0F172A]">
                <li className="flex items-start space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#049851] shrink-0 mt-0.5" />
                  <span>KTP Pemohon & Pasangan / Orang Tua (bila belum menikah).</span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#049851] shrink-0 mt-0.5" />
                  <span>Kartu Keluarga (KK).</span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#049851] shrink-0 mt-0.5" />
                  <span>Bukti Tempat Tinggal (Rekening Listrik / PBB).</span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#049851] shrink-0 mt-0.5" />
                  <span>STNK asli (pajak hidup/mati) dan BPKB asli motor.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="max-w-4xl mx-auto px-4 text-center space-y-5 pb-6" aria-labelledby="section-motor-cta">
        <h2 id="section-motor-cta" className="text-2xl sm:text-3xl font-bold font-heading text-[#0A335D] tracking-tight">
          Butuh Uang Cepat Hari Ini?
        </h2>
        <p className="text-[#64748B] text-sm sm:text-base max-w-xl mx-auto">
          Cukup foto STNK motor Anda, kami langsung beritahu nominal uang yang bisa Anda terima hari ini juga!
        </p>
        <div className="pt-2">
          <a
            href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=Halo%2C%20saya%20butuh%20dana%20cepat%20jaminan%20BPKB%20Motor.%20Berapa%20bisa%20cair%3F`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-[#049851] hover:bg-[#067A42] text-white font-semibold py-4 px-8 rounded-[12px] transition-all duration-200 text-sm shadow-md"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Chat WhatsApp Sekarang (Fast Respon)</span>
          </a>
        </div>
      </section>
    </div>
  );
}
