import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Construcciones RYN | Construcción y Reformas en Pergamino',
  description: 'Empresa constructora familiar en Pergamino, Buenos Aires.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}