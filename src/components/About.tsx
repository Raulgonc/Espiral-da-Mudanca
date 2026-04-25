'use client'

import { motion } from 'framer-motion'
import { Users, BarChart2, Leaf } from 'lucide-react'
import { useLanguage } from '@/lib/context/LanguageContext'

const pillarIcons = [Users, BarChart2, Leaf]

export default function About() {
  const { t } = useLanguage()

  return (
    <section
      id="sobre"
      className="py-24 px-6"
      style={{ backgroundColor: 'var(--brand-cream)' }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">

        {/* Left: text content */}
        <div className="lg:col-span-3 flex flex-col gap-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-5"
          >
            {/* Tag */}
            <span
              className="self-start px-4 py-1 rounded-full text-xs font-bold"
              style={{
                backgroundColor: 'var(--brand-yellow)',
                color: 'var(--brand-dark)',
                fontFamily: 'var(--font-heading)',
              }}
            >
              {t.about.title}
            </span>

            <p
              className="text-lg sm:text-xl leading-relaxed"
              style={{ color: 'var(--brand-body)', fontFamily: 'var(--font-dm-sans)' }}
            >
              {t.about.description}
            </p>
          </motion.div>

          {/* Pillars */}
          <div className="flex flex-col gap-6">
            {t.about.pillars.map((pillar, i) => {
              const Icon = pillarIcons[i]
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex gap-4 items-start p-5 rounded-2xl"
                  style={{ backgroundColor: 'rgba(245,200,0,0.08)', border: '1px solid rgba(245,200,0,0.2)' }}
                >
                  <div
                    className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: 'var(--brand-yellow)' }}
                  >
                    <Icon size={18} style={{ color: 'var(--brand-dark)' }} />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3
                      className="text-base font-bold"
                      style={{ color: 'var(--brand-body)', fontFamily: 'var(--font-heading)' }}
                    >
                      {pillar.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: 'var(--brand-muted)', fontFamily: 'var(--font-dm-sans)' }}
                    >
                      {pillar.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Right: decorative block */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-2 hidden lg:flex flex-col gap-4"
        >
          <div
            className="rounded-3xl p-8 flex flex-col gap-6"
            style={{
              background: 'linear-gradient(135deg, var(--brand-yellow), var(--brand-amber))',
            }}
          >
            {[
              { value: '200+', label: 'projetos entregues' },
              { value: '94%', label: 'taxa de adoção' },
              { value: '15', label: 'países atendidos' },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col gap-1 border-b border-black/10 pb-5 last:border-0 last:pb-0">
                <span
                  className="text-5xl font-extrabold"
                  style={{ color: 'var(--brand-dark)', fontFamily: 'var(--font-heading)' }}
                >
                  {stat.value}
                </span>
                <span
                  className="text-sm font-medium"
                  style={{ color: 'rgba(10,10,10,0.6)', fontFamily: 'var(--font-dm-sans)' }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
          <p
            className="text-xs text-center"
            style={{ color: 'var(--brand-muted)', fontFamily: 'var(--font-dm-sans)' }}
          >
            Pessoas. Processos. Inovação.
          </p>
        </motion.div>

      </div>
    </section>
  )
}
