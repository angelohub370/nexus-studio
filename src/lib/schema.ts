import { siteConfig } from "@/lib/site.config";

interface FAQSchemaItem {
  question: string;
  answer: string;
}

export function generateOrganizationSchema(description: string, locale: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    description,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.contact.phone,
      contactType: "customer service",
      email: siteConfig.contact.email,
      availableLanguage: locale,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.contact.address,
      addressCountry: "RO",
    },
    sameAs: [
      siteConfig.social.facebook,
      siteConfig.social.instagram,
      siteConfig.social.linkedin,
      siteConfig.social.twitter,
    ],
  };
}

export function generateWebSiteSchema(description: string, locale: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description,
    inLanguage: locale,
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
    },
  };
}

export function generateServiceSchema(
  description: string,
  serviceTypes: string[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    description,
    url: siteConfig.url,
    priceRange: "$$",
    areaServed: {
      "@type": "Country",
      name: "Romania",
    },
    serviceType: serviceTypes,
  };
}

export function generateFAQSchema(items: FAQSchemaItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
