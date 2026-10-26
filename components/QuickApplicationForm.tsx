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
    <div className="bg-white rounded-[12px] shadow-soft border border-[#E2E8F0] overflow-hidden">
      {/* Brand Header - Dana Navy #0A335D */}
      <div className="bg-[#0A335D] p-5 sm:p-6 text-white border-b border-[#061F38]">
        <div className="flex items-center justify-between mb-2.5">
          <span className="inline-flex items-center space-x-1.5 bg-[#061F38] text-slate-200 text-[11px] font-medium px-2.5 py-1 rounded-full border border-blue-900/60">
            <Clock className="w-3.5 h-3.5 text-[#049851]" />
            <span>Respon Cepat 5-10 Menit</span>
          </span>
          <span className="text-[11px] text-slate-300 flex items-center space-x-1">
            <Lock className="w-3 h-3 text-[#049851]" />
            <span>Kerahasiaan Terjamin</span>
          </span>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white font-heading">{title}</h3>
        <p className="text-xs sm:text-sm text-slate-300 mt-1">{subtitle}</p>
      </div>

      {/* Form Content */}
      <form onSubmit={handleSubmit} className="p-5 sm:p-6 space-y-4">
        {/* Unified Segmented Control */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-[#64748B] mb-2">
            Pilih Kategori Agunan
          </label>
          <div className="bg-[#F8FAFC] p-1 rounded-[12px] grid grid-cols-3 gap-1 border border-[#E2E8F0]">
            <button
              type="button"
              onClick={() => setVehicleCategory("Mobil")}
              className={`flex items-center justify-center space-x-1.5 py-2.5 px-3 rounded-[8px] text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                vehicleCategory === "Mobil"
                  ? "bg-white text-[#0A335D] shadow-sm border border-[#E2E8F0]"
                  : "text-[#64748B] hover:text-[#0F172A]"
              }`}
            >
              <Car className="w-4 h-4 text-[#0A335D] shrink-0" />
              <span>Mobil</span>
            </button>

            <button
              type="button"
              onClick={() => setVehicleCategory("Motor")}
              className={`flex items-center justify-center space-x-1.5 py-2.5 px-3 rounded-[8px] text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                vehicleCategory === "Motor"
                  ? "bg-white text-[#049851] shadow-sm border border-[#E2E8F0]"
                  : "text-[#64748B] hover:text-[#0F172A]"
              }`}
            >
              <Bike className="w-4 h-4 text-[#049851] shrink-0" />
              <span>Motor</span>
            </button>

            <button
              type="button"
              onClick={() => setVehicleCategory("Komersial")}
              className={`flex items-center justify-center space-x-1.5 py-2.5 px-3 rounded-[8px] text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                vehicleCategory === "Komersial"
                  ? "bg-white text-[#0A335D] shadow-sm border border-[#E2E8F0]"
                  : "text-[#64748B] hover:text-[#0F172A]"
              }`}
            >
              <Truck className="w-4 h-4 text-[#0A335D] shrink-0" />
              <span>Truk / Pick Up</span>
            </button>
          </div>
        </div>

        {/* Input Nama Lengkap */}
        <div>
          <label className="block text-xs font-semibold text-[#0F172A] mb-1">Nama Lengkap</label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nama Anda (sesuai KTP)"
            className="w-full px-3.5 py-2.5 rounded-[12px] border border-[#E2E8F0] text-[#0F172A] text-sm focus:outline-none focus:border-[#049851] focus:ring-1 focus:ring-[#049851] transition-all placeholder:text-[#64748B]/60 bg-white"
          />
        </div>

        {/* Merk & Tahun Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
          <div className="sm:col-span-8">
            <label className="block text-xs font-semibold text-[#0F172A] mb-1">
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
                  : "Contoh: Toyota Avanza G / Innova Reborn"
              }
              className="w-full px-3.5 py-2.5 rounded-[12px] border border-[#E2E8F0] text-[#0F172A] text-sm focus:outline-none focus:border-[#049851] focus:ring-1 focus:ring-[#049851] transition-all placeholder:text-[#64748B]/60 bg-white"
            />
          </div>

          <div className="sm:col-span-4">
            <label className="block text-xs font-semibold text-[#0F172A] mb-1">Tahun Unit</label>
            <select
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-[12px] border border-[#E2E8F0] text-[#0F172A] text-sm bg-white focus:outline-none focus:border-[#049851] focus:ring-1 focus:ring-[#049851] transition-all cursor-pointer"
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
            <label className="block text-xs font-semibold text-[#0F172A] mb-1">
              Kota / Wilayah Domisili
            </label>
            <input
              type="text"
              required
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Contoh: Jakarta / Surabaya / Bandung"
              className="w-full px-3.5 py-2.5 rounded-[12px] border border-[#E2E8F0] text-[#0F172A] text-sm focus:outline-none focus:border-[#049851] focus:ring-1 focus:ring-[#049851] transition-all placeholder:text-[#64748B]/60 bg-white"
            />
          </div>

          <div className="sm:col-span-5">
            <label className="block text-xs font-semibold text-[#0F172A] mb-1">Status Pajak STNK</label>
            <select
              value={taxStatus}
              onChange={(e) => setTaxStatus(e.target.value as "Hidup" | "Mati / Telat")}
              className="w-full px-3.5 py-2.5 rounded-[12px] border border-[#E2E8F0] text-[#0F172A] text-sm bg-white focus:outline-none focus:border-[#049851] focus:ring-1 focus:ring-[#049851] transition-all cursor-pointer"
            >
              <option value="Hidup">Pajak Hidup</option>
              <option value="Mati / Telat">Pajak Mati / Telat (Bisa)</option>
            </select>
          </div>
        </div>

        {/* Kebutuhan Dana */}
        <div>
          <div className="flex justify-between items-center mb-1">
            <label className="block text-xs font-semibold text-[#0F172A]">
              Estimasi Plafon yang Dibutuhkan
            </label>
            <span className="text-[11px] text-[#64748B] font-medium">Bisa ketik manual</span>
          </div>
          <input
            type="text"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
            placeholder="Contoh: Rp 50.000.000 atau 75 Juta"
            className="w-full px-3.5 py-2.5 rounded-[12px] border border-[#E2E8F0] text-[#0F172A] text-sm focus:outline-none focus:border-[#049851] focus:ring-1 focus:ring-[#049851] transition-all placeholder:text-[#64748B]/60 bg-white"
          />
          {/* Quick preset chips */}
          <div className="flex flex-wrap gap-1.5 mt-2">
            {amountPresets.map((preset) => (
              <button
                key={preset}
                type="button"
                onClick={() => setLoanAmount(preset)}
                className={`text-[11px] font-medium px-2.5 py-1 rounded-[8px] border transition-colors cursor-pointer ${
                  loanAmount === preset
                    ? "bg-[#E8F8F0] border-[#049851] text-[#049851] font-semibold"
                    : "bg-[#F8FAFC] border-[#E2E8F0] text-[#64748B] hover:bg-slate-100"
                }`}
              >
                {preset}
              </button>
            ))}
          </div>
        </div>

        {/* Submit Button - Tunai Green #049851 */}
        <div className="pt-2">
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center space-x-2 bg-[#049851] hover:bg-[#067A42] active:bg-[#036E3A] text-white font-semibold py-3.5 px-6 rounded-[12px] shadow-soft transition-all duration-150 text-sm sm:text-base cursor-pointer"
          >
            <Send className="w-4 h-4" />
            <span>Cek Taksiran & Konsultasi via WhatsApp</span>
          </button>
          <p className="text-[11px] text-center text-[#64748B] mt-2">
            Konsultasi 100% gratis & tanpa potongan biaya pendaftaran awal.
          </p>
        </div>

        {/* Trust Points Under Submit */}
        <div className="pt-3 grid grid-cols-2 gap-2 text-[11px] text-[#64748B] border-t border-[#E2E8F0]">
          <div className="flex items-center space-x-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#049851] shrink-0" />
            <span>Tanpa Biaya Survei</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#049851] shrink-0" />
            <span>Agunan Aman di BFI Finance</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#049851] shrink-0" />
            <span>Pajak Mati Bisa Diproses</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#049851] shrink-0" />
            <span>Pencairan Masuk Utuh</span>
          </div>
        </div>
      </form>
    </div>
  );
}
