"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

interface CountyData {
  id: string;
  name: string;
  cities: string[];
  color: string;
  hoverColor: string;
  path: string;
  labelPos: { x: number; y: number };
  isPrimary?: boolean;
}

const counties: CountyData[] = [
  {
    id: "polk",
    name: "Polk County",
    cities: ["Lakeland", "Winter Haven", "Bartow", "Auburndale", "Haines City"],
    color: "rgba(27, 107, 147, 0.12)",
    hoverColor: "rgba(27, 107, 147, 0.28)",
    // Large inland county to the east
    path: "M 340 80 L 530 80 L 540 110 L 545 180 L 540 260 L 530 320 L 520 340 L 350 340 L 335 310 L 320 260 L 315 200 L 320 130 Z",
    labelPos: { x: 425, y: 210 },
  },
  {
    id: "hillsborough",
    name: "Hillsborough County",
    cities: ["Tampa", "Brandon", "Plant City", "Riverview", "Temple Terrace"],
    color: "rgba(27, 107, 147, 0.18)",
    hoverColor: "rgba(27, 107, 147, 0.35)",
    // Central county around Tampa Bay, west of Polk
    path: "M 140 100 L 320 100 L 320 130 L 315 200 L 320 260 L 335 310 L 350 340 L 310 370 L 260 380 L 220 370 L 190 340 L 170 310 L 175 270 L 190 245 L 175 230 L 155 240 L 135 235 L 125 210 L 130 175 L 120 155 L 130 130 Z",
    labelPos: { x: 240, y: 220 },
    isPrimary: true,
  },
  {
    id: "pinellas",
    name: "Pinellas County",
    cities: ["St. Petersburg", "Clearwater", "Largo", "Dunedin", "Palm Harbor"],
    color: "rgba(46, 139, 87, 0.15)",
    hoverColor: "rgba(46, 139, 87, 0.32)",
    // Peninsula west of Tampa Bay
    path: "M 50 100 L 130 100 L 130 130 L 120 155 L 130 175 L 125 210 L 135 235 L 120 260 L 105 290 L 95 320 L 85 355 L 75 370 L 60 365 L 50 340 L 45 300 L 48 260 L 50 220 L 48 170 L 45 130 Z",
    labelPos: { x: 85, y: 230 },
  },
  {
    id: "manatee",
    name: "Manatee County",
    cities: ["Bradenton", "Palmetto", "Lakewood Ranch", "Parrish"],
    color: "rgba(46, 139, 87, 0.12)",
    hoverColor: "rgba(46, 139, 87, 0.28)",
    // South of Hillsborough, west side
    path: "M 75 370 L 85 355 L 95 365 L 140 370 L 190 340 L 220 370 L 260 380 L 310 370 L 310 420 L 280 450 L 220 460 L 160 455 L 110 440 L 80 420 L 70 395 Z",
    labelPos: { x: 185, y: 415 },
  },
  {
    id: "sarasota",
    name: "Sarasota County",
    cities: ["Sarasota", "Venice", "North Port", "Englewood", "Osprey"],
    color: "rgba(212, 160, 6, 0.12)",
    hoverColor: "rgba(212, 160, 6, 0.25)",
    // Southernmost county
    path: "M 70 395 L 80 420 L 110 440 L 160 455 L 220 460 L 280 450 L 310 420 L 330 460 L 335 510 L 320 555 L 280 570 L 220 575 L 140 565 L 90 545 L 65 520 L 55 480 L 58 440 Z",
    labelPos: { x: 185, y: 510 },
  },
];

// Tampa Bay water body shape
const tampaBayPath =
  "M 155 240 L 175 230 L 190 245 L 175 270 L 170 310 L 190 340 L 140 370 L 95 365 L 85 355 L 95 320 L 105 290 L 120 260 L 135 235 Z";

// Gulf of Mexico indication (western edge)
const gulfPath = "M 0 80 L 45 100 L 45 130 L 48 170 L 50 220 L 48 260 L 45 300 L 50 340 L 55 380 L 55 440 L 58 480 L 55 520 L 50 560 L 0 580 Z";

// HQ marker position (St. Petersburg - 7901 4th St N)
const hqPosition = { x: 95, y: 250 };

// 50-mile radius center (approximately Tampa Bay center)
const radiusCenter = { x: 200, y: 290 };

