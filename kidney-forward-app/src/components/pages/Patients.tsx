import React from 'react';

const Patients: React.FC = () => {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Resources for Patients</h1>
        
        <p className="text-lg mb-8">
          Whether you're newly diagnosed or have been managing kidney disease for years,
          we're here to support you every step of the way.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Educational Resources</h2>
            <p className="text-gray-600 mb-4">
              Access comprehensive guides about kidney disease, treatment options,
              and lifestyle management.
            </p>
            <button className="text-blue-600 hover:underline">Learn More ’</button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Support Groups</h2>
            <p className="text-gray-600 mb-4">
              Connect with other patients and share experiences in our moderated
              support groups.
            </p>
            <button className="text-blue-600 hover:underline">Join Now ’</button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Treatment Centers</h2>
            <p className="text-gray-600 mb-4">
              Find qualified treatment centers and specialists in your area.
            </p>
            <button className="text-blue-600 hover:underline">Find Centers ’</button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Financial Assistance</h2>
            <p className="text-gray-600 mb-4">
              Learn about financial aid programs and insurance navigation services.
            </p>
            <button className="text-blue-600 hover:underline">Get Help ’</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Patients;