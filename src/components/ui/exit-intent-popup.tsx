"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { trackCTAClick, trackPhoneClick } from "@/lib/analytics";

export function ExitIntentPopup() {
  const [show, setShow] = useState(false);
  const triggered = useRef(false);

  const openPopup = useCallback(() => {
    if (triggered.current) return;
    if (sessionStorage.getItem("jusi-exit-shown")) return;
    triggered.current = true;
    sessionStorage.setItem("jusi-exit-shown", "1");
    setShow(true);
  }, []);

  // Desktop: mouseout on documentElement (more reliable than mouseleave on document)
  useEffect(() => {
    let handler: ((e: MouseEvent) => void) | null = null;

    const enableTimer = setTimeout(() => {
      handler = (e: MouseEvent) => {
        if (e.clientY <= 0 && e.relatedTarget === null) {
          openPopup();
        }
      };
      document.documentElement.addEventListener("mouseout", handler);
    }, 2000);

    return () => {
      clearTimeout(enableTimer);
      if (handler) {
        document.documentElement.removeEventListener("mouseout", handler);
      }
    };
  }, [openPopup]);

  // Mobile: 60% scroll + 3s pause
  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout | null = null;
    const isMobile = window.innerWidth < 1024;

    const handleScroll = () => {
      if (!isMobile || triggered.current) return;
      const scrollPercent =
        window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);

      if (scrollPercent >= 0.6) {
        if (scrollTimeout) clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          openPopup();
        }, 3000);
      }
    };

    if (isMobile) {
      window.addEventListener("scroll", handleScroll, { passive: true });
    }

    return () => {
      if (isMobile) {
        window.removeEventListener("scroll", handleScroll);
      }
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, [openPopup]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setShow(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal */}
          <motion.div
            className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Close button */}
            <button
              onClick={() => setShow(false)}
              className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full transition-colors"
              style={{ background: "var(--color-surface-secondary)", color: "var(--color-text-secondary)" }}
              aria-label="Close popup"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Header stripe */}
            <div
              className="px-6 pt-8 pb-6 text-center text-white"
              style={{
                background: "linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%)",
              }}
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  />
                </svg>
              </div>
              <h3 className="font-heading text-2xl font-bold mb-1">
                Wait — Get Your Free Water Test!
              </h3>
              <p className="text-white/80 text-sm">
                Find out what is really in your Tampa Bay water
              </p>
            </div>

            {/* Body */}
            <div className="px-6 py-6">
              <p className="text-sm text-center mb-5" style={{ color: "var(--color-text-secondary)" }}>
                Our certified water specialists will test your water on-site and show you exactly what&apos;s in it — completely free.
              </p>

              {/* CTA Button */}
              <Link
                href="/contact"
                onClick={() => { trackCTAClick('exit-intent-cta', 'exit-popup'); setShow(false); }}
                className="block w-full py-3.5 rounded-xl text-white font-semibold text-sm text-center transition-all hover:brightness-110"
                style={{ background: "var(--color-accent)" }}
              >
                Schedule My Free Water Test
              </Link>

              {/* Divider */}
              <div className="flex items-center gap-3 my-4">
                <div className="flex-1 h-px" style={{ background: "var(--color-border)" }} />
                <span className="text-xs" style={{ color: "var(--color-text-tertiary)" }}>or</span>
                <div className="flex-1 h-px" style={{ background: "var(--color-border)" }} />
              </div>

              {/* Call alternative */}
              <a
                href="tel:+18133030515"
                onClick={() => trackPhoneClick('+18133030515')}
                className="flex items-center justify-center gap-2 text-sm font-semibold transition-colors"
                style={{ color: "var(--color-primary)" }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                Prefer to call? (813) 303-0515
              </a>

              {/* Trust signals */}
              <div className="mt-5 flex items-center justify-center gap-4 flex-wrap">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-3.5 h-3.5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="text-xs font-semibold ml-1" style={{ color: "var(--color-text)" }}>5.0</span>
                </div>
                <span className="text-xs" style={{ color: "var(--color-text-tertiary)" }}>|</span>
                <span className="text-xs font-medium" style={{ color: "var(--color-text-secondary)" }}>
                  Licensed &amp; Insured
                </span>
                <span className="text-xs" style={{ color: "var(--color-text-tertiary)" }}>|</span>
                <span className="text-xs font-medium" style={{ color: "var(--color-text-secondary)" }}>
                  100% Satisfaction
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
