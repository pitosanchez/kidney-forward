import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import Button from "./ui/Button";
import { useHeader } from "../contexts/HeaderContext";

// Types
interface NavigationItem {
  name: string;
  href: string;
  hasDropdown?: boolean;
  dropdownItems?: Array<{
    name: string;
    href: string;
  }>;
}

interface HeaderProps {}

// Constants
const NAVIGATION_ITEMS: NavigationItem[] = [
  {
    name: "ABOUT US",
    href: "/about",
    hasDropdown: true,
    dropdownItems: [
      { name: "Our Mission", href: "/about/mission" },
      { name: "Our Team", href: "/about/team" },
      { name: "Our Story", href: "/about/story" },
    ],
  },
  { name: "DONORS", href: "/donors" },
  { name: "PATIENTS", href: "/patients" },
  { name: "GET INVOLVED", href: "/get-involved" },
  { name: "PROGRAMS", href: "/programs" },
];

const ACTION_BUTTONS = [
  {
    text: "Contribute",
    href: "/contribute",
    className: "bg-green-500 hover:bg-green-600",
  },
  {
    text: "Become A Donor",
    href: "/become-donor",
    className: "bg-blue-600 hover:bg-blue-700",
  },
];

// Components
const Logo: React.FC = () => (
  <Link to="/" className="flex items-center">
    <img
      src="/images/logowhitesmaller.png"
      alt="Kidney Forward Logo"
      className="h-10 md:h-12"
    />
  </Link>
);

const NavigationLink: React.FC<{
  item: NavigationItem;
  onDropdownToggle: (isOpen: boolean) => void;
}> = ({ item, onDropdownToggle }) => {
  if (item.hasDropdown) {
    return (
      <div
        className="flex items-center space-x-1 cursor-pointer text-white hover:text-gray-200 transition-colors duration-200 whitespace-nowrap"
        onMouseEnter={() => onDropdownToggle(true)}
        onMouseLeave={() => onDropdownToggle(false)}
      >
        <span className="text-sm font-semibold tracking-wide">{item.name}</span>
        <ChevronDown className="w-4 h-4 transition-transform duration-200" />
      </div>
    );
  }

  return (
    <Link
      to={item.href}
      className="text-sm font-semibold text-white hover:text-gray-200 transition-colors duration-200 tracking-wide whitespace-nowrap"
    >
      {item.name}
    </Link>
  );
};

const DropdownMenu: React.FC<{
  items: Array<{ name: string; href: string }>;
  isOpen: boolean;
}> = ({ items, isOpen }) => {
  if (!isOpen) return null;

  return (
    <div className="absolute top-full left-0 mt-4 w-48 bg-white rounded-lg shadow-xl border border-gray-200 z-50">
      {items.map((dropdownItem) => (
        <Link
          key={dropdownItem.name}
          to={dropdownItem.href}
          className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200"
        >
          {dropdownItem.name}
        </Link>
      ))}
    </div>
  );
};

const DesktopNavigation: React.FC<{
  items: NavigationItem[];
  isAboutDropdownOpen: boolean;
  onAboutDropdownToggle: (isOpen: boolean) => void;
}> = ({ items, isAboutDropdownOpen, onAboutDropdownToggle }) => (
  <nav className="hidden lg:flex items-center justify-center flex-1 px-8">
    <div className="flex items-center space-x-8">
      {items.map((item) => (
        <div key={item.name} className="relative">
          <NavigationLink
            item={item}
            onDropdownToggle={onAboutDropdownToggle}
          />
          {item.hasDropdown && item.dropdownItems && (
            <DropdownMenu
              items={item.dropdownItems}
              isOpen={isAboutDropdownOpen}
            />
          )}
        </div>
      ))}
    </div>
  </nav>
);

const ActionButtons: React.FC<{ buttons: typeof ACTION_BUTTONS }> = ({
  buttons,
}) => (
  <div className="hidden lg:flex items-center space-x-4">
    {buttons.map((button) => (
      <Button
        key={button.text}
        href={button.href}
        variant="primary"
        size="sm"
        className={`${button.className} text-white font-semibold px-6 py-2 rounded-full`}
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
      className="text-white hover:text-gray-200 transition-colors duration-200 p-2"
    >
      {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
    <div className="lg:hidden">
      <div className="px-4 pt-4 pb-6 space-y-3 bg-white/95 backdrop-blur-sm rounded-lg mt-4 shadow-xl">
        {items.map((item) => (
          <Link
            key={item.name}
            to={item.href}
            className="block px-4 py-3 text-base font-semibold text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors duration-200"
            onClick={onClose}
          >
            {item.name}
          </Link>
        ))}
        <div className="pt-4 space-y-3 border-t border-gray-200">
          {buttons.map((button) => (
            <Button
              key={button.text}
              href={button.href}
              variant="primary"
              size="sm"
              className={`w-full ${button.className} text-white font-semibold rounded-full`}
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
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const { isTransparent } = useHeader();

  const handleAboutDropdownToggle = (isOpen: boolean) => {
    setIsAboutDropdownOpen(isOpen);
  };

  const handleMobileMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMobileMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${isTransparent ? "bg-transparent" : "bg-slate-800"}`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Logo />

          <DesktopNavigation
            items={NAVIGATION_ITEMS}
            isAboutDropdownOpen={isAboutDropdownOpen}
            onAboutDropdownToggle={handleAboutDropdownToggle}
          />

          <ActionButtons buttons={ACTION_BUTTONS} />

          <MobileMenuButton
            isOpen={isMenuOpen}
            onToggle={handleMobileMenuToggle}
          />
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
