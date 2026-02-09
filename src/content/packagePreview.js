import { packages } from "@/content/packages";

const pickFirst = (arr) =>
  Array.isArray(arr) && arr.length ? String(arr[0]) : "";

const safeStr = (v) => (v == null ? "" : String(v));

const joinTierNames = (tiers) => {
  if (!Array.isArray(tiers) || !tiers.length) return "";
  return tiers
    .map((t) => safeStr(t?.name).trim())
    .filter(Boolean)
    .join(" / ");
};

export function getPackagesPreviewData() {
  const preview = {};

  for (const [slug, p] of Object.entries(packages || {})) {
    const tiers = Array.isArray(p?.tiers) ? p.tiers : [];
    const firstTier = tiers[0] || null;

    const description =
      safeStr(p?.meta?.description).trim() ||
      safeStr(p?.hero?.description).trim();

    const includedLine = pickFirst(p?.included?.items);

    const tiersLine = joinTierNames(tiers);

    const fromPrice = firstTier?.price ? `From ${safeStr(firstTier.price)}` : "";

    preview[slug] = {
      slug,
      label: safeStr(p?.label).trim(),
      description,
      includedLine,
      tiersLine,
      fromPrice,
    };
  }

  return preview;
}

export function getPackagesPreviewBySlug(slug) {
  const all = getPackagesPreviewData();
  return all?.[slug] || null;
}