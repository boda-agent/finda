"use client";

import { useState } from "react";
import Container from "@/components/layout/Container";
import BookingForm from "@/components/booking/BookingForm";
import type { BookingData } from "@/components/booking/BookingForm";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

const MOCK_SERVICES = [
  { id: "s1", name: "Gel Manicure", price: 45, duration: "45 min" },
  { id: "s2", name: "Gel-X Full Set", price: 75, duration: "1 hr 15 min" },
  { id: "s3", name: "Nail Art Design", price: 30, duration: "30 min" },
  { id: "s4", name: "Russian Volume Lashes", price: 120, duration: "2 hrs" },
  { id: "s5", name: "Lash Fill", price: 65, duration: "1 hr" },
];

const PROVIDER_NAME = "Sarah Chen";

export default function BookPage() {
  const [completed, setCompleted] = useState<BookingData | null>(null);

  if (completed) {
    return (
      <Container narrow className="py-16">
        <Card padding="lg" className="text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50">
            <svg className="h-8 w-8 text-success" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </div>
          <h1 className="mt-4 text-2xl font-bold text-foreground">Booking Confirmed! ✨</h1>
          <p className="mt-2 text-muted">
            Your <strong>{completed.serviceName}</strong> with {PROVIDER_NAME} has been booked for{" "}
            <strong>{completed.date}</strong> ({completed.timeSlot}).
          </p>
          <p className="mt-1 text-sm text-muted">
            You&apos;ll receive a confirmation email shortly. See you soon! 💅
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <Button href="/">Back to Home</Button>
            <Button variant="outline" href={`/provider/1`}>
              View Provider
            </Button>
          </div>
        </Card>
      </Container>
    );
  }

  return (
    <Container narrow className="py-12">
      <div className="mb-8 text-center">
        <h1 className="text-2xl font-bold text-foreground">Book with {PROVIDER_NAME}</h1>
        <p className="mt-2 text-muted">Choose your beauty service and schedule your appointment.</p>
      </div>
      <BookingForm
        providerId="1"
        providerName={PROVIDER_NAME}
        services={MOCK_SERVICES}
        onComplete={(data) => setCompleted(data)}
      />
    </Container>
  );
}
