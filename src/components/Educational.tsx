import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const guides = [
  {
    title: 'Criar Conta',
    content: [
      'Clicar no botão "Registrar Agora"',
      'Inserir número de telefone',
      'Criar password segura',
      'Confirmar a password',
      'Aceitar Termos de Serviço',
      'Clicar em "Inscrever-se"',
      'Explorar promoções de boas-vindas',
      'Suporte: WhatsApp +244 929025408',
    ],
  },
  {
    title: 'Como Apostar na Elephant Bet Angola',
    content: [
      'Criar conta',
      'Verificar dados (SMS/email/KYC)',
      'Fazer primeiro depósito',
      'Escolher modalidade ou jogo (Aviator, etc.)',
      'Preencher boletim de aposta',
      'Confirmar aposta',
      'Acompanhar resultado',
      'Jogar com responsabilidade',
    ],
  },
  {
    title: 'Como Usar Bónus na Elephant Bet Angola',
    content: [
      'Tipos de bónus: bem-vindo, depósito, promo code, jogos',
      'Como ativar bónus',
      'Como usar bónus',
      'Verificação em "Meus Bónus"',
      'Levantamento só após requisitos cumpridos',
    ],
  },
];

export default function Educational() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="guias" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#24366E] mb-4">
            Guias Completos
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Tudo o que precisas saber para começar a apostar com confiança
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {guides.map((guide, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-xl font-bold text-[#24366E]">
                  {guide.title}
                </h3>
                <ChevronDown
                  className={`w-6 h-6 text-[#F72585] transition-transform duration-300 ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>

              <div
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? 'max-h-[600px] opacity-100'
                    : 'max-h-0 opacity-0'
                } overflow-hidden`}
              >
                <div className="px-6 pb-6">
                  <ul className="space-y-3">
                    {guide.content.map((step, stepIndex) => (
                      <li
                        key={stepIndex}
                        className="flex items-start space-x-3 text-gray-700"
                      >
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#F72585] text-white text-sm flex items-center justify-center font-semibold mt-0.5">
                          {stepIndex + 1}
                        </span>
                        <span className="flex-1">{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
