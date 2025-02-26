import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-white ">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: Main navigation */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase">
              Navigation
            </h3>
            <ul className="mt-4 space-y-4 ">
              <li>
                <Link href="/" className="hover:text-gray-500">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-gray-500">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gray-500">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gray-500">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Legal Templates */}
          <div>
            <h3 className="text-sm font-semibold text-gray-600 tracking-wider uppercase">
              Legal Templates
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="/products/nnn" className="text-base text-gray-500 hover:text-gray-900">
                  NNN Agreement
                </Link>
              </li>
              <li>
                <Link href="/products/employment-contract" className="text-base text-gray-500 hover:text-gray-900">
                  Employment Contract
                </Link>
              </li>
              <li>
                <Link href="/products/distribution-agreement" className="text-base text-gray-500 hover:text-gray-900">
                  Distribution Agreement
                </Link>
              </li>
              <li>
                <Link href="/products/privacy-policy" className="text-base text-gray-500 hover:text-gray-900">
                  Privacy Policy Generator
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-sm font-semibold text-gray-600 tracking-wider uppercase">
              Services
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="/products/trademark-registration" className="text-base text-gray-500 hover:text-gray-900">
                  Trademark Registration
                </Link>
              </li>
              <li>
                <Link href="/products/legal-consultation" className="text-base text-gray-500 hover:text-gray-900">
                  Legal Consultation
                </Link>
              </li>
              <li>
                <Link href="/products/wfoe-formation" className="text-base text-gray-500 hover:text-gray-900">
                  WFOE Formation
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Resources */}
          <div>
            <h3 className="text-sm font-semibold text-gray-600 tracking-wider uppercase">
              Resources
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="/resources/blog" className="text-base text-gray-500 hover:text-gray-900">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-base text-gray-500 hover:text-gray-900">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/resources/china-manufacturing" className="text-base text-gray-500 hover:text-gray-900">
                  China Manufacturing Guide
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Copyright section at the very bottom */}
      <div className="border-t border-gray-200 py-6">
        <p className="text-sm text-gray-500 text-center">
          © {new Date().getFullYear()} LegalDocs & Trademark Services China. All rights reserved.
        </p>
        <p className="text-xs text-gray-400 text-center mt-1">
          Your one-stop shop for downloadable legal document templates and expert trademark services.
        </p>
      </div>
    </footer>
  );
};

export default Footer;