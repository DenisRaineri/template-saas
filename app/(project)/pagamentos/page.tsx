'use client';

import useMercadoPago from '@/app/hooks/useMercadoPago';
import { useStripe } from '@/app/hooks/useStripe';

export default function Pagamentos() {
  const {
    createPaymentStripeCheckout,
    createSubscriptionStripeCheckout,
    handleCreateStripePortal,
  } = useStripe();

  const { createMercadoPagoCheckout } = useMercadoPago();

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-4xl font-bold">Pagamentos</h1>
      <button
        className="bg-blue-400 p-4 rounded-md hover:bg-blue-500 text-white w-[250px]"
        onClick={() =>
          createPaymentStripeCheckout({
            testeId: '123',
          })
        }
      >
        Criar Pagamento Stripe
      </button>
      <button
        className="bg-blue-400 p-4 rounded-md hover:bg-blue-500 text-white w-[250px]"
        onClick={() =>
          createSubscriptionStripeCheckout({
            testeId: '123',
          })
        }
      >
        Criar Assinatura Stripe
      </button>
      <button
        className="bg-blue-400 p-4 rounded-md hover:bg-blue-500 text-white w-[250px]"
        onClick={handleCreateStripePortal}
      >
        Criar Portal de Pagamentos
      </button>
      <button
        className="bg-blue-400 p-4 rounded-md hover:bg-blue-500 text-white w-[250px]"
        onClick={() =>
          createMercadoPagoCheckout({
            testeId: '123',
            userEmail: 'denispraineri@gmail.com',
          })
        }
      >
        Criar Portal Mercado Pago
      </button>
    </div>
  );
}
