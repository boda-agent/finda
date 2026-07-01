"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

interface ServiceOption {
  id: string;
  name: string;
  price: number;
  duration?: string;
}

interface BookingFormProps {
  providerId: string;
  providerName: string;
  services: ServiceOption[];
  onComplete?: (data: BookingData) => void;
}

export interface BookingData {
  serviceId: string;
  serviceName: string;
  date: string;
  timeSlot: string;
  address: string;
  notes: string;
  totalPrice: number;
}

type Step = "service" | "datetime" | "details" | "confirm";

const TIME_SLOTS = [
  { id: "morning", label: "Morning", desc: "8:00 AM – 12:00 PM", icon: "🌅" },
  { id: "afternoon", label: "Afternoon", desc: "12:00 PM – 5:00 PM", icon: "☀️" },
  { id: "evening", label: "Evening", desc: "5:00 PM – 9:00 PM", icon: "🌙" },
];

const STEPS: { key: Step; label: string }[] = [
  { key: "service", label: "Service" },
  { key: "datetime", label: "Date & Time" },
  { key: "details", label: "Details" },
  { key: "confirm", label: "Confirm" },
];

export default function BookingForm({
  providerId,
  providerName,
  services,
  onComplete,
}: BookingFormProps) {
  const [step, setStep] = useState<Step>("service");
  const [selectedService, setSelectedService] = useState<ServiceOption | null>(null);
  const [date, setDate] = useState("");
  const [timeSlot, setTimeSlot] = useState("");
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");

  const currentStepIndex = STEPS.findIndex((s) => s.key === step);

  function next() {
    const nextIndex = currentStepIndex + 1;
    if (nextIndex < STEPS.length) setStep(STEPS[nextIndex].key);
  }

  function prev() {
    const prevIndex = currentStepIndex - 1;
    if (prevIndex >= 0) setStep(STEPS[prevIndex].key);
  }

  function canProceed(): boolean {
    switch (step) {
      case "service":
        return selectedService !== null;
      case "datetime":
        return date !== "" && timeSlot !== "";
      case "details":
        return address.trim() !== "";
      case "confirm":
        return true;
    }
  }

  function handleSubmit() {
    if (!selectedService) return;
    const data: BookingData = {
      serviceId: selectedService.id,
      serviceName: selectedService.name,
      date,
      timeSlot,
      address,
      notes,
      totalPrice: selectedService.price,
    };
    onComplete?.(data);
  }

  // Get today's date for min attribute
  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="mx-auto max-w-2xl">
      {/* Progress Steps */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          {STEPS.map((s, i) => (
            <div key={s.key} className="flex flex-1 items-center">
              <div className="flex flex-col items-center">
                <div
                  className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-semibold transition-colors ${
                    i <= currentStepIndex
                      ? "bg-primary text-white"
                      : "bg-light-muted text-muted"
                  }`}
                >
                  {i < currentStepIndex ? (
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  ) : (
                    i + 1
                  )}
                </div>
                <span
                  className={`mt-2 text-xs font-medium ${
                    i <= currentStepIndex ? "text-foreground" : "text-muted"
                  }`}
                >
                  {s.label}
                </span>
              </div>
              {i < STEPS.length - 1 && (
                <div
                  className={`mx-2 h-0.5 flex-1 rounded-full ${
                    i < currentStepIndex ? "bg-primary" : "bg-light-muted"
                  }`}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Step Content */}
      <Card padding="lg">
        {/* Service Selection */}
        {step === "service" && (
          <div>
            <h2 className="text-lg font-semibold text-foreground">Select a Service</h2>
            <p className="mt-1 text-sm text-muted">Choose the service you&apos;d like to book with {providerName}.</p>
            <div className="mt-6 space-y-3">
              {services.map((service) => (
                <button
                  key={service.id}
                  onClick={() => setSelectedService(service)}
                  className={`flex w-full items-center justify-between rounded-xl border-2 p-4 text-left transition-all ${
                    selectedService?.id === service.id
                      ? "border-primary bg-primary-light"
                      : "border-border hover:border-primary/30"
                  }`}
                >
                  <div>
                    <div className="font-medium text-foreground">{service.name}</div>
                    {service.duration && (
                      <div className="mt-1 text-xs text-muted">⏱ {service.duration}</div>
                    )}
                  </div>
                  <span className="text-lg font-semibold text-primary">${service.price}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Date & Time */}
        {step === "datetime" && (
          <div>
            <h2 className="text-lg font-semibold text-foreground">Choose Date & Time</h2>
            <p className="mt-1 text-sm text-muted">Pick your preferred appointment date and time slot.</p>

            <div className="mt-6 space-y-6">
              {/* Date */}
              <div>
                <label htmlFor="booking-date" className="mb-1.5 block text-sm font-medium text-foreground">
                  Date
                </label>
                <input
                  id="booking-date"
                  type="date"
                  min={today}
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="block w-full rounded-lg border border-border bg-white px-4 py-2.5 text-sm text-foreground shadow-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>

              {/* Time Slot */}
              <div>
                <label className="mb-1.5 block text-sm font-medium text-foreground">Time Slot</label>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                  {TIME_SLOTS.map((slot) => (
                    <button
                      key={slot.id}
                      onClick={() => setTimeSlot(slot.id)}
                      className={`rounded-xl border-2 p-4 text-center transition-all ${
                        timeSlot === slot.id
                          ? "border-primary bg-primary-light"
                          : "border-border hover:border-primary/30"
                      }`}
                    >
                      <span className="text-2xl">{slot.icon}</span>
                      <div className="mt-1 font-medium text-foreground">{slot.label}</div>
                      <div className="text-xs text-muted">{slot.desc}</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Details */}
        {step === "details" && (
          <div>
            <h2 className="text-lg font-semibold text-foreground">Booking Details</h2>
            <p className="mt-1 text-sm text-muted">Provide your address and any special instructions.</p>

            <div className="mt-6 space-y-4">
              <div>
                <label htmlFor="booking-address" className="mb-1.5 block text-sm font-medium text-foreground">
                  Service Address <span className="text-error">*</span>
                </label>
                <textarea
                  id="booking-address"
                  rows={3}
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Enter the full address where the service should be performed"
                  className="block w-full rounded-lg border border-border bg-white px-4 py-2.5 text-sm text-foreground shadow-sm transition-colors placeholder:text-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>

              <div>
                <label htmlFor="booking-notes" className="mb-1.5 block text-sm font-medium text-foreground">
                  Additional Notes <span className="text-muted font-normal">(optional)</span>
                </label>
                <textarea
                  id="booking-notes"
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Any special requests or details the provider should know"
                  className="block w-full rounded-lg border border-border bg-white px-4 py-2.5 text-sm text-foreground shadow-sm transition-colors placeholder:text-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
            </div>
          </div>
        )}

        {/* Confirm */}
        {step === "confirm" && selectedService && (
          <div>
            <h2 className="text-lg font-semibold text-foreground">Confirm Booking</h2>
            <p className="mt-1 text-sm text-muted">Review your booking details before confirming.</p>

            <div className="mt-6 space-y-4">
              <div className="rounded-xl bg-light p-4 space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-muted">Provider</span>
                  <span className="text-sm font-medium text-foreground">{providerName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted">Service</span>
                  <span className="text-sm font-medium text-foreground">{selectedService.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted">Date</span>
                  <span className="text-sm font-medium text-foreground">{date}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted">Time</span>
                  <span className="text-sm font-medium text-foreground capitalize">{timeSlot}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted">Address</span>
                  <span className="max-w-[60%] text-right text-sm font-medium text-foreground">{address}</span>
                </div>
                {notes && (
                  <div className="flex justify-between">
                    <span className="text-sm text-muted">Notes</span>
                    <span className="max-w-[60%] text-right text-sm font-medium text-foreground">{notes}</span>
                  </div>
                )}
                <div className="border-t border-border pt-3 flex justify-between">
                  <span className="text-sm font-semibold text-foreground">Total</span>
                  <span className="text-xl font-bold text-primary">${selectedService.price}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="mt-8 flex items-center justify-between border-t border-border pt-6">
          {currentStepIndex > 0 ? (
            <Button variant="ghost" onClick={prev}>
              ← Back
            </Button>
          ) : (
            <div />
          )}

          {step === "confirm" ? (
            <Button onClick={handleSubmit}>Confirm Booking</Button>
          ) : (
            <Button onClick={next} disabled={!canProceed()}>
              Continue →
            </Button>
          )}
        </div>
      </Card>
    </div>
  );
}
