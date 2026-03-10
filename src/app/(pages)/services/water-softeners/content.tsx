"use client";

import { useRef, useState, useEffect } from "react";
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

/* ─── Animated Counter Component ─── */
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

/* ─── Water Wave SVG Separator ─── */
function WaveSeparator({
  flip = false,
  color = "var(--color-primary-50)",
}: {
  flip?: boolean;
  color?: string;
}) {
  return (
    <div
      className={`w-full overflow-hidden leading-[0] ${flip ? "rotate-180" : ""}`}
    >
      <svg
        viewBox="0 0 1440 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
        preserveAspectRatio="none"
      >
        <path
          d="M0 40C120 60 240 80 360 70C480 60 600 20 720 10C840 0 960 20 1080 35C1200 50 1320 60 1440 55V80H0V40Z"
          fill={color}
          fillOpacity="0.5"
        />
        <path
          d="M0 50C160 70 320 75 480 65C640 55 720 30 880 25C1040 20 1200 40 1440 60V80H0V50Z"
          fill={color}
          fillOpacity="0.3"
        />
      </svg>
    </div>
  );
}

/* ─── Droplet SVG Accent ─── */
function DropletAccent({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M20 0C20 0 40 28 40 38C40 48.5 31 56 20 56C9 56 0 48.5 0 38C0 28 20 0 20 0Z"
        fill="currentColor"
        fillOpacity="0.08"
      />
    </svg>
  );
}

/* ─── Stats Data ─── */
const stats = [
  { value: 85, suffix: "%", label: "of Tampa Bay homes have hard water" },
  { value: 30, suffix: "%", label: "efficiency loss from scale buildup" },
  { value: 50, suffix: "%", label: "less soap needed with soft water" },
  { value: 15, suffix: "+yr", label: "system lifespan with maintenance" },
];

/* ─── Problem Data ─── */
const problems = [
  {
    icon: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126z",
    title: "Scale Buildup",
    description:
      "White crusty deposits on faucets, showerheads, and inside pipes that restrict water flow and cost you money.",
  },
  {
    icon: "M15.182 16.318A4.486 4.486 0 0012.016 15a4.486 4.486 0 00-3.198 1.318M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z",
    title: "Dry Skin & Hair",
    description:
      "Hard minerals strip natural oils, leaving skin itchy and hair brittle after every shower.",
  },
  {
    icon: "M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z",
    title: "Spotted Dishes",
    description:
      "Cloudy glasses, water spots on silverware, and film on shower doors that never seem clean.",
  },
  {
    icon: "M11.42 15.17l-5.1-5.1m0 0L11.42 4.97m-5.1 5.1h12.76M4.93 19.07A10 10 0 1119.07 4.93 10 10 0 014.93 19.07z",
    title: "Appliance Damage",
    description:
      "Water heaters, dishwashers, and washing machines fail years early from mineral buildup.",
  },
];

/* ─── Before/After Data ─── */
const beforeAfter = {
  before: [
    "Chalky residue on fixtures",
    "Stiff, scratchy laundry",
    "Clogged pipes and low pressure",
    "Skin irritation after showers",
    "Appliances failing prematurely",
  ],
  after: [
    "Spotless, gleaming fixtures",
    "Softer, brighter clothes",
    "Full pressure, clean pipes",
    "Smooth skin and silky hair",
    "Appliances lasting 2x longer",
  ],
};

/* ─── FAQ Data ─── */
const faqs = [
  {
    question: "How do I know if I have hard water?",
    answer:
      "Common signs include white scale on faucets, soap that won&apos;t lather well, spots on dishes, and dry skin after bathing. Tampa Bay water averages 15-20 grains per gallon, which is considered very hard. We offer a free in-home water test that measures exact hardness, pH, chlorine, iron, and total dissolved solids.",
  },
  {
    question: "How long does installation take?",
    answer:
      "Most water softener installations are completed in 2-4 hours. Our licensed technicians handle everything from start to finish, including connecting to your main water line, setting up the drain, programming the system for your water conditions, and a thorough cleanup.",
  },
  {
    question: "How often does the salt need to be refilled?",
    answer:
      "A typical household goes through about one 40-pound bag of salt per month. Usage varies based on water hardness, household size, and daily consumption. Our JusiCare+ plan includes quarterly salt refills and system checks so you never have to think about it.",
  },
  {
    question: "Will softened water taste salty?",
    answer:
      "No. The ion exchange process replaces calcium and magnesium with a very small amount of sodium, which is undetectable by taste. The sodium added is far less than what you&apos;d find in a glass of milk. If you prefer zero sodium, we also offer potassium-based alternatives.",
  },
  {
    question: "What size system do I need?",
    answer:
      "System size depends on your home&apos;s water hardness level, number of bathrooms, and daily water usage. During our free consultation, we measure all of these factors and recommend a system sized precisely for your needs, so you get optimal performance without oversizing.",
  },
  {
    question: "What warranty comes with the system?",
    answer:
      "Our water softeners come with manufacturer warranties ranging from 5 to 10 years on the valve and tank, depending on the model. Installation labor is covered for the first year. JusiCare+ members receive extended coverage and priority service for the life of the system.",
  },
];

