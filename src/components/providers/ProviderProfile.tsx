import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import ReviewsList, { type Review } from "@/components/reviews/ReviewsList";

export interface ProviderService {
  id?: string;
  name: string;
  description: string;
  price: string;
  duration?: string;
}

export interface ProviderProfileData {
  id: string;
  name: string;
  avatar: string;
  coverPhoto: string;
  bio: string;
  rating: number;
  reviewCount: number;
  verified: boolean;
  location: string;
  phone: string;
  email: string;
  available: boolean;
  tags: string[];
  services: ProviderService[];
  gallery: string[];
  reviews: Review[];
}

interface ProviderProfileProps {
  provider: ProviderProfileData;
}

function StarIcon({ filled }: { filled: boolean }) {
  return (
    <svg
      className={`h-5 w-5 ${filled ? "text-accent" : "text-border"}`}
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

function LocationPin() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 0115 0z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
  );
}

function VerifiedBadge() {
  return (
    <svg className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
      <path
        fillRule="evenodd"
        d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function ProviderProfile({ provider }: ProviderProfileProps) {
  const fullStars = Math.floor(provider.rating);
  const hasHalf = provider.rating % 1 >= 0.5;

  return (
    <div>
      {/* Cover Photo */}
      <div className="relative h-48 overflow-hidden rounded-xl sm:h-64 lg:h-80">
        <img
          src={provider.coverPhoto}
          alt={`${provider.name} cover`}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      </div>

      {/* Avatar + Name (overlapping cover) */}
      <div className="relative mx-auto max-w-4xl px-4">
        <div className="-mt-16 flex items-end gap-4">
          <img
            src={provider.avatar}
            alt={provider.name}
            className="h-28 w-28 rounded-2xl border-4 border-white object-cover shadow-lg"
          />
          <div className="mb-2 flex items-center gap-2">
            <h1 className="text-2xl font-bold text-foreground">{provider.name}</h1>
            {provider.verified && <VerifiedBadge />}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-4xl px-4 py-8">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Left: Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Bio */}
            <section>
              <h2 className="text-lg font-semibold text-foreground">About</h2>
              <p className="mt-2 text-sm text-muted leading-relaxed">{provider.bio}</p>
            </section>

            {/* Tags */}
            <section>
              <h2 className="text-lg font-semibold text-foreground">Specialties</h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {provider.tags.map((tag) => (
                  <Badge key={tag} variant="primary">{tag}</Badge>
                ))}
              </div>
            </section>

            {/* Services */}
            <section>
              <h2 className="text-lg font-semibold text-foreground">Services & Pricing</h2>
              <div className="mt-4 space-y-3">
                {provider.services.map((service) => (
                  <Card key={service.name} padding="md">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-medium text-foreground">{service.name}</h3>
                        <p className="mt-1 text-sm text-muted">{service.description}</p>
                        {service.duration && (
                          <span className="mt-1 inline-block text-xs text-muted">⏱ {service.duration}</span>
                        )}
                      </div>
                      <span className="shrink-0 text-lg font-semibold text-primary">{service.price}</span>
                    </div>
                  </Card>
                ))}
              </div>
            </section>

            {/* Gallery */}
            <section>
              <h2 className="text-lg font-semibold text-foreground">Portfolio</h2>
              <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {provider.gallery.map((img, i) => (
                  <div key={i} className="aspect-square overflow-hidden rounded-xl">
                    <img
                      src={img}
                      alt={`Portfolio ${i + 1}`}
                      className="h-full w-full object-cover transition-transform duration-200 hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </section>

            {/* Reviews */}
            <section>
              <ReviewsList reviews={provider.reviews} />
            </section>
          </div>

          {/* Right: Sidebar */}
          <div className="space-y-4">
            {/* Quick Info Card */}
            <Card padding="lg" className="sticky top-24">
              {/* Rating */}
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <StarIcon key={i} filled={i <= fullStars || (i === fullStars + 1 && hasHalf)} />
                  ))}
                </div>
                <span className="font-semibold text-foreground">{provider.rating.toFixed(1)}</span>
                <span className="text-sm text-muted">({provider.reviewCount})</span>
              </div>

              {/* Availability */}
              <div className="mt-4 flex items-center gap-2">
                <span
                  className={`h-2.5 w-2.5 rounded-full ${
                    provider.available ? "bg-success" : "bg-error"
                  }`}
                />
                <span className="text-sm font-medium text-foreground">
                  {provider.available ? "Available Now" : "Currently Unavailable"}
                </span>
              </div>

              {/* Contact */}
              <div className="mt-5 space-y-3 border-t border-border pt-5">
                <div className="flex items-center gap-3 text-sm text-muted">
                  <LocationPin />
                  <span>{provider.location}</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted">
                  <PhoneIcon />
                  <span>{provider.phone}</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted">
                  <EmailIcon />
                  <span>{provider.email}</span>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-6 flex flex-col gap-2">
                <Button fullWidth href={`/book/${provider.id}`}>
                  Book Now
                </Button>
                <Button variant="outline" fullWidth>
                  Send Message
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
