import { webPackages } from "@/content/web-packages";

import { ContactForm } from "@/components/form/ContactForm";
import { PackageFAQ } from "@/components/packages/PackageFAQ";
import { PackageGrid } from "@/components/packages/PackageGrid";
import { PackageHero } from "@/components/packages/PackageHero";
import { PackageIncluded } from "@/components/packages/PackageIncluded";
import { PackageCompareDrawer } from "@/components/packages/PackageCompareDrawer";

export const metadata = {
  title: webPackages.meta.title,
  description: webPackages.meta.description,
};

export default function WebPackagesPage() {
  return (
    <>
      {/* HERO */}
      <PackageHero data={webPackages.hero} />

      {/* INCLUDED WITH EVERY WEBSITE (white) */}
      <PackageIncluded data={webPackages.included} />

      {/* PACKAGES GRID (slate) */}
      <section className="bg-slate-50">
        <PackageGrid
          data={{
            tiers: webPackages.tiers,
            featureCatalog: webPackages.featureCatalog,
          }}
        />
      </section>

      {/* COMPARE DRAWER TRIGGER + DRAWER (white) */}
      <PackageCompareDrawer
        data={{
          tiers: webPackages.tiers,
          featureCatalog: webPackages.featureCatalog,
          compare: webPackages.compare,
          revisions: webPackages.revisions,
        }}
      />

      {/* FAQ (white) */}
      <PackageFAQ data={webPackages.faq} />

      <section className="py-20 bg-slate-50">
        <div className="flex flex-col gap-8 mx-auto px-4 max-w-[1280px]">
          <div>
            <h2 className="text-3xl font-headings font-bold text-gray-900">
                Not sure where to start?
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
    </>
  );
}