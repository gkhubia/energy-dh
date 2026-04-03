import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Energy DH — Gestão de Pessoas, Processos & Negócios',
  description:
    'Consultoria especializada em Gestão de Pessoas e Processos. Transformamos operações em estratégia e equipes em vantagem competitiva.',
  keywords:
    'consultoria, gestão de pessoas, gestão de processos, RH estratégico, BPM, cultura organizacional, Fortaleza',
  authors: [{ name: 'Energy DH' }],
  openGraph: {
    title: 'Energy DH — Gestão de Pessoas, Processos & Negócios',
    description:
      'Consultoria especializada que integra Gestão de Processos e Subsistemas de Pessoas através do +EloEnergy.',
    type: 'website',
    locale: 'pt_BR',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="pt-BR"
      className={`${cormorant.variable} ${dmSans.variable}`}
    >
      <body className="grain">{children}</body>
    </html>
  )
}
