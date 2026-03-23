import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://jusih2o.com";
  const lastModified = new Date("2026-03-18");

  return [
    { url: baseUrl, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/services`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/contact`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/services/water-softeners`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/services/water-filtration`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/services/reverse-osmosis`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/services/water-testing`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/services/well-water`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/services/water-heater-installation`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/services/leak-repair`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/services/commercial-plumbing`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/services/jusicare`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/about`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/testimonials`, lastModified, changeFrequency: "weekly", priority: 0.7 },
    { url: `${baseUrl}/service-area`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/before-after`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/gallery`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/faq`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/privacy-policy`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/terms-of-service`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/blog`, lastModified, changeFrequency: "weekly", priority: 0.7 },
  ];
}

