import React from "react";
import Button from "./ui/Button";
import { getAssetPath } from "../utils/assetPath";

const Hero: React.FC = () => {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${getAssetPath("/images/desktop-tree.webp")})`,
      }}
    >
      {/* Simple overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content Container */}
      <div className="relative z-10 flex items-center min-h-screen px-8 lg:px-16">
        <div className="max-w-2xl text-white">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Save a Life
            <img
              src={getAssetPath("/images/logo2.png")}
              alt="Kidney Forward Logo"
              className="inline-block h-12 md:h-16 ml-4 align-middle"
            />
          </h1>

          {/* Sub-heading */}
          <p className="text-xl md:text-2xl mb-8 font-light">
            HELP US ERADICATE THE KIDNEY TRANSPLANT WAITLIST
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              href="/programs"
              variant="primary"
              size="lg"
            >
              Explore Programs
            </Button>
            <Button
              href="/get-involved"
              variant="outline"
              size="lg"
            >
              Get Involved
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;