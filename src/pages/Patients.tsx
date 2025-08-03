import React, { useEffect } from "react";
import { Container, Section, Button } from "../components/ui";
import { useHeader } from "../contexts/HeaderContext";

const Patients: React.FC = () => {
  const { setIsTransparent } = useHeader();

  useEffect(() => {
    // Set header to slate gray for non-hero pages
    setIsTransparent(false);
  }, [setIsTransparent]);

  return (
    <div className="pt-20">
      <Section className="py-20">
        <Container>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              For Patients
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              If you're waiting for a kidney transplant, we're here to help you
              find a donor and navigate your journey to better health.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                How We Help Patients
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Donor Matching
                    </h3>
                    <p className="text-gray-600">
                      We help connect you with potential living donors.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Support Services
                    </h3>
                    <p className="text-gray-600">
                      Comprehensive support throughout your transplant journey.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Education & Resources
                    </h3>
                    <p className="text-gray-600">
                      Access to educational materials and transplant
                      information.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Get Help
              </h2>
              <div className="space-y-4">
                <Button
                  href="/get-involved"
                  variant="primary"
                  className="w-full"
                >
                  Register as a Patient
                </Button>
                <Button
                  href="/patients"
                  variant="outline"
                  className="w-full"
                >
                  Patient Resources
                </Button>
                <Button href="/about" variant="outline" className="w-full">
                  Contact Our Team
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default Patients;
