'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/lib/context/LanguageContext'

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
})

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ backgroundColor: 'var(--brand-dark)', paddingTop: '64px' }}
    >
      {/* Background spiral decoration */}
      <SpiralBackground />

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 flex flex-col gap-8">
        <motion.h1
          {...fadeUp(0)}
          className="max-w-4xl text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight text-white"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          {t.hero.headline}
        </motion.h1>

        <motion.p
          {...fadeUp(0.15)}
          className="max-w-2xl text-xl sm:text-2xl font-light leading-relaxed"
          style={{ color: 'var(--brand-muted)', fontFamily: 'var(--font-dm-sans)' }}
        >
          {t.hero.subheadline}
        </motion.p>

        <motion.div {...fadeUp(0.3)} className="flex flex-wrap gap-4">
          <a
            href="#metodologia"
            className="px-6 py-3 rounded-full font-bold text-sm transition-colors duration-200"
            style={{
              backgroundColor: 'var(--brand-yellow)',
              color: 'var(--brand-dark)',
              fontFamily: 'var(--font-heading)',
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = 'var(--brand-amber)')
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = 'var(--brand-yellow)')
            }
          >
            {t.hero.cta_primary}
          </a>
          <a
            href="#cases"
            className="px-6 py-3 rounded-full font-bold text-sm border transition-colors duration-200"
            style={{
              borderColor: 'var(--brand-yellow)',
              color: 'var(--brand-yellow)',
              fontFamily: 'var(--font-heading)',
              backgroundColor: 'transparent',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--brand-yellow)'
              e.currentTarget.style.color = 'var(--brand-dark)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent'
              e.currentTarget.style.color = 'var(--brand-yellow)'
            }}
          >
            {t.hero.cta_secondary}
          </a>
        </motion.div>
      </div>

      {/* Metrics strip */}
      <motion.div
        {...fadeUp(0.45)}
        className="relative z-10 mt-auto"
        style={{
          backgroundColor: 'rgba(255,255,255,0.04)',
          borderTop: '1px solid rgba(255,255,255,0.08)',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-2 sm:grid-cols-4 gap-6">
          {t.hero.metrics.map((m, i) => (
            <div key={i} className="flex flex-col items-center sm:items-start gap-1">
              <span
                className="text-3xl font-extrabold"
                style={{ color: 'var(--brand-yellow)', fontFamily: 'var(--font-heading)' }}
              >
                {m.value}
              </span>
              <span
                className="text-sm font-light"
                style={{ color: 'var(--brand-muted)', fontFamily: 'var(--font-dm-sans)' }}
              >
                {m.label}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

function SpiralBackground() {
  const circles = [320, 240, 160, 80]
  return (
    <div
      className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none"
      aria-hidden="true"
    >
      {circles.map((size, i) => (
        <div
          key={i}
          className="absolute rounded-full border"
          style={{
            width: size,
            height: size,
            top: '50%',
            right: -size / 3,
            transform: 'translateY(-50%)',
            borderColor: `rgba(245, 200, 0, ${0.04 + i * 0.03})`,
          }}
        />
      ))}
    </div>
  )
}
