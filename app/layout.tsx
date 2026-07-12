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
  title: "Leaf & Life - Add Life to Your Space",
  description:
    "Premium plants, pots & planters for your home and garden. Browse our collection of indoor plants, succulents, flowering plants, ceramic pots, and designer planters. Kelambakkam, Chennai.",
  keywords: [
    "plants",
    "pots",
    "planters",
    "indoor plants",
    "nursery",
    "Chennai",
    "Kelambakkam",
    "Leaf & Life",
  ],
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    title: "Leaf & Life - Add Life to Your Space",
    description:
      "Premium plants, pots & planters. Browse our collection and order via WhatsApp.",
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
