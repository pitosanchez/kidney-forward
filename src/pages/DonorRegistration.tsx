import { Link } from "react-router-dom";
import { ArrowRight, Heart } from "lucide-react";

const DonorRegistration = () => {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-secondary to-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Donor Registration
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Ready to take the first step toward saving a life? Register as a
            kidney donor today.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center justify-center mb-6">
                <Heart className="w-12 h-12 text-primary mr-3" />
                <h2 className="text-2xl font-bold">Join the Registry</h2>
              </div>
              <p className="text-gray-600 mb-8">
                Our comprehensive donor registry is the best way to start your
                journey as a kidney donor. You'll receive detailed information
                about the process and ongoing support.
              </p>
              <Link
                to="/donor-registry"
                className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors inline-flex items-center"
              >
                Go to Registry
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Have Questions?
          </h2>
          <p className="text-xl mb-8 text-gray-600 max-w-2xl mx-auto">
            Our team is here to answer any questions you have about kidney
            donation.
          </p>
          <Link
            to="/contact-us"
            className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default DonorRegistration;
