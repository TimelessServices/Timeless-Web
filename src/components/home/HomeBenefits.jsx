"use client";
import { motion } from "framer-motion";
import { AppWindowMac, Cog, GlobeLock } from "lucide-react";

export function HomeBenefits() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
            },
        },
    };

    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="flex flex-col items-center justify-center bg-slate-50 py-32"
        >
            <div className="w-full max-w-[80%] flex flex-col items-center h-auto">
                <div className="flex flex-col gap-8">
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col items-center gap-2 mb-10"
                    >
                        <div className="bg-purple-100 text-purple-600 font-semibold text-sm px-4 py-1 rounded-full mb-2">
                            What We Do
                        </div>
                        <h2 className="text-3xl font-headings font-bold text-gray-800 lg:text-4xl text-center">
                            We Handle the Tech, So You Don&apos;t Have To.
                        </h2>
                        <p className="font-text text-lg text-cente text-gray-600">
                            You're busy running a business, so let us handle the
                            setup, updates, and security so you can stay focused
                            on growth.
                        </p>
                    </motion.div>
                    <motion.div
                        variants={containerVariants}
                        className="grid grid-cols-1 gap-y-12 grid-rows-1 gap-x-4 lg:gap-x-12 xl:grid-cols-3 lg:grid-cols-2"
                    >
                        <motion.div
                            variants={itemVariants}
                            className="border-purple-600 bg-white shadow-xl border flex flex-col items-center justify-center px-8 py-12 min-h-80 rounded-xl"
                        >
                            <AppWindowMac className="w-12 h-12 text-purple-600" />
                            <h3 className="font-medium font-headings text-2xl text-center mt-2">
                                Hosting
                            </h3>
                            <p className="font-text text-center  pt-4">
                                Your site runs 24/7 with 99% uptime. Fast,
                                reliable, always online.
                            </p>
                        </motion.div>
                        <motion.div
                            variants={itemVariants}
                            className="border-purple-600  bg-white shadow-xl border flex flex-col items-center justify-center px-8 py-12 rounded-xl"
                        >
                            <Cog className="w-12 h-12 text-purple-600" />
                            <h3 className="font-medium font-headings text-2xl text-center mt-2">
                                Maintenance
                            </h3>
                            <p className="font-text text-center pt-4">
                                We manage updates, backups, and tweaks. No tech
                                headaches for you.
                            </p>
                        </motion.div>
                        <motion.div
                            variants={itemVariants}
                            className="border-purple-600  bg-white shadow-xl border flex flex-col items-center justify-center px-8 py-12 rounded-xl"
                        >
                            <GlobeLock className="w-12 h-12 text-purple-600" />
                            <h3 className="font-medium font-headings text-2xl text-center mt-2">
                                Security
                            </h3>
                            <p className="font-text text-center  pt-4">
                                Enterprise-grade security to protect your site
                                from hackers and downtime.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
}