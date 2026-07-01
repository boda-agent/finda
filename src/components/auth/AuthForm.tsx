"use client";

import { type ReactNode, type FormEvent } from "react";

interface AuthFormProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
  onSubmit: (e: FormEvent) => void;
  footer?: ReactNode;
  /** Social login buttons rendered above the form divider */
  socialButtons?: ReactNode;
}

export default function AuthForm({
  title,
  subtitle,
  children,
  onSubmit,
  footer,
  socialButtons,
}: AuthFormProps) {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-light px-4 py-12">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="mb-8 text-center">
          <a href="/" className="inline-flex items-center gap-2 mb-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white font-bold text-lg">
              F
            </div>
            <span className="text-2xl font-bold text-dark">FINDA</span>
          </a>
          <h1 className="text-2xl font-bold text-foreground">{title}</h1>
          {subtitle && (
            <p className="mt-2 text-sm text-muted">{subtitle}</p>
          )}
        </div>

        {/* Card */}
        <div className="rounded-xl border border-border bg-white p-6 shadow-sm sm:p-8">
          {/* Social Buttons */}
          {socialButtons && (
            <>
              <div className="space-y-3">{socialButtons}</div>
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-border" />
                </div>
                <div className="relative flex justify-center text-xs">
                  <span className="bg-white px-3 text-muted">
                    or continue with email
                  </span>
                </div>
              </div>
            </>
          )}

          {/* Form */}
          <form onSubmit={onSubmit} className="space-y-5">
            {children}
          </form>
        </div>

        {/* Footer */}
        {footer && (
          <p className="mt-6 text-center text-sm text-muted">{footer}</p>
        )}
      </div>
    </div>
  );
}
