export const menus = [
	{ id: "home", label: "Home", href: "/" },

	{
		id: "services",
		label: "Services",
		href: "/services",
		children: [
		{
			id: "web-development",
			label: "Web Development",
			synopsis: "High-converting websites",
			icon: "faGlobe",
			href: "/services/web-design",
		},
		{
			id: "app-development",
			label: "App Development",
			synopsis: "Tools that streamline work",
			icon: "faGears",
			href: "/services/app-design",
		},
		{
			id: "digital-marketing",
			label: "Digital Marketing",
			synopsis: "Steady visibility & trust",
			icon: "faChartLine",
			href: "/services/digital-marketing",
		},
		{
			id: "branding",
			label: "Branding",
			synopsis: "Look consistent everywhere",
			icon: "faPalette",
			href: "/services/branding",
		},
		{
			id: "hosting",
			label: "Hosting & Maintenance",
			synopsis: "Reliable, worry-free upkeep",
			icon: "faServer",
			href: "/services/hosting",
		},
		{
			id: "ai-automation",
			label: "AI Automation",
			synopsis: "Automate repetitive admin",
			icon: "faRobot",
			href: "/services/ai-automation",
		},
		],
	},

	{
		id: "packages",
		label: "Packages",
		href: "/packages",
		children: [
		{
			id: "web-development",
			label: "Web Development",
			synopsis: "Website package tiers",
			icon: "faGlobe",
			href: "/packages/web-design",
		},
		{
			id: "app-development",
			label: "App Development",
			synopsis: "App build tiers",
			icon: "faGears",
			href: "/packages/app-design",
		},
		{
			id: "digital-marketing",
			label: "Digital Marketing",
			synopsis: "Monthly marketing plans",
			icon: "faChartLine",
			href: "/packages/digital-marketing",
		},
		{
			id: "branding",
			label: "Branding",
			synopsis: "Brand identity tiers",
			icon: "faPalette",
			href: "/packages/branding",
		},
		{
			id: "hosting",
			label: "Hosting & Maintenance",
			synopsis: "Hosting & upkeep plans",
			icon: "faServer",
			href: "/packages/hosting",
		},
		{
			id: "ai-automation",
			label: "AI Automation",
			synopsis: "Automation package tiers",
			icon: "faRobot",
			href: "/packages/ai-automation",
		},
		],
	},

	{ id: "blog", label: "Blog", href: "/blog" }
];