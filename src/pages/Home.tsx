import React, { useEffect, useRef } from "react";
import { useHeader } from "../contexts/HeaderContext";
import { Button, Section, Container } from "../components/ui";
import OptimizedHero from "../components/OptimizedHero";
import LazyImage from "../components/LazyImage";
import { getAssetPath } from "../utils/assetPath";
import { usePerformanceOptimization } from "../hooks/usePerformanceOptimization";

const Home: React.FC = () => {
  const { setIsTransparent } = useHeader();
  const statisticsRef = useRef<HTMLDivElement>(null);
  usePerformanceOptimization();


  useEffect(() => {
    // Set header transparent for hero section
    setIsTransparent(true);

    // Statistics animation is handled by initNumberAnimation in App.tsx

    // Cleanup function to reset header when component unmounts
    return () => {
      setIsTransparent(false);
    };
  }, [setIsTransparent]);

  return (
    <div>
      <OptimizedHero />

      {/* Dedicated Video Section */}
      <Section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-primary-50">
        <Container>
          <div className="text-center mb-12 sm:mb-16">
            <div className="text-primary-600 text-sm font-semibold uppercase tracking-wide mb-4">
              OUR STORY
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              It Only Takes One
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Discover how one person's decision to become a living donor can
              transform countless lives. Our mission is simple yet profound: to
              eliminate the kidney transplant waitlist through education,
              advocacy, and community support.
            </p>
          </div>

          {/* Video Container */}
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl drop-shadow-2xl transform hover:scale-105 transition-all duration-500 border border-gray-100" style={{
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
            }}>
              <div className="aspect-video relative">
                <iframe
                  src="https://www.youtube.com/embed/DVR1E4DgWJY?rel=0&modestbranding=1"
                  title="Kidney Forward: It Only Takes One"
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-6 sm:p-8 bg-gradient-to-r from-gray-900 to-black text-center">
                <h3 className="text-white font-bold text-xl sm:text-2xl mb-4">
                  Kidney Forward: It Only Takes One
                </h3>
                <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
                  This powerful story showcases the incredible impact of living
                  kidney donation. Through real stories and expert insights, we
                  explore how one person's selfless decision can save a life and
                  inspire others to join our mission of eliminating the
                  transplant waitlist.
                </p>
                <div className="flex flex-col sm:flex-row justify-center mt-6 space-y-2 sm:space-y-0 sm:space-x-4">
                  <div className="flex items-center justify-center sm:justify-start space-x-2 text-gray-400">
                    <div className="w-2 h-2 bg-accent-400 rounded-full"></div>
                    <span className="text-sm">Living Donation</span>
                  </div>
                  <div className="flex items-center justify-center sm:justify-start space-x-2 text-gray-400">
                    <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
                    <span className="text-sm">Community Impact</span>
                  </div>
                  <div className="flex items-center justify-center sm:justify-start space-x-2 text-gray-400">
                    <div className="w-2 h-2 bg-secondary-400 rounded-full"></div>
                    <span className="text-sm">Hope & Healing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-8 sm:mt-12">
            <p className="text-slate-600 text-base sm:text-lg mb-6 max-w-2xl mx-auto">
              Ready to make a difference? Join thousands of others who are
              helping to eliminate the kidney transplant waitlist.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="/get-involved"
                variant="primary"
                size="lg"
                className="bg-primary-500 hover:bg-primary-600 text-white font-semibold"
              >
                Get Involved Today
              </Button>
              <Button
                href="/programs"
                variant="outline"
                size="lg"
                className="border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white font-semibold"
              >
                Explore Our Programs
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Kidney Forward Programs Section */}
      <Section className="py-16 sm:py-20 bg-gray-50">
        <Container>
          <div className="text-center mb-12 sm:mb-16">
            <div className="text-primary-600 text-sm font-semibold uppercase tracking-wide mb-4">
              JOIN OUR COMMUNITY
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Kidney Forward Programs
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
              Our comprehensive programs support patients, donors, and families
              throughout the kidney transplant journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* For Patients */}
            <div className="bg-white rounded-lg shadow-2xl drop-shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-300 h-full flex flex-col" style={{
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
            }}>
              <div className="aspect-square overflow-hidden">
                <LazyImage
                  src={getAssetPath("/images/olderwoman.webp")}
                  alt="Nurse helping patient"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 sm:p-8 flex-1 flex flex-col">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                  For Patients
                </h3>
                <p className="text-slate-600 mb-6 flex-1 text-sm sm:text-base">
                  Living with kidney disease is difficult. Our programs provide
                  community and support and enable patients to find living
                  donors. Asking for help brings about complex emotions such as
                  stress and awkwardness and our programs help patients navigate
                  the living donation search process.
                </p>
                <Button
                  href="/patients"
                  variant="outline"
                  className="w-full border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white mt-auto"
                >
                  LEARN MORE →
                </Button>
              </div>
            </div>

            {/* For Potential Donors */}
            <div className="bg-white rounded-lg shadow-2xl drop-shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-300 h-full flex flex-col" style={{
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
            }}>
              <div className="aspect-square overflow-hidden">
                <LazyImage
                  src={getAssetPath("/images/momdaughter.webp")}
                  alt="Mother and daughter"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 sm:p-8 flex-1 flex flex-col">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                  For Potential Donors
                </h3>
                <p className="text-slate-600 mb-6 flex-1 text-sm sm:text-base">
                  Donating a kidney is one of the most noble acts one can do.
                  Our donor programs guide potential living donors through the
                  donation process. We make the process transparent and
                  straightforward and serve as your guide throughout.
                </p>
                <Button
                  href="/donors"
                  variant="outline"
                  className="w-full border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white mt-auto"
                >
                  LEARN MORE →
                </Button>
              </div>
            </div>

            {/* For Friends and Family */}
            <div className="bg-white rounded-lg shadow-2xl drop-shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-300 h-full flex flex-col md:col-span-2 lg:col-span-1" style={{
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
            }}>
              <div className="aspect-square overflow-hidden">
                <LazyImage
                  src={getAssetPath("/images/sponsors.webp")}
                  alt="Friends and family support"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 sm:p-8 flex-1 flex flex-col">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                  For Friends and Family
                </h3>
                <p className="text-slate-600 mb-6 flex-1 text-sm sm:text-base">
                  Watching a loved one or a friend struggle through kidney
                  failure can feel overwhelming. Our Bobby Lynn Navigator
                  programs educates you on kidney health and ways you can
                  support your friend or relative. The program also empowers you
                  to help in the search for a living donor.
                </p>
                <Button
                  href="/get-involved"
                  variant="outline"
                  className="w-full border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white mt-auto"
                >
                  LEARN MORE →
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Medical Institutions Section */}
      <Section className="py-16 sm:py-20 bg-gradient-to-br from-slate-50 to-primary-50">
        <Container>
          <div className="text-center mb-12 sm:mb-16">
            <div className="text-secondary-600 text-sm font-semibold uppercase tracking-wide mb-4">
              FOR HEALTHCARE PROVIDERS
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 sm:mb-6">
              Partner with Kidney Forward
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
              Join a nationwide network of medical institutions working together to transform kidney transplant outcomes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
            {/* Professional Resources */}
            <div className="bg-white rounded-lg shadow-2xl p-6 sm:p-8 hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">
                Professional Resources
              </h3>
              <p className="text-slate-600 mb-6">
                Access evidence-based protocols, patient education materials, and best practices for living donor programs.
              </p>
              <Button
                href="/resources"
                variant="outline"
                className="w-full"
              >
                Access Resources
              </Button>
            </div>

            {/* Data & Analytics */}
            <div className="bg-white rounded-lg shadow-2xl p-6 sm:p-8 hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">
                Impact Data
              </h3>
              <p className="text-slate-600 mb-6">
                Track outcomes, measure program effectiveness, and access real-time data on donation impact.
              </p>
              <Button
                href="/data"
                variant="outline"
                className="w-full"
              >
                View Analytics
              </Button>
            </div>

            {/* Partnership Opportunities */}
            <div className="bg-white rounded-lg shadow-2xl p-6 sm:p-8 hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">
                Partner Network
              </h3>
              <p className="text-slate-600 mb-6">
                Collaborate with leading transplant centers and share best practices across institutions.
              </p>
              <Button
                href="/partnership"
                variant="outline"
                className="w-full"
              >
                Join Network
              </Button>
            </div>
          </div>

          {/* CTA for Medical Institutions */}
          <div className="bg-slate-800 rounded-2xl p-8 sm:p-12 text-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Ready to Transform Transplant Care?
            </h3>
            <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
              Join over 200 medical institutions nationwide using Kidney Forward's programs to improve patient outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="/partnership"
                variant="primary"
                size="lg"
                className="bg-accent-400 hover:bg-accent-500"
              >
                Schedule a Demo
              </Button>
              <Button
                href="/contact"
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-slate-800"
              >
                Contact Our Team
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Our Mission */}
      <section className="py-16 sm:py-20 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-300 text-center mb-12 sm:mb-16">
              OUR MISSION
            </h2>
            <div className="flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-16">
              <div className="flex-shrink-0">
                <LazyImage
                  src={getAssetPath("/images/kidneyoutlined.webp")}
                  alt="Kidney Forward Mission"
                  className="w-32 h-32 sm:w-40 sm:h-40 object-contain"
                />
              </div>
              <div className="flex-1 max-w-2xl text-center lg:text-left">
                <p className="text-white text-lg sm:text-xl lg:text-2xl leading-relaxed">
                  Kidney Forward's mission is to eradicate the kidney transplant
                  waitlist by increasing the number of living donors until
                  healthcare technology can take over.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Stories Section */}
      <Section className="py-16 sm:py-20 bg-white">
        <Container>
          <div className="text-center mb-12 sm:mb-16">
            <div className="text-accent-600 text-sm font-semibold uppercase tracking-wide mb-4">
              STORIES OF HOPE
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 sm:mb-6">
              Lives Transformed Through Living Donation
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
              Real stories from patients and donors who have experienced the life-changing impact of kidney donation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Story 1 */}
            <div className="bg-gradient-to-br from-primary-50 to-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="aspect-video bg-slate-200 relative overflow-hidden">
                <LazyImage
                  src={getAssetPath("/images/happymom.webp")}
                  alt="Sarah's Story"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm font-semibold">Recipient Story</p>
                  <p className="text-xs opacity-90">2 years post-transplant</p>
                </div>
              </div>
              <div className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                  Sarah's Second Chance
                </h3>
                <p className="text-slate-600 mb-4">
                  "After 4 years on dialysis, I had lost hope. Then my neighbor offered to be tested. Today, I'm watching my grandchildren grow up - something I never thought I'd see."
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-accent-600 font-semibold">Wait time: 4 years</span>
                  <Button
                    href="/stories/sarah"
                    variant="ghost"
                    size="sm"
                  >
                    Read More →
                  </Button>
                </div>
              </div>
            </div>

            {/* Story 2 */}
            <div className="bg-gradient-to-br from-secondary-50 to-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="aspect-video bg-slate-200 relative overflow-hidden">
                <LazyImage
                  src={getAssetPath("/images/momdaughter.webp")}
                  alt="Maria and Ana's Story"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm font-semibold">Donor & Recipient</p>
                  <p className="text-xs opacity-90">Mother & Daughter</p>
                </div>
              </div>
              <div className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                  A Mother's Gift
                </h3>
                <p className="text-slate-600 mb-4">
                  "When my daughter needed a kidney, there was no question. Seeing her healthy and thriving is worth everything. We both have our lives back."
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-secondary-600 font-semibold">Living donor</span>
                  <Button
                    href="/stories/maria-ana"
                    variant="ghost"
                    size="sm"
                  >
                    Read More →
                  </Button>
                </div>
              </div>
            </div>

            {/* Story 3 */}
            <div className="bg-gradient-to-br from-accent-50 to-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="aspect-video bg-slate-200 relative overflow-hidden">
                <LazyImage
                  src={getAssetPath("/images/womanlaugh.webp")}
                  alt="James's Story"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm font-semibold">Altruistic Donor</p>
                  <p className="text-xs opacity-90">Saved 3 lives</p>
                </div>
              </div>
              <div className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                  The Chain of Life
                </h3>
                <p className="text-slate-600 mb-4">
                  "I donated to a stranger and started a chain that saved 3 lives. Knowing I could help when someone needed it most is the greatest feeling."
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-primary-600 font-semibold">Chain donation</span>
                  <Button
                    href="/stories/james"
                    variant="ghost"
                    size="sm"
                  >
                    Read More →
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Statistics Banner */}
          <div ref={statisticsRef} className="mt-12 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 sm:p-12 text-white text-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <p className="text-4xl sm:text-5xl font-bold mb-2">
                  <span className="animate-number" data-target="90000">0</span>+
                </p>
                <p className="text-lg opacity-90">Patients Waiting</p>
              </div>
              <div>
                <p className="text-4xl sm:text-5xl font-bold mb-2">
                  <span className="animate-number" data-target="17">0</span>
                </p>
                <p className="text-lg opacity-90">Die Daily Waiting</p>
              </div>
              <div>
                <p className="text-4xl sm:text-5xl font-bold mb-2">
                  <span className="animate-number" data-target="1">0</span>
                </p>
                <p className="text-lg opacity-90">Donor Can Save a Life</p>
              </div>
            </div>
            <div className="mt-8">
              <Button
                href="/stories"
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary-600"
              >
                Read More Stories of Hope
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* How You Can Help */}
      <section
        className="py-16 sm:py-20 relative"
        style={{
          backgroundImage: import.meta.env.BASE_URL + "/images/handsc.webp",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h3 className="text-blue-400 text-sm font-semibold uppercase tracking-wide mb-2">
              GET INVOLVED
            </h3>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              How you can help
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {/* Join Living Donor Database */}
            <div className="bg-blue-600 rounded-lg p-6 sm:p-8 shadow-2xl drop-shadow-2xl transform hover:scale-105 transition-all duration-300 h-full flex flex-col" style={{
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
            }}>
              <h3 className="text-white text-lg sm:text-xl font-bold mb-4 leading-tight">
                Join Living Donor Database
              </h3>
              <p className="text-white/90 mb-6 flex-1 text-sm sm:text-base">
                Becoming a living kidney donor is the most direct way to save a
                kidney patient. By donating a kidney, you are giving another
                person renewed life.
              </p>
              <div className="mt-auto">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <Button
                  href="/donors"
                  variant="outline"
                  className="w-full border-white text-white hover:bg-white hover:text-blue-600"
                >
                  Join Registry
                </Button>
              </div>
            </div>

            {/* Become a Volunteer */}
            <div className="bg-green-500 rounded-lg p-6 sm:p-8 shadow-2xl drop-shadow-2xl transform hover:scale-105 transition-all duration-300 h-full flex flex-col" style={{
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
            }}>
              <h3 className="text-white text-lg sm:text-xl font-bold mb-4 leading-tight">
                Become a Volunteer
              </h3>
              <p className="text-white/90 mb-6 flex-1 text-sm sm:text-base">
                There are many ways to get involved with Kidney Forward's
                mission. We are looking for help in a range of roles. Please
                contact us for more information.
              </p>
              <div className="mt-auto">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                  </svg>
                </div>
                <Button
                  href="/get-involved"
                  variant="outline"
                  className="w-full border-white text-white hover:bg-white hover:text-green-500"
                >
                  Volunteer
                </Button>
              </div>
            </div>

            {/* Contribute Financially */}
            <div className="bg-gray-700 rounded-lg p-6 sm:p-8 shadow-2xl drop-shadow-2xl transform hover:scale-105 transition-all duration-300 h-full flex flex-col" style={{
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
            }}>
              <h3 className="text-white text-lg sm:text-xl font-bold mb-4 leading-tight">
                Contribute Financially
              </h3>
              <p className="text-white/90 mb-6 flex-1 text-sm sm:text-base">
                Patients need your help. Your gifts will help support our life
                saving programs.
              </p>
              <div className="mt-auto">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" />
                  </svg>
                </div>
                <Button
                  href="/get-involved"
                  variant="outline"
                  className="w-full border-white text-white hover:bg-white hover:text-gray-700"
                >
                  Donate
                </Button>
              </div>
            </div>

            {/* Refer a Patient */}
            <div className="bg-green-500 rounded-lg p-6 sm:p-8 shadow-2xl drop-shadow-2xl transform hover:scale-105 transition-all duration-300 h-full flex flex-col" style={{
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
            }}>
              <h3 className="text-white text-lg sm:text-xl font-bold mb-4 leading-tight">
                Refer a Patient
              </h3>
              <p className="text-white/90 mb-6 flex-1 text-sm sm:text-base">
                If you are a healthcare provider, please encourage your patients
                to join Kidney Forward. You can also fill out a patient referral
                form.
              </p>
              <div className="mt-auto">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <Button
                  href="/about"
                  variant="outline"
                  className="w-full border-white text-white hover:bg-white hover:text-green-500"
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section ref={statisticsRef} className="py-16 sm:py-20 bg-black">
        <Container>
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-blue-300 text-lg sm:text-xl font-semibold mb-4">
              THE FIGHT AGAINST KIDNEY DISEASE
            </h2>
            <h3 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold">
              Kidney Disease is a Top 10 Killer in the US
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 max-w-5xl mx-auto">
            {/* 37 Million */}
            <div className="text-center">
              <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-green-400 mb-4 flex flex-col sm:flex-row justify-center items-center">
                <span
                  className="animate-number w-16 sm:w-20 text-right"
                  data-target="37"
                >
                  0
                </span>
                <span className="ml-0 sm:ml-2 text-lg sm:text-xl">million</span>
              </div>
              <p className="text-white text-base sm:text-lg">
                People have Kidney Impairments
              </p>
            </div>

            {/* 98,000 */}
            <div className="text-center">
              <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
                <span className="animate-number" data-target="98">
                  0
                </span>
                ,000
              </div>
              <p className="text-white text-base sm:text-lg">
                People waiting for a kidney
              </p>
            </div>

            {/* 18 */}
            <div className="text-center">
              <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-blue-300 mb-4">
                <span className="animate-number" data-target="18">
                  0
                </span>
              </div>
              <p className="text-white text-base sm:text-lg">
                People die per day waiting
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Impact Visualization Section */}
      <Section className="py-16 sm:py-20 bg-gradient-to-b from-white to-gray-50">
        <Container>
          <div className="text-center mb-12 sm:mb-16">
            <div className="text-primary-600 text-sm font-semibold uppercase tracking-wide mb-4">
              OUR IMPACT
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 sm:mb-6">
              Making a Difference Together
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
              Through our programs and partnerships, we're transforming the landscape of kidney donation
            </p>
          </div>

          {/* Impact Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Living Donor Success Rate */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Living Donor Success Rate</h3>
              <div className="relative h-64">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-6xl font-bold text-primary-600">95%</p>
                    <p className="text-lg text-slate-600 mt-2">5-Year Survival Rate</p>
                  </div>
                </div>
                <svg className="absolute inset-0 w-full h-full">
                  <circle
                    cx="50%"
                    cy="50%"
                    r="80"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="20"
                  />
                  <circle
                    cx="50%"
                    cy="50%"
                    r="80"
                    fill="none"
                    stroke="#2480dd"
                    strokeWidth="20"
                    strokeDasharray={`${2 * Math.PI * 80 * 0.95} ${2 * Math.PI * 80}`}
                    strokeLinecap="round"
                    transform="rotate(-90 128 128)"
                    className="transition-all duration-1000"
                  />
                </svg>
              </div>
              <p className="text-slate-600 mt-4">
                Living donor kidney transplants have the highest success rates, giving recipients the best chance at a normal life.
              </p>
            </div>

            {/* Wait Time Comparison */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Average Wait Time</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-700 font-medium">Deceased Donor</span>
                    <span className="text-slate-900 font-bold">3-5 Years</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-4">
                    <div className="bg-red-500 h-4 rounded-full" style={{ width: '100%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-700 font-medium">Living Donor</span>
                    <span className="text-slate-900 font-bold">3-6 Months</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-4">
                    <div className="bg-accent-400 h-4 rounded-full" style={{ width: '10%' }}></div>
                  </div>
                </div>
              </div>
              <p className="text-slate-600 mt-6">
                Living donation dramatically reduces wait times, getting patients back to their lives faster.
              </p>
            </div>
          </div>

          {/* Program Impact Numbers */}
          <div className="bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-500 rounded-2xl p-8 sm:p-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-white text-center">
              <div>
                <p className="text-4xl sm:text-5xl font-bold mb-2">
                  <span className="animate-number" data-target="2500">0</span>+
                </p>
                <p className="text-lg opacity-90">Lives Saved</p>
              </div>
              <div>
                <p className="text-4xl sm:text-5xl font-bold mb-2">
                  <span className="animate-number" data-target="200">0</span>+
                </p>
                <p className="text-lg opacity-90">Partner Hospitals</p>
              </div>
              <div>
                <p className="text-4xl sm:text-5xl font-bold mb-2">
                  <span className="animate-number" data-target="15000">0</span>+
                </p>
                <p className="text-lg opacity-90">Donors Registered</p>
              </div>
              <div>
                <p className="text-4xl sm:text-5xl font-bold mb-2">
                  <span className="animate-number" data-target="50">0</span>
                </p>
                <p className="text-lg opacity-90">States Reached</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Be A Hero Section */}
      <section
        className="py-16 sm:py-20 relative overflow-hidden"
        style={{
          backgroundImage: `url(${getAssetPath("/images/womanlaugh.webp")})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Overlay for better readability */}
        <div className="absolute inset-0 bg-black/30"></div>

        <Container className="relative z-10">
          <div className="flex justify-center">
            {/* Glass-morphism 3D Card */}
            <div className="max-w-2xl mx-auto">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl drop-shadow-2xl border border-white/20 transform hover:scale-105 transition-all duration-500 relative overflow-hidden" style={{
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.4), 0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)'
              }}>
                {/* 3D Effect Layers */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl sm:rounded-3xl"></div>
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

                {/* Content */}
                <div className="relative z-10 text-center">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-white drop-shadow-lg">
                    Be A Hero
                  </h2>
                  <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-white/90 drop-shadow-lg">
                    You could Save a Life
                  </h3>
                  <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-white/95 leading-relaxed drop-shadow-md">
                    Patients need help. Most kidney patients are destitute
                    because they often don't have the energy to work and their
                    medical bills have added up. Every dollar you give will go
                    toward helping patients by supporting our programs that are
                    designed to increase the living donor pool.
                  </p>
                  <Button
                    href="/contribute"
                    variant="primary"
                    size="lg"
                    className="bg-white/95 !text-black hover:bg-white font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-white/50"
                  >
                    CONTRIBUTE NOW →
                  </Button>
                </div>

                {/* Additional 3D Effects */}
                <div className="absolute -top-2 -left-2 w-4 h-4 bg-white/20 rounded-full blur-sm"></div>
                <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-white/10 rounded-full blur-sm"></div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Community Support Resources */}
      <Section className="py-16 sm:py-20 bg-white">
        <Container>
          <div className="text-center mb-12 sm:mb-16">
            <div className="text-secondary-600 text-sm font-semibold uppercase tracking-wide mb-4">
              SUPPORT & RESOURCES
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 sm:mb-6">
              Community Support Network
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
              Access comprehensive support, resources, and connect with others on similar journeys
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Patient Support Groups */}
            <div className="bg-gradient-to-br from-primary-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Patient Support Groups</h3>
              <p className="text-slate-600 mb-6">
                Connect with others facing similar challenges. Monthly virtual meetups and local chapter events.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-slate-600">
                  <span className="w-2 h-2 bg-primary-400 rounded-full mr-2"></span>
                  Weekly virtual support meetings
                </div>
                <div className="flex items-center text-sm text-slate-600">
                  <span className="w-2 h-2 bg-primary-400 rounded-full mr-2"></span>
                  Peer mentorship program
                </div>
                <div className="flex items-center text-sm text-slate-600">
                  <span className="w-2 h-2 bg-primary-400 rounded-full mr-2"></span>
                  Family support resources
                </div>
              </div>
              <Button href="/support-groups" variant="outline" className="w-full">
                Join Support Group
              </Button>
            </div>

            {/* Educational Resources */}
            <div className="bg-gradient-to-br from-accent-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Educational Resources</h3>
              <p className="text-slate-600 mb-6">
                Comprehensive library of resources, guides, and educational materials for patients and families.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-slate-600">
                  <span className="w-2 h-2 bg-accent-400 rounded-full mr-2"></span>
                  Kidney disease guides
                </div>
                <div className="flex items-center text-sm text-slate-600">
                  <span className="w-2 h-2 bg-accent-400 rounded-full mr-2"></span>
                  Treatment option comparisons
                </div>
                <div className="flex items-center text-sm text-slate-600">
                  <span className="w-2 h-2 bg-accent-400 rounded-full mr-2"></span>
                  Donor search strategies
                </div>
              </div>
              <Button href="/resources" variant="outline" className="w-full">
                Access Resources
              </Button>
            </div>

            {/* Financial Assistance */}
            <div className="bg-gradient-to-br from-secondary-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Financial Assistance</h3>
              <p className="text-slate-600 mb-6">
                Help with medical expenses, transportation, and other costs associated with kidney disease and transplant.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-slate-600">
                  <span className="w-2 h-2 bg-secondary-400 rounded-full mr-2"></span>
                  Medical expense assistance
                </div>
                <div className="flex items-center text-sm text-slate-600">
                  <span className="w-2 h-2 bg-secondary-400 rounded-full mr-2"></span>
                  Transportation support
                </div>
                <div className="flex items-center text-sm text-slate-600">
                  <span className="w-2 h-2 bg-secondary-400 rounded-full mr-2"></span>
                  Emergency relief fund
                </div>
              </div>
              <Button href="/financial-assistance" variant="outline" className="w-full">
                Learn About Aid
              </Button>
            </div>
          </div>

          {/* Emergency Support Banner */}
          <div className="mt-12 bg-gradient-to-r from-accent-600 to-primary-600 rounded-2xl p-8 sm:p-12 text-white text-center">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              Need Immediate Support?
            </h3>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              Our 24/7 support line is available for urgent questions and crisis support for patients and families.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="tel:1-800-KIDNEY-HELP"
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-accent-600"
              >
                📞 Call Support Line
              </Button>
              <Button
                href="/live-chat"
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-accent-600"
              >
                💬 Live Chat Support
              </Button>
            </div>
          </div>

          {/* Community Stats */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl font-bold text-primary-600">15,000+</p>
              <p className="text-slate-600">Community Members</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-secondary-600">500+</p>
              <p className="text-slate-600">Support Groups</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-accent-500">24/7</p>
              <p className="text-slate-600">Support Available</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary-600">$2M+</p>
              <p className="text-slate-600">Financial Aid Provided</p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Community & Support Resources Section */}
      <Section className="py-16 sm:py-20 bg-white">
        <Container>
          <div className="text-center mb-12 sm:mb-16">
            <div className="text-secondary-600 text-sm font-semibold uppercase tracking-wide mb-4">
              COMMUNITY SUPPORT
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 sm:mb-6">
              You're Not Alone in This Journey
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
              Connect with others, access resources, and find the support you need every step of the way
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Support Groups */}
            <div className="bg-gradient-to-br from-primary-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Support Groups
              </h3>
              <p className="text-slate-600 mb-6">
                Join virtual and in-person support groups with patients, donors, and families who understand your experience.
              </p>
              <Button
                href="/support-groups"
                variant="outline"
                className="w-full"
              >
                Find a Group
              </Button>
            </div>

            {/* Educational Resources */}
            <div className="bg-gradient-to-br from-accent-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Educational Library
              </h3>
              <p className="text-slate-600 mb-6">
                Access comprehensive guides, videos, and articles about kidney disease, donation, and transplant care.
              </p>
              <Button
                href="/resources"
                variant="outline"
                className="w-full"
              >
                Browse Resources
              </Button>
            </div>

            {/* 24/7 Helpline */}
            <div className="bg-gradient-to-br from-secondary-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                24/7 Support Helpline
              </h3>
              <p className="text-slate-600 mb-6">
                Speak with trained counselors and navigate coordinators whenever you need guidance or emotional support.
              </p>
              <Button
                href="tel:1-800-KIDNEY-1"
                variant="outline"
                className="w-full"
              >
                Call Now
              </Button>
            </div>
          </div>

          {/* Quick Access Resources */}
          <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-8 sm:p-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Quick Access Resources
              </h3>
              <p className="text-lg text-gray-300">
                Essential resources for patients and families
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h4 className="text-white font-semibold mb-2">Patient Guide</h4>
                <p className="text-gray-400 text-sm mb-3">Complete guide to living with kidney disease</p>
                <Button variant="outline" size="sm" className="border-white text-white hover:bg-white hover:text-slate-800">
                  Download PDF
                </Button>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-accent-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-white font-semibold mb-2">FAQ</h4>
                <p className="text-gray-400 text-sm mb-3">Answers to common questions</p>
                <Button variant="outline" size="sm" className="border-white text-white hover:bg-white hover:text-slate-800">
                  View FAQ
                </Button>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-secondary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h4 className="text-white font-semibold mb-2">Find Centers</h4>
                <p className="text-gray-400 text-sm mb-3">Locate nearby transplant centers</p>
                <Button variant="outline" size="sm" className="border-white text-white hover:bg-white hover:text-slate-800">
                  Search Centers
                </Button>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h4 className="text-white font-semibold mb-2">Financial Aid</h4>
                <p className="text-gray-400 text-sm mb-3">Financial assistance programs</p>
                <Button variant="outline" size="sm" className="border-white text-white hover:bg-white hover:text-slate-800">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="py-16 sm:py-20 bg-gray-50">
        <Container>
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
              Join our community
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 mb-6 sm:mb-8 max-w-2xl mx-auto">
              We would love for you to join us in this journey. Please sign up
              for updates!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/get-involved" variant="primary" size="lg">
                Get Involved
              </Button>
              <Button href="/about" variant="outline" size="lg">
                Contact Us
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default Home;
