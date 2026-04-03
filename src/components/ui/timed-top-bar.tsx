'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Phone } from 'lucide-react'

const SESSION_KEY = 'jusi_top_bar_closed'

export function TimedTopBar() {
  const [show, setShow] = useState(false)
  const dismissed = useRef(false)

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY)) return
    const timer = setTimeout(() => {
      if (!dismissed.current) setShow(true)
    }, 5000)
    return () => clearTimeout(timer)
  }, [])

  const handleClose = () => {
    dismissed.current = true
    setShow(false)
    sessionStorage.setItem(SESSION_KEY, 'true')
  }

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="overflow-hidden"
        >
          <div
            className="relative py-2.5 px-4 md:px-8"
            style={{
              background: 'linear-gradient(135deg, #145273 0%, #1B6B93 40%, #2E8B57 100%)',
            }}
          >
            <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
              <motion.p
                className="text-white font-bold text-xs md:text-sm flex-1 text-center md:text-left"
                style={{ textShadow: '0 0 20px rgba(255,255,255,0.3)' }}
                animate={{
                  textShadow: [
                    '0 0 20px rgba(255,255,255,0.3)',
                    '0 0 40px rgba(255,255,255,0.6)',
                    '0 0 20px rgba(255,255,255,0.3)',
                  ],
                }}
                transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
              >
                Limited Time: Free Water Test for First-Time Customers!
              </motion.p>

              <a
                href="tel:+18133030515"
                className="hidden md:flex items-center gap-1.5 text-white font-semibold text-sm shrink-0 hover:underline"
              >
                <Phone className="w-4 h-4" />
                (813) 303-0515
              </a>

              <button
                onClick={handleClose}
                className="text-white/70 hover:text-white transition-colors shrink-0"
                aria-label="Close bar"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
