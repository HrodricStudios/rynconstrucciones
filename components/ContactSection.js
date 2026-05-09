import { FaPhone, FaEnvelope, FaInstagram, FaFacebook, FaMapMarkerAlt } from 'react-icons/fa'

export default function ContactSection() {
  return (
    <section id="contacto" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-4">Contacto</h2>
        <p className="text-center text-secondary max-w-2xl mx-auto mb-12">
          Estamos en Pergamino para asesorarte.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <FaPhone className="text-primary text-2xl mt-1" />
              <div>
                <h3 className="font-semibold text-lg text-dark">Construcciones RYN</h3>
                <p className="text-secondary">+54 2477 61-9534</p>
                <p className="text-secondary">+54 2477 31-2472</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <FaPhone className="text-primary text-2xl mt-1" />
              <div>
                <h3 className="font-semibold text-lg text-dark">Casa RYN (grifería y sanitarios)</h3>
                <p className="text-secondary">+54 2477 46-7749</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <FaEnvelope className="text-primary text-2xl mt-1" />
              <div>
                <h3 className="font-semibold text-lg text-dark">Email</h3>
                <p className="text-secondary">rynconstrucciones1@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-primary text-2xl mt-1" />
              <div>
                <h3 className="font-semibold text-lg text-dark">Ubicación</h3>
                <p className="text-secondary">Pergamino, Buenos Aires</p>
              </div>
            </div>
            <div className="flex gap-6 pt-4">
              <a href="https://www.instagram.com/construcciones_ryn/" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-primary text-3xl transition">
                <FaInstagram />
              </a>
              <a href="https://www.facebook.com/p/Constructora-RyN-100051375584091/" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-primary text-3xl transition">
                <FaFacebook />
              </a>
            </div>
          </div>
          <div className="bg-gray-100 rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-dark">Envíanos un mensaje</h3>
            <form action="mailto:rynconstrucciones1@gmail.com" method="post" encType="text/plain">
              <div className="mb-4">
                <label className="block text-dark mb-2">Nombre</label>
                <input type="text" className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-primary" />
              </div>
              <div className="mb-4">
                <label className="block text-dark mb-2">Email</label>
                <input type="email" className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-primary" />
              </div>
              <div className="mb-4">
                <label className="block text-dark mb-2">Mensaje</label>
                <textarea rows="4" className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-primary"></textarea>
              </div>
              <button type="submit" className="bg-primary text-white px-6 py-2 rounded hover:bg-opacity-90 transition w-full">Enviar</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}