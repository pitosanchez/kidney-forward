import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "./ui";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "About Us", href: "/about-us", hasDropdown: true },
    { name: "Donors", href: "/donors" },
    { name: "Patients", href: "/patients" },
    { name: "Get Involved", href: "/get-involved" },
    { name: "Programs", href: "/programs" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50 backdrop-blur-sm bg-white/95">
      {/* Top bar with CTA buttons */}
      <div className="bg-gradient-to-r from-secondary-600 to-primary-500 text-white py-3">
        <div className="container mx-auto px-4 flex justify-center items-center space-x-4 text-sm">
          <a
            href="https://payments.cliq.com/Hosted/kidneyforward"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-secondary-600 px-4 py-2 rounded-full hover:bg-gray-50 transition-all duration-200 font-medium shadow-md hover:shadow-lg"
          >
            Contribute
          </a>
          <Link
            to="/donor-registry"
            className="border-2 border-white text-white px-4 py-2 rounded-full hover:bg-white hover:text-secondary-600 transition-all duration-200 font-medium"
          >
            Become A Donor
          </Link>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 group">
            <img
              src="/images/logo.png"
              alt="Kidney Forward"
              className="h-12 md:h-16 transition-transform duration-200 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div
                    className="flex items-center space-x-1 cursor-pointer hover:text-primary-500 transition-colors duration-200 group"
                    onMouseEnter={() => setIsAboutDropdownOpen(true)}
                    onMouseLeave={() => setIsAboutDropdownOpen(false)}
                  >
                    <span
                      className={`font-medium ${
                        isActive(item.href)
                          ? "text-primary-500"
                          : "text-gray-700"
                      } group-hover:text-primary-500`}
                    >
                      {item.name}
                    </span>
                    <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />

                    {/* Dropdown */}
                    {isAboutDropdownOpen && (
                      <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-xl rounded-xl py-2 z-50 border border-gray-100 animate-fade-in">
                        <Link
                          to="/contact-us"
                          className="block px-4 py-3 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-200"
                        >
                          Contact Us
                        </Link>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={`font-medium transition-colors duration-200 hover:text-primary-500 ${
                      isActive(item.href) ? "text-primary-500" : "text-gray-700"
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button href="/donor-registry" variant="primary" size="md">
              Join Registry
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200 animate-fade-in">
            <nav className="flex flex-col space-y-2 pt-4">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.href}
                    className={`block py-3 px-4 rounded-lg transition-colors duration-200 ${
                      isActive(item.href)
                        ? "text-primary-500 bg-primary-50 font-medium"
                        : "text-gray-700 hover:text-primary-500 hover:bg-gray-50"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.hasDropdown && (
                    <div className="ml-4 mt-2">
                      <Link
                        to="/contact-us"
                        className="block py-2 px-4 text-sm text-gray-600 hover:text-primary-500 transition-colors duration-200"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Contact Us
                      </Link>
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4">
                <Button
                  href="/donor-registry"
                  variant="primary"
                  size="md"
                  className="w-full"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Join Registry
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
