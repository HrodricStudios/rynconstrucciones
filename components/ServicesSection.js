import { FaHardHat, FaHome, FaBolt, FaCubes, FaPaintRoller, FaTractor } from 'react-icons/fa'

const services = [
  { title: 'Construcción llave en mano', desc: 'Entregamos tu obra lista para habitar.', icon: FaHardHat },
  { title: 'Reformas y remodelaciones', desc: 'Modernizamos tus espacios.', icon: FaHome },
  { title: 'Instalaciones', desc: 'Eléctricas, agua, cloacas.', icon: FaBolt },
  { title: 'Construcción en Seco', desc: 'Técnica rápida y eficiente.', icon: FaCubes },
  { title: 'Revestimientos', desc: 'Pisos y paredes.', icon: FaPaintRoller },
  { title: 'Construcción Rural', desc: 'Viviendas y proyectos rurales.', icon: FaTractor }
]

export default function ServicesSection() {
  return (
    <section id="servicios" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-4">Nuestros Servicios</h2>
        <p className="text-center text-secondary max-w-2xl mx-auto mb-12">
          Ofrecemos soluciones integrales en construcción, adaptándonos a tus necesidades.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition text-center group">
              <div className="text-5xl text-primary mb-4 flex justify-center group-hover:scale-110 transition">
                <service.icon />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-dark">{service.title}</h3>
              <p className="text-secondary">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}