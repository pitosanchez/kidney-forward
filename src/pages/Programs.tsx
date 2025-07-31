import { Link } from "react-router-dom";
import { BookOpen, Users, Heart } from "lucide-react";

const Programs = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-secondary to-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">Our Programs</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Comprehensive education and support programs designed to help
            donors, patients, and healthcare professionals.
          </p>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Educational Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Learn about kidney donation, transplantation, and how to support
              patients in need.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">
                Donor Education
              </h3>
              <p className="text-gray-600 text-center mb-6">
                Comprehensive education about the kidney donation process,
                risks, and benefits.
              </p>
              <Link
                to="/donors"
                className="block text-center text-primary hover:text-primary/80 transition-colors"
              >
                Learn More →
              </Link>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">
                Patient Support
              </h3>
              <p className="text-gray-600 text-center mb-6">
                Support programs for patients and families navigating the
                transplant journey.
              </p>
              <Link
                to="/patients"
                className="block text-center text-primary hover:text-primary/80 transition-colors"
              >
                Learn More →
              </Link>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">
                Healthcare Training
              </h3>
              <p className="text-gray-600 text-center mb-6">
                Training programs for healthcare professionals on living
                donation best practices.
              </p>
              <Link
                to="/contact-us"
                className="block text-center text-primary hover:text-primary/80 transition-colors"
              >
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Join Our Programs
          </h2>
          <p className="text-xl mb-8 text-gray-100 max-w-2xl mx-auto">
            Whether you're a potential donor, patient, or healthcare
            professional, our programs can help you make a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact-us"
              className="bg-white text-secondary px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Started
            </Link>
            <Link
              to="/courses"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-secondary transition-colors"
            >
              View Courses
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;
