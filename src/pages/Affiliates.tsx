
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  DollarSign,
  Users,
  TrendingUp,
  Copy,
  Download,
  Share
} from "lucide-react";
import { useState } from "react";

const Affiliates = () => {
  const [affiliateCode] = useState("AFF123456");
  const [earnings] = useState(2450.00);
  const [pendingWithdrawal] = useState(850.00);
  const [totalReferrals] = useState(45);

  const copyAffiliateLink = () => {
    const link = `https://000criarsites.com?ref=${affiliateCode}`;
    navigator.clipboard.writeText(link);
    alert("Link copiado para a área de transferência!");
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in-up">
            <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30 mb-6">
              💰 Sistema de Afiliados
            </Badge>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Ganhe{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-yellow-400">
                30% de Comissão
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Participe do nosso programa de afiliados e ganhe dinheiro indicando nossos serviços. 
              Comissão de 30% em cada venda!
            </p>
          </div>
        </div>
      </section>

      {/* Dashboard */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="hover-scale hover-glow animate-scale-in">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center text-lg">
                  <DollarSign className="w-5 h-5 text-green-500 mr-2" />
                  Ganhos Totais
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-green-500">
                  R$ {earnings.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                </div>
                <p className="text-gray-600 text-sm mt-1">Disponível para saque</p>
              </CardContent>
            </Card>

            <Card className="hover-scale hover-glow animate-scale-in" style={{animationDelay: '0.1s'}}>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center text-lg">
                  <Users className="w-5 h-5 text-blue-500 mr-2" />
                  Indicações
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-blue-500">
                  {totalReferrals}
                </div>
                <p className="text-gray-600 text-sm mt-1">Total de indicações</p>
              </CardContent>
            </Card>

            <Card className="hover-scale hover-glow animate-scale-in" style={{animationDelay: '0.2s'}}>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center text-lg">
                  <TrendingUp className="w-5 h-5 text-purple-500 mr-2" />
                  Pendente
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-purple-500">
                  R$ {pendingWithdrawal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                </div>
                <p className="text-gray-600 text-sm mt-1">Aguardando pagamento</p>
              </CardContent>
            </Card>
          </div>

          {/* Affiliate Link */}
          <Card className="mb-12 animate-fade-in-up">
            <CardHeader>
              <CardTitle className="text-2xl">Seu Link de Afiliado</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-4">
                <Input
                  value={`https://000criarsites.com?ref=${affiliateCode}`}
                  readOnly
                  className="flex-1"
                />
                <Button onClick={copyAffiliateLink} className="flex items-center">
                  <Copy className="w-4 h-4 mr-2" />
                  Copiar
                </Button>
                <Button variant="outline" className="flex items-center">
                  <Share className="w-4 h-4 mr-2" />
                  Compartilhar
                </Button>
              </div>
              <p className="text-gray-600 text-sm mt-2">
                Compartilhe este link e ganhe 30% de comissão em cada venda realizada!
              </p>
            </CardContent>
          </Card>

          {/* Withdrawal Section */}
          <Card className="animate-fade-in-up">
            <CardHeader>
              <CardTitle className="text-2xl">Solicitar Saque</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                <p className="text-yellow-800">
                  <strong>Valor mínimo para saque:</strong> R$ 1.000,00
                </p>
                <p className="text-yellow-700 text-sm mt-1">
                  Seus ganhos atuais: R$ {earnings.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                </p>
              </div>
              
              {earnings >= 1000 ? (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Valor do Saque
                    </label>
                    <Input
                      type="number"
                      placeholder="1000.00"
                      max={earnings}
                      min="1000"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Dados Bancários
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input placeholder="Banco" />
                      <Input placeholder="Agência" />
                      <Input placeholder="Conta" />
                      <Input placeholder="CPF/CNPJ" />
                    </div>
                  </div>
                  
                  <Button className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white">
                    <Download className="w-4 h-4 mr-2" />
                    Solicitar Saque
                  </Button>
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-600 mb-4">
                    Você precisa de mais R$ {(1000 - earnings).toLocaleString('pt-BR', { minimumFractionDigits: 2 })} para solicitar um saque.
                  </p>
                  <Button disabled className="bg-gray-300 text-gray-500">
                    Valor Insuficiente
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Como{" "}
              <span className="text-gradient">Funciona</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Passos simples para começar a ganhar dinheiro como afiliado
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Cadastre-se",
                description: "Crie sua conta gratuita no programa de afiliados"
              },
              {
                step: "2",
                title: "Compartilhe",
                description: "Use seu link exclusivo para indicar nossos serviços"
              },
              {
                step: "3",
                title: "Ganhe",
                description: "Receba 30% de comissão em cada venda realizada"
              },
              {
                step: "4",
                title: "Saque",
                description: "Solicite o saque quando atingir R$ 1.000,00"
              }
            ].map((item, index) => (
              <Card key={index} className="text-center hover-scale hover-glow animate-scale-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-brand-purple to-brand-pink rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">
                    {item.description}
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

export default Affiliates;
