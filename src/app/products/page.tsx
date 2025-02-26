"use client";

import React, { useState } from "react";
import Link from "next/link";
import { products } from "@/data/products";
import Navbar from "@/components/global/Navbar";
import Footer from "@/components/global/Footer";

export default function ProductsPage() {
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null);

  // Filter products based on selected category
  const filteredProducts = categoryFilter
    ? products.filter((product) => product.category === categoryFilter)
    : products;

  // Get unique categories for the filter
  const categories = Array.from(
    new Set(products.map((product) => product.category))
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Legal Documents & Services
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-gray-600">
            Professional legal documents and services tailored for businesses
            operating in China
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <button
            onClick={() => setCategoryFilter(null)}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              categoryFilter === null
                ? "bg-indigo-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            All
          </button>

          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setCategoryFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                categoryFilter === category
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative">
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800">
                    {product.category}
                  </span>
                </div>

                {/* Popular Badge */}
                {product.popular && (
                  <div className="absolute top-4 right-4">
                    <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-amber-100 text-amber-800">
                      Popular
                    </span>
                  </div>
                )}

                {/* Product Color Bar - different color per category */}
                <div
                  className={`h-2 w-full ${
                    product.category === "template"
                      ? "bg-indigo-500"
                      : product.category === "service"
                      ? "bg-green-500"
                      : "bg-purple-500"
                  }`}
                />
              </div>
              {/* Product Name and Description */}
              <div className="p-8">
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  {product.name}
                </h2>
                <p className="text-gray-600 mb-4 h-16 line-clamp-2">
                  {product.description}
                </p>
                {/* Product Price Div */}
                <div className="flex items-baseline mb-4">
                  <span className="text-2xl font-semibold text-gray-900">
                    ${(product.price / 100).toFixed(2)}
                  </span>
                  <span className="ml-2 text-sm text-gray-500">
                    {product.category === "service" && "/service"}
                  </span>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-gray-700 mb-2">
                    Features:
                  </h3>
                  <ul className="space-y-1">
                    {product.features.slice(0, 3).map((feature, index) => (
                      <li
                        key={index}
                        className="text-sm text-gray-600 flex items-start"
                      >
                        <svg
                          className="h-4 w-4 text-green-500 mr-1.5 mt-0.5 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}

                    {product.features.length > 3 && (
                      <li className="text-sm text-gray-500 italic">
                        +{product.features.length - 3} more features
                      </li>
                    )}
                  </ul>
                </div>

                <div className="flex flex-col space-y-2">
                  <Link
                    href={`/products/${product.slug}`}
                    className="w-full text-center bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition"
                  >
                    View Details
                  </Link>

                  <Link
                    href={`/products/${product.slug}`}
                    className="w-full text-center border border-indigo-600 text-indigo-600 py-2 rounded-md hover:bg-indigo-50 transition"
                  >
                    Create Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center mb-8">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold">
                How do the document templates work?
              </h3>
              <p className="mt-2 text-gray-600">
                Our templates are fill-in-the-blank forms that generate
                professional legal documents. Simply complete the required
                information, preview your document, and pay to download the
                finalized version.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">
                Are these documents legally binding?
              </h3>
              <p className="mt-2 text-gray-600">
                Yes, all our documents are drafted by experienced legal
                professionals and are fully compliant with relevant laws and
                regulations. Once properly executed, they are legally binding.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">
                Can I modify the documents after purchase?
              </h3>
              <p className="mt-2 text-gray-600">
                Yes, after purchase you'll receive both PDF and editable formats
                of your document, allowing you to make future modifications as
                needed.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
