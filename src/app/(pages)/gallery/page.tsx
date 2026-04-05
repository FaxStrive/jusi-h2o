import type { Metadata } from "next";
import { GalleryContent } from "./content";

export const metadata: Metadata = {
  title: "Water Filtration Installation Photo Gallery",
  description:
    "Browse before and after water treatment photos from Jusi H2O installations. See real filtration, softener, and RO system results from Tampa Bay homeowners.",
  robots: { index: false, follow: false },
};

export default function GalleryPage() {
  return <GalleryContent />;
}
