"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import PropTypes from "prop-types";
import clsx from "clsx";

const AccordionItem = ({ title, content, isOpen, onClick }) => {
    return (
        <div className="border-b border-gray-200 last:border-0">
            <button
                className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
                onClick={onClick}
            >
                <span className={clsx("text-xl font-semibold transition-colors font-headings", isOpen ? "text-purple-600" : "text-gray-900 group-hover:text-purple-600")}>
                    {title}
                </span>
                <ChevronDown
                    className={clsx(
                        "w-5 h-5 text-gray-400 transition-transform duration-300",
                        isOpen && "transform rotate-180 text-purple-600"
                    )}
                />
            </button>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className="pb-6 text-gray-600 leading-relaxed">
                            {content}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

AccordionItem.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.node.isRequired,
    isOpen: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default function Accordion({ items, allowMultiple = false }) {
    const [openIndexes, setOpenIndexes] = useState([0]); // Default first one open

    const toggleItem = (index) => {
        if (allowMultiple) {
            setOpenIndexes((prev) =>
                prev.includes(index)
                    ? prev.filter((i) => i !== index)
                    : [...prev, index]
            );
        } else {
            setOpenIndexes((prev) => (prev.includes(index) ? [] : [index]));
        }
    };

    return (
        <div className="w-full max-w-3xl mx-auto bg-white rounded-2xl px-6 sm:px-8">
            {items.map((item, index) => (
                <AccordionItem
                    key={index}
                    title={item.title}
                    content={item.content}
                    isOpen={openIndexes.includes(index)}
                    onClick={() => toggleItem(index)}
                />
            ))}
        </div>
    );
}

Accordion.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            content: PropTypes.node.isRequired,
        })
    ).isRequired,
    allowMultiple: PropTypes.bool,
};
