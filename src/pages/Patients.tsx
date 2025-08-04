import React, { useEffect, useState } from "react";
import { Container, Section, Button } from "../components/ui";
import { useHeader } from "../contexts/HeaderContext";
import { getAssetPath } from "../utils/assetPath";

const Patients: React.FC = () => {
  const { setIsTransparent } = useHeader();
  const [activeTab, setActiveTab] = useState('programs');

  useEffect(() => {
    // Set header transparent for hero section
    setIsTransparent(true);
  }, [setIsTransparent]);

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: `url(${getAssetPath("/images/happymom.webp")})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Ocean waves bottom border */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          {/* Wave 1 - Deep blue, bottom layer */}
          <svg
            className="absolute bottom-0 block w-full h-32"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,60 C300,120 600,0 900,60 C1050,90 1150,30 1200,60 L1200,120 L0,120 Z"
              className="fill-blue-600"
              fillOpacity="0.7"
            ></path>
          </svg>
          
          {/* Wave 2 - Medium blue, middle layer */}
          <svg
            className="absolute bottom-0 block w-full h-28"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,80 C240,40 480,100 720,70 C960,40 1080,90 1200,70 L1200,120 L0,120 Z"
              className="fill-blue-500"
              fillOpacity="0.6"
            ></path>
          </svg>
          
          {/* Wave 3 - Light blue, upper layer */}
          <svg
            className="absolute bottom-0 block w-full h-24"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,90 C200,50 400,110 600,80 C800,50 1000,100 1200,80 L1200,120 L0,120 Z"
              className="fill-blue-400"
              fillOpacity="0.5"
            ></path>
          </svg>
          
          {/* Wave 4 - Cyan, top layer */}
          <svg
            className="absolute bottom-0 block w-full h-20"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="fill-cyan-300"
              fillOpacity="0.4"
            ></path>
          </svg>
          
          {/* Final white wave - solid top layer */}
          <svg
            className="relative block w-full h-16"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,100 C150,80 350,120 500,100 C650,80 850,120 1000,100 C1100,90 1150,95 1200,100 L1200,120 L0,120 Z"
              className="fill-white"
            ></path>
          </svg>
        </div>

        {/* Content */}
        <Container className="relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">
            Patients
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto drop-shadow-md">
            For patients who need help finding living donors
          </p>
        </Container>
      </section>

      {/* Main Content Section */}
      <Section className="py-16 sm:py-20 bg-gray-50">
        <Container>
          {/* Introduction Text */}
          <div className="text-center mb-16">
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Living with kidney disease is not fun or easy. Kidney Forward helps ease the burden by offering support programs and helps patients search for living donors.
            </p>
          </div>

          {/* Navigation Tabs */}
          <div className="flex justify-center mb-12">
            <div className="flex bg-white rounded-lg shadow-lg overflow-hidden">
              <button
                onClick={() => setActiveTab('programs')}
                className={`px-8 py-4 font-semibold text-lg transition-all duration-300 ${
                  activeTab === 'programs'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                Programs
              </button>
              <button
                onClick={() => setActiveTab('education')}
                className={`px-8 py-4 font-semibold text-lg transition-all duration-300 ${
                  activeTab === 'education'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                Education
              </button>
              <button
                onClick={() => setActiveTab('eligibility')}
                className={`px-8 py-4 font-semibold text-lg transition-all duration-300 ${
                  activeTab === 'eligibility'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                Eligibility
              </button>
            </div>
          </div>

          {/* Tab Content */}
          {activeTab === 'programs' && (
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
                Our Programs
              </h2>
              
              {/* Jentosy Patient Support Program Card */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-12">
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Image */}
                  <div className="aspect-square md:aspect-auto">
                    <img
                      src={getAssetPath("/images/jentosy-support.webp")}
                      alt="Jentosy Patient Support Program"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                      JENTOSY PATIENT SUPPORT PROGRAM
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed mb-8">
                      The Jentosy Patient Support Program is designed for patients living 
                      with kidney disease. This program was designed to be a supportive 
                      environment that helps patients navigate kidney failure and how to 
                      find a living donor. Asking for help can be daunting, especially for 
                      what feels like a big request. Our team has been through it and will 
                      provide a range of methods to approach potential donors.
                    </p>
                    <Button
                      href="/get-involved"
                      variant="outline"
                      className="w-fit border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 text-lg font-semibold"
                    >
                      LEARN MORE →
                    </Button>
                  </div>
                </div>
              </div>

              {/* Bobby Lynn Navigator Program Card */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Content */}
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                      BOBBY LYNN NAVIGATOR PROGRAM
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed mb-8">
                      The Bobby Lynn Navigator program aims to educate a patient's support 
                      system and network on how to best support their friend or family 
                      member. This program also empowers a patient's support network to 
                      search for a living donor on the patient's behalf. You'll learn what 
                      makes a good donor and how to ask.
                    </p>
                    <Button
                      href="/get-involved"
                      variant="outline"
                      className="w-fit border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 text-lg font-semibold"
                    >
                      LEARN MORE →
                    </Button>
                  </div>
                  
                  {/* Image */}
                  <div className="aspect-square md:aspect-auto">
                    <img
                      src={getAssetPath("/images/bobby-lynn.webp")}
                      alt="Bobby Lynn Navigator Program"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'education' && (
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Patient Education
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
                Access comprehensive educational resources to help you understand kidney disease, treatment options, and the transplant process.
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Understanding Kidney Disease</h3>
                  <p className="text-gray-600 mb-4">Learn about different types of kidney disease and their progression.</p>
                  <Button variant="outline" className="w-full">Learn More</Button>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Treatment Options</h3>
                  <p className="text-gray-600 mb-4">Explore various treatment options including dialysis and transplantation.</p>
                  <Button variant="outline" className="w-full">Learn More</Button>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Living Donation</h3>
                  <p className="text-gray-600 mb-4">Understand the benefits and process of living donor transplantation.</p>
                  <Button variant="outline" className="w-full">Learn More</Button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'eligibility' && (
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Program Eligibility
              </h2>
              <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
                <p className="text-lg text-gray-600 mb-8">
                  Our programs are designed to help patients at various stages of kidney disease. Here's how to determine if you're eligible:
                </p>
                <div className="space-y-6 text-left">
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Stage 4-5 Chronic Kidney Disease</h3>
                      <p className="text-gray-600">Patients with advanced kidney disease preparing for or on dialysis.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Transplant Candidates</h3>
                      <p className="text-gray-600">Patients who have been evaluated and approved for kidney transplantation.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Support System</h3>
                      <p className="text-gray-600">Patients with family or friends who can provide support throughout the process.</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <Button variant="primary" size="lg" href="/get-involved">
                    Check Your Eligibility
                  </Button>
                </div>
              </div>
            </div>
          )}
        </Container>
      </Section>
    </div>
  );
};

export default Patients;
