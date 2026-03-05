"use client";

import { motion } from "framer-motion";

export function PageHero({
  badge,
  title,
  subtitle,
  gradient = "from-primary-800 via-primary-900 to-primary-800",
}: {
  badge: string;
  title: string;
  subtitle?: string;
  gradient?: string;
}) {
  return (
    <section className={`relative pt-36 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-br ${gradient}`}>
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-white/[0.03] rounded-full" />
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-secondary/[0.05] rounded-full" />
        <svg className="absolute bottom-0 w-full h-16 text-white" viewBox="0 0 1440 60" preserveAspectRatio="none">
          <path d="M0,60 L1440,60 L1440,30 C1080,0 720,50 360,20 C180,5 0,30 0,30 Z" fill="currentColor" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.p
          className="text-sm font-semibold uppercase tracking-widest text-secondary-300 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {badge}
        </motion.p>
        <motion.h1
          className="font-heading text-display text-white max-w-3xl"
          initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            className="mt-4 text-lg text-primary-200 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
