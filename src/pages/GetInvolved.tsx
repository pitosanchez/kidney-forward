import React, { useEffect } from "react";
import { useHeader } from "../contexts/HeaderContext";
import { getAssetPath } from "../utils/assetPath";
import LazyImage from "../components/LazyImage";

const GetInvolved: React.FC = () => {
  const { setIsTransparent } = useHeader();

  useEffect(() => {
    setIsTransparent(true);
    return () => setIsTransparent(false);
  }, [setIsTransparent]);

  const involvementOptions = [
    {
      id: "doctors",
      title: "Doctors",
      description:
        "If you are a doctor who has patients with kidney disease, patients on dialysis or patients preparing for transplant, please refer them to Kidney Forward.",
      image: getAssetPath("/images/aigirl.jpg"),
      link: "/doctors",
    },
    {
      id: "transplant-centers",
      title: "Transplant Centers",
      description:
        "If you are a transplant center looking to empower patients, please contact the Kidney Forward team.",
      image: getAssetPath("/images/happymom.webp"),
      link: "/transplant-centers",
    },
    {
      id: "volunteers",
      title: "Volunteers",
      description:
        "Are you looking for ways to give back? maybe someone you know is a kidney patient and the cause is important to you. Contact us for volunteer opportunities!",
      image: getAssetPath("/images/momdaughter.webp"),
      link: "/volunteers",
    },
    {
      id: "corporate-partners",
      title: "Corporate Partners",
      description:
        "If you work at a company and want to schedule a corporate volunteerism event or educate your employee base on kidney disease and transplantation, contact us.",
      image: getAssetPath("/images/sponsors.webp"),
      link: "/corporate-partners",
    },
    {
      id: "join-team",
      title: "Join the Kidney Forward Team",
      description:
        "Join us in the fight to eradicate the kidney transplant waitlist!",
      image: getAssetPath("/images/jentosy-support.webp"),
      link: "/careers",
    },
  ];

  return (
    <>
      {/* Hero Section with Gradient Overlay */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <LazyImage
            src={getAssetPath("/images/olderwoman.webp")}
            alt="Get Involved Hero"
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/80 via-teal-500/80 to-cyan-600/80"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 py-20">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            Get Involved
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-95">
            Learn more about what you can do to make a difference.
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

      {/* Ways to Get Involved Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-3">
              JOIN THE FIGHT
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Ways to get involved
            </h2>
          </div>

          {/* Cards Grid - First Row (3 cards) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {involvementOptions.slice(0, 3).map((option) => (
              <div
                key={option.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                {/* Image Container */}
                <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                  <LazyImage
                    src={option.image}
                    alt={option.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {option.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {option.description}
                  </p>
                  <a
                    href={option.link}
                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors group"
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
            {involvementOptions.slice(3, 5).map((option) => (
              <div
                key={option.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                {/* Image Container */}
                <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                  <LazyImage
                    src={option.image}
                    alt={option.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {option.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {option.description}
                  </p>
                  <a
                    href={option.link}
                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors group"
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

      {/* Optional CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-teal-600">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Every action counts in our mission to save lives through kidney
            donation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/donors"
              className="inline-block px-8 py-4 bg-white text-blue-600 font-semibold rounded-full hover:bg-gray-100 transition-colors"
            >
              Become a Donor
            </a>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-transparent text-white font-semibold rounded-full border-2 border-white hover:bg-white hover:text-blue-600 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default GetInvolved;
