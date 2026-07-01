"use client";

import { useState } from "react";
import BookingCard from "@/components/dashboard/BookingCard";

type Tab = "upcoming" | "past" | "cancelled";

const tabs: { key: Tab; label: string }[] = [
  { key: "upcoming", label: "Upcoming" },
  { key: "past", label: "Past" },
  { key: "cancelled", label: "Cancelled" },
];

const bookings: Record<Tab, Array<{
  service: string;
  provider: string;
  date: string;
  time: string;
  status: "upcoming" | "completed" | "cancelled";
  imageUrl?: string;
}>> = {
  upcoming: [
    {
      service: "Haircut & Styling",
      provider: "Sarah's Salon",
      date: "Jul 5, 2026",
      time: "2:00 PM",
      status: "upcoming",
    },
    {
      service: "Home Deep Cleaning",
      provider: "SparkleClean Co.",
      date: "Jul 8, 2026",
      time: "9:00 AM",
      status: "upcoming",
    },
    {
      service: "Personal Training Session",
      provider: "FitLife Gym",
      date: "Jul 10, 2026",
      time: "6:30 PM",
      status: "upcoming",
    },
  ],
  past: [
    {
      service: "Plumbing Repair",
      provider: "QuickFix Plumbing",
      date: "Jun 28, 2026",
      time: "11:00 AM",
      status: "completed",
    },
    {
      service: "Dog Walking",
      provider: "PetCare Plus",
      date: "Jun 25, 2026",
      time: "3:00 PM",
      status: "completed",
    },
  ],
  cancelled: [
    {
      service: "AC Maintenance",
      provider: "CoolAir Services",
      date: "Jun 20, 2026",
      time: "10:00 AM",
      status: "cancelled",
    },
  ],
};

export default function BookingsPage() {
  const [activeTab, setActiveTab] = useState<Tab>("upcoming");
  const currentBookings = bookings[activeTab];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">My Bookings</h1>
        <p className="mt-1 text-sm text-muted">
          Manage your upcoming and past bookings.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 rounded-lg border border-border bg-light-muted p-1">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`flex-1 rounded-md px-4 py-2 text-sm font-medium transition-colors ${
              activeTab === tab.key
                ? "bg-white text-foreground shadow-sm"
                : "text-muted hover:text-foreground"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Booking List */}
      {currentBookings.length > 0 ? (
        <div className="space-y-3">
          {currentBookings.map((booking, i) => (
            <BookingCard key={i} {...booking} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-border py-16">
          <span className="text-4xl">📭</span>
          <p className="mt-3 text-sm font-medium text-muted">
            No {activeTab} bookings
          </p>
        </div>
      )}
    </div>
  );
}
