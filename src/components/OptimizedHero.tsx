import React, { useState, useEffect } from "react";
import Button from "./ui/Button";
import { getAssetPath } from "../utils/assetPath";

const OptimizedHero: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const heroImage = getAssetPath("/images/desktop-tree.webp");

  useEffect(() => {
    // Preload hero image
    const img = new Image();
    img.src = heroImage;
    img.onload = () => setImageLoaded(true);
  }, [heroImage]);

  return (
    <section className="relative min-h-screen bg-slate-700">
      {/* Placeholder gradient while image loads */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-700 to-secondary-700"></div>

      {/* Hero image with fade-in effect */}
      <div
        className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
          imageLoaded ? "opacity-100" : "opacity-0"
        }`}
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/5"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex items-center min-h-screen px-8 lg:px-16">
        <div className="max-w-2xl text-white animate-fade-in">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Save a Life
            <img
              src={getAssetPath("/images/logo2.png")}
              alt="Kidney Forward Logo"
              className="inline-block h-12 md:h-16 ml-4 align-middle"
              loading="eager"
            />
          </h1>

          {/* Sub-heading */}
          <p className="text-xl md:text-2xl mb-8 font-light">
            HELP US ERADICATE THE KIDNEY TRANSPLANT WAITLIST
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button href="/programs" variant="primary" size="lg">
              Explore Programs
            </Button>
            <Button href="/get-involved" variant="primary" size="lg">
              Get Involved
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OptimizedHero;
