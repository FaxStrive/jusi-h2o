'use client'

import { useState, useRef, FormEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, ArrowRight, CheckCircle, Loader2 } from 'lucide-react'
import { trackFormSubmit, trackQuoteRequest } from '@/lib/analytics'

const SERVICES = [
  'Water Softeners',
  'Whole House Filtration',
  'Reverse Osmosis',
  'Water Heater Installation',
  'Leak Repair',
  'Commercial Plumbing',
  'Water Testing',
  'Well Water Treatment',
  'JusiCare+',
  'Other',
]

interface FormData {
  name: string
  email: string
  phone: string
  service: string
}

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 80 : -80,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -80 : 80,
    opacity: 0,
  }),
}

export function BookingForm() {
  const [step, setStep] = useState(1)
  const [direction, setDirection] = useState(1)
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const formRef = useRef<HTMLFormElement>(null)

  const CALENDAR_URL = 'https://api.leadconnectorhq.com/widget/booking/k03mcOdwKaxnJZFnnhAy'

  function buildCalendarUrl() {
    const params = new URLSearchParams()
    if (formData.name) params.set('name', formData.name)
    if (formData.email) params.set('email', formData.email)
    if (formData.phone) params.set('phone', formData.phone)
    return `${CALENDAR_URL}?${params.toString()}`
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setSubmitError('')
    setIsSubmitting(true)

    try {
      const res = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.error || 'Submission failed')
      }

      trackFormSubmit('booking-form', { service: formData.service })
      trackQuoteRequest(formData.service)
      setDirection(1)
      setStep(2)
    } catch (err) {
      setSubmitError(
        err instanceof Error ? err.message : 'Something went wrong. Please try again.'
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  function goBack() {
    setDirection(-1)
    setStep(1)
  }

  const inputClasses =
    'w-full px-4 py-3 rounded-[var(--radius-brand)] border border-[var(--color-border)] bg-white text-[var(--color-text)] placeholder:text-[var(--color-text-muted)] outline-none transition-all duration-200 focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary-100)] font-[var(--font-inter)]'

  const labelClasses =
    'block text-sm font-semibold text-[var(--color-text-secondary)] mb-1.5'

  return (
    <div className="bg-white rounded-brand-xl border border-border-light overflow-hidden">
      {/* Step indicator */}
      <div className="px-6 pt-6 pb-4 border-b border-border-light">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors duration-300 ${
                step >= 1
                  ? 'bg-[var(--color-primary)] text-white'
                  : 'bg-[var(--color-surface-tertiary)] text-[var(--color-text-muted)]'
              }`}
            >
              {step > 1 ? <CheckCircle className="w-4 h-4" /> : '1'}
            </div>
            <span
              className={`text-sm font-semibold transition-colors duration-300 ${
                step >= 1
                  ? 'text-[var(--color-text)]'
                  : 'text-[var(--color-text-muted)]'
              }`}
            >
              Your Info
            </span>
          </div>
          <div className="flex-1 h-0.5 rounded-full bg-[var(--color-surface-tertiary)] overflow-hidden">
            <motion.div
              className="h-full bg-[var(--color-primary)]"
              initial={{ width: '0%' }}
              animate={{ width: step >= 2 ? '100%' : '0%' }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            />
          </div>
          <div className="flex items-center gap-2">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors duration-300 ${
                step >= 2
                  ? 'bg-[var(--color-primary)] text-white'
                  : 'bg-[var(--color-surface-tertiary)] text-[var(--color-text-muted)]'
              }`}
            >
              2
            </div>
            <span
              className={`text-sm font-semibold transition-colors duration-300 ${
                step >= 2
                  ? 'text-[var(--color-text)]'
                  : 'text-[var(--color-text-muted)]'
              }`}
            >
              Pick a Time
            </span>
          </div>
        </div>
      </div>

      {/* Content area */}
      <div className="relative overflow-hidden" style={{ minHeight: step === 2 ? 620 : 'auto' }}>
        <AnimatePresence mode="wait" custom={direction}>
          {step === 1 && (
            <motion.div
              key="step1"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="p-6"
            >
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="booking-name" className={labelClasses}>
                    Full Name
                  </label>
                  <input
                    id="booking-name"
                    type="text"
                    required
                    placeholder="John Smith"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, name: e.target.value }))
                    }
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label htmlFor="booking-email" className={labelClasses}>
                    Email Address
                  </label>
                  <input
                    id="booking-email"
                    type="email"
                    required
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, email: e.target.value }))
                    }
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label htmlFor="booking-phone" className={labelClasses}>
                    Phone Number
                  </label>
                  <input
                    id="booking-phone"
                    type="tel"
                    required
                    placeholder="(813) 555-0123"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, phone: e.target.value }))
                    }
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label htmlFor="booking-service" className={labelClasses}>
                    Service Needed
                  </label>
                  <select
                    id="booking-service"
                    required
                    value={formData.service}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        service: e.target.value,
                      }))
                    }
                    className={`${inputClasses} appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%3E%3Cpath%20fill%3D%22%237A94A8%22%20d%3D%22M6%208L1%203h10z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:12px] bg-[right_16px_center] bg-no-repeat pr-10`}
                  >
                    <option value="">Select a service...</option>
                    {SERVICES.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                {submitError && (
                  <p className="text-red-600 text-sm">{submitError}</p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 bg-[var(--color-accent)] hover:brightness-110 text-white font-bold py-3.5 px-6 rounded-[var(--radius-brand)] transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Continue to Schedule
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>

                <p className="text-center text-xs text-[var(--color-text-muted)]">
                  Free consultation -- no obligation
                </p>
              </form>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="p-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <button
                    onClick={goBack}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-primary)] hover:text-[var(--color-primary-dark)] transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back
                  </button>
                  <div className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)]">
                    <CheckCircle className="w-4 h-4 text-[var(--color-accent)]" />
                    <span>
                      Info saved for{' '}
                      <span className="font-semibold text-[var(--color-text)]">
                        {formData.name.split(' ')[0] || 'you'}
                      </span>
                    </span>
                  </div>
                </div>

                <div
                  className="rounded-[var(--radius-brand)] border border-[var(--color-border-light)] overflow-hidden bg-[var(--color-surface-secondary)]"
                  style={{ minHeight: 550 }}
                >
                  <iframe
                    src={buildCalendarUrl()}
                    style={{
                      width: '100%',
                      height: 550,
                      border: 'none',
                    }}
                    title="Schedule appointment"
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