/* ─── FAQ Item Component ─── */
function FaqItem({
  faq,
  index,
}: {
  faq: { question: string; answer: string };
  index: number;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="border border-border-light rounded-brand-lg overflow-hidden bg-white/80 backdrop-blur-sm"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between gap-4 p-6 text-left hover:bg-primary-50/30 transition-colors duration-300"
      >
        <span className="font-heading font-bold text-text text-base md:text-lg pr-4">
          {faq.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-50 flex items-center justify-center"
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
              d="M12 4v16m8-8H4"
            />
          </svg>
        </motion.div>
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
            <div className="px-6 pb-6 pt-0">
              <div className="h-px bg-border-light mb-4" />
              <p
                className="text-text-secondary text-sm md:text-base leading-relaxed"
                dangerouslySetInnerHTML={{ __html: faq.answer }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════════════════════ */

export function WaterSoftenersContent() {
  /* ─── Refs ─── */
  const statsRef = useRef(null);
  const problemsRef = useRef(null);
  const solutionRef = useRef(null);
  const beforeAfterRef = useRef(null);
  const processRef = useRef(null);

  /* ─── InView hooks ─── */
  const statsInView = useInView(statsRef, { once: true, margin: "-60px" });
  const problemsInView = useInView(problemsRef, { once: true, margin: "-60px" });
  const solutionInView = useInView(solutionRef, { once: true, margin: "-60px" });
  const beforeAfterInView = useInView(beforeAfterRef, {
    once: true,
    margin: "-60px",
  });

  /* ─── Scroll parallax for solution image ─── */
  const imgRef = useRef(null);
  const { scrollYProgress: imgScrollProgress } = useScroll({
    target: imgRef,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(imgScrollProgress, [0, 1], [60, -60]);
  const imgScale = useTransform(imgScrollProgress, [0, 0.5, 1], [1.15, 1.05, 1.15]);

  /* ─── Scroll parallax for decorative elements ─── */
  const { scrollYProgress } = useScroll();
  const decorY1 = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const decorY2 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const decorRotate = useTransform(scrollYProgress, [0, 1], [0, 45]);

  /* ─── Mouse follow for before/after section ─── */
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 80, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 80, damping: 20 });

  function handleMouseMove(e: React.MouseEvent) {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x * 0.03);
    mouseY.set(y * 0.03);
  }

  return (
    <>
      {/* ═══ STATS BAR ═══ */}
      <section ref={statsRef} className="relative -mt-8 z-10 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
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
              {/* Subtle gradient orb behind stat */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-primary-100/60 to-secondary-100/30 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              <div className="font-heading text-3xl md:text-4xl font-bold text-primary mb-2 relative">
                <AnimatedCounter
                  target={stat.value}
                  suffix={stat.suffix}
                  duration={2.2}
                  inView={statsInView}
                />
              </div>
              <div className="text-text-tertiary text-xs md:text-sm leading-snug relative">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <WaveSeparator color="var(--color-primary-50)" />

      {/* ═══ THE PROBLEM ═══ */}
      <section
        ref={problemsRef}
        className="relative py-section overflow-hidden"
      >
        {/* Background: angled warm gradient sweep */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(160deg, rgba(255,240,240,0.4) 0%, transparent 40%, transparent 60%, rgba(255,245,235,0.3) 100%)",
            }}
          />
          <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-red-50/40 to-orange-50/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-1/5 w-[300px] h-[300px] bg-gradient-to-tl from-red-100/20 to-transparent rounded-full blur-3xl" />
          {/* Floating droplet accents */}
          <motion.div style={{ y: decorY1 }} className="absolute top-32 right-16">
            <DropletAccent className="w-10 h-14 text-red-300" />
          </motion.div>
          <motion.div
            style={{ y: decorY2, rotate: decorRotate }}
            className="absolute bottom-40 left-12"
          >
            <DropletAccent className="w-8 h-11 text-red-200" />
          </motion.div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 24 }}
            animate={problemsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <span className="inline-block px-5 py-2 bg-red-50 text-red-600 text-xs font-semibold uppercase tracking-widest rounded-full mb-5 border border-red-100">
              The Problem
            </span>
            <h2 className="font-heading text-display-sm text-text mb-4">
              What Hard Water Does to Your Home
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Tampa Bay&apos;s water supply contains high levels of calcium and
              magnesium that wreak havoc on your home, health, and wallet.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            {problems.map((problem, i) => {
              const directions = [
                { x: -40, y: 0 },
                { x: 40, y: 0 },
                { x: 0, y: 40 },
                { x: 0, y: -40 },
              ];
              const dir = directions[i % directions.length];

              return (
                <motion.div
                  key={problem.title}
                  className="group relative flex gap-5 p-6 md:p-7 bg-white/80 backdrop-blur-sm rounded-brand-xl border border-red-100/80 hover:border-red-200 hover:shadow-brand transition-all duration-500"
                  initial={{ opacity: 0, x: dir.x, y: dir.y }}
                  animate={problemsInView ? { opacity: 1, x: 0, y: 0 } : {}}
                  transition={{
                    duration: 0.55,
                    delay: i * 0.12,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                >
                  {/* Hover glow */}
                  <div className="absolute inset-0 rounded-brand-xl bg-gradient-to-br from-red-50/0 to-red-50/0 group-hover:from-red-50/40 group-hover:to-orange-50/20 transition-all duration-500 pointer-events-none" />

                  <div className="relative flex-shrink-0 w-12 h-12 rounded-brand bg-red-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
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
                        d={problem.icon}
                      />
                    </svg>
                  </div>
                  <div className="relative">
                    <h3 className="font-heading font-bold text-text mb-1.5 text-base md:text-lg">
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

      {/* ═══ BEFORE / AFTER VISUAL ═══ */}
      <section
        ref={beforeAfterRef}
        className="relative py-section overflow-hidden"
        onMouseMove={handleMouseMove}
      >
        {/* Background: cool diagonal sweep */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, var(--color-surface-secondary) 0%, transparent 35%, transparent 65%, var(--color-primary-50) 100%)",
            }}
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-primary-50/20 via-transparent to-secondary-50/20 rounded-full blur-3xl rotate-12" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 24 }}
            animate={beforeAfterInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <span className="inline-block px-5 py-2 bg-primary-50 text-primary text-xs font-semibold uppercase tracking-widest rounded-full mb-5 border border-primary-100">
              The Difference
            </span>
            <h2 className="font-heading text-display-sm text-text">
              Hard Water vs. Soft Water
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-0 max-w-4xl mx-auto"
            style={{ x: springX, y: springY }}
          >
            {/* BEFORE Card */}
            <motion.div
              className="relative bg-gradient-to-br from-red-50/90 to-orange-50/60 backdrop-blur-sm rounded-t-brand-xl md:rounded-l-brand-xl md:rounded-tr-none p-8 md:p-10 border border-red-100/60"
              initial={{ opacity: 0, x: -50 }}
              animate={beforeAfterInView ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.15,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-red-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-red-700 text-xl">
                  Hard Water
                </h3>
              </div>
              <ul className="space-y-4">
                {beforeAfter.before.map((item, i) => (
                  <motion.li
                    key={item}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={beforeAfterInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                  >
                    <svg
                      className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20 12H4"
                      />
                    </svg>
                    <span className="text-red-800/80 text-sm md:text-base">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* AFTER Card */}
            <motion.div
              className="relative bg-gradient-to-br from-secondary-50/90 to-primary-50/60 backdrop-blur-sm rounded-b-brand-xl md:rounded-r-brand-xl md:rounded-bl-none p-8 md:p-10 border border-secondary-100/60"
              initial={{ opacity: 0, x: 50 }}
              animate={beforeAfterInView ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.25,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-secondary-100 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-secondary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-secondary-dark text-xl">
                  Soft Water
                </h3>
              </div>
              <ul className="space-y-4">
                {beforeAfter.after.map((item, i) => (
                  <motion.li
                    key={item}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={beforeAfterInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}
                  >
                    <svg
                      className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-secondary-800/80 text-sm md:text-base">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <WaveSeparator flip color="var(--color-surface-secondary)" />

      {/* ═══ THE SOLUTION ═══ */}
      <section
        ref={solutionRef}
        className="relative py-section overflow-hidden"
      >
        {/* Background: flowing organic gradient */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, var(--color-surface-secondary) 0%, var(--color-surface) 30%, var(--color-surface) 70%, var(--color-primary-50) 100%)",
            }}
          />
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-primary-50/50 to-transparent rounded-full blur-3xl" />
          <div className="absolute top-20 left-0 w-[400px] h-[400px] bg-gradient-to-br from-secondary-50/30 to-transparent rounded-full blur-3xl" />
          {/* Floating droplets */}
          <motion.div
            style={{ y: decorY2 }}
            className="absolute top-24 right-24"
          >
            <DropletAccent className="w-12 h-16 text-primary-200" />
          </motion.div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image with parallax */}
            <motion.div
              ref={imgRef}
              className="relative"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={solutionInView ? { opacity: 1, scale: 1 } : {}}
              transition={{
                duration: 0.7,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <div className="relative aspect-[4/3] rounded-brand-xl overflow-hidden shadow-brand-lg">
                <motion.div
                  className="absolute inset-0"
                  style={{ y: imgY, scale: imgScale }}
                >
                  <Image
                    src="/images/salt-softener.jpeg"
                    alt="Water softener installation"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </motion.div>
                {/* Gradient overlay on image */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/20 via-transparent to-transparent" />
              </div>
              {/* Decorative offset background */}
              <div className="absolute -bottom-4 -right-4 -z-10 w-full h-full rounded-brand-xl bg-gradient-to-br from-primary-100/70 to-secondary-100/40" />
              {/* Floating badge */}
              <motion.div
                className="absolute -bottom-3 -left-3 md:bottom-6 md:-left-6 bg-white rounded-brand-lg shadow-brand-lg p-4 border border-border-light"
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={
                  solutionInView ? { opacity: 1, scale: 1, y: 0 } : {}
                }
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary-50 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-secondary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="font-heading font-bold text-text text-sm">
                      Licensed &amp; Insured
                    </div>
                    <div className="text-text-tertiary text-xs">
                      Tampa Bay Trusted
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={solutionInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.15,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <span className="inline-block px-5 py-2 bg-secondary-50 text-secondary-700 text-xs font-semibold uppercase tracking-widest rounded-full mb-5 border border-secondary-100">
                The Solution
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-text mb-6">
                Ion Exchange Water Softening
              </h2>
              <p className="text-text-secondary leading-relaxed mb-8 text-base md:text-lg">
                Our systems use ion exchange technology to remove calcium and
                magnesium before water reaches your faucets. The result is
                softer water that protects your entire home.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  "Sized specifically for your home\u2019s water usage and hardness level",
                  "Systems from leading manufacturers with full warranties",
                  "Every installation includes a free water test",
                  "JusiCare+ plan includes quarterly salt refills and maintenance",
                ].map((item, i) => (
                  <motion.li
                    key={item}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={solutionInView ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      duration: 0.4,
                      delay: 0.3 + i * 0.1,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-secondary-50 flex items-center justify-center mt-0.5">
                      <svg
                        className="w-3.5 h-3.5 text-secondary"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-text-secondary text-sm md:text-base">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-primary-dark transition-all duration-300 hover:scale-[1.03] hover:shadow-brand-lg"
                >
                  Get a Free Quote
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
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
                <a
                  href="tel:8133030515"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-50 text-primary font-semibold rounded-full hover:bg-primary-100 transition-all duration-300 hover:shadow-brand"
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
        </div>
      </section>

      <WaveSeparator color="var(--color-primary-50)" />

      {/* ═══ PROCESS / HOW IT WORKS ═══ */}
      <section
        ref={processRef}
        className="relative py-section overflow-hidden"
      >
        {/* Background: soft radial accents */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 80% 60% at 20% 50%, rgba(27,107,147,0.04), transparent), radial-gradient(ellipse 60% 80% at 80% 40%, rgba(46,139,87,0.04), transparent)",
            }}
          />
          <div className="absolute top-10 right-1/4 w-[400px] h-[400px] bg-gradient-to-bl from-primary-50/30 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/3 w-[300px] h-[300px] bg-gradient-to-tr from-secondary-50/20 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-5xl mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <span className="inline-block px-5 py-2 bg-primary-50 text-primary text-xs font-semibold uppercase tracking-widest rounded-full mb-5 border border-primary-100">
              How It Works
            </span>
            <h2 className="font-heading text-display-sm text-text mb-4">
              4 Simple Steps
            </h2>
            <p className="text-text-secondary max-w-xl mx-auto">
              From free water test to ongoing care, we make the entire process
              effortless.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6">
            {[
              {
                step: "1",
                title: "Free Water Test",
                desc: "We test your water for hardness, chlorine, pH, iron, and TDS with zero obligation.",
                icon: "M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5",
              },
              {
                step: "2",
                title: "Custom Quote",
                desc: "Based on your results and home size, we recommend the right system with clear pricing.",
                icon: "M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z",
              },
              {
                step: "3",
                title: "Installation",
                desc: "Licensed technicians install your system in 2-4 hours with full cleanup.",
                icon: "M11.42 15.17l-5.1-5.1a1 1 0 010-1.42l.7-.7a1 1 0 011.42 0l3.54 3.54 7.08-7.08a1 1 0 011.42 0l.7.7a1 1 0 010 1.42l-8.5 8.5a1 1 0 01-1.42 0z",
              },
              {
                step: "4",
                title: "Ongoing Care",
                desc: "Salt refill reminders, maintenance scheduling, and JusiCare+ coverage available.",
                icon: "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z",
              },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                className="relative text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.15,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                {/* Step circle */}
                <div className="relative mx-auto mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary-dark text-white font-heading font-bold text-xl flex items-center justify-center mx-auto shadow-brand group-hover:scale-110 group-hover:shadow-brand-lg transition-all duration-500">
                    {item.step}
                  </div>
                  {/* Animated ring on hover */}
                  <div className="absolute inset-0 w-16 h-16 mx-auto rounded-full border-2 border-primary/20 scale-100 group-hover:scale-125 group-hover:border-primary/0 transition-all duration-700" />
                </div>

                {/* Connecting line */}
                {i < 3 && (
                  <div className="hidden md:block absolute top-8 left-[calc(50%+32px)] w-[calc(100%-64px)] h-[2px]">
                    <motion.div
                      className="h-full bg-gradient-to-r from-primary-200 to-primary-100"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.4 + i * 0.2 }}
                      style={{ transformOrigin: "left" }}
                    />
                  </div>
                )}

                {/* Icon */}
                <div className="w-10 h-10 rounded-brand bg-primary-50 flex items-center justify-center mx-auto mb-3">
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

                <h3 className="font-heading font-bold text-text mb-2 text-base md:text-lg">
                  {item.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <WaveSeparator flip color="var(--color-surface-tertiary)" />

      {/* ═══ FAQ SECTION ═══ */}
      <section className="relative py-section overflow-hidden">
        {/* Background: warm bottom glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, var(--color-surface-tertiary) 0%, var(--color-surface) 40%, var(--color-surface) 80%, var(--color-primary-50) 100%)",
            }}
          />
          <div className="absolute bottom-20 left-1/4 w-[500px] h-[300px] bg-gradient-to-tr from-primary-50/30 to-secondary-50/15 rounded-full blur-3xl" />
          <div className="absolute top-20 right-10 w-[300px] h-[300px] bg-gradient-to-bl from-accent-50/20 to-transparent rounded-full blur-3xl" />
          <motion.div
            style={{ y: decorY1 }}
            className="absolute bottom-32 right-20"
          >
            <DropletAccent className="w-8 h-11 text-primary-200" />
          </motion.div>
        </div>

        <div className="relative max-w-3xl mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <span className="inline-block px-5 py-2 bg-primary-50 text-primary text-xs font-semibold uppercase tracking-widest rounded-full mb-5 border border-primary-100">
              Common Questions
            </span>
            <h2 className="font-heading text-display-sm text-text mb-4">
              Water Softener FAQs
            </h2>
            <p className="text-text-secondary">
              Everything you need to know about water softeners for your Tampa
              Bay home.
            </p>
          </motion.div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <FaqItem key={faq.question} faq={faq} index={i} />
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            className="mt-14 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-text-secondary mb-6">
              Still have questions? We&apos;re happy to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-primary-dark transition-all duration-300 hover:scale-[1.03] hover:shadow-brand-lg"
              >
                Schedule a Free Consultation
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
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
              <a
                href="tel:8133030515"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-50 text-primary font-semibold rounded-full hover:bg-primary-100 transition-all duration-300 hover:shadow-brand"
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
                (813) 303-0515
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
