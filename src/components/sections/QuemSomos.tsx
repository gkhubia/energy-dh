'use client'

import Reveal from '@/components/ui/Reveal'
import { Check, X } from 'lucide-react'

const pillars = [
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="17" stroke="rgba(122,0,30,0.5)" strokeWidth="1" />
        <circle cx="20" cy="20" r="6" stroke="rgba(200,120,120,0.9)" strokeWidth="1.5" fill="none" />
        <line x1="20" y1="3" x2="20" y2="10" stroke="rgba(200,120,120,0.6)" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="20" y1="30" x2="20" y2="37" stroke="rgba(200,120,120,0.6)" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="3" y1="20" x2="10" y2="20" stroke="rgba(200,120,120,0.6)" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="30" y1="20" x2="37" y2="20" stroke="rgba(200,120,120,0.6)" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    color: 'burgundy' as const,
    title: 'Metodologia',
    text: 'Frameworks modernos aplicados com rigor técnico e adaptados à realidade de cada empresa. Sem soluções genéricas.',
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path d="M15 20 C15 20 10 20 10 15 C10 10 15 10 15 10 L20 10" stroke="rgba(232,181,53,0.9)" strokeWidth="1.8" strokeLinecap="round" fill="none" />
        <path d="M25 20 C25 20 30 20 30 25 C30 30 25 30 25 30 L20 30" stroke="rgba(232,181,53,0.9)" strokeWidth="1.8" strokeLinecap="round" fill="none" />
        <circle cx="20" cy="20" r="3" fill="rgba(232,181,53,0.9)" />
      </svg>
    ),
    color: 'gold' as const,
    title: 'Integração',
    text: 'Processos e pessoas não são departamentos separados. O +EloEnergy é o que une e dá coerência à operação.',
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <polyline points="6,34 16,22 24,28 38,10" stroke="rgba(100,210,228,0.9)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <polyline points="30,10 38,10 38,18" stroke="rgba(100,210,228,0.9)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <line x1="6" y1="38" x2="38" y2="38" stroke="rgba(100,210,228,0.3)" strokeWidth="1" strokeLinecap="round" />
      </svg>
    ),
    color: 'teal' as const,
    title: 'Resultado',
    text: 'Cada entrega é medida. KPIs, OKRs e indicadores de pessoas caminham juntos.',
  },
]

const comparison = [
  {
    tool: 'Bizagi / Pipefy',
    does: 'Mapeia processos',
    doesNot: 'Não conecta às pessoas',
    color: 'rgba(0,120,200,0.7)',
  },
  {
    tool: 'Gupy / Kenoby',
    does: 'Recruta',
    doesNot: 'Não sabe o que o cargo exige do processo',
    color: 'rgba(0,170,100,0.7)',
  },
  {
    tool: 'Qulture.Rocks',
    does: 'Avalia performance',
    doesNot: 'Não sabe quais processos a pessoa executa',
    color: 'rgba(220,60,80,0.7)',
  },
]

const colorClasses = {
  burgundy: 'border-burgundy/30 bg-burgundy/[0.07]',
  gold: 'border-gold/30 bg-gold/[0.07]',
  teal: 'border-teal/30 bg-teal/[0.07]',
}

