export const packages = {
  "web-design": {
    label: "Web Development",

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
        summary: "A clean, professional website for businesses that need a solid online presence they can confidently share.",
        description: "Built with clear structure and focused content, this package is ideal for simple sites that explain what you do and make it easy for customers to get in touch — without unnecessary complexity.",
        scope: [{ label: "Pages", value: "2 pages, max." }],
        includes: [],
      },
      {
        id: "business",
        name: "Business",
        price: "$1,180",
        summary: "A complete website for businesses that need room to explain services and guide customers with confidence.",
        description: "With additional pages and greater flexibility, this package suits businesses that need more detail, clearer navigation, and space to grow beyond the basics.",
        scope: [{ label: "Pages", value: "4 pages, max." }],
        includes: ["contentMigration"],
        badge: "Most Popular",
      },
      {
        id: "growth",
        name: "Growth",
        price: "$2,040",
        summary: "A scalable website built for businesses ready to expand their content and visibility over time.",
        description: "Designed to support larger structures, advanced navigation, and ongoing publishing, this package is ideal for businesses that plan to grow, share updates, or build long-term search presence.",
        scope: [{ label: "Pages", value: "Unlimited" }],
        includes: ["contentMigration", "advancedNavigation", "blogSetup"],
      },
      {
        id: "custom",
        name: "Custom",
        price: "$3,000+",
        summary: "A tailored website build for businesses with specific requirements, complex structures, or ongoing control needs.",
        description: "This package allows for deeper planning, custom architecture, CMS access, and a strategy-led approach to ensure the site fits how your business actually operates — now and into the future.",
        scope: [{ label: "Pages", value: "Tailored" }],
        includes: [
          "contentMigration",
          "advancedNavigation",
          "blogSetup",
          "cmsAccess",
          "strategySession",
        ],
        badge: "Price Depends on Scope",
      },
    ],

    compare: {
      title: "Compare Packages",
      description: "A quick overview of what changes between tiers. Everything listed in “Included With Every Website” applies to every package.",
      scopeOrder: ["Pages"],
      featureOrder: [
        "contentMigration",
        "advancedNavigation",
        "blogSetup",
        "cmsAccess",
        "strategySession",
      ],
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
  },

  "app-design": {
    label: "App Development",

    meta: {
        title: "App Development Packages | Timeless Web",
        description: "Practical app development packages designed around your workflows — from simple internal tools to scalable systems.",
    },

    hero: {
        title: "App Development Packages Built Around Your Workflow",
        description: "Our app packages focus on clarity, structure, and delivery. We plan the right scope first, build what matters most, and leave room to grow without unnecessary complexity.",
    },

    included: {
        title: "Included With Every App",
        description: "Every app we build includes the foundations needed for a stable, usable system. These aren’t optional upgrades — they’re essential to delivering something that works in the real world.",
        items: [
        "Discovery and requirements alignment to define goals, users, and workflows",
        "UX and flow planning so the app is clear and easy to use",
        "MVP boundary definition to keep scope focused and intentional",
        "Core architecture and data model planning",
        "Application build with testing and bug fixes",
        "Deployment setup and launch support",
        "Post-launch stabilisation period for fixes and refinements",
        "Handover guidance so you know how to use and extend the system",
        ],
    },

    featureCatalog: [
        { id: "authRoles", label: "Authentication and role-based access" },
        { id: "adminDashboard", label: "Admin dashboard for managing users and data" },
        { id: "integrations", label: "Third-party integrations (payments, email, tools)" },
        { id: "automationWorkflows", label: "Automation workflows and background processes" },
        { id: "analyticsTracking", label: "Usage and performance analytics" },
        { id: "testingCoverage", label: "Expanded testing and QA coverage" },
        { id: "securityHardening", label: "Security hardening and safeguards" },
        { id: "postLaunchSupport", label: "Ongoing support and iteration options" },
    ],

    revisions: {
        title: "How changes work",
        description: "Feedback is handled at clear milestones throughout the project. You review progress, send updates in one pass, and we apply them together. New features, workflows, or major changes are treated as additional scope to keep delivery clean and predictable.",
    },

    tiers: [
        {
            id: "core",
            name: "Core",
            price: "$2,500",
            summary: "For simple internal tools or focused applications with a single workflow.",
            description: "Ideal for businesses that need a practical app to solve a specific problem without unnecessary complexity.",
            scope: [
                { label: "Application scope", value: "Single workflow or tool" },
                { label: "Users & roles", value: "Single role" },
                { label: "Data & logic", value: "Basic data handling" },
                { label: "Integrations", value: "—" },
                { label: "QA & support", value: "Baseline testing + stabilisation" },
            ],
            includes: [],
        },

        {
            id: "pro",
            name: "Pro",
            price: "$5,500",
            summary: "For apps that support multiple workflows and require user access control.",
            description: "A stronger foundation for growing businesses that need more structure, flexibility, and integration.",
            scope: [
                { label: "Application scope", value: "Multiple workflows" },
                { label: "Users & roles", value: "Multiple roles" },
                { label: "Data & logic", value: "Structured logic and validation" },
                { label: "Integrations", value: "Up to 1 integration" },
                { label: "QA & support", value: "Expanded testing" },
            ],
            includes: ["authRoles", "integrations"],
            badge: "Most Popular",
        },

        {
            id: "scale",
            name: "Scale",
            price: "$9,500",
            summary: "For scalable systems that need admin control, automation, and insight.",
            description: "Designed for businesses ready to operate and evolve a more complex application over time.",
            scope: [
                { label: "Application scope", value: "System-level application" },
                { label: "Users & roles", value: "Role-based access" },
                { label: "Data & logic", value: "Advanced workflows and automation" },
                { label: "Integrations", value: "Multiple integrations" },
                { label: "QA & support", value: "Extended QA and monitoring" },
            ],
            includes: [
                "authRoles",
                "adminDashboard",
                "integrations",
                "automationWorkflows",
                "analyticsTracking",
                "testingCoverage",
            ],
        },

        {
            id: "custom",
            name: "Custom",
            price: "$15,000+",
            summary: "A tailored build for complex systems, platforms, or long-term products.",
            description: "For businesses with specific requirements, deeper integrations, or ongoing development needs.",
            scope: [
                { label: "Application scope", value: "Tailored to requirements" },
                { label: "Users & roles", value: "Custom access model" },
                { label: "Data & logic", value: "Complex logic and architecture" },
                { label: "Integrations", value: "Custom integrations" },
                { label: "QA & support", value: "Ongoing support and iteration" },
            ],
            includes: [
                "authRoles",
                "adminDashboard",
                "integrations",
                "automationWorkflows",
                "analyticsTracking",
                "testingCoverage",
                "securityHardening",
                "postLaunchSupport",
            ],
            badge: "Price Depends on Scope",
        },
    ],

    compare: {
        title: "Compare Packages",
        description: "A high-level comparison of what changes between app packages. Everything listed in “Included With Every App” applies to all tiers.",
        scopeOrder: [
            "Application scope",
            "Users & roles",
            "Data & logic",
            "Integrations",
            "QA & support",
        ],
        featureOrder: [
            "authRoles",
            "integrations",
            "adminDashboard",
            "automationWorkflows",
            "analyticsTracking",
            "testingCoverage",
            "securityHardening",
            "postLaunchSupport",
        ],
    },

    faq: [
        {
            question: "What’s included with every app package?",
            answer: "Every package includes discovery, planning, MVP boundary definition, build, testing, deployment, and a stabilisation period after launch. The tiers cover everything beyond that baseline.",
        },
        {
            question: "What does MVP mean in your process?",
            answer: "MVP refers to defining a clear first version of the app that delivers value without unnecessary features. This helps keep projects focused, on budget, and easier to evolve over time.",
        },
        {
            question: "Can you integrate with my existing tools?",
            answer: "Yes. We regularly integrate apps with third-party tools such as payment systems, CRMs, email platforms, or internal services where appropriate.",
        },
        {
            question: "Do you provide hosting and deployment?",
            answer: "Yes. We help deploy your app and ensure it’s configured securely and reliably for real-world use.",
        },
        {
            question: "How long does an app project take?",
            answer: "Timelines vary based on scope and complexity. Smaller tools may take a few weeks, while larger systems take longer. We provide clear expectations before starting.",
        },
        {
            question: "What happens after launch?",
            answer: "All projects include a stabilisation period. Ongoing support, improvements, and feature additions can be handled separately or as part of a longer-term arrangement.",
        },
        {
            question: "What if I’m not sure what I need yet?",
            answer: "That’s completely fine. We’ll help clarify requirements during the discovery phase and recommend the most practical path forward.",
        },
    ],
    },

  "digital-marketing": {
    label: "Digital Marketing",

    meta: {
      title: "Digital Marketing Packages | Timeless Web",
      description: "Practical digital marketing packages built for consistency, clarity, and steady growth — without hype or guesswork.",
    },

    hero: {
      title: "Digital Marketing That Stays Consistent",
      description: "Choose a plan based on output, platforms, and support level. Every plan includes the essentials — tiers add capacity, optimisation, and strategy.",
    },

    included: {
      title: "Included With Every Plan",
      description: "These are the baseline essentials for consistent publishing and clear direction. They’re not upgrades — they’re what makes the service usable.",
      items: [
        "Onboarding + goals check-in to align your content with what the business actually needs",
        "Content pillars (themes) so posts stay consistent and on-brand",
        "A rolling content calendar so you can see what’s coming before it goes live",
        "Caption writing and basic hashtag research to support reach and relevance",
        "Scheduling and publishing (so you’re not stuck posting manually)",
        "Baseline performance tracking with simple takeaways (not vanity metrics)",
        "A clear approvals + changes process to prevent last-minute chaos",
      ],
    },

    featureCatalog: [
      {
        id: "communityEngagement",
        label: "Community engagement (comments + DMs, within scope)",
      },
      { id: "strategySession", label: "Monthly strategy session" },
      {
        id: "contentOptimization",
        label: "Performance-based optimisation (iterate what works)",
      },
      {
        id: "shortFormVideo",
        label:
          "Short-form video focus (Reels/Shorts-style content planning)",
      },
      {
        id: "campaignSupport",
        label: "Campaign support (launches, promos, seasonal pushes)",
      },
      {
        id: "repurposing",
        label:
          "Content repurposing across platforms (efficient format variations)",
      },
    ],

    revisions: {
      title: "How changes work",
      description: "Changes are handled through clear feedback rounds. You review scheduled content, send updates in one pass, and we apply them together. Major direction shifts, brand resets, or additional platforms/campaigns are treated as additional scope.",
    },

    tiers: [
      {
        id: "essentials",
        name: "Essentials",
        price: "$490/mo",
        summary: "For small businesses that need consistent posting without extra layers.",
        description: "A clean, reliable plan that keeps your pages active and professional — built around clarity, consistency, and simple execution.",
        scope: [
          { label: "Posts / week", value: "3" },
          { label: "Platforms", value: "1" },
          { label: "Reporting", value: "Monthly snapshot" },
          { label: "Engagement", value: "—" },
          { label: "Strategy", value: "—" },
        ],
        includes: [],
      },
      {
        id: "standard",
        name: "Standard",
        price: "$890/mo",
        summary: "For businesses ready to show more of what they do and build stronger presence.",
        description: "More output and platform coverage, plus repurposing to keep content efficient and consistent across channels.",
        scope: [
          { label: "Posts / week", value: "5" },
          { label: "Platforms", value: "2" },
          {
            label: "Reporting",
            value: "Monthly snapshot + quick wins",
          },
          { label: "Engagement", value: "Light monitoring" },
          { label: "Strategy", value: "Quarterly check-in (light)" },
        ],
        includes: ["repurposing"],
        badge: "Most Popular",
      },
      {
        id: "growth",
        name: "Growth",
        price: "$1,490/mo",
        summary: "For businesses that want momentum — engagement, iteration, and clearer direction.",
        description: "Built for steady growth with ongoing optimisation and support. We track performance patterns and refine content over time instead of posting blindly.",
        scope: [
          { label: "Posts / week", value: "7" },
          { label: "Platforms", value: "3" },
          {
            label: "Reporting",
            value: "Monthly report + optimisation notes",
          },
          { label: "Engagement", value: "Included (within scope)" },
          { label: "Strategy", value: "Monthly session" },
        ],
        includes: [
          "repurposing",
          "communityEngagement",
          "strategySession",
          "contentOptimization",
        ],
      },
      {
        id: "alwaysPresent",
        name: "Always Present",
        price: "$2,400+/mo",
        summary: "For brands that need a stronger marketing engine — campaigns, formats, and hands-on support.",
        description: "A tailored plan for businesses running promos, launches, and ongoing initiatives. Includes everything in Growth, plus campaign support and short-form focus — scoped to your business and workload.",
        scope: [
          { label: "Posts / week", value: "Tailored" },
          { label: "Platforms", value: "Tailored" },
          {
            label: "Reporting",
            value: "Monthly report + campaign insights",
          },
          { label: "Engagement", value: "Included (expanded)" },
          {
            label: "Strategy",
            value: "Monthly + campaign planning",
          },
        ],
        includes: [
          "communityEngagement",
          "strategySession",
          "contentOptimization",
          "shortFormVideo",
          "campaignSupport",
          "repurposing",
        ],
        badge: "Price Depends on Scope",
      },
    ],

    compare: {
      title: "Compare Packages",
      description: "A quick overview of what changes between tiers. Everything listed in “Included With Every Plan” applies to every plan.",
      scopeOrder: [
        "Posts / week",
        "Platforms",
        "Reporting",
        "Engagement",
        "Strategy",
      ],
      featureOrder: [
        "repurposing",
        "communityEngagement",
        "strategySession",
        "contentOptimization",
        "shortFormVideo",
        "campaignSupport",
      ],
    },

    faq: [
      {
        question: "What’s included with every plan?",
        answer: "Every plan includes onboarding alignment, content pillars, a rolling calendar, captions + basic hashtag research, scheduling/publishing, baseline performance tracking, and a clear approvals process. The tiers add capacity, optimisation, and deeper support.",
      },
      {
        question: "Do plans include paid ads or ad spend?",
        answer: "These plans focus on organic content and management. Paid ads (and ad spend) are scoped separately so you have clarity on costs and outcomes.",
      },
      {
        question: "Can I change plans later?",
        answer: "Yes. You can upgrade or adjust your plan as your needs change (more platforms, higher output, campaigns, or additional support).",
      },
      {
        question: "How do approvals and changes work?",
        answer: "You’ll review content before it goes live and send updates in one clear pass. Major direction shifts, new formats, or additional platforms are treated as additional scope to keep timelines and expectations clean.",
      },
    ],
  },

  "branding": {
    label: "Branding",

    meta: {
        title: "Branding Packages | Timeless Web",
        description: "Clear branding packages designed to help businesses look consistent, professional, and trustworthy across every touchpoint.",
    },

    hero: {
        title: "Branding Packages Built for Clarity and Consistency",
        description: "Our branding packages focus on creating a visual identity you can actually use — clean, consistent, and easy to apply across your business.",
    },

    included: {
        title: "Included With Every Branding Package",
        description: "Every branding project includes the core elements needed for a usable, professional identity. These aren’t add-ons — they’re the baseline for consistent branding.",
        items: [
        "Review of your existing branding and visual presence",
        "Logo inclusion with consistency improvements",
        "Defined colour palette with clear usage guidance",
        "Typography selection and hierarchy for readability",
        "Practical visual direction aligned with your business",
        "Clear handover so you know how to apply your branding correctly",
        ],
    },

    featureCatalog: [
        { id: "logoRefinement", label: "Logo refinement and variations" },
        { id: "brandGuidelines", label: "Expanded brand guidelines document" },
        { id: "socialAssets", label: "Social media asset set" },
        { id: "printAssets", label: "Print-ready assets (business cards, flyers)" },
        { id: "websiteAssets", label: "Website-ready branding assets" },
        { id: "brandStrategy", label: "Brand direction and positioning guidance" },
        { id: "visualSystem", label: "Extended visual system (icons, patterns, rules)" },
        { id: "brandRepositioning", label: "Brand repositioning (direction + messaging foundations)" },
        { id: "fullAssetRollout", label: "Full rollout across key touchpoints (web + social + print-ready set)" },
    ],

    revisions: {
        title: "How revisions work",
        description: "Branding revisions are handled through clear feedback rounds. You review concepts, provide consolidated feedback, and changes are applied together. Major direction changes or reworks are treated as new scope.",
    },

    tiers: [
        {
            id: "refresh",
            name: "Refresh",
            price: "$1,140",
            summary: "For businesses that need to clean up and realign their existing branding.",
            description: "Ideal if your brand already exists but feels inconsistent, outdated, or unclear across platforms.",
            scope: [
                { label: "Brand scope", value: "Visual cleanup and alignment" },
                { label: "Logo", value: "Refinement and consistency" },
                { label: "Visual system", value: "Core colours and typography" },
                { label: "Guidelines", value: "Basic usage guidance" },
                { label: "Assets", value: "Digital-ready files" },
            ],
            includes: ["logoRefinement"],
        },

        {
            id: "identity",
            name: "Identity",
            price: "$2,760",
            summary: "For businesses that want a complete, usable brand identity.",
            description: "A full visual identity designed to work consistently across web, social, and everyday business use.",
            scope: [
                { label: "Brand scope", value: "Complete visual identity" },
                { label: "Logo", value: "Full logo set and variations" },
                { label: "Visual system", value: "Defined and reusable system" },
                { label: "Guidelines", value: "Clear, reusable guide" },
                { label: "Assets", value: "Digital and social assets" },
            ],
            includes: [
                "logoRefinement",
                "brandGuidelines",
                "socialAssets",
                "websiteAssets",
            ],
            badge: "Most Popular",
        },

        {
            id: "system",
            name: "System",
            price: "$5,330",
            summary: "For businesses that need branding to scale and stay consistent.",
            description: "Designed for brands that want deeper clarity, stronger consistency, and a system that holds together as the business grows.",
            scope: [
                { label: "Brand scope", value: "Brand system with direction" },
                { label: "Logo", value: "Complete logo system" },
                { label: "Visual system", value: "Extended and flexible system" },
                { label: "Guidelines", value: "Detailed brand guide" },
                { label: "Assets", value: "Digital, social, and print assets" },
            ],
            includes: [
                "logoRefinement",
                "brandGuidelines",
                "socialAssets",
                "websiteAssets",
                "brandStrategy",
                "visualSystem",
            ],
        },

        {
            id: "reset",
            name: "Reset",
            price: "$8,000+",
            summary: "For businesses that need a significant change or realignment.",
            description: "A tailored branding reset for organisations that have outgrown their current identity or need a clear new direction.",
            scope: [
                { label: "Brand scope", value: "Tailored reset" },
                { label: "Logo", value: "Custom treatment or redesign" },
                { label: "Visual system", value: "Fully tailored system" },
                { label: "Guidelines", value: "Custom brand documentation" },
                { label: "Assets", value: "Tailored asset sets" },
            ],
            includes: [
                "logoRefinement",
                "brandGuidelines",
                "socialAssets",
                "printAssets",
                "websiteAssets",
                "brandStrategy",
                "visualSystem",
                "brandRepositioning",
                "fullAssetRollout",
            ],
            badge: "Price Depends on Scope",
        },
    ],

    compare: {
        title: "Compare Packages",
        description: "A simple overview of what changes between branding packages. Everything listed in “Included With Every Branding Package” applies to all tiers.",
        scopeOrder: [
            "Brand scope",
            "Logo",
            "Visual system",
            "Guidelines",
            "Assets",
        ],
        featureOrder: [
            "logoRefinement",
            "brandGuidelines",
            "socialAssets",
            "websiteAssets",
            "brandStrategy",
            "visualSystem",
            "printAssets",
            "brandRepositioning",
            "fullAssetRollout",
        ],
    },

    faq: [
        {
            question: "What’s included with every branding package?",
            answer: "Every package includes logo inclusion, colour and typography selection, visual direction, and practical guidance to ensure your branding is consistent and usable.",
        },
        {
            question: "Is this a full rebrand or a refresh?",
            answer: "That depends on the package. Refresh and Identity focus on improving and aligning what you already have, while System and Reset go deeper where more change is needed.",
        },
        {
            question: "Do all packages include a logo?",
            answer: "Yes. Logos are included in every branding package, either through refinement or a more complete system depending on the tier.",
        },
        {
            question: "When does brand strategy come into play?",
            answer: "Strategy elements are included in the higher tiers where deeper direction and alignment are required. Lower tiers focus on visual clarity and consistency.",
        },
        {
            question: "Can you apply branding to my website or marketing materials?",
            answer: "Yes. We can help apply your branding across websites, social media, and print materials where needed.",
        },
        {
            question: "How long does a branding project take?",
            answer: "Most branding projects take a few weeks, depending on scope and feedback timing.",
        },
    ],
  },

  "hosting": {
    label: "Hosting & Maintenance",

    meta: {
        title: "Hosting & Maintenance Packages | Timeless Web",
        description: "Reliable website hosting and maintenance packages designed to keep your site secure, stable, and up to date — without ongoing headaches.",
    },

    hero: {
        title: "Hosting & Maintenance That Just Works",
        description: "We keep your website running smoothly in the background — handling updates, monitoring, and maintenance so you don’t have to.",
    },

    included: {
        title: "Included With Every Hosting Package",
        description: "Every hosting package includes the essentials needed to keep your website online, secure, and maintained. These aren’t upgrades — they’re the baseline for responsible hosting.",
        items: [
            "Managed hosting environment for your website",
            "SSL configuration and HTTPS support",
            "Regular software and security updates",
            "Automated backups with restore support",
            "Uptime monitoring and basic issue alerts",
            "Email-based support for hosting and maintenance issues",
        ],
    },

    featureCatalog: [
        { id: "prioritySupport", label: "Priority support and faster response times" },
        { id: "extendedBackups", label: "Extended backup retention" },
        { id: "securityMonitoring", label: "Enhanced security monitoring" },
        { id: "performanceChecks", label: "Performance and optimisation checks" },
        { id: "smallFixes", label: "Small maintenance fixes included" },
        { id: "appHosting", label: "Managed web app hosting support" },
        { id: "multiProperty", label: "Multiple websites / properties" },
        { id: "stagingWorkflow", label: "Staging workflow for safer updates (where applicable)" },
        { id: "deploymentSupport", label: "Deployment support for web apps (where applicable)" },
    ],

    revisions: {
        title: "How maintenance requests work",
        description: "Maintenance requests are handled through a clear support process. Small fixes and adjustments are handled within scope. New features, redesigns, or development work are scoped separately.",
    },

    tiers: [
        {
            id: "essential",
            name: "Essential",
            price: "$69/mo",
            summary: "For simple business websites that need reliable hosting and basic maintenance.",
            description: "Covers the essentials to keep your site online, secure, and up to date — without unnecessary extras.",
            scope: [
                { label: "Coverage", value: "Single website" },
                { label: "Updates", value: "Core updates" },
                { label: "Backups", value: "Automated (standard retention)" },
                { label: "Monitoring", value: "Uptime monitoring" },
                { label: "Support", value: "Email support" },
            ],
            includes: [],
        },

        {
            id: "reliable",
            name: "Reliable",
            price: "$119/mo",
            summary: "For businesses that want extra care and faster issue handling.",
            description: "Adds priority support and deeper monitoring to reduce downtime and catch issues earlier.",
            scope: [
                { label: "Coverage", value: "Single website" },
                { label: "Updates", value: "Core + plugin updates" },
                { label: "Backups", value: "Automated (extended retention)" },
                { label: "Monitoring", value: "Uptime + basic performance checks" },
                { label: "Support", value: "Priority email support" },
            ],
            includes: [
                "prioritySupport",
                "extendedBackups",
                "performanceChecks",
            ],
            badge: "Most Popular",
        },

        {
            id: "secure",
            name: "Secure",
            price: "$189/mo",
            summary: "For businesses that rely on their website and want stronger protection.",
            description: "Designed for higher-traffic or more critical sites that need enhanced security and proactive maintenance.",
            scope: [
                { label: "Coverage", value: "Single website" },
                { label: "Updates", value: "Full updates + proactive checks" },
                { label: "Backups", value: "Automated with priority restore" },
                { label: "Monitoring", value: "Uptime, security, and performance" },
                { label: "Support", value: "Priority support + small fixes" },
            ],
            includes: [
                "prioritySupport",
                "extendedBackups",
                "securityMonitoring",
                "performanceChecks",
                "smallFixes",
            ],
        },

        {
            id: "complete",
            name: "Complete",
            price: "$299/mo",
            summary: "For businesses with advanced needs, including web apps or multiple properties.",
            description: "A flexible, higher-touch hosting and maintenance plan for complex setups, including managed web app hosting where appropriate.",
            scope: [
                { label: "Coverage", value: "Website(s) + web apps (where applicable)" },
                { label: "Updates", value: "Full updates + tailored maintenance" },
                { label: "Backups", value: "Custom backup strategy" },
                { label: "Monitoring", value: "Advanced monitoring and alerts" },
                { label: "Support", value: "Priority support with tailored scope" },
            ],
            includes: [
                "prioritySupport",
                "extendedBackups",
                "securityMonitoring",
                "performanceChecks",
                "smallFixes",
                "appHosting",
                "multiProperty",
                "stagingWorkflow",
                "deploymentSupport",
            ],
        },
    ],

    compare: {
        title: "Compare Packages",
        description: "A quick overview of what changes between hosting tiers. Everything listed in “Included With Every Hosting Package” applies to all plans.",
        scopeOrder: [
            "Coverage",
            "Updates",
            "Backups",
            "Monitoring",
            "Support",
        ],
        featureOrder: [
            "prioritySupport",
            "extendedBackups",
            "performanceChecks",
            "securityMonitoring",
            "smallFixes",
            "appHosting",
            "multiProperty",
            "stagingWorkflow",
            "deploymentSupport",
        ],
    },

    faq: [
        {
            question: "Does hosting include website changes or new features?",
            answer: "No. Hosting and maintenance cover keeping your site running, updated, and secure. New features, design changes, or content updates are scoped separately.",
        },
        {
            question: "Can you host my existing website?",
            answer: "Yes. We can migrate your existing site to our hosting setup and handle the transition smoothly.",
        },
        {
            question: "Do you support web apps?",
            answer: "Web app hosting is available in higher tiers where requirements vary. We’ll assess your app and confirm the best setup before proceeding.",
        },
        {
            question: "What happens if something breaks?",
            answer: "If an issue occurs, we’re notified and investigate. Covered fixes are handled within your plan; larger issues are scoped clearly before any work begins.",
        },
        {
            question: "Is this suitable for small businesses?",
            answer: "Yes. These packages are designed for small and growing businesses that want reliable hosting without technical overhead.",
        },
    ],
  },

  "ai-automation": {
    label: "AI Automation",

    meta: {
        title: "AI Automation Packages | Timeless Web",
        description: "Practical AI automation packages designed to reduce repetitive work, streamline workflows, and save time — without removing human oversight.",
    },

    hero: {
        title: "AI Automation Built for Everyday Workflows",
        description: "We design AI-assisted automations that handle repetitive tasks while keeping you in control. No black boxes, no guesswork — just practical systems that save time.",
    },

    included: {
        title: "Included With Every AI Automation Package",
        description: "Every automation we build follows the same responsible foundation. These aren’t upgrades — they’re required to ensure the automation is useful, reliable, and safe.",
        items: [
            "Workflow review to identify automation opportunities",
            "Automation logic design aligned to your existing processes",
            "Integration with your current tools and systems where possible",
            "AI-assisted handling with clear human review points",
            "Testing and validation before handover",
            "Clear documentation and handover guidance",
        ],
    },

    featureCatalog: [
        { id: "multiWorkflow", label: "Multiple automated workflows" },
        { id: "toolIntegrations", label: "Cross-tool integrations" },
        { id: "approvalLayers", label: "Approval and review layers" },
        { id: "errorHandling", label: "Error handling and fallback logic" },
        { id: "dataHandling", label: "Structured data handling and routing" },
        { id: "advancedAutomation", label: "Advanced or multi-step automations" },
        { id: "businessCritical", label: "Business-critical workflow automation" },
        { id: "customSafeguards", label: "Custom safeguards and escalation logic" },
        { id: "orgWideAutomation", label: "Organisation-wide automation design" },
    ],

    revisions: {
        title: "How changes work",
        description: "Automation changes are handled through structured revisions. You review behaviour, outputs, and logic together. New workflows or expanded scope are treated as additional work.",
    },

    tiers: [
        {
            id: "assist",
            name: "Assist",
            price: "$640",
            summary: "For simple, low-risk automations that remove repetitive admin.",
            description: "Ideal for automating a single workflow such as form handling, email sorting, or basic internal admin.",
            scope: [
                { label: "Workflows", value: "1 workflow" },
                { label: "Systems", value: "Single tool or input source" },
                { label: "AI usage", value: "Assisted, human-reviewed" },
                { label: "Error handling", value: "Basic safeguards" },
                { label: "Handover", value: "Documentation and walkthrough" },
            ],
            includes: [],
        },

        {
            id: "automate",
            name: "Automate",
            price: "$1,380",
            summary: "For businesses ready to automate multiple connected tasks.",
            description: "Supports several workflows working together to reduce manual effort across common processes.",
            scope: [
                { label: "Workflows", value: "Up to 3 workflows" },
                { label: "Systems", value: "Multiple connected tools" },
                { label: "AI usage", value: "Assisted with clear review points" },
                { label: "Error handling", value: "Defined fallbacks" },
                { label: "Handover", value: "Documentation and training" },
            ],
            includes: [
                "multiWorkflow",
                "toolIntegrations",
                "errorHandling",
            ],
            badge: "Most Popular",
        },

        {
            id: "orchestrate",
            name: "Orchestrate",
            price: "$2,940",
            summary: "For deeper automation across teams or business functions.",
            description: "Designed for workflows that span multiple systems, require approvals, or handle structured data.",
            scope: [
                { label: "Workflows", value: "Multiple, interconnected workflows" },
                { label: "Systems", value: "Cross-system automation" },
                { label: "AI usage", value: "Assisted with approval layers" },
                { label: "Error handling", value: "Advanced safeguards and routing" },
                { label: "Handover", value: "Detailed documentation and guidance" },
            ],
            includes: [
                "multiWorkflow",
                "toolIntegrations",
                "approvalLayers",
                "errorHandling",
                "dataHandling",
            ],
        },

        {
            id: "tailored",
            name: "Tailored",
            price: "$4,800+",
            summary: "For complex or business-specific automation needs.",
            description: "A flexible automation build designed around your workflows, systems, and risk considerations.",
            scope: [
                { label: "Workflows", value: "Tailored to your business" },
                { label: "Systems", value: "Custom integrations" },
                { label: "AI usage", value: "Assisted with bespoke controls" },
                { label: "Error handling", value: "Custom logic and safeguards" },
                { label: "Handover", value: "Tailored documentation and training" },
            ],
            includes: [
                "multiWorkflow",
                "toolIntegrations",
                "approvalLayers",
                "errorHandling",
                "dataHandling",
                "advancedAutomation",
                "businessCritical",
                "customSafeguards",
                "orgWideAutomation",
            ],
            badge: "Price Depends on Scope",
        },
    ],

    compare: {
        title: "Compare Packages",
        description: "A simple overview of how automation complexity increases across tiers. Every package includes responsible design and human oversight.",
        scopeOrder: [
            "Workflows",
            "Systems",
            "AI usage",
            "Error handling",
            "Handover",
        ],
        featureOrder: [
            "multiWorkflow",
            "toolIntegrations",
            "errorHandling",
            "approvalLayers",
            "dataHandling",
            "advancedAutomation",
            "businessCritical",
            "customSafeguards",
            "orgWideAutomation",
        ],
    },

    faq: [
        {
            question: "Is this fully automated or supervised?",
            answer: "All automations are designed with human oversight. AI assists with tasks, but you remain in control of decisions and outputs.",
        },
        {
            question: "What kinds of workflows can be automated?",
            answer: "Common examples include form handling, email processing, internal admin tasks, data routing, and reporting workflows.",
        },
        {
            question: "Do you replace staff or decision-making?",
            answer: "No. Our automations are designed to support people by reducing repetitive work, not replace roles or judgment.",
        },
        {
            question: "Do you offer ongoing monitoring or support?",
            answer: "Ongoing monitoring and adjustments can be provided as an optional follow-up service with a fixed monthly cost, depending on your needs.",
        },
        {
            question: "Do I need special software?",
            answer: "In most cases, no. We work with the tools you already use and only recommend additions where they clearly add value.",
        },
        {
            question: "Is AI automation suitable for small businesses?",
            answer: "Yes. AI automation is often most valuable for small businesses looking to save time and reduce repetitive admin.",
        },
    ],
  }
};