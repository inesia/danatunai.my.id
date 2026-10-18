import { SITE_CONFIG } from "./constants";
import { trackLead } from "./pixel";

export interface WhatsAppInquiryParams {
  name?: string;
  vehicleType?: "Mobil" | "Motor" | string;
  brandModel?: string;
  year?: string | number;
  loanAmount?: number | string;
  tenorMonths?: number | string;
  city?: string;
  notes?: string;
}

export function formatRupiah(value: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(value);
}

export function generateWhatsAppUrl(params?: WhatsAppInquiryParams): string {
  const number = SITE_CONFIG.whatsappNumber.replace(/[^0-9]/g, "");

  let message = `Halo Mas ${SITE_CONFIG.agentName} (Mitra Resmi BFI Finance),\nSaya ingin konsultasi pengajuan pinjaman jaminan BPKB di ${SITE_CONFIG.name}.\n\n`;

  if (params?.name) {
    message += `*Nama:* ${params.name}\n`;
  }
  if (params?.vehicleType) {
    message += `*Jaminan:* BPKB ${params.vehicleType}\n`;
  }
  if (params?.brandModel) {
    message += `*Merk & Tipe:* ${params.brandModel}\n`;
  }
  if (params?.year) {
    message += `*Tahun Kendaraan:* ${params.year}\n`;
  }
  if (params?.loanAmount) {
    const formattedAmount = typeof params.loanAmount === "number" ? formatRupiah(params.loanAmount) : params.loanAmount;
    message += `*Kebutuhan Dana:* ${formattedAmount}\n`;
  }
  if (params?.tenorMonths) {
    message += `*Rencana Tenor:* ${params.tenorMonths} Bulan\n`;
  }
  if (params?.city) {
    message += `*Kota / Domisili:* ${params.city}\n`;
  }
  if (params?.notes) {
    message += `*Catatan:* ${params.notes}\n`;
  }

  message += `\nMohon info taksiran pencairan maksimal dan persyaratan pengajuannya. Terima kasih!`;

  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export function openWhatsAppChat(params?: WhatsAppInquiryParams) {
  trackLead(params?.vehicleType ? `BPKB ${params.vehicleType}` : "Inquiry Umum", params?.loanAmount);
  const url = generateWhatsAppUrl(params);
  if (typeof window !== "undefined") {
    window.open(url, "_blank", "noopener,noreferrer");
  }
}
