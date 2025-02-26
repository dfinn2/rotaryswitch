"use client";

import React from 'react';

interface NNNPreviewProps {
  formData: {
    disclosingParty: string;
    receivingParty: string;
    effectiveDate: string;
    purpose: string;
    governingLaw: string;
    term: string;
    confidentialityPeriod: string;
    additionalTerms: string;
    [key: string]: string;
  };
}

const NNNPreview: React.FC<NNNPreviewProps> = ({ formData }) => {
  const {
    disclosingParty = "[DISCLOSING PARTY NAME]",
    receivingParty = "[RECEIVING PARTY NAME]",
    effectiveDate = "[DATE]",
    purpose = "[PURPOSE OF DISCLOSURE]",
    governingLaw = "[JURISDICTION]",
    term = "[TERM PERIOD]",
    confidentialityPeriod = "[PERIOD]",
    additionalTerms = "",
  } = formData;

  return (
    <div className="bg-white p-8 border border-gray-300 rounded-lg shadow-sm">
      <h1 className="text-2xl font-bold text-center mb-6">NON-DISCLOSURE, NON-COMPETE AND NON-SOLICITATION AGREEMENT</h1>
      
      <p className="mb-4">This Non-Disclosure, Non-Compete and Non-Solicitation Agreement (the "Agreement") is entered into as of {effectiveDate} by and between:</p>
      
      <p className="mb-4"><strong>{disclosingParty}</strong> ("Disclosing Party")</p>
      <p className="mb-4">AND</p>
      <p className="mb-4"><strong>{receivingParty}</strong> ("Receiving Party")</p>
      
      <h2 className="text-xl font-semibold mt-6 mb-3">1. PURPOSE</h2>
      <p className="mb-4">
        The Disclosing Party wishes to disclose certain confidential and proprietary information to the 
        Receiving Party for the purpose of {purpose}.
      </p>
      
      <h2 className="text-xl font-semibold mt-6 mb-3">2. NON-DISCLOSURE OBLIGATIONS</h2>
      <p className="mb-4">
        Receiving Party agrees to hold all Confidential Information in strict confidence for a period of {confidentialityPeriod} 
        from the date of disclosure. Receiving Party shall not disclose such information to any third party and shall use 
        it only for the Purpose stated above.
      </p>
      
      <h2 className="text-xl font-semibold mt-6 mb-3">3. NON-COMPETE COVENANT</h2>
      <p className="mb-4">
        During the term of {term} and for a period of {confidentialityPeriod} thereafter, Receiving Party agrees not to engage in 
        any business that directly competes with the Disclosing Party's business.
      </p>
      
      <h2 className="text-xl font-semibold mt-6 mb-3">4. NON-SOLICITATION</h2>
      <p className="mb-4">
        Receiving Party agrees not to solicit any employees, contractors, customers, or vendors of the Disclosing Party for 
        a period of {confidentialityPeriod} following the termination of the relationship between the parties.
      </p>
      
      <h2 className="text-xl font-semibold mt-6 mb-3">5. GOVERNING LAW</h2>
      <p className="mb-4">
        This Agreement shall be governed by and construed in accordance with the laws of {governingLaw}.
      </p>
      
      {additionalTerms && (
        <div>
          <h2 className="text-xl font-semibold mt-6 mb-3">6. ADDITIONAL TERMS</h2>
          <p className="mb-4">{additionalTerms}</p>
        </div>
      )}
      
      <div className="mt-12 pt-6 border-t border-gray-300">
        <div className="flex justify-between">
          <div className="w-5/12">
            <p className="mb-8">DISCLOSING PARTY:</p>
            <div className="border-b border-black mb-2"></div>
            <p>{disclosingParty}</p>
          </div>
          <div className="w-5/12">
            <p className="mb-8">RECEIVING PARTY:</p>
            <div className="border-b border-black mb-2"></div>
            <p>{receivingParty}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NNNPreview;