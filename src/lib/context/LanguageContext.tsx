'use client'

import { createContext, useContext, useState } from 'react'
import { pt, en, type Translations } from '@/lib/i18n'

type Lang = 'pt' | 'en'

type LanguageContextType = {
  lang: Lang
  t: Translations
  toggle: () => void
}

const LanguageContext = createContext<LanguageContextType | null>(null)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>('pt')
  const t = lang === 'pt' ? pt : en
  const toggle = () => setLang((l) => (l === 'pt' ? 'en' : 'pt'))

  return (
    <LanguageContext.Provider value={{ lang, t, toggle }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage(): LanguageContextType {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
