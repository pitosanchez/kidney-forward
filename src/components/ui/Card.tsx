import { ReactNode } from "react";
import { LucideIcon } from "lucide-react";

interface CardProps {
  children: ReactNode;
  className?: string;
  icon?: LucideIcon;
  iconClassName?: string;
  hover?: boolean;
  padding?: "none" | "sm" | "md" | "lg" | "xl";
}

const Card = ({
  children,
  className = "",
  icon: Icon,
  iconClassName = "",
  hover = true,
  padding = "md",
}: CardProps) => {
  const paddingClasses = {
    none: "",
    sm: "p-4 sm:p-6",
    md: "p-6 sm:p-8",
    lg: "p-8 sm:p-10",
    xl: "p-10 sm:p-12",
  };

  const hoverClass = hover
    ? "hover:shadow-xl hover:scale-105 transition-all duration-300"
    : "";

  return (
    <div
      className={`bg-white rounded-2xl shadow-lg border border-gray-100 ${paddingClasses[padding]} ${hoverClass} ${className}`}
    >
      {Icon && (
        <div className={`mb-4 sm:mb-6 ${iconClassName}`}>
          <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-forest-600" />
        </div>
      )}
      {children}
    </div>
  );
};

export default Card;
