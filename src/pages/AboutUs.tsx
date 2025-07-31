import { Heart, Users, Award, Target } from "lucide-react";
import { Button, Hero, Section, Card, Container } from "../components/ui";

const AboutUs = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero
        title="About Kidney Forward"
        subtitle="We're dedicated to connecting kidney donors with patients in need, making a difference one kidney at a time through education, support, and advocacy."
        variant="secondary"
      />

      {/* Mission Section */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 font-heading">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Kidney Forward exists to bridge the gap between kidney donors and
              patients in need. We believe that every person deserves access to
              life-saving kidney transplants, and we work tirelessly to make
              that vision a reality.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Through our comprehensive platform, we provide education, support,
              and resources for both donors and recipients, ensuring that the
              donation process is safe, transparent, and accessible to all.
            </p>
            <Button
              href="/get-involved"
              variant="primary"
              size="lg"
              icon={Heart}
              iconPosition="right"
            >
              Get Involved
            </Button>
          </div>
          <div className="flex justify-center animate-slide-up">
            <img
              src="/images/aigirl.jpg"
              alt="Kidney Forward Team"
              className="rounded-2xl shadow-2xl max-w-md w-full h-auto object-cover"
            />
          </div>
        </div>
      </Section>

      {/* Values Section */}
      <Section
        variant="alt"
        title="Our Values"
        subtitle="These core values guide everything we do at Kidney Forward"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card
            icon={Heart}
            className="text-center p-6 hover:scale-105 transition-transform duration-300"
          >
            <h3 className="text-xl font-semibold mb-3">Compassion</h3>
            <p className="text-gray-600 leading-relaxed">
              We approach every interaction with empathy and understanding,
              recognizing the courage and vulnerability of both donors and
              recipients.
            </p>
          </Card>

          <Card
            icon={Users}
            className="text-center p-6 hover:scale-105 transition-transform duration-300"
          >
            <h3 className="text-xl font-semibold mb-3">Community</h3>
            <p className="text-gray-600 leading-relaxed">
              We build strong, supportive communities that connect donors,
              recipients, families, and healthcare professionals.
            </p>
          </Card>

          <Card
            icon={Award}
            className="text-center p-6 hover:scale-105 transition-transform duration-300"
          >
            <h3 className="text-xl font-semibold mb-3">Excellence</h3>
            <p className="text-gray-600 leading-relaxed">
              We maintain the highest standards of safety, transparency, and
              quality in all our programs and services.
            </p>
          </Card>

          <Card
            icon={Target}
            className="text-center p-6 hover:scale-105 transition-transform duration-300"
          >
            <h3 className="text-xl font-semibold mb-3">Impact</h3>
            <p className="text-gray-600 leading-relaxed">
              We measure our success by the lives we save and the positive
              change we create in the world.
            </p>
          </Card>
        </div>
      </Section>

      {/* Team Section */}
      <Section
        title="Our Leadership"
        subtitle="Meet the dedicated professionals who guide our mission"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="flex items-center space-x-6 p-6 hover:scale-105 transition-transform duration-300">
            <img
              src="/images/adrewluu.jpg"
              alt="Andrew Luu"
              className="w-24 h-24 rounded-full object-cover shadow-lg"
            />
            <div>
              <h3 className="text-xl font-semibold mb-2">Andrew Luu</h3>
              <p className="text-gray-600 mb-2">Executive Director</p>
              <Button href="/andrew-luu" variant="ghost" size="sm">
                Learn More →
              </Button>
            </div>
          </Card>

          <Card className="flex items-center space-x-6 p-6 hover:scale-105 transition-transform duration-300">
            <img
              src="/images/adrewluu.jpg"
              alt="Robert Sanchez"
              className="w-24 h-24 rounded-full object-cover shadow-lg"
            />
            <div>
              <h3 className="text-xl font-semibold mb-2">Robert Sanchez</h3>
              <p className="text-gray-600 mb-2">Medical Director</p>
              <Button href="/robert-sanchez" variant="ghost" size="sm">
                Learn More →
              </Button>
            </div>
          </Card>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="py-20 bg-gradient-to-r from-primary-500 to-secondary-600 text-white">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 font-heading">
              Join Our Mission
            </h2>
            <p className="text-xl mb-8 text-gray-100 max-w-2xl mx-auto">
              Whether you're interested in donating, need a kidney, or want to
              support our work, there are many ways to get involved with Kidney
              Forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/donor-registry" variant="secondary" size="lg">
                Join the Registry
              </Button>
              <Button href="/contact-us" variant="outline" size="lg">
                Contact Us
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default AboutUs;
