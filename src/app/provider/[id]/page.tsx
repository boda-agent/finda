import Container from "@/components/layout/Container";
import ProviderProfile from "@/components/providers/ProviderProfile";
import type { ProviderProfileData } from "@/components/providers/ProviderProfile";

// Mock data for demo
const MOCK_PROVIDER: ProviderProfileData = {
  id: "1",
  name: "Sarah Mitchell",
  avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=sarah",
  coverPhoto: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200&h=400&fit=crop",
  bio: "Professional interior designer with over 10 years of experience transforming residential and commercial spaces. I specialize in modern minimalist and Scandinavian design aesthetics, creating functional yet beautiful environments that reflect each client's unique personality. My approach combines thoughtful space planning with curated material selections to deliver stunning results within budget.",
  rating: 4.8,
  reviewCount: 127,
  verified: true,
  location: "San Francisco, CA",
  phone: "(415) 555-0123",
  email: "sarah@designstudio.com",
  available: true,
  tags: ["Interior Design", "Home Staging", "Color Consulting", "Space Planning", "Furniture Selection"],
  services: [
    { id: "s1", name: "Design Consultation", description: "1-hour in-home consultation to discuss your vision, style preferences, and project scope.", price: "$150", duration: "1 hour" },
    { id: "s2", name: "Room Redesign", description: "Complete room makeover including furniture layout, color palette, and decor selection.", price: "$800", duration: "1-2 days" },
    { id: "s3", name: "Full Home Design", description: "End-to-end interior design for your entire home, from concept to installation.", price: "$3500", duration: "2-4 weeks" },
    { id: "s4", name: "Home Staging", description: "Professional staging to prepare your home for sale, maximizing appeal and value.", price: "$1200", duration: "1-3 days" },
  ],
  gallery: [
    "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=400&fit=crop",
  ],
  reviews: [
    { id: "r1", name: "Emily Chen", avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=emily", rating: 5, date: "2026-06-15", text: "Sarah completely transformed our living room! Her eye for color and space is incredible. She listened to our needs and delivered beyond our expectations. Highly recommend!" },
    { id: "r2", name: "Marcus Johnson", avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=marcus", rating: 5, date: "2026-05-28", text: "Professional, punctual, and incredibly talented. The full home design was worth every penny. Our home feels like a magazine spread now." },
    { id: "r3", name: "Aisha Patel", avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=aisha", rating: 4, date: "2026-05-10", text: "Great consultation session. Sarah had wonderful ideas for our small apartment. Only giving 4 stars because the follow-up took a bit longer than expected, but the final result was beautiful." },
    { id: "r4", name: "David Kim", avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=david", rating: 5, date: "2026-04-22", text: "Used Sarah's staging service before selling our house. It sold in 3 days above asking price! The staging made such a difference in how the spaces photographed." },
    { id: "r5", name: "Rachel Torres", avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=rachel", rating: 4, date: "2026-04-05", text: "Lovely work on our bedroom redesign. Sarah has a great sense of style and was very patient with our indecisiveness. Would book again for the guest room." },
  ],
};

export default async function ProviderPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  // In production, fetch provider by id. Using mock data for demo.
  const provider = { ...MOCK_PROVIDER, id };

  return (
    <Container>
      <ProviderProfile provider={provider} />
    </Container>
  );
}
