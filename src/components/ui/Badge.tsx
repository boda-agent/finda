import { type ReactNode } from "react";

type Variant = "default" | "primary" | "accent" | "success" | "error";

interface BadgeProps {
  children: ReactNode;
  variant?: Variant;
  className?: string;
}

const variantStyles: Record<Variant, string> = {
  default: "bg-light-muted text-muted",
  primary: "bg-primary-light text-primary",
  accent: "bg-accent-light text-accent",
  success: "bg-emerald-50 text-success",
  error: "bg-red-50 text-error",
};

export default function Badge({
  children,
  variant = "default",
  className = "",
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
