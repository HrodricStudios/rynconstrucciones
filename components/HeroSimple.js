'use client'

export default function HeroSimple() {
  return (
    <section 
      id="inicio" 
      className="relative w-full h-[500px] md:h-[600px] lg:h-[700px]"
      style={{
        backgroundImage: "url('/frente.png')",
        backgroundSize: "cover",
        backgroundPosition: "70% center",
        backgroundRepeat: "no-repeat"
      }}
    >
      {/* Contenedor centrado verticalmente y alineado a la izquierda */}
      <div className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 z-10 max-w-xl">
        {/* Frase de la empresa */}
        <p className="text-white text-2xl md:text-4xl font-bold mb-8 drop-shadow-lg">
          Donde los martillos cantan canciones de éxito
        </p>
        {/* Botones grandes debajo */}
        <div className="flex gap-4 flex-wrap">
          <a
            href="#servicios"
            className="bg-primary text-white px-10 py-4 rounded-md hover:bg-opacity-90 transition font-bold text-xl shadow-lg"
          >
            Nuestros Servicios
          </a>
          <a
            href="#contacto"
            className="border-2 border-white text-white px-10 py-4 rounded-md hover:bg-white hover:text-primary transition font-bold text-xl shadow-lg"
          >
            Contacto
          </a>
        </div>
      </div>
    </section>
  )
}
