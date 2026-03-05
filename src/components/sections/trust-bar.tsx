"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "2,500+", label: "5-Star Reviews" },
  { value: "10+", label: "Expert Technicians" },
  { value: "Same Day", label: "Response Time" },
];

const certifications = [
  "WQA Certified",
  "NSF-42",
  "NSF-44",
  "NSF-53",
  "NSF-55",
  "NSF-58",
  "NSF-401",
];

export function TrustBar() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-16 bg-white overflow-hidden">
      {/* Subtle bg */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[200px] bg-primary-50/50 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-[400px] h-[150px] bg-secondary-50/40 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <div className="font-heading text-3xl md:text-4xl font-bold text-primary mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-text-tertiary font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          className="flex flex-wrap justify-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {certifications.map((cert) => (
            <span
              key={cert}
              className="px-4 py-2 bg-primary-50 text-primary-600 text-xs font-semibold rounded-full border border-primary-100"
            >
              {cert}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
