"use client";

import { useState } from "react";
import { Car, Bike, Truck, ShieldCheck, Lock } from "lucide-react";
import { openWhatsAppChat } from "@/lib/whatsapp";

type AgunanType = "Mobil" | "Motor" | "Truk";

export default function HeroLeadForm() {
  const [agunan, setAgunan] = useState<AgunanType>("Mobil");
  const [merkTipe, setMerkTipe] = useState("");
  const [tahun, setTahun] = useState("2022");
  const [whatsapp, setWhatsapp] = useState("");

  const currentYear = new Date().getFullYear();
  const yearOptions = Array.from({ length: 20 }, (_, i) => String(currentYear - i));

  const placeholders: Record<AgunanType, string> = {
    Mobil: "cth: Toyota Avanza 1.5 G",
    Motor: "cth: Honda Vario 160",
    Truk: "cth: Mitsubishi Canter",
  };

  const chips: { label: string; value: AgunanType; icon: typeof Car }[] = [
    { label: "Mobil", value: "Mobil", icon: Car },
    { label: "Motor", value: "Motor", icon: Bike },
    { label: "Truk", value: "Truk", icon: Truck },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    openWhatsAppChat({
      vehicleType: agunan,
      brandModel: merkTipe || undefined,
      year: tahun,
      notes: whatsapp ? `No. WhatsApp: ${whatsapp}` : undefined,
    });
  };

  return (
    <div className="w-full bg-white rounded-2xl shadow-[0_8px_40px_-8px_rgba(10,51,93,0.12)] border border-slate-200/80 overflow-hidden">
      {/* Card Header */}
      <div className="px-6 pt-6 pb-4">
        <div className="flex items-center justify-between mb-1">
          <h3 className="text-lg font-bold text-[#0A335D]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Cek Limit Pinjaman
          </h3>
          <span className="inline-flex items-center space-x-1 text-[10px] font-medium text-slate-400">
            <Lock className="w-3 h-3" />
            <span>Data aman</span>
          </span>
        </div>
        <p className="text-xs text-slate-500">Isi 4 data saja — respon 5 menit via WA</p>
      </div>

      <form onSubmit={handleSubmit} className="px-6 pb-6 space-y-4">
        {/* 1. Jenis Agunan Chips */}
        <div>
          <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-2">
            Jenis Agunan
          </label>
          <div className="flex gap-2">
            {chips.map((chip) => {
              const Icon = chip.icon;
              const active = agunan === chip.value;
              return (
                <button
                  key={chip.value}
                  type="button"
                  onClick={() => setAgunan(chip.value)}
                  className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                    active
                      ? "bg-[#0A335D] text-white shadow-md"
                      : "bg-slate-50 text-slate-500 border border-slate-200 hover:border-slate-300"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{chip.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 2. Merk & Tipe */}
        <div>
          <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-1.5">
            Merk & Tipe Kendaraan
          </label>
          <input
            type="text"
            required
            value={merkTipe}
            onChange={(e) => setMerkTipe(e.target.value)}
            placeholder={placeholders[agunan]}
            className="w-full h-11 px-4 rounded-xl border border-slate-200 text-sm text-[#0F172A] bg-white placeholder:text-slate-300 focus:outline-none focus:border-[#049851] focus:ring-2 focus:ring-[#049851]/20 transition-all"
          />
        </div>

        {/* 3. Tahun */}
        <div>
          <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-1.5">
            Tahun Kendaraan
          </label>
          <select
            value={tahun}
            onChange={(e) => setTahun(e.target.value)}
            className="w-full h-11 px-4 rounded-xl border border-slate-200 text-sm text-[#0F172A] bg-white focus:outline-none focus:border-[#049851] focus:ring-2 focus:ring-[#049851]/20 transition-all cursor-pointer appearance-none"
            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2394a3b8' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 14px center' }}
          >
            {yearOptions.map((y) => (
              <option key={y} value={y}>{y}</option>
            ))}
          </select>
        </div>

        {/* 4. No WhatsApp */}
        <div>
          <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-1.5">
            No. WhatsApp
          </label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-slate-400 font-medium select-none">
              +62
            </span>
            <input
              type="tel"
              required
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value.replace(/\D/g, ""))}
              placeholder="8xx-xxxx-xxxx"
              maxLength={13}
              className="w-full h-11 pl-12 pr-4 rounded-xl border border-slate-200 text-sm text-[#0F172A] bg-white placeholder:text-slate-300 focus:outline-none focus:border-[#049851] focus:ring-2 focus:ring-[#049851]/20 transition-all"
            />
          </div>
        </div>

        {/* CTA */}
        <button
          type="submit"
          className="w-full h-12 bg-[#049851] hover:bg-[#067A42] active:scale-[0.98] text-white font-bold rounded-xl shadow-lg shadow-emerald-600/20 transition-all duration-150 text-[15px] cursor-pointer flex items-center justify-center gap-2"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.612.616l4.534-1.468A11.956 11.956 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75c-2.15 0-4.163-.68-5.812-1.838l-.416-.283-2.693.872.893-2.647-.312-.44A9.709 9.709 0 012.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75z"/></svg>
          Cek Limit via WhatsApp
        </button>

        {/* Trust strip */}
        <div className="flex items-center justify-center gap-4 pt-1 text-[10px] text-slate-400">
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-3 h-3 text-[#049851]" />
            Diawasi OJK
          </span>
          <span className="w-px h-3 bg-slate-200" />
          <span className="flex items-center gap-1">
            <Lock className="w-3 h-3 text-[#049851]" />
            Tanpa biaya
          </span>
          <span className="w-px h-3 bg-slate-200" />
          <span>Gratis konsultasi</span>
        </div>
      </form>
    </div>
  );
}
