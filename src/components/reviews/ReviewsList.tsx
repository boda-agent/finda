"use client";

import { useState, useMemo } from "react";
import Card from "@/components/ui/Card";

export interface Review {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  date: string;
  text: string;
}

interface ReviewsListProps {
  reviews: Review[];
  className?: string;
}

type SortOption = "newest" | "highest" | "lowest";

function StarIcon({ filled }: { filled: boolean }) {
  return (
    <svg
      className={`h-4 w-4 ${filled ? "text-accent" : "text-border"}`}
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((i) => (
        <StarIcon key={i} filled={i <= rating} />
      ))}
    </div>
  );
}

function RatingBreakdown({ reviews }: { reviews: Review[] }) {
  const counts = [0, 0, 0, 0, 0]; // index 0 = 1★, index 4 = 5★
  reviews.forEach((r) => {
    if (r.rating >= 1 && r.rating <= 5) counts[r.rating - 1]++;
  });

  const max = Math.max(...counts, 1);

  return (
    <div className="space-y-2">
      {[5, 4, 3, 2, 1].map((star) => {
        const count = counts[star - 1];
        return (
          <div key={star} className="flex items-center gap-3">
            <span className="w-8 text-right text-xs font-medium text-muted">{star}★</span>
            <div className="flex-1 h-2 rounded-full bg-light-muted overflow-hidden">
              <div
                className="h-full rounded-full bg-accent transition-all duration-300"
                style={{ width: `${(count / max) * 100}%` }}
              />
            </div>
            <span className="w-6 text-xs text-muted">{count}</span>
          </div>
        );
      })}
    </div>
  );
}

export default function ReviewsList({ reviews, className = "" }: ReviewsListProps) {
  const [sort, setSort] = useState<SortOption>("newest");

  const sorted = useMemo(() => {
    const copy = [...reviews];
    switch (sort) {
      case "newest":
        return copy.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
      case "highest":
        return copy.sort((a, b) => b.rating - a.rating);
      case "lowest":
        return copy.sort((a, b) => a.rating - b.rating);
    }
  }, [reviews, sort]);

  const avgRating = reviews.length
    ? (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1)
    : "0.0";

  return (
    <div className={className}>
      {/* Summary */}
      <div className="mb-6 flex flex-col gap-6 sm:flex-row sm:items-start">
        <div className="text-center sm:text-left">
          <div className="text-5xl font-bold text-foreground">{avgRating}</div>
          <StarRating rating={Math.round(Number(avgRating))} />
          <p className="mt-1 text-sm text-muted">{reviews.length} reviews</p>
        </div>
        <div className="flex-1">
          <RatingBreakdown reviews={reviews} />
        </div>
      </div>

      {/* Sort */}
      <div className="mb-4 flex items-center justify-between">
        <h3 className="font-semibold text-foreground">Reviews</h3>
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value as SortOption)}
          className="rounded-lg border border-border bg-white px-3 py-1.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
        >
          <option value="newest">Newest</option>
          <option value="highest">Highest Rated</option>
          <option value="lowest">Lowest Rated</option>
        </select>
      </div>

      {/* Reviews */}
      <div className="space-y-4">
        {sorted.map((review) => (
          <Card key={review.id} padding="md">
            <div className="flex items-start gap-3">
              <img
                src={review.avatar}
                alt={review.name}
                className="h-10 w-10 rounded-full object-cover"
              />
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-foreground">{review.name}</span>
                  <span className="text-xs text-muted">{review.date}</span>
                </div>
                <div className="mt-1">
                  <StarRating rating={review.rating} />
                </div>
                <p className="mt-2 text-sm text-muted leading-relaxed">{review.text}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
