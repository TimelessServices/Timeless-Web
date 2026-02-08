export const webPackages = {
  meta: {
    title: "Website Packages | Timeless Web",
    description: "Clear website packages designed for growing businesses — from simple launches to custom builds.",
  },

  hero: {
    title: "Website Packages Built for Real Businesses",
    description: "Pick a package that fits what you need now, with room to grow later. Every website includes the essentials — the packages below cover everything beyond that baseline.",
  },

  included: {
    title: "Included With Every Website",
    description: "Every website we build includes the essentials needed to look professional, work properly, and be found online. These aren’t add-ons or upgrades — they’re the baseline for a usable business website.",
    items: [
      "A clean, modern layout that works properly on mobile, tablet, and desktop",
      "Clear structure and page flow so visitors can easily understand what you offer",
      "A sensible contact pathway that’s easy to find and use",
      "Core SEO setup so your site can be indexed and displayed correctly in search results",
      "Performance and security fundamentals (compressed assets and HTTPS-ready deployment)",
      "Content structure and polish to turn rough ideas into clear, web-ready pages",
      "Stock images included where needed",
    ],
  },

  featureCatalog: [
    { id: "contentMigration", label: "Content migration" },
    { id: "advancedNavigation", label: "Advanced navigation" },
    { id: "blogSetup", label: "Blog setup" },
    { id: "cmsAccess", label: "CMS access" },
    { id: "strategySession", label: "Strategy session" },
  ],

  revisions: {
    title: "How revisions work",
    description: "Revisions are grouped feedback rounds within the agreed scope. You review the build, share changes in one clear pass, and we apply them together. Major changes or new sections are treated as additional scope.",
  },

  tiers: [
    {
      id: "starter",
      name: "Starter",
      price: "$640",
      summary:
        "A clean, professional website for businesses that need a solid online presence they can confidently share.",
      description:
        "Built with clear structure and focused content, this package is ideal for simple sites that explain what you do and make it easy for customers to get in touch — without unnecessary complexity.",
      scope: [
        { label: "Pages", value: "2 pages, max." },
      ],
      includes: [],
    },
    {
      id: "business",
      name: "Business",
      price: "$1,180",
      summary: "A complete website for businesses that need room to explain services and guide customers with confidence.",
      description: "With additional pages and greater flexibility, this package suits businesses that need more detail, clearer navigation, and space to grow beyond the basics.",
      scope: [ { label: "Pages", value: "4 pages, max." }, ],
      includes: ["contentMigration"],
      badge: "Most Popular"
    },
    {
      id: "growth",
      name: "Growth",
      price: "$2,040",
      summary: "A scalable website built for businesses ready to expand their content and visibility over time.",
      description: "Designed to support larger structures, advanced navigation, and ongoing publishing, this package is ideal for businesses that plan to grow, share updates, or build long-term search presence.",
      scope: [ { label: "Pages", value: "Unlimited" }, ],
      includes: ["contentMigration", "advancedNavigation", "blogSetup"],
    },
    {
      id: "custom",
      name: "Custom",
      price: "$3,000+",
      summary: "A tailored website build for businesses with specific requirements, complex structures, or ongoing control needs.",
      description: "This package allows for deeper planning, custom architecture, CMS access, and a strategy-led approach to ensure the site fits how your business actually operates — now and into the future.",
      scope: [ { label: "Pages", value: "Tailored" }, ],
      includes: ["contentMigration", "advancedNavigation", "blogSetup", "cmsAccess", "strategySession"],
      badge: "Price Depends on Scope",
    },
  ],

  compare: {
    title: "Compare packages",
    description: "A quick overview of what changes between tiers. Everything listed in “Included With Every Website” applies to every package.",
    featureOrder: ["contentMigration", "advancedNavigation", "blogSetup", "cmsAccess", "strategySession"],
  },

  faq: [
    {
      question: "What’s included with every package?",
      answer: "Every package includes the essentials needed for a professional website: responsive design, clear structure, a contact pathway, core SEO setup, and performance/security fundamentals. The tiers cover everything beyond that baseline.",
    },
    {
      question: "How do revisions work?",
      answer: "Revisions are grouped feedback rounds within the agreed scope. You review the build, share changes in one clear pass, and we apply them together. Major changes or new sections are treated as additional scope.",
    },
    {
      question: "Can I start small and upgrade later?",
      answer: "Yes. Most websites can be expanded over time with additional pages or features. We’ll recommend the most practical path based on what you need now and what you want to grow into.",
    },
    {
      question: "Do you include blog setup in every package?",
      answer: "Blog setup is included in the Growth tier and above. If you don’t plan to publish content regularly, you may not need it.",
    },
    {
      question: "Do packages include third-party integrations or paid services?",
      answer: "Packages cover your website build and structure. Integrations, paid services, or third-party tools (including anything with external billing) are scoped separately so you know exactly what you're paying for.",
    },
  ],
};