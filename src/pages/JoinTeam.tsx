import { Link } from "react-router-dom";
import { Users, Briefcase, Heart } from "lucide-react";

const JoinTeam = () => {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-secondary to-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">Join Our Team</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Help us make a difference in the lives of kidney patients and
            donors.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Career Opportunities
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join our dedicated team working to connect donors with patients in
              need.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Users className="w-6 h-6 text-primary mr-2" />
                <h3 className="text-xl font-semibold">Patient Coordinator</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Help patients navigate their transplant journey.
              </p>
              <Link
                to="/contact-us"
                className="text-primary hover:text-primary/80 transition-colors"
              >
                Apply Now →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Briefcase className="w-6 h-6 text-primary mr-2" />
                <h3 className="text-xl font-semibold">Program Manager</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Manage our educational and support programs.
              </p>
              <Link
                to="/contact-us"
                className="text-primary hover:text-primary/80 transition-colors"
              >
                Apply Now →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Heart className="w-6 h-6 text-primary mr-2" />
                <h3 className="text-xl font-semibold">Volunteer Coordinator</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Coordinate volunteer activities and community outreach.
              </p>
              <Link
                to="/contact-us"
                className="text-primary hover:text-primary/80 transition-colors"
              >
                Apply Now →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Interested in Joining?
          </h2>
          <p className="text-xl mb-8 text-gray-600 max-w-2xl mx-auto">
            Contact us to learn more about current opportunities and how you can
            contribute to our mission.
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

export default JoinTeam;
