import { auth } from '@/app/lib/auth';
import stripe from '@/app/lib/stripe';
import { getOrCreateCustomer } from '@/app/server/stripe/get-customer-id';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { testeId } = await req.json();

  const price = process.env.STRIPE_SUBSCRIPTION_PRICE_ID;

  if (!price) {
    return NextResponse.json({ error: 'Price not found' }, { status: 500 });
  }

  const session = await auth();
  const userId = session?.user?.id;
  const userEmail = session?.user?.email;

  const customerId = await getOrCreateCustomer(userId!, userEmail!);

  if (!userId || !userEmail) {
    return NextResponse.json({ error: 'Unathorized' }, { status: 401 });
  }

  const metadata = {
    testeId,
    price,
  };

  try {
    const session = await stripe.checkout.sessions.create({
      line_items: [{ price, quantity: 1 }],
      mode: 'subscription',
      payment_method_types: ['card'],
      success_url: `${req.headers.get('origin')}/success`,
      cancel_url: `${req.headers.get('origin')}/cancel`,
      metadata,
      customer: customerId,
    });

    if (!session.url) {
      return NextResponse.json(
        { error: 'Session URL not found' },
        { status: 500 },
      );
    }

    return NextResponse.json({ sessionId: session.id }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
}
