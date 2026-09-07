import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://www.dgtechargentina.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "DG TECH | Soluciones Tecnológicas",
    template: "%s | DG TECH",
  },

  description:
    "DG TECH integra tecnología y servicios para empresas e industrias, ofreciendo soluciones de infraestructura, conectividad, seguridad y tecnología industrial.",

  keywords: [
    "DG TECH",
    "soluciones tecnológicas",
    "infraestructura tecnológica",
    "conectividad industrial",
    "networking",
    "seguridad",
    "telecomunicaciones",
    "IIOT",
    "tecnología industrial",
  ],

  authors: [
    {
      name: "DG TECH",
    },
  ],

  creator: "DG TECH",
  publisher: "DG TECH",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "/",
    title: "DG TECH | Soluciones Tecnológicas",
    description:
      "DG TECH integra tecnología y servicios para empresas e industrias.",
    siteName: "DG TECH",
    images: [
      {
        url: "/brand/dgtech-og.png",
        width: 1670,
        height: 942,
        alt: "DG TECH",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable}`}
      style={{ colorScheme: "light" }}
    >
      <body>{children}</body>
    </html>
  );
}