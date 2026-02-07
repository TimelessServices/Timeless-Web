"use client";
import Image from "next/image";
import { motion } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export function ServicePoints({ data, reverse = false, }) {
  if (!data) return null;
  const { title, description, image, items } = data;

  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-4 max-w-[1280px]">
        <div
          className={[
            "flex flex-col lg:flex-row items-center gap-12 lg:gap-20",
            reverse ? "lg:flex-row-reverse" : "",
          ].join(" ")}
        >
          {/* Text */}
          <motion.div
            className="flex-1 w-full lg:w-1/2"
            initial={{ opacity: 0, x: reverse ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-headings font-bold text-gray-900 mb-6">
              {title}
            </h2>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {description}
            </p>

            {Array.isArray(items) && items.length > 0 && (
              <ul className="space-y-6">
                {items.map((text, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                        <FontAwesomeIcon icon={faCheck} className="w-2 h-2" />
                      </div>
                    </div>

                    <p className="text-gray-700 font-normal">{text}</p>
                  </li>
                ))}
              </ul>
            )}
          </motion.div>

          {/* Image */}
          <motion.div
            className="flex-1 w-full lg:w-1/2 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={image?.src}
                alt={image?.alt}
                width={600}
                height={600}
                className="w-full h-auto object-cover"
                priority={false}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}