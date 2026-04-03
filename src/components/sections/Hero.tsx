'use client'

import { useEffect, useRef } from 'react'
import { ArrowRight, ChevronDown } from 'lucide-react'

const stats = [
  { value: '2', label: 'Dimensões Integradas' },
  { value: '6', label: 'Pilares Metodológicos' },
  { value: '1', label: 'Sistema +EloEnergy' },
]

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let frame = 0
    let raf: number

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const particles: {
      x: number; y: number; vx: number; vy: number; r: number; alpha: number
    }[] = Array.from({ length: 55 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 1.5 + 0.4,
      alpha: Math.random() * 0.3 + 0.05,
    }))

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      frame++

      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(232,232,216,${p.alpha})`
        ctx.fill()
      })

      // Soft grid lines
      ctx.strokeStyle = 'rgba(232,232,216,0.025)'
      ctx.lineWidth = 1
      const gSize = 96
      for (let x = 0; x < canvas.width; x += gSize) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, canvas.height); ctx.stroke()
      }
      for (let y = 0; y < canvas.height; y += gSize) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(canvas.width, y); ctx.stroke()
      }

      raf = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center
                        text-center px-6 pt-[72px] overflow-hidden">

      {/* Ambient gradient backgrounds */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full
                        bg-teal/[0.08] blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full
                        bg-burgundy/[0.07] blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                        w-[800px] h-[400px] rounded-full bg-navy-mid/50 blur-[100px]" />
      </div>

      {/* Canvas particles */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ opacity: 0.7 }}
      />

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">

        {/* Eyebrow */}
        <div
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full
                      border border-teal/30 bg-teal/10 mb-10"
          style={{ animation: 'fadeUp 0.7s ease both' }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-teal shadow-[0_0_8px_rgba(11,98,117,1)]" />
          <span className="text-2xs font-semibold tracking-[0.18em] uppercase text-cream/70">
            Consultoria Estratégica · Gestão de Pessoas &amp; Processos
          </span>
        </div>

        {/* Headline */}
        <h1
          className="font-serif font-semibold text-cream leading-[1.08] mb-6"
          style={{
            fontSize: 'clamp(38px, 6vw, 80px)',
            animation: 'fadeUp 0.8s 0.1s ease both',
          }}
        >
          Resultados reais começam com{' '}
          <span className="relative inline-block text-gold-bright">
            pessoas no lugar certo
            <span
              className="absolute bottom-0 left-0 right-0 h-[2px] rounded-full"
              style={{
                background: 'linear-gradient(90deg, #7a001e, #e8b535, #0b6275)',
              }}
            />
          </span>{' '}
          e processos que funcionam.
        </h1>

        {/* Subheadline */}
        <p
          className="text-base lg:text-lg text-cream/60 font-light max-w-2xl leading-relaxed mb-10"
          style={{ animation: 'fadeUp 0.8s 0.2s ease both' }}
        >
          Consultoria especializada na integração de Gestão de Processos e
          Subsistemas de Pessoas — do diagnóstico ao resultado mensurável.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row gap-4 mb-16"
          style={{ animation: 'fadeUp 0.8s 0.3s ease both' }}
        >
          <button
            onClick={() => {
              document.querySelector('#servicos')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="btn-primary"
          >
            Conhecer a Metodologia
            <ArrowRight size={16} />
          </button>
          <button
            onClick={() => {
              document.querySelector('#eloenergy')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="btn-gold"
          >
            +EloEnergy
          </button>
        </div>

        {/* Stats */}
        <div
          className="flex items-stretch divide-x divide-white/[0.08] rounded-2xl
                      border border-white/[0.07] bg-white/[0.03] backdrop-blur-sm overflow-hidden"
          style={{ animation: 'fadeUp 0.8s 0.45s ease both' }}
        >
          {stats.map(({ value, label }) => (
            <div
              key={label}
              className="px-8 py-5 text-center hover:bg-white/[0.04] transition-colors"
            >
              <div className="font-serif font-semibold text-gold-bright mb-1"
                   style={{ fontSize: 'clamp(24px, 3vw, 36px)' }}>
                {value}
              </div>
              <div className="text-2xs font-medium tracking-[0.08em] uppercase text-cream/40">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => {
          document.querySelector('#quem-somos')?.scrollIntoView({ behavior: 'smooth' })
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center
                   gap-2 text-cream/25 hover:text-cream/50 transition-colors group"
        style={{ animation: 'fadeUp 0.8s 0.6s ease both' }}
        aria-label="Rolar para baixo"
      >
        <span className="text-2xs tracking-[0.15em] uppercase font-medium">Scroll</span>
        <ChevronDown
          size={16}
          className="animate-bounce group-hover:text-teal transition-colors"
        />
      </button>
    </section>
  )
}
