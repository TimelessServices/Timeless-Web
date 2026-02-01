"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ProcessSection() {
    const steps = [
        {
            number: "01",
            title: "Fill Out The Form",
            description: "Tell us about your business, what you do, and who you serve. Share examples of sites you like (or hate). We'll confirm everything and get started.",
        },
        {
            number: "02",
            title: "We'll Build Your Site",
            description: "We'll create a conversion-focused website that showcases your work, speaks to your audience, and gets customers to take action. You'll review and request changes before launch.",
        },
        {
            number: "03",
            title: "Go Live & Start Growing",
            description: "Your professional website goes live. Now you can confidently send customers your link, run ads, and watch the leads roll in.",
        },
    ];

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4 max-w-[1280px]">
                <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">

                    {/* Left Column: Title + Steps */}
                    <div className="w-full lg:w-1/2">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-4xl font-headings font-bold text-gray-900 mb-12"
                        >
                            How It Works:
                        </motion.h2>

                        <div className="space-y-12">
                            {steps.map((step, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex flex-col items-start text-left"
                                >
                                    <span className="text-3xl font-medium font-display text-purple-600 mb-2">
                                        {step.number}
                                    </span>
                                    <h3 className="text-xl font-medium font-headings text-gray-800 mb-3">
                                        {step.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed max-w-lg">
                                        {step.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Illustration */}
                    <motion.div
                        className="w-full lg:w-1/2 flex items-center justify-center relative mt-12 lg:mt-0"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        {/* Placeholder for sticking the image. Using the one we generated before. */}
                        <div className="relative w-full max-w-lg">
                            <Image
                                src="/services/web-design/how-it-works.png"
                                alt="Web Design Process Illustration"
                                width={600}
                                height={600}
                                className="w-full h-auto object-contain"
                            />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
