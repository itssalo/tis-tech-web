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

const siteUrl = "https://www.tistechsolutions.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "TIS TECH | Soluciones Tecnológicas",
    template: "%s | TIS TECH",
  },

  description:
    "TIS TECH integra tecnología y servicios para empresas e industrias, ofreciendo soluciones de infraestructura, conectividad, seguridad y tecnología industrial.",

  keywords: [
    "TIS TECH",
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
      name: "TIS TECH",
    },
  ],

  creator: "TIS TECH",
  publisher: "TIS TECH",

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
    title: "TIS TECH | Soluciones Tecnológicas",
    description:
      "TIS TECH integra tecnología y servicios para empresas e industrias.",
    siteName: "TIS TECH",
    images: [
      {
        url: "/brand/tistech.jpg",
        width: 150,
        height: 54,
        alt: "TIS TECH SOLUTIONS",
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