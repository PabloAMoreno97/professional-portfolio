import { createContext, useContext, useState, type ReactNode } from 'react'
import type { Lang } from '../data/portfolio'

interface LangContextValue {
  lang: Lang
  toggle: () => void
}

const LangContext = createContext<LangContextValue>({ lang: 'en', toggle: () => {} })

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('en')
  const toggle = () => setLang((l) => (l === 'en' ? 'es' : 'en'))
  return <LangContext.Provider value={{ lang, toggle }}>{children}</LangContext.Provider>
}

export function useLang() {
  return useContext(LangContext)
}

/** Helper: picks the right string from a bilingual object */
export function t(obj: { en: string; es: string }, lang: Lang): string {
  return obj[lang]
}
