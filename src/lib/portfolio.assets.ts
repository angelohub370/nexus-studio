export type PortfolioAssetId =
  | "fashion"
  | "restaurant"
  | "salon"
  | "auto"
  | "clinica";

export interface PortfolioAsset {
  id: PortfolioAssetId;
  image: string;
  url: string;
}

export const portfolioAssets: PortfolioAsset[] = [
  {
    id: "fashion",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    url: "/demos/fashion-store",
  },
  {
    id: "restaurant",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
    url: "/demos/restaurant",
  },
  {
    id: "salon",
    image:
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80",
    url: "/demos/salon",
  },
  {
    id: "auto",
    image:
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80",
    url: "/demos/auto-service",
  },
  {
    id: "clinica",
    image:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80",
    url: "/demos/clinica",
  },
];
