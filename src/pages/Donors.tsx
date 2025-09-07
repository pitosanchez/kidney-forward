import React, { useEffect, useState } from "react";
import { useHeader } from "../contexts/HeaderContext";
import { getAssetPath } from "../utils/assetPath";
import LazyImage from "../components/LazyImage";

const Donors: React.FC = () => {
  const { setIsTransparent } = useHeader();
  const [activeTab, setActiveTab] = useState<
    "programs" | "education" | "eligibility"
  >("programs");

  useEffect(() => {
    setIsTransparent(true);
    return () => setIsTransparent(false);
  }, [setIsTransparent]);

  return (
    <>
      {/* Hero Section with Gradient Overlay */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <LazyImage
            src={getAssetPath("/images/handsc.webp")}
            alt="Living Donors Hero"
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlay - Green to teal gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/70 via-teal-500/70 to-cyan-500/70"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 py-20">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            Living Donors
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-95">
            For the brave, the few, the real heroes
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

      {/* Introduction Section */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
            We want to thank you for considering becoming a living donor.
          </h2>
          <p className="text-lg text-gray-600 mb-2">
            Living donors are a special group of people and represent the best
            of human kind.
          </p>
          <p className="text-lg text-gray-600 mb-8">
            You are brave, courageous, generous, caring and thoughtful.
          </p>
          <p className="text-base text-gray-700 leading-relaxed">
            Our Living Donor Program is designed to provide you guidance and
            support every step of the way. Becoming a living donor can be a
            daunting and intimidating process. Our Program aims to demystify the
            process, ensuring your questions are answered and that you feel
            supported every step of the way.
          </p>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-8 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-center space-x-4 mb-12">
            <button
              onClick={() => setActiveTab("programs")}
              className={`px-8 py-3 font-semibold text-lg transition-all ${
                activeTab === "programs"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Programs
            </button>
            <button
              onClick={() => setActiveTab("education")}
              className={`px-8 py-3 font-semibold text-lg transition-all ${
                activeTab === "education"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Education
            </button>
            <button
              onClick={() => setActiveTab("eligibility")}
              className={`px-8 py-3 font-semibold text-lg transition-all ${
                activeTab === "eligibility"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Eligibility
            </button>
          </div>

          {/* Tab Content */}
          {activeTab === "programs" && (
            <div className="space-y-20">
              <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
                Our Programs
              </h2>

              {/* Guided Living Donor Program */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <div className="rounded-2xl overflow-hidden shadow-xl">
                    <LazyImage
                      src={getAssetPath(
                        "/images/guidedlivingdonorprogram.webp"
                      )}
                      alt="Guided Living Donor Program"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
                <div className="order-1 lg:order-2 space-y-6">
                  <h3 className="text-3xl font-bold text-gray-900">
                    GUIDED LIVING DONOR PROGRAM
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    This program is designed for anyone who is interested in
                    becoming a living donor. You will learn what the donation
                    process entails, how donors are evaluated and screened, what
                    to expect during recovery, and what support is out there to
                    help you while you take time away from your daily life.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    There are two types of living donors: Directed or
                    Non-Directed.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    <strong>Directed Donors</strong> are donors already have a
                    person in mind that they want to donate to and it is usually
                    a relative or a friend.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    <strong>Non-Directed Donors</strong>, also known as
                    Altruistic Donors, are donors who want to donate a kidney
                    but don't have any specific person in mind.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    We encourage all potential living donors to sign up and
                    learn more. Should you decide living donation is not right
                    for you for whatever reason, you'll learn of other ways that
                    you can help.
                  </p>
                  <a
                    href="/programs/guided-living-donor"
                    className="inline-flex items-center px-6 py-3 bg-white border-2 border-blue-600 text-blue-600 font-semibold rounded-full hover:bg-blue-50 transition-colors group"
                  >
                    LEARN MORE
                    <span className="ml-2 transform group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </a>
                </div>
              </div>

              {/* Second Program - with details from screenshot */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold text-gray-900">
                    GUIDED LIVING DONOR PROGRAM
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    This program is designed for anyone who is interested in
                    becoming a living donor. You will learn what the donation
                    process entails, how donors are evaluated and screened, what
                    to expect during recovery, and what support is out there to
                    help you while you take time away from your daily life.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    There are two types of living donors: Directed or
                    Non-Directed.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    <strong>Directed Donors</strong> are donors already have a
                    person in mind that they want to donate to and it is usually
                    a relative or a friend.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    <strong>Non-Directed Donors</strong>, also known as
                    Altruistic Donors, are donors who want to donate a kidney
                    but don't have any specific person in mind.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    We encourage all potential living donors to sign up and
                    learn more. Should you decide living donation is not right
                    for you for whatever reason, you'll learn of other ways that
                    you can help.
                  </p>
                  <a
                    href="/programs/guided-living-donor"
                    className="inline-flex items-center px-6 py-3 bg-white border-2 border-blue-600 text-blue-600 font-semibold rounded-full hover:bg-blue-50 transition-colors group"
                  >
                    LEARN MORE
                    <span className="ml-2 transform group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </a>
                </div>
                <div>
                  <div className="rounded-2xl overflow-hidden shadow-xl">
                    <LazyImage
                      src={getAssetPath(
                        "/images/guidedlivingdonorprogram.webp"
                      )}
                      alt="Medical Team"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Kidney Basics 101 */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <div className="rounded-2xl overflow-hidden shadow-xl">
                    <LazyImage
                      src={getAssetPath("/images/youngwomanstudying.webp")}
                      alt="Kidney Basics 101"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
                <div className="order-1 lg:order-2 space-y-6">
                  <h3 className="text-3xl font-bold text-gray-900">
                    KIDNEY BASICS 101
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    This course is designed to teach you about kidneys. What are
                    they? What do they do? What is kidney disease and what are
                    the typical causes, signs and symptoms? This course will
                    also discuss the treatments for kidney disease with an
                    emphasis on kidney transplantation. This course is great for
                    anyone wanting to learn more including potential donors,
                    corporate partners, and doctors unfamiliar with kidney
                    disease.
                  </p>
                  <a
                    href="/education/kidney-basics"
                    className="inline-flex items-center px-6 py-3 bg-white border-2 border-blue-600 text-blue-600 font-semibold rounded-full hover:bg-blue-50 transition-colors group"
                  >
                    LEARN MORE
                    <span className="ml-2 transform group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </a>
                </div>
              </div>
            </div>
          )}

          {activeTab === "education" && (
            <div className="space-y-12">
              <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
                Education Resources
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Understanding Kidney Disease
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Learn about the causes, symptoms, and stages of kidney
                    disease, and how it affects millions of people worldwide.
                  </p>
                  <a
                    href="/education/kidney-disease"
                    className="text-blue-600 font-semibold hover:text-blue-700"
                  >
                    Learn More →
                  </a>
                </div>
                <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    The Donation Process
                  </h3>
                  <p className="text-gray-600 mb-6">
                    A step-by-step guide to understanding what happens during
                    the kidney donation process, from evaluation to recovery.
                  </p>
                  <a
                    href="/education/donation-process"
                    className="text-blue-600 font-semibold hover:text-blue-700"
                  >
                    Learn More →
                  </a>
                </div>
                <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Life After Donation
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Discover what life is like after donating a kidney,
                    including long-term health considerations and lifestyle
                    adjustments.
                  </p>
                  <a
                    href="/education/life-after"
                    className="text-blue-600 font-semibold hover:text-blue-700"
                  >
                    Learn More →
                  </a>
                </div>
              </div>
            </div>
          )}

          {activeTab === "eligibility" && (
            <div className="space-y-12">
              <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
                Donor Eligibility
              </h2>
              <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Basic Requirements
                </h3>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <span>Be at least 18 years old</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <span>Be in good physical and mental health</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <span>Have normal kidney function</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <span>
                      Be free from diseases that could damage the kidneys
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <span>Have a body mass index (BMI) less than 35</span>
                  </li>
                </ul>

                <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-6">
                  The Evaluation Process
                </h3>
                <p className="text-gray-600 mb-6">
                  The evaluation process includes comprehensive medical testing,
                  psychological evaluation, and education about the donation
                  process. This thorough evaluation ensures that donation is
                  safe for you and that your kidney will help the recipient.
                </p>

                <div className="text-center mt-10">
                  <a
                    href="/donors/eligibility-quiz"
                    className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors"
                  >
                    Take Eligibility Quiz
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 mt-16 bg-gradient-to-r from-teal-600 to-cyan-600">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Become a Living Donor?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Take the first step in your journey to save a life. Join our
            registry today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/donors/register"
              className="inline-block px-8 py-4 bg-white text-teal-600 font-semibold rounded-full hover:bg-gray-100 transition-colors"
            >
              Join Donor Registry
            </a>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-transparent text-white font-semibold rounded-full border-2 border-white hover:bg-white hover:text-teal-600 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Donors;
