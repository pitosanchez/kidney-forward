import React from 'react';
import { Link } from 'react-router-dom';

const Donors: React.FC = () => {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Become a Kidney Donor</h1>
        
        <div className="bg-blue-50 p-6 rounded-lg mb-8">
          <p className="text-lg">
            Your decision to become a kidney donor can save lives. Learn about the donation
            process and how you can make a difference.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Living Donation</h2>
            <p className="text-gray-600 mb-4">
              Living kidney donation is when a healthy person donates one of their kidneys
              to someone in need. The remaining kidney can provide the necessary function.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Shorter wait times for recipients</li>
              <li>Better long-term outcomes</li>
              <li>Scheduled surgery at convenient times</li>
              <li>Donor can live a normal, healthy life</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Deceased Donation</h2>
            <p className="text-gray-600 mb-4">
              Registering as an organ donor means that upon your death, your organs
              can be used to save multiple lives.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>One donor can save up to 8 lives</li>
              <li>No cost to donor's family</li>
              <li>Does not affect funeral arrangements</li>
              <li>Supported by major religions</li>
            </ul>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Ready to Save a Life?</h2>
          <p className="text-gray-600 mb-6">
            Join our donor registry today and take the first step towards giving
            someone the gift of life.
          </p>
          <Link
            to="/donor-registration"
            className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors inline-block"
          >
            Register as a Donor
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Donors;