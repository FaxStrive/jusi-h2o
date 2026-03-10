"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Free Water Test",
    description:
      "Schedule a free in-home visit. Our technician tests your water for hardness, contaminants, and other common issues, explaining the results in simple terms.",
    accent: "from-primary-400 to-primary-600",
  },
  {
    number: "02",
    title: "Custom Recommendation",
    description:
      "Based on your test results, we recommend the best filtration solution for your specific home. No one-size-fits-all systems. You get a clear, same-day quote with no pressure.",
    accent: "from-secondary-400 to-secondary-600",
  },
  {
    number: "03",
    title: "Professional Install",
    description:
      "Most systems are installed within 24-72 hours. Our technicians ensure everything is fully operational and walk you through how it works before leaving.",
    accent: "from-accent-400 to-accent-600",
  },
];

export function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0.1, 0.8], ["0%", "100%"]);

  return (
    <section ref={ref} className="relative py-section-lg overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/process.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-primary-900/[0.97]" />
      </div>
      {/* Flowing wave at top */}
      <svg className="absolute top-0 w-full h-16 text-white z-[1] pointer-events-none" viewBox="0 0 1440 60" preserveAspectRatio="none">
        <path d="M0,0 L1440,0 L1440,30 C1080,60 720,10 360,40 C180,55 0,30 0,30 Z" fill="currentColor" />
      </svg>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.p
            className="text-sm font-semibold uppercase tracking-widest text-secondary-300 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            How It Works
          </motion.p>
          <motion.h2
            className="font-heading text-display-sm text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Better Water in 3 Simple Steps
          </motion.h2>
          <motion.p
            className="text-primary-100 text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            From testing to installation, we make the process easy and transparent.
          </motion.p>
        </div>

        {/* Steps with timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Animated vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-px">
            <motion.div
              className="w-full bg-gradient-to-b from-secondary-400 to-primary-400 origin-top"
              style={{ height: lineHeight }}
            />
          </div>

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              className={`relative flex items-start gap-8 mb-20 last:mb-0 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.3 + i * 0.2,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              {/* Number circle */}
              <div className="relative z-10 flex-shrink-0 md:absolute md:left-1/2 md:-translate-x-1/2">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${step.accent} flex items-center justify-center shadow-lg`}>
                  <span className="font-heading text-xl font-bold text-white">
                    {step.number}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className={`flex-1 md:w-[calc(50%-3rem)] ${i % 2 === 0 ? "md:text-right md:pr-12" : "md:text-left md:pl-12"}`}>
                <h3 className="font-heading text-2xl font-bold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-primary-100 leading-relaxed drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
                  {step.description}
                </p>
              </div>

              {/* Spacer for opposite side */}
              <div className="hidden md:block flex-1" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
