import { personalInfo } from '../data/portfolio'

export function Hero() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center max-w-5xl mx-auto px-6 pt-24 pb-16"
    >
      {/* Grid background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(100,255,218,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(100,255,218,0.03) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
        aria-hidden="true"
      />

      <div className="relative">
        <p
          className="font-mono text-accent text-sm mb-4 opacity-0-start animate-fade-up"
          style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}
        >
          Hi, my name is
        </p>

        <h1
          className="font-display text-5xl md:text-7xl text-text mb-2 opacity-0-start animate-fade-up leading-tight"
          style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}
        >
          {personalInfo.name}.
        </h1>

        <h2
          className="font-display text-4xl md:text-6xl text-text-dim mb-8 opacity-0-start animate-fade-up leading-tight"
          style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}
        >
          {personalInfo.title}.
        </h2>

        <p
          className="max-w-xl text-text-dim text-base md:text-lg leading-relaxed mb-10 opacity-0-start animate-fade-up"
          style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}
        >
          {personalInfo.summary}
        </p>

        {/* Contact row */}
        <div
          className="flex flex-wrap items-center gap-4 opacity-0-start animate-fade-up"
          style={{ animationDelay: '500ms', animationFillMode: 'forwards' }}
        >
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-accent text-accent font-mono text-sm px-5 py-3 rounded hover:bg-accent-dim transition-colors duration-200"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
              <circle cx="4" cy="4" r="2" />
            </svg>
            LinkedIn
          </a>

          <a
            href={`mailto:${personalInfo.email}`}
            className="inline-flex items-center gap-2 text-text-dim font-mono text-sm hover:text-accent transition-colors duration-200"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="M2 8l10 6 10-6" />
            </svg>
            {personalInfo.email}
          </a>

          <span className="text-text-dim font-mono text-sm">
            <span className="text-accent">{'// '}</span>
            {personalInfo.location} · {personalInfo.openTo}
          </span>
        </div>

        {/* Scroll hint */}
        <div
          className="mt-20 flex items-center gap-3 text-text-dim opacity-0-start animate-fade-up"
          style={{ animationDelay: '700ms', animationFillMode: 'forwards' }}
        >
          <div className="w-px h-16 bg-gradient-to-b from-transparent to-border mx-auto" aria-hidden="true" />
        </div>
      </div>
    </section>
  )
}
