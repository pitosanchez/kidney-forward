import { ReactNode } from "react";
import Container from "./Container";

interface HeroProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
  variant?: "primary" | "secondary" | "accent";
  className?: string;
  image?: string;
  imageAlt?: string;
}

const Hero = ({
  title,
  subtitle,
  children,
  variant = "primary",
  className = "",
  image,
  imageAlt,
}: HeroProps) => {
  const variants = {
    primary: "bg-gradient-to-r from-secondary-600 to-primary-500",
    secondary: "bg-gradient-to-r from-primary-500 to-secondary-600",
    accent: "bg-gradient-to-r from-accent-600 to-primary-500",
  };

  const baseClasses = "text-white py-20 lg:py-32";
  const classes = `${baseClasses} ${variants[variant]} ${className}`;

  return (
    <section className={classes}>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 font-heading">
              {title}
            </h1>
            {subtitle && (
              <p className="text-xl mb-8 text-gray-100 max-w-2xl">{subtitle}</p>
            )}
            {children}
          </div>
          {image && (
            <div className="flex justify-center animate-slide-up">
              <img
                src={image}
                alt={imageAlt || title}
                className="rounded-2xl shadow-2xl max-w-md w-full h-auto object-cover"
              />
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};

export default Hero;
