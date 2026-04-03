'use client'

import { useState } from 'react'
import Reveal from '@/components/ui/Reveal'
import { ChevronRight } from 'lucide-react'

const servicos = [
  {
    id: 'processos',
    label: 'Gestão de Processos',
    eyebrow: 'Dimensão 01',
    color: 'burgundy' as const,
    headline: 'Processos como vantagem competitiva',
    description:
      'Desenhamos, estruturamos e implantamos processos que funcionam na prática — com governança, indicadores e times capacitados para sustentá-los.',
    scope: [
      'Mapeamento e diagnóstico de processos',
      'Padronização operacional (POPs e manuais)',
      'Desenho de fluxos e workflows',
      'Treinamento e capacitação de equipes',
      'Auditoria de conformidade',
      'Indicadores de processo (KPIs)',
      'Governança operacional',
      'Automação de processos (RPA / IA)',
    ],
    methods: [
      'BPM — Business Process Management',
      'Lean Management',
      'Six Sigma (DMAIC)',
      'PDCA',
      'Design Thinking',
    ],
    tags: ['BPM', 'Lean', 'Six Sigma', 'PDCA', 'RACI', 'Governança', 'KPIs', 'Automação'],
  },
  {
    id: 'cultura',
    label: 'Cultura & Negócios',
    eyebrow: 'Dimensão 02',
    color: 'teal' as const,
    headline: 'Pessoas desenvolvidas geram resultados reais',
    description:
      'Estruturamos os subsistemas de RH com metodologia e alinhamento estratégico — recrutamento, avaliação, remuneração e desenvolvimento em um único sistema coerente.',
    scope: [
      'Recrutamento e seleção por competências',
      'Avaliação de desempenho e cultura',
      'Plano de cargos e salários',
      'PDI e trilhas de treinamento',
      'Programa de aceleração gerencial',
      'DISC e mapeamento comportamental',
      'Nine Box e gestão de talentos',
      'RH Estratégico com Alocação',
    ],
    methods: [
      'Gestão por Competências (CHA)',
      'People Analytics',
      'Leadership Pipeline',
      'HRBP — HR Business Partner',
      'OKR para área de pessoas',
    ],
    tags: ['R&S', 'Avaliação', 'PDI', 'DISC', 'OKR', 'HRBP', 'Nine Box', 'T&D'],
  },
]

const colorMap = {
  burgundy: {
    border: 'border-burgundy/30',
    bg: 'bg-burgundy/[0.06]',
    accent: 'text-red-300',
    dot: 'bg-burgundy',
    tab: 'border-burgundy text-cream',
    tag: 'bg-burgundy/15 border-burgundy/30 text-red-200',
    eyebrow: 'text-red-400/80',
    glow: 'rgba(122,0,30,0.15)',
  },
  teal: {
    border: 'border-teal/30',
    bg: 'bg-teal/[0.06]',
    accent: 'text-cyan-300',
    dot: 'bg-teal',
    tab: 'border-teal text-cream',
    tag: 'bg-teal/15 border-teal/30 text-cyan-200',
    eyebrow: 'text-cyan-400/80',
    glow: 'rgba(11,98,117,0.15)',
  },
}

export default function Servicos() {
  const [active, setActive] = useState(0)
  const s = servicos[active]
  const c = colorMap[s.color]

  return (
    <section id="servicos" className="py-28 lg:py-36 relative">

      {/* Background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 60% 50% at 50% 0%, ${c.glow}, transparent 70%)`,
          transition: 'background 0.5s ease',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">

        {/* Header */}
        <Reveal className="text-center mb-16">
          <p className="section-label mb-3">O Que Fazemos</p>
          <h2 className="section-heading text-4xl lg:text-5xl mb-5">
            Nossas Soluções
          </h2>
          <div className="section-divider mx-auto" />
        </Reveal>

        {/* Tab pills */}
        <Reveal className="flex justify-center mb-12" delay={100}>
          <div className="inline-flex rounded-full border border-white/10 bg-white/[0.03] p-1.5">
            {servicos.map((sv, i) => (
              <button
                key={sv.id}
                onClick={() => setActive(i)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium tracking-wide
                            transition-all duration-300
                            ${active === i
                              ? `border ${colorMap[sv.color].tab} bg-white/10 shadow-lg`
                              : 'text-cream/40 hover:text-cream/70'
                            }`}
              >
                {sv.label}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Content panel */}
        <Reveal key={s.id} className={`rounded-3xl border ${c.border} ${c.bg} overflow-hidden`} delay={50}>
          <div className="grid lg:grid-cols-2">

            {/* Left: description */}
            <div className="p-10 lg:p-14 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/[0.06]">
              <div>
                <p className={`text-2xs font-semibold tracking-[0.2em] uppercase mb-4 ${c.eyebrow}`}>
                  {s.eyebrow}
                </p>
                <h3 className="font-serif font-semibold text-cream mb-6"
                    style={{ fontSize: 'clamp(26px, 3vw, 38px)', lineHeight: '1.15' }}>
                  {s.headline}
                </h3>
                <p className="text-sm text-cream/60 leading-relaxed mb-8">
                  {s.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span
                      key={t}
                      className={`text-2xs font-medium px-3 py-1 rounded-full border ${c.tag}`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Methodology */}
              <div className="mt-10">
                <p className="text-2xs font-semibold tracking-[0.15em] uppercase text-cream/30 mb-4">
                  Metodologias
                </p>
                <div className="flex flex-col gap-2">
                  {s.methods.map((m) => (
                    <div key={m} className="flex items-center gap-3 text-sm text-cream/55">
                      <ChevronRight size={13} className={c.accent} />
                      {m}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: scope list */}
            <div className="p-10 lg:p-14">
              <p className="text-2xs font-semibold tracking-[0.15em] uppercase text-cream/30 mb-8">
                Escopo de Atuação
              </p>
              <ul className="flex flex-col">
                {s.scope.map((item, i) => (
                  <li
                    key={item}
                    className="flex items-start gap-4 py-4 border-b border-white/[0.05]
                               last:border-b-0 group"
                  >
                    <span className={`text-2xs font-bold tracking-wide text-cream/20 mt-0.5 flex-shrink-0`}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="text-sm text-cream/65 leading-relaxed
                                     group-hover:text-cream/90 transition-colors">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
