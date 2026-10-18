import type { Metadata } from "next";
import { FileText, ShieldCheck, CheckCircle2, PhoneCall, Clock, Lock, Sparkles } from "lucide-react";
import QuickApplicationForm from "@/components/QuickApplicationForm";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Form Pengajuan Pinjaman Dana Tunai BPKB Online — DanaTunai",
  description:
    "Formulir pengajuan online pinjaman dana tunai jaminan BPKB Mobil & Motor resmi BFI Finance. Respon cepat, taksiran pencairan maksimal, dan tanpa biaya survei.",
  keywords: [
    "form pengajuan pinjaman bpkb",
    "pengajuan dana tunai bpkb",
    "gadai bpkb mobil online",
    "pengajuan bpkb motor bfi finance",
    "pinjaman dana tunai aman ojk",
  ],
};

export default function PengajuanPage() {
  return (
    <div className="py-12 space-y-16">
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-10">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1.5 rounded-full border border-blue-200">
            <FileText className="w-4 h-4 text-blue-600" />
            <span>Pengajuan Pinjaman Resmi Mitra BFI Finance</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Form Pengajuan Dana Tunai BPKB
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Isi formulir pengajuan di bawah ini untuk konsultasi taksiran pencairan maksimal kendaraan Anda. Tim kami akan segera merespon dan memandu hingga dana cair ke rekening Anda.
          </p>
        </div>

        {/* Center Application Form */}
        <div className="max-w-2xl mx-auto">
          <QuickApplicationForm
            defaultType="Mobil"
            title="Formulir Pengajuan Dana Tunai"
            subtitle="Konsultasi gratis & respon cepat langsung dengan Mitra Resmi BFI Finance"
          />
        </div>

        {/* Informative Guidance & Documents Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Alur Proses */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md space-y-5">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center font-bold">
                <Clock className="w-5 h-5" />
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                Alur Proses Pengajuan Cepat
              </h2>
            </div>

            <ol className="space-y-4 text-sm text-slate-700">
              <li className="flex items-start space-x-3">
                <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  1
                </span>
                <div>
                  <strong className="text-slate-900">Isi Form Pengajuan:</strong>
                  <p className="text-slate-600 text-xs mt-0.5">Lengkapi data kendaraan dan kontak Anda di atas.</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  2
                </span>
                <div>
                  <strong className="text-slate-900">Taksiran Nilai & Konsultasi WA:</strong>
                  <p className="text-slate-600 text-xs mt-0.5">Mas Irwan akan menginfokan taksiran plafon maksimal dan rincian tenor terbaik.</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  3
                </span>
                <div>
                  <strong className="text-slate-900">Verifikasi & Cek Fisik:</strong>
                  <p className="text-slate-600 text-xs mt-0.5">Pemeriksaan fisik kendaraan bisa di rumah Anda atau kantor cabang BFI Finance terdekat.</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <span className="w-6 h-6 rounded-full bg-emerald-600 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  4
                </span>
                <div>
                  <strong className="text-slate-900">Dana Cair ke Rekening:</strong>
                  <p className="text-slate-600 text-xs mt-0.5">Pencairan masuk utuh langsung ke rekening bank Anda.</p>
                </div>
              </li>
            </ol>
          </div>

          {/* Persyaratan Dokumen */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md space-y-5">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                Dokumen yang Perlu Disiapkan
              </h2>
            </div>

            <ul className="space-y-3 text-sm text-slate-700">
              <li className="flex items-start space-x-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Foto KTP Pemohon & Pasangan (bila sudah menikah)</span>
              </li>
              <li className="flex items-start space-x-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Foto Kartu Keluarga (KK)</span>
              </li>
              <li className="flex items-start space-x-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Bukti Tempat Tinggal (PBB / Rekening Listrik / AJB)</span>
              </li>
              <li className="flex items-start space-x-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Bukti Penghasilan (Slip Gaji / Rekening Koran)</span>
              </li>
              <li className="flex items-start space-x-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Foto STNK (pajak hidup atau mati) & BPKB Asli</span>
              </li>
            </ul>

            <div className="pt-2 border-t border-slate-100">
              <a
                href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=Halo%20Mas%20${encodeURIComponent(
                  SITE_CONFIG.agentName
                )}%2C%20saya%20mau%20konsultasi%20pengajuan%20dana%20tunai%20BPKB.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-5 rounded-xl text-xs sm:text-sm shadow-md transition-colors"
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
