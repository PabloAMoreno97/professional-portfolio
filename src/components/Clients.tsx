import { bankingPresence } from '../data/portfolio'
import { useLang } from '../context/LangContext'

export function Clients() {
  const { lang } = useLang()

  const totalBanks = bankingPresence.reduce((sum, b) => sum + b.count, 0)

  return (
    <section className="max-w-5xl mx-auto px-6 pb-4">
      <p className="font-mono text-xs text-text-dim mb-5 tracking-widest uppercase">
        <span className="text-accent">// </span>
        {lang === 'en'
          ? `${totalBanks} banking institutions across 3 countries`
          : `${totalBanks} instituciones bancarias en 3 países`}
      </p>

      <div className="flex flex-wrap gap-3">
        {bankingPresence.map((entry) => (
          <div
            key={entry.country.en}
            className="flex items-center gap-2.5 bg-surface border border-border rounded-lg px-4 py-2.5 hover:border-accent/40 transition-colors duration-200"
          >
            <span className="text-base leading-none" aria-hidden="true">
              {entry.flag}
            </span>
            <div>
              <p className="font-sans text-sm font-medium text-text leading-tight">
                {entry.count === 1
                  ? lang === 'en' ? '1 bank' : '1 banco'
                  : lang === 'en' ? `${entry.count} banks` : `${entry.count} bancos`}
              </p>
              <p className="font-mono text-xs text-text-dim leading-tight">
                {entry.description[lang]}
              </p>
            </div>
          </div>
        ))}
      </div>

      <p className="font-mono text-xs text-text-dim mt-5 max-w-2xl leading-relaxed">
        <span className="text-accent">{'> '}</span>
        {lang === 'en'
          ? 'Banking-grade environments demand higher standards across the board: strict input validation, audit trails, security-first API design, zero tolerance for data loss, and adherence to each institution\'s internal compliance protocols.'
          : 'Los entornos bancarios exigen estándares más altos en todo: validación estricta de datos, trazabilidad de auditoría, diseño de APIs con seguridad como prioridad, tolerancia cero a pérdida de datos y cumplimiento de los protocolos internos de cada institución.'}
      </p>
    </section>
  )
}
