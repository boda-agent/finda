"use client";

import { type ReactNode } from "react";
import Sidebar from "@/components/dashboard/Sidebar";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex min-h-[calc(100vh-4rem)]">
      {/* Sidebar */}
      <Sidebar isProvider={false} />

      {/* Main Content */}
      <div className="flex-1">
        {/* Top Bar */}
        <div className="sticky top-16 z-30 flex h-14 items-center justify-between border-b border-border bg-white/80 px-4 backdrop-blur-md sm:px-6 lg:px-8">
          <h2 className="text-sm font-semibold text-foreground">Dashboard</h2>

          <div className="flex items-center gap-3">
            {/* Notifications */}
            <button
              className="relative flex h-9 w-9 items-center justify-center rounded-lg text-muted transition-colors hover:bg-light-muted hover:text-foreground"
              aria-label="Notifications"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                />
              </svg>
              {/* Notification dot */}
              <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-error" />
            </button>

            {/* User Avatar */}
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                JD
              </div>
              <span className="hidden text-sm font-medium text-foreground sm:block">
                Jane Doe
              </span>
            </div>
          </div>
        </div>

        {/* Page Content */}
        <div className="p-4 sm:p-6 lg:p-8">{children}</div>
      </div>
    </div>
  );
}
