import { Star, ShieldCheck, CheckCircle2 } from "lucide-react";

interface TestimonialItem {
  name: string;
  profession: string;
  branch: string;
  vehicle: string;
  disbursedAmount: string;
  purpose: string;
  review: string;
}

const TESTIMONIAL_DATA: TestimonialItem[] = [
  {
    name: "Hendro Saputro",
    profession: "Wiraswasta (Toko Bangunan)",
    branch: "BFI Finance Cabang Bekasi",
    vehicle: "Toyota Avanza 1.3 G (2018)",
    disbursedAmount: "Rp 95.000.000",
    purpose: "Penambahan Stok Semen & Material",
    review: "Pendampingan tim konsultan sangat membantu. Dari taksiran awal sampai survei unit sangat transparan. Hari Senin berkas masuk, Selasa siang dana sudah ditransfer utuh ke rekening tanpa potongan liar.",
  },
  {
    name: "Siti Rahmawati",
    profession: "Pengusaha Kuliner & Catering",
    branch: "BFI Finance Cabang Surabaya",
    vehicle: "Honda Scoopy Prestige (2021)",
    disbursedAmount: "Rp 11.500.000",
    purpose: "Modal Bahan Baku Pesanan Hajatan",
    review: "Awalnya khawatir karena STNK telat pajak 1 tahun. Ternyata dibantu koordinasi dan solusinya sangat jelas. Dalam hitungan jam dana cair, dan motor tetap bisa saya pakai operasional belanja pasar.",
  },
  {
    name: "Agus Pratama",
    profession: "Kontraktor & Logistik",
    branch: "BFI Finance Cabang Tangerang",
    vehicle: "Mitsubishi Canter HD 125 PS (2019)",
    disbursedAmount: "Rp 210.000.000",
    purpose: "Peremajaan Armada & Operasional Proyek",
    review: "Simulasi di website ini sangat presisi dengan penawaran resmi kantor cabang. Perhitungan bunga transparan dan ada tanda terima resmi BPKB dari BFI Finance. Sangat profesional.",
  },
];

export default function Testimonials() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {TESTIMONIAL_DATA.map((t, idx) => (
        <div
          key={idx}
          className="bg-white rounded-xl p-6 border border-slate-200/90 shadow-sm flex flex-col justify-between"
        >
          <div className="space-y-3.5">
            {/* Top metadata */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <span className="text-[11px] font-semibold text-slate-500">
                {t.branch}
              </span>
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
            </div>

            {/* Purpose & Amount Badge */}
            <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-100 space-y-1">
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-500 font-medium">Unit:</span>
                <span className="font-semibold text-slate-800">{t.vehicle}</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-500 font-medium">Nilai Cair:</span>
                <span className="font-bold text-emerald-700">{t.disbursedAmount}</span>
              </div>
            </div>

            {/* Testimonial Quote */}
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic">
              &ldquo;{t.review}&rdquo;
            </p>
          </div>

          {/* Client Identification */}
          <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
            <div>
              <div className="text-sm font-bold text-slate-900">{t.name}</div>
              <div className="text-[11px] text-slate-500">{t.profession}</div>
            </div>
            <div className="flex items-center text-[10px] font-medium text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded">
              <CheckCircle2 className="w-3 h-3 mr-1 text-emerald-600" />
              <span>Terverifikasi</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
