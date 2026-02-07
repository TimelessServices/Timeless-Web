"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";

export function ServiceAudience({ data }) {
  if (!data?.bestFit?.length && !data?.fitCheck?.length) return null;

  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-4 max-w-[1280px]">
        <div className="max-w-5xl mx-auto">
          {/* Shared container */}
          <div className="rounded-3xl border border-slate-200 bg-white shadow-sm overflow-hidden">
            <div className="grid grid-cols-1">
              {/* Best Fit For */}
              {data.bestFit?.length > 0 && (
                <div className="p-8 md:p-10">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-headings font-bold text-gray-900">
                      Best Fit For
                    </h3>
                    <span className="hidden sm:inline-flex items-center rounded-full border border-purple-200 bg-purple-50 px-3 py-1 text-xs font-semibold text-purple-700">
                      Recommended
                    </span>
                  </div>

                  <ul className="space-y-4">
                    {data.bestFit.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-gray-700 leading-relaxed"
                      >
                        <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-purple-50 ring-1 ring-purple-200 flex-shrink-0">
                          <span className="text-purple-700 text-sm leading-none">
                            <FontAwesomeIcon icon={faCheck} className="w-2 h-2" />
                          </span>
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Not Ideal If */}
              {data.notIdeal?.length > 0 && (
                <div className="p-8 md:p-10 bg-slate-50/70">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-headings font-bold text-gray-900">
                      Not Ideal If
                    </h3>
                    <span className="hidden sm:inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-600">
                      Considerations
                    </span>
                  </div>

                  <ul className="space-y-4">
                    {data.notIdeal.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-gray-700 leading-relaxed"
                      >
                        <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white ring-1 ring-slate-200 flex-shrink-0">
                          <span className="text-slate-500 text-sm leading-none">
                            <FontAwesomeIcon icon={faTimes} className="w-2 h-2" />
                          </span>
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Optional subtle footer line for polish (no text changes) */}
          <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
        </div>
      </div>
    </section>
  );
}