export default function QuemSomos() {
  return (
    <section id="quem-somos" className="py-28 lg:py-36 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Section header */}
        <Reveal className="text-center mb-20">
          <p className="section-label mb-3">Conheça a Energy DH</p>
          <h2 className="section-heading text-4xl lg:text-5xl mb-5">Quem Somos</h2>
          <div className="section-divider mx-auto" />
        </Reveal>

        {/* Manifesto */}
        <Reveal
          className="max-w-3xl mx-auto mb-20 pl-6 border-l-2 border-gold/50"
          delay={100}
        >
          <p className="font-serif text-xl lg:text-2xl font-light text-cream/90 leading-relaxed mb-5">
            A Energy DH é uma{' '}
            <strong className="font-semibold text-cream">
              startup de desenvolvimento de negócios
            </strong>{' '}
            que acredita que empresas eficientes são feitas de processos claros{' '}
            <em>e</em> pessoas desenvolvidas — ao mesmo tempo, em conjunto.
          </p>
          <p className="text-sm text-cream/50 leading-relaxed">
            Nascemos em Fortaleza com o propósito de levar metodologia de gestão
            de alto nível para empresas que querem crescer de forma estruturada.
            Não entregamos apenas relatórios — implantamos, capacitamos e
            acompanhamos. Do diagnóstico ao resultado mensurável.
          </p>
        </Reveal>

        {/* Three pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 100}>
              <div className={`card-base p-8 ${colorClasses[p.color]} h-full`}>
                <div className="mb-6">{p.icon}</div>
                <h3 className="font-serif font-semibold text-xl text-cream mb-3">
                  {p.title}
                </h3>
                <p className="text-sm text-cream/55 leading-relaxed">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Competitive positioning */}
        <Reveal className="mb-6 text-center">
          <h3 className="font-serif text-3xl font-semibold text-cream mb-2">
            O diferencial que nenhum concorrente tem
          </h3>
          <p className="text-sm text-cream/45">
            As ferramentas de mercado atuam em partes. A Energy DH conecta tudo.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="rounded-2xl overflow-hidden border border-white/[0.07]">
            {/* Header */}
            <div className="grid grid-cols-3 bg-white/[0.03] border-b border-white/[0.06]">
              <div className="px-6 py-4 text-2xs font-semibold tracking-[0.14em] uppercase text-cream/35">
                Ferramenta
              </div>
              <div className="px-6 py-4 text-2xs font-semibold tracking-[0.14em] uppercase text-cream/35
                              border-l border-white/[0.06]">
                O que faz
              </div>
              <div className="px-6 py-4 text-2xs font-semibold tracking-[0.14em] uppercase text-cream/35
                              border-l border-white/[0.06]">
                O que não faz
              </div>
            </div>

            {comparison.map((row, i) => (
              <div
                key={row.tool}
                className={`grid grid-cols-3 border-b border-white/[0.04] transition-colors
                            hover:bg-white/[0.02] ${i % 2 === 0 ? 'bg-white/[0.01]' : ''}`}
              >
                <div className="px-6 py-5 flex items-center">
                  <span className="text-sm font-medium text-cream/60">{row.tool}</span>
                </div>
                <div className="px-6 py-5 border-l border-white/[0.06] flex items-center gap-2.5">
                  <Check size={13} className="text-teal flex-shrink-0" />
                  <span className="text-sm text-cream/65">{row.does}</span>
                </div>
                <div className="px-6 py-5 border-l border-white/[0.06] flex items-center gap-2.5">
                  <X size={13} className="text-burgundy-light flex-shrink-0" />
                  <span className="text-sm text-cream/65">{row.doesNot}</span>
                </div>
              </div>
            ))}

            {/* Energy DH row */}
            <div
              className="grid grid-cols-3 relative"
              style={{ background: 'linear-gradient(135deg, rgba(184,134,11,0.1), rgba(184,134,11,0.04))' }}
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l"
                   style={{ background: 'linear-gradient(to bottom, #7a001e, #b8860b, #0b6275)' }} />
              <div className="px-6 py-6 pl-8 flex items-center">
                <span className="font-serif font-semibold text-gold-bright text-lg">
                  +EloEnergy
                </span>
              </div>
              <div className="px-6 py-6 border-l border-gold/20 flex items-center">
                <span className="font-semibold text-sm text-gold-bright">
                  Faz os três conectados
                </span>
              </div>
              <div className="px-6 py-6 border-l border-gold/20 flex items-center">
                <span className="text-sm text-gold/70 italic">
                  Sistema integrado único
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
