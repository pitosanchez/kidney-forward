import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Kidney Forward</h3>
            <p className="text-gray-300">
              Dedicated to helping kidney patients and supporting organ donation awareness.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/about-us" className="hover:text-white">About Us</Link></li>
              <li><Link to="/patients" className="hover:text-white">Patients</Link></li>
              <li><Link to="/donors" className="hover:text-white">Donors</Link></li>
              <li><Link to="/doctors" className="hover:text-white">Doctors</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/courses" className="hover:text-white">Courses</Link></li>
              <li><Link to="/transplant-centers" className="hover:text-white">Transplant Centers</Link></li>
              <li><Link to="/donor-registration" className="hover:text-white">Donor Registry</Link></li>
              <li><Link to="/join-team" className="hover:text-white">Join Our Team</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Email: info@kidneyforward.org</li>
              <li>Phone: (555) 123-4567</li>
              <li><Link to="/contact-us" className="hover:text-white">Contact Form</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Kidney Forward. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;