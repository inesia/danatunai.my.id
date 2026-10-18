"use client";

import { useState } from "react";
import { MessageSquare, X, Shield, PhoneCall } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { openWhatsAppChat } from "@/lib/whatsapp";

export default function FloatingWhatsApp() {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <aside aria-label="WhatsApp Consultant Widget" className="fixed bottom-5 right-5 z-50 flex flex-col items-end">
      {/* Consultant Widget Card */}
      {isExpanded ? (
        <div className="mb-2.5 w-72 sm:w-80 bg-white border border-slate-200 rounded-2xl shadow-xl overflow-hidden animate-in fade-in slide-in-from-bottom-2 duration-200">
          {/* Card Header */}
          <div className="bg-slate-900 text-white p-3.5 flex justify-between items-center">
            <div className="flex items-center space-x-2.5">
              <div className="relative">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center">
                  ID
                </div>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-slate-900"></span>
              </div>
              <div>
                <div className="text-xs font-bold leading-tight">{SITE_CONFIG.agentName}</div>
                <div className="text-[10px] text-slate-300">Konsultan Resmi BFI Finance</div>
              </div>
            </div>
            <button
              onClick={() => setIsExpanded(false)}
              className="text-slate-400 hover:text-white p-1 rounded-md transition-colors"
              aria-label="Tutup Panel Konsultasi"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Card Content */}
          <div className="p-3.5 space-y-2.5 bg-slate-50/50">
            <p className="text-xs text-slate-600 leading-relaxed">
              Butuh konsultasi cepat atau taksiran pencairan jaminan BPKB kendaraan Anda?
            </p>
            <button
              onClick={() => openWhatsAppChat({ notes: "Konsultasi dari Widget Floating Konsultan" })}
              className="w-full inline-flex items-center justify-center space-x-2 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold py-2.5 px-4 rounded-xl shadow-sm transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Hubungi via WhatsApp</span>
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsExpanded(true)}
          className="group flex items-center space-x-2 bg-emerald-700 hover:bg-emerald-800 text-white px-4 py-3 rounded-full shadow-lg transition-transform hover:-translate-y-0.5"
          aria-label="Buka Chat Konsultan WhatsApp"
        >
          <MessageSquare className="w-5 h-5 fill-current" />
          <span className="text-xs font-semibold pr-1">Konsultasi BPKB</span>
        </button>
      )}
    </aside>
  );
}
