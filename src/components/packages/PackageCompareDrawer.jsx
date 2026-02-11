"use client";

import { useMemo, useState, useEffect, useRef } from "react";
import { CompareTrigger } from "./compare/CompareTrigger";
import { CompareDrawerShell } from "./compare/CompareDrawerShell";
import { CompareContent } from "./compare/CompareContent";

// -------- helpers (keep local; not worth a utils file unless reused) --------
function buildFeatureLabelMap(featureCatalog = []) {
  const map = {};
  for (const f of featureCatalog) {
    if (f?.id && f?.label) map[f.id] = f.label;
  }
  return map;
}

export function PackageCompareDrawer({ data }) {
  const [open, setOpen] = useState(false);

  const triggerRef = useRef(null);
  const closeRef = useRef(null);

  if (!data) return null;

  const { tiers = [], featureCatalog = [], compare, revisions } = data;

  const labelMap = useMemo(
    () => buildFeatureLabelMap(featureCatalog),
    [featureCatalog]
  );

  const orderedFeatureIds = useMemo(() => {
    const order = compare?.featureOrder;
    if (Array.isArray(order) && order.length > 0) return order;
    return featureCatalog.map((f) => f.id).filter(Boolean);
  }, [compare, featureCatalog]);

  const orderedScopeLabels = useMemo(() => {
    const explicit = compare?.scopeOrder;
    if (Array.isArray(explicit) && explicit.length > 0) return explicit;

    const seen = new Set();
    const labels = [];
    for (const t of tiers) {
      for (const s of Array.isArray(t.scope) ? t.scope : []) {
        if (s?.label && !seen.has(s.label)) {
          seen.add(s.label);
          labels.push(s.label);
        }
      }
    }
    return labels;
  }, [compare, tiers]);

  const features = useMemo(() => {
    return orderedFeatureIds
      .map((id) => ({ id, label: labelMap[id] || id }))
      .filter((f) => f.id);
  }, [orderedFeatureIds, labelMap]);

  const tierSets = useMemo(() => {
    return (Array.isArray(tiers) ? tiers : []).map((t) => ({
      id: t.id,
      name: t.name,
      price: t.price,
      includes: new Set(Array.isArray(t.includes) ? t.includes : []),
      scope: Array.isArray(t.scope) ? t.scope : [],
      badge: t.badge,
    }));
  }, [tiers]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  // Lock body scroll while open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // Focus management
  useEffect(() => {
    if (open) closeRef.current?.focus();
    else triggerRef.current?.focus();
  }, [open]);

  const title = compare?.title || "Compare Packages";
  const description = compare?.description || "";
  const tierCount = tierSets.length;
  const capabilityCount = features.length;

  return (
    <section className="py-10 bg-slate-200 border-y border-slate-300">
      <div className="container mx-auto px-4 max-w-[1280px]">
        <CompareTrigger
          triggerRef={triggerRef}
          open={open}
          title={title}
          description={description}
          onOpen={() => setOpen(true)}
        />

        <CompareDrawerShell
          open={open}
          title={title}
          description={description}
          tierCount={tierCount}
          capabilityCount={capabilityCount}
          onClose={() => setOpen(false)}
          closeRef={closeRef}
        >
          <CompareContent
            tierSets={tierSets}
            orderedScopeLabels={orderedScopeLabels}
            features={features}
            revisions={revisions}
          />
        </CompareDrawerShell>
      </div>
    </section>
  );
}