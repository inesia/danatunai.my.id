"use client";

import { useState } from "react";
import { Car, Bike, Truck, Send, ShieldCheck, CheckCircle2, Lock, Clock } from "lucide-react";
import { openWhatsAppChat } from "@/lib/whatsapp";

interface QuickApplicationFormProps {
  defaultType?: "Mobil" | "Motor" | "Komersial";
  title?: string;
  subtitle?: string;
}

export default function QuickApplicationForm({
  defaultType = "Mobil",
  title = "Form Pengajuan Dana Tunai",
  subtitle = "Konsultasi taksiran pencairan maksimal & proses cepat via WhatsApp",
}: QuickApplicationFormProps) {
  const [vehicleCategory, setVehicleCategory] = useState<"Mobil" | "Motor" | "Komersial">(defaultType);
  const [name, setName] = useState("");
  const [brandModel, setBrandModel] = useState("");
  const [year, setYear] = useState("2019");
  const [city, setCity] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [taxStatus, setTaxStatus] = useState<"Hidup" | "Mati / Telat">("Hidup");

  const currentYear = new Date().getFullYear();
  const yearOptions = Array.from({ length: 17 }, (_, i) => String(currentYear - i));

  const amountPresets =
    vehicleCategory === "Motor"
      ? ["Rp 5 Juta", "Rp 10 Juta", "Rp 20 Juta", "Rp 35 Juta"]
      : ["Rp 30 Juta", "Rp 75 Juta", "Rp 150 Juta", "Rp 300 Juta+"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    openWhatsAppChat({
      name: name || undefined,
      vehicleType: vehicleCategory,
      brandModel: brandModel || undefined,
      year: year || undefined,
      city: city || undefined,
      loanAmount: loanAmount || undefined,
      notes: `Status Pajak STNK: ${taxStatus}. Pengajuan langsung via Form Website.`,
    });
  };

  return (
    <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/60 border border-slate-200/90 overflow-hidden">
      {/* Header Accent */}
      <div className="bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-900 p-5 sm:p-6 text-white">
        <div className="flex items-center justify-between mb-2">
          <span className="inline-flex items-center space-x-1.5 bg-white/20 text-blue-100 text-[11px] font-semibold px-2.5 py-1 rounded-full backdrop-blur-sm">
            <Clock className="w-3.5 h-3.5 text-emerald-300" />
            <span>Respon Cepat &bull; 1 Hari Cair</span>
          </span>
          <span className="text-[11px] font-medium text-blue-200 flex items-center space-x-1">
            <Lock className="w-3 h-3 text-emerald-400" />
            <span>Data 100% Aman</span>
          </span>
        </div>
        <h3 className="text-xl sm:text-2xl font-black tracking-tight">{title}</h3>
        <p className="text-xs sm:text-sm text-blue-100/90 mt-1">{subtitle}</p>
      </div>

      {/* Form Content */}
      <form onSubmit={handleSubmit} className="p-5 sm:p-6 space-y-4">
        {/* Vehicle Type Tabs */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
            Pilih Jenis Agunan Kendaraan
          </label>
          <div className="grid grid-cols-3 gap-2">
            <button
              type="button"
              onClick={() => setVehicleCategory("Mobil")}
              className={`flex items-center justify-center space-x-1.5 py-2.5 px-3 rounded-xl border text-xs sm:text-sm font-bold transition-all ${
                vehicleCategory === "Mobil"
                  ? "bg-blue-600 border-blue-600 text-white shadow-md shadow-blue-500/20"
                  : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
              }`}
            >
              <Car className="w-4 h-4 shrink-0" />
              <span>Mobil</span>
            </button>

            <button
              type="button"
              onClick={() => setVehicleCategory("Motor")}
              className={`flex items-center justify-center space-x-1.5 py-2.5 px-3 rounded-xl border text-xs sm:text-sm font-bold transition-all ${
                vehicleCategory === "Motor"
                  ? "bg-emerald-600 border-emerald-600 text-white shadow-md shadow-emerald-500/20"
                  : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
              }`}
            >
              <Bike className="w-4 h-4 shrink-0" />
              <span>Motor</span>
            </button>

            <button
              type="button"
              onClick={() => setVehicleCategory("Komersial")}
              className={`flex items-center justify-center space-x-1.5 py-2.5 px-3 rounded-xl border text-xs sm:text-sm font-bold transition-all ${
                vehicleCategory === "Komersial"
                  ? "bg-indigo-600 border-indigo-600 text-white shadow-md shadow-indigo-500/20"
                  : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
              }`}
            >
              <Truck className="w-4 h-4 shrink-0" />
              <span>Truk / Pick Up</span>
            </button>
          </div>
        </div>

        {/* Input Nama Lengkap */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">Nama Lengkap</label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nama Anda (sesuai KTP)"
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder:text-slate-400"
          />
        </div>

        {/* Merk & Tahun Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
          <div className="sm:col-span-8">
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Merk & Tipe Kendaraan
            </label>
            <input
              type="text"
              required
              value={brandModel}
              onChange={(e) => setBrandModel(e.target.value)}
              placeholder={
                vehicleCategory === "Motor"
                  ? "Contoh: Honda Vario 160 / NMAX"
                  : vehicleCategory === "Komersial"
                  ? "Contoh: Mitsubishi Canter / GranMax"
                  : "Contoh: Toyota Avanza G / Innova"
              }
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder:text-slate-400"
            />
          </div>

          <div className="sm:col-span-4">
            <label className="block text-xs font-semibold text-slate-700 mb-1">Tahun Unit</label>
            <select
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-800 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            >
              {yearOptions.map((y) => (
                <option key={y} value={y}>
                  {y}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Kota Domisili & Status Pajak */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
          <div className="sm:col-span-7">
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Kota / Wilayah Domisili
            </label>
            <input
              type="text"
              required
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Contoh: Jakarta / Surabaya / Bandung"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder:text-slate-400"
            />
          </div>

          <div className="sm:col-span-5">
            <label className="block text-xs font-semibold text-slate-700 mb-1">Status Pajak</label>
            <select
              value={taxStatus}
              onChange={(e) => setTaxStatus(e.target.value as "Hidup" | "Mati / Telat")}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-800 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            >
              <option value="Hidup">Pajak Hidup</option>
              <option value="Mati / Telat">Pajak Mati / Telat (Bisa)</option>
            </select>
          </div>
        </div>

        {/* Kebutuhan Dana */}
        <div>
          <div className="flex justify-between items-center mb-1">
            <label className="block text-xs font-semibold text-slate-700">
              Estimasi Kebutuhan Dana (Plafon)
            </label>
            <span className="text-[11px] text-slate-500 font-medium">Bisa diketik manual</span>
          </div>
          <input
            type="text"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
            placeholder="Contoh: Rp 50.000.000 atau 75 Juta"
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder:text-slate-400"
          />
          {/* Quick preset chips */}
          <div className="flex flex-wrap gap-1.5 mt-2">
            {amountPresets.map((preset) => (
              <button
                key={preset}
                type="button"
                onClick={() => setLoanAmount(preset)}
                className={`text-[11px] font-semibold px-2.5 py-1 rounded-lg border transition-colors ${
                  loanAmount === preset
                    ? "bg-blue-100 border-blue-300 text-blue-800"
                    : "bg-slate-100 border-slate-200 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {preset}
              </button>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center space-x-2 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold py-3.5 px-6 rounded-xl shadow-lg shadow-emerald-600/30 hover:shadow-xl hover:shadow-emerald-600/40 transition-all duration-200 transform hover:-translate-y-0.5 text-sm sm:text-base cursor-pointer"
          >
            <Send className="w-4 h-4" />
            <span>Ajukan Sekarang via WhatsApp</span>
          </button>
        </div>

        {/* Trust Points Under Submit */}
        <div className="pt-2 grid grid-cols-2 gap-2 text-[11px] text-slate-600 border-t border-slate-100">
          <div className="flex items-center space-x-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span>Tanpa Biaya Survei</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span>BPKB Aman di BFI Finance</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span>Pajak Mati Dibantu</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span>Pencairan Masuk Utuh</span>
          </div>
        </div>
      </form>
    </div>
  );
}
