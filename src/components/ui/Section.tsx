import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  title?: ReactNode;
  subtitle?: ReactNode;
  background?: "white" | "gray" | "primary" | "secondary" | "accent" | "dark";
  padding?: "none" | "sm" | "md" | "lg" | "xl" | "2xl";
  container?: boolean;
  containerSize?: "sm" | "md" | "lg" | "xl" | "full";
}

const Section = ({
  children,
  className = "",
  title,
  subtitle,
  background = "white",
  padding = "lg",
  container = true,
  containerSize = "lg",
}: SectionProps) => {
  const backgroundClasses = {
    white: "bg-white",
    gray: "bg-gray-50",
    primary: "bg-forest-600 text-white",
    secondary: "bg-sage-600 text-white",
    accent: "bg-accent-600 text-white",
    dark: "bg-gray-900 text-white",
  };

  const paddingClasses = {
    none: "",
    sm: "py-8 sm:py-12",
    md: "py-12 sm:py-16",
    lg: "py-16 sm:py-20",
    xl: "py-20 sm:py-24",
    "2xl": "py-24 sm:py-32",
  };

  const containerSizes = {
    sm: "max-w-4xl",
    md: "max-w-5xl",
    lg: "max-w-7xl",
    xl: "max-w-8xl",
    full: "max-w-none",
  };

  const content = (
    <>
      {(title || subtitle) && (
        <div className="text-center mb-12 sm:mb-16">
          {subtitle && (
            <div className="text-sm sm:text-base font-semibold uppercase tracking-wide mb-4 text-forest-600">
              {subtitle}
            </div>
          )}
          {title && (
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {title}
            </h2>
          )}
        </div>
      )}
      {children}
    </>
  );

  return (
    <section
      className={`${backgroundClasses[background]} ${paddingClasses[padding]} ${className}`}
    >
      {container ? (
        <div
          className={`mx-auto px-4 sm:px-6 lg:px-8 ${containerSizes[containerSize]}`}
        >
          {content}
        </div>
      ) : (
        content
      )}
    </section>
  );
};

export default Section;
