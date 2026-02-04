"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faPaperPlane,
  faUserCheck,
  faLaptopCode,
} from "@fortawesome/free-solid-svg-icons";

// Map string keys from JSON -> actual FontAwesome icon definitions
const ICON_MAP = {
  faPaperPlane,
  faUserCheck,
  faLaptopCode,
};

export function ServiceBenefits({ data }) {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-[1280px]">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-headings font-bold text-gray-900">
            {data.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto">
          {data.items.map((item, index) => {
            const iconDef = ICON_MAP[item.icon];

            return (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-[#9810fa] rounded-2xl flex items-center justify-center mb-6 shadow-lg transition-transform duration-300">
                  {/* If icon key is missing/mistyped, don't crash the page */}
                  {iconDef ? (
                    <FontAwesomeIcon icon={iconDef} className="text-white text-3xl" />
                  ) : (
                    <div className="text-white text-xs px-2 opacity-80">Missing icon</div>
                  )}
                </div>

                <h3 className="text-xl font-bold font-headings text-gray-900 mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-relaxed max-w-xs mx-auto">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}