"use client";

import { useState, useRef, useMemo, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useInView,
} from "framer-motion";
import Link from "next/link";

/* ─── Icons (inline SVG to avoid lucide dep issues) ─── */

function IconSearch({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  );
}

function IconAlert({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4.5c-.77-.833-2.694-.833-3.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
    </svg>
  );
}

function IconLock({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    </svg>
  );
}

function IconCheck({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function IconShield({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  );
}

function IconArrow({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );
}

function IconDroplet({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 21c-4.418 0-8-3.134-8-7 0-4.418 8-14 8-14s8 9.582 8 14c0 3.866-3.582 7-8 7z" />
    </svg>
  );
}


/* ─── Contaminant data for Tampa Bay ─── */

interface Contaminant {
  name: string;
  detectedLevel: number;
  unit: string;
  ewgGuideline: number;
  legalLimit: number;
  severity: "low" | "moderate" | "high" | "critical";
  healthEffect: string;
}

type RegionKey = "tampa" | "st_pete" | "clearwater" | "brandon" | "lakeland" | "sarasota" | "fallback";

const CONTAMINANT_DB: Record<RegionKey, Contaminant[]> = {
  tampa: [
    { name: "Total Trihalomethanes", detectedLevel: 58, unit: "ppb", ewgGuideline: 0.8, legalLimit: 80, severity: "critical", healthEffect: "Cancer risk from chlorine disinfection byproducts" },
    { name: "Chloroform", detectedLevel: 32, unit: "ppb", ewgGuideline: 1.5, legalLimit: 80, severity: "critical", healthEffect: "Liver damage, linked to bladder cancer" },
    { name: "Haloacetic Acids (HAA5)", detectedLevel: 42, unit: "ppb", ewgGuideline: 0.1, legalLimit: 60, severity: "critical", healthEffect: "Increased cancer risk, developmental harm" },
    { name: "Chloramine", detectedLevel: 3.6, unit: "mg/L", ewgGuideline: 0.5, legalLimit: 4.0, severity: "high", healthEffect: "Skin irritation, respiratory issues, rubber damage" },
    { name: "Hard Water (CaCO3)", detectedLevel: 240, unit: "mg/L", ewgGuideline: 60, legalLimit: 500, severity: "high", healthEffect: "Scale buildup, appliance damage, dry skin and hair" },
    { name: "Lead", detectedLevel: 4.8, unit: "ppb", ewgGuideline: 0.5, legalLimit: 15, severity: "critical", healthEffect: "Neurological damage, developmental delays in children" },
    { name: "Chromium-6", detectedLevel: 0.34, unit: "ppb", ewgGuideline: 0.02, legalLimit: 100, severity: "critical", healthEffect: "Linked to cancer, liver and kidney damage" },
    { name: "Radium-226 & 228", detectedLevel: 1.8, unit: "pCi/L", ewgGuideline: 0.05, legalLimit: 5, severity: "critical", healthEffect: "Increased cancer risk from radioactive contaminants" },
  ],
  st_pete: [
    { name: "Total Trihalomethanes", detectedLevel: 62, unit: "ppb", ewgGuideline: 0.8, legalLimit: 80, severity: "critical", healthEffect: "Cancer risk from chlorine disinfection byproducts" },
    { name: "Haloacetic Acids (HAA5)", detectedLevel: 48, unit: "ppb", ewgGuideline: 0.1, legalLimit: 60, severity: "critical", healthEffect: "Increased cancer risk, developmental harm" },
    { name: "Chloroform", detectedLevel: 36, unit: "ppb", ewgGuideline: 1.5, legalLimit: 80, severity: "critical", healthEffect: "Liver damage, linked to bladder cancer" },
    { name: "Chloramine", detectedLevel: 3.8, unit: "mg/L", ewgGuideline: 0.5, legalLimit: 4.0, severity: "high", healthEffect: "Skin irritation, respiratory issues, rubber damage" },
    { name: "Hard Water (CaCO3)", detectedLevel: 260, unit: "mg/L", ewgGuideline: 60, legalLimit: 500, severity: "high", healthEffect: "Scale buildup, appliance damage, dry skin and hair" },
    { name: "Lead", detectedLevel: 5.2, unit: "ppb", ewgGuideline: 0.5, legalLimit: 15, severity: "critical", healthEffect: "Neurological damage, developmental delays in children" },
    { name: "Chromium-6", detectedLevel: 0.41, unit: "ppb", ewgGuideline: 0.02, legalLimit: 100, severity: "critical", healthEffect: "Linked to cancer, liver and kidney damage" },
    { name: "Radium-226 & 228", detectedLevel: 2.1, unit: "pCi/L", ewgGuideline: 0.05, legalLimit: 5, severity: "critical", healthEffect: "Increased cancer risk from radioactive contaminants" },
  ],
  clearwater: [
    { name: "Haloacetic Acids (HAA5)", detectedLevel: 44, unit: "ppb", ewgGuideline: 0.1, legalLimit: 60, severity: "critical", healthEffect: "Increased cancer risk, developmental harm" },
    { name: "Total Trihalomethanes", detectedLevel: 55, unit: "ppb", ewgGuideline: 0.8, legalLimit: 80, severity: "critical", healthEffect: "Cancer risk from chlorine disinfection byproducts" },
    { name: "Chloroform", detectedLevel: 28, unit: "ppb", ewgGuideline: 1.5, legalLimit: 80, severity: "critical", healthEffect: "Liver damage, linked to bladder cancer" },
    { name: "Chloramine", detectedLevel: 3.4, unit: "mg/L", ewgGuideline: 0.5, legalLimit: 4.0, severity: "high", healthEffect: "Skin irritation, respiratory issues, rubber damage" },
    { name: "Hard Water (CaCO3)", detectedLevel: 230, unit: "mg/L", ewgGuideline: 60, legalLimit: 500, severity: "high", healthEffect: "Scale buildup, appliance damage, dry skin and hair" },
    { name: "Lead", detectedLevel: 3.9, unit: "ppb", ewgGuideline: 0.5, legalLimit: 15, severity: "critical", healthEffect: "Neurological damage, developmental delays in children" },
    { name: "Chromium-6", detectedLevel: 0.29, unit: "ppb", ewgGuideline: 0.02, legalLimit: 100, severity: "critical", healthEffect: "Linked to cancer, liver and kidney damage" },
    { name: "Radium-226 & 228", detectedLevel: 1.6, unit: "pCi/L", ewgGuideline: 0.05, legalLimit: 5, severity: "critical", healthEffect: "Increased cancer risk from radioactive contaminants" },
  ],
  brandon: [
    { name: "Total Trihalomethanes", detectedLevel: 52, unit: "ppb", ewgGuideline: 0.8, legalLimit: 80, severity: "critical", healthEffect: "Cancer risk from chlorine disinfection byproducts" },
    { name: "Haloacetic Acids (HAA5)", detectedLevel: 38, unit: "ppb", ewgGuideline: 0.1, legalLimit: 60, severity: "critical", healthEffect: "Increased cancer risk, developmental harm" },
    { name: "Hard Water (CaCO3)", detectedLevel: 280, unit: "mg/L", ewgGuideline: 60, legalLimit: 500, severity: "high", healthEffect: "Scale buildup, appliance damage, dry skin and hair" },
    { name: "Chloramine", detectedLevel: 3.5, unit: "mg/L", ewgGuideline: 0.5, legalLimit: 4.0, severity: "high", healthEffect: "Skin irritation, respiratory issues, rubber damage" },
    { name: "Chloroform", detectedLevel: 30, unit: "ppb", ewgGuideline: 1.5, legalLimit: 80, severity: "critical", healthEffect: "Liver damage, linked to bladder cancer" },
    { name: "Lead", detectedLevel: 4.1, unit: "ppb", ewgGuideline: 0.5, legalLimit: 15, severity: "critical", healthEffect: "Neurological damage, developmental delays in children" },
    { name: "Chromium-6", detectedLevel: 0.37, unit: "ppb", ewgGuideline: 0.02, legalLimit: 100, severity: "critical", healthEffect: "Linked to cancer, liver and kidney damage" },
    { name: "Radium-226 & 228", detectedLevel: 2.4, unit: "pCi/L", ewgGuideline: 0.05, legalLimit: 5, severity: "critical", healthEffect: "Increased cancer risk from radioactive contaminants" },
  ],
  lakeland: [
    { name: "Radium-226 & 228", detectedLevel: 3.2, unit: "pCi/L", ewgGuideline: 0.05, legalLimit: 5, severity: "critical", healthEffect: "Increased cancer risk from radioactive contaminants" },
    { name: "Total Trihalomethanes", detectedLevel: 48, unit: "ppb", ewgGuideline: 0.8, legalLimit: 80, severity: "critical", healthEffect: "Cancer risk from chlorine disinfection byproducts" },
    { name: "Haloacetic Acids (HAA5)", detectedLevel: 35, unit: "ppb", ewgGuideline: 0.1, legalLimit: 60, severity: "critical", healthEffect: "Increased cancer risk, developmental harm" },
    { name: "Hard Water (CaCO3)", detectedLevel: 310, unit: "mg/L", ewgGuideline: 60, legalLimit: 500, severity: "high", healthEffect: "Scale buildup, appliance damage, dry skin and hair" },
    { name: "Chloramine", detectedLevel: 3.2, unit: "mg/L", ewgGuideline: 0.5, legalLimit: 4.0, severity: "high", healthEffect: "Skin irritation, respiratory issues, rubber damage" },
    { name: "Lead", detectedLevel: 5.8, unit: "ppb", ewgGuideline: 0.5, legalLimit: 15, severity: "critical", healthEffect: "Neurological damage, developmental delays in children" },
    { name: "Chromium-6", detectedLevel: 0.45, unit: "ppb", ewgGuideline: 0.02, legalLimit: 100, severity: "critical", healthEffect: "Linked to cancer, liver and kidney damage" },
    { name: "Chloroform", detectedLevel: 26, unit: "ppb", ewgGuideline: 1.5, legalLimit: 80, severity: "critical", healthEffect: "Liver damage, linked to bladder cancer" },
  ],
  sarasota: [
    { name: "Total Trihalomethanes", detectedLevel: 64, unit: "ppb", ewgGuideline: 0.8, legalLimit: 80, severity: "critical", healthEffect: "Cancer risk from chlorine disinfection byproducts" },
    { name: "Haloacetic Acids (HAA5)", detectedLevel: 50, unit: "ppb", ewgGuideline: 0.1, legalLimit: 60, severity: "critical", healthEffect: "Increased cancer risk, developmental harm" },
    { name: "Chloroform", detectedLevel: 38, unit: "ppb", ewgGuideline: 1.5, legalLimit: 80, severity: "critical", healthEffect: "Liver damage, linked to bladder cancer" },
    { name: "Hard Water (CaCO3)", detectedLevel: 220, unit: "mg/L", ewgGuideline: 60, legalLimit: 500, severity: "high", healthEffect: "Scale buildup, appliance damage, dry skin and hair" },
    { name: "Chloramine", detectedLevel: 3.3, unit: "mg/L", ewgGuideline: 0.5, legalLimit: 4.0, severity: "high", healthEffect: "Skin irritation, respiratory issues, rubber damage" },
    { name: "Lead", detectedLevel: 3.5, unit: "ppb", ewgGuideline: 0.5, legalLimit: 15, severity: "high", healthEffect: "Neurological damage, developmental delays in children" },
    { name: "Chromium-6", detectedLevel: 0.26, unit: "ppb", ewgGuideline: 0.02, legalLimit: 100, severity: "critical", healthEffect: "Linked to cancer, liver and kidney damage" },
    { name: "Radium-226 & 228", detectedLevel: 1.4, unit: "pCi/L", ewgGuideline: 0.05, legalLimit: 5, severity: "critical", healthEffect: "Increased cancer risk from radioactive contaminants" },
  ],
  fallback: [
    { name: "Total Trihalomethanes", detectedLevel: 54, unit: "ppb", ewgGuideline: 0.8, legalLimit: 80, severity: "critical", healthEffect: "Cancer risk from chlorine disinfection byproducts" },
    { name: "Haloacetic Acids (HAA5)", detectedLevel: 40, unit: "ppb", ewgGuideline: 0.1, legalLimit: 60, severity: "critical", healthEffect: "Increased cancer risk, developmental harm" },
    { name: "Chloroform", detectedLevel: 30, unit: "ppb", ewgGuideline: 1.5, legalLimit: 80, severity: "critical", healthEffect: "Liver damage, linked to bladder cancer" },
    { name: "Chloramine", detectedLevel: 3.4, unit: "mg/L", ewgGuideline: 0.5, legalLimit: 4.0, severity: "high", healthEffect: "Skin irritation, respiratory issues, rubber damage" },
    { name: "Hard Water (CaCO3)", detectedLevel: 250, unit: "mg/L", ewgGuideline: 60, legalLimit: 500, severity: "high", healthEffect: "Scale buildup, appliance damage, dry skin and hair" },
    { name: "Lead", detectedLevel: 4.5, unit: "ppb", ewgGuideline: 0.5, legalLimit: 15, severity: "critical", healthEffect: "Neurological damage, developmental delays in children" },
    { name: "Chromium-6", detectedLevel: 0.35, unit: "ppb", ewgGuideline: 0.02, legalLimit: 100, severity: "critical", healthEffect: "Linked to cancer, liver and kidney damage" },
  ],
};

function getRegion(zip: string): { region: RegionKey; isServiceArea: boolean } {
  const prefix = parseInt(zip.substring(0, 3), 10);
  // Tampa
  if (prefix === 336 || prefix === 335) return { region: "tampa", isServiceArea: true };
  // St. Petersburg
  if (prefix === 337) return { region: "st_pete", isServiceArea: true };
  // Clearwater / Pinellas
  if (prefix === 337 || prefix === 346) return { region: "clearwater", isServiceArea: true };
  // Brandon / Riverview
  if (prefix === 335) return { region: "brandon", isServiceArea: true };
  // Lakeland / Polk
  if (prefix === 338) return { region: "lakeland", isServiceArea: true };
  // Sarasota
  if (prefix === 342 || prefix === 341) return { region: "sarasota", isServiceArea: true };
  // Broader Tampa Bay area
  if (prefix >= 333 && prefix <= 349) return { region: "fallback", isServiceArea: true };
  return { region: "fallback", isServiceArea: false };
}

/* ─── Severity helpers ─── */

const severityConfig = {
  low: { color: "#10B981", bg: "bg-emerald-50", text: "text-emerald-700", label: "Low", width: "25%" },
  moderate: { color: "#F59E0B", bg: "bg-amber-50", text: "text-amber-700", label: "Moderate", width: "50%" },
  high: { color: "#EA580C", bg: "bg-orange-50", text: "text-orange-700", label: "High", width: "75%" },
  critical: { color: "#DC2626", bg: "bg-red-50", text: "text-red-700", label: "Critical", width: "100%" },
};

/* ─── Contaminant card ─── */

function ContaminantCard({ contaminant, index }: { contaminant: Contaminant; index: number }) {
  const sev = severityConfig[contaminant.severity];
  const ratio = contaminant.ewgGuideline > 0
    ? (contaminant.detectedLevel / contaminant.ewgGuideline).toFixed(0)
    : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.45, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group relative bg-white rounded-xl border border-border-light p-4 hover:shadow-brand hover:border-primary-200 transition-all duration-300"
    >
      {/* Severity accent stripe */}
      <div className="absolute top-0 left-0 w-1 h-full rounded-l-xl" style={{ background: sev.color }} />

      <div className="pl-3">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div>
            <h4 className="text-sm font-semibold text-text leading-tight">{contaminant.name}</h4>
            {ratio && (
              <span className="text-xs font-bold" style={{ color: sev.color }}>
                {ratio}x above EWG guideline
              </span>
            )}
          </div>
          <span className={`shrink-0 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${sev.bg} ${sev.text}`}>
            {sev.label}
          </span>
        </div>

        {/* Levels */}
        <div className="grid grid-cols-3 gap-2 mb-3 text-xs">
          <div>
            <span className="text-text-muted">Detected</span>
            <p className="font-semibold text-text">{contaminant.detectedLevel} {contaminant.unit}</p>
          </div>
          <div>
            <span className="text-text-muted">EWG Goal</span>
            <p className="font-semibold text-secondary">
              {contaminant.ewgGuideline > 0 ? `${contaminant.ewgGuideline} ${contaminant.unit}` : "N/A"}
            </p>
          </div>
          <div>
            <span className="text-text-muted">Legal Limit</span>
            <p className="font-semibold text-text-secondary">{contaminant.legalLimit} {contaminant.unit}</p>
          </div>
        </div>

        {/* Severity bar */}
        <div className="w-full h-1.5 rounded-full bg-surface-tertiary mb-2.5 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: sev.width }}
            transition={{ duration: 0.8, delay: 0.3 + index * 0.08, ease: "easeOut" }}
            className="h-full rounded-full"
            style={{ background: sev.color }}
          />
        </div>

        <p className="text-xs text-text-secondary leading-relaxed">{contaminant.healthEffect}</p>
      </div>
    </motion.div>
  );
}

/* ─── Main component ─── */

export function ZipChecker() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [zip, setZip] = useState("");
  const [zipError, setZipError] = useState("");
  const [contaminants, setContaminants] = useState<Contaminant[]>([]);
  const [isServiceArea, setIsServiceArea] = useState(true);

  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });

  useEffect(() => {
    if (step !== 2) return;
    const script = document.createElement("script");
    script.src = "https://link.jusipower.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, [step]);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  const aboveGuideline = useMemo(
    () => contaminants.filter((c) => c.ewgGuideline > 0 && c.detectedLevel > c.ewgGuideline).length,
    [contaminants]
  );

  const handleZipSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = zip.trim();
    if (!/^\d{5}$/.test(trimmed)) {
      setZipError("Please enter a valid 5-digit zip code");
      return;
    }
    setZipError("");
    const { region, isServiceArea: inArea } = getRegion(trimmed);
    setContaminants(CONTAMINANT_DB[region]);
    setIsServiceArea(inArea);
    setStep(2);
  };


  return (
    <section ref={sectionRef} id="zip-checker" className="relative py-16 md:py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-50/60 via-white to-secondary-50/30" />
        <motion.div
          style={{ y: bgY }}
          className="absolute top-20 left-1/4 w-[450px] h-[450px] rounded-full bg-secondary opacity-[0.04] blur-[100px]"
        />
        <motion.div
          style={{ y: bgY }}
          className="absolute bottom-10 right-1/4 w-[350px] h-[350px] rounded-full bg-primary opacity-[0.05] blur-[80px]"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 text-sm font-semibold text-secondary tracking-wider uppercase mb-3"
          >
            <IconDroplet className="w-4 h-4" />
            Free Water Quality Check
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-display-sm text-text mb-4"
          >
            What&apos;s Really in Your Water?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-text-secondary"
          >
            Enter your zip code to see real contaminant data for your area, based on public utility reports and EWG analysis.
          </motion.p>
        </div>

        {/* Step content */}
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step-1"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="max-w-md mx-auto"
            >
              <form onSubmit={handleZipSubmit} className="relative">
                <div className="relative flex items-center">
                  <IconSearch className="absolute left-4 w-5 h-5 text-text-muted" />
                  <input
                    type="text"
                    value={zip}
                    onChange={(e) => {
                      const val = e.target.value.replace(/\D/g, "").slice(0, 5);
                      setZip(val);
                      setZipError("");
                    }}
                    placeholder="Enter your zip code"
                    className="w-full pl-12 pr-4 py-4 text-lg rounded-2xl border-2 border-border bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all duration-300 text-text placeholder:text-text-muted"
                    inputMode="numeric"
                    maxLength={5}
                  />
                </div>
                {zipError && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-sm text-red-600 mt-2 ml-1"
                  >
                    {zipError}
                  </motion.p>
                )}
                <div className="mt-4 flex justify-center">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-white font-semibold text-base rounded-full hover:bg-primary-dark transition-all duration-300 hover:scale-105 shadow-brand-sm w-full sm:w-auto justify-center"
                  >
                    Check Your Water
                    <IconSearch className="w-4 h-4" />
                  </button>
                </div>
              </form>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="max-w-3xl mx-auto"
            >
              {!isServiceArea && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mb-4 p-2.5 rounded-lg bg-amber-50 border border-amber-200 text-center"
                >
                  <p className="text-xs text-amber-800">
                    Jusi H2O serves the Tampa Bay area. Showing Florida averages for reference.
                  </p>
                </motion.div>
              )}

              {/* Compact summary + top 3 contaminants */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="mb-5 p-4 rounded-2xl bg-white border border-border-light shadow-brand-sm"
              >
                <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-border-light">
                  <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center shrink-0">
                    <IconAlert className="w-4 h-4 text-red-600" />
                  </div>
                  <p className="text-sm font-semibold text-text">
                    {aboveGuideline} contaminant{aboveGuideline !== 1 ? "s" : ""} above EWG guidelines
                    <span className="font-normal text-text-secondary"> in {zip}</span>
                  </p>
                </div>

                <div className="space-y-2.5">
                  {contaminants.slice(0, 3).map((c, i) => {
                    const sev = severityConfig[c.severity];
                    const ratio = c.ewgGuideline > 0
                      ? (c.detectedLevel / c.ewgGuideline).toFixed(0)
                      : null;
                    return (
                      <motion.div
                        key={c.name}
                        initial={{ opacity: 0, x: -15 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.15 + i * 0.08, duration: 0.35 }}
                        className="flex items-center gap-3"
                      >
                        <div className="w-2 h-2 rounded-full shrink-0" style={{ background: sev.color }} />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-medium text-text truncate">{c.name}</span>
                            {ratio && (
                              <span className="text-[11px] font-bold shrink-0" style={{ color: sev.color }}>
                                {ratio}x
                              </span>
                            )}
                          </div>
                          <div className="w-full h-1 rounded-full bg-surface-tertiary mt-1">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: sev.width }}
                              transition={{ duration: 0.6, delay: 0.3 + i * 0.08 }}
                              className="h-full rounded-full"
                              style={{ background: sev.color }}
                            />
                          </div>
                        </div>
                        <span className={`shrink-0 text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-full ${sev.bg} ${sev.text}`}>
                          {sev.label}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="mt-3 pt-3 border-t border-border-light flex items-center justify-center gap-2 text-text-muted"
                >
                  <IconLock className="w-3.5 h-3.5" />
                  <span className="text-xs font-medium">
                    + {contaminants.length - 3} more contaminants detected
                  </span>
                </motion.div>
              </motion.div>

              {/* EWG Form Embed */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <div className="p-5 rounded-2xl bg-white border border-border-light shadow-brand">
                  <p className="text-sm font-semibold text-text text-center mb-4">
                    Unlock your full report with all {contaminants.length} contaminants
                  </p>
                  <iframe
                    src="https://link.jusipower.com/widget/form/doYowx1OjTCzF8OUlpY4"
                    style={{ width: "100%", height: "409px", border: "none", borderRadius: "3px" }}
                    id="inline-doYowx1OjTCzF8OUlpY4"
                    data-layout='{"id":"INLINE"}'
                    data-trigger-type="alwaysShow"
                    data-trigger-value=""
                    data-activation-type="alwaysActivated"
                    data-activation-value=""
                    data-deactivation-type="neverDeactivate"
                    data-deactivation-value=""
                    data-form-name="EWG"
                    data-height="409"
                    data-layout-iframe-id="inline-doYowx1OjTCzF8OUlpY4"
                    data-form-id="doYowx1OjTCzF8OUlpY4"
                    title="EWG"
                  />
                  <div className="mt-4 flex justify-center">
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="inline-flex items-center gap-2 px-8 py-2.5 bg-primary text-white font-semibold text-sm rounded-full hover:bg-primary-dark transition-all duration-300 hover:scale-105 shadow-brand-sm"
                    >
                      View Full Report
                      <IconArrow className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step-3"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="max-w-4xl mx-auto"
            >
              {/* Unlocked banner */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="mb-8 p-5 rounded-2xl bg-gradient-to-r from-primary-50 via-white to-secondary-50 border border-primary-200 text-center"
              >
                <div className="flex items-center justify-center gap-2 mb-2">
                  <IconCheck className="w-5 h-5 text-secondary" />
                  <span className="text-sm font-semibold text-secondary">Full Report Unlocked</span>
                </div>
                <p className="text-lg font-bold text-text">
                  <span className="text-red-600">{aboveGuideline} contaminant{aboveGuideline !== 1 ? "s" : ""}</span>{" "}
                  detected above EWG health guidelines in zip code {zip}
                </p>
                {!isServiceArea && (
                  <p className="text-sm text-text-secondary mt-1">
                    Showing Florida average data. Jusi H2O serves the Tampa Bay area.
                  </p>
                )}
              </motion.div>

              {/* All contaminants */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                {contaminants.map((c, i) => (
                  <ContaminantCard key={c.name} contaminant={c} index={i} />
                ))}
              </div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-center"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 text-sm text-primary font-medium mb-4">
                  <IconShield className="w-4 h-4" />
                  A free in-home water test confirms exact levels at your tap
                </div>
                <div className="flex justify-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-10 py-4 bg-accent text-white font-bold text-base rounded-full hover:bg-accent-light transition-all duration-300 hover:scale-105 shadow-xl"
                  >
                    Schedule Your Free Water Test
                    <IconArrow className="w-5 h-5" />
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
