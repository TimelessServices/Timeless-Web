export const socialsPackages = {
  meta: {
    title: "Socials Packages | Timeless Web",
    description: "Practical social media management packages designed for consistent posting and steady growth.",
  },

  hero: {
    title: "Social Media Management That Stays Consistent",
    description: "Choose a plan based on how often you want to post and how many platforms you want to support. Every plan includes the essentials — the tiers below cover everything beyond that baseline.",
  },

  included: {
    title: "Included With Every Plan",
    description: "These are the essentials needed for consistent posting and clear performance tracking. They’re not upgrades — they’re the baseline.",
    items: [
      "Content planning and a posting calendar",
      "Hashtag research to support reach and relevance",
      "Weekly analytics reports to track performance and direction",
    ],
  },

  featureCatalog: [
    { id: "communityEngagement", label: "Community engagement" },
    { id: "strategyCall", label: "Monthly strategy call" },
  ],

  revisions: {
    title: "How changes work",
    description: "You’ll share updates and adjustments in one clear pass. Major direction shifts, new content types, or extra platforms are scoped separately.",
  },

  tiers: [
    {
      id: "starter",
      name: "Starter",
      price: "$69/mo",
      summary: "For creators and small businesses getting started with consistent posting.",
      description: "A simple, reliable plan focused on consistency and clarity without extra layers.",
      scope: [
        { label: "Posts / week", value: "3" },
        { label: "Platforms", value: "1" },
      ],
      includes: [],
    },
    {
      id: "growth",
      name: "Growth",
      price: "$99/mo",
      summary: "For growing brands that want stronger presence and better engagement.",
      description: "More output, more reach, and the added support needed to build momentum over time.",
      scope: [
        { label: "Posts / week", value: "5" },
        { label: "Platforms", value: "2" },
      ],
      includes: ["communityEngagement", "strategyCall"],
    },
    {
      id: "pro",
      name: "Pro",
      price: "$129/mo",
      summary: "For businesses ready to post frequently and grow with a clearer strategy.",
      description: "Built for higher consistency across multiple platforms, with ongoing engagement and a strategy-led approach.",
      scope: [
        { label: "Posts / week", value: "7" },
        { label: "Platforms", value: "3" },
      ],
      includes: ["communityEngagement", "strategyCall"],
      badge: "Most Popular",
    },
  ],

  compare: {
    title: "Compare plans",
    description: "A quick overview of what changes between tiers. Everything listed in “Included With Every Plan” applies to every package.",
    featureOrder: ["communityEngagement", "strategyCall"],
  },

  faq: [
    {
      question: "What’s included with every plan?",
      answer: "Every plan includes content planning and a calendar, hashtag research, and weekly analytics reports. The tiers cover output volume, platform coverage, and additional support like engagement and strategy.",
    },
    {
      question: "Do plans include paid tools or third-party services?",
      answer: "Plans cover management and delivery. Any paid tools, subscriptions, or third-party services are handled separately so you know exactly what you’re paying for.",
    },
    {
      question: "Can I change plans later?",
      answer: "Yes. You can upgrade or adjust your plan as your posting needs change over time.",
    },
  ],
};