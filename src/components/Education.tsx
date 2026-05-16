import { education } from '../data/portfolio'
import { useInView } from '../hooks/useInView'

export function Education() {
  const [ref, inView] = useInView<HTMLElement>()

  return (
    <section
      id="education"
      ref={ref}
      className={`max-w-5xl mx-auto px-6 py-24 transition-all duration-700 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="flex items-center gap-4 mb-12">
        <span className="font-mono text-accent text-sm">04.</span>
        <h2 className="font-display text-2xl md:text-3xl text-text">Education</h2>
        <div className="flex-1 h-px bg-border" aria-hidden="true" />
      </div>

      <div className="space-y-4">
        {education.map((edu) => (
          <div
            key={edu.institution}
            className="bg-surface border border-border rounded-lg p-6 hover:border-accent/40 transition-colors duration-200"
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
              <div>
                <h3 className="font-sans font-semibold text-text">{edu.degree}</h3>
                <p className="font-mono text-sm text-accent mt-1">{edu.institution}</p>
                <p className="font-mono text-xs text-text-dim mt-1">{edu.location}</p>
              </div>
              <div className="shrink-0 flex items-center gap-2">
                <span className="font-mono text-xs text-text-dim">{edu.period}</span>
                {edu.current && (
                  <span className="font-mono text-xs bg-accent-dim text-accent px-2 py-0.5 rounded-full border border-accent/30">
                    current
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
