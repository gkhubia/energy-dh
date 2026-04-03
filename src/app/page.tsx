import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import QuemSomos from '@/components/sections/QuemSomos'
import Servicos from '@/components/sections/Servicos'
import EloEnergy from '@/components/sections/EloEnergy'
import Metodologia from '@/components/sections/Metodologia'
import Time from '@/components/sections/Time'
import WhatsAppButton from '@/components/ui/WhatsAppButton'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <QuemSomos />
        <Servicos />
        <EloEnergy />
        <Metodologia />
        <Time />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
