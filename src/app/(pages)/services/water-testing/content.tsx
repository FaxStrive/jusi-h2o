"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { InlineCTA } from "@/components/ui/inline-cta";
/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const testParams = [
  {
    name: "Hardness",
    what: "Calcium & magnesium mineral levels",
    why: "Scale build-up, dry skin, shortened appliance life",
    severity: "high" as const,
  },
  {
    name: "Chlorine",
    what: "Free and total chlorine concentration",
    why: "Chemical taste, odor, skin and eye irritation",
    severity: "high" as const,
  },
  {
    name: "pH Level",
    what: "Acidity or alkalinity balance",
    why: "Pipe corrosion, metallic taste, blue-green stains",
    severity: "medium" as const,
  },
  {
    name: "Iron",
    what: "Dissolved and particulate iron content",
    why: "Orange stains on fixtures, metallic taste",
    severity: "medium" as const,
  },
  {
    name: "TDS",
    what: "Total dissolved solids count",
    why: "Overall water purity and mineral load indicator",
    severity: "low" as const,
  },
  {
    name: "Sulfur",
    what: "Hydrogen sulfide gas presence",
    why: "Rotten-egg smell, tarnished silverware",
    severity: "high" as const,
  },
];

const severityColor = {
  high: "bg-red-400",
  medium: "bg-accent",
  low: "bg-secondary",
} as const;

const severityLabel = {
  high: "Common Issue",
  medium: "Moderate",
  low: "Monitor",
} as const;

const processSteps = [
  {
    step: "1",
    title: "Schedule",
    desc: "Call, email, or fill out our contact form. Same-day appointments available throughout Tampa Bay.",
    img: "/images/technician-arriving.jpeg",
  },
  {
    step: "2",
    title: "We Test",
    desc: "Our certified technician tests water from multiple sources in your home. Results in about 30 minutes, explained clearly.",
    img: "/images/glass-filtration-system.jpeg",
  },
  {
    step: "3",
    title: "You Decide",
    desc: "If treatment is recommended, we provide a same-day quote. If your water is fine, we tell you that too. Zero pressure.",
    img: "/images/technician-homeowner.jpeg",
  },
];

const resultRanges = [
  {
    label: "Good",
    color: "bg-secondary",
    textColor: "text-secondary-700",
    bgColor: "bg-secondary-50",
    borderColor: "border-secondary-200",
    description: "Within EWG health guidelines. No treatment needed.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 6L9 17l-5-5" />
      </svg>
    ),
  },
  {
    label: "Fair",
    color: "bg-accent",
    textColor: "text-accent-700",
    bgColor: "bg-accent-50",
    borderColor: "border-accent-200",
    description: "Meets legal limits but exceeds EWG health guidelines. Treatment recommended.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 9v4M12 17h.01" />
        <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
      </svg>
    ),
  },
  {
    label: "Poor",
    color: "bg-red-500",
    textColor: "text-red-700",
    bgColor: "bg-red-50",
    borderColor: "border-red-200",
    description: "Exceeds both legal and EWG limits. Treatment strongly recommended.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M15 9l-6 6M9 9l6 6" />
      </svg>
    ),
  },
];

const faqs = [
  {
    q: "How long does the free water test take?",
    a: "About 30 minutes from start to finish. Our technician tests water from multiple sources in your home and explains every result on the spot. No waiting days for a lab report.",
  },
  {
    q: "Is the water test really free?",
    a: "Yes, 100% free with absolutely no obligation. We believe everyone deserves to know what is in their water. If your water tests fine, we will tell you that. No pressure to buy anything.",
  },
  {
    q: "What do you test for?",
    a: "We test for hardness, chlorine, pH, iron, TDS (total dissolved solids), sulfur, and additional parameters based on your water source. We compare results against EWG health guidelines, not just legal limits, so you get the full picture.",
  },
  {
    q: "What is the difference between EPA limits and EWG guidelines?",
    a: "EPA legal limits are the maximum contaminant levels allowed by law. The Environmental Working Group (EWG) sets stricter health guidelines based on the latest scientific research. Water can be legally compliant but still contain contaminants at levels the EWG considers a health concern. We test against both standards.",
  },
  {
    q: "Do you test well water or just city water?",
    a: "We test both. Well water and city (municipal) water have different concerns. Well water often has higher iron, sulfur, and hardness levels, while city water typically has more chlorine and chloramine. Our test covers the parameters most relevant to your water source.",
  },
  {
    q: "What happens if my water needs treatment?",
    a: "We walk you through our recommendations and provide a same-day quote. We carry the full Jusi H2O product line, including water softeners, whole-house filtration, reverse osmosis, and specialty systems. Financing options are available. But again, there is zero pressure to purchase anything during or after the test.",
  },
];

