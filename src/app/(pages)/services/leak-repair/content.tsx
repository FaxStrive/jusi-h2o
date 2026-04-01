"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { InlineCTA } from "@/components/ui/inline-cta";
import {
  motion,
  AnimatePresence,
  useInView,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const warningSignList = [
  {
    text: "Unexplained increase in water bill",
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    text: "Sound of running water when everything is off",
    icon: "M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z",
  },
  {
    text: "Damp or discolored spots on walls or ceilings",
    icon: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
  },
  {
    text: "Musty or moldy smell in certain rooms",
    icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
  },
  {
    text: "Water meter spinning when no water is in use",
    icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    text: "Cracks in foundation or shifting floors",
    icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
  },
  {
    text: "Low water pressure without explanation",
    icon: "M13 17h8m0 0V9m0 8l-8-8-4 4-6-6",
  },
  {
    text: "Warm spots on the floor (slab leak)",
    icon: "M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z",
  },
];

const serviceTypes = [
  {
    title: "Pipe Leaks",
    summary: "Pinhole leaks, joint failures, and corroded pipes.",
    details:
      "Whether behind walls, under floors, or buried underground, we use acoustic leak detection and thermal imaging to pinpoint pipe leaks without destructive excavation. Repair methods include pipe relining, section replacement, and full repiping when needed.",
    icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
  },
  {
    title: "Slab Leaks",
    summary: "Leaks under your home&apos;s concrete foundation.",
    details:
      "Slab leaks are among the most damaging and hardest to detect. We use acoustic listening devices, pressure testing, and infrared thermography to find leaks beneath your foundation. Options include epoxy relining, rerouting, or spot repair depending on severity.",
    icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
  },
  {
    title: "Fixture Leaks",
    summary: "Dripping faucets, running toilets, leaking sinks.",
    details:
      "A single dripping faucet can waste over 3,000 gallons per year. We repair and replace washers, cartridges, fill valves, supply lines, and compression fittings. Same-day service for most fixture repairs.",
    icon: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707",
  },
  {
    title: "Outdoor Leaks",
    summary: "Irrigation lines, hose bibs, and main water lines.",
    details:
      "Outdoor leaks often go unnoticed until your water bill spikes. We locate and repair irrigation line breaks, hose bib failures, main water line leaks, and sprinkler system issues throughout your yard.",
    icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z",
  },
];

const costOfInaction = [
  {
    value: 10000,
    suffix: "+",
    label: "Gallons wasted per year",
    sublabel: "from a single hidden leak",
  },
  {
    value: 5000,
    suffix: "+",
    prefix: "$",
    label: "In damage potential",
    sublabel: "mold, drywall, flooring costs",
  },
  {
    value: 72,
    suffix: "hrs",
    label: "To mold growth",
    sublabel: "in damp, enclosed spaces",
  },
];

const timelineSteps = [
  {
    step: "1",
    title: "Call Us",
    desc: "Reach us at (725) 235-8278 for emergency or scheduled leak service.",
    icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
  },
  {
    step: "2",
    title: "Same-Day Visit",
    desc: "A licensed technician arrives with professional detection equipment.",
    icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
  },
  {
    step: "3",
    title: "Detection",
    desc: "Acoustic, thermal, and pressure testing pinpoint the exact leak location.",
    icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
  },
  {
    step: "4",
    title: "Repair",
    desc: "We fix it fast using the most effective and least invasive method.",
    icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z",
  },
];

const faqs = [
  {
    q: "How do you find hidden leaks without tearing up my home?",
    a: "We use non-invasive detection technology including acoustic listening devices, thermal imaging cameras, and pressure testing. These tools allow us to pinpoint the exact location of a leak behind walls, under slabs, or underground without any destructive excavation.",
  },
  {
    q: "How much does leak detection cost?",
    a: "Leak detection pricing depends on the complexity and location. We provide clear, upfront pricing before any work begins. Call us at (725) 235-8278 for a same-day estimate. There are never hidden fees or surprise charges.",
  },
  {
    q: "Can a small leak really cause serious damage?",
    a: "Absolutely. Even a pinhole leak can waste over 10,000 gallons per year and create conditions for mold growth within 72 hours. Over time, hidden leaks cause drywall damage, wood rot, foundation shifting, and can cost thousands in repairs if left untreated.",
  },
  {
    q: "Do you offer emergency leak repair services?",
    a: "Yes, we offer same-day emergency leak repair throughout the Tampa Bay area. If you have an active leak, call us immediately at (725) 235-8278 and we will dispatch a licensed technician as soon as possible.",
  },
  {
    q: "How long does a typical leak repair take?",
    a: "Most leak repairs are completed in 2-4 hours. Slab leaks or main water line repairs may take longer depending on the method required. We always explain the timeline and options before starting work.",
  },
  {
    q: "Will my homeowner&apos;s insurance cover leak damage?",
    a: "Many homeowner insurance policies cover sudden, accidental water damage but typically exclude damage from gradual or neglected leaks. We recommend addressing leaks immediately and contacting your insurance provider. We can provide documentation to support your claim.",
  },
];

/* ------------------------------------------------------------------ */
/*  Animated Counter Component                                         */
/* ------------------------------------------------------------------ */

function AnimatedCounter({
  value,
  prefix = "",
  suffix = "",
  inView,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  inView: boolean;
}) {
  const [display, setDisplay] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!inView || hasAnimated.current) return;
    hasAnimated.current = true;

    const duration = 2000;
    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [inView, value]);

  return (
    <span>
      {prefix}
      {display.toLocaleString()}
      {suffix}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/*  FAQ Accordion Item                                                 */
/* ------------------------------------------------------------------ */

function FaqItem({
  faq,
  isOpen,
  onToggle,
  index,
  inView,
}: {
  faq: { q: string; a: string };
  isOpen: boolean;
  onToggle: () => void;
  index: number;
  inView: boolean;
}) {
  return (
    <motion.div
      className="border-b border-border-light last:border-0"
      initial={{ opacity: 0, y: 15 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: 0.05 * index }}
    >
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
          transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <svg
            className="w-4 h-4 text-primary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
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
            <p className="pb-5 text-text-secondary leading-relaxed">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Service Card with Expand Animation                                 */
/* ------------------------------------------------------------------ */

function ServiceCard({
  type,
  index,
  inView,
}: {
  type: (typeof serviceTypes)[number];
  index: number;
  inView: boolean;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      className="relative p-8 bg-white rounded-brand-xl border border-border-light cursor-pointer group overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      onClick={() => setExpanded(!expanded)}
      whileHover={{ y: -4 }}
      layout
    >
      {/* Hover glow */}
      <div className="absolute inset-0 rounded-brand-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-primary-50/50 via-transparent to-secondary-50/30" />

      <div className="relative flex gap-5">
        <motion.div
          className="flex-shrink-0 w-14 h-14 rounded-brand-lg bg-primary-50 flex items-center justify-center group-hover:bg-primary-100 transition-colors duration-300"
          whileHover={{ scale: 1.08, rotate: 3 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
        >
          <svg
            className="w-7 h-7 text-primary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d={type.icon}
            />
          </svg>
        </motion.div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-heading font-bold text-lg text-text">
              {type.title}
            </h3>
            <motion.svg
              className="w-5 h-5 text-text-muted flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={{ rotate: expanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </motion.svg>
          </div>
          <p className="text-text-secondary text-sm leading-relaxed">
            {type.summary}
          </p>
          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{
                  duration: 0.4,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="overflow-hidden"
              >
                <p className="mt-4 pt-4 border-t border-border-light text-text-secondary text-sm leading-relaxed">
                  {type.details}
                </p>
                <a
                  href="tel:7252358278"
                  className="inline-flex items-center gap-2 mt-4 text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  Call (725) 235-8278
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main Export                                                         */
/* ------------------------------------------------------------------ */

export function LeakRepairContent() {
  /* Refs */
  const signsRef = useRef(null);
  const costRef = useRef(null);
  const typesRef = useRef(null);
  const timelineRef = useRef(null);
  const faqRef = useRef(null);

  /* InView hooks */
  const signsInView = useInView(signsRef, { once: true, margin: "-60px" });
  const costInView = useInView(costRef, { once: true, margin: "-80px" });
  const typesInView = useInView(typesRef, { once: true, margin: "-60px" });
  const timelineInView = useInView(timelineRef, {
    once: true,
    margin: "-60px",
  });
  const faqInView = useInView(faqRef, { once: true, margin: "-60px" });

  /* Parallax for image */
  const imgRef = useRef(null);
  const { scrollYProgress: imgScroll } = useScroll({
    target: imgRef,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(imgScroll, [0, 1], [40, -40]);

  /* Mouse parallax for cost section orbs */
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const orbX = useSpring(useTransform(mouseX, [-400, 400], [-15, 15]), {
    stiffness: 100,
    damping: 25,
  });
  const orbY = useSpring(useTransform(mouseY, [-400, 400], [-15, 15]), {
    stiffness: 100,
    damping: 25,
  });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      const rect = e.currentTarget.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left - rect.width / 2);
      mouseY.set(e.clientY - rect.top - rect.height / 2);
    },
    [mouseX, mouseY]
  );

  /* FAQ state */
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  /* Timeline scroll ref used by child animations */

  return (
    <>
      {/* ================================================================ */}
      {/* SECTION 1 - Warning Signs                                        */}
      {/* ================================================================ */}
      <section ref={signsRef} className="relative py-section overflow-hidden">
        {/* Background - red/warm gradient mesh for "problem" tone */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 right-10 w-[600px] h-[600px] bg-gradient-to-bl from-red-50/30 via-orange-50/10 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-red-50/20 via-primary-50/10 to-transparent rounded-full blur-3xl" />
          {/* Diagonal sweep */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              background:
                "linear-gradient(135deg, transparent 0%, transparent 40%, rgba(220, 50, 50, 0.3) 50%, transparent 60%, transparent 100%)",
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image with parallax */}
            <motion.div
              ref={imgRef}
              className="relative"
              initial={{ opacity: 0, x: -40 }}
              animate={signsInView ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 0.7,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <div className="relative aspect-[4/3] rounded-brand-xl overflow-hidden shadow-brand-lg">
                <motion.div className="absolute inset-0" style={{ y: imgY }}>
                  <Image
                    src="/images/plumber-pipes.jpeg"
                    alt="Leak detection and repair"
                    fill
                    className="object-cover scale-110"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </motion.div>
                {/* Image overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/20 via-transparent to-transparent" />
              </div>
              {/* Decorative offset shadow */}
              <div className="absolute -bottom-4 -right-4 -z-10 w-full h-full rounded-brand-xl bg-red-100/40" />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={signsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <span className="inline-block px-4 py-1.5 bg-red-50 text-red-600 text-xs font-semibold uppercase tracking-widest rounded-full mb-4">
                Warning Signs
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-text mb-4">
                Do You Have a Hidden Leak?
              </h2>
              <p className="text-text-secondary mb-8 leading-relaxed">
                A small leak can waste over 10,000 gallons per year and cause
                mold, structural damage, and foundation issues. Watch for these
                signs:
              </p>

              <ul className="grid grid-cols-1 gap-3">
                {warningSignList.map((sign, i) => (
                  <motion.li
                    key={sign.text}
                    className="flex items-start gap-3 group"
                    initial={{ opacity: 0, x: -20 }}
                    animate={signsInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.35, delay: 0.25 + i * 0.07 }}
                  >
                    {/* Animated warning icon with shake */}
                    <motion.div
                      className="flex-shrink-0 w-9 h-9 rounded-full bg-red-50 flex items-center justify-center mt-0.5 group-hover:bg-red-100 transition-colors"
                      initial={{ scale: 0, rotate: -30 }}
                      animate={
                        signsInView ? { scale: 1, rotate: 0 } : {}
                      }
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 15,
                        delay: 0.35 + i * 0.07,
                      }}
                      whileHover={{
                        rotate: [0, -8, 8, -4, 4, 0],
                        transition: { duration: 0.5 },
                      }}
                    >
                      <svg
                        className="w-4.5 h-4.5 text-red-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.8}
                          d={sign.icon}
                        />
                      </svg>
                    </motion.div>
                    <span className="text-text-secondary text-sm leading-relaxed pt-1.5">
                      {sign.text}
                    </span>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                className="mt-10"
                initial={{ opacity: 0, y: 15 }}
                animate={signsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.9 }}
              >
                <a
                  href="tel:7252358278"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 text-white font-bold rounded-full hover:bg-red-700 transition-all duration-300 hover:scale-105 shadow-lg shadow-red-600/20"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  Call for Leak Detection
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <InlineCTA variant="text" text="Think you might have a leak? Get a free assessment" />

      {/* ================================================================ */}
      {/* SECTION 2 - Cost of Inaction (Dark dramatic band)                */}
      {/* ================================================================ */}
      <section
        ref={costRef}
        className="relative py-section-lg overflow-hidden"
        onMouseMove={handleMouseMove}
      >
        {/* Dark gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-dark" />

        {/* Animated orbs that follow mouse */}
        <motion.div
          className="absolute top-10 left-[15%] w-[350px] h-[350px] rounded-full pointer-events-none"
          style={{
            x: orbX,
            y: orbY,
            background:
              "radial-gradient(circle, rgba(220,50,50,0.12) 0%, transparent 70%)",
          }}
        />
        <motion.div
          className="absolute bottom-10 right-[10%] w-[450px] h-[450px] rounded-full pointer-events-none"
          style={{
            x: useTransform(orbX, (v) => -v * 0.6),
            y: useTransform(orbY, (v) => -v * 0.6),
            background:
              "radial-gradient(circle, rgba(46,139,87,0.1) 0%, transparent 70%)",
          }}
        />

        {/* Subtle sweep highlight */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.04]">
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.2) 50%, transparent 70%)",
            }}
          />
        </div>

        <div className="relative max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={costInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 bg-red-500/15 text-red-300 text-xs font-semibold uppercase tracking-widest rounded-full mb-4 border border-red-500/20">
              The Cost of Waiting
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-3">
              Every Day Costs You More
            </h2>
            <p className="text-primary-200/80 max-w-2xl mx-auto mb-14">
              Ignoring a leak doesn&apos;t make it go away. Here&apos;s what a
              single undetected leak can cost you.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {costOfInaction.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="relative p-8 rounded-brand-xl border border-white/10 bg-white/[0.04] backdrop-blur-sm"
                initial={{ opacity: 0, y: 35, scale: 0.95 }}
                animate={
                  costInView ? { opacity: 1, y: 0, scale: 1 } : {}
                }
                transition={{
                  duration: 0.6,
                  delay: 0.15 + i * 0.15,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                whileHover={{
                  scale: 1.03,
                  borderColor: "rgba(255,255,255,0.2)",
                }}
              >
                {/* Glow behind number */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120px] h-[120px] rounded-full bg-red-500/10 blur-2xl pointer-events-none" />

                <div className="relative">
                  <div className="font-heading text-5xl md:text-6xl font-bold text-white mb-3 tabular-nums">
                    <AnimatedCounter
                      value={stat.value}
                      prefix={stat.prefix || ""}
                      suffix={stat.suffix || ""}
                      inView={costInView}
                    />
                  </div>
                  <div className="font-heading font-semibold text-white/90 text-lg mb-1">
                    {stat.label}
                  </div>
                  <div className="text-primary-300/60 text-sm">
                    {stat.sublabel}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-12"
            initial={{ opacity: 0, y: 15 }}
            animate={costInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.7 }}
          >
            <a
              href="tel:7252358278"
              className="inline-flex items-center gap-2 px-10 py-4 bg-white text-primary-800 font-bold rounded-full hover:bg-primary-50 transition-all duration-300 hover:scale-105 shadow-xl shadow-black/20"
            >
              Stop the Damage - Call Now
            </a>
          </motion.div>
        </div>
      </section>


      <InlineCTA variant="button" text="Detect Leaks Before They Cause Damage" trustLine="Advanced technology finds hidden leaks fast." />
      {/* ================================================================ */}
      {/* SECTION 3 - Service Types (Interactive Cards)                     */}
      {/* ================================================================ */}
      <section ref={typesRef} className="relative py-section overflow-hidden">
        {/* Background - cool blue/solution tone */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 70% 50% at 30% 20%, rgba(27,107,147,0.04) 0%, transparent 100%), radial-gradient(ellipse 60% 60% at 80% 80%, rgba(46,139,87,0.03) 0%, transparent 100%)",
            }}
          />
          {/* Flowing SVG curve */}
          <svg
            className="absolute top-0 left-0 w-full h-32 text-primary-50/50"
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,80 C360,20 720,100 1080,40 C1260,10 1380,50 1440,30 L1440,0 L0,0 Z"
              fill="currentColor"
            />
          </svg>
        </div>

        <div className="relative max-w-5xl mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 25 }}
            animate={typesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 bg-primary-50 text-primary text-xs font-semibold uppercase tracking-widest rounded-full mb-4">
              What We Fix
            </span>
            <h2 className="font-heading text-display-sm text-text mb-3">
              Types of Leaks We Repair
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Click any card to learn more about our detection and repair methods
              for each leak type.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {serviceTypes.map((type, i) => (
              <ServiceCard
                key={type.title}
                type={type}
                index={i}
                inView={typesInView}
              />
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 15 }}
            animate={typesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.6 }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-10 py-4 bg-primary text-white font-bold rounded-full hover:bg-primary-dark transition-all duration-300 hover:scale-105 shadow-brand-lg"
            >
              Schedule a Leak Inspection
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* SECTION 4 - Emergency Response Timeline                          */}
      {/* ================================================================ */}
      <section
        ref={timelineRef}
        className="relative py-section overflow-hidden"
      >
        {/* Background - soft gradient with directional sweep */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-surface-secondary via-white to-surface" />
          <div className="absolute top-20 left-[10%] w-[500px] h-[500px] bg-gradient-to-br from-primary-50/30 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-[5%] w-[350px] h-[350px] bg-gradient-to-tl from-secondary-50/20 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-5xl mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 25 }}
            animate={timelineInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 bg-primary-50 text-primary text-xs font-semibold uppercase tracking-widest rounded-full mb-4">
              Our Process
            </span>
            <h2 className="font-heading text-display-sm text-text mb-3">
              Emergency Response Timeline
            </h2>
            <p className="text-text-secondary max-w-xl mx-auto">
              From your first call to a completed repair, here&apos;s how we
              handle every leak.
            </p>
          </motion.div>

          {/* Desktop timeline */}
          <div className="hidden md:block">
            {/* Connecting line container */}
            <div className="relative">
              <div className="grid grid-cols-4 gap-8">
                {timelineSteps.map((item, i) => (
                  <motion.div
                    key={item.step}
                    className="relative text-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={
                      timelineInView ? { opacity: 1, y: 0 } : {}
                    }
                    transition={{
                      duration: 0.5,
                      delay: 0.15 + i * 0.15,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                  >
                    {/* Step circle */}
                    <motion.div
                      className="relative w-16 h-16 rounded-full bg-primary text-white font-heading font-bold text-lg flex items-center justify-center mx-auto mb-5 shadow-brand"
                      initial={{ scale: 0 }}
                      animate={timelineInView ? { scale: 1 } : {}}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 15,
                        delay: 0.3 + i * 0.15,
                      }}
                    >
                      <svg
                        className="w-7 h-7"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.8}
                          d={item.icon}
                        />
                      </svg>
                      {/* Ripple ring */}
                      <motion.div
                        className="absolute inset-0 rounded-full border-2 border-primary"
                        initial={{ scale: 1, opacity: 0.4 }}
                        animate={
                          timelineInView
                            ? {
                                scale: [1, 1.5],
                                opacity: [0.3, 0],
                              }
                            : {}
                        }
                        transition={{
                          duration: 1.5,
                          delay: 0.5 + i * 0.15,
                          repeat: Infinity,
                          repeatDelay: 2,
                        }}
                      />
                    </motion.div>

                    {/* Connecting line to next step */}
                    {i < 3 && (
                      <motion.div
                        className="absolute top-8 left-[calc(50%+32px)] h-[2px] bg-gradient-to-r from-primary-300 to-primary-200 origin-left"
                        style={{ width: "calc(100% - 64px)" }}
                        initial={{ scaleX: 0 }}
                        animate={timelineInView ? { scaleX: 1 } : {}}
                        transition={{
                          duration: 0.6,
                          delay: 0.5 + i * 0.2,
                          ease: [0.25, 0.46, 0.45, 0.94],
                        }}
                      />
                    )}

                    <h3 className="font-heading font-bold text-text mb-2">
                      {item.title}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile timeline - vertical */}
          <div className="md:hidden space-y-0">
            {timelineSteps.map((item, i) => (
              <motion.div
                key={item.step}
                className="relative flex gap-5"
                initial={{ opacity: 0, x: -20 }}
                animate={timelineInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.12 }}
              >
                {/* Vertical line + circle */}
                <div className="flex flex-col items-center">
                  <motion.div
                    className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 shadow-brand"
                    initial={{ scale: 0 }}
                    animate={timelineInView ? { scale: 1 } : {}}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 15,
                      delay: 0.2 + i * 0.12,
                    }}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.8}
                        d={item.icon}
                      />
                    </svg>
                  </motion.div>
                  {i < 3 && (
                    <motion.div
                      className="w-[2px] flex-1 bg-gradient-to-b from-primary-300 to-primary-100 origin-top"
                      initial={{ scaleY: 0 }}
                      animate={timelineInView ? { scaleY: 1 } : {}}
                      transition={{
                        duration: 0.4,
                        delay: 0.3 + i * 0.15,
                      }}
                    />
                  )}
                </div>
                <div className="pb-10">
                  <h3 className="font-heading font-bold text-text mb-1">
                    {item.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 15 }}
            animate={timelineInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.8 }}
          >
            <a
              href="tel:7252358278"
              className="inline-flex items-center gap-2 px-10 py-4 bg-primary text-white font-bold rounded-full hover:bg-primary-dark transition-all duration-300 hover:scale-105 shadow-brand-lg"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              Call (725) 235-8278
            </a>
          </motion.div>
        </div>
      </section>


      <InlineCTA variant="banner" text="Stop Water Damage in Its Tracks" message="Call for same-day leak detection and repair." />
      {/* ================================================================ */}
      {/* SECTION 5 - FAQ Accordion                                        */}
      {/* ================================================================ */}
      <section ref={faqRef} className="relative py-section overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(27,107,147,0.04) 0%, transparent 100%)",
            }}
          />
          <div className="absolute bottom-0 left-[20%] w-[500px] h-[400px] bg-gradient-to-t from-primary-50/20 to-transparent rounded-full blur-3xl" />
          {/* Soft top wave */}
          <svg
            className="absolute top-0 left-0 w-full h-20 text-surface-secondary/60"
            viewBox="0 0 1440 80"
            preserveAspectRatio="none"
          >
            <path
              d="M0,40 C480,80 960,0 1440,40 L1440,0 L0,0 Z"
              fill="currentColor"
            />
          </svg>
        </div>

        <div className="relative max-w-3xl mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 25 }}
            animate={faqInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 bg-primary-50 text-primary text-xs font-semibold uppercase tracking-widest rounded-full mb-4">
              Common Questions
            </span>
            <h2 className="font-heading text-display-sm text-text mb-3">
              Leak Repair FAQs
            </h2>
            <p className="text-text-secondary max-w-xl mx-auto">
              Get answers to the most common questions about our leak detection
              and repair services.
            </p>
          </motion.div>

          <motion.div
            className="bg-white rounded-brand-xl border border-border-light p-6 md:p-8 shadow-brand-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={faqInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            {faqs.map((faq, i) => (
              <FaqItem
                key={faq.q}
                faq={faq}
                isOpen={openFaq === i}
                onToggle={() => setOpenFaq(openFaq === i ? null : i)}
                index={i}
                inView={faqInView}
              />
            ))}
          </motion.div>

          {/* CTA below FAQ */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 15 }}
            animate={faqInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.5 }}
          >
            <p className="text-text-secondary mb-5">
              Still have questions? We&apos;re here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-primary-dark transition-all duration-300 hover:scale-105"
              >
                Contact Us
              </Link>
              <a
                href="tel:7252358278"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-50 text-primary font-semibold rounded-full hover:bg-primary-100 transition-colors"
              >
                Call (725) 235-8278
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
