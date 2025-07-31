import { Heart, CreditCard } from "lucide-react";

const DonationForm = () => {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-secondary to-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Make a Donation
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Support our mission to connect kidney donors with patients in need.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center justify-center mb-6">
                <Heart className="w-12 h-12 text-primary mr-3" />
                <h2 className="text-2xl font-bold">
                  Thank You for Your Support
                </h2>
              </div>
              <p className="text-gray-600 mb-8">
                Your donation helps us continue our work connecting donors with
                patients and providing education and support.
              </p>
              <a
                href="https://payments.cliq.com/Hosted/kidneyforward"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors inline-flex items-center"
              >
                <CreditCard className="w-5 h-5 mr-2" />
                Donate Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DonationForm;
