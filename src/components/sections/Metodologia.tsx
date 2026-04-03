'use client'

import Reveal from '@/components/ui/Reveal'

const cs = [
  {
    id: 'C1',
    name: 'Compliance',
    color: 'burgundy' as const,
    description: 'Normas, fluxos, POPs e governança. O alicerce de qualquer implantação sustentável.',
    tags: ['POPs', 'BPM', 'Normas', 'Governança'],
  },
  {
    id: 'C2',
    name: 'Clarification',
    color: 'teal' as const,
    description: 'Quem faz o quê. Organograma, RACI, cargos e alçadas de decisão claramente definidos.',
    tags: ['RACI', 'Cargos', 'Organograma', 'Design Org.'],
  },
  {
    id: 'C3',
    name: 'Confidence',
    color: 'burgundy' as const,
    description: 'Capacitação técnica e comportamental. Pessoas que sabem e confiam no processo.',
    tags: ['T&D', 'Trilhas', 'PDI', 'Liderança'],
  },
  {
    id: 'C4',
    name: 'Connection',
    color: 'teal' as const,
    description: 'Integração entre áreas, rituais de gestão e alinhamento estratégico contínuo.',
    tags: ['Times', 'Rituais', 'Comunicação', 'HRBP'],
  },
  {
    id: 'C5',
    name: 'Culture',
    color: 'burgundy' as const,
    description: 'Valores, disciplina operacional e mentalidade de melhoria contínua internalizados.',
    tags: ['Valores', 'Clima', 'Identidade', 'Disciplina'],
  },
  {
    id: 'C6',
    name: 'Checkback',
    color: 'teal' as const,
    description: 'KPIs, auditorias e ciclos de melhoria. O que não é monitorado não sustenta.',
    tags: ['KPIs', 'OKR', 'Auditoria', 'Conformidade'],
  },
]

const steps = [
  {
    num: '01',
    name: 'Diagnóstico',
    desc: 'Mapeamento completo da organização — processos, pessoas e cultura',
    dims: ['Processos', 'Pessoas'],
  },
  {
    num: '02',
    name: 'Desenho & Estruturação',
    desc: 'Modelagem TO-BE, arquitetura de cargos, competências e cultura',
    dims: ['BPM · RACI', 'Design Org.'],
  },
  {
    num: '03',
    name: 'Implantação',
    desc: 'Execução e activação dos processos e subsistemas com os times',
    dims: ['Processos', 'Pessoas'],
  },
  {
    num: '04',
    name: 'Capacitação',
    desc: 'Treinamento, trilhas e desenvolvimento para internalização',
    dims: ['T&D', 'Liderança'],
  },
  {
    num: '05',
    name: 'Monitoramento',
    desc: 'Acompanhamento de KPIs, OKRs e indicadores de pessoas',
    dims: ['Checkback', 'Analytics'],
  },
  {
    num: '06',
    name: 'Evolução',
    desc: 'Revisão, melhoria e escalabilidade do modelo implantado',
    dims: ['Melhoria Contínua', 'Crescimento'],
  },
]

const colorMap = {
  burgundy: {
    head: 'bg-burgundy/30 border-burgundy/40',
    id: 'text-red-300/60',
    name: 'text-red-200',
    tag: 'bg-burgundy/15 border-burgundy/25 text-red-200/70',
  },
  teal: {
    head: 'bg-teal/30 border-teal/40',
    id: 'text-cyan-300/60',
    name: 'text-cyan-100',
    tag: 'bg-teal/15 border-teal/25 text-cyan-200/70',
  },
}

export default function Metodologia() {
  return (
    <section id="metodologia" className="py-28 lg:py-36 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r
                        from-transparent via-white/[0.08] to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r
                        from-transparent via-white/[0.08] to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* 6Cs */}
        <Reveal className="text-center mb-16">
          <p className="section-label mb-3">Metodologia Própria · Inspirado em Talya N. Bauer</p>
          <h2 className="section-heading text-4xl lg:text-5xl mb-5">Os 6Cs</h2>
          <div className="section-divider mx-auto mb-6" />
          <p className="text-sm text-cream/50 max-w-2xl mx-auto leading-relaxed">
            Toda implantação organizacional é um processo de integração. A Energy DH adaptou o
            modelo de socialização de Talya N. Bauer para a consultoria empresarial — aplicando
            os 6Cs a processos, cultura, RH e gestão estratégica.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-28">
          {cs.map((c, i) => (
            <Reveal key={c.id} delay={i * 80}>
              <div className="card-base overflow-hidden h-full">
                <div className={`px-6 py-4 flex items-center gap-4 border-b border-white/[0.06]
                                 ${colorMap[c.color].head}`}>
                  <span className={`text-2xs font-bold tracking-[0.15em] uppercase ${colorMap[c.color].id}`}>
                    {c.id}
                  </span>
                  <span className={`font-serif font-semibold text-lg ${colorMap[c.color].name}`}>
                    {c.name}
                  </span>
                </div>
                <div className="px-6 py-5">
                  <p className="text-sm text-cream/60 leading-relaxed mb-4">{c.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {c.tags.map((t) => (
                      <span
                        key={t}
                        className={`text-2xs font-medium px-2.5 py-1 rounded-full border
                                    ${colorMap[c.color].tag}`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Ciclo Energy DH */}
        <Reveal className="text-center mb-16">
          <p className="section-label mb-3">Metodologia Integrada</p>
          <h2 className="section-heading text-4xl lg:text-5xl mb-5">Ciclo Energy DH</h2>
          <div className="section-divider mx-auto mb-6" />
          <p className="text-sm text-cream/50 max-w-2xl mx-auto leading-relaxed">
            Um ciclo contínuo de transformação que integra Gestão de Processos e Cultura
            & Negócios em uma metodologia única, orientada a resultado mensurável.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {steps.map((step, i) => (
            <Reveal key={step.num} delay={i * 80}>
              <div className="card-base p-7 h-full group hover:-translate-y-1">
                <div className="flex items-center gap-4 mb-5">
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{
                      background: i < 3
                        ? 'linear-gradient(135deg, rgba(122,0,30,0.5), rgba(122,0,30,0.2))'
                        : 'linear-gradient(135deg, rgba(11,98,117,0.5), rgba(11,98,117,0.2))',
                      border: `1.5px solid ${i < 3 ? 'rgba(122,0,30,0.5)' : 'rgba(11,98,117,0.5)'}`,
                    }}
                  >
                    <span className="font-serif font-bold text-sm text-cream/70">
                      {step.num}
                    </span>
                  </div>
                  <h3 className="font-serif font-semibold text-cream text-lg leading-tight">
                    {step.name}
                  </h3>
                </div>
                <p className="text-sm text-cream/55 leading-relaxed mb-5">{step.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {step.dims.map((d) => (
                    <span
                      key={d}
                      className="text-2xs font-medium px-2.5 py-1 rounded-full border
                                 bg-white/5 border-white/[0.08] text-cream/40"
                    >
                      {d}
                    </span>
                  ))}
                </div>
                {/* Step connector */}
                {i < steps.length - 1 && (
                  <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 hidden lg:block">
                    <div className="w-px h-5 bg-gradient-to-b from-white/10 to-transparent" />
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
