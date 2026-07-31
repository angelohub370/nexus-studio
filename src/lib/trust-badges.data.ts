import {
  FileCheck,
  Headphones,
  Lock,
  Receipt,
  Server,
  type LucideIcon,
} from "lucide-react";

export const trustBadgeIds = [
  "ssl",
  "invoice",
  "contract",
  "support",
  "hosting",
] as const;

export type TrustBadgeId = (typeof trustBadgeIds)[number];

export const trustBadgeIcons: Record<TrustBadgeId, LucideIcon> = {
  ssl: Lock,
  invoice: Receipt,
  contract: FileCheck,
  support: Headphones,
  hosting: Server,
};
