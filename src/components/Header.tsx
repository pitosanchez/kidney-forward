import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Button from "./ui/Button";
import { useHeader } from "../contexts/HeaderContext";
import { getAssetPath } from "../utils/assetPath";

// Types
interface NavigationItem {
  name: string;
  href: string;
}

interface HeaderProps {}

// Constants
const NAVIGATION_ITEMS: NavigationItem[] = [
  { name: "ABOUT", href: "/about" },
  { name: "DONORS", href: "/donors" },
  { name: "PATIENTS", href: "/patients" },
  { name: "GET INVOLVED", href: "/get-involved" },
  { name: "PROGRAMS", href: "/programs" },
];

const ACTION_BUTTONS = [
  {
    text: "Contribute",
    href: "/contribute",
    className: "bg-accent-400 hover:bg-accent-500",
  },
  {
    text: "Become A Donor",
    href: "/donors/register",
    className: "bg-primary-500 hover:bg-primary-600",
  },
];

// Components
const Logo: React.FC = () => (
  <Link to="/" className="flex items-center justify-center lg:ml-16">
    <img
      src={getAssetPath("/images/logowhitesmaller.png")}
      alt="Kidney Forward Logo"
      className="h-8 sm:h-10 md:h-12 object-contain"
    />
  </Link>
);

const NavigationLink: React.FC<{
  item: NavigationItem;
}> = ({ item }) => {
  return (
    <Link
      to={item.href}
      className="text-xs sm:text-sm font-semibold text-white hover:text-primary-200 transition-colors duration-200 tracking-wide whitespace-nowrap"
    >
      {item.name}
    </Link>
  );
};

const DesktopNavigation: React.FC<{
  items: NavigationItem[];
}> = ({ items }) => {
  return (
    <nav className="hidden lg:flex items-center justify-center flex-1 px-4 sm:px-8">
      <div className="flex items-center justify-center space-x-4 sm:space-x-6 lg:space-x-8">
        {items.map((item) => (
          <div key={item.name} className="relative">
            <NavigationLink item={item} />
          </div>
        ))}
      </div>
    </nav>
  );
};

const ActionButtons: React.FC<{ buttons: typeof ACTION_BUTTONS }> = ({
  buttons,
}) => (
  <div className="hidden lg:flex items-center justify-end space-x-2 sm:space-x-4">
    {buttons.map((button) => (
      <Button
        key={button.text}
        href={button.href}
        variant="primary"
        size="sm"
        className={`${button.className} text-white font-semibold px-3 sm:px-6 py-2 rounded-full text-xs sm:text-sm whitespace-nowrap`}
      >
        {button.text}
      </Button>
    ))}
  </div>
);

const MobileMenuButton: React.FC<{
  isOpen: boolean;
  onToggle: () => void;
}> = ({ isOpen, onToggle }) => (
  <div className="lg:hidden">
    <button
      onClick={onToggle}
      className="text-white hover:text-primary-200 transition-colors duration-200 p-2"
      aria-label={isOpen ? "Close menu" : "Open menu"}
    >
      {isOpen ? (
        <X className="w-5 h-5 sm:w-6 sm:h-6" />
      ) : (
        <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
      )}
    </button>
  </div>
);

const MobileNavigation: React.FC<{
  items: NavigationItem[];
  isOpen: boolean;
  onClose: () => void;
  buttons: typeof ACTION_BUTTONS;
}> = ({ items, isOpen, onClose, buttons }) => {
  if (!isOpen) return null;

  return (
    <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-xl border-t border-gray-300">
      <div className="px-4 pt-4 pb-6 space-y-2 sm:space-y-3">
        {items.map((item) => (
          <Link
            key={item.name}
            to={item.href}
            className="block px-4 py-3 text-base sm:text-lg font-semibold text-slate-700 hover:text-slate-900 hover:bg-gray-50 rounded-lg transition-colors duration-200 cursor-pointer"
            onClick={onClose}
          >
            {item.name}
          </Link>
        ))}
        <div className="pt-4 space-y-3 border-t border-gray-300">
          {buttons.map((button) => (
            <Button
              key={button.text}
              href={button.href}
              variant="primary"
              size="sm"
              fullWidth
              className={`${button.className} text-white font-semibold rounded-full`}
            >
              {button.text}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

// Main Component
const Header: React.FC<HeaderProps> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isTransparent } = useHeader();

  const handleMobileMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMobileMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isTransparent
          ? "bg-secondary-600/80 backdrop-blur-md border-b border-secondary-300/30"
          : "bg-secondary-600/95 backdrop-blur-md border-b border-secondary-300/50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <div className="flex items-center">
            <Logo />
          </div>

          <DesktopNavigation items={NAVIGATION_ITEMS} />

          <div className="flex items-center space-x-2 sm:space-x-4">
            <ActionButtons buttons={ACTION_BUTTONS} />

            <MobileMenuButton
              isOpen={isMenuOpen}
              onToggle={handleMobileMenuToggle}
            />
          </div>
        </div>

        <MobileNavigation
          items={NAVIGATION_ITEMS}
          isOpen={isMenuOpen}
          onClose={handleMobileMenuClose}
          buttons={ACTION_BUTTONS}
        />
      </div>
    </header>
  );
};

export default Header;
