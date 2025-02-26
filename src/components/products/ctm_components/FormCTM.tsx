'use client';

import { useState } from 'react';
import Image from 'next/image';

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

interface FormCTMProps {
  onFormChange: (data: CTMFormData) => void;
}

// Available trademark classes for selection
const trademarkClasses = [
  { id: 1, name: "Class 1", description: "Chemicals" },
  { id: 2, name: "Class 2", description: "Paints" },
  { id: 3, name: "Class 3", description: "Cosmetics and cleaning preparations" },
  { id: 4, name: "Class 4", description: "Lubricants and fuels" },
  { id: 5, name: "Class 5", description: "Pharmaceuticals" },
  { id: 6, name: "Class 6", description: "Metal goods" },
  { id: 7, name: "Class 7", description: "Machinery" },
  { id: 8, name: "Class 8", description: "Hand tools" },
  { id: 9, name: "Class 9", description: "Electrical and scientific apparatus" },
  { id: 10, name: "Class 10", description: "Medical apparatus" },
  { id: 11, name: "Class 11", description: "Environmental control apparatus" },
  { id: 12, name: "Class 12", description: "Vehicles" },
  { id: 13, name: "Class 13", description: "Firearms" },
  { id: 14, name: "Class 14", description: "Jewelry" },
  { id: 15, name: "Class 15", description: "Musical Instruments" },
  { id: 16, name: "Class 16", description: "Paper goods and printed matter" },
  { id: 17, name: "Class 17", description: "Rubber goods" },
  { id: 18, name: "Class 18", description: "Leather goods" },
  { id: 19, name: "Class 19", description: "Non-metallic building materials" },
  { id: 20, name: "Class 20", description: "Furniture and articles not otherwise classified" },
  { id: 21, name: "Class 21", description: "Housewares and glass" },
  { id: 22, name: "Class 22", description: "Cordage and fibers" },
  { id: 23, name: "Class 23", description: "Yarns and threads" },
  { id: 24, name: "Class 24", description: "Fabrics" },
  { id: 25, name: "Class 25", description: "Clothing" },
  { id: 26, name: "Class 26", description: "Fancy goods" },
  { id: 27, name: "Class 27", description: "Floor coverings" },
  { id: 28, name: "Class 28", description: "Toys and sporting goods" },
  { id: 29, name: "Class 29", description: "Meats and processed foods" },
  { id: 30, name: "Class 30", description: "Staple foods" },
  { id: 31, name: "Class 31", description: "Natural agricultural products" },
  { id: 32, name: "Class 32", description: "Light beverages" },
  { id: 33, name: "Class 33", description: "Wines and spirits" },
  { id: 34, name: "Class 34", description: "Smokers' articles" },
  { id: 35, name: "Class 35", description: "Advertising and business" },
  { id: 36, name: "Class 36", description: "Insurance and financial" },
  { id: 37, name: "Class 37", description: "Building construction and repair" },
  { id: 38, name: "Class 38", description: "Telecommunications" },
  { id: 39, name: "Class 39", description: "Transportation and storage" },
  { id: 40, name: "Class 40", description: "Treatment of materials" },
  { id: 41, name: "Class 41", description: "Education and entertainment" },
  { id: 42, name: "Class 42", description: "Computer, scientific & legal" },
  { id: 43, name: "Class 43", description: "Hotels and restaurants" },
  { id: 44, name: "Class 44", description: "Medical, beauty & agricultural" },
  { id: 45, name: "Class 45", description: "Personal services" }
];

