import { useI18n } from './I18nProvider'

type Localized<T> = T | { es: T; en: T }

export function getLocalizedText<T extends string>(value: Localized<T>, lang: 'es' | 'en'): T {
  if (value && typeof value === 'object' && 'es' in value && 'en' in value) {
    return (value as any)[lang] as T
  }
  return value as T
}

export function getLocalizedArray(value: Localized<string[]>, lang: 'es' | 'en'): string[] {
  if (value && typeof value === 'object' && 'es' in value && 'en' in value) {
    return (value as any)[lang] as string[]
  }
  return (value as string[]) ?? []
}

export function useLocalize() {
  const { language } = useI18n()
  return {
    lang: language,
    text: <T extends string>(value: Localized<T>) => getLocalizedText(value, language),
    list: (value: Localized<string[]>) => getLocalizedArray(value, language)
  }
}


