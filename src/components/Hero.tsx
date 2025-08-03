import React from "react";
import Button from "./ui/Button";

const Hero: React.FC = () => {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url(/images/desktop-tree.webp)",
      }}
    >
      {/* Enhanced vibrant overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/10"></div>

      {/* Content Container with better positioning */}
      <div className="relative z-10 flex items-center min-h-screen px-8 lg:px-16">
        {/* Left Content - Repositioned to left side */}
        <div className="flex-1 max-w-2xl text-white">
          {/* Enhanced Main Heading with dramatic typography */}
          <div className="mb-8">
            <h1 className="text-7xl md:text-9xl font-black leading-none mb-6">
              <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent drop-shadow-2xl">
                Save a
              </span>
              <br />
              <div className="flex items-center space-x-8">
                <span className="bg-gradient-to-r from-green-300 via-emerald-200 to-blue-300 bg-clip-text text-transparent drop-shadow-2xl">
                  Life
                </span>
                <img
                  src="/images/logo2.png"
                  alt="Kidney Forward Logo"
                  className="h-16 md:h-20 opacity-90 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </h1>
            {/* Enhanced decorative line */}
            <div className="w-32 h-1 bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 rounded-full shadow-lg"></div>
          </div>

          {/* Enhanced Sub-heading with better typography */}
          <p className="text-2xl md:text-4xl mb-10 font-light leading-relaxed text-gray-100 tracking-wide">
            HELP US{" "}
            <span className="font-bold text-green-300 drop-shadow-lg">
              ERADICATE
            </span>{" "}
            THE{" "}
            <span className="font-bold text-blue-300 drop-shadow-lg">
              KIDNEY TRANSPLANT
            </span>{" "}
            <span className="font-bold text-purple-300 drop-shadow-lg">
              WAITLIST
            </span>
          </p>

          {/* Enhanced Call to Action Buttons with better spacing */}
          <div className="flex flex-col sm:flex-row gap-6 mb-12">
            <Button
              href="/programs"
              variant="outline"
              size="lg"
              className="bg-white/95 text-black border-2 border-white hover:bg-white hover:shadow-2xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Explore Programs
            </Button>
            <Button
              href="/get-involved"
              variant="ghost"
              size="lg"
              className="text-white border-2 border-white/80 hover:bg-white/10 hover:border-white font-bold transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
            >
              Get Involved
            </Button>
          </div>

          {/* Enhanced decorative elements with better visual hierarchy */}
          <div className="flex items-center space-x-8 text-sm text-gray-200">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full animate-pulse"></div>
              <span className="font-medium">Join the Movement</span>
            </div>
            <div className="flex items-center space-x-3">
              <div
                className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse"
                style={{ animationDelay: "0.5s" }}
              ></div>
              <span className="font-medium">Make a Difference</span>
            </div>
          </div>
        </div>

        {/* Right side - Empty space to showcase the beautiful background */}
        <div className="hidden lg:block flex-1"></div>
      </div>

      {/* Enhanced bottom decorative elements with better positioning */}
      <div className="absolute bottom-8 left-0 right-0 opacity-40">
        <div className="flex justify-center space-x-12">
          <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full animate-pulse shadow-lg"></div>
          <div
            className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse shadow-lg"
            style={{ animationDelay: "0.5s" }}
          ></div>
          <div
            className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse shadow-lg"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
