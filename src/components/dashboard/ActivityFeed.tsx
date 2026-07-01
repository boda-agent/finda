interface Activity {
  id: string;
  text: string;
  time: string;
  icon: React.ReactNode;
}

interface ActivityFeedProps {
  activities?: Activity[];
}

const defaultActivities: Activity[] = [
  {
    id: "1",
    text: "You booked a Haircut session with Sarah's Salon",
    time: "2 hours ago",
    icon: <span className="text-sm">📅</span>,
  },
  {
    id: "2",
    text: "New message from Alex regarding your home cleaning",
    time: "5 hours ago",
    icon: <span className="text-sm">💬</span>,
  },
  {
    id: "3",
    text: "Your booking with FitLife Gym was confirmed",
    time: "Yesterday",
    icon: <span className="text-sm">✅</span>,
  },
  {
    id: "4",
    text: "You added QuickFix Plumbing to your favorites",
    time: "2 days ago",
    icon: <span className="text-sm">❤️</span>,
  },
  {
    id: "5",
    text: "Review submitted for PetCare Plus",
    time: "3 days ago",
    icon: <span className="text-sm">⭐</span>,
  },
];

export default function ActivityFeed({ activities }: ActivityFeedProps) {
  const items = activities ?? defaultActivities;

  return (
    <div className="rounded-xl border border-border bg-white shadow-sm">
      <div className="border-b border-border px-5 py-4">
        <h2 className="text-sm font-semibold text-foreground">
          Recent Activity
        </h2>
      </div>
      <ul className="divide-y divide-border">
        {items.map((item) => (
          <li key={item.id} className="flex items-start gap-3 px-5 py-4">
            <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-light-muted">
              {item.icon}
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm text-foreground">{item.text}</p>
              <p className="mt-0.5 text-xs text-muted">{item.time}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
