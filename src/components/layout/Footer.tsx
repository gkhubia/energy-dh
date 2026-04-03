import { MapPin, Mail, Phone } from 'lucide-react'

const services = [
  { label: 'Gestão de Processos', href: '#servicos' },
  { label: 'Cultura & Negócios', href: '#servicos' },
  { label: 'RH Estratégico com Alocação', href: '#servicos' },
  { label: '+EloEnergy', href: '#eloenergy' },
]

const methodology = [
  { label: 'Os 6Cs', href: '#metodologia' },
  { label: 'Ciclo Energy DH', href: '#metodologia' },
  { label: 'Quem Somos', href: '#quem-somos' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/[0.07] bg-navy-deep/80">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-burgundy to-teal
                              flex items-center justify-center flex-shrink-0">
                <span className="font-serif text-base font-bold text-cream">E</span>
              </div>
              <div>
                <div className="font-serif font-semibold text-cream text-xl tracking-wide">
                  Energy DH
                </div>
                <div className="text-2xs font-medium tracking-[0.15em] uppercase text-cream/40">
                  Consultoria
                </div>
              </div>
            </div>
            <p className="text-sm text-cream/50 leading-relaxed max-w-sm mb-8">
              Startup de desenvolvimento de negócios especializada em Gestão de
              Pessoas e Processos. Do diagnóstico ao resultado mensurável.
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:contato@energydh.com.br"
                className="flex items-center gap-3 text-sm text-cream/50 hover:text-cream
                           transition-colors group"
              >
                <Mail size={14} className="text-teal group-hover:text-teal-light transition-colors" />
                contato@energydh.com.br
              </a>
              <div className="flex items-start gap-3 text-sm text-cream/50">
                <MapPin size={14} className="text-teal mt-0.5 flex-shrink-0" />
                <span>Fortaleza, Ceará — Brasil</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-2xs font-semibold tracking-[0.2em] uppercase text-cream/30 mb-6">
              Serviços
            </h3>
            <ul className="flex flex-col gap-3">
              {services.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-sm text-cream/50 hover:text-cream transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Methodology */}
          <div>
            <h3 className="text-2xs font-semibold tracking-[0.2em] uppercase text-cream/30 mb-6">
              Metodologia
            </h3>
            <ul className="flex flex-col gap-3">
              {methodology.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-sm text-cream/50 hover:text-cream transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/[0.06] flex flex-col md:flex-row
                        items-center justify-between gap-4">
          <p className="text-2xs text-cream/25 tracking-wide">
            © {year} Energy DH. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-4 h-[1px] bg-burgundy/60" />
            <div className="w-4 h-[1px] bg-gold/60" />
            <div className="w-4 h-[1px] bg-teal/60" />
          </div>
        </div>
      </div>
    </footer>
  )
}
