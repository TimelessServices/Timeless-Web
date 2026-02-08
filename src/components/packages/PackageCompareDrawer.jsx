"use client";

import { useMemo, useState } from "react";
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

  const { tiers = [], featureCatalog = [], compare } = data;

  const labelMap = useMemo(
    () => buildFeatureLabelMap(featureCatalog),
    [featureCatalog]
  );

  const orderedFeatureIds = useMemo(() => {
    const order = compare?.featureOrder;
    if (Array.isArray(order) && order.length > 0) return order;
    return featureCatalog.map((f) => f.id).filter(Boolean);
  }, [compare, featureCatalog]);

  const features = orderedFeatureIds
    .map((id) => ({ id, label: labelMap[id] }))
    .filter((f) => f.label);

  const tierSets = useMemo(() => {
    return tiers.map((t) => ({
      id: t.id,
      name: t.name,
      price: t.price,
      includes: new Set(Array.isArray(t.includes) ? t.includes : []),
      scope: Array.isArray(t.scope) ? t.scope : [],
    }));
  }, [tiers]);

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

        {/* Overlay */}
        {open ? (
          <div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-50"
          >
            <div
              className="absolute inset-0 bg-black/40"
              onClick={() => setOpen(false)}
            />

            <div className="absolute right-0 top-0 h-full w-full max-w-[720px] bg-white shadow-2xl flex flex-col">
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
                <div className="p-6">
                  {/* Scope */}
                  <div className="mb-8">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">
                      Scope
                    </h4>

                    <div className="overflow-x-auto">
                      <div className="min-w-[680px] rounded-2xl border border-gray-100 overflow-hidden">
                        <div
                          className="grid bg-gray-50 border-b border-gray-100"
                          style={{
                            gridTemplateColumns: `220px repeat(${tierSets.length}, 1fr)`,
                          }}
                        >
                          <div className="p-4 text-sm font-semibold text-gray-700">
                            Item
                          </div>
                          {tierSets.map((t) => (
                            <div key={t.id} className="p-4 text-sm font-semibold text-gray-900">
                              <div className="flex items-baseline justify-between gap-2">
                                <span>{t.name}</span>
                                <span className="text-purple-700 font-bold">
                                  {t.price}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>

                        {["Pages"].map((scopeLabel) => (
                          <div
                            key={scopeLabel}
                            className="grid border-b border-gray-100 last:border-b-0"
                            style={{
                              gridTemplateColumns: `220px repeat(${tierSets.length}, 1fr)`,
                            }}
                          >
                            <div className="p-4 text-sm text-gray-700">
                              {scopeLabel}
                            </div>
                            {tierSets.map((t) => {
                              const found = t.scope.find((s) => s.label === scopeLabel);
                              return (
                                <div key={t.id} className="p-4 text-sm text-gray-900 font-semibold">
                                  {found?.value || "—"}
                                </div>
                              );
                            })}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Capabilities */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">
                      Capabilities
                    </h4>

                    <div className="overflow-x-auto">
                      <div className="min-w-[680px] rounded-2xl border border-gray-100 overflow-hidden">
                        <div
                          className="grid bg-gray-50 border-b border-gray-100"
                          style={{
                            gridTemplateColumns: `220px repeat(${tierSets.length}, 1fr)`,
                          }}
                        >
                          <div className="p-4 text-sm font-semibold text-gray-700">
                            Feature
                          </div>
                          {tierSets.map((t) => (
                            <div key={t.id} className="p-4 text-sm font-semibold text-gray-900">
                              {t.name}
                            </div>
                          ))}
                        </div>

                        {features.map((f) => (
                          <div
                            key={f.id}
                            className="grid border-b border-gray-100 last:border-b-0"
                            style={{
                              gridTemplateColumns: `220px repeat(${tierSets.length}, 1fr)`,
                            }}
                          >
                            <div className="p-4 text-sm text-gray-700">
                              {f.label}
                            </div>

                            {tierSets.map((t) => {
                              const has = t.includes.has(f.id);
                              return (
                                <div key={t.id} className="p-4 grid place-items-center">
                                  {has ? (
                                    <span className="w-7 h-7 rounded-full bg-purple-100 text-purple-700 grid place-items-center">
                                      <FontAwesomeIcon icon={faCheck} className="w-4 h-4" />
                                    </span>
                                  ) : (
                                    <span className="w-7 h-7 rounded-full bg-gray-100 text-gray-400 grid place-items-center">
                                      <FontAwesomeIcon icon={faMinus} className="w-4 h-4" />
                                    </span>
                                  )}
                                </div>
                              );
                            })}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Revisions note (optional) */}
                    {data.revisions?.description ? (
                      <div className="mt-6 rounded-2xl border border-gray-100 bg-gray-50 p-5">
                        <p className="text-sm font-semibold text-gray-900">
                          {data.revisions?.title || "How revisions work"}
                        </p>
                        <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                          {data.revisions.description}
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