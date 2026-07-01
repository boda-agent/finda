import Container from "@/components/layout/Container";
import Badge from "@/components/ui/Badge";
import SearchBar from "@/components/search/SearchBar";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-dark via-dark-muted to-primary/90 py-20 md:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-2xl" />
      </div>

      <Container>
        <div className="relative mx-auto max-w-4xl text-center">
          <Badge variant="accent" className="mb-6">
            Trusted by 10,000+ businesses
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl">
            Find the{" "}
            <span className="bg-gradient-to-r from-accent to-yellow-300 bg-clip-text text-transparent">
              perfect service
            </span>{" "}
            for every need
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300 md:text-xl">
            Connect with top-rated professionals in your area. From home
            services to creative experts — Finda makes it easy.
          </p>

          {/* Search Bar */}
          <div className="mx-auto mt-10 max-w-3xl">
            <SearchBar variant="hero" />
          </div>

          {/* Trust Badges */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-300">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className="h-4 w-4 text-accent"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span>
                <span className="font-semibold text-white">4.9/5</span> average
                rating
              </span>
            </div>
            <div className="h-4 w-px bg-slate-600" />
            <div className="flex items-center gap-2">
              <svg
                className="h-5 w-5 text-success"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>
                <span className="font-semibold text-white">50,000+</span> verified
                reviews
              </span>
            </div>
            <div className="h-4 w-px bg-slate-600" />
            <div className="flex items-center gap-2">
              <svg
                className="h-5 w-5 text-accent"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
              <span>
                <span className="font-semibold text-white">200+</span> cities
                covered
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
