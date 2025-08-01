import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Heart,
} from "lucide-react";
import { Button, Container } from "./ui";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    about: [
      { name: "About Us", href: "/about-us" },
      { name: "Our Mission", href: "/about-us" },
      { name: "Leadership", href: "/about-us" },
      { name: "Contact Us", href: "/contact-us" },
    ],
    services: [
      { name: "Donor Registry", href: "/donor-registry" },
      { name: "Patient Support", href: "/patients" },
      { name: "Education", href: "/courses" },
      { name: "Get Involved", href: "/get-involved" },
    ],
    resources: [
      { name: "Donor Information", href: "/donors" },
      { name: "Patient Resources", href: "/patients" },
      { name: "Transplant Centers", href: "/transplant-centers" },
      { name: "Corporate Partners", href: "/corporate-partners" },
    ],
  };

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "LinkedIn", icon: Linkedin, href: "#" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="py-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Organization Info */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <img
                  src="/images/logo.png"
                  alt="Kidney Forward"
                  className="h-12 mb-4"
                />
                <p className="text-gray-300 leading-relaxed mb-6">
                  Connecting kidney donors with patients in need, making a
                  difference one kidney at a time through education, support,
                  and advocacy.
                </p>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      className="w-10 h-10 bg-forest-800 rounded-full flex items-center justify-center hover:bg-forest-600 transition-colors duration-200"
                      aria-label={social.name}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* About Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">About</h3>
              <ul className="space-y-3">
                {footerLinks.about.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-300 hover:text-forest-400 transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Services</h3>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-300 hover:text-forest-400 transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Resources */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Resources</h3>
              <ul className="space-y-3 mb-8">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-300 hover:text-forest-400 transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-forest-400" />
                  <span className="text-gray-300">info@kidneyforward.org</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-forest-400" />
                  <span className="text-gray-300">(555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-forest-400" />
                  <span className="text-gray-300">
                    123 Main St, City, State
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Newsletter Signup */}
      <div className="bg-gray-800 py-12">
        <Container>
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Connected</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter for updates on kidney donation,
              patient stories, and ways to get involved in our mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full border border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-forest-500 focus:border-transparent"
              />
              <Button variant="primary" size="md" className="whitespace-nowrap">
                Subscribe
              </Button>
            </div>
          </div>
        </Container>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-950 py-6">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400">
              <span>
                &copy; {currentYear} Kidney Forward. All rights reserved.
              </span>
              <Heart className="w-4 h-4 text-forest-400" />
            </div>
            <div className="flex space-x-6 text-sm">
              <Link
                to="/privacy"
                className="text-gray-400 hover:text-forest-400 transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-gray-400 hover:text-forest-400 transition-colors duration-200"
              >
                Terms of Service
              </Link>
              <Link
                to="/accessibility"
                className="text-gray-400 hover:text-forest-400 transition-colors duration-200"
              >
                Accessibility
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
