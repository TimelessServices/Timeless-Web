import { socialsPackages } from "@/content/socials-packages";

import { ContactForm } from "@/components/form/ContactForm";
import { PackageFAQ } from "@/components/packages/PackageFAQ";
import { PackageGrid } from "@/components/packages/PackageGrid";
import { PackageHero } from "@/components/packages/PackageHero";
import { PackageIncluded } from "@/components/packages/PackageIncluded";
import { PackageCompareDrawer } from "@/components/packages/PackageCompareDrawer";

export const metadata = {
  title: socialsPackages.meta.title,
  description: socialsPackages.meta.description,
};

export default function SocialsPackagesPage() {
  return (
    <>
      {/* HERO */}
      <PackageHero data={socialsPackages.hero} />

      {/* INCLUDED WITH EVERY PLAN (white) */}
      <PackageIncluded data={socialsPackages.included} />

      {/* PACKAGES GRID (slate) */}
      <section className="bg-slate-50">
        <PackageGrid
          data={{
            tiers: socialsPackages.tiers,
            featureCatalog: socialsPackages.featureCatalog,
          }}
        />
      </section>

      {/* COMPARE DRAWER (white) */}
      <PackageCompareDrawer
        data={{
          tiers: socialsPackages.tiers,
          featureCatalog: socialsPackages.featureCatalog,
          compare: socialsPackages.compare,
          revisions: socialsPackages.revisions,
        }}
      />

      {/* FAQ (white) */}
      <PackageFAQ data={socialsPackages.faq} />

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