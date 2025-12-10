export default function Header() {
  return (
    <header className="bg-[#24366E] text-white py-4 sticky top-0 z-40 shadow-lg">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center text-xs">
            Logo
          </div>
          <span className="font-bold text-lg">Elephant Bet</span>
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="#home" className="hover:text-[#F72585] transition-colors">
            Início
          </a>
          <a href="#tutoriais" className="hover:text-[#F72585] transition-colors">
            Tutoriais
          </a>
          <a href="#guias" className="hover:text-[#F72585] transition-colors">
            Guias
          </a>
        </nav>
      </div>
    </header>
  );
}
