"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function ServiceHero({ title, subtitle, description }) {
    const router = useRouter();
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulating submission for now (replace with actual Formsubmission logic later)
        try {
            const response = await fetch("https://api.formspark.io/k2BmGYeHC", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    ...form,
                    // Mapping fields to match main contact form expectations if needed
                    firstName: form.name.split(' ')[0],
                    lastName: form.name.split(' ').slice(1).join(' '),
                    contact: form.email,
                    reason: "Quick Quote Request from Service Page",
                }),
            });

            if (response.ok) {
                router.push("/thank-you");
            }
        } catch (error) {
            console.error("Submission failed", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="relative w-full bg-[#9810fa] pt-32 pb-24 px-4 overflow-hidden">
            {/* Abstract Shapes/Background elements can go here */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-24 -left-24 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
                <div className="absolute top-0 -right-4 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
            </div>

            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10 max-w-[1280px]">
                {/* Left Content */}
                <div className="text-white text-center lg:text-left">
                    <h1 className="font-headings font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
                        {title}
                    </h1>
                    <p className="font-text text-lg text-purple-100 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                        {description}
                    </p>
                </div>

                {/* Right Form Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 max-w-md mx-auto w-full"
                >
                    <h3 className="font-headings font-bold text-2xl text-gray-900 mb-6 text-center">
                        Get A Free Quote
                    </h3>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                className="w-full bg-gray-50 border border-gray-200 rounded px-4 py-3 outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all"
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                className="w-full bg-gray-50 border border-gray-200 rounded px-4 py-3 outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all"
                            />
                        </div>
                        <div>
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Phone Number"
                                value={form.phone}
                                onChange={handleChange}
                                className="w-full bg-gray-50 border border-gray-200 rounded px-4 py-3 outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all"
                            />
                        </div>
                        <div>
                            <textarea
                                name="message"
                                placeholder="Message"
                                rows="3"
                                value={form.message}
                                onChange={handleChange}
                                className="w-full bg-gray-50 border border-gray-200 rounded px-4 py-3 outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all resize-none"
                            ></textarea>
                        </div>
                        <Button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-[#9810fa] hover:bg-[#860de0] text-white font-bold py-4 rounded shadow-lg hover:shadow-xl transition-all"
                        >
                            {isSubmitting ? "Submitting..." : "Submit"}
                        </Button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}

// Default Props
ServiceHero.defaultProps = {
    title: "Expert Web Design Services For Growing Businesses",
    description: "At Timeless Web, we build websites that do more than look good. We maximize functionality and drive conversions, turning visitors into loyal customers.",
};
