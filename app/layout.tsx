import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import MetaPixel from "@/components/MetaPixel";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.siteUrl),
  title: {
    default: "DanaTunai.my.id — Pinjaman Gadai BPKB Mobil & Motor Resmi BFI Finance",
    template: "%s | DanaTunai.my.id - Mitra BFI Finance",
  },
  description:
    "Pinjaman dana tunai jaminan BPKB Mobil & Motor proses cepat 1 hari cair, bunga rendah mulai 0.6%, plafon pencairan hingga 85% taksiran kendaraan. Resmi berizin & diawasi OJK.",
  keywords: [
    "gadai bpkb mobil",
    "gadai bpkb motor",
    "pinjaman dana tunai",
    "dana tunai bpkb",
    "bfi finance dana tunai",
    "mitra resmi bfi finance",
    "kredit jaminan bpkb",
    "pengajuan pinjaman bpkb",
    "pinjaman cepat cair 1 hari",
  ],
  authors: [{ name: SITE_CONFIG.agentName }],
  creator: SITE_CONFIG.agentName,
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: SITE_CONFIG.siteUrl,
    title: "DanaTunai.my.id — Pinjaman Dana Cepat BPKB Mobil & Motor",
    description:
      "Dapatkan dana tunai hingga miliaran rupiah dengan agunan BPKB Mobil atau Motor. Proses mudah, aman, resmi diawasi OJK bersama mitra BFI Finance.",
    siteName: SITE_CONFIG.name,
  },
  twitter: {
    card: "summary_large_image",
    title: "DanaTunai.my.id — Pinjaman Dana Cepat BPKB Mobil & Motor",
    description: "Cair kilat 1 hari, bunga ringan mulai 0.6%, resmi diawasi OJK bersama mitra BFI Finance.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    "name": SITE_CONFIG.name,
    "alternateName": `Mitra BFI Finance ${SITE_CONFIG.agentName}`,
    "url": SITE_CONFIG.siteUrl,
    "logo": `${SITE_CONFIG.siteUrl}/logo.png`,
    "description": SITE_CONFIG.description,
    "telephone": SITE_CONFIG.phone,
    "priceRange": "Rp 2.000.000 - Rp 2.000.000.000",
    "currenciesAccepted": "IDR",
    "paymentAccepted": "Cash, Credit Card, Bank Transfer",
    "areaServed": {
      "@type": "Country",
      "name": "Indonesia",
    },
    "openingHours": "Mo-Su 08:00-22:00",
  };

  return (
    <html lang="id">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        <MetaPixel />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
