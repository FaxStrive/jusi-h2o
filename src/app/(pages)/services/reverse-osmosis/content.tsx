"use client";

import { useState, useRef, useEffect } from "react";
import { InlineCTA } from "@/components/ui/inline-cta";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useInView,
  useMotionValue,
  AnimatePresence,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";

/* ─── Data ─────────────────────────────────────────────────────────── */

const stages = [
  {
    name: "Sediment Pre-Filter",
    desc: "Removes dirt, rust, and sand particles that could damage the RO membrane.",
    color: "bg-blue-100 text-blue-700",
    accent: "from-blue-400/20 to-blue-600/5",
  },
  {
    name: "Carbon Pre-Filter",
    desc: "Absorbs chlorine, chloramine, and organic compounds to protect the membrane.",
    color: "bg-green-100 text-green-700",
    accent: "from-green-400/20 to-green-600/5",
  },
  {
    name: "RO Membrane",
    desc: "The core stage. Forces water through a semi-permeable membrane, removing 99% of dissolved solids.",
    color: "bg-primary-100 text-primary-700",
    accent: "from-primary-300/20 to-primary-600/5",
  },
  {
    name: "Carbon Post-Filter",
    desc: "Final polish. Removes any remaining taste or odor for crystal-clear drinking water.",
    color: "bg-secondary-100 text-secondary-700",
    accent: "from-secondary-300/20 to-secondary-600/5",
  },
];

const contaminants = [
  "Lead",
  "Arsenic",
  "Fluoride",
  "Chlorine",
  "Nitrates",
  "Bacteria",
  "Mercury",
  "Cadmium",
  "Chromium-6",
  "Pesticides",
  "Pharmaceuticals",
  "Microplastics",
  "Radium",
  "PFAS/PFOA",
  "Copper",
];

const faqs = [
  {
    q: "How long does an RO system last?",
    a: "A quality reverse osmosis system lasts 10-15 years with proper maintenance. Filters need replacement every 6-12 months, and the RO membrane typically lasts 2-3 years depending on your water quality and usage. Our JusiCare+ program handles all of this for you.",
  },
  {
    q: "Does RO water taste different?",
    a: "Yes, most people notice an immediate improvement. RO water tastes clean and pure because the membrane removes chlorine, dissolved minerals, and other compounds that cause off-flavors. Many customers compare it to premium bottled water.",
  },
  {
    q: "Will an RO system fit under my sink?",
    a: "Modern RO systems are compact and designed to fit under standard kitchen sinks. Our technician will assess your cabinet space during the free consultation and recommend the best-fitting unit for your setup.",
  },
  {
    q: "Does RO remove beneficial minerals?",
    a: "RO does remove most dissolved minerals. However, you get the vast majority of essential minerals from food, not water. If you prefer mineralized water, we offer systems with a remineralization stage that adds back calcium and magnesium.",
  },
  {
    q: "How much water does an RO system waste?",
    a: "Traditional systems use about 3-4 gallons of water per gallon produced. Our modern systems feature a 1:1 or even 2:1 efficiency ratio, significantly reducing waste. Some models also route the reject water to your garden hose for reuse.",
  },
  {
    q: "Can I connect the RO to my fridge and ice maker?",
    a: "Absolutely. We routinely connect RO lines to refrigerators for purified ice and door-dispenser water. This is one of the most popular add-ons and means every glass of ice water from your fridge is RO-purified.",
  },
];

/* ─── Animated counter hook ────────────────────────────────────────── */

function useAnimatedCounter(target: number, duration: number, isInView: boolean, decimals = 0) {
  const count = useMotionValue(0);
  const springCount = useSpring(count, { stiffness: 50, damping: 20, duration: duration * 1000 });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (isInView) {
      count.set(target);
    }
  }, [isInView, target, count]);

  useEffect(() => {
    const unsubscribe = springCount.on("change", (v) => {
      setDisplay(v.toFixed(decimals));
    });
    return unsubscribe;
  }, [springCount, decimals]);

  return display;
}

/* ─── Stage Number with spring scale ───────────────────────────────── */

function StageNumber({ num }: { num: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      className="relative z-10 flex-shrink-0"
      initial={{ scale: 0, rotate: -30 }}
      animate={isInView ? { scale: 1, rotate: 0 } : {}}
      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1 }}
    >
      <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center font-heading font-bold text-xl md:text-2xl text-white shadow-brand-lg">
        {num}
      </div>
    </motion.div>
  );
}

/* ─── FAQ Item ─────────────────────────────────────────────────────── */

