import { NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';

// Sample product database - in a real app, fetch from your DB
const products = {
  'prod_1': {
    name: 'Basic Plan',
    price: 2999,
  },
  'prod_2': {
    name: 'Premium Plan',
    price: 4999,
  },
  'prod_3': {
    name: 'Enterprise Plan',
    price: 9999,
  },
};

export async function POST(req: Request) {
  try {
    const { productId } = await req.json();
    
    // Make sure the product exists
    const product = products[productId as keyof typeof products];
    if (!product) {
      return NextResponse.json(
        { error: 'Product not found' },
        { status: 404 }
      );
    }

    // Create a checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: product.name,
            },
            unit_amount: product.price,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${req.headers.get('origin')}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.get('origin')}/cancel`,
    });

    return NextResponse.json({ url: session.url });
  } catch (error: any) {
    console.error('Stripe error:', error);
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}