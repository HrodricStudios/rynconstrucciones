'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import Image from 'next/image'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { useState } from 'react'

const projectsData = [
  { category: 'Mesadas', images: ['/mesada1.jpg', '/mesada2.jpg', '/mesada3.jpg'] },
  { category: 'Casas', images: ['/casa1.jpg', '/casa2.jpg', '/casa3.jpg'] },
  { category: 'Baños', images: ['/baño1.webp', '/baño2.webp', '/baño3.webp'] }
]

export default function ProjectsSection() {
  const [imgErrors, setImgErrors] = useState({})

  const handleError = (category, index) => {
    setImgErrors(prev => ({ ...prev, [`${category}-${index}`]: true }))
  }

  return (
    <section id="proyectos" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-4">
          Proyectos
        </h2>
        <p className="text-center text-secondary max-w-2xl mx-auto mb-12">
          Conocé algunos de nuestros trabajos realizados
        </p>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          loop
          className="pb-12"
        >
          {projectsData.map((project, idx) => (
            <SwiperSlide key={idx}>
              <div>
                <h3 className="text-2xl font-semibold text-center text-dark mb-6">
                  {project.category}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {project.images.map((img, i) => {
                    const key = `${project.category}-${i}`
                    if (imgErrors[key]) return (
                      <div key={i} className="h-64 md:h-80 bg-gray-200 flex items-center justify-center rounded-lg">
                        <span className="text-gray-500">Imagen no disponible</span>
                      </div>
                    )
                    return (
                      <div
                        key={i}
                        className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-lg group cursor-pointer"
                      >
                        <Image
                          src={img}
                          alt={`${project.category} ${i + 1}`}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          sizes="(max-width: 768px) 100vw, 33vw"
                          onError={() => handleError(project.category, i)}
                        />
                      </div>
                    )
                  })}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}