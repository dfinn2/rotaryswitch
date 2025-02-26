'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function SuccessPage() {
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [sessionData, setSessionData] = useState<any>(null);
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');

  useEffect(() => {
    if (!sessionId) {
      setStatus('error');
      return;
    }

    async function fetchSession() {
      try {
        const response = await fetch(`/api/checkout-session?session_id=${sessionId}`);
        if (!response.ok) throw new Error('Failed to fetch session');
        
        const data = await response.json();
        setSessionData(data);
        setStatus('success');
      } catch (error) {
        console.error('Error fetching session:', error);
        setStatus('error');
      }
    }

    fetchSession();
  }, [sessionId]);

  return (
    <div className="max-w-2xl mx-auto py-16 px-4">
      {status === 'loading' && (
        <div className="text-center">
          <h1 className="text-2xl font-bold">Processing your payment...</h1>
          <p className="mt-4">Please wait while we confirm your payment.</p>
        </div>
      )}
      
      {status === 'success' && (
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold mb-4">Payment Successful!</h1>
          <p className="text-gray-600 mb-8">
            Thank you for your purchase. We've sent a confirmation email to your registered email address.
          </p>
          <Link href="/" className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md transition">
            Return to Home
          </Link>
        </div>
      )}
      
      {status === 'error' && (
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold mb-4">Something went wrong</h1>
          <p className="text-gray-600 mb-8">
            We couldn't verify your payment. Please contact support if you believe this is an error.
          </p>
          <Link href="/" className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md transition">
            Return to Home
          </Link>
        </div>
      )}
    </div>
  );
}