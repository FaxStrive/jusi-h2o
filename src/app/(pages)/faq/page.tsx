import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { FaqContent } from "@/components/sections/faq-content";
import { CTASection } from "@/components/sections/cta-section";
import { InlineCTA } from "@/components/ui/inline-cta";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description: "Answers to common questions about water testing, filtration systems, installation, pricing, maintenance, and JusiCare+ from Jusi H2O in Tampa Bay.",
  alternates: { canonical: "/faq" },
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I know if my water has a problem?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Common signs include white scale buildup on faucets, dry skin and hair after showering, spots on dishes, unpleasant taste or smell, and discolored water. Our free in-home water test can identify exactly what is in your water.",
      },
    },
    {
      "@type": "Question",
      name: "What is hard water and why is it a problem?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hard water contains high levels of calcium and magnesium minerals. It causes scale buildup in pipes and appliances, reduces soap effectiveness, leaves spots on dishes and fixtures, and can make skin and hair feel dry. It is one of the most common water issues in Tampa Bay.",
      },
    },
    {
      "@type": "Question",
      name: "Is Tampa Bay water safe to drink?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "While Tampa Bay municipal water meets EPA standards, it often contains chlorine, hard minerals, and trace contaminants that affect taste, smell, and your home. A water test reveals exactly what is in your specific water supply.",
      },
    },
    {
      "@type": "Question",
      name: "Is the water test really free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our in-home water test is completely free with no obligation. Our technician will test your water, explain the results in plain language, and if you are interested, recommend solutions. There is zero pressure to purchase.",
      },
    },
    {
      "@type": "Question",
      name: "What does the water test check for?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We test for hardness, chlorine, pH levels, iron, total dissolved solids (TDS), and other common contaminants specific to your water source. The test takes about 30 minutes and results are available immediately.",
      },
    },
    {
      "@type": "Question",
      name: "How do I schedule a water test?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can call us at (813) 303-0515, email support@jusih2o.com, or fill out the contact form on our website. We offer same-day scheduling in most areas.",
      },
    },
    {
      "@type": "Question",
      name: "Which filtration system do I need?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The right system depends on your water test results. We never recommend a one-size-fits-all solution. Based on your specific water quality, we will recommend the most effective and cost-efficient system for your home.",
      },
    },
    {
      "@type": "Question",
      name: "How long does installation take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most residential installations take 2-4 hours. The system is typically installed within 24-72 hours after you approve the quote. Our technicians ensure everything is fully operational before leaving.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a water filtration system cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Costs vary based on the type of system, your water conditions, and home size. We provide a clear, same-day quote after testing your water, with no hidden fees. We also offer financing options to make clean water accessible.",
      },
    },
    {
      "@type": "Question",
      name: "What is JusiCare+?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "JusiCare+ is our ongoing maintenance program. It includes regular maintenance reminders, filter replacement notifications, periodic system check-ins, and priority service scheduling to keep your system running at peak performance.",
      },
    },
    {
      "@type": "Question",
      name: "How often do filters need to be changed?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Filter replacement frequency depends on the system type and your water usage. Most whole-house filters last 6-12 months, while reverse osmosis membranes typically last 2-3 years. We will set up reminders so you never have to guess.",
      },
    },
    {
      "@type": "Question",
      name: "What is your service area?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We serve a 50-mile radius across Tampa Bay, including Hillsborough, Pinellas, Manatee, Sarasota, and Polk counties. Contact us to confirm service availability at your address.",
      },
    },
  ],
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      <PageHero
        badge="Common Questions"
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about water testing, filtration systems, installation, and maintenance."
        backgroundImage="/images/woman-filling-glass.jpeg"
        overlayOpacity={0.78}
      />
      <FaqContent />
      <InlineCTA variant="banner" text="Still Have Questions?" message="Call us or book a free water test. Zero pressure, zero obligation." />
      <CTASection />
    </>
  );
}
