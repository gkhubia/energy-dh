'use client'

import Reveal from '@/components/ui/Reveal'
import { ArrowRight, Mail } from 'lucide-react'

const team = [
  {
    name: 'Sócia Fundadora',
    role: 'Gestão de Processos & Negócios',
    dimension: 'Processos',
    color: 'burgundy' as const,
    initials: 'GP',
  },
  {
    name: 'Sócia Fundadora',
    role: 'Cultura Organizacional & RH Estratégico',
    dimension: 'Pessoas',
    color: 'teal' as const,
    initials: 'RH',
  },
]

export default function Time() {
  return (
    <section id="time" className="py-28 lg:py-36 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <Reveal className="text-center mb-20">
          <p className="section-label mb-3">As Pessoas por Trás da Metodologia</p>
          <h2 className="section-heading text-4xl lg:text-5xl mb-5">Nosso Time</h2>
          <div className="section-divider mx-auto" />
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-24">
          {team.map((member, i) => (
            <Reveal key={i} delay={i * 120}>
              <div
                className={`card-base p-10 text-center flex flex-col items-center
                             ${member.color === 'burgundy' ? 'border-burgundy/25 bg-burgundy/[0.05]' : 'border-teal/25 bg-teal/[0.05]'}`}
              >
                {/* Avatar */}
                <div
                  className="w-24 h-24 rounded-full mb-6 flex items-center justify-center"
                  style={{
                    background: member.color === 'burgundy'
                      ? 'linear-gradient(135deg, rgba(122,0,30,0.5), rgba(122,0,30,0.2))'
                      : 'linear-gradient(135deg, rgba(11,98,117,0.5), rgba(11,98,117,0.2))',
                    border: `2px solid ${member.color === 'burgundy' ? 'rgba(122,0,30,0.5)' : 'rgba(11,98,117,0.5)'}`,
                    boxShadow: `0 0 32px ${member.color === 'burgundy' ? 'rgba(122,0,30,0.2)' : 'rgba(11,98,117,0.2)'}`,
                  }}
                >
                  <span className="font-serif font-bold text-2xl text-cream/60">
                    {member.initials}
                  </span>
                </div>

                <span
                  className={`text-2xs font-bold tracking-[0.15em] uppercase px-3 py-1 rounded-full mb-4
                               ${member.color === 'burgundy'
                                ? 'bg-burgundy/20 text-red-300/80 border border-burgundy/30'
                                : 'bg-teal/20 text-cyan-300/80 border border-teal/30'}`}
                >
                  {member.role.split('&')[0].trim()}
                </span>

                <h3 className="font-serif font-semibold text-cream text-2xl mb-2">
                  {member.name}
                </h3>
                <p className="text-sm text-cream/50 leading-relaxed">{member.role}</p>

                <div className="mt-6 flex items-center gap-2">
                  <div
                    className={`w-2 h-2 rounded-full flex-shrink-0
                                 ${member.color === 'burgundy' ? 'bg-burgundy' : 'bg-teal'}`}
                  />
                  <span className="text-2xs text-cream/35 tracking-wide uppercase font-medium">
                    {member.dimension}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* CTA final */}
        <Reveal id="contato" className="relative rounded-3xl overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(135deg, rgba(11,98,117,0.25) 0%, rgba(122,0,30,0.2) 100%)',
            }}
          />
          <div className="absolute inset-0 border border-white/[0.08] rounded-3xl pointer-events-none" />

          <div className="relative px-10 py-16 lg:py-20 text-center">
            <p className="section-label mb-4">Pronto para começar?</p>
            <h2
              className="font-serif font-semibold text-cream mb-6"
              style={{ fontSize: 'clamp(28px, 4vw, 52px)', lineHeight: '1.1' }}
            >
              Vamos transformar sua empresa juntos
            </h2>
            <p className="text-sm text-cream/55 max-w-xl mx-auto leading-relaxed mb-10">
              Do diagnóstico ao resultado mensurável. Nossa equipe está pronta
              para entender o seu negócio e propor um caminho concreto.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:contato@energydh.com.br"
                className="btn-primary"
              >
                <Mail size={16} />
                Falar com a Equipe
              </a>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="btn-ghost"
              >
                Ver mais sobre nós
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  )
}
