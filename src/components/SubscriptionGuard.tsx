
import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Lock, Star } from "lucide-react";
import { Link } from "react-router-dom";

interface SubscriptionGuardProps {
  children: React.ReactNode;
  feature: string;
  requiredPlan?: string;
}

const SubscriptionGuard = ({ children, feature, requiredPlan = "Básico" }: SubscriptionGuardProps) => {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);

  useEffect(() => {
    // Simular verificação de assinatura
    const subscription = localStorage.getItem('user_subscription');
    setIsSubscribed(!!subscription);
  }, []);

  const handleFeatureAccess = () => {
    if (!isSubscribed) {
      setShowUpgradeModal(true);
      return false;
    }
    return true;
  };

  const simulateSubscription = () => {
    localStorage.setItem('user_subscription', JSON.stringify({
      plan: requiredPlan,
      active: true,
      expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString()
    }));
    setIsSubscribed(true);
    setShowUpgradeModal(false);
  };

  return (
    <>
      <div onClick={handleFeatureAccess}>
        {children}
      </div>

      <Dialog open={showUpgradeModal} onOpenChange={setShowUpgradeModal}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center">
              <Lock className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
              Funcionalidade Bloqueada
            </DialogTitle>
          </DialogHeader>

          <Card>
            <CardContent className="p-6 text-center">
              <div className="mb-4">
                <Star className="w-12 h-12 text-yellow-500 mx-auto mb-2" />
                <h3 className="text-lg font-semibold mb-2">
                  {feature}
                </h3>
                <p className="text-gray-600 text-sm">
                  Para usar "{feature}", você precisa assinar o plano {requiredPlan} ou superior.
                </p>
              </div>

              <div className="space-y-3">
                <Link to="/precos">
                  <Button className="w-full bg-gradient-to-r from-brand-purple to-brand-pink hover:from-brand-pink hover:to-brand-purple text-white">
                    Ver Planos
                  </Button>
                </Link>
                
                <Button 
                  variant="outline" 
                  onClick={simulateSubscription}
                  className="w-full"
                >
                  Simular Assinatura (Demo)
                </Button>
              </div>

              <p className="text-xs text-gray-500 mt-4">
                ✨ Todos os planos incluem 30 dias de garantia
              </p>
            </CardContent>
          </Card>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default SubscriptionGuard;
