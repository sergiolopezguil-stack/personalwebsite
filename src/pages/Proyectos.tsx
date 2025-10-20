import cv from '../data/cv.json'
import { useI18n } from '../i18n/I18nProvider'
import { getLocalizedText } from '../i18n/localize'
import { FaGitlab, FaExternalLinkAlt, FaStar, FaDownload } from 'react-icons/fa'

export default function Proyectos() {
  const { language, t } = useI18n() as any
  return (
    <div className="space-y-12">
      {/* Dashboard GitLab */}
      <section className="space-y-4">
        <div>
          <h2 className="text-2xl font-bold">{t('projects.dashboard.title')}</h2>
          <p className="mt-2 text-neutral-600 dark:text-neutral-300">{t('projects.dashboard.description')}</p>
        </div>
        <a 
          href={cv.gitlab} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 rounded-lg border border-neutral-200 dark:border-neutral-800 p-6 hover:border-primary hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-all group"
        >
          <FaGitlab className="text-4xl text-orange-500 group-hover:scale-110 transition-transform" />
          <div className="flex-1">
            <h3 className="font-semibold text-lg">{t('projects.dashboard.button')}</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-300 mt-1">{cv.gitlab}</p>
          </div>
          <FaExternalLinkAlt className="text-neutral-400 group-hover:text-primary transition-colors" />
        </a>
      </section>

      {/* Proyecto Destacado */}
      <section className="space-y-4">
        <div>
          <div className="flex items-center gap-2">
            <FaStar className="text-yellow-500" />
            <h2 className="text-2xl font-bold">{t('projects.featured.title')}</h2>
          </div>
          <p className="mt-2 text-neutral-600 dark:text-neutral-300">{t('projects.featured.description')}</p>
        </div>
        <a 
          href="https://gitlab.com/sergio.lopez.guil/archiver4"
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-lg border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-primary/10 p-6 hover:border-primary hover:shadow-lg transition-all group"
        >
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
              <FaGitlab className="text-2xl text-primary" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{t('projects.featured.archiver4.name')}</h3>
                <FaExternalLinkAlt className="text-sm text-neutral-400 group-hover:text-primary transition-colors" />
              </div>
              <p className="text-neutral-600 dark:text-neutral-300 mb-3">{t('projects.featured.archiver4.description')}</p>
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-primary/20 text-primary font-medium text-sm">
                  {t('projects.featured.archiver4.button')}
                </span>
                <a 
                  href="https://gitlab.com/sergio.lopez.guil/archiver4/-/blob/main/ArchiveR4_GDD.pdf?ref_type=heads"
                  download
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-200 dark:bg-neutral-700 hover:bg-neutral-300 dark:hover:bg-neutral-600 text-neutral-700 dark:text-neutral-200 font-medium text-sm transition-colors"
                >
                  <FaDownload className="text-xs" />
                  <span>{t('projects.featured.archiver4.download')}</span>
                </a>
              </div>
            </div>
          </div>
        </a>
      </section>

      {/* Proyectos Web */}
      <section className="space-y-4">
        <div>
          <h2 className="text-2xl font-bold">{t('projects.web.title')}</h2>
          <p className="mt-2 text-neutral-600 dark:text-neutral-300">{t('projects.web.description')}</p>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {cv.projects?.map((p) => (
            <a 
              key={getLocalizedText((p as any).name, language)} 
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-lg border border-neutral-200 dark:border-neutral-800 p-4 hover:border-primary hover:shadow-md transition-all group"
            >
              <article>
                <h3 className="font-semibold group-hover:text-primary transition-colors">{getLocalizedText((p as any).name, language)}</h3>
                <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">{getLocalizedText(p.description as any, language)}</p>
                <div className="mt-3 flex gap-2 text-xs text-neutral-500">
                  {p.tech?.map((t: string) => (
                    <span key={t} className="rounded bg-neutral-100 dark:bg-neutral-900 px-2 py-0.5">{t}</span>
                  ))}
                </div>
              </article>
            </a>
          ))}
        </div>
      </section>
    </div>
  )
}


