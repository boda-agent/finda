import { type InputHTMLAttributes, type ReactNode, forwardRef } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  /** Icon element rendered on the left side of the input */
  icon?: ReactNode;
  className?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, icon, className = "", id, ...props }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className={`w-full ${className}`}>
        {label && (
          <label
            htmlFor={inputId}
            className="mb-1.5 block text-sm font-medium text-foreground"
          >
            {label}
          </label>
        )}
        <div className="relative">
          {icon && (
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-muted">
              {icon}
            </div>
          )}
          <input
            ref={ref}
            id={inputId}
            className={`block w-full rounded-lg border bg-white px-4 py-2.5 text-sm text-foreground shadow-sm transition-colors placeholder:text-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 ${
              icon ? "pl-10" : ""
            } ${
              error
                ? "border-error focus:border-error focus:ring-error/20"
                : "border-border"
            }`}
            {...props}
          />
        </div>
        {error && <p className="mt-1.5 text-xs text-error">{error}</p>}
      </div>
    );
  },
);

Input.displayName = "Input";

export default Input;
