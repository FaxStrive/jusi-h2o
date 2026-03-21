"use client";

import { useRef, useState } from "react";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  useSpring,
  AnimatePresence,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const contaminants = [
  { name: "Chlorine", effect: "Taste, smell, dry skin", removal: 99, label: "99%+" },
  { name: "Sediment", effect: "Cloudy water, pipe damage", removal: 99, label: "99%+" },
  { name: "VOCs", effect: "Chemical contamination", removal: 95, label: "95%+" },
  { name: "Chloramine", effect: "Taste, rubber damage", removal: 97, label: "97%+" },
  { name: "Pesticides", effect: "Health concerns", removal: 95, label: "95%+" },
  { name: "Iron", effect: "Staining, metallic taste", removal: 90, label: "90%+" },
];

const comparisons = [
  { feature: "Coverage", pitcher: "1 faucet", fridge: "Fridge only", wholehouse: "Every tap" },
  { feature: "Shower water", pitcher: "No", fridge: "No", wholehouse: "Yes" },
  { feature: "Laundry water", pitcher: "No", fridge: "No", wholehouse: "Yes" },
  { feature: "Filter changes", pitcher: "Monthly", fridge: "6 months", wholehouse: "6-12 months" },
  { feature: "Cost per gallon", pitcher: "$0.25", fridge: "$0.15", wholehouse: "$0.01" },
];

