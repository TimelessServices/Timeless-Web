"use client";

export function PackageHero({ data }) {
  if (!data) return null;

  return (
    <section className="w-full py-32 bg-[#9810fa]">
      <div className="container mx-auto px-4 max-w-[1280px]">
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