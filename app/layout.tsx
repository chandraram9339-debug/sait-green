import type { Metadata } from "next";

import "./globals.css";
import { SmoothScroll } from "@/components/site/SmoothScroll";

export const metadata: Metadata = {
  title: "PALLADIUM AI — Institutional Grade AI Trading",
  description:
    "Institutional-grade AI trading system for BTC & ETH. Backtested performance, transparent fees, and risk-calibrated execution. Launch in Telegram.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "PALLADIUM AI — Institutional Grade AI Trading System",
    description:
      "Multi-layer neural architecture for BTC & ETH with transparent fees and risk controls. Launch in Telegram.",
    type: "website"
  },
  twitter: {
    card: "summary_large_image"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-dvh bg-[#0A0A0A] font-sans">
        <div className="palladium-bg" aria-hidden="true" />
        <div className="palladium-noise" aria-hidden="true" />
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}

