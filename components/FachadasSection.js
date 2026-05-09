'use client'
import Image from 'next/image'

const fachadas = [
  { src: '/fachada0.webp', alt: 'Fachada 1' },
  { src: '/fachada2.jpg', alt: 'Fachada 2' },
  { src: '/fachada3.jpg', alt: 'Fachada 3' },
  { src: '/fachada4.jpg', alt: 'Fachada 4' },
  { src: '/ventanal.jpg', alt: 'Fachada 5'},
  { src: '/antesdespues.jpg', alt: 'Fachada 6' },
]

export default function FachadasSection() {
  return (
    <section id="fachadas" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-4">
          Nuestros Trabajos
        </h2>
        <p className="text-center text-secondary max-w-2xl mx-auto mb-12">
          Conocé algunas de nuestras fachadas y obras realizadas
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {fachadas.map((img, idx) => (
            <div key={idx} className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-lg group">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 33vw"
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}