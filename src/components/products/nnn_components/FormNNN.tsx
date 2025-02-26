"use client";

import React, { useState, useEffect } from 'react';

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

interface FormNNNProps {
  onFormChange: (data: FormData) => void;
}

export default function FormNNN({ onFormChange }: FormNNNProps) {
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => {
      const newData = { ...prevData, [name]: value };
      return newData;
    });
  };

  // Update parent component whenever form data changes
  useEffect(() => {
    onFormChange(formData);
  }, [formData, onFormChange]);

  return (
    <form className="space-y-8">
      <div className="border-b border-gray-900/10 pb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">NNN Agreement Details</h2>
        <p className="text-sm text-gray-600 mb-6">
          Fill out the information below to generate your Non-Disclosure, Non-Compete, and Non-Solicitation Agreement.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-6">
          <div>
            <label htmlFor="disclosingParty" className="block text-sm font-medium text-gray-900">
              Disclosing Party (Your Company)
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="disclosingParty"
                id="disclosingParty"
                value={formData.disclosingParty}
                onChange={handleInputChange}
                placeholder="Your Company Name, Inc."
                className="block w-full rounded-md px-3 py-2 border border-gray-300 text-gray-900 shadow-sm focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600"
              />
            </div>
          </div>

          <div>
            <label htmlFor="receivingParty" className="block text-sm font-medium text-gray-900">
              Receiving Party (Other Party)
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="receivingParty"
                id="receivingParty"
                value={formData.receivingParty}
                onChange={handleInputChange}
                placeholder="Other Party Name, LLC"
                className="block w-full rounded-md px-3 py-2 border border-gray-300 text-gray-900 shadow-sm focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600"
              />
            </div>
          </div>

          <div>
            <label htmlFor="effectiveDate" className="block text-sm font-medium text-gray-900">
              Effective Date
            </label>
            <div className="mt-2">
              <input
                type="date"
                name="effectiveDate"
                id="effectiveDate"
                value={formData.effectiveDate}
                onChange={handleInputChange}
                className="block w-full rounded-md px-3 py-2 border border-gray-300 text-gray-900 shadow-sm focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600"
              />
            </div>
          </div>

          <div>
            <label htmlFor="purpose" className="block text-sm font-medium text-gray-900">
              Purpose of Disclosure
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="purpose"
                id="purpose"
                value={formData.purpose}
                onChange={handleInputChange}
                placeholder="e.g., evaluating a potential business relationship"
                className="block w-full rounded-md px-3 py-2 border border-gray-300 text-gray-900 shadow-sm focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600"
              />
            </div>
          </div>

          <div>
            <label htmlFor="term" className="block text-sm font-medium text-gray-900">
              Agreement Term
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="term"
                id="term"
                value={formData.term}
                onChange={handleInputChange}
                placeholder="e.g., 2 years"
                className="block w-full rounded-md px-3 py-2 border border-gray-300 text-gray-900 shadow-sm focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600"
              />
            </div>
          </div>

          <div>
            <label htmlFor="confidentialityPeriod" className="block text-sm font-medium text-gray-900">
              Confidentiality Period
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="confidentialityPeriod"
                id="confidentialityPeriod"
                value={formData.confidentialityPeriod}
                onChange={handleInputChange}
                placeholder="e.g., 3 years"
                className="block w-full rounded-md px-3 py-2 border border-gray-300 text-gray-900 shadow-sm focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600"
              />
            </div>
          </div>

          <div>
            <label htmlFor="governingLaw" className="block text-sm font-medium text-gray-900">
              Governing Law (Jurisdiction)
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="governingLaw"
                id="governingLaw"
                value={formData.governingLaw}
                onChange={handleInputChange}
                placeholder="e.g., State of California"
                className="block w-full rounded-md px-3 py-2 border border-gray-300 text-gray-900 shadow-sm focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600"
              />
            </div>
          </div>

          <div>
            <label htmlFor="additionalTerms" className="block text-sm font-medium text-gray-900">
              Additional Terms
            </label>
            <div className="mt-2">
              <textarea
                name="additionalTerms"
                id="additionalTerms"
                rows={3}
                value={formData.additionalTerms}
                onChange={handleInputChange}
                placeholder="Any additional terms you'd like to include..."
                className="block w-full rounded-md px-3 py-2 border border-gray-300 text-gray-900 shadow-sm focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600"
              />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
