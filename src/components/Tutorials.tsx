import { useState } from "react";
import { Video, Wallet, X, ChevronLeft, ChevronRight } from "lucide-react";

interface Tutorial {
  icon: any;
  title: string;
  description: string;
  color: string;
  type: "video" | "image";
  content: string | string[];
}

const tutorials: Tutorial[] = [
  {
    icon: Video,
    title: "Como Criar Conta",
    description: "Vídeos passo a passo para criar a tua conta na Elephant Bet",
    color: "bg-blue-500",
    type: "video",
    content: "/como_abrir_conta.mp4",
  },
  {
    icon: Video,
    title: "Como Verificar Conta",
    description: "Processo completo para verificar a tua conta",
    color: "bg-orange-500",
    type: "video",
    content: "/como_verificar_conta.mp4",
  },
  {
    icon: Wallet,
    title: "Como Depositar",
    description: "Aprende a fazer depósitos de forma rápida e segura",
    color: "bg-purple-500",
    type: "image",
    content: ["/deposito_por_voucher.jpeg", "/deposito_pelo_express.jpeg"],
  },
];

export default function Tutorials() {
  const [selectedTutorial, setSelectedTutorial] = useState<Tutorial | null>(
    null
  );
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openTutorial = (tutorial: Tutorial) => {
    setSelectedTutorial(tutorial);
    setCurrentImageIndex(0);
  };

  const closeTutorial = () => {
    setSelectedTutorial(null);
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedTutorial && Array.isArray(selectedTutorial.content)) {
      setCurrentImageIndex(
        (prev) => (prev + 1) % selectedTutorial.content.length
      );
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedTutorial && Array.isArray(selectedTutorial.content)) {
      setCurrentImageIndex(
        (prev) =>
          (prev - 1 + selectedTutorial.content.length) %
          selectedTutorial.content.length
      );
    }
  };

  return (
    <section id="tutoriais" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#24366E] mb-4">
            Tutoriais em Vídeo e Imagem
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Aprende tudo o que precisas saber com os nossos tutoriais detalhados
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tutorials.map((tutorial, index) => (
            <div
              key={index}
              onClick={() => openTutorial(tutorial)}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group cursor-pointer"
            >
              <div
                className={`${tutorial.color} p-8 flex justify-center group-hover:scale-105 transition-transform duration-300`}
              >
                <tutorial.icon className="w-20 h-20 text-white" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className={`text-xs font-bold px-2 py-1 rounded uppercase tracking-wider ${
                      tutorial.type === "video"
                        ? "bg-blue-100 text-blue-600"
                        : "bg-purple-100 text-purple-600"
                    }`}
                  >
                    {tutorial.type === "video" ? "Vídeo" : "Imagens"}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#24366E] mb-2">
                  {tutorial.title}
                </h3>
                <p className="text-gray-600">{tutorial.description}</p>
                <button className="mt-4 text-[#F72585] font-semibold flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                  Ver Tutorial <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedTutorial && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
          onClick={closeTutorial}
        >
          <div
            className="relative max-w-5xl w-full bg-[#1a1a1a] rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeTutorial}
              className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/80 text-white rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="p-4 md:p-8">
              <h3 className="text-2xl font-bold text-white mb-6 pr-12">
                {selectedTutorial.title}
              </h3>

              <div className="relative aspect-video flex items-center justify-center bg-black rounded-lg overflow-hidden">
                {selectedTutorial.type === "video" ? (
                  <video
                    src={selectedTutorial.content as string}
                    controls
                    autoPlay
                    className="w-full h-full"
                  />
                ) : (
                  <div className="relative w-full h-full flex items-center justify-center">
                    <img
                      src={
                        Array.isArray(selectedTutorial.content)
                          ? selectedTutorial.content[currentImageIndex]
                          : selectedTutorial.content
                      }
                      alt={selectedTutorial.title}
                      className="max-w-full max-h-full object-contain"
                    />

                    {Array.isArray(selectedTutorial.content) &&
                      selectedTutorial.content.length > 1 && (
                        <>
                          <button
                            onClick={prevImage}
                            className="absolute left-4 p-2 bg-white/20 hover:bg-white/40 text-white rounded-full transition-all"
                          >
                            <ChevronLeft className="w-8 h-8" />
                          </button>
                          <button
                            onClick={nextImage}
                            className="absolute right-4 p-2 bg-white/20 hover:bg-white/40 text-white rounded-full transition-all"
                          >
                            <ChevronRight className="w-8 h-8" />
                          </button>
                          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                            {selectedTutorial.content.map((_, i) => (
                              <div
                                key={i}
                                className={`w-3 h-3 rounded-full transition-all ${
                                  i === currentImageIndex
                                    ? "bg-white scale-110"
                                    : "bg-white/30"
                                }`}
                              />
                            ))}
                          </div>
                        </>
                      )}
                  </div>
                )}
              </div>

              <p className="mt-6 text-gray-400 text-center italic">
                {selectedTutorial.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
