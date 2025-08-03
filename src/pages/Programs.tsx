import React, { useEffect } from "react";
import { Container, Section, Button } from "../components/ui";
import { useHeader } from "../contexts/HeaderContext";

const Programs: React.FC = () => {
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
              Our Programs
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our comprehensive programs designed to connect donors
              with patients and support the kidney transplant community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Donor Registry
              </h3>
              <p className="text-gray-600 mb-6">
                Our comprehensive donor registry program helps match potential
                donors with patients in need of kidney transplants.
              </p>
              <Button
                href="/donors"
                variant="primary"
                className="w-full"
              >
                Join Registry
              </Button>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Patient Support
              </h3>
              <p className="text-gray-600 mb-6">
                Comprehensive support services for patients waiting for kidney
                transplants, including education and resources.
              </p>
              <Button
                href="/patient-support"
                variant="outline"
                className="w-full"
              >
                Learn More
              </Button>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Education
              </h3>
              <p className="text-gray-600 mb-6">
                Educational programs and resources to increase awareness about
                kidney donation and transplantation.
              </p>
              <Button href="/education" variant="outline" className="w-full">
                Explore
              </Button>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Advocacy
              </h3>
              <p className="text-gray-600 mb-6">
                Advocacy initiatives to promote policies that support organ
                donation and transplantation.
              </p>
              <Button href="/advocacy" variant="outline" className="w-full">
                Get Involved
              </Button>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Research
              </h3>
              <p className="text-gray-600 mb-6">
                Supporting research initiatives to improve kidney
                transplantation outcomes and donor matching.
              </p>
              <Button href="/research" variant="outline" className="w-full">
                Learn More
              </Button>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Community
              </h3>
              <p className="text-gray-600 mb-6">
                Building a supportive community for donors, recipients, and
                families affected by kidney disease.
              </p>
              <Button href="/community" variant="outline" className="w-full">
                Join Community
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default Programs;
