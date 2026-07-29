import {
  Globe,
  ShoppingCart,
  Rocket,
  Search,
  Gauge,
  Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const serviceIds = [
  "website",
  "ecommerce",
  "landing",
  "seo",
  "speed",
  "maintenance",
] as const;

export type ServiceId = (typeof serviceIds)[number];

export const serviceIcons: Record<ServiceId, LucideIcon> = {
  website: Globe,
  ecommerce: ShoppingCart,
  landing: Rocket,
  seo: Search,
  speed: Gauge,
  maintenance: Wrench,
};

export const statIds = [
  "responsive",
  "lighthouse",
  "support",
  "delivery",
] as const;

export type StatId = (typeof statIds)[number];
