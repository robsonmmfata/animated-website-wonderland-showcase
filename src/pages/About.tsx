
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Target, 
  Award, 
  Lightbulb,
  Heart,
  Globe,
  Zap,
  Shield
} from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Inovação",
      description: "Sempre buscando novas tecnologias e soluções para nossos usuários"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Paixão",
      description: "Amamos o que fazemos e isso se reflete em cada produto que criamos"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Comunidade",
      description: "Construímos uma comunidade global de criadores e empreendedores"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Excelência",
      description: "Comprometidos em entregar sempre a melhor experiência possível"
    }
  ];

  const team = [
    {
      name: "Ana Silva",
      role: "CEO & Fundadora",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
      bio: "Visionária por trás da 000criarsites, com mais de 15 anos de experiência em tecnologia."
    },
    {
      name: "Carlos Santos",
      role: "CTO",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      bio: "Especialista em arquitetura de software e responsável pela nossa infraestrutura robusta."
    },
    {
      name: "Maria Costa",
      role: "Head of Design",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      bio: "Talentosa designer que criou a interface intuitiva que nossos usuários adoram."
    },
    {
      name: "João Oliveira",
      role: "Head of Marketing",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
      bio: "Estrategista de marketing digital com foco em crescimento e experiência do usuário."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30 mb-6">
              ✨ Nossa História
            </Badge>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Sobre{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-yellow-400">
                Nós
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed">
              Somos uma empresa apaixonada por democratizar a criação de sites, 
              tornando possível para qualquer pessoa construir uma presença online profissional.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Monte seu próprio site em minutos
              </h2>
              
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  O construtor basicamente te oferece tudo que você precisa fazer 
                  para criar o seu site mesmo que você não tenha nenhuma experiência. 
                  A ferramenta te oferece mais do que você espera.
                </p>
                
                <p>
                  Tenha um site profissional que carrega rápido como um raio. Maior 
                  conversão de visitantes em clientes e melhor posicionamento nos 
                  resultados de busca, o construtor de site da 000criarsites é potente.
                </p>
                
                <p>
                  Escolha entre os mais de <span className="font-semibold text-brand-purple">5.000 templates</span> fácil 
                  de ser personalizados feitos por <span className="font-semibold text-brand-purple">designers profissional</span> para 
                  todos os tipos de negócio com conteúdo preparado.
                </p>
              </div>
            </div>
            
            <div className="relative animate-float">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl p-8">
                <div className="grid grid-cols-2 gap-4">
                  <Card className="hover-scale">
                    <CardContent className="p-6 text-center">
                      <Globe className="w-8 h-8 text-brand-purple mx-auto mb-2" />
                      <div className="font-semibold text-gray-900">300M+</div>
                      <div className="text-sm text-gray-600">Sites Criados</div>
                    </CardContent>
                  </Card>
                  
                  <Card className="hover-scale">
                    <CardContent className="p-6 text-center">
                      <Zap className="w-8 h-8 text-brand-purple mx-auto mb-2" />
                      <div className="font-semibold text-gray-900">99.9%</div>
                      <div className="text-sm text-gray-600">Uptime</div>
                    </CardContent>
                  </Card>
                  
                  <Card className="hover-scale">
                    <CardContent className="p-6 text-center">
                      <Shield className="w-8 h-8 text-brand-purple mx-auto mb-2" />
                      <div className="font-semibold text-gray-900">100%</div>
                      <div className="text-sm text-gray-600">Seguro</div>
                    </CardContent>
                  </Card>
                  
                  <Card className="hover-scale">
                    <CardContent className="p-6 text-center">
                      <Award className="w-8 h-8 text-brand-purple mx-auto mb-2" />
                      <div className="font-semibold text-gray-900">5K+</div>
                      <div className="text-sm text-gray-600">Templates</div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nossos{" "}
              <span className="text-gradient">Valores</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Os princípios que guiam nosso trabalho e nossa missão de democratizar a criação de sites
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="hover-scale hover-glow animate-scale-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-8 text-center">
                  <div className="text-brand-purple mb-4 flex justify-center">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nossa{" "}
              <span className="text-gradient">Equipe</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conheça as pessoas talentosas que trabalham todos os dias para tornar seus sonhos digitais realidade
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="hover-scale hover-glow animate-scale-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-6 text-center">
                  <div className="mb-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-brand-purple/20"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-brand-purple font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {member.bio}
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

export default About;
