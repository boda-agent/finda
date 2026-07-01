import { type ReactNode } from "react";

interface StatsCardProps {
  label: string;
  value: string | number;
  icon: ReactNode;
  /** Optional change indicator e.g. "+12%" */
  change?: string;
  /** Whether the change is positive */
  positive?: boolean;
}

export default function StatsCard({
  label,
  value,
  icon,
  change,
  positive = true,
}: StatsCardProps) {
  return (
    <div className="rounded-xl border border-border bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-muted">{label}</p>
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-light text-primary">
          {icon}
        </div>
      </div>
      <div className="mt-3 flex items-baseline gap-2">
        <span className="text-3xl font-bold text-foreground">{value}</span>
        {change && (
          <span
            className={`text-xs font-semibold ${
              positive ? "text-success" : "text-error"
            }`}
          >
            {change}
          </span>
        )}
      </div>
    </div>
  );
}
