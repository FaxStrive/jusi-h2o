"use client";

import { useRef, useState, useEffect } from "react";
import { InlineCTA } from "@/components/ui/inline-cta";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const industries = [
  {
    name: "Restaurants & Cafes",
    desc: "Water quality affects ice, coffee, cooking, and equipment lifespan. We design systems that meet health codes.",
    icon: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z",
  },
  {
    name: "Medical & Dental",
    desc: "Purified water for sterilization, patient care, and laboratory equipment. HIPAA-compliant service scheduling.",
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
  },
  {
    name: "Office Buildings",
    desc: "Clean drinking water for employees and clients. Breakroom filtration, water cooler alternatives, and plumbing maintenance.",
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
  },
  {
    name: "Retail & Hospitality",
    desc: "Customer-facing water quality, ice machines, and reliable plumbing for high-traffic commercial spaces.",
    icon: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z",
  },
  {
    name: "Gyms & Salons",
    desc: "High-volume water usage requires properly sized filtration and softening. We design for peak demand.",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
  },
  {
    name: "Industrial",
    desc: "Process water treatment, high-capacity filtration, and specialized systems for manufacturing and warehousing.",
    icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z",
  },
];

const commercialServices = [
  "Commercial water filtration",
  "Water softening systems",
  "Reverse osmosis for food service",
  "Water heater installation",
  "Plumbing inspections",
  "Re-piping and upgrades",
  "Fixture installation",
  "Drain cleaning",
  "Backflow prevention",
  "Scheduled maintenance plans",
];

const stats = [
  { label: "Commercial Clients", value: 500, suffix: "+" },
  { label: "Emergency Service", value: 24, suffix: "/7" },
  { label: "Years Experience", value: 15, suffix: "+" },
  { label: "Licensed & Insured", value: 100, suffix: "%" },
];

