import { type ButtonHTMLAttributes, type ReactNode, forwardRef } from "react";

type Variant = "primary" | "secondary" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  /** Full-width button */
  fullWidth?: boolean;
  /** Render as an anchor tag */
  href?: string;
}

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-primary text-white hover:bg-primary-hover shadow-sm active:scale-[0.98]",
  secondary:
    "bg-accent text-dark hover:bg-accent-hover shadow-sm active:scale-[0.98]",
  outline:
    "border-2 border-primary text-primary hover:bg-primary-light active:scale-[0.98]",
  ghost:
    "text-primary hover:bg-primary-light active:scale-[0.98]",
};

const sizeStyles: Record<Size, string> = {
  sm: "px-3 py-1.5 text-sm rounded-md gap-1.5",
  md: "px-5 py-2.5 text-sm rounded-lg gap-2",
  lg: "px-7 py-3.5 text-base rounded-lg gap-2.5",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      fullWidth = false,
      href,
      children,
      className = "",
      ...props
    },
    ref,
  ) => {
    const base =
      "inline-flex items-center justify-center font-semibold transition-all duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:opacity-50 disabled:pointer-events-none";

    const classes = `${base} ${variantStyles[variant]} ${sizeStyles[size]} ${
      fullWidth ? "w-full" : ""
    } ${className}`;

    if (href) {
      return (
        <a href={href} className={classes}>
          {children}
        </a>
      );
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";

export default Button;
