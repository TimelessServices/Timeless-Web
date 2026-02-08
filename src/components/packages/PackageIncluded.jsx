"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export function PackageIncluded({ data }) {
  if (!data) return null;

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 max-w-[1280px]">
        <div className="max-w-6xl px-4">
          <h2 className="text-2xl md:text-3xl font-headings font-bold text-gray-900">
            {data.title}
          </h2>

          {data.description ? (
            <p className="mt-4 text-gray-600 leading-relaxed">
              {data.description}
            </p>
          ) : null}

          {Array.isArray(data.items) && data.items.length > 0 ? (
            <ul className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              {data.items.map((text, i) => (
                <li key={i} className="flex items-start gap-3 rounded-2xl border border-gray-100 bg-gray-50 p-4">
                  <div className="mt-0.5 flex-shrink-0 w-7 h-7 rounded-full bg-purple-100 grid place-items-center text-purple-700">
                    <FontAwesomeIcon icon={faCheck} className="w-3 h-3" />
                  </div>
                  <p className="text-gray-700 leading-relaxed">{text}</p>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </section>
  );
}