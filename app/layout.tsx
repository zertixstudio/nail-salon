import type { Metadata } from "next";
import { Syne, Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/LanguageContext";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";

const syne = Syne({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "G Beauty Concept — Nail & Beauty Atelier, Porto",
  description:
    "A nail and beauty atelier in Porto, Portugal. Manicure, pedicure, gel nails, nail art, eyebrow design and facials.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${syne.variable} ${inter.variable}`}>
      <body className="font-body bg-cream text-ink antialiased">
        <LanguageProvider>
          <SmoothScrollProvider>{children}</SmoothScrollProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
