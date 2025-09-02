import { useState } from 'react'
import { FaEnvelope, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import cv from '../data/cv.json'
import { useI18n } from '../i18n/I18nProvider'

export default function Contacto() {
  const { t } = useI18n()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Usar mailto como fallback simple
      const mailtoLink = `mailto:${cv.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Nombre: ${formData.name}\nEmail: ${formData.email}\n\nMensaje:\n${formData.message}`)}`
      
      window.location.href = mailtoLink
      setSubmitStatus('success')
      
      // Limpiar formulario
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold">{t('section.contact')}</h2>
      
      {/* Información de contacto */}
      <div className="flex flex-wrap gap-3">
        {/* Email */}
        <a
          href={`mailto:${cv.email}`}
          className="group inline-flex items-center gap-2 rounded-md border border-neutral-300 dark:border-neutral-700 px-3 py-2 text-sm font-medium bg-white dark:bg-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors"
          aria-label="Enviar email"
        >
          <FaEnvelope className="w-4 h-4" />
          <span>{t('contact.email')}</span>
        </a>

        {/* LinkedIn */}
        <a
          href={cv.linkedin}
          target="_blank"
          rel="noreferrer noopener"
          className="group inline-flex items-center gap-2 rounded-md border border-neutral-300 dark:border-neutral-700 px-3 py-2 text-sm font-medium bg-white dark:bg-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors"
          aria-label="Abrir LinkedIn"
        >
          <FaLinkedin className="w-4 h-4" />
          <span>{t('contact.linkedin')}</span>
        </a>

        {/* WhatsApp */}
        <a
          href={`https://wa.me/${cv.phone}`}
          target="_blank"
          rel="noreferrer noopener"
          className="group inline-flex items-center gap-2 rounded-md border border-neutral-300 dark:border-neutral-700 px-3 py-2 text-sm font-medium bg-white dark:bg-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors"
          aria-label="Enviar WhatsApp"
        >
          <FaWhatsapp className="w-4 h-4" />
          <span>{t('contact.whatsapp')}</span>
        </a>
      </div>

      {/* Formulario de contacto */}
      <div className="bg-white dark:bg-neutral-800 rounded-lg p-6 shadow-sm border border-neutral-200 dark:border-neutral-700">
        <h3 className="text-lg font-semibold mb-4">{t('contact.form.title')}</h3>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                {t('contact.form.name')}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-neutral-300 dark:border-neutral-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100"
                placeholder={t('contact.placeholder.name')}
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                {t('contact.form.email')}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-neutral-300 dark:border-neutral-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100"
                placeholder={t('contact.placeholder.email')}
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
              {t('contact.form.subject')}
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-neutral-300 dark:border-neutral-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100"
              placeholder={t('contact.placeholder.subject')}
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
              {t('contact.form.message')}
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-3 py-2 border border-neutral-300 dark:border-neutral-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100 resize-vertical"
              placeholder={t('contact.placeholder.message')}
            />
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-white text-black border border-primary py-2 px-4 rounded-md hover:bg-primary hover:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {isSubmitting ? t('contact.form.sending') : t('contact.form.submit')}
          </button>
        </form>
        
        {/* Mensajes de estado */}
        {submitStatus === 'success' && (
          <div className="mt-4 p-3 bg-green-100 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-md">
            <p className="text-green-800 dark:text-green-200 text-sm">
              {t('contact.form.success')}
            </p>
          </div>
        )}
        
        {submitStatus === 'error' && (
          <div className="mt-4 p-3 bg-red-100 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-md">
            <p className="text-red-800 dark:text-red-200 text-sm">
              {t('contact.form.error')}
            </p>
          </div>
        )}
      </div>
    </section>
  )
}


