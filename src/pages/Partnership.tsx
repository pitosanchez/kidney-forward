import React, { useEffect } from "react";
import { useHeader } from "../contexts/HeaderContext";
import { Button, Section, Container } from "../components/ui";
import { getAssetPath } from "../utils/assetPath";

const Partnership: React.FC = () => {
  const { setIsTransparent } = useHeader();

  useEffect(() => {
    setIsTransparent(false);
    return () => setIsTransparent(false);
  }, [setIsTransparent]);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <Section className="py-16 sm:py-20 bg-gradient-to-br from-primary-600 to-secondary-600">
        <Container>
          <div className="text-center text-white">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Partner with Kidney Forward
            </h1>
            <p className="text-xl sm:text-2xl opacity-90 max-w-3xl mx-auto">
              Join a nationwide network of medical institutions transforming kidney transplant care
            </p>
          </div>
        </Container>
      </Section>

      {/* Benefits Section */}
      <Section className="py-16 sm:py-20">
        <Container>
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Why Partner with Us?
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive support for your transplant program
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Evidence-Based Protocols */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Evidence-Based Protocols
              </h3>
              <p className="text-slate-600">
                Access proven protocols that have increased living donation rates by 40% at partner institutions.
              </p>
            </div>

            {/* Training & Education */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all">
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Training & Education
              </h3>
              <p className="text-slate-600">
                Comprehensive training programs for your entire transplant team, from coordinators to surgeons.
              </p>
            </div>

            {/* Technology Platform */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Technology Platform
              </h3>
              <p className="text-slate-600">
                State-of-the-art donor matching and management system integrated with your existing EMR.
              </p>
            </div>

            {/* Marketing Support */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Marketing Support
              </h3>
              <p className="text-slate-600">
                Professional materials and campaigns to raise awareness and attract potential living donors.
              </p>
            </div>

            {/* Data Analytics */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all">
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Data Analytics
              </h3>
              <p className="text-slate-600">
                Real-time dashboards to track program performance and identify areas for improvement.
              </p>
            </div>

            {/* 24/7 Support */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                24/7 Support
              </h3>
              <p className="text-slate-600">
                Round-the-clock support for urgent cases and technical assistance whenever you need it.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Success Stories */}
      <Section className="py-16 sm:py-20 bg-gray-50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Success Stories from Our Partners
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                <img 
                  src={getAssetPath("/images/logo.png")} 
                  alt="Hospital Logo" 
                  className="w-16 h-16 object-contain mr-4"
                />
                <div>
                  <h3 className="font-bold text-lg">Cedar Sinai Medical Center</h3>
                  <p className="text-slate-600">Los Angeles, CA</p>
                </div>
              </div>
              <p className="text-slate-700 mb-4">
                "Since partnering with Kidney Forward, our living donor program has grown by 60%. Their protocols and support have been invaluable."
              </p>
              <div className="text-primary-600 font-semibold">
                60% increase in living donors
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                <img 
                  src={getAssetPath("/images/logo.png")} 
                  alt="Hospital Logo" 
                  className="w-16 h-16 object-contain mr-4"
                />
                <div>
                  <h3 className="font-bold text-lg">Johns Hopkins Hospital</h3>
                  <p className="text-slate-600">Baltimore, MD</p>
                </div>
              </div>
              <p className="text-slate-700 mb-4">
                "The training programs and technology platform have transformed how we approach living donation. Highly recommend."
              </p>
              <div className="text-primary-600 font-semibold">
                45% reduction in wait times
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Integration Process */}
      <Section className="py-16 sm:py-20">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Simple Integration Process
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
              Get your program up and running in just 30 days
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {/* Step 1 */}
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  1
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Initial Consultation</h3>
                  <p className="text-slate-600">
                    Meet with our team to assess your current program and identify opportunities for growth.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  2
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Customized Implementation</h3>
                  <p className="text-slate-600">
                    We'll create a tailored plan that fits your institution's unique needs and goals.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  3
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Training & Launch</h3>
                  <p className="text-slate-600">
                    Comprehensive training for your team and a coordinated launch of your enhanced program.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  4
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Ongoing Support</h3>
                  <p className="text-slate-600">
                    Continuous monitoring, optimization, and support to ensure long-term success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="py-16 sm:py-20 bg-gradient-to-r from-primary-600 to-secondary-600">
        <Container>
          <div className="text-center text-white">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Transplant Program?
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Join over 200 medical institutions nationwide in our mission to eliminate the kidney transplant waitlist.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                className="bg-white text-primary-600 hover:bg-gray-100"
              >
                Schedule a Demo
              </Button>
              <Button
                href="/resources"
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary-600"
              >
                Download Resources
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default Partnership;