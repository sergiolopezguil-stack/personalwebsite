import cv from '../data/cv.json'
import { Link } from 'react-router-dom'
import { useI18n } from '../i18n/I18nProvider'
import { getLocalizedText } from '../i18n/localize'
// Importar desde la raíz garantiza que Vite aplique base en producción
// y genere la URL final correcta para GitHub Pages.
import profileImg from '/SergioLopez.jpg'

export default function Inicio() {
  const { t, language } = useI18n() as any
  return (
    <section id="hero" className="space-y-8">
      <div className="grid items-center gap-6 md:grid-cols-2">
        <div className="order-2 md:order-1 text-center md:text-left space-y-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">{cv.name}</h1>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300">{getLocalizedText(cv.role as any, language)}</p>
          <div className="mt-6 flex justify-center md:justify-start gap-3">
            <Link to="contacto" className="inline-flex items-center rounded-md bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 px-4 py-2 text-sm font-medium hover:opacity-90">{t('cta.contact')}</Link>
          </div>
        </div>
        <div className="order-1 md:order-2 flex justify-center">
          <img
            src={profileImg}
            alt="Foto de perfil"
            className="h-48 w-48 sm:h-56 sm:w-56 rounded-full ring-1 ring-neutral-200 dark:ring-neutral-800"
          />
        </div>
      </div>
    </section>
  )
}


