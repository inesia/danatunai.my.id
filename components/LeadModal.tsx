"use client";

import { useState } from "react";
import { X, Send, ShieldCheck } from "lucide-react";
import { openWhatsAppChat } from "@/lib/whatsapp";

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultVehicle?: "Mobil" | "Motor";
}

export default function LeadModal({ isOpen, onClose, defaultVehicle = "Mobil" }: LeadModalProps) {
  const [name, setName] = useState("");
  const [vehicleType, setVehicleType] = useState<"Mobil" | "Motor">(defaultVehicle);
  const [brandModel, setBrandModel] = useState("");
  const [year, setYear] = useState("2018");
  const [city, setCity] = useState("");
  const [amount, setAmount] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    openWhatsAppChat({
      name,
      vehicleType,
      brandModel,
      year,
      city,
      loanAmount: amount,
      notes: "Pengajuan konsultasi cepat via Form Modal Pop-up",
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl border border-slate-100 overflow-hidden relative">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-700 to-blue-600 p-5 text-white flex justify-between items-start">
          <div>
            <h3 className="font-bold text-lg">Konsultasi Pinjaman Cepat</h3>
            <p className="text-xs text-blue-100 mt-1">
              Dapatkan taksiran pencairan maksimal dalam 5 menit
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-blue-200 hover:text-white p-1 rounded-lg"
            aria-label="Tutup"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Nama Lengkap</label>
            <input
              type="text"
              required
              placeholder="Contoh: Budi Santoso"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Jaminan</label>
              <select
                value={vehicleType}
                onChange={(e) => setVehicleType(e.target.value as "Mobil" | "Motor")}
                className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white"
              >
                <option value="Mobil">BPKB Mobil</option>
                <option value="Motor">BPKB Motor</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Tahun Unit</label>
              <input
                type="text"
                placeholder="Misal: 2018"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Merk & Tipe Kendaraan</label>
            <input
              type="text"
              required
              placeholder="Contoh: Toyota Avanza 1.3 G / Honda PCX 160"
              value={brandModel}
              onChange={(e) => setBrandModel(e.target.value)}
              className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Estimasi Kebutuhan Dana</label>
              <input
                type="text"
                placeholder="Misal: 50 Juta"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Kota Domisili</label>
              <input
                type="text"
                placeholder="Misal: Bandung"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full mt-2 inline-flex items-center justify-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-4 rounded-xl shadow-lg shadow-emerald-600/30 transition-all duration-200"
          >
            <Send className="w-4 h-4" />
            <span>Kirim via WhatsApp (Fast Respon)</span>
          </button>

          <p className="text-[11px] text-slate-400 text-center flex items-center justify-center space-x-1 pt-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
            <span>Data Anda 100% aman dan hanya digunakan untuk verifikasi simulasi pinjaman.</span>
          </p>
        </form>
      </div>
    </div>
  );
}
