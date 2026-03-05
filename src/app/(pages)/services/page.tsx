import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description: "Professional water filtration services including whole-house systems, reverse osmosis, water softeners, and more. Serving Tampa Bay.",
};

export default function ServicesPage() {
  return (
    <section className="min-h-screen pt-32 px-6">
      <h1 className="font-heading text-display-sm text-center">Services</h1>
    </section>
  );
}
