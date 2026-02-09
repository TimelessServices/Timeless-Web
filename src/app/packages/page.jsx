import { getPackagesPreviewData } from "@/content/packagePreview";
import { ContactForm } from "@/components/form/ContactForm";
import { PackageSection } from "@/components/packages/PackageSection";

export const metadata = {
  title: "Packages | Timeless Web",
  description:
    "Explore Timeless Web packages across web design, app development, digital marketing, branding, hosting & maintenance, and AI automation.",
};

export default function PackagesPage() {
  const preview = getPackagesPreviewData();

  const order = [
    "web-design",
    "app-design",
    "digital-marketing",
    "branding",
    "hosting",
    "ai-automation",
  ];

  const packagesInOrder = order.map((slug) => preview?.[slug]).filter(Boolean);

  return (
    <main className="w-full">
      {/* Hero */}
      <section className="w-full py-32 bg-[#9810fa]">
        <div className="container mx-auto px-4 max-w-[1280px]">
          <h1 className="text-4xl md:text-5xl font-headings font-bold text-white">
            Our Packages
          </h1>
          <p className="mt-4 text-lg text-white max-w-[70ch]">
            Clear packages with defined tiers, scope, and pricing. Choose what fits now,
            then scale when it makes sense.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-10">
        <div className="container mx-auto px-4 max-w-[1280px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {packagesInOrder.map((pkg) => (
              <PackageSection key={pkg.slug} data={pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-50">
        <div className="flex flex-col gap-8 mx-auto px-4 max-w-[1280px]">
          <div>
            <h2 className="text-3xl font-headings font-bold text-gray-900">
              Not sure which package fits?
            </h2>

            <p className="mt-3 text-gray-700 max-w-[70ch]">
              Send us a quick enquiry and we'll be happy to point you in the right direction.
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