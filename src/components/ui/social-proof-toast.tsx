"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const firstNames = [
  "Michael", "Sarah", "David", "Jennifer", "Robert", "Lisa",
  "James", "Maria", "Carlos", "Amanda", "Kevin", "Ashley",
  "Brian", "Nicole", "Chris", "Rachel", "Daniel", "Laura",
  "Mark", "Emily", "Jason", "Stephanie", "Andrew", "Michelle",
];

const cities = [
  "Tampa", "Brandon", "Riverview", "St. Petersburg", "Clearwater",
  "Largo", "Lakeland", "Bradenton", "Sarasota", "Plant City",
  "Dunedin", "Winter Haven", "Palm Harbor", "Valrico", "Lutz",
  "Lakewood Ranch", "Tarpon Springs", "Seminole", "Venice", "Parrish",
];

const services = [
  "water softener installation",
  "whole house filtration system",
  "reverse osmosis system",
  "free water test",
  "water heater installation",
  "well water treatment",
  "leak repair",
  "JusiCare+ maintenance plan",
];

const timeAgo = [
  "2 hours ago",
  "4 hours ago",
  "6 hours ago",
  "yesterday",
  "this morning",
  "earlier today",
];

function getRandomItem<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateMessage() {
  return {
    name: getRandomItem(firstNames),
    city: getRandomItem(cities),
    service: getRandomItem(services),
    time: getRandomItem(timeAgo),
  };
}

export function SocialProofToast() {
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState(generateMessage);
  const [dismissed, setDismissed] = useState(false);

  const showToast = useCallback(() => {
    if (dismissed) return;
    setMessage(generateMessage());
    setVisible(true);
    setTimeout(() => setVisible(false), 5000);
  }, [dismissed]);

  useEffect(() => {
    // Initial delay of 15 seconds
    const initialTimer = setTimeout(() => {
      showToast();
    }, 15000);

    // Then every 25 seconds
    const interval = setInterval(() => {
      showToast();
    }, 25000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, [showToast]);

  const handleClose = () => {
    setVisible(false);
    setDismissed(true);
  };

  return (
    <AnimatePresence>
      {visible && !dismissed && (
        <motion.div
          className="fixed bottom-24 lg:bottom-6 left-4 z-40 max-w-xs w-full"
          initial={{ opacity: 0, x: -80, y: 10 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, x: -80 }}
          transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div
            className="relative rounded-xl border shadow-lg p-4 pr-10"
            style={{
              background: "var(--color-surface)",
              borderColor: "var(--color-border-light)",
            }}
          >
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-2 right-2 w-6 h-6 flex items-center justify-center rounded-full transition-colors"
              style={{ color: "var(--color-text-muted)" }}
              aria-label="Dismiss notification"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="flex items-start gap-3">
              {/* Icon */}
              <div
                className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center"
                style={{ background: "var(--color-accent-50)" }}
              >
                <svg className="w-4.5 h-4.5" style={{ color: "var(--color-accent)" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>

              {/* Text */}
              <div className="min-w-0">
                <p className="text-sm leading-snug" style={{ color: "var(--color-text)" }}>
                  <span className="font-semibold">{message.name}</span> in{" "}
                  <span className="font-semibold">{message.city}</span> just scheduled a{" "}
                  <span style={{ color: "var(--color-primary)" }}>{message.service}</span>
                </p>
                <p className="text-xs mt-1" style={{ color: "var(--color-text-tertiary)" }}>
                  {message.time}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
