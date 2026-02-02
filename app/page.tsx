import Hero from '@/components/Hero'
import BeforeAfter from '@/components/BeforeAfter'
import Services from '@/components/Services'
import Features from '@/components/Features'
import HowItWorks from '@/components/HowItWorks'
import ServiceAreas from '@/components/ServiceAreas'
import CallToAction from '@/components/CallToAction'

export default function Home() {
  return (
    <main>
      <Hero />
      <BeforeAfter />
      <Services />
      <Features />
      <HowItWorks />
      <ServiceAreas />
      <CallToAction />
    </main>
  )
}
