import Card from "@/components/ui/Card";
import Container from "@/components/layout/Container";

const categories = [
  {
    name: "Manicure & Pedicure",
    count: 486,
    emoji: "💅",
    color: "from-pink-400/15 to-rose-500/15",
    iconColor: "text-pink-600",
  },
  {
    name: "Hair Styling & Color",
    count: 523,
    emoji: "💇‍♀️",
    color: "from-purple-400/15 to-violet-500/15",
    iconColor: "text-purple-600",
  },
  {
    name: "Lash Extensions",
    count: 312,
    emoji: "👁",
    color: "from-amber-400/15 to-orange-500/15",
    iconColor: "text-amber-600",
  },
  {
    name: "Brow Styling",
    count: 278,
    emoji: "✨",
    color: "from-rose-400/15 to-pink-500/15",
    iconColor: "text-rose-600",
  },
  {
    name: "Massage & Spa",
    count: 394,
    emoji: "💆‍♀️",
    color: "from-teal-400/15 to-emerald-500/15",
    iconColor: "text-teal-600",
  },
  {
    name: "Skincare & Facials",
    count: 267,
    emoji: "🧴",
    color: "from-sky-400/15 to-cyan-500/15",
    iconColor: "text-sky-600",
  },
  {
    name: "Makeup",
    count: 198,
    emoji: "💄",
    color: "from-fuchsia-400/15 to-pink-500/15",
    iconColor: "text-fuchsia-600",
  },
  {
    name: "Teeth Whitening",
    count: 145,
    emoji: "🦷",
    color: "from-indigo-400/15 to-blue-500/15",
    iconColor: "text-indigo-600",
  },
];

export default function CategoryGrid() {
  return (
    <section className="section-padding bg-white">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-dark md:text-4xl">
            Browse by Category
          </h2>
          <p className="mt-4 text-muted">
            Find the perfect beauty professional for your needs
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {categories.map((cat) => (
            <a key={cat.name} href="#" className="group">
              <Card hoverable padding="md">
                <div
                  className={`mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${cat.color} text-2xl transition-transform duration-200 group-hover:scale-110`}
                >
                  {cat.emoji}
                </div>
                <h3 className="text-sm font-semibold text-dark">
                  {cat.name}
                </h3>
                <p className="mt-1 text-xs text-muted">
                  {cat.count} professionals
                </p>
              </Card>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
