import React, { useEffect } from "react";
import { Container, Section } from "../components/ui";
import { useHeader } from "../contexts/HeaderContext";

const About: React.FC = () => {
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
              About Kidney Forward
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are dedicated to connecting kidney donors with patients in
              need, making a difference one kidney at a time.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600">
                Kidney Forward's mission is to eradicate the kidney transplant
                waitlist by increasing the number of living donors until
                healthcare technology can take over.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600">
                A world where no one dies waiting for a kidney transplant, and
                every person has access to life-saving organ donation.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Values
              </h3>
              <p className="text-gray-600">
                Compassion, transparency, innovation, and unwavering commitment
                to saving lives through kidney donation.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* What We Do Section */}
      <Section className="py-20 bg-gray-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What We Do
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Kidney Forward partners with patients, donors and healthcare
              professionals to ensure the best outcomes throughout the kidney
              transplant journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                We empower patients
              </h3>
              <p className="text-gray-600">
                to engage with potential living donors with our education and
                support programs.
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                We enable support networks
              </h3>
              <p className="text-gray-600">
                to better advocate on the patient's behalf and to help the
                patient find a living donor.
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                We educate doctors
              </h3>
              <p className="text-gray-600">
                on how to best support their patients during the search for a
                living donor.
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                We guide potential donors
              </h3>
              <p className="text-gray-600">
                through the complex, involved and intimidating process of living
                organ donation.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Programs Section */}
      <Section className="py-20">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Programs
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Bobby Lynn Navigator Program
              </h3>
              <p className="text-gray-600 mb-6">
                Our flagship program that educates friends and family on kidney
                health and ways to support loved ones in need of a kidney
                transplant.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Guided Living Donor Program
              </h3>
              <p className="text-gray-600 mb-6">
                Comprehensive support for potential living donors throughout the
                donation process, making it transparent and straightforward.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Jentosy Patient Support Program
              </h3>
              <p className="text-gray-600 mb-6">
                Support services for patients waiting for kidney transplants,
                including education, resources, and community building.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Statistics Section */}
      <Section className="py-20 bg-gray-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              The Impact of Kidney Disease
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-forest-600 mb-2">
                37M+
              </div>
              <div className="text-gray-600 font-medium">
                People have Kidney Impairments
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-forest-600 mb-2">
                100K+
              </div>
              <div className="text-gray-600 font-medium">
                People waiting for a kidney
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-forest-600 mb-2">12</div>
              <div className="text-gray-600 font-medium">
                People die per day waiting
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="py-20">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Join Our Mission
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              We would love for you to join us in this journey. Please sign up
              for updates!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/get-involved"
                className="bg-forest-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-forest-700 transition-colors"
              >
                Get Involved
              </a>
              <a
                href="/contact"
                className="border-2 border-forest-600 text-forest-600 px-8 py-3 rounded-full font-semibold hover:bg-forest-600 hover:text-white transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default About;
