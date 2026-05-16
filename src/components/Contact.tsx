import { personalInfo } from '../data/portfolio'
import { useLang } from '../context/LangContext'

export function Contact() {
  const { lang } = useLang()

  const channels = [
    {
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="M2 8l10 6 10-6" />
        </svg>
      ),
    },
    {
      label: 'LinkedIn',
      value: `linkedin.com/in/${personalInfo.linkedinHandle}`,
      href: personalInfo.linkedin,
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
    },
    {
      label: lang === 'en' ? 'Phone' : 'Teléfono',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z" />
        </svg>
      ),
    },
  ]

  return (
    <section id="contact" className="max-w-5xl mx-auto px-6 py-24">
      <p className="font-mono text-accent text-sm mb-2">
        <span className="text-text-dim">05.</span>{' '}
        {lang === 'en' ? 'get in touch' : 'ponte en contacto'}
      </p>

      <h2 className="font-display text-4xl md:text-5xl text-text mb-6">
        {lang === 'en' ? 'Contact' : 'Contacto'}
      </h2>

      <p className="text-text-dim max-w-lg leading-relaxed mb-12">
        {lang === 'en'
          ? "I'm currently open to new opportunities. Whether it's a quick question or a project proposal — my inbox is open."
          : 'Actualmente estoy abierto a nuevas oportunidades. Ya sea una pregunta rápida o una propuesta de proyecto, mi bandeja de entrada está abierta.'}
      </p>

      <div className="grid sm:grid-cols-3 gap-4 mb-12">
        {channels.map(({ label, value, href, icon }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="group flex flex-col gap-3 border border-border rounded p-5 hover:border-accent transition-colors duration-200"
          >
            <span className="text-text-dim group-hover:text-accent transition-colors duration-200">
              {icon}
            </span>
            <span className="font-mono text-xs text-text-dim">{label}</span>
            <span className="font-mono text-sm text-text break-all">{value}</span>
          </a>
        ))}
      </div>

      <a
        href={`mailto:${personalInfo.email}`}
        className="inline-flex items-center gap-2 border border-accent text-accent font-mono text-sm px-6 py-3 rounded hover:bg-accent-dim transition-colors duration-200"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z" />
        </svg>
        {lang === 'en' ? 'Say Hello' : 'Escríbeme'}
      </a>
    </section>
  )
}
