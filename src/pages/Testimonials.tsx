
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      role: "Empreendedora Digital",
      company: "Loja da Maria",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "A 000criarsites transformou completamente meu negócio! Em apenas 2 horas eu tinha um site profissional funcionando. As vendas online aumentaram 300% no primeiro mês!"
    },
    {
      name: "João Santos",
      role: "Consultor",
      company: "JS Consultoria",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Impressionante como é fácil usar! Sem conhecimento técnico algum, consegui criar um site que meus clientes elogiam constantemente. O suporte é excepcional!"
    },
    {
      name: "Ana Costa",
      role: "Blogueira",
      company: "Blog da Ana",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Os templates são lindos e super modernos. Meu blog nunca teve tantos visitantes! A velocidade de carregamento é incrível e o SEO realmente funciona."
    },
    {
      name: "Carlos Oliveira",
      role: "Restaurante",
      company: "Sabor & Arte",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Nosso restaurante precisava urgentemente de presença online. Em 1 dia estava tudo pronto! Os pedidos online triplicaram. Recomendo demais!"
    },
    {
      name: "Lucia Ferreira",
      role: "Fotógrafa",
      company: "Lucia Fotografia",
      image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Como fotógrafa, preciso de um portfólio que destaque meu trabalho. A 000criarsites ofereceu exatamente isso - um site elegante que valoriza minhas fotos!"
    },
    {
      name: "Roberto Mendes",
      role: "Advogado",
      company: "Mendes Advocacia",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Meu escritório precisava de um site confiável e profissional. A plataforma entregou exatamente isso. Meus clientes ficaram impressionados com a qualidade!"
    }
  ];

  const stats = [
    { number: "98%", label: "Clientes Satisfeitos" },
    { number: "4.9/5", label: "Avaliação Média" },
    { number: "50K+", label: "Depoimentos Positivos" },
    { number: "24h", label: "Suporte Médio de Resposta" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in-up">
            <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30 mb-6">
              ⭐ Avaliações dos Clientes
            </Badge>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-yellow-400">
                Depoimentos
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Veja o que nossos clientes dizem sobre a experiência de criar sites 
              profissionais com a 000criarsites
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-scale-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="text-4xl font-bold text-brand-purple mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Histórias de{" "}
              <span className="text-gradient">Sucesso</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Milhares de empreendedores, freelancers e empresas já transformaram 
              suas ideias em sites profissionais com nossa plataforma
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover-scale hover-glow animate-scale-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <Quote className="w-8 h-8 text-brand-purple opacity-50" />
                  </div>
                  
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed mb-6 italic">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="flex items-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.role}</div>
                      <div className="text-sm text-brand-purple font-medium">{testimonial.company}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Depoimentos em{" "}
              <span className="text-gradient">Vídeo</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ouça diretamente de nossos clientes sobre como a 000criarsites 
              transformou seus negócios
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((video, index) => (
              <Card key={index} className="hover-scale hover-glow animate-scale-in overflow-hidden" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="aspect-video bg-gradient-to-br from-purple-400 to-pink-400 relative group cursor-pointer">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <div className="w-0 h-0 border-l-[12px] border-l-brand-purple border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1"></div>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="font-semibold">Cliente Satisfeito #{video}</div>
                    <div className="text-sm opacity-90">Transformação Digital</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-6">
              Pronto para ser nosso próximo caso de sucesso?
            </h2>
            <p className="text-xl text-purple-100 mb-8 leading-relaxed">
              Junte-se a milhares de empreendedores que já transformaram 
              suas ideias em negócios digitais de sucesso
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 hover:bg-gray-100 font-semibold px-8 py-4 rounded-full text-lg hover-scale hover-glow">
                Começar Gratuitamente
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-purple-600 font-semibold px-8 py-4 rounded-full text-lg hover-scale">
                Ver Demonstração
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Testimonials;
