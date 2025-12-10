export default function Hero() {
  const handleRegister = () => {
    window.open('https://www.elephantbet.co.ao/affiliates/?btag=2393072', '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="home" className="relative bg-gradient-to-br from-gray-50 to-gray-100 py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyNDM2NkUiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE2YzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptLTQgMjhjLTIuMjEgMC00IDEuNzktNCA0czEuNzkgNCA0IDQgNC0xLjc5IDQtNC0xLjc5LTQtNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-50"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 flex justify-center animate-fade-in">
            <img
              src="/imagem_de_extensao_do_photoshop.jpeg"
              alt="Elephant Bet Angola"
              className="h-24 md:h-32 object-contain drop-shadow-2xl"
            />
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#24366E] mb-6 animate-slide-up">
            Elephant Bet Angola – Regista a tua conta agora
          </h1>

          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto animate-slide-up animation-delay-200">
            O teu guia completo para começar a apostar na Elephant Bet.
            Aprende como criar conta, fazer depósitos e aproveitar os melhores bónus.
          </p>

          <button
            onClick={handleRegister}
            className="bg-[#F72585] text-white font-bold text-lg px-8 py-4 rounded-full hover:bg-[#d41d6f] transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl animate-slide-up animation-delay-400"
          >
            Registrar Agora
          </button>

          <p className="mt-6 text-sm text-gray-600 animate-fade-in animation-delay-600">
            Processo rápido e seguro • Bónus de boas-vindas disponível
          </p>
        </div>
      </div>
    </section>
  );
}
