'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { RefreshCw, Cpu, Rocket, MessageSquare, GraduationCap, ClipboardList, Check, Target, Users, type LucideIcon } from 'lucide-react'
import { useLanguage } from '@/lib/context/LanguageContext'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

const icons: LucideIcon[] = [RefreshCw, Cpu, Rocket, MessageSquare, GraduationCap, ClipboardList]

type ServiceItem = {
  title: string
  description: string
  details: {
    description: string
    deliverables: string[]
    forWho: string
    outcome: string
  }
}

export default function Services() {
  const { t } = useLanguage()
  const [activeService, setActiveService] = useState<{ item: ServiceItem; icon: LucideIcon } | null>(null)

  return (
    <section
      id="servicos"
      className="py-24 px-6"
      style={{ backgroundColor: 'var(--brand-dark)' }}
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-14">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-3 text-center"
        >
          <h2
            className="text-4xl sm:text-5xl font-extrabold text-white"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {t.services.title}
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: 'var(--brand-muted)', fontFamily: 'var(--font-dm-sans)' }}
          >
            {t.services.subtitle}
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.services.items.map((item, i) => {
            const Icon = icons[i]
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <ServiceCard
                  icon={Icon}
                  title={item.title}
                  description={item.description}
                  cta={t.services.cta}
                  onClick={() => setActiveService({ item, icon: Icon })}
                />
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Dialog */}
      <Dialog open={!!activeService} onOpenChange={(open) => !open && setActiveService(null)}>
        <DialogContent className="max-w-lg max-h-[85vh] overflow-y-auto">
          {activeService && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-4 mb-2">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: 'var(--brand-yellow)' }}
                  >
                    <activeService.icon size={22} style={{ color: 'var(--brand-dark)' }} />
                  </div>
                  <DialogTitle
                    className="text-xl font-extrabold leading-tight"
                    style={{ color: 'var(--brand-body)', fontFamily: 'var(--font-heading)' }}
                  >
                    {activeService.item.title}
                  </DialogTitle>
                </div>
              </DialogHeader>

              <div className="flex flex-col gap-6 mt-2">
                {/* Description */}
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: 'var(--brand-body)', fontFamily: 'var(--font-dm-sans)' }}
                >
                  {activeService.item.details.description}
                </p>

                {/* Deliverables */}
                <div className="flex flex-col gap-3">
                  <h4
                    className="text-xs font-bold uppercase tracking-wider"
                    style={{ color: 'var(--brand-muted)', fontFamily: 'var(--font-heading)' }}
                  >
                    Entregáveis
                  </h4>
                  <ul className="flex flex-col gap-2">
                    {activeService.item.details.deliverables.map((d, i) => (
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
                          {d}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* For who */}
                <div className="flex flex-col gap-2">
                  <h4
                    className="text-xs font-bold uppercase tracking-wider"
                    style={{ color: 'var(--brand-muted)', fontFamily: 'var(--font-heading)' }}
                  >
                    Para quem é indicado
                  </h4>
                  <div
                    className="flex items-start gap-3 px-4 py-3 rounded-xl"
                    style={{ backgroundColor: 'rgba(245,200,0,0.08)', border: '1px solid rgba(245,200,0,0.2)' }}
                  >
                    <Users size={16} style={{ color: 'var(--brand-amber)', flexShrink: 0, marginTop: 2 }} />
                    <span
                      className="text-sm"
                      style={{ color: 'var(--brand-body)', fontFamily: 'var(--font-dm-sans)' }}
                    >
                      {activeService.item.details.forWho}
                    </span>
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
                      {activeService.item.details.outcome}
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

function ServiceCard({
  icon: Icon,
  title,
  description,
  cta,
  onClick,
}: {
  icon: LucideIcon
  title: string
  description: string
  cta: string
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      className="group flex flex-col gap-4 p-6 rounded-2xl w-full text-left transition-all duration-300"
      style={{
        backgroundColor: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.08)',
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget
        el.style.borderColor = 'var(--brand-yellow)'
        el.style.transform = 'translateY(-4px)'
        el.style.boxShadow = '0 8px 32px rgba(245,200,0,0.12)'
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget
        el.style.borderColor = 'rgba(255,255,255,0.08)'
        el.style.transform = 'translateY(0)'
        el.style.boxShadow = 'none'
      }}
    >
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
        style={{ backgroundColor: 'rgba(245,200,0,0.15)' }}
      >
        <Icon size={18} style={{ color: 'var(--brand-yellow)' }} />
      </div>

      <div className="flex flex-col gap-2 flex-1">
        <h3
          className="text-base font-bold text-white"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          {title}
        </h3>
        <p
          className="text-sm leading-relaxed flex-1"
          style={{ color: 'var(--brand-muted)', fontFamily: 'var(--font-dm-sans)' }}
        >
          {description}
        </p>
      </div>

      <span
        className="text-sm font-semibold"
        style={{ color: 'var(--brand-yellow)', fontFamily: 'var(--font-heading)' }}
      >
        {cta}
      </span>
    </button>
  )
}
