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
    default: "DanaTunai.my.id — Layanan Informasi & Konsultasi BPKB Mobil & Motor Mitra Resmi BFI Finance",
    template: "%s | DanaTunai.my.id - Mitra BFI Finance",
  },
  description:
    "Platform layanan informasi dan konsultasi estimasi nilai jaminan BPKB Mobil & Motor resmi bermitra dengan PT BFI Finance Indonesia Tbk. Resmi berizin & diawasi OJK.",
  keywords: [
    "gadai bpkb mobil",
    "gadai bpkb motor",
    "pinjaman dana tunai",
    "dana tunai bpkb",
    "pinjaman jaminan bpkb mobil",
    "pinjaman jaminan bpkb motor",
    "bfi finance dana tunai",
    "mitra resmi bfi finance",
    "kredit jaminan bpkb",
    "pengajuan pinjaman bpkb online",
    "taksiran nilai bpkb mobil",
  ],
  authors: [{ name: SITE_CONFIG.agentName, url: SITE_CONFIG.siteUrl }],
  creator: SITE_CONFIG.agentName,
  publisher: SITE_CONFIG.name,
  alternates: {
    canonical: "./",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: SITE_CONFIG.siteUrl,
    title: "DanaTunai.my.id — Informasi & Konsultasi BPKB Mobil & Motor",
    description:
      "Layanan konsultasi estimasi nilai pinjaman agunan BPKB Mobil dan Motor resmi bermitra dengan PT BFI Finance Indonesia Tbk.",
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "DanaTunai.my.id — Mitra Resmi BFI Finance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DanaTunai.my.id — Informasi & Konsultasi BPKB Mobil & Motor",
    description:
      "Layanan konsultasi estimasi nilai pinjaman agunan BPKB Mobil dan Motor resmi bermitra dengan PT BFI Finance Indonesia Tbk.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Rich Schema.org markup for FinancialService & Organization
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    "@id": `${SITE_CONFIG.siteUrl}/#organization`,
    "name": SITE_CONFIG.name,
    "alternateName": [
      "DanaTunai",
      `Mitra Resmi BFI Finance ${SITE_CONFIG.agentName}`,
      "Dana Tunai BPKB Indonesia",
    ],
    "url": SITE_CONFIG.siteUrl,
    "logo": `${SITE_CONFIG.siteUrl}/logo.png`,
    "image": `${SITE_CONFIG.siteUrl}/logo.png`,
    "description": SITE_CONFIG.description,
    "telephone": SITE_CONFIG.phone,
    "email": SITE_CONFIG.email,
    "priceRange": "Rp 2.000.000 - Rp 2.000.000.000",
    "currenciesAccepted": "IDR",
    "paymentAccepted": "Cash, Credit Card, Bank Transfer",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "ID",
      "addressRegion": "Indonesia",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-6.2088",
      "longitude": "106.8456",
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        "opens": "08:00",
        "closes": "22:00",
      },
    ],
  };

  return (
    <html lang="id">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased bg-[#F8FAFC] text-[#0F172A] font-sans selection:bg-[#E8F8F0] selection:text-[#049851]">
        <MetaPixel />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
