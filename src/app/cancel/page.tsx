import Link from 'next/link';

export default function CancelPage() {
  return (
    <div className="max-w-2xl mx-auto py-16 px-4 text-center">
      <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-full mb-6">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      </div>
      <h1 className="text-3xl font-bold mb-4">Payment Cancelled</h1>
      <p className="text-gray-600 mb-8">
        Your payment was cancelled. No charges were made.
      </p>
      <Link href="/" className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md transition">
        Return to Home
      </Link>
    </div>
  );
}