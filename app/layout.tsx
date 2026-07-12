import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartShell from "@/components/CartShell";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Leaf & Life Nursery | Premium Indoor Plants & Pots in Chennai",
  description:
    "Leaf & Life Nursery in Kelambakkam, Chennai offers premium indoor plants, garden pots, designer ceramic planters, and plant care products. Buy plants online Chennai and order via WhatsApp for fast local delivery.",
  keywords: [
    "buy indoor plants",
    "buy plants online Chennai",
    "plant nursery near Kelambakkam",
    "garden pots & planters",
    "designer ceramic pots",
    "metal plant stands",
    "plant care products Chennai",
    "Leaf & Life Nursery",
    "Kelambakkam",
  ],
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    title: "Leaf & Life Nursery | Premium Indoor Plants & Pots in Chennai",
    description:
      "Leaf & Life Nursery in Kelambakkam offers premium indoor plants, garden pots, designer planters, and plant care essentials. Order online via WhatsApp.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body
        className="flex min-h-full flex-col font-sans antialiased"
        suppressHydrationWarning
      >
        <CartShell>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </CartShell>
      </body>
    </html>
  );
}
