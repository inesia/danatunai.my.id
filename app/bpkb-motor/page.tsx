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
} from "lucide-react";
import QuickApplicationForm from "@/components/QuickApplicationForm";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Gadai BPKB Motor Cepat Cair 1-2 Jam — Mitra BFI Finance",
  description:
    "Pinjaman dana tunai jaminan BPKB Motor Honda, Yamaha, Kawasaki, Suzuki minimal 2013. Plafon s/d 50 Juta, pencairan super kilat 1-2 jam, motor tetap bisa dipakai.",
  keywords: [
    "gadai bpkb motor",
    "pinjaman jaminan bpkb motor",
    "dana tunai bpkb motor bfi",
    "gadai bpkb motor nmax beat vario",
    "pinjaman cepat cair 1 jam bpkb motor",
  ],
};

export default function BpkbMotorPage() {
  return (
    <div className="py-10 space-y-16">
      {/* HEADER SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-800 text-xs font-semibold px-3 py-1 rounded-full border border-emerald-200">
              <Zap className="w-4 h-4 text-emerald-600" />
              <span>Pencairan Kilat 1 - 2 Jam Cair Resmi BFI Finance</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Pinjaman Cepat Jaminan{" "}
              <span className="text-emerald-600">BPKB Motor</span> Tanpa Ribet
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Butuh dana tunai cepat untuk kebutuhan mendadak? Ajukan jaminan BPKB motor dengan plafon hingga <strong>Rp 50 Juta</strong>. Proses kilat hanya butuh waktu 1 - 2 jam cair, motor tetap bebas Anda pakai harian.
            </p>

            {/* Fast Benefit Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center space-x-2.5 text-sm text-slate-700 bg-white p-3 rounded-xl border border-slate-200 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Pencairan Kilat 1 - 2 Jam Langsung Cair</span>
              </div>
              <div className="flex items-center space-x-2.5 text-sm text-slate-700 bg-white p-3 rounded-xl border border-slate-200 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Plafon Mulai Rp 2 Juta s/d Rp 50 Juta</span>
              </div>
              <div className="flex items-center space-x-2.5 text-sm text-slate-700 bg-white p-3 rounded-xl border border-slate-200 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Pajak Mati & Plat Luar Kota Dibantu</span>
              </div>
              <div className="flex items-center space-x-2.5 text-sm text-slate-700 bg-white p-3 rounded-xl border border-slate-200 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Tanpa BI Checking Ketat</span>
              </div>
            </div>

            <div className="pt-3 flex flex-wrap gap-3">
              <a
                href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=Halo%20Mas%20${encodeURIComponent(
                  SITE_CONFIG.agentName
                )}%2C%20saya%20mau%20ajukan%20pinjaman%20BPKB%20Motor.%20Mohon%20info%20syarat%20dan%20pengajuannya.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-6 rounded-xl shadow-lg shadow-emerald-600/30 transition-all duration-200"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Ajukan via WhatsApp</span>
              </a>
              <Link
                href="/cek-limit"
                className="inline-flex items-center space-x-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold py-3.5 px-6 rounded-xl transition-colors"
              >
                <span>Form Pengajuan Motor</span>
                <ArrowRight className="w-4 h-4" />
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
      <section className="bg-slate-100/70 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              Kriteria Motor & Dokumen yang Dibutuhkan
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Syarat ringkas, tanpa ribet, dan dapat diselesaikan dalam hari yang sama.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Kriteria Motor */}
            <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
                <Bike className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-lg text-slate-900">Kriteria Unit Motor</h3>
              <ul className="space-y-3 text-sm text-slate-600">
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Merk Utama:</strong> Honda, Yamaha, Kawasaki, Suzuki.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Tahun Kendaraan:</strong> Minimal Tahun 2013 ke atas (Matic, Bebek, Sport: Beat, Scoopy, Vario, PCX, Mio, NMAX, Aerox, KLX, dll).</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Plat kendaraan seluruh wilayah Indonesia dapat dilayani di kantor cabang terdekat.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Kondisi motor hidup, nomor mesin & rangka cocok dengan BPKB.</span>
                </li>
              </ul>
            </div>

            {/* Dokumen Motor */}
            <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-lg text-slate-900">Dokumen Pengajuan</h3>
              <ul className="space-y-3 text-sm text-slate-600">
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>KTP Pemohon & Pasangan / Orang Tua (bila belum menikah).</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Kartu Keluarga (KK).</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Bukti Tempat Tinggal (Rekening Listrik / PBB).</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>STNK asli dan BPKB asli motor.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="max-w-4xl mx-auto px-4 text-center space-y-5">
        <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
          Butuh Uang Cepat Hari Ini?
        </h2>
        <p className="text-slate-600 text-sm sm:text-base">
          Jangan ragu menghubungi kami. Cukup foto STNK motor Anda, kami langsung beritahu nominal uang yang bisa Anda terima hari ini juga!
        </p>
        <div className="pt-2">
          <a
            href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=Halo%20Mas%20${encodeURIComponent(
              SITE_CONFIG.agentName
            )}%2C%20saya%20butuh%20dana%20cepat%20jaminan%20BPKB%20Motor.%20Berapa%20bisa%20cair%3F`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg transition-transform hover:-translate-y-0.5"
          >
            <PhoneCall className="w-5 h-5" />
            <span>Chat WhatsApp Sekarang (Fast Respon)</span>
          </a>
        </div>
      </section>
    </div>
  );
}
