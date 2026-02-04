import { ContactForm } from "@/components/form/ContactForm";
import { ServiceFAQ } from "@/components/services/ServiceFAQ";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServicePoints } from "@/components/services/ServicePoints";
import { ServiceProcess } from "@/components/services/ServiceProcess";
import { ServiceBenefits } from "@/components/services/ServiceBenefits";

import { services } from "@/content/services";
import { notFound } from "next/navigation";

// SEO (Next App Router)
export function generateStaticParams() {
  return Object.keys(services).map((service) => ({ service }));
}

export function generateMetadata({ params }) {
  const service = services[params.service];
  if (!service) return {};

  return {
    title: service.meta.title,
    description: service.meta.description,
  };
}

export default function ServicePage({ params }) {
  const service = services[params.service];
  if (!service) notFound();

  return (
    <main className="w-full">
      <ServiceHero title={service.hero.title} description={service.hero.description} 
        serviceSlug={params.service} serviceLabel={service.label} />

      <ServicePoints data={service.points} />
      <ServiceBenefits data={service.benefits} />
      <ServiceProcess data={service.process} />
      <ServiceFAQ data={service.faq} />

      <div className="bg-slate-50 py-20">
        <div className="container mx-auto px-4 max-w-[1280px]">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-headings font-bold text-gray-900 mb-4">
              Get A Free Quote </h2>
            <p className="text-gray-600">Ask us any questions with zero commitment.</p>
          </div>

          <div className="bg-white p-8 rounded-xl border border-gray-100">
            <ContactForm serviceSlug={params.service} />
          </div>
        </div>
      </div>
    </main>
  );
}