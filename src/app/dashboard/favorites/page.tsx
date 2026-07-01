import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";

const favorites = [
  {
    id: 1,
    name: "Sarah Chen — Nail Studio",
    category: "Nails",
    rating: 4.9,
    reviews: 234,
    location: "Downtown",
    emoji: "💅",
  },
  {
    id: 2,
    name: "Jessica Park — Hair Atelier",
    category: "Hair",
    rating: 5.0,
    reviews: 278,
    location: "Midtown",
    emoji: "💇‍♀️",
  },
  {
    id: 3,
    name: "Mia Rodriguez — Lash Lab",
    category: "Lashes",
    rating: 4.8,
    reviews: 195,
    location: "West Side",
    emoji: "👁",
  },
  {
    id: 4,
    name: "Aisha Patel — Brow Artistry",
    category: "Brows",
    rating: 4.9,
    reviews: 167,
    location: "Uptown",
    emoji: "✨",
  },
  {
    id: 5,
    name: "Olivia Kim — Glow Skincare",
    category: "Skincare",
    rating: 4.9,
    reviews: 189,
    location: "East Side",
    emoji: "🧴",
  },
  {
    id: 6,
    name: "Emma Williams — Serene Spa",
    category: "Spa & Massage",
    rating: 4.7,
    reviews: 243,
    location: "Citywide",
    emoji: "💆‍♀️",
  },
];

export default function FavoritesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Favorites</h1>
        <p className="mt-1 text-sm text-muted">
          Your saved beauty professionals.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {favorites.map((fav) => (
          <Card key={fav.id} hoverable padding="none">
            <div className="p-5">
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-light text-2xl">
                  {fav.emoji}
                </div>
                <button
                  className="text-error"
                  aria-label="Remove from favorites"
                >
                  <svg
                    className="h-5 w-5 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                  </svg>
                </button>
              </div>
              <h3 className="mt-3 text-base font-semibold text-foreground">
                {fav.name}
              </h3>
              <Badge variant="accent" className="mt-1">
                {fav.category}
              </Badge>
              <div className="mt-3 flex items-center gap-3 text-xs text-muted">
                <span className="flex items-center gap-1">
                  ⭐ {fav.rating}
                  <span className="text-muted/60">({fav.reviews})</span>
                </span>
                <span>📍 {fav.location}</span>
              </div>
            </div>
            <div className="border-t border-border px-5 py-3">
              <a
                href="#"
                className="text-sm font-medium text-primary hover:underline"
              >
                View profile →
              </a>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
