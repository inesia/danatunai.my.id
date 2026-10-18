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
} from "lucide-react";
import QuickApplicationForm from "@/components/QuickApplicationForm";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Gadai BPKB Mobil Cepat Cair Bunga 0.6% — Mitra BFI Finance",
  description:
    "Pinjaman dana tunai jaminan BPKB Mobil (Sedan, MPV, SUV, Pick Up, Truk). Plafon hingga 2 Miliar, bunga mulai 0.6%, proses 1 hari kerja cair, BPKB aman di BFI Finance resmi OJK.",
  keywords: [
    "gadai bpkb mobil",
    "pinjaman jaminan bpkb mobil",
    "dana tunai bpkb mobil bfi",
    "kredit bpkb mobil avanza xenia innova",
    "bunga rendah gadai bpkb mobil",
  ],
};

export default function BpkbMobilPage() {
  return (
    <div className="py-10 space-y-16">
      {/* HEADER SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full border border-blue-200">
              <Car className="w-4 h-4 text-blue-600" />
              <span>Program Pembiayaan BPKB Mobil Resmi BFI Finance</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Pinjaman Dana Tunai Jaminan{" "}
              <span className="text-blue-600">BPKB Mobil</span> Cepat Cair
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Dapatkan plafon pinjaman mulai <strong>Rp 20 Juta hingga Rp 2 Miliar+</strong> dengan suku bunga ringan mulai <strong>0.6% flat/bulan</strong>. Mobil tetap Anda gunakan untuk keperluan sehari-hari atau bisnis.
            </p>

            {/* Fast Benefit Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center space-x-2.5 text-sm text-slate-700 bg-white p-3 rounded-xl border border-slate-200 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Pencairan Hingga 85% Nilai Pasar</span>
              </div>
              <div className="flex items-center space-x-2.5 text-sm text-slate-700 bg-white p-3 rounded-xl border border-slate-200 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Tenor Fleksibel 12 s/d 48 Bulan</span>
              </div>
              <div className="flex items-center space-x-2.5 text-sm text-slate-700 bg-white p-3 rounded-xl border border-slate-200 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Pajak Mati / Plat Luar Kota Bisa</span>
              </div>
              <div className="flex items-center space-x-2.5 text-sm text-slate-700 bg-white p-3 rounded-xl border border-slate-200 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Tanpa BI Checking Kaku / Fleksibel</span>
              </div>
            </div>

            <div className="pt-3 flex flex-wrap gap-3">
              <a
                href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=Halo%20Mas%20${encodeURIComponent(
                  SITE_CONFIG.agentName
                )}%2C%20saya%20ingin%20mengajukan%20pinjaman%20BPKB%20Mobil.%20Mohon%20dibantu%20pengajuan%20dan%20persyaratannya.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-6 rounded-xl shadow-lg shadow-emerald-600/30 transition-all duration-200"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Konsultasi WA Mas Irwan</span>
              </a>
              <Link
                href="/cek-limit"
                className="inline-flex items-center space-x-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold py-3.5 px-6 rounded-xl transition-colors"
              >
                <span>Form Pengajuan Mobil</span>
                <ArrowRight className="w-4 h-4" />
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
      <section className="bg-slate-100/70 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              Syarat & Kriteria Pengajuan Gadai BPKB Mobil
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Persyaratan mudah dan jelas untuk memastikan proses pencairan berjalan cepat dan lancar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Kriteria Kendaraan */}
            <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
                <Car className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-lg text-slate-900">Kriteria Unit Mobil</h3>
              <ul className="space-y-3 text-sm text-slate-600">
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Mobil Penumpang (Passanger):</strong> Min. Tahun 2008 (Sedan, Minibus, MPV, SUV: Avanza, Innova, Fortuner, Pajero, Xpander, CR-V, Jazz, dll).</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Mobil Komersial:</strong> Min. Tahun 2013 (Pick Up, Box, Truk engkel/dobel: L300, GranMax, Canter, Isuzu Elf, Hino Dutro).</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Plat kendaraan seluruh wilayah Indonesia dapat diproses.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>BPKB atas nama sendiri, pasangan, orang tua, atau atas nama orang lain (bisa dibantu proses balik nama/mutasi).</span>
                </li>
              </ul>
            </div>

            {/* Dokumen Persyaratan */}
            <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-lg text-slate-900">Dokumen yang Disiapkan</h3>
              <ul className="space-y-3 text-sm text-slate-600">
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Foto KTP Pemohon & Pasangan (jika sudah menikah).</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Foto Kartu Keluarga (KK).</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Bukti Kepemilikan Rumah (PBB / Rek Listrik / AJB).</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Bukti Penghasilan (Slip Gaji / Rekening Koran 3 Bulan Terakhir).</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Foto STNK (pajak aktif atau mati) dan BPKB asli kendaraan.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="max-w-4xl mx-auto px-4 text-center space-y-5">
        <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
          Taksir Nilai Pencairan Mobil Anda Sekarang
        </h2>
        <p className="text-slate-600 text-sm sm:text-base">
          Cukup kirimkan foto STNK & BPKB via WhatsApp, tim kami akan segera menghitung taksiran plafon maksimal untuk mobil Anda dalam hitungan menit.
        </p>
        <div className="pt-2">
          <a
            href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=Halo%20Mas%20${encodeURIComponent(
              SITE_CONFIG.agentName
            )}%2C%20saya%20mau%20taksir%20nilai%20pencairan%20BPKB%20Mobil%20saya.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg transition-transform hover:-translate-y-0.5"
          >
            <PhoneCall className="w-5 h-5" />
            <span>Chat WhatsApp untuk Taksir Mobil</span>
          </a>
        </div>
      </section>
    </div>
  );
}
