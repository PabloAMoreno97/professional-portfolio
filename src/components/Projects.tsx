import { projects } from '../data/portfolio'
import { useInView } from '../hooks/useInView'
import { useLang, t } from '../context/LangContext'

export function Projects() {
  const [ref, inView] = useInView<HTMLElement>()
  const { lang } = useLang()

  return (
    <section
      id="projects"
      ref={ref}
      className={`max-w-5xl mx-auto px-6 py-24 transition-all duration-700 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="flex items-center gap-4 mb-12">
        <span className="font-mono text-accent text-sm">04.</span>
        <h2 className="font-display text-2xl md:text-3xl text-text">
          {lang === 'en' ? 'Projects' : 'Proyectos'}
        </h2>
        <div className="flex-1 h-px bg-border" aria-hidden="true" />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.slug}
            className="bg-surface border border-border rounded-lg p-6 flex flex-col gap-4 hover:border-accent/40 transition-colors duration-200"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <span className="font-mono text-xs text-accent bg-accent-dim px-2 py-0.5 rounded-full border border-accent/30">
                  {t(project.category, lang)}
                </span>
                <h3 className="font-sans font-semibold text-text mt-2">{project.title}</h3>
              </div>
              <div className="flex items-center gap-3 shrink-0 mt-1">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="text-text-dim hover:text-accent transition-colors"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Live demo"
                    className="text-text-dim hover:text-accent transition-colors"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </a>
                )}
              </div>
            </div>

            <p className="font-sans text-sm text-text-dim leading-relaxed flex-1">
              {t(project.description, lang)}
            </p>

            <div className="flex flex-wrap gap-2 pt-2 border-t border-border">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-xs text-text-dim bg-bg px-2 py-0.5 rounded border border-border"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
