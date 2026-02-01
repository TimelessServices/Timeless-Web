"use client";

import { Send, MousePointerClick, Layout } from "lucide-react"; // Using Lucide icons as placeholders
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faUserCheck, faLaptopCode } from "@fortawesome/free-solid-svg-icons";

export default function WhyWorkWithUs({ className = "py-24 bg-white" }) {
    const features = [
        {
            icon: faPaperPlane,
            title: "Ready To Convert",
            description: "We build websites designed to turn visitors into paying customers.",
        },
        {
            icon: faUserCheck,
            title: "Don't Lose Customers",
            description: "A fast, professional site builds trust instantly with your audience.",
        },
        {
            icon: faLaptopCode,
            title: "Look Professional Online",
            description: "Stand out from competitors with a premium, custom design.",
        },
    ];

    return (
        <section className={className}>
            <div className="container mx-auto px-4 max-w-[1280px]">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-headings font-bold text-gray-900">
                        Why Work With Us
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto">
                    {features.map((feature, index) => (
                        <div key={index} className="flex flex-col items-center text-center">
                            <div className="w-20 h-20 bg-[#9810fa] rounded-2xl flex items-center justify-center mb-6 shadow-lg transition-transform duration-300">
                                <FontAwesomeIcon icon={feature.icon} className="text-white text-3xl" />
                            </div>
                            <h3 className="text-xl font-bold font-headings text-gray-900 mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed max-w-xs mx-auto">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