export default function FormCTM({ onFormChange }: FormCTMProps) {
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
    preliminarySearch: true, // Pre-selected as recommended
    englishCertificate: false,
    additionalComments: '',
  });
  
  const [activeStep, setActiveStep] = useState(1);
  const totalSteps = 3;
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => {
        const newData = { ...prev, [name]: checked };
        onFormChange(newData);
        return newData;
      });
    } else {
      setFormData(prev => {
        const newData = { ...prev, [name]: value };
        onFormChange(newData);
        return newData;
      });
    }
  };
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    // Preview the selected image
    const reader = new FileReader();
    reader.onload = (e) => {
      const newData = { 
        ...formData, 
        logoFile: file,
        logoPreview: e.target?.result as string,
        hasLogo: true
      };
      setFormData(newData);
      onFormChange(newData);
    };
    reader.readAsDataURL(file);
  };
  
  const handleClassToggle = (classId: number) => {
    setFormData(prev => {
      const classes = prev.trademarkClasses.includes(classId)
        ? prev.trademarkClasses.filter(id => id !== classId)
        : [...prev.trademarkClasses, classId];
      
      const newData = { ...prev, trademarkClasses: classes };
      onFormChange(newData);
      return newData;
    });
  };
  
  const nextStep = () => {
    if (activeStep < totalSteps) {
      setActiveStep(activeStep + 1);
    }
  };
  
  const prevStep = () => {
    if (activeStep > 1) {
      setActiveStep(activeStep - 1);
    }
  };
  
  return (
    <div className="space-y-8">
      <div className="mb-6 flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-900">Chinese Trademark Application</h2>
        <div className="flex items-center text-sm">
          <span className={`font-medium ${activeStep >= 1 ? 'text-indigo-600' : 'text-gray-500'}`}>Applicant</span>
          <span className="mx-2 text-gray-300">&gt;</span>
          <span className={`font-medium ${activeStep >= 2 ? 'text-indigo-600' : 'text-gray-500'}`}>Trademark</span>
          <span className="mx-2 text-gray-300">&gt;</span>
          <span className={`font-medium ${activeStep >= 3 ? 'text-indigo-600' : 'text-gray-500'}`}>Options</span>
        </div>
      </div>
      
      {/* Step 1: Applicant Information */}
      {activeStep === 1 && (
        <div className="space-y-6">
          <div>
            <label htmlFor="applicantType" className="block text-sm font-medium text-gray-700 mb-1">Applicant Type</label>
            <select 
              id="applicantType"
              name="applicantType"
              value={formData.applicantType}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="company">Company</option>
              <option value="individual">Individual</option>
              <option value="organization">Organization</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="applicantName" className="block text-sm font-medium text-gray-700 mb-1">
              {formData.applicantType === 'individual' ? 'Full Name' : 'Company/Organization Name'}*
            </label>
            <input
              type="text"
              id="applicantName"
              name="applicantName"
              required
              value={formData.applicantName}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          
          <div>
            <label htmlFor="applicantAddress" className="block text-sm font-medium text-gray-700 mb-1">Full Address*</label>
            <textarea
              id="applicantAddress"
              name="applicantAddress"
              required
              value={formData.applicantAddress}
              onChange={handleChange}
              rows={3}
              className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          
          <div>
            <label htmlFor="applicantCountry" className="block text-sm font-medium text-gray-700 mb-1">Country*</label>
            <input
              type="text"
              id="applicantCountry"
              name="applicantCountry"
              required
              value={formData.applicantCountry}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="applicantEmail" className="block text-sm font-medium text-gray-700 mb-1">Email Address*</label>
              <input
                type="email"
                id="applicantEmail"
                name="applicantEmail"
                required
                value={formData.applicantEmail}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            
            <div>
              <label htmlFor="applicantPhone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number*</label>
              <input
                type="tel"
                id="applicantPhone"
                name="applicantPhone"
                required
                value={formData.applicantPhone}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>
          
          <div className="pt-4 flex justify-end">
            <button
              type="button"
              onClick={nextStep}
              className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Next Step
            </button>
          </div>
        </div>
      )}
      
      {/* Step 2: Trademark Details */}
      {activeStep === 2 && (
        <div className="space-y-6">
          <div>
            <label htmlFor="trademarkName" className="block text-sm font-medium text-gray-700 mb-1">Trademark Name/Text*</label>
            <input
              type="text"
              id="trademarkName"
              name="trademarkName"
              required
              value={formData.trademarkName}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          
          <div>
            <label htmlFor="trademarkType" className="block text-sm font-medium text-gray-700 mb-1">Trademark Type*</label>
            <select 
              id="trademarkType"
              name="trademarkType"
              value={formData.trademarkType}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="word">Word Mark (Text Only)</option>
              <option value="logo">Logo Mark (Image Only)</option>
              <option value="combined">Combined Mark (Text & Image)</option>
            </select>
          </div>
          
          {(formData.trademarkType === 'logo' || formData.trademarkType === 'combined') && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Upload Logo/Image*</label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                  {formData.logoPreview ? (
                    <div className="flex flex-col items-center">
                      <Image 
                        src={formData.logoPreview} 
                        alt="Logo Preview" 
                        width={150} 
                        height={150} 
                        className="object-contain h-32"
                      />
                      <button
                        type="button"
                        onClick={() => {
                          const newData = {...formData, logoFile: null, logoPreview: undefined, hasLogo: false};
                          setFormData(newData);
                          onFormChange(newData);
                        }}
                        className="mt-2 text-sm text-red-600 hover:text-red-800"
                      >
                        Remove
                      </button>
                    </div>
                  ) : (
                    <>
                      <svg
                        className="mx-auto h-12 w-12 text-gray-400"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                      >
                        <path
                          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <div className="flex text-sm text-gray-600">
                        <label
                          htmlFor="logo-upload"
                          className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none"
                        >
                          <span>Upload a file</span>
                          <input
                            id="logo-upload"
                            name="logo-upload"
                            type="file"
                            accept="image/*"
                            onChange={handleFileChange}
                            className="sr-only"
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                    </>
                  )}
                </div>
              </div>
            </div>
          )}
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Trademark Classes*</label>
            <p className="text-sm text-gray-500 mb-3">
              Select all the classes that apply to your products or services (minimum 1 required)
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-60 overflow-y-auto p-2 border border-gray-200 rounded-md">
              {trademarkClasses.map(cls => (
                <div key={cls.id} className="flex items-start">
                  <input
                    type="checkbox"
                    id={`class-${cls.id}`}
                    checked={formData.trademarkClasses.includes(cls.id)}
                    onChange={() => handleClassToggle(cls.id)}
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded mt-1"
                  />
                  <label htmlFor={`class-${cls.id}`} className="ml-2 text-sm text-gray-700">
                    <span className="font-medium">{cls.name}:</span> {cls.description}
                  </label>
                </div>
              ))}
            </div>
            {formData.trademarkClasses.length === 0 && (
              <p className="mt-2 text-sm text-red-600">Please select at least one class</p>
            )}
          </div>
          
          <div className="pt-4 flex justify-between">
            <button
              type="button"
              onClick={prevStep}
              className="inline-flex justify-center py-2 px-4 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Back
            </button>
            <button
              type="button"
              onClick={nextStep}
              disabled={formData.trademarkClasses.length === 0 || !formData.trademarkName || ((['logo', 'combined'].includes(formData.trademarkType)) && !formData.hasLogo)}
              className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              Next Step
            </button>
          </div>
        </div>
      )}
      
      {/* Step 3: Additional Options */}
      {activeStep === 3 && (
        <div className="space-y-6">
          <div className="bg-indigo-50 p-4 rounded-md mb-6">
            <h3 className="text-sm font-medium text-indigo-800 mb-2">Additional Services</h3>
            <p className="text-xs text-indigo-700 mb-3">
              Select any additional services you would like to include with your trademark application
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="preliminarySearch"
                  name="preliminarySearch"
                  checked={formData.preliminarySearch}
                  onChange={handleChange}
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded mt-1"
                />
                <label htmlFor="preliminarySearch" className="ml-2">
                  <span className="text-sm font-medium text-gray-700">Preliminary Search (Recommended)</span>
                  <p className="text-xs text-gray-500">
                    We'll conduct a search for similar trademarks before filing to assess potential conflicts
                  </p>
                </label>
              </div>
              
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="expeditedProcessing"
                  name="expeditedProcessing"
                  checked={formData.expeditedProcessing}
                  onChange={handleChange}
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded mt-1"
                />
                <label htmlFor="expeditedProcessing" className="ml-2">
                  <span className="text-sm font-medium text-gray-700">Expedited Processing</span>
                  <p className="text-xs text-gray-500">
                    Priority handling of your application (additional fees apply)
                  </p>
                </label>
              </div>
              
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="englishCertificate"
                  name="englishCertificate"
                  checked={formData.englishCertificate}
                  onChange={handleChange}
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded mt-1"
                />
                <label htmlFor="englishCertificate" className="ml-2">
                  <span className="text-sm font-medium text-gray-700">English Certificate Translation</span>
                  <p className="text-xs text-gray-500">
                    Receive an English translation of your Chinese trademark certificate
                  </p>
                </label>
              </div>
            </div>
          </div>
          
          <div>
            <label htmlFor="additionalComments" className="block text-sm font-medium text-gray-700 mb-1">Additional Information or Comments</label>
            <textarea
              id="additionalComments"
              name="additionalComments"
              value={formData.additionalComments}
              onChange={handleChange}
              rows={4}
              className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Any specific requirements or questions about your trademark application..."
            />
          </div>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-yellow-800">Important Note</h3>
                <p className="text-sm text-yellow-700 mt-1">
                  Chinese trademark registration typically takes 12-18 months to complete. 
                  Our service includes all communications with the Chinese Trademark Office during this period.
                </p>
              </div>
            </div>
          </div>
          
          <div className="pt-4 flex justify-between">
            <button
              type="button"
              onClick={prevStep}
              className="inline-flex justify-center py-2 px-4 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Back
            </button>
          </div>
        </div>
      )}
    </div>
  );
}