"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

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
      {/* Background Image with Parallax */}
      <motion.div className="absolute inset-0 z-0" style={{ y: bgY }}>
        <Image
          src="https://images.pexels.com/photos/5177211/pexels-photo-5177211.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Florida home"
          fill
          className="object-cover scale-110"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 via-primary-800/85 to-primary-900/90" />
      </motion.div>

      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none z-[1]">
        <motion.div
          className="absolute top-10 right-[15%] w-32 h-32 rounded-full border border-white/10"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 left-[10%] w-20 h-20 rounded-full border border-secondary/20"
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        />
      </div>

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
        <motion.p
          className="text-lg text-primary-200 mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Schedule a free in-home water test. Our technician will test your water,
          explain the results, and recommend the best solution for your home. No
          pressure, no obligation.
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-10 py-5 bg-accent text-primary-900 font-bold text-lg rounded-full hover:bg-accent-light transition-all duration-300 hover:scale-105 shadow-xl"
          >
            Schedule Your Free Test
          </Link>
          <a
            href="tel:7708759932"
            className="inline-flex items-center justify-center px-10 py-5 bg-white/10 backdrop-blur-sm text-white font-semibold text-lg rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300"
          >
            Call (770) 875-9932
          </a>
        </motion.div>
      </div>
    </section>
  );
}
