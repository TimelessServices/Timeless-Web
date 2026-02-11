"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export function PackageHero({ data }) {
  if (!data) return null;

  return (
    <section className="w-full py-32 bg-[#9810fa]">
      <div className="container mx-auto px-4 max-w-[1280px]">

        {/* Back */}
        <div className="mb-10">
          <Link
            href="/packages"
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium
                       text-white/90 hover:text-white
                       bg-white/10 hover:bg-white/15
                       border border-white/15 hover:border-white/25
                       backdrop-blur transition-colors"
          >
            <FontAwesomeIcon icon={faArrowLeft} className="h-3.5 w-3.5" />
            Back to Packages
          </Link>
        </div>

        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-headings font-bold text-white">
            {data.title}
          </h1>
          {data.description ? (
            <p className="mt-5 text-base md:text-lg text-white leading-relaxed">
              {data.description}
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}