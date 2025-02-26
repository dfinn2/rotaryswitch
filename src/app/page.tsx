'use client'

import Navbar from '../components/global/Navbar'
import Footer from '../components/global/Footer'
import Link from 'next/link'

export default function Homepage() {
  return (
    <div className="bg-white">
      <Navbar />

      <main className="relative isolate">
        {/* Background gradient elements */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-indigo-300 to-blue-300 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>

        {/* Hero section */}
        <div className="px-6 pt-14 lg:px-8">
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                Most important document for China sourcing{' '}
                <Link href="/products/nnn" className="font-semibold text-indigo-600">
                  <span aria-hidden="true" className="absolute inset-0" />
                  NNN Agreement <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
            <div className="text-center">
              <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
                Protect Your Business When Sourcing From China
              </h1>
              <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
                Legal documents and services designed specifically for businesses working with Chinese 
                manufacturers. Protect your intellectual property, secure your supply chain, and prevent costly legal issues.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                  href="/products/nnn"
                  className="rounded-md bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Create NNN Agreement
                </Link>
                <Link href="/products" className="text-sm/6 font-semibold text-gray-900">
                  Browse all documents <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* Key products section */}
        <div className="bg-gray-50 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Essential Protection for China Sourcing</h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Our most important legal documents to protect your business when manufacturing in China
              </p>
            </div>
            
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              {/* NNN Agreement Card */}
              <div className="flex flex-col bg-white shadow-sm rounded-lg overflow-hidden border border-gray-200">
                <div className="h-2 w-full bg-indigo-500"></div>
                <div className="flex flex-1 flex-col justify-between p-8">
                  <div className="flex-1">
                    <div className="flex items-center gap-x-4">
                      <span className="inline-flex items-center rounded-md bg-indigo-100 px-2.5 py-0.5 text-sm font-medium text-indigo-800">
                        Most Important
                      </span>
                      <span className="inline-flex items-center rounded-md bg-blue-100 px-2.5 py-0.5 text-sm font-medium text-blue-800">
                        Template
                      </span>
                    </div>
                    <h3 className="mt-4 text-2xl font-bold leading-8 tracking-tight text-gray-900">NNN Agreement</h3>
                    <p className="mt-4 text-base leading-7 text-gray-600">
                      Non-disclosure, Non-use, and Non-circumvention agreement specifically designed for Chinese business relationships.
                      This is your first line of defense before sharing any product details.
                    </p>
                    <ul className="mt-8 space-y-2">
                      <li className="flex items-center">
                        <svg className="h-5 w-5 text-indigo-500 flex-shrink-0 mr-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Prevents theft of your product ideas</span>
                      </li>
                      <li className="flex items-center">
                        <svg className="h-5 w-5 text-indigo-500 flex-shrink-0 mr-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Stops factories from circumventing you</span>
                      </li>
                      <li className="flex items-center">
                        <svg className="h-5 w-5 text-indigo-500 flex-shrink-0 mr-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>China-specific legal provisions</span>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-8">
                    <Link
                      href="/products/nnn"
                      className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 block text-center"
                    >
                      Create Your NNN Agreement
                    </Link>
                  </div>
                </div>
              </div>
              
              {/* China Trademark Registration */}
              <div className="flex flex-col bg-white shadow-sm rounded-lg overflow-hidden border border-gray-200">
                <div className="h-2 w-full bg-amber-500"></div>
                <div className="flex flex-1 flex-col justify-between p-8">
                  <div className="flex-1">
                    <div className="flex items-center gap-x-4">
                      <span className="inline-flex items-center rounded-md bg-amber-100 px-2.5 py-0.5 text-sm font-medium text-amber-800">
                        Highly Recommended
                      </span>
                      <span className="inline-flex items-center rounded-md bg-green-100 px-2.5 py-0.5 text-sm font-medium text-green-800">
                        Service
                      </span>
                    </div>
                    <h3 className="mt-4 text-2xl font-bold leading-8 tracking-tight text-gray-900">China Trademark Registration</h3>
                    <p className="mt-4 text-base leading-7 text-gray-600">
                      China follows a "first-to-file" trademark system. If you don't register your trademark in China, someone else will—and then legally own it there.
                    </p>
                    <ul className="mt-8 space-y-2">
                      <li className="flex items-center">
                        <svg className="h-5 w-5 text-amber-500 flex-shrink-0 mr-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Comprehensive trademark search</span>
                      </li>
                      <li className="flex items-center">
                        <svg className="h-5 w-5 text-amber-500 flex-shrink-0 mr-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Full application filing and follow-up</span>
                      </li>
                      <li className="flex items-center">
                        <svg className="h-5 w-5 text-amber-500 flex-shrink-0 mr-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Registration certificate delivery</span>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-8">
                    <Link
                      href="/products/trademark-registration"
                      className="rounded-md bg-amber-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600 block text-center"
                    >
                      Start Trademark Registration
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Why you need protection section */}
        <div className="bg-indigo-800 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base font-semibold leading-7 text-indigo-200">Protect Your Business</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                3 Critical Risks When Sourcing From China
              </p>
              <p className="mt-6 text-lg leading-8 text-indigo-200">
                Without proper legal protection, your business faces significant risks when working with Chinese manufacturers.
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                <div className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-xl font-semibold leading-7 text-white">
                    <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-indigo-500">
                      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                      </svg>
                    </div>
                    Intellectual Property Theft
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-indigo-200">
                    <p className="flex-auto">
                      Your designs and ideas can be stolen and copied before you even go to market. Chinese manufacturers may produce unauthorized copies of your products for competitors or their own profit.
                    </p>
                  </dd>
                </div>
                <div className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-xl font-semibold leading-7 text-white">
                    <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-indigo-500">
                      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                      </svg>
                    </div>
                    Supply Chain Circumvention
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-indigo-200">
                    <p className="flex-auto">
                      Manufacturers may go around you and sell directly to your customers. Without proper agreements, 
                      you have little recourse when a factory decides to cut you out of your own supply chain.
                    </p>
                  </dd>
                </div>
                <div className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-xl font-semibold leading-7 text-white">
                    <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-indigo-500">
                      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                      </svg>
                    </div>
                    Trademark Hijacking
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-indigo-200">
                    <p className="flex-auto">
                      China's "first-to-file" trademark system means anyone can register your brand. Many businesses discover their trademark has already been registered in China, leading to legal battles or costly rebranding.
                    </p>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
        
        {/* CTA section */}
        <div className="bg-white">
          <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
            <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
              <svg
                viewBox="0 0 1024 1024"
                className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
                aria-hidden="true"
              >
                <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
                <defs>
                  <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                    <stop stopColor="#7775D6" />
                    <stop offset={1} stopColor="#E935C1" />
                  </radialGradient>
                </defs>
              </svg>
              <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Protect your business today.
                  <br />
                  Start with an NNN Agreement.
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-300">
                  Don't risk your intellectual property or business relationships. 
                  Our NNN Agreement is the essential first step before sharing any product details with Chinese manufacturers.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                  <Link
                    href="/products/nnn"
                    className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    Create NNN Agreement
                  </Link>
                  <Link href="/products" className="text-sm font-semibold leading-6 text-white">
                    View all products <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
              <div className="relative mt-16 h-80 lg:mt-8">
                <img
                  className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
                  src="https://images.unsplash.com/photo-1611859266238-4b98091d9d9b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
                  alt="Container ship in port representing China sourcing"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </main>
      <Footer />
    </div>
  )
}
