import type { Metadata } from "next";
import { GalleryContent } from "./content";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Before and after water treatment photos from Jusi H2O. See real results from Tampa Bay homeowners.",
  robots: { index: false, follow: false },
};

export default function GalleryPage() {
  return <GalleryContent />;
}
