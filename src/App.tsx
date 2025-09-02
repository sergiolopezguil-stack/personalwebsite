import './index.css'
import cv from './data/cv.json'
import { useI18n } from './i18n/I18nProvider'
import { getLocalizedArray, getLocalizedText } from './i18n/localize'

function App() {
  const { language } = useI18n() as any
  return (
    <div className="min-h-dvh bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
      <header className="sticky top-0 z-10 backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:supports-[backdrop-filter]:bg-neutral-950/70 border-b border-neutral-200 dark:border-neutral-800">
        <nav className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
          <a href="#" className="font-semibold tracking-tight">{cv.name} — CV</a>
          <div className="flex items-center gap-4 text-sm">
            <a href="#sobre-mi" className="hover:text-primary">Sobre mí</a>
            <a href="#experiencia" className="hover:text-primary">Experiencia</a>
            <a href="#proyectos" className="hover:text-primary">Proyectos</a>
            <a href="#habilidades" className="hover:text-primary">Habilidades</a>
            <a href="#contacto" className="hover:text-primary">Contacto</a>
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12 space-y-24">
        <section id="hero" className="text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">{cv.name}</h1>
          <p className="mt-4 text-base sm:text-lg text-neutral-600 dark:text-neutral-300">{getLocalizedText(cv.role as any, language)}</p>
          <div className="mt-6 flex justify-center gap-3">
            <a href="#contacto" className="inline-flex items-center rounded-md bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 px-4 py-2 text-sm font-medium hover:opacity-90">Contáctame</a>
            <a href="#proyectos" className="inline-flex items-center rounded-md border border-neutral-300 dark:border-neutral-700 px-4 py-2 text-sm font-medium hover:bg-neutral-50 dark:hover:bg-neutral-900">Ver proyectos</a>
          </div>
        </section>

        <section id="sobre-mi" className="space-y-3">
          <h2 className="text-2xl font-bold">Sobre mí</h2>
          <p className="text-neutral-700 dark:text-neutral-300">{getLocalizedText(cv.summary as any, language)}</p>
        </section>

        <section id="experiencia" className="space-y-6">
          <h2 className="text-2xl font-bold">Experiencia</h2>
          <div className="grid gap-4">
            {cv.experience?.map((job) => {
              const j = job as any
              const hasDates = Boolean(j.start || j.end)
              const rightMeta = hasDates ? `${j.start ?? ''} — ${j.end ?? ''}` : (j.duration ?? '')
              return (
                <article key={`${getLocalizedText(j.title, language)}-${j.company}`} className="rounded-lg border border-neutral-200 dark:border-neutral-800 p-4">
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
        </section>

        <section id="proyectos" className="space-y-6">
          <h2 className="text-2xl font-bold">Proyectos</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {cv.projects?.map((p) => (
              <article key={getLocalizedText((p as any).name, language)} className="rounded-lg border border-neutral-200 dark:border-neutral-800 p-4">
                <h3 className="font-semibold">{getLocalizedText((p as any).name, language)}</h3>
                <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">{getLocalizedText((p as any).description, language)}</p>
                <div className="mt-3 flex gap-2 text-xs text-neutral-500">
                  {p.tech?.map((t: string) => (
                    <span key={t} className="rounded bg-neutral-100 dark:bg-neutral-900 px-2 py-0.5">{t}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="habilidades" className="space-y-4">
          <h2 className="text-2xl font-bold">Habilidades</h2>
          <ul className="flex flex-wrap gap-2 text-sm text-neutral-700 dark:text-neutral-300">
            {cv.skills?.map((s: string) => (
              <li key={s} className="rounded bg-neutral-100 dark:bg-neutral-900 px-2 py-0.5">{s}</li>
            ))}
          </ul>
        </section>

        <section id="contacto" className="space-y-3">
          <h2 className="text-2xl font-bold">Contacto</h2>
          <p className="text-neutral-700 dark:text-neutral-300">Email: <a className="text-primary underline" href={`mailto:${cv.email}`}>{cv.email}</a></p>
          <p className="text-neutral-700 dark:text-neutral-300">LinkedIn: <a className="text-primary underline" href={cv.linkedin} target="_blank" rel="noreferrer noopener">{cv.linkedin}</a></p>
        </section>
      </main>

      <footer className="border-t border-neutral-200 dark:border-neutral-800 py-6 mt-12">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-sm text-neutral-500">
          © {new Date().getFullYear()} {cv.name}. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  )
}

export default App
