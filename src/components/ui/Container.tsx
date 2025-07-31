import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "main";
}

const Container = ({
  children,
  className = "",
  as: Component = "div",
}: ContainerProps) => {
  return (
    <Component className={`container mx-auto px-4 ${className}`}>
      {children}
    </Component>
  );
};

export default Container;
