'use client';

import React from 'react';

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const handleCheckout = async () => {
    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ productId: product.id }),
      });
      
      const data = await response.json();
      
      // Redirect to Stripe Checkout
      if (data.url) {
        window.location.href = data.url;
      }
    } catch (error) {
      console.error('Error creating checkout session:', error);
    }
  };

  return (
    <div className="border rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-semibold">{product.name}</h2>
      <p className="text-gray-600 my-2">{product.description}</p>
      <p className="text-2xl font-bold my-4">${(product.price / 100).toFixed(2)}</p>
      <button 
        onClick={handleCheckout}
        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
      >
        Buy Now
      </button>
    </div>
  );
}