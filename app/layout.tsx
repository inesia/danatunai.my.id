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
    "pinjaman jaminan bpkb mobil",
    "pinjaman jaminan bpkb motor",
    "bfi finance dana tunai",
    "mitra resmi bfi finance",
    "kredit jaminan bpkb",
    "pengajuan pinjaman bpkb online",
    "pinjaman cepat cair 1 hari",
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
    title: "DanaTunai.my.id — Pinjaman Dana Cepat BPKB Mobil & Motor",
    description:
      "Dapatkan dana tunai hingga miliaran rupiah dengan agunan BPKB Mobil atau Motor. Bunga ringan mulai 0.6%, proses 1 hari cair, resmi diawasi OJK bersama mitra BFI Finance.",
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "DanaTunai.my.id — Pinjaman Gadai BPKB Mobil & Motor Resmi BFI Finance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DanaTunai.my.id — Pinjaman Dana Cepat BPKB Mobil & Motor",
    description:
      "Cair kilat 1 hari, bunga ringan mulai 0.6%, resmi diawasi OJK bersama mitra BFI Finance.",
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
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "184",
      "bestRating": "5",
      "worstRating": "1",
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Layanan Pembiayaan BPKB",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Pinjaman Gadai BPKB Mobil",
            "description":
              "Pencairan dana hingga 85% nilai pasar mobil, bunga mulai 0.6% flat per bulan, proses 1 hari kerja.",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Pinjaman Gadai BPKB Motor",
            "description":
              "Pinjaman kilat 1-2 jam cair dengan jaminan BPKB Motor Honda, Yamaha, Kawasaki, Suzuki.",
          },
        },
      ],
    },
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
