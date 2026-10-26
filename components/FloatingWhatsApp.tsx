"use client";

import { useState } from "react";
import { X, PhoneCall, Car, Bike, ArrowUpRight } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { openWhatsAppChat } from "@/lib/whatsapp";

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside aria-label="WhatsApp Consultant Widget" className="fixed bottom-5 right-5 z-50 flex flex-col items-end">
      {isOpen && (
        <div className="mb-3 w-72 sm:w-80 bg-white border border-[#E2E8F0] rounded-[20px] shadow-modal overflow-hidden animate-in fade-in slide-in-from-bottom-2 duration-150">
          <div className="bg-[#0A335D] text-white p-4 flex justify-between items-start border-b border-[#061F38]">
            <div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-[#049851]"></span>
                <span className="text-xs font-semibold text-[#049851] uppercase tracking-wider">Mitra BFI Finance</span>
              </div>
              <div className="font-bold text-sm text-white mt-1 font-heading">{SITE_CONFIG.agentName}</div>
              <div className="text-[11px] text-slate-300">Konsultan Pembiayaan Resmi</div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-300 hover:text-white p-1 rounded-lg transition-colors cursor-pointer"
              aria-label="Tutup"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="p-3 bg-[#F8FAFC] space-y-2 text-xs">
            <p className="text-[#64748B] px-1 py-0.5">
              Halo! Ada yang bisa saya bantu terkait taksiran plafon BPKB atau syarat pengajuan?
            </p>

            <button
              onClick={() => {
                setIsOpen(false);
                openWhatsAppChat({ vehicleType: "Mobil", notes: "Konsultasi taksir BPKB Mobil via Floating Widget" });
              }}
              className="w-full flex items-center justify-between p-2.5 bg-white border border-[#E2E8F0] rounded-[12px] hover:border-[#0A335D] hover:bg-[#EEF4FA] transition-colors text-left font-medium text-[#0F172A] cursor-pointer"
            >
              <span className="flex items-center space-x-2">
                <Car className="w-4 h-4 text-[#0A335D]" />
                <span>Taksir BPKB Mobil (s/d 85%)</span>
              </span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#64748B]" />
            </button>

            <button
              onClick={() => {
                setIsOpen(false);
                openWhatsAppChat({ vehicleType: "Motor", notes: "Konsultasi taksir BPKB Motor via Floating Widget" });
              }}
              className="w-full flex items-center justify-between p-2.5 bg-white border border-[#E2E8F0] rounded-[12px] hover:border-[#049851] hover:bg-[#E8F8F0] transition-colors text-left font-medium text-[#0F172A] cursor-pointer"
            >
              <span className="flex items-center space-x-2">
                <Bike className="w-4 h-4 text-[#049851]" />
                <span>Taksir BPKB Motor (1 Jam Cair)</span>
              </span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#64748B]" />
            </button>

            <button
              onClick={() => {
                setIsOpen(false);
                openWhatsAppChat({ notes: "Konsultasi umum pengajuan pinjaman BPKB" });
              }}
              className="w-full flex items-center justify-center space-x-2 bg-[#049851] hover:bg-[#067A42] text-white font-semibold py-2.5 px-4 rounded-[12px] transition-colors mt-1 cursor-pointer"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Chat WhatsApp Langsung</span>
            </button>
          </div>
        </div>
      )}

      {/* Floating Action Pill */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2.5 bg-[#049851] hover:bg-[#067A42] text-white px-4 py-2.5 rounded-full shadow-lg border border-emerald-500/50 transition-all hover:-translate-y-0.5 cursor-pointer"
        aria-label="Konsultasi WhatsApp"
      >
        <span className="relative flex h-2 w-2">
          <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
        </span>
        <PhoneCall className="w-4 h-4" />
        <span className="text-xs font-semibold tracking-tight">Konsultasi WhatsApp</span>
      </button>
    </aside>
  );
}
