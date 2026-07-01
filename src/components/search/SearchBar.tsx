"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

const categories = [
  "All Categories",
  "Cleaning",
  "Plumbing",
  "Electrical",
  "Beauty",
  "Photography",
  "Tutoring",
  "Landscaping",
  "Moving",
];

const locationSuggestions = [
  "New York, NY",
  "Los Angeles, CA",
  "Chicago, IL",
  "Houston, TX",
  "Phoenix, AZ",
  "San Diego, CA",
  "Dallas, TX",
  "San Jose, CA",
];

interface SearchBarProps {
  /** Compact variant for embedding in hero */
  variant?: "default" | "hero";
  className?: string;
}

export default function SearchBar({
  variant = "default",
  className = "",
}: SearchBarProps) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All Categories");
  const [location, setLocation] = useState("");
  const [showLocations, setShowLocations] = useState(false);

  const filteredLocations = locationSuggestions.filter((loc) =>
    loc.toLowerCase().includes(location.toLowerCase()),
  );

  const isHero = variant === "hero";

  return (
    <div
      className={`rounded-2xl bg-white p-4 shadow-xl ring-1 ring-border/50 md:p-6 ${className}`}
    >
      <div
        className={`grid gap-3 ${
          isHero
            ? "md:grid-cols-[1fr_200px_200px_auto]"
            : "md:grid-cols-[1fr_200px_200px_auto]"
        }`}
      >
        {/* Search Input */}
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-muted">
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
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </div>
          <input
            type="text"
            placeholder="What service are you looking for?"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full rounded-xl border border-border bg-light py-3 pl-11 pr-4 text-sm text-foreground placeholder:text-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
        </div>

        {/* Category Dropdown */}
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-muted">
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
                d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 6h.008v.008H6V6z"
              />
            </svg>
          </div>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full appearance-none rounded-xl border border-border bg-light py-3 pl-11 pr-10 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-muted">
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
        </div>

        {/* Location Input */}
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-muted">
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
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>
          </div>
          <input
            type="text"
            placeholder="City or ZIP code"
            value={location}
            onChange={(e) => {
              setLocation(e.target.value);
              setShowLocations(true);
            }}
            onFocus={() => setShowLocations(true)}
            onBlur={() => setTimeout(() => setShowLocations(false), 150)}
            className="w-full rounded-xl border border-border bg-light py-3 pl-11 pr-4 text-sm text-foreground placeholder:text-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
          {showLocations && filteredLocations.length > 0 && location.length > 0 && (
            <div className="absolute left-0 right-0 top-full z-20 mt-1 max-h-48 overflow-y-auto rounded-xl border border-border bg-white py-1 shadow-lg">
              {filteredLocations.map((loc) => (
                <button
                  key={loc}
                  type="button"
                  className="flex w-full items-center gap-2 px-4 py-2.5 text-left text-sm text-foreground hover:bg-light-muted"
                  onMouseDown={() => {
                    setLocation(loc);
                    setShowLocations(false);
                  }}
                >
                  <svg
                    className="h-4 w-4 shrink-0 text-muted"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                  {loc}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Search Button */}
        <Button size="lg" className="w-full md:w-auto">
          Search
        </Button>
      </div>
    </div>
  );
}
