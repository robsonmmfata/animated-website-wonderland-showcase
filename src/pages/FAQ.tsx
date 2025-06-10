
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, MessageCircle, Phone, Mail } from "lucide-react";

const FAQ = () => {
  const faqCategories = [
    {
      title: "Começando",
      questions: [
        {
          question: "Como posso criar minha conta?",
          answer: "É muito simples! Clique no botão 'Começar Gratuitamente' e preencha o formulário com seu email e senha. Você receberá um email de confirmação e poderá começar a criar seu site imediatamente."
        },
        {
          question: "Preciso de conhecimentos técnicos?",
          answer: "Não! Nossa plataforma foi desenvolvida para ser intuitiva e fácil de usar. Com nosso construtor drag & drop, você simplesmente arrasta e solta elementos na tela. Não é necessário saber programação."
        },
        {
          question: "Quanto tempo leva para criar um site?",
          answer: "Com nossos templates prontos, você pode ter um site funcionando em minutos! Sites mais personalizados podem levar algumas horas, dependendo da complexidade e do conteúdo."
        },
        {
          question: "Posso testar gratuitamente?",
          answer: "Sim! Oferecemos um período de teste gratuito onde você pode explorar todas as funcionalidades da plataforma sem compromisso."
        }
      ]
    },
    {
      title: "Planos e Pagamentos",
      questions: [
        {
          question: "Qual plano é melhor para mim?",
          answer: "Depende das suas necessidades! O plano Básico é ideal para sites pessoais e pequenos negócios. O Profissional oferece mais recursos para empresas em crescimento. O Empresarial é perfeito para grandes empresas com necessidades avançadas."
        },
        {
          question: "Posso mudar de plano a qualquer momento?",
          answer: "Sim! Você pode fazer upgrade ou downgrade do seu plano a qualquer momento. As mudanças são aplicadas imediatamente e o valor é calculado proporcionalmente."
        },
        {
          question: "Existe garantia de reembolso?",
          answer: "Oferecemos garantia de reembolso de 30 dias para todos os planos pagos. Se não ficar satisfeito, devolvemos 100% do valor pago."
        },
        {
          question: "Quais métodos de pagamento vocês aceitam?",
          answer: "Aceitamos cartões de crédito (Visa, Mastercard, American Express), débito, PIX, boleto bancário e PayPal."
        }
      ]
    },
    {
      title: "Recursos e Funcionalidades",
      questions: [
        {
          question: "Quantos templates estão disponíveis?",
          answer: "Temos mais de 5.000 templates profissionais criados por designers especialistas. Novos templates são adicionados regularmente."
        },
        {
          question: "Posso usar meu próprio domínio?",
          answer: "Sim! Todos os planos pagos permitem conectar seu domínio personalizado. Também oferecemos registro de domínio gratuito no primeiro ano."
        },
        {
          question: "Os sites são responsivos?",
          answer: "Absolutamente! Todos os nossos templates são totalmente responsivos e se adaptam perfeitamente a dispositivos móveis, tablets e desktops."
        },
        {
          question: "Posso adicionar uma loja online?",
          answer: "Sim! Nossos planos incluem funcionalidades de e-commerce completas, incluindo carrinho de compras, gateway de pagamento e gestão de produtos."
        }
      ]
    },
    {
      title: "Suporte Técnico",
      questions: [
        {
          question: "Como funciona o suporte?",
          answer: "Oferecemos suporte 24/7 através de chat ao vivo, email e central de ajuda. Nossa equipe está sempre pronta para ajudar você."
        },
        {
          question: "Vocês oferecem treinamento?",
          answer: "Sim! Temos uma biblioteca completa de tutoriais em vídeo, webinars ao vivo e documentação detalhada para ajudar você a aproveitar ao máximo a plataforma."
        },
        {
          question: "O que acontece se eu tiver problemas técnicos?",
          answer: "Nossa equipe de suporte técnico está disponível 24/7 para resolver qualquer problema. Garantimos resposta em até 2 horas para questões urgentes."
        },
        {
          question: "Posso migrar meu site existente?",
          answer: "Sim! Nossa equipe pode ajudar você a migrar seu site existente para nossa plataforma. O serviço de migração está incluído nos planos Profissional e Empresarial."
        }
      ]
    }
  ];

  const supportOptions = [
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Chat ao Vivo",
      description: "Fale conosco agora mesmo",
      action: "Iniciar Chat"
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email",
      description: "suporte@000criarsites.com",
      action: "Enviar Email"
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Telefone",
      description: "+55 (11) 99999-9999",
      action: "Ligar Agora"
    },
    {
      icon: <HelpCircle className="w-8 h-8" />,
      title: "Central de Ajuda",
      description: "Tutoriais e documentação",
      action: "Acessar"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in-up">
            <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30 mb-6">
              ❓ Dúvidas Frequentes
            </Badge>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-yellow-400">
                Perguntas
              </span>{" "}
              Frequentes
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Encontre respostas para as dúvidas mais comuns sobre nossa plataforma. 
              Se não encontrar o que procura, nossa equipe está pronta para ajudar!
            </p>
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportOptions.map((option, index) => (
              <Card key={index} className="hover-scale hover-glow animate-scale-in text-center" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-6">
                  <div className="text-brand-purple mb-4 flex justify-center">
                    {option.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {option.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {option.description}
                  </p>
                  <button className="text-brand-purple hover:text-brand-pink font-semibold text-sm">
                    {option.action}
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12 animate-fade-in-up" style={{animationDelay: `${categoryIndex * 0.1}s`}}>
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                  <span className="text-gradient">{category.title}</span>
                </h2>
                
                <Card className="hover-glow">
                  <CardContent className="p-0">
                    <Accordion type="single" collapsible className="w-full">
                      {category.questions.map((faq, index) => (
                        <AccordionItem key={index} value={`${categoryIndex}-${index}`}>
                          <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:bg-gray-50 transition-colors">
                            <span className="font-semibold text-gray-900">
                              {faq.question}
                            </span>
                          </AccordionTrigger>
                          <AccordionContent className="px-6 pb-4">
                            <p className="text-gray-600 leading-relaxed">
                              {faq.answer}
                            </p>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-6">
              Ainda tem dúvidas?
            </h2>
            <p className="text-xl text-purple-100 mb-8 leading-relaxed">
              Nossa equipe de suporte está disponível 24/7 para ajudar você. 
              Não hesite em entrar em contato!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 hover:bg-gray-100 font-semibold px-8 py-4 rounded-full text-lg hover-scale hover-glow">
                Falar com Suporte
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-purple-600 font-semibold px-8 py-4 rounded-full text-lg hover-scale">
                Agendar Demonstração
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
