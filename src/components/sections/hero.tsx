"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import Link from "next/link";

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 bg-primary-900/45" />
      </div>

      {/* Centered Content */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-6 text-center"
        style={{ y, opacity }}
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-secondary-400 animate-pulse" />
          <span className="text-sm text-white/90 font-medium">
            Serving Tampa Bay for 15+ Years
          </span>
        </motion.div>

        {/* Headline */}
        <h1 className="font-heading text-display-lg text-white mb-6">
          <motion.span
            className="block"
            initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            Your Water.
          </motion.span>
          <motion.span
            className="block"
            initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, delay: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <span className="text-secondary-300">Tested.</span>{" "}
            <span className="text-primary-200">Treated.</span>{" "}
            <span className="text-white">Trusted.</span>
          </motion.span>
        </h1>

        {/* Subtitle */}
        <motion.p
          className="text-lg md:text-xl text-white/75 max-w-2xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          Free in-home water testing and customized filtration solutions for
          Tampa Bay homeowners. Know what is in your water.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.85 }}
        >
          <Link
            href="/contact"
            className="group relative inline-flex items-center justify-center px-8 py-4 bg-white text-primary-900 font-bold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <span className="absolute inset-0 bg-primary-50 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <span className="relative flex items-center gap-2">
              Schedule Free Water Test
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
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
            </span>
          </Link>
          <a
            href="tel:7252358278"
            className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300"
          >
            <svg
              className="w-5 h-5 mr-2"
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
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <span className="text-xs uppercase tracking-widest text-white/50">
          Scroll
        </span>
        <motion.div
          className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-1.5"
        >
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-white/70"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
