'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const handleLogoClick = (e) => {
    e.preventDefault()
    document.getElementById('inicio')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-5 flex justify-between items-center">
        <Link href="#inicio" onClick={handleLogoClick} className="flex items-center">
          <Image 
            src="/logo.png" 
            alt="Construcciones RYN Logo" 
            width={220} 
            height={80} 
            className="h-16 md:h-20 w-auto"
            priority
          />
        </Link>
        
        <div className="hidden md:flex items-center space-x-6">
          <Link href="#inicio" className="text-primary text-lg font-semibold hover:opacity-80 transition">Inicio</Link>
          <Link href="#servicios" className="text-primary text-lg font-semibold hover:opacity-80 transition">Servicios</Link>
          <Link href="#proyectos" className="text-primary text-lg font-semibold hover:opacity-80 transition">Proyectos</Link>
          <Link href="#contacto" className="text-primary text-lg font-semibold hover:opacity-80 transition">Contacto</Link>
          <a 
            href="#contacto" 
            className="bg-primary text-white px-5 py-2 rounded-md hover:bg-opacity-90 transition text-base font-semibold"
          >
            Pedir presupuesto
          </a>
        </div>

        <button className="md:hidden text-primary" onClick={() => setIsOpen(!isOpen)}>
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>
      
      {/* Menú móvil */}
      {isOpen && (
        <div className="md:hidden bg-white border-t py-5 px-6 flex flex-col space-y-5">
          <Link href="#inicio" onClick={() => setIsOpen(false)} className="text-primary text-lg font-semibold hover:opacity-80">Inicio</Link>
          <Link href="#servicios" onClick={() => setIsOpen(false)} className="text-primary text-lg font-semibold hover:opacity-80">Servicios</Link>
          <Link href="#contacto" onClick={() => setIsOpen(false)} className="text-primary text-lg font-semibold hover:opacity-80">Contacto</Link>
          <a 
            href="#contacto" 
            onClick={() => setIsOpen(false)}
            className="bg-primary text-white px-5 py-2 rounded-md hover:bg-opacity-90 transition text-center font-semibold"
          >
            Pedir presupuesto
          </a>
        </div>
      )}
    </nav>
  )
}