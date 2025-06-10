
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="text-2xl font-bold">
              <span className="text-white">000</span>
              <span className="text-gradient">criarsites</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              A liberdade para criar o site dos seus sonhos. Mais de 300 milhões de pessoas escolheram nossa plataforma.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-brand-purple transition-colors hover-scale">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-purple transition-colors hover-scale">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-purple transition-colors hover-scale">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-purple transition-colors hover-scale">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Links Rápidos</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-gray-400 hover:text-white transition-colors">
                Início
              </Link>
              <Link to="/sobre" className="block text-gray-400 hover:text-white transition-colors">
                Sobre Nós
              </Link>
              <Link to="/precos" className="block text-gray-400 hover:text-white transition-colors">
                Preços
              </Link>
              <Link to="/depoimentos" className="block text-gray-400 hover:text-white transition-colors">
                Depoimentos
              </Link>
            </div>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Suporte</h3>
            <div className="space-y-2">
              <Link to="/perguntas" className="block text-gray-400 hover:text-white transition-colors">
                FAQ
              </Link>
              <Link to="/contato" className="block text-gray-400 hover:text-white transition-colors">
                Contato
              </Link>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                Central de Ajuda
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                Documentação
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail size={16} />
                <span>contato@000criarsites.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone size={16} />
                <span>+55 (11) 99999-9999</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin size={16} />
                <span>São Paulo, SP</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 000criarsites. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
