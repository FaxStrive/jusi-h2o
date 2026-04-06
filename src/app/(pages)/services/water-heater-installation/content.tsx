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
  AnimatePresence,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";

/* ───────────────────── Animated Counter Hook ───────────────────── */
function useCountUp(end: number, inView: boolean, duration = 1800) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const startTime = performance.now();
    function step(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      start = Math.round(eased * end);
      setCount(start);
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }, [end, inView, duration]);
  return count;
}

/* ───────────────────── Tilt Card Component ───────────────────── */
function TiltCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-6, 6]);

  const springRotateX = useSpring(rotateX, { stiffness: 200, damping: 20 });
  const springRotateY = useSpring(rotateY, { stiffness: 200, damping: 20 });

  function handleMouseMove(e: React.MouseEvent) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(px);
    y.set(py);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        rotateX: springRotateX,
        rotateY: springRotateY,
        transformStyle: "preserve-3d",
        perspective: 800,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </motion.div>
  );
}

/* ───────────────────── FAQ Data ───────────────────── */
const faqs = [
  {
    q: "How long does a water heater installation take?",
    a: "A standard tank water heater replacement typically takes 2-4 hours. Tankless installations may take 4-6 hours due to additional venting and gas line modifications. We always finish in a single visit.",
  },
  {
    q: "What size water heater do I need?",
    a: "For most Tampa Bay homes, a 40-gallon tank is sufficient for 1-2 people, while a 50-gallon or larger is recommended for 3+ person households. Tankless units are sized by flow rate (GPM). We calculate the perfect size during your free consultation.",
  },
  {
    q: "How do I know my water heater needs replacing?",
    a: "Common signs include rusty or discolored hot water, rumbling or popping noises, visible leaking around the base, inconsistent water temperature, and a unit older than 10 years. If you notice any of these, call us for a free assessment.",
  },
  {
    q: "Is a tankless water heater worth the extra cost?",
    a: "Tankless units cost more upfront but save $300+ per year on energy bills and last 20+ years versus 8-12 for tank models. Most homeowners recoup the difference within 5-7 years while enjoying unlimited hot water.",
  },
  {
    q: "Do you handle permits and inspections?",
    a: "Yes. Every Jusi H2O water heater installation includes all necessary permits, code-compliant work, and coordination with local inspectors. You don&apos;t have to manage any of the paperwork.",
  },
  {
    q: "Do you offer financing for water heater installations?",
    a: "Absolutely. We offer flexible financing options so you can get the hot water solution you need today and pay over time. Ask about our 0% interest plans during your consultation.",
  },
];

