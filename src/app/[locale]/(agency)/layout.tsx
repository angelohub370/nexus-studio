import { getTranslations, getLocale } from "next-intl/server";
import {
  generateFAQSchema,
  generateOrganizationSchema,
  generateServiceSchema,
  generateWebSiteSchema,
} from "@/lib/schema";
import { ClientWrapper } from "@/components/layout/ClientWrapper";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { serviceIds } from "@/lib/data";

type ServiceItems = Record<string, { title: string; description: string }>;
type FAQItem = { question: string; answer: string };

export default async function AgencyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  const tMeta = await getTranslations("metadata");
  const tFaq = await getTranslations("faq");
  const tServices = await getTranslations("services");

  const description = tMeta("description");
  const faqItems = tFaq.raw("items") as FAQItem[];
  const serviceItems = tServices.raw("items") as ServiceItems;
  const serviceTypes = serviceIds.map((id) => serviceItems[id].title);

  const schemas = [
    generateOrganizationSchema(description, locale),
    generateWebSiteSchema(description, locale),
    generateServiceSchema(description, serviceTypes),
    generateFAQSchema(faqItems),
  ];

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <div className="noise" aria-hidden="true" />
      <ClientWrapper>
        <Header />
        <main className="min-h-screen bg-background text-foreground">
          {children}
        </main>
        <Footer />
      </ClientWrapper>
    </>
  );
}
