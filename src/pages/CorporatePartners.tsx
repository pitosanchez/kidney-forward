import { Link } from "react-router-dom";
import { Building, Handshake, Award } from "lucide-react";

const CorporatePartners = () => {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-secondary to-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Corporate Partners
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Join us in our mission to connect kidney donors with patients in
            need.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Partnership Opportunities
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Partner with us to make a difference in the lives of kidney
              patients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Corporate Sponsorship
              </h3>
              <p className="text-gray-600">
                Support our programs and initiatives through corporate
                sponsorship.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Handshake className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Employee Programs</h3>
              <p className="text-gray-600">
                Engage your employees in our mission through volunteer
                opportunities.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Recognition</h3>
              <p className="text-gray-600">
                Get recognized for your commitment to saving lives through
                kidney donation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Interested in Partnering?
          </h2>
          <p className="text-xl mb-8 text-gray-600 max-w-2xl mx-auto">
            Contact us to learn more about partnership opportunities and how
            your organization can help.
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

export default CorporatePartners;
