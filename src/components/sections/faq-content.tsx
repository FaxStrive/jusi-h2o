"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

const faqCategories = [
  {
    name: "Water Quality",
    faqs: [
      {
        q: "How do I know if my water has a problem?",
        a: "Common signs include white scale buildup on faucets, dry skin and hair after showering, spots on dishes, unpleasant taste or smell, and discolored water. Our free in-home water test can identify exactly what is in your water.",
      },
      {
        q: "What is hard water and why is it a problem?",
        a: "Hard water contains high levels of calcium and magnesium minerals. It causes scale buildup in pipes and appliances, reduces soap effectiveness, leaves spots on dishes and fixtures, and can make skin and hair feel dry. It is one of the most common water issues in Tampa Bay.",
      },
      {
        q: "Is Tampa Bay water safe to drink?",
        a: "While Tampa Bay municipal water meets EPA standards, it often contains chlorine, hard minerals, and trace contaminants that affect taste, smell, and your home. A water test reveals exactly what is in your specific water supply.",
      },
    ],
  },
  {
    name: "Water Testing",
    faqs: [
      {
        q: "Is the water test really free?",
        a: "Yes, our in-home water test is completely free with no obligation. Our technician will test your water, explain the results in plain language, and if you are interested, recommend solutions. There is zero pressure to purchase.",
      },
      {
        q: "What does the water test check for?",
        a: "We test for hardness, chlorine, pH levels, iron, total dissolved solids (TDS), and other common contaminants specific to your water source. The test takes about 30 minutes and results are available immediately.",
      },
      {
        q: "How do I schedule a water test?",
        a: "You can call us at (813) 303-0515, email support@jusih2o.com, or fill out the contact form on our website. We offer same-day scheduling in most areas.",
      },
    ],
  },
  {
    name: "Systems & Installation",
    faqs: [
      {
        q: "Which filtration system do I need?",
        a: "The right system depends on your water test results. We never recommend a one-size-fits-all solution. Based on your specific water quality, we will recommend the most effective and cost-efficient system for your home.",
      },
      {
        q: "How long does installation take?",
        a: "Most residential installations take 2-4 hours. The system is typically installed within 24-72 hours after you approve the quote. Our technicians ensure everything is fully operational before leaving.",
      },
      {
        q: "Will the system affect my water pressure?",
        a: "Modern filtration systems are designed to maintain your home's water pressure. Properly sized systems have minimal impact on flow rate. We ensure the system we recommend is appropriate for your home's plumbing.",
      },
      {
        q: "What brands do you carry?",
        a: "We work with top brands including Kinetico, Culligan, Pentair, Fleck, SpringWell, Aquasana, WaterBoss, Halo, and US Water Systems. We recommend the best brand and model for your specific water conditions.",
      },
    ],
  },
  {
    name: "Maintenance & Support",
    faqs: [
      {
        q: "What is JusiCare+?",
        a: "JusiCare+ is our ongoing maintenance program. It includes regular maintenance reminders, filter replacement notifications, periodic system check-ins, and priority service scheduling to keep your system running at peak performance.",
      },
      {
        q: "How often do filters need to be changed?",
        a: "Filter replacement frequency depends on the system type and your water usage. Most whole-house filters last 6-12 months, while reverse osmosis membranes typically last 2-3 years. We will set up reminders so you never have to guess.",
      },
      {
        q: "Do you offer warranties?",
        a: "Yes, all systems come with manufacturer warranties. Specific warranty terms vary by brand and system type. Our team will explain all warranty coverage during the consultation.",
      },
    ],
  },
  {
    name: "Pricing & Process",
    faqs: [
      {
        q: "How much does a water filtration system cost?",
        a: "Costs vary based on the type of system, your water conditions, and home size. We provide a clear, same-day quote after testing your water, with no hidden fees. We also offer financing options to make clean water accessible.",
      },
      {
        q: "Do you offer financing?",
        a: "Yes, we offer financing options to help make water filtration affordable for every household. Ask about our payment plans during your consultation.",
      },
      {
        q: "What is your service area?",
        a: "We serve a 50-mile radius across Tampa Bay, including Hillsborough, Pinellas, Manatee, Sarasota, and Polk counties. Contact us to confirm service availability at your address.",
      },
    ],
  },
];

function FaqItem({ faq, isOpen, onToggle }: { faq: { q: string; a: string }; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-border-light last:border-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="font-heading font-semibold text-text group-hover:text-primary transition-colors pr-4">
          {faq.q}
        </span>
        <motion.div
          className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-50 flex items-center justify-center"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-text-secondary leading-relaxed">{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FaqContent() {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const toggleItem = (key: string) => {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(key)) {
        next.delete(key);
      } else {
        next.add(key);
      }
      return next;
    });
  };

  return (
    <section ref={ref} className="relative py-section overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 -right-20 w-[500px] h-[500px] bg-gradient-to-bl from-primary-50/40 to-transparent rounded-full blur-3xl" />
      </div>
      <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
        {faqCategories.map((category, catIndex) => (
          <motion.div
            key={category.name}
            className="mb-12 last:mb-0"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: catIndex * 0.1 }}
          >
            <h2 className="font-heading text-2xl font-bold text-text mb-6">
              {category.name}
            </h2>
            <div className="bg-white rounded-brand-xl border border-border-light p-6 md:p-8">
              {category.faqs.map((faq) => {
                const key = `${category.name}-${faq.q}`;
                return (
                  <FaqItem
                    key={key}
                    faq={faq}
                    isOpen={openItems.has(key)}
                    onToggle={() => toggleItem(key)}
                  />
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
