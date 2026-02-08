"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faCircle } from "@fortawesome/free-solid-svg-icons";

export function PackageItem({ data }) {
  if (!data) return null;

  const {
    name,
    price,
    summary,
    description,
    scope,
    featuresResolved = [],
    badge,
  } = data;

  const showBadge =
    typeof badge === "string" &&
    badge.trim().length > 0 &&
    badge.trim().toLowerCase() !== String(name).trim().toLowerCase();

  const scopeText =
    Array.isArray(scope) && scope.length > 0
      ? scope.map((s) => `${s.label}: ${s.value}`).join(" • ")
      : " ";

  return (
    <article className="h-full rounded-3xl border border-gray-200 bg-white shadow-sm overflow-hidden flex flex-col">
      {/* Tinted header (fixed structure) */}
      <div className={`flex flex-col p-6 gap-4 border-b border-gray-100 ${name === "Business" ? "bg-purple-100" : "bg-slate-50"}`}>
        {/* Badge slot (reserved space) */}
        <div className="h-6">
          {showBadge ? (
            <span className="inline-flex text-[11px] font-semibold px-3 py-1 rounded-full bg-gray-800 text-white">
              {badge}
            </span>
          ) : null}
        </div>

        {/* Name + price */}
        <div className="flex items-end justify-between gap-4">
          <h3 className="text-xl font-bold font-headings text-gray-900">
            {name}
          </h3>

          <div className="text-right">
            <div className="text-3xl font-bold text-gray-900 leading-none">
              {price}
            </div>
          </div>
        </div>

        {/* Summary (clamped to 2 lines, reserved height) */}
        <p className="text-sm text-gray-600 leading-relaxed max-w-[52ch] min-h-[2.75rem]">
          {summary || " "}
        </p>

        {/* Scope (single line, reserved height) */}
        <p className="text-xs text-gray-500">
          {scopeText}
        </p>
      </div>

      {/* Body */}
      <div className="p-6 flex flex-col flex-1">
        {description ? (
          <p className="text-gray-700 leading-relaxed px-3 min-h-50">
            {description}
          </p>
        ) : null}

        <div className="mt-auto pt-4 border-t-2 border-gray-100">
          {featuresResolved.length > 0 ? (
            <ul className="space-y-2">
              {featuresResolved.map((label, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-sm text-gray-700"
                >
                  <div className="mt-0.5 w-6 h-6 rounded-full bg-purple-100 grid place-items-center text-purple-700 flex-shrink-0">
                    <FontAwesomeIcon icon={faCheck} className="w-3 h-3" />
                  </div>
                  <span>{label}</span>
                </li>
              ))}
            </ul>
          ) : (
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <FontAwesomeIcon icon={faCircle} className="w-2 h-2 opacity-60" />
              <span>Beyond the essentials, this tier stays focused and simple.</span>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
