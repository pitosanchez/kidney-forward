import React, { useEffect } from "react";
import { Container, Section, Button } from "../components/ui";
import { useHeader } from "../contexts/HeaderContext";

const GetInvolved: React.FC = () => {
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
              Get Involved
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              There are many ways to support our mission of connecting kidney
              donors with patients in need.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Become a Donor
              </h3>
              <p className="text-gray-600 mb-6">
                Consider becoming a living kidney donor and save a life. Learn
                about the process and how we support donors.
              </p>
              <Button
                href="/donor-registry"
                variant="primary"
                className="w-full"
              >
                Join Registry
              </Button>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Volunteer
              </h3>
              <p className="text-gray-600 mb-6">
                Help us spread awareness and support our mission through
                volunteering opportunities.
              </p>
              <Button href="/volunteer" variant="outline" className="w-full">
                Volunteer
              </Button>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Donate</h3>
              <p className="text-gray-600 mb-6">
                Support our programs and initiatives through financial
                contributions to help more patients.
              </p>
              <Button href="/donate" variant="outline" className="w-full">
                Donate
              </Button>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Spread Awareness
              </h3>
              <p className="text-gray-600 mb-6">
                Help educate others about kidney donation and the importance of
                organ transplantation.
              </p>
              <Button href="/awareness" variant="outline" className="w-full">
                Learn More
              </Button>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Partner With Us
              </h3>
              <p className="text-gray-600 mb-6">
                Organizations and businesses can partner with us to support
                kidney donation initiatives.
              </p>
              <Button href="/partnerships" variant="outline" className="w-full">
                Partner
              </Button>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Events</h3>
              <p className="text-gray-600 mb-6">
                Attend our events and fundraisers to support our mission and
                connect with our community.
              </p>
              <Button href="/events" variant="outline" className="w-full">
                View Events
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default GetInvolved;
