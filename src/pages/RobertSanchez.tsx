import { Link } from "react-router-dom";
import { Mail, Linkedin } from "lucide-react";

const RobertSanchez = () => {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-secondary to-primary text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Robert Sanchez
              </h1>
              <p className="text-xl mb-4">Medical Director</p>
              <p className="text-lg text-gray-100">
                Leading medical oversight and ensuring the highest standards of
                care for our donors and patients.
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src="/images/adrewluu.jpg"
                alt="Robert Sanchez"
                className="rounded-lg shadow-2xl max-w-md"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold mb-6">About Robert</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Dr. Robert Sanchez serves as the Medical Director of Kidney
                  Forward, bringing extensive experience in transplant medicine
                  and patient care to our organization.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  With a background in nephrology and transplant surgery, Dr.
                  Sanchez ensures that all medical protocols meet the highest
                  standards of safety and efficacy.
                </p>
                <p className="text-lg text-gray-600">
                  He is committed to advancing the field of living kidney
                  donation and improving outcomes for both donors and
                  recipients.
                </p>
              </div>
              <div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Contact</h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Mail className="w-4 h-4 mr-2 text-primary" />
                      <a
                        href="mailto:robert@kidneyforward.org"
                        className="text-gray-600 hover:text-primary"
                      >
                        robert@kidneyforward.org
                      </a>
                    </div>
                    <div className="flex items-center">
                      <Linkedin className="w-4 h-4 mr-2 text-primary" />
                      <a href="#" className="text-gray-600 hover:text-primary">
                        LinkedIn Profile
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Medical Questions?
          </h2>
          <p className="text-xl mb-8 text-gray-600 max-w-2xl mx-auto">
            Dr. Sanchez and our medical team are here to answer your questions
            about kidney donation and transplantation.
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

export default RobertSanchez;
