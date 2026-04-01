"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView, useScroll, useTransform, useSpring } from "framer-motion";
import Link from "next/link";

import { InlineCTA } from "@/components/ui/inline-cta";
/* ------------------------------------------------------------------ */
/*  DATA                                                               */
/* ------------------------------------------------------------------ */

const included = [
  {
    title: "Quarterly Salt Refills",
    desc: "We deliver and refill your softener salt every quarter. No more lugging heavy bags from the store.",
    icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
  },
  {
    title: "Scheduled Filter Replacements",
    desc: "We track your filter schedule and replace them on time, every time. Water quality stays consistent year-round.",
    icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
  },
  {
    title: "Complete System Sanitation",
    desc: "Thorough cleaning and sanitation to prevent bacteria buildup and keep equipment running efficiently.",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
  {
    title: "Priority Service",
    desc: "JusiCare+ members jump to the front of the line. Most service calls scheduled within 24 hours.",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
  },
  {
    title: "Lifetime Warranty",
    desc: "Covered systems are protected for life. If a covered component fails, we repair or replace it at no charge.",
    icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z",
  },
];

const withoutVsWith = [
  { feature: "Salt refills", without: "Buy and carry yourself", withCare: "Delivered quarterly" },
  { feature: "Filter changes", without: "Remember and schedule", withCare: "Automatic on schedule" },
  { feature: "System cleaning", without: "Often forgotten", withCare: "Included in visits" },
  { feature: "Service scheduling", without: "Standard queue", withCare: "Priority, 24hr" },
  { feature: "Part failures", without: "Pay per repair", withCare: "Covered for life" },
  { feature: "Annual cost", without: "~$450+ variable", withCare: "$199 flat" },
];

const peaceOfMindItems = [
  "No surprise repair bills on covered components",
  "Salt delivered right to your door each quarter",
  "Filter replacements handled automatically",
  "24-hour priority scheduling when you need service",
  "System cleaned and sanitized by professionals",
  "Lifetime warranty protects your investment",
];

const faqs = [
  {
    q: "What exactly does JusiCare+ cover?",
    a: "JusiCare+ covers quarterly salt refills delivered to your home, all scheduled filter replacements, complete system sanitation during each service visit, priority scheduling within 24 hours, and a lifetime warranty on covered system components. It is a complete maintenance plan so you never have to worry about your water system.",
  },
  {
    q: "Can I cancel JusiCare+ at any time?",
    a: "Yes. JusiCare+ is an annual plan with no long-term contracts. If you decide to cancel, simply let us know before your renewal date. There are no cancellation fees or penalties.",
  },
  {
    q: "Is the lifetime warranty really for life?",
    a: "Yes. As long as your JusiCare+ membership is active, covered components on your system are protected. If a covered part fails due to normal wear, we repair or replace it at no additional cost to you.",
  },
  {
    q: "How do the quarterly salt refills work?",
    a: "We track your softener&apos;s salt usage and schedule automatic delivery every quarter. Our technician brings the salt directly to your system and refills it during the visit. You never need to buy, carry, or pour salt yourself.",
  },
  {
    q: "What if I need service between scheduled visits?",
    a: "JusiCare+ members get priority scheduling. If something comes up between your regular maintenance visits, call us at (725) 235-8278 and we will get a technician to your home within 24 hours in most cases.",
  },
  {
    q: "Do I need JusiCare+ if my system is new?",
    a: "Even new systems benefit from regular maintenance. JusiCare+ keeps your system running at peak efficiency from day one, prevents problems before they start, and the lifetime warranty means your investment is protected for as long as you are a member.",
  },
];

/* ------------------------------------------------------------------ */
/*  SUBCOMPONENTS                                                      */
/* ------------------------------------------------------------------ */

function AnimatedCheckmark({ delay }: { delay: number }) {
  return (
    <motion.svg
      className="w-6 h-6 text-secondary flex-shrink-0"
      viewBox="0 0 24 24"
      fill="none"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.circle
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth={1.5}
        variants={{
          hidden: { pathLength: 0, opacity: 0 },
          visible: {
            pathLength: 1,
            opacity: 1,
            transition: { duration: 0.6, delay, ease: "easeOut" },
          },
        }}
      />
      <motion.path
        d="M8 12l2.5 2.5L16 9"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={{
          hidden: { pathLength: 0, opacity: 0 },
          visible: {
            pathLength: 1,
            opacity: 1,
            transition: { duration: 0.4, delay: delay + 0.4, ease: "easeOut" },
          },
        }}
      />
    </motion.svg>
  );
}

function FaqItem({
  faq,
  isOpen,
  onToggle,
  index,
}: {
  faq: { q: string; a: string };
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  return (
    <motion.div
      className="border-b border-border-light last:border-0"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="font-heading font-semibold text-text group-hover:text-secondary transition-colors pr-4">
          {faq.q}
        </span>
        <motion.div
          className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary-50 flex items-center justify-center group-hover:bg-secondary-100 transition-colors"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <svg
            className="w-4 h-4 text-secondary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
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
    </motion.div>
  );
}

function SavingsBar({
  label,
  amount,
  percentage,
  color,
  delay,
}: {
  label: string;
  amount: string;
  percentage: number;
  color: "red" | "green";
  delay: number;
}) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-text">{label}</span>
        <span
          className={`font-heading text-lg font-bold ${
            color === "red" ? "text-red-500" : "text-secondary"
          }`}
        >
          {amount}
        </span>
      </div>
      <div className="relative h-10 bg-surface-secondary rounded-full overflow-hidden">
        <motion.div
          className={`absolute inset-y-0 left-0 rounded-full ${
            color === "red"
              ? "bg-gradient-to-r from-red-400 to-red-500"
              : "bg-gradient-to-r from-secondary to-secondary-light"
          }`}
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        />
      </div>
    </div>
  );
}

