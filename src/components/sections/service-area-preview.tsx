"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

const counties = [
  "Hillsborough",
  "Pinellas",
  "Manatee",
  "Sarasota",
  "Polk",
];

export function ServiceAreaPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-section overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-surface-secondary via-white to-surface-tertiary" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-secondary-50/40 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <motion.p
              className="text-sm font-semibold uppercase tracking-widest text-secondary mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              Service Area
            </motion.p>
            <motion.h2
              className="font-heading text-display-sm text-text mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Serving Tampa Bay and Beyond
            </motion.h2>
            <motion.p
              className="text-text-secondary text-lg mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              We provide professional water testing and filtration services within a
              50-mile radius of Tampa Bay, covering five major counties.
            </motion.p>

            {/* County tags */}
            <motion.div
              className="flex flex-wrap gap-3 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {counties.map((county, i) => (
                <motion.span
                  key={county}
                  className="px-5 py-2.5 bg-primary-50 text-primary-700 font-semibold text-sm rounded-full border border-primary-100 hover:bg-primary-100 transition-colors"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.4 + i * 0.05 }}
                >
                  {county} County
                </motion.span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Link
                href="/service-area"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-300"
              >
                Check Your Area
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>
          </div>

          {/* Map Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Stylized map circles */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="w-full h-full rounded-full border-2 border-dashed border-primary-200 opacity-30"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                />
              </div>
              <div className="absolute inset-[15%] flex items-center justify-center">
                <div className="w-full h-full rounded-full border border-primary-300 opacity-40" />
              </div>
              <div className="absolute inset-[30%] flex items-center justify-center">
                <div className="w-full h-full rounded-full bg-primary-100/50" />
              </div>

              {/* Center pin */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="relative"
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-brand-lg">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-6 h-2 bg-primary/20 rounded-full blur-sm" />
                </motion.div>
              </div>

              {/* County labels positioned around */}
              {counties.map((county, i) => {
                const angle = (i * 72 - 90) * (Math.PI / 180);
                const radius = 42;
                const x = 50 + radius * Math.cos(angle);
                const y = 50 + radius * Math.sin(angle);
                return (
                  <motion.div
                    key={county}
                    className="absolute text-xs font-semibold text-primary-600 whitespace-nowrap"
                    style={{ left: `${x}%`, top: `${y}%`, transform: "translate(-50%, -50%)" }}
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.6 + i * 0.1 }}
                  >
                    <div className="w-2 h-2 bg-secondary rounded-full mx-auto mb-1" />
                    {county}
                  </motion.div>
                );
              })}

              {/* 50-mile radius label */}
              <div className="absolute bottom-0 right-0 px-3 py-1.5 bg-white rounded-full shadow-brand text-xs font-semibold text-primary">
                50-mile radius
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
