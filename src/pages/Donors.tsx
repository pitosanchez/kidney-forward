import { Link } from "react-router-dom";
import {
  Heart,
  Shield,
  Users,
  Award,
  Clock,
  CheckCircle,
  ArrowRight,
  Star,
} from "lucide-react";

const Donors = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-secondary to-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">For Donors</h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            You have the power to save a life. Learn about kidney donation, the
            process, and how we support you every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/donor-registry"
              className="bg-white text-secondary px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              Join the Registry
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/contact-us"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-secondary transition-colors"
            >
              Get Support
            </Link>
          </div>
        </div>
      </section>

      {/* Why Donate Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Why Become a Kidney Donor?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kidney donation is one of the most impactful ways to help others.
              Here's what makes it special and why so many people choose to
              donate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Save a Life</h3>
              <p className="text-gray-600">
                Your donation can give someone a second chance at life, freeing
                them from dialysis and restoring their health and independence.
              </p>
            </div>

            <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Very Safe</h3>
              <p className="text-gray-600">
                Kidney donation is one of the safest surgical procedures. You'll
                receive comprehensive medical care and monitoring.
              </p>
            </div>

            <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Full Support</h3>
              <p className="text-gray-600">
                We provide complete support before, during, and after donation,
                including medical care, recovery assistance, and emotional
                support.
              </p>
            </div>

            <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">No Cost</h3>
              <p className="text-gray-600">
                All medical expenses are covered. You won't pay anything for the
                donation process, follow-up care, or travel expenses.
              </p>
            </div>

            <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Quick Recovery</h3>
              <p className="text-gray-600">
                Most donors return to normal activities within 2-4 weeks. You
                can live a completely normal life with one kidney.
              </p>
            </div>

            <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Life-Changing Impact
              </h3>
              <p className="text-gray-600">
                The impact of your donation extends beyond the recipient - it
                touches families, communities, and creates a ripple effect of
                hope.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              The Donation Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From your first inquiry to post-donation support, we're with you
              every step of the way.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">
                Initial Contact
              </h3>
              <p className="text-gray-600 text-center">
                Contact us to learn more about donation. We'll answer your
                questions and provide detailed information about the process.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">
                Comprehensive Evaluation
              </h3>
              <p className="text-gray-600 text-center">
                Undergo thorough medical, psychological, and social evaluation
                to ensure you're a good candidate for donation.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">
                Matching & Surgery
              </h3>
              <p className="text-gray-600 text-center">
                If approved, you'll be matched with a recipient and scheduled
                for the donation surgery at a top medical center.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">
                Recovery & Support
              </h3>
              <p className="text-gray-600 text-center">
                Receive comprehensive post-operative care and ongoing support as
                you recover and return to normal activities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Comprehensive Support
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We understand that kidney donation is a significant decision.
                That's why we provide comprehensive support throughout your
                entire journey.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      Medical Support
                    </h3>
                    <p className="text-gray-600">
                      Complete medical evaluation, surgery coordination, and
                      post-operative care at top medical centers with
                      experienced transplant teams.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      Financial Support
                    </h3>
                    <p className="text-gray-600">
                      All medical expenses covered, including travel, lodging,
                      and lost wages during recovery. No out-of-pocket costs for
                      donors.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      Emotional Support
                    </h3>
                    <p className="text-gray-600">
                      Access to counselors, support groups, and peer mentors who
                      have been through the donation process themselves.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Ongoing Care</h3>
                    <p className="text-gray-600">
                      Long-term follow-up care and monitoring to ensure your
                      continued health and well-being after donation.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <img
                src="/images/aigirl.jpg"
                alt="Donor Support"
                className="rounded-lg shadow-2xl max-w-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Donor Stories
            </h2>
            <p className="text-xl text-gray-600">
              Hear from donors who have made the life-changing decision to
              donate
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Star className="w-6 h-6 text-primary mr-2" />
                <h3 className="font-semibold">Sarah's Story</h3>
              </div>
              <p className="text-gray-600 mb-4">
                "Donating my kidney was the most rewarding experience of my
                life. The support I received from Kidney Forward was incredible.
                Knowing I helped save someone's life is indescribable."
              </p>
              <div className="text-sm text-gray-500">- Living Donor, 2023</div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Star className="w-6 h-6 text-primary mr-2" />
                <h3 className="font-semibold">Michael's Journey</h3>
              </div>
              <p className="text-gray-600 mb-4">
                "The process was much easier than I expected. The medical team
                was amazing, and I was back to work within a month. I'd do it
                again in a heartbeat."
              </p>
              <div className="text-sm text-gray-500">- Living Donor, 2022</div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Star className="w-6 h-6 text-primary mr-2" />
                <h3 className="font-semibold">Lisa's Experience</h3>
              </div>
              <p className="text-gray-600 mb-4">
                "Kidney Forward guided me through every step. The emotional
                support was just as important as the medical care. I'm so
                grateful for this opportunity."
              </p>
              <div className="text-sm text-gray-500">- Living Donor, 2023</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Save a Life?
          </h2>
          <p className="text-xl mb-8 text-gray-100 max-w-2xl mx-auto">
            Join thousands of others who have made the life-changing decision to
            donate. Your kidney could be the gift that saves someone's life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/donor-registry"
              className="bg-white text-secondary px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Your Journey
            </Link>
            <Link
              to="/contact-us"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-secondary transition-colors"
            >
              Ask Questions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donors;