function FeatureIcon({ icon, index }: { icon: string; index: number }) {
  return (
    <motion.svg
      className="w-6 h-6 text-primary"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d={icon}
        variants={{
          hidden: { pathLength: 0, opacity: 0 },
          visible: {
            pathLength: 1,
            opacity: 1,
            transition: {
              pathLength: { duration: 0.8, delay: index * 0.1, ease: "easeInOut" },
              opacity: { duration: 0.3, delay: index * 0.1 },
            },
          },
        }}
      />
    </motion.svg>
  );
}

/* ------------------------------------------------------------------ */
/*  MAIN COMPONENT                                                     */
/* ------------------------------------------------------------------ */

export function JusiCareContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const featuresRef = useRef(null);
  const compareRef = useRef(null);
  const savingsRef = useRef(null);
  const peaceRef = useRef(null);

  const featuresInView = useInView(featuresRef, { once: true, margin: "-60px" });
  const compareInView = useInView(compareRef, { once: true, margin: "-60px" });
  const savingsInView = useInView(savingsRef, { once: true, margin: "-60px" });
  const peaceInView = useInView(peaceRef, { once: true, margin: "-60px" });

  /* Scroll-linked parallax for the pricing card glow */
  const pricingRef = useRef(null);
  const { scrollYProgress: pricingScroll } = useScroll({
    target: pricingRef,
    offset: ["start end", "end start"],
  });
  const glowScale = useTransform(pricingScroll, [0, 0.5, 1], [0.8, 1.1, 0.9]);
  const glowScaleSmooth = useSpring(glowScale, { stiffness: 100, damping: 20 });

  return (
    <>
      {/* ============================================================ */}
      {/*  PRICING CARD                                                 */}
      {/* ============================================================ */}
      <section ref={pricingRef} className="relative -mt-6 z-10 max-w-lg mx-auto px-6">
        {/* Animated glow behind card */}
        <motion.div
          className="absolute inset-0 -inset-x-8 -inset-y-8 pointer-events-none"
          style={{ scale: glowScaleSmooth }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-secondary-200/40 via-primary-200/20 to-secondary-100/30 rounded-[3rem] blur-2xl" />
        </motion.div>

        <motion.div
          className="relative bg-white rounded-brand-xl border-2 border-secondary overflow-hidden"
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 22,
            mass: 1,
          }}
          whileHover={{ y: -4 }}
          style={{
            boxShadow:
              "0 8px 32px -8px rgba(46, 139, 87, 0.18), 0 0 0 1px rgba(46, 139, 87, 0.05)",
          }}
        >
          {/* Shimmer overlay */}
          <motion.div
            className="absolute inset-0 pointer-events-none z-10"
            initial={{ x: "-100%" }}
            whileInView={{ x: "200%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="h-full w-1/3 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-20deg]" />
          </motion.div>

          <div className="relative bg-gradient-to-r from-secondary to-secondary-dark p-8 text-center text-white overflow-hidden">
            {/* Decorative circles in header */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-20 h-20 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
            <motion.div
              className="text-sm font-semibold uppercase tracking-widest mb-3 opacity-80"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 0.8, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Annual Protection Plan
            </motion.div>
            <motion.div
              className="font-heading text-6xl font-bold"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
                delay: 0.4,
              }}
            >
              $199
            </motion.div>
            <motion.div
              className="text-sm opacity-80 mt-1"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.8 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              per year - cancel anytime
            </motion.div>
          </div>

          <div className="relative p-8">
            <ul className="space-y-3.5 mb-8">
              {[
                "Quarterly salt refills",
                "All filter replacements",
                "System sanitation",
                "Priority service scheduling",
                "Lifetime warranty on covered systems",
              ].map((item, i) => (
                <motion.li
                  key={item}
                  className="flex items-center gap-3 text-sm"
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 24,
                    delay: 0.5 + i * 0.08,
                  }}
                >
                  <svg
                    className="w-5 h-5 text-secondary flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-text">{item}</span>
                </motion.li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="block w-full text-center px-8 py-4 bg-secondary text-white font-bold rounded-full hover:bg-secondary-dark transition-all duration-300 hover:scale-[1.03] hover:shadow-brand-lg"
            >
              Enroll in JusiCare+
            </Link>
            <p className="text-center text-text-tertiary text-xs mt-3">
              No contracts. Cancel before renewal.
            </p>
          </div>
        </motion.div>
      </section>

      {/* ============================================================ */}
      {/*  SAVINGS CALCULATOR                                           */}
      {/* ============================================================ */}
      <section ref={savingsRef} className="relative py-section overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-secondary-50/40 via-primary-50/20 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-gradient-to-tl from-accent-50/30 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-2xl mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={savingsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 bg-accent-50 text-accent-dark text-xs font-semibold uppercase tracking-widest rounded-full mb-4">
              Save Every Year
            </span>
            <h2 className="font-heading text-display-sm text-text">See What You Save</h2>
            <p className="mt-4 text-text-secondary max-w-lg mx-auto">
              Compare the real cost of maintaining your system yourself versus the simplicity of JusiCare+.
            </p>
          </motion.div>

          <motion.div
            className="bg-white rounded-brand-xl border border-border-light p-8 shadow-brand"
            initial={{ opacity: 0, y: 24 }}
            animate={savingsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <div className="space-y-8">
              <SavingsBar
                label="Without JusiCare+"
                amount="~$450+/yr"
                percentage={92}
                color="red"
                delay={0.3}
              />
              <SavingsBar
                label="With JusiCare+"
                amount="$199/yr"
                percentage={44}
                color="green"
                delay={0.5}
              />
            </div>

            <motion.div
              className="mt-8 pt-6 border-t border-border-light text-center"
              initial={{ opacity: 0 }}
              animate={savingsInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-secondary-50 rounded-full">
                <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                <span className="text-secondary font-heading font-bold text-sm">
                  Save $250+ per year
                </span>
              </div>
              <p className="text-text-tertiary text-xs mt-3">
                Based on average annual maintenance costs in Tampa Bay for water softener and filtration systems.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>


      <InlineCTA variant="button" text="Join JusiCare+ Today" trustLine="Complete protection for just $199/year." />
      {/* ============================================================ */}
      {/*  FEATURES - WHAT IS INCLUDED                                  */}
      {/* ============================================================ */}
      <section ref={featuresRef} className="relative py-section overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-40 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-secondary-50/30 via-primary-50/10 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-[350px] h-[350px] bg-gradient-to-tr from-primary-50/25 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 bg-secondary-50 text-secondary text-xs font-semibold uppercase tracking-widest rounded-full mb-4">
              Full Coverage
            </span>
            <h2 className="font-heading text-display-sm text-text">Everything Included</h2>
            <p className="mt-4 text-text-secondary max-w-xl mx-auto">
              We handle all the maintenance so your water system always performs at its best.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {included.map((item, i) => (
              <motion.div
                key={item.title}
                className={`group relative p-7 rounded-brand-xl border transition-all duration-300 hover:shadow-brand-lg ${
                  i === 4
                    ? "md:col-span-2 lg:col-span-1 bg-secondary-50/60 border-secondary-200"
                    : "bg-white border-border-light hover:border-secondary-200"
                }`}
                initial={{ opacity: 0, y: 24 }}
                animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 24,
                  delay: i * 0.08,
                }}
                whileHover={{ y: -4 }}
              >
                {/* Subtle card glow on hover */}
                <div className="absolute inset-0 rounded-brand-xl bg-gradient-to-br from-secondary-50/0 to-primary-50/0 group-hover:from-secondary-50/40 group-hover:to-primary-50/20 transition-all duration-500 pointer-events-none" />

                <div
                  className={`relative w-12 h-12 rounded-full flex items-center justify-center mb-5 ${
                    i === 4 ? "bg-secondary text-white" : "bg-primary-50"
                  }`}
                >
                  {i === 4 ? (
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                    </svg>
                  ) : (
                    <FeatureIcon icon={item.icon} index={i} />
                  )}
                </div>
                <h3 className="relative font-heading font-bold text-text mb-2">{item.title}</h3>
                <p className="relative text-text-secondary text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  WITH vs WITHOUT - Side by Side Cards                          */}
      {/* ============================================================ */}
      <section ref={compareRef} className="relative py-section overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-surface-secondary via-white to-surface-secondary" />
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-r from-red-50/20 to-transparent rounded-full blur-3xl" />
          <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-l from-secondary-50/30 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-5xl mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }}
            animate={compareInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 bg-primary-50 text-primary text-xs font-semibold uppercase tracking-widest rounded-full mb-4">
              Why JusiCare+
            </span>
            <h2 className="font-heading text-display-sm text-text">With vs. Without</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* WITHOUT card */}
            <motion.div
              className="relative rounded-brand-xl border border-red-200/60 bg-white p-8 overflow-hidden"
              initial={{ opacity: 0, x: -30 }}
              animate={compareInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.15, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-300 to-red-400" />
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center">
                  <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <h3 className="font-heading text-xl font-bold text-text">Without JusiCare+</h3>
              </div>
              <ul className="space-y-5">
                {withoutVsWith.map((row, i) => (
                  <motion.li
                    key={row.feature}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, y: 10 }}
                    animate={compareInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3 + i * 0.06 }}
                  >
                    <svg className="w-4 h-4 text-red-300 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <span className="text-sm font-medium text-text">{row.feature}</span>
                      <p className="text-sm text-red-400/80 mt-0.5">{row.without}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-red-100">
                <div className="text-center">
                  <span className="font-heading text-2xl font-bold text-red-400">~$450+</span>
                  <span className="text-text-tertiary text-sm ml-1">/year</span>
                </div>
              </div>
            </motion.div>

            {/* WITH JUSICARE+ card */}
            <motion.div
              className="relative rounded-brand-xl border-2 border-secondary bg-white p-8 overflow-hidden shadow-brand-lg"
              initial={{ opacity: 0, x: 30 }}
              animate={compareInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.25, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary to-secondary-light" />
              {/* Subtle glow */}
              <div className="absolute top-0 left-0 right-0 h-40 pointer-events-none">
                <motion.div
                  className="absolute inset-0"
                  style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(46,139,87,0.06) 0%, transparent 70%)" }}
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
              <div className="relative flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-heading text-xl font-bold text-text">With JusiCare+</h3>
                <span className="ml-auto text-[10px] font-bold uppercase tracking-wider text-white bg-secondary px-2.5 py-0.5 rounded-full">
                  Recommended
                </span>
              </div>
              <ul className="relative space-y-5">
                {withoutVsWith.map((row, i) => (
                  <motion.li
                    key={row.feature}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, y: 10 }}
                    animate={compareInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 + i * 0.06 }}
                  >
                    <svg className="w-4 h-4 text-secondary mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <span className="text-sm font-medium text-text">{row.feature}</span>
                      <p className="text-sm text-secondary font-semibold mt-0.5">{row.withCare}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>
              <div className="relative mt-8 pt-6 border-t border-secondary-100">
                <div className="text-center mb-5">
                  <span className="font-heading text-2xl font-bold text-secondary">$199</span>
                  <span className="text-text-tertiary text-sm ml-1">/year flat</span>
                </div>
                <Link
                  href="/contact"
                  className="block w-full text-center px-6 py-3.5 bg-secondary text-white font-bold rounded-full hover:bg-secondary-dark transition-all duration-300 hover:scale-[1.02]"
                >
                  Get Protected
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      <InlineCTA variant="banner" text="Never Worry About Your Water System Again" message="Priority service, quarterly refills, and lifetime warranty included." />
      {/* ============================================================ */}
      {/*  TESTIMONIAL                                                  */}
      {/* ============================================================ */}
      <section className="relative py-section overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-1/3 w-[500px] h-[500px] bg-gradient-to-br from-secondary-50/30 via-accent-50/10 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-3xl mx-auto px-6 lg:px-8">
          <motion.div
            className="relative bg-white rounded-brand-xl border border-border-light p-8 md:p-12 shadow-brand"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 24,
            }}
          >
            {/* Decorative quote mark */}
            <div className="absolute top-6 left-8 md:left-12">
              <svg
                className="w-10 h-10 text-secondary-100"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
              </svg>
            </div>

            <div className="relative pt-8">
              <motion.p
                className="text-lg md:text-xl text-text leading-relaxed font-medium italic"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                &ldquo;We signed up for JusiCare+ right after installation and it&apos;s been completely
                hands-off. The salt shows up, the filters get changed, and I never have to think about
                it. Last month a valve started leaking and they had someone out the next morning at no
                charge. For $199 a year, it&apos;s a no-brainer.&rdquo;
              </motion.p>
              <motion.div
                className="mt-6 flex items-center gap-4"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-secondary to-primary flex items-center justify-center text-white font-heading font-bold text-lg">
                  R
                </div>
                <div>
                  <div className="font-heading font-bold text-text">Robert M.</div>
                  <div className="text-text-tertiary text-sm">Tampa, FL - JusiCare+ member since 2024</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  PEACE OF MIND                                                */}
      {/* ============================================================ */}
      <section ref={peaceRef} className="relative py-section overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-white via-secondary-50/20 to-white" />
          <div className="absolute top-1/2 -translate-y-1/2 right-0 w-[450px] h-[450px] bg-gradient-to-l from-secondary-100/30 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-gradient-to-tr from-primary-50/20 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }}
            animate={peaceInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 bg-secondary-50 text-secondary text-xs font-semibold uppercase tracking-widest rounded-full mb-4">
              Worry-Free Ownership
            </span>
            <h2 className="font-heading text-display-sm text-text">Complete Peace of Mind</h2>
            <p className="mt-4 text-text-secondary max-w-xl mx-auto">
              Your water system is a major investment. JusiCare+ ensures it performs perfectly for years to come.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {peaceOfMindItems.map((item, i) => (
              <motion.div
                key={item}
                className="flex items-start gap-4 p-5 bg-white rounded-brand-lg border border-border-light hover:border-secondary-200 hover:shadow-brand-sm transition-all duration-300"
                initial={{ opacity: 0, y: 16 }}
                animate={peaceInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 24,
                  delay: i * 0.08,
                }}
              >
                <AnimatedCheckmark delay={0.3 + i * 0.1} />
                <span className="text-text text-sm font-medium leading-relaxed">{item}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 16 }}
            animate={peaceInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7 }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-white font-bold rounded-full hover:bg-secondary-dark transition-all duration-300 hover:scale-[1.03] hover:shadow-brand-lg"
            >
              Get Protected Today
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <p className="text-text-tertiary text-sm mt-3">
              Or call us at{" "}
              <a href="tel:7252358278" className="text-secondary hover:underline font-medium">
                (725) 235-8278
              </a>
            </p>
          </motion.div>
        </div>
      </section>

      <InlineCTA variant="text" text="Have questions about JusiCare+? We are here to help" />

      {/* ============================================================ */}
      {/*  FAQ ACCORDION                                                */}
      {/* ============================================================ */}
      <section className="relative py-section overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-white to-surface-secondary" />
          <div className="absolute top-20 left-10 w-[400px] h-[400px] bg-gradient-to-br from-primary-50/25 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-[350px] h-[350px] bg-gradient-to-tl from-secondary-50/25 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-3xl mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 bg-primary-50 text-primary text-xs font-semibold uppercase tracking-widest rounded-full mb-4">
              Questions
            </span>
            <h2 className="font-heading text-display-sm text-text">JusiCare+ FAQs</h2>
            <p className="mt-4 text-text-secondary max-w-lg mx-auto">
              Common questions about our annual protection plan.
            </p>
          </motion.div>

          <motion.div
            className="bg-white rounded-brand-xl border border-border-light p-6 md:p-8 shadow-brand"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            {faqs.map((faq, i) => (
              <FaqItem
                key={faq.q}
                faq={faq}
                index={i}
                isOpen={openFaq === i}
                onToggle={() => setOpenFaq(openFaq === i ? null : i)}
              />
            ))}
          </motion.div>

          <motion.p
            className="text-center text-text-tertiary text-sm mt-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Still have questions? Call us at{" "}
            <a href="tel:7252358278" className="text-secondary hover:underline font-medium">
              (725) 235-8278
            </a>{" "}
            or{" "}
            <Link href="/contact" className="text-secondary hover:underline font-medium">
              send us a message
            </Link>
            .
          </motion.p>
        </div>
      </section>
    </>
  );
}
