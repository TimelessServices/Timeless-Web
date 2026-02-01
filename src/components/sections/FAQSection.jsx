"use client";

import Accordion from "@/components/ui/Accordion";

const faqs = [
    {
        title: "What's included?",
        content: "Our web design packages include everything you need to get started: custom design, mobile responsiveness, SEO optimization, and content integration.",
    },
    {
        title: "What if I don't like the design?",
        content: "We work closely with you during the design phase. You'll get multiple revisions to ensure the final product matches your vision perfectly.",
    },
    {
        title: "Can I add more to the website?",
        content: "Absolutely. Our websites are built to scale. You can add new pages, features, or integrations at any time.",
    },
    {
        title: "What if I need to change a text later?",
        content: "You'll have full access to a user-friendly CMS (Content Management System) that allows you to edit text and images easily without coding.",
    },
    {
        title: "Can you help with hosting and domain setup?",
        content: "Yes, we handle all the technical details including hosting setup, domain connection, and SSL security configuration.",
    },
    {
        title: "What if I don't have content (photos, text, etc.)?",
        content: "No problem. We can provide professional copywriting services and stock photography, or guide you on how to create your own content.",
    },
];

export default function FAQSection() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 max-w-[1280px]">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-headings font-bold text-gray-900 mb-4">
                        FAQ
                    </h2>
                </div>
                <Accordion items={faqs} />
            </div>
        </section>
    );
}
