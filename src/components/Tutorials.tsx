import { Video, ImageIcon, Wallet, TrendingUp } from "lucide-react";

const tutorials = [
  {
    icon: Video,
    title: "Como Criar Conta",
    description: "Vídeos passo a passo para criar a tua conta na Elephant Bet",
    color: "bg-blue-500",
  },
  {
    icon: Video,
    title: "Como Verificar Conta",
    description: "Processo completo para verificar a tua conta",
    color: "bg-orange-500",
  },
  {
    icon: Wallet,
    title: "Como Depositar",
    description: "Aprende a fazer depósitos de forma rápida e segura",
    color: "bg-purple-500",
  },
];

export default function Tutorials() {
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tutorials.map((tutorial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
            >
              <div className={`${tutorial.color} p-6 flex justify-center`}>
                <tutorial.icon className="w-16 h-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#24366E] mb-2">
                  {tutorial.title}
                </h3>
                <p className="text-gray-600">{tutorial.description}</p>
                <button className="mt-4 text-[#F72585] font-semibold hover:underline">
                  Ver Tutorial →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
