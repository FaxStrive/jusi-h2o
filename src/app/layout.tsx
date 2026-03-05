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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Jusi H2O",
              description:
                "Professional water testing and whole-home filtration solutions for Tampa Bay homeowners.",
              telephone: "+1-770-875-9932",
              email: "support@jusih2o.com",
              url: "https://jusih2o.com",
              areaServed: [
                "Hillsborough County, FL",
                "Pinellas County, FL",
                "Manatee County, FL",
                "Sarasota County, FL",
                "Polk County, FL",
              ],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5.0",
                reviewCount: "2500",
              },
              sameAs: [
                "https://www.facebook.com/profile.php?id=61578123391295",
                "https://www.instagram.com/jusih2o/",
              ],
            }),
          }}
        />
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
