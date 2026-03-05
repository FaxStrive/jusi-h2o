import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import { SmoothScrollProvider } from "@/components/layout/smooth-scroll-provider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Jusi H2O | Professional Water Filtration Tampa Bay",
    template: "%s | Jusi H2O",
  },
  description:
    "Professional water testing and whole-home filtration solutions for Tampa Bay homeowners. Free in-home water tests. Serving Hillsborough, Pinellas, Manatee, Sarasota, and Polk counties.",
  keywords: [
    "water filtration Tampa",
    "whole house water filter Tampa",
    "water softener installation Tampa",
    "reverse osmosis system Tampa",
    "water testing near me",
    "water filtration company Tampa Bay",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Jusi H2O",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body className="font-body antialiased bg-background text-foreground">
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
