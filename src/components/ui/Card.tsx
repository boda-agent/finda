import { type ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  /** Adds hover lift + shadow transition */
  hoverable?: boolean;
  /** Padding inside the card */
  padding?: "none" | "sm" | "md" | "lg";
}

const paddingStyles = {
  none: "",
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

export default function Card({
  children,
  className = "",
  hoverable = false,
  padding = "md",
}: CardProps) {
  return (
    <div
      className={`rounded-xl border border-border bg-white shadow-sm ${
        paddingStyles[padding]
      } ${
        hoverable
          ? "transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
          : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
