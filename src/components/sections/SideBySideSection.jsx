"use client";

import Image from "next/image";
import clsx from "clsx";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

export default function SideBySideSection({
    title,
    subtitle,
    description,
    listItems = [],
    imageSrc,
    imageAlt,
    reverse = false,
    showNumbers = false, // For "How It Works" steps
    className = "py-20 overflow-hidden bg-white",
}) {
    return (
        <section className={className}>
            <div className="container mx-auto px-4 max-w-[1280px]">
                <div
                    className={clsx(
                        "flex flex-col lg:flex-row items-center gap-12 lg:gap-20",
                        reverse && "lg:flex-row-reverse"
                    )}
                >
                    {/* Text Content */}
                    <motion.div
                        className="flex-1 w-full lg:w-1/2"
                        initial={{ opacity: 0, x: reverse ? 50 : -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        {subtitle && (
                            <span className="text-purple-600 font-semibold tracking-wide uppercase text-sm mb-2 block">
                                {subtitle}
                            </span>
                        )}
                        <h2 className="text-3xl md:text-4xl font-headings font-bold text-gray-900 mb-6">
                            {title}
                        </h2>
                        {description && (
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                {description}
                            </p>
                        )}

                        {listItems.length > 0 && (
                            <ul className="space-y-6">
                                {listItems.map((item, index) => (
                                    <li key={index} className="flex items-start gap-4">
                                        <div className="flex-shrink-0 mt-1">
                                            {showNumbers ? (
                                                <span className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-purple-200 text-purple-600 font-bold text-sm">
                                                    {String(index + 1).padStart(2, '0')}
                                                </span>
                                            ) : (
                                                <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                                                    {item.icon ? (
                                                        item.icon
                                                    ) : (
                                                        <svg
                                                            className="w-4 h-4"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth={2}
                                                                d="M5 13l4 4L19 7"
                                                            />
                                                        </svg>
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                        <div>
                                            {item.title && (
                                                <h4 className="text-xl text-gray-700 mb-1 font-headings">
                                                    {item.title}
                                                </h4>
                                            )}
                                            {/* Handle both string items and object items with description */}
                                            {typeof item === 'string' ? (
                                                <p className="text-gray-700 font-normal">{item}</p>
                                            ) : (
                                                item.description && (
                                                    <p className="text-gray-600 leading-relaxed">
                                                        {item.description}
                                                    </p>
                                                )
                                            )}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </motion.div>

                    {/* Image Content */}
                    <motion.div
                        className="flex-1 w-full lg:w-1/2 relative"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src={imageSrc}
                                alt={imageAlt}
                                width={600}
                                height={600}
                                className="w-full h-auto object-cover"
                            />
                        </div>
                        {/* Decorative elements could go here */}
                    </motion.div>
                </div>
            </div>
        </section >
    );
}

SideBySideSection.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    description: PropTypes.string,
    listItems: PropTypes.array,
    imageSrc: PropTypes.string.isRequired,
    imageAlt: PropTypes.string.isRequired,
    reverse: PropTypes.bool,
    showNumbers: PropTypes.bool,
};
