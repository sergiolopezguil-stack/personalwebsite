import cv from '../data/cv.json'

export default function Experiencia() {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold">Experiencia</h2>
      <div className="grid gap-4">
        {cv.experience?.map((job) => (
          <article key={job.title + job.company} className="rounded-lg border border-neutral-200 dark:border-neutral-800 p-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">{job.title} — {job.company}</h3>
              <span className="text-xs text-neutral-500">{job.start} — {job.end}</span>
            </div>
            <ul className="mt-2 list-disc pl-5 space-y-1 text-sm text-neutral-600 dark:text-neutral-300">
              {job.highlights?.map((h) => (<li key={h}>{h}</li>))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}


