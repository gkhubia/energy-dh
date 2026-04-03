'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

const links = [
  { label: 'Quem Somos', href: '#quem-somos' },
  { label: 'Serviços', href: '#servicos' },
  { label: '+EloEnergy', href: '#eloenergy' },
  { label: 'Metodologia', href: '#metodologia' },
  { label: 'Time', href: '#time' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleLink = (href: string) => {
    setOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-navy-deep/95 backdrop-blur-xl border-b border-white/[0.06] shadow-xl shadow-black/20'
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-12 h-[72px] flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center group"
            aria-label="Energy DH — início"
          >
            <Image
              src="/logo-energydh.png"
              alt="Energy DH"
              width={140}
              height={48}
              className="h-14 w-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity"
              priority
            />
          </button>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-1">
            {links.map(({ label, href }) => (
              <li key={href}>
                <button
                  onClick={() => handleLink(href)}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200
                    ${href === '#eloenergy'
                      ? 'text-gold-bright hover:bg-gold/10'
                      : 'text-cream/60 hover:text-cream hover:bg-white/[0.05]'
                    }`}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={() => handleLink('#contato')}
              className="px-5 py-2.5 rounded-full bg-teal text-white text-sm font-medium
                         tracking-wide transition-all duration-300 hover:bg-teal-light
                         hover:shadow-lg hover:shadow-teal/20"
            >
              Falar com um Especialista
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 rounded-lg text-cream/70 hover:text-cream hover:bg-white/5
                       transition-colors"
            aria-label="Menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-navy-deep/95 backdrop-blur-xl"
          onClick={() => setOpen(false)}
        />
        <nav className="absolute top-[72px] left-0 right-0 p-6 border-t border-white/[0.07]">
          <ul className="flex flex-col gap-1 mb-8">
            {links.map(({ label, href }) => (
              <li key={href}>
                <button
                  onClick={() => handleLink(href)}
                  className="w-full text-left px-4 py-3 text-base text-cream/70 hover:text-cream
                             hover:bg-white/5 rounded-xl font-medium transition-colors"
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
          <button
            onClick={() => handleLink('#contato')}
            className="w-full py-3.5 rounded-full bg-teal text-white text-sm font-medium
                       tracking-wide text-center"
          >
            Falar com um Especialista
          </button>
        </nav>
      </div>
    </>
  )
}
