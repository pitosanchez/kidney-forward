import React, { useEffect } from "react";
import { useHeader } from "../contexts/HeaderContext";
import { Button, Section, Container, Hero } from "../components/ui";
import TeamCard3D from "../components/TeamCard3D";
import { getAssetPath } from "../utils/assetPath";

const About: React.FC = () => {
  const { setIsTransparent } = useHeader();

  useEffect(() => {
    setIsTransparent(false);
    return () => setIsTransparent(false);
  }, [setIsTransparent]);

  return (
    <div>
      {/* Hero Section */}
      <Hero
        title=""
        subtitle=""
        description=""
        backgroundImage={getAssetPath("/images/happymom.webp")}
        backgroundVariant="image"
        overlay={false}
        className="min-h-[60vh] md:min-h-[70vh] lg:min-h-[80vh] flex items-center"
      >
        <div className="w-full max-w-7xl mx-auto px-8 md:px-16 lg:px-24">
          <div className="text-left">
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white mb-6" style={{textShadow: '4px 4px 8px rgba(0,0,0,0.7), 8px 8px 16px rgba(0,0,0,0.5), 12px 12px 24px rgba(0,0,0,0.3)'}}>
              About Us
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-white/90 font-light">
              Learn more about who we are and why we do what we do.
            </p>
          </div>
        </div>
      </Hero>
      {/* How Kidney Forward Started Section */}
      <Section
        title="How Kidney Forward Started"
        subtitle=""
        background="white"
        padding="md"
        className=""
      >
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 text-center">
                Our Story
              </h3>
              <div className="prose prose-xl max-w-none text-gray-700 space-y-6 text-justify mx-auto">
                <p className="text-xl leading-relaxed">Kidney Forward was started by Andrew Luu in 2024.</p>
                <p className="text-xl leading-relaxed">
                  At age 13, Andrew received his first kidney transplant from
                  his mother and twenty years later in 2020, his kidney function
                  had deteriorated to 30%. He and his parents always knew that
                  he would eventually need another transplant. His extended
                  family encouraged him to move back to Southern California and
                  assured him that they were willing to become living donors.
                  After having lived on the East Coast and overseas for nearly a
                  decade, he made a multi-year plan to return to Southern
                  California, thankful and ecstatic that he had living donors
                  secured. For the next two years while his kidney function
                  continued to decline, Andrew worked toward a Master's degree
                  while working full time so that he could transition out of his
                  federal government job into a private sector corporate job so
                  that he would have health insurance.
                </p>
                <p className="text-xl leading-relaxed">
                  People familiar with the transplantation process know where
                  this story goes: Andrew's family ultimately backed out and
                  declined to get evaluated to be a living donor.
                </p>
                <p className="text-xl leading-relaxed">
                  Andrew was ultimately waitlisted in California, where the
                  average wait time for a deceased donor is eight to ten years.
                  In the United States, eighteen people die a day waiting for a
                  kidney from a deceased donor.
                </p>
                <p className="text-xl leading-relaxed">
                  He understands he is not entitled to anyone's organs but it
                  was no less disappointing when his family reneged. Andrew
                  understands living with chronic invisible illness, the pain of
                  feeling unsupported and disconnected, and the frustrations
                  with what seems to be a world infinitely populated with
                  self-centered and oblivious people who take their health for
                  granted.
                </p>
                <p className="text-xl leading-relaxed">
                  With 330 million living in the US, Kidney Forward believes
                  there should be no waitlist and has made its mission to
                  eradicate the waitlist by activating living donors at scale.
                  Living kidney donation increases organ and patient survival
                  rates, decreases patient wait times and decreases overall
                  healthcare costs for the patient, for the families and for
                  taxpayers.
                </p>
                <p className="text-xl leading-relaxed">
                  Asking someone to voluntarily give up a vital organ is a big
                  ask but there are enough latent living donors to fulfill the
                  waitlist until kidney technology can take over. Thanks to his
                  mother's gift and despite complications along the way, Andrew
                  has lived a full life and wants others to have the same chance
                  to experience life to its fullest. No one should ever feel
                  lost, scared, or alone in this process.
                </p>
              </div>
            </div>

          </div>
        </Container>
      </Section>

      {/* Our Team Section */}
      <Section 
        title="Meet Our Leaders" 
        subtitle="Passionate advocates transforming kidney care" 
        background="gray" 
        padding="xl"
        className="overflow-hidden"
      >
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 max-w-5xl mx-auto">
            <TeamCard3D
              name="Andrew Luu"
              title="Founder, CEO"
              image={getAssetPath("/images/adrewluu.jpg")}
              href="/andrew-luu"
              delay={0.2}
            />
            <TeamCard3D
              name="Robert Sanchez"
              title="Director of the Jentosy Project"
              image={getAssetPath("/images/robertBlueSuit.webp")}
              href="/robert-sanchez"
              delay={0.4}
            />
          </div>
        </Container>
      </Section>

      {/* Mission & Vision Section */}
      <Section
        title="Our Mission & Vision"
        subtitle=""
        background="white"
        padding="xl"
      >
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Mission */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Our Mission
                  </h3>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  To eradicate the kidney transplant waitlist by activating
                  living donors at scale, ensuring that no one dies waiting for
                  a life-saving transplant. We believe that with 330 million
                  people in the US, there should be no waitlist.
                </p>
              </div>

              {/* Vision */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Our Vision
                  </h3>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  A world where every kidney patient has access to living
                  donors, where no one feels lost, scared, or alone in their
                  transplant journey, and where living kidney donation becomes
                  the norm rather than the exception.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Statistics Section */}
      <Section
        title="The Impact of Kidney Disease"
        subtitle=""
        background="gray"
        padding="xl"
      >
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                  18
                </div>
                <p className="text-gray-700 font-semibold">
                  People die daily waiting for a kidney
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">
                  8-10
                </div>
                <p className="text-gray-700 font-semibold">
                  Years average wait time for deceased donors
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">
                  330M
                </div>
                <p className="text-gray-700 font-semibold">
                  People in the US who could be living donors
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-red-600 mb-2">
                  90K+
                </div>
                <p className="text-gray-700 font-semibold">
                  People currently on the transplant waitlist
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Programs Section */}
      <Section
        title="Our Programs & Services"
        subtitle=""
        background="white"
        padding="xl"
      >
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Living Donor Activation */}
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Living Donor Activation
                </h3>
                <p className="text-gray-700 mb-4">
                  We actively identify and connect potential living donors with
                  patients in need, providing comprehensive support throughout
                  the donation process.
                </p>
                <Button href="/donors" variant="outline" size="sm">
                  Learn More
                </Button>
              </div>

              {/* Patient Support */}
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Patient Support
                </h3>
                <p className="text-gray-700 mb-4">
                  Comprehensive support for kidney patients including education,
                  emotional support, and guidance through the transplant
                  process.
                </p>
                <Button href="/patients" variant="outline" size="sm">
                  Learn More
                </Button>
              </div>

              {/* Education & Advocacy */}
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Education & Advocacy
                </h3>
                <p className="text-gray-700 mb-4">
                  Raising awareness about kidney disease, living donation, and
                  advocating for policy changes to improve transplant access.
                </p>
                <Button href="/get-involved" variant="outline" size="sm">
                  Learn More
                </Button>
              </div>

              {/* Community Outreach */}
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-orange-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Community Outreach
                </h3>
                <p className="text-gray-700 mb-4">
                  Building partnerships with healthcare providers, transplant
                  centers, and community organizations to expand our reach and
                  impact.
                </p>
                <Button href="/get-involved" variant="outline" size="sm">
                  Learn More
                </Button>
              </div>

              {/* Research & Innovation */}
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-teal-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Research & Innovation
                </h3>
                <p className="text-gray-700 mb-4">
                  Supporting research initiatives and innovative approaches to
                  improve transplant outcomes and reduce waitlist times.
                </p>
                <Button href="/programs" variant="outline" size="sm">
                  Learn More
                </Button>
              </div>

              {/* Volunteer Network */}
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <div className="w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-pink-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Volunteer Network
                </h3>
                <p className="text-gray-700 mb-4">
                  Mobilizing volunteers across the country to support our
                  mission and help connect donors with patients in need.
                </p>
                <Button href="/get-involved" variant="outline" size="sm">
                  Join Us
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* What Makes Kidney Forward Different Section */}
      <Section
        title="What Makes Kidney Forward Different"
        subtitle=""
        background="gray"
        padding="xl"
      >
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p>
                What distinguishes Kidney Forward from other organizations is
                our hands-on approach to helping individuals find and connect
                with potential living donors. While many organizations provide
                educational resources, our participatory model goes a step
                further by actively engaging in the process of identifying and
                connecting with living donors.
              </p>
              <p>
                We are committed to serving anyone in need and have additional
                programs that address the disparities underserved communities
                face. We believe in equitable access to life-saving transplants
                for all, regardless of background, while also recognizing and
                addressing the specific challenges certain groups face in
                accessing care.
              </p>
              <p>
                We are active participants in the health journey of the clients
                we serve. Not only do we advocate but we also engage in the
                personal process of each patient.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Contact Information Section */}
      <Section title="Get In Touch" subtitle="" background="white" padding="xl">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-4 mt-1">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Email</p>
                      <p className="text-gray-700">info@kidneyforward.org</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center mr-4 mt-1">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Phone</p>
                      <p className="text-gray-700">(555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center mr-4 mt-1">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Address</p>
                      <p className="text-gray-700">
                        123 Kidney Forward Way
                        <br />
                        Los Angeles, CA 90210
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Quick Links
                </h3>
                <div className="space-y-4">
                  <Button href="/donors" variant="outline" fullWidth>
                    Become a Donor
                  </Button>
                  <Button href="/patients" variant="outline" fullWidth>
                    Patient Resources
                  </Button>
                  <Button href="/get-involved" variant="outline" fullWidth>
                    Get Involved
                  </Button>
                  <Button href="/get-involved" variant="primary" fullWidth>
                    Make a Donation
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Subscribe Section */}
      <Section
        title="Subscribe for News & Updates"
        subtitle=""
        background="primary"
        padding="lg"
      >
        <Container>
          <div className="max-w-md mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8">
              <form className="space-y-4">
                <div>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                </div>
                <div className="text-xs text-white/70 text-left">
                  Leave this field empty if you're human:
                </div>
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  fullWidth
                  className="bg-white text-primary hover:bg-gray-100"
                >
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default About;
