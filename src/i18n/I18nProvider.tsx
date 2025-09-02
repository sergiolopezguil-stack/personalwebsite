import { createContext, useContext, useMemo, useState, PropsWithChildren, useEffect } from 'react'
import es from './es.json'
import en from './en.json'

type Language = 'es' | 'en'

type Dictionaries = {
  [key in Language]: Record<string, string>
}

const dictionaries: Dictionaries = { es, en }

type I18nContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)

export function I18nProvider({ children }: PropsWithChildren) {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('lang') as Language | null
    return saved ?? 'es'
  })

  useEffect(() => {
    localStorage.setItem('lang', language)
  }, [language])

  const setLanguage = (lang: Language) => setLanguageState(lang)

  const t = useMemo(() => {
    const dict = dictionaries[language] ?? dictionaries.es
    return (key: string) => dict[key] ?? key
  }, [language])

  const value = useMemo(() => ({ language, setLanguage, t }), [language, t])

  return (
    <I18nContext.Provider value={value}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n must be used within I18nProvider')
  return ctx
}


