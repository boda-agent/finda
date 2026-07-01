import Badge from "@/components/ui/Badge";

type BookingStatus = "upcoming" | "completed" | "cancelled";

interface BookingCardProps {
  service: string;
  provider: string;
  date: string;
  time: string;
  status: BookingStatus;
  imageUrl?: string;
}

const statusConfig: Record<
  BookingStatus,
  { label: string; variant: "primary" | "success" | "error" }
> = {
  upcoming: { label: "Upcoming", variant: "primary" },
  completed: { label: "Completed", variant: "success" },
  cancelled: { label: "Cancelled", variant: "error" },
};

export default function BookingCard({
  service,
  provider,
  date,
  time,
  status,
  imageUrl,
}: BookingCardProps) {
  const { label, variant } = statusConfig[status];

  return (
    <div className="flex items-center gap-4 rounded-xl border border-border bg-white p-4 shadow-sm transition-shadow hover:shadow-md">
      {/* Thumbnail */}
      <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg bg-light-muted">
        {imageUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={imageUrl}
            alt={service}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-xl text-muted">
            📋
          </div>
        )}
      </div>

      {/* Details */}
      <div className="min-w-0 flex-1">
        <h3 className="truncate text-sm font-semibold text-foreground">
          {service}
        </h3>
        <p className="mt-0.5 text-xs text-muted">with {provider}</p>
        <p className="mt-1 text-xs text-muted">
          {date} · {time}
        </p>
      </div>

      {/* Status */}
      <Badge variant={variant}>{label}</Badge>
    </div>
  );
}
