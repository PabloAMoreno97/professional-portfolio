import { skillGroups } from '../data/portfolio'
import { useInView } from '../hooks/useInView'

export function Skills() {
  const [ref, inView] = useInView<HTMLElement>()

  return (
    <section
      id="skills"
      ref={ref}
      className={`max-w-5xl mx-auto px-6 py-24 transition-all duration-700 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="flex items-center gap-4 mb-12">
        <span className="font-mono text-accent text-sm">03.</span>
        <h2 className="font-display text-2xl md:text-3xl text-text">Technical Skills</h2>
        <div className="flex-1 h-px bg-border" aria-hidden="true" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {skillGroups.map((group, gi) => (
          <div
            key={group.label}
            className="bg-surface border border-border rounded-lg p-5 hover:border-accent/40 transition-colors duration-200"
            style={{
              animationDelay: `${gi * 80}ms`,
            }}
          >
            <h3 className="font-mono text-xs text-accent mb-3 tracking-widest uppercase">
              {group.label}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="font-mono text-xs bg-bg border border-border text-text-dim px-2.5 py-1 rounded hover:border-accent/50 hover:text-text transition-colors duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
