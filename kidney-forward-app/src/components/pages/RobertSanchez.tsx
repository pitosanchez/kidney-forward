import React from 'react';

const RobertSanchez: React.FC = () => {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="md:w-1/3">
              <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center text-gray-500">
                Robert Sanchez Photo
              </div>
            </div>
            
            <div className="md:w-2/3">
              <h1 className="text-4xl font-bold mb-4">Robert Sanchez</h1>
              <p className="text-xl text-gray-600 mb-6">Co-Founder & Medical Director</p>
              
              <div className="space-y-4 text-gray-700">
                <p>
                  Dr. Robert Sanchez is a renowned nephrologist with over 20 years of experience
                  in kidney disease treatment and transplantation. As Medical Director of Kidney
                  Forward, he ensures all programs and resources meet the highest medical standards.
                </p>
                
                <p>
                  Dr. Sanchez completed his nephrology fellowship at Mayo Clinic and has been
                  at the forefront of kidney transplant innovation. He has performed over 1,000
                  kidney transplants and has pioneered several techniques that have improved
                  patient outcomes significantly.
                </p>
                
                <p>
                  Beyond his clinical work, Dr. Sanchez is passionate about patient education
                  and has developed comprehensive educational programs that help patients better
                  understand their condition and treatment options. He regularly conducts
                  workshops and seminars for both patients and healthcare professionals.
                </p>
              </div>

              <div className="mt-8">
                <h2 className="text-2xl font-semibold mb-4">Credentials & Achievements</h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>MD from Harvard Medical School</li>
                  <li>Board Certified in Internal Medicine and Nephrology</li>
                  <li>Published 50+ peer-reviewed research papers</li>
                  <li>Recipient of the Excellence in Transplant Medicine Award</li>
                  <li>Professor of Medicine at Stanford University</li>
                </ul>
              </div>

              <div className="mt-8">
                <h2 className="text-2xl font-semibold mb-4">Research Interests</h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Improving long-term kidney transplant outcomes</li>
                  <li>Reducing organ rejection rates</li>
                  <li>Development of artificial kidney technologies</li>
                  <li>Pediatric kidney disease management</li>
                </ul>
              </div>

              <div className="mt-8">
                <h2 className="text-2xl font-semibold mb-4">Contact</h2>
                <p className="text-gray-700">
                  Email: dr.sanchez@kidneyforward.org<br />
                  Office: (555) 123-4567 ext. 200
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RobertSanchez;