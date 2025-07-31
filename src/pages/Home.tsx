import {
  ArrowRight,
  Heart,
  Users,
  BookOpen,
  Award,
} from "lucide-react";
import { Button, Hero, Section, Card, Container } from "../components/ui";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero
        title="Save a Life"
        subtitle="Kidney Forward connects donors with patients in need, making a difference one kidney at a time. Join our mission to save lives through kidney donation."
        image="/images/aigirl.jpg"
        imageAlt="Kidney Forward Mission"
      >
        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            href="/donor-registry"
            variant="secondary"
            size="lg"
            icon={ArrowRight}
            iconPosition="right"
          >
            Join the Registry
          </Button>
          <Button href="/about-us" variant="outline" size="lg">
            Learn More
          </Button>
        </div>
      </Hero>

      {/* Stats Section */}
      <Section variant="alt" className="py-16">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="text-4xl font-bold text-primary-500 mb-2">
                1,000+
              </div>
              <div className="text-gray-600 font-medium">Lives Saved</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="text-4xl font-bold text-primary-500 mb-2">
                500+
              </div>
              <div className="text-gray-600 font-medium">Donors</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="text-4xl font-bold text-primary-500 mb-2">
                50+
              </div>
              <div className="text-gray-600 font-medium">Partners</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="text-4xl font-bold text-primary-500 mb-2">5</div>
              <div className="text-gray-600 font-medium">Years</div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Features Section */}
      <Section
        title="How We Help"
        subtitle="Kidney Forward provides comprehensive support for both donors and patients throughout the kidney donation process."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card
            icon={Heart}
            className="text-center p-8 hover:scale-105 transition-transform duration-300"
          >
            <h3 className="text-xl font-semibold mb-4">For Donors</h3>
            <p className="text-gray-600 leading-relaxed">
              Get support and guidance through the donation process. We're here
              to help you make a life-changing difference.
            </p>
          </Card>

          <Card
            icon={Users}
            className="text-center p-8 hover:scale-105 transition-transform duration-300"
          >
            <h3 className="text-xl font-semibold mb-4">For Patients</h3>
            <p className="text-gray-600 leading-relaxed">
              Find the kidney donor you need. We connect patients with willing
              donors and provide ongoing support.
            </p>
          </Card>

          <Card
            icon={BookOpen}
            className="text-center p-8 hover:scale-105 transition-transform duration-300"
          >
            <h3 className="text-xl font-semibold mb-4">Education</h3>
            <p className="text-gray-600 leading-relaxed">
              Learn about kidney donation, the process, and how you can help
              save lives through our educational programs.
            </p>
          </Card>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="py-20 bg-gradient-to-r from-primary-500 to-secondary-600 text-white">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 font-heading">
              Ready to Make a Difference?
            </h2>
            <p className="text-xl mb-8 text-gray-100 max-w-2xl mx-auto">
              Join thousands of others who have already saved lives through
              kidney donation. Your decision to donate can change someone's life
              forever.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/donor-registry" variant="secondary" size="lg">
                Join the Registry
              </Button>
              <Button href="/get-involved" variant="outline" size="lg">
                Get Involved
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Testimonials Section */}
      <Section
        variant="alt"
        title="Stories of Hope"
        subtitle="Hear from donors and recipients whose lives have been changed forever."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="p-6 hover:scale-105 transition-transform duration-300">
            <div className="flex items-center mb-4">
              <Award className="w-6 h-6 text-primary-500 mr-2" />
              <h3 className="font-semibold">Sarah's Story</h3>
            </div>
            <p className="text-gray-600 mb-4 leading-relaxed">
              "Donating my kidney was the most rewarding experience of my life.
              Knowing I helped save someone's life is indescribable."
            </p>
            <div className="text-sm text-gray-500 font-medium">
              - Kidney Donor
            </div>
          </Card>

          <Card className="p-6 hover:scale-105 transition-transform duration-300">
            <div className="flex items-center mb-4">
              <Award className="w-6 h-6 text-primary-500 mr-2" />
              <h3 className="font-semibold">Michael's Journey</h3>
            </div>
            <p className="text-gray-600 mb-4 leading-relaxed">
              "Thanks to Kidney Forward, I found my donor and got a second
              chance at life. I'm forever grateful."
            </p>
            <div className="text-sm text-gray-500 font-medium">
              - Kidney Recipient
            </div>
          </Card>

          <Card className="p-6 hover:scale-105 transition-transform duration-300">
            <div className="flex items-center mb-4">
              <Award className="w-6 h-6 text-primary-500 mr-2" />
              <h3 className="font-semibold">Family's Hope</h3>
            </div>
            <p className="text-gray-600 mb-4 leading-relaxed">
              "The support we received from Kidney Forward was incredible. They
              guided us through every step of the process."
            </p>
            <div className="text-sm text-gray-500 font-medium">
              - Patient Family
            </div>
          </Card>
        </div>
      </Section>
    </div>
  );
};

export default Home;
