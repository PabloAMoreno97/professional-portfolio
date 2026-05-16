import { personalInfo } from '../data/portfolio'
import { useLang } from '../context/LangContext'

export function Footer() {
  const { lang } = useLang()
  return (
    <footer className="max-w-5xl mx-auto px-6 py-12 border-t border-border">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-text-dim">
          <span className="text-accent">// </span>
          {lang === 'en' ? 'Built with' : 'Construido con'} React · TypeScript · Tailwind CSS
        </p>
        <div className="flex items-center gap-4">
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-text-dim hover:text-accent transition-colors"
          >
            LinkedIn
          </a>
          <span className="text-border" aria-hidden="true">·</span>
          <a
            href={`mailto:${personalInfo.email}`}
            className="font-mono text-xs text-text-dim hover:text-accent transition-colors"
          >
            Email
          </a>
        </div>
        <p className="font-mono text-xs text-text-dim">
          {personalInfo.name} · {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}
