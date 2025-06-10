
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, X, Star } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Padrão",
      price: "10",
      period: "mês",
      color: "from-gray-400 to-gray-600",
      features: [
        { text: "Construtor de Arrastar e Soltar", included: true },
        { text: "500 MB de Armazenamento", included: true },
        { text: "Tráfego ilimitado", included: false },
        { text: "Editor de Código", included: false },
        { text: "Sem Anúncios", included: true },
        { text: "Domínios Personalizados", included: true },
        { text: "Subdomínio Grátis", included: true },
        { text: "Baixar Projetos", included: false }
      ]
    },
    {
      name: "Básico",
      price: "28",
      period: "mês",
      color: "from-green-400 to-green-600",
      popular: true,
      features: [
        { text: "Construtor de Arrastar e Soltar", included: true },
        { text: "1GB de Armazenamento", included: true },
        { text: "Tráfego ilimitado", included: true },
        { text: "Editor de Código", included: true },
        { text: "Sem anúncios", included: true },
        { text: "Domínios Personalizados", included: true },
        { text: "Subdomínio Grátis", included: true },
        { text: "Baixar Projetos", included: true }
      ]
    },
    {
      name: "Profissional",
      price: "68",
      period: "mês",
      color: "from-blue-400 to-blue-600",
      features: [
        { text: "Construtor de Arrastar e Soltar", included: true },
        { text: "3GB de Armazenamento", included: true },
        { text: "Tráfego ilimitado", included: true },
        { text: "Editor de Código", included: true },
        { text: "Sem Anúncios", included: true },
        { text: "Domínios Personalizados", included: true },
        { text: "Subdomínio Grátis", included: true },
        { text: "Baixar Projetos", included: true }
      ]
    },
    {
      name: "Empresarial",
      price: "298",
      period: "mês",
      color: "from-purple-400 to-purple-600",
      features: [
        { text: "Construtor de Arrastar e Soltar", included: true },
        { text: "15GB de Armazenamento", included: true },
        { text: "Tráfego ilimitado", included: true },
        { text: "Editor de Código", included: true },
        { text: "Sem Anúncios", included: true },
        { text: "Domínios Personalizados", included: true },
        { text: "Subdomínio Grátis", included: true },
        { text: "Baixar Projetos", included: true },
        { text: "Exportar Projetos para GitHub", included: true }
      ]
    }
  ];

  const faq = [
    {
      question: "Posso cancelar minha assinatura a qualquer momento?",
      answer: "Sim! Você pode cancelar sua assinatura a qualquer momento sem taxas de cancelamento."
    },
    {
      question: "Existe garantia de reembolso?",
      answer: "Oferecemos garantia de reembolso de 30 dias para todos os nossos planos pagos."
    },
    {
      question: "Posso mudar de plano depois?",
      answer: "Claro! Você pode fazer upgrade ou downgrade do seu plano a qualquer momento."
    },
    {
      question: "Os templates estão inclusos em todos os planos?",
      answer: "Sim, todos os nossos 5.000+ templates estão disponíveis em todos os planos."
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
              💰 Planos e Preços
            </Badge>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Nossos{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-yellow-400">
                Planos
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Escolha o plano perfeito para suas necessidades. Todos os planos incluem 
              nossos templates premium e suporte dedicado.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative hover-scale hover-glow animate-scale-in ${
                  plan.popular ? 'ring-2 ring-brand-purple scale-105' : ''
                }`}
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-brand-purple to-brand-pink text-white px-4 py-1">
                      <Star className="w-4 h-4 mr-1" />
                      Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl font-bold text-gray-900 mb-4">
                    {plan.name}
                  </CardTitle>
                  
                  <div className="mb-4">
                    <div className="flex items-center justify-center">
                      <span className="text-4xl font-bold text-gray-900">R$ {plan.price}</span>
                      <span className="text-gray-600 ml-2">/{plan.period}</span>
                    </div>
                  </div>
                  
                  <Button 
                    className={`w-full bg-gradient-to-r ${plan.color} hover:opacity-90 text-white font-semibold py-3 rounded-full hover-scale`}
                  >
                    Escolher Plano
                  </Button>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      {feature.included ? (
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      ) : (
                        <X className="w-5 h-5 text-red-500 flex-shrink-0" />
                      )}
                      <span className={`text-sm ${feature.included ? 'text-gray-700' : 'text-gray-400'}`}>
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Compare{" "}
              <span className="text-gradient">Recursos</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Veja em detalhes o que cada plano oferece para você
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-2xl p-8 animate-scale-in">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-4 px-4 font-semibold text-gray-900">Recursos</th>
                    <th className="text-center py-4 px-4 font-semibold text-gray-900">Padrão</th>
                    <th className="text-center py-4 px-4 font-semibold text-gray-900">Básico</th>
                    <th className="text-center py-4 px-4 font-semibold text-gray-900">Profissional</th>
                    <th className="text-center py-4 px-4 font-semibold text-gray-900">Empresarial</th>
                  </tr>
                </thead>
                <tbody className="space-y-2">
                  <tr className="border-b border-gray-100">
                    <td className="py-4 px-4 text-gray-700">Templates Premium</td>
                    <td className="py-4 px-4 text-center">
                      <Check className="w-5 h-5 text-green-500 mx-auto" />
                    </td>
                    <td className="py-4 px-4 text-center">
                      <Check className="w-5 h-5 text-green-500 mx-auto" />
                    </td>
                    <td className="py-4 px-4 text-center">
                      <Check className="w-5 h-5 text-green-500 mx-auto" />
                    </td>
                    <td className="py-4 px-4 text-center">
                      <Check className="w-5 h-5 text-green-500 mx-auto" />
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 px-4 text-gray-700">Suporte 24/7</td>
                    <td className="py-4 px-4 text-center">
                      <Check className="w-5 h-5 text-green-500 mx-auto" />
                    </td>
                    <td className="py-4 px-4 text-center">
                      <Check className="w-5 h-5 text-green-500 mx-auto" />
                    </td>
                    <td className="py-4 px-4 text-center">
                      <Check className="w-5 h-5 text-green-500 mx-auto" />
                    </td>
                    <td className="py-4 px-4 text-center">
                      <Check className="w-5 h-5 text-green-500 mx-auto" />
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 px-4 text-gray-700">SSL Gratuito</td>
                    <td className="py-4 px-4 text-center">
                      <Check className="w-5 h-5 text-green-500 mx-auto" />
                    </td>
                    <td className="py-4 px-4 text-center">
                      <Check className="w-5 h-5 text-green-500 mx-auto" />
                    </td>
                    <td className="py-4 px-4 text-center">
                      <Check className="w-5 h-5 text-green-500 mx-auto" />
                    </td>
                    <td className="py-4 px-4 text-center">
                      <Check className="w-5 h-5 text-green-500 mx-auto" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Perguntas{" "}
              <span className="text-gradient">Frequentes</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tire suas dúvidas sobre nossos planos e recursos
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {faq.map((item, index) => (
              <Card key={index} className="hover-glow animate-scale-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {item.question}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
