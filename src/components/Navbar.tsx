'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { useLanguage } from '@/lib/context/LanguageContext'

const navLinks = [
  { key: 'about' as const, href: '#sobre' },
  { key: 'services' as const, href: '#servicos' },
  { key: 'methodology' as const, href: '#metodologia' },
  { key: 'cases' as const, href: '#cases' },
  { key: 'insights' as const, href: '#insights' },
  { key: 'contact' as const, href: '#contato' },
]

export default function Navbar() {
  const { t, lang, toggle } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'backdrop-blur-md bg-white/90 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <a href="#" className="flex items-center gap-2 shrink-0">
          <SpiralIcon />
          <span
            className="text-base font-bold leading-tight"
            style={{
              fontFamily: 'var(--font-syne)',
              color: 'var(--brand-body)',
            }}
          >
            Espiral da Mudança
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-6">
          {navLinks.map(({ key, href }) => (
            <li key={key}>
              <a
                href={href}
                className="text-sm transition-colors duration-200 hover:opacity-70"
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  color: 'var(--brand-body)',
                }}
              >
                {t.nav[key]}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop right: toggle + CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <LanguageToggle lang={lang} toggle={toggle} />
          <a
            href="#contato"
            className="px-4 py-2 rounded-full text-sm font-bold transition-colors duration-200"
            style={{
              fontFamily: 'var(--font-syne)',
              backgroundColor: 'var(--brand-yellow)',
              color: 'var(--brand-dark)',
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = 'var(--brand-amber)')
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = 'var(--brand-yellow)')
            }
          >
            {t.nav.cta}
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 rounded-md"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {menuOpen ? (
            <X size={22} style={{ color: 'var(--brand-body)' }} />
          ) : (
            <Menu size={22} style={{ color: 'var(--brand-body)' }} />
          )}
        </button>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div
          className="lg:hidden px-6 pb-6 pt-2 flex flex-col gap-4 bg-white/95 backdrop-blur-md shadow-md"
        >
          {navLinks.map(({ key, href }) => (
            <a
              key={key}
              href={href}
              onClick={closeMenu}
              className="text-base py-1 border-b border-gray-100 transition-colors duration-200"
              style={{
                fontFamily: 'var(--font-dm-sans)',
                color: 'var(--brand-body)',
              }}
            >
              {t.nav[key]}
            </a>
          ))}
          <div className="flex items-center justify-between pt-2">
            <LanguageToggle lang={lang} toggle={toggle} />
            <a
              href="#contato"
              onClick={closeMenu}
              className="px-4 py-2 rounded-full text-sm font-bold"
              style={{
                fontFamily: 'var(--font-syne)',
                backgroundColor: 'var(--brand-yellow)',
                color: 'var(--brand-dark)',
              }}
            >
              {t.nav.cta}
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

function LanguageToggle({ lang, toggle }: { lang: 'pt' | 'en'; toggle: () => void }) {
  return (
    <button
      onClick={toggle}
      className="flex items-center rounded-full border text-xs font-bold overflow-hidden"
      style={{ borderColor: 'var(--brand-yellow)' }}
      aria-label="Trocar idioma"
    >
      {(['pt', 'en'] as const).map((l) => (
        <span
          key={l}
          className="px-3 py-1 transition-colors duration-200"
          style={{
            backgroundColor: lang === l ? 'var(--brand-yellow)' : 'transparent',
            color: lang === l ? 'var(--brand-dark)' : 'var(--brand-muted)',
            fontFamily: 'var(--font-syne)',
          }}
        >
          {l.toUpperCase()}
        </span>
      ))}
    </button>
  )
}

function SpiralIcon() {
  return (
    <div className="relative w-7 h-7 shrink-0">
      <style>{`
        @keyframes spiral-spin { to { transform: rotate(360deg); } }
        .spiral-ring { position: absolute; border-radius: 50%; animation: spiral-spin linear infinite; }
      `}</style>
      <span
        className="spiral-ring"
        style={{
          width: 28, height: 28, top: 0, left: 0,
          border: '3px solid var(--brand-yellow)',
          animationDuration: '3s',
          opacity: 0.9,
        }}
      />
      <span
        className="spiral-ring"
        style={{
          width: 18, height: 18, top: 5, left: 5,
          border: '2.5px solid var(--brand-amber)',
          animationDuration: '2s',
          animationDirection: 'reverse',
        }}
      />
      <span
        className="spiral-ring"
        style={{
          width: 8, height: 8, top: 10, left: 10,
          backgroundColor: 'var(--brand-gold)',
          animationDuration: '1.5s',
        }}
      />
    </div>
  )
}
