import { services } from "@/content/services";
const pickFirst = (arr) => (Array.isArray(arr) && arr.length ? String(arr[0]) : "");

/**
 * Deterministic selection rules:
 * - benefit      <- audience.bestFit[0]
 * - service      <- points.items[0] (fallback deliverables.items[0])
 * - deliverable  <- deliverables.items[0] (fallback points.items[0])
 * - image        <- points.image (fallback deliverables.image)
 * - description  <- meta.description (fallback hero.description)
 */
export function getPreviewData() {
  const preview = {};

  for (const [slug, s] of Object.entries(services || {})) {
    const benefit = pickFirst(s?.audience?.bestFit);

    const service = pickFirst(s?.points?.items) || pickFirst(s?.deliverables?.items);
    const deliverable = pickFirst(s?.deliverables?.items) || pickFirst(s?.points?.items);

    const image = s?.points?.image || s?.deliverables?.image || { src: "", alt: "" };

    const description =
      (s?.meta?.description ? String(s.meta.description) : "") ||
      (s?.hero?.description ? String(s.hero.description) : "");

    preview[slug] = {
      slug,
      label: s?.label ? String(s.label) : "",
      description,
      benefit,
      service,
      deliverable,
      image: {
        src: image?.src ? String(image.src) : "",
        alt: image?.alt ? String(image.alt) : "",
      },
    };
  }

  return preview;
}

/**
 * Optional helper: get one preview by slug
 */
export function getPreviewBySlug(slug) {
  const all = getPreviewData();
  return all?.[slug] || null;
}