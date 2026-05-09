'use client'
import HeroSimple from '@/components/HeroSimple'
import ServicesSection from '@/components/ServicesSection'
import ProjectsSection from '@/components/ProjectsSection'
import FachadasSection from '@/components/FachadasSection'
import ContactSection from '@/components/ContactSection'

export default function Home() {
  return (
    <>
      <HeroSimple />
      <ServicesSection />
      <ProjectsSection />
      <FachadasSection />
      <ContactSection />
    </>
  )
}