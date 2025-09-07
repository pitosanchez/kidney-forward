import React, { useEffect } from "react";
import { useHeader } from "../contexts/HeaderContext";
import { getAssetPath } from "../utils/assetPath";
import LazyImage from "../components/LazyImage";

const Programs: React.FC = () => {
  const { setIsTransparent } = useHeader();

  useEffect(() => {
    setIsTransparent(true);
    return () => setIsTransparent(false);
  }, [setIsTransparent]);

  const programs = [
    {
      id: "bobby-lynn-navigator",
      title: "Bobby Lynn Navigator Program",
      description:
        "Our flagship program provides comprehensive support and guidance for kidney patients throughout their transplant journey, from diagnosis to post-transplant care.",
      image: getAssetPath("/images/bobby-lynn.webp"),
      link: "/programs/bobby-lynn-navigator",
    },
    {
      id: "guided-living-donor",
      title: "Guided Living Donor Program",
      description:
        "A structured program that helps potential living donors understand the donation process, requirements, and provides support throughout their donation journey.",
      image: getAssetPath("/images/handsc.webp"),
      link: "/programs/guided-living-donor",
    },
    {
      id: "jentosy-patient-support",
      title: "Jentosy Patient Support Program",
      description:
        "Named in honor of a kidney warrior, this program offers emotional support, educational resources, and practical assistance for patients awaiting transplants.",
      image: getAssetPath("/images/jentosy-patient-support.jpg"),
      link: "/programs/jentosy-support",
    },
    {
      id: "transplant-centers",
      title: "Transplant Center Partnership",
      description:
        "We partner with leading transplant centers to streamline the donation process, improve patient outcomes, and reduce wait times for kidney transplants.",
      image: getAssetPath("/images/happymom.webp"),
      link: "/programs/transplant-centers",
    },
    {
      id: "education-outreach",
      title: "Education & Outreach",
      description:
        "Community education programs that raise awareness about kidney disease, the importance of organ donation, and how to become a living donor.",
      image: getAssetPath("/images/womanlaugh.webp"),
      link: "/programs/education",
    },
  ];

  return (
    <>
      {/* Hero Section with Gradient Overlay */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <LazyImage
            src={getAssetPath("/images/blog_kidney_black_1932x862.webp")}
            alt="Programs Hero"
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlay - Using a purple/blue gradient for variety */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/80 via-blue-600/80 to-indigo-600/80"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 py-20">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            Our Programs
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-95">
            Comprehensive programs designed to support patients, donors, and
            healthcare providers in the kidney transplant journey.
          </p>
        </div>

        {/* Wave Shape at Bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            className="w-full h-auto"
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V120Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-purple-600 font-semibold text-sm uppercase tracking-wider mb-3">
              MAKING A DIFFERENCE
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Programs that save lives
            </h2>
          </div>

          {/* Cards Grid - First Row (3 cards) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {programs.slice(0, 3).map((program) => (
              <div
                key={program.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                {/* Image Container */}
                <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                  <LazyImage
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {program.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {program.description}
                  </p>
                  <a
                    href={program.link}
                    className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-700 transition-colors group"
                  >
                    Learn More
                    <span className="ml-2 transform group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Cards Grid - Second Row (2 cards centered) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {programs.slice(3, 5).map((program) => (
              <div
                key={program.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                {/* Image Container */}
                <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                  <LazyImage
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {program.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {program.description}
                  </p>
                  <a
                    href={program.link}
                    className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-700 transition-colors group"
                  >
                    Learn More
                    <span className="ml-2 transform group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">
                90,000+
              </div>
              <p className="text-gray-600 font-medium">
                People Waiting for Kidney Transplants
              </p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">
                500+
              </div>
              <p className="text-gray-600 font-medium">
                Successful Donor Matches
              </p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">
                12
              </div>
              <p className="text-gray-600 font-medium">
                Partner Transplant Centers
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-indigo-600">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Join Our Mission to Save Lives
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Whether you're a patient, potential donor, or healthcare provider,
            we have a program that can help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/patients"
              className="inline-block px-8 py-4 bg-white text-purple-600 font-semibold rounded-full hover:bg-gray-100 transition-colors"
            >
              For Patients
            </a>
            <a
              href="/donors"
              className="inline-block px-8 py-4 bg-transparent text-white font-semibold rounded-full border-2 border-white hover:bg-white hover:text-purple-600 transition-colors"
            >
              For Donors
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Programs;