function FaqItem({
  faq,
  isOpen,
  onToggle,
}: {
  faq: { q: string; a: string };
  isOpen: boolean;
  onToggle: () => void;
}) {
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
    </div>
  );
}

/* ─── Water Flow SVG ───────────────────────────────────────────────── */

function WaterFlowSvg() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="relative w-full max-w-3xl mx-auto my-8">
      <svg
        viewBox="0 0 800 120"
        fill="none"
        className="w-full h-auto"
        aria-label="Water flowing through four filtration stages"
      >
        {/* Background pipe */}
        <path
          d="M 40 60 C 140 20, 220 100, 320 60 C 420 20, 500 100, 600 60 C 660 40, 720 80, 760 60"
          stroke="var(--color-primary-100)"
          strokeWidth={6}
          strokeLinecap="round"
          fill="none"
        />
        {/* Animated water flow */}
        <motion.path
          d="M 40 60 C 140 20, 220 100, 320 60 C 420 20, 500 100, 600 60 C 660 40, 720 80, 760 60"
          stroke="url(#waterGradient)"
          strokeWidth={6}
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{ duration: 2.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        />
        {/* Stage markers */}
        {[140, 320, 520, 700].map((cx, i) => (
          <motion.circle
            key={i}
            cx={cx}
            cy={i % 2 === 0 ? 40 : 80}
            r={10}
            fill="var(--color-primary-50)"
            stroke="var(--color-primary)"
            strokeWidth={2}
            initial={{ scale: 0, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ delay: 0.5 + i * 0.4, type: "spring", stiffness: 300, damping: 20 }}
          />
        ))}
        {/* Stage labels */}
        {[
          { x: 140, y: 22, label: "Stage 1" },
          { x: 320, y: 106, label: "Stage 2" },
          { x: 520, y: 22, label: "Stage 3" },
          { x: 700, y: 106, label: "Stage 4" },
        ].map((s, i) => (
          <motion.text
            key={i}
            x={s.x}
            y={s.y}
            textAnchor="middle"
            className="text-[11px] font-heading font-semibold"
            fill="var(--color-primary)"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 + i * 0.4 }}
          >
            {s.label}
          </motion.text>
        ))}
        {/* Gradient definition */}
        <defs>
          <linearGradient id="waterGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--color-primary-300)" />
            <stop offset="40%" stopColor="var(--color-primary)" />
            <stop offset="70%" stopColor="var(--color-secondary)" />
            <stop offset="100%" stopColor="var(--color-secondary-light)" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

/* ─── Scroll-linked Stage Card ─────────────────────────────────────── */

