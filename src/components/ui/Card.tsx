import { ReactNode } from "react";
import { LucideIcon } from "lucide-react";

interface CardProps {
  children: ReactNode;
  variant?: "default" | "elevated" | "outlined";
  className?: string;
  icon?: LucideIcon;
  iconColor?: string;
  iconBgColor?: string;
}

const Card = ({
  children,
  variant = "default",
  className = "",
  icon: Icon,
  iconColor = "text-primary-500",
  iconBgColor = "bg-primary-50",
}: CardProps) => {
  const baseClasses = "rounded-xl transition-all duration-200";

  const variants = {
    default: "bg-white shadow-md hover:shadow-lg",
    elevated: "bg-white shadow-xl hover:shadow-2xl",
    outlined: "bg-white border-2 border-gray-200 hover:border-primary-300",
  };

  const classes = `${baseClasses} ${variants[variant]} ${className}`;

  return (
    <div className={classes}>
      {Icon && (
        <div
          className={`${iconBgColor} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}
        >
          <Icon className={`w-8 h-8 ${iconColor}`} />
        </div>
      )}
      {children}
    </div>
  );
};

export default Card;
