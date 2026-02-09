"use client";
import Accordion from "@/components/ui/Accordion";

export function ServiceFAQ({ data }) {
  const accordionItems = (data ?? []).map((f) => ({
    title: f.question,
    content: f.answer,
  }));

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-[1280px]">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-headings font-bold text-gray-900 mb-4">
            FAQ
          </h2>
        </div>

        <Accordion items={accordionItems} />
      </div>
    </section>
  );
}