import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";
import SchemaMarkup from "@/components/seo/schema-markup";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jusih2o.com"),
  title: {
    template: "%s | Jusi H2O",
    default: "Jusi H2O | Water Filtration Tampa Bay",
  },
  description:
    "Tampa Bay's trusted water filtration specialists. Water softeners, reverse osmosis, whole-house filtration, and free in-home water testing. Serving Hillsborough, Pinellas, Manatee, Sarasota, and Polk counties.",
  keywords: [
    "water filtration Tampa Bay",
    "water softener Tampa",
    "reverse osmosis Tampa",
    "whole house water filter Florida",
    "water testing Tampa",
    "Jusi H2O",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jusih2o.com",
    siteName: "Jusi H2O",
    title: "Jusi H2O | Water Filtration Tampa Bay",
    description:
      "Tampa Bay's trusted water filtration specialists. Free in-home water testing. Serving 5 counties.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Jusi H2O - Water Filtration Tampa Bay",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jusi H2O | Water Filtration Tampa Bay",
    description:
      "Tampa Bay's trusted water filtration specialists. Free in-home water testing. Serving 5 counties.",
    images: ["/images/og-image.png"],
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
  alternates: {
    canonical: "https://jusih2o.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable}`}>
      <body className="antialiased">
        <Suspense fallback={null}>
          <SchemaMarkup />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
