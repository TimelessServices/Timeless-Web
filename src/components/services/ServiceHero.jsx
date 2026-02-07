"use client";
import { motion } from "framer-motion";
import { HeaderForm } from "../form/HeaderForm";

export function ServiceHero({ title, description, serviceSlug, serviceLabel }) {
  return (
    <section className="relative w-full py-24 bg-[#9810fa] overflow-hidden">
      <div className="container mx-auto max-w-[1280px] px-8 pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: Copy */}
          <div>
            <h1 className="text-4xl md:text-5xl font-headings font-bold text-white mb-6 leading-tight">
              {title}
            </h1>

            <p className="text-lg text-white max-w-xl">
              {description}
            </p>
          </div>

          {/* Right: Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 max-w-md w-full mx-auto"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-8">
              Get A Free Quote
            </h3>

            <HeaderForm serviceSlug={serviceSlug} serviceLabel={serviceLabel} />
          </motion.div>

        </div>
      </div>
    </section>
  );
}