import { getPreviewData } from "@/content/servicePreview";
import { ContactForm } from "@/components/form/ContactForm";
import { ServiceSection } from "@/components/services/ServiceSection";

export const metadata = {
  title: "Services | Timeless Web",
  description: "Explore Timeless Web services: web design, app development, digital marketing, branding, hosting & maintenance, and AI automation.",
};

export default function ServicesPage() {
  const preview = getPreviewData();

  // Optional: enforce a deliberate order (recommended)
  const order = [
    "web-design",
    "app-design",
    "digital-marketing",
    "branding",
    "hosting",
    "ai-automation",
  ];

  const servicesInOrder = order
    .map((slug) => preview?.[slug])
    .filter(Boolean);

  return (
    <main className="w-full">
      {/* Hero (hardcoded, simple) */}
      <section className="w-full py-32 bg-[#9810fa]">
        <div className="container mx-auto px-4 max-w-[1280px]">
          <h1 className="text-4xl md:text-5xl font-headings font-bold text-white">
            Our Services
          </h1>
          <p className="mt-4 text-lg text-white max-w-[70ch]">
            Not every business needs everything at once. The services below are designed to address specific needs, 
            with clear scope and deliverables so you know what you’re getting.
          </p>
        </div>
      </section>

      {/* Service sections */}
      <div>
        {servicesInOrder.map((service) => (
          <ServiceSection key={service.slug} data={service} />
        ))}
      </div>

      {/* One final CTA (optional) */}
      <section className="py-20 bg-slate-50">
        <div className="flex flex-col gap-8 mx-auto px-4 max-w-[1280px]">
          <div>
            <h2 className="text-3xl font-headings font-bold text-gray-900">
                Not sure which service fits?
            </h2>
            
            <p className="mt-3 text-gray-700 max-w-[70ch]">
                Send us a quick enquiry and we'll be happy to point you 
                in the right direction.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl border border-gray-100">
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}