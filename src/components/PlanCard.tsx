
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, X, Star } from "lucide-react";
import PaymentModal from "./PaymentModal";

interface PlanCardProps {
  plan: {
    name: string;
    price: string;
    annualPrice: string;
    period: string;
    color: string;
    popular?: boolean;
    features: Array<{ text: string; included: boolean }>;
  };
  index: number;
}

const PlanCard = ({ plan, index }: PlanCardProps) => {
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  const handleChoosePlan = () => {
    setShowPaymentModal(true);
  };

  const planData = {
    name: plan.name,
    price: parseFloat(plan.annualPrice),
    features: plan.features.filter(f => f.included).map(f => f.text)
  };

  return (
    <>
      <Card 
        className={`relative hover-scale hover-glow animate-scale-in ${
          plan.popular ? 'ring-2 ring-brand-purple scale-105' : ''
        }`}
        style={{animationDelay: `${index * 0.1}s`}}
      >
        {plan.popular && (
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <Badge className="bg-gradient-to-r from-brand-purple to-brand-pink text-white px-4 py-1">
              <Star className="w-4 h-4 mr-1" />
              Popular
            </Badge>
          </div>
        )}
        
        <CardHeader className="text-center pb-8">
          <CardTitle className="text-2xl font-bold text-gray-900 mb-4">
            {plan.name}
          </CardTitle>
          
          <div className="mb-4">
            <div className="flex items-center justify-center mb-2">
              <span className="text-4xl font-bold text-gray-900">R$ {plan.annualPrice}</span>
              <span className="text-gray-600 ml-2">/{plan.period}</span>
            </div>
            <div className="flex items-center justify-center">
              <span className="text-lg text-gray-500 line-through">R$ {plan.price}</span>
              <span className="text-sm text-green-500 ml-2 font-semibold">+ 2 Meses Grátis</span>
            </div>
          </div>
          
          <Button 
            onClick={handleChoosePlan}
            className={`w-full bg-gradient-to-r ${plan.color} hover:opacity-90 text-white font-semibold py-3 rounded-full hover-scale`}
          >
            Escolher Plano
          </Button>
        </CardHeader>
        
        <CardContent className="space-y-4">
          {plan.features.map((feature, featureIndex) => (
            <div key={featureIndex} className="flex items-center space-x-3">
              {feature.included ? (
                <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
              ) : (
                <X className="w-5 h-5 text-red-500 flex-shrink-0" />
              )}
              <span className={`text-sm ${feature.included ? 'text-gray-700' : 'text-gray-400'}`}>
                {feature.text}
              </span>
            </div>
          ))}
        </CardContent>
      </Card>

      <PaymentModal
        isOpen={showPaymentModal}
        onClose={() => setShowPaymentModal(false)}
        plan={planData}
      />
    </>
  );
};

export default PlanCard;
