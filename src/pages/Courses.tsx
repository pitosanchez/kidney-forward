import { Link } from "react-router-dom";
import { BookOpen, Clock, Users } from "lucide-react";

const Courses = () => {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-secondary to-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Educational Courses
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Learn about kidney health, donation, and transplantation through our
            comprehensive courses.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <BookOpen className="w-6 h-6 text-primary mr-2" />
                <h3 className="text-xl font-semibold">Kidney Donation 101</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Learn the basics of kidney donation and the donation process.
              </p>
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <Clock className="w-4 h-4 mr-1" />
                <span>2 hours</span>
                <Users className="w-4 h-4 ml-4 mr-1" />
                <span>Beginner</span>
              </div>
              <Link
                to="/contact-us"
                className="text-primary hover:text-primary/80 transition-colors"
              >
                Enroll Now →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <BookOpen className="w-6 h-6 text-primary mr-2" />
                <h3 className="text-xl font-semibold">Patient Support</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Understanding the transplant journey from a patient perspective.
              </p>
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <Clock className="w-4 h-4 mr-1" />
                <span>3 hours</span>
                <Users className="w-4 h-4 ml-4 mr-1" />
                <span>Intermediate</span>
              </div>
              <Link
                to="/contact-us"
                className="text-primary hover:text-primary/80 transition-colors"
              >
                Enroll Now →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <BookOpen className="w-6 h-6 text-primary mr-2" />
                <h3 className="text-xl font-semibold">
                  Healthcare Professional Training
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                Advanced training for healthcare professionals on living
                donation.
              </p>
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <Clock className="w-4 h-4 mr-1" />
                <span>4 hours</span>
                <Users className="w-4 h-4 ml-4 mr-1" />
                <span>Advanced</span>
              </div>
              <Link
                to="/contact-us"
                className="text-primary hover:text-primary/80 transition-colors"
              >
                Enroll Now →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Learn?
          </h2>
          <p className="text-xl mb-8 text-gray-600 max-w-2xl mx-auto">
            Contact us to enroll in our educational courses and expand your
            knowledge.
          </p>
          <Link
            to="/contact-us"
            className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors"
          >
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Courses;
