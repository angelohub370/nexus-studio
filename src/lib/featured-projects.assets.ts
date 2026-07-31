export type FeaturedProjectId =
  | "fashion"
  | "restaurant"
  | "clinica"
  | "gym"
  | "realestate"
  | "booking";

export interface FeaturedProjectAsset {
  id: FeaturedProjectId;
  image: string;
  url: string;
  technologies: string[];
}

export const featuredProjectAssets: FeaturedProjectAsset[] = [
  {
    id: "fashion",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=900&q=80",
    url: "/demos/fashion-store",
    technologies: ["Next.js", "Stripe", "Tailwind"],
  },
  {
    id: "restaurant",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=900&q=80",
    url: "/demos/restaurant",
    technologies: ["Next.js", "Framer Motion", "Reservations"],
  },
  {
    id: "clinica",
    image:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=900&q=80",
    url: "/demos/clinica",
    technologies: ["Next.js", "Booking", "SEO"],
  },
  {
    id: "gym",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=900&q=80",
    url: "#contact",
    technologies: ["React", "Membership", "CMS"],
  },
  {
    id: "realestate",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=900&q=80",
    url: "#contact",
    technologies: ["Next.js", "Maps", "Filters"],
  },
  {
    id: "booking",
    image:
      "https://images.unsplash.com/photo-1506784365847-bbad939e9335?w=900&q=80",
    url: "/demos/salon",
    technologies: ["Next.js", "Calendar", "Payments"],
  },
];
