import { useEffect, useState } from "react";

export default function Hero() {
  const [current, setCurrent] = useState(0);

  const images = [
    "/banner_chave.png",
    "/banner_gibele.png",
    "/banner_chave.png", // podes repetir ou trocar
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000); // troca a cada 4s

    return () => clearInterval(interval);
  }, [images.length]);

  const handleRegister = () => {
    window.open(
      "https://www.elephantbet.co.ao/affiliates/?btag=2393072",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section
      id="home"
      className="relative w-full h-[90vh] md:h-screen flex items-center justify-center overflow-hidden"
    >
      {/* CARROSSEL BACKGROUND */}
      <div className="absolute inset-0">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt=""
            className={`
              absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 blur-sm
              ${current === index ? "opacity-100" : "opacity-0"}
            `}
          />
        ))}
      </div>

      {/* OVERLAY ESCURO PARA DAR LEITURA */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* CONTEÚDO */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="mb-8 flex justify-center">
          <img
            src="/Imagem de extensão do Photoshop.png"
            alt="Elephant Bet Angola"
            className="h-24 md:h-32 object-contain drop-shadow-xl"
          />
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Elephant Bet Angola – Regista a tua conta agora
        </h1>

        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          O teu guia completo para começar a apostar na Elephant Bet. Aprende
          como criar conta, fazer depósitos e aproveitar os melhores bónus.
        </p>

        <button
          onClick={handleRegister}
          className="bg-[#F72585] text-white font-bold text-lg px-8 py-4 rounded-full hover:bg-[#d41d6f] transform hover:scale-105 transition-all shadow-xl hover:shadow-2xl"
        >
          Registrar Agora
        </button>

        <p className="mt-6 text-sm text-gray-200">
          Processo rápido e seguro • Bónus de boas-vindas disponível
        </p>
      </div>
    </section>
  );
}
