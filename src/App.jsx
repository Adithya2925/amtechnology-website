import { useState } from 'react'
import ParticleCanvas from './components/ParticleCanvas'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ServicesSection from './components/ServicesSection'
import AIAgentsShowcase from './components/AIAgentsShowcase'
import WhyUs from './components/WhyUs'
import ProcessSection from './components/ProcessSection'
import TechStack from './components/TechStack'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ConsultationModal from './components/ConsultationModal'

export default function App() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false)
  const [preselectedService, setPreselectedService] = useState('')

  const handleOpenConsultation = (service = '') => {
    setPreselectedService(typeof service === 'string' ? service : '')
    setIsConsultationOpen(true)
  }

  const handleSelectAgent = () => {
    const el = document.getElementById('ai-agents')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="relative min-h-screen bg-[#08090D] text-white selection:bg-[#477BFF]/30 selection:text-white overflow-x-hidden">
      {/* Dynamic Background Particle System */}
      <ParticleCanvas />

      {/* Navigation Header */}
      <Navbar onOpenConsultation={handleOpenConsultation} />

      {/* Main Content Sections */}
      <main className="relative z-10 flex flex-col">
        <Hero onOpenConsultation={handleOpenConsultation} />
        <ServicesSection 
          onOpenConsultation={handleOpenConsultation} 
          onSelectAgent={handleSelectAgent} 
        />
        <AIAgentsShowcase onOpenConsultation={handleOpenConsultation} />
        <WhyUs />
        <ProcessSection onOpenConsultation={handleOpenConsultation} />
        <TechStack />
        <Portfolio onOpenConsultation={handleOpenConsultation} />
        <Contact onOpenConsultation={handleOpenConsultation} />
      </main>

      {/* Global Footer */}
      <Footer onOpenConsultation={handleOpenConsultation} />

      {/* Global Consultation Modal Popup */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        preselectedService={preselectedService}
      />
    </div>
  )
}
