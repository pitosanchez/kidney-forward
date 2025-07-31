import React from 'react';

const TransplantCenters: React.FC = () => {
  const centers = [
    {
      name: "City Medical Center",
      location: "New York, NY",
      specialties: ["Adult Transplants", "Living Donor Program"],
      phone: "(212) 555-0100"
    },
    {
      name: "Regional Kidney Institute",
      location: "Los Angeles, CA",
      specialties: ["Pediatric Transplants", "High-Risk Patients"],
      phone: "(310) 555-0200"
    },
    {
      name: "Midwest Transplant Center",
      location: "Chicago, IL",
      specialties: ["Adult Transplants", "Paired Exchange Program"],
      phone: "(312) 555-0300"
    },
    {
      name: "Southern Medical Complex",
      location: "Houston, TX",
      specialties: ["Living Donor Program", "Research Trials"],
      phone: "(713) 555-0400"
    }
  ];

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Partner Transplant Centers</h1>
        
        <p className="text-lg mb-8">
          Find accredited transplant centers in our network that provide
          exceptional care and support throughout your transplant journey.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {centers.map((center, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">{center.name}</h3>
              <p className="text-gray-600 mb-3">
                <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {center.location}
              </p>
              <div className="mb-3">
                <p className="font-medium mb-1">Specialties:</p>
                <ul className="text-sm text-gray-600">
                  {center.specialties.map((specialty, idx) => (
                    <li key={idx}>" {specialty}</li>
                  ))}
                </ul>
              </div>
              <p className="text-gray-600">
                <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {center.phone}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gray-100 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Not Listed?</h2>
          <p className="text-gray-700 mb-4">
            Can't find a transplant center near you? Contact us and we'll help
            you locate qualified centers in your area.
          </p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
            Contact Us for Help
          </button>
        </div>
      </div>
    </div>
  );
};

export default TransplantCenters;