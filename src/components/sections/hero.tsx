"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";
import Link from "next/link";

function FloatingBubble({
  size,
  left,
  delay,
  duration,
}: {
  size: number;
  left: string;
  delay: number;
  duration: number;
}) {
  return (
    <motion.div
      className="absolute rounded-full bg-white/10 backdrop-blur-sm pointer-events-none"
      style={{
        width: size,
        height: size,
        left,
        bottom: "-10%",
      }}
      animate={{
        y: [0, -1200],
        x: [0, Math.random() * 40 - 20],
        scale: [1, 0.6],
        opacity: [0.4, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeOut",
      }}
    />
  );
}

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.6], [1, 0.95]);

  // Mouse parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const centerX = e.clientX - rect.left - rect.width / 2;
    const centerY = e.clientY - rect.top - rect.height / 2;
    mouseX.set(centerX * 0.02);
    mouseY.set(centerY * 0.02);
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          poster="https://images.pexels.com/photos/247759/pexels-photo-247759.jpeg?auto=compress&cs=tinysrgb&w=1920"
        >
          <source
            src="https://videos.pexels.com/video-files/3818540/3818540-uhd_2560_1440_30fps.mp4"
            type="video/mp4"
          />
        </video>
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary-900/80 via-primary-800/70 to-primary-900/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/40 via-transparent to-secondary-900/30" />
      </div>

      {/* Animated water bubbles */}
      <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
        <FloatingBubble size={8} left="10%" delay={0} duration={8} />
        <FloatingBubble size={12} left="25%" delay={2} duration={10} />
        <FloatingBubble size={6} left="40%" delay={4} duration={7} />
        <FloatingBubble size={10} left="55%" delay={1} duration={9} />
        <FloatingBubble size={14} left="70%" delay={3} duration={11} />
        <FloatingBubble size={8} left="85%" delay={5} duration={8} />
        <FloatingBubble size={6} left="92%" delay={2.5} duration={7.5} />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20 w-full"
        style={{ y, opacity, scale }}
      >
        <div className="max-w-3xl">
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

          {/* Headline with staggered words */}
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
              <span className="text-accent-300">Trusted.</span>
            </motion.span>
          </h1>

          {/* Subheadline */}
          <motion.p
            className="text-lg md:text-xl text-white/75 max-w-xl mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            Free in-home water testing and customized filtration solutions for
            Tampa Bay homeowners. Know what is in your water.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.85 }}
          >
            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-center px-8 py-4 bg-accent text-primary-900 font-bold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <span className="absolute inset-0 bg-accent-light translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
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
              href="tel:7708759932"
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
              (770) 875-9932
            </a>
          </motion.div>
        </div>

        {/* Mouse-follow parallax element */}
        <motion.div
          className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2"
          style={{ x: springX, y: springY }}
        >
          <motion.div
            className="w-72 h-72 rounded-full border border-white/10 flex items-center justify-center"
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            <motion.div
              className="w-48 h-48 rounded-full border border-white/15 flex items-center justify-center"
              animate={{ rotate: -360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-secondary-400/30 to-primary-400/30 backdrop-blur-sm" />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Bottom scroll indicator */}
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
          initial={{ opacity: 0.5 }}
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
