import { personalInfo } from '../data/portfolio'
import { useLang, t } from '../context/LangContext'

export function Hero() {
  const { lang } = useLang()

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center max-w-5xl mx-auto px-6 pt-24 pb-16"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(100,255,218,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(100,255,218,0.03) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
        aria-hidden="true"
      />

      <div className="relative flex flex-col-reverse md:flex-row items-center md:items-start gap-12 md:gap-16">

        {/* Text content */}
        <div className="flex-1 min-w-0">
          <p
            className="font-mono text-accent text-sm mb-4 opacity-0-start animate-fade-up"
            style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}
          >
            {lang === 'en' ? 'Hi, my name is' : 'Hola, mi nombre es'}
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
            {t(personalInfo.title, lang)}.
          </h2>

          <p
            className="max-w-xl text-text-dim text-base md:text-lg leading-relaxed mb-10 opacity-0-start animate-fade-up"
            style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}
          >
            {t(personalInfo.summary, lang)}
          </p>

          {/* Stats row */}
          <div
            className="flex flex-wrap gap-6 mb-10 opacity-0-start animate-fade-up"
            style={{ animationDelay: '450ms', animationFillMode: 'forwards' }}
          >
            {[
              { value: '6+', label: lang === 'en' ? 'Years of experience' : 'Años de experiencia' },
              { value: '6', label: lang === 'en' ? 'Companies' : 'Empresas' },
              { value: '10+', label: lang === 'en' ? 'Technologies' : 'Tecnologías' },
            ].map(({ value, label }) => (
              <div key={label} className="flex flex-col">
                <span className="font-display text-3xl text-accent">{value}</span>
                <span className="font-mono text-xs text-text-dim mt-0.5">{label}</span>
              </div>
            ))}
          </div>

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
              {personalInfo.location} · {t(personalInfo.openTo, lang)}
            </span>
          </div>
        </div>

        {/* Profile photo */}
        <div
          className="flex-shrink-0 opacity-0-start animate-fade-up"
          style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}
        >
          <div className="relative w-52 md:w-64">
            <div className="overflow-hidden rounded border border-accent/30 w-full" style={{ aspectRatio: '3/4' }}>
              <img
                src="/pablo.jpg"
                alt="Pablo Moreno"
                className="w-full h-full object-cover object-top"
              />
            </div>
            {/* Offset decorative frame */}
            <div
              className="absolute -bottom-3 -right-3 w-full border border-accent/20 rounded -z-10"
              style={{ aspectRatio: '3/4' }}
              aria-hidden="true"
            />
          </div>
        </div>

      </div>
    </section>
  )
}