const benefits = [
  {
    text: "Removes chlorine, sediment, and chemical byproducts from every faucet in your home",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-primary shrink-0">
        <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
      </svg>
    ),
  },
  {
    text: "Extends the life of water heaters, dishwashers, and plumbing by removing scale and corrosive elements",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-primary shrink-0">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
  {
    text: "Softer skin and hair from chlorine-free showers and baths",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-primary shrink-0">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
  {
    text: "Better-tasting drinking water, coffee, tea, and ice straight from any tap",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-primary shrink-0">
        <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
        <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
        <line x1="6" y1="1" x2="6" y2="4" />
        <line x1="10" y1="1" x2="10" y2="4" />
        <line x1="14" y1="1" x2="14" y2="4" />
      </svg>
    ),
  },
  {
    text: "Cleaner laundry with no mineral deposits or yellowing from hard water",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-primary shrink-0">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    text: "One filter system protects the entire house instead of buying multiple separate filters",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-primary shrink-0">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
];

const faqs = [
  {
    q: "How does a whole-house water filtration system work?",
    a: "A whole-house system is installed at the main water line where it enters your home. All water passes through a multi-stage filtration process that removes chlorine, sediment, VOCs, and other contaminants before it reaches any faucet, shower, or appliance. This means every drop of water in your home is filtered automatically.",
  },
  {
    q: "How often do the filters need to be changed?",
    a: "Most whole-house filters last 6 to 12 months depending on your water usage and local water quality. Our technicians will test your water during installation and give you a personalized maintenance schedule. We also offer maintenance plans so you never have to worry about it.",
  },
  {
    q: "Will a water filter reduce my water pressure?",
    a: "Modern whole-house filtration systems are designed to maintain full water pressure throughout your home. Our systems use high-flow-rate filters that handle typical residential demand without any noticeable drop. We size the system to your home&apos;s specific needs during the consultation.",
  },
  {
    q: "Is Tampa Bay tap water safe to drink without a filter?",
    a: "Tampa Bay water meets EPA minimum safety standards, but it still contains chlorine, chloramines, and trace levels of contaminants that affect taste, odor, and comfort. A whole-house filter goes beyond the minimum to give your family the cleanest possible water for drinking, bathing, and cooking.",
  },
  {
    q: "What is the difference between water filtration and water softening?",
    a: "Water filtration removes contaminants like chlorine, sediment, and chemicals. Water softening specifically targets hard minerals like calcium and magnesium that cause scale buildup. Many homes in Tampa Bay benefit from both. We offer combination systems that handle filtration and softening in one unit.",
  },
  {
    q: "How much does a whole-house water filtration system cost?",
    a: "Systems typically range from $1,500 to $4,000 installed, depending on the size of your home and the level of filtration needed. We offer free water testing and in-home consultations so we can recommend the right system for your budget. Financing options are also available.",
  },
];

/* ------------------------------------------------------------------ */
/*  Animated Progress Bar                                              */
/* ------------------------------------------------------------------ */

function ProgressBar({ value, inView }: { value: number; inView: boolean }) {
  return (
    <div className="relative w-full h-2.5 bg-primary-50 rounded-full overflow-hidden">
      <motion.div
        className="absolute inset-y-0 left-0 rounded-full"
        style={{
          background:
            "linear-gradient(90deg, var(--color-primary) 0%, var(--color-secondary) 100%)",
        }}
        initial={{ width: 0 }}
        animate={inView ? { width: `${value}%` } : { width: 0 }}
        transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
      />
      <motion.div
        className="absolute inset-y-0 left-0 rounded-full opacity-40 blur-sm"
        style={{
          background:
            "linear-gradient(90deg, var(--color-primary) 0%, var(--color-secondary) 100%)",
        }}
        initial={{ width: 0 }}
        animate={inView ? { width: `${value}%` } : { width: 0 }}
        transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
      />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  FAQ Accordion Item                                                 */
/* ------------------------------------------------------------------ */

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
  index,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  return (
    <motion.div
      className="border border-border-light rounded-brand-lg overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{
        background: isOpen
          ? "linear-gradient(135deg, var(--color-primary-50) 0%, rgba(255,255,255,0.9) 100%)"
          : "white",
      }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left group"
      >
        <span className="font-heading font-bold text-text text-sm md:text-base leading-snug">
          {question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="shrink-0 w-8 h-8 rounded-full bg-primary-50 flex items-center justify-center text-primary group-hover:bg-primary-100 transition-colors"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="7" y1="1" x2="7" y2="13" />
            <line x1="1" y1="7" x2="13" y2="7" />
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
                {answer}
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

export function WaterFiltrationContent() {
  const tableRef = useRef<HTMLElement>(null);
  const benefitsRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const tableInView = useInView(tableRef, { once: true, margin: "-60px" });
  const benefitsInView = useInView(benefitsRef, { once: true, margin: "-60px" });

  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  /* Scroll-linked parallax for image section */
  const { scrollYProgress: imageScrollProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(imageScrollProgress, [0, 1], [60, -60]);
  const imageScale = useTransform(imageScrollProgress, [0, 0.5, 1], [0.95, 1, 0.98]);
  const imageYSmooth = useSpring(imageY, { stiffness: 120, damping: 24 });
  const imageScaleSmooth = useSpring(imageScale, { stiffness: 120, damping: 24 });

  return (
    <>
      {/* ============================================================= */}
      {/*  Section 1 - Why Filter + Parallax Image                      */}
      {/* ============================================================= */}
      <section className="relative py-section overflow-hidden">
        {/* Background: diagonal sweep + dual gradient orbs */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(160deg, rgba(27,107,147,0.04) 0%, transparent 40%, rgba(46,139,87,0.03) 80%, transparent 100%)",
            }}
          />
          <div className="absolute -top-20 right-0 w-[600px] h-[600px] rounded-full blur-3xl" style={{ background: "radial-gradient(circle, rgba(27,107,147,0.06) 0%, transparent 70%)" }} />
          <div className="absolute bottom-0 -left-20 w-[500px] h-[500px] rounded-full blur-3xl" style={{ background: "radial-gradient(circle, rgba(46,139,87,0.05) 0%, transparent 70%)" }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            {/* Text column */}
            <motion.div
              className="lg:col-span-3"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <motion.span
                className="inline-block px-4 py-1.5 bg-primary-50 text-primary text-xs font-semibold uppercase tracking-widest rounded-full mb-5"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Whole-Home Protection
              </motion.span>

              <h2 className="font-heading text-3xl md:text-4xl font-bold text-text mb-6">
                Why Filter Your Entire Home?
              </h2>

              <p className="text-text-secondary leading-relaxed mb-4">
                Tampa Bay municipal water meets EPA standards, but it still contains chlorine, sediment, and trace contaminants that affect taste, smell, and your family&apos;s comfort. A pitcher filter only treats one tap. Your showers, laundry, and ice maker still get unfiltered water.
              </p>
              <p className="text-text-secondary leading-relaxed mb-8">
                A whole-house system treats water at the point of entry so every tap in your home delivers cleaner, better-tasting water. It protects your plumbing, extends appliance life, and provides better water for cooking, bathing, and drinking.
              </p>

              {/* Benefits list with icons */}
              <ul className="space-y-4 mb-8">
                {benefits.map((b, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.15 + i * 0.07, ease: [0.25, 0.46, 0.45, 0.94] }}
                  >
                    <span className="mt-0.5 p-1.5 bg-primary-50 rounded-brand flex items-center justify-center">
                      {b.icon}
                    </span>
                    <span className="text-text-secondary text-sm leading-relaxed">{b.text}</span>
                  </motion.li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-primary-dark transition-all duration-300 hover:scale-105 hover:shadow-brand-lg"
                >
                  Schedule Free Water Test
                </Link>
                <a
                  href="tel:7252358278"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-50 text-primary font-semibold rounded-full hover:bg-primary-100 transition-colors"
                >
                  (725) 235-8278
                </a>
              </div>
            </motion.div>

            {/* Parallax image column */}
            <motion.div
              ref={imageRef}
              className="lg:col-span-2"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <motion.div
                className="relative aspect-[3/4] rounded-brand-xl overflow-hidden shadow-brand-xl"
                style={{ y: imageYSmooth, scale: imageScaleSmooth }}
              >
                <Image
                  src="/images/kitchen-faucet-running.jpeg"
                  alt="Whole house water filtration system installation"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                {/* Subtle gradient overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/20 via-transparent to-transparent" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/*  Section 2 - Contaminant Removal Table with Progress Bars      */}
      {/* ============================================================= */}
      <section ref={tableRef} className="relative py-section overflow-hidden">
        {/* Background: angled gradient sweep with warm accent orb */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(200deg, rgba(46,139,87,0.04) 0%, rgba(255,255,255,0) 35%, rgba(27,107,147,0.03) 70%, rgba(212,160,6,0.02) 100%)",
            }}
          />
          <div className="absolute bottom-0 left-1/4 w-[450px] h-[450px] rounded-full blur-3xl" style={{ background: "radial-gradient(circle, rgba(46,139,87,0.05) 0%, transparent 70%)" }} />
          <div className="absolute top-10 right-10 w-[350px] h-[350px] rounded-full blur-3xl" style={{ background: "radial-gradient(circle, rgba(212,160,6,0.04) 0%, transparent 70%)" }} />
        </div>

        <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={tableInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <span className="inline-block px-4 py-1.5 bg-secondary-50 text-secondary-700 text-xs font-semibold uppercase tracking-widest rounded-full mb-4">
              What We Remove
            </span>
            <h2 className="font-heading text-display-sm text-text">
              Contaminant Removal Rates
            </h2>
          </motion.div>

          <motion.div
            className="bg-white/80 backdrop-blur-sm rounded-brand-xl border border-border-light overflow-hidden shadow-brand-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={tableInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.6 }}
          >
            {/* Table header */}
            <div className="grid grid-cols-12 gap-px bg-border-light">
              <div className="col-span-3 bg-primary-50 p-4 font-heading font-bold text-sm text-primary">
                Contaminant
              </div>
              <div className="col-span-4 bg-primary-50 p-4 font-heading font-bold text-sm text-primary">
                Effect
              </div>
              <div className="col-span-4 bg-primary-50 p-4 font-heading font-bold text-sm text-primary">
                Removal
              </div>
              <div className="col-span-1 bg-primary-50 p-4 font-heading font-bold text-sm text-primary text-right">
                Rate
              </div>
            </div>

            {/* Table rows with animated progress bars */}
            {contaminants.map((c, i) => (
              <motion.div
                key={c.name}
                className="grid grid-cols-12 gap-px bg-border-light"
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                animate={tableInView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: 0.25 + i * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                <div className="col-span-3 bg-white p-4 text-sm text-text font-medium flex items-center">
                  {c.name}
                </div>
                <div className="col-span-4 bg-white p-4 text-sm text-text-secondary flex items-center">
                  {c.effect}
                </div>
                <div className="col-span-4 bg-white p-4 flex items-center">
                  <ProgressBar value={c.removal} inView={tableInView} />
                </div>
                <div className="col-span-1 bg-white p-4 text-sm text-secondary font-bold text-right flex items-center justify-end">
                  {c.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ============================================================= */}
      {/*  Section 3 - Comparison Cards (Whole House elevated)             */}
      {/* ============================================================= */}
      <section ref={benefitsRef} className="relative py-section overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 pointer-events-none">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/videos/water-surface-waves.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-primary-900/85" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }}
            animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <span className="inline-block px-4 py-1.5 bg-white/10 text-secondary-300 text-xs font-semibold uppercase tracking-widest rounded-full mb-4">
              Compare Options
            </span>
            <h2 className="font-heading text-display-sm text-white">
              Whole House vs. Other Filters
            </h2>
          </motion.div>

          {/* 3-column card layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {/* Pitcher Card */}
            <motion.div
              className="bg-white/95 backdrop-blur-sm rounded-brand-xl border border-white/20 p-6 md:p-8 shadow-brand-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="w-12 h-12 rounded-full bg-surface-secondary flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-text-tertiary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M8 2h8l2 4H6l2-4z" />
                  <path d="M6 6v12a4 4 0 004 4h4a4 4 0 004-4V6" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-bold text-text mb-1">Pitcher Filter</h3>
              <p className="text-text-tertiary text-sm mb-6">Basic single-tap solution</p>
              <ul className="space-y-4">
                {comparisons.map((row) => (
                  <li key={row.feature} className="flex items-center justify-between gap-3">
                    <span className="text-sm text-text-secondary">{row.feature}</span>
                    <span className="text-sm text-text-tertiary font-medium shrink-0">{row.pitcher}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Whole House Card - elevated */}
            <motion.div
              className="relative bg-white rounded-brand-xl border-2 border-secondary p-6 md:p-8 md:-mt-4 md:mb-[-16px] shadow-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.25, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              {/* Recommended badge */}
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                <span className="inline-block px-4 py-1 bg-secondary text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-md">
                  Recommended
                </span>
              </div>

              {/* Subtle top glow */}
              <div className="absolute top-0 left-0 right-0 h-32 pointer-events-none rounded-t-brand-xl overflow-hidden">
                <motion.div
                  className="absolute inset-0"
                  style={{
                    background: "radial-gradient(ellipse at 50% 0%, rgba(46,139,87,0.08) 0%, transparent 70%)",
                  }}
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>

              <div className="relative">
                <div className="w-12 h-12 rounded-full bg-secondary-50 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-secondary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                </div>
                <h3 className="font-heading text-xl font-bold text-text mb-1">Whole House</h3>
                <p className="text-secondary text-sm font-medium mb-6">Complete home protection</p>
                <ul className="space-y-4">
                  {comparisons.map((row) => (
                    <li key={row.feature} className="flex items-center justify-between gap-3">
                      <span className="text-sm text-text-secondary">{row.feature}</span>
                      <span className="text-sm text-secondary font-bold shrink-0">{row.wholehouse}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className="mt-8 w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-secondary text-white font-bold rounded-full hover:bg-secondary-dark transition-all duration-300 hover:scale-[1.02] hover:shadow-brand-lg"
                >
                  Get a Free Quote
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 8h10M9 4l4 4-4 4" />
                  </svg>
                </Link>
              </div>
            </motion.div>

            {/* Fridge Filter Card */}
            <motion.div
              className="bg-white/95 backdrop-blur-sm rounded-brand-xl border border-white/20 p-6 md:p-8 shadow-brand-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.35, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="w-12 h-12 rounded-full bg-surface-secondary flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-text-tertiary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                  <rect x="4" y="2" width="16" height="20" rx="2" />
                  <line x1="4" y1="10" x2="20" y2="10" />
                  <line x1="12" y1="2" x2="12" y2="6" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-bold text-text mb-1">Fridge Filter</h3>
              <p className="text-text-tertiary text-sm mb-6">Fridge dispenser only</p>
              <ul className="space-y-4">
                {comparisons.map((row) => (
                  <li key={row.feature} className="flex items-center justify-between gap-3">
                    <span className="text-sm text-text-secondary">{row.feature}</span>
                    <span className="text-sm text-text-tertiary font-medium shrink-0">{row.fridge}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/*  Section 4 - FAQ Accordion                                     */}
      {/* ============================================================= */}
      <section className="relative py-section overflow-hidden">
        {/* Background: soft radial gradient mesh */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(27,107,147,0.02) 0%, rgba(255,255,255,0) 30%, rgba(46,139,87,0.03) 70%, rgba(27,107,147,0.02) 100%)",
            }}
          />
          <div className="absolute top-20 left-1/3 w-[500px] h-[500px] rounded-full blur-3xl" style={{ background: "radial-gradient(circle, rgba(27,107,147,0.04) 0%, transparent 70%)" }} />
          <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] rounded-full blur-3xl" style={{ background: "radial-gradient(circle, rgba(46,139,87,0.04) 0%, transparent 70%)" }} />
        </div>

        <div className="relative max-w-3xl mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <span className="inline-block px-4 py-1.5 bg-primary-50 text-primary text-xs font-semibold uppercase tracking-widest rounded-full mb-4">
              Common Questions
            </span>
            <h2 className="font-heading text-display-sm text-text">
              Water Filtration FAQ
            </h2>
            <p className="text-text-secondary mt-4 max-w-xl mx-auto">
              Everything you need to know about whole-house water filtration for your Tampa Bay home.
            </p>
          </motion.div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
                question={faq.q}
                answer={faq.a}
                isOpen={openFAQ === i}
                onToggle={() => setOpenFAQ(openFAQ === i ? null : i)}
                index={i}
              />
            ))}
          </div>

          {/* Bottom contact nudge */}
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-text-secondary text-sm mb-4">
              Have a question we didn&apos;t answer? We&apos;re happy to help.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-primary-dark transition-all duration-300 hover:scale-105 hover:shadow-brand-lg"
              >
                Contact Us
              </Link>
              <a
                href="tel:7252358278"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-50 text-primary font-semibold rounded-full hover:bg-primary-100 transition-colors"
              >
                (725) 235-8278
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
