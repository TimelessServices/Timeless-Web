// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                headings: "var(--font-headings)",
                body: "var(--font-text)",
                display: "var(--font-display)",
            },
        },
    },
    plugins: [require("@tailwindcss/typography")],
};