export function ServiceAreaMap() {
  const [activeCounty, setActiveCounty] = useState<string | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
  const mapRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(mapRef, { once: true, margin: "-60px" });

  const activeData = counties.find((c) => c.id === activeCounty);

  const handleCountyHover = (countyId: string, event: React.MouseEvent) => {
    setActiveCounty(countyId);
    if (mapRef.current) {
      const rect = mapRef.current.getBoundingClientRect();
      setTooltipPos({
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      });
    }
  };

  const handleMouseMove = (event: React.MouseEvent) => {
    if (activeCounty && mapRef.current) {
      const rect = mapRef.current.getBoundingClientRect();
      setTooltipPos({
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      });
    }
  };

  return (
    <motion.div
      ref={mapRef}
      className="relative w-full"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      onMouseMove={handleMouseMove}
    >
      {/* Map Container */}
      <div className="relative bg-gradient-to-br from-primary-50/60 via-white to-secondary-50/40 rounded-brand-xl border border-border-light overflow-hidden p-4 md:p-8">
        {/* Subtle water texture bg */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 -right-20 w-[300px] h-[300px] bg-primary-100/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-[250px] h-[250px] bg-secondary-100/15 rounded-full blur-3xl" />
        </div>

        {/* SVG Map */}
        <div className="relative mx-auto" style={{ maxWidth: 580 }}>
          <svg
            viewBox="0 0 580 620"
            className="w-full h-auto"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Water pattern for the Gulf */}
              <linearGradient id="gulfGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1B6B93" stopOpacity="0.06" />
                <stop offset="50%" stopColor="#2A8AB8" stopOpacity="0.04" />
                <stop offset="100%" stopColor="#1B6B93" stopOpacity="0.02" />
              </linearGradient>

              {/* Water pattern for Tampa Bay */}
              <linearGradient id="bayGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1B6B93" stopOpacity="0.15" />
                <stop offset="50%" stopColor="#2A8AB8" stopOpacity="0.1" />
                <stop offset="100%" stopColor="#55ABD2" stopOpacity="0.08" />
              </linearGradient>

              {/* Pulse animation for primary county */}
              <radialGradient id="pulseGradient" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#1B6B93" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#1B6B93" stopOpacity="0" />
              </radialGradient>

              {/* HQ marker gradient */}
              <radialGradient id="hqGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#D4A006" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#D4A006" stopOpacity="0" />
              </radialGradient>

              {/* Radius circle gradient */}
              <radialGradient id="radiusGradient" cx="50%" cy="50%" r="50%">
                <stop offset="85%" stopColor="#1B6B93" stopOpacity="0" />
                <stop offset="95%" stopColor="#1B6B93" stopOpacity="0.06" />
                <stop offset="100%" stopColor="#1B6B93" stopOpacity="0.02" />
              </radialGradient>

              {/* Drop shadow filter */}
              <filter id="countyHover" x="-10%" y="-10%" width="120%" height="120%">
                <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
                <feOffset dx="0" dy="2" />
                <feComponentTransfer>
                  <feFuncA type="linear" slope="0.15" />
                </feComponentTransfer>
                <feMerge>
                  <feMergeNode />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Gulf of Mexico water */}
            <path d={gulfPath} fill="url(#gulfGradient)" />
            <text
              x="20"
              y="420"
              fill="#1B6B93"
              opacity="0.2"
              fontSize="11"
              fontFamily="system-ui"
              fontStyle="italic"
              transform="rotate(-90, 20, 420)"
            >
              Gulf of Mexico
            </text>

            {/* 50-mile service radius circle */}
            <motion.circle
              cx={radiusCenter.x}
              cy={radiusCenter.y}
              r="260"
              fill="none"
              stroke="#1B6B93"
              strokeWidth="1.5"
              strokeDasharray="8 6"
              opacity={0}
              animate={isInView ? { opacity: 0.2 } : {}}
              transition={{ duration: 1, delay: 0.8 }}
            />
            <motion.text
              x={radiusCenter.x + 180}
              y={radiusCenter.y - 215}
              fill="#1B6B93"
              opacity={0}
              fontSize="10"
              fontFamily="system-ui"
              fontWeight="500"
              animate={isInView ? { opacity: 0.35 } : {}}
              transition={{ duration: 1, delay: 1.0 }}
            >
              50-Mile Radius
            </motion.text>

            {/* County shapes */}
            {counties.map((county, i) => (
              <g key={county.id}>
                {/* Pulse animation for Hillsborough (primary) */}
                {county.isPrimary && isInView && (
                  <motion.path
                    d={county.path}
                    fill="url(#pulseGradient)"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: [0, 0.4, 0],
                      scale: [1, 1.02, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    style={{ transformOrigin: `${county.labelPos.x}px ${county.labelPos.y}px` }}
                  />
                )}

                {/* County fill */}
                <motion.path
                  d={county.path}
                  fill={activeCounty === county.id ? county.hoverColor : county.color}
                  stroke={activeCounty === county.id ? "#1B6B93" : "rgba(27, 107, 147, 0.2)"}
                  strokeWidth={activeCounty === county.id ? 2 : 1}
                  filter={activeCounty === county.id ? "url(#countyHover)" : undefined}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: 0.3 + i * 0.1,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  style={{
                    cursor: "pointer",
                    transformOrigin: `${county.labelPos.x}px ${county.labelPos.y}px`,
                    transition: "fill 0.3s ease, stroke 0.3s ease, stroke-width 0.3s ease",
                  }}
                  onMouseEnter={(e) => handleCountyHover(county.id, e as unknown as React.MouseEvent)}
                  onMouseLeave={() => setActiveCounty(null)}
                  onClick={(e) => {
                    // On mobile tap, toggle the tooltip
                    if (activeCounty === county.id) {
                      setActiveCounty(null);
                    } else {
                      handleCountyHover(county.id, e as unknown as React.MouseEvent);
                    }
                  }}
                />

                {/* County label */}
                <motion.text
                  x={county.labelPos.x}
                  y={county.labelPos.y}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize={activeCounty === county.id ? "13" : "11"}
                  fontWeight={activeCounty === county.id ? "700" : "600"}
                  fontFamily="system-ui"
                  fill={activeCounty === county.id ? "#1B6B93" : "#4A6278"}
                  className="pointer-events-none select-none"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
                  style={{ transition: "font-size 0.3s ease, fill 0.3s ease" }}
                >
                  {county.name.replace(" County", "")}
                </motion.text>

                {/* Primary badge for Hillsborough */}
                {county.isPrimary && (
                  <motion.g
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 1.2 }}
                  >
                    <rect
                      x={county.labelPos.x - 32}
                      y={county.labelPos.y + 10}
                      width="64"
                      height="18"
                      rx="9"
                      fill="#1B6B93"
                      opacity="0.9"
                      className="pointer-events-none"
                    />
                    <text
                      x={county.labelPos.x}
                      y={county.labelPos.y + 22}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fontSize="8"
                      fontWeight="700"
                      fontFamily="system-ui"
                      fill="white"
                      letterSpacing="0.5"
                      className="pointer-events-none select-none"
                    >
                      PRIMARY
                    </text>
                  </motion.g>
                )}
              </g>
            ))}

            {/* Tampa Bay water */}
            <motion.path
              d={tampaBayPath}
              fill="url(#bayGradient)"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="pointer-events-none"
            />
            <motion.text
              x="150"
              y="310"
              textAnchor="middle"
              fontSize="9"
              fontFamily="system-ui"
              fontStyle="italic"
              fill="#1B6B93"
              opacity={0}
              animate={isInView ? { opacity: 0.35 } : {}}
              transition={{ delay: 0.9 }}
              className="pointer-events-none select-none"
            >
              Tampa Bay
            </motion.text>

            {/* HQ Marker in St. Petersburg */}
            <motion.g
              initial={{ opacity: 0, y: -10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.0, type: "spring", stiffness: 200, damping: 15 }}
            >
              {/* Glow ring */}
              <circle cx={hqPosition.x} cy={hqPosition.y} r="18" fill="url(#hqGlow)" className="pointer-events-none" />

              {/* Pulse rings */}
              {isInView && (
                <>
                  <motion.circle
                    cx={hqPosition.x}
                    cy={hqPosition.y}
                    r="8"
                    fill="none"
                    stroke="#D4A006"
                    strokeWidth="1"
                    animate={{
                      r: [8, 22],
                      opacity: [0.5, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeOut",
                    }}
                  />
                  <motion.circle
                    cx={hqPosition.x}
                    cy={hqPosition.y}
                    r="8"
                    fill="none"
                    stroke="#D4A006"
                    strokeWidth="1"
                    animate={{
                      r: [8, 22],
                      opacity: [0.5, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeOut",
                      delay: 1,
                    }}
                  />
                </>
              )}

              {/* Pin marker */}
              <circle cx={hqPosition.x} cy={hqPosition.y} r="6" fill="#D4A006" stroke="white" strokeWidth="2.5" />
              <circle cx={hqPosition.x} cy={hqPosition.y} r="2.5" fill="white" />

              {/* HQ label */}
              <g transform={`translate(${hqPosition.x + 12}, ${hqPosition.y - 8})`}>
                <rect x="0" y="-9" width="28" height="18" rx="4" fill="white" stroke="#D4A006" strokeWidth="1" opacity="0.95" />
                <text
                  x="14"
                  y="2"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize="8"
                  fontWeight="700"
                  fontFamily="system-ui"
                  fill="#A67D05"
                  className="select-none"
                >
                  HQ
                </text>
              </g>
            </motion.g>
          </svg>
        </div>

        {/* Floating Tooltip */}
        <AnimatePresence>
          {activeData && (
            <motion.div
              className="absolute z-20 pointer-events-none"
              style={{
                left: tooltipPos.x,
                top: tooltipPos.y - 10,
                transform: "translate(-50%, -100%)",
              }}
              initial={{ opacity: 0, y: 6, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 6, scale: 0.95 }}
              transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="bg-white rounded-brand border border-border-light shadow-brand-lg px-4 py-3 min-w-[200px]">
                <div className="flex items-center gap-2 mb-1.5">
                  <div
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: activeData.id === "hillsborough" ? "#1B6B93" : activeData.id === "sarasota" ? "#D4A006" : activeData.id.match(/pinellas|manatee/) ? "#2E8B57" : "#1B6B93" }}
                  />
                  <span className="font-heading font-bold text-sm text-text">
                    {activeData.name}
                  </span>
                </div>
                <p className="text-xs text-text-secondary leading-relaxed">
                  {activeData.cities.join(", ")}
                </p>
                {activeData.isPrimary && (
                  <span className="inline-block mt-1.5 text-[10px] font-semibold text-primary bg-primary-50 px-2 py-0.5 rounded-full">
                    Primary Service Area
                  </span>
                )}
              </div>
              {/* Arrow */}
              <div className="absolute left-1/2 -translate-x-1/2 -bottom-1.5 w-3 h-3 bg-white border-r border-b border-border-light rotate-45" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Legend */}
        <motion.div
          className="relative mt-6 flex flex-wrap items-center justify-center gap-4 md:gap-6"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1.2 }}
        >
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: "rgba(27, 107, 147, 0.35)" }} />
            <span className="text-xs text-text-secondary">Primary Area</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: "rgba(46, 139, 87, 0.28)" }} />
            <span className="text-xs text-text-secondary">Coastal Counties</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: "rgba(212, 160, 6, 0.25)" }} />
            <span className="text-xs text-text-secondary">Extended Area</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-accent" />
            <span className="text-xs text-text-secondary">HQ Location</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 border-t-[1.5px] border-dashed border-primary/30" />
            <span className="text-xs text-text-secondary">50-Mile Radius</span>
          </div>
        </motion.div>

        {/* Mobile info panel - shows on tap for mobile since hover doesn't work */}
        <div className="mt-4 md:hidden">
          <AnimatePresence mode="wait">
            {activeData ? (
              <motion.div
                key={activeData.id}
                className="bg-white rounded-brand border border-border-light shadow-brand-sm p-4"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center gap-2 mb-1">
                  <div
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: activeData.id === "hillsborough" ? "#1B6B93" : activeData.id === "sarasota" ? "#D4A006" : activeData.id.match(/pinellas|manatee/) ? "#2E8B57" : "#1B6B93" }}
                  />
                  <span className="font-heading font-bold text-sm text-text">
                    {activeData.name}
                  </span>
                  {activeData.isPrimary && (
                    <span className="text-[10px] font-semibold text-primary bg-primary-50 px-2 py-0.5 rounded-full">
                      Primary
                    </span>
                  )}
                </div>
                <p className="text-xs text-text-secondary">
                  {activeData.cities.join(", ")}
                </p>
              </motion.div>
            ) : (
              <motion.p
                key="hint"
                className="text-xs text-text-muted text-center py-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                Tap a county to see details
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}
