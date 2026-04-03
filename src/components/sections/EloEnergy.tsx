'use client'

import Reveal from '@/components/ui/Reveal'

const connections = [
  { left: 'Processo tem um responsável', right: 'Esse responsável tem um cargo' },
  { left: 'Etapas do processo', right: 'Competências exigidas' },
  { left: 'Indicadores de processo', right: 'Metas de desempenho' },
  { left: 'Falhas no processo', right: 'Necessidades de treinamento' },
]

const pillars = [
  {
    title: 'Processos que fazem sentido',
    text: 'Quando o processo é mapeado tendo o cargo como referência, ele nasce com dono. Cada fluxo está associado a uma pessoa real — com competências mapeadas e trilha de desenvolvimento ativa.',
    tags: ['Dono do Processo', 'Responsabilidade Clara'],
  },
  {
    title: 'RH que nasce do negócio',
    text: 'O cargo define as competências necessárias para o processo. O R&S busca quem tem essas competências. A avaliação mede se elas estão sendo exercidas. O ciclo fecha.',
    tags: ['Competências por Cargo', 'Ciclo Fechado'],
  },
  {
    title: 'Resultado sem retrabalho',
    text: 'Empresas que estruturam processos e pessoas separadamente pagam o preço do retrabalho. O +EloEnergy elimina esse gap — gerando eficiência e desenvolvimento ao mesmo tempo.',
    tags: ['Integração Real', 'ROI Composto'],
  },
]

export default function EloEnergy() {
  return (
    <section
      id="eloenergy"
      className="py-28 lg:py-36 relative"
      style={{
        background: 'linear-gradient(180deg, rgba(184,134,11,0.04) 0%, transparent 40%, rgba(184,134,11,0.03) 100%)',
      }}
    >
      {/* Ambient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                        w-[700px] h-[400px] rounded-full bg-gold/[0.05] blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">

        {/* Header */}
        <Reveal className="text-center mb-20">
          <p className="text-2xs font-semibold tracking-[0.2em] uppercase text-gold/60 mb-3">
            Elo Integrador · Energy DH
          </p>
          <h2
            className="font-serif font-semibold text-gold-bright mb-5"
            style={{ fontSize: 'clamp(40px, 6vw, 72px)', lineHeight: '1.05' }}
          >
            +EloEnergy
          </h2>
          <div className="w-12 h-[2px] mx-auto mb-6"
               style={{ background: 'linear-gradient(90deg, #7a001e, #b8860b, #0b6275)' }} />
          <p className="font-serif text-lg text-cream/70 max-w-xl mx-auto italic font-light leading-relaxed">
            "O elo que transforma gestão de processos em desenvolvimento de
            pessoas — e pessoas em resultados."
          </p>
        </Reveal>

        {/* Concept explanation */}
        <Reveal className="max-w-3xl mx-auto mb-16 p-8 lg:p-10 rounded-2xl border border-gold/20
                           bg-gold/[0.05]" delay={100}>
          <p className="font-serif text-xl lg:text-2xl font-light text-cream/85 leading-relaxed">
            O +EloEnergy responde a uma pergunta simples e poderosa:{' '}
            <strong className="font-semibold text-gold-bright">
              quem executa o processo é o mesmo que é recrutado, avaliado e
              desenvolvido.
            </strong>{' '}
            O <em>Cargo</em> é o elo — e é por ele que processos e pessoas se encontram.
          </p>
        </Reveal>

        {/* Connection diagram */}
        <Reveal className="mb-20 rounded-2xl border border-white/[0.07] overflow-hidden bg-navy-deep/50"
                delay={150}>

          <div className="grid grid-cols-2 border-b border-white/[0.06]">
            <div className="px-8 py-5 bg-burgundy/20 border-r border-white/[0.06]">
              <span className="text-sm font-semibold text-red-300/90 tracking-wide">
                Braço Processos
              </span>
            </div>
            <div className="px-8 py-5 bg-teal/20">
              <span className="text-sm font-semibold text-cyan-300/90 tracking-wide">
                Braço Pessoas
              </span>
            </div>
          </div>

          {connections.map((row, i) => (
            <div
              key={i}
              className="grid grid-cols-2 border-b border-white/[0.04] last:border-b-0
                         hover:bg-white/[0.02] transition-colors group"
            >
              <div className="px-8 py-5 border-r border-white/[0.06] flex items-center gap-3">
                <div className="w-1 h-1 rounded-full bg-red-400/50 flex-shrink-0" />
                <span className="text-sm text-cream/60 group-hover:text-cream/80 transition-colors">
                  {row.left}
                </span>
              </div>
              <div className="px-8 py-5 flex items-center gap-3">
                <div className="w-1 h-1 rounded-full bg-cyan-400/50 flex-shrink-0" />
                <span className="text-sm text-gold-bright/80 font-medium group-hover:text-gold-bright transition-colors">
                  {row.right}
                </span>
              </div>
            </div>
          ))}

          {/* Central convergence */}
          <div className="px-8 py-6 border-t border-gold/20 flex items-center justify-center gap-4
                          bg-gold/[0.06]">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-gold/40" />
            <div className="px-6 py-2.5 rounded-full border border-gold/40 bg-gold/10">
              <span className="font-serif font-semibold text-gold-bright text-lg tracking-wide">
                Cargo
              </span>
              <span className="text-2xs font-medium tracking-[0.15em] uppercase text-gold/50 ml-2">
                o elo
              </span>
            </div>
            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-gold/40" />
          </div>
        </Reveal>

        {/* Three pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 100}>
              <div className="card-base p-8 border-gold/15 bg-gold/[0.04] h-full">
                <div className="w-8 h-8 rounded-full bg-gold/20 border border-gold/30
                                flex items-center justify-center mb-6">
                  <span className="font-serif font-bold text-gold-bright text-sm">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="font-serif font-semibold text-cream text-lg mb-4">
                  {p.title}
                </h3>
                <p className="text-sm text-cream/55 leading-relaxed mb-6">{p.text}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-2xs font-medium px-3 py-1 rounded-full
                                 bg-gold/10 border border-gold/25 text-gold/70"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
