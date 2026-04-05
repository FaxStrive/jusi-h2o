"use client";

import { useRef, useState, useEffect } from "react";
import { InlineCTA } from "@/components/ui/inline-cta";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
  animate,
  AnimatePresence,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";

/* ------------------------------------------------------------------ */
/*  Animated Counter                                                    */
/* ------------------------------------------------------------------ */

function AnimatedCounter({
  target,
  suffix = "",
  prefix = "",
  duration = 2,
  inView,
}: {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  inView: boolean;
}) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (inView) {
      const controls = animate(count, target, {
        duration,
        ease: [0.25, 0.46, 0.45, 0.94],
      });
      return controls.stop;
    }
  }, [inView, count, target, duration]);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (v) => {
      setDisplay(String(v));
    });
    return unsubscribe;
  }, [rounded]);

  return (
    <span>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/*  Data                                                                */
/* ------------------------------------------------------------------ */

const wellWaterProblems = [
  {
    title: "Iron Staining",
    description:
      "Orange and rust-colored stains on sinks, toilets, tubs, and laundry. Even low iron levels leave visible marks over time.",
    severity: "high" as const,
    icon: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126z",
  },
  {
    title: "Sulfur / Rotten Egg Smell",
    description:
      "Hydrogen sulfide gas creates an unmistakable rotten egg odor. It tarnishes silverware, corrodes plumbing, and makes water unpleasant to use.",
    severity: "high" as const,
    icon: "M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636",
  },
  {
    title: "Bacteria & Microorganisms",
    description:
      "Without municipal treatment, well water can harbor coliform bacteria, E. coli, and other pathogens that pose serious health risks.",
    severity: "critical" as const,
    icon: "M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z",
  },
  {
    title: "Hard Water & Scale",
    description:
      "Florida well water is extremely hard, causing white scale on fixtures, clogged pipes, reduced appliance life, and dry skin.",
    severity: "high" as const,
    icon: "M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z",
  },
  {
    title: "Low pH / Acidic Water",
    description:
      "Acidic well water corrodes copper pipes, causes blue-green stains, leaches metals into your drinking water, and damages fixtures.",
    severity: "medium" as const,
    icon: "M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z",
  },
  {
    title: "Tannins & Sediment",
    description:
      "Organic tannins cause yellow or tea-colored water. Sand, clay, and sediment cloud your water and clog fixtures and appliances.",
    severity: "medium" as const,
    icon: "M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75",
  },
];

const severityConfig = {
  critical: {
    color: "bg-red-500",
    textColor: "text-red-600",
    bgColor: "bg-red-50",
    borderColor: "border-red-100",
    label: "Health Risk",
  },
  high: {
    color: "bg-orange-400",
    textColor: "text-orange-600",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-100",
    label: "Common Issue",
  },
  medium: {
    color: "bg-amber-400",
    textColor: "text-amber-600",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-100",
    label: "Monitor",
  },
};

const treatmentSolutions = [
  {
    name: "Iron & Sulfur Filter",
    targets: "Iron staining, rotten egg smell, manganese",
    method: "Oxidation + catalytic filtration",
    effectiveness: 98,
  },
  {
    name: "UV Disinfection",
    targets: "Bacteria, viruses, E. coli, coliform",
    method: "UV-C light at 254nm wavelength",
    effectiveness: 99,
  },
  {
    name: "Acid Neutralizer",
    targets: "Low pH, acidic water, pipe corrosion",
    method: "Calcite/corosex media raises pH to safe levels",
    effectiveness: 95,
  },
  {
    name: "Sediment Filtration",
    targets: "Sand, clay, rust particles, turbidity",
    method: "Multi-stage filtration down to 5 microns",
    effectiveness: 99,
  },
  {
    name: "Water Softener",
    targets: "Hard water, calcium, magnesium scale",
    method: "Ion exchange resin technology",
    effectiveness: 97,
  },
  {
    name: "Tannin Filter",
    targets: "Yellow/brown water, organic compounds",
    method: "Anion exchange resin for tannin removal",
    effectiveness: 92,
  },
];

const testingProcess = [
  {
    step: "1",
    title: "Comprehensive Analysis",
    description:
      "We test for 15+ parameters specific to well water: iron, sulfur, bacteria, pH, hardness, TDS, manganese, tannins, nitrates, and more. Much more thorough than city water testing.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
  },
  {
    step: "2",
    title: "Custom System Design",
    description:
      "Based on your results, we design a multi-stage treatment system tailored to your specific water chemistry. No cookie-cutter solutions. Every well is different.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M11.42 15.17l-5.1-5.1M20 4l-9.22 9.22M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
  {
    step: "3",
    title: "Professional Installation",
    description:
      "Licensed technicians install your complete treatment system in one visit. We handle plumbing, programming, and water quality verification before we leave.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
];

const benefits = [
  {
    stat: 99,
    suffix: "%",
    label: "bacteria elimination with UV",
  },
  {
    stat: 98,
    suffix: "%",
    label: "iron and sulfur removal",
  },
  {
    stat: 15,
    suffix: "+",
    label: "parameters tested per well",
  },
  {
    stat: 100,
    suffix: "%",
    label: "custom-designed systems",
  },
];

const faqs = [
  {
    q: "How is well water testing different from city water testing?",
    a: "Well water testing is significantly more comprehensive. Unlike city water that is municipally treated, well water has no pre-treatment, so we test for bacteria, nitrates, iron, sulfur, pH, hardness, tannins, manganese, and more. We typically test 15+ parameters compared to 6-8 for city water. Every well has unique water chemistry based on the aquifer it draws from.",
  },
  {
    q: "Why does my well water smell like rotten eggs?",
    a: "The rotten egg smell is caused by hydrogen sulfide gas, which is common in Florida well water. It occurs naturally when sulfate-reducing bacteria react with sulfur compounds in the groundwater. While the smell is unpleasant, the bigger concerns are that it corrodes plumbing, tarnishes silverware, and can indicate other water quality issues. An iron and sulfur filter eliminates the problem completely.",
  },
  {
    q: "Is my well water safe to drink without treatment?",
    a: "Not necessarily. Unlike city water, well water receives no municipal treatment. Florida well water commonly contains bacteria, iron, sulfur, and other contaminants at levels that affect health and comfort. The only way to know for certain is a professional water test. We recommend testing annually at minimum, and immediately if you notice any changes in taste, odor, or color.",
  },
  {
    q: "How much does a well water treatment system cost?",
    a: "Well water treatment systems typically range from $2,500 to $6,000+ installed, depending on the number of issues that need to be addressed. A simple iron filter costs less than a multi-stage system handling iron, sulfur, bacteria, and hardness. We provide a detailed quote after testing your water so you know exactly what you need and what it costs. Financing options are available.",
  },
  {
    q: "How often does a well water treatment system need maintenance?",
    a: "Most well water treatment systems need filter media replacement every 5-7 years, UV bulb replacement annually, and periodic backwash cycle adjustments. Salt-based softeners need salt refills monthly. Our JusiCare+ maintenance plan covers all of this, including annual water re-testing to make sure your system is still performing optimally as water conditions can change over time.",
  },
  {
    q: "Can you treat well water that has multiple problems?",
    a: "Absolutely. Most Florida wells have multiple issues, not just one. We commonly install multi-stage systems that address iron, sulfur, bacteria, hardness, and pH all in one integrated setup. The system is designed in the correct treatment order so each stage works optimally. This is why professional testing and custom system design matter so much for well water.",
  },
];

/* ------------------------------------------------------------------ */
/*  Animated Progress Ring                                              */
/* ------------------------------------------------------------------ */

function ProgressRing({
  value,
  inView,
  delay = 0,
}: {
  value: number;
  inView: boolean;
  delay?: number;
}) {
  const circumference = 2 * Math.PI * 38;
  const strokeDashoffset = circumference - (value / 100) * circumference;

  return (
    <div className="relative w-20 h-20">
      <svg className="w-20 h-20 -rotate-90" viewBox="0 0 80 80">
        <circle
          cx="40"
          cy="40"
          r="38"
          fill="none"
          stroke="var(--color-primary-100)"
          strokeWidth="4"
        />
        <motion.circle
          cx="40"
          cy="40"
          r="38"
          fill="none"
          stroke="url(#ringGradient)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={
            inView
              ? { strokeDashoffset }
              : { strokeDashoffset: circumference }
          }
          transition={{
            duration: 1.4,
            delay,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        />
        <defs>
          <linearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--color-primary)" />
            <stop offset="100%" stopColor="var(--color-secondary)" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="font-heading text-sm font-bold text-primary">
          {value}%
        </span>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  FAQ Accordion Item                                                  */
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
      className="border border-border-light rounded-brand-lg overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      style={{
        background: isOpen
          ? "linear-gradient(135deg, var(--color-primary-50) 0%, rgba(255,255,255,0.9) 100%)"
          : "white",
      }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left group"
        aria-expanded={isOpen}
      >
        <span className="font-heading font-bold text-text text-sm md:text-base leading-snug">
          {q}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="shrink-0 w-8 h-8 rounded-full bg-primary-50 flex items-center justify-center text-primary group-hover:bg-primary-100 transition-colors"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
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
/*  SVG Well Pipe Connector                                             */
/* ------------------------------------------------------------------ */

function PipeConnector() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div
      ref={ref}
      className="hidden md:block absolute top-[110px] left-[16.67%] right-[16.67%] h-[2px] pointer-events-none z-0"
    >
      <svg
        width="100%"
        height="40"
        viewBox="0 0 800 40"
        preserveAspectRatio="none"
        className="absolute -top-[19px] left-0 w-full"
      >
        <motion.path
          d="M 0 20 L 800 20"
          fill="none"
          stroke="url(#pipeGrad)"
          strokeWidth="2.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={inView ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{
            duration: 2,
            ease: [0.25, 0.46, 0.45, 0.94],
            delay: 0.3,
          }}
        />
        <defs>
          <linearGradient id="pipeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--color-primary-200)" />
            <stop offset="50%" stopColor="var(--color-secondary-300)" />
            <stop offset="100%" stopColor="var(--color-primary-200)" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main Component                                                      */
/* ------------------------------------------------------------------ */

export function WellWaterContent() {
  const problemsRef = useRef<HTMLElement>(null);
  const solutionsRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  const problemsInView = useInView(problemsRef, { once: true, margin: "-60px" });
  const solutionsInView = useInView(solutionsRef, { once: true, margin: "-60px" });
  const statsInView = useInView(statsRef, { once: true, margin: "-60px" });

  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  /* Scroll-linked parallax for hero image */
  const { scrollYProgress: imageScrollProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(imageScrollProgress, [0, 1], [80, -80]);
  const imageScale = useTransform(
    imageScrollProgress,
    [0, 0.5, 1],
    [0.92, 1, 0.96]
  );
  const imageYSmooth = useSpring(imageY, { stiffness: 100, damping: 22 });
  const imageScaleSmooth = useSpring(imageScale, { stiffness: 100, damping: 22 });

  /* Scroll parallax for decorative elements */
  const { scrollYProgress } = useScroll();
  const decorY1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const decorY2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const decorRotate = useTransform(scrollYProgress, [0, 1], [0, 60]);

  /* Mouse follow for solutions section tilt effect */
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-300, 300], [3, -3]);
  const rotateY = useTransform(mouseX, [-300, 300], [-3, 3]);
  const springRotateX = useSpring(rotateX, { stiffness: 150, damping: 20 });
  const springRotateY = useSpring(rotateY, { stiffness: 150, damping: 20 });

  function handleSolutionMouseMove(e: React.MouseEvent) {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  }

  return (
    <>
      {/* ============================================================= */}
      {/*  Section 1 - Why Well Water Needs Treatment + Parallax Image  */}
      {/* ============================================================= */}
      <section className="relative py-section overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(155deg, rgba(27,107,147,0.04) 0%, transparent 35%, rgba(46,139,87,0.03) 70%, transparent 100%)",
            }}
          />
          <div
            className="absolute -top-20 right-0 w-[600px] h-[600px] rounded-full blur-3xl"
            style={{
              background:
                "radial-gradient(circle, rgba(27,107,147,0.06) 0%, transparent 70%)",
            }}
          />
          <div
            className="absolute bottom-0 -left-20 w-[500px] h-[500px] rounded-full blur-3xl"
            style={{
              background:
                "radial-gradient(circle, rgba(46,139,87,0.05) 0%, transparent 70%)",
            }}
          />
          {/* Decorative floating elements with scroll parallax */}
          <motion.div
            style={{ y: decorY1 }}
            className="absolute top-28 right-20"
          >
            <svg
              viewBox="0 0 40 56"
              fill="none"
              className="w-10 h-14 text-primary-200 opacity-40"
            >
              <path
                d="M20 0C20 0 40 28 40 38C40 48.5 31 56 20 56C9 56 0 48.5 0 38C0 28 20 0 20 0Z"
                fill="currentColor"
              />
            </svg>
          </motion.div>
          <motion.div
            style={{ y: decorY2, rotate: decorRotate }}
            className="absolute bottom-40 left-12"
          >
            <svg
              viewBox="0 0 40 56"
              fill="none"
              className="w-8 h-11 text-secondary-200 opacity-30"
            >
              <path
                d="M20 0C20 0 40 28 40 38C40 48.5 31 56 20 56C9 56 0 48.5 0 38C0 28 20 0 20 0Z"
                fill="currentColor"
              />
            </svg>
          </motion.div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            {/* Text column */}
            <motion.div
              className="lg:col-span-3"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <motion.span
                className="inline-block px-4 py-1.5 bg-primary-50 text-primary text-xs font-semibold uppercase tracking-widest rounded-full mb-5"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Well Water Experts
              </motion.span>

              <h2 className="font-heading text-3xl md:text-4xl font-bold text-text mb-6">
                Why Florida Well Water Needs Professional Treatment
              </h2>

              <p className="text-text-secondary leading-relaxed mb-4">
                Unlike city water that goes through a municipal treatment plant,
                well water comes directly from underground aquifers with zero
                pre-treatment. In Florida, this means your water can contain high
                levels of iron, sulfur, bacteria, and minerals that affect your
                health, home, and daily comfort.
              </p>
              <p className="text-text-secondary leading-relaxed mb-8">
                Every well is different. Your neighbor&apos;s water chemistry can
                be completely different from yours, even on the same street.
                That&apos;s why generic, one-size-fits-all solutions do not work
                for well water. You need a system designed specifically for your
                water.
              </p>

              {/* Key points */}
              <ul className="space-y-4 mb-8">
                {[
                  "No municipal treatment means no safety net for bacteria, chemicals, or contaminants",
                  "Florida aquifers are high in iron, sulfur, and hardness minerals",
                  "Well water chemistry changes over time and needs periodic re-testing",
                  "Professional treatment protects your family, plumbing, and appliances",
                ].map((point, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: 0.15 + i * 0.07,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                  >
                    <span className="mt-0.5 p-1.5 bg-primary-50 rounded-brand flex items-center justify-center shrink-0">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-5 h-5 text-primary"
                      >
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </span>
                    <span className="text-text-secondary text-sm leading-relaxed">
                      {point}
                    </span>
                  </motion.li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-primary-dark transition-all duration-300 hover:scale-105 hover:shadow-brand-lg"
                >
                  Schedule Free Well Water Test
                </Link>
                <a
                  href="tel:+18133030515"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-50 text-primary font-semibold rounded-full hover:bg-primary-100 transition-colors"
                >
                  (813) 303-0515
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
              transition={{
                duration: 0.7,
                delay: 0.15,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <motion.div
                className="relative aspect-[3/4] rounded-brand-xl overflow-hidden shadow-brand-xl"
                style={{ y: imageYSmooth, scale: imageScaleSmooth }}
              >
                <Image
                  src="/images/filling-glass-faucet.jpeg"
                  alt="Clean filtered water from kitchen faucet"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/25 via-transparent to-transparent" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/*  Section 2 - Common Well Water Problems (Card Grid)           */}
      {/* ============================================================= */}
      <section ref={problemsRef} className="relative py-section overflow-hidden">
        {/* Background: warm warning gradient */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(170deg, rgba(255,240,230,0.4) 0%, transparent 40%, transparent 60%, rgba(255,245,235,0.3) 100%)",
            }}
          />
          <div
            className="absolute top-20 left-1/4 w-[500px] h-[500px] rounded-full blur-3xl"
            style={{
              background:
                "radial-gradient(circle, rgba(255,165,0,0.06) 0%, transparent 70%)",
            }}
          />
          <div
            className="absolute bottom-10 right-1/5 w-[400px] h-[400px] rounded-full blur-3xl"
            style={{
              background:
                "radial-gradient(circle, rgba(220,60,60,0.04) 0%, transparent 70%)",
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 24 }}
            animate={problemsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <span className="inline-block px-5 py-2 bg-red-50 text-red-600 text-xs font-semibold uppercase tracking-widest rounded-full mb-5 border border-red-100">
              Common Problems
            </span>
            <h2 className="font-heading text-display-sm text-text mb-4">
              What Florida Well Water Brings Into Your Home
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Florida&apos;s limestone aquifers and high water table create
              unique water quality challenges. These are the most common
              issues we find in Tampa Bay area wells.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {wellWaterProblems.map((problem, i) => {
              const config = severityConfig[problem.severity];
              return (
                <motion.div
                  key={problem.title}
                  className={`group relative bg-white/90 backdrop-blur-sm rounded-brand-xl border ${config.borderColor} p-6 md:p-7 hover:shadow-brand-lg transition-all duration-500 hover:-translate-y-1`}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  animate={
                    problemsInView
                      ? { opacity: 1, y: 0, scale: 1 }
                      : {}
                  }
                  transition={{
                    duration: 0.5,
                    delay: i * 0.1,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                >
                  {/* Hover glow */}
                  <div
                    className={`absolute inset-0 rounded-brand-xl ${config.bgColor} opacity-0 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none`}
                  />

                  <div className="relative">
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className={`flex-shrink-0 w-11 h-11 rounded-brand ${config.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}
                      >
                        <svg
                          className={`w-5.5 h-5.5 ${config.textColor}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d={problem.icon}
                          />
                        </svg>
                      </div>
                      <span
                        className={`inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full ${config.bgColor} ${config.textColor}`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${config.color}`}
                        />
                        {config.label}
                      </span>
                    </div>

                    <h3 className="font-heading font-bold text-text mb-2 text-base md:text-lg">
                      {problem.title}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {problem.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>


      <InlineCTA variant="button" text="Get a Free Well Water Analysis" trustLine="Iron, sulfur, bacteria testing included." />
      {/* ============================================================= */}
      {/*  Section 3 - Testing Process (3 Steps with SVG connector)     */}
      {/* ============================================================= */}
      <section className="relative py-section overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-20 right-0 w-[600px] h-[600px] rounded-full blur-3xl"
            style={{
              background:
                "radial-gradient(circle, rgba(27,107,147,0.05) 0%, transparent 70%)",
            }}
          />
          <div
            className="absolute bottom-10 left-0 w-[400px] h-[400px] rounded-full blur-3xl"
            style={{
              background:
                "radial-gradient(circle, rgba(46,139,87,0.04) 0%, transparent 70%)",
            }}
          />
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] rounded-full blur-3xl"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(27,107,147,0.03), transparent)",
            }}
          />
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
              Our Process
            </span>
            <h2 className="font-heading text-display-sm text-text mb-4">
              From Testing to Treatment
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              We do not guess. Every well water treatment starts with
              comprehensive testing so we know exactly what&apos;s in your water
              and can design the right solution.
            </p>
          </motion.div>

          <div className="relative">
            <PipeConnector />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10">
              {testingProcess.map((item, i) => (
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
                  {/* Step number circle */}
                  <motion.div
                    className="relative w-20 h-20 mx-auto mb-6"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 15,
                      delay: i * 0.2 + 0.1,
                    }}
                  >
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-100 to-secondary-100" />
                    <div className="absolute inset-[3px] rounded-full bg-white flex items-center justify-center text-primary">
                      {item.icon}
                    </div>
                    <div className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-primary text-white font-heading font-bold text-xs flex items-center justify-center shadow-brand">
                      {item.step}
                    </div>
                  </motion.div>

                  <h3 className="font-heading text-xl font-bold text-text mb-3">
                    {item.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed max-w-xs mx-auto">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/*  Section 4 - Treatment Solutions with Progress Rings          */}
      {/* ============================================================= */}
      <section
        ref={solutionsRef}
        className="relative py-section overflow-hidden"
        onMouseMove={handleSolutionMouseMove}
      >
        {/* Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(200deg, rgba(46,139,87,0.04) 0%, transparent 35%, rgba(27,107,147,0.03) 70%, rgba(212,160,6,0.02) 100%)",
            }}
          />
          <div
            className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full blur-3xl"
            style={{
              background:
                "radial-gradient(circle, rgba(46,139,87,0.05) 0%, transparent 70%)",
            }}
          />
          <div
            className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full blur-3xl"
            style={{
              background:
                "radial-gradient(circle, rgba(27,107,147,0.04) 0%, transparent 70%)",
            }}
          />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }}
            animate={solutionsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <span className="inline-block px-4 py-1.5 bg-secondary-50 text-secondary-700 text-xs font-semibold uppercase tracking-widest rounded-full mb-4">
              Treatment Solutions
            </span>
            <h2 className="font-heading text-display-sm text-text mb-4">
              Targeted Treatment for Every Problem
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Each system addresses specific well water issues. We combine them
              into one integrated setup based on your test results.
            </p>
          </motion.div>

          {/* Solutions grid with mouse-follow tilt */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
            style={{
              rotateX: springRotateX,
              rotateY: springRotateY,
              perspective: 1000,
            }}
          >
            {treatmentSolutions.map((solution, i) => (
              <motion.div
                key={solution.name}
                className="group bg-white/90 backdrop-blur-sm rounded-brand-xl border border-border-light p-6 hover:shadow-brand-lg hover:border-primary-200 transition-all duration-300"
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={
                  solutionsInView
                    ? { opacity: 1, scale: 1, y: 0 }
                    : {}
                }
                transition={{
                  duration: 0.5,
                  delay: i * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                <div className="flex items-start gap-4">
                  <ProgressRing
                    value={solution.effectiveness}
                    inView={solutionsInView}
                    delay={i * 0.1 + 0.2}
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-heading text-base font-bold text-text mb-1 group-hover:text-primary transition-colors">
                      {solution.name}
                    </h3>
                    <p className="text-text-secondary text-xs leading-relaxed mb-2">
                      {solution.targets}
                    </p>
                    <p className="text-text-tertiary text-[11px] leading-relaxed italic">
                      {solution.method}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom note */}
          <motion.p
            className="text-center text-text-secondary text-sm mt-8"
            initial={{ opacity: 0 }}
            animate={solutionsInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
          >
            Most wells require 2-4 treatment stages combined into one system.
            We design the optimal sequence based on your water test results.
          </motion.p>
        </div>
      </section>


      <InlineCTA variant="banner" text="Protect Your Well Water Supply" message="Schedule your comprehensive well water test today." />
      {/* ============================================================= */}
      {/*  Section 5 - Stats Bar with Animated Counters                 */}
      {/* ============================================================= */}
      <section ref={statsRef} className="relative py-section overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(27,107,147,0.05) 0%, transparent 30%, rgba(46,139,87,0.04) 60%, rgba(27,107,147,0.03) 100%)",
            }}
          />
          <div
            className="absolute top-1/3 -right-20 w-[500px] h-[600px] rounded-full blur-3xl"
            style={{
              background:
                "radial-gradient(ellipse, rgba(27,107,147,0.06) 0%, transparent 70%)",
            }}
          />
          <div
            className="absolute -bottom-20 left-0 w-[400px] h-[400px] rounded-full blur-3xl"
            style={{
              background:
                "radial-gradient(circle, rgba(46,139,87,0.04) 0%, transparent 70%)",
            }}
          />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={statsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <span className="inline-block px-4 py-1.5 bg-primary-50 text-primary text-xs font-semibold uppercase tracking-widest rounded-full mb-4">
              Results That Matter
            </span>
            <h2 className="font-heading text-display-sm text-text">
              The Difference Treatment Makes
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {benefits.map((b, i) => (
              <motion.div
                key={b.label}
                className="relative bg-white/90 backdrop-blur-sm rounded-brand-xl p-6 md:p-8 text-center shadow-brand border border-border-light overflow-hidden group hover:shadow-brand-lg transition-shadow duration-500"
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={
                  statsInView ? { opacity: 1, y: 0, scale: 1 } : {}
                }
                transition={{
                  duration: 0.5,
                  delay: i * 0.12,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-primary-100/60 to-secondary-100/30 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                <div className="font-heading text-3xl md:text-4xl font-bold text-primary mb-2 relative">
                  <AnimatedCounter
                    target={b.stat}
                    suffix={b.suffix}
                    duration={2.2}
                    inView={statsInView}
                  />
                </div>
                <div className="text-text-tertiary text-xs md:text-sm leading-snug relative">
                  {b.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/*  Section 6 - Why Professional Treatment (Image + List)        */}
      {/* ============================================================= */}
      <section className="relative py-section overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(27,107,147,0.02) 0%, transparent 30%, rgba(46,139,87,0.03) 70%, rgba(27,107,147,0.02) 100%)",
            }}
          />
          <div
            className="absolute top-20 right-0 w-[500px] h-[500px] rounded-full blur-3xl"
            style={{
              background:
                "radial-gradient(circle, rgba(212,160,6,0.04) 0%, transparent 70%)",
            }}
          />
          <div
            className="absolute bottom-20 left-0 w-[400px] h-[400px] rounded-full blur-3xl"
            style={{
              background:
                "radial-gradient(circle, rgba(27,107,147,0.05) 0%, transparent 70%)",
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <div className="relative aspect-[4/3] rounded-brand-xl overflow-hidden shadow-brand-xl">
                <Image
                  src="/images/plumber-pipes.jpeg"
                  alt="Professional water treatment system installation"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/20 via-transparent to-transparent" />
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.1,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <span className="inline-block px-4 py-1.5 bg-primary-50 text-primary text-xs font-semibold uppercase tracking-widest rounded-full mb-5">
                Why Choose Professional Treatment
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-text mb-6">
                DIY Filters Cannot Handle Well Water
              </h2>
              <p className="text-text-secondary leading-relaxed mb-8">
                Big-box store filters are designed for city water. They cannot
                handle the iron loads, sulfur levels, and bacteria found in
                Florida well water. Here is what professional treatment gives
                you that DIY cannot:
              </p>

              <div className="space-y-4">
                {[
                  {
                    title: "Comprehensive water analysis",
                    desc: "We test for 15+ parameters. Big-box test strips check 3-4 at most.",
                  },
                  {
                    title: "Multi-stage treatment design",
                    desc: "Correct sequencing matters. Iron must be removed before softening, and bacteria before carbon filtration.",
                  },
                  {
                    title: "Proper sizing and flow rates",
                    desc: "Undersized systems drop water pressure. Oversized systems waste money. We calculate exactly what your home needs.",
                  },
                  {
                    title: "Licensed installation",
                    desc: "Proper plumbing connections, bypass valves, and drain lines. Installed to code with permits when required.",
                  },
                  {
                    title: "Ongoing monitoring",
                    desc: "Water chemistry changes. Annual re-testing and system adjustments keep your treatment optimized year after year.",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex items-start gap-4 p-4 bg-white/70 rounded-brand-lg border border-border-light hover:shadow-brand-sm transition-shadow duration-300"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: 0.15 + i * 0.08,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                  >
                    <span className="shrink-0 mt-0.5 w-6 h-6 rounded-full bg-secondary-50 flex items-center justify-center">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2.5}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-3.5 h-3.5 text-secondary"
                      >
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </span>
                    <div>
                      <h4 className="font-heading text-sm font-bold text-text mb-0.5">
                        {item.title}
                      </h4>
                      <p className="text-text-secondary text-xs leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      <InlineCTA variant="text" text="Questions about well water treatment?" />
      {/* ============================================================= */}
      {/*  Section 7 - Mid-Page CTA                                     */}
      {/* ============================================================= */}
      <section className="relative py-12 overflow-hidden">
        <div className="relative max-w-3xl mx-auto px-6">
          <motion.div
            className="relative rounded-brand-xl overflow-hidden"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            {/* Gradient background */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(135deg, var(--color-primary-800) 0%, var(--color-primary-900) 50%, var(--color-primary-700) 100%)",
              }}
            />
            {/* Decorative orbs */}
            <div className="absolute -top-20 -right-20 w-[300px] h-[300px] rounded-full bg-white/5 blur-2xl" />
            <div className="absolute -bottom-10 -left-10 w-[200px] h-[200px] rounded-full bg-secondary/10 blur-2xl" />

            <div className="relative p-8 md:p-12 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 text-secondary-300 text-xs font-bold uppercase tracking-widest rounded-full mb-4 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-secondary-400 animate-pulse" />
                Free Testing Available
              </div>
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-white mb-3">
                Not Sure What&apos;s In Your Well Water?
              </h3>
              <p className="text-white/70 mb-6 max-w-lg mx-auto">
                Our comprehensive well water test checks 15+ parameters and
                takes about 30 minutes. Results explained on the spot, no
                waiting for lab reports. Zero obligation.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-full hover:bg-primary-50 transition-all duration-300 hover:scale-105 shadow-brand"
                >
                  Book Free Well Water Test
                </Link>
                <a
                  href="tel:+18133030515"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-colors backdrop-blur-sm"
                >
                  (813) 303-0515
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================================= */}
      {/*  Section 8 - FAQ Accordion                                     */}
      {/* ============================================================= */}
      <section className="relative py-section overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(27,107,147,0.02) 0%, transparent 30%, rgba(46,139,87,0.03) 70%, rgba(27,107,147,0.02) 100%)",
            }}
          />
          <div
            className="absolute top-20 left-1/3 w-[500px] h-[500px] rounded-full blur-3xl"
            style={{
              background:
                "radial-gradient(circle, rgba(27,107,147,0.04) 0%, transparent 70%)",
            }}
          />
          <div
            className="absolute bottom-10 right-1/4 w-[400px] h-[400px] rounded-full blur-3xl"
            style={{
              background:
                "radial-gradient(circle, rgba(46,139,87,0.04) 0%, transparent 70%)",
            }}
          />
        </div>

        <div className="relative max-w-3xl mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <span className="inline-block px-4 py-1.5 bg-primary-50 text-primary text-xs font-semibold uppercase tracking-widest rounded-full mb-4">
              Common Questions
            </span>
            <h2 className="font-heading text-display-sm text-text">
              Well Water Treatment FAQ
            </h2>
            <p className="text-text-secondary mt-4 max-w-xl mx-auto">
              Everything you need to know about treating well water in the
              Tampa Bay area.
            </p>
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

          {/* Bottom contact nudge */}
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-text-secondary text-sm mb-4">
              Have a question about your well water? We&apos;re happy to help.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-primary-dark transition-all duration-300 hover:scale-105 hover:shadow-brand-lg"
              >
                Contact Us
              </Link>
              <a
                href="tel:+18133030515"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-50 text-primary font-semibold rounded-full hover:bg-primary-100 transition-colors"
              >
                (813) 303-0515
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
