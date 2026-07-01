import Container from "./Container";

const columns = [
  {
    title: "Services",
    links: [
      { label: "Manicure & Pedicure", href: "#" },
      { label: "Hair Styling & Color", href: "#" },
      { label: "Lash Extensions", href: "#" },
      { label: "Massage & Spa", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Center", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "For Professionals", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-light">
      <Container>
        <div className="grid grid-cols-2 gap-8 py-12 md:grid-cols-4">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-white font-bold text-sm">
                F
              </div>
              <span className="text-xl font-bold text-dark">FINDA</span>
            </div>
            <p className="mt-4 text-sm text-muted leading-relaxed">
              Your trusted platform for beauty and wellness professionals. Find, book, and enjoy.
            </p>
            {/* Social Icons */}
            <div className="mt-6 flex gap-3">
              {["Instagram", "TikTok", "Pinterest"].map((name) => (
                <a
                  key={name}
                  href="#"
                  aria-label={name}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted transition-colors hover:border-primary hover:text-primary"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="4" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold text-foreground">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="border-t border-border py-6">
          <p className="text-center text-xs text-muted">
            © {new Date().getFullYear()} FINDA. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
