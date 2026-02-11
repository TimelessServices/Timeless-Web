"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faMinus } from "@fortawesome/free-solid-svg-icons";

export function CompareContent({
  tierSets,
  orderedScopeLabels,
  features,
  revisions,
}) {
  const labelColClass = "text-sm text-gray-600 w-[120px]";
  const valueClass = "text-sm font-semibold text-gray-900 text-right";

  return (
    <div className="flex-1 overflow-y-auto">
      <div className="p-4 sm:p-6 space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {tierSets.map((t) => (
            <div
              key={t.id}
              className="rounded-2xl border border-gray-100 bg-white overflow-hidden shadow-sm"
            >
              {/* Tier header */}
              <div className="p-4 sm:p-5 bg-gray-50 border-b border-gray-100 flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <div className="text-base font-semibold text-gray-900 truncate">
                    {t.name}
                  </div>
                  <div className="mt-1 text-xs text-gray-500">
                    What you get in this tier
                  </div>
                </div>

                <div className="text-right shrink-0">
                  <div className="text-xs text-gray-500">From</div>
                  <div className="text-lg font-bold text-purple-700 leading-tight">
                    {t.price}
                  </div>
                </div>
              </div>

              <div className="p-4 sm:p-5 space-y-6">
                {/* Scope */}
                <section>
                  <h4 className="text-xs font-semibold text-gray-900 tracking-wide uppercase">
                    Scope
                  </h4>

                  <dl className="mt-3 space-y-2">
                    {orderedScopeLabels.map((label) => {
                      const found = t.scope.find((s) => s.label === label);

                      return (
                        <div key={label} className="p-4 gap-2 flex items-start justify-between rounded-xl bg-slate-50">
                          <dt className={labelColClass}>{label}</dt>
                          <dd className={valueClass}>{found?.value || "—"}</dd>
                        </div>
                      );
                    })}
                  </dl>
                </section>

                {/* Capabilities */}
                <section>
                  <h4 className="text-xs font-semibold text-gray-900 tracking-wide uppercase">
                    Capabilities
                  </h4>

                  <ul className="mt-3 space-y-2">
                    {features.map((f) => {
                      const has = t.includes.has(f.id);

                      return (
                        <li key={f.id} className="p-4 gap-2 flex items-start justify-between rounded-xl bg-slate-50">
                          <span className="text-sm text-gray-700 min-w-0"> {f.label} </span>

                          {has ? (
                            <span className="w-8 h-8 rounded-full bg-slate-200 text-purple-700 grid place-items-center shrink-0">
                              <FontAwesomeIcon
                                icon={faCheck}
                                className="w-4 h-4"
                              />
                            </span>
                          ) : (
                            <span className="w-8 h-8 rounded-full bg-slate-200 text-gray-700 grid place-items-center shrink-0">
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
                </section>
              </div>
            </div>
          ))}
        </div>

        {/* Revisions note (optional) */}
        {revisions?.description ? (
          <div className="rounded-2xl border border-gray-100 bg-gray-50 p-5">
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
  );
}