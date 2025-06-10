
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { Badge } from "@/components/ui/badge";
import EditorDemo from "@/components/EditorDemo";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="pt-20 pb-16 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in-up">
            <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30 mb-6">
              🚀 Editor de Sites
            </Badge>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Crie seu{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-yellow-400">
                Site Perfeito
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Editor visual profissional com suporte a templates Bootstrap, ThemeWagon e muito mais.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <EditorDemo />
      </section>

      <Footer />
    </div>
  );
};

export default Dashboard;
