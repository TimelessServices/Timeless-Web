"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faCircle } from "@fortawesome/free-solid-svg-icons";

function isMostPopularBadge(badge) {
  if (typeof badge !== "string") return false;
  const b = badge.trim().toLowerCase();
  return (
    b.includes("most popular") || b.includes("popular") || b.includes("recommended")
  );
}

function formatPrice(price) {
  return price;
}

export function PackageItem({ data }) {
  if (!data) return null;

  const {
    name,
    price,
    summary,
    description,
    featuresResolved = [],
    badge,
    emptyFeaturesNote,
  } = data;

  const showBadge =
    typeof badge === "string" &&
    badge.trim().length > 0 &&
    badge.trim().toLowerCase() !== String(name).trim().toLowerCase();

  const featured = isMostPopularBadge(badge);

  return (
    <article className="h-full rounded-3xl border border-gray-200 bg-white shadow-sm overflow-hidden flex flex-col">
      {/* Header */}
      <div
        className={[
          "border-b border-gray-100",
          featured ? "bg-purple-100" : "bg-slate-50",
        ].join(" ")}
      >
        <div className="px-6 py-7">
          {/* Badge slot (reserved space) */}
          <div className="h-6">
            {showBadge ? (
              <span
                className={[
                  "inline-flex text-[11px] font-semibold px-3 py-1 rounded-full",
                  featured ? "bg-purple-700 text-white" : "bg-gray-800 text-white",
                ].join(" ")}
              >
                {badge}
              </span>
            ) : null}
          </div>

          {/* Title */}
          <h3 className="mt-4 text-2xl font-bold font-headings text-gray-900 leading-snug break-words">
            {name}
          </h3>

          {/* Price (always below title) */}
          <div className="mt-2">
            <div className="mt-2 text-xl font-bold text-gray-900 leading-none">
              {String(formatPrice(price)).replace("/mo", "")}
              {String(formatPrice(price)).includes("/mo") ? (
                <span className="ml-1 text-sm font-semibold text-gray-600 align-top">
                  /mo
                </span>
              ) : null}
            </div>
          </div>

          {/* Summary */}
          <p className="mt-4 text-sm text-gray-600 leading-relaxed min-h-[2.5rem]">
            {summary || " "}
          </p>
        </div>
      </div>

      {/* Body */}
      <div className="p-6 flex flex-col flex-1">
        {description ? (
          <p className="pb-4 text-gray-700 leading-relaxed min-h-[4.5rem]">
            {description}
          </p>
        ) : null}

        <div className="mt-auto pt-2 border-t-2 border-gray-100">
          {featuresResolved.length > 0 ? (
            <ul className="space-y-2">
              {featuresResolved.map((label, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                  <div className="mt-0.5 w-6 h-6 rounded-full bg-purple-100 grid place-items-center text-purple-700 flex-shrink-0">
                    <FontAwesomeIcon icon={faCheck} className="w-3 h-3" />
                  </div>
                  <span>{label}</span>
                </li>
              ))}
            </ul>
          ) : (
            <div className="flex items-start gap-2 text-sm text-gray-500">
              <FontAwesomeIcon
                icon={faCircle}
                className="w-2 h-2 mt-[0.4rem] opacity-60"
              />
              <span>
                {emptyFeaturesNote ||
                  "This plan focuses on the essentials and keeps things simple."}
              </span>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}