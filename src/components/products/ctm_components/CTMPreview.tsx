'use client';

import React from 'react';
import Image from 'next/image';

interface CTMPreviewProps {
  formData: {
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
  };
}

// Available trademark classes for reference
const trademarkClassesData = [
  { id: 1, name: "Class 1", description: "Chemicals" },
  { id: 2, name: "Class 2", description: "Paints" },
  { id: 3, name: "Class 3", description: "Cosmetics and cleaning preparations" },
  // ... other classes
];

// Pricing configuration
const pricing = {
  basePrice: 120000, // $1,200 in cents
  additionalClassPrice: 35000, // $350 per additional class
  expeditedProcessing: 50000, // $500
  preliminarySearch: 25000, // $250
  englishCertificate: 10000, // $100
};

export default function CTMPreview({ formData }: CTMPreviewProps) {
  // Calculate total price
  const calculateTotal = () => {
    // Base price for first class
    let total = pricing.basePrice;
    
    // Additional classes (first class is included in base price)
    const additionalClasses = Math.max(0, formData.trademarkClasses.length - 1);
    total += additionalClasses * pricing.additionalClassPrice;
    
    // Add-on services
    if (formData.expeditedProcessing) total += pricing.expeditedProcessing;
    if (formData.preliminarySearch) total += pricing.preliminarySearch;
    if (formData.englishCertificate) total += pricing.englishCertificate;
    
    return total;
  };
  
  // Format price for display
  const formatPrice = (price: number) => {
    return `$${(price / 100).toFixed(2)}`;
  };
  
  // Get selected class names
  const selectedClasses = trademarkClassesData.filter(
    cls => formData.trademarkClasses.includes(cls.id)
  );
  
  const total = calculateTotal();

  return (
    <div className="space-y-6">
      <div className="border-b border-gray-200 pb-4">
        <h3 className="text-lg font-semibold text-gray-900">Application Summary</h3>
      </div>
      
      {/* Trademark Information */}
      <div>
        <h4 className="text-md font-medium text-gray-900">Trademark Details</h4>
        <div className="mt-2 bg-gray-50 p-4 rounded-md">
          {formData.trademarkName ? (
            <>
              <p className="text-gray-700"><span className="font-medium">Name:</span> {formData.trademarkName}</p>
              <p className="text-gray-700 capitalize"><span className="font-medium">Type:</span> {formData.trademarkType} Mark</p>
              
              {/* Show logo preview if available */}
              {formData.hasLogo && formData.logoPreview && (
                <div className="mt-2">
                  <p className="font-medium text-gray-700">Logo:</p>
                  <div className="mt-1 flex justify-center">
                    <Image 
                      src={formData.logoPreview}
                      alt="Trademark Logo"
                      width={100}
                      height={100}
                      className="object-contain h-20 border border-gray-200 rounded-md bg-white p-1"
                    />
                  </div>
                </div>
              )}
            </>
          ) : (
            <p className="text-gray-500 italic">Trademark details not yet provided</p>
          )}
        </div>
      </div>
      
      {/* Applicant Information */}
      <div>
        <h4 className="text-md font-medium text-gray-900">Applicant Information</h4>
        <div className="mt-2 bg-gray-50 p-4 rounded-md">
          {formData.applicantName ? (
            <>
              <p className="text-gray-700">
                <span className="font-medium">Name:</span> {formData.applicantName}
              </p>
              <p className="text-gray-700 capitalize">
                <span className="font-medium">Type:</span> {formData.applicantType}
              </p>
              {formData.applicantCountry && (
                <p className="text-gray-700">
                  <span className="font-medium">Country:</span> {formData.applicantCountry}
                </p>
              )}
            </>
          ) : (
            <p className="text-gray-500 italic">Applicant details not yet provided</p>
          )}
        </div>
      </div>
      
      {/* Selected Classes */}
      <div>
        <h4 className="text-md font-medium text-gray-900">Trademark Classes</h4>
        <div className="mt-2 bg-gray-50 p-4 rounded-md">
          {formData.trademarkClasses.length > 0 ? (
            <div>
              {selectedClasses.map(cls => (
                <div key={cls.id} className="mb-1 text-sm">
                  <span className="font-medium">{cls.name}:</span> {cls.description}
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 italic">No classes selected yet</p>
          )}
        </div>
      </div>
      
      {/* Price Calculation */}
      <div className="border-t border-b border-gray-200 py-4">
        <h4 className="text-md font-medium text-gray-900">Price Breakdown</h4>
        
        <div className="mt-4 space-y-2">
          <div className="flex justify-between">
            <span className="text-gray-600">Base Registration Fee (1 class)</span>
            <span className="font-medium">{formatPrice(pricing.basePrice)}</span>
          </div>
          
          {formData.trademarkClasses.length > 1 && (
            <div className="flex justify-between">
              <span className="text-gray-600">
                Additional Classes ({formData.trademarkClasses.length - 1} × {formatPrice(pricing.additionalClassPrice)})
              </span>
              <span className="font-medium">
                {formatPrice(pricing.additionalClassPrice * (formData.trademarkClasses.length - 1))}
              </span>
            </div>
          )}
          
          {formData.preliminarySearch && (
            <div className="flex justify-between">
              <span className="text-gray-600">Preliminary Search</span>
              <span className="font-medium">{formatPrice(pricing.preliminarySearch)}</span>
            </div>
          )}
          
          {formData.expeditedProcessing && (
            <div className="flex justify-between">
              <span className="text-gray-600">Expedited Processing</span>
              <span className="font-medium">{formatPrice(pricing.expeditedProcessing)}</span>
            </div>
          )}
          
          {formData.englishCertificate && (
            <div className="flex justify-between">
              <span className="text-gray-600">English Certificate Translation</span>
              <span className="font-medium">{formatPrice(pricing.englishCertificate)}</span>
            </div>
          )}
          
          <div className="flex justify-between pt-4 border-t border-gray-200">
            <span className="font-semibold">Total</span>
            <span className="font-semibold text-lg">{formatPrice(total)}</span>
          </div>
        </div>
      </div>
      
      {/* Application Timeline */}
      <div className="bg-blue-50 p-4 rounded-md">
        <h4 className="text-sm font-medium text-blue-800">Estimated Timeline</h4>
        <p className="mt-1 text-sm text-blue-700">
          {formData.expeditedProcessing 
            ? "With expedited processing: 8-12 months (approximate)" 
            : "Standard processing: 12-18 months (approximate)"
          }
        </p>
      </div>
    </div>
  );
}