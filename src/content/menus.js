export const menus = [
  { id: "home", label: "Home", href: "/" },

  {
    id: "services",
    label: "Services",
    href: "/services",
    children: [
      { id: "web-design", label: "Web Design", href: "/services/web-design" },
      { id: "app-design", label: "App Design", href: "/services/app-design" },
      { id: "digital-marketing", label: "Digital Marketing", href: "/services/digital-marketing" },
      { id: "branding", label: "Branding", href: "/services/branding" },
      { id: "hosting", label: "Hosting", href: "/services/hosting" },
      { id: "ai-automation", label: "AI Automation", href: "/services/ai-automation" },
    ],
  },

  {
    id: "packages",
    label: "Packages",
    href: "/packages",
    children: [
      { id: "web-design", label: "Web Design", href: "/packages/web-design" },
      { id: "app-design", label: "App Design", href: "/packages/app-design" },
      { id: "digital-marketing", label: "Digital Marketing", href: "/packages/digital-marketing" },
      { id: "branding", label: "Branding", href: "/packages/branding" },
      { id: "hosting", label: "Hosting", href: "/packages/hosting" },
      { id: "ai-automation", label: "AI Automation", href: "/packages/ai-automation" },
    ],
  },

  { id: "blog", label: "Blog", href: "/blog" },
];