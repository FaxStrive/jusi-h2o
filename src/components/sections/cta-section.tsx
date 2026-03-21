"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

export function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={ref} className="relative py-section-lg overflow-hidden">
      {/* Video Background with Parallax */}
      <motion.div className="absolute inset-0 z-0" style={{ y: bgY }}>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-110"
        >
          <source src="/videos/cta-water-flow.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/95 via-primary-900/90 to-primary-900/95" />
      </motion.div>


      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.p
          className="text-sm font-semibold uppercase tracking-widest text-secondary-300 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Get Started Today
        </motion.p>
        <motion.h2
          className="font-heading text-display text-white mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Ready to Know What Is in Your Water?
        </motion.h2>
        <div className="mb-10" />
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-10 py-5 bg-accent text-white font-bold text-lg rounded-full hover:bg-accent-light transition-all duration-300 hover:scale-105 shadow-xl"
          >
            Schedule Your Free Test
          </Link>
          <a
            href="tel:7252358278"
            className="inline-flex items-center justify-center px-10 py-5 bg-white/10 backdrop-blur-sm text-white font-semibold text-lg rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300"
          >
            Call (725) 235-8278
          </a>
        </motion.div>
      </div>
    </section>
  );
}
