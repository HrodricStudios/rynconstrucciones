export default function Footer() {
  return (
    <footer className="bg-dark text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} Construcciones RYN - Todos los derechos reservados</p>
        <p className="text-gray-400 text-sm mt-2">
          Desarrollado por{" "}
          <a
            href="https://github.com/HrodricStudios"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            Hrodric Studios
          </a>
        </p>
      </div>
    </footer>
  )
}