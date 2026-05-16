import { useState } from 'react'
import { experience } from '../data/portfolio'
import { useInView } from '../hooks/useInView'

export function Experience() {
  const [active, setActive] = useState(0)
  const [ref, inView] = useInView<HTMLElement>()

  const job = experience[active]

  return (
    <section
      id="experience"
      ref={ref}
      className={`max-w-5xl mx-auto px-6 py-24 transition-all duration-700 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {/* Section heading */}
      <div className="flex items-center gap-4 mb-12">
        <span className="font-mono text-accent text-sm">02.</span>
        <h2 className="font-display text-2xl md:text-3xl text-text">Experience</h2>
        <div className="flex-1 h-px bg-border" aria-hidden="true" />
      </div>

      <div className="flex flex-col md:flex-row gap-0 md:gap-0">
        {/* Tab list */}
        <div
          className="flex md:flex-col overflow-x-auto md:overflow-visible border-b md:border-b-0 md:border-l border-border mb-8 md:mb-0 md:mr-8 shrink-0"
          role="tablist"
          aria-orientation="vertical"
        >
          {experience.map((job, i) => (
            <button
              key={job.company}
              role="tab"
              aria-selected={active === i}
              onClick={() => setActive(i)}
              className={`font-mono text-xs px-4 py-3 whitespace-nowrap text-left border-b-2 md:border-b-0 md:border-l-2 transition-all duration-200 ${
                active === i
                  ? 'border-accent text-accent bg-accent-dim'
                  : 'border-transparent text-text-dim hover:text-text hover:bg-surface'
              }`}
            >
              {job.company}
            </button>
          ))}
        </div>

        {/* Tab panel */}
        <div key={active} className="flex-1 animate-fade-up" role="tabpanel">
          <div className="mb-1">
            <h3 className="font-sans font-semibold text-lg text-text">
              {job.role}{' '}
              <span className="text-accent">@ {job.company}</span>
            </h3>
          </div>
          <div className="flex items-center gap-3 mb-5">
            <span className="font-mono text-xs text-text-dim">{job.period}</span>
            <span className="text-border">·</span>
            <span className="font-mono text-xs text-text-dim">{job.type}</span>
            {job.current && (
              <span className="font-mono text-xs bg-accent-dim text-accent px-2 py-0.5 rounded-full border border-accent/30">
                current
              </span>
            )}
          </div>
          <ul className="space-y-3">
            {job.bullets.map((bullet, i) => (
              <li key={i} className="flex gap-3 text-sm text-text-dim leading-relaxed">
                <span className="text-accent shrink-0 mt-0.5">▸</span>
                {bullet}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
