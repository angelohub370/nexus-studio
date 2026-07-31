export type ProjectType = "landing" | "website" | "store" | "custom";

export interface CalculatorInput {
  projectType: ProjectType;
  pages: number;
  hosting: boolean;
  seo: boolean;
  payments: boolean;
  multilingual: boolean;
}

export interface CalculatorResult {
  min: number;
  max: number;
}

const BASE_PRICES: Record<ProjectType, number> = {
  landing: 200,
  website: 400,
  store: 1000,
  custom: 1500,
};

const PAGE_RATES: Record<ProjectType, number> = {
  landing: 15,
  website: 25,
  store: 20,
  custom: 40,
};

const INCLUDED_PAGES: Record<ProjectType, number> = {
  landing: 1,
  website: 5,
  store: 10,
  custom: 8,
};

export function calculateEstimate(input: CalculatorInput): CalculatorResult {
  const base = BASE_PRICES[input.projectType];
  const extraPages = Math.max(0, input.pages - INCLUDED_PAGES[input.projectType]);
  const pageCost = extraPages * PAGE_RATES[input.projectType];

  let addons = 0;
  if (input.hosting) addons += 80;
  if (input.seo) addons += 150;
  if (input.payments) addons += 250;
  if (input.multilingual) addons += 200;

  const subtotal = base + pageCost + addons;
  const complexity =
    input.projectType === "custom" ? 0.2 : input.projectType === "store" ? 0.15 : 0.1;

  const min = Math.round(subtotal);
  const max = Math.round(subtotal * (1 + complexity));

  return { min, max: Math.max(min + 50, max) };
}
