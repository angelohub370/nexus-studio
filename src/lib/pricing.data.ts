import { CreditCard, Globe, ShoppingBag, type LucideIcon } from "lucide-react";

export const pricingPackageIds = ["landing", "website", "store"] as const;

export type PricingPackageId = (typeof pricingPackageIds)[number];

export const pricingPackageIcons: Record<PricingPackageId, LucideIcon> = {
  landing: Globe,
  website: CreditCard,
  store: ShoppingBag,
};

export const pricingFeatureKeys: Record<
  PricingPackageId,
  readonly string[]
> = {
  landing: ["responsive", "contact", "seo", "speed"],
  website: ["pages", "cms", "contact", "seo", "mobile"],
  store: ["products", "payments", "delivery", "admin", "seo", "analytics"],
};
