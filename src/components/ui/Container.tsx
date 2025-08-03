import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "main";
  size?: "sm" | "md" | "lg" | "xl" | "full";
}

const Container = ({
  children,
  className = "",
  as: Component = "div",
  size = "lg",
}: ContainerProps) => {
  const sizeClasses = {
    sm: "max-w-4xl",
    md: "max-w-5xl",
    lg: "max-w-7xl",
    xl: "max-w-8xl",
    full: "max-w-none",
  };

  return (
    <Component
      className={`mx-auto px-4 sm:px-6 lg:px-8 ${sizeClasses[size]} ${className}`}
    >
      {children}
    </Component>
  );
};

export default Container;
