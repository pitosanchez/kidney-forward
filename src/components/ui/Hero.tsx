import { ReactNode } from "react";

interface HeroProps {
  title: ReactNode;
  subtitle?: ReactNode;
  description?: ReactNode;
  image?: string;
  backgroundImage?: string;
  backgroundVariant?: "gradient" | "image" | "solid";
  className?: string;
  children?: ReactNode;
  overlay?: boolean;
  overlayOpacity?: number;
}

const Hero = ({
  title,
  subtitle,
  description,
  image,
  backgroundImage,
  backgroundVariant = "gradient",
  className = "",
  children,
  overlay = true,
  overlayOpacity = 0.5,
}: HeroProps) => {
  const getBackgroundClasses = () => {
    switch (backgroundVariant) {
      case "image":
        return backgroundImage
          ? `bg-cover bg-center bg-no-repeat`
          : "bg-gradient-to-br from-forest-600 to-sage-600";
      case "solid":
        return "bg-forest-600";
      default:
        return "bg-gradient-to-br from-forest-600 via-sage-600 to-accent-600";
    }
  };

  const backgroundStyle = backgroundImage
    ? { backgroundImage: `url(${backgroundImage})` }
    : {};

  return (
    <section
      className={`relative min-h-screen flex items-center justify-center ${getBackgroundClasses()} ${className}`}
      style={backgroundStyle}
    >
      {overlay && (
        <div
          className="absolute inset-0 bg-black"
          style={{ opacity: overlayOpacity }}
        ></div>
      )}

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            {subtitle && (
              <div className="text-forest-200 text-sm sm:text-base font-semibold uppercase tracking-wide mb-4">
                {subtitle}
              </div>
            )}

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              {title}
            </h1>

            {description && (
              <p className="text-lg sm:text-xl md:text-2xl text-forest-100 mb-8 max-w-3xl mx-auto lg:mx-0 leading-relaxed">
                {description}
              </p>
            )}

            {children}
          </div>

          {/* Image */}
          {image && (
            <div className="hidden lg:block">
              <img
                src={image}
                alt="Hero"
                className="w-full h-auto max-w-lg mx-auto rounded-2xl shadow-2xl"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
