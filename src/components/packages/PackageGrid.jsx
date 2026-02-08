"use client";
import { PackageItem } from "./PackageItem";

function buildFeatureLabelMap(featureCatalog = []) {
  const map = {};
  for (const f of featureCatalog) {
    if (f?.id && f?.label) map[f.id] = f.label;
  }
  return map;
}

export function PackageGrid({ data }) {
  if (!data) return null;

  const { tiers = [], featureCatalog = [] } = data;

  const labelMap = buildFeatureLabelMap(featureCatalog);

  const enrichedTiers = tiers.map((tier) => {
    const includes = Array.isArray(tier.includes) ? tier.includes : [];
    const featuresResolved = includes
      .map((id) => labelMap[id])
      .filter(Boolean);

    return {
      ...tier,
      featuresResolved,
    };
  });

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 max-w-[1280px]">
        <div className="grid gap-4 lg:gap-6 md:grid-cols-2 lg:grid-cols-4 items-stretch">
          {enrichedTiers.map((tier) => (
            <PackageItem key={tier.id || tier.name} data={tier} />
          ))}
        </div>
      </div>
    </section>
  );
}