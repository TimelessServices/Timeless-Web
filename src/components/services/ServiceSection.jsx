"use client";

import Link from "next/link";
import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faGears,
  faListCheck,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

export function ServiceSection({ data }) {
  if (!data) return null;

  const { slug, label, description, benefit, service, deliverable, image } = data;

  return (
    <section className="py-10 border-b border-slate-200">
      <div className="container mx-auto px-4 max-w-[1280px]">
        <Link
          href={`/services/${slug}`}
          className="group block rounded-2xl p-6 transition hover:bg-slate-50"
        >
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Text */}
            <div className="flex-1">
              <div className="flex items-center justify-between gap-4">
                <h2 className="text-2xl font-headings font-bold text-gray-900">
                  {label}
                </h2>

                <span className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-gray-900">
                  View service
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
                      <p className="text-sm font-semibold text-gray-900">Benefit</p>
                      <p className="mt-1 text-sm text-gray-700">{benefit}</p>
                    </div>
                  </div>

                  <div className="border-t border-slate-200" />

                  <div className="flex gap-4 p-4">
                    <div className="mt-0.5 flex-shrink-0 w-9 h-9 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center">
                      <FontAwesomeIcon icon={faGears} className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">Service</p>
                      <p className="mt-1 text-sm text-gray-700">{service}</p>
                    </div>
                  </div>

                  <div className="border-t border-slate-200" />

                  <div className="flex gap-4 p-4">
                    <div className="mt-0.5 flex-shrink-0 w-9 h-9 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center">
                      <FontAwesomeIcon icon={faListCheck} className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">Deliverable</p>
                      <p className="mt-1 text-sm text-gray-700">{deliverable}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile-only link hint */}
              <div className="mt-5 sm:hidden inline-flex items-center gap-2 text-sm font-semibold text-gray-900">
                View service
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="w-4 h-4 transition-transform group-hover:translate-x-1"
                />
              </div>
            </div>

            {/* Image */}
            {image?.src ? (
              <div className="w-full lg:w-[360px]">
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-slate-200 bg-white">
                  <Image
                    src={image.src}
                    alt={image.alt || `${label} preview`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 360px"
                  />
                </div>
              </div>
            ) : null}
          </div>
        </Link>
      </div>
    </section>
  );
}
