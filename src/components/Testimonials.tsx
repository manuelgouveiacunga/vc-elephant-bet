export default function Testimonials() {
  return (
    <section className="py-16 relative bg-transparent z-10">
      <div className="container mx-auto px-4 mt-10 mb-10">
        <div className="text-center mb-10">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 drop-shadow-md">
            Resultados de Quem Já Ganhou
          </h3>
          <p className="text-gray-300">
            Inspira-te com o sucesso dos nossos jogadores
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[9/16] md:aspect-video bg-black group">
            <video
              src="/testemunha_ganhos.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <p className="text-white font-bold">Vitória Surpresa</p>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[9/16] md:aspect-video bg-black group">
            <video
              src="/testemunha_ganho_aviator.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <p className="text-white font-bold">Ganhos no Aviator</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
