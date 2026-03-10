import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { CTASection } from "@/components/sections/cta-section";
import { LeakRepairContent } from "./content";

export const metadata: Metadata = {
  title: "Leak Detection & Repair",
  description:
    "Professional leak detection and repair in Tampa Bay. Advanced technology finds hidden leaks fast. Prevent water damage and high bills. Licensed and insured.",
  alternates: { canonical: "/services/leak-repair" },
};

export default function LeakRepairPage() {
  return (
    <>
      <PageHero
        badge="Leak Repair"
        title="Find & Fix Leaks Fast"
        subtitle="Hidden leaks waste water and cause expensive damage. Our team locates and repairs leaks quickly with advanced detection."
        backgroundImage="/images/plumber-under-sink.jpeg"
        overlayOpacity={0.72}
      />
      <LeakRepairContent />
      <CTASection />
    </>
  );
}
