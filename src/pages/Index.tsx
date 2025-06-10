
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Rocket, 
  Zap, 
  Shield, 
  Smartphone, 
  Globe, 
  Star,
  Users,
  TrendingUp,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const features = [
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Construtor Drag & Drop",
      description: "Arraste e solte elementos para criar seu site perfeito"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Super Rápido",
      description: "Sites otimizados para máxima velocidade e performance"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "100% Seguro",
      description: "SSL grátis e proteção avançada contra ameaças"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Responsivo",
      description: "Perfeito em qualquer dispositivo e tamanho de tela"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "SEO Otimizado",
      description: "Apareça no topo do Google com nossas ferramentas SEO"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Suporte 24/7",
      description: "Nossa equipe está sempre pronta para ajudar você"
    }
  ];

  const stats = [
    { number: "300M+", label: "Sites Criados", icon: <Globe className="w-6 h-6" /> },
    { number: "5.000+", label: "Templates", icon: <Star className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime", icon: <TrendingUp className="w-6 h-6" /> },
    { number: "150+", label: "Países", icon: <Users className="w-6 h-6" /> }
  ];

  const benefits = [
    "Não saber programar",
    "Ampliar seu alcance de clientes, se destacar da concorrência e estar um passo à frente",
    "Não gastar muito tempo criando seu site apenas alguns minutos já está pronto",
    "Não depender de empresas para qualquer modificação que deseje realizar em seu site",
    "Construa seu site do seu jeito, geração de conteúdo e campanhas de marketing",
    "Não esperar muito tempo para poder posicionar seu site corretamente nos buscadores",
    "Nossos templates não contém nenhum anúncio ou marca d'água da nossa empresa"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 text-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30 w-fit">
                ✨ Mais de 300 milhões de sites criados
              </Badge>
              
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                A liberdade para criar o site dos seus{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-yellow-400">
                  sonhos
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                Mais de 300 milhões de pessoas ao redor do mundo já escolheram a 000criarsites para criar sites profissionais com facilidade: é só arrastar e soltar. Com carregamento ultrarrápido, alto poder de conversão e excelente desempenho nos resultados de busca, seu site vai impressionar.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white font-semibold px-8 py-4 rounded-full text-lg hover-scale hover-glow"
                >
                  <Link to="/precos" className="flex items-center gap-2">
                    Preços
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm font-semibold px-8 py-4 rounded-full text-lg hover-scale"
                >
                  Experimente Grátis
                </Button>
                
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold px-8 py-4 rounded-full text-lg hover-scale hover-glow"
                >
                  Ferramentas de Marketing
                </Button>
              </div>
            </div>
            
            <div className="relative animate-float">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl p-6 animate-bounce-slow">
                    <Globe className="w-8 h-8 text-white mb-2" />
                    <div className="text-white font-semibold">Site Responsivo</div>
                  </div>
                  <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-6 animate-bounce-slow" style={{animationDelay: '0.5s'}}>
                    <Zap className="w-8 h-8 text-white mb-2" />
                    <div className="text-white font-semibold">Super Rápido</div>
                  </div>
                  <div className="bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl p-6 animate-bounce-slow" style={{animationDelay: '1s'}}>
                    <Shield className="w-8 h-8 text-white mb-2" />
                    <div className="text-white font-semibold">100% Seguro</div>
                  </div>
                  <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl p-6 animate-bounce-slow" style={{animationDelay: '1.5s'}}>
                    <Rocket className="w-8 h-8 text-white mb-2" />
                    <div className="text-white font-semibold">Fácil de Usar</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center hover-scale hover-glow animate-scale-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-6">
                  <div className="text-brand-purple mb-2 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Por que escolher a{" "}
              <span className="text-gradient">000criarsites</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Descubra as ferramentas e recursos que fazem da nossa plataforma a escolha número 1 para criar sites profissionais
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover-scale hover-glow animate-scale-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-8 text-center">
                  <div className="text-brand-purple mb-4 flex justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Vantagens de criar seu site na{" "}
                <span className="text-gradient">000criarsites</span>
              </h2>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3 animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                    <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700 leading-relaxed">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative animate-float">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl p-8 text-white">
                <div className="space-y-6">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-2">Crie seu site agora!</h3>
                    <p className="text-purple-200">É rápido, fácil e gratuito para começar</p>
                  </div>
                  
                  <Button className="w-full bg-white text-purple-600 hover:bg-gray-100 font-semibold py-3 rounded-full hover-scale">
                    Começar Gratuitamente
                  </Button>
                  
                  <div className="text-center text-purple-200 text-sm">
                    ✓ Sem cartão de crédito necessário
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
