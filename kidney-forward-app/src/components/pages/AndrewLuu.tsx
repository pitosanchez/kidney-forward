import React from 'react';

const AndrewLuu: React.FC = () => {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="md:w-1/3">
              <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center text-gray-500">
                Andrew Luu Photo
              </div>
            </div>
            
            <div className="md:w-2/3">
              <h1 className="text-4xl font-bold mb-4">Andrew Luu</h1>
              <p className="text-xl text-gray-600 mb-6">Co-Founder & Executive Director</p>
              
              <div className="space-y-4 text-gray-700">
                <p>
                  Andrew Luu is a passionate advocate for kidney patients and organ donation awareness.
                  After experiencing the kidney transplant journey firsthand with a family member,
                  Andrew co-founded Kidney Forward to ensure no patient goes through this process alone.
                </p>
                
                <p>
                  With over 15 years of experience in healthcare administration and non-profit
                  management, Andrew brings a unique perspective to patient advocacy. He has been
                  instrumental in developing partnerships with major transplant centers across the
                  country and establishing educational programs that have helped thousands of patients.
                </p>
                
                <p>
                  Andrew holds a Master's degree in Public Health from Johns Hopkins University
                  and a Bachelor's degree in Biology from UCLA. He is a frequent speaker at
                  medical conferences and has published numerous articles on organ donation
                  and patient support systems.
                </p>
              </div>

              <div className="mt-8">
                <h2 className="text-2xl font-semibold mb-4">Key Achievements</h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Established partnerships with over 50 transplant centers nationwide</li>
                  <li>Developed educational curriculum reaching 10,000+ patients annually</li>
                  <li>Recipient of the 2022 Healthcare Innovation Award</li>
                  <li>Board member of the National Kidney Foundation</li>
                </ul>
              </div>

              <div className="mt-8">
                <h2 className="text-2xl font-semibold mb-4">Contact</h2>
                <p className="text-gray-700">
                  Email: andrew.luu@kidneyforward.org<br />
                  LinkedIn: /in/andrewluu
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AndrewLuu;