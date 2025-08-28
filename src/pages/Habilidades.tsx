import cv from '../data/cv.json'

export default function Habilidades() {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-bold">Habilidades</h2>
      <ul className="flex flex-wrap gap-2 text-sm text-neutral-700 dark:text-neutral-300">
        {cv.skills?.map((s: string) => (
          <li key={s} className="rounded bg-neutral-100 dark:bg-neutral-900 px-2 py-0.5">{s}</li>
        ))}
      </ul>
    </section>
  )
}


