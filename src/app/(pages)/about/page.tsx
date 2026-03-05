import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Jusi H2O - 15+ years of professional water testing and filtration solutions for Tampa Bay homeowners.",
};

export default function AboutPage() {
  return (
    <section className="min-h-screen pt-32 px-6">
      <h1 className="font-heading text-display-sm text-center">About Us</h1>
    </section>
  );
}
