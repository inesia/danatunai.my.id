"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Shield, PhoneCall, ExternalLink, Car, Bike, FileText } from "lucide-react";
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
      {/* Official Compliance Bar */}
      <div className="bg-slate-900 text-slate-300 text-[11px] sm:text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center space-x-2">
            <Shield className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span className="tracking-tight">
              Mitra Resmi Pembiayaan <strong className="text-white font-semibold">PT BFI Finance Indonesia Tbk</strong> &bull; Berizin & Diawasi <strong className="text-white font-semibold">OJK</strong>
            </span>
          </div>
          <div className="hidden lg:flex items-center space-x-4 text-[11px] text-slate-400">
            <span>Konsultan: <strong className="text-slate-200 font-semibold">{SITE_CONFIG.agentName}</strong></span>
            <span>&bull;</span>
            <span className="flex items-center space-x-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-emerald-300 font-medium">Layanan Konsultasi Buka</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Corporate Identification */}
          <Link href="/" className="flex items-center space-x-3.5">
            <div className="w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center text-white border border-slate-800 shadow-sm">
              <span className="font-extrabold text-base tracking-tighter text-blue-400">DT</span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center space-x-1.5">
                <span className="text-lg sm:text-xl font-bold tracking-tight text-slate-900">
                  DanaTunai<span className="text-blue-700">.my.id</span>
                </span>
                <span className="text-[10px] font-semibold bg-slate-100 text-slate-700 border border-slate-200 px-1.5 py-0.5 rounded">
                  BFI Partner
                </span>
              </div>
              <span className="text-[11px] text-slate-500 font-medium">
                Pencairan Dana Agunan BPKB Mobil & Motor
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
                  className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors flex items-center space-x-1.5 ${
                    isActive
                      ? "text-blue-700 bg-blue-50/70"
                      : "text-slate-700 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  {Icon && <Icon className={`w-4 h-4 ${isActive ? "text-blue-600" : "text-slate-400"}`} />}
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Right Action: Consultant Contact */}
          <div className="hidden lg:flex items-center space-x-3">
            <button
              onClick={() => openWhatsAppChat({ notes: "Konsultasi melalui Navbar Header" })}
              className="inline-flex items-center space-x-2 bg-emerald-700 hover:bg-emerald-800 text-white text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-lg shadow-sm transition-colors"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Konsultasi WhatsApp</span>
            </button>
          </div>

          {/* Mobile hamburger */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={() => openWhatsAppChat({ notes: "Konsultasi dari Header Mobile" })}
              className="bg-emerald-700 text-white p-2 rounded-lg text-xs flex items-center space-x-1"
              aria-label="Chat WhatsApp"
            >
              <PhoneCall className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 focus:outline-none"
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
                className={`flex items-center space-x-2.5 px-3 py-2.5 rounded-lg text-sm font-semibold ${
                  isActive ? "bg-blue-50 text-blue-700" : "text-slate-700 hover:bg-slate-50"
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
              className="w-full flex items-center justify-center space-x-2 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold py-3 px-4 rounded-lg text-sm shadow-sm"
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