function StageCard({
  stage,
  index,
}: {
  stage: (typeof stages)[number];
  index: number;
}) {
  const stageRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: stageRef,
    offset: ["start 0.9", "start 0.4"],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [40, 0]);
  const smoothOpacity = useSpring(opacity, { stiffness: 100, damping: 20 });
  const smoothY = useSpring(y, { stiffness: 100, damping: 20 });

  return (
    <motion.div
      ref={stageRef}
      className="relative flex gap-6 md:gap-8"
      style={{ opacity: smoothOpacity, y: smoothY }}
    >
      <StageNumber num={index + 1} />
      <div className="relative bg-white rounded-brand-lg border border-border-light p-6 flex-1 shadow-sm hover:shadow-brand transition-shadow duration-300 overflow-hidden">
        {/* Accent gradient */}
        <div
          className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${stage.accent} rounded-full blur-2xl pointer-events-none`}
        />
        <div className="relative">
          <h3 className="font-heading font-bold text-text text-lg mb-2">
            {stage.name}
          </h3>
          <p className="text-text-secondary text-sm leading-relaxed">
            {stage.desc}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Main Content ─────────────────────────────────────────────────── */

export function ReverseOsmosisContent() {
  const [openFaqs, setOpenFaqs] = useState<Set<number>>(new Set());

  /* Scroll-linked refs for stages section */
  const stagesSectionRef = useRef(null);

  /* Cost comparison refs */
  const costRef = useRef(null);
  const costInView = useInView(costRef, { once: true, margin: "-60px" });

  /* Contaminants ref */
  const contaminantsRef = useRef(null);
  const contaminantsInView = useInView(contaminantsRef, { once: true, margin: "-60px" });

  /* Animated counters for cost comparison */
  const bottledCost = useAnimatedCounter(1200, 1.5, costInView);
  const roCost = useAnimatedCounter(0.03, 1.5, costInView, 2);
  const gallonsSaved = useAnimatedCounter(2400, 1.5, costInView);

  const toggleFaq = (index: number) => {
    setOpenFaqs((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  return (
    <>
      {/* ─── Section 1: Intro ─────────────────────────────────────── */}
      <section className="relative py-section overflow-hidden">
        {/* Organic gradient mesh background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-bl from-primary-50/40 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-gradient-to-tr from-secondary-50/30 to-transparent rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-0 w-[300px] h-[600px] bg-gradient-to-r from-primary-50/20 to-transparent blur-2xl" />
        </div>

        <div className="relative max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-text mb-6">
              Restaurant-Quality Water at Home
            </h2>
            <p className="text-text-secondary leading-relaxed text-lg mb-4">
              Reverse osmosis is the gold standard for drinking water
              purification. Using a semi-permeable membrane and multiple
              filtration stages, our RO systems remove lead, arsenic, fluoride,
              nitrates, chlorine, and hundreds of other contaminants.
            </p>
            <p className="text-text-secondary leading-relaxed mb-8">
              Installed under your kitchen sink with a dedicated faucet, an RO
              system delivers pure, great-tasting water on demand. No more
              bottled water. No more chlorine taste. Just clean water every time.
            </p>
          </motion.div>

          <motion.div
            className="relative aspect-video rounded-brand-xl overflow-hidden shadow-brand-lg"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Image
              src="/images/filling-glass-tap.jpeg"
              alt="Reverse osmosis system installed under kitchen sink"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 800px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-900/20 to-transparent" />
          </motion.div>

          {/* Water flow SVG visualization */}
          <WaterFlowSvg />
        </div>
      </section>

      {/* ─── Section 2: Filtration Stages (scroll-linked) ─────────── */}
      <section
        ref={stagesSectionRef}
        className="relative py-section overflow-hidden"
      >
        {/* Background mesh */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-surface via-primary-50/10 to-surface-secondary" />
          <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-primary-50/30 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-secondary-50/20 to-transparent rounded-full blur-3xl" />
          {/* Decorative flowing curve */}
          <svg
            className="absolute top-0 w-full h-32 text-primary-50/40"
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,80 C240,30 480,100 720,60 C960,20 1200,90 1440,50 L1440,0 L0,0 Z"
              fill="currentColor"
            />
          </svg>
        </div>

        <div className="relative max-w-3xl mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 bg-primary-50 text-primary text-xs font-semibold uppercase tracking-widest rounded-full mb-4">
              Multi-Stage Purification
            </span>
            <h2 className="font-heading text-display-sm text-text">
              How Reverse Osmosis Works
            </h2>
            <p className="mt-4 text-text-secondary max-w-xl mx-auto">
              Your water passes through 4 stages of filtration, each removing
              different types of contaminants.
            </p>
          </motion.div>

          <div className="relative">
            {/* Animated vertical line */}
            <motion.div
              className="absolute left-7 md:left-8 top-0 bottom-0 w-0.5 bg-primary-200 origin-top"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            />

            <div className="space-y-8">
              {stages.map((stage, i) => (
                <StageCard key={stage.name} stage={stage} index={i} />
              ))}
            </div>
          </div>
        </div>
      </section>


      <InlineCTA variant="button" text="Taste the Difference" trustLine="Up to 99% of contaminants removed. Free water test included." />
      {/* ─── Section 3: What Gets Removed ─────────────────────────── */}
      <section ref={contaminantsRef} className="relative py-section overflow-hidden">
        {/* Background mesh */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-surface via-surface to-primary-50/15" />
          <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-red-50/20 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-gradient-to-tl from-secondary-50/25 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 bg-secondary-50 text-secondary text-xs font-semibold uppercase tracking-widest rounded-full mb-4">
              Contaminant Elimination
            </span>
            <h2 className="font-heading text-display-sm text-text">
              What Gets Removed
            </h2>
            <p className="mt-4 text-text-secondary max-w-xl mx-auto">
              Our RO systems eliminate up to 99% of these harmful contaminants
              from your drinking water.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 md:gap-4">
            {contaminants.map((name, i) => (
              <motion.div
                key={name}
                className="relative group"
                initial={{ opacity: 0, y: 20 }}
                animate={
                  contaminantsInView ? { opacity: 1, y: 0 } : {}
                }
                transition={{
                  duration: 0.4,
                  delay: 0.05 * i,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                <div className="relative bg-white border border-border-light rounded-brand-lg p-4 text-center hover:border-red-200 transition-colors duration-300 overflow-hidden">
                  <span className="font-heading font-semibold text-sm text-text relative z-10">
                    {name}
                  </span>
                  {/* Animated strikethrough */}
                  <motion.div
                    className="absolute top-1/2 left-2 right-2 h-[2px] bg-gradient-to-r from-red-400 to-red-500 rounded-full z-20"
                    initial={{ scaleX: 0 }}
                    animate={contaminantsInView ? { scaleX: 1 } : {}}
                    transition={{
                      duration: 0.5,
                      delay: 0.8 + i * 0.06,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                    style={{ originX: 0 }}
                  />
                  {/* Green check that appears after strikethrough */}
                  <motion.div
                    className="absolute -top-1 -right-1 w-5 h-5 bg-secondary rounded-full flex items-center justify-center z-20"
                    initial={{ scale: 0 }}
                    animate={contaminantsInView ? { scale: 1 } : {}}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 15,
                      delay: 1.2 + i * 0.06,
                    }}
                  >
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Section 4: Cost Savings ──────────────────────────────── */}
      <section ref={costRef} className="relative py-section overflow-hidden">
        {/* Background mesh */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-surface-secondary via-surface to-surface" />
          <div className="absolute top-0 left-1/3 w-[600px] h-[400px] bg-gradient-to-b from-accent-50/20 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-tl from-primary-50/25 to-transparent rounded-full blur-3xl" />
          <svg
            className="absolute bottom-0 w-full h-24 text-primary-50/30"
            viewBox="0 0 1440 100"
            preserveAspectRatio="none"
          >
            <path
              d="M0,40 C360,80 720,20 1080,60 C1260,80 1380,30 1440,50 L1440,100 L0,100 Z"
              fill="currentColor"
            />
          </svg>
        </div>

        <div className="relative max-w-5xl mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 bg-accent-50 text-accent-dark text-xs font-semibold uppercase tracking-widest rounded-full mb-4">
              Save Money
            </span>
            <h2 className="font-heading text-display-sm text-text">
              Bottled Water vs. Reverse Osmosis
            </h2>
            <p className="mt-4 text-text-secondary max-w-xl mx-auto">
              Stop spending on bottled water. An RO system pays for itself
              within the first year.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Bottled water card */}
            <motion.div
              className="relative bg-white rounded-brand-xl border border-red-200/60 p-8 text-center overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={costInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-red-50/60 to-transparent rounded-full blur-xl pointer-events-none" />
              <div className="relative">
                <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-6 h-6 text-red-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
                <p className="text-text-tertiary text-sm font-semibold uppercase tracking-wider mb-2">
                  Bottled Water
                </p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl md:text-5xl font-heading font-bold text-red-500">
                    ${bottledCost}
                  </span>
                  <span className="text-text-tertiary text-sm">/year</span>
                </div>
                <p className="text-text-tertiary text-sm mt-3">
                  For a family of four buying cases weekly
                </p>
              </div>
            </motion.div>

            {/* VS divider */}
            <motion.div
              className="flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={costInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary-50 to-secondary-50 flex items-center justify-center border border-border-light shadow-brand">
                <span className="font-heading font-bold text-2xl text-primary">
                  vs
                </span>
              </div>
            </motion.div>

            {/* RO water card */}
            <motion.div
              className="relative bg-white rounded-brand-xl border border-secondary-200/60 p-8 text-center overflow-hidden shadow-brand"
              initial={{ opacity: 0, y: 30 }}
              animate={costInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-secondary-50/60 to-transparent rounded-full blur-xl pointer-events-none" />
              <div className="absolute -top-1 -right-1">
                <div className="bg-secondary text-white text-xs font-bold px-3 py-1 rounded-bl-brand rounded-tr-brand-xl">
                  Best Value
                </div>
              </div>
              <div className="relative">
                <div className="w-12 h-12 rounded-full bg-secondary-50 flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-6 h-6 text-secondary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="text-text-tertiary text-sm font-semibold uppercase tracking-wider mb-2">
                  Reverse Osmosis
                </p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl md:text-5xl font-heading font-bold text-secondary">
                    ${roCost}
                  </span>
                  <span className="text-text-tertiary text-sm">/gallon</span>
                </div>
                <p className="text-text-tertiary text-sm mt-3">
                  Pennies per gallon of pure drinking water
                </p>
              </div>
            </motion.div>
          </div>

          {/* Gallons saved stat */}
          <motion.div
            className="mt-10 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={costInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="inline-flex items-center gap-3 bg-white border border-border-light rounded-full px-8 py-4 shadow-brand-sm">
              <svg
                className="w-6 h-6 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                />
              </svg>
              <span className="text-text-secondary text-sm">
                The average family saves{" "}
                <span className="font-heading font-bold text-primary text-lg">
                  {gallonsSaved}+
                </span>{" "}
                plastic bottles per year
              </span>
            </div>
          </motion.div>
        </div>
      </section>


      <InlineCTA variant="banner" text="Pure Drinking Water From Your Kitchen Tap" message="Book your free water test and see what is really in your water." />
      {/* ─── Section 5: Benefits Cards ────────────────────────────── */}
      <section className="relative py-section overflow-hidden">
        {/* Background mesh */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-t from-surface-secondary via-surface to-surface" />
          <div className="absolute bottom-0 right-10 w-[400px] h-[400px] bg-gradient-to-tl from-secondary-50/30 to-transparent rounded-full blur-3xl" />
          <div className="absolute top-1/3 left-0 w-[350px] h-[350px] bg-gradient-to-r from-primary-50/25 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-heading text-display-sm text-text">
              Why Choose RO?
            </h2>
            <p className="mt-4 text-text-secondary max-w-xl mx-auto">
              Beyond pure water, reverse osmosis brings real benefits to your
              daily life.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Stop Buying Bottled Water",
                desc: "An RO system pays for itself by eliminating bottled water costs. Better for your wallet and the environment.",
                icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                gradient: "from-accent-50/30 to-accent-100/10",
              },
              {
                title: "99% Contaminant Removal",
                desc: "Removes lead, arsenic, fluoride, nitrates, bacteria, and hundreds of dissolved solids that carbon filters miss.",
                icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
                gradient: "from-secondary-50/30 to-secondary-100/10",
              },
              {
                title: "Ice Maker Ready",
                desc: "We can connect the RO line to your refrigerator for purified ice and water from your door dispenser.",
                icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
                gradient: "from-primary-50/30 to-primary-100/10",
              },
            ].map((benefit, i) => (
              <motion.div
                key={benefit.title}
                className="group relative p-8 bg-white rounded-brand-xl border border-border-light text-center hover:shadow-brand hover:border-primary-200 transition-all duration-300 overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: i * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                {/* Accent gradient on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                />
                <div className="relative">
                  <div className="w-14 h-14 rounded-full bg-primary-50 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
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
                        d={benefit.icon}
                      />
                    </svg>
                  </div>
                  <h3 className="font-heading font-bold text-text mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-primary text-white font-bold rounded-full hover:bg-primary-dark transition-all duration-300 hover:scale-105 shadow-brand"
            >
              Get Your Free Quote
            </Link>
            <p className="mt-3 text-text-tertiary text-sm">
              Or call us at{" "}
              <a
                href="tel:7252358278"
                className="text-primary hover:text-primary-dark font-semibold transition-colors"
              >
                (725) 235-8278
              </a>
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── Section 6: FAQ Accordion ─────────────────────────────── */}
      <section className="relative py-section overflow-hidden">
        {/* Background mesh */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-surface to-primary-50/10" />
          <div className="absolute top-0 right-1/3 w-[500px] h-[500px] bg-gradient-to-bl from-primary-50/30 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-0 w-[400px] h-[300px] bg-gradient-to-r from-secondary-50/20 to-transparent rounded-full blur-3xl" />
          <svg
            className="absolute top-0 w-full h-20 text-surface-secondary"
            viewBox="0 0 1440 80"
            preserveAspectRatio="none"
          >
            <path
              d="M0,60 C480,20 960,70 1440,30 L1440,0 L0,0 Z"
              fill="currentColor"
            />
          </svg>
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
              Common Questions
            </span>
            <h2 className="font-heading text-display-sm text-text">
              Reverse Osmosis FAQ
            </h2>
            <p className="mt-4 text-text-secondary max-w-xl mx-auto">
              Everything you need to know about RO systems for your home.
            </p>
          </motion.div>

          <motion.div
            className="bg-white rounded-brand-xl border border-border-light p-6 md:p-8 shadow-brand-sm"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {faqs.map((faq, i) => (
              <FaqItem
                key={i}
                faq={faq}
                isOpen={openFaqs.has(i)}
                onToggle={() => toggleFaq(i)}
              />
            ))}
          </motion.div>

          <motion.p
            className="text-center mt-8 text-text-secondary"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Still have questions? Call us at{" "}
            <a
              href="tel:7252358278"
              className="text-primary hover:text-primary-dark font-semibold transition-colors"
            >
              (725) 235-8278
            </a>{" "}
            and we&apos;ll walk you through everything.
          </motion.p>
        </div>
      </section>

      <InlineCTA variant="text" text="Compare RO systems with a specialist" />
    </>
  );
}
