"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
  animate,
} from "framer-motion";
import Image from "next/image";

interface BeforeAfterSliderProps {
  /** Before image src (left side) */
  beforeSrc?: string;
  /** After image src (right side) */
  afterSrc?: string;
  /** Before label text */
  beforeLabel?: string;
  /** After label text */
  afterLabel?: string;
  /** Before placeholder gradient (used when no image) */
  beforeGradient?: string;
  /** After placeholder gradient (used when no image) */
  afterGradient?: string;
  /** Before placeholder text overlay */
  beforePlaceholderText?: string;
  /** After placeholder text overlay */
  afterPlaceholderText?: string;
  /** Container aspect ratio class (e.g. "aspect-video", "aspect-[4/3]") */
  aspectRatio?: string;
  /** Initial slider position 0-100 */
  initialPosition?: number;
  /** Alt text for before image */
  beforeAlt?: string;
  /** Alt text for after image */
  afterAlt?: string;
}

export function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeLabel = "Before",
  afterLabel = "After",
  beforeGradient = "linear-gradient(135deg, #7A94A8 0%, #4A6278 40%, #1A2B3C 100%)",
  afterGradient = "linear-gradient(135deg, #2A8AB8 0%, #1B6B93 40%, #2E8B57 100%)",
  beforePlaceholderText,
  afterPlaceholderText,
  aspectRatio = "aspect-[16/10]",
  initialPosition = 50,
  beforeAlt = "Before",
  afterAlt = "After",
}: BeforeAfterSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  // Motion value for slider position in pixels from left
  const sliderX = useMotionValue(0);
  // Smooth spring for the visual position
  const smoothX = useSpring(sliderX, { stiffness: 300, damping: 30 });

  // Clip percentage for the before image (0-100)
  const clipPercent = useTransform(smoothX, (x) => {
    if (containerWidth <= 0) return initialPosition;
    return Math.max(0, Math.min(100, (x / containerWidth) * 100));
  });

  // CSS clip-path string derived from clip percentage
  const clipPath = useTransform(clipPercent, (v) => `inset(0 ${100 - v}% 0 0)`);

  // Set initial position and update on resize
  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        const w = containerRef.current.offsetWidth;
        setContainerWidth(w);
        sliderX.set((initialPosition / 100) * w);
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, [initialPosition, sliderX]);

  // Subtle intro animation - slide from 60 to 50 to hint at interactivity
  useEffect(() => {
    if (containerWidth <= 0) return;
    const timeout = setTimeout(() => {
      const target = (initialPosition / 100) * containerWidth;
      const overshoot = ((initialPosition + 8) / 100) * containerWidth;
      animate(sliderX, [overshoot, target], {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94],
      });
    }, 800);
    return () => clearTimeout(timeout);
  }, [containerWidth, initialPosition, sliderX]);

  const handlePointerDown = useCallback(
    (e: React.PointerEvent) => {
      e.preventDefault();
      setIsDragging(true);
      setHasInteracted(true);
      const rect = containerRef.current?.getBoundingClientRect();
      if (rect) {
        const x = e.clientX - rect.left;
        sliderX.set(Math.max(0, Math.min(containerWidth, x)));
      }
      (e.target as HTMLElement).setPointerCapture(e.pointerId);
    },
    [containerWidth, sliderX]
  );

  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!isDragging) return;
      const rect = containerRef.current?.getBoundingClientRect();
      if (rect) {
        const x = e.clientX - rect.left;
        sliderX.set(Math.max(0, Math.min(containerWidth, x)));
      }
    },
    [isDragging, containerWidth, sliderX]
  );

  const handlePointerUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative ${aspectRatio} w-full overflow-hidden rounded-brand-lg select-none cursor-grab active:cursor-grabbing shadow-brand-lg`}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      style={{ touchAction: "none" }}
      role="slider"
      aria-label="Before and after comparison slider"
      aria-valuemin={0}
      aria-valuemax={100}
    >
      {/* After layer (full width, behind) */}
      <div className="absolute inset-0">
        {afterSrc ? (
          <Image
            src={afterSrc}
            alt={afterAlt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            draggable={false}
          />
        ) : (
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{ background: afterGradient }}
          >
            {afterPlaceholderText && (
              <div className="text-center px-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-3">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-sm font-semibold text-white uppercase tracking-wider">
                    After
                  </span>
                </div>
                <p className="text-white/90 font-heading text-lg md:text-xl font-semibold drop-shadow-md">
                  {afterPlaceholderText}
                </p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Before layer (clipped) */}
      <motion.div
        className="absolute inset-0"
        style={{
          clipPath,
        }}
      >
        {beforeSrc ? (
          <Image
            src={beforeSrc}
            alt={beforeAlt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            draggable={false}
          />
        ) : (
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{ background: beforeGradient }}
          >
            {beforePlaceholderText && (
              <div className="text-center px-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/20 backdrop-blur-sm rounded-full mb-3">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-sm font-semibold text-white uppercase tracking-wider">
                    Before
                  </span>
                </div>
                <p className="text-white/90 font-heading text-lg md:text-xl font-semibold drop-shadow-md">
                  {beforePlaceholderText}
                </p>
              </div>
            )}
          </div>
        )}
      </motion.div>

      {/* Labels pinned to edges */}
      <motion.div
        className="absolute top-4 left-4 z-10 pointer-events-none"
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.4 }}
      >
        <span className="px-3 py-1.5 bg-black/40 backdrop-blur-md text-white text-xs font-semibold uppercase tracking-wider rounded-full">
          {beforeLabel}
        </span>
      </motion.div>
      <motion.div
        className="absolute top-4 right-4 z-10 pointer-events-none"
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.4 }}
      >
        <span className="px-3 py-1.5 bg-white/30 backdrop-blur-md text-white text-xs font-semibold uppercase tracking-wider rounded-full">
          {afterLabel}
        </span>
      </motion.div>

      {/* Slider divider line */}
      <motion.div
        className="absolute top-0 bottom-0 z-20 pointer-events-none"
        style={{
          left: smoothX,
          x: "-50%",
          width: "3px",
        }}
      >
        {/* Vertical line */}
        <div className="absolute inset-0 bg-white shadow-[0_0_12px_rgba(255,255,255,0.5)]" />

        {/* Handle circle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
          {/* Pulsing ring (only when not interacted yet) */}
          {!hasInteracted && (
            <motion.div
              className="absolute inset-0 -m-2 rounded-full border-2 border-white/60"
              animate={{
                scale: [1, 1.6, 1],
                opacity: [0.6, 0, 0.6],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          )}

          <motion.div
            className="relative w-11 h-11 rounded-full bg-white flex items-center justify-center shadow-[0_2px_16px_rgba(0,0,0,0.25)]"
            whileHover={{ scale: 1.12 }}
            whileTap={{ scale: 0.95 }}
            animate={
              isDragging
                ? { scale: 1.05 }
                : {}
            }
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            {/* Arrows icon */}
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              className="text-primary"
            >
              <path
                d="M6 10L3 10M3 10L5.5 7.5M3 10L5.5 12.5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14 10L17 10M17 10L14.5 7.5M17 10L14.5 12.5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>
        </div>
      </motion.div>

      {/* Subtle gradient overlays for depth */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/10 via-transparent to-transparent z-[1]" />
    </div>
  );
}
