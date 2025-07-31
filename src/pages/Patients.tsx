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

const Patients = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-secondary to-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">For Patients</h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            You're not alone in your journey. We're here to help you find the
            kidney donor you need and support you throughout the transplant
            process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact-us"
              className="bg-white text-secondary px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              Get Help
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/doctors"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-secondary transition-colors"
            >
              Find Doctors
            </Link>
          </div>
        </div>
      </section>

      {/* How We Help Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              How We Help Patients
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kidney Forward provides comprehensive support for patients in need
              of kidney transplants. We're here to guide you through every step
              of your journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Donor Matching</h3>
              <p className="text-gray-600">
                We help connect you with potential kidney donors through our
                extensive network and matching system.
              </p>
            </div>

            <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Medical Support</h3>
              <p className="text-gray-600">
                Access to top transplant centers and medical teams with
                expertise in kidney transplantation.
              </p>
            </div>

            <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Patient Advocacy</h3>
              <p className="text-gray-600">
                We advocate for your needs and ensure you receive the best
                possible care throughout the process.
              </p>
            </div>

            <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Financial Assistance
              </h3>
              <p className="text-gray-600">
                Help navigating insurance, costs, and financial resources
                available for transplant patients.
              </p>
            </div>

            <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Ongoing Care</h3>
              <p className="text-gray-600">
                Long-term support and monitoring after your transplant to ensure
                the best possible outcomes.
              </p>
            </div>

            <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Support Groups</h3>
              <p className="text-gray-600">
                Connect with other patients and families who understand what
                you're going through.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Journey Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Your Patient Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From diagnosis to recovery, we're with you every step of the way.
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
                Contact us to learn about our services and how we can help you
                find a kidney donor.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">
                Evaluation
              </h3>
              <p className="text-gray-600 text-center">
                We'll evaluate your medical situation and determine the best
                approach for finding a donor.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">
                Donor Search
              </h3>
              <p className="text-gray-600 text-center">
                We'll search our donor registry and network to find potential
                matches for your transplant.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">
                Transplant & Recovery
              </h3>
              <p className="text-gray-600 text-center">
                Once a donor is found, we'll coordinate the transplant and
                provide ongoing support during recovery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Support Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Comprehensive Patient Services
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We understand that facing kidney disease can be overwhelming.
                That's why we provide comprehensive support services to help you
                navigate your journey with confidence.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      Medical Coordination
                    </h3>
                    <p className="text-gray-600">
                      We work with your medical team to coordinate care and
                      ensure you receive the best possible treatment options.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      Insurance Navigation
                    </h3>
                    <p className="text-gray-600">
                      Our team helps you understand your insurance coverage and
                      navigate the complex healthcare system.
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
                      understand what you're going through.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      Family Support
                    </h3>
                    <p className="text-gray-600">
                      We provide support for your family members and help them
                      understand how to best support you during this time.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <img
                src="/images/aigirl.jpg"
                alt="Patient Support"
                className="rounded-lg shadow-2xl max-w-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Patient Stories Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Patient Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              Hear from patients who have successfully received kidney
              transplants
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Star className="w-6 h-6 text-primary mr-2" />
                <h3 className="font-semibold">Maria's Story</h3>
              </div>
              <p className="text-gray-600 mb-4">
                "Kidney Forward helped me find my donor when I thought all hope
                was lost. The support I received was incredible, and now I'm
                living a full, healthy life."
              </p>
              <div className="text-sm text-gray-500">
                - Kidney Recipient, 2023
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Star className="w-6 h-6 text-primary mr-2" />
                <h3 className="font-semibold">David's Journey</h3>
              </div>
              <p className="text-gray-600 mb-4">
                "The team at Kidney Forward guided me through every step of the
                process. They made what seemed impossible possible, and I'm
                forever grateful."
              </p>
              <div className="text-sm text-gray-500">
                - Kidney Recipient, 2022
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Star className="w-6 h-6 text-primary mr-2" />
                <h3 className="font-semibold">Jennifer's Experience</h3>
              </div>
              <p className="text-gray-600 mb-4">
                "After years on dialysis, Kidney Forward helped me find my
                perfect match. The difference in my quality of life is amazing."
              </p>
              <div className="text-sm text-gray-500">
                - Kidney Recipient, 2023
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Patient Resources
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access helpful resources and information to support your kidney
              health journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link
              to="/doctors"
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200"
            >
              <h3 className="text-xl font-semibold mb-3">
                Find Transplant Doctors
              </h3>
              <p className="text-gray-600 mb-4">
                Connect with experienced transplant specialists in your area.
              </p>
              <div className="text-primary font-semibold">Learn More →</div>
            </Link>

            <Link
              to="/transplant-centers"
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200"
            >
              <h3 className="text-xl font-semibold mb-3">Transplant Centers</h3>
              <p className="text-gray-600 mb-4">
                Find accredited transplant centers with excellent outcomes.
              </p>
              <div className="text-primary font-semibold">Learn More →</div>
            </Link>

            <Link
              to="/courses"
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200"
            >
              <h3 className="text-xl font-semibold mb-3">
                Educational Courses
              </h3>
              <p className="text-gray-600 mb-4">
                Learn about kidney health, transplantation, and post-transplant
                care.
              </p>
              <div className="text-primary font-semibold">Learn More →</div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Get Help?
          </h2>
          <p className="text-xl mb-8 text-gray-100 max-w-2xl mx-auto">
            Don't face kidney disease alone. Contact us today to learn how we
            can help you find the kidney donor you need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact-us"
              className="bg-white text-secondary px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </Link>
            <Link
              to="/doctors"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-secondary transition-colors"
            >
              Find Doctors
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Patients;
