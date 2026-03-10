import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
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

const siteUrl = "https://jusih2o.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Jusi H2O | Professional Water Filtration Tampa Bay",
    template: "%s | Jusi H2O",
  },
  description:
    "Professional water testing and whole-home filtration solutions for Tampa Bay homeowners. Free in-home water tests. 2,500+ five-star reviews. Serving Hillsborough, Pinellas, Manatee, Sarasota, and Polk counties.",
  keywords: [
    "water filtration Tampa",
    "whole house water filter Tampa",
    "water softener installation Tampa",
    "reverse osmosis system Tampa",
    "water testing near me",
    "water filtration company Tampa Bay",
    "water treatment Tampa FL",
    "free water test Tampa",
    "well water treatment Tampa",
    "Jusi H2O",
  ],
  authors: [{ name: "Jusi H2O" }],
  creator: "Jusi H2O",
  publisher: "Jusi H2O",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Jusi H2O",
    title: "Jusi H2O | Professional Water Filtration Tampa Bay",
    description:
      "Free in-home water testing and customized filtration solutions for Tampa Bay homeowners. 2,500+ five-star Google reviews. Call (813) 303-0515.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Jusi H2O - Professional Water Filtration Tampa Bay",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jusi H2O | Professional Water Filtration Tampa Bay",
    description:
      "Free in-home water testing and customized filtration solutions for Tampa Bay homeowners. 2,500+ five-star reviews.",
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
    canonical: siteUrl,
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
              telephone: "+1-813-303-0515",
              email: "support@jusih2o.com",
              url: siteUrl,
              image: `${siteUrl}/images/og-image.png`,
              priceRange: "$$",
              areaServed: [
                "Hillsborough County, FL",
                "Pinellas County, FL",
                "Manatee County, FL",
                "Sarasota County, FL",
                "Polk County, FL",
              ],
              address: {
                "@type": "PostalAddress",
                streetAddress: "7901 4th St N Ste 300",
                addressLocality: "St. Petersburg",
                addressRegion: "FL",
                postalCode: "33702",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 27.9506,
                longitude: -82.4572,
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5.0",
                reviewCount: "2500",
                bestRating: "5",
              },
              sameAs: [
                "https://www.facebook.com/profile.php?id=61578123391295",
                "https://www.instagram.com/jusih2o/",
              ],
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
