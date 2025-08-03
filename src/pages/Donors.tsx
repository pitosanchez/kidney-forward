import React, { useEffect } from "react";
import { Container, Section, Button } from "../components/ui";
import { useHeader } from "../contexts/HeaderContext";

const Donors: React.FC = () => {
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
              For Donors
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn about kidney donation and how you can save a life by
              becoming a donor.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why Become a Donor?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Save a Life</h3>
                    <p className="text-gray-600">
                      Your donation can give someone a second chance at life.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Safe Process
                    </h3>
                    <p className="text-gray-600">
                      Modern surgical techniques make donation safe and
                      minimally invasive.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Full Support
                    </h3>
                    <p className="text-gray-600">
                      We provide comprehensive support throughout your donation
                      journey.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Get Started
              </h2>
              <div className="space-y-4">
                <Button
                  href="/get-involved"
                  variant="primary"
                  className="w-full"
                >
                  Join the Donor Registry
                </Button>
                <Button href="/donors" variant="outline" className="w-full">
                  Learn More About Donation
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

export default Donors;
