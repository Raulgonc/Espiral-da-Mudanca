'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, Target, Info } from 'lucide-react'
import { useLanguage } from '@/lib/context/LanguageContext'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

type Step = {
  label: string
  title: string
  description: string
  details: {
    description: string
    activities: string[]
    frameworks: string[]
    outcome: string
  }
}

export default function Methodology() {
  const { t } = useLanguage()
  const [activeStep, setActiveStep] = useState<Step | null>(null)
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const openStep = (step: Step, index: number) => {
    setActiveStep(step)
    setActiveIndex(index)
  }

  return (
    <section
      id="metodologia"
      className="py-24 px-6"
      style={{ backgroundColor: 'var(--brand-cream)' }}
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-16">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-3 text-center"
        >
          <h2
            className="text-4xl sm:text-5xl font-extrabold"
            style={{ color: 'var(--brand-body)', fontFamily: 'var(--font-heading)' }}
          >
            {t.methodology.title}
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: 'var(--brand-muted)', fontFamily: 'var(--font-dm-sans)' }}
          >
            {t.methodology.subtitle}
          </p>
        </motion.div>

        {/* Steps */}
        <div className="flex flex-col lg:flex-row gap-0">
          {t.methodology.steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group flex-1 flex flex-col lg:items-center relative"
            >
              {/* Connector line */}
              {i < t.methodology.steps.length - 1 && (
                <>
                  <div
                    className="hidden lg:block absolute top-8 left-1/2 w-full h-px"
                    style={{ backgroundColor: 'rgba(245,200,0,0.25)', zIndex: 0 }}
                  />
                  <div
                    className="lg:hidden absolute left-[19px] top-10 w-px"
                    style={{ height: 'calc(100% - 40px)', backgroundColor: 'rgba(245,200,0,0.25)', zIndex: 0 }}
                  />
                </>
              )}

              {/* Step card — clicável */}
              <button
                onClick={() => openStep(step, i)}
                className="relative z-10 flex flex-row lg:flex-col items-start lg:items-center gap-4 lg:gap-3 p-4 lg:p-6 rounded-2xl w-full text-left transition-all duration-300 hover:bg-white hover:shadow-md cursor-pointer"
              >
                {/* Number bubble */}
                <div
                  className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-extrabold text-sm"
                  style={{
                    backgroundColor: 'var(--brand-yellow)',
                    color: 'var(--brand-dark)',
                    fontFamily: 'var(--font-heading)',
                  }}
                >
                  {String(i + 1).padStart(2, '0')}
                </div>

                <div className="flex flex-col gap-1 lg:text-center flex-1">
                  <span
                    className="self-start lg:self-center px-3 py-0.5 rounded-full text-xs font-bold mb-1"
                    style={{
                      backgroundColor: 'rgba(245,200,0,0.15)',
                      color: 'var(--brand-amber)',
                      fontFamily: 'var(--font-heading)',
                    }}
                  >
                    {step.label}
                  </span>
                  <h3
                    className="text-base font-bold"
                    style={{ color: 'var(--brand-body)', fontFamily: 'var(--font-heading)' }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: 'var(--brand-muted)', fontFamily: 'var(--font-dm-sans)' }}
                  >
                    {step.description}
                  </p>
                  <span
                    className="mt-2 flex items-center gap-1 text-xs font-semibold lg:justify-center"
                    style={{ color: 'var(--brand-amber)', fontFamily: 'var(--font-heading)' }}
                  >
                    <Info size={12} /> Ver detalhes
                  </span>
                </div>
              </button>
            </motion.div>
          ))}
        </div>

        {/* References */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center text-xs"
          style={{ color: 'var(--brand-muted)', fontFamily: 'var(--font-dm-sans)' }}
        >
          {t.methodology.references}
        </motion.p>
      </div>

      {/* Dialog */}
      <Dialog open={!!activeStep} onOpenChange={(open) => !open && setActiveStep(null)}>
        <DialogContent className="max-w-lg max-h-[85vh] overflow-y-auto">
          {activeStep && activeIndex !== null && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-4 mb-2">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center font-extrabold text-base shrink-0"
                    style={{
                      backgroundColor: 'var(--brand-yellow)',
                      color: 'var(--brand-dark)',
                      fontFamily: 'var(--font-heading)',
                    }}
                  >
                    {String(activeIndex + 1).padStart(2, '0')}
                  </div>
                  <DialogTitle
                    className="text-2xl font-extrabold"
                    style={{ color: 'var(--brand-body)', fontFamily: 'var(--font-heading)' }}
                  >
                    {activeStep.title}
                  </DialogTitle>
                </div>
              </DialogHeader>

              <div className="flex flex-col gap-6 mt-2">
                {/* Description */}
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: 'var(--brand-body)', fontFamily: 'var(--font-dm-sans)' }}
                >
                  {activeStep.details.description}
                </p>

                {/* Activities */}
                <div className="flex flex-col gap-3">
                  <h4
                    className="text-sm font-bold uppercase tracking-wider"
                    style={{ color: 'var(--brand-muted)', fontFamily: 'var(--font-heading)' }}
                  >
                    Atividades-chave
                  </h4>
                  <ul className="flex flex-col gap-2">
                    {activeStep.details.activities.map((a, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div
                          className="shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
                          style={{ backgroundColor: 'var(--brand-yellow)' }}
                        >
                          <Check size={11} style={{ color: 'var(--brand-dark)' }} />
                        </div>
                        <span
                          className="text-sm"
                          style={{ color: 'var(--brand-body)', fontFamily: 'var(--font-dm-sans)' }}
                        >
                          {a}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Frameworks */}
                <div className="flex flex-col gap-3">
                  <h4
                    className="text-sm font-bold uppercase tracking-wider"
                    style={{ color: 'var(--brand-muted)', fontFamily: 'var(--font-heading)' }}
                  >
                    Frameworks & Ferramentas
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeStep.details.frameworks.map((f, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full text-xs font-semibold border"
                        style={{
                          borderColor: 'var(--brand-yellow)',
                          color: 'var(--brand-amber)',
                          backgroundColor: 'rgba(245,200,0,0.08)',
                          fontFamily: 'var(--font-heading)',
                        }}
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Outcome */}
                <div
                  className="flex items-start gap-3 p-4 rounded-xl"
                  style={{ backgroundColor: 'rgba(245,200,0,0.1)', border: '1px solid rgba(245,200,0,0.3)' }}
                >
                  <Target size={18} style={{ color: 'var(--brand-amber)', flexShrink: 0, marginTop: 2 }} />
                  <div className="flex flex-col gap-1">
                    <span
                      className="text-xs font-bold uppercase tracking-wider"
                      style={{ color: 'var(--brand-amber)', fontFamily: 'var(--font-heading)' }}
                    >
                      Resultado esperado
                    </span>
                    <span
                      className="text-sm font-medium"
                      style={{ color: 'var(--brand-body)', fontFamily: 'var(--font-dm-sans)' }}
                    >
                      {activeStep.details.outcome}
                    </span>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
