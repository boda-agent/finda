import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Container from "@/components/layout/Container";

const featuredServices = [
  {
    title: "Gel Manicure",
    provider: "Sarah Chen — Nail Studio",
    rating: 4.9,
    reviews: 312,
    price: "$45",
    priceUnit: "session",
    location: "New York, NY",
    category: "Nails",
    gradient: "from-pink-400 to-rose-600",
  },
  {
    title: "Balayage Hair Color",
    provider: "Jessica Park — Hair Atelier",
    rating: 5.0,
    reviews: 278,
    price: "$180",
    priceUnit: "session",
    location: "Los Angeles, CA",
    category: "Hair",
    gradient: "from-purple-400 to-violet-600",
  },
  {
    title: "Russian Volume Lashes",
    provider: "Mia Rodriguez — Lash Lab",
    rating: 4.8,
    reviews: 195,
    price: "$120",
    priceUnit: "set",
    location: "Chicago, IL",
    category: "Lashes",
    gradient: "from-amber-400 to-orange-500",
  },
  {
    title: "Microblading Brows",
    provider: "Aisha Patel — Brow Artistry",
    rating: 4.9,
    reviews: 167,
    price: "$250",
    priceUnit: "session",
    location: "Houston, TX",
    category: "Brows",
    gradient: "from-rose-400 to-pink-600",
  },
  {
    title: "Deep Tissue Massage",
    provider: "Emma Williams — Serene Spa",
    rating: 4.7,
    reviews: 243,
    price: "$95",
    priceUnit: "hour",
    location: "Phoenix, AZ",
    category: "Spa",
    gradient: "from-teal-400 to-emerald-600",
  },
  {
    title: "Hydrafacial Treatment",
    provider: "Olivia Kim — Glow Skincare",
    rating: 4.9,
    reviews: 189,
    price: "$150",
    priceUnit: "session",
    location: "San Diego, CA",
    category: "Skincare",
    gradient: "from-sky-400 to-cyan-600",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`h-4 w-4 ${
            star <= Math.floor(rating)
              ? "text-accent"
              : star - 0.5 <= rating
                ? "text-accent/50"
                : "text-border"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function FeaturedServices() {
  return (
    <section className="section-padding bg-light">
      <Container>
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold text-dark">
              Featured Beauty Services
            </h2>
            <p className="mt-2 text-muted">
              Top-rated beauty professionals ready to pamper you
            </p>
          </div>
          <Button variant="outline" size="sm" className="hidden md:flex">
            View All Services
          </Button>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredServices.map((service) => (
            <Card key={service.title} hoverable padding="none">
              {/* Image Placeholder */}
              <div
                className={`h-48 rounded-t-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center`}
              >
                <svg
                  className="h-12 w-12 text-white/40"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5a2.25 2.25 0 002.25-2.25V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z"
                  />
                </svg>
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <Badge variant="primary">{service.category}</Badge>
                  <span className="text-xs text-muted">
                    {service.location}
                  </span>
                </div>
                <h3 className="mt-3 text-base font-semibold text-dark">
                  {service.title}
                </h3>
                <p className="mt-1 text-sm text-muted">
                  {service.provider}
                </p>
                <div className="mt-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <StarRating rating={service.rating} />
                    <span className="text-xs font-medium text-dark">
                      {service.rating}
                    </span>
                    <span className="text-xs text-muted">
                      ({service.reviews})
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-lg font-bold text-dark">
                      {service.price}
                    </span>
                    <span className="text-xs text-muted">
                      /{service.priceUnit}
                    </span>
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="mt-4 w-full">
                  View Details →
                </Button>
              </div>
            </Card>
          ))}
        </div>
        <div className="mt-8 text-center md:hidden">
          <Button variant="outline" size="sm">
            View All Services
          </Button>
        </div>
      </Container>
    </section>
  );
}
