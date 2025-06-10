
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  MessageCircle,
  Send,
  CheckCircle
} from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Endereço",
      info: "Av. Paulista, 1000 - São Paulo, SP",
      subInfo: "CEP: 01310-100"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Telefone",
      info: "+55 (11) 99999-9999",
      subInfo: "Segunda a Sexta, 8h às 18h"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      info: "contato@000criarsites.com",
      subInfo: "Resposta em até 2 horas"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Horário",
      info: "24/7 Suporte Online",
      subInfo: "Chat ao vivo sempre disponível"
    }
  ];

  const departments = [
    {
      name: "Vendas",
      email: "vendas@000criarsites.com",
      description: "Dúvidas sobre planos e preços"
    },
    {
      name: "Suporte Técnico",
      email: "suporte@000criarsites.com",
      description: "Problemas técnicos e ajuda"
    },
    {
      name: "Parcerias",
      email: "parcerias@000criarsites.com",
      description: "Oportunidades de parceria"
    },
    {
      name: "Imprensa",
      email: "imprensa@000criarsites.com",
      description: "Assessoria de imprensa"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Redirecionar para WhatsApp
    const whatsappNumber = "5511999999999"; // Substitua pelo seu número
    const message = `Olá! Meu nome é ${formData.name}.
    
Email: ${formData.email}
Assunto: ${formData.subject}

Mensagem: ${formData.message}`;
    
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in-up">
            <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30 mb-6">
              📞 Entre em Contato
            </Badge>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-yellow-400">
                Contato
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Estamos aqui para ajudar! Entre em contato conosco via WhatsApp 
              e nossa equipe responderá o mais rápido possível.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="hover-scale hover-glow animate-scale-in text-center" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-6">
                  <div className="text-brand-purple mb-4 flex justify-center">
                    {info.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {info.title}
                  </h3>
                  <p className="text-gray-700 font-medium mb-1">
                    {info.info}
                  </p>
                  <p className="text-gray-500 text-sm">
                    {info.subInfo}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-fade-in-up">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Envie uma{" "}
                <span className="text-gradient">Mensagem</span>
              </h2>
              
              <Card className="hover-glow">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Nome Completo
                        </label>
                        <Input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full"
                          placeholder="Seu nome"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email
                        </label>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full"
                          placeholder="seu@email.com"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Assunto
                      </label>
                      <Input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full"
                        placeholder="Como podemos ajudar?"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Mensagem
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full"
                        placeholder="Descreva sua dúvida ou solicitação..."
                      />
                    </div>
                    
                    <Button 
                      type="submit"
                      className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-3 rounded-lg hover-scale hover-glow"
                    >
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Enviar via WhatsApp
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Map Placeholder & Quick Contact */}
            <div className="space-y-8 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Nossa{" "}
                  <span className="text-gradient">Localização</span>
                </h2>
                
                <Card className="hover-glow">
                  <CardContent className="p-0">
                    <div className="aspect-video bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <MapPin className="w-16 h-16 text-brand-purple mx-auto mb-4" />
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          São Paulo, SP
                        </h3>
                        <p className="text-gray-600">
                          Av. Paulista, 1000 - Bela Vista
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Contato Rápido
                </h3>
                
                <div className="space-y-4">
                  <Card 
                    className="hover-scale cursor-pointer"
                    onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
                  >
                    <CardContent className="p-4 flex items-center space-x-4">
                      <div className="bg-green-500/10 p-3 rounded-lg">
                        <MessageCircle className="w-6 h-6 text-green-500" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">WhatsApp</div>
                        <div className="text-gray-600 text-sm">Disponível 24/7</div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="hover-scale cursor-pointer">
                    <CardContent className="p-4 flex items-center space-x-4">
                      <div className="bg-green-500/10 p-3 rounded-lg">
                        <CheckCircle className="w-6 h-6 text-green-500" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">Suporte Prioritário</div>
                        <div className="text-gray-600 text-sm">Para clientes premium</div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Departamentos{" "}
              <span className="text-gradient">Específicos</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Entre em contato diretamente com o departamento que pode melhor ajudar você
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {departments.map((dept, index) => (
              <Card key={index} className="hover-scale hover-glow animate-scale-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {dept.name}
                  </h3>
                  <p className="text-brand-purple font-medium mb-3">
                    {dept.email}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {dept.description}
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

export default Contact;
