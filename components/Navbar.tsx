"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Shield, PhoneCall, Car, Bike, FileText } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { openWhatsAppChat } from "@/lib/whatsapp";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: "Beranda", href: "/" },
    { label: "BPKB Mobil", href: "/bpkb-mobil", icon: Car },
    { label: "BPKB Motor", href: "/bpkb-motor", icon: Bike },
    { label: "Form Pengajuan", href: "/cek-limit", icon: FileText },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
      {/* Official Compliance Bar - Dana Navy #0A335D */}
      <div className="bg-[#0A335D] text-slate-200 text-[11px] sm:text-xs py-2 px-4 border-b border-blue-950">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center space-x-2">
            <Shield className="w-3.5 h-3.5 text-[#049851] shrink-0" />
            <span className="tracking-tight text-slate-200">
              Mitra Agen Resmi Pembiayaan <strong className="text-white font-medium">PT BFI Finance Indonesia Tbk</strong> &bull; Berizin & Diawasi <strong className="text-white font-medium">OJK</strong>
            </span>
          </div>
          <div className="hidden lg:flex items-center space-x-3 text-[11px] text-slate-300">
            <span>Konsultan Terdaftar: <strong className="text-white font-medium">{SITE_CONFIG.agentName}</strong></span>
            <span className="text-blue-300/40">&bull;</span>
            <span className="text-[#049851] font-medium flex items-center space-x-1.5 bg-[#061F38] px-2 py-0.5 rounded-full border border-blue-900">
              <span className="w-1.5 h-1.5 rounded-full bg-[#049851]"></span>
              <span>Layanan Aktif</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo & Brand Using transparent logo image */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative flex items-center h-10">
              <Image
                src="/images/danatunai_logo_transparent.png"
                alt="DanaTunai — Pinjaman Dana Tunai Jaminan BPKB Mobil dan Motor Resmi BFI Finance"
                width={170}
                height={42}
                className="h-9 sm:h-10 w-auto object-contain"
                priority
              />
            </div>
            <div className="hidden sm:flex flex-col border-l border-slate-200 pl-3">
              <span className="text-[10px] font-semibold bg-[#E8F8F0] text-[#049851] border border-emerald-200/80 px-1.5 py-0.5 rounded-full w-fit leading-tight">
                Mitra Resmi BFI
              </span>
              <span className="text-[11px] text-[#64748B] font-normal leading-tight mt-0.5">
                Agunan BPKB Mobil & Motor
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 py-2 rounded-xl text-sm font-medium transition-colors flex items-center space-x-1.5 ${
                    isActive
                      ? "text-[#0A335D] bg-[#EEF4FA] font-semibold"
                      : "text-[#64748B] hover:text-[#0F172A] hover:bg-slate-100/70"
                  }`}
                >
                  {Icon && <Icon className={`w-4 h-4 ${isActive ? "text-[#0A335D]" : "text-slate-400"}`} />}
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Right Action: Consultant Contact - Tunai Green #049851 */}
          <div className="hidden lg:flex items-center space-x-3">
            <button
              onClick={() => openWhatsAppChat({ notes: "Konsultasi melalui Navbar Header" })}
              className="inline-flex items-center space-x-2 bg-[#049851] hover:bg-[#067A42] text-white text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-xl shadow-soft transition-colors cursor-pointer"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Konsultasi WhatsApp</span>
            </button>
          </div>

          {/* Mobile hamburger */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={() => openWhatsAppChat({ notes: "Konsultasi dari Header Mobile" })}
              className="bg-[#049851] text-white p-2.5 rounded-xl text-xs flex items-center space-x-1 cursor-pointer"
              aria-label="Chat WhatsApp"
            >
              <PhoneCall className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-950 focus:outline-none cursor-pointer"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            const Icon = link.icon;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center space-x-2.5 px-3 py-2.5 rounded-xl text-sm font-medium ${
                  isActive ? "bg-[#EEF4FA] text-[#0A335D] font-semibold" : "text-slate-700 hover:bg-slate-50"
                }`}
              >
                {Icon && <Icon className="w-4 h-4 text-slate-400" />}
                <span>{link.label}</span>
              </Link>
            );
          })}
          <div className="pt-4 mt-2 border-t border-slate-100">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openWhatsAppChat({ notes: "Konsultasi dari menu navigasi mobile" });
              }}
              className="w-full flex items-center justify-center space-x-2 bg-[#049851] hover:bg-[#067A42] text-white font-semibold py-3 px-4 rounded-xl text-sm shadow-soft cursor-pointer"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Hubungi Konsultan ({SITE_CONFIG.agentName})</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
