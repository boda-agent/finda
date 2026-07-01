import Container from "@/components/layout/Container";
import ProviderProfile from "@/components/providers/ProviderProfile";
import type { ProviderProfileData } from "@/components/providers/ProviderProfile";

// Mock data for demo
const MOCK_PROVIDER: ProviderProfileData = {
  id: "1",
  name: "Sarah Chen",
  avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=sarah-chen",
  coverPhoto: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200&h=400&fit=crop",
  bio: "Licensed nail artist and lash technician with over 8 years of experience creating stunning nail designs and lash looks. I specialize in gel extensions, intricate nail art, and Russian volume lash techniques. My passion is helping every client feel confident and beautiful. I use only premium, cruelty-free products and maintain the highest hygiene standards in my studio.",
  rating: 4.9,
  reviewCount: 234,
  verified: true,
  location: "San Francisco, CA",
  phone: "(415) 555-0198",
  email: "sarah@findabeauty.com",
  available: true,
  tags: ["Gel Nails Expert", "Lash Extensions", "Nail Art", "Russian Volume", "Cruelty-Free"],
  services: [
    { id: "s1", name: "Gel Manicure", description: "Classic gel manicure with long-lasting, chip-free shine. Includes nail shaping, cuticle care, and your choice of color.", price: "$45", duration: "45 min" },
    { id: "s2", name: "Gel-X Full Set", description: "Soft gel extensions for natural-looking length and shape. Customized to your desired length and style.", price: "$75", duration: "1 hr 15 min" },
    { id: "s3", name: "Nail Art Design", description: "Custom hand-painted nail art, chrome, ombré, or any trending design on your gel set.", price: "$30", duration: "30 min" },
    { id: "s4", name: "Russian Volume Lashes", description: "Ultra-fine, lightweight fans for a full, fluffy lash look. Customized curl, length, and thickness.", price: "$120", duration: "2 hrs" },
    { id: "s5", name: "Lash Fill", description: "Maintenance fill for your lash extensions. Recommended every 2–3 weeks.", price: "$65", duration: "1 hr" },
  ],
  gallery: [
    "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1577467014381-aa7c13dbf331?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1610992015732-2449b76344bc?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1457972729786-0411a3b2b626?w=400&h=400&fit=crop",
  ],
  reviews: [
    { id: "r1", name: "Emily Rodriguez", avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=emily-r", rating: 5, date: "2026-06-15", text: "Sarah is the BEST nail artist I've ever been to! Her gel manicure lasted over 3 weeks without a single chip. The nail art she did for my birthday was absolutely stunning. Already booked my next appointment!" },
    { id: "r2", name: "Jessica Liu", avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=jessica-l", rating: 5, date: "2026-05-28", text: "I've been getting Russian volume lashes from Sarah for months now and I'm obsessed. They look so natural yet full. She really takes her time to customize the look for each client. Highly recommend!" },
    { id: "r3", name: "Amanda Torres", avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=amanda-t", rating: 5, date: "2026-05-10", text: "Finally found my forever nail tech! Sarah's studio is spotless, she's super gentle with my nails, and the designs she creates are works of art. My Gel-X set looked incredible." },
    { id: "r4", name: "Rachel Kim", avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=rachel-k", rating: 4, date: "2026-04-22", text: "Great lash fill — Sarah fixed the mess I got from another salon. She's so knowledgeable about lash health. Only 4 stars because parking was tricky, but the work itself is 5 stars." },
    { id: "r5", name: "Sophie Chen", avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=sophie-c", rating: 5, date: "2026-04-05", text: "Sarah did my bridal nails and they were absolutely perfect. She was so patient with all my bridesmaids too. Everyone's nails looked gorgeous in the photos. Worth every penny!" },
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
