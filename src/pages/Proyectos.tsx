import cv from '../data/cv.json'

export default function Proyectos() {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold">Proyectos</h2>
      <div className="grid sm:grid-cols-2 gap-4">
        {cv.projects?.map((p) => (
          <article key={p.name} className="rounded-lg border border-neutral-200 dark:border-neutral-800 p-4">
            <h3 className="font-semibold">{p.name}</h3>
            <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">{p.description}</p>
            <div className="mt-3 flex gap-2 text-xs text-neutral-500">
              {p.tech?.map((t: string) => (
                <span key={t} className="rounded bg-neutral-100 dark:bg-neutral-900 px-2 py-0.5">{t}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}


