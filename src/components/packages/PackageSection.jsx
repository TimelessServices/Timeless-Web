"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faLayerGroup,
  faTag,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

export function PackageSection({ data }) {
  if (!data) return null;

  const { slug, label, description, includedLine, tiersLine, fromPrice } = data;

  return (
    <Link
      href={`/packages/${slug}`}
      className="group block rounded-2xl border border-slate-200 bg-white p-6 transition hover:bg-slate-50"
    >
      <div className="flex items-start justify-between gap-4">
        <h2 className="text-2xl font-headings font-bold text-gray-900">
          {label}
        </h2>

        <span className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-gray-900">
          View packages
          <FontAwesomeIcon
            icon={faArrowRight}
            className="w-4 h-4 transition-transform group-hover:translate-x-1"
          />
        </span>
      </div>

      <p className="mt-2 text-gray-700 max-w-[70ch]">{description}</p>

      {/* Icon rail */}
      <div className="mt-6 rounded-2xl border border-slate-200 bg-white overflow-hidden">
        <div className="flex flex-col">
          <div className="flex gap-4 p-4">
            <div className="mt-0.5 flex-shrink-0 w-9 h-9 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center">
              <FontAwesomeIcon icon={faCircleCheck} className="w-4 h-4" />
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900">Included</p>
              <p className="mt-1 text-sm text-gray-700">
                {includedLine || "Baseline essentials included"}
              </p>
            </div>
          </div>

          <div className="border-t border-slate-200" />

          <div className="flex gap-4 p-4">
            <div className="mt-0.5 flex-shrink-0 w-9 h-9 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center">
              <FontAwesomeIcon icon={faLayerGroup} className="w-4 h-4" />
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900">Tiers</p>
              <p className="mt-1 text-sm text-gray-700">
                {tiersLine || "Tiered options available"}
              </p>
            </div>
          </div>

          <div className="border-t border-slate-200" />

          <div className="flex gap-4 p-4">
            <div className="mt-0.5 flex-shrink-0 w-9 h-9 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center">
              <FontAwesomeIcon icon={faTag} className="w-4 h-4" />
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900">Pricing</p>
              <p className="mt-1 text-sm text-gray-700">
                {fromPrice || "See pricing by tier"}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile link hint */}
      <div className="mt-5 sm:hidden inline-flex items-center gap-2 text-sm font-semibold text-gray-900">
        View packages
        <FontAwesomeIcon
          icon={faArrowRight}
          className="w-4 h-4 transition-transform group-hover:translate-x-1"
        />
      </div>
    </Link>
  );
}