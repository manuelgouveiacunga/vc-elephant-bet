import { useEffect, useState } from "react";

export default function Hero() {
  const [current, setCurrent] = useState(0);

  const images = [
    "/banner_chave.png",
    "/banner_gibele.png",
    "/banner_chave.png", 
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  const handleRegister = () => {
    const affiliateUrl = "https://www.elephantbet.co.ao/pt/?action=register&btag=2393072";
    window.open(affiliateUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="home" className="relative w-full flex flex-col items-center justify-start overflow-hidden pt-12 pb-24">
      {/* Background Carousel */}
      <div className="absolute inset-0 z-0">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt=""
            className={`
              absolute inset-0 w-full h-full object-cover transition-opacity duration-1000
              ${current === index ? "opacity-100" : "opacity-0"}
            `}
          />
        ))}
        {/* Dark overlay to maintain the dark premium theme */}
        <div className="absolute inset-0 bg-[#13072A]/80"></div>
      </div>
      
      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#F72585] rounded-full mix-blend-screen filter blur-[150px] opacity-30 z-0"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#4361ee] rounded-full mix-blend-screen filter blur-[150px] opacity-30 z-0"></div>

      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center mt-10">
        {/* Main Banner / CTA Area */}
        <div className="w-full max-w-5xl rounded-3xl bg-gradient-to-r from-[#4A154B] to-[#2B0E63] p-1 border border-white/10 shadow-2xl overflow-hidden mb-16 relative">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
          <div className="bg-gradient-to-br from-[#3b0a68] to-[#1d0840] rounded-[22px] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between relative z-10">
            
            <div className="md:w-1/2 text-left mb-8 md:mb-0">
              <img
                src="/Imagem de extensão do Photoshop.png"
                alt="Elephant Bet Angola"
                className="h-20 object-contain mb-6 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
              />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 tracking-tight leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
                CHANCE <br /> <span className="text-[#F72585] drop-shadow-[0_0_10px_rgba(247,37,133,0.8)]">DUPLA</span>
              </h1>
              <p className="text-xl md:text-2xl font-bold mb-2">
                Ganhe <span className="text-white bg-[#F72585] px-3 py-1 rounded-lg italic">VOOS GRÁTIS</span>
              </p>
              <p className="text-lg text-gray-300 mb-8 max-w-md">
                O teu guia completo para começar a apostar na Elephant Bet. Regista a tua conta agora!
              </p>
            </div>

            <div className="md:w-1/2 flex flex-col items-center justify-center">
              <button
                onClick={handleRegister}
                className="relative group bg-gradient-to-r from-[#F72585] to-[#b5179e] text-white font-black text-2xl md:text-3xl px-12 py-6 rounded-full transform hover:scale-110 transition-all duration-300 shadow-[0_0_40px_rgba(247,37,133,0.6)] hover:shadow-[0_0_60px_rgba(247,37,133,0.9)] animate-pulse w-full max-w-md border-4 border-white/20"
              >
                <span className="relative z-10">REGISTRAR AGORA</span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 rounded-full transition-opacity"></div>
              </button>
              <p className="mt-6 text-sm md:text-base font-semibold text-gray-300 bg-black/30 px-6 py-2 rounded-full border border-white/10">
                Bónus de boas-vindas disponível!
              </p>
            </div>
            
          </div>
        </div>

        {/* Promotional Cards Row */}
        <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
          
          {/* Aviator Card Image */}
          <div onClick={handleRegister} className="cursor-pointer group rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(201,24,74,0.3)] hover:shadow-[0_10px_40px_rgba(201,24,74,0.6)] hover:-translate-y-2 transition-all duration-300">
            <img src="/aviator.PNG" alt="Aviator" className="w-full h-auto object-cover rounded-2xl border border-white/10" />
          </div>

          {/* JetX Card Image */}
          <div onClick={handleRegister} className="cursor-pointer group rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(22,26,29,0.5)] hover:shadow-[0_10px_40px_rgba(255,183,3,0.4)] hover:-translate-y-2 transition-all duration-300">
            <img src="/jetX.PNG" alt="JetX" className="w-full h-auto object-cover rounded-2xl border border-white/10" />
          </div>

          {/* Blast Card Image */}
          <div onClick={handleRegister} className="cursor-pointer group rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,119,182,0.3)] hover:shadow-[0_10px_40px_rgba(0,180,216,0.6)] hover:-translate-y-2 transition-all duration-300">
            <img src="/blast.PNG" alt="Blast" className="w-full h-auto object-cover rounded-2xl border border-white/10" />
          </div>

        </div>
      </div>
    </section>
  );
}