/* ───────────────────── Process Steps ───────────────────── */
const processSteps = [
  {
    step: "1",
    title: "Free Assessment",
    desc: "We inspect your current unit, evaluate your household&apos;s hot water needs, and recommend the best replacement options with transparent pricing.",
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
  },
  {
    step: "2",
    title: "Unit Selection",
    desc: "Choose from our curated selection of high-efficiency tank and tankless models from trusted manufacturers, each backed by a full warranty.",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
  {
    step: "3",
    title: "Professional Install",
    desc: "Licensed technicians remove the old unit, install the new system with code-compliant plumbing and venting, and handle all cleanup.",
    icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z",
  },
  {
    step: "4",
    title: "Testing & Warranty",
    desc: "We thoroughly test water temperature, pressure, and safety valves. You receive full documentation, warranty details, and our ongoing support.",
    icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z",
  },
];

/* ═══════════════════════════════════════════════════════════════
   MAIN EXPORT
   ═══════════════════════════════════════════════════════════════ */
export function WaterHeaterContent() {
  /* ── Refs & InView ── */
  const compRef = useRef(null);
  const compInView = useInView(compRef, { once: true, margin: "-80px" });

  const savingsRef = useRef(null);
  const savingsInView = useInView(savingsRef, { once: true, margin: "-80px" });

  const processRef = useRef(null);
  const processInView = useInView(processRef, { once: true, margin: "-60px" });

  /* ── Scroll-linked parallax for service image ── */
  const imgRef = useRef(null);
  const { scrollYProgress: imgScroll } = useScroll({
    target: imgRef,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(imgScroll, [0, 1], [60, -60]);

  /* ── Animated counters ── */
  const energyCount = useCountUp(34, savingsInView, 2000);
  const savingsCount = useCountUp(300, savingsInView, 2200);
  const lifespanCount = useCountUp(20, savingsInView, 1800);

  /* ── FAQ state ── */
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* ══════════════════════════════════════════════════════════
          EMERGENCY BANNER with pulse + glow
          ══════════════════════════════════════════════════════════ */}
      <section className="relative -mt-6 z-10 max-w-4xl mx-auto px-6">
        <motion.div
          className="relative bg-gradient-to-r from-primary-700 via-primary-600 to-primary-500 rounded-brand-xl p-6 md:p-8 text-center shadow-brand-xl overflow-hidden"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Animated glow border ring */}
          <motion.div
            className="absolute inset-0 rounded-brand-xl"
            style={{
              boxShadow:
                "inset 0 0 0 2px rgba(255,255,255,0.15), 0 0 30px rgba(27,107,147,0.3)",
            }}
            animate={{
              boxShadow: [
                "inset 0 0 0 2px rgba(255,255,255,0.15), 0 0 20px rgba(27,107,147,0.2)",
                "inset 0 0 0 2px rgba(255,255,255,0.35), 0 0 40px rgba(27,107,147,0.5)",
                "inset 0 0 0 2px rgba(255,255,255,0.15), 0 0 20px rgba(27,107,147,0.2)",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Ambient light sweep */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.06) 50%, transparent 100%)",
            }}
            animate={{ x: ["-100%", "100%"] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              repeatDelay: 2,
            }}
          />

          <div className="relative z-10">
            <h3 className="font-heading text-xl md:text-2xl font-bold text-white mb-2">
              No Hot Water? We Can Help Today.
            </h3>
            <p className="text-primary-100 mb-5">
              Same-day emergency water heater replacement available across Tampa
              Bay.
            </p>
            <a
              href="tel:+18133030515"
              className="inline-flex items-center gap-3 px-8 py-3.5 bg-white text-primary-700 font-bold rounded-full hover:bg-primary-50 transition-colors group"
            >
              {/* Pulsing phone icon */}
              <span className="relative flex items-center justify-center">
                <motion.span
                  className="absolute inset-0 rounded-full bg-primary-200"
                  animate={{ scale: [1, 1.8, 1.8], opacity: [0.5, 0, 0] }}
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                    ease: "easeOut",
                  }}
                  style={{ width: 20, height: 20, margin: "auto" }}
                />
                <svg
                  className="w-5 h-5 relative z-10"
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
              </span>
              Call (813) 303-0515
            </a>
          </div>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          EXPERT SERVICE - Image right with scroll parallax
          ══════════════════════════════════════════════════════════ */}
      <section className="relative py-section overflow-hidden">
        {/* Section background: flowing radial gradient mesh */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-0 w-[600px] h-[600px] bg-gradient-to-br from-primary-50/40 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-[400px] h-[400px] bg-gradient-to-tl from-secondary-50/30 to-transparent rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-gradient-to-r from-primary-50/10 via-accent-50/15 to-secondary-50/10 rounded-full blur-3xl rotate-12" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <span className="inline-block px-4 py-1.5 bg-primary-50 text-primary text-xs font-semibold uppercase tracking-widest rounded-full mb-4">
                Trusted Experts
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-text mb-6">
                Expert Water Heater Service
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Whether your current water heater is leaking, inefficient, or
                you want to upgrade to tankless, our team handles the entire
                process. We assess your household&apos;s hot water demand and
                recommend the best option.
              </p>
              <p className="text-text-secondary leading-relaxed mb-8">
                Every installation includes proper permitting, code compliance,
                and a full warranty. We can typically have a new unit installed
                within hours of approval.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-primary-dark transition-all duration-300 hover:scale-105 shadow-brand"
              >
                Get a Free Quote
                <svg
                  className="w-4 h-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </motion.div>

            {/* Parallax image */}
            <motion.div
              ref={imgRef}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.15,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="relative"
            >
              <div className="relative aspect-square rounded-brand-xl overflow-hidden shadow-brand-xl">
                <motion.div className="absolute inset-0" style={{ y: imgY }}>
                  <Image
                    src="/images/plumber-kitchen.jpeg"
                    alt="Professional plumber with clipboard in kitchen"
                    fill
                    className="object-cover scale-110"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </motion.div>
              </div>
              {/* Decorative offset frame */}
              <div className="absolute -bottom-4 -right-4 -z-10 w-full h-full rounded-brand-xl bg-primary-100/50" />
            </motion.div>
          </div>
        </div>
      </section>


      <InlineCTA variant="button" text="Get a Free Water Heater Quote" trustLine="Same-day service available. Full warranty included." />
      {/* ══════════════════════════════════════════════════════════
          TANK VS TANKLESS - Animated tilt cards
          ══════════════════════════════════════════════════════════ */}
      <section ref={compRef} className="relative py-section overflow-hidden">
        {/* Section background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-surface-secondary via-white to-surface-secondary" />
          <div className="absolute top-20 right-20 w-[500px] h-[500px] bg-gradient-to-bl from-primary-50/25 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-[400px] h-[400px] bg-gradient-to-tr from-secondary-50/20 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-5xl mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={compInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 bg-primary-50 text-primary text-xs font-semibold uppercase tracking-widest rounded-full mb-4">
              Compare Options
            </span>
            <h2 className="font-heading text-display-sm text-text">
              Tank vs. Tankless
            </h2>
            <p className="text-text-secondary mt-3 max-w-xl mx-auto">
              Both options deliver reliable hot water. The right choice depends
              on your household&apos;s size, budget, and long-term goals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Tank Card - slides in from left */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={compInView ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <TiltCard className="h-full">
                <div className="bg-white rounded-brand-xl border border-border-light p-8 h-full hover:shadow-brand-lg transition-shadow duration-500">
                  <div className="inline-block px-3 py-1 bg-primary-50 text-primary text-xs font-semibold uppercase tracking-wider rounded-full mb-4">
                    Traditional Tank
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-text mb-4">
                    Reliable &amp; Affordable
                  </h3>
                  <ul className="space-y-3 mb-6">
                    {[
                      "Lower upfront cost",
                      "Simple installation (2-3 hours)",
                      "Stores 40-80 gallons of hot water",
                      "8-12 year lifespan",
                      "Works during power outages (gas)",
                    ].map((item, i) => (
                      <motion.li
                        key={item}
                        className="flex items-start gap-2.5 text-sm text-text-secondary"
                        initial={{ opacity: 0, x: -10 }}
                        animate={compInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.3, delay: 0.3 + i * 0.08 }}
                      >
                        <svg
                          className="w-4 h-4 text-primary flex-shrink-0 mt-0.5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                  <p className="text-xs text-text-tertiary">
                    Best for: Most homes, budget-conscious upgrades
                  </p>
                </div>
              </TiltCard>
            </motion.div>

            {/* Tankless Card - slides in from right */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={compInView ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.12,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <TiltCard className="h-full">
                <div className="relative bg-white rounded-brand-xl border-2 border-secondary p-8 h-full shadow-brand hover:shadow-brand-xl transition-shadow duration-500">
                  <div className="absolute -top-3 right-6 px-3 py-1 bg-secondary text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-brand-sm">
                    Most Efficient
                  </div>
                  <div className="inline-block px-3 py-1 bg-secondary-50 text-secondary-700 text-xs font-semibold uppercase tracking-wider rounded-full mb-4">
                    Tankless
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-text mb-4">
                    Endless Hot Water
                  </h3>
                  <ul className="space-y-3 mb-6">
                    {[
                      "Unlimited hot water on demand",
                      "Up to 34% energy savings",
                      "Compact wall-mounted design",
                      "20+ year lifespan",
                      "Higher upfront, lower lifetime cost",
                    ].map((item, i) => (
                      <motion.li
                        key={item}
                        className="flex items-start gap-2.5 text-sm text-text-secondary"
                        initial={{ opacity: 0, x: 10 }}
                        animate={compInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.3, delay: 0.4 + i * 0.08 }}
                      >
                        <svg
                          className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                  <p className="text-xs text-text-tertiary">
                    Best for: Larger homes, long-term investment, space-saving
                  </p>
                </div>
              </TiltCard>
            </motion.div>
          </div>

          <motion.p
            className="text-center text-text-secondary text-sm mt-10"
            initial={{ opacity: 0 }}
            animate={compInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
          >
            Not sure which is right for you? We will help you decide during your
            free consultation.
          </motion.p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          ENERGY SAVINGS - Animated stat cards with countup
          ══════════════════════════════════════════════════════════ */}
      <section ref={savingsRef} className="relative py-section overflow-hidden">
        {/* Section background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-700 via-primary-800 to-primary-900" />
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-secondary/10 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-gradient-to-tl from-accent/8 to-transparent rounded-full blur-3xl" />
          {/* Subtle animated orb */}
          <motion.div
            className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary-400/8 to-secondary/8 rounded-full blur-3xl"
            animate={{
              x: ["-50%", "-40%", "-60%", "-50%"],
              y: ["-50%", "-60%", "-40%", "-50%"],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="relative max-w-5xl mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }}
            animate={savingsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 bg-white/10 text-primary-100 text-xs font-semibold uppercase tracking-widest rounded-full mb-4 backdrop-blur-sm">
              Why Upgrade
            </span>
            <h2 className="font-heading text-display-sm text-white">
              The Tankless Advantage
            </h2>
            <p className="text-primary-200 mt-3 max-w-lg mx-auto">
              Modern tankless water heaters deliver superior performance with
              dramatically lower operating costs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Stat Card: Energy Savings */}
            <motion.div
              className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-brand-xl p-8 text-center overflow-hidden group hover:bg-white/10 transition-colors duration-500"
              initial={{ opacity: 0, y: 30 }}
              animate={savingsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0 }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-primary-400/5 to-transparent pointer-events-none" />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-7 h-7 text-secondary-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <div className="font-heading text-5xl md:text-6xl font-bold text-white mb-2">
                  {energyCount}
                  <span className="text-secondary-300">%</span>
                </div>
                <p className="text-primary-200 text-sm font-medium">
                  Energy Savings
                </p>
                <p className="text-primary-300/70 text-xs mt-1">
                  vs. traditional tank heaters
                </p>
              </div>
            </motion.div>

            {/* Stat Card: Annual Savings */}
            <motion.div
              className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-brand-xl p-8 text-center overflow-hidden group hover:bg-white/10 transition-colors duration-500"
              initial={{ opacity: 0, y: 30 }}
              animate={savingsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.12 }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent pointer-events-none" />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-7 h-7 text-accent-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="font-heading text-5xl md:text-6xl font-bold text-white mb-2">
                  <span className="text-accent-300">$</span>
                  {savingsCount}
                  <span className="text-accent-300 text-3xl">+</span>
                </div>
                <p className="text-primary-200 text-sm font-medium">
                  Saved Per Year
                </p>
                <p className="text-primary-300/70 text-xs mt-1">
                  on energy bills annually
                </p>
              </div>
            </motion.div>

            {/* Stat Card: Lifespan */}
            <motion.div
              className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-brand-xl p-8 text-center overflow-hidden group hover:bg-white/10 transition-colors duration-500"
              initial={{ opacity: 0, y: 30 }}
              animate={savingsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.24 }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-primary-300/5 to-transparent pointer-events-none" />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-full bg-primary-400/20 flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-7 h-7 text-primary-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="font-heading text-5xl md:text-6xl font-bold text-white mb-2">
                  {lifespanCount}
                  <span className="text-primary-200">+</span>
                </div>
                <p className="text-primary-200 text-sm font-medium">
                  Year Lifespan
                </p>
                <p className="text-primary-300/70 text-xs mt-1">
                  with proper maintenance
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      <InlineCTA variant="banner" text="Hot Water When You Need It" message="Tankless and traditional options. Expert installation." />
      {/* ══════════════════════════════════════════════════════════
          PROCESS TIMELINE - What to Expect
          ══════════════════════════════════════════════════════════ */}
      <section ref={processRef} className="relative py-section overflow-hidden">
        {/* Section background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-bl from-primary-50/30 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-accent-50/20 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-5xl mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={processInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 bg-primary-50 text-primary text-xs font-semibold uppercase tracking-widest rounded-full mb-4">
              Our Process
            </span>
            <h2 className="font-heading text-display-sm text-text">
              What to Expect
            </h2>
            <p className="text-text-secondary mt-3 max-w-lg mx-auto">
              From initial assessment to final testing, every step is handled
              with care.
            </p>
          </motion.div>

          <div className="relative">
            {/* Vertical timeline line (desktop) */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2">
              <motion.div
                className="w-full h-full bg-gradient-to-b from-primary-200 via-primary-300 to-primary-200"
                initial={{ scaleY: 0 }}
                animate={processInView ? { scaleY: 1 } : {}}
                transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                style={{ transformOrigin: "top" }}
              />
            </div>

            <div className="space-y-12 md:space-y-16">
              {processSteps.map((item, i) => {
                const isLeft = i % 2 === 0;
                return (
                  <motion.div
                    key={item.step}
                    className={`relative flex flex-col md:flex-row items-center gap-6 md:gap-0 ${
                      isLeft ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                    initial={{
                      opacity: 0,
                      x: isLeft ? -40 : 40,
                    }}
                    animate={
                      processInView ? { opacity: 1, x: 0 } : {}
                    }
                    transition={{
                      duration: 0.6,
                      delay: i * 0.18,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                  >
                    {/* Content card */}
                    <div
                      className={`w-full md:w-[calc(50%-40px)] ${
                        isLeft ? "md:text-right md:pr-4" : "md:text-left md:pl-4"
                      }`}
                    >
                      <div
                        className={`bg-white rounded-brand-xl border border-border-light p-6 shadow-brand-sm hover:shadow-brand transition-shadow duration-500 ${
                          isLeft ? "md:ml-auto" : "md:mr-auto"
                        } max-w-md`}
                      >
                        <div
                          className={`flex items-center gap-3 mb-3 ${
                            isLeft ? "md:flex-row-reverse" : ""
                          }`}
                        >
                          <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center flex-shrink-0">
                            <svg
                              className="w-5 h-5 text-primary"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d={item.icon}
                              />
                            </svg>
                          </div>
                          <h3 className="font-heading font-bold text-text text-lg">
                            {item.title}
                          </h3>
                        </div>
                        <p
                          className={`text-text-secondary text-sm leading-relaxed ${
                            isLeft ? "md:text-right" : ""
                          }`}
                          dangerouslySetInnerHTML={{ __html: item.desc }}
                        />
                      </div>
                    </div>

                    {/* Center node */}
                    <div className="relative z-10 flex-shrink-0">
                      <motion.div
                        className="w-12 h-12 rounded-full bg-primary text-white font-heading font-bold text-lg flex items-center justify-center shadow-brand"
                        initial={{ scale: 0 }}
                        animate={processInView ? { scale: 1 } : {}}
                        transition={{
                          duration: 0.4,
                          delay: 0.3 + i * 0.18,
                          type: "spring",
                          stiffness: 300,
                          damping: 20,
                        }}
                      >
                        {item.step}
                      </motion.div>
                    </div>

                    {/* Spacer for opposite side */}
                    <div className="hidden md:block w-[calc(50%-40px)]" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          FAQ ACCORDION
          ══════════════════════════════════════════════════════════ */}
      <section className="relative py-section overflow-hidden">
        {/* Section background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-white via-surface-secondary to-white" />
          <div className="absolute top-10 left-10 w-[400px] h-[400px] bg-gradient-to-br from-primary-50/20 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-gradient-to-tl from-secondary-50/15 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-3xl mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 bg-primary-50 text-primary text-xs font-semibold uppercase tracking-widest rounded-full mb-4">
              Common Questions
            </span>
            <h2 className="font-heading text-display-sm text-text">
              Water Heater FAQs
            </h2>
          </motion.div>

          <div className="space-y-3">
            {faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <motion.div
                  key={i}
                  className="bg-white rounded-brand-lg border border-border-light overflow-hidden shadow-brand-sm hover:shadow-brand transition-shadow duration-300"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left group"
                  >
                    <span className="font-heading font-semibold text-text text-sm md:text-base group-hover:text-primary transition-colors">
                      {faq.q}
                    </span>
                    <motion.span
                      className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-50 flex items-center justify-center"
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{
                        duration: 0.3,
                        ease: [0.25, 0.46, 0.45, 0.94],
                      }}
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
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          height: {
                            duration: 0.35,
                            ease: [0.25, 0.46, 0.45, 0.94],
                          },
                          opacity: { duration: 0.25, delay: 0.05 },
                        }}
                      >
                        <div className="px-5 md:px-6 pb-5 md:pb-6">
                          <div className="w-full h-px bg-border-light mb-4" />
                          <p
                            className="text-text-secondary text-sm leading-relaxed"
                            dangerouslySetInnerHTML={{ __html: faq.a }}
                          />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-text-secondary text-sm mb-5">
              Still have questions? Our team is happy to help.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-primary-dark transition-all duration-300 hover:scale-105 shadow-brand"
              >
                Get a Free Quote
              </Link>
              <a
                href="tel:+18133030515"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary-50 text-primary font-semibold rounded-full hover:bg-primary-100 transition-colors"
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
          <p className="text-text-secondary text-center mb-8">Maximize your water heater lifespan with these complementary services.</p>
          <div className="grid sm:grid-cols-3 gap-4">
            <Link href="/services/water-softeners" className="group block p-6 bg-white rounded-2xl border border-gray-100 hover:border-primary/30 hover:shadow-brand transition-all duration-300">
              <h3 className="font-semibold text-text-primary group-hover:text-primary transition-colors mb-2">Water Softeners</h3>
              <p className="text-sm text-text-secondary">Soft water prevents scale buildup that shortens water heater life by years.</p>
            </Link>
            <Link href="/services/leak-repair" className="group block p-6 bg-white rounded-2xl border border-gray-100 hover:border-primary/30 hover:shadow-brand transition-all duration-300">
              <h3 className="font-semibold text-text-primary group-hover:text-primary transition-colors mb-2">Leak Repair</h3>
              <p className="text-sm text-text-secondary">Leaking water heater connections? We fix pipe and fitting leaks fast.</p>
            </Link>
            <Link href="/services/jusicare" className="group block p-6 bg-white rounded-2xl border border-gray-100 hover:border-primary/30 hover:shadow-brand transition-all duration-300">
              <h3 className="font-semibold text-text-primary group-hover:text-primary transition-colors mb-2">JusiCare Maintenance</h3>
              <p className="text-sm text-text-secondary">Keep all your water systems running perfectly with our maintenance plan.</p>
            </Link>
          </div>
        </div>
      </section>

      <InlineCTA variant="text" text="Compare water heater options" />
    </>
  );
}
