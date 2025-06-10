
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CreditCard, Smartphone, X } from "lucide-react";
import MozPayment from "./MozPayment";

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  plan: {
    name: string;
    price: number;
    features: string[];
  };
}

const PaymentModal = ({ isOpen, onClose, plan }: PaymentModalProps) => {
  const [paymentMethod, setPaymentMethod] = useState<'credit-card' | 'mozpayment'>('credit-card');

  const handlePaymentSuccess = () => {
    alert('Pagamento realizado com sucesso! Bem-vindo ao plano ' + plan.name);
    onClose();
  };

  const handlePaymentError = (error: string) => {
    alert('Erro no pagamento: ' + error);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            <span>Finalizar Pagamento - {plan.name}</span>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="w-4 h-4" />
            </Button>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Plan Summary */}
          <Card>
            <CardContent className="p-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">{plan.name}</h3>
                <Badge className="text-lg px-3 py-1">
                  R$ {plan.price}/mês
                </Badge>
              </div>
              <div className="space-y-2">
                {plan.features.slice(0, 3).map((feature, index) => (
                  <div key={index} className="text-sm text-gray-600">• {feature}</div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Payment Method Selection */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Método de Pagamento</h3>
            <div className="grid grid-cols-2 gap-4">
              <Button
                variant={paymentMethod === 'credit-card' ? 'default' : 'outline'}
                onClick={() => setPaymentMethod('credit-card')}
                className="h-20 flex flex-col items-center space-y-2"
              >
                <CreditCard className="w-6 h-6" />
                <span>Cartão de Crédito</span>
              </Button>
              
              <Button
                variant={paymentMethod === 'mozpayment' ? 'default' : 'outline'}
                onClick={() => setPaymentMethod('mozpayment')}
                className="h-20 flex flex-col items-center space-y-2"
              >
                <Smartphone className="w-6 h-6" />
                <span>MozPayment 🇲🇿</span>
              </Button>
            </div>
          </div>

          {/* Payment Form */}
          <div>
            {paymentMethod === 'mozpayment' ? (
              <MozPayment
                amount={plan.price}
                planName={plan.name}
                onPaymentSuccess={handlePaymentSuccess}
                onPaymentError={handlePaymentError}
              />
            ) : (
              <Card>
                <CardContent className="p-6">
                  <div className="text-center py-8">
                    <CreditCard className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Cartão de Crédito</h3>
                    <p className="text-gray-600 mb-4">
                      Integração com processador de cartão será implementada
                    </p>
                    <Button 
                      onClick={() => handlePaymentSuccess()}
                      className="bg-blue-600 hover:bg-blue-700"
                    >
                      Simular Pagamento
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PaymentModal;
