import { Phone, Award } from "lucide-react";
import { Button } from "../components/ui";

const TransplantCenters = () => {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-secondary to-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Transplant Centers
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Find accredited transplant centers with excellent outcomes and
            experienced teams.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Accredited Centers
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our partner transplant centers maintain the highest standards of
              care and safety.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Award className="w-6 h-6 text-primary mr-2" />
                <h3 className="text-xl font-semibold">Memorial Hospital</h3>
              </div>
              <p className="text-gray-600 mb-4">New York, NY</p>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  <span>(555) 123-4567</span>
                </div>
                <p className="text-sm">Success Rate: 95%</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Award className="w-6 h-6 text-primary mr-2" />
                <h3 className="text-xl font-semibold">City Medical Center</h3>
              </div>
              <p className="text-gray-600 mb-4">Los Angeles, CA</p>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  <span>(555) 234-5678</span>
                </div>
                <p className="text-sm">Success Rate: 93%</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Award className="w-6 h-6 text-primary mr-2" />
                <h3 className="text-xl font-semibold">Regional Hospital</h3>
              </div>
              <p className="text-gray-600 mb-4">Chicago, IL</p>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  <span>(555) 345-6789</span>
                </div>
                <p className="text-sm">Success Rate: 94%</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Need Help Choosing?
          </h2>
          <p className="text-xl mb-8 text-gray-600 max-w-2xl mx-auto">
            Our team can help you find the right transplant center for your
            specific needs.
          </p>
          <Button
            href="/contact-us"
            className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors"
          >
            Get Guidance
          </Button>
        </div>
      </section>
    </div>
  );
};

export default TransplantCenters;
