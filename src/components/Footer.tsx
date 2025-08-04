import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { Button, Container } from "./ui";
import { getAssetPath } from "../utils/assetPath";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/about" },
    { name: "Privacy Policy and Terms and Conditions", href: "/privacy" },
  ];

  const programs = [
    { name: "Bobby Lynn Navigator Program", href: "/programs" },
    { name: "Guided Living Donor Program", href: "/programs" },
    { name: "Jentosy Patient Support Program", href: "/programs" },
  ];

  const socialLinks = [
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "LinkedIn", icon: Linkedin, href: "#" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <Container>
        <div className="py-8 sm:py-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Left Column - Subscription Section */}
            <div className="lg:col-span-1">
              {/* Logo */}
              <div className="mb-4">
                <img
                  src={getAssetPath("/images/kflogolong.png")}
                  alt="Kidney Forward"
                  className="h-8 sm:h-10 w-auto"
                />
              </div>

              {/* Subscribe Section */}
              <div>
                <h3 className="text-lg font-bold mb-3">
                  Subscribe for News & Updates
                </h3>
                <div className="space-y-4">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                  />
                  <Button
                    variant="primary"
                    size="md"
                    className="w-full bg-gray-300 text-black font-bold hover:bg-gray-200"
                  >
                    SUBSCRIBE
                  </Button>
                </div>
              </div>
            </div>

            {/* Middle Column - Quick Links */}
            <div className="lg:col-span-1">
              <h3 className="text-lg font-bold mb-3">
                Quick Links
              </h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-white hover:text-gray-300 transition-colors duration-200 text-sm sm:text-base"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column - Programs & Call to Action */}
            <div className="lg:col-span-1">
              <h3 className="text-lg font-bold mb-3">
                Programs
              </h3>
              <ul className="space-y-2 mb-4">
                {programs.map((program) => (
                  <li key={program.name}>
                    <Link
                      to={program.href}
                      className="text-white hover:text-gray-300 transition-colors duration-200 text-sm sm:text-base"
                    >
                      {program.name}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Volunteer Button */}
              <Button
                href="/get-involved"
                variant="primary"
                size="md"
                className="bg-blue-600 text-white font-bold hover:bg-blue-700 mb-4"
              >
                VOLUNTEER →
              </Button>

              {/* Social Media Icons */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-8 h-8 text-white hover:text-gray-300 transition-colors duration-200"
                    aria-label={social.name}
                  >
                    <social.icon className="w-full h-full" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Section - Copyright and Additional Links */}
          <div className="border-t border-gray-800 mt-6 pt-6">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              <div className="text-sm text-gray-400 text-center sm:text-left">
                © 2024 Kidney Forward. All rights reserved.
              </div>
              <div className="flex flex-wrap justify-center sm:justify-end space-x-6 text-sm text-gray-400">
                <Link
                  to="/privacy"
                  className="hover:text-white transition-colors duration-200"
                >
                  Privacy Policy
                </Link>
                <Link
                  to="/terms"
                  className="hover:text-white transition-colors duration-200"
                >
                  Terms of Service
                </Link>
                <Link
                  to="/about"
                  className="hover:text-white transition-colors duration-200"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
