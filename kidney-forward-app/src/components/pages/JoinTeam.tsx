import React, { useState } from 'react';

interface VolunteerData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  availability: string;
  interests: string[];
  experience: string;
  whyVolunteer: string;
}

const JoinTeam: React.FC = () => {
  const [volunteerData, setVolunteerData] = useState<VolunteerData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    availability: '',
    interests: [],
    experience: '',
    whyVolunteer: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setVolunteerData({
      ...volunteerData,
      [e.target.name]: e.target.value,
    });
  };

  const handleInterestChange = (interest: string) => {
    const newInterests = volunteerData.interests.includes(interest)
      ? volunteerData.interests.filter(i => i !== interest)
      : [...volunteerData.interests, interest];
    
    setVolunteerData({
      ...volunteerData,
      interests: newInterests,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Volunteer application submitted:', volunteerData);
    alert('Thank you for your interest in volunteering! We will contact you soon.');
  };

  const volunteerOpportunities = [
    'Event Support',
    'Fundraising',
    'Patient Support',
    'Administrative Tasks',
    'Social Media',
    'Community Outreach',
    'Education Programs',
    'Transportation',
  ];

  return (
    <div className="py-12">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-4xl font-bold mb-8">Join the Kidney Forward Team</h1>
        
        <p className="text-lg mb-8">
          Volunteers are the heart of our organization. Join us in making a difference
          in the lives of kidney patients and their families.
        </p>

        <div className="bg-blue-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4">Why Volunteer?</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Make a meaningful impact in your community</li>
            <li>Connect with others who share your passion</li>
            <li>Develop new skills and gain experience</li>
            <li>Flexible opportunities to fit your schedule</li>
            <li>Receive training and support</li>
          </ul>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Personal Information</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  name="firstName"
                  required
                  value={volunteerData.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  name="lastName"
                  required
                  value={volunteerData.lastName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={volunteerData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={volunteerData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Volunteer Preferences</h2>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Availability *
              </label>
              <select
                name="availability"
                required
                value={volunteerData.availability}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select availability</option>
                <option value="weekdays">Weekdays</option>
                <option value="weekends">Weekends</option>
                <option value="evenings">Evenings</option>
                <option value="flexible">Flexible</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Areas of Interest (select all that apply)
              </label>
              <div className="grid grid-cols-2 gap-3">
                {volunteerOpportunities.map((opportunity) => (
                  <label key={opportunity} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={volunteerData.interests.includes(opportunity)}
                      onChange={() => handleInterestChange(opportunity)}
                      className="mr-2"
                    />
                    {opportunity}
                  </label>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Additional Information</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Relevant Experience
                </label>
                <textarea
                  name="experience"
                  rows={4}
                  value={volunteerData.experience}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Tell us about any relevant volunteer or work experience..."
                ></textarea>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Why do you want to volunteer with Kidney Forward? *
                </label>
                <textarea
                  name="whyVolunteer"
                  required
                  rows={4}
                  value={volunteerData.whyVolunteer}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Share your motivation for volunteering..."
                ></textarea>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors font-semibold"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default JoinTeam;