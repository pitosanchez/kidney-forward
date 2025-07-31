import React from 'react';

const CorporatePartners: React.FC = () => {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Corporate Partners</h1>
        
        <p className="text-lg mb-8">
          Partner with Kidney Forward to make a meaningful impact in the lives of
          kidney patients while demonstrating your organization's commitment to healthcare.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Why Partner With Us?</h2>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2"></span>
                Make a direct impact on kidney patient care and support
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2"></span>
                Enhance your corporate social responsibility profile
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2"></span>
                Engage employees through volunteer opportunities
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2"></span>
                Receive recognition across our platforms and events
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Partnership Levels</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-lg">Platinum Partner</h3>
                <p className="text-gray-600">$100,000+ annual contribution</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Gold Partner</h3>
                <p className="text-gray-600">$50,000 - $99,999 annual contribution</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Silver Partner</h3>
                <p className="text-gray-600">$25,000 - $49,999 annual contribution</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Bronze Partner</h3>
                <p className="text-gray-600">$10,000 - $24,999 annual contribution</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 p-8 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Current Partners</h2>
          <p className="text-gray-700 mb-6">
            We're proud to work with leading organizations committed to improving
            kidney patient outcomes.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Placeholder for partner logos */}
            <div className="bg-white p-4 rounded text-center text-gray-500">
              Partner Logo
            </div>
            <div className="bg-white p-4 rounded text-center text-gray-500">
              Partner Logo
            </div>
            <div className="bg-white p-4 rounded text-center text-gray-500">
              Partner Logo
            </div>
            <div className="bg-white p-4 rounded text-center text-gray-500">
              Partner Logo
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold mb-4">Ready to Make a Difference?</h2>
          <p className="text-gray-600 mb-6">
            Contact us to learn more about partnership opportunities.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors">
            Become a Partner
          </button>
        </div>
      </div>
    </div>
  );
};

export default CorporatePartners;