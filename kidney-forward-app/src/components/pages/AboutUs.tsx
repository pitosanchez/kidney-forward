import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">About Kidney Forward</h1>
        
        <div className="prose max-w-none">
          <p className="text-lg mb-6">
            Kidney Forward is a dedicated non-profit organization committed to supporting kidney patients
            and promoting organ donation awareness. Founded with the vision of creating a world where
            no one suffers from kidney disease alone, we provide comprehensive resources, education,
            and support to patients, donors, and healthcare professionals.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Our Mission</h2>
          <p className="mb-6">
            To empower kidney patients through education, support, and advocacy while promoting
            organ donation awareness and facilitating connections between patients and potential donors.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Our Vision</h2>
          <p className="mb-6">
            A world where every kidney patient has access to the resources, support, and treatment
            they need to live healthy, fulfilling lives.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">What We Do</h2>
          <ul className="list-disc pl-6 mb-6">
            <li>Provide educational resources for kidney patients and their families</li>
            <li>Facilitate donor registration and matching</li>
            <li>Offer support groups and counseling services</li>
            <li>Partner with transplant centers nationwide</li>
            <li>Advocate for kidney disease awareness and research</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Our Team</h2>
          <p className="mb-6">
            Our dedicated team includes medical professionals, transplant coordinators, patient advocates,
            and volunteers who are passionate about making a difference in the lives of kidney patients.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;