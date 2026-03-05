"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const problems = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    title: "Hard Water",
    description: "Mineral buildup damages appliances, leaves spots on fixtures, and makes skin feel dry.",
    color: "from-blue-500/10 to-blue-600/5",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
      </svg>
    ),
    title: "Chlorine",
    description: "Chemical taste and odor, dry skin and hair, potential long-term health effects.",
    color: "from-yellow-500/10 to-yellow-600/5",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Bacteria",
    description: "Harmful microorganisms that can cause illness, especially in well water systems.",
    color: "from-red-500/10 to-red-600/5",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
    title: "Lead",
    description: "Toxic heavy metal from aging pipes. No safe level for children or adults.",
    color: "from-gray-500/10 to-gray-600/5",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
      </svg>
    ),
    title: "Taste & Odor",
    description: "Unpleasant taste or smell from sulfur, algae, or chemical treatment byproducts.",
    color: "from-purple-500/10 to-purple-600/5",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "Iron & Rust",
    description: "Orange staining on sinks and laundry. Metallic taste and pipe corrosion.",
    color: "from-orange-500/10 to-orange-600/5",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5" />
      </svg>
    ),
    title: "Sediment",
    description: "Sand, silt, and particles that cloud water and wear down plumbing systems.",
    color: "from-amber-500/10 to-amber-600/5",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 4.5h14.25M3 9h9.75M3 13.5h5.25m5.25-.75L17.25 9m0 0L21 12.75M17.25 9v12" />
      </svg>
    ),
    title: "High TDS",
    description: "Total dissolved solids indicate overall contamination level in your water.",
    color: "from-teal-500/10 to-teal-600/5",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.42 15.17l-5.1-3.06a1.5 1.5 0 01-.42-2.08l4.5-7.5a1.5 1.5 0 012.58 0l4.5 7.5a1.5 1.5 0 01-.42 2.08l-5.1 3.06a1.5 1.5 0 01-1.56 0z" />
      </svg>
    ),
    title: "Nitrates",
    description: "Agricultural runoff contamination, especially dangerous for infants and pregnant women.",
    color: "from-green-500/10 to-green-600/5",
  },
];

export function WaterProblems() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-section overflow-hidden">
      {/* Background treatment - flowing wave svg */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="absolute top-0 w-full h-24 text-primary-50/50" viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path d="M0,60 C360,20 720,80 1080,40 C1260,20 1380,50 1440,30 L1440,0 L0,0 Z" fill="currentColor" />
        </svg>
        <div className="absolute top-1/3 -left-20 w-[500px] h-[500px] bg-gradient-to-br from-primary-50 to-transparent rounded-full opacity-50 blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-[400px] h-[400px] bg-gradient-to-bl from-secondary-50 to-transparent rounded-full opacity-40 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.p
            className="text-sm font-semibold uppercase tracking-widest text-secondary mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            Common Water Issues
          </motion.p>
          <motion.h2
            className="font-heading text-display-sm text-text mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            What Is in Your Water?
          </motion.h2>
          <motion.p
            className="text-text-secondary text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Tampa Bay water faces unique challenges. Our free test identifies
            exactly what is affecting your home.
          </motion.p>
        </div>

        {/* Problem Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {problems.map((problem, i) => (
            <motion.div
              key={problem.title}
              className="group relative p-6 rounded-brand-lg bg-white border border-border-light hover:border-primary-200 hover:shadow-brand transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.4,
                delay: 0.1 + i * 0.06,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <div className={`w-12 h-12 rounded-brand bg-gradient-to-br ${problem.color} flex items-center justify-center mb-4 text-primary group-hover:scale-110 transition-transform duration-300`}>
                {problem.icon}
              </div>
              <h3 className="font-heading font-bold text-lg text-text mb-2">
                {problem.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
