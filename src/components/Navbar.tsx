import { useState, useEffect } from 'react'
import { useLang } from '../context/LangContext'

export function Navbar() {
  const { lang, toggle } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  const navLinks = [
    { href: '#about',      label: lang === 'en' ? 'About'      : 'Sobre mí' },
    { href: '#experience', label: lang === 'en' ? 'Experience'  : 'Experiencia' },
    { href: '#skills',     label: lang === 'en' ? 'Skills'      : 'Habilidades' },
    { href: '#education',  label: lang === 'en' ? 'Education'   : 'Educación' },
  ]

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-bg/90 backdrop-blur border-b border-border' : ''
      }`}
    >
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#"
          className="font-mono text-sm text-accent tracking-wider hover:opacity-80 transition-opacity"
        >
          pm<span className="animate-blink text-text-dim">_</span>
        </a>

        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map(({ href, label }, i) => (
            <li key={href}>
              <a
                href={href}
                className="font-mono text-xs text-text-dim hover:text-accent transition-colors duration-200"
              >
                <span className="text-accent">{String(i + 1).padStart(2, '0')}.</span>{' '}
                {label}
              </a>
            </li>
          ))}

          {/* Language toggle */}
          <li>
            <button
              onClick={toggle}
              className="font-mono text-xs flex items-center gap-1.5 border border-border text-text-dim px-3 py-1.5 rounded hover:border-accent hover:text-accent transition-colors duration-200"
              aria-label="Toggle language"
            >
              <span className={lang === 'en' ? 'text-accent' : 'text-text-dim'}>EN</span>
              <span className="text-border">/</span>
              <span className={lang === 'es' ? 'text-accent' : 'text-text-dim'}>ES</span>
            </button>
          </li>

          <li>
            <a
              href="#contact"
              className="font-mono text-xs border border-accent text-accent px-4 py-2 rounded hover:bg-accent-dim transition-colors duration-200"
            >
              {lang === 'en' ? 'Contact' : 'Contacto'}
            </a>
          </li>
        </ul>

        {/* Mobile: lang toggle + hamburger */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={toggle}
            className="font-mono text-xs flex items-center gap-1 border border-border text-text-dim px-2.5 py-1.5 rounded hover:border-accent hover:text-accent transition-colors"
            aria-label="Toggle language"
          >
            <span className={lang === 'en' ? 'text-accent' : ''}>EN</span>
            <span className="text-border">/</span>
            <span className={lang === 'es' ? 'text-accent' : ''}>ES</span>
          </button>
          <button
            className="text-text-dim hover:text-accent transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              {mobileOpen ? (
                <path d="M3 3L19 19M19 3L3 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              ) : (
                <>
                  <line x1="3" y1="7" x2="19" y2="7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <line x1="3" y1="13" x2="19" y2="13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </>
              )}
            </svg>
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="md:hidden bg-surface border-b border-border px-6 py-6">
          <ul className="flex flex-col gap-5">
            {navLinks.map(({ href, label }, i) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className="font-mono text-sm text-text-dim hover:text-accent transition-colors"
                >
                  <span className="text-accent">{String(i + 1).padStart(2, '0')}.</span> {label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="font-mono text-sm border border-accent text-accent px-4 py-2 rounded hover:bg-accent-dim transition-colors duration-200 inline-block"
              >
                {lang === 'en' ? 'Contact' : 'Contacto'}
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
