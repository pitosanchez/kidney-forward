import { Link } from "react-router-dom";
import { Mail, Linkedin } from "lucide-react";

const AndrewLuu = () => {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-secondary to-primary text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Andrew Luu
              </h1>
              <p className="text-xl mb-4">Executive Director</p>
              <p className="text-lg text-gray-100">
                Leading Kidney Forward's mission to connect donors with patients
                in need.
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src="/images/adrewluu.jpg"
                alt="Andrew Luu"
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
                <h2 className="text-3xl font-bold mb-6">About Andrew</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Andrew Luu serves as the Executive Director of Kidney Forward,
                  bringing years of experience in healthcare management and
                  patient advocacy to our organization.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Under his leadership, Kidney Forward has expanded its reach
                  and impact, connecting thousands of donors with patients in
                  need of kidney transplants.
                </p>
                <p className="text-lg text-gray-600">
                  Andrew is passionate about making kidney donation accessible
                  to all and works tirelessly to ensure that every patient has
                  the opportunity to find a living donor.
                </p>
              </div>
              <div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Contact</h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Mail className="w-4 h-4 mr-2 text-primary" />
                      <a
                        href="mailto:andrew@kidneyforward.org"
                        className="text-gray-600 hover:text-primary"
                      >
                        andrew@kidneyforward.org
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
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Get in Touch</h2>
          <p className="text-xl mb-8 text-gray-600 max-w-2xl mx-auto">
            Have questions about Kidney Forward? Andrew and our team are here to
            help.
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

export default AndrewLuu;
