"use client";

import React, { useState, useEffect } from 'react';
import { products } from '@/data/products';
import FormCTM from '@/components/products/ctm_components/FormCTM';
import CTMPreview from '@/components/products/ctm_components/CTMPreview';
import Navbar from '@/components/global/Navbar';
import Footer from '@/components/global/Footer';

interface CTMFormData {
  applicantName: string;
  applicantType: 'individual' | 'company' | 'organization';
  applicantAddress: string;
  applicantCountry: string;
  applicantEmail: string;
  applicantPhone: string;
  trademarkName: string;
  trademarkType: 'word' | 'logo' | 'combined';
  hasLogo: boolean;
  logoFile?: File | null;
  logoPreview?: string;
  trademarkClasses: number[];
  expeditedProcessing: boolean;
  preliminarySearch: boolean;
  englishCertificate: boolean;
  additionalComments: string;
  [key: string]: any;
}

export default function CTMPage() {
  // Find the CTM product with ID 003 (Chinese Trademark Registration)
  const product = products.find(p => p.id === '003');
  
  const [formStarted, setFormStarted] = useState(false);
  const [formData, setFormData] = useState<CTMFormData>({
    applicantName: '',
    applicantType: 'company',
    applicantAddress: '',
    applicantCountry: '',
    applicantEmail: '',
    applicantPhone: '',
    trademarkName: '',
    trademarkType: 'word',
    hasLogo: false,
    logoFile: null,
    logoPreview: undefined,
    trademarkClasses: [],
    expeditedProcessing: false,
    preliminarySearch: true,
    englishCertificate: false,
    additionalComments: '',
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
    }, 300); // This should match the exit animation duration
  };

  // Function to handle form data changes
  const handleFormChange = (data: CTMFormData) => {
    setFormData(data);
    
    // Check if all required fields are filled
    const requiredFields: (keyof CTMFormData)[] = [
      'applicantName', 
      'applicantAddress', 
      'applicantCountry',
      'applicantEmail',
      'applicantPhone',
      'trademarkName'
    ];
    
    // Check if trademark classes are selected
    const hasClasses = data.trademarkClasses.length > 0;
    
    // Check if logo is provided when needed
    const logoRequired = data.trademarkType === 'logo' || data.trademarkType === 'combined';
    const hasRequiredLogo = !logoRequired || (logoRequired && data.hasLogo);
    
    const isComplete = requiredFields.every(field => data[field] && data[field].toString().trim() !== '') 
      && hasClasses && hasRequiredLogo;
      
    setIsFormComplete(isComplete);
  };
  
  // Function to handle checkout
  const handleCheckout = async () => {
    if (!isFormComplete) return;
    
    try {
      setIsLoading(true);
      
      // Calculate total price (matching logic from CTMPreview)
      const pricing = {
        basePrice: 120000, // $1,200 in cents
        additionalClassPrice: 35000, // $350 per additional class
        expeditedProcessing: 50000, // $500
        preliminarySearch: 25000, // $250
        englishCertificate: 10000, // $100
      };
      
      let total = pricing.basePrice;
      const additionalClasses = Math.max(0, formData.trademarkClasses.length - 1);
      total += additionalClasses * pricing.additionalClassPrice;
      if (formData.expeditedProcessing) total += pricing.expeditedProcessing;
      if (formData.preliminarySearch) total += pricing.preliminarySearch;
      if (formData.englishCertificate) total += pricing.englishCertificate;
      
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          productId: product?.id || '003',
          productName: product?.name || 'China Trademark Registration',
          amount: total,
          metadata: {
            applicantName: formData.applicantName,
            trademarkName: formData.trademarkName,
            trademarkType: formData.trademarkType,
            trademarkClasses: formData.trademarkClasses.join(','),
            documentType: 'Chinese Trademark Registration',
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
    // Add our animation classes to global style
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
      // Clean up
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">{product?.name || 'China Trademark Registration'}</h1>
          <p className="mt-2 text-gray-600">
            {product?.description || 'Register your trademark in China to protect your brand in the world\'s largest market.'}
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - Info or Form depending on state - 3/5 width */}
          <div className="lg:w-3/5">
            <div className="bg-white p-6 rounded-lg shadow-sm h-full">
              <div className={animationClass}>
                {!formStarted ? (
                  // Initial View - Product Information
                  <div className="space-y-6">
                    <h2 className="text-xl font-semibold">Protect Your Brand in China</h2>
                    <p className="text-gray-600">
                      China follows a "first-to-file" trademark system, meaning whoever registers a trademark first owns it, 
                      regardless of prior use. This is different from the "first-to-use" system in many Western countries.
                    </p>
                    
                    <div className="bg-red-50 border-l-4 border-red-500 p-4">
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <svg className="h-5 w-5 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div className="ml-3">
                          <h3 className="font-medium text-red-800">Warning: Don't Wait</h3>
                          <p className="text-sm text-red-700 mt-1">
                            Many businesses discover their brand has already been registered in China by someone else when 
                            they try to enter the market, resulting in costly legal battles or rebranding.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <h2 className="text-xl font-semibold pt-4">Our Service Includes:</h2>
                    <ul className="space-y-3">
                      {product?.features?.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <svg className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="bg-amber-50 p-4 rounded-md">
                      <h3 className="font-medium text-amber-800 mb-2">Registration Process:</h3>
                      <ol className="space-y-2 list-decimal list-inside text-amber-700">
                        <li>Complete application form with your details</li>
                        <li>Submit application to the China National Intellectual Property Administration (CNIPA)</li>
                        <li>Preliminary examination (1-3 months)</li>
                        <li>Publication period (3 months)</li>
                        <li>Substantive examination (6-9 months)</li>
                        <li>Registration certificate issued</li>
                      </ol>
                      <p className="mt-3 text-sm text-amber-700">
                        Total process typically takes 12-18 months. Our service covers the entire process from
                        application to registration.
                      </p>
                    </div>
                    
                    <div className="pt-6">
                      <button 
                        onClick={startForm}
                        className="w-full py-3 px-6 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-md shadow transition"
                      >
                        Get Started Now
                      </button>
                      <p className="text-sm text-center mt-3 text-gray-500">
                        Start your trademark registration process today to secure your brand in China.
                      </p>
                    </div>
                  </div>
                ) : (
                  // Form View After Clicking Get Started
                  <FormCTM onFormChange={handleFormChange} />
                )}
              </div>
            </div>
          </div>
          
          {/* Preview Column - Right Side - 2/5 width */}
          <div className="lg:w-2/5">
            <div className="sticky top-8 flex flex-col h-[calc(100vh-200px)]"> {/* Tall container with flex column */}
              <h2 className="text-xl font-semibold mb-4">Application Summary</h2>
              
              {/* Application preview takes most of the height */}
              <div className="flex-grow bg-white p-6 rounded-lg shadow-sm overflow-auto">
                <CTMPreview formData={formData} />
              </div>
              
              {/* Payment button container - fixed at bottom with padding */}
              {formStarted && (
                <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <button
                    onClick={handleCheckout}
                    disabled={!isFormComplete || isLoading}
                    className={`w-full py-4 px-6 font-semibold rounded-md shadow transition-colors text-lg ${
                      isFormComplete 
                        ? "bg-amber-600 hover:bg-amber-700 text-white cursor-pointer" 
                        : "bg-gray-300 text-gray-500 cursor-not-allowed"
                    }`}
                  >
                    {isLoading 
                      ? 'Processing...' 
                      : 'Complete Application & Pay'
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