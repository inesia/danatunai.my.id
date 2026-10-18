import Link from "next/link";
import { ShieldCheck, Phone, MapPin, Clock, Award } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Col */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-extrabold text-lg shadow-md shadow-blue-500/30">
                DT
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                DanaTunai<span className="text-blue-400">.my.id</span>
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Platform layanan informasi dan fasilitasi pengajuan pinjaman dana tunai jaminan BPKB Mobil dan Motor resmi bermitra dengan PT BFI Finance Indonesia Tbk.
            </p>
            <div className="inline-flex items-center space-x-2 text-xs bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700/80 text-emerald-400">
              <Award className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Mitra Resmi: {SITE_CONFIG.agentName}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-base tracking-wide">Produk Pinjaman</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/bpkb-mobil" className="hover:text-white transition-colors flex items-center space-x-1.5">
                  <span className="text-blue-400">&rsaquo;</span>
                  <span>Gadai BPKB Mobil (Sedan, MPV, SUV)</span>
                </Link>
              </li>
              <li>
                <Link href="/bpkb-mobil" className="hover:text-white transition-colors flex items-center space-x-1.5">
                  <span className="text-blue-400">&rsaquo;</span>
                  <span>Gadai BPKB Truk & Pick Up</span>
                </Link>
              </li>
              <li>
                <Link href="/bpkb-motor" className="hover:text-white transition-colors flex items-center space-x-1.5">
                  <span className="text-blue-400">&rsaquo;</span>
                  <span>Gadai BPKB Motor Kilat 1 Jam</span>
                </Link>
              </li>
              <li>
                <Link href="/cek-limit" className="hover:text-white transition-colors flex items-center space-x-1.5">
                  <span className="text-blue-400">&rsaquo;</span>
                  <span>Form Pengajuan Dana Tunai Online</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Keunggulan & Layanan */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-base tracking-wide">Keamanan & Keunggulan</h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li className="flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Terdaftar & Diawasi oleh OJK</span>
              </li>
              <li className="flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Anggota Resmi APPI</span>
              </li>
              <li className="flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>BPKB Tersimpan Aman di Brankas Resmi</span>
              </li>
              <li className="flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Tanpa Biaya Potongan Tersembunyi</span>
              </li>
              <li className="flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Pencairan Utuh Langsung ke Rekening Anda</span>
              </li>
            </ul>
          </div>

          {/* Kontak & Jam Kerja */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-base tracking-wide">Hubungi Kami</h4>
            <div className="space-y-3 text-sm text-slate-400">
              <div className="flex items-start space-x-3">
                <Phone className="w-4 h-4 text-blue-400 mt-1 shrink-0" />
                <div>
                  <div className="text-white font-medium">{SITE_CONFIG.phone}</div>
                  <div className="text-xs text-slate-400">Layanan WhatsApp & Panggilan</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-4 h-4 text-blue-400 mt-1 shrink-0" />
                <div>
                  <div className="text-white font-medium">Senin - Minggu: 08:00 - 22:00 WIB</div>
                  <div className="text-xs text-slate-400">Konsultasi WhatsApp 24 Jam</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-blue-400 mt-1 shrink-0" />
                <div>
                  <div className="text-white font-medium">Jaringan Layanan Nasional</div>
                  <div className="text-xs text-slate-400">Didukung ratusan kantor cabang BFI Finance di seluruh Indonesia</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer Box */}
        <div className="border-t border-slate-800 pt-8 pb-6 text-xs text-slate-500 space-y-3">
          <div className="flex items-start space-x-2.5 bg-slate-950/40 p-4 rounded-xl border border-slate-800/80">
            <ShieldCheck className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong>Pernyataan Kepatuhan & Transparansi:</strong> Website DanaTunai.my.id adalah media promosi dan edukasi mitra agen resmi (Irwan Dharmawan) dari PT BFI Finance Indonesia Tbk. BFI Finance merupakan perusahaan pembiayaan yang berizin dan diawasi oleh <strong>Otoritas Jasa Keuangan (OJK)</strong> serta anggota dari <strong>Asosiasi Perusahaan Pembiayaan Indonesia (APPI)</strong>. Seluruh proses analisis kelayakan kredit, persetujuan pinjaman, penandatanganan akad, dan pencairan dana dilaksanakan sesuai standar operasional dan kepatuhan hukum PT BFI Finance Indonesia Tbk.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left gap-2 pt-2">
            <div>
              &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. Seluruh Hak Cipta Dilindungi.
            </div>
            <div className="flex space-x-4">
              <Link href="/bpkb-mobil" className="hover:text-slate-400">Gadai BPKB Mobil</Link>
              <Link href="/bpkb-motor" className="hover:text-slate-400">Gadai BPKB Motor</Link>
              <Link href="/cek-limit" className="hover:text-slate-400">Form Pengajuan</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
