import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import HeroSection from "@/components/sections/HeroSection";
import CategoryGrid from "@/components/search/CategoryGrid";
import FeaturedServices from "@/components/services/FeaturedServices";
import StatsSection from "@/components/sections/StatsSection";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Browse by Category */}
      <CategoryGrid />

      {/* Featured Services */}
      <FeaturedServices />

      {/* Stats Section */}
      <StatsSection />

      {/* How It Works */}
      <section className="section-padding bg-light">
        <Container>
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-dark md:text-4xl">
              How It Works
            </h2>
            <p className="mt-4 text-muted">
              Get started in three simple steps
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Search & Discover",
                description:
                  "Browse categories or search for the exact service you need in your area.",
                icon: (
                  <svg
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                  </svg>
                ),
              },
              {
                step: "02",
                title: "Compare & Choose",
                description:
                  "Read reviews, compare prices, and pick the professional that fits your needs.",
                icon: (
                  <svg
                    className="h-8 w-8"
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
                ),
              },
              {
                step: "03",
                title: "Book & Relax",
                description:
                  "Book instantly with secure payment and enjoy peace of mind with our guarantee.",
                icon: (
                  <svg
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ),
              },
            ].map((item, i) => (
              <div key={item.step} className="relative text-center">
                {i < 2 && (
                  <div className="absolute left-1/2 top-8 hidden h-px w-full -translate-x-1/2 bg-border md:block" />
                )}
                <div className="relative mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-white shadow-lg shadow-primary/25">
                  {item.icon}
                </div>
                <div className="mb-2 text-sm font-bold text-primary">
                  Step {item.step}
                </div>
                <h3 className="text-lg font-semibold text-dark">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-primary-hover">
        <Container narrow>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              Ready to grow your business?
            </h2>
            <p className="mt-4 text-primary-light">
              Join thousands of service providers already on Finda. List your
              service today and reach new customers.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button variant="secondary" size="lg">
                Get Started Free
              </Button>
              <Button
                variant="ghost"
                size="lg"
                className="text-white hover:bg-white/10"
              >
                Learn More
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
