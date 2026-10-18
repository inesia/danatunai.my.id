"use client";

import { useState, useMemo } from "react";
import { Calculator as CalcIcon, Car, Truck, Bike, ShieldCheck, ArrowRight, Info, Check, HelpCircle } from "lucide-react";
import { formatRupiah, openWhatsAppChat } from "@/lib/whatsapp";

interface CalculatorProps {
  defaultType?: "Mobil" | "Komersial" | "Motor";
  compact?: boolean;
}

export default function Calculator({ defaultType = "Mobil", compact = false }: CalculatorProps) {
  const [vehicleCategory, setVehicleCategory] = useState<"Mobil" | "Komersial" | "Motor">(defaultType);
  const [amount, setAmount] = useState<number>(defaultType === "Motor" ? 10000000 : 75000000);
  const [tenor, setTenor] = useState<number>(24);
  const [brandModel, setBrandModel] = useState<string>("");
  const [year, setYear] = useState<string>("2019");
  const [taxStatus, setTaxStatus] = useState<"Hidup" | "Mati">("Hidup");
  const [city, setCity] = useState<string>("");

  // Category Configuration
  const categoryConfig = useMemo(() => {
    switch (vehicleCategory) {
      case "Motor":
        return {
          min: 3000000,
          max: 45000000,
          step: 500000,
          presets: [5000000, 10000000, 20000000, 35000000],
          tenors: [6, 12, 18, 24, 36],
          flatRateMonthly: 0.0115, // 1.15% flat/bln
          placeholderBrand: "Contoh: Honda Vario 160 / Yamaha NMAX 155",
          disbursementRatio: "Hingga 80% Nilai Taksiran Pasar",
        };
      case "Komersial":
        return {
          min: 30000000,
          max: 400000000,
          step: 5000000,
          presets: [50000000, 100000000, 200000000, 350000000],
          tenors: [12, 24, 36, 48],
          flatRateMonthly: 0.0075, // 0.75% flat/bln
          placeholderBrand: "Contoh: Mitsubishi Canter / Daihatsu GranMax Pick Up",
          disbursementRatio: "Hingga 80% Nilai Taksiran Pasar",
        };
      case "Mobil":
      default:
        return {
          min: 25000000,
          max: 500000000,
          step: 5000000,
          presets: [30000000, 75000000, 150000000, 300000000],
          tenors: [12, 24, 36, 48],
          flatRateMonthly: 0.0065, // 0.65% flat/bln
          placeholderBrand: "Contoh: Toyota Avanza 1.3 G / Honda CR-V 1.5 Turbo",
          disbursementRatio: "Hingga 85% Nilai Taksiran Pasar",
        };
    }
  }, [vehicleCategory]);

  const handleCategoryChange = (cat: "Mobil" | "Komersial" | "Motor") => {
    setVehicleCategory(cat);
    if (cat === "Motor") {
      setAmount(10000000);
      setTenor(12);
    } else if (cat === "Komersial") {
      setAmount(80000000);
      setTenor(24);
    } else {
      setAmount(75000000);
      setTenor(24);
    }
  };

  // Monthly installment calculation
  const calculation = useMemo(() => {
    const principalMonthly = amount / tenor;
    const interestMonthly = amount * categoryConfig.flatRateMonthly;
    const totalMonthly = Math.round(principalMonthly + interestMonthly);
    return {
      monthlyInstallment: totalMonthly,
      ratePercentage: (categoryConfig.flatRateMonthly * 100).toFixed(2),
    };
  }, [amount, tenor, categoryConfig]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    openWhatsAppChat({
      vehicleType: vehicleCategory === "Motor" ? "Motor" : vehicleCategory === "Komersial" ? "Mobil Komersial (Pick Up/Truk)" : "Mobil Penumpang",
      brandModel: brandModel.trim() || undefined,
      year,
      loanAmount: amount,
      tenorMonths: tenor,
      city: city.trim() || undefined,
      notes: `Status Pajak: ${taxStatus} | Estimasi Angsuran: ${formatRupiah(calculation.monthlyInstallment)}/bln (Tenor ${tenor} Bln)`,
    });
  };

  return (
    <div className={`w-full rounded-2xl bg-white border border-slate-200/90 shadow-sm ${compact ? "p-5 sm:p-6" : "p-6 sm:p-8"}`}>
      {/* Simulator Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-100 gap-3">
        <div>
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
              Simulasi Pembiayaan BPKB
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Hitung perkiraan angsuran bulanan resmi berbasis standar pembiayaan BFI Finance
          </p>
        </div>
        <div className="inline-flex items-center space-x-1.5 self-start sm:self-auto bg-slate-50 border border-slate-200 px-3 py-1 rounded-md text-xs font-semibold text-slate-700">
          <ShieldCheck className="w-3.5 h-3.5 text-blue-700" />
          <span>Bunga mulai 0.6% / bln</span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="mt-6 space-y-6">
        {/* Category Segmented Tabs */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
            1. Kategori Kendaraan
          </label>
          <div className="grid grid-cols-3 gap-2 p-1 bg-slate-100 rounded-xl">
            <button
              type="button"
              onClick={() => handleCategoryChange("Mobil")}
              className={`flex items-center justify-center space-x-1.5 py-2.5 px-3 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                vehicleCategory === "Mobil"
                  ? "bg-white text-slate-900 shadow-sm border border-slate-200/60"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Car className="w-4 h-4 text-blue-600" />
              <span className="truncate">Mobil Penumpang</span>
            </button>
            <button
              type="button"
              onClick={() => handleCategoryChange("Komersial")}
              className={`flex items-center justify-center space-x-1.5 py-2.5 px-3 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                vehicleCategory === "Komersial"
                  ? "bg-white text-slate-900 shadow-sm border border-slate-200/60"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Truck className="w-4 h-4 text-amber-600" />
              <span className="truncate">Pick Up / Truk</span>
            </button>
            <button
              type="button"
              onClick={() => handleCategoryChange("Motor")}
              className={`flex items-center justify-center space-x-1.5 py-2.5 px-3 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                vehicleCategory === "Motor"
                  ? "bg-white text-slate-900 shadow-sm border border-slate-200/60"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Bike className="w-4 h-4 text-emerald-600" />
              <span className="truncate">Sepeda Motor</span>
            </button>
          </div>
        </div>

        {/* Loan Amount Section with Quick Presets */}
        <div>
          <div className="flex justify-between items-baseline mb-2">
            <label className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              2. Nominal Pengajuan Pinjaman
            </label>
            <span className="text-xl sm:text-2xl font-extrabold text-blue-900 tracking-tight">
              {formatRupiah(amount)}
            </span>
          </div>

          {/* Quick preset chips */}
          <div className="flex flex-wrap gap-1.5 mb-3">
            {categoryConfig.presets.map((preset) => (
              <button
                key={preset}
                type="button"
                onClick={() => setAmount(preset)}
                className={`text-xs px-2.5 py-1 rounded-md border font-medium transition-colors ${
                  amount === preset
                    ? "bg-blue-50 text-blue-800 border-blue-300 font-semibold"
                    : "bg-white text-slate-600 border-slate-200 hover:border-slate-300"
                }`}
              >
                {formatRupiah(preset)}
              </button>
            ))}
          </div>

          {/* Precision Slider */}
          <input
            type="range"
            min={categoryConfig.min}
            max={categoryConfig.max}
            step={categoryConfig.step}
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-700"
          />
          <div className="flex justify-between text-[11px] text-slate-400 mt-1">
            <span>Min {formatRupiah(categoryConfig.min)}</span>
            <span>Maks {formatRupiah(categoryConfig.max)}</span>
          </div>
        </div>

        {/* Tenor Selection */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
            3. Jangka Waktu (Tenor)
          </label>
          <div className="grid grid-cols-4 sm:grid-cols-5 gap-2">
            {categoryConfig.tenors.map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setTenor(t)}
                className={`py-2 px-3 text-center rounded-lg text-xs sm:text-sm font-semibold transition-colors border ${
                  tenor === t
                    ? "bg-slate-900 text-white border-slate-900"
                    : "bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                }`}
              >
                {t} Bulan
              </button>
            ))}
          </div>
        </div>

        {/* Vehicle Specification Input Fields */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 pt-1">
          <div className="sm:col-span-6">
            <label className="block text-xs font-medium text-slate-600 mb-1">
              Merk & Tipe Unit
            </label>
            <input
              type="text"
              placeholder={categoryConfig.placeholderBrand}
              value={brandModel}
              onChange={(e) => setBrandModel(e.target.value)}
              className="w-full px-3 py-2 text-xs sm:text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none bg-slate-50/50"
            />
          </div>

          <div className="sm:col-span-3">
            <label className="block text-xs font-medium text-slate-600 mb-1">
              Tahun
            </label>
            <select
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className="w-full px-3 py-2 text-xs sm:text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none bg-white"
            >
              {[2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010, 2008].map((y) => (
                <option key={y} value={y.toString()}>
                  Tahun {y}
                </option>
              ))}
            </select>
          </div>

          <div className="sm:col-span-3">
            <label className="block text-xs font-medium text-slate-600 mb-1">
              Pajak STNK
            </label>
            <select
              value={taxStatus}
              onChange={(e) => setTaxStatus(e.target.value as "Hidup" | "Mati")}
              className="w-full px-3 py-2 text-xs sm:text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none bg-white"
            >
              <option value="Hidup">Pajak Hidup</option>
              <option value="Mati">Pajak Telat / Mati</option>
            </select>
          </div>
        </div>

        {/* Detailed Breakdown Card */}
        <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-200 gap-2">
            <div>
              <span className="text-xs uppercase tracking-wider font-semibold text-slate-500">
                Perkiraan Angsuran Bulanan:
              </span>
              <div className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-0.5">
                {formatRupiah(calculation.monthlyInstallment)}
                <span className="text-xs font-semibold text-slate-500 ml-1">/bulan</span>
              </div>
            </div>
            <div className="text-xs text-slate-500 sm:text-right">
              <div>Suku Bunga Estimasi: <strong className="text-slate-800">{calculation.ratePercentage}% /bln</strong></div>
              <div>Tenor Pembiayaan: <strong className="text-slate-800">{tenor} Bulan</strong></div>
            </div>
          </div>

          <div className="pt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
            <div className="flex items-center space-x-2">
              <Check className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{categoryConfig.disbursementRatio}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Unit kendaraan tetap Anda gunakan</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>BPKB tersimpan resmi di kantor BFI Finance</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Tanpa biaya survei & potongan tersembunyi</span>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center space-x-2 bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-3.5 px-6 rounded-xl text-sm sm:text-base shadow-sm transition-colors"
          >
            <span>Dapatkan Taksiran & Ajukan via WhatsApp</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <p className="text-center text-[11px] text-slate-400 mt-2">
            Simulasi bersifat indikatif. Perhitungan final mengacu pada hasil verifikasi fisik kendaraan oleh analis BFI Finance.
          </p>
        </div>
      </form>
    </div>
  );
}
