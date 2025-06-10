
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Save, Download, Eye, Code, Palette } from "lucide-react";
import SubscriptionGuard from "./SubscriptionGuard";

const EditorDemo = () => {
  const [activeTab, setActiveTab] = useState<'visual' | 'code'>('visual');
  const [hasChanges, setHasChanges] = useState(false);

  const handleSaveChanges = () => {
    // Simular salvamento
    setHasChanges(false);
    alert('Alterações salvas com sucesso!');
  };

  const handleMakeChanges = () => {
    setHasChanges(true);
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Editor Panel */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="flex items-center space-x-2">
                <Palette className="w-5 h-5" />
                <span>Editor de Site</span>
                {hasChanges && (
                  <Badge variant="secondary" className="ml-2">
                    Alterações não salvas
                  </Badge>
                )}
              </CardTitle>
              
              <div className="flex space-x-2">
                <Button
                  variant={activeTab === 'visual' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setActiveTab('visual')}
                >
                  <Eye className="w-4 h-4 mr-1" />
                  Visual
                </Button>
                <Button
                  variant={activeTab === 'code' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setActiveTab('code')}
                >
                  <Code className="w-4 h-4 mr-1" />
                  Código
                </Button>
              </div>
            </CardHeader>
            
            <CardContent>
              {activeTab === 'visual' ? (
                <div className="space-y-4">
                  <div className="bg-gray-50 p-8 rounded-lg min-h-[400px] border-2 border-dashed border-gray-300">
                    <div className="text-center space-y-4">
                      <h2 className="text-2xl font-bold text-gray-700">
                        Meu Site Incrível
                      </h2>
                      <p className="text-gray-600">
                        Este é um exemplo de como seu site ficará. 
                        Arraste e solte elementos para personalizá-lo.
                      </p>
                      <Button 
                        onClick={handleMakeChanges}
                        className="bg-blue-500 hover:bg-blue-600"
                      >
                        Simular Edição
                      </Button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm min-h-[400px]">
                  <pre>{`<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Meu Site Incrível</title>
    <style>
        body { 
            font-family: Arial, sans-serif; 
            margin: 0; 
            padding: 20px; 
        }
        .container { 
            max-width: 800px; 
            margin: 0 auto; 
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Meu Site Incrível</h1>
        <p>Bem-vindo ao meu site!</p>
    </div>
</body>
</html>`}</pre>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Actions Panel */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Ações</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <SubscriptionGuard feature="Salvar Alterações" requiredPlan="Básico">
                <Button 
                  onClick={handleSaveChanges}
                  disabled={!hasChanges}
                  className="w-full"
                  variant={hasChanges ? "default" : "outline"}
                >
                  <Save className="w-4 h-4 mr-2" />
                  Salvar Alterações
                </Button>
              </SubscriptionGuard>

              <SubscriptionGuard feature="Download do Projeto" requiredPlan="Profissional">
                <Button variant="outline" className="w-full">
                  <Download className="w-4 h-4 mr-2" />
                  Baixar Projeto
                </Button>
              </SubscriptionGuard>

              <Button variant="outline" className="w-full">
                <Eye className="w-4 h-4 mr-2" />
                Visualizar Site
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Templates</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3">
                {['Bootstrap', 'Wix', 'ThemeWagon', 'Custom'].map((template, index) => (
                  <div 
                    key={index}
                    className="aspect-square bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center text-sm font-semibold text-gray-700 cursor-pointer hover:scale-105 transition-transform"
                  >
                    {template}
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-500 mt-3 text-center">
                ✨ Aceita templates de qualquer fonte
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default EditorDemo;
