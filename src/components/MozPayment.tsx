
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { CreditCard, Smartphone, MapPin } from "lucide-react";

interface MozPaymentProps {
  amount: number;
  planName: string;
  onPaymentSuccess?: () => void;
  onPaymentError?: (error: string) => void;
}

const MozPayment = ({ amount, planName, onPaymentSuccess, onPaymentError }: MozPaymentProps) => {
  const [loading, setLoading] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<'mpesa' | 'card'>('mpesa');
  const [formData, setFormData] = useState({
    phone: '',
    name: '',
    email: ''
  });

  const handlePayment = async () => {
    setLoading(true);
    
    try {
      // Simulação da integração com MozPayment API
      const paymentData = {
        amount: amount,
        currency: 'MZN',
        description: `Assinatura ${planName}`,
        customer: {
          name: formData.name,
          email: formData.email,
          phone: formData.phone
        },
        payment_method: paymentMethod,
        callback_url: `${window.location.origin}/payment-callback`,
        return_url: `${window.location.origin}/payment-success`
      };

      // Aqui seria a chamada real para a API do MozPayment
      console.log('Processando pagamento MozPayment:', paymentData);
      
      // Simulação de resposta da API
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Simular sucesso
      if (Math.random() > 0.1) { // 90% de sucesso
        onPaymentSuccess?.();
      } else {
        throw new Error('Falha no processamento do pagamento');
      }
      
    } catch (error) {
      console.error('Erro no pagamento:', error);
      onPaymentError?.(error instanceof Error ? error.message : 'Erro desconhecido');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="text-center">
        <div className="flex items-center justify-center mb-4">
          <MapPin className="w-6 h-6 text-green-500 mr-2" />
          <span className="text-2xl">🇲🇿</span>
        </div>
        <CardTitle className="text-xl">Pagamento MozPayment</CardTitle>
        <Badge className="bg-green-100 text-green-800">
          {amount.toLocaleString('pt-MZ')} MZN - {planName}
        </Badge>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Payment Method Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Método de Pagamento
          </label>
          <div className="grid grid-cols-2 gap-3">
            <Button
              type="button"
              variant={paymentMethod === 'mpesa' ? 'default' : 'outline'}
              onClick={() => setPaymentMethod('mpesa')}
              className="flex items-center justify-center p-4 h-auto"
            >
              <Smartphone className="w-5 h-5 mr-2" />
              <div className="text-left">
                <div className="font-semibold">M-Pesa</div>
                <div className="text-xs text-gray-500">Pagamento móvel</div>
              </div>
            </Button>
            
            <Button
              type="button"
              variant={paymentMethod === 'card' ? 'default' : 'outline'}
              onClick={() => setPaymentMethod('card')}
              className="flex items-center justify-center p-4 h-auto"
            >
              <CreditCard className="w-5 h-5 mr-2" />
              <div className="text-left">
                <div className="font-semibold">Cartão</div>
                <div className="text-xs text-gray-500">Visa/Mastercard</div>
              </div>
            </Button>
          </div>
        </div>

        {/* Customer Information */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Nome Completo
            </label>
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Seu nome completo"
              required
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
              placeholder="seu@email.com"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {paymentMethod === 'mpesa' ? 'Número M-Pesa' : 'Telefone'}
            </label>
            <Input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder={paymentMethod === 'mpesa' ? '+258 84 123 4567' : '+258 84 123 4567'}
              required
            />
          </div>
        </div>

        {/* Payment Button */}
        <Button
          onClick={handlePayment}
          disabled={loading || !formData.name || !formData.email || !formData.phone}
          className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white"
        >
          {loading ? (
            <div className="flex items-center">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
              Processando...
            </div>
          ) : (
            `Pagar ${amount.toLocaleString('pt-MZ')} MZN`
          )}
        </Button>

        {/* Security Notice */}
        <div className="text-center text-xs text-gray-500">
          <div className="flex items-center justify-center mb-1">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
            Pagamento seguro via MozPayment
          </div>
          <p>Seus dados estão protegidos com criptografia SSL</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default MozPayment;
