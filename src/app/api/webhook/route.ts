import { NextResponse } from 'next/server';
import { headers } from 'next/headers';
import { stripe } from '@/lib/stripe';

// This is your Stripe CLI webhook secret for testing your endpoint locally
const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET as string;

export async function POST(req: Request) {
  const body = await req.text();
  const headersList = headers();
  const sig = headersList.get('stripe-signature') as string;
  
  let event;

  try {
    event = stripe.webhooks.constructEvent(body, sig, endpointSecret);
  } catch (err: any) {
    console.error(`Webhook Error: ${err.message}`);
    return NextResponse.json(
      { error: `Webhook Error: ${err.message}` },
      { status: 400 }
    );
  }

  // Handle the event
  switch (event.type) {
    case 'checkout.session.completed':
      const session = event.data.object;
      // Fulfill the order...
      console.log('Payment succeeded!', session);
      break;
    case 'payment_intent.payment_failed':
      const paymentIntent = event.data.object;
      console.log('Payment failed:', paymentIntent);
      break;
    default:
      // Unexpected event type
      console.log(`Unhandled event type ${event.type}`);
  }

  return NextResponse.json({ received: true });
}

// Needed for Stripe webhook handling
export const dynamic = 'force-dynamic';