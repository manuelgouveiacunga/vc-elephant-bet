import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-[#24366E] text-white py-4 sticky top-0 z-40 shadow-lg">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-32 h-12 flex items-center justify-center text-xs">
            <img src="./Imagem de extensão do Photoshop.png" alt="" />
          </div>
        </div>

        <nav className="hidden md:flex space-x-6">
          <a href="#home" className="hover:text-[#F72585] transition-colors">
            Início
          </a>
          <a
            href="#tutoriais"
            className="hover:text-[#F72585] transition-colors"
          >
            Tutoriais
          </a>
          <a href="#guias" className="hover:text-[#F72585] transition-colors">
            Guias
          </a>
        </nav>

        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-white mt-1.5 transition-all duration-300 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-white mt-1.5 transition-all duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          ></span>
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          <a
            href="#home"
            className="hover:text-[#F72585] transition-colors py-2 border-b border-white/20"
            onClick={closeMenu}
          >
            Início
          </a>
          <a
            href="#tutoriais"
            className="hover:text-[#F72585] transition-colors py-2 border-b border-white/20"
            onClick={closeMenu}
          >
            Tutoriais
          </a>
          <a
            href="#guias"
            className="hover:text-[#F72585] transition-colors py-2"
            onClick={closeMenu}
          >
            Guias
          </a>
        </nav>
      </div>
    </header>
  );
}
