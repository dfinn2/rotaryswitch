"use client";

import React, { useState, useEffect } from 'react';
import { products } from '@/data/products';
import FormNNN from '@/components/products/nnn_components/FormNNN';
import NNNPreview from '@/components/products/nnn_components/NNNPreview';
import Navbar from '@/components/global/Navbar';
import Footer from '@/components/global/Footer';

interface FormData {
  disclosingParty: string;
  receivingParty: string;
  effectiveDate: string;
  purpose: string;
  governingLaw: string;
  term: string;
  confidentialityPeriod: string;
  additionalTerms: string;
}

export default function NNNAgreementPage() {
  // Find the NNN product with ID 001
  const product = products.find(p => p.id === '001');
  
  const [formStarted, setFormStarted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    disclosingParty: '',
    receivingParty: '',
    effectiveDate: '',
    purpose: '',
    governingLaw: '',
    term: '',
    confidentialityPeriod: '',
    additionalTerms: '',
  });
  
  const [isFormComplete, setIsFormComplete] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [animationClass, setAnimationClass] = useState('');

  // Function to start the form with animation
  const startForm = () => {
    // First, start the exit animation
    setAnimationClass('animate-fade-out');
    
    // After the exit animation completes, switch to form view
    setTimeout(() => {
      setFormStarted(true);
      // Then start the entry animation
      setTimeout(() => {
        setAnimationClass('animate-fade-in');
      }, 50);
    }, 300);
  };

  // Function to handle form data changes
  const handleFormChange = (data: FormData) => {
    setFormData(data);
    
    // Check if all required fields are filled
    const requiredFields = ['disclosingParty', 'receivingParty', 'effectiveDate', 'purpose'];
    const isComplete = requiredFields.every(field => data[field] && data[field].trim() !== '');
    setIsFormComplete(isComplete);
  };
  
  // Function to handle checkout
  const handleCheckout = async () => {
    if (!isFormComplete) return;
    
    try {
      setIsLoading(true);
      
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          productId: product?.id || '001',
          productName: product?.name || 'NNN Agreement',
          amount: product?.price || 14900,
          metadata: {
            disclosingParty: formData.disclosingParty,
            receivingParty: formData.receivingParty,
            documentType: 'NNN Agreement',
          }
        }),
      });
      
      const data = await response.json();
      
      if (data.url) {
        window.location.href = data.url;
      } else {
        throw new Error('No checkout URL returned');
      }
    } catch (error) {
      console.error('Error creating checkout session:', error);
      alert('There was an error processing your payment. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };
  
  useEffect(() => {
    // Add animation classes to global style
    const style = document.createElement('style');
    style.textContent = `
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
      }
      @keyframes fadeOut {
        from { opacity: 1; transform: translateY(0); }
        to { opacity: 0; transform: translateY(-10px); }
      }
      .animate-fade-in {
        animation: fadeIn 0.3s ease-out forwards;
      }
      .animate-fade-out {
        animation: fadeOut 0.3s ease-out forwards;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">{product?.name || 'NNN Agreement'}</h1>
          <p className="mt-2 text-gray-600">
            {product?.description || 'Create your custom Non-Disclosure, Non-Compete, and Non-Solicitation Agreement.'}
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - Info or Form depending on state */}
          <div className="lg:w-2/5">
            <div className="bg-white p-6 rounded-lg shadow-sm h-full">
              <div className={animationClass}>
                {!formStarted ? (
                  // Initial View - Product Information
                  <div className="space-y-6">
                    <h2 className="text-xl font-semibold">Protect Your Business Ideas</h2>
                    <p className="text-gray-600">
                      An NNN (Non-disclosure, Non-use, Non-circumvention) Agreement is essential when 
                      discussing sensitive business ideas with potential partners, manufacturers, or investors.
                    </p>
                    
                    <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                      <p className="font-semibold">Why you need this agreement:</p>
                      <ul className="mt-2 space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <svg className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>Prevents others from stealing your ideas</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>Creates legal protection before sharing details</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>Ensures your intellectual property remains yours</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="pt-6">
                      <button 
                        onClick={startForm}
                        className="w-full py-3 px-6 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-md shadow transition"
                      >
                        Get Started Now
                      </button>
                      <p className="text-sm text-center mt-3 text-gray-500">
                        You'll be able to preview the document before payment.
                      </p>
                    </div>
                  </div>
                ) : (
                  // Form View After Clicking Get Started
                  <FormNNN onFormChange={handleFormChange} />
                )}
              </div>
            </div>
          </div>
          
          {/* Preview Column - Right Side - full height - 200px (for button) */}
          <div className="lg:w-3/5">
            <div className="sticky top-8 flex flex-col h-[calc(100vh-200px)]"> {/* Tall container with flex column */}
              <h2 className="text-xl font-semibold mb-4">Document Preview</h2>
              
              {/* Document preview takes most of the height */}
              <div className="flex-grow bg-white p-6 rounded-lg shadow-sm overflow-auto">
                <NNNPreview formData={formData} />
              </div>
              
              {/* Payment button container - fixed at bottom with padding */}
              {formStarted && (
                <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <button
                    onClick={handleCheckout}
                    disabled={!isFormComplete || isLoading}
                    className={`w-full py-4 px-6 font-semibold rounded-md shadow transition-colors text-lg ${
                      isFormComplete 
                        ? "bg-indigo-600 hover:bg-indigo-700 text-white cursor-pointer" 
                        : "bg-gray-300 text-gray-500 cursor-not-allowed"
                    }`}
                  >
                    {isLoading 
                      ? 'Processing...' 
                      : `Complete & Pay $${((product?.price || 14900) / 100).toFixed(2)}`
                    }
                  </button>
                  
                  {!isFormComplete && (
                    <p className="text-sm text-gray-500 text-center mt-2">
                      Please fill out all required fields to continue
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}