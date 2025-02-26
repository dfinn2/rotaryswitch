import { NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const sessionId = searchParams.get('session_id');

  if (!sessionId) {
    return NextResponse.json(
      { error: 'Missing session_id parameter' },
      { status: 400 }
    );
  }

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    
    return NextResponse.json({
      status: session.status,
      customer_email: session.customer_details?.email,
      amount_total: session.amount_total,
      currency: session.currency,
    });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}