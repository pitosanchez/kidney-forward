import { ReactNode } from "react";
import Container from "./Container";

interface SectionProps {
  children: ReactNode;
  title?: string;
  subtitle?: string;
  variant?: "default" | "alt";
  className?: string;
  containerClassName?: string;
}

const Section = ({
  children,
  title,
  subtitle,
  variant = "default",
  className = "",
  containerClassName = "",
}: SectionProps) => {
  const baseClasses = "py-20";
  const variantClasses = {
    default: "",
    alt: "bg-gray-50",
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  return (
    <section className={classes}>
      <Container className={containerClassName}>
        {(title || subtitle) && (
          <div className="text-center mb-16">
            {title && (
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 font-heading">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </Container>
    </section>
  );
};

export default Section;
