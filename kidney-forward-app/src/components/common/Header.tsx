import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-primary">
            Kidney Forward
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {/* About Us Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('about')}
                className="flex items-center space-x-1 text-gray-700 hover:text-primary transition-colors"
              >
                <span>About Us</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openDropdown === 'about' && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2">
                  <Link to="/about-us" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    About Kidney Forward
                  </Link>
                  <Link to="/andrew-luu" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Andrew Luu
                  </Link>
                  <Link to="/robert-sanchez" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Robert Sanchez
                  </Link>
                </div>
              )}
            </div>

            <Link to="/patients" className="text-gray-700 hover:text-primary transition-colors">
              Patients
            </Link>
            <Link to="/donors" className="text-gray-700 hover:text-primary transition-colors">
              Donors
            </Link>
            <Link to="/doctors" className="text-gray-700 hover:text-primary transition-colors">
              Doctors
            </Link>
            <Link to="/courses" className="text-gray-700 hover:text-primary transition-colors">
              Courses
            </Link>
            <Link to="/transplant-centers" className="text-gray-700 hover:text-primary transition-colors">
              Transplant Centers
            </Link>
            <Link to="/corporate-partners" className="text-gray-700 hover:text-primary transition-colors">
              Corporate Partners
            </Link>
            <Link to="/get-involved" className="text-gray-700 hover:text-primary transition-colors">
              Get Involved
            </Link>
            <Link to="/contact-us" className="text-gray-700 hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>

          {/* Donate Button */}
          <div className="hidden lg:block">
            <Link
              to="/donation-form"
              className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary-dark transition-colors"
            >
              Donate
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-gray-700"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t">
            <Link to="/about-us" className="block py-2 text-gray-700 hover:text-primary">
              About Us
            </Link>
            <Link to="/patients" className="block py-2 text-gray-700 hover:text-primary">
              Patients
            </Link>
            <Link to="/donors" className="block py-2 text-gray-700 hover:text-primary">
              Donors
            </Link>
            <Link to="/doctors" className="block py-2 text-gray-700 hover:text-primary">
              Doctors
            </Link>
            <Link to="/courses" className="block py-2 text-gray-700 hover:text-primary">
              Courses
            </Link>
            <Link to="/transplant-centers" className="block py-2 text-gray-700 hover:text-primary">
              Transplant Centers
            </Link>
            <Link to="/corporate-partners" className="block py-2 text-gray-700 hover:text-primary">
              Corporate Partners
            </Link>
            <Link to="/get-involved" className="block py-2 text-gray-700 hover:text-primary">
              Get Involved
            </Link>
            <Link to="/contact-us" className="block py-2 text-gray-700 hover:text-primary">
              Contact
            </Link>
            <Link
              to="/donation-form"
              className="block mt-4 bg-primary text-white text-center px-6 py-2 rounded-md hover:bg-primary-dark transition-colors"
            >
              Donate
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;