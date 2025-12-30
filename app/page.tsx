import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Features from '@/components/Features'
import HowItWorks from '@/components/HowItWorks'
import BeforeAfterGallery from '@/components/BeforeAfterGallery'
import ServiceAreas from '@/components/ServiceAreas'
import Testimonials from '@/components/Testimonials'
import CallToAction from '@/components/CallToAction'
import Footer from '@/components/Footer'
import Navigation from '@/components/Navigation'
import SchemaMarkup from '@/components/SchemaMarkup'

export default function Home() {
  return (
    <>
      <SchemaMarkup />
      <Navigation />
      <main>
        <Hero />
        <Services />
        <Features />
        <HowItWorks />
        <BeforeAfterGallery />
        <ServiceAreas />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </>
  )
}
