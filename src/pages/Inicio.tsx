import cv from '../data/cv.json'

export default function Inicio() {
  return (
    <section id="hero" className="text-center space-y-4">
      <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">{cv.name}</h1>
      <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300">{cv.role} | React · TypeScript · UI</p>
      <div className="mt-6 flex justify-center gap-3">
        <a href="/contacto" className="inline-flex items-center rounded-md bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 px-4 py-2 text-sm font-medium hover:opacity-90">Contáctame</a>
        <a href="/proyectos" className="inline-flex items-center rounded-md border border-neutral-300 dark:border-neutral-700 px-4 py-2 text-sm font-medium hover:bg-neutral-50 dark:hover:bg-neutral-900">Ver proyectos</a>
      </div>
    </section>
  )
}