/* ------------------------------------------------------------------ */
/*  Connecting SVG line for process steps                              */
/* ------------------------------------------------------------------ */

function ConnectingLine() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div
      ref={ref}
      className="hidden md:block absolute top-[140px] left-[16.67%] right-[16.67%] h-[2px] pointer-events-none z-0"
    >
      <svg
        width="100%"
        height="40"
        viewBox="0 0 800 40"
        preserveAspectRatio="none"
        className="absolute -top-[19px] left-0 w-full"
      >
        <motion.path
          d="M 0 20 C 100 5, 200 35, 400 20 C 600 5, 700 35, 800 20"
          fill="none"
          stroke="url(#lineGrad)"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={inView ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{ duration: 1.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.3 }}
        />
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--color-primary-200)" />
            <stop offset="50%" stopColor="var(--color-secondary-200)" />
            <stop offset="100%" stopColor="var(--color-primary-200)" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  FAQ Accordion Item                                                 */
/* ------------------------------------------------------------------ */

function FAQItem({
  q,
  a,
  isOpen,
  onToggle,
  index,
}: {
  q: string;
  a: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  return (
    <motion.div
      className="border border-border-light rounded-brand-lg overflow-hidden bg-white/80 backdrop-blur-sm"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left group hover:bg-primary-50/30 transition-colors duration-300"
        aria-expanded={isOpen}
      >
        <span className="font-heading text-base md:text-lg font-semibold text-text pr-4 leading-snug">
          {q}
        </span>
        <motion.span
          className="shrink-0 w-8 h-8 rounded-full bg-primary-50 text-primary flex items-center justify-center group-hover:bg-primary-100 transition-colors"
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M7 1v12M1 7h12" />
          </svg>
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="overflow-hidden"
          >
            <div className="px-5 md:px-6 pb-5 md:pb-6 pt-0">
              <p className="text-text-secondary text-sm md:text-base leading-relaxed">
                {a}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main Component                                                     */
/* ------------------------------------------------------------------ */

export function WaterTestingContent() {
  const paramsRef = useRef(null);
  const paramsInView = useInView(paramsRef, { once: true, margin: "-60px" });
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  return (
    <>
      {/* ============================================================ */}
      {/*  Glowing CTA Card                                            */}
      {/* ============================================================ */}
      <section className="relative -mt-6 z-10 max-w-3xl mx-auto px-6">
        <motion.div
          className="relative rounded-brand-xl p-[2px] overflow-hidden"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Animated gradient border */}
          <div
            className="absolute inset-0 rounded-brand-xl"
            style={{
              background:
                "conic-gradient(from var(--border-angle, 0deg), var(--color-primary-200), var(--color-secondary-200), var(--color-accent-200), var(--color-primary-200))",
              animation: "rotateBorder 4s linear infinite",
            }}
          />
          <style>{`
            @keyframes rotateBorder {
              to { --border-angle: 360deg; }
            }
            @property --border-angle {
              syntax: "<angle>";
              inherits: false;
              initial-value: 0deg;
            }
          `}</style>

          {/* Card inner */}
          <div className="relative bg-white rounded-[calc(1.75rem-2px)] p-8 md:p-10 text-center">
            {/* Subtle inner glow */}
            <div className="absolute inset-0 rounded-[calc(1.75rem-2px)] pointer-events-none overflow-hidden">
              <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-gradient-to-b from-primary-100/30 to-transparent rounded-full blur-3xl" />
            </div>

            <div className="relative">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-secondary-50 text-secondary-700 text-xs font-bold uppercase tracking-widest rounded-full mb-4">
                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                100% Free &mdash; No Obligation
              </div>
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-text mb-3">
                Schedule Your Free Water Test
              </h3>
              <p className="text-text-secondary mb-6 max-w-lg mx-auto">
                Our technician comes to your home, tests your water on the spot, and
                explains results in plain language. Takes about 30 minutes.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-primary-dark transition-all duration-300 hover:scale-105 shadow-brand"
                >
                  Book Your Free Test
                </Link>
                <a
                  href="tel:+18133030515"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-50 text-primary font-semibold rounded-full hover:bg-primary-100 transition-colors"
                >
                  (813) 303-0515
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ============================================================ */}
      {/*  Process Steps with SVG connecting line                      */}
      {/* ============================================================ */}
      <section className="relative py-section overflow-hidden">
        {/* Organic gradient mesh background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-primary-50/25 via-secondary-50/10 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-accent-50/15 to-transparent rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-gradient-to-r from-transparent via-primary-50/10 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 bg-primary-50 text-primary text-xs font-semibold uppercase tracking-widest rounded-full mb-4">
              How It Works
            </span>
            <h2 className="font-heading text-display-sm text-text">
              3 Simple Steps
            </h2>
          </motion.div>

          <div className="relative">
            <ConnectingLine />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
              {processSteps.map((item, i) => (
                <motion.div
                  key={item.step}
                  className="text-center"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.2,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                >
                  <div className="relative aspect-[4/3] rounded-brand-xl overflow-hidden mb-6 shadow-brand group">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-900/20 to-transparent" />
                    <motion.div
                      className="absolute top-4 left-4 w-11 h-11 rounded-full bg-white text-primary font-heading font-bold flex items-center justify-center text-lg shadow-brand-lg"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 15,
                        delay: i * 0.2 + 0.3,
                      }}
                    >
                      {item.step}
                    </motion.div>
                  </div>
                  <h3 className="font-heading text-xl font-bold text-text mb-2">
                    {item.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed max-w-xs mx-auto">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>


      <InlineCTA variant="button" text="Book Your Free Water Test Now" trustLine="Same-day results. No strings attached." />
      {/* ============================================================ */}
      {/*  What We Test - Parameter Cards with severity                */}
      {/* ============================================================ */}
      <section ref={paramsRef} className="relative py-section overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-surface-secondary via-white to-surface-secondary pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-bl from-secondary-50/20 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-gradient-to-tr from-primary-50/15 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-5xl mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={paramsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 bg-secondary-50 text-secondary-700 text-xs font-semibold uppercase tracking-widest rounded-full mb-4">
              Comprehensive Testing
            </span>
            <h2 className="font-heading text-display-sm text-text mb-4">
              What We Test For
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              We go beyond basic testing. Every parameter is compared against both
              EPA legal limits and the stricter{" "}
              <span className="font-semibold text-text">
                EWG health guidelines
              </span>{" "}
              so you get the full picture, not just what&apos;s legally required.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {testParams.map((param, i) => (
              <motion.div
                key={param.name}
                className="group bg-white/90 backdrop-blur-sm rounded-brand-lg border border-border-light p-6 hover:shadow-brand-lg hover:border-primary-200 transition-all duration-300 hover:-translate-y-1"
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={
                  paramsInView
                    ? { opacity: 1, scale: 1, y: 0 }
                    : {}
                }
                transition={{
                  duration: 0.45,
                  delay: i * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <motion.span
                    className={`w-2.5 h-2.5 rounded-full ${severityColor[param.severity]} shrink-0`}
                    initial={{ scale: 0 }}
                    animate={paramsInView ? { scale: 1 } : {}}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 12,
                      delay: i * 0.1 + 0.2,
                    }}
                  />
                  <div className="font-heading text-lg font-bold text-primary group-hover:text-primary-dark transition-colors">
                    {param.name}
                  </div>
                </div>
                <p className="text-text text-sm font-medium mb-2">
                  {param.what}
                </p>
                <p className="text-text-tertiary text-xs leading-relaxed mb-3">
                  {param.why}
                </p>
                <span
                  className={`inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full ${
                    param.severity === "high"
                      ? "bg-red-50 text-red-600"
                      : param.severity === "medium"
                      ? "bg-accent-50 text-accent-700"
                      : "bg-secondary-50 text-secondary-700"
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${severityColor[param.severity]}`}
                  />
                  {severityLabel[param.severity]}
                </span>
              </motion.div>
            ))}
          </div>

          <motion.p
            className="text-center text-text-secondary text-sm mt-8"
            initial={{ opacity: 0 }}
            animate={paramsInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
          >
            Additional parameters tested based on your water source and location.
          </motion.p>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  What Your Results Mean                                      */}
      {/* ============================================================ */}
      <section className="relative py-section overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-50/10 via-transparent to-secondary-50/10" />
          <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-gradient-to-l from-accent-50/10 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-5xl mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 bg-primary-50 text-primary text-xs font-semibold uppercase tracking-widest rounded-full mb-4">
              Understanding Results
            </span>
            <h2 className="font-heading text-display-sm text-text mb-4">
              What Your Results Mean
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              We don&apos;t just hand you numbers. We compare every reading against{" "}
              <span className="font-semibold text-text">
                EWG health guidelines
              </span>
              , which are often stricter than EPA legal limits, and explain what
              each result means for your family.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {resultRanges.map((range, i) => (
              <motion.div
                key={range.label}
                className={`relative rounded-brand-xl border ${range.borderColor} ${range.bgColor} p-7 md:p-8 text-center`}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.15,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                {/* Colored bar at top */}
                <div
                  className={`absolute top-0 left-6 right-6 h-1 ${range.color} rounded-b-full`}
                />

                <motion.div
                  className={`inline-flex items-center justify-center w-14 h-14 rounded-full ${range.bgColor} border ${range.borderColor} ${range.textColor} mb-4 mx-auto`}
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                    delay: i * 0.15 + 0.2,
                  }}
                >
                  {range.icon}
                </motion.div>

                <h3 className={`font-heading text-xl font-bold ${range.textColor} mb-2`}>
                  {range.label}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {range.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* EWG callout */}
          <motion.div
            className="mt-10 bg-white border border-border-light rounded-brand-xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-5 shadow-brand-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="shrink-0 w-12 h-12 rounded-full bg-primary-50 text-primary flex items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="w-6 h-6"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <div>
              <h4 className="font-heading text-base font-bold text-text mb-1">
                Why We Use EWG Guidelines
              </h4>
              <p className="text-text-secondary text-sm leading-relaxed">
                The Environmental Working Group (EWG) sets health guidelines based on
                the latest peer-reviewed science, often 10-100x stricter than
                outdated EPA legal limits. Your water can be{" "}
                <span className="font-semibold text-text">legally compliant</span>{" "}
                and still contain contaminants at levels the EWG considers a health
                concern. We believe you deserve to know the full story.
              </p>
            </div>
          </motion.div>
        </div>
      </section>


      <InlineCTA variant="banner" text="Know Exactly What Is in Your Water" message="Professional testing for hardness, chlorine, pH, iron, and more." />
      {/* ============================================================ */}
      {/*  FAQ Accordion                                               */}
      {/* ============================================================ */}
      <section className="relative py-section overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-surface-secondary to-white pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-0 w-[500px] h-[500px] bg-gradient-to-r from-secondary-50/15 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-0 w-[400px] h-[400px] bg-gradient-to-l from-primary-50/15 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-3xl mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 bg-accent-50 text-accent-700 text-xs font-semibold uppercase tracking-widest rounded-full mb-4">
              Common Questions
            </span>
            <h2 className="font-heading text-display-sm text-text">
              Water Testing FAQ
            </h2>
          </motion.div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
                q={faq.q}
                a={faq.a}
                isOpen={openFAQ === i}
                onToggle={() =>
                  setOpenFAQ((prev) => (prev === i ? null : i))
                }
                index={i}
              />
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-text-secondary text-sm mb-4">
              Still have questions? We&apos;re happy to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-primary text-white font-bold rounded-full hover:bg-primary-dark transition-all duration-300 hover:scale-105 shadow-brand text-sm"
              >
                Schedule Free Test
              </Link>
              <a
                href="tel:+18133030515"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-primary-50 text-primary font-semibold rounded-full hover:bg-primary-100 transition-colors text-sm"
              >
                Call (813) 303-0515
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 px-4 bg-gradient-to-b from-white to-primary-50/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-text-primary mb-2 text-center">Related Services</h2>
          <p className="text-text-secondary text-center mb-8">Based on your test results, these are the most common solutions we recommend.</p>
          <div className="grid sm:grid-cols-3 gap-4">
            <Link href="/services/water-softeners" className="group block p-6 bg-white rounded-2xl border border-gray-100 hover:border-primary/30 hover:shadow-brand transition-all duration-300">
              <h3 className="font-semibold text-text-primary group-hover:text-primary transition-colors mb-2">Water Softeners</h3>
              <p className="text-sm text-text-secondary">The top recommendation for Tampa Bay homes with hard water test results.</p>
            </Link>
            <Link href="/services/water-filtration" className="group block p-6 bg-white rounded-2xl border border-gray-100 hover:border-primary/30 hover:shadow-brand transition-all duration-300">
              <h3 className="font-semibold text-text-primary group-hover:text-primary transition-colors mb-2">Water Filtration</h3>
              <p className="text-sm text-text-secondary">Whole-house filtration for chlorine, sediment, and other contaminants.</p>
            </Link>
            <Link href="/services/well-water" className="group block p-6 bg-white rounded-2xl border border-gray-100 hover:border-primary/30 hover:shadow-brand transition-all duration-300">
              <h3 className="font-semibold text-text-primary group-hover:text-primary transition-colors mb-2">Well Water Treatment</h3>
              <p className="text-sm text-text-secondary">Specialized solutions for iron, sulfur, and bacteria found in well water tests.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
