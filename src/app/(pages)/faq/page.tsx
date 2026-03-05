import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { FaqContent } from "@/components/sections/faq-content";
import { CTASection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Common questions about water filtration, testing, installation, and maintenance from Jusi H2O.",
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        badge="Common Questions"
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about water testing, filtration systems, installation, and maintenance."
      />
      <FaqContent />
      <CTASection />
    </>
  );
}
