import { Link } from "react-router-dom";
import { Heart, Users, Award, ArrowRight } from "lucide-react";

const GetInvolved = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-secondary to-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">Get Involved</h1>
          <p className="text-xl max-w-3xl mx-auto">
            There are many ways to support our mission to connect kidney donors
            with patients in need.
          </p>
        </div>
      </section>

      {/* Ways to Help Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Ways to Help
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose how you'd like to make a difference in the lives of kidney
              patients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Become a Donor</h3>
              <p className="text-gray-600 mb-6">
                Register as a kidney donor and potentially save someone's life.
              </p>
              <Link
                to="/donor-registry"
                className="bg-primary text-white px-6 py-2 rounded-full font-semibold hover:bg-primary/90 transition-colors inline-flex items-center"
              >
                Join Registry
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Volunteer</h3>
              <p className="text-gray-600 mb-6">
                Help us spread awareness and support our programs in your
                community.
              </p>
              <Link
                to="/contact-us"
                className="bg-primary text-white px-6 py-2 rounded-full font-semibold hover:bg-primary/90 transition-colors inline-flex items-center"
              >
                Contact Us
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Make a Donation</h3>
              <p className="text-gray-600 mb-6">
                Support our mission financially to help us reach more patients
                and donors.
              </p>
              <a
                href="https://payments.cliq.com/Hosted/kidneyforward"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white px-6 py-2 rounded-full font-semibold hover:bg-primary/90 transition-colors inline-flex items-center"
              >
                Donate Now
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl mb-8 text-gray-100 max-w-2xl mx-auto">
            Every action, no matter how small, helps us move closer to our goal
            of eliminating the kidney transplant waitlist.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/donor-registry"
              className="bg-white text-secondary px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Join the Registry
            </Link>
            <Link
              to="/contact-us"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-secondary transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetInvolved;
