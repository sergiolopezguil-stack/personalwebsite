import cv from '../data/cv.json'

export default function SobreMi() {
  return (
    <section className="space-y-3">
      <h2 className="text-2xl font-bold">Sobre mí</h2>
      <p className="text-neutral-700 dark:text-neutral-300">{cv.summary}</p>
    </section>
  )
}


