import cv from '../data/cv.json'
import { useI18n } from '../i18n/I18nProvider'
import { getLocalizedArray, getLocalizedText } from '../i18n/localize'

export default function Experiencia() {
  const { t, language } = useI18n() as any
  return (
    <section className="space-y-10">
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">{t('section.experience')}</h2>
        <div className="grid gap-4">
          {cv.experience?.map((job) => {
            const j = job as any
            const rightMeta = (j.duration ?? '')
            return (
              <article key={j.title + j.company} className="rounded-lg border border-neutral-200 dark:border-neutral-800 p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">{getLocalizedText(j.title, language)} — {j.company}</h3>
                  <span className="text-xs text-neutral-500">{rightMeta}</span>
                </div>
                <ul className="mt-2 list-disc pl-5 space-y-1 text-sm text-neutral-600 dark:text-neutral-300">
                  {getLocalizedArray(j.highlights, language).map((h: string) => (<li key={h}>{h}</li>))}
                </ul>
              </article>
            )
          })}
        </div>
      </div>

      {cv.education && cv.education.length > 0 && (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">{t('section.education')}</h2>
          <div className="grid gap-4">
            {cv.education.map((ed) => {
              const e = ed as any
              const dateText = `${e.start ?? ''}${(e.start || e.end) ? ' — ' : ''}${e.end ?? ''}`
              const edHighlights = (getLocalizedArray(e.highlights, language) ?? getLocalizedArray(e.courses, language) ?? getLocalizedArray(e.details, language)) as string[] | undefined
              return (
                <article key={e.school + e.degree + (e.start ?? '')} className="rounded-lg border border-neutral-200 dark:border-neutral-800 p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">{getLocalizedText(e.degree, language)} — {e.school}</h3>
                    <span className="text-xs text-neutral-500">{dateText}</span>
                  </div>
                  {edHighlights && edHighlights.length > 0 && (
                    <ul className="mt-2 list-disc pl-5 space-y-1 text-sm text-neutral-600 dark:text-neutral-300">
                      {edHighlights.map((item) => (<li key={item}>{item}</li>))}
                    </ul>
                  )}
                </article>
              )
            })}
          </div>
        </div>
      )}
    </section>
  )
}


