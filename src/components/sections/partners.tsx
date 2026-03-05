"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const brands = [
  "Kinetico",
  "Culligan",
  "Pentair",
  "Fleck",
  "SpringWell",
  "Aquasana",
  "WaterBoss",
  "Halo",
  "US Water Systems",
];

export function Partners() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none bg-surface-secondary">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[200px] bg-gradient-to-b from-primary-50/30 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.p
          className="text-center text-sm font-semibold uppercase tracking-widest text-text-tertiary mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Trusted Brands We Carry
        </motion.p>

        {/* Brand logos as text (since we don't have actual logos) */}
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-6">
          {brands.map((brand, i) => (
            <motion.div
              key={brand}
              className="text-text-muted font-heading font-bold text-lg md:text-xl hover:text-primary transition-colors duration-300 cursor-default"
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.4,
                delay: 0.1 + i * 0.05,
              }}
            >
              {brand}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
