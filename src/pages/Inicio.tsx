import cv from '../data/cv.json'

export default function Inicio() {
  return (
    <section id="hero" className="space-y-8">
      <div className="grid items-center gap-6 md:grid-cols-2">
        <div className="order-2 md:order-1 text-center md:text-left space-y-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">{cv.name}</h1>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300">{cv.role} | React · TypeScript · UI</p>
          <div className="mt-6 flex justify-center md:justify-start gap-3">
            <a href="/contacto" className="inline-flex items-center rounded-md bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 px-4 py-2 text-sm font-medium hover:opacity-90">Ir a contacto</a>
            <a href="/proyectos" className="inline-flex items-center rounded-md border border-neutral-300 dark:border-neutral-700 px-4 py-2 text-sm font-medium hover:bg-neutral-50 dark:hover:bg-neutral-900">Ver proyectos</a>
          </div>
        </div>
        <div className="order-1 md:order-2 flex justify-center">
          <img
            src="/vite.svg"
            alt="Foto de perfil"
            className="h-32 w-32 sm:h-40 sm:w-40 rounded-full ring-1 ring-neutral-200 dark:ring-neutral-800"
          />
        </div>
      </div>
    </section>
  )
}


