"use client";

import { useMemo, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faCheck,
  faMinus,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

function buildFeatureLabelMap(featureCatalog = []) {
  const map = {};
  for (const f of featureCatalog) {
    if (f?.id && f?.label) map[f.id] = f.label;
  }
  return map;
}

export function PackageCompareDrawer({ data }) {
  const [open, setOpen] = useState(false);

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

  const labelColClass =
    "text-sm text-gray-600 w-[140px] sm:w-[160px] lg:w-[220px] shrink-0";
  const valueClass = "text-sm font-semibold text-gray-900 text-right";

  return (
    <section className="bg-white py-10">
      <div className="container mx-auto px-4 max-w-[1280px]">
        <div className="flex flex-col items-center gap-3 text-center">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="inline-flex items-center gap-2 text-sm font-semibold text-purple-700 hover:text-purple-800"
            aria-haspopup="dialog"
            aria-expanded={open}
          >
            {compare?.title || "Compare packages"}
            <FontAwesomeIcon icon={faArrowRight} className="w-3 h-3" />
          </button>

          {compare?.description ? (
            <p className="text-sm text-gray-600 max-w-2xl">
              {compare.description}
            </p>
          ) : null}
        </div>

        {open ? (
          <div role="dialog" aria-modal="true" className="fixed inset-0 z-50">
            <div
              className="absolute inset-0 bg-black/40"
              onClick={() => setOpen(false)}
            />

            <div
              className="absolute right-0 top-0 h-full w-full max-w-[1100px] bg-white shadow-2xl flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="p-6 border-b border-gray-100 flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    {compare?.title || "Compare packages"}
                  </h3>
                  {compare?.description ? (
                    <p className="text-sm text-gray-600 mt-1">
                      {compare.description}
                    </p>
                  ) : null}
                </div>

                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="w-10 h-10 rounded-xl border border-gray-200 grid place-items-center text-gray-700 hover:bg-gray-50"
                  aria-label="Close comparison"
                >
                  <FontAwesomeIcon icon={faXmark} className="w-4 h-4" />
                </button>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto">
                <div className="p-6 space-y-10">
                  {/* Scope */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">
                      Scope
                    </h4>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {tierSets.map((t) => (
                        <div
                          key={t.id}
                          className="rounded-2xl border border-gray-100 overflow-hidden bg-white"
                        >
                          <div className="p-4 bg-gray-50 border-b border-gray-100 flex items-baseline justify-between gap-4">
                            <div className="min-w-0">
                              <div className="font-semibold text-gray-900 truncate">
                                {t.name}
                              </div>
                            </div>
                            <div className="font-bold text-purple-700 shrink-0">
                              {t.price}
                            </div>
                          </div>

                          <div className="p-4">
                            <dl className="divide-y divide-gray-100">
                              {orderedScopeLabels.map((label) => {
                                const found = t.scope.find(
                                  (s) => s.label === label
                                );
                                return (
                                  <div
                                    key={label}
                                    className="py-3 flex items-start justify-between gap-6"
                                  >
                                    <dt className={labelColClass}>{label}</dt>
                                    <dd className={valueClass}>
                                      {found?.value || "—"}
                                    </dd>
                                  </div>
                                );
                              })}
                            </dl>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Capabilities */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">
                      Capabilities
                    </h4>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {tierSets.map((t) => (
                        <div
                          key={t.id}
                          className="rounded-2xl border border-gray-100 overflow-hidden bg-white"
                        >
                          <div className="p-4 bg-gray-50 border-b border-gray-100 flex items-baseline justify-between gap-4">
                            <div className="min-w-0">
                              <div className="font-semibold text-gray-900 truncate">
                                {t.name}
                              </div>
                            </div>
                            <div className="font-bold text-purple-700 shrink-0">
                              {t.price}
                            </div>
                          </div>

                          <div className="p-4">
                            <ul className="divide-y divide-gray-100">
                              {features.map((f) => {
                                const has = t.includes.has(f.id);
                                return (
                                  <li
                                    key={f.id}
                                    className="py-3 flex items-center justify-between gap-6"
                                  >
                                    <span className="text-sm text-gray-700 min-w-0">
                                      {f.label}
                                    </span>

                                    {has ? (
                                      <span className="w-7 h-7 rounded-full bg-purple-100 text-purple-700 grid place-items-center shrink-0">
                                        <FontAwesomeIcon
                                          icon={faCheck}
                                          className="w-4 h-4"
                                        />
                                      </span>
                                    ) : (
                                      <span className="w-7 h-7 rounded-full bg-gray-100 text-gray-400 grid place-items-center shrink-0">
                                        <FontAwesomeIcon
                                          icon={faMinus}
                                          className="w-4 h-4"
                                        />
                                      </span>
                                    )}
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Revisions note (optional) */}
                    {revisions?.description ? (
                      <div className="mt-6 rounded-2xl border border-gray-100 bg-gray-50 p-5">
                        <p className="text-sm font-semibold text-gray-900">
                          {revisions?.title || "How revisions work"}
                        </p>
                        <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                          {revisions.description}
                        </p>
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="p-6 border-t border-gray-100 bg-white">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="w-full rounded-2xl border border-gray-200 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Close comparison
                </button>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}