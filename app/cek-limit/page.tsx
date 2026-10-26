import type { Metadata } from "next";
import Link from "next/link";
import { FileText, ShieldCheck, CheckCircle2, PhoneCall, Clock, Lock, Sparkles, ChevronRight } from "lucide-react";
import QuickApplicationForm from "@/components/QuickApplicationForm";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Form Pengajuan Online Pinjaman Dana Tunai BPKB — Cek Limit Cepat",
  description:
    "Formulir pengajuan online pinjaman dana tunai jaminan BPKB Mobil & Motor resmi BFI Finance. Respon cepat 5-10 menit, taksiran pencairan maksimal, dan tanpa biaya survei.",
  keywords: [
    "form pengajuan pinjaman bpkb",
    "cek limit pinjaman bpkb",
    "pengajuan dana tunai bpkb",
    "gadai bpkb mobil online",
    "pengajuan bpkb motor bfi finance",
    "pinjaman dana tunai aman ojk",
  ],
  alternates: {
    canonical: "/cek-limit",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: `${SITE_CONFIG.siteUrl}/cek-limit`,
    title: "Form Pengajuan Online Pinjaman Dana Tunai BPKB — Cek Limit Cepat",
    description: "Konsultasi taksiran pencairan maksimal gratis via WhatsApp resmi BFI Finance.",
    images: ["/logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Form Pengajuan Online Pinjaman Dana Tunai BPKB — Cek Limit Cepat",
    description: "Formulir online respon kilat 5-10 menit jaminan BPKB Mobil & Motor.",
    images: ["/logo.png"],
  },
};

export default function PengajuanPage() {
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
        "name": "Form Pengajuan Pinjaman",
        "item": `${SITE_CONFIG.siteUrl}/cek-limit`,
      },
    ],
  };

  return (
    <div className="py-8 md:py-10 space-y-16">
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
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
              Form Pengajuan Pinjaman
            </li>
          </ol>
        </nav>

        <div className="text-center space-y-4 mb-10">
          <div className="inline-flex items-center space-x-2 bg-[#E8F8F0] border border-[#049851]/30 text-[#049851] text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full shadow-sm">
            <FileText className="w-4 h-4 text-[#049851]" />
            <span>Fasilitasi Pinjaman Resmi Mitra BFI Finance</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-[#0A335D] tracking-tight">
            Form Pengajuan Dana Tunai BPKB
          </h1>

          <p className="text-base sm:text-lg text-[#64748B] max-w-2xl mx-auto leading-relaxed font-normal">
            Isi formulir pengajuan di bawah ini untuk konsultasi taksiran pencairan maksimal kendaraan Anda. Tim kami akan segera merespon dan memandu hingga dana cair ke rekening Anda.
          </p>
        </div>

        {/* Center Application Form */}
        <div className="max-w-2xl mx-auto">
          <QuickApplicationForm
            defaultType="Mobil"
            title="Formulir Konsultasi Pinjaman"
            subtitle="Konsultasi gratis & respon cepat 5-10 menit via WhatsApp"
          />
        </div>

        {/* Informative Guidance & Documents Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Alur Proses */}
          <div className="bg-[#F8FAFC] rounded-[12px] p-6 sm:p-8 border border-[#E2E8F0] shadow-sm space-y-5">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-[12px] bg-dna-gradient text-white flex items-center justify-center font-bold shadow-md">
                <Clock className="w-6 h-6" />
              </div>
              <h2 className="text-lg sm:text-xl font-bold font-heading text-[#0A335D]">
                Alur Proses Pengajuan Cepat
              </h2>
            </div>

            <ol className="space-y-4 text-xs sm:text-sm text-[#0F172A]">
              <li className="flex items-start space-x-3">
                <span className="w-6 h-6 rounded-full bg-[#0A335D] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  1
                </span>
                <div>
                  <strong className="text-[#0A335D]">Isi Form Pengajuan:</strong>
                  <p className="text-[#64748B] text-xs mt-0.5">Lengkapi data kendaraan dan kontak Anda pada form di atas.</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <span className="w-6 h-6 rounded-full bg-[#0A335D] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  2
                </span>
                <div>
                  <strong className="text-[#0A335D]">Taksiran Nilai & Konsultasi WA:</strong>
                  <p className="text-[#64748B] text-xs mt-0.5">Tim konsultan kami akan menginfokan taksiran nilai pencairan maksimal dan tenor terbaik.</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <span className="w-6 h-6 rounded-full bg-[#0A335D] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  3
                </span>
                <div>
                  <strong className="text-[#0A335D]">Verifikasi & Cek Fisik:</strong>
                  <p className="text-[#64748B] text-xs mt-0.5">Pemeriksaan fisik kendaraan bisa fleksibel di rumah Anda atau cabang BFI terdekat.</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <span className="w-6 h-6 rounded-full bg-[#049851] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  4
                </span>
                <div>
                  <strong className="text-[#049851]">Dana Cair ke Rekening:</strong>
                  <p className="text-[#64748B] text-xs mt-0.5">Pencairan dana langsung ditransfer utuh ke rekening bank Anda tanpa potongan liar.</p>
                </div>
              </li>
            </ol>
          </div>

          {/* Persyaratan Dokumen */}
          <div className="bg-[#F8FAFC] rounded-[12px] p-6 sm:p-8 border border-[#E2E8F0] shadow-sm space-y-5 flex flex-col justify-between">
            <div className="space-y-5">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-[12px] bg-dna-gradient text-white flex items-center justify-center font-bold shadow-md">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h2 className="text-lg sm:text-xl font-bold font-heading text-[#0A335D]">
                  Dokumen yang Perlu Disiapkan
                </h2>
              </div>

              <ul className="space-y-3.5 text-xs sm:text-sm text-[#0F172A]">
                <li className="flex items-start space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#049851] shrink-0 mt-0.5" />
                  <span>Foto KTP Pemohon & Pasangan (bila sudah menikah)</span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#049851] shrink-0 mt-0.5" />
                  <span>Foto Kartu Keluarga (KK)</span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#049851] shrink-0 mt-0.5" />
                  <span>Bukti Tempat Tinggal (PBB / Rekening Listrik / AJB)</span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#049851] shrink-0 mt-0.5" />
                  <span>Bukti Penghasilan (Slip Gaji / Rekening Koran)</span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#049851] shrink-0 mt-0.5" />
                  <span>Foto STNK (pajak hidup atau mati) & BPKB Asli</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-[#E2E8F0]">
              <a
                href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=Halo%2C%20saya%20mau%20konsultasi%20pengajuan%20dana%20tunai%20BPKB.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center space-x-2 bg-[#049851] hover:bg-[#067A42] text-white font-semibold py-3.5 px-5 rounded-[12px] text-xs sm:text-sm transition-all duration-200 shadow-md"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Tanya Syarat Langsung via WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
