import React, { useEffect } from "react";
import { useHeader } from "../contexts/HeaderContext";
import { Button, Section, Container } from "../components/ui";
import Hero from "../components/Hero";
import { getAssetPath } from "../utils/assetPath";

const Home: React.FC = () => {
  const { setIsTransparent } = useHeader();

  useEffect(() => {
    // Set header transparent for hero section
    setIsTransparent(true);

    // Cleanup function to reset header when component unmounts
    return () => {
      setIsTransparent(false);
    };
  }, [setIsTransparent]);

  return (
    <div>
      <Hero />

      {/* Dedicated Video Section */}
      <Section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <Container>
          <div className="text-center mb-12 sm:mb-16">
            <div className="text-blue-600 text-sm font-semibold uppercase tracking-wide mb-4">
              OUR STORY
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              It Only Takes One
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Discover how one person's decision to become a living donor can
              transform countless lives. Our mission is simple yet profound: to
              eliminate the kidney transplant waitlist through education,
              advocacy, and community support.
            </p>
          </div>

          {/* Video Container */}
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-500 border border-gray-100">
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
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-sm">Living Donation</span>
                  </div>
                  <div className="flex items-center justify-center sm:justify-start space-x-2 text-gray-400">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-sm">Community Impact</span>
                  </div>
                  <div className="flex items-center justify-center sm:justify-start space-x-2 text-gray-400">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-sm">Hope & Healing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-8 sm:mt-12">
            <p className="text-gray-600 text-base sm:text-lg mb-6 max-w-2xl mx-auto">
              Ready to make a difference? Join thousands of others who are
              helping to eliminate the kidney transplant waitlist.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="/get-involved"
                variant="primary"
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold"
              >
                Get Involved Today
              </Button>
              <Button
                href="/programs"
                variant="outline"
                size="lg"
                className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold"
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
            <div className="text-blue-600 text-sm font-semibold uppercase tracking-wide mb-4">
              JOIN OUR COMMUNITY
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Kidney Forward Programs
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive programs support patients, donors, and families
              throughout the kidney transplant journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* For Patients */}
            <div className="bg-white rounded-lg shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-300 h-full flex flex-col">
              <div className="aspect-square overflow-hidden">
                <img
                  src={getAssetPath("/images/olderwoman.webp")}
                  alt="Nurse helping patient"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 sm:p-8 flex-1 flex flex-col">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                  For Patients
                </h3>
                <p className="text-gray-600 mb-6 flex-1 text-sm sm:text-base">
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
            <div className="bg-white rounded-lg shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-300 h-full flex flex-col">
              <div className="aspect-square overflow-hidden">
                <img
                  src={getAssetPath("/images/momdaughter.webp")}
                  alt="Mother and daughter"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 sm:p-8 flex-1 flex flex-col">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                  For Potential Donors
                </h3>
                <p className="text-gray-600 mb-6 flex-1 text-sm sm:text-base">
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
            <div className="bg-white rounded-lg shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-300 h-full flex flex-col md:col-span-2 lg:col-span-1">
              <div className="aspect-square overflow-hidden">
                <img
                  src={getAssetPath("/images/sponsors.webp")}
                  alt="Friends and family support"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 sm:p-8 flex-1 flex flex-col">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                  For Friends and Family
                </h3>
                <p className="text-gray-600 mb-6 flex-1 text-sm sm:text-base">
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

      {/* Our Mission */}
      <section className="py-16 sm:py-20 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-300 text-center mb-12 sm:mb-16">
              OUR MISSION
            </h2>
            <div className="flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-16">
              <div className="flex-shrink-0">
                <img
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
            <div className="bg-blue-600 rounded-lg p-6 sm:p-8 shadow-2xl transform hover:scale-105 transition-all duration-300 h-full flex flex-col">
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
            <div className="bg-green-500 rounded-lg p-6 sm:p-8 shadow-2xl transform hover:scale-105 transition-all duration-300 h-full flex flex-col">
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
            <div className="bg-gray-700 rounded-lg p-6 sm:p-8 shadow-2xl transform hover:scale-105 transition-all duration-300 h-full flex flex-col">
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
            <div className="bg-green-500 rounded-lg p-6 sm:p-8 shadow-2xl transform hover:scale-105 transition-all duration-300 h-full flex flex-col">
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
      <section className="py-16 sm:py-20 bg-black">
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
              <div className="bg-white/10 backdrop-blur-md rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl border border-white/20 transform hover:scale-105 transition-all duration-500 relative overflow-hidden">
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

      {/* CTA Section */}
      <Section className="py-16 sm:py-20 bg-gray-50">
        <Container>
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
              Join our community
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto">
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