const differentiators = [
  {
    title: "Zero Downtime Guarantee",
    desc: "We schedule around your business hours and complete work on time. Your operations never stop because of plumbing.",
    icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Code-Compliant Installs",
    desc: "Every installation meets or exceeds Tampa Bay commercial plumbing codes. We handle permits and inspections.",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
  {
    title: "Dedicated Account Manager",
    desc: "One point of contact who knows your building, your history, and your preferences. No repeating yourself.",
    icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
  },
  {
    title: "Preventive Maintenance Plans",
    desc: "Scheduled inspections catch problems before they become emergencies. Save money and avoid disruptions.",
    icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
  },
];

const faqs = [
  {
    q: "How quickly can you respond to a commercial plumbing emergency?",
    a: "We offer 24/7 emergency response for commercial clients in the Tampa Bay area. Most emergencies are responded to within 60 minutes. Our on-call technicians carry common commercial parts to minimize downtime.",
  },
  {
    q: "Do you work with property management companies?",
    a: "Yes. We partner with property management firms across Tampa Bay to handle multi-unit buildings, office parks, and retail centers. We offer volume pricing and dedicated account management for portfolio clients.",
  },
  {
    q: "What certifications do your commercial plumbers hold?",
    a: "All of our commercial technicians are state-licensed, insured, and carry specialized certifications for backflow prevention, medical gas systems, and commercial water treatment. We maintain continuing education requirements year-round.",
  },
  {
    q: "Can you handle a full commercial build-out or renovation?",
    a: "Absolutely. We handle commercial plumbing from ground-up construction to tenant improvements. Our team works with general contractors, architects, and engineers to deliver code-compliant installations on schedule.",
  },
  {
    q: "Do you offer preventive maintenance contracts?",
    a: "Yes. Our commercial maintenance plans include scheduled inspections, priority emergency response, discounted repairs, and detailed reporting. Plans are customized based on your building type and usage patterns.",
  },
  {
    q: "What areas do you serve for commercial plumbing?",
    a: "We serve all of Tampa Bay including Tampa, St. Petersburg, Clearwater, Brandon, Wesley Chapel, and surrounding areas. For large commercial projects, we consider locations throughout central Florida.",
  },
];

/* ------------------------------------------------------------------ */
/*  AnimatedCounter                                                    */
/* ------------------------------------------------------------------ */

function AnimatedCounter({
  target,
  suffix,
  inView,
}: {
  target: number;
  suffix: string;
  inView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let frame: number;
    const duration = 2000;
    const start = performance.now();

    function step(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) frame = requestAnimationFrame(step);
    }

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [inView, target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/*  FAQ Item                                                           */
/* ------------------------------------------------------------------ */

function FaqItem({
  q,
  a,
  index,
  isOpen,
  toggle,
}: {
  q: string;
  a: string;
  index: number;
  isOpen: boolean;
  toggle: () => void;
}) {
  return (
    <motion.div
      className="border border-border-light rounded-brand-lg overflow-hidden bg-white"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
    >
      <button
        onClick={toggle}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-primary-50/40 transition-colors duration-200"
      >
        <span className="font-heading font-bold text-text text-sm md:text-base">
          {q}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex-shrink-0 w-7 h-7 rounded-full bg-primary-50 flex items-center justify-center text-primary"
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
              d="M12 4v16m8-8H4"
            />
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
            <p className="px-6 pb-5 text-text-secondary text-sm leading-relaxed">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main Component                                                     */
/* ------------------------------------------------------------------ */

export function CommercialContent() {
  const industriesRef = useRef(null);
  const industriesInView = useInView(industriesRef, {
    once: true,
    margin: "-60px",
  });

  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-40px" });

  const servicesRef = useRef(null);
  const servicesInView = useInView(servicesRef, {
    once: true,
    margin: "-40px",
  });

  const bannerRef = useRef(null);
  const { scrollYProgress: bannerProgress } = useScroll({
    target: bannerRef,
    offset: ["start end", "end start"],
  });
  const bannerY = useTransform(bannerProgress, [0, 1], ["-8%", "8%"]);
  const bannerScale = useTransform(bannerProgress, [0, 0.5, 1], [1.12, 1.06, 1.0]);

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* ------------------------------------------------------------ */}
      {/*  Parallax Image Banner                                        */}
      {/* ------------------------------------------------------------ */}
      <section className="relative py-section overflow-hidden">
        {/* Section background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-primary-50/40 via-primary-100/20 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[300px] bg-gradient-to-t from-secondary-50/30 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div
            ref={bannerRef}
            className="relative rounded-brand-xl overflow-hidden shadow-brand-xl"
          >
            <div className="aspect-[21/9] relative">
              <motion.div
                className="absolute inset-0"
                style={{ y: bannerY, scale: bannerScale }}
              >
                <Image
                  src="/images/technician-water-heater.jpeg"
                  alt="Commercial plumbing and water treatment"
                  fill
                  className="object-cover object-[center_30%]"
                  sizes="100vw"
                  priority
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 via-primary-900/60 to-primary-900/20" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/40 to-transparent" />
            </div>
            <div className="absolute inset-0 flex items-center">
              <motion.div
                className="max-w-lg px-8 md:px-12"
                initial={{ opacity: 0, x: -40, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <motion.span
                  className="inline-block px-4 py-1.5 bg-white/15 backdrop-blur-sm text-white/90 text-xs font-semibold uppercase tracking-widest rounded-full mb-5 border border-white/20"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Commercial Division
                </motion.span>
                <h2 className="font-heading text-2xl md:text-4xl font-bold text-white mb-4 leading-tight">
                  Built for Business Demands
                </h2>
                <p className="text-primary-100 text-sm md:text-base leading-relaxed mb-7">
                  Commercial properties need higher flow rates, strict code
                  compliance, and minimal downtime. We design solutions that
                  meet these demands while keeping your operation running.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-primary-900 font-bold rounded-full hover:bg-primary-50 transition-all duration-300 hover:shadow-brand-lg text-sm"
                  >
                    Request Commercial Quote
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
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Link>
                  <a
                    href="tel:7252358278"
                    className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/10 backdrop-blur-sm text-white font-bold rounded-full hover:bg-white/20 border border-white/20 transition-all duration-300 text-sm"
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
                    (725) 235-8278
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/*  Animated Stats Bar                                           */}
      {/* ------------------------------------------------------------ */}
      <section className="relative py-16 overflow-hidden">
        {/* Deep gradient band */}
        <div className="absolute inset-0 gradient-bg-primary" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[200px] bg-secondary/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[400px] h-[200px] bg-primary-light/10 rounded-full blur-3xl" />
        </div>

        <div
          ref={statsRef}
          className="relative max-w-6xl mx-auto px-6 lg:px-8"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 24 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: i * 0.12,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                <div className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
                  <AnimatedCounter
                    target={stat.value}
                    suffix={stat.suffix}
                    inView={statsInView}
                  />
                </div>
                <p className="text-primary-200 text-sm font-medium tracking-wide">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      <InlineCTA variant="button" text="Request a Commercial Assessment" trustLine="High-capacity solutions for restaurants, offices, and facilities." />
      {/* ------------------------------------------------------------ */}
      {/*  Industries Grid                                              */}
      {/* ------------------------------------------------------------ */}
      <section
        ref={industriesRef}
        className="relative py-section overflow-hidden"
      >
        {/* Organic mesh background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-surface-secondary via-white to-surface-secondary" />
          <div className="absolute top-20 left-[10%] w-[500px] h-[500px] bg-gradient-to-br from-primary-50/40 via-primary-100/20 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-[10%] w-[450px] h-[450px] bg-gradient-to-tl from-secondary-50/30 via-secondary-100/15 to-transparent rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-gradient-to-r from-accent-50/15 via-transparent to-accent-50/15 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 24 }}
            animate={industriesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 bg-primary-50 text-primary text-xs font-semibold uppercase tracking-widest rounded-full mb-4">
              Industries We Serve
            </span>
            <h2 className="font-heading text-display-sm text-text mb-4">
              Tailored Solutions by Industry
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Every industry has unique water quality and plumbing requirements.
              We bring specialized experience to each one.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, i) => (
              <motion.div
                key={industry.name}
                className="group relative p-6 bg-white rounded-brand-xl border border-border-light transition-all duration-500"
                initial={{ opacity: 0, y: 24 }}
                animate={industriesInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.45,
                  delay: i * 0.08,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                whileHover={{
                  scale: 1.03,
                  y: -4,
                  transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] },
                }}
              >
                {/* Hover glow */}
                <div className="absolute -inset-px rounded-brand-xl bg-gradient-to-br from-primary-200/0 via-primary-100/0 to-secondary-200/0 group-hover:from-primary-200/60 group-hover:via-primary-100/30 group-hover:to-secondary-200/40 transition-all duration-500 -z-10 blur-[1px]" />
                <div className="absolute inset-0 rounded-brand-xl bg-white -z-[5]" />

                <div className="w-12 h-12 rounded-brand-lg bg-primary-50 flex items-center justify-center mb-4 group-hover:bg-primary-100 group-hover:shadow-brand-sm transition-all duration-300">
                  <svg
                    className="w-6 h-6 text-primary group-hover:text-primary-dark transition-colors duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d={industry.icon}
                    />
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-text mb-2">
                  {industry.name}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {industry.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/*  Services Checklist with Staggered Checkmarks                 */}
      {/* ------------------------------------------------------------ */}
      <section className="relative py-section overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-white via-surface-secondary to-white" />
          <div className="absolute top-0 right-[20%] w-[500px] h-[500px] bg-gradient-to-bl from-secondary-50/25 via-transparent to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-[15%] w-[400px] h-[400px] bg-gradient-to-tr from-primary-50/30 via-transparent to-transparent rounded-full blur-3xl" />
        </div>

        <div
          ref={servicesRef}
          className="relative max-w-4xl mx-auto px-6 lg:px-8"
        >
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 bg-secondary-50 text-secondary text-xs font-semibold uppercase tracking-widest rounded-full mb-4">
              Full-Service Solutions
            </span>
            <h2 className="font-heading text-display-sm text-text">
              Commercial Services Include
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {commercialServices.map((service, i) => (
              <motion.div
                key={service}
                className="group flex items-center gap-4 p-5 bg-white rounded-brand-lg border border-border-light hover:border-secondary-200 hover:shadow-brand-sm transition-all duration-300"
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                animate={servicesInView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: 0.4,
                  delay: i * 0.07,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                {/* Animated checkmark circle */}
                <motion.div
                  className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary-50 flex items-center justify-center"
                  initial={{ scale: 0 }}
                  animate={servicesInView ? { scale: 1 } : {}}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 15,
                    delay: 0.2 + i * 0.07,
                  }}
                >
                  <motion.svg
                    className="w-4 h-4 text-secondary"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={
                      servicesInView
                        ? { pathLength: 1, opacity: 1 }
                        : {}
                    }
                    transition={{ duration: 0.3, delay: 0.35 + i * 0.07 }}
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clipRule="evenodd"
                    />
                  </motion.svg>
                </motion.div>
                <span className="text-text text-sm font-medium group-hover:text-primary-dark transition-colors duration-200">
                  {service}
                </span>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-14"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <a
              href="tel:7252358278"
              className="inline-flex items-center gap-2.5 px-10 py-4 bg-primary text-white font-bold rounded-full hover:bg-primary-dark transition-all duration-300 hover:shadow-brand-lg hover:scale-[1.03] text-sm"
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


      <InlineCTA variant="banner" text="Reliable Water for Your Business" message="Schedule your free commercial water evaluation today." />
      {/* ------------------------------------------------------------ */}
      {/*  Why Choose Us for Commercial                                 */}
      {/* ------------------------------------------------------------ */}
      <section className="relative py-section overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-surface-tertiary via-surface-secondary to-white" />
          <div className="absolute top-1/3 left-0 w-[600px] h-[400px] bg-gradient-to-r from-primary-50/35 via-primary-100/20 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-0 w-[500px] h-[350px] bg-gradient-to-l from-accent-50/20 via-transparent to-transparent rounded-full blur-3xl" />
          <div className="absolute top-[60%] left-[40%] w-[300px] h-[300px] bg-gradient-to-br from-secondary-50/20 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 bg-accent-50 text-accent-dark text-xs font-semibold uppercase tracking-widest rounded-full mb-4">
              The Jusi Difference
            </span>
            <h2 className="font-heading text-display-sm text-text mb-4">
              Why Choose Us for Commercial
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              We understand that commercial plumbing isn&apos;t just about
              pipes. It&apos;s about protecting your business, your reputation,
              and your bottom line.
            </p>
          </motion.div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {differentiators.map((item, i) => (
              <motion.div
                key={item.title}
                className="group relative p-7 bg-white rounded-brand-xl border border-border-light hover:border-primary-200 transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                whileHover={{
                  y: -6,
                  transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] },
                }}
              >
                {/* Top accent line */}
                <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-primary-200/0 to-transparent group-hover:via-primary-300 transition-all duration-500" />

                <div className="w-14 h-14 rounded-brand-lg bg-gradient-to-br from-primary-50 to-primary-100/60 flex items-center justify-center mb-5 group-hover:shadow-brand-sm group-hover:from-primary-100 group-hover:to-primary-200/40 transition-all duration-400">
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
                      d={item.icon}
                    />
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-text mb-3 text-base">
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

      <InlineCTA variant="text" text="Questions about commercial water systems? Talk to a specialist" />

      {/* ------------------------------------------------------------ */}
      {/*  FAQ Accordion                                                */}
      {/* ------------------------------------------------------------ */}
      <section className="relative py-section overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-t from-surface-secondary via-white to-surface-secondary" />
          <div className="absolute top-10 right-[15%] w-[500px] h-[400px] bg-gradient-to-bl from-primary-50/30 via-transparent to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-[20%] w-[400px] h-[400px] bg-gradient-to-tr from-secondary-50/20 via-transparent to-transparent rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-3xl mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 bg-primary-50 text-primary text-xs font-semibold uppercase tracking-widest rounded-full mb-4">
              Common Questions
            </span>
            <h2 className="font-heading text-display-sm text-text mb-4">
              Commercial Plumbing FAQ
            </h2>
            <p className="text-text-secondary">
              Get answers to the questions we hear most from commercial property
              owners and managers.
            </p>
          </motion.div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <FaqItem
                key={i}
                q={faq.q}
                a={faq.a}
                index={i}
                isOpen={openFaq === i}
                toggle={() => setOpenFaq(openFaq === i ? null : i)}
              />
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            className="mt-14 text-center"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-text-secondary mb-5">
              Have a question that isn&apos;t answered here?
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-white font-bold rounded-full hover:bg-primary-dark transition-all duration-300 hover:shadow-brand-lg hover:scale-[1.03] text-sm"
              >
                Contact Us
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
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
              <a
                href="tel:7252358278"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-primary font-bold rounded-full border border-primary-200 hover:bg-primary-50 transition-all duration-300 text-sm"
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
                (725) 235-8278
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
