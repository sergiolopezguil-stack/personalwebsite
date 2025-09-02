import cv from '../data/cv.json'
import { useI18n } from '../i18n/I18nProvider'
import { getLocalizedText } from '../i18n/localize'

export default function SobreMi() {
  const { language, t } = useI18n() as any
  const handleDownloadCV = () => {
    // Crear un enlace temporal para descargar el archivo
    const link = document.createElement('a')
    link.href = `${import.meta.env.BASE_URL}CV_SergioLopez.pdf`
    link.download = 'CV_SergioLopez.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold">{t('nav.about')}</h2>
      <p className="text-neutral-700 dark:text-neutral-300">{getLocalizedText(cv.summary as any, language)}</p>
      
      {/* Botón de descarga del CV */}
      <div className="pt-4">
        <button
          onClick={handleDownloadCV}
          className="inline-flex items-center rounded-md bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 px-4 py-2 text-sm font-medium hover:opacity-90 transition-opacity"
        >
          📄 {t('about.download')}
        </button>
      </div>
    </section>
  )
}


