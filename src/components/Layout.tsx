import { Link, NavLink, Outlet } from 'react-router-dom'
import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import cv from '../data/cv.json'
import { useI18n } from '../i18n/I18nProvider'

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t, language, setLanguage } = useI18n()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const navLinks = [
    { to: 'sobre-mi', label: t('nav.about') },
    { to: 'experiencia', label: t('nav.experience') },
    { to: 'habilidades', label: t('nav.skills') },
    { to: 'contacto', label: t('nav.contact') }
  ]

  return (
    <div className="min-h-dvh bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
      <header className="sticky top-0 z-10 backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:supports-[backdrop-filter]:bg-neutral-950/70 border-b border-neutral-200 dark:border-neutral-800">
        <nav className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
          <Link to="/" className="font-semibold tracking-tight">{t('nav.cv')}</Link>
          
          {/* Menú de escritorio */}
          <div className="hidden md:flex items-center gap-4 text-sm">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({isActive}) => isActive ? 'text-primary' : 'hover:text-primary transition-colors'}
              >
                {link.label}
              </NavLink>
            ))}
            <select
              aria-label="Language selector"
              value={language}
              onChange={(e) => setLanguage(e.target.value as any)}
              className="ml-2 rounded border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 px-2 py-1 text-xs"
            >
              <option value="es">ES</option>
              <option value="en">EN</option>
            </select>
          </div>

          {/* Botón hamburguesa para móviles */}
          <div className="md:hidden flex items-center gap-2">
            <select
              aria-label="Language selector"
              value={language}
              onChange={(e) => setLanguage(e.target.value as any)}
              className="rounded border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 px-2 py-1 text-xs"
            >
              <option value="es">ES</option>
              <option value="en">EN</option>
            </select>
            <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-neutral-700 dark:text-neutral-300 hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
          </div>
        </nav>

        {/* Menú móvil */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-neutral-200 dark:border-neutral-800 bg-white/95 dark:bg-neutral-950/95 backdrop-blur">
            <div className="px-4 py-2 space-y-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={closeMenu}
                  className={({isActive}) => 
                    `block px-3 py-2 rounded-md text-sm transition-colors ${
                      isActive 
                        ? 'text-primary bg-primary/10' 
                        : 'text-neutral-700 dark:text-neutral-300 hover:text-primary hover:bg-neutral-100 dark:hover:bg-neutral-800'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </header>

      <main className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12">
        <Outlet />
      </main>

      <footer className="border-t border-neutral-200 dark:border-neutral-800 py-6 mt-12">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-sm text-neutral-500 flex items-center justify-between">
          <span>© {new Date().getFullYear()}</span>
          <a href={cv.linkedin} target="_blank" rel="noreferrer noopener" className="underline hover:text-primary">{cv.name}</a>
        </div>
      </footer>
    </div>
  )
}


