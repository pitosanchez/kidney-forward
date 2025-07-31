import React from 'react';

const Doctors: React.FC = () => {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Resources for Healthcare Professionals</h1>
        
        <p className="text-lg mb-8">
          Access professional resources, continuing education, and tools to better
          serve your kidney disease patients.
        </p>

        <div className="space-y-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Clinical Guidelines</h2>
            <p className="text-gray-600 mb-4">
              Stay updated with the latest clinical guidelines and best practices
              for kidney disease management and transplantation.
            </p>
            <button className="text-blue-600 hover:underline">Access Guidelines ’</button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">CME Courses</h2>
            <p className="text-gray-600 mb-4">
              Earn continuing medical education credits with our accredited courses
              on nephrology and transplant medicine.
            </p>
            <button className="text-blue-600 hover:underline">Browse Courses ’</button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Research & Publications</h2>
            <p className="text-gray-600 mb-4">
              Access the latest research, case studies, and publications in
              kidney disease treatment and organ transplantation.
            </p>
            <button className="text-blue-600 hover:underline">View Research ’</button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Professional Network</h2>
            <p className="text-gray-600 mb-4">
              Connect with other healthcare professionals specializing in
              nephrology and transplant medicine.
            </p>
            <button className="text-blue-600 hover:underline">Join Network ’</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctors;