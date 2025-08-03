import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { LucideIcon, Loader2 } from "lucide-react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  href?: string;
  onClick?: () => void;
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  type?: "button" | "submit" | "reset";
  fullWidth?: boolean;
}

const Button = ({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  icon: Icon,
  iconPosition = "right",
  className = "",
  disabled = false,
  loading = false,
  type = "button",
  fullWidth = false,
}: ButtonProps) => {
  const baseClasses =
    "inline-flex items-center justify-center font-semibold rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary:
      "bg-forest-600 text-white hover:bg-forest-700 focus:ring-forest-500 shadow-lg hover:shadow-xl",
    secondary:
      "bg-sage-600 text-white hover:bg-sage-700 focus:ring-sage-500 shadow-lg hover:shadow-xl",
    outline:
      "border-2 border-forest-600 text-forest-600 hover:bg-forest-600 hover:text-white focus:ring-forest-500",
    ghost: "text-forest-600 hover:bg-forest-50 focus:ring-forest-500",
  };

  const sizes = {
    xs: "px-3 py-1.5 text-xs",
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
    xl: "px-10 py-5 text-xl",
  };

  const widthClass = fullWidth ? "w-full" : "";

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`;

  const content = (
    <>
      {loading ? (
        <>
          <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 mr-2 animate-spin" />
          <span className="hidden sm:inline">Loading...</span>
        </>
      ) : (
        <>
          {Icon && iconPosition === "left" && (
            <Icon className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
          )}
          {children}
          {Icon && iconPosition === "right" && (
            <Icon className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
          )}
        </>
      )}
    </>
  );

  if (href) {
    return (
      <Link to={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={classes}
    >
      {content}
    </button>
  );
};

export default Button;
