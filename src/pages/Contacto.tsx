import cv from '../data/cv.json'

export default function Contacto() {
  return (
    <section className="space-y-3">
      <h2 className="text-2xl font-bold">Contacto</h2>
      <p className="text-neutral-700 dark:text-neutral-300">Email: <a className="text-primary underline" href={`mailto:${cv.email}`}>{cv.email}</a></p>
      <p className="text-neutral-700 dark:text-neutral-300">LinkedIn: <a className="text-primary underline" href={cv.linkedin} target="_blank" rel="noreferrer noopener">{cv.linkedin}</a></p>
    </section>
  )
}


